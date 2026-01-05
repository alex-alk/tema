import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesInvoice {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/invoice/pages-invoice.html');
        const component = createComponent(html)
        return component
    }
}