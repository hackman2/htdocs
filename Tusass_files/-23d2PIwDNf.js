if (self.CavalryLogger) {
    CavalryLogger.start_js(["S28rQ"]);
}

__d("MercuryParticipantTypes", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        USER: "user",
        THREAD: "thread",
        EVENT: "event",
        PAGE: "page",
        FRIEND: "friend",
        FB4C: "fb4c",
        NON_FRIEND: "non_friend",
        SERVICE: "service"
    };
}), null);
__d("ProfileOverviewDOMID", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        MEDLEY_ROOT: "timeline-medley",
        PREFIX_APP_COLLECTION: "pagelet_timeline_app_collection_",
        PREFIX_COLLECTION_WRAPPER: "collection_wrapper_",
        PREFIX_MEDLEY: "pagelet_timeline_medley_",
        PREFIX_MEDLEY_HEADER: "medley_header_",
        PREFIX_RECOMMENDATION: "pagelet_recommendation_"
    };
}), null);
__d("ProfileSubFollowStatus", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        REGULAR_FOLLOW: "follow",
        RECAP: "recap",
        SEE_FIRST: "see_first",
        SUBSCRIBE_ALL_LIVE_NOTIFICATIONS: "subscribe_all_live_notifications",
        SUBSCRIBE_SUGGESTED_LIVE_NOTIFICATIONS: "subscribe_suggested_live_notifications",
        SUBSCRIBE_NONE_LIVE_NOTIFICATIONS: "subscribe_none_live_notifications",
        UNFOLLOW: "unfollow"
    };
}), null);
__d("ProfileTabConst", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        ALBUM: "album",
        ALBUMS: "albums",
        ALBUMS_ALL: "albums_all",
        ALBUMS_FEATURED: "albums_featured",
        ALL_ACTIVITY: "allactivity",
        APPROVAL: "approve",
        APPS: "apps",
        BOXES: "box_3",
        COMMERCE: "shop",
        DEALS: "deals",
        DRAFT_NOTES: "notes_drafts",
        EVENTS: "events",
        FAVORITES: "favorites",
        FUNDRAISERS: "fundraisers",
        FOLLOWERS: "followers",
        FOLLOWING: "following",
        FRIENDS: "friends",
        FRIENDS_MUTUAL: "friends_mutual",
        GROUPS: "groups",
        GROUPS_MUTUAL: "groups_mutual",
        INFO: "info",
        LIKES: "likes",
        LOCATIONS: "locations",
        MAP: "map",
        MEMORIAL_CONTACT: "legacy_contact",
        MY_NOTES: "notes_my_notes",
        NEARBY: "nearby",
        NOTES: "notes",
        OVERVIEW: "about",
        PAST_EVENTS: "pe",
        PERSONALITY_QUESTIONS: "personality_questions",
        PHOTOS: "photos",
        PHOTOS_ALBUM: "media_set",
        PHOTOS_ALBUMS: "photos_albums",
        PHOTOS_BY_OTHERS: "photos_by_others",
        PHOTOS_STREAM: "photos_stream",
        PHOTOS_SYNCED: "photos_synced",
        POSTS: "posts",
        POSTS_OTHERS: "posts_to_page",
        RESUME: "resume",
        REVIEWS: "reviews",
        SAVE_LISTS: "lists",
        SAVED_FOR_LATER: "saved",
        SPORTS: "sports",
        TAGGED_NOTES: "notes_tagged",
        TASKS: "tasks",
        TIMELINE: "timeline",
        VIDEOS: "videos",
        WALL: "wall",
        WALL_ADMIN: "wall_admin",
        WIKIPEDIA: "wiki",
        PAGE_GETTING_STARTED: "page_getting_started",
        PAGE_MAP: "page_map",
        PAGE_MENU: "menu",
        PAGE_BOOK_PREVIEW: "book_preview",
        PAGE_PRODUCTS: "products",
        PAGE_SERVICES: "services",
        PAGES_CONTENT_TAB: "content_tab",
        PAGE_FAN_QUESTIONS: "questions",
        PAGES_REACTION_SANDBOX: "reaction_sandbox",
        PAGE_OFFERS: "offers",
        PAGE_JOB_PERMALINK: "page_job_permalink",
        HOME: "home",
        ENDORSEMENTS: "endorsements",
        ISSUES: "issues",
        PAGE_JOBS: "jobs",
        PAGE_LIVE_VIDEOS: "live_videos",
        PAGE_EPISODES: "episodes",
        PAGE_SHOW: "show",
        PAGE_PLAYLISTS: "playlists",
        PAGE_SHOW_VIDEOS: "show_videos",
        OG_APP_URL_PREFIX: "app_",
        OG_APPID_PREFIX: "og_app_",
        OG_NAMESPACE_PREFIX: "og_ns_",
        OG_BOOKS: "books",
        OG_FITNESS: "fitness",
        OG_GAMES: "games",
        OG_MOVIES: "movies",
        OG_MUSIC: "music",
        OG_NEWS: "news",
        OG_TV_SHOWS: "tv",
        OG_VIDEO: "video"
    };
}), null);
__d("SyncRequestStatusEnum", [], (function a(b, c, d, e, f, g) {
    f.exports = {
        PENDING: 0,
        ACCEPTED: 1,
        REJECTED: 2,
        EXPIRED: 3,
        CANCELED: 4,
        namesByValue: ["PENDING", "ACCEPTED", "REJECTED", "EXPIRED", "CANCELED"]
    };
}), null);
__d("InstanceProxy", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        "use strict";
        this.$InstanceProxy1 = i;
    }
    h.prototype.getInstance = function () {
        "use strict";
        return this.$InstanceProxy1;
    };
    h.prototype.setInstance = function (i) {
        "use strict";
        this.$InstanceProxy1 = i;
    };
    f.exports = h;
}), null);
__d('idx', [], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(n, o) {
        try {
            return o(n);
        } catch (p) {
            if (p instanceof TypeError)
                if (j(p)) {
                    return null;
                } else if (l(p)) return undefined;
            throw p;
        }
    }
    var i = void 0;

    function j(n) {
        var o = n.message;
        if (!i) i = m(null);
        return i.test(o);
    }
    var k = void 0;

    function l(n) {
        var o = n.message;
        if (!k) k = m(undefined);
        return k.test(o);
    }
    var m = new Function('$object$', '\n  try {\n    $object$.$property$;\n  } catch (error) {\n    return new RegExp(\n      error.message\n        .replace(/[-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, \'\\\\$&\')\n        .replace(\'\\\\$object\\\\$\', \'.+\')\n        .replace(\'\\\\$property\\\\$\', \'.+\')\n    );\n  }\n  throw new Error(\'Expected property access on \' + $object$ + \' to throw.\');\n');
    f.exports = h;
}), null);
__d('CSSFade', ['cx', 'CSS', 'DataStore', 'Event', 'idx', 'Style'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = 'css-fade-animation',
        j = 'css-show-animation',
        k = "_4rh4",
        l = 'CSSFade_hide',
        m = 'CSSFade_show',
        n = document.body.animate !== undefined,
        o = {
            cancel: function u() {}
        };

    function p(u, v) {
        var w = c('DataStore').get(u, v);
        if (w) w.cancel();
        return w;
    }

    function q(u, v, w) {
        var x, y = ((x = u) != null ? (x = x.style) != null ? x.animation : x : x) || '',
            z = v + 's ' + w;
        if (y.length > 5) z = y.slice(0, -1) + (', ' + z);
        return z;
    }

    function r(u, v) {
        var w, x = ((w = u) != null ? (w = w.style) != null ? w.animation : w : w) || '',
            y = x.split(','),
            z = y.findIndex(function (aa) {
                return aa.indexOf(v) > -1;
            });
        if (z !== -1) y.splice(z, 1);
        return y.join(',');
    }
    var s = {
            show: function u(v) {
                var w = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                    x = w.duration != null ? w.duration / 1000 : .3;
                p(v, i);
                p(v, j);
                c('CSS').removeClass(v, 'hidden_elem');
                requestAnimationFrame(function () {
                    v.style.animation = q(v, x, m);
                });
                var y = c('Event').listen(v, 'animationend', function () {
                        if (w.callback) w.callback();
                        v.style.animation = r(v, m);
                    }),
                    z = {
                        cancel: function aa() {
                            v.style.animation = r(v, m);
                            y.remove();
                            z.cancel = function () {};
                        }
                    };
                c('DataStore').set(v, j, z);
                return z;
            },
            hide: function u(v) {
                var w = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                    x = function ba() {
                        c('CSS').addClass(v, 'hidden_elem');
                        if (w.callback) w.callback();
                        v.style.animation = r(v, l);
                    };
                if (w.simple) {
                    x();
                    return o;
                }
                var y = w.duration != null ? w.duration / 1000 : .3;
                p(v, j);
                p(v, i);
                requestAnimationFrame(function () {
                    v.style.animation = q(v, y, l);
                });
                var z = c('Event').listen(v, 'animationend', x),
                    aa = {
                        cancel: function ba() {
                            v.style.animation = r(v, l);
                            z.remove();
                            aa.cancel = function () {};
                        }
                    };
                c('DataStore').set(v, i, aa);
                return aa;
            }
        },
        t = {
            show: function u(v) {
                var w = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                    x = w.duration != null ? w.duration : .3;
                p(v, i);
                p(v, j);
                c('CSS').removeClass(v, 'hidden_elem');
                c('Style').set(v, 'opacity', '1');
                var y = v.animate([{
                    opacity: '0'
                }, {
                    opacity: '1.0'
                }], {
                    duration: x
                });
                if (w.callback) y.onfinish = w.callback;
                c('DataStore').set(v, j, y);
                return y;
            },
            hide: function u(v) {
                var w = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1],
                    x = w.duration != null ? w.duration : .3;
                p(v, j);
                if (w.simple === true) {
                    c('CSS').addClass(v, 'hidden_elem');
                    return o;
                } else {
                    p(v, i);
                    c('Style').set(v, 'opacity', '0');
                    var y = v.animate([{
                        opacity: '1.0'
                    }, {
                        opacity: '0'
                    }], {
                        duration: x
                    });
                    y.onfinish = function () {
                        c('CSS').addClass(v, 'hidden_elem');
                        if (w.callback) w.callback();
                    };
                    c('DataStore').set(v, i, y);
                    return y;
                }
            }
        };
    f.exports = n ? t : s;
}), null);
__d('LoadingIndicator.react', ['cx', 'ix', 'React', 'Image.react', 'keyMirror', 'joinClasses'], (function a(b, c, d, e, f, g, h, i) {
    var j, k, l = c('keyMirror')({
            white: true,
            blue: true,
            black: true
        }),
        m = c('keyMirror')({
            small: true,
            medium: true,
            large: true
        }),
        n = {
            white: {
                large: i("85426"),
                medium: i("85427"),
                small: i("85428")
            },
            blue: {
                large: i("85429"),
                small: i("85430")
            },
            black: {
                large: i("85423")
            }
        };
    j = babelHelpers.inherits(o, c('React').Component);
    k = j && j.prototype;
    o.prototype.render = function () {
        'use strict';
        var p = this.props.color,
            q = this.props.size;
        if (!n[p]) return c('React').createElement('span', null);
        if (!n[p][q]) return c('React').createElement('span', null);
        var r = this.props.showonasync ? "uiLoadingIndicatorAsync" : '',
            s = n[p][q];
        return c('React').createElement(c('Image.react'), babelHelpers['extends']({}, this.props, {
            src: s,
            className: c('joinClasses')(this.props.className, r)
        }));
    };

    function o() {
        'use strict';
        j.apply(this, arguments);
    }
    o.SIZES = m;
    o.COLORS = l;
    f.exports = o;
}), null);
__d('isValidReactElement', [], (function a(b, c, d, e, f, g) {
    var h = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 60103;

    function i(j) {
        return !!(typeof j === 'object' && j !== null && j.$$typeof === h);
    }
    f.exports = i;
}), null);
__d('BootloadedReact', ['Bootloader', 'isValidReactElement'], (function a(b, c, d, e, f, g) {
    var h = function j(k) {
            c('Bootloader').loadModules(["ReactDOM"], k, 'BootloadedReact');
        },
        i = {
            isValidElement: function j(k) {
                return c('isValidReactElement')(k);
            },
            render: function j(k, l, m) {
                h(function (n) {
                    n.render(k, l, function () {
                        m && m(this);
                    });
                });
            },
            unmountComponentAtNode: function j(k, l) {
                h(function (m) {
                    m.unmountComponentAtNode(k);
                    l && l();
                });
            }
        };
    f.exports = i;
}), null);
__d('Layer', ['KeyStatus', 'ArbiterMixin', 'BehaviorsMixin', 'BootloadedReact', 'ContextualThing', 'CSS', 'DataStore', 'DOM', 'Event', 'HTML', 'KeyEventController', 'Parent', 'Style', 'ge', 'isNode', 'mixin', 'removeFromArray', 'setImmediate'], (function a(b, c, d, e, f, g) {
    var h, i;
    c('KeyStatus');
    var j = [];
    h = babelHelpers.inherits(k, c('mixin')(c('ArbiterMixin'), c('BehaviorsMixin')));
    i = h && h.prototype;

    function k(n, o) {
        'use strict';
        i.constructor.call(this);
        this._config = n || {};
        if (o) {
            this._configure(this._config, o);
            var p = this._config.addedBehaviors || [];
            this.enableBehaviors(this._getDefaultBehaviors().concat(p));
        }
    }
    k.prototype.init = function (n) {
        'use strict';
        this._configure(this._config, n);
        var o = this._config.addedBehaviors || [];
        this.enableBehaviors(this._getDefaultBehaviors().concat(o));
        this._initialized = true;
        return this;
    };
    k.prototype._configure = function (n, o) {
        var p, q = this;
        'use strict';
        if (o) {
            var r = c('isNode')(o),
                s = typeof o === 'string' || c('HTML').isHTML(o);
            this.containsReactComponent = c('BootloadedReact').isValidElement(o);
            if (s) {
                o = c('HTML')(o).getRootNode();
            } else if (this.containsReactComponent) {
                var t;
                (function () {
                    t = document.createElement('div');
                    var u = true;
                    c('BootloadedReact').render(o, t, function () {
                        this.inform('reactshow');
                        if (!u) this.updatePosition();
                    }.bind(q));
                    u = false;
                    o = q._reactContainer = t;
                })();
            }
        }
        this._root = this._buildWrapper(n, o);
        if (n.attributes) c('DOM').setAttributes(this._root, n.attributes);
        if (n.classNames) n.classNames.forEach(c('CSS').addClass.bind(null, this._root));
        c('CSS').addClass(this._root, 'uiLayer');
        if (n.causalElement) this._causalElement = c('ge')(n.causalElement);
        if (n.permanent) this._permanent = n.permanent;
        if (n.isStrictlyControlled) this._isStrictlyControlled = n.isStrictlyControlled;
        c('DataStore').set(this._root, 'layer', this);
    };
    k.prototype._getDefaultBehaviors = function () {
        'use strict';
        return [];
    };
    k.prototype.getCausalElement = function () {
        'use strict';
        return this._causalElement;
    };
    k.prototype.setCausalElement = function (n) {
        'use strict';
        this._causalElement = n;
        return this;
    };
    k.prototype.getInsertParent = function () {
        'use strict';
        return this._insertParent || document.body;
    };
    k.prototype.getRoot = function () {
        'use strict';
        return this._root;
    };
    k.prototype.getContentRoot = function () {
        'use strict';
        return this._root;
    };
    k.prototype._buildWrapper = function (n, o) {
        'use strict';
        return o;
    };
    k.prototype.setInsertParent = function (n) {
        'use strict';
        if (n) {
            if (this._shown && n !== this.getInsertParent()) {
                c('DOM').appendContent(n, this.getRoot());
                this.updatePosition();
            }
            this._insertParent = n;
        }
        return this;
    };
    k.prototype.showAfterDelay = function (n) {
        'use strict';
        setTimeout(this.show.bind(this), n);
    };
    k.prototype.show = function () {
        'use strict';
        if (this._shown) return this;
        var n = this.getRoot();
        this.inform('beforeshow');
        c('Style').set(n, 'visibility', 'hidden');
        c('Style').set(n, 'overflow', 'hidden');
        c('CSS').show(n);
        c('DOM').appendContent(this.getInsertParent(), n);
        if (this.updatePosition() !== false) {
            this._shown = true;
            this.inform('show');
            k.inform('show', this);
            if (!this._permanent) setTimeout(function () {
                if (this._shown) j.push(this);
            }.bind(this), 0);
        } else c('CSS').hide(n);
        c('Style').set(n, 'visibility', '');
        c('Style').set(n, 'overflow', '');
        c('Style').set(n, 'opacity', '1');
        this.inform('aftershow');
        return this;
    };
    k.prototype.hide = function () {
        'use strict';
        if (this._isStrictlyControlled) {
            this._shown && this.inform('runhide');
            return this;
        }
        return this._hide();
    };
    k.prototype._hide = function () {
        'use strict';
        if (this._hiding || !this._shown || this.inform('beforehide') === false) return this;
        this._hiding = true;
        if (this.inform('starthide') !== false) this.finishHide();
        return this;
    };
    k.prototype.conditionShow = function (n) {
        'use strict';
        return n ? this.show() : this._hide();
    };
    k.prototype.finishHide = function () {
        'use strict';
        if (this._shown) {
            if (!this._permanent) c('removeFromArray')(j, this);
            this._hiding = false;
            this._shown = false;
            c('CSS').hide(this.getRoot());
            this.inform('hide');
            k.inform('hide', this);
        }
    };
    k.prototype.isShown = function () {
        'use strict';
        return this._shown;
    };
    k.prototype.updatePosition = function () {
        'use strict';
        return true;
    };
    k.prototype.destroy = function () {
        'use strict';
        if (this.containsReactComponent) c('BootloadedReact').unmountComponentAtNode(this._reactContainer);
        this.finishHide();
        var n = this.getRoot();
        c('DOM').remove(n);
        this.destroyBehaviors();
        this.inform('destroy');
        k.inform('destroy', this);
        c('DataStore').remove(n, 'layer');
        this._root = this._causalElement = null;
    };
    k.init = function (n, o) {
        'use strict';
        n.init(o);
    };
    k.initAndShow = function (n, o) {
        'use strict';
        n.init(o).show();
    };
    k.show = function (n) {
        'use strict';
        n.show();
    };
    k.showAfterDelay = function (n, o) {
        'use strict';
        n.showAfterDelay(o);
    };
    k.getTopmostLayer = function () {
        'use strict';
        return j[j.length - 1];
    };
    Object.assign(k, c('ArbiterMixin'));
    Object.assign(k.prototype, {
        _initialized: false,
        _root: null,
        _shown: false,
        _hiding: false,
        _causalElement: null,
        _reactContainer: null
    });
    c('Event').listen(document.documentElement, 'keydown', function (event) {
        if (c('KeyEventController').filterEventTargets(event, 'keydown'))
            for (var n = j.length - 1; n >= 0; n--)
                if (j[n].inform('key', event) === false) return false;
    }, c('Event').Priority.URGENT);
    var l;
    c('Event').listen(document.documentElement, 'mousedown', function (event) {
        l = event.getTarget();
    });
    var m;
    c('Event').listen(document.documentElement, 'mouseup', function (event) {
        m = event.getTarget();
        c('setImmediate')(function () {
            l = null;
            m = null;
        });
    });
    c('Event').listen(document.documentElement, 'click', function (event) {
        var n = l,
            o = m;
        l = null;
        m = null;
        var p = j.length;
        if (!p) return;
        var q = event.getTarget();
        if (q !== o || q !== n) return;
        if (!c('DOM').contains(document.documentElement, q)) return;
        if (!q.offsetWidth) return;
        if (c('Parent').byClass(q, 'generic_dialog')) return;
        while (p--) {
            var r = j[p],
                s = r.getContentRoot();
            if (c('ContextualThing').containsIncludingLayers(s, q)) return;
            if (r.inform('blur', {
                    target: q
                }) === false || r.isShown()) return;
        }
    });
    f.exports = k;
}), null);
__d('LinkController', ['DataStore', 'Event', 'Parent', 'trackReferrer'], (function a(b, c, d, e, f, g) {
    var h = '@@LinkController',
        i = [],
        j = [],
        k = {
            registerHandler: function q(r) {
                i.push(r);
            },
            registerFallbackHandler: function q(r) {
                j.push(r);
            }
        };

    function l(q) {
        var r = q.getTarget(),
            s = c('Parent').byTag(r, 'a');
        if (!(s instanceof HTMLAnchorElement)) return;
        var t = n(s);
        if (!t || p(r) || c('DataStore').get(s, h) || t.endsWith('#')) return;
        var u = c('Event').listen(s, 'click', function (v) {
            c('trackReferrer')(s, t);
            if (!s.rel && !s.target && !o(v)) m(s, v);
        });
        c('DataStore').set(s, h, u);
    }

    function m(q, event) {
        i.concat(j).every(function (r) {
            if (r(q, event) === false) {
                event.prevent();
                return false;
            }
            return true;
        });
    }

    function n(q) {
        if (q && !q.rel) {
            var r = q.getAttribute('href');
            if (r) {
                var s = r.match(/^(\w+):/);
                if (!s || s[1].match(/^http/i)) return r;
            }
        }
        return null;
    }

    function o(event) {
        return event.getModifiers().any || event.which && event.which !== 1;
    }

    function p(q) {
        return q.nodeName === 'INPUT' && q.type === 'file';
    }
    c('Event').listen(document.documentElement, 'mousedown', l);
    c('Event').listen(document.documentElement, 'keydown', l);
    f.exports = k;
}), null);
__d("PageTransitionPriorities", [], (function a(b, c, d, e, f, g) {
    var h = 5,
        i = h + 1;
    f.exports = {
        DEFAULT: h,
        LEFT_NAV: i,
        SOCIAL_SEARCH_DIALOG: i + 1
    };
}), null);
__d('computeRelativeURI', ['URI', 'isFacebookURI', 'isEmpty'], (function a(b, c, d, e, f, g) {
    function h(j, k) {
        if (!k) return j;
        if (k.charAt(0) == '/') return k;
        var l = j.split('/').slice(0, -1);
        l[0] !== '';
        k.split('/').forEach(function (m) {
            if (!(m == '.'))
                if (m == '..') {
                    if (l.length > 1) l = l.slice(0, -1);
                } else l.push(m);
        });
        return l.join('/');
    }

    function i(j, k) {
        var l = new(c('URI'))(),
            m = k;
        j = new(c('URI'))(j);
        k = new(c('URI'))(k);
        if (k.getDomain() && !c('isFacebookURI')(k)) return m;
        var n = j,
            o = ['Protocol', 'Domain', 'Port', 'Path', 'QueryData', 'Fragment'];
        o.forEach(function (p) {
            var q = p == 'Path' && n === j;
            if (q) l.setPath(h(j.getPath(), k.getPath()));
            if (!c('isEmpty')(k['get' + p]())) n = k;
            if (!q) l['set' + p](n['get' + p]());
        });
        return l;
    }
    f.exports = i;
}), null);
__d('PageTransitionsRegistrar', ['invariant', 'Bootloader', 'DOMQuery', 'Event', 'Form', 'LinkController', 'PageTransitionPriorities', 'Parent', 'Run', 'URI', 'computeRelativeURI', 'goURI', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g, h) {
    c('Run').onAfterLoad(function () {
        c('Bootloader').loadModules(["PageTransitions"], function (r) {
            if (r && r._init) r._init();
        }, 'PageTransitionsRegistrar');
    });
    var i = [],
        j = [],
        k = {
            DELAY_HISTORY: 'delay_history_PTR',
            registerHandler: function r(s, t) {
                s != null || h(0);
                t = t || c('PageTransitionPriorities').DEFAULT;
                if (!i[t]) i[t] = [];
                i[t].push(s);
            },
            removeHandler: function r(s, t) {
                t = t || c('PageTransitionPriorities').DEFAULT;
                var u = -1;
                if (i[t]) u = i[t].indexOf(s);
                if (u > -1) i[t].splice(u, 1);
            },
            registerCompletionCallback: function r(s) {
                j.push(s);
            },
            getMostRecentURI: q,
            _getTransitionHandlers: function r() {
                return i;
            },
            _getCompletionCallbacks: function r() {
                return j;
            },
            _resetCompletionCallbacks: function r() {
                j = [];
            },
            __onClick: n,
            __onSubmit: p
        },
        l = null;

    function m(r) {
        l = r;
        c('setTimeoutAcrossTransitions')(function () {
            l = null;
        }, 0);
    }

    function n(event) {
        if (l) {
            if (!event.isDefaultPrevented()) {
                o(l);
                c('goURI')(l.getAttribute('href'));
            }
            event.kill();
        }
    }

    function o(r) {
        var s = r.getAttribute('href'),
            t = c('computeRelativeURI')(q().getQualifiedURI(), s).toString();
        if (s != t) r.setAttribute('href', t);
    }

    function p(event, r) {
        var s = event.getTarget();
        if (c('Form').getAttribute(s, 'rel') || c('Form').getAttribute(s, 'target')) return;
        var t = new(c('URI'))(c('Form').getAttribute(s, 'action')),
            u = c('computeRelativeURI')(q(), t);
        s.setAttribute('action', u.toString());
        if ((c('Form').getAttribute(s, 'method') || 'GET').toUpperCase() == 'GET') {
            var v = c('Form').serialize(s);
            if (r && (c('DOMQuery').isNodeOfType(r, 'input') && r.type === 'submit' || (r = c('Parent').byTag(r, 'button'))) && r.name) v[r.name] = r.value;
            c('goURI')(u.addQueryData(v));
            event.kill();
        }
    }
    c('LinkController').registerFallbackHandler(m);

    function q() {
        if (b.PageTransitions && b.PageTransitions.isInitialized()) {
            return b.PageTransitions.getMostRecentURI();
        } else {
            var r = c('URI').getRequestURI(false),
                s = r.getUnqualifiedURI(),
                t = new(c('URI'))(s).setFragment(null),
                u = s.getFragment();
            if (u.charAt(0) === '!' && t.toString() === u.substr(1)) s = t;
            return s;
        }
    }
    f.exports = k;
}), null);
__d('LayerHideOnTransition', ['PageTransitionsRegistrar', 'setTimeout'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._enabled = true;
        if (!this._subscribed) c('setTimeout')(this._subscribe.bind(this), 0);
    };
    h.prototype.disable = function () {
        'use strict';
        this._enabled = false;
    };
    h.prototype._handler = function () {
        'use strict';
        if (this._enabled) this._layer.hide();
        this._subscribe();
    };
    h.prototype._subscribe = function () {
        'use strict';
        c('PageTransitionsRegistrar').registerHandler(this._handler.bind(this));
        this._subscribed = true;
    };
    Object.assign(h.prototype, {
        _enabled: false,
        _subscribed: false
    });
    f.exports = h;
}), null);
__d('Rect', ['invariant', 'Vector', '$'], (function a(b, c, d, e, f, g, h) {
    function i(j, k, l, m, n) {
        'use strict';
        if (arguments.length === 1) {
            if (j instanceof i) return j;
            if (j instanceof c('Vector')) return new i(j.y, j.x, j.y, j.x, j.domain);
            return i.getElementBounds(c('$')(j));
        }
        typeof j === 'number' && typeof k === 'number' && typeof l === 'number' && typeof m === 'number' && (!n || typeof n === 'string') || h(0);
        Object.assign(this, {
            t: j,
            r: k,
            b: l,
            l: m,
            domain: n || 'pure'
        });
        return this;
    }
    i.prototype.w = function () {
        'use strict';
        return this.r - this.l;
    };
    i.prototype.h = function () {
        'use strict';
        return this.b - this.t;
    };
    i.prototype.getWidth = function () {
        'use strict';
        return this.w();
    };
    i.prototype.getHeight = function () {
        'use strict';
        return this.h();
    };
    i.prototype.toString = function () {
        'use strict';
        return '((' + this.l + ', ' + this.t + '), (' + this.r + ', ' + this.b + '))';
    };
    i.prototype.contains = function (j) {
        'use strict';
        j = new i(j).convertTo(this.domain);
        var k = this;
        return k.l <= j.l && k.r >= j.r && k.t <= j.t && k.b >= j.b;
    };
    i.prototype.isEqualTo = function (j) {
        'use strict';
        return this.t === j.t && this.r === j.r && this.b === j.b && this.l === j.l && this.domain === j.domain;
    };
    i.prototype.add = function (j, k) {
        'use strict';
        if (arguments.length == 1) {
            if (j instanceof i && j.domain != 'pure') j = j.convertTo(this.domain);
            if (j instanceof c('Vector')) return this.add(j.x, j.y);
            return this;
        }
        var l = parseFloat(j),
            m = parseFloat(k);
        return new i(this.t + m, this.r + l, this.b + m, this.l + l, this.domain);
    };
    i.prototype.sub = function (j, k) {
        'use strict';
        if (arguments.length == 1 && j instanceof c('Vector')) {
            return this.add(j.mul(-1));
        } else if (typeof j === 'number' && typeof k === 'number') return this.add(-j, -k);
        return this;
    };
    i.prototype.rotateAroundOrigin = function (j) {
        'use strict';
        var k = this.getCenter().rotate(j * Math.PI / 2),
            l = 0,
            m = 0;
        if (j % 2) {
            l = this.h();
            m = this.w();
        } else {
            l = this.w();
            m = this.h();
        }
        var n = k.y - m / 2,
            o = k.x - l / 2,
            p = n + m,
            q = o + l;
        return new i(n, q, p, o, this.domain);
    };
    i.prototype.boundWithin = function (j) {
        'use strict';
        var k = 0,
            l = 0;
        if (this.l < j.l) {
            k = j.l - this.l;
        } else if (this.r > j.r) k = j.r - this.r;
        if (this.t < j.t) {
            l = j.t - this.t;
        } else if (this.b > j.b) l = j.b - this.b;
        return this.add(k, l);
    };
    i.prototype.getCenter = function () {
        'use strict';
        return new(c('Vector'))(this.l + this.w() / 2, this.t + this.h() / 2, this.domain);
    };
    i.prototype.getTop = function () {
        'use strict';
        return this.t;
    };
    i.prototype.getRight = function () {
        'use strict';
        return this.r;
    };
    i.prototype.getBottom = function () {
        'use strict';
        return this.b;
    };
    i.prototype.getLeft = function () {
        'use strict';
        return this.l;
    };
    i.prototype.getPositionVector = function () {
        'use strict';
        return new(c('Vector'))(this.l, this.t, this.domain);
    };
    i.prototype.getDimensionVector = function () {
        'use strict';
        return new(c('Vector'))(this.w(), this.h(), 'pure');
    };
    i.prototype.convertTo = function (j) {
        'use strict';
        if (this.domain == j) return this;
        if (j == 'pure') return new i(this.t, this.r, this.b, this.l, 'pure');
        if (this.domain == 'pure') return new i(0, 0, 0, 0);
        var k = new(c('Vector'))(this.l, this.t, this.domain).convertTo(j);
        return new i(k.y, k.x + this.w(), k.y + this.h(), k.x, j);
    };
    i.deserialize = function (j) {
        'use strict';
        var k = j.split(':');
        return new i(parseFloat(k[1]), parseFloat(k[2]), parseFloat(k[3]), parseFloat(k[0]));
    };
    i.newFromVectors = function (j, k) {
        'use strict';
        return new i(j.y, j.x + k.x, j.y + k.y, j.x, j.domain);
    };
    i.getElementBounds = function (j) {
        'use strict';
        return i.newFromVectors(c('Vector').getElementPosition(j), c('Vector').getElementDimensions(j));
    };
    i.getViewportBounds = function () {
        'use strict';
        return i.newFromVectors(c('Vector').getScrollPosition(), c('Vector').getViewportDimensions());
    };
    i.getViewportWithoutScrollbarsBounds = function () {
        'use strict';
        return i.newFromVectors(c('Vector').getScrollPosition(), c('Vector').getViewportWithoutScrollbarDimensions());
    };
    i.minimumBoundingBox = function (j) {
        'use strict';
        var k = new i(Infinity, -Infinity, -Infinity, Infinity),
            l;
        for (var m = 0; m < j.length; m++) {
            l = j[m];
            k.t = Math.min(k.t, l.t);
            k.r = Math.max(k.r, l.r);
            k.b = Math.max(k.b, l.b);
            k.l = Math.min(k.l, l.l);
        }
        return k;
    };
    f.exports = i;
}), null);
__d('SVGChecker', [], (function a(b, c, d, e, f, g) {
    f.exports = {
        isSVG: function h(i) {
            return !!i.ownerSVGElement || i.tagName.toLowerCase() === 'svg';
        },
        isDisplayed: function h(i) {
            try {
                var j = i.getBBox();
                if (j && (j.height === 0 || j.width === 0)) return false;
            } catch (k) {
                return false;
            }
            return true;
        }
    };
}), null);
__d('getOffsetParent', ['Style'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = i.parentNode;
        if (!j || j === document.documentElement) return document.documentElement;
        if (c('Style').get(j, 'position') !== 'static') return j;
        return j === document.body ? document.documentElement : h(j);
    }
    f.exports = h;
}), null);
__d('getOverlayZIndex', ['Style'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        j = j || document.body;
        var k = [];
        while (i && i !== j) {
            k.push(i);
            i = i.parentNode;
        }
        if (i !== j) return 0;
        for (var l = k.length - 1; l >= 0; l--) {
            var m = k[l];
            if (c('Style').get(m, 'position') != 'static') {
                var n = parseInt(c('Style').get(m, 'z-index'), 10);
                if (!isNaN(n)) return n;
            }
        }
        return 0;
    }
    f.exports = h;
}), null);
__d("getOwnObjectValues", [], (function a(b, c, d, e, f, g) {
    function h(i) {
        return Object.keys(i).map(function (j) {
            return i[j];
        });
    }
    f.exports = h;
}), null);
__d('ContextualLayer', ['Arbiter', 'ARIA', 'Bootloader', 'ContextualThing', 'CSS', 'DataStore', 'DOM', 'Event', 'Layer', 'LayerHideOnTransition', 'Locale', 'Parent', 'Rect', 'Scroll', 'Style', 'SVGChecker', 'Vector', 'arrayContains', 'containsNode', 'emptyFunction', 'getOwnObjectValues', 'getOffsetParent', 'getOverlayZIndex', 'isElementNode', 'removeFromArray', 'throttle'], (function a(b, c, d, e, f, g) {
    var h, i;

    function j(p) {
        return p.getPosition() === 'left' || p.isVertical() && p.getAlignment() === 'right';
    }
    h = babelHelpers.inherits(k, c('Layer'));
    i = h && h.prototype;
    k.prototype._configure = function (p, q) {
        'use strict';
        if (p.dialogRole !== 'dialog') this._dialogRole = p.dialogRole;
        if (p.shouldSetARIAProperties === false) this._shouldSetARIAProperties = p.shouldSetARIAProperties;
        if (p.label) this._label = p.label;
        if (p.labelledBy) this._labelledBy = p.labelledBy;
        i._configure.call(this, p, q);
        if (p.context) {
            this.setContext(p.context);
        } else if (p.contextID) {
            this._setContextID(p.contextID);
        } else if (p.contextSelector) {
            this._setContextSelector(p.contextSelector);
            this._setARIAProperties();
        }
        this.setPosition(p.position);
        this.setAlignment(p.alignment);
        this.setOffsetX(p.offsetX);
        this.setOffsetY(p.offsetY);
        this.setArrowDimensions(p.arrowDimensions);
        this._content = q;
    };
    k.prototype._getDefaultBehaviors = function () {
        'use strict';
        var p = k.getDefaultBehaviorsAsObject();
        return i._getDefaultBehaviors.call(this).concat(c('getOwnObjectValues')(p));
    };
    k.prototype._buildWrapper = function (p, q) {
        'use strict';
        this._contentWrapper = c('DOM').create('div', {
            className: 'uiContextualLayer'
        }, q);
        if (this._dialogRole) this._contentWrapper.setAttribute('role', this._dialogRole);
        if (this._labelledBy && this._labelledBy.length) {
            this._contentWrapper.setAttribute('aria-labelledby', this._labelledBy.join(' '));
        } else if (this._label) this._contentWrapper.setAttribute('aria-label', this._label);
        if (this._dialogRole === 'alert') this._contentWrapper.setAttribute('aria-atomic', 'true');
        return c('DOM').create('div', {
            className: 'uiContextualLayerPositioner',
            'data-testid': p['data-testid']
        }, this._contentWrapper);
    };
    k.prototype.getInsertParent = function () {
        'use strict';
        var p = this._insertParent;
        if (!p) {
            var q = this.getContext();
            if (q) p = c('Parent').byClass(q, 'uiContextualLayerParent');
        }
        return p || i.getInsertParent.call(this);
    };
    k.prototype.setContent = function (p) {
        'use strict';
        this._content = p;
        c('DOM').setContent(this._contentWrapper, this._content);
        this._shown && this.updatePosition();
        return this;
    };
    k.prototype.setContext = function (p) {
        'use strict';
        return this.setContextWithBounds(p, null);
    };
    k.prototype.setContextWithBounds = function (p, q) {
        'use strict';
        if (this._contextNode === p && q && this._contextBounds && q.isEqualTo(this._contextBounds)) return this;
        this._contextNode = p;
        var r = q && this._contextBounds && q.t === this._contextBounds.t && q.r === this._contextBounds.r && q.b === this._contextBounds.b && q.l === this._contextBounds.l;
        if (r) return this;
        this._contextBounds = q || null;
        this._contextSelector = this._contextScrollParent = null;
        if (this._shown) {
            c('ContextualThing').register(this.getRoot(), this._contextNode);
            this.updatePosition();
        }
        this._setParentSubscription();
        this._setARIAProperties();
        return this;
    };
    k.prototype.shouldSetARIAProperties = function (p) {
        'use strict';
        this._shouldSetARIAProperties = p;
        return this;
    };
    k.prototype._setARIAProperties = function () {
        'use strict';
        if (!this._shouldSetARIAProperties) return this;
        if (this._dialogRole === 'dialog') {
            c('ARIA').setPopup(this.getCausalElement(), this.getRoot());
        } else if (this._dialogRole === 'region') c('Bootloader').loadModules(["ContextualLayerInlineTabOrder"], function (p) {
            if (!this.hasBehavior(p)) this.enableBehavior(p);
        }.bind(this), 'ContextualLayer');
        return this;
    };
    k.prototype._setContextID = function (p) {
        'use strict';
        this._contextSelector = '#' + p;
        this._contextNode = null;
    };
    k.prototype._setContextSelector = function (p) {
        'use strict';
        this._contextSelector = p;
        this._contextNode = null;
    };
    k.prototype.getCausalElement = function () {
        'use strict';
        return i.getCausalElement.call(this) || this.getContext();
    };
    k.prototype._setParentSubscription = function () {
        'use strict';
        var p = this.getContext(),
            q = null;
        while (p !== null) {
            q = c('DataStore').get(p, 'layer');
            if (q) break;
            p = p.parentNode;
        }
        if (q === this._parentLayer) return;
        if (this._parentLayer && this._parentSubscription) {
            this._parentLayer.unsubscribe(this._parentSubscription);
            this._parentSubscription = null;
        }
        if (q) this._parentSubscription = q.subscribe('hide', this.hide.bind(this));
        this._parentLayer = q;
    };
    k.prototype.setPosition = function (p) {
        'use strict';
        if (this.getOrientation().setDefaultPosition(p)) this._shown && this.updatePosition();
        return this;
    };
    k.prototype.setAlignment = function (p) {
        'use strict';
        if (this.getOrientation().setDefaultAlignment(p)) this._shown && this.updatePosition();
        return this;
    };
    k.prototype.setOffsetX = function (p) {
        'use strict';
        if (this.getOrientation().setDefaultOffsetX(p)) this._shown && this.updatePosition();
        return this;
    };
    k.prototype.setArrowDimensions = function (p) {
        'use strict';
        if (p && this.getOrientation().setArrowOffset(p.offset)) this._shown && this.updatePosition();
        return this;
    };
    k.prototype.setOffsetY = function (p) {
        'use strict';
        if (this.getOrientation().setDefaultOffsetY(p)) this._shown && this.updatePosition();
        return this;
    };
    k.prototype.getPosition = function () {
        'use strict';
        return this.getOrientation().getPosition();
    };
    k.prototype.getOrientation = function () {
        'use strict';
        if (!this._orientation) this._orientation = new o();
        return this._orientation;
    };
    k.prototype.getContentRoot = function () {
        'use strict';
        return this._contentWrapper;
    };
    k.prototype.getContent = function () {
        'use strict';
        return this._content;
    };
    k.prototype.getContext = function () {
        'use strict';
        if (!this._contextNode) this._contextNode = c('DOM').find(document, this._contextSelector);
        return this._contextNode;
    };
    k.prototype.getContextBounds = function (p) {
        'use strict';
        if (this._contextBounds) return this._contextBounds.convertTo(p);
        var q = this.getContext();
        return c('Rect').newFromVectors(c('Vector').getElementPosition(q, p), c('Vector').getElementDimensions(q));
    };
    k.prototype.getContextScrollParent = function () {
        'use strict';
        if (!this._contextScrollParent) {
            this._contextScrollParent = c('Style').getScrollParent(this.getContext());
        } else if (c('isElementNode')(this._contextScrollParent) && !c('containsNode')(document.documentElement, this._contextScrollParent)) this._contextScrollParent = c('Style').getScrollParent(this.getContext());
        return this._contextScrollParent;
    };
    k.prototype.setInsertParent = function (p) {
        'use strict';
        this._insertScrollParent = null;
        return i.setInsertParent.call(this, p);
    };
    k.prototype.getInsertScrollParent = function () {
        'use strict';
        if (!this._insertScrollParent) this._insertScrollParent = c('Style').getScrollParent(this.getInsertParent());
        return this._insertScrollParent;
    };
    k.prototype.show = function () {
        'use strict';
        if (this._shown) return this;
        i.show.call(this);
        if (this._shown) {
            c('ContextualThing').register(this.getRoot(), this.getContext());
            l.push(this);
            this._resizeListener = this._resizeListener || c('Event').listen(window, 'resize', c('throttle')(function () {
                if (this._shown) this.updatePosition();
            }.bind(this)));
        }
        return this;
    };
    k.prototype.finishHide = function () {
        'use strict';
        c('removeFromArray')(l, this);
        this._resizeListener && this._resizeListener.remove();
        this._resizeListener = null;
        this._insertScrollParent = null;
        return i.finishHide.call(this);
    };
    k.prototype.isFixed = function () {
        'use strict';
        return c('Style').isFixed(this.getContext()) && !c('Style').isFixed(this.getInsertParent());
    };
    k.prototype.updatePosition = function () {
        'use strict';
        var p = this.getContext();
        if (!p) return false;
        var q = this.isFixed();
        if (!q && !(p.offsetParent || c('SVGChecker').isSVG(p) && c('SVGChecker').isDisplayed(p))) return false;
        var r = this.getRoot();
        c('Style').set(r, 'width', c('Vector').getViewportDimensions().x + 'px');
        var s = this.getOrientation();
        this.inform('adjust', s.reset());
        if (!s.isValid()) return false;
        this._updateWrapperPosition(s);
        this._updateWrapperClass(s);
        c('CSS').conditionClass(r, 'uiContextualLayerPositionerFixed', q);
        var t, u, v = q ? 'viewport' : 'document',
            w = q ? document.documentElement : c('getOffsetParent')(r);
        if (w === document.documentElement) {
            t = new(c('Vector'))(0, 0);
            u = document.documentElement.clientWidth;
        } else if (!r.offsetParent) {
            return false;
        } else {
            t = c('Vector').getElementPosition(w, v);
            u = w.offsetWidth;
            if (w !== document.body) t = t.sub(new(c('Vector'))(c('Scroll').getLeft(w), c('Scroll').getTop(w)));
        }
        var x = this.getContextBounds(v),
            y = x.l - t.x,
            z = x.t - t.y,
            aa = x.h(),
            ba = x.w(),
            ca = c('Locale').isRTL();
        if (s.getPosition() === 'below') z += aa;
        if ((s.getPosition() === 'right' || s.isVertical() && s.getAlignment() === 'right') != ca) y += ba;
        var da = s.getOffsetX();
        if (s.isVertical() && s.getAlignment() === 'center') da += (ba - this.getContentRoot().offsetWidth) / 2;
        if (ca) da *= -1;
        var ea = 'left',
            fa = Math.floor(y + da);
        if (j(s) !== ca) {
            ea = 'right';
            fa = u - fa;
        }
        c('Style').set(r, ea, fa + 'px');
        c('Style').set(r, ea === 'left' ? 'right' : 'left', '');
        var ga = this.getInsertScrollParent(),
            ha;
        if (ga !== window) {
            ha = ga.clientWidth;
        } else ha = document.documentElement.clientWidth;
        var ia = c('Vector').getElementPosition(r).x;
        if (ea === 'left' && ha - ia > 0) {
            c('Style').set(r, 'width', ha - ia + 'px');
        } else if (ea === 'right' && ia + r.offsetWidth > 0) {
            c('Style').set(r, 'width', ia + r.offsetWidth + 'px');
        } else c('Style').set(r, 'width', '');
        c('Style').set(r, 'top', z + s.getOffsetY() + 'px');
        var ja = c('getOverlayZIndex')(p, this.getInsertParent());
        c('Style').set(r, 'z-index', ja > 200 ? ja : '');
        this.inform('reposition', s);
        return true;
    };
    k.prototype._updateWrapperPosition = function (p) {
        'use strict';
        var q = p.getPosition() === 'above';
        c('Style').set(this._contentWrapper, 'bottom', q ? '0' : null);
        var r = c('Locale').isRTL() ? 'left' : 'right',
            s = j(p);
        c('Style').set(this._contentWrapper, r, s ? '0' : null);
    };
    k.prototype._updateWrapperClass = function (p) {
        'use strict';
        var q = p.getClassName();
        if (q === this._orientationClass) return;
        if (this._orientationClass) c('CSS').removeClass(this._contentWrapper, this._orientationClass);
        this._orientationClass = q;
        c('CSS').addClass(this._contentWrapper, q);
    };
    k.prototype.simulateOrientation = function (p, q) {
        'use strict';
        var r = p.getClassName();
        if (r === this._orientationClass) {
            return q();
        } else {
            if (this._orientationClass) c('CSS').removeClass(this._contentWrapper, this._orientationClass);
            c('CSS').addClass(this._contentWrapper, r);
            var s = q();
            c('CSS').removeClass(this._contentWrapper, r);
            if (this._orientationClass) c('CSS').addClass(this._contentWrapper, this._orientationClass);
            return s;
        }
    };
    k.prototype.destroy = function () {
        'use strict';
        i.destroy.call(this);
        this._contentWrapper = null;
        this._content = null;
        return this;
    };
    k.prototype.getArrowDimensions = function () {
        'use strict';
        return this._config.arrowDimensions || {
            offset: 0,
            length: 0
        };
    };
    k.getDefaultBehaviorsAsObject = function () {
        'use strict';
        return {
            LayerHideOnTransition: c('LayerHideOnTransition')
        };
    };

    function k() {
        'use strict';
        h.apply(this, arguments);
    }
    var l = [];
    c('Arbiter').subscribe('reflow', function () {
        l.forEach(function (p) {
            if (p.updatePosition() === false) p.hide();
        });
    });
    Object.assign(k.prototype, {
        _contentWrapper: null,
        _content: null,
        _contextNode: null,
        _contextBounds: null,
        _contextSelector: null,
        _dialogRole: 'dialog',
        _label: null,
        _labelledBy: [],
        _parentLayer: null,
        _parentSubscription: null,
        _orientation: null,
        _orientationClass: null,
        _shouldSetARIAProperties: true
    });
    var m = c('emptyFunction').thatReturnsArgument,
        n = c('emptyFunction').thatReturnsArgument;

    function o() {
        'use strict';
        this._default = {
            _position: 'above',
            _alignment: 'left',
            _offsetX: 0,
            _offsetY: 0,
            _valid: true,
            _preferMoreContentShownRect: false
        };
        this.reset();
    }
    o.prototype.setPosition = function (p) {
        'use strict';
        this._position = m(p);
        return this;
    };
    o.prototype.setAlignment = function (p) {
        'use strict';
        this._alignment = n(p);
        return this;
    };
    o.prototype.getOppositePosition = function () {
        'use strict';
        return o.OPPOSITE[this.getPosition()];
    };
    o.prototype.invalidate = function () {
        'use strict';
        this._valid = false;
        return this;
    };
    o.prototype.getPosition = function () {
        'use strict';
        return this._position || 'above';
    };
    o.prototype.getAlignment = function () {
        'use strict';
        return this._alignment || 'left';
    };
    o.prototype.getOffsetX = function () {
        'use strict';
        var p = this._offsetX || 0;
        if (!this.isVertical()) {
            if (this._default._position !== this._position) p *= -1;
        } else if (this._default._alignment !== this._alignment) p *= -1;
        return p;
    };
    o.prototype.getOffsetY = function () {
        'use strict';
        var p = this._offsetY || 0;
        if (this.isVertical() && this._default._position !== this._position) p *= -1;
        return p;
    };
    o.prototype.getClassName = function () {
        'use strict';
        var p = this.getAlignment(),
            q = this.getPosition();
        if (q === 'below') {
            if (p === 'left') {
                return 'uiContextualLayerBelowLeft';
            } else if (p === 'right') {
                return 'uiContextualLayerBelowRight';
            } else return 'uiContextualLayerBelowCenter';
        } else if (q === 'above') {
            if (p === 'left') {
                return 'uiContextualLayerAboveLeft';
            } else if (p === 'right') {
                return 'uiContextualLayerAboveRight';
            } else return 'uiContextualLayerAboveCenter';
        } else if (q === 'left') {
            return 'uiContextualLayerLeft';
        } else return 'uiContextualLayerRight';
    };
    o.prototype.isValid = function () {
        'use strict';
        return this._valid;
    };
    o.prototype.isVertical = function () {
        'use strict';
        return this.getPosition() === 'above' || this.getPosition() === 'below';
    };
    o.prototype.reset = function () {
        'use strict';
        Object.assign(this, this._default);
        return this;
    };
    o.prototype.setDefaultPosition = function (p) {
        'use strict';
        var q = this._default._position;
        this._default._position = m(p);
        return q !== p;
    };
    o.prototype.setDefaultAlignment = function (p) {
        'use strict';
        var q = this._default._alignment;
        this._default._alignment = n(p);
        return q !== p;
    };
    o.prototype.setDefaultOffsetX = function (p) {
        'use strict';
        var q = this._default._offsetX;
        this._default._offsetX = p;
        return q !== p;
    };
    o.prototype.setArrowOffset = function (p) {
        'use strict';
        var q = this._default._arrowOffset;
        this._default._arrowOffset = p;
        return q !== p;
    };
    o.prototype.getArrowOffset = function () {
        'use strict';
        return this._default._arrowOffset || 0;
    };
    o.prototype.setDefaultOffsetY = function (p) {
        'use strict';
        var q = this._default._offsetY;
        this._default._offsetY = p;
        return q !== p;
    };
    o.prototype.setPreferMoreContentShownRect = function (p) {
        'use strict';
        var q = this._default._preferMoreContentShownRect;
        this._default._preferMoreContentShownRect = p;
        return q !== p;
    };
    o.prototype.getPreferMoreContentShownRect = function () {
        'use strict';
        return this._default._preferMoreContentShownRect;
    };
    o.OPPOSITE = {
        above: 'below',
        below: 'above',
        left: 'right',
        right: 'left'
    };
    f.exports = k;
}), null);
__d('ContextualLayerHideOnScroll', ['Event'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscriptions = [this._layer.subscribe('contextchange', this._handleContextChange.bind(this)), this._layer.subscribe('show', this.attach.bind(this)), this._layer.subscribe('hide', this.detach.bind(this))];
    };
    h.prototype.disable = function () {
        'use strict';
        while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
        this.detach();
    };
    h.prototype.attach = function () {
        'use strict';
        if (this._listener) return;
        var i = this._layer.getContextScrollParent();
        if (i === window) return;
        this._listener = c('Event').listen(i, 'scroll', this._layer.hide.bind(this._layer));
    };
    h.prototype.detach = function () {
        'use strict';
        this._listener && this._listener.remove();
        this._listener = null;
    };
    h.prototype._handleContextChange = function () {
        'use strict';
        this.detach();
        if (this._layer.isShown()) this.attach();
    };
    Object.assign(h.prototype, {
        _subscriptions: []
    });
    f.exports = h;
}), null);
__d('LayerHideOnEscape', ['Event', 'Keys'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('key', this._handle.bind(this));
    };
    h.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    h.prototype._handle = function (i, event) {
        'use strict';
        if (c('Event').getKeyCode(event) === c('Keys').ESC) {
            this._layer.hide();
            return false;
        }
    };
    Object.assign(h.prototype, {
        _subscription: null
    });
    f.exports = h;
}), null);
__d('ParameterizedPopover', ['Arbiter', 'ArbiterMixin', 'CSS', 'DataStore', 'Event', 'Focus', 'Keys', 'KeyStatus', 'LayerHideOnEscape', 'SubscriptionsHandler', 'Toggler', 'curry', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;
    c('Toggler').subscribe(['show', 'hide'], function (k, l) {
        var m = c('DataStore').get(l.getActive(), 'Popover');
        if (m)
            if (k === 'show') {
                m.showLayer();
            } else m.hideLayer();
    });
    h = babelHelpers.inherits(j, c('mixin')(c('ArbiterMixin')));
    i = h && h.prototype;

    function j(k, l, m, n) {
        'use strict';
        i.constructor.call(this);
        this._root = k;
        this._triggerElem = l;
        this._behaviors = m;
        this._config = n || {};
        this._disabled = !!this._config.disabled;
        this._listeners = new(c('SubscriptionsHandler'))();
        if (!this._disabled && (l.nodeName !== 'A' || l.rel !== 'toggle')) this._setupClickListener();
        this._setupKeyListener();
        this._setupFocusListener();
        this._setupBlurListener();
        l.setAttribute('role', 'button');
        c('DataStore').set(k, 'Popover', this);
        if (c('Toggler').getActive() === k) this.showLayer();
    }
    j.prototype.ensureInit = function () {
        'use strict';
        if (!this._layer) this._init();
    };
    j.prototype.showLayer = function () {
        'use strict';
        if (this._disabled) return;
        this.ensureInit();
        this._layer.show();
        c('Toggler').show(this._root);
        c('CSS').addClass(this._root, 'selected');
        this.inform('show');
    };
    j.prototype.getContentRoot = function () {
        'use strict';
        return this._root;
    };
    j.prototype.getLayer = function () {
        'use strict';
        return this._layer;
    };
    j.prototype.hideLayer = function () {
        'use strict';
        this.ensureInit();
        this._layer.hide();
    };
    j.prototype.isShown = function () {
        'use strict';
        return this._layer && this._layer.isShown();
    };
    j.prototype.setLayerContent = function (k) {
        'use strict';
        this.ensureInit();
        if (this._layer.setContent) this._layer.setContent(k);
    };
    j.prototype._init = function () {
        'use strict';
        var k = this._config.layer;
        k.enableBehaviors([c('LayerHideOnEscape')]);
        c('Toggler').createInstance(k.getRoot()).setSticky(false);
        k.subscribe('hide', this._onLayerHide.bind(this));
        this._behaviors && k.enableBehaviors(this._behaviors);
        this._layer = k;
        this.inform('init', null, c('Arbiter').BEHAVIOR_PERSISTENT);
    };
    j.prototype._onLayerHide = function () {
        'use strict';
        c('Toggler').hide(this._root);
        c('CSS').removeClass(this._root, 'selected');
        this.inform('hide');
        if (c('KeyStatus').getKeyDownCode() === c('Keys').ESC) c('Focus').set(this._triggerElem);
    };
    j.prototype.enable = function () {
        'use strict';
        if (!this._disabled) return;
        this._listeners.engage();
        this._setupClickListener();
        this._setupKeyListener();
        this._setupFocusListener();
        this._setupBlurListener();
        this._disabled = false;
    };
    j.prototype.disable = function () {
        'use strict';
        if (this._disabled) return;
        if (this.isShown()) this.hideLayer();
        this._listeners.release();
        if (this._triggerElem.getAttribute('rel') === 'toggle') this._triggerElem.removeAttribute('rel');
        this._disabled = true;
    };
    j.prototype._setupClickListener = function () {
        'use strict';
        this._listeners.addSubscriptions(c('Event').listen(this._triggerElem, 'click', c('curry')(c('Toggler').bootstrap, this._triggerElem)));
    };
    j.prototype._setupKeyListener = function () {
        'use strict';
        this._listeners.addSubscriptions(c('Event').listen(this._triggerElem, 'keydown', this._handleKeyEvent.bind(this)));
    };
    j.prototype._setupFocusListener = function () {
        'use strict';
        this._listeners.addSubscriptions(c('Event').listen(this._triggerElem, 'focus', this._handleFocusEvent.bind(this)));
    };
    j.prototype._setupBlurListener = function () {
        'use strict';
        this._listeners.addSubscriptions(c('Event').listen(this._triggerElem, 'blur', this._handleBlurEvent.bind(this)));
    };
    j.prototype._handleKeyEvent = function (event) {
        'use strict';
        if (event.getModifiers().any) return;
        var k = c('Event').getKeyCode(event);
        switch (k) {
            case c('Keys').DOWN:
            case c('Keys').UP:
                if (this._config.disableArrowKeyActivation) return;
                if (!this.isShown()) c('Toggler').bootstrap(this._triggerElem);
                break;
            case c('Keys').RETURN:
                if (!this._config.enableActivationOnEnter) return;
                if (!this.isShown()) c('Toggler').bootstrap(this._triggerElem);
                break;
            case c('Keys').SPACE:
                c('Toggler').bootstrap(this._triggerElem);
                break;
            default:
                return;
        }
        event.prevent();
    };
    j.prototype._handleFocusEvent = function (event) {
        'use strict';
        c('CSS').addClass(this._root, 'focused');
    };
    j.prototype._handleBlurEvent = function (event) {
        'use strict';
        c('CSS').removeClass(this._root, 'focused');
    };
    j.prototype.destroy = function () {
        'use strict';
        this.disable();
        c('DataStore').remove(this._root, 'Popover');
    };
    Object.assign(j.prototype, {
        _layer: null
    });
    f.exports = j;
}), null);
__d('Popover', ['ContextualLayer', 'ContextualLayerHideOnScroll', 'DOM', 'ParameterizedPopover'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('ParameterizedPopover'));
    i = h && h.prototype;
    j.prototype._init = function () {
        'use strict';
        var k = new(c('ContextualLayer'))({
            context: this._triggerElem,
            position: 'below',
            arrowDimensions: {
                offset: 12,
                length: 16
            },
            'data-testid': this._config['data-testid']
        }, c('DOM').create('div'));
        k.enableBehaviors([c('ContextualLayerHideOnScroll')]);
        this._config.layer = k;
        if (this._config.alignh) k.setAlignment(this._config.alignh);
        if (this._config.layer_content) k.setContent(this._config.layer_content);
        if (this._config.position) k.setPosition(this._config.position);
        if (this._config.arrowDimensions) k.setArrowDimensions(this._config.arrowDimensions);
        i._init.call(this);
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}), null);
__d('PopoverMenu', ['Arbiter', 'ArbiterMixin', 'ARIA', 'BehaviorsMixin', 'Event', 'Focus', 'Keys', 'KeyStatus', 'SubscriptionsHandler', 'VirtualCursorStatus', 'mixin'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('mixin')(c('ArbiterMixin'), c('BehaviorsMixin')));
    i = h && h.prototype;

    function j(k, l, m, n) {
        'use strict';
        i.constructor.call(this);
        this._popover = k;
        this._triggerElem = l;
        this._getInitialMenu = typeof m !== 'function' ? function () {
            return m;
        } : m;
        this._subscriptions = new(c('SubscriptionsHandler'))();
        this._subscriptions.addSubscriptions(k.subscribe('init', this._onLayerInit.bind(this)), k.subscribe('show', this._onPopoverShow.bind(this)), k.subscribe('hide', this._onPopoverHide.bind(this)), c('Event').listen(this._triggerElem, 'keydown', this._handleKeyEventOnTrigger.bind(this)), c('VirtualCursorStatus').add(this._triggerElem, this._checkInitialFocus.bind(this)));
        n && this.enableBehaviors(n);
    }
    j.prototype.getContentRoot = function () {
        'use strict';
        return this._popover.getContentRoot();
    };
    j.prototype.setMenu = function (k) {
        'use strict';
        if (this._menu && this._menu !== k) this._menu.destroy();
        this._menu = k;
        var l = k.getRoot();
        this._popover.setLayerContent(l);
        k.subscribe('done', this._onMenuDone.bind(this));
        if (this._popoverShown) this._menu.onShow();
        c('ARIA').controls(this._triggerElem, l);
        this.inform('setMenu', null, c('Arbiter').BEHAVIOR_PERSISTENT);
    };
    j.prototype.setInitialFocus = function (k, l) {
        'use strict';
        if (l) k.focusAnItem();
    };
    j.prototype.getPopover = function () {
        'use strict';
        return this._popover;
    };
    j.prototype.getTriggerElem = function () {
        'use strict';
        return this._triggerElem;
    };
    j.prototype.getInitialMenu = function () {
        'use strict';
        return this._getInitialMenu();
    };
    j.prototype.getMenu = function () {
        'use strict';
        return this._menu;
    };
    j.prototype._onLayerInit = function () {
        'use strict';
        if (!this._menu) this.setMenu(this._getInitialMenu());
        this._popover.getLayer().subscribe('key', this._handleKeyEvent.bind(this));
    };
    j.prototype._onPopoverShow = function () {
        'use strict';
        if (this._menu) this._menu.onShow();
        this._checkInitialFocus();
        this._popoverShown = true;
    };
    j.prototype._checkInitialFocus = function () {
        'use strict';
        var k = c('KeyStatus').isKeyDown() || c('VirtualCursorStatus').isVirtualCursorTriggered();
        if (this._menu) this.setInitialFocus(this._menu, k);
    };
    j.prototype._onPopoverHide = function () {
        'use strict';
        if (this._menu) this._menu.onHide();
        this._popoverShown = false;
    };
    j.prototype._handleKeyEvent = function (k, l) {
        'use strict';
        if (l.target === this._triggerElem) return;
        var m = c('Event').getKeyCode(l);
        if (m === c('Keys').TAB) {
            this._popover.hideLayer();
            c('Focus').set(this._triggerElem);
            return;
        }
        if (l.getModifiers().any) return;
        switch (m) {
            case c('Keys').RETURN:
                if (!this.getMenu().getFocusedItem()) this.inform('returnWithoutFocusedItem');
                return;
            default:
                if (m === c('Keys').SPACE && l.target.type === 'file') return;
                if (this._menu.handleKeydown(m, l) === false) {
                    this._menu.blur();
                    this._menu.handleKeydown(m, l);
                }
                break;
        }
        l.prevent();
    };
    j.prototype._handleKeyEventOnTrigger = function (k) {
        'use strict';
        var l = c('Event').getKeyCode(k),
            m = String.fromCharCode(l).toLowerCase();
        if (/^\w$/.test(m)) {
            this._popover.showLayer();
            this._menu.blur();
            if (this._menu.handleKeydown(l, k) === false) {
                this._popover.hideLayer();
                c('Focus').set(this._triggerElem);
            }
        }
    };
    j.prototype._onMenuDone = function (k) {
        'use strict';
        setTimeout(function () {
            this._popover.hideLayer();
            c('Focus').set(this._triggerElem);
        }.bind(this), 0);
    };
    j.prototype.enable = function () {
        'use strict';
        this._popover.enable();
    };
    j.prototype.disable = function () {
        'use strict';
        this._popover.disable();
    };
    j.prototype.destroy = function () {
        'use strict';
        this._subscriptions.release();
        this._popover.destroy();
        this._getInitialMenu().destroy();
        this._menu && this._menu.destroy();
    };
    Object.assign(j.prototype, {
        _popoverShown: false
    });
    f.exports = j;
}), null);
__d('PopoverMenu.react', ['cx', 'CSS', 'InlineBlock.react', 'Popover', 'PopoverMenu', 'React', 'ReactDOM', 'SubscriptionsHandler', 'joinClasses', 'areEqual', 'setImmediate'], (function a(b, c, d, e, f, g, h) {
    var i, j, k = c('React').PropTypes;
    i = babelHelpers.inherits(l, c('React').Component);
    j = i && i.prototype;

    function l() {
        var m, n;
        'use strict';
        for (var o = arguments.length, p = Array(o), q = 0; q < o; q++) p[q] = arguments[q];
        return n = (m = j.constructor).call.apply(m, [this].concat(p)), this.$ReactPopoverMenu1 = null, this.$ReactPopoverMenu6 = function () {
            if (this.$ReactPopoverMenu1) {
                this.$ReactPopoverMenu1.release();
                this.$ReactPopoverMenu1 = null;
            }
            this.$ReactPopoverMenu7();
            this.$ReactPopoverMenu3.setMenu(this.$ReactPopoverMenu4(this.props.menu));
            this.$ReactPopoverMenu5();
        }.bind(this), this.$ReactPopoverMenu4 = function (r) {
            var s = r.props,
                t = new r.type(s);
            this.$ReactPopoverMenu1 = new(c('SubscriptionsHandler'))();
            if (s.onItemClick) this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('itemclick', s.onItemClick));
            if (s.onItemFocus) this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('focus', s.onItemFocus));
            if (s.onItemBlur) this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('blur', s.onItemBlur));
            if (s.onChange) this.$ReactPopoverMenu1.addSubscriptions(t.subscribe('change', s.onChange));
            if (this.props.onShow) this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('show', this.props.onShow));
            if (this.props.onHide) this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu2.subscribe('hide', this.props.onHide));
            return t;
        }.bind(this), this.getMenu = function () {
            return this.$ReactPopoverMenu3.getMenu();
        }.bind(this), this.isShown = function () {
            return !!(this.$ReactPopoverMenu2 && this.$ReactPopoverMenu2.isShown());
        }.bind(this), this.showPopover = function (r) {
            this.$ReactPopoverMenu2.showLayer();
            if (r) {
                var s = this.$ReactPopoverMenu3.getMenu();
                s.blur();
                s.focusAnItem(r);
            }
        }.bind(this), this.hidePopover = function () {
            var r = this.$ReactPopoverMenu2;
            if (r && r.isShown()) r.hideLayer();
        }.bind(this), this.getFocusedItem = function () {
            var r = this.$ReactPopoverMenu3.getMenu();
            return r.getFocusedItem();
        }.bind(this), this.$ReactPopoverMenu7 = function () {
            var r = this.getMenu();
            r && r.forEachItem(function (s) {
                var t = s.getRoot().firstElementChild;
                t && c('ReactDOM').unmountComponentAtNode(t);
            });
        }.bind(this), n;
    }
    l.getFirstChild = function (m) {
        'use strict';
        var n = m.children;
        return Array.isArray(n) ? n[0] : n;
    };
    l.getButtonSize = function (m) {
        'use strict';
        var n = l.getFirstChild(m);
        return n && n.type.getButtonSize(n.props);
    };
    l.prototype.componentDidMount = function () {
        'use strict';
        var m = c('ReactDOM').findDOMNode(this.refs.root),
            n = m.firstChild;
        c('CSS').addClass(n, "_p");
        this.$ReactPopoverMenu2 = new(c('Popover'))(m, n, this.props.layerBehaviors, {
            alignh: this.props.alignh,
            position: this.props.position,
            disabled: this.props.disabled,
            arrowDimensions: {
                offset: 0,
                length: 0
            },
            disableArrowKeyActivation: this.props.disableArrowKeyActivation,
            enableActivationOnEnter: this.props.enableActivationOnEnter,
            'data-testid': this.props['data-testid']
        });
        this.$ReactPopoverMenu3 = new(c('PopoverMenu'))(this.$ReactPopoverMenu2, n, this.$ReactPopoverMenu4(this.props.menu), this.props.behaviors);
        this.$ReactPopoverMenu5();
    };
    l.prototype.componentDidUpdate = function (m) {
        'use strict';
        if (!c('areEqual')(m.menu, this.props.menu)) c('setImmediate')(this.$ReactPopoverMenu6);
        if (this.props.alignh !== m.alignh) this.$ReactPopoverMenu3.getPopover().getLayer().setAlignment(this.props.alignh);
        if (this.props.disabled !== m.disabled)
            if (this.props.disabled) {
                this.$ReactPopoverMenu3.disable();
            } else this.$ReactPopoverMenu3.enable();
    };
    l.prototype.$ReactPopoverMenu5 = function () {
        'use strict';
        if (this.props.onReturnWithoutFocusedItem) this.$ReactPopoverMenu1.addSubscriptions(this.$ReactPopoverMenu3.subscribe('returnWithoutFocusedItem', this.props.onReturnWithoutFocusedItem));
    };
    l.prototype.render = function () {
        'use strict';
        var m = c('React').Children.map(this.props.children, function (o, p) {
                if (p === 0) {
                    return c('React').cloneElement(o, {
                        className: c('joinClasses')(o.props.className, "_p")
                    });
                } else return o;
            }),
            n = Object.assign({}, this.props);
        delete n.onShow;
        delete n.onHide;
        delete n.alignh;
        delete n.position;
        delete n.layerBehaviors;
        delete n.behaviors;
        delete n.menu;
        delete n.disabled;
        delete n.disableArrowKeyActivation;
        delete n.enableActivationOnEnter;
        return c('React').createElement(c('InlineBlock.react'), babelHelpers['extends']({}, n, {
            className: c('joinClasses')(this.props.className, "uiPopover"),
            ref: 'root',
            disabled: null
        }), m);
    };
    l.prototype.componentWillUnmount = function () {
        'use strict';
        this.hidePopover();
        if (this.$ReactPopoverMenu1) {
            this.$ReactPopoverMenu1.release();
            this.$ReactPopoverMenu1 = null;
        }
        this.$ReactPopoverMenu3 && this.$ReactPopoverMenu3.destroy();
    };
    l.propTypes = {
        alignh: k.oneOf(['left', 'center', 'right']),
        alignv: k.oneOf(['baseline', 'bottom', 'middle', 'top']),
        position: k.oneOf(['above', 'below', 'left', 'right']),
        layerBehaviors: k.array,
        menu: k.object.isRequired,
        disabled: k.bool,
        disableArrowKeyActivation: k.bool,
        enableActivationOnEnter: k.bool,
        onReturnWithoutFocusedItem: k.func
    };
    l.defaultProps = {
        alignv: 'middle'
    };
    f.exports = l;
}), null);
__d('SimpleDrag', ['Event', 'ArbiterMixin', 'SubscriptionsHandler', 'UserAgent_DEPRECATED', 'Vector', 'emptyFunction'], (function a(b, c, d, e, f, g) {
    function h(i) {
        this.minDragDistance = 0;
        this._subscriptions = new(c('SubscriptionsHandler'))();
        this._subscriptions.addSubscriptions(c('Event').listen(i, 'mousedown', this._start.bind(this)));
    }
    Object.assign(h.prototype, c('ArbiterMixin'), {
        setMinDragDistance: function i(j) {
            this.minDragDistance = j;
        },
        destroy: function i() {
            this._subscriptions.release();
        },
        _start: function i(event) {
            var j = false,
                k = true,
                l = null;
            if (this.inform('mousedown', event)) k = false;
            if (this.minDragDistance) {
                l = c('Vector').getEventPosition(event);
            } else {
                j = true;
                var m = this.inform('start', event);
                if (m === true) {
                    k = false;
                } else if (m === false) {
                    j = false;
                    return;
                }
            }
            var n = c('UserAgent_DEPRECATED').ie() < 9 ? document.documentElement : window,
                o = c('Event').listen(n, {
                    selectstart: k ? c('Event').prevent : c('emptyFunction'),
                    mousemove: function (event) {
                        if (!j) {
                            var p = c('Vector').getEventPosition(event);
                            if (l.distanceTo(p) < this.minDragDistance) return;
                            j = true;
                            if (this.inform('start', event) === false) {
                                j = false;
                                return;
                            }
                        }
                        this.inform('update', event);
                    }.bind(this),
                    mouseup: function (event) {
                        for (var p in o) o[p].remove();
                        if (j) {
                            this.inform('end', event);
                        } else this.inform('click', event);
                    }.bind(this)
                });
            k && event.prevent();
        }
    });
    f.exports = h;
}), null);
__d('firstx', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';

    function i(j) {
        for (var k = j, l = Array.isArray(k), m = 0, k = l ? k : k[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
            var n;
            if (l) {
                if (m >= k.length) break;
                n = k[m++];
            } else {
                m = k.next();
                if (m.done) break;
                n = m.value;
            }
            var o = n;
            return o;
        }
        h(0);
    }
    f.exports = i;
}), null);
__d('ScrollableArea', ['ArbiterMixin', 'Bootloader', 'BrowserSupport', 'CSS', 'CSSFade', 'DataStore', 'Deferred', 'DOM', 'Event', 'FocusEvent', 'Parent', 'Run', 'Scroll', 'SimpleDrag', 'Style', 'SubscriptionsHandler', 'UserAgent_DEPRECATED', 'Vector', 'createCancelableFunction', 'emptyFunction', 'firstx', 'ifRequired', 'mixin', 'queryThenMutateDOM', 'setTimeoutAcrossTransitions', 'throttle'], (function a(b, c, d, e, f, g) {
    var h, i, j = 12;
    h = babelHelpers.inherits(k, c('mixin')(c('ArbiterMixin')));
    i = h && h.prototype;

    function k(l, m) {
        'use strict';
        i.constructor.call(this);
        if (!l) return;
        m = m || {};
        c('Run').onAfterLoad(function () {
            c('Bootloader').loadModules(["Animation"], c('emptyFunction'), 'ScrollableArea');
        });
        this._elem = l;
        this._wrap = c('firstx')(c('DOM').scry(l, 'div.uiScrollableAreaWrap'));
        this._body = c('firstx')(c('DOM').scry(this._wrap, 'div.uiScrollableAreaBody'));
        this._content = c('firstx')(c('DOM').scry(this._body, 'div.uiScrollableAreaContent'));
        this._track = c('firstx')(c('DOM').scry(l, 'div.uiScrollableAreaTrack'));
        this._trackIsHovered = false;
        this._isFocussed = false;
        this._gripper = c('firstx')(c('DOM').scry(this._track, 'div.uiScrollableAreaGripper'));
        this._options = m;
        this._throttledComputeHeights = c('throttle').withBlocking(this._computeHeights, 250, this);
        this.throttledAdjustGripper = c('throttle').withBlocking(this.adjustGripper, 250, this);
        this._throttledShowGripperAndShadows = c('throttle').withBlocking(this._showGripperAndShadows, 250, this);
        this._throttledRespondMouseMove = c('throttle')(this._respondMouseMove, 250, this);
        c('setTimeoutAcrossTransitions')(this.adjustGripper.bind(this), 0);
        this._listeners = new(c('SubscriptionsHandler'))();
        this._listeners.addSubscriptions(c('Event').listen(this._wrap, 'scroll', this._handleScroll.bind(this)), c('Event').listen(l, 'mousemove', this._handleMouseMove.bind(this)), c('Event').listen(this._track, 'click', this._handleClickOnTrack.bind(this)));
        if (c('BrowserSupport').hasPointerEvents()) this._listeners.addSubscriptions(c('Event').listen(l, 'mousedown', this._handleClickOnTrack.bind(this)));
        if (m.fade !== false) {
            var n;
            (n = this._listeners).addSubscriptions.apply(n, [c('Event').listen(l, 'mouseenter', this._handleMouseEnter.bind(this)), c('Event').listen(l, 'mouseleave', this._handleMouseLeave.bind(this))].concat(this._attachFocusListeners(this._wrap)));
        } else if (c('BrowserSupport').hasPointerEvents()) this._listeners.addSubscriptions(c('Event').listen(l, 'mouseleave', function () {
            if (!this._isFocussed) {
                this._trackIsHovered = false;
                c('CSS').removeClass(l, 'uiScrollableAreaTrackOver');
            }
        }.bind(this)));
        if (c('UserAgent_DEPRECATED').webkit() || c('UserAgent_DEPRECATED').chrome()) {
            this._listeners.addSubscriptions(c('Event').listen(l, 'mousedown', function () {
                var o = c('Event').listen(window, 'mouseup', function () {
                    if (c('Scroll').getLeft(l)) c('Scroll').setLeft(l, 0);
                    o.remove();
                });
            }));
        } else if (c('UserAgent_DEPRECATED').firefox()) this._wrap.addEventListener('DOMMouseScroll', function (event) {
            event.axis === event.HORIZONTAL_AXIS && event.preventDefault();
        }, false);
        this._drag = this.initDrag();
        c('DataStore').set(this._elem, 'ScrollableArea', this);
        if (!m.persistent) {
            this._destroy = c('createCancelableFunction')(this._destroy.bind(this));
            c('Run').onLeave(this._destroy);
        }
        if (m.shadow !== false) c('CSS').addClass(this._elem, 'uiScrollableAreaWithShadow');
    }
    k.prototype.getElement = function () {
        'use strict';
        return this._elem;
    };
    k.prototype.initDrag = function () {
        'use strict';
        var l = c('BrowserSupport').hasPointerEvents(),
            m = new(c('SimpleDrag'))(l ? this._elem : this._gripper);
        m.subscribe('start', function (n, event) {
            if (!(event.which && event.which === 1 || event.button && event.button === 1)) return;
            var o = c('Vector').getEventPosition(event, 'viewport');
            if (l) {
                var p = this._gripper.getBoundingClientRect();
                if (o.x < p.left || o.x > p.right || o.y < p.top || o.y > p.bottom) return false;
            }
            event.stopPropagation();
            this.inform('grip_start');
            var q = o.y,
                r = this._gripper.offsetTop;
            c('CSS').addClass(this._elem, 'uiScrollableAreaDragging');
            var s = m.subscribe('update', function (u, event) {
                    var v = c('Vector').getEventPosition(event, 'viewport').y - q;
                    this._throttledComputeHeights();
                    var w = this._contentHeight - this._containerHeight,
                        x = r + v,
                        y = this._trackHeight - this._gripperHeight;
                    x = Math.max(Math.min(x, y), 0);
                    var z = x / y * w;
                    c('Scroll').setTop(this._wrap, z);
                }.bind(this)),
                t = m.subscribe('end', function () {
                    m.unsubscribe(s);
                    m.unsubscribe(t);
                    c('CSS').removeClass(this._elem, 'uiScrollableAreaDragging');
                    this.inform('grip_end');
                }.bind(this));
        }.bind(this));
        return m;
    };
    k.prototype.adjustGripper = function () {
        'use strict';
        c('queryThenMutateDOM')(function () {
            return this._needsGripper();
        }.bind(this), function (l) {
            if (l) {
                c('Style').set(this._gripper, 'height', this._gripperHeight + 'px');
                this._slideGripper();
            }
        }.bind(this));
        this._throttledShowGripperAndShadows();
        return this;
    };
    k.prototype._attachFocusListeners = function (l) {
        'use strict';
        var m = void 0;
        return [c('FocusEvent').listen(l, function (n) {
            if (m) {
                m.reject();
                m = null;
            }
            if (n) {
                m = new(c('Deferred'))();
                m.done(function () {
                    this._isFocussed = true;
                    this._trackIsHovered = true;
                    c('queryThenMutateDOM')(null, function () {
                        c('CSS').addClass(this._elem, 'uiScrollableAreaTrackOver');
                    }.bind(this));
                    this.showScrollbar({
                        hideAfterDelay: false
                    });
                    m = null;
                }.bind(this), function () {
                    m = null;
                });
            } else {
                this._isFocussed = false;
                if (this._mouseOver) {
                    this._respondMouseMove();
                } else {
                    c('queryThenMutateDOM')(null, function () {
                        c('CSS').removeClass(this._elem, 'uiScrollableAreaTrackOver');
                    }.bind(this));
                    this.hideScrollbar({
                        hideAfterDelay: false,
                        shouldFade: false
                    });
                }
            }
        }.bind(this)), c('Event').listen(document.documentElement, 'keyup', function (n) {
            if (m) m.resolve();
        })];
    };
    k.prototype._computeHeights = function () {
        'use strict';
        this._containerHeight = this._elem.clientHeight;
        this._contentHeight = this._content.offsetHeight;
        this._trackHeight = this._track.offsetHeight;
        this._gripperHeight = Math.max(this._containerHeight / this._contentHeight * this._trackHeight, j);
    };
    k.prototype._needsGripper = function () {
        'use strict';
        this._throttledComputeHeights();
        return this._gripperHeight < this._trackHeight;
    };
    k.prototype._slideGripper = function () {
        'use strict';
        c('queryThenMutateDOM')(function () {
            return c('Scroll').getTop(this._wrap) / (this._contentHeight - this._containerHeight) * (this._trackHeight - this._gripperHeight);
        }.bind(this), function (l) {
            c('Style').set(this._gripper, 'top', l + 'px');
        }.bind(this));
    };
    k.prototype._showGripperAndShadows = function () {
        'use strict';
        c('queryThenMutateDOM')(function () {
            return {
                needsGripper: this._needsGripper(),
                top: c('Scroll').getTop(this._wrap) > 0,
                isScrolledToBottom: this.isScrolledToBottom()
            };
        }.bind(this), function (l) {
            var m = l.needsGripper,
                n = l.top,
                o = l.isScrolledToBottom;
            c('CSS').conditionShow(this._gripper, m);
            c('CSS').conditionClass(this._elem, 'contentBefore', n);
            c('CSS').conditionClass(this._elem, 'contentAfter', !o);
        }.bind(this));
    };
    k.prototype.destroy = function () {
        'use strict';
        this._destroy();
        this._destroy.cancel && this._destroy.cancel();
    };
    k.prototype._destroy = function () {
        'use strict';
        this._listeners && this._listeners.release();
        this._elem && c('DataStore').remove(this._elem, 'ScrollableArea');
        this._drag && this._drag.destroy();
    };
    k.prototype._handleClickOnTrack = function (event) {
        'use strict';
        var l = c('Vector').getEventPosition(event, 'viewport'),
            m = this._gripper.getBoundingClientRect();
        if (l.x < m.right && l.x > m.left) {
            if (l.y < m.top) {
                this.setScrollTop(this.getScrollTop() - this._elem.clientHeight);
            } else if (l.y > m.bottom) this.setScrollTop(this.getScrollTop() + this._elem.clientHeight);
            event.kill();
        }
    };
    k.prototype._handleMouseMove = function (event) {
        'use strict';
        var l = this._options.fade !== false;
        if (c('BrowserSupport').hasPointerEvents() || l) {
            this._mousePos = c('Vector').getEventPosition(event);
            this._throttledRespondMouseMove();
        }
    };
    k.prototype._respondMouseMove = function () {
        'use strict';
        if (!this._mouseOver || this._isFocussed) return;
        var l = this._options.fade !== false,
            m = this._mousePos,
            n = c('Vector').getElementPosition(this._track).x,
            o = c('Vector').getElementDimensions(this._track).x,
            p = Math.abs(n + o / 2 - m.x),
            q = c('BrowserSupport').hasPointerEvents() && p <= 10;
        if (q && !this._trackIsHovered) {
            this._trackIsHovered = true;
            c('CSS').addClass(this._elem, 'uiScrollableAreaTrackOver');
            this.throttledAdjustGripper();
        } else if (!q && this._trackIsHovered) {
            this._trackIsHovered = false;
            c('CSS').removeClass(this._elem, 'uiScrollableAreaTrackOver');
        }
        if (l)
            if (p < 25) {
                this.showScrollbar({
                    hideAfterDelay: false
                });
            } else if (!this._options.no_fade_on_hover && !this._isFocussed) this.hideScrollbar({
            hideAfterDelay: true,
            shouldFade: true
        });
    };
    k.prototype._handleScroll = function (event) {
        'use strict';
        if (this._needsGripper()) this._slideGripper();
        this.throttledAdjustGripper();
        if (this._options.fade !== false && !this._isFocussed) this.showScrollbar({
            hideAfterDelay: true
        });
        this.inform('scroll');
    };
    k.prototype._handleMouseLeave = function () {
        'use strict';
        this._mouseOver = false;
        if (!this._isFocussed) this.hideScrollbar({
            hideAfterDelay: true,
            shouldFade: true
        });
    };
    k.prototype._handleMouseEnter = function () {
        'use strict';
        this._mouseOver = true;
        if (!this._isFocussed) this.showScrollbar({
            hideAfterDelay: true
        });
    };
    k.prototype.hideScrollbar = function (l) {
        var m = l.hideAfterDelay,
            n = l.shouldFade;
        'use strict';
        if (this._hideTimeout || !this._scrollbarVisible) return this;
        var o = function () {
            this._scrollbarVisible = false;
            c('CSSFade').hide(this._track, {
                simple: !n
            });
        }.bind(this);
        if (m) {
            this._hideTimeout = c('setTimeoutAcrossTransitions')(function () {
                this._hideTimeout = null;
                o();
            }.bind(this), 750);
        } else o();
        return this;
    };
    k.prototype.pageDown = function (l, m) {
        'use strict';
        this._scrollPage(1, l, m);
    };
    k.prototype.pageUp = function (l, m) {
        'use strict';
        this._scrollPage(-1, l, m);
    };
    k.prototype._scrollPage = function (l, m, n) {
        'use strict';
        var o = l * this._containerHeight,
            p = this.getScrollHeight() - this._containerHeight,
            q = Math.max(0, Math.min(p, this.getScrollTop() + o));
        this.setScrollTop(q, m, n);
    };
    k.prototype.resize = function () {
        'use strict';
        if (this._body.style.width) this._body.style.width = '';
        var l = this._wrap.offsetWidth - this._wrap.clientWidth;
        if (l > 0) c('Style').set(this._body, 'margin-right', -l + 'px');
        return this;
    };
    k.prototype.showScrollbar = function (l) {
        var m = l.hideAfterDelay;
        'use strict';
        if (this._hideTimeout) {
            clearTimeout(this._hideTimeout);
            this._hideTimeout = null;
        }
        if (this._scrollbarVisible) return this;
        this._scrollbarVisible = true;
        c('queryThenMutateDOM')(null, function () {
            c('CSSFade').show(this._track, {
                duration: 0
            });
            this.throttledAdjustGripper();
            if (m) this.hideScrollbar({
                hideAfterDelay: true,
                shouldFade: !this._options.no_fade_on_hover
            });
        }.bind(this));
        return this;
    };
    k.prototype.distanceToBottom = function () {
        'use strict';
        this._computeHeights();
        return this._contentHeight - (c('Scroll').getTop(this._wrap) + this._containerHeight);
    };
    k.prototype.isScrolledToBottom = function () {
        'use strict';
        return this.distanceToBottom() <= 0;
    };
    k.prototype.isScrolledToTop = function () {
        'use strict';
        return c('Scroll').getTop(this._wrap) === 0;
    };
    k.prototype.scrollToBottom = function (l, m) {
        'use strict';
        this.setScrollTop(this._wrap.scrollHeight, l, m);
    };
    k.prototype.scrollToTop = function (l, m) {
        'use strict';
        this.setScrollTop(0, l, m);
    };
    k.prototype.scrollIntoView = function (l, m) {
        'use strict';
        var n = this._wrap.clientHeight,
            o = l.offsetHeight,
            p = c('Scroll').getTop(this._wrap),
            q = p + n,
            r = 0;
        while (l != null && l !== this._wrap) {
            r += l.offsetTop;
            l = l.offsetParent;
        }
        var s = r + o;
        if (r < p || n < o) {
            this.setScrollTop(r, m);
        } else if (s > q) this.setScrollTop(p + (s - q), m);
    };
    k.prototype.scrollElemToTop = function (l, m, n) {
        'use strict';
        this.setScrollTop(l.offsetTop, m, {
            callback: n
        });
    };
    k.prototype.poke = function () {
        'use strict';
        var l = c('Scroll').getTop(this._wrap);
        c('Scroll').setTop(this._wrap, c('Scroll').getTop(this._wrap) + 1);
        c('Scroll').setTop(this._wrap, c('Scroll').getTop(this._wrap) - 1);
        c('Scroll').setTop(this._wrap, l);
        if (this._isFocussed) {
            return this;
        } else return this.showScrollbar({
            hideAfterDelay: false
        });
    };
    k.prototype.getClientHeight = function () {
        'use strict';
        return this._wrap.clientHeight;
    };
    k.prototype.getScrollTop = function () {
        'use strict';
        return c('Scroll').getTop(this._wrap);
    };
    k.prototype.getScrollHeight = function () {
        'use strict';
        return this._wrap.scrollHeight;
    };
    k.prototype.setScrollTop = function (l, m) {
        var n = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
        'use strict';
        if (m !== false) {
            c('ifRequired')('Animation', function (o) {
                return this._animatedSetScrollTop(o, l, n);
            }.bind(this), function () {
                return this._simpleSetScrollTop(l, n);
            }.bind(this));
        } else this._simpleSetScrollTop(l, n);
    };
    k.prototype._simpleSetScrollTop = function (l, m) {
        'use strict';
        c('Scroll').setTop(this._wrap, l);
        m.callback && m.callback();
    };
    k.prototype._animatedSetScrollTop = function (l, m, n) {
        'use strict';
        if (this._scrollTopAnimation) this._scrollTopAnimation.stop();
        var o = n.duration || 250,
            p = n.ease || l.ease.end;
        this._scrollTopAnimation = new l(this._wrap).to('scrollTop', m).ease(p).duration(o).ondone(n.callback).go();
    };
    k.renderDOM = function () {
        'use strict';
        var l = c('DOM').create('div', {
                className: 'uiScrollableAreaContent'
            }),
            m = c('DOM').create('div', {
                className: 'uiScrollableAreaBody'
            }, l),
            n = c('DOM').create('div', {
                className: 'uiScrollableAreaWrap scrollable'
            }, m),
            o = c('DOM').create('div', {
                className: 'uiScrollableArea native'
            }, n);
        return {
            root: o,
            wrap: n,
            body: m,
            content: l
        };
    };
    k.fromNative = function (l, m) {
        'use strict';
        if (!c('CSS').hasClass(l, 'uiScrollableArea') || !c('CSS').hasClass(l, 'native')) return;
        m = m || {};
        c('CSS').removeClass(l, 'native');
        var n = c('DOM').create('div', {
            className: 'uiScrollableAreaTrack'
        }, c('DOM').create('div', {
            className: 'uiScrollableAreaGripper'
        }));
        if (m.fade !== false) {
            c('CSS').addClass(l, 'fade');
            c('CSS').addClass(n, 'hidden_elem');
        } else c('CSS').addClass(l, 'nofade');
        if (m.tabIndex !== undefined && m.tabIndex !== null) {
            c('DOM').setAttributes(n, {
                tabIndex: m.tabIndex
            });
            c('DOM').prependContent(l, n);
        } else c('DOM').appendContent(l, n);
        var o = new k(l, m);
        o.resize();
        return o;
    };
    k.getInstance = function (l) {
        'use strict';
        var m = c('Parent').byClass(l, 'uiScrollableArea');
        return m ? c('DataStore').get(m, 'ScrollableArea') : null;
    };
    k.poke = function (l) {
        'use strict';
        var m = k.getInstance(l);
        m && m.poke();
    };
    f.exports = k;
}), null);
__d('Menu', ['cx', 'BehaviorsMixin', 'CSS', 'DataStore', 'DOM', 'Event', 'Keys', 'Parent', 'PopoverMenuInterface', 'ScrollableArea', 'Style', 'SubscriptionsHandler', 'UserAgent', 'debounce'], (function a(b, c, d, e, f, g, h) {
    var i, j, k = 500;
    i = babelHelpers.inherits(l, c('PopoverMenuInterface'));
    j = i && i.prototype;

    function l(m, n) {
        'use strict';
        j.constructor.call(this);
        this._items = [];
        for (var o = 0; o < m.length; o++) {
            var p = m[o],
                q = l.buildItemFromData(p);
            this._items[o] = q;
        }
        this._config = n || {};
        this._theme = n.theme || {};
        this._subscriptions = new(c('SubscriptionsHandler'))();
        this._keysSoFar = '';
        this._clearKeysSoFarAfterDelay = c('debounce')(function () {
            this._keysSoFar = '';
        }.bind(this), k);
    }
    l.buildItemFromData = function (m) {
        'use strict';
        if (m.ctor) {
            return new m.ctor(m);
        } else return new m.type(m.props);
    };
    l.prototype.addItem = function (m) {
        'use strict';
        this._addItem(m);
    };
    l.prototype.addItemBefore = function (m, n) {
        'use strict';
        this._addItem(m, n, false);
    };
    l.prototype.addItemAfter = function (m, n) {
        'use strict';
        this._addItem(m, n, true);
    };
    l.prototype._addItem = function (m, n, o) {
        'use strict';
        var p = this._items.indexOf(m);
        if (p >= 0) {
            var q = o ? -1 : 1;
            if (this._items[p + q] == n) return;
            this._items.splice(p, 1);
        }
        if (n) {
            p = this._items.indexOf(n);
            if (p < 0) throw new Error('reference item must already be in the menu');
            if (o) p++;
            this._items.splice(p, 0, m);
        } else this._items.push(m);
        if (this._root) this._insertItem(m, n, o);
    };
    l.prototype.removeItem = function (m) {
        'use strict';
        var n = this._items.indexOf(m);
        if (n < 0) return;
        this._items.splice(n, 1);
        this._root && c('DOM').remove(m.getRoot());
    };
    l.prototype.forEachItem = function (m) {
        'use strict';
        this._items.forEach(m);
    };
    l.prototype.getFocusedItem = function () {
        'use strict';
        return this._focused;
    };
    l.prototype.getItemAt = function (m) {
        'use strict';
        return this._items[m] || null;
    };
    l.prototype.getRoot = function () {
        'use strict';
        if (!this._root) this._render();
        return this._root;
    };
    l.prototype.onShow = function () {
        'use strict';
        if (this._config.maxheight)
            if (!this._scrollableArea) {
                this._scrollableArea = c('ScrollableArea').fromNative(this._scrollableElems.root, {
                    fade: true
                });
            } else this._scrollableArea.resize();
        this.inform('show');
    };
    l.prototype.onHide = function () {
        'use strict';
        this.blur();
        this.inform('hide');
    };
    l.prototype.focusAnItem = function (m) {
        'use strict';
        return this._attemptFocus(m || 0, 1);
    };
    l.prototype.blur = function () {
        'use strict';
        if (this._focused) {
            var m = this._focused;
            this._focused.blur();
            this._focused = null;
            this.inform('blur', {
                item: m
            });
        }
    };
    l.prototype.handleKeydown = function (m, n) {
        'use strict';
        if (!this._items.length) return false;
        var o = this._items.indexOf(this._focused);
        switch (m) {
            case c('Keys').UP:
            case c('Keys').DOWN:
                var p = m === c('Keys').UP,
                    q = p ? -1 : 1,
                    r = p ? this._items.length - 1 : 0;
                if (o === -1) return this._attemptFocus(r, q);
                return this._attemptFocus(o + q, q);
            case c('Keys').HOME:
                return this._attemptFocus(0, 1);
            case c('Keys').END:
                return this._attemptFocus(this._items.length - 1, -1);
            case c('Keys').SPACE:
                if (this._items.indexOf(this._focused) !== -1) {
                    this._handleItemClick(this._focused, n);
                    return true;
                }
                return false;
            case c('Keys').RIGHT:
            case c('Keys').LEFT:
            case c('Keys').INSERT:
            case c('Keys').DELETE:
                return false;
            default:
                var s = this._findItemToFocus(m, o);
                return !!(s && this._focusItem(s));
        }
    };
    l.prototype._findItemToFocus = function (m, n) {
        'use strict';
        var o = String.fromCharCode(m).toLowerCase();
        if (!this._keysSoFar) {
            this._searchIndex = n;
            this._itemToFocus = this._focused || this._items[0];
        }
        this._keysSoFar += o;
        this._clearKeysSoFarAfterDelay();
        var p = this._findMatchInRange(this._searchIndex + 1, this._items.length);
        if (!p) p = this._findMatchInRange(0, this._searchIndex);
        this._itemToFocus = p || this._itemToFocus;
        return this._itemToFocus;
    };
    l.prototype._findMatchInRange = function (m, n) {
        'use strict';
        for (var o = m; o < n; o++) {
            var p = this._items[o].getLabel();
            if (p && p.toLowerCase().indexOf(this._keysSoFar) === 0) return this._items[o];
        }
        return null;
    };
    l.prototype._render = function () {
        'use strict';
        this._ul = c('DOM').create('ul', {
            className: "_54nf"
        });
        this._ul.setAttribute('role', 'menu');
        this._items.forEach(function (o) {
            this._insertItem(o, null);
        }, this);
        this._subscriptions.addSubscriptions(c('Event').listen(this._ul, 'click', this._handleClick.bind(this)), c('Event').listen(this._ul, 'mouseover', this._handleMouseOver.bind(this)), c('Event').listen(this._ul, 'mouseout', this._handleMouseOut.bind(this)));
        var m = this._ul;
        if (this._config.maxheight) {
            this._scrollableElems = c('ScrollableArea').renderDOM();
            c('DOM').setContent(this._scrollableElems.content, this._ul);
            m = this._scrollableElems.root;
            c('Style').set(this._scrollableElems.wrap, 'max-height', this._config.maxheight + 'px');
        }
        var n = "_54nq" + (this._config.className ? ' ' + this._config.className : '') + (this._theme.className ? ' ' + this._theme.className : '');
        this._root = c('DOM').create('div', {
            className: n
        }, c('DOM').create('div', {
            className: "_54ng"
        }, m));
        this._config.id && this._root.setAttribute('id', this._config.id);
        this._config.testid && this._root.setAttribute('data-testid', this._config.testid);
        if (this._config.behaviors) this.enableBehaviors(this._config.behaviors);
        this.inform('rendered', this._root);
    };
    l.prototype._needsDefaultBehavior = function (m) {
        'use strict';
        if (m.isDefaultRequested && m.isDefaultRequested()) {
            var n = c('Parent').byTag(m.getTarget(), 'a'),
                o = n && n.getAttribute('href');
            return o && o[0] !== '#';
        }
        return false;
    };
    l.prototype._handleClick = function (m) {
        'use strict';
        if (m.getTarget() === this._ul && c('UserAgent').isBrowser('IE')) {
            m.stop();
            return;
        }
        if (!this._needsDefaultBehavior(m)) {
            var n = this._getItemInstance(m.getTarget());
            if (n) return this._handleItemClick(n, m);
        }
    };
    l.prototype._handleItemClick = function (m, n) {
        'use strict';
        this.inform('itemclick', {
            item: m,
            event: n
        });
        if (m.hasAction()) this.done();
        return m.handleClick(n);
    };
    l.prototype._handleMouseOver = function (m) {
        'use strict';
        var n = this._getItemInstance(m.getTarget());
        n && this._focusItem(n, true);
    };
    l.prototype._handleMouseOut = function (m) {
        'use strict';
        var n = this._getItemInstance(m.getTarget());
        if (n && this._focused === n) this.blur();
    };
    l.prototype._insertItem = function (m, n, o) {
        'use strict';
        var p = m.getRoot();
        c('CSS').addClass(p, '__MenuItem');
        c('DataStore').set(p, 'MenuItem', m);
        if (n) {
            var q = o ? c('DOM').insertAfter : c('DOM').insertBefore;
            q(n.getRoot(), p);
        } else c('DOM').appendContent(this._ul, p);
    };
    l.prototype._attemptFocus = function (m, n) {
        'use strict';
        var o = this._items.length;
        if ((m < 0 || m >= o) && !this._focused) return false;
        var p = (o + m % o) % o,
            q = this.getItemAt(p);
        if (q === this._focused || this._focusItem(q)) return true;
        return this._attemptFocus(p + n, n);
    };
    l.prototype._focusItem = function (m, n) {
        'use strict';
        if (m && m.focus(n) !== false) {
            if (this._focused !== m) {
                this.blur();
                this._focused = m;
                this.inform('focus', {
                    item: m,
                    from_mouse_over: n
                });
            }
            return true;
        }
        return false;
    };
    l.prototype._getItemInstance = function (m) {
        'use strict';
        var n = c('Parent').byClass(m, '__MenuItem');
        return n ? c('DataStore').get(n, 'MenuItem') : null;
    };
    l.prototype.destroy = function () {
        'use strict';
        this._items.forEach(function (m) {
            var n = m.getRoot();
            c('DataStore').remove(n, 'MenuItem');
            m.destroy();
        });
        this._subscriptions.release();
        this.destroyBehaviors();
    };
    Object.assign(l.prototype, c('BehaviorsMixin'), {
        _focused: null,
        _root: null
    });
    f.exports = l;
}), null);
__d('MenuItemInterface', ['React', 'emptyFunction'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('React').Component);
    i = h && h.prototype;
    j.prototype.getRoot = function () {
        'use strict';
        if (!this._root) this._root = this.render();
        return this._root;
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    Object.assign(j.prototype, {
        _root: null,
        render: c('emptyFunction'),
        getAccessKey: c('emptyFunction'),
        getLabel: c('emptyFunction'),
        hasAction: c('emptyFunction').thatReturnsFalse,
        focus: c('emptyFunction').thatReturnsFalse,
        blur: c('emptyFunction').thatReturnsFalse,
        onShow: c('emptyFunction').thatReturnsFalse,
        handleClick: c('emptyFunction').thatReturnsFalse,
        destroy: c('emptyFunction')
    });
    f.exports = j;
}), null);
__d('MenuItemBase', ['cx', 'DOM', 'HTML', 'MenuItemInterface'], (function a(b, c, d, e, f, g, h) {
    var i, j;
    i = babelHelpers.inherits(k, c('MenuItemInterface'));
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this);
        this._ARIARole = 'menuitem';
        this._data = babelHelpers['extends']({}, l);
    }
    k.prototype.render = function () {
        'use strict';
        var l = "_54ni";
        if (this._data.className) l += ' ' + this._data.className;
        var m = {
            className: l,
            role: 'presentation'
        };
        Object.assign(m, this.__getAttributesFromData());
        delete m['data-testid'];
        return c('DOM').create('li', m, this._renderItemContent());
    };
    k.prototype._renderItemContent = function () {
        'use strict';
        return c('HTML')(this._data.markup).getNodes();
    };
    k.prototype.__getAttributesFromData = function () {
        'use strict';
        var l = {};
        for (var m in this._data)
            if (m.indexOf('data-') === 0 || m.indexOf('aria-') === 0) l[m] = this._data[m];
        return l;
    };
    f.exports = k;
}), null);
__d('MenuItem', ['cx', 'CSS', 'DOM', 'MenuItemBase', 'React', 'ReactDOM', 'joinClasses', 'emptyFunction'], (function a(b, c, d, e, f, g, h) {
    var i, j, k = ['href', 'rel', 'ajaxify', 'target', 'accesskey'];

    function l(o, p) {
        var q = {};
        k.forEach(function (r) {
            if (p[r]) q[r] = p[r];
        });
        c('DOM').setAttributes(o, q);
    }

    function m(o) {
        k.forEach(function (p) {
            o.removeAttribute(p);
        });
    }
    i = babelHelpers.inherits(n, c('MenuItemBase'));
    j = i && i.prototype;

    function n(o) {
        'use strict';
        j.constructor.call(this, o);
        this._disabled = !!this._data.disabled;
        this._onclickHandler = this._data.onclick || this._data.onClick;
    }
    n.prototype.getValue = function () {
        'use strict';
        return this._data.value;
    };
    n.prototype.getLabel = function () {
        'use strict';
        return this._data.label;
    };
    n.prototype.getAccessKey = function () {
        'use strict';
        var o = this.getLabel();
        return o && o.charAt(0);
    };
    n.prototype.focus = function (o) {
        'use strict';
        if (this.isDisabled() || !this._root.offsetParent || !this.hasAction()) return false;
        c('CSS').addClass(this._root, "_54ne");
        c('CSS').addClass(this._root, 'selected');
        o || this._anchor.focus();
    };
    n.prototype.blur = function () {
        'use strict';
        c('CSS').removeClass(this._root, "_54ne");
        c('CSS').removeClass(this._root, 'selected');
    };
    n.prototype.handleClick = function (o) {
        'use strict';
        if (this.isDisabled()) return false;
        if (typeof this._onclickHandler === 'function') return this._onclickHandler(o);
        return true;
    };
    n.prototype.setOnClickHandler = function (o) {
        'use strict';
        this._onclickHandler = o;
    };
    n.prototype._renderItemContent = function () {
        'use strict';
        this._anchor = c('DOM').create(this._data.renderas === 'label' ? 'label' : 'a', {
            className: "_54nc" + (this._data.icon ? ' ' + "_54nu" : '')
        });
        if (this._data.children) {
            var o = null;
            if (this._data.icon) o = c('React').cloneElement(this._data.icon, {
                className: c('joinClasses')(this._data.icon.props.className, 'mrs')
            });
            c('ReactDOM').render(c('React').createElement('span', null, o, c('React').createElement('span', {
                className: "_54nh"
            }, this._data.children)), this._anchor);
            this._data.label = this._anchor.innerText || this._anchor.textContent;
        } else {
            var p = c('DOM').create('span', null, c('DOM').create('span', {
                className: "_54nh"
            }, this._data.markup || this._data.label));
            if (this._data.icon) c('DOM').prependContent(p, this._data.icon);
            c('DOM').setContent(this._anchor, p);
        }
        if (!this._data.href) this._data.href = '#';
        if (!this.isDisabled()) l(this._anchor, this._data);
        c('DOM').setAttributes(this._anchor, this.__getAttributesFromData());
        this._anchor.setAttribute('role', this._ARIARole);
        var q = this._data.title;
        q && this._anchor.setAttribute('title', q);
        return this._anchor;
    };
    n.prototype.isDisabled = function () {
        'use strict';
        return this._disabled;
    };
    n.prototype.enable = function () {
        'use strict';
        if (this._root) {
            l(this._anchor, this._data);
            c('CSS').removeClass(this._root, "_5arm");
        }
        this._disabled = false;
    };
    n.prototype.disable = function () {
        'use strict';
        if (this._root) {
            m(this._anchor);
            c('CSS').addClass(this._root, "_5arm");
        }
        this._disabled = true;
    };
    n.prototype.render = function () {
        'use strict';
        var o = j.render.call(this);
        if (this._disabled) c('CSS').addClass(o, "_5arm");
        return o;
    };
    n.prototype.destroy = function () {
        'use strict';
        if (this._anchor) c('ReactDOM').unmountComponentAtNode(this._anchor);
    };
    Object.assign(n.prototype, {
        hasAction: c('emptyFunction').thatReturnsTrue
    });
    f.exports = n;
}), null);
__d('MenuItemNoAction', ['MenuItem'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('MenuItem'));
    i = h && h.prototype;
    j.prototype.hasAction = function () {
        'use strict';
        return false;
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}), null);
__d('MenuSelectableItem', ['cx', 'CSS', 'DOM', 'MenuItem'], (function a(b, c, d, e, f, g, h) {
    var i, j;
    i = babelHelpers.inherits(k, c('MenuItem'));
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this, l);
        this._ARIARole = 'menuitemcheckbox';
        this._selected = !!this._data.selected;
    }
    k.prototype.getIcon = function () {
        'use strict';
        return this._data.icon;
    };
    k.prototype.setIcon = function (l) {
        'use strict';
        c('DOM').replace(this._data.icon, l);
        this._data.icon = l;
    };
    k.prototype.isSelected = function () {
        'use strict';
        return this._selected;
    };
    k.prototype.select = function () {
        'use strict';
        if (this.isDisabled()) return false;
        c('CSS').addClass(this._root, "_54nd");
        this._anchor.setAttribute('aria-checked', 'true');
        this._selected = true;
    };
    k.prototype.deselect = function () {
        'use strict';
        c('CSS').removeClass(this._root, "_54nd");
        this._anchor.setAttribute('aria-checked', 'false');
        this._selected = false;
    };
    k.prototype.render = function () {
        'use strict';
        var l = j.render.call(this);
        if (this._data.selected) {
            c('CSS').addClass(l, "_54nd");
            this._anchor.setAttribute('aria-checked', 'true');
        }
        return l;
    };
    Object.assign(k.prototype, {
        _selected: false
    });
    f.exports = k;
}), null);
__d('MenuTheme', ['cx'], (function a(b, c, d, e, f, g, h) {
    f.exports = {
        className: "_569t"
    };
}), null);
__d("SelectableMenuUtils", [], (function a(b, c, d, e, f, g) {
    var h = {
        doesItemSupportSelect: function j(k) {
            return i(k);
        },
        isSelected: function j(k) {
            return i(k) && k.isSelected();
        }
    };

    function i(j) {
        return j.select && j.deselect && j.isSelected;
    }
    f.exports = h;
}), null);
__d('SelectableMenu', ['Menu', 'arrayContains', 'createArrayFromMixed', 'SelectableMenuUtils'], (function a(b, c, d, e, f, g) {
    var h, i;
    h = babelHelpers.inherits(j, c('Menu'));
    i = h && h.prototype;
    j.prototype.focusAnItem = function () {
        'use strict';
        for (var k = 0; k < this._items.length; k++)
            if (c('SelectableMenuUtils').isSelected(this._items[k]))
                if (this._focusItem(this._items[k]) !== false) return true;
        return i.focusAnItem.call(this);
    };
    j.prototype.setValue = function (k) {
        'use strict';
        if (!this._root) this._render();
        var l = c('createArrayFromMixed')(k);
        this._items.forEach(function (m) {
            if (c('SelectableMenuUtils').doesItemSupportSelect(m))
                if (c('arrayContains')(l, m.getValue())) {
                    m.select();
                } else if (c('SelectableMenuUtils').isSelected(m)) m.deselect();
        });
        this.inform('change', this.getSelection());
    };
    j.prototype._handleItemClick = function (k, l) {
        'use strict';
        if (!c('SelectableMenuUtils').doesItemSupportSelect(k)) return i._handleItemClick.call(this, k, l);
        var m = this.inform('itemclick', {
            item: k,
            event: l
        });
        if (m) return;
        if (this._config.multiple) {
            var n = c('SelectableMenuUtils').isSelected(k) ? k.deselect() : k.select();
            if (n !== false) this.inform('change', this.getSelection());
        } else {
            if (!c('SelectableMenuUtils').isSelected(k))
                if (k.select() !== false) {
                    this._items.forEach(function (o) {
                        if (c('SelectableMenuUtils').isSelected(o) && o !== k) o.deselect();
                    });
                    this.inform('change', this.getSelection());
                }
            this.done();
        }
        return k.handleClick(l);
    };
    j.prototype.getSelection = function () {
        'use strict';
        var k = [];
        this._items.forEach(function (l) {
            if (c('SelectableMenuUtils').isSelected(l)) k.push({
                label: l.getLabel(),
                value: l.getValue(),
                item: l
            });
        });
        if (!this._config.multiple) k = k[0];
        return k;
    };

    function j() {
        'use strict';
        h.apply(this, arguments);
    }
    f.exports = j;
}), null);
__d('ReactMenu', ['cx', 'Menu', 'MenuItem', 'MenuItemNoAction', 'MenuSelectableItem', 'MenuTheme', 'React', 'SelectableMenu', 'joinClasses'], (function a(b, c, d, e, f, g, h) {
    var i, j, k, l;

    function m(q) {
        var r = [];
        c('React').Children.forEach(q, function (s) {
            if (s) r.push(s);
        });
        return r;
    }

    function n(q) {
        q.isReactLegacyFactory = {};
        q.type = q;
    }
    i = babelHelpers.inherits(o, c('Menu'));
    j = i && i.prototype;

    function o(q, r) {
        'use strict';
        var s = babelHelpers['extends']({
            theme: c('MenuTheme'),
            maxheight: q ? q.maxheight : null,
            className: q ? q.className : null
        }, r);
        j.constructor.call(this, m(q.children), s);
    }
    n(o);
    k = babelHelpers.inherits(p, c('SelectableMenu'));
    l = k && k.prototype;

    function p(q, r) {
        'use strict';
        var s = babelHelpers['extends']({
            className: c('joinClasses')("_57di", q ? q.className : null),
            theme: c('MenuTheme'),
            multiple: q && q.multiple,
            maxheight: q ? q.maxheight : null
        }, r);
        l.constructor.call(this, m(q.children), s);
    }
    n(p);
    o.SelectableMenu = p;
    n(c('MenuItem'));
    o.Item = c('MenuItem');
    o.ItemNoAction = c('MenuItemNoAction');
    n(c('MenuSelectableItem'));
    o.SelectableItem = c('MenuSelectableItem');
    f.exports = o;
}), null);
__d('XUIDialogTitle.react', ['cx', 'fbt', 'LeftRight.react', 'React', 'XUICloseButton.react', 'joinClasses'], (function a(b, c, d, e, f, g, h, i) {
    var j, k, l = c('React').PropTypes;
    j = babelHelpers.inherits(m, c('React').Component);
    k = j && j.prototype;
    m.prototype.render = function () {
        'use strict';
        var n = null,
            o = this.props,
            p = o.closeButtonText,
            q = o.showCloseButton,
            r = babelHelpers.objectWithoutProperties(o, ['closeButtonText', 'showCloseButton']);
        if (q) n = c('React').createElement(c('XUICloseButton.react'), {
            label: p,
            className: "layerCancel _51-t"
        });
        var s = c('React').Children.toArray(this.props.children);
        return c('React').createElement('div', babelHelpers['extends']({}, r, {
            className: c('joinClasses')(this.props.className, "_4-i0")
        }), c('React').createElement(c('LeftRight.react'), null, c('React').createElement('h3', {
            className: "_52c9"
        }, s[0]), c('React').createElement('div', {
            className: "_51-u"
        }, s.slice(1), n)));
    };

    function m() {
        'use strict';
        j.apply(this, arguments);
    }
    m.propTypes = {
        closeButtonText: l.oneOfType([l.node, l.string]),
        showCloseButton: l.bool
    };
    m.defaultProps = {
        closeButtonText: i._("Luk"),
        showCloseButton: true
    };
    f.exports = m;
}), null);
__d('XUIMenuTheme', ['cx'], (function a(b, c, d, e, f, g, h) {
    f.exports = {
        className: "_558b"
    };
}), null);
__d('XUIMenuWithSquareCorner', ['cx', 'CSS'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        'use strict';
        this.$XUIMenuWithSquareCorner1 = j;
    }
    i.prototype.enable = function () {
        'use strict';
        c('CSS').addClass(this.$XUIMenuWithSquareCorner1.getRoot(), "_2n_z");
    };
    i.prototype.disable = function () {
        'use strict';
        c('CSS').removeClass(this.$XUIMenuWithSquareCorner1.getRoot(), "_2n_z");
    };
    f.exports = i;
}), null);
__d('ReactXUIMenu', ['ReactMenu', 'XUIMenuTheme', 'XUIMenuWithSquareCorner'], (function a(b, c, d, e, f, g) {
    var h, i, j, k;

    function l(o) {
        o.isReactLegacyFactory = {};
        o.type = o;
    }
    h = babelHelpers.inherits(m, c('ReactMenu'));
    i = h && h.prototype;

    function m(o) {
        'use strict';
        var p = {
            theme: c('XUIMenuTheme')
        };
        if (!o || o.withsquarecorner !== false) p.behaviors = [c('XUIMenuWithSquareCorner')];
        i.constructor.call(this, o, p);
    }
    l(m);
    j = babelHelpers.inherits(n, c('ReactMenu').SelectableMenu);
    k = j && j.prototype;

    function n(o) {
        'use strict';
        var p = {
            theme: c('XUIMenuTheme')
        };
        if (!o || o.withsquarecorner !== false) p.behaviors = [c('XUIMenuWithSquareCorner')];
        k.constructor.call(this, o, p);
    }
    l(n);
    m.SelectableMenu = n;
    m.Item = c('ReactMenu').Item;
    m.SelectableItem = c('ReactMenu').SelectableItem;
    f.exports = m;
}), null);
__d('TypeaheadFacepile', ['DOM'], (function a(b, c, d, e, f, g) {
    function h() {}
    h.render = function (i) {
        var j = [c('DOM').create('span', {
            className: 'splitpic leftpic'
        }, [c('DOM').create('img', {
            alt: '',
            src: i[0]
        })]), c('DOM').create('span', {
            className: 'splitpic' + (i[2] ? ' toppic' : '')
        }, [c('DOM').create('img', {
            alt: '',
            src: i[1]
        })])];
        if (i[2]) j.push(c('DOM').create('span', {
            className: 'splitpic bottompic'
        }, [c('DOM').create('img', {
            alt: '',
            src: i[2]
        })]));
        return c('DOM').create('span', {
            className: 'splitpics clearfix'
        }, j);
    };
    f.exports = h;
}), null);
__d('AttachmentRelatedShareConstants', [], (function a(b, c, d, e, f, g) {
    var h = {
        ARTICLE_CLICK: 'article_click',
        VIDEO_CLICK: 'video_click',
        FBVIDEO_CLICK: 'fbvideo_click',
        FBVIDEO_VIEW: 'fbvideo_view',
        GAME_CLICK: 'game_click',
        EVENT_DELAY: 1000,
        HIDE_DELAY: 100,
        PHOTO_CLICK: 'photo_click',
        EVENT_JOIN: 'event_join',
        PRODUCT_CLICK: 'product_click',
        MAP_CLICK: 'map_click',
        ACTION_BUTTON_CLICK: 'action_button_click'
    };
    f.exports = h;
}), null);
__d('FeedBlacklistButton', ['Arbiter', 'Event'], (function a(b, c, d, e, f, g) {
    var h = {
        BLACKLIST: 'feed_blacklist',
        UNBLACKLIST: 'feed_unblacklist',
        init: function i(j, k, l, m) {
            c('Event').listen(k, 'click', function () {
                var n = {
                    profile_id: m
                };
                c('Arbiter').inform(h.BLACKLIST, n);
                c('Arbiter').inform('UnfollowingUser', n);
            });
            c('Event').listen(l, 'click', function () {
                var n = {
                    profile_id: m
                };
                c('Arbiter').inform(h.UNBLACKLIST, n);
                c('Arbiter').inform('FollowingUser', n);
            });
            c('Arbiter').subscribe(h.BLACKLIST, function (n, o) {
                if (m == o.profile_id) j.swap();
            });
            c('Arbiter').subscribe(h.UNBLACKLIST, function (n, o) {
                if (m == o.profile_id) j.unswap();
            });
        }
    };
    f.exports = b.FeedBlacklistButton || h;
}), null);
__d('tickerPhoteSnowLiftOpenStatus', ['ArbiterMixin'], (function a(b, c, d, e, f, g) {
    var h = 'CheckIsOpen',
        i = {
            registerOpenChecker: function j(k) {
                return i.subscribe(h, function (l, m) {
                    if (k()) m.is_Open = true;
                });
            },
            checkIsOpen: function j() {
                var k = {
                    is_Open: false
                };
                i.inform(h, k);
                return k.is_Open;
            }
        };
    Object.assign(i, c('ArbiterMixin'));
    f.exports = i;
}), null);
__d('MessengerEnvironment', ['CurrentEnvironment'], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = babelHelpers['extends']({}, c('CurrentEnvironment'), {
        messengerui: false,
        setMessengerUI: function i(j) {
            this.messengerui = j;
        }
    });
    f.exports = h;
}), null);
__d('InteractionTracker', ['invariant', 'ErrorUtils', 'InteractionTrackerRates', 'ScriptPath', 'requireWeak', 'uniqueID'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = 'interaction_debugging',
        j = document.createElement('li'),
        k = window.performance !== undefined && window.performance.mark !== undefined && window.performance.clearMarks !== undefined && window.performance.measure !== undefined && window.performance.clearMeasures !== undefined;

    function l(m) {
        m.element !== undefined || h(0);
        var n = {
                name: 'interaction' + c('uniqueID')(),
                dataset: i,
                element: j
            },
            o = Object.assign(n, m),
            p = c('InteractionTrackerRates')[o.name] || c('InteractionTrackerRates')['default'] || 0;
        this.enabled = k && Math.random() < p;
        if (this.enabled) {
            this.checks = 1;
            this.dataset = o.dataset;
            this.details = [];
            this.element = o.element;
            this.location = c('ErrorUtils').normalizeError(new Error('log the call stack')).stackFrames.map(function (q) {
                return q.text ? q.text : '';
            });
            this.markList = [];
            this.measureList = [];
            this.name = o.name;
            this.scriptPath = c('ScriptPath').getScriptPath() || '';
        }
    }
    l.prototype.$InteractionTracker1 = function (m, n) {
        var o = this.name + '_' + m;
        performance.mark(o);
        this.markList.push(o);
        if (n) {
            var p = o + '_measure';
            performance.measure(p, this.markList[0]);
            this.measureList.push(p);
        }
    };
    l.prototype.start = function () {
        if (this.enabled) this.$InteractionTracker1('start', false);
    };
    l.prototype.checkpoint = function () {
        if (this.enabled) {
            this.$InteractionTracker1('ck' + this.checks, true);
            this.checks++;
        }
    };
    l.prototype.stop = function () {
        if (this.enabled) this.$InteractionTracker1('stop', true);
        this.send();
    };
    l.prototype.addData = function (m) {
        if (this.enabled) this.details.push(m);
    };
    l.prototype.send = function () {
        var m, n = this;
        if (this.enabled)(function () {
            var o = ' | ',
                p = [];
            n.markList.forEach(function (t) {
                performance.clearMarks(t);
            });
            n.measureList.forEach(function (t) {
                var u = performance.getEntriesByName(t, 'measure');
                p.push(t + ': ' + u[0].duration);
                performance.clearMeasures(t);
            });
            var q = [],
                r = n.element;
            for (var s = 0; s < 5; s++) {
                q.push(r.id + ' ' + r.className);
                r = r.parentElement;
                if (r === undefined || r === null || r === document.body) break;
            }
            c('requireWeak')('BanzaiScuba', function (t) {
                var u = new t('interaction_debugging', null, {
                    addBrowserFields: true
                });
                u.addNormal('elementId', this.element.id);
                u.addNormal('elementClassList', this.element.className);
                u.addNormVector('elementClassStack', q);
                u.addNormVector('location1', this.location);
                u.addNormal('scriptPath', c('ScriptPath').getScriptPath());
                u.addNormal('measures', p.join(o));
                u.addNormal('details', this.details.join(o));
                u.post();
            }.bind(n));
        })();
    };
    f.exports = l;
}), null);
__d('shield', [], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        if (typeof i != 'function') throw new TypeError('shield expects a function as the first argument');
        var k = Array.prototype.slice.call(arguments, 2);
        return function () {
            return i.apply(j, k);
        };
    }
    f.exports = h;
}), null);
__d('Animation', ['BrowserSupport', 'CSS', 'DataStore', 'DOM', 'InteractionTracker', 'Style', 'clearTimeout', 'clearInterval', 'getVendorPrefixedName', 'setIntervalAcrossTransitions', 'setTimeoutAcrossTransitions', 'shield', 'requestAnimationFrame', 'CSSFade', 'WebSpeedJSExperiments'], (function a(b, c, d, e, f, g) {
    var h = c('requestAnimationFrame'),
        i = [],
        j;

    function k(ba) {
        if (b == this) {
            return new k(ba);
        } else {
            this.obj = ba;
            this._reset_state();
            this.queue = [];
            this.last_attr = null;
            this.unit = 'px';
            this.behaviorOverrides = {
                ignoreUserScroll: false
            };
            this.tracker = new(c('InteractionTracker'))({
                name: 'Animation',
                element: ba
            });
        }
    }

    function l(ba) {
        if (c('BrowserSupport').hasCSS3DTransforms()) {
            return o(ba);
        } else return n(ba);
    }

    function m(ba) {
        return ba.toFixed(8);
    }

    function n(ba) {
        ba = [ba[0], ba[4], ba[1], ba[5], ba[12], ba[13]];
        return 'matrix(' + ba.map(m).join(',') + ')';
    }

    function o(ba) {
        return 'matrix3d(' + ba.map(m).join(',') + ')';
    }

    function p(ba, ca) {
        if (!ba) ba = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        var da = [];
        for (var ea = 0; ea < 4; ea++)
            for (var fa = 0; fa < 4; fa++) {
                var ga = 0;
                for (var ha = 0; ha < 4; ha++) ga += ba[ea * 4 + ha] * ca[ha * 4 + fa];
                da[ea * 4 + fa] = ga;
            }
        return da;
    }
    var q = 0;
    k.prototype._reset_state = function () {
        this.state = {
            attrs: {},
            duration: 500
        };
    };
    k.prototype.stop = function () {
        this._reset_state();
        this.queue = [];
        return this;
    };
    k.prototype._build_container = function () {
        if (this.container_div) {
            this._refresh_container();
            return;
        }
        if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
            this.container_div = this.obj.firstChild;
            this.container_div.__animation_refs++;
            this._refresh_container();
            return;
        }
        var ba = document.createElement('div');
        ba.style.padding = '0px';
        ba.style.margin = '0px';
        ba.style.border = '0px';
        ba.__animation_refs = 1;
        var ca = this.obj.childNodes;
        while (ca.length) ba.appendChild(ca[0]);
        this.obj.appendChild(ba);
        this._orig_overflow = this.obj.style.overflow;
        this.obj.style.overflow = 'hidden';
        this.container_div = ba;
        this._refresh_container();
    };
    k.prototype._refresh_container = function () {
        this.container_div.style.height = 'auto';
        this.container_div.style.width = 'auto';
        this.container_div.style.height = this.container_div.offsetHeight + this.unit;
        this.container_div.style.width = this.container_div.offsetWidth + this.unit;
    };
    k.prototype._destroy_container = function () {
        if (!this.container_div) return;
        if (!--this.container_div.__animation_refs) {
            var ba = this.container_div.childNodes;
            while (ba.length) this.obj.appendChild(ba[0]);
            this.obj.removeChild(this.container_div);
        }
        this.container_div = null;
        this.obj.style.overflow = this._orig_overflow;
    };
    var r = 1,
        s = 2,
        t = 3;
    k.prototype._attr = function (ba, ca, da) {
        ba = ba.replace(/-[a-z]/gi, function (fa) {
            return fa.substring(1).toUpperCase();
        });
        var ea = false;
        switch (ba) {
            case 'background':
                this._attr('backgroundColor', ca, da);
                return this;
            case 'backgroundColor':
            case 'borderColor':
            case 'color':
                ca = x(ca);
                break;
            case 'opacity':
                ca = parseFloat(ca, 10);
                break;
            case 'height':
            case 'width':
                if (ca == 'auto') {
                    ea = true;
                } else ca = parseInt(ca, 10);
                break;
            case 'borderWidth':
            case 'lineHeight':
            case 'fontSize':
            case 'margin':
            case 'marginBottom':
            case 'marginLeft':
            case 'marginRight':
            case 'marginTop':
            case 'padding':
            case 'paddingBottom':
            case 'paddingLeft':
            case 'paddingRight':
            case 'paddingTop':
            case 'bottom':
            case 'left':
            case 'right':
            case 'top':
            case 'scrollTop':
            case 'scrollLeft':
                ca = parseInt(ca, 10);
                break;
            case 'rotateX':
            case 'rotateY':
            case 'rotateZ':
                ca = parseInt(ca, 10) * Math.PI / 180;
                break;
            case 'translateX':
            case 'translateY':
            case 'translateZ':
            case 'scaleX':
            case 'scaleY':
            case 'scaleZ':
                ca = parseFloat(ca, 10);
                break;
            case 'rotate3d':
                this._attr('rotateX', ca[0], da);
                this._attr('rotateY', ca[1], da);
                this._attr('rotateZ', ca[2], da);
                return this;
            case 'rotate':
                this._attr('rotateZ', ca, da);
                return this;
            case 'scale3d':
                this._attr('scaleZ', ca[2], da);
            case 'scale':
                this._attr('scaleX', ca[0], da);
                this._attr('scaleY', ca[1], da);
                return this;
            case 'translate3d':
                this._attr('translateZ', ca[2], da);
            case 'translate':
                this._attr('translateX', ca[0], da);
                this._attr('translateY', ca[1], da);
                return this;
            default:
                throw new Error(ba + ' is not a supported attribute!');
        }
        if (this.state.attrs[ba] === undefined) this.state.attrs[ba] = {};
        if (ea) this.state.attrs[ba].auto = true;
        switch (da) {
            case t:
                this.state.attrs[ba].start = ca;
                break;
            case s:
                this.state.attrs[ba].by = true;
            case r:
                this.state.attrs[ba].value = ca;
                break;
        }
    };

    function u(ba) {
        var ca = parseInt(c('Style').get(ba, 'paddingLeft'), 10),
            da = parseInt(c('Style').get(ba, 'paddingRight'), 10),
            ea = parseInt(c('Style').get(ba, 'borderLeftWidth'), 10),
            fa = parseInt(c('Style').get(ba, 'borderRightWidth'), 10);
        return ba.offsetWidth - (ca ? ca : 0) - (da ? da : 0) - (ea ? ea : 0) - (fa ? fa : 0);
    }

    function v(ba) {
        var ca = parseInt(c('Style').get(ba, 'paddingTop'), 10),
            da = parseInt(c('Style').get(ba, 'paddingBottom'), 10),
            ea = parseInt(c('Style').get(ba, 'borderTopWidth'), 10),
            fa = parseInt(c('Style').get(ba, 'borderBottomWidth'), 10);
        return ba.offsetHeight - (ca ? ca : 0) - (da ? da : 0) - (ea ? ea : 0) - (fa ? fa : 0);
    }
    k.prototype.setUnit = function (ba) {
        this.unit = ba;
        return this;
    };
    k.prototype.to = function (ba, ca) {
        this.tracker.addData('to: ' + ba + ' ' + ca);
        if (ca === undefined) {
            this._attr(this.last_attr, ba, r);
        } else {
            this._attr(ba, ca, r);
            this.last_attr = ba;
        }
        return this;
    };
    k.prototype.by = function (ba, ca) {
        this.tracker.addData('by: ' + ba + ' ' + ca);
        if (ca === undefined) {
            this._attr(this.last_attr, ba, s);
        } else {
            this._attr(ba, ca, s);
            this.last_attr = ba;
        }
        return this;
    };
    k.prototype.from = function (ba, ca) {
        this.tracker.addData('from: ' + ba + ' ' + ca);
        if (ca === undefined) {
            this._attr(this.last_attr, ba, t);
        } else {
            this._attr(ba, ca, t);
            this.last_attr = ba;
        }
        return this;
    };
    k.prototype.duration = function (ba) {
        this.tracker.addData('duration: ' + ba);
        this.state.duration = ba ? ba : 0;
        return this;
    };
    k.prototype.checkpoint = function (ba, ca) {
        this.tracker.addData('checkpoint');
        if (ba === undefined) ba = 1;
        this.state.checkpoint = ba;
        this.queue.push(this.state);
        this._reset_state();
        this.state.checkpointcb = ca;
        return this;
    };
    k.prototype.blind = function () {
        this.state.blind = true;
        return this;
    };
    k.prototype.hide = function () {
        this.state.hide = true;
        return this;
    };
    k.prototype.show = function () {
        this.state.show = true;
        return this;
    };
    k.prototype.ease = function (ba) {
        this.state.ease = ba;
        return this;
    };
    k.prototype.getBasicOpacityAnimation = function () {
        if (this.queue.length === 0 && c('WebSpeedJSExperiments').webspeed_animations_opacity) {
            var ba = Object.keys(this.state.attrs);
            if (ba.length === 1 && ba[0] === 'opacity') {
                var ca = this.state.attrs.opacity.start,
                    da = this.state.attrs.opacity.value;
                if (ca === 0 && da === 1) {
                    return c('CSSFade').show;
                } else if (ca === 1 && da === 0) return c('CSSFade').hide;
            }
        }
        return null;
    };
    k.prototype.CSSAnimation = function (ba) {
        var ca = {
            duration: this.state.duration
        };
        if (this.state.ondone) ca.callback = this.state.ondone;
        ba(this.obj, ca);
    };
    k.prototype.go = function () {
        var ba = this.getBasicOpacityAnimation();
        if (ba) {
            this.CSSAnimation(ba);
        } else {
            this.tracker.send();
            var ca = Date.now();
            this.queue.push(this.state);
            for (var da = 0; da < this.queue.length; da++) {
                this.queue[da].start = ca - q;
                if (this.queue[da].checkpoint) ca += this.queue[da].checkpoint * this.queue[da].duration;
            }
            y(this);
            return this;
        }
    };
    k.prototype._show = function () {
        c('CSS').show(this.obj);
    };
    k.prototype._hide = function () {
        c('CSS').hide(this.obj);
    };
    k.prototype.overrideBehavior = function (ba) {
        this.behaviorOverrides = babelHelpers['extends']({}, this.behaviorOverrides, ba);
        return this;
    };
    k.prototype._frame = function (ba) {
        var ca = true,
            da = false,
            ea;

        function fa(cb) {
            return document.documentElement[cb] || document.body[cb];
        }

        function ga(cb, db) {
            return cb === document.body ? fa(db) : cb[db];
        }

        function ha(cb, db) {
            return db.lastScrollTop !== undefined && db.lastScrollTop !== ga(cb.obj, 'scrollTop') || db.lastScrollLeft !== undefined && db.lastScrollLeft !== ga(cb.obj, 'scrollLeft');
        }

        function ia(cb, db) {
            db.lastScrollTop = ga(cb.obj, 'scrollTop');
            db.lastScrollLeft = ga(cb.obj, 'scrollLeft');
        }
        for (var ja = 0; ja < this.queue.length; ja++) {
            var ka = this.queue[ja];
            if (ka.start > ba) {
                ca = false;
                continue;
            }
            if (ka.checkpointcb) {
                this._callback(ka.checkpointcb, ba - ka.start);
                ka.checkpointcb = null;
            }
            if (ka.started === undefined) {
                if (ka.show) this._show();
                for (var la in ka.attrs) {
                    if (ka.attrs[la].start !== undefined) continue;
                    switch (la) {
                        case 'backgroundColor':
                        case 'borderColor':
                        case 'color':
                            ea = x(c('Style').get(this.obj, la == 'borderColor' ? 'borderLeftColor' : la));
                            if (ka.attrs[la].by) {
                                ka.attrs[la].value[0] = Math.min(255, Math.max(0, ka.attrs[la].value[0] + ea[0]));
                                ka.attrs[la].value[1] = Math.min(255, Math.max(0, ka.attrs[la].value[1] + ea[1]));
                                ka.attrs[la].value[2] = Math.min(255, Math.max(0, ka.attrs[la].value[2] + ea[2]));
                            }
                            break;
                        case 'opacity':
                            ea = c('Style').getOpacity(this.obj);
                            if (ka.attrs[la].by) ka.attrs[la].value = Math.min(1, Math.max(0, ka.attrs[la].value + ea));
                            break;
                        case 'height':
                            ea = v(this.obj);
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            break;
                        case 'width':
                            ea = u(this.obj);
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            break;
                        case 'scrollLeft':
                        case 'scrollTop':
                            ea = ga(this.obj, la);
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            ia(this, ka);
                            break;
                        case 'rotateX':
                        case 'rotateY':
                        case 'rotateZ':
                        case 'translateX':
                        case 'translateY':
                        case 'translateZ':
                            ea = c('DataStore').get(this.obj, la, 0);
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            break;
                        case 'scaleX':
                        case 'scaleY':
                        case 'scaleZ':
                            ea = c('DataStore').get(this.obj, la, 1);
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            break;
                        default:
                            ea = parseInt(c('Style').get(this.obj, la), 10) || 0;
                            if (ka.attrs[la].by) ka.attrs[la].value += ea;
                            break;
                    }
                    ka.attrs[la].start = ea;
                }
                if (ka.attrs.height && ka.attrs.height.auto || ka.attrs.width && ka.attrs.width.auto) {
                    this._destroy_container();
                    for (var la in {
                            height: 1,
                            width: 1,
                            fontSize: 1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            paddingLeft: 1,
                            paddingRight: 1,
                            paddingTop: 1,
                            paddingBottom: 1
                        })
                        if (ka.attrs[la]) this.obj.style[la] = ka.attrs[la].value + (typeof ka.attrs[la].value == 'number' ? this.unit : '');
                    if (ka.attrs.height && ka.attrs.height.auto) ka.attrs.height.value = v(this.obj);
                    if (ka.attrs.width && ka.attrs.width.auto) ka.attrs.width.value = u(this.obj);
                }
                ka.started = true;
                if (ka.blind) this._build_container();
            }
            var ma = (ba - ka.start) / ka.duration;
            if (ma >= 1) {
                ma = 1;
                if (ka.hide) this._hide();
            } else ca = false;
            var na = ka.ease ? ka.ease(ma) : ma;
            if (!da && ma != 1 && ka.blind) da = true;
            for (var la in ka.attrs) switch (la) {
                case 'backgroundColor':
                case 'borderColor':
                case 'color':
                    if (ka.attrs[la].start[3] != ka.attrs[la].value[3]) {
                        this.obj.style[la] = 'rgba(' + w(na, ka.attrs[la].start[0], ka.attrs[la].value[0], true) + ',' + w(na, ka.attrs[la].start[1], ka.attrs[la].value[1], true) + ',' + w(na, ka.attrs[la].start[2], ka.attrs[la].value[2], true) + ',' + w(na, ka.attrs[la].start[3], ka.attrs[la].value[3], false) + ')';
                    } else this.obj.style[la] = 'rgb(' + w(na, ka.attrs[la].start[0], ka.attrs[la].value[0], true) + ',' + w(na, ka.attrs[la].start[1], ka.attrs[la].value[1], true) + ',' + w(na, ka.attrs[la].start[2], ka.attrs[la].value[2], true) + ')';
                    break;
                case 'opacity':
                    c('Style').set(this.obj, 'opacity', w(na, ka.attrs[la].start, ka.attrs[la].value));
                    break;
                case 'height':
                case 'width':
                    this.obj.style[la] = na == 1 && ka.attrs[la].auto ? 'auto' : w(na, ka.attrs[la].start, ka.attrs[la].value, true) + this.unit;
                    break;
                case 'scrollLeft':
                case 'scrollTop':
                    var oa = this.obj === document.body;
                    if (!this.behaviorOverrides.ignoreUserScroll && ha(this, ka)) {
                        delete ka.attrs.scrollTop;
                        delete ka.attrs.scrollLeft;
                    } else {
                        var pa = w(na, ka.attrs[la].start, ka.attrs[la].value, true);
                        if (!oa) {
                            this.obj[la] = pa;
                        } else if (la == 'scrollLeft') {
                            b.scrollTo(pa, fa('scrollTop'));
                        } else b.scrollTo(fa('scrollLeft'), pa);
                        ia(this, ka);
                    }
                    break;
                case 'translateX':
                case 'translateY':
                case 'translateZ':
                case 'rotateX':
                case 'rotateY':
                case 'rotateZ':
                case 'scaleX':
                case 'scaleY':
                case 'scaleZ':
                    c('DataStore').set(this.obj, la, w(na, ka.attrs[la].start, ka.attrs[la].value, false));
                    break;
                default:
                    this.obj.style[la] = w(na, ka.attrs[la].start, ka.attrs[la].value, true) + this.unit;
                    break;
            }
            var qa = null,
                ra = c('DataStore').get(this.obj, 'translateX', 0),
                sa = c('DataStore').get(this.obj, 'translateY', 0),
                ta = c('DataStore').get(this.obj, 'translateZ', 0);
            if (ra || sa || ta) qa = p(qa, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ra, sa, ta, 1]);
            var ua = c('DataStore').get(this.obj, 'scaleX', 1),
                va = c('DataStore').get(this.obj, 'scaleY', 1),
                wa = c('DataStore').get(this.obj, 'scaleZ', 1);
            if (ua - 1 || va - 1 || wa - 1) qa = p(qa, [ua, 0, 0, 0, 0, va, 0, 0, 0, 0, wa, 0, 0, 0, 0, 1]);
            var xa = c('DataStore').get(this.obj, 'rotateX', 0);
            if (xa) qa = p(qa, [1, 0, 0, 0, 0, Math.cos(xa), Math.sin(-xa), 0, 0, Math.sin(xa), Math.cos(xa), 0, 0, 0, 0, 1]);
            var ya = c('DataStore').get(this.obj, 'rotateY', 0);
            if (ya) qa = p(qa, [Math.cos(ya), 0, Math.sin(ya), 0, 0, 1, 0, 0, Math.sin(-ya), 0, Math.cos(ya), 0, 0, 0, 0, 1]);
            var za = c('DataStore').get(this.obj, 'rotateZ', 0);
            if (za) qa = p(qa, [Math.cos(za), Math.sin(-za), 0, 0, Math.sin(za), Math.cos(za), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            var ab = c('getVendorPrefixedName')('transform');
            if (ab)
                if (qa) {
                    var bb = l(qa);
                    c('Style').set(this.obj, ab, bb);
                } else if (ca) c('Style').set(this.obj, ab, null);
            if (ma == 1) {
                this.queue.splice(ja--, 1);
                this._callback(ka.ondone, ba - ka.start - ka.duration);
            }
        }
        if (!da && this.container_div) this._destroy_container();
        return !ca;
    };
    k.prototype.ondone = function (ba) {
        this.state.ondone = ba;
        return this;
    };
    k.prototype._callback = function (ba, ca) {
        if (ba) {
            q = ca;
            ba.call(this);
            q = 0;
        }
    };

    function w(ba, ca, da, ea) {
        return (ea ? parseInt : parseFloat)((da - ca) * ba + ca, 10);
    }

    function x(ba) {
        var ca = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(ba);
        if (ca) {
            return [parseInt(ca[1].length == 1 ? ca[1] + ca[1] : ca[1], 16), parseInt(ca[2].length == 1 ? ca[2] + ca[2] : ca[2], 16), parseInt(ca[3].length == 1 ? ca[3] + ca[3] : ca[3], 16), 1];
        } else {
            var da = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(ba);
            if (da) {
                return [parseInt(da[1], 10), parseInt(da[2], 10), parseInt(da[3], 10), da[4] ? parseFloat(da[4]) : 1];
            } else if (ba == 'transparent') {
                return [255, 255, 255, 0];
            } else throw new Error('Named color attributes are not supported.');
        }
    }

    function y(ba) {
        i.push(ba);
        if (i.length === 1)
            if (h) {
                h(aa);
            } else j = c('setIntervalAcrossTransitions')(aa, 20);
        if (h) z();
        aa(Date.now(), true);
    }

    function z() {
        if (!h) throw new Error('Ending timer only valid with requestAnimationFrame');
        var ba = 0;
        for (var ca = 0; ca < i.length; ca++) {
            var da = i[ca];
            for (var ea = 0; ea < da.queue.length; ea++) {
                var fa = da.queue[ea].start + da.queue[ea].duration;
                if (fa > ba) ba = fa;
            }
        }
        if (j) {
            c('clearTimeout')(j);
            j = null;
        }
        var ga = Date.now();
        if (ba > ga) j = c('setTimeoutAcrossTransitions')(c('shield')(aa), ba - ga);
    }

    function aa(ba, ca) {
        var da = Date.now();
        for (var ea = ca === true ? i.length - 1 : 0; ea < i.length; ea++) try {
            if (!i[ea]._frame(da)) i.splice(ea--, 1);
        } catch (fa) {
            i.splice(ea--, 1);
        }
        if (i.length === 0) {
            if (j) {
                if (h) {
                    c('clearTimeout')(j);
                } else c('clearInterval')(j);
                j = null;
            }
        } else if (h) h(aa);
    }
    k.ease = {};
    k.ease.begin = function (ba) {
        return Math.sin(Math.PI / 2 * (ba - 1)) + 1;
    };
    k.ease.end = function (ba) {
        return Math.sin(.5 * Math.PI * ba);
    };
    k.ease.both = function (ba) {
        return .5 * Math.sin(Math.PI * (ba - .5)) + .5;
    };
    k.prependInsert = function (ba, ca) {
        k.insert(ba, ca, c('DOM').prependContent);
    };
    k.appendInsert = function (ba, ca) {
        k.insert(ba, ca, c('DOM').appendContent);
    };
    k.insert = function (ba, ca, da) {
        c('Style').set(ca, 'opacity', 0);
        da(ba, ca);
        new k(ca).from('opacity', 0).to('opacity', 1).duration(400).go();
    };
    f.exports = k;
}), null);
__d('DialogHideOnSuccess', ['csx', 'cx', 'CSS'], (function a(b, c, d, e, f, g, h, i) {
    function j(k) {
        'use strict';
        this._layer = k;
    }
    j.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('success', this._handle.bind(this));
    };
    j.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    j.prototype._handle = function (k, event) {
        'use strict';
        if (c('CSS').matchesSelector(event.getTarget(), "._s")) this._layer.hide();
    };
    Object.assign(j.prototype, {
        _subscription: null
    });
    f.exports = j;
}), null);
__d('DocumentTitle', ['Arbiter'], (function a(b, c, d, e, f, g) {
    var h = document.title,
        i = null,
        j = 1500,
        k = [],
        l = 0,
        m = null,
        n = false;

    function o() {
        if (k.length > 0) {
            if (!n) {
                p(k[l].title);
                l = ++l % k.length;
            } else q();
        } else {
            clearInterval(m);
            m = null;
            q();
        }
    }

    function p(s) {
        document.title = s;
        n = true;
    }

    function q() {
        r.set(i || h, true);
        n = false;
    }
    var r = {
        get: function s() {
            return h;
        },
        set: function s(t, u) {
            document.title = t;
            if (!u) {
                h = t;
                i = null;
                c('Arbiter').inform('update_title', t);
            } else i = t;
        },
        blink: function s(t) {
            var u = {
                title: t
            };
            k.push(u);
            if (m === null) m = setInterval(o, j);
            return {
                stop: function v() {
                    var w = k.indexOf(u);
                    if (w >= 0) {
                        k.splice(w, 1);
                        if (l > w) {
                            l--;
                        } else if (l == w && l == k.length) l = 0;
                    }
                }
            };
        }
    };
    f.exports = r;
}), null);
__d("Ease", [], (function a(b, c, d, e, f, g) {
    var h = {
        makePowerOut: function i(j) {
            var k = h.makePowerIn(j);
            return function (l) {
                return 1 - k(1 - l);
            };
        },
        makePowerIn: function i(j) {
            return function (k) {
                var l = Math.pow(k, j);
                return (l * 10000 | 0) / 10000;
            };
        },
        makePowerInOut: function i(j) {
            var k = h.makePowerIn(j),
                l = h.makePowerOut(j);
            return function (m) {
                return m < .5 ? .5 * k(m * 2) : .5 * l(m * 2 - 1) + .5;
            };
        },
        expoOut: function i(j) {
            return 1 - Math.pow(2, -10 * j);
        },
        expoIn: function i(j) {
            return 1 - h.expoOut(1 - j);
        },
        expoInOut: function i(j) {
            return j < .5 ? .5 * h.expoIn(j * 2) : .5 * h.expoOut(j * 2 - 1) + .5;
        },
        sineOut: function i(j) {
            return Math.sin(j * Math.PI * .5);
        },
        sineIn: function i(j) {
            return 1 - Math.cos(j * Math.PI * .5);
        },
        sineInOut: function i(j) {
            return -.5 * (Math.cos(Math.PI * j) - 1);
        },
        circOut: function i(j) {
            j--;
            return Math.sqrt(1 - j * j);
        },
        circIn: function i(j) {
            return 1 - h.circOut(1 - j);
        },
        circInOut: function i(j) {
            return j < .5 ? .5 * h.circIn(j * 2) : .5 * h.circOut(j * 2 - 1) + .5;
        },
        bounceOut: function i(j) {
            if (j < 1 / 2.75) {
                return 7.5625 * j * j;
            } else if (j < 2 / 2.75) {
                return 7.5625 * (j -= 1.5 / 2.75) * j + .75;
            } else if (j < 2.5 / 2.75) {
                return 7.5625 * (j -= 2.25 / 2.75) * j + .9375;
            } else return 7.5625 * (j -= 2.625 / 2.75) * j + .984375;
        },
        bounceIn: function i(j) {
            return 1 - h.bounceOut(1 - j);
        },
        bounceInOut: function i(j) {
            return j < .5 ? .5 * h.bounceIn(j * 2) : .5 * h.bounceOut(j * 2 - 1) + .5;
        },
        makeBounceOut: function i(j) {
            j = j || 1;
            return function (k) {
                k = (1 - Math.cos(k * Math.PI * j)) * (1 - k) + k;
                return 1 - Math.abs(1 - k);
            };
        },
        makeBounceIn: function i(j) {
            var k = h.makeBounceOut(j);
            return function (l) {
                return 1 - k(1 - l);
            };
        },
        makeElasticOut: function i(j, k) {
            j < 1 && (j = 1);
            var l = Math.PI * 2;
            return function (m) {
                if (m === 0 || m === 1) return m;
                var n = k / l * Math.asin(1 / j);
                return j * Math.pow(2, -10 * m) * Math.sin((m - n) * l / k) + 1;
            };
        },
        makeElasticIn: function i(j, k) {
            var l = h.makeElasticOut(j, k);
            return function (m) {
                return 1 - l(1 - m);
            };
        },
        makeElasticInOut: function i(j, k) {
            k *= 1.5;
            var l = h.makeElasticIn(j, k),
                m = h.makeElasticOut(j, k);
            return function (n) {
                return n < .5 ? .5 * l(n * 2) : .5 * m(n * 2 - 1) + .5;
            };
        },
        makeBackOut: function i(j) {
            var k = h.makeBackIn(j);
            return function (l) {
                return 1 - k(1 - l);
            };
        },
        makeBackIn: function i(j) {
            return function (k) {
                return k * k * ((j + 1) * k - j);
            };
        },
        makeBackInOut: function i(j) {
            j *= 1.525;
            var k = h.makeBackIn(j),
                l = h.makeBackOut(j);
            return function (m) {
                return m < .5 ? .5 * k(m * 2) : .5 * l(m * 2 - 1) + .5;
            };
        }
    };
    h.elasticOut = h.makeElasticOut(1, .3);
    h.elasticIn = h.makeElasticIn(1, .3);
    h.elasticInOut = h.makeElasticInOut(1, .3);
    h.backOut = h.makeBackOut(1.7);
    h.backIn = h.makeBackIn(1.7);
    h.backInOut = h.makeBackInOut(1.7);
    f.exports = h;
}), null);
__d('InputSelection', ['DOM', 'Focus'], (function a(b, c, d, e, f, g) {
    var h = {
        get: function i(j) {
            try {
                if (typeof j.selectionStart === 'number') return {
                    start: j.selectionStart,
                    end: j.selectionEnd
                };
            } catch (o) {
                return {
                    start: 0,
                    end: 0
                };
            }
            if (!document.selection) return {
                start: 0,
                end: 0
            };
            var k = document.selection.createRange();
            if (k.parentElement() !== j) return {
                start: 0,
                end: 0
            };
            var l = j.value.length;
            if (c('DOM').isNodeOfType(j, 'input')) {
                return {
                    start: -k.moveStart('character', -l),
                    end: -k.moveEnd('character', -l)
                };
            } else {
                var m = k.duplicate();
                m.moveToElementText(j);
                m.setEndPoint('StartToEnd', k);
                var n = l - m.text.length;
                m.setEndPoint('StartToStart', k);
                return {
                    start: l - m.text.length,
                    end: n
                };
            }
        },
        set: function i(j, k, l) {
            if (typeof l == 'undefined') l = k;
            if (document.selection) {
                if (j.tagName == 'TEXTAREA') {
                    var m = (j.value.slice(0, k).match(/\r/g) || []).length,
                        n = (j.value.slice(k, l).match(/\r/g) || []).length;
                    k -= m;
                    l -= m + n;
                }
                var o = j.createTextRange();
                o.collapse(true);
                o.moveStart('character', k);
                o.moveEnd('character', l - k);
                o.select();
            } else {
                j.selectionStart = k;
                j.selectionEnd = Math.min(l, j.value.length);
                c('Focus').set(j);
            }
        }
    };
    f.exports = h;
}), null);
__d('MenuDeprecated', ['Event', 'Arbiter', 'CSS', 'DataStore', 'DOM', 'HTML', 'Keys', 'Parent', 'Style', 'UserAgent_DEPRECATED', 'emptyFunction', 'Run'], (function a(b, c, d, e, f, g) {
    var h = 'menu:mouseover',
        i = null;

    function j(t) {
        if (c('CSS').hasClass(t, 'uiMenuContainer')) return t;
        return c('Parent').byClass(t, 'uiMenu');
    }

    function k(t) {
        return c('Parent').byClass(t, 'uiMenuItem');
    }

    function l(t) {
        if (document.activeElement) {
            var u = k(document.activeElement);
            return t.indexOf(u);
        }
        return -1;
    }

    function m(t) {
        return c('DOM').find(t, 'a.itemAnchor');
    }

    function n(t) {
        return c('CSS').hasClass(t, 'checked');
    }

    function o(t) {
        return !c('CSS').hasClass(t, 'disabled') && c('Style').get(t, 'display') !== 'none';
    }

    function p(event) {
        var t = document.activeElement;
        if (!t || !c('Parent').byClass(t, 'uiMenu') || !c('DOM').isInputNode(t)) {
            var u = k(event.getTarget());
            u && s.focusItem(u);
        }
    }

    function q(t) {
        c('UserAgent_DEPRECATED').firefox() && m(t).blur();
        s.inform('select', {
            menu: j(t),
            item: t
        });
    }
    var r = function t() {
            r = c('emptyFunction');
            var u = {};
            u.click = function (event) {
                var v = k(event.getTarget());
                if (v && o(v)) {
                    q(v);
                    var w = m(v),
                        x = w.href,
                        y = w.getAttribute('rel');
                    return y && y !== 'ignore' || x && x.charAt(x.length - 1) !== '#';
                }
            };
            u.keydown = function (event) {
                var v = event.getTarget();
                if (event.getModifiers().any) return;
                if (!i || c('DOM').isInputNode(v)) return;
                var w = c('Event').getKeyCode(event),
                    x;
                switch (w) {
                    case c('Keys').UP:
                    case c('Keys').DOWN:
                        var y = s.getEnabledItems(i);
                        x = l(y);
                        s.focusItem(y[x + (w === c('Keys').UP ? -1 : 1)]);
                        return false;
                    case c('Keys').SPACE:
                        var z = k(v);
                        if (z) {
                            q(z);
                            event.prevent();
                        }
                        break;
                    default:
                        var aa = String.fromCharCode(w).toLowerCase(),
                            ba = s.getEnabledItems(i);
                        x = l(ba);
                        var ca = x,
                            da = ba.length;
                        while (~x && (ca = ++ca % da) !== x || !~x && ++ca < da) {
                            var ea = s.getItemLabel(ba[ca]);
                            if (ea && ea.charAt(0).toLowerCase() === aa) {
                                s.focusItem(ba[ca]);
                                return false;
                            }
                        }
                }
            };
            c('Event').listen(document.body, u);
        },
        s = Object.assign(new(c('Arbiter'))(), {
            focusItem: function t(u) {
                if (u && o(u)) {
                    this._removeSelected(j(u));
                    c('CSS').addClass(u, 'selected');
                    m(u).focus();
                }
            },
            getEnabledItems: function t(u) {
                return s.getItems(u).filter(o);
            },
            getCheckedItems: function t(u) {
                return s.getItems(u).filter(n);
            },
            getItems: function t(u) {
                return c('DOM').scry(u, 'li.uiMenuItem');
            },
            getItemLabel: function t(u) {
                return u.getAttribute('data-label', 2) || '';
            },
            isItemChecked: function t(u) {
                return c('CSS').hasClass(u, 'checked');
            },
            autoregister: function t(u, v, w) {
                u.subscribe('show', function () {
                    s.register(v, w);
                });
                u.subscribe('hide', function () {
                    s.unregister(v);
                });
            },
            register: function t(u, v) {
                u = j(u);
                r();
                if (!c('DataStore').get(u, h)) c('DataStore').set(u, h, c('Event').listen(u, 'mouseover', p));
                if (v !== false) i = u;
            },
            setItemEnabled: function t(u, v) {
                if (!v && !c('DOM').scry(u, 'span.disabledAnchor')[0]) c('DOM').appendContent(u, c('DOM').create('span', {
                    className: c('DOM').find(u, 'a').className + ' disabledAnchor'
                }, c('HTML')(m(u).innerHTML)));
                c('CSS').conditionClass(u, 'disabled', !v);
            },
            toggleItem: function t(u) {
                var v = !s.isItemChecked(u);
                s.setItemChecked(u, v);
            },
            setItemChecked: function t(u, v) {
                c('CSS').conditionClass(u, 'checked', v);
                m(u).setAttribute('aria-checked', v);
            },
            unregister: function t(u) {
                u = j(u);
                var v = c('DataStore').remove(u, h);
                v && v.remove();
                i = null;
                this._removeSelected(u);
            },
            _removeSelected: function t(u) {
                s.getItems(u).filter(function (v) {
                    return c('CSS').hasClass(v, 'selected');
                }).forEach(function (v) {
                    c('CSS').removeClass(v, 'selected');
                });
            }
        });
    f.exports = s;
}), null);
__d("PhotosUploadID", [], (function a(b, c, d, e, f, g) {
    var h = 1024,
        i = {
            getNewID: function j() {
                return (h++).toString();
            }
        };
    f.exports = i;
}), null);
__d('PopoverMenuShowOnHover', ['Event'], (function a(b, c, d, e, f, g) {
    var h = 250;

    function i(j) {
        'use strict';
        this._popoverMenu = j;
        this._listeners = [];
    }
    i.prototype.enable = function () {
        'use strict';
        this._attachMouseListeners(this._popoverMenu.getTriggerElem());
        this._setMenuSubscription = this._popoverMenu.subscribe('setMenu', this._onSetMenu.bind(this));
    };
    i.prototype.disable = function () {
        'use strict';
        while (this._listeners.length) this._listeners.pop().remove();
        if (this._setMenuSubscription) {
            this._setMenuSubscription.unsubscribe();
            this._setMenuSubscription = null;
        }
    };
    i.prototype._onSetMenu = function () {
        'use strict';
        this._attachMouseListeners(this._popoverMenu.getPopover().getLayer().getRoot());
    };
    i.prototype._attachMouseListeners = function (j) {
        'use strict';
        var k = this._popoverMenu.getPopover(),
            l = null;
        this._listeners.push(c('Event').listen(j, 'mouseleave', k.hideLayer.bind(k)), c('Event').listen(j, 'mouseenter', function () {
            l = Date.now();
            k.showLayer();
        }), c('Event').listen(j, 'click', function (m) {
            if (Date.now() < l + h) m.stop();
        }));
    };
    f.exports = i;
}), null);
__d('ScrollAwareDOM', ['ArbiterMixin', 'CSS', 'DOM', 'DOMDimensions', 'HTML', 'Vector', 'ViewportBounds', 'getDocumentScrollElement', 'getElementPosition', 'getViewportDimensions', 'isAsyncScrollQuery', 'isNode'], (function a(b, c, d, e, f, g) {
    function h(m, n) {
        return function () {
            var o = arguments;
            l.monitor(arguments[m], function () {
                n.apply(null, o);
            });
        };
    }

    function i(m) {
        if (!(m instanceof Array)) m = [m];
        for (var n = 0; n < m.length; n++) {
            var o = c('HTML').replaceJSONWrapper(m[n]);
            if (o instanceof c('HTML')) {
                return o.getRootNode();
            } else if (c('isNode')(o)) return o;
        }
        return null;
    }

    function j(m) {
        return c('getElementPosition')(m).y > c('ViewportBounds').getTop();
    }

    function k(m) {
        var n = c('getElementPosition')(m).y + c('DOMDimensions').getElementDimensions(m).height,
            o = c('getViewportDimensions')().height - c('ViewportBounds').getBottom();
        return n >= o;
    }
    var l = babelHelpers['extends']({
        monitor: function m(n, o) {
            if (c('isAsyncScrollQuery')()) return o();
            var p = i(n);
            if (p) {
                var q = !!p.offsetParent;
                if (q && (j(p) || k(p))) return o();
                var r = c('Vector').getDocumentDimensions(),
                    s = o();
                if (q || p.offsetParent && !j(p)) {
                    var t = c('Vector').getDocumentDimensions().sub(r),
                        u = {
                            delta: t,
                            target: p
                        };
                    if (l.inform('scroll', u) !== false) t.scrollElementBy(c('getDocumentScrollElement')());
                }
                return s;
            } else return o();
        },
        replace: function m(n, o) {
            var p = i(o);
            if (!p || c('CSS').hasClass(p, 'hidden_elem')) p = n;
            return l.monitor(p, function () {
                c('DOM').replace(n, o);
            });
        },
        prependContent: h(1, c('DOM').prependContent),
        insertAfter: h(1, c('DOM').insertAfter),
        insertBefore: h(1, c('DOM').insertBefore),
        setContent: h(0, c('DOM').setContent),
        appendContent: h(1, c('DOM').appendContent),
        remove: h(0, c('DOM').remove),
        empty: h(0, c('DOM').empty)
    }, c('ArbiterMixin'));
    f.exports = l;
}), null);
__d('TidyArbiterMixin', ['Arbiter', 'ArbiterMixin', 'Run'], (function a(b, c, d, e, f, g) {
    var h = {};
    Object.assign(h, c('ArbiterMixin'), {
        _getArbiterInstance: function i() {
            if (!this._arbiter) {
                this._arbiter = new(c('Arbiter'))();
                c('Run').onLeave(function () {
                    delete this._arbiter;
                }.bind(this));
            }
            return this._arbiter;
        }
    });
    f.exports = h;
}), null);
__d('TidyArbiter', ['TidyArbiterMixin'], (function a(b, c, d, e, f, g) {
    var h = babelHelpers['extends']({}, c('TidyArbiterMixin'));
    f.exports = h;
}), null);
__d('LayerBounds', ['Locale', 'Rect', 'ViewportBounds', 'containsNode', 'ge', 'getOverlayZIndex'], (function a(b, c, d, e, f, g) {
    var h = {
        getViewportRectForContext: function i(j) {
            var k = c('ge')('globalContainer'),
                l = k && c('containsNode')(k, j) || c('getOverlayZIndex')(j) < 300,
                m = c('Rect').getViewportWithoutScrollbarsBounds();
            if (l) {
                m.t += c('ViewportBounds').getTop();
                if (c('Locale').isRTL()) {
                    m.r -= c('ViewportBounds').getLeft();
                    m.l += c('ViewportBounds').getRight();
                } else {
                    m.r -= c('ViewportBounds').getRight();
                    m.l += c('ViewportBounds').getLeft();
                }
            }
            return m;
        }
    };
    f.exports = h;
}), null);
__d('ContextualLayerDimensions', ['LayerBounds', 'Locale', 'Rect', 'Vector', 'ViewportBounds'], (function a(b, c, d, e, f, g) {
    var h = {
        getViewportRect: function i(j) {
            return c('LayerBounds').getViewportRectForContext(j.getContext());
        },
        getLayerRect: function i(j, k) {
            var l = j.getContextBounds('viewport'),
                m = j.simulateOrientation(k, function () {
                    return c('Vector').getElementDimensions(j.getContentRoot());
                }),
                n = l.t + k.getOffsetY();
            if (k.getPosition() === 'above') {
                n -= m.y;
            } else if (k.getPosition() === 'below') n += l.b - l.t;
            var o = l.l + k.getOffsetX(),
                p = l.r - l.l;
            if (k.isVertical()) {
                var q = k.getAlignment();
                if (q === 'center') {
                    o += (p - m.x) / 2;
                } else if (q === 'right' !== c('Locale').isRTL()) {
                    o += p - m.x + k.getArrowOffset();
                } else o -= k.getArrowOffset();
            } else if (k.getPosition() === 'right' !== c('Locale').isRTL()) {
                o += p;
            } else o -= m.x;
            return new(c('Rect'))(n, o + m.x, n + m.y, o, 'viewport');
        }
    };
    f.exports = h;
}), null);
__d('ContextualLayerAutoFlip', ['ContextualLayerDimensions', 'DOMDimensions', 'Vector', 'Rect', 'arrayContains', 'getDocumentScrollElement'], (function a(b, c, d, e, f, g) {
    function h(j, k) {
        k = new(c('Rect'))(k).convertTo(j.domain);
        var l = Math.max(j.l, k.l),
            m = Math.min(j.r, k.r);
        return Math.max(m - l, 0);
    }

    function i(j) {
        'use strict';
        this._layer = j;
    }
    i.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('adjust', this._adjustOrientation.bind(this));
        if (this._layer.isShown()) this._layer.updatePosition();
    };
    i.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
        if (this._layer.isShown()) this._layer.updatePosition();
    };
    i.prototype._adjustOrientation = function (j, k) {
        'use strict';
        var l = this.getValidPositions(k);
        if (!l.length) {
            k.invalidate();
            return;
        }
        var m = c('ContextualLayerDimensions').getViewportRect(this._layer),
            n = this._getValidAlignments(k),
            o, p, q;
        for (o = 0; o < n.length; o++) {
            k.setAlignment(n[o]);
            for (p = 0; p < l.length; p++) {
                k.setPosition(l[p]);
                q = c('ContextualLayerDimensions').getLayerRect(this._layer, k);
                if (m.contains(q)) return;
            }
        }
        var r = -1;
        if (k.getPreferMoreContentShownRect()) {
            var s = c('DOMDimensions').getDocumentDimensions(),
                t = new(c('Rect'))(m).convertTo('document'),
                u = 99999;
            for (p = 0; p < l.length; p++) {
                k.setPosition(l[p]);
                q = c('ContextualLayerDimensions').getLayerRect(this._layer, k);
                var v = new(c('Rect'))(q).convertTo('document');
                if (v.l >= 0 && v.r <= s.width && v.t >= 43 && v.b <= s.height) {
                    var w = t.l - v.l,
                        x = v.r - t.r,
                        y = t.t - v.t,
                        z = v.b - t.b,
                        aa = (w > 0 ? w : 0) + (x > 0 ? x : 0) + (y > 0 ? y : 0) + (z > 0 ? z : 0);
                    if (aa < u) {
                        r = p;
                        u = aa;
                    }
                }
            }
        }
        if (r >= 0) {
            k.setPosition(l[r]);
        } else k.setPosition(c('arrayContains')(l, 'below') ? 'below' : l[0]);
        var ba, ca = 0,
            da = 0;
        for (o = 0; o < n.length; o++) {
            k.setAlignment(n[o]);
            q = c('ContextualLayerDimensions').getLayerRect(this._layer, k);
            ba = h(m, q);
            if (ba > da) {
                da = ba;
                ca = o;
            }
        }
        k.setAlignment(n[ca]);
    };
    i.prototype.getValidPositions = function (j) {
        'use strict';
        var k = [j.getPosition(), j.getOppositePosition()],
            l = this._layer.getContextScrollParent();
        if (l === window || l === c('getDocumentScrollElement')()) return k;
        var m = this._layer.getContext(),
            n = c('Vector').getElementPosition(l, 'viewport').y,
            o = c('Vector').getElementPosition(m, 'viewport').y;
        if (j.isVertical()) {
            return k.filter(function (q) {
                if (q === 'above') {
                    return o >= n;
                } else {
                    var r = n + l.offsetHeight,
                        s = o + m.offsetHeight;
                    return s <= r;
                }
            });
        } else {
            var p = n + l.offsetHeight;
            if (o >= n && o + m.offsetHeight <= p) {
                return k;
            } else return [];
        }
    };
    i.prototype._getValidAlignments = function (j) {
        'use strict';
        var k = ['left', 'right', 'center'],
            l = j.getAlignment(),
            m = k.indexOf(l);
        if (m > 0) {
            k.splice(m, 1);
            k.unshift(l);
        }
        return k;
    };
    Object.assign(i.prototype, {
        _subscription: null
    });
    f.exports = i;
}), null);
__d('getInlineBoundingRect', ['Rect'], (function a(b, c, d, e, f, g) {
    function h(i, j) {
        var k = i.getClientRects();
        if (!j || k.length === 0) return c('Rect').getElementBounds(i);
        var l, m = false;
        for (var n = 0; n < k.length; n++) {
            var o = new(c('Rect'))(Math.round(k[n].top), Math.round(k[n].right), Math.round(k[n].bottom), Math.round(k[n].left), 'viewport').convertTo('document'),
                p = o.getPositionVector(),
                q = p.add(o.getDimensionVector());
            if (!l || p.x <= l.l && p.y > l.t) {
                if (m) break;
                l = new(c('Rect'))(p.y, q.x, q.y, p.x, 'document');
            } else {
                l.t = Math.min(l.t, p.y);
                l.b = Math.max(l.b, q.y);
                l.r = q.x;
            }
            if (o.contains(j)) m = true;
        }
        if (!l) l = c('Rect').getElementBounds(i);
        return l;
    }
    f.exports = h;
}), null);
__d('Tooltip', ['fbt', 'AsyncRequest', 'ContextualLayer', 'ContextualLayerAutoFlip', 'CSS', 'DOM', 'Event', 'Style', 'TooltipData', 'Vector', 'emptyFunction', 'getElementText', 'getInlineBoundingRect', 'getOrCreateDOMID', 'nl2br', 'setImmediate'], (function a(b, c, d, e, f, g, h) {
    var i = null,
        j = null,
        k = null,
        l = null,
        m = null,
        n = null,
        o = [],
        p = [];

    function q() {
        if (!l) {
            m = c('DOM').create('div', {
                className: 'tooltipContent',
                'data-testid': 'tooltip_testid'
            });
            n = c('getOrCreateDOMID')(m);
            var u = c('DOM').create('i', {
                    className: 'arrow'
                }),
                v = c('DOM').create('div', {
                    className: 'uiTooltipX'
                }, [m, u]);
            l = new(c('ContextualLayer'))({}, v);
            l.shouldSetARIAProperties(false);
            l.enableBehavior(c('ContextualLayerAutoFlip'));
        }
    }

    function r(u, v) {
        t._show(u, h._("Indl\u00e6ser ..."));
        new(c('AsyncRequest'))(v).setHandler(function (w) {
            t._show(u, w.getPayload());
        }).setErrorHandler(c('emptyFunction')).send();
    }
    var s;
    c('Event').listen(document.documentElement, 'mouseover', function (event) {
        s = event;
        c('setImmediate')(function () {
            s = null;
        });
    });
    var t = babelHelpers['extends']({}, c('TooltipData'), {
        isActive: function u(v) {
            return v === i;
        },
        process: function u(v, w) {
            if (!c('DOM').contains(v, w)) return;
            if (v !== i) {
                t.fetchIfNecessary(v);
                var x = t._get(v);
                if (x.suppress) return;
                if (x.delay) {
                    t._showWithDelay(v, x.delay);
                } else t.show(v);
            }
        },
        fetchIfNecessary: function u(v) {
            var w = v.getAttribute('data-tooltip-uri');
            if (w) {
                v.removeAttribute('data-tooltip-uri');
                r(v, w);
            }
        },
        hide: function u() {
            if (i) {
                l.hide();
                i = null;
                while (o.length) o.pop().remove();
            }
        },
        _show: function u(v, w) {
            t._store({
                context: v,
                content: w
            });
            t.isActive(v) && t.show(v);
        },
        show: function u(v) {
            var w = function ha() {
                    v.setAttribute('aria-describedby', n);
                    l.show();
                },
                x = function ha() {
                    v.removeAttribute('aria-describedby');
                    t.hide();
                },
                y = function ha(ia) {
                    if (!c('DOM').contains(i, ia.getTarget())) x();
                };
            q();
            x();
            var z = t._get(v);
            if (z.suppress || t.allSuppressed) return;
            var aa = z.content;
            if (z.overflowDisplay) {
                if (v.offsetWidth >= v.scrollWidth) return;
                if (!aa) aa = c('getElementText')(v);
            }
            if (!aa) return;
            var ba = 0,
                ca = 0;
            if (z.position === 'left' || z.position === 'right') {
                ca = (v.offsetHeight - 28) / 2;
            } else if (z.alignH !== 'center') {
                var da = v.offsetWidth;
                if (da < 32) ba = (da - 32) / 2 * (z.alignH === 'right' ? -1 : 1);
            }
            l.setContextWithBounds(v, c('getInlineBoundingRect')(v, s && c('Vector').getEventPosition(s))).setOffsetX(ba).setOffsetY(ca).setPosition(z.position).setAlignment(z.alignH);
            if (typeof aa === 'string') {
                c('CSS').addClass(l.getRoot(), 'invisible_elem');
                var ea = c('DOM').create('span', {}, c('nl2br')(aa)),
                    fa = c('DOM').create('div', {
                        className: 'tooltipText'
                    }, ea);
                c('DOM').setContent(m, fa);
                w();
                c('CSS').removeClass(l.getRoot(), 'invisible_elem');
            } else {
                c('DOM').setContent(m, aa);
                w();
            }
            o.push(c('Event').listen(document.documentElement, 'mouseover', y), c('Event').listen(document.documentElement, 'focusin', y));
            var ga = c('Style').getScrollParent(v);
            if (ga !== window) o.push(c('Event').listen(ga, 'scroll', x));
            if (!z.persistOnClick) o.push(c('Event').listen(v, 'click', x));
            i = v;
        },
        _showWithDelay: function u(v, w) {
            if (v !== j) t._clearDelay();
            if (!k) {
                var x = function y(z) {
                    if (!c('DOM').contains(j, z.getTarget())) t._clearDelay();
                };
                p.push(c('Event').listen(document.documentElement, 'mouseover', x), c('Event').listen(document.documentElement, 'focusin', x));
                j = v;
                k = setTimeout(function () {
                    t._clearDelay();
                    t.show(v);
                }, w);
            }
        },
        _clearDelay: function u() {
            clearTimeout(k);
            j = null;
            k = null;
            while (p.length) p.pop().remove();
        }
    });
    c('Event').listen(window, 'scroll', t.hide);
    f.exports = t;
}), null);
__d('cxodecode', ['invariant'], (function a(b, c, d, e, f, g, h) {
    'use strict';
    var i = 36,
        j = 2;

    function k(l) {
        if (!l) return '';
        var m = l.cxononce;
        m || h(0);
        var n = m.substr(0, m.length - j),
            o = parseInt(m.substr(-j), i),
            p = '';
        for (var q = 0; q < n.length; q += j) p += String.fromCharCode(parseInt(n.substr(q, j), i) ^ o);
        return p;
    }
    f.exports = k;
}), null);
__d('ProfileTabUtils', ['ProfileOverviewDOMID', 'ProfileTabConst'], (function a(b, c, d, e, f, g) {
    function h(j) {
        return !j || j === c('ProfileTabConst').TIMELINE || j === c('ProfileTabConst').WALL;
    }
    var i = {
        isActivityLogTab: function j(k) {
            return k === c('ProfileTabConst').ALL_ACTIVITY || k === c('ProfileTabConst').APPROVAL;
        },
        isOverviewTab: function j(k) {
            return k === c('ProfileTabConst').INFO || k === c('ProfileTabConst').OVERVIEW;
        },
        isTimelineTab: h,
        isMapTab: function j(k) {
            return k === c('ProfileTabConst').MAP;
        },
        tabHasFixedAds: function j(k) {
            return true;
        },
        tabHasScrubber: function j(k) {
            return i.isActivityLogTab(k);
        },
        tabHasStickyHeader: h,
        getIDForCollectionToken: function j(k) {
            return c('ProfileOverviewDOMID').PREFIX_APP_COLLECTION + k;
        },
        getIDForSectionKey: function j(k) {
            return c('ProfileOverviewDOMID').PREFIX_MEDLEY + k;
        }
    };
    f.exports = i;
}), null);
__d('DialogPosition', ['Vector'], (function a(b, c, d, e, f, g) {
    var h = 40,
        i, j = {
            calculateTopMargin: function k(l, m) {
                var n = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2],
                    o = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3],
                    p = c('Vector').getViewportDimensions(),
                    q = false;
                if (o && n) q = n + m > p.y;
                if (n && !q) return n;
                if (i) return i;
                var r = Math.floor((p.x + l) * (p.y - m) / (4 * p.x));
                return Math.max(r, h);
            },
            setFixedTopMargin: function k(l) {
                i = l;
            }
        };
    f.exports = j;
}), null);
__d('focusWithinLayer', ['DOMQuery', 'Focus', 'TabbableElements', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    function h(i) {
        var j = c('DOMQuery').scry(i, '.autofocus')[0],
            k = true;
        if (!j) {
            var l = c('getActiveElement')();
            if (c('DOMQuery').isNodeOfType(l, ['input', 'textarea'])) return;
            var m = c('TabbableElements').find(i);
            for (var n = 0; n < m.length; n++) {
                var o = m[n];
                if (o.tagName !== 'A' || o.getAttribute('role') === 'button') {
                    j = m[n];
                    break;
                }
            }
        } else if (j.tabIndex !== 0) k = false;
        if (j) {
            k ? c('Focus').set(j) : c('Focus').setWithoutOutline(j);
        } else if (!i.offsetWidth) {
            i.tabIndex = -1;
            c('Focus').setWithoutOutline(i);
        }
    }
    f.exports = h;
}), null);
__d('LayerAutoFocus', ['focusWithinLayer'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
        this._subscription = null;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('aftershow', this._focus.bind(this));
    };
    h.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    h.prototype._focus = function () {
        'use strict';
        var i = this._layer.getRoot();
        i && c('focusWithinLayer')(i);
    };
    f.exports = h;
}), null);
__d('LayerButtons', ['csx', 'Button', 'Event', 'Parent'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        'use strict';
        this._layer = j;
    }
    i.prototype.enable = function () {
        'use strict';
        this._listener = c('Event').listen(this._layer.getRoot(), 'click', this._handle.bind(this));
    };
    i.prototype.disable = function () {
        'use strict';
        this._listener.remove();
        this._listener = null;
    };
    i.prototype._handle = function (j) {
        'use strict';
        var k = j.getTarget(),
            l = c('Parent').byClass(k, 'layerHide');
        if (l) {
            this._layer.hide();
            return;
        }
        var m = c('Parent').byClass(k, 'layerConfirm');
        if (m) {
            if (this._isButton(m) && !c('Button').isEnabled(m)) return;
            if (this._isInNestedLayer(m)) return;
            if (this._layer.inform('confirm', m) === false) j.prevent();
            return;
        }
        var n = c('Parent').byClass(k, 'layerCancel');
        if (n) {
            if (this._isButton(n) && !c('Button').isEnabled(n)) return;
            if (this._isInNestedLayer(n)) return;
            if (this._layer.inform('cancel', n) !== false) this._layer.hide();
            j.prevent();
            return;
        }
        var o = c('Parent').byClass(k, 'layerButton');
        if (o) {
            if (this._isButton(o) && !c('Button').isEnabled(o)) return;
            if (this._isInNestedLayer(o)) return;
            if (this._layer.inform('button', o) === false) j.prevent();
        }
    };
    i.prototype._isInNestedLayer = function (j) {
        'use strict';
        var k = c('Parent').byClass(j, 'uiLayer'),
            l = this._layer.getRoot();
        return !!(k && l !== k);
    };
    i.prototype._isButton = function (j) {
        'use strict';
        return !!(c('Parent').byClass(j, 'uiButton') || c('Parent').bySelector(j, "._42ft"));
    };
    i.prototype._listener = null;
    f.exports = i;
}), null);
__d('LayerFormHooks', ['Event'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        var i = this._layer.getRoot();
        this._subscriptions = [c('Event').listen(i, 'submit', this._onSubmit.bind(this)), c('Event').listen(i, 'success', this._onSuccess.bind(this)), c('Event').listen(i, 'error', this._onError.bind(this))];
    };
    h.prototype.disable = function () {
        'use strict';
        this._subscriptions.forEach(function (i) {
            i.remove();
        });
        this._subscriptions = null;
    };
    h.prototype._onSubmit = function (event) {
        'use strict';
        if (this._layer.inform('submit', event) === false) event.kill();
    };
    h.prototype._onSuccess = function (event) {
        'use strict';
        if (this._layer.inform('success', event) === false) event.kill();
    };
    h.prototype._onError = function (event) {
        'use strict';
        var i = event.getData();
        if (this._layer.inform('error', {
                response: i.response
            }) === false) event.kill();
    };
    Object.assign(h.prototype, {
        _subscriptions: null
    });
    f.exports = h;
}), null);
__d('LayerRefocusOnHide', ['ContextualThing', 'DOM', 'DOMQuery', 'Focus', 'Parent', 'getActiveElement'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('hide', this._handle.bind(this));
    };
    h.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    h.prototype._handle = function (i, event) {
        'use strict';
        var j = c('getActiveElement')();
        if (j === document.body || c('DOMQuery').contains(this._layer.getRoot(), j)) {
            var k = this._layer.getCausalElement();
            while (k && !k.offsetWidth) {
                var l = c('Parent').byClass(k, 'uiToggle');
                if (l && l.offsetWidth) {
                    k = c('DOM').scry(l, '[rel="toggle"]')[0];
                } else {
                    var m = c('ContextualThing').getContext(k);
                    if (m) {
                        k = m;
                    } else k = k.parentNode;
                }
            }
            if (k) c('Focus').set(k);
        }
    };
    Object.assign(h.prototype, {
        _subscription: null
    });
    f.exports = h;
}), null);
__d('LayerTogglerContext', ['Toggler'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._root = this._layer.getRoot();
        c('Toggler').createInstance(this._root).setSticky(false);
    };
    h.prototype.disable = function () {
        'use strict';
        c('Toggler').destroyInstance(this._root);
        this._root = null;
    };
    f.exports = h;
}), null);
__d('ModalLayer', ['csx', 'cx', 'Arbiter', 'ArbiterMixin', 'CSS', 'DataStore', 'DOM', 'DOMDimensions', 'DOMQuery', 'Event', 'Scroll', 'ScrollAwareDOM', 'Style', 'UserAgent_DEPRECATED', 'Vector', 'debounceAcrossTransitions', 'getDocumentScrollElement', 'isAsyncScrollQuery', 'removeFromArray', 'setTimeoutAcrossTransitions', 'ge'], (function a(b, c, d, e, f, g, h, i) {
    var j = [],
        k = null,
        l = null,
        m = null;

    function n() {
        if (!m) m = c('DOMQuery').scry(document.body, "._li")[0] || c('ge')('FB4BResponsiveMain');
        return m;
    }

    function o(v) {
        var w = {
                position: c('Vector').getScrollPosition()
            },
            x = v.offsetTop - w.position.y;
        c('CSS').addClass(v, "_31e");
        c('Style').set(v, 'top', x + 'px');
        c('Arbiter').inform('reflow');
        w.listener = c('ScrollAwareDOM').subscribe('scroll', function (y, z) {
            if (c('DOMQuery').contains(v, z.target)) {
                var aa = v.offsetTop - z.delta.y;
                c('Style').set(v, 'top', aa + 'px');
                w.position = w.position.add(z.delta);
                return false;
            }
        });
        c('DataStore').set(v, 'ModalLayerData', w);
    }

    function p(v, w) {
        var x = c('DataStore').get(v, 'ModalLayerData');
        if (x) {
            var y = function ba() {
                c('CSS').removeClass(v, "_31e");
                c('Style').set(v, 'top', '');
                if (w) {
                    var ca = c('getDocumentScrollElement')();
                    c('Scroll').setTop(ca, x.position.y);
                    if (c('Scroll').getTop(ca) !== x.position.y) {
                        c('Scroll').setTop(ca, x.position.y + 1);
                        c('Scroll').setTop(ca, x.position.y);
                    }
                }
                c('Arbiter').inform('reflow');
                x.listener.unsubscribe();
                x.listener = null;
                c('DataStore').remove(v, 'ModalLayerData');
            };
            if (w && c('isAsyncScrollQuery')()) {
                var z = c('DOM').create('div', {
                    className: "_42w"
                });
                c('Style').set(z, 'height', v.offsetHeight + 'px');
                c('DOM').appendContent(document.body, z);
                var aa = c('getDocumentScrollElement')();
                c('Scroll').setTop(aa, x.position.y);
                w = false;
                setTimeout(function () {
                    y();
                    c('DOM').remove(z);
                }, 0);
            } else y();
        }
    }

    function q() {
        var v = n();
        if (!c('CSS').matchesSelector(v, "._31e")) o(v);
    }

    function r() {
        if (!j.length) p(n(), true);
    }

    function s() {
        var v = j.length;
        while (v--) {
            var w = j[v],
                x = w.getLayerRoot();
            t(x, '');
            var y = w.getLayerContentRoot(),
                z = y.offsetWidth + c('DOMDimensions').measureElementBox(y, 'width', 0, 0, 1);
            t(x, z);
        }
    }

    function t(v, w) {
        c('Style').set(v, 'min-width', w + (w ? 'px' : ''));
    }

    function u(v) {
        'use strict';
        this._layer = v;
        this._enabled = false;
    }
    u.prototype.enable = function () {
        'use strict';
        if (!n()) return;
        this._subscription = this._layer.subscribe(['show', 'hide'], function (v) {
            v == 'show' ? this._addModal() : this._removeModal();
        }.bind(this));
        if (this._layer.isShown()) this._addModal();
        this._enabled = true;
    };
    u.prototype.disable = function () {
        'use strict';
        if (!n()) return;
        this._subscription.unsubscribe();
        this._subscription = null;
        if (this._layer.isShown()) this._removeModal();
        this._enabled = false;
    };
    u.prototype._addModal = function () {
        'use strict';
        var v = this.getLayerRoot();
        c('CSS').addClass(v, "_3qw");
        this._wash = c('DOM').create('div', {
            className: "_3ixn"
        });
        c('DOM').prependContent(v, this._wash);
        var w = j[j.length - 1];
        if (w) {
            o(w.getLayerRoot());
        } else q();
        var x = c('getDocumentScrollElement')();
        c('Scroll').setTop(x, 0);
        if (!j.length) {
            var y = c('debounceAcrossTransitions')(s, 100);
            k = c('Event').listen(window, 'resize', y);
            l = c('Arbiter').subscribe('reflow', y);
        }
        j.push(this);
        u.inform('show', this);
        setTimeout(s, 0);
    };
    u.prototype._removeModal = function () {
        'use strict';
        var v = this.getLayerRoot();
        c('CSS').removeClass(v, "_3qw");
        c('DOM').remove(this._wash);
        this._wash = null;
        t(v, '');
        var w = this === j[j.length - 1];
        c('removeFromArray')(j, this);
        if (!j.length) {
            k.remove();
            k = null;
            l.unsubscribe();
            l = null;
        }
        var x = c('Event').listen(document.documentElement, 'mousewheel', c('Event').prevent),
            y = x.remove.bind(x);
        c('setTimeoutAcrossTransitions')(function () {
            var z = j[j.length - 1];
            if (z) {
                p(z.getLayerRoot(), w);
                u.inform('show', z);
            } else {
                r();
                u.inform('hide', this);
            }
            if (j.length) setTimeout(s, 0);
            setTimeout(y, 0);
        }.bind(this), 400);
    };
    u.prototype.getLayerRoot = function () {
        'use strict';
        return this._enabled ? this._layer.getRoot() : null;
    };
    u.prototype.getLayerContentRoot = function () {
        'use strict';
        return this._enabled ? this._layer.getContentRoot() : null;
    };
    u.getTopmostModalLayer = function () {
        'use strict';
        return j[j.length - 1];
    };
    Object.assign(u, c('ArbiterMixin'));
    f.exports = u;
}), null);
__d('DialogX', ['cx', 'fbt', 'Arbiter', 'CSS', 'DialogPosition', 'DOMQuery', 'Event', 'JSXDOM', 'Layer', 'LayerAutoFocus', 'LayerButtons', 'LayerFormHooks', 'LayerRefocusOnHide', 'LayerTabIsolation', 'LayerTogglerContext', 'ModalLayer', 'Style', 'Vector', 'debounce', 'getOrCreateDOMID', 'goURI', 'shield'], (function a(b, c, d, e, f, g, h, i) {
    var j, k;
    j = babelHelpers.inherits(l, c('Layer'));
    k = j && j.prototype;
    l.prototype._configure = function (n, o) {
        'use strict';
        k._configure.call(this, n, o);
        c('CSS').addClass(this.getRoot(), "_4-hy");
        if (n.autohide) var p = this.subscribe('show', function () {
            p.unsubscribe();
            setTimeout(c('shield')(this.hide, this), n.autohide);
        }.bind(this));
        if (n.redirectURI) var q = this.subscribe('hide', function () {
            q.unsubscribe();
            c('goURI')(n.redirectURI);
        });
        this._fixedTopPosition = n.fixedTopPosition;
        this._ignoreFixedTopInShortViewport = n.ignoreFixedTopInShortViewport;
    };
    l.prototype._getDefaultBehaviors = function () {
        'use strict';
        return k._getDefaultBehaviors.call(this).concat([m, c('ModalLayer'), c('LayerAutoFocus'), c('LayerButtons'), c('LayerFormHooks'), c('LayerTabIsolation'), c('LayerTogglerContext'), c('LayerRefocusOnHide')]);
    };
    l.prototype._buildWrapper = function (n, o) {
        'use strict';
        var p = n.xui ? "_4t2a" : "_t",
            q = n.xui ? "_59s7" : "_1yv";
        this._innerContent = c('JSXDOM').div(null, o);
        var r = {
            className: q,
            role: 'dialog'
        };
        if (n.labelledBy) {
            r['aria-labelledby'] = n.labelledBy.join(' ');
        } else if (n.label) {
            r['aria-label'] = n.label;
        } else if (n.titleID) {
            r['aria-labelledby'] = n.titleID;
        } else if (n.titleClass) {
            var s = c('DOMQuery').scry(this._innerContent, n.titleClass);
            if (s.length) {
                var t = c('getOrCreateDOMID')(s[0]);
                r['aria-labelledby'] = t;
            } else r['aria-label'] = this._getDefaultLabel();
        } else r['aria-label'] = this._getDefaultLabel();
        var u = {
            className: p
        };
        if (n['data-testid']) u['data-testid'] = n['data-testid'];
        this._wrapper = c('JSXDOM').div(r, c('JSXDOM').div(u, this._innerContent));
        this.setWidth(n.width);
        return c('JSXDOM').div({
            className: "_10"
        }, this._wrapper);
    };
    l.prototype._getDefaultLabel = function () {
        'use strict';
        return i._("Dialogindhold");
    };
    l.prototype.getContentRoot = function () {
        'use strict';
        return this._wrapper;
    };
    l.prototype.getInnerContent = function () {
        'use strict';
        return this._innerContent;
    };
    l.prototype.updatePosition = function () {
        'use strict';
        var n = c('Vector').getElementDimensions(this._wrapper),
            o = c('DialogPosition').calculateTopMargin(n.x, n.y, this._fixedTopPosition, this._ignoreFixedTopInShortViewport);
        c('Style').set(this._wrapper, 'margin-top', o + 'px');
        this.inform('update_position', {
            type: 'DialogX',
            top: o
        });
    };
    l.prototype.setWidth = function (n) {
        'use strict';
        n = Math.floor(n);
        if (n === this._width) return;
        this._width = n;
        c('Style').set(this._wrapper, 'width', n + 'px');
    };
    l.prototype.getWidth = function () {
        'use strict';
        return this._width;
    };
    l.prototype.getFixedTopPosition = function () {
        'use strict';
        return this._fixedTopPosition;
    };
    l.prototype.shouldIgnoreFixedTopInShortViewport = function () {
        'use strict';
        return this._ignoreFixedTopInShortViewport;
    };

    function l() {
        'use strict';
        j.apply(this, arguments);
    }

    function m(n) {
        'use strict';
        this._layer = n;
    }
    m.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe(['show', 'hide'], function (n) {
            if (n === 'show') {
                this._attach();
                c('Arbiter').inform('layer_shown', {
                    type: 'DialogX'
                });
            } else {
                this._detach();
                c('Arbiter').inform('layer_hidden', {
                    type: 'DialogX'
                });
            }
        }.bind(this));
    };
    m.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
        this._resize && this._detach();
    };
    m.prototype._attach = function () {
        'use strict';
        this._layer.updatePosition();
        this._resize = c('Event').listen(window, 'resize', c('debounce')(this._layer.updatePosition.bind(this._layer)));
    };
    m.prototype._detach = function () {
        'use strict';
        this._resize.remove();
        this._resize = null;
    };
    Object.assign(m.prototype, {
        _subscription: null,
        _resize: null
    });
    f.exports = l;
}), null);
__d('LayerFadeOnShow', ['Bootloader', 'Run', 'UserAgent_DEPRECATED', 'emptyFunction', 'ifRequired'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
        c('Run').onAfterLoad(function () {
            c('Bootloader').loadModules(["css:CSSFade"], c('emptyFunction'), 'LayerFadeOnShow');
        });
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscriptions = [this._layer.subscribe('show', this._animate.bind(this))];
    };
    h.prototype.disable = function () {
        'use strict';
        if (this._subscriptions) {
            while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
            this._subscriptions = null;
        }
    };
    h.prototype._getDuration = function () {
        'use strict';
        return 100;
    };
    h.prototype._animate = function () {
        'use strict';
        var i = this._layer.getRoot();
        c('ifRequired')('CSSFade', function (j) {
            j.show(i, {
                duration: this._getDuration()
            });
        }.bind(this), function () {});
    };
    h.forDuration = function (i) {
        var j, k;
        'use strict';
        j = babelHelpers.inherits(l, h);
        k = j && j.prototype;

        function l() {
            j.apply(this, arguments);
        }
        l.prototype._getDuration = c('emptyFunction').thatReturns(i);
        return l;
    };
    Object.assign(h.prototype, {
        _subscriptions: null
    });
    f.exports = h;
}), null);
__d("LoadingDialogDimensions", [], (function a(b, c, d, e, f, g) {
    var h = {
        HEIGHT: 96,
        WIDTH: 300
    };
    f.exports = h;
}), null);
__d('AsyncDialog', ['cx', 'AsyncRequest', 'CSS', 'DialogX', 'DOM', 'Keys', 'LayerFadeOnShow', 'LoadingDialogDimensions', 'Parent', 'React', 'ReactDOM', 'URI', 'XUISpinner.react', 'XUIDialogTitle.react', 'emptyFunction', 'forEachObject'], (function a(b, c, d, e, f, g, h) {
    var i, j;

    function k(s) {
        var t = c('LoadingDialogDimensions').WIDTH,
            u;
        if (s) {
            t = parseInt(s.getAttribute('data-dialog-width'), 10) || t;
            u = s.getAttribute('data-dialog-title') || u;
        }
        if (!i) {
            var v = c('DOM').create('div', {
                className: "_57-x"
            });
            i = new(c('DialogX'))({
                width: t,
                addedBehaviors: [c('LayerFadeOnShow')],
                xui: true
            }, c('DOM').create('div', null, v));
            j = c('DOM').create('div');
            c('DOM').insertBefore(v, j);
            c('ReactDOM').render(c('React').createElement(c('XUISpinner.react'), {
                size: 'large'
            }), v);
            i.subscribe(['key', 'blur'], function (w, x) {
                if (w == 'blur' || w == 'key' && x.keyCode == c('Keys').ESC) {
                    o();
                    return false;
                }
            });
        }
        if (u) {
            c('ReactDOM').render(c('React').createElement(c('XUIDialogTitle.react'), {
                showCloseButton: false
            }, u), j);
        } else c('DOM').empty(j);
        i.setWidth(t);
        return i;
    }
    var l = {},
        m = 1,
        n = [];

    function o() {
        c('forEachObject')(l, function (s, t) {
            s.abandon();
            p(t);
        });
    }

    function p(s) {
        delete l[s];
        if (!Object.keys(l).length) k().hide();
    }

    function q(s, t) {
        var u = m++;
        n[u] = t;
        l[u] = s;
        var v = p.bind(null, '' + u);
        Object.assign(s.getData(), {
            __asyncDialog: u
        });
        var w = s.getRelativeTo();
        k(w).setCausalElement(w).show();
        var x = s.finallyHandler;
        s.setFinallyHandler(function (aa) {
            var ba = aa.getPayload();
            if (ba && ba.asyncURL) r.send(new(c('AsyncRequest'))(ba.asyncURL));
            v();
            x && x(aa);
        });
        var y = s.abortHandler || c('emptyFunction'),
            z = s.interceptHandler || c('emptyFunction');
        s.setInterceptHandler(function () {
            try {
                z();
            } finally {
                v();
            }
        }).setAbortHandler(function () {
            try {
                y();
            } finally {
                v();
            }
        });
        s.send();
    }
    var r = {
        send: function s(t, u) {
            q(t, u || c('emptyFunction'));
        },
        bootstrap: function s(t, u, v) {
            if (!t) return;
            var w = c('Parent').byClass(u, 'stat_elem') || u;
            if (w && c('CSS').hasClass(w, 'async_saving')) return false;
            var x = new(c('URI'))(t).getQueryData(),
                y = v === 'dialog',
                z = new(c('AsyncRequest'))().setURI(t).setData(x).setMethod(y ? 'GET' : 'POST').setReadOnly(y).setStatusElement(w);
            if (u) {
                z.setRelativeTo(u);
                z.setNectarModuleDataSafe(u);
            }
            r.send(z);
        },
        respond: function s(t, u) {
            var v = n[t];
            if (v) {
                v(u);
                delete n[t];
            }
        },
        getLoadingDialog: function s() {
            return k();
        }
    };
    f.exports = r;
}), null);
__d('LikeConfirmer', ['AsyncDialog', 'AsyncRequest'], (function a(b, c, d, e, f, g) {
    var h = false,
        i = false,
        j = {
            likeContent: function k() {},
            like: function k(l, m) {
                this.likeContent = l;
                if (i) return;
                if (h) {
                    this.likeContent();
                } else {
                    var n = new(c('AsyncRequest'))().setURI('/like/confirm_like.php').setRelativeTo(m);
                    c('AsyncDialog').send(n, function (o) {
                        i = true;
                        o.subscribe('hide', this.onCloseLikeConfirmDialog.bind(this));
                        o.setCausalElement(m);
                    }.bind(this));
                }
                return false;
            },
            isShowingConfirmation: function k() {
                return i;
            },
            onCloseLikeConfirmDialog: function k() {
                i = false;
            },
            likeSkipConfirmation: function k(l) {
                h = l;
                this.likeContent();
            }
        };
    f.exports = j;
}), null);
__d('MenuSeparator', ['cx', 'DOM', 'CSS', 'MenuItemInterface'], (function a(b, c, d, e, f, g, h) {
    var i, j;
    i = babelHelpers.inherits(k, c('MenuItemInterface'));
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this, l);
        this._data = l;
        this.showFn = this._data.should_show_fn;
    }
    k.prototype.updateShownState = function (l) {
        'use strict';
        if (this.showFn) {
            this._isHidden = !this.showFn(l);
            if (this._root) c('CSS').conditionShow(this._root, !this._isHidden);
        }
    };
    k.prototype.isShown = function (l) {
        'use strict';
        var m = this.showFn ? this.showFn(l) : true;
        return m;
    };
    k.prototype.render = function () {
        'use strict';
        var l = "_54ak";
        if (this._data.className) l += ' ' + this._data.className;
        var m = this._data.label || '',
            n = c('DOM').create('li', {
                className: l,
                role: 'separator'
            }, m);
        if (this._isHidden) c('CSS').hide(n);
        return n;
    };
    f.exports = k;
}), null);
__d('MenuStaticItem', ['cx', 'DOM', 'MenuItemBase', 'React', 'ReactDOM', 'emptyFunction'], (function a(b, c, d, e, f, g, h) {
    var i, j;
    i = babelHelpers.inherits(k, c('MenuItemBase'));
    j = i && i.prototype;

    function k(l) {
        'use strict';
        j.constructor.call(this);
        this._data = l;
    }
    k.prototype._renderItemContent = function () {
        'use strict';
        var l = c('DOM').create('span', {
            className: "_54nc _54ah"
        });
        if (this._data.children) {
            c('ReactDOM').render(c('React').createElement('span', {
                className: "_54nh"
            }, this._data.children), l);
        } else c('DOM').setContent(l, c('DOM').create('span', {
            className: "_54nh"
        }, this._data.markup));
        return l;
    };
    Object.assign(k.prototype, {
        handleClick: c('emptyFunction')
    });
    f.exports = k;
}), null);
__d('SwapButton', ['DOM', 'Event', 'Focus'], (function a(b, c, d, e, f, g) {
    function h(j, k, l) {
        c('DOM').insertAfter(k, j);
        c('DOM').remove(k);
        l && c('Focus').setWithoutOutline(j);
    }

    function i(j, k, l) {
        'use strict';
        this._swapperButton = j;
        this._swappeeButton = k;
        c('Event').listen(j, 'click', h.bind(null, k, j, true));
        if (l) c('Event').listen(k, 'click', h.bind(null, j, k, true));
    }
    i.prototype.swap = function (j) {
        'use strict';
        if (this._swapperButton.parentNode) h(this._swappeeButton, this._swapperButton, j);
    };
    i.prototype.unswap = function (j) {
        'use strict';
        if (!this._swapperButton.parentNode) h(this._swapperButton, this._swappeeButton, j);
    };
    i.prototype.toggle = function (j) {
        'use strict';
        if (this._swapperButton.parentNode) {
            this.swap(j);
        } else this.unswap(j);
    };
    i.prototype.getCurrentButton = function () {
        'use strict';
        return this._swapperButton.parentNode ? this._swapperButton : this._swappeeButton;
    };
    Object.assign(i.prototype, {
        _swapperButton: null,
        _swappeeButton: null
    });
    f.exports = i;
}), null);
__d('Spotlight', ['csx', 'cx', 'Arbiter', 'ArbiterMixin', 'DOM', 'JSXDOM', 'Layer', 'LayerAutoFocus', 'LayerTabIsolation', 'ModalLayer', 'Vector', 'classWithMixins', 'joinClasses', 'mixin'], (function a(b, c, d, e, f, g, h, i) {
    var j, k;
    j = babelHelpers.inherits(l, c('classWithMixins')(c('Layer'), c('mixin')(c('ArbiterMixin'))));
    k = j && j.prototype;

    function l(n, o) {
        'use strict';
        k.constructor.call(this, n, o);
        this.stageMinSize = new(c('Vector'))(0, 0);
        this.stagePadding = new(c('Vector'))(0, 0);
    }
    l.prototype._buildWrapper = function (n, o) {
        'use strict';
        var p = c('joinClasses')("_n8" + (n.wash === 'dark' || !n.wash ? ' ' + "_3qx" : '') + (n.wash === 'xui' ? ' ' + "_4-hy" : ''), n.rootClassName);
        return c('JSXDOM').div({
            className: p
        }, c('JSXDOM').div({
            className: "_n9"
        }, o));
    };
    l.prototype._getDefaultBehaviors = function () {
        'use strict';
        return k._getDefaultBehaviors.call(this).concat([m, c('LayerAutoFocus'), c('LayerTabIsolation'), c('ModalLayer')]);
    };
    l.prototype.getContentRoot = function () {
        'use strict';
        if (!this._content) this._content = c('DOM').find(this.getRoot(), "div._n3");
        return this._content;
    };
    l.prototype.configure = function (n) {
        'use strict';
        if (n.stageMinSize) this.stageMinSize = n.stageMinSize;
        if (n.stagePadding) this.stagePadding = n.stagePadding;
    };
    l.prototype.onContentLoaded = function () {
        'use strict';
        this.inform('content-load');
    };
    l.prototype.updatePermalink = function (n) {
        'use strict';
        this.inform('permalinkchange', n);
    };
    Object.assign(l.prototype, {
        stageMinSize: null,
        stagePadding: null
    });

    function m(n) {
        'use strict';
        this._layer = n;
    }
    m.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe(['show', 'hide'], function (n, o) {
            if (n === 'show') {
                c('Arbiter').inform('layer_shown', {
                    type: 'Spotlight'
                });
            } else c('Arbiter').inform('layer_hidden', {
                type: 'Spotlight'
            });
        });
    };
    m.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    Object.assign(m.prototype, {
        _subscription: null
    });
    f.exports = l;
}), null);
__d('AccessibleLayer', ['fbt', 'DOM', 'Event', 'Focus'], (function a(b, c, d, e, f, g, h) {
    function i(j) {
        'use strict';
        this._layer = j;
        this._listener = null;
    }
    i.prototype.enable = function () {
        'use strict';
        this._afterShowSubscription = this._layer.subscribe('aftershow', this._onAfterShow.bind(this));
        this._afterHideSubscription = this._layer.subscribe('hide', this._onAfterHide.bind(this));
    };
    i.prototype.disable = function () {
        'use strict';
        this._listener && this._listener.remove();
        this._afterShowSubscription.unsubscribe();
        this._listener = this._afterShowSubscription = null;
    };
    i.prototype._closeListener = function (event) {
        'use strict';
        var j = this._layer.getCausalElement();
        if (j)
            if (j.tabIndex == -1) {
                j.tabIndex = 0;
                c('Focus').setWithoutOutline(j);
            } else c('Focus').set(j);
        this._layer.hide();
    };
    i.prototype._setupCloseButton = function () {
        'use strict';
        var j = this._layer.getContentRoot(),
            k = c('DOM').scry(j, '.layer_close_elem')[0];
        if (!k) {
            k = c('DOM').create('a', {
                className: 'accessible_elem layer_close_elem',
                href: '#',
                role: 'button'
            }, [h._("Luk pop-up-vinduet og g\u00e5 tilbage")]);
            c('DOM').appendContent(j, k);
        }
        this._listener = c('Event').listen(k, 'click', this._closeListener.bind(this));
    };
    i.prototype._onAfterShow = function () {
        'use strict';
        if (!this._listener) this._setupCloseButton();
    };
    i.prototype._onAfterHide = function () {
        'use strict';
        this._listener && this._listener.remove();
        this._listener = null;
    };
    f.exports = i;
}), null);
__d('ContextualDialogARIA', ['DOM', 'getOrCreateDOMID'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('beforeshow', this._addAriaAttribute.bind(this));
    };
    h.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    h.prototype._addAriaAttribute = function () {
        'use strict';
        var i = this._layer.getCausalElement();
        if (!i) return;
        var j = c('DOM').scry(this._layer.getRoot(), '.accessible_elem');
        if (j.length) i.setAttribute('aria-describedby', c('getOrCreateDOMID')(j[0]));
    };
    f.exports = h;
}), null);
__d('ContextualLayerAsyncRelative', ['Event', 'Parent'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._layerSubscription = this._layer.subscribe('show', this._attachListener.bind(this));
        if (this._layer.isShown()) this._attachListener();
    };
    h.prototype.disable = function () {
        'use strict';
        this._layerSubscription.unsubscribe();
        this._layerSubscription = null;
        if (this._listener) {
            this._listener.remove();
            this._listener = null;
        }
    };
    h.prototype._attachListener = function () {
        'use strict';
        this._listener = c('Event').listen(this._layer.getRoot(), 'click', this._onclick.bind(this));
    };
    h.prototype._onclick = function (i) {
        'use strict';
        var j = c('Parent').byTag(i.getTarget(), 'A');
        if (!j) return;
        var k = j.getAttribute('ajaxify'),
            l = j.href,
            m = k || l;
        if (j.rel === 'async' || j.rel === 'async-post') {
            e(['AsyncRequest'], function (n) {
                n.bootstrap(m, this._layer.getContext(), j.rel === 'async-post');
            }.bind(this));
            return false;
        }
    };
    Object.assign(h.prototype, {
        _layerSubscription: null,
        _listener: null
    });
    f.exports = h;
}), null);
__d('ContextualLayerPositionClassOnContext', ['cx', 'CSS'], (function a(b, c, d, e, f, g, h) {
    function i(k) {
        'use strict';
        this._layer = k;
    }
    i.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('reposition', this._updateClassName.bind(this));
        if (this._layer.isShown()) this._updateClassName();
    };
    i.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
        if (this._prevClassName) {
            c('CSS').removeClass(this._layer.getContext(), this._prevClassName);
            this._prevClassName = null;
        }
    };
    i.prototype._updateClassName = function (k, l) {
        'use strict';
        var m = this._layer.getContext(),
            n = j(l);
        if (this._prevClassName) {
            if (this._prevClassName === n) return;
            c('CSS').removeClass(m, this._prevClassName);
        }
        c('CSS').addClass(m, n);
        this._prevClassName = n;
    };

    function j(k) {
        var l = k.getAlignment(),
            m = k.getPosition();
        if (m === 'below') {
            if (l === 'left') {
                return "_nk";
            } else if (l === 'right') {
                return "_nl";
            } else return "_nm";
        } else if (m === 'above') {
            if (l === 'left') {
                return "_nn";
            } else if (l === 'right') {
                return "_no";
            } else return "_np";
        } else if (m === 'left') {
            return "_nq";
        } else return "_nr";
    }
    Object.assign(i.prototype, {
        _subscription: null,
        _prevClassName: null
    });
    f.exports = i;
}), null);
__d('ContextualLayerUpdateOnScroll', ['Event'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscriptions = [this._layer.subscribe('show', this._attachScrollListener.bind(this)), this._layer.subscribe('hide', this._removeScrollListener.bind(this))];
    };
    h.prototype.disable = function () {
        'use strict';
        while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
    };
    h.prototype._attachScrollListener = function () {
        'use strict';
        if (this._listener) return;
        var i = this._layer.getContextScrollParent();
        this._listener = c('Event').listen(i, 'scroll', this._layer.updatePosition.bind(this._layer));
    };
    h.prototype._removeScrollListener = function () {
        'use strict';
        this._listener && this._listener.remove();
        this._listener = null;
    };
    Object.assign(h.prototype, {
        _subscriptions: []
    });
    f.exports = h;
}), null);
__d('LayerDestroyOnHide', [], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        var i = this._layer.destroy.bind(this._layer);
        this._subscription = this._layer.subscribe('hide', function () {
            setTimeout(i, 0);
        });
    };
    h.prototype.disable = function () {
        'use strict';
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    Object.assign(h.prototype, {
        _subscription: null
    });
    f.exports = h;
}), null);
__d('LayerFadeOnHide', ['CSSFade', 'Layer', 'UserAgent_DEPRECATED', 'emptyFunction', 'setTimeoutAcrossTransitions'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        if (c('UserAgent_DEPRECATED').ie() < 9) return;
        this._subscription = this._layer.subscribe('starthide', this._handleStartHide.bind(this));
    };
    h.prototype.disable = function () {
        'use strict';
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    h.prototype._getDuration = function () {
        'use strict';
        return 150;
    };
    h.prototype._handleStartHide = function () {
        'use strict';
        var i = true,
            j = c('Layer').subscribe('show', function () {
                j.unsubscribe();
                i = false;
            });
        c('setTimeoutAcrossTransitions')(function () {
            j.unsubscribe();
            j = null;
            var k = function () {
                this._layer.finishHide();
            }.bind(this);
            if (i) {
                this._animate(k);
            } else k();
        }.bind(this), 0);
        return false;
    };
    h.prototype._animate = function (i) {
        'use strict';
        var j = this._layer.getRoot();
        c('CSSFade').hide(j, {
            callback: function k() {
                i();
            },
            duration: this._getDuration()
        });
    };
    h.forDuration = function (i) {
        var j, k;
        'use strict';
        j = babelHelpers.inherits(l, h);
        k = j && j.prototype;

        function l() {
            j.apply(this, arguments);
        }
        l.prototype._getDuration = c('emptyFunction').thatReturns(i);
        return l;
    };
    Object.assign(h.prototype, {
        _subscription: null
    });
    f.exports = h;
}), null);
__d('LayerHideOnBlur', ['requestAnimationFrame'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscriptions = [this._layer.subscribe('show', this._attach.bind(this)), this._layer.subscribe('hide', this._detach.bind(this))];
        if (this._layer.isShown()) this._attach();
    };
    h.prototype.disable = function () {
        'use strict';
        this._detach();
        while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
        this._subscriptions = null;
    };
    h.prototype._detach = function () {
        'use strict';
        this._onBlur && this._onBlur.unsubscribe();
        this._onBlur = null;
    };
    h.prototype._attach = function () {
        'use strict';
        this._onBlur = this._layer.subscribe('blur', function () {
            return c('requestAnimationFrame')(function () {
                this._layer.hide();
                return false;
            }.bind(this));
        }.bind(this));
    };
    Object.assign(h.prototype, {
        _subscriptions: null,
        _onBlur: null
    });
    f.exports = h;
}), null);
__d('LayerMouseHooks', ['Arbiter', 'ContextualThing', 'Event', 'Layer'], (function a(b, c, d, e, f, g) {
    var h = new(c('Arbiter'))();

    function i(j) {
        'use strict';
        this._layer = j;
        this._subscriptions = [];
        this._currentlyActive = false;
    }
    i.prototype.enable = function () {
        'use strict';
        this._subscriptions = [h.subscribe('mouseenter', this._handleActive.bind(this)), h.subscribe('mouseleave', this._handleInactive.bind(this)), this._layer.subscribe('hide', function () {
            this._currentlyActive = false;
        }.bind(this))];
    };
    i.prototype.disable = function () {
        'use strict';
        while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
        this._subscriptions = [];
        this._currentlyActive = false;
    };
    i.prototype._handleActive = function (j, k) {
        'use strict';
        if (!this._currentlyActive && this._isNodeWithinStack(k)) {
            this._layer.inform('mouseenter', k);
            this._currentlyActive = true;
        }
    };
    i.prototype._handleInactive = function (j, k) {
        'use strict';
        if (this._currentlyActive)
            if (!k || !this._isNodeWithinStack(k)) {
                this._layer.inform('mouseleave', k);
                this._currentlyActive = false;
            }
    };
    i.prototype._isNodeWithinStack = function (j) {
        'use strict';
        return c('ContextualThing').containsIncludingLayers(this._layer.getContentRoot(), j);
    };
    c('Layer').subscribe('show', function (j, k) {
        var l = k.getContentRoot(),
            m = [c('Event').listen(l, 'mouseenter', function () {
                h.inform('mouseenter', l);
            }), c('Event').listen(l, 'mouseleave', function (o) {
                h.inform('mouseleave', o.getRelatedTarget());
            })],
            n = k.subscribe('hide', function () {
                while (m.length) m.pop().remove();
                n.unsubscribe();
                m = n = null;
            });
    });
    f.exports = i;
}), null);
__d('LayerRemoveOnHide', ['DOM'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
    }
    h.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe('hide', c('DOM').remove.bind(null, this._layer.getRoot()));
    };
    h.prototype.disable = function () {
        'use strict';
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
    };
    Object.assign(h.prototype, {
        _subscription: null
    });
    f.exports = h;
}), null);
__d('ContextualDialogArrow', ['cx', 'CSS', 'DOM', 'JSXDOM', 'Locale', 'Style', 'Vector'], (function a(b, c, d, e, f, g, h) {
    var i = {
            bottom: "_53ik",
            top: "_53il",
            right: "_53im",
            left: "_53in"
        },
        j = {
            above: 'bottom',
            below: 'top',
            left: 'right',
            right: 'left'
        };

    function k(l) {
        'use strict';
        this._layer = l;
    }
    k.prototype.enable = function () {
        'use strict';
        this._subscription = this._layer.subscribe(['adjust', 'reposition'], this._handle.bind(this));
        c('CSS').addClass(this._layer.getContentRoot(), "_5v-0");
    };
    k.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
        c('CSS').removeClass(this._layer.getContentRoot(), "_5v-0");
    };
    k.prototype._handle = function (l, m) {
        'use strict';
        if (l === 'adjust') {
            this._repositionArrow(m);
        } else this._repositionRoot(m);
    };
    k.prototype._repositionRoot = function (l) {
        'use strict';
        var m = l.getAlignment();
        if (m == 'center') return;
        var n = this._layer.getRoot(),
            o = this._layer.getContext(),
            p = l.isVertical(),
            q = this._layer.getArrowDimensions(),
            r = q.offset,
            s = q.length,
            t = c('Vector').getElementDimensions(o),
            u = p ? t.x : t.y;
        if (u >= s + r * 2) return;
        var v = s / 2 + r,
            w = u / 2,
            x = parseInt(v - w, 10);
        if (p) {
            var y = null;
            if (m == 'left') {
                y = c('Locale').isRTL() ? 'right' : 'left';
            } else y = c('Locale').isRTL() ? 'left' : 'right';
            var z = parseInt(c('Style').get(n, y), 10);
            c('Style').set(n, y, z - x + 'px');
        } else {
            var aa = parseInt(c('Style').get(n, 'top'), 10);
            c('Style').set(n, 'top', aa - x + 'px');
        }
    };
    k.prototype._repositionArrow = function (l) {
        'use strict';
        var m = this._layer.getContentRoot(),
            n = l.getPosition(),
            o = j[n];
        for (var p in i) c('CSS').conditionClass(m, i[p], o === p);
        if (n == 'none') return;
        if (!this._arrow) this._arrow = c('JSXDOM').i({
            className: "_53io"
        });
        if (!c('DOM').contains(m, this._arrow)) c('DOM').appendContent(m, this._arrow);
        c('Style').set(this._arrow, 'top', '');
        c('Style').set(this._arrow, 'left', '');
        c('Style').set(this._arrow, 'right', '');
        c('Style').set(this._arrow, 'margin', '');
        var q = k.getOffsetPercent(l),
            r = k.getOffset(l, q, this._layer),
            s = k.getOffsetSide(l);
        c('Style').set(this._arrow, s, q + '%');
        c('Style').set(this._arrow, 'margin-' + s, r + 'px');
    };
    k.getOffsetPercent = function (l) {
        'use strict';
        var m = l.getAlignment(),
            n = l.getPosition();
        if (n == 'above' || n == 'below')
            if (m == 'center') {
                return 50;
            } else if (m == 'right') return 100;
        return 0;
    };
    k.getOffsetSide = function (l) {
        'use strict';
        var m = l.isVertical();
        return m ? c('Locale').isRTL() ? 'right' : 'left' : 'top';
    };
    k.getOffset = function (l, m, n) {
        'use strict';
        var o = n.getArrowDimensions(),
            p = o.offset,
            q = o.length,
            r = l.getAlignment(),
            s = r == 'center' ? 0 : p;
        s += q * m / 100;
        if (r != 'left') s *= -1;
        return s;
    };
    Object.assign(k.prototype, {
        _subscription: null,
        _arrow: null
    });
    f.exports = k;
}), null);
__d('ContextualDialogDefaultTheme', ['cx'], (function a(b, c, d, e, f, g, h) {
    var i = {
        wrapperClassName: "_53ip",
        arrowDimensions: {
            offset: 15,
            length: 16
        }
    };
    f.exports = i;
}), null);
__d('ContextualDialogFitInViewport_PUSHSAFE', ['Style', 'Vector'], (function a(b, c, d, e, f, g) {
    var h = 50,
        i = 10;

    function j(k) {
        'use strict';
        this._layer = k;
        this._contentHeight = null;
        this._contextY = null;
    }
    j.prototype.enable = function () {
        'use strict';
        var k = this._layer.getArrowDimensions();
        this._arrowOffset = k.offset;
        var l = k.length;
        this._arrowBuffer = this._arrowOffset + l;
        this._subscription = this._layer.subscribe(['reposition'], function (m, n) {
            if (!this._layer.isFixed() || n.isVertical()) return;
            this._adjustPosition();
        }.bind(this));
    };
    j.prototype.disable = function () {
        'use strict';
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    j.prototype._getContentHeight = function () {
        'use strict';
        return c('Vector').getElementDimensions(this._layer._contentWrapper).y;
    };
    j.prototype._getContextY = function () {
        'use strict';
        return c('Vector').getElementPosition(this._layer.getContext(), 'viewport').y;
    };
    j.prototype._adjustPosition = function () {
        'use strict';
        var k = this._getContextY(),
            l = this._getContentHeight();
        if (k === this._contextY && l === this._contentHeight) return;
        this._contextY = k;
        this._contentHeight = l;
        var m = c('Vector').getViewportDimensions().y,
            n = Math.min(Math.max(0, k + l + i - m), Math.max(0, k - h), l - this._arrowOffset - this._arrowBuffer);
        c('Style').set(this._layer.getContent(), 'top', -n + 'px');
    };
    f.exports = j;
}), null);
__d('ContextualDialogKeepInViewport', ['ContextualLayerDimensions', 'Event', 'Style', 'Vector', 'throttle'], (function a(b, c, d, e, f, g) {
    function h(i) {
        'use strict';
        this._layer = i;
        this._listeners = [];
        this._subscription = null;
        this._minimumTop = null;
    }
    h.prototype.enable = function () {
        'use strict';
        var i = this._layer.getArrowDimensions();
        this._arrowOffset = i.offset;
        var j = i.length;
        this._arrowBuffer = this._arrowOffset + j;
        this._subscription = this._layer.subscribe(['show', 'hide', 'reposition'], function (k, l) {
            if (this._layer.isFixed()) return;
            if (k == 'reposition') {
                this._calculateMinimumTop(l);
                this._adjustForScroll();
            } else if (k == 'show') {
                this._attachScroll();
                this._adjustForScroll();
            } else this._detachScroll();
        }.bind(this));
        if (this._layer.isShown()) this._attachScroll();
    };
    h.prototype.disable = function () {
        'use strict';
        if (this._layer.isShown()) this._detachScroll();
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    h.prototype._attachScroll = function () {
        'use strict';
        var i = c('throttle')(this._adjustForScroll.bind(this)),
            j = this._layer.getContextScrollParent() || window;
        this._listeners = [c('Event').listen(j, 'scroll', i), c('Event').listen(window, 'resize', i)];
    };
    h.prototype._detachScroll = function () {
        'use strict';
        while (this._listeners.length) this._listeners.pop().remove();
        this._listeners = [];
    };
    h.prototype._getContentHeight = function () {
        'use strict';
        if (!this._layer._contentWrapper) return 0;
        return c('Vector').getElementDimensions(this._layer._contentWrapper).y;
    };
    h.prototype._getContextY = function () {
        'use strict';
        return c('Vector').getElementPosition(this._layer.getContext()).y;
    };
    h.prototype._calculateMinimumTop = function (i) {
        'use strict';
        if (i.isVertical()) return;
        this._minimumTop = this._getContextY() - (this._getContentHeight() - this._arrowBuffer) + i.getOffsetY();
    };
    h.prototype._adjustForScroll = function () {
        'use strict';
        var i = this._layer.getOrientation(),
            j = this._layer.getContent();
        if (i.isVertical() || !j) return;
        var k = c('ContextualLayerDimensions').getViewportRect(this._layer),
            l = k.b - this._minimumTop;
        if (l < 0) return;
        var m = this._getContentHeight(),
            n = m - (this._arrowBuffer + this._arrowOffset),
            o = Math.max(0, Math.min(n, n - (l - m)));
        c('Style').set(j, 'top', -o + 'px');
    };
    f.exports = h;
}), null);
__d('ContextualDialog', ['csx', 'cx', 'invariant', 'ContextualDialogARIA', 'AccessibleLayer', 'ContextualDialogArrow', 'ContextualDialogDefaultTheme', 'ContextualDialogKeepInViewport', 'ContextualDialogFitInViewport_PUSHSAFE', 'ContextualLayer', 'CSS', 'DOM', 'Event', 'JSXDOM', 'LayerButtons', 'LayerFormHooks', 'LayerRefocusOnHide', 'LayerHideOnTransition', 'LayerMouseHooks', 'Style', 'removeFromArray', 'shield'], (function a(b, c, d, e, f, g, h, i, j) {
    var k, l, m = 0,
        n = 300;
    k = babelHelpers.inherits(o, c('ContextualLayer'));
    l = k && k.prototype;

    function o(p, q) {
        'use strict';
        l.constructor.call(this, p, q);
        this._footer = null;
    }
    o.prototype._configure = function (p, q) {
        'use strict';
        Object.assign(p, p.theme || c('ContextualDialogDefaultTheme'));
        var r = p.arrowBehavior || c('ContextualDialogArrow');
        p.addedBehaviors = p.addedBehaviors || [];
        p.addedBehaviors.push(r);
        l._configure.call(this, p, q);
        this._footer = c('DOM').scry(q, "div._572u")[0];
        if (this._footer)
            if (this._footer.children.length === 1 && this._footer.children[0].nodeName === 'DIV' && this._footer.children[0].children.length === 0) {
                this._footer.parentNode.removeChild(this._footer);
            } else c('CSS').addClass(this.getContentRoot(), "_kc");
        if (p.hoverContext) this._registerHoverHandlers(p.hoverContext, p.hoverShowDelay, p.hoverHideDelay);
    };
    o.prototype._registerHoverHandlers = function (p, q, r) {
        'use strict';
        if (q == null) q = m;
        if (r == null) r = n;
        var s, t, u = function (event) {
                clearTimeout(t);
                s = setTimeout(c('shield')(this.show, this), q);
            }.bind(this),
            v = function (event) {
                if (this._isHoverLocked()) return;
                clearTimeout(s);
                t = setTimeout(this.hide.bind(this), r);
            }.bind(this),
            w = c('Event').listen(p, 'mouseenter', u),
            x = c('Event').listen(p, 'mouseleave', v),
            y = this.subscribe('mouseenter', u),
            z = this.subscribe('mouseleave', v);
        this.subscribe('destroy', function () {
            clearTimeout(t);
            w.remove();
            x.remove();
            y.unsubscribe();
            z.unsubscribe();
        });
    };
    o.prototype._getDefaultBehaviors = function () {
        'use strict';
        var p = l._getDefaultBehaviors.call(this);
        c('removeFromArray')(p, c('LayerHideOnTransition'));
        return p.concat([c('AccessibleLayer'), c('LayerRefocusOnHide'), c('ContextualDialogKeepInViewport'), c('ContextualDialogFitInViewport_PUSHSAFE'), c('LayerButtons'), c('LayerFormHooks'), c('LayerMouseHooks'), c('ContextualDialogARIA')]);
    };
    o.prototype._buildWrapper = function (p, q) {
        'use strict';
        this._innerWrapper = c('JSXDOM').div(null, q);
        var r = l._buildWrapper.call(this, p, this._innerWrapper);
        if (p.wrapperClassName) {
            var s = p.wrapperClassName.split(/\s+/);
            for (var t = s, u = Array.isArray(t), v = 0, t = u ? t : t[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
                var w;
                if (u) {
                    if (v >= t.length) break;
                    w = t[v++];
                } else {
                    v = t.next();
                    if (v.done) break;
                    w = v.value;
                }
                var x = w;
                c('CSS').addClass(r, x);
            }
        }
        this.replaceEntireLayerContents(q);
        this.getContent() === q || j(0);
        this.setWidth(p.width);
        return r;
    };
    o.prototype.getContentRoot = function () {
        'use strict';
        !!this._innerWrapper || j(0);
        return this._innerWrapper;
    };
    o.prototype.setContent = function (p) {
        'use strict';
        j(0);
    };
    o.prototype.replaceEntireLayerContents = function (p) {
        'use strict';
        this._content = null;
        c('DOM').empty(this.getContentRoot());
        this.setInnerContent(p);
    };
    o.prototype.setInnerContent = function (p) {
        'use strict';
        c('CSS').addClass(p, "_53ij");
        if (this.getContent()) {
            c('DOM').replace(this.getContent(), p);
        } else c('DOM').appendContent(this.getContentRoot(), p);
        this._content = p;
        this.isShown() && this.updatePosition();
    };
    o.prototype.setWidth = function (p) {
        'use strict';
        c('Style').set(this.getContentRoot(), 'width', p ? Math.floor(p) + 'px' : '');
        return this;
    };
    o.prototype.getFooter = function () {
        'use strict';
        return this._footer;
    };
    o.prototype.lockHover = function () {
        'use strict';
        this._hoverLocked = true;
        return this;
    };
    o.prototype.unlockHover = function () {
        'use strict';
        this._hoverLocked = false;
        return this;
    };
    o.prototype._isHoverLocked = function () {
        'use strict';
        return !!this._hoverLocked;
    };
    o.setContext = function (p, q) {
        'use strict';
        p.setContext(q);
    };
    f.exports = o;
}), null);
__d('ContextualDialogXUITheme', ['cx'], (function a(b, c, d, e, f, g, h) {
    var i = {
        wrapperClassName: "_53ii",
        arrowDimensions: {
            offset: 12,
            length: 16
        }
    };
    f.exports = i;
}), null);
__d('XUIAmbientNUXTheme', ['cx'], (function a(b, c, d, e, f, g, h) {
    var i = {
        wrapperClassName: "_2x6q",
        arrowDimensions: {
            offset: 14,
            length: 18
        }
    };
    f.exports = i;
}), null);
__d('BanzaiNectar', ['Banzai'], (function a(b, c, d, e, f, g) {
    function h(j) {
        return {
            log: function k(l, m, n) {
                var o = {
                    e: m,
                    a: n
                };
                c('Banzai').post('nectar:' + l, o, j);
            }
        };
    }
    var i = h();
    i.create = h;
    f.exports = i;
}), null);
__d("clamp", [], (function a(b, c, d, e, f, g) {
    function h(i, j, k) {
        if (i < j) return j;
        if (i > k) return k;
        return i;
    }
    f.exports = h;
}), null);
__d('getScrollPosition', ['getDocumentScrollElement', 'getUnboundedScrollPosition'], (function a(b, c, d, e, f, g) {
    'use strict';

    function h(i) {
        var j = c('getDocumentScrollElement')(i.ownerDocument || i.document);
        if (i.Window && i instanceof i.Window) i = j;
        var k = c('getUnboundedScrollPosition')(i),
            l = i === j ? i.ownerDocument.documentElement : i,
            m = i.scrollWidth - l.clientWidth,
            n = i.scrollHeight - l.clientHeight;
        k.x = Math.max(0, Math.min(k.x, m));
        k.y = Math.max(0, Math.min(k.y, n));
        return k;
    }
    f.exports = h;
}), null);
__d('DateConsts', [], (function a(b, c, d, e, f, g) {
    var h = 1000,
        i = 60,
        j = 60,
        k = 24,
        l = 7,
        m = 12,
        n = 1000,
        o = 30.43,
        p = 365.242,
        q = i * j,
        r = q * k,
        s = r * l,
        t = r * p,
        u = h * i,
        v = u * j,
        w = h * r,
        x = w * l,
        y = w * p,
        z = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
    Object.freeze(z);
    var aa = {
        getDaysInMonth: function ba(ca, da) {
            return new Date(ca, da, 0).getDate();
        },
        getCurrentTimeInSeconds: function ba() {
            return Date.now() / h;
        },
        DAYS: z,
        MS_PER_SEC: h,
        MS_PER_MIN: u,
        MS_PER_HOUR: v,
        MS_PER_DAY: w,
        MS_PER_WEEK: x,
        MS_PER_YEAR: y,
        SEC_PER_MIN: i,
        SEC_PER_HOUR: q,
        SEC_PER_DAY: r,
        SEC_PER_WEEK: s,
        SEC_PER_YEAR: t,
        US_PER_MS: n,
        MIN_PER_HOUR: j,
        HOUR_PER_DAY: k,
        DAYS_PER_WEEK: l,
        MONTHS_PER_YEAR: m,
        AVG_DAYS_PER_MONTH: o,
        AVG_DAYS_PER_YEAR: p,
        'private': {
            instantRange: {
                since: -8.64e+12,
                until: 8.64e+12 + 1
            }
        }
    };
    f.exports = aa;
}), null);
__d('xuiglyph', [], (function a(b, c, d, e, f, g) {
    f.exports = function h(i) {
        throw new Error('xuiglyph: Unexpected xuiglyph call.');
    };
}), null);
__d('Log', ['sprintf'], (function a(b, c, d, e, f, g) {
    var h = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };

    function i(k, l) {
        var m = Array.prototype.slice.call(arguments, 2),
            n = c('sprintf').apply(null, m),
            o = window.console;
        if (o && j.level >= l) o[k in o ? k : 'log'](n);
    }
    var j = {
        level: -1,
        Level: h,
        debug: i.bind(null, 'debug', h.DEBUG),
        info: i.bind(null, 'info', h.INFO),
        warn: i.bind(null, 'warn', h.WARNING),
        error: i.bind(null, 'error', h.ERROR)
    };
    f.exports = j;
}), null);
__d('MercuryIDs', [], (function a(b, c, d, e, f, g) {
    'use strict';
    var h = {
        isValid: function i(j) {
            if (!j || typeof j !== 'string') return false;
            return /^\w{3,12}:.+/.test(j);
        },
        isValidThreadID: function i(j) {
            if (!h.isValid(j)) return false;
            var k = h.tokenize(j);
            switch (k.type) {
                case 'user':
                case 'group':
                case 'support':
                case 'thread':
                case 'root':
                case 'pending':
                    return true;
                default:
                    return false;
            }
        },
        tokenize: function i(j) {
            if (!j || !h.isValid(j)) throw new Error('bad_id_format ' + String(j));
            var k = j.indexOf(':');
            return {
                type: j.substr(0, k),
                value: j.substr(k + 1)
            };
        },
        getUserIDFromParticipantID: function i(j) {
            if (!h.isValid(j)) throw new Error('bad_id_format ' + j);
            var k = h.tokenize(j),
                l = k.type,
                m = k.value;
            return l === 'fbid' ? m : null;
        },
        getParticipantIDFromUserID: function i(j) {
            if (isNaN(j)) throw new Error('Not a user ID: ' + j);
            return 'fbid:' + j;
        },
        getUserIDFromThreadID: function i(j) {
            if (!this.isCanonical(j)) return null;
            return this.tokenize(j).value;
        },
        getThreadIDFromUserID: function i(j) {
            return 'user:' + j;
        },
        getThreadIDFromThreadFBID: function i(j) {
            return 'thread:' + j;
        },
        getThreadIDFromSupportInboxItemID: function i(j) {
            return 'support:' + j;
        },
        getThreadFBIDFromThreadID: function i(j) {
            return this.tokenize(j).value;
        },
        getThreadIDFromParticipantID: function i(j) {
            var k = this.getUserIDFromParticipantID(j);
            return k ? this.getThreadIDFromUserID(k) : null;
        },
        getParticipantIDFromFromThreadID: function i(j) {
            var k = this.getUserIDFromThreadID(j);
            return k ? this.getParticipantIDFromUserID(k) : null;
        },
        getSupportInboxItemIDFromThreadID: function i(j) {
            return this.tokenize(j).value;
        },
        isCanonical: function i(j) {
            return this.isValid(j) && this.tokenize(j).type === 'user';
        },
        isGroupChat: function i(j) {
            return this.isValid(j) && this.tokenize(j).type !== 'user';
        },
        isLocalThread: function i(j) {
            return this.isValid(j) && this.tokenize(j).type === 'root';
        }
    };
    f.exports = h;
}), null);
__d("fbjs/lib/CSSCore", ["CSSCore"], (function a(b, c, d, e, f, g) {
    'use strict';
    f.exports = c("CSSCore");
}), null);
__d("XBasicFBNuxDismissController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/ajax\/megaphone\/dismiss_fbnux\/", {
        nux_id: {
            type: "Int",
            required: true
        }
    });
}), null);
__d("XPubcontentImpressionLoggingController", ["XController"], (function a(b, c, d, e, f, g) {
    f.exports = c("XController").create("\/pubcontent\/suggestions\/impression_logging\/", {});
}), null);