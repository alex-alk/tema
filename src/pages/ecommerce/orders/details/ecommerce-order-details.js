import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceOrderDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/orders/details/ecommerce-order-details.html');
        const component = createComponent(html)
        return component
    }
}