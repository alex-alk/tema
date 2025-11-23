import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceProductDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/products/details/ecommerce-product-details.html');
        const component = createComponent(html)
        return component
    }
}