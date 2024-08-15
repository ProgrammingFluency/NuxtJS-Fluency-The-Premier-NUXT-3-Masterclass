<script setup>
    const apiKey = 'VNOOE1JXQ49E2EOZ'
    const {data: stocks} = await useFetch('query', {
        baseURL: 'https://www.alphavantage.co',
        params: {
            function: 'TIME_SERIES_INTRADAY',
            symbol: 'IBM',
            interval: '5min',
            apikey: apiKey
        },
        timeout: 5000
    })
    
</script>

<template>
    <div>
        {{ stocks }}
    </div>
</template>