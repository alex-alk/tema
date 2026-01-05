import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexPie {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/pie/charts-apex-pie.html');
        const component = createComponent(html)
        return component
    }
}