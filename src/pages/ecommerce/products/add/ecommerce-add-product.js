import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceAddProduct {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/products/add/ecommerce-add-product.html');
        const component = createComponent(html)
        return component
    }
}