<script setup>
    const route = useRoute()
    const id = route.params.id
    console.log(route)
</script>

<template>
    <div>
        <h1>ID: {{ id }}</h1>
    </div>
</template>