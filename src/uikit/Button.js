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
                <button class="btn btn-warn" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-help" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-danger" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-contrast" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Text</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-text" type="button">
                    <span class="btn-label">Primary</span>
                </button>
                <button class="btn btn-text-secondary" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-text-success" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-text-info" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-text-warn" style="color" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-text-help" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-text-danger" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-text-contrast" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Outlined</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-outline" type="button">
                    <span class="btn-label">Primary</span>
                </button>
                <button class="btn btn-outline-secondary" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-outline-success" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-outline-info" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-outline-warn" style="color" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-outline-help" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-outline-danger" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-outline-contrast" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Group</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-outline" type="button">
                    <span class="btn-label">Primary</span>
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