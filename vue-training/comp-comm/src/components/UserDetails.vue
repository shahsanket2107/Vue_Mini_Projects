<template>
    <div class = "component">
        <h3> User Details {{ name }} </h3>
    </div>
    </template>
    
    <script>
        export default{
            props: ['name']
        }
    </script>
    
    <style scoped>
    
    div{
        background-color: lightcoral;
    }
    
    </style>