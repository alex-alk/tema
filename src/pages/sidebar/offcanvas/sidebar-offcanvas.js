import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarOffcanvas {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/offcanvas/sidebar-offcanvas.html');
        const component = createComponent(html)

        return component
    }
}