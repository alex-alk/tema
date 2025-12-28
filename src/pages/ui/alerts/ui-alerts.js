import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIAlerts {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/alerts/ui-alerts.html');
        const component = createComponent(html)
        return component
    }
}