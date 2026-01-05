import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexBar {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/bar/charts-apex-bar.html');
        const component = createComponent(html)
        return component
    }
}