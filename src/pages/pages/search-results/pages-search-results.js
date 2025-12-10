import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesSearchResults {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/search-results/pages-search-results.html');
        const component = createComponent(html)
        return component
    }
}