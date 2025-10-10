import { createComponent } from '../../js_modules/main.js'
import { path } from '../common/routes.js'

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
                <button class="btn btn-secondary btn-text" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-success btn-text" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-info btn-text" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-warn btn-text" style="color" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-help btn-text" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-danger btn-text" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-contrast btn-text" type="button">
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
                <button class="btn btn-secondary btn-outline" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-success btn-outline" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-info btn-outline" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-warn btn-outline" style="color" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-help btn-outline" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-danger btn-outline" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-contrast btn-outline" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Group</div>
            <div class="flex flex-wrap gap-2">
                <span class="btngroup">
                    <button class="btn" type="button">
                        <span class="pi pi-check"></span>
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn" type="button">
                        <span class="pi pi-trash"></span>
                        <span class="btn-label">Delete</span>
                    </button>
                    <button class="btn" type="button">
                        <span class="pi pi-times"></span>
                        <span class="btn-label">Cancel</span>
                    </button>
                </span>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Split Button</div>
            <div class="flex flex-wrap gap-2">
                <div class="btnsplit">
                    <button class="btn btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-secondary btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-secondary btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-success btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-success btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-info btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-info btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-warn btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-warn btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-help btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-help btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-danger btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-danger btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="btnsplit">
                    <button class="btn btn-contrast btn-split" type="button">
                        <span class="btn-label">Save</span>
                    </button>
                    <button class="btn btn-contrast btn-split-dropdown" type="button" aria-label="dropdown">
                        <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 14 14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon">
                            <path d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <div class="tieredmenu">
                        <ul class="tieredmenu-root-list">
                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-refresh"></span>
                                        <span class="leading-none">Update</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-times"></span>
                                        <span class="leading-none">Delete</span>
                                    </a>
                                </div>
                            </li>

                            <li class="tieredmenu-separator"></li>

                            <li class="tieredmenu-item">
                                <div class="tieredmenu-item-content">
                                    <a  href="" class="tieredmenu-item-link">
                                        <span class="tieredmenu-item-icon pi pi-home"></span>
                                        <span class="leading-none">Home</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Templating</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn"><img alt="Img" src=${ path("/img/logo-white.svg") } style="width: 1.5rem;" aria-label="button"></button>
                <button class="btn btn-success btn-outline">
                    <img alt="Img" src=${ path("/img/logo.svg") } style="width: 1.5rem;">
                    <span class="btn-label">Buton</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Loading</div>
            <div class="flex flex-wrap gap-4">
                <button class="btn v-btn1" type="button">
                    <span class="pi pi-search"></span>
                    <span class="btn-label">Search</span>
                </button>
                <button class="btn v-btn2" type="button">
                    <span class="pi pi-spinner icon-spin hidden"></span>
                    <span class="btn-label">Search</span>
                </button>
            </div>
        </div>

    </div>
    <div class="md:w-1/2">
        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Icons</div>
            <div class="flex flex-wrap gap-4">
                <button class="btn" type="button" aria-label="button">
                    <span class="pi pi-star-fill"></span>
                </button>
                <button class="btn" type="button">
                    <span class="pi pi-bookmark"></span>
                    <span class="btn-label">Bookmark</span>
                </button>
                <button class="btn" type="button">
                    <span class="btn-label">Bookmark</span>
                    <span class="pi pi-bookmark"></span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Raised</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-raised" type="button">
                    <span class="btn-label">Primary</span>
                </button>
                <button class="btn btn-secondary btn-raised" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-success btn-raised" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-info btn-raised" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-warn btn-raised" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-help btn-raised" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-danger btn-raised" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-contrast btn-raised" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Rounded</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-rounded" type="button">
                    <span class="btn-label">Primary</span>
                </button>
                <button class="btn btn-secondary btn-rounded" type="button">
                    <span class="btn-label">Secondary</span>
                </button>
                <button class="btn btn-success btn-rounded" type="button">
                    <span class="btn-label">Success</span>
                </button>
                <button class="btn btn-info btn-rounded" type="button">
                    <span class="btn-label">Info</span>
                </button>
                <button class="btn btn-warn btn-rounded" type="button">
                    <span class="btn-label">Warn</span>
                </button>
                <button class="btn btn-help btn-rounded" type="button">
                    <span class="btn-label">Help</span>
                </button>
                <button class="btn btn-danger btn-rounded" type="button">
                    <span class="btn-label">Danger</span>
                </button>
                <button class="btn btn-contrast btn-rounded" type="button">
                    <span class="btn-label">Contrast</span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Normal Icons</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-check"></span>
                </button>
                <button class="btn btn-secondary btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-bookmark"></span>
                </button>
                <button class="btn btn-success btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-search"></span>
                </button>
                <button class="btn btn-info btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-user"></span>
                </button>
                <button class="btn btn-warn btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-bell"></span>
                </button>
                <button class="btn btn-help btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-heart"></span>
                </button>
                <button class="btn btn-danger btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-times"></span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Rounded Icons</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-check"></span>
                </button>
                <button class="btn btn-secondary btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-bookmark"></span>
                </button>
                <button class="btn btn-success btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-search"></span>
                </button>
                <button class="btn btn-info btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-user"></span>
                </button>
                <button class="btn btn-warn btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-bell"></span>
                </button>
                <button class="btn btn-help btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-heart"></span>
                </button>
                <button class="btn btn-danger btn-rounded btn-icon-only" type="button" aria-label="button">
                    <span class="pi pi-times"></span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Outlined Rounded Icons</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-check"></span>
                </button>
                <button class="btn btn-secondary btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-bookmark"></span>
                </button>
                <button class="btn btn-success btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-search"></span>
                </button>
                <button class="btn btn-info btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-user"></span>
                </button>
                <button class="btn btn-warn btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-bell"></span>
                </button>
                <button class="btn btn-help btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-heart"></span>
                </button>
                <button class="btn btn-danger btn-rounded btn-icon-only btn-outline" type="button" aria-label="button">
                    <span class="pi pi-times"></span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Rounded Text Icons</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-check"></span>
                </button>
                <button class="btn btn-secondary btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-bookmark"></span>
                </button>
                <button class="btn btn-success btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-search"></span>
                </button>
                <button class="btn btn-info btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-user"></span>
                </button>
                <button class="btn btn-warn btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-bell"></span>
                </button>
                <button class="btn btn-help btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-heart"></span>
                </button>
                <button class="btn btn-danger btn-rounded btn-icon-only btn-text" type="button" aria-label="button">
                    <span class="pi pi-times"></span>
                </button>
            </div>
        </div>

        <div class="card flex flex-col gap-4">
            <div class="font-semibold text-xl">Rounded Text Raised Icons</div>
            <div class="flex flex-wrap gap-2">
                <button class="btn btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-check"></span>
                </button>
                <button class="btn btn-secondary btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-bookmark"></span>
                </button>
                <button class="btn btn-success btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-search"></span>
                </button>
                <button class="btn btn-info btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-user"></span>
                </button>
                <button class="btn btn-warn btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-bell"></span>
                </button>
                <button class="btn btn-help btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-heart"></span>
                </button>
                <button class="btn btn-danger btn-rounded btn-icon-only btn-text btn-raised" type="button" aria-label="button">
                    <span class="pi pi-times"></span>
                </button>
            </div>
        </div>

    </div>
</div>`
        const component = createComponent(html)

        const $btn1 = component.querySelector('.v-btn1')
        const $btn2 = component.querySelector('.v-btn2');

        $btn1.addEventListener('click', function()  {
                const first = $btn1.querySelector('span');
                first.classList = '';
                first.classList.add('pi','pi-spinner', 'icon-spin')

                setTimeout(() => {
                    first.classList = '';
                    first.classList.add('pi','pi-search')
                }, 2000);
            }
        );

        $btn2.addEventListener('click', function()  {
                const first = $btn2.querySelector('span');
                first.classList.remove('hidden');

                setTimeout(() => {
                    first.classList.add('hidden');
                }, 2000);
            }
        );

        const $btns = component.querySelectorAll('.btn-split-dropdown')

        for (const $btn of $btns) {
            const $menu = $btn.nextElementSibling;
            $btn.addEventListener('click', 
                (event) => {
                    $menu.classList.toggle('tieredmenu-show')

                    // if we do not use this, the click will be intercepted by document
                    // and the menu will never show up
                    event.stopPropagation()
                }
            );
            document.addEventListener('click', function() {
                $menu.classList.remove('tieredmenu-show')
            })
        }
        
        return component
    }
}