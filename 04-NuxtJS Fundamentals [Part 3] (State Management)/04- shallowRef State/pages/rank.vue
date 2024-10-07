<script setup>
    const rank = useState('rank', () => {
        return shallowRef({
            num: 3
        })
    })

    const changeRank = () => {
        rank.value.num = 10
        console.log(rank.value.num)
    }
</script>

<template>
    <h1>Rank: {{ rank }}</h1>
    <button @click="changeRank">Change Rank</button>
</template>