import { createComponent } from '../../js_modules/main.js'

export class Button {

    async getElement() {
        const html = /* html */`
<div class="flex flex-col md:flex-row gap-8">
    <div class="md:w-1/2">
        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Default</div>
            <div class="flex flex-wrap gap-2"></div>
        </div>
    </div>
</div>`
        const component = createComponent(html)
        
        return component
    }
}