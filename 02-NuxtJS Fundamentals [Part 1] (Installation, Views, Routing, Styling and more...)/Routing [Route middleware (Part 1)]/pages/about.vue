<script setup>
    definePageMeta({
        middleware: [
            function(to, from) {
                console.log(from)
                console.log(to)
                console.log('This code will run before navigating to the about route')
            }
        ]
    })
</script>

<template>
    <div>
        <h1>About page</h1>
    </div>
</template>

