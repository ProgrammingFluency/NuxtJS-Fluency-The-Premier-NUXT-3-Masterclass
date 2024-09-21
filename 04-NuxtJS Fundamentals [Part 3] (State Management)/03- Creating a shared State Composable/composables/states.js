export const useCounter = () => {
    return useState('counter', () => 1)
}