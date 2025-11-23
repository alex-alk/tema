import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceCategories {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/categories/ecommerce-categories.html');
        const component = createComponent(html)
        return component
    }
}