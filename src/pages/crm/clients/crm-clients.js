import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmClients {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/clients/crm-clients.html');
        const component = createComponent(html)
        return component
    }
}