import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIPlaceholders {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/placeholders/ui-placeholders.html');
        const component = createComponent(html)
        return component
    }
}