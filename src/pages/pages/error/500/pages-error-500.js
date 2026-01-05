import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesError500 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/error/500/pages-error-500.html');
        const component = createComponent(html)

        return component
    }
}