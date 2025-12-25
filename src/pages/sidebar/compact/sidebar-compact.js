import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarCompact {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/compact/sidebar-compact.html');
        const component = createComponent(html)

        return component
    }
}