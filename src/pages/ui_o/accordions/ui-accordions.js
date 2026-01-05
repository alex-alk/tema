import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIAccordions {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/accordions/ui-accordions.html');
        const component = createComponent(html)
        return component
    }
}