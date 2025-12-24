import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarDark {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/dark/sidebar-dark.html');
        const component = createComponent(html)

        return component
    }
}