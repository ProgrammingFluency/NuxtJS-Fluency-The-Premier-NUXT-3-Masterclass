export default defineEventHandler((event) => {
    const body = getQuery(event)
    return body.name
})
