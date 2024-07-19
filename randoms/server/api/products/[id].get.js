export default defineEventHandler(async event => {
    const id = getRouterParam(event, 'id')
    const url = `https://fakestoreapi.com/products/${id}`
    const data = await $fetch(url)

    return data
})