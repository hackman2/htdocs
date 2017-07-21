if (self.CavalryLogger) {
    CavalryLogger.start_js(["\/8vNF"]);
}

__d('DesktopHscrollUnitEventConstants', [], (function a(b, c, d, e, f, g) {
    f.exports = {
        HSCROLL_ITEM_INSERTED_EVENT: 'DesktopHScrollUnit/itemInserted',
        HSCROLL_ITEM_SHOWN_EVENT: 'DesktopHScrollUnit/itemShown',
        HSCROLL_ITEM_HIDE_EVENT: 'DesktopHScrollUnit/HideIndividualItem',
        HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT: 'DesktopHScrollUnit/scrollItemBeforeXout',
        HSCROLL_ITEM_UNHIDE_EVENT: 'DesktopHScrollUnit/unhideIndividualItem',
        HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN: 'logLastAdXout',
        HSCROLL_PAGER_ITEM_HIDE_EVENT: 'onXoutIndividualItem'
    };
}), null);
__d('BrowseClientEventLogger', ['Banzai', 'SearchLoggingOptions'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 'browse_client_event_session',
        i = 'search_www_click_error',
        j = '21.',
        k = {
            logData: function l(event, m, n) {
                var o = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
                if (!event || !m) return;
                o.event = event;
                o.client_time = Math.floor(Date.now());
                o.client_time_2 = Date.now() / 1000;
                o.session_id = m;
                o.vertical = n;
                this.processedSessions = this.processedSessions || [];
                if (this.processedSessions.indexOf(m) !== -1) return;
                var p = o.event === 'click' && o.clicked_href != null && c('SearchLoggingOptions').signalLinkClicks;
                c('Banzai').post(h, [o], {
                    delay: 0,
                    retry: true,
                    signal: p
                });
            },
            logClick: function l(m) {
                m.gt.event = 'click';
                this.maybeLogVisiblityEvent(m, true);
            },
            maybeLogClientViewEvent: function l(m) {
                m.event = 'client_view';
                this.maybeLogVisiblityEvent(m);
            },
            maybeLogVisiblityEvent: function l(m) {
                var n = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1],
                    o = null;
                if (n) {
                    o = m;
                    m = m.gt;
                }
                if (!m || !m.xt || m.xt.indexOf(j) !== 0) {
                    if (n) c('Banzai').post(i, [o], {
                        delay: 0,
                        retry: true
                    });
                    return;
                }
                var p = JSON.parse(m.xt.substring(3));
                if (n) {
                    p.click_type = m.click_type;
                    p.tn = m.tn;
                    p.clicked_href = m.clicked_href;
                }
                var event = m.event;
                if (p.display_style === 'context_hscroll' && (event === 'client_view' || event === 'vpvd' || event === 'visible' || event === 'hidden')) return;
                if (event === 'vpvd') {
                    if (!m.ft) return;
                    p.vpvd_time = m.ft.vpvd_time_delta;
                }
                this.logData(event, p.session_id, p.vertical, p);
            },
            logImpression: function l(m) {
                m.event = 'impression';
                this.maybeLogVisiblityEvent(m);
            }
        };
    f.exports = k;
}), null);
__d('LinkshimAsyncLink', ['$', 'AsyncSignal', 'DOM', 'UserAgent_DEPRECATED', 'LinkshimHandlerConfig'], (function a(b, c, d, e, f, g) {
    var h = {
        swap: function i(j, k) {
            var l = c('UserAgent_DEPRECATED').ie() <= 8;
            if (l) {
                var m = c('DOM').create('wbr', {}, null);
                c('DOM').appendContent(j, m);
            }
            j.href = k;
            if (l) c('DOM').remove(m);
        },
        referrer_log: function i(j, k, l) {
            var m = c('$')('meta_referrer');
            m.content = c('LinkshimHandlerConfig').switched_meta_referrer_policy;
            h.swap(j, k);
            setTimeout(function () {
                m.content = c('LinkshimHandlerConfig').default_meta_referrer_policy;
                new(c('AsyncSignal'))(l, {}).send();
            }, 100);
        }
    };
    f.exports = h;
}), null);
__d('legacy:dom-asynclinkshim', ['LinkshimAsyncLink'], (function a(b, c, d, e, f, g) {
    b.LinkshimAsyncLink = c('LinkshimAsyncLink');
}), 3);
__d('PageHooks', ['Arbiter', 'ErrorUtils', 'InitialJSLoader', 'PageEvents'], (function a(b, c, d, e, f, g) {
    var h = {
        DOMREADY_HOOK: 'domreadyhooks',
        ONLOAD_HOOK: 'onloadhooks'
    };

    function i() {
        var p = b.CavalryLogger;
        if (!window.domready && p) p.getInstance().setTimeStamp('t_prehooks');
        l(o.DOMREADY_HOOK);
        if (!window.domready && p) p.getInstance().setTimeStamp('t_hooks');
        window.domready = true;
        c('Arbiter').inform('uipage_onload', true, c('Arbiter').BEHAVIOR_STATE);
    }

    function j() {
        l(o.ONLOAD_HOOK);
        window.loaded = true;
    }

    function k(p, q) {
        return c('ErrorUtils').applyWithGuard(p, null, null, function (r) {
            r.event_type = q;
            r.category = 'runhook';
        }, 'PageHooks:' + q);
    }

    function l(p) {
        var q = p == 'onbeforeleavehooks' || p == 'onbeforeunloadhooks';
        do {
            var r = window[p];
            if (!r) break;
            if (!q) window[p] = null;
            for (var s = 0; s < r.length; s++) {
                var t = k(r[s], p);
                if (q && t) return t;
            }
        } while (!q && window[p]);
    }

    function m() {
        if (!window.domready) {
            window.domready = true;
            l('onloadhooks');
        }
        if (!window.loaded) {
            window.loaded = true;
            l('onafterloadhooks');
        }
    }

    function n() {
        c('Arbiter').registerCallback(i, [c('PageEvents').BIGPIPE_DOMREADY, c('InitialJSLoader').INITIAL_JS_READY]);
        c('Arbiter').registerCallback(j, [c('PageEvents').BIGPIPE_DOMREADY, c('PageEvents').BIGPIPE_ONLOAD, c('InitialJSLoader').INITIAL_JS_READY]);
        c('Arbiter').subscribe(c('PageEvents').NATIVE_ONBEFOREUNLOAD, function (p, q) {
            q.warn = l('onbeforeleavehooks') || l('onbeforeunloadhooks');
            if (!q.warn) {
                window.domready = false;
                window.loaded = false;
            }
        }, c('Arbiter').SUBSCRIBE_NEW);
        c('Arbiter').subscribe(c('PageEvents').NATIVE_ONUNLOAD, function (p, q) {
            l('onunloadhooks');
            l('onafterunloadhooks');
        }, c('Arbiter').SUBSCRIBE_NEW);
    }
    var o = babelHelpers['extends']({
        _domreadyHook: i,
        _onloadHook: j,
        runHook: k,
        runHooks: l,
        keepWindowSetAsLoaded: m
    }, h);
    n();
    b.PageHooks = f.exports = o;
}), null);
__d('legacy:onload-action', ['PageHooks'], (function a(b, c, d, e, f, g) {
    b._domreadyHook = c('PageHooks')._domreadyHook;
    b._onloadHook = c('PageHooks')._onloadHook;
    b.runHook = c('PageHooks').runHook;
    b.runHooks = c('PageHooks').runHooks;
    b.keep_window_set_as_loaded = c('PageHooks').keepWindowSetAsLoaded;
}), 3);
__d('DOMControl', ['DataStore', '$'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this.root = c('$')(i);
        this.updating = false;
        c('DataStore').set(i, 'DOMControl', this);
    }
    h.prototype.getRoot = function () {
        'use strict';
        return this.root;
    };
    h.prototype.beginUpdate = function () {
        'use strict';
        if (this.updating) return false;
        this.updating = true;
        return true;
    };
    h.prototype.endUpdate = function () {
        'use strict';
        this.updating = false;
    };
    h.prototype.update = function (i) {
        'use strict';
        if (!this.beginUpdate()) return this;
        this.onupdate(i);
        this.endUpdate();
    };
    h.prototype.onupdate = function (i) {
        'use strict';
    };
    h.getInstance = function (i) {
        'use strict';
        return c('DataStore').get(i, 'DOMControl');
    };
    f.exports = h;
}), null);
__d('Input', ['CSS', 'DOMQuery', 'DOMControl'], (function a(b, c, d, e, f, g) {
    var h = {
        isWhiteSpaceOnly: function i(j) {
            return !/\S/.test(j || '');
        },
        isEmpty: function i(j) {
            return h.isWhiteSpaceOnly(j.value);
        },
        getValue: function i(j) {
            return h.isEmpty(j) ? '' : j.value;
        },
        getValueRaw: function i(j) {
            return j.value;
        },
        setValue: function i(j, k) {
            j.value = k || '';
            var l = c('DOMControl').getInstance(j);
            l && l.resetHeight && l.resetHeight();
        },
        setPlaceholder: function i(j, k) {
            j.setAttribute('aria-label', k);
            j.setAttribute('placeholder', k);
        },
        reset: function i(j) {
            j.value = '';
            j.style.height = '';
        },
        setSubmitOnEnter: function i(j, k) {
            c('CSS').conditionClass(j, 'enter_submit', k);
        },
        getSubmitOnEnter: function i(j) {
            return c('CSS').hasClass(j, 'enter_submit');
        },
        setMaxLength: function i(j, k) {
            if (k > 0) {
                j.setAttribute('maxlength', k);
            } else j.removeAttribute('maxlength');
        }
    };
    f.exports = h;
}), null);
__d('FlipDirection', ['DOM', 'Input', 'Style'], (function a(b, c, d, e, f, g) {
    var h = {
        setDirection: function i(j) {
            var k = c('DOM').isNodeOfType(j, 'input') && j.type == 'text',
                l = c('DOM').isNodeOfType(j, 'textarea');
            if (!(k || l) || j.getAttribute('data-prevent-auto-flip')) return;
            var m = c('Input').getValue(j),
                n = j.style && j.style.direction;
            if (!n) {
                var o = 0,
                    p = true;
                for (var q = 0; q < m.length; q++) {
                    var r = m.charCodeAt(q);
                    if (r >= 48) {
                        if (p) {
                            p = false;
                            o++;
                        }
                        if (r >= 1470 && r <= 1920) {
                            c('Style').set(j, 'direction', 'rtl');
                            j.setAttribute('dir', 'rtl');
                            return;
                        }
                        if (o == 5) {
                            c('Style').set(j, 'direction', 'ltr');
                            j.setAttribute('dir', 'ltr');
                            return;
                        }
                    } else p = true;
                }
            } else if (m.length === 0) {
                c('Style').set(j, 'direction', '');
                j.removeAttribute('dir');
            }
        }
    };
    f.exports = h;
}), null);
__d('FlipDirectionOnKeypress', ['Event', 'FlipDirection'], (function a(b, c, d, e, f, g) {
    var h = function i(event) {
        var j = event.getTarget();
        c('FlipDirection').setDirection(j);
    };
    c('Event').listen(document.documentElement, {
        keyup: h,
        input: h
    });
}), null);
__d("ScriptPathState", ["Arbiter"], (function a(b, c, d, e, f, g) {
    var h, i, j, k, l = 100,
        m = {
            setIsUIPageletRequest: function n(o) {
                j = o;
            },
            setUserURISampleRate: function n(o) {
                k = o;
            },
            reset: function n() {
                h = null;
                i = false;
                j = false;
            },
            _shouldUpdateScriptPath: function n() {
                return i && !j;
            },
            _shouldSendURI: function n() {
                return Math.random() < k;
            },
            getParams: function n() {
                var o = {};
                if (m._shouldUpdateScriptPath()) {
                    if (m._shouldSendURI() && h !== null) o.user_uri = h.substring(0, l);
                } else o.no_script_path = 1;
                return o;
            }
        };
    c("Arbiter").subscribe("pre_page_transition", function (n, o) {
        i = true;
        h = o.to.getUnqualifiedURI().toString();
    });
    f.exports = b.ScriptPathState = m;
}), null);
__d("goOrReplace", [], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        if (k) {
            i.replace(j);
        } else if (i.href == j) {
            i.reload();
        } else i.href = j;
    }
    f.exports = h;
}), null);
__d('AjaxPipeRequest', ['Arbiter', 'AsyncRequest', 'AsyncRequestConfig', 'BigPipe', 'CSS', 'DOM', 'Env', 'PageEvents', 'PageletSet', 'PageNavigationStageLogger', 'ScriptPathState', 'URI', 'containsNode', 'ge', 'goOrReplace', 'performance', 'performanceAbsoluteNow', 'PageletGK'], (function a(b, c, d, e, f, g) {
    var h = c('PageletGK').destroyDomAfterEventHandler,
        i, j = 0;

    function k(n, o) {
        var p = c('ge')(n);
        if (!p) return;
        if (!o) p.style.minHeight = '100px';
        var q = c('PageletSet').getPageletIDs();
        for (var r = 0; r < q.length; r++) {
            var s = q[r];
            if (c('containsNode')(p, c('ge')(s))) c('PageletSet').removePagelet(s);
        }
        c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONBEFORECLEARCANVAS, {
            canvasID: n
        });
        if (h) {
            c('Arbiter').inform('pagelet/destroy', {
                id: null,
                root: p
            });
            c('DOM').empty(p);
        } else {
            c('DOM').empty(p);
            c('Arbiter').inform('pagelet/destroy', {
                id: null,
                root: p
            });
        }
    }

    function l(n, o) {
        var p = c('ge')(n);
        if (p && !o) p.style.minHeight = '100px';
    }

    function m(n, o) {
        'use strict';
        this._uri = n;
        this._query_data = o;
        this._request = new(c('AsyncRequest'))();
        this._request.disableArtilleryTracing();
        this._canvas_id = null;
        this._allow_cross_page_transition = true;
        this._arbiter = new(c('Arbiter'))();
        this._requestID = j++;
    }
    m.prototype.setCanvasId = function (n) {
        'use strict';
        this._canvas_id = n;
        return this;
    };
    m.prototype.setURI = function (n) {
        'use strict';
        this._uri = n;
        return this;
    };
    m.prototype.setData = function (n) {
        'use strict';
        this._query_data = n;
        return this;
    };
    m.prototype.getData = function (n) {
        'use strict';
        return this._query_data;
    };
    m.prototype.setAllowCrossPageTransition = function (n) {
        'use strict';
        this._allow_cross_page_transition = n;
        return this;
    };
    m.prototype.setAppend = function (n) {
        'use strict';
        this._append = n;
        return this;
    };
    m.prototype.getAsyncRequestType = function () {
        'use strict';
        if (c('AsyncRequestConfig').useFetchStreamAjaxPipeTransport) return 'useFetchWithIframeFallback';
        return 'useIframeTransport';
    };
    m.prototype.send = function () {
        'use strict';
        this._arbiter.inform(c('PageEvents').AJAXPIPE_SEND, {
            rid: this._requestID,
            quickling: !!this._isQuickling,
            ts: c('performanceAbsoluteNow')()
        }, c('Arbiter').BEHAVIOR_PERSISTENT);
        var n = {
            ajaxpipe: 1,
            ajaxpipe_token: c('Env').ajaxpipe_token
        };
        Object.assign(n, c('ScriptPathState').getParams());
        c('ScriptPathState').reset();
        this._request.setOption(this.getAsyncRequestType(), true).setURI(this._uri).setData(Object.assign(n, this._query_data)).setPreBootloadHandler(this._preBootloadHandler.bind(this)).setInitialHandler(this._onInitialResponse.bind(this)).setHandler(this._onResponse.bind(this)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(this._allow_cross_page_transition).setAllowIrrelevantRequests(this._allowIrrelevantRequests);
        if (this._automatic) {
            this._relevantRequest = i;
        } else i = this._request;
        if (this._isQuickling) {
            var o = c('performance').clearResourceTimings || c('performance').webkitClearResourceTimings;
            if (o) o.call(c('performance'));
        }
        this._request.send();
        return this;
    };
    m.prototype._preBootloadFirstResponse = function (n) {
        'use strict';
        return false;
    };
    m.prototype._fireDomContentCallback = function () {
        'use strict';
        this._arbiter.inform(c('PageEvents').AJAXPIPE_DOMREADY, true, c('Arbiter').BEHAVIOR_STATE);
    };
    m.prototype._fireOnloadCallback = function () {
        'use strict';
        if (window.console && console.timeStamp) console.timeStamp('perf_trace {"name": "e2e",' + ' "parent": "PageEvents.AJAXPIPE_ONLOAD"}');
        this._arbiter.inform(c('PageEvents').AJAXPIPE_ONLOAD, {
            lid: this.pipe.lid,
            rid: this._requestID,
            ts: c('performanceAbsoluteNow')()
        }, c('Arbiter').BEHAVIOR_STATE);
    };
    m.prototype._isRelevant = function (n) {
        'use strict';
        return this._request == i || this._automatic && this._relevantRequest == i || this._jsNonBlock || i && i._allowIrrelevantRequests;
    };
    m.prototype._preBootloadHandler = function (n) {
        'use strict';
        var o = n.getPayload();
        if (!o || o.redirect || !this._isRelevant(n)) return false;
        var p = false;
        if (n.is_first) {
            !this._append && !this._displayCallback && k(this._canvas_id, this._constHeight);
            p = this._preBootloadFirstResponse(n);
            this.pipe = new(c('BigPipe'))({
                __sf: n.__sf,
                arbiter: this._arbiter,
                rootNodeID: this._canvas_id,
                lid: this._request.lid,
                rid: this._requestID,
                isAjax: true,
                domContentCallback: this._fireDomContentCallback.bind(this),
                onloadCallback: this._fireOnloadCallback.bind(this),
                domContentEvt: c('PageEvents').AJAXPIPE_DOMREADY,
                onloadEvt: c('PageEvents').AJAXPIPE_ONLOAD,
                jsNonBlock: this._jsNonBlock,
                automatic: this._automatic,
                displayCallback: this._displayCallback,
                allowIrrelevantRequests: this._allowIrrelevantRequests
            });
        }
        return p;
    };
    m.prototype._redirect = function (n) {
        'use strict';
        if (n.redirect) {
            if (n.force || !this.isPageActive(n.redirect)) {
                var o = ['ajaxpipe', 'ajaxpipe_token'].concat(this.getSanitizedParameters());
                c('PageNavigationStageLogger').setCookieForNavigation(n.redirect);
                c('PageNavigationStageLogger').setNote('ajaxpipe_redirect');
                c('PageNavigationStageLogger').updateCookie();
                c('goOrReplace')(window.location, new(c('URI'))(n.redirect).removeQueryData(o), true);
            } else {
                var p = b.PageTransitions;
                p.go(n.redirect, true);
            }
            return true;
        } else return false;
    };
    m.prototype.isPageActive = function (n) {
        'use strict';
        return true;
    };
    m.prototype.getSanitizedParameters = function () {
        'use strict';
        return [];
    };
    m.prototype._versionCheck = function (n) {
        'use strict';
        return true;
    };
    m.prototype._onInitialResponse = function (n) {
        'use strict';
        var o = n.getPayload();
        if (!this._isRelevant(n)) return false;
        if (!o) return true;
        if (this._redirect(o) || !this._versionCheck(o)) return false;
        return true;
    };
    m.prototype._processFirstResponse = function (n) {
        'use strict';
        var o = n.getPayload();
        if (c('ge')(this._canvas_id) && o.canvas_class != null) c('CSS').setClass(this._canvas_id, o.canvas_class);
    };
    m.prototype.setFirstResponseCallback = function (n) {
        'use strict';
        this._firstResponseCallback = n;
        return this;
    };
    m.prototype.setFirstResponseHandler = function (n) {
        'use strict';
        this._processFirstResponse = n;
        return this;
    };
    m.prototype._onResponse = function (n) {
        'use strict';
        var o = n.payload;
        if (!this._isRelevant(n)) return c('AsyncRequest').suppressOnloadToken;
        if (n.is_first) {
            this._processFirstResponse(n);
            this._firstResponseCallback && this._firstResponseCallback();
            o.provides = o.provides || [];
            o.provides.push('uipage_onload');
        }
        if (o) {
            if ('content' in o.content && this._canvas_id !== null) {
                if (this._append) o.append = this._canvas_id;
                var p = o.content.content;
                delete o.content.content;
                o.content[this._canvas_id] = p;
            }
            if (o.secondFlushPayload) {
                this.pipe.setSecondFlushPayload(o.secondFlushPayload);
            } else this.pipe.onPageletArrive(o);
        }
        if (n.is_last) l(this._canvas_id, this._constHeight);
        return c('AsyncRequest').suppressOnloadToken;
    };
    m.prototype.setNectarModuleDataSafe = function (n) {
        'use strict';
        this._request.setNectarModuleDataSafe(n);
        return this;
    };
    m.prototype.setFinallyHandler = function (n) {
        'use strict';
        this._request.setFinallyHandler(n);
        return this;
    };
    m.prototype.setErrorHandler = function (n) {
        'use strict';
        this._request.setErrorHandler(n);
        return this;
    };
    m.prototype.setTransportErrorHandler = function (n) {
        'use strict';
        this._request.setTransportErrorHandler(n);
        return this;
    };
    m.prototype.abort = function () {
        'use strict';
        this._request.abort();
        if (i == this._request) i = null;
        this._request = null;
        return this;
    };
    m.prototype.setJSNonBlock = function (n) {
        'use strict';
        this._jsNonBlock = n;
        return this;
    };
    m.prototype.setAutomatic = function (n) {
        'use strict';
        this._automatic = n;
        return this;
    };
    m.prototype.setDisplayCallback = function (n) {
        'use strict';
        this._displayCallback = n;
        return this;
    };
    m.prototype.setConstHeight = function (n) {
        'use strict';
        this._constHeight = n;
        return this;
    };
    m.prototype.setAllowIrrelevantRequests = function (n) {
        'use strict';
        this._allowIrrelevantRequests = n;
        return this;
    };
    m.prototype.getAsyncRequest = function () {
        'use strict';
        return this._request;
    };
    m.getCurrentRequest = function () {
        'use strict';
        return i;
    };
    m.setCurrentRequest = function (n) {
        'use strict';
        i = n;
    };
    f.exports = m;
}), null);
__d('ContextualThing', ['CSS', 'containsNode', 'ge', 'getOrCreateDOMID'], (function a(b, c, d, e, f, g) {
    var h = {
        register: function i(j, k) {
            j.setAttribute('data-ownerid', c('getOrCreateDOMID')(k));
        },
        containsIncludingLayers: function i(j, k) {
            var l = k;
            while (l) {
                if (c('containsNode')(j, l)) return true;
                l = h.getContext(l);
            }
            return false;
        },
        getContext: function i(j) {
            var k = j,
                l = void 0;
            while (k) {
                if (k.getAttribute && (l = k.getAttribute('data-ownerid'))) return c('ge')(l);
                k = k.parentNode;
            }
            return null;
        },
        parentByClass: function i(j, k) {
            var l = j,
                m = void 0;
            while (l && !c('CSS').hasClass(l, k))
                if (l.getAttribute && (m = l.getAttribute('data-ownerid'))) {
                    l = c('ge')(m);
                } else l = l.parentNode;
            return l;
        }
    };
    f.exports = h;
}), null);
__d("XConsentCookieController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/cookie\/consent\/", {
        pv: {
            type: "Enum",
            enumType: 0
        }
    });
}), null);
__d('DeferredCookie', ['AsyncRequest', 'Cookie', 'Env', 'Map', 'SubscriptionList', 'XConsentCookieController'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = new(c('Map'))(),
        i = {
            shouldAddDefaultListener: true,
            defaultHandler: null,
            autoFlushCookies: false,
            sentConsentToServer: false,
            callbacks: new(c('SubscriptionList'))(),
            addToQueue: function j(k, l, m, n, o, p, q) {
                if (this.autoFlushCookies) {
                    if (o) {
                        c('Cookie').setWithoutChecksIfFirstPartyContext(k, l, m, n, q);
                    } else c('Cookie').setWithoutChecks(k, l, m, n, q);
                    return;
                }
                if (h.has(k)) return;
                h.set(k, {
                    name: k,
                    value: l,
                    nMilliSecs: m,
                    path: n,
                    firstPartyOnly: o,
                    secure: q
                });
                if (p) this.addDefaultInteractionListener();
            },
            flushAllCookies: function j() {
                delete c('Env').defer_cookies;
                h.forEach(function (l, m) {
                    if (l.firstPartyOnly) {
                        c('Cookie').setWithoutChecksIfFirstPartyContext(l.name, l.value, l.nMilliSecs, l.path, l.secure);
                    } else c('Cookie').setWithoutChecks(l.name, l.value, l.nMilliSecs, l.path, l.secure);
                });
                this.callbacks.fireCallbacks();
                this.autoFlushCookies = true;
                h = new(c('Map'))();
                if (!this.sentConsentToServer) {
                    this.sentConsentToServer = true;
                    var k = c('XConsentCookieController').getURIBuilder().setEnum('pv', this.getNoticePolicyVersion()).getURI();
                    new(c('AsyncRequest'))().setURI(k).send();
                }
                this.removeDefaultInteractionListener();
            },
            getNoticePolicyVersion: function j() {
                try {
                    var k = document.getElementById('cpn-pv-link');
                    if (!k) return '1';
                    return k.getAttribute('data-pv');
                } catch (l) {
                    return '1';
                }
            },
            removeDefaultInteractionListener: function j() {
                if (this.defaultHandler) {
                    if (window.removeEventListener) {
                        window.removeEventListener('click', this.defaultHandler, true);
                    } else if (document.detachEvent) document.detachEvent('onclick', this.defaultHandler);
                    this.defaultHandler = null;
                }
            },
            addDefaultInteractionListener: function j() {
                if (this.shouldAddDefaultListener) {
                    this.shouldAddDefaultListener = false;
                    this.defaultHandler = this.baseInteractionHandler.bind(this);
                    if (window.addEventListener) {
                        window.addEventListener('click', this.defaultHandler, true);
                    } else if (document.attachEvent) document.attachEvent('onclick', this.defaultHandler);
                }
            },
            registerCallbackOnCookieFlush: function j(k) {
                if (this.autoFlushCookies) {
                    k();
                } else this.callbacks.add(k);
            },
            baseInteractionHandler: function j() {
                this.flushAllCookies();
            },
            canEmbedThirdPartyPixel: function j() {
                if (c('Env').no_cookies || c('Env').defer_cookies) return false;
                return this.autoFlushCookies || h.size === 0;
            }
        };
    f.exports = i;
}), null);
__d('Form', ['DataStore', 'DOM', 'DOMQuery', 'DTSG', 'Input', 'LSD', 'Random', 'PHPQuerySerializer', 'URI', 'getElementPosition', 'isFacebookURI', 'isNode'], (function a(b, c, d, e, f, g) {
    var h = 'FileList' in window,
        i = 'FormData' in window;

    function j(l) {
        var m = {};
        c('PHPQuerySerializer').serialize(l).split('&').forEach(function (n) {
            if (n) {
                var o = /^([^=]*)(?:=(.*))?$/.exec(n),
                    p = c('URI').decodeComponent(o[1]),
                    q = o[2] !== undefined,
                    r = q ? c('URI').decodeComponent(o[2]) : null;
                m[p] = r;
            }
        });
        return m;
    }
    var k = {
        getInputs: function l() {
            var m = arguments.length <= 0 || arguments[0] === undefined ? document : arguments[0];
            return [].concat(c('DOMQuery').scry(m, 'input'), c('DOMQuery').scry(m, 'select'), c('DOMQuery').scry(m, 'textarea'), c('DOMQuery').scry(m, 'button'));
        },
        getInputsByName: function l(m) {
            var n = {};
            k.getInputs(m).forEach(function (o) {
                var p = n[o.name];
                n[o.name] = typeof p === 'undefined' ? o : [o].concat(p);
            });
            return n;
        },
        getSelectValue: function l(m) {
            return m.options[m.selectedIndex].value;
        },
        setSelectValue: function l(m, n) {
            for (var o = 0; o < m.options.length; ++o)
                if (m.options[o].value == n) {
                    m.selectedIndex = o;
                    break;
                }
        },
        getRadioValue: function l(m) {
            for (var n = 0; n < m.length; n++)
                if (m[n].checked) return m[n].value;
            return null;
        },
        getElements: function l(m) {
            return m.tagName == 'FORM' && m.elements != m ? Array.from(m.elements) : k.getInputs(m);
        },
        getAttribute: function l(m, n) {
            return (m.getAttributeNode(n) || {}).value || null;
        },
        setDisabled: function l(m, n) {
            k.getElements(m).forEach(function (o) {
                if (o.disabled !== undefined) {
                    var p = c('DataStore').get(o, 'origDisabledState');
                    if (n) {
                        if (p === undefined) c('DataStore').set(o, 'origDisabledState', o.disabled);
                        o.disabled = n;
                    } else if (p === false) o.disabled = false;
                }
            });
        },
        forEachValue: function l(m, n, o) {
            k.getElements(m).forEach(function (p) {
                if (!p.name || p.disabled) return;
                if (p.type === 'submit') return;
                if (p.type === 'reset' || p.type === 'button' || p.type === 'image') return;
                if ((p.type === 'radio' || p.type === 'checkbox') && !p.checked) return;
                if (p.nodeName === 'SELECT') {
                    for (var q = 0, r = p.options.length; q < r; q++) {
                        var s = p.options[q];
                        if (s.selected) o('select', p.name, s.value);
                    }
                    return;
                }
                if (p.type === 'file') {
                    if (h) {
                        var t = p.files;
                        for (var u = 0; u < t.length; u++) o('file', p.name, t.item(u));
                    }
                    return;
                }
                o(p.type, p.name, c('Input').getValue(p));
            });
            if (n && n.name && n.type === 'submit' && c('DOMQuery').contains(m, n) && c('DOMQuery').isNodeOfType(n, ['input', 'button'])) o('submit', n.name, n.value);
        },
        createFormData: function l(m, n) {
            if (!i) return null;
            var o = new FormData();
            if (m)
                if (c('isNode')(m)) {
                    k.forEachValue(m, n, function (r, s, t) {
                        o.append(s, t);
                    });
                } else {
                    var p = j(m);
                    for (var q in p)
                        if (p[q] == null) {
                            o.append(q, '');
                        } else o.append(q, p[q]);
                }
            return o;
        },
        serialize: function l(m, n) {
            var o = {};
            k.forEachValue(m, n, function (p, q, r) {
                if (p === 'file') return;
                k._serializeHelper(o, q, r);
            });
            return k._serializeFix(o);
        },
        _serializeHelper: function l(m, n, o) {
            var p = Object.prototype.hasOwnProperty,
                q = /([^\]]+)\[([^\]]*)\](.*)/.exec(n);
            if (q) {
                if (!m[q[1]] || !p.call(m, q[1])) {
                    var r;
                    m[q[1]] = r = {};
                    if (m[q[1]] !== r) return;
                }
                var s = 0;
                if (q[2] === '') {
                    while (m[q[1]][s] !== undefined) s++;
                } else s = q[2];
                if (q[3] === '') {
                    m[q[1]][s] = o;
                } else k._serializeHelper(m[q[1]], s.concat(q[3]), o);
            } else m[n] = o;
        },
        _serializeFix: function l(m) {
            for (var n in m)
                if (m[n] instanceof Object) m[n] = k._serializeFix(m[n]);
            var o = Object.keys(m);
            if (o.length === 0 || o.some(isNaN)) return m;
            o.sort(function (r, s) {
                return r - s;
            });
            var p = 0,
                q = o.every(function (r) {
                    return +r === p++;
                });
            if (q) return o.map(function (r) {
                return m[r];
            });
            return m;
        },
        post: function l(m, n, o) {
            var p = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3],
                q = new(c('URI'))(m),
                r = document.createElement('form');
            r.action = q.toString();
            r.method = 'POST';
            r.style.display = 'none';
            var s = !c('isFacebookURI')(q);
            if (o) {
                if (s) {
                    r.rel = 'noopener';
                    if (o === '_blank') {
                        o = btoa(c('Random').uint32());
                        var t = window.open('about:blank', o);
                        if (!(t === undefined)) t.opener = null;
                    }
                }
                r.target = o;
            }
            if (p)
                if (!s && q.getSubdomain() !== 'apps') {
                    n.fb_dtsg = c('DTSG').getToken();
                    if (c('LSD').token) n.lsd = c('LSD').token;
                }
            k.createHiddenInputs(n, r);
            c('DOMQuery').getRootElement().appendChild(r);
            r.submit();
            return false;
        },
        createHiddenInputs: function l(m, n, o) {
            var p = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
            o = o || {};
            var q = j(m);
            for (var r in q) {
                if (q[r] === null) continue;
                if (o[r] && p) {
                    o[r].value = q[r];
                } else {
                    var s = c('DOM').create('input', {
                        type: 'hidden',
                        name: r,
                        value: q[r]
                    });
                    o[r] = s;
                    n.appendChild(s);
                }
            }
            return o;
        },
        getFirstElement: function l(m) {
            var n = arguments.length <= 1 || arguments[1] === undefined ? ['input[type="text"]', 'textarea', 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]'] : arguments[1],
                o = [];
            for (var p = 0; p < n.length; p++) {
                o = c('DOMQuery').scry(m, n[p]);
                for (var q = 0; q < o.length; q++) {
                    var r = o[q];
                    try {
                        var s = c('getElementPosition')(r);
                        if (s.y > 0 && s.x > 0) return r;
                    } catch (t) {}
                }
            }
            return null;
        },
        focusFirst: function l(m) {
            var n = k.getFirstElement(m);
            if (n) {
                n.focus();
                return true;
            }
            return false;
        }
    };
    f.exports = k;
}), null);
__d("coalesce", [], (function a(b, c, d, e, f, g) {
    function h() {
        for (var i = 0; i < arguments.length; ++i)
            if (arguments[i] != null) return arguments[i];
        return null;
    }
    f.exports = h;
}), null);
__d('OnVisible', ['Arbiter', 'DOM', 'Event', 'Parent', 'Run', 'Vector', 'ViewportBounds', 'coalesce', 'queryThenMutateDOM'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = [],
        i = void 0,
        j = 0,
        k = [],
        l = void 0,
        m = void 0,
        n = void 0,
        o = void 0,
        p = void 0;

    function q() {
        h.forEach(function (w) {
            w.remove();
        });
        if (m) {
            m.remove();
            l.remove();
            i.unsubscribe();
            m = l = i = null;
        }
        j = 0;
        h.length = 0;
    }

    function r() {
        if (!h.length) {
            q();
            return;
        }
        k.length = 0;
        n = c('Vector').getScrollPosition().y;
        o = c('Vector').getViewportDimensions().y;
        p = c('ViewportBounds').getTop();
        var w = h.length;
        for (var x = 0; x < w; ++x) {
            var y = h[x];
            if (isNaN(y.elementHeight)) k.push(x);
            y.elementHeight = c('Vector').getElementDimensions(y.element).y;
            y.elementPos = c('Vector').getElementPosition(y.element);
            y.hidden = c('Parent').byClass(y.element, 'hidden_elem');
            if (y.scrollArea) {
                y.scrollAreaHeight = c('Vector').getElementDimensions(y.scrollArea).y;
                y.scrollAreaY = c('Vector').getElementPosition(y.scrollArea).y;
            }
        }
        j = w;
    }

    function s() {
        for (var w = Math.min(h.length, j) - 1; w >= 0; --w) {
            var x = h[w];
            if (!x.elementPos || x.removed) {
                h.splice(w, 1);
                continue;
            }
            if (x.hidden) continue;
            var y = x.buffer,
                z = false,
                aa = n + o + y,
                ba = x.elementPos.y;
            if (aa > ba) {
                var ca = n + p - y,
                    da = ba + x.elementHeight;
                z = !x.strict || ca < ba && aa > da;
                if (z && x.scrollArea) {
                    var ea = x.scrollAreaY + x.scrollAreaHeight + y;
                    z = ba >= x.scrollAreaY - y && ba < ea;
                }
            }
            if (x.inverse ? !z : z) {
                x.remove();
                x.handler(k.indexOf(w) !== -1);
            }
        }
    }

    function t() {
        u();
        if (h.length) return;
        m = c('Event').listen(window, 'scroll', u);
        l = c('Event').listen(window, 'resize', u);
        i = c('Arbiter').subscribe('dom-scroll', u);
    }

    function u() {
        c('queryThenMutateDOM')(r, s, 'OnVisible/positionCheck');
    }

    function v(w, x, y, z, aa, ba) {
        this.element = w;
        this.handler = x;
        this.strict = y;
        this.buffer = c('coalesce')(z, 300);
        this.inverse = c('coalesce')(aa, false);
        this.scrollArea = ba || null;
        if (this.scrollArea) this.scrollAreaListener = this.$OnVisible1();
        if (h.length === 0) c('Run').onLeave(q);
        t();
        h.push(this);
    }
    v.prototype.remove = function () {
        if (this.removed) return;
        this.removed = true;
        if (this.scrollAreaListener) this.scrollAreaListener.remove();
    };
    v.prototype.reset = function () {
        this.elementHeight = null;
        this.removed = false;
        if (this.scrollArea) this.scrollAreaListener = this.$OnVisible1();
        h.indexOf(this) === -1 && h.push(this);
        t();
    };
    v.prototype.setBuffer = function (w) {
        this.buffer = w;
        u();
    };
    v.prototype.checkBuffer = function () {
        u();
    };
    v.prototype.getElement = function () {
        return this.element;
    };
    v.prototype.$OnVisible1 = function () {
        return c('Event').listen(c('DOM').find(this.scrollArea, '.uiScrollableAreaWrap'), 'scroll', this.checkBuffer);
    };
    Object.assign(v, {
        checkBuffer: u
    });
    f.exports = v;
}), null);
__d('PopoverMenuInterface', ['ArbiterMixin', 'emptyFunction', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('mixin')(c('ArbiterMixin')));
    i = h && h.prototype;

    function j() {
        'use strict';
        i.constructor.call(this);
    }
    j.prototype.done = function () {
        'use strict';
        this.inform('done');
    };
    Object.assign(j.prototype, {
        getRoot: c('emptyFunction'),
        onShow: c('emptyFunction'),
        onHide: c('emptyFunction'),
        focusAnItem: c('emptyFunction').thatReturnsFalse,
        blur: c('emptyFunction'),
        handleKeydown: c('emptyFunction').thatReturnsFalse,
        destroy: c('emptyFunction')
    });
    f.exports = j;
}), null);
__d('Toggler', ['csx', 'Arbiter', 'ArbiterMixin', 'ContextualThing', 'CSS', 'DataStore', 'DOM', 'DOMQuery', 'Event', 'Focus', 'Keys', 'Parent', 'TabbableElements', 'TimeSlice', 'arrayContains', 'createArrayFromMixed', 'emptyFunction', 'ge', 'getContextualParent', 'getObjectValues', 'mixin', 'setImmediate', '$'], (function a(b, c, d, e, f, g, h) {
    var i, j, k = [],
        l, m = false;

    function n() {
        if (!m) {
            m = true;
            c('setImmediate')(function () {
                m = false;
            });
        }
    }
    var o = function s() {
        o = c('emptyFunction');
        c('Event').listen(document.documentElement, 'click', function (event) {
            if (m) return;
            var t = event.getTarget();
            k.forEach(function (u) {
                u.clickedTarget = t;
                u.active && !u.sticky && !c('ContextualThing').containsIncludingLayers(u.getActive(), t) && !u.inTargetFlyout(t) && u.inActiveDialog() && !u.isIgnoredByModalLayer(t) && u.hide();
            });
        }, c('Event').Priority.URGENT);
    };
    i = babelHelpers.inherits(p, c('mixin')(c('ArbiterMixin')));
    j = i && i.prototype;

    function p() {
        'use strict';
        j.constructor.call(this);
        this.active = null;
        this.togglers = {};
        this.setSticky(false);
        k.push(this);
        this.subscribe(['show', 'hide'], p.inform.bind(p));
        return o();
    }
    p.prototype.show = function (s) {
        'use strict';
        var t = q(this, s),
            u = t.active;
        if (s !== u) {
            u && t.hide();
            t.active = s;
            c('CSS').addClass(s, 'openToggler');
            var v = c('DOM').scry(s, 'a[rel="toggle"]');
            if (v.length > 0 && v[0].getAttribute('data-target')) c('CSS').removeClass(c('$')(v[0].getAttribute('data-target')), 'toggleTargetClosed');
            var w = c('DOMQuery').scry(s, '.uiToggleFlyout')[0];
            if (w) {
                var x = c('TabbableElements').find(w)[0] || w;
                if (x.tabIndex == -1) x.tabIndex = 0;
                c('Focus').setWithoutOutline(x);
            }
            if (v.length > 0) {
                c('DOM').appendContent(s, t.getToggler('next'));
                c('DOM').prependContent(s, t.getToggler('prev'));
            }
            c('Event').listen(s, 'keydown', function (event) {
                if (c('Event').getKeyCode(event) === c('Keys').ESC)
                    if (t.isShown()) {
                        var y = c('DOM').scry(s, 'a[rel="toggle"]')[0];
                        y && y.focus();
                        t.hide();
                        event.kill();
                    }
            });
            if (s.getAttribute('data-toggle-wc')) t.__continuation = c('TimeSlice').getGuardedContinuation('Toggler.show inform');
            t.inform('show', t, c('Arbiter').BEHAVIOR_STATE);
        }
    };
    p.prototype.hide = function (s) {
        'use strict';
        var t = q(this, s),
            u = t.active;
        if (u && (!s || s === u)) {
            c('CSS').removeClass(u, 'openToggler');
            var v = c('DOM').scry(u, 'a[rel="toggle"]');
            if (v.length > 0 && v[0].getAttribute('data-target')) c('CSS').addClass(c('$')(v[0].getAttribute('data-target')), 'toggleTargetClosed');
            c('getObjectValues')(t.togglers).forEach(c('DOM').remove);
            if (u.getAttribute('data-toggle-wc')) t.__continuation = c('TimeSlice').getGuardedContinuation('Toggler.hide inform');
            t.inform('hide', t, c('Arbiter').BEHAVIOR_STATE);
            t.active = null;
        }
    };
    p.prototype.toggle = function (s) {
        'use strict';
        var t = q(this, s);
        if (t.active === s) {
            t.hide();
        } else t.show(s);
        n();
    };
    p.prototype.getActive = function () {
        'use strict';
        return q(this).active;
    };
    p.prototype.isShown = function () {
        'use strict';
        return q(this).active && c('CSS').hasClass(q(this).active, 'openToggler');
    };
    p.isNodeShown = function (s) {
        'use strict';
        return c('CSS').hasClass(s, 'openToggler');
    };
    p.prototype.inTargetFlyout = function (s) {
        'use strict';
        var t = r(this.getActive());
        return t && c('ContextualThing').containsIncludingLayers(t, s);
    };
    p.prototype.inActiveDialog = function () {
        'use strict';
        var s = b.Dialog && b.Dialog.getCurrent();
        return !s || c('DOM').contains(s.getRoot(), this.getActive());
    };
    p.prototype.isIgnoredByModalLayer = function (s) {
        'use strict';
        var t = !!c('Parent').bySelector(s, "._3qw"),
            u = !!c('Parent').bySelector(this.getActive(), "._3qw");
        return t && !u;
    };
    p.prototype.getToggler = function (s) {
        'use strict';
        var t = q(this);
        if (!t.togglers[s]) {
            t.togglers[s] = c('DOM').create('button', {
                className: 'hideToggler',
                onfocus: function u() {
                    var v = c('DOM').scry(t.active, 'a[rel="toggle"]')[0];
                    v && v.focus();
                    t.hide();
                },
                style: {
                    right: s === 'next' ? '0' : ''
                }
            });
            t.togglers[s].setAttribute('type', 'button');
        }
        return this.togglers[s];
    };
    p.prototype.setSticky = function (s) {
        'use strict';
        var t = q(this);
        s = s !== false;
        if (s !== t.sticky) {
            t.sticky = s;
            if (s) {
                t.$Toggler1 && t.$Toggler1.unsubscribe();
            } else t.$Toggler1 = c('Arbiter').subscribe('pre_page_transition', t.hide.bind(t, null));
        }
        return t;
    };
    p.prototype.setPrePageTransitionCallback = function (s) {
        'use strict';
        var t = q(this);
        t.$Toggler1 && t.$Toggler1.unsubscribe();
        t.$Toggler1 = c('Arbiter').subscribe('pre_page_transition', s);
    };
    p.bootstrap = function (s) {
        'use strict';
        var t = s.parentNode;
        p.getInstance(t).toggle(t);
    };
    p.createInstance = function (s) {
        'use strict';
        var t = new p().setSticky(true);
        c('DataStore').set(s, 'toggler', t);
        return t;
    };
    p.destroyInstance = function (s) {
        'use strict';
        c('DataStore').remove(s, 'toggler');
    };
    p.getInstance = function (s) {
        'use strict';
        while (s) {
            var t = c('DataStore').get(s, 'toggler');
            if (t) return t;
            if (c('CSS').hasClass(s, 'uiToggleContext')) return p.createInstance(s);
            s = c('getContextualParent')(s);
        }
        return l = l || new p();
    };
    p.listen = function (s, t, u) {
        'use strict';
        return p.subscribe(c('createArrayFromMixed')(s), function (v, w) {
            if (w.getActive() === t) {
                if (w.__continuation) {
                    var x = w.__continuation;
                    delete w.__continuation;
                    return x(function () {
                        return u(v, w);
                    });
                }
                return u(v, w);
            }
        });
    };
    Object.assign(p, p.prototype, c('ArbiterMixin'));
    Object.assign(p, {
        subscribe: function (s) {
            return function (t, u) {
                t = c('createArrayFromMixed')(t);
                if (c('arrayContains')(t, 'show')) k.forEach(function (v) {
                    if (v.getActive()) setTimeout(u.bind(null, 'show', v), 0);
                });
                return s(t, u);
            };
        }(p.subscribe.bind(p))
    });

    function q(s, t) {
        if (s instanceof p) return s;
        return p.getInstance(t);
    }

    function r(s) {
        var t = c('DOM').scry(s, 'a[rel="toggle"]');
        if (t.length > 0 && t[0].getAttribute('data-target')) return c('ge')(t[0].getAttribute('data-target'));
    }
    f.exports = p;
}), null);
__d('VirtualCursorStatus', ['Event', 'KeyStatus', 'Set', 'UserAgent', 'emptyFunction', 'setImmediate'], (function a(b, c, d, e, f, g) {
    var h = false,
        i = false,
        j = null,
        k = false;

    function l(event) {
        var q = new(c('Set'))(),
            r = c('KeyStatus').isKeyDown(),
            s = event.clientX,
            t = event.clientY,
            u = event.isPrimary,
            v = event.isTrusted,
            w = event.offsetX,
            x = event.offsetY,
            y = event.pointerType,
            z = event.mozInputSource,
            aa = event.WEBKIT_FORCE_AT_MOUSE_DOWN,
            ba = event.webkitForce,
            ca = event.getTarget(),
            da = ca.clientWidth,
            ea = ca.clientHeight;
        if (s === 0 && t === 0 && w >= 0 && x >= 0 && i && v && z == null) q.add('Chrome');
        if (h && i && !r && ba != null && ba < aa && w === 0 && x === 0 && z == null) q.add('Safari-edge');
        if (s === 0 && t === 0 && w < 0 && x < 0 && i && z == null) q.add('Safari-old');
        !h && !i && r && u === false && v && y === '' && s === 0 && t === 0 && w === 0 && x === 0 && z == null;
        if (!h && !i && !r && v && c('UserAgent').isBrowser('IE >= 10') && z == null)
            if (s < 0 && t < 0) {
                q.add('IE');
            } else if ((w < 0 || w > da) && (x < 0 || x > ea)) q.add('MSIE');
        if (z === 0 && v) q.add('Firefox');
        return q;
    }

    function m() {
        h = true;
        c('setImmediate')(function () {
            h = false;
        });
    }

    function n() {
        i = true;
        c('setImmediate')(function () {
            i = false;
        });
    }

    function o(event, q) {
        if (j === null) j = l(event);
        k = j.size > 0;
        var r = event.target.getAttribute('data-accessibilityid') === 'virtual_cursor_trigger';
        q(k, j, r);
        c('setImmediate')(function () {
            k = false;
            j = null;
        });
    }
    var p = {
        isVirtualCursorTriggered: function q() {
            return k;
        },
        add: function q(r) {
            var s = arguments.length <= 1 || arguments[1] === undefined ? c('emptyFunction') : arguments[1],
                t = c('Event').listen(r, 'click', function (event) {
                    return o(event, s);
                }),
                u = c('Event').listen(r, 'mousedown', m),
                v = c('Event').listen(r, 'mouseup', n);
            return {
                remove: function w() {
                    t.remove();
                    u.remove();
                    v.remove();
                }
            };
        }
    };
    f.exports = p;
}), null);
__d('FacebarPlaceholderShortcut', ['KeyEventController', 'Run', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i) {
        this._input = i;
        this._listener = null;
    }
    h.prototype.enable = function () {
        this._registerListener();
    };
    h.prototype._registerListener = function () {
        this._listener && this._listener.remove();
        this._listener = c('KeyEventController').registerKey('SLASH', this._handleKeydown.bind(this));
        c('Run').onLeave(function () {
            c('setTimeoutAcrossTransitions')(this._registerListener.bind(this), 0);
        }.bind(this));
    };
    h.prototype.disable = function () {
        this._listener && this._listener.remove();
        this._listener = null;
    };
    h.prototype._handleKeydown = function (i) {
        this._input.focus();
        return false;
    };
    f.exports = h;
}), null);
__d("XFacebarBootloadController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/typeahead\/search\/facebar\/bootload\/", {
        placeholder_id: {
            type: "String"
        }
    });
}), null);
__d('FacebarBootloader', ['AsyncRequest', 'BanzaiODS', 'CSS', 'Event', 'FacebarPlaceholderShortcut', 'Run', 'SubscriptionsHandler', 'XFacebarBootloadController', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = 'facebar_bootloader',
        i = h + '_',
        j = {
            isRequested: false,
            isFocused: false,
            isInitialized: false,
            init: function k(l, m, n, o) {
                this.reset();
                this.subscriptions = new(c('SubscriptionsHandler'))();
                this.placeholder = n;
                this.searchInput = l;
                this.shortcutHandler = new(c('FacebarPlaceholderShortcut'))(l);
                this.loadingIndicator = m;
                this.shortcutHandler.enable();
                this.subscriptions.addSubscriptions(c('Event').listen(l, 'focus', function () {
                    this.requestSearch();
                    this.showLoadingIndicator();
                }.bind(this)), c('Event').listen(n, 'mouseover', this.requestSearch.bind(this)));
                if (o) this.subscriptions.addSubscriptions(c('Event').listen(window, 'load', this.requestSearch.bind(this)));
                c('Run').onUnload(this.reset.bind(this));
                this.isInitialized = true;
                if (l.value || c('getActiveElement')() == l) {
                    this.requestSearch();
                    this.showLoadingIndicator();
                }
            },
            showLoadingIndicator: function k() {
                if (this.loadingIndicator) c('CSS').show(this.loadingIndicator);
            },
            reset: function k() {
                this.subscriptions && this.subscriptions.release();
                this.shortcutHandler && this.shortcutHandler.disable();
                this.searchInput = this.subscriptions = this.shortcutHandler = null;
                this.loadingIndicator = null;
                this.isRequested = false;
                this.isFocused = false;
                this.isInitialized = false;
            },
            requestSearch: function k() {
                if (c('getActiveElement')() == this.searchInput && !this.isFocused) {
                    this.isFocused = true;
                    this.focusTime = Date.now();
                }
                if (this.isRequested || !this.isInitialized) return;
                this.isRequested = true;
                var l = c('XFacebarBootloadController').getURIBuilder().setString('placeholder_id', this.placeholder.getAttribute('id')).getURI(),
                    m = new(c('AsyncRequest'))();
                m.setURI(l).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setErrorHandler(function (n) {
                    c('BanzaiODS').bumpEntityKey(h, i + 'request_failed');
                    if (n && n.errorSummary) {
                        c('BanzaiODS').bumpEntityKey(h, i + 'request_failed_' + n.errorSummary);
                    } else c('BanzaiODS').bumpEntityKey(h, i + 'request_failed_no_error_summary');
                    this.isRequested = false;
                }).send();
            },
            setFocus: function k(l, m, n) {
                if (!this.searchInput) return;
                c('BanzaiODS').bumpEntityKey(h, i + 'response_arrived');
                if (this.searchInput.value || this.isFocused) {
                    l.getCore().isFocused = true;
                    l.getCore().input.setValue(n.fromString(this.searchInput.value), true);
                    l.getCore().setStartTime(this.focusTime);
                    m.focus();
                    m.setSelection({
                        length: this.searchInput.selectionEnd - this.searchInput.selectionStart,
                        offset: this.searchInput.selectionStart
                    });
                    m.togglePlaceHolder && m.togglePlaceholder();
                }
                this.reset();
            }
        };
    f.exports = j;
}), null);
__d('FacebarStructuredFragment', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(k, l) {
        if (k && l) {
            return k.toLowerCase() == l.toLowerCase();
        } else return !k && !l;
    }
    var i = new RegExp('[' + '\\u0590-\\u07bf' + '\\u08a0-\\u08ff' + '\\ufb1d-\\ufb4f' + '\\ufb50-\\ufefc' + '\\u200e-\\u200f\\u202a-\\u202e' + ']');

    function j(k) {
        this._text = String(k.text);
        this._uid = k.uid ? String(k.uid) : null;
        this._type = k.type ? String(k.type) : null;
        this._typeParts = null;
        this._isLocal = Boolean(k.isLocal);
        this._categoryName = k.categoryName ? k.categoryName : null;
    }
    j.prototype.getText = function () {
        return this._text;
    };
    j.prototype.getUID = function () {
        return this._uid;
    };
    j.prototype.getType = function () {
        return this._type;
    };
    j.prototype.getTypePart = function (k) {
        return this._getTypeParts()[k];
    };
    j.prototype.getLength = function () {
        return this._text.length;
    };
    j.prototype.isType = function (k) {
        for (var l = 0; l < arguments.length; l++)
            if (!h(arguments[l], this.getTypePart(l))) return false;
        return true;
    };
    j.prototype.isLocal = function () {
        return this._isLocal;
    };
    j.prototype.getCategoryName = function () {
        return this._categoryName;
    };
    j.prototype.isWhitespace = function () {
        return /^\s*$/.test(this._text);
    };
    j.prototype.hasRTL = function () {
        return i.test(this._text);
    };
    j.prototype.toStruct = function () {
        return {
            text: this._text,
            type: this._type,
            uid: this._uid,
            isLocal: this._isLocal,
            categoryName: this._categoryName
        };
    };
    j.prototype.getHash = function (k) {
        var l = k != null ? this._getTypeParts().slice(0, k).join(':') : this._type;
        return String(l) + '::' + this._text;
    };
    j.prototype._getTypeParts = function () {
        var k = this._typeParts;
        if (k == null) {
            k = this._type != null ? this._type.split(':') : [];
            this._typeParts = k;
        }
        return k;
    };
    f.exports = j;
}), null);
__d('FacebarStructuredText', ['FacebarStructuredFragment', 'createArrayFromMixed'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = /\s+$/;

    function i(m) {
        if (!m) {
            return [];
        } else if (m instanceof l) {
            return m.toArray();
        } else return c('createArrayFromMixed')(m).map(function (n) {
            return new(c('FacebarStructuredFragment'))(n);
        });
    }

    function j(m) {
        return new(c('FacebarStructuredFragment'))({
            text: m,
            type: 'text'
        });
    }

    function k(m, n, o) {
        var p = m.getText(),
            q = p.replace(n, o);
        if (p != q) {
            return new(c('FacebarStructuredFragment'))({
                text: q,
                type: m.getType(),
                uid: m.getUID()
            });
        } else return m;
    }

    function l(m) {
        this._fragments = m || [];
        this._hash = null;
    }
    l.prototype.matches = function (m, n) {
        if (m) {
            var o = this._fragments,
                p = m._fragments;
            return o.length == p.length && !o.some(function (q, r) {
                var s = void 0;
                if (!n && q.getUID()) {
                    s = q.getUID() != p[r].getUID();
                } else s = q.getText() != p[r].getText() || q.getType() != p[r].getType();
                return s || q.isLocal() != p[r].isLocal();
            });
        }
        return false;
    };
    l.prototype.trim = function () {
        var m = null,
            n = null;
        this.forEach(function (p, q) {
            if (!p.isWhitespace()) {
                if (m === null) m = q;
                n = q;
            }
        });
        if (n !== null) {
            var o = this._fragments.slice(m, n + 1);
            o.push(k(o.pop(), h, ''));
            return new l(o);
        } else return new l([]);
    };
    l.prototype.pad = function () {
        var m = this.getFragment(-1);
        if (m && !h.test(m.getText()) && m.getText() !== '') {
            return new l(this._fragments.concat(j(' ')));
        } else return this;
    };
    l.prototype.forEach = function (m) {
        this._fragments.forEach(m);
        return this;
    };
    l.prototype.matchType = function (m) {
        var n = null;
        for (var o = 0; o < this._fragments.length; o++) {
            var p = this._fragments[o],
                q = p.isType.apply(p, arguments);
            if (q && !n) {
                n = p;
            } else if (q || !p.isWhitespace()) return null;
        }
        return n;
    };
    l.prototype.hasType = function (m) {
        var n = arguments;
        return this._fragments.some(function (o) {
            return !o.isWhitespace() && o.isType.apply(o, n);
        });
    };
    l.prototype.isLocal = function () {
        return this._fragments.some(function (m) {
            return m.isLocal();
        });
    };
    l.prototype.getCategoryName = function () {
        var m = this._fragments.filter(function (n) {
            return n.getCategoryName();
        });
        if (m.length > 0) return m[0].getCategoryName();
        return null;
    };
    l.prototype.endsOnType = function (m) {
        var n = arguments,
            o = this._fragments[this._fragments.length - 1];
        return !!o && !o.isWhitespace() && o.isType.apply(o, n);
    };
    l.prototype.isEmptyOrWhitespace = function () {
        return !this._fragments.some(function (m) {
            return !m.isWhitespace();
        });
    };
    l.prototype.hasRTL = function () {
        return this._fragments.some(function (m) {
            return m.hasRTL();
        });
    };
    l.prototype.isEmpty = function () {
        return this.getLength() === 0;
    };
    l.prototype.getFragment = function (m) {
        return this._fragments[m >= 0 ? m : this._fragments.length + m];
    };
    l.prototype.getCount = function () {
        return this._fragments.length;
    };
    l.prototype.getLength = function () {
        return this._fragments.reduce(function (m, n) {
            return m + n.getLength();
        }, 0);
    };
    l.prototype.toStruct = function () {
        return this._fragments.map(function (m) {
            return m.toStruct();
        });
    };
    l.prototype.toArray = function () {
        return this._fragments.slice();
    };
    l.prototype.toString = function () {
        return this._fragments.map(function (m) {
            return m.getText();
        }).join('');
    };
    l.prototype.getHash = function () {
        if (this._hash === null) this._hash = this._fragments.map(function (m) {
            if (m.getUID()) {
                return '[[' + m.getHash(1) + ']]';
            } else return m.getText();
        }).join('');
        return this._hash;
    };
    l.fromStruct = function (m) {
        return new l(i(m));
    };
    l.fromString = function (m) {
        return new l([j(m.toString())]);
    };
    f.exports = l;
}), null);
__d('QueryHistory', [], (function a(b, c, d, e, f, g) {
    var h = {},
        i = {
            set: function j(k, l) {
                h[this._key(k)] = l;
            },
            get: function j(k) {
                return h[this._key(k)];
            },
            _key: function j(k) {
                return 'uri-' + k.getQualifiedURI().toString();
            }
        };
    f.exports = i;
}), null);
__d('FacebarNavigation', ['csx', 'Arbiter', 'DOMQuery', 'FacebarBootloader', 'FacebarStructuredText', 'Input', 'QueryHistory', 'URI'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = null,
        j = null,
        k = null,
        l = false,
        m = true,
        n = false;

    function o(r, s) {
        if (!n) k = r;
        n = false;
        l = s;
        m = false;
        p();
    }

    function p() {
        if (m) {
            return;
        } else if (j) {
            l && j.pageTransition();
            j.setPageQuery(k);
            m = true;
        } else if (i && k && !c('Input').getValue(i)) c('Input').setValue(i, k.structure.toString() + ' ');
        i && i.blur();
    }
    c('Arbiter').subscribe('page_transition', function (r, s) {
        if (!q.isTopControlTransition(s.uri) && !q.isTimelineAbout(s.uri)) o(c('QueryHistory').get(s.uri), true);
    });
    c('Arbiter').subscribe('save_facebar_query', function (r, s) {
        n = true;
    });
    var q = {
        registerInput: function r(s) {
            i = c('DOMQuery').scry(s, "._586f")[0];
            if (i == null) i = c('DOMQuery').scry(s, "._1frb")[0];
            p();
        },
        registerBehavior: function r(s) {
            j = s;
            p();
        },
        setPageQuery: function r(s) {
            c('QueryHistory').set(c('URI').getNextURI(), s);
            if (!(s.structure instanceof c('FacebarStructuredText'))) s.structure = c('FacebarStructuredText').fromStruct(s.structure);
            o(s, false);
            c('FacebarBootloader').requestSearch();
        },
        isTopControlTransition: function r(s) {
            return String(s.getPath()).startsWith('/search/') && s.getQueryData().ref === 'top_filter' && !s.getQueryData().hard_refresh;
        },
        isTimelineAbout: function r(s) {
            return /\/about$/.test(s.getPath()) && !s.getQueryData().hard_refresh;
        }
    };
    f.exports = q;
}), null);
__d('SimpleSearchNavigation', ['Arbiter', 'DOMQuery', 'Input', 'QueryHistory', 'URI'], (function a(b, c, d, e, f, g) {
    var h = null,
        i = null,
        j = {
            registerInput: function k(l, m) {
                i = c('DOMQuery').scry(l, 'input')[0];
                if (h) this._updateTitle(h, m);
                c('Arbiter').subscribe('page_transition', function (n, o) {
                    this._updateTitle(c('QueryHistory').get(o.uri));
                }.bind(this));
            },
            _updateTitle: function k(l, m) {
                if (i) {
                    c('Input').setValue(i, l || '');
                    i.setAttribute('singlestate', l && m);
                    i.blur();
                }
            },
            setPageTitle: function k(l, m) {
                c('QueryHistory').set(c('URI').getNextURI(), l);
                if (i) {
                    this._updateTitle(l, m);
                } else h = l;
                var n = {};
                c('Arbiter').inform('search/updateNullState', n, c('Arbiter').BEHAVIOR_STATE);
            },
            setPageQuery: function k(l) {
                c('Arbiter').inform('search/updateNullState', l, c('Arbiter').BEHAVIOR_STATE);
            }
        };
    f.exports = j;
}), null);
__d("UIPageletContentCache", [], (function a(b, c, d, e, f, g) {
    var h = {
        cache: {},
        getContent: function i(j) {
            if (j in this.cache) return this.cache[j];
            return null;
        },
        setContent: function i(j, k) {
            this.cache[j] = k;
        }
    };
    f.exports = h;
}), null);
__d('UIPagelet', ['ActorURI', 'AjaxPipeRequest', 'AsyncRequest', 'DOM', 'HTML', 'ScriptPathState', 'UIPageletContentCache', 'URI', 'emptyFunction', 'ge', 'isElementNode'], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        'use strict';
        var l = i && c('isElementNode')(i) ? i.id : i;
        this._id = l || null;
        this._element = c('ge')(i || c('DOM').create('div'));
        this._src = j || null;
        this._context_data = k || {};
        this._data = {};
        this._handler = c('emptyFunction');
        this._request = null;
        this._use_ajaxpipe = false;
        this._use_post_request = false;
        this._is_bundle = true;
        this._allow_cross_page_transition = false;
        this._append = false;
        this._cache_content = false;
        this._content_cache_key = '';
    }
    h.prototype.getElement = function () {
        'use strict';
        return this._element;
    };
    h.prototype.setHandler = function (i) {
        'use strict';
        this._handler = i;
        return this;
    };
    h.prototype.go = function (i, j) {
        'use strict';
        if (arguments.length >= 2 || typeof i == 'string') {
            this._src = i;
            this._data = j || {};
        } else if (arguments.length == 1) this._data = i;
        this.refresh();
        return this;
    };
    h.prototype.setAllowCrossPageTransition = function (i) {
        'use strict';
        this._allow_cross_page_transition = i;
        return this;
    };
    h.prototype.setBundleOption = function (i) {
        'use strict';
        this._is_bundle = i;
        return this;
    };
    h.prototype.setErrorHandler = function (i) {
        'use strict';
        this._errorHandler = i;
        return this;
    };
    h.prototype.setTransportErrorHandler = function (i) {
        'use strict';
        this.transportErrorHandler = i;
        return this;
    };
    h.prototype.refresh = function () {
        'use strict';
        if (this._use_ajaxpipe) {
            c('ScriptPathState').setIsUIPageletRequest(true);
            this._request = new(c('AjaxPipeRequest'))();
            this._request.setCanvasId(this._id).setAppend(this._append).setConstHeight(this._constHeight).setJSNonBlock(this._jsNonblock).setAutomatic(this._automatic).setDisplayCallback(this._displayCallback).setFinallyHandler(this._finallyHandler).setAllowIrrelevantRequests(this._allowIrrelevantRequests);
            if (this._errorHandler) this._request.setErrorHandler(this._errorHandler);
            if (this.transportErrorHandler) this._request.setTransportErrorHandler(this.transportErrorHandler);
        } else {
            if (this._cache_content) {
                var i = c('UIPageletContentCache').getContent(this._content_cache_key);
                if (i !== null) {
                    this.handleContent(i);
                    return this;
                }
            }
            var j = function (n) {
                    this._request = null;
                    var o = c('HTML')(n.getPayload());
                    this.handleContent(o);
                    if (this._cache_content) c('UIPageletContentCache').setContent(this._content_cache_key, o);
                }.bind(this),
                k = this._displayCallback,
                l = this._finallyHandler;
            this._request = new(c('AsyncRequest'))().setMethod('GET').setReadOnly(true).setOption('bundle', this._is_bundle).setHandler(function (n) {
                if (k) {
                    k(j.bind(null, n));
                } else j(n);
                l && l();
            });
            if (this._errorHandler) this._request.setErrorHandler(this._errorHandler);
            if (this.transportErrorHandler) this._request.setTransportErrorHandler(this.transportErrorHandler);
            if (this._use_post_request) this._request.setMethod('POST');
        }
        var m = babelHelpers['extends']({}, this._context_data, this._data);
        if (this._actorID) m[c('ActorURI').PARAMETER_ACTOR] = this._actorID;
        this._request.setURI(this._src).setAllowCrossPageTransition(this._allow_cross_page_transition).setData({
            data: JSON.stringify(m)
        }).send();
        return this;
    };
    h.prototype.handleContent = function (i) {
        'use strict';
        if (this._append) {
            c('DOM').appendContent(this._element, i);
        } else c('DOM').setContent(this._element, i);
        this._handler();
    };
    h.prototype.cancel = function () {
        'use strict';
        if (this._request) this._request.abort();
    };
    h.prototype.setUseAjaxPipe = function (i) {
        'use strict';
        this._use_ajaxpipe = !!i;
        return this;
    };
    h.prototype.setUsePostRequest = function (i) {
        'use strict';
        this._use_post_request = !!i;
        return this;
    };
    h.prototype.setAppend = function (i) {
        'use strict';
        this._append = !!i;
        return this;
    };
    h.prototype.setJSNonBlock = function (i) {
        'use strict';
        this._jsNonblock = !!i;
        return this;
    };
    h.prototype.setAutomatic = function (i) {
        'use strict';
        this._automatic = !!i;
        return this;
    };
    h.prototype.setDisplayCallback = function (i) {
        'use strict';
        this._displayCallback = i;
        return this;
    };
    h.prototype.setConstHeight = function (i) {
        'use strict';
        this._constHeight = !!i;
        return this;
    };
    h.prototype.setFinallyHandler = function (i) {
        'use strict';
        this._finallyHandler = i;
        return this;
    };
    h.prototype.setAllowIrrelevantRequests = function (i) {
        'use strict';
        this._allowIrrelevantRequests = i;
        return this;
    };
    h.prototype.setActorID = function (i) {
        'use strict';
        this._actorID = i;
        return this;
    };
    h.prototype.setCacheContent = function (i) {
        'use strict';
        this._cache_content = i;
        return this;
    };
    h.prototype.setContentCacheKey = function (i) {
        'use strict';
        this._content_cache_key = i;
        return this;
    };
    h.appendToInline = function (i, j) {
        'use strict';
        var k = c('ge')(i),
            l = c('ge')(j);
        if (k && l) {
            while (l.firstChild) c('DOM').appendContent(k, l.firstChild);
            c('DOM').remove(l);
        }
    };
    h.loadFromEndpoint = function (i, j, k, l) {
        'use strict';
        l = l || {};
        var m = '/ajax/pagelet/generic.php/' + i;
        if (l.intern) m = '/intern' + m;
        var n = new(c('URI'))(m.replace(/\/+/g, '/'));
        if (l.subdomain) n.setSubdomain(l.subdomain);
        var o = false,
            p = '';
        if (l.contentCacheKey) {
            o = true;
            p = i + ',' + String(l.contentCacheKey);
        }
        var q = new h(j, n, k).setUseAjaxPipe(l.usePipe).setBundleOption(l.bundle !== false).setAppend(l.append).setJSNonBlock(l.jsNonblock).setAutomatic(l.automatic).setDisplayCallback(l.displayCallback).setConstHeight(l.constHeight).setAllowCrossPageTransition(l.crossPage).setFinallyHandler(l.finallyHandler || c('emptyFunction')).setErrorHandler(l.errorHandler).setTransportErrorHandler(l.transportErrorHandler).setAllowIrrelevantRequests(l.allowIrrelevantRequests).setActorID(l.actorID).setCacheContent(o).setContentCacheKey(p).setUsePostRequest(l.usePostRequest);
        l.handler && q.setHandler(l.handler);
        q.go();
        return q;
    };
    h.loadFromEndpointBatched = function (i, j, k) {
        'use strict';
        var l = i.slice(0, k),
            m = i.slice(k);
        if (m.length > 0) {
            var n = l[l.length - 1],
                o = c('emptyFunction');
            if (n.options && n.options.finallyHandler) o = n.options.finallyHandler;
            n.options = babelHelpers['extends']({}, n.options, {
                finallyHandler: function p() {
                    o();
                    window.setTimeout(function () {
                        h.loadFromEndpointBatched(m, j, k);
                    }, 1);
                }
            });
        }
        l.forEach(function (p) {
            h.loadFromEndpoint(p.controller, p.target_element, p.data, babelHelpers['extends']({}, p.options, j, {
                bundle: true
            }));
        });
    };
    f.exports = h;
}), null);
__d('UITinyViewportAction', ['Arbiter', 'ArbiterMixin', 'BanzaiScuba', 'CSS', 'Event', 'getDocumentScrollElement', 'queryThenMutateDOM'], (function a(b, c, d, e, f, g) {
    var h = document.documentElement,
        i, j, k, l, m = false,
        n = false,
        o = false,
        p = false,
        q = {
            init: function r(s) {
                var t = c('queryThenMutateDOM').bind(null, function () {
                    l = l || c('getDocumentScrollElement')();
                    j = h.clientWidth < l.scrollWidth - 1;
                    k = h.clientHeight < 400;
                    i = k || j;
                }, function () {
                    if (i !== m || j !== n || k !== o) {
                        c('CSS').conditionClass(h, 'tinyViewport', i);
                        c('CSS').conditionClass(h, 'tinyWidth', j);
                        c('CSS').conditionClass(h, 'tinyHeight', k);
                        c('CSS').conditionClass(h, 'canHaveFixedElements', !i);
                        q.inform('change', i);
                        c('Arbiter').inform('tinyViewport/change', {
                            tiny: i,
                            tinyWidth: j,
                            tinyHeight: k
                        }, c('Arbiter').BEHAVIOR_STATE);
                        m = i;
                        n = j;
                        o = k;
                    }
                    if (!p) {
                        var u = new(c('BanzaiScuba'))('www_tinyview_port', null, {
                            addBrowserFields: true
                        });
                        u.addInteger('clientWidth', h.clientWidth);
                        u.addInteger('clientHeight', h.clientHeight);
                        u.addNormal('view', i ? 'tiny' : 'normal');
                        u.post();
                        p = true;
                    }
                }, 'TinyViewport');
                t();
                c('Arbiter').subscribe('quickling/response', t);
                c('Event').listen(window, 'resize', t);
            },
            isTiny: function r() {
                return i;
            },
            isTinyWidth: function r() {
                return j;
            },
            isTinyHeight: function r() {
                return k;
            }
        };
    Object.assign(q, c('ArbiterMixin'));
    f.exports = q;
}), null);
__d('Button', ['csx', 'cx', 'CSS', 'DataStore', 'DOM', 'Event', 'Parent', 'emptyFunction', 'isNode'], (function a(b, c, d, e, f, g, h, i) {
    var j = 'uiButtonDisabled',
        k = 'uiButtonDepressed',
        l = "_42fr",
        m = "_42fs",
        n = 'button:blocker',
        o = 'href',
        p = 'ajaxify';

    function q(w, x) {
        var y = c('DataStore').get(w, n);
        if (x) {
            if (y) {
                y.remove();
                c('DataStore').remove(w, n);
            }
        } else if (!y) c('DataStore').set(w, n, c('Event').listen(w, 'click', c('emptyFunction').thatReturnsFalse, c('Event').Priority.URGENT));
    }

    function r(w) {
        var x = c('Parent').byClass(w, 'uiButton') || c('Parent').bySelector(w, "._42ft");
        if (!x) throw new Error('invalid use case');
        return x;
    }

    function s(w) {
        return c('DOM').isNodeOfType(w, 'a');
    }

    function t(w) {
        return c('DOM').isNodeOfType(w, 'button');
    }

    function u(w) {
        return c('CSS').matchesSelector(w, "._42ft");
    }
    var v = {
        getInputElement: function w(x) {
            x = r(x);
            if (s(x)) throw new Error('invalid use case');
            return t(x) ? x : c('DOM').find(x, 'input');
        },
        isEnabled: function w(x) {
            return !(c('CSS').hasClass(r(x), j) || c('CSS').hasClass(r(x), l));
        },
        setEnabled: function w(x, y) {
            x = r(x);
            var z = u(x) ? l : j;
            c('CSS').conditionClass(x, z, !y);
            if (s(x)) {
                var aa = x.getAttribute('href'),
                    ba = x.getAttribute('ajaxify'),
                    ca = c('DataStore').get(x, o, '#'),
                    da = c('DataStore').get(x, p);
                if (y) {
                    if (!aa) x.setAttribute('href', ca);
                    if (!ba && da) x.setAttribute('ajaxify', da);
                    x.removeAttribute('tabIndex');
                } else {
                    if (aa && aa !== ca) c('DataStore').set(x, o, aa);
                    if (ba && ba !== da) c('DataStore').set(x, p, ba);
                    x.removeAttribute('href');
                    x.removeAttribute('ajaxify');
                    x.setAttribute('tabIndex', '-1');
                }
                q(x, y);
            } else {
                var ea = v.getInputElement(x);
                ea.disabled = !y;
                q(ea, y);
            }
        },
        setDepressed: function w(x, y) {
            x = r(x);
            var z = u(x) ? m : k;
            c('CSS').conditionClass(x, z, y);
        },
        isDepressed: function w(x) {
            x = r(x);
            var y = u(x) ? m : k;
            return c('CSS').hasClass(x, y);
        },
        setLabel: function w(x, y) {
            x = r(x);
            if (u(x)) {
                var z = [];
                if (y) z.push(y);
                var aa = c('DOM').scry(x, '.img')[0];
                if (aa)
                    if (x.firstChild == aa) {
                        z.unshift(aa);
                    } else z.push(aa);
                c('DOM').setContent(x, z);
            } else if (s(x)) {
                var ba = c('DOM').find(x, 'span.uiButtonText');
                c('DOM').setContent(ba, y);
            } else v.getInputElement(x).value = y;
            var ca = u(x) ? "_42fv" : 'uiButtonNoText';
            c('CSS').conditionClass(x, ca, !y);
        },
        getIcon: function w(x) {
            x = r(x);
            return c('DOM').scry(x, '.img')[0];
        },
        setIcon: function w(x, y) {
            if (y && !c('isNode')(y)) return;
            var z = v.getIcon(x);
            if (!y) {
                z && c('DOM').remove(z);
                return;
            }
            c('CSS').addClass(y, 'customimg');
            if (z != y)
                if (z) {
                    c('DOM').replace(z, y);
                } else c('DOM').prependContent(r(x), y);
        }
    };
    f.exports = v;
}), null);
__d('BehaviorsMixin', [], (function a(b, c, d, e, f, g) {
    function h(l) {
        'use strict';
        this.$InstalledBehavior1 = l;
        this.$InstalledBehavior2 = false;
    }
    h.prototype.enable = function () {
        'use strict';
        if (!this.$InstalledBehavior2) {
            this.$InstalledBehavior2 = true;
            this.$InstalledBehavior1.enable();
        }
    };
    h.prototype.disable = function () {
        'use strict';
        if (this.$InstalledBehavior2) {
            this.$InstalledBehavior2 = false;
            this.$InstalledBehavior1.disable();
        }
    };
    var i = 1;

    function j(l) {
        if (!l.__BEHAVIOR_ID) l.__BEHAVIOR_ID = i++;
        return l.__BEHAVIOR_ID;
    }
    var k = {
        enableBehavior: function l(m) {
            if (!this._behaviors) this._behaviors = {};
            var n = j(m);
            if (!this._behaviors[n]) this._behaviors[n] = new h(new m(this));
            this._behaviors[n].enable();
            return this;
        },
        disableBehavior: function l(m) {
            if (this._behaviors) {
                var n = j(m);
                if (this._behaviors[n]) this._behaviors[n].disable();
            }
            return this;
        },
        enableBehaviors: function l(m) {
            m.forEach(this.enableBehavior, this);
            return this;
        },
        destroyBehaviors: function l() {
            if (this._behaviors) {
                for (var m in this._behaviors) this._behaviors[m].disable();
                this._behaviors = {};
            }
        },
        hasBehavior: function l(m) {
            return this._behaviors && j(m) in this._behaviors;
        }
    };
    f.exports = k;
}), null);
__d('UIForm', ['ArbiterMixin', 'BehaviorsMixin', 'DOM', 'Event', 'Form', 'Run', 'areJSONRepresentationsEqual', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('mixin')(c('ArbiterMixin'), c('BehaviorsMixin')));
    i = h && h.prototype;

    function j(k, l, m, n, o) {
        'use strict';
        i.constructor.call(this);
        this._root = k;
        this.controller = k;
        this._message = l;
        if (n) {
            this._confirm_dialog = n;
            n.subscribe('confirm', this._handleDialogConfirm.bind(this));
            c('DOM').prependContent(this._root, c('DOM').create('input', {
                type: 'hidden',
                name: 'confirmed',
                value: 'true'
            }));
        }
        c('Run').onAfterLoad(function () {
            this._originalState = c('Form').serialize(this._root);
        }.bind(this));
        this._forceDirty = m;
        this._confirmed = false;
        this._submitted = false;
        c('Event').listen(this._root, 'submit', this._handleSubmit.bind(this));
        if (o && o.length) this.enableBehaviors(o);
        var p = true;
        c('Run').onBeforeUnload(this.checkUnsaved.bind(this), p);
    }
    j.prototype.getRoot = function () {
        'use strict';
        return this._root;
    };
    j.prototype._handleSubmit = function () {
        'use strict';
        if (this._confirm_dialog && !this._confirmed) {
            this._confirm_dialog.show();
            return false;
        }
        if (this.inform('submit') === false) return false;
        this._submitted = true;
        return true;
    };
    j.prototype._handleDialogConfirm = function () {
        'use strict';
        this._confirmed = true;
        this._confirm_dialog.hide();
        if (this._root.getAttribute('ajaxify')) {
            c('Event').fire(this._root, 'submit');
        } else if (this._handleSubmit()) this._root.submit();
    };
    j.prototype.reset = function () {
        'use strict';
        this.inform('reset');
        this._submitted = false;
        this._confirmed = false;
    };
    j.prototype.isDirty = function () {
        'use strict';
        if (this._submitted || !c('DOM').contains(document.body, this._root)) return false;
        if (this._forceDirty) return true;
        if (!this._originalState) return false;
        var k = c('Form').serialize(this._root);
        return !c('areJSONRepresentationsEqual')(k, this._originalState);
    };
    j.prototype.checkUnsaved = function () {
        'use strict';
        if (this.isDirty()) return this._message;
        return null;
    };
    f.exports = b.UIForm || j;
}), null);
__d('SimpleFBAuthenticatedXHRRequest', ['invariant', 'CurrentUser', 'DTSG', 'ServerJSDefine', 'XHRRequest', 'isFacebookURI'], (function a(b, c, d, e, f, g, h) {
    var i, j, k = 1;
    i = babelHelpers.inherits(l, c('XHRRequest'));
    j = i && i.prototype;

    function l(m, n) {
        'use strict';
        j.constructor.call(this, m);
        var o = {
            __dyn: c('ServerJSDefine').getLoadedModuleHash(),
            __req: (k++).toString(36),
            __ajax__: 1,
            __a: 1,
            __user: c('CurrentUser').getID()
        };
        j.setData.call(this, babelHelpers['extends']({}, n, o));
    }
    l.prototype.send = function () {
        'use strict';
        if (!c('isFacebookURI')(this.getURI())) return j.send.call(this);
        if (c('DTSG').getCachedToken) {
            var m = c('DTSG').getCachedToken();
            if (m) {
                return this.sendOnDTSGToken(m);
            } else {
                c('DTSG').getToken().done(function (n) {
                    return this.sendOnDTSGToken(n);
                }.bind(this));
                return this;
            }
        } else this.sendOnDTSGToken(c('DTSG').getToken());
    };
    l.prototype.sendOnDTSGToken = function (m) {
        'use strict';
        if (m) j.setData.call(this, babelHelpers['extends']({}, this.getData(), {
            fb_dtsg: m
        }));
        return j.send.call(this);
    };
    l.prototype.setData = function (m) {
        'use strict';
        h(0);
    };
    l.parseResponse = function (m) {
        'use strict';
        return JSON.parse(m.substr(9));
    };
    l.getPayload = function (m) {
        'use strict';
        var n = l.parseResponse(m).payload;
        return n.payload ? n.payload : n;
    };
    f.exports = l;
}), null);
__d("XFantailLogController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/ajax\/fantail\/", {
        service: {
            type: "String",
            required: true
        }
    });
}), null);
__d('FantailLogQueue', ['ChannelClientID', 'CircularBuffer', 'FantailConfig', 'PHPQuerySerializer', 'SimpleFBAuthenticatedXHRRequest', 'XFantailLogController', 'destroyOnUnload', 'setIntervalAcrossTransitions', 'sprintf'], (function a(b, c, d, e, f, g) {
    var h = {
        DEBUG: 'debug',
        INFO: 'info',
        WARN: 'warn',
        ERROR: 'error'
    };

    function i(j) {
        'use strict';
        this.$FantailLogQueue2 = j;
        this.$FantailLogQueue3 = new(c('CircularBuffer'))(200);
        c('setIntervalAcrossTransitions')(this.$FantailLogQueue4.bind(this), 30 * 1000);
        c('destroyOnUnload')(this.$FantailLogQueue4.bind(this));
    }
    i.get = function (j) {
        'use strict';
        i.$FantailLogQueue1 = i.$FantailLogQueue1 || {};
        i.$FantailLogQueue1[j] = i.$FantailLogQueue1[j] || new i(j);
        return i.$FantailLogQueue1[j];
    };
    i.prototype.debug = function (j) {
        'use strict';
        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
        this.$FantailLogQueue5.apply(this, [h.DEBUG, j].concat(l));
    };
    i.prototype.info = function (j) {
        'use strict';
        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
        this.$FantailLogQueue5.apply(this, [h.INFO, j].concat(l));
    };
    i.prototype.warn = function (j) {
        'use strict';
        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
        this.$FantailLogQueue5.apply(this, [h.WARN, j].concat(l));
    };
    i.prototype.error = function (j) {
        'use strict';
        for (var k = arguments.length, l = Array(k > 1 ? k - 1 : 0), m = 1; m < k; m++) l[m - 1] = arguments[m];
        this.$FantailLogQueue5.apply(this, [h.ERROR, j].concat(l));
    };
    i.prototype.$FantailLogQueue5 = function (j, k) {
        'use strict';
        for (var l = arguments.length, m = Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) m[n - 2] = arguments[n];
        var o = c('sprintf').apply(undefined, [k].concat(m));
        this.$FantailLogQueue3.write({
            log_time: Date.now(),
            log: o,
            severity: j,
            device_id: c('ChannelClientID').getID()
        });
    };
    i.prototype.$FantailLogQueue4 = function () {
        'use strict';
        var j = this.$FantailLogQueue3.read();
        if (j.length > 0) {
            var k = {
                log_time: [],
                log: [],
                severity: [],
                device_id: []
            };
            j.forEach(function (m) {
                k.log_time.push(m.log_time);
                k.log.push(m.log);
                k.severity.push(m.severity);
                k.device_id.push(m.device_id);
            });
            this.$FantailLogQueue3.clear();
            var l = c('XFantailLogController').getURIBuilder().setString('service', this.$FantailLogQueue2).getURI();
            new(c('SimpleFBAuthenticatedXHRRequest'))(l, k).setMethod('POST').setDataSerializer(c('PHPQuerySerializer').serialize).setRequestHeader('Content-Type', 'application/x-www-form-urlencoded').send();
        }
    };
    f.exports = i;
}), null);
__d('performanceNavigationStart', ['performance'], (function a(b, c, d, e, f, g) {
    var h, i = void 0;
    if (c('performance').now) {
        if (c('performance').timing && c('performance').timing.navigationStart) {
            i = function j() {
                return c('performance').timing.navigationStart;
            };
        } else if (typeof window._cstart === 'number') {
            i = function j() {
                return window._cstart;
            };
        } else(function () {
            var j = Date.now();
            i = function k() {
                return j;
            };
        })();
    } else i = function j() {
        return 0;
    };
    f.exports = i;
}), null);