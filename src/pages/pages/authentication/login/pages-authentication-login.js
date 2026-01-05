import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLogin {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/login/pages-authentication-login.html');
        const component = createComponent(html)

        return component
    }
}