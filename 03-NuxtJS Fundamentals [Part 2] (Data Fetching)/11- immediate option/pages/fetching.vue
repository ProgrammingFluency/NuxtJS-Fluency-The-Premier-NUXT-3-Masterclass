<script setup>
    const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
        immediate: false
    })

    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <button @click="execute">Display data</button>
    </div>
</template>