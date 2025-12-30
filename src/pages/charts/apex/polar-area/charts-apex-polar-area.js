import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexPoparArea {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/polar-area/charts-apex-polar-area.html');
        const component = createComponent(html)
        return component
    }
}