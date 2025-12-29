import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscTour {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/tour/misc-tour.html');
        const component = createComponent(html)
        return component
    }
}