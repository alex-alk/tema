import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsScrollable {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/scrollable/layouts-scrollable.html');
        const component = createComponent(html)

        return component
    }
}