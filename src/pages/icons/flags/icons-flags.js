import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsFlags {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/flags/icons-flags.html');
        const component = createComponent(html)
        return component
    }
}