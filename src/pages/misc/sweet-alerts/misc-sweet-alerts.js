import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscSweetAlerts {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/sweet-alerts/misc-sweet-alerts.html');
        const component = createComponent(html)
        return component
    }
}