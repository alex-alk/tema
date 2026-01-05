import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormLayouts {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/layouts/form-layouts.html');
        const component = createComponent(html)
        return component
    }
}