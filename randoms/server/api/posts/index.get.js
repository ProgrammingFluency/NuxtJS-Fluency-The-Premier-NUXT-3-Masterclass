export default defineEventHandler(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const data = $fetch(url)

    return data
})