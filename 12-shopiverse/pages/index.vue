<template>
    <div class="grid grid-cols-4 gap-4">
        <div v-if="products" v-for="product in products">
            <ProductComp :product="product"/>
        </div>
    </div>
</template>

<script setup>
    const {data: products} = await useFetch('/api/products')
</script>
