import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthTwoFactor {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/two-factor/auth-two-factor.html');
        const component = createComponent(html)
        return component
    }
}