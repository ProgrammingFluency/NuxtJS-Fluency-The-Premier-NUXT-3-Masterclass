<script setup>
    const { data } = await useAsyncData('productsAndTodo', async () => {
        const [products, categories, todos] = await Promise.all([
            $fetch('https://fakestoreapi.com/products'),
            $fetch('https://fakestoreapi.com/products/categories'),
            $fetch('https://jsonplaceholder.typicode.com/todos')
        ])

        return{ products, categories, todos }
    })

    console.log(data)
    const products = data.value.products
    const categories = data.value.categories
    const todos = data.value.todos

</script>

<template>
    <div>
        <p>{{ products }}</p>
        <p>{{ categories }}</p>
        <p>{{ todos }}</p>
        <br><br>
    </div>
</template>