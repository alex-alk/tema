import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationConfirmMail2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/confirm-mail-2/pages-authentication-confirm-mail-2.html');
        const component = createComponent(html)

        return component
    }
}