import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedRatings {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/ratings/extended-ratings.html');
        const component = createComponent(html)
        return component
    }
}