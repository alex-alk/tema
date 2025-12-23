import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AuthCoverDeleteAccount {

    async getElement() {
        const html = await fetchHTML('/src/pages/auth/cover/delete-account/auth-cover-delete-account.html');
        const component = createComponent(html)
        return component
    }
}