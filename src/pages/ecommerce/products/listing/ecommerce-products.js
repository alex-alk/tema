import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceProducts {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/products/listing/ecommerce-products.html');
        const component = createComponent(html)
        return component
    }
}