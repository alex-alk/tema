import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationRegister {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/register/pages-authentication-register.html');
        const component = createComponent(html)

        return component
    }
}