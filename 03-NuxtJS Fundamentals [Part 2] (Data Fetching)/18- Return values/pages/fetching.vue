<script setup>
    const {data: product, pending, refresh, execute, error, status} = await useFetch(() => {
        return `https://fakestoreapi.com/products/1`
    }, {
        immediate: false
    })

    console.log(status.value)

    setTimeout(() => {
        execute()
        console.log(status.value)
        setTimeout(() => {
            console.log(status.value)
        }, 3000);
    }, 3000);
    
</script>

<template>
    <div>
        <p v-if="error">{{ error }}</p>
        <p v-else>{{ product }}</p>
        <br><br>
    </div>
</template>