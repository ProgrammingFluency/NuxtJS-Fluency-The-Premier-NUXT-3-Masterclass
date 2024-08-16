<script setup>
    const {data: product, pending} = await useFetch('https://fakestoreapi.com/products/1', {
        lazy: true
    })

    
</script>

<template>
    <div>
        <h1 v-if="pending">Loading...</h1>
        <p v-else>{{ product }}</p>
        <br><br>
    </div>
</template>