import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscTreeView {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/tree-view/misc-tree-view.html');
        const component = createComponent(html)
        return component
    }
}