import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsIconView {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/icon-view/layouts-icon-view.html');
        const component = createComponent(html)

        return component
    }
}