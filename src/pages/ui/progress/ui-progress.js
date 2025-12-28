import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class UIProgress {

    async getElement() {
        const html = await fetchHTML('/src/pages/ui/progress/ui-progress.html');
        const component = createComponent(html)
        return component
    }
}