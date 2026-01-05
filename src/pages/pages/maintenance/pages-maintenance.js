import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesMaintenance {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/maintenance/pages-maintenance.html');
        const component = createComponent(html)
        return component
    }
}