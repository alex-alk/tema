import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class Widgets {

    async getElement() {
        const html = await fetchHTML('/src/pages/widgets/widgets.html');
        const component = createComponent(html)
        return component
    }
}