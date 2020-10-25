import Vue from 'vue';
// @ts-ignore
import VueMathjax from 'vue-mathjax';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.use(VueMathjax);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
