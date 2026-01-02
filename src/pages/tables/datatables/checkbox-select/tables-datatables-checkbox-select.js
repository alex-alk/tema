import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesCheckboxSelect {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/checkbox-select/tables-datatables-checkbox-select.html');
        const component = createComponent(html)
        return component
    }
}