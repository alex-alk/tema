import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmActivities {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/activities/crm-activities.html');
        const component = createComponent(html)
        return component
    }
}