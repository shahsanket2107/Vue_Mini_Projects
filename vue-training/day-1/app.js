var vm1 = new Vue({
    el: '#app',
    data:{
        title:'The vue App',
        showPara: false
    },
    methods: {
        show: function(){
            this.showPara=true,
            this.updateTitle('New Updated title (Updated....!)')
            this.$refs.heading.innerText = 'test123'
        },
        updateTitle:function(title){
            this.title=title
        }
    },
    computed:{
        lowerCaseTitle:function(){
            return this.title.toLowerCase()
        }
    },
    watch:{
        title: function(value){
            alert('Title changed ...!'+ value)
        }
    }
})

setTimeout(function(){
    vm1.title="Changed by timeout!!"
},3000)

var vm2 = new Vue({
    el: '#app2',
    data:{
        title:'Welcome to another instance'
    },
    methods:{
        onChange:function(){
            vm1.title = "Changed by VM2!!" 
        }
    }
})