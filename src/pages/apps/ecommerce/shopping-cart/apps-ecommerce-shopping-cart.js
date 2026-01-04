import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceShoppingCart {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/shopping-cart/apps-ecommerce-shopping-cart.html');
        const component = createComponent(html)

        return component
    }
}