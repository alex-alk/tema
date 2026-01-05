import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormEditors {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/editors/form-editors.html')
        const component = createComponent(html)
        return component
    }
}