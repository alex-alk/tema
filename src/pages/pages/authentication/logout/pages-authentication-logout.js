import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLogout {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/logout/pages-authentication-logout.html');
        const component = createComponent(html)

        return component
    }
}