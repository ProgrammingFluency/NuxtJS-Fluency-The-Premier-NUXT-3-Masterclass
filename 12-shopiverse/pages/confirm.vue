<template>
    <div>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please check you Email to confrim your registiration</h1>

    </div>
</template>

<script setup>
    definePageMeta({
        middleware: [
            async (to, from) => {
                if(from.name !== 'register') return await navigateTo('/')
            }
        ]
    })
</script>