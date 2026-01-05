import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsTabler {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/tabler/icons-tabler.html');
        const component = createComponent(html)
        return component
    }
}