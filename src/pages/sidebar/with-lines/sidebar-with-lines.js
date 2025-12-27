import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarWithLines {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/with-lines/sidebar-with-lines.html');
        const component = createComponent(html)

        return component
    }
}