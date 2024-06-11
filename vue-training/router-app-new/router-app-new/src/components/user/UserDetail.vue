<template>
    <div>
        <h3>Some User Details for user</h3>
        <p> User component is: {{ $route.params.id }}</p>
        <!-- <router-link
        tag="button"
        :to="'/user/'+$route.params.id+'/edit'">
            Edit User
        </router-link> -->
        <router-link tag="button" :to="{
            name: 'userEdit', params: { id: $route.params.id },
            query: { locale: 'en', q: 200 }
        }">
            Edit User
        </router-link>

        <hr>
        <button @click="nagivateBack" class="btn btn-warning">
            Go Back
        </button>
    </div>

</template>

<script>
export default {
    methods: {
        nagivateBack() {
            this.$router.push("/user")
        }
    }
}
</script>

<style scoped></style>