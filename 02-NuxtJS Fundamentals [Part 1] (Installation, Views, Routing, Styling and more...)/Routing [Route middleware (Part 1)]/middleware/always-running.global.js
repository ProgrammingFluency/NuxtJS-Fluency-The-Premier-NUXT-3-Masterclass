export default defineNuxtRouteMiddleware((to, from) => {
    console.log('This code will run before navigating to each route')
})