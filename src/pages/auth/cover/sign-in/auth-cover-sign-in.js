import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverSignIn {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/sign-in/auth-cover-sign-in.html');
        const component = createComponent(html)
        return component
    }
}