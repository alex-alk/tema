import { Sidebar } from './Sidebar.js'
import { Topbar } from './topbar.js'

export class AppLayout {

    async getElement() {
        const html =  /*html*/`
<div class="layout-wrapper layout-content-navbar">
    <side-bar></side-bar>
    <div class="layout-page">
        <top-bar></top-bar>
        <div class="content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</div>
`
        const template = document.createElement('template')
        template.innerHTML = html
        const component = template.content

        const $topbar = component.querySelector('top-bar')
        $topbar.replaceWith(await (new Topbar).getElement())

        const $sidebar = component.querySelector('side-bar')
        $sidebar.replaceWith(await (new Sidebar).getElement())

        return component
    }
    
}