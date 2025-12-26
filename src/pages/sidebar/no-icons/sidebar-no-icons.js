import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarNoIcons {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/no-icons/sidebar-no-icons.html');
        const component = createComponent(html)

        return component
    }
}