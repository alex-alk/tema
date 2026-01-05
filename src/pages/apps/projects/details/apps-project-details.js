import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsProjectDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/projects/details/apps-project-details.html');
        const component = createComponent(html)

        return component
    }
}