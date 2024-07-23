<script setup>
    const route = useRoute()
    const name = route.params.name
    const id = route.params.id
</script>

<template>
    <div>
        <h1>Name: {{ name }}</h1>
        <h1>ID: {{ id }}</h1>
    </div>
</template>

