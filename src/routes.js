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
const CrmDeals = async () => (await import('./pages/crm/deals/crm-deals.js')).CrmDeals
const CrmLeads = async () => (await import('./pages/crm/leads/crm-leads.js')).CrmLeads
const CrmPipeline = async () => (await import('./pages/crm/pipeline/crm-pipeline.js')).CrmPipeline
const CrmCampaign = async () => (await import('./pages/crm/campaign/crm-campaign.js')).CrmCampaign
const CrmProposals = async () => (await import('./pages/crm/proposals/crm-proposals.js')).CrmProposals
const CrmEstimations = async () => (await import('./pages/crm/estimations/crm-estimations.js')).CrmEstimations
const CrmCustomers = async () => (await import('./pages/crm/customers/crm-customers.js')).CrmCustomers
const CrmActivities = async () => (await import('./pages/crm/activities/crm-activities.js')).CrmActivities
const UsersContacts = async () => (await import('./pages/users/contacts/users-contacts.js')).UsersContacts
const UsersProfile = async () => (await import('./pages/users/profile/users-profile.js')).UsersProfile
const UsersRoles = async () => (await import('./pages/users/roles/users-roles.js')).UsersRoles
const UsersRoleDetails = async () => (await import('./pages/users/role-details/users-role-details.js')).UsersRoleDetails
const UsersPermissions = async () => (await import('./pages/users/permissions/users-permissions.js')).UsersPermissions
const Invoices = async () => (await import('./pages/invoice/invoices/invoices.js')).Invoices
const InvoiceDetails = async () => (await import('./pages/invoice/single/invoice-details.js')).InvoiceDetails
const InvoiceCreate = async () => (await import('./pages/invoice/create/invoice-create.js')).InvoiceCreate
const SocialFeed = async () => (await import('./pages/social-feed/social-feed.js')).SocialFeed
const Tickets = async () => (await import('./pages/support-center/tickets/tickets.js')).Tickets
const TicketDetails = async () => (await import('./pages/support-center/details/ticket-details.js')).TicketDetails
const TicketCreate = async () => (await import('./pages/support-center/create/ticket-create.js')).TicketCreate
const ApiKeys = async () => (await import('./pages/api-keys/api-keys.js')).ApiKeys
const PagesFaq = async () => (await import('./pages/pages/faq/pages-faq.js')).PagesFaq
const PagesPricing = async () => (await import('./pages/pages/pricing/pages-pricing.js')).PagesPricing
const PagesEmpty = async () => (await import('./pages/pages/empty/pages-empty.js')).PagesEmpty
const PagesTimeline = async () => (await import('./pages/pages/timeline/pages-timeline.js')).PagesTimeline
const PagesSitemap = async () => (await import('./pages/pages/sitemap/pages-sitemap.js')).PagesSitemap
const PagesSearchResults = async () => (await import('./pages/pages/search-results/pages-search-results.js')).PagesSearchResults
const PagesComingSoon = async () => (await import('./pages/pages/coming-soon/pages-coming-soon.js')).PagesComingSoon
const PagesTermsConditions = async () => (await import('./pages/pages/terms-conditions/pages-terms-conditions.js')).PagesTermsConditions
const AuthSignIn = async () => (await import('./pages/auth/basic/sign-in/auth-sign-in.js')).AuthSignIn
const AuthSignUp = async () => (await import('./pages/auth/basic/sign-up/auth-sign-up.js')).AuthSignUp
const AuthResetPass = async () => (await import('./pages/auth/basic/reset-pass/auth-reset-pass.js')).AuthResetPass
const AuthNewPass = async () => (await import('./pages/auth/basic/new-pass/auth-new-pass.js')).AuthNewPass
const AuthTwoFactor = async () => (await import('./pages/auth/basic/two-factor/auth-two-factor.js')).AuthTwoFactor
const AuthLockScreen = async () => (await import('./pages/auth/basic/lock-screen/auth-lock-screen.js')).AuthLockScreen


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
            { path: '/crm-opportunities', component: CrmOpportunities },
            { path: '/crm-deals', component: CrmDeals },
            { path: '/crm-leads', component: CrmLeads },
            { path: '/crm-pipeline', component: CrmPipeline },
            { path: '/crm-campaign', component: CrmCampaign },
            { path: '/crm-proposals', component: CrmProposals },
            { path: '/crm-estimations', component: CrmEstimations },
            { path: '/crm-customers', component: CrmCustomers },
            { path: '/crm-activities', component: CrmActivities },
            { path: '/users-contacts', component: UsersContacts },
            { path: '/users-profile', component: UsersProfile },
            { path: '/users-roles', component: UsersRoles },
            { path: '/users-role-details', component: UsersRoleDetails },
            { path: '/users-permissions', component: UsersPermissions },
            { path: '/invoices', component: Invoices },
            { path: '/invoice-details', component: InvoiceDetails },
            { path: '/invoice-create', component: InvoiceCreate },
            { path: '/social-feed', component: SocialFeed },
            { path: '/tickets-list', component: Tickets },
            { path: '/ticket-details', component: TicketDetails },
            { path: '/ticket-create', component: TicketCreate },
            { path: '/api-keys', component: ApiKeys },
            { path: '/pages-faq', component: PagesFaq },
            { path: '/pages-pricing', component: PagesPricing },
            { path: '/pages-empty', component: PagesEmpty },
            { path: '/pages-timeline', component: PagesTimeline },
            { path: '/pages-sitemap', component: PagesSitemap },
            { path: '/pages-search-results', component: PagesSearchResults },
            { path: '/pages-terms-conditions', component: PagesTermsConditions }
        ]
    },
    { path: '/about', component: AboutPagee },
    { path: '/pages-login', component: Login },
    { path: '/404', component: NotFound },
    { path: '/pages-coming-soon', component: PagesComingSoon },
    { path: '/auth-sign-in', component: AuthSignIn },
    { path: '/auth-sign-up', component: AuthSignUp },
    { path: '/auth-reset-pass', component: AuthResetPass },
    { path: '/auth-new-pass', component: AuthNewPass },
    { path: '/auth-two-factor', component: AuthTwoFactor },
    { path: '/auth-lock-screen', component: AuthLockScreen }


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
