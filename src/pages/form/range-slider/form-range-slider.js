import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormRangeSlider {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/range-slider/form-range-slider.html')
        const component = createComponent(html)
        return component
    }
}