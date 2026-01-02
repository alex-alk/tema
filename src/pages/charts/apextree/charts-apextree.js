import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApextree {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apextree/charts-apextree.html');
        const component = createComponent(html)
        return component
    }
}