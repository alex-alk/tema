import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsRemixicons {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/remixicons/icons-remixicons.html');
        const component = createComponent(html)
        return component
    }
}