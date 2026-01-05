import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesTimeline {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/timeline/pages-timeline.html');
        const component = createComponent(html)
        return component
    }
}