import { orderService } from '@/services/order-service.js';
import { userService } from '@/services/user-service.js';
import {
  socketService,
  SOCKET_EVENT_ORDER_UPDATED,
  SOCKET_EMIT_ORDER_WATCH,
  SOCKET_EVENT_USER_UPDATED,
} from '@/services/socket.service.js';

export default {
  state: {
    orders: [],
  },
  getters: {
    orders(state) {
      return state.orders;
    },
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders;
    },
    updateOrder(state, { order }) {
      const idx = state.orders.findIndex((o) => o._id === order._id);
      state.orders.splice(idx, 1, order);
    },
    addOrder(state, { order }) {
      state.orders.push(order);
    },
    addOrderToUser(state, { user, order }) {
      user.orders.push(order);
    },
  },
  actions: {
    async loadOrders({ commit }) {
      try {
        const orders = await orderService.query();
        commit({ type: 'setOrders', orders });
        return orders;
      } catch (err) {
        console.log('Failed to load orders', err);
        throw err;
      }
    },
    async saveOrder({ commit, dispatch, rootGetters }, { order, stay }) {
      try {
        const type = order._id ? 'updateOrder' : 'addOrder';
        const user = rootGetters.loggedinUser;
        const miniStay = {
          _id: stay._id,
          name: stay.name,
          price: stay.price,
          country: stay.loc.address,
        };
        order.stay = miniStay;
        order.host = stay.host;
        const savedOrder = await orderService.save(order);
        await dispatch({ type: 'watchOrder', order: savedOrder });
        commit({ type, order: savedOrder });
        await userService.update(user, false);
        socketService.emit(SOCKET_EVENT_USER_UPDATED, savedOrder);
        const host = await userService.getById(savedOrder.host._id);
        delete savedOrder.host;
        commit({ type: 'addOrderToUser', user: host, order: savedOrder });
        await userService.update(host, true);
        return savedOrder;
      } catch (err) {
        console.log('Failed to save order', err);
        throw err;
      }
    },
    async updateOrderStatus({ commit, rootGetters }, { order, newStatus }) {
      try {
        order.status = newStatus;
        await orderService.save(order);
        socketService.emit(SOCKET_EVENT_ORDER_UPDATED, order);
        commit({ type: 'updateOrder', order: order });
        const user = rootGetters.loggedinUser;
        const idx = user.orders.findIndex((o) => o._id === order._id);
        user.orders.splice(idx, 1, order);
        await userService.update(user, true);
        const buyer = await userService.getById(order.buyer._id);
        const orderCopy = JSON.parse(JSON.stringify(order));
        delete orderCopy.buyer;
        buyer.orders.splice(idx, 1, orderCopy);
        await userService.update(buyer, false);
        return order;
      } catch (err) {
        console.log('Failed to save order', err);
        throw err;
      }
    },
    watchOrder({ commit, rootGetters }, { order }) {
      console.log('before update', rootGetters.loggedinUser);
      socketService.emit(SOCKET_EMIT_ORDER_WATCH, order);
      socketService.off(SOCKET_EVENT_ORDER_UPDATED);
      socketService.on(SOCKET_EVENT_ORDER_UPDATED, (order) => {
        console.log('after update', rootGetters.loggedinUser);
        commit({ type: 'updateOrder', order });
        showMsg(`your order status was updated to ${order.status}`);
      });
    },
  },
};
