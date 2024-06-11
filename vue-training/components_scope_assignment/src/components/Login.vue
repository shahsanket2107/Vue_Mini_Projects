<template>
    <div>
        <p> Login </p>
        <hr>
        <formHelper>
            <template #header>
                <p>User Login Form</p>
            </template>
            <template #title>
                <p>Login Existing User</p>
            </template>
            <template #body>
            <form>
                UserName:<input type="text" placeholder="Enter Name"/>
                Password:<input type="password" placeholder="Enter password"/>
                Email:<input type="text" placeholder="Enter Email"/>
                <button class="btn btn-primary">Login</button>
            </form>
            </template>
        </formHelper>
    </div>
</template>

<script>
import FormHelper from './FormHelper.vue'

    export default {
        components:{
            formHelper: FormHelper
        }
    }
</script>

<style scoped>

</style>