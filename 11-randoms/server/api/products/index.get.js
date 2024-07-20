export default defineEventHandler(async event => {
    const url = 'https://fakestoreapi.com/products'
    const data = await $fetch(url)
    return data
})