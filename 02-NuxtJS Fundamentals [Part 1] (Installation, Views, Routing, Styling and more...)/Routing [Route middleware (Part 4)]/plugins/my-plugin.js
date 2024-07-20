export default defineNuxtPlugin( () => {
    addRouteMiddleware( (to, from) => {
        if(to.path === '/database') {
            return abortNavigation('Forbidden')
        }
    })

    addRouteMiddleware('denyNoor', (to, from) => {
        const name = to.params.name
        if(name === 'noor') return abortNavigation('The name noor is not allowed')
    })

    addRouteMiddleware(() => {
        console.log('Global middleware')
    }, {global: true})
})