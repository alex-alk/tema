import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexFunnel {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/funnel/charts-apex-funnel.html');
        const component = createComponent(html)
        return component
    }
}