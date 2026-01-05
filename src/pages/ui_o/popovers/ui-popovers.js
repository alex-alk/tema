import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIPopovers {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/popovers/ui-popovers.html');
        const component = createComponent(html)
        return component
    }
}