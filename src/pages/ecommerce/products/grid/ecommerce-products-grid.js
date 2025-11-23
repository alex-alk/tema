import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceProductsGrid {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/products/grid/ecommerce-products-grid.html');
        const component = createComponent(html)
        return component
    }
}