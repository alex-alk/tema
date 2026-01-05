import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIPagination {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/pagination/ui-pagination.html');
        const component = createComponent(html)
        return component
    }
}