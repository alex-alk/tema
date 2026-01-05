import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesScroll {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/scroll/tables-datatables-scroll.html');
        const component = createComponent(html)
        return component
    }
}