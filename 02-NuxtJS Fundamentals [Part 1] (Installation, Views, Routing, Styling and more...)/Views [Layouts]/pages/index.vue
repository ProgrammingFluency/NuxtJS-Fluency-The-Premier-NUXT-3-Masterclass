<script setup>
    const enableCustomLayout = () => {
        setPageLayout('custom')
    }
</script>

<template>
    <div>
        <h1>Home page</h1>
        <nuxtLink to="/about">
            About page
        </nuxtLink>
        <br>
        <br>
        <button @click="enableCustomLayout">Change layout</button>
    </div>
</template>
