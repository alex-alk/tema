import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class AppsCalendar {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/calendar/apps-calendar.html');
        const component = createComponent(html)

        return component
    }
}