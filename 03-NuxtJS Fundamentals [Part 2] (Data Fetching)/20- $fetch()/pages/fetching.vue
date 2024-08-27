<script setup>
    const toDo = await $fetch('https://jsonplaceholder.typicode.com/todos/1')

</script>

<template>
    <div>
        {{ toDo }}
        <br><br>
    </div>
</template>