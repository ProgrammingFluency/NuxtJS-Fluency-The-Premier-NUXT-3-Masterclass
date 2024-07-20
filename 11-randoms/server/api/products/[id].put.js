export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    const url = `https://fakestoreapi.com/products/${id}`
    const data = await $fetch(url, {
        method: 'put',
        body
    })

    return body
})