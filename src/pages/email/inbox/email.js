import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class Email {

    async getElement() {
        const html = await fetchHTML('/src/pages/email/inbox/email.html');
        const component = createComponent(html)
        return component
    }
}