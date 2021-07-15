import Vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/styles.scss'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(require('vue-moment'))
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyCfm1LKS_iiah-t54R0JBYlfmPkEk5AYBA',
		libraries: 'places',
	},
})

new Vue({
	router,
	store,
	render: h => h(app),
}).$mount('#app')
