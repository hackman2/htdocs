if (self.CavalryLogger) { CavalryLogger.start_js(["IlLqg"]); }

__d("UsernameFormatToken", [], (function a(b, c, d, e, f, g) { f.exports = { FIRST: "{first}", MIDDLE: "{middle}", LAST: "{last}" }; }), null);
__d("XReCaptchaLogActionsController", ["XController"], (function a(b, c, d, e, f, g) { f.exports = c("XController").create("\/captcha\/recaptcha_log_actions\/", {}); }), null);
__d('Recaptcha', ['fbt', 'AsyncRequest', 'Bootloader', 'CaptchaClientConfig', 'CSS', 'CurrentLocale', 'DOM', 'Event', 'Keys', 'XReCaptchaLogActionsController', 'ge'], (function a(b, c, d, e, f, g, h) {
    var i, j = { tabindex: 0, callback: null },
        k = { en_US: 'en', en_GB: 'en', en_PI: 'en', nl_NL: 'nl', nl_BE: 'nl', fr_FR: 'fr', fr_CA: 'fr', de_DE: 'de', es_LA: 'es', es_ES: 'es', es_CL: 'es', es_CO: 'es', es_MX: 'es', es_VE: 'es', ru_RU: 'ru', tr_TR: 'tr' },
        l = false,
        m = {
            widget: null,
            timer_id: -1,
            fail_timer_id: -1,
            type: 'image',
            ajax_verify_cb: null,
            audio_only: false,
            $: function n(o) { if (typeof o == "string") { return document.getElementById(o); } else return o; },
            setFocusOnLoad: function n(o) { l = o; },
            create: function n(o, p) {
                m.destroy();
                if (o) m.widget = m.$(o);
                m._init_options(p);
                m._call_challenge(c('CaptchaClientConfig').recaptchaPublicKey);
            },
            destroy: function n() {
                var o = m.$('recaptcha_challenge_field');
                if (o) o.parentNode.removeChild(o);
                if (m.timer_id != -1) clearInterval(m.timer_id);
                m.timer_id = -1;
                var p = m.$('recaptcha_image');
                if (p) p.innerHTML = "";
                if (m.widget) {
                    m.widget.style.display = "none";
                    m.widget = null;
                }
            },
            focus_response_field: function n() {
                var o = m.$,
                    p = o('captcha_response');
                try { p.focus(); } catch (q) {}
            },
            get_challenge: function n() { if (typeof b.RecaptchaState == "undefined") return null; return b.RecaptchaState.challenge; },
            get_response: function n() {
                var o = m.$,
                    p = o('captcha_response');
                if (!p) return null;
                return p.value;
            },
            ajax_verify: function n(o) {
                m.ajax_verify_cb = o;
                var p = m._get_api_server() + "/ajaxverify" + "?c=" + encodeURIComponent(m.get_challenge()) + "&response=" + encodeURIComponent(m.get_response());
                m._add_script(p);
            },
            _ajax_verify_callback: function n(o) { m.ajax_verify_cb(o); },
            _get_api_server: function n() {
                var o = window.location.protocol,
                    p;
                if (typeof b._RecaptchaOverrideApiServer != "undefined") { p = b._RecaptchaOverrideApiServer; } else p = "www.google.com";
                return o + "//" + p;
            },
            _call_challenge: function n(o) {
                if (!m.audio_only) m.fail_timer_id = setTimeout(function() {
                    if (m.fail_timer_id == -1) m.logAction('timeout');
                    m.createCaptcha();
                }, 15000);
                var p = m._get_api_server() + "/recaptcha/api/challenge?k=" + o + "&ajax=1&xcachestop=" + Math.random();
                if (c('ge')('extra_challenge_params') != null) p += "&" + c('ge')('extra_challenge_params').value;
                m._add_script(p);
            },
            _add_script: function n(o) { c('Bootloader').requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN(o); },
            _init_options: function n(o) {
                var p = j,
                    q = o || {};
                for (var r in q) p[r] = q[r];
                i = p;
            },
            challenge_callback: function n() {
                if (!m.audio_only) {
                    clearTimeout(m.fail_timer_id);
                    m._reset_timer();
                }
                if (window.addEventListener) window.addEventListener('unload', function(q) { m.destroy(); }, false);
                if (m._is_ie() && window.attachEvent) window.attachEvent('onbeforeunload', function() {});
                if (navigator.userAgent.indexOf("KHTML") > 0) {
                    var o = document.createElement('iframe');
                    o.src = "about:blank";
                    o.style.height = "0px";
                    o.style.width = "0px";
                    o.style.visibility = "hidden";
                    o.style.border = "none";
                    var p = document.createTextNode("This frame prevents back/forward cache problems in Safari.");
                    o.appendChild(p);
                    document.body.appendChild(o);
                }
                m._finish_widget();
                if (m.audio_only) m.switch_type('audio');
                m.logAction('shown');
            },
            _finish_widget: function n() {
                var o = m.$,
                    p = b.RecaptchaState,
                    q = i,
                    r = document.createElement("input");
                r.type = "password";
                r.setAttribute("autocomplete", "off");
                r.style.display = "none";
                r.name = "recaptcha_challenge_field";
                r.id = "recaptcha_challenge_field";
                o('captcha_response').parentNode.insertBefore(r, o('captcha_response'));
                o('captcha_response').setAttribute("autocomplete", "off");
                o('recaptcha_image').style.width = '300px';
                o('recaptcha_image').style.height = '57px';
                m.should_focus = false;
                if (!m.audio_only) { m._set_challenge(p.challenge, 'image'); } else m._set_challenge(p.challenge, 'audio');
                if (q.tabindex) o('captcha_response').tabIndex = q.tabindex;
                if (m.widget) m.widget.style.display = '';
                if (q.callback) q.callback();
                o('recaptcha_loading').style.display = "none";
            },
            switch_type: function n(o) {
                var p = m;
                p.type = o;
                p.$('recaptcha_type').value = o;
                p.reload(p.type == 'audio' ? 'a' : 'v');
            },
            reload: function n(o) {
                var p = m,
                    q = p.$,
                    r = b.RecaptchaState;
                if (typeof o == "undefined") o = 'r';
                var s = r.server + "reload?c=" + r.challenge + "&k=" + r.site + "&reason=" + o + "&type=" + p.type + "&lang=" + m.getLang();
                if (c('ge')('extra_challenge_params') != null) s += "&" + c('ge')('extra_challenge_params').value;
                p.should_focus = o != 't';
                p._add_script(s);
            },
            finish_reload: function n(o, p) {
                b.RecaptchaState.is_incorrect = false;
                m._set_challenge(o, p);
            },
            _set_challenge: function n(o, p) {
                var q = m,
                    r = b.RecaptchaState,
                    s = q.$;
                r.challenge = o;
                q.type = p;
                s('recaptcha_challenge_field').value = r.challenge;
                s('recaptcha_challenge_field').defaultValue = r.challenge;
                s('recaptcha_image').innerHtml = "";
                if (p == 'audio') {
                    c('DOM').setContent(document.getElementById('recaptcha_image'), m.setAudioCaptchaControls());
                    c('DOM').setAttributes(document.getElementById('captcha_response'), { 'aria-label': h._("Lyd-captcha. Tryk p\u00e5 knappen ovenfor for at starte afspilning af lyd-captchaen. Indtast de tal, du h\u00f8rer, og indsend derefter formularen for at forts\u00e6tte.") });
                } else if (p == 'image') {
                    var t = r.server + 'image?c=' + r.challenge;
                    s('recaptcha_image').innerHTML = "<img style='display:block;' height='57' width='300' src='" + t + "'/>";
                    c('DOM').setAttributes(document.getElementById('captcha_response'), { 'aria-label': h._("Captcha-input. Indtast ordene ovenfor for at forts\u00e6tte. Du kan ogs\u00e5 pr\u00f8ve lyd-captchaen ved at klikke p\u00e5 linket ovenfor.") });
                }
                m._css_toggle("recaptcha_had_incorrect_sol", "recaptcha_nothad_incorrect_sol", r.is_incorrect);
                m._css_toggle("recaptcha_is_showing_audio", "recaptcha_isnot_showing_audio", p == 'audio');
                if (q.should_focus) q.focus_response_field();
                q._reset_timer();
            },
            _reset_timer: function n() {
                var o = b.RecaptchaState;
                clearInterval(m.timer_id);
                m.timer_id = setInterval(function() { return m.reload('t'); }, (o.timeout - 60 * 5) * 1000);
            },
            _clear_input: function n() {
                var o = m.$('captcha_response');
                o.value = "";
            },
            _displayerror: function n(o) {
                var p = m.$;
                c('DOM').empty('recaptcha_image');
                p('recaptcha_image').appendChild(document.createTextNode(o));
            },
            reloaderror: function n(o) { m._displayerror(o); },
            _is_ie: function n() { return navigator.userAgent.indexOf("MSIE") > 0 && !window.opera; },
            _css_toggle: function n(o, p, q) {
                var r = m.widget;
                if (!r) r = document.body;
                var s = r.className;
                s = s.replace(new RegExp("(^|\\s+)" + o + "(\\s+|$)"), ' ');
                s = s.replace(new RegExp("(^|\\s+)" + p + "(\\s+|$)"), ' ');
                s += " " + (q ? o : p);
                c('CSS').setClass(r, s);
            },
            handlePlayPress: function n(event) {
                var o = c('Event').getKeyCode(event);
                if (o === c('Keys').RETURN || o === c('Keys').SPACE) {
                    c('Event').prevent(event);
                    this.playAgain();
                }
            },
            handlePlayClick: function n(event) {
                c('Event').prevent(event);
                this.playAgain();
            },
            playAgain: function n() { c('DOM').setContent(document.getElementById('recaptcha_audio_container'), m.getAudioCaptchaHtml()); },
            setAudioCaptchaControls: function n() {
                var o = b.RecaptchaState,
                    p = o.server + 'image?c=' + o.challenge;
                if (p.indexOf('https://') == 0) p = 'http://' + p.substring(8);
                var q = c('DOM').create('div'),
                    r = c('DOM').create('a', { href: '#', 'class': 'recaptcha_audio_cant_hear_link recaptcha_text', role: 'button', tabindex: '0', onclick: this.handlePlayClick.bind(this), onkeyup: this.handlePlayPress.bind(this) }, h._("Afspil lyd-captcha")),
                    s = c('DOM').create('a', { 'class': 'recaptcha_audio_cant_hear_link recaptcha_text', target: '_blank', href: p }, h._("\u00c5bn lydfilen i et nyt vindue")),
                    t = c('DOM').create('div', { id: 'recaptcha_audio_container' });
                c('DOM').appendContent(q, s);
                if (m.checkFlashVer()) c('DOM').appendContent(q, r);
                c('DOM').appendContent(q, t);
                return q;
            },
            getAudioCaptchaHtml: function n() {
                var o = m,
                    p = b.RecaptchaState,
                    q = p.server + 'image?c=' + p.challenge;
                if (q.indexOf('https://') == 0) q = 'http://' + q.substring(8);
                var r = p.server + '/img/audiocaptcha.swf?v2',
                    s;
                if (o._is_ie()) {
                    s = c('DOM').create('object', { classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', id: 'audiocaptcha', width: '0', height: '0', codebase: 'https://fpdownload.macromedia.com/get/flashplayer/current/' + 'swflash.cab' });
                    var t = [{ name: 'movie', value: r }, { name: 'quality', value: 'high' }, { name: 'bgcolor', value: '869ca7' }, { name: 'allowScriptAccess', value: 'always' }];
                    t.forEach(function(u) { c('DOM').appendContent(c('DOM').create('param', u)); });
                } else s = c('DOM').create('embed', { src: r, url: r, quality: 'high', bgcolor: '#869ca7', width: '0', height: '0', name: 'audiocaptcha', align: 'middle', play: 'true', loop: 'false', allowScriptAccess: 'always', type: 'application/x-shockwave-flash', pluginspage: 'http://get.adobe.com/flashplayer' });
                return s;
            },
            gethttpwavurl: function n() { var o = b.RecaptchaState; if (m.type == 'audio') { var p = o.server + "image?c=" + o.challenge; if (p.indexOf("https://") == 0) p = "http://" + p.substring(8); return p; } return ""; },
            checkFlashVer: function n() {
                var o = navigator.appVersion.indexOf("MSIE") != -1 ? true : false,
                    p = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? true : false,
                    q = navigator.userAgent.indexOf("Opera") != -1 ? true : false,
                    r = -1;
                if (navigator.plugins != null && navigator.plugins.length > 0) {
                    if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                        var s = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                            t = navigator.plugins["Shockwave Flash" + s].description,
                            u = t.split(" "),
                            v = u[2].split(".");
                        r = v[0];
                    }
                } else if (o && p && !q) try {
                    var w = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'),
                        x = w.GetVariable("$version");
                    r = x.split(" ")[1].split(",")[0];
                } catch (y) {}
                return r >= 9;
            },
            getLang: function n() { return k[c('CurrentLocale').get()] || 'en'; },
            createCaptcha: function n() {
                var o = {};
                if (l) o.callback = m.focus_response_field;
                setTimeout(function() { return m.create('captcha', o); }, 0);
            },
            createAudioCaptcha: function n() {
                setTimeout(function() {
                    m._init_options({});
                    m.audio_only = true;
                    m._call_challenge(c('CaptchaClientConfig').recaptchaPublicKey);
                }, 0);
            },
            logAction: function n(o) { new(c('AsyncRequest'))().setURI(c('XReCaptchaLogActionsController').getURIBuilder().getURI()).setData({ action: o, ua: navigator.userAgent, location: window.location.href }).setMethod('POST').setReadOnly(true).send(); }
        };
    f.exports = m;
    b.Recaptcha = m;
}), null);
__d('DeviceLoginTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() { this.clear(); }
    h.prototype.log = function() { c('GeneratedLoggerUtils').log('logger:DeviceLoginLoggerConfig', this.$DeviceLoginTypedLogger1, c('Banzai').BASIC); };
    h.prototype.logVital = function() { c('GeneratedLoggerUtils').log('logger:DeviceLoginLoggerConfig', this.$DeviceLoginTypedLogger1, c('Banzai').VITAL); };
    h.prototype.clear = function() { this.$DeviceLoginTypedLogger1 = {}; return this; };
    h.prototype.updateData = function(j) { this.$DeviceLoginTypedLogger1 = babelHelpers['extends']({}, this.$DeviceLoginTypedLogger1, j); return this; };
    h.prototype.setEvent = function(j) { this.$DeviceLoginTypedLogger1.event = j; return this; };
    h.prototype.setExceptionString = function(j) { this.$DeviceLoginTypedLogger1.exception_string = j; return this; };
    h.prototype.setPotentialAccountIds = function(j) { this.$DeviceLoginTypedLogger1.potential_account_ids = c('GeneratedLoggerUtils').serializeVector(j); return this; };
    h.prototype.setVC = function(j) { this.$DeviceLoginTypedLogger1.vc = j; return this; };
    var i = { event: true, exception_string: true, potential_account_ids: true, vc: true };
    f.exports = h;
}), null);
__d('LoginDeviceBasedTypedLogger', ['Banzai', 'GeneratedLoggerUtils', 'nullthrows'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() { this.clear(); }
    h.prototype.log = function() { c('GeneratedLoggerUtils').log('logger:LoginDeviceBasedLoggerConfig', this.$LoginDeviceBasedTypedLogger1, c('Banzai').BASIC); };
    h.prototype.logVital = function() { c('GeneratedLoggerUtils').log('logger:LoginDeviceBasedLoggerConfig', this.$LoginDeviceBasedTypedLogger1, c('Banzai').VITAL); };
    h.prototype.clear = function() { this.$LoginDeviceBasedTypedLogger1 = {}; return this; };
    h.prototype.updateData = function(j) { this.$LoginDeviceBasedTypedLogger1 = babelHelpers['extends']({}, this.$LoginDeviceBasedTypedLogger1, j); return this; };
    h.prototype.setAccountType = function(j) { this.$LoginDeviceBasedTypedLogger1.account_type = j; return this; };
    h.prototype.setError = function(j) { this.$LoginDeviceBasedTypedLogger1.error = j; return this; };
    h.prototype.setErrorClass = function(j) { this.$LoginDeviceBasedTypedLogger1.error_class = j; return this; };
    h.prototype.setErrorCode = function(j) { this.$LoginDeviceBasedTypedLogger1.error_code = j; return this; };
    h.prototype.setEvent = function(j) { this.$LoginDeviceBasedTypedLogger1.event = j; return this; };
    h.prototype.setEventSubtype = function(j) { this.$LoginDeviceBasedTypedLogger1.event_subtype = j; return this; };
    h.prototype.setFlow = function(j) { this.$LoginDeviceBasedTypedLogger1.flow = j; return this; };
    h.prototype.setNoncePresent = function(j) { this.$LoginDeviceBasedTypedLogger1.nonce_present = j; return this; };
    h.prototype.setNumAccounts = function(j) { this.$LoginDeviceBasedTypedLogger1.num_accounts = j; return this; };
    h.prototype.setNuxSource = function(j) { this.$LoginDeviceBasedTypedLogger1.nux_source = j; return this; };
    h.prototype.setPinPresent = function(j) { this.$LoginDeviceBasedTypedLogger1.pin_present = j; return this; };
    h.prototype.setPotentialAccountID = function(j) { this.$LoginDeviceBasedTypedLogger1.potential_account_id = j; return this; };
    h.prototype.setPotentialAccountIds = function(j) { this.$LoginDeviceBasedTypedLogger1.potential_account_ids = c('GeneratedLoggerUtils').serializeVector(j); return this; };
    h.prototype.setRememberThisDevice = function(j) { this.$LoginDeviceBasedTypedLogger1.remember_this_device = j; return this; };
    h.prototype.setShowNux = function(j) { this.$LoginDeviceBasedTypedLogger1.show_nux = j; return this; };
    h.prototype.setVC = function(j) { this.$LoginDeviceBasedTypedLogger1.vc = j; return this; };
    var i = { account_type: true, error: true, error_class: true, error_code: true, event: true, event_subtype: true, flow: true, nonce_present: true, num_accounts: true, nux_source: true, pin_present: true, potential_account_id: true, potential_account_ids: true, remember_this_device: true, show_nux: true, vc: true };
    f.exports = h;
}), null);
__d('DeviceBasedLoginForm', ['Event', 'tidyEvent'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        init: function i(j, k) {
            c('tidyEvent')(c('Event').listen(j, 'click', function(l) {
                l.preventDefault();
                k.submit();
            }));
        }
    };
    f.exports = h;
}), null);
__d('DeviceBasedLoginUserLoginDialog', ['Button', 'DOM', 'Event', 'tidyEvent'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        init: function i(j, k, l) { c('tidyEvent')(c('Event').listen(k, 'click', function(m) { j.hide(); })); if (l) j.subscribe('aftershow', function(m) { l && l.focus(); }); },
        setupDisablingButtonsOnSubmit: function i(j) {
            var k = j.dialog,
                l = j.loginForm;
            c('tidyEvent')(c('Event').listen(l, 'submit', function(m) {
                var n = c('DOM').scry(l, 'button');
                n.forEach(function(o) { c('Button').setEnabled(o, false); });
                k.subscribe('beforehide', function(o) { return false; });
            }));
        },
        initSavePasswordButton: function i(j, k) {
            c('tidyEvent')(c('Event').listen(j, 'click', function(l) {
                var m = c('DOM').find(k, 'input'),
                    n = j.form;
                l.preventDefault();
                m.checked = true;
                if (n) {
                    c('Event').fire(n, 'submit');
                    n.submit();
                }
            }));
        }
    };
    f.exports = h;
}), null);
__d('DeviceLoginUserAnimation', ['Arbiter', 'DeviceLoginTypedLogger', 'LoginDeviceBasedTypedLogger', 'Event', 'tidyEvent'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        init: function i(j, k, l, m) {
            c('tidyEvent')(c('Event').listen(k, 'click', function(n) {
                n.preventDefault();
                if (l) c('Arbiter').inform('account_switcher/user_clicked');
                var o = j.getAttribute('data-userid'),
                    p = [];
                p.push(parseInt(o, 10));
                new(c('DeviceLoginTypedLogger'))().setEvent('select_homepage_insert').setPotentialAccountIds(p).log();
                new(c('LoginDeviceBasedTypedLogger'))().setEvent('show_input_password').setAccountType('identifier_saved').setPotentialAccountID(parseInt(o, 10)).log();
                if (m) m.show();
            }));
        }
    };
    f.exports = h;
}), null);
__d('RegistrationAutoFocus', ['DOMQuery', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    var h = {
        regAutofocus: function i(j) {
            try {
                var k = c('DOMQuery').find(document.body, '[name="' + j + '"]');
                if (k) {
                    var l = c('getActiveElement')();
                    if (l && l !== document.body) l.blur();
                    k.focus();
                }
            } catch (m) {}
        }
    };
    f.exports = h;
}), null);
__d("XRegistrationFormLoggingController", ["XController"], (function a(b, c, d, e, f, g) { f.exports = c("XController").create("\/reg\/log\/", { action: { type: "String" }, reg_instance: { type: "String" }, category: { type: "Enum", enumType: 1 }, type: { type: "Enum", enumType: 1 }, field: { type: "Enum", enumType: 1 }, schema: { type: "String" }, page_number: { type: "Int" }, page_source: { type: "Enum", enumType: 1 } }); }), null);
__d('RegistrationLogger', ['AsyncSignal', 'RegistrationClientConfig', 'XRegistrationFormLoggingController'], (function a(b, c, d, e, f, g) {
    var h = {
        bumpInlineValidation: function i(j, k, l) {
            if (!c('RegistrationClientConfig').logging.enabled) return;
            var m = c('XRegistrationFormLoggingController').getURIBuilder().setEnum('category', c('RegistrationClientConfig').logging.categories.INLINE).setEnum('type', k).setEnum('field', j).setString('reg_instance', l).getURI();
            new(c('AsyncSignal'))(m.toString(), {}).setHandler(this.handleResponse).send();
        },
        logFormFocus: function i(j, k) {
            var l = c('XRegistrationFormLoggingController').getURIBuilder().setString('action', j).setString('reg_instance', k).getURI();
            new(c('AsyncSignal'))(l.toString(), {}).setHandler(this.handleResponse).send();
        },
        handleResponse: function i(j) {!j; }
    };
    f.exports = h;
}), null);
__d("StepResult", [], (function a(b, c, d, e, f, g) {
    var h = { NOT_STARTED: 0, SUCCESS: 1, FAILED: 2, SKIPPED: 3 };
    f.exports = h;
}), null);
__d('RegistrationValidatorsResult', ['RegistrationClientConfig', 'StepResult'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h() {
        this.isPasswordValid = false;
        this.isEmailValid = false;
        this.isEmailConfirmationValid = false;
        this.isSecondContactpointValid = false;
        this.firstInvalidValidator = null;
    }
    h.prototype.addValidation = function(i) { if (i.getFieldName() === c('RegistrationClientConfig').fields.PASSWORD && i.fieldIsValid()) { this.isPasswordValid = true; } else if (i.getFieldName() === c('RegistrationClientConfig').fields.EMAIL && i.fieldIsValid()) { this.isEmailValid = true; } else if (i.getFieldName() === c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION) { var j = i.stepLoggingTypes.indexOf(c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID); if (j != -1 && i.stepResults[j] === c('StepResult').SUCCESS) this.isEmailConfirmationValid = true; } else if (i.getFieldName() === c('RegistrationClientConfig').fields.SECOND_CONTACTPOINT && i.fieldIsValid()) this.isSecondContactpointValid = true; if (!this.hasInvalidValidator() && !i.fieldIsValid()) this.firstInvalidValidator = i; };
    h.prototype.$RegistrationValidatorsResult1 = function(i, j) { if (!i || !j) return false; for (var k = 0; k < j.length; k++) { var l = j[k]; if (l === i) return true; } return false; };
    h.prototype.hasInvalidValidator = function() { return this.firstInvalidValidator !== null; };
    h.prototype.getFirstInvalidValidator = function() { return this.firstInvalidValidator; };
    h.prototype.isEmailFieldValid = function() { return this.isEmailValid; };
    h.prototype.isEmailConfirmationFieldValid = function() { return this.isEmailConfirmationValid; };
    h.prototype.isSecondContactpointFieldValid = function() { return this.isSecondContactpointValid; };
    h.prototype.isPasswordFieldValid = function() { return this.isPasswordValid; };
    f.exports = h;
}), null);
__d("XRegistrationAttemptLoginController", ["XController"], (function a(b, c, d, e, f, g) { f.exports = c("XController").create("\/ajax\/registration\/maybelogin\/", { reg_email__: { type: "String" }, reg_email_confirmation__: { type: "String" }, reg_second_contactpoint__: { type: "String" }, reg_passwd__: { type: "String" } }); }), null);
__d('RegistrationController', ['cx', 'fbt', 'invariant', 'Promise', 'Animation', 'AsyncRequest', 'CSS', 'DataStore', 'DeferredCookie', 'DOM', 'Event', 'Focus', 'Form', 'HTML', 'Recaptcha', 'RegistrationClientConfig', 'RegistrationLogger', 'RegistrationValidatorsResult', 'StickyPlaceholderInput', 'Style', 'XRegistrationAttemptLoginController', '$', 'ge', 'goURI'], (function a(b, c, d, e, f, g, h, i, j) {
    var k = {
        init: function l(m) {
            this.captchaPaneShown = false;
            this.errorField = null;
            this.hasLoggedFocus = false;
            this.focusListeners = [];
            this.regForm = m.regForm;
            this.logFocusName = m.log_focus_name;
            this.responseCallback = this.handleResponse;
            this.tosContainerNode = m.tos_container;
            this.regPagesMsgNode = m.pages_link;
            this.captchaButtonsNode = m.captcha_buttons;
            this.regButton = m.regButton;
            this.captchaRegButton = m.captchaRegButton;
            this.asyncStatus = m.async_status;
            this.captchaAsyncStatus = m.captcha_async_status;
            this.confirmComponent = m.confirm_component;
            this.emailComponent = m.email_component;
            this.secondCPComponent = m.second_cp_component;
            this.passwordComponent = m.password_component;
            this.savePasswordNode = m.savePasswordNode;
            if (this.savePasswordNode) {
                this.submitFormURI = '/login/device-based/regular/register.php';
                this.savePasswordShown = c('CSS').shown(this.savePasswordNode);
            } else {
                this.submitFormURI = '/ajax/register.php';
                this.savePasswordShown = false;
            }
            this.characterThreshold = m.characterThreshold;
            this.errorMessageNewDesign = m.errorMessageNewDesign;
            this.showTooltips = m.show_tooltips;
            this.confirmContactpointBehavior = m.confirmContactpointBehavior;
            this.confirmContactpointShown = c('CSS').shown(this.confirmComponent);
            this.shouldShowConfirmationDialog = true;
            this.birthdayConfirmationDialog = m.birthdayConfirmationDialog;
            this.prefilledBirthday = m.prefilledBirthday;
            this.blockSubmitForm = false;
            this.initListeners(m.regButton, m.captchaRegButton, m.captchaBackButton, m.no_phone_reg_link, m.password_component);
            this.childValidators = this.childValidators || [];
            this.shownFlyout = this.shownFlyout || null;
            this.noPhoneRegLink = m.no_phone_reg_link;
            this.allowEmailRegDialog = m.allow_email_reg_dialog;
        },
        initListeners: function l(m, n, o, p, q) {
            this.focusListeners = [c('Event').listen(this.regForm, 'click', this.logFormFocus.bind(this)), c('Event').listen(this.regForm, 'keypress', this.logFormFocus.bind(this))];
            c('Event').listen(m, 'click', this.didAttemptFormSubmit.bind(this));
            c('Event').listen(n, 'click', this.didAttemptFormSubmit.bind(this));
            c('Event').listen(o, 'click', function() {
                this.hideCaptcha();
                this.showRegistrationPane();
            }.bind(this));
            if (p !== null) c('Event').listen(p, 'click', this.showCanUseEmail.bind(this));
            if (this.showTooltips) {
                var r = Object.keys(c('RegistrationClientConfig').tooltips);
                r.forEach(function(x) {
                    var y = this.getField(c('RegistrationClientConfig').fields[x]);
                    if (y) {
                        y.addEventListener('focus', function() { return this.fieldFocusListener(x); }.bind(this));
                        y.addEventListener('blur', function() { return this.fieldBlurListener(x); }.bind(this));
                    }
                }.bind(this));
            }
            if (this.confirmContactpointBehavior !== 'hide') {
                var s = this.getField(c('RegistrationClientConfig').fields.EMAIL),
                    t = this._getConfirmFieldTypeChangeListener();
                c('Event').listen(s, 'change', t);
                c('Event').listen(s, 'keyup', t);
            }
            this.birthdayConfirmationDialog.subscribe('confirm', function() {
                this.shouldShowConfirmationDialog = false;
                this.birthdayConfirmationDialog.hide();
                this.submitForm();
            }.bind(this));
            if (this.savePasswordNode) {
                var u = c('DOM').find(q, 'input'),
                    v = this._getPasswordInputChangeListener();
                c('Event').listen(u, 'keyup', v);
            }
            var w = this._getBirthdaySelectors();
            if (!w) return;
            c('Event').listen(w.day, 'focus', function() { this.shouldShowConfirmationDialog = false; }.bind(this));
            c('Event').listen(w.month, 'focus', function() { this.shouldShowConfirmationDialog = false; }.bind(this));
            c('Event').listen(w.year, 'focus', function() { this.shouldShowConfirmationDialog = false; }.bind(this));
        },
        _getConfirmFieldTypeChangeListener: function l() {
            var m = new(c('Animation'))(this.confirmComponent),
                n = /^(.+)@(.+)\.(.+)$/;
            c('Style').set(this.confirmComponent, 'opacity', 1e-5);
            return function(o) {
                if (n.test(o.target.value)) {
                    if (!this.confirmContactpointShown) {
                        this.confirmContactpointShown = true;
                        this._showWithAnimation(m, this.confirmComponent);
                    }
                } else if (this.confirmContactpointShown) {
                    this.confirmContactpointShown = false;
                    this._hideWithAnimation(m, this.confirmComponent);
                }
            }.bind(this);
        },
        _getPasswordInputChangeListener: function l() {
            var m = new(c('Animation'))(this.savePasswordNode),
                n = c('DOM').find(this.savePasswordNode, 'input');
            c('Style').set(this.savePasswordNode, 'opacity', this.savePasswordShown ? 1 : 1e-5);
            return function(o) {
                if (o.target.value.length >= this.characterThreshold)
                    if (!this.savePasswordShown) {
                        this.savePasswordShown = true;
                        n.checked = true;
                        this._showWithAnimation(m, this.savePasswordNode);
                    }
            }.bind(this);
        },
        _showWithAnimation: function l(m, n) { m.stop().show().duration(100).checkpoint().to('opacity', 1).ease(c('Animation').ease.end).duration(200).ondone(function() { c('CSS').addClass(n, "_5-ah"); }).go(); },
        _hideWithAnimation: function l(m, n) {
            c('CSS').removeClass(n, "_5-ah");
            m.stop().to('opacity', 1e-5).duration(200).ease(c('Animation').ease.end).checkpoint().duration(100).hide().go();
        },
        fieldFocusListener: function l(m) {
            var n = document.getElementById(c('RegistrationClientConfig').tooltips[m]);
            c('Style').set(n, 'visibility', 'visible');
            c('Style').set(n, 'opacity', '1');
        },
        fieldBlurListener: function l(m) {
            var n = document.getElementById(c('RegistrationClientConfig').tooltips[m]);
            c('Style').set(n, 'visibility', 'hidden');
            c('Style').set(n, 'opacity', '0');
        },
        didAttemptFormSubmit: function l() {
            c('DeferredCookie').flushAllCookies();
            this.validateForm();
        },
        validateForm: function l() {
            var m = this.childValidators.map(function(n) { return n.runAllValidations(); });
            c('Promise').all(m).done(function() { return this.submitForm(); }.bind(this), function() {
                var n = new(c('RegistrationValidatorsResult'))();
                for (var o = 0; o < this.childValidators.length; ++o) {
                    var p = this.childValidators[o];
                    n.addValidation(p);
                }
                this._maybeAttemptLogin(n);
                if (n.hasInvalidValidator()) n.getFirstInvalidValidator().focusField();
            }.bind(this));
        },
        _maybeAttemptLogin: function l(m) {
            var n = c('DOM').scry(this.emailComponent, 'input');
            if (this._isAnyArrayEmptyOrNull(n)) return;
            var o = n[0];
            if (!this._shouldExposeLoginWithOnlyCredentials(m, o.value)) return;
            var p = c('DOM').scry(this.confirmComponent, 'input'),
                q = c('DOM').scry(this.secondCPComponent, 'input'),
                r = c('DOM').scry(this.passwordComponent, 'input');
            if (this._isAnyArrayEmptyOrNull(p, q, r)) return;
            var s = p[0],
                t = q[0],
                u = r[0];
            c('DeferredCookie').flushAllCookies();
            var v = c('XRegistrationAttemptLoginController').getURIBuilder().setString(c('RegistrationClientConfig').fields.EMAIL, o.value).setString(c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION, s.value).setString(c('RegistrationClientConfig').fields.SECOND_CONTACTPOINT, t.value).setString(c('RegistrationClientConfig').fields.PASSWORD, u.value).getURI();
            new(c('AsyncRequest'))().setURI(v).send();
        },
        _isAnyArrayEmptyOrNull: function l() {
            for (var m = arguments.length, n = Array(m), o = 0; o < m; o++) n[o] = arguments[o];
            for (var p = n, q = Array.isArray(p), r = 0, p = q ? p : p[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var s;
                if (q) {
                    if (r >= p.length) break;
                    s = p[r++];
                } else {
                    r = p.next();
                    if (r.done) break;
                    s = r.value;
                }
                var t = s;
                if (t === null || t.length === 0) return true;
            }
            return false;
        },
        _shouldExposeLoginWithOnlyCredentials: function l(m, n) { if (!m.isPasswordFieldValid()) return false; if (m.isEmailFieldValid()) return true; if (m.isSecondContactpointFieldValid()) return true; var o = n === null || n.trim() === ''; return m.isEmailConfirmationFieldValid() && o || m.isSecondContactpointFieldValid(); },
        _removeFromIgnore: function l(m, n) { var o = m ? m.split('|') : []; return o.filter(function(p) { return p !== n; }).join('|'); },
        _addToIgnore: function l(m, n) { var o = m ? m.split('|') : []; return o.filter(function(p) { return p !== n; }).concat(n).join('|'); },
        _getBirthdaySelectors: function l() { var m = c('DOM').scry(this.regForm, 'select', null); if (m.length !== 3) { this.shouldShowConfirmationDialog = false; return null; } var n = { day: m.find(function(o) { return o.name === c('RegistrationClientConfig').fields.BIRTHDAY_DAY; }), month: m.find(function(o) { return o.name === c('RegistrationClientConfig').fields.BIRTHDAY_MONTH; }), year: m.find(function(o) { return o.name === c('RegistrationClientConfig').fields.BIRTHDAY_YEAR; }) }; return n; },
        _maybeShowBirthdayConfirmationDialog: function l() {
            if (!this.shouldShowConfirmationDialog) { this.blockSubmitForm = false; return; }
            var m = this._getBirthdaySelectors();
            if (!m) { this.blockSubmitForm = false; return; }
            if (m.day.value !== this.prefilledBirthday.day || m.month.value !== this.prefilledBirthday.month || m.year.value !== this.prefilledBirthday.year) { this.blockSubmitForm = false; return; }
            this.blockSubmitForm = true;
            this.birthdayConfirmationDialog.show();
        },
        submitForm: function l() {
            var m = c('Form').serialize(this.regForm);
            if (!this.captchaPaneShown) { m.ignore = this._addToIgnore(m.ignore, 'captcha'); } else this.disableMarketingButton(this.captchaRegButton);
            if (!this.confirmContactpointShown) { m.ignore = this._addToIgnore(m.ignore, c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION); } else m.ignore = this._removeFromIgnore(m.ignore, c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION);
            if (this._actionDialog) m.action_dialog_shown = true;
            if (this.errorField && c('ge')(this.errorField)) c('$')(this.errorField).setAttribute('title', '');
            this._maybeShowBirthdayConfirmationDialog();
            if (this.blockSubmitForm) return;
            c('CSS').show(this.asyncStatus);
            c('CSS').show(this.captchaAsyncStatus);
            if (this._actionDialog) {
                c('CSS').hide(this._actionDialogRegisterButton);
                c('CSS').show(this._actionDialogDisabledRegisterButton);
                c('CSS').hide(this._actionDialogRecoverButton);
                c('CSS').show(this._actionDialogDisabledRecoverButton);
                c('CSS').show(this._actionDialogRegisterAsyncStatus);
            }
            this.disableMarketingButton(this.regButton);
            new(c('AsyncRequest'))().setURI(this.submitFormURI).setData(m).setHandler(this.responseCallback.bind(this)).setErrorHandler(this.handleErrorResponse.bind(this)).send();
        },
        disableMarketingButton: function l(m) {
            m.disabled = true;
            c('CSS').addClass(m, "_67u");
        },
        enableMarketingButton: function l(m) {
            m.disabled = false;
            c('CSS').removeClass(m, "_67u");
        },
        handleErrorResponse: function l(m) {
            c('CSS').hide(this.asyncStatus);
            c('CSS').hide(this.captchaAsyncStatus);
            if (this._actionDialog) this._actionDialog.hide();
            this.enableMarketingButton(this.regButton);
            this.fadeInValidationError();
        },
        handleResponse: function l(m) {
            c('CSS').hide(this.asyncStatus);
            c('CSS').hide(this.captchaAsyncStatus);
            var n = m.getPayload();
            if (n.redirect) {
                c('CSS').show(this.captchaAsyncStatus);
                c('goURI')(n.redirect, true);
            } else if (n.field_validation_succeeded) { this.handleFieldValidationSucceeded(n); } else if (n.action_dialog_redirect) {
                c('CSS').show(this.asyncStatus);
                c('CSS').show(this.captchaAsyncStatus);
                c('goURI')(n.action_dialog_redirect, true);
            } else if (n.email_claiming_skip_to_recovery) {
                c('CSS').show(this.asyncStatus);
                c('CSS').show(this.captchaAsyncStatus);
            } else { this.enableMarketingButton(this.regButton); if (n.bad_captcha) { this.handleBadCaptcha(n); } else if (n.tooyoung) { this.handleTooYoung(n); } else if (n.tos_error) { this.handleTOSError(n); } else if (n.ask_to_login_instead) { var o = c('ge')('email'); if (o) o.value = n.ask_to_login_instead; var p = c('ge')('asked_to_login'); if (p) p.value = 1; } else if (!n.show_action_dialog) this.handleValidationError(n); }
        },
        handleValidationError: function l(m) {
            if (this.errorMessageNewDesign) {
                for (var n = 0; n < m.error_fields.length; n++) {
                    var o = m.error_fields[n],
                        p = m.error_messages[n];
                    this.showErrorMessage(o, p);
                }
            } else this.showValidationError(m.field, m.error);
        },
        showErrorMessage: function l(m, n) {
            var o = void 0,
                p = void 0;
            c('CSS').addClass(c('$')('reg_box'), "_1pc-");
            if (m === 'firstname' || m === 'lastname') {
                o = c('ge')('fullname_field');
                p = c('ge')('fullname_error_msg', o);
            } else {
                if (m === 'reg_passwd__') { o = c('ge')('password_field'); } else if (m === 'birthday_wrapper') o = document.getElementsByClassName("_58mq")[0];
                p = o.getElementsByClassName("_1pc_")[0];
            }
            var q = c('DOM').create('div', { className: "_1pd0" }, n);
            c('DOM').setContent(p, q);
            c('CSS').addClass(q, "_1pd0");
            var r = p.parentElement;
            c('CSS').addClass(r, "_5634");
            c('CSS').addClass(r, "_1pd1");
        },
        handleBadCaptcha: function l(m) {
            this.enableMarketingButton(this.captchaRegButton);
            c('DOM').setContent(c('$')('outer_captcha_box'), m.xhp);
            this.showCaptchaPane();
            this.showValidationError('captcha_response', m.error);
        },
        handleFieldValidationSucceeded: function l(m) {
            this.hideValidationError();
            this.showCaptchaPane();
        },
        handleTooYoung: function l(m) { c('DOM').setContent(this.regForm, m.xhp); },
        handleTOSError: function l(m) {
            this.showCaptchaPane();
            this.enableMarketingButton(this.captchaRegButton);
            this.showValidationError('captcha_response', m.error);
        },
        showActionDialog: function l(m, n, o, p, q, r) {
            this._actionDialog = m;
            this._actionDialogRegisterButton = n;
            this._actionDialogDisabledRegisterButton = o;
            this._actionDialogRegisterAsyncStatus = p;
            this._actionDialogRecoverButton = q;
            this._actionDialogDisabledRecoverButton = r;
            m.subscribe('hide', this.hideActionDialog.bind(this));
            m.subscribe('button', this.didAttemptFormSubmit.bind(this));
            m.show();
        },
        hideActionDialog: function l() {
            this._actionDialog = null;
            this._actionDialogRegisterButton = null;
            this._actionDialogDisabledRegisterButton = null;
            this._actionDialogRegisterAsyncStatus = null;
            this._actionDialogRecoverButton = null;
            this._actionDialogDisabledRecoverButton = null;
        },
        doEmailClaimingSkipToRecovery: function l(m, n, o) {
            var p = 'send_email';
            if (!o) p = 'send_sms';
            var q = { recover_method: p, selected_cuid: m, ctx: 'reg_email_claim', redirect_to_full_page_on_captcha: '1', reg_instance: n };
            new(c('AsyncRequest'))().setURI('/ajax/recover/initiate').setReadOnly(false).setMethod('POST').setData(q).setErrorHandler(this.handleSkipToRecoveryResponse.bind(this)).send();
        },
        handleSkipToRecoveryResponse: function l(m) {
            c('CSS').hide(this.asyncStatus);
            c('CSS').hide(this.captchaAsyncStatus);
            if (this._actionDialog) this._actionDialog.hide();
            this.enableMarketingButton(this.regButton);
        },
        showCaptchaPane: function l() {
            c('CSS').hide(c('$')('reg_form_box'));
            var m = c('$')('captcha'),
                n = c('DataStore').get(m, 'captcha-class', 'FacebookCaptcha');
            if (n == 'ReCaptchaCaptcha') { c('Recaptcha').createCaptcha(); }
            c('CSS').show(c('$')('reg_captcha'));
            c('CSS').show(this.tosContainerNode);
            c('CSS').hide(this.regPagesMsgNode);
            c('CSS').show(this.captchaButtonsNode);
            try { c('ge')('captcha_response').focus(); } catch (o) {}
            this.captchaPaneShown = true;
        },
        hideCaptcha: function l() {
            c('ge')('reg_captcha') && c('CSS').hide(c('$')('reg_captcha'));
            c('CSS').hide(this.tosContainerNode);
            c('CSS').hide(this.captchaButtonsNode);
            this.hideValidationError();
            this.captchaPaneShown = false;
        },
        showValidationError: function l(m, n) {
            c('CSS').hide(this.regPagesMsgNode);
            if (this._actionDialog) this._actionDialog.hide();
            this.hideValidationError();
            var o = c('$')('reg_error_inner');
            if (!m) m = c('ge')('name') ? 'name' : 'firstname';
            this.errorField = m;
            try {
                c('$')(m).setAttribute('title', n.replace(/<.+?>/g, ''));
                c('$')(m).focus();
            } catch (p) {}
            c('DOM').setContent(o, c('HTML')(n));
            this.fadeInValidationError();
        },
        fadeInValidationError: function l() {
            var m = c('$')('reg_error');
            c('Style').set(m, 'opacity', 0);
            new(c('Animation'))(m).show().to('height', 'auto').duration(100).checkpoint().from('opacity', 0).to('opacity', 1).duration(400).go();
            c('Focus').set(m);
        },
        hideValidationError: function l() { if (c('CSS').shown(c('$')('reg_error')) && c('Style').getOpacity(c('$')('reg_error')) > 0) c('CSS').hide(c('$')('reg_error')); },
        showRegistrationPane: function l() {
            c('CSS').show(c('$')('reg_form_box'));
            c('CSS').show(this.regPagesMsgNode);
        },
        logFormFocus: function l() {
            if (this.hasLoggedFocus) return;
            var m = this.logFocusName,
                n = this.regForm.reg_instance && this.regForm.reg_instance.value;
            c('RegistrationLogger').logFormFocus(m, n);
            this.hasLoggedFocus = true;
            this.focusListeners.forEach(function(o) { o.remove(); });
            this.focusListeners = [];
        },
        getField: function l(m) { this.regForm || j(0); return this.regForm[m]; },
        getRegInstance: function l() { var m = this.getField('reg_instance'); return m && m.value; },
        enrollChildValidator: function l(m) {
            this.childValidators = this.childValidators || [];
            this.childValidators.push(m);
            if (m.addListener) {
                m.addListener('show', function(n) {
                    if (this.shownFlyout) this.shownFlyout.hide();
                    n.show();
                    this.shownFlyout = n;
                }, this);
                m.addListener('hide', function(n) { n.hide(); }, this);
            }
        },
        showCanUseEmail: function l() {
            var m = this.emailComponent.firstChild.firstChild,
                n = i._("Mobilnummer eller e-mail"),
                o = this.confirmComponent.firstChild.firstChild,
                p = i._("Indtast mobilnummeret eller e-mailen igen");
            c('DOM').remove(this.noPhoneRegLink);
            c('StickyPlaceholderInput').setPlaceholderText(m, n.toString());
            c('StickyPlaceholderInput').setPlaceholderText(o, p.toString());
            if (this.allowEmailRegDialog !== null) this.allowEmailRegDialog.show();
        }
    };
    f.exports = k;
}), null);
__d('RegistrationFieldValidator', ['csx', 'cx', 'invariant', 'ContextualDialog', 'CSS', 'Deferred', 'DOMQuery', 'ErrorContextualDialogXUITheme', 'Event', 'EventEmitter', 'Focus', 'LayerAutoFocus', 'LayerRefocusOnHide', 'Parent', 'RegistrationClientConfig', 'RegistrationController', 'RegistrationLogger', 'StepResult', 'ge', 'getActiveElement', 'getOrCreateDOMID', 'DOM'], (function a(b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k, l;
    k = babelHelpers.inherits(m, c('EventEmitter'));
    l = k && k.prototype;

    function m(n, o, p, q, r, s) {
        l.constructor.call(this);
        this.maybeShowPersistent = function() { c('CSS').conditionClass(this.wrapper, "_5634", !this.isFocused() && !this.isValid); }.bind(this);
        this.maybeShowErrorMessage = function() {
            if (this.validationType !== 'inline_design') return;
            var t = c('Parent').bySelector(this.wrapper, "._1ixn"),
                u = null,
                v = this.wrapper.getElementsByClassName("_1pc_");
            if (v.length >= 1) u = v[0];
            if (!u) return;
            c('DOM').setContent(u, this.errMsg);
            c('CSS').conditionClass(this.wrapper, "_5634", !this.isValid);
            c('CSS').conditionClass(this.wrapper, "_1pd1", !this.isValid);
            c('CSS').conditionClass(this.wrapper, "_32nt", this.isValid);
        }.bind(this);
        this.maybeDismissFlyout = function() {
            if (this.isValid) {
                this.dismissFlyout();
                this.field.removeAttribute('aria-invalid');
                this.field.removeAttribute('aria-describedby');
            }
            if (this.validationType === 'flyout_with_checkmark') c('CSS').conditionClass(this.wrapper, "_32nt", this.isValid);
        }.bind(this);
        this.wrapper = n;
        this.field = o;
        this.position = p;
        this.fieldType = q;
        this.inputs = r;
        this.validationType = s;
        this.flyout = null;
        this.steps = [];
        this.stepContexts = [];
        this.stepMarkups = [];
        this.stepLoggingTypes = [];
        this.stepResults = [];
        this.stepArgs = [];
        this.isValid = true;
        this.errMsg = null;
        this.stepCounter = null;
        this.stepProgress = null;
        c('RegistrationController').enrollChildValidator(this);
        this.addListener('validated', this.maybeShowPersistent, this);
        this.addListener('validated', this.maybeShowErrorMessage, this);
        this.addListener('validated', this.maybeDismissFlyout, this);
        this.setupListenersForField();
        this.setupListenersForFeedbackIcon("._5dbc");
        this.setupListenersForFeedbackIcon("._5dbd");
    }
    m.prototype.setupListenersForField = function() {
        c('Event').listen(this.field, 'focus', this.dismissPersistent.bind(this));
        c('Event').listen(this.field, 'focus', this.maybeShowFlyout.bind(this));
        c('Event').listen(this.field, 'blur', this.dismissFlyout.bind(this));
        c('Event').listen(this.field, 'blur', this.validateField.bind(this, 0, []));
    };
    m.prototype.setupListenersForFeedbackIcon = function(n) { var o = c('DOMQuery').scry(this.wrapper, n); for (var p = 0; p < o.length; p++) c('Event').listen(o[p], 'click', this.focusField.bind(this)); };
    m.prototype.getField = function() { return this.field; };
    m.prototype.getFieldName = function() { return this.field.name; };
    m.prototype.getFlyoutContext = function() { return this.field; };
    m.prototype.addValidationStep = function(n, o, p, q) {
        this.stepMarkups.push(o);
        this.stepLoggingTypes.push(n);
        this.steps.push(p);
        this.stepResults.push(c('StepResult').NOT_STARTED);
        this.stepContexts.push(q);
        this.stepArgs.push(Array.prototype.slice.call(arguments, 4));
    };
    m.prototype.validateField = function(n, o) {
        if (this.stepCounter === null && n === 0) {
            this.stepProgress === null || j(0);
            this.errMsg = null;
            this.stepCounter = 0;
            this.stepProgress = new(c('Deferred'))();
        } else if (this.stepCounter !== null && this.stepCounter + 1 === n) { this.stepCounter = n; } else return;
        0 <= this.stepCounter || j(0);
        this.stepCounter <= this.steps.length || j(0);
        this.stepProgress !== null || j(0);
        if (this.stepCounter < this.steps.length) {
            n = this.stepCounter;
            if (o.indexOf(this.stepLoggingTypes[n]) >= 0) {
                this.stepResults[n] = c('StepResult').SKIPPED;
                this.validateField(n + 1, o);
            } else {
                var p = this.steps[n].apply(this.stepContexts[n], [this.getField()].concat(this.stepArgs[n]));
                p.done(function() {
                    this.stepResults[n] = c('StepResult').SUCCESS;
                    this.validateField(n + 1, o);
                }.bind(this), function() {
                    this.stepResults[n] = c('StepResult').FAILED;
                    this.$RegistrationFieldValidator1();
                }.bind(this));
                this.errMsg = this.stepMarkups[this.stepCounter].cloneNode(true);
            }
        } else {
            this.isValid = true;
            this.emit('validated', true);
            this.stepProgress.resolve();
            this.stepCounter = null;
            this.stepProgress = null;
        }
    };
    m.prototype.$RegistrationFieldValidator1 = function(n) {
        this.isValid = false;
        var o = this.stepMarkups[this.stepCounter].cloneNode(true),
            p = this.stepLoggingTypes[this.stepCounter];
        if (!this.flyout) { this.flyout = new(c('ContextualDialog'))({ context: this.getFlyoutContext(), position: this.position, theme: c('ErrorContextualDialogXUITheme') }, o).disableBehavior(c('LayerAutoFocus')).disableBehavior(c('LayerRefocusOnHide')); } else this.flyout.setInnerContent(o);
        this.stepCounter = null;
        this.emit('validated', false);
        this.stepProgress.reject();
        this.stepProgress = null;
        var q = c('RegistrationController').getRegInstance();
        c('RegistrationLogger').bumpInlineValidation(this.getFieldName(), p, q);
        this.field.setAttribute('aria-describedby', c('getOrCreateDOMID')(o));
    };
    m.prototype.runAllValidations = function() { this.validateField(0, []); return this.stepProgress.getPromise(); };
    m.prototype.isFocused = function() { return c('getActiveElement')() === this.field; };
    m.prototype.focusField = function() { c('Focus').set(this.field); };
    m.prototype.fieldIsValid = function() { return this.isValid; };
    m.prototype.maybeShowFlyout = function() {
        if (this.validationType !== 'inline_design')
            if (this.isFocused() && !this.isValid) {
                this.flyout || j(0);
                this.emit('show', this.flyout);
                this.field.setAttribute('aria-invalid', 'true');
            }
    };
    m.prototype.dismissPersistent = function() {
        var n = c('Parent').bySelector(this.wrapper, "._1ixn");
        if (n) c('CSS').removeClass(n, "_5634");
        c('CSS').removeClass(this.wrapper, "_5634");
    };
    m.prototype.dismissFlyout = function() { if (this.flyout) this.emit('hide', this.flyout); };
    f.exports = m;
}), null);
__d('RegistrationGenderPronounWarning', ['fbt', 'CSS', 'DOM', 'Event', 'GenderConst', 'RegistrationClientConfig', 'UsernameFormatToken'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = void 0,
        j = void 0,
        k = '',
        l = '';

    function m() {
        if (!i) return;
        var o = j.replace(c('UsernameFormatToken').FIRST, k).replace(c('UsernameFormatToken').LAST, l).trim(),
            p = void 0;
        if (o.length) { p = h._("Andre vil se dit pronomen som \"vedkommende\". Eksempel: \"Det er {name}s f\u00f8dselsdag. \u00d8nsk vedkommende tillykke med f\u00f8dselsdagen!\"", [h.param('name', o)]); } else p = h._("Andre vil se dit pronomen som \"vedkommende\". Eksempel: \"Det er vedkommendes f\u00f8dselsdag. \u00d8nsk vedkommende tillykke med f\u00f8dselsdagen!\"");
        c('DOM').setContent(i, p);
    }
    var n = {
        registerSelector: function o(p, q, r) {
            i = q;
            j = r;
            m();
            c('Event').listen(p, 'change', function() {
                m();
                c('CSS').conditionShow(q, p.value === '' + c('GenderConst').NEUTER_SINGULAR);
            });
        },
        registerNameInput: function o(p, q) {
            c('Event').listen(q, 'input', function() {
                if (p === c('RegistrationClientConfig').fields.FIRSTNAME) { k = q.value; } else if (p === c('RegistrationClientConfig').fields.LASTNAME) l = q.value;
                m();
            });
        }
    };
    f.exports = n;
}), null);
__d('RegistrationMultipleInputValidator', ['invariant', 'DataStore', 'DOM', 'Event', 'Focus', 'RegistrationClientConfig', 'RegistrationFieldValidator', 'getActiveElement'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i, j;
    i = babelHelpers.inherits(k, c('RegistrationFieldValidator'));
    j = i && i.prototype;

    function k(l, m, n, o, p) {
        var q = void 0;
        switch (o) {
            case c('RegistrationClientConfig').validators.types.SELECTORS:
                q = 'select';
                break;
            case c('RegistrationClientConfig').validators.types.RADIO:
                q = 'input[type="radio"]';
                break;
            default:
                h(0);
        }
        var r = [],
            s = c('DOM').scry(m, q);
        r.push.apply(r, s);
        r.length === p || h(0);
        j.constructor.call(this, l, m, n, o, r);
    }
    k.prototype.setupListenersForField = function() {
        this.inputs != null || h(0);
        this.inputs.forEach(function(l) {
            c('Event').listen(l, 'focus', this.dismissPersistent.bind(this));
            c('Event').listen(l, 'focus', this.maybeShowFlyout.bind(this));
            if (this.fieldType === c('RegistrationClientConfig').validators.types.RADIO) { c('Event').listen(l, 'click', function() { this.emit('fieldblur'); }.bind(this)); } else c('Event').listen(l, 'blur', function() { setTimeout(function m() { if (!this.isFocused()) this.emit('fieldblur'); }.bind(this), 0); }.bind(this));
        }, this);
        this.addListener('fieldblur', this.dismissFlyout, this);
        this.addListener('fieldblur', this.validateField.bind(this, 0, []));
    };
    k.prototype.getField = function() { return this.inputs; };
    k.prototype.getFieldName = function() { return c('DataStore').get(this.field, 'name'); };
    k.prototype.getFlyoutContext = function() { return this.inputs[0]; };
    k.prototype.isFocused = function() {
        var l = c('getActiveElement')();
        for (var m = 0; m < this.inputs.length; m++)
            if (this.inputs[m] === l) return true;
        return false;
    };
    k.prototype.focusField = function() { c('Focus').set(this.inputs[0]); };
    f.exports = k;
}), null);
__d("XRegistrationValidateController", ["XController"], (function a(b, c, d, e, f, g) { f.exports = c("XController").create("\/ajax\/registration\/validation\/{type}\/", { type: { type: "Enum", required: true, enumType: 1 }, contactpoint: { type: "String" } }); }), null);
__d('RegistrationInlineValidations', ['invariant', 'Promise', 'regeneratorRuntime', 'AsyncRequest', 'DataStore', 'RegistrationClientConfig', 'RegistrationController', 'RegistrationFieldValidator', 'RegistrationMultipleInputValidator', 'XRegistrationValidateController'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = [];

    function j(y) { return new(c('Promise'))(function(z, aa) { if (!y.value || /^\s*$/.exec(y.value)) { aa(); } else z(); }); }

    function k(y) {
        return c('regeneratorRuntime').async(function z(aa) {
            while (1) switch (aa.prev = aa.next) {
                case 0:
                    if (c('RegistrationController').confirmContactpointShown) { aa.next = 2; break; }
                    return aa.abrupt('return');
                case 2:
                    aa.next = 4;
                    return c('regeneratorRuntime').awrap(j(y));
                case 4:
                case 'end':
                    return aa.stop();
            }
        }, null, this);
    }

    function l(y) {
        return new(c('Promise'))(function(z, aa) {
            var ba = {},
                ca = {};
            for (var da = 0; da < y.length; da++) { var ea = y[da]; if (ea.nodeName === 'SELECT') { if (!ea.value || ea.value === '0') { aa(); return; } } else if (ea.nodeName === 'INPUT' && ea.type === 'radio') { ba[ea.name] = true; if (ea.checked) ca[ea.name] = true; } else h(0); }
            if (Object.keys(ba).length === Object.keys(ca).length) { z(); } else aa();
        });
    }
    var m = /@|\d/;

    function n(y) {
        return new(c('Promise'))(function(z, aa) {
            function ba(ea) { var fa = ea.getPayload(); if (fa.valid === true) { z(); } else aa(); }

            function ca(ea) { z(); }
            if (!m.exec(y.value)) { aa(); } else {
                var da = c('XRegistrationValidateController').getURIBuilder().setEnum('type', c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID).setString('contactpoint', y.value).getURI();
                new(c('AsyncRequest'))().setURI(da).setMethod('GET').setReadOnly(true).setHandler(ba).setErrorHandler(ca).send();
            }
        });
    }

    function o(y) {
        return c('regeneratorRuntime').async(function z(aa) {
            while (1) switch (aa.prev = aa.next) {
                case 0:
                    if (c('RegistrationController').confirmContactpointShown) { aa.next = 2; break; }
                    return aa.abrupt('return');
                case 2:
                    aa.next = 4;
                    return c('regeneratorRuntime').awrap(n(y));
                case 4:
                case 'end':
                    return aa.stop();
            }
        }, null, this);
    }

    function p(y, z) { return new(c('Promise'))(function(aa, ba) { var ca = c('RegistrationController').getField(z); if (ca.value === y.value) { aa(); } else ba(); }); }

    function q(y, z) {
        return c('regeneratorRuntime').async(function aa(ba) {
            while (1) switch (ba.prev = ba.next) {
                case 0:
                    if (c('RegistrationController').confirmContactpointShown) { ba.next = 2; break; }
                    return ba.abrupt('return');
                case 2:
                    ba.next = 4;
                    return c('regeneratorRuntime').awrap(p(y, z));
                case 4:
                case 'end':
                    return ba.stop();
            }
        }, null, this);
    }

    function r(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.INCORRECT_NAME;
        y.addValidationStep(z, aa, j);
    }

    function s(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.INCORRECT_CONTACTPOINT;
        y.addValidationStep(z, aa, j);
        z = c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID;
        aa = c('RegistrationClientConfig').messages.INVALID_NUMBER_OR_EMAIL;
        y.addValidationStep(z, aa, n);
    }

    function t(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.INCORRECT_EMAIL_CONF;
        y.addValidationStep(z, aa, k);
        z = c('RegistrationClientConfig').logging.types.CONTACTPOINT_INVALID;
        aa = c('RegistrationClientConfig').messages.INVALID_EMAIL;
        y.addValidationStep(z, aa, o);
        z = c('RegistrationClientConfig').logging.types.CONTACTPOINT_MATCH;
        aa = c('RegistrationClientConfig').messages.EMAIL_RETYPE_DIFFERENT;
        var ba = c('RegistrationClientConfig').fields.EMAIL;
        y.addValidationStep(z, aa, q, null, ba);
    }

    function u(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.PASSWORD_BLANK;
        y.addValidationStep(z, aa, j);
    }

    function v(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.INCOMPLETE_BIRTHDAY;
        y.addValidationStep(z, aa, l);
    }

    function w(y) {
        var z = c('RegistrationClientConfig').logging.types.IS_EMPTY,
            aa = c('RegistrationClientConfig').messages.NO_GENDER;
        y.addValidationStep(z, aa, l);
    }

    function x(y, z, aa, ba, ca) {
        var da = null,
            ea = c('DataStore').get(z, 'type');
        switch (ea) {
            case c('RegistrationClientConfig').validators.types.TEXT:
                da = new(c('RegistrationFieldValidator'))(y, z, aa, null, null, ba);
                break;
            case c('RegistrationClientConfig').validators.types.SELECTORS:
                var fa = c('DataStore').get(z, 'name'),
                    ga = fa === c('RegistrationClientConfig').fields.BIRTHDAY_WRAPPER ? 3 : fa === c('RegistrationClientConfig').fields.GENDER_WRAPPER ? 1 : h(false, 'Unexpected name %s for SELECTORS', fa);
                da = new(c('RegistrationMultipleInputValidator'))(y, z, aa, ea, ga, ba);
                break;
            case c('RegistrationClientConfig').validators.types.RADIO:
                var ha = 2;
                da = new(c('RegistrationMultipleInputValidator'))(y, z, aa, ea, ha, ba);
                break;
            default:
                h(0);
        }
        switch (da.getFieldName()) {
            case c('RegistrationClientConfig').fields.FIRSTNAME:
            case c('RegistrationClientConfig').fields.LASTNAME:
                r(da);
                break;
            case c('RegistrationClientConfig').fields.EMAIL:
            case c('RegistrationClientConfig').fields.SECOND_CONTACTPOINT:
                s(da);
                break;
            case c('RegistrationClientConfig').fields.EMAIL_CONFIRMATION:
                t(da);
                break;
            case c('RegistrationClientConfig').fields.PASSWORD:
                u(da);
                break;
            case c('RegistrationClientConfig').fields.BIRTHDAY_WRAPPER:
                v(da);
                break;
            case c('RegistrationClientConfig').fields.GENDER_WRAPPER:
                w(da);
                break;
            default:
                h(0);
        }
    }
    f.exports = f.exports || {};
    f.exports.register = x;
}), null);
__d('useragentcm', ['Bootloader', 'UACMConfig', 'ge'], (function a(b, c, d, e, f, g) {
    function h() {
        var i = false,
            j = { ffid: typeof c('UACMConfig').ffid == "undefined" ? 0 : c('UACMConfig').ffid, ffid1: typeof c('UACMConfig').ffid1 == "undefined" ? 0 : c('UACMConfig').ffid1, ffid2: typeof c('UACMConfig').ffid2 == "undefined" ? 0 : c('UACMConfig').ffid2, ffid3: typeof c('UACMConfig').ffid3 == "undefined" ? 0 : c('UACMConfig').ffid3, ffid4: typeof c('UACMConfig').ffid4 == "undefined" ? 0 : c('UACMConfig').ffid4, ffver: typeof c('UACMConfig').ffver == "undefined" ? 0 : c('UACMConfig').ffver };
        j.qp = document.location;
        var k = c('ge')('login_form');
        if (k && k.action) j.qm = k.action;
        var l = '\x66\x61\x63\x65\x62\x6f\x6f\x6b',
            m = new RegExp('(^|\\.)' + l + '\\.com$', 'i').test(document.location.hostname);
        if (!m) { i = true; } else if (j.qm) {
            var n = j.qm.split('?')[0].split('#')[0],
                o = 65535;
            for (var p = 0; p < n.length; p++) {
                var q = (o >> 8 ^ n.charCodeAt(p)) & 255;
                q ^= q >> 4;
                o = (o << 8 ^ q << 12 ^ q << 5 ^ q) & 65535;
            }
            if (c('UACMConfig').ffver && c('UACMConfig').ffver != o) i = true;
        }
        if (i) {
            var r = document.location.protocol + '//www.' + l + '.com/ajax/ua_callback.php';
            if (document.referrer) j.qr1 = document.referrer;
            c('Bootloader').loadModules(["AsyncSignal"], function(s) { new s(r, j).send(); }, 'useragentcm');
        }
    }
    f.exports = h;
}), null);
__d('legacy:si-countermeasures', ['useragentcm'], (function a(b, c, d, e, f, g) { b.useragentcm = c('useragentcm'); }), 3);