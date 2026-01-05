import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesBasic {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/basic/tables-basic.html');
        const component = createComponent(html)
        return component
    }
}