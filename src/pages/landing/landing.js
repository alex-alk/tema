import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class Landing {

    async getElement() {
        const html = await fetchHTML('/src/pages/landing/landing.html');
        const component = createComponent(html)
        return component
    }
}