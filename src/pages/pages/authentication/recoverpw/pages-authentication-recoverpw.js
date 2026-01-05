import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationRecoverpw {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/recoverpw/pages-authentication-recoverpw.html');
        const component = createComponent(html)

        return component
    }
}