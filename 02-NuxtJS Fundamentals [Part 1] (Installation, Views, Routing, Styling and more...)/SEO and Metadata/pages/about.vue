<script setup>
    useHead({
        title: 'about page',
        meta: [
           {
            name: 'description',
            content: 'this is about page'
           }
        ]
    })
</script>

<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">
            Home page
        </NuxtLink>
    </div>
</template>