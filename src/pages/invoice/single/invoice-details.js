import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class InvoiceDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/invoice/single/invoice-details.html');
        const component = createComponent(html)
        return component
    }
}