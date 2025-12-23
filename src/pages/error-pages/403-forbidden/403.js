import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Forbidden {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/403-forbidden/403.html');
        const component = createComponent(html)

        return component
    }
}