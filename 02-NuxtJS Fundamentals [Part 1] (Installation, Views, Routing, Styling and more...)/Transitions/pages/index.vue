<script setup>
</script>

<template>
    <div>
        <h1>Home page</h1>
        <NuxtLink to="/about">About page</NuxtLink>
    </div>
</template>
<style>
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }

    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem)
    }
</style>