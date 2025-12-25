import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarOnHover {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/on-hover/sidebar-on-hover.html');
        const component = createComponent(html)

        return component
    }
}