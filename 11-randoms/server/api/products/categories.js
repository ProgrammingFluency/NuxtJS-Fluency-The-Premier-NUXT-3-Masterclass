export default defineEventHandler(async () => {
    const url = 'https://fakestoreapi.com/products/categories'
    const data = await $fetch(url)
    return data
})