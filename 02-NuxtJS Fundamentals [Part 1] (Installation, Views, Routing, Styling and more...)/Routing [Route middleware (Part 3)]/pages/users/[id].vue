<script setup>
    definePageMeta({
        middleware: [
            function( to ) {
                if(to.params.id === '1') return navigateTo('/')
                if(to.params.id === '2') return abortNavigation()
                if(to.params.id === '3') return abortNavigation('ID should not be 3')
                console.log('Everything is fine')
            }
        ]
    })
</script>

<template>
    <div>

    </div>
</template>



