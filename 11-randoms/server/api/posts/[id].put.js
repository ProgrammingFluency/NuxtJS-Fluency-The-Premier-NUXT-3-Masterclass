export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const body = await readBody(event)
    const data = await $fetch(url, {
        method: 'put',
        body
    })

    return data
})