<script setup>
    const {data: product} = await useFetch('https://fakestoreapi.com/products/1', {
        server: false
    })

    console.log(product.value)
    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
    </div>
</template>