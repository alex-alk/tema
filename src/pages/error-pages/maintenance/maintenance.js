import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Maintenance {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/maintenance/maintenance.html');
        const component = createComponent(html)

        return component
    }
}