import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverSuccessMail {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/success-mail/auth-cover-success-mail.html');
        const component = createComponent(html)
        return component
    }
}