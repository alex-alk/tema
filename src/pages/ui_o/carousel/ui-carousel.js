import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UICarousel {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/carousel/ui-carousel.html');
        const component = createComponent(html)
        return component
    }
}