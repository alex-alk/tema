import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ChartsApexTimeline {

    async getElement() {
        const html = await fetchHTML('/src/pages/charts/apex/timeline/charts-apex-timeline.html');
        const component = createComponent(html)
        return component
    }
}