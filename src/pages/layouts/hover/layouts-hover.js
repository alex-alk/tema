import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsHover {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/hover/layouts-hover.html');
        const component = createComponent(html)

        return component
    }
}