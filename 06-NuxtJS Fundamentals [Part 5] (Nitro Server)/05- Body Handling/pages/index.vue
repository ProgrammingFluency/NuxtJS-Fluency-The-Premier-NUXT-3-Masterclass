<script setup>
    let userName
    if(process.client) {
      userName = prompt('What is your name?')
    }
    const {data: name} = await useFetch('/users/rec-user', {
        server: false,
        method: 'post',
        body: {
            name: userName
        }
    })
</script>
<template>
    <h1 v-if="name">You added the name: {{ name }}</h1>
</template>
