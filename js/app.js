(() => {
    var __webpack_modules__ = {
        711: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                return function(e) {
                    function t(o) {
                        if (n[o]) return n[o].exports;
                        var i = n[o] = {
                            exports: {},
                            id: o,
                            loaded: !1
                        };
                        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "dist/", t(0);
                }([ function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    var i = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = !1, x = {
                        offset: 120,
                        delay: 0,
                        easing: "ease",
                        duration: 400,
                        disable: !1,
                        once: !1,
                        startEvent: "DOMContentLoaded",
                        throttleDelay: 99,
                        debounceDelay: 50,
                        disableMutationObserver: !1
                    }, j = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), 
                        w;
                    }, O = function() {
                        w = (0, h.default)(), j();
                    }, M = function() {
                        w.forEach((function(e, t) {
                            e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), 
                            e.node.removeAttribute("data-aos-delay");
                        }));
                    }, S = function(e) {
                        return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
                    }, _ = function(e) {
                        x = i(x, e), w = (0, h.default)();
                        var t = document.all && !window.atob;
                        return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), 
                        x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), 
                        document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), 
                        "DOMContentLoaded" === x.startEvent && [ "complete", "interactive" ].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })) : document.addEventListener(x.startEvent, (function() {
                            j(!0);
                        })), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), 
                        window.addEventListener("scroll", (0, u.default)((function() {
                            (0, b.default)(w, x.once);
                        }), x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), 
                        w);
                    };
                    e.exports = {
                        init: _,
                        refresh: j,
                        refreshHard: O
                    };
                }, function(e, t) {}, , , , , function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function o(t) {
                                var n = b, o = v;
                                return b = v = void 0, k = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return k = e, h = setTimeout(f, t), M ? o(e) : g;
                            }
                            function a(e) {
                                var n = e - w, o = e - k, i = t - n;
                                return S ? j(i, y - o) : i;
                            }
                            function c(e) {
                                var n = e - w, o = e - k;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = O();
                                return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(O());
                            }
                            function m() {
                                var e = O(), n = c(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), o(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, k = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e, t, o) {
                            var r = !0, a = !0;
                            if ("function" != typeof e) throw new TypeError(s);
                            return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), 
                            n(e, t, {
                                leading: r,
                                maxWait: t,
                                trailing: a
                            });
                        }
                        function i(e) {
                            var t = "undefined" == typeof e ? "undefined" : c(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function r(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                        }
                        function a(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
                        }
                        function u(e) {
                            if ("number" == typeof e) return e;
                            if (a(e)) return f;
                            if (i(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = i(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(l, "");
                            var n = m.test(e);
                            return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
                        }
                        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                            return h.Date.now();
                        };
                        e.exports = o;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    (function(t) {
                        "use strict";
                        function n(e, t, n) {
                            function i(t) {
                                var n = b, o = v;
                                return b = v = void 0, O = t, g = e.apply(o, n);
                            }
                            function r(e) {
                                return O = e, h = setTimeout(f, t), M ? i(e) : g;
                            }
                            function u(e) {
                                var n = e - w, o = e - O, i = t - n;
                                return S ? x(i, y - o) : i;
                            }
                            function s(e) {
                                var n = e - w, o = e - O;
                                return void 0 === w || n >= t || n < 0 || S && o >= y;
                            }
                            function f() {
                                var e = j();
                                return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
                            }
                            function d(e) {
                                return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
                            }
                            function l() {
                                void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                            }
                            function p() {
                                return void 0 === h ? g : d(j());
                            }
                            function m() {
                                var e = j(), n = s(e);
                                if (b = arguments, v = this, w = e, n) {
                                    if (void 0 === h) return r(w);
                                    if (S) return h = setTimeout(f, t), i(w);
                                }
                                return void 0 === h && (h = setTimeout(f, t)), g;
                            }
                            var b, v, y, g, h, w, O = 0, M = !1, S = !1, _ = !0;
                            if ("function" != typeof e) throw new TypeError(c);
                            return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, 
                            _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
                        }
                        function o(e) {
                            var t = "undefined" == typeof e ? "undefined" : u(e);
                            return !!e && ("object" == t || "function" == t);
                        }
                        function i(e) {
                            return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                        }
                        function r(e) {
                            return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
                        }
                        function a(e) {
                            if ("number" == typeof e) return e;
                            if (r(e)) return s;
                            if (o(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = o(t) ? t + "" : t;
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = e.replace(d, "");
                            var n = p.test(e);
                            return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
                        }
                        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                            return g.Date.now();
                        };
                        e.exports = n;
                    }).call(t, function() {
                        return this;
                    }());
                }, function(e, t) {
                    "use strict";
                    function n(e) {
                        var t = void 0, o = void 0;
                        for (t = 0; t < e.length; t += 1) {
                            if (o = e[t], o.dataset && o.dataset.aos) return !0;
                            if (o.children && n(o.children)) return !0;
                        }
                        return !1;
                    }
                    function o() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    }
                    function i() {
                        return !!o();
                    }
                    function r(e, t) {
                        var n = window.document, i = o(), r = new i(a);
                        u = t, r.observe(n.documentElement, {
                            childList: !0,
                            subtree: !0,
                            removedNodes: !0
                        });
                    }
                    function a(e) {
                        e && e.forEach((function(e) {
                            var t = Array.prototype.slice.call(e.addedNodes), o = Array.prototype.slice.call(e.removedNodes), i = t.concat(o);
                            if (n(i)) return u();
                        }));
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var u = function() {};
                    t.default = {
                        isSupported: i,
                        ready: r
                    };
                }, function(e, t) {
                    "use strict";
                    function n(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function o() {
                        return navigator.userAgent || navigator.vendor || window.opera || "";
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var o = t[n];
                                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                                Object.defineProperty(e, o.key, o);
                            }
                        }
                        return function(t, n, o) {
                            return n && e(t.prototype, n), o && e(t, o), t;
                        };
                    }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                        function e() {
                            n(this, e);
                        }
                        return i(e, [ {
                            key: "phone",
                            value: function() {
                                var e = o();
                                return !(!r.test(e) && !a.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "mobile",
                            value: function() {
                                var e = o();
                                return !(!u.test(e) && !c.test(e.substr(0, 4)));
                            }
                        }, {
                            key: "tablet",
                            value: function() {
                                return this.mobile() && !this.phone();
                            }
                        } ]), e;
                    }();
                    t.default = new s;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e, t, n) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate");
                    }, o = function(e, t) {
                        var o = window.pageYOffset, i = window.innerHeight;
                        e.forEach((function(e, r) {
                            n(e, i + o, t);
                        }));
                    };
                    t.default = o;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(12), r = o(i), a = function(e, t) {
                        return e.forEach((function(e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
                        })), e;
                    };
                    t.default = a;
                }, function(e, t, n) {
                    "use strict";
                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        };
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(13), r = o(i), a = function(e, t) {
                        var n = 0, o = 0, i = window.innerHeight, a = {
                            offset: e.getAttribute("data-aos-offset"),
                            anchor: e.getAttribute("data-aos-anchor"),
                            anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                        };
                        switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), 
                        n = (0, r.default)(e).top, a.anchorPlacement) {
                          case "top-bottom":
                            break;

                          case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;

                          case "bottom-bottom":
                            n += e.offsetHeight;
                            break;

                          case "top-center":
                            n += i / 2;
                            break;

                          case "bottom-center":
                            n += i / 2 + e.offsetHeight;
                            break;

                          case "center-center":
                            n += i / 2 + e.offsetHeight / 2;
                            break;

                          case "top-top":
                            n += i;
                            break;

                          case "bottom-top":
                            n += e.offsetHeight + i;
                            break;

                          case "center-top":
                            n += e.offsetHeight / 2 + i;
                        }
                        return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                    };
                    t.default = a;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), 
                        n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                        return {
                            top: n,
                            left: t
                        };
                    };
                    t.default = n;
                }, function(e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function(e) {
                        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                            return {
                                node: e
                            };
                        }));
                    };
                    t.default = n;
                } ]);
            }));
        },
        80: module => {
            /**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
            (function(window) {
                "use strict";
                var mixitup = null, h = null;
                (function() {
                    var VENDORS = [ "webkit", "moz", "o", "ms" ], canary = window.document.createElement("div"), i = -1;
                    for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[VENDORS[i] + "RequestAnimationFrame"];
                    if (typeof canary.nextElementSibling === "undefined") Object.defineProperty(window.Element.prototype, "nextElementSibling", {
                        get: function() {
                            var el = this.nextSibling;
                            while (el) {
                                if (el.nodeType === 1) return el;
                                el = el.nextSibling;
                            }
                            return null;
                        }
                    });
                    (function(ElementPrototype) {
                        ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || function(selector) {
                            return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
                        };
                    })(window.Element.prototype);
                    if (!Object.keys) Object.keys = function() {
                        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = false, dontEnums = [], dontEnumsLength = -1;
                        hasDontEnumBug = !{
                            toString: null
                        }.propertyIsEnumerable("toString");
                        dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
                        dontEnumsLength = dontEnums.length;
                        return function(obj) {
                            var result = [], prop = "", i = -1;
                            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) throw new TypeError("Object.keys called on non-object");
                            for (prop in obj) if (hasOwnProperty.call(obj, prop)) result.push(prop);
                            if (hasDontEnumBug) for (i = 0; i < dontEnumsLength; i++) if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
                            return result;
                        };
                    }();
                    if (!Array.isArray) Array.isArray = function(arg) {
                        return Object.prototype.toString.call(arg) === "[object Array]";
                    };
                    if (typeof Object.create !== "function") Object.create = function(undefined) {
                        var Temp = function() {};
                        return function(prototype, propertiesObject) {
                            if (prototype !== Object(prototype) && prototype !== null) throw TypeError("Argument must be an object, or null");
                            Temp.prototype = prototype || {};
                            var result = new Temp;
                            Temp.prototype = null;
                            if (propertiesObject !== undefined) Object.defineProperties(result, propertiesObject);
                            if (prototype === null) result.__proto__ = null;
                            return result;
                        };
                    }();
                    if (!String.prototype.trim) String.prototype.trim = function() {
                        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                    };
                    if (!Array.prototype.indexOf) Array.prototype.indexOf = function(searchElement) {
                        var n, k, t, len;
                        if (this === null) throw new TypeError;
                        t = Object(this);
                        len = t.length >>> 0;
                        if (len === 0) return -1;
                        n = 0;
                        if (arguments.length > 1) {
                            n = Number(arguments[1]);
                            if (n !== n) n = 0; else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) n = (n > 0 || -1) * Math.floor(Math.abs(n));
                        }
                        if (n >= len) return -1;
                        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) if (k in t && t[k] === searchElement) return k;
                        return -1;
                    };
                    if (!Function.prototype.bind) Function.prototype.bind = function(oThis) {
                        var aArgs, self, FNOP, fBound;
                        if (typeof this !== "function") throw new TypeError;
                        aArgs = Array.prototype.slice.call(arguments, 1);
                        self = this;
                        FNOP = function() {};
                        fBound = function() {
                            return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
                        };
                        if (this.prototype) FNOP.prototype = this.prototype;
                        fBound.prototype = new FNOP;
                        return fBound;
                    };
                    if (!window.Element.prototype.dispatchEvent) window.Element.prototype.dispatchEvent = function(event) {
                        try {
                            return this.fireEvent("on" + event.type, event);
                        } catch (err) {}
                    };
                })();
                mixitup = function(container, config, foreignDoc) {
                    var el = null, returnCollection = false, instance = null, facade = null, doc = null, output = null, instances = [], id = "", elements = [], i = -1;
                    doc = foreignDoc || window.document;
                    if (returnCollection = arguments[3]) returnCollection = typeof returnCollection === "boolean";
                    if (typeof container === "string") elements = doc.querySelectorAll(container); else if (container && typeof container === "object" && h.isElement(container, doc)) elements = [ container ]; else if (container && typeof container === "object" && container.length) elements = container; else throw new Error(mixitup.messages.errorFactoryInvalidContainer());
                    if (elements.length < 1) throw new Error(mixitup.messages.errorFactoryContainerNotFound());
                    for (i = 0; el = elements[i]; i++) {
                        if (i > 0 && !returnCollection) break;
                        if (!el.id) {
                            id = "MixItUp" + h.randomHex();
                            el.id = id;
                        } else id = el.id;
                        if (mixitup.instances[id] instanceof mixitup.Mixer) {
                            instance = mixitup.instances[id];
                            if (!config || config && config.debug && config.debug.showWarnings !== false) console.warn(mixitup.messages.warningFactoryPreexistingInstance());
                        } else {
                            instance = new mixitup.Mixer;
                            instance.attach(el, doc, id, config);
                            mixitup.instances[id] = instance;
                        }
                        facade = new mixitup.Facade(instance);
                        if (config && config.debug && config.debug.enable) instances.push(instance); else instances.push(facade);
                    }
                    if (returnCollection) output = new mixitup.Collection(instances); else output = instances[0];
                    return output;
                };
                mixitup.use = function(extension) {
                    mixitup.Base.prototype.callActions.call(mixitup, "beforeUse", arguments);
                    if (typeof extension === "function" && extension.TYPE === "mixitup-extension") {
                        if (typeof mixitup.extensions[extension.NAME] === "undefined") {
                            extension(mixitup);
                            mixitup.extensions[extension.NAME] = extension;
                        }
                    } else if (extension.fn && extension.fn.jquery) mixitup.libraries.$ = extension;
                    mixitup.Base.prototype.callActions.call(mixitup, "afterUse", arguments);
                };
                mixitup.instances = {};
                mixitup.extensions = {};
                mixitup.libraries = {};
                h = {
                    hasClass: function(el, cls) {
                        return !!el.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
                    },
                    addClass: function(el, cls) {
                        if (!this.hasClass(el, cls)) el.className += el.className ? " " + cls : cls;
                    },
                    removeClass: function(el, cls) {
                        if (this.hasClass(el, cls)) {
                            var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                            el.className = el.className.replace(reg, " ").trim();
                        }
                    },
                    extend: function(destination, source, deep, handleErrors) {
                        var sourceKeys = [], key = "", i = -1;
                        deep = deep || false;
                        handleErrors = handleErrors || false;
                        try {
                            if (Array.isArray(source)) for (i = 0; i < source.length; i++) sourceKeys.push(i); else if (source) sourceKeys = Object.keys(source);
                            for (i = 0; i < sourceKeys.length; i++) {
                                key = sourceKeys[i];
                                if (!deep || typeof source[key] !== "object" || this.isElement(source[key])) destination[key] = source[key]; else if (Array.isArray(source[key])) {
                                    if (!destination[key]) destination[key] = [];
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                } else {
                                    if (!destination[key]) destination[key] = {};
                                    this.extend(destination[key], source[key], deep, handleErrors);
                                }
                            }
                        } catch (err) {
                            if (handleErrors) this.handleExtendError(err, destination); else throw err;
                        }
                        return destination;
                    },
                    handleExtendError: function(err, destination) {
                        var re = /property "?(\w*)"?[,:] object/i, matches = null, erroneous = "", message = "", suggestion = "", probableMatch = "", key = "", mostMatchingChars = -1, i = -1;
                        if (err instanceof TypeError && (matches = re.exec(err.message))) {
                            erroneous = matches[1];
                            for (key in destination) {
                                i = 0;
                                while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) i++;
                                if (i > mostMatchingChars) {
                                    mostMatchingChars = i;
                                    probableMatch = key;
                                }
                            }
                            if (mostMatchingChars > 1) suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
                                probableMatch
                            });
                            message = mixitup.messages.errorConfigInvalidProperty({
                                erroneous,
                                suggestion
                            });
                            throw new TypeError(message);
                        }
                        throw err;
                    },
                    template: function(str) {
                        var re = /\${([\w]*)}/g, dynamics = {}, matches = null;
                        while (matches = re.exec(str)) dynamics[matches[1]] = new RegExp("\\${" + matches[1] + "}", "g");
                        return function(data) {
                            var key = "", output = str;
                            data = data || {};
                            for (key in dynamics) output = output.replace(dynamics[key], typeof data[key] !== "undefined" ? data[key] : "");
                            return output;
                        };
                    },
                    on: function(el, type, fn, useCapture) {
                        if (!el) return;
                        if (el.addEventListener) el.addEventListener(type, fn, useCapture); else if (el.attachEvent) {
                            el["e" + type + fn] = fn;
                            el[type + fn] = function() {
                                el["e" + type + fn](window.event);
                            };
                            el.attachEvent("on" + type, el[type + fn]);
                        }
                    },
                    off: function(el, type, fn) {
                        if (!el) return;
                        if (el.removeEventListener) el.removeEventListener(type, fn, false); else if (el.detachEvent) {
                            el.detachEvent("on" + type, el[type + fn]);
                            el[type + fn] = null;
                        }
                    },
                    getCustomEvent: function(eventType, detail, doc) {
                        var event = null;
                        doc = doc || window.document;
                        if (typeof window.CustomEvent === "function") event = new window.CustomEvent(eventType, {
                            detail,
                            bubbles: true,
                            cancelable: true
                        }); else if (typeof doc.createEvent === "function") {
                            event = doc.createEvent("CustomEvent");
                            event.initCustomEvent(eventType, true, true, detail);
                        } else {
                            event = doc.createEventObject(), event.type = eventType;
                            event.returnValue = false;
                            event.cancelBubble = false;
                            event.detail = detail;
                        }
                        return event;
                    },
                    getOriginalEvent: function(e) {
                        if (e.touches && e.touches.length) return e.touches[0]; else if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0]; else return e;
                    },
                    index: function(el, selector) {
                        var i = 0;
                        while ((el = el.previousElementSibling) !== null) if (!selector || el.matches(selector)) ++i;
                        return i;
                    },
                    camelCase: function(str) {
                        return str.toLowerCase().replace(/([_-][a-z])/g, (function($1) {
                            return $1.toUpperCase().replace(/[_-]/, "");
                        }));
                    },
                    pascalCase: function(str) {
                        return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
                    },
                    dashCase: function(str) {
                        return str.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
                    },
                    isElement: function(el, doc) {
                        doc = doc || window.document;
                        if (window.HTMLElement && el instanceof window.HTMLElement) return true; else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) return true; else return el !== null && el.nodeType === 1 && typeof el.nodeName === "string";
                    },
                    createElement: function(htmlString, doc) {
                        var frag = null, temp = null;
                        doc = doc || window.document;
                        frag = doc.createDocumentFragment();
                        temp = doc.createElement("div");
                        temp.innerHTML = htmlString.trim();
                        while (temp.firstChild) frag.appendChild(temp.firstChild);
                        return frag;
                    },
                    removeWhitespace: function(node) {
                        var deleting;
                        while (node && node.nodeName === "#text") {
                            deleting = node;
                            node = node.previousSibling;
                            deleting.parentElement && deleting.parentElement.removeChild(deleting);
                        }
                    },
                    isEqualArray: function(a, b) {
                        var i = a.length;
                        if (i !== b.length) return false;
                        while (i--) if (a[i] !== b[i]) return false;
                        return true;
                    },
                    deepEquals: function(a, b) {
                        var key;
                        if (typeof a === "object" && a && typeof b === "object" && b) {
                            if (Object.keys(a).length !== Object.keys(b).length) return false;
                            for (key in a) if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
                        } else if (a !== b) return false;
                        return true;
                    },
                    arrayShuffle: function(oldArray) {
                        var newArray = oldArray.slice(), len = newArray.length, i = len, p = -1, t = [];
                        while (i--) {
                            p = ~~(Math.random() * len);
                            t = newArray[i];
                            newArray[i] = newArray[p];
                            newArray[p] = t;
                        }
                        return newArray;
                    },
                    arrayFromList: function(list) {
                        var output, i;
                        try {
                            return Array.prototype.slice.call(list);
                        } catch (err) {
                            output = [];
                            for (i = 0; i < list.length; i++) output.push(list[i]);
                            return output;
                        }
                    },
                    debounce: function(func, wait, immediate) {
                        var timeout;
                        return function() {
                            var self = this, args = arguments, callNow = immediate && !timeout, later = null;
                            later = function() {
                                timeout = null;
                                if (!immediate) func.apply(self, args);
                            };
                            clearTimeout(timeout);
                            timeout = setTimeout(later, wait);
                            if (callNow) func.apply(self, args);
                        };
                    },
                    position: function(element) {
                        var xPosition = 0, yPosition = 0, offsetParent = element;
                        while (element) {
                            xPosition -= element.scrollLeft;
                            yPosition -= element.scrollTop;
                            if (element === offsetParent) {
                                xPosition += element.offsetLeft;
                                yPosition += element.offsetTop;
                                offsetParent = element.offsetParent;
                            }
                            element = element.parentElement;
                        }
                        return {
                            x: xPosition,
                            y: yPosition
                        };
                    },
                    getHypotenuse: function(node1, node2) {
                        var distanceX = node1.x - node2.x, distanceY = node1.y - node2.y;
                        distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY;
                        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
                    },
                    getIntersectionRatio: function(box1, box2) {
                        var controlArea = box1.width * box1.height, intersectionX = -1, intersectionY = -1, intersectionArea = -1, ratio = -1;
                        intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
                        intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
                        intersectionArea = intersectionY * intersectionX;
                        ratio = intersectionArea / controlArea;
                        return ratio;
                    },
                    closestParent: function(el, selector, includeSelf, doc) {
                        var parent = el.parentNode;
                        doc = doc || window.document;
                        if (includeSelf && el.matches(selector)) return el;
                        while (parent && parent != doc.body) if (parent.matches && parent.matches(selector)) return parent; else if (parent.parentNode) parent = parent.parentNode; else return null;
                        return null;
                    },
                    children: function(el, selector, doc) {
                        var children = [], tempId = "";
                        doc = doc || window.doc;
                        if (el) {
                            if (!el.id) {
                                tempId = "Temp" + this.randomHexKey();
                                el.id = tempId;
                            }
                            children = doc.querySelectorAll("#" + el.id + " > " + selector);
                            if (tempId) el.removeAttribute("id");
                        }
                        return children;
                    },
                    clean: function(originalArray) {
                        var cleanArray = [], i = -1;
                        for (i = 0; i < originalArray.length; i++) if (originalArray[i] !== "") cleanArray.push(originalArray[i]);
                        return cleanArray;
                    },
                    defer: function(libraries) {
                        var deferred = null, promiseWrapper = null, $ = null;
                        promiseWrapper = new this.Deferred;
                        if (mixitup.features.has.promises) promiseWrapper.promise = new Promise((function(resolve, reject) {
                            promiseWrapper.resolve = resolve;
                            promiseWrapper.reject = reject;
                        })); else if (($ = window.jQuery || libraries.$) && typeof $.Deferred === "function") {
                            deferred = $.Deferred();
                            promiseWrapper.promise = deferred.promise();
                            promiseWrapper.resolve = deferred.resolve;
                            promiseWrapper.reject = deferred.reject;
                        } else if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return promiseWrapper;
                    },
                    all: function(tasks, libraries) {
                        var $ = null;
                        if (mixitup.features.has.promises) return Promise.all(tasks); else if (($ = window.jQuery || libraries.$) && typeof $.when === "function") return $.when.apply($, tasks).done((function() {
                            return arguments;
                        }));
                        if (window.console) console.warn(mixitup.messages.warningNoPromiseImplementation());
                        return [];
                    },
                    getPrefix: function(el, property, vendors) {
                        var i = -1, prefix = "";
                        if (h.dashCase(property) in el.style) return "";
                        for (i = 0; prefix = vendors[i]; i++) if (prefix + property in el.style) return prefix.toLowerCase();
                        return "unsupported";
                    },
                    randomHex: function() {
                        return ("00000" + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
                    },
                    getDocumentState: function(doc) {
                        doc = typeof doc.body === "object" ? doc : window.document;
                        return {
                            scrollTop: window.pageYOffset,
                            scrollLeft: window.pageXOffset,
                            docHeight: doc.documentElement.scrollHeight,
                            docWidth: doc.documentElement.scrollWidth,
                            viewportHeight: doc.documentElement.clientHeight,
                            viewportWidth: doc.documentElement.clientWidth
                        };
                    },
                    bind: function(obj, fn) {
                        return function() {
                            return fn.apply(obj, arguments);
                        };
                    },
                    isVisible: function(el) {
                        var styles = null;
                        if (el.offsetParent) return true;
                        styles = window.getComputedStyle(el);
                        if (styles.position === "fixed" && styles.visibility !== "hidden" && styles.opacity !== "0") return true;
                        return false;
                    },
                    seal: function(obj) {
                        if (typeof Object.seal === "function") Object.seal(obj);
                    },
                    freeze: function(obj) {
                        if (typeof Object.freeze === "function") Object.freeze(obj);
                    },
                    compareVersions: function(control, specimen) {
                        var controlParts = control.split("."), specimenParts = specimen.split("."), controlPart = -1, specimenPart = -1, i = -1;
                        for (i = 0; i < controlParts.length; i++) {
                            controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ""));
                            specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, "") || 0);
                            if (specimenPart < controlPart) return false; else if (specimenPart > controlPart) return true;
                        }
                        return true;
                    },
                    Deferred: function() {
                        this.promise = null;
                        this.resolve = null;
                        this.reject = null;
                        this.id = h.randomHex();
                    },
                    isEmptyObject: function(obj) {
                        var key = "";
                        if (typeof Object.keys === "function") return Object.keys(obj).length === 0;
                        for (key in obj) if (obj.hasOwnProperty(key)) return false;
                        return true;
                    },
                    getClassname: function(classNames, elementName, modifier) {
                        var classname = "";
                        classname += classNames.block;
                        if (classname.length) classname += classNames.delineatorElement;
                        classname += classNames["element" + this.pascalCase(elementName)];
                        if (!modifier) return classname;
                        if (classname.length) classname += classNames.delineatorModifier;
                        classname += modifier;
                        return classname;
                    },
                    getProperty: function(obj, stringKey) {
                        var parts = stringKey.split("."), returnCurrent = null, current = "", i = 0;
                        if (!stringKey) return obj;
                        returnCurrent = function(obj) {
                            if (!obj) return null; else return obj[current];
                        };
                        while (i < parts.length) {
                            current = parts[i];
                            obj = returnCurrent(obj);
                            i++;
                        }
                        if (typeof obj !== "undefined") return obj; else return null;
                    }
                };
                mixitup.h = h;
                mixitup.Base = function() {};
                mixitup.Base.prototype = {
                    constructor: mixitup.Base,
                    callActions: function(actionName, args) {
                        var self = this, hooks = self.constructor.actions[actionName], extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return;
                        for (extensionName in hooks) hooks[extensionName].apply(self, args);
                    },
                    callFilters: function(filterName, input, args) {
                        var self = this, hooks = self.constructor.filters[filterName], output = input, extensionName = "";
                        if (!hooks || h.isEmptyObject(hooks)) return output;
                        args = args || [];
                        for (extensionName in hooks) {
                            args = h.arrayFromList(args);
                            args.unshift(output);
                            output = hooks[extensionName].apply(self, args);
                        }
                        return output;
                    }
                };
                mixitup.BaseStatic = function() {
                    this.actions = {};
                    this.filters = {};
                    this.extend = function(extension) {
                        h.extend(this.prototype, extension);
                    };
                    this.registerAction = function(hookName, extensionName, func) {
                        (this.actions[hookName] = this.actions[hookName] || {})[extensionName] = func;
                    };
                    this.registerFilter = function(hookName, extensionName, func) {
                        (this.filters[hookName] = this.filters[hookName] || {})[extensionName] = func;
                    };
                };
                mixitup.Features = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.boxSizingPrefix = "";
                    this.transformPrefix = "";
                    this.transitionPrefix = "";
                    this.boxSizingPrefix = "";
                    this.transformProp = "";
                    this.transformRule = "";
                    this.transitionProp = "";
                    this.perspectiveProp = "";
                    this.perspectiveOriginProp = "";
                    this.has = new mixitup.Has;
                    this.canary = null;
                    this.BOX_SIZING_PROP = "boxSizing";
                    this.TRANSITION_PROP = "transition";
                    this.TRANSFORM_PROP = "transform";
                    this.PERSPECTIVE_PROP = "perspective";
                    this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin";
                    this.VENDORS = [ "Webkit", "moz", "O", "ms" ];
                    this.TWEENABLE = [ "opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ];
                    this.callActions("afterConstruct");
                };
                mixitup.BaseStatic.call(mixitup.Features);
                mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Features.prototype, {
                    constructor: mixitup.Features,
                    init: function() {
                        var self = this;
                        self.callActions("beforeInit", arguments);
                        self.canary = document.createElement("div");
                        self.setPrefixes();
                        self.runTests();
                        self.callActions("beforeInit", arguments);
                    },
                    runTests: function() {
                        var self = this;
                        self.callActions("beforeRunTests", arguments);
                        self.has.promises = typeof window.Promise === "function";
                        self.has.transitions = self.transitionPrefix !== "unsupported";
                        self.callActions("afterRunTests", arguments);
                        h.freeze(self.has);
                    },
                    setPrefixes: function() {
                        var self = this;
                        self.callActions("beforeSetPrefixes", arguments);
                        self.transitionPrefix = h.getPrefix(self.canary, "Transition", self.VENDORS);
                        self.transformPrefix = h.getPrefix(self.canary, "Transform", self.VENDORS);
                        self.boxSizingPrefix = h.getPrefix(self.canary, "BoxSizing", self.VENDORS);
                        self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
                        self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
                        self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
                        self.transformRule = self.transformPrefix ? "-" + self.transformPrefix + "-" + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
                        self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
                        self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
                        self.callActions("afterSetPrefixes", arguments);
                    }
                });
                mixitup.Has = function() {
                    this.transitions = false;
                    this.promises = false;
                    h.seal(this);
                };
                mixitup.features = new mixitup.Features;
                mixitup.features.init();
                mixitup.ConfigAnimation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.effects = "fade scale";
                    this.effectsIn = "";
                    this.effectsOut = "";
                    this.duration = 600;
                    this.easing = "ease";
                    this.applyPerspective = true;
                    this.perspectiveDistance = "3000px";
                    this.perspectiveOrigin = "50% 50%";
                    this.queue = true;
                    this.queueLimit = 3;
                    this.animateResizeContainer = true;
                    this.animateResizeTargets = false;
                    this.staggerSequence = null;
                    this.reverseOut = false;
                    this.nudge = true;
                    this.clampHeight = true;
                    this.clampWidth = true;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigAnimation);
                mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
                mixitup.ConfigBehavior = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.liveSort = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigBehavior);
                mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;
                mixitup.ConfigCallbacks = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.onMixStart = null;
                    this.onMixBusy = null;
                    this.onMixEnd = null;
                    this.onMixFail = null;
                    this.onMixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
                mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
                mixitup.ConfigControls = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = true;
                    this.live = false;
                    this.scope = "global";
                    this.toggleLogic = "or";
                    this.toggleDefault = "all";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigControls);
                mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
                mixitup.ConfigClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.block = "mixitup";
                    this.elementContainer = "container";
                    this.elementFilter = "control";
                    this.elementSort = "control";
                    this.elementMultimix = "control";
                    this.elementToggle = "control";
                    this.modifierActive = "active";
                    this.modifierDisabled = "disabled";
                    this.modifierFailed = "failed";
                    this.delineatorElement = "-";
                    this.delineatorModifier = "-";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigClassNames);
                mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
                mixitup.ConfigData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.uidKey = "";
                    this.dirtyCheck = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigData);
                mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
                mixitup.ConfigDebug = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.enable = false;
                    this.showWarnings = true;
                    this.fauxAsync = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigDebug);
                mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
                mixitup.ConfigLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.allowNestedTargets = true;
                    this.containerClassName = "";
                    this.siblingBefore = null;
                    this.siblingAfter = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLayout);
                mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
                mixitup.ConfigLoad = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = "all";
                    this.sort = "default:asc";
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigLoad);
                mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
                mixitup.ConfigSelectors = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = ".mix";
                    this.control = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigSelectors);
                mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
                mixitup.ConfigRender = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.target = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigRender);
                mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
                mixitup.ConfigTemplates = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ConfigTemplates);
                mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
                mixitup.Config = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.animation = new mixitup.ConfigAnimation;
                    this.behavior = new mixitup.ConfigBehavior;
                    this.callbacks = new mixitup.ConfigCallbacks;
                    this.controls = new mixitup.ConfigControls;
                    this.classNames = new mixitup.ConfigClassNames;
                    this.data = new mixitup.ConfigData;
                    this.debug = new mixitup.ConfigDebug;
                    this.layout = new mixitup.ConfigLayout;
                    this.load = new mixitup.ConfigLoad;
                    this.selectors = new mixitup.ConfigSelectors;
                    this.render = new mixitup.ConfigRender;
                    this.templates = new mixitup.ConfigTemplates;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Config);
                mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Config.prototype.constructor = mixitup.Config;
                mixitup.MixerDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.document = null;
                    this.body = null;
                    this.container = null;
                    this.parent = null;
                    this.targets = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.MixerDom);
                mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
                mixitup.UiClassNames = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.base = "";
                    this.active = "";
                    this.disabled = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UiClassNames);
                mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
                mixitup.CommandDataset = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.dataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandDataset);
                mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
                mixitup.CommandMultimix = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.filter = null;
                    this.sort = null;
                    this.insert = null;
                    this.remove = null;
                    this.changeLayout = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandMultimix);
                mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
                mixitup.CommandFilter = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.selector = "";
                    this.collection = null;
                    this.action = "show";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandFilter);
                mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
                mixitup.CommandSort = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.sortString = "";
                    this.attribute = "";
                    this.order = "asc";
                    this.collection = null;
                    this.next = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandSort);
                mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
                mixitup.CommandInsert = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.index = 0;
                    this.collection = [];
                    this.position = "before";
                    this.sibling = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandInsert);
                mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
                mixitup.CommandRemove = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.targets = [];
                    this.collection = [];
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandRemove);
                mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
                mixitup.CommandChangeLayout = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.containerClassName = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
                mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
                mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
                mixitup.ControlDefinition = function(type, selector, live, parent) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.type = type;
                    this.selector = selector;
                    this.live = live || false;
                    this.parent = parent || "";
                    this.callActions("afterConstruct");
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.ControlDefinition);
                mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
                mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
                mixitup.controlDefinitions = [];
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("multimix", "[data-filter][data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("filter", "[data-filter]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("sort", "[data-sort]"));
                mixitup.controlDefinitions.push(new mixitup.ControlDefinition("toggle", "[data-toggle]"));
                mixitup.Control = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.selector = "";
                    this.bound = [];
                    this.pending = -1;
                    this.type = "";
                    this.status = "inactive";
                    this.filter = "";
                    this.sort = "";
                    this.canDisable = false;
                    this.handler = null;
                    this.classNames = new mixitup.UiClassNames;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Control);
                mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Control.prototype, {
                    constructor: mixitup.Control,
                    init: function(el, type, selector) {
                        var self = this;
                        this.callActions("beforeInit", arguments);
                        self.el = el;
                        self.type = type;
                        self.selector = selector;
                        if (self.selector) self.status = "live"; else {
                            self.canDisable = typeof self.el.disable === "boolean";
                            switch (self.type) {
                              case "filter":
                                self.filter = self.el.getAttribute("data-filter");
                                break;

                              case "toggle":
                                self.filter = self.el.getAttribute("data-toggle");
                                break;

                              case "sort":
                                self.sort = self.el.getAttribute("data-sort");
                                break;

                              case "multimix":
                                self.filter = self.el.getAttribute("data-filter");
                                self.sort = self.el.getAttribute("data-sort");
                                break;
                            }
                        }
                        self.bindClick();
                        mixitup.controls.push(self);
                        this.callActions("afterInit", arguments);
                    },
                    isBound: function(mixer) {
                        var self = this, isBound = false;
                        this.callActions("beforeIsBound", arguments);
                        isBound = self.bound.indexOf(mixer) > -1;
                        return self.callFilters("afterIsBound", isBound, arguments);
                    },
                    addBinding: function(mixer) {
                        var self = this;
                        this.callActions("beforeAddBinding", arguments);
                        if (!self.isBound()) self.bound.push(mixer);
                        this.callActions("afterAddBinding", arguments);
                    },
                    removeBinding: function(mixer) {
                        var self = this, removeIndex = -1;
                        this.callActions("beforeRemoveBinding", arguments);
                        if ((removeIndex = self.bound.indexOf(mixer)) > -1) self.bound.splice(removeIndex, 1);
                        if (self.bound.length < 1) {
                            self.unbindClick();
                            removeIndex = mixitup.controls.indexOf(self);
                            mixitup.controls.splice(removeIndex, 1);
                            if (self.status === "active") self.renderStatus(self.el, "inactive");
                        }
                        this.callActions("afterRemoveBinding", arguments);
                    },
                    bindClick: function() {
                        var self = this;
                        this.callActions("beforeBindClick", arguments);
                        self.handler = function(e) {
                            self.handleClick(e);
                        };
                        h.on(self.el, "click", self.handler);
                        this.callActions("afterBindClick", arguments);
                    },
                    unbindClick: function() {
                        var self = this;
                        this.callActions("beforeUnbindClick", arguments);
                        h.off(self.el, "click", self.handler);
                        self.handler = null;
                        this.callActions("afterUnbindClick", arguments);
                    },
                    handleClick: function(e) {
                        var self = this, button = null, mixer = null, isActive = false, returnValue = void 0, command = {}, clone = null, commands = [], i = -1;
                        this.callActions("beforeHandleClick", arguments);
                        this.pending = 0;
                        mixer = self.bound[0];
                        if (!self.selector) button = self.el; else button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
                        if (!button) {
                            self.callActions("afterHandleClick", arguments);
                            return;
                        }
                        switch (self.type) {
                          case "filter":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            break;

                          case "sort":
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "multimix":
                            command.filter = self.filter || button.getAttribute("data-filter");
                            command.sort = self.sort || button.getAttribute("data-sort");
                            break;

                          case "toggle":
                            command.filter = self.filter || button.getAttribute("data-toggle");
                            if (self.status === "live") isActive = h.hasClass(button, self.classNames.active); else isActive = self.status === "active";
                            break;
                        }
                        for (i = 0; i < self.bound.length; i++) {
                            clone = new mixitup.CommandMultimix;
                            h.extend(clone, command);
                            commands.push(clone);
                        }
                        commands = self.callFilters("commandsHandleClick", commands, arguments);
                        self.pending = self.bound.length;
                        for (i = 0; mixer = self.bound[i]; i++) {
                            command = commands[i];
                            if (!command) continue;
                            if (!mixer.lastClicked) mixer.lastClicked = button;
                            mixitup.events.fire("mixClick", mixer.dom.container, {
                                state: mixer.state,
                                instance: mixer,
                                originalEvent: e,
                                control: mixer.lastClicked
                            }, mixer.dom.document);
                            if (typeof mixer.config.callbacks.onMixClick === "function") {
                                returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
                                if (returnValue === false) continue;
                            }
                            if (self.type === "toggle") isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter); else mixer.multimix(command);
                        }
                        this.callActions("afterHandleClick", arguments);
                    },
                    update: function(command, toggleArray) {
                        var self = this, actions = new mixitup.CommandMultimix;
                        self.callActions("beforeUpdate", arguments);
                        self.pending--;
                        self.pending = Math.max(0, self.pending);
                        if (self.pending > 0) return;
                        if (self.status === "live") self.updateLive(command, toggleArray); else {
                            actions.sort = self.sort;
                            actions.filter = self.filter;
                            self.callFilters("actionsUpdate", actions, arguments);
                            self.parseStatusChange(self.el, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdate", arguments);
                    },
                    updateLive: function(command, toggleArray) {
                        var self = this, controlButtons = null, actions = null, button = null, i = -1;
                        self.callActions("beforeUpdateLive", arguments);
                        if (!self.el) return;
                        controlButtons = self.el.querySelectorAll(self.selector);
                        for (i = 0; button = controlButtons[i]; i++) {
                            actions = new mixitup.CommandMultimix;
                            switch (self.type) {
                              case "filter":
                                actions.filter = button.getAttribute("data-filter");
                                break;

                              case "sort":
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "multimix":
                                actions.filter = button.getAttribute("data-filter");
                                actions.sort = button.getAttribute("data-sort");
                                break;

                              case "toggle":
                                actions.filter = button.getAttribute("data-toggle");
                                break;
                            }
                            actions = self.callFilters("actionsUpdateLive", actions, arguments);
                            self.parseStatusChange(button, command, actions, toggleArray);
                        }
                        self.callActions("afterUpdateLive", arguments);
                    },
                    parseStatusChange: function(button, command, actions, toggleArray) {
                        var self = this, alias = "", toggle = "", i = -1;
                        self.callActions("beforeParseStatusChange", arguments);
                        switch (self.type) {
                          case "filter":
                            if (command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "multimix":
                            if (command.sort === actions.sort && command.filter === actions.filter) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "sort":
                            if (command.sort.match(/:asc/g)) alias = command.sort.replace(/:asc/g, "");
                            if (command.sort === actions.sort || alias === actions.sort) self.renderStatus(button, "active"); else self.renderStatus(button, "inactive");
                            break;

                          case "toggle":
                            if (toggleArray.length < 1) self.renderStatus(button, "inactive");
                            if (command.filter === actions.filter) self.renderStatus(button, "active");
                            for (i = 0; i < toggleArray.length; i++) {
                                toggle = toggleArray[i];
                                if (toggle === actions.filter) {
                                    self.renderStatus(button, "active");
                                    break;
                                }
                                self.renderStatus(button, "inactive");
                            }
                            break;
                        }
                        self.callActions("afterParseStatusChange", arguments);
                    },
                    renderStatus: function(button, status) {
                        var self = this;
                        self.callActions("beforeRenderStatus", arguments);
                        switch (status) {
                          case "active":
                            h.addClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "inactive":
                            h.removeClass(button, self.classNames.active);
                            h.removeClass(button, self.classNames.disabled);
                            if (self.canDisable) self.el.disabled = false;
                            break;

                          case "disabled":
                            if (self.canDisable) self.el.disabled = true;
                            h.addClass(button, self.classNames.disabled);
                            h.removeClass(button, self.classNames.active);
                            break;
                        }
                        if (self.status !== "live") self.status = status;
                        self.callActions("afterRenderStatus", arguments);
                    }
                });
                mixitup.controls = [];
                mixitup.StyleData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.x = 0;
                    this.y = 0;
                    this.top = 0;
                    this.right = 0;
                    this.bottom = 0;
                    this.left = 0;
                    this.width = 0;
                    this.height = 0;
                    this.marginRight = 0;
                    this.marginBottom = 0;
                    this.opacity = 0;
                    this.scale = new mixitup.TransformData;
                    this.translateX = new mixitup.TransformData;
                    this.translateY = new mixitup.TransformData;
                    this.translateZ = new mixitup.TransformData;
                    this.rotateX = new mixitup.TransformData;
                    this.rotateY = new mixitup.TransformData;
                    this.rotateZ = new mixitup.TransformData;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.StyleData);
                mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.StyleData.prototype.constructor = mixitup.StyleData;
                mixitup.TransformData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.value = 0;
                    this.unit = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformData);
                mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TransformData.prototype.constructor = mixitup.TransformData;
                mixitup.TransformDefaults = function() {
                    mixitup.StyleData.apply(this);
                    this.callActions("beforeConstruct");
                    this.scale.value = .01;
                    this.scale.unit = "";
                    this.translateX.value = 20;
                    this.translateX.unit = "px";
                    this.translateY.value = 20;
                    this.translateY.unit = "px";
                    this.translateZ.value = 20;
                    this.translateZ.unit = "px";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateY.value = 90;
                    this.rotateY.unit = "deg";
                    this.rotateX.value = 90;
                    this.rotateX.unit = "deg";
                    this.rotateZ.value = 180;
                    this.rotateZ.unit = "deg";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TransformDefaults);
                mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
                mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
                mixitup.transformDefaults = new mixitup.TransformDefaults;
                mixitup.EventDetail = function() {
                    this.state = null;
                    this.futureState = null;
                    this.instance = null;
                    this.originalEvent = null;
                };
                mixitup.Events = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.mixStart = null;
                    this.mixBusy = null;
                    this.mixEnd = null;
                    this.mixFail = null;
                    this.mixClick = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Events);
                mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Events.prototype.constructor = mixitup.Events;
                mixitup.Events.prototype.fire = function(eventType, el, detail, doc) {
                    var self = this, event = null, eventDetail = new mixitup.EventDetail;
                    self.callActions("beforeFire", arguments);
                    if (typeof self[eventType] === "undefined") throw new Error('Event type "' + eventType + '" not found.');
                    eventDetail.state = new mixitup.State;
                    h.extend(eventDetail.state, detail.state);
                    if (detail.futureState) {
                        eventDetail.futureState = new mixitup.State;
                        h.extend(eventDetail.futureState, detail.futureState);
                    }
                    eventDetail.instance = detail.instance;
                    if (detail.originalEvent) eventDetail.originalEvent = detail.originalEvent;
                    event = h.getCustomEvent(eventType, eventDetail, doc);
                    self.callFilters("eventFire", event, arguments);
                    el.dispatchEvent(event);
                };
                mixitup.events = new mixitup.Events;
                mixitup.QueueItem = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.args = [];
                    this.instruction = null;
                    this.triggerElement = null;
                    this.deferred = null;
                    this.isToggling = false;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.QueueItem);
                mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
                mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
                mixitup.Mixer = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.config = new mixitup.Config;
                    this.id = "";
                    this.isBusy = false;
                    this.isToggling = false;
                    this.incPadding = true;
                    this.controls = [];
                    this.targets = [];
                    this.origOrder = [];
                    this.cache = {};
                    this.toggleArray = [];
                    this.targetsMoved = 0;
                    this.targetsImmovable = 0;
                    this.targetsBound = 0;
                    this.targetsDone = 0;
                    this.staggerDuration = 0;
                    this.effectsIn = null;
                    this.effectsOut = null;
                    this.transformIn = [];
                    this.transformOut = [];
                    this.queue = [];
                    this.state = null;
                    this.lastOperation = null;
                    this.lastClicked = null;
                    this.userCallback = null;
                    this.userDeferred = null;
                    this.dom = new mixitup.MixerDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Mixer);
                mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Mixer.prototype, {
                    constructor: mixitup.Mixer,
                    attach: function(container, document, id, config) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeAttach", arguments);
                        self.id = id;
                        if (config) h.extend(self.config, config, true, true);
                        self.sanitizeConfig();
                        self.cacheDom(container, document);
                        if (self.config.layout.containerClassName) h.addClass(self.dom.container, self.config.layout.containerClassName);
                        if (!mixitup.features.has.transitions) self.config.animation.enable = false;
                        if (typeof window.console === "undefined") self.config.debug.showWarnings = false;
                        if (self.config.data.uidKey) self.config.controls.enable = false;
                        self.indexTargets();
                        self.state = self.getInitialState();
                        for (i = 0; target = self.lastOperation.toHide[i]; i++) target.hide();
                        if (self.config.controls.enable) {
                            self.initControls();
                            self.buildToggleArray(null, self.state);
                            self.updateControls({
                                filter: self.state.activeFilter,
                                sort: self.state.activeSort
                            });
                        }
                        self.parseEffects();
                        self.callActions("afterAttach", arguments);
                    },
                    sanitizeConfig: function() {
                        var self = this;
                        self.callActions("beforeSanitizeConfig", arguments);
                        self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
                        self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
                        self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
                        self.config.animation.effects = self.config.animation.effects.trim();
                        self.callActions("afterSanitizeConfig", arguments);
                    },
                    getInitialState: function() {
                        var self = this, state = new mixitup.State, operation = new mixitup.Operation;
                        self.callActions("beforeGetInitialState", arguments);
                        state.activeContainerClassName = self.config.layout.containerClassName;
                        if (self.config.load.dataset) {
                            if (!self.config.data.uidKey || typeof self.config.data.uidKey !== "string") throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
                            operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            operation.show = self.targets.slice();
                            state = self.callFilters("stateGetInitialState", state, arguments);
                        } else {
                            state.activeFilter = self.parseFilterArgs([ self.config.load.filter ]).command;
                            state.activeSort = self.parseSortArgs([ self.config.load.sort ]).command;
                            state.totalTargets = self.targets.length;
                            state = self.callFilters("stateGetInitialState", state, arguments);
                            if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === "random" || state.activeSort.order === "desc") {
                                operation.newSort = state.activeSort;
                                self.sortOperation(operation);
                                self.printSort(false, operation);
                                self.targets = operation.newOrder;
                            } else operation.startOrder = operation.newOrder = self.targets;
                            operation.startFilter = operation.newFilter = state.activeFilter;
                            operation.startSort = operation.newSort = state.activeSort;
                            operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
                            if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        }
                        operation = self.callFilters("operationGetInitialState", operation, [ state ]);
                        self.lastOperation = operation;
                        if (operation.newFilter) self.filterOperation(operation);
                        state = self.buildState(operation);
                        return state;
                    },
                    cacheDom: function(el, document) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.document = document;
                        self.dom.body = self.dom.document.querySelector("body");
                        self.dom.container = el;
                        self.dom.parent = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    indexTargets: function() {
                        var self = this, target = null, el = null, dataset = null, i = -1;
                        self.callActions("beforeIndexTargets", arguments);
                        self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
                        self.dom.targets = h.arrayFromList(self.dom.targets);
                        self.targets = [];
                        if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
                        if (self.dom.targets.length) {
                            for (i = 0; el = self.dom.targets[i]; i++) {
                                target = new mixitup.Target;
                                target.init(el, self, dataset ? dataset[i] : void 0);
                                target.isInDom = true;
                                self.targets.push(target);
                            }
                            self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
                        }
                        self.origOrder = self.targets;
                        self.callActions("afterIndexTargets", arguments);
                    },
                    initControls: function() {
                        var self = this, definition = "", controlElements = null, el = null, parent = null, delagators = null, control = null, i = -1, j = -1;
                        self.callActions("beforeInitControls", arguments);
                        switch (self.config.controls.scope) {
                          case "local":
                            parent = self.dom.container;
                            break;

                          case "global":
                            parent = self.dom.document;
                            break;

                          default:
                            throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
                        }
                        for (i = 0; definition = mixitup.controlDefinitions[i]; i++) if (self.config.controls.live || definition.live) {
                            if (definition.parent) {
                                delagators = self.dom[definition.parent];
                                if (!delagators || delagators.length < 0) continue;
                                if (typeof delagators.length !== "number") delagators = [ delagators ];
                            } else delagators = [ parent ];
                            for (j = 0; el = delagators[j]; j++) {
                                control = self.getControl(el, definition.type, definition.selector);
                                self.controls.push(control);
                            }
                        } else {
                            controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
                            for (j = 0; el = controlElements[j]; j++) {
                                control = self.getControl(el, definition.type, "");
                                if (!control) continue;
                                self.controls.push(control);
                            }
                        }
                        self.callActions("afterInitControls", arguments);
                    },
                    getControl: function(el, type, selector) {
                        var self = this, control = null, i = -1;
                        self.callActions("beforeGetControl", arguments);
                        if (!selector) for (i = 0; control = mixitup.controls[i]; i++) if (control.el === el && control.isBound(self)) return self.callFilters("controlGetControl", null, arguments); else if (control.el === el && control.type === type && control.selector === selector) {
                            control.addBinding(self);
                            return self.callFilters("controlGetControl", control, arguments);
                        }
                        control = new mixitup.Control;
                        control.init(el, type, selector);
                        control.classNames.base = h.getClassname(self.config.classNames, type);
                        control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
                        control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
                        control.addBinding(self);
                        return self.callFilters("controlGetControl", control, arguments);
                    },
                    getToggleSelector: function() {
                        var self = this, delineator = self.config.controls.toggleLogic === "or" ? ", " : "", toggleSelector = "";
                        self.callActions("beforeGetToggleSelector", arguments);
                        self.toggleArray = h.clean(self.toggleArray);
                        toggleSelector = self.toggleArray.join(delineator);
                        if (toggleSelector === "") toggleSelector = self.config.controls.toggleDefault;
                        return self.callFilters("selectorGetToggleSelector", toggleSelector, arguments);
                    },
                    buildToggleArray: function(command, state) {
                        var self = this, activeFilterSelector = "";
                        self.callActions("beforeBuildToggleArray", arguments);
                        if (command && command.filter) activeFilterSelector = command.filter.selector.replace(/\s/g, ""); else if (state) activeFilterSelector = state.activeFilter.selector.replace(/\s/g, ""); else return;
                        if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === "all") activeFilterSelector = "";
                        if (self.config.controls.toggleLogic === "or") self.toggleArray = activeFilterSelector.split(","); else self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
                        self.toggleArray = h.clean(self.toggleArray);
                        self.callActions("afterBuildToggleArray", arguments);
                    },
                    splitCompoundSelector: function(compoundSelector) {
                        var partials = compoundSelector.split(/([\.\[])/g), toggleArray = [], selector = "", i = -1;
                        if (partials[0] === "") partials.shift();
                        for (i = 0; i < partials.length; i++) {
                            if (i % 2 === 0) selector = "";
                            selector += partials[i];
                            if (i % 2 !== 0) toggleArray.push(selector);
                        }
                        return toggleArray;
                    },
                    updateControls: function(command) {
                        var self = this, control = null, output = new mixitup.CommandMultimix, i = -1;
                        self.callActions("beforeUpdateControls", arguments);
                        if (command.filter) output.filter = command.filter.selector; else output.filter = self.state.activeFilter.selector;
                        if (command.sort) output.sort = self.buildSortString(command.sort); else output.sort = self.buildSortString(self.state.activeSort);
                        if (output.filter === self.config.selectors.target) output.filter = "all";
                        if (output.filter === "") output.filter = "none";
                        h.freeze(output);
                        for (i = 0; control = self.controls[i]; i++) control.update(output, self.toggleArray);
                        self.callActions("afterUpdateControls", arguments);
                    },
                    buildSortString: function(command) {
                        var self = this;
                        var output = "";
                        output += command.sortString;
                        if (command.next) output += " " + self.buildSortString(command.next);
                        return output;
                    },
                    insertTargets: function(command, operation) {
                        var self = this, nextSibling = null, insertionIndex = -1, frag = null, target = null, el = null, i = -1;
                        self.callActions("beforeInsertTargets", arguments);
                        if (typeof command.index === "undefined") command.index = 0;
                        nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
                        frag = self.dom.document.createDocumentFragment();
                        if (nextSibling) insertionIndex = h.index(nextSibling, self.config.selectors.target); else insertionIndex = self.targets.length;
                        if (command.collection) {
                            for (i = 0; el = command.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) > -1) throw new Error(mixitup.messages.errorInsertPreexistingElement());
                                el.style.display = "none";
                                frag.appendChild(el);
                                frag.appendChild(self.dom.document.createTextNode(" "));
                                if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                self.targets.splice(insertionIndex, 0, target);
                                insertionIndex++;
                            }
                            self.dom.parent.insertBefore(frag, nextSibling);
                        }
                        operation.startOrder = self.origOrder = self.targets;
                        self.callActions("afterInsertTargets", arguments);
                    },
                    getNextSibling: function(index, sibling, position) {
                        var self = this, element = null;
                        index = Math.max(index, 0);
                        if (sibling && position === "before") element = sibling; else if (sibling && position === "after") element = sibling.nextElementSibling || null; else if (self.targets.length > 0 && typeof index !== "undefined") element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling; else if (self.targets.length === 0 && self.dom.parent.children.length > 0) if (self.config.layout.siblingAfter) element = self.config.layout.siblingAfter; else if (self.config.layout.siblingBefore) element = self.config.layout.siblingBefore.nextElementSibling; else self.dom.parent.children[0]; else element === null;
                        return self.callFilters("elementGetNextSibling", element, arguments);
                    },
                    filterOperation: function(operation) {
                        var self = this, testResult = false, index = -1, action = "", target = null, i = -1;
                        self.callActions("beforeFilterOperation", arguments);
                        action = operation.newFilter.action;
                        for (i = 0; target = operation.newOrder[i]; i++) {
                            if (operation.newFilter.collection) testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1; else if (operation.newFilter.selector === "") testResult = false; else testResult = target.dom.el.matches(operation.newFilter.selector);
                            self.evaluateHideShow(testResult, target, action, operation);
                        }
                        if (operation.toRemove.length) for (i = 0; target = operation.show[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                            operation.show.splice(i, 1);
                            if ((index = operation.toShow.indexOf(target)) > -1) operation.toShow.splice(index, 1);
                            operation.toHide.push(target);
                            operation.hide.push(target);
                            i--;
                        }
                        operation.matching = operation.show.slice();
                        if (operation.show.length === 0 && operation.newFilter.selector !== "" && self.targets.length !== 0) operation.hasFailed = true;
                        self.callActions("afterFilterOperation", arguments);
                    },
                    evaluateHideShow: function(testResult, target, action, operation) {
                        var self = this, filteredTestResult = false, args = Array.prototype.slice.call(arguments, 1);
                        filteredTestResult = self.callFilters("testResultEvaluateHideShow", testResult, args);
                        self.callActions("beforeEvaluateHideShow", arguments);
                        if (filteredTestResult === true && action === "show" || filteredTestResult === false && action === "hide") {
                            operation.show.push(target);
                            !target.isShown && operation.toShow.push(target);
                        } else {
                            operation.hide.push(target);
                            target.isShown && operation.toHide.push(target);
                        }
                        self.callActions("afterEvaluateHideShow", arguments);
                    },
                    sortOperation: function(operation) {
                        var self = this, newOrder = [], target = null, el = null, i = -1;
                        self.callActions("beforeSortOperation", arguments);
                        operation.startOrder = self.targets;
                        if (operation.newSort.collection) {
                            newOrder = [];
                            for (i = 0; el = operation.newSort.collection[i]; i++) {
                                if (self.dom.targets.indexOf(el) < 0) throw new Error(mixitup.messages.errorSortNonExistentElement());
                                target = new mixitup.Target;
                                target.init(el, self);
                                target.isInDom = true;
                                newOrder.push(target);
                            }
                            operation.newOrder = newOrder;
                        } else if (operation.newSort.order === "random") operation.newOrder = h.arrayShuffle(operation.startOrder); else if (operation.newSort.attribute === "") {
                            operation.newOrder = self.origOrder.slice();
                            if (operation.newSort.order === "desc") operation.newOrder.reverse();
                        } else {
                            operation.newOrder = operation.startOrder.slice();
                            operation.newOrder.sort((function(a, b) {
                                return self.compare(a, b, operation.newSort);
                            }));
                        }
                        if (h.isEqualArray(operation.newOrder, operation.startOrder)) operation.willSort = false;
                        self.callActions("afterSortOperation", arguments);
                    },
                    compare: function(a, b, command) {
                        var self = this, order = command.order, attrA = self.getAttributeValue(a, command.attribute), attrB = self.getAttributeValue(b, command.attribute);
                        if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
                            attrA = attrA.toLowerCase();
                            attrB = attrB.toLowerCase();
                        } else {
                            attrA *= 1;
                            attrB *= 1;
                        }
                        if (attrA < attrB) return order === "asc" ? -1 : 1;
                        if (attrA > attrB) return order === "asc" ? 1 : -1;
                        if (attrA === attrB && command.next) return self.compare(a, b, command.next);
                        return 0;
                    },
                    getAttributeValue: function(target, attribute) {
                        var self = this, value = "";
                        value = target.dom.el.getAttribute("data-" + attribute);
                        if (value === null) if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningInconsistentSortingAttributes({
                            attribute: "data-" + attribute
                        }));
                        return self.callFilters("valueGetAttributeValue", value || 0, arguments);
                    },
                    printSort: function(isResetting, operation) {
                        var self = this, startOrder = isResetting ? operation.newOrder : operation.startOrder, newOrder = isResetting ? operation.startOrder : operation.newOrder, nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null, frag = window.document.createDocumentFragment(), whitespace = null, target = null, el = null, i = -1;
                        self.callActions("beforePrintSort", arguments);
                        for (i = 0; target = startOrder[i]; i++) {
                            el = target.dom.el;
                            if (el.style.position === "absolute") continue;
                            h.removeWhitespace(el.previousSibling);
                            el.parentElement.removeChild(el);
                        }
                        whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
                        if (whitespace && whitespace.nodeName === "#text") h.removeWhitespace(whitespace);
                        for (i = 0; target = newOrder[i]; i++) {
                            el = target.dom.el;
                            if (h.isElement(frag.lastChild)) frag.appendChild(window.document.createTextNode(" "));
                            frag.appendChild(el);
                        }
                        if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) frag.insertBefore(window.document.createTextNode(" "), frag.childNodes[0]);
                        if (nextSibling) {
                            frag.appendChild(window.document.createTextNode(" "));
                            self.dom.parent.insertBefore(frag, nextSibling);
                        } else self.dom.parent.appendChild(frag);
                        self.callActions("afterPrintSort", arguments);
                    },
                    parseSortString: function(sortString, command) {
                        var self = this, rules = sortString.split(" "), current = command, rule = [], i = -1;
                        for (i = 0; i < rules.length; i++) {
                            rule = rules[i].split(":");
                            current.sortString = rules[i];
                            current.attribute = h.dashCase(rule[0]);
                            current.order = rule[1] || "asc";
                            switch (current.attribute) {
                              case "default":
                                current.attribute = "";
                                break;

                              case "random":
                                current.attribute = "";
                                current.order = "random";
                                break;
                            }
                            if (!current.attribute || current.order === "random") break;
                            if (i < rules.length - 1) {
                                current.next = new mixitup.CommandSort;
                                h.freeze(current);
                                current = current.next;
                            }
                        }
                        return self.callFilters("commandsParseSort", command, arguments);
                    },
                    parseEffects: function() {
                        var self = this, transformName = "", effectsIn = self.config.animation.effectsIn || self.config.animation.effects, effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
                        self.callActions("beforeParseEffects", arguments);
                        self.effectsIn = new mixitup.StyleData;
                        self.effectsOut = new mixitup.StyleData;
                        self.transformIn = [];
                        self.transformOut = [];
                        self.effectsIn.opacity = self.effectsOut.opacity = 1;
                        self.parseEffect("fade", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("fade", effectsOut, self.effectsOut, self.transformOut, true);
                        for (transformName in mixitup.transformDefaults) {
                            if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) continue;
                            self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
                            self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
                        }
                        self.parseEffect("stagger", effectsIn, self.effectsIn, self.transformIn);
                        self.parseEffect("stagger", effectsOut, self.effectsOut, self.transformOut, true);
                        self.callActions("afterParseEffects", arguments);
                    },
                    parseEffect: function(effectName, effectString, effects, transform, isOut) {
                        var self = this, re = /\(([^)]+)\)/, propIndex = -1, str = "", match = [], val = "", units = [ "%", "px", "em", "rem", "vh", "vw", "deg" ], unit = "", i = -1;
                        self.callActions("beforeParseEffect", arguments);
                        if (typeof effectString !== "string") throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
                        if (effectString.indexOf(effectName) < 0) {
                            if (effectName === "stagger") self.staggerDuration = 0;
                            return;
                        }
                        propIndex = effectString.indexOf(effectName + "(");
                        if (propIndex > -1) {
                            str = effectString.substring(propIndex);
                            match = re.exec(str);
                            val = match[1];
                        }
                        switch (effectName) {
                          case "fade":
                            effects.opacity = val ? parseFloat(val) : 0;
                            break;

                          case "stagger":
                            self.staggerDuration = val ? parseFloat(val) : 100;
                            break;

                          default:
                            if (isOut && self.config.animation.reverseOut && effectName !== "scale") effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1; else effects[effectName].value = val ? parseFloat(val) : mixitup.transformDefaults[effectName].value;
                            if (val) {
                                for (i = 0; unit = units[i]; i++) if (val.indexOf(unit) > -1) {
                                    effects[effectName].unit = unit;
                                    break;
                                }
                            } else effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
                            transform.push(effectName + "(" + effects[effectName].value + effects[effectName].unit + ")");
                        }
                        self.callActions("afterParseEffect", arguments);
                    },
                    buildState: function(operation) {
                        var self = this, state = new mixitup.State, target = null, i = -1;
                        self.callActions("beforeBuildState", arguments);
                        for (i = 0; target = self.targets[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.targets.push(target.dom.el);
                        for (i = 0; target = operation.matching[i]; i++) state.matching.push(target.dom.el);
                        for (i = 0; target = operation.show[i]; i++) state.show.push(target.dom.el);
                        for (i = 0; target = operation.hide[i]; i++) if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) state.hide.push(target.dom.el);
                        state.id = self.id;
                        state.container = self.dom.container;
                        state.activeFilter = operation.newFilter;
                        state.activeSort = operation.newSort;
                        state.activeDataset = operation.newDataset;
                        state.activeContainerClassName = operation.newContainerClassName;
                        state.hasFailed = operation.hasFailed;
                        state.totalTargets = self.targets.length;
                        state.totalShow = operation.show.length;
                        state.totalHide = operation.hide.length;
                        state.totalMatching = operation.matching.length;
                        state.triggerElement = operation.triggerElement;
                        return self.callFilters("stateBuildState", state, arguments);
                    },
                    goMix: function(shouldAnimate, operation) {
                        var self = this, deferred = null;
                        self.callActions("beforeGoMix", arguments);
                        if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) shouldAnimate = false;
                        if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) shouldAnimate = false;
                        if (!operation.startState.show.length && !operation.show.length) shouldAnimate = false;
                        mixitup.events.fire("mixStart", self.dom.container, {
                            state: operation.startState,
                            futureState: operation.newState,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixStart === "function") self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
                        h.removeClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        if (!self.userDeferred) deferred = self.userDeferred = h.defer(mixitup.libraries); else deferred = self.userDeferred;
                        self.isBusy = true;
                        if (!shouldAnimate || !mixitup.features.has.transitions) {
                            if (self.config.debug.fauxAsync) setTimeout((function() {
                                self.cleanUp(operation);
                            }), self.config.animation.duration); else self.cleanUp(operation);
                            return self.callFilters("promiseGoMix", deferred.promise, arguments);
                        }
                        if (window.pageYOffset !== operation.docState.scrollTop) window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
                        if (self.config.animation.applyPerspective) {
                            self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
                            self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
                        }
                        if (self.config.animation.animateResizeContainer && operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (self.config.animation.animateResizeContainer && operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight) self.dom.parent.style.height = operation.startHeight + "px";
                        if (operation.startWidth === operation.newWidth) self.dom.parent.style.width = operation.startWidth + "px";
                        if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) self.dom.parent.style.overflow = "hidden";
                        requestAnimationFrame((function() {
                            self.moveTargets(operation);
                        }));
                        return self.callFilters("promiseGoMix", deferred.promise, arguments);
                    },
                    getStartMixData: function(operation) {
                        var self = this, parentStyle = window.getComputedStyle(self.dom.parent), parentRect = self.dom.parent.getBoundingClientRect(), target = null, data = {}, i = -1, boxSizing = parentStyle[mixitup.features.boxSizingProp];
                        self.incPadding = boxSizing === "border-box";
                        self.callActions("beforeGetStartMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            data = target.getPosData();
                            operation.showPosData[i] = {
                                startPosData: data
                            };
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            data = target.getPosData();
                            operation.toHidePosData[i] = {
                                startPosData: data
                            };
                        }
                        operation.startX = parentRect.left;
                        operation.startY = parentRect.top;
                        operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        self.callActions("afterGetStartMixData", arguments);
                    },
                    setInter: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetInter", arguments);
                        if (self.config.animation.clampHeight) {
                            self.dom.parent.style.height = operation.startHeight + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        if (self.config.animation.clampWidth) {
                            self.dom.parent.style.width = operation.startWidth + "px";
                            self.dom.parent.style.overflow = "hidden";
                        }
                        for (i = 0; target = operation.toShow[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterSetInter", arguments);
                    },
                    getInterMixData: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeGetInterMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].interPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].interPosData = target.getPosData();
                        self.callActions("afterGetInterMixData", arguments);
                    },
                    setFinal: function(operation) {
                        var self = this, target = null, i = -1;
                        self.callActions("beforeSetFinal", arguments);
                        operation.willSort && self.printSort(false, operation);
                        for (i = 0; target = operation.toHide[i]; i++) target.hide();
                        self.callActions("afterSetFinal", arguments);
                    },
                    getFinalMixData: function(operation) {
                        var self = this, parentStyle = null, parentRect = null, target = null, i = -1;
                        self.callActions("beforeGetFinalMixData", arguments);
                        for (i = 0; target = operation.show[i]; i++) operation.showPosData[i].finalPosData = target.getPosData();
                        for (i = 0; target = operation.toHide[i]; i++) operation.toHidePosData[i].finalPosData = target.getPosData();
                        if (self.config.animation.clampHeight || self.config.animation.clampWidth) self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = "";
                        if (!self.incPadding) parentStyle = window.getComputedStyle(self.dom.parent);
                        parentRect = self.dom.parent.getBoundingClientRect();
                        operation.newX = parentRect.left;
                        operation.newY = parentRect.top;
                        operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
                        operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
                        operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
                        operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;
                        if (operation.willSort) self.printSort(true, operation);
                        for (i = 0; target = operation.toShow[i]; i++) target.hide();
                        for (i = 0; target = operation.toHide[i]; i++) target.show();
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.newContainerClassName);
                            h.addClass(self.dom.container, self.config.layout.containerClassName);
                        }
                        self.callActions("afterGetFinalMixData", arguments);
                    },
                    getTweenData: function(operation) {
                        var self = this, target = null, posData = null, effectNames = Object.getOwnPropertyNames(self.effectsIn), effectName = "", effect = null, widthChange = -1, heightChange = -1, i = -1, j = -1;
                        self.callActions("beforeGetTweenData", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            if (target.isShown) {
                                posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
                                posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
                            } else posData.posIn.x = posData.posIn.y = 0;
                            posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
                            posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
                            posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
                            posData.posOut.opacity = 1;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            if (!target.isShown && !self.config.animation.nudge) {
                                posData.posIn.x = posData.posOut.x;
                                posData.posIn.y = posData.posOut.y;
                            }
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                                posData.posOut.width = posData.finalPosData.width;
                                posData.posOut.height = posData.finalPosData.height;
                                widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
                                posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
                                heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
                                posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
                                posData.tweenData.width = posData.posOut.width - posData.posIn.width;
                                posData.tweenData.height = posData.posOut.height - posData.posIn.height;
                                posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
                                posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
                            }
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsIn[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = effect.value;
                                posData.posOut[effectName].value = 0;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            posData.posIn = new mixitup.StyleData;
                            posData.posOut = new mixitup.StyleData;
                            posData.tweenData = new mixitup.StyleData;
                            posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
                            posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
                            posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
                            posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
                            posData.tweenData.x = posData.posOut.x - posData.posIn.x;
                            posData.tweenData.y = posData.posOut.y - posData.posIn.y;
                            if (self.config.animation.animateResizeTargets) {
                                posData.posIn.width = posData.startPosData.width;
                                posData.posIn.height = posData.startPosData.height;
                                widthChange = posData.startPosData.width - posData.interPosData.width;
                                posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
                                heightChange = posData.startPosData.height - posData.interPosData.height;
                                posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
                            }
                            posData.posIn.opacity = 1;
                            posData.posOut.opacity = self.effectsOut.opacity;
                            posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
                            for (j = 0; effectName = effectNames[j]; j++) {
                                effect = self.effectsOut[effectName];
                                if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
                                posData.posIn[effectName].value = 0;
                                posData.posOut[effectName].value = effect.value;
                                posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
                                posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
                            }
                        }
                        self.callActions("afterGetTweenData", arguments);
                    },
                    moveTargets: function(operation) {
                        var self = this, target = null, moveData = null, posData = null, statusChange = "", willTransition = false, staggerIndex = -1, i = -1, checkProgress = self.checkProgress.bind(self);
                        self.callActions("beforeMoveTargets", arguments);
                        for (i = 0; target = operation.show[i]; i++) {
                            moveData = new mixitup.IMoveData;
                            posData = operation.showPosData[i];
                            statusChange = target.isShown ? "none" : "show";
                            willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
                            if (willTransition) staggerIndex++;
                            target.show();
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = staggerIndex;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            posData = operation.toHidePosData[i];
                            moveData = new mixitup.IMoveData;
                            statusChange = "hide";
                            willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
                            moveData.posIn = posData.posIn;
                            moveData.posOut = posData.posOut;
                            moveData.statusChange = statusChange;
                            moveData.staggerIndex = i;
                            moveData.operation = operation;
                            moveData.callback = willTransition ? checkProgress : null;
                            target.move(moveData);
                        }
                        if (self.config.animation.animateResizeContainer) {
                            self.dom.parent.style[mixitup.features.transitionProp] = "height " + self.config.animation.duration + "ms ease, " + "width " + self.config.animation.duration + "ms ease ";
                            requestAnimationFrame((function() {
                                if (operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) self.dom.parent.style.height = operation.newHeight + "px";
                                if (operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) self.dom.parent.style.width = operation.newWidth + "px";
                            }));
                        }
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        self.callActions("afterMoveTargets", arguments);
                    },
                    hasEffect: function() {
                        var self = this, EFFECTABLES = [ "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ], effectName = "", effect = null, result = false, value = -1, i = -1;
                        if (self.effectsIn.opacity !== 1) return self.callFilters("resultHasEffect", true, arguments);
                        for (i = 0; effectName = EFFECTABLES[i]; i++) {
                            effect = self.effectsIn[effectName];
                            value = typeof effect && effect.value !== "undefined" ? effect.value : effect;
                            if (value !== 0) {
                                result = true;
                                break;
                            }
                        }
                        return self.callFilters("resultHasEffect", result, arguments);
                    },
                    willTransition: function(statusChange, hasEffect, posIn, posOut) {
                        var self = this, result = false;
                        if (!h.isVisible(self.dom.container)) result = false; else if (statusChange !== "none" && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) result = true; else if (self.config.animation.animateResizeTargets) result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop; else result = false;
                        return self.callFilters("resultWillTransition", result, arguments);
                    },
                    checkProgress: function(operation) {
                        var self = this;
                        self.targetsDone++;
                        if (self.targetsBound === self.targetsDone) self.cleanUp(operation);
                    },
                    cleanUp: function(operation) {
                        var self = this, target = null, whitespaceBefore = null, whitespaceAfter = null, nextInQueue = null, i = -1;
                        self.callActions("beforeCleanUp", arguments);
                        self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
                        for (i = 0; target = operation.show[i]; i++) {
                            target.cleanUp();
                            target.show();
                        }
                        for (i = 0; target = operation.toHide[i]; i++) {
                            target.cleanUp();
                            target.hide();
                        }
                        if (operation.willSort) self.printSort(false, operation);
                        self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = "";
                        if (operation.willChangeLayout) {
                            h.removeClass(self.dom.container, operation.startContainerClassName);
                            h.addClass(self.dom.container, operation.newContainerClassName);
                        }
                        if (operation.toRemove.length) {
                            for (i = 0; target = self.targets[i]; i++) if (operation.toRemove.indexOf(target) > -1) {
                                if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === "#text" && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === "#text") h.removeWhitespace(whitespaceBefore);
                                if (!operation.willSort) self.dom.parent.removeChild(target.dom.el);
                                self.targets.splice(i, 1);
                                target.isInDom = false;
                                i--;
                            }
                            self.origOrder = self.targets;
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        self.state = operation.newState;
                        self.lastOperation = operation;
                        self.dom.targets = self.state.targets;
                        mixitup.events.fire("mixEnd", self.dom.container, {
                            state: self.state,
                            instance: self
                        }, self.dom.document);
                        if (typeof self.config.callbacks.onMixEnd === "function") self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
                        if (operation.hasFailed) {
                            mixitup.events.fire("mixFail", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixFail === "function") self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
                            h.addClass(self.dom.container, h.getClassname(self.config.classNames, "container", self.config.classNames.modifierFailed));
                        }
                        if (typeof self.userCallback === "function") self.userCallback.call(self.dom.container, self.state, self);
                        if (typeof self.userDeferred.resolve === "function") self.userDeferred.resolve(self.state);
                        self.userCallback = null;
                        self.userDeferred = null;
                        self.lastClicked = null;
                        self.isToggling = false;
                        self.isBusy = false;
                        if (self.queue.length) {
                            self.callActions("beforeReadQueueCleanUp", arguments);
                            nextInQueue = self.queue.shift();
                            self.userDeferred = nextInQueue.deferred;
                            self.isToggling = nextInQueue.isToggling;
                            self.lastClicked = nextInQueue.triggerElement;
                            if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) self.multimix.apply(self, nextInQueue.args); else self.dataset.apply(self, nextInQueue.args);
                        }
                        self.callActions("afterCleanUp", arguments);
                    },
                    parseMultimixArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandMultimix;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) instruction.command.insert = self.parseInsertArgs([ instruction.command.insert ]).command;
                        if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) instruction.command.remove = self.parseRemoveArgs([ instruction.command.remove ]).command;
                        if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) instruction.command.filter = self.parseFilterArgs([ instruction.command.filter ]).command;
                        if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) instruction.command.sort = self.parseSortArgs([ instruction.command.sort ]).command;
                        if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) instruction.command.changeLayout = self.parseChangeLayoutArgs([ instruction.command.changeLayout ]).command;
                        instruction = self.callFilters("instructionParseMultimixArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseFilterArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandFilter;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (typeof arg === "string") instruction.command.selector = arg; else if (arg === null) instruction.command.collection = []; else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else if (typeof arg === "object" && typeof arg.length !== "undefined") instruction.command.collection = h.arrayFromList(arg); else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.selector && instruction.command.collection) throw new Error(mixitup.messages.errorFilterInvalidArguments());
                        instruction = self.callFilters("instructionParseFilterArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseSortArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, sortString = "", i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandSort;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                sortString = arg;
                                break;

                              case "object":
                                if (arg.length) instruction.command.collection = h.arrayFromList(arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (sortString) instruction.command = self.parseSortString(sortString, instruction.command);
                        instruction = self.callFilters("instructionParseSortArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseInsertArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandInsert;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            if (typeof arg === "number") instruction.command.index = arg; else if (typeof arg === "string" && [ "before", "after" ].indexOf(arg) > -1) instruction.command.position = arg; else if (typeof arg === "string") instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes); else if (typeof arg === "object" && h.isElement(arg, self.dom.document)) !instruction.command.collection.length ? instruction.command.collection = [ arg ] : instruction.command.sibling = arg; else if (typeof arg === "object" && arg.length) !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0]; else if (typeof arg === "object" && arg.childNodes && arg.childNodes.length) !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0]; else if (typeof arg === "object") h.extend(instruction.command, arg); else if (typeof arg === "boolean") instruction.animate = arg; else if (typeof arg === "function") instruction.callback = arg;
                        }
                        if (instruction.command.index && instruction.command.sibling) throw new Error(mixitup.messages.errorInsertInvalidArguments());
                        if (!instruction.command.collection.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningInsertNoElements());
                        instruction = self.callFilters("instructionParseInsertArgs", instruction, arguments);
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseRemoveArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, target = null, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandRemove;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "number":
                                if (self.targets[arg]) instruction.command.targets[0] = self.targets[arg];
                                break;

                              case "string":
                                instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
                                break;

                              case "object":
                                if (arg && arg.length) instruction.command.collection = arg; else if (h.isElement(arg, self.dom.document)) instruction.command.collection = [ arg ]; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        if (instruction.command.collection.length) for (i = 0; target = self.targets[i]; i++) if (instruction.command.collection.indexOf(target.dom.el) > -1) instruction.command.targets.push(target);
                        if (!instruction.command.targets.length && self.config.debug.showWarnings) console.warn(mixitup.messages.warningRemoveNoElements());
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseDatasetArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandDataset;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "object":
                                if (Array.isArray(arg) || typeof arg.length === "number") instruction.command.dataset = arg; else h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    parseChangeLayoutArgs: function(args) {
                        var self = this, instruction = new mixitup.UserInstruction, arg = null, i = -1;
                        instruction.animate = self.config.animation.enable;
                        instruction.command = new mixitup.CommandChangeLayout;
                        for (i = 0; i < args.length; i++) {
                            arg = args[i];
                            if (arg === null) continue;
                            switch (typeof arg) {
                              case "string":
                                instruction.command.containerClassName = arg;
                                break;

                              case "object":
                                h.extend(instruction.command, arg);
                                break;

                              case "boolean":
                                instruction.animate = arg;
                                break;

                              case "function":
                                instruction.callback = arg;
                                break;
                            }
                        }
                        h.freeze(instruction);
                        return instruction;
                    },
                    queueMix: function(queueItem) {
                        var self = this, deferred = null, toggleSelector = "";
                        self.callActions("beforeQueueMix", arguments);
                        deferred = h.defer(mixitup.libraries);
                        if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
                            queueItem.deferred = deferred;
                            self.queue.push(queueItem);
                            if (self.config.controls.enable) if (self.isToggling) {
                                self.buildToggleArray(queueItem.instruction.command);
                                toggleSelector = self.getToggleSelector();
                                self.updateControls({
                                    filter: {
                                        selector: toggleSelector
                                    }
                                });
                            } else self.updateControls(queueItem.instruction.command);
                        } else {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
                            deferred.resolve(self.state);
                            mixitup.events.fire("mixBusy", self.dom.container, {
                                state: self.state,
                                instance: self
                            }, self.dom.document);
                            if (typeof self.config.callbacks.onMixBusy === "function") self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
                        }
                        return self.callFilters("promiseQueueMix", deferred.promise, arguments);
                    },
                    getDataOperation: function(newDataset) {
                        var self = this, operation = new mixitup.Operation, startDataset = [];
                        operation = self.callFilters("operationUnmappedGetDataOperation", operation, arguments);
                        if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) throw new Error(mixitup.messages.errorDatasetNotSet());
                        operation.id = h.randomHex();
                        operation.startState = self.state;
                        operation.startDataset = startDataset;
                        operation.newDataset = newDataset.slice();
                        self.diffDatasets(operation);
                        operation.startOrder = self.targets;
                        operation.newOrder = operation.show;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        self.targets = operation.show.slice();
                        operation.newState = self.buildState(operation);
                        Array.prototype.push.apply(self.targets, operation.toRemove);
                        operation = self.callFilters("operationMappedGetDataOperation", operation, arguments);
                        return operation;
                    },
                    diffDatasets: function(operation) {
                        var self = this, persistantStartIds = [], persistantNewIds = [], insertedTargets = [], data = null, target = null, el = null, frag = null, nextEl = null, uids = {}, id = "", i = -1;
                        self.callActions("beforeDiffDatasets", arguments);
                        for (i = 0; data = operation.newDataset[i]; i++) {
                            if (typeof (id = data[self.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: self.config.data.uidKey
                            }));
                            if (!uids[id]) uids[id] = true; else throw new Error(mixitup.messages.errorDatasetDuplicateUid({
                                uid: id
                            }));
                            if ((target = self.cache[id]) instanceof mixitup.Target) {
                                if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
                                    el = target.render(data);
                                    target.data = data;
                                    if (el !== target.dom.el) {
                                        if (target.isInDom) {
                                            target.unbindEvents();
                                            self.dom.parent.replaceChild(el, target.dom.el);
                                        }
                                        if (!target.isShown) el.style.display = "none";
                                        target.dom.el = el;
                                        if (target.isInDom) target.bindEvents();
                                    }
                                }
                                el = target.dom.el;
                            } else {
                                target = new mixitup.Target;
                                target.init(null, self, data);
                                target.hide();
                            }
                            if (!target.isInDom) {
                                if (!frag) frag = self.dom.document.createDocumentFragment();
                                if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                frag.appendChild(target.dom.el);
                                target.isInDom = true;
                                target.unbindEvents();
                                target.bindEvents();
                                target.hide();
                                operation.toShow.push(target);
                                insertedTargets.push(target);
                            } else {
                                nextEl = target.dom.el.nextElementSibling;
                                persistantNewIds.push(id);
                                if (frag) {
                                    if (frag.lastElementChild) frag.appendChild(self.dom.document.createTextNode(" "));
                                    self.insertDatasetFrag(frag, target.dom.el, insertedTargets);
                                    frag = null;
                                }
                            }
                            operation.show.push(target);
                        }
                        if (frag) {
                            nextEl = nextEl || self.config.layout.siblingAfter;
                            if (nextEl) frag.appendChild(self.dom.document.createTextNode(" "));
                            self.insertDatasetFrag(frag, nextEl, insertedTargets);
                        }
                        for (i = 0; data = operation.startDataset[i]; i++) {
                            id = data[self.config.data.uidKey];
                            target = self.cache[id];
                            if (operation.show.indexOf(target) < 0) {
                                operation.hide.push(target);
                                operation.toHide.push(target);
                                operation.toRemove.push(target);
                            } else persistantStartIds.push(id);
                        }
                        if (!h.isEqualArray(persistantStartIds, persistantNewIds)) operation.willSort = true;
                        self.callActions("afterDiffDatasets", arguments);
                    },
                    insertDatasetFrag: function(frag, nextEl, targets) {
                        var self = this;
                        var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;
                        self.dom.parent.insertBefore(frag, nextEl);
                        while (targets.length) {
                            self.targets.splice(insertAt, 0, targets.shift());
                            insertAt++;
                        }
                    },
                    willSort: function(sortCommandA, sortCommandB) {
                        var self = this, result = false;
                        if (self.config.behavior.liveSort || sortCommandA.order === "random" || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) result = true; else if (sortCommandA.next && sortCommandB.next) result = self.willSort(sortCommandA.next, sortCommandB.next); else result = false;
                        return self.callFilters("resultWillSort", result, arguments);
                    },
                    show: function() {
                        var self = this;
                        return self.filter("all");
                    },
                    hide: function() {
                        var self = this;
                        return self.filter("none");
                    },
                    isMixing: function() {
                        var self = this;
                        return self.isBusy;
                    },
                    filter: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments);
                        return self.multimix({
                            filter: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOn: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, toggleSelector = "";
                        self.isToggling = true;
                        if (self.toggleArray.indexOf(selector) < 0) self.toggleArray.push(selector);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    toggleOff: function() {
                        var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, selectorIndex = self.toggleArray.indexOf(selector), toggleSelector = "";
                        self.isToggling = true;
                        if (selectorIndex > -1) self.toggleArray.splice(selectorIndex, 1);
                        toggleSelector = self.getToggleSelector();
                        return self.multimix({
                            filter: toggleSelector
                        }, instruction.animate, instruction.callback);
                    },
                    sort: function() {
                        var self = this, instruction = self.parseSortArgs(arguments);
                        return self.multimix({
                            sort: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    changeLayout: function() {
                        var self = this, instruction = self.parseChangeLayoutArgs(arguments);
                        return self.multimix({
                            changeLayout: instruction.command
                        }, instruction.animate, instruction.callback);
                    },
                    dataset: function() {
                        var self = this, instruction = self.parseDatasetArgs(arguments), operation = null, queueItem = null, animate = false;
                        self.callActions("beforeDataset", arguments);
                        if (!self.isBusy) {
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            operation = self.getDataOperation(instruction.command.dataset);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            return self.queueMix(queueItem);
                        }
                    },
                    multimix: function() {
                        var self = this, operation = null, animate = false, queueItem = null, instruction = self.parseMultimixArgs(arguments);
                        self.callActions("beforeMultimix", arguments);
                        if (!self.isBusy) {
                            operation = self.getOperation(instruction.command);
                            if (self.config.controls.enable) {
                                if (instruction.command.filter && !self.isToggling) {
                                    self.toggleArray.length = 0;
                                    self.buildToggleArray(operation.command);
                                }
                                if (self.queue.length < 1) self.updateControls(operation.command);
                            }
                            if (instruction.callback) self.userCallback = instruction.callback;
                            animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
                            self.callFilters("operationMultimix", operation, arguments);
                            return self.goMix(animate, operation);
                        } else {
                            queueItem = new mixitup.QueueItem;
                            queueItem.args = arguments;
                            queueItem.instruction = instruction;
                            queueItem.triggerElement = self.lastClicked;
                            queueItem.isToggling = self.isToggling;
                            return self.queueMix(queueItem);
                        }
                    },
                    getOperation: function(multimixCommand) {
                        var self = this, sortCommand = multimixCommand.sort, filterCommand = multimixCommand.filter, changeLayoutCommand = multimixCommand.changeLayout, removeCommand = multimixCommand.remove, insertCommand = multimixCommand.insert, operation = new mixitup.Operation;
                        operation = self.callFilters("operationUnmappedGetOperation", operation, arguments);
                        operation.id = h.randomHex();
                        operation.command = multimixCommand;
                        operation.startState = self.state;
                        operation.triggerElement = self.lastClicked;
                        if (self.isBusy) {
                            if (self.config.debug.showWarnings) console.warn(mixitup.messages.warningGetOperationInstanceBusy());
                            return null;
                        }
                        if (insertCommand) self.insertTargets(insertCommand, operation);
                        if (removeCommand) operation.toRemove = removeCommand.targets;
                        operation.startSort = operation.newSort = operation.startState.activeSort;
                        operation.startOrder = operation.newOrder = self.targets;
                        if (sortCommand) {
                            operation.startSort = operation.startState.activeSort;
                            operation.newSort = sortCommand;
                            operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
                            if (operation.willSort) self.sortOperation(operation);
                        }
                        operation.startFilter = operation.startState.activeFilter;
                        if (filterCommand) operation.newFilter = filterCommand; else operation.newFilter = h.extend(new mixitup.CommandFilter, operation.startFilter);
                        if (operation.newFilter.selector === "all") operation.newFilter.selector = self.config.selectors.target; else if (operation.newFilter.selector === "none") operation.newFilter.selector = "";
                        self.filterOperation(operation);
                        operation.startContainerClassName = operation.startState.activeContainerClassName;
                        if (changeLayoutCommand) {
                            operation.newContainerClassName = changeLayoutCommand.containerClassName;
                            if (operation.newContainerClassName !== operation.startContainerClassName) operation.willChangeLayout = true;
                        } else operation.newContainerClassName = operation.startContainerClassName;
                        if (self.config.animation.enable) {
                            self.getStartMixData(operation);
                            self.setInter(operation);
                            operation.docState = h.getDocumentState(self.dom.document);
                            self.getInterMixData(operation);
                            self.setFinal(operation);
                            self.getFinalMixData(operation);
                            self.parseEffects();
                            operation.hasEffect = self.hasEffect();
                            self.getTweenData(operation);
                        }
                        if (operation.willSort) self.targets = operation.newOrder;
                        operation.newState = self.buildState(operation);
                        return self.callFilters("operationMappedGetOperation", operation, arguments);
                    },
                    tween: function(operation, multiplier) {
                        var target = null, posData = null, toHideIndex = -1, i = -1;
                        multiplier = Math.min(multiplier, 1);
                        multiplier = Math.max(multiplier, 0);
                        for (i = 0; target = operation.show[i]; i++) {
                            posData = operation.showPosData[i];
                            target.applyTween(posData, multiplier);
                        }
                        for (i = 0; target = operation.hide[i]; i++) {
                            if (target.isShown) target.hide();
                            if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
                                posData = operation.toHidePosData[toHideIndex];
                                if (!target.isShown) target.show();
                                target.applyTween(posData, multiplier);
                            }
                        }
                    },
                    insert: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.multimix({
                            insert: args.command
                        }, args.animate, args.callback);
                    },
                    insertBefore: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "before", args.command.sibling, args.animate, args.callback);
                    },
                    insertAfter: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(args.command.collection, "after", args.command.sibling, args.animate, args.callback);
                    },
                    prepend: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(0, args.command.collection, args.animate, args.callback);
                    },
                    append: function() {
                        var self = this, args = self.parseInsertArgs(arguments);
                        return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
                    },
                    remove: function() {
                        var self = this, args = self.parseRemoveArgs(arguments);
                        return self.multimix({
                            remove: args.command
                        }, args.animate, args.callback);
                    },
                    getConfig: function(stringKey) {
                        var self = this, value = null;
                        if (!stringKey) value = self.config; else value = h.getProperty(self.config, stringKey);
                        return self.callFilters("valueGetConfig", value, arguments);
                    },
                    configure: function(config) {
                        var self = this;
                        self.callActions("beforeConfigure", arguments);
                        h.extend(self.config, config, true, true);
                        self.callActions("afterConfigure", arguments);
                    },
                    getState: function() {
                        var self = this, state = null;
                        state = new mixitup.State;
                        h.extend(state, self.state);
                        h.freeze(state);
                        return self.callFilters("stateGetState", state, arguments);
                    },
                    forceRefresh: function() {
                        var self = this;
                        self.indexTargets();
                    },
                    forceRender: function() {
                        var self = this, target = null, el = null, id = "";
                        for (id in self.cache) {
                            target = self.cache[id];
                            el = target.render(target.data);
                            if (el !== target.dom.el) {
                                if (target.isInDom) {
                                    target.unbindEvents();
                                    self.dom.parent.replaceChild(el, target.dom.el);
                                }
                                if (!target.isShown) el.style.display = "none";
                                target.dom.el = el;
                                if (target.isInDom) target.bindEvents();
                            }
                        }
                        self.state = self.buildState(self.lastOperation);
                    },
                    destroy: function(cleanUp) {
                        var self = this, control = null, target = null, i = 0;
                        self.callActions("beforeDestroy", arguments);
                        for (i = 0; control = self.controls[i]; i++) control.removeBinding(self);
                        for (i = 0; target = self.targets[i]; i++) {
                            if (cleanUp) target.show();
                            target.unbindEvents();
                        }
                        if (self.dom.container.id.match(/^MixItUp/)) self.dom.container.removeAttribute("id");
                        delete mixitup.instances[self.id];
                        self.callActions("afterDestroy", arguments);
                    }
                });
                mixitup.IMoveData = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.posIn = null;
                    this.posOut = null;
                    this.operation = null;
                    this.callback = null;
                    this.statusChange = "";
                    this.duration = -1;
                    this.staggerIndex = -1;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.IMoveData);
                mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
                mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
                mixitup.TargetDom = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.el = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.TargetDom);
                mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
                mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
                mixitup.Target = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.sortString = "";
                    this.mixer = null;
                    this.callback = null;
                    this.isShown = false;
                    this.isBound = false;
                    this.isExcluded = false;
                    this.isInDom = false;
                    this.handler = null;
                    this.operation = null;
                    this.data = null;
                    this.dom = new mixitup.TargetDom;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Target);
                mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Target.prototype, {
                    constructor: mixitup.Target,
                    init: function(el, mixer, data) {
                        var self = this, id = "";
                        self.callActions("beforeInit", arguments);
                        self.mixer = mixer;
                        if (!el) el = self.render(data);
                        self.cacheDom(el);
                        self.bindEvents();
                        if (self.dom.el.style.display !== "none") self.isShown = true;
                        if (data && mixer.config.data.uidKey) {
                            if (typeof (id = data[mixer.config.data.uidKey]) === "undefined" || id.toString().length < 1) throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
                                uidKey: mixer.config.data.uidKey
                            }));
                            self.id = id;
                            self.data = data;
                            mixer.cache[id] = self;
                        }
                        self.callActions("afterInit", arguments);
                    },
                    render: function(data) {
                        var self = this, render = null, el = null, temp = null, output = "";
                        self.callActions("beforeRender", arguments);
                        render = self.callFilters("renderRender", self.mixer.config.render.target, arguments);
                        if (typeof render !== "function") throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
                        output = render(data);
                        if (output && typeof output === "object" && h.isElement(output)) el = output; else if (typeof output === "string") {
                            temp = document.createElement("div");
                            temp.innerHTML = output;
                            el = temp.firstElementChild;
                        }
                        return self.callFilters("elRender", el, arguments);
                    },
                    cacheDom: function(el) {
                        var self = this;
                        self.callActions("beforeCacheDom", arguments);
                        self.dom.el = el;
                        self.callActions("afterCacheDom", arguments);
                    },
                    getSortString: function(attributeName) {
                        var self = this, value = self.dom.el.getAttribute("data-" + attributeName) || "";
                        self.callActions("beforeGetSortString", arguments);
                        value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
                        self.sortString = value;
                        self.callActions("afterGetSortString", arguments);
                    },
                    show: function() {
                        var self = this;
                        self.callActions("beforeShow", arguments);
                        if (!self.isShown) {
                            self.dom.el.style.display = "";
                            self.isShown = true;
                        }
                        self.callActions("afterShow", arguments);
                    },
                    hide: function() {
                        var self = this;
                        self.callActions("beforeHide", arguments);
                        if (self.isShown) {
                            self.dom.el.style.display = "none";
                            self.isShown = false;
                        }
                        self.callActions("afterHide", arguments);
                    },
                    move: function(moveData) {
                        var self = this;
                        self.callActions("beforeMove", arguments);
                        if (!self.isExcluded) self.mixer.targetsMoved++;
                        self.applyStylesIn(moveData);
                        requestAnimationFrame((function() {
                            self.applyStylesOut(moveData);
                        }));
                        self.callActions("afterMove", arguments);
                    },
                    applyTween: function(posData, multiplier) {
                        var self = this, propertyName = "", tweenData = null, posIn = posData.posIn, currentTransformValues = [], currentValues = new mixitup.StyleData, i = -1;
                        self.callActions("beforeApplyTween", arguments);
                        currentValues.x = posIn.x;
                        currentValues.y = posIn.y;
                        if (multiplier === 0) self.hide(); else if (!self.isShown) self.show();
                        for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
                            tweenData = posData.tweenData[propertyName];
                            if (propertyName === "x") {
                                if (!tweenData) continue;
                                currentValues.x = posIn.x + tweenData * multiplier;
                            } else if (propertyName === "y") {
                                if (!tweenData) continue;
                                currentValues.y = posIn.y + tweenData * multiplier;
                            } else if (tweenData instanceof mixitup.TransformData) {
                                if (!tweenData.value) continue;
                                currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;
                                currentValues[propertyName].unit = tweenData.unit;
                                currentTransformValues.push(propertyName + "(" + currentValues[propertyName].value + tweenData.unit + ")");
                            } else {
                                if (!tweenData) continue;
                                currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;
                                self.dom.el.style[propertyName] = currentValues[propertyName];
                            }
                        }
                        if (currentValues.x || currentValues.y) currentTransformValues.unshift("translate(" + currentValues.x + "px, " + currentValues.y + "px)");
                        if (currentTransformValues.length) self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(" ");
                        self.callActions("afterApplyTween", arguments);
                    },
                    applyStylesIn: function(moveData) {
                        var self = this, posIn = moveData.posIn, isFading = self.mixer.effectsIn.opacity !== 1, transformValues = [];
                        self.callActions("beforeApplyStylesIn", arguments);
                        transformValues.push("translate(" + posIn.x + "px, " + posIn.y + "px)");
                        if (self.mixer.config.animation.animateResizeTargets) {
                            if (moveData.statusChange !== "show") {
                                self.dom.el.style.width = posIn.width + "px";
                                self.dom.el.style.height = posIn.height + "px";
                            }
                            self.dom.el.style.marginRight = posIn.marginRight + "px";
                            self.dom.el.style.marginBottom = posIn.marginBottom + "px";
                        }
                        isFading && (self.dom.el.style.opacity = posIn.opacity);
                        if (moveData.statusChange === "show") transformValues = transformValues.concat(self.mixer.transformIn);
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesIn", arguments);
                    },
                    applyStylesOut: function(moveData) {
                        var self = this, transitionRules = [], transformValues = [], isResizing = self.mixer.config.animation.animateResizeTargets, isFading = typeof self.mixer.effectsIn.opacity !== "undefined";
                        self.callActions("beforeApplyStylesOut", arguments);
                        transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
                        if (moveData.statusChange !== "none") transitionRules.push(self.writeTransitionRule("opacity", moveData.staggerIndex, moveData.duration));
                        if (isResizing) {
                            transitionRules.push(self.writeTransitionRule("width", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("height", moveData.staggerIndex, moveData.duration));
                            transitionRules.push(self.writeTransitionRule("margin", moveData.staggerIndex, moveData.duration));
                        }
                        if (!moveData.callback) {
                            self.mixer.targetsImmovable++;
                            if (self.mixer.targetsMoved === self.mixer.targetsImmovable) self.mixer.cleanUp(moveData.operation);
                            return;
                        }
                        self.operation = moveData.operation;
                        self.callback = moveData.callback;
                        !self.isExcluded && self.mixer.targetsBound++;
                        self.isBound = true;
                        self.applyTransition(transitionRules);
                        if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
                            self.dom.el.style.width = moveData.posOut.width + "px";
                            self.dom.el.style.height = moveData.posOut.height + "px";
                            self.dom.el.style.marginRight = moveData.posOut.marginRight + "px";
                            self.dom.el.style.marginBottom = moveData.posOut.marginBottom + "px";
                        }
                        if (!self.mixer.config.animation.nudge && moveData.statusChange === "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        switch (moveData.statusChange) {
                          case "hide":
                            isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
                            transformValues = transformValues.concat(self.mixer.transformOut);
                            break;

                          case "show":
                            isFading && (self.dom.el.style.opacity = 1);
                        }
                        if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== "hide") transformValues.push("translate(" + moveData.posOut.x + "px, " + moveData.posOut.y + "px)");
                        self.dom.el.style[mixitup.features.transformProp] = transformValues.join(" ");
                        self.callActions("afterApplyStylesOut", arguments);
                    },
                    writeTransitionRule: function(property, staggerIndex, duration) {
                        var self = this, delay = self.getDelay(staggerIndex), rule = "";
                        rule = property + " " + (duration > 0 ? duration : self.mixer.config.animation.duration) + "ms " + delay + "ms " + (property === "opacity" ? "linear" : self.mixer.config.animation.easing);
                        return self.callFilters("ruleWriteTransitionRule", rule, arguments);
                    },
                    getDelay: function(index) {
                        var self = this, delay = -1;
                        if (typeof self.mixer.config.animation.staggerSequence === "function") index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
                        delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
                        return self.callFilters("delayGetDelay", delay, arguments);
                    },
                    applyTransition: function(rules) {
                        var self = this, transitionString = rules.join(", ");
                        self.callActions("beforeApplyTransition", arguments);
                        self.dom.el.style[mixitup.features.transitionProp] = transitionString;
                        self.callActions("afterApplyTransition", arguments);
                    },
                    handleTransitionEnd: function(e) {
                        var self = this, propName = e.propertyName, canResize = self.mixer.config.animation.animateResizeTargets;
                        self.callActions("beforeHandleTransitionEnd", arguments);
                        if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf("transform") > -1 || propName.indexOf("opacity") > -1 || canResize && propName.indexOf("height") > -1 || canResize && propName.indexOf("width") > -1 || canResize && propName.indexOf("margin") > -1)) {
                            self.callback.call(self, self.operation);
                            self.isBound = false;
                            self.callback = null;
                            self.operation = null;
                        }
                        self.callActions("afterHandleTransitionEnd", arguments);
                    },
                    eventBus: function(e) {
                        var self = this;
                        self.callActions("beforeEventBus", arguments);
                        switch (e.type) {
                          case "webkitTransitionEnd":
                          case "transitionend":
                            self.handleTransitionEnd(e);
                        }
                        self.callActions("afterEventBus", arguments);
                    },
                    unbindEvents: function() {
                        var self = this;
                        self.callActions("beforeUnbindEvents", arguments);
                        h.off(self.dom.el, "webkitTransitionEnd", self.handler);
                        h.off(self.dom.el, "transitionend", self.handler);
                        self.callActions("afterUnbindEvents", arguments);
                    },
                    bindEvents: function() {
                        var self = this, transitionEndEvent = "";
                        self.callActions("beforeBindEvents", arguments);
                        transitionEndEvent = mixitup.features.transitionPrefix === "webkit" ? "webkitTransitionEnd" : "transitionend";
                        self.handler = function(e) {
                            return self.eventBus(e);
                        };
                        h.on(self.dom.el, transitionEndEvent, self.handler);
                        self.callActions("afterBindEvents", arguments);
                    },
                    getPosData: function(getBox) {
                        var self = this, styles = {}, rect = null, posData = new mixitup.StyleData;
                        self.callActions("beforeGetPosData", arguments);
                        posData.x = self.dom.el.offsetLeft;
                        posData.y = self.dom.el.offsetTop;
                        if (self.mixer.config.animation.animateResizeTargets || getBox) {
                            rect = self.dom.el.getBoundingClientRect();
                            posData.top = rect.top;
                            posData.right = rect.right;
                            posData.bottom = rect.bottom;
                            posData.left = rect.left;
                            posData.width = rect.width;
                            posData.height = rect.height;
                        }
                        if (self.mixer.config.animation.animateResizeTargets) {
                            styles = window.getComputedStyle(self.dom.el);
                            posData.marginBottom = parseFloat(styles.marginBottom);
                            posData.marginRight = parseFloat(styles.marginRight);
                        }
                        return self.callFilters("posDataGetPosData", posData, arguments);
                    },
                    cleanUp: function() {
                        var self = this;
                        self.callActions("beforeCleanUp", arguments);
                        self.dom.el.style[mixitup.features.transformProp] = "";
                        self.dom.el.style[mixitup.features.transitionProp] = "";
                        self.dom.el.style.opacity = "";
                        if (self.mixer.config.animation.animateResizeTargets) {
                            self.dom.el.style.width = "";
                            self.dom.el.style.height = "";
                            self.dom.el.style.marginRight = "";
                            self.dom.el.style.marginBottom = "";
                        }
                        self.callActions("afterCleanUp", arguments);
                    }
                });
                mixitup.Collection = function(instances) {
                    var instance = null, i = -1;
                    this.callActions("beforeConstruct");
                    for (i = 0; instance = instances[i]; i++) this[i] = instance;
                    this.length = instances.length;
                    this.callActions("afterConstruct");
                    h.freeze(this);
                };
                mixitup.BaseStatic.call(mixitup.Collection);
                mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
                h.extend(mixitup.Collection.prototype, {
                    constructor: mixitup.Collection,
                    mixitup: function(methodName) {
                        var self = this, instance = null, args = Array.prototype.slice.call(arguments), tasks = [], i = -1;
                        this.callActions("beforeMixitup");
                        args.shift();
                        for (i = 0; instance = self[i]; i++) tasks.push(instance[methodName].apply(instance, args));
                        return self.callFilters("promiseMixitup", h.all(tasks, mixitup.libraries), arguments);
                    }
                });
                mixitup.Operation = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.args = [];
                    this.command = null;
                    this.showPosData = [];
                    this.toHidePosData = [];
                    this.startState = null;
                    this.newState = null;
                    this.docState = null;
                    this.willSort = false;
                    this.willChangeLayout = false;
                    this.hasEffect = false;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.show = [];
                    this.hide = [];
                    this.matching = [];
                    this.toShow = [];
                    this.toHide = [];
                    this.toMove = [];
                    this.toRemove = [];
                    this.startOrder = [];
                    this.newOrder = [];
                    this.startSort = null;
                    this.newSort = null;
                    this.startFilter = null;
                    this.newFilter = null;
                    this.startDataset = null;
                    this.newDataset = null;
                    this.viewportDeltaX = 0;
                    this.viewportDeltaY = 0;
                    this.startX = 0;
                    this.startY = 0;
                    this.startHeight = 0;
                    this.startWidth = 0;
                    this.newX = 0;
                    this.newY = 0;
                    this.newHeight = 0;
                    this.newWidth = 0;
                    this.startContainerClassName = "";
                    this.startDisplay = "";
                    this.newContainerClassName = "";
                    this.newDisplay = "";
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Operation);
                mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Operation.prototype.constructor = mixitup.Operation;
                mixitup.State = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.id = "";
                    this.activeFilter = null;
                    this.activeSort = null;
                    this.activeContainerClassName = "";
                    this.container = null;
                    this.targets = [];
                    this.hide = [];
                    this.show = [];
                    this.matching = [];
                    this.totalTargets = -1;
                    this.totalShow = -1;
                    this.totalHide = -1;
                    this.totalMatching = -1;
                    this.hasFailed = false;
                    this.triggerElement = null;
                    this.activeDataset = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.State);
                mixitup.State.prototype = Object.create(mixitup.Base.prototype);
                mixitup.State.prototype.constructor = mixitup.State;
                mixitup.UserInstruction = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.command = {};
                    this.animate = false;
                    this.callback = null;
                    this.callActions("afterConstruct");
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.UserInstruction);
                mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
                mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
                mixitup.Messages = function() {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct");
                    this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function";
                    this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element";
                    this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`";
                    this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`";
                    this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
                    this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
                    this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`";
                    this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
                    this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
                    this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both";
                    this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container";
                    this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both";
                    this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`";
                    this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets";
                    this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`";
                    this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container";
                    this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored." + " If you wish to perform additional methods on this instance, please create a reference.";
                    this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`";
                    this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`";
                    this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the " + "queue is full or queuing is disabled.";
                    this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.";
                    this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install" + " an ES6 Promise polyfill.";
                    this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + " which may product unexpected sort output";
                    this.callActions("afterConstruct");
                    this.compileTemplates();
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Messages);
                mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Messages.prototype.constructor = mixitup.Messages;
                mixitup.Messages.prototype.compileTemplates = function() {
                    var errorKey = "";
                    var errorMessage = "";
                    for (errorKey in this) {
                        if (typeof (errorMessage = this[errorKey]) !== "string") continue;
                        this[h.camelCase(errorKey)] = h.template(errorMessage);
                    }
                };
                mixitup.messages = new mixitup.Messages;
                mixitup.Facade = function Mixer(mixer) {
                    mixitup.Base.call(this);
                    this.callActions("beforeConstruct", arguments);
                    this.configure = mixer.configure.bind(mixer);
                    this.show = mixer.show.bind(mixer);
                    this.hide = mixer.hide.bind(mixer);
                    this.filter = mixer.filter.bind(mixer);
                    this.toggleOn = mixer.toggleOn.bind(mixer);
                    this.toggleOff = mixer.toggleOff.bind(mixer);
                    this.sort = mixer.sort.bind(mixer);
                    this.changeLayout = mixer.changeLayout.bind(mixer);
                    this.multimix = mixer.multimix.bind(mixer);
                    this.dataset = mixer.dataset.bind(mixer);
                    this.tween = mixer.tween.bind(mixer);
                    this.insert = mixer.insert.bind(mixer);
                    this.insertBefore = mixer.insertBefore.bind(mixer);
                    this.insertAfter = mixer.insertAfter.bind(mixer);
                    this.prepend = mixer.prepend.bind(mixer);
                    this.append = mixer.append.bind(mixer);
                    this.remove = mixer.remove.bind(mixer);
                    this.destroy = mixer.destroy.bind(mixer);
                    this.forceRefresh = mixer.forceRefresh.bind(mixer);
                    this.forceRender = mixer.forceRender.bind(mixer);
                    this.isMixing = mixer.isMixing.bind(mixer);
                    this.getOperation = mixer.getOperation.bind(mixer);
                    this.getConfig = mixer.getConfig.bind(mixer);
                    this.getState = mixer.getState.bind(mixer);
                    this.callActions("afterConstruct", arguments);
                    h.freeze(this);
                    h.seal(this);
                };
                mixitup.BaseStatic.call(mixitup.Facade);
                mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
                mixitup.Facade.prototype.constructor = mixitup.Facade;
                if (true) module.exports = mixitup;
                mixitup.BaseStatic.call(mixitup.constructor);
                mixitup.NAME = "mixitup";
                mixitup.CORE_VERSION = "3.3.1";
            })(window);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                document.addEventListener("click", setSpollerAction);
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerItems = spollersBlock.querySelectorAll("details");
                    if (spollerItems.length) {
                        spollerItems = Array.from(spollerItems).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerItems.forEach((spollerItem => {
                            let spollerTitle = spollerItem.querySelector("summary");
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerItem.hasAttribute("data-open")) {
                                    spollerItem.open = false;
                                    spollerTitle.nextElementSibling.hidden = true;
                                } else {
                                    spollerTitle.classList.add("_spoller-active");
                                    spollerItem.open = true;
                                }
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.classList.remove("_spoller-active");
                                spollerItem.open = true;
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("summary") && el.closest("[data-spollers]")) {
                        if (el.closest("[data-spollers]").classList.contains("_spoller-init")) {
                            const spollerTitle = el.closest("summary");
                            const spollerBlock = spollerTitle.closest("details");
                            const spollersBlock = spollerTitle.closest("[data-spollers]");
                            const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            if (!spollersBlock.querySelectorAll("._slide").length) {
                                if (oneSpoller && !spollerBlock.open) hideSpollersBody(spollersBlock);
                                spollerTitle.classList.toggle("_spoller-active");
                                _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                                !spollerBlock.open ? spollerBlock.open = true : setTimeout((() => {
                                    spollerBlock.open = false;
                                }), spollerSpeed);
                            }
                        }
                        e.preventDefault();
                    }
                    if (!el.closest("[data-spollers]")) {
                        const spollersClose = document.querySelectorAll("[data-spoller-close]");
                        if (spollersClose.length) spollersClose.forEach((spollerClose => {
                            const spollersBlock = spollerClose.closest("[data-spollers]");
                            const spollerCloseBlock = spollerClose.parentNode;
                            if (spollersBlock.classList.contains("_spoller-init")) {
                                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                                spollerClose.classList.remove("_spoller-active");
                                _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                                setTimeout((() => {
                                    spollerCloseBlock.open = false;
                                }), spollerSpeed);
                            }
                        }));
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveBlock = spollersBlock.querySelector("details[open]");
                    if (spollerActiveBlock && !spollersBlock.querySelectorAll("._slide").length) {
                        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                        setTimeout((() => {
                            spollerActiveBlock.open = false;
                        }), spollerSpeed);
                    }
                }
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        var mixitup = __webpack_require__(80);
        var aos = __webpack_require__(711);
        window.onload = () => {
            aos.init({
                duration: 1e3
            });
            document.addEventListener("click", (e => {
                const targetElement = e.target;
                if (targetElement.closest(".icon-menu")) if (document.querySelector(".menu__body")) document.querySelector(".menu__body").classList.toggle("_active");
            }));
            mixitup(".content-articles__articles", {
                load: {
                    filter: ".category-writing"
                }
            });
        };
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
    })();
})();