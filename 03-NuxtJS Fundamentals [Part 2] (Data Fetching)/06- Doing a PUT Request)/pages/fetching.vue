<script setup>
    const {data: posts} = await useFetch('posts/1', {
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'put',
        body: {
            title: 'updated',
            body: 'updating post with id 1',
            userID: 1
        }
    })
    
</script>

<template>
    <div>
        {{ posts }}
    </div>
</template>