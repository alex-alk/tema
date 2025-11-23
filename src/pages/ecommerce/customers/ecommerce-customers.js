import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceCustomers {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/customers/ecommerce-customers.html');
        const component = createComponent(html)
        return component
    }
}