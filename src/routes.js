const AppLayout = async () => (await import('./common/AppLayout.js')).AppLayout
import Router from '../js_modules/Router.js'

// Lazy load
// todo: incercat daca merge cu callback in loc de async
// old
// const Dashboard2 = async () => (await import('./pages/dashboards/dashboard-2/dashboard-2.js')).Dashboard2
// const AboutPage = async () => (await import('./AboutPage.js')).AboutPage
// const AboutPagee = async () => (await import('./AboutPagee.js')).AboutPagee
// const Users = async () => (await import('./Users.js')).Users
// const Button = async () => (await import('./uikit/button/button.js')).Button
// const Input = async () => (await import('./pages/forms-basic-inputs/input.js')).Input
// const Login = async () => (await import('./pages/login/login.js')).Login
// const NotFound = async () => (await import('./pages/error-pages/404-not-found/404.js')).NotFound
// const Landing_o = async () => (await import('./pages/landing/landing.js')).Landing
// const Chat = async () => (await import('./pages/chat/chat.js')).Chat
// const Calendar = async () => (await import('./pages/calendar/calendar.js')).Calendar
// const FileManager = async () => (await import('./pages/file-manager/file-manager.js')).FileManager
// const EcommerceProducts = async () => (await import('./pages/ecommerce/products/listing/ecommerce-products.js')).EcommerceProducts
// const EcommerceProductsGrid = async () => (await import('./pages/ecommerce/products/grid/ecommerce-products-grid.js')).EcommerceProductsGrid
// const EcommerceProductDetails = async () => (await import('./pages/ecommerce/products/details/ecommerce-product-details.js')).EcommerceProductDetails
// const EcommerceAddProduct = async () => (await import('./pages/ecommerce/products/add/ecommerce-add-product.js')).EcommerceAddProduct
// const EcommerceCategories = async () => (await import('./pages/ecommerce/categories/ecommerce-categories.js')).EcommerceCategories
// const EcommerceOrders = async () => (await import('./pages/ecommerce/orders/orders/ecommerce-orders.js')).EcommerceOrders
// const EcommerceOrderDetails = async () => (await import('./pages/ecommerce/orders/details/ecommerce-order-details.js')).EcommerceOrderDetails
// const EcommerceCustomers = async () => (await import('./pages/ecommerce/customers/ecommerce-customers.js')).EcommerceCustomers
// const EcommerceSellers = async () => (await import('./pages/ecommerce/sellers/sellers/ecommerce-sellers.js')).EcommerceSellers
// const EcommerceSellerDetails = async () => (await import('./pages/ecommerce/sellers/details/ecommerce-seller-details.js')).EcommerceSellerDetails
// const EcommerceReviews = async () => (await import('./pages/ecommerce/reviews/ecommerce-reviews.js')).EcommerceReviews
// const Email = async () => (await import('./pages/email/inbox/email.js')).Email
// const EmailDetails = async () => (await import('./pages/email/details/email-details.js')).EmailDetails
// const EmailCompose = async () => (await import('./pages/email/compose/email-compose.js')).EmailCompose
// const EmailTemplates = async () => (await import('./pages/email/templates/email-templates.js')).EmailTemplates
// const CrmContacts = async () => (await import('./pages/crm_o/contacts/crm-contacts.js')).CrmContacts
// const CrmOpportunities = async () => (await import('./pages/crm_o/opportunities/crm-opportunities.js')).CrmOpportunities
// const CrmDeals = async () => (await import('./pages/crm_o/deals/crm-deals.js')).CrmDeals
// const CrmLeads = async () => (await import('./pages/crm_o/leads/crm-leads.js')).CrmLeads
// const CrmPipeline = async () => (await import('./pages/crm_o/pipeline/crm-pipeline.js')).CrmPipeline
// const CrmCampaign = async () => (await import('./pages/crm_o/campaign/crm-campaign.js')).CrmCampaign
// const CrmProposals = async () => (await import('./pages/crm_o/proposals/crm-proposals.js')).CrmProposals
// const CrmEstimations = async () => (await import('./pages/crm_o/estimations/crm-estimations.js')).CrmEstimations
// const CrmCustomers = async () => (await import('./pages/crm_o/customers/crm-customers.js')).CrmCustomers
// const CrmActivities = async () => (await import('./pages/crm_o/activities/crm-activities.js')).CrmActivities
// const UsersContacts = async () => (await import('./pages/users/contacts/users-contacts.js')).UsersContacts
// const UsersProfile = async () => (await import('./pages/users/profile/users-profile.js')).UsersProfile
// const UsersRoles = async () => (await import('./pages/users/roles/users-roles.js')).UsersRoles
// const UsersRoleDetails = async () => (await import('./pages/users/role-details/users-role-details.js')).UsersRoleDetails
// const UsersPermissions = async () => (await import('./pages/users/permissions/users-permissions.js')).UsersPermissions
// const Invoices = async () => (await import('./pages/invoice/invoices/invoices.js')).Invoices
// const InvoiceDetails = async () => (await import('./pages/invoice/single/invoice-details.js')).InvoiceDetails
// const InvoiceCreate = async () => (await import('./pages/invoice/create/invoice-create.js')).InvoiceCreate
// const SocialFeed = async () => (await import('./pages/social-feed/social-feed.js')).SocialFeed
// const Tickets = async () => (await import('./pages/support-center/tickets/tickets.js')).Tickets
// const TicketDetails = async () => (await import('./pages/support-center/details/ticket-details.js')).TicketDetails
// const TicketCreate = async () => (await import('./pages/support-center/create/ticket-create.js')).TicketCreate
// const ApiKeys = async () => (await import('./pages/api-keys/api-keys.js')).ApiKeys
// const PagesFaq_o = async () => (await import('./pages/pages_o/faq/pages-faq.js')).PagesFaq
// const PagesPricing_o = async () => (await import('./pages/pages_o/pricing/pages-pricing.js')).PagesPricing
// const PagesEmpty = async () => (await import('./pages/pages_o/empty/pages-empty.js')).PagesEmpty
// const PagesTimeline_o = async () => (await import('./pages/pages_o/timeline/pages-timeline.js')).PagesTimeline
// const PagesSitemap = async () => (await import('./pages/pages_o/sitemap/pages-sitemap.js')).PagesSitemap
// const PagesSearchResults = async () => (await import('./pages/pages_o/search-results/pages-search-results.js')).PagesSearchResults
// const PagesComingSoon = async () => (await import('./pages/pages_o/coming-soon/pages-coming-soon.js')).PagesComingSoon
// const PagesTermsConditions = async () => (await import('./pages/pages_o/terms-conditions/pages-terms-conditions.js')).PagesTermsConditions
// const AuthSignIn = async () => (await import('./pages/auth/basic/sign-in/auth-sign-in.js')).AuthSignIn
// const AuthSignUp = async () => (await import('./pages/auth/basic/sign-up/auth-sign-up.js')).AuthSignUp
// const AuthResetPass = async () => (await import('./pages/auth/basic/reset-pass/auth-reset-pass.js')).AuthResetPass
// const AuthNewPass = async () => (await import('./pages/auth/basic/new-pass/auth-new-pass.js')).AuthNewPass
// const AuthTwoFactor = async () => (await import('./pages/auth/basic/two-factor/auth-two-factor.js')).AuthTwoFactor
// const AuthLockScreen = async () => (await import('./pages/auth/basic/lock-screen/auth-lock-screen.js')).AuthLockScreen
// const AuthSuccessMail = async () => (await import('./pages/auth/basic/success-mail/auth-success-mail.js')).AuthSuccessMail
// const AuthLoginPin = async () => (await import('./pages/auth/basic/login-pin/auth-login-pin.js')).AuthLoginPin
// const AuthDeleteAccount = async () => (await import('./pages/auth/basic/delete-account/auth-delete-account.js')).AuthDeleteAccount
// const AuthCoverSignIn = async () => (await import('./pages/auth/cover/sign-in/auth-cover-sign-in.js')).AuthCoverSignIn
// const AuthCoverSignUp = async () => (await import('./pages/auth/cover/sign-up/auth-cover-sign-up.js')).AuthCoverSignUp
// const AuthCoverResetPass = async () => (await import('./pages/auth/cover/reset-pass/auth-cover-reset-pass.js')).AuthCoverResetPass
// const AuthCoverNewPass = async () => (await import('./pages/auth/cover/new-pass/auth-cover-new-pass.js')).AuthCoverNewPass
// const AuthCoverTwoFactor = async () => (await import('./pages/auth/cover/two-factor/auth-cover-two-factor.js')).AuthCoverTwoFactor
// const AuthCoverLockScreen = async () => (await import('./pages/auth/cover/lock-screen/auth-cover-lock-screen.js')).AuthCoverLockScreen
// const AuthCoverSuccessMail = async () => (await import('./pages/auth/cover/success-mail/auth-cover-success-mail.js')).AuthCoverSuccessMail
// const AuthCoverLoginPin = async () => (await import('./pages/auth/cover/login-pin/auth-cover-login-pin.js')).AuthCoverLoginPin
// const AuthCoverDeleteAccount = async () => (await import('./pages/auth/cover/delete-account/auth-cover-delete-account.js')).AuthCoverDeleteAccount
// const BadRequest = async () => (await import('./pages/error-pages/400-bad-request/400.js')).BadRequest
// const Unauthorized = async () => (await import('./pages/error-pages/401-unauthorized/401.js')).Unauthorized
// const Forbidden = async () => (await import('./pages/error-pages/403-forbidden/403.js')).Forbidden
// const Timeout = async () => (await import('./pages/error-pages/408-timeout/408.js')).Timeout
// const ServerError = async () => (await import('./pages/error-pages/500-server-error/500.js')).ServerError
// const Maintenance = async () => (await import('./pages/error-pages/maintenance/maintenance.js')).Maintenance
// const LayoutsScrollable = async () => (await import('./pages/layouts/scrollable/layouts-scrollable.js')).LayoutsScrollable
// const LayoutsCompact_o = async () => (await import('./pages/layouts/compact/layouts-compact.js')).LayoutsCompact
// const LayoutsBoxed = async () => (await import('./pages/layouts/hover/layouts-hover.js')).LayoutsBoxed
// const LayoutsHorizontal_o = async () => (await import('./pages/layouts/horizontal/layouts-horizontal.js')).LayoutsHorizontal
// const LayoutsPreloader = async () => (await import('./pages/layouts/icon-view/layouts-icon-view.js')).LayoutsPreloader
// const SidebarDark = async () => (await import('./pages/sidebar/dark/sidebar-dark.js')).SidebarDark
// const SidebarGradient = async () => (await import('./pages/sidebar/gradient/sidebar-gradient.js')).SidebarGradient
// const SidebarGray = async () => (await import('./pages/sidebar/gray/sidebar-gray.js')).SidebarGray
// const SidebarImage = async () => (await import('./pages/sidebar/image/sidebar-image.js')).SidebarImage
// const SidebarCompact = async () => (await import('./pages/sidebar/compact/sidebar-compact.js')).SidebarCompact
// const SidebarIconView = async () => (await import('./pages/sidebar/icon-view/sidebar-icon-view.js')).SidebarIconView
// const SidebarOnHover = async () => (await import('./pages/sidebar/on-hover/sidebar-on-hover.js')).SidebarOnHover
// const SidebarOnHoverActive = async () => (await import('./pages/sidebar/on-hover-active/sidebar-on-hover-active.js')).SidebarOnHoverActive
// const SidebarOffcanvas = async () => (await import('./pages/sidebar/offcanvas/sidebar-offcanvas.js')).SidebarOffcanvas
// const SidebarNoIcons = async () => (await import('./pages/sidebar/no-icons/sidebar-no-icons.js')).SidebarNoIcons
// const SidebarWithLines = async () => (await import('./pages/sidebar/with-lines/sidebar-with-lines.js')).SidebarWithLines
// const TopbarLight = async () => (await import('./pages/topbar/light/topbar-light.js')).TopbarLight
// const TopbarGray = async () => (await import('./pages/topbar/gray/topbar-gray.js')).TopbarGray
// const TopbarGradient = async () => (await import('./pages/topbar/gradient/topbar-gradient.js')).TopbarGradient
// const UIButtons = async () => (await import('./pages/ui/buttons/ui-buttons.js')).UIButtons
// const UIImages = async () => (await import('./pages/ui/images/ui-images.js')).UIImages
// const UIAccordions = async () => (await import('./pages/ui/accordions/ui-accordions.js')).UIAccordions
// const UIAlerts = async () => (await import('./pages/ui/alerts/ui-alerts.js')).UIAlerts
// const UIBadges = async () => (await import('./pages/ui/badges/ui-badges.js')).UIBadges
// const UIBreadcrumb = async () => (await import('./pages/ui/breadcrumb/ui-breadcrumb.js')).UIBreadcrumb
// const UICards = async () => (await import('./pages/ui/cards/ui-cards.js')).UICards
// const UICarousel = async () => (await import('./pages/ui/carousel/ui-carousel.js')).UICarousel
// const UICollapse = async () => (await import('./pages/ui/collapse/ui-collapse.js')).UICollapse
// const UIColors = async () => (await import('./pages/ui/colors/ui-colors.js')).UIColors
// const UIDropdowns = async () => (await import('./pages/ui/dropdowns/ui-dropdowns.js')).UIDropdowns
// const UIVideos = async () => (await import('./pages/ui/videos/ui-videos.js')).UIVideos
// const UIGrid = async () => (await import('./pages/ui/grid/ui-grid.js')).UIGrid
// const UILinks = async () => (await import('./pages/ui/links/ui-links.js')).UILinks
// const UIListGroup = async () => (await import('./pages/ui/list-group/ui-list-group.js')).UIListGroup
// const UIModals = async () => (await import('./pages/ui/modals/ui-modals.js')).UIModals
// const UINotifications = async () => (await import('./pages/ui/notifications/ui-notifications.js')).UINotifications
// const UIOffcanvas = async () => (await import('./pages/ui/offcanvas/ui-offcanvas.js')).UIOffcanvas
// const UIPlaceholders = async () => (await import('./pages/ui/placeholders/ui-placeholders.js')).UIPlaceholders
// const UIPagination = async () => (await import('./pages/ui/pagination/ui-pagination.js')).UIPagination
// const UIPopovers = async () => (await import('./pages/ui/popovers/ui-popovers.js')).UIPopovers
// const UIProgress = async () => (await import('./pages/ui/progress/ui-progress.js')).UIProgress
// const UIScrollspy = async () => (await import('./pages/ui/scrollspy/ui-scrollspy.js')).UIScrollspy
// const UISpinners = async () => (await import('./pages/ui/spinners/ui-spinners.js')).UISpinners
// const UITabs = async () => (await import('./pages/ui/tabs/ui-tabs.js')).UITabs
// const UITooltips = async () => (await import('./pages/ui/tooltips/ui-tooltips.js')).UITooltips
// const UITypography = async () => (await import('./pages/ui/typography/ui-typography.js')).UITypography
// const UIUtilities = async () => (await import('./pages/ui/utilities/ui-utilities.js')).UIUtilities
// const MiscSortable = async () => (await import('./pages/misc/sortable/misc-sortable.js')).MiscSortable
// const MiscPdfViewer = async () => (await import('./pages/misc/pdf-viewer/misc-pdf-viewer.js')).MiscPdfViewer
// const MiscI18 = async () => (await import('./pages/misc/i18/misc-i18.js')).MiscI18
// const MiscSweetAlerts = async () => (await import('./pages/misc/sweet-alerts/misc-sweet-alerts.js')).MiscSweetAlerts
// const MiscPassMeter = async () => (await import('./pages/misc/pass-meter/misc-pass-meter.js')).MiscPassMeter
// const MiscClipboard = async () => (await import('./pages/misc/clipboard/misc-clipboard.js')).MiscClipboard
// const MiscTreeView = async () => (await import('./pages/misc/tree-view/misc-tree-view.js')).MiscTreeView
// const MiscTour = async () => (await import('./pages/misc/tour/misc-tour.js')).MiscTour
// const Widgets = async () => (await import('./pages/widgets/widgets.js')).Widgets
// const ChartsApexArea = async () => (await import('./pages/charts/apex/area/charts-apex-area.js')).ChartsApexArea
// const ChartsApexBar = async () => (await import('./pages/charts/apex/bar/charts-apex-bar.js')).ChartsApexBar
// const ChartsApexBubble = async () => (await import('./pages/charts/apex/bubble/charts-apex-bubble.js')).ChartsApexBubble
// const ChartsApexCandlestick = async () => (await import('./pages/charts/apex/candlestick/charts-apex-candlestick.js')).ChartsApexCandlestick
// const ChartsApexColumn = async () => (await import('./pages/charts/apex/column/charts-apex-column.js')).ChartsApexColumn
// const ChartsApexHeatmap = async () => (await import('./pages/charts/apex/heatmap/charts-apex-heatmap.js')).ChartsApexHeatmap
// const ChartsApexLine = async () => (await import('./pages/charts/apex/line/charts-apex-line.js')).ChartsApexLine
// const ChartsApexMixed = async () => (await import('./pages/charts/apex/mixed/charts-apex-mixed.js')).ChartsApexMixed
// const ChartsApexTimeline = async () => (await import('./pages/charts/apex/timeline/charts-apex-timeline.js')).ChartsApexTimeline
// const ChartsApexBoxplot = async () => (await import('./pages/charts/apex/boxplot/charts-apex-boxplot.js')).ChartsApexBoxplot
// const ChartsApexTreemap = async () => (await import('./pages/charts/apex/treemap/charts-apex-treemap.js')).ChartsApexTreemap
// const ChartsApexPie = async () => (await import('./pages/charts/apex/pie/charts-apex-pie.js')).ChartsApexPie
// const ChartsApexRadar = async () => (await import('./pages/charts/apex/radar/charts-apex-radar.js')).ChartsApexRadar
// const ChartsApexRadialbar = async () => (await import('./pages/charts/apex/radialbar/charts-apex-radialbar.js')).ChartsApexRadialbar
// const ChartsApexScatter = async () => (await import('./pages/charts/apex/scatter/charts-apex-scatter.js')).ChartsApexScatter
// const ChartsApexPolarArea = async () => (await import('./pages/charts/apex/polar-area/charts-apex-polar-area.js')).ChartsApexPolarArea
// const ChartsApexSparklines = async () => (await import('./pages/charts/apex/sparklines/charts-apex-sparklines.js')).ChartsApexSparklines
// const ChartsApexRange = async () => (await import('./pages/charts/apex/range/charts-apex-range.js')).ChartsApexRange
// const ChartsApexFunnel = async () => (await import('./pages/charts/apex/funnel/charts-apex-funnel.js')).ChartsApexFunnel
// const ChartsApexSlope = async () => (await import('./pages/charts/apex/slope/charts-apex-slope.js')).ChartsApexSlope
// const ChartsChartjsArea = async () => (await import('./pages/charts/chartjs/area/charts-chartjs-area.js')).ChartsChartjsArea
// const ChartsChartjsBar = async () => (await import('./pages/charts/chartjs/bar/charts-chartjs-bar.js')).ChartsChartjsBar
// const ChartsChartjsLine = async () => (await import('./pages/charts/chartjs/line/charts-chartjs-line.js')).ChartsChartjsLine
// const ChartsChartjsOther = async () => (await import('./pages/charts/chartjs/other/charts-chartjs-other.js')).ChartsChartjsOther
// const ChartsApextree = async () => (await import('./pages/charts/apextree/charts-apextree.js')).ChartsApextree
// const ChartsApexsankey = async () => (await import('./pages/charts/apexsankey/charts-apexsankey.js')).ChartsApexsankey
// const FormElements = async () => (await import('./pages/form/elements/form-elements.js')).FormElements
// const FormPickers = async () => (await import('./pages/form/pickers/form-pickers.js')).FormPickers
// const FormSelect = async () => (await import('./pages/form/select/form-select.js')).FormSelect
// const FormValidation = async () => (await import('./pages/form/validation/form-validation.js')).FormValidation
// const FormWizard = async () => (await import('./pages/form/wizard/form-wizard.js')).FormWizard
// const FormFileuploads = async () => (await import('./pages/form/fileuploads/form-fileuploads.js')).FormFileuploads
// const FormTextEditors = async () => (await import('./pages/form/text-editors/form-text-editors.js')).FormTextEditors
// const FormRangeSlider = async () => (await import('./pages/form/range-slider/form-range-slider.js')).FormRangeSlider
// const FormLayouts = async () => (await import('./pages/form/layouts/form-layouts.js')).FormLayouts
// const FormOtherPlugins = async () => (await import('./pages/form/other-plugins/form-other-plugins.js')).FormOtherPlugins
// const TablesStatic = async () => (await import('./pages/tables/static/tables-static.js')).TablesStatic
// const TablesCustom = async () => (await import('./pages/tables/custom/tables-custom.js')).TablesCustom
// const TablesDatatablesBasic = async () => (await import('./pages/tables/datatables/basic/tables-datatables-basic.js')).TablesDatatablesBasic
// const TablesDatatablesExportData = async () => (await import('./pages/tables/datatables/export-data/tables-datatables-export-data.js')).TablesDatatablesExportData
// const TablesDatatablesSelect = async () => (await import('./pages/tables/datatables/select/tables-datatables-select.js')).TablesDatatablesSelect
// const TablesDatatablesAjax = async () => (await import('./pages/tables/datatables/ajax/tables-datatables-ajax.js')).TablesDatatablesAjax
// const TablesDatatablesJavascript = async () => (await import('./pages/tables/datatables/javascript/tables-datatables-javascript.js')).TablesDatatablesJavascript
// const TablesDatatablesRendering = async () => (await import('./pages/tables/datatables/rendering/tables-datatables-rendering.js')).TablesDatatablesRendering
// const TablesDatatablesScroll = async () => (await import('./pages/tables/datatables/scroll/tables-datatables-scroll.js')).TablesDatatablesScroll
// const TablesDatatablesFixedColumns = async () => (await import('./pages/tables/datatables/fixed-columns/tables-datatables-fixed-columns.js')).TablesDatatablesFixedColumns
// const TablesDatatablesColumns = async () => (await import('./pages/tables/datatables/columns/tables-datatables-columns.js')).TablesDatatablesColumns
// const TablesDatatablesChildRows = async () => (await import('./pages/tables/datatables/child-rows/tables-datatables-child-rows.js')).TablesDatatablesChildRows
// const TablesDatatablesColumnSearching = async () => (await import('./pages/tables/datatables/column-searching/tables-datatables-column-searching.js')).TablesDatatablesColumnSearching
// const TablesDatatablesRangeSearch = async () => (await import('./pages/tables/datatables/range-search/tables-datatables-range-search.js')).TablesDatatablesRangeSearch
// const TablesDatatablesFixedHeader = async () => (await import('./pages/tables/datatables/fixed-header/tables-datatables-fixed-header.js')).TablesDatatablesFixedHeader
// const TablesDatatablesAddRows = async () => (await import('./pages/tables/datatables/add-rows/tables-datatables-add-rows.js')).TablesDatatablesAddRows
// const TablesDatatablesCheckboxSelect = async () => (await import('./pages/tables/datatables/checkbox-select/tables-datatables-checkbox-select.js')).TablesDatatablesCheckboxSelect
// const IconsTabler = async () => (await import('./pages/icons/tabler/icons-tabler.js')).IconsTabler
// const IconsLucide = async () => (await import('./pages/icons/lucide/icons-lucide.js')).IconsLucide
// const IconsFlags = async () => (await import('./pages/icons/flags/icons-flags.js')).IconsFlags
// const MapsVector = async () => (await import('./pages/maps/vector/maps-vector.js')).MapsVector
// const MapsLeaflet = async () => (await import('./pages/maps/leaflet/maps-leaflet.js')).MapsLeaflet





// new
const DashboardAnalytics = async () => (await import('./pages/dashboards/analytics/dashboard-analytics.js')).DashboardAnalytics
const Dashboard = async () => (await import('./pages/dashboards/dashboard/dashboard.js')).Dashboard
const DashboardProjects = async () => (await import('./pages/dashboards/projects/dashboard-projects.js')).DashboardProjects
const DashboardCrm = async () => (await import('./pages/dashboards/crm/dashboard-crm.js')).DashboardCrm
const DashboardWallet = async () => (await import('./pages/dashboards/wallet/dashboard-wallet.js')).DashboardWallet
const AppsCalendar = async () => (await import('./pages/apps/calendar/apps-calendar.js')).AppsCalendar
const AppsChat = async () => (await import('./pages/apps/chat/apps-chat.js')).AppsChat
const CrmProjects = async () => (await import('./pages/crm/projects/crm-projects.js')).CrmProjects
const CrmOrdersList = async () => (await import('./pages/crm/orders-list/crm-orders-list.js')).CrmOrdersList
const CrmClients = async () => (await import('./pages/crm/clients/crm-clients.js')).CrmClients
const CrmManagement = async () => (await import('./pages/crm/management/crm-management.js')).CrmManagement
const AppsEcommerceProducts = async () => (await import('./pages/apps/ecommerce/products/apps-ecommerce-products.js')).AppsEcommerceProducts
const AppsEcommerceProductDetails = async () => (await import('./pages/apps/ecommerce/product-details/apps-ecommerce-product-details.js')).AppsEcommerceProductDetails
const AppsEcommerceOrders = async () => (await import('./pages/apps/ecommerce/orders/apps-ecommerce-orders.js')).AppsEcommerceOrders
const AppsEcommerceOrderDetails = async () => (await import('./pages/apps/ecommerce/order-details/apps-ecommerce-order-details.js')).AppsEcommerceOrderDetails
const AppsEcommerceCustomers = async () => (await import('./pages/apps/ecommerce/customers/apps-ecommerce-customers.js')).AppsEcommerceCustomers
const AppsEcommerceShoppingCart = async () => (await import('./pages/apps/ecommerce/shopping-cart/apps-ecommerce-shopping-cart.js')).AppsEcommerceShoppingCart
const AppsEcommerceCheckout = async () => (await import('./pages/apps/ecommerce/checkout/apps-ecommerce-checkout.js')).AppsEcommerceCheckout
const AppsEcommerceSellers = async () => (await import('./pages/apps/ecommerce/sellers/apps-ecommerce-sellers.js')).AppsEcommerceSellers
const AppsEmailInbox = async () => (await import('./pages/apps/email/inbox/apps-email-inbox.js')).AppsEmailInbox
const AppsEmailRead = async () => (await import('./pages/apps/email/read/apps-email-read.js')).AppsEmailRead
const AppsProjectsList = async () => (await import('./pages/apps/projects/list/apps-projects-list.js')).AppsProjectsList
const AppsProjectDetails = async () => (await import('./pages/apps/projects/details/apps-project-details.js')).AppsProjectDetails
const AppsProjectGantt = async () => (await import('./pages/apps/projects/gantt/apps-project-gantt.js')).AppsProjectGantt
const AppsProjectAdd = async () => (await import('./pages/apps/projects/add/apps-project-add.js')).AppsProjectAdd
const AppsSocialFeed = async () => (await import('./pages/apps/social-feed/apps-social-feed.js')).AppsSocialFeed
const AppsTasksList = async () => (await import('./pages/apps/tasks/list/apps-tasks-list.js')).AppsTasksList
const AppsTasksDetails = async () => (await import('./pages/apps/tasks/details/apps-tasks-details.js')).AppsTasksDetails
const AppsTasksKanban = async () => (await import('./pages/apps/tasks/kanban/apps-tasks-kanban.js')).AppsTasksKanban
const AppsFileManager = async () => (await import('./pages/apps/file-manager/apps-file-manager.js')).AppsFileManager
const PagesProfile = async () => (await import('./pages/pages/profile/pages-profile.js')).PagesProfile
const PagesProfile2 = async () => (await import('./pages/pages/profile-2/pages-profile-2.js')).PagesProfile2
const PagesInvoice = async () => (await import('./pages/pages/invoice/pages-invoice.js')).PagesInvoice
const PagesFaq = async () => (await import('./pages/pages/faq/pages-faq.js')).PagesFaq
const PagesPricing = async () => (await import('./pages/pages/pricing/pages-pricing.js')).PagesPricing
const PagesMaintenance = async () => (await import('./pages/pages/maintenance/pages-maintenance.js')).PagesMaintenance
const PagesLogin = async () => (await import('./pages/pages/authentication/login/pages-authentication-login.js')).PagesAuthenticationLogin
const PagesLogin2 = async () => (await import('./pages/pages/authentication/login-2/pages-authentication-login-2.js')).PagesAuthenticationLogin2
const PagesRegister = async () => (await import('./pages/pages/authentication/register/pages-authentication-register.js')).PagesAuthenticationRegister
const PagesRegister2 = async () => (await import('./pages/pages/authentication/register-2/pages-authentication-register-2.js')).PagesAuthenticationRegister2
const PagesLogout = async () => (await import('./pages/pages/authentication/logout/pages-authentication-logout.js')).PagesAuthenticationLogout
const PagesLogout2 = async () => (await import('./pages/pages/authentication/logout-2/pages-authentication-logout-2.js')).PagesAuthenticationLogout2
const PagesRecover = async () => (await import('./pages/pages/authentication/recoverpw/pages-authentication-recoverpw.js')).PagesAuthenticationRecoverpw
const PagesRecover2 = async () => (await import('./pages/pages/authentication/recoverpw-2/pages-authentication-recoverpw-2.js')).PagesAuthenticationRecoverpw2
const PagesLockScreen = async () => (await import('./pages/pages/authentication/lock-screen/pages-authentication-lock-screen.js')).PagesAuthenticationLockScreen
const PagesLockScreen2 = async () => (await import('./pages/pages/authentication/lock-screen-2/pages-authentication-lock-screen-2.js')).PagesAuthenticationLockScreen2
const PagesConfirmMail = async () => (await import('./pages/pages/authentication/confirm-mail/pages-authentication-confirm-mail.js')).PagesAuthenticationConfirmMail
const PagesConfirmMail2 = async () => (await import('./pages/pages/authentication/confirm-mail-2/pages-authentication-confirm-mail-2.js')).PagesAuthenticationConfirmMail2
const PagesError404 = async () => (await import('./pages/pages/error/404/pages-error-404.js')).PagesError404
const PagesError404Alt = async () => (await import('./pages/pages/error/404-alt/pages-error-404-alt.js')).PagesError404Alt
const PagesError500 = async () => (await import('./pages/pages/error/500/pages-error-500.js')).PagesError500
const PagesStarter = async () => (await import('./pages/pages/starter/pages-starter.js')).PagesStarter
const PagesPreloader = async () => (await import('./pages/pages/preloader/pages-preloader.js')).PagesPreloader
const PagesTimeline = async () => (await import('./pages/pages/timeline/pages-timeline.js')).PagesTimeline
const Landing = async () => (await import('./pages/landing/landing.js')).Landing
const LayoutsHorizontal = async () => (await import('./pages/layouts/horizontal/layouts-horizontal.js')).LayoutsHorizontal
const LayoutsDetached = async () => (await import('./pages/layouts/detached/layouts-detached.js')).LayoutsDetached
const LayoutsFull = async () => (await import('./pages/layouts/full/layouts-full.js')).LayoutsFull
const LayoutsFullscreen = async () => (await import('./pages/layouts/fullscreen/layouts-fullscreen.js')).LayoutsFullscreen
const LayoutsHover = async () => (await import('./pages/layouts/hover/layouts-hover.js')).LayoutsHover
const LayoutsCompact = async () => (await import('./pages/layouts/compact/layouts-compact.js')).LayoutsCompact
const LayoutsIconView = async () => (await import('./pages/layouts/icon-view/layouts-icon-view.js')).LayoutsIconView
const UIAccordions = async () => (await import('./pages/ui/accordions/ui-accordions.js')).UIAccordions
const UIAlerts = async () => (await import('./pages/ui/alerts/ui-alerts.js')).UIAlerts
const UIAvatars = async () => (await import('./pages/ui/avatars/ui-avatars.js')).UIAvatars
const UIBadges = async () => (await import('./pages/ui/badges/ui-badges.js')).UIBadges
const UIBreadcrumb = async () => (await import('./pages/ui/breadcrumb/ui-breadcrumb.js')).UIBreadcrumb
const UIButtons = async () => (await import('./pages/ui/buttons/ui-buttons.js')).UIButtons
const UICards = async () => (await import('./pages/ui/cards/ui-cards.js')).UICards
const UICarousel = async () => (await import('./pages/ui/carousel/ui-carousel.js')).UICarousel
const UIDropdowns = async () => (await import('./pages/ui/dropdowns/ui-dropdowns.js')).UIDropdowns
const UIEmbedVideo = async () => (await import('./pages/ui/embed-video/ui-embed-video.js')).UIEmbedVideo
const UIGrid = async () => (await import('./pages/ui/grid/ui-grid.js')).UIGrid
const UIListGroup = async () => (await import('./pages/ui/list-group/ui-list-group.js')).UIListGroup
const UIModals = async () => (await import('./pages/ui/modals/ui-modals.js')).UIModals
const UINotifications = async () => (await import('./pages/ui/notifications/ui-notifications.js')).UINotifications
const UIOffcanvas = async () => (await import('./pages/ui/offcanvas/ui-offcanvas.js')).UIOffcanvas
const UIPlaceholders = async () => (await import('./pages/ui/placeholders/ui-placeholders.js')).UIPlaceholders
const UIPagination = async () => (await import('./pages/ui/pagination/ui-pagination.js')).UIPagination
const UIPopovers = async () => (await import('./pages/ui/popovers/ui-popovers.js')).UIPopovers
const UIProgress = async () => (await import('./pages/ui/progress/ui-progress.js')).UIProgress
const UIRibbons = async () => (await import('./pages/ui/ribbons/ui-ribbons.js')).UIRibbons
const UISpinners = async () => (await import('./pages/ui/spinners/ui-spinners.js')).UISpinners
const UITabs = async () => (await import('./pages/ui/tabs/ui-tabs.js')).UITabs
const UITooltips = async () => (await import('./pages/ui/tooltips/ui-tooltips.js')).UITooltips
const UILinks = async () => (await import('./pages/ui/links/ui-links.js')).UILinks
const UITypography = async () => (await import('./pages/ui/typography/ui-typography.js')).UITypography
const UIUtilities = async () => (await import('./pages/ui/utilities/ui-utilities.js')).UIUtilities
const ExtendedDragula = async () => (await import('./pages/extended/dragula/extended-dragula.js')).ExtendedDragula
const ExtendedRangeSlider = async () => (await import('./pages/extended/range-slider/extended-range-slider.js')).ExtendedRangeSlider
const ExtendedRatings = async () => (await import('./pages/extended/ratings/extended-ratings.js')).ExtendedRatings
const ExtendedScrollbar = async () => (await import('./pages/extended/scrollbar/extended-scrollbar.js')).ExtendedScrollbar
const ExtendedScrollspy = async () => (await import('./pages/extended/scrollspy/extended-scrollspy.js')).ExtendedScrollspy
const ExtendedTreeview = async () => (await import('./pages/extended/treeview/extended-treeview.js')).ExtendedTreeview
const Widgets = async () => (await import('./pages/widgets/widgets.js')).Widgets
const IconsRemixicons = async () => (await import('./pages/icons/remixicons/icons-remixicons.js')).IconsRemixicons
const IconsMdi = async () => (await import('./pages/icons/mdi/icons-mdi.js')).IconsMdi
const IconsUnicons = async () => (await import('./pages/icons/unicons/icons-unicons.js')).IconsUnicons
const IconsLucide = async () => (await import('./pages/icons/lucide/icons-lucide.js')).IconsLucide
const ChartsApexArea = async () => (await import('./pages/charts/apex/area/charts-apex-area.js')).ChartsApexArea
const ChartsApexBar = async () => (await import('./pages/charts/apex/bar/charts-apex-bar.js')).ChartsApexBar
const ChartsApexBubble = async () => (await import('./pages/charts/apex/bubble/charts-apex-bubble.js')).ChartsApexBubble
const ChartsApexCandlestick = async () => (await import('./pages/charts/apex/candlestick/charts-apex-candlestick.js')).ChartsApexCandlestick
const ChartsApexColumn = async () => (await import('./pages/charts/apex/column/charts-apex-column.js')).ChartsApexColumn
const ChartsApexHeatmap = async () => (await import('./pages/charts/apex/heatmap/charts-apex-heatmap.js')).ChartsApexHeatmap
const ChartsApexLine = async () => (await import('./pages/charts/apex/line/charts-apex-line.js')).ChartsApexLine
const ChartsApexMixed = async () => (await import('./pages/charts/apex/mixed/charts-apex-mixed.js')).ChartsApexMixed
const ChartsApexTimeline = async () => (await import('./pages/charts/apex/timeline/charts-apex-timeline.js')).ChartsApexTimeline
const ChartsApexBoxplot = async () => (await import('./pages/charts/apex/boxplot/charts-apex-boxplot.js')).ChartsApexBoxplot
const ChartsApexTreemap = async () => (await import('./pages/charts/apex/treemap/charts-apex-treemap.js')).ChartsApexTreemap
const ChartsApexPie = async () => (await import('./pages/charts/apex/pie/charts-apex-pie.js')).ChartsApexPie
const ChartsApexRadar = async () => (await import('./pages/charts/apex/radar/charts-apex-radar.js')).ChartsApexRadar
const ChartsApexRadialbar = async () => (await import('./pages/charts/apex/radialbar/charts-apex-radialbar.js')).ChartsApexRadialbar
const ChartsApexScatter = async () => (await import('./pages/charts/apex/scatter/charts-apex-scatter.js')).ChartsApexScatter
const ChartsApexPolarArea = async () => (await import('./pages/charts/apex/polar-area/charts-apex-polar-area.js')).ChartsApexPolarArea
const ChartsApexSparklines = async () => (await import('./pages/charts/apex/sparklines/charts-apex-sparklines.js')).ChartsApexSparklines
const ChartsChartjsArea = async () => (await import('./pages/charts/chartjs/area/charts-chartjs-area.js')).ChartsChartjsArea
const ChartsChartjsBar = async () => (await import('./pages/charts/chartjs/bar/charts-chartjs-bar.js')).ChartsChartjsBar
const ChartsChartjsLine = async () => (await import('./pages/charts/chartjs/line/charts-chartjs-line.js')).ChartsChartjsLine
const ChartsChartjsOther = async () => (await import('./pages/charts/chartjs/other/charts-chartjs-other.js')).ChartsChartjsOther
const ChartsSparkline = async () => (await import('./pages/charts/sparkline/charts-sparkline.js')).ChartsSparkline
const ChartsBrite = async () => (await import('./pages/charts/brite/charts-brite.js')).ChartsBrite
const FormElements = async () => (await import('./pages/form/elements/form-elements.js')).FormElements
const FormAdvanced = async () => (await import('./pages/form/advanced/form-advanced.js')).FormAdvanced
const FormValidation = async () => (await import('./pages/form/validation/form-validation.js')).FormValidation
const FormWizard = async () => (await import('./pages/form/wizard/form-wizard.js')).FormWizard
const FormFileuploads = async () => (await import('./pages/form/fileuploads/form-fileuploads.js')).FormFileuploads
const FormEditors = async () => (await import('./pages/form/editors/form-editors.js')).FormEditors

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            // new
            //#region 
            { path: '/dashboard-analytics', component: DashboardAnalytics },
            { path: '/', component: Dashboard },
            { path: '/dashboard-projects', component: DashboardProjects },
            { path: '/dashboard-crm', component: DashboardCrm },
            { path: '/dashboard-wallet', component: DashboardWallet },
            { path: '/apps-calendar', component: AppsCalendar },
            { path: '/apps-chat', component: AppsChat },
            { path: '/crm-projects', component: CrmProjects },
            { path: '/crm-orders-list', component: CrmOrdersList },
            { path: '/crm-clients', component: CrmClients },
            { path: '/crm-management', component: CrmManagement },
            { path: '/apps-ecommerce-products', component: AppsEcommerceProducts },
            { path: '/apps-ecommerce-product-details', component: AppsEcommerceProductDetails },
            { path: '/apps-ecommerce-orders', component: AppsEcommerceOrders },
            { path: '/apps-ecommerce-order-details', component: AppsEcommerceOrderDetails },
            { path: '/apps-ecommerce-customers', component: AppsEcommerceCustomers },
            { path: '/apps-ecommerce-shopping-cart', component: AppsEcommerceShoppingCart },
            { path: '/apps-ecommerce-checkout', component: AppsEcommerceCheckout },
            { path: '/apps-ecommerce-sellers', component: AppsEcommerceSellers },
            { path: '/apps-email-inbox', component: AppsEmailInbox },
            { path: '/apps-email-read', component: AppsEmailRead },
            { path: '/apps-projects-list', component: AppsProjectsList },
            { path: '/apps-project-details', component: AppsProjectDetails },
            { path: '/apps-project-gantt', component: AppsProjectGantt },
            { path: '/apps-project-add', component: AppsProjectAdd },
            { path: '/apps-social-feed', component: AppsSocialFeed },
            { path: '/apps-tasks', component: AppsTasksList },
            { path: '/apps-tasks-details', component: AppsTasksDetails },
            { path: '/apps-kanban', component: AppsTasksKanban },
            { path: '/apps-file-manager', component: AppsFileManager },
            { path: '/pages-profile', component: PagesProfile },
            { path: '/pages-profile-2', component: PagesProfile2 },
            { path: '/pages-invoice', component: PagesInvoice },
            { path: '/pages-faq', component: PagesFaq },
            { path: '/pages-pricing', component: PagesPricing },
            { path: '/pages-404-alt', component: PagesError404Alt },
            { path: '/pages-starter', component: PagesStarter },
            { path: '/pages-timeline', component: PagesTimeline },
            { path: '/layouts-horizontal', component: LayoutsHorizontal },
            { path: '/layouts-detached', component: LayoutsDetached },
            { path: '/layouts-full', component: LayoutsFull },
            { path: '/layouts-fullscreen', component: LayoutsFullscreen },
            { path: '/layouts-hover', component: LayoutsHover },
            { path: '/layouts-compact', component: LayoutsCompact },
            { path: '/layouts-icon-view', component: LayoutsIconView },
            { path: '/ui-accordions', component: UIAccordions },
            { path: '/ui-alerts', component: UIAlerts },
            { path: '/ui-avatars', component: UIAvatars },
            { path: '/ui-badges', component: UIBadges },
            { path: '/ui-buttons', component: UIButtons },
            { path: '/ui-breadcrumb', component: UIBreadcrumb },
            { path: '/ui-cards', component: UICards },
            { path: '/ui-carousel', component: UICarousel },
            { path: '/ui-dropdowns', component: UIDropdowns },
            { path: '/ui-embed-video', component: UIEmbedVideo },
            { path: '/ui-grid', component: UIGrid },
            { path: '/ui-list-group', component: UIListGroup },
            { path: '/ui-modals', component: UIModals },
            { path: '/ui-notifications', component: UINotifications },
            { path: '/ui-offcanvas', component: UIOffcanvas },
            { path: '/ui-placeholders', component: UIPlaceholders },
            { path: '/ui-pagination', component: UIPagination },
            { path: '/ui-popovers', component: UIPopovers },
            { path: '/ui-progress', component: UIProgress },
            { path: '/ui-ribbons', component: UIRibbons },
            { path: '/ui-spinners', component: UISpinners },
            { path: '/ui-tabs', component: UITabs },
            { path: '/ui-tooltips', component: UITooltips },
            { path: '/ui-links', component: UILinks },
            { path: '/ui-typography', component: UITypography },
            { path: '/ui-utilities', component: UIUtilities },
            { path: '/extended-dragula', component: ExtendedDragula },
            { path: '/extended-range-slider', component: ExtendedRangeSlider },
            { path: '/extended-ratings', component: ExtendedRatings },
            { path: '/extended-scrollbar', component: ExtendedScrollbar },
            { path: '/extended-scrollspy', component: ExtendedScrollspy },
            { path: '/extended-treeview', component: ExtendedTreeview },
            { path: '/widgets', component: Widgets },
            { path: '/icons-remixicons', component: IconsRemixicons },
            { path: '/icons-mdi', component: IconsMdi },
            { path: '/icons-unicons', component: IconsUnicons },
            { path: '/icons-lucide', component: IconsLucide },
            { path: '/charts-apex-area', component: ChartsApexArea },
            { path: '/charts-apex-bar', component: ChartsApexBar },
            { path: '/charts-apex-bubble', component: ChartsApexBubble },
            { path: '/charts-apex-candlestick', component: ChartsApexCandlestick },
            { path: '/charts-apex-column', component: ChartsApexColumn },
            { path: '/charts-apex-heatmap', component: ChartsApexHeatmap },
            { path: '/charts-apex-line', component: ChartsApexLine },
            { path: '/charts-apex-mixed', component: ChartsApexMixed },
            { path: '/charts-apex-timeline', component: ChartsApexTimeline },
            { path: '/charts-apex-boxplot', component: ChartsApexBoxplot },
            { path: '/charts-apex-treemap', component: ChartsApexTreemap },
            { path: '/charts-apex-pie', component: ChartsApexPie },
            { path: '/charts-apex-radar', component: ChartsApexRadar },
            { path: '/charts-apex-radialbar', component: ChartsApexRadialbar },
            { path: '/charts-apex-scatter', component: ChartsApexScatter },
            { path: '/charts-apex-polar-area', component: ChartsApexPolarArea },
            //#endregion
            { path: '/charts-apex-sparklines', component: ChartsApexSparklines },
            { path: '/charts-chartjs-area', component: ChartsChartjsArea },
            { path: '/charts-chartjs-bar', component: ChartsChartjsBar },
            { path: '/charts-chartjs-line', component: ChartsChartjsLine },
            { path: '/charts-chartjs-other', component: ChartsChartjsOther },
            { path: '/charts-sparkline', component: ChartsSparkline },
            { path: '/charts-brite', component: ChartsBrite },
            { path: '/form-elements', component: FormElements },
            { path: '/form-advanced', component: FormAdvanced },
            { path: '/form-validation', component: FormValidation },
            { path: '/form-wizard', component: FormWizard },
            { path: '/form-fileuploads', component: FormFileuploads },
            { path: '/form-editors', component: FormEditors },
            
            // old
            // { path: '/about', component: AboutPage },
            // { path: '/users', component: Users },
            // { path: '/uikit/button', component: Button },
            // { path: '/forms-basic-inputs', component: Input },
            // { path: '/dashboard-2', component: Dashboard2 },
            // { path: '/chat', component: Chat },
            // { path: '/calendar', component: Calendar },
            // { path: '/file-manager', component: FileManager },
            // { path: '/ecommerce-products', component: EcommerceProducts },
            // { path: '/ecommerce-products-grid', component: EcommerceProductsGrid },
            // { path: '/ecommerce-product-details', component: EcommerceProductDetails },
            // { path: '/ecommerce-add-product', component: EcommerceAddProduct },
            // { path: '/ecommerce-categories', component: EcommerceCategories },
            // { path: '/ecommerce-orders', component: EcommerceOrders },
            // { path: '/ecommerce-order-details', component: EcommerceOrderDetails },
            // { path: '/ecommerce-customers', component: EcommerceCustomers },
            // { path: '/ecommerce-sellers', component: EcommerceSellers },
            // { path: '/ecommerce-seller-details', component: EcommerceSellerDetails },
            // { path: '/ecommerce-reviews', component: EcommerceReviews },
            // { path: '/email', component: Email },
            // { path: '/email-details', component: EmailDetails },
            // { path: '/email-compose', component: EmailCompose },
            // { path: '/email-templates', component: EmailTemplates },
            // { path: '/crm-contacts', component: CrmContacts },
            // { path: '/crm-opportunities', component: CrmOpportunities },
            // { path: '/crm-deals', component: CrmDeals },
            // { path: '/crm-leads', component: CrmLeads },
            // { path: '/crm-pipeline', component: CrmPipeline },
            // { path: '/crm-campaign', component: CrmCampaign },
            // { path: '/crm-proposals', component: CrmProposals },
            // { path: '/crm-estimations', component: CrmEstimations },
            // { path: '/crm-customers', component: CrmCustomers },
            // { path: '/crm-activities', component: CrmActivities },
            // { path: '/users-contacts', component: UsersContacts },
            // { path: '/users-profile', component: UsersProfile },
            // { path: '/users-roles', component: UsersRoles },
            // { path: '/users-role-details', component: UsersRoleDetails },
            // { path: '/users-permissions', component: UsersPermissions },
            // { path: '/invoices', component: Invoices },
            // { path: '/invoice-details', component: InvoiceDetails },
            // { path: '/invoice-create', component: InvoiceCreate },
            // { path: '/social-feed', component: SocialFeed },
            // { path: '/tickets-list', component: Tickets },
            // { path: '/ticket-details', component: TicketDetails },
            // { path: '/ticket-create', component: TicketCreate },
            // { path: '/api-keys', component: ApiKeys },
            // { path: '/pages-faq', component: PagesFaq },
            // { path: '/pages-pricing', component: PagesPricing },
            // { path: '/pages-empty', component: PagesEmpty },
            // { path: '/pages-timeline', component: PagesTimeline },
            // { path: '/pages-sitemap', component: PagesSitemap },
            // { path: '/pages-search-results', component: PagesSearchResults },
            // { path: '/pages-terms-conditions', component: PagesTermsConditions },
            // { path: '/layouts-scrollable', component: LayoutsScrollable },
            //{ path: '/layouts-compact', component: LayoutsCompact },
            // { path: '/layouts-boxed', component: LayoutsBoxed },
            // { path: '/layouts-horizontal', component: LayoutsHorizontal },
            // { path: '/layouts-preloader', component: LayoutsPreloader },
            // { path: '/sidebar-dark', component: SidebarDark },
            // { path: '/sidebar-gradient', component: SidebarGradient },
            // { path: '/sidebar-gray', component: SidebarGray },
            // { path: '/sidebar-image', component: SidebarImage },
            // { path: '/sidebar-compact', component: SidebarCompact },
            // { path: '/sidebar-icon-view', component: SidebarIconView },
            // { path: '/sidebar-on-hover', component: SidebarOnHover },
            // { path: '/sidebar-on-hover-active', component: SidebarOnHoverActive },
            // { path: '/sidebar-offcanvas', component: SidebarOffcanvas },
            // { path: '/sidebar-no-icons', component: SidebarNoIcons },
            // { path: '/sidebar-with-lines', component: SidebarWithLines },
            // { path: '/topbar-light', component: TopbarLight },
            // { path: '/topbar-gray', component: TopbarGray },
            // { path: '/topbar-gradient', component: TopbarGradient },
            // { path: '/ui-buttons', component: UIButtons },
            // { path: '/ui-images', component: UIImages },
            // { path: '/ui-accordions', component: UIAccordions },
            // { path: '/ui-alerts', component: UIAlerts },
            // { path: '/ui-badges', component: UIBadges },
            // { path: '/ui-alerts', component: UIAlerts },
            // { path: '/ui-breadcrumb', component: UIBreadcrumb },
            // { path: '/ui-cards', component: UICards },
            // { path: '/ui-carousel', component: UICarousel },
            // { path: '/ui-collapse', component: UICollapse },
            // { path: '/ui-colors', component: UIColors },
            // { path: '/ui-dropdowns', component: UIDropdowns },
            // { path: '/ui-videos', component: UIVideos },
            // { path: '/ui-grid', component: UIGrid },
            // { path: '/ui-links', component: UILinks },
            // { path: '/ui-list-group', component: UIListGroup },
            // { path: '/ui-modals', component: UIModals },
            // { path: '/ui-notifications', component: UINotifications },
            // { path: '/ui-offcanvas', component: UIOffcanvas },
            // { path: '/ui-placeholders', component: UIPlaceholders },
            // { path: '/ui-pagination', component: UIPagination },
            // { path: '/ui-popovers', component: UIPopovers },
            // { path: '/ui-progress', component: UIProgress },
            // { path: '/ui-notifications', component: UINotifications },
            // { path: '/ui-scrollspy', component: UIScrollspy },
            // { path: '/ui-spinners', component: UISpinners },
            // { path: '/ui-tabs', component: UITabs },
            // { path: '/ui-tooltips', component: UITooltips },
            // { path: '/ui-typography', component: UITypography },
            // { path: '/ui-utilities', component: UIUtilities },
            // { path: '/misc-sortable', component: MiscSortable },
            // { path: '/misc-pdf-viewer', component: MiscPdfViewer },
            // { path: '/misc-i18', component: MiscI18 },
            // { path: '/misc-sweet-alerts', component: MiscSweetAlerts },
            // { path: '/misc-pass-meter', component: MiscPassMeter },
            // { path: '/misc-clipboard', component: MiscClipboard },
            // { path: '/misc-tree-view', component: MiscTreeView },
            // { path: '/misc-tour', component: MiscTour },
            // { path: '/widgets', component: Widgets },
            // { path: '/charts-apex-area', component: ChartsApexArea },
            // { path: '/charts-apex-bar', component: ChartsApexBar },
            // { path: '/charts-apex-bubble', component: ChartsApexBubble },
            // { path: '/charts-apex-candlestick', component: ChartsApexCandlestick },
            // { path: '/charts-apex-column', component: ChartsApexColumn },
            // { path: '/charts-apex-heatmap', component: ChartsApexHeatmap },
            // { path: '/charts-apex-line', component: ChartsApexLine },
            // { path: '/charts-apex-mixed', component: ChartsApexMixed },
            // { path: '/charts-apex-timeline', component: ChartsApexTimeline },
            // { path: '/charts-apex-boxplot', component: ChartsApexBoxplot },
            // { path: '/charts-apex-treemap', component: ChartsApexTreemap },
            // { path: '/charts-apex-pie', component: ChartsApexPie },
            // { path: '/charts-apex-radar', component: ChartsApexRadar },
            // { path: '/charts-apex-radialbar', component: ChartsApexRadialbar },
            // { path: '/charts-apex-scatter', component: ChartsApexScatter },
            // { path: '/charts-apex-polar-area', component: ChartsApexPolarArea },
            // { path: '/charts-apex-sparklines', component: ChartsApexSparklines },
            // { path: '/charts-apex-range', component: ChartsApexRange },
            // { path: '/charts-apex-funnel', component: ChartsApexFunnel },
            // { path: '/charts-apex-slope', component: ChartsApexSlope },
            // { path: '/chartjs-area', component: ChartsChartjsArea },
            // { path: '/chartjs-bar', component: ChartsChartjsBar },
            // { path: '/chartjs-line', component: ChartsChartjsLine },
            // { path: '/chartjs-other', component: ChartsChartjsOther },
            // { path: '/charts-apextree', component: ChartsApextree },
            // { path: '/charts-apexsankey', component: ChartsApexsankey },
            // { path: '/form-elements', component: FormElements },
            // { path: '/form-pickers', component: FormPickers },
            // { path: '/form-select', component: FormSelect },
            // { path: '/form-validation', component: FormValidation },
            // { path: '/form-wizard', component: FormWizard },
            // { path: '/form-fileuploads', component: FormFileuploads },
            // { path: '/form-text-editors', component: FormTextEditors },
            // { path: '/form-range-slider', component: FormRangeSlider },
            // { path: '/form-layouts', component: FormLayouts },
            // { path: '/form-other-plugins', component: FormOtherPlugins },
            // { path: '/tables-static', component: TablesStatic },
            // { path: '/tables-custom', component: TablesCustom },
            // { path: '/tables-datatables-basic', component: TablesDatatablesBasic },
            // { path: '/tables-datatables-export-data', component: TablesDatatablesExportData },
            // { path: '/tables-datatables-select', component: TablesDatatablesSelect },
            // { path: '/tables-datatables-ajax', component: TablesDatatablesAjax },
            // { path: '/tables-datatables-javascript', component: TablesDatatablesJavascript },
            // { path: '/tables-datatables-rendering', component: TablesDatatablesRendering },
            // { path: '/tables-datatables-scroll', component: TablesDatatablesScroll },
            // { path: '/tables-datatables-fixed-columns', component: TablesDatatablesFixedColumns },
            // { path: '/tables-datatables-columns', component: TablesDatatablesColumns },
            // { path: '/tables-datatables-child-rows', component: TablesDatatablesChildRows },
            // { path: '/tables-datatables-column-searching', component: TablesDatatablesColumnSearching },
            // { path: '/tables-datatables-range-search', component: TablesDatatablesRangeSearch },
            // { path: '/tables-datatables-fixed-header', component: TablesDatatablesFixedHeader },
            // { path: '/tables-datatables-add-rows', component: TablesDatatablesAddRows },
            // { path: '/tables-datatables-checkbox-select', component: TablesDatatablesCheckboxSelect },
            // { path: '/icons-tabler', component: IconsTabler },
            // { path: '/icons-lucide', component: IconsLucide },
            // { path: '/icons-flags', component: IconsFlags },
            // { path: '/maps-vector', component: MapsVector },
            // { path: '/maps-leaflet', component: MapsLeaflet }

        ]
    },
    // new
    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-login', component: PagesLogin },
    { path: '/pages-login-2', component: PagesLogin2 },
    { path: '/pages-register', component: PagesRegister },
    { path: '/pages-register-2', component: PagesRegister2 },
    { path: '/pages-logout', component: PagesLogout },
    { path: '/pages-logout-2', component: PagesLogout2 },
    { path: '/pages-recoverpw', component: PagesRecover },
    { path: '/pages-recoverpw-2', component: PagesRecover2 },
    { path: '/pages-lock-screen', component: PagesLockScreen },
    { path: '/pages-lock-screen-2', component: PagesLockScreen2 },
    { path: '/pages-confirm-mail', component: PagesConfirmMail },
    { path: '/pages-confirm-mail-2', component: PagesConfirmMail2 },
    { path: '/404', component: PagesError404 },
    { path: '/pages-500', component: PagesError500 },
    { path: '/pages-preloader', component: PagesPreloader },
    { path: '/landing', component: Landing },




    // old
    // { path: '/landing', component: Landing },
    // { path: '/about', component: AboutPagee },
    // { path: '/pages-login', component: Login },
    // { path: '/404', component: NotFound },
    // { path: '/pages-coming-soon', component: PagesComingSoon },
    // { path: '/auth-sign-in', component: AuthSignIn },
    // { path: '/auth-sign-up', component: AuthSignUp },
    // { path: '/auth-reset-pass', component: AuthResetPass },
    // { path: '/auth-new-pass', component: AuthNewPass },
    // { path: '/auth-two-factor', component: AuthTwoFactor },
    // { path: '/auth-lock-screen', component: AuthLockScreen },
    // { path: '/auth-success-mail', component: AuthSuccessMail },
    // { path: '/auth-login-pin', component: AuthLoginPin },
    // { path: '/auth-delete-account', component: AuthDeleteAccount },
    // { path: '/auth-cover-sign-in', component: AuthCoverSignIn },
    // { path: '/auth-cover-sign-up', component: AuthCoverSignUp },
    // { path: '/auth-cover-reset-pass', component: AuthCoverResetPass },
    // { path: '/auth-cover-new-pass', component: AuthCoverNewPass },
    // { path: '/auth-cover-two-factor', component: AuthCoverTwoFactor },
    // { path: '/auth-cover-lock-screen', component: AuthCoverLockScreen },
    // { path: '/auth-cover-success-mail', component: AuthCoverSuccessMail },
    // { path: '/auth-cover-login-pin', component: AuthCoverLoginPin },
    // { path: '/auth-cover-delete-account', component: AuthCoverDeleteAccount },
    // { path: '/error-400', component: BadRequest },
    // { path: '/error-401', component: Unauthorized },
    // { path: '/error-403', component: Forbidden },
    // { path: '/error-408', component: Timeout },
    // { path: '/error-500', component: ServerError },
    // { path: '/maintenance', component: Maintenance },
]

// Change this to your app's base path, e.g. '/app' or '' if root
const BASE_PATH = '';

export function path(projectPath) {
    return BASE_PATH + projectPath
}

// Instantiate and start router
export const router = new Router(routes, BASE_PATH);
window.addEventListener('DOMContentLoaded', () => {
    router.start();
});
