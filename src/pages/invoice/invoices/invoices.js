import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class Invoices {

    async getElement() {
        const html = await fetchHTML('/src/pages/invoice/invoices/invoices.html');
        const component = createComponent(html)
        return component
    }
}