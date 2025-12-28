import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UICollapse {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/collapse/ui-collapse.html');
        const component = createComponent(html)
        return component
    }
}