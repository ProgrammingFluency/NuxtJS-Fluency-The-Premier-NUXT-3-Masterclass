export const useCart = () => {
    return useState('cart', () => {
        return []
    })
}