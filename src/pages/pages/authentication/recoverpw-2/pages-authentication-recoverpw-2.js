import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationRecoverpw2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/recoverpw-2/pages-authentication-recoverpw-2.html');
        const component = createComponent(html)

        return component
    }
}