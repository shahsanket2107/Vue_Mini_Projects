<template>
    <div>
        <h3>Edit the User</h3>
        <p> Locale: {{ $route.query.locale }} </p>
        <p> UserList: {{ $route.query.q }} </p>
        <p> Directive Demo </p>
        <p v-highlight:background.delayed="'yellow'"> Directive Color </p>
        <p> End Test </p>
    </div>
</template>