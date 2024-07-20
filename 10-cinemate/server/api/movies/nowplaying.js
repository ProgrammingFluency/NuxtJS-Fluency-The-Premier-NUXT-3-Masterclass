export default defineEventHandler(async event => {
   const config = useRuntimeConfig(event)
   const {AccessToken} = config

   const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing'

   const nowPlayingMovies = await $fetch(nowPlayingUrl, {
        method: 'get',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${AccessToken}`
        },
   })

   return {nowPlayingMovies}
})