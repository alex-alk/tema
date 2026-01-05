import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsDetached {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/detached/layouts-detached.html');
        const component = createComponent(html)

        return component
    }
}