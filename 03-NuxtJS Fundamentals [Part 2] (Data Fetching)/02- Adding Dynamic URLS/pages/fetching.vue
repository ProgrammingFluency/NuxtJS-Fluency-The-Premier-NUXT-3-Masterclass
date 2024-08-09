<script setup>
    const id = ref(1)
    const {data: product, refresh} = await useFetch(() => {
        return `https://fakestoreapi.com/products/${id.value}`
    })
    console.log(product.value)
    const fetchProduct = async () => {
        id.value++
        console.log('ID 👇👇')
        console.log(id.value)
        await refresh()
        console.log('Product 👇👇')
        console.log(product.value)
    }
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <button @click="fetchProduct">
            Display a new product
        </button>
    </div>
</template>