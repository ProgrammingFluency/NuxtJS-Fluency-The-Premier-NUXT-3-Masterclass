<template>
    <div>
        <h1>Good morning {{ name }}</h1>
    </div>
</template>

<script setup>
    const route = useRoute()
    const {name} = route.params
</script>