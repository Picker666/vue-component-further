import Vue from 'vue'
import App from './App.vue';
import BaseCheckbox from './common/BaseCheckbox';
import BaseInputBox from './common/BaseInputBox';
import BaseLink from './common/BaseLink';
import ErrorComponent from './common/ErrorComponent';
import LoadingComponent from './common/LoadingComponent';

Vue.config.productionTip = false;
Vue.component('base-checkbox', BaseCheckbox);
Vue.component('base-input-box', BaseInputBox);
Vue.component('base-link', BaseLink);
Vue.component('async-example', function (resolve) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async, global!</div>'
    })
  }, 1000)
});
Vue.component('ErrorComponent', ErrorComponent);
Vue.component('LoadingComponent', LoadingComponent);

new Vue({
  render: h => h(App),
}).$mount('#app')
