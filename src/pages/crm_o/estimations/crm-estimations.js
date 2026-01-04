import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmEstimations {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/estimations/crm-estimations.html');
        const component = createComponent(html)
        return component
    }
}