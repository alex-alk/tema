import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIUtilities {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/utilities/ui-utilities.html');
        const component = createComponent(html)
        return component
    }
}