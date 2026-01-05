import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsTasksDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/tasks/details/apps-tasks-details.html');
        const component = createComponent(html)

        return component
    }
}