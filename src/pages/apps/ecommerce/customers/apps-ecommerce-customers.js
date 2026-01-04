import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceCustomers {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/customers/apps-ecommerce-customers.html');
        const component = createComponent(html)

        return component
    }
}