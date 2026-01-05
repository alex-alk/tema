import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormValidation {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/validation/form-validation.html');
        const component = createComponent(html)
        return component
    }
}