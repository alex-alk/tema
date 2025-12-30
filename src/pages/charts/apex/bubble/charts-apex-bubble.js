import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexBubble {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/bubble/charts-apex-bubble.html');
        const component = createComponent(html)
        return component
    }
}