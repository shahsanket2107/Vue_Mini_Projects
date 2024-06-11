var myData = {
    title:'The vue App',
    showPara: false
}


Vue.component('welcome',{
    template: '<h1> Demo template </h1>'
})

var vm1 = new Vue({
    data: myData,
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

vm1.$mount('#app')

// setTimeout(function(){
//     vm1.title="Changed by timeout!!"
// },3000)

var myData2 = {
    title:'Welcome to another instance'
}

var vm2 = new Vue({
    data: myData2,
    methods:{
        onChange:function(){
            vm1.title = "Changed by VM2!!" 
        }
    }
})

vm2.$mount('#app2')




