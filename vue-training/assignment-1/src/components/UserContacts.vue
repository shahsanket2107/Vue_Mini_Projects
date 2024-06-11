<template>
    <div>
        <li>
            <h2> {{ users.name }} </h2>
            <button @click="toggleDetails"> Show Details </button>
            <ul v-if="detailsAreVisible"> 
                <li> 
                    <strong>Email: </strong> {{ users.email }}
                </li>
                <li>
                    <strong>City: </strong> {{ users.city }}
                </li>
            </ul>
        </li>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                detailsAreVisible: false,
                users:{
                    id: 'Tony',
                    name: 'Tony Stark',
                    email: 'tony.stark@gmail.com',
                    city: 'NYC'
                }
            }
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible = true
            }
        }
    }
</script>

<style scoped>

</style>