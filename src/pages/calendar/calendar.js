import { createComponent, fetchHTML } from '../../../js_modules/main.js'

export class Calendar {

    async getElement() {
        const html = await fetchHTML('/src/pages/calendar/calendar.html');
        const component = createComponent(html)

        return component
    }
}