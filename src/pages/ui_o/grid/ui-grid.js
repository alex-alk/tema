import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIGrid {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/grid/ui-grid.html');
        const component = createComponent(html)
        return component
    }
}