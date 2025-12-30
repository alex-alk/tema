import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexCandlestick {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/candlestick/charts-apex-candlestick.html');
        const component = createComponent(html)
        return component
    }
}