import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmManagement {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/management/crm-management.html');
        const component = createComponent(html)
        return component
    }
}