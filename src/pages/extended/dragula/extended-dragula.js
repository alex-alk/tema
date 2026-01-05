import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedDragula {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/dragula/extended-dragula.html');
        const component = createComponent(html)
        return component
    }
}