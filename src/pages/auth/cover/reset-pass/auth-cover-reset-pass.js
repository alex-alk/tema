import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverResetPass {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/reset-pass/auth-cover-reset-pass.html');
        const component = createComponent(html)
        return component
    }
}