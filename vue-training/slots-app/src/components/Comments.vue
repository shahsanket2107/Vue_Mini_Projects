<template>
    <div>
        <div>
            <slot name="register"> </slot>
            Register
        </div>
        <hr>
        <div>
            <slot name="login"> </slot>
            Login
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

div{
    border: 1px solid darkblue;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: auto;
    text-align: center;
}
p{
    color: red
}
</style>