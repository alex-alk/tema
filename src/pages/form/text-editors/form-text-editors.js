import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormTextEditors {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/text-editors/form-text-editors.html')
        const component = createComponent(html)
        return component
    }
}