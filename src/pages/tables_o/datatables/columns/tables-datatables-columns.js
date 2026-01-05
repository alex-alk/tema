import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesColumns {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/columns/tables-datatables-columns.html');
        const component = createComponent(html)
        return component
    }
}