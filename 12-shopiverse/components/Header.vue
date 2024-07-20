<template>
    <div>
        <PublicNav v-if="!user"/>
        <UserNav v-else/>
    </div>
</template>

<script setup>
    const user = useSupabaseUser()
</script>
