import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceCheckout {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/checkout/apps-ecommerce-checkout.html');
        const component = createComponent(html)

        return component
    }
}