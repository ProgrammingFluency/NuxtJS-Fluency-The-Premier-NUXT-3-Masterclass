export default defineEventHandler(async event => {
    const category = getRouterParam(event, 'type')
    const url = `https://fakestoreapi.com/products/category/${category}`
    const data = await $fetch(url)

    return data
})