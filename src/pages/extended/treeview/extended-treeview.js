import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class ExtendedTreeview {

    async getElement() {
        const html = await fetchHTML('/src/pages/extended/treeview/extended-treeview.html');
        const component = createComponent(html)
        return component
    }
}