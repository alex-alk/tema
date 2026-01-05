import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormFileuploads {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/fileuploads/form-fileuploads.html');
        const component = createComponent(html)
        return component
    }
}