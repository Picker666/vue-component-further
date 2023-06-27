import Vue from 'vue'
import App from './App.vue';
import BaseCheckbox from './common/BaseCheckbox';
import BaseInputBox from './common/BaseInputBox';
import BaseLink from './common/BaseLink';

Vue.config.productionTip = false;
Vue.component('base-checkbox', BaseCheckbox);
Vue.component('base-input-box', BaseInputBox);
Vue.component('base-link', BaseLink);

new Vue({
  render: h => h(App),
}).$mount('#app')
