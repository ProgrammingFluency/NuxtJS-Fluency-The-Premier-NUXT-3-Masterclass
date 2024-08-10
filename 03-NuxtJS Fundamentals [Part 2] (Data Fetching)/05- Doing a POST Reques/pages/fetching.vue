<script setup>
    const {data: posts} = await useFetch('posts', {
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'post',
        body: {
            title: 'hey',
            body: 'hello world',
            userID: 1
        }
    })
    
</script>

<template>
    <div>
        {{ posts }}
    </div>
</template>