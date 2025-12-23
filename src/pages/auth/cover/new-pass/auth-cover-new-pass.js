import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverNewPass {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/new-pass/auth-cover-new-pass.html');
        const component = createComponent(html)
        return component
    }
}