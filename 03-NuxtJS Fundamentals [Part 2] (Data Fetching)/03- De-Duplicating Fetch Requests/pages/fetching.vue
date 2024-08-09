<script setup>
    const {data: product, refresh} = await useFetch('https://fakestoreapi.com/products/1', {
        key: 'product'
    })

    const fetchData = () => {
        const interval = setInterval(async () => {
            await refresh()
            console.log(product.value)
        },1)

        setTimeout(() => {
            clearInterval(interval)
        },2000)
    }
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <button @click="fetchData">Get products</button>
    </div>
</template>