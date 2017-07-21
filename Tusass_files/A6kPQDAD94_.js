if (self.CavalryLogger) {
    CavalryLogger.start_js(["aoQM1"]);
}

__d('CavalryLoggerImpl', ['Arbiter', 'Banzai', 'Bootloader', 'ImageTimingHelper', 'ISB', 'KillabyteProfilerConfig', 'NavigationTimingHelper', 'PageEvents', 'PageletEventConstsJS', 'PageletEventsHelper', 'PerfXLogger', 'ResourceTimingBootloaderHelper', 'ScriptPath', 'TimeSliceHelper', 'performance', 'performanceAbsoluteNow', '__getTotalFactories', '__getCompileTime', '__getFactoryTime'], (function a(b, c, d, e, f, g) {
    var h = c('KillabyteProfilerConfig').htmlProfilerModule,
        i = c('KillabyteProfilerConfig').profilerModule,
        j = 'cavalry',
        k = ['t_start', 't_paint', 't_cstart'],
        l = window.CavalryLogger;
    Object.assign(l.prototype, {
        initializeInstrumentation: function m() {
            if (this.instrumentation_started) return;
            var n = this;
            c('Arbiter').subscribe('BigPipe/init', function (event, o) {
                if (o.lid == n.lid && o.arbiter) {
                    n.recordTTIEvent(o.arbiter);
                    n.recordDisplayedEvent(o.arbiter);
                    n.recordLoadedEvent(o.arbiter);
                    n.recordPageletEventsTime(o.arbiter);
                }
            });
            c('Arbiter').subscribe(c('PageEvents').BIGPIPE_ONLOAD, function (event, o) {
                if (b.bigPipe && n.lid === b.bigPipe.lid) n.addPiggyback('cjs_factory_count_e2e', c('__getTotalFactories')()).addPiggyback('cjs_compile_time_e2e', c('__getCompileTime')()).addPiggyback('cjs_factory_time_e2e', c('__getFactoryTime')());
            });
            n.addPiggyback('script_path', c('ScriptPath').getScriptPath());
            if (this.is_detailed_profiler) c('PageletEventsHelper').init();
            this.instrumentation_started = true;
        },
        recordTTIEvent: function m(n) {
            var o = this;
            n.subscribe('tti_bigpipe', function (event, p) {
                if (p.lid == o.lid) {
                    if (p.metrics)
                        for (var q in p.metrics) o.addPiggyback(q, p.metrics[q]);
                    if (p.usageSnapshot) o.ttiUsageSnapshot = p.usageSnapshot;
                    o.setTTIPhase(p.phase).measurePageLoad(true, p.ts);
                    o.setAbsTimeStamp('t_bigpipe_tti', p.ts, true);
                }
            });
        },
        recordDisplayedEvent: function m(n) {
            var o = this;
            n.subscribe('all_pagelets_displayed', function (event, p) {
                if (p.lid === o.lid) {
                    if (p.usageSnapshot) o.ddUsageSnapshot = p.usageSnapshot;
                    o.setAbsTimeStamp('t_marker_all_pagelets_displayed', p.ts, true);
                }
            });
        },
        recordLoadedEvent: function m(n) {
            var o = this;
            n.subscribe('all_pagelets_loaded', function (event, p) {
                if (p.lid === o.lid) o.setAbsTimeStamp('t_marker_bigpipe_e2e', p.ts, true);
            });
        },
        recordPageletEventsTime: function m(n) {
            if (this.is_detailed_profiler) {
                var o = this;
                n.subscribe('pagelet_event', function (event, p) {
                    if (p.lid == o.lid) {
                        var q = p.id;
                        o.events[q] = o.events[q] || {};
                        o.events[q][p.event] = p.ts - window._cstart;
                        if (p.event === c('PageletEventConstsJS').ARRIVE_END) o.events[q].phase = p.phase;
                    }
                });
            }
        },
        setTTIPhase: function m(n) {
            this.addPiggyback('tti_phase', n);
            return this;
        },
        setTimeStamp: function m(n, o, p, q) {
            this.mark(n);
            var r = this.values.t_cstart || this.values.t_start,
                s = q ? r + q : c('performanceAbsoluteNow')();
            this.setValue(n, s, o, p);
            if (this.tti_event && n == this.tti_event) this.measurePageLoad(o);
            return this;
        },
        setAbsTimeStamp: function m(n, o, p, q) {
            this.setValue(n, o, p, q);
            if (this.tti_event && n == this.tti_event) this.measurePageLoad(p, o);
            return this;
        },
        logE2E: function m() {
            var n = {
                lid: this.lid,
                t_creport: c('performanceAbsoluteNow')(),
                cavalry_e2e: true
            };
            if (c('ISB').token) n.fb_isb = c('ISB').token;
            for (var o = 0; o < k.length; o++) n[k[o]] = this.values[k[o]];
            c('Banzai').post(j, n, {
                signal: true,
                retry: false
            });
            this.e2eLogged = true;
        },
        log: function m() {
            if (!this.e2eLogged) this.logE2E();
            var n = {
                lid: this.lid
            };
            if (c('ISB').token) n.fb_isb = c('ISB').token;
            this.addPiggyback('pagelet_events', c('PageletEventsHelper').getMetrics(this.lid));
            this.setValue('client_pixel_ratio_10x', parseInt((window.devicePixelRatio || 1) * 10, 10));
            this.moveBootloaderData();
            var o = babelHelpers['extends']({
                    t_creport: c('performanceAbsoluteNow')()
                }, n, this.values, this.piggy_values),
                p = window.__bodyWrapper;
            if (p.getCodeUsage && i) {
                if (!this.start || !this.e2e || !this.dd) throw new Error('Timestamps are missing in Cavalry. Please report ' + 'this to the Web Speed team');
                var q = i.findUsedCSSSelectors(document, i.getDocumentStylesheets(document)),
                    r = {
                        js_calls: JSON.stringify(p.getCodeUsage()),
                        css_selectors: JSON.stringify(q),
                        bootloads: JSON.stringify(this.getBootloadsUntil(this.e2e))
                    };
                if (h) r.html = JSON.stringify(h.getKillabyteHTMLData());
                var s = babelHelpers['extends']({}, i.getDataForSnapshot(this.ddUsageSnapshot), {
                        bootloads: JSON.stringify(this.getBootloadsUntil(this.dd))
                    }),
                    t = {
                        e2e: r,
                        dd: s
                    };
                if (this.ttiUsageSnapshot) {
                    if (!this.tti) throw new Error('tti timestamp should always be present if we have usage data');
                    t.tti = babelHelpers['extends']({}, i.getDataForSnapshot(this.ttiUsageSnapshot), {
                        bootloads: JSON.stringify(this.getBootloadsUntil(this.tti))
                    });
                }
                c('Arbiter').inform('cavalry_usage_data_collected', {
                    usageData: t,
                    lid: this.lid
                }, c('Arbiter').BEHAVIOR_STATE);
                p.clearCodeUsage();
            }
            var u = c('PerfXLogger').getPayload(o.lid);
            if (u) this.logPerfXPiggybacks(o, u);
            c('Banzai').post(j, o, c('Banzai').VITAL);
            var v = this.values;
            this.values = {};
            this.piggy_values = {};
            for (var w = 0; w < k.length; w++) this.values[k[w]] = v[k[w]];
            c('Arbiter').inform('cavalry_log_sent', o, c('Arbiter').BEHAVIOR_STATE);
        },
        logPerfXPiggybacks: function m(n, o) {
            n.perfx_page = o.perfx_page;
            n.perfx_page_type = o.perfx_page_type;
            n.perfx_tti = o.tti;
            n.perfx_e2e = o.e2e;
        },
        logPiggybacks: function m() {
            this.moveBootloaderData();
            var n = babelHelpers['extends']({
                lid: this.lid
            }, this.piggy_values);
            this.piggy_values = {};
            c('Banzai').post(j, n, c('Banzai').VITAL);
        },
        moveBootloaderData: function m() {
            if (this.log_resources) this.addPiggyback('resource_timing_bootloader', c('ResourceTimingBootloaderHelper').mergeBootloaderMetricsAndResourceTimings(this.piggy_values.resource_timing_bootloader, this.bootloader_metrics, false, {}));
        },
        collectMetrics: function m(n) {
            if (!this.metric_collected || n) {
                this.metric_collected = true;
                this.addPiggyback('tag', document.getElementsByTagName('*').length);
            }
        },
        getBootloadsUntil: function m(n) {
            return Object.entries(c('Bootloader').getBootloadedComponents()).filter(function (o) {
                var p = o[0],
                    q = o[1];
                return q >= this.start && q <= n;
            }.bind(this)).map(function (o) {
                var p = o[0],
                    q = o[1];
                return p;
            });
        },
        measurePageLoad: function m(n, o) {
            if (o) {
                this.setAbsTimeStamp('t_tti', o, n);
            } else this.setTimeStamp('t_tti', n);
            this.collectMetrics(n);
        },
        collectBrowserTiming: function m(n) {
            if (c('performance').timing) {
                this.start = c('performance').timing.navigationStart;
                this.tti = this.values.t_bigpipe_tti;
                this.dd = this.values.t_marker_all_pagelets_displayed;
                this.e2e = this.values.t_onload;
                var o = c('NavigationTimingHelper').getNavTimings();
                this.addPiggyback('navigation_timing', o);
                this.addPiggyback('time_slice', c('TimeSliceHelper').getMetrics(this.start, this.e2e, 1, 1));
                if (this.log_resources) {
                    this.addPiggyback('resource_timing_bootloader', c('ResourceTimingBootloaderHelper').getMetrics(0, false));
                    this.collectTTIAndE2EWithImages();
                }
            }
        },
        collectTimingForAsync: function m(n, o) {
            if (!o) return;
            if (c('performance').timing && c('performance').getEntriesByName) {
                var p = c('performance').getEntriesByName(o);
                if (p.length === 0) return;
                this.start = c('performance').timing.navigationStart + p[0].startTime;
                this.tti = this.values.t_bigpipe_tti;
                this.e2e = this.values.t_onload;
                var q = c('NavigationTimingHelper').getAsyncRequestTimings(o);
                this.addPiggyback('navigation_timing', q);
                this.addPiggyback('time_slice', c('TimeSliceHelper').getMetrics(this.start, this.e2e, 1, 1));
                if (this.log_resources) {
                    this.addPiggyback('resource_timing_bootloader', c('ResourceTimingBootloaderHelper').getMetrics(p[0].startTime, false));
                    this.collectTTIAndE2EWithImages();
                }
            }
        },
        collectTTIAndE2EWithImages: function m() {
            var n = c('performance').timing.navigationStart,
                o = this.values.t_bigpipe_tti,
                p = this.values.t_marker_bigpipe_e2e,
                q = c('ImageTimingHelper').getImageTimings(this.lid),
                r = c('ResourceTimingBootloaderHelper').getLastTTIAndE2EImageResponseEnds(o, p, q);
            if (!isNaN(r.TTI) && r.TTI !== n) this.setAbsTimeStamp('t_tti_with_images', r.TTI);
            if (!isNaN(r.E2E) && r.E2E !== n) this.setAbsTimeStamp('t_marker_bigpipe_e2e_with_images', r.E2E);
        },
        collectTiming: function m(n, o, p) {
            var q = ['connectEnd', 'connectStart', 'domComplete', 'domContentLoadedEventEnd', 'domContentLoadedEventStart', 'domInteractive', 'domLoading', 'domainLookupEnd', 'domainLookupStart', 'fetchStart', 'loadEventEnd', 'loadEventStart', 'navigationStart', 'redirectEnd', 'redirectStart', 'requestStart', 'responseEnd', 'responseStart', 'secureConnectionStart', 'startTime', 'unloadEventEnd', 'unloadEventStart'];
            for (var r = 0; r < q.length; r++) {
                var s = q[r];
                if (o[s]) this.setAbsTimeStamp(n + s, o[s] + p, true);
            }
        }
    });
    Object.assign(l, {
        startInstrumentation: function m() {
            for (var n in l.instances) {
                var o = l.instances[n];
                o.initializeInstrumentation();
                if ('t_tti' in o.values) o.measurePageLoad(false, o.values.t_tti);
            }
        },
        hookLogOnLoad: function m(n) {
            c('Arbiter').registerCallback(function () {
                l.setPageID(n);
                l.instances[n].log();
            }, [c('PageEvents').NATIVE_ONLOAD]);
        }
    });
    f.exports = l;
}), null);