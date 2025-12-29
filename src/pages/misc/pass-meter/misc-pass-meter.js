import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class MiscPassMeter {

    async getElement() {
        const html = await fetchHTML('/src/pages/misc/pass-meter/misc-pass-meter.html');
        const component = createComponent(html)
        return component
    }
}