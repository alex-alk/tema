import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class FormOtherPlugins {

    async getElement() {
        const html = await fetchHTML('/src/pages/form/other-plugins/form-other-plugins.html')
        const component = createComponent(html)
        return component
    }
}