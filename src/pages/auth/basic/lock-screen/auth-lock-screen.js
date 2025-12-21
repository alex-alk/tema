import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthLockScreen {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/lock-screen/auth-lock-screen.html');
        const component = createComponent(html)
        return component
    }
}