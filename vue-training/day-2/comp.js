Vue.component('my-comp',{
    data: function(){
        return{
            status: 'Running'
        }
    },
    template: '<p> Server Status {{this.status}}!!  <button @click="stop"> Change Server Status </button> </p>',
    methods:{
        stop: function(){
            this.status = 'Stopped'
        }
    }
})

new Vue({
    el :'#app',
})