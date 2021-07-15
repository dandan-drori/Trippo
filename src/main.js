import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/styles.scss';
import locale from "element-ui/lib/locale/lang/en";
Vue.config.lang = 'en';

Vue.config.productionTip = false
Vue.use(Element, { locale });
new Vue({
	router,
	store,
	render: h => h(app),
}).$mount('#app')
