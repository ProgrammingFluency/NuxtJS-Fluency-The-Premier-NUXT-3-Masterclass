export default defineEventHandler(async event => {
    const posts = [
        { id: 1, title: 'Introduction to Nuxt API' },
        { id: 2, title: 'Creating a Blog with Nuxt' },
        // ... other posts
      ];
    const body = await readBody(event)
    posts[1].title = body.title
    return posts
})
