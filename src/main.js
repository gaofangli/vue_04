
// import "babel-polyfill";
// import promise from "es6-promise";
// promise.polyfill();
import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
import 'vant/lib/index.css';
import Vconsole from 'vconsole'


Vue.use(Vant);
Vue.config.productionTip = false
// import { Locale } from 'vant';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
const vConsole = new Vconsole()
Vue.use(vConsole)
Vue.use(ElementUI);
// const messages = {
//   'zh-CN': {
//     vanPicker: {
//       confirm: '关闭', // 将'确认'修改为'关闭'
//     },
//   },
// };

// Locale.add(messages);
new Vue({
  render: h => h(App),
}).$mount('#app')
