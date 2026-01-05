import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class PagesProfile {

    async getElement() {
        const html = await fetchHTML('/src/pages/pages/profile/pages-profile.html');
        const component = createComponent(html)
        return component
    }
}