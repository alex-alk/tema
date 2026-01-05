import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsProjectsList {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/projects/list/apps-projects-list.html');
        const component = createComponent(html)

        return component
    }
}