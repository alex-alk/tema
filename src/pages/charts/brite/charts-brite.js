import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class ChartsBrite {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/brite/charts-brite.html');
        const component = createComponent(html)

        return component
    }
}