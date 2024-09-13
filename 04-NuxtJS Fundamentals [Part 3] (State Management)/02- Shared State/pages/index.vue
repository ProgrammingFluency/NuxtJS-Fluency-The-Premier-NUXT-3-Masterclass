<template>
    <div>
        <h1>Counter: {{ counter }}</h1>
        <button @click="counter++">Increment</button>
        <br><br>
        <NuxtLink to="/about">About page</NuxtLink>
    </div>
</template>

<script setup>
const counter = useState('counterState',() => 1)

</script>