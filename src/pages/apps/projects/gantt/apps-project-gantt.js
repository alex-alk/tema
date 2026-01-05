import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsProjectGantt {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/projects/gantt/apps-project-gantt.html');
        const component = createComponent(html)

        return component
    }
}