import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexBoxplot {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/boxplot/charts-apex-boxplot.html');
        const component = createComponent(html)
        return component
    }
}