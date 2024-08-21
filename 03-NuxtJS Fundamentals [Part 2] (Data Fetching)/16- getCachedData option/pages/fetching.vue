<script setup>
    const nuxtApp = useNuxtApp()
    const {data: product} = await useFetch(() => {
        return `https://fakestoreapi.com/products/1`
    }, {
        getCachedData: key => {
            return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
        }
    })

    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>