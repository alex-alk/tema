import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmOpportunities {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/opportunities/crm-opportunities.html');
        const component = createComponent(html)
        return component
    }
}