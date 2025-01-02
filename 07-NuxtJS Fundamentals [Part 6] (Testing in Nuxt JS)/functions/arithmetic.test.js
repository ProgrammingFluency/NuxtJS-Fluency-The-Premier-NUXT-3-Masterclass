import {describe, test, expect} from 'vitest'
import {addition, subtraction, multiplication, division} from './arithmetic'


describe('Testing the arithmetic functions', () => {
    test('addition function adds 1 + 2 to equal 3', () => {
        expect(addition(1, 2)).toBe(3)
    })


    test('subtraction function subtracts 3 from 7 to equal 4', () => {
        expect(subtraction(7,3)).toBe(4)
    })


    test('multiplication function multiplies 2 by 3 to equal 6', () => {
        expect(multiplication(2,3)).toBe(6)
    })


    test('division function divides 20 by 4 to equal 5', () => {
        expect(division(20, 4)).toBe(5)
    })
})
