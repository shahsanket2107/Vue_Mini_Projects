<template>
    <div>
        <p> User Details </p>
        <hr>
        <user_details_template>
        <template #name>
            <p>Name: Sanket</p>
        </template>
        <template #age>
            <p> Age: 23 </p>
        </template>
        <template #city>
            <p> City: Boston </p>
        </template>
        </user_details_template>
    </div>
</template>

<script>
import UserDetailsTemplate from './UserDetailsTemplate.vue'

export default {
    components:{
        user_details_template: UserDetailsTemplate
    }
}
</script>

<style scoped>

</style>