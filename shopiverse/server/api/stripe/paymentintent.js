import stripe from 'stripe'

export default defineEventHandler(async event => {
    const body = await readBody(event)
    const {amount} = body
    const config = useRuntimeConfig(event)
    const {stripeSK} = config
    const stripeApp = stripe(stripeSK)
    const paymentIntent = await stripeApp.paymentIntents.create({
        amount,
        currency: 'USD',
        automatic_payment_methods: {
            enabled: true
        }
    })

    const clientSecret = paymentIntent.client_secret


    return clientSecret
})
