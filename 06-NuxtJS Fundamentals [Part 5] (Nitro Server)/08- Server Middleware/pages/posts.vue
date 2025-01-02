<script setup>
    const result = ref(null)
    const getPosts = async () => {
        const {data} = await useFetch('/api/posts')
        result.value = data
    }
    const addPost = async () => {
        const {data} = await useFetch('/api/posts', {
            method: 'post',
            body: {
                newPost: {
                    id: 3,
                    title: 'This is new post'
                }
            }
        })
        result.value = data
    }


    const editPost = async () => {
        const {data} = await useFetch('/api/posts', {
            method: 'put',
            body: {
                title: 'Creating a social media app with Nuxt'
            }
        })
        result.value = data
    }


    const deletePost = async () => {
        const {data} = await useFetch('/api/posts', {
            method: 'delete'
        })
        result.value = data
    }
</script>
<template>
    <div>
        <button @click="getPosts">Get posts</button>
        <button @click="addPost">Add post</button>
        <button @click="editPost">Edit post</button>
        <button @click="deletePost">Delete post</button>
        <h1></h1>
        <p>{{ result }}</p>
    </div>
</template>