import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLockScreen {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/lock-screen/pages-authentication-lock-screen.html');
        const component = createComponent(html)

        return component
    }
}