import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesTermsConditions {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/terms-conditions/pages-terms-conditions.html');
        const component = createComponent(html)
        return component
    }
}