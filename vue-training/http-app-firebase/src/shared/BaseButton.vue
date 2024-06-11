<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>


<style scoped>
button{
    border: 1px solid blue;
    background-color: darkgray;
    color: white;
    padding: 0.5rem 2rem;
    cursor: pointer;
}
button:hover, button:active{
    background-color: lightcoral;
    border-color: purple;
}
</style>