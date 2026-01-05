import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIModals {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/modals/ui-modals.html');
        const component = createComponent(html)
        return component
    }
}