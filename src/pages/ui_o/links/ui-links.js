import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UILinks {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/links/ui-links.html');
        const component = createComponent(html)
        return component
    }
}