export default defineEventHandler(async event => {
    const {apiKey} = useRuntimeConfig(event)
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`
    const data = await $fetch(url)


    return data
})
