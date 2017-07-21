if (self.CavalryLogger) {
    CavalryLogger.start_js(["9wiKC"]);
}

__d("LocaleSwitchingReferrers", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        CARRY_LOGOUT_LOGIN: "carry_logout_login",
        FB4B_GLOBAL_SITES_DIALOG: "fb4b_global_sites_dialog",
        FB4B_GLOBAL_SITES_FOOTER: "fb4b_global_sites_footer",
        IGB_GLOBAL_SITES_FOOTER: "igb_global_sites_footer",
        LOCALE_SWITCH_SCRIPT: "locale_switch_script",
        M_TOUCH_LOCALE_SELECTOR: "m_touch_locale_selector",
        M_BASIC_LOCALE_FOOTER: "m_basic_locale_footer",
        MEDIA_PORTAL_V3_DIALOG: "media_portal_v3_dialog",
        MOBILE_ACCOUNT_SETTINGS: "mobile_account_settings",
        MOBILE_CHROME_JP_FOOTER: "mobile_chrome_jp_footer",
        MOBILE_FB4B_GLOBAL_SITES_FOOTER: "mobile_fb4b_global_sites_footer",
        MOBILE_FB4B_GLOBAL_SITES_PAGE_VIEW: "mobile_fb4b_global_sites_page_view",
        MOBILE_HELP_CENTER_SEARCH: "mobile_help_center_search",
        MOBILE_LOCALE_CHANGED_NOTICE: "mobile_locale_changed_notice",
        MOBILE_LOCALE_LINKS: "mobile_locale_links",
        MOBILE_SUGGESTED_LOCALE_SELECTOR: "mobile_suggested_locale_selector",
        MOBILE_SWITCH_LANGUAGE_HEADER: "mobile_switch_language_header",
        SAFETY_CENTER_GLOBAL_SITES_FOOTER: "fbsc_global_sites_footer",
        SITEMAP: "sitemap",
        QP_PROMO: "qp_promo",
        RLX_QP_FORCE_SWITCH: "rlx_qp_force_switch",
        RLX_QP_PROMPT_SWITCH: "rlx_qp_prompt_switch",
        RLX_QP_MULTI_LANGUAGE: "rlx_qp_multi_language",
        WWW_ACCOUNT_SETTINGS: "www_account_settings",
        WWW_CARD_SELECTOR: "www_card_selector",
        WWW_CARD_SELECTOR_MORE: "www_card_selector_more",
        WWW_DEV_SITE: "www_dev_site",
        WWW_HELP_INLINE_SELECTOR: "www_help_inline_selector",
        WWW_I18N_NUB: "www_i18n_nub",
        WWW_LANGUAGE_PAGE: "www_language_page",
        WWW_LINK_DIALOG_SELECTOR: "www_link_dialog_selector",
        WWW_LIST_SELECTOR: "www_list_selector",
        WWW_LIST_SELECTOR_MORE: "www_list_selector_more",
        WWW_MANDATORY_LOCALE_SELECTION_POST: "www_mandatory_locale_selection_post",
        WWW_TRANS_APP_INCONSISTENT: "www_trans_app_inconsistent",
        FBCOLUMN_FOOTER: "fbcolumn_footer",
        WWW_LOGIN_BLUE_BAR: "www_login_blue_bar_nub",
        UNIT_TEST: "unit_test",
        ACCOUNT_CREATOR: "account_creator",
        AT_WORK_ACCOUNT: "at_work_account_creator",
        ADMIN_TOOL: "admin_tool",
        TRANSLATION_APP_UNINSTALL: "translation_app_uninstall",
        CHECKPOINT: "checkpoint",
        LEGACY_CONTROLLER: "legacy_controller",
        AYMT: "aymt",
        UNKNOWN: "unknown"
    };
}), null);
__d("NavigationMetricsEnumJS", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        NAVIGATION_START: "navigationStart",
        UNLOAD_EVENT_START: "unloadEventStart",
        UNLOAD_EVENT_END: "unloadEventEnd",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        CONNECT_END: "connectEnd",
        SECURE_CONNECTION_START: "secureConnectionStart",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd",
        DOM_LOADING: "domLoading",
        DOM_INTERACTIVE: "domInteractive",
        DOM_CONTENT_LOADED_EVENT_START: "domContentLoadedEventStart",
        DOM_CONTENT_LOADED_EVENT_END: "domContentLoadedEventEnd",
        DOM_COMPLETE: "domComplete",
        LOAD_EVENT_START: "loadEventStart",
        LOAD_EVENT_END: "loadEventEnd"
    };
}), null);
__d("ResourceTimingMetricsEnumJS", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        START_TIME: "startTime",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        SECURE_CONNECTION_START: "secureConnectionStart",
        CONNECT_END: "connectEnd",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd"
    };
}), null);
__d('DetectBrokenProxyCache', ['AsyncSignal', 'Cookie', 'URI'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = c('Cookie').get(j);
        if (k != i && k != null && i != '0') {
            var l = {
                    c: 'si_detect_broken_proxy_cache',
                    m: j + ' ' + i + ' ' + k
                },
                m = new(c('URI'))('/common/scribe_endpoint.php').getQualifiedURI().toString();
            new(c('AsyncSignal'))(m, l).send();
        }
    }
    f.exports = {
        run: h
    };
}), null);
__d('ModuleDependencies', ['__debug'], (function a(b, c, d, e, f, g) {
    function h(l, m, n) {
        var o = c('__debug').modulesMap[n],
            p = c('__debug').deps;
        if (m[n]) return;
        m[n] = true;
        if (!o) {
            p[n] && (l[n] = true);
            return;
        }
        if (!o.dependencies || !o.dependencies.length) {
            if (o.waiting) l[n] = true;
            return;
        }
        o.dependencies.forEach(function (q) {
            h(l, m, q);
        });
    }

    function i(l) {
        var m = {};
        h(m, {}, l);
        var n = Object.keys(m);
        n.sort();
        return n;
    }

    function j() {
        var l = {
                loading: {},
                missing: []
            },
            m = {},
            n = c('__debug').getModules(),
            o = c('__debug').deps;
        for (var p in n) {
            var q = n[p];
            if (q.waiting) {
                var r = {};
                h(r, {}, q.id);
                delete r[q.id];
                l.loading[q.id] = Object.keys(r);
                l.loading[q.id].sort();
                l.loading[q.id].forEach(function (s) {
                    if (!(s in n) && o[s]) m[s] = 1;
                });
            }
        }
        l.missing = Object.keys(m);
        l.missing.sort();
        return l;
    }
    var k = {
        getMissing: i,
        getNotLoadedModules: j
    };
    f.exports = k;
}), null);
__d('ModuleErrorLogger', ['Bootloader', 'ErrorUtils', 'ModuleDependencies', 'BanzaiScuba'], (function a(b, c, d, e, f, g) {
    function h(k) {
        if (!k || !k.length) return 0;
        return k.reduce(function (l, m) {
            return l + m;
        }) / k.length;
    }

    function i(k) {
        if (!k) return [];
        var l = [];
        for (var m in k) l.push(k[m]);
        return l;
    }
    var j = {
        init: function k() {
            c('ErrorUtils').addListener(function (l) {
                if (l.name !== 'ModuleError') return;
                var m = c('ModuleDependencies').getNotLoadedModules(),
                    n = Object.keys(m.loading),
                    o = i(c('Bootloader').getLoadingUrls()),
                    p = i(c('Bootloader').getLoadedUrlTimes()),
                    q = {};
                m.missing.forEach(function (t) {
                    q[t] = 1;
                });
                var r = {};
                n.forEach(function (t) {
                    r[t] = 1;
                });
                var s = new(c('BanzaiScuba'))('module_errors', null, {
                    addAsnFields: true,
                    addPredictedGeographyFields: true,
                    addBrowserFields: true,
                    addMobileDeviceFields: true,
                    addPageFields: true,
                    addUserFields: true
                });
                s.addNormal('message', l.message).addInteger('missing_count', m.missing.length).addInteger('loading_count', n.length).addInteger('error_url_count', c('Bootloader').getErrorUrls().length).addTagset('missing_modules', q).addTagset('loading_modules', r).addInteger('mean_url_loading_time', Math.floor(h(o))).addInteger('mean_url_loaded_time', Math.floor(h(p))).post();
            }, true);
        }
    };
    f.exports = j;
}), null);
__d('ResetScrollOnUnload', ['Run'], (function a(b, c, d, e, f, g) {
    var h = {
        disableScrollRestoration: function i() {
            c('Run').onUnload(function () {
                window.history.scrollRestoration = 'manual';
            });
        },
        init: function i(j) {
            c('Run').onUnload(function () {
                window.history.scrollRestoration = 'manual';
                j.style.opacity = '0';
                window.scrollTo(0, 0);
            });
        }
    };
    f.exports = h;
}), null);
__d('TimezoneAutoset', ['AsyncRequest', 'emptyFunction'], (function a(b, c, d, e, f, g) {
    var h = false;

    function i(l) {
        var m = new Date(),
            n = m.getTimezoneOffset() / 15,
            o = m.getTime() / 1000,
            p = Math.round((l - o) / 900),
            q = Math.round(n + p) % 96;
        if (q == 0) {
            return 0;
        } else if (q > 48) {
            q -= Math.ceil(q / 96) * 96;
        } else if (q < -56) q += Math.ceil(q / -96) * 96;
        return q * 15;
    }

    function j(l, m, n) {
        if (!l || undefined == m) return;
        if (h) return;
        h = true;
        var o = -i(l);
        if (n || o != m) {
            var p = '/ajax/timezone/update.php';
            new(c('AsyncRequest'))().setURI(p).setData({
                gmt_off: o,
                is_forced: n
            }).setErrorHandler(c('emptyFunction')).setTransportErrorHandler(c('emptyFunction')).setOption('suppressErrorAlerts', true).send();
        }
    }
    var k = {
        setInputValue: function l(m, n) {
            m.value = i(n);
        },
        setTimezone: j
    };
    f.exports = k;
}), null);
__d('AccessibilityWebAssistiveTechTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.clear();
    }
    h.prototype.log = function () {
        c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig', this.$AccessibilityWebAssistiveTechTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function () {
        c('GeneratedLoggerUtils').log('logger:AccessibilityWebAssistiveTechLoggerConfig', this.$AccessibilityWebAssistiveTechTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function () {
        this.$AccessibilityWebAssistiveTechTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function (j) {
        this.$AccessibilityWebAssistiveTechTypedLogger1 = babelHelpers['extends']({}, this.$AccessibilityWebAssistiveTechTypedLogger1, j);
        return this;
    };
    h.prototype.setIndicatedBrowsers = function (j) {
        this.$AccessibilityWebAssistiveTechTypedLogger1.indicated_browsers = c('GeneratedLoggerUtils').serializeVector(j);
        return this;
    };
    h.prototype.setIsVirtualCursorAction = function (j) {
        this.$AccessibilityWebAssistiveTechTypedLogger1.is_virtual_cursor_action = j;
        return this;
    };
    h.prototype.setVC = function (j) {
        this.$AccessibilityWebAssistiveTechTypedLogger1.vc = j;
        return this;
    };
    h.prototype.updateExtraData = function (j) {
        j = c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
        c('GeneratedLoggerUtils').checkExtraDataFieldNames(j, i);
        this.$AccessibilityWebAssistiveTechTypedLogger1 = babelHelpers['extends']({}, this.$AccessibilityWebAssistiveTechTypedLogger1, j);
        return this;
    };
    h.prototype.addToExtraData = function (j, k) {
        var l = {};
        l[j] = k;
        return this.updateExtraData(l);
    };
    var i = {
        indicated_browsers: true,
        is_virtual_cursor_action: true,
        vc: true
    };
    f.exports = h;
}), null);
__d('AccessibilityWebVirtualCursorClickLogger', ['AccessibilityWebAssistiveTechTypedLogger', 'VirtualCursorStatus'], (function a(b, c, d, e, f, g) {
    var h = {
        init: function i(j) {
            j.forEach(function (k) {
                c('VirtualCursorStatus').add(k, this._log);
            }.bind(this), this);
        },
        _log: function i(j, k) {
            var l = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
            if (j) new(c('AccessibilityWebAssistiveTechTypedLogger'))().setIndicatedBrowsers(k).setIsVirtualCursorAction(l).log();
        }
    };
    f.exports = h;
}), null);
__d('BootloaderEventsTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.clear();
    }
    h.prototype.log = function () {
        c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig', this.$BootloaderEventsTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function () {
        c('GeneratedLoggerUtils').log('bootloader_events:BootloaderEventsLoggerConfig', this.$BootloaderEventsTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function () {
        this.$BootloaderEventsTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function (j) {
        this.$BootloaderEventsTypedLogger1 = babelHelpers['extends']({}, this.$BootloaderEventsTypedLogger1, j);
        return this;
    };
    h.prototype.setAllResourcesCount = function (j) {
        this.$BootloaderEventsTypedLogger1.all_resources_count = j;
        return this;
    };
    h.prototype.setAllResourcesDownloaded = function (j) {
        this.$BootloaderEventsTypedLogger1.all_resources_downloaded = j;
        return this;
    };
    h.prototype.setAsyncResourcesCount = function (j) {
        this.$BootloaderEventsTypedLogger1.async_resources_count = j;
        return this;
    };
    h.prototype.setAsyncResourcesDownloaded = function (j) {
        this.$BootloaderEventsTypedLogger1.async_resources_downloaded = j;
        return this;
    };
    h.prototype.setBlEndpointMode = function (j) {
        this.$BootloaderEventsTypedLogger1.bl_endpoint_mode = j;
        return this;
    };
    h.prototype.setBlSampleRate = function (j) {
        this.$BootloaderEventsTypedLogger1.bl_sample_rate = j;
        return this;
    };
    h.prototype.setBlockingResourcesCount = function (j) {
        this.$BootloaderEventsTypedLogger1.blocking_resources_count = j;
        return this;
    };
    h.prototype.setBlockingResourcesDownloaded = function (j) {
        this.$BootloaderEventsTypedLogger1.blocking_resources_downloaded = j;
        return this;
    };
    h.prototype.setCavalryBlCohort = function (j) {
        this.$BootloaderEventsTypedLogger1.cavalry_bl_cohort = j;
        return this;
    };
    h.prototype.setCavalryCohort = function (j) {
        this.$BootloaderEventsTypedLogger1.cavalry_cohort = j;
        return this;
    };
    h.prototype.setComponents = function (j) {
        this.$BootloaderEventsTypedLogger1.components = c('GeneratedLoggerUtils').serializeVector(j);
        return this;
    };
    h.prototype.setDuration = function (j) {
        this.$BootloaderEventsTypedLogger1.duration = j;
        return this;
    };
    h.prototype.setErrCount = function (j) {
        this.$BootloaderEventsTypedLogger1.err_count = j;
        return this;
    };
    h.prototype.setFirstIdenticalRequest = function (j) {
        this.$BootloaderEventsTypedLogger1.first_identical_request = j;
        return this;
    };
    h.prototype.setHasNewComponent = function (j) {
        this.$BootloaderEventsTypedLogger1.has_new_component = j;
        return this;
    };
    h.prototype.setIsEmployee = function (j) {
        this.$BootloaderEventsTypedLogger1.is_employee = j;
        return this;
    };
    h.prototype.setMsSinceNavstart = function (j) {
        this.$BootloaderEventsTypedLogger1.ms_since_navstart = j;
        return this;
    };
    h.prototype.setPkgCohort = function (j) {
        this.$BootloaderEventsTypedLogger1.pkg_cohort = j;
        return this;
    };
    h.prototype.setRef = function (j) {
        this.$BootloaderEventsTypedLogger1.ref = j;
        return this;
    };
    h.prototype.setRequestPath = function (j) {
        this.$BootloaderEventsTypedLogger1.request_path = j;
        return this;
    };
    h.prototype.setRetries = function (j) {
        this.$BootloaderEventsTypedLogger1.retries = j;
        return this;
    };
    h.prototype.setSvnRev = function (j) {
        this.$BootloaderEventsTypedLogger1.svn_rev = j;
        return this;
    };
    h.prototype.setTimesliceContext = function (j) {
        this.$BootloaderEventsTypedLogger1.timeslice_context = j;
        return this;
    };
    h.prototype.setVC = function (j) {
        this.$BootloaderEventsTypedLogger1.vc = j;
        return this;
    };
    h.prototype.setWeight = function (j) {
        this.$BootloaderEventsTypedLogger1.weight = j;
        return this;
    };
    var i = {
        all_resources_count: true,
        all_resources_downloaded: true,
        async_resources_count: true,
        async_resources_downloaded: true,
        bl_endpoint_mode: true,
        bl_sample_rate: true,
        blocking_resources_count: true,
        blocking_resources_downloaded: true,
        cavalry_bl_cohort: true,
        cavalry_cohort: true,
        components: true,
        duration: true,
        err_count: true,
        first_identical_request: true,
        has_new_component: true,
        is_employee: true,
        ms_since_navstart: true,
        pkg_cohort: true,
        ref: true,
        request_path: true,
        retries: true,
        svn_rev: true,
        timeslice_context: true,
        vc: true,
        weight: true
    };
    f.exports = h;
}), null);
__d('BootloaderLoggerUtil', ['Arbiter', 'Bootloader', 'BootloaderEventsTypedLogger', 'CurrentUser', 'ScriptPath', 'SiteData', 'performanceNavigationStart'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = {
            initLogging: function j(k) {
                if (h) return;
                h = c('Arbiter').subscribe(c('Bootloader').Events.BOOTLOAD, function (l, m) {
                    var n = m.start_time,
                        o = babelHelpers.objectWithoutProperties(m, ['start_time']),
                        p = Math.round(n - c('performanceNavigationStart')());
                    new(c('BootloaderEventsTypedLogger'))().setMsSinceNavstart(p).setCavalryCohort(k.cavalry_cohort).setPkgCohort(c('SiteData').pkg_cohort).setWeight(k.sample_rate).setIsEmployee(c('CurrentUser').isEmployee()).setSvnRev(c('SiteData').client_revision).setBlEndpointMode(c('SiteData').be_mode).setRequestPath(c('ScriptPath').getScriptPath()).setCavalryBlCohort(k.cavalry_bl_cohort).setBlSampleRate(k.bl_sample_rate).updateData(o).log();
                });
            }
        };
    f.exports = i;
}), null);
__d('HelpLiteFlyoutBootloader', ['regeneratorRuntime', 'Deferred', 'JSResource'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = false,
        i = null,
        j = null,
        k = {
            loadFlyout: function l() {
                return c('regeneratorRuntime').async(function m(n) {
                    while (1) switch (n.prev = n.next) {
                        case 0:
                            k.loadFlyoutWithHelpType(null);
                        case 1:
                        case 'end':
                            return n.stop();
                    }
                }, null, this);
            },
            loadFlyoutWithHelpType: function l(m) {
                var n, o, p, q;
                return c('regeneratorRuntime').async(function r(s) {
                    while (1) switch (s.prev = s.next) {
                        case 0:
                            s.next = 2;
                            return c('regeneratorRuntime').awrap(c('JSResource')('HelpLiteFlyout').__setRef('HelpLiteFlyoutBootloader').load());
                        case 2:
                            n = s.sent;
                            if (!h) {
                                s.next = 6;
                                break;
                            }
                            n.refreshHelp();
                            return s.abrupt('return');
                        case 6:
                            h = true;
                            if (m) k.setHelpType(m);
                            s.next = 10;
                            return c('regeneratorRuntime').awrap(this._getDeferredFlyoutElements().getPromise());
                        case 10:
                            o = s.sent;
                            p = o.flyout;
                            q = o.flyoutRoot;
                            n.registerFlyoutToggler(p, q);
                            n.loadBody();
                        case 15:
                        case 'end':
                            return s.stop();
                    }
                }, null, this);
            },
            setHelpType: function l(m) {
                j = m;
            },
            getHelpType: function l() {
                return j;
            },
            _getDeferredFlyoutElements: function l() {
                if (i == null) i = new(c('Deferred'))();
                return i;
            },
            registerFlyoutElements: function l(m, n) {
                this._getDeferredFlyoutElements().resolve({
                    flyout: m,
                    flyoutRoot: n
                });
            }
        };
    f.exports = k;
}), null);
__d('PrivacyLiteFlyoutBootloader', ['regeneratorRuntime', 'Promise', 'Deferred', 'JSResource'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = false,
        i = null,
        j = null,
        k = {
            loadFlyout: function l() {
                return c('regeneratorRuntime').async(function m(n) {
                    while (1) switch (n.prev = n.next) {
                        case 0:
                            n.next = 2;
                            return c('regeneratorRuntime').awrap(k._loadFlyout(false));
                        case 2:
                        case 'end':
                            return n.stop();
                    }
                }, null, this);
            },
            loadFlyoutAsChild: function l() {
                return c('regeneratorRuntime').async(function m(n) {
                    while (1) switch (n.prev = n.next) {
                        case 0:
                            n.next = 2;
                            return c('regeneratorRuntime').awrap(k._loadFlyout(true));
                        case 2:
                        case 'end':
                            return n.stop();
                    }
                }, null, this);
            },
            _loadFlyout: function l(m) {
                var n, o, p, q, r, s, t, event, u, v;
                return c('regeneratorRuntime').async(function w(x) {
                    while (1) switch (x.prev = x.next) {
                        case 0:
                            if (!h) {
                                x.next = 2;
                                break;
                            }
                            return x.abrupt('return');
                        case 2:
                            h = true;
                            x.next = 5;
                            return c('regeneratorRuntime').awrap(c('Promise').all([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(), this._getDeferredFlyoutElements().getPromise(), this._getDeferredFooterElements().getPromise()]));
                        case 5:
                            n = x.sent;
                            o = n[0];
                            p = n[1];
                            q = p.flyout;
                            r = p.flyoutRoot;
                            s = n[2];
                            t = s.footer;
                            event = s.event;
                            u = s.settingsExitPoint;
                            v = s.basicsExitPoint;
                            o.setIsChild(!!m);
                            o.registerFlyoutToggler(q, r);
                            o.registerSettingsAndBasicsLinkLogging(t, event, u, v);
                            o.loadBody();
                        case 19:
                        case 'end':
                            return x.stop();
                    }
                }, null, this);
            },
            setChildFlyoutVisible: function l(m) {
                var n, o, p, q, r;
                return c('regeneratorRuntime').async(function s(t) {
                    while (1) switch (t.prev = t.next) {
                        case 0:
                            if (!(!h && !m)) {
                                t.next = 2;
                                break;
                            }
                            return t.abrupt('return');
                        case 2:
                            t.next = 4;
                            return c('regeneratorRuntime').awrap(c('Promise').all([c('JSResource')('PrivacyLiteFlyout').__setRef('PrivacyLiteFlyoutBootloader').load(), this._getDeferredFlyoutElements().getPromise()]));
                        case 4:
                            n = t.sent;
                            o = n[0];
                            p = n[1];
                            q = p.flyout;
                            r = p._flyoutRoot;
                            if (!(m === o.isFlyoutVisible())) {
                                t.next = 11;
                                break;
                            }
                            return t.abrupt('return');
                        case 11:
                            o.setChildFlyoutVisible(m);
                            o.onToggle(q, m ? 'show' : 'hide');
                        case 13:
                        case 'end':
                            return t.stop();
                    }
                }, null, this);
            },
            _getDeferredFlyoutElements: function l() {
                if (i == null) i = new(c('Deferred'))();
                return i;
            },
            registerFlyoutElements: function l(m, n) {
                this._getDeferredFlyoutElements().resolve({
                    flyout: m,
                    flyoutRoot: n
                });
            },
            _getDeferredFooterElements: function l() {
                if (j == null) j = new(c('Deferred'))();
                return j;
            },
            registerFooterElements: function l(m, event, n, o) {
                this._getDeferredFooterElements().resolve({
                    footer: m,
                    event: event,
                    settingsExitPoint: n,
                    basicsExitPoint: o
                });
            }
        };
    f.exports = k;
}), null);
__d('HelpLiteFlyout', ['AsyncRequest', 'CSS', 'DOM', 'Event', 'HelpLiteFlyoutBootloader', 'PrivacyLiteFlyoutBootloader', 'Toggler', 'ge', 'ifRequired'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = null,
        i = {
            loadBody: function j() {
                if (c('ge')('fbHelpLiteFlyoutLoading')) new(c('AsyncRequest'))('/help/ajax/contextual/').setData({
                    page_type: c('HelpLiteFlyoutBootloader').getHelpType()
                }).send();
            },
            refreshHelp: function j() {
                if (c('ge')('fbHelpLiteFlyoutLoading')) new(c('AsyncRequest'))('/help/ajax/contextual/').setData({
                    page_type: c('HelpLiteFlyoutBootloader').getHelpType(),
                    is_refresh: true
                }).send();
            },
            resetHelp: function j(k) {
                var l = c('ge')('fbContextualHelpContent');
                if (l) c('DOM').replace(l, k);
            },
            showHelp: function j() {
                c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);
                c('CSS').show(c('ge')('fbHelpLiteFlyout'));
            },
            openPrivacy: function j() {
                c('CSS').hide(c('ge')('fbHelpLiteFlyout'));
                c('PrivacyLiteFlyoutBootloader').loadFlyoutAsChild();
                c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(true);
            },
            registerPrivacyBackLink: function j(k) {
                c('Event').listen(k, 'click', i.showHelp);
            },
            registerFlyoutToggler: function j(k, l) {
                h = l;
                var m = c('Toggler').createInstance(k);
                m.setSticky(false);
                c('Toggler').listen('hide', l, function (n) {
                    c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);
                });
                c('Toggler').listen('show', l, function (n) {
                    i.showHelp();
                });
                c('ifRequired')('ClientChromeStore', function (n) {
                    this._clientChromeStoreUnsubscribe = n.subscribe(function () {
                        var o = n.getState();
                        if (o.bluebar.activeFlyout.type === 'help') {
                            i.showHelp();
                        } else c('PrivacyLiteFlyoutBootloader').setChildFlyoutVisible(false);
                    });
                }.bind(this));
            },
            isFlyoutVisible: function j() {
                return h && c('Toggler').getActive() === h;
            },
            setFlyoutVisible: function j(k) {
                if (k) c('HelpLiteFlyoutBootloader').loadFlyout();
                c('ifRequired')('ClientChromeStore', function (l) {
                    l.dispatch({
                        type: 'UPDATE_ACTIVE_FLYOUT',
                        data: k ? 'help' : null
                    });
                });
                k ? c('Toggler').show(h) : c('Toggler').hide(h);
            }
        };
    f.exports = i;
}), null);
__d('LoggedOutSwitchingLocaleTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.clear();
    }
    h.prototype.log = function () {
        c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig', this.$LoggedOutSwitchingLocaleTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function () {
        c('GeneratedLoggerUtils').log('logger:LoggedOutSwitchingLocaleLoggerConfig', this.$LoggedOutSwitchingLocaleTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function () {
        this.$LoggedOutSwitchingLocaleTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function (j) {
        this.$LoggedOutSwitchingLocaleTypedLogger1 = babelHelpers['extends']({}, this.$LoggedOutSwitchingLocaleTypedLogger1, j);
        return this;
    };
    h.prototype.setIndex = function (j) {
        this.$LoggedOutSwitchingLocaleTypedLogger1.index = j;
        return this;
    };
    h.prototype.setNewLocale = function (j) {
        this.$LoggedOutSwitchingLocaleTypedLogger1.new_locale = j;
        return this;
    };
    h.prototype.setOldLocale = function (j) {
        this.$LoggedOutSwitchingLocaleTypedLogger1.old_locale = j;
        return this;
    };
    h.prototype.setReferrer = function (j) {
        this.$LoggedOutSwitchingLocaleTypedLogger1.referrer = j;
        return this;
    };
    var i = {
        index: true,
        new_locale: true,
        old_locale: true,
        referrer: true
    };
    f.exports = h;
}), null);
__d("XIntlAccountSetLocaleAsyncController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/intl\/ajax\/save_locale\/", {
        loc: {
            type: "String"
        },
        href: {
            type: "String"
        },
        index: {
            type: "Int"
        },
        ref: {
            type: "String"
        },
        ls_ref: {
            type: "Enum",
            defaultValue: "unknown",
            enumType: 1
        },
        should_redirect: {
            type: "Bool",
            defaultValue: true
        }
    });
}), null);
__d('IntlUtils', ['AsyncRequest', 'Cookie', 'LocaleSwitchingReferrers', 'LoggedOutSwitchingLocaleTypedLogger', 'ReloadPage', 'XIntlAccountSetLocaleAsyncController', 'goURI'], (function a(b, c, d, e, f, g) {
    var h = {
        setXmode: function i(j) {
            new(c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({
                xmode: j
            }).setHandler(function () {
                c('ReloadPage').now();
            }).send();
        },
        setAmode: function i(j) {
            new(c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({
                amode: j,
                app: false
            }).setHandler(function () {
                c('ReloadPage').now();
            }).send();
        },
        setRmode: function i(j) {
            new(c('AsyncRequest'))().setURI('/ajax/intl/save_xmode.php').setData({
                rmode: j
            }).setHandler(function () {
                c('ReloadPage').now();
            }).send();
        },
        setLocale: function i(j, k, l, m) {
            if (!l) l = j.options[j.selectedIndex].value;
            var n = c('XIntlAccountSetLocaleAsyncController').getURIBuilder().getURI();
            new(c('AsyncRequest'))().setURI(n).setData({
                loc: l,
                ref: k,
                should_redirect: false
            }).setHandler(function (o) {
                c('ReloadPage').now();
            }).send();
        },
        setCookieLocale: function i(j, k, l) {
            var m = arguments.length <= 3 || arguments[3] === undefined ? c('LocaleSwitchingReferrers').OTHER : arguments[3],
                n = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
            c('Cookie').set('locale', j);
            new(c('LoggedOutSwitchingLocaleTypedLogger'))().setNewLocale(j).setOldLocale(k).setIndex(n).setReferrer(m).log();
            c('goURI')(l);
        }
    };
    f.exports = h;
}), null);
__d('legacy:intl-base', ['IntlUtils'], (function a(b, c, d, e, f, g) {
    b.intl_set_xmode = c('IntlUtils').setXmode;
    b.intl_set_amode = c('IntlUtils').setAmode;
    b.intl_set_rmode = c('IntlUtils').setRmode;
    b.intl_set_locale = c('IntlUtils').setLocale;
}), 3);
__d('FormTypeABTester', ['Base64', 'Event'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = 16,
            k = 32,
            l = 65,
            m = 90,
            n = 48,
            o = 57,
            p = 58,
            q = 63,
            r = 91,
            s = 94,
            t = 0,
            u = 0,
            v = 0,
            w = 0,
            x = [],
            y = null,
            z = [],
            aa = [],
            ba = [],
            ca = [];
        for (var da = 0; da < 10; da++) {
            z.push(0);
            aa.push(0);
        }
        for (var ea = 0; ea < 10; ea++) {
            aa.push(0);
            ba.push(0);
            ca.push(0);
        }
        var fa = function ia(ja) {
                var ka = window.event ? Date.now() : ja.timeStamp,
                    la = window.event ? window.event.keyCode : ja.which;
                la %= 128;
                if (la >= l && la <= m || la == k) {
                    t++;
                } else if (la >= n && la <= o) {
                    u++;
                } else if (la >= p && la <= q || la >= r && la <= s) {
                    v++;
                } else w++;
                x[la] = ka;
                if (y) {
                    var ma = ka - y;
                    if (ma >= 0 && (la >= l && la <= m || la == k))
                        if (ma < 400) {
                            aa[Math.floor(ma / 20)]++;
                        } else if (ma < 1000) {
                        ba[Math.floor((ma - 400) / 60)]++;
                    } else if (ma < 3000) ca[Math.floor((ma - 1000) / 200)]++;
                }
                y = ka;
            },
            ga = function ia(ja) {
                var ka = window.event ? Date.now() : ja.timeStamp,
                    la = window.event ? window.event.keyCode : ja.which,
                    ma = ka - x[la % 128];
                if (ma >= 50 && ma < 250) z[Math.floor((ma - 50) / 20)]++;
            },
            ha = function ia(ja) {
                var ka = Math.max.apply(Math, ja),
                    la = [];
                ja.forEach(function (ma) {
                    la.push(Math.floor(ma * 63 / (ka || 1)));
                });
                return la;
            };
        this.getDataVect = function () {
            var ia = aa.concat(ba, ca);
            return ha(ia).concat(ha(z), [t / 2, u / 2, v / 2, w / 2]);
        };
        this.getData = function () {
            return c('Base64').encodeNums(this.getDataVect());
        };
        c('Event').listen(i, {
            keyup: ga.bind(this),
            keydown: fa.bind(this)
        });
    }
    f.exports = h;
}), null);
__d('FourOhFourJSTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.clear();
    }
    h.prototype.log = function () {
        c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig', this.$FourOhFourJSTypedLogger1, c('Banzai').BASIC);
    };
    h.prototype.logVital = function () {
        c('GeneratedLoggerUtils').log('logger:FourOhFourJSLoggerConfig', this.$FourOhFourJSTypedLogger1, c('Banzai').VITAL);
    };
    h.prototype.clear = function () {
        this.$FourOhFourJSTypedLogger1 = {};
        return this;
    };
    h.prototype.updateData = function (j) {
        this.$FourOhFourJSTypedLogger1 = babelHelpers['extends']({}, this.$FourOhFourJSTypedLogger1, j);
        return this;
    };
    h.prototype.setFbid = function (j) {
        this.$FourOhFourJSTypedLogger1.fbid = j;
        return this;
    };
    h.prototype.setOriginalURI = function (j) {
        this.$FourOhFourJSTypedLogger1.original_uri = j;
        return this;
    };
    h.prototype.setScriptPath = function (j) {
        this.$FourOhFourJSTypedLogger1.script_path = j;
        return this;
    };
    h.prototype.updateExtraData = function (j) {
        j = c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));
        c('GeneratedLoggerUtils').checkExtraDataFieldNames(j, i);
        this.$FourOhFourJSTypedLogger1 = babelHelpers['extends']({}, this.$FourOhFourJSTypedLogger1, j);
        return this;
    };
    h.prototype.addToExtraData = function (j, k) {
        var l = {};
        l[j] = k;
        return this.updateExtraData(l);
    };
    var i = {
        fbid: true,
        original_uri: true,
        script_path: true
    };
    f.exports = h;
}), null);
__d('LoginFormController', ['Event', 'ge', 'goURI', 'Button', 'Cookie', 'DeferredCookie', 'FormTypeABTester', 'WebStorage'], (function a(b, c, d, e, f, g) {
    g.init = function (h, i, j, k) {
        if (k) var l = new(c('FormTypeABTester'))(h);
        c('Event').listen(h, 'submit', function () {
            if (k && h.ab_test_data) h.ab_test_data.value = l.getData();
            if (window.__cookieReload) window.clearInterval(window.__cookieReload);
            c('Button').setEnabled(i, false);
            setTimeout(c('Button').setEnabled.bind(null, i, true), 15000);
            c('DeferredCookie').flushAllCookies();
        });
        var m = c('ge')('lgnjs');
        if (m) {
            var n = Math.floor(Date.now() / 1000);
            m.value = n;
        }
        var o = c('WebStorage').getSessionStorage(),
            p = o != null ? parseInt(o.getItem('LoginPollRateLimit'), 10) : 0,
            q = j != null;
        if (p > n - 60) q = false;
        if (q) {
            var r, s = function t() {
                if (c('Cookie').get('c_user') != null) {
                    window.clearInterval(r);
                    if (o != null) o.setItem('LoginPollRateLimit', Math.floor(Date.now() / 1000));
                    c('goURI')(j);
                }
            };
            r = window.setInterval(s, 1000);
            s();
        }
    };
}), null);
__d('FantaHider', ['ifRequired'], (function a(b, c, d, e, f, g) {
    'use strict';
    f.exports = {
        hide: function h() {
            c('ifRequired')('FantaTabsSlimApp', function (i) {
                i.hide();
            }, function () {
                c('ifRequired')('FantaTabsReactApp', function (i) {
                    i.hide();
                });
            });
        },
        unhide: function h() {
            c('ifRequired')('FantaTabsSlimApp', function (i) {
                i.unhide();
            }, function () {
                c('ifRequired')('FantaTabsReactApp', function (i) {
                    i.unhide();
                });
            });
        }
    };
}), null);
__d('AccessibilityLogger', ['AsyncSignal', 'Cookie'], (function a(b, c, d, e, f, g) {
    var h = {
        COOKIE: 'a11y',
        DECAY_MS: 6 * 60 * 60 * 1000,
        DEFAULT: {
            sr: 0,
            'sr-ts': Date.now(),
            jk: 0,
            'jk-ts': Date.now(),
            kb: 0,
            'kb-ts': Date.now(),
            hcm: 0,
            'hcm-ts': Date.now()
        },
        getCookie: function i() {
            var j = h.DEFAULT,
                k = c('Cookie').get(h.COOKIE);
            if (k) {
                k = JSON.parse(k);
                for (var l in j)
                    if (l in k) j[l] = k[l];
            }
            return j;
        },
        logKey: function i(j, k) {
            var l = h.getCookie();
            l[j]++;
            var m = Date.now();
            if (m - l[j + '-ts'] > h.DECAY_MS) {
                new(c('AsyncSignal'))('/ajax/accessibilitylogging', {
                    eventName: k,
                    times_pressed: l[j]
                }).send();
                l[j + '-ts'] = m;
                l[j] = 0;
            }
            c('Cookie').set(h.COOKIE, JSON.stringify(l));
        },
        logHCM: function i() {
            h.logKey('hcm', 'hcm_users');
        },
        logSRKey: function i() {
            h.logKey('sr', 'sr_users');
        },
        logJKKey: function i() {
            h.logKey('jk', 'jk_users');
        },
        logFocusIn: function i() {
            h.logKey('kb', 'kb_users');
        }
    };
    f.exports = h;
}), null);
__d('AsyncRequestNectarLogging', ['AsyncRequest', 'Nectar'], (function a(b, c, d, e, f, g) {
    Object.assign(c('AsyncRequest').prototype, {
        setNectarModuleData: function h(i) {
            if (this.method == 'POST') c('Nectar').addModuleData(this.data, i);
        }
    });
}), null);
__d('ClickRefUtils', ['DataAttributeUtils'], (function a(b, c, d, e, f, g) {
    var h = {
        get_intern_ref: function i(j) {
            if (!!j) {
                var k = {
                    profile_minifeed: 1,
                    gb_content_and_toolbar: 1,
                    gb_muffin_area: 1,
                    ego: 1,
                    bookmarks_menu: 1,
                    jewelBoxNotif: 1,
                    jewelNotif: 1,
                    BeeperBox: 1,
                    searchBarClickRef: 1
                };
                for (var l = j; l && l != document.body; l = l.parentNode) {
                    if (!l.id || typeof l.id !== 'string') continue;
                    if (l.id.substr(0, 8) == 'pagelet_') return l.id.substr(8);
                    if (l.id.substr(0, 8) == 'box_app_') return l.id;
                    if (k[l.id]) return l.id;
                }
            }
            return '-';
        },
        get_href: function i(j) {
            var k = j.getAttribute && (j.getAttribute('ajaxify') || j.getAttribute('data-endpoint')) || j.action || j.href || j.name;
            return typeof k === 'string' ? k : null;
        },
        should_report: function i(j, k) {
            if (k == 'FORCE') return true;
            if (k == 'INDIRECT') return false;
            return j && (h.get_href(j) || j.getAttribute && c('DataAttributeUtils').getDataFt(j));
        }
    };
    f.exports = h;
}), null);
__d('ClickRefLogger', ['Arbiter', 'Banzai', 'ClickRefUtils', 'Env', 'ScriptPath', 'SessionName', 'Vector', '$', 'collectDataAttributes', 'ge', 'pageID', 'Cookie'], (function a(b, c, d, e, f, g) {
    var h = {
        delay: 0,
        retry: true
    };

    function i(l) {
        if (!c('ge')('content')) return [0, 0, 0, 0];
        var m = c('$')('content'),
            n = c('Vector').getEventPosition(l);
        return [n.x, n.y, m.offsetLeft, m.clientWidth];
    }

    function j(l, m, event, n) {
        var o = 'r',
            p = [0, 0, 0, 0],
            q, r;
        if (!!event) {
            q = event.type;
            if (q == 'click' && c('ge')('content')) p = i(event);
            var s = 0;
            event.ctrlKey && (s += 1);
            event.shiftKey && (s += 2);
            event.altKey && (s += 4);
            event.metaKey && (s += 8);
            if (s) q += s;
        }
        if (!!m) r = c('ClickRefUtils').get_href(m);
        var t = c('collectDataAttributes')(!!event ? event.target || event.srcElement : m, ['ft', 'gt']);
        Object.assign(t.ft, n.ft);
        Object.assign(t.gt, n.gt);
        if (typeof t.ft.ei === 'string') delete t.ft.ei;
        var u = [l._ue_ts, l._ue_count, r || '-', l._context, q || '-', c('ClickRefUtils').get_intern_ref(m), o, b.URI ? b.URI.getRequestURI(true, true).getUnqualifiedURI().toString() : location.pathname + location.search + location.hash, t].concat(p).concat(c('pageID')).concat(c('ScriptPath').getScriptPath());
        return u;
    }
    c('Arbiter').subscribe("ClickRefAction/new", function (l, m) {
        if (c('ClickRefUtils').should_report(m.node, m.mode)) {
            var n = j(m.cfa, m.node, m.event, m.extra_data);
            c('Cookie').set('act', m.cfa.ue);
            var o = [c('SessionName').getName(), Date.now(), 'act'];
            c('Banzai').post('click_ref_logger', Array.prototype.concat(o, n), h);
        }
    });

    function k(l) {
        function m(u) {
            var v = '';
            for (var w = 0; w < u.length; w++) v += String.fromCharCode(1 ^ u.charCodeAt(w));
            return v;
        }

        function n(u, v, w, x) {
            var y = v[w];
            if (y && u && y in u)
                if (w + 1 < v.length) {
                    n(u[y], v, w + 1, x);
                } else {
                    var z = u[y],
                        aa = function ba() {
                            setTimeout(x.bind(null, arguments));
                            return z.apply(this, arguments);
                        };
                    aa.toString = z.toString.bind(z);
                    Object.defineProperty(u, y, {
                        configurable: false,
                        writable: true,
                        value: aa
                    });
                }
        }
        var o = {},
            p = {},
            q = false;

        function r(u, v) {
            if (p[u]) return;
            p[u] = o[u] = 1;
        }
        var s = l[m('jiri')];
        if (s) {
            var t = [];
            m(s).split(',').map(function (u, v) {
                var w = u.substring(1).split(':'),
                    x;
                switch (u.charAt(0)) {
                    case '1':
                        t.push(function (y) {
                            if (window[w[0]]) r(v, w[0]);
                        });
                        break;
                    case '2':
                        x = new RegExp(w[0]);
                        n(window, w, 2, function (y) {
                            var z = y[w[1]];
                            if (typeof z === 'string' && x.test(z)) r(v, u);
                        });
                        break;
                    case '3':
                        n(window, w, 0, function () {
                            for (var y = t.length; y--;) t[y]();
                            var z = Object.keys(o);
                            if (z.length) {
                                o = {};
                                setTimeout(c('Banzai')[m('qnru')].bind(c('Banzai'), m('islg'), {
                                    m: '' + z
                                }), 5000);
                            }
                        });
                        break;
                    case '4':
                        q = true;
                        break;
                }
            });
        }
    }
    try {
        k(c('Env'));
    } catch (l) {}
}), null);
__d('DimensionTracking', ['Cookie', 'Event', 'debounce', 'getViewportDimensions', 'isInIframe'], (function a(b, c, d, e, f, g) {
    function h() {
        var i = c('getViewportDimensions')();
        c('Cookie').set('wd', i.width + 'x' + i.height);
    }
    if (!c('isInIframe')()) {
        setTimeout(h, 100);
        c('Event').listen(window, 'resize', c('debounce')(h, 250));
        c('Event').listen(window, 'focus', h);
    }
}), null);
__d('FourOhFourJSLogger', ['FourOhFourJSTypedLogger', 'ScriptPath'], (function a(b, c, d, e, f, g) {
    var h = {
        log: function i() {
            window.onload = function () {
                var j = new(c('FourOhFourJSTypedLogger'))();
                j.setOriginalURI(window.location.href);
                j.setScriptPath(c('ScriptPath').getScriptPath());
                j.logVital();
            };
        }
    };
    f.exports = h;
}), null);
__d('HighContrastMode', ['AccessibilityLogger', 'CSS', 'CurrentUser', 'DOM', 'Style', 'URI', 'emptyFunction'], (function a(b, c, d, e, f, g) {
    var h = {
        init: function i(j) {
            var k = new(c('URI'))(window.location.href);
            if (k.getPath().indexOf('/intern/') === 0) return;
            if (window.top !== window.self) return;
            var l = c('DOM').create('div');
            c('DOM').appendContent(document.body, l);
            l.style.cssText = 'border: 1px solid !important;' + 'border-color: red green !important;' + 'position: fixed;' + 'height: 5px;' + 'top: -999px;' + 'background-image: url(' + j.spacerImage + ') !important;';
            var m = c('Style').get(l, 'background-image'),
                n = c('Style').get(l, 'border-top-color'),
                o = c('Style').get(l, 'border-right-color'),
                p = n == o && m && (m == 'none' || m == 'url(invalid-url:)');
            if (p) {
                c('CSS').conditionClass(document.documentElement, 'highContrast', p);
                if (c('CurrentUser').getID()) c('AccessibilityLogger').logHCM();
            }
            c('DOM').remove(l);
            h.init = c('emptyFunction');
        }
    };
    f.exports = h;
}), null);
__d('LoginbarPopover', ['CSS', 'ge', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    var h = 1000,
        i = {
            init: function j(k, l, m) {
                var n = c('ge')('email', m);
                setTimeout(function () {
                    return this.show(k, m, n);
                }.bind(this), h);
                l.addEventListener('click', function (event) {
                    event.kill();
                    this.toggle(m, n);
                }.bind(this));
                k.style.visibility = 'visible';
            },
            show: function j(k, l, m) {
                c('CSS').show(l);
                var n = c('getActiveElement')().tagName.toLowerCase();
                if (n !== 'input' && n !== 'textarea') m.focus();
            },
            toggle: function j(k, l) {
                c('CSS').toggle(k);
                if (c('CSS').shown(k)) l.focus();
            }
        };
    f.exports = i;
}), null);
__d("ScreenDimensionsAutoSet", [], (function a(b, c, d, e, f, g) {
    function h() {
        if (!window.btoa) return '';
        var j = {
            w: screen.width,
            h: screen.height,
            aw: screen.availWidth,
            ah: screen.availHeight,
            c: screen.colorDepth
        };
        return btoa(JSON.stringify(j));
    }
    var i = {
        setInputValue: function j(k) {
            k.value = h();
        }
    };
    f.exports = i;
}), null);
__d('StringTransformations', [], (function a(b, c, d, e, f, g) {
    f.exports = {
        unicodeEscape: function h(i) {
            return i.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g, function (j) {
                var k = j.charCodeAt().toString(16);
                return '\\u' + ('0000' + k.toUpperCase()).slice(-4);
            });
        },
        unicodeUnescape: function h(i) {
            return i.replace(/(\\u[0-9A-Fa-f]{4})/g, function (j) {
                return String.fromCharCode(parseInt(j.slice(2), 16));
            });
        }
    };
}), null);
__d('TimeSpentArray', ['Banzai', 'pageID', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    var h = 2,
        i = h * 32,
        j, k, l, m, n, o, p, q, r, s = {},
        t;

    function u() {
        return {
            timeoutDelayMap: s,
            nextDelay: t,
            timeoutInSeconds: l
        };
    }

    function v() {
        if (j) {
            var da = Date.now();
            if (da > n) p = Math.min(i, Math.ceil(da / 1000 - m));
            var ea = aa();
            if (ea) j(ea, t);
        }
        z();
    }

    function w() {
        x();
        k = c('setTimeoutAcrossTransitions')(v, l * 1000);
    }

    function x() {
        if (k) {
            clearTimeout(k);
            k = null;
        }
    }

    function y(da) {
        m = da;
        n = m * 1000;
        o = [1];
        for (var ea = 1; ea < h; ea++) o.push(0);
        p = 1;
        q += 1;
        r += 1;
        var fa = r.toString() + '_delay';
        t = s[fa];
        if (t === undefined) t = s.delay;
        var ga = r.toString() + '_timeout',
            ha = s[ga];
        if (ha === undefined) ha = s.timeout;
        ha = Math.min(ha, i);
        l = ha || i;
        w();
    }

    function z() {
        x();
        o = null;
    }

    function aa() {
        if (!o) return null;
        return {
            tos_id: c('pageID'),
            start_time: m,
            tos_array: o.slice(0),
            tos_len: p,
            tos_seq: r,
            tos_cum: q
        };
    }

    function ba(da) {
        if (da >= n && da - n < 1000) return;
        ca(Math.floor(da / 1000));
    }

    function ca(da) {
        var ea = da - m;
        if (ea < 0 || ea >= i) v();
        if (!o) {
            y(da);
        } else {
            o[ea >> 5] |= 1 << (ea & 31);
            p = ea + 1;
            q += 1;
            n = da * 1000;
        }
    }
    f.exports = {
        init: function da(ea, fa, ga) {
            q = 0;
            r = -1;
            j = ea;
            if (typeof fa == 'object' && fa !== null) {
                s = fa;
            } else s = {};
            if (!ga) ga = Date.now();
            y(Math.floor(ga / 1000));
            c('Banzai').subscribe(c('Banzai').SHUTDOWN, v);
        },
        update: function da(ea) {
            ba(ea);
        },
        get: function da() {
            return aa();
        },
        ship: function da() {
            v();
        },
        reset: function da() {
            z();
        },
        testState: function da() {
            return u();
        }
    };
}), null);
__d('TimeSpentImmediateActiveSecondsLogger', ['Banzai', 'ImmediateActiveSecondsConfig', 'ScriptPath'], (function a(b, c, d, e, f, g) {
    var h = 'immediate_active_seconds',
        i = {
            signal: true,
            retry: true
        },
        j = c('ImmediateActiveSecondsConfig').sampling_rate,
        k = c('ImmediateActiveSecondsConfig').ias_bucket,
        l = 0;

    function m(o) {
        if (j <= 0) return false;
        var p = Math.floor(o / 1000) % j;
        return p === k;
    }

    function n(o) {
        if (o >= l && o - l < 1000) return;
        if (m(o)) {
            var p = {
                activity_time_ms: o,
                last_activity_time_ms: l,
                script_path: c('ScriptPath').getTopViewEndpoint()
            };
            try {
                c('Banzai').post(h, p, i);
            } catch (q) {}
        }
        l = Math.floor(o / 1000) * 1000;
    }
    f.exports = {
        maybeReportActiveSecond: n
    };
}), null);
__d('TimeSpentBitArrayLogger', ['Arbiter', 'Banzai', 'BanzaiODS', 'TimeSpentArray', 'TimeSpentConfig', 'TimeSpentImmediateActiveSecondsLogger', 'UserActivity', 'isInIframe'], (function a(b, c, d, e, f, g) {
    var h = {
        delay: c('Banzai').BASIC.delay,
        retry: true
    };

    function i(j, k) {
        c('Arbiter').inform('timespent/tosbitdataposted', babelHelpers['extends']({}, j));
        if (typeof k == 'number') {
            h.delay = k;
        } else h.delay = c('Banzai').BASIC.delay;
        c('Banzai').post('time_spent_bit_array', babelHelpers['extends']({}, j), h);
        h.delay = c('TimeSpentConfig').delay;
    }
    f.exports = {
        init: function j(k) {
            if (c('isInIframe')()) return;
            c('UserActivity').subscribe(function (m, n) {
                var o = n.last_inform;
                c('TimeSpentArray').update(o);
                c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(o);
            });
            var l = Date.now();
            c('TimeSpentArray').init(i, c('TimeSpentConfig'), l);
            c('TimeSpentImmediateActiveSecondsLogger').maybeReportActiveSecond(l);
            c('BanzaiODS').bumpEntityKey('ms.time_spent.qa.www', 'time_spent.bits.js_initialized');
        }
    };
}), null);
__d('UserActionHistory', ['Arbiter', 'ClickRefUtils', 'ScriptPath', 'throttle', 'WebStorage'], (function a(b, c, d, e, f, g) {
    var h = {
            click: 1,
            submit: 1
        },
        i = false,
        j = {
            log: [],
            len: 0
        },
        k = c('throttle').acrossTransitions(function () {
            try {
                i._ua_log = JSON.stringify(j);
            } catch (n) {
                i = false;
            }
        }, 1000);

    function l() {
        var n = c('WebStorage').getSessionStorage();
        if (n) {
            i = n;
            i._ua_log && (j = JSON.parse(i._ua_log));
        } else i = false;
        j.log[j.len % 10] = {
            ts: Date.now(),
            path: '-',
            index: j.len,
            type: 'init',
            iref: '-'
        };
        j.len++;
        c('Arbiter').subscribe("UserAction/new", function (o, p) {
            var q = p.ua,
                r = p.node,
                event = p.event;
            if (!event || !(event.type in h)) return;
            var s = {
                path: c('ScriptPath').getScriptPath(),
                type: event.type,
                ts: q._ue_ts,
                iref: c('ClickRefUtils').get_intern_ref(r) || '-',
                index: j.len
            };
            j.log[j.len++ % 10] = s;
            i && k();
        });
    }

    function m() {
        return j.log.sort(function (n, o) {
            return o.ts != n.ts ? o.ts - n.ts : o.index - n.index;
        });
    }
    l();
    f.exports = {
        getHistory: m
    };
}), null);
__d('ImageTimingHelper', ['Arbiter', 'BigPipe', 'URI'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {};
    c('Arbiter').subscribe(c('BigPipe').Events.init, function (j, k) {
        if (k.lid && k.lid !== '0') k.arbiter.subscribe('images_displayed', function (l, m) {
            var n = h[m.lid];
            if (!n) n = h[m.lid] = [];
            m.images.forEach(function (o) {
                try {
                    var p = new(c('URI'))(o);
                    o = p.setFragment('').toString();
                } catch (q) {
                    return;
                }
                if (i[o]) return;
                i[o] = true;
                n.push({
                    pagelet: m.pagelet,
                    timeslice: m.timeslice,
                    ts: m.ts,
                    uri: o
                });
            });
        });
    });
    f.exports.getImageTimings = function (j) {
        return h[j] || [];
    };
}), null);
__d('PageletEventsHelper', ['Arbiter', 'PageletEventConstsJS'], (function a(b, c, d, e, f, g) {
    var h = 'BigPipe/init',
        i = 'pagelet_event',
        j = 'phase_begin',
        k = {},
        l = [],
        m = false;

    function n() {
        return {
            pagelets: {},
            categories: {},
            phase_start: {},
            display_resources: {},
            all_resources: {}
        };
    }

    function o(r, s, t, u) {
        if (k[u].pagelets[s] == undefined) k[u].pagelets[s] = {};
        k[u].pagelets[s][r] = t;
    }

    function p(r) {
        r.subscribe(i, function (s, t) {
            var event = t.event,
                u = t.ts,
                v = t.id,
                w = t.lid,
                x = t.phase,
                y = t.categories,
                z = t.allResources,
                aa = t.displayResources;
            o(event, v, u, w);
            var ba = k[w],
                ca = ba.pagelets[v];
            if (event === c('PageletEventConstsJS').ARRIVE_END) {
                ca.phase = x;
                ba.all_resources[v] = z;
                ba.display_resources[v] = aa;
            }
            if ((event === c('PageletEventConstsJS').ONLOAD_END || event === c('PageletEventConstsJS').DISPLAY_END) && y) y.forEach(function (fa) {
                if (ba.categories[fa] == undefined) ba.categories[fa] = {};
                ba.categories[fa][event] = u;
            });
            for (var da = 0, ea = l.length; da < ea; da++) l[da](v, event, u, w);
        });
        r.subscribe(j, function (event, s) {
            k[s.lid].phase_start[s.phase] = s.ts;
        });
    }
    var q = {
        init: function r() {
            if (m) return;
            c('Arbiter').subscribe(h, function (event, s) {
                var t = s.lid,
                    u = s.arbiter;
                k[t] = n();
                p(u);
            });
            m = true;
        },
        getMetrics: function r(s) {
            if (k[s]) return JSON.parse(JSON.stringify(k[s]));
            return null;
        },
        subscribeToPageletEvents: function r(s) {
            l.push(s);
            return {
                remove: function t() {
                    l.splice(0, l.indexOf(s));
                }
            };
        }
    };
    f.exports = q;
}), null);
__d('KappaWrapper', ['AsyncSignal', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    var h = false;
    f.exports = {
        forceStart: function i(j, k, l) {
            var m = 0,
                n = function o() {
                    new(c('AsyncSignal'))('/si/kappa/', {
                        Ko: "a"
                    }).send();
                    if (++m < j) c('setTimeoutAcrossTransitions')(o, k * 1000);
                };
            c('setTimeoutAcrossTransitions')(n, (k + l) * 1000);
        },
        start: function i(j, k, l) {
            if (!h) {
                h = true;
                this.forceStart(j, k, l);
            }
        }
    };
}), null);
__d('Chromedome', ['fbt'], (function a(b, c, d, e, f, g, h) {
    g.start = function (i) {
        if (i.off || top !== window || !/(^|\.)facebook\.(com|sg)$/.test(document.domain)) return;
        var j = i.stop || h._("Stop!"),
            k = i.text || h._("Dette er en browserfunktion, der er tilt\u00e6nkt udviklere. Hvis nogen har bedt dig om at kopiere og inds\u00e6tte noget her for at aktivere en Facebook-funktion eller \"hacke\" en anden persons konto, er det svindel og vil give vedkommende adgang til din Facebook-konto."),
            l = i.more || h._("Se {url} for mere information.", [h.param('url', 'https://www.facebook.com/selfxss')]);
        if ((window.chrome || window.safari) && !i.textonly) {
            var m = 'font-family:helvetica; font-size:20px; ';
            [
                [j, i.c1 || m + 'font-size:50px; font-weight:bold; ' + 'color:red; -webkit-text-stroke:1px black;'],
                [k, i.c2 || m],
                [l, i.c3 || m],
                ['', '']
            ].map(function (s) {
                setTimeout(console.log.bind(console, '\n%c' + s[0], s[1]));
            });
        } else {
            var n = ['', ' .d8888b.  888                       888', 'd88P  Y88b 888                       888', 'Y88b.      888                       888', ' "Y888b.   888888  .d88b.  88888b.   888', '    "Y88b. 888    d88""88b 888 "88b  888', '      "888 888    888  888 888  888  Y8P', 'Y88b  d88P Y88b.  Y88..88P 888 d88P', ' "Y8888P"   "Y888  "Y88P"  88888P"   888', '                           888', '                           888', '                           888'],
                o = ('' + k).match(/.{35}.+?\s+|.+$/g),
                p = Math.floor(Math.max(0, (n.length - o.length) / 2));
            for (var q = 0; q < n.length || q < o.length; q++) {
                var r = n[q];
                n[q] = r + new Array(45 - r.length).join(' ') + (o[q - p] || '');
            }
            console.log('\n\n\n' + n.join('\n') + '\n\n' + l + '\n');
            return;
        }
    };
}), null);
__d('NavigationClickPointHandler', ['Event', 'ScriptPath', 'collectDataAttributes'], (function a(b, c, d, e, f, g) {
    var h = {
        getClickPointInfo: function j(k) {
            var l = null,
                m = c('collectDataAttributes')(k, ['ft'], ['href', 'data-click']),
                n = m.normal.href;
            if (!n || n === '#') return false;
            var o = m.normal['data-click'];
            if (l === null && o) l = {
                click: o
            };
            var p = m.ft.tn;
            if (l === null && p) l = {
                tn: p
            };
            if (l === null && k.getAttribute) {
                var q = k.getAttribute('class');
                if (q) l = {
                    'class': q
                };
            }
            return l;
        }
    };

    function i(event) {
        var j = event.target || event.srcElement,
            k = h.getClickPointInfo(j);
        if (k !== false) c('ScriptPath').setClickPointInfo(k);
    }
    if (document.documentElement !== null) c('Event').listen(document.documentElement, {
        click: i
    });
    f.exports = h;
}), null);
__d("XWebStorageLoggingAsyncController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/ajax\/webstorage\/process_keys\/", {});
}), null);
__d('WebStorageMonster', ['Event', 'AsyncRequest', 'UserActivity', 'StringTransformations', 'WebStorage', 'XWebStorageLoggingAsyncController', 'arrayContains', 'isEmpty', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    var h = 300000,
        i = false;

    function j(o) {
        var p = {};
        for (var q in o) {
            var r = o.getItem(q),
                s = c('StringTransformations').unicodeEscape(q);
            if (typeof r === 'string') p[s] = r.length;
        }
        return p;
    }

    function k(o) {
        var p = c('WebStorage').getLocalStorage();
        if (!p || !o.keys) return;
        n._getLocalStorageKeys().forEach(function (q) {
            if (c('arrayContains')(o.keys, q)) p.removeItem(q);
        });
    }

    function l(o) {
        var p = c('WebStorage').getLocalStorage();
        if (p) n._getLocalStorageKeys().forEach(function (q) {
            if (!o.some(function (r) {
                    return new RegExp(r).test(q);
                })) p.removeItem(q);
        });
    }

    function m() {
        if (c('UserActivity').isActive(h)) {
            c('setTimeoutAcrossTransitions')(m, h);
        } else n.cleanNow();
    }
    var n = {
        registerLogoutForm: function o(p, q) {
            c('Event').listen(p, 'submit', function (r) {
                n.cleanOnLogout(q);
            });
        },
        schedule: function o() {
            if (i) return;
            i = true;
            m();
        },
        cleanNow: function o() {
            var p = Date.now(),
                q = {},
                r = c('WebStorage').getLocalStorage();
            if (r) q.local_storage = j(r);
            var s = c('WebStorage').getSessionStorage();
            if (s) q.session_storage = j(s);
            var t = !c('isEmpty')(q),
                u = Date.now();
            q.logtime = u - p;
            if (t) {
                var v = c('XWebStorageLoggingAsyncController').getURIBuilder().getURI();
                new(c('AsyncRequest'))(v).setData(q).setHandler(function (w) {
                    var x = w.getPayload();
                    if (x.keys) x.keys = x.keys.map(c('StringTransformations').unicodeUnescape);
                    k(x);
                }).send();
            }
        },
        cleanOnLogout: function o(p) {
            if (p) l(p);
            var q = c('WebStorage').getSessionStorage();
            if (q) q.clear();
        },
        _getLocalStorageKeys: function o() {
            var p = c('WebStorage').getLocalStorage();
            return p ? Object.keys(p) : [];
        }
    };
    f.exports = n;
}), null);
__d('ReactSpeedHelper', ['LogBuffer', 'ReactDOM'], (function a(b, c, d, e, f, g) {
    var h = {
        enableRenderMeasurements: function i() {
            if (!c('ReactDOM').enableRenderMeasurements) return;
            c('ReactDOM').enableRenderMeasurements();
        },
        getMetrics: function i(j, k) {
            return c('LogBuffer').read('react_speed').filter(function (l) {
                return (j == null || l.begin >= j) && (k == null || l.end <= k);
            });
        }
    };
    f.exports = h;
}), null);
__d('ScriptPathLogger', ['Banzai', 'CurrentUser', 'ScriptPath', 'TimeSpentPageTransitionCause', 'URI', 'isInIframe'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 'script_path_change',
        i = {
            scriptPath: null,
            categoryToken: null,
            extraData: {}
        },
        j = false,
        k = 'imp_id';

    function l(v) {
        var w = c('URI').getNextURI ? c('URI').getNextURI() : new(c('URI'))(window.location.href),
            x = w.getQueryData(),
            y = w.getPath();
        if (y.endsWith('/')) y = y.substr(0, y.length - 1);
        var z = m(y, x);
        if (z) {
            v.content_id = z;
            return;
        }
        var aa = n(y);
        if (aa !== '') {
            v.dest_topic_feed = aa;
            return;
        }
        if (o(y)) {
            var ba = x.queue_id;
            if (ba) v.dest_srt_queue_id = ba;
            return;
        }
    }

    function m(v, w) {
        if (w.story_fbid) return w.story_fbid;
        if (w.fbid) return w.fbid;
        if (w.view === 'permalink' && w.id) return w.id;
        var x = /\/(posts|videos|notes|groups\/.*\/permalink)\//,
            y = /^[0-9]+$/;
        if (x.test(v)) {
            var z = v.split('/'),
                aa = z[z.length - 1];
            if (y.test(aa)) return aa;
        }
        return '';
    }

    function n(v) {
        if (!v || v.search('/feed/topics/') == -1) return '';
        var w = v.split('/');
        return w[w.length - 1];
    }

    function o(v) {
        return !!v && v.search('/intern/review/') !== -1;
    }

    function p(v, w, x, y) {
        if (!j || c('isInIframe')()) return;
        var z = c('CurrentUser').isLoggedIn(),
            aa = z ? c('Banzai').VITAL : c('Banzai').BASIC;
        if (z) {
            y = y || {};
            y.via_banzai_vital = '1';
        }
        var ba = {
                source_path: v.scriptPath,
                source_token: v.categoryToken,
                dest_path: w.scriptPath,
                dest_token: w.categoryToken,
                impression_id: w.extraData ? w.extraData.imp_id : null,
                cause: x
            },
            ca = x === c('TimeSpentPageTransitionCause').PAGE_UNLOAD;
        if (!ca) l(ba);
        if (y != null) {
            var da = y,
                ea = da.snowlift_content_id;
            if (!ca && ea != null) {
                ba.content_id = ea;
                delete y.snowlift_content_id;
            }
            ba.extra_data = y;
        }
        if (v.scriptPath === null) ba.referrer = document.referrer;
        var fa = c('ScriptPath').getClickPointInfo();
        if (fa) ba.click_point_info = fa;
        if (v.extraData)
            for (var ga in v.extraData)
                if (ga != k) ba['source_' + ga] = v.extraData[ga];
        if (w.extraData)
            for (var ha in w.extraData)
                if (ha != k) ba['dest_' + ha] = w.extraData[ha];
        if (v.topViewEndpoint) ba.source_endpoint = v.topViewEndpoint;
        if (w.topViewEndpoint) ba.dest_endpoint = w.topViewEndpoint;
        if (v.restored) ba.source_restored = true;
        c('Banzai').post(h, ba, aa);
        c('ScriptPath').setClickPointInfo(null);
    }

    function q() {
        p(c('ScriptPath').getSourcePageInfo() || i, c('ScriptPath').getPageInfo() || i, c('TimeSpentPageTransitionCause').PAGE_LOAD);
    }

    function r(v, w, x) {
        p(v, w, c('TimeSpentPageTransitionCause').TRANSITION, x);
    }

    function s() {
        p(c('ScriptPath').getPageInfo() || i, i, c('TimeSpentPageTransitionCause').PAGE_UNLOAD);
        c('ScriptPath').shutdown();
    }
    var t = c('ScriptPath').subscribe(function (v) {
        if (j) {
            var w = v.source,
                x = v.dest,
                y = v.cause,
                z = v.extraData;
            if (y) {
                p(w || i, x || i, y, z);
            } else if (w) {
                r(w, x || i, z);
            } else q();
        }
    });
    c('Banzai').subscribe(c('Banzai').SHUTDOWN, s);
    var u = {
        startLogging: function v() {
            j = true;
            if (c('ScriptPath').getPageInfo()) q();
        },
        stopLogging: function v() {
            j = false;
            t.remove();
        },
        BANZAI_LOGGING_ROUTE: h
    };
    f.exports = u;
}), null);
__d('sourceMetaToString', [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k;
        if (i.name) {
            k = i.name;
            if (i.module) k = i.module + '.' + k;
        } else if (i.module) k = i.module + '.<anonymous>';
        if (j && i.line) {
            k = (k ? k : '<anonymous>') + ':' + i.line;
            if (i.column) k += ':' + i.column;
        }
        return k;
    }
    f.exports = h;
}), null);
__d('NavigationTimingHelper', ['NavigationMetricsEnumJS', 'forEachObject', 'performance'], (function a(b, c, d, e, f, g) {
    function h(j, k) {
        var l = {};
        c('forEachObject')(c('NavigationMetricsEnumJS'), function (m) {
            var n = k[m];
            if (n) l[m] = n + j;
        });
        return l;
    }
    var i = {
        getAsyncRequestTimings: function j(k) {
            if (!k || !c('performance').timing || !c('performance').getEntriesByName) return undefined;
            var l = c('performance').getEntriesByName(k);
            if (l.length === 0) return undefined;
            return h(c('performance').timing.navigationStart, l[0]);
        },
        getNavTimings: function j() {
            if (!c('performance').timing) return undefined;
            return h(0, c('performance').timing);
        }
    };
    f.exports = i;
}), null);
__d('ResourceTimingBootloaderHelper', ['Bootloader', 'ErrorUtils', 'ImageTimingHelper', 'Map', 'ResourceTimingMetricsEnumJS', 'ResourceTimingsStore', 'ResourceTypes', 'Set', 'URI', 'forEachObject', 'isEmpty', 'performance'], (function a(b, c, d, e, f, g) {
    var h = 500,
        i = [],
        j = {},
        k = {},
        l = {},
        m = ['.mp4', '.m4v', '.mpd', 'm4a'],
        n = new(c('Set'))(['bootload', 'js_exec', 'start_bootload', 'tag_bootload']);

    function o(x) {
        for (var y = m, z = Array.isArray(y), aa = 0, y = z ? y : y[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var ba;
            if (z) {
                if (aa >= y.length) break;
                ba = y[aa++];
            } else {
                aa = y.next();
                if (aa.done) break;
                ba = aa.value;
            }
            var ca = ba;
            if (x.endsWith(ca)) return true;
        }
        return false;
    }

    function p(x) {
        var y = new(c('Map'))();
        c('ResourceTimingsStore').getMapFor(x).forEach(function (z) {
            if (z.requestSent != null) {
                var aa = y.get(z.uri);
                if (aa != null) {
                    aa.push(z);
                } else y.set(z.uri, [z]);
            }
        });
        y.forEach(function (z) {
            return z.sort(function (aa, ba) {
                return aa.requestSent - ba.requestSent;
            });
        });
        return y;
    }

    function q(x, y, z, aa) {
        var ba = x.get(y);
        if (ba != null)
            for (var ca = 0; ca < ba.length; ca++) {
                var da = ba[ca],
                    ea = da.requestSent,
                    fa = da.responseReceived;
                if ((z == null || ea != null && ea <= z) && (aa == null || fa != null && fa >= aa)) return ba.splice(ca, ca + 1)[0];
            }
        return null;
    }

    function r(x, y, z, aa, ba, ca, da) {
        if (!c('performance').timing || !c('performance').getEntriesByType) return;
        var ea = {},
            fa = c('performance').timing.navigationStart;
        if (z) ea = c('ImageTimingHelper').getImageTimings(aa).sort(function (mb, nb) {
            return mb.ts - nb.ts;
        }).reduce(function (mb, nb) {
            if (mb[nb.uri]) return mb;
            mb[nb.uri] = nb.pagelet;
            return mb;
        }, {});
        var ga = Array.from(c('performance').getEntriesByType('resource')),
            ha = ga.filter(function (mb) {
                return mb.duration >= 0 && mb.startTime != null && mb.startTime + fa > y && (ba == null || mb.responseEnd == null || mb.responseEnd + fa < ba);
            });
        ha.sort(function (mb, nb) {
            return mb.startTime - nb.startTime;
        });
        var ia = 0,
            ja = 0,
            ka = 0,
            la = 0,
            ma = p(c('ResourceTypes').XHR),
            na = p(c('ResourceTypes').CSS),
            oa = p(c('ResourceTypes').JS);
        for (var pa = 0; pa < ha.length; pa++) {
            var qa = ha[pa],
                ra = '',
                sa = '',
                ta = '',
                ua = void 0,
                va = qa.initiatorType;
            switch (va) {
                case 'css':
                case 'link':
                case 'script':
                    var wa = c('ResourceTimingsStore').parseMakeHasteURL(qa.name);
                    if (!wa) continue;
                    var xa = wa[0],
                        ya = wa[1];
                    if ((ya === 'css' || ya === 'js') && da) {
                        var za = ya === 'css' ? na : oa;
                        ua = q(za, qa.name, qa.startTime + fa, qa.responseEnd + fa);
                        if (ua != null) {
                            sa = ya;
                            ra = ua.uid;
                            break;
                        }
                    }
                    if (ya === 'css' || ya === 'js') {
                        sa = ya;
                        var ab = l[qa.name] || ja++;
                        ra = ab + '_' + xa;
                    } else {
                        var bb = u(qa.name);
                        ta = bb[0];
                        sa = bb[1];
                        ra = ia++ + '_' + ta;
                    }
                    break;
                case 'img':
                    ra = ia++ + '_' + s(qa.name);
                    sa = 'img';
                    break;
                case 'iframe':
                    ra = ka++ + '_' + s(qa.name) + t(qa.name);
                    sa = 'iframe';
                    break;
                case 'xmlhttprequest':
                    if (ca) {
                        var cb = s(qa.name),
                            db = t(qa.name);
                        if (o(db)) {
                            ra = la++ + '_' + cb + db;
                            sa = 'video';
                            break;
                        } else {
                            ua = q(ma, qa.name, qa.startTime + fa, qa.responseEnd + fa);
                            if (ua != null) {
                                sa = c('ResourceTypes').XHR;
                                ra = ua.uid;
                                break;
                            }
                        }
                    }
                default:
                    continue;
            }
            var eb = {},
                fb = Object.keys(c('ResourceTimingMetricsEnumJS'));
            for (var gb = 0; gb < fb.length; gb++) {
                var hb = c('ResourceTimingMetricsEnumJS')[fb[gb]],
                    ib = qa[hb];
                if (ib) eb[hb] = ib + c('performance').timing.navigationStart;
            }
            if (ua != null) {
                var jb = ua,
                    kb = jb.requestSent,
                    lb = jb.responseReceived;
                if (y != null && kb != null && kb < y || ba != null && lb != null && lb > ba) continue;
                eb.requestSent = kb;
                eb.responseReceived = lb;
            }
            eb.type = sa;
            eb.desc = ra;
            if (sa == 'img' && Object.prototype.hasOwnProperty.call(ea, qa.name)) eb.pagelet = ea[qa.name];
            eb.transferSize = qa.transferSize;
            eb.encodedBodySize = qa.encodedBodySize;
            if (x[qa.name] == undefined) x[qa.name] = [];
            x[qa.name].push(eb);
        }
    }

    function s(x) {
        var y = new(c('URI'))(x).getDomain();
        return y;
    }

    function t(x) {
        var y = new(c('URI'))(x).getPath();
        return y;
    }

    function u(x) {
        return [s(x), 'img'];
    }

    function v(x) {
        var y = Object.keys(x).filter(function (aa) {
            return aa.startsWith('start_bootload/');
        }).sort(function (aa, ba) {
            return x[aa] - x[ba];
        }).map(function (aa) {
            return aa.substring(aa.indexOf('/') + 1);
        });
        y.forEach(function (aa) {
            return n.forEach(function (ba) {
                var ca = ba + '/' + aa;
                if (x[ca] != null) j[ca] = x[ca];
            });
        });
        i = i.concat(y);
        if (i.length > h) {
            var z = i.splice(0, i.length - h);
            z.forEach(function (aa) {
                return n.forEach(function (ba) {
                    if (j[ba + '/' + aa]) delete j[ba + '/' + aa];
                });
            });
        }
    }
    var w = {
        addPastBootloaderMetricsToResourceTimings: function x() {
            var y = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0],
                z = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                aa = c('Bootloader').getURLToHashMap();
            c('forEachObject')(y, function (ba, ca) {
                var da = aa[ca];
                if (!da) return;
                var ea = new(c('Map'))();
                ea.set('bootloader_hash', da);
                n.forEach(function (fa) {
                    var ga = fa + '/' + da,
                        ha = z[ga] || j[ga];
                    if (ha != null) ea.set(fa, ha);
                });
                if (ea.size > 0) ba.forEach(function (fa) {
                    if (fa.requestSent || fa.responseReceived) return;
                    ea.forEach(function (ga, ha) {
                        return fa[ha] = ga;
                    });
                });
            });
        },
        mergeBootloaderMetricsAndResourceTimings: function x() {
            var y = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0],
                z = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                aa = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
            if (c('isEmpty')(l)) l = c('Bootloader').getURLToHashMap();
            var ba = new(c('Map'))();
            c('forEachObject')(l, function (da, ea) {
                ba.set(da, ea);
            });
            var ca = [];
            c('forEachObject')(z, function (da, ea) {
                var fa = ea.indexOf('/');
                if (fa === -1) return;
                var ga = ea.substring(0, fa);
                if (!n.has(ga)) return;
                ca.push(ea);
                var ha = ea.substring(fa + 1),
                    ia = ba.get(ha);
                if (!ia) {
                    ia = ha;
                    ha = l[ia];
                    if (!ha) return;
                }
                if (ia.startsWith('data:')) ia = 'inlined resource: ' + ha;
                if (y[ia] == null) y[ia] = [{}];
                y[ia].forEach(function (ja) {
                    ja.bootloader_hash = ha;
                    ja[ga] = da;
                });
            });
            if (!aa) {
                v(z);
                ca.forEach(function (da) {
                    return delete z[da];
                });
            }
            return y;
        },
        getLastTTIAndE2EImageResponseEnds: function x(y, z, aa) {
            var ba = {
                TTI: y,
                E2E: z
            };
            if (!c('performance').timing) return ba;
            var ca = aa.filter(function (fa) {
                    return fa.ts <= y;
                }).map(function (fa) {
                    return fa.uri;
                }).reduce(function (fa, ga) {
                    fa[ga] = true;
                    return fa;
                }, {}),
                da = aa.map(function (fa) {
                    return fa.uri;
                }).reduce(function (fa, ga) {
                    fa[ga] = true;
                    return fa;
                }, {});
            for (var ea in k) k[ea].forEach(function (fa) {
                if (fa.type === 'img') {
                    if (ca[ea]) ba.TTI = Math.max(ba.TTI, fa.responseEnd);
                    if (da[ea]) ba.E2E = Math.max(ba.E2E, fa.responseEnd);
                }
            });
            return ba;
        },
        getMetrics: function x(y, z, aa, ba, ca, da) {
            k = {};
            if (c('isEmpty')(l)) l = c('Bootloader').getURLToHashMap();
            r(k, y, z, aa, ba, ca, da);
            return k;
        }
    };
    f.exports = w;
}), null);
__d('TimeSliceHelper', ['LogBuffer', 'Map', 'ProfilingCounters', 'ReactSpeedHelper', 'sourceMetaToString'], (function a(b, c, d, e, f, g) {
    var h = function o(p, q) {
            return Math.round((p - q) * 1000);
        },
        i = {
            counterFunction: function o(p) {
                return p.getNestedTotals();
            }
        };

    function j(o, p, q) {
        var r = p.counterFunction,
            s = void 0;
        if (q.guard) {
            var t = c('sourceMetaToString')(q),
                u = q.guard.toString();
            s = t ? u + ' at ' + t : u;
        } else s = q.desc;
        var v = q.counters != null ? r(q.counters) : null,
            w = {
                begin: q.begin,
                end: q.end,
                name: s,
                id: q.id,
                counters: v,
                isEdgeContinuation: q.isEdgeContinuation
            };
        if (q.parentID && q.parentID !== q.id) w.parentID = q.parentID;
        o.push(w);
    }

    function k(o, p, q) {
        var r = p.counterFunction,
            s = {
                begin: q.begin,
                end: q.end,
                name: 'JS[' + q.count + ']',
                counters: r(c('ProfilingCounters').wrapInSingleContext(q.contextsToBeMerged))
            };
        o.push(s);
    }

    function l(o, p) {
        var q = p.indirectParentID,
            r = p.id,
            s = p.isEdgeContinuation;
        if (q != null) {
            var t = o.get(q),
                u = void 0;
            s = s;
            if (t != null) {
                u = {
                    indirectParentID: t.indirectParentID,
                    isEdgeContinuation: s && t.isEdgeContinuation
                };
            } else u = {
                indirectParentID: q,
                isEdgeContinuation: s
            };
            o.set(r, u);
        }
    }

    function m(o, p) {
        var q = p.indirectParentID,
            r = p.isEdgeContinuation,
            s = p.id;
        if (q != null && q !== s) {
            var t = o.get(q);
            if (t != null) {
                q = t.indirectParentID;
                r = t.isEdgeContinuation && r;
            }
            return babelHelpers['extends']({}, p, {
                parentID: q,
                isEdgeContinuation: r
            });
        }
        return p;
    }
    var n = {
        formatMetricsForTransport: function o(p) {
            var q = [],
                r = [],
                s = [],
                t = new(c('Map'))(),
                u = new(c('Map'))(),
                v = 0,
                w = function y(z, aa, ba) {
                    var ca = void 0;
                    if (aa.has(z)) {
                        ca = aa.get(z);
                    } else {
                        ca = ba.length;
                        aa.set(z, ca);
                        ba.push(z);
                    }
                    return ca;
                },
                x = [];
            if (p != null) p.forEach(function (y) {
                var z = y.begin,
                    aa = y.end,
                    ba = y.name,
                    ca = y.id,
                    da = y.counters,
                    ea = y.parentID,
                    fa = y.isEdgeContinuation,
                    ga = h(z, v),
                    ha = h(aa, z);
                v = aa;
                var ia = w(ba, t, q),
                    ja = [ga, ha, ia],
                    ka = da || {},
                    la = Object.keys(ka).filter(function (pa) {
                        return ka[pa] !== 0;
                    }).sort(),
                    ma = void 0;
                if (la.length > 0) {
                    var na = la.join(),
                        oa = w(na, u, s);
                    ma = la.map(function (pa) {
                        return ka[pa];
                    });
                    ma.unshift(oa);
                } else ma = [];
                if (ca) ja.push(ca);
                if (ea) {
                    ja.push(ea);
                    ja.push(fa);
                }
                x.push(ja);
                r.push(ma);
            });
            return {
                version: 'compact',
                items: x,
                names: q,
                counters: r,
                counterSchemas: s
            };
        },
        getMetrics: function o(p, q, r, s, t) {
            var u;
            if (t == null) {
                t = i;
            } else t = babelHelpers['extends']({}, i, t);
            var v = [],
                w = j.bind(undefined, v, t),
                x = k.bind(undefined, v, t),
                y = c('LogBuffer').read('time_slice'),
                z = c('LogBuffer').read('time_slice_heartbeat');
            if (y.length > 0)(function () {
                var ja = Math.max.apply(null, y.map(function (ka) {
                    return ka.id;
                }));
                z.forEach(function (ka) {
                    return ka.id += ja;
                });
            })();
            var aa = c('ReactSpeedHelper').getMetrics().map(function (ja) {
                    return babelHelpers['extends']({}, ja, {
                        desc: 'React[' + ja.name + ']'
                    });
                }),
                ba = y.concat(z, aa),
                ca = void 0,
                da = new(c('Map'))(),
                ea = l.bind(undefined, da),
                fa = m.bind(undefined, da),
                ga = function ja() {
                    if (ca)
                        if (ca.count > 1) {
                            x(ca);
                        } else w(fa(ca.first));
                    ca = null;
                },
                ha = ba.sort(function (ja, ka) {
                    if (ja.begin !== ka.begin) {
                        return ja.begin - ka.begin;
                    } else if (ja.end !== ka.end) {
                        return ja.end - ka.end;
                    } else return 0;
                }).filter(function (ja) {
                    return (p == null || ja.end >= p) && (q == null || ja.begin <= q);
                });
            if (ha.length > 0 && !ha[0].representsExecution && ha[0].begin < p) {
                var ia = ha[0];
                ha[0] = babelHelpers['extends']({}, ia, {
                    begin: p
                });
            }
            ha.forEach(function (ja) {
                if (ja.end - ja.begin < r) {
                    if (ca && ja.begin - ca.end < s) {
                        ca.end = ja.end;
                        ca.count++;
                        if (ja.counters != null) ca.contextsToBeMerged.push(ja.counters);
                        if (ca.count === 2) ea(ca.first);
                        ea(ja);
                    } else {
                        ga();
                        ca = {
                            begin: ja.begin,
                            end: ja.end,
                            count: 1,
                            first: ja,
                            contextsToBeMerged: []
                        };
                    }
                } else {
                    ga();
                    w(fa(ja));
                }
            });
            ga();
            return v;
        }
    };
    f.exports = n;
}), null);
__d('PerfXFlusher', ['invariant', 'Banzai'], (function a(b, c, d, e, f, g, h) {
    var i = 'perfx_custom_logger_endpoint',
        j = ['perfx_page', 'perfx_page_type', 'lid'];

    function k(m) {
        j.forEach(function (n) {
            return h(n in m, 'PerfXFlusher: Field "%s" missing in the PerfX payload', n);
        });
    }
    var l = {
        flush: function m(n) {
            k(n);
            c('Banzai').post(i, n, {
                signal: true
            });
        },
        registerToSendWithBeacon: function m(n) {
            c('Banzai').registerToSendWithBeacon(i, n);
        }
    };
    f.exports = l;
}), null);
__d("pageLoadedViaSWCache", [], (function a(b, c, d, e, f, g) {
    function h() {
        return self.__SW_CACHE__ === 1;
    }
    f.exports = h;
}), null);
__d('PerfXLogger', ['DataAttributeUtils', 'NavigationMetrics', 'NavigationTimingHelper', 'PerfXFlusher', 'Set', 'forEachObject', 'pageLoadedViaSWCache', 'performanceAbsoluteNow', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {},
        j = 65 * 1000,
        k = ['e2e', 'tti', 'all_pagelets_displayed', 'all_pagelets_loaded'],
        l = {},
        m = {
            _listenersSetUp: false,
            _setupListeners: function n() {
                if (this._listenersSetUp) return;
                this._subscribeToNavigationMetrics();
                c('PerfXFlusher').registerToSendWithBeacon(function () {
                    var o = [];
                    c('forEachObject')(h, function (p, q) {
                        if (!h[q].sent) {
                            var r = this.getPayload(q, 'unload fired');
                            if (r != null) o.push(r);
                        }
                    }.bind(this));
                    h = {};
                    return o;
                }.bind(this));
                this._listenersSetUp = true;
            },
            _init: function n(o) {
                var p = o.lid;
                if (p == null) return;
                var q = i[p] || [];
                delete i[p];
                if (o.sw_controlled_tags) {
                    if (navigator.serviceWorker && navigator.serviceWorker.controller)
                        for (var r = 0; r < o.sw_controlled_tags.length; r++) q.push(o.sw_controlled_tags[r]);
                    delete o.sw_controlled_tags;
                }
                h[p] = babelHelpers['extends']({
                    tags: new(c('Set'))(q),
                    sent: false
                }, o);
                this._registerTimeoutSendback(p);
                this._setupListeners();
            },
            initWithNavigationMetricsLID: function n(o, p) {
                var q = c('NavigationMetrics').getFullPageLoadLid();
                if (!q) return;
                this._init(babelHelpers['extends']({}, p, {
                    lid: q
                }));
                if (o && o.always)
                    for (var r = 0; r < o.always.length; r++) m.addTag(q, o.always[r]);
                if (o && o.swCache && c('pageLoadedViaSWCache')())
                    for (var s = 0; s < o.swCache.length; s++) m.addTag(q, o.swCache[s]);
            },
            init: function n(o, p) {
                if (p != null && o.lid != null) l[o.lid] = p;
                this._init(o);
            },
            addTag: function n(o, p) {
                var q = h[o];
                if (q) {
                    q.tags.add(p);
                    return;
                }
                if (!i[o]) i[o] = [];
                i[o].push(p);
            },
            addTagWithNavigationMetricsLID: function n(o) {
                var p = c('NavigationMetrics').getFullPageLoadLid();
                if (!p) return;
                m.addTag(p, o);
            },
            _registerTimeoutSendback: function n(o) {
                var p = this._getFetchStart(o),
                    q = j;
                if (p != null) q -= c('performanceAbsoluteNow')() - p;
                c('setTimeoutAcrossTransitions')(function () {
                    return this._uploadPayload(o, 'sendback time out');
                }.bind(this), q);
            },
            _subscribeToNavigationMetrics: function n() {
                c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.EVENT_OCCURRED, function (o, p) {
                    if (!(o in h)) return;
                    if (k.includes(p.event) && Object.prototype.hasOwnProperty.call(p, 'timestamp') && p.timestamp != null) {
                        h[o][p.event] = p.timestamp;
                        if (p.visibilityState) h[o][p.event + '_page_visibility'] = p.visibilityState;
                    }
                });
                c('NavigationMetrics').addRetroactiveListener(c('NavigationMetrics').Events.NAVIGATION_DONE, function (o, p) {
                    var q = p.serverLID;
                    if (!(q in h)) return;
                    k.forEach(function (event) {
                        if (Object.prototype.hasOwnProperty.call(p, event) && p[event] != null) h[q][event] = p[event];
                    });
                    this._uploadPayload(q);
                }.bind(this));
            },
            _getPayloadWithOffset: function n(o, p, q) {
                var r = h[o];
                if (r == null) return null;
                var s = Object.assign({}, r),
                    t = document.querySelector('[id^="hyperfeed_story_id"]');
                if (t) {
                    var u = JSON.parse(c('DataAttributeUtils').getDataFt(t));
                    if (u) s.mf_query_id = u.qid;
                }
                s.tags = Array.from(r.tags);
                this._adjustValues(s, p);
                s.fetch_start = p;
                if (s.perfx_page_type === 'normal') {
                    var v = c('NavigationTimingHelper').getNavTimings();
                    if (v != null && v.navigationStart != null) s.nav_to_fetch = p - v.navigationStart;
                }
                if (q != null) s.sendback_reason = q;
                delete s.sent;
                return s;
            },
            _uploadPayload: function n(o, p) {
                if (h[o] != null && !h[o].sent) {
                    var q = this.getPayload(o, p);
                    if (q != null) {
                        c('PerfXFlusher').flush(q);
                        h[o].sent = true;
                    }
                }
            },
            getPayload: function n(o, p) {
                return this._getPayloadWithOffset(o, this._getFetchStart(o), p);
            },
            _getFetchStart: function n(o) {
                if (!(o in h)) return null;
                var p = void 0,
                    q = h[o].perfx_page_type;
                if (q == 'quickling') {
                    if (!(o in l)) {
                        return null;
                    } else p = c('NavigationTimingHelper').getAsyncRequestTimings(l[o]);
                } else p = c('NavigationTimingHelper').getNavTimings();
                if (!p || !p.fetchStart) return null;
                return p.fetchStart;
            },
            _adjustValues: function n(o, p) {
                k.forEach(function (q) {
                    if (Object.prototype.hasOwnProperty.call(o, q)) o[q] -= p;
                });
            }
        };
    f.exports = m;
}), null);