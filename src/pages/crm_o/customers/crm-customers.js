import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmCustomers {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/customers/crm-customers.html');
        const component = createComponent(html)
        return component
    }
}