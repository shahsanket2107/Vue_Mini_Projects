<template>
    <div>
        <p> The server status is: {{ status }}</p>
        <button @click="changeStatus">Change status</button>
        <hr>
        <test-component> </test-component>
    </div>
</template>

<script>

import TestComponent from './TestComponent.vue'

export default{
    data(){
        return {
            status:'Running'
        }
    },
    methods:{
        changeStatus(){
            this.status='Stopped'
        }
    },
    components:{
        'test-component':TestComponent
    }
}
</script>