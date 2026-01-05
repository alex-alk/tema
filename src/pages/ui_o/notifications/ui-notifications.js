import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UINotifications {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/notifications/ui-notifications.html');
        const component = createComponent(html)
        return component
    }
}