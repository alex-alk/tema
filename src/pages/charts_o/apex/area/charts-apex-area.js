import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexArea {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/area/charts-apex-area.html');
        const component = createComponent(html)
        return component
    }
}