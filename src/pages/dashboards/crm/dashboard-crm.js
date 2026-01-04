import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class DashboardCrm {

    async getElement() {
        const html = await fetchHTML('/src/pages/dashboards/crm/dashboard-crm.html');
        const component = createComponent(html)

        return component
    }
}