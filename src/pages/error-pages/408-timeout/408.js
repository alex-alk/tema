import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class Timeout {

    async getElement() {
        const html = await fetchHTML('/src/pages/error-pages/408-timeout/408.html');
        const component = createComponent(html)

        return component
    }
}