export default defineEventHandler(async event => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const body = await readBody(event)
    const data = $fetch(url, {
        method: 'post',
        body
    })

    return data
})