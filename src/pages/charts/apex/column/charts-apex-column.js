import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexColumn {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/column/charts-apex-column.html');
        const component = createComponent(html)
        return component
    }
}