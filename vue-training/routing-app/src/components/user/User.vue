<template>
    <div>
        User Component: {{ id }}
        <hr>
        <button @click="nagivateHome" class="btn btn-primary">
            Go to Home
        </button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: this.$route.params.id,
            };
        },
        methods:{
            nagivateHome(){
                this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>