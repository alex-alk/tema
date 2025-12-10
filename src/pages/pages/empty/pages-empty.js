import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesEmpty {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/empty/pages-empty.html');
        const component = createComponent(html)
        return component
    }
}