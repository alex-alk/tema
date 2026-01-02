import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesRendering {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/rendering/tables-datatables-rendering.html');
        const component = createComponent(html)
        return component
    }
}