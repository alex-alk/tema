import { createComponent } from '../../js_modules/main.js'

export class Button {

    async getElement() {
        const html = /* html */`
<div class="flex flex-col md:flex-row gap-8">
    <div class="md:w-1/2">
        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Default</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn" type="button">
                    <span class="btn-label">Submit</span>
                </button>
                <button class="btn" type="button" disabled>
                    <span class="btn-label">Disabled</span>
                </button>
                <button class="btn btn-link" type="button">
                    <span class="btn-label">Link</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Severities</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn" type="button">
                    <span class="btn-label">Primary</span>
                </button>
                <button class="btn btn-secondary" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-success" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-info" type="button">
                    <span class="btn-label">Info</span>
                </button>
            </div>
        </div>

    </div>
    <div class="md:w-1/2">

    </div>
</div>`
        const component = createComponent(html)
        
        return component
    }
}