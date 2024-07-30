<template>
    <div>
        <LazyWelcome v-if="show"/>
        <button @click="show = !show">Show welcome message</button>
    </div>
</template>

<script setup>
    const show = ref(false)
</script>
