import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmProjects {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/projects/crm-projects.html');
        const component = createComponent(html)
        return component
    }
}