import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Dashboard {

    async getElement() {
        const html = await fetchHTML('/src/pages/dashboards/dashboard/dashboard.html');
        const component = createComponent(html)

        return component
    }
}