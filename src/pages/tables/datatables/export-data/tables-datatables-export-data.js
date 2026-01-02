import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesDatatablesExportData {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/datatables/export-data/tables-datatables-export-data.html');
        const component = createComponent(html)
        return component
    }
}