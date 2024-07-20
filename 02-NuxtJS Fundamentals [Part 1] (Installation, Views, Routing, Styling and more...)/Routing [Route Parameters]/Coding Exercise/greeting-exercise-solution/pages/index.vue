<template>
    <div>
        <NuxtLink :to="`/greeting/${name}`">See your greeting</NuxtLink>
    </div>
</template>

<script setup>
    let name
    if(process.client) {
        name = prompt('Please enter your name')
    }
</script>

