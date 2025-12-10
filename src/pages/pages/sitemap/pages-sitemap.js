import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesSitemap {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/sitemap/pages-sitemap.html');
        const component = createComponent(html)
        return component
    }
}