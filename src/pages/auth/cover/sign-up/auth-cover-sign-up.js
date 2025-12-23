import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverSignUp {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/sign-up/auth-cover-sign-up.html');
        const component = createComponent(html)
        return component
    }
}