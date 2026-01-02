import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsLucide {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/lucide/icons-lucide.html');
        const component = createComponent(html)
        return component
    }
}