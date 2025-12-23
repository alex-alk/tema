import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthDeleteAccount {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/basic/delete-account/auth-delete-account.html');
        const component = createComponent(html)
        return component
    }
}