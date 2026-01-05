import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class IconsMdi {

    async getElement() {
        const html = await fetchHTML('/src/pages/icons/mdi/icons-mdi.html');
        const component = createComponent(html)
        return component
    }
}