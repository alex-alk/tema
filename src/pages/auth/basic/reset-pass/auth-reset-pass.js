import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthResetPass {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/reset-pass/auth-reset-pass.html');
        const component = createComponent(html)
        return component
    }
}