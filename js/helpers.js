!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var n = t();
        for (var o in n)
            ("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(self, (function() {
    return function() {
        "use strict";
        var e = {
            d: function(t, n) {
                for (var o in n)
                    e.o(n, o) && !e.o(t, o) && Object.defineProperty(t, o, { enumerable: !0, get: n[o] })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r: function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 })
            }
        }, t = {};

        e.r(t),
        e.d(t, { Helpers: function() { return d } });

        var d = {
            ROOT_EL: "undefined" != typeof window ? document.documentElement : null,
            prefix: getComputedStyle(document.documentElement).getPropertyValue("--prefix")?.trim() || "",
            LAYOUT_BREAKPOINT: 1200,
            RESIZE_DELAY: 200,
            _listeners: [],
            _initialized: !1,
            _autoUpdate: !1,
            _styleEl: null,
            _curStyle: null,
            _resizeTimeout: null,
            _resizeCallback: null,
            _transitionCallback: null,
            _transitionCallbackTimeout: null,

            // Utility pentru a verifica clase
            _hasClass: function(cls, el = this.ROOT_EL) {
                if (!el) return false;
                if (el.length) return Array.from(el).some(e => e.classList.contains(cls));
                return el.classList.contains(cls);
            },
            _addClass: function(cls, el = this.ROOT_EL) {
                if (!el) return;
                if (el.length) el.forEach(e => e && cls.split(" ").forEach(c => e.classList.add(c)));
                else cls.split(" ").forEach(c => el.classList.add(c));
            },
            _removeClass: function(cls, el = this.ROOT_EL) {
                if (!el) return;
                if (el.length) el.forEach(e => e && cls.split(" ").forEach(c => e.classList.remove(c)));
                else cls.split(" ").forEach(c => el.classList.remove(c));
            },
            _triggerWindowEvent: function(name) {
                if (typeof window === "undefined") return;
                let event;
                if (typeof Event === "function") event = new Event(name);
                else (event = document.createEvent("Event")).initEvent(name, false, true);
                window.dispatchEvent(event);
            },
            _triggerEvent: function(name) {
                this._triggerWindowEvent("layout" + name);
                this._listeners.filter(l => l.event === name).forEach(l => l.callback.call(null));
            },

            // ---------- Password Toggle cu delegare ----------
            initPasswordToggle: function() {
                document.body.addEventListener("click", e => {
                    if (!e.target.matches(".form-password-toggle i")) return;
                    const parent = e.target.closest(".form-password-toggle");
                    if (!parent) return;
                    const input = parent.querySelector("input");
                    if (!input) return;

                    if (input.type === "password") {
                        input.type = "text";
                        e.target.classList.replace("tabler-eye-off", "tabler-eye");
                    } else {
                        input.type = "password";
                        e.target.classList.replace("tabler-eye", "tabler-eye-off");
                    }
                });
            },

            // ---------- Event handlers ----------
            on: function(event = "event", callback = function(){}) {
                const [evt, ...ns] = event.split(".");
                const namespace = ns.join(".") || null;
                this._listeners.push({ event: evt, namespace, callback });
            },
            off: function(event = "event") {
                const [evt, ...ns] = event.split(".");
                const namespace = ns.join(".") || null;
                this._listeners.filter(l => l.event === evt && l.namespace === namespace)
                               .forEach(l => this._listeners.splice(this._listeners.indexOf(l), 1));
            },

            // ---------- Init & Destroy ----------
            init: function() {
                if (this._initialized) return;
                this._initialized = true;
                this._triggerEvent("init");
                this._bindWindowResizeEvent();
            },
            destroy: function() {
                if (!this._initialized) return;
                this._initialized = false;
                this._removeClass("layout-transitioning");
                this._unbindWindowResizeEvent();
                this.off("init._Helpers");
                this._listeners = this._listeners.filter(l => l.event !== "init");
            },

            // ---------- Resize ----------
            _bindWindowResizeEvent: function() {
                const self = this;
                this._unbindWindowResizeEvent();
                this._resizeCallback = function() {
                    self._resizeTimeout && clearTimeout(self._resizeTimeout);
                    self._resizeTimeout = setTimeout(() => self._triggerEvent("resize"), self.RESIZE_DELAY);
                };
                window.addEventListener("resize", this._resizeCallback, false);
            },
            _unbindWindowResizeEvent: function() {
                if (this._resizeCallback) window.removeEventListener("resize", this._resizeCallback, false);
                this._resizeCallback = null;
                this._resizeTimeout && clearTimeout(this._resizeTimeout);
                this._resizeTimeout = null;
            },

            // ---------- Helpers ----------
            isSmallScreen: function() {
                return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < this.LAYOUT_BREAKPOINT;
            },
            getLayoutMenu: function() {
                return document.querySelector(".layout-menu");
            },
            isCollapsed: function() {
                return this.isSmallScreen() ? !this._hasClass("layout-menu-expanded") : this._hasClass("layout-menu-collapsed");
            },

            // ---------- Update layout ----------
            update: function() {
                // exemplu simplificat
                this._bindWindowResizeEvent();
            }
        };

        if (typeof window !== "undefined") {
            d.init();
            window.Helpers = d;
        }

        return t;
    }()
}));
