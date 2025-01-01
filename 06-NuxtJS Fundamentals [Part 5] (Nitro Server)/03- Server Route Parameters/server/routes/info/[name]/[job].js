export default defineEventHandler( event => {
    const name = getRouterParam(event, 'name')
    const job = getRouterParam(event, 'job')

    const info = {
        name,
        job
    }
    return info
} )