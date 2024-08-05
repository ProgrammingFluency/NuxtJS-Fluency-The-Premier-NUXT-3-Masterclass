<script setup>
</script>

<template>
    <div>
        <h1>Home page</h1>
        <NuxtLink to="/about">About page</NuxtLink>
    </div>
</template>
<style>
    .layout-enter-active,
    .layout-leave-active {
        transition: all 0.4s;
    }

    .layout-enter-from,
    .layout-leave-to {
        opacity: 0;
        filter: blur(1rem)
    }
</style>