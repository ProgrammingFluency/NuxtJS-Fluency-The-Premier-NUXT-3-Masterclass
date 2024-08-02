<script setup>
    const counter = ref(1)
</script>

<template>
    <div>
        <Head>
            <Title>
                {{ counter }}
            </Title>
        </Head>
        <button @click="counter++">Increment</button>
    </div>
</template>