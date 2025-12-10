import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesPricing {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/pricing/pages-pricing.html');
        const component = createComponent(html)
        return component
    }
}