import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TopbarGray {

    async getElement() {
        const html = await fetchHTML('/src/pages/topbar/gray/topbar-gray.html');
        const component = createComponent(html)
        return component
    }
}