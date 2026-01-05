import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UITooltips {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/tooltips/ui-tooltips.html');
        const component = createComponent(html)
        return component
    }
}