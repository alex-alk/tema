import { createComponent, fetchHTML } from '../../../../js_modules/main.js'

export class DashboardWallet {

    async getElement() {
        const html = await fetchHTML('/src/pages/dashboards/wallet/dashboard-wallet.html');
        const component = createComponent(html)

        return component
    }
}