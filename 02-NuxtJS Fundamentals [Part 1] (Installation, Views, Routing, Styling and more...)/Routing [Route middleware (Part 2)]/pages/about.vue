<script setup>
    definePageMeta({
        middleware: [
            function(to, from) {
                console.log('inline middleware')
            },
            'middleware-example'
        ]
    })
</script>

<template>
    <div>
        <h1>About page</h1>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>

