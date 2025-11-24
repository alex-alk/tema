import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EmailDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/email/details/email-details.html');
        const component = createComponent(html)
        return component
    }
}