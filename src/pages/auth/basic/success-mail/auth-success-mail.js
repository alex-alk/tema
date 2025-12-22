import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthSuccessMail {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/success-mail/auth-success-mail.html');
        const component = createComponent(html)
        return component
    }
}