import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesFaq {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/faq/pages-faq.html');
        const component = createComponent(html)
        return component
    }
}