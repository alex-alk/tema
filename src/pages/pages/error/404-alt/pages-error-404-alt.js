import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesError404Alt {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/error/404-alt/pages-error-404-alt.html');
        const component = createComponent(html)

        return component
    }
}