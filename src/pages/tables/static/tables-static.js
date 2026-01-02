import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesStatic {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/static/tables-static.html');
        const component = createComponent(html)
        return component
    }
}