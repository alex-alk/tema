import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexTreemap {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/treemap/charts-apex-treemap.html');
        const component = createComponent(html)
        return component
    }
}