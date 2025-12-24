import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarGradient {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/gradient/sidebar-gradient.html');
        const component = createComponent(html)

        return component
    }
}