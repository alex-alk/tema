import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TopbarGradient {

    async getElement() {
        const html = await fetchHTML('/src/pages/topbar/gradient/topbar-gradient.html');
        const component = createComponent(html)
        return component
    }
}