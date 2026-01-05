import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatable {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatable/tables-datatable.html');
        const component = createComponent(html)
        return component
    }
}