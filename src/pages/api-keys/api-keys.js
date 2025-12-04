import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class ApiKeys {

    async getElement() {
        const html = await fetchHTML('/src/pages/api-keys/api-keys.html');
        const component = createComponent(html)
        return component
    }
}