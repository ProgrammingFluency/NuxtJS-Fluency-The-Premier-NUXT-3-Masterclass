<script setup>
    defineProps(['error'])
    const handleError = () => {
        clearError({
            redirect: '/'
        })
    }
</script>
<template>
    <div>
        <h1>Errooorrrrrr 👉👉👉{{ error.statuscode }}</h1>
        <h1>{{ error.message }}</h1>
        <button @click="handleError">Clear Error</button>
    </div>
</template>

