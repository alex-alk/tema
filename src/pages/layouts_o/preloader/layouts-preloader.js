import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class LayoutsPreloader {

    async getElement() {
        const html = await fetchHTML('/src/pages/layouts/preloader/layouts-preloader.html');
        const component = createComponent(html)

        return component
    }
}