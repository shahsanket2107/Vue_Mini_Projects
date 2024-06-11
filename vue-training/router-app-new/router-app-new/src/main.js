
import { createApp } from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import Vue from 'vue'
import { routes } from './routes';

Vue.filter('to-lowercase', function(value) {
    if (!value) return '';
    return value.toString().toLowerCase();
});


Vue.directive('highlight',{
    bind(el,binding){
        // el.style.backgroundColor=binding.value
    var delay=0
    if(binding.modifiers['delayed']){
        delay=3000
    }
    setTimeout(()=>{
        if(binding.arg=='background'){
            el.style.backgroundColor=binding.value
        }else{
            el.style.color = binding.value
        }
    },delay)
    
}
})

Vue.use(VueRouter)
const router=new VueRouter({
    
    routes,
    mode:'history'
})
new Vue({
    el:'#app',
    router,
    render:h =>h(App)
})