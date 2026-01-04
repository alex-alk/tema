import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class DashboardProjects {

    async getElement() {
        const html = await fetchHTML('/src/pages/dashboards/projects/dashboard-projects.html');
        const component = createComponent(html)

        return component
    }
}