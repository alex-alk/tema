import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesComingSoon {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/coming-soon/pages-coming-soon.html');
        const component = createComponent(html)
        return component
    }
}