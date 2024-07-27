<script setup>
    const route = useRoute()
    const id = route.params.id
    definePageMeta({
        validate: async (r) => {
            return /^\d+$/.test(r.params.id)
        }
    })
</script>
<template>
    <h1>ID: {{ id }}</h1>
</template>