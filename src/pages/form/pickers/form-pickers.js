import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormPickers {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/pickers/form-pickers.html');
        const component = createComponent(html)
        return component
    }
}