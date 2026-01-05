import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TablesCustom {

    async getElement() {
        const html = await fetchHTML('/src/pages/tables/custom/tables-custom.html');
        const component = createComponent(html)
        return component
    }
}