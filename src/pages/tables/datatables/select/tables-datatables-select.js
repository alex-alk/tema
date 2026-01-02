import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesSelect {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/select/tables-datatables-select.html');
        const component = createComponent(html)
        return component
    }
}