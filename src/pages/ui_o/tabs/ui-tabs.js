import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UITabs {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/tabs/ui-tabs.html');
        const component = createComponent(html)
        return component
    }
}