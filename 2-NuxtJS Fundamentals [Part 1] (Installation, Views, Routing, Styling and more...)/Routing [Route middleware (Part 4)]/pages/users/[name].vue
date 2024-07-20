<script setup>
    definePageMeta({
        middleware: [
            'denyNoor'
        ]
    })
</script>

<template>
    <div>
        <h1>{{ $route.params.name }}</h1>
    </div>
</template>

