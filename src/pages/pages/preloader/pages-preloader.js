import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesPreloader {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/preloader/pages-preloader.html');
        const component = createComponent(html)
        return component
    }
}