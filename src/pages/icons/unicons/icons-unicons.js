import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsUnicons {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/unicons/icons-unicons.html');
        const component = createComponent(html)
        return component
    }
}