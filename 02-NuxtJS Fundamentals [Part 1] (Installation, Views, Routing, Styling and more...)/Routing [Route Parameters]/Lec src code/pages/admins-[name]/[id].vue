<script setup>
    const route = useRoute()
    const adminName = route.params.name
    const adminID = route.params.id
</script>

<template>
    <div>
        <h1>Admin Name: {{ adminName }}</h1>
        <h1>Admin ID: {{ adminID }}</h1>
    </div>
</template>

