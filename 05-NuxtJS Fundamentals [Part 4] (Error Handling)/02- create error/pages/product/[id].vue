<script setup>
    const route = useRoute()
    const id = route.params.id
    const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)
    if(!product.value) {
        throw createError({
            statusCode: 404,
            message: 'Page not found'
        })
    }
</script>
<template>
    <div>
        {{ product }}
    </div>
</template>

