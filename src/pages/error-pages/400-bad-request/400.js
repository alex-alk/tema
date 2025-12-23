import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class BadRequest {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/400-bad-request/400.html');
        const component = createComponent(html)

        return component
    }
}