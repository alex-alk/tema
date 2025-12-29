import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscI18 {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/i18/misc-i18.html');
        const component = createComponent(html)
        return component
    }
}