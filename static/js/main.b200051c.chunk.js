(this["webpackJsonpblueprint3d-react-test"] = this["webpackJsonpblueprint3d-react-test"] || []).push([
    [0],
    {
        34: function (e) {
            e.exports = JSON.parse(
                '{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":-3,"y":2},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":3,"y":2},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":3,"y":-2},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":-3,"y":-2}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0},"backTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0},"backTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0},"backTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0},"backTexture":{"url":"Blueprint3D-assets/rooms/textures/blank.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}'
            );
        },
        52: function (e, t, a) {},
        56: function (e, t, a) {},
        57: function (e, t, a) {
            "use strict";
            a.r(t);
            var l = {};
            a.r(l),
                a.d(l, "dimInch", function () {
                    return S;
                }),
                a.d(l, "dimFeet", function () {
                    return H;
                }),
                a.d(l, "dimMeter", function () {
                    return C;
                }),
                a.d(l, "dimCentiMeter", function () {
                    return B;
                }),
                a.d(l, "dimMilliMeter", function () {
                    return w;
                }),
                a.d(l, "unitScale", function () {
                    return O;
                }),
                a.d(l, "Dimensioning", function () {
                    return j;
                });
            var n = {};
            a.r(n),
                a.d(n, "configDimUnit", function () {
                    return P;
                }),
                a.d(n, "configDefaultPathPrefix", function () {
                    return F;
                }),
                a.d(n, "configWallHeight", function () {
                    return E;
                }),
                a.d(n, "configWallThickness", function () {
                    return M;
                }),
                a.d(n, "configSceneLocked", function () {
                    return W;
                }),
                a.d(n, "configXRayMode", function () {
                    return G;
                }),
                a.d(n, "configSnapMode", function () {
                    return R;
                }),
                a.d(n, "configDimensionVisible", function () {
                    return I;
                }),
                a.d(n, "Configuration", function () {
                    return z;
                });
            var i = {};
            a.r(i),
                a.d(i, "ELogContext", function () {
                    return N;
                }),
                a.d(i, "ELogLevel", function () {
                    return V;
                }),
                a.d(i, "logContext", function () {
                    return A;
                }),
                a.d(i, "isLogging", function () {
                    return K;
                }),
                a.d(i, "log", function () {
                    return X;
                });
            var s = {};
            a.r(s),
                a.d(s, "Utils", function () {
                    return Q;
                });
            var o = {};
            a.r(o),
                a.d(o, "Version", function () {
                    return J;
                });
            var m = {};
            a.r(m),
                a.d(m, "BP3D_EVENT_CONFIG_CHANGED", function () {
                    return q;
                }),
                a.d(m, "BP3D_EVENT_LINKED_ITEMS_CHANGED", function () {
                    return Z;
                }),
                a.d(m, "BP3D_EVENT_HIGHLIGHT_CHANGED", function () {
                    return $;
                });
            var d = {};
            a.r(d),
                a.d(d, "Factory", function () {
                    return lt;
                });
            var b = a(6),
                r = a.n(b),
                p = a(23),
                c = a.n(p),
                h = a(10),
                y = a.n(h),
                u = a(16),
                _ = a(1),
                g = a(3),
                x = a(4),
                D = a(5),
                f = a(11),
                L = a(7),
                v = a(2),
                k = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        return Object(_.a)(this, a), t.apply(this, arguments);
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.hidden;
                                    return Object(v.jsx)("div", {
                                        style: { display: t ? "none" : "inherit", width: "100%", height: "100%" },
                                        children: Object(v.jsx)("div", {
                                            style: { width: "100%", height: "100%" },
                                            ref: function (t) {
                                                return "function" === typeof e.props.onDomLoaded && e.props.onDomLoaded(t);
                                            },
                                        }),
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                T = a(9),
                S = "inch",
                H = "ft",
                C = "m",
                B = "cm",
                w = "mm",
                O = 1,
                j = (function () {
                    function e() {
                        Object(_.a)(this, e);
                    }
                    return (
                        Object(g.a)(e, null, [
                            {
                                key: "cmToMeasure",
                                value: function (e) {
                                    switch (ee.Configuration.getStringValue(ee.configDimUnit)) {
                                        case S:
                                            return "".concat(Math.round(e / 2.54), '"');
                                        case H:
                                            var t = (0.3937 * e) / 12,
                                                a = Math.floor(t),
                                                l = Math.round(12 * (t - a));
                                            return "".concat(a, "'").concat(l, '"');
                                        case w:
                                            return "".concat(Math.round(10 * e), " mm");
                                        case B:
                                            return "".concat(Math.round(10 * e) / 10, " cm");
                                        case C:
                                        default:
                                            return "".concat(Math.round(10 * e) / 1e3, " m");
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                P = "dimUnit",
                F = "defaultPathPrefix",
                E = "wallHeight",
                M = "wallThickness",
                W = "scene-locked",
                G = "xRay",
                R = "snap",
                I = "dimensionVisible",
                U =
                    Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0,
                        FAST_REFRESH: !0,
                        REACT_APP_ASSETS_PREFIX: "https://blueprint3d-react-dist.netlify.app",
                        REACT_APP_ENV_HDR: "/Blueprint3D-assets/textures/room-hdr-01.jpg",
                    }).REACT_APP_BLUEPRINT_ASSETS_PREFIX || "",
                z = (function () {
                    function e() {
                        Object(_.a)(this, e);
                    }
                    return (
                        Object(g.a)(e, null, [
                            {
                                key: "setValue",
                                value: function (e, t) {
                                    (this.data[e] = t), document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_CONFIG_CHANGED, { detail: Object(T.a)({}, e, t) }));
                                },
                            },
                            {
                                key: "getStringValue",
                                value: function (e) {
                                    switch (e) {
                                        case P:
                                        case F:
                                            return this.data[e];
                                        default:
                                            throw new Error("Invalid string configuration parameter: " + e);
                                    }
                                },
                            },
                            {
                                key: "getBooleanValue",
                                value: function (e) {
                                    switch (e) {
                                        case W:
                                        case G:
                                        case R:
                                        case I:
                                            return this.data[e];
                                        default:
                                            throw new Error("Invalid boolean configuration parameter: " + e);
                                    }
                                },
                            },
                            {
                                key: "getNumericValue",
                                value: function (e) {
                                    switch (e) {
                                        case E:
                                        case M:
                                            return this.data[e];
                                        default:
                                            throw new Error("Invalid numeric configuration parameter: " + e);
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })();
            z.data = { defaultPathPrefix: "".concat(U, "Blueprint3D-assets/"), dimUnit: S, wallHeight: 2.5, wallThickness: 0.1, sceneLocked: !1, xRay: !1, snap: !0, dimensionVisible: !0 };
            var N = { None: "None", All: "All", Interaction2d: "Interaction2d", Item: "Item", Wall: "Wall", Room: "Room" },
                V = { Information: "Information", Warning: "Warning", Error: "Error", Fatal: "Fatal", Debug: "Debug" },
                A = N.None;
            function K(e, t) {
                return A === N.All || A === e || t === V.Warning || t === V.Error || t === V.Fatal;
            }
            function X(e, t, a) {
                if (!1 !== K(e, t)) {
                    switch (t) {
                        case V.Information:
                            "[INFO_] ";
                            break;
                        case V.Warning:
                            "[WARING] ";
                            break;
                        case V.Error:
                            "[ERROR] ";
                            break;
                        case V.Fatal:
                            "[FATAL] ";
                            break;
                        case V.Debug:
                            "[DEBUG] ";
                    }
                }
            }
            var Y = a(18),
                Q = (function () {
                    function e() {
                        Object(_.a)(this, e);
                    }
                    return (
                        Object(g.a)(e, null, [
                            {
                                key: "pointDistanceFromLine",
                                value: function (t, a, l, n, i, s) {
                                    var o = e.closestPointOnLine(t, a, l, n, i, s),
                                        m = t - o.x,
                                        d = a - o.y;
                                    return Math.sqrt(m * m + d * d);
                                },
                            },
                            {
                                key: "closestPointOnLine",
                                value: function (e, t, a, l, n, i) {
                                    var s,
                                        o,
                                        m = n - a,
                                        d = i - l,
                                        b = ((e - a) * m + (t - l) * d) / (m * m + d * d);
                                    return b < 0 || (a === n && l === i) ? ((s = a), (o = l)) : b > 1 ? ((s = n), (o = i)) : ((s = a + b * m), (o = l + b * d)), { x: s, y: o };
                                },
                            },
                            {
                                key: "distance",
                                value: function (e, t, a, l) {
                                    return Math.sqrt(Math.pow(a - e, 2) + Math.pow(l - t, 2));
                                },
                            },
                            {
                                key: "angle",
                                value: function (e, t, a, l) {
                                    var n = e * a + t * l,
                                        i = e * l - t * a;
                                    return -Math.atan2(i, n);
                                },
                            },
                            {
                                key: "angle2pi",
                                value: function (t, a, l, n) {
                                    var i = e.angle(t, a, l, n);
                                    return i < 0 && (i += 2 * Math.PI), i;
                                },
                            },
                            {
                                key: "isClockwise",
                                value: function (t) {
                                    for (
                                        var a = Math.min(
                                                0,
                                                Math.min.apply(
                                                    null,
                                                    e.map(t, function (e) {
                                                        return e.x;
                                                    })
                                                )
                                            ),
                                            l = Math.min(
                                                0,
                                                Math.min.apply(
                                                    null,
                                                    e.map(t, function (e) {
                                                        return e.x;
                                                    })
                                                )
                                            ),
                                            n = e.map(t, function (e) {
                                                return { x: e.x - a, y: e.y - l };
                                            }),
                                            i = 0,
                                            s = 0;
                                        s < n.length;
                                        s++
                                    ) {
                                        var o,
                                            m = n[s];
                                        i += ((o = s === n.length - 1 ? n[0] : n[s + 1]).x - m.x) * (o.y + m.y);
                                    }
                                    return i >= 0;
                                },
                            },
                            {
                                key: "guid",
                                value: function () {
                                    var e = function () {
                                        return Math.floor(65536 * (1 + Math.random()))
                                            .toString(16)
                                            .slice(1);
                                    };
                                    return ""
                                        .concat(e() + e(), "-")
                                        .concat(e(), "-")
                                        .concat(e(), "-")
                                        .concat(e(), "-")
                                        .concat(e())
                                        .concat(e())
                                        .concat(e());
                                },
                            },
                            {
                                key: "polygonPolygonIntersect",
                                value: function (t, a) {
                                    for (var l = 0; l < t.length; l++) {
                                        var n,
                                            i = t[l];
                                        if (((n = l === t.length - 1 ? t[0] : t[l + 1]), e.linePolygonIntersect(i.x, i.y, n.x, n.y, a))) return !0;
                                    }
                                    return !1;
                                },
                            },
                            {
                                key: "linePolygonIntersect",
                                value: function (t, a, l, n, i) {
                                    for (var s = 0; s < i.length; s++) {
                                        var o,
                                            m = i[s];
                                        if (((o = s === i.length - 1 ? i[0] : i[s + 1]), e.lineLineIntersect(t, a, l, n, m.x, m.y, o.x, o.y))) return !0;
                                    }
                                    return !1;
                                },
                            },
                            {
                                key: "lineLineIntersect",
                                value: function (e, t, a, l, n, i, s, o) {
                                    function m(e, t, a) {
                                        var l = e.x,
                                            n = e.y,
                                            i = t.x,
                                            s = t.y,
                                            o = a.x;
                                        return (a.y - n) * (i - l) > (s - n) * (o - l);
                                    }
                                    var d = { x: e, y: t },
                                        b = { x: a, y: l },
                                        r = { x: n, y: i },
                                        p = { x: s, y: o };
                                    return m(d, r, p) !== m(b, r, p) && m(d, b, r) !== m(d, b, p);
                                },
                            },
                            {
                                key: "pointInPolygon",
                                value: function (t, a, l, n, i) {
                                    var s = 0,
                                        o = 0;
                                    if (void 0 === n || void 0 === i) {
                                        for (var m = 0; m < l.length; m++) (s = Math.min(s, l[m].x)), (o = Math.min(s, l[m].y));
                                        (n = s - 10), (i = o - 10);
                                    }
                                    var d = 0;
                                    for (m = 0; m < l.length; m++) {
                                        var b,
                                            r = l[m];
                                        (b = m === l.length - 1 ? l[0] : l[m + 1]), e.lineLineIntersect(n, i, t, a, r.x, r.y, b.x, b.y) && d++;
                                    }
                                    return d % 2 === 1;
                                },
                            },
                            {
                                key: "polygonInsidePolygon",
                                value: function (t, a, l, n) {
                                    (l = l || 0), (n = n || 0);
                                    var i,
                                        s = Object(L.a)(t);
                                    try {
                                        for (s.s(); !(i = s.n()).done; ) {
                                            var o = i.value;
                                            if (!e.pointInPolygon(o.x, o.y, a, l, n)) return !1;
                                        }
                                    } catch (m) {
                                        s.e(m);
                                    } finally {
                                        s.f();
                                    }
                                    return !0;
                                },
                            },
                            {
                                key: "polygonOutsidePolygon",
                                value: function (t, a, l, n) {
                                    (l = l || 0), (n = n || 0);
                                    var i,
                                        s = Object(L.a)(t);
                                    try {
                                        for (s.s(); !(i = s.n()).done; ) {
                                            var o = i.value;
                                            if (e.pointInPolygon(o.x, o.y, a, l, n)) return !1;
                                        }
                                    } catch (m) {
                                        s.e(m);
                                    } finally {
                                        s.f();
                                    }
                                    return !0;
                                },
                            },
                            {
                                key: "forEach",
                                value: function (e, t) {
                                    var a,
                                        l = Object(L.a)(e);
                                    try {
                                        for (l.s(); !(a = l.n()).done; ) {
                                            t(a.value);
                                        }
                                    } catch (n) {
                                        l.e(n);
                                    } finally {
                                        l.f();
                                    }
                                },
                            },
                            {
                                key: "forEachIndexed",
                                value: function (e, t) {
                                    var a,
                                        l = Object(L.a)(e.entries());
                                    try {
                                        for (l.s(); !(a = l.n()).done; ) {
                                            var n = Object(Y.a)(a.value, 2);
                                            t(n[0], n[1]);
                                        }
                                    } catch (i) {
                                        l.e(i);
                                    } finally {
                                        l.f();
                                    }
                                },
                            },
                            {
                                key: "map",
                                value: function (e, t) {
                                    var a = [];
                                    return (
                                        e.forEach(function (e) {
                                            a.push(t(e));
                                        }),
                                        a
                                    );
                                },
                            },
                            {
                                key: "removeIf",
                                value: function (e, t) {
                                    var a = [];
                                    return (
                                        e.forEach(function (e) {
                                            t(e) || a.push(e);
                                        }),
                                        a
                                    );
                                },
                            },
                            {
                                key: "cycle",
                                value: function (e, t) {
                                    for (var a = e.slice(0), l = 0; l < t; l++) {
                                        var n = a.shift();
                                        a.push(n);
                                    }
                                    return a;
                                },
                            },
                            {
                                key: "unique",
                                value: function (e, t) {
                                    var a,
                                        l = [],
                                        n = {},
                                        i = Object(L.a)(e);
                                    try {
                                        for (i.s(); !(a = i.n()).done; ) {
                                            var s = a.value;
                                            n.hasOwnProperty(s) || (l.push(s), (n[t(s)] = !0));
                                        }
                                    } catch (o) {
                                        i.e(o);
                                    } finally {
                                        i.f();
                                    }
                                    return l;
                                },
                            },
                            {
                                key: "removeValue",
                                value: function (e, t) {
                                    for (var a = e.length - 1; a >= 0; a--) e[a] === t && e.splice(a, 1);
                                },
                            },
                            {
                                key: "subtract",
                                value: function (t, a) {
                                    return e.removeIf(t, function (t) {
                                        return e.hasValue(a, t);
                                    });
                                },
                            },
                        ]),
                        e
                    );
                })();
            Q.hasValue = function (e, t) {
                var a,
                    l = Object(L.a)(e);
                try {
                    for (l.s(); !(a = l.n()).done; ) {
                        if (a.value === t) return !0;
                    }
                } catch (n) {
                    l.e(n);
                } finally {
                    l.f();
                }
                return !1;
            };
            var J = (function () {
                function e() {
                    Object(_.a)(this, e);
                }
                return (
                    Object(g.a)(e, null, [
                        {
                            key: "getInformalVersion",
                            value: function () {
                                return "1.0 Beta 1";
                            },
                        },
                        {
                            key: "getTechnicalVersion",
                            value: function () {
                                return "1.0.0.1";
                            },
                        },
                    ]),
                    e
                );
            })();
            console.log("Blueprint3D ".concat(J.getInformalVersion(), " (").concat(J.getTechnicalVersion(), ")"));
            var q = "bp3dEvent.config_changed",
                Z = "bp3dEvent.linked_item_changed",
                $ = "bp3dEvent.highlight_changed",
                ee = Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({}, n), l), i), s), o), m),
                te = 0,
                ae = 1,
                le = 2,
                ne = "#f1f1f1",
                ie = "#008cba",
                se = "#008cba",
                oe = "#ff0000",
                me = "#00ff00",
                de = "#000",
                be = (function () {
                    function e(t, a, l) {
                        var n = this;
                        Object(_.a)(this, e),
                            (this.handleWindowResize = function () {
                                var e = n.canvas,
                                    t = e.parentNode;
                                (e.height = t.clientHeight), (e.width = t.clientWidth), (n.canvasElement.height = t.clientHeight), (n.canvasElement.width = t.clientWidth), n.draw();
                            }),
                            (this.draw = function () {
                                n.context.clearRect(0, 0, n.canvasElement.width, n.canvasElement.height),
                                    n.drawGrid(),
                                    n.floorplan.getRooms().forEach(function (e) {
                                        n.drawRoom(e);
                                    }),
                                    n.floorplan.getWalls().forEach(function (e) {
                                        n.drawWall(e);
                                    }),
                                    n.floorplan.getCorners().forEach(function (e) {
                                        n.drawCorner(e);
                                    }),
                                    n.floorplan.getItems().forEach(function (e) {
                                        n.drawItem(e), n.drawItemLabel({ x: e.position.x, y: e.position.z }, e.metadata.name);
                                    }),
                                    n.viewmodel.mode === ae && n.drawTarget(n.viewmodel.targetX, n.viewmodel.targetY, n.viewmodel.lastNode),
                                    n.floorplan.getWalls().forEach(function (e) {
                                        n.drawWallLabels(e);
                                    }),
                                    (function () {
                                        if (ee.Configuration.getBooleanValue(ee.configDimensionVisible)) {
                                            var e = 1 / 0,
                                                t = 1 / 0;
                                            n.floorplan.getCorners().forEach(function (a) {
                                                a.getX() < e && (e = a.getX()), a.getY() < t && (t = a.getY());
                                            }),
                                                (e = n.viewmodel.convertX(e) - 50),
                                                (t = n.viewmodel.convertY(t) - 50);
                                            var a = n.floorplan.calculateRulerData();
                                            a.x.forEach(function (e) {
                                                n.drawRuler(e.start, e.end, e.length, "x", t);
                                            }),
                                                a.y.forEach(function (t) {
                                                    n.drawRuler(t.start, t.end, t.length, "y", e);
                                                });
                                        }
                                    })();
                            }),
                            (this.floorplan = t),
                            (this.viewmodel = a),
                            (this.canvas = l),
                            (this.canvasElement = l),
                            (this.context = this.canvasElement.getContext("2d"));
                        var i = this;
                        window.addEventListener("resize", function () {
                            i.handleWindowResize();
                        }),
                            this.handleWindowResize(),
                            document.addEventListener(ee.BP3D_EVENT_CONFIG_CHANGED, function (e) {
                                var t = e.detail;
                                t && t.hasOwnProperty(ee.configDimensionVisible) && n.draw();
                            });
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "drawRuler",
                                value: function (e, t, a, l, n) {
                                    var i = this;
                                    if (!(a < 0.01)) {
                                        (e = { x: this.viewmodel.convertX(e.x), y: this.viewmodel.convertY(e.y) }), (t = { x: this.viewmodel.convertX(t.x), y: this.viewmodel.convertY(t.y) });
                                        var s = Object(f.a)({}, e),
                                            o = Object(f.a)({}, t);
                                        "x" === l ? ((s.y = n), (o.y = n)) : "y" === l && ((s.x = n), (o.x = n)),
                                            [
                                                { p: [s, o], dashed: !1 },
                                                { p: [s, e], dashed: !0 },
                                                { p: [t, o], dashed: !0 },
                                            ].forEach(function (e) {
                                                var t = "x" === l ? "#f00" : "#00f";
                                                i.drawLine(e.p[0].x, e.p[0].y, e.p[1].x, e.p[1].y, 1, t, e.dashed);
                                            }),
                                            (function () {
                                                var e = 15,
                                                    t = "x" === l ? "#f00" : "#00f",
                                                    a = [];
                                                a.push(s), a.push({ x: "x" === l ? s.x + e : s.x - 3.75, y: "x" === l ? s.y - 3.75 : s.y + e }), a.push({ x: "x" === l ? s.x + e : s.x + 3.75, y: "x" === l ? s.y + 3.75 : s.y + e });
                                                var n = [];
                                                n.push(o),
                                                    n.push({ x: "x" === l ? o.x - e : o.x - 3.75, y: "x" === l ? o.y - 3.75 : o.y - e }),
                                                    n.push({ x: "x" === l ? o.x - e : o.x + 3.75, y: "x" === l ? o.y + 3.75 : o.y - e }),
                                                    [a, n].forEach(function (e) {
                                                        var a = e.map(function (e) {
                                                                return e.x;
                                                            }),
                                                            l = e.map(function (e) {
                                                                return e.y;
                                                            });
                                                        i.drawPolygon(a, l, !0, t, !0, t, 1);
                                                    });
                                            })(),
                                            this.drawItemLabel({ x: (s.x + o.x) / 2, y: (s.y + o.y) / 2 }, ee.Dimensioning.cmToMeasure(100 * a), 20, !1, "y" === l ? -Math.PI / 2 : 0);
                                    }
                                },
                            },
                            {
                                key: "drawItem",
                                value: function (e) {
                                    var t = this;
                                    e.getSnapPoints().forEach(function (a) {
                                        !(function (a) {
                                            var l = [],
                                                n = [];
                                            a.forEach(function (e) {
                                                l.push(t.viewmodel.convertX(e.x)), n.push(t.viewmodel.convertY(e.y));
                                            }),
                                                t.drawPolygon(l, n, !0, e === t.viewmodel.activeItem ? "#0000ff22" : "#33333311", !0, "#444", 1);
                                        })(a);
                                    });
                                },
                            },
                            {
                                key: "drawItemLabel",
                                value: function (e, t) {
                                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12,
                                        l = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                                    (this.context.font = "normal ".concat(a, "px Arial")),
                                        (this.context.fillStyle = de),
                                        (this.context.textBaseline = "middle"),
                                        (this.context.textAlign = "center"),
                                        (this.context.strokeStyle = "#ffffff"),
                                        (this.context.lineWidth = 4);
                                    var i = l ? this.viewmodel.convertX(e.x) : e.x,
                                        s = l ? this.viewmodel.convertY(e.y) : e.y;
                                    n ? (this.context.save(), this.context.translate(i, s), this.context.rotate(n), this.context.fillText(t, 0, 0), this.context.restore()) : this.context.fillText(t, i, s);
                                },
                            },
                            {
                                key: "drawWallLabels",
                                value: function (e) {
                                    var t = e.start.x,
                                        a = e.start.y,
                                        l = e.end.x,
                                        n = e.end.y,
                                        i = { x: (t + l) / 2, y: (a + n) / 2 },
                                        s = Math.sqrt(Math.pow(t - l, 2) + Math.pow(a - n, 2));
                                    this.drawEdgeLabel(i, s);
                                },
                            },
                            {
                                key: "drawWall",
                                value: function (e) {
                                    var t = this,
                                        a = e === this.viewmodel.activeWall && !this.viewmodel.activeCorner;
                                    a && this.viewmodel.mode,
                                        e.frontEdge && this.drawEdge(e.frontEdge, a),
                                        e.backEdge && this.drawEdge(e.backEdge, a),
                                        Array.isArray(e.items) &&
                                            e.items.forEach(function (a) {
                                                return t.drawWallItem(a, e);
                                            });
                                },
                            },
                            {
                                key: "drawWallItem",
                                value: function (e, t) {
                                    var a = this,
                                        l = e.getCorners(),
                                        n = [],
                                        i = [];
                                    l.forEach(function (e) {
                                        n.push(a.viewmodel.convertX(e.x)), i.push(a.viewmodel.convertY(e.y));
                                    }),
                                        this.drawPolygon(n, i, !0, "#fff", !0, "#888", 1);
                                },
                            },
                            {
                                key: "drawEdgeLabel",
                                value: function (e, t) {
                                    (t *= 100) < 60 ||
                                        ((this.context.font = "normal 12px Arial"),
                                        (this.context.fillStyle = "#000000"),
                                        (this.context.textBaseline = "middle"),
                                        (this.context.textAlign = "center"),
                                        (this.context.strokeStyle = "#ffffff"),
                                        (this.context.lineWidth = 4),
                                        this.context.strokeText(ee.Dimensioning.cmToMeasure(t), this.viewmodel.convertX(e.x), this.viewmodel.convertY(e.y)),
                                        this.context.fillText(ee.Dimensioning.cmToMeasure(t), this.viewmodel.convertX(e.x), this.viewmodel.convertY(e.y)));
                                },
                            },
                            {
                                key: "drawEdge",
                                value: function (e, t) {
                                    var a = "#888888";
                                    t && this.viewmodel.mode === le ? (a = oe) : t && (a = se);
                                    var l = e.corners(),
                                        n = this;
                                    this.drawPolygon(
                                        ee.Utils.map(l, function (e) {
                                            return n.viewmodel.convertX(e.x);
                                        }),
                                        ee.Utils.map(l, function (e) {
                                            return n.viewmodel.convertY(e.y);
                                        }),
                                        !0,
                                        t ? se : "#888",
                                        !0,
                                        a,
                                        1
                                    );
                                },
                            },
                            {
                                key: "drawRoom",
                                value: function (e) {
                                    var t = this;
                                    this.drawPolygon(
                                        ee.Utils.map(e.corners, function (e) {
                                            return t.viewmodel.convertX(e.x);
                                        }),
                                        ee.Utils.map(e.corners, function (e) {
                                            return t.viewmodel.convertY(e.y);
                                        }),
                                        !0,
                                        "#f9f9f9"
                                    );
                                },
                            },
                            {
                                key: "drawCorner",
                                value: function (e) {
                                    var t = e === this.viewmodel.activeCorner,
                                        a = "#cccccc";
                                    t && this.viewmodel.mode === le ? (a = oe) : t && (a = me), this.drawCircle(this.viewmodel.convertX(e.x), this.viewmodel.convertY(e.y), t ? 7 : 0, a);
                                },
                            },
                            {
                                key: "drawTarget",
                                value: function (e, t, a) {
                                    this.drawCircle(this.viewmodel.convertX(e), this.viewmodel.convertY(t), 7, me),
                                        this.viewmodel.lastNode && this.drawLine(this.viewmodel.convertX(a.x), this.viewmodel.convertY(a.y), this.viewmodel.convertX(e), this.viewmodel.convertY(t), 7, ie);
                                },
                            },
                            {
                                key: "drawLine",
                                value: function (e, t, a, l) {
                                    var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#000",
                                        s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                                    this.context.beginPath(),
                                        this.context.setLineDash([]),
                                        s && this.context.setLineDash([3, 6]),
                                        this.context.moveTo(e, t),
                                        this.context.lineTo(a, l),
                                        (this.context.lineWidth = n),
                                        (this.context.strokeStyle = i),
                                        this.context.stroke();
                                },
                            },
                            {
                                key: "drawPolygon",
                                value: function (e, t, a, l, n, i, s) {
                                    (a = a || !1), (n = n || !1), this.context.beginPath(), this.context.moveTo(e[0], t[0]);
                                    for (var o = 1; o < e.length; o++) this.context.lineTo(e[o], t[o]);
                                    this.context.closePath(), a && ((this.context.fillStyle = l), this.context.fill()), n && ((this.context.lineWidth = s), (this.context.strokeStyle = i), this.context.stroke());
                                },
                            },
                            {
                                key: "drawCircle",
                                value: function (e, t, a, l) {
                                    this.context.beginPath(), this.context.arc(e, t, a, 0, 2 * Math.PI, !1), (this.context.fillStyle = l), this.context.fill();
                                },
                            },
                            {
                                key: "calculateGridSpacing",
                                value: function () {
                                    var e = 100,
                                        t = this.viewmodel.pixelsPerCm;
                                    return t < 0.5 ? (e = 100) : t < 1 ? (e = 50) : t < 2 ? (e = 25) : t < 4 && (e = 12.5), (t || 0.5) * e;
                                },
                            },
                            {
                                key: "calculateGridOffset",
                                value: function (e) {
                                    var t = this.calculateGridSpacing();
                                    return e >= 0 ? ((e + t / 2) % t) - t / 2 : ((e - t / 2) % t) + t / 2;
                                },
                            },
                            {
                                key: "drawGrid",
                                value: function () {
                                    for (
                                        var e = this.calculateGridOffset(-this.viewmodel.originX),
                                            t = this.calculateGridOffset(-this.viewmodel.originY),
                                            a = this.canvasElement.width,
                                            l = this.canvasElement.height,
                                            n = this.calculateGridSpacing(),
                                            i = 0;
                                        i <= a / n;
                                        i++
                                    )
                                        this.drawLine(n * i + e, 0, n * i + e, l, 1, ne);
                                    for (var s = 0; s <= l / n; s++) this.drawLine(0, n * s + t, a, n * s + t, 1, ne);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                re = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        return Object(_.a)(this, a), t.apply(this, arguments);
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.hidden;
                                    return Object(v.jsxs)("div", {
                                        style: { width: "100%", height: "100%", display: "block", position: "absolute", top: 0, left: 0, opacity: t ? 0 : 100, pointerEvents: t ? "none" : "inherit" },
                                        children: [
                                            Object(v.jsx)("canvas", {
                                                className: "canvas-floor-plan",
                                                ref: function (t) {
                                                    return "function" === typeof e.props.onDomLoaded && e.props.onDomLoaded(t);
                                                },
                                                children: "Floor plan viewer",
                                            }),
                                            Object(v.jsxs)("div", {
                                                className: "floorplan-modes-container",
                                                children: [
                                                    Object(v.jsx)("span", {
                                                        onClick: function () {
                                                            return e.props.onModeChanged(te);
                                                        },
                                                        children: "Move",
                                                    }),
                                                    Object(v.jsx)("span", {
                                                        onClick: function () {
                                                            return e.props.onModeChanged(ae);
                                                        },
                                                        children: "Draw",
                                                    }),
                                                    Object(v.jsx)("span", {
                                                        onClick: function () {
                                                            return e.props.onModeChanged(le);
                                                        },
                                                        children: "Delete",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                pe = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        return Object(_.a)(this, a), t.apply(this, arguments);
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return Object(v.jsxs)("div", {
                                        className: "controls-section",
                                        children: [
                                            Object(v.jsx)("span", {
                                                className: "control-button",
                                                onClick: function () {
                                                    return "function" === typeof e.props.onPan && e.props.onPan("LEFT");
                                                },
                                                children: Object(v.jsx)("i", { className: "fa fa-arrow-left" }),
                                            }),
                                            Object(v.jsxs)("span", {
                                                style: { display: "inline-block", position: "relative", verticalAlign: "middle" },
                                                children: [
                                                    Object(v.jsx)("span", {
                                                        className: "control-button",
                                                        style: { display: "block", float: "none" },
                                                        onClick: function () {
                                                            return "function" === typeof e.props.onPan && e.props.onPan("UP");
                                                        },
                                                        children: Object(v.jsx)("i", { className: "fa fa-arrow-up" }),
                                                    }),
                                                    Object(v.jsx)("br", {}),
                                                    Object(v.jsx)("span", {
                                                        className: "control-button",
                                                        style: { display: "block", float: "none" },
                                                        onClick: function () {
                                                            return "function" === typeof e.props.onPan && e.props.onPan("DOWN");
                                                        },
                                                        children: Object(v.jsx)("i", { className: "fa fa-arrow-down" }),
                                                    }),
                                                ],
                                            }),
                                            Object(v.jsx)("span", {
                                                className: "control-button",
                                                onClick: function () {
                                                    return "function" === typeof e.props.onPan && e.props.onPan("RIGHT");
                                                },
                                                children: Object(v.jsx)("i", { className: "fa fa-arrow-right" }),
                                            }),
                                            Object(v.jsx)("span", {
                                                className: "control-button",
                                                onClick: function () {
                                                    "function" === typeof e.props.onZoomOut && e.props.onZoomOut();
                                                },
                                                children: Object(v.jsx)("i", { className: "fa fa-search-minus" }),
                                            }),
                                            Object(v.jsx)("span", {
                                                className: "control-button",
                                                onClick: function () {
                                                    "function" === typeof e.props.onHomeClicked && e.props.onHomeClicked();
                                                },
                                                children: Object(v.jsx)("i", { className: "fa fa-home" }),
                                            }),
                                            Object(v.jsx)("span", {
                                                className: "control-button",
                                                onClick: function () {
                                                    "function" === typeof e.props.onZoomIn && e.props.onZoomIn();
                                                },
                                                children: Object(v.jsx)("i", { className: "fa fa-search-plus" }),
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                ce = a(0),
                he = a(13),
                ye = { url: "".concat(ee.Configuration.getStringValue("defaultPathPrefix"), "/rooms/textures/blank.png"), stretch: !0, scale: 0 },
                ue = (function () {
                    function e(t, a) {
                        var l = this;
                        Object(_.a)(this, e),
                            (this.frontEdge = null),
                            (this.backEdge = null),
                            (this.orphan = !1),
                            (this.locked = !1),
                            (this.items = []),
                            (this.onItems = []),
                            (this.frontTexture = ye),
                            (this.backTexture = ye),
                            (this.thickness = ee.Configuration.getNumericValue(ee.configWallThickness)),
                            (this.height = ee.Configuration.getNumericValue(ee.configWallHeight)),
                            (this.moved_callbacks = []),
                            (this.deleted_callbacks = []),
                            (this.action_callbacks = []),
                            (this.handleStartMoved = function (e, t, a, n) {
                                var i = { prev: { start: { x: a, y: n }, end: { x: l.getEndX(), y: l.getEndY() } }, current: { start: { x: e, y: t }, end: { x: l.getEndX(), y: l.getEndY() } } };
                                l.moveWallItems(i);
                            }),
                            (this.handleEndMoved = function (e, t, a, n) {
                                var i = { prev: { start: { x: l.getStartX(), y: l.getStartY() }, end: { x: a, y: n } }, current: { start: { x: l.getStartX(), y: l.getStartY() }, end: { x: e, y: t } } };
                                l.moveWallItems(i);
                            }),
                            (this.start = t),
                            (this.end = a),
                            (this.id = this.getUuid()),
                            this.start.attachStart(this),
                            this.end.attachEnd(this),
                            this.start.moved_callbacks.push(this.handleStartMoved),
                            this.end.moved_callbacks.push(this.handleEndMoved);
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "getUuid",
                                value: function () {
                                    return [this.start.id, this.end.id].join();
                                },
                            },
                            {
                                key: "resetFrontBack",
                                value: function () {
                                    (this.frontEdge = null), (this.backEdge = null), (this.orphan = !1);
                                },
                            },
                            {
                                key: "snapToAxis",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.25;
                                    this.start.snapToAxis(e), this.end.snapToAxis(e);
                                },
                            },
                            {
                                key: "fireOnMove",
                                value: function (e) {
                                    this.moved_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnDelete",
                                value: function (e) {
                                    this.deleted_callbacks.push(e);
                                },
                            },
                            {
                                key: "dontFireOnDelete",
                                value: function (e) {
                                    var t = this.deleted_callbacks.indexOf(e);
                                    this.deleted_callbacks.splice(t, 1);
                                },
                            },
                            {
                                key: "fireOnAction",
                                value: function (e) {
                                    this.action_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireAction",
                                value: function (e) {
                                    this.action_callbacks.forEach(function (t) {
                                        return "function" === typeof t && t(e);
                                    });
                                },
                            },
                            {
                                key: "relativeMove",
                                value: function (e, t) {
                                    if (!(this.locked || this.start.locked || this.end.locked)) {
                                        this.start.move(this.getStartX() + e, this.getStartY() + t, !1), this.end.move(this.getEndX() + e, this.getEndY() + t, !1);
                                        var a = { prev: { start: { x: this.getStartX(), y: this.getStartY() }, end: { x: this.getEndX(), y: this.getEndY() } } };
                                        this.snapToAxis(), (a.current = { start: { x: this.getStartX(), y: this.getStartY() }, end: { x: this.getEndX(), y: this.getEndY() } }), this.moveWallItems(a);
                                    }
                                },
                            },
                            {
                                key: "moveWallItems",
                                value: function (e) {
                                    var t = e.prev,
                                        a = e.current;
                                    this.items.length &&
                                        this.items.forEach(function (e) {
                                            var l = e.position,
                                                n = Math.sqrt(Math.pow(t.start.x - t.end.x, 2) + Math.pow(t.start.y - t.end.y, 2)),
                                                i = Math.sqrt(Math.pow(t.start.x - l.x, 2) + Math.pow(t.start.y - l.z, 2)) / n,
                                                s = a.start.x + (a.end.x - a.start.x) * i,
                                                o = (l.y, a.start.y + (a.end.y - a.start.y) * i),
                                                m = s - l.x,
                                                d = o - l.z;
                                            e.relativeMove(m, d);
                                            var b = new ce.Lb(t.end.x - t.start.x, 0, t.end.y - t.start.y),
                                                r = new ce.Lb(a.end.x - a.start.x, 0, a.end.y - a.start.y),
                                                p = new ce.Lb().copy(b).cross(r),
                                                c = b.angleTo(r);
                                            p.y < 0 && (c = -c);
                                            var h = e.rotation.y;
                                            (h += c), (e.rotation.y = h), (e.dimensionHelper.rotation.y = h);
                                        });
                                },
                            },
                            {
                                key: "fireMoved",
                                value: function () {
                                    this.moved_callbacks.forEach(function (e) {
                                        return "function" === typeof e && e();
                                    });
                                },
                            },
                            {
                                key: "fireRedraw",
                                value: function () {
                                    this.frontEdge &&
                                        this.frontEdge.redrawCallbacks.forEach(function (e) {
                                            return "function" === typeof e && e();
                                        }),
                                        this.backEdge &&
                                            this.backEdge.redrawCallbacks.forEach(function (e) {
                                                return "function" === typeof e && e();
                                            });
                                },
                            },
                            {
                                key: "getStart",
                                value: function () {
                                    return this.start;
                                },
                            },
                            {
                                key: "getEnd",
                                value: function () {
                                    return this.end;
                                },
                            },
                            {
                                key: "getStartX",
                                value: function () {
                                    return this.start.getX();
                                },
                            },
                            {
                                key: "getEndX",
                                value: function () {
                                    return this.end.getX();
                                },
                            },
                            {
                                key: "getStartY",
                                value: function () {
                                    return this.start.getY();
                                },
                            },
                            {
                                key: "getEndY",
                                value: function () {
                                    return this.end.getY();
                                },
                            },
                            {
                                key: "remove",
                                value: function () {
                                    var e = this;
                                    this.start.detachWall(this),
                                        this.end.detachWall(this),
                                        this.deleted_callbacks.forEach(function (t) {
                                            return "function" === typeof t && t(e);
                                        });
                                },
                            },
                            {
                                key: "setStart",
                                value: function (e) {
                                    this.start.detachWall(this), e.attachStart(this), (this.start = e), this.fireMoved();
                                },
                            },
                            {
                                key: "setEnd",
                                value: function (e) {
                                    this.end.detachWall(this), e.attachEnd(this), (this.end = e), this.fireMoved();
                                },
                            },
                            {
                                key: "distanceFrom",
                                value: function (e, t) {
                                    return ee.Utils.pointDistanceFromLine(e, t, this.getStartX(), this.getStartY(), this.getEndX(), this.getEndY());
                                },
                            },
                            {
                                key: "oppositeCorner",
                                value: function (e) {
                                    return this.start === e ? this.end : this.end === e ? this.start : void console.log("Wall does not connect to corner");
                                },
                            },
                            {
                                key: "setLocked",
                                value: function (e) {
                                    (this.locked = e), this.start.setLocked(e), this.end.setLocked(e);
                                },
                            },
                            {
                                key: "getWallCenter",
                                value: function () {
                                    var e = this.start.x,
                                        t = this.start.y;
                                    return { x: (e + this.end.x) / 2, y: (t + this.end.y) / 2 };
                                },
                            },
                            {
                                key: "getWallLength",
                                value: function () {
                                    var e = this.start.x,
                                        t = this.start.y,
                                        a = this.end.x,
                                        l = this.end.y;
                                    return Math.sqrt(Math.pow(e - a, 2) + Math.pow(t - l, 2));
                                },
                            },
                            {
                                key: "setWallLength",
                                value: function (e) {
                                    if (e > 0) {
                                        var t = e / this.getWallLength(),
                                            a = { x: 0, y: 0 };
                                        if (this.start.locked || this.end.locked)
                                            if (this.start.locked && !this.end.locked) a = { x: this.getStartX(), y: this.getStartY() };
                                            else {
                                                if (this.start.locked || !this.end.locked) return;
                                                a = { x: this.getEndX(), y: this.getEndY() };
                                            }
                                        else a = this.getWallCenter();
                                        var l = 0,
                                            n = 0;
                                        (l = a.x + (this.start.x - a.x) * t), (n = a.y + (this.start.y - a.y) * t), this.start.move(l, n, !1), (l = a.x + (this.end.x - a.x) * t), (n = a.y + (this.end.y - a.y) * t), this.end.move(l, n, !1);
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                _e = (function () {
                    function e(t, a, l, n) {
                        Object(_.a)(this, e),
                            (this.wallStarts = []),
                            (this.wallEnds = []),
                            (this.moved_callbacks = []),
                            (this.deleted_callbacks = []),
                            (this.action_callbacks = []),
                            (this.locked = !1),
                            (this.floorplan = t),
                            (this.x = a),
                            (this.y = l),
                            (this.id = n || ee.Utils.guid());
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "fireOnMove",
                                value: function (e) {
                                    this.moved_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnDelete",
                                value: function (e) {
                                    this.deleted_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnAction",
                                value: function (e) {
                                    this.action_callbacks.push(e);
                                },
                            },
                            {
                                key: "getX",
                                value: function () {
                                    return this.x;
                                },
                            },
                            {
                                key: "getY",
                                value: function () {
                                    return this.y;
                                },
                            },
                            {
                                key: "snapToAxis",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.25,
                                        t = { x: !1, y: !1 },
                                        a = this;
                                    return (
                                        this.adjacentCorners().forEach(function (l) {
                                            Math.abs(l.x - a.x) < e && ((a.x = l.x), (t.x = !0)), Math.abs(l.y - a.y) < e && ((a.y = l.y), (t.y = !0));
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "relativeMove",
                                value: function (e, t) {
                                    this.locked || this.move(this.x + e, this.y + t);
                                },
                            },
                            {
                                key: "fireAction",
                                value: function (e) {
                                    this.action_callbacks.forEach(function (t) {
                                        return "function" === typeof t && t(e);
                                    });
                                },
                            },
                            {
                                key: "remove",
                                value: function () {
                                    var e = this;
                                    this.deleted_callbacks.forEach(function (t) {
                                        return "function" === typeof t && t(e);
                                    });
                                },
                            },
                            {
                                key: "removeAll",
                                value: function () {
                                    for (var e = 0; e < this.wallStarts.length; e++) this.wallStarts[e].remove();
                                    for (e = 0; e < this.wallEnds.length; e++) this.wallEnds[e].remove();
                                    this.remove();
                                },
                            },
                            {
                                key: "move",
                                value: function (e, t) {
                                    var a = this,
                                        l = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                    if (!this.locked) {
                                        var n = this.x,
                                            i = this.y;
                                        (this.x = e),
                                            (this.y = t),
                                            this.mergeWithIntersected(),
                                            l && this.snapToAxis(),
                                            this.moved_callbacks.forEach(function (e) {
                                                return "function" === typeof e && e(a.x, a.y, n, i);
                                            }),
                                            this.wallStarts.forEach(function (e) {
                                                e.fireMoved();
                                            }),
                                            this.wallEnds.forEach(function (e) {
                                                e.fireMoved();
                                            });
                                    }
                                },
                            },
                            {
                                key: "adjacentCorners",
                                value: function () {
                                    for (var e = [], t = 0; t < this.wallStarts.length; t++) e.push(this.wallStarts[t].getEnd());
                                    for (t = 0; t < this.wallEnds.length; t++) e.push(this.wallEnds[t].getStart());
                                    return e;
                                },
                            },
                            {
                                key: "isWallConnected",
                                value: function (e) {
                                    for (var t = 0; t < this.wallStarts.length; t++) if (this.wallStarts[t] === e) return !0;
                                    for (t = 0; t < this.wallEnds.length; t++) if (this.wallEnds[t] === e) return !0;
                                    return !1;
                                },
                            },
                            {
                                key: "distanceFrom",
                                value: function (e, t) {
                                    return ee.Utils.distance(e, t, this.x, this.y);
                                },
                            },
                            {
                                key: "distanceFromWall",
                                value: function (e) {
                                    return e.distanceFrom(this.x, this.y);
                                },
                            },
                            {
                                key: "distanceFromCorner",
                                value: function (e) {
                                    return this.distanceFrom(e.x, e.y);
                                },
                            },
                            {
                                key: "detachWall",
                                value: function (e) {
                                    ee.Utils.removeValue(this.wallStarts, e), ee.Utils.removeValue(this.wallEnds, e), 0 === this.wallStarts.length && 0 === this.wallEnds.length && this.remove();
                                },
                            },
                            {
                                key: "attachStart",
                                value: function (e) {
                                    this.wallStarts.push(e);
                                },
                            },
                            {
                                key: "attachEnd",
                                value: function (e) {
                                    this.wallEnds.push(e);
                                },
                            },
                            {
                                key: "wallTo",
                                value: function (e) {
                                    for (var t = 0; t < this.wallStarts.length; t++) if (this.wallStarts[t].getEnd() === e) return this.wallStarts[t];
                                    return null;
                                },
                            },
                            {
                                key: "wallFrom",
                                value: function (e) {
                                    for (var t = 0; t < this.wallEnds.length; t++) if (this.wallEnds[t].getStart() === e) return this.wallEnds[t];
                                    return null;
                                },
                            },
                            {
                                key: "wallToOrFrom",
                                value: function (e) {
                                    return this.wallTo(e) || this.wallFrom(e);
                                },
                            },
                            {
                                key: "combineWithCorner",
                                value: function (e) {
                                    (this.x = e.x), (this.y = e.y);
                                    for (var t = e.wallStarts.length - 1; t >= 0; t--) e.wallStarts[t].setStart(this);
                                    for (t = e.wallEnds.length - 1; t >= 0; t--) e.wallEnds[t].setEnd(this);
                                    e.removeAll(), this.removeDuplicateWalls(), this.floorplan.update();
                                },
                            },
                            {
                                key: "mergeWithIntersected",
                                value: function () {
                                    for (var e = 0; e < this.floorplan.getCorners().length; e++) {
                                        var t = this.floorplan.getCorners()[e];
                                        if (this.distanceFromCorner(t) < 0.2 && t !== this) return this.combineWithCorner(t), !0;
                                    }
                                    for (e = 0; e < this.floorplan.getWalls().length; e++) {
                                        var a = this.floorplan.getWalls()[e];
                                        if (this.distanceFromWall(a) < 0.2 && !this.isWallConnected(a)) {
                                            var l = ee.Utils.closestPointOnLine(this.x, this.y, a.getStart().x, a.getStart().y, a.getEnd().x, a.getEnd().y);
                                            return (this.x = l.x), (this.y = l.y), this.floorplan.newWall(this, a.getEnd()), a.setEnd(this), this.floorplan.update(), !0;
                                        }
                                    }
                                    return !1;
                                },
                            },
                            {
                                key: "removeDuplicateWalls",
                                value: function () {
                                    for (var e = {}, t = {}, a = this.wallStarts.length - 1; a >= 0; a--)
                                        this.wallStarts[a].getEnd() === this || this.wallStarts[a].getEnd().id in e ? this.wallStarts[a].remove() : (e[this.wallStarts[a].getEnd().id] = !0);
                                    for (a = this.wallEnds.length - 1; a >= 0; a--) this.wallEnds[a].getStart() === this || this.wallEnds[a].getStart().id in t ? this.wallEnds[a].remove() : (t[this.wallEnds[a].getStart().id] = !0);
                                },
                            },
                            {
                                key: "setLocked",
                                value: function (e) {
                                    this.locked = e;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                ge = (function () {
                    function e(t, a, l) {
                        Object(_.a)(this, e),
                            (this.plane = null),
                            (this.interiorTransform = new ce.P()),
                            (this.invInteriorTransform = new ce.P()),
                            (this.exteriorTransform = new ce.P()),
                            (this.invExteriorTransform = new ce.P()),
                            (this.redrawCallbacks = []),
                            (this.generatePlane = function () {
                                function e(e) {
                                    return new ce.Lb(e.x, 0, e.y);
                                }
                                var t = e(this.interiorStart()),
                                    a = e(this.interiorEnd()),
                                    l = a.clone();
                                l.y = this.wall.height;
                                var n = t.clone();
                                n.y = this.wall.height;
                                var i = new ce.t();
                                (i.vertices = [t, a, l, n]),
                                    i.faces.push(new ce.q(0, 1, 2)),
                                    i.faces.push(new ce.q(0, 2, 3)),
                                    i.computeFaceNormals(),
                                    i.computeBoundingBox(),
                                    (this.plane = new ce.Q(i, new ce.R())),
                                    (this.plane.visible = !1),
                                    (this.plane.edge = this),
                                    this.computeTransforms(this.interiorTransform, this.invInteriorTransform, this.interiorStart(), this.interiorEnd()),
                                    this.computeTransforms(this.exteriorTransform, this.invExteriorTransform, this.exteriorStart(), this.exteriorEnd());
                            }),
                            (this.room = t),
                            (this.wall = a),
                            (this.front = l || !1),
                            (this.offset = a.thickness / 2),
                            (this.height = a.height),
                            this.front ? (this.wall.frontEdge = this) : (this.wall.backEdge = this);
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "getTexture",
                                value: function () {
                                    return this.front ? this.wall.frontTexture : this.wall.backTexture;
                                },
                            },
                            {
                                key: "setTexture",
                                value: function (e, t, a, l, n) {
                                    var i = { url: e, stretch: t, scale: a, width: l, height: n };
                                    this.front ? (this.wall.frontTexture = i) : (this.wall.backTexture = i),
                                        this.redrawCallbacks.forEach(function (e) {
                                            return "function" === typeof e && e();
                                        });
                                },
                            },
                            {
                                key: "interiorDistance",
                                value: function () {
                                    var e = this.interiorStart(),
                                        t = this.interiorEnd();
                                    return ee.Utils.distance(e.x, e.y, t.x, t.y);
                                },
                            },
                            {
                                key: "computeTransforms",
                                value: function (e, t, a, l) {
                                    var n = a,
                                        i = l,
                                        s = ee.Utils.angle(1, 0, i.x - n.x, i.y - n.y),
                                        o = new ce.P();
                                    o.makeTranslation(-n.x, 0, -n.y);
                                    var m = new ce.P();
                                    m.makeRotationY(-s), e.multiplyMatrices(m, o), t.getInverse(e);
                                },
                            },
                            {
                                key: "distanceTo",
                                value: function (e, t) {
                                    return ee.Utils.pointDistanceFromLine(e, t, this.interiorStart().x, this.interiorStart().y, this.interiorEnd().x, this.interiorEnd().y);
                                },
                            },
                            {
                                key: "getStart",
                                value: function () {
                                    return this.front ? this.wall.getStart() : this.wall.getEnd();
                                },
                            },
                            {
                                key: "getEnd",
                                value: function () {
                                    return this.front ? this.wall.getEnd() : this.wall.getStart();
                                },
                            },
                            {
                                key: "getOppositeEdge",
                                value: function () {
                                    return this.front ? this.wall.backEdge : this.wall.frontEdge;
                                },
                            },
                            {
                                key: "interiorEnd",
                                value: function () {
                                    var e = this.halfAngleVector(this, this.next);
                                    return { x: this.getEnd().x + e.x, y: this.getEnd().y + e.y };
                                },
                            },
                            {
                                key: "interiorStart",
                                value: function () {
                                    var e = this.halfAngleVector(this.prev, this);
                                    return { x: this.getStart().x + e.x, y: this.getStart().y + e.y };
                                },
                            },
                            {
                                key: "interiorCenter",
                                value: function () {
                                    return { x: (this.interiorStart().x + this.interiorEnd().x) / 2, y: (this.interiorStart().y + this.interiorEnd().y) / 2 };
                                },
                            },
                            {
                                key: "exteriorEnd",
                                value: function () {
                                    var e = this.halfAngleVector(this, this.next);
                                    return { x: this.getEnd().x - e.x, y: this.getEnd().y - e.y };
                                },
                            },
                            {
                                key: "exteriorStart",
                                value: function () {
                                    var e = this.halfAngleVector(this.prev, this);
                                    return { x: this.getStart().x - e.x, y: this.getStart().y - e.y };
                                },
                            },
                            {
                                key: "corners",
                                value: function () {
                                    return [this.interiorStart(), this.interiorEnd(), this.exteriorEnd(), this.exteriorStart()];
                                },
                            },
                            {
                                key: "halfAngleVector",
                                value: function (e, t) {
                                    if (e) (a = e.getStart().x), (l = e.getStart().y), (n = e.getEnd().x), (i = e.getEnd().y);
                                    else
                                        var a = t.getStart().x - (t.getEnd().x - t.getStart().x),
                                            l = t.getStart().y - (t.getEnd().y - t.getStart().y),
                                            n = t.getStart().x,
                                            i = t.getStart().y;
                                    if (t) (s = t.getStart().x), (o = t.getStart().y), (m = t.getEnd().x), (d = t.getEnd().y);
                                    else
                                        var s = e.getEnd().x,
                                            o = e.getEnd().y,
                                            m = e.getEnd().x + (e.getEnd().x - e.getStart().x),
                                            d = e.getEnd().y + (e.getEnd().y - e.getStart().y);
                                    var b = ee.Utils.angle2pi(a - n, l - i, m - n, d - i),
                                        r = Math.cos(b / 2),
                                        p = Math.sin(b / 2),
                                        c = m - s,
                                        h = d - o,
                                        y = c * r - h * p,
                                        u = c * p + h * r,
                                        _ = ee.Utils.distance(0, 0, y, u),
                                        g = this.offset / p / _,
                                        x = { x: y * g, y: u * g };
                                    return x;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                xe = { url: "".concat(ee.Configuration.getStringValue("defaultPathPrefix"), "/rooms/textures/marbletiles.jpg"), scale: 4 },
                De = (function () {
                    function e(t, a) {
                        Object(_.a)(this, e),
                            (this.interiorCorners = []),
                            (this.edgePointer = null),
                            (this.floorPlane = null),
                            (this.customTexture = !1),
                            (this.floorChangeCallbacks = []),
                            (this.floorplan = t),
                            (this.corners = a),
                            this.updateWalls(),
                            this.updateInteriorCorners(),
                            this.generatePlane();
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "getUuid",
                                value: function () {
                                    var e = ee.Utils.map(this.corners, function (e) {
                                        return e.id;
                                    });
                                    return e.sort(), e.join();
                                },
                            },
                            {
                                key: "fireOnFloorChange",
                                value: function (e) {
                                    this.floorChangeCallbacks.push(e);
                                },
                            },
                            {
                                key: "getTexture",
                                value: function () {
                                    var e = this.getUuid();
                                    return this.floorplan.getFloorTexture(e) || xe;
                                },
                            },
                            {
                                key: "setTexture",
                                value: function (e) {
                                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
                                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
                                    console.log("set texture of room", e, t, a);
                                    var i = this.getUuid();
                                    this.floorplan.setFloorTexture(i, e, a, l, n),
                                        this.floorChangeCallbacks.forEach(function (e) {
                                            return "function" === typeof e && e();
                                        });
                                },
                            },
                            {
                                key: "generatePlane",
                                value: function () {
                                    var e = [];
                                    this.interiorCorners.forEach(function (t) {
                                        e.push(new ce.Kb(t.x, t.y));
                                    });
                                    var t = new ce.vb(e),
                                        a = new ce.wb(t);
                                    (this.floorPlane = new ce.Q(a, new ce.R({ side: ce.o }))), (this.floorPlane.visible = !1), this.floorPlane.rotation.set(Math.PI / 2, 0, 0), (this.floorPlane.room = this);
                                },
                            },
                            {
                                key: "cycleIndex",
                                value: function (e) {
                                    return e < 0 ? e + this.corners.length : e % this.corners.length;
                                },
                            },
                            {
                                key: "updateInteriorCorners",
                                value: function () {
                                    for (var e = this.edgePointer; this.interiorCorners.push(e.interiorStart()), e.generatePlane(), e.next !== this.edgePointer; ) e = e.next;
                                },
                            },
                            {
                                key: "updateWalls",
                                value: function () {
                                    for (var e = null, t = null, a = 0; a < this.corners.length; a++) {
                                        var l = this.corners[a],
                                            n = this.corners[(a + 1) % this.corners.length],
                                            i = l.wallTo(n),
                                            s = l.wallFrom(n);
                                        if (i) var o = new ge(this, i, !0);
                                        else s ? (o = new ge(this, s, !1)) : console.log("corners arent connected by a wall, uh oh");
                                        0 === a ? (t = o) : ((o.prev = e), (e.next = o), a + 1 === this.corners.length && ((t.prev = o), (o.next = t))), (e = o);
                                    }
                                    this.edgePointer = t;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                fe = (function () {
                    function e() {
                        var t = this;
                        Object(_.a)(this, e),
                            (this.scene = null),
                            (this.walls = []),
                            (this.corners = []),
                            (this.rooms = []),
                            (this.new_wall_callbacks = []),
                            (this.new_corner_callbacks = []),
                            (this.redraw_callbacks = []),
                            (this.updated_rooms = []),
                            (this.roomLoadedCallbacks = []),
                            (this.floorTextures = {}),
                            (this.removeCorner = function (e) {
                                ee.Utils.removeValue(t.corners, e);
                            });
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "wallEdges",
                                value: function () {
                                    var e = [];
                                    return (
                                        this.walls.forEach(function (t) {
                                            t.frontEdge && e.push(t.frontEdge), t.backEdge && e.push(t.backEdge);
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "wallEdgePlanes",
                                value: function () {
                                    var e = [];
                                    return (
                                        this.walls.forEach(function (t) {
                                            t.frontEdge && e.push(t.frontEdge.plane), t.backEdge && e.push(t.backEdge.plane);
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "floorPlanes",
                                value: function () {
                                    return ee.Utils.map(this.rooms, function (e) {
                                        return e.floorPlane;
                                    });
                                },
                            },
                            {
                                key: "fireOnNewWall",
                                value: function (e) {
                                    this.new_wall_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnNewCorner",
                                value: function (e) {
                                    this.new_corner_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnRedraw",
                                value: function (e) {
                                    this.redraw_callbacks.push(e);
                                },
                            },
                            {
                                key: "fireOnUpdatedRooms",
                                value: function (e) {
                                    this.updated_rooms.push(e);
                                },
                            },
                            {
                                key: "newWall",
                                value: function (e, t) {
                                    var a = new ue(e, t);
                                    this.walls.push(a);
                                    var l = this;
                                    return (
                                        a.fireOnDelete(function () {
                                            l.removeWall(a);
                                        }),
                                        this.new_wall_callbacks.forEach(function (e) {
                                            return "function" === typeof e && e(a);
                                        }),
                                        this.update(),
                                        a
                                    );
                                },
                            },
                            {
                                key: "removeWall",
                                value: function (e) {
                                    ee.Utils.removeValue(this.walls, e), this.update();
                                },
                            },
                            {
                                key: "newCorner",
                                value: function (e, t, a) {
                                    var l = new _e(this, e, t, a);
                                    return (
                                        this.corners.push(l),
                                        l.fireOnDelete(this.removeCorner),
                                        this.new_corner_callbacks.forEach(function (e) {
                                            return "function" === typeof e && e(l);
                                        }),
                                        l
                                    );
                                },
                            },
                            {
                                key: "getWalls",
                                value: function () {
                                    return this.walls;
                                },
                            },
                            {
                                key: "getItems",
                                value: function () {
                                    return this.scene.items;
                                },
                            },
                            {
                                key: "getCorners",
                                value: function () {
                                    return this.corners;
                                },
                            },
                            {
                                key: "getRooms",
                                value: function () {
                                    return this.rooms;
                                },
                            },
                            {
                                key: "overlappedCorner",
                                value: function (e, t, a) {
                                    a = a || 0.05;
                                    for (var l = 0; l < this.corners.length; l++) if (this.corners[l].distanceFrom(e, t) < a) return this.corners[l];
                                    return null;
                                },
                            },
                            {
                                key: "overlappedWall",
                                value: function (e, t, a) {
                                    a = a || 0.05;
                                    for (var l = 0; l < this.walls.length; l++) if (this.walls[l].distanceFrom(e, t) < a) return this.walls[l];
                                    return null;
                                },
                            },
                            {
                                key: "overlappedItem",
                                value: function (e, t) {
                                    var a,
                                        l = this.getItems(),
                                        n = null,
                                        i = Object(L.a)(l);
                                    try {
                                        for (i.s(); !(a = i.n()).done; ) {
                                            var s,
                                                o = a.value,
                                                m = o.getSnapPoints(),
                                                d = !1,
                                                b = Object(L.a)(m);
                                            try {
                                                for (b.s(); !(s = b.n()).done; ) {
                                                    var r = s.value;
                                                    if (ee.Utils.pointInPolygon(e, t, r)) {
                                                        d = !0;
                                                        break;
                                                    }
                                                }
                                            } catch (p) {
                                                b.e(p);
                                            } finally {
                                                b.f();
                                            }
                                            if (d) {
                                                n = o;
                                                break;
                                            }
                                        }
                                    } catch (p) {
                                        i.e(p);
                                    } finally {
                                        i.f();
                                    }
                                    return n;
                                },
                            },
                            {
                                key: "calculateRulerData",
                                value: function () {
                                    var e = Object(he.a)(
                                        this.getCorners().map(function (e) {
                                            return { x: e.x, y: e.y };
                                        })
                                    );
                                    this.getItems().forEach(function (t) {
                                        return e.push.apply(e, Object(he.a)(t.getCorners()));
                                    });
                                    for (var t = [], a = [], l = 0; l < e.length; l++) {
                                        var n,
                                            i = !1,
                                            s = Object(L.a)(t);
                                        try {
                                            for (s.s(); !(n = s.n()).done; ) {
                                                if (n.value.x === e[l].x) {
                                                    i = !0;
                                                    break;
                                                }
                                            }
                                        } catch (b) {
                                            s.e(b);
                                        } finally {
                                            s.f();
                                        }
                                        !i && t.push(e[l]), (i = !1);
                                        var o,
                                            m = Object(L.a)(a);
                                        try {
                                            for (m.s(); !(o = m.n()).done; ) {
                                                if (o.value.y === e[l].y) {
                                                    i = !0;
                                                    break;
                                                }
                                            }
                                        } catch (b) {
                                            m.e(b);
                                        } finally {
                                            m.f();
                                        }
                                        !i && a.push(e[l]);
                                    }
                                    (t = t.sort(function (e, t) {
                                        return e.x - t.x;
                                    })),
                                        (a = a.sort(function (e, t) {
                                            return e.y - t.y;
                                        }));
                                    var d = { x: [], y: [] };
                                    for (l = 0; l < t.length - 1; l++) d.x.push({ start: t[l], end: t[l + 1], length: Math.abs(t[l].x - t[l + 1].x) });
                                    for (l = 0; l < a.length - 1; l++) d.y.push({ start: a[l], end: a[l + 1], length: Math.abs(a[l].y - a[l + 1].y) });
                                    return d;
                                },
                            },
                            {
                                key: "saveFloorplan",
                                value: function () {
                                    var e = { corners: {}, walls: [], wallTextures: [], floorTextures: {}, newFloorTextures: {} };
                                    return (
                                        this.corners.forEach(function (t) {
                                            e.corners[t.id] = { x: t.x, y: t.y };
                                        }),
                                        this.walls.forEach(function (t) {
                                            e.walls.push({ corner1: t.getStart().id, corner2: t.getEnd().id, frontTexture: t.frontTexture, backTexture: t.backTexture });
                                        }),
                                        (e.newFloorTextures = this.floorTextures),
                                        e
                                    );
                                },
                            },
                            {
                                key: "loadFloorplan",
                                value: function (e) {
                                    this.reset();
                                    var t = {};
                                    if (null !== e && "corners" in e && "walls" in e) {
                                        for (var a in e.corners) {
                                            var l = e.corners[a];
                                            t[a] = this.newCorner(l.x / O, l.y / O, a);
                                        }
                                        var n = this;
                                        e.walls.forEach(function (e) {
                                            var a = n.newWall(t[e.corner1], t[e.corner2]);
                                            e.frontTexture && (a.frontTexture = e.frontTexture), e.backTexture && (a.backTexture = e.backTexture);
                                        }),
                                            "newFloorTextures" in e && (this.floorTextures = e.newFloorTextures),
                                            this.update(),
                                            this.roomLoadedCallbacks.forEach(function (e) {
                                                return "function" === typeof e && e();
                                            });
                                    }
                                },
                            },
                            {
                                key: "getFloorTexture",
                                value: function (e) {
                                    return e in this.floorTextures ? this.floorTextures[e] : null;
                                },
                            },
                            {
                                key: "setFloorTexture",
                                value: function (e, t, a, l, n) {
                                    this.floorTextures[e] = { url: t, scale: a, width: l, height: n };
                                },
                            },
                            {
                                key: "updateFloorTextures",
                                value: function () {
                                    var e = ee.Utils.map(this.rooms, function (e) {
                                        return e.getUuid();
                                    });
                                    for (var t in this.floorTextures) ee.Utils.hasValue(e, t) || delete this.floorTextures[t];
                                },
                            },
                            {
                                key: "reset",
                                value: function () {
                                    var e = this.corners.slice(0),
                                        t = this.walls.slice(0);
                                    e.forEach(function (e) {
                                        e.remove();
                                    }),
                                        t.forEach(function (e) {
                                            e.remove();
                                        }),
                                        (this.corners = []),
                                        (this.walls = []);
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    this.walls.forEach(function (e) {
                                        e.resetFrontBack();
                                    });
                                    var e = this.findRooms(this.corners);
                                    this.rooms = [];
                                    var t = this;
                                    e.forEach(function (e) {
                                        t.rooms.push(new De(t, e));
                                    }),
                                        this.assignOrphanEdges(),
                                        this.updateFloorTextures(),
                                        this.updated_rooms.forEach(function (e) {
                                            return "function" === typeof e && e();
                                        });
                                },
                            },
                            {
                                key: "getCenter",
                                value: function () {
                                    return this.getDimensions(!0);
                                },
                            },
                            {
                                key: "getSize",
                                value: function () {
                                    return this.getDimensions(!1);
                                },
                            },
                            {
                                key: "getDimensions",
                                value: function (e) {
                                    e = e || !1;
                                    var t = 1 / 0,
                                        a = -1 / 0,
                                        l = 1 / 0,
                                        n = -1 / 0;
                                    return (
                                        this.corners.forEach(function (e) {
                                            e.x < t && (t = e.x), e.x > a && (a = e.x), e.y < l && (l = e.y), e.y > n && (n = e.y);
                                        }),
                                        t === 1 / 0 || a === -1 / 0 || l === 1 / 0 || n === -1 / 0 ? new ce.Lb() : e ? new ce.Lb(0.5 * (t + a), 0, 0.5 * (l + n)) : new ce.Lb(a - t, 0, n - l)
                                    );
                                },
                            },
                            {
                                key: "assignOrphanEdges",
                                value: function () {
                                    var e = [];
                                    this.walls.forEach(function (t) {
                                        t.backEdge || t.frontEdge || ((t.orphan = !0), new ge(null, t, !1).generatePlane(), new ge(null, t, !0).generatePlane(), e.push(t));
                                    });
                                },
                            },
                            {
                                key: "findRooms",
                                value: function (e) {
                                    function t(e, t, a) {
                                        return ee.Utils.angle2pi(e.x - t.x, e.y - t.y, a.x - t.x, a.y - t.y);
                                    }
                                    var a = [];
                                    e.forEach(function (e) {
                                        e.adjacentCorners().forEach(function (l) {
                                            a.push(
                                                (function (e, a) {
                                                    var l = [],
                                                        n = { corner: a, previousCorners: [e] },
                                                        i = {};
                                                    i[e.id] = !0;
                                                    for (
                                                        var s = function () {
                                                            var s = n.corner;
                                                            if (((i[s.id] = !0), n.corner === e && s !== a)) return { v: n.previousCorners };
                                                            for (var o = [], m = n.corner.adjacentCorners(), d = 0; d < m.length; d++) {
                                                                var b = m[d];
                                                                (!(b.id in i) || (b === e && s !== a)) && o.push(b);
                                                            }
                                                            var r = n.previousCorners.slice(0);
                                                            if ((r.push(s), o.length > 1)) {
                                                                var p = n.previousCorners[n.previousCorners.length - 1];
                                                                o.sort(function (e, a) {
                                                                    return t(p, s, a) - t(p, s, e);
                                                                });
                                                            }
                                                            o.length > 0 &&
                                                                o.forEach(function (e) {
                                                                    l.push({ corner: e, previousCorners: r });
                                                                }),
                                                                (n = l.pop());
                                                        };
                                                        n;

                                                    ) {
                                                        var o = s();
                                                        if ("object" === typeof o) return o.v;
                                                    }
                                                    return [];
                                                })(e, l)
                                            );
                                        });
                                    });
                                    var l = (function (e) {
                                        for (
                                            var t = [],
                                                a = {},
                                                l = function (e) {
                                                    return e.id;
                                                },
                                                n = 0;
                                            n < e.length;
                                            n++
                                        ) {
                                            for (var i = !0, s = e[n], o = 0; o < s.length; o++) {
                                                var m = ee.Utils.cycle(s, o),
                                                    d = ee.Utils.map(m, l).join("-");
                                                a.hasOwnProperty(d) && (i = !1);
                                            }
                                            i && (t.push(e[n]), (a[d] = !0));
                                        }
                                        return t;
                                    })(a);
                                    return ee.Utils.removeIf(l, ee.Utils.isClockwise);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Le = a(24),
                ve = a(12),
                ke = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l) {
                        var n;
                        return (
                            Object(_.a)(this, a),
                            ((n = t.call(this)).scene = e.scene),
                            (n.item = l),
                            (n.frameMaterial = new ce.T({ color: 14540253 })),
                            (n.offsetCenter = new ce.Lb()),
                            (n.canvasDepth = document.createElement("canvas")),
                            (n.canvasWidth = document.createElement("canvas")),
                            (n.canvasHeight = document.createElement("canvas")),
                            (n.sizeOrigin = JSON.parse(JSON.stringify(l.halfSize))),
                            n.configFrames(),
                            n.configLabels(),
                            n.drawLabels(n.item.halfSize),
                            ee.Configuration.getBooleanValue(ee.configDimensionVisible) || (n.visible = !1),
                            document.addEventListener(ee.BP3D_EVENT_CONFIG_CHANGED, function (e) {
                                var t = e.detail;
                                t && (t.dimUnit && n.update(), t.hasOwnProperty(ee.configDimensionVisible) && (t[ee.configDimensionVisible] ? (n.visible = !0) : (n.visible = !1)));
                            }),
                            n
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "update",
                                value: function () {
                                    var e = this.item.halfSize;
                                    this.drawLabels(e);
                                    var t = this.item.getBounding(),
                                        a = new ce.Lb((t.max.x + t.min.x) / 2, (t.max.y + t.min.y) / 2, (t.max.z + t.min.z) / 2);
                                    this.offsetCenter = a.sub(this.item.position);
                                    for (var l = 0; l < this.children.length; l++) {
                                        var n = this.children[l];
                                        l >= 0 && l < 4
                                            ? ((n.scale.z = e.z / this.sizeOrigin.z),
                                              l % 4 === 0 && n.position.set(-e.x + this.offsetCenter.x, e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(e.x + this.offsetCenter.x, e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(e.x + this.offsetCenter.x, -e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(-e.x + this.offsetCenter.x, -e.y + this.offsetCenter.y, this.offsetCenter.z))
                                            : l >= 4 && l < 8
                                            ? ((n.scale.x = e.x / this.sizeOrigin.x),
                                              l % 4 === 0 && n.position.set(this.offsetCenter.x, -e.y + this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(this.offsetCenter.x, e.y + this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(this.offsetCenter.x, e.y + this.offsetCenter.y, -e.z + this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(this.offsetCenter.x, -e.y + this.offsetCenter.y, -e.z + this.offsetCenter.z))
                                            : l >= 8 && l < 12
                                            ? ((n.scale.y = e.y / this.sizeOrigin.y),
                                              l % 4 === 0 && n.position.set(-e.x + this.offsetCenter.x, this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(e.x + this.offsetCenter.x, this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(e.x + this.offsetCenter.x, this.offsetCenter.y, -e.z + this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(-e.x + this.offsetCenter.x, this.offsetCenter.y, -e.z + this.offsetCenter.z))
                                            : l >= 12 && l < 16
                                            ? ((n.material.map.needsUpdate = !0),
                                              l % 4 === 0 && n.position.set(-e.x + this.offsetCenter.x, e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(e.x + this.offsetCenter.x, e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(e.x + this.offsetCenter.x, -e.y + this.offsetCenter.y, this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(-e.x + this.offsetCenter.x, -e.y + this.offsetCenter.y, this.offsetCenter.z))
                                            : l >= 16 && l < 20
                                            ? ((n.material.map.needsUpdate = !0),
                                              l % 4 === 0 && n.position.set(this.offsetCenter.x, e.y + this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(this.offsetCenter.x, -e.y + this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(this.offsetCenter.x, e.y + this.offsetCenter.y, -e.z + this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(this.offsetCenter.x, -e.y + this.offsetCenter.y, -e.z + this.offsetCenter.z))
                                            : l >= 20 &&
                                              l < 24 &&
                                              ((n.material.map.needsUpdate = !0),
                                              l % 4 === 0 && n.position.set(-e.x + this.offsetCenter.x, this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 1 && n.position.set(e.x + this.offsetCenter.x, this.offsetCenter.y, e.z + this.offsetCenter.z),
                                              l % 4 === 2 && n.position.set(e.x + this.offsetCenter.x, this.offsetCenter.y, -e.z + this.offsetCenter.z),
                                              l % 4 === 3 && n.position.set(-e.x + this.offsetCenter.x, this.offsetCenter.y, -e.z + this.offsetCenter.z));
                                    }
                                },
                            },
                            {
                                key: "configFrames",
                                value: function () {
                                    var e = this.item.halfSize,
                                        t = 0.002,
                                        a = new ce.f(t, t, 2 * e.z),
                                        l = new ce.Q(a, this.frameMaterial),
                                        n = new ce.Q().copy(l),
                                        i = new ce.Q().copy(l),
                                        s = new ce.Q().copy(l);
                                    l.position.set(-e.x, e.y, 0), n.position.set(e.x, e.y, 0), i.position.set(e.x, -e.y, 0), s.position.set(-e.x, -e.y, 0), this.add(l), this.add(n), this.add(i), this.add(s);
                                    var o = new ce.f(2 * e.x, t, t),
                                        m = new ce.Q(o, this.frameMaterial),
                                        d = new ce.Q().copy(m),
                                        b = new ce.Q().copy(m),
                                        r = new ce.Q().copy(m);
                                    m.position.set(0, -e.y, e.z), d.position.set(0, e.y, e.z), b.position.set(0, e.y, -e.z), r.position.set(0, -e.y, -e.z), this.add(m), this.add(d), this.add(b), this.add(r);
                                    var p = new ce.f(t, 2 * e.y, t),
                                        c = new ce.Q(p, this.frameMaterial),
                                        h = new ce.Q().copy(c),
                                        y = new ce.Q().copy(c),
                                        u = new ce.Q().copy(c);
                                    c.position.set(-e.x, 0, e.z), h.position.set(e.x, 0, e.z), y.position.set(e.x, 0, -e.z), u.position.set(-e.x, 0, -e.z), this.add(c), this.add(h), this.add(y), this.add(u);
                                },
                            },
                            {
                                key: "configLabels",
                                value: function () {
                                    var e = this.item.halfSize,
                                        t = this.makeTextSprite(this.canvasDepth),
                                        a = new ce.Cb().copy(t),
                                        l = new ce.Cb().copy(t),
                                        n = new ce.Cb().copy(t);
                                    t.position.set(-e.x, e.y, 0),
                                        a.position.set(e.x, e.y, 0),
                                        l.position.set(e.x, -e.y, 0),
                                        n.position.set(-e.x, -e.y, 0),
                                        (a.visible = l.visible = n.visible = !1),
                                        this.add(t),
                                        this.add(a),
                                        this.add(l),
                                        this.add(n);
                                    var i = this.makeTextSprite(this.canvasWidth),
                                        s = new ce.Cb().copy(i),
                                        o = new ce.Cb().copy(i),
                                        m = new ce.Cb().copy(i);
                                    i.position.set(0, e.y, e.z),
                                        s.position.set(0, -e.y, e.z),
                                        o.position.set(0, e.y, -e.z),
                                        m.position.set(0, -e.y, -e.z),
                                        (s.visible = o.visible = m.visible = !1),
                                        this.add(i),
                                        this.add(s),
                                        this.add(o),
                                        this.add(m);
                                    var d = this.makeTextSprite(this.canvasHeight),
                                        b = new ce.Cb().copy(d),
                                        r = new ce.Cb().copy(d),
                                        p = new ce.Cb().copy(d);
                                    d.position.set(-e.x, 0, e.z),
                                        b.position.set(e.x, 0, e.z),
                                        r.position.set(e.x, 0, -e.z),
                                        p.position.set(-e.x, 0, -e.z),
                                        (b.visible = r.visible = p.visible = !1),
                                        this.add(d),
                                        this.add(b),
                                        this.add(r),
                                        this.add(p);
                                },
                            },
                            {
                                key: "setSelected",
                                value: function () {
                                    this.frameMaterial.color.setHex(16711680);
                                },
                            },
                            {
                                key: "setUnselected",
                                value: function () {
                                    this.frameMaterial.color.setHex(14540253);
                                },
                            },
                            {
                                key: "drawLabels",
                                value: function (e) {
                                    this.drawCanvas(this.canvasDepth, ee.Dimensioning.cmToMeasure(2 * e.z * 100), { fontsize: 24, color: { r: 0, g: 0, b: 255, a: 1 } }),
                                        this.drawCanvas(this.canvasWidth, ee.Dimensioning.cmToMeasure(2 * e.x * 100), { fontsize: 24, color: { r: 255, g: 0, b: 0, a: 1 } }),
                                        this.drawCanvas(this.canvasHeight, ee.Dimensioning.cmToMeasure(2 * e.y * 100), { fontsize: 24, color: { r: 0, g: 255, b: 0, a: 1 } });
                                },
                            },
                            {
                                key: "drawCanvas",
                                value: function (e, t, a) {
                                    void 0 === a && (a = {});
                                    var l = a.hasOwnProperty("fontface") ? a.fontface : "Arial",
                                        n = a.hasOwnProperty("fontsize") ? a.fontsize : 18,
                                        i = a.hasOwnProperty("color") ? a.color : { r: 0, g: 0, b: 0, a: 1 },
                                        s = e.getContext("2d");
                                    s.clearRect(0, 0, e.width, e.height),
                                        (s.font = "Bold ".concat(n, "px ").concat(l)),
                                        (s.textBaseline = "middle"),
                                        (s.textAlign = "center"),
                                        (s.fillStyle = "rgba(".concat(i.r, ",").concat(i.g, ",").concat(i.b, ",").concat(i.a, ")")),
                                        s.fillText(t, e.width / 2, e.height / 2),
                                        (s.strokeStyle = "#ffffff"),
                                        (s.lineWidth = 0.1),
                                        s.strokeText(t, e.width / 2, e.height / 2);
                                },
                            },
                            {
                                key: "makeTextSprite",
                                value: function (e) {
                                    var t = new ce.Fb(e);
                                    t.needsUpdate = !0;
                                    var a = new ce.Db({ map: t, depthTest: !1, transparent: !0 }),
                                        l = new ce.Cb(a);
                                    return (l.renderOrder = 100), l.scale.set(1, 0.75, 1), l;
                                },
                            },
                            {
                                key: "setPosition",
                                value: function (e) {
                                    this.position.copy(e);
                                },
                            },
                            {
                                key: "setRotation",
                                value: function (e) {
                                    this.rotation.y = e;
                                },
                            },
                        ]),
                        a
                    );
                })(ce.u),
                Te = a(29),
                Se = a.n(Te),
                He = a(30),
                Ce = a.n(He),
                Be = "-ver-arr-ext-",
                we = "-hor-arr-ext-",
                Oe = ["grommet", "glide", "handle", "Box001"],
                je = ["legs", "glass", Be, we],
                Pe = { black: 1184274, silver: 15658734, nickel: 15658598 },
                Fe = function (e, t, a) {
                    var l = /\(min(\d+)\)/g.exec(e.name);
                    if (l && l[1]) {
                        var n = parseInt(l[1]);
                        a = (5 + 295 * a - n) / (300 - n);
                    }
                    return a;
                },
                Ee = function (e, t) {
                    var a,
                        l = 0,
                        n = Object(L.a)(e);
                    try {
                        for (n.s(); !(a = n.n()).done; ) {
                            var i,
                                s = a.value,
                                o = Object(L.a)(t);
                            try {
                                for (o.s(); !(i = o.n()).done; ) {
                                    var m = i.value;
                                    Me(s, m) && l++;
                                }
                            } catch (d) {
                                o.e(d);
                            } finally {
                                o.f();
                            }
                        }
                    } catch (d) {
                        n.e(d);
                    } finally {
                        n.f();
                    }
                    return l > 0;
                },
                Me = function (e, t) {
                    return e.distanceTo(t) <= 0.001;
                },
                We = function (e) {
                    for (var t = []; e.length; ) {
                        var a = [];
                        a.push(e[0]), e.splice(0, 1);
                        var l = -1;
                        do {
                            l = -1;
                            for (var n = 0; n < e.length; n++) {
                                for (var i = e[n], s = 0; s < a.length; s++) {
                                    var o = a[s];
                                    if (Ee(o, i)) {
                                        l = n;
                                        break;
                                    }
                                }
                                if (l >= 0) break;
                            }
                            l >= 0 && (a.push(e[l]), e.splice(l, 1));
                        } while (l >= 0);
                        t.push(a);
                    }
                    return t;
                },
                Ge = function (e, t) {
                    var a,
                        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        s = e.position,
                        o = [],
                        m = Object(L.a)(t);
                    try {
                        var d = function () {
                            var t = a.value,
                                m = !1,
                                d = [];
                            if (
                                (d.push.apply(d, Oe),
                                i && d.push.apply(d, je),
                                d.forEach(function (e) {
                                    t.name.toLowerCase().includes(e) && (m = !0);
                                }),
                                m)
                            )
                                return "continue";
                            var r = [];
                            t.geometry.attributes.position.array.forEach(function (e) {
                                return r.push(e);
                            });
                            try {
                                if (Array.isArray(t.morphTargetInfluences)) {
                                    var p = t.morphTargetInfluences.length;
                                    for (b = 0; b < p; b++) for (var c = t.geometry.morphAttributes.position[b].array, h = 0; h < r.length; h++) r[h] = r[h] + c[h] * t.morphTargetInfluences[b];
                                }
                            } catch (x) {}
                            var y = [];
                            for (b = 0; b < r.length; b += 3) {
                                var u = new ce.Lb(r[b], r[b + 1], r[b + 2]),
                                    _ = new ce.P();
                                Math.abs(t.rotation.z) === Math.PI && (u.x *= -1), !n && _.makeRotationY(e.rotation.y), u.applyMatrix4(_), u.add(s), y.push(u);
                            }
                            var g = [];
                            for (b = 0; b < y.length; b += 3) g.push([y[b], y[b + 1], y[b + 2]]);
                            We(g).forEach(function (e) {
                                var t = [];
                                e.forEach(function (e) {
                                    return e.forEach(function (e) {
                                        var a,
                                            n = !1,
                                            i = Object(L.a)(t);
                                        try {
                                            for (i.s(); !(a = i.n()).done; ) {
                                                var s = a.value;
                                                if (Me(s, e)) {
                                                    n = !0;
                                                    break;
                                                }
                                                if (l && Me(new ce.Lb(s.x, 0, s.z), new ce.Lb(e.x, 0, e.z))) {
                                                    n = !0;
                                                    break;
                                                }
                                            }
                                        } catch (o) {
                                            i.e(o);
                                        } finally {
                                            i.f();
                                        }
                                        !n && t.push(e);
                                    });
                                }),
                                    o.push(t);
                            });
                        };
                        for (m.s(); !(a = m.n()).done; ) {
                            var b;
                            d();
                        }
                    } catch (r) {
                        m.e(r);
                    } finally {
                        m.f();
                    }
                    return o;
                },
                Re = function (e) {
                    return Ce()(e);
                },
                Ie = function (e) {
                    return Se()(e, 1);
                },
                Ue = function (e, t) {
                    var a = [];
                    if (
                        (Ge(e, e.children, !0, !1, !0).forEach(function (e) {
                            var t = (e.length < 16 ? Ie : Re)(
                                e.map(function (e) {
                                    return [e.x, e.z];
                                })
                            );
                            a.push(
                                t.map(function (e) {
                                    return { x: e[0], y: e[1] };
                                })
                            );
                        }),
                        t)
                    ) {
                        var l = [];
                        return (
                            a.forEach(function (e) {
                                return (l = [].concat(Object(he.a)(l), Object(he.a)(e)));
                            }),
                            l
                        );
                    }
                    return a;
                },
                ze = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        a = 1 / 0,
                        l = 1 / 0,
                        n = 1 / 0,
                        i = -1 / 0,
                        s = -1 / 0,
                        o = -1 / 0;
                    t = t.length ? t : e.children;
                    var m = Ge(e, t, !1, !0);
                    return (
                        m.forEach(function (e) {
                            e.forEach(function (e) {
                                a > e.x && (a = e.x), l > e.y && (l = e.y), n > e.z && (n = e.z), i < e.x && (i = e.x), s < e.y && (s = e.y), o < e.z && (o = e.z);
                            });
                        }),
                        { min: new ce.Lb(a, l, n), max: new ce.Lb(i, s, o) }
                    );
                },
                Ne = (function () {
                    var e = Object(u.a)(
                        y.a.mark(function e(t) {
                            return y.a.wrap(function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return e.abrupt(
                                                "return",
                                                new Promise(function (e) {
                                                    var a = document.createElement("canvas");
                                                    (a.width = 100), (a.height = 100);
                                                    var l = a.getContext("2d"),
                                                        n = new Image();
                                                    (n.src = t),
                                                        (n.onload = function () {
                                                            l.drawImage(n, 0, 0, 100, 100);
                                                            var t = l.getImageData(50, 50, 1, 1).data;
                                                            e(t[0] / 255);
                                                        });
                                                })
                                            );
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function (t) {
                        return e.apply(this, arguments);
                    };
                })(),
                Ve = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return (
                            Object(_.a)(this, a),
                            ((m = t.call(this)).errorGlow = new ce.Q()),
                            (m.hover = !1),
                            (m.selected = !1),
                            (m.highlighted = !1),
                            (m.error = !1),
                            (m.resizable = !0),
                            (m.fixed = !1),
                            (m.stackable = !1),
                            (m.stackontop = !1),
                            (m.overlappable = !1),
                            (m.allowRotate = !0),
                            (m.obstructFloorMoves = !0),
                            (m.emissiveColor = 2236962),
                            (m.errorColor = 16711680),
                            (m.flippable = !1),
                            (m.flipped = !1),
                            (m.dragOffset = new ce.Lb()),
                            (m.childMeshes = []),
                            (m.morphAlign = 0),
                            (m.hullPointsCollection = []),
                            (m.boundingGizmo = null),
                            (m.prevPosition = { x: null, y: null, z: null }),
                            (m.prevRotation = null),
                            (m.prevMorph = {}),
                            (m.initObject = function (e, t, a, l) {
                                (this.halfSize = this.objectHalfSize()),
                                    this.prepareMeshes(e),
                                    this.configDimensionLabels(),
                                    t ? (this.position.copy(t), (this.position_set = !0)) : (this.position.set(0, 0, 0), (this.position_set = !1)),
                                    this.dimensionHelper.position.copy(this.position),
                                    a && ((this.rotation.y = a), (this.dimensionHelper.rotation.y = a)),
                                    (this.castShadow = !0),
                                    (this.receiveShadow = !0),
                                    this.moveChildMeshes(),
                                    this.rotateChildMeshes(),
                                    this.setOptions(l),
                                    this.placeInRoom();
                            }),
                            (m.getOptions = function () {
                                return { morph: m.morph, textures: m.textures, styles: m.styles, fixed: m.fixed, stackable: m.stackable, stackontop: m.stackontop, overlappable: m.overlappable };
                            }),
                            (m.setOptions = function (e) {
                                if (e) {
                                    if (
                                        (e.hasOwnProperty("fixed") && (m.fixed = e.fixed),
                                        e.hasOwnProperty("stackable") && (m.stackable = e.stackable),
                                        e.hasOwnProperty("stackontop") && (m.stackontop = e.stackontop),
                                        e.hasOwnProperty("overlappable") && (m.overlappable = e.overlappable),
                                        e.morph)
                                    )
                                        for (var t in e.morph) m.setMorph(t, e.morph[t]);
                                    if (e.textures) for (t in e.textures) m.updateMaterial(t, e.textures[t].material, e.textures[t].size);
                                    if (e.styles) for (t in e.styles) m.updateStyle(t, e.styles[t]);
                                }
                            }),
                            (m.getCollidableMeshList = function () {
                                var e,
                                    t = [],
                                    a = Object(L.a)(m.children);
                                try {
                                    for (a.s(); !(e = a.n()).done; ) {
                                        var l = e.value,
                                            n = !1;
                                        Oe.forEach(function (e) {
                                            l.name.toLowerCase().includes(e) && (n = !0);
                                        }),
                                            n || t.push(l);
                                    }
                                } catch (i) {
                                    a.e(i);
                                } finally {
                                    a.f();
                                }
                                return t;
                            }),
                            (m.addLinkedItem = function (e) {
                                e !== Object(ve.a)(m) &&
                                    (m.removeLinkedItem(e) || ((e.groupParent = Object(ve.a)(m)), e.setSelected(), m.linkedItems.push(e), document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_LINKED_ITEMS_CHANGED, {}))));
                            }),
                            (m.removeLinkedItem = function (e) {
                                var t,
                                    a = -1,
                                    l = Object(L.a)(m.linkedItems.entries());
                                try {
                                    for (l.s(); !(t = l.n()).done; ) {
                                        var n = Object(Y.a)(t.value, 2),
                                            i = n[0];
                                        if (n[1] === e) {
                                            a = i;
                                            break;
                                        }
                                    }
                                } catch (s) {
                                    l.e(s);
                                } finally {
                                    l.f();
                                }
                                return a >= 0 ? ((e.groupParent = null), e.setUnselected(), m.linkedItems.splice(a, 1), !0) : (document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_LINKED_ITEMS_CHANGED, {})), !1);
                            }),
                            (m.checkIsLinkedMesh = function (e) {
                                var t = !1;
                                return (
                                    m.linkedItems.forEach(function (a) {
                                        e === a && (t = !0);
                                    }),
                                    t
                                );
                            }),
                            (m.clearLinkedItems = function () {
                                m.linkedItems.forEach(function (e) {
                                    (e.groupParent = null), e.setUnselected();
                                }),
                                    (m.linkedItems = []),
                                    document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_LINKED_ITEMS_CHANGED, {}));
                            }),
                            (m.getCenterWithLinkedItems = function () {
                                var e = [];
                                return (
                                    e.push(new ce.Lb().copy(m.position)),
                                    m.linkedItems.forEach(function (t) {
                                        return e.push(t.position);
                                    }),
                                    (function (e) {
                                        var t = new ce.Lb();
                                        return (
                                            e.forEach(function (e) {
                                                return (t = t.add(e));
                                            }),
                                            (t = t.multiplyScalar(1 / e.length))
                                        );
                                    })(e)
                                );
                            }),
                            (m.setStackable = function (e) {
                                return (m.stackable = e);
                            }),
                            (m.setOverlappable = function (e) {
                                return (m.overlappable = e);
                            }),
                            (m.setMorphAlign = function (e) {
                                return (m.morphAlign = e);
                            }),
                            (m.flipHorizontal = function () {}),
                            (m.changed = function () {
                                m.calculateHullPointsCollection();
                            }),
                            (m.getHeight = function () {
                                return 2 * m.halfSize.y;
                            }),
                            (m.getWidth = function () {
                                return 2 * m.halfSize.x;
                            }),
                            (m.getDepth = function () {
                                return 2 * m.halfSize.z;
                            }),
                            (m.setRotationY = function (e) {
                                m.rotateByAngle(e), m.changed();
                            }),
                            (m.rotateLinkedItems = function (e, t) {
                                m.linkedItems.forEach(function (a) {
                                    t || (t = m.getCenterWithLinkedItems()), a.rotateByAngle(a.rotation.y + e);
                                    var l = new ce.P();
                                    l.makeRotationY(e);
                                    var n = new ce.Lb().copy(a.position).sub(t),
                                        i = new ce.Lb().copy(n);
                                    n.applyMatrix4(l), (i = n.sub(i)), a.relativeMove(i.x, i.z);
                                });
                            }),
                            (m.setPosition = function (e) {
                                var t = new ce.Lb().copy(m.position);
                                m.position.copy(e), m.dimensionHelper.position.copy(e);
                                var a = e.sub(t);
                                m.moveChildMeshes(), m.moveLinkedItems(a), m.changed();
                            }),
                            (m.moveLinkedItems = function (e) {
                                m.linkedItems.forEach(function (t) {
                                    t.relativeMove(e.x, e.z);
                                });
                            }),
                            (m.getSnapPoints = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (e) {
                                    var t = [];
                                    return (
                                        m.hullPointsCollection.forEach(function (e) {
                                            return (t = [].concat(Object(he.a)(t), Object(he.a)(e)));
                                        }),
                                        t
                                    );
                                }
                                return m.hullPointsCollection;
                            }),
                            (m.updateMaterial = function (e, t) {
                                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { w: 0.5, h: 0.5 },
                                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                                (m.textures[e] = { material: t, size: a }),
                                    m.linkedItems.forEach(function (n) {
                                        return n.updateMaterial(e, t, a, l);
                                    }),
                                    m.traverse(
                                        (function () {
                                            var n = Object(u.a)(
                                                y.a.mark(function n(i) {
                                                    var s, o, m;
                                                    return y.a.wrap(function (n) {
                                                        for (;;)
                                                            switch ((n.prev = n.next)) {
                                                                case 0:
                                                                    if (!i.name.toLowerCase().includes(e.toLowerCase())) {
                                                                        n.next = 19;
                                                                        break;
                                                                    }
                                                                    if ((((s = i.material.clone()).map = null), !t.texture)) {
                                                                        n.next = 18;
                                                                        break;
                                                                    }
                                                                    if ((((o = new ce.Gb().load(t.texture)).wrapS = ce.sb), (o.wrapT = ce.sb), o.repeat.set(1 / a.w, 1 / a.h), !i.name.includes("glass"))) {
                                                                        n.next = 15;
                                                                        break;
                                                                    }
                                                                    return (n.next = 11), Ne(t.texture);
                                                                case 11:
                                                                    (m = n.sent), (s.roughness = s.metalness = m), (n.next = 17);
                                                                    break;
                                                                case 15:
                                                                    s.color.setHex(t.color ? t.color : 16777215), (s.map = o);
                                                                case 17:
                                                                    "function" === typeof l && l();
                                                                case 18:
                                                                    i.material = s;
                                                                case 19:
                                                                case "end":
                                                                    return n.stop();
                                                            }
                                                    }, n);
                                                })
                                            );
                                            return function (e) {
                                                return n.apply(this, arguments);
                                            };
                                        })()
                                    );
                            }),
                            (m.updateStyle = function (e, t, a) {
                                (m.styles[e] = t),
                                    m.linkedItems.forEach(function (l) {
                                        return l.updateStyle(e, t, a);
                                    }),
                                    m.traverse(function (a) {
                                        if ("lock" !== e || !a.name.includes("block"))
                                            try {
                                                e.split(",").forEach(function (e) {
                                                    e.length && a.name.toLowerCase().includes(e.toLowerCase()) && (a.visible = !1);
                                                }),
                                                    t.split(",").forEach(function (e) {
                                                        e.length && a.name.toLowerCase().includes(e.toLowerCase()) && (a.visible = !0);
                                                    });
                                            } catch (l) {
                                                console.log(l);
                                            }
                                    }),
                                    "function" === typeof a && a();
                            }),
                            (m.updateBlocksByHeight = function (e) {
                                for (var t = null, a = null, l = "(block)", n = m.children.length - 1; n >= 0; n--) {
                                    var i = m.children[n];
                                    i.name.includes(l) && (i.visible = !0),
                                        i.name.includes(Be) && (m.scene.remove(i), m.children.splice(n, 1)),
                                        i.name.includes(l) && !i.name.includes(Be) && (t = i),
                                        i.name.includes("(block-top)") && (a = i);
                                }
                                if (t) {
                                    var s = 0;
                                    if (a) {
                                        var o = ze(Object(ve.a)(m), [a]);
                                        s = o.max.y - o.min.y;
                                    }
                                    var d = [];
                                    d.push(t);
                                    var b = ze(Object(ve.a)(m), [t]),
                                        r = b.max.y - b.min.y,
                                        p = t.position.y,
                                        c = Math.floor((e - s - p) / r) - 1;
                                    for (n = 0; n < c; n++) {
                                        var h = new ce.Q().copy(t);
                                        (h.geometryBackup = t.geometryBackup), (h.name += "".concat(Be).concat(n)), (h.position.y = p + r), m.add(h), (p = h.position.y), d.push(h);
                                    }
                                    var y = d[d.length - 1];
                                    y.position.y > e - s - 2 * r && (y.visible = !1);
                                }
                            }),
                            (m.updateBlocksByWidth = function (e) {
                                for (var t = "(block-hor)", a = null, l = m.children.length - 1; l >= 0; l--) {
                                    var n = m.children[l];
                                    n.name.includes(t) && (n.visible = !0), n.name.includes(we) && (m.scene.remove(n), m.children.splice(l, 1)), n.name.includes(t) && !n.name.includes(we) && (a = n);
                                }
                                if (a) {
                                    var i = 0,
                                        s = 0,
                                        o = 1,
                                        d = 0,
                                        b = 0,
                                        r = /\(s(\d+\,?\d+)\)/g.exec(a.name);
                                    r && r[1] && ((i = parseFloat(r[1].replace(",", "."))), (i *= 0.0254), (s = d = e / (o = Math.floor(e / i))));
                                    (r = /\(ml(\d+)\,mr(\d+)\)/g.exec(a.name)) && r[1] && r[2] && ((d = (2.54 * parseFloat(r[1])) / 100), (b = (2.54 * parseFloat(r[2])) / 100));
                                    if ((r = /\(a((?:\d+,)*\d+)\)/g.exec(a.name)) && r[1]) {
                                        !1;
                                        var p = r[1].split(",");
                                        for (var l in p) {
                                            l = parseInt(l);
                                            var c = (2.54 * parseFloat(p[l])) / 100;
                                            if (e < c && 0 == l) {
                                                o = 0;
                                                break;
                                            }
                                            if (e >= c && l == p.length - 1) {
                                                o = p.length;
                                                break;
                                            }
                                            if (e >= c && e < (2.54 * parseFloat(p[l - 0 + 1])) / 100) {
                                                o = l + 1;
                                                break;
                                            }
                                        }
                                        (i = s = (e - d - b) / o), (o += 2);
                                    }
                                    if (0 === i || o < 2) a.visible = !1;
                                    else
                                        for (a.visible = !0, l = 0; l < o - 1; l++) {
                                            var h = void 0;
                                            0 === l ? (h = a) : (((h = new ce.Q().copy(a)).geometryBackup = a.geometryBackup), (h.name += "".concat(we).concat(l)), m.add(h)), (h.position.x = -e / 2 + d + l * s);
                                        }
                                }
                            }),
                            (m.model = e),
                            (m.scene = m.model.scene),
                            (m.metadata = l),
                            Array.isArray(n) &&
                                n.forEach(function (e) {
                                    m.add(e);
                                    var t = new ce.Q().copy(e);
                                    (t.material = e.material.clone()), (t.material.transparent = !0), (t.material.opacity = 0), m.childMeshes.push(t), m.scene.add(t);
                                }),
                            (m.centerOffset = new ce.Lb()),
                            (m.morph = {}),
                            (m.textures = {}),
                            (m.styles = {}),
                            (m.blockCount = 1),
                            (m.errorColor = 16711680),
                            (m.resizable = l.resizable),
                            (m.castShadow = !0),
                            (m.receiveShadow = !1),
                            (m.linkedItems = []),
                            m
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "prepareMeshes",
                                value: function (e) {
                                    var t = this;
                                    if (Array.isArray(e)) {
                                        var a,
                                            l = !1,
                                            n = !1,
                                            i = Object(L.a)(e);
                                        try {
                                            var s = function () {
                                                var e = a.value;
                                                try {
                                                    e.name.includes("(block)") && (l = !0), e.name.includes("(block-hor") && (n = !0), (e.castShadow = !0), (e.receiveShadow = !0);
                                                    var i = e.material;
                                                    (e.material = new ce.T()), ce.V.prototype.copy.call(e.material, i);
                                                    var s = new ce.h().copy(e.geometry);
                                                    (e.geometryBackup = s),
                                                        (function () {
                                                            var t = /\(opacity(\d+)\)/g.exec(e.name);
                                                            if (t && t[1]) {
                                                                var a = parseInt(t[1]);
                                                                (e.material.transparent = !0), (e.material.opacity = a / 100);
                                                            }
                                                        })(),
                                                        (function () {
                                                            if (e.name.includes("handle"))
                                                                for (var t in Pe)
                                                                    if (e.name.includes(t)) {
                                                                        var a = e.material.clone();
                                                                        (e.material = a), e.material.color.setHex(Pe[t]);
                                                                    }
                                                        })(),
                                                        (function () {
                                                            if (e.name.includes("lock") && !e.name.includes("block")) {
                                                                var t = e.material.clone();
                                                                t.color.setHex(1184274), (e.material = t);
                                                            }
                                                        })(),
                                                        (function () {
                                                            if (e.name.includes("glass")) {
                                                                var a = e.material;
                                                                (e.material = new ce.U()), ce.R.prototype.copy.call(e.material, a);
                                                                var l = e.material;
                                                                (l.transparent = !0),
                                                                    (l.roughness = l.metalness = e.name.includes("acrylic") ? 0.5 : 0),
                                                                    (l.transmission = 0.8),
                                                                    (l.thickness = 1),
                                                                    l.color.setHex(8947848),
                                                                    (l.envMap = t.scene.environment),
                                                                    (l.envMapIntensity = 2),
                                                                    l.emissive.setHex(4473924),
                                                                    console.log(l);
                                                            }
                                                        })(),
                                                        (function () {
                                                            if (e.name.includes("glide")) {
                                                                var a = e.material;
                                                                (e.material = new ce.U()), ce.R.prototype.copy.call(e.material, a);
                                                                var l = e.material;
                                                                (l.roughness = 0), (l.metalness = 0.8), l.color.setHex(0), (l.envMap = t.scene.environment), (l.envMapIntensity = 2), console.log(l);
                                                            }
                                                        })();
                                                } catch (o) {
                                                    console.log(o);
                                                }
                                            };
                                            for (i.s(); !(a = i.n()).done; ) s();
                                        } catch (o) {
                                            i.e(o);
                                        } finally {
                                            i.f();
                                        }
                                        l && (this.metadata.blockMorphIndex = 0), n && (this.metadata.horizontalBlockMorphIndex = 1);
                                    }
                                },
                            },
                            {
                                key: "configDimensionLabels",
                                value: function () {
                                    (this.dimensionHelper = new ke(this.model, this)), this.scene.add(this.dimensionHelper);
                                },
                            },
                            {
                                key: "showDimensionHelper",
                                value: function () {
                                    this.dimensionHelper.visible = !0;
                                },
                            },
                            {
                                key: "hideDimensionHelper",
                                value: function () {
                                    this.dimensionHelper.visible = !1;
                                },
                            },
                            {
                                key: "getBounding",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                    try {
                                        var l = { x: t.position.x, y: t.position.y, z: t.position.z },
                                            n = t.rotation.y,
                                            i = JSON.parse(JSON.stringify(this.morph));
                                        return (
                                            (e || JSON.stringify(l) !== JSON.stringify(this.prevPosition) || JSON.stringify(i) !== JSON.stringify(this.morph) || n !== this.prevRotation) &&
                                                ((this.boundingGizmo = ze(t, a)), (this.prevPosition = l), (this.prevRotation = n), (this.prevMorph = i)),
                                            this.boundingGizmo
                                        );
                                    } catch (s) {
                                        return null;
                                    }
                                },
                            },
                            {
                                key: "remove",
                                value: function () {
                                    var e,
                                        t = Object(L.a)(this.childMeshes);
                                    try {
                                        for (t.s(); !(e = t.n()).done; ) {
                                            var a = e.value;
                                            this.scene.remove(a);
                                        }
                                    } catch (l) {
                                        t.e(l);
                                    } finally {
                                        t.f();
                                    }
                                    this.scene.remove(this.dimensionHelper), this.scene.removeItem(this);
                                },
                            },
                            { key: "resize", value: function (e, t, a) {} },
                            {
                                key: "getMorph",
                                value: function (e) {
                                    return this.morph[e] ? this.morph[e] : 0;
                                },
                            },
                            {
                                key: "setMorph",
                                value: function (e, t) {
                                    this.morph[e] = t;
                                    try {
                                        var a = ze(this);
                                        a = a.max.sub(a.min);
                                        var l,
                                            n = Object(L.a)(this.children);
                                        try {
                                            for (n.s(); !(l = n.n()).done; ) {
                                                var i = l.value;
                                                try {
                                                    Array.isArray(i.morphTargetInfluences) && i.morphTargetInfluences.length > e && (i.morphTargetInfluences[e] = Fe(i, 0, t));
                                                } catch (p) {
                                                    console.log(p);
                                                }
                                            }
                                        } catch (c) {
                                            n.e(c);
                                        } finally {
                                            n.f();
                                        }
                                        var s,
                                            o = Object(L.a)(this.childMeshes);
                                        try {
                                            for (o.s(); !(s = o.n()).done; ) {
                                                var m = s.value;
                                                try {
                                                    Array.isArray(m.morphTargetInfluences) && m.morphTargetInfluences.length > e && (m.morphTargetInfluences[e] = Fe(m, 0, t));
                                                } catch (p) {
                                                    console.log(p);
                                                }
                                            }
                                        } catch (c) {
                                            o.e(c);
                                        } finally {
                                            o.f();
                                        }
                                        this.updateUV(), (this.halfSize = this.objectHalfSize()), this.dimensionHelper.update();
                                        var d = ze(this),
                                            b = new ce.Lb((d.min.x + d.max.x) / 2, 0, (d.min.z + d.max.z) / 2);
                                        (this.centerOffset = b.sub(this.position)),
                                            (this.centerOffset.y = 0),
                                            parseInt(e, 10) === parseInt(this.metadata.blockMorphIndex, 10) && this.updateBlocksByHeight((2.54 * (5 + 295 * t)) / 100),
                                            parseInt(e, 10) === parseInt(this.metadata.horizontalBlockMorphIndex, 10) && this.updateBlocksByWidth((2.54 * (5 + 295 * t)) / 100);
                                        var r = ze(this);
                                        (r = r.max.sub(r.min)), this.morphAlignModel(e, a, r, this.morphAlign), this.resized(), this.changed();
                                    } catch (p) {
                                        console.log(p);
                                    }
                                },
                            },
                            {
                                key: "morphAlignModel",
                                value: function (e, t, a) {
                                    var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.morphAlign,
                                        n = new ce.Lb().copy(a).sub(t),
                                        i = new ce.Lb().copy(this.position),
                                        s = new ce.Lb();
                                    if (0 != e) {
                                        1 == e && 0 != n.x
                                            ? 5 === l || 4 === l || 6 === l
                                                ? (s.x = n.x / 2)
                                                : (1 !== l && 2 !== l && 8 !== l) || (s.x = -n.x / 2)
                                            : 2 == e && 0 != n.z && (3 === l || 4 === l || 2 === l ? (s.z = n.z / 2) : (7 !== l && 6 !== l && 8 !== l) || (s.z = -n.z / 2));
                                        var o = new ce.P();
                                        o.makeRotationY(this.rotation.y), s.applyMatrix4(o), (i = i.add(s)), this.position.copy(i), this.dimensionHelper.position.copy(i), this.moveChildMeshes();
                                    }
                                },
                            },
                            {
                                key: "updateUV",
                                value: function () {
                                    try {
                                        var e = this.metadata.morphUVs;
                                        if (!Array.isArray(this.metadata.morphUVs)) return;
                                        !(function (e, t, a) {
                                            var l,
                                                n = Object(L.a)(t);
                                            try {
                                                for (n.s(); !(l = n.n()).done; ) {
                                                    var i = l.value;
                                                    i.geometry.attributes.uv.needsUpdate = !0;
                                                    for (var s = i.geometry.attributes.uv.array, o = i.geometryBackup.attributes.uv.array, m = 0; m < o.length; m++) s[m] = o[m];
                                                    for (var d in e)
                                                        if (a[d]) {
                                                            var b = i.name;
                                                            if ((b.includes(Be) && (b = b.split(Be)[0]), b.includes(we) && (b = b.split(we)[0]), Array.isArray(a[d][b]) && a[d][b].length === s.length)) {
                                                                var r = Fe(i, 0, e[d]),
                                                                    p = a[d][b];
                                                                for (m in s) s[m] += (p[m] - o[m]) * r;
                                                            }
                                                        }
                                                }
                                            } catch (c) {
                                                n.e(c);
                                            } finally {
                                                n.f();
                                            }
                                        })(this.morph, this.children, e);
                                    } catch (t) {
                                        console.log("failed updating uv", t);
                                    }
                                },
                            },
                            { key: "setScale", value: function (e, t, a) {} },
                            {
                                key: "setFixed",
                                value: function (e) {
                                    this.fixed = e;
                                },
                            },
                            { key: "resized", value: function () {} },
                            {
                                key: "placeInRoom",
                                value: function () {
                                    this.position_set;
                                },
                            },
                            { key: "removed", value: function () {} },
                            {
                                key: "updateHighlight",
                                value: function () {
                                    var e = this.hover || this.selected,
                                        t = [],
                                        a = [];
                                    a.push.apply(a, Object(he.a)(this.childMeshes)),
                                        this.linkedItems.forEach(function (e) {
                                            return a.push.apply(a, Object(he.a)(e.childMeshes));
                                        }),
                                        this.groupParent && a.push.apply(a, Object(he.a)(this.groupParent.childMeshes)),
                                        a.forEach(function (e) {
                                            var a = !1;
                                            Oe.forEach(function (t) {
                                                e.name.toLowerCase().includes(t) && (a = !0);
                                            }),
                                                a || t.push(e);
                                        }),
                                        e
                                            ? document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_HIGHLIGHT_CHANGED, { detail: { objects: t } }))
                                            : document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_HIGHLIGHT_CHANGED, { detail: { objects: [] } }));
                                },
                            },
                            {
                                key: "mouseOver",
                                value: function () {
                                    (this.hover = !0), this.updateHighlight();
                                },
                            },
                            {
                                key: "mouseOff",
                                value: function () {
                                    (this.hover = !1), this.updateHighlight();
                                },
                            },
                            {
                                key: "setSelected",
                                value: function () {
                                    (this.selected = !0), this.updateHighlight();
                                },
                            },
                            {
                                key: "setUnselected",
                                value: function () {
                                    (this.selected = !1), this.updateHighlight();
                                },
                            },
                            {
                                key: "clickPressed",
                                value: function (e) {
                                    this.dragOffset.copy(e.point).sub(this.position);
                                },
                            },
                            {
                                key: "clickDragged",
                                value: function (e) {
                                    e && this.moveToPosition(e.point, e);
                                },
                            },
                            {
                                key: "rotateChildMeshes",
                                value: function () {
                                    for (var e in this.childMeshes) this.childMeshes[e].rotation.y = this.rotation.y;
                                },
                            },
                            {
                                key: "rotate",
                                value: function (e, t) {
                                    if (e) {
                                        var a = this.getCenterWithLinkedItems(),
                                            l = this.rotation.y;
                                        isNaN(t) && (t = ee.Utils.angle(0, 1, e.point.x - a.x, e.point.z - a.z));
                                        for (var n = Math.PI / 16, i = -4; i <= 4; i++)
                                            if (Math.abs(t - i * (Math.PI / 2)) < n) {
                                                t = i * (Math.PI / 2);
                                                break;
                                            }
                                        var s = t - l;
                                        (this.rotation.y = t), this.dimensionHelper.setRotation(t);
                                        var o = new ce.P();
                                        o.makeRotationY(s);
                                        var m = new ce.Lb().copy(this.position).sub(a),
                                            d = new ce.Lb().copy(m);
                                        m.applyMatrix4(o),
                                            (d = m.sub(d)),
                                            this.relativeMove(d.x, d.z),
                                            this.rotateChildMeshes(),
                                            this.rotateLinkedItems(s, a),
                                            this.changed(),
                                            this.groupParent && this.groupParent.isSet && this.groupParent.update();
                                    }
                                },
                            },
                            {
                                key: "rotateByAngle",
                                value: function (e) {
                                    (this.rotation.y = e), this.rotateChildMeshes(), this.dimensionHelper.setRotation(e);
                                },
                            },
                            {
                                key: "moveChildMeshes",
                                value: function () {
                                    for (var e in this.childMeshes) {
                                        var t = new ce.Lb();
                                        this.children[e].getWorldPosition(t), this.childMeshes[e].position.copy(t);
                                    }
                                },
                            },
                            {
                                key: "moveToPosition",
                                value: function (e, t) {
                                    isNaN(e.x) || isNaN(e.y) || isNaN(e.z) ? console.log("nan detected") : (this.setPosition(e), this.changed());
                                },
                            },
                            {
                                key: "relativeMove",
                                value: function (e, t) {
                                    if (!this.fixed) {
                                        var a = new ce.Lb().copy(this.position);
                                        (a.x += e), (a.z += t), this.position.copy(a), this.moveChildMeshes(), this.dimensionHelper.position.copy(a);
                                    }
                                },
                            },
                            {
                                key: "clickReleased",
                                value: function () {
                                    this.error && this.hideError();
                                },
                            },
                            {
                                key: "customIntersectionPlanes",
                                value: function () {
                                    return [];
                                },
                            },
                            {
                                key: "getCorners",
                                value: function (e, t, a) {
                                    a = a || this.position;
                                    var l = this.halfSize.clone(),
                                        n = new ce.Lb(-l.x, 0, -l.z),
                                        i = new ce.Lb(l.x, 0, -l.z),
                                        s = new ce.Lb(l.x, 0, l.z),
                                        o = new ce.Lb(-l.x, 0, l.z),
                                        m = new ce.P();
                                    m.makeRotationY(this.rotation.y), n.applyMatrix4(m), i.applyMatrix4(m), s.applyMatrix4(m), o.applyMatrix4(m), n.add(a), i.add(a), s.add(a), o.add(a);
                                    var d = this.centerOffset.clone();
                                    return (
                                        d.applyMatrix4(m),
                                        n.add(d),
                                        i.add(d),
                                        s.add(d),
                                        o.add(d),
                                        [
                                            { x: n.x, y: n.z },
                                            { x: i.x, y: i.z },
                                            { x: s.x, y: s.z },
                                            { x: o.x, y: o.z },
                                        ]
                                    );
                                },
                            },
                            {
                                key: "calculateHullPointsCollection",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this,
                                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                    this.hullPointsCollection = Ue(e, t);
                                },
                            },
                            { key: "isValidPosition", value: function (e) {} },
                            {
                                key: "showError",
                                value: function (e) {
                                    (e = e || this.position), this.error || ((this.error = !0), (this.errorGlow = this.createGlow(this.errorColor, 0.8, !0)), this.scene.add(this.errorGlow)), this.errorGlow.position.copy(e);
                                },
                            },
                            {
                                key: "hideError",
                                value: function () {
                                    this.error && ((this.error = !1), this.scene.remove(this.errorGlow));
                                },
                            },
                            {
                                key: "objectHalfSize",
                                value: function () {
                                    var e = this.getBounding(!0);
                                    return e.max.clone().sub(e.min).divideScalar(2);
                                },
                            },
                            {
                                key: "createGlow",
                                value: function (e, t, a) {
                                    var l = this;
                                    (a = a || !1), (t = t || 0.2);
                                    var n,
                                        i = new ce.R({ color: e, blending: ce.a, opacity: 0.2, transparent: !0, depthTest: !a }),
                                        s = new ce.Q(),
                                        o = Object(L.a)(this.children);
                                    try {
                                        for (o.s(); !(n = o.n()).done; ) {
                                            var m = n.value,
                                                d = new ce.Q().copy(m);
                                            (d.geometry = new ce.h().copy(m.geometry)), (d.material = new ce.R().copy(i)), s.add(d);
                                        }
                                    } catch (b) {
                                        o.e(b);
                                    } finally {
                                        o.f();
                                    }
                                    return (
                                        s.children.forEach(function (e) {
                                            e.geometry.attributes.position.needsUpdate = !0;
                                            var t = e.geometry.attributes.position.array;
                                            try {
                                                if (l.morph)
                                                    for (var a in l.morph)
                                                        if (e.geometry.morphAttributes && e.geometry.morphAttributes.position && e.geometry.morphAttributes.position.length > a)
                                                            for (var n = e.geometry.morphAttributes.position[a].array, i = Fe(e, 0, l.morph[a]), s = 0; s < t.length; s++) t[s] += n[s] * i;
                                            } catch (o) {
                                                console.log(o);
                                            }
                                        }),
                                        (s.material = i),
                                        s.position.copy(this.position),
                                        s.rotation.copy(this.rotation),
                                        s.scale.copy(this.scale),
                                        s
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(ce.Q),
                Ae = -1,
                Ke = 0,
                Xe = 1,
                Ye = 0.2,
                Qe = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        var e;
                        Object(_.a)(this, a);
                        for (var l = arguments.length, n = new Array(l), i = 0; i < l; i++) n[i] = arguments[i];
                        return (
                            ((e = t.call.apply(t, [this].concat(n))).getBottomObjectsForStack = function () {
                                var t = [];
                                return (
                                    e.model.scene.items.forEach(function (e) {
                                        e.stackontop && t.push(t);
                                    }),
                                    t
                                );
                            }),
                            (e.getStackingPosition = function (t) {
                                var a,
                                    l = 0,
                                    n = e.getCorners("x", "z", t),
                                    i = e.model.scene.items,
                                    s = Object(L.a)(i);
                                try {
                                    for (s.s(); !(a = s.n()).done; ) {
                                        var o = a.value;
                                        if (o !== Object(ve.a)(e) && o.obstructFloorMoves && o.stackontop && (!ee.Utils.polygonOutsidePolygon(n, o.getCorners("x", "z")) || ee.Utils.polygonPolygonIntersect(n, o.getCorners("x", "z")))) {
                                            var m = o.getBounding().max.y;
                                            m > l && (l = m);
                                        }
                                    }
                                } catch (d) {
                                    s.e(d);
                                } finally {
                                    s.f();
                                }
                                return l + 0;
                            }),
                            (e.getSnapPosition = function (t) {
                                for (var a = e.getCorners("x", "z", t), l = 1 / 0, n = 1 / 0, i = a[0].x, s = a[1].x, o = a[0].y, m = a[2].y, d = e.model.scene.items, b = 0; b < d.length; b++)
                                    if (d[b] !== Object(ve.a)(e) && d[b].obstructFloorMoves && !e.checkIsLinkedMesh(d[b])) {
                                        var r,
                                            p = d[b].getSnapPoints(!0),
                                            c = Object(L.a)(p);
                                        try {
                                            for (c.s(); !(r = c.n()).done; ) {
                                                var h = r.value;
                                                Math.abs(i - h.x) < Ye && Math.abs(i - h.x) < Math.abs(l) && ((l = h.x - i), (l -= (l / Math.abs(l)) * 0)),
                                                    Math.abs(s - h.x) < Ye && Math.abs(s - h.x) < Math.abs(l) && ((l = h.x - s), (l -= (l / Math.abs(l)) * 0)),
                                                    Math.abs(o - h.y) < Ye && Math.abs(o - h.y) < Math.abs(n) && ((n = h.y - o), (n -= (n / Math.abs(n)) * 0)),
                                                    Math.abs(m - h.y) < Ye && Math.abs(m - h.y) < Math.abs(n) && ((n = h.y - m), (n -= (n / Math.abs(n)) * 0));
                                            }
                                        } catch (y) {
                                            c.e(y);
                                        } finally {
                                            c.f();
                                        }
                                    }
                                l !== 1 / 0 && (t.x += l), n !== 1 / 0 && (t.z += n);
                            }),
                            (e.isOverlapped = function () {
                                for (
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.getCorners("x", "z"), l = e.getBounding(), n = 0;
                                    n < t.length;
                                    n++
                                )
                                    if (t[n] !== Object(ve.a)(e) && t[n].obstructFloorMoves && !e.checkIsLinkedMesh(t[n]) && !0 !== t[n].isSet) {
                                        var i = t[n].getBounding();
                                        if (!(i.min.y >= l.max.y) && !(l.min.y >= i.max.y)) {
                                            var s = t[n].getCorners("x", "z");
                                            if (ee.Utils.polygonPolygonIntersect(a, s)) return Xe;
                                        }
                                    }
                                return Ke;
                            }),
                            (e.isValidPosition = function (t) {
                                for (var a = e.getCorners("x", "z", t), l = e.model.scene.items, n = e.model.floorplan.getRooms(), i = !1, s = 0; s < n.length; s++)
                                    ee.Utils.pointInPolygon(t.x, t.z, n[s].interiorCorners) && !ee.Utils.polygonPolygonIntersect(a, n[s].interiorCorners) && (i = !0);
                                return i ? (ee.Configuration.getBooleanValue(ee.configSnapMode) && e.getSnapPosition(t), e.overlappable ? Ke : e.isOverlapped(l, a)) : Ae;
                            }),
                            e
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            { key: "placeInRoom", value: function () {} },
                            { key: "resized", value: function () {} },
                            {
                                key: "moveToPosition",
                                value: function (e, t) {
                                    if (!(isNaN(e.x) || isNaN(e.y) || isNaN(e.z))) {
                                        var a = this.isValidPosition(e);
                                        if (a === Ke || a === Xe) {
                                            this.hideError();
                                            var l = new ce.Lb().copy(e),
                                                n = 0;
                                            if (this.stackable) {
                                                if (0 === this.getBottomObjectsForStack().length) return console.log("no bottom objects"), void this.showError();
                                                var i = this.getStackingPosition(l);
                                                if (0 === i) return void this.showError();
                                                n = i;
                                            }
                                            var s = new ce.Lb().copy(this.position);
                                            if (((l.y = n), a === Xe && !this.overlappable)) return void this.showError(e);
                                            if (isNaN(l.x) || isNaN(l.y) || isNaN(l.z)) return;
                                            this.position.copy(l), this.dimensionHelper.position.copy(l);
                                            var o = new ce.Lb().copy(this.position).sub(s);
                                            this.moveChildMeshes(), this.moveLinkedItems(o), this.changed(), this.groupParent && this.groupParent.isSet && this.groupParent.update();
                                        } else this.showError(e);
                                    }
                                },
                            },
                        ]),
                        a
                    );
                })(Ve),
                Je = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return (
                            Object(_.a)(this, a),
                            ((m = t.call(this, e, l, n, i, s, o)).currentWallEdge = null),
                            (m.refVec = new ce.Kb(0, 1)),
                            (m.wallOffsetScalar = 0),
                            (m.sizeX = 0),
                            (m.sizeY = 0),
                            (m.addToWall = !1),
                            (m.boundToFloor = !1),
                            (m.frontVisible = !1),
                            (m.backVisible = !1),
                            (m.allowRotate = !1),
                            (m.morphAlign = 3),
                            m
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "closestWallEdge",
                                value: function () {
                                    var e = this.model.floorplan.wallEdges(),
                                        t = null,
                                        a = null,
                                        l = this.position.x,
                                        n = this.position.z;
                                    return (
                                        e.forEach(function (e) {
                                            var i = e.distanceTo(l, n);
                                            (null === a || i < a) && ((a = i), (t = e));
                                        }),
                                        t
                                    );
                                },
                            },
                            {
                                key: "removed",
                                value: function () {
                                    null != this.currentWallEdge && this.addToWall && (ee.Utils.removeValue(this.currentWallEdge.wall.items, this), this.redrawWall());
                                },
                            },
                            {
                                key: "redrawWall",
                                value: function () {
                                    this.addToWall && this.currentWallEdge.wall.fireRedraw();
                                },
                            },
                            {
                                key: "updateEdgeVisibility",
                                value: function (e, t) {
                                    t ? (this.frontVisible = e) : (this.backVisible = e), (this.visible = this.frontVisible || this.backVisible);
                                },
                            },
                            {
                                key: "updateSize",
                                value: function () {
                                    var e = this.getBounding();
                                    (this.wallOffsetScalar = ((e.max.z - e.min.z) * this.scale.z) / 2), (this.sizeX = (e.max.x - e.min.x) * this.scale.x), (this.sizeY = (e.max.y - e.min.y) * this.scale.y);
                                },
                            },
                            {
                                key: "resized",
                                value: function () {
                                    this.boundToFloor, this.updateSize(), this.redrawWall();
                                },
                            },
                            {
                                key: "placeInRoom",
                                value: function () {
                                    var e = this.closestWallEdge();
                                    if ((this.changeWallEdge(e), this.updateSize(), !this.position_set)) {
                                        var t = e.interiorCenter(),
                                            a = new ce.Lb(t.x, e.wall.height / 2, t.y);
                                        this.boundMove(a), this.position.copy(a), this.redrawWall();
                                    }
                                    this.moveChildMeshes(), this.rotateChildMeshes(), this.changed();
                                },
                            },
                            {
                                key: "moveToPosition",
                                value: function (e, t) {
                                    if (isNaN(e.x) || isNaN(e.y) || isNaN(e.z)) console.log("nan detected");
                                    else {
                                        console.log(t.object.edge), this.changeWallEdge(t.object.edge), this.boundMove(e), this.position.copy(e);
                                        var a = new ce.Lb().copy(e),
                                            l = this.getBounding();
                                        (a.y = (l.max.y + l.min.y) / 2), this.dimensionHelper.position.copy(a), this.moveChildMeshes(), this.redrawWall(), this.changed();
                                    }
                                },
                            },
                            {
                                key: "getWallOffset",
                                value: function () {
                                    return this.wallOffsetScalar;
                                },
                            },
                            {
                                key: "changeWallEdge",
                                value: function (e) {
                                    null != this.currentWallEdge && (this.addToWall ? (ee.Utils.removeValue(this.currentWallEdge.wall.items, this), this.redrawWall()) : ee.Utils.removeValue(this.currentWallEdge.wall.onItems, this)),
                                        null != this.currentWallEdge && this.currentWallEdge.wall.dontFireOnDelete(this.remove.bind(this)),
                                        e.wall.fireOnDelete(this.remove.bind(this));
                                    var t = new ce.Kb(),
                                        a = e.plane.geometry.faces[0].normal;
                                    (t.x = a.x), (t.y = a.z);
                                    var l = ee.Utils.angle(this.refVec.x, this.refVec.y, t.x, t.y);
                                    this.flipped && (l = (l + Math.PI) % (2 * Math.PI)),
                                        (this.rotation.y = l),
                                        (this.dimensionHelper.rotation.y = l),
                                        this.rotateChildMeshes(),
                                        (this.currentWallEdge = e),
                                        this.addToWall ? (e.wall.items.push(this), this.redrawWall()) : e.wall.onItems.push(this);
                                },
                            },
                            {
                                key: "customIntersectionPlanes",
                                value: function () {
                                    return this.model.floorplan.wallEdgePlanes();
                                },
                            },
                            {
                                key: "boundMove",
                                value: function (e) {
                                    var t = 0.02,
                                        a = this.currentWallEdge;
                                    e.applyMatrix4(a.interiorTransform),
                                        e.x < this.sizeX / 2 + t ? (e.x = this.sizeX / 2 + t) : e.x > a.interiorDistance() - this.sizeX / 2 - t && (e.x = a.interiorDistance() - this.sizeX / 2 - t),
                                        this.boundToFloor ? (e.y = 0 * this.scale.y + 0.01) : e.y < t ? (e.y = t) : e.y > a.height - this.sizeY - t && (e.y = a.height - this.sizeY - t),
                                        (e.z = this.getWallOffset()),
                                        e.applyMatrix4(a.invInteriorTransform);
                                },
                            },
                        ]),
                        a
                    );
                })(Ve),
                qe = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return (
                            Object(_.a)(this, a),
                            ((m = t.call(this, e, l, n, i, s, o)).flipHorizontal = function () {
                                (m.flipped = !m.flipped), (m.rotation.y = (m.rotation.y + Math.PI) % (2 * Math.PI));
                            }),
                            (m.addToWall = !0),
                            (m.morphAlign = 0),
                            (m.flippable = !0),
                            (m.flipped = !1),
                            m
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "getWallOffset",
                                value: function () {
                                    return 0.005 - this.currentWallEdge.offset;
                                },
                            },
                        ]),
                        a
                    );
                })(Je),
                Ze = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return Object(_.a)(this, a), ((m = t.call(this, e, l, n, i, s, o)).boundToFloor = !0), m;
                    }
                    return a;
                })(qe),
                $e = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return Object(_.a)(this, a), ((m = t.call(this, e, l, n, i, s, o)).obstructFloorMoves = !1), (m.receiveShadow = !0), m;
                    }
                    return a;
                })(Qe),
                et = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e, l, n, i, s, o) {
                        var m;
                        return Object(_.a)(this, a), ((m = t.call(this, e, l, n, i, s, o)).boundToFloor = !0), m;
                    }
                    return a;
                })(Je),
                tt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        var e;
                        Object(_.a)(this, a);
                        for (var l = arguments.length, n = new Array(l), i = 0; i < l; i++) n[i] = arguments[i];
                        return (
                            ((e = t.call.apply(t, [this].concat(n))).isSet = !0),
                            (e.opened = !1),
                            (e.initObject = function (e, t, a, l) {
                                (this.halfSize = this.objectHalfSize()),
                                    this.configDimensionLabels(),
                                    t ? (this.position.copy(t), this.dimensionHelper.position.copy(t), (this.position_set = !0)) : (this.position.set(0, 0, 0), (this.position_set = !1)),
                                    a && (this.rotation.y = a),
                                    this.placeInRoom(),
                                    (this.scene.needsUpdate = !0);
                            }),
                            (e.clearLinkedItems = function () {}),
                            (e.calculateHalfSize = function () {
                                e.halfSize = e.objectHalfSize();
                            }),
                            (e.getBounding = function () {
                                var t = 1 / 0,
                                    a = 1 / 0,
                                    l = 1 / 0,
                                    n = -1 / 0,
                                    i = -1 / 0,
                                    s = -1 / 0;
                                return (
                                    e.linkedItems.forEach(function (e) {
                                        var o = e.getBounding();
                                        o.min.x < t && (t = o.min.x), o.min.y < a && (a = o.min.y), o.min.z < l && (l = o.min.z), o.max.x > n && (n = o.max.x), o.max.y > i && (i = o.max.y), o.max.z > s && (s = o.max.z);
                                    }),
                                    { min: new ce.Lb(t, a, l), max: new ce.Lb(n, i, s) }
                                );
                            }),
                            (e.getCenterWithLinkedItems = function () {
                                return e.position;
                            }),
                            (e.update = function () {
                                e.calculateHalfSize(), e.dimensionHelper.update();
                            }),
                            (e.setOpened = function (t) {
                                return (e.opened = t);
                            }),
                            e
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            { key: "placeInRoom", value: function () {} },
                            {
                                key: "moveToPosition",
                                value: function (e, t) {
                                    if (isNaN(e.x) || isNaN(e.y) || isNaN(e.z)) console.log("nan detected");
                                    else {
                                        var a = new ce.Lb().copy(this.position);
                                        this.position.copy(e), this.dimensionHelper.position.copy(e);
                                        var l = new ce.Lb().copy(e).sub(a);
                                        this.moveLinkedItems(l);
                                    }
                                },
                            },
                            {
                                key: "setSelected",
                                value: function () {
                                    (this.selected = !0),
                                        this.updateHighlight(),
                                        this.linkedItems.forEach(function (e) {
                                            return e.setUnselected();
                                        });
                                },
                            },
                            {
                                key: "setUnselected",
                                value: function () {
                                    (this.selected = !1),
                                        this.linkedItems.forEach(function (e) {
                                            return e.setUnselected();
                                        }),
                                        this.updateHighlight();
                                },
                            },
                            {
                                key: "updateHighlight",
                                value: function () {
                                    var e = this.hover || this.selected;
                                    if (!this.opened) {
                                        var t = [],
                                            a = [];
                                        this.linkedItems.forEach(function (e) {
                                            return a.push.apply(a, Object(he.a)(e.childMeshes));
                                        }),
                                            a.forEach(function (e) {
                                                var a = !1;
                                                Oe.forEach(function (t) {
                                                    e.name.toLowerCase().includes(t) && (a = !0);
                                                }),
                                                    a || t.push(e);
                                            }),
                                            console.log("update highlight"),
                                            e
                                                ? document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_HIGHLIGHT_CHANGED, { detail: { objects: t } }))
                                                : document.dispatchEvent(new CustomEvent(ee.BP3D_EVENT_HIGHLIGHT_CHANGED, { detail: { objects: [] } }));
                                    }
                                },
                            },
                        ]),
                        a
                    );
                })(Ve),
                at = { 1: Qe, 2: Je, 3: qe, 7: Ze, 8: $e, 9: et, 101: tt },
                lt = (function () {
                    function e() {
                        Object(_.a)(this, e);
                    }
                    return (
                        Object(g.a)(e, null, [
                            {
                                key: "getClass",
                                value: function (e) {
                                    return at[e];
                                },
                            },
                        ]),
                        e
                    );
                })(),
                nt = d,
                it = (function () {
                    function e(t, a) {
                        Object(_.a)(this, e),
                            (this.items = []),
                            (this.needsUpdate = !1),
                            (this.itemLoadingCallbacks = []),
                            (this.itemLoadedCallbacks = []),
                            (this.itemRemovedCallbacks = []),
                            (this.collectOptionsFromItem = function (e) {
                                var t = {},
                                    a = {},
                                    l = {};
                                for (var n in e.builderOptions) {
                                    var i = e.builderOptions[n];
                                    "select" === i.propertyType && i.options.length && (t[i.nameInModel] = i.options[0].nameInModel);
                                }
                                return (
                                    Array.isArray(e.optionGroups) &&
                                        e.optionGroups.forEach(function (e) {
                                            "hide" === e.mode && e.options.length && (t[e.nameInModel] = e.options[0].nameInModel),
                                                "texture" === e.mode &&
                                                    e.options.length &&
                                                    (l[e.nameInModel] = { material: { texture: e.options[0].image }, size: { w: e.options[0].textureWidth / 100, h: e.options[0].textureHeight / 100 } });
                                        }),
                                    (function () {
                                        var t = e.builderOptions && e.builderOptions.height && e.builderOptions.height.minValue,
                                            l = e.builderOptions && e.builderOptions.width && e.builderOptions.width.minValue,
                                            n = e.builderOptions && e.builderOptions.depth && e.builderOptions.depth.minValue;
                                        for (var i in (t && ((a[0] = e.builderOptions.height.minValue), e.modelDescription && e.modelDescription.height && (a[0] = e.modelDescription.height)),
                                        l && ((a[1] = e.builderOptions.width.minValue), e.modelDescription && e.modelDescription.width && (a[1] = e.modelDescription.width)),
                                        n && ((a[2] = e.builderOptions.depth.minValue), e.modelDescription && e.modelDescription.depth && (a[2] = e.modelDescription.depth)),
                                        a))
                                            a[i] = (a[i] - 5) / 295;
                                    })(),
                                    { morph: a, styles: t, textures: l }
                                );
                            }),
                            (this.model = t),
                            (this.textureDir = a),
                            (this.scene = new ce.tb()),
                            (this.GLTFLoader = new Le.a()),
                            (this.GLTFLoader.crossOrigin = "");
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "add",
                                value: function (e) {
                                    this.scene.add(e);
                                },
                            },
                            {
                                key: "remove",
                                value: function (e) {
                                    this.scene.remove(e), ee.Utils.removeValue(this.items, e);
                                },
                            },
                            {
                                key: "getScene",
                                value: function () {
                                    return this.scene;
                                },
                            },
                            {
                                key: "getItems",
                                value: function () {
                                    return this.items;
                                },
                            },
                            {
                                key: "itemCount",
                                value: function () {
                                    return this.items.length;
                                },
                            },
                            {
                                key: "clearItems",
                                value: function () {
                                    var e = this;
                                    this.items.forEach(function (t) {
                                        t.dimensionHelper && e.remove(t.dimensionHelper), e.removeItem(t, !0);
                                    }),
                                        (this.items = []);
                                },
                            },
                            {
                                key: "removeItem",
                                value: function (e, t) {
                                    (t = t || !1),
                                        this.itemRemovedCallbacks.forEach(function (t) {
                                            return "function" === typeof t && t(e);
                                        }),
                                        e.removed(),
                                        this.scene.remove(e),
                                        t || ee.Utils.removeValue(this.items, e);
                                },
                            },
                            {
                                key: "addItem",
                                value: (function () {
                                    var e = Object(u.a)(
                                        y.a.mark(function e(t, a, l, n, i, s) {
                                            var o,
                                                m = this,
                                                d = arguments;
                                            return y.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (o = !(d.length > 6 && void 0 !== d[6]) || d[6]),
                                                                e.abrupt(
                                                                    "return",
                                                                    new Promise(function (e) {
                                                                        t = t || 1;
                                                                        var d = m;
                                                                        m.itemLoadingCallbacks.forEach(function (e) {
                                                                            return "function" === typeof e && e();
                                                                        }),
                                                                            m.GLTFLoader.load(
                                                                                a,
                                                                                function (a) {
                                                                                    var m = [],
                                                                                        b = {},
                                                                                        r = {},
                                                                                        p = {};
                                                                                    a.scene.traverse(function (e) {
                                                                                        if (e.isMesh)
                                                                                            if ((e.name.includes("morph-") || m.push(e), e.name.includes("morph-height"))) {
                                                                                                var t = e.name.replace("-morph-height", ""),
                                                                                                    a = [];
                                                                                                e.geometry.attributes.uv.array.forEach(function (e) {
                                                                                                    return a.push(e);
                                                                                                }),
                                                                                                    (b[t] = a);
                                                                                            } else if (e.name.includes("morph-width")) {
                                                                                                var l = e.name.replace("-morph-width", ""),
                                                                                                    n = [];
                                                                                                e.geometry.attributes.uv.array.forEach(function (e) {
                                                                                                    return n.push(e);
                                                                                                }),
                                                                                                    (r[l] = n);
                                                                                            } else if (e.name.includes("morph-depth")) {
                                                                                                var i = e.name.replace("-morph-depth", ""),
                                                                                                    s = [];
                                                                                                e.geometry.attributes.uv.array.forEach(function (e) {
                                                                                                    return s.push(e);
                                                                                                }),
                                                                                                    (p[i] = s);
                                                                                            }
                                                                                    });
                                                                                    var c = [b, r, p],
                                                                                        h = new (nt.Factory.getClass(t))(d.model, Object(f.a)(Object(f.a)({}, l), {}, { morphUVs: c }), m, n, i, s);
                                                                                    h.initObject(m, n, i, s),
                                                                                        d.items.push(h),
                                                                                        d.add(h),
                                                                                        console.log(h),
                                                                                        o &&
                                                                                            d.itemLoadedCallbacks.forEach(function (e) {
                                                                                                return "function" === typeof e && e(h);
                                                                                            }),
                                                                                        e(h);
                                                                                },
                                                                                void 0,
                                                                                function () {
                                                                                    e(null);
                                                                                }
                                                                            );
                                                                    })
                                                                )
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function (t, a, l, n, i, s) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "importSetFromBuilder",
                                value: (function () {
                                    var e = Object(u.a)(
                                        y.a.mark(function e(t, a, l, n, i) {
                                            var s, o, m, d, b, r;
                                            return y.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (Array.isArray(a) && a.length) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                return e.abrupt("return");
                                                            case 2:
                                                                console.log("import set from builder"),
                                                                    101,
                                                                    (s = this).itemLoadingCallbacks.forEach(function (e) {
                                                                        return "function" === typeof e && e();
                                                                    }),
                                                                    (o = new (nt.Factory.getClass(101))(s.model, Object(f.a)({}, t), [], l, n, i)),
                                                                    (m = Object(L.a)(a)),
                                                                    (e.prev = 8),
                                                                    m.s();
                                                            case 10:
                                                                if ((d = m.n()).done) {
                                                                    e.next = 18;
                                                                    break;
                                                                }
                                                                return (
                                                                    (b = d.value),
                                                                    (e.next = 14),
                                                                    s.addItem(
                                                                        b.type || b.item_type,
                                                                        b.model || b.modelUrl || b.model_url,
                                                                        b.metadata,
                                                                        new ce.Lb().copy(o.position).add(new ce.Lb(b.xpos, b.ypos, b.zpos)),
                                                                        b.rotation,
                                                                        b.options
                                                                    )
                                                                );
                                                            case 14:
                                                                (r = e.sent), o.addLinkedItem(r);
                                                            case 16:
                                                                e.next = 10;
                                                                break;
                                                            case 18:
                                                                e.next = 23;
                                                                break;
                                                            case 20:
                                                                (e.prev = 20), (e.t0 = e.catch(8)), m.e(e.t0);
                                                            case 23:
                                                                return (e.prev = 23), m.f(), e.finish(23);
                                                            case 26:
                                                                s.items.push(o),
                                                                    s.add(o),
                                                                    o.initObject(),
                                                                    o.calculateHalfSize(),
                                                                    o.dimensionHelper.update(),
                                                                    s.itemLoadedCallbacks.forEach(function (e) {
                                                                        return "function" === typeof e && e(o);
                                                                    });
                                                            case 32:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[8, 20, 23, 26]]
                                            );
                                        })
                                    );
                                    return function (t, a, l, n, i) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "addSet",
                                value: (function () {
                                    var e = Object(u.a)(
                                        y.a.mark(function e(t, a, l, n, i) {
                                            var s, o, m, d, b, r, p, c, h, u, _, g, x, D, v, k, T;
                                            return y.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                console.log("add set to scene", t, a),
                                                                    101,
                                                                    (s = this).itemLoadingCallbacks.forEach(function (e) {
                                                                        return "function" === typeof e && e();
                                                                    }),
                                                                    (o = new (nt.Factory.getClass(101))(s.model, Object(f.a)({}, t), [], l, n, i)),
                                                                    (m = Object(L.a)(a)),
                                                                    (e.prev = 6),
                                                                    m.s();
                                                            case 8:
                                                                if ((d = m.n()).done) {
                                                                    e.next = 23;
                                                                    break;
                                                                }
                                                                if (((b = d.value), (r = b.product), (p = new ce.Lb(b.offset.x, b.offset.y, b.offset.z)), (c = {}), Array.isArray(r.morph))) {
                                                                    h = Object(L.a)(r.morph);
                                                                    try {
                                                                        for (h.s(); !(u = h.n()).done; ) (_ = u.value), (c[_.index] = (_.min - 5) / 295);
                                                                    } catch (y) {
                                                                        h.e(y);
                                                                    } finally {
                                                                        h.f();
                                                                    }
                                                                }
                                                                if (((g = {}), Array.isArray(r.styles))) {
                                                                    x = Object(L.a)(r.styles);
                                                                    try {
                                                                        for (x.s(); !(D = x.n()).done; ) (v = D.value), (g[v.name_in_model] = v.types[0].name_in_model);
                                                                    } catch (y) {
                                                                        x.e(y);
                                                                    } finally {
                                                                        x.f();
                                                                    }
                                                                }
                                                                return (
                                                                    (k = Object(f.a)(Object(f.a)({}, r), {}, { itemName: r.name, modelUrl: r.model, itemType: r.type })),
                                                                    (e.next = 19),
                                                                    s.addItem(r.type, r.model, k, new ce.Lb().copy(o.position).add(p), null, {
                                                                        styles: g,
                                                                        morph: c,
                                                                        stackable: r.stackable,
                                                                        stackontop: r.stackontop,
                                                                        overlappable: r.overlappable,
                                                                    })
                                                                );
                                                            case 19:
                                                                (T = e.sent), o.addLinkedItem(T);
                                                            case 21:
                                                                e.next = 8;
                                                                break;
                                                            case 23:
                                                                e.next = 28;
                                                                break;
                                                            case 25:
                                                                (e.prev = 25), (e.t0 = e.catch(6)), m.e(e.t0);
                                                            case 28:
                                                                return (e.prev = 28), m.f(), e.finish(28);
                                                            case 31:
                                                                s.items.push(o),
                                                                    s.add(o),
                                                                    o.initObject(),
                                                                    o.calculateHalfSize(),
                                                                    o.dimensionHelper.update(),
                                                                    console.log(o),
                                                                    s.itemLoadedCallbacks.forEach(function (e) {
                                                                        return "function" === typeof e && e(o);
                                                                    });
                                                            case 38:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this,
                                                [[6, 25, 28, 31]]
                                            );
                                        })
                                    );
                                    return function (t, a, l, n, i) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        e
                    );
                })(),
                st = function e(t) {
                    var a = this;
                    Object(_.a)(this, e),
                        (this.roomLoadingCallbacks = []),
                        (this.roomLoadedCallbacks = []),
                        (this.roomSavedCallbacks = []),
                        (this.roomDeletedCallbacks = []),
                        (this.loadSerialized = function (e) {
                            a.roomLoadingCallbacks.forEach(function (e) {
                                return "function" === typeof e && e();
                            });
                            var t = JSON.parse(e);
                            a.newRoom(t.floorplan, t.items),
                                a.roomLoadedCallbacks.forEach(function (e) {
                                    return "function" === typeof e && e();
                                });
                        }),
                        (this.exportSerialized = function () {
                            var e,
                                t = [],
                                l = a.scene.getItems(),
                                n = Object(L.a)(l.entries());
                            try {
                                for (n.s(); !(e = n.n()).done; ) {
                                    var i = Object(Y.a)(e.value, 2),
                                        s = i[0],
                                        o = i[1];
                                    t[s] = {
                                        uuid: o.uuid,
                                        item_name: o.metadata.itemName,
                                        item_type: o.metadata.itemType,
                                        model_url: o.metadata.modelUrl || o.metadata.threeModel,
                                        xpos: o.position.x,
                                        ypos: o.position.y,
                                        zpos: o.position.z,
                                        rotation: o.rotation.y,
                                        metadata: o.metadata,
                                        options: o.getOptions(),
                                    };
                                }
                            } catch (d) {
                                n.e(d);
                            } finally {
                                n.f();
                            }
                            var m = { floorplan: a.floorplan.saveFloorplan(), items: t };
                            return JSON.stringify(m);
                        }),
                        (this.newRoom = function (e, t) {
                            a.scene.clearItems(),
                                a.floorplan.loadFloorplan(e),
                                t.forEach(function (e) {
                                    var t = new ce.Lb(e.xpos, e.ypos, e.zpos),
                                        l = e.metadata;
                                    a.scene.addItem(e.item_type, e.model_url, l, t, e.rotation, e.options);
                                });
                        }),
                        (this.floorplan = new fe()),
                        (this.scene = new it(this, t)),
                        (this.floorplan.scene = this.scene);
                };
            function ot(e) {
                var t = [
                        "varying vec3 vWorldPosition;",
                        "void main() {",
                        "  vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
                        "  vWorldPosition = worldPosition.xyz;",
                        "  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
                        "}",
                    ].join("\n"),
                    a = [
                        "uniform vec3 topColor;",
                        "uniform vec3 bottomColor;",
                        "uniform float offset;",
                        "varying vec3 vWorldPosition;",
                        "void main() {",
                        "  float h = normalize( vWorldPosition + offset ).y;",
                        "  gl_FragColor = vec4( mix( bottomColor, topColor, (h + 1.0) / 2.0), 1.0 );",
                        "}",
                    ].join("\n");
                !(function () {
                    var l = { topColor: { type: "c", value: new ce.l(16777215) }, bottomColor: { type: "c", value: new ce.l(15329769) }, offset: { type: "f", value: 500 } },
                        n = new ce.Ab(400, 32, 15),
                        i = new ce.ub({ vertexShader: t, fragmentShader: a, uniforms: l, side: ce.c }),
                        s = new ce.Q(n, i);
                    e.add(s);
                })();
            }
            var mt = function (e, t) {
                    (this.object = e),
                        (this.domElement = void 0 !== t ? t : document),
                        (this.enabled = !0),
                        (this.target = new ce.Lb()),
                        (this.center = this.target),
                        (this.noZoom = !1),
                        (this.zoomSpeed = 1),
                        (this.minDistance = 0),
                        (this.maxDistance = 1500),
                        (this.noRotate = !1),
                        (this.rotateSpeed = 1),
                        (this.noPan = !1),
                        (this.keyPanSpeed = 40),
                        (this.autoRotate = !1),
                        (this.autoRotateSpeed = 2),
                        (this.minPolarAngle = 0),
                        (this.maxPolarAngle = Math.PI / 2),
                        (this.noKeys = !1),
                        (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
                        (this.cameraMovedCallbacks = []),
                        (this.needsUpdate = !0);
                    var a = this,
                        l = 1e-6,
                        n = new ce.Kb(),
                        i = new ce.Kb(),
                        s = new ce.Kb(),
                        o = new ce.Kb(),
                        m = new ce.Kb(),
                        d = new ce.Kb(),
                        b = new ce.Kb(),
                        r = new ce.Kb(),
                        p = new ce.Kb(),
                        c = 0,
                        h = 0,
                        y = 1,
                        u = new ce.Lb(),
                        _ = -1,
                        g = 0,
                        x = 1,
                        D = 2,
                        f = 3,
                        L = 4,
                        v = 5,
                        k = _;
                    function T() {
                        return ((2 * Math.PI) / 60 / 60) * a.autoRotateSpeed;
                    }
                    function S() {
                        return Math.pow(0.95, a.zoomSpeed);
                    }
                    function H(e) {
                        if (!1 !== a.enabled) {
                            e.preventDefault();
                            var t = a.domElement === document ? a.domElement.body : a.domElement;
                            if (k === g) {
                                if (!0 === a.noRotate) return;
                                i.set(e.clientX, e.clientY), s.subVectors(i, n), a.rotateLeft(((2 * Math.PI * s.x) / t.clientWidth) * a.rotateSpeed), a.rotateUp(((2 * Math.PI * s.y) / t.clientHeight) * a.rotateSpeed), n.copy(i);
                            } else if (k === x) {
                                if (!0 === a.noZoom) return;
                                r.set(e.clientX, e.clientY), p.subVectors(r, b), p.y > 0 ? a.dollyIn() : a.dollyOut(), b.copy(r);
                            } else if (k === D) {
                                if (!0 === a.noPan) return;
                                m.set(e.clientX, e.clientY), d.subVectors(m, o), a.pan(d), o.copy(m);
                            }
                            a.update();
                        }
                    }
                    function C() {
                        !1 !== a.enabled && (a.domElement.removeEventListener("mousemove", H, !1), a.domElement.removeEventListener("mouseup", C, !1), (k = _));
                    }
                    function B(e) {
                        if (!1 !== a.enabled && !0 !== a.noZoom) {
                            var t = 0;
                            e.wheelDelta ? (t = e.wheelDelta) : e.detail && (t = -e.detail), t > 0 ? a.dollyOut() : a.dollyIn(), a.update();
                        }
                    }
                    (this.controlsActive = function () {
                        return k === _;
                    }),
                        (this.setPan = function (e) {
                            u = e;
                        }),
                        (this.panTo = function (e) {
                            var t = new ce.Lb(e.x, a.target.y, e.z),
                                l = a.target.clone().sub(t);
                            u.sub(l), a.update();
                        }),
                        (this.rotateLeft = function (e) {
                            void 0 === e && (e = T()), (h -= e);
                        }),
                        (this.rotateUp = function (e) {
                            void 0 === e && (e = T()), (c -= e);
                        }),
                        (this.panLeft = function (e) {
                            var t = new ce.Lb(),
                                a = this.object.matrix.elements;
                            t.set(a[0], 0, a[2]), t.normalize(), t.multiplyScalar(-e), u.add(t);
                        }),
                        (this.panUp = function (e) {
                            var t = new ce.Lb(),
                                a = this.object.matrix.elements;
                            t.set(a[4], 0, a[6]), t.normalize(), t.multiplyScalar(e), u.add(t);
                        }),
                        (this.pan = function (e) {
                            var t = a.domElement === document ? a.domElement.body : a.domElement;
                            if (void 0 !== a.object.fov) {
                                var l = a.object.position.clone().sub(a.target).length();
                                (l *= Math.tan(((a.object.fov / 2) * Math.PI) / 180)), a.panLeft((2 * e.x * l) / t.clientHeight), a.panUp((2 * e.y * l) / t.clientHeight);
                            } else
                                void 0 !== a.object.top
                                    ? (a.panLeft((e.x * (a.object.right - a.object.left)) / t.clientWidth), a.panUp((e.y * (a.object.top - a.object.bottom)) / t.clientHeight))
                                    : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.");
                            a.update();
                        }),
                        (this.panXY = function (e, t) {
                            a.pan(new ce.Kb(e, t));
                        }),
                        (this.dollyIn = function (e) {
                            void 0 === e && (e = S()), (y /= e);
                        }),
                        (this.dollyOut = function (e) {
                            void 0 === e && (e = S()), (y *= e);
                        }),
                        (this.update = function () {
                            var e = this.object.position,
                                t = e.clone().sub(this.target),
                                a = Math.atan2(t.x, t.z),
                                n = Math.atan2(Math.sqrt(t.x * t.x + t.z * t.z), t.y);
                            this.autoRotate && this.rotateLeft(T()), (a += h), (n += c), (n = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, n))), (n = Math.max(l, Math.min(Math.PI - l, n)));
                            var i = t.length() * y;
                            (i = Math.max(this.minDistance, Math.min(this.maxDistance, i))),
                                this.target.add(u),
                                (t.x = i * Math.sin(n) * Math.sin(a)),
                                (t.y = i * Math.cos(n)),
                                (t.z = i * Math.sin(n) * Math.cos(a)),
                                e.copy(this.target).add(t),
                                this.object.lookAt(this.target),
                                (h = 0),
                                (c = 0),
                                (y = 1),
                                u.set(0, 0, 0),
                                this.cameraMovedCallbacks.forEach(function (e) {
                                    return "function" === typeof e && e();
                                }),
                                (this.needsUpdate = !0);
                        }),
                        this.domElement.addEventListener(
                            "contextmenu",
                            function (e) {
                                e.preventDefault();
                            },
                            !1
                        ),
                        this.domElement.addEventListener(
                            "mousedown",
                            function (e) {
                                if (!1 !== a.enabled) {
                                    if ((e.preventDefault(), 0 === e.button)) {
                                        if (!0 === a.noRotate) return;
                                        (k = g), n.set(e.clientX, e.clientY);
                                    } else if (1 === e.button) {
                                        if (!0 === a.noZoom) return;
                                        (k = x), b.set(e.clientX, e.clientY);
                                    } else if (2 === e.button) {
                                        if (!0 === a.noPan) return;
                                        (k = D), o.set(e.clientX, e.clientY);
                                    }
                                    a.domElement.addEventListener("mousemove", H, !1), a.domElement.addEventListener("mouseup", C, !1);
                                }
                            },
                            !1
                        ),
                        this.domElement.addEventListener("mousewheel", B, !1),
                        this.domElement.addEventListener("DOMMouseScroll", B, !1),
                        this.domElement.addEventListener(
                            "touchstart",
                            function (e) {
                                if (!1 !== a.enabled)
                                    switch (e.touches.length) {
                                        case 1:
                                            if (!0 === a.noRotate) return;
                                            (k = f), n.set(e.touches[0].pageX, e.touches[0].pageY);
                                            break;
                                        case 2:
                                            if (!0 === a.noZoom) return;
                                            k = L;
                                            var t = e.touches[0].pageX - e.touches[1].pageX,
                                                l = e.touches[0].pageY - e.touches[1].pageY,
                                                i = Math.sqrt(t * t + l * l);
                                            b.set(0, i);
                                            break;
                                        case 3:
                                            if (!0 === a.noPan) return;
                                            (k = v), o.set(e.touches[0].pageX, e.touches[0].pageY);
                                            break;
                                        default:
                                            k = _;
                                    }
                            },
                            !1
                        ),
                        this.domElement.addEventListener(
                            "touchend",
                            function () {
                                !1 !== a.enabled && (k = _);
                            },
                            !1
                        ),
                        this.domElement.addEventListener(
                            "touchmove",
                            function (e) {
                                if (!1 !== a.enabled) {
                                    e.preventDefault(), e.stopPropagation();
                                    var t = a.domElement === document ? a.domElement.body : a.domElement;
                                    switch (e.touches.length) {
                                        case 1:
                                            if (!0 === a.noRotate) return;
                                            if (k !== f) return;
                                            i.set(e.touches[0].pageX, e.touches[0].pageY),
                                                s.subVectors(i, n),
                                                a.rotateLeft(((2 * Math.PI * s.x) / t.clientWidth) * a.rotateSpeed),
                                                a.rotateUp(((2 * Math.PI * s.y) / t.clientHeight) * a.rotateSpeed),
                                                n.copy(i);
                                            break;
                                        case 2:
                                            if (!0 === a.noZoom) return;
                                            if (k !== L) return;
                                            var l = e.touches[0].pageX - e.touches[1].pageX,
                                                c = e.touches[0].pageY - e.touches[1].pageY,
                                                h = Math.sqrt(l * l + c * c);
                                            r.set(0, h), p.subVectors(r, b), p.y > 0 ? a.dollyOut() : a.dollyIn(), b.copy(r);
                                            break;
                                        case 3:
                                            if (!0 === a.noPan) return;
                                            if (k !== v) return;
                                            m.set(e.touches[0].pageX, e.touches[0].pageY), d.subVectors(m, o), a.pan(d), o.copy(m);
                                            break;
                                        default:
                                            k = _;
                                    }
                                }
                            },
                            !1
                        ),
                        window.addEventListener(
                            "keydown",
                            function (e) {
                                if (!1 !== a.enabled && !0 !== a.noKeys && !0 !== a.noPan)
                                    switch (e.keyCode) {
                                        case a.keys.UP:
                                            a.pan(new ce.Kb(0, a.keyPanSpeed));
                                            break;
                                        case a.keys.BOTTOM:
                                            a.pan(new ce.Kb(0, -a.keyPanSpeed));
                                            break;
                                        case a.keys.LEFT:
                                            a.pan(new ce.Kb(a.keyPanSpeed, 0));
                                            break;
                                        case a.keys.RIGHT:
                                            a.pan(new ce.Kb(-a.keyPanSpeed, 0));
                                    }
                            },
                            !1
                        );
                },
                dt = function (e) {
                    var t = this,
                        a = this,
                        l = e.scene,
                        n = null,
                        i = !1,
                        s = !1,
                        o = null;
                    function m() {
                        (n = null), o && (l.remove(o), (o = null));
                    }
                    function d(e) {
                        n !== e &&
                            (m(),
                            e.allowRotate &&
                                !e.fixed &&
                                ((o = (function (e) {
                                    var t = new ce.u(),
                                        l = new ce.D(
                                            (function (e) {
                                                var t = new ce.t();
                                                return t.vertices.push(new ce.Lb(0, 0, 0), c(e)), t;
                                            })(e),
                                            (a.rotating, new ce.E({ color: p(), linewidth: 3, depthTest: !1 })),
                                            ce.G
                                        ),
                                        n = (function (e) {
                                            var t = new ce.m(0.05, 0, 0.1),
                                                a = new ce.R({ color: p() }),
                                                l = new ce.Q(t, a);
                                            return l.position.copy(c(e)), (l.rotation.x = -Math.PI / 2), l;
                                        })(e),
                                        i = (function (e) {
                                            var t = new ce.Ab(0.04, 16, 16),
                                                a = new ce.R({ color: p(), depthTest: !1 });
                                            return new ce.Q(t, a);
                                        })();
                                    return t.add(l), t.add(n), t.add(i), (t.rotation.y = e.rotation.y), (t.position.x = e.position.x), (t.position.z = e.position.z), (t.position.y = 0.05), t;
                                })((n = e))),
                                l.add(o)));
                    }
                    function b() {
                        m();
                    }
                    function r() {
                        o &&
                            o.children.forEach(function (e) {
                                e.material.color.set(p());
                            }),
                            e.needsUpdate();
                    }
                    function p() {
                        return s || i ? "#f1c40f" : "#ffffff";
                    }
                    function c(e) {
                        return new ce.Lb(0, 0, Math.max(e.halfSize.x, e.halfSize.z) + 0.2);
                    }
                    (this.getScene = function () {
                        return l;
                    }),
                        (this.getObject = function () {
                            return o;
                        }),
                        document.addEventListener(ee.BP3D_EVENT_LINKED_ITEMS_CHANGED, function (e) {
                            t.update();
                        }),
                        (this.setRotating = function (e) {
                            (i = e), r();
                        }),
                        (this.setMouseover = function (e) {
                            (s = e), r();
                        }),
                        (this.update = function () {
                            if (o) {
                                o.rotation.y = n.rotation.y;
                                var e = n.getCenterWithLinkedItems();
                                (o.position.x = e.x), (o.position.z = e.z);
                            }
                        }),
                        e.itemSelectedCallbacks.push(d),
                        e.itemUnselectedCallbacks.push(b);
                },
                bt = function (e, t, a, l, n, i) {
                    var s = this;
                    this.enabled = !0;
                    var o,
                        m,
                        d,
                        b,
                        r,
                        p = t.scene,
                        c = !1,
                        h = !1,
                        y = !1,
                        u = 0,
                        _ = 1,
                        g = 2,
                        x = 3,
                        D = 4,
                        f = u;
                    function L(t) {
                        if (!t.position_set) {
                            s.setSelectedObject(t), B(g);
                            var a = t.position.clone();
                            (a.y = 0), v(e.projectVector(a)), t.dimensionHelper && t.dimensionHelper.position.copy(t.position);
                        }
                        t.position_set = !0;
                    }
                    function v(e) {
                        e = e || m;
                        var t = s.itemIntersection(m, r);
                        t && r.clickPressed(t);
                    }
                    function k(e) {
                        e === r && (r && (r.setUnselected() || r.clearLinkedItems()), r.mouseOff(), s.setSelectedObject(null));
                    }
                    function T(a) {
                        if (f === u && !b) {
                            var l = t.floorplan.wallEdgePlanes(),
                                n = s.getIntersections(m, l, !0);
                            if (n.length > 0) {
                                var i = n[0].object.edge;
                                return void e.wallClicked.forEach(function (e) {
                                    return "function" === typeof e && e(i, a.offsetX, a.offsetY);
                                });
                            }
                            var o = t.floorplan.floorPlanes(),
                                d = s.getIntersections(m, o, !1);
                            if (d.length > 0) {
                                var r = d[0].object.room;
                                return void e.floorClicked.forEach(function (e) {
                                    return "function" === typeof e && e(r, a.offsetX, a.offsetY);
                                });
                            }
                            e.nothingClicked.forEach(function (e) {
                                return "function" === typeof e && e();
                            });
                        }
                    }
                    function S(e) {
                        if (!ee.Configuration.getBooleanValue(ee.configSceneLocked) && s.enabled)
                            switch (
                                (e.preventDefault(),
                                (h = !0),
                                (m.x = e.offsetX),
                                (m.y = e.offsetY),
                                c ||
                                    (function () {
                                        var e = i.getObject();
                                        if (null != e) {
                                            if (s.getIntersections(m, e, !1, !1, !0).length > 0) return (y = !0), i.setMouseover(!0), void (d = null);
                                        }
                                        (y = !1), i.setMouseover(!1);
                                        var a = t.scene.getItems(),
                                            l = s.getIntersections(m, a, !1, !0);
                                        d = l.length > 0 ? l[0].object : null;
                                    })(),
                                f)
                            ) {
                                case u:
                                case _:
                                    O();
                                    break;
                                case g:
                                case x:
                                case D:
                                    !(function (e) {
                                        e = e || m;
                                        var t = s.itemIntersection(m, r);
                                        t && (s.isRotating() ? !Boolean(r.fixed) && r.rotate(t) : r.clickDragged(t));
                                    })(),
                                        i.update(),
                                        (s.needsUpdate = !0);
                            }
                    }
                    function H(e) {
                        if (!ee.Configuration.getBooleanValue(ee.configSceneLocked) && s.enabled)
                            switch ((e.preventDefault(), (h = !1), (c = !0), f)) {
                                case _:
                                    y ? B(x) : null != d ? (s.setSelectedObject(d, e.ctrlKey), d.fixed || B(g)) : null !== d || h || (B(u), T(e));
                                    break;
                                case u:
                                    null != d && (s.setSelectedObject(d, e.ctrlKey), d.fixed || B(g)), h || T(e);
                                    break;
                                case g:
                                case x:
                                    break;
                                case D:
                                    B(_);
                            }
                    }
                    function C(e) {
                        if (!ee.Configuration.getBooleanValue(ee.configSceneLocked) && s.enabled)
                            switch (((c = !1), f)) {
                                case g:
                                    r.clickReleased(), B(_);
                                    break;
                                case x:
                                    B(h ? _ : D);
                            }
                    }
                    function B(t) {
                        t !== f &&
                            ((function (t) {
                                switch (t) {
                                    case u:
                                    case _:
                                        break;
                                    case g:
                                        b ? e.setCursorStyle("pointer") : e.setCursorStyle("auto");
                                }
                            })(f),
                            (function (t) {
                                switch (t) {
                                    case u:
                                        s.setSelectedObject(null);
                                        break;
                                    case _:
                                        n.enabled = !0;
                                        break;
                                    case x:
                                    case D:
                                        n.enabled = !1;
                                        break;
                                    case g:
                                        e.setCursorStyle("move"), v(), (n.enabled = !1);
                                }
                            })(t)),
                            (f = t),
                            i.setRotating(s.isRotating());
                    }
                    function w(e) {
                        var t = (function (e) {
                                var t = new ce.Kb(),
                                    a = l.getBoundingClientRect();
                                return (t.x = (e.x / a.width) * 2 - 1), (t.y = (-e.y / a.height) * 2 + 1), t;
                            })(e),
                            n = new ce.Lb(t.x, t.y, 0.5);
                        return n.unproject(a), n;
                    }
                    function O() {
                        null != d
                            ? null != b
                                ? b !== d && (b.mouseOff(), (b = d).mouseOver(), (s.needsUpdate = !0))
                                : ((b = d).mouseOver(), e.setCursorStyle("pointer"), (s.needsUpdate = !0))
                            : null != b && (b.mouseOff(), e.setCursorStyle("auto"), (b = null), (s.needsUpdate = !0));
                    }
                    (this.needsUpdate = !0),
                        (this.isRotating = function () {
                            return f === x || f === D;
                        }),
                        (this.selectedObject = function () {
                            return r;
                        }),
                        (this.itemIntersection = function (e, t) {
                            var a = t.customIntersectionPlanes(),
                                l = null;
                            return (l = a && a.length > 0 ? this.getIntersections(e, a, !0) : this.getIntersections(e, o)).length > 0 ? l[0] : null;
                        }),
                        (this.getIntersections = function (e, t, l, n, i, s) {
                            (n = n || !1), (l = l || !1), (i = i || !1), (s = s || 0.2);
                            var o,
                                m = w(e).sub(a.position).normalize(),
                                d = new ce.rb(a.position, m);
                            if (((d.params.Line.threshold = s), Array.isArray(t))) {
                                var b = [];
                                t.forEach(function (e) {
                                    return e.traverse(function (e) {
                                        return e.isMesh && b.push(e);
                                    });
                                }),
                                    (o = d.intersectObjects(b, i)).forEach(function (e) {
                                        if (e.object.isMesh && e.object.parent) {
                                            if (e.object.parent instanceof ce.tb) return;
                                            e.object.parent && (e.object = e.object.parent), e.object.groupParent instanceof tt && !1 === e.object.groupParent.opened && (e.object = e.object.groupParent);
                                        }
                                    });
                            } else o = d.intersectObject(t, i);
                            return (
                                n &&
                                    (o = ee.Utils.removeIf(o, function (e) {
                                        return !e.object.visible;
                                    })),
                                l &&
                                    (o = ee.Utils.removeIf(o, function (e) {
                                        return e.face.normal.dot(m) > 0;
                                    })),
                                o
                            );
                        }),
                        (this.setSelectedObject = function (t) {
                            var a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if ((f === u && B(_), null != t)) {
                                if (t === r) return;
                                a && r
                                    ? r.addLinkedItem(t)
                                    : (r && (r.setUnselected() || r.clearLinkedItems()),
                                      (r = t).setSelected(),
                                      e.itemSelectedCallbacks.forEach(function (e) {
                                          return "function" === typeof e && e(t);
                                      }));
                            } else
                                r && (r.setUnselected() || r.clearLinkedItems()),
                                    (r = null),
                                    e.itemUnselectedCallbacks.forEach(function (e) {
                                        return "function" === typeof e && e();
                                    });
                            this.needsUpdate = !0;
                        }),
                        l.addEventListener("mousedown", H),
                        l.addEventListener("mouseup", C),
                        l.addEventListener("mousemove", S),
                        (m = new ce.Kb()),
                        p.itemRemovedCallbacks.push(k),
                        p.itemLoadedCallbacks.push(L),
                        (function () {
                            var e = 1e4;
                            ((o = new ce.Q(new ce.ib(e, e), new ce.R())).rotation.x = -Math.PI / 2), (o.visible = !1), p.add(o);
                        })();
                };
            function rt(e, t) {
                var a;
                function l() {
                    var e = t.getCenter(),
                        l = new ce.Lb(e.x, 5, e.z);
                    a.position.copy(l);
                }
                (this.getDirLight = function () {}),
                    (function () {
                        var n = new ce.v(16777215, 8947848, 1.1);
                        n.position.set(4, 5, 0),
                            e.add(n),
                            (a = new ce.jb(16777215, 0.4, 100, 2)).position.set(0, 5, 0),
                            (a.castShadow = !0),
                            (a.shadow.mapSize.width = 1024),
                            (a.shadow.mapSize.height = 1024),
                            (a.shadow.radius = 2),
                            (a.shadow.bias = 1e-4),
                            e.add(a),
                            t.fireOnUpdatedRooms(l);
                    })();
            }
            var pt = function (e, t) {
                    var a = this;
                    this.room = t;
                    var l = null;
                    function n() {
                        a.removeFromScene(), (l = i()), a.addToScene();
                    }
                    function i() {
                        var e = a.room.getTexture(),
                            t = new ce.Gb().load(e.url);
                        (t.wrapS = ce.sb), (t.wrapT = ce.sb);
                        var l = e.width || 1,
                            n = e.height || 1;
                        t.repeat.set(1 / l, 1 / n);
                        var i = new ce.T({ map: t, side: ce.o, color: 13421772, specular: 657930 }),
                            s = [];
                        a.room.interiorCorners.forEach(function (e) {
                            s.push(new ce.Kb(e.x, e.y));
                        });
                        var o = new ce.vb(s),
                            m = new ce.wb(o),
                            d = new ce.Q(m, i);
                        return d.rotation.set(Math.PI / 2, 0, 0), (d.receiveShadow = !0), (d.castShadow = !1), d;
                    }
                    a.room.fireOnFloorChange(n),
                        (l = i()),
                        (this.addToScene = function () {
                            e.add(l), e.add(t.floorPlane);
                        }),
                        (this.removeFromScene = function () {
                            e.remove(l), e.remove(t.floorPlane);
                        });
                },
                ct = function (e, t, a) {
                    var l = this,
                        n = t.wall,
                        i = t.front,
                        s = [],
                        o = [],
                        m = null,
                        d = null,
                        b = null;
                    ce.x.loadTexture("".concat(ee.Configuration.getStringValue("defaultPathPrefix"), "/rooms/textures/walllightmap.png"));
                    var r = 14540253,
                        p = 13421772;
                    function c() {
                        h(), _(), g(), y();
                    }
                    function h() {
                        s.forEach(function (t) {
                            e.remove(t);
                        }),
                            o.forEach(function (t) {
                                e.remove(t);
                            }),
                            (s = []),
                            (o = []);
                    }
                    function y() {
                        s.forEach(function (t) {
                            e.add(t);
                        }),
                            o.forEach(function (t) {
                                e.add(t);
                            }),
                            u();
                    }
                    function u() {
                        var e = t.interiorStart(),
                            o = t.interiorEnd(),
                            m = o.x - e.x,
                            d = o.y - e.y,
                            b = new ce.Lb(-d, 0, m);
                        b.normalize();
                        var r = a.object.position.clone(),
                            p = new ce.Lb((e.x + o.x) / 2, 0, (e.y + o.y) / 2),
                            c = r.sub(p).normalize(),
                            h = b.dot(c);
                        (l.visible = h >= 0),
                            s.forEach(function (e) {
                                e.visible = l.visible;
                            }),
                            n.items.forEach(function (e) {
                                e.updateEdgeVisibility(l.visible, i);
                            }),
                            n.onItems.forEach(function (e) {
                                e.updateEdgeVisibility(l.visible, i);
                            });
                    }
                    function _(a) {
                        a =
                            a ||
                            function () {
                                e.needsUpdate = !0;
                            };
                        var l = t.getTexture(),
                            n = l.url,
                            i = l.width,
                            s = l.height;
                        ((m = new ce.Gb().load(n)).wrapS = ce.sb), (m.wrapT = ce.sb);
                        var o = i || 1,
                            d = s || 1;
                        m.repeat.set(1 / o, 1 / d);
                    }
                    function g() {
                        (d = new ce.V({ color: 16777215, side: ce.s, map: m, transparent: !0, opacity: ee.Configuration.getBooleanValue(ee.configXRayMode) ? 0.3 : 1 })),
                            (b = new ce.V({ color: r, side: ce.o, transparent: !0, opacity: ee.Configuration.getBooleanValue(ee.configXRayMode) ? 0.3 : 1 })),
                            s.push(x(t.exteriorStart(), t.exteriorEnd(), t.exteriorTransform, t.invExteriorTransform, b)),
                            s.push(x(t.interiorStart(), t.interiorEnd(), t.interiorTransform, t.invInteriorTransform, d)),
                            o.push(f(t, 0, ce.c, 14540253)),
                            s.push(f(t, n.height, ce.o, r)),
                            s.push(D(t.interiorStart(), t.exteriorStart(), n.height, p)),
                            s.push(D(t.interiorEnd(), t.exteriorEnd(), n.height, p));
                    }
                    function x(e, t, a, l, i) {
                        var s = v(e),
                            o = v(t),
                            m = o.clone();
                        m.y = n.height;
                        var d = s.clone();
                        d.y = n.height;
                        var b = [s.clone(), o.clone(), m.clone(), d.clone()];
                        b.forEach(function (e) {
                            e.applyMatrix4(a);
                        });
                        var r = new ce.vb([new ce.Kb(b[0].x, b[0].y), new ce.Kb(b[1].x, b[1].y), new ce.Kb(b[2].x, b[2].y), new ce.Kb(b[3].x, b[3].y)]);
                        n.items.forEach(function (e) {
                            var t = e.getBounding(),
                                l = new ce.Lb((t.max.x + t.min.x) / 2, (t.max.y + t.min.y) / 2, (t.max.z + t.min.z) / 2);
                            l.applyMatrix4(a);
                            var n = e.halfSize,
                                i = n.clone().multiplyScalar(-1),
                                s = n.clone();
                            i.add(l), s.add(l);
                            var o = [new ce.Kb(i.x, i.y), new ce.Kb(s.x, i.y), new ce.Kb(s.x, s.y), new ce.Kb(i.x, s.y)];
                            r.holes.push(new ce.fb(o));
                        });
                        var p = new ce.wb(r);
                        p.vertices.forEach(function (e) {
                            e.applyMatrix4(l);
                        });
                        var c = ee.Utils.distance(s.x, s.z, o.x, o.z),
                            h = n.height;
                        function y(e) {
                            var t = ee.Utils.distance(s.x, s.z, e.x, e.z) / c,
                                a = e.y / h;
                            return new ce.Kb(t, a);
                        }
                        (p.faceVertexUvs[0] = []),
                            p.faces.forEach(function (e) {
                                var t = p.vertices[e.a],
                                    a = p.vertices[e.b],
                                    l = p.vertices[e.c];
                                p.faceVertexUvs[0].push([y(t), y(a), y(l)]);
                            }),
                            (p.faceVertexUvs[1] = p.faceVertexUvs[0]),
                            p.computeFaceNormals(),
                            p.computeVertexNormals();
                        var u = new ce.Q(p, i);
                        return (u.castShadow = !0), (u.receiveShadow = !0), (u.material.transparent = !0), u;
                    }
                    function D(e, t, a, l) {
                        var n = [v(e), v(t), v(t, a), v(e, a)],
                            i = new ce.t();
                        n.forEach(function (e) {
                            i.vertices.push(e);
                        }),
                            i.faces.push(new ce.q(0, 1, 2)),
                            i.faces.push(new ce.q(0, 2, 3));
                        var s = new ce.V({ color: l, side: ce.o });
                        return new ce.Q(i, s);
                    }
                    function f(e, t, a, l) {
                        var n = [L(e.exteriorStart()), L(e.exteriorEnd()), L(e.interiorEnd()), L(e.interiorStart())],
                            i = new ce.V({ color: l, side: a }),
                            s = new ce.vb(n),
                            o = new ce.wb(s),
                            m = new ce.Q(o, i);
                        return m.rotation.set(Math.PI / 2, 0, 0), (m.position.y = t), m;
                    }
                    function L(e) {
                        return new ce.Kb(e.x, e.y);
                    }
                    function v(e, t) {
                        return (t = t || 0), new ce.Lb(e.x, t, e.y);
                    }
                    (this.visible = !1),
                        document.addEventListener(ee.BP3D_EVENT_CONFIG_CHANGED, function (e) {
                            var t = e.detail;
                            if (t && t.hasOwnProperty(ee.configXRayMode) && d && b) {
                                var a = 1;
                                t[ee.configXRayMode] && (a = 0.3), (d.opacity = a), (b.opacity = a);
                            }
                        }),
                        (this.remove = function () {
                            var e = null;
                            (e = t.redrawCallbacks.indexOf(c)), t.redrawCallbacks.splice(e, 1), (e = a.cameraMovedCallbacks.indexOf(u)), a.cameraMovedCallbacks.splice(e, 1), h();
                        }),
                        t.redrawCallbacks.push(c),
                        a.cameraMovedCallbacks.push(u),
                        _(),
                        g(),
                        y();
                },
                ht = function (e, t, a) {
                    var l = this,
                        n = this;
                    function i() {
                        n.floors.forEach(function (e) {
                            e.removeFromScene();
                        }),
                            n.edges.forEach(function (e) {
                                e.remove();
                            }),
                            (n.floors = []),
                            (n.edges = []),
                            n.floorplan.getRooms().forEach(function (t) {
                                var a = new pt(e, t);
                                n.floors.push(a), a.addToScene();
                            }),
                            n.floorplan.wallEdges().forEach(function (t) {
                                var a = new ct(e, t, n.controls);
                                n.edges.push(a);
                            });
                    }
                    (this.scene = e),
                        (this.floorplan = t),
                        (this.controls = a),
                        (this.floors = []),
                        (this.edges = []),
                        t.fireOnUpdatedRooms(i),
                        (this.updateHeight = function (e) {
                            e > 0 &&
                                (ee.Configuration.setValue("wallHeight", e),
                                l.floorplan.walls.forEach(function (t) {
                                    return (t.height = e);
                                }),
                                i());
                        });
                },
                yt = a(35),
                ut = a(31),
                _t = a(22),
                gt = a(32),
                xt = a(33),
                Dt = 100,
                ft = function e(t) {
                    var a = this;
                    Object(_.a)(this, e),
                        (this.dom = null),
                        (this.value = 0),
                        (this.events = {}),
                        (this.handleUnitChanged = function (e) {
                            switch (((a.cmInputContainer.style.display = "none"), (a.inchInputContainer.style.display = "none"), (a.feetInputContainer.style.display = "none"), e)) {
                                case S:
                                    a.inchInputContainer.style.display = "inherit";
                                    break;
                                case B:
                                    a.cmInputContainer.style.display = "inherit";
                                    break;
                                case H:
                                    a.feetInputContainer.style.display = "inherit";
                            }
                        }),
                        (this.setValue = function (e) {
                            var t = e * Dt;
                            (a.inputCm.value = Math.round(10 * t) / 10), (a.inputInch.value = Math.round(t / 2.54));
                            var l = (0.3937 * t) / 12,
                                n = Math.floor(l),
                                i = Math.round(12 * (l - n));
                            (a.inputFeet1.value = n), (a.inputFeet2.value = i);
                        }),
                        (this.setDisabled = function (e) {
                            a.inputCm.disabled = e;
                        }),
                        (this.addEventListener = function (e, t) {
                            return (a.events[e] = t);
                        }),
                        (this.dom = document.createElement("div")),
                        this.dom.setAttribute("style", "display: flex; width: inherit; align-items: center;"),
                        this.dom.insertAdjacentHTML("beforeend", "<label>".concat(t, "</label>")),
                        (this.cmInputContainer = document.createElement("div")),
                        (this.inputCm = document.createElement("input")),
                        this.inputCm.setAttribute("type", "number"),
                        this.inputCm.setAttribute("placeholder", t),
                        this.inputCm.setAttribute("min", 0),
                        (this.inputCm.value = 0),
                        (this.inputCm.style.width = "80px"),
                        this.inputCm.addEventListener("change", function (e) {
                            var t = e.target.value;
                            "function" === typeof a.events.change && a.events.change(t / Dt), a.setValue(t / Dt);
                        }),
                        this.cmInputContainer.appendChild(this.inputCm),
                        this.cmInputContainer.insertAdjacentHTML("beforeend", "<label>cm</label>"),
                        this.dom.appendChild(this.cmInputContainer),
                        (this.inchInputContainer = document.createElement("div")),
                        (this.inputInch = document.createElement("input")),
                        this.inputInch.setAttribute("type", "number"),
                        this.inputInch.setAttribute("placeholder", t),
                        this.inputInch.setAttribute("min", 0),
                        (this.inputInch.value = 0),
                        (this.inputInch.style.width = "80px"),
                        this.inputInch.addEventListener("change", function (e) {
                            var t = 2.54 * e.target.value;
                            "function" === typeof a.events.change && a.events.change(t / Dt), a.setValue(t / Dt);
                        }),
                        this.inchInputContainer.appendChild(this.inputInch),
                        this.inchInputContainer.insertAdjacentHTML("beforeend", '<label>"</label>'),
                        this.dom.appendChild(this.inchInputContainer),
                        (this.feetInputContainer = document.createElement("div")),
                        (this.inputFeet1 = document.createElement("input")),
                        this.inputFeet1.setAttribute("type", "number"),
                        this.inputFeet1.setAttribute("placeholder", t),
                        this.inputFeet1.setAttribute("min", 0),
                        (this.inputFeet1.value = 0),
                        (this.inputFeet1.style.width = "40px"),
                        this.inputFeet1.addEventListener("change", function (e) {
                            if ("function" === typeof a.events.change) {
                                var t = 30.48 * a.inputFeet1.value + 2.54 * a.inputFeet2.value;
                                a.events.change(t / Dt), a.setValue(t / Dt);
                            }
                        }),
                        this.feetInputContainer.appendChild(this.inputFeet1),
                        this.feetInputContainer.insertAdjacentHTML("beforeend", "<label>'</label>"),
                        (this.inputFeet2 = document.createElement("input")),
                        this.inputFeet2.setAttribute("type", "number"),
                        this.inputFeet2.setAttribute("placeholder", t),
                        this.inputFeet2.setAttribute("min", 0),
                        (this.inputFeet2.value = 0),
                        (this.inputFeet2.style.width = "40px"),
                        this.inputFeet2.addEventListener("change", function (e) {
                            if ("function" === typeof a.events.change) {
                                var t = 30.48 * a.inputFeet1.value + 2.54 * a.inputFeet2.value;
                                a.events.change(t / Dt), a.setValue(t / Dt);
                            }
                        }),
                        this.feetInputContainer.appendChild(this.inputFeet2),
                        this.feetInputContainer.insertAdjacentHTML("beforeend", '<label>"</label>'),
                        this.dom.appendChild(this.feetInputContainer),
                        document.addEventListener(ee.BP3D_EVENT_CONFIG_CHANGED, function (e) {
                            var t = e.detail;
                            t && t.dimUnit && a.handleUnitChanged(t.dimUnit);
                        }),
                        this.handleUnitChanged(ee.Configuration.getStringValue("dimUnit"));
                },
                Lt = (function () {
                    function e(t, a) {
                        var l = this;
                        Object(_.a)(this, e),
                            (this.container = null),
                            (this.dimensionInput = null),
                            (this.btnDelete = null),
                            (this.edge = null),
                            (this.visible = !1),
                            (this.wall = null),
                            (this.events = {}),
                            (this.texturePresets = []),
                            (this.addEventListener = function (e, t) {
                                return (l.events[e] = t);
                            }),
                            (this.setEdge = function (e) {
                                return (l.edge = e);
                            }),
                            (this.main = a),
                            (this.container = document.createElement("div")),
                            this.container.setAttribute("class", "custom-context-menu");
                        var n = document.createElement("div");
                        n.setAttribute("class", "item-container"),
                            (this.dimensionInput = new ft("Height")),
                            this.dimensionInput.addEventListener("change", function (e) {
                                e > 0 && l.events.heightChanged(e);
                            }),
                            n.appendChild(this.dimensionInput.dom),
                            this.container.appendChild(n);
                        var i = document.createElement("div");
                        i.setAttribute("class", "item-container"),
                            i.setAttribute("style", "display: flex;"),
                            (this.selectTexture = document.createElement("select")),
                            this.selectTexture.insertAdjacentHTML("beforeend", "<option>asdf</option><option>qwer</option>"),
                            this.selectTexture.addEventListener("change", function (e) {
                                var t = e.target.value;
                                if (t < l.texturePresets.length && l.edge) {
                                    var a = l.texturePresets[t];
                                    l.edge.setTexture(a.image, !0, 1, (a.textureWidth || 1) / 100, (a.textureHeight || 1) / 100), l.main.needsUpdate();
                                }
                            }),
                            i.appendChild(this.selectTexture),
                            this.container.appendChild(i),
                            t.appendChild(this.container),
                            this.setVisible(!1),
                            this.setTexturePresets([]);
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "setVisible",
                                value: function (e) {
                                    (this.visible = e), (this.container.style.display = e ? "inherit" : "none");
                                },
                            },
                            {
                                key: "setPosition",
                                value: function (e, t) {
                                    (this.container.style.left = "".concat(e, "px")), (this.container.style.top = "".concat(t, "px"));
                                },
                            },
                            {
                                key: "setTexturePresets",
                                value: function (e) {
                                    if (Array.isArray(e)) {
                                        (this.texturePresets = e), (this.selectTexture.innerHTML = "");
                                        var t,
                                            a = "",
                                            l = Object(L.a)(e.entries());
                                        try {
                                            for (l.s(); !(t = l.n()).done; ) {
                                                var n = Object(Y.a)(t.value, 2),
                                                    i = n[0],
                                                    s = n[1];
                                                a += "<option value=".concat(i, ">").concat(s.name, "</option>");
                                            }
                                        } catch (o) {
                                            l.e(o);
                                        } finally {
                                            l.f();
                                        }
                                        this.selectTexture.innerHTML = a;
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                vt = (function () {
                    function e(t, a) {
                        var l = this;
                        Object(_.a)(this, e),
                            (this.container = null),
                            (this.dimensionInput = null),
                            (this.btnDelete = null),
                            (this.visible = !1),
                            (this.floor = null),
                            (this.texturePresets = []),
                            (this.events = {}),
                            (this.setFloor = function (e) {
                                return (l.floor = e);
                            }),
                            (this.main = a),
                            (this.container = document.createElement("div")),
                            this.container.setAttribute("class", "custom-context-menu");
                        var n = document.createElement("div");
                        n.setAttribute("class", "item-container"),
                            n.setAttribute("style", "display: flex;"),
                            (this.selectTexture = document.createElement("select")),
                            this.selectTexture.insertAdjacentHTML("beforeend", "<option>asdf</option><option>qwer</option>"),
                            this.selectTexture.addEventListener("change", function (e) {
                                var t = e.target.value;
                                if (t < l.texturePresets.length && l.floor) {
                                    var a = l.texturePresets[t];
                                    console.log(a), l.floor.setTexture(a.image, !0, 1, (a.textureWidth || 1) / 100, (a.textureHeight || 1) / 100), l.main.needsUpdate();
                                }
                            }),
                            n.appendChild(this.selectTexture),
                            this.container.appendChild(n),
                            t.appendChild(this.container),
                            this.setVisible(!1),
                            this.setTexturePresets([]);
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "setVisible",
                                value: function (e) {
                                    (this.visible = e), (this.container.style.display = e ? "inherit" : "none");
                                },
                            },
                            {
                                key: "setPosition",
                                value: function (e, t) {
                                    (this.container.style.left = "".concat(e, "px")), (this.container.style.top = "".concat(t, "px"));
                                },
                            },
                            {
                                key: "setTexturePresets",
                                value: function (e) {
                                    if (Array.isArray(e)) {
                                        (this.texturePresets = e), (this.selectTexture.innerHTML = "");
                                        var t,
                                            a = "",
                                            l = Object(L.a)(e.entries());
                                        try {
                                            for (l.s(); !(t = l.n()).done; ) {
                                                var n = Object(Y.a)(t.value, 2),
                                                    i = n[0],
                                                    s = n[1];
                                                a += "<option value=".concat(i, ">").concat(s.name, "</option>");
                                            }
                                        } catch (o) {
                                            l.e(o);
                                        } finally {
                                            l.f();
                                        }
                                        this.selectTexture.innerHTML = a;
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                kt = function (e, t, a, l) {
                    var n = this,
                        i = this,
                        s = { resize: !0, pushHref: !1, spin: !0, spinSpeed: 2e-5, clickPan: !0, canMoveFixedItems: !1 };
                    for (var o in s) s.hasOwnProperty(o) && l.hasOwnProperty(o) && (s[o] = l[o]);
                    var m,
                        d,
                        b,
                        r,
                        p,
                        c,
                        h,
                        y,
                        u = e.scene;
                    (this.scene = u), (this.element = t), (this.controls = null);
                    var _;
                    Date.now();
                    (this.heightMargin = 0),
                        (this.widthMargin = 0),
                        (this.elementHeight = 0),
                        (this.elementWidth = 0),
                        (this.itemSelectedCallbacks = []),
                        (this.itemUnselectedCallbacks = []),
                        (this.wallClicked = []),
                        (this.floorClicked = []),
                        (this.nothingClicked = []),
                        (this.outlineManager = null);
                    function g() {
                        requestAnimationFrame(g), r.render(), Date.now();
                    }
                    (this.dataUrl = function () {
                        return b.domElement.toDataURL("image/png");
                    }),
                        (this.stopSpin = function () {
                            return !0;
                        }),
                        (this.options = function () {
                            return s;
                        }),
                        (this.getModel = function () {
                            return e;
                        }),
                        (this.getScene = function () {
                            return u;
                        }),
                        (this.getController = function () {
                            return h;
                        }),
                        (this.getCamera = function () {
                            return d;
                        }),
                        (this.needsUpdate = function () {
                            return !0;
                        }),
                        (this.rotatePressed = function () {
                            h.rotatePressed();
                        }),
                        (this.rotateReleased = function () {
                            h.rotateReleased();
                        }),
                        (this.setCursorStyle = function (e) {
                            m.style.cursor = e;
                        }),
                        (this.updateWindowSize = function () {
                            var e = i.element.getBoundingClientRect();
                            (i.heightMargin = e.top),
                                (i.widthMargin = e.left),
                                (i.elementWidth = e.width),
                                (i.elementHeight = e.height),
                                (d.aspect = i.elementWidth / i.elementHeight),
                                d.updateProjectionMatrix(),
                                b.setSize(i.elementWidth, i.elementHeight),
                                r.setSize(i.elementWidth, i.elementHeight),
                                !0;
                        }),
                        (this.centerCamera = function () {
                            var t = 1.5 / O,
                                a = e.floorplan.getCenter();
                            (a.y = t), (i.controls.target = a);
                            var l = 1.5 * e.floorplan.getSize().z,
                                n = a.clone().add(new ce.Lb(0, l, l));
                            d.position.copy(n), i.controls.update();
                        }),
                        (this.updateOutline = function (e) {
                            var t = this;
                            (p.selectedObjects = []),
                                Array.isArray(e) &&
                                    e.forEach(function (e) {
                                        return t.outlineManager.selectedObjects.push(e);
                                    });
                        }),
                        (this.projectVector = function (e, t) {
                            t = t || !1;
                            var a = i.elementWidth / 2,
                                l = i.elementHeight / 2,
                                n = new ce.Lb();
                            n.copy(e), n.project(d);
                            var s = new ce.Kb();
                            return (s.x = n.x * a + a), (s.y = -n.y * l + l), t || ((s.x += i.widthMargin), (s.y += i.heightMargin)), s;
                        }),
                        (this.showAllGizmo = function () {
                            try {
                                console.log("show all gizmo"),
                                    u.items.forEach(function (e) {
                                        return e.showDimensionHelper();
                                    });
                            } catch (e) {
                                console.log(e);
                            }
                        }),
                        (this.hideAllGizmo = function () {
                            try {
                                console.log("hide all gizmo"),
                                    u.items.forEach(function (e) {
                                        return e.hideDimensionHelper();
                                    });
                            } catch (e) {
                                console.log(e);
                            }
                        }),
                        (this.lockController = function (e) {
                            h.locked = e;
                        }),
                        (this.showWallContextMenu = function (e, t, a) {
                            if (!e) return n.wallContextMenu.setEdge(null), void n.wallContextMenu.setVisible(!1);
                            !0, n.wallContextMenu.setEdge(e), n.wallContextMenu.setVisible(!0), n.wallContextMenu.setPosition(t, a);
                        }),
                        (this.showFloorContextMenu = function (e, t, a) {
                            if (!e) return n.floorContextMenu.setFloor(null), void n.floorContextMenu.setVisible(!1);
                            !0, n.floorContextMenu.setVisible(!0), n.floorContextMenu.setFloor(e), n.floorContextMenu.setPosition(t, a);
                        }),
                        (this.handleWallHeightChanged = function (e) {
                            y.updateHeight(e), n.updateWindowSize();
                        }),
                        (this.setWallTexturePresets = function (e) {
                            n.wallContextMenu.setTexturePresets(e);
                        }),
                        (this.setFloorTexturePresets = function (e) {
                            n.floorContextMenu.setTexturePresets(e);
                        }),
                        (function () {
                            (m = i.element),
                                (d = new ce.gb(45, 1, 1, 1e4)),
                                ((b = new ce.Ob({ antialias: !0, preserveDrawingBuffer: !0 })).autoClear = !1),
                                (b.shadowMap.enabled = !0),
                                (b.shadowMapSoft = !0),
                                (b.shadowMap.type = ce.eb),
                                (b.toneMappingExposure = 1),
                                (b.outputEncoding = ce.Pb),
                                new ce.Gb().load("".concat("/Blueprint3D-assets/textures/room-hdr-01.jpg"), function (e) {
                                    (e.mapping = ce.p), (u.environment = u.scene.environment = e);
                                }),
                                new ot(u),
                                (i.controls = new mt(d, m));
                            var t = i.element.getBoundingClientRect();
                            (_ = new dt(i)), (h = new bt(i, e, d, b.domElement, i.controls, _)), m.appendChild(b.domElement), (r = new yt.a(b));
                            var a = new ut.a(u.scene, d);
                            r.addPass(a),
                                ((p = new xt.a(new ce.Kb(t.width, t.height), u.scene, d)).renderToScreen = !0),
                                (p.depthMaterial.morphTargets = !0),
                                (p.prepareMaskMaterial.morphTargets = !0),
                                (p.edgeStrength = 20),
                                (p.edgeGlow = 0.3),
                                (p.edgeThickness = 0.5),
                                (p.pulsePeriod = 2),
                                (p.visibleEdgeColor = new ce.l(0, 0, 1)),
                                (p.hiddenEdgeColor = new ce.l(0, 0, 1)),
                                r.addPass(p),
                                (c = new _t.a(gt.a)).uniforms.resolution.value.set(1 / t.width, 1 / t.height),
                                r.addPass(c),
                                (n.outlineManager = p),
                                i.updateWindowSize(),
                                s.resize && window.addEventListener("resize", i.updateWindowSize),
                                i.centerCamera(),
                                e.floorplan.fireOnUpdatedRooms(i.centerCamera),
                                new rt(u, e.floorplan),
                                (y = new ht(u, e.floorplan, i.controls)),
                                g(),
                                i.element.addEventListener("mouseenter", function () {
                                    !0;
                                }),
                                i.element.addEventListener("mouseleave", function () {
                                    !1;
                                }),
                                i.element.addEventListener("click", function () {
                                    !0;
                                }),
                                document.addEventListener(ee.BP3D_EVENT_HIGHLIGHT_CHANGED, function (e) {
                                    var t = e.detail;
                                    t && t.objects && n.updateOutline(t.objects);
                                }),
                                (n.wallContextMenu = new Lt(n.element.parentNode, n)),
                                n.wallContextMenu.addEventListener("heightChanged", n.handleWallHeightChanged),
                                (n.floorContextMenu = new vt(n.element.parentNode, n));
                        })();
                },
                Tt = (function () {
                    function e(t, a) {
                        var l = this;
                        Object(_.a)(this, e),
                            (this.container = null),
                            (this.dimensionInput = null),
                            (this.btnDelete = null),
                            (this.visible = !1),
                            (this.wall = null),
                            (this.isVisible = function () {
                                return l.visible;
                            }),
                            (this.setWall = function (e) {
                                (l.wall = e), (l.checkLock.checked = !!e.locked), l.dimensionInput.setValue(l.getWallLength(e)), l.dimensionInput.setDisabled(!!e.locked);
                            }),
                            (this.planner = a),
                            (this.container = document.createElement("div")),
                            this.container.setAttribute("class", "custom-context-menu");
                        var n = document.createElement("div");
                        n.setAttribute("class", "item-container"),
                            (this.dimensionInput = new ft("Length")),
                            this.dimensionInput.addEventListener("change", function (e) {
                                l.handleResize(e);
                            }),
                            n.append(this.dimensionInput.dom),
                            this.container.append(n);
                        var i = document.createElement("div");
                        i.setAttribute("class", "item-container"),
                            (this.checkLock = document.createElement("input")),
                            this.checkLock.setAttribute("type", "checkbox"),
                            (this.checkLock.style.width = "initial"),
                            this.checkLock.addEventListener("click", function (e) {
                                l.wall && l.wall.setLocked(l.checkLock.checked), l.dimensionInput.setDisabled(!!l.checkLock.checked);
                            }),
                            i.append(this.checkLock),
                            i.insertAdjacentHTML("beforeend", "<label>Lock</label>"),
                            this.container.append(i),
                            (i = document.createElement("div")).setAttribute("class", "item-container"),
                            (this.btnDelete = document.createElement("button")),
                            (this.btnDelete.innerHTML = "Delete"),
                            this.btnDelete.addEventListener("click", function () {
                                l.wall && l.wall.remove(), l.setVisible(!1), a.view.draw();
                            }),
                            i.append(this.btnDelete),
                            this.container.append(i),
                            t.append(this.container);
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "setVisible",
                                value: function (e) {
                                    (this.visible = e), (this.container.style.display = e ? "inherit" : "none");
                                },
                            },
                            {
                                key: "setPosition",
                                value: function (e, t) {
                                    (this.container.style.left = "".concat(e, "px")), (this.container.style.top = "".concat(t, "px"));
                                },
                            },
                            {
                                key: "getWallCenter",
                                value: function (e) {
                                    var t = e.start.x,
                                        a = e.start.y;
                                    return { x: (t + e.end.x) / 2, y: (a + e.end.y) / 2 };
                                },
                            },
                            {
                                key: "getWallLength",
                                value: function (e) {
                                    var t = e.start.x,
                                        a = e.start.y,
                                        l = e.end.x,
                                        n = e.end.y;
                                    return Math.sqrt(Math.pow(t - l, 2) + Math.pow(a - n, 2));
                                },
                            },
                            {
                                key: "handleResize",
                                value: function (e) {
                                    if (e > 0) {
                                        var t = e / this.getWallLength(this.wall),
                                            a = { x: 0, y: 0 };
                                        if (this.wall.start.locked || this.wall.end.locked)
                                            if (this.wall.start.locked && !this.wall.end.locked) a = { x: this.wall.getStartX(), y: this.wall.getStartY() };
                                            else {
                                                if (this.wall.start.locked || !this.wall.end.locked) return;
                                                a = { x: this.wall.getEndX(), y: this.wall.getEndY() };
                                            }
                                        else a = this.getWallCenter(this.wall);
                                        var l = 0,
                                            n = 0;
                                        (l = a.x + (this.wall.start.x - a.x) * t),
                                            (n = a.y + (this.wall.start.y - a.y) * t),
                                            this.wall.start.move(l, n, !1),
                                            (l = a.x + (this.wall.end.x - a.x) * t),
                                            (n = a.y + (this.wall.end.y - a.y) * t),
                                            this.wall.end.move(l, n, !1),
                                            this.planner.view.draw();
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })(),
                St = (function () {
                    function e(t, a, l) {
                        var n = this;
                        Object(_.a)(this, e),
                            (this.parent = null),
                            (this.mode = 0),
                            (this.activeWall = null),
                            (this.activeCorner = null),
                            (this.activeItem = null),
                            (this.originX = 0),
                            (this.originY = 0),
                            (this.targetX = 0),
                            (this.targetY = 0),
                            (this.lastNode = null),
                            (this.modeResetCallbacks = []),
                            (this.mouseDown = !1),
                            (this.mouseMoved = !1),
                            (this.mouseX = 0),
                            (this.mouseY = 0),
                            (this.rawMouseX = 0),
                            (this.rawMouseY = 0),
                            (this.lastX = 0),
                            (this.lastY = 0),
                            (this.itemSelectedCallbacks = []),
                            (this.itemUnselectedCallbacks = []),
                            (this.parent = l),
                            (this.zoomLevel = 100),
                            (this.scale = 100),
                            (this.floorplan = a),
                            (this.canvasElement = t),
                            (this.elWallContextMenu = null),
                            (this.view = new be(this.floorplan, this, t));
                        (this.cmPerPixel = 2.032), (this.pixelsPerCm = 1 / this.cmPerPixel), (this.wallWidth = 10 * this.pixelsPerCm), this.setMode(te);
                        var i = this;
                        this.initializeContextMenu(),
                            this.canvasElement.addEventListener("contextmenu", function (e) {
                                e.preventDefault(),
                                    e.stopPropagation(),
                                    n.activeWall ? (n.elWallContextMenu.setVisible(!0), n.elWallContextMenu.setPosition(e.offsetX, e.offsetY), n.elWallContextMenu.setWall(n.activeWall)) : n.elWallContextMenu.setVisible(!1);
                            }),
                            this.canvasElement.addEventListener("wheel", function (e) {
                                return i.mouseWheel(e);
                            }),
                            this.canvasElement.addEventListener("mousedown", function (e) {
                                i.mousedown(e);
                            }),
                            this.canvasElement.addEventListener("mousemove", function (e) {
                                i.mousemove(e);
                            }),
                            this.canvasElement.addEventListener("mouseup", function () {
                                i.mouseup();
                            }),
                            this.canvasElement.addEventListener("mouseleave", function () {
                                i.mouseleave();
                            }),
                            this.canvasElement.addEventListener("click", function () {
                                if (n.activeWall)
                                    try {
                                        n.parent.three.wallClicked.forEach(function (e) {
                                            return "function" === typeof e && e(n.activeWall);
                                        });
                                    } catch (e) {}
                            }),
                            document.addEventListener(ee.BP3D_EVENT_CONFIG_CHANGED, function (e) {
                                var t = e.detail;
                                t && t.dimUnit && n.view.draw();
                            }),
                            document.addEventListener("keyup", function (e) {
                                "Escape" === e.key && i.escapeKey();
                            }),
                            a.roomLoadedCallbacks.push(function () {
                                i.reset();
                            });
                    }
                    return (
                        Object(g.a)(e, [
                            {
                                key: "initializeContextMenu",
                                value: function () {
                                    (this.elWallContextMenu = new Tt(this.canvasElement.parentElement, this)), this.elWallContextMenu.setVisible(!1);
                                },
                            },
                            {
                                key: "escapeKey",
                                value: function () {
                                    this.setMode(te);
                                },
                            },
                            {
                                key: "updateTarget",
                                value: function () {
                                    this.mode === ae && this.lastNode
                                        ? (Math.abs(this.mouseX - this.lastNode.x) < 0.25 ? (this.targetX = this.lastNode.x) : (this.targetX = this.mouseX),
                                          Math.abs(this.mouseY - this.lastNode.y) < 0.25 ? (this.targetY = this.lastNode.y) : (this.targetY = this.mouseY))
                                        : ((this.targetX = this.mouseX), (this.targetY = this.mouseY)),
                                        this.view.draw();
                                },
                            },
                            {
                                key: "mouseWheel",
                                value: function (e) {
                                    var t = this.scale;
                                    e.deltaY > 0 ? ((t -= 2), (this.scale = Math.max(10, t))) : ((t += 2), (this.scale = Math.min(1e3, t)));
                                    var a = (30 * this.scale) / 100;
                                    (this.cmPerPixel = 30.48 / a), (this.pixelsPerCm = 1 / this.cmPerPixel), this.view.draw();
                                },
                            },
                            {
                                key: "mousedown",
                                value: function (e) {
                                    this.elWallContextMenu.isVisible()
                                        ? this.elWallContextMenu.setVisible(!1)
                                        : ((this.mouseDown = !0),
                                          (this.mouseMoved = !1),
                                          (this.lastX = this.rawMouseX),
                                          (this.lastY = this.rawMouseY),
                                          this.mode === le && (this.activeCorner ? this.activeCorner.removeAll() : this.activeWall ? this.activeWall.remove() : this.setMode(te)));
                                },
                            },
                            {
                                key: "mousemove",
                                value: function (e) {
                                    if (!this.elWallContextMenu.isVisible()) {
                                        if (
                                            ((this.mouseMoved = !0),
                                            (this.rawMouseX = e.clientX),
                                            (this.rawMouseY = e.clientY),
                                            (this.mouseX = (e.clientX - this.canvasElement.getBoundingClientRect().left) * this.cmPerPixel + this.originX * this.cmPerPixel),
                                            (this.mouseY = (e.clientY - this.canvasElement.getBoundingClientRect().top) * this.cmPerPixel + this.originY * this.cmPerPixel),
                                            (this.mouseX /= this.zoomLevel),
                                            (this.mouseY /= this.zoomLevel),
                                            (this.mode === ae || (this.mode === te && this.mouseDown)) && this.updateTarget(),
                                            this.mode !== ae && !this.mouseDown)
                                        ) {
                                            var t = this.floorplan.overlappedCorner(this.mouseX, this.mouseY),
                                                a = this.floorplan.overlappedWall(this.mouseX, this.mouseY),
                                                l = this.floorplan.overlappedItem(this.mouseX, this.mouseY),
                                                n = !1;
                                            t !== this.activeCorner && ((this.activeCorner = t), (n = !0)),
                                                a !== this.activeWall && ((this.activeWall = a), (n = !0)),
                                                l !== this.activeItem && ((this.activeItem = l), (n = !0)),
                                                n && this.view.draw();
                                        }
                                        if (
                                            (!this.mouseDown ||
                                                this.activeCorner ||
                                                this.activeWall ||
                                                this.activeItem ||
                                                ((this.originX += this.lastX - this.rawMouseX), (this.originY += this.lastY - this.rawMouseY), (this.lastX = this.rawMouseX), (this.lastY = this.rawMouseY), this.view.draw()),
                                            this.mode === te && this.mouseDown)
                                        ) {
                                            if (this.activeCorner) this.activeCorner.move(this.mouseX, this.mouseY);
                                            else if (this.activeWall) this.activeWall.relativeMove(((this.rawMouseX - this.lastX) * this.cmPerPixel) / this.zoomLevel, ((this.rawMouseY - this.lastY) * this.cmPerPixel) / this.zoomLevel);
                                            else if (this.activeItem)
                                                if (1 === e.buttons) this.activeItem.moveToPosition({ x: this.mouseX, y: this.activeItem.position.y, z: this.mouseY });
                                                else if (4 === e.buttons) {
                                                    var i = this.rawMouseX - this.lastX,
                                                        s = this.activeItem.rotation.y;
                                                    (s += 0.05 * i), this.activeItem.rotate({}, s);
                                                }
                                            this.view.draw();
                                        }
                                        (this.lastX = this.rawMouseX), (this.lastY = this.rawMouseY);
                                    }
                                },
                            },
                            {
                                key: "mouseup",
                                value: function () {
                                    var e = this;
                                    if (!this.elWallContextMenu.isVisible()) {
                                        if (((this.mouseDown = !1), this.mode === ae && !this.mouseMoved)) {
                                            var t = this.floorplan.newCorner(this.targetX, this.targetY);
                                            null != this.lastNode && this.floorplan.newWall(this.lastNode, t), t.mergeWithIntersected() && null != this.lastNode && this.setMode(te), (this.lastNode = t);
                                        }
                                        this.activeItem
                                            ? this.itemSelectedCallbacks.forEach(function (t) {
                                                  return t(e.activeItem);
                                              })
                                            : this.itemUnselectedCallbacks.forEach(function (e) {
                                                  return e();
                                              });
                                    }
                                },
                            },
                            {
                                key: "mouseleave",
                                value: function () {
                                    this.mouseDown = !1;
                                },
                            },
                            {
                                key: "reset",
                                value: function () {
                                    this.resizeView(), this.setMode(te), this.resetOrigin(), this.view.draw();
                                },
                            },
                            {
                                key: "resizeView",
                                value: function () {
                                    this.view.handleWindowResize();
                                },
                            },
                            {
                                key: "setMode",
                                value: function (e) {
                                    (this.lastNode = null),
                                        (this.mode = e),
                                        this.modeResetCallbacks.forEach(function (t) {
                                            return "function" === typeof t && t(e);
                                        }),
                                        this.updateTarget();
                                },
                            },
                            {
                                key: "resetOrigin",
                                value: function () {
                                    var e = this.canvasElement.parentNode,
                                        t = e.clientHeight,
                                        a = e.clientWidth / 2,
                                        l = t / 2,
                                        n = this.floorplan.getCenter();
                                    (this.originX = n.x * this.zoomLevel * this.pixelsPerCm - a), (this.originY = n.z * this.zoomLevel * this.pixelsPerCm - l);
                                },
                            },
                            {
                                key: "convertX",
                                value: function (e) {
                                    return (e * this.zoomLevel - this.originX * this.cmPerPixel) * this.pixelsPerCm;
                                },
                            },
                            {
                                key: "convertY",
                                value: function (e) {
                                    return (e * this.zoomLevel - this.originY * this.cmPerPixel) * this.pixelsPerCm;
                                },
                            },
                        ]),
                        e
                    );
                })(),
                Ht = function e(t) {
                    Object(_.a)(this, e),
                        (this.changeUnit = function (e) {
                            switch (e) {
                                case "cm":
                                    ee.Configuration.setValue("dimUnit", B);
                                    break;
                                case "in":
                                    ee.Configuration.setValue("dimUnit", S);
                                    break;
                                case "ft":
                                    ee.Configuration.setValue("dimUnit", H);
                                    break;
                                case "m":
                                    ee.Configuration.setValue("dimUnit", C);
                            }
                        }),
                        (this.setSceneLocked = function (e) {
                            ee.Configuration.setValue(ee.configSceneLocked, e);
                        }),
                        (this.setSnap = function (e) {
                            ee.Configuration.setValue(ee.configSnapMode, e);
                        }),
                        (this.setDimensionVisible = function (e) {
                            ee.Configuration.setValue(ee.configDimensionVisible, e);
                        }),
                        (this.toggleXRayMode = function () {
                            var e = ee.Configuration.getBooleanValue(ee.configXRayMode);
                            ee.Configuration.setValue(ee.configXRayMode, !e);
                        }),
                        (this.model = new st(t.textureDir)),
                        (this.three = new kt(this.model, t.threeElement, t.threeCanvasElement, {})),
                        (this.floorplanner = new St(t.floorplannerElement, this.model.floorplan, this));
                },
                Ct = a(34);
            a(52);
            function Bt(e) {
                var t = e.onConfirm,
                    a = e.onCancel;
                return Object(v.jsx)("div", {
                    className: "modal-container",
                    children: Object(v.jsxs)("div", {
                        className: "modal-dialog",
                        children: [
                            Object(v.jsx)("p", { children: "Do you want to swap current product?" }),
                            Object(v.jsxs)("div", { className: "buttons", children: [Object(v.jsx)("button", { onClick: t, children: "Yes" }), Object(v.jsx)("button", { onClick: a, children: "No" })] }),
                        ],
                    }),
                });
            }
            var wt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return (
                            Object(_.a)(this, a),
                            ((l = t.call(this, e)).initializeBP3D = function () {
                                var e = { floorplannerElement: l.elFloorPlannerElement, threeElement: l.elThreeElemContainer, textureDir: "models/textures/", widget: !1 };
                                (l.bp3d = new Ht(e)),
                                    l.bp3d.model.loadSerialized(l.props.defaultJson ? l.props.defaultJson : JSON.stringify(Ct)),
                                    l.bp3d.three.itemSelectedCallbacks.push(l.handleItemSelected),
                                    l.bp3d.three.itemUnselectedCallbacks.push(l.handleItemUnselected),
                                    l.bp3d.floorplanner.itemSelectedCallbacks.push(l.handleItemSelected),
                                    l.bp3d.floorplanner.itemUnselectedCallbacks.push(l.handleItemUnselected);
                            }),
                            (l.componentDidMount = function () {
                                setTimeout(function () {
                                    l.initializeBP3D();
                                }, 1e3);
                            }),
                            (l.componentWillReceiveProps = function (e) {
                                e.measureUnit !== l.props.measureUnit && l.bp3d.changeUnit(e.measureUnit),
                                    e.viewMode !== l.props.viewMode &&
                                        setTimeout(function () {
                                            l.bp3d.model.floorplan.update(), window.dispatchEvent(new Event("resize"));
                                        }, 10);
                            }),
                            (l.setJSON = function (e) {
                                l.bp3d.model.loadSerialized(e);
                            }),
                            (l.getJSON = function () {
                                return l.bp3d.model.exportSerialized();
                            }),
                            (l.takeSnapshot = function () {
                                return l.bp3d.three.dataUrl();
                            }),
                            (l.handleItemSelected = function (e) {
                                l.setState({ selectedItem: e }), "function" === typeof l.props.onItemSelected && l.props.onItemSelected(e);
                            }),
                            (l.handleItemUnselected = function () {
                                l.setState({ selectedItem: null }), "function" === typeof l.props.onItemUnselected && l.props.onItemUnselected();
                            }),
                            (l.update = function () {
                                try {
                                    l.bp3d.three.updateWindowSize();
                                } catch (e) {}
                            }),
                            (l.getDefaultData = function (e) {
                                var t = {};
                                if (Array.isArray(e.morph)) {
                                    var a,
                                        l = Object(L.a)(e.morph);
                                    try {
                                        for (l.s(); !(a = l.n()).done; ) {
                                            var n = a.value;
                                            t[n.index] = (n.min - 5) / 295;
                                        }
                                    } catch (d) {
                                        l.e(d);
                                    } finally {
                                        l.f();
                                    }
                                }
                                var i = {};
                                if (Array.isArray(e.styles)) {
                                    var s,
                                        o = Object(L.a)(e.styles);
                                    try {
                                        for (o.s(); !(s = o.n()).done; ) {
                                            var m = s.value;
                                            i[m.name_in_model] = m.types[0].name_in_model;
                                        }
                                    } catch (d) {
                                        o.e(d);
                                    } finally {
                                        o.f();
                                    }
                                }
                                return { defaultMorph: t, defaultStyles: i, metadata: Object(f.a)(Object(f.a)({}, e), {}, { itemName: e.name, modelUrl: e.model, itemType: e.type }) };
                            }),
                            (l.addItem = (function () {
                                var e = Object(u.a)(
                                    y.a.mark(function e(t) {
                                        var a, n, i, s, o;
                                        return y.a.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (e.prev = 0),
                                                                (a = l.getDefaultData(t)),
                                                                (n = a.defaultMorph),
                                                                (i = a.defaultStyles),
                                                                (s = a.metadata),
                                                                (e.next = 4),
                                                                l.bp3d.model.scene.addItem(t.type, t.model, s, null, null, { styles: i, morph: n, stackable: t.stackable, stackontop: t.stackontop, overlappable: t.overlappable })
                                                            );
                                                        case 4:
                                                            return (o = e.sent), e.abrupt("return", o);
                                                        case 8:
                                                            return (e.prev = 8), (e.t0 = e.catch(0)), e.abrupt("return", null);
                                                        case 11:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            null,
                                            [[0, 8]]
                                        );
                                    })
                                );
                                return function (t) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (l.duplicateItem = Object(u.a)(
                                y.a.mark(function e() {
                                    var t, a, n, i, s, o;
                                    return y.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((t = l.state.selectedItem)) {
                                                            e.next = 3;
                                                            break;
                                                        }
                                                        return e.abrupt("return");
                                                    case 3:
                                                        return (e.prev = 3), (a = t.metadata), (n = t.getOptions()), (i = t.position), (s = t.rotation.y), (e.next = 10), l.bp3d.model.scene.addItem(a.type, a.model, a, i, s, n);
                                                    case 10:
                                                        return (o = e.sent), e.abrupt("return", o);
                                                    case 14:
                                                        return (e.prev = 14), (e.t0 = e.catch(3)), e.abrupt("return", null);
                                                    case 17:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[3, 14]]
                                    );
                                })
                            )),
                            (l.importSetFromBuilder = function (e) {
                                l.bp3d.model.scene.importSetFromBuilder({ itemName: "Imported Set", items: e }, e);
                            }),
                            (l.addSet = function (e) {
                                var t = Object(f.a)(Object(f.a)({}, e), {}, { itemName: e.name });
                                l.bp3d.model.scene.addSet(t, e.items);
                            }),
                            (l.replaceSetItem = (function () {
                                var e = Object(u.a)(
                                    y.a.mark(function e(t, a) {
                                        var n, i, s, o, m, d, b, r;
                                        return y.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if (!(n = l.state.selectedItem) || !n.isSet) {
                                                            e.next = 12;
                                                            break;
                                                        }
                                                        return (
                                                            (i = n.linkedItems[t]),
                                                            (s = i.position),
                                                            (o = i.rotation.y),
                                                            (m = i.getOptions()),
                                                            n.linkedItems[t].remove(),
                                                            (d = l.getDefaultData(a)),
                                                            (b = d.metadata),
                                                            (e.next = 10),
                                                            l.bp3d.model.scene.addItem(a.type, a.model, b, s, o, m, !1)
                                                        );
                                                    case 10:
                                                        (r = e.sent) && ((r.groupParent = n), (n.linkedItems[t] = r));
                                                    case 12:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (t, a) {
                                    return e.apply(this, arguments);
                                };
                            })()),
                            (l.updateMaterial = function (e, t, a) {
                                l.state.selectedItem &&
                                    l.state.selectedItem.updateMaterial(e, t, a, function () {
                                        return setTimeout(l.update, 100);
                                    });
                            }),
                            (l.updateStyle = function (e, t) {
                                l.state.selectedItem &&
                                    l.state.selectedItem.updateStyle(e, t, function () {
                                        return setTimeout(l.update, 100);
                                    });
                            }),
                            (l.setMorph = function (e, t) {
                                l.state.selectedItem && l.state.selectedItem.setMorph(e, t);
                            }),
                            (l.setLocked = function (e) {
                                return l.bp3d.setSceneLocked(e);
                            }),
                            (l.setToggleXRay = function () {
                                return l.bp3d.toggleXRayMode();
                            }),
                            (l.setSnap = function (e) {
                                return l.bp3d.setSnap(e);
                            }),
                            (l.setDimensionVisible = function (e) {
                                return l.bp3d.setDimensionVisible(e);
                            }),
                            (l.state = { selectedItem: null, showSwapDialog: !1, newProduct: null }),
                            l
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.viewMode;
                                    return Object(v.jsxs)("div", {
                                        style: { height: "100%" },
                                        onContextMenu: function (e) {
                                            return e.preventDefault(), e.stopPropagation(), !1;
                                        },
                                        onDragOver: function (e) {
                                            e.preventDefault(), e.stopPropagation();
                                        },
                                        onDrop: function (t) {
                                            var a = JSON.parse(t.dataTransfer.getData("info"));
                                            e.addItem(a);
                                        },
                                        children: [
                                            Object(v.jsx)(k, {
                                                hidden: "3d" !== t,
                                                onDomLoaded: function (t) {
                                                    return (e.elThreeElemContainer = t);
                                                },
                                            }),
                                            Object(v.jsx)(re, {
                                                hidden: "3d" === t,
                                                onDomLoaded: function (t) {
                                                    return (e.elFloorPlannerElement = t);
                                                },
                                                onModeChanged: function (t) {
                                                    e.bp3d.floorplanner.setMode(t);
                                                },
                                            }),
                                            "3d" === t &&
                                                Object(v.jsx)(pe, {
                                                    onLock: function (t) {
                                                        e.bp3d.three.lockController(t);
                                                    },
                                                    onZoomOut: function () {
                                                        e.bp3d.three.controls.dollyOut(1.1), e.bp3d.three.controls.update();
                                                    },
                                                    onZoomIn: function () {
                                                        e.bp3d.three.controls.dollyIn(1.1), e.bp3d.three.controls.update();
                                                    },
                                                    onHomeClicked: function () {
                                                        return e.bp3d.three.centerCamera();
                                                    },
                                                    onPan: function (t) {
                                                        switch (t) {
                                                            case "UP":
                                                                e.bp3d.three.controls.panXY(0, 30);
                                                                break;
                                                            case "DOWN":
                                                                e.bp3d.three.controls.panXY(0, -30);
                                                                break;
                                                            case "LEFT":
                                                                e.bp3d.three.controls.panXY(30, 0);
                                                                break;
                                                            case "RIGHT":
                                                                e.bp3d.three.controls.panXY(-30, 0);
                                                        }
                                                    },
                                                }),
                                            this.state.showSwapDialog &&
                                                Object(v.jsx)(Bt, {
                                                    onConfirm: function () {
                                                        e.setState({ showSwapDialog: !1 }), e.replaceItem(e.state.newProduct);
                                                    },
                                                    onCancel: function () {
                                                        return e.setState({ showSwapDialog: !1 });
                                                    },
                                                }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                Ot = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return (
                            Object(_.a)(this, a),
                            ((l = t.call(this, e)).filterCategories = function (e) {
                                var t = l.state.searchKey,
                                    a = [];
                                return (
                                    e.forEach(function (e) {
                                        var l = [];
                                        e.styles.forEach(function (e) {
                                            t && t.length ? e.name.toLowerCase().includes(t.toLowerCase()) && l.push(e) : l.push(e);
                                        }),
                                            a.push({ category: e.category, styles: l });
                                    }),
                                    a
                                );
                            }),
                            (l.renderProducts = function (e) {
                                return Object(v.jsx)("div", {
                                    className: "styles-section",
                                    children:
                                        e &&
                                        Array.isArray(e) &&
                                        e.map(function (e, t) {
                                            return Object(v.jsxs)(
                                                "div",
                                                {
                                                    className: "styles-item",
                                                    onClick: function () {
                                                        return "function" === typeof l.props.onProductClicked && l.props.onProductClicked(e);
                                                    },
                                                    onDragStart: function (t) {
                                                        t.dataTransfer.setData("info", JSON.stringify(e));
                                                    },
                                                    children: [Object(v.jsx)("img", { alt: "thumbnail", src: e.image }), Object(v.jsx)("div", { className: "tip", children: e.name })],
                                                },
                                                t
                                            );
                                        }),
                                });
                            }),
                            (l.state = { activeCategory: -1, searchKey: "" }),
                            l
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.items,
                                        a = this.state.activeCategory,
                                        l = this.filterCategories(t);
                                    return Object(v.jsxs)("div", {
                                        className: "category-section",
                                        children: [
                                            Object(v.jsxs)("div", {
                                                style: { display: "flex", alignItems: "center" },
                                                children: [
                                                    Object(v.jsx)("h4", { style: { flex: 1, margin: 0 }, children: "Categories" }),
                                                    Object(v.jsx)("div", { onClick: this.props.onClose, children: Object(v.jsx)("i", { className: "fa fa-close" }) }),
                                                ],
                                            }),
                                            Object(v.jsx)("div", {
                                                children: Object(v.jsx)("input", {
                                                    className: "search-box",
                                                    placeholder: "search",
                                                    value: this.state.searchKey,
                                                    onChange: function (t) {
                                                        return e.setState({ searchKey: t.target.value });
                                                    },
                                                }),
                                            }),
                                            Array.isArray(l) &&
                                                l.map(function (t, l) {
                                                    return Object(v.jsxs)(
                                                        "div",
                                                        {
                                                            children: [
                                                                Object(v.jsxs)("div", {
                                                                    className: "category-item ".concat(l === a ? "active" : ""),
                                                                    onClick: function () {
                                                                        return e.setState({ activeCategory: l === a ? -1 : l });
                                                                    },
                                                                    children: ["".concat(t.category, " "), Object(v.jsx)("span", { style: { color: "#aaa" }, children: "(".concat(t.styles.length, ")") })],
                                                                }),
                                                                l === a && e.renderProducts(t.styles),
                                                            ],
                                                        },
                                                        l
                                                    );
                                                }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                jt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return Object(_.a)(this, a), ((l = t.call(this, e)).state = { opened: !1 }), l;
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.state.opened,
                                        a = this.props,
                                        l = a.label,
                                        n = a.children;
                                    return Object(v.jsxs)("div", {
                                        className: "custom-accordion",
                                        children: [
                                            Object(v.jsx)("div", {
                                                className: "title",
                                                onClick: function () {
                                                    return e.setState({ opened: !t });
                                                },
                                                children: l,
                                            }),
                                            t && n,
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                Pt = a(25),
                Ft = a(17),
                Et =
                    (a(28),
                    [
                        { font: "fas fa-arrows-alt", value: 0, rotation: 0 },
                        { font: "fas fa-arrow-left", value: 1, rotation: 0 },
                        { font: "fas fa-arrow-left", value: 2, rotation: -45 },
                        { font: "fas fa-arrow-down", value: 3, rotation: 0 },
                        { font: "fas fa-arrow-down", value: 4, rotation: -45 },
                        { font: "fas fa-arrow-right", value: 5, rotation: 0 },
                        { font: "fas fa-arrow-right", value: 6, rotation: -45 },
                        { font: "fas fa-arrow-up", value: 7, rotation: 0 },
                        { font: "fas fa-arrow-up", value: 8, rotation: -45 },
                    ]),
                Mt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return (
                            Object(_.a)(this, a),
                            ((l = t.call(this, e)).getButtons = function () {
                                var e = l.props.info,
                                    t = [
                                        {
                                            font: Et[e && e.morphAlign ? e.morphAlign : 0].font,
                                            tooltip: "Stretch Direction",
                                            fontStyle: { transform: "rotate(".concat(Et[e && e.morphAlign ? e.morphAlign : 0].rotation, "deg)") },
                                            callback: function () {
                                                if (e) {
                                                    var t;
                                                    (t = (e.morphAlign - 0 + 1) % Et.length), l.props.onMorphAlignChanged(t);
                                                } else Ft.b.error("Product not selected");
                                            },
                                        },
                                        {
                                            toggled: e && e.fixed,
                                            font: "fas fa-thumbtack",
                                            tooltip: "Lock in place",
                                            callback: function () {
                                                e ? l.props.onLockChanged(!Boolean(e && e.fixed)) : Ft.b.error("Product not selected");
                                            },
                                        },
                                        {
                                            toggled: e && e.stackable,
                                            font: "fas fa-layer-group",
                                            tooltip: "Stackable",
                                            callback: function () {
                                                e ? l.props.onStackableChanged(!Boolean(e && e.stackable)) : Ft.b.error("Product not selected");
                                            },
                                        },
                                        {
                                            toggled: e && e.overlappable,
                                            font: "fas fa-clone",
                                            tooltip: "Overlappable",
                                            callback: function () {
                                                e ? l.props.onOverlappableChanged(!Boolean(e && e.overlappable)) : Ft.b.error("Product not selected");
                                            },
                                        },
                                    ];
                                return (
                                    e &&
                                        e.flippable &&
                                        t.push({
                                            font: "fas fa-exchange-alt",
                                            tooltip: "Flip",
                                            callback: function () {
                                                e ? l.props.onFlipHorizonal() : Ft.b.error("Product not selected");
                                            },
                                        }),
                                    (t = [].concat(Object(he.a)(t), [
                                        null,
                                        {
                                            font: "far fa-copy",
                                            tooltip: "Duplicate",
                                            callback: function () {
                                                e ? l.props.onDuplicateProduct() : Ft.b.error("Product not selected");
                                            },
                                        },
                                        {
                                            font: "far fa-trash-alt",
                                            tooltip: "Delete",
                                            callback: function () {
                                                e ? l.props.onDeleteActiveProduct() : Ft.b.error("Product not selected");
                                            },
                                        },
                                    ]))
                                );
                            }),
                            (l.state = { unit: "In", locked: !1, showDimension: !0, snap: !0, xRay: !1 }),
                            l
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.getButtons();
                                    return Object(v.jsxs)("div", {
                                        className: "float-toolbar",
                                        children: [
                                            e.map(function (e, t) {
                                                return e
                                                    ? Object(v.jsx)(
                                                          "div",
                                                          {
                                                              className: "float-toolbar-button ".concat(e.toggled ? "toggled" : ""),
                                                              "data-tip": e.tooltip,
                                                              onClick: function () {
                                                                  "function" === typeof e.callback && e.callback();
                                                              },
                                                              children: Object(v.jsx)("span", { className: e.font, style: e.fontStyle, children: e.label }),
                                                          },
                                                          t
                                                      )
                                                    : Object(v.jsx)("div", { className: "hr" }, t);
                                            }),
                                            Object(v.jsx)(Ft.a, { position: "bottom-center", autoClose: 3e3, hideProgressBar: !1, newestOnTop: !1, closeOnClick: !0, rtl: !1, pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !0 }),
                                            Object(v.jsx)(Pt.a, {}),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                Wt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return (
                            Object(_.a)(this, a),
                            ((l = t.call(this, e)).componentDidMount = function () {
                                window.addEventListener("message", function (e) {
                                    "object" === typeof e.data && "res-import-set" === e.data.call && l.handleImported(e.data);
                                });
                            }),
                            (l.handleImportClicked = function () {
                                try {
                                    l.refBuilder.contentWindow.postMessage({ call: "req-import-set" }, "*");
                                } catch (e) {}
                            }),
                            (l.handleImported = function (e) {
                                l.state.alreadyImported || (Array.isArray(e.data) && (l.setState({ alreadyImported: !0 }), "function" === typeof l.props.onImported && l.props.onImported(e.data)));
                            }),
                            (l.state = { alreadyImported: !1 }),
                            (l.refBuilder = null),
                            l
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return Object(v.jsx)("div", {
                                        className: "modal-container",
                                        onClick: this.props.onClose,
                                        children: Object(v.jsx)("div", {
                                            className: "modal-dialog",
                                            onClick: function (e) {
                                                e.preventDefault(), e.stopPropagation();
                                            },
                                            children: Object(v.jsxs)("div", {
                                                style: { width: "calc(100vw - 200px)", height: "calc(100vh - 200px)" },
                                                children: [
                                                    Object(v.jsxs)("div", {
                                                        style: { padding: 5 },
                                                        children: [Object(v.jsx)("button", { onClick: this.handleImportClicked, children: "Import" }), Object(v.jsx)("button", { onClick: this.props.onClose, children: "Close" })],
                                                    }),
                                                    Object(v.jsx)("div", {
                                                        style: { width: "100%", height: "calc(100% - 30px)" },
                                                        children: Object(v.jsx)("iframe", {
                                                            ref: function (t) {
                                                                return (e.refBuilder = t);
                                                            },
                                                            src: "https://tfguys-product-configurator-sandbox.netlify.app/",
                                                            frameBorder: 0,
                                                            title: "set builder",
                                                            style: { width: "100%", height: "100%", border: "1px solid #ddd" },
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                Gt = ["In", "Cm", "M"],
                Rt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a(e) {
                        var l;
                        return (
                            Object(_.a)(this, a),
                            ((l = t.call(this, e)).handleUnitChanged = function () {
                                var e = l.state.unit,
                                    t = Gt.indexOf(e);
                                t = (t + 1) % Gt.length;
                                var a = Gt[t];
                                l.setState({ unit: a }), l.props.onUnitChanged(a.toLowerCase());
                            }),
                            (l.handleToggleLock = function () {
                                l.props.onLockSceneToggled(!l.state.locked), l.setState({ locked: !l.state.locked });
                            }),
                            (l.handleToggleDimensions = function () {
                                l.props.onShowDimensionsToggled(!l.state.showDimension), l.setState({ showDimension: !l.state.showDimension });
                            }),
                            (l.handleToggleSnap = function () {
                                l.props.onSnapToggled(!l.state.snap), l.setState({ snap: !l.state.snap });
                            }),
                            (l.handleToggleXRay = function () {
                                l.props.onXRayToggled(!l.state.xRay), l.setState({ xRay: !l.state.xRay });
                            }),
                            (l.getButtons = function () {
                                var e = l.state,
                                    t = e.locked,
                                    a = e.snap,
                                    n = e.showDimension,
                                    i = e.xRay;
                                return [
                                    "3d" === l.props.viewMode
                                        ? { font: "fa fa-border-all", tooltip: "Show 2D Floor Planner", callback: l.props.onShow2DPlanner }
                                        : { font: "fa fa-cube", tooltip: "Show 3D View", callback: l.props.onShow3DViewClicked },
                                    null,
                                    { toggled: t, font: t ? "fas fa-unlock" : "fas fa-lock", tooltip: t ? "Unlock Scene" : "Lock Scene", callback: l.handleToggleLock },
                                    { toggled: n, font: "fa fa-ruler-combined", tooltip: "".concat(n ? "Show" : "Hide", " Dimensions"), callback: l.handleToggleDimensions },
                                    { toggled: a, font: "fas fa-magnet", tooltip: "Snap Objects", callback: l.handleToggleSnap },
                                    { toggled: i, font: "far fa-square", tooltip: "X-Ray Wall", callback: l.handleToggleXRay },
                                    null,
                                    { font: "fas fa-cart-plus", tooltip: "Add Product", callback: l.props.onAddProductClicked },
                                    { font: "fas fa-file-import", tooltip: "Import From Set Configurator", callback: l.props.onImportFromConfiguratorClicked },
                                    null,
                                    { font: "fa fa-save", tooltip: "Save", callback: l.props.onSaveClicked },
                                    { font: "fas fa-upload", tooltip: "Load", callback: l.props.onLoadClicked },
                                    { font: "far fa-image", tooltip: "Screenshot", callback: l.props.onSnapshotClicked },
                                    null,
                                    { font: "", label: l.state.unit, tooltip: "Change Unit", callback: l.handleUnitChanged },
                                ];
                            }),
                            (l.state = { unit: "In", locked: !1, showDimension: !0, snap: !0, xRay: !1 }),
                            l
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.getButtons();
                                    return Object(v.jsxs)("div", {
                                        className: "left-toolbar",
                                        children: [
                                            e.map(function (e, t) {
                                                return e
                                                    ? Object(v.jsx)(
                                                          "div",
                                                          {
                                                              className: "left-toolbar-button ".concat(e.toggled ? "toggled" : ""),
                                                              "data-tip": e.tooltip,
                                                              onClick: function () {
                                                                  "function" === typeof e.callback && e.callback();
                                                              },
                                                              children: Object(v.jsx)("span", { className: e.font, style: e.fontStyle, children: e.label }),
                                                          },
                                                          t
                                                      )
                                                    : Object(v.jsx)("div", { className: "hr" }, t);
                                            }),
                                            Object(v.jsx)(Ft.a, { position: "bottom-center", autoClose: 3e3, hideProgressBar: !1, newestOnTop: !1, closeOnClick: !0, rtl: !1, pauseOnFocusLoss: !0, draggable: !0, pauseOnHover: !0 }),
                                            Object(v.jsx)(Pt.a, {}),
                                        ],
                                    });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                It = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        var e;
                        Object(_.a)(this, a);
                        for (var l = arguments.length, n = new Array(l), i = 0; i < l; i++) n[i] = arguments[i];
                        return (
                            ((e = t.call.apply(t, [this].concat(n))).handleMaterialChange = function (t, a) {
                                e.props.onMaterialChange(t, a);
                            }),
                            (e.handleStyleChange = function (t, a) {
                                e.props.onStyleChange(t, a);
                            }),
                            (e.renderMaterialSection = function () {
                                var t = e.props.info.metadata.materials;
                                if (Array.isArray(t))
                                    return Object(v.jsx)("div", {
                                        children: t.map(function (t, a) {
                                            return Object(v.jsx)(
                                                "div",
                                                {
                                                    children: Object(v.jsx)(jt, {
                                                        label: t.label,
                                                        children: Object(v.jsx)("div", {
                                                            className: "textures-container",
                                                            children: t.types.map(function (a, l) {
                                                                return Object(v.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: "texture-item",
                                                                        onClick: function () {
                                                                            var l = t.name_in_model,
                                                                                n = a;
                                                                            e.handleMaterialChange(l, n);
                                                                        },
                                                                        children: [Object(v.jsx)("img", { alt: a.label, src: a.texture, className: "thumbnail" }), Object(v.jsx)("div", { className: "label", children: a.label })],
                                                                    },
                                                                    l
                                                                );
                                                            }),
                                                        }),
                                                    }),
                                                },
                                                a
                                            );
                                        }),
                                    });
                            }),
                            (e.renderStyleSection = function () {
                                var t = e.props.info.metadata.styles;
                                if (Array.isArray(t))
                                    return Object(v.jsx)("div", {
                                        style: { paddingTop: 10 },
                                        children: t.map(function (t, a) {
                                            return Object(v.jsx)(
                                                "div",
                                                {
                                                    children: Object(v.jsx)(jt, {
                                                        label: t.label,
                                                        children: Object(v.jsx)("div", {
                                                            className: "styles-container",
                                                            children: t.types.map(function (a, l) {
                                                                return Object(v.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className: "style-item",
                                                                        onClick: function () {
                                                                            var l = t.name_in_model,
                                                                                n = a.name_in_model;
                                                                            e.handleStyleChange(l, n);
                                                                        },
                                                                        children: [
                                                                            a.thumbnail && Object(v.jsx)("img", { alt: a.label, src: a.thumbnail, className: "thumbnail" }),
                                                                            Object(v.jsx)("div", { className: "label", children: a.label }),
                                                                        ],
                                                                    },
                                                                    l
                                                                );
                                                            }),
                                                        }),
                                                    }),
                                                },
                                                a
                                            );
                                        }),
                                    });
                            }),
                            e
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.info;
                                    return Object(v.jsxs)("div", { className: "option-section", children: [!e && Object(v.jsx)("p", { children: "No item selected" }), e && this.renderMaterialSection(), e && this.renderStyleSection()] });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component);
            function Ut(e) {
                var t,
                    a = e.item,
                    l = e.info,
                    n = e.onChange,
                    i = a.index,
                    s = parseInt(a.min || 0, 10),
                    o = parseInt(a.max || 100, 10),
                    m = l.getMorph(i);
                t = Math.round(5 + 295 * m);
                var d = function (e) {
                    var t = e.target.value;
                    t < s || t > o || ("function" === typeof n && n(i, (t - 5) / 295));
                };
                return Object(v.jsxs)("div", {
                    className: "input-container",
                    children: [
                        Object(v.jsx)("label", { children: a.label }),
                        Object(v.jsxs)("div", {
                            className: "input",
                            children: [
                                Object(v.jsx)("input", { type: "range", className: "input-slider", min: s, max: o, value: t, step: 1, onChange: d }),
                                Object(v.jsx)("input", { type: "number", className: "input-number", min: s, max: o, value: t, step: 1, onChange: d }),
                            ],
                        }),
                    ],
                });
            }
            var zt = (function (e) {
                    Object(x.a)(a, e);
                    var t = Object(D.a)(a);
                    function a() {
                        var e;
                        Object(_.a)(this, a);
                        for (var l = arguments.length, n = new Array(l), i = 0; i < l; i++) n[i] = arguments[i];
                        return (
                            ((e = t.call.apply(t, [this].concat(n))).renderMorphingSection = function () {
                                var t = e.props.info;
                                if (t && t.metadata && Array.isArray(t.metadata.morph))
                                    return t.metadata.morph.map(function (a, l) {
                                        return Object(v.jsx)(Ut, { item: a, info: t, onChange: e.props.onMorphChanged }, l);
                                    });
                            }),
                            (e._renderGroupInfo = function (t) {
                                return Object(v.jsx)(v.Fragment, {
                                    children: t.hasOwnProperty("opened")
                                        ? Object(v.jsxs)(v.Fragment, {
                                              children: [
                                                  Object(v.jsx)("hr", {}),
                                                  Object(v.jsxs)("div", {
                                                      className: "input-container",
                                                      children: [
                                                          Object(v.jsx)("label", { children: "Group Opened" }),
                                                          Object(v.jsx)("input", {
                                                              type: "checkbox",
                                                              checked: t.opened,
                                                              onChange: function () {
                                                                  return "function" === typeof e.props.onOpenedChanged && e.props.onOpenedChanged(!t.opened);
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                                  Object(v.jsx)("hr", {}),
                                              ],
                                          })
                                        : t.groupParent && t.groupParent.hasOwnProperty("opened")
                                        ? Object(v.jsxs)(v.Fragment, {
                                              children: [
                                                  Object(v.jsx)("hr", {}),
                                                  Object(v.jsxs)("div", {
                                                      className: "input-container",
                                                      children: [
                                                          Object(v.jsx)("label", { children: "Group Opened" }),
                                                          Object(v.jsx)("input", {
                                                              type: "checkbox",
                                                              checked: t.groupParent.opened,
                                                              onChange: function () {
                                                                  return "function" === typeof e.props.onOpenedChanged && e.props.onOpenedChanged(!t.groupParent.opened);
                                                              },
                                                          }),
                                                      ],
                                                  }),
                                                  Object(v.jsx)("hr", {}),
                                              ],
                                          })
                                        : null,
                                });
                            }),
                            (e._renderInfo = function (t) {
                                return Object(v.jsxs)("div", { children: [Object(v.jsx)("h3", { children: t && t.metadata ? t.metadata.itemName : "" }), e._renderGroupInfo(t), e.renderMorphingSection()] });
                            }),
                            e
                        );
                    }
                    return (
                        Object(g.a)(a, [
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props.info;
                                    return Object(v.jsxs)("div", { className: "property-section", children: [e && this._renderInfo(e), !e && Object(v.jsx)("p", { children: "No item selected" })] });
                                },
                            },
                        ]),
                        a
                    );
                })(r.a.Component),
                Nt = [
                    { label: "Seamless 1", texture: "/blueprint3D-assets/textures/seamless-01.jpg", width: 35, height: 35 },
                    { label: "Seamless 2", texture: "/blueprint3D-assets/textures/seamless-02.jpg", width: 35, height: 35 },
                    { label: "Oak", texture: "/blueprint3D-assets/textures/163 Aged Oak.jpg", width: 35, height: 35 },
                    { label: "Mahogany", texture: "/blueprint3D-assets/textures/Mahogany-w365.jpg", width: 35, height: 35 },
                    { label: "W155", texture: "/blueprint3D-assets/textures/W155.jpg", width: 35, height: 35 },
                ],
                Vt = [
                    { label: "Clear", texture: "/blueprint3D-assets/textures/frosted-0.jpg", width: 35, height: 35 },
                    { label: "25% Frosted", texture: "/blueprint3D-assets/textures/frosted-25.jpg", width: 35, height: 35 },
                    { label: "50% Frosted", texture: "/blueprint3D-assets/textures/frosted-50.jpg", width: 35, height: 35 },
                    { label: "75% Frosted", texture: "/blueprint3D-assets/textures/frosted-75.jpg", width: 35, height: 35 },
                    { label: "100% Frosted", texture: "/blueprint3D-assets/textures/frosted-100.jpg", width: 35, height: 35 },
                ],
                At = [
                    { label: "Silver", texture: "/blueprint3D-assets/textures/silver.jpg", width: 100, height: 100 },
                    { label: "Black", texture: "/blueprint3D-assets/textures/black.jpg", width: 100, height: 100 },
                ],
                Kt = [
                    { label: "12m", name_in_model: "desk-modesty-12m" },
                    { label: "18m", name_in_model: "desk-modesty-18m" },
                    { label: "28m", name_in_model: "desk-modesty-28m" },
                ],
                Xt = [
                    { label: "Acrylic", name_in_model: "modesty-16ma" },
                    { label: "Laminate", name_in_model: "modesty-16ml" },
                ],
                Yt = [].concat(Kt, [{ label: "TLEG", name_in_model: "desk-modesty-tleg" }]),
                Qt = [
                    { label: "NG", name_in_model: "", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                    { label: "LG", name_in_model: "grommet-lg", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-lg.jpg" },
                    { label: "CG", name_in_model: "grommet-cg", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cg.jpg" },
                    { label: "RG", name_in_model: "grommet-rg", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-rg.jpg" },
                    { label: "LRG", name_in_model: "grommet-lrg", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-lrg.jpg" },
                ],
                Jt = [
                    { label: "NG", name_in_model: "", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                    { label: "COG", name_in_model: "grommet-cog", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cog.jpg" },
                ],
                qt = [
                    { label: "NG", name_in_model: "", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                    { label: "CG", name_in_model: "grommet-cg", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cg.jpg" },
                ],
                Zt = [
                    { label: "NG", name_in_model: ",desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                    { label: "COG", name_in_model: "grommet-cog,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cg.jpg" },
                    { label: "1SCP", name_in_model: "grommet-1scp", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cog.jpg" },
                ],
                $t = [
                    { label: "NG", name_in_model: ",desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                    { label: "COG", name_in_model: "grommet-cog,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cg.jpg" },
                    { label: "2SCP", name_in_model: "grommet-2scp", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cog.jpg" },
                ],
                ea = [
                    { label: 'Bar 5" Pull Nickel', name_in_model: 'handle-optional-5"-bar-pull-nickel' },
                    { label: 'Loop 5" Black', name_in_model: 'handle-optional-5"-loop-black' },
                    { label: 'Loop 5" Nickel', name_in_model: 'handle-optional-5"-loop-nickel' },
                    { label: 'Square 5" Nickel', name_in_model: 'handle-optional-5"-square-nickel' },
                    { label: 'Strait 5" Pull Black', name_in_model: 'handle-optional-5"-strait-pull-black' },
                    { label: 'Strait 5" Pull Silver', name_in_model: 'handle-optional-5"-strait-pull-silver' },
                    { label: 'Waterfall 5" Black', name_in_model: 'handle-optional-5"-waterfall-black' },
                ],
                ta = [
                    { label: 'Bar 5" Pull Nickel', name_in_model: 'filing-handle-5"-bar-pull-nickel' },
                    { label: 'Loop 5" Black', name_in_model: 'filing-handle-5"-loop-black' },
                    { label: 'Loop 5" Nickel', name_in_model: 'filing-handle-5"-loop-nickel' },
                    { label: 'Square 5" Nickel', name_in_model: 'filing-handle-5"-square-nickel' },
                    { label: 'Strait 5" Pull Black', name_in_model: 'filing-handle-5"-strait-pull-black' },
                    { label: 'Strait 5" Pull Silver', name_in_model: 'filing-handle-5"-strait-pull-silver' },
                    { label: 'Waterfall 5" Black', name_in_model: 'filing-handle-5"-waterfall-black' },
                ],
                aa = [
                    { label: "Glass Doors", name_in_model: "door-gd", thumbnail: "/blueprint3D-assets/textures/thumb-door-glass.jpg" },
                    { label: "Panel Doors", name_in_model: "door-pd", thumbnail: "/blueprint3D-assets/textures/thumb-door-panel.jpg" },
                ],
                la = [
                    { label: "Top", name_in_model: "cabinet-top-t" },
                    { label: "No Top", name_in_model: "cabinet-top-nt" },
                ],
                na = [
                    { label: "Lock", name_in_model: "lock" },
                    { label: "No Lock", name_in_model: "" },
                ],
                ia = {
                    category: "DESK",
                    styles: [
                        {
                            name: "DESK-BF",
                            image: "/blueprint3D-assets/models/thumbnails/desk-bf.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-BF.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable (Left)", name_in_model: "desk-gable-side-left", types: Nt },
                                { label: "Desk Gable (Right)", name_in_model: "desk-gable-side-right", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-ECUL24C24E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecul.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUL24C24E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUL24C30E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecul.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUL24C30E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUL30C24E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecul.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUL30C24E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUL30C30E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecul.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUL30C30E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUR24C24E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecur.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUR24C24E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUR24C30E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecur.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUR24C30E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUR30C24E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecur.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUR30C24E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-ECUR30C30E",
                            image: "/blueprint3D-assets/models/thumbnails/desk-ecur.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-ECUR30C30E.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-FMB",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rcl.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-FMB.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "fml-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Xt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-FMR",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rcl.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-FMR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "fml-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Xt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-RCL",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rcl.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RCL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-RCR",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rcr.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RCR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-RFF",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rff.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RFF.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-RFFLHG",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rfflhg.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RFFLHG.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-RFFLRHG",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rfflrhg.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RFFLRHG.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-RFFRHG",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rffrhg.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RFFRHG.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-RRF",
                            image: "/blueprint3D-assets/models/thumbnails/desk-rrf.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-RRF.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Qt },
                            ],
                        },
                        {
                            name: "DESK-WVL",
                            image: "/blueprint3D-assets/models/thumbnails/desk-wvl.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-WVL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "DESK-WVR",
                            image: "/blueprint3D-assets/models/thumbnails/desk-wvr.jpg",
                            model: "/blueprint3D-assets/models/glb/DESK-WVR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 36, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                    ],
                },
                sa = {
                    category: "PDESK",
                    styles: [
                        {
                            name: "PDESK-ARKL",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-arkl.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-ARKL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-ARKR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-arkr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-ARKR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-BOOML",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-booml.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-BOOML.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-BOOMR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-boomr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-BOOMR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-DTL",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-dtl.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-DTL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-DTR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-dtr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-DTR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-JTL",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-jtl.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-JTL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-JTR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-jtr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-JTR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-PTL",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-ptl.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-PTL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-PTR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-ptr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-PTR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-RTL",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-rtl.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-RTL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                        {
                            name: "PDESK-RTR",
                            image: "/blueprint3D-assets/models/thumbnails/pdesk-rtr.jpg",
                            model: "/blueprint3D-assets/models/glb/PDESK-RTR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 30, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Yt },
                                { label: "Grommet Style", name_in_model: "grommet", types: Jt },
                            ],
                        },
                    ],
                },
                oa = {
                    category: "RTN",
                    styles: [
                        {
                            name: "RTN-BML",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-bml.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-BML.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "RTN-BMR",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-bmr.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-BMR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "RTN-RL",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-rl.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-RL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 24, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "RTN-RR",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-rr.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-RR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 24, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "RTN-WL",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-wl.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-WL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "RTN-WR",
                            image: "/blueprint3D-assets/models/thumbnails/rtn-wr.jpg",
                            model: "/blueprint3D-assets/models/glb/RTN-WR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                                { label: "Desk Gable", name_in_model: "desk-gable", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                    ],
                },
                ma = {
                    category: "BR",
                    styles: [
                        {
                            name: "BR-BML",
                            image: "/blueprint3D-assets/models/thumbnails/br-bml.jpg",
                            model: "/blueprint3D-assets/models/glb/BR-BML.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "BR-BMR",
                            image: "/blueprint3D-assets/models/thumbnails/br-bmr.jpg",
                            model: "/blueprint3D-assets/models/glb/BR-BMR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "BR-RB",
                            image: "/blueprint3D-assets/models/thumbnails/br-rb.jpg",
                            model: "/blueprint3D-assets/models/glb/BR-RB.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Width", index: 1, min: 60, max: 108 },
                                { label: "Depth", index: 2, min: 24, max: 48 },
                            ],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "BR-WL",
                            image: "/blueprint3D-assets/models/thumbnails/br-wl.jpg",
                            model: "/blueprint3D-assets/models/glb/BR-WL.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                        {
                            name: "BR-WR",
                            image: "/blueprint3D-assets/models/thumbnails/br-wr.jpg",
                            model: "/blueprint3D-assets/models/glb/BR-WR.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [{ label: "Width", index: 1, min: 60, max: 108 }],
                            materials: [
                                { label: "Desk Top", name_in_model: "desk-top", types: Nt },
                                { label: "Desk Modesty", name_in_model: "desk-modesty", types: Nt },
                            ],
                            styles: [
                                { label: "Modesty Style", name_in_model: "modesty", types: Kt },
                                { label: "Grommet Style", name_in_model: "grommet", types: qt },
                            ],
                        },
                    ],
                },
                da = {
                    category: "PED-OP",
                    styles: [
                        {
                            name: "PED-OP-BBFOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-bbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BBFOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-BBFOLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BBFOLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-BBFOR",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-bbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BBFOR.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-BBFORT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BBFORT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-BFOLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BFOLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-BFORT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-BFORT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-FFOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-ffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-FFOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-FFOLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-FFOLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-FFOR",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-ffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-FFOR.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-FFORT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-FFORT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MBBFOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MBBFOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MBBFOR",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MBBFOR.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MBFOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MBFOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MBFOR",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mbfor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MBFOR.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MFFOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MFFOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-OP-MFFOR",
                            image: "/blueprint3D-assets/models/thumbnails/ped-op-mffor.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-OP-MFFOR.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                    ],
                },
                ba = {
                    category: "PED-SP",
                    styles: [
                        {
                            name: "PED-SP-BBF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-bbf.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-BBF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-BBFT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-bbft.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-BBFT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-BFT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-hbf.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-BFT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-BD",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-db.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-BD.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-DB",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-db.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-DB.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-FF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-ff.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-FF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-FFT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-ff.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-FFT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-HBF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-hbf.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-HBF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-MBBF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-mbbf.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-MBBF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-MBF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-mbf.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-MBF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-SP-MFF",
                            image: "/blueprint3D-assets/models/thumbnails/ped-sp-mff.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-SP-MFF.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 15, max: 48 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                    ],
                },
                ra = {
                    category: "PED-MP",
                    styles: [
                        {
                            name: "PED-MP-BBBBL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBBBL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBBBLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbbblt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBBBLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBFL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbfl.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBFL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBFLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbflt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBFLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbl.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bblt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBOL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbol.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBOL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-BBOLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-bbolt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-BBOLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-FBBL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-fbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-FBBL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-FBBLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-fbblt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-FBBLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-LL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-ll.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-LL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-LLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-llt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-LLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-OBBL",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-obbl.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-OBBL.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PED-MP-OBBLT",
                            image: "/blueprint3D-assets/models/thumbnails/ped-mp-obblt.jpg",
                            model: "/blueprint3D-assets/models/glb/PED-MP-OBBLT.glb",
                            type: "1",
                            overlappable: !0,
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 108 },
                                { label: "Depth", index: 2, min: 20, max: 48 },
                            ],
                            materials: [
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                            ],
                            styles: [{ label: "Handle Style", name_in_model: "handle", types: ta }],
                        },
                    ],
                },
                pa = {
                    category: "HUTCH",
                    styles: [
                        {
                            name: "HUTCH-DM-2HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HD-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HD-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDC-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDC-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2HDOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOL-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HDOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOL-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2HDOLC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOLC-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HDOLC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOLC-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2HDOR-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOR-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HDOR-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDOR-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2HDORC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDORC-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-2HDORC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2HDORC-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-2SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2SO.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-DM-2SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-2SOC.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-DM-3HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3HD-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-3HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3HD-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-3HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3HDC-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-3HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3HDC-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-3SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3SO.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-DM-3SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-3SOC.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-DM-4HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4HD-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-4HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4HD-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-4HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4HDC-GD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-DM-4HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4HDC-PD.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-DM-4SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4SO.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-DM-4SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-DM-4SOC.glb",
                            type: "1",
                            stackable: !0,
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 48 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [{ label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt }],
                            styles: [],
                        },
                        {
                            name: "HUTCH-WM-2HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HD-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HD-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDC-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDC-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2HDOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOL-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HDOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOL-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2HDOLC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOLC-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HDOLC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOLC-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2HDOR-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOR-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HDOR-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDOR-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2HDORC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDORC-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2HDORC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2HDORC-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-2SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2SO.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-2SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-2SOC.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 20.125, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-3HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3HD-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-3HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3HD-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-3HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3HDC-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-3HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3HDC-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-3SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3SO.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-3SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-3SOC.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 20.125, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-4HD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4HD-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-4HD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4HD-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-4HDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4HDC-GD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-4HDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4HDC-PD.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ea }],
                        },
                        {
                            name: "HUTCH-WM-4SO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4SO.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 14.375, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "HUTCH-WM-4SOC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/HUTCH-WM-4SOC.glb",
                            type: "2",
                            defaultHeightFromFloor: 30,
                            morph: [
                                { label: "Height", index: 0, min: 20.125, max: 96 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Cabinet Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Cabinet Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                    ],
                },
                ca = {
                    category: "LST-2D",
                    styles: [
                        {
                            name: "LST-2D-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-2D-BBBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBFL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBFL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBFL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBFL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBOL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-BBOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-BBOL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-FBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-FBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-FBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-FBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-LLL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-LLL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-LLL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-LLL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-OBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-OBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-OBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-OBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2D-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2d-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2D-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                ha = {
                    category: "LST-2HD",
                    styles: [
                        {
                            name: "LST-2HD-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Hd-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2hd-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-2HD-BBBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Hd-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Hd-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBFL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBFL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBFL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBFL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBOL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-BBOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-BBOL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-FBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-FBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-FBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-FBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-OBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-OBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-OBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2HD-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-OBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Hd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2HD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2hd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2HD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                ya = {
                    category: "LST-2QD",
                    styles: [
                        {
                            name: "LST-2QD-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-2QD-BBBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBFL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbFl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBFL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBFL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbFl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBFL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbOl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBOL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-BBOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-bbOl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-BBOL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-FBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-FBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-FBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-FBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-OBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-OBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-OBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-OBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-2QD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-2Qd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-2QD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                ua = {
                    category: "LST-LD",
                    styles: [
                        {
                            name: "LST-LD-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LD.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LD.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LLL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LLL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-LLL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-LLL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Ld-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                    ],
                },
                _a = {
                    category: "LST-LDHO",
                    styles: [
                        {
                            name: "LST-LDHO-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBFL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBFL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBFL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBFL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBOL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-BBOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-BBOL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-FBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-FBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-FBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-FBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-LLL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-LLL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-LLL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-LLL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-OBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-OBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-OBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-OBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LDHO-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-LDHO-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LDHO-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                ga = {
                    category: "LST-RDHO",
                    styles: [
                        {
                            name: "LST-RDHO-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBFL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBFL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBFL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBFL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBFL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBOL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBOL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-BBOL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-BBOL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-BBOL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-FBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-FBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-FBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-FBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-FBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-LLL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-LLL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-LLL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-LLL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-OBBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-OBBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-OBBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-OBBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-OBBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RDHO-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-RDHO-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RDHO-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                xa = {
                    category: "LST-RD",
                    styles: [
                        {
                            name: "LST-RD-BBL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-BBL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-BBL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-BBL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-BBL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-RD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-RD.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-RD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-RD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-RD.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-RD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-LL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-LL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-LL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-LL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-LL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-LLL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-LLL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-LLL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-LLL.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-LLL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                    ],
                },
                Da = {
                    category: "LST-LHD",
                    styles: [
                        {
                            name: "LST-LHD-LD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LHd-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LHD-LD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LHD-LD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Lhd-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LHD-LD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-LHD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LHd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LHD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LHD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-Lhd-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LHD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                fa = {
                    category: "LST-RHD",
                    styles: [
                        {
                            name: "LST-RHD-RD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RHD-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RHD-RD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RHD-RD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RHD-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RHD-RD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-RHD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RHD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RHD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RHD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RHD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RHD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                La = {
                    category: "LST-LQD",
                    styles: [
                        {
                            name: "LST-LQD-LD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LQD-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LQD-LD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LQD-LD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LQD-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LQD-LD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-LQD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LQD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LQD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-LQD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-LQD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-LQD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                va = {
                    category: "LST-RQD",
                    styles: [
                        {
                            name: "LST-RQD-RD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RQD-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RQD-RD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RQD-RD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RQD-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RQD-RD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-RQD-OP-PD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RQD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RQD-OP-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-RQD-OP-GD",
                            image: "/blueprint3D-assets/models/thumbnails/lst-RQD-OP.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-RQD-OP-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                ka = {
                    category: "LST-OP",
                    styles: [
                        {
                            name: "LST-OP-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-2d.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-OP-BBBBL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-bbbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-BBBBL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-BBFL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-bbfl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-BBFL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-BBL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-bbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-BBL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-BBOL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-bbol.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-BBOL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-FBBL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-fbbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-FBBL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-LD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-LD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-LD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-Ld.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-LD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "LST-OP-LL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-ll.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-LL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-LLL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-lll.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-LLL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 60, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-OBBL",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-obbl.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-OBBL.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-OP",
                            image: "/blueprint3D-assets/models/thumbnails/lst-op-op.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-OP.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "LST-OP-RD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-RD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LST-OP-RD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/LST-OP-Rd.jpg",
                            model: "/blueprint3D-assets/models/glb/LST-OP-RD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                Ta = {
                    category: "BC",
                    styles: [
                        {
                            name: "BC-MB",
                            image: "/blueprint3D-assets/models/thumbnails/br-bml.jpg",
                            model: "/blueprint3D-assets/models/glb/BC-MB.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 108 },
                                { label: "Width", index: 1, min: 24, max: 108 },
                                { label: "Depth", index: 2, min: 12, max: 60 },
                            ],
                            materials: [
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                        },
                        {
                            name: "BC-RC",
                            image: "/blueprint3D-assets/models/thumbnails/br-bml.jpg",
                            model: "/blueprint3D-assets/models/glb/BC-RC.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 108 },
                                { label: "Width", index: 1, min: 24, max: 60 },
                            ],
                            materials: [
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                        },
                        {
                            name: "BC-SB",
                            image: "/blueprint3D-assets/models/thumbnails/br-bml.jpg",
                            model: "/blueprint3D-assets/models/glb/BC-SB.glb",
                            type: "1",
                            stackontop: !0,
                            morph: [
                                { label: "Height", index: 0, min: 24, max: 108 },
                                { label: "Width", index: 1, min: 24, max: 108 },
                                { label: "Depth", index: 2, min: 12, max: 60 },
                            ],
                            materials: [
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                        },
                    ],
                },
                Sa = {
                    category: "BSC",
                    styles: [
                        {
                            name: "BSC-2DH-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-2DH-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-2DH-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-2DH-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-2DL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-2DL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-2DL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-2DL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-LDH-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LDH-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-LDH-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LDH-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-LDL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LDL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-LDL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LDL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-LORDH-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LORDH-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-LORDH-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LORDH-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-LORDL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LORDL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-LORDL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-LORDL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-OP",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-OP.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "BSC-RDH-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-RDH-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-RDH-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-RDH-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-RDL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-RDL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-RDL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-RDL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-ROLDH-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-ROLDH-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-ROLDH-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-ROLDH-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "BSC-ROLDL-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-ROLDL-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "BSC-ROLDL-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/BSC-ROLDL-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                Ha = {
                    category: "SSC",
                    styles: [
                        {
                            name: "SSC-2D-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-2D-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-2D-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-2D-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-2DC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-2DC-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-2DC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-2DC-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-LD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-LD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-LDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LDC-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-LDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LDC-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-LORD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LORD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-LORD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LORD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-LORDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LORDC-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-LORDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-LORDC-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-OP",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-OP.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "SSC-OPC",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-OPC.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                        },
                        {
                            name: "SSC-RD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-RD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-RD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-RD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-RDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-RDC-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-RDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-RDC-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-ROLD-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-ROLD-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-ROLD-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-ROLD-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "SSC-ROLDC-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-ROLDC-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "SSC-ROLDC-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SSC-ROLDC-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                    ],
                },
                Ca = {
                    category: "PST",
                    styles: [
                        {
                            name: "PST-CSL-NS-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-CSL-NS-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-CSL-NS-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-CSL-NS-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "PST-CSR-NS-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-CSR-NS-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-CSR-NS-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-CSR-NS-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                        },
                        {
                            name: "PST-FLCL-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCL-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCL-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCL-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCL-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCL-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCL-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCL-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCR-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCR-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCR-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCR-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCR-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCR-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLCR-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLCR-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLL-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLL-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLL-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLL-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLL-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLL-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLL-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLL-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLR-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLR-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLR-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLR-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLR-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLR-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-FLR-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-FLR-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OP-BBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OP-BBF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "PST-OP-FF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OP-FF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "PST-OPCL-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCL-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCL-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCL-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCL-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCL-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCL-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCL-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCR-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCR-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCR-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCR-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCR-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCR-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-OPCR-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-OPCR-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCL-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCL-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCL-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCL-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCL-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCL-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCL-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCL-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCR-BBF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCR-BBF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCR-BBF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCR-BBF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCR-FF-PD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCR-FF-PD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLCR-FF-GD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLCR-FF-GD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                                { label: "Glass", name_in_model: "glass", types: Vt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLL-BBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLL-BBF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLL-FF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLL-FF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLR-BBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLR-BBF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                        {
                            name: "PST-SLR-FF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/PST-SLR-FF.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [{ label: "Handle", name_in_model: "handle", types: ta }],
                        },
                    ],
                },
                Ba = {
                    category: "LBC",
                    styles: [
                        {
                            name: "LBC-2DBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-2DBF.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LBC-BF2D",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-BF2D.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LBC-BFBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-BFBF.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LBC-BFO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-BFO.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LBC-OBF",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-OBF.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "LBC-OP",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/LBC-OP.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                            ],
                            styles: [],
                        },
                    ],
                },
                wa = {
                    category: "FILING",
                    styles: [
                        {
                            name: "FILING-1DR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/FILING-1DR.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Top", name_in_model: "cabinet-top", types: la },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "FILING-2DR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/FILING-2DR.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Top", name_in_model: "cabinet-top", types: la },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "FILING-3DR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/FILING-3DR.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Top", name_in_model: "cabinet-top", types: la },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "FILING-4DR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/FILING-4DR.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Top", name_in_model: "cabinet-top", types: la },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "FILING-4DRO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/FILING-4DRO.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Face", name_in_model: "cabinet-face", types: Nt },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Top", name_in_model: "cabinet-top", types: la },
                                { label: "Handle", name_in_model: "handle", types: ta },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                    ],
                },
                Oa = {
                    category: "SCR",
                    styles: [
                        {
                            name: "SCR-AS-DS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-AS-DS.glb",
                            type: "1",
                            stackable: !0,
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                        },
                        {
                            name: "SCR-AS-FM",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-AS-FM.glb",
                            type: "1",
                            stackable: !0,
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                        },
                        {
                            name: "SCR-AS-NB",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-AS-NB.glb",
                            type: "1",
                            stackable: !0,
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                        },
                        {
                            name: "SCR-AS-SS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-AS-SS.glb",
                            type: "1",
                            stackable: !0,
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                        },
                        {
                            name: "SCR-LS-DS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-LS-DS.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                            materials: [{ label: "Face", name_in_model: "panel-laminate", types: Nt }],
                        },
                        {
                            name: "SCR-LS-FM",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-LS-FM.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                            materials: [{ label: "Face", name_in_model: "panel-laminate", types: Nt }],
                        },
                        {
                            name: "SCR-LS-NB",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-LS-NB.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                            materials: [{ label: "Face", name_in_model: "panel-laminate", types: Nt }],
                        },
                        {
                            name: "SCR-LS-SS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/SCR-LS-SS.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 16, max: 120 },
                            ],
                            materials: [{ label: "Face", name_in_model: "panel-laminate", types: Nt }],
                        },
                    ],
                },
                ja = [
                    { label: "Top", name_in_model: "cabinet-top-laminate" },
                    { label: "No Top", name_in_model: "" },
                ],
                Pa = {
                    category: "KIT",
                    styles: [
                        {
                            name: "KIT-BC-1BODT",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1BODT.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 18, max: 60 },
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Top", name_in_model: "cabinet-top", types: ja },
                            ],
                        },
                        {
                            name: "KIT-BC-1D6LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D6LVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1D6RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D6RVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1D10LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D10LVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1D10RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D10RVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1D62VD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D62VD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1D102VD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1D102VD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1DD62VDS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1DD62VDS.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-1DD102VDS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-1DD102VDS.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-2BOD15",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2BOD15.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                            ],
                        },
                        {
                            name: "KIT-BC-2BODT",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2BODT.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 18, max: 60 },
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Top", name_in_model: "cabinet-top", types: ja },
                            ],
                        },
                        {
                            name: "KIT-BC-2D6LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2D6LVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-2D6RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2D6RVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-2D62VD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2D62VD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-2VDS",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-2VDS.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-3BOD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-3BOD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                            ],
                        },
                        {
                            name: "KIT-BC-3BOD10",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-3BOD10.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                            ],
                        },
                        {
                            name: "KIT-BC-4BOD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-4BOD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 24, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                            ],
                        },
                        {
                            name: "KIT-BC-BCL",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-BCL.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-BCR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-BCR.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-LVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-RVD.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-BC-VO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-BC-VO.glb",
                            type: "1",
                            morph: [
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-TC-2VD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-TC-2VD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-TC-LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-TC-LVD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-TC-RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-TC-RVD.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-TC-VO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-TC-VO.glb",
                            type: "1",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-2VD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-2VD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-2VDM",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-2VDM.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-BCL",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-BCL.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-BCR",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-BCR.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-LVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-LVD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-RVD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-RVD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 18, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-VO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-VO.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 48, max: 120 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-1HD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-1HD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 15, max: 60 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-2HD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-2HD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 30, max: 60 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-HDM",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-HDM.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 30, max: 60 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-HOHD",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-HOHD.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 30, max: 60 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                        {
                            name: "KIT-WC-HO",
                            image: "/blueprint3D-assets/models/thumbnails/hutch-lwm-2hd.jpg",
                            model: "/blueprint3D-assets/models/glb/KIT-WC-HO.glb",
                            type: "2",
                            morph: [
                                { label: "Height", index: 0, min: 30, max: 60 },
                                { label: "Width", index: 1, min: 36, max: 60 },
                                { label: "Depth", index: 2, min: 15, max: 24 },
                            ],
                            materials: [
                                { label: "Laminate Face", name_in_model: "cabinet-face-laminate", types: Nt },
                                { label: "Metal Face", name_in_model: "cabinet-face-metal", types: At },
                                { label: "Body", name_in_model: "cabinet-body", types: Nt },
                                { label: "Top", name_in_model: "cabinet-top", types: Nt },
                            ],
                            styles: [
                                { label: "Doors", name_in_model: "doors", types: aa },
                                { label: "Handle", name_in_model: "handle", types: ea },
                                { label: "Lock", name_in_model: "lock", types: na },
                            ],
                        },
                    ],
                },
                Fa =
                    ([].concat(
                        [
                            { label: "NG", name_in_model: ",desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-ng.jpg" },
                            { label: "LG", name_in_model: "grommet-lg,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-lg.jpg" },
                            { label: "CG", name_in_model: "grommet-cg,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cg.jpg" },
                            { label: "RG", name_in_model: "grommet-rg,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-rg.jpg" },
                            { label: "LRG", name_in_model: "grommet-lrg,desk-top", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-lrg.jpg" },
                        ],
                        [
                            { label: "1SCP", name_in_model: "grommet-1scp", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cog.jpg" },
                            { label: "2SCP", name_in_model: "grommet-2scp", thumbnail: "/blueprint3D-assets/textures/thumb-grommet-cog.jpg" },
                        ]
                    ),
                    [ia, sa, Ta, ma, Sa, wa, pa, Pa, Ba, ca, ha, ya, ua, _a, Da, La, xa, ga, fa, va, ka, ra, da, ba, Ca, oa, Oa, Ha]),
                Ea =
                    (a(56),
                    (function (e) {
                        Object(x.a)(a, e);
                        var t = Object(D.a)(a);
                        function a(e) {
                            var l;
                            return (
                                Object(_.a)(this, a),
                                ((l = t.call(this, e)).handleItemSelected = function (e) {
                                    l.setState({ selectedItem: e }), window.dispatchEvent(new Event("resize"));
                                }),
                                (l.handleItemUnselected = function () {
                                    l.setState({ selectedItem: null }), window.dispatchEvent(new Event("resize"));
                                }),
                                (l.handleSwitchMode = function () {
                                    return l.setState({ viewMode: "3d" === l.state.viewMode ? "2d" : "3d" });
                                }),
                                (l.handleProductClicked = (function () {
                                    var e = Object(u.a)(
                                        y.a.mark(function e(t) {
                                            return y.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return l.setState({ showLoadingScreen: !0 }), (e.next = 3), l.refBp3d.addItem(t);
                                                        case 3:
                                                            l.setState({ showLoadingScreen: !1 });
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function (t) {
                                        return e.apply(this, arguments);
                                    };
                                })()),
                                (l.handleDuplicateProduct = function () {
                                    l.state.selectedItem && l.refBp3d.duplicateItem();
                                }),
                                (l.handleSetClicked = function (e) {
                                    l.refBp3d && l.refBp3d.addSet(e);
                                }),
                                (l.handleSaveJson = function () {
                                    console.log("save");
                                    var e = l.refBp3d.getJSON();
                                    window.localStorage.setItem("bp3dJson", e);
                                }),
                                (l.handleLoadJson = function () {
                                    console.log("load");
                                    var e = window.localStorage.getItem("bp3dJson");
                                    if (e && e.length) {
                                        var t = e;
                                        l.refBp3d.setJSON(t);
                                    }
                                }),
                                (l.handleSnapshot = function () {
                                    console.log("snapshot");
                                    var e = l.refBp3d.takeSnapshot();
                                    console.log(e);
                                }),
                                (l.handleImportFromSetBuilder = function (e) {
                                    l.refBp3d.importSetFromBuilder(e);
                                }),
                                (l.state = { viewMode: "3d", showProducts: !1, activeCategory: 0, selectedItem: null, measureUnit: "in", showImportSetModal: !1, showLoadingScreen: !1 }),
                                l
                            );
                        }
                        return (
                            Object(g.a)(a, [
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.state,
                                            a = t.viewMode,
                                            l = t.selectedItem,
                                            n = t.showImportSetModal,
                                            i = t.showProducts,
                                            s = t.showLoadingScreen;
                                        return Object(v.jsx)("div", {
                                            className: "App",
                                            children: Object(v.jsx)("div", {
                                                className: "bp3d",
                                                children: Object(v.jsxs)("div", {
                                                    className: "container",
                                                    children: [
                                                        Object(v.jsx)("div", {
                                                            className: "left-container",
                                                            children: Object(v.jsx)(Rt, {
                                                                viewMode: a,
                                                                onShow3DViewClicked: function () {
                                                                    e.setState({ viewMode: "3d" });
                                                                },
                                                                onShow2DPlanner: function () {
                                                                    e.setState({ viewMode: "2d" });
                                                                },
                                                                onShowDimensionsToggled: function (t) {
                                                                    e.refBp3d.setDimensionVisible(t);
                                                                },
                                                                onLockSceneToggled: function (t) {
                                                                    e.refBp3d.setLocked(t);
                                                                },
                                                                onSnapToggled: function (t) {
                                                                    e.refBp3d.setSnap(t);
                                                                },
                                                                onXRayToggled: function (t) {
                                                                    e.refBp3d.setToggleXRay(t);
                                                                },
                                                                onAddProductClicked: function () {
                                                                    return e.setState({ showProducts: !e.state.showProducts });
                                                                },
                                                                onImportFromConfiguratorClicked: function () {
                                                                    e.setState({ showImportSetModal: !0 });
                                                                },
                                                                onSaveClicked: this.handleSaveJson,
                                                                onLoadClicked: this.handleLoadJson,
                                                                onSnapshotClicked: this.handleSnapshot,
                                                                onUnitChanged: function (t) {
                                                                    return e.setState({ measureUnit: t });
                                                                },
                                                            }),
                                                        }),
                                                        Object(v.jsxs)("div", {
                                                            className: "main-container ".concat(l ? "" : "wide"),
                                                            children: [
                                                                Object(v.jsx)("div", {
                                                                    className: "scenes-container",
                                                                    children: Object(v.jsx)(wt, {
                                                                        ref: function (t) {
                                                                            return (e.refBp3d = t);
                                                                        },
                                                                        viewMode: a,
                                                                        measureUnit: this.state.measureUnit,
                                                                        onItemSelected: this.handleItemSelected,
                                                                        onItemUnselected: this.handleItemUnselected,
                                                                        onSwitchMode: this.handleSwitchMode,
                                                                    }),
                                                                }),
                                                                Object(v.jsx)("div", {
                                                                    hidden: !i,
                                                                    style: { position: "absolute", top: 0, left: 0, width: 400, height: "100vh", overflow: "auto", background: "white", borderRight: "1px solid #ccc" },
                                                                    children: Object(v.jsx)(Ot, {
                                                                        items: Fa,
                                                                        onClose: function () {
                                                                            return e.setState({ showProducts: !1 });
                                                                        },
                                                                        onProductClicked: function (t) {
                                                                            e.handleProductClicked(t);
                                                                        },
                                                                    }),
                                                                }),
                                                                Object(v.jsx)("div", {
                                                                    style: {
                                                                        position: "absolute",
                                                                        top: 0,
                                                                        left: 0,
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        background: "#00000088",
                                                                        color: "white",
                                                                        display: s ? "flex" : "none",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                    },
                                                                    children: Object(v.jsx)("span", { children: "loading..." }),
                                                                }),
                                                            ],
                                                        }),
                                                        Object(v.jsxs)("div", {
                                                            className: "right-container ".concat(l ? "opened" : ""),
                                                            children: [
                                                                Object(v.jsxs)("div", {
                                                                    className: "product-info-container",
                                                                    children: [
                                                                        Object(v.jsx)(zt, {
                                                                            info: l,
                                                                            onMorphChanged: function (t, a) {
                                                                                e.refBp3d.setMorph(t, a), e.refBp3d.update(), e.forceUpdate();
                                                                            },
                                                                            onOpenedChanged: function (t) {
                                                                                "function" === typeof l.setOpened && l.setOpened(t),
                                                                                    l.groupParent && "function" === typeof l.groupParent.setOpened && l.groupParent.setOpened(t),
                                                                                    e.forceUpdate();
                                                                            },
                                                                            onGroupItemChanged: function (t, a) {
                                                                                e.refBp3d.replaceSetItem(t, a);
                                                                            },
                                                                        }),
                                                                        Object(v.jsx)(It, {
                                                                            info: l,
                                                                            onMaterialChange: function (t, a) {
                                                                                e.refBp3d && "function" === typeof e.refBp3d.updateMaterial && e.refBp3d.updateMaterial(t, a);
                                                                            },
                                                                            onStyleChange: function (t, a) {
                                                                                e.refBp3d && "function" === typeof e.refBp3d.updateMaterial && e.refBp3d.updateStyle(t, a);
                                                                            },
                                                                            onBlockCountChanged: function (t) {
                                                                                e.refBp3d && "function" === typeof e.refBp3d.updateBlockCount && e.refBp3d.updateBlockCount(t);
                                                                            },
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(v.jsx)(Mt, {
                                                                    info: l,
                                                                    onDuplicateProduct: this.handleDuplicateProduct,
                                                                    onDeleteActiveProduct: function () {
                                                                        l && l.remove(), e.setState({ selectedItem: null });
                                                                    },
                                                                    onMorphAlignChanged: function (t) {
                                                                        l.setMorphAlign(t), e.forceUpdate();
                                                                    },
                                                                    onLockChanged: function (t) {
                                                                        console.log("lock changed", t), l && l.setFixed(t), e.forceUpdate();
                                                                    },
                                                                    onStackableChanged: function (t) {
                                                                        l && l.setStackable(t), e.forceUpdate();
                                                                    },
                                                                    onOverlappableChanged: function (t) {
                                                                        l && l.setOverlappable(t), e.forceUpdate();
                                                                    },
                                                                    onFlipHorizonal: function () {
                                                                        l && l.flipHorizontal();
                                                                    },
                                                                }),
                                                            ],
                                                        }),
                                                        n
                                                            ? Object(v.jsx)(Wt, {
                                                                  onImported: this.handleImportFromSetBuilder,
                                                                  onClose: function () {
                                                                      return e.setState({ showImportSetModal: !1 });
                                                                  },
                                                              })
                                                            : null,
                                                    ],
                                                }),
                                            }),
                                        });
                                    },
                                },
                            ]),
                            a
                        );
                    })(r.a.Component)),
                Ma = function (e) {
                    e &&
                        e instanceof Function &&
                        a
                            .e(3)
                            .then(a.bind(null, 60))
                            .then(function (t) {
                                var a = t.getCLS,
                                    l = t.getFID,
                                    n = t.getFCP,
                                    i = t.getLCP,
                                    s = t.getTTFB;
                                a(e), l(e), n(e), i(e), s(e);
                            });
                };
            c.a.render(Object(v.jsx)(r.a.StrictMode, { children: Object(v.jsx)(Ea, {}) }), document.getElementById("root")), Ma();
        },
    },
    [[57, 1, 2]],
]);
