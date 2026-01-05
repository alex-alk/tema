import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsProjectAdd {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/projects/add/apps-project-add.html');
        const component = createComponent(html)

        return component
    }
}