import Vue from 'vue'
import App from './App.vue'

import MyArticle from "./components/MyArticle/main.js";
Vue.use(MyArticle);

new Vue({
  el: '#app',
  render: h => h(App)
})
