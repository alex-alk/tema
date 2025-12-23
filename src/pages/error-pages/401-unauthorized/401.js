import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Unauthorized {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/401-unauthorized/401.html');
        const component = createComponent(html)

        return component
    }
}