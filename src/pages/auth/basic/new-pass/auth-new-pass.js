import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthNewPass {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/new-pass/auth-new-pass.html');
        const component = createComponent(html)
        return component
    }
}