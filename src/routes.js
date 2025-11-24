const AppLayout = async () => (await import('./common/AppLayout.js')).AppLayout
import Router from '../js_modules/Router.js'

// Lazy load
const Dashboard = async () => (await import('./pages/dashboards/dashboard/dashboard.js')).Dashboard
const Dashboard2 = async () => (await import('./pages/dashboards/dashboard-2/dashboard-2.js')).Dashboard2
const AboutPage = async () => (await import('./AboutPage.js')).AboutPage
const AboutPagee = async () => (await import('./AboutPagee.js')).AboutPagee
const Users = async () => (await import('./Users.js')).Users
const Button = async () => (await import('./uikit/button/button.js')).Button
const Input = async () => (await import('./pages/forms-basic-inputs/input.js')).Input
const Login = async () => (await import('./pages/login/login.js')).Login
const NotFound = async () => (await import('./pages/error-pages/404-not-found/404.js')).NotFound
const Chat = async () => (await import('./pages/chat/chat.js')).Chat
const Calendar = async () => (await import('./pages/calendar/calendar.js')).Calendar
const FileManager = async () => (await import('./pages/file-manager/file-manager.js')).FileManager
const EcommerceProducts = async () => (await import('./pages/ecommerce/products/listing/ecommerce-products.js')).EcommerceProducts
const EcommerceProductsGrid = async () => (await import('./pages/ecommerce/products/grid/ecommerce-products-grid.js')).EcommerceProductsGrid
const EcommerceProductDetails = async () => (await import('./pages/ecommerce/products/details/ecommerce-product-details.js')).EcommerceProductDetails
const EcommerceAddProduct = async () => (await import('./pages/ecommerce/products/add/ecommerce-add-product.js')).EcommerceAddProduct
const EcommerceCategories = async () => (await import('./pages/ecommerce/categories/ecommerce-categories.js')).EcommerceCategories
const EcommerceOrders = async () => (await import('./pages/ecommerce/orders/orders/ecommerce-orders.js')).EcommerceOrders
const EcommerceOrderDetails = async () => (await import('./pages/ecommerce/orders/details/ecommerce-order-details.js')).EcommerceOrderDetails
const EcommerceCustomers = async () => (await import('./pages/ecommerce/customers/ecommerce-customers.js')).EcommerceCustomers
const EcommerceSellers = async () => (await import('./pages/ecommerce/sellers/sellers/ecommerce-sellers.js')).EcommerceSellers
const EcommerceSellerDetails = async () => (await import('./pages/ecommerce/sellers/details/ecommerce-seller-details.js')).EcommerceSellerDetails
const EcommerceReviews = async () => (await import('./pages/ecommerce/reviews/ecommerce-reviews.js')).EcommerceReviews
const Email = async () => (await import('./pages/email/inbox/email.js')).Email
const EmailDetails = async () => (await import('./pages/email/details/email-details.js')).EmailDetails
const EmailCompose = async () => (await import('./pages/email/compose/email-compose.js')).EmailCompose
const EmailTemplates = async () => (await import('./pages/email/templates/email-templates.js')).EmailTemplates
const CrmContacts = async () => (await import('./pages/crm/contacts/crm-contacts.js')).CrmContacts
const CrmOpportunities = async () => (await import('./pages/crm/opportunities/crm-opportunities.js')).CrmOpportunities

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '/', component: Dashboard },
            { path: '/about', component: AboutPage },
            { path: '/users', component: Users },
            { path: '/uikit/button', component: Button },
            { path: '/forms-basic-inputs', component: Input },
            { path: '/dashboard-2', component: Dashboard2 },
            { path: '/chat', component: Chat },
            { path: '/calendar', component: Calendar },
            { path: '/file-manager', component: FileManager },
            { path: '/ecommerce-products', component: EcommerceProducts },
            { path: '/ecommerce-products-grid', component: EcommerceProductsGrid },
            { path: '/ecommerce-product-details', component: EcommerceProductDetails },
            { path: '/ecommerce-add-product', component: EcommerceAddProduct },
            { path: '/ecommerce-categories', component: EcommerceCategories },
            { path: '/ecommerce-orders', component: EcommerceOrders },
            { path: '/ecommerce-order-details', component: EcommerceOrderDetails },
            { path: '/ecommerce-customers', component: EcommerceCustomers },
            { path: '/ecommerce-sellers', component: EcommerceSellers },
            { path: '/ecommerce-seller-details', component: EcommerceSellerDetails },
            { path: '/ecommerce-reviews', component: EcommerceReviews },
            { path: '/email', component: Email },
            { path: '/email-details', component: EmailDetails },
            { path: '/email-compose', component: EmailCompose },
            { path: '/email-templates', component: EmailTemplates },
            { path: '/crm-contacts', component: CrmContacts },
            { path: '/crm-opportunities', component: CrmOpportunities }
        ]
    },
    { path: '/about', component: AboutPagee },
    { path: '/pages-login', component: Login },
    { path: '/404', component: NotFound }
]

// Change this to your app's base path, e.g. '/app' or '/' if root
const BASE_PATH = '';

export function path(projectPath) {
    return BASE_PATH + projectPath
}

// Instantiate and start router
export const router = new Router(routes, BASE_PATH);
window.addEventListener('DOMContentLoaded', () => {
    router.start();
});
