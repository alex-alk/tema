import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Dashboard2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/dashboards/dashboard-2/dashboard-2.html');
        const component = createComponent(html)
        return component
    }
}