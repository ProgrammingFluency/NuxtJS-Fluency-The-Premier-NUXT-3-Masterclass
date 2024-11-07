<script setup>
    const {data} = await useFetch('/api/hello')
</script>

<template>
    <div>
        <h1>Home page</h1>
        <h1>{{ data.greeting }}</h1>
        <p>{{ data.body }}</p>
    </div>
</template>
