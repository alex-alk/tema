import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UsersRoles {

    async getElement() {
        const html = await fetchHTML('/src/pages/users/roles/users-roles.html');
        const component = createComponent(html)
        return component
    }
}