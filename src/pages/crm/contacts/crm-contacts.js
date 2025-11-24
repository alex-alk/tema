import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmContacts {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/contacts/crm-contacts.html');
        const component = createComponent(html)
        return component
    }
}