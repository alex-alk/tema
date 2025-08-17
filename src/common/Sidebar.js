import { createComponent } from "../../js_modules/main.js"
import { router } from "./routes.js"

export class Sidebar {

    getElement() {
        const html = /* html */`
<div class="layout-sidebar">
    <ul class=layout-menu>
        <li class="layout-root-menuitem">
            <div class="layout-menuitem-root-text">HOME</div>
            <ul class="layout-submenu">
                <li>
                    <a href="/" class="router-link-active router-link-exact-active v-menu-link">
                        <i class="pi pi-fw pi-home layout-menuitem-icon"></i>
                        <span class="layout-menuitem-text">Dashboard</span>
                    </a>
                </li>
            </ul>
        </li>

        <li class="layout-root-menuitem">
            <div class="layout-menuitem-root-text">Actiuni</div>
            <ul class="layout-submenu">
                <li>
                    <a href="/users" class="router-link-active router-link-exact-active v-menu-link">
                        <i class="pi pi-fw pi-id-card layout-menuitem-icon"></i>
                        <span class="layout-menuitem-text">Utilizatori</span>
                    </a>
                </li>
                <li>
                    <a href="/about" class="router-link-active router-link-exact-active v-menu-link">
                        <i class="pi pi-fw pi-id-card layout-menuitem-icon"></i>
                        <span class="layout-menuitem-text">About</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</div>
`
        const element = createComponent(html)
        const links = element.querySelectorAll('.v-menu-link')

        router.subscribeToRouteChange((path) => {
            selectMenuItem(path)
        })

        function selectMenuItem(path) {
            for (const link of links) {
                const routeFromLink = link.getAttribute('href')
                if (path === routeFromLink) {
                    link.classList.add('active-route')
                } else {
                    link.classList.remove('active-route')
                }
            }
        }

        selectMenuItem(router.stripBase(window.location.pathname))
        return element
    }
    
}