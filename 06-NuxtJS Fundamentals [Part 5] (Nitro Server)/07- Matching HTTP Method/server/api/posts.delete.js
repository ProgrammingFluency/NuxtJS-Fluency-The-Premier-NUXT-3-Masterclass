export default defineEventHandler(event => {
    const posts = [
        { id: 1, title: 'Nuxt Course' },
        { id: 2, title: 'Creating a Blog with Nuxt' },
        // ... other posts
      ];
    posts.splice(0, 1)
    return posts
})
