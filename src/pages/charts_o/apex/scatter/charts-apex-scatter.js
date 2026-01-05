import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexScatter {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/scatter/charts-apex-scatter.html');
        const component = createComponent(html)
        return component
    }
}