import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsFull {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/full/layouts-full.html');
        const component = createComponent(html)

        return component
    }
}