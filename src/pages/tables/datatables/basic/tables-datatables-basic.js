import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesBasic {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/basic/tables-datatables-basic.html');
        const component = createComponent(html)
        return component
    }
}