import { defineStore } from 'pinia'

export const usetaskStore= defineStore('taskStore',{
    state:()=>({
        mytasks:[],
        isLoading:false,
        name:'Sanket'
    }),
    getters:{
        favs(){
            return this.mytasks.filter(t=>t.isFav)
        },
        favCount(){
            return this.mytasks.reduce((a,b)=>{
                return b.isFav ? a+1 : a
            },0)
        },
        totalTaskCount:(state) =>{
            return state.mytasks.length
        }
    },
    actions:{
        async loadTasks(){
            this.isLoading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.mytasks = data
            this.isLoading = false
        },
        addUserTasks(task){
            this.mytasks.push(task)
        },
        deleteTask(tid){
            this.mytasks = this.mytasks.filter(task => task.id !== tid)
        },
        favTask(tid){
            const task = this.mytasks.find(task => task.id === tid)
            task.isFav = !task.isFav
        }
    }
})