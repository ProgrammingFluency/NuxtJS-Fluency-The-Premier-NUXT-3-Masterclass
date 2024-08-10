<script setup>
    const {data: products} = await useFetch('products/categories', {
        baseURL: 'https://fakestoreapi.com'
    })

    
</script>

<template>
    <div>
        {{ products }}
        <br><br>
    </div>
</template>