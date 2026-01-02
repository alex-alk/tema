import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormSelect {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/select/form-select.html');
        const component = createComponent(html)
        return component
    }
}