import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UICards {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/cards/ui-cards.html');
        const component = createComponent(html)
        return component
    }
}