<template>
    <div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NuxtLink @click="changeItemState(item)" :to="`/item/${name}`">
                <img class="rounded-t-lg" :src="`${imageSiteUrl}${poster_path}`" alt="Series Image" />
            </NuxtLink>
            <div class="p-5">
                <span href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ name }}</h5>
                </span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">First Air Date: {{ first_air_date }}</p>
                <p v-if="overview" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {{ overview }}
                    
                </p>
                <p v-else class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    No Overview Available
                    
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    defineProps([
        'name',
        'overview',
        'first_air_date',
        'popularity',
        'poster_path',
        'item'
    ])

    const imageSiteUrl = 'https://image.tmdb.org/t/p/w500'

    const itemState = useState('chosenItem', () => {})
    const changeItemState = (item) => {
        itemState.value = item
    }
</script>

