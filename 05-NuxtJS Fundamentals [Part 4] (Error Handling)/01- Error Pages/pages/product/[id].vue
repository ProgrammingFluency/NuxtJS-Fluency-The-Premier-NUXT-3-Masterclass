<script setup>
    const route = useRoute()
    const id = route.params.id
    const {data: product} = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>
<template>
    <div>
        {{ product }}
    </div>
</template>

