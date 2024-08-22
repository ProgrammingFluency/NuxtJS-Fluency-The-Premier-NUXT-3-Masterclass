<script setup>
    const {data: product} = await useFetch(() => {
        return `https://fakestoreapi.com/products/1`
    }, {
        deep: false,
    })

    const changeRating = () => {
        product.value.rating.rate = 'any'
    }
    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <button @click="changeRating">Change rating</button>
    </div>
</template>