import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesProfile2 {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/profile-2/pages-profile-2.html');
        const component = createComponent(html)
        return component
    }
}