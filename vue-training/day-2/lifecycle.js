new Vue({
    el:'#app',
    data:{
        title:'Lifecycle demo'
    },
    beforeCreate(){
        console.log("in before create");
    },
    created(){
        console.log("in  create");
    },
    beforeMount(){
        console.log("in before mount");
    },
    mounted(){
        console.log("in mount");
    },
    beforeUpdate(){
        console.log("in before update");
    },
    updated(){
        console.log("in updated");
    },
    beforeDestroy(){
        console.log("in before destroy");
    },
    destroyed(){
        console.log("in destroyed");
    },
    methods: {
        destroy: function(){
            this.$destroy();
        }
    }
})