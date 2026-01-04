import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class CrmCampaign {

    async getElement() {
        const html = await fetchHTML('/src/pages/crm/campaign/crm-campaign.html');
        const component = createComponent(html)
        return component
    }
}