import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIBreadcrumb {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/breadcrumb/ui-breadcrumb.html');
        const component = createComponent(html)
        return component
    }
}