import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceOrderDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/order-details/apps-ecommerce-order-details.html');
        const component = createComponent(html)

        return component
    }
}