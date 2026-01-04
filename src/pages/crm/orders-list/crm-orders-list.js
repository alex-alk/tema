import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmOrdersList {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/orders-list/crm-orders-list.html');
        const component = createComponent(html)
        return component
    }
}