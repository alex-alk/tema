import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsHorizontal {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/horizontal/layouts-horizontal.html');
        const component = createComponent(html)

        return component
    }
}