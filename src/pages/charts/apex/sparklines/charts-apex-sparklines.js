import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexSparklines {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/sparklines/charts-apex-sparklines.html');
        const component = createComponent(html)
        return component
    }
}