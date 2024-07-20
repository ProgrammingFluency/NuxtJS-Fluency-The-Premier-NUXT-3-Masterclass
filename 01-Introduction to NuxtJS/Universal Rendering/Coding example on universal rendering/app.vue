<template>
  <h1>Nuxt JS</h1>
  <button @click="displayMsg">CLick here</button>
</template>

<script setup>
  const displayMsg = () => {
    console.log('This is rendered on the client side')
  }
  console.log('This page is server rendered')
</script>
