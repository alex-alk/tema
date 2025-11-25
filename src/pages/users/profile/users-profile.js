import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UsersProfile {

    async getElement() {
        const html = await fetchHTML('/src/pages/users/profile/users-profile.html');
        const component = createComponent(html)
        return component
    }
}