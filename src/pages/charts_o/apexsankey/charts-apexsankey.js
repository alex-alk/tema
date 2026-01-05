import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexsankey {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apexsankey/charts-apexsankey.html');
        const component = createComponent(html)
        return component
    }
}