import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsChartjsOther {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/chartjs/other/charts-chartjs-other.html');
        const component = createComponent(html)
        return component
    }
}