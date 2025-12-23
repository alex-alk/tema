import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverLoginPin {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/login-pin/auth-cover-login-pin.html');
        const component = createComponent(html)
        return component
    }
}