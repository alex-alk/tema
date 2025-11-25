import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmLeads {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/leads/crm-leads.html');
        const component = createComponent(html)
        return component
    }
}