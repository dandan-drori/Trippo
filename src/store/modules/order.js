import { orderService } from '@/services/order-service.js';
import { showMsg } from '@/services/event-bus.service.js';
import {
  socketService,
  SOCKET_EVENT_ORDER_UPDATED,
  SOCKET_EMIT_ORDER_WATCH,
  SOCKET_EMIT_ORDER_ADDED_WATCH,
  SOCKET_EVENT_ORDER_ADDED,
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
        const miniStay = {
          _id: stay._id,
          name: stay.name,
          price: stay.price,
          country: stay.loc.address,
        };
        order.stay = miniStay;
        order.host = stay.host;
        order.buyer = rootGetters.loggedinUser;
        const savedOrder = await orderService.save(order);
        await dispatch({ type: 'watchOrderAdded', orderId: savedOrder._id });
        commit({ type, order: savedOrder });
        socketService.emit(SOCKET_EVENT_ORDER_ADDED);
        await dispatch({ type: 'watchOrder', order: savedOrder });
        return savedOrder;
      } catch (err) {
        console.log('Failed to save order', err);
        throw err;
      }
    },
    async updateOrderStatus({ commit }, { order, newStatus }) {
      try {
        order.status = newStatus;
        const savedOrder = await orderService.save(order);
        commit({ type: 'updateOrder', order: savedOrder });
        socketService.emit(SOCKET_EVENT_ORDER_UPDATED);
        return order;
      } catch (err) {
        console.log('Failed to save order', err);
        throw err;
      }
    },
    async watchOrderAdded({ commit, rootGetters, getters }, { orderId }) {
      socketService.emit(SOCKET_EMIT_ORDER_ADDED_WATCH, orderId);
      socketService.off(SOCKET_EVENT_ORDER_ADDED);
      socketService.on(SOCKET_EVENT_ORDER_ADDED, async () => {
        const order = getters.orders[getters.orders.length - 1];
        if (order.buyer._id === rootGetters.loggedinUser._id) {
          // commit({ type: 'addOrder', order })
          await dispatch({ type: 'loadOrders' });
          showMsg(`new order from ${order.buyer.fullname}`);
        }
      });
    },
    async watchOrder({ commit }, { order }) {
      socketService.emit(SOCKET_EMIT_ORDER_WATCH, order._id);
      socketService.off(SOCKET_EVENT_ORDER_UPDATED);
      socketService.on(SOCKET_EVENT_ORDER_UPDATED, async () => {
        // commit({ type: 'updateOrder', order })
        await dispatch({ type: 'loadOrders' });
        showMsg(`your order status was updated to ${order.status}`);
      });
    },
  },
};
