import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthSignUp {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/sign-up/auth-sign-up.html');
        const component = createComponent(html)
        return component
    }
}