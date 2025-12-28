import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIColors {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/colors/ui-colors.html');
        const component = createComponent(html)
        return component
    }
}