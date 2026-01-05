import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesColumnSearching {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/column-searching/tables-datatables-column-searching.html');
        const component = createComponent(html)
        return component
    }
}