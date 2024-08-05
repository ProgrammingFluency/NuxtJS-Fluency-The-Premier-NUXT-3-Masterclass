<script setup>
    const {data: products} = await useFetch('https://fakestoreapi.com/products')
    console.log(products.value)
</script>

<template>
    <div>
        {{ products }}
    </div>
</template>