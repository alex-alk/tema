import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIOffcanvas {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/offcanvas/ui-offcanvas.html');
        const component = createComponent(html)
        return component
    }
}