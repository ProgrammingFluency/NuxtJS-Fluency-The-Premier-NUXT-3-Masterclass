export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular'
    const popularSeriesUrl = 'https://api.themoviedb.org/3/tv/popular'

    const popularMovies = await $fetch(popularMoviesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
    })

    const popularSeries = await $fetch(popularSeriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
    })

    return {popularMovies, popularSeries}
})