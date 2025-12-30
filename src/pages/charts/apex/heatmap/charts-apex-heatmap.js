import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexHeatmap {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/heatmap/charts-apex-heatmap.html');
        const component = createComponent(html)
        return component
    }
}