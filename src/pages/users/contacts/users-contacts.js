import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UsersContacts {

    async getElement() {
        const html = await fetchHTML('/src/pages/users/contacts/users-contacts.html');
        const component = createComponent(html)
        return component
    }
}