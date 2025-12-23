import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverTwoFactor {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/two-factor/auth-cover-two-factor.html');
        const component = createComponent(html)
        return component
    }
}