import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormElements {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/elements/form-elements.html');
        const component = createComponent(html)
        return component
    }
}