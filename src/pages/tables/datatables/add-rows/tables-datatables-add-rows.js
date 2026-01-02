import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesAddRows {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/add-rows/tables-datatables-add-rows.html');
        const component = createComponent(html)
        return component
    }
}