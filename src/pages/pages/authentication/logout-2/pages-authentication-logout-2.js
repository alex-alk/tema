import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLogout2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/logout-2/pages-authentication-logout-2.html');
        const component = createComponent(html)

        return component
    }
}