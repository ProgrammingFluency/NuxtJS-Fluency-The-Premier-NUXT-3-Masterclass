<script setup>
    const {data: product, execute} = await useFetch('https://fakestoreapi.com/products/1', {
        transform: (product) => {
            return {
                ...product,
                title: 'Mobile'
            }
        }
    })

    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
    </div>
</template>