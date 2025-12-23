import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthLoginPin {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/login-pin/auth-login-pin.html');
        const component = createComponent(html)
        return component
    }
}