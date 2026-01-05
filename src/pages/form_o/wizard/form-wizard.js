import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormWizard {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/wizard/form-wizard.html');
        const component = createComponent(html)
        return component
    }
}