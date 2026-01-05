import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationRegister2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/register-2/pages-authentication-register-2.html');
        const component = createComponent(html)

        return component
    }
}