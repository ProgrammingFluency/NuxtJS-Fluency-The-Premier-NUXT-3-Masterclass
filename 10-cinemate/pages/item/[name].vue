<template>
    <div>
        <MovieCard v-if="item.release_date"
            :poster_path="item.poster_path"
            :title="item.title"
            :id="item.id"
            :overview="item.overview"
            :release_date="item.release_date"
            :popularity="item.popularity"
            :item="item"
        />

        <SeriesCard v-if="item.first_air_date"
            :poster_path="item.poster_path"
            :name="item.name"
            :overview="item.overview"
            :first_air_date="item.first_air_date"
            :popularity="item.popularity"
            :item="item"
        />
    </div>
</template>

<script setup>
    const itemState = useState('chosenItem', () => {
        return {}
    })
    const item = itemState.value
</script>

