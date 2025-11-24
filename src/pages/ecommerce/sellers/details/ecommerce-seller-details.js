import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceSellerDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/sellers/details/ecommerce-seller-details.html');
        const component = createComponent(html)
        return component
    }
}