<script setup>
    defineProps(['error'])
</script>
<template>
    <div>
        <h1>Errooorrrrrr 👉👉👉{{ error.statuscode }}</h1>
        <h1>{{ error.message }}</h1>
        
    </div>
</template>

