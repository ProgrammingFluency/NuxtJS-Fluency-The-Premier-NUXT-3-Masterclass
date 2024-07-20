export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const data = await $fetch(url, {
        method: 'delete'
    })

    return data
})