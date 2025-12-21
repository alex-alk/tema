import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthSignIn {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/sign-in/auth-sign-in.html');
        const component = createComponent(html)
        return component
    }
}