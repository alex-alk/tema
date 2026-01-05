import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormAdvanced {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/advanced/form-advanced.html');
        const component = createComponent(html)
        return component
    }
}