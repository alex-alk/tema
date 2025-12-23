import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsCompact {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/compact/layouts-compact.html');
        const component = createComponent(html)

        return component
    }
}