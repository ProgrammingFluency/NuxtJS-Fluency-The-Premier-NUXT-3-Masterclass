export default defineNuxtRouteMiddleware((to, from) => {
    console.log(from)
    console.log(to)
    console.log('This code will run before navigating to the about route')
})