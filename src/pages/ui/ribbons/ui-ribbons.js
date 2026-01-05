import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIRibbons {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/ribbons/ui-ribbons.html');
        const component = createComponent(html)
        return component
    }
}