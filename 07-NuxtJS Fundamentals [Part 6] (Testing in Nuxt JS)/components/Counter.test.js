import {mount} from '@vue/test-utils'
import Counter from './Counter'
import {describe, it, expect} from 'vitest'


describe('Counter', () => {
    it('Increments counter when the user clicks on the button', async () => {
        const component = mount(Counter)
        const button = component.find('button')
        const text = component.find('h1')


        expect(text.text()).toContain('Counter: 1')


        await button.trigger('click')


        expect(text.text()).toContain('Counter: 2')
    })
})

// nuxt test utilities.
import {mountSuspended} from '@nuxt/test-utils/runtime'


describe('Counter', () => {
    it('Increments counter when the user clicks on the button', async () => {
        const component = await mountSuspended(Counter)
        const button = component.find('button')
        const text = component.find('h1')

        expect(text.text()).toContain('Counter: 1')

        await button.trigger('click')

        expect(text.text()).toContain('Counter: 2')
    })
})
