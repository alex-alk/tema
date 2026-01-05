import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLogin2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/login-2/pages-authentication-login-2.html');
        const component = createComponent(html)

        return component
    }
}