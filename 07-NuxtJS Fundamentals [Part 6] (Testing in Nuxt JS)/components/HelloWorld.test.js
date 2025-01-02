import {mount} from '@vue/test-utils'
import HelloWorld from './HelloWorld'
import {describe, it, expect} from 'vitest'


describe('HelloWorld', () => {
    it('displays Hello World', () => {
        const component = mount(HelloWorld)
        expect(component.text()).toContain('Hello World')
    })
})

// nuxt test utilities.
import {mountSuspended, toMatchInlineSnapshot} from '@nuxt/test-utils/runtime'


describe('HelloWorld', () => {
    it('displays Hello World', async () => {
        const component = await mountSuspended(HelloWorld)
        expect(component.text()).toMatchInlineSnapshot('Hello World')
    })
})
