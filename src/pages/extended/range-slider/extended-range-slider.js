import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedRangeSlider {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/range-slider/extended-range-slider.html');
        const component = createComponent(html)
        return component
    }
}