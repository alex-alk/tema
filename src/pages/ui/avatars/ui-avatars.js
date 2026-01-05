import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIAvatars {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/avatars/ui-avatars.html');
        const component = createComponent(html)
        return component
    }
}