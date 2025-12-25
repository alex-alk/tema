import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class SidebarImage {

    async getElement() {
        const html = await fetchHTML('/src/pages/sidebar/image/sidebar-image.html');
        const component = createComponent(html)

        return component
    }
}