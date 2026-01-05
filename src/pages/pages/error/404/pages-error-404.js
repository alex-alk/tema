import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesError404 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/error/404/pages-error-404.html');
        const component = createComponent(html)

        return component
    }
}