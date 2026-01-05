import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIListGroup {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/list-group/ui-list-group.html');
        const component = createComponent(html)
        return component
    }
}