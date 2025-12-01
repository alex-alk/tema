import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class TicketDetails {

    async getElement() {
        const html = await fetchHTML('/src/pages/support-center/details/ticket-details.html');
        const component = createComponent(html)
        return component
    }
}