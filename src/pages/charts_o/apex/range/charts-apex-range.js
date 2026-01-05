import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexRange {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/range/charts-apex-range.html');
        const component = createComponent(html)
        return component
    }
}