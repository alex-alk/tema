import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexMixed {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/mixed/charts-apex-mixed.html');
        const component = createComponent(html)
        return component
    }
}