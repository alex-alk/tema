import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesJavascript {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/javascript/tables-datatables-javascript.html');
        const component = createComponent(html)
        return component
    }
}