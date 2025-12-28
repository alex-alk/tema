import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UITypography {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/typography/ui-typography.html');
        const component = createComponent(html)
        return component
    }
}