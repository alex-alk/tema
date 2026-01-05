import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIDropdowns {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/dropdowns/ui-dropdowns.html');
        const component = createComponent(html)
        return component
    }
}