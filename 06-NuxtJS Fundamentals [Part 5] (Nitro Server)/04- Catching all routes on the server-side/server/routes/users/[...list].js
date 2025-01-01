export default defineEventHandler(event => {
    const names = event.context.params.list

    return names
})