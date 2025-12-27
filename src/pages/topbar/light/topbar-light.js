import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TopbarLight {

    async getElement() {
        const html = await fetchHTML('/src/pages/topbar/light/topbar-light.html');
        const component = createComponent(html)
        return component
    }
}