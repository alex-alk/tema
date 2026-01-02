import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesFixedColumns {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/fixed-columns/tables-datatables-fixed-columns.html');
        const component = createComponent(html)
        return component
    }
}