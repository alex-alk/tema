import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class EcommerceReviews {

    async getElement() {
        const html = await fetchHTML('/src/pages/ecommerce/reviews/ecommerce-reviews.html');
        const component = createComponent(html)
        return component
    }
}