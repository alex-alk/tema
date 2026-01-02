import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsChartjsBar {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/chartjs/bar/charts-chartjs-bar.html');
        const component = createComponent(html)
        return component
    }
}