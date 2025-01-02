import {mount} from '@vue/test-utils'
import HelloWorld from './HelloWorld'
import {describe, it, expect} from 'vitest'


describe('HelloWorld', () => {
    it('displays Hello World', () => {
        const component = mount(HelloWorld)
        expect(component.text()).toContain('Hello World')
    })
})
