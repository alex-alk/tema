import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UsersRoleDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/users/role-details/users-role-details.html');
        const component = createComponent(html)
        return component
    }
}