// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import CoreuiVue from '@coreui/vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;
Vue.use(CoreuiVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
