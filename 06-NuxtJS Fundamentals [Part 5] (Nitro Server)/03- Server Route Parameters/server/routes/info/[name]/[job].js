export default defineEventHandler( event => {
    const name = event.context.params.name
    const job = event.context.params.job

    const info = {
        name,
        job
    }
    return info
} )