import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverLockScreen {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/lock-screen/auth-cover-lock-screen.html');
        const component = createComponent(html)
        return component
    }
}