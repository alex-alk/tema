import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceSellers {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/sellers/sellers/ecommerce-sellers.html');
        const component = createComponent(html)
        return component
    }
}