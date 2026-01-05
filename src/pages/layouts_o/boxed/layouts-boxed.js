import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsBoxed {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/boxed/layouts-boxed.html');
        const component = createComponent(html)

        return component
    }
}