import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsTasksList {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/tasks/list/apps-tasks-list.html');
        const component = createComponent(html)

        return component
    }
}