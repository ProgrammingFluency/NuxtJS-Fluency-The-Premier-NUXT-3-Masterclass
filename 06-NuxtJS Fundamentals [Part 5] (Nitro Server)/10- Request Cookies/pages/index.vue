<script setup>
    const {data: stocks} = await useFetch('/api/stocks')
</script>
<template>
    <section>
        {{ stocks }}
    </section>
</template>