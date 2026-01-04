import { createComponent, fetchHTML } from '../../../../../js_modules/main.js'

export class AppsEcommerceSellers {

    async getElement() {
        const html = await fetchHTML('/src/pages/apps/ecommerce/sellers/apps-ecommerce-sellers.html');
        const component = createComponent(html)

        return component
    }
}