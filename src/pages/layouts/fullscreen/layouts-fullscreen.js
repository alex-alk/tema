import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsFullscreen {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/fullscreen/layouts-fullscreen.html');
        const component = createComponent(html)

        return component
    }
}