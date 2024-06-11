import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import ServerTask from './ServerTask.vue'

Vue.component('home-comp',Home)
Vue.component('server-task',ServerTask)

new Vue({
  el: '#app',
  render: h => h(App)
})
