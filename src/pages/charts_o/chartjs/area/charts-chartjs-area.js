import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsChartjsArea {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/chartjs/area/charts-chartjs-area.html');
        const component = createComponent(html)
        return component
    }
}