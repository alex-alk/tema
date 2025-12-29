import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscSortable{

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/sortable/misc-sortable.html');
        const component = createComponent(html)
        return component
    }
}