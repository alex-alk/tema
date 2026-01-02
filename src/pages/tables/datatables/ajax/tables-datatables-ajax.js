import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesAjax {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/ajax/tables-datatables-ajax.html');
        const component = createComponent(html)
        return component
    }
}