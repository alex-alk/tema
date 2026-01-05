import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexRadialbar {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/radialbar/charts-apex-radialbar.html');
        const component = createComponent(html)
        return component
    }
}