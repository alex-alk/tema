import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmPipeline {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/pipeline/crm-pipeline.html');
        const component = createComponent(html)
        return component
    }
}