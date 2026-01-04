import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceProductDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/product-details/apps-ecommerce-product-details.html');
        const component = createComponent(html)

        return component
    }
}