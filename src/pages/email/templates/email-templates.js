import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EmailTemplates {

    async getElement() {
        const html = await fetchHTML('/src/pages/email/templates/email-templates.html');
        const component = createComponent(html)
        return component
    }
}