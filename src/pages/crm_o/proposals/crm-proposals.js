import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmProposals {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/proposals/crm-proposals.html');
        const component = createComponent(html)
        return component
    }
}