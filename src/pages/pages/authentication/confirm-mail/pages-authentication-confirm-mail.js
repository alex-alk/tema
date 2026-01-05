import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationConfirmMail {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/confirm-mail/pages-authentication-confirm-mail.html');
        const component = createComponent(html)

        return component
    }
}