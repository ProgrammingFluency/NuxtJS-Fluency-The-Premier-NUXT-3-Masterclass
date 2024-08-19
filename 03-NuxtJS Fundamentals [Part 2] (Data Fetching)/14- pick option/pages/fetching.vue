<script setup>
    const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
        pick: ['title']
    })

    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
    </div>
</template>