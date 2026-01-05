import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class ChartsSparkline {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/sparkline/charts-sparkline.html');
        const component = createComponent(html)

        return component
    }
}