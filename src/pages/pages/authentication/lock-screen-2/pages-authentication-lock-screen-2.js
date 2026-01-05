import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesAuthenticationLockScreen2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/authentication/lock-screen-2/pages-authentication-lock-screen-2.html');
        const component = createComponent(html)

        return component
    }
}