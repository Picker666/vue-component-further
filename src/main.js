import Vue from 'vue'
import App from './App.vue';
import BaseCheckbox from './common/BaseCheckbox';
import BaseInputBox from './common/BaseInputBox';

Vue.config.productionTip = false;
Vue.component('base-checkbox', BaseCheckbox);
Vue.component('base-input-box', BaseInputBox);

new Vue({
  render: h => h(App),
}).$mount('#app')
