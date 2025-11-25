import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmDeals {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/deals/crm-deals.html');
        const component = createComponent(html)
        return component
    }
}