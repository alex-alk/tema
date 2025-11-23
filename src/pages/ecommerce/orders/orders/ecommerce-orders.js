import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceOrders {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/orders/orders/ecommerce-orders.html');
        const component = createComponent(html)
        return component
    }
}