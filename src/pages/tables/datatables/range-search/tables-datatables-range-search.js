import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesRangeSearch {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/range-search/tables-datatables-range-search.html');
        const component = createComponent(html)
        return component
    }
}