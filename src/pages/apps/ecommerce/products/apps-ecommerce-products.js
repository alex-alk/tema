import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceProducts {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/products/apps-ecommerce-products.html');
        const component = createComponent(html)

        return component
    }
}