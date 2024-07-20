import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const query = getQuery(event)
    const queryItem = query.input
    const items = await prisma.products.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: queryItem,
                        mode: 'insensitive'
                    }
                },
                {
                    description: {
                        contains: queryItem,
                        mode: 'insensitive'
                    }
                }
            ]
        }
    })

    return items
})