<script setup>
    const words = useRoute().params.words
</script>
<template>
    <div>
        <p>{{ words }}</p>
    </div>
</template>

