import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesChildRows {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/child-rows/tables-datatables-child-rows.html');
        const component = createComponent(html)
        return component
    }
}