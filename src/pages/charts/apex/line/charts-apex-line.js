import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexLine {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/line/charts-apex-line.html');
        const component = createComponent(html)
        return component
    }
}