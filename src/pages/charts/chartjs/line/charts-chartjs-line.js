import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsChartjsLine {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/chartjs/line/charts-chartjs-line.html');
        const component = createComponent(html)
        return component
    }
}