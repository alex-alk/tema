import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexRadar {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/radar/charts-apex-radar.html');
        const component = createComponent(html)
        return component
    }
}