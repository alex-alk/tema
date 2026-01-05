import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsTasksKanban {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/tasks/kanban/apps-tasks-kanban.html');
        const component = createComponent(html)

        return component
    }
}