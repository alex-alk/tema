import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class InvoiceCreate {

    async getElement() {
        const html = await fetchHTML('/src/pages/invoice/create/invoice-create.html');
        const component = createComponent(html)
        return component
    }
}