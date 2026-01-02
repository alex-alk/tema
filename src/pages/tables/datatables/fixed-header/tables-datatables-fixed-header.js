import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesFixedHeader {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/fixed-header/tables-datatables-fixed-header.html');
        const component = createComponent(html)
        return component
    }
}