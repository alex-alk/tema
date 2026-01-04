import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceOrders {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/orders/apps-ecommerce-orders.html');
        const component = createComponent(html)

        return component
    }
}