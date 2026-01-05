import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexSlope {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/slope/charts-apex-slope.html');
        const component = createComponent(html)
        return component
    }
}