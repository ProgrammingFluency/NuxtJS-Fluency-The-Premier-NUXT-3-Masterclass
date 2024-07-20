export default defineEventHandler(async event => {
    const config = useRuntimeConfig(event)
    const {AccessToken} = config
    const movieUrl = 'https://api.themoviedb.org/3/discover/movie'
    const seriesUrl = 'https://api.themoviedb.org/3/discover/tv'

    const movies = await $fetch(movieUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    const series = await $fetch(seriesUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
        query: {
            include_adult: false,
            include_video: false,
            include_null_first_air_dates: false,
            language: 'en-US',
            page: '1',
            sort_by: 'popularity.desc'
        }
    })

    return {movies, series}
})