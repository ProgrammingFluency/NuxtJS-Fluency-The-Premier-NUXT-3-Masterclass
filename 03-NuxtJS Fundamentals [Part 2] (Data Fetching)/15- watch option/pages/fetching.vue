<script setup>
    const id = ref(1)
    const {data: product} = await useFetch(() => {
        return `https://fakestoreapi.com/products/1`
    }, {
        watch: [id],
        transform: (product) => {
            console.log(product)
            console.log(id)
            return product
        }
    })

    const incrementID = () => {
        id.value++
    }

    
</script>

<template>
    <div>
        {{ product }}
        <br><br>
        <button @click="incrementID">Re fetch</button>
    </div>
</template>