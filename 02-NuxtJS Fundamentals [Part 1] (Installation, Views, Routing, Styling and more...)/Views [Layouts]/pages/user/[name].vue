<script setup>
    definePageMeta({
        layout: 'custom'
    })
</script>

<template>
    <div>
        <h1>{{ $route.params.name }}</h1>
    </div>
</template>