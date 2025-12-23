import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class ServerError {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/500-server-error/500.html');
        const component = createComponent(html)

        return component
    }
}