/*!
FullCalendar v5.11.5
Docs & License: https://fullcalendar.io/
(c) 2022 Adam Shaw
*/
var FullCalendar = (function (e) {
    "use strict";
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var t =
        function (e, n) {
            return (
                (t =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) &&
                                (e[n] = t[n]);
                    }),
                t(e, n)
            );
        };
    function n(e, n) {
        if ("function" != typeof n && null !== n)
            throw new TypeError(
                "Class extends value " +
                    String(n) +
                    " is not a constructor or null"
            );
        function r() {
            this.constructor = e;
        }
        t(e, n),
            (e.prototype =
                null === n
                    ? Object.create(n)
                    : ((r.prototype = n.prototype), new r()));
    }
    var r = function () {
        return (
            (r =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in (t = arguments[n]))
                            Object.prototype.hasOwnProperty.call(t, o) &&
                                (e[o] = t[o]);
                    return e;
                }),
            r.apply(this, arguments)
        );
    };
    function o(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++)
                (!r && o in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
        return e.concat(r || t);
    }
    var i,
        a,
        s,
        l,
        u,
        c,
        d,
        p,
        f = {},
        h = [],
        v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function g(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function m(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function y(e, t, n) {
        var r,
            o,
            a,
            s = {};
        for (a in t)
            "key" == a ? (r = t[a]) : "ref" == a ? (o = t[a]) : (s[a] = t[a]);
        if (
            (arguments.length > 2 &&
                (s.children = arguments.length > 3 ? i.call(arguments, 2) : n),
            "function" == typeof e && null != e.defaultProps)
        )
            for (a in e.defaultProps)
                void 0 === s[a] && (s[a] = e.defaultProps[a]);
        return E(e, s, r, o, null);
    }
    function E(e, t, n, r, o) {
        var i = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == o ? ++s : o,
        };
        return null == o && null != a.vnode && a.vnode(i), i;
    }
    function b(e) {
        return e.children;
    }
    function S(e, t, n) {
        "-" === t[0]
            ? e.setProperty(t, null == n ? "" : n)
            : (e[t] =
                  null == n
                      ? ""
                      : "number" != typeof n || v.test(t)
                      ? n
                      : n + "px");
    }
    function w(e, t, n, r, o) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if (("string" == typeof r && (e.style.cssText = r = ""), r))
                    for (t in r) (n && t in n) || S(e.style, t, "");
                if (n) for (t in n) (r && n[t] === r[t]) || S(e.style, t, n[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/Capture$/, ""))),
                (t =
                    t.toLowerCase() in e
                        ? t.toLowerCase().slice(2)
                        : t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + i] = n),
                n
                    ? r || e.addEventListener(t, i ? T : D, i)
                    : e.removeEventListener(t, i ? T : D, i);
        else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
                "width" !== t &&
                "height" !== t &&
                "href" !== t &&
                "list" !== t &&
                "form" !== t &&
                "tabIndex" !== t &&
                "download" !== t &&
                t in e
            )
                try {
                    e[t] = null == n ? "" : n;
                    break e;
                } catch (e) {}
            "function" == typeof n ||
                (null == n || (!1 === n && -1 == t.indexOf("-"))
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, n));
        }
    }
    function D(e) {
        l = !0;
        try {
            return this.l[e.type + !1](a.event ? a.event(e) : e);
        } finally {
            l = !1;
        }
    }
    function T(e) {
        l = !0;
        try {
            return this.l[e.type + !0](a.event ? a.event(e) : e);
        } finally {
            l = !1;
        }
    }
    function x(e, t) {
        (this.props = e), (this.context = t);
    }
    function C(e, t) {
        if (null == t) return e.__ ? C(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? C(e) : null;
    }
    function k(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break;
                }
            return k(e);
        }
    }
    function _(e) {
        l ? setTimeout(e) : d(e);
    }
    function R(e) {
        ((!e.__d && (e.__d = !0) && u.push(e) && !M.__r++) ||
            c !== a.debounceRendering) &&
            ((c = a.debounceRendering) || _)(M);
    }
    function M() {
        var e, t, n, r, o, i, a, s;
        for (
            u.sort(function (e, t) {
                return e.__v.__b - t.__v.__b;
            });
            (e = u.shift());

        )
            e.__d &&
                ((t = u.length),
                (r = void 0),
                (o = void 0),
                (a = (i = (n = e).__v).__e),
                (s = n.__P) &&
                    ((r = []),
                    ((o = g({}, i)).__v = i.__v + 1),
                    O(
                        s,
                        i,
                        o,
                        n.__n,
                        void 0 !== s.ownerSVGElement,
                        null != i.__h ? [a] : null,
                        r,
                        null == a ? C(i) : a,
                        i.__h
                    ),
                    L(r, i),
                    i.__e != a && k(i)),
                u.length > t &&
                    u.sort(function (e, t) {
                        return e.__v.__b - t.__v.__b;
                    }));
        M.__r = 0;
    }
    function I(e, t, n, r, o, i, a, s, l, u) {
        var c,
            d,
            p,
            v,
            g,
            m,
            y,
            S = (r && r.__k) || h,
            w = S.length;
        for (n.__k = [], c = 0; c < t.length; c++)
            if (
                null !=
                (v = n.__k[c] =
                    null == (v = t[c]) || "boolean" == typeof v
                        ? null
                        : "string" == typeof v ||
                          "number" == typeof v ||
                          "bigint" == typeof v
                        ? E(null, v, null, null, v)
                        : Array.isArray(v)
                        ? E(b, { children: v }, null, null, null)
                        : v.__b > 0
                        ? E(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v)
                        : v)
            ) {
                if (
                    ((v.__ = n),
                    (v.__b = n.__b + 1),
                    null === (p = S[c]) ||
                        (p && v.key == p.key && v.type === p.type))
                )
                    S[c] = void 0;
                else
                    for (d = 0; d < w; d++) {
                        if ((p = S[d]) && v.key == p.key && v.type === p.type) {
                            S[d] = void 0;
                            break;
                        }
                        p = null;
                    }
                O(e, v, (p = p || f), o, i, a, s, l, u),
                    (g = v.__e),
                    (d = v.ref) &&
                        p.ref != d &&
                        (y || (y = []),
                        p.ref && y.push(p.ref, null, v),
                        y.push(d, v.__c || g, v)),
                    null != g
                        ? (null == m && (m = g),
                          "function" == typeof v.type && v.__k === p.__k
                              ? (v.__d = l = P(v, l, e))
                              : (l = H(e, v, p, S, g, l)),
                          "function" == typeof n.type && (n.__d = l))
                        : l && p.__e == l && l.parentNode != e && (l = C(p));
            }
        for (n.__e = m, c = w; c--; )
            null != S[c] &&
                ("function" == typeof n.type &&
                    null != S[c].__e &&
                    S[c].__e == n.__d &&
                    (n.__d = A(r).nextSibling),
                V(S[c], S[c]));
        if (y) for (c = 0; c < y.length; c++) W(y[c], y[++c], y[++c]);
    }
    function P(e, t, n) {
        for (var r, o = e.__k, i = 0; o && i < o.length; i++)
            (r = o[i]) &&
                ((r.__ = e),
                (t =
                    "function" == typeof r.type
                        ? P(r, t, n)
                        : H(n, r, r, o, r.__e, t)));
        return t;
    }
    function N(e, t) {
        return (
            (t = t || []),
            null == e ||
                "boolean" == typeof e ||
                (Array.isArray(e)
                    ? e.some(function (e) {
                          N(e, t);
                      })
                    : t.push(e)),
            t
        );
    }
    function H(e, t, n, r, o, i) {
        var a, s, l;
        if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
        else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e)
                e.appendChild(o), (a = null);
            else {
                for (s = i, l = 0; (s = s.nextSibling) && l < r.length; l += 1)
                    if (s == o) break e;
                e.insertBefore(o, i), (a = i);
            }
        return void 0 !== a ? a : o.nextSibling;
    }
    function A(e) {
        var t, n, r;
        if (null == e.type || "string" == typeof e.type) return e.__e;
        if (e.__k)
            for (t = e.__k.length - 1; t >= 0; t--)
                if ((n = e.__k[t]) && (r = A(n))) return r;
        return null;
    }
    function O(e, t, n, r, o, i, s, l, u) {
        var c,
            d,
            p,
            f,
            h,
            v,
            m,
            y,
            E,
            S,
            w,
            D,
            T,
            C,
            k,
            _ = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h &&
            ((u = n.__h), (l = t.__e = n.__e), (t.__h = null), (i = [l])),
            (c = a.__b) && c(t);
        try {
            e: if ("function" == typeof _) {
                if (
                    ((y = t.props),
                    (E = (c = _.contextType) && r[c.__c]),
                    (S = c ? (E ? E.props.value : c.__) : r),
                    n.__c
                        ? (m = (d = t.__c = n.__c).__ = d.__E)
                        : ("prototype" in _ && _.prototype.render
                              ? (t.__c = d = new _(y, S))
                              : ((t.__c = d = new x(y, S)),
                                (d.constructor = _),
                                (d.render = z)),
                          E && E.sub(d),
                          (d.props = y),
                          d.state || (d.state = {}),
                          (d.context = S),
                          (d.__n = r),
                          (p = d.__d = !0),
                          (d.__h = []),
                          (d._sb = [])),
                    null == d.__s && (d.__s = d.state),
                    null != _.getDerivedStateFromProps &&
                        (d.__s == d.state && (d.__s = g({}, d.__s)),
                        g(d.__s, _.getDerivedStateFromProps(y, d.__s))),
                    (f = d.props),
                    (h = d.state),
                    (d.__v = t),
                    p)
                )
                    null == _.getDerivedStateFromProps &&
                        null != d.componentWillMount &&
                        d.componentWillMount(),
                        null != d.componentDidMount &&
                            d.__h.push(d.componentDidMount);
                else {
                    if (
                        (null == _.getDerivedStateFromProps &&
                            y !== f &&
                            null != d.componentWillReceiveProps &&
                            d.componentWillReceiveProps(y, S),
                        (!d.__e &&
                            null != d.shouldComponentUpdate &&
                            !1 === d.shouldComponentUpdate(y, d.__s, S)) ||
                            t.__v === n.__v)
                    ) {
                        for (
                            t.__v !== n.__v &&
                                ((d.props = y),
                                (d.state = d.__s),
                                (d.__d = !1)),
                                t.__e = n.__e,
                                t.__k = n.__k,
                                t.__k.forEach(function (e) {
                                    e && (e.__ = t);
                                }),
                                w = 0;
                            w < d._sb.length;
                            w++
                        )
                            d.__h.push(d._sb[w]);
                        (d._sb = []), d.__h.length && s.push(d);
                        break e;
                    }
                    null != d.componentWillUpdate &&
                        d.componentWillUpdate(y, d.__s, S),
                        null != d.componentDidUpdate &&
                            d.__h.push(function () {
                                d.componentDidUpdate(f, h, v);
                            });
                }
                if (
                    ((d.context = S),
                    (d.props = y),
                    (d.__P = e),
                    (D = a.__r),
                    (T = 0),
                    "prototype" in _ && _.prototype.render)
                ) {
                    for (
                        d.state = d.__s,
                            d.__d = !1,
                            D && D(t),
                            c = d.render(d.props, d.state, d.context),
                            C = 0;
                        C < d._sb.length;
                        C++
                    )
                        d.__h.push(d._sb[C]);
                    d._sb = [];
                } else
                    do {
                        (d.__d = !1),
                            D && D(t),
                            (c = d.render(d.props, d.state, d.context)),
                            (d.state = d.__s);
                    } while (d.__d && ++T < 25);
                (d.state = d.__s),
                    null != d.getChildContext &&
                        (r = g(g({}, r), d.getChildContext())),
                    p ||
                        null == d.getSnapshotBeforeUpdate ||
                        (v = d.getSnapshotBeforeUpdate(f, h)),
                    (k =
                        null != c && c.type === b && null == c.key
                            ? c.props.children
                            : c),
                    I(e, Array.isArray(k) ? k : [k], t, n, r, o, i, s, l, u),
                    (d.base = t.__e),
                    (t.__h = null),
                    d.__h.length && s.push(d),
                    m && (d.__E = d.__ = null),
                    (d.__e = !1);
            } else
                null == i && t.__v === n.__v
                    ? ((t.__k = n.__k), (t.__e = n.__e))
                    : (t.__e = U(n.__e, t, n, r, o, i, s, u));
            (c = a.diffed) && c(t);
        } catch (e) {
            (t.__v = null),
                (u || null != i) &&
                    ((t.__e = l), (t.__h = !!u), (i[i.indexOf(l)] = null)),
                a.__e(e, t, n);
        }
    }
    function L(e, t) {
        a.__c && a.__c(t, e),
            e.some(function (t) {
                try {
                    (e = t.__h),
                        (t.__h = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    a.__e(e, t.__v);
                }
            });
    }
    function U(e, t, n, r, o, a, s, l) {
        var u,
            c,
            d,
            p = n.props,
            h = t.props,
            v = t.type,
            g = 0;
        if (("svg" === v && (o = !0), null != a))
            for (; g < a.length; g++)
                if (
                    (u = a[g]) &&
                    "setAttribute" in u == !!v &&
                    (v ? u.localName === v : 3 === u.nodeType)
                ) {
                    (e = u), (a[g] = null);
                    break;
                }
        if (null == e) {
            if (null === v) return document.createTextNode(h);
            (e = o
                ? document.createElementNS("http://www.w3.org/2000/svg", v)
                : document.createElement(v, h.is && h)),
                (a = null),
                (l = !1);
        }
        if (null === v) p === h || (l && e.data === h) || (e.data = h);
        else {
            if (
                ((a = a && i.call(e.childNodes)),
                (c = (p = n.props || f).dangerouslySetInnerHTML),
                (d = h.dangerouslySetInnerHTML),
                !l)
            ) {
                if (null != a)
                    for (p = {}, g = 0; g < e.attributes.length; g++)
                        p[e.attributes[g].name] = e.attributes[g].value;
                (d || c) &&
                    ((d &&
                        ((c && d.__html == c.__html) ||
                            d.__html === e.innerHTML)) ||
                        (e.innerHTML = (d && d.__html) || ""));
            }
            if (
                ((function (e, t, n, r, o) {
                    var i;
                    for (i in n)
                        "children" === i ||
                            "key" === i ||
                            i in t ||
                            w(e, i, null, n[i], r);
                    for (i in t)
                        (o && "function" != typeof t[i]) ||
                            "children" === i ||
                            "key" === i ||
                            "value" === i ||
                            "checked" === i ||
                            n[i] === t[i] ||
                            w(e, i, t[i], n[i], r);
                })(e, h, p, o, l),
                d)
            )
                t.__k = [];
            else if (
                ((g = t.props.children),
                I(
                    e,
                    Array.isArray(g) ? g : [g],
                    t,
                    n,
                    r,
                    o && "foreignObject" !== v,
                    a,
                    s,
                    a ? a[0] : n.__k && C(n, 0),
                    l
                ),
                null != a)
            )
                for (g = a.length; g--; ) null != a[g] && m(a[g]);
            l ||
                ("value" in h &&
                    void 0 !== (g = h.value) &&
                    (g !== e.value ||
                        ("progress" === v && !g) ||
                        ("option" === v && g !== p.value)) &&
                    w(e, "value", g, p.value, !1),
                "checked" in h &&
                    void 0 !== (g = h.checked) &&
                    g !== e.checked &&
                    w(e, "checked", g, p.checked, !1));
        }
        return e;
    }
    function W(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            a.__e(e, n);
        }
    }
    function V(e, t, n) {
        var r, o;
        if (
            (a.unmount && a.unmount(e),
            (r = e.ref) &&
                ((r.current && r.current !== e.__e) || W(r, null, t)),
            null != (r = e.__c))
        ) {
            if (r.componentWillUnmount)
                try {
                    r.componentWillUnmount();
                } catch (e) {
                    a.__e(e, t);
                }
            (r.base = r.__P = null), (e.__c = void 0);
        }
        if ((r = e.__k))
            for (o = 0; o < r.length; o++)
                r[o] && V(r[o], t, n || "function" != typeof e.type);
        n || null == e.__e || m(e.__e), (e.__ = e.__e = e.__d = void 0);
    }
    function z(e, t, n) {
        return this.constructor(e, n);
    }
    function F(e, t, n) {
        var r, o, s;
        a.__ && a.__(e, t),
            (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
            (s = []),
            O(
                t,
                (e = ((!r && n) || t).__k = y(b, null, [e])),
                o || f,
                f,
                void 0 !== t.ownerSVGElement,
                !r && n
                    ? [n]
                    : o
                    ? null
                    : t.firstChild
                    ? i.call(t.childNodes)
                    : null,
                s,
                !r && n ? n : o ? o.__e : t.firstChild,
                r
            ),
            L(s, e);
    }
    (i = h.slice),
        (a = {
            __e: function (e, t, n, r) {
                for (var o, i, a; (t = t.__); )
                    if ((o = t.__c) && !o.__)
                        try {
                            if (
                                ((i = o.constructor) &&
                                    null != i.getDerivedStateFromError &&
                                    (o.setState(i.getDerivedStateFromError(e)),
                                    (a = o.__d)),
                                null != o.componentDidCatch &&
                                    (o.componentDidCatch(e, r || {}),
                                    (a = o.__d)),
                                a)
                            )
                                return (o.__E = o);
                        } catch (t) {
                            e = t;
                        }
                throw e;
            },
        }),
        (s = 0),
        (l = !1),
        (x.prototype.setState = function (e, t) {
            var n;
            (n =
                null != this.__s && this.__s !== this.state
                    ? this.__s
                    : (this.__s = g({}, this.state))),
                "function" == typeof e && (e = e(g({}, n), this.props)),
                e && g(n, e),
                null != e && this.__v && (t && this._sb.push(t), R(this));
        }),
        (x.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), R(this));
        }),
        (x.prototype.render = b),
        (u = []),
        (d =
            "function" == typeof Promise
                ? Promise.prototype.then.bind(Promise.resolve())
                : setTimeout),
        (M.__r = 0),
        (p = 0);
    var B,
        j,
        G,
        q = [],
        Y = [],
        Z = a.__b,
        X = a.__r,
        K = a.diffed,
        $ = a.__c,
        J = a.unmount;
    function Q() {
        for (var e; (e = q.shift()); )
            if (e.__P && e.__H)
                try {
                    e.__H.__h.forEach(ne),
                        e.__H.__h.forEach(re),
                        (e.__H.__h = []);
                } catch (t) {
                    (e.__H.__h = []), a.__e(t, e.__v);
                }
    }
    (a.__b = function (e) {
        (B = null), Z && Z(e);
    }),
        (a.__r = function (e) {
            X && X(e);
            var t = (B = e.__c).__H;
            t &&
                (j === B
                    ? ((t.__h = []),
                      (B.__h = []),
                      t.__.forEach(function (e) {
                          e.__N && (e.__ = e.__N),
                              (e.__V = Y),
                              (e.__N = e.i = void 0);
                      }))
                    : (t.__h.forEach(ne), t.__h.forEach(re), (t.__h = []))),
                (j = B);
        }),
        (a.diffed = function (e) {
            K && K(e);
            var t = e.__c;
            t &&
                t.__H &&
                (t.__H.__h.length &&
                    ((1 !== q.push(t) && G === a.requestAnimationFrame) ||
                        ((G = a.requestAnimationFrame) || te)(Q)),
                t.__H.__.forEach(function (e) {
                    e.i && (e.__H = e.i),
                        e.__V !== Y && (e.__ = e.__V),
                        (e.i = void 0),
                        (e.__V = Y);
                })),
                (j = B = null);
        }),
        (a.__c = function (e, t) {
            t.some(function (e) {
                try {
                    e.__h.forEach(ne),
                        (e.__h = e.__h.filter(function (e) {
                            return !e.__ || re(e);
                        }));
                } catch (n) {
                    t.some(function (e) {
                        e.__h && (e.__h = []);
                    }),
                        (t = []),
                        a.__e(n, e.__v);
                }
            }),
                $ && $(e, t);
        }),
        (a.unmount = function (e) {
            J && J(e);
            var t,
                n = e.__c;
            n &&
                n.__H &&
                (n.__H.__.forEach(function (e) {
                    try {
                        ne(e);
                    } catch (e) {
                        t = e;
                    }
                }),
                (n.__H = void 0),
                t && a.__e(t, n.__v));
        });
    var ee = "function" == typeof requestAnimationFrame;
    function te(e) {
        var t,
            n = function () {
                clearTimeout(r), ee && cancelAnimationFrame(t), setTimeout(e);
            },
            r = setTimeout(n, 100);
        ee && (t = requestAnimationFrame(n));
    }
    function ne(e) {
        var t = B,
            n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (B = t);
    }
    function re(e) {
        var t = B;
        (e.__c = e.__()), (B = t);
    }
    function oe(e, t) {
        for (var n in e) if ("__source" !== n && !(n in t)) return !0;
        for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1;
    }
    function ie(e) {
        this.props = e;
    }
    ((ie.prototype = new x()).isPureReactComponent = !0),
        (ie.prototype.shouldComponentUpdate = function (e, t) {
            return oe(this.props, e) || oe(this.state, t);
        });
    var ae = a.__b;
    a.__b = function (e) {
        e.type &&
            e.type.__f &&
            e.ref &&
            ((e.props.ref = e.ref), (e.ref = null)),
            ae && ae(e);
    };
    var se = a.__e;
    a.__e = function (e, t, n, r) {
        if (e.then)
            for (var o, i = t; (i = i.__); )
                if ((o = i.__c) && o.__c)
                    return (
                        null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                        o.__c(e, t)
                    );
        se(e, t, n, r);
    };
    var le = a.unmount;
    function ue(e, t, n) {
        return (
            e &&
                (e.__c &&
                    e.__c.__H &&
                    (e.__c.__H.__.forEach(function (e) {
                        "function" == typeof e.__c && e.__c();
                    }),
                    (e.__c.__H = null)),
                null !=
                    (e = (function (e, t) {
                        for (var n in t) e[n] = t[n];
                        return e;
                    })({}, e)).__c &&
                    (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
                (e.__k =
                    e.__k &&
                    e.__k.map(function (e) {
                        return ue(e, t, n);
                    }))),
            e
        );
    }
    function ce(e, t, n) {
        return (
            e &&
                ((e.__v = null),
                (e.__k =
                    e.__k &&
                    e.__k.map(function (e) {
                        return ce(e, t, n);
                    })),
                e.__c &&
                    e.__c.__P === t &&
                    (e.__e && n.insertBefore(e.__e, e.__d),
                    (e.__c.__e = !0),
                    (e.__c.__P = n))),
            e
        );
    }
    function de() {
        (this.__u = 0), (this.t = null), (this.__b = null);
    }
    function pe(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e);
    }
    function fe() {
        (this.u = null), (this.o = null);
    }
    (a.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(),
            t && !0 === e.__h && (e.type = null),
            le && le(e);
    }),
        ((de.prototype = new x()).__c = function (e, t) {
            var n = t.__c,
                r = this;
            null == r.t && (r.t = []), r.t.push(n);
            var o = pe(r.__v),
                i = !1,
                a = function () {
                    i || ((i = !0), (n.__R = null), o ? o(s) : s());
                };
            n.__R = a;
            var s = function () {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var e = r.state.__a;
                            r.__v.__k[0] = ce(e, e.__c.__P, e.__c.__O);
                        }
                        var t;
                        for (
                            r.setState({ __a: (r.__b = null) });
                            (t = r.t.pop());

                        )
                            t.forceUpdate();
                    }
                },
                l = !0 === t.__h;
            r.__u++ || l || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
                e.then(a, a);
        }),
        (de.prototype.componentWillUnmount = function () {
            this.t = [];
        }),
        (de.prototype.render = function (e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div"),
                        r = this.__v.__k[0].__c;
                    this.__v.__k[0] = ue(this.__b, n, (r.__O = r.__P));
                }
                this.__b = null;
            }
            var o = t.__a && y(b, null, e.fallback);
            return (
                o && (o.__h = null), [y(b, null, t.__a ? null : e.children), o]
            );
        });
    var he = function (e, t, n) {
        if (
            (++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder &&
                ("t" !== e.props.revealOrder[0] || !e.o.size))
        )
            for (n = e.u; n; ) {
                for (; n.length > 3; ) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2];
            }
    };
    function ve(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function ge(e) {
        var t = this,
            n = e.i;
        (t.componentWillUnmount = function () {
            F(null, t.l), (t.l = null), (t.i = null);
        }),
            t.i && t.i !== n && t.componentWillUnmount(),
            e.__v
                ? (t.l ||
                      ((t.i = n),
                      (t.l = {
                          nodeType: 1,
                          parentNode: n,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), t.i.appendChild(e);
                          },
                          insertBefore: function (e, n) {
                              this.childNodes.push(e), t.i.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(
                                  this.childNodes.indexOf(e) >>> 1,
                                  1
                              ),
                                  t.i.removeChild(e);
                          },
                      })),
                  F(y(ve, { context: t.context }, e.__v), t.l))
                : t.l && t.componentWillUnmount();
    }
    ((fe.prototype = new x()).__a = function (e) {
        var t = this,
            n = pe(t.__v),
            r = t.o.get(e);
        return (
            r[0]++,
            function (o) {
                var i = function () {
                    t.props.revealOrder ? (r.push(o), he(t, e, r)) : o();
                };
                n ? n(i) : i();
            }
        );
    }),
        (fe.prototype.render = function (e) {
            (this.u = null), (this.o = new Map());
            var t = N(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
                this.o.set(t[n], (this.u = [1, 0, this.u]));
            return e.children;
        }),
        (fe.prototype.componentDidUpdate = fe.prototype.componentDidMount =
            function () {
                var e = this;
                this.o.forEach(function (t, n) {
                    he(e, n, t);
                });
            });
    var me =
            ("undefined" != typeof Symbol &&
                Symbol.for &&
                Symbol.for("react.element")) ||
            60103,
        ye =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Ee = "undefined" != typeof document,
        be = function (e) {
            return (
                "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                    ? /fil|che|rad/i
                    : /fil|che|ra/i
            ).test(e);
        };
    (x.prototype.isReactComponent = {}),
        [
            "componentWillMount",
            "componentWillReceiveProps",
            "componentWillUpdate",
        ].forEach(function (e) {
            Object.defineProperty(x.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e];
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t,
                    });
                },
            });
        });
    var Se = a.event;
    function we() {}
    function De() {
        return this.cancelBubble;
    }
    function Te() {
        return this.defaultPrevented;
    }
    a.event = function (e) {
        return (
            Se && (e = Se(e)),
            (e.persist = we),
            (e.isPropagationStopped = De),
            (e.isDefaultPrevented = Te),
            (e.nativeEvent = e)
        );
    };
    var xe = {
            configurable: !0,
            get: function () {
                return this.class;
            },
        },
        Ce = a.vnode;
    a.vnode = function (e) {
        var t = e.type,
            n = e.props,
            r = n;
        if ("string" == typeof t) {
            var o = -1 === t.indexOf("-");
            for (var i in ((r = {}), n)) {
                var a = n[i];
                (Ee && "children" === i && "noscript" === t) ||
                    ("value" === i && "defaultValue" in n && null == a) ||
                    ("defaultValue" === i && "value" in n && null == n.value
                        ? (i = "value")
                        : "download" === i && !0 === a
                        ? (a = "")
                        : /ondoubleclick/i.test(i)
                        ? (i = "ondblclick")
                        : /^onchange(textarea|input)/i.test(i + t) &&
                          !be(n.type)
                        ? (i = "oninput")
                        : /^onfocus$/i.test(i)
                        ? (i = "onfocusin")
                        : /^onblur$/i.test(i)
                        ? (i = "onfocusout")
                        : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
                        ? (i = i.toLowerCase())
                        : o && ye.test(i)
                        ? (i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
                        : null === a && (a = void 0),
                    /^oninput$/i.test(i) &&
                        ((i = i.toLowerCase()), r[i] && (i = "oninputCapture")),
                    (r[i] = a));
            }
            "select" == t &&
                r.multiple &&
                Array.isArray(r.value) &&
                (r.value = N(n.children).forEach(function (e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value);
                })),
                "select" == t &&
                    null != r.defaultValue &&
                    (r.value = N(n.children).forEach(function (e) {
                        e.props.selected = r.multiple
                            ? -1 != r.defaultValue.indexOf(e.props.value)
                            : r.defaultValue == e.props.value;
                    })),
                (e.props = r),
                n.class != n.className &&
                    ((xe.enumerable = "className" in n),
                    null != n.className && (r.class = n.className),
                    Object.defineProperty(r, "className", xe));
        }
        (e.$$typeof = me), Ce && Ce(e);
    };
    var ke = a.__r;
    a.__r = function (e) {
        ke && ke(e);
    };
    var _e = "undefined" != typeof globalThis ? globalThis : window;
    _e.FullCalendarVDom
        ? console.warn("FullCalendar VDOM already loaded")
        : (_e.FullCalendarVDom = {
              Component: x,
              createElement: y,
              render: F,
              createRef: function () {
                  return { current: null };
              },
              Fragment: b,
              createContext: function (e) {
                  var t = (function (e, t) {
                          var n = {
                              __c: (t = "__cC" + p++),
                              __: e,
                              Consumer: function (e, t) {
                                  return e.children(t);
                              },
                              Provider: function (e) {
                                  var n, r;
                                  return (
                                      this.getChildContext ||
                                          ((n = []),
                                          ((r = {})[t] = this),
                                          (this.getChildContext = function () {
                                              return r;
                                          }),
                                          (this.shouldComponentUpdate =
                                              function (e) {
                                                  this.props.value !==
                                                      e.value &&
                                                      n.some(function (e) {
                                                          (e.__e = !0), R(e);
                                                      });
                                              }),
                                          (this.sub = function (e) {
                                              n.push(e);
                                              var t = e.componentWillUnmount;
                                              e.componentWillUnmount =
                                                  function () {
                                                      n.splice(n.indexOf(e), 1),
                                                          t && t.call(e);
                                                  };
                                          })),
                                      e.children
                                  );
                              },
                          };
                          return (n.Provider.__ = n.Consumer.contextType = n);
                      })(e),
                      n = t.Provider;
                  return (
                      (t.Provider = function () {
                          var e = this,
                              t = !this.getChildContext,
                              r = n.apply(this, arguments);
                          if (t) {
                              var o = [];
                              (this.shouldComponentUpdate = function (t) {
                                  e.props.value !== t.value &&
                                      o.forEach(function (e) {
                                          (e.context = t.value),
                                              e.forceUpdate();
                                      });
                              }),
                                  (this.sub = function (e) {
                                      o.push(e);
                                      var t = e.componentWillUnmount;
                                      e.componentWillUnmount = function () {
                                          o.splice(o.indexOf(e), 1),
                                              t && t.call(e);
                                      };
                                  });
                          }
                          return r;
                      }),
                      t
                  );
              },
              createPortal: function (e, t) {
                  var n = y(ge, { __v: e, i: t });
                  return (n.containerInfo = t), n;
              },
              flushSync: function (e) {
                  e();
                  var t = a.debounceRendering,
                      n = [];
                  function r(e) {
                      n.push(e);
                  }
                  (a.debounceRendering = r),
                      F(y(Re, {}), document.createElement("div"));
                  for (; n.length; ) n.shift()();
                  a.debounceRendering = t;
              },
              unmountComponentAtNode: function (e) {
                  F(null, e);
              },
          });
    var Re = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return y("div", {});
            }),
            (t.prototype.componentDidMount = function () {
                this.setState({});
            }),
            t
        );
    })(x);
    var Me = (function () {
        function e(e, t) {
            (this.context = e), (this.internalEventSource = t);
        }
        return (
            (e.prototype.remove = function () {
                this.context.dispatch({
                    type: "REMOVE_EVENT_SOURCE",
                    sourceId: this.internalEventSource.sourceId,
                });
            }),
            (e.prototype.refetch = function () {
                this.context.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    sourceIds: [this.internalEventSource.sourceId],
                    isRefetch: !0,
                });
            }),
            Object.defineProperty(e.prototype, "id", {
                get: function () {
                    return this.internalEventSource.publicId;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "url", {
                get: function () {
                    return this.internalEventSource.meta.url;
                },
                enumerable: !1,
                configurable: !0,
            }),
            Object.defineProperty(e.prototype, "format", {
                get: function () {
                    return this.internalEventSource.meta.format;
                },
                enumerable: !1,
                configurable: !0,
            }),
            e
        );
    })();
    function Ie(e) {
        e.parentNode && e.parentNode.removeChild(e);
    }
    function Pe(e, t) {
        if (e.closest) return e.closest(t);
        if (!document.documentElement.contains(e)) return null;
        do {
            if (Ne(e, t)) return e;
            e = e.parentElement || e.parentNode;
        } while (null !== e && 1 === e.nodeType);
        return null;
    }
    function Ne(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector).call(
            e,
            t
        );
    }
    function He(e, t) {
        for (
            var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
            o < n.length;
            o += 1
        )
            for (var i = n[o].querySelectorAll(t), a = 0; a < i.length; a += 1)
                r.push(i[a]);
        return r;
    }
    var Ae = /(top|left|right|bottom|width|height)$/i;
    function Oe(e, t) {
        for (var n in t) Le(e, n, t[n]);
    }
    function Le(e, t, n) {
        null == n
            ? (e.style[t] = "")
            : "number" == typeof n && Ae.test(t)
            ? (e.style[t] = n + "px")
            : (e.style[t] = n);
    }
    function Ue(e) {
        var t, n;
        return null !==
            (n =
                null === (t = e.composedPath) || void 0 === t
                    ? void 0
                    : t.call(e)[0]) && void 0 !== n
            ? n
            : e.target;
    }
    function We(e) {
        return e.getRootNode ? e.getRootNode() : document;
    }
    var Ve = 0;
    function ze() {
        return "fc-dom-" + (Ve += 1);
    }
    function Fe(e) {
        e.preventDefault();
    }
    function Be(e, t, n, r) {
        var o = (function (e, t) {
            return function (n) {
                var r = Pe(n.target, e);
                r && t.call(r, n, r);
            };
        })(n, r);
        return (
            e.addEventListener(t, o),
            function () {
                e.removeEventListener(t, o);
            }
        );
    }
    var je = [
        "webkitTransitionEnd",
        "otransitionend",
        "oTransitionEnd",
        "msTransitionEnd",
        "transitionend",
    ];
    function Ge(e, t) {
        var n = function (r) {
            t(r),
                je.forEach(function (t) {
                    e.removeEventListener(t, n);
                });
        };
        je.forEach(function (t) {
            e.addEventListener(t, n);
        });
    }
    function qe(e) {
        return r({ onClick: e }, Ye(e));
    }
    function Ye(e) {
        return {
            tabIndex: 0,
            onKeyDown: function (t) {
                ("Enter" !== t.key && " " !== t.key) ||
                    (e(t), t.preventDefault());
            },
        };
    }
    var Ze = 0;
    function Xe() {
        return String((Ze += 1));
    }
    function Ke() {
        document.body.classList.add("fc-not-allowed");
    }
    function $e() {
        document.body.classList.remove("fc-not-allowed");
    }
    function Je(e) {
        e.classList.add("fc-unselectable"),
            e.addEventListener("selectstart", Fe);
    }
    function Qe(e) {
        e.classList.remove("fc-unselectable"),
            e.removeEventListener("selectstart", Fe);
    }
    function et(e) {
        e.addEventListener("contextmenu", Fe);
    }
    function tt(e) {
        e.removeEventListener("contextmenu", Fe);
    }
    function nt(e) {
        var t,
            n,
            r = [],
            o = [];
        for (
            "string" == typeof e
                ? (o = e.split(/\s*,\s*/))
                : "function" == typeof e
                ? (o = [e])
                : Array.isArray(e) && (o = e),
                t = 0;
            t < o.length;
            t += 1
        )
            "string" == typeof (n = o[t])
                ? r.push(
                      "-" === n.charAt(0)
                          ? { field: n.substring(1), order: -1 }
                          : { field: n, order: 1 }
                  )
                : "function" == typeof n && r.push({ func: n });
        return r;
    }
    function rt(e, t, n) {
        var r, o;
        for (r = 0; r < n.length; r += 1) if ((o = ot(e, t, n[r]))) return o;
        return 0;
    }
    function ot(e, t, n) {
        return n.func
            ? n.func(e, t)
            : it(e[n.field], t[n.field]) * (n.order || 1);
    }
    function it(e, t) {
        return e || t
            ? null == t
                ? -1
                : null == e
                ? 1
                : "string" == typeof e || "string" == typeof t
                ? String(e).localeCompare(String(t))
                : e - t
            : 0;
    }
    function at(e, t) {
        var n = String(e);
        return "000".substr(0, t - n.length) + n;
    }
    function st(e, t, n) {
        return "function" == typeof e
            ? e.apply(void 0, t)
            : "string" == typeof e
            ? t.reduce(function (e, t, n) {
                  return e.replace("$" + n, t || "");
              }, e)
            : n;
    }
    function lt(e, t) {
        return e - t;
    }
    function ut(e) {
        return e % 1 == 0;
    }
    function ct(e) {
        var t = e.querySelector(".fc-scrollgrid-shrink-frame"),
            n = e.querySelector(".fc-scrollgrid-shrink-cushion");
        if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
        if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
        return (
            e.getBoundingClientRect().width -
            t.getBoundingClientRect().width +
            n.getBoundingClientRect().width
        );
    }
    var dt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function pt(e, t) {
        var n = xt(e);
        return (n[2] += 7 * t), Ct(n);
    }
    function ft(e, t) {
        var n = xt(e);
        return (n[2] += t), Ct(n);
    }
    function ht(e, t) {
        var n = xt(e);
        return (n[6] += t), Ct(n);
    }
    function vt(e, t) {
        return gt(e, t) / 7;
    }
    function gt(e, t) {
        return (t.valueOf() - e.valueOf()) / 864e5;
    }
    function mt(e, t) {
        var n = bt(e),
            r = bt(t);
        return {
            years: 0,
            months: 0,
            days: Math.round(gt(n, r)),
            milliseconds:
                t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
        };
    }
    function yt(e, t) {
        var n = Et(e, t);
        return null !== n && n % 7 == 0 ? n / 7 : null;
    }
    function Et(e, t) {
        return _t(e) === _t(t) ? Math.round(gt(e, t)) : null;
    }
    function bt(e) {
        return Ct([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
    }
    function St(e, t, n, r) {
        var o = Ct([t, 0, 1 + wt(t, n, r)]),
            i = bt(e),
            a = Math.round(gt(o, i));
        return Math.floor(a / 7) + 1;
    }
    function wt(e, t, n) {
        var r = 7 + t - n;
        return -((7 + Ct([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
    }
    function Dt(e) {
        return [
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds(),
        ];
    }
    function Tt(e) {
        return new Date(
            e[0],
            e[1] || 0,
            null == e[2] ? 1 : e[2],
            e[3] || 0,
            e[4] || 0,
            e[5] || 0
        );
    }
    function xt(e) {
        return [
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds(),
            e.getUTCMilliseconds(),
        ];
    }
    function Ct(e) {
        return (
            1 === e.length && (e = e.concat([0])),
            new Date(Date.UTC.apply(Date, e))
        );
    }
    function kt(e) {
        return !isNaN(e.valueOf());
    }
    function _t(e) {
        return (
            1e3 * e.getUTCHours() * 60 * 60 +
            1e3 * e.getUTCMinutes() * 60 +
            1e3 * e.getUTCSeconds() +
            e.getUTCMilliseconds()
        );
    }
    function Rt(e, t, n, r) {
        return {
            instanceId: Xe(),
            defId: e,
            range: t,
            forcedStartTzo: null == n ? null : n,
            forcedEndTzo: null == r ? null : r,
        };
    }
    var Mt = Object.prototype.hasOwnProperty;
    function It(e, t) {
        var n = {};
        if (t)
            for (var r in t) {
                for (var o = [], i = e.length - 1; i >= 0; i -= 1) {
                    var a = e[i][r];
                    if ("object" == typeof a && a) o.unshift(a);
                    else if (void 0 !== a) {
                        n[r] = a;
                        break;
                    }
                }
                o.length && (n[r] = It(o));
            }
        for (i = e.length - 1; i >= 0; i -= 1) {
            var s = e[i];
            for (var l in s) l in n || (n[l] = s[l]);
        }
        return n;
    }
    function Pt(e, t) {
        var n = {};
        for (var r in e) t(e[r], r) && (n[r] = e[r]);
        return n;
    }
    function Nt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n;
    }
    function Ht(e) {
        for (var t = {}, n = 0, r = e; n < r.length; n++) {
            t[r[n]] = !0;
        }
        return t;
    }
    function At(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t;
    }
    function Ot(e, t) {
        if (e === t) return !0;
        for (var n in e) if (Mt.call(e, n) && !(n in t)) return !1;
        for (var n in t) if (Mt.call(t, n) && e[n] !== t[n]) return !1;
        return !0;
    }
    function Lt(e, t) {
        var n = [];
        for (var r in e) Mt.call(e, r) && (r in t || n.push(r));
        for (var r in t) Mt.call(t, r) && e[r] !== t[r] && n.push(r);
        return n;
    }
    function Ut(e, t, n) {
        if ((void 0 === n && (n = {}), e === t)) return !0;
        for (var r in t) if (!(r in e) || !Wt(e[r], t[r], n[r])) return !1;
        for (var r in e) if (!(r in t)) return !1;
        return !0;
    }
    function Wt(e, t, n) {
        return e === t || !0 === n || (!!n && n(e, t));
    }
    function Vt(e, t, n, r) {
        void 0 === t && (t = 0), void 0 === r && (r = 1);
        var o = [];
        null == n && (n = Object.keys(e).length);
        for (var i = t; i < n; i += r) {
            var a = e[i];
            void 0 !== a && o.push(a);
        }
        return o;
    }
    function zt(e, t, n) {
        var r = n.dateEnv,
            o = n.pluginHooks,
            i = n.options,
            a = e.defs,
            s = e.instances;
        for (var l in ((s = Pt(s, function (e) {
            return !a[e.defId].recurringDef;
        })),
        a)) {
            var u = a[l];
            if (u.recurringDef) {
                var c = u.recurringDef.duration;
                c ||
                    (c = u.allDay
                        ? i.defaultAllDayEventDuration
                        : i.defaultTimedEventDuration);
                for (
                    var d = 0, p = Ft(u, c, t, r, o.recurringTypes);
                    d < p.length;
                    d++
                ) {
                    var f = p[d],
                        h = Rt(l, { start: f, end: r.add(f, c) });
                    s[h.instanceId] = h;
                }
            }
        }
        return { defs: a, instances: s };
    }
    function Ft(e, t, n, r, o) {
        var i = o[e.recurringDef.typeId].expand(
            e.recurringDef.typeData,
            { start: r.subtract(n.start, t), end: n.end },
            r
        );
        return e.allDay && (i = i.map(bt)), i;
    }
    var Bt = ["years", "months", "days", "milliseconds"],
        jt = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
    function Gt(e, t) {
        var n;
        return "string" == typeof e
            ? (function (e) {
                  var t = jt.exec(e);
                  if (t) {
                      var n = t[1] ? -1 : 1;
                      return {
                          years: 0,
                          months: 0,
                          days: n * (t[2] ? parseInt(t[2], 10) : 0),
                          milliseconds:
                              n *
                              (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                                  (t[6] ? parseInt(t[6], 10) : 0)),
                      };
                  }
                  return null;
              })(e)
            : "object" == typeof e && e
            ? qt(e)
            : "number" == typeof e
            ? qt((((n = {})[t || "milliseconds"] = e), n))
            : null;
    }
    function qt(e) {
        var t = {
                years: e.years || e.year || 0,
                months: e.months || e.month || 0,
                days: e.days || e.day || 0,
                milliseconds:
                    60 * (e.hours || e.hour || 0) * 60 * 1e3 +
                    60 * (e.minutes || e.minute || 0) * 1e3 +
                    1e3 * (e.seconds || e.second || 0) +
                    (e.milliseconds || e.millisecond || e.ms || 0),
            },
            n = e.weeks || e.week;
        return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
    }
    function Yt(e, t) {
        return {
            years: e.years + t.years,
            months: e.months + t.months,
            days: e.days + t.days,
            milliseconds: e.milliseconds + t.milliseconds,
        };
    }
    function Zt(e, t) {
        return {
            years: e.years * t,
            months: e.months * t,
            days: e.days * t,
            milliseconds: e.milliseconds * t,
        };
    }
    function Xt(e) {
        return Kt(e) / 864e5;
    }
    function Kt(e) {
        return (
            31536e6 * e.years +
            2592e6 * e.months +
            864e5 * e.days +
            e.milliseconds
        );
    }
    function $t(e, t) {
        for (var n = null, r = 0; r < Bt.length; r += 1) {
            var o = Bt[r];
            if (t[o]) {
                var i = e[o] / t[o];
                if (!ut(i) || (null !== n && n !== i)) return null;
                n = i;
            } else if (e[o]) return null;
        }
        return n;
    }
    function Jt(e) {
        var t = e.milliseconds;
        if (t) {
            if (t % 1e3 != 0) return { unit: "millisecond", value: t };
            if (t % 6e4 != 0) return { unit: "second", value: t / 1e3 };
            if (t % 36e5 != 0) return { unit: "minute", value: t / 6e4 };
            if (t) return { unit: "hour", value: t / 36e5 };
        }
        return e.days
            ? e.specifiedWeeks && e.days % 7 == 0
                ? { unit: "week", value: e.days / 7 }
                : { unit: "day", value: e.days }
            : e.months
            ? { unit: "month", value: e.months }
            : e.years
            ? { unit: "year", value: e.years }
            : { unit: "millisecond", value: 0 };
    }
    function Qt(e, t, n) {
        void 0 === n && (n = !1);
        var r = e.toISOString();
        return (
            (r = r.replace(".000", "")),
            n && (r = r.replace("T00:00:00Z", "")),
            r.length > 10 &&
                (null == t
                    ? (r = r.replace("Z", ""))
                    : 0 !== t && (r = r.replace("Z", nn(t, !0)))),
            r
        );
    }
    function en(e) {
        return e.toISOString().replace(/T.*$/, "");
    }
    function tn(e) {
        return (
            at(e.getUTCHours(), 2) +
            ":" +
            at(e.getUTCMinutes(), 2) +
            ":" +
            at(e.getUTCSeconds(), 2)
        );
    }
    function nn(e, t) {
        void 0 === t && (t = !1);
        var n = e < 0 ? "-" : "+",
            r = Math.abs(e),
            o = Math.floor(r / 60),
            i = Math.round(r % 60);
        return t
            ? n + at(o, 2) + ":" + at(i, 2)
            : "GMT" + n + o + (i ? ":" + at(i, 2) : "");
    }
    function rn(e, t, n) {
        if (e === t) return !0;
        var r,
            o = e.length;
        if (o !== t.length) return !1;
        for (r = 0; r < o; r += 1)
            if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
        return !0;
    }
    function on(e, t, n) {
        var r, o;
        return function () {
            for (var i = [], a = 0; a < arguments.length; a++)
                i[a] = arguments[a];
            if (r) {
                if (!rn(r, i)) {
                    n && n(o);
                    var s = e.apply(this, i);
                    (t && t(s, o)) || (o = s);
                }
            } else o = e.apply(this, i);
            return (r = i), o;
        };
    }
    function an(e, t, n) {
        var r,
            o,
            i = this;
        return function (a) {
            if (r) {
                if (!Ot(r, a)) {
                    n && n(o);
                    var s = e.call(i, a);
                    (t && t(s, o)) || (o = s);
                }
            } else o = e.call(i, a);
            return (r = a), o;
        };
    }
    var sn = {
            week: 3,
            separator: 0,
            omitZeroMinute: 0,
            meridiem: 0,
            omitCommas: 0,
        },
        ln = {
            timeZoneName: 7,
            era: 6,
            year: 5,
            month: 4,
            day: 2,
            weekday: 2,
            hour: 1,
            minute: 1,
            second: 1,
        },
        un = /\s*([ap])\.?m\.?/i,
        cn = /,/g,
        dn = /\s+/g,
        pn = /\u200e/g,
        fn = /UTC|GMT/,
        hn = (function () {
            function e(e) {
                var t = {},
                    n = {},
                    r = 0;
                for (var o in e)
                    o in sn
                        ? ((n[o] = e[o]), (r = Math.max(sn[o], r)))
                        : ((t[o] = e[o]), o in ln && (r = Math.max(ln[o], r)));
                (this.standardDateProps = t),
                    (this.extendedSettings = n),
                    (this.severity = r),
                    (this.buildFormattingFunc = on(vn));
            }
            return (
                (e.prototype.format = function (e, t) {
                    return this.buildFormattingFunc(
                        this.standardDateProps,
                        this.extendedSettings,
                        t
                    )(e);
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    var o = this.standardDateProps,
                        i = this.extendedSettings,
                        a = (function (e, t, n) {
                            if (n.getMarkerYear(e) !== n.getMarkerYear(t))
                                return 5;
                            if (n.getMarkerMonth(e) !== n.getMarkerMonth(t))
                                return 4;
                            if (n.getMarkerDay(e) !== n.getMarkerDay(t))
                                return 2;
                            if (_t(e) !== _t(t)) return 1;
                            return 0;
                        })(e.marker, t.marker, n.calendarSystem);
                    if (!a) return this.format(e, n);
                    var s = a;
                    !(s > 1) ||
                        ("numeric" !== o.year && "2-digit" !== o.year) ||
                        ("numeric" !== o.month && "2-digit" !== o.month) ||
                        ("numeric" !== o.day && "2-digit" !== o.day) ||
                        (s = 1);
                    var l = this.format(e, n),
                        u = this.format(t, n);
                    if (l === u) return l;
                    var c = vn(
                            (function (e, t) {
                                var n = {};
                                for (var r in e)
                                    (!(r in ln) || ln[r] <= t) && (n[r] = e[r]);
                                return n;
                            })(o, s),
                            i,
                            n
                        ),
                        d = c(e),
                        p = c(t),
                        f = (function (e, t, n, r) {
                            var o = 0;
                            for (; o < e.length; ) {
                                var i = e.indexOf(t, o);
                                if (-1 === i) break;
                                var a = e.substr(0, i);
                                o = i + t.length;
                                for (
                                    var s = e.substr(o), l = 0;
                                    l < n.length;

                                ) {
                                    var u = n.indexOf(r, l);
                                    if (-1 === u) break;
                                    var c = n.substr(0, u);
                                    l = u + r.length;
                                    var d = n.substr(l);
                                    if (a === c && s === d)
                                        return { before: a, after: s };
                                }
                            }
                            return null;
                        })(l, d, u, p),
                        h = i.separator || r || n.defaultSeparator || "";
                    return f ? f.before + d + h + p + f.after : l + h + u;
                }),
                (e.prototype.getLargestUnit = function () {
                    switch (this.severity) {
                        case 7:
                        case 6:
                        case 5:
                            return "year";
                        case 4:
                            return "month";
                        case 3:
                            return "week";
                        case 2:
                            return "day";
                        default:
                            return "time";
                    }
                }),
                e
            );
        })();
    function vn(e, t, n) {
        var o = Object.keys(e).length;
        return 1 === o && "short" === e.timeZoneName
            ? function (e) {
                  return nn(e.timeZoneOffset);
              }
            : 0 === o && t.week
            ? function (e) {
                  return (function (e, t, n, r, o) {
                      var i = [];
                      "long" === o
                          ? i.push(n)
                          : ("short" !== o && "narrow" !== o) || i.push(t);
                      ("long" !== o && "short" !== o) || i.push(" ");
                      i.push(r.simpleNumberFormat.format(e)),
                          "rtl" === r.options.direction && i.reverse();
                      return i.join("");
                  })(
                      n.computeWeekNumber(e.marker),
                      n.weekText,
                      n.weekTextLong,
                      n.locale,
                      t.week
                  );
              }
            : (function (e, t, n) {
                  (e = r({}, e)),
                      (t = r({}, t)),
                      (function (e, t) {
                          e.timeZoneName &&
                              (e.hour || (e.hour = "2-digit"),
                              e.minute || (e.minute = "2-digit"));
                          "long" === e.timeZoneName &&
                              (e.timeZoneName = "short");
                          t.omitZeroMinute &&
                              (e.second || e.millisecond) &&
                              delete t.omitZeroMinute;
                      })(e, t),
                      (e.timeZone = "UTC");
                  var o,
                      i = new Intl.DateTimeFormat(n.locale.codes, e);
                  if (t.omitZeroMinute) {
                      var a = r({}, e);
                      delete a.minute,
                          (o = new Intl.DateTimeFormat(n.locale.codes, a));
                  }
                  return function (r) {
                      var a = r.marker;
                      return (function (e, t, n, r, o) {
                          (e = e.replace(pn, "")),
                              "short" === n.timeZoneName &&
                                  (e = (function (e, t) {
                                      var n = !1;
                                      (e = e.replace(fn, function () {
                                          return (n = !0), t;
                                      })),
                                          n || (e += " " + t);
                                      return e;
                                  })(
                                      e,
                                      "UTC" === o.timeZone ||
                                          null == t.timeZoneOffset
                                          ? "UTC"
                                          : nn(t.timeZoneOffset)
                                  ));
                          r.omitCommas && (e = e.replace(cn, "").trim());
                          r.omitZeroMinute && (e = e.replace(":00", ""));
                          !1 === r.meridiem
                              ? (e = e.replace(un, "").trim())
                              : "narrow" === r.meridiem
                              ? (e = e.replace(un, function (e, t) {
                                    return t.toLocaleLowerCase();
                                }))
                              : "short" === r.meridiem
                              ? (e = e.replace(un, function (e, t) {
                                    return t.toLocaleLowerCase() + "m";
                                }))
                              : "lowercase" === r.meridiem &&
                                (e = e.replace(un, function (e) {
                                    return e.toLocaleLowerCase();
                                }));
                          return (e = e.replace(dn, " ")), (e = e.trim()), e;
                      })(
                          (o && !a.getUTCMinutes() ? o : i).format(a),
                          r,
                          e,
                          t,
                          n
                      );
                  };
              })(e, t, n);
    }
    function gn(e, t) {
        var n = t.markerToArray(e.marker);
        return {
            marker: e.marker,
            timeZoneOffset: e.timeZoneOffset,
            array: n,
            year: n[0],
            month: n[1],
            day: n[2],
            hour: n[3],
            minute: n[4],
            second: n[5],
            millisecond: n[6],
        };
    }
    function mn(e, t, n, r) {
        var o = gn(e, n.calendarSystem);
        return {
            date: o,
            start: o,
            end: t ? gn(t, n.calendarSystem) : null,
            timeZone: n.timeZone,
            localeCodes: n.locale.codes,
            defaultSeparator: r || n.defaultSeparator,
        };
    }
    var yn = (function () {
            function e(e) {
                this.cmdStr = e;
            }
            return (
                (e.prototype.format = function (e, t, n) {
                    return t.cmdFormatter(this.cmdStr, mn(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return n.cmdFormatter(this.cmdStr, mn(e, t, n, r));
                }),
                e
            );
        })(),
        En = (function () {
            function e(e) {
                this.func = e;
            }
            return (
                (e.prototype.format = function (e, t, n) {
                    return this.func(mn(e, null, t, n));
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return this.func(mn(e, t, n, r));
                }),
                e
            );
        })();
    function bn(e) {
        return "object" == typeof e && e
            ? new hn(e)
            : "string" == typeof e
            ? new yn(e)
            : "function" == typeof e
            ? new En(e)
            : null;
    }
    var Sn = {
            navLinkDayClick: Mn,
            navLinkWeekClick: Mn,
            duration: Gt,
            bootstrapFontAwesome: Mn,
            buttonIcons: Mn,
            customButtons: Mn,
            defaultAllDayEventDuration: Gt,
            defaultTimedEventDuration: Gt,
            nextDayThreshold: Gt,
            scrollTime: Gt,
            scrollTimeReset: Boolean,
            slotMinTime: Gt,
            slotMaxTime: Gt,
            dayPopoverFormat: bn,
            slotDuration: Gt,
            snapDuration: Gt,
            headerToolbar: Mn,
            footerToolbar: Mn,
            defaultRangeSeparator: String,
            titleRangeSeparator: String,
            forceEventDuration: Boolean,
            dayHeaders: Boolean,
            dayHeaderFormat: bn,
            dayHeaderClassNames: Mn,
            dayHeaderContent: Mn,
            dayHeaderDidMount: Mn,
            dayHeaderWillUnmount: Mn,
            dayCellClassNames: Mn,
            dayCellContent: Mn,
            dayCellDidMount: Mn,
            dayCellWillUnmount: Mn,
            initialView: String,
            aspectRatio: Number,
            weekends: Boolean,
            weekNumberCalculation: Mn,
            weekNumbers: Boolean,
            weekNumberClassNames: Mn,
            weekNumberContent: Mn,
            weekNumberDidMount: Mn,
            weekNumberWillUnmount: Mn,
            editable: Boolean,
            viewClassNames: Mn,
            viewDidMount: Mn,
            viewWillUnmount: Mn,
            nowIndicator: Boolean,
            nowIndicatorClassNames: Mn,
            nowIndicatorContent: Mn,
            nowIndicatorDidMount: Mn,
            nowIndicatorWillUnmount: Mn,
            showNonCurrentDates: Boolean,
            lazyFetching: Boolean,
            startParam: String,
            endParam: String,
            timeZoneParam: String,
            timeZone: String,
            locales: Mn,
            locale: Mn,
            themeSystem: String,
            dragRevertDuration: Number,
            dragScroll: Boolean,
            allDayMaintainDuration: Boolean,
            unselectAuto: Boolean,
            dropAccept: Mn,
            eventOrder: nt,
            eventOrderStrict: Boolean,
            handleWindowResize: Boolean,
            windowResizeDelay: Number,
            longPressDelay: Number,
            eventDragMinDistance: Number,
            expandRows: Boolean,
            height: Mn,
            contentHeight: Mn,
            direction: String,
            weekNumberFormat: bn,
            eventResizableFromStart: Boolean,
            displayEventTime: Boolean,
            displayEventEnd: Boolean,
            weekText: String,
            weekTextLong: String,
            progressiveEventRendering: Boolean,
            businessHours: Mn,
            initialDate: Mn,
            now: Mn,
            eventDataTransform: Mn,
            stickyHeaderDates: Mn,
            stickyFooterScrollbar: Mn,
            viewHeight: Mn,
            defaultAllDay: Boolean,
            eventSourceFailure: Mn,
            eventSourceSuccess: Mn,
            eventDisplay: String,
            eventStartEditable: Boolean,
            eventDurationEditable: Boolean,
            eventOverlap: Mn,
            eventConstraint: Mn,
            eventAllow: Mn,
            eventBackgroundColor: String,
            eventBorderColor: String,
            eventTextColor: String,
            eventColor: String,
            eventClassNames: Mn,
            eventContent: Mn,
            eventDidMount: Mn,
            eventWillUnmount: Mn,
            selectConstraint: Mn,
            selectOverlap: Mn,
            selectAllow: Mn,
            droppable: Boolean,
            unselectCancel: String,
            slotLabelFormat: Mn,
            slotLaneClassNames: Mn,
            slotLaneContent: Mn,
            slotLaneDidMount: Mn,
            slotLaneWillUnmount: Mn,
            slotLabelClassNames: Mn,
            slotLabelContent: Mn,
            slotLabelDidMount: Mn,
            slotLabelWillUnmount: Mn,
            dayMaxEvents: Mn,
            dayMaxEventRows: Mn,
            dayMinWidth: Number,
            slotLabelInterval: Gt,
            allDayText: String,
            allDayClassNames: Mn,
            allDayContent: Mn,
            allDayDidMount: Mn,
            allDayWillUnmount: Mn,
            slotMinWidth: Number,
            navLinks: Boolean,
            eventTimeFormat: bn,
            rerenderDelay: Number,
            moreLinkText: Mn,
            moreLinkHint: Mn,
            selectMinDistance: Number,
            selectable: Boolean,
            selectLongPressDelay: Number,
            eventLongPressDelay: Number,
            selectMirror: Boolean,
            eventMaxStack: Number,
            eventMinHeight: Number,
            eventMinWidth: Number,
            eventShortHeight: Number,
            slotEventOverlap: Boolean,
            plugins: Mn,
            firstDay: Number,
            dayCount: Number,
            dateAlignment: String,
            dateIncrement: Gt,
            hiddenDays: Mn,
            monthMode: Boolean,
            fixedWeekCount: Boolean,
            validRange: Mn,
            visibleRange: Mn,
            titleFormat: Mn,
            eventInteractive: Boolean,
            noEventsText: String,
            viewHint: Mn,
            navLinkHint: Mn,
            closeHint: String,
            timeHint: String,
            eventHint: String,
            moreLinkClick: Mn,
            moreLinkClassNames: Mn,
            moreLinkContent: Mn,
            moreLinkDidMount: Mn,
            moreLinkWillUnmount: Mn,
        },
        wn = {
            eventDisplay: "auto",
            defaultRangeSeparator: " - ",
            titleRangeSeparator: " â€“ ",
            defaultTimedEventDuration: "01:00:00",
            defaultAllDayEventDuration: { day: 1 },
            forceEventDuration: !1,
            nextDayThreshold: "00:00:00",
            dayHeaders: !0,
            initialView: "",
            aspectRatio: 1.35,
            headerToolbar: {
                start: "title",
                center: "",
                end: "today prev,next",
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "local",
            editable: !1,
            nowIndicator: !1,
            scrollTime: "06:00:00",
            scrollTimeReset: !0,
            slotMinTime: "00:00:00",
            slotMaxTime: "24:00:00",
            showNonCurrentDates: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            timeZoneParam: "timeZone",
            timeZone: "local",
            locales: [],
            locale: "",
            themeSystem: "standard",
            dragRevertDuration: 500,
            dragScroll: !0,
            allDayMaintainDuration: !1,
            unselectAuto: !0,
            dropAccept: "*",
            eventOrder: "start,-duration,allDay,title",
            dayPopoverFormat: {
                month: "long",
                day: "numeric",
                year: "numeric",
            },
            handleWindowResize: !0,
            windowResizeDelay: 100,
            longPressDelay: 1e3,
            eventDragMinDistance: 5,
            expandRows: !1,
            navLinks: !1,
            selectable: !1,
            eventMinHeight: 15,
            eventMinWidth: 30,
            eventShortHeight: 30,
        },
        Dn = {
            datesSet: Mn,
            eventsSet: Mn,
            eventAdd: Mn,
            eventChange: Mn,
            eventRemove: Mn,
            windowResize: Mn,
            eventClick: Mn,
            eventMouseEnter: Mn,
            eventMouseLeave: Mn,
            select: Mn,
            unselect: Mn,
            loading: Mn,
            _unmount: Mn,
            _beforeprint: Mn,
            _afterprint: Mn,
            _noEventDrop: Mn,
            _noEventResize: Mn,
            _resize: Mn,
            _scrollRequest: Mn,
        },
        Tn = {
            buttonText: Mn,
            buttonHints: Mn,
            views: Mn,
            plugins: Mn,
            initialEvents: Mn,
            events: Mn,
            eventSources: Mn,
        },
        xn = {
            headerToolbar: Cn,
            footerToolbar: Cn,
            buttonText: Cn,
            buttonHints: Cn,
            buttonIcons: Cn,
            dateIncrement: Cn,
        };
    function Cn(e, t) {
        return "object" == typeof e && "object" == typeof t && e && t
            ? Ot(e, t)
            : e === t;
    }
    var kn = {
        type: String,
        component: Mn,
        buttonText: String,
        buttonTextKey: String,
        dateProfileGeneratorClass: Mn,
        usesMinMaxTime: Boolean,
        classNames: Mn,
        content: Mn,
        didMount: Mn,
        willUnmount: Mn,
    };
    function _n(e) {
        return It(e, xn);
    }
    function Rn(e, t) {
        var n = {},
            r = {};
        for (var o in t) o in e && (n[o] = t[o](e[o]));
        for (var o in e) o in t || (r[o] = e[o]);
        return { refined: n, extra: r };
    }
    function Mn(e) {
        return e;
    }
    function In(e, t, n, r) {
        for (
            var o = { defs: {}, instances: {} }, i = Zn(n), a = 0, s = e;
            a < s.length;
            a++
        ) {
            var l = qn(s[a], t, n, r, i);
            l && Pn(l, o);
        }
        return o;
    }
    function Pn(e, t) {
        return (
            void 0 === t && (t = { defs: {}, instances: {} }),
            (t.defs[e.def.defId] = e.def),
            e.instance && (t.instances[e.instance.instanceId] = e.instance),
            t
        );
    }
    function Nn(e, t) {
        var n = e.instances[t];
        if (n) {
            var r = e.defs[n.defId],
                o = On(e, function (e) {
                    return (
                        (t = r),
                        (n = e),
                        Boolean(t.groupId && t.groupId === n.groupId)
                    );
                    var t, n;
                });
            return (o.defs[r.defId] = r), (o.instances[n.instanceId] = n), o;
        }
        return { defs: {}, instances: {} };
    }
    function Hn() {
        return { defs: {}, instances: {} };
    }
    function An(e, t) {
        return {
            defs: r(r({}, e.defs), t.defs),
            instances: r(r({}, e.instances), t.instances),
        };
    }
    function On(e, t) {
        var n = Pt(e.defs, t),
            r = Pt(e.instances, function (e) {
                return n[e.defId];
            });
        return { defs: n, instances: r };
    }
    function Ln(e) {
        return Array.isArray(e)
            ? e
            : "string" == typeof e
            ? e.split(/\s+/)
            : [];
    }
    var Un = {
            display: String,
            editable: Boolean,
            startEditable: Boolean,
            durationEditable: Boolean,
            constraint: Mn,
            overlap: Mn,
            allow: Mn,
            className: Ln,
            classNames: Ln,
            color: String,
            backgroundColor: String,
            borderColor: String,
            textColor: String,
        },
        Wn = {
            display: null,
            startEditable: null,
            durationEditable: null,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: [],
        };
    function Vn(e, t) {
        var n = (function (e, t) {
            return Array.isArray(e)
                ? In(e, null, t, !0)
                : "object" == typeof e && e
                ? In([e], null, t, !0)
                : null != e
                ? String(e)
                : null;
        })(e.constraint, t);
        return {
            display: e.display || null,
            startEditable:
                null != e.startEditable ? e.startEditable : e.editable,
            durationEditable:
                null != e.durationEditable ? e.durationEditable : e.editable,
            constraints: null != n ? [n] : [],
            overlap: null != e.overlap ? e.overlap : null,
            allows: null != e.allow ? [e.allow] : [],
            backgroundColor: e.backgroundColor || e.color || "",
            borderColor: e.borderColor || e.color || "",
            textColor: e.textColor || "",
            classNames: (e.className || []).concat(e.classNames || []),
        };
    }
    function zn(e) {
        return e.reduce(Fn, Wn);
    }
    function Fn(e, t) {
        return {
            display: null != t.display ? t.display : e.display,
            startEditable:
                null != t.startEditable ? t.startEditable : e.startEditable,
            durationEditable:
                null != t.durationEditable
                    ? t.durationEditable
                    : e.durationEditable,
            constraints: e.constraints.concat(t.constraints),
            overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
            allows: e.allows.concat(t.allows),
            backgroundColor: t.backgroundColor || e.backgroundColor,
            borderColor: t.borderColor || e.borderColor,
            textColor: t.textColor || e.textColor,
            classNames: e.classNames.concat(t.classNames),
        };
    }
    var Bn = {
            id: String,
            groupId: String,
            title: String,
            url: String,
            interactive: Boolean,
        },
        jn = { start: Mn, end: Mn, date: Mn, allDay: Boolean },
        Gn = r(r(r({}, Bn), jn), { extendedProps: Mn });
    function qn(e, t, n, r, o) {
        void 0 === o && (o = Zn(n));
        var i = Yn(e, n, o),
            a = i.refined,
            s = i.extra,
            l = (function (e, t) {
                var n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n;
            })(t, n),
            u = (function (e, t, n, r) {
                for (var o = 0; o < r.length; o += 1) {
                    var i = r[o].parse(e, n);
                    if (i) {
                        var a = e.allDay;
                        return (
                            null == a &&
                                null == (a = t) &&
                                null == (a = i.allDayGuess) &&
                                (a = !1),
                            {
                                allDay: a,
                                duration: i.duration,
                                typeData: i.typeData,
                                typeId: o,
                            }
                        );
                    }
                }
                return null;
            })(a, l, n.dateEnv, n.pluginHooks.recurringTypes);
        if (u)
            return (
                ((c = Xn(
                    a,
                    s,
                    t ? t.sourceId : "",
                    u.allDay,
                    Boolean(u.duration),
                    n
                )).recurringDef = {
                    typeId: u.typeId,
                    typeData: u.typeData,
                    duration: u.duration,
                }),
                { def: c, instance: null }
            );
        var c,
            d = (function (e, t, n, r) {
                var o,
                    i,
                    a = e.allDay,
                    s = null,
                    l = !1,
                    u = null,
                    c = null != e.start ? e.start : e.date;
                if (((o = n.dateEnv.createMarkerMeta(c)), o)) s = o.marker;
                else if (!r) return null;
                null != e.end && (i = n.dateEnv.createMarkerMeta(e.end));
                null == a &&
                    (a =
                        null != t
                            ? t
                            : (!o || o.isTimeUnspecified) &&
                              (!i || i.isTimeUnspecified));
                a && s && (s = bt(s));
                i &&
                    ((u = i.marker),
                    a && (u = bt(u)),
                    s && u <= s && (u = null));
                u
                    ? (l = !0)
                    : r ||
                      ((l = n.options.forceEventDuration || !1),
                      (u = n.dateEnv.add(
                          s,
                          a
                              ? n.options.defaultAllDayEventDuration
                              : n.options.defaultTimedEventDuration
                      )));
                return {
                    allDay: a,
                    hasEnd: l,
                    range: { start: s, end: u },
                    forcedStartTzo: o ? o.forcedTzo : null,
                    forcedEndTzo: i ? i.forcedTzo : null,
                };
            })(a, l, n, r);
        return d
            ? {
                  def: (c = Xn(
                      a,
                      s,
                      t ? t.sourceId : "",
                      d.allDay,
                      d.hasEnd,
                      n
                  )),
                  instance: Rt(
                      c.defId,
                      d.range,
                      d.forcedStartTzo,
                      d.forcedEndTzo
                  ),
              }
            : null;
    }
    function Yn(e, t, n) {
        return void 0 === n && (n = Zn(t)), Rn(e, n);
    }
    function Zn(e) {
        return r(r(r({}, Un), Gn), e.pluginHooks.eventRefiners);
    }
    function Xn(e, t, n, o, i, a) {
        for (
            var s = {
                    title: e.title || "",
                    groupId: e.groupId || "",
                    publicId: e.id || "",
                    url: e.url || "",
                    recurringDef: null,
                    defId: Xe(),
                    sourceId: n,
                    allDay: o,
                    hasEnd: i,
                    interactive: e.interactive,
                    ui: Vn(e, a),
                    extendedProps: r(r({}, e.extendedProps || {}), t),
                },
                l = 0,
                u = a.pluginHooks.eventDefMemberAdders;
            l < u.length;
            l++
        ) {
            var c = u[l];
            r(s, c(e));
        }
        return (
            Object.freeze(s.ui.classNames), Object.freeze(s.extendedProps), s
        );
    }
    function Kn(e) {
        var t = Math.floor(gt(e.start, e.end)) || 1,
            n = bt(e.start);
        return { start: n, end: ft(n, t) };
    }
    function $n(e, t) {
        void 0 === t && (t = Gt(0));
        var n = null,
            r = null;
        if (e.end) {
            r = bt(e.end);
            var o = e.end.valueOf() - r.valueOf();
            o && o >= Kt(t) && (r = ft(r, 1));
        }
        return (
            e.start && ((n = bt(e.start)), r && r <= n && (r = ft(n, 1))),
            { start: n, end: r }
        );
    }
    function Jn(e) {
        var t = $n(e);
        return gt(t.start, t.end) > 1;
    }
    function Qn(e, t, n, r) {
        return "year" === r
            ? Gt(n.diffWholeYears(e, t), "year")
            : "month" === r
            ? Gt(n.diffWholeMonths(e, t), "month")
            : mt(e, t);
    }
    function er(e, t) {
        var n,
            r,
            o = [],
            i = t.start;
        for (e.sort(tr), n = 0; n < e.length; n += 1)
            (r = e[n]).start > i && o.push({ start: i, end: r.start }),
                r.end > i && (i = r.end);
        return i < t.end && o.push({ start: i, end: t.end }), o;
    }
    function tr(e, t) {
        return e.start.valueOf() - t.start.valueOf();
    }
    function nr(e, t) {
        var n = e.start,
            r = e.end,
            o = null;
        return (
            null !== t.start &&
                (n =
                    null === n
                        ? t.start
                        : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
            null != t.end &&
                (r =
                    null === r
                        ? t.end
                        : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
            (null === n || null === r || n < r) && (o = { start: n, end: r }),
            o
        );
    }
    function rr(e, t) {
        return (
            (null === e.start ? null : e.start.valueOf()) ===
                (null === t.start ? null : t.start.valueOf()) &&
            (null === e.end ? null : e.end.valueOf()) ===
                (null === t.end ? null : t.end.valueOf())
        );
    }
    function or(e, t) {
        return (
            (null === e.end || null === t.start || e.end > t.start) &&
            (null === e.start || null === t.end || e.start < t.end)
        );
    }
    function ir(e, t) {
        return (
            (null === e.start || (null !== t.start && t.start >= e.start)) &&
            (null === e.end || (null !== t.end && t.end <= e.end))
        );
    }
    function ar(e, t) {
        return (
            (null === e.start || t >= e.start) && (null === e.end || t < e.end)
        );
    }
    function sr(e, t, n, r) {
        var o = {},
            i = {},
            a = {},
            s = [],
            l = [],
            u = dr(e.defs, t);
        for (var c in e.defs) {
            "inverse-background" === (f = u[(b = e.defs[c]).defId]).display &&
                (b.groupId
                    ? ((o[b.groupId] = []), a[b.groupId] || (a[b.groupId] = b))
                    : (i[c] = []));
        }
        for (var d in e.instances) {
            var p = e.instances[d],
                f = u[(b = e.defs[p.defId]).defId],
                h = p.range,
                v = !b.allDay && r ? $n(h, r) : h,
                g = nr(v, n);
            g &&
                ("inverse-background" === f.display
                    ? b.groupId
                        ? o[b.groupId].push(g)
                        : i[p.defId].push(g)
                    : "none" !== f.display &&
                      ("background" === f.display ? s : l).push({
                          def: b,
                          ui: f,
                          instance: p,
                          range: g,
                          isStart:
                              v.start &&
                              v.start.valueOf() === g.start.valueOf(),
                          isEnd: v.end && v.end.valueOf() === g.end.valueOf(),
                      }));
        }
        for (var m in o)
            for (var y = 0, E = er(o[m], n); y < E.length; y++) {
                var b,
                    S = E[y];
                f = u[(b = a[m]).defId];
                s.push({
                    def: b,
                    ui: f,
                    instance: null,
                    range: S,
                    isStart: !1,
                    isEnd: !1,
                });
            }
        for (var c in i)
            for (var w = 0, D = er(i[c], n); w < D.length; w++) {
                S = D[w];
                s.push({
                    def: e.defs[c],
                    ui: u[c],
                    instance: null,
                    range: S,
                    isStart: !1,
                    isEnd: !1,
                });
            }
        return { bg: s, fg: l };
    }
    function lr(e) {
        return (
            "background" === e.ui.display ||
            "inverse-background" === e.ui.display
        );
    }
    function ur(e, t) {
        e.fcSeg = t;
    }
    function cr(e) {
        return e.fcSeg || e.parentNode.fcSeg || null;
    }
    function dr(e, t) {
        return Nt(e, function (e) {
            return pr(e, t);
        });
    }
    function pr(e, t) {
        var n = [];
        return (
            t[""] && n.push(t[""]),
            t[e.defId] && n.push(t[e.defId]),
            n.push(e.ui),
            zn(n)
        );
    }
    function fr(e, t) {
        var n = e.map(hr);
        return (
            n.sort(function (e, n) {
                return rt(e, n, t);
            }),
            n.map(function (e) {
                return e._seg;
            })
        );
    }
    function hr(e) {
        var t = e.eventRange,
            n = t.def,
            o = t.instance ? t.instance.range : t.range,
            i = o.start ? o.start.valueOf() : 0,
            a = o.end ? o.end.valueOf() : 0;
        return r(r(r({}, n.extendedProps), n), {
            id: n.publicId,
            start: i,
            end: a,
            duration: a - i,
            allDay: Number(n.allDay),
            _seg: e,
        });
    }
    function vr(e, t) {
        for (
            var n = t.pluginHooks.isDraggableTransformers,
                r = e.eventRange,
                o = r.def,
                i = r.ui,
                a = i.startEditable,
                s = 0,
                l = n;
            s < l.length;
            s++
        ) {
            a = (0, l[s])(a, o, i, t);
        }
        return a;
    }
    function gr(e, t) {
        return (
            e.isStart &&
            e.eventRange.ui.durationEditable &&
            t.options.eventResizableFromStart
        );
    }
    function mr(e, t) {
        return e.isEnd && e.eventRange.ui.durationEditable;
    }
    function yr(e, t, n, r, o, i, a) {
        var s = n.dateEnv,
            l = n.options,
            u = l.displayEventTime,
            c = l.displayEventEnd,
            d = e.eventRange.def,
            p = e.eventRange.instance;
        null == u && (u = !1 !== r), null == c && (c = !1 !== o);
        var f = p.range.start,
            h = p.range.end,
            v = i || e.start || e.eventRange.range.start,
            g = a || e.end || e.eventRange.range.end,
            m = bt(f).valueOf() === bt(v).valueOf(),
            y = bt(ht(h, -1)).valueOf() === bt(ht(g, -1)).valueOf();
        return u && !d.allDay && (m || y)
            ? ((v = m ? f : v),
              (g = y ? h : g),
              c && d.hasEnd
                  ? s.formatRange(v, g, t, {
                        forcedStartTzo: i ? null : p.forcedStartTzo,
                        forcedEndTzo: a ? null : p.forcedEndTzo,
                    })
                  : s.format(v, t, { forcedTzo: i ? null : p.forcedStartTzo }))
            : "";
    }
    function Er(e, t, n) {
        var r = e.eventRange.range;
        return {
            isPast: r.end < (n || t.start),
            isFuture: r.start >= (n || t.end),
            isToday: t && ar(t, r.start),
        };
    }
    function br(e) {
        var t = ["fc-event"];
        return (
            e.isMirror && t.push("fc-event-mirror"),
            e.isDraggable && t.push("fc-event-draggable"),
            (e.isStartResizable || e.isEndResizable) &&
                t.push("fc-event-resizable"),
            e.isDragging && t.push("fc-event-dragging"),
            e.isResizing && t.push("fc-event-resizing"),
            e.isSelected && t.push("fc-event-selected"),
            e.isStart && t.push("fc-event-start"),
            e.isEnd && t.push("fc-event-end"),
            e.isPast && t.push("fc-event-past"),
            e.isToday && t.push("fc-event-today"),
            e.isFuture && t.push("fc-event-future"),
            t
        );
    }
    function Sr(e) {
        return e.instance
            ? e.instance.instanceId
            : e.def.defId + ":" + e.range.start.toISOString();
    }
    function wr(e, t) {
        var n = e.eventRange,
            r = n.def,
            o = n.instance,
            i = r.url;
        if (i) return { href: i };
        var a = t.emitter,
            s = t.options.eventInteractive;
        return (
            null == s &&
                null == (s = r.interactive) &&
                (s = Boolean(a.hasHandlers("eventClick"))),
            s
                ? Ye(function (e) {
                      a.trigger("eventClick", {
                          el: e.target,
                          event: new Vr(t, r, o),
                          jsEvent: e,
                          view: t.viewApi,
                      });
                  })
                : {}
        );
    }
    var Dr = { start: Mn, end: Mn, allDay: Boolean };
    function Tr(e, t, n) {
        var o = (function (e, t) {
                var n = Rn(e, Dr),
                    o = n.refined,
                    i = n.extra,
                    a = o.start ? t.createMarkerMeta(o.start) : null,
                    s = o.end ? t.createMarkerMeta(o.end) : null,
                    l = o.allDay;
                null == l &&
                    (l =
                        a &&
                        a.isTimeUnspecified &&
                        (!s || s.isTimeUnspecified));
                return r(
                    {
                        range: {
                            start: a ? a.marker : null,
                            end: s ? s.marker : null,
                        },
                        allDay: l,
                    },
                    i
                );
            })(e, t),
            i = o.range;
        if (!i.start) return null;
        if (!i.end) {
            if (null == n) return null;
            i.end = t.add(i.start, n);
        }
        return o;
    }
    function xr(e, t) {
        return (
            rr(e.range, t.range) &&
            e.allDay === t.allDay &&
            (function (e, t) {
                for (var n in t)
                    if ("range" !== n && "allDay" !== n && e[n] !== t[n])
                        return !1;
                for (var n in e) if (!(n in t)) return !1;
                return !0;
            })(e, t)
        );
    }
    function Cr(e, t, n) {
        return r(r({}, kr(e, t, n)), { timeZone: t.timeZone });
    }
    function kr(e, t, n) {
        return {
            start: t.toDate(e.start),
            end: t.toDate(e.end),
            startStr: t.formatIso(e.start, { omitTime: n }),
            endStr: t.formatIso(e.end, { omitTime: n }),
        };
    }
    function _r(e, t, n) {
        n.emitter.trigger(
            "select",
            r(r({}, Rr(e, n)), {
                jsEvent: t ? t.origEvent : null,
                view: n.viewApi || n.calendarApi.view,
            })
        );
    }
    function Rr(e, t) {
        for (
            var n, o, i = {}, a = 0, s = t.pluginHooks.dateSpanTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t));
        }
        return (
            r(
                i,
                ((n = e),
                (o = t.dateEnv),
                r(r({}, kr(n.range, o, n.allDay)), { allDay: n.allDay }))
            ),
            i
        );
    }
    function Mr(e, t, n) {
        var r = n.dateEnv,
            o = n.options,
            i = t;
        return (
            e
                ? ((i = bt(i)), (i = r.add(i, o.defaultAllDayEventDuration)))
                : (i = r.add(i, o.defaultTimedEventDuration)),
            i
        );
    }
    function Ir(e, t, n, r) {
        var o = dr(e.defs, t),
            i = { defs: {}, instances: {} };
        for (var a in e.defs) {
            var s = e.defs[a];
            i.defs[a] = Pr(s, o[a], n, r);
        }
        for (var l in e.instances) {
            var u = e.instances[l];
            s = i.defs[u.defId];
            i.instances[l] = Nr(u, s, o[u.defId], n, r);
        }
        return i;
    }
    function Pr(e, t, n, o) {
        var i = n.standardProps || {};
        null == i.hasEnd &&
            t.durationEditable &&
            (n.startDelta || n.endDelta) &&
            (i.hasEnd = !0);
        var a = r(r(r({}, e), i), { ui: r(r({}, e.ui), i.ui) });
        n.extendedProps &&
            (a.extendedProps = r(r({}, a.extendedProps), n.extendedProps));
        for (
            var s = 0, l = o.pluginHooks.eventDefMutationAppliers;
            s < l.length;
            s++
        ) {
            (0, l[s])(a, n, o);
        }
        return !a.hasEnd && o.options.forceEventDuration && (a.hasEnd = !0), a;
    }
    function Nr(e, t, n, o, i) {
        var a = i.dateEnv,
            s = o.standardProps && !0 === o.standardProps.allDay,
            l = o.standardProps && !1 === o.standardProps.hasEnd,
            u = r({}, e);
        return (
            s && (u.range = Kn(u.range)),
            o.datesDelta &&
                n.startEditable &&
                (u.range = {
                    start: a.add(u.range.start, o.datesDelta),
                    end: a.add(u.range.end, o.datesDelta),
                }),
            o.startDelta &&
                n.durationEditable &&
                (u.range = {
                    start: a.add(u.range.start, o.startDelta),
                    end: u.range.end,
                }),
            o.endDelta &&
                n.durationEditable &&
                (u.range = {
                    start: u.range.start,
                    end: a.add(u.range.end, o.endDelta),
                }),
            l &&
                (u.range = {
                    start: u.range.start,
                    end: Mr(t.allDay, u.range.start, i),
                }),
            t.allDay &&
                (u.range = { start: bt(u.range.start), end: bt(u.range.end) }),
            u.range.end < u.range.start &&
                (u.range.end = Mr(t.allDay, u.range.start, i)),
            u
        );
    }
    var Hr = (function () {
            function e(e, t, n) {
                (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
            }
            return (
                Object.defineProperty(e.prototype, "calendar", {
                    get: function () {
                        return this.getCurrentData().calendarApi;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                    get: function () {
                        return this.getCurrentData().viewTitle;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeStart", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.activeRange.start
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "activeEnd", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.activeRange.end
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentStart", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.currentRange.start
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "currentEnd", {
                    get: function () {
                        return this.dateEnv.toDate(
                            this.getCurrentData().dateProfile.currentRange.end
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.getOption = function (e) {
                    return this.getCurrentData().options[e];
                }),
                e
            );
        })(),
        Ar = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            format: String,
            events: Mn,
            eventDataTransform: Mn,
            success: Mn,
            failure: Mn,
        };
    function Or(e, t, n) {
        var r;
        if (
            (void 0 === n && (n = Lr(t)),
            "string" == typeof e
                ? (r = { url: e })
                : "function" == typeof e || Array.isArray(e)
                ? (r = { events: e })
                : "object" == typeof e && e && (r = e),
            r)
        ) {
            var o = Rn(r, n),
                i = o.refined,
                a = o.extra,
                s = (function (e, t) {
                    for (
                        var n = t.pluginHooks.eventSourceDefs, r = n.length - 1;
                        r >= 0;
                        r -= 1
                    ) {
                        var o = n[r].parseMeta(e);
                        if (o) return { sourceDefId: r, meta: o };
                    }
                    return null;
                })(i, t);
            if (s)
                return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: i.defaultAllDay,
                    eventDataTransform: i.eventDataTransform,
                    success: i.success,
                    failure: i.failure,
                    publicId: i.id || "",
                    sourceId: Xe(),
                    sourceDefId: s.sourceDefId,
                    meta: s.meta,
                    ui: Vn(i, t),
                    extendedProps: a,
                };
        }
        return null;
    }
    function Lr(e) {
        return r(r(r({}, Un), Ar), e.pluginHooks.eventSourceRefiners);
    }
    function Ur(e, t) {
        return (
            "function" == typeof e && (e = e()),
            null == e ? t.createNowMarker() : t.createMarker(e)
        );
    }
    var Wr = (function () {
            function e() {}
            return (
                (e.prototype.getCurrentData = function () {
                    return this.currentDataManager.getCurrentData();
                }),
                (e.prototype.dispatch = function (e) {
                    return this.currentDataManager.dispatch(e);
                }),
                Object.defineProperty(e.prototype, "view", {
                    get: function () {
                        return this.getCurrentData().viewApi;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.batchRendering = function (e) {
                    e();
                }),
                (e.prototype.updateSize = function () {
                    this.trigger("_resize", !0);
                }),
                (e.prototype.setOption = function (e, t) {
                    this.dispatch({
                        type: "SET_OPTION",
                        optionName: e,
                        rawOptionValue: t,
                    });
                }),
                (e.prototype.getOption = function (e) {
                    return this.currentDataManager.currentCalendarOptionsInput[
                        e
                    ];
                }),
                (e.prototype.getAvailableLocaleCodes = function () {
                    return Object.keys(
                        this.getCurrentData().availableRawLocales
                    );
                }),
                (e.prototype.on = function (e, t) {
                    var n = this.currentDataManager;
                    n.currentCalendarOptionsRefiners[e]
                        ? n.emitter.on(e, t)
                        : console.warn("Unknown listener name '" + e + "'");
                }),
                (e.prototype.off = function (e, t) {
                    this.currentDataManager.emitter.off(e, t);
                }),
                (e.prototype.trigger = function (e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++)
                        n[r - 1] = arguments[r];
                    (t = this.currentDataManager.emitter).trigger.apply(
                        t,
                        o([e], n)
                    );
                }),
                (e.prototype.changeView = function (e, t) {
                    var n = this;
                    this.batchRendering(function () {
                        if ((n.unselect(), t))
                            if (t.start && t.end)
                                n.dispatch({
                                    type: "CHANGE_VIEW_TYPE",
                                    viewType: e,
                                }),
                                    n.dispatch({
                                        type: "SET_OPTION",
                                        optionName: "visibleRange",
                                        rawOptionValue: t,
                                    });
                            else {
                                var r = n.getCurrentData().dateEnv;
                                n.dispatch({
                                    type: "CHANGE_VIEW_TYPE",
                                    viewType: e,
                                    dateMarker: r.createMarker(t),
                                });
                            }
                        else
                            n.dispatch({
                                type: "CHANGE_VIEW_TYPE",
                                viewType: e,
                            });
                    });
                }),
                (e.prototype.zoomTo = function (e, t) {
                    var n;
                    (t = t || "day"),
                        (n =
                            this.getCurrentData().viewSpecs[t] ||
                            this.getUnitViewSpec(t)),
                        this.unselect(),
                        n
                            ? this.dispatch({
                                  type: "CHANGE_VIEW_TYPE",
                                  viewType: n.type,
                                  dateMarker: e,
                              })
                            : this.dispatch({
                                  type: "CHANGE_DATE",
                                  dateMarker: e,
                              });
                }),
                (e.prototype.getUnitViewSpec = function (e) {
                    var t,
                        n,
                        r = this.getCurrentData(),
                        o = r.viewSpecs,
                        i = r.toolbarConfig,
                        a = [].concat(
                            i.header ? i.header.viewsWithButtons : [],
                            i.footer ? i.footer.viewsWithButtons : []
                        );
                    for (var s in o) a.push(s);
                    for (t = 0; t < a.length; t += 1)
                        if ((n = o[a[t]]) && n.singleUnit === e) return n;
                    return null;
                }),
                (e.prototype.prev = function () {
                    this.unselect(), this.dispatch({ type: "PREV" });
                }),
                (e.prototype.next = function () {
                    this.unselect(), this.dispatch({ type: "NEXT" });
                }),
                (e.prototype.prevYear = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: e.dateEnv.addYears(e.currentDate, -1),
                        });
                }),
                (e.prototype.nextYear = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: e.dateEnv.addYears(e.currentDate, 1),
                        });
                }),
                (e.prototype.today = function () {
                    var e = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: Ur(e.calendarOptions.now, e.dateEnv),
                        });
                }),
                (e.prototype.gotoDate = function (e) {
                    var t = this.getCurrentData();
                    this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: t.dateEnv.createMarker(e),
                        });
                }),
                (e.prototype.incrementDate = function (e) {
                    var t = this.getCurrentData(),
                        n = Gt(e);
                    n &&
                        (this.unselect(),
                        this.dispatch({
                            type: "CHANGE_DATE",
                            dateMarker: t.dateEnv.add(t.currentDate, n),
                        }));
                }),
                (e.prototype.getDate = function () {
                    var e = this.getCurrentData();
                    return e.dateEnv.toDate(e.currentDate);
                }),
                (e.prototype.formatDate = function (e, t) {
                    var n = this.getCurrentData().dateEnv;
                    return n.format(n.createMarker(e), bn(t));
                }),
                (e.prototype.formatRange = function (e, t, n) {
                    var r = this.getCurrentData().dateEnv;
                    return r.formatRange(
                        r.createMarker(e),
                        r.createMarker(t),
                        bn(n),
                        n
                    );
                }),
                (e.prototype.formatIso = function (e, t) {
                    var n = this.getCurrentData().dateEnv;
                    return n.formatIso(n.createMarker(e), { omitTime: t });
                }),
                (e.prototype.select = function (e, t) {
                    var n;
                    n =
                        null == t
                            ? null != e.start
                                ? e
                                : { start: e, end: null }
                            : { start: e, end: t };
                    var r = this.getCurrentData(),
                        o = Tr(n, r.dateEnv, Gt({ days: 1 }));
                    o &&
                        (this.dispatch({ type: "SELECT_DATES", selection: o }),
                        _r(o, null, r));
                }),
                (e.prototype.unselect = function (e) {
                    var t = this.getCurrentData();
                    t.dateSelection &&
                        (this.dispatch({ type: "UNSELECT_DATES" }),
                        (function (e, t) {
                            t.emitter.trigger("unselect", {
                                jsEvent: e ? e.origEvent : null,
                                view: t.viewApi || t.calendarApi.view,
                            });
                        })(e, t));
                }),
                (e.prototype.addEvent = function (e, t) {
                    if (e instanceof Vr) {
                        var n = e._def,
                            r = e._instance;
                        return (
                            this.getCurrentData().eventStore.defs[n.defId] ||
                                (this.dispatch({
                                    type: "ADD_EVENTS",
                                    eventStore: Pn({ def: n, instance: r }),
                                }),
                                this.triggerEventAdd(e)),
                            e
                        );
                    }
                    var o,
                        i = this.getCurrentData();
                    if (t instanceof Me) o = t.internalEventSource;
                    else if ("boolean" == typeof t)
                        t && (o = At(i.eventSources)[0]);
                    else if (null != t) {
                        var a = this.getEventSourceById(t);
                        if (!a)
                            return (
                                console.warn(
                                    'Could not find an event source with ID "' +
                                        t +
                                        '"'
                                ),
                                null
                            );
                        o = a.internalEventSource;
                    }
                    var s = qn(e, o, i, !1);
                    if (s) {
                        var l = new Vr(
                            i,
                            s.def,
                            s.def.recurringDef ? null : s.instance
                        );
                        return (
                            this.dispatch({
                                type: "ADD_EVENTS",
                                eventStore: Pn(s),
                            }),
                            this.triggerEventAdd(l),
                            l
                        );
                    }
                    return null;
                }),
                (e.prototype.triggerEventAdd = function (e) {
                    var t = this;
                    this.getCurrentData().emitter.trigger("eventAdd", {
                        event: e,
                        relatedEvents: [],
                        revert: function () {
                            t.dispatch({
                                type: "REMOVE_EVENTS",
                                eventStore: zr(e),
                            });
                        },
                    });
                }),
                (e.prototype.getEventById = function (e) {
                    var t = this.getCurrentData(),
                        n = t.eventStore,
                        r = n.defs,
                        o = n.instances;
                    for (var i in ((e = String(e)), r)) {
                        var a = r[i];
                        if (a.publicId === e) {
                            if (a.recurringDef) return new Vr(t, a, null);
                            for (var s in o) {
                                var l = o[s];
                                if (l.defId === a.defId) return new Vr(t, a, l);
                            }
                        }
                    }
                    return null;
                }),
                (e.prototype.getEvents = function () {
                    var e = this.getCurrentData();
                    return Fr(e.eventStore, e);
                }),
                (e.prototype.removeAllEvents = function () {
                    this.dispatch({ type: "REMOVE_ALL_EVENTS" });
                }),
                (e.prototype.getEventSources = function () {
                    var e = this.getCurrentData(),
                        t = e.eventSources,
                        n = [];
                    for (var r in t) n.push(new Me(e, t[r]));
                    return n;
                }),
                (e.prototype.getEventSourceById = function (e) {
                    var t = this.getCurrentData(),
                        n = t.eventSources;
                    for (var r in ((e = String(e)), n))
                        if (n[r].publicId === e) return new Me(t, n[r]);
                    return null;
                }),
                (e.prototype.addEventSource = function (e) {
                    var t = this.getCurrentData();
                    if (e instanceof Me)
                        return (
                            t.eventSources[e.internalEventSource.sourceId] ||
                                this.dispatch({
                                    type: "ADD_EVENT_SOURCES",
                                    sources: [e.internalEventSource],
                                }),
                            e
                        );
                    var n = Or(e, t);
                    return n
                        ? (this.dispatch({
                              type: "ADD_EVENT_SOURCES",
                              sources: [n],
                          }),
                          new Me(t, n))
                        : null;
                }),
                (e.prototype.removeAllEventSources = function () {
                    this.dispatch({ type: "REMOVE_ALL_EVENT_SOURCES" });
                }),
                (e.prototype.refetchEvents = function () {
                    this.dispatch({
                        type: "FETCH_EVENT_SOURCES",
                        isRefetch: !0,
                    });
                }),
                (e.prototype.scrollToTime = function (e) {
                    var t = Gt(e);
                    t && this.trigger("_scrollRequest", { time: t });
                }),
                e
            );
        })(),
        Vr = (function () {
            function e(e, t, n) {
                (this._context = e),
                    (this._def = t),
                    (this._instance = n || null);
            }
            return (
                (e.prototype.setProp = function (e, t) {
                    var n, r;
                    if (e in jn)
                        console.warn(
                            "Could not set date-related prop 'name'. Use one of the date-related methods instead."
                        );
                    else if ("id" === e)
                        (t = Bn[e](t)),
                            this.mutate({ standardProps: { publicId: t } });
                    else if (e in Bn)
                        (t = Bn[e](t)),
                            this.mutate({
                                standardProps: ((n = {}), (n[e] = t), n),
                            });
                    else if (e in Un) {
                        var o = Un[e](t);
                        "color" === e
                            ? (o = { backgroundColor: t, borderColor: t })
                            : "editable" === e
                            ? (o = { startEditable: t, durationEditable: t })
                            : (((r = {})[e] = t), (o = r)),
                            this.mutate({ standardProps: { ui: o } });
                    } else
                        console.warn(
                            "Could not set prop '" +
                                e +
                                "'. Use setExtendedProp instead."
                        );
                }),
                (e.prototype.setExtendedProp = function (e, t) {
                    var n;
                    this.mutate({ extendedProps: ((n = {}), (n[e] = t), n) });
                }),
                (e.prototype.setStart = function (e, t) {
                    void 0 === t && (t = {});
                    var n = this._context.dateEnv,
                        r = n.createMarker(e);
                    if (r && this._instance) {
                        var o = Qn(
                            this._instance.range.start,
                            r,
                            n,
                            t.granularity
                        );
                        t.maintainDuration
                            ? this.mutate({ datesDelta: o })
                            : this.mutate({ startDelta: o });
                    }
                }),
                (e.prototype.setEnd = function (e, t) {
                    void 0 === t && (t = {});
                    var n,
                        r = this._context.dateEnv;
                    if (
                        (null == e || (n = r.createMarker(e))) &&
                        this._instance
                    )
                        if (n) {
                            var o = Qn(
                                this._instance.range.end,
                                n,
                                r,
                                t.granularity
                            );
                            this.mutate({ endDelta: o });
                        } else this.mutate({ standardProps: { hasEnd: !1 } });
                }),
                (e.prototype.setDates = function (e, t, n) {
                    void 0 === n && (n = {});
                    var r,
                        o,
                        i,
                        a = this._context.dateEnv,
                        s = { allDay: n.allDay },
                        l = a.createMarker(e);
                    if (
                        l &&
                        (null == t || (r = a.createMarker(t))) &&
                        this._instance
                    ) {
                        var u = this._instance.range;
                        !0 === n.allDay && (u = Kn(u));
                        var c = Qn(u.start, l, a, n.granularity);
                        if (r) {
                            var d = Qn(u.end, r, a, n.granularity);
                            (i = d),
                                (o = c).years === i.years &&
                                o.months === i.months &&
                                o.days === i.days &&
                                o.milliseconds === i.milliseconds
                                    ? this.mutate({
                                          datesDelta: c,
                                          standardProps: s,
                                      })
                                    : this.mutate({
                                          startDelta: c,
                                          endDelta: d,
                                          standardProps: s,
                                      });
                        } else
                            (s.hasEnd = !1),
                                this.mutate({
                                    datesDelta: c,
                                    standardProps: s,
                                });
                    }
                }),
                (e.prototype.moveStart = function (e) {
                    var t = Gt(e);
                    t && this.mutate({ startDelta: t });
                }),
                (e.prototype.moveEnd = function (e) {
                    var t = Gt(e);
                    t && this.mutate({ endDelta: t });
                }),
                (e.prototype.moveDates = function (e) {
                    var t = Gt(e);
                    t && this.mutate({ datesDelta: t });
                }),
                (e.prototype.setAllDay = function (e, t) {
                    void 0 === t && (t = {});
                    var n = { allDay: e },
                        r = t.maintainDuration;
                    null == r &&
                        (r = this._context.options.allDayMaintainDuration),
                        this._def.allDay !== e && (n.hasEnd = r),
                        this.mutate({ standardProps: n });
                }),
                (e.prototype.formatRange = function (e) {
                    var t = this._context.dateEnv,
                        n = this._instance,
                        r = bn(e);
                    return this._def.hasEnd
                        ? t.formatRange(n.range.start, n.range.end, r, {
                              forcedStartTzo: n.forcedStartTzo,
                              forcedEndTzo: n.forcedEndTzo,
                          })
                        : t.format(n.range.start, r, {
                              forcedTzo: n.forcedStartTzo,
                          });
                }),
                (e.prototype.mutate = function (t) {
                    var n = this._instance;
                    if (n) {
                        var r = this._def,
                            o = this._context,
                            i = o.getCurrentData().eventStore,
                            a = Nn(i, n.instanceId);
                        a = Ir(
                            a,
                            {
                                "": {
                                    display: "",
                                    startEditable: !0,
                                    durationEditable: !0,
                                    constraints: [],
                                    overlap: null,
                                    allows: [],
                                    backgroundColor: "",
                                    borderColor: "",
                                    textColor: "",
                                    classNames: [],
                                },
                            },
                            t,
                            o
                        );
                        var s = new e(o, r, n);
                        (this._def = a.defs[r.defId]),
                            (this._instance = a.instances[n.instanceId]),
                            o.dispatch({ type: "MERGE_EVENTS", eventStore: a }),
                            o.emitter.trigger("eventChange", {
                                oldEvent: s,
                                event: this,
                                relatedEvents: Fr(a, o, n),
                                revert: function () {
                                    o.dispatch({
                                        type: "RESET_EVENTS",
                                        eventStore: i,
                                    });
                                },
                            });
                    }
                }),
                (e.prototype.remove = function () {
                    var e = this._context,
                        t = zr(this);
                    e.dispatch({ type: "REMOVE_EVENTS", eventStore: t }),
                        e.emitter.trigger("eventRemove", {
                            event: this,
                            relatedEvents: [],
                            revert: function () {
                                e.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: t,
                                });
                            },
                        });
                }),
                Object.defineProperty(e.prototype, "source", {
                    get: function () {
                        var e = this._def.sourceId;
                        return e
                            ? new Me(
                                  this._context,
                                  this._context.getCurrentData().eventSources[e]
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "start", {
                    get: function () {
                        return this._instance
                            ? this._context.dateEnv.toDate(
                                  this._instance.range.start
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "end", {
                    get: function () {
                        return this._instance && this._def.hasEnd
                            ? this._context.dateEnv.toDate(
                                  this._instance.range.end
                              )
                            : null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startStr", {
                    get: function () {
                        var e = this._instance;
                        return e
                            ? this._context.dateEnv.formatIso(e.range.start, {
                                  omitTime: this._def.allDay,
                                  forcedTzo: e.forcedStartTzo,
                              })
                            : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "endStr", {
                    get: function () {
                        var e = this._instance;
                        return e && this._def.hasEnd
                            ? this._context.dateEnv.formatIso(e.range.end, {
                                  omitTime: this._def.allDay,
                                  forcedTzo: e.forcedEndTzo,
                              })
                            : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "id", {
                    get: function () {
                        return this._def.publicId;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "groupId", {
                    get: function () {
                        return this._def.groupId;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allDay", {
                    get: function () {
                        return this._def.allDay;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "title", {
                    get: function () {
                        return this._def.title;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "url", {
                    get: function () {
                        return this._def.url;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "display", {
                    get: function () {
                        return this._def.ui.display || "auto";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "startEditable", {
                    get: function () {
                        return this._def.ui.startEditable;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "durationEditable", {
                    get: function () {
                        return this._def.ui.durationEditable;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "constraint", {
                    get: function () {
                        return this._def.ui.constraints[0] || null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "overlap", {
                    get: function () {
                        return this._def.ui.overlap;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "allow", {
                    get: function () {
                        return this._def.ui.allows[0] || null;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "backgroundColor", {
                    get: function () {
                        return this._def.ui.backgroundColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "borderColor", {
                    get: function () {
                        return this._def.ui.borderColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "textColor", {
                    get: function () {
                        return this._def.ui.textColor;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "classNames", {
                    get: function () {
                        return this._def.ui.classNames;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "extendedProps", {
                    get: function () {
                        return this._def.extendedProps;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.toPlainObject = function (e) {
                    void 0 === e && (e = {});
                    var t = this._def,
                        n = t.ui,
                        o = this.startStr,
                        i = this.endStr,
                        a = {};
                    return (
                        t.title && (a.title = t.title),
                        o && (a.start = o),
                        i && (a.end = i),
                        t.publicId && (a.id = t.publicId),
                        t.groupId && (a.groupId = t.groupId),
                        t.url && (a.url = t.url),
                        n.display &&
                            "auto" !== n.display &&
                            (a.display = n.display),
                        e.collapseColor &&
                        n.backgroundColor &&
                        n.backgroundColor === n.borderColor
                            ? (a.color = n.backgroundColor)
                            : (n.backgroundColor &&
                                  (a.backgroundColor = n.backgroundColor),
                              n.borderColor && (a.borderColor = n.borderColor)),
                        n.textColor && (a.textColor = n.textColor),
                        n.classNames.length && (a.classNames = n.classNames),
                        Object.keys(t.extendedProps).length &&
                            (e.collapseExtendedProps
                                ? r(a, t.extendedProps)
                                : (a.extendedProps = t.extendedProps)),
                        a
                    );
                }),
                (e.prototype.toJSON = function () {
                    return this.toPlainObject();
                }),
                e
            );
        })();
    function zr(e) {
        var t,
            n,
            r = e._def,
            o = e._instance;
        return {
            defs: ((t = {}), (t[r.defId] = r), t),
            instances: o ? ((n = {}), (n[o.instanceId] = o), n) : {},
        };
    }
    function Fr(e, t, n) {
        var r = e.defs,
            o = e.instances,
            i = [],
            a = n ? n.instanceId : "";
        for (var s in o) {
            var l = o[s],
                u = r[l.defId];
            l.instanceId !== a && i.push(new Vr(t, u, l));
        }
        return i;
    }
    var Br = {};
    var jr,
        Gr = (function () {
            function e() {}
            return (
                (e.prototype.getMarkerYear = function (e) {
                    return e.getUTCFullYear();
                }),
                (e.prototype.getMarkerMonth = function (e) {
                    return e.getUTCMonth();
                }),
                (e.prototype.getMarkerDay = function (e) {
                    return e.getUTCDate();
                }),
                (e.prototype.arrayToMarker = function (e) {
                    return Ct(e);
                }),
                (e.prototype.markerToArray = function (e) {
                    return xt(e);
                }),
                e
            );
        })();
    (jr = Gr), (Br["gregory"] = jr);
    var qr =
        /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
    function Yr(e) {
        var t = qr.exec(e);
        if (t) {
            var n = new Date(
                Date.UTC(
                    Number(t[1]),
                    t[3] ? Number(t[3]) - 1 : 0,
                    Number(t[5] || 1),
                    Number(t[7] || 0),
                    Number(t[8] || 0),
                    Number(t[10] || 0),
                    t[12] ? 1e3 * Number("0." + t[12]) : 0
                )
            );
            if (kt(n)) {
                var r = null;
                return (
                    t[13] &&
                        (r =
                            ("-" === t[15] ? -1 : 1) *
                            (60 * Number(t[16] || 0) + Number(t[18] || 0))),
                    { marker: n, isTimeUnspecified: !t[6], timeZoneOffset: r }
                );
            }
        }
        return null;
    }
    var Zr = (function () {
            function e(e) {
                var t = (this.timeZone = e.timeZone),
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl &&
                    n &&
                    (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
                    (this.canComputeOffset = Boolean(
                        !n || this.namedTimeZoneImpl
                    )),
                    (this.calendarSystem = (function (e) {
                        return new Br[e]();
                    })(e.calendarSystem)),
                    (this.locale = e.locale),
                    (this.weekDow = e.locale.week.dow),
                    (this.weekDoy = e.locale.week.doy),
                    "ISO" === e.weekNumberCalculation &&
                        ((this.weekDow = 1), (this.weekDoy = 4)),
                    "number" == typeof e.firstDay &&
                        (this.weekDow = e.firstDay),
                    "function" == typeof e.weekNumberCalculation &&
                        (this.weekNumberFunc = e.weekNumberCalculation),
                    (this.weekText =
                        null != e.weekText
                            ? e.weekText
                            : e.locale.options.weekText),
                    (this.weekTextLong =
                        (null != e.weekTextLong
                            ? e.weekTextLong
                            : e.locale.options.weekTextLong) || this.weekText),
                    (this.cmdFormatter = e.cmdFormatter),
                    (this.defaultSeparator = e.defaultSeparator);
            }
            return (
                (e.prototype.createMarker = function (e) {
                    var t = this.createMarkerMeta(e);
                    return null === t ? null : t.marker;
                }),
                (e.prototype.createNowMarker = function () {
                    return this.canComputeOffset
                        ? this.timestampToMarker(new Date().valueOf())
                        : Ct(Dt(new Date()));
                }),
                (e.prototype.createMarkerMeta = function (e) {
                    if ("string" == typeof e) return this.parse(e);
                    var t = null;
                    return (
                        "number" == typeof e
                            ? (t = this.timestampToMarker(e))
                            : e instanceof Date
                            ? ((e = e.valueOf()),
                              isNaN(e) || (t = this.timestampToMarker(e)))
                            : Array.isArray(e) && (t = Ct(e)),
                        null !== t && kt(t)
                            ? {
                                  marker: t,
                                  isTimeUnspecified: !1,
                                  forcedTzo: null,
                              }
                            : null
                    );
                }),
                (e.prototype.parse = function (e) {
                    var t = Yr(e);
                    if (null === t) return null;
                    var n = t.marker,
                        r = null;
                    return (
                        null !== t.timeZoneOffset &&
                            (this.canComputeOffset
                                ? (n = this.timestampToMarker(
                                      n.valueOf() - 60 * t.timeZoneOffset * 1e3
                                  ))
                                : (r = t.timeZoneOffset)),
                        {
                            marker: n,
                            isTimeUnspecified: t.isTimeUnspecified,
                            forcedTzo: r,
                        }
                    );
                }),
                (e.prototype.getYear = function (e) {
                    return this.calendarSystem.getMarkerYear(e);
                }),
                (e.prototype.getMonth = function (e) {
                    return this.calendarSystem.getMarkerMonth(e);
                }),
                (e.prototype.add = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (
                        (n[0] += t.years),
                        (n[1] += t.months),
                        (n[2] += t.days),
                        (n[6] += t.milliseconds),
                        this.calendarSystem.arrayToMarker(n)
                    );
                }),
                (e.prototype.subtract = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (
                        (n[0] -= t.years),
                        (n[1] -= t.months),
                        (n[2] -= t.days),
                        (n[6] -= t.milliseconds),
                        this.calendarSystem.arrayToMarker(n)
                    );
                }),
                (e.prototype.addYears = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (n[0] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.addMonths = function (e, t) {
                    var n = this.calendarSystem.markerToArray(e);
                    return (n[1] += t), this.calendarSystem.arrayToMarker(n);
                }),
                (e.prototype.diffWholeYears = function (e, t) {
                    var n = this.calendarSystem;
                    return _t(e) === _t(t) &&
                        n.getMarkerDay(e) === n.getMarkerDay(t) &&
                        n.getMarkerMonth(e) === n.getMarkerMonth(t)
                        ? n.getMarkerYear(t) - n.getMarkerYear(e)
                        : null;
                }),
                (e.prototype.diffWholeMonths = function (e, t) {
                    var n = this.calendarSystem;
                    return _t(e) === _t(t) &&
                        n.getMarkerDay(e) === n.getMarkerDay(t)
                        ? n.getMarkerMonth(t) -
                              n.getMarkerMonth(e) +
                              12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
                        : null;
                }),
                (e.prototype.greatestWholeUnit = function (e, t) {
                    var n = this.diffWholeYears(e, t);
                    return null !== n
                        ? { unit: "year", value: n }
                        : null !== (n = this.diffWholeMonths(e, t))
                        ? { unit: "month", value: n }
                        : null !== (n = yt(e, t))
                        ? { unit: "week", value: n }
                        : null !== (n = Et(e, t))
                        ? { unit: "day", value: n }
                        : ((n = (function (e, t) {
                              return (t.valueOf() - e.valueOf()) / 36e5;
                          })(e, t)),
                          ut(n)
                              ? { unit: "hour", value: n }
                              : ((n = (function (e, t) {
                                    return (t.valueOf() - e.valueOf()) / 6e4;
                                })(e, t)),
                                ut(n)
                                    ? { unit: "minute", value: n }
                                    : ((n = (function (e, t) {
                                          return (
                                              (t.valueOf() - e.valueOf()) / 1e3
                                          );
                                      })(e, t)),
                                      ut(n)
                                          ? { unit: "second", value: n }
                                          : {
                                                unit: "millisecond",
                                                value:
                                                    t.valueOf() - e.valueOf(),
                                            })));
                }),
                (e.prototype.countDurationsBetween = function (e, t, n) {
                    var r;
                    return n.years && null !== (r = this.diffWholeYears(e, t))
                        ? r / (Xt(n) / 365)
                        : n.months && null !== (r = this.diffWholeMonths(e, t))
                        ? r /
                          (function (e) {
                              return Xt(e) / 30;
                          })(n)
                        : n.days && null !== (r = Et(e, t))
                        ? r / Xt(n)
                        : (t.valueOf() - e.valueOf()) / Kt(n);
                }),
                (e.prototype.startOf = function (e, t) {
                    return "year" === t
                        ? this.startOfYear(e)
                        : "month" === t
                        ? this.startOfMonth(e)
                        : "week" === t
                        ? this.startOfWeek(e)
                        : "day" === t
                        ? bt(e)
                        : "hour" === t
                        ? (function (e) {
                              return Ct([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                              ]);
                          })(e)
                        : "minute" === t
                        ? (function (e) {
                              return Ct([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                                  e.getUTCMinutes(),
                              ]);
                          })(e)
                        : "second" === t
                        ? (function (e) {
                              return Ct([
                                  e.getUTCFullYear(),
                                  e.getUTCMonth(),
                                  e.getUTCDate(),
                                  e.getUTCHours(),
                                  e.getUTCMinutes(),
                                  e.getUTCSeconds(),
                              ]);
                          })(e)
                        : null;
                }),
                (e.prototype.startOfYear = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                    ]);
                }),
                (e.prototype.startOfMonth = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                        this.calendarSystem.getMarkerMonth(e),
                    ]);
                }),
                (e.prototype.startOfWeek = function (e) {
                    return this.calendarSystem.arrayToMarker([
                        this.calendarSystem.getMarkerYear(e),
                        this.calendarSystem.getMarkerMonth(e),
                        e.getUTCDate() -
                            ((e.getUTCDay() - this.weekDow + 7) % 7),
                    ]);
                }),
                (e.prototype.computeWeekNumber = function (e) {
                    return this.weekNumberFunc
                        ? this.weekNumberFunc(this.toDate(e))
                        : (function (e, t, n) {
                              var r = e.getUTCFullYear(),
                                  o = St(e, r, t, n);
                              if (o < 1) return St(e, r - 1, t, n);
                              var i = St(e, r + 1, t, n);
                              return i >= 1 ? Math.min(o, i) : o;
                          })(e, this.weekDow, this.weekDoy);
                }),
                (e.prototype.format = function (e, t, n) {
                    return (
                        void 0 === n && (n = {}),
                        t.format(
                            {
                                marker: e,
                                timeZoneOffset:
                                    null != n.forcedTzo
                                        ? n.forcedTzo
                                        : this.offsetForMarker(e),
                            },
                            this
                        )
                    );
                }),
                (e.prototype.formatRange = function (e, t, n, r) {
                    return (
                        void 0 === r && (r = {}),
                        r.isEndExclusive && (t = ht(t, -1)),
                        n.formatRange(
                            {
                                marker: e,
                                timeZoneOffset:
                                    null != r.forcedStartTzo
                                        ? r.forcedStartTzo
                                        : this.offsetForMarker(e),
                            },
                            {
                                marker: t,
                                timeZoneOffset:
                                    null != r.forcedEndTzo
                                        ? r.forcedEndTzo
                                        : this.offsetForMarker(t),
                            },
                            this,
                            r.defaultSeparator
                        )
                    );
                }),
                (e.prototype.formatIso = function (e, t) {
                    void 0 === t && (t = {});
                    var n = null;
                    return (
                        t.omitTimeZoneOffset ||
                            (n =
                                null != t.forcedTzo
                                    ? t.forcedTzo
                                    : this.offsetForMarker(e)),
                        Qt(e, n, t.omitTime)
                    );
                }),
                (e.prototype.timestampToMarker = function (e) {
                    return "local" === this.timeZone
                        ? Ct(Dt(new Date(e)))
                        : "UTC" !== this.timeZone && this.namedTimeZoneImpl
                        ? Ct(this.namedTimeZoneImpl.timestampToArray(e))
                        : new Date(e);
                }),
                (e.prototype.offsetForMarker = function (e) {
                    return "local" === this.timeZone
                        ? -Tt(xt(e)).getTimezoneOffset()
                        : "UTC" === this.timeZone
                        ? 0
                        : this.namedTimeZoneImpl
                        ? this.namedTimeZoneImpl.offsetForArray(xt(e))
                        : null;
                }),
                (e.prototype.toDate = function (e, t) {
                    return "local" === this.timeZone
                        ? Tt(xt(e))
                        : "UTC" === this.timeZone
                        ? new Date(e.valueOf())
                        : this.namedTimeZoneImpl
                        ? new Date(
                              e.valueOf() -
                                  1e3 *
                                      this.namedTimeZoneImpl.offsetForArray(
                                          xt(e)
                                      ) *
                                      60
                          )
                        : new Date(e.valueOf() - (t || 0));
                }),
                e
            );
        })(),
        Xr = [],
        Kr = {
            code: "en",
            week: { dow: 0, doy: 4 },
            direction: "ltr",
            buttonText: {
                prev: "prev",
                next: "next",
                prevYear: "prev year",
                nextYear: "next year",
                year: "year",
                today: "today",
                month: "month",
                week: "week",
                day: "day",
                list: "list",
            },
            weekText: "W",
            weekTextLong: "Week",
            closeHint: "Close",
            timeHint: "Time",
            eventHint: "Event",
            allDayText: "all-day",
            moreLinkText: "more",
            noEventsText: "No events to display",
        },
        $r = r(r({}, Kr), {
            buttonHints: {
                prev: "Previous $0",
                next: "Next $0",
                today: function (e, t) {
                    return "day" === t ? "Today" : "This " + e;
                },
            },
            viewHint: "$0 view",
            navLinkHint: "Go to $0",
            moreLinkHint: function (e) {
                return "Show " + e + " more event" + (1 === e ? "" : "s");
            },
        });
    function Jr(e) {
        for (
            var t = e.length > 0 ? e[0].code : "en",
                n = Xr.concat(e),
                r = { en: $r },
                o = 0,
                i = n;
            o < i.length;
            o++
        ) {
            var a = i[o];
            r[a.code] = a;
        }
        return { map: r, defaultCode: t };
    }
    function Qr(e, t) {
        return "object" != typeof e || Array.isArray(e)
            ? (function (e, t) {
                  var n = [].concat(e || []),
                      r =
                          (function (e, t) {
                              for (var n = 0; n < e.length; n += 1)
                                  for (
                                      var r = e[n]
                                              .toLocaleLowerCase()
                                              .split("-"),
                                          o = r.length;
                                      o > 0;
                                      o -= 1
                                  ) {
                                      var i = r.slice(0, o).join("-");
                                      if (t[i]) return t[i];
                                  }
                              return null;
                          })(n, t) || $r;
                  return eo(e, n, r);
              })(e, t)
            : eo(e.code, [e.code], e);
    }
    function eo(e, t, n) {
        var r = It([Kr, n], ["buttonText"]);
        delete r.code;
        var o = r.week;
        return (
            delete r.week,
            {
                codeArg: e,
                codes: t,
                week: o,
                simpleNumberFormat: new Intl.NumberFormat(e),
                options: r,
            }
        );
    }
    function to(e) {
        var t = Qr(e.locale || "en", Jr([]).map);
        return new Zr(
            r(r({ timeZone: wn.timeZone, calendarSystem: "gregory" }, e), {
                locale: t,
            })
        );
    }
    var no,
        ro = {
            startTime: "09:00",
            endTime: "17:00",
            daysOfWeek: [1, 2, 3, 4, 5],
            display: "inverse-background",
            classNames: "fc-non-business",
            groupId: "_businessHours",
        };
    function oo(e, t) {
        return In(
            (function (e) {
                var t;
                t =
                    !0 === e
                        ? [{}]
                        : Array.isArray(e)
                        ? e.filter(function (e) {
                              return e.daysOfWeek;
                          })
                        : "object" == typeof e && e
                        ? [e]
                        : [];
                return (t = t.map(function (e) {
                    return r(r({}, ro), e);
                }));
            })(e),
            null,
            t
        );
    }
    function io(e, t) {
        return (
            e.left >= t.left &&
            e.left < t.right &&
            e.top >= t.top &&
            e.top < t.bottom
        );
    }
    function ao(e, t) {
        var n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom),
        };
        return n.left < n.right && n.top < n.bottom && n;
    }
    function so(e, t) {
        return {
            left: Math.min(Math.max(e.left, t.left), t.right),
            top: Math.min(Math.max(e.top, t.top), t.bottom),
        };
    }
    function lo(e) {
        return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
    }
    function uo(e, t) {
        return { left: e.left - t.left, top: e.top - t.top };
    }
    function co() {
        return (
            null == no &&
                (no = (function () {
                    if ("undefined" == typeof document) return !0;
                    var e = document.createElement("div");
                    (e.style.position = "absolute"),
                        (e.style.top = "0px"),
                        (e.style.left = "0px"),
                        (e.innerHTML =
                            "<table><tr><td><div></div></td></tr></table>"),
                        (e.querySelector("table").style.height = "100px"),
                        (e.querySelector("div").style.height = "100%"),
                        document.body.appendChild(e);
                    var t = e.querySelector("div").offsetHeight > 0;
                    return document.body.removeChild(e), t;
                })()),
            no
        );
    }
    var po = { defs: {}, instances: {} },
        fo = (function () {
            function e() {
                (this.getKeysForEventDefs = on(this._getKeysForEventDefs)),
                    (this.splitDateSelection = on(this._splitDateSpan)),
                    (this.splitEventStore = on(this._splitEventStore)),
                    (this.splitIndividualUi = on(this._splitIndividualUi)),
                    (this.splitEventDrag = on(this._splitInteraction)),
                    (this.splitEventResize = on(this._splitInteraction)),
                    (this.eventUiBuilders = {});
            }
            return (
                (e.prototype.splitProps = function (e) {
                    var t = this,
                        n = this.getKeyInfo(e),
                        r = this.getKeysForEventDefs(e.eventStore),
                        o = this.splitDateSelection(e.dateSelection),
                        i = this.splitIndividualUi(e.eventUiBases, r),
                        a = this.splitEventStore(e.eventStore, r),
                        s = this.splitEventDrag(e.eventDrag),
                        l = this.splitEventResize(e.eventResize),
                        u = {};
                    for (var c in ((this.eventUiBuilders = Nt(
                        n,
                        function (e, n) {
                            return t.eventUiBuilders[n] || on(ho);
                        }
                    )),
                    n)) {
                        var d = n[c],
                            p = a[c] || po,
                            f = this.eventUiBuilders[c];
                        u[c] = {
                            businessHours: d.businessHours || e.businessHours,
                            dateSelection: o[c] || null,
                            eventStore: p,
                            eventUiBases: f(e.eventUiBases[""], d.ui, i[c]),
                            eventSelection: p.instances[e.eventSelection]
                                ? e.eventSelection
                                : "",
                            eventDrag: s[c] || null,
                            eventResize: l[c] || null,
                        };
                    }
                    return u;
                }),
                (e.prototype._splitDateSpan = function (e) {
                    var t = {};
                    if (e)
                        for (
                            var n = 0, r = this.getKeysForDateSpan(e);
                            n < r.length;
                            n++
                        ) {
                            t[r[n]] = e;
                        }
                    return t;
                }),
                (e.prototype._getKeysForEventDefs = function (e) {
                    var t = this;
                    return Nt(e.defs, function (e) {
                        return t.getKeysForEventDef(e);
                    });
                }),
                (e.prototype._splitEventStore = function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {};
                    for (var i in n)
                        for (var a = 0, s = t[i]; a < s.length; a++) {
                            o[(p = s[a])] ||
                                (o[p] = { defs: {}, instances: {} }),
                                (o[p].defs[i] = n[i]);
                        }
                    for (var l in r)
                        for (
                            var u = r[l], c = 0, d = t[u.defId];
                            c < d.length;
                            c++
                        ) {
                            var p;
                            o[(p = d[c])] && (o[p].instances[l] = u);
                        }
                    return o;
                }),
                (e.prototype._splitIndividualUi = function (e, t) {
                    var n = {};
                    for (var r in e)
                        if (r)
                            for (var o = 0, i = t[r]; o < i.length; o++) {
                                var a = i[o];
                                n[a] || (n[a] = {}), (n[a][r] = e[r]);
                            }
                    return n;
                }),
                (e.prototype._splitInteraction = function (e) {
                    var t = {};
                    if (e) {
                        var n = this._splitEventStore(
                                e.affectedEvents,
                                this._getKeysForEventDefs(e.affectedEvents)
                            ),
                            r = this._getKeysForEventDefs(e.mutatedEvents),
                            o = this._splitEventStore(e.mutatedEvents, r),
                            i = function (r) {
                                t[r] ||
                                    (t[r] = {
                                        affectedEvents: n[r] || po,
                                        mutatedEvents: o[r] || po,
                                        isEvent: e.isEvent,
                                    });
                            };
                        for (var a in n) i(a);
                        for (var a in o) i(a);
                    }
                    return t;
                }),
                e
            );
        })();
    function ho(e, t, n) {
        var o = [];
        e && o.push(e), t && o.push(t);
        var i = { "": zn(o) };
        return n && r(i, n), i;
    }
    function vo(e, t, n, r) {
        return {
            dow: e.getUTCDay(),
            isDisabled: Boolean(r && !ar(r.activeRange, e)),
            isOther: Boolean(r && !ar(r.currentRange, e)),
            isToday: Boolean(t && ar(t, e)),
            isPast: Boolean(n ? e < n : !!t && e < t.start),
            isFuture: Boolean(n ? e > n : !!t && e >= t.end),
        };
    }
    function go(e, t) {
        var n = ["fc-day", "fc-day-" + dt[e.dow]];
        return (
            e.isDisabled
                ? n.push("fc-day-disabled")
                : (e.isToday &&
                      (n.push("fc-day-today"), n.push(t.getClass("today"))),
                  e.isPast && n.push("fc-day-past"),
                  e.isFuture && n.push("fc-day-future"),
                  e.isOther && n.push("fc-day-other")),
            n
        );
    }
    var mo = bn({ year: "numeric", month: "long", day: "numeric" }),
        yo = bn({ week: "long" });
    function Eo(e, t, n, o) {
        void 0 === n && (n = "day"), void 0 === o && (o = !0);
        var i = e.dateEnv,
            a = e.options,
            s = e.calendarApi,
            l = i.format(t, "week" === n ? yo : mo);
        if (a.navLinks) {
            var u = i.toDate(t),
                c = function (e) {
                    var r =
                        "day" === n
                            ? a.navLinkDayClick
                            : "week" === n
                            ? a.navLinkWeekClick
                            : null;
                    "function" == typeof r
                        ? r.call(s, i.toDate(t), e)
                        : ("string" == typeof r && (n = r), s.zoomTo(t, n));
                };
            return r(
                { title: st(a.navLinkHint, [l, u], l), "data-navlink": "" },
                o ? qe(c) : { onClick: c }
            );
        }
        return { "aria-label": l };
    }
    var bo,
        So = null;
    function wo() {
        return (
            null === So &&
                (So = (function () {
                    var e = document.createElement("div");
                    Oe(e, {
                        position: "absolute",
                        top: -1e3,
                        left: 0,
                        border: 0,
                        padding: 0,
                        overflow: "scroll",
                        direction: "rtl",
                    }),
                        (e.innerHTML = "<div></div>"),
                        document.body.appendChild(e);
                    var t =
                        e.firstChild.getBoundingClientRect().left >
                        e.getBoundingClientRect().left;
                    return Ie(e), t;
                })()),
            So
        );
    }
    function Do() {
        return (
            bo ||
                (bo = (function () {
                    var e = document.createElement("div");
                    (e.style.overflow = "scroll"),
                        (e.style.position = "absolute"),
                        (e.style.top = "-9999px"),
                        (e.style.left = "-9999px"),
                        document.body.appendChild(e);
                    var t = To(e);
                    return document.body.removeChild(e), t;
                })()),
            bo
        );
    }
    function To(e) {
        return {
            x: e.offsetHeight - e.clientHeight,
            y: e.offsetWidth - e.clientWidth,
        };
    }
    function xo(e, t) {
        void 0 === t && (t = !1);
        var n = window.getComputedStyle(e),
            r = parseInt(n.borderLeftWidth, 10) || 0,
            o = parseInt(n.borderRightWidth, 10) || 0,
            i = parseInt(n.borderTopWidth, 10) || 0,
            a = parseInt(n.borderBottomWidth, 10) || 0,
            s = To(e),
            l = s.y - r - o,
            u = {
                borderLeft: r,
                borderRight: o,
                borderTop: i,
                borderBottom: a,
                scrollbarBottom: s.x - i - a,
                scrollbarLeft: 0,
                scrollbarRight: 0,
            };
        return (
            wo() && "rtl" === n.direction
                ? (u.scrollbarLeft = l)
                : (u.scrollbarRight = l),
            t &&
                ((u.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
                (u.paddingRight = parseInt(n.paddingRight, 10) || 0),
                (u.paddingTop = parseInt(n.paddingTop, 10) || 0),
                (u.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
            u
        );
    }
    function Co(e, t, n) {
        void 0 === t && (t = !1);
        var r = n ? e.getBoundingClientRect() : ko(e),
            o = xo(e, t),
            i = {
                left: r.left + o.borderLeft + o.scrollbarLeft,
                right: r.right - o.borderRight - o.scrollbarRight,
                top: r.top + o.borderTop,
                bottom: r.bottom - o.borderBottom - o.scrollbarBottom,
            };
        return (
            t &&
                ((i.left += o.paddingLeft),
                (i.right -= o.paddingRight),
                (i.top += o.paddingTop),
                (i.bottom -= o.paddingBottom)),
            i
        );
    }
    function ko(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + window.pageXOffset,
            top: t.top + window.pageYOffset,
            right: t.right + window.pageXOffset,
            bottom: t.bottom + window.pageYOffset,
        };
    }
    function _o(e) {
        for (var t = []; e instanceof HTMLElement; ) {
            var n = window.getComputedStyle(e);
            if ("fixed" === n.position) break;
            /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) &&
                t.push(e),
                (e = e.parentNode);
        }
        return t;
    }
    function Ro(e, t, n) {
        var r = !1,
            o = function () {
                r || ((r = !0), t.apply(this, arguments));
            },
            i = function () {
                r || ((r = !0), n && n.apply(this, arguments));
            },
            a = e(o, i);
        a && "function" == typeof a.then && a.then(o, i);
    }
    var Mo = (function () {
        function e() {
            (this.handlers = {}), (this.thisContext = null);
        }
        return (
            (e.prototype.setThisContext = function (e) {
                this.thisContext = e;
            }),
            (e.prototype.setOptions = function (e) {
                this.options = e;
            }),
            (e.prototype.on = function (e, t) {
                !(function (e, t, n) {
                    (e[t] || (e[t] = [])).push(n);
                })(this.handlers, e, t);
            }),
            (e.prototype.off = function (e, t) {
                !(function (e, t, n) {
                    n
                        ? e[t] &&
                          (e[t] = e[t].filter(function (e) {
                              return e !== n;
                          }))
                        : delete e[t];
                })(this.handlers, e, t);
            }),
            (e.prototype.trigger = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                for (
                    var r = this.handlers[e] || [],
                        o = this.options && this.options[e],
                        i = 0,
                        a = [].concat(o || [], r);
                    i < a.length;
                    i++
                ) {
                    a[i].apply(this.thisContext, t);
                }
            }),
            (e.prototype.hasHandlers = function (e) {
                return Boolean(
                    (this.handlers[e] && this.handlers[e].length) ||
                        (this.options && this.options[e])
                );
            }),
            e
        );
    })();
    var Io = (function () {
            function e(e, t, n, r) {
                this.els = t;
                var o = (this.originClientRect = e.getBoundingClientRect());
                n && this.buildElHorizontals(o.left),
                    r && this.buildElVerticals(o.top);
            }
            return (
                (e.prototype.buildElHorizontals = function (e) {
                    for (
                        var t = [], n = [], r = 0, o = this.els;
                        r < o.length;
                        r++
                    ) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.left - e), n.push(i.right - e);
                    }
                    (this.lefts = t), (this.rights = n);
                }),
                (e.prototype.buildElVerticals = function (e) {
                    for (
                        var t = [], n = [], r = 0, o = this.els;
                        r < o.length;
                        r++
                    ) {
                        var i = o[r].getBoundingClientRect();
                        t.push(i.top - e), n.push(i.bottom - e);
                    }
                    (this.tops = t), (this.bottoms = n);
                }),
                (e.prototype.leftToIndex = function (e) {
                    var t,
                        n = this.lefts,
                        r = this.rights,
                        o = n.length;
                    for (t = 0; t < o; t += 1)
                        if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.topToIndex = function (e) {
                    var t,
                        n = this.tops,
                        r = this.bottoms,
                        o = n.length;
                    for (t = 0; t < o; t += 1)
                        if (e >= n[t] && e < r[t]) return t;
                }),
                (e.prototype.getWidth = function (e) {
                    return this.rights[e] - this.lefts[e];
                }),
                (e.prototype.getHeight = function (e) {
                    return this.bottoms[e] - this.tops[e];
                }),
                e
            );
        })(),
        Po = (function () {
            function e() {}
            return (
                (e.prototype.getMaxScrollTop = function () {
                    return this.getScrollHeight() - this.getClientHeight();
                }),
                (e.prototype.getMaxScrollLeft = function () {
                    return this.getScrollWidth() - this.getClientWidth();
                }),
                (e.prototype.canScrollVertically = function () {
                    return this.getMaxScrollTop() > 0;
                }),
                (e.prototype.canScrollHorizontally = function () {
                    return this.getMaxScrollLeft() > 0;
                }),
                (e.prototype.canScrollUp = function () {
                    return this.getScrollTop() > 0;
                }),
                (e.prototype.canScrollDown = function () {
                    return this.getScrollTop() < this.getMaxScrollTop();
                }),
                (e.prototype.canScrollLeft = function () {
                    return this.getScrollLeft() > 0;
                }),
                (e.prototype.canScrollRight = function () {
                    return this.getScrollLeft() < this.getMaxScrollLeft();
                }),
                e
            );
        })(),
        No = (function (e) {
            function t(t) {
                var n = e.call(this) || this;
                return (n.el = t), n;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return this.el.scrollTop;
                }),
                (t.prototype.getScrollLeft = function () {
                    return this.el.scrollLeft;
                }),
                (t.prototype.setScrollTop = function (e) {
                    this.el.scrollTop = e;
                }),
                (t.prototype.setScrollLeft = function (e) {
                    this.el.scrollLeft = e;
                }),
                (t.prototype.getScrollWidth = function () {
                    return this.el.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return this.el.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return this.el.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return this.el.clientWidth;
                }),
                t
            );
        })(Po),
        Ho = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.getScrollTop = function () {
                    return window.pageYOffset;
                }),
                (t.prototype.getScrollLeft = function () {
                    return window.pageXOffset;
                }),
                (t.prototype.setScrollTop = function (e) {
                    window.scroll(window.pageXOffset, e);
                }),
                (t.prototype.setScrollLeft = function (e) {
                    window.scroll(e, window.pageYOffset);
                }),
                (t.prototype.getScrollWidth = function () {
                    return document.documentElement.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return document.documentElement.scrollHeight;
                }),
                (t.prototype.getClientHeight = function () {
                    return document.documentElement.clientHeight;
                }),
                (t.prototype.getClientWidth = function () {
                    return document.documentElement.clientWidth;
                }),
                t
            );
        })(Po),
        Ao = (function () {
            function e(e) {
                this.iconOverrideOption &&
                    this.setIconOverride(e[this.iconOverrideOption]);
            }
            return (
                (e.prototype.setIconOverride = function (e) {
                    var t, n;
                    if ("object" == typeof e && e) {
                        for (n in ((t = r({}, this.iconClasses)), e))
                            t[n] = this.applyIconOverridePrefix(e[n]);
                        this.iconClasses = t;
                    } else !1 === e && (this.iconClasses = {});
                }),
                (e.prototype.applyIconOverridePrefix = function (e) {
                    var t = this.iconOverridePrefix;
                    return t && 0 !== e.indexOf(t) && (e = t + e), e;
                }),
                (e.prototype.getClass = function (e) {
                    return this.classes[e] || "";
                }),
                (e.prototype.getIconClass = function (e, t) {
                    var n;
                    return (n =
                        (t && this.rtlIconClasses && this.rtlIconClasses[e]) ||
                        this.iconClasses[e])
                        ? this.baseIconClass + " " + n
                        : "";
                }),
                (e.prototype.getCustomButtonIconClass = function (e) {
                    var t;
                    return this.iconOverrideCustomButtonOption &&
                        (t = e[this.iconOverrideCustomButtonOption])
                        ? this.baseIconClass +
                              " " +
                              this.applyIconOverridePrefix(t)
                        : "";
                }),
                e
            );
        })();
    if (
        ((Ao.prototype.classes = {}),
        (Ao.prototype.iconClasses = {}),
        (Ao.prototype.baseIconClass = ""),
        (Ao.prototype.iconOverridePrefix = ""),
        "undefined" == typeof FullCalendarVDom)
    )
        throw new Error(
            "Please import the top-level fullcalendar lib before attempting to import a plugin."
        );
    var Oo = FullCalendarVDom.Component,
        Lo = FullCalendarVDom.createElement,
        Uo = FullCalendarVDom.render,
        Wo = FullCalendarVDom.createRef,
        Vo = FullCalendarVDom.Fragment,
        zo = FullCalendarVDom.createContext,
        Fo = FullCalendarVDom.createPortal,
        Bo = FullCalendarVDom.flushSync,
        jo = FullCalendarVDom.unmountComponentAtNode,
        Go = (function () {
            function e(e, t, n, o) {
                var i = this;
                (this.execFunc = e),
                    (this.emitter = t),
                    (this.scrollTime = n),
                    (this.scrollTimeReset = o),
                    (this.handleScrollRequest = function (e) {
                        (i.queuedRequest = r({}, i.queuedRequest || {}, e)),
                            i.drain();
                    }),
                    t.on("_scrollRequest", this.handleScrollRequest),
                    this.fireInitialScroll();
            }
            return (
                (e.prototype.detach = function () {
                    this.emitter.off(
                        "_scrollRequest",
                        this.handleScrollRequest
                    );
                }),
                (e.prototype.update = function (e) {
                    e && this.scrollTimeReset
                        ? this.fireInitialScroll()
                        : this.drain();
                }),
                (e.prototype.fireInitialScroll = function () {
                    this.handleScrollRequest({ time: this.scrollTime });
                }),
                (e.prototype.drain = function () {
                    this.queuedRequest &&
                        this.execFunc(this.queuedRequest) &&
                        (this.queuedRequest = null);
                }),
                e
            );
        })(),
        qo = zo({});
    function Yo(e, t, n, r, o, i, a, s, l, u, c, d, p) {
        return {
            dateEnv: o,
            options: n,
            pluginHooks: a,
            emitter: u,
            dispatch: s,
            getCurrentData: l,
            calendarApi: c,
            viewSpec: e,
            viewApi: t,
            dateProfileGenerator: r,
            theme: i,
            isRtl: "rtl" === n.direction,
            addResizeHandler: function (e) {
                u.on("_resize", e);
            },
            removeResizeHandler: function (e) {
                u.off("_resize", e);
            },
            createScrollResponder: function (e) {
                return new Go(e, u, Gt(n.scrollTime), n.scrollTimeReset);
            },
            registerInteractiveComponent: d,
            unregisterInteractiveComponent: p,
        };
    }
    var Zo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return (
                    this.debug &&
                        console.log(Lt(e, this.props), Lt(t, this.state)),
                    !Ut(this.props, e, this.propEquality) ||
                        !Ut(this.state, t, this.stateEquality)
                );
            }),
            (t.prototype.safeSetState = function (e) {
                Ut(this.state, r(r({}, this.state), e), this.stateEquality) ||
                    this.setState(e);
            }),
            (t.addPropsEquality = Ko),
            (t.addStateEquality = $o),
            (t.contextType = qo),
            t
        );
    })(Oo);
    (Zo.prototype.propEquality = {}), (Zo.prototype.stateEquality = {});
    var Xo = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), (t.contextType = qo), t;
    })(Zo);
    function Ko(e) {
        var t = Object.create(this.prototype.propEquality);
        r(t, e), (this.prototype.propEquality = t);
    }
    function $o(e) {
        var t = Object.create(this.prototype.stateEquality);
        r(t, e), (this.prototype.stateEquality = t);
    }
    function Jo(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
    }
    var Qo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.uid = Xe()), t;
        }
        return (
            n(t, e),
            (t.prototype.prepareHits = function () {}),
            (t.prototype.queryHit = function (e, t, n, r) {
                return null;
            }),
            (t.prototype.isValidSegDownEl = function (e) {
                return (
                    !this.props.eventDrag &&
                    !this.props.eventResize &&
                    !Pe(e, ".fc-event-mirror")
                );
            }),
            (t.prototype.isValidDateDownEl = function (e) {
                return !(
                    Pe(e, ".fc-event:not(.fc-bg-event)") ||
                    Pe(e, ".fc-more-link") ||
                    Pe(e, "a[data-navlink]") ||
                    Pe(e, ".fc-popover")
                );
            }),
            t
        );
    })(Xo);
    function ei(e) {
        return {
            id: Xe(),
            deps: e.deps || [],
            reducers: e.reducers || [],
            isLoadingFuncs: e.isLoadingFuncs || [],
            contextInit: [].concat(e.contextInit || []),
            eventRefiners: e.eventRefiners || {},
            eventDefMemberAdders: e.eventDefMemberAdders || [],
            eventSourceRefiners: e.eventSourceRefiners || {},
            isDraggableTransformers: e.isDraggableTransformers || [],
            eventDragMutationMassagers: e.eventDragMutationMassagers || [],
            eventDefMutationAppliers: e.eventDefMutationAppliers || [],
            dateSelectionTransformers: e.dateSelectionTransformers || [],
            datePointTransforms: e.datePointTransforms || [],
            dateSpanTransforms: e.dateSpanTransforms || [],
            views: e.views || {},
            viewPropsTransformers: e.viewPropsTransformers || [],
            isPropsValid: e.isPropsValid || null,
            externalDefTransforms: e.externalDefTransforms || [],
            viewContainerAppends: e.viewContainerAppends || [],
            eventDropTransformers: e.eventDropTransformers || [],
            componentInteractions: e.componentInteractions || [],
            calendarInteractions: e.calendarInteractions || [],
            themeClasses: e.themeClasses || {},
            eventSourceDefs: e.eventSourceDefs || [],
            cmdFormatter: e.cmdFormatter,
            recurringTypes: e.recurringTypes || [],
            namedTimeZonedImpl: e.namedTimeZonedImpl,
            initialView: e.initialView || "",
            elementDraggingImpl: e.elementDraggingImpl,
            optionChangeHandlers: e.optionChangeHandlers || {},
            scrollGridImpl: e.scrollGridImpl || null,
            contentTypeHandlers: e.contentTypeHandlers || {},
            listenerRefiners: e.listenerRefiners || {},
            optionRefiners: e.optionRefiners || {},
            propSetHandlers: e.propSetHandlers || {},
        };
    }
    function ti() {
        var e,
            t = [],
            n = [];
        return function (o, i) {
            return (
                (e && rn(o, t) && rn(i, n)) ||
                    (e = (function (e, t) {
                        var n = {},
                            o = {
                                reducers: [],
                                isLoadingFuncs: [],
                                contextInit: [],
                                eventRefiners: {},
                                eventDefMemberAdders: [],
                                eventSourceRefiners: {},
                                isDraggableTransformers: [],
                                eventDragMutationMassagers: [],
                                eventDefMutationAppliers: [],
                                dateSelectionTransformers: [],
                                datePointTransforms: [],
                                dateSpanTransforms: [],
                                views: {},
                                viewPropsTransformers: [],
                                isPropsValid: null,
                                externalDefTransforms: [],
                                viewContainerAppends: [],
                                eventDropTransformers: [],
                                componentInteractions: [],
                                calendarInteractions: [],
                                themeClasses: {},
                                eventSourceDefs: [],
                                cmdFormatter: null,
                                recurringTypes: [],
                                namedTimeZonedImpl: null,
                                initialView: "",
                                elementDraggingImpl: null,
                                optionChangeHandlers: {},
                                scrollGridImpl: null,
                                contentTypeHandlers: {},
                                listenerRefiners: {},
                                optionRefiners: {},
                                propSetHandlers: {},
                            };
                        function i(e) {
                            for (var t = 0, a = e; t < a.length; t++) {
                                var s = a[t];
                                n[s.id] ||
                                    ((n[s.id] = !0),
                                    i(s.deps),
                                    (u = s),
                                    (o = {
                                        reducers: (l = o).reducers.concat(
                                            u.reducers
                                        ),
                                        isLoadingFuncs: l.isLoadingFuncs.concat(
                                            u.isLoadingFuncs
                                        ),
                                        contextInit: l.contextInit.concat(
                                            u.contextInit
                                        ),
                                        eventRefiners: r(
                                            r({}, l.eventRefiners),
                                            u.eventRefiners
                                        ),
                                        eventDefMemberAdders:
                                            l.eventDefMemberAdders.concat(
                                                u.eventDefMemberAdders
                                            ),
                                        eventSourceRefiners: r(
                                            r({}, l.eventSourceRefiners),
                                            u.eventSourceRefiners
                                        ),
                                        isDraggableTransformers:
                                            l.isDraggableTransformers.concat(
                                                u.isDraggableTransformers
                                            ),
                                        eventDragMutationMassagers:
                                            l.eventDragMutationMassagers.concat(
                                                u.eventDragMutationMassagers
                                            ),
                                        eventDefMutationAppliers:
                                            l.eventDefMutationAppliers.concat(
                                                u.eventDefMutationAppliers
                                            ),
                                        dateSelectionTransformers:
                                            l.dateSelectionTransformers.concat(
                                                u.dateSelectionTransformers
                                            ),
                                        datePointTransforms:
                                            l.datePointTransforms.concat(
                                                u.datePointTransforms
                                            ),
                                        dateSpanTransforms:
                                            l.dateSpanTransforms.concat(
                                                u.dateSpanTransforms
                                            ),
                                        views: r(r({}, l.views), u.views),
                                        viewPropsTransformers:
                                            l.viewPropsTransformers.concat(
                                                u.viewPropsTransformers
                                            ),
                                        isPropsValid:
                                            u.isPropsValid || l.isPropsValid,
                                        externalDefTransforms:
                                            l.externalDefTransforms.concat(
                                                u.externalDefTransforms
                                            ),
                                        viewContainerAppends:
                                            l.viewContainerAppends.concat(
                                                u.viewContainerAppends
                                            ),
                                        eventDropTransformers:
                                            l.eventDropTransformers.concat(
                                                u.eventDropTransformers
                                            ),
                                        calendarInteractions:
                                            l.calendarInteractions.concat(
                                                u.calendarInteractions
                                            ),
                                        componentInteractions:
                                            l.componentInteractions.concat(
                                                u.componentInteractions
                                            ),
                                        themeClasses: r(
                                            r({}, l.themeClasses),
                                            u.themeClasses
                                        ),
                                        eventSourceDefs:
                                            l.eventSourceDefs.concat(
                                                u.eventSourceDefs
                                            ),
                                        cmdFormatter:
                                            u.cmdFormatter || l.cmdFormatter,
                                        recurringTypes: l.recurringTypes.concat(
                                            u.recurringTypes
                                        ),
                                        namedTimeZonedImpl:
                                            u.namedTimeZonedImpl ||
                                            l.namedTimeZonedImpl,
                                        initialView:
                                            l.initialView || u.initialView,
                                        elementDraggingImpl:
                                            l.elementDraggingImpl ||
                                            u.elementDraggingImpl,
                                        optionChangeHandlers: r(
                                            r({}, l.optionChangeHandlers),
                                            u.optionChangeHandlers
                                        ),
                                        scrollGridImpl:
                                            u.scrollGridImpl ||
                                            l.scrollGridImpl,
                                        contentTypeHandlers: r(
                                            r({}, l.contentTypeHandlers),
                                            u.contentTypeHandlers
                                        ),
                                        listenerRefiners: r(
                                            r({}, l.listenerRefiners),
                                            u.listenerRefiners
                                        ),
                                        optionRefiners: r(
                                            r({}, l.optionRefiners),
                                            u.optionRefiners
                                        ),
                                        propSetHandlers: r(
                                            r({}, l.propSetHandlers),
                                            u.propSetHandlers
                                        ),
                                    }));
                            }
                            var l, u;
                        }
                        return e && i(e), i(t), o;
                    })(o, i)),
                (t = o),
                (n = i),
                e
            );
        };
    }
    var ni = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return n(t, e), t;
    })(Ao);
    function ri(e, t, n, o) {
        if (t[e]) return t[e];
        var i = (function (e, t, n, o) {
            var i = n[e],
                a = o[e],
                s = function (e) {
                    return i && null !== i[e]
                        ? i[e]
                        : a && null !== a[e]
                        ? a[e]
                        : null;
                },
                l = s("component"),
                u = s("superType"),
                c = null;
            if (u) {
                if (u === e)
                    throw new Error(
                        "Can't have a custom view type that references itself"
                    );
                c = ri(u, t, n, o);
            }
            !l && c && (l = c.component);
            if (!l) return null;
            return {
                type: e,
                component: l,
                defaults: r(r({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                overrides: r(
                    r({}, c ? c.overrides : {}),
                    a ? a.rawOptions : {}
                ),
            };
        })(e, t, n, o);
        return i && (t[e] = i), i;
    }
    (ni.prototype.classes = {
        root: "fc-theme-standard",
        tableCellShaded: "fc-cell-shaded",
        buttonGroup: "fc-button-group",
        button: "fc-button fc-button-primary",
        buttonActive: "fc-button-active",
    }),
        (ni.prototype.baseIconClass = "fc-icon"),
        (ni.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-chevron-left",
            next: "fc-icon-chevron-right",
            prevYear: "fc-icon-chevrons-left",
            nextYear: "fc-icon-chevrons-right",
        }),
        (ni.prototype.rtlIconClasses = {
            prev: "fc-icon-chevron-right",
            next: "fc-icon-chevron-left",
            prevYear: "fc-icon-chevrons-right",
            nextYear: "fc-icon-chevrons-left",
        }),
        (ni.prototype.iconOverrideOption = "buttonIcons"),
        (ni.prototype.iconOverrideCustomButtonOption = "icon"),
        (ni.prototype.iconOverridePrefix = "fc-icon-");
    var oi = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.rootElRef = Wo()),
                    (t.handleRootEl = function (e) {
                        Jo(t.rootElRef, e),
                            t.props.elRef && Jo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.hookProps;
                    return Lo(
                        li,
                        {
                            hookProps: n,
                            didMount: t.didMount,
                            willUnmount: t.willUnmount,
                            elRef: this.handleRootEl,
                        },
                        function (r) {
                            return Lo(
                                ai,
                                {
                                    hookProps: n,
                                    content: t.content,
                                    defaultContent: t.defaultContent,
                                    backupElRef: e.rootElRef,
                                },
                                function (e, o) {
                                    return t.children(
                                        r,
                                        ci(t.classNames, n),
                                        e,
                                        o
                                    );
                                }
                            );
                        }
                    );
                }),
                t
            );
        })(Xo),
        ii = zo(0);
    function ai(e) {
        return Lo(ii.Consumer, null, function (t) {
            return Lo(si, r({ renderId: t }, e));
        });
    }
    var si = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.innerElRef = Wo()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(
                        this.innerElRef,
                        this.renderInnerContent()
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateCustomContent();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.customContentInfo &&
                        this.customContentInfo.destroy &&
                        this.customContentInfo.destroy();
                }),
                (t.prototype.renderInnerContent = function () {
                    var e = this.customContentInfo,
                        t = this.getInnerContent(),
                        n = this.getContentMeta(t);
                    return (
                        e && e.contentKey === n.contentKey
                            ? e && (e.contentVal = t[n.contentKey])
                            : (e &&
                                  (e.destroy && e.destroy(),
                                  (e = this.customContentInfo = null)),
                              n.contentKey &&
                                  (e = this.customContentInfo =
                                      r(
                                          {
                                              contentKey: n.contentKey,
                                              contentVal: t[n.contentKey],
                                          },
                                          n.buildLifecycleFuncs()
                                      ))),
                        e ? [] : t
                    );
                }),
                (t.prototype.getInnerContent = function () {
                    var e = this.props,
                        t = di(e.content, e.hookProps);
                    return (
                        void 0 === t && (t = di(e.defaultContent, e.hookProps)),
                        null == t ? null : t
                    );
                }),
                (t.prototype.getContentMeta = function (e) {
                    var t = this.context.pluginHooks.contentTypeHandlers,
                        n = "",
                        r = null;
                    if (e)
                        for (var o in t)
                            if (void 0 !== e[o]) {
                                (n = o), (r = t[o]);
                                break;
                            }
                    return { contentKey: n, buildLifecycleFuncs: r };
                }),
                (t.prototype.updateCustomContent = function () {
                    this.customContentInfo &&
                        this.customContentInfo.render(
                            this.innerElRef.current ||
                                this.props.backupElRef.current,
                            this.customContentInfo.contentVal
                        );
                }),
                t
            );
        })(Xo),
        li = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), t.props.elRef && Jo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.children(this.handleRootEl);
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props.didMount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                (t.prototype.componentWillUnmount = function () {
                    var e = this.props.willUnmount;
                    e && e(r(r({}, this.props.hookProps), { el: this.rootEl }));
                }),
                t
            );
        })(Xo);
    function ui() {
        var e,
            t,
            n = [];
        return function (r, o) {
            return (
                (t && Ot(t, o) && r === e) ||
                    ((e = r), (t = o), (n = ci(r, o))),
                n
            );
        };
    }
    function ci(e, t) {
        return "function" == typeof e && (e = e(t)), Ln(e);
    }
    function di(e, t) {
        return "function" == typeof e ? e(t, Lo) : e;
    }
    var pi = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.normalizeClassNames = ui()), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = { view: t.viewApi },
                    o = this.normalizeClassNames(n.viewClassNames, r);
                return Lo(
                    li,
                    {
                        hookProps: r,
                        didMount: n.viewDidMount,
                        willUnmount: n.viewWillUnmount,
                        elRef: e.elRef,
                    },
                    function (t) {
                        return e.children(
                            t,
                            [
                                "fc-" + e.viewSpec.type + "-view",
                                "fc-view",
                            ].concat(o)
                        );
                    }
                );
            }),
            t
        );
    })(Xo);
    function fi(e) {
        return Nt(e, hi);
    }
    function hi(e) {
        var t,
            n = "function" == typeof e ? { component: e } : e,
            o = n.component;
        return (
            n.content &&
                ((t = n),
                (o = function (e) {
                    return Lo(qo.Consumer, null, function (n) {
                        return Lo(
                            pi,
                            { viewSpec: n.viewSpec },
                            function (o, i) {
                                var a = r(r({}, e), {
                                    nextDayThreshold:
                                        n.options.nextDayThreshold,
                                });
                                return Lo(
                                    oi,
                                    {
                                        hookProps: a,
                                        classNames: t.classNames,
                                        content: t.content,
                                        didMount: t.didMount,
                                        willUnmount: t.willUnmount,
                                        elRef: o,
                                    },
                                    function (e, t, n, r) {
                                        return Lo(
                                            "div",
                                            {
                                                className: i
                                                    .concat(t)
                                                    .join(" "),
                                                ref: e,
                                            },
                                            r
                                        );
                                    }
                                );
                            }
                        );
                    });
                })),
            { superType: n.type, component: o, rawOptions: n }
        );
    }
    function vi(e, t, n, o) {
        var i = fi(e),
            a = fi(t.views),
            s = (function (e, t) {
                var n,
                    r = {};
                for (n in e) ri(n, r, e, t);
                for (n in t) ri(n, r, e, t);
                return r;
            })(i, a);
        return Nt(s, function (e) {
            return (function (e, t, n, o, i) {
                var a =
                        e.overrides.duration ||
                        e.defaults.duration ||
                        o.duration ||
                        n.duration,
                    s = null,
                    l = "",
                    u = "",
                    c = {};
                if (
                    a &&
                    ((s = (function (e) {
                        var t = JSON.stringify(e),
                            n = gi[t];
                        void 0 === n && ((n = Gt(e)), (gi[t] = n));
                        return n;
                    })(a)),
                    s)
                ) {
                    var d = Jt(s);
                    (l = d.unit),
                        1 === d.value &&
                            ((u = l), (c = t[l] ? t[l].rawOptions : {}));
                }
                var p = function (t) {
                        var n = t.buttonText || {},
                            r = e.defaults.buttonTextKey;
                        return null != r && null != n[r]
                            ? n[r]
                            : null != n[e.type]
                            ? n[e.type]
                            : null != n[u]
                            ? n[u]
                            : null;
                    },
                    f = function (t) {
                        var n = t.buttonHints || {},
                            r = e.defaults.buttonTextKey;
                        return null != r && null != n[r]
                            ? n[r]
                            : null != n[e.type]
                            ? n[e.type]
                            : null != n[u]
                            ? n[u]
                            : null;
                    };
                return {
                    type: e.type,
                    component: e.component,
                    duration: s,
                    durationUnit: l,
                    singleUnit: u,
                    optionDefaults: e.defaults,
                    optionOverrides: r(r({}, c), e.overrides),
                    buttonTextOverride: p(o) || p(n) || e.overrides.buttonText,
                    buttonTextDefault:
                        p(i) || e.defaults.buttonText || p(wn) || e.type,
                    buttonTitleOverride: f(o) || f(n) || e.overrides.buttonHint,
                    buttonTitleDefault: f(i) || e.defaults.buttonHint || f(wn),
                };
            })(e, a, t, n, o);
        });
    }
    var gi = {};
    var mi = (function () {
        function e(e) {
            (this.props = e),
                (this.nowDate = Ur(e.nowInput, e.dateEnv)),
                this.initHiddenDays();
        }
        return (
            (e.prototype.buildPrev = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.subtract(
                        r.startOf(t, e.currentRangeUnit),
                        e.dateIncrement
                    );
                return this.build(o, -1, n);
            }),
            (e.prototype.buildNext = function (e, t, n) {
                var r = this.props.dateEnv,
                    o = r.add(
                        r.startOf(t, e.currentRangeUnit),
                        e.dateIncrement
                    );
                return this.build(o, 1, n);
            }),
            (e.prototype.build = function (e, t, n) {
                void 0 === n && (n = !0);
                var r,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c,
                    d = this.props;
                return (
                    (r = this.buildValidRange()),
                    (r = this.trimHiddenDays(r)),
                    n &&
                        ((u = e),
                        (e =
                            null != (c = r).start && u < c.start
                                ? c.start
                                : null != c.end && u >= c.end
                                ? new Date(c.end.valueOf() - 1)
                                : u)),
                    (o = this.buildCurrentRangeInfo(e, t)),
                    (i = /^(year|month|week|day)$/.test(o.unit)),
                    (a = this.buildRenderRange(
                        this.trimHiddenDays(o.range),
                        o.unit,
                        i
                    )),
                    (s = a = this.trimHiddenDays(a)),
                    d.showNonCurrentDates || (s = nr(s, o.range)),
                    (s = nr((s = this.adjustActiveRange(s)), r)),
                    (l = or(o.range, r)),
                    {
                        validRange: r,
                        currentRange: o.range,
                        currentRangeUnit: o.unit,
                        isRangeAllDay: i,
                        activeRange: s,
                        renderRange: a,
                        slotMinTime: d.slotMinTime,
                        slotMaxTime: d.slotMaxTime,
                        isValid: l,
                        dateIncrement: this.buildDateIncrement(o.duration),
                    }
                );
            }),
            (e.prototype.buildValidRange = function () {
                var e = this.props.validRangeInput,
                    t =
                        "function" == typeof e
                            ? e.call(this.props.calendarApi, this.nowDate)
                            : e;
                return this.refineRange(t) || { start: null, end: null };
            }),
            (e.prototype.buildCurrentRangeInfo = function (e, t) {
                var n,
                    r = this.props,
                    o = null,
                    i = null,
                    a = null;
                return (
                    r.duration
                        ? ((o = r.duration),
                          (i = r.durationUnit),
                          (a = this.buildRangeFromDuration(e, t, o, i)))
                        : (n = this.props.dayCount)
                        ? ((i = "day"),
                          (a = this.buildRangeFromDayCount(e, t, n)))
                        : (a = this.buildCustomVisibleRange(e))
                        ? (i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit)
                        : ((i = Jt((o = this.getFallbackDuration())).unit),
                          (a = this.buildRangeFromDuration(e, t, o, i))),
                    { duration: o, unit: i, range: a }
                );
            }),
            (e.prototype.getFallbackDuration = function () {
                return Gt({ day: 1 });
            }),
            (e.prototype.adjustActiveRange = function (e) {
                var t = this.props,
                    n = t.dateEnv,
                    r = t.usesMinMaxTime,
                    o = t.slotMinTime,
                    i = t.slotMaxTime,
                    a = e.start,
                    s = e.end;
                return (
                    r &&
                        (Xt(o) < 0 && ((a = bt(a)), (a = n.add(a, o))),
                        Xt(i) > 1 &&
                            ((s = ft((s = bt(s)), -1)), (s = n.add(s, i)))),
                    { start: a, end: s }
                );
            }),
            (e.prototype.buildRangeFromDuration = function (e, t, n, r) {
                var o,
                    i,
                    a,
                    s = this.props,
                    l = s.dateEnv,
                    u = s.dateAlignment;
                if (!u) {
                    var c = this.props.dateIncrement;
                    u = c && Kt(c) < Kt(n) ? Jt(c).unit : r;
                }
                function d() {
                    (o = l.startOf(e, u)),
                        (i = l.add(o, n)),
                        (a = { start: o, end: i });
                }
                return (
                    Xt(n) <= 1 &&
                        this.isHiddenDay(o) &&
                        (o = bt((o = this.skipHiddenDays(o, t)))),
                    d(),
                    this.trimHiddenDays(a) ||
                        ((e = this.skipHiddenDays(e, t)), d()),
                    a
                );
            }),
            (e.prototype.buildRangeFromDayCount = function (e, t, n) {
                var r,
                    o = this.props,
                    i = o.dateEnv,
                    a = o.dateAlignment,
                    s = 0,
                    l = e;
                a && (l = i.startOf(l, a)),
                    (l = bt(l)),
                    (r = l = this.skipHiddenDays(l, t));
                do {
                    (r = ft(r, 1)), this.isHiddenDay(r) || (s += 1);
                } while (s < n);
                return { start: l, end: r };
            }),
            (e.prototype.buildCustomVisibleRange = function (e) {
                var t = this.props,
                    n = t.visibleRangeInput,
                    r =
                        "function" == typeof n
                            ? n.call(t.calendarApi, t.dateEnv.toDate(e))
                            : n,
                    o = this.refineRange(r);
                return !o || (null != o.start && null != o.end) ? o : null;
            }),
            (e.prototype.buildRenderRange = function (e, t, n) {
                return e;
            }),
            (e.prototype.buildDateIncrement = function (e) {
                var t,
                    n = this.props.dateIncrement;
                return (
                    n ||
                    ((t = this.props.dateAlignment)
                        ? Gt(1, t)
                        : e || Gt({ days: 1 }))
                );
            }),
            (e.prototype.refineRange = function (e) {
                if (e) {
                    var t =
                        ((n = e),
                        (r = this.props.dateEnv),
                        (o = null),
                        (i = null),
                        n.start && (o = r.createMarker(n.start)),
                        n.end && (i = r.createMarker(n.end)),
                        o || i
                            ? o && i && i < o
                                ? null
                                : { start: o, end: i }
                            : null);
                    return t && (t = $n(t)), t;
                }
                var n, r, o, i;
                return null;
            }),
            (e.prototype.initHiddenDays = function () {
                var e,
                    t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                for (
                    !1 === this.props.weekends && t.push(0, 6), e = 0;
                    e < 7;
                    e += 1
                )
                    (n[e] = -1 !== t.indexOf(e)) || (r += 1);
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n;
            }),
            (e.prototype.trimHiddenDays = function (e) {
                var t = e.start,
                    n = e.end;
                return (
                    t && (t = this.skipHiddenDays(t)),
                    n && (n = this.skipHiddenDays(n, -1, !0)),
                    null == t || null == n || t < n
                        ? { start: t, end: n }
                        : null
                );
            }),
            (e.prototype.isHiddenDay = function (e) {
                return (
                    e instanceof Date && (e = e.getUTCDay()),
                    this.isHiddenDayHash[e]
                );
            }),
            (e.prototype.skipHiddenDays = function (e, t, n) {
                for (
                    void 0 === t && (t = 1), void 0 === n && (n = !1);
                    this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];

                )
                    e = ft(e, t);
                return e;
            }),
            e
        );
    })();
    function yi(e, t, n) {
        var r = t ? t.activeRange : null;
        return Si(
            {},
            (function (e, t) {
                var n = Lr(t),
                    r = [].concat(e.eventSources || []),
                    o = [];
                e.initialEvents && r.unshift(e.initialEvents);
                e.events && r.unshift(e.events);
                for (var i = 0, a = r; i < a.length; i++) {
                    var s = Or(a[i], t, n);
                    s && o.push(s);
                }
                return o;
            })(e, n),
            r,
            n
        );
    }
    function Ei(e, t, n, o) {
        var i,
            a,
            s = n ? n.activeRange : null;
        switch (t.type) {
            case "ADD_EVENT_SOURCES":
                return Si(e, t.sources, s, o);
            case "REMOVE_EVENT_SOURCE":
                return (
                    (i = e),
                    (a = t.sourceId),
                    Pt(i, function (e) {
                        return e.sourceId !== a;
                    })
                );
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return n ? wi(e, s, o) : e;
            case "FETCH_EVENT_SOURCES":
                return Di(
                    e,
                    t.sourceIds ? Ht(t.sourceIds) : xi(e, o),
                    s,
                    t.isRefetch || !1,
                    o
                );
            case "RECEIVE_EVENTS":
            case "RECEIVE_EVENT_ERROR":
                return (function (e, t, n, o) {
                    var i,
                        a = e[t];
                    if (a && n === a.latestFetchId)
                        return r(
                            r({}, e),
                            (((i = {})[t] = r(r({}, a), {
                                isFetching: !1,
                                fetchRange: o,
                            })),
                            i)
                        );
                    return e;
                })(e, t.sourceId, t.fetchId, t.fetchRange);
            case "REMOVE_ALL_EVENT_SOURCES":
                return {};
            default:
                return e;
        }
    }
    function bi(e) {
        for (var t in e) if (e[t].isFetching) return !0;
        return !1;
    }
    function Si(e, t, n, o) {
        for (var i = {}, a = 0, s = t; a < s.length; a++) {
            var l = s[a];
            i[l.sourceId] = l;
        }
        return n && (i = wi(i, n, o)), r(r({}, e), i);
    }
    function wi(e, t, n) {
        return Di(
            e,
            Pt(e, function (e) {
                return (function (e, t, n) {
                    if (!Ci(e, n)) return !e.latestFetchId;
                    return (
                        !n.options.lazyFetching ||
                        !e.fetchRange ||
                        e.isFetching ||
                        t.start < e.fetchRange.start ||
                        t.end > e.fetchRange.end
                    );
                })(e, t, n);
            }),
            t,
            !1,
            n
        );
    }
    function Di(e, t, n, r, o) {
        var i = {};
        for (var a in e) {
            var s = e[a];
            t[a] ? (i[a] = Ti(s, n, r, o)) : (i[a] = s);
        }
        return i;
    }
    function Ti(e, t, n, o) {
        var i = o.options,
            a = o.calendarApi,
            s = o.pluginHooks.eventSourceDefs[e.sourceDefId],
            l = Xe();
        return (
            s.fetch(
                { eventSource: e, range: t, isRefetch: n, context: o },
                function (n) {
                    var r = n.rawEvents;
                    i.eventSourceSuccess &&
                        (r = i.eventSourceSuccess.call(a, r, n.xhr) || r),
                        e.success && (r = e.success.call(a, r, n.xhr) || r),
                        o.dispatch({
                            type: "RECEIVE_EVENTS",
                            sourceId: e.sourceId,
                            fetchId: l,
                            fetchRange: t,
                            rawEvents: r,
                        });
                },
                function (n) {
                    console.warn(n.message, n),
                        i.eventSourceFailure && i.eventSourceFailure.call(a, n),
                        e.failure && e.failure(n),
                        o.dispatch({
                            type: "RECEIVE_EVENT_ERROR",
                            sourceId: e.sourceId,
                            fetchId: l,
                            fetchRange: t,
                            error: n,
                        });
                }
            ),
            r(r({}, e), { isFetching: !0, latestFetchId: l })
        );
    }
    function xi(e, t) {
        return Pt(e, function (e) {
            return Ci(e, t);
        });
    }
    function Ci(e, t) {
        return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
    }
    function ki(e, t, n, r, o) {
        switch (t.type) {
            case "RECEIVE_EVENTS":
                return (function (e, t, n, r, o, i) {
                    if (t && n === t.latestFetchId) {
                        var a = In(
                            (function (e, t, n) {
                                var r = n.options.eventDataTransform,
                                    o = t ? t.eventDataTransform : null;
                                o && (e = _i(e, o));
                                r && (e = _i(e, r));
                                return e;
                            })(o, t, i),
                            t,
                            i
                        );
                        return r && (a = zt(a, r, i)), An(Ri(e, t.sourceId), a);
                    }
                    return e;
                })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, o);
            case "ADD_EVENTS":
                return (function (e, t, n, r) {
                    n && (t = zt(t, n, r));
                    return An(e, t);
                })(e, t.eventStore, r ? r.activeRange : null, o);
            case "RESET_EVENTS":
                return t.eventStore;
            case "MERGE_EVENTS":
                return An(e, t.eventStore);
            case "PREV":
            case "NEXT":
            case "CHANGE_DATE":
            case "CHANGE_VIEW_TYPE":
                return r ? zt(e, r.activeRange, o) : e;
            case "REMOVE_EVENTS":
                return (function (e, t) {
                    var n = e.defs,
                        r = e.instances,
                        o = {},
                        i = {};
                    for (var a in n) t.defs[a] || (o[a] = n[a]);
                    for (var s in r)
                        !t.instances[s] && o[r[s].defId] && (i[s] = r[s]);
                    return { defs: o, instances: i };
                })(e, t.eventStore);
            case "REMOVE_EVENT_SOURCE":
                return Ri(e, t.sourceId);
            case "REMOVE_ALL_EVENT_SOURCES":
                return On(e, function (e) {
                    return !e.sourceId;
                });
            case "REMOVE_ALL_EVENTS":
                return { defs: {}, instances: {} };
            default:
                return e;
        }
    }
    function _i(e, t) {
        var n;
        if (t) {
            n = [];
            for (var r = 0, o = e; r < o.length; r++) {
                var i = o[r],
                    a = t(i);
                a ? n.push(a) : null == a && n.push(i);
            }
        } else n = e;
        return n;
    }
    function Ri(e, t) {
        return On(e, function (e) {
            return e.sourceId !== t;
        });
    }
    function Mi(e, t) {
        switch (t.type) {
            case "UNSELECT_DATES":
                return null;
            case "SELECT_DATES":
                return t.selection;
            default:
                return e;
        }
    }
    function Ii(e, t) {
        switch (t.type) {
            case "UNSELECT_EVENT":
                return "";
            case "SELECT_EVENT":
                return t.eventInstanceId;
            default:
                return e;
        }
    }
    function Pi(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_DRAG":
                return null;
            case "SET_EVENT_DRAG":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                };
            default:
                return e;
        }
    }
    function Ni(e, t) {
        var n;
        switch (t.type) {
            case "UNSET_EVENT_RESIZE":
                return null;
            case "SET_EVENT_RESIZE":
                return {
                    affectedEvents: (n = t.state).affectedEvents,
                    mutatedEvents: n.mutatedEvents,
                    isEvent: n.isEvent,
                };
            default:
                return e;
        }
    }
    function Hi(e, t, n, r, o) {
        return {
            header: e.headerToolbar ? Ai(e.headerToolbar, e, t, n, r, o) : null,
            footer: e.footerToolbar ? Ai(e.footerToolbar, e, t, n, r, o) : null,
        };
    }
    function Ai(e, t, n, r, o, i) {
        var a = {},
            s = [],
            l = !1;
        for (var u in e) {
            var c = Oi(e[u], t, n, r, o, i);
            (a[u] = c.widgets),
                s.push.apply(s, c.viewsWithButtons),
                (l = l || c.hasTitle);
        }
        return { sectionWidgets: a, viewsWithButtons: s, hasTitle: l };
    }
    function Oi(e, t, n, r, o, i) {
        var a = "rtl" === t.direction,
            s = t.customButtons || {},
            l = n.buttonText || {},
            u = t.buttonText || {},
            c = n.buttonHints || {},
            d = t.buttonHints || {},
            p = e ? e.split(" ") : [],
            f = [],
            h = !1;
        return {
            widgets: p.map(function (e) {
                return e.split(",").map(function (e) {
                    if ("title" === e) return (h = !0), { buttonName: e };
                    var n, p, v, g, m, y;
                    if ((n = s[e]))
                        (v = function (e) {
                            n.click && n.click.call(e.target, e, e.target);
                        }),
                            (g = r.getCustomButtonIconClass(n)) ||
                                (g = r.getIconClass(e, a)) ||
                                (m = n.text),
                            (y = n.hint || n.text);
                    else if ((p = o[e])) {
                        f.push(e),
                            (v = function () {
                                i.changeView(e);
                            }),
                            (m = p.buttonTextOverride) ||
                                (g = r.getIconClass(e, a)) ||
                                (m = p.buttonTextDefault);
                        var E = p.buttonTextOverride || p.buttonTextDefault;
                        y = st(
                            p.buttonTitleOverride ||
                                p.buttonTitleDefault ||
                                t.viewHint,
                            [E, e],
                            E
                        );
                    } else if (i[e])
                        if (
                            ((v = function () {
                                i[e]();
                            }),
                            (m = l[e]) ||
                                (g = r.getIconClass(e, a)) ||
                                (m = u[e]),
                            "prevYear" === e || "nextYear" === e)
                        ) {
                            var b = "prevYear" === e ? "prev" : "next";
                            y = st(
                                c[b] || d[b],
                                [u.year || "year", "year"],
                                u[e]
                            );
                        } else
                            y = function (t) {
                                return st(c[e] || d[e], [u[t] || t, t], u[e]);
                            };
                    return {
                        buttonName: e,
                        buttonClick: v,
                        buttonIcon: g,
                        buttonText: m,
                        buttonHint: y,
                    };
                });
            }),
            viewsWithButtons: f,
            hasTitle: h,
        };
    }
    function Li(e, t, n, r, o) {
        var i = null;
        "GET" === (e = e.toUpperCase())
            ? (t = (function (e, t) {
                  return e + (-1 === e.indexOf("?") ? "?" : "&") + Ui(t);
              })(t, n))
            : (i = Ui(n));
        var a = new XMLHttpRequest();
        a.open(e, t, !0),
            "GET" !== e &&
                a.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                ),
            (a.onload = function () {
                if (a.status >= 200 && a.status < 400) {
                    var e = !1,
                        t = void 0;
                    try {
                        (t = JSON.parse(a.responseText)), (e = !0);
                    } catch (e) {}
                    e ? r(t, a) : o("Failure parsing JSON", a);
                } else o("Request failed", a);
            }),
            (a.onerror = function () {
                o("Request failed", a);
            }),
            a.send(i);
    }
    function Ui(e) {
        var t = [];
        for (var n in e)
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&");
    }
    function Wi(e, t) {
        for (
            var n = At(t.getCurrentData().eventSources), r = [], o = 0, i = e;
            o < i.length;
            o++
        ) {
            for (var a = i[o], s = !1, l = 0; l < n.length; l += 1)
                if (n[l]._raw === a) {
                    n.splice(l, 1), (s = !0);
                    break;
                }
            s || r.push(a);
        }
        for (var u = 0, c = n; u < c.length; u++) {
            var d = c[u];
            t.dispatch({ type: "REMOVE_EVENT_SOURCE", sourceId: d.sourceId });
        }
        for (var p = 0, f = r; p < f.length; p++) {
            var h = f[p];
            t.calendarApi.addEventSource(h);
        }
    }
    var Vi = [
        ei({
            eventSourceDefs: [
                {
                    ignoreRange: !0,
                    parseMeta: function (e) {
                        return Array.isArray(e.events) ? e.events : null;
                    },
                    fetch: function (e, t) {
                        t({ rawEvents: e.eventSource.meta });
                    },
                },
            ],
        }),
        ei({
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return "function" == typeof e.events ? e.events : null;
                    },
                    fetch: function (e, t, n) {
                        var r = e.context.dateEnv;
                        Ro(
                            e.eventSource.meta.bind(null, Cr(e.range, r)),
                            function (e) {
                                t({ rawEvents: e });
                            },
                            n
                        );
                    },
                },
            ],
        }),
        ei({
            eventSourceRefiners: {
                method: String,
                extraParams: Mn,
                startParam: String,
                endParam: String,
                timeZoneParam: String,
            },
            eventSourceDefs: [
                {
                    parseMeta: function (e) {
                        return !e.url || ("json" !== e.format && e.format)
                            ? null
                            : {
                                  url: e.url,
                                  format: "json",
                                  method: (e.method || "GET").toUpperCase(),
                                  extraParams: e.extraParams,
                                  startParam: e.startParam,
                                  endParam: e.endParam,
                                  timeZoneParam: e.timeZoneParam,
                              };
                    },
                    fetch: function (e, t, n) {
                        var o = e.eventSource.meta,
                            i = (function (e, t, n) {
                                var o,
                                    i,
                                    a,
                                    s,
                                    l = n.dateEnv,
                                    u = n.options,
                                    c = {};
                                (o = e.startParam),
                                    null == o && (o = u.startParam);
                                (i = e.endParam), null == i && (i = u.endParam);
                                (a = e.timeZoneParam),
                                    null == a && (a = u.timeZoneParam);
                                s =
                                    "function" == typeof e.extraParams
                                        ? e.extraParams()
                                        : e.extraParams || {};
                                r(c, s),
                                    (c[o] = l.formatIso(t.start)),
                                    (c[i] = l.formatIso(t.end)),
                                    "local" !== l.timeZone &&
                                        (c[a] = l.timeZone);
                                return c;
                            })(o, e.range, e.context);
                        Li(
                            o.method,
                            o.url,
                            i,
                            function (e, n) {
                                t({ rawEvents: e, xhr: n });
                            },
                            function (e, t) {
                                n({ message: e, xhr: t });
                            }
                        );
                    },
                },
            ],
        }),
        ei({
            recurringTypes: [
                {
                    parse: function (e, t) {
                        if (
                            e.daysOfWeek ||
                            e.startTime ||
                            e.endTime ||
                            e.startRecur ||
                            e.endRecur
                        ) {
                            var n = {
                                    daysOfWeek: e.daysOfWeek || null,
                                    startTime: e.startTime || null,
                                    endTime: e.endTime || null,
                                    startRecur: e.startRecur
                                        ? t.createMarker(e.startRecur)
                                        : null,
                                    endRecur: e.endRecur
                                        ? t.createMarker(e.endRecur)
                                        : null,
                                },
                                r = void 0;
                            return (
                                e.duration && (r = e.duration),
                                !r &&
                                    e.startTime &&
                                    e.endTime &&
                                    ((o = e.endTime),
                                    (i = e.startTime),
                                    (r = {
                                        years: o.years - i.years,
                                        months: o.months - i.months,
                                        days: o.days - i.days,
                                        milliseconds:
                                            o.milliseconds - i.milliseconds,
                                    })),
                                {
                                    allDayGuess: Boolean(
                                        !e.startTime && !e.endTime
                                    ),
                                    duration: r,
                                    typeData: n,
                                }
                            );
                        }
                        var o, i;
                        return null;
                    },
                    expand: function (e, t, n) {
                        var r = nr(t, { start: e.startRecur, end: e.endRecur });
                        return r
                            ? (function (e, t, n, r) {
                                  var o = e ? Ht(e) : null,
                                      i = bt(n.start),
                                      a = n.end,
                                      s = [];
                                  for (; i < a; ) {
                                      var l = void 0;
                                      (o && !o[i.getUTCDay()]) ||
                                          ((l = t ? r.add(i, t) : i),
                                          s.push(l)),
                                          (i = ft(i, 1));
                                  }
                                  return s;
                              })(e.daysOfWeek, e.startTime, r, n)
                            : [];
                    },
                },
            ],
            eventRefiners: {
                daysOfWeek: Mn,
                startTime: Gt,
                endTime: Gt,
                duration: Gt,
                startRecur: Mn,
                endRecur: Mn,
            },
        }),
        ei({
            optionChangeHandlers: {
                events: function (e, t) {
                    Wi([e], t);
                },
                eventSources: Wi,
            },
        }),
        ei({
            isLoadingFuncs: [
                function (e) {
                    return bi(e.eventSources);
                },
            ],
            contentTypeHandlers: {
                html: function () {
                    var e = null,
                        t = "";
                    return {
                        render: function (n, r) {
                            (n === e && r === t) || (n.innerHTML = r),
                                (e = n),
                                (t = r);
                        },
                        destroy: function () {
                            (e.innerHTML = ""), (e = null), (t = "");
                        },
                    };
                },
                domNodes: function () {
                    var e = null,
                        t = [];
                    function n() {
                        t.forEach(Ie), (t = []), (e = null);
                    }
                    return {
                        render: function (r, o) {
                            var i = Array.prototype.slice.call(o);
                            if (r !== e || !rn(t, i)) {
                                for (var a = 0, s = i; a < s.length; a++) {
                                    var l = s[a];
                                    r.appendChild(l);
                                }
                                n();
                            }
                            (e = r), (t = i);
                        },
                        destroy: n,
                    };
                },
            },
            propSetHandlers: {
                dateProfile: function (e, t) {
                    t.emitter.trigger(
                        "datesSet",
                        r(r({}, Cr(e.activeRange, t.dateEnv)), {
                            view: t.viewApi,
                        })
                    );
                },
                eventStore: function (e, t) {
                    var n = t.emitter;
                    n.hasHandlers("eventsSet") &&
                        n.trigger("eventsSet", Fr(e, t));
                },
            },
        }),
    ];
    var zi = (function () {
            function e(e) {
                (this.drainedOption = e),
                    (this.isRunning = !1),
                    (this.isDirty = !1),
                    (this.pauseDepths = {}),
                    (this.timeoutId = 0);
            }
            return (
                (e.prototype.request = function (e) {
                    (this.isDirty = !0),
                        this.isPaused() ||
                            (this.clearTimeout(),
                            null == e
                                ? this.tryDrain()
                                : (this.timeoutId = setTimeout(
                                      this.tryDrain.bind(this),
                                      e
                                  )));
                }),
                (e.prototype.pause = function (e) {
                    void 0 === e && (e = "");
                    var t = this.pauseDepths;
                    (t[e] = (t[e] || 0) + 1), this.clearTimeout();
                }),
                (e.prototype.resume = function (e, t) {
                    void 0 === e && (e = "");
                    var n = this.pauseDepths;
                    if (e in n) {
                        if (t) delete n[e];
                        else (n[e] -= 1), n[e] <= 0 && delete n[e];
                        this.tryDrain();
                    }
                }),
                (e.prototype.isPaused = function () {
                    return Object.keys(this.pauseDepths).length;
                }),
                (e.prototype.tryDrain = function () {
                    if (!this.isRunning && !this.isPaused()) {
                        for (this.isRunning = !0; this.isDirty; )
                            (this.isDirty = !1), this.drained();
                        this.isRunning = !1;
                    }
                }),
                (e.prototype.clear = function () {
                    this.clearTimeout(),
                        (this.isDirty = !1),
                        (this.pauseDepths = {});
                }),
                (e.prototype.clearTimeout = function () {
                    this.timeoutId &&
                        (clearTimeout(this.timeoutId), (this.timeoutId = 0));
                }),
                (e.prototype.drained = function () {
                    this.drainedOption && this.drainedOption();
                }),
                e
            );
        })(),
        Fi = (function () {
            function e(e, t) {
                (this.runTaskOption = e),
                    (this.drainedOption = t),
                    (this.queue = []),
                    (this.delayedRunner = new zi(this.drain.bind(this)));
            }
            return (
                (e.prototype.request = function (e, t) {
                    this.queue.push(e), this.delayedRunner.request(t);
                }),
                (e.prototype.pause = function (e) {
                    this.delayedRunner.pause(e);
                }),
                (e.prototype.resume = function (e, t) {
                    this.delayedRunner.resume(e, t);
                }),
                (e.prototype.drain = function () {
                    for (var e = this.queue; e.length; ) {
                        for (var t = [], n = void 0; (n = e.shift()); )
                            this.runTask(n), t.push(n);
                        this.drained(t);
                    }
                }),
                (e.prototype.runTask = function (e) {
                    this.runTaskOption && this.runTaskOption(e);
                }),
                (e.prototype.drained = function (e) {
                    this.drainedOption && this.drainedOption(e);
                }),
                e
            );
        })();
    function Bi(e, t, n) {
        var r;
        return (
            (r = /^(year|month)$/.test(e.currentRangeUnit)
                ? e.currentRange
                : e.activeRange),
            n.formatRange(
                r.start,
                r.end,
                bn(
                    t.titleFormat ||
                        (function (e) {
                            var t = e.currentRangeUnit;
                            if ("year" === t) return { year: "numeric" };
                            if ("month" === t)
                                return { year: "numeric", month: "long" };
                            var n = Et(
                                e.currentRange.start,
                                e.currentRange.end
                            );
                            if (null !== n && n > 1)
                                return {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                };
                            return {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            };
                        })(e)
                ),
                {
                    isEndExclusive: e.isRangeAllDay,
                    defaultSeparator: t.titleRangeSeparator,
                }
            )
        );
    }
    var ji = (function () {
        function e(e) {
            var t = this;
            (this.computeOptionsData = on(this._computeOptionsData)),
                (this.computeCurrentViewData = on(
                    this._computeCurrentViewData
                )),
                (this.organizeRawLocales = on(Jr)),
                (this.buildLocale = on(Qr)),
                (this.buildPluginHooks = ti()),
                (this.buildDateEnv = on(Gi)),
                (this.buildTheme = on(qi)),
                (this.parseToolbars = on(Hi)),
                (this.buildViewSpecs = on(vi)),
                (this.buildDateProfileGenerator = an(Yi)),
                (this.buildViewApi = on(Zi)),
                (this.buildViewUiProps = an($i)),
                (this.buildEventUiBySource = on(Xi, Ot)),
                (this.buildEventUiBases = on(Ki)),
                (this.parseContextBusinessHours = an(Qi)),
                (this.buildTitle = on(Bi)),
                (this.emitter = new Mo()),
                (this.actionRunner = new Fi(
                    this._handleAction.bind(this),
                    this.updateData.bind(this)
                )),
                (this.currentCalendarOptionsInput = {}),
                (this.currentCalendarOptionsRefined = {}),
                (this.currentViewOptionsInput = {}),
                (this.currentViewOptionsRefined = {}),
                (this.currentCalendarOptionsRefiners = {}),
                (this.getCurrentData = function () {
                    return t.data;
                }),
                (this.dispatch = function (e) {
                    t.actionRunner.request(e);
                }),
                (this.props = e),
                this.actionRunner.pause();
            var n = {},
                o = this.computeOptionsData(
                    e.optionOverrides,
                    n,
                    e.calendarApi
                ),
                i = o.calendarOptions.initialView || o.pluginHooks.initialView,
                a = this.computeCurrentViewData(i, o, e.optionOverrides, n);
            (e.calendarApi.currentDataManager = this),
                this.emitter.setThisContext(e.calendarApi),
                this.emitter.setOptions(a.options);
            var s,
                l,
                u,
                c =
                    ((s = o.calendarOptions),
                    (l = o.dateEnv),
                    null != (u = s.initialDate)
                        ? l.createMarker(u)
                        : Ur(s.now, l)),
                d = a.dateProfileGenerator.build(c);
            ar(d.activeRange, c) || (c = d.currentRange.start);
            for (
                var p = {
                        dateEnv: o.dateEnv,
                        options: o.calendarOptions,
                        pluginHooks: o.pluginHooks,
                        calendarApi: e.calendarApi,
                        dispatch: this.dispatch,
                        emitter: this.emitter,
                        getCurrentData: this.getCurrentData,
                    },
                    f = 0,
                    h = o.pluginHooks.contextInit;
                f < h.length;
                f++
            ) {
                (0, h[f])(p);
            }
            for (
                var v = yi(o.calendarOptions, d, p),
                    g = {
                        dynamicOptionOverrides: n,
                        currentViewType: i,
                        currentDate: c,
                        dateProfile: d,
                        businessHours: this.parseContextBusinessHours(p),
                        eventSources: v,
                        eventUiBases: {},
                        eventStore: { defs: {}, instances: {} },
                        renderableEventStore: { defs: {}, instances: {} },
                        dateSelection: null,
                        eventSelection: "",
                        eventDrag: null,
                        eventResize: null,
                        selectionConfig:
                            this.buildViewUiProps(p).selectionConfig,
                    },
                    m = r(r({}, p), g),
                    y = 0,
                    E = o.pluginHooks.reducers;
                y < E.length;
                y++
            ) {
                var b = E[y];
                r(g, b(null, null, m));
            }
            Ji(g, p) && this.emitter.trigger("loading", !0),
                (this.state = g),
                this.updateData(),
                this.actionRunner.resume();
        }
        return (
            (e.prototype.resetOptions = function (e, t) {
                var n = this.props;
                (n.optionOverrides = t ? r(r({}, n.optionOverrides), e) : e),
                    this.actionRunner.request({ type: "NOTHING" });
            }),
            (e.prototype._handleAction = function (e) {
                var t = this,
                    n = t.props,
                    o = t.state,
                    i = t.emitter,
                    a = (function (e, t) {
                        var n;
                        return "SET_OPTION" === t.type
                            ? r(
                                  r({}, e),
                                  (((n = {})[t.optionName] = t.rawOptionValue),
                                  n)
                              )
                            : e;
                    })(o.dynamicOptionOverrides, e),
                    s = this.computeOptionsData(
                        n.optionOverrides,
                        a,
                        n.calendarApi
                    ),
                    l = (function (e, t) {
                        "CHANGE_VIEW_TYPE" === t.type && (e = t.viewType);
                        return e;
                    })(o.currentViewType, e),
                    u = this.computeCurrentViewData(l, s, n.optionOverrides, a);
                (n.calendarApi.currentDataManager = this),
                    i.setThisContext(n.calendarApi),
                    i.setOptions(u.options);
                var c = {
                        dateEnv: s.dateEnv,
                        options: s.calendarOptions,
                        pluginHooks: s.pluginHooks,
                        calendarApi: n.calendarApi,
                        dispatch: this.dispatch,
                        emitter: i,
                        getCurrentData: this.getCurrentData,
                    },
                    d = o.currentDate,
                    p = o.dateProfile;
                this.data &&
                    this.data.dateProfileGenerator !== u.dateProfileGenerator &&
                    (p = u.dateProfileGenerator.build(d)),
                    (d = (function (e, t) {
                        return "CHANGE_DATE" === t.type ? t.dateMarker : e;
                    })(d, e)),
                    (p = (function (e, t, n, r) {
                        var o;
                        switch (t.type) {
                            case "CHANGE_VIEW_TYPE":
                                return r.build(t.dateMarker || n);
                            case "CHANGE_DATE":
                                return r.build(t.dateMarker);
                            case "PREV":
                                if ((o = r.buildPrev(e, n)).isValid) return o;
                                break;
                            case "NEXT":
                                if ((o = r.buildNext(e, n)).isValid) return o;
                        }
                        return e;
                    })(p, e, d, u.dateProfileGenerator)),
                    ("PREV" !== e.type &&
                        "NEXT" !== e.type &&
                        ar(p.currentRange, d)) ||
                        (d = p.currentRange.start);
                for (
                    var f = Ei(o.eventSources, e, p, c),
                        h = ki(o.eventStore, e, f, p, c),
                        v =
                            (bi(f) &&
                                !u.options.progressiveEventRendering &&
                                o.renderableEventStore) ||
                            h,
                        g = this.buildViewUiProps(c),
                        m = g.eventUiSingleBase,
                        y = g.selectionConfig,
                        E = this.buildEventUiBySource(f),
                        b = {
                            dynamicOptionOverrides: a,
                            currentViewType: l,
                            currentDate: d,
                            dateProfile: p,
                            eventSources: f,
                            eventStore: h,
                            renderableEventStore: v,
                            selectionConfig: y,
                            eventUiBases: this.buildEventUiBases(v.defs, m, E),
                            businessHours: this.parseContextBusinessHours(c),
                            dateSelection: Mi(o.dateSelection, e),
                            eventSelection: Ii(o.eventSelection, e),
                            eventDrag: Pi(o.eventDrag, e),
                            eventResize: Ni(o.eventResize, e),
                        },
                        S = r(r({}, c), b),
                        w = 0,
                        D = s.pluginHooks.reducers;
                    w < D.length;
                    w++
                ) {
                    var T = D[w];
                    r(b, T(o, e, S));
                }
                var x = Ji(o, c),
                    C = Ji(b, c);
                !x && C
                    ? i.trigger("loading", !0)
                    : x && !C && i.trigger("loading", !1),
                    (this.state = b),
                    n.onAction && n.onAction(e);
            }),
            (e.prototype.updateData = function () {
                var e,
                    t,
                    n,
                    o,
                    i,
                    a,
                    s,
                    l,
                    u,
                    c = this.props,
                    d = this.state,
                    p = this.data,
                    f = this.computeOptionsData(
                        c.optionOverrides,
                        d.dynamicOptionOverrides,
                        c.calendarApi
                    ),
                    h = this.computeCurrentViewData(
                        d.currentViewType,
                        f,
                        c.optionOverrides,
                        d.dynamicOptionOverrides
                    ),
                    v = (this.data = r(
                        r(
                            r(
                                {
                                    viewTitle: this.buildTitle(
                                        d.dateProfile,
                                        h.options,
                                        f.dateEnv
                                    ),
                                    calendarApi: c.calendarApi,
                                    dispatch: this.dispatch,
                                    emitter: this.emitter,
                                    getCurrentData: this.getCurrentData,
                                },
                                f
                            ),
                            h
                        ),
                        d
                    )),
                    g = f.pluginHooks.optionChangeHandlers,
                    m = p && p.calendarOptions,
                    y = f.calendarOptions;
                if (m && m !== y)
                    for (var E in (m.timeZone !== y.timeZone &&
                        ((d.eventSources = v.eventSources =
                            ((a = v.eventSources),
                            (s = d.dateProfile),
                            (l = v),
                            (u = s ? s.activeRange : null),
                            Di(a, xi(a, l), u, !0, l))),
                        (d.eventStore = v.eventStore =
                            ((e = v.eventStore),
                            (t = p.dateEnv),
                            (n = v.dateEnv),
                            (o = e.defs),
                            (i = Nt(e.instances, function (e) {
                                var i = o[e.defId];
                                return i.allDay || i.recurringDef
                                    ? e
                                    : r(r({}, e), {
                                          range: {
                                              start: n.createMarker(
                                                  t.toDate(
                                                      e.range.start,
                                                      e.forcedStartTzo
                                                  )
                                              ),
                                              end: n.createMarker(
                                                  t.toDate(
                                                      e.range.end,
                                                      e.forcedEndTzo
                                                  )
                                              ),
                                          },
                                          forcedStartTzo: n.canComputeOffset
                                              ? null
                                              : e.forcedStartTzo,
                                          forcedEndTzo: n.canComputeOffset
                                              ? null
                                              : e.forcedEndTzo,
                                      });
                            })),
                            { defs: o, instances: i }))),
                    g))
                        m[E] !== y[E] && g[E](y[E], v);
                c.onData && c.onData(v);
            }),
            (e.prototype._computeOptionsData = function (e, t, n) {
                var r = this.processRawCalendarOptions(e, t),
                    o = r.refinedOptions,
                    i = r.pluginHooks,
                    a = r.localeDefaults,
                    s = r.availableLocaleData;
                ea(r.extra);
                var l = this.buildDateEnv(
                        o.timeZone,
                        o.locale,
                        o.weekNumberCalculation,
                        o.firstDay,
                        o.weekText,
                        i,
                        s,
                        o.defaultRangeSeparator
                    ),
                    u = this.buildViewSpecs(i.views, e, t, a),
                    c = this.buildTheme(o, i);
                return {
                    calendarOptions: o,
                    pluginHooks: i,
                    dateEnv: l,
                    viewSpecs: u,
                    theme: c,
                    toolbarConfig: this.parseToolbars(o, e, c, u, n),
                    localeDefaults: a,
                    availableRawLocales: s.map,
                };
            }),
            (e.prototype.processRawCalendarOptions = function (e, t) {
                var n = _n([wn, e, t]),
                    o = n.locales,
                    i = n.locale,
                    a = this.organizeRawLocales(o),
                    s = a.map,
                    l = this.buildLocale(i || a.defaultCode, s).options,
                    u = this.buildPluginHooks(e.plugins || [], Vi),
                    c = (this.currentCalendarOptionsRefiners = r(
                        r(r(r(r({}, Sn), Dn), Tn), u.listenerRefiners),
                        u.optionRefiners
                    )),
                    d = {},
                    p = _n([wn, l, e, t]),
                    f = {},
                    h = this.currentCalendarOptionsInput,
                    v = this.currentCalendarOptionsRefined,
                    g = !1;
                for (var m in p)
                    "plugins" !== m &&
                        (p[m] === h[m] || (xn[m] && m in h && xn[m](h[m], p[m]))
                            ? (f[m] = v[m])
                            : c[m]
                            ? ((f[m] = c[m](p[m])), (g = !0))
                            : (d[m] = h[m]));
                return (
                    g &&
                        ((this.currentCalendarOptionsInput = p),
                        (this.currentCalendarOptionsRefined = f)),
                    {
                        rawOptions: this.currentCalendarOptionsInput,
                        refinedOptions: this.currentCalendarOptionsRefined,
                        pluginHooks: u,
                        availableLocaleData: a,
                        localeDefaults: l,
                        extra: d,
                    }
                );
            }),
            (e.prototype._computeCurrentViewData = function (e, t, n, r) {
                var o = t.viewSpecs[e];
                if (!o)
                    throw new Error(
                        'viewType "' +
                            e +
                            "\" is not available. Please make sure you've loaded all neccessary plugins"
                    );
                var i = this.processRawViewOptions(
                        o,
                        t.pluginHooks,
                        t.localeDefaults,
                        n,
                        r
                    ),
                    a = i.refinedOptions;
                return (
                    ea(i.extra),
                    {
                        viewSpec: o,
                        options: a,
                        dateProfileGenerator: this.buildDateProfileGenerator({
                            dateProfileGeneratorClass:
                                o.optionDefaults.dateProfileGeneratorClass,
                            duration: o.duration,
                            durationUnit: o.durationUnit,
                            usesMinMaxTime: o.optionDefaults.usesMinMaxTime,
                            dateEnv: t.dateEnv,
                            calendarApi: this.props.calendarApi,
                            slotMinTime: a.slotMinTime,
                            slotMaxTime: a.slotMaxTime,
                            showNonCurrentDates: a.showNonCurrentDates,
                            dayCount: a.dayCount,
                            dateAlignment: a.dateAlignment,
                            dateIncrement: a.dateIncrement,
                            hiddenDays: a.hiddenDays,
                            weekends: a.weekends,
                            nowInput: a.now,
                            validRangeInput: a.validRange,
                            visibleRangeInput: a.visibleRange,
                            monthMode: a.monthMode,
                            fixedWeekCount: a.fixedWeekCount,
                        }),
                        viewApi: this.buildViewApi(
                            e,
                            this.getCurrentData,
                            t.dateEnv
                        ),
                    }
                );
            }),
            (e.prototype.processRawViewOptions = function (e, t, n, o, i) {
                var a = _n([wn, e.optionDefaults, n, o, e.optionOverrides, i]),
                    s = r(
                        r(r(r(r(r({}, Sn), Dn), Tn), kn), t.listenerRefiners),
                        t.optionRefiners
                    ),
                    l = {},
                    u = this.currentViewOptionsInput,
                    c = this.currentViewOptionsRefined,
                    d = !1,
                    p = {};
                for (var f in a)
                    a[f] === u[f] || (xn[f] && xn[f](a[f], u[f]))
                        ? (l[f] = c[f])
                        : (a[f] === this.currentCalendarOptionsInput[f] ||
                          (xn[f] &&
                              xn[f](a[f], this.currentCalendarOptionsInput[f]))
                              ? f in this.currentCalendarOptionsRefined &&
                                (l[f] = this.currentCalendarOptionsRefined[f])
                              : s[f]
                              ? (l[f] = s[f](a[f]))
                              : (p[f] = a[f]),
                          (d = !0));
                return (
                    d &&
                        ((this.currentViewOptionsInput = a),
                        (this.currentViewOptionsRefined = l)),
                    {
                        rawOptions: this.currentViewOptionsInput,
                        refinedOptions: this.currentViewOptionsRefined,
                        extra: p,
                    }
                );
            }),
            e
        );
    })();
    function Gi(e, t, n, r, o, i, a, s) {
        var l = Qr(t || a.defaultCode, a.map);
        return new Zr({
            calendarSystem: "gregory",
            timeZone: e,
            namedTimeZoneImpl: i.namedTimeZonedImpl,
            locale: l,
            weekNumberCalculation: n,
            firstDay: r,
            weekText: o,
            cmdFormatter: i.cmdFormatter,
            defaultSeparator: s,
        });
    }
    function qi(e, t) {
        return new (t.themeClasses[e.themeSystem] || ni)(e);
    }
    function Yi(e) {
        return new (e.dateProfileGeneratorClass || mi)(e);
    }
    function Zi(e, t, n) {
        return new Hr(e, t, n);
    }
    function Xi(e) {
        return Nt(e, function (e) {
            return e.ui;
        });
    }
    function Ki(e, t, n) {
        var r = { "": t };
        for (var o in e) {
            var i = e[o];
            i.sourceId && n[i.sourceId] && (r[o] = n[i.sourceId]);
        }
        return r;
    }
    function $i(e) {
        var t = e.options;
        return {
            eventUiSingleBase: Vn(
                {
                    display: t.eventDisplay,
                    editable: t.editable,
                    startEditable: t.eventStartEditable,
                    durationEditable: t.eventDurationEditable,
                    constraint: t.eventConstraint,
                    overlap:
                        "boolean" == typeof t.eventOverlap
                            ? t.eventOverlap
                            : void 0,
                    allow: t.eventAllow,
                    backgroundColor: t.eventBackgroundColor,
                    borderColor: t.eventBorderColor,
                    textColor: t.eventTextColor,
                    color: t.eventColor,
                },
                e
            ),
            selectionConfig: Vn(
                {
                    constraint: t.selectConstraint,
                    overlap:
                        "boolean" == typeof t.selectOverlap
                            ? t.selectOverlap
                            : void 0,
                    allow: t.selectAllow,
                },
                e
            ),
        };
    }
    function Ji(e, t) {
        for (var n = 0, r = t.pluginHooks.isLoadingFuncs; n < r.length; n++) {
            if ((0, r[n])(e)) return !0;
        }
        return !1;
    }
    function Qi(e) {
        return oo(e.options.businessHours, e);
    }
    function ea(e, t) {
        for (var n in e)
            console.warn(
                "Unknown option '" +
                    n +
                    "'" +
                    (t ? " for view '" + t + "'" : "")
            );
    }
    var ta = (function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return (
                (n.handleData = function (e) {
                    n.dataManager ? n.setState(e) : (n.state = e);
                }),
                (n.dataManager = new ji({
                    optionOverrides: t.optionOverrides,
                    calendarApi: t.calendarApi,
                    onData: n.handleData,
                })),
                n
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                return this.props.children(this.state);
            }),
            (t.prototype.componentDidUpdate = function (e) {
                var t = this.props.optionOverrides;
                t !== e.optionOverrides && this.dataManager.resetOptions(t);
            }),
            t
        );
    })(Oo);
    var na = function (e) {
            this.timeZoneName = e;
        },
        ra = (function () {
            function e() {
                (this.strictOrder = !1),
                    (this.allowReslicing = !1),
                    (this.maxCoord = -1),
                    (this.maxStackCnt = -1),
                    (this.levelCoords = []),
                    (this.entriesByLevel = []),
                    (this.stackCnts = {});
            }
            return (
                (e.prototype.addSegs = function (e) {
                    for (var t = [], n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        this.insertEntry(o, t);
                    }
                    return t;
                }),
                (e.prototype.insertEntry = function (e, t) {
                    var n = this.findInsertion(e);
                    return this.isInsertionValid(n, e)
                        ? (this.insertEntryAt(e, n), 1)
                        : this.handleInvalidInsertion(n, e, t);
                }),
                (e.prototype.isInsertionValid = function (e, t) {
                    return (
                        (-1 === this.maxCoord ||
                            e.levelCoord + t.thickness <= this.maxCoord) &&
                        (-1 === this.maxStackCnt ||
                            e.stackCnt < this.maxStackCnt)
                    );
                }),
                (e.prototype.handleInvalidInsertion = function (e, t, n) {
                    return this.allowReslicing && e.touchingEntry
                        ? this.splitEntry(t, e.touchingEntry, n)
                        : (n.push(t), 0);
                }),
                (e.prototype.splitEntry = function (e, t, n) {
                    var r = 0,
                        i = [],
                        a = e.span,
                        s = t.span;
                    return (
                        a.start < s.start &&
                            (r += this.insertEntry(
                                {
                                    index: e.index,
                                    thickness: e.thickness,
                                    span: { start: a.start, end: s.start },
                                },
                                i
                            )),
                        a.end > s.end &&
                            (r += this.insertEntry(
                                {
                                    index: e.index,
                                    thickness: e.thickness,
                                    span: { start: s.end, end: a.end },
                                },
                                i
                            )),
                        r
                            ? (n.push.apply(
                                  n,
                                  o(
                                      [
                                          {
                                              index: e.index,
                                              thickness: e.thickness,
                                              span: la(s, a),
                                          },
                                      ],
                                      i
                                  )
                              ),
                              r)
                            : (n.push(e), 0)
                    );
                }),
                (e.prototype.insertEntryAt = function (e, t) {
                    var n = this.entriesByLevel,
                        r = this.levelCoords;
                    -1 === t.lateral
                        ? (ua(r, t.level, t.levelCoord), ua(n, t.level, [e]))
                        : ua(n[t.level], t.lateral, e),
                        (this.stackCnts[ia(e)] = t.stackCnt);
                }),
                (e.prototype.findInsertion = function (e) {
                    for (
                        var t = this,
                            n = t.levelCoords,
                            r = t.entriesByLevel,
                            o = t.strictOrder,
                            i = t.stackCnts,
                            a = n.length,
                            s = 0,
                            l = -1,
                            u = -1,
                            c = null,
                            d = 0,
                            p = 0;
                        p < a;
                        p += 1
                    ) {
                        var f = n[p];
                        if (!o && f >= s + e.thickness) break;
                        for (
                            var h = r[p],
                                v = void 0,
                                g = ca(h, e.span.start, oa),
                                m = g[0] + g[1];
                            (v = h[m]) && v.span.start < e.span.end;

                        ) {
                            var y = f + v.thickness;
                            y > s && ((s = y), (c = v), (l = p), (u = m)),
                                y === s && (d = Math.max(d, i[ia(v)] + 1)),
                                (m += 1);
                        }
                    }
                    var E = 0;
                    if (c) for (E = l + 1; E < a && n[E] < s; ) E += 1;
                    var b = -1;
                    return (
                        E < a &&
                            n[E] === s &&
                            (b = ca(r[E], e.span.end, oa)[0]),
                        {
                            touchingLevel: l,
                            touchingLateral: u,
                            touchingEntry: c,
                            stackCnt: d,
                            levelCoord: s,
                            level: E,
                            lateral: b,
                        }
                    );
                }),
                (e.prototype.toRects = function () {
                    for (
                        var e = this.entriesByLevel,
                            t = this.levelCoords,
                            n = e.length,
                            o = [],
                            i = 0;
                        i < n;
                        i += 1
                    )
                        for (
                            var a = e[i], s = t[i], l = 0, u = a;
                            l < u.length;
                            l++
                        ) {
                            var c = u[l];
                            o.push(r(r({}, c), { levelCoord: s }));
                        }
                    return o;
                }),
                e
            );
        })();
    function oa(e) {
        return e.span.end;
    }
    function ia(e) {
        return e.index + ":" + e.span.start;
    }
    function aa(e) {
        for (var t = [], n = 0, r = e; n < r.length; n++) {
            for (
                var o = r[n],
                    i = [],
                    a = { span: o.span, entries: [o] },
                    s = 0,
                    l = t;
                s < l.length;
                s++
            ) {
                var u = l[s];
                la(u.span, a.span)
                    ? (a = {
                          entries: u.entries.concat(a.entries),
                          span: sa(u.span, a.span),
                      })
                    : i.push(u);
            }
            i.push(a), (t = i);
        }
        return t;
    }
    function sa(e, t) {
        return {
            start: Math.min(e.start, t.start),
            end: Math.max(e.end, t.end),
        };
    }
    function la(e, t) {
        var n = Math.max(e.start, t.start),
            r = Math.min(e.end, t.end);
        return n < r ? { start: n, end: r } : null;
    }
    function ua(e, t, n) {
        e.splice(t, 0, n);
    }
    function ca(e, t, n) {
        var r = 0,
            o = e.length;
        if (!o || t < n(e[r])) return [0, 0];
        if (t > n(e[o - 1])) return [o, 0];
        for (; r < o; ) {
            var i = Math.floor(r + (o - r) / 2),
                a = n(e[i]);
            if (t < a) o = i;
            else {
                if (!(t > a)) return [i, 1];
                r = i + 1;
            }
        }
        return [r, 0];
    }
    var da = (function () {
        function e(e) {
            (this.component = e.component),
                (this.isHitComboAllowed = e.isHitComboAllowed || null);
        }
        return (e.prototype.destroy = function () {}), e;
    })();
    function pa(e) {
        var t;
        return ((t = {})[e.component.uid] = e), t;
    }
    var fa = {},
        ha = (function () {
            function e(e, t) {
                this.emitter = new Mo();
            }
            return (
                (e.prototype.destroy = function () {}),
                (e.prototype.setMirrorIsVisible = function (e) {}),
                (e.prototype.setMirrorNeedsRevert = function (e) {}),
                (e.prototype.setAutoScrollEnabled = function (e) {}),
                e
            );
        })(),
        va = {},
        ga = { startTime: Gt, duration: Gt, create: Boolean, sourceId: String };
    function ma(e) {
        var t = Rn(e, ga),
            n = t.refined,
            r = t.extra;
        return {
            startTime: n.startTime || null,
            duration: n.duration || null,
            create: null == n.create || n.create,
            sourceId: n.sourceId,
            leftoverProps: r,
        };
    }
    var ya = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props.widgetGroups.map(function (t) {
                            return e.renderWidgetGroup(t);
                        });
                    return Lo.apply(
                        void 0,
                        o(["div", { className: "fc-toolbar-chunk" }], t)
                    );
                }),
                (t.prototype.renderWidgetGroup = function (e) {
                    for (
                        var t = this.props,
                            n = this.context.theme,
                            r = [],
                            i = !0,
                            a = 0,
                            s = e;
                        a < s.length;
                        a++
                    ) {
                        var l = s[a],
                            u = l.buttonName,
                            c = l.buttonClick,
                            d = l.buttonText,
                            p = l.buttonIcon,
                            f = l.buttonHint;
                        if ("title" === u)
                            (i = !1),
                                r.push(
                                    Lo(
                                        "h2",
                                        {
                                            className: "fc-toolbar-title",
                                            id: t.titleId,
                                        },
                                        t.title
                                    )
                                );
                        else {
                            var h = u === t.activeButton,
                                v =
                                    (!t.isTodayEnabled && "today" === u) ||
                                    (!t.isPrevEnabled && "prev" === u) ||
                                    (!t.isNextEnabled && "next" === u),
                                g = [
                                    "fc-" + u + "-button",
                                    n.getClass("button"),
                                ];
                            h && g.push(n.getClass("buttonActive")),
                                r.push(
                                    Lo(
                                        "button",
                                        {
                                            type: "button",
                                            title:
                                                "function" == typeof f
                                                    ? f(t.navUnit)
                                                    : f,
                                            disabled: v,
                                            "aria-pressed": h,
                                            className: g.join(" "),
                                            onClick: c,
                                        },
                                        d ||
                                            (p
                                                ? Lo("span", { className: p })
                                                : "")
                                    )
                                );
                        }
                    }
                    if (r.length > 1) {
                        var m = (i && n.getClass("buttonGroup")) || "";
                        return Lo.apply(
                            void 0,
                            o(["div", { className: m }], r)
                        );
                    }
                    return r[0];
                }),
                t
            );
        })(Xo),
        Ea = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t,
                        n = this.props,
                        r = n.model,
                        o = n.extraClassName,
                        i = !1,
                        a = r.sectionWidgets,
                        s = a.center;
                    return (
                        a.left ? ((i = !0), (e = a.left)) : (e = a.start),
                        a.right ? ((i = !0), (t = a.right)) : (t = a.end),
                        Lo(
                            "div",
                            {
                                className: [
                                    o || "",
                                    "fc-toolbar",
                                    i ? "fc-toolbar-ltr" : "",
                                ].join(" "),
                            },
                            this.renderSection("start", e || []),
                            this.renderSection("center", s || []),
                            this.renderSection("end", t || [])
                        )
                    );
                }),
                (t.prototype.renderSection = function (e, t) {
                    var n = this.props;
                    return Lo(ya, {
                        key: e,
                        widgetGroups: t,
                        title: n.title,
                        navUnit: n.navUnit,
                        activeButton: n.activeButton,
                        isTodayEnabled: n.isTodayEnabled,
                        isPrevEnabled: n.isPrevEnabled,
                        isNextEnabled: n.isNextEnabled,
                        titleId: n.titleId,
                    });
                }),
                t
            );
        })(Xo),
        ba = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { availableWidth: null }),
                    (t.handleEl = function (e) {
                        (t.el = e),
                            Jo(t.props.elRef, e),
                            t.updateAvailableWidth();
                    }),
                    (t.handleResize = function () {
                        t.updateAvailableWidth();
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.state,
                        n = e.aspectRatio,
                        r = [
                            "fc-view-harness",
                            n || e.liquid || e.height
                                ? "fc-view-harness-active"
                                : "fc-view-harness-passive",
                        ],
                        o = "",
                        i = "";
                    return (
                        n
                            ? null !== t.availableWidth
                                ? (o = t.availableWidth / n)
                                : (i = (1 / n) * 100 + "%")
                            : (o = e.height || ""),
                        Lo(
                            "div",
                            {
                                "aria-labelledby": e.labeledById,
                                ref: this.handleEl,
                                className: r.join(" "),
                                style: { height: o, paddingBottom: i },
                            },
                            e.children
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.context.addResizeHandler(this.handleResize);
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.context.removeResizeHandler(this.handleResize);
                }),
                (t.prototype.updateAvailableWidth = function () {
                    this.el &&
                        this.props.aspectRatio &&
                        this.setState({ availableWidth: this.el.offsetWidth });
                }),
                t
            );
        })(Xo),
        Sa = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return (
                    (n.handleSegClick = function (e, t) {
                        var r = n.component,
                            o = r.context,
                            i = cr(t);
                        if (i && r.isValidSegDownEl(e.target)) {
                            var a = Pe(e.target, ".fc-event-forced-url"),
                                s = a ? a.querySelector("a[href]").href : "";
                            o.emitter.trigger("eventClick", {
                                el: t,
                                event: new Vr(
                                    r.context,
                                    i.eventRange.def,
                                    i.eventRange.instance
                                ),
                                jsEvent: e,
                                view: o.viewApi,
                            }),
                                s &&
                                    !e.defaultPrevented &&
                                    (window.location.href = s);
                        }
                    }),
                    (n.destroy = Be(
                        t.el,
                        "click",
                        ".fc-event",
                        n.handleSegClick
                    )),
                    n
                );
            }
            return n(t, e), t;
        })(da),
        wa = (function (e) {
            function t(t) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    s = e.call(this, t) || this;
                return (
                    (s.handleEventElRemove = function (e) {
                        e === s.currentSegEl &&
                            s.handleSegLeave(null, s.currentSegEl);
                    }),
                    (s.handleSegEnter = function (e, t) {
                        cr(t) &&
                            ((s.currentSegEl = t),
                            s.triggerEvent("eventMouseEnter", e, t));
                    }),
                    (s.handleSegLeave = function (e, t) {
                        s.currentSegEl &&
                            ((s.currentSegEl = null),
                            s.triggerEvent("eventMouseLeave", e, t));
                    }),
                    (s.removeHoverListeners =
                        ((n = t.el),
                        (r = ".fc-event"),
                        (o = s.handleSegEnter),
                        (i = s.handleSegLeave),
                        Be(n, "mouseover", r, function (e, t) {
                            if (t !== a) {
                                (a = t), o(e, t);
                                var n = function (e) {
                                    (a = null),
                                        i(e, t),
                                        t.removeEventListener("mouseleave", n);
                                };
                                t.addEventListener("mouseleave", n);
                            }
                        }))),
                    s
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.removeHoverListeners();
                }),
                (t.prototype.triggerEvent = function (e, t, n) {
                    var r = this.component,
                        o = r.context,
                        i = cr(n);
                    (t && !r.isValidSegDownEl(t.target)) ||
                        o.emitter.trigger(e, {
                            el: n,
                            event: new Vr(
                                o,
                                i.eventRange.def,
                                i.eventRange.instance
                            ),
                            jsEvent: t,
                            view: o.viewApi,
                        });
                }),
                t
            );
        })(da),
        Da = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildViewContext = on(Yo)),
                    (t.buildViewPropTransformers = on(xa)),
                    (t.buildToolbarProps = on(Ta)),
                    (t.headerRef = Wo()),
                    (t.footerRef = Wo()),
                    (t.interactionsStore = {}),
                    (t.state = { viewLabelId: ze() }),
                    (t.registerInteractiveComponent = function (e, n) {
                        var r = (function (e, t) {
                                return {
                                    component: e,
                                    el: t.el,
                                    useEventCenter:
                                        null == t.useEventCenter ||
                                        t.useEventCenter,
                                    isHitComboAllowed:
                                        t.isHitComboAllowed || null,
                                };
                            })(e, n),
                            o = [Sa, wa]
                                .concat(
                                    t.props.pluginHooks.componentInteractions
                                )
                                .map(function (e) {
                                    return new e(r);
                                });
                        (t.interactionsStore[e.uid] = o), (fa[e.uid] = r);
                    }),
                    (t.unregisterInteractiveComponent = function (e) {
                        var n = t.interactionsStore[e.uid];
                        if (n) {
                            for (var r = 0, o = n; r < o.length; r++) {
                                o[r].destroy();
                            }
                            delete t.interactionsStore[e.uid];
                        }
                        delete fa[e.uid];
                    }),
                    (t.resizeRunner = new zi(function () {
                        t.props.emitter.trigger("_resize", !0),
                            t.props.emitter.trigger("windowResize", {
                                view: t.props.viewApi,
                            });
                    })),
                    (t.handleWindowResize = function (e) {
                        var n = t.props.options;
                        n.handleWindowResize &&
                            e.target === window &&
                            t.resizeRunner.request(n.windowResizeDelay);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e,
                        t = this.props,
                        n = t.toolbarConfig,
                        o = t.options,
                        i = this.buildToolbarProps(
                            t.viewSpec,
                            t.dateProfile,
                            t.dateProfileGenerator,
                            t.currentDate,
                            Ur(t.options.now, t.dateEnv),
                            t.viewTitle
                        ),
                        a = !1,
                        s = "";
                    t.isHeightAuto || t.forPrint
                        ? (s = "")
                        : null != o.height
                        ? (a = !0)
                        : null != o.contentHeight
                        ? (s = o.contentHeight)
                        : (e = Math.max(o.aspectRatio, 0.5));
                    var l = this.buildViewContext(
                            t.viewSpec,
                            t.viewApi,
                            t.options,
                            t.dateProfileGenerator,
                            t.dateEnv,
                            t.theme,
                            t.pluginHooks,
                            t.dispatch,
                            t.getCurrentData,
                            t.emitter,
                            t.calendarApi,
                            this.registerInteractiveComponent,
                            this.unregisterInteractiveComponent
                        ),
                        u =
                            n.header && n.header.hasTitle
                                ? this.state.viewLabelId
                                : "";
                    return Lo(
                        qo.Provider,
                        { value: l },
                        n.header &&
                            Lo(
                                Ea,
                                r(
                                    {
                                        ref: this.headerRef,
                                        extraClassName: "fc-header-toolbar",
                                        model: n.header,
                                        titleId: u,
                                    },
                                    i
                                )
                            ),
                        Lo(
                            ba,
                            {
                                liquid: a,
                                height: s,
                                aspectRatio: e,
                                labeledById: u,
                            },
                            this.renderView(t),
                            this.buildAppendContent()
                        ),
                        n.footer &&
                            Lo(
                                Ea,
                                r(
                                    {
                                        ref: this.footerRef,
                                        extraClassName: "fc-footer-toolbar",
                                        model: n.footer,
                                        titleId: "",
                                    },
                                    i
                                )
                            )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    var e = this.props;
                    (this.calendarInteractions =
                        e.pluginHooks.calendarInteractions.map(function (t) {
                            return new t(e);
                        })),
                        window.addEventListener(
                            "resize",
                            this.handleWindowResize
                        );
                    var t = e.pluginHooks.propSetHandlers;
                    for (var n in t) t[n](e[n], e);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props,
                        n = t.pluginHooks.propSetHandlers;
                    for (var r in n) t[r] !== e[r] && n[r](t[r], t);
                }),
                (t.prototype.componentWillUnmount = function () {
                    window.removeEventListener(
                        "resize",
                        this.handleWindowResize
                    ),
                        this.resizeRunner.clear();
                    for (
                        var e = 0, t = this.calendarInteractions;
                        e < t.length;
                        e++
                    ) {
                        t[e].destroy();
                    }
                    this.props.emitter.trigger("_unmount");
                }),
                (t.prototype.buildAppendContent = function () {
                    var e = this.props,
                        t = e.pluginHooks.viewContainerAppends.map(function (
                            t
                        ) {
                            return t(e);
                        });
                    return Lo.apply(void 0, o([Vo, {}], t));
                }),
                (t.prototype.renderView = function (e) {
                    for (
                        var t = e.pluginHooks,
                            n = e.viewSpec,
                            o = {
                                dateProfile: e.dateProfile,
                                businessHours: e.businessHours,
                                eventStore: e.renderableEventStore,
                                eventUiBases: e.eventUiBases,
                                dateSelection: e.dateSelection,
                                eventSelection: e.eventSelection,
                                eventDrag: e.eventDrag,
                                eventResize: e.eventResize,
                                isHeightAuto: e.isHeightAuto,
                                forPrint: e.forPrint,
                            },
                            i = 0,
                            a = this.buildViewPropTransformers(
                                t.viewPropsTransformers
                            );
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        r(o, s.transform(o, e));
                    }
                    var l = n.component;
                    return Lo(l, r({}, o));
                }),
                t
            );
        })(Zo);
    function Ta(e, t, n, r, o, i) {
        var a = n.build(o, void 0, !1),
            s = n.buildPrev(t, r, !1),
            l = n.buildNext(t, r, !1);
        return {
            title: i,
            activeButton: e.type,
            navUnit: e.singleUnit,
            isTodayEnabled: a.isValid && !ar(t.currentRange, o),
            isPrevEnabled: s.isValid,
            isNextEnabled: l.isValid,
        };
    }
    function xa(e) {
        return e.map(function (e) {
            return new e();
        });
    }
    var Ca = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.state = { forPrint: !1 }),
                (t.handleBeforePrint = function () {
                    t.setState({ forPrint: !0 });
                }),
                (t.handleAfterPrint = function () {
                    t.setState({ forPrint: !1 });
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = e.options,
                    n = this.state.forPrint,
                    r = n || "auto" === t.height || "auto" === t.contentHeight,
                    o = r || null == t.height ? "" : t.height,
                    i = [
                        "fc",
                        n ? "fc-media-print" : "fc-media-screen",
                        "fc-direction-" + t.direction,
                        e.theme.getClass("root"),
                    ];
                return co() || i.push("fc-liquid-hack"), e.children(i, o, r, n);
            }),
            (t.prototype.componentDidMount = function () {
                var e = this.props.emitter;
                e.on("_beforeprint", this.handleBeforePrint),
                    e.on("_afterprint", this.handleAfterPrint);
            }),
            (t.prototype.componentWillUnmount = function () {
                var e = this.props.emitter;
                e.off("_beforeprint", this.handleBeforePrint),
                    e.off("_afterprint", this.handleAfterPrint);
            }),
            t
        );
    })(Xo);
    function ka(e, t) {
        return bn(
            !e || t > 10
                ? { weekday: "short" }
                : t > 1
                ? {
                      weekday: "short",
                      month: "numeric",
                      day: "numeric",
                      omitCommas: !0,
                  }
                : { weekday: "long" }
        );
    }
    var _a = "fc-col-header-cell";
    function Ra(e) {
        return e.text;
    }
    var Ma = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.dateEnv,
                        n = e.options,
                        o = e.theme,
                        i = e.viewApi,
                        a = this.props,
                        s = a.date,
                        l = a.dateProfile,
                        u = vo(s, a.todayRange, null, l),
                        c = [_a].concat(go(u, o)),
                        d = t.format(s, a.dayHeaderFormat),
                        p =
                            !u.isDisabled && a.colCnt > 1
                                ? Eo(this.context, s)
                                : {},
                        f = r(
                            r(
                                r(
                                    { date: t.toDate(s), view: i },
                                    a.extraHookProps
                                ),
                                { text: d }
                            ),
                            u
                        );
                    return Lo(
                        oi,
                        {
                            hookProps: f,
                            classNames: n.dayHeaderClassNames,
                            content: n.dayHeaderContent,
                            defaultContent: Ra,
                            didMount: n.dayHeaderDidMount,
                            willUnmount: n.dayHeaderWillUnmount,
                        },
                        function (e, t, n, o) {
                            return Lo(
                                "th",
                                r(
                                    {
                                        ref: e,
                                        role: "columnheader",
                                        className: c.concat(t).join(" "),
                                        "data-date": u.isDisabled
                                            ? void 0
                                            : en(s),
                                        colSpan: a.colSpan,
                                    },
                                    a.extraDataAttrs
                                ),
                                Lo(
                                    "div",
                                    { className: "fc-scrollgrid-sync-inner" },
                                    !u.isDisabled &&
                                        Lo(
                                            "a",
                                            r(
                                                {
                                                    ref: n,
                                                    className: [
                                                        "fc-col-header-cell-cushion",
                                                        a.isSticky
                                                            ? "fc-sticky"
                                                            : "",
                                                    ].join(" "),
                                                },
                                                p
                                            ),
                                            o
                                        )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Xo),
        Ia = bn({ weekday: "long" }),
        Pa = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.dateEnv,
                        o = t.theme,
                        i = t.viewApi,
                        a = t.options,
                        s = ft(new Date(2592e5), e.dow),
                        l = {
                            dow: e.dow,
                            isDisabled: !1,
                            isFuture: !1,
                            isPast: !1,
                            isToday: !1,
                            isOther: !1,
                        },
                        u = [_a].concat(go(l, o), e.extraClassNames || []),
                        c = n.format(s, e.dayHeaderFormat),
                        d = r(
                            r(
                                r(r({ date: s }, l), { view: i }),
                                e.extraHookProps
                            ),
                            { text: c }
                        );
                    return Lo(
                        oi,
                        {
                            hookProps: d,
                            classNames: a.dayHeaderClassNames,
                            content: a.dayHeaderContent,
                            defaultContent: Ra,
                            didMount: a.dayHeaderDidMount,
                            willUnmount: a.dayHeaderWillUnmount,
                        },
                        function (t, o, i, a) {
                            return Lo(
                                "th",
                                r(
                                    {
                                        ref: t,
                                        role: "columnheader",
                                        className: u.concat(o).join(" "),
                                        colSpan: e.colSpan,
                                    },
                                    e.extraDataAttrs
                                ),
                                Lo(
                                    "div",
                                    { className: "fc-scrollgrid-sync-inner" },
                                    Lo(
                                        "a",
                                        {
                                            "aria-label": n.format(s, Ia),
                                            className: [
                                                "fc-col-header-cell-cushion",
                                                e.isSticky ? "fc-sticky" : "",
                                            ].join(" "),
                                            ref: i,
                                        },
                                        a
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Xo),
        Na = (function (e) {
            function t(t, n) {
                var r = e.call(this, t, n) || this;
                return (
                    (r.initialNowDate = Ur(n.options.now, n.dateEnv)),
                    (r.initialNowQueriedMs = new Date().valueOf()),
                    (r.state = r.computeTiming().currentState),
                    r
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.state;
                    return e.children(t.nowDate, t.todayRange);
                }),
                (t.prototype.componentDidMount = function () {
                    this.setTimeout();
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    e.unit !== this.props.unit &&
                        (this.clearTimeout(), this.setTimeout());
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.clearTimeout();
                }),
                (t.prototype.computeTiming = function () {
                    var e = this.props,
                        t = this.context,
                        n = ht(
                            this.initialNowDate,
                            new Date().valueOf() - this.initialNowQueriedMs
                        ),
                        r = t.dateEnv.startOf(n, e.unit),
                        o = t.dateEnv.add(r, Gt(1, e.unit)),
                        i = o.valueOf() - n.valueOf();
                    return (
                        (i = Math.min(864e5, i)),
                        {
                            currentState: { nowDate: r, todayRange: Ha(r) },
                            nextState: { nowDate: o, todayRange: Ha(o) },
                            waitMs: i,
                        }
                    );
                }),
                (t.prototype.setTimeout = function () {
                    var e = this,
                        t = this.computeTiming(),
                        n = t.nextState,
                        r = t.waitMs;
                    this.timeoutId = setTimeout(function () {
                        e.setState(n, function () {
                            e.setTimeout();
                        });
                    }, r);
                }),
                (t.prototype.clearTimeout = function () {
                    this.timeoutId && clearTimeout(this.timeoutId);
                }),
                (t.contextType = qo),
                t
            );
        })(Oo);
    function Ha(e) {
        var t = bt(e);
        return { start: t, end: ft(t, 1) };
    }
    var Aa = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.createDayHeaderFormatter = on(Oa)), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.context,
                    t = this.props,
                    n = t.dates,
                    r = t.dateProfile,
                    o = t.datesRepDistinctDays,
                    i = t.renderIntro,
                    a = this.createDayHeaderFormatter(
                        e.options.dayHeaderFormat,
                        o,
                        n.length
                    );
                return Lo(Na, { unit: "day" }, function (e, t) {
                    return Lo(
                        "tr",
                        { role: "row" },
                        i && i("day"),
                        n.map(function (e) {
                            return o
                                ? Lo(Ma, {
                                      key: e.toISOString(),
                                      date: e,
                                      dateProfile: r,
                                      todayRange: t,
                                      colCnt: n.length,
                                      dayHeaderFormat: a,
                                  })
                                : Lo(Pa, {
                                      key: e.getUTCDay(),
                                      dow: e.getUTCDay(),
                                      dayHeaderFormat: a,
                                  });
                        })
                    );
                });
            }),
            t
        );
    })(Xo);
    function Oa(e, t, n) {
        return e || ka(t, n);
    }
    var La = (function () {
            function e(e, t) {
                for (
                    var n = e.start, r = e.end, o = [], i = [], a = -1;
                    n < r;

                )
                    t.isHiddenDay(n)
                        ? o.push(a + 0.5)
                        : ((a += 1), o.push(a), i.push(n)),
                        (n = ft(n, 1));
                (this.dates = i), (this.indices = o), (this.cnt = i.length);
            }
            return (
                (e.prototype.sliceRange = function (e) {
                    var t = this.getDateDayIndex(e.start),
                        n = this.getDateDayIndex(ft(e.end, -1)),
                        r = Math.max(0, t),
                        o = Math.min(this.cnt - 1, n);
                    return (r = Math.ceil(r)) <= (o = Math.floor(o))
                        ? {
                              firstIndex: r,
                              lastIndex: o,
                              isStart: t === r,
                              isEnd: n === o,
                          }
                        : null;
                }),
                (e.prototype.getDateDayIndex = function (e) {
                    var t = this.indices,
                        n = Math.floor(gt(this.dates[0], e));
                    return n < 0
                        ? t[0] - 1
                        : n >= t.length
                        ? t[t.length - 1] + 1
                        : t[n];
                }),
                e
            );
        })(),
        Ua = (function () {
            function e(e, t) {
                var n,
                    r,
                    o,
                    i = e.dates;
                if (t) {
                    for (
                        r = i[0].getUTCDay(), n = 1;
                        n < i.length && i[n].getUTCDay() !== r;
                        n += 1
                    );
                    o = Math.ceil(i.length / n);
                } else (o = 1), (n = i.length);
                (this.rowCnt = o),
                    (this.colCnt = n),
                    (this.daySeries = e),
                    (this.cells = this.buildCells()),
                    (this.headerDates = this.buildHeaderDates());
            }
            return (
                (e.prototype.buildCells = function () {
                    for (var e = [], t = 0; t < this.rowCnt; t += 1) {
                        for (var n = [], r = 0; r < this.colCnt; r += 1)
                            n.push(this.buildCell(t, r));
                        e.push(n);
                    }
                    return e;
                }),
                (e.prototype.buildCell = function (e, t) {
                    var n = this.daySeries.dates[e * this.colCnt + t];
                    return { key: n.toISOString(), date: n };
                }),
                (e.prototype.buildHeaderDates = function () {
                    for (var e = [], t = 0; t < this.colCnt; t += 1)
                        e.push(this.cells[0][t].date);
                    return e;
                }),
                (e.prototype.sliceRange = function (e) {
                    var t = this.colCnt,
                        n = this.daySeries.sliceRange(e),
                        r = [];
                    if (n)
                        for (
                            var o = n.firstIndex, i = n.lastIndex, a = o;
                            a <= i;

                        ) {
                            var s = Math.floor(a / t),
                                l = Math.min((s + 1) * t, i + 1);
                            r.push({
                                row: s,
                                firstCol: a % t,
                                lastCol: (l - 1) % t,
                                isStart: n.isStart && a === o,
                                isEnd: n.isEnd && l - 1 === i,
                            }),
                                (a = l);
                        }
                    return r;
                }),
                e
            );
        })(),
        Wa = (function () {
            function e() {
                (this.sliceBusinessHours = on(this._sliceBusinessHours)),
                    (this.sliceDateSelection = on(this._sliceDateSpan)),
                    (this.sliceEventStore = on(this._sliceEventStore)),
                    (this.sliceEventDrag = on(this._sliceInteraction)),
                    (this.sliceEventResize = on(this._sliceInteraction)),
                    (this.forceDayIfListItem = !1);
            }
            return (
                (e.prototype.sliceProps = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++)
                        i[a - 4] = arguments[a];
                    var s = e.eventUiBases,
                        l = this.sliceEventStore.apply(
                            this,
                            o([e.eventStore, s, t, n], i)
                        );
                    return {
                        dateSelectionSegs: this.sliceDateSelection.apply(
                            this,
                            o([e.dateSelection, s, r], i)
                        ),
                        businessHourSegs: this.sliceBusinessHours.apply(
                            this,
                            o([e.businessHours, t, n, r], i)
                        ),
                        fgEventSegs: l.fg,
                        bgEventSegs: l.bg,
                        eventDrag: this.sliceEventDrag.apply(
                            this,
                            o([e.eventDrag, s, t, n], i)
                        ),
                        eventResize: this.sliceEventResize.apply(
                            this,
                            o([e.eventResize, s, t, n], i)
                        ),
                        eventSelection: e.eventSelection,
                    };
                }),
                (e.prototype.sliceNowDate = function (e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++)
                        n[r - 2] = arguments[r];
                    return this._sliceDateSpan.apply(
                        this,
                        o(
                            [
                                {
                                    range: { start: e, end: ht(e, 1) },
                                    allDay: !1,
                                },
                                {},
                                t,
                            ],
                            n
                        )
                    );
                }),
                (e.prototype._sliceBusinessHours = function (e, t, n, r) {
                    for (var i = [], a = 4; a < arguments.length; a++)
                        i[a - 4] = arguments[a];
                    return e
                        ? this._sliceEventStore.apply(
                              this,
                              o([zt(e, Va(t, Boolean(n)), r), {}, t, n], i)
                          ).bg
                        : [];
                }),
                (e.prototype._sliceEventStore = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++)
                        o[i - 4] = arguments[i];
                    if (e) {
                        var a = sr(e, t, Va(n, Boolean(r)), r);
                        return {
                            bg: this.sliceEventRanges(a.bg, o),
                            fg: this.sliceEventRanges(a.fg, o),
                        };
                    }
                    return { bg: [], fg: [] };
                }),
                (e.prototype._sliceInteraction = function (e, t, n, r) {
                    for (var o = [], i = 4; i < arguments.length; i++)
                        o[i - 4] = arguments[i];
                    if (!e) return null;
                    var a = sr(e.mutatedEvents, t, Va(n, Boolean(r)), r);
                    return {
                        segs: this.sliceEventRanges(a.fg, o),
                        affectedInstances: e.affectedEvents.instances,
                        isEvent: e.isEvent,
                    };
                }),
                (e.prototype._sliceDateSpan = function (e, t, n) {
                    for (var r = [], i = 3; i < arguments.length; i++)
                        r[i - 3] = arguments[i];
                    if (!e) return [];
                    for (
                        var a = (function (e, t, n) {
                                var r = Yn({ editable: !1 }, n),
                                    o = Xn(
                                        r.refined,
                                        r.extra,
                                        "",
                                        e.allDay,
                                        !0,
                                        n
                                    );
                                return {
                                    def: o,
                                    ui: pr(o, t),
                                    instance: Rt(o.defId, e.range),
                                    range: e.range,
                                    isStart: !0,
                                    isEnd: !0,
                                };
                            })(e, t, n),
                            s = this.sliceRange.apply(this, o([e.range], r)),
                            l = 0,
                            u = s;
                        l < u.length;
                        l++
                    ) {
                        u[l].eventRange = a;
                    }
                    return s;
                }),
                (e.prototype.sliceEventRanges = function (e, t) {
                    for (var n = [], r = 0, o = e; r < o.length; r++) {
                        var i = o[r];
                        n.push.apply(n, this.sliceEventRange(i, t));
                    }
                    return n;
                }),
                (e.prototype.sliceEventRange = function (e, t) {
                    var n = e.range;
                    this.forceDayIfListItem &&
                        "list-item" === e.ui.display &&
                        (n = { start: n.start, end: ft(n.start, 1) });
                    for (
                        var r = this.sliceRange.apply(this, o([n], t)),
                            i = 0,
                            a = r;
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        (s.eventRange = e),
                            (s.isStart = e.isStart && s.isStart),
                            (s.isEnd = e.isEnd && s.isEnd);
                    }
                    return r;
                }),
                e
            );
        })();
    function Va(e, t) {
        var n = e.activeRange;
        return t
            ? n
            : {
                  start: ht(n.start, e.slotMinTime.milliseconds),
                  end: ht(n.end, e.slotMaxTime.milliseconds - 864e5),
              };
    }
    function za(e, t, n) {
        var r = e.mutatedEvents.instances;
        for (var o in r) if (!ir(t.validRange, r[o].range)) return !1;
        return Ba({ eventDrag: e }, n);
    }
    function Fa(e, t, n) {
        return !!ir(t.validRange, e.range) && Ba({ dateSelection: e }, n);
    }
    function Ba(e, t) {
        var n = t.getCurrentData(),
            o = r(
                {
                    businessHours: n.businessHours,
                    dateSelection: "",
                    eventStore: n.eventStore,
                    eventUiBases: n.eventUiBases,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null,
                },
                e
            );
        return (t.pluginHooks.isPropsValid || ja)(o, t);
    }
    function ja(e, t, n, o) {
        return (
            void 0 === n && (n = {}),
            !(
                e.eventDrag &&
                !(function (e, t, n, o) {
                    var i = t.getCurrentData(),
                        a = e.eventDrag,
                        s = a.mutatedEvents,
                        l = s.defs,
                        u = s.instances,
                        c = dr(
                            l,
                            a.isEvent
                                ? e.eventUiBases
                                : { "": i.selectionConfig }
                        );
                    o && (c = Nt(c, o));
                    var d =
                            ((v = e.eventStore),
                            (g = a.affectedEvents.instances),
                            {
                                defs: v.defs,
                                instances: Pt(v.instances, function (e) {
                                    return !g[e.instanceId];
                                }),
                            }),
                        p = d.defs,
                        f = d.instances,
                        h = dr(p, e.eventUiBases);
                    var v, g;
                    for (var m in u) {
                        var y = u[m],
                            E = y.range,
                            b = c[y.defId],
                            S = l[y.defId];
                        if (!Ga(b.constraints, E, d, e.businessHours, t))
                            return !1;
                        var w = t.options.eventOverlap,
                            D = "function" == typeof w ? w : null;
                        for (var T in f) {
                            var x = f[T];
                            if (or(E, x.range)) {
                                if (!1 === h[x.defId].overlap && a.isEvent)
                                    return !1;
                                if (!1 === b.overlap) return !1;
                                if (
                                    D &&
                                    !D(
                                        new Vr(t, p[x.defId], x),
                                        new Vr(t, S, y)
                                    )
                                )
                                    return !1;
                            }
                        }
                        for (
                            var C = i.eventStore, k = 0, _ = b.allows;
                            k < _.length;
                            k++
                        ) {
                            var R = _[k],
                                M = r(r({}, n), {
                                    range: y.range,
                                    allDay: S.allDay,
                                }),
                                I = C.defs[S.defId],
                                P = C.instances[m],
                                N = void 0;
                            if (
                                ((N = I ? new Vr(t, I, P) : new Vr(t, S)),
                                !R(Rr(M, t), N))
                            )
                                return !1;
                        }
                    }
                    return !0;
                })(e, t, n, o)
            ) &&
                !(
                    e.dateSelection &&
                    !(function (e, t, n, o) {
                        var i = e.eventStore,
                            a = i.defs,
                            s = i.instances,
                            l = e.dateSelection,
                            u = l.range,
                            c = t.getCurrentData().selectionConfig;
                        o && (c = o(c));
                        if (!Ga(c.constraints, u, i, e.businessHours, t))
                            return !1;
                        var d = t.options.selectOverlap,
                            p = "function" == typeof d ? d : null;
                        for (var f in s) {
                            var h = s[f];
                            if (or(u, h.range)) {
                                if (!1 === c.overlap) return !1;
                                if (p && !p(new Vr(t, a[h.defId], h), null))
                                    return !1;
                            }
                        }
                        for (var v = 0, g = c.allows; v < g.length; v++) {
                            if (!(0, g[v])(Rr(r(r({}, n), l), t), null))
                                return !1;
                        }
                        return !0;
                    })(e, t, n, o)
                )
        );
    }
    function Ga(e, t, n, r, o) {
        for (var i = 0, a = e; i < a.length; i++) {
            if (!Za(qa(a[i], t, n, r, o), t)) return !1;
        }
        return !0;
    }
    function qa(e, t, n, r, o) {
        return "businessHours" === e
            ? Ya(zt(r, t, o))
            : "string" == typeof e
            ? Ya(
                  On(n, function (t) {
                      return t.groupId === e;
                  })
              )
            : "object" == typeof e && e
            ? Ya(zt(e, t, o))
            : [];
    }
    function Ya(e) {
        var t = e.instances,
            n = [];
        for (var r in t) n.push(t[r].range);
        return n;
    }
    function Za(e, t) {
        for (var n = 0, r = e; n < r.length; n++) {
            if (ir(r[n], t)) return !0;
        }
        return !1;
    }
    var Xa = /^(visible|hidden)$/,
        Ka = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleEl = function (e) {
                        (t.el = e), Jo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = e.liquid,
                        n = e.liquidIsAbsolute,
                        r = t && n,
                        o = ["fc-scroller"];
                    return (
                        t &&
                            (n
                                ? o.push("fc-scroller-liquid-absolute")
                                : o.push("fc-scroller-liquid")),
                        Lo(
                            "div",
                            {
                                ref: this.handleEl,
                                className: o.join(" "),
                                style: {
                                    overflowX: e.overflowX,
                                    overflowY: e.overflowY,
                                    left: (r && -(e.overcomeLeft || 0)) || "",
                                    right: (r && -(e.overcomeRight || 0)) || "",
                                    bottom:
                                        (r && -(e.overcomeBottom || 0)) || "",
                                    marginLeft:
                                        (!r && -(e.overcomeLeft || 0)) || "",
                                    marginRight:
                                        (!r && -(e.overcomeRight || 0)) || "",
                                    marginBottom:
                                        (!r && -(e.overcomeBottom || 0)) || "",
                                    maxHeight: e.maxHeight || "",
                                },
                            },
                            e.children
                        )
                    );
                }),
                (t.prototype.needsXScrolling = function () {
                    if (Xa.test(this.props.overflowX)) return !1;
                    for (
                        var e = this.el,
                            t =
                                this.el.getBoundingClientRect().width -
                                this.getYScrollbarWidth(),
                            n = e.children,
                            r = 0;
                        r < n.length;
                        r += 1
                    ) {
                        if (n[r].getBoundingClientRect().width > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.needsYScrolling = function () {
                    if (Xa.test(this.props.overflowY)) return !1;
                    for (
                        var e = this.el,
                            t =
                                this.el.getBoundingClientRect().height -
                                this.getXScrollbarWidth(),
                            n = e.children,
                            r = 0;
                        r < n.length;
                        r += 1
                    ) {
                        if (n[r].getBoundingClientRect().height > t) return !0;
                    }
                    return !1;
                }),
                (t.prototype.getXScrollbarWidth = function () {
                    return Xa.test(this.props.overflowX)
                        ? 0
                        : this.el.offsetHeight - this.el.clientHeight;
                }),
                (t.prototype.getYScrollbarWidth = function () {
                    return Xa.test(this.props.overflowY)
                        ? 0
                        : this.el.offsetWidth - this.el.clientWidth;
                }),
                t
            );
        })(Xo),
        $a = (function () {
            function e(e) {
                var t = this;
                (this.masterCallback = e),
                    (this.currentMap = {}),
                    (this.depths = {}),
                    (this.callbackMap = {}),
                    (this.handleValue = function (e, n) {
                        var r = t,
                            o = r.depths,
                            i = r.currentMap,
                            a = !1,
                            s = !1;
                        null !== e
                            ? ((a = n in i),
                              (i[n] = e),
                              (o[n] = (o[n] || 0) + 1),
                              (s = !0))
                            : ((o[n] -= 1),
                              o[n] ||
                                  (delete i[n],
                                  delete t.callbackMap[n],
                                  (a = !0))),
                            t.masterCallback &&
                                (a && t.masterCallback(null, String(n)),
                                s && t.masterCallback(e, String(n)));
                    });
            }
            return (
                (e.prototype.createRef = function (e) {
                    var t = this,
                        n = this.callbackMap[e];
                    return (
                        n ||
                            (n = this.callbackMap[e] =
                                function (n) {
                                    t.handleValue(n, String(e));
                                }),
                        n
                    );
                }),
                (e.prototype.collect = function (e, t, n) {
                    return Vt(this.currentMap, e, t, n);
                }),
                (e.prototype.getAll = function () {
                    return At(this.currentMap);
                }),
                e
            );
        })();
    function Ja(e) {
        for (
            var t = 0, n = 0, r = He(e, ".fc-scrollgrid-shrink");
            n < r.length;
            n++
        ) {
            var o = r[n];
            t = Math.max(t, ct(o));
        }
        return Math.ceil(t);
    }
    function Qa(e, t) {
        return e.liquid && t.liquid;
    }
    function es(e, t) {
        return null != t.maxHeight || Qa(e, t);
    }
    function ts(e, t, n, r) {
        var o = n.expandRows;
        return "function" == typeof t.content
            ? t.content(n)
            : Lo(
                  "table",
                  {
                      role: "presentation",
                      className: [
                          t.tableClassName,
                          e.syncRowHeights ? "fc-scrollgrid-sync-table" : "",
                      ].join(" "),
                      style: {
                          minWidth: n.tableMinWidth,
                          width: n.clientWidth,
                          height: o ? n.clientHeight : "",
                      },
                  },
                  n.tableColGroupNode,
                  Lo(
                      r ? "thead" : "tbody",
                      { role: "presentation" },
                      "function" == typeof t.rowContent
                          ? t.rowContent(n)
                          : t.rowContent
                  )
              );
    }
    function ns(e, t) {
        return rn(e, t, Ot);
    }
    function rs(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++)
            for (var a = i[r], s = a.span || 1, l = 0; l < s; l += 1)
                n.push(
                    Lo("col", {
                        style: {
                            width: "shrink" === a.width ? os(t) : a.width || "",
                            minWidth: a.minWidth || "",
                        },
                    })
                );
        return Lo.apply(void 0, o(["colgroup", {}], n));
    }
    function os(e) {
        return null == e ? 4 : e;
    }
    function is(e) {
        for (var t = 0, n = e; t < n.length; t++) {
            if ("shrink" === n[t].width) return !0;
        }
        return !1;
    }
    function as(e, t) {
        var n = ["fc-scrollgrid", t.theme.getClass("table")];
        return e && n.push("fc-scrollgrid-liquid"), n;
    }
    function ss(e, t) {
        var n = [
            "fc-scrollgrid-section",
            "fc-scrollgrid-section-" + e.type,
            e.className,
        ];
        return (
            t &&
                e.liquid &&
                null == e.maxHeight &&
                n.push("fc-scrollgrid-section-liquid"),
            e.isSticky && n.push("fc-scrollgrid-section-sticky"),
            n
        );
    }
    function ls(e) {
        return Lo("div", {
            className: "fc-scrollgrid-sticky-shim",
            style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        });
    }
    function us(e) {
        var t = e.stickyHeaderDates;
        return (
            (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
            t
        );
    }
    function cs(e) {
        var t = e.stickyFooterScrollbar;
        return (
            (null != t && "auto" !== t) ||
                (t = "auto" === e.height || "auto" === e.viewHeight),
            t
        );
    }
    var ds = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.processCols = on(function (e) {
                    return e;
                }, ns)),
                (t.renderMicroColGroup = on(rs)),
                (t.scrollerRefs = new $a()),
                (t.scrollerElRefs = new $a(t._handleScrollerEl.bind(t))),
                (t.state = {
                    shrinkWidth: null,
                    forceYScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {},
                }),
                (t.handleSizing = function () {
                    t.safeSetState(
                        r(
                            { shrinkWidth: t.computeShrinkWidth() },
                            t.computeScrollerDims()
                        )
                    );
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = e.props,
                    n = e.state,
                    r = e.context,
                    i = t.sections || [],
                    a = this.processCols(t.cols),
                    s = this.renderMicroColGroup(a, n.shrinkWidth),
                    l = as(t.liquid, r);
                t.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
                for (
                    var u, c = i.length, d = 0, p = [], f = [], h = [];
                    d < c && "header" === (u = i[d]).type;

                )
                    p.push(this.renderSection(u, s, !0)), (d += 1);
                for (; d < c && "body" === (u = i[d]).type; )
                    f.push(this.renderSection(u, s, !1)), (d += 1);
                for (; d < c && "footer" === (u = i[d]).type; )
                    h.push(this.renderSection(u, s, !0)), (d += 1);
                var v = !co(),
                    g = { role: "rowgroup" };
                return Lo(
                    "table",
                    {
                        role: "grid",
                        className: l.join(" "),
                        style: { height: t.height },
                    },
                    Boolean(!v && p.length) &&
                        Lo.apply(void 0, o(["thead", g], p)),
                    Boolean(!v && f.length) &&
                        Lo.apply(void 0, o(["tbody", g], f)),
                    Boolean(!v && h.length) &&
                        Lo.apply(void 0, o(["tfoot", g], h)),
                    v && Lo.apply(void 0, o(o(o(["tbody", g], p), f), h))
                );
            }),
            (t.prototype.renderSection = function (e, t, n) {
                return "outerContent" in e
                    ? Lo(Vo, { key: e.key }, e.outerContent)
                    : Lo(
                          "tr",
                          {
                              key: e.key,
                              role: "presentation",
                              className: ss(e, this.props.liquid).join(" "),
                          },
                          this.renderChunkTd(e, t, e.chunk, n)
                      );
            }),
            (t.prototype.renderChunkTd = function (e, t, n, r) {
                if ("outerContent" in n) return n.outerContent;
                var o = this.props,
                    i = this.state,
                    a = i.forceYScrollbars,
                    s = i.scrollerClientWidths,
                    l = i.scrollerClientHeights,
                    u = es(o, e),
                    c = Qa(o, e),
                    d = o.liquid
                        ? a
                            ? "scroll"
                            : u
                            ? "auto"
                            : "hidden"
                        : "visible",
                    p = e.key,
                    f = ts(
                        e,
                        n,
                        {
                            tableColGroupNode: t,
                            tableMinWidth: "",
                            clientWidth:
                                o.collapsibleWidth || void 0 === s[p]
                                    ? null
                                    : s[p],
                            clientHeight: void 0 !== l[p] ? l[p] : null,
                            expandRows: e.expandRows,
                            syncRowHeights: !1,
                            rowSyncHeights: [],
                            reportRowHeightChange: function () {},
                        },
                        r
                    );
                return Lo(
                    r ? "th" : "td",
                    { ref: n.elRef, role: "presentation" },
                    Lo(
                        "div",
                        {
                            className:
                                "fc-scroller-harness" +
                                (c ? " fc-scroller-harness-liquid" : ""),
                        },
                        Lo(
                            Ka,
                            {
                                ref: this.scrollerRefs.createRef(p),
                                elRef: this.scrollerElRefs.createRef(p),
                                overflowY: d,
                                overflowX: o.liquid ? "hidden" : "visible",
                                maxHeight: e.maxHeight,
                                liquid: c,
                                liquidIsAbsolute: !0,
                            },
                            f
                        )
                    )
                );
            }),
            (t.prototype._handleScrollerEl = function (e, t) {
                var n = (function (e, t) {
                    for (var n = 0, r = e; n < r.length; n++) {
                        var o = r[n];
                        if (o.key === t) return o;
                    }
                    return null;
                })(this.props.sections, t);
                n && Jo(n.chunk.scrollerElRef, e);
            }),
            (t.prototype.componentDidMount = function () {
                this.handleSizing(),
                    this.context.addResizeHandler(this.handleSizing);
            }),
            (t.prototype.componentDidUpdate = function () {
                this.handleSizing();
            }),
            (t.prototype.componentWillUnmount = function () {
                this.context.removeResizeHandler(this.handleSizing);
            }),
            (t.prototype.computeShrinkWidth = function () {
                return is(this.props.cols)
                    ? Ja(this.scrollerElRefs.getAll())
                    : 0;
            }),
            (t.prototype.computeScrollerDims = function () {
                var e = Do(),
                    t = this.scrollerRefs,
                    n = this.scrollerElRefs,
                    r = !1,
                    o = {},
                    i = {};
                for (var a in t.currentMap) {
                    var s = t.currentMap[a];
                    if (s && s.needsYScrolling()) {
                        r = !0;
                        break;
                    }
                }
                for (var l = 0, u = this.props.sections; l < u.length; l++) {
                    a = u[l].key;
                    var c = n.currentMap[a];
                    if (c) {
                        var d = c.parentNode;
                        (o[a] = Math.floor(
                            d.getBoundingClientRect().width - (r ? e.y : 0)
                        )),
                            (i[a] = Math.floor(
                                d.getBoundingClientRect().height
                            ));
                    }
                }
                return {
                    forceYScrollbars: r,
                    scrollerClientWidths: o,
                    scrollerClientHeights: i,
                };
            }),
            t
        );
    })(Xo);
    ds.addStateEquality({
        scrollerClientWidths: Ot,
        scrollerClientHeights: Ot,
    });
    var ps = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.elRef = Wo()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = e.seg,
                        o = r.eventRange,
                        i = o.ui,
                        a = {
                            event: new Vr(t, o.def, o.instance),
                            view: t.viewApi,
                            timeText: e.timeText,
                            textColor: i.textColor,
                            backgroundColor: i.backgroundColor,
                            borderColor: i.borderColor,
                            isDraggable: !e.disableDragging && vr(r, t),
                            isStartResizable: !e.disableResizing && gr(r, t),
                            isEndResizable: !e.disableResizing && mr(r),
                            isMirror: Boolean(
                                e.isDragging ||
                                    e.isResizing ||
                                    e.isDateSelecting
                            ),
                            isStart: Boolean(r.isStart),
                            isEnd: Boolean(r.isEnd),
                            isPast: Boolean(e.isPast),
                            isFuture: Boolean(e.isFuture),
                            isToday: Boolean(e.isToday),
                            isSelected: Boolean(e.isSelected),
                            isDragging: Boolean(e.isDragging),
                            isResizing: Boolean(e.isResizing),
                        },
                        s = br(a).concat(i.classNames);
                    return Lo(
                        oi,
                        {
                            hookProps: a,
                            classNames: n.eventClassNames,
                            content: n.eventContent,
                            defaultContent: e.defaultContent,
                            didMount: n.eventDidMount,
                            willUnmount: n.eventWillUnmount,
                            elRef: this.elRef,
                        },
                        function (t, n, r, o) {
                            return e.children(t, s.concat(n), r, o, a);
                        }
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    ur(this.elRef.current, this.props.seg);
                }),
                (t.prototype.componentDidUpdate = function (e) {
                    var t = this.props.seg;
                    t !== e.seg && ur(this.elRef.current, t);
                }),
                t
            );
        })(Xo),
        fs = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = e.seg,
                        o = t.options.eventTimeFormat || e.defaultTimeFormat,
                        i = yr(
                            n,
                            o,
                            t,
                            e.defaultDisplayEventTime,
                            e.defaultDisplayEventEnd
                        );
                    return Lo(
                        ps,
                        {
                            seg: n,
                            timeText: i,
                            disableDragging: e.disableDragging,
                            disableResizing: e.disableResizing,
                            defaultContent: e.defaultContent || hs,
                            isDragging: e.isDragging,
                            isResizing: e.isResizing,
                            isDateSelecting: e.isDateSelecting,
                            isSelected: e.isSelected,
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                        },
                        function (o, i, a, s, l) {
                            return Lo(
                                "a",
                                r(
                                    {
                                        className: e.extraClassNames
                                            .concat(i)
                                            .join(" "),
                                        style: {
                                            borderColor: l.borderColor,
                                            backgroundColor: l.backgroundColor,
                                        },
                                        ref: o,
                                    },
                                    wr(n, t)
                                ),
                                Lo(
                                    "div",
                                    {
                                        className: "fc-event-main",
                                        ref: a,
                                        style: { color: l.textColor },
                                    },
                                    s
                                ),
                                l.isStartResizable &&
                                    Lo("div", {
                                        className:
                                            "fc-event-resizer fc-event-resizer-start",
                                    }),
                                l.isEndResizable &&
                                    Lo("div", {
                                        className:
                                            "fc-event-resizer fc-event-resizer-end",
                                    })
                            );
                        }
                    );
                }),
                t
            );
        })(Xo);
    function hs(e) {
        return Lo(
            "div",
            { className: "fc-event-main-frame" },
            e.timeText && Lo("div", { className: "fc-event-time" }, e.timeText),
            Lo(
                "div",
                { className: "fc-event-title-container" },
                Lo(
                    "div",
                    { className: "fc-event-title fc-sticky" },
                    e.event.title || Lo(Vo, null, "Â ")
                )
            )
        );
    }
    var vs = function (e) {
            return Lo(qo.Consumer, null, function (t) {
                var n = t.options,
                    r = {
                        isAxis: e.isAxis,
                        date: t.dateEnv.toDate(e.date),
                        view: t.viewApi,
                    };
                return Lo(
                    oi,
                    {
                        hookProps: r,
                        classNames: n.nowIndicatorClassNames,
                        content: n.nowIndicatorContent,
                        didMount: n.nowIndicatorDidMount,
                        willUnmount: n.nowIndicatorWillUnmount,
                    },
                    e.children
                );
            });
        },
        gs = bn({ day: "numeric" }),
        ms = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        r = ys({
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            showDayNumber: e.showDayNumber,
                            extraProps: e.extraHookProps,
                            viewApi: t.viewApi,
                            dateEnv: t.dateEnv,
                        });
                    return Lo(
                        ai,
                        {
                            hookProps: r,
                            content: n.dayCellContent,
                            defaultContent: e.defaultContent,
                        },
                        e.children
                    );
                }),
                t
            );
        })(Xo);
    function ys(e) {
        var t = e.date,
            n = e.dateEnv,
            o = vo(t, e.todayRange, null, e.dateProfile);
        return r(
            r(r({ date: n.toDate(t), view: e.viewApi }, o), {
                dayNumberText: e.showDayNumber ? n.format(t, gs) : "",
            }),
            e.extraProps
        );
    }
    var Es = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.refineHookProps = an(ys)), (t.normalizeClassNames = ui()), t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.context,
                    n = t.options,
                    r = this.refineHookProps({
                        date: e.date,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        showDayNumber: e.showDayNumber,
                        extraProps: e.extraHookProps,
                        viewApi: t.viewApi,
                        dateEnv: t.dateEnv,
                    }),
                    o = go(r, t.theme).concat(
                        r.isDisabled
                            ? []
                            : this.normalizeClassNames(n.dayCellClassNames, r)
                    ),
                    i = r.isDisabled ? {} : { "data-date": en(e.date) };
                return Lo(
                    li,
                    {
                        hookProps: r,
                        didMount: n.dayCellDidMount,
                        willUnmount: n.dayCellWillUnmount,
                        elRef: e.elRef,
                    },
                    function (t) {
                        return e.children(t, o, i, r.isDisabled);
                    }
                );
            }),
            t
        );
    })(Xo);
    function bs(e) {
        return Lo("div", { className: "fc-" + e });
    }
    var Ss = function (e) {
        return Lo(
            ps,
            {
                defaultContent: ws,
                seg: e.seg,
                timeText: "",
                disableDragging: !0,
                disableResizing: !0,
                isDragging: !1,
                isResizing: !1,
                isDateSelecting: !1,
                isSelected: !1,
                isPast: e.isPast,
                isFuture: e.isFuture,
                isToday: e.isToday,
            },
            function (e, t, n, r, o) {
                return Lo(
                    "div",
                    {
                        ref: e,
                        className: ["fc-bg-event"].concat(t).join(" "),
                        style: { backgroundColor: o.backgroundColor },
                    },
                    r
                );
            }
        );
    };
    function ws(e) {
        return (
            e.event.title &&
            Lo("div", { className: "fc-event-title" }, e.event.title)
        );
    }
    var Ds = function (e) {
        return Lo(qo.Consumer, null, function (t) {
            var n = t.dateEnv,
                r = t.options,
                o = e.date,
                i = r.weekNumberFormat || e.defaultFormat,
                a = n.computeWeekNumber(o),
                s = n.format(o, i);
            return Lo(
                oi,
                {
                    hookProps: { num: a, text: s, date: o },
                    classNames: r.weekNumberClassNames,
                    content: r.weekNumberContent,
                    defaultContent: Ts,
                    didMount: r.weekNumberDidMount,
                    willUnmount: r.weekNumberWillUnmount,
                },
                e.children
            );
        });
    };
    function Ts(e) {
        return e.text;
    }
    var xs = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { titleId: ze() }),
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e), t.props.elRef && Jo(t.props.elRef, e);
                    }),
                    (t.handleDocumentMouseDown = function (e) {
                        var n = Ue(e);
                        t.rootEl.contains(n) || t.handleCloseClick();
                    }),
                    (t.handleDocumentKeyDown = function (e) {
                        "Escape" === e.key && t.handleCloseClick();
                    }),
                    (t.handleCloseClick = function () {
                        var e = t.props.onClose;
                        e && e();
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.theme,
                        n = e.options,
                        o = this.props,
                        i = this.state,
                        a = ["fc-popover", t.getClass("popover")].concat(
                            o.extraClassNames || []
                        );
                    return Fo(
                        Lo(
                            "div",
                            r(
                                {
                                    id: o.id,
                                    className: a.join(" "),
                                    "aria-labelledby": i.titleId,
                                },
                                o.extraAttrs,
                                { ref: this.handleRootEl }
                            ),
                            Lo(
                                "div",
                                {
                                    className:
                                        "fc-popover-header " +
                                        t.getClass("popoverHeader"),
                                },
                                Lo(
                                    "span",
                                    {
                                        className: "fc-popover-title",
                                        id: i.titleId,
                                    },
                                    o.title
                                ),
                                Lo("span", {
                                    className:
                                        "fc-popover-close " +
                                        t.getIconClass("close"),
                                    title: n.closeHint,
                                    onClick: this.handleCloseClick,
                                })
                            ),
                            Lo(
                                "div",
                                {
                                    className:
                                        "fc-popover-body " +
                                        t.getClass("popoverContent"),
                                },
                                o.children
                            )
                        ),
                        o.parentEl
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    document.addEventListener(
                        "mousedown",
                        this.handleDocumentMouseDown
                    ),
                        document.addEventListener(
                            "keydown",
                            this.handleDocumentKeyDown
                        ),
                        this.updateSize();
                }),
                (t.prototype.componentWillUnmount = function () {
                    document.removeEventListener(
                        "mousedown",
                        this.handleDocumentMouseDown
                    ),
                        document.removeEventListener(
                            "keydown",
                            this.handleDocumentKeyDown
                        );
                }),
                (t.prototype.updateSize = function () {
                    var e = this.context.isRtl,
                        t = this.props,
                        n = t.alignmentEl,
                        r = t.alignGridTop,
                        o = this.rootEl,
                        i = (function (e) {
                            for (
                                var t = _o(e),
                                    n = e.getBoundingClientRect(),
                                    r = 0,
                                    o = t;
                                r < o.length;
                                r++
                            ) {
                                var i = ao(n, o[r].getBoundingClientRect());
                                if (!i) return null;
                                n = i;
                            }
                            return n;
                        })(n);
                    if (i) {
                        var a = o.getBoundingClientRect(),
                            s = r
                                ? Pe(
                                      n,
                                      ".fc-scrollgrid"
                                  ).getBoundingClientRect().top
                                : i.top,
                            l = e ? i.right - a.width : i.left;
                        (s = Math.max(s, 10)),
                            (l = Math.min(
                                l,
                                document.documentElement.clientWidth -
                                    10 -
                                    a.width
                            )),
                            (l = Math.max(l, 10));
                        var u = o.offsetParent.getBoundingClientRect();
                        Oe(o, { top: s - u.top, left: l - u.left });
                    }
                }),
                t
            );
        })(Xo),
        Cs = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.handleRootEl = function (e) {
                        (t.rootEl = e),
                            e
                                ? t.context.registerInteractiveComponent(t, {
                                      el: e,
                                      useEventCenter: !1,
                                  })
                                : t.context.unregisterInteractiveComponent(t);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.options,
                        n = e.dateEnv,
                        r = this.props,
                        o = r.startDate,
                        i = r.todayRange,
                        a = r.dateProfile,
                        s = n.format(o, t.dayPopoverFormat);
                    return Lo(
                        Es,
                        {
                            date: o,
                            dateProfile: a,
                            todayRange: i,
                            elRef: this.handleRootEl,
                        },
                        function (e, t, n) {
                            return Lo(
                                xs,
                                {
                                    elRef: e,
                                    id: r.id,
                                    title: s,
                                    extraClassNames: ["fc-more-popover"].concat(
                                        t
                                    ),
                                    extraAttrs: n,
                                    parentEl: r.parentEl,
                                    alignmentEl: r.alignmentEl,
                                    alignGridTop: r.alignGridTop,
                                    onClose: r.onClose,
                                },
                                Lo(
                                    ms,
                                    { date: o, dateProfile: a, todayRange: i },
                                    function (e, t) {
                                        return (
                                            t &&
                                            Lo(
                                                "div",
                                                {
                                                    className:
                                                        "fc-more-popover-misc",
                                                    ref: e,
                                                },
                                                t
                                            )
                                        );
                                    }
                                ),
                                r.children
                            );
                        }
                    );
                }),
                (t.prototype.queryHit = function (e, t, n, o) {
                    var i = this.rootEl,
                        a = this.props;
                    return e >= 0 && e < n && t >= 0 && t < o
                        ? {
                              dateProfile: a.dateProfile,
                              dateSpan: r(
                                  {
                                      allDay: !0,
                                      range: {
                                          start: a.startDate,
                                          end: a.endDate,
                                      },
                                  },
                                  a.extraDateSpan
                              ),
                              dayEl: i,
                              rect: { left: 0, top: 0, right: n, bottom: o },
                              layer: 1,
                          }
                        : null;
                }),
                t
            );
        })(Qo),
        ks = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.linkElRef = Wo()),
                    (t.state = { isPopoverOpen: !1, popoverId: ze() }),
                    (t.handleClick = function (e) {
                        var n = t,
                            r = n.props,
                            o = n.context,
                            i = o.options.moreLinkClick,
                            a = Rs(r).start;
                        function s(e) {
                            var t = e.eventRange,
                                n = t.def,
                                r = t.instance,
                                i = t.range;
                            return {
                                event: new Vr(o, n, r),
                                start: o.dateEnv.toDate(i.start),
                                end: o.dateEnv.toDate(i.end),
                                isStart: e.isStart,
                                isEnd: e.isEnd,
                            };
                        }
                        "function" == typeof i &&
                            (i = i({
                                date: a,
                                allDay: Boolean(r.allDayDate),
                                allSegs: r.allSegs.map(s),
                                hiddenSegs: r.hiddenSegs.map(s),
                                jsEvent: e,
                                view: o.viewApi,
                            })),
                            i && "popover" !== i
                                ? "string" == typeof i &&
                                  o.calendarApi.zoomTo(a, i)
                                : t.setState({ isPopoverOpen: !0 });
                    }),
                    (t.handlePopoverClose = function () {
                        t.setState({ isPopoverOpen: !1 });
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = this.state;
                    return Lo(qo.Consumer, null, function (r) {
                        var o = r.viewApi,
                            i = r.options,
                            a = r.calendarApi,
                            s = i.moreLinkText,
                            l = t.moreCnt,
                            u = Rs(t),
                            c =
                                "function" == typeof s
                                    ? s.call(a, l)
                                    : "+" + l + " " + s,
                            d = st(i.moreLinkHint, [l], c),
                            p = {
                                num: l,
                                shortText: "+" + l,
                                text: c,
                                view: o,
                            };
                        return Lo(
                            Vo,
                            null,
                            Boolean(t.moreCnt) &&
                                Lo(
                                    oi,
                                    {
                                        elRef: e.linkElRef,
                                        hookProps: p,
                                        classNames: i.moreLinkClassNames,
                                        content: i.moreLinkContent,
                                        defaultContent: t.defaultContent || _s,
                                        didMount: i.moreLinkDidMount,
                                        willUnmount: i.moreLinkWillUnmount,
                                    },
                                    function (r, o, i, a) {
                                        return t.children(
                                            r,
                                            ["fc-more-link"].concat(o),
                                            i,
                                            a,
                                            e.handleClick,
                                            d,
                                            n.isPopoverOpen,
                                            n.isPopoverOpen ? n.popoverId : ""
                                        );
                                    }
                                ),
                            n.isPopoverOpen &&
                                Lo(
                                    Cs,
                                    {
                                        id: n.popoverId,
                                        startDate: u.start,
                                        endDate: u.end,
                                        dateProfile: t.dateProfile,
                                        todayRange: t.todayRange,
                                        extraDateSpan: t.extraDateSpan,
                                        parentEl: e.parentEl,
                                        alignmentEl: t.alignmentElRef.current,
                                        alignGridTop: t.alignGridTop,
                                        onClose: e.handlePopoverClose,
                                    },
                                    t.popoverContent()
                                )
                        );
                    });
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateParentEl();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateParentEl();
                }),
                (t.prototype.updateParentEl = function () {
                    this.linkElRef.current &&
                        (this.parentEl = Pe(
                            this.linkElRef.current,
                            ".fc-view-harness"
                        ));
                }),
                t
            );
        })(Xo);
    function _s(e) {
        return e.text;
    }
    function Rs(e) {
        if (e.allDayDate)
            return { start: e.allDayDate, end: ft(e.allDayDate, 1) };
        var t,
            n = e.hiddenSegs;
        return {
            start: Ms(n),
            end: ((t = n), t.reduce(Ps).eventRange.range.end),
        };
    }
    function Ms(e) {
        return e.reduce(Is).eventRange.range.start;
    }
    function Is(e, t) {
        return e.eventRange.range.start < t.eventRange.range.start ? e : t;
    }
    function Ps(e, t) {
        return e.eventRange.range.end > t.eventRange.range.end ? e : t;
    }
    var Ns = (function (e) {
        function t(t, n) {
            void 0 === n && (n = {});
            var o = e.call(this) || this;
            return (
                (o.isRendering = !1),
                (o.isRendered = !1),
                (o.currentClassNames = []),
                (o.customContentRenderId = 0),
                (o.handleAction = function (e) {
                    switch (e.type) {
                        case "SET_EVENT_DRAG":
                        case "SET_EVENT_RESIZE":
                            o.renderRunner.tryDrain();
                    }
                }),
                (o.handleData = function (e) {
                    (o.currentData = e),
                        o.renderRunner.request(e.calendarOptions.rerenderDelay);
                }),
                (o.handleRenderRequest = function () {
                    if (o.isRendering) {
                        o.isRendered = !0;
                        var e = o.currentData;
                        Bo(function () {
                            Uo(
                                Lo(
                                    Ca,
                                    {
                                        options: e.calendarOptions,
                                        theme: e.theme,
                                        emitter: e.emitter,
                                    },
                                    function (t, n, i, a) {
                                        return (
                                            o.setClassNames(t),
                                            o.setHeight(n),
                                            Lo(
                                                ii.Provider,
                                                {
                                                    value: o.customContentRenderId,
                                                },
                                                Lo(
                                                    Da,
                                                    r(
                                                        {
                                                            isHeightAuto: i,
                                                            forPrint: a,
                                                        },
                                                        e
                                                    )
                                                )
                                            )
                                        );
                                    }
                                ),
                                o.el
                            );
                        });
                    } else
                        o.isRendered &&
                            ((o.isRendered = !1),
                            jo(o.el),
                            o.setClassNames([]),
                            o.setHeight(""));
                }),
                (o.el = t),
                (o.renderRunner = new zi(o.handleRenderRequest)),
                new ji({
                    optionOverrides: n,
                    calendarApi: o,
                    onAction: o.handleAction,
                    onData: o.handleData,
                }),
                o
            );
        }
        return (
            n(t, e),
            Object.defineProperty(t.prototype, "view", {
                get: function () {
                    return this.currentData.viewApi;
                },
                enumerable: !1,
                configurable: !0,
            }),
            (t.prototype.render = function () {
                var e = this.isRendering;
                e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
                    this.renderRunner.request(),
                    e && this.updateSize();
            }),
            (t.prototype.destroy = function () {
                this.isRendering &&
                    ((this.isRendering = !1), this.renderRunner.request());
            }),
            (t.prototype.updateSize = function () {
                var t = this;
                Bo(function () {
                    e.prototype.updateSize.call(t);
                });
            }),
            (t.prototype.batchRendering = function (e) {
                this.renderRunner.pause("batchRendering"),
                    e(),
                    this.renderRunner.resume("batchRendering");
            }),
            (t.prototype.pauseRendering = function () {
                this.renderRunner.pause("pauseRendering");
            }),
            (t.prototype.resumeRendering = function () {
                this.renderRunner.resume("pauseRendering", !0);
            }),
            (t.prototype.resetOptions = function (e, t) {
                this.currentDataManager.resetOptions(e, t);
            }),
            (t.prototype.setClassNames = function (e) {
                if (!rn(e, this.currentClassNames)) {
                    for (
                        var t = this.el.classList,
                            n = 0,
                            r = this.currentClassNames;
                        n < r.length;
                        n++
                    ) {
                        var o = r[n];
                        t.remove(o);
                    }
                    for (var i = 0, a = e; i < a.length; i++) {
                        o = a[i];
                        t.add(o);
                    }
                    this.currentClassNames = e;
                }
            }),
            (t.prototype.setHeight = function (e) {
                Le(this.el, "height", e);
            }),
            t
        );
    })(Wr);
    va.touchMouseIgnoreWait = 500;
    var Hs = 0,
        As = 0,
        Os = !1,
        Ls = (function () {
            function e(e) {
                var t = this;
                (this.subjectEl = null),
                    (this.selector = ""),
                    (this.handleSelector = ""),
                    (this.shouldIgnoreMove = !1),
                    (this.shouldWatchScroll = !0),
                    (this.isDragging = !1),
                    (this.isTouchDragging = !1),
                    (this.wasTouchScroll = !1),
                    (this.handleMouseDown = function (e) {
                        if (
                            !t.shouldIgnoreMouse() &&
                            (function (e) {
                                return 0 === e.button && !e.ctrlKey;
                            })(e) &&
                            t.tryStart(e)
                        ) {
                            var n = t.createEventFromMouse(e, !0);
                            t.emitter.trigger("pointerdown", n),
                                t.initScrollWatch(n),
                                t.shouldIgnoreMove ||
                                    document.addEventListener(
                                        "mousemove",
                                        t.handleMouseMove
                                    ),
                                document.addEventListener(
                                    "mouseup",
                                    t.handleMouseUp
                                );
                        }
                    }),
                    (this.handleMouseMove = function (e) {
                        var n = t.createEventFromMouse(e);
                        t.recordCoords(n), t.emitter.trigger("pointermove", n);
                    }),
                    (this.handleMouseUp = function (e) {
                        document.removeEventListener(
                            "mousemove",
                            t.handleMouseMove
                        ),
                            document.removeEventListener(
                                "mouseup",
                                t.handleMouseUp
                            ),
                            t.emitter.trigger(
                                "pointerup",
                                t.createEventFromMouse(e)
                            ),
                            t.cleanup();
                    }),
                    (this.handleTouchStart = function (e) {
                        if (t.tryStart(e)) {
                            t.isTouchDragging = !0;
                            var n = t.createEventFromTouch(e, !0);
                            t.emitter.trigger("pointerdown", n),
                                t.initScrollWatch(n);
                            var r = e.target;
                            t.shouldIgnoreMove ||
                                r.addEventListener(
                                    "touchmove",
                                    t.handleTouchMove
                                ),
                                r.addEventListener(
                                    "touchend",
                                    t.handleTouchEnd
                                ),
                                r.addEventListener(
                                    "touchcancel",
                                    t.handleTouchEnd
                                ),
                                window.addEventListener(
                                    "scroll",
                                    t.handleTouchScroll,
                                    !0
                                );
                        }
                    }),
                    (this.handleTouchMove = function (e) {
                        var n = t.createEventFromTouch(e);
                        t.recordCoords(n), t.emitter.trigger("pointermove", n);
                    }),
                    (this.handleTouchEnd = function (e) {
                        if (t.isDragging) {
                            var n = e.target;
                            n.removeEventListener(
                                "touchmove",
                                t.handleTouchMove
                            ),
                                n.removeEventListener(
                                    "touchend",
                                    t.handleTouchEnd
                                ),
                                n.removeEventListener(
                                    "touchcancel",
                                    t.handleTouchEnd
                                ),
                                window.removeEventListener(
                                    "scroll",
                                    t.handleTouchScroll,
                                    !0
                                ),
                                t.emitter.trigger(
                                    "pointerup",
                                    t.createEventFromTouch(e)
                                ),
                                t.cleanup(),
                                (t.isTouchDragging = !1),
                                (Hs += 1),
                                setTimeout(function () {
                                    Hs -= 1;
                                }, va.touchMouseIgnoreWait);
                        }
                    }),
                    (this.handleTouchScroll = function () {
                        t.wasTouchScroll = !0;
                    }),
                    (this.handleScroll = function (e) {
                        if (!t.shouldIgnoreMove) {
                            var n =
                                    window.pageXOffset -
                                    t.prevScrollX +
                                    t.prevPageX,
                                r =
                                    window.pageYOffset -
                                    t.prevScrollY +
                                    t.prevPageY;
                            t.emitter.trigger("pointermove", {
                                origEvent: e,
                                isTouch: t.isTouchDragging,
                                subjectEl: t.subjectEl,
                                pageX: n,
                                pageY: r,
                                deltaX: n - t.origPageX,
                                deltaY: r - t.origPageY,
                            });
                        }
                    }),
                    (this.containerEl = e),
                    (this.emitter = new Mo()),
                    e.addEventListener("mousedown", this.handleMouseDown),
                    e.addEventListener("touchstart", this.handleTouchStart, {
                        passive: !0,
                    }),
                    1 === (As += 1) &&
                        window.addEventListener("touchmove", Us, {
                            passive: !1,
                        });
            }
            return (
                (e.prototype.destroy = function () {
                    this.containerEl.removeEventListener(
                        "mousedown",
                        this.handleMouseDown
                    ),
                        this.containerEl.removeEventListener(
                            "touchstart",
                            this.handleTouchStart,
                            { passive: !0 }
                        ),
                        (As -= 1) ||
                            window.removeEventListener("touchmove", Us, {
                                passive: !1,
                            });
                }),
                (e.prototype.tryStart = function (e) {
                    var t = this.querySubjectEl(e),
                        n = e.target;
                    return (
                        !(
                            !t ||
                            (this.handleSelector && !Pe(n, this.handleSelector))
                        ) &&
                        ((this.subjectEl = t),
                        (this.isDragging = !0),
                        (this.wasTouchScroll = !1),
                        !0)
                    );
                }),
                (e.prototype.cleanup = function () {
                    (Os = !1),
                        (this.isDragging = !1),
                        (this.subjectEl = null),
                        this.destroyScrollWatch();
                }),
                (e.prototype.querySubjectEl = function (e) {
                    return this.selector
                        ? Pe(e.target, this.selector)
                        : this.containerEl;
                }),
                (e.prototype.shouldIgnoreMouse = function () {
                    return Hs || this.isTouchDragging;
                }),
                (e.prototype.cancelTouchScroll = function () {
                    this.isDragging && (Os = !0);
                }),
                (e.prototype.initScrollWatch = function (e) {
                    this.shouldWatchScroll &&
                        (this.recordCoords(e),
                        window.addEventListener(
                            "scroll",
                            this.handleScroll,
                            !0
                        ));
                }),
                (e.prototype.recordCoords = function (e) {
                    this.shouldWatchScroll &&
                        ((this.prevPageX = e.pageX),
                        (this.prevPageY = e.pageY),
                        (this.prevScrollX = window.pageXOffset),
                        (this.prevScrollY = window.pageYOffset));
                }),
                (e.prototype.destroyScrollWatch = function () {
                    this.shouldWatchScroll &&
                        window.removeEventListener(
                            "scroll",
                            this.handleScroll,
                            !0
                        );
                }),
                (e.prototype.createEventFromMouse = function (e, t) {
                    var n = 0,
                        r = 0;
                    return (
                        t
                            ? ((this.origPageX = e.pageX),
                              (this.origPageY = e.pageY))
                            : ((n = e.pageX - this.origPageX),
                              (r = e.pageY - this.origPageY)),
                        {
                            origEvent: e,
                            isTouch: !1,
                            subjectEl: this.subjectEl,
                            pageX: e.pageX,
                            pageY: e.pageY,
                            deltaX: n,
                            deltaY: r,
                        }
                    );
                }),
                (e.prototype.createEventFromTouch = function (e, t) {
                    var n,
                        r,
                        o = e.touches,
                        i = 0,
                        a = 0;
                    return (
                        o && o.length
                            ? ((n = o[0].pageX), (r = o[0].pageY))
                            : ((n = e.pageX), (r = e.pageY)),
                        t
                            ? ((this.origPageX = n), (this.origPageY = r))
                            : ((i = n - this.origPageX),
                              (a = r - this.origPageY)),
                        {
                            origEvent: e,
                            isTouch: !0,
                            subjectEl: this.subjectEl,
                            pageX: n,
                            pageY: r,
                            deltaX: i,
                            deltaY: a,
                        }
                    );
                }),
                e
            );
        })();
    function Us(e) {
        Os && e.preventDefault();
    }
    var Ws = (function () {
            function e() {
                (this.isVisible = !1),
                    (this.sourceEl = null),
                    (this.mirrorEl = null),
                    (this.sourceElRect = null),
                    (this.parentNode = document.body),
                    (this.zIndex = 9999),
                    (this.revertDuration = 0);
            }
            return (
                (e.prototype.start = function (e, t, n) {
                    (this.sourceEl = e),
                        (this.sourceElRect =
                            this.sourceEl.getBoundingClientRect()),
                        (this.origScreenX = t - window.pageXOffset),
                        (this.origScreenY = n - window.pageYOffset),
                        (this.deltaX = 0),
                        (this.deltaY = 0),
                        this.updateElPosition();
                }),
                (e.prototype.handleMove = function (e, t) {
                    (this.deltaX = e - window.pageXOffset - this.origScreenX),
                        (this.deltaY =
                            t - window.pageYOffset - this.origScreenY),
                        this.updateElPosition();
                }),
                (e.prototype.setIsVisible = function (e) {
                    e
                        ? this.isVisible ||
                          (this.mirrorEl && (this.mirrorEl.style.display = ""),
                          (this.isVisible = e),
                          this.updateElPosition())
                        : this.isVisible &&
                          (this.mirrorEl &&
                              (this.mirrorEl.style.display = "none"),
                          (this.isVisible = e));
                }),
                (e.prototype.stop = function (e, t) {
                    var n = this,
                        r = function () {
                            n.cleanup(), t();
                        };
                    e &&
                    this.mirrorEl &&
                    this.isVisible &&
                    this.revertDuration &&
                    (this.deltaX || this.deltaY)
                        ? this.doRevertAnimation(r, this.revertDuration)
                        : setTimeout(r, 0);
                }),
                (e.prototype.doRevertAnimation = function (e, t) {
                    var n = this.mirrorEl,
                        r = this.sourceEl.getBoundingClientRect();
                    (n.style.transition = "top " + t + "ms,left " + t + "ms"),
                        Oe(n, { left: r.left, top: r.top }),
                        Ge(n, function () {
                            (n.style.transition = ""), e();
                        });
                }),
                (e.prototype.cleanup = function () {
                    this.mirrorEl &&
                        (Ie(this.mirrorEl), (this.mirrorEl = null)),
                        (this.sourceEl = null);
                }),
                (e.prototype.updateElPosition = function () {
                    this.sourceEl &&
                        this.isVisible &&
                        Oe(this.getMirrorEl(), {
                            left: this.sourceElRect.left + this.deltaX,
                            top: this.sourceElRect.top + this.deltaY,
                        });
                }),
                (e.prototype.getMirrorEl = function () {
                    var e = this.sourceElRect,
                        t = this.mirrorEl;
                    return (
                        t ||
                            ((t = this.mirrorEl =
                                this.sourceEl.cloneNode(!0)).classList.add(
                                "fc-unselectable"
                            ),
                            t.classList.add("fc-event-dragging"),
                            Oe(t, {
                                position: "fixed",
                                zIndex: this.zIndex,
                                visibility: "",
                                boxSizing: "border-box",
                                width: e.right - e.left,
                                height: e.bottom - e.top,
                                right: "auto",
                                bottom: "auto",
                                margin: 0,
                            }),
                            this.parentNode.appendChild(t)),
                        t
                    );
                }),
                e
            );
        })(),
        Vs = (function (e) {
            function t(t, n) {
                var r = e.call(this) || this;
                return (
                    (r.handleScroll = function () {
                        (r.scrollTop = r.scrollController.getScrollTop()),
                            (r.scrollLeft = r.scrollController.getScrollLeft()),
                            r.handleScrollChange();
                    }),
                    (r.scrollController = t),
                    (r.doesListening = n),
                    (r.scrollTop = r.origScrollTop = t.getScrollTop()),
                    (r.scrollLeft = r.origScrollLeft = t.getScrollLeft()),
                    (r.scrollWidth = t.getScrollWidth()),
                    (r.scrollHeight = t.getScrollHeight()),
                    (r.clientWidth = t.getClientWidth()),
                    (r.clientHeight = t.getClientHeight()),
                    (r.clientRect = r.computeClientRect()),
                    r.doesListening &&
                        r
                            .getEventTarget()
                            .addEventListener("scroll", r.handleScroll),
                    r
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.doesListening &&
                        this.getEventTarget().removeEventListener(
                            "scroll",
                            this.handleScroll
                        );
                }),
                (t.prototype.getScrollTop = function () {
                    return this.scrollTop;
                }),
                (t.prototype.getScrollLeft = function () {
                    return this.scrollLeft;
                }),
                (t.prototype.setScrollTop = function (e) {
                    this.scrollController.setScrollTop(e),
                        this.doesListening ||
                            ((this.scrollTop = Math.max(
                                Math.min(e, this.getMaxScrollTop()),
                                0
                            )),
                            this.handleScrollChange());
                }),
                (t.prototype.setScrollLeft = function (e) {
                    this.scrollController.setScrollLeft(e),
                        this.doesListening ||
                            ((this.scrollLeft = Math.max(
                                Math.min(e, this.getMaxScrollLeft()),
                                0
                            )),
                            this.handleScrollChange());
                }),
                (t.prototype.getClientWidth = function () {
                    return this.clientWidth;
                }),
                (t.prototype.getClientHeight = function () {
                    return this.clientHeight;
                }),
                (t.prototype.getScrollWidth = function () {
                    return this.scrollWidth;
                }),
                (t.prototype.getScrollHeight = function () {
                    return this.scrollHeight;
                }),
                (t.prototype.handleScrollChange = function () {}),
                t
            );
        })(Po),
        zs = (function (e) {
            function t(t, n) {
                return e.call(this, new No(t), n) || this;
            }
            return (
                n(t, e),
                (t.prototype.getEventTarget = function () {
                    return this.scrollController.el;
                }),
                (t.prototype.computeClientRect = function () {
                    return Co(this.scrollController.el);
                }),
                t
            );
        })(Vs),
        Fs = (function (e) {
            function t(t) {
                return e.call(this, new Ho(), t) || this;
            }
            return (
                n(t, e),
                (t.prototype.getEventTarget = function () {
                    return window;
                }),
                (t.prototype.computeClientRect = function () {
                    return {
                        left: this.scrollLeft,
                        right: this.scrollLeft + this.clientWidth,
                        top: this.scrollTop,
                        bottom: this.scrollTop + this.clientHeight,
                    };
                }),
                (t.prototype.handleScrollChange = function () {
                    this.clientRect = this.computeClientRect();
                }),
                t
            );
        })(Vs),
        Bs = "function" == typeof performance ? performance.now : Date.now,
        js = (function () {
            function e() {
                var e = this;
                (this.isEnabled = !0),
                    (this.scrollQuery = [window, ".fc-scroller"]),
                    (this.edgeThreshold = 50),
                    (this.maxVelocity = 300),
                    (this.pointerScreenX = null),
                    (this.pointerScreenY = null),
                    (this.isAnimating = !1),
                    (this.scrollCaches = null),
                    (this.everMovedUp = !1),
                    (this.everMovedDown = !1),
                    (this.everMovedLeft = !1),
                    (this.everMovedRight = !1),
                    (this.animate = function () {
                        if (e.isAnimating) {
                            var t = e.computeBestEdge(
                                e.pointerScreenX + window.pageXOffset,
                                e.pointerScreenY + window.pageYOffset
                            );
                            if (t) {
                                var n = Bs();
                                e.handleSide(t, (n - e.msSinceRequest) / 1e3),
                                    e.requestAnimation(n);
                            } else e.isAnimating = !1;
                        }
                    });
            }
            return (
                (e.prototype.start = function (e, t, n) {
                    this.isEnabled &&
                        ((this.scrollCaches = this.buildCaches(n)),
                        (this.pointerScreenX = null),
                        (this.pointerScreenY = null),
                        (this.everMovedUp = !1),
                        (this.everMovedDown = !1),
                        (this.everMovedLeft = !1),
                        (this.everMovedRight = !1),
                        this.handleMove(e, t));
                }),
                (e.prototype.handleMove = function (e, t) {
                    if (this.isEnabled) {
                        var n = e - window.pageXOffset,
                            r = t - window.pageYOffset,
                            o =
                                null === this.pointerScreenY
                                    ? 0
                                    : r - this.pointerScreenY,
                            i =
                                null === this.pointerScreenX
                                    ? 0
                                    : n - this.pointerScreenX;
                        o < 0
                            ? (this.everMovedUp = !0)
                            : o > 0 && (this.everMovedDown = !0),
                            i < 0
                                ? (this.everMovedLeft = !0)
                                : i > 0 && (this.everMovedRight = !0),
                            (this.pointerScreenX = n),
                            (this.pointerScreenY = r),
                            this.isAnimating ||
                                ((this.isAnimating = !0),
                                this.requestAnimation(Bs()));
                    }
                }),
                (e.prototype.stop = function () {
                    if (this.isEnabled) {
                        this.isAnimating = !1;
                        for (
                            var e = 0, t = this.scrollCaches;
                            e < t.length;
                            e++
                        ) {
                            t[e].destroy();
                        }
                        this.scrollCaches = null;
                    }
                }),
                (e.prototype.requestAnimation = function (e) {
                    (this.msSinceRequest = e),
                        requestAnimationFrame(this.animate);
                }),
                (e.prototype.handleSide = function (e, t) {
                    var n = e.scrollCache,
                        r = this.edgeThreshold,
                        o = r - e.distance,
                        i = ((o * o) / (r * r)) * this.maxVelocity * t,
                        a = 1;
                    switch (e.name) {
                        case "left":
                            a = -1;
                        case "right":
                            n.setScrollLeft(n.getScrollLeft() + i * a);
                            break;
                        case "top":
                            a = -1;
                        case "bottom":
                            n.setScrollTop(n.getScrollTop() + i * a);
                    }
                }),
                (e.prototype.computeBestEdge = function (e, t) {
                    for (
                        var n = this.edgeThreshold,
                            r = null,
                            o = 0,
                            i = this.scrollCaches || [];
                        o < i.length;
                        o++
                    ) {
                        var a = i[o],
                            s = a.clientRect,
                            l = e - s.left,
                            u = s.right - e,
                            c = t - s.top,
                            d = s.bottom - t;
                        l >= 0 &&
                            u >= 0 &&
                            c >= 0 &&
                            d >= 0 &&
                            (c <= n &&
                                this.everMovedUp &&
                                a.canScrollUp() &&
                                (!r || r.distance > c) &&
                                (r = {
                                    scrollCache: a,
                                    name: "top",
                                    distance: c,
                                }),
                            d <= n &&
                                this.everMovedDown &&
                                a.canScrollDown() &&
                                (!r || r.distance > d) &&
                                (r = {
                                    scrollCache: a,
                                    name: "bottom",
                                    distance: d,
                                }),
                            l <= n &&
                                this.everMovedLeft &&
                                a.canScrollLeft() &&
                                (!r || r.distance > l) &&
                                (r = {
                                    scrollCache: a,
                                    name: "left",
                                    distance: l,
                                }),
                            u <= n &&
                                this.everMovedRight &&
                                a.canScrollRight() &&
                                (!r || r.distance > u) &&
                                (r = {
                                    scrollCache: a,
                                    name: "right",
                                    distance: u,
                                }));
                    }
                    return r;
                }),
                (e.prototype.buildCaches = function (e) {
                    return this.queryScrollEls(e).map(function (e) {
                        return e === window ? new Fs(!1) : new zs(e, !1);
                    });
                }),
                (e.prototype.queryScrollEls = function (e) {
                    for (
                        var t = [], n = 0, r = this.scrollQuery;
                        n < r.length;
                        n++
                    ) {
                        var o = r[n];
                        "object" == typeof o
                            ? t.push(o)
                            : t.push.apply(
                                  t,
                                  Array.prototype.slice.call(
                                      We(e).querySelectorAll(o)
                                  )
                              );
                    }
                    return t;
                }),
                e
            );
        })(),
        Gs = (function (e) {
            function t(t, n) {
                var r = e.call(this, t) || this;
                (r.containerEl = t),
                    (r.delay = null),
                    (r.minDistance = 0),
                    (r.touchScrollAllowed = !0),
                    (r.mirrorNeedsRevert = !1),
                    (r.isInteracting = !1),
                    (r.isDragging = !1),
                    (r.isDelayEnded = !1),
                    (r.isDistanceSurpassed = !1),
                    (r.delayTimeoutId = null),
                    (r.onPointerDown = function (e) {
                        r.isDragging ||
                            ((r.isInteracting = !0),
                            (r.isDelayEnded = !1),
                            (r.isDistanceSurpassed = !1),
                            Je(document.body),
                            et(document.body),
                            e.isTouch || e.origEvent.preventDefault(),
                            r.emitter.trigger("pointerdown", e),
                            r.isInteracting &&
                                !r.pointer.shouldIgnoreMove &&
                                (r.mirror.setIsVisible(!1),
                                r.mirror.start(e.subjectEl, e.pageX, e.pageY),
                                r.startDelay(e),
                                r.minDistance || r.handleDistanceSurpassed(e)));
                    }),
                    (r.onPointerMove = function (e) {
                        if (r.isInteracting) {
                            if (
                                (r.emitter.trigger("pointermove", e),
                                !r.isDistanceSurpassed)
                            ) {
                                var t = r.minDistance,
                                    n = e.deltaX,
                                    o = e.deltaY;
                                n * n + o * o >= t * t &&
                                    r.handleDistanceSurpassed(e);
                            }
                            r.isDragging &&
                                ("scroll" !== e.origEvent.type &&
                                    (r.mirror.handleMove(e.pageX, e.pageY),
                                    r.autoScroller.handleMove(
                                        e.pageX,
                                        e.pageY
                                    )),
                                r.emitter.trigger("dragmove", e));
                        }
                    }),
                    (r.onPointerUp = function (e) {
                        r.isInteracting &&
                            ((r.isInteracting = !1),
                            Qe(document.body),
                            tt(document.body),
                            r.emitter.trigger("pointerup", e),
                            r.isDragging &&
                                (r.autoScroller.stop(), r.tryStopDrag(e)),
                            r.delayTimeoutId &&
                                (clearTimeout(r.delayTimeoutId),
                                (r.delayTimeoutId = null)));
                    });
                var o = (r.pointer = new Ls(t));
                return (
                    o.emitter.on("pointerdown", r.onPointerDown),
                    o.emitter.on("pointermove", r.onPointerMove),
                    o.emitter.on("pointerup", r.onPointerUp),
                    n && (o.selector = n),
                    (r.mirror = new Ws()),
                    (r.autoScroller = new js()),
                    r
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.pointer.destroy(), this.onPointerUp({});
                }),
                (t.prototype.startDelay = function (e) {
                    var t = this;
                    "number" == typeof this.delay
                        ? (this.delayTimeoutId = setTimeout(function () {
                              (t.delayTimeoutId = null), t.handleDelayEnd(e);
                          }, this.delay))
                        : this.handleDelayEnd(e);
                }),
                (t.prototype.handleDelayEnd = function (e) {
                    (this.isDelayEnded = !0), this.tryStartDrag(e);
                }),
                (t.prototype.handleDistanceSurpassed = function (e) {
                    (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
                }),
                (t.prototype.tryStartDrag = function (e) {
                    this.isDelayEnded &&
                        this.isDistanceSurpassed &&
                        ((this.pointer.wasTouchScroll &&
                            !this.touchScrollAllowed) ||
                            ((this.isDragging = !0),
                            (this.mirrorNeedsRevert = !1),
                            this.autoScroller.start(
                                e.pageX,
                                e.pageY,
                                this.containerEl
                            ),
                            this.emitter.trigger("dragstart", e),
                            !1 === this.touchScrollAllowed &&
                                this.pointer.cancelTouchScroll()));
                }),
                (t.prototype.tryStopDrag = function (e) {
                    this.mirror.stop(
                        this.mirrorNeedsRevert,
                        this.stopDrag.bind(this, e)
                    );
                }),
                (t.prototype.stopDrag = function (e) {
                    (this.isDragging = !1), this.emitter.trigger("dragend", e);
                }),
                (t.prototype.setIgnoreMove = function (e) {
                    this.pointer.shouldIgnoreMove = e;
                }),
                (t.prototype.setMirrorIsVisible = function (e) {
                    this.mirror.setIsVisible(e);
                }),
                (t.prototype.setMirrorNeedsRevert = function (e) {
                    this.mirrorNeedsRevert = e;
                }),
                (t.prototype.setAutoScrollEnabled = function (e) {
                    this.autoScroller.isEnabled = e;
                }),
                t
            );
        })(ha),
        qs = (function () {
            function e(e) {
                (this.origRect = ko(e)),
                    (this.scrollCaches = _o(e).map(function (e) {
                        return new zs(e, !0);
                    }));
            }
            return (
                (e.prototype.destroy = function () {
                    for (var e = 0, t = this.scrollCaches; e < t.length; e++) {
                        t[e].destroy();
                    }
                }),
                (e.prototype.computeLeft = function () {
                    for (
                        var e = this.origRect.left,
                            t = 0,
                            n = this.scrollCaches;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        e += r.origScrollLeft - r.getScrollLeft();
                    }
                    return e;
                }),
                (e.prototype.computeTop = function () {
                    for (
                        var e = this.origRect.top, t = 0, n = this.scrollCaches;
                        t < n.length;
                        t++
                    ) {
                        var r = n[t];
                        e += r.origScrollTop - r.getScrollTop();
                    }
                    return e;
                }),
                (e.prototype.isWithinClipping = function (e, t) {
                    for (
                        var n,
                            r,
                            o = { left: e, top: t },
                            i = 0,
                            a = this.scrollCaches;
                        i < a.length;
                        i++
                    ) {
                        var s = a[i];
                        if (
                            ((n = s.getEventTarget()),
                            (r = void 0),
                            "HTML" !== (r = n.tagName) &&
                                "BODY" !== r &&
                                !io(o, s.clientRect))
                        )
                            return !1;
                    }
                    return !0;
                }),
                e
            );
        })();
    var Ys = (function () {
        function e(e, t) {
            var n = this;
            (this.useSubjectCenter = !1),
                (this.requireInitial = !0),
                (this.initialHit = null),
                (this.movingHit = null),
                (this.finalHit = null),
                (this.handlePointerDown = function (e) {
                    var t = n.dragging;
                    (n.initialHit = null),
                        (n.movingHit = null),
                        (n.finalHit = null),
                        n.prepareHits(),
                        n.processFirstCoord(e),
                        n.initialHit || !n.requireInitial
                            ? (t.setIgnoreMove(!1),
                              n.emitter.trigger("pointerdown", e))
                            : t.setIgnoreMove(!0);
                }),
                (this.handleDragStart = function (e) {
                    n.emitter.trigger("dragstart", e), n.handleMove(e, !0);
                }),
                (this.handleDragMove = function (e) {
                    n.emitter.trigger("dragmove", e), n.handleMove(e);
                }),
                (this.handlePointerUp = function (e) {
                    n.releaseHits(), n.emitter.trigger("pointerup", e);
                }),
                (this.handleDragEnd = function (e) {
                    n.movingHit && n.emitter.trigger("hitupdate", null, !0, e),
                        (n.finalHit = n.movingHit),
                        (n.movingHit = null),
                        n.emitter.trigger("dragend", e);
                }),
                (this.droppableStore = t),
                e.emitter.on("pointerdown", this.handlePointerDown),
                e.emitter.on("dragstart", this.handleDragStart),
                e.emitter.on("dragmove", this.handleDragMove),
                e.emitter.on("pointerup", this.handlePointerUp),
                e.emitter.on("dragend", this.handleDragEnd),
                (this.dragging = e),
                (this.emitter = new Mo());
        }
        return (
            (e.prototype.processFirstCoord = function (e) {
                var t,
                    n = { left: e.pageX, top: e.pageY },
                    r = n,
                    o = e.subjectEl;
                o instanceof HTMLElement && (r = so(r, (t = ko(o))));
                var i = (this.initialHit = this.queryHitForOffset(
                    r.left,
                    r.top
                ));
                if (i) {
                    if (this.useSubjectCenter && t) {
                        var a = ao(t, i.rect);
                        a && (r = lo(a));
                    }
                    this.coordAdjust = uo(r, n);
                } else this.coordAdjust = { left: 0, top: 0 };
            }),
            (e.prototype.handleMove = function (e, t) {
                var n = this.queryHitForOffset(
                    e.pageX + this.coordAdjust.left,
                    e.pageY + this.coordAdjust.top
                );
                (!t && Zs(this.movingHit, n)) ||
                    ((this.movingHit = n),
                    this.emitter.trigger("hitupdate", n, !1, e));
            }),
            (e.prototype.prepareHits = function () {
                this.offsetTrackers = Nt(this.droppableStore, function (e) {
                    return e.component.prepareHits(), new qs(e.el);
                });
            }),
            (e.prototype.releaseHits = function () {
                var e = this.offsetTrackers;
                for (var t in e) e[t].destroy();
                this.offsetTrackers = {};
            }),
            (e.prototype.queryHitForOffset = function (e, t) {
                var n = this.droppableStore,
                    r = this.offsetTrackers,
                    o = null;
                for (var i in n) {
                    var a = n[i].component,
                        s = r[i];
                    if (s && s.isWithinClipping(e, t)) {
                        var l = s.computeLeft(),
                            u = s.computeTop(),
                            c = e - l,
                            d = t - u,
                            p = s.origRect,
                            f = p.right - p.left,
                            h = p.bottom - p.top;
                        if (c >= 0 && c < f && d >= 0 && d < h) {
                            var v = a.queryHit(c, d, f, h);
                            v &&
                                ir(
                                    v.dateProfile.activeRange,
                                    v.dateSpan.range
                                ) &&
                                (!o || v.layer > o.layer) &&
                                ((v.componentId = i),
                                (v.context = a.context),
                                (v.rect.left += l),
                                (v.rect.right += l),
                                (v.rect.top += u),
                                (v.rect.bottom += u),
                                (o = v));
                        }
                    }
                }
                return o;
            }),
            e
        );
    })();
    function Zs(e, t) {
        return (
            (!e && !t) ||
            (Boolean(e) === Boolean(t) && xr(e.dateSpan, t.dateSpan))
        );
    }
    function Xs(e, t) {
        for (
            var n, o, i = {}, a = 0, s = t.pluginHooks.datePointTransforms;
            a < s.length;
            a++
        ) {
            var l = s[a];
            r(i, l(e, t));
        }
        return (
            r(
                i,
                ((n = e),
                {
                    date: (o = t.dateEnv).toDate(n.range.start),
                    dateStr: o.formatIso(n.range.start, { omitTime: n.allDay }),
                    allDay: n.allDay,
                })
            ),
            i
        );
    }
    var Ks = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.handlePointerDown = function (e) {
                    var t = n.dragging,
                        r = e.origEvent.target;
                    t.setIgnoreMove(!n.component.isValidDateDownEl(r));
                }),
                    (n.handleDragEnd = function (e) {
                        var t = n.component;
                        if (!n.dragging.pointer.wasTouchScroll) {
                            var o = n.hitDragging,
                                i = o.initialHit,
                                a = o.finalHit;
                            if (i && a && Zs(i, a)) {
                                var s = t.context,
                                    l = r(r({}, Xs(i.dateSpan, s)), {
                                        dayEl: i.dayEl,
                                        jsEvent: e.origEvent,
                                        view: s.viewApi || s.calendarApi.view,
                                    });
                                s.emitter.trigger("dateClick", l);
                            }
                        }
                    }),
                    (n.dragging = new Gs(t.el)),
                    (n.dragging.autoScroller.isEnabled = !1);
                var o = (n.hitDragging = new Ys(n.dragging, pa(t)));
                return (
                    o.emitter.on("pointerdown", n.handlePointerDown),
                    o.emitter.on("dragend", n.handleDragEnd),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                t
            );
        })(da),
        $s = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.dragSelection = null),
                    (n.handlePointerDown = function (e) {
                        var t = n,
                            r = t.component,
                            o = t.dragging,
                            i =
                                r.context.options.selectable &&
                                r.isValidDateDownEl(e.origEvent.target);
                        o.setIgnoreMove(!i),
                            (o.delay = e.isTouch
                                ? (function (e) {
                                      var t = e.context.options,
                                          n = t.selectLongPressDelay;
                                      null == n && (n = t.longPressDelay);
                                      return n;
                                  })(r)
                                : null);
                    }),
                    (n.handleDragStart = function (e) {
                        n.component.context.calendarApi.unselect(e);
                    }),
                    (n.handleHitUpdate = function (e, t) {
                        var o = n.component.context,
                            i = null,
                            a = !1;
                        if (e) {
                            var s = n.hitDragging.initialHit;
                            (e.componentId === s.componentId &&
                                n.isHitComboAllowed &&
                                !n.isHitComboAllowed(s, e)) ||
                                (i = (function (e, t, n) {
                                    var o = e.dateSpan,
                                        i = t.dateSpan,
                                        a = [
                                            o.range.start,
                                            o.range.end,
                                            i.range.start,
                                            i.range.end,
                                        ];
                                    a.sort(lt);
                                    for (
                                        var s = {}, l = 0, u = n;
                                        l < u.length;
                                        l++
                                    ) {
                                        var c = (0, u[l])(e, t);
                                        if (!1 === c) return null;
                                        c && r(s, c);
                                    }
                                    return (
                                        (s.range = { start: a[0], end: a[3] }),
                                        (s.allDay = o.allDay),
                                        s
                                    );
                                })(
                                    s,
                                    e,
                                    o.pluginHooks.dateSelectionTransformers
                                )),
                                (i && Fa(i, e.dateProfile, o)) ||
                                    ((a = !0), (i = null));
                        }
                        i
                            ? o.dispatch({ type: "SELECT_DATES", selection: i })
                            : t || o.dispatch({ type: "UNSELECT_DATES" }),
                            a ? Ke() : $e(),
                            t || (n.dragSelection = i);
                    }),
                    (n.handlePointerUp = function (e) {
                        n.dragSelection &&
                            (_r(n.dragSelection, e, n.component.context),
                            (n.dragSelection = null));
                    });
                var o = t.component.context.options,
                    i = (n.dragging = new Gs(t.el));
                (i.touchScrollAllowed = !1),
                    (i.minDistance = o.selectMinDistance || 0),
                    (i.autoScroller.isEnabled = o.dragScroll);
                var a = (n.hitDragging = new Ys(n.dragging, pa(t)));
                return (
                    a.emitter.on("pointerdown", n.handlePointerDown),
                    a.emitter.on("dragstart", n.handleDragStart),
                    a.emitter.on("hitupdate", n.handleHitUpdate),
                    a.emitter.on("pointerup", n.handlePointerUp),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                t
            );
        })(da);
    var Js = (function (e) {
        function t(n) {
            var o = e.call(this, n) || this;
            (o.subjectEl = null),
                (o.subjectSeg = null),
                (o.isDragging = !1),
                (o.eventRange = null),
                (o.relevantEvents = null),
                (o.receivingContext = null),
                (o.validMutation = null),
                (o.mutatedRelevantEvents = null),
                (o.handlePointerDown = function (e) {
                    var t = e.origEvent.target,
                        n = o,
                        r = n.component,
                        i = n.dragging,
                        a = i.mirror,
                        s = r.context.options,
                        l = r.context;
                    o.subjectEl = e.subjectEl;
                    var u = (o.subjectSeg = cr(e.subjectEl)),
                        c = (o.eventRange = u.eventRange).instance.instanceId;
                    (o.relevantEvents = Nn(l.getCurrentData().eventStore, c)),
                        (i.minDistance = e.isTouch
                            ? 0
                            : s.eventDragMinDistance),
                        (i.delay =
                            e.isTouch && c !== r.props.eventSelection
                                ? (function (e) {
                                      var t = e.context.options,
                                          n = t.eventLongPressDelay;
                                      null == n && (n = t.longPressDelay);
                                      return n;
                                  })(r)
                                : null),
                        s.fixedMirrorParent
                            ? (a.parentNode = s.fixedMirrorParent)
                            : (a.parentNode = Pe(t, ".fc")),
                        (a.revertDuration = s.dragRevertDuration);
                    var d =
                        r.isValidSegDownEl(t) && !Pe(t, ".fc-event-resizer");
                    i.setIgnoreMove(!d),
                        (o.isDragging =
                            d &&
                            e.subjectEl.classList.contains(
                                "fc-event-draggable"
                            ));
                }),
                (o.handleDragStart = function (e) {
                    var t = o.component.context,
                        n = o.eventRange,
                        r = n.instance.instanceId;
                    e.isTouch
                        ? r !== o.component.props.eventSelection &&
                          t.dispatch({
                              type: "SELECT_EVENT",
                              eventInstanceId: r,
                          })
                        : t.dispatch({ type: "UNSELECT_EVENT" }),
                        o.isDragging &&
                            (t.calendarApi.unselect(e),
                            t.emitter.trigger("eventDragStart", {
                                el: o.subjectEl,
                                event: new Vr(t, n.def, n.instance),
                                jsEvent: e.origEvent,
                                view: t.viewApi,
                            }));
                }),
                (o.handleHitUpdate = function (e, t) {
                    if (o.isDragging) {
                        var n = o.relevantEvents,
                            r = o.hitDragging.initialHit,
                            i = o.component.context,
                            a = null,
                            s = null,
                            l = null,
                            u = !1,
                            c = {
                                affectedEvents: n,
                                mutatedEvents: { defs: {}, instances: {} },
                                isEvent: !0,
                            };
                        if (e) {
                            var d = (a = e.context).options;
                            i === a || (d.editable && d.droppable)
                                ? (s = (function (e, t, n) {
                                      var r = e.dateSpan,
                                          o = t.dateSpan,
                                          i = r.range.start,
                                          a = o.range.start,
                                          s = {};
                                      r.allDay !== o.allDay &&
                                          ((s.allDay = o.allDay),
                                          (s.hasEnd =
                                              t.context.options.allDayMaintainDuration),
                                          o.allDay && (i = bt(i)));
                                      var l = Qn(
                                          i,
                                          a,
                                          e.context.dateEnv,
                                          e.componentId === t.componentId
                                              ? e.largeUnit
                                              : null
                                      );
                                      l.milliseconds && (s.allDay = !1);
                                      for (
                                          var u = {
                                                  datesDelta: l,
                                                  standardProps: s,
                                              },
                                              c = 0,
                                              d = n;
                                          c < d.length;
                                          c++
                                      ) {
                                          (0, d[c])(u, e, t);
                                      }
                                      return u;
                                  })(
                                      r,
                                      e,
                                      a.getCurrentData().pluginHooks
                                          .eventDragMutationMassagers
                                  )) &&
                                  ((l = Ir(
                                      n,
                                      a.getCurrentData().eventUiBases,
                                      s,
                                      a
                                  )),
                                  (c.mutatedEvents = l),
                                  za(c, e.dateProfile, a) ||
                                      ((u = !0),
                                      (s = null),
                                      (l = null),
                                      (c.mutatedEvents = {
                                          defs: {},
                                          instances: {},
                                      })))
                                : (a = null);
                        }
                        o.displayDrag(a, c),
                            u ? Ke() : $e(),
                            t ||
                                (i === a && Zs(r, e) && (s = null),
                                o.dragging.setMirrorNeedsRevert(!s),
                                o.dragging.setMirrorIsVisible(
                                    !e ||
                                        !We(o.subjectEl).querySelector(
                                            ".fc-event-mirror"
                                        )
                                ),
                                (o.receivingContext = a),
                                (o.validMutation = s),
                                (o.mutatedRelevantEvents = l));
                    }
                }),
                (o.handlePointerUp = function () {
                    o.isDragging || o.cleanup();
                }),
                (o.handleDragEnd = function (e) {
                    if (o.isDragging) {
                        var t = o.component.context,
                            n = t.viewApi,
                            i = o,
                            a = i.receivingContext,
                            s = i.validMutation,
                            l = o.eventRange.def,
                            u = o.eventRange.instance,
                            c = new Vr(t, l, u),
                            d = o.relevantEvents,
                            p = o.mutatedRelevantEvents,
                            f = o.hitDragging.finalHit;
                        if (
                            (o.clearDrag(),
                            t.emitter.trigger("eventDragStop", {
                                el: o.subjectEl,
                                event: c,
                                jsEvent: e.origEvent,
                                view: n,
                            }),
                            s)
                        ) {
                            if (a === t) {
                                var h = new Vr(
                                    t,
                                    p.defs[l.defId],
                                    u ? p.instances[u.instanceId] : null
                                );
                                t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: p,
                                });
                                for (
                                    var v = {
                                            oldEvent: c,
                                            event: h,
                                            relatedEvents: Fr(p, t, u),
                                            revert: function () {
                                                t.dispatch({
                                                    type: "MERGE_EVENTS",
                                                    eventStore: d,
                                                });
                                            },
                                        },
                                        g = {},
                                        m = 0,
                                        y =
                                            t.getCurrentData().pluginHooks
                                                .eventDropTransformers;
                                    m < y.length;
                                    m++
                                ) {
                                    var E = y[m];
                                    r(g, E(s, t));
                                }
                                t.emitter.trigger(
                                    "eventDrop",
                                    r(r(r({}, v), g), {
                                        el: e.subjectEl,
                                        delta: s.datesDelta,
                                        jsEvent: e.origEvent,
                                        view: n,
                                    })
                                ),
                                    t.emitter.trigger("eventChange", v);
                            } else if (a) {
                                var b = {
                                    event: c,
                                    relatedEvents: Fr(d, t, u),
                                    revert: function () {
                                        t.dispatch({
                                            type: "MERGE_EVENTS",
                                            eventStore: d,
                                        });
                                    },
                                };
                                t.emitter.trigger(
                                    "eventLeave",
                                    r(r({}, b), {
                                        draggedEl: e.subjectEl,
                                        view: n,
                                    })
                                ),
                                    t.dispatch({
                                        type: "REMOVE_EVENTS",
                                        eventStore: d,
                                    }),
                                    t.emitter.trigger("eventRemove", b);
                                var S = p.defs[l.defId],
                                    w = p.instances[u.instanceId],
                                    D = new Vr(a, S, w);
                                a.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: p,
                                });
                                var T = {
                                    event: D,
                                    relatedEvents: Fr(p, a, w),
                                    revert: function () {
                                        a.dispatch({
                                            type: "REMOVE_EVENTS",
                                            eventStore: p,
                                        });
                                    },
                                };
                                a.emitter.trigger("eventAdd", T),
                                    e.isTouch &&
                                        a.dispatch({
                                            type: "SELECT_EVENT",
                                            eventInstanceId: u.instanceId,
                                        }),
                                    a.emitter.trigger(
                                        "drop",
                                        r(r({}, Xs(f.dateSpan, a)), {
                                            draggedEl: e.subjectEl,
                                            jsEvent: e.origEvent,
                                            view: f.context.viewApi,
                                        })
                                    ),
                                    a.emitter.trigger(
                                        "eventReceive",
                                        r(r({}, T), {
                                            draggedEl: e.subjectEl,
                                            view: f.context.viewApi,
                                        })
                                    );
                            }
                        } else t.emitter.trigger("_noEventDrop");
                    }
                    o.cleanup();
                });
            var i = o.component.context.options,
                a = (o.dragging = new Gs(n.el));
            (a.pointer.selector = t.SELECTOR),
                (a.touchScrollAllowed = !1),
                (a.autoScroller.isEnabled = i.dragScroll);
            var s = (o.hitDragging = new Ys(o.dragging, fa));
            return (
                (s.useSubjectCenter = n.useEventCenter),
                s.emitter.on("pointerdown", o.handlePointerDown),
                s.emitter.on("dragstart", o.handleDragStart),
                s.emitter.on("hitupdate", o.handleHitUpdate),
                s.emitter.on("pointerup", o.handlePointerUp),
                s.emitter.on("dragend", o.handleDragEnd),
                o
            );
        }
        return (
            n(t, e),
            (t.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            (t.prototype.displayDrag = function (e, t) {
                var n = this.component.context,
                    r = this.receivingContext;
                r &&
                    r !== e &&
                    (r === n
                        ? r.dispatch({
                              type: "SET_EVENT_DRAG",
                              state: {
                                  affectedEvents: t.affectedEvents,
                                  mutatedEvents: { defs: {}, instances: {} },
                                  isEvent: !0,
                              },
                          })
                        : r.dispatch({ type: "UNSET_EVENT_DRAG" })),
                    e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
            }),
            (t.prototype.clearDrag = function () {
                var e = this.component.context,
                    t = this.receivingContext;
                t && t.dispatch({ type: "UNSET_EVENT_DRAG" }),
                    e !== t && e.dispatch({ type: "UNSET_EVENT_DRAG" });
            }),
            (t.prototype.cleanup = function () {
                (this.subjectSeg = null),
                    (this.isDragging = !1),
                    (this.eventRange = null),
                    (this.relevantEvents = null),
                    (this.receivingContext = null),
                    (this.validMutation = null),
                    (this.mutatedRelevantEvents = null);
            }),
            (t.SELECTOR = ".fc-event-draggable, .fc-event-resizable"),
            t
        );
    })(da);
    var Qs = (function (e) {
        function t(t) {
            var n = e.call(this, t) || this;
            (n.draggingSegEl = null),
                (n.draggingSeg = null),
                (n.eventRange = null),
                (n.relevantEvents = null),
                (n.validMutation = null),
                (n.mutatedRelevantEvents = null),
                (n.handlePointerDown = function (e) {
                    var t = n.component,
                        r = cr(n.querySegEl(e)),
                        o = (n.eventRange = r.eventRange);
                    (n.dragging.minDistance =
                        t.context.options.eventDragMinDistance),
                        n.dragging.setIgnoreMove(
                            !n.component.isValidSegDownEl(e.origEvent.target) ||
                                (e.isTouch &&
                                    n.component.props.eventSelection !==
                                        o.instance.instanceId)
                        );
                }),
                (n.handleDragStart = function (e) {
                    var t = n.component.context,
                        r = n.eventRange;
                    n.relevantEvents = Nn(
                        t.getCurrentData().eventStore,
                        n.eventRange.instance.instanceId
                    );
                    var o = n.querySegEl(e);
                    (n.draggingSegEl = o),
                        (n.draggingSeg = cr(o)),
                        t.calendarApi.unselect(),
                        t.emitter.trigger("eventResizeStart", {
                            el: o,
                            event: new Vr(t, r.def, r.instance),
                            jsEvent: e.origEvent,
                            view: t.viewApi,
                        });
                }),
                (n.handleHitUpdate = function (e, t, r) {
                    var o = n.component.context,
                        i = n.relevantEvents,
                        a = n.hitDragging.initialHit,
                        s = n.eventRange.instance,
                        l = null,
                        u = null,
                        c = !1,
                        d = {
                            affectedEvents: i,
                            mutatedEvents: { defs: {}, instances: {} },
                            isEvent: !0,
                        };
                    e &&
                        ((e.componentId === a.componentId &&
                            n.isHitComboAllowed &&
                            !n.isHitComboAllowed(a, e)) ||
                            (l = (function (e, t, n, r) {
                                var o = e.context.dateEnv,
                                    i = e.dateSpan.range.start,
                                    a = t.dateSpan.range.start,
                                    s = Qn(i, a, o, e.largeUnit);
                                if (n) {
                                    if (o.add(r.start, s) < r.end)
                                        return { startDelta: s };
                                } else if (o.add(r.end, s) > r.start)
                                    return { endDelta: s };
                                return null;
                            })(
                                a,
                                e,
                                r.subjectEl.classList.contains(
                                    "fc-event-resizer-start"
                                ),
                                s.range
                            )));
                    l &&
                        ((u = Ir(i, o.getCurrentData().eventUiBases, l, o)),
                        (d.mutatedEvents = u),
                        za(d, e.dateProfile, o) ||
                            ((c = !0),
                            (l = null),
                            (u = null),
                            (d.mutatedEvents = null))),
                        u
                            ? o.dispatch({ type: "SET_EVENT_RESIZE", state: d })
                            : o.dispatch({ type: "UNSET_EVENT_RESIZE" }),
                        c ? Ke() : $e(),
                        t ||
                            (l && Zs(a, e) && (l = null),
                            (n.validMutation = l),
                            (n.mutatedRelevantEvents = u));
                }),
                (n.handleDragEnd = function (e) {
                    var t = n.component.context,
                        o = n.eventRange.def,
                        i = n.eventRange.instance,
                        a = new Vr(t, o, i),
                        s = n.relevantEvents,
                        l = n.mutatedRelevantEvents;
                    if (
                        (t.emitter.trigger("eventResizeStop", {
                            el: n.draggingSegEl,
                            event: a,
                            jsEvent: e.origEvent,
                            view: t.viewApi,
                        }),
                        n.validMutation)
                    ) {
                        var u = new Vr(
                            t,
                            l.defs[o.defId],
                            i ? l.instances[i.instanceId] : null
                        );
                        t.dispatch({ type: "MERGE_EVENTS", eventStore: l });
                        var c = {
                            oldEvent: a,
                            event: u,
                            relatedEvents: Fr(l, t, i),
                            revert: function () {
                                t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: s,
                                });
                            },
                        };
                        t.emitter.trigger(
                            "eventResize",
                            r(r({}, c), {
                                el: n.draggingSegEl,
                                startDelta: n.validMutation.startDelta || Gt(0),
                                endDelta: n.validMutation.endDelta || Gt(0),
                                jsEvent: e.origEvent,
                                view: t.viewApi,
                            })
                        ),
                            t.emitter.trigger("eventChange", c);
                    } else t.emitter.trigger("_noEventResize");
                    (n.draggingSeg = null),
                        (n.relevantEvents = null),
                        (n.validMutation = null);
                });
            var o = t.component,
                i = (n.dragging = new Gs(t.el));
            (i.pointer.selector = ".fc-event-resizer"),
                (i.touchScrollAllowed = !1),
                (i.autoScroller.isEnabled = o.context.options.dragScroll);
            var a = (n.hitDragging = new Ys(n.dragging, pa(t)));
            return (
                a.emitter.on("pointerdown", n.handlePointerDown),
                a.emitter.on("dragstart", n.handleDragStart),
                a.emitter.on("hitupdate", n.handleHitUpdate),
                a.emitter.on("dragend", n.handleDragEnd),
                n
            );
        }
        return (
            n(t, e),
            (t.prototype.destroy = function () {
                this.dragging.destroy();
            }),
            (t.prototype.querySegEl = function (e) {
                return Pe(e.subjectEl, ".fc-event");
            }),
            t
        );
    })(da);
    var el = (function () {
            function e(e) {
                var t = this;
                (this.context = e),
                    (this.isRecentPointerDateSelect = !1),
                    (this.matchesCancel = !1),
                    (this.matchesEvent = !1),
                    (this.onSelect = function (e) {
                        e.jsEvent && (t.isRecentPointerDateSelect = !0);
                    }),
                    (this.onDocumentPointerDown = function (e) {
                        var n = t.context.options.unselectCancel,
                            r = Ue(e.origEvent);
                        (t.matchesCancel = !!Pe(r, n)),
                            (t.matchesEvent = !!Pe(r, Js.SELECTOR));
                    }),
                    (this.onDocumentPointerUp = function (e) {
                        var n = t.context,
                            r = t.documentPointer,
                            o = n.getCurrentData();
                        if (!r.wasTouchScroll) {
                            if (
                                o.dateSelection &&
                                !t.isRecentPointerDateSelect
                            ) {
                                var i = n.options.unselectAuto;
                                !i ||
                                    (i && t.matchesCancel) ||
                                    n.calendarApi.unselect(e);
                            }
                            o.eventSelection &&
                                !t.matchesEvent &&
                                n.dispatch({ type: "UNSELECT_EVENT" });
                        }
                        t.isRecentPointerDateSelect = !1;
                    });
                var n = (this.documentPointer = new Ls(document));
                (n.shouldIgnoreMove = !0),
                    (n.shouldWatchScroll = !1),
                    n.emitter.on("pointerdown", this.onDocumentPointerDown),
                    n.emitter.on("pointerup", this.onDocumentPointerUp),
                    e.emitter.on("select", this.onSelect);
            }
            return (
                (e.prototype.destroy = function () {
                    this.context.emitter.off("select", this.onSelect),
                        this.documentPointer.destroy();
                }),
                e
            );
        })(),
        tl = { fixedMirrorParent: Mn },
        nl = {
            dateClick: Mn,
            eventDragStart: Mn,
            eventDragStop: Mn,
            eventDrop: Mn,
            eventResizeStart: Mn,
            eventResizeStop: Mn,
            eventResize: Mn,
            drop: Mn,
            eventReceive: Mn,
            eventLeave: Mn,
        },
        rl = (function () {
            function e(e, t) {
                var n = this;
                (this.receivingContext = null),
                    (this.droppableEvent = null),
                    (this.suppliedDragMeta = null),
                    (this.dragMeta = null),
                    (this.handleDragStart = function (e) {
                        n.dragMeta = n.buildDragMeta(e.subjectEl);
                    }),
                    (this.handleHitUpdate = function (e, t, o) {
                        var i = n.hitDragging.dragging,
                            a = null,
                            s = null,
                            l = !1,
                            u = {
                                affectedEvents: { defs: {}, instances: {} },
                                mutatedEvents: { defs: {}, instances: {} },
                                isEvent: n.dragMeta.create,
                            };
                        e &&
                            ((a = e.context),
                            n.canDropElOnCalendar(o.subjectEl, a) &&
                                ((s = (function (e, t, n) {
                                    for (
                                        var o = r({}, t.leftoverProps),
                                            i = 0,
                                            a =
                                                n.pluginHooks
                                                    .externalDefTransforms;
                                        i < a.length;
                                        i++
                                    ) {
                                        var s = a[i];
                                        r(o, s(e, t));
                                    }
                                    var l = Yn(o, n),
                                        u = l.refined,
                                        c = l.extra,
                                        d = Xn(
                                            u,
                                            c,
                                            t.sourceId,
                                            e.allDay,
                                            n.options.forceEventDuration ||
                                                Boolean(t.duration),
                                            n
                                        ),
                                        p = e.range.start;
                                    e.allDay &&
                                        t.startTime &&
                                        (p = n.dateEnv.add(p, t.startTime));
                                    var f = t.duration
                                            ? n.dateEnv.add(p, t.duration)
                                            : Mr(e.allDay, p, n),
                                        h = Rt(d.defId, { start: p, end: f });
                                    return { def: d, instance: h };
                                })(e.dateSpan, n.dragMeta, a)),
                                (u.mutatedEvents = Pn(s)),
                                (l = !za(u, e.dateProfile, a)) &&
                                    ((u.mutatedEvents = {
                                        defs: {},
                                        instances: {},
                                    }),
                                    (s = null)))),
                            n.displayDrag(a, u),
                            i.setMirrorIsVisible(
                                t ||
                                    !s ||
                                    !document.querySelector(".fc-event-mirror")
                            ),
                            l ? Ke() : $e(),
                            t ||
                                (i.setMirrorNeedsRevert(!s),
                                (n.receivingContext = a),
                                (n.droppableEvent = s));
                    }),
                    (this.handleDragEnd = function (e) {
                        var t = n,
                            o = t.receivingContext,
                            i = t.droppableEvent;
                        if ((n.clearDrag(), o && i)) {
                            var a = n.hitDragging.finalHit,
                                s = a.context.viewApi,
                                l = n.dragMeta;
                            if (
                                (o.emitter.trigger(
                                    "drop",
                                    r(r({}, Xs(a.dateSpan, o)), {
                                        draggedEl: e.subjectEl,
                                        jsEvent: e.origEvent,
                                        view: s,
                                    })
                                ),
                                l.create)
                            ) {
                                var u = Pn(i);
                                o.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: u,
                                }),
                                    e.isTouch &&
                                        o.dispatch({
                                            type: "SELECT_EVENT",
                                            eventInstanceId:
                                                i.instance.instanceId,
                                        }),
                                    o.emitter.trigger("eventReceive", {
                                        event: new Vr(o, i.def, i.instance),
                                        relatedEvents: [],
                                        revert: function () {
                                            o.dispatch({
                                                type: "REMOVE_EVENTS",
                                                eventStore: u,
                                            });
                                        },
                                        draggedEl: e.subjectEl,
                                        view: s,
                                    });
                            }
                        }
                        (n.receivingContext = null), (n.droppableEvent = null);
                    });
                var o = (this.hitDragging = new Ys(e, fa));
                (o.requireInitial = !1),
                    o.emitter.on("dragstart", this.handleDragStart),
                    o.emitter.on("hitupdate", this.handleHitUpdate),
                    o.emitter.on("dragend", this.handleDragEnd),
                    (this.suppliedDragMeta = t);
            }
            return (
                (e.prototype.buildDragMeta = function (e) {
                    return "object" == typeof this.suppliedDragMeta
                        ? ma(this.suppliedDragMeta)
                        : "function" == typeof this.suppliedDragMeta
                        ? ma(this.suppliedDragMeta(e))
                        : ((t = (function (e, t) {
                              var n = va.dataAttrPrefix,
                                  r = (n ? n + "-" : "") + t;
                              return e.getAttribute("data-" + r) || "";
                          })(e, "event")),
                          ma(t ? JSON.parse(t) : { create: !1 }));
                    var t;
                }),
                (e.prototype.displayDrag = function (e, t) {
                    var n = this.receivingContext;
                    n && n !== e && n.dispatch({ type: "UNSET_EVENT_DRAG" }),
                        e && e.dispatch({ type: "SET_EVENT_DRAG", state: t });
                }),
                (e.prototype.clearDrag = function () {
                    this.receivingContext &&
                        this.receivingContext.dispatch({
                            type: "UNSET_EVENT_DRAG",
                        });
                }),
                (e.prototype.canDropElOnCalendar = function (e, t) {
                    var n = t.options.dropAccept;
                    return "function" == typeof n
                        ? n.call(t.calendarApi, e)
                        : "string" != typeof n || !n || Boolean(Ne(e, n));
                }),
                e
            );
        })();
    va.dataAttrPrefix = "";
    var ol = (function () {
            function e(e, t) {
                var n = this;
                void 0 === t && (t = {}),
                    (this.handlePointerDown = function (e) {
                        var t = n.dragging,
                            r = n.settings,
                            o = r.minDistance,
                            i = r.longPressDelay;
                        (t.minDistance =
                            null != o
                                ? o
                                : e.isTouch
                                ? 0
                                : wn.eventDragMinDistance),
                            (t.delay = e.isTouch
                                ? null != i
                                    ? i
                                    : wn.longPressDelay
                                : 0);
                    }),
                    (this.handleDragStart = function (e) {
                        e.isTouch &&
                            n.dragging.delay &&
                            e.subjectEl.classList.contains("fc-event") &&
                            n.dragging.mirror
                                .getMirrorEl()
                                .classList.add("fc-event-selected");
                    }),
                    (this.settings = t);
                var r = (this.dragging = new Gs(e));
                (r.touchScrollAllowed = !1),
                    null != t.itemSelector &&
                        (r.pointer.selector = t.itemSelector),
                    null != t.appendTo && (r.mirror.parentNode = t.appendTo),
                    r.emitter.on("pointerdown", this.handlePointerDown),
                    r.emitter.on("dragstart", this.handleDragStart),
                    new rl(r, t.eventData);
            }
            return (
                (e.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                e
            );
        })(),
        il = (function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                (n.shouldIgnoreMove = !1),
                    (n.mirrorSelector = ""),
                    (n.currentMirrorEl = null),
                    (n.handlePointerDown = function (e) {
                        n.emitter.trigger("pointerdown", e),
                            n.shouldIgnoreMove ||
                                n.emitter.trigger("dragstart", e);
                    }),
                    (n.handlePointerMove = function (e) {
                        n.shouldIgnoreMove || n.emitter.trigger("dragmove", e);
                    }),
                    (n.handlePointerUp = function (e) {
                        n.emitter.trigger("pointerup", e),
                            n.shouldIgnoreMove ||
                                n.emitter.trigger("dragend", e);
                    });
                var r = (n.pointer = new Ls(t));
                return (
                    r.emitter.on("pointerdown", n.handlePointerDown),
                    r.emitter.on("pointermove", n.handlePointerMove),
                    r.emitter.on("pointerup", n.handlePointerUp),
                    n
                );
            }
            return (
                n(t, e),
                (t.prototype.destroy = function () {
                    this.pointer.destroy();
                }),
                (t.prototype.setIgnoreMove = function (e) {
                    this.shouldIgnoreMove = e;
                }),
                (t.prototype.setMirrorIsVisible = function (e) {
                    if (e)
                        this.currentMirrorEl &&
                            ((this.currentMirrorEl.style.visibility = ""),
                            (this.currentMirrorEl = null));
                    else {
                        var t = this.mirrorSelector
                            ? document.querySelector(this.mirrorSelector)
                            : null;
                        t &&
                            ((this.currentMirrorEl = t),
                            (t.style.visibility = "hidden"));
                    }
                }),
                t
            );
        })(ha),
        al = (function () {
            function e(e, t) {
                var n = document;
                e === document || e instanceof Element
                    ? ((n = e), (t = t || {}))
                    : (t = e || {});
                var r = (this.dragging = new il(n));
                "string" == typeof t.itemSelector
                    ? (r.pointer.selector = t.itemSelector)
                    : n === document && (r.pointer.selector = "[data-event]"),
                    "string" == typeof t.mirrorSelector &&
                        (r.mirrorSelector = t.mirrorSelector),
                    new rl(r, t.eventData);
            }
            return (
                (e.prototype.destroy = function () {
                    this.dragging.destroy();
                }),
                e
            );
        })(),
        sl = ei({
            componentInteractions: [Ks, $s, Js, Qs],
            calendarInteractions: [el],
            elementDraggingImpl: Gs,
            optionRefiners: tl,
            listenerRefiners: nl,
        }),
        ll = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.headerElRef = Wo()), t;
            }
            return (
                n(t, e),
                (t.prototype.renderSimpleLayout = function (e, t) {
                    var n = this.props,
                        r = this.context,
                        o = [],
                        i = us(r.options);
                    return (
                        e &&
                            o.push({
                                type: "header",
                                key: "header",
                                isSticky: i,
                                chunk: {
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            }),
                        o.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            chunk: { content: t },
                        }),
                        Lo(pi, { viewSpec: r.viewSpec }, function (e, t) {
                            return Lo(
                                "div",
                                {
                                    ref: e,
                                    className: ["fc-daygrid"]
                                        .concat(t)
                                        .join(" "),
                                },
                                Lo(ds, {
                                    liquid: !n.isHeightAuto && !n.forPrint,
                                    collapsibleWidth: n.forPrint,
                                    cols: [],
                                    sections: o,
                                })
                            );
                        })
                    );
                }),
                (t.prototype.renderHScrollLayout = function (e, t, n, r) {
                    var o = this.context.pluginHooks.scrollGridImpl;
                    if (!o) throw new Error("No ScrollGrid implementation");
                    var i = this.props,
                        a = this.context,
                        s = !i.forPrint && us(a.options),
                        l = !i.forPrint && cs(a.options),
                        u = [];
                    return (
                        e &&
                            u.push({
                                type: "header",
                                key: "header",
                                isSticky: s,
                                chunks: [
                                    {
                                        key: "main",
                                        elRef: this.headerElRef,
                                        tableClassName: "fc-col-header",
                                        rowContent: e,
                                    },
                                ],
                            }),
                        u.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            chunks: [{ key: "main", content: t }],
                        }),
                        l &&
                            u.push({
                                type: "footer",
                                key: "footer",
                                isSticky: !0,
                                chunks: [{ key: "main", content: ls }],
                            }),
                        Lo(pi, { viewSpec: a.viewSpec }, function (e, t) {
                            return Lo(
                                "div",
                                {
                                    ref: e,
                                    className: ["fc-daygrid"]
                                        .concat(t)
                                        .join(" "),
                                },
                                Lo(o, {
                                    liquid: !i.isHeightAuto && !i.forPrint,
                                    collapsibleWidth: i.forPrint,
                                    colGroups: [
                                        { cols: [{ span: n, minWidth: r }] },
                                    ],
                                    sections: u,
                                })
                            );
                        })
                    );
                }),
                t
            );
        })(Qo);
    function ul(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.row].push(a);
        }
        return n;
    }
    function cl(e, t) {
        for (var n = [], r = 0; r < t; r += 1) n[r] = [];
        for (var o = 0, i = e; o < i.length; o++) {
            var a = i[o];
            n[a.firstCol].push(a);
        }
        return n;
    }
    function dl(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: [],
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.row].segs.push(i);
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n;
    }
    var pl = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = Eo(this.context, e.date);
                return Lo(
                    ms,
                    {
                        date: e.date,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        showDayNumber: e.showDayNumber,
                        extraHookProps: e.extraHookProps,
                        defaultContent: fl,
                    },
                    function (n, o) {
                        return (
                            (o || e.forceDayTop) &&
                            Lo(
                                "div",
                                { className: "fc-daygrid-day-top", ref: n },
                                Lo(
                                    "a",
                                    r(
                                        {
                                            id: e.dayNumberId,
                                            className: "fc-daygrid-day-number",
                                        },
                                        t
                                    ),
                                    o || Lo(Vo, null, "Â ")
                                )
                            )
                        );
                    }
                );
            }),
            t
        );
    })(Xo);
    function fl(e) {
        return e.dayNumberText;
    }
    var hl = bn({
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: !0,
        meridiem: "narrow",
    });
    function vl(e) {
        var t = e.eventRange.ui.display;
        return (
            "list-item" === t ||
            ("auto" === t &&
                !e.eventRange.def.allDay &&
                e.firstCol === e.lastCol &&
                e.isStart &&
                e.isEnd)
        );
    }
    var gl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props;
                    return Lo(
                        fs,
                        r({}, e, {
                            extraClassNames: [
                                "fc-daygrid-event",
                                "fc-daygrid-block-event",
                                "fc-h-event",
                            ],
                            defaultTimeFormat: hl,
                            defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                            disableResizing: !e.seg.eventRange.def.allDay,
                        })
                    );
                }),
                t
            );
        })(Xo),
        ml = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options.eventTimeFormat || hl,
                        o = yr(e.seg, n, t, !0, e.defaultDisplayEventEnd);
                    return Lo(
                        ps,
                        {
                            seg: e.seg,
                            timeText: o,
                            defaultContent: yl,
                            isDragging: e.isDragging,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: e.isSelected,
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                        },
                        function (n, o, i, a) {
                            return Lo(
                                "a",
                                r(
                                    {
                                        className: [
                                            "fc-daygrid-event",
                                            "fc-daygrid-dot-event",
                                        ]
                                            .concat(o)
                                            .join(" "),
                                        ref: n,
                                    },
                                    wr(e.seg, t)
                                ),
                                a
                            );
                        }
                    );
                }),
                t
            );
        })(Xo);
    function yl(e) {
        return Lo(
            Vo,
            null,
            Lo("div", {
                className: "fc-daygrid-event-dot",
                style: { borderColor: e.borderColor || e.backgroundColor },
            }),
            e.timeText && Lo("div", { className: "fc-event-time" }, e.timeText),
            Lo(
                "div",
                { className: "fc-event-title" },
                e.event.title || Lo(Vo, null, "Â ")
            )
        );
    }
    var El = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.compileSegs = on(bl)), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.compileSegs(e.singlePlacements),
                    n = t.allSegs,
                    o = t.invisibleSegs;
                return Lo(
                    ks,
                    {
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        allDayDate: e.allDayDate,
                        moreCnt: e.moreCnt,
                        allSegs: n,
                        hiddenSegs: o,
                        alignmentElRef: e.alignmentElRef,
                        alignGridTop: e.alignGridTop,
                        extraDateSpan: e.extraDateSpan,
                        popoverContent: function () {
                            var t =
                                (e.eventDrag
                                    ? e.eventDrag.affectedInstances
                                    : null) ||
                                (e.eventResize
                                    ? e.eventResize.affectedInstances
                                    : null) ||
                                {};
                            return Lo(
                                Vo,
                                null,
                                n.map(function (n) {
                                    var o = n.eventRange.instance.instanceId;
                                    return Lo(
                                        "div",
                                        {
                                            className:
                                                "fc-daygrid-event-harness",
                                            key: o,
                                            style: {
                                                visibility: t[o]
                                                    ? "hidden"
                                                    : "",
                                            },
                                        },
                                        vl(n)
                                            ? Lo(
                                                  ml,
                                                  r(
                                                      {
                                                          seg: n,
                                                          isDragging: !1,
                                                          isSelected:
                                                              o ===
                                                              e.eventSelection,
                                                          defaultDisplayEventEnd:
                                                              !1,
                                                      },
                                                      Er(n, e.todayRange)
                                                  )
                                              )
                                            : Lo(
                                                  gl,
                                                  r(
                                                      {
                                                          seg: n,
                                                          isDragging: !1,
                                                          isResizing: !1,
                                                          isDateSelecting: !1,
                                                          isSelected:
                                                              o ===
                                                              e.eventSelection,
                                                          defaultDisplayEventEnd:
                                                              !1,
                                                      },
                                                      Er(n, e.todayRange)
                                                  )
                                              )
                                    );
                                })
                            );
                        },
                    },
                    function (e, t, n, o, i, a, s, l) {
                        return Lo(
                            "a",
                            r(
                                {
                                    ref: e,
                                    className: ["fc-daygrid-more-link"]
                                        .concat(t)
                                        .join(" "),
                                    title: a,
                                    "aria-expanded": s,
                                    "aria-controls": l,
                                },
                                qe(i)
                            ),
                            o
                        );
                    }
                );
            }),
            t
        );
    })(Xo);
    function bl(e) {
        for (var t = [], n = [], r = 0, o = e; r < o.length; r++) {
            var i = o[r];
            t.push(i.seg), i.isVisible || n.push(i.seg);
        }
        return { allSegs: t, invisibleSegs: n };
    }
    var Sl = bn({ week: "narrow" }),
        wl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.rootElRef = Wo()),
                    (t.state = { dayNumberId: ze() }),
                    (t.handleRootEl = function (e) {
                        Jo(t.rootElRef, e), Jo(t.props.elRef, e);
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = e.context,
                        n = e.props,
                        o = e.state,
                        i = e.rootElRef,
                        a = n.date,
                        s = n.dateProfile,
                        l = Eo(t, a, "week");
                    return Lo(
                        Es,
                        {
                            date: a,
                            dateProfile: s,
                            todayRange: n.todayRange,
                            showDayNumber: n.showDayNumber,
                            extraHookProps: n.extraHookProps,
                            elRef: this.handleRootEl,
                        },
                        function (e, t, u, c) {
                            return Lo(
                                "td",
                                r(
                                    {
                                        ref: e,
                                        role: "gridcell",
                                        className: ["fc-daygrid-day"]
                                            .concat(t, n.extraClassNames || [])
                                            .join(" "),
                                    },
                                    u,
                                    n.extraDataAttrs,
                                    n.showDayNumber
                                        ? { "aria-labelledby": o.dayNumberId }
                                        : {}
                                ),
                                Lo(
                                    "div",
                                    {
                                        className:
                                            "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                                        ref: n.innerElRef,
                                    },
                                    n.showWeekNumber &&
                                        Lo(
                                            Ds,
                                            { date: a, defaultFormat: Sl },
                                            function (e, t, n, o) {
                                                return Lo(
                                                    "a",
                                                    r(
                                                        {
                                                            ref: e,
                                                            className: [
                                                                "fc-daygrid-week-number",
                                                            ]
                                                                .concat(t)
                                                                .join(" "),
                                                        },
                                                        l
                                                    ),
                                                    o
                                                );
                                            }
                                        ),
                                    !c &&
                                        Lo(pl, {
                                            date: a,
                                            dateProfile: s,
                                            showDayNumber: n.showDayNumber,
                                            dayNumberId: o.dayNumberId,
                                            forceDayTop: n.forceDayTop,
                                            todayRange: n.todayRange,
                                            extraHookProps: n.extraHookProps,
                                        }),
                                    Lo(
                                        "div",
                                        {
                                            className: "fc-daygrid-day-events",
                                            ref: n.fgContentElRef,
                                        },
                                        n.fgContent,
                                        Lo(
                                            "div",
                                            {
                                                className:
                                                    "fc-daygrid-day-bottom",
                                                style: {
                                                    marginTop: n.moreMarginTop,
                                                },
                                            },
                                            Lo(El, {
                                                allDayDate: a,
                                                singlePlacements:
                                                    n.singlePlacements,
                                                moreCnt: n.moreCnt,
                                                alignmentElRef: i,
                                                alignGridTop: !n.showDayNumber,
                                                extraDateSpan: n.extraDateSpan,
                                                dateProfile: n.dateProfile,
                                                eventSelection:
                                                    n.eventSelection,
                                                eventDrag: n.eventDrag,
                                                eventResize: n.eventResize,
                                                todayRange: n.todayRange,
                                            })
                                        )
                                    ),
                                    Lo(
                                        "div",
                                        { className: "fc-daygrid-day-bg" },
                                        n.bgContent
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Qo);
    function Dl(e, t, n, r, o, i, a) {
        var s = new xl();
        (s.allowReslicing = !0),
            (s.strictOrder = r),
            !0 === t || !0 === n
                ? ((s.maxCoord = i), (s.hiddenConsumes = !0))
                : "number" == typeof t
                ? (s.maxStackCnt = t)
                : "number" == typeof n &&
                  ((s.maxStackCnt = n), (s.hiddenConsumes = !0));
        for (var l = [], u = [], c = 0; c < e.length; c += 1) {
            var d = o[(x = e[c]).eventRange.instance.instanceId];
            null != d
                ? l.push({
                      index: c,
                      thickness: d,
                      span: { start: x.firstCol, end: x.lastCol + 1 },
                  })
                : u.push(x);
        }
        for (
            var p = s.addSegs(l),
                f = (function (e, t, n) {
                    for (
                        var r = (function (e, t) {
                                for (var n = [], r = 0; r < t; r += 1)
                                    n.push([]);
                                for (var o = 0, i = e; o < i.length; o++) {
                                    var a = i[o];
                                    for (
                                        r = a.span.start;
                                        r < a.span.end;
                                        r += 1
                                    )
                                        n[r].push(a);
                                }
                                return n;
                            })(e, n.length),
                            o = [],
                            i = [],
                            a = [],
                            s = 0;
                        s < n.length;
                        s += 1
                    ) {
                        for (
                            var l = r[s], u = [], c = 0, d = 0, p = 0, f = l;
                            p < f.length;
                            p++
                        ) {
                            var h = t[(y = f[p]).index];
                            u.push({
                                seg: Tl(h, s, s + 1, n),
                                isVisible: !0,
                                isAbsolute: !1,
                                absoluteTop: y.levelCoord,
                                marginTop: y.levelCoord - c,
                            }),
                                (c = y.levelCoord + y.thickness);
                        }
                        var v = [];
                        (c = 0), (d = 0);
                        for (var g = 0, m = l; g < m.length; g++) {
                            h = t[(y = m[g]).index];
                            var y,
                                E = y.span.end - y.span.start > 1,
                                b = y.span.start === s;
                            (d += y.levelCoord - c),
                                (c = y.levelCoord + y.thickness),
                                E
                                    ? ((d += y.thickness),
                                      b &&
                                          v.push({
                                              seg: Tl(
                                                  h,
                                                  y.span.start,
                                                  y.span.end,
                                                  n
                                              ),
                                              isVisible: !0,
                                              isAbsolute: !0,
                                              absoluteTop: y.levelCoord,
                                              marginTop: 0,
                                          }))
                                    : b &&
                                      (v.push({
                                          seg: Tl(
                                              h,
                                              y.span.start,
                                              y.span.end,
                                              n
                                          ),
                                          isVisible: !0,
                                          isAbsolute: !1,
                                          absoluteTop: y.levelCoord,
                                          marginTop: d,
                                      }),
                                      (d = 0));
                        }
                        o.push(u), i.push(v), a.push(d);
                    }
                    return {
                        singleColPlacements: o,
                        multiColPlacements: i,
                        leftoverMargins: a,
                    };
                })(s.toRects(), e, a),
                h = f.singleColPlacements,
                v = f.multiColPlacements,
                g = f.leftoverMargins,
                m = [],
                y = [],
                E = 0,
                b = u;
            E < b.length;
            E++
        ) {
            v[(x = b[E]).firstCol].push({
                seg: x,
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (var S = x.firstCol; S <= x.lastCol; S += 1)
                h[S].push({
                    seg: Tl(x, S, S + 1, a),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0,
                });
        }
        for (S = 0; S < a.length; S += 1) m.push(0);
        for (var w = 0, D = p; w < D.length; w++) {
            var T = D[w],
                x = e[T.index],
                C = T.span;
            v[C.start].push({
                seg: Tl(x, C.start, C.end, a),
                isVisible: !1,
                isAbsolute: !0,
                absoluteTop: 0,
                marginTop: 0,
            });
            for (S = C.start; S < C.end; S += 1)
                (m[S] += 1),
                    h[S].push({
                        seg: Tl(x, S, S + 1, a),
                        isVisible: !1,
                        isAbsolute: !1,
                        absoluteTop: 0,
                        marginTop: 0,
                    });
        }
        for (S = 0; S < a.length; S += 1) y.push(g[S]);
        return {
            singleColPlacements: h,
            multiColPlacements: v,
            moreCnts: m,
            moreMarginTops: y,
        };
    }
    function Tl(e, t, n, o) {
        if (e.firstCol === t && e.lastCol === n - 1) return e;
        var i = e.eventRange,
            a = i.range,
            s = nr(a, { start: o[t].date, end: ft(o[n - 1].date, 1) });
        return r(r({}, e), {
            firstCol: t,
            lastCol: n - 1,
            eventRange: {
                def: i.def,
                ui: r(r({}, i.ui), { durationEditable: !1 }),
                instance: i.instance,
                range: s,
            },
            isStart: e.isStart && s.start.valueOf() === a.start.valueOf(),
            isEnd: e.isEnd && s.end.valueOf() === a.end.valueOf(),
        });
    }
    var xl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.hiddenConsumes = !1), (t.forceHidden = {}), t;
            }
            return (
                n(t, e),
                (t.prototype.addSegs = function (t) {
                    for (
                        var n = this,
                            r = e.prototype.addSegs.call(this, t),
                            o = this.entriesByLevel,
                            i = function (e) {
                                return !n.forceHidden[ia(e)];
                            },
                            a = 0;
                        a < o.length;
                        a += 1
                    )
                        o[a] = o[a].filter(i);
                    return r;
                }),
                (t.prototype.handleInvalidInsertion = function (t, n, o) {
                    var i = this.entriesByLevel,
                        a = this.forceHidden,
                        s = t.touchingEntry,
                        l = t.touchingLevel,
                        u = t.touchingLateral;
                    if (this.hiddenConsumes && s) {
                        var c = ia(s);
                        if (!a[c])
                            if (this.allowReslicing) {
                                var d = r(r({}, s), {
                                    span: la(s.span, n.span),
                                });
                                (a[ia(d)] = !0),
                                    (i[l][u] = d),
                                    this.splitEntry(s, n, o);
                            } else (a[c] = !0), o.push(s);
                    }
                    return e.prototype.handleInvalidInsertion.call(
                        this,
                        t,
                        n,
                        o
                    );
                }),
                t
            );
        })(ra),
        Cl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.cellElRefs = new $a()),
                    (t.frameElRefs = new $a()),
                    (t.fgElRefs = new $a()),
                    (t.segHarnessRefs = new $a()),
                    (t.rootElRef = Wo()),
                    (t.state = {
                        framePositions: null,
                        maxContentHeight: null,
                        eventInstanceHeights: {},
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this,
                        n = t.props,
                        r = t.state,
                        o = t.context.options,
                        i = n.cells.length,
                        a = cl(n.businessHourSegs, i),
                        s = cl(n.bgEventSegs, i),
                        l = cl(this.getHighlightSegs(), i),
                        u = cl(this.getMirrorSegs(), i),
                        c = Dl(
                            fr(n.fgEventSegs, o.eventOrder),
                            n.dayMaxEvents,
                            n.dayMaxEventRows,
                            o.eventOrderStrict,
                            r.eventInstanceHeights,
                            r.maxContentHeight,
                            n.cells
                        ),
                        d = c.singleColPlacements,
                        p = c.multiColPlacements,
                        f = c.moreCnts,
                        h = c.moreMarginTops,
                        v =
                            (n.eventDrag && n.eventDrag.affectedInstances) ||
                            (n.eventResize &&
                                n.eventResize.affectedInstances) ||
                            {};
                    return Lo(
                        "tr",
                        { ref: this.rootElRef, role: "row" },
                        n.renderIntro && n.renderIntro(),
                        n.cells.map(function (t, r) {
                            var o = e.renderFgSegs(
                                    r,
                                    n.forPrint ? d[r] : p[r],
                                    n.todayRange,
                                    v
                                ),
                                i = e.renderFgSegs(
                                    r,
                                    (function (e, t) {
                                        if (!e.length) return [];
                                        var n = (function (e) {
                                            for (
                                                var t = {}, n = 0, r = e;
                                                n < r.length;
                                                n++
                                            )
                                                for (
                                                    var o = 0, i = r[n];
                                                    o < i.length;
                                                    o++
                                                ) {
                                                    var a = i[o];
                                                    t[
                                                        a.seg.eventRange.instance.instanceId
                                                    ] = a.absoluteTop;
                                                }
                                            return t;
                                        })(t);
                                        return e.map(function (e) {
                                            return {
                                                seg: e,
                                                isVisible: !0,
                                                isAbsolute: !0,
                                                absoluteTop:
                                                    n[
                                                        e.eventRange.instance
                                                            .instanceId
                                                    ],
                                                marginTop: 0,
                                            };
                                        });
                                    })(u[r], p),
                                    n.todayRange,
                                    {},
                                    Boolean(n.eventDrag),
                                    Boolean(n.eventResize),
                                    !1
                                );
                            return Lo(wl, {
                                key: t.key,
                                elRef: e.cellElRefs.createRef(t.key),
                                innerElRef: e.frameElRefs.createRef(t.key),
                                dateProfile: n.dateProfile,
                                date: t.date,
                                showDayNumber: n.showDayNumbers,
                                showWeekNumber: n.showWeekNumbers && 0 === r,
                                forceDayTop: n.showWeekNumbers,
                                todayRange: n.todayRange,
                                eventSelection: n.eventSelection,
                                eventDrag: n.eventDrag,
                                eventResize: n.eventResize,
                                extraHookProps: t.extraHookProps,
                                extraDataAttrs: t.extraDataAttrs,
                                extraClassNames: t.extraClassNames,
                                extraDateSpan: t.extraDateSpan,
                                moreCnt: f[r],
                                moreMarginTop: h[r],
                                singlePlacements: d[r],
                                fgContentElRef: e.fgElRefs.createRef(t.key),
                                fgContent: Lo(
                                    Vo,
                                    null,
                                    Lo(Vo, null, o),
                                    Lo(Vo, null, i)
                                ),
                                bgContent: Lo(
                                    Vo,
                                    null,
                                    e.renderFillSegs(l[r], "highlight"),
                                    e.renderFillSegs(a[r], "non-business"),
                                    e.renderFillSegs(s[r], "bg-event")
                                ),
                            });
                        })
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateSizing(!0);
                }),
                (t.prototype.componentDidUpdate = function (e, t) {
                    var n = this.props;
                    this.updateSizing(!Ot(e, n));
                }),
                (t.prototype.getHighlightSegs = function () {
                    var e = this.props;
                    return e.eventDrag && e.eventDrag.segs.length
                        ? e.eventDrag.segs
                        : e.eventResize && e.eventResize.segs.length
                        ? e.eventResize.segs
                        : e.dateSelectionSegs;
                }),
                (t.prototype.getMirrorSegs = function () {
                    var e = this.props;
                    return e.eventResize && e.eventResize.segs.length
                        ? e.eventResize.segs
                        : [];
                }),
                (t.prototype.renderFgSegs = function (e, t, n, o, i, a, s) {
                    var l = this.context,
                        u = this.props.eventSelection,
                        c = this.state.framePositions,
                        d = 1 === this.props.cells.length,
                        p = i || a || s,
                        f = [];
                    if (c)
                        for (var h = 0, v = t; h < v.length; h++) {
                            var g = v[h],
                                m = g.seg,
                                y = m.eventRange.instance.instanceId,
                                E = y + ":" + e,
                                b = g.isVisible && !o[y],
                                S = g.isAbsolute,
                                w = "",
                                D = "";
                            S &&
                                (l.isRtl
                                    ? ((D = 0),
                                      (w =
                                          c.lefts[m.lastCol] -
                                          c.lefts[m.firstCol]))
                                    : ((w = 0),
                                      (D =
                                          c.rights[m.firstCol] -
                                          c.rights[m.lastCol]))),
                                f.push(
                                    Lo(
                                        "div",
                                        {
                                            className:
                                                "fc-daygrid-event-harness" +
                                                (S
                                                    ? " fc-daygrid-event-harness-abs"
                                                    : ""),
                                            key: E,
                                            ref: p
                                                ? null
                                                : this.segHarnessRefs.createRef(
                                                      E
                                                  ),
                                            style: {
                                                visibility: b ? "" : "hidden",
                                                marginTop: S ? "" : g.marginTop,
                                                top: S ? g.absoluteTop : "",
                                                left: w,
                                                right: D,
                                            },
                                        },
                                        vl(m)
                                            ? Lo(
                                                  ml,
                                                  r(
                                                      {
                                                          seg: m,
                                                          isDragging: i,
                                                          isSelected: y === u,
                                                          defaultDisplayEventEnd:
                                                              d,
                                                      },
                                                      Er(m, n)
                                                  )
                                              )
                                            : Lo(
                                                  gl,
                                                  r(
                                                      {
                                                          seg: m,
                                                          isDragging: i,
                                                          isResizing: a,
                                                          isDateSelecting: s,
                                                          isSelected: y === u,
                                                          defaultDisplayEventEnd:
                                                              d,
                                                      },
                                                      Er(m, n)
                                                  )
                                              )
                                    )
                                );
                        }
                    return f;
                }),
                (t.prototype.renderFillSegs = function (e, t) {
                    var n = this.context.isRtl,
                        i = this.props.todayRange,
                        a = this.state.framePositions,
                        s = [];
                    if (a)
                        for (var l = 0, u = e; l < u.length; l++) {
                            var c = u[l],
                                d = n
                                    ? {
                                          right: 0,
                                          left:
                                              a.lefts[c.lastCol] -
                                              a.lefts[c.firstCol],
                                      }
                                    : {
                                          left: 0,
                                          right:
                                              a.rights[c.firstCol] -
                                              a.rights[c.lastCol],
                                      };
                            s.push(
                                Lo(
                                    "div",
                                    {
                                        key: Sr(c.eventRange),
                                        className: "fc-daygrid-bg-harness",
                                        style: d,
                                    },
                                    "bg-event" === t
                                        ? Lo(Ss, r({ seg: c }, Er(c, i)))
                                        : bs(t)
                                )
                            );
                        }
                    return Lo.apply(void 0, o([Vo, {}], s));
                }),
                (t.prototype.updateSizing = function (e) {
                    var t = this.props,
                        n = this.frameElRefs;
                    if (!t.forPrint && null !== t.clientWidth) {
                        if (e) {
                            var o = t.cells.map(function (e) {
                                return n.currentMap[e.key];
                            });
                            if (o.length) {
                                var i = this.rootElRef.current;
                                this.setState({
                                    framePositions: new Io(i, o, !0, !1),
                                });
                            }
                        }
                        var a = this.state.eventInstanceHeights,
                            s = this.queryEventInstanceHeights(),
                            l =
                                !0 === t.dayMaxEvents ||
                                !0 === t.dayMaxEventRows;
                        this.safeSetState({
                            eventInstanceHeights: r(r({}, a), s),
                            maxContentHeight: l
                                ? this.computeMaxContentHeight()
                                : null,
                        });
                    }
                }),
                (t.prototype.queryEventInstanceHeights = function () {
                    var e = this.segHarnessRefs.currentMap,
                        t = {};
                    for (var n in e) {
                        var r = Math.round(e[n].getBoundingClientRect().height),
                            o = n.split(":")[0];
                        t[o] = Math.max(t[o] || 0, r);
                    }
                    return t;
                }),
                (t.prototype.computeMaxContentHeight = function () {
                    var e = this.props.cells[0].key,
                        t = this.cellElRefs.currentMap[e],
                        n = this.fgElRefs.currentMap[e];
                    return (
                        t.getBoundingClientRect().bottom -
                        n.getBoundingClientRect().top
                    );
                }),
                (t.prototype.getCellEls = function () {
                    var e = this.cellElRefs.currentMap;
                    return this.props.cells.map(function (t) {
                        return e[t.key];
                    });
                }),
                t
            );
        })(Qo);
    Cl.addStateEquality({ eventInstanceHeights: Ot });
    var kl = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.splitBusinessHourSegs = on(ul)),
                (t.splitBgEventSegs = on(ul)),
                (t.splitFgEventSegs = on(ul)),
                (t.splitDateSelectionSegs = on(ul)),
                (t.splitEventDrag = on(dl)),
                (t.splitEventResize = on(dl)),
                (t.rowRefs = new $a()),
                (t.handleRootEl = function (e) {
                    (t.rootEl = e),
                        e
                            ? t.context.registerInteractiveComponent(t, {
                                  el: e,
                                  isHitComboAllowed: t.props.isHitComboAllowed,
                              })
                            : t.context.unregisterInteractiveComponent(t);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = t.dateProfile,
                    r = t.dayMaxEventRows,
                    o = t.dayMaxEvents,
                    i = t.expandRows,
                    a = t.cells.length,
                    s = this.splitBusinessHourSegs(t.businessHourSegs, a),
                    l = this.splitBgEventSegs(t.bgEventSegs, a),
                    u = this.splitFgEventSegs(t.fgEventSegs, a),
                    c = this.splitDateSelectionSegs(t.dateSelectionSegs, a),
                    d = this.splitEventDrag(t.eventDrag, a),
                    p = this.splitEventResize(t.eventResize, a),
                    f = !0 === o || !0 === r;
                return (
                    f && !i && ((f = !1), (r = null), (o = null)),
                    Lo(
                        "div",
                        {
                            className: [
                                "fc-daygrid-body",
                                f
                                    ? "fc-daygrid-body-balanced"
                                    : "fc-daygrid-body-unbalanced",
                                i ? "" : "fc-daygrid-body-natural",
                            ].join(" "),
                            ref: this.handleRootEl,
                            style: {
                                width: t.clientWidth,
                                minWidth: t.tableMinWidth,
                            },
                        },
                        Lo(Na, { unit: "day" }, function (f, h) {
                            return Lo(
                                Vo,
                                null,
                                Lo(
                                    "table",
                                    {
                                        role: "presentation",
                                        className: "fc-scrollgrid-sync-table",
                                        style: {
                                            width: t.clientWidth,
                                            minWidth: t.tableMinWidth,
                                            height: i ? t.clientHeight : "",
                                        },
                                    },
                                    t.colGroupNode,
                                    Lo(
                                        "tbody",
                                        { role: "presentation" },
                                        t.cells.map(function (i, f) {
                                            return Lo(Cl, {
                                                ref: e.rowRefs.createRef(f),
                                                key: i.length
                                                    ? i[0].date.toISOString()
                                                    : f,
                                                showDayNumbers: a > 1,
                                                showWeekNumbers:
                                                    t.showWeekNumbers,
                                                todayRange: h,
                                                dateProfile: n,
                                                cells: i,
                                                renderIntro: t.renderRowIntro,
                                                businessHourSegs: s[f],
                                                eventSelection:
                                                    t.eventSelection,
                                                bgEventSegs: l[f].filter(_l),
                                                fgEventSegs: u[f],
                                                dateSelectionSegs: c[f],
                                                eventDrag: d[f],
                                                eventResize: p[f],
                                                dayMaxEvents: o,
                                                dayMaxEventRows: r,
                                                clientWidth: t.clientWidth,
                                                clientHeight: t.clientHeight,
                                                forPrint: t.forPrint,
                                            });
                                        })
                                    )
                                )
                            );
                        })
                    )
                );
            }),
            (t.prototype.prepareHits = function () {
                (this.rowPositions = new Io(
                    this.rootEl,
                    this.rowRefs.collect().map(function (e) {
                        return e.getCellEls()[0];
                    }),
                    !1,
                    !0
                )),
                    (this.colPositions = new Io(
                        this.rootEl,
                        this.rowRefs.currentMap[0].getCellEls(),
                        !0,
                        !1
                    ));
            }),
            (t.prototype.queryHit = function (e, t) {
                var n = this.colPositions,
                    o = this.rowPositions,
                    i = n.leftToIndex(e),
                    a = o.topToIndex(t);
                if (null != a && null != i) {
                    var s = this.props.cells[a][i];
                    return {
                        dateProfile: this.props.dateProfile,
                        dateSpan: r(
                            { range: this.getCellRange(a, i), allDay: !0 },
                            s.extraDateSpan
                        ),
                        dayEl: this.getCellEl(a, i),
                        rect: {
                            left: n.lefts[i],
                            right: n.rights[i],
                            top: o.tops[a],
                            bottom: o.bottoms[a],
                        },
                        layer: 0,
                    };
                }
                return null;
            }),
            (t.prototype.getCellEl = function (e, t) {
                return this.rowRefs.currentMap[e].getCellEls()[t];
            }),
            (t.prototype.getCellRange = function (e, t) {
                var n = this.props.cells[e][t].date;
                return { start: n, end: ft(n, 1) };
            }),
            t
        );
    })(Qo);
    function _l(e) {
        return e.eventRange.def.allDay;
    }
    var Rl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.forceDayIfListItem = !0), t;
            }
            return (
                n(t, e),
                (t.prototype.sliceRange = function (e, t) {
                    return t.sliceRange(e);
                }),
                t
            );
        })(Wa),
        Ml = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.slicer = new Rl()), (t.tableRef = Wo()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context;
                    return Lo(
                        kl,
                        r(
                            { ref: this.tableRef },
                            this.slicer.sliceProps(
                                e,
                                e.dateProfile,
                                e.nextDayThreshold,
                                t,
                                e.dayTableModel
                            ),
                            {
                                dateProfile: e.dateProfile,
                                cells: e.dayTableModel.cells,
                                colGroupNode: e.colGroupNode,
                                tableMinWidth: e.tableMinWidth,
                                renderRowIntro: e.renderRowIntro,
                                dayMaxEvents: e.dayMaxEvents,
                                dayMaxEventRows: e.dayMaxEventRows,
                                showWeekNumbers: e.showWeekNumbers,
                                expandRows: e.expandRows,
                                headerAlignElRef: e.headerAlignElRef,
                                clientWidth: e.clientWidth,
                                clientHeight: e.clientHeight,
                                forPrint: e.forPrint,
                            }
                        )
                    );
                }),
                t
            );
        })(Qo),
        Il = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildDayTableModel = on(Pl)),
                    (t.headerRef = Wo()),
                    (t.tableRef = Wo()),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.context,
                        n = t.options,
                        r = t.dateProfileGenerator,
                        o = this.props,
                        i = this.buildDayTableModel(o.dateProfile, r),
                        a =
                            n.dayHeaders &&
                            Lo(Aa, {
                                ref: this.headerRef,
                                dateProfile: o.dateProfile,
                                dates: i.headerDates,
                                datesRepDistinctDays: 1 === i.rowCnt,
                            }),
                        s = function (t) {
                            return Lo(Ml, {
                                ref: e.tableRef,
                                dateProfile: o.dateProfile,
                                dayTableModel: i,
                                businessHours: o.businessHours,
                                dateSelection: o.dateSelection,
                                eventStore: o.eventStore,
                                eventUiBases: o.eventUiBases,
                                eventSelection: o.eventSelection,
                                eventDrag: o.eventDrag,
                                eventResize: o.eventResize,
                                nextDayThreshold: n.nextDayThreshold,
                                colGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                dayMaxEvents: n.dayMaxEvents,
                                dayMaxEventRows: n.dayMaxEventRows,
                                showWeekNumbers: n.weekNumbers,
                                expandRows: !o.isHeightAuto,
                                headerAlignElRef: e.headerElRef,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                forPrint: o.forPrint,
                            });
                        };
                    return n.dayMinWidth
                        ? this.renderHScrollLayout(
                              a,
                              s,
                              i.colCnt,
                              n.dayMinWidth
                          )
                        : this.renderSimpleLayout(a, s);
                }),
                t
            );
        })(ll);
    function Pl(e, t) {
        var n = new La(e.renderRange, t);
        return new Ua(n, /year|month|week/.test(e.currentRangeUnit));
    }
    var Nl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.buildRenderRange = function (t, n, r) {
                    var o,
                        i = this.props.dateEnv,
                        a = e.prototype.buildRenderRange.call(this, t, n, r),
                        s = a.start,
                        l = a.end;
                    (/^(year|month)$/.test(n) &&
                        ((s = i.startOfWeek(s)),
                        (o = i.startOfWeek(l)).valueOf() !== l.valueOf() &&
                            (l = pt(o, 1))),
                    this.props.monthMode && this.props.fixedWeekCount) &&
                        (l = pt(l, 6 - Math.ceil(vt(s, l))));
                    return { start: s, end: l };
                }),
                t
            );
        })(mi),
        Hl = ei({
            initialView: "dayGridMonth",
            views: {
                dayGrid: { component: Il, dateProfileGeneratorClass: Nl },
                dayGridDay: { type: "dayGrid", duration: { days: 1 } },
                dayGridWeek: { type: "dayGrid", duration: { weeks: 1 } },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: { months: 1 },
                    monthMode: !0,
                    fixedWeekCount: !0,
                },
            },
        }),
        Al = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.getKeyInfo = function () {
                    return { allDay: {}, timed: {} };
                }),
                (t.prototype.getKeysForDateSpan = function (e) {
                    return e.allDay ? ["allDay"] : ["timed"];
                }),
                (t.prototype.getKeysForEventDef = function (e) {
                    return e.allDay
                        ? lr(e)
                            ? ["timed", "allDay"]
                            : ["allDay"]
                        : ["timed"];
                }),
                t
            );
        })(fo),
        Ol = bn({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short",
        });
    function Ll(e) {
        var t = [
            "fc-timegrid-slot",
            "fc-timegrid-slot-label",
            e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor",
        ];
        return Lo(qo.Consumer, null, function (n) {
            if (!e.isLabeled)
                return Lo("td", {
                    className: t.join(" "),
                    "data-time": e.isoTimeStr,
                });
            var r = n.dateEnv,
                o = n.options,
                i = n.viewApi,
                a =
                    null == o.slotLabelFormat
                        ? Ol
                        : Array.isArray(o.slotLabelFormat)
                        ? bn(o.slotLabelFormat[0])
                        : bn(o.slotLabelFormat),
                s = {
                    level: 0,
                    time: e.time,
                    date: r.toDate(e.date),
                    view: i,
                    text: r.format(e.date, a),
                };
            return Lo(
                oi,
                {
                    hookProps: s,
                    classNames: o.slotLabelClassNames,
                    content: o.slotLabelContent,
                    defaultContent: Ul,
                    didMount: o.slotLabelDidMount,
                    willUnmount: o.slotLabelWillUnmount,
                },
                function (n, r, o, i) {
                    return Lo(
                        "td",
                        {
                            ref: n,
                            className: t.concat(r).join(" "),
                            "data-time": e.isoTimeStr,
                        },
                        Lo(
                            "div",
                            {
                                className:
                                    "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame",
                            },
                            Lo(
                                "div",
                                {
                                    className:
                                        "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",
                                    ref: o,
                                },
                                i
                            )
                        )
                    );
                }
            );
        });
    }
    function Ul(e) {
        return e.text;
    }
    var Wl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    return this.props.slatMetas.map(function (e) {
                        return Lo("tr", { key: e.key }, Lo(Ll, r({}, e)));
                    });
                }),
                t
            );
        })(Xo),
        Vl = bn({ week: "short" }),
        zl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.allDaySplitter = new Al()),
                    (t.headerElRef = Wo()),
                    (t.rootElRef = Wo()),
                    (t.scrollerElRef = Wo()),
                    (t.state = { slatCoords: null }),
                    (t.handleScrollTopRequest = function (e) {
                        var n = t.scrollerElRef.current;
                        n && (n.scrollTop = e);
                    }),
                    (t.renderHeadAxis = function (e, n) {
                        void 0 === n && (n = "");
                        var o = t.context.options,
                            i = t.props.dateProfile.renderRange,
                            a =
                                1 === gt(i.start, i.end)
                                    ? Eo(t.context, i.start, "week")
                                    : {};
                        return o.weekNumbers && "day" === e
                            ? Lo(
                                  Ds,
                                  { date: i.start, defaultFormat: Vl },
                                  function (e, t, o, i) {
                                      return Lo(
                                          "th",
                                          {
                                              ref: e,
                                              "aria-hidden": !0,
                                              className: [
                                                  "fc-timegrid-axis",
                                                  "fc-scrollgrid-shrink",
                                              ]
                                                  .concat(t)
                                                  .join(" "),
                                          },
                                          Lo(
                                              "div",
                                              {
                                                  className:
                                                      "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",
                                                  style: { height: n },
                                              },
                                              Lo(
                                                  "a",
                                                  r(
                                                      {
                                                          ref: o,
                                                          className:
                                                              "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                                      },
                                                      a
                                                  ),
                                                  i
                                              )
                                          )
                                      );
                                  }
                              )
                            : Lo(
                                  "th",
                                  {
                                      "aria-hidden": !0,
                                      className: "fc-timegrid-axis",
                                  },
                                  Lo("div", {
                                      className: "fc-timegrid-axis-frame",
                                      style: { height: n },
                                  })
                              );
                    }),
                    (t.renderTableRowAxis = function (e) {
                        var n = t.context,
                            r = n.options,
                            o = n.viewApi,
                            i = { text: r.allDayText, view: o };
                        return Lo(
                            oi,
                            {
                                hookProps: i,
                                classNames: r.allDayClassNames,
                                content: r.allDayContent,
                                defaultContent: Fl,
                                didMount: r.allDayDidMount,
                                willUnmount: r.allDayWillUnmount,
                            },
                            function (t, n, r, o) {
                                return Lo(
                                    "td",
                                    {
                                        ref: t,
                                        "aria-hidden": !0,
                                        className: [
                                            "fc-timegrid-axis",
                                            "fc-scrollgrid-shrink",
                                        ]
                                            .concat(n)
                                            .join(" "),
                                    },
                                    Lo(
                                        "div",
                                        {
                                            className:
                                                "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame" +
                                                (null == e
                                                    ? " fc-timegrid-axis-frame-liquid"
                                                    : ""),
                                            style: { height: e },
                                        },
                                        Lo(
                                            "span",
                                            {
                                                className:
                                                    "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",
                                                ref: r,
                                            },
                                            o
                                        )
                                    )
                                );
                            }
                        );
                    }),
                    (t.handleSlatCoords = function (e) {
                        t.setState({ slatCoords: e });
                    }),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.renderSimpleLayout = function (e, t, n) {
                    var r = this.context,
                        o = this.props,
                        i = [],
                        a = us(r.options);
                    return (
                        e &&
                            i.push({
                                type: "header",
                                key: "header",
                                isSticky: a,
                                chunk: {
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            }),
                        t &&
                            (i.push({
                                type: "body",
                                key: "all-day",
                                chunk: { content: t },
                            }),
                            i.push({
                                type: "body",
                                key: "all-day-divider",
                                outerContent: Lo(
                                    "tr",
                                    {
                                        role: "presentation",
                                        className: "fc-scrollgrid-section",
                                    },
                                    Lo("td", {
                                        className:
                                            "fc-timegrid-divider " +
                                            r.theme.getClass("tableCellShaded"),
                                    })
                                ),
                            })),
                        i.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            expandRows: Boolean(r.options.expandRows),
                            chunk: {
                                scrollerElRef: this.scrollerElRef,
                                content: n,
                            },
                        }),
                        Lo(
                            pi,
                            { viewSpec: r.viewSpec, elRef: this.rootElRef },
                            function (e, t) {
                                return Lo(
                                    "div",
                                    {
                                        className: ["fc-timegrid"]
                                            .concat(t)
                                            .join(" "),
                                        ref: e,
                                    },
                                    Lo(ds, {
                                        liquid: !o.isHeightAuto && !o.forPrint,
                                        collapsibleWidth: o.forPrint,
                                        cols: [{ width: "shrink" }],
                                        sections: i,
                                    })
                                );
                            }
                        )
                    );
                }),
                (t.prototype.renderHScrollLayout = function (
                    e,
                    t,
                    n,
                    r,
                    o,
                    i,
                    a
                ) {
                    var s = this,
                        l = this.context.pluginHooks.scrollGridImpl;
                    if (!l) throw new Error("No ScrollGrid implementation");
                    var u = this.context,
                        c = this.props,
                        d = !c.forPrint && us(u.options),
                        p = !c.forPrint && cs(u.options),
                        f = [];
                    e &&
                        f.push({
                            type: "header",
                            key: "header",
                            isSticky: d,
                            syncRowHeights: !0,
                            chunks: [
                                {
                                    key: "axis",
                                    rowContent: function (e) {
                                        return Lo(
                                            "tr",
                                            { role: "presentation" },
                                            s.renderHeadAxis(
                                                "day",
                                                e.rowSyncHeights[0]
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "cols",
                                    elRef: this.headerElRef,
                                    tableClassName: "fc-col-header",
                                    rowContent: e,
                                },
                            ],
                        }),
                        t &&
                            (f.push({
                                type: "body",
                                key: "all-day",
                                syncRowHeights: !0,
                                chunks: [
                                    {
                                        key: "axis",
                                        rowContent: function (e) {
                                            return Lo(
                                                "tr",
                                                { role: "presentation" },
                                                s.renderTableRowAxis(
                                                    e.rowSyncHeights[0]
                                                )
                                            );
                                        },
                                    },
                                    { key: "cols", content: t },
                                ],
                            }),
                            f.push({
                                key: "all-day-divider",
                                type: "body",
                                outerContent: Lo(
                                    "tr",
                                    {
                                        role: "presentation",
                                        className: "fc-scrollgrid-section",
                                    },
                                    Lo("td", {
                                        colSpan: 2,
                                        className:
                                            "fc-timegrid-divider " +
                                            u.theme.getClass("tableCellShaded"),
                                    })
                                ),
                            }));
                    var h = u.options.nowIndicator;
                    return (
                        f.push({
                            type: "body",
                            key: "body",
                            liquid: !0,
                            expandRows: Boolean(u.options.expandRows),
                            chunks: [
                                {
                                    key: "axis",
                                    content: function (e) {
                                        return Lo(
                                            "div",
                                            {
                                                className:
                                                    "fc-timegrid-axis-chunk",
                                            },
                                            Lo(
                                                "table",
                                                {
                                                    "aria-hidden": !0,
                                                    style: {
                                                        height: e.expandRows
                                                            ? e.clientHeight
                                                            : "",
                                                    },
                                                },
                                                e.tableColGroupNode,
                                                Lo(
                                                    "tbody",
                                                    null,
                                                    Lo(Wl, { slatMetas: i })
                                                )
                                            ),
                                            Lo(
                                                "div",
                                                {
                                                    className:
                                                        "fc-timegrid-now-indicator-container",
                                                },
                                                Lo(
                                                    Na,
                                                    {
                                                        unit: h
                                                            ? "minute"
                                                            : "day",
                                                    },
                                                    function (e) {
                                                        var t =
                                                            h &&
                                                            a &&
                                                            a.safeComputeTop(e);
                                                        return "number" ==
                                                            typeof t
                                                            ? Lo(
                                                                  vs,
                                                                  {
                                                                      isAxis: !0,
                                                                      date: e,
                                                                  },
                                                                  function (
                                                                      e,
                                                                      n,
                                                                      r,
                                                                      o
                                                                  ) {
                                                                      return Lo(
                                                                          "div",
                                                                          {
                                                                              ref: e,
                                                                              className:
                                                                                  [
                                                                                      "fc-timegrid-now-indicator-arrow",
                                                                                  ]
                                                                                      .concat(
                                                                                          n
                                                                                      )
                                                                                      .join(
                                                                                          " "
                                                                                      ),
                                                                              style: {
                                                                                  top: t,
                                                                              },
                                                                          },
                                                                          o
                                                                      );
                                                                  }
                                                              )
                                                            : null;
                                                    }
                                                )
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "cols",
                                    scrollerElRef: this.scrollerElRef,
                                    content: n,
                                },
                            ],
                        }),
                        p &&
                            f.push({
                                key: "footer",
                                type: "footer",
                                isSticky: !0,
                                chunks: [
                                    { key: "axis", content: ls },
                                    { key: "cols", content: ls },
                                ],
                            }),
                        Lo(
                            pi,
                            { viewSpec: u.viewSpec, elRef: this.rootElRef },
                            function (e, t) {
                                return Lo(
                                    "div",
                                    {
                                        className: ["fc-timegrid"]
                                            .concat(t)
                                            .join(" "),
                                        ref: e,
                                    },
                                    Lo(l, {
                                        liquid: !c.isHeightAuto && !c.forPrint,
                                        collapsibleWidth: !1,
                                        colGroups: [
                                            {
                                                width: "shrink",
                                                cols: [{ width: "shrink" }],
                                            },
                                            {
                                                cols: [
                                                    { span: r, minWidth: o },
                                                ],
                                            },
                                        ],
                                        sections: f,
                                    })
                                );
                            }
                        )
                    );
                }),
                (t.prototype.getAllDayMaxEventProps = function () {
                    var e = this.context.options,
                        t = e.dayMaxEvents,
                        n = e.dayMaxEventRows;
                    return (
                        (!0 !== t && !0 !== n) || ((t = void 0), (n = 5)),
                        { dayMaxEvents: t, dayMaxEventRows: n }
                    );
                }),
                t
            );
        })(Qo);
    function Fl(e) {
        return e.text;
    }
    var Bl = (function () {
            function e(e, t, n) {
                (this.positions = e),
                    (this.dateProfile = t),
                    (this.slotDuration = n);
            }
            return (
                (e.prototype.safeComputeTop = function (e) {
                    var t = this.dateProfile;
                    if (ar(t.currentRange, e)) {
                        var n = bt(e),
                            r = e.valueOf() - n.valueOf();
                        if (r >= Kt(t.slotMinTime) && r < Kt(t.slotMaxTime))
                            return this.computeTimeTop(Gt(r));
                    }
                    return null;
                }),
                (e.prototype.computeDateTop = function (e, t) {
                    return (
                        t || (t = bt(e)),
                        this.computeTimeTop(Gt(e.valueOf() - t.valueOf()))
                    );
                }),
                (e.prototype.computeTimeTop = function (e) {
                    var t,
                        n,
                        r = this.positions,
                        o = this.dateProfile,
                        i = r.els.length,
                        a =
                            (e.milliseconds - Kt(o.slotMinTime)) /
                            Kt(this.slotDuration);
                    return (
                        (a = Math.max(0, a)),
                        (a = Math.min(i, a)),
                        (t = Math.floor(a)),
                        (n = a - (t = Math.min(t, i - 1))),
                        r.tops[t] + r.getHeight(t) * n
                    );
                }),
                e
            );
        })(),
        jl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = t.options,
                        o = e.slatElRefs;
                    return Lo(
                        "tbody",
                        null,
                        e.slatMetas.map(function (i, a) {
                            var s = {
                                    time: i.time,
                                    date: t.dateEnv.toDate(i.date),
                                    view: t.viewApi,
                                },
                                l = [
                                    "fc-timegrid-slot",
                                    "fc-timegrid-slot-lane",
                                    i.isLabeled ? "" : "fc-timegrid-slot-minor",
                                ];
                            return Lo(
                                "tr",
                                { key: i.key, ref: o.createRef(i.key) },
                                e.axis && Lo(Ll, r({}, i)),
                                Lo(
                                    oi,
                                    {
                                        hookProps: s,
                                        classNames: n.slotLaneClassNames,
                                        content: n.slotLaneContent,
                                        didMount: n.slotLaneDidMount,
                                        willUnmount: n.slotLaneWillUnmount,
                                    },
                                    function (e, t, n, r) {
                                        return Lo(
                                            "td",
                                            {
                                                ref: e,
                                                className: l
                                                    .concat(t)
                                                    .join(" "),
                                                "data-time": i.isoTimeStr,
                                            },
                                            r
                                        );
                                    }
                                )
                            );
                        })
                    );
                }),
                t
            );
        })(Xo),
        Gl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.rootElRef = Wo()), (t.slatElRefs = new $a()), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context;
                    return Lo(
                        "div",
                        { ref: this.rootElRef, className: "fc-timegrid-slots" },
                        Lo(
                            "table",
                            {
                                "aria-hidden": !0,
                                className: t.theme.getClass("table"),
                                style: {
                                    minWidth: e.tableMinWidth,
                                    width: e.clientWidth,
                                    height: e.minHeight,
                                },
                            },
                            e.tableColGroupNode,
                            Lo(jl, {
                                slatElRefs: this.slatElRefs,
                                axis: e.axis,
                                slatMetas: e.slatMetas,
                            })
                        )
                    );
                }),
                (t.prototype.componentDidMount = function () {
                    this.updateSizing();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this.updateSizing();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this.props.onCoords && this.props.onCoords(null);
                }),
                (t.prototype.updateSizing = function () {
                    var e,
                        t = this.context,
                        n = this.props;
                    n.onCoords &&
                        null !== n.clientWidth &&
                        this.rootElRef.current.offsetHeight &&
                        n.onCoords(
                            new Bl(
                                new Io(
                                    this.rootElRef.current,
                                    ((e = this.slatElRefs.currentMap),
                                    n.slatMetas.map(function (t) {
                                        return e[t.key];
                                    })),
                                    !1,
                                    !0
                                ),
                                this.props.dateProfile,
                                t.options.slotDuration
                            )
                        );
                }),
                t
            );
        })(Xo);
    function ql(e, t) {
        var n,
            r = [];
        for (n = 0; n < t; n += 1) r.push([]);
        if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
        return r;
    }
    function Yl(e, t) {
        var n = [];
        if (e) {
            for (a = 0; a < t; a += 1)
                n[a] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: [],
                };
            for (var r = 0, o = e.segs; r < o.length; r++) {
                var i = o[r];
                n[i.col].segs.push(i);
            }
        } else for (var a = 0; a < t; a += 1) n[a] = null;
        return n;
    }
    var Zl = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.rootElRef = Wo()), t;
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props;
                return Lo(
                    ks,
                    {
                        allDayDate: null,
                        moreCnt: t.hiddenSegs.length,
                        allSegs: t.hiddenSegs,
                        hiddenSegs: t.hiddenSegs,
                        alignmentElRef: this.rootElRef,
                        defaultContent: Xl,
                        extraDateSpan: t.extraDateSpan,
                        dateProfile: t.dateProfile,
                        todayRange: t.todayRange,
                        popoverContent: function () {
                            return au(t.hiddenSegs, t);
                        },
                    },
                    function (n, r, o, i, a, s, l, u) {
                        return Lo(
                            "a",
                            {
                                ref: function (t) {
                                    Jo(n, t), Jo(e.rootElRef, t);
                                },
                                className: ["fc-timegrid-more-link"]
                                    .concat(r)
                                    .join(" "),
                                style: { top: t.top, bottom: t.bottom },
                                onClick: a,
                                title: s,
                                "aria-expanded": l,
                                "aria-controls": u,
                            },
                            Lo(
                                "div",
                                {
                                    ref: o,
                                    className:
                                        "fc-timegrid-more-link-inner fc-sticky",
                                },
                                i
                            )
                        );
                    }
                );
            }),
            t
        );
    })(Xo);
    function Xl(e) {
        return e.shortText;
    }
    function Kl(e, t, n) {
        var o = new ra();
        null != t && (o.strictOrder = t), null != n && (o.maxStackCnt = n);
        var i,
            a,
            s,
            l = aa(o.addSegs(e)),
            u = (function (e) {
                var t = e.entriesByLevel,
                    n = eu(
                        function (e, t) {
                            return e + ":" + t;
                        },
                        function (o, i) {
                            var a = (function (e, t, n) {
                                    for (
                                        var r = e.levelCoords,
                                            o = e.entriesByLevel,
                                            i = o[t][n],
                                            a = r[t] + i.thickness,
                                            s = r.length,
                                            l = t;
                                        l < s && r[l] < a;
                                        l += 1
                                    );
                                    for (; l < s; l += 1) {
                                        for (
                                            var u = o[l],
                                                c = void 0,
                                                d = ca(u, i.span.start, oa),
                                                p = d[0] + d[1],
                                                f = p;
                                            (c = u[f]) &&
                                            c.span.start < i.span.end;

                                        )
                                            f += 1;
                                        if (p < f)
                                            return {
                                                level: l,
                                                lateralStart: p,
                                                lateralEnd: f,
                                            };
                                    }
                                    return null;
                                })(e, o, i),
                                s = $l(a, n),
                                l = t[o][i];
                            return [
                                r(r({}, l), { nextLevelNodes: s[0] }),
                                l.thickness + s[1],
                            ];
                        }
                    );
                return $l(
                    t.length
                        ? { level: 0, lateralStart: 0, lateralEnd: t[0].length }
                        : null,
                    n
                )[0];
            })(o);
        return (
            (i = u),
            (a = 1),
            (s = eu(
                function (e, t, n) {
                    return ia(e);
                },
                function (e, t, n) {
                    var o,
                        i = e.nextLevelNodes,
                        l = e.thickness,
                        u = l + n,
                        c = l / u,
                        d = [];
                    if (i.length)
                        for (var p = 0, f = i; p < f.length; p++) {
                            var h = f[p];
                            if (void 0 === o)
                                (o = (v = s(h, t, u))[0]), d.push(v[1]);
                            else {
                                var v = s(h, o, 0);
                                d.push(v[1]);
                            }
                        }
                    else o = a;
                    var g = (o - t) * c;
                    return [
                        o - g,
                        r(r({}, e), { thickness: g, nextLevelNodes: d }),
                    ];
                }
            )),
            {
                segRects: (function (e) {
                    var t = [],
                        n = eu(
                            function (e, t, n) {
                                return ia(e);
                            },
                            function (e, n, i) {
                                var a = r(r({}, e), {
                                    levelCoord: n,
                                    stackDepth: i,
                                    stackForward: 0,
                                });
                                return (
                                    t.push(a),
                                    (a.stackForward =
                                        o(
                                            e.nextLevelNodes,
                                            n + e.thickness,
                                            i + 1
                                        ) + 1)
                                );
                            }
                        );
                    function o(e, t, r) {
                        for (var o = 0, i = 0, a = e; i < a.length; i++) {
                            var s = a[i];
                            o = Math.max(n(s, t, r), o);
                        }
                        return o;
                    }
                    return o(e, 0, 0), t;
                })(
                    (u = i.map(function (e) {
                        return s(e, 0, 0)[1];
                    }))
                ),
                hiddenGroups: l,
            }
        );
    }
    function $l(e, t) {
        if (!e) return [[], 0];
        for (
            var n = e.level,
                r = e.lateralStart,
                o = e.lateralEnd,
                i = r,
                a = [];
            i < o;

        )
            a.push(t(n, i)), (i += 1);
        return a.sort(Jl), [a.map(Ql), a[0][1]];
    }
    function Jl(e, t) {
        return t[1] - e[1];
    }
    function Ql(e) {
        return e[0];
    }
    function eu(e, t) {
        var n = {};
        return function () {
            for (var r = [], o = 0; o < arguments.length; o++)
                r[o] = arguments[o];
            var i = e.apply(void 0, r);
            return i in n ? n[i] : (n[i] = t.apply(void 0, r));
        };
    }
    function tu(e, t, n, r) {
        void 0 === n && (n = null), void 0 === r && (r = 0);
        var o = [];
        if (n)
            for (var i = 0; i < e.length; i += 1) {
                var a = e[i],
                    s = n.computeDateTop(a.start, t),
                    l = Math.max(s + (r || 0), n.computeDateTop(a.end, t));
                o.push({ start: Math.round(s), end: Math.round(l) });
            }
        return o;
    }
    var nu = bn({ hour: "numeric", minute: "2-digit", meridiem: !1 }),
        ru = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = ["fc-timegrid-event", "fc-v-event"];
                    return (
                        this.props.isShort && e.push("fc-timegrid-event-short"),
                        Lo(
                            fs,
                            r({}, this.props, {
                                defaultTimeFormat: nu,
                                extraClassNames: e,
                            })
                        )
                    );
                }),
                t
            );
        })(Xo),
        ou = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props;
                    return Lo(
                        ms,
                        {
                            date: e.date,
                            dateProfile: e.dateProfile,
                            todayRange: e.todayRange,
                            extraHookProps: e.extraHookProps,
                        },
                        function (e, t) {
                            return (
                                t &&
                                Lo(
                                    "div",
                                    {
                                        className: "fc-timegrid-col-misc",
                                        ref: e,
                                    },
                                    t
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Xo),
        iu = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.sortEventSegs = on(fr)), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = this.context,
                        o = n.options.selectMirror,
                        i =
                            (t.eventDrag && t.eventDrag.segs) ||
                            (t.eventResize && t.eventResize.segs) ||
                            (o && t.dateSelectionSegs) ||
                            [],
                        a =
                            (t.eventDrag && t.eventDrag.affectedInstances) ||
                            (t.eventResize &&
                                t.eventResize.affectedInstances) ||
                            {},
                        s = this.sortEventSegs(
                            t.fgEventSegs,
                            n.options.eventOrder
                        );
                    return Lo(
                        Es,
                        {
                            elRef: t.elRef,
                            date: t.date,
                            dateProfile: t.dateProfile,
                            todayRange: t.todayRange,
                            extraHookProps: t.extraHookProps,
                        },
                        function (n, l, u) {
                            return Lo(
                                "td",
                                r(
                                    {
                                        ref: n,
                                        role: "gridcell",
                                        className: ["fc-timegrid-col"]
                                            .concat(l, t.extraClassNames || [])
                                            .join(" "),
                                    },
                                    u,
                                    t.extraDataAttrs
                                ),
                                Lo(
                                    "div",
                                    { className: "fc-timegrid-col-frame" },
                                    Lo(
                                        "div",
                                        { className: "fc-timegrid-col-bg" },
                                        e.renderFillSegs(
                                            t.businessHourSegs,
                                            "non-business"
                                        ),
                                        e.renderFillSegs(
                                            t.bgEventSegs,
                                            "bg-event"
                                        ),
                                        e.renderFillSegs(
                                            t.dateSelectionSegs,
                                            "highlight"
                                        )
                                    ),
                                    Lo(
                                        "div",
                                        { className: "fc-timegrid-col-events" },
                                        e.renderFgSegs(s, a, !1, !1, !1)
                                    ),
                                    Lo(
                                        "div",
                                        { className: "fc-timegrid-col-events" },
                                        e.renderFgSegs(
                                            i,
                                            {},
                                            Boolean(t.eventDrag),
                                            Boolean(t.eventResize),
                                            Boolean(o)
                                        )
                                    ),
                                    Lo(
                                        "div",
                                        {
                                            className:
                                                "fc-timegrid-now-indicator-container",
                                        },
                                        e.renderNowIndicator(t.nowIndicatorSegs)
                                    ),
                                    Lo(ou, {
                                        date: t.date,
                                        dateProfile: t.dateProfile,
                                        todayRange: t.todayRange,
                                        extraHookProps: t.extraHookProps,
                                    })
                                )
                            );
                        }
                    );
                }),
                (t.prototype.renderFgSegs = function (e, t, n, r, o) {
                    var i = this.props;
                    return i.forPrint
                        ? au(e, i)
                        : this.renderPositionedFgSegs(e, t, n, r, o);
                }),
                (t.prototype.renderPositionedFgSegs = function (e, t, n, o, i) {
                    var a = this,
                        s = this.context.options,
                        l = s.eventMaxStack,
                        u = s.eventShortHeight,
                        c = s.eventOrderStrict,
                        d = s.eventMinHeight,
                        p = this.props,
                        f = p.date,
                        h = p.slatCoords,
                        v = p.eventSelection,
                        g = p.todayRange,
                        m = p.nowDate,
                        y = n || o || i,
                        E = (function (e, t, n, r) {
                            for (
                                var o = [], i = [], a = 0;
                                a < e.length;
                                a += 1
                            ) {
                                var s = t[a];
                                s
                                    ? o.push({
                                          index: a,
                                          thickness: 1,
                                          span: s,
                                      })
                                    : i.push(e[a]);
                            }
                            for (
                                var l = Kl(o, n, r),
                                    u = l.segRects,
                                    c = l.hiddenGroups,
                                    d = [],
                                    p = 0,
                                    f = u;
                                p < f.length;
                                p++
                            ) {
                                var h = f[p];
                                d.push({ seg: e[h.index], rect: h });
                            }
                            for (var v = 0, g = i; v < g.length; v++) {
                                var m = g[v];
                                d.push({ seg: m, rect: null });
                            }
                            return { segPlacements: d, hiddenGroups: c };
                        })(e, tu(e, f, h, d), c, l),
                        b = E.segPlacements,
                        S = E.hiddenGroups;
                    return Lo(
                        Vo,
                        null,
                        this.renderHiddenGroups(S, e),
                        b.map(function (e) {
                            var s = e.seg,
                                l = e.rect,
                                c = s.eventRange.instance.instanceId,
                                d = y || Boolean(!t[c] && l),
                                p = su(l && l.span),
                                f =
                                    !y && l
                                        ? a.computeSegHStyle(l)
                                        : { left: 0, right: 0 },
                                h = Boolean(l) && l.stackForward > 0,
                                E = Boolean(l) && l.span.end - l.span.start < u;
                            return Lo(
                                "div",
                                {
                                    className:
                                        "fc-timegrid-event-harness" +
                                        (h
                                            ? " fc-timegrid-event-harness-inset"
                                            : ""),
                                    key: c,
                                    style: r(
                                        r({ visibility: d ? "" : "hidden" }, p),
                                        f
                                    ),
                                },
                                Lo(
                                    ru,
                                    r(
                                        {
                                            seg: s,
                                            isDragging: n,
                                            isResizing: o,
                                            isDateSelecting: i,
                                            isSelected: c === v,
                                            isShort: E,
                                        },
                                        Er(s, g, m)
                                    )
                                )
                            );
                        })
                    );
                }),
                (t.prototype.renderHiddenGroups = function (e, t) {
                    var n = this.props,
                        r = n.extraDateSpan,
                        o = n.dateProfile,
                        i = n.todayRange,
                        a = n.nowDate,
                        s = n.eventSelection,
                        l = n.eventDrag,
                        u = n.eventResize;
                    return Lo(
                        Vo,
                        null,
                        e.map(function (e) {
                            var n,
                                c,
                                d = su(e.span),
                                p =
                                    ((n = e.entries),
                                    (c = t),
                                    n.map(function (e) {
                                        return c[e.index];
                                    }));
                            return Lo(Zl, {
                                key: Qt(Ms(p)),
                                hiddenSegs: p,
                                top: d.top,
                                bottom: d.bottom,
                                extraDateSpan: r,
                                dateProfile: o,
                                todayRange: i,
                                nowDate: a,
                                eventSelection: s,
                                eventDrag: l,
                                eventResize: u,
                            });
                        })
                    );
                }),
                (t.prototype.renderFillSegs = function (e, t) {
                    var n = this.props,
                        o = this.context,
                        i = tu(
                            e,
                            n.date,
                            n.slatCoords,
                            o.options.eventMinHeight
                        ).map(function (o, i) {
                            var a = e[i];
                            return Lo(
                                "div",
                                {
                                    key: Sr(a.eventRange),
                                    className: "fc-timegrid-bg-harness",
                                    style: su(o),
                                },
                                "bg-event" === t
                                    ? Lo(
                                          Ss,
                                          r(
                                              { seg: a },
                                              Er(a, n.todayRange, n.nowDate)
                                          )
                                      )
                                    : bs(t)
                            );
                        });
                    return Lo(Vo, null, i);
                }),
                (t.prototype.renderNowIndicator = function (e) {
                    var t = this.props,
                        n = t.slatCoords,
                        r = t.date;
                    return n
                        ? e.map(function (e, t) {
                              return Lo(
                                  vs,
                                  { isAxis: !1, date: r, key: t },
                                  function (t, o, i, a) {
                                      return Lo(
                                          "div",
                                          {
                                              ref: t,
                                              className: [
                                                  "fc-timegrid-now-indicator-line",
                                              ]
                                                  .concat(o)
                                                  .join(" "),
                                              style: {
                                                  top: n.computeDateTop(
                                                      e.start,
                                                      r
                                                  ),
                                              },
                                          },
                                          a
                                      );
                                  }
                              );
                          })
                        : null;
                }),
                (t.prototype.computeSegHStyle = function (e) {
                    var t,
                        n,
                        r = this.context,
                        o = r.isRtl,
                        i = r.options.slotEventOverlap,
                        a = e.levelCoord,
                        s = e.levelCoord + e.thickness;
                    i && (s = Math.min(1, a + 2 * (s - a))),
                        o ? ((t = 1 - s), (n = a)) : ((t = a), (n = 1 - s));
                    var l = {
                        zIndex: e.stackDepth + 1,
                        left: 100 * t + "%",
                        right: 100 * n + "%",
                    };
                    return (
                        i &&
                            !e.stackForward &&
                            (l[o ? "marginLeft" : "marginRight"] = 20),
                        l
                    );
                }),
                t
            );
        })(Xo);
    function au(e, t) {
        var n = t.todayRange,
            o = t.nowDate,
            i = t.eventSelection,
            a = t.eventDrag,
            s = t.eventResize,
            l =
                (a ? a.affectedInstances : null) ||
                (s ? s.affectedInstances : null) ||
                {};
        return Lo(
            Vo,
            null,
            e.map(function (e) {
                var t = e.eventRange.instance.instanceId;
                return Lo(
                    "div",
                    { key: t, style: { visibility: l[t] ? "hidden" : "" } },
                    Lo(
                        ru,
                        r(
                            {
                                seg: e,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: t === i,
                                isShort: !1,
                            },
                            Er(e, n, o)
                        )
                    )
                );
            })
        );
    }
    function su(e) {
        return e ? { top: e.start, bottom: -e.end } : { top: "", bottom: "" };
    }
    var lu = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.splitFgEventSegs = on(ql)),
                (t.splitBgEventSegs = on(ql)),
                (t.splitBusinessHourSegs = on(ql)),
                (t.splitNowIndicatorSegs = on(ql)),
                (t.splitDateSelectionSegs = on(ql)),
                (t.splitEventDrag = on(Yl)),
                (t.splitEventResize = on(Yl)),
                (t.rootElRef = Wo()),
                (t.cellElRefs = new $a()),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n =
                        this.context.options.nowIndicator &&
                        t.slatCoords &&
                        t.slatCoords.safeComputeTop(t.nowDate),
                    r = t.cells.length,
                    o = this.splitFgEventSegs(t.fgEventSegs, r),
                    i = this.splitBgEventSegs(t.bgEventSegs, r),
                    a = this.splitBusinessHourSegs(t.businessHourSegs, r),
                    s = this.splitNowIndicatorSegs(t.nowIndicatorSegs, r),
                    l = this.splitDateSelectionSegs(t.dateSelectionSegs, r),
                    u = this.splitEventDrag(t.eventDrag, r),
                    c = this.splitEventResize(t.eventResize, r);
                return Lo(
                    "div",
                    { className: "fc-timegrid-cols", ref: this.rootElRef },
                    Lo(
                        "table",
                        {
                            role: "presentation",
                            style: {
                                minWidth: t.tableMinWidth,
                                width: t.clientWidth,
                            },
                        },
                        t.tableColGroupNode,
                        Lo(
                            "tbody",
                            { role: "presentation" },
                            Lo(
                                "tr",
                                { role: "row" },
                                t.axis &&
                                    Lo(
                                        "td",
                                        {
                                            "aria-hidden": !0,
                                            className:
                                                "fc-timegrid-col fc-timegrid-axis",
                                        },
                                        Lo(
                                            "div",
                                            {
                                                className:
                                                    "fc-timegrid-col-frame",
                                            },
                                            Lo(
                                                "div",
                                                {
                                                    className:
                                                        "fc-timegrid-now-indicator-container",
                                                },
                                                "number" == typeof n &&
                                                    Lo(
                                                        vs,
                                                        {
                                                            isAxis: !0,
                                                            date: t.nowDate,
                                                        },
                                                        function (e, t, r, o) {
                                                            return Lo(
                                                                "div",
                                                                {
                                                                    ref: e,
                                                                    className: [
                                                                        "fc-timegrid-now-indicator-arrow",
                                                                    ]
                                                                        .concat(
                                                                            t
                                                                        )
                                                                        .join(
                                                                            " "
                                                                        ),
                                                                    style: {
                                                                        top: n,
                                                                    },
                                                                },
                                                                o
                                                            );
                                                        }
                                                    )
                                            )
                                        )
                                    ),
                                t.cells.map(function (n, r) {
                                    return Lo(iu, {
                                        key: n.key,
                                        elRef: e.cellElRefs.createRef(n.key),
                                        dateProfile: t.dateProfile,
                                        date: n.date,
                                        nowDate: t.nowDate,
                                        todayRange: t.todayRange,
                                        extraHookProps: n.extraHookProps,
                                        extraDataAttrs: n.extraDataAttrs,
                                        extraClassNames: n.extraClassNames,
                                        extraDateSpan: n.extraDateSpan,
                                        fgEventSegs: o[r],
                                        bgEventSegs: i[r],
                                        businessHourSegs: a[r],
                                        nowIndicatorSegs: s[r],
                                        dateSelectionSegs: l[r],
                                        eventDrag: u[r],
                                        eventResize: c[r],
                                        slatCoords: t.slatCoords,
                                        eventSelection: t.eventSelection,
                                        forPrint: t.forPrint,
                                    });
                                })
                            )
                        )
                    )
                );
            }),
            (t.prototype.componentDidMount = function () {
                this.updateCoords();
            }),
            (t.prototype.componentDidUpdate = function () {
                this.updateCoords();
            }),
            (t.prototype.updateCoords = function () {
                var e,
                    t = this.props;
                t.onColCoords &&
                    null !== t.clientWidth &&
                    t.onColCoords(
                        new Io(
                            this.rootElRef.current,
                            ((e = this.cellElRefs.currentMap),
                            t.cells.map(function (t) {
                                return e[t.key];
                            })),
                            !0,
                            !1
                        )
                    );
            }),
            t
        );
    })(Xo);
    var uu = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.processSlotOptions = on(cu)),
                (t.state = { slatCoords: null }),
                (t.handleRootEl = function (e) {
                    e
                        ? t.context.registerInteractiveComponent(t, {
                              el: e,
                              isHitComboAllowed: t.props.isHitComboAllowed,
                          })
                        : t.context.unregisterInteractiveComponent(t);
                }),
                (t.handleScrollRequest = function (e) {
                    var n = t.props.onScrollTopRequest,
                        r = t.state.slatCoords;
                    if (n && r) {
                        if (e.time) {
                            var o = r.computeTimeTop(e.time);
                            (o = Math.ceil(o)) && (o += 1), n(o);
                        }
                        return !0;
                    }
                    return !1;
                }),
                (t.handleColCoords = function (e) {
                    t.colCoords = e;
                }),
                (t.handleSlatCoords = function (e) {
                    t.setState({ slatCoords: e }),
                        t.props.onSlatCoords && t.props.onSlatCoords(e);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this.props,
                    t = this.state;
                return Lo(
                    "div",
                    {
                        className: "fc-timegrid-body",
                        ref: this.handleRootEl,
                        style: {
                            width: e.clientWidth,
                            minWidth: e.tableMinWidth,
                        },
                    },
                    Lo(Gl, {
                        axis: e.axis,
                        dateProfile: e.dateProfile,
                        slatMetas: e.slatMetas,
                        clientWidth: e.clientWidth,
                        minHeight: e.expandRows ? e.clientHeight : "",
                        tableMinWidth: e.tableMinWidth,
                        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                        onCoords: this.handleSlatCoords,
                    }),
                    Lo(lu, {
                        cells: e.cells,
                        axis: e.axis,
                        dateProfile: e.dateProfile,
                        businessHourSegs: e.businessHourSegs,
                        bgEventSegs: e.bgEventSegs,
                        fgEventSegs: e.fgEventSegs,
                        dateSelectionSegs: e.dateSelectionSegs,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        todayRange: e.todayRange,
                        nowDate: e.nowDate,
                        nowIndicatorSegs: e.nowIndicatorSegs,
                        clientWidth: e.clientWidth,
                        tableMinWidth: e.tableMinWidth,
                        tableColGroupNode: e.tableColGroupNode,
                        slatCoords: t.slatCoords,
                        onColCoords: this.handleColCoords,
                        forPrint: e.forPrint,
                    })
                );
            }),
            (t.prototype.componentDidMount = function () {
                this.scrollResponder = this.context.createScrollResponder(
                    this.handleScrollRequest
                );
            }),
            (t.prototype.componentDidUpdate = function (e) {
                this.scrollResponder.update(
                    e.dateProfile !== this.props.dateProfile
                );
            }),
            (t.prototype.componentWillUnmount = function () {
                this.scrollResponder.detach();
            }),
            (t.prototype.queryHit = function (e, t) {
                var n = this.context,
                    o = n.dateEnv,
                    i = n.options,
                    a = this.colCoords,
                    s = this.props.dateProfile,
                    l = this.state.slatCoords,
                    u = this.processSlotOptions(
                        this.props.slotDuration,
                        i.snapDuration
                    ),
                    c = u.snapDuration,
                    d = u.snapsPerSlot,
                    p = a.leftToIndex(e),
                    f = l.positions.topToIndex(t);
                if (null != p && null != f) {
                    var h = this.props.cells[p],
                        v = l.positions.tops[f],
                        g = l.positions.getHeight(f),
                        m = (t - v) / g,
                        y = f * d + Math.floor(m * d),
                        E = this.props.cells[p].date,
                        b = Yt(s.slotMinTime, Zt(c, y)),
                        S = o.add(E, b),
                        w = o.add(S, c);
                    return {
                        dateProfile: s,
                        dateSpan: r(
                            { range: { start: S, end: w }, allDay: !1 },
                            h.extraDateSpan
                        ),
                        dayEl: a.els[p],
                        rect: {
                            left: a.lefts[p],
                            right: a.rights[p],
                            top: v,
                            bottom: v + g,
                        },
                        layer: 0,
                    };
                }
                return null;
            }),
            t
        );
    })(Qo);
    function cu(e, t) {
        var n = t || e,
            r = $t(e, n);
        return (
            null === r && ((n = e), (r = 1)),
            { snapDuration: n, snapsPerSlot: r }
        );
    }
    var du = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.sliceRange = function (e, t) {
                    for (var n = [], r = 0; r < t.length; r += 1) {
                        var o = nr(e, t[r]);
                        o &&
                            n.push({
                                start: o.start,
                                end: o.end,
                                isStart:
                                    o.start.valueOf() === e.start.valueOf(),
                                isEnd: o.end.valueOf() === e.end.valueOf(),
                                col: r,
                            });
                    }
                    return n;
                }),
                t
            );
        })(Wa),
        pu = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.buildDayRanges = on(fu)),
                    (t.slicer = new du()),
                    (t.timeColsRef = Wo()),
                    t
                );
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = this.context,
                        o = t.dateProfile,
                        i = t.dayTableModel,
                        a = n.options.nowIndicator,
                        s = this.buildDayRanges(i, o, n.dateEnv);
                    return Lo(
                        Na,
                        { unit: a ? "minute" : "day" },
                        function (l, u) {
                            return Lo(
                                uu,
                                r(
                                    { ref: e.timeColsRef },
                                    e.slicer.sliceProps(t, o, null, n, s),
                                    {
                                        forPrint: t.forPrint,
                                        axis: t.axis,
                                        dateProfile: o,
                                        slatMetas: t.slatMetas,
                                        slotDuration: t.slotDuration,
                                        cells: i.cells[0],
                                        tableColGroupNode: t.tableColGroupNode,
                                        tableMinWidth: t.tableMinWidth,
                                        clientWidth: t.clientWidth,
                                        clientHeight: t.clientHeight,
                                        expandRows: t.expandRows,
                                        nowDate: l,
                                        nowIndicatorSegs:
                                            a && e.slicer.sliceNowDate(l, n, s),
                                        todayRange: u,
                                        onScrollTopRequest:
                                            t.onScrollTopRequest,
                                        onSlatCoords: t.onSlatCoords,
                                    }
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Qo);
    function fu(e, t, n) {
        for (var r = [], o = 0, i = e.headerDates; o < i.length; o++) {
            var a = i[o];
            r.push({
                start: n.add(a, t.slotMinTime),
                end: n.add(a, t.slotMaxTime),
            });
        }
        return r;
    }
    var hu = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 },
    ];
    function vu(e, t, n, r, o) {
        for (
            var i = new Date(0),
                a = e,
                s = Gt(0),
                l =
                    n ||
                    (function (e) {
                        var t, n, r;
                        for (t = hu.length - 1; t >= 0; t -= 1)
                            if (null !== (r = $t((n = Gt(hu[t])), e)) && r > 1)
                                return n;
                        return e;
                    })(r),
                u = [];
            Kt(a) < Kt(t);

        ) {
            var c = o.add(i, a),
                d = null !== $t(s, l);
            u.push({
                date: c,
                time: a,
                key: c.toISOString(),
                isoTimeStr: tn(c),
                isLabeled: d,
            }),
                (a = Yt(a, r)),
                (s = Yt(s, r));
        }
        return u;
    }
    var gu = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.buildTimeColsModel = on(mu)), (t.buildSlatMetas = on(vu)), t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.context,
                    n = t.options,
                    o = t.dateEnv,
                    i = t.dateProfileGenerator,
                    a = this.props,
                    s = a.dateProfile,
                    l = this.buildTimeColsModel(s, i),
                    u = this.allDaySplitter.splitProps(a),
                    c = this.buildSlatMetas(
                        s.slotMinTime,
                        s.slotMaxTime,
                        n.slotLabelInterval,
                        n.slotDuration,
                        o
                    ),
                    d = n.dayMinWidth,
                    p = !d,
                    f = d,
                    h =
                        n.dayHeaders &&
                        Lo(Aa, {
                            dates: l.headerDates,
                            dateProfile: s,
                            datesRepDistinctDays: !0,
                            renderIntro: p ? this.renderHeadAxis : null,
                        }),
                    v =
                        !1 !== n.allDaySlot &&
                        function (t) {
                            return Lo(
                                Ml,
                                r(
                                    {},
                                    u.allDay,
                                    {
                                        dateProfile: s,
                                        dayTableModel: l,
                                        nextDayThreshold: n.nextDayThreshold,
                                        tableMinWidth: t.tableMinWidth,
                                        colGroupNode: t.tableColGroupNode,
                                        renderRowIntro: p
                                            ? e.renderTableRowAxis
                                            : null,
                                        showWeekNumbers: !1,
                                        expandRows: !1,
                                        headerAlignElRef: e.headerElRef,
                                        clientWidth: t.clientWidth,
                                        clientHeight: t.clientHeight,
                                        forPrint: a.forPrint,
                                    },
                                    e.getAllDayMaxEventProps()
                                )
                            );
                        },
                    g = function (t) {
                        return Lo(
                            pu,
                            r({}, u.timed, {
                                dayTableModel: l,
                                dateProfile: s,
                                axis: p,
                                slotDuration: n.slotDuration,
                                slatMetas: c,
                                forPrint: a.forPrint,
                                tableColGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                onSlatCoords: e.handleSlatCoords,
                                expandRows: t.expandRows,
                                onScrollTopRequest: e.handleScrollTopRequest,
                            })
                        );
                    };
                return f
                    ? this.renderHScrollLayout(
                          h,
                          v,
                          g,
                          l.colCnt,
                          d,
                          c,
                          this.state.slatCoords
                      )
                    : this.renderSimpleLayout(h, v, g);
            }),
            t
        );
    })(zl);
    function mu(e, t) {
        var n = new La(e.renderRange, t);
        return new Ua(n, !1);
    }
    var yu = ei({
            initialView: "timeGridWeek",
            optionRefiners: { allDaySlot: Boolean },
            views: {
                timeGrid: {
                    component: gu,
                    usesMinMaxTime: !0,
                    allDaySlot: !0,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0,
                },
                timeGridDay: { type: "timeGrid", duration: { days: 1 } },
                timeGridWeek: { type: "timeGrid", duration: { weeks: 1 } },
            },
        }),
        Eu = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.state = { textId: ze() }), t;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.context,
                        t = e.theme,
                        n = e.dateEnv,
                        o = e.options,
                        i = e.viewApi,
                        a = this.props,
                        s = a.cellId,
                        l = a.dayDate,
                        u = a.todayRange,
                        c = this.state.textId,
                        d = vo(l, u),
                        p = o.listDayFormat ? n.format(l, o.listDayFormat) : "",
                        f = o.listDaySideFormat
                            ? n.format(l, o.listDaySideFormat)
                            : "",
                        h = r(
                            {
                                date: n.toDate(l),
                                view: i,
                                textId: c,
                                text: p,
                                sideText: f,
                                navLinkAttrs: Eo(this.context, l),
                                sideNavLinkAttrs: Eo(
                                    this.context,
                                    l,
                                    "day",
                                    !1
                                ),
                            },
                            d
                        ),
                        v = ["fc-list-day"].concat(go(d, t));
                    return Lo(
                        oi,
                        {
                            hookProps: h,
                            classNames: o.dayHeaderClassNames,
                            content: o.dayHeaderContent,
                            defaultContent: bu,
                            didMount: o.dayHeaderDidMount,
                            willUnmount: o.dayHeaderWillUnmount,
                        },
                        function (e, n, r, o) {
                            return Lo(
                                "tr",
                                {
                                    ref: e,
                                    className: v.concat(n).join(" "),
                                    "data-date": en(l),
                                },
                                Lo(
                                    "th",
                                    {
                                        scope: "colgroup",
                                        colSpan: 3,
                                        id: s,
                                        "aria-labelledby": c,
                                    },
                                    Lo(
                                        "div",
                                        {
                                            className:
                                                "fc-list-day-cushion " +
                                                t.getClass("tableCellShaded"),
                                            ref: r,
                                        },
                                        o
                                    )
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Xo);
    function bu(e) {
        return Lo(
            Vo,
            null,
            e.text &&
                Lo(
                    "a",
                    r(
                        { id: e.textId, className: "fc-list-day-text" },
                        e.navLinkAttrs
                    ),
                    e.text
                ),
            e.sideText &&
                Lo(
                    "a",
                    r(
                        {
                            "aria-hidden": !0,
                            className: "fc-list-day-side-text",
                        },
                        e.sideNavLinkAttrs
                    ),
                    e.sideText
                )
        );
    }
    var Su = bn({ hour: "numeric", minute: "2-digit", meridiem: "short" }),
        wu = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                n(t, e),
                (t.prototype.render = function () {
                    var e = this.props,
                        t = this.context,
                        n = e.seg,
                        o = e.timeHeaderId,
                        i = e.eventHeaderId,
                        a = e.dateHeaderId,
                        s = t.options.eventTimeFormat || Su;
                    return Lo(
                        ps,
                        {
                            seg: n,
                            timeText: "",
                            disableDragging: !0,
                            disableResizing: !0,
                            defaultContent: function () {
                                return (function (e, t) {
                                    var n = wr(e, t);
                                    return Lo(
                                        "a",
                                        r({}, n),
                                        e.eventRange.def.title
                                    );
                                })(n, t);
                            },
                            isPast: e.isPast,
                            isFuture: e.isFuture,
                            isToday: e.isToday,
                            isSelected: e.isSelected,
                            isDragging: e.isDragging,
                            isResizing: e.isResizing,
                            isDateSelecting: e.isDateSelecting,
                        },
                        function (e, r, l, u, c) {
                            return Lo(
                                "tr",
                                {
                                    className: [
                                        "fc-list-event",
                                        c.event.url
                                            ? "fc-event-forced-url"
                                            : "",
                                    ]
                                        .concat(r)
                                        .join(" "),
                                    ref: e,
                                },
                                (function (e, t, n, r, o) {
                                    var i = n.options;
                                    if (!1 !== i.displayEventTime) {
                                        var a = e.eventRange.def,
                                            s = e.eventRange.instance,
                                            l = !1,
                                            u = void 0;
                                        if (
                                            (a.allDay
                                                ? (l = !0)
                                                : Jn(e.eventRange.range)
                                                ? e.isStart
                                                    ? (u = yr(
                                                          e,
                                                          t,
                                                          n,
                                                          null,
                                                          null,
                                                          s.range.start,
                                                          e.end
                                                      ))
                                                    : e.isEnd
                                                    ? (u = yr(
                                                          e,
                                                          t,
                                                          n,
                                                          null,
                                                          null,
                                                          e.start,
                                                          s.range.end
                                                      ))
                                                    : (l = !0)
                                                : (u = yr(e, t, n)),
                                            l)
                                        ) {
                                            var c = {
                                                text: n.options.allDayText,
                                                view: n.viewApi,
                                            };
                                            return Lo(
                                                oi,
                                                {
                                                    hookProps: c,
                                                    classNames:
                                                        i.allDayClassNames,
                                                    content: i.allDayContent,
                                                    defaultContent: Du,
                                                    didMount: i.allDayDidMount,
                                                    willUnmount:
                                                        i.allDayWillUnmount,
                                                },
                                                function (e, t, n, i) {
                                                    return Lo(
                                                        "td",
                                                        {
                                                            ref: e,
                                                            headers:
                                                                r + " " + o,
                                                            className: [
                                                                "fc-list-event-time",
                                                            ]
                                                                .concat(t)
                                                                .join(" "),
                                                        },
                                                        i
                                                    );
                                                }
                                            );
                                        }
                                        return Lo(
                                            "td",
                                            { className: "fc-list-event-time" },
                                            u
                                        );
                                    }
                                    return null;
                                })(n, s, t, o, a),
                                Lo(
                                    "td",
                                    {
                                        "aria-hidden": !0,
                                        className: "fc-list-event-graphic",
                                    },
                                    Lo("span", {
                                        className: "fc-list-event-dot",
                                        style: {
                                            borderColor:
                                                c.borderColor ||
                                                c.backgroundColor,
                                        },
                                    })
                                ),
                                Lo(
                                    "td",
                                    {
                                        ref: l,
                                        headers: i + " " + a,
                                        className: "fc-list-event-title",
                                    },
                                    u
                                )
                            );
                        }
                    );
                }),
                t
            );
        })(Xo);
    function Du(e) {
        return e.text;
    }
    var Tu = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t.computeDateVars = on(Cu)),
                (t.eventStoreToSegs = on(t._eventStoreToSegs)),
                (t.state = {
                    timeHeaderId: ze(),
                    eventHeaderId: ze(),
                    dateHeaderIdRoot: ze(),
                }),
                (t.setRootEl = function (e) {
                    e
                        ? t.context.registerInteractiveComponent(t, { el: e })
                        : t.context.unregisterInteractiveComponent(t);
                }),
                t
            );
        }
        return (
            n(t, e),
            (t.prototype.render = function () {
                var e = this,
                    t = this.props,
                    n = this.context,
                    r = [
                        "fc-list",
                        n.theme.getClass("table"),
                        !1 !== n.options.stickyHeaderDates
                            ? "fc-list-sticky"
                            : "",
                    ],
                    o = this.computeDateVars(t.dateProfile),
                    i = o.dayDates,
                    a = o.dayRanges,
                    s = this.eventStoreToSegs(t.eventStore, t.eventUiBases, a);
                return Lo(
                    pi,
                    { viewSpec: n.viewSpec, elRef: this.setRootEl },
                    function (n, o) {
                        return Lo(
                            "div",
                            { ref: n, className: r.concat(o).join(" ") },
                            Lo(
                                Ka,
                                {
                                    liquid: !t.isHeightAuto,
                                    overflowX: t.isHeightAuto
                                        ? "visible"
                                        : "hidden",
                                    overflowY: t.isHeightAuto
                                        ? "visible"
                                        : "auto",
                                },
                                s.length > 0
                                    ? e.renderSegList(s, i)
                                    : e.renderEmptyMessage()
                            )
                        );
                    }
                );
            }),
            (t.prototype.renderEmptyMessage = function () {
                var e = this.context,
                    t = e.options,
                    n = e.viewApi,
                    r = { text: t.noEventsText, view: n };
                return Lo(
                    oi,
                    {
                        hookProps: r,
                        classNames: t.noEventsClassNames,
                        content: t.noEventsContent,
                        defaultContent: xu,
                        didMount: t.noEventsDidMount,
                        willUnmount: t.noEventsWillUnmount,
                    },
                    function (e, t, n, r) {
                        return Lo(
                            "div",
                            {
                                className: ["fc-list-empty"]
                                    .concat(t)
                                    .join(" "),
                                ref: e,
                            },
                            Lo(
                                "div",
                                { className: "fc-list-empty-cushion", ref: n },
                                r
                            )
                        );
                    }
                );
            }),
            (t.prototype.renderSegList = function (e, t) {
                var n = this.context,
                    o = n.theme,
                    i = n.options,
                    a = this.state,
                    s = a.timeHeaderId,
                    l = a.eventHeaderId,
                    u = a.dateHeaderIdRoot,
                    c = (function (e) {
                        var t,
                            n,
                            r = [];
                        for (t = 0; t < e.length; t += 1)
                            (
                                r[(n = e[t]).dayIndex] || (r[n.dayIndex] = [])
                            ).push(n);
                        return r;
                    })(e);
                return Lo(Na, { unit: "day" }, function (e, n) {
                    for (var a = [], d = 0; d < c.length; d += 1) {
                        var p = c[d];
                        if (p) {
                            var f = en(t[d]),
                                h = u + "-" + f;
                            a.push(
                                Lo(Eu, {
                                    key: f,
                                    cellId: h,
                                    dayDate: t[d],
                                    todayRange: n,
                                })
                            );
                            for (
                                var v = 0, g = (p = fr(p, i.eventOrder));
                                v < g.length;
                                v++
                            ) {
                                var m = g[v];
                                a.push(
                                    Lo(
                                        wu,
                                        r(
                                            {
                                                key:
                                                    f +
                                                    ":" +
                                                    m.eventRange.instance
                                                        .instanceId,
                                                seg: m,
                                                isDragging: !1,
                                                isResizing: !1,
                                                isDateSelecting: !1,
                                                isSelected: !1,
                                                timeHeaderId: s,
                                                eventHeaderId: l,
                                                dateHeaderId: h,
                                            },
                                            Er(m, n, e)
                                        )
                                    )
                                );
                            }
                        }
                    }
                    return Lo(
                        "table",
                        { className: "fc-list-table " + o.getClass("table") },
                        Lo(
                            "thead",
                            null,
                            Lo(
                                "tr",
                                null,
                                Lo("th", { scope: "col", id: s }, i.timeHint),
                                Lo("th", { scope: "col", "aria-hidden": !0 }),
                                Lo("th", { scope: "col", id: l }, i.eventHint)
                            )
                        ),
                        Lo("tbody", null, a)
                    );
                });
            }),
            (t.prototype._eventStoreToSegs = function (e, t, n) {
                return this.eventRangesToSegs(
                    sr(
                        e,
                        t,
                        this.props.dateProfile.activeRange,
                        this.context.options.nextDayThreshold
                    ).fg,
                    n
                );
            }),
            (t.prototype.eventRangesToSegs = function (e, t) {
                for (var n = [], r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    n.push.apply(n, this.eventRangeToSegs(i, t));
                }
                return n;
            }),
            (t.prototype.eventRangeToSegs = function (e, t) {
                var n,
                    r,
                    o,
                    i = this.context.dateEnv,
                    a = this.context.options.nextDayThreshold,
                    s = e.range,
                    l = e.def.allDay,
                    u = [];
                for (n = 0; n < t.length; n += 1)
                    if (
                        (r = nr(s, t[n])) &&
                        ((o = {
                            component: this,
                            eventRange: e,
                            start: r.start,
                            end: r.end,
                            isStart:
                                e.isStart &&
                                r.start.valueOf() === s.start.valueOf(),
                            isEnd:
                                e.isEnd && r.end.valueOf() === s.end.valueOf(),
                            dayIndex: n,
                        }),
                        u.push(o),
                        !o.isEnd &&
                            !l &&
                            n + 1 < t.length &&
                            s.end < i.add(t[n + 1].start, a))
                    ) {
                        (o.end = s.end), (o.isEnd = !0);
                        break;
                    }
                return u;
            }),
            t
        );
    })(Qo);
    function xu(e) {
        return e.text;
    }
    function Cu(e) {
        for (
            var t = bt(e.renderRange.start),
                n = e.renderRange.end,
                r = [],
                o = [];
            t < n;

        )
            r.push(t), o.push({ start: t, end: ft(t, 1) }), (t = ft(t, 1));
        return { dayDates: r, dayRanges: o };
    }
    function ku(e) {
        return !1 === e ? null : bn(e);
    }
    var _u = ei({
            optionRefiners: {
                listDayFormat: ku,
                listDaySideFormat: ku,
                noEventsClassNames: Mn,
                noEventsContent: Mn,
                noEventsDidMount: Mn,
                noEventsWillUnmount: Mn,
            },
            views: {
                list: {
                    component: Tu,
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    },
                },
                listDay: {
                    type: "list",
                    duration: { days: 1 },
                    listDayFormat: { weekday: "long" },
                },
                listWeek: {
                    type: "list",
                    duration: { weeks: 1 },
                    listDayFormat: { weekday: "long" },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    },
                },
                listMonth: {
                    type: "list",
                    duration: { month: 1 },
                    listDaySideFormat: { weekday: "long" },
                },
                listYear: {
                    type: "list",
                    duration: { year: 1 },
                    listDaySideFormat: { weekday: "long" },
                },
            },
        }),
        Ru = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), t;
        })(Ao);
    (Ru.prototype.classes = {
        root: "fc-theme-bootstrap",
        table: "table-bordered",
        tableCellShaded: "table-active",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body",
    }),
        (Ru.prototype.baseIconClass = "fa"),
        (Ru.prototype.iconClasses = {
            close: "fa-times",
            prev: "fa-chevron-left",
            next: "fa-chevron-right",
            prevYear: "fa-angle-double-left",
            nextYear: "fa-angle-double-right",
        }),
        (Ru.prototype.rtlIconClasses = {
            prev: "fa-chevron-right",
            next: "fa-chevron-left",
            prevYear: "fa-angle-double-right",
            nextYear: "fa-angle-double-left",
        }),
        (Ru.prototype.iconOverrideOption = "bootstrapFontAwesome"),
        (Ru.prototype.iconOverrideCustomButtonOption = "bootstrapFontAwesome"),
        (Ru.prototype.iconOverridePrefix = "fa-");
    var Mu = ei({ themeClasses: { bootstrap: Ru } }),
        Iu = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return n(t, e), t;
        })(Ao);
    (Iu.prototype.classes = {
        root: "fc-theme-bootstrap5",
        tableCellShaded: "fc-theme-bootstrap5-shaded",
        buttonGroup: "btn-group",
        button: "btn btn-primary",
        buttonActive: "active",
        popover: "popover",
        popoverHeader: "popover-header",
        popoverContent: "popover-body",
    }),
        (Iu.prototype.baseIconClass = "bi"),
        (Iu.prototype.iconClasses = {
            close: "bi-x-lg",
            prev: "bi-chevron-left",
            next: "bi-chevron-right",
            prevYear: "bi-chevron-double-left",
            nextYear: "bi-chevron-double-right",
        }),
        (Iu.prototype.rtlIconClasses = {
            prev: "bi-chevron-right",
            next: "bi-chevron-left",
            prevYear: "bi-chevron-double-right",
            nextYear: "bi-chevron-double-left",
        }),
        (Iu.prototype.iconOverrideOption = "buttonIcons"),
        (Iu.prototype.iconOverrideCustomButtonOption = "icon"),
        (Iu.prototype.iconOverridePrefix = "bi-");
    var Pu = ei({ themeClasses: { bootstrap5: Iu } }),
        Nu = "https://www.googleapis.com/calendar/v3/calendars";
    var Hu = ei({
        eventSourceDefs: [
            {
                parseMeta: function (e) {
                    var t = e.googleCalendarId;
                    return (
                        !t &&
                            e.url &&
                            (t = (function (e) {
                                var t;
                                if (
                                    /^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(
                                        e
                                    )
                                )
                                    return e;
                                if (
                                    (t =
                                        /^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(
                                            e
                                        )) ||
                                    (t =
                                        /^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(
                                            e
                                        ))
                                )
                                    return decodeURIComponent(t[1]);
                                return null;
                            })(e.url)),
                        t
                            ? {
                                  googleCalendarId: t,
                                  googleCalendarApiKey: e.googleCalendarApiKey,
                                  googleCalendarApiBase:
                                      e.googleCalendarApiBase,
                                  extraParams: e.extraParams,
                              }
                            : null
                    );
                },
                fetch: function (e, t, n) {
                    var o = e.context,
                        i = o.dateEnv,
                        a = o.options,
                        s = e.eventSource.meta,
                        l = s.googleCalendarApiKey || a.googleCalendarApiKey;
                    if (l) {
                        var u = (function (e) {
                                var t = e.googleCalendarApiBase;
                                t || (t = Nu);
                                return (
                                    t +
                                    "/" +
                                    encodeURIComponent(e.googleCalendarId) +
                                    "/events"
                                );
                            })(s),
                            c = s.extraParams,
                            d = "function" == typeof c ? c() : c,
                            p = (function (e, t, n, o) {
                                var i, a, s;
                                o.canComputeOffset
                                    ? ((a = o.formatIso(e.start)),
                                      (s = o.formatIso(e.end)))
                                    : ((a = ft(e.start, -1).toISOString()),
                                      (s = ft(e.end, 1).toISOString()));
                                (i = r(r({}, n || {}), {
                                    key: t,
                                    timeMin: a,
                                    timeMax: s,
                                    singleEvents: !0,
                                    maxResults: 9999,
                                })),
                                    "local" !== o.timeZone &&
                                        (i.timeZone = o.timeZone);
                                return i;
                            })(e.range, l, d, i);
                        Li(
                            "GET",
                            u,
                            p,
                            function (e, r) {
                                var o, i;
                                e.error
                                    ? n({
                                          message:
                                              "Google Calendar API: " +
                                              e.error.message,
                                          errors: e.error.errors,
                                          xhr: r,
                                      })
                                    : t({
                                          rawEvents:
                                              ((o = e.items),
                                              (i = p.timeZone),
                                              o.map(function (e) {
                                                  return (function (e, t) {
                                                      var n =
                                                          e.htmlLink || null;
                                                      n &&
                                                          t &&
                                                          (n = (function (
                                                              e,
                                                              t
                                                          ) {
                                                              return e.replace(
                                                                  /(\?.*?)?(#|$)/,
                                                                  function (
                                                                      e,
                                                                      n,
                                                                      r
                                                                  ) {
                                                                      return (
                                                                          (n
                                                                              ? n +
                                                                                "&"
                                                                              : "?") +
                                                                          t +
                                                                          r
                                                                      );
                                                                  }
                                                              );
                                                          })(n, "ctz=" + t));
                                                      return {
                                                          id: e.id,
                                                          title: e.summary,
                                                          start:
                                                              e.start
                                                                  .dateTime ||
                                                              e.start.date,
                                                          end:
                                                              e.end.dateTime ||
                                                              e.end.date,
                                                          url: n,
                                                          location: e.location,
                                                          description:
                                                              e.description,
                                                          attachments:
                                                              e.attachments ||
                                                              [],
                                                          extendedProps:
                                                              (
                                                                  e.extendedProperties ||
                                                                  {}
                                                              ).shared || {},
                                                      };
                                                  })(e, i);
                                              })),
                                          xhr: r,
                                      });
                            },
                            function (e, t) {
                                n({ message: e, xhr: t });
                            }
                        );
                    } else
                        n({
                            message:
                                "Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/",
                        });
                },
            },
        ],
        optionRefiners: { googleCalendarApiKey: String },
        eventSourceRefiners: {
            googleCalendarApiKey: String,
            googleCalendarId: String,
            googleCalendarApiBase: String,
            extraParams: Mn,
        },
    });
    return (
        Vi.push(sl, Hl, yu, _u, Mu, Pu, Hu),
        (e.BASE_OPTION_DEFAULTS = wn),
        (e.BASE_OPTION_REFINERS = Sn),
        (e.BaseComponent = Xo),
        (e.BgEvent = Ss),
        (e.BootstrapTheme = Ru),
        (e.Calendar = Ns),
        (e.CalendarApi = Wr),
        (e.CalendarContent = Da),
        (e.CalendarDataManager = ji),
        (e.CalendarDataProvider = ta),
        (e.CalendarRoot = Ca),
        (e.Component = Oo),
        (e.ContentHook = ai),
        (e.CustomContentRenderContext = ii),
        (e.DateComponent = Qo),
        (e.DateEnv = Zr),
        (e.DateProfileGenerator = mi),
        (e.DayCellContent = ms),
        (e.DayCellRoot = Es),
        (e.DayGridView = Il),
        (e.DayHeader = Aa),
        (e.DaySeriesModel = La),
        (e.DayTable = Ml),
        (e.DayTableModel = Ua),
        (e.DayTableSlicer = Rl),
        (e.DayTimeCols = pu),
        (e.DayTimeColsSlicer = du),
        (e.DayTimeColsView = gu),
        (e.DelayedRunner = zi),
        (e.Draggable = ol),
        (e.ElementDragging = ha),
        (e.ElementScrollController = No),
        (e.Emitter = Mo),
        (e.EventApi = Vr),
        (e.EventRoot = ps),
        (e.EventSourceApi = Me),
        (e.FeaturefulElementDragging = Gs),
        (e.Fragment = Vo),
        (e.Interaction = da),
        (e.ListView = Tu),
        (e.MoreLinkRoot = ks),
        (e.MountHook = li),
        (e.NamedTimeZoneImpl = na),
        (e.NowIndicatorRoot = vs),
        (e.NowTimer = Na),
        (e.PointerDragging = Ls),
        (e.PositionCache = Io),
        (e.RefMap = $a),
        (e.RenderHook = oi),
        (e.ScrollController = Po),
        (e.ScrollResponder = Go),
        (e.Scroller = Ka),
        (e.SegHierarchy = ra),
        (e.SimpleScrollGrid = ds),
        (e.Slicer = Wa),
        (e.Splitter = fo),
        (e.StandardEvent = fs),
        (e.Table = kl),
        (e.TableDateCell = Ma),
        (e.TableDowCell = Pa),
        (e.TableView = ll),
        (e.Theme = Ao),
        (e.ThirdPartyDraggable = al),
        (e.TimeCols = uu),
        (e.TimeColsSlatsCoords = Bl),
        (e.TimeColsView = zl),
        (e.ViewApi = Hr),
        (e.ViewContextType = qo),
        (e.ViewRoot = pi),
        (e.WeekNumberRoot = Ds),
        (e.WindowScrollController = Ho),
        (e.addDays = ft),
        (e.addDurations = Yt),
        (e.addMs = ht),
        (e.addWeeks = pt),
        (e.allowContextMenu = tt),
        (e.allowSelection = Qe),
        (e.applyMutationToEventStore = Ir),
        (e.applyStyle = Oe),
        (e.applyStyleProp = Le),
        (e.asCleanDays = function (e) {
            return e.years || e.months || e.milliseconds ? 0 : e.days;
        }),
        (e.asRoughMinutes = function (e) {
            return Kt(e) / 6e4;
        }),
        (e.asRoughMs = Kt),
        (e.asRoughSeconds = function (e) {
            return Kt(e) / 1e3;
        }),
        (e.binarySearch = ca),
        (e.buildClassNameNormalizer = ui),
        (e.buildDayRanges = fu),
        (e.buildDayTableModel = Pl),
        (e.buildEntryKey = ia),
        (e.buildEventApis = Fr),
        (e.buildEventRangeKey = Sr),
        (e.buildHashFromArray = function (e, t) {
            for (var n = {}, r = 0; r < e.length; r += 1) {
                var o = t(e[r], r);
                n[o[0]] = o[1];
            }
            return n;
        }),
        (e.buildIsoString = Qt),
        (e.buildNavLinkAttrs = Eo),
        (e.buildSegCompareObj = hr),
        (e.buildSegTimeText = yr),
        (e.buildSlatMetas = vu),
        (e.buildTimeColsModel = mu),
        (e.collectFromHash = Vt),
        (e.combineEventUis = zn),
        (e.compareByFieldSpec = ot),
        (e.compareByFieldSpecs = rt),
        (e.compareNumbers = lt),
        (e.compareObjs = Ut),
        (e.computeEarliestSegStart = Ms),
        (e.computeEdges = xo),
        (e.computeFallbackHeaderFormat = ka),
        (e.computeHeightAndMargins = function (e) {
            return (
                e.getBoundingClientRect().height +
                (function (e) {
                    var t = window.getComputedStyle(e);
                    return (
                        parseInt(t.marginTop, 10) + parseInt(t.marginBottom, 10)
                    );
                })(e)
            );
        }),
        (e.computeInnerRect = Co),
        (e.computeRect = ko),
        (e.computeSegDraggable = vr),
        (e.computeSegEndResizable = mr),
        (e.computeSegStartResizable = gr),
        (e.computeShrinkWidth = Ja),
        (e.computeSmallestCellWidth = ct),
        (e.computeVisibleDayRange = $n),
        (e.config = va),
        (e.constrainPoint = so),
        (e.createAriaClickAttrs = qe),
        (e.createContext = zo),
        (e.createDuration = Gt),
        (e.createElement = Lo),
        (e.createEmptyEventStore = Hn),
        (e.createEventInstance = Rt),
        (e.createEventUi = Vn),
        (e.createFormatter = bn),
        (e.createPlugin = ei),
        (e.createPortal = Fo),
        (e.createRef = Wo),
        (e.diffDates = Qn),
        (e.diffDayAndTime = mt),
        (e.diffDays = gt),
        (e.diffPoints = uo),
        (e.diffWeeks = vt),
        (e.diffWholeDays = Et),
        (e.diffWholeWeeks = yt),
        (e.disableCursor = Ke),
        (e.elementClosest = Pe),
        (e.elementMatches = Ne),
        (e.enableCursor = $e),
        (e.eventTupleToStore = Pn),
        (e.filterEventStoreDefs = On),
        (e.filterHash = Pt),
        (e.findDirectChildren = function (e, t) {
            for (
                var n = e instanceof HTMLElement ? [e] : e, r = [], o = 0;
                o < n.length;
                o += 1
            )
                for (var i = n[o].children, a = 0; a < i.length; a += 1) {
                    var s = i[a];
                    (t && !Ne(s, t)) || r.push(s);
                }
            return r;
        }),
        (e.findElements = He),
        (e.flexibleCompare = it),
        (e.flushSync = Bo),
        (e.formatDate = function (e, t) {
            void 0 === t && (t = {});
            var n = to(t),
                r = bn(t),
                o = n.createMarkerMeta(e);
            return o ? n.format(o.marker, r, { forcedTzo: o.forcedTzo }) : "";
        }),
        (e.formatDayString = en),
        (e.formatIsoTimeString = tn),
        (e.formatRange = function (e, t, n) {
            var r = to("object" == typeof n && n ? n : {}),
                o = bn(n),
                i = r.createMarkerMeta(e),
                a = r.createMarkerMeta(t);
            return i && a
                ? r.formatRange(i.marker, a.marker, o, {
                      forcedStartTzo: i.forcedTzo,
                      forcedEndTzo: a.forcedTzo,
                      isEndExclusive: n.isEndExclusive,
                      defaultSeparator: wn.defaultRangeSeparator,
                  })
                : "";
        }),
        (e.getAllowYScrolling = es),
        (e.getCanVGrowWithinCell = co),
        (e.getClippingParents = _o),
        (e.getDateMeta = vo),
        (e.getDayClassNames = go),
        (e.getDefaultEventEnd = Mr),
        (e.getElRoot = We),
        (e.getElSeg = cr),
        (e.getEntrySpanEnd = oa),
        (e.getEventClassNames = br),
        (e.getEventTargetViaRoot = Ue),
        (e.getIsRtlScrollbarOnLeft = wo),
        (e.getRectCenter = lo),
        (e.getRelevantEvents = Nn),
        (e.getScrollGridClassNames = as),
        (e.getScrollbarWidths = Do),
        (e.getSectionClassNames = ss),
        (e.getSectionHasLiquidHeight = Qa),
        (e.getSegAnchorAttrs = wr),
        (e.getSegMeta = Er),
        (e.getSlotClassNames = function (e, t) {
            var n = ["fc-slot", "fc-slot-" + dt[e.dow]];
            return (
                e.isDisabled
                    ? n.push("fc-slot-disabled")
                    : (e.isToday &&
                          (n.push("fc-slot-today"),
                          n.push(t.getClass("today"))),
                      e.isPast && n.push("fc-slot-past"),
                      e.isFuture && n.push("fc-slot-future")),
                n
            );
        }),
        (e.getStickyFooterScrollbar = cs),
        (e.getStickyHeaderDates = us),
        (e.getUnequalProps = Lt),
        (e.getUniqueDomId = ze),
        (e.globalLocales = Xr),
        (e.globalPlugins = Vi),
        (e.greatestDurationDenominator = Jt),
        (e.groupIntersectingEntries = aa),
        (e.guid = Xe),
        (e.hasBgRendering = lr),
        (e.hasShrinkWidth = is),
        (e.identity = Mn),
        (e.interactionSettingsStore = fa),
        (e.interactionSettingsToStore = pa),
        (e.intersectRanges = nr),
        (e.intersectRects = ao),
        (e.intersectSpans = la),
        (e.isArraysEqual = rn),
        (e.isColPropsEqual = ns),
        (e.isDateSelectionValid = Fa),
        (e.isDateSpansEqual = xr),
        (e.isInt = ut),
        (e.isInteractionValid = za),
        (e.isMultiDayRange = Jn),
        (e.isPropsEqual = Ot),
        (e.isPropsValid = ja),
        (e.isValidDate = kt),
        (e.joinSpans = sa),
        (e.listenBySelector = Be),
        (e.mapHash = Nt),
        (e.memoize = on),
        (e.memoizeArraylike = function (e, t, n) {
            var r = this,
                o = [],
                i = [];
            return function (a) {
                for (var s = o.length, l = a.length, u = 0; u < s; u += 1)
                    if (a[u]) {
                        if (!rn(o[u], a[u])) {
                            n && n(i[u]);
                            var c = e.apply(r, a[u]);
                            (t && t(c, i[u])) || (i[u] = c);
                        }
                    } else n && n(i[u]);
                for (; u < l; u += 1) i[u] = e.apply(r, a[u]);
                return (o = a), i.splice(l), i;
            };
        }),
        (e.memoizeHashlike = function (e, t, n) {
            var r = this,
                o = {},
                i = {};
            return function (a) {
                var s = {};
                for (var l in a)
                    if (i[l])
                        if (rn(o[l], a[l])) s[l] = i[l];
                        else {
                            n && n(i[l]);
                            var u = e.apply(r, a[l]);
                            s[l] = t && t(u, i[l]) ? i[l] : u;
                        }
                    else s[l] = e.apply(r, a[l]);
                return (o = a), (i = s), s;
            };
        }),
        (e.memoizeObjArg = an),
        (e.mergeEventStores = An),
        (e.multiplyDuration = Zt),
        (e.padStart = at),
        (e.parseBusinessHours = oo),
        (e.parseClassNames = Ln),
        (e.parseDragMeta = ma),
        (e.parseEventDef = Xn),
        (e.parseFieldSpecs = nt),
        (e.parseMarker = Yr),
        (e.pointInsideRect = io),
        (e.preventContextMenu = et),
        (e.preventDefault = Fe),
        (e.preventSelection = Je),
        (e.rangeContainsMarker = ar),
        (e.rangeContainsRange = ir),
        (e.rangesEqual = rr),
        (e.rangesIntersect = or),
        (e.refineEventDef = Yn),
        (e.refineProps = Rn),
        (e.removeElement = Ie),
        (e.removeExact = function (e, t) {
            for (var n = 0, r = 0; r < e.length; )
                e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
            return n;
        }),
        (e.render = Uo),
        (e.renderChunkContent = ts),
        (e.renderFill = bs),
        (e.renderMicroColGroup = rs),
        (e.renderScrollShim = ls),
        (e.requestJson = Li),
        (e.sanitizeShrinkWidth = os),
        (e.setElSeg = ur),
        (e.setRef = Jo),
        (e.sliceEventStore = sr),
        (e.sliceEvents = function (e, t) {
            return sr(
                e.eventStore,
                e.eventUiBases,
                e.dateProfile.activeRange,
                t ? e.nextDayThreshold : null
            ).fg;
        }),
        (e.sortEventSegs = fr),
        (e.startOfDay = bt),
        (e.translateRect = function (e, t, n) {
            return {
                left: e.left + t,
                right: e.right + t,
                top: e.top + n,
                bottom: e.bottom + n,
            };
        }),
        (e.triggerDateSelect = _r),
        (e.unmountComponentAtNode = jo),
        (e.unpromisify = Ro),
        (e.version = "5.11.5"),
        (e.whenTransitionDone = Ge),
        (e.wholeDivideDurations = $t),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
    );
})({});
[].push.apply(
    FullCalendar.globalLocales,
    (function () {
        "use strict";
        function e(e) {
            return "Tag" === e || "Monat" === e ? "r" : "Jahr" === e ? "s" : "";
        }
        function t(e) {
            return "Tag" === e || "Monat" === e ? "r" : "Jahr" === e ? "s" : "";
        }
        return [
            {
                code: "af",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Vorige",
                    next: "Volgende",
                    today: "Vandag",
                    year: "Jaar",
                    month: "Maand",
                    week: "Week",
                    day: "Dag",
                    list: "Agenda",
                },
                allDayText: "Heeldag",
                moreLinkText: "Addisionele",
                noEventsText: "Daar is geen gebeurtenisse nie",
            },
            {
                code: "ar-dz",
                week: { dow: 0, doy: 4 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar-kw",
                week: { dow: 0, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar-ly",
                week: { dow: 6, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar-ma",
                week: { dow: 6, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar-sa",
                week: { dow: 0, doy: 6 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar-tn",
                week: { dow: 1, doy: 4 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "ar",
                week: { dow: 6, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ø§Ù„Ø³Ø§Ø¨Ù‚",
                    next: "Ø§Ù„ØªØ§Ù„ÙŠ",
                    today: "Ø§Ù„ÙŠÙˆÙ…",
                    month: "Ø´Ù‡Ø±",
                    week: "Ø£Ø³Ø¨ÙˆØ¹",
                    day: "ÙŠÙˆÙ…",
                    list: "Ø£Ø¬Ù†Ø¯Ø©",
                },
                weekText: "Ø£Ø³Ø¨ÙˆØ¹",
                allDayText: "Ø§Ù„ÙŠÙˆÙ… ÙƒÙ„Ù‡",
                moreLinkText: "Ø£Ø®Ø±Ù‰",
                noEventsText: "Ø£ÙŠ Ø£Ø­Ø¯Ø§Ø« Ù„Ø¹Ø±Ø¶",
            },
            {
                code: "az",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ÆvvÉ™l",
                    next: "Sonra",
                    today: "Bu GÃ¼n",
                    month: "Ay",
                    week: "HÉ™ftÉ™",
                    day: "GÃ¼n",
                    list: "GÃ¼ndÉ™m",
                },
                weekText: "HÉ™ftÉ™",
                allDayText: "BÃ¼tÃ¼n GÃ¼n",
                moreLinkText: function (e) {
                    return "+ daha Ã§ox " + e;
                },
                noEventsText: "GÃ¶stÉ™rmÉ™k Ã¼Ã§Ã¼n hadisÉ™ yoxdur",
            },
            {
                code: "bg",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "Ð½Ð°Ð·Ð°Ð´",
                    next: "Ð½Ð°Ð¿Ñ€ÐµÐ´",
                    today: "Ð´Ð½ÐµÑ",
                    month: "ÐœÐµÑÐµÑ†",
                    week: "Ð¡ÐµÐ´Ð¼Ð¸Ñ†Ð°",
                    day: "Ð”ÐµÐ½",
                    list: "Ð“Ñ€Ð°Ñ„Ð¸Ðº",
                },
                allDayText: "Ð¦ÑÐ» Ð´ÐµÐ½",
                moreLinkText: function (e) {
                    return "+Ð¾Ñ‰Ðµ " + e;
                },
                noEventsText: "ÐÑÐ¼Ð° ÑÑŠÐ±Ð¸Ñ‚Ð¸Ñ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ",
            },
            {
                code: "bn",
                week: { dow: 0, doy: 6 },
                buttonText: {
                    prev: "à¦ªà§‡à¦›à¦¨à§‡",
                    next: "à¦¸à¦¾à¦®à¦¨à§‡",
                    today: "à¦†à¦œ",
                    month: "à¦®à¦¾à¦¸",
                    week: "à¦¸à¦ªà§à¦¤à¦¾à¦¹",
                    day: "à¦¦à¦¿à¦¨",
                    list: "à¦¤à¦¾à¦²à¦¿à¦•à¦¾",
                },
                weekText: "à¦¸à¦ªà§à¦¤à¦¾à¦¹",
                allDayText: "à¦¸à¦¾à¦°à¦¾à¦¦à¦¿à¦¨",
                moreLinkText: function (e) {
                    return "+à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ " + e;
                },
                noEventsText: "à¦•à§‹à¦¨à§‹ à¦‡à¦­à§‡à¦¨à§à¦Ÿ à¦¨à§‡à¦‡",
            },
            {
                code: "bs",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "ProÅ¡li",
                    next: "SljedeÄ‡i",
                    today: "Danas",
                    month: "Mjesec",
                    week: "Sedmica",
                    day: "Dan",
                    list: "Raspored",
                },
                weekText: "Sed",
                allDayText: "Cijeli dan",
                moreLinkText: function (e) {
                    return "+ joÅ¡ " + e;
                },
                noEventsText: "Nema dogaÄ‘aja za prikazivanje",
            },
            {
                code: "ca",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Anterior",
                    next: "SegÃ¼ent",
                    today: "Avui",
                    month: "Mes",
                    week: "Setmana",
                    day: "Dia",
                    list: "Agenda",
                },
                weekText: "Set",
                allDayText: "Tot el dia",
                moreLinkText: "mÃ©s",
                noEventsText: "No hi ha esdeveniments per mostrar",
            },
            {
                code: "cs",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "DÅ™Ã­ve",
                    next: "PozdÄ›ji",
                    today: "NynÃ­",
                    month: "MÄ›sÃ­c",
                    week: "TÃ½den",
                    day: "Den",
                    list: "Agenda",
                },
                weekText: "TÃ½d",
                allDayText: "CelÃ½ den",
                moreLinkText: function (e) {
                    return "+dalÅ¡Ã­: " + e;
                },
                noEventsText: "Å½Ã¡dnÃ© akce k zobrazenÃ­",
            },
            {
                code: "cy",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Blaenorol",
                    next: "Nesaf",
                    today: "Heddiw",
                    year: "Blwyddyn",
                    month: "Mis",
                    week: "Wythnos",
                    day: "Dydd",
                    list: "Rhestr",
                },
                weekText: "Wythnos",
                allDayText: "Trwy'r dydd",
                moreLinkText: "Mwy",
                noEventsText: "Dim digwyddiadau",
            },
            {
                code: "da",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Forrige",
                    next: "NÃ¦ste",
                    today: "I dag",
                    month: "MÃ¥ned",
                    week: "Uge",
                    day: "Dag",
                    list: "Agenda",
                },
                weekText: "Uge",
                allDayText: "Hele dagen",
                moreLinkText: "flere",
                noEventsText: "Ingen arrangementer at vise",
            },
            {
                code: "de-at",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ZurÃ¼ck",
                    next: "Vor",
                    today: "Heute",
                    year: "Jahr",
                    month: "Monat",
                    week: "Woche",
                    day: "Tag",
                    list: "TerminÃ¼bersicht",
                },
                weekText: "KW",
                weekTextLong: "Woche",
                allDayText: "GanztÃ¤gig",
                moreLinkText: function (e) {
                    return "+ weitere " + e;
                },
                noEventsText: "Keine Ereignisse anzuzeigen",
                buttonHints: {
                    prev: function (t) {
                        return "Vorherige".concat(e(t), " ").concat(t);
                    },
                    next: function (t) {
                        return "NÃ¤chste".concat(e(t), " ").concat(t);
                    },
                    today: function (t) {
                        return "Tag" === t
                            ? "Heute"
                            : "Diese".concat(e(t), " ").concat(t);
                    },
                },
                viewHint: function (e) {
                    return (
                        e +
                        ("Woche" === e ? "n" : "Monat" === e ? "s" : "es") +
                        "ansicht"
                    );
                },
                navLinkHint: "Gehe zu $0",
                moreLinkHint: function (e) {
                    return (
                        "Zeige " +
                        (1 === e
                            ? "ein weiteres Ereignis"
                            : e + " weitere Ereignisse")
                    );
                },
                closeHint: "SchlieÃŸen",
                timeHint: "Uhrzeit",
                eventHint: "Ereignis",
            },
            {
                code: "de",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ZurÃ¼ck",
                    next: "Vor",
                    today: "Heute",
                    year: "Jahr",
                    month: "Monat",
                    week: "Woche",
                    day: "Tag",
                    list: "TerminÃ¼bersicht",
                },
                weekText: "KW",
                weekTextLong: "Woche",
                allDayText: "GanztÃ¤gig",
                moreLinkText: function (e) {
                    return "+ weitere " + e;
                },
                noEventsText: "Keine Ereignisse anzuzeigen",
                buttonHints: {
                    prev: function (e) {
                        return "Vorherige".concat(t(e), " ").concat(e);
                    },
                    next: function (e) {
                        return "NÃ¤chste".concat(t(e), " ").concat(e);
                    },
                    today: function (e) {
                        return "Tag" === e
                            ? "Heute"
                            : "Diese".concat(t(e), " ").concat(e);
                    },
                },
                viewHint: function (e) {
                    return (
                        e +
                        ("Woche" === e ? "n" : "Monat" === e ? "s" : "es") +
                        "ansicht"
                    );
                },
                navLinkHint: "Gehe zu $0",
                moreLinkHint: function (e) {
                    return (
                        "Zeige " +
                        (1 === e
                            ? "ein weiteres Ereignis"
                            : e + " weitere Ereignisse")
                    );
                },
                closeHint: "SchlieÃŸen",
                timeHint: "Uhrzeit",
                eventHint: "Ereignis",
            },
            {
                code: "el",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Î ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿Ï‚",
                    next: "Î•Ï€ÏŒÎ¼ÎµÎ½Î¿Ï‚",
                    today: "Î£Î®Î¼ÎµÏÎ±",
                    month: "ÎœÎ®Î½Î±Ï‚",
                    week: "Î•Î²Î´Î¿Î¼Î¬Î´Î±",
                    day: "Î—Î¼Î­ÏÎ±",
                    list: "Î‘Ï„Î¶Î­Î½Ï„Î±",
                },
                weekText: "Î•Î²Î´",
                allDayText: "ÎŸÎ»Î¿Î®Î¼ÎµÏÎ¿",
                moreLinkText: "Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±",
                noEventsText:
                    "Î”ÎµÎ½ Ï…Ï€Î¬ÏÏ‡Î¿Ï…Î½ Î³ÎµÎ³Î¿Î½ÏŒÏ„Î± Ï€ÏÎ¿Ï‚ ÎµÎ¼Ï†Î¬Î½Î¹ÏƒÎ·",
            },
            {
                code: "en-au",
                week: { dow: 1, doy: 4 },
                buttonHints: {
                    prev: "Previous $0",
                    next: "Next $0",
                    today: "This $0",
                },
                viewHint: "$0 view",
                navLinkHint: "Go to $0",
                moreLinkHint: function (e) {
                    return "Show "
                        .concat(e, " more event")
                        .concat(1 === e ? "" : "s");
                },
            },
            {
                code: "en-gb",
                week: { dow: 1, doy: 4 },
                buttonHints: {
                    prev: "Previous $0",
                    next: "Next $0",
                    today: "This $0",
                },
                viewHint: "$0 view",
                navLinkHint: "Go to $0",
                moreLinkHint: function (e) {
                    return "Show "
                        .concat(e, " more event")
                        .concat(1 === e ? "" : "s");
                },
            },
            {
                code: "en-nz",
                week: { dow: 1, doy: 4 },
                buttonHints: {
                    prev: "Previous $0",
                    next: "Next $0",
                    today: "This $0",
                },
                viewHint: "$0 view",
                navLinkHint: "Go to $0",
                moreLinkHint: function (e) {
                    return "Show "
                        .concat(e, " more event")
                        .concat(1 === e ? "" : "s");
                },
            },
            {
                code: "eo",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "AntaÅ­a",
                    next: "Sekva",
                    today: "HodiaÅ­",
                    month: "Monato",
                    week: "Semajno",
                    day: "Tago",
                    list: "Tagordo",
                },
                weekText: "Sm",
                allDayText: "Tuta tago",
                moreLinkText: "pli",
                noEventsText: "Neniuj eventoj por montri",
            },
            {
                code: "es",
                week: { dow: 0, doy: 6 },
                buttonText: {
                    prev: "Ant",
                    next: "Sig",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "DÃ­a",
                    list: "Agenda",
                },
                weekText: "Sm",
                allDayText: "Todo el dÃ­a",
                moreLinkText: "mÃ¡s",
                noEventsText: "No hay eventos para mostrar",
            },
            {
                code: "es",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Ant",
                    next: "Sig",
                    today: "Hoy",
                    month: "Mes",
                    week: "Semana",
                    day: "DÃ­a",
                    list: "Agenda",
                },
                buttonHints: {
                    prev: "$0 antes",
                    next: "$0 siguiente",
                    today: function (e) {
                        return "DÃ­a" === e
                            ? "Hoy"
                            : ("Semana" === e ? "Esta" : "Este") +
                                  " " +
                                  e.toLocaleLowerCase();
                    },
                },
                viewHint: function (e) {
                    return (
                        "Vista " +
                        ("Semana" === e ? "de la" : "del") +
                        " " +
                        e.toLocaleLowerCase()
                    );
                },
                weekText: "Sm",
                weekTextLong: "Semana",
                allDayText: "Todo el dÃ­a",
                moreLinkText: "mÃ¡s",
                moreLinkHint: function (e) {
                    return "Mostrar ".concat(e, " eventos mÃ¡s");
                },
                noEventsText: "No hay eventos para mostrar",
                navLinkHint: "Ir al $0",
                closeHint: "Cerrar",
                timeHint: "La hora",
                eventHint: "Evento",
            },
            {
                code: "et",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Eelnev",
                    next: "JÃ¤rgnev",
                    today: "TÃ¤na",
                    month: "Kuu",
                    week: "NÃ¤dal",
                    day: "PÃ¤ev",
                    list: "PÃ¤evakord",
                },
                weekText: "nÃ¤d",
                allDayText: "Kogu pÃ¤ev",
                moreLinkText: function (e) {
                    return "+ veel " + e;
                },
                noEventsText: "Kuvamiseks puuduvad sÃ¼ndmused",
            },
            {
                code: "eu",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "Aur",
                    next: "Hur",
                    today: "Gaur",
                    month: "Hilabetea",
                    week: "Astea",
                    day: "Eguna",
                    list: "Agenda",
                },
                weekText: "As",
                allDayText: "Egun osoa",
                moreLinkText: "gehiago",
                noEventsText: "Ez dago ekitaldirik erakusteko",
            },
            {
                code: "fa",
                week: { dow: 6, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ù‚Ø¨Ù„ÛŒ",
                    next: "Ø¨Ø¹Ø¯ÛŒ",
                    today: "Ø§Ù…Ø±ÙˆØ²",
                    month: "Ù…Ø§Ù‡",
                    week: "Ù‡ÙØªÙ‡",
                    day: "Ø±ÙˆØ²",
                    list: "Ø¨Ø±Ù†Ø§Ù…Ù‡",
                },
                weekText: "Ù‡Ù",
                allDayText: "ØªÙ…Ø§Ù… Ø±ÙˆØ²",
                moreLinkText: function (e) {
                    return "Ø¨ÛŒØ´ Ø§Ø² " + e;
                },
                noEventsText: "Ù‡ÛŒÚ† Ø±ÙˆÛŒØ¯Ø§Ø¯ÛŒ Ø¨Ù‡ Ù†Ù…Ø§ÛŒØ´",
            },
            {
                code: "fi",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Edellinen",
                    next: "Seuraava",
                    today: "TÃ¤nÃ¤Ã¤n",
                    month: "Kuukausi",
                    week: "Viikko",
                    day: "PÃ¤ivÃ¤",
                    list: "Tapahtumat",
                },
                weekText: "Vk",
                allDayText: "Koko pÃ¤ivÃ¤",
                moreLinkText: "lisÃ¤Ã¤",
                noEventsText: "Ei nÃ¤ytettÃ¤viÃ¤ tapahtumia",
            },
            {
                code: "fr",
                buttonText: {
                    prev: "PrÃ©cÃ©dent",
                    next: "Suivant",
                    today: "Aujourd'hui",
                    year: "AnnÃ©e",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    list: "Mon planning",
                },
                weekText: "Sem.",
                allDayText: "Toute la journÃ©e",
                moreLinkText: "en plus",
                noEventsText: "Aucun Ã©vÃ©nement Ã  afficher",
            },
            {
                code: "fr-ch",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "PrÃ©cÃ©dent",
                    next: "Suivant",
                    today: "Courant",
                    year: "AnnÃ©e",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    list: "Mon planning",
                },
                weekText: "Sm",
                allDayText: "Toute la journÃ©e",
                moreLinkText: "en plus",
                noEventsText: "Aucun Ã©vÃ©nement Ã  afficher",
            },
            {
                code: "fr",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "PrÃ©cÃ©dent",
                    next: "Suivant",
                    today: "Aujourd'hui",
                    year: "AnnÃ©e",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    list: "Planning",
                },
                weekText: "Sem.",
                allDayText: "Toute la journÃ©e",
                moreLinkText: "en plus",
                noEventsText: "Aucun Ã©vÃ©nement Ã  afficher",
            },
            {
                code: "gl",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Ant",
                    next: "Seg",
                    today: "Hoxe",
                    month: "Mes",
                    week: "Semana",
                    day: "DÃ­a",
                    list: "Axenda",
                },
                weekText: "Sm",
                allDayText: "Todo o dÃ­a",
                moreLinkText: "mÃ¡is",
                noEventsText: "Non hai eventos para amosar",
            },
            {
                code: "he",
                direction: "rtl",
                buttonText: {
                    prev: "×”×§×•×“×",
                    next: "×”×‘×",
                    today: "×”×™×•×",
                    month: "×—×•×“×©",
                    week: "×©×‘×•×¢",
                    day: "×™×•×",
                    list: "×¡×“×¨ ×™×•×",
                },
                allDayText: "×›×œ ×”×™×•×",
                moreLinkText: "××—×¨",
                noEventsText: "××™×Ÿ ××™×¨×•×¢×™× ×œ×”×¦×’×”",
                weekText: "×©×‘×•×¢",
            },
            {
                code: "hi",
                week: { dow: 0, doy: 6 },
                buttonText: {
                    prev: "à¤ªà¤¿à¤›à¤²à¤¾",
                    next: "à¤…à¤—à¤²à¤¾",
                    today: "à¤†à¤œ",
                    month: "à¤®à¤¹à¥€à¤¨à¤¾",
                    week: "à¤¸à¤ªà¥à¤¤à¤¾à¤¹",
                    day: "à¤¦à¤¿à¤¨",
                    list: "à¤•à¤¾à¤°à¥à¤¯à¤¸à¥‚à¤šà¥€",
                },
                weekText: "à¤¹à¤«à¥à¤¤à¤¾",
                allDayText: "à¤¸à¤­à¥€ à¤¦à¤¿à¤¨",
                moreLinkText: function (e) {
                    return "+à¤…à¤§à¤¿à¤• " + e;
                },
                noEventsText:
                    "à¤•à¥‹à¤ˆ à¤˜à¤Ÿà¤¨à¤¾à¤“à¤‚ à¤•à¥‹ à¤ªà¥à¤°à¤¦à¤°à¥à¤¶à¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤",
            },
            {
                code: "hr",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "PrijaÅ¡nji",
                    next: "SljedeÄ‡i",
                    today: "Danas",
                    month: "Mjesec",
                    week: "Tjedan",
                    day: "Dan",
                    list: "Raspored",
                },
                weekText: "Tje",
                allDayText: "Cijeli dan",
                moreLinkText: function (e) {
                    return "+ joÅ¡ " + e;
                },
                noEventsText: "Nema dogaÄ‘aja za prikaz",
            },
            {
                code: "hu",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "vissza",
                    next: "elÅ‘re",
                    today: "ma",
                    month: "HÃ³nap",
                    week: "HÃ©t",
                    day: "Nap",
                    list: "Lista",
                },
                weekText: "HÃ©t",
                allDayText: "EgÃ©sz nap",
                moreLinkText: "tovÃ¡bbi",
                noEventsText: "Nincs megjelenÃ­thetÅ‘ esemÃ©ny",
            },
            {
                code: "hy-am",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Õ†Õ¡Õ­Õ¸Ö€Õ¤",
                    next: "Õ€Õ¡Õ»Õ¸Ö€Õ¤",
                    today: "Ô±ÕµÕ½Ö…Ö€",
                    month: "Ô±Õ´Õ«Õ½",
                    week: "Õ‡Õ¡Õ¢Õ¡Õ©",
                    day: "Õ•Ö€",
                    list: "Õ•Ö€Õ¾Õ¡ ÖÕ¸Ö‚ÖÕ¡Õ¯",
                },
                weekText: "Õ‡Õ¡Õ¢",
                allDayText: "Ô±Õ´Õ¢Õ¸Õ²Õ» Ö…Ö€",
                moreLinkText: function (e) {
                    return "+ Ö‡Õ½ " + e;
                },
                noEventsText:
                    "Ô²Õ¡ÖÕ¡Õ¯Õ¡ÕµÕ¸Ö‚Õ´ Õ§ Õ«Ö€Õ¡Õ¤Õ¡Ö€Õ±Õ¸Ö‚Õ©ÕµÕ¸Ö‚Õ¶Õ¨ ÖÕ¸Ö‚ÖÕ¡Õ¤Ö€Õ¥Õ¬Õ¸Ö‚",
            },
            {
                code: "id",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "mundur",
                    next: "maju",
                    today: "hari ini",
                    month: "Bulan",
                    week: "Minggu",
                    day: "Hari",
                    list: "Agenda",
                },
                weekText: "Mg",
                allDayText: "Sehari penuh",
                moreLinkText: "lebih",
                noEventsText: "Tidak ada acara untuk ditampilkan",
            },
            {
                code: "is",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Fyrri",
                    next: "NÃ¦sti",
                    today: "Ã dag",
                    month: "MÃ¡nuÃ°ur",
                    week: "Vika",
                    day: "Dagur",
                    list: "DagskrÃ¡",
                },
                weekText: "Vika",
                allDayText: "Allan daginn",
                moreLinkText: "meira",
                noEventsText: "Engir viÃ°burÃ°ir til aÃ° sÃ½na",
            },
            {
                code: "it",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Prec",
                    next: "Succ",
                    today: "Oggi",
                    month: "Mese",
                    week: "Settimana",
                    day: "Giorno",
                    list: "Agenda",
                },
                weekText: "Sm",
                allDayText: "Tutto il giorno",
                moreLinkText: function (e) {
                    return "+altri " + e;
                },
                noEventsText: "Non ci sono eventi da visualizzare",
            },
            {
                code: "ja",
                buttonText: {
                    prev: "å‰",
                    next: "æ¬¡",
                    today: "ä»Šæ—¥",
                    month: "æœˆ",
                    week: "é€±",
                    day: "æ—¥",
                    list: "äºˆå®šãƒªã‚¹ãƒˆ",
                },
                weekText: "é€±",
                allDayText: "çµ‚æ—¥",
                moreLinkText: function (e) {
                    return "ä»– " + e + " ä»¶";
                },
                noEventsText: "è¡¨ç¤ºã™ã‚‹äºˆå®šã¯ã‚ã‚Šã¾ã›ã‚“",
            },
            {
                code: "ka",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "áƒ¬áƒ˜áƒœáƒ",
                    next: "áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’áƒ˜",
                    today: "áƒ“áƒ¦áƒ”áƒ¡",
                    month: "áƒ—áƒ•áƒ”",
                    week: "áƒ™áƒ•áƒ˜áƒ áƒ",
                    day: "áƒ“áƒ¦áƒ”",
                    list: "áƒ“áƒ¦áƒ˜áƒ¡ áƒ¬áƒ”áƒ¡áƒ áƒ˜áƒ’áƒ˜",
                },
                weekText: "áƒ™áƒ•",
                allDayText: "áƒ›áƒ—áƒ”áƒšáƒ˜ áƒ“áƒ¦áƒ”",
                moreLinkText: function (e) {
                    return "+ áƒ™áƒ˜áƒ“áƒ”áƒ• " + e;
                },
                noEventsText:
                    "áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜ áƒáƒ  áƒáƒ áƒ˜áƒ¡",
            },
            {
                code: "kk",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "ÐÐ»Ð´Ñ‹Ò£Ò“Ñ‹",
                    next: "ÐšÐµÐ»ÐµÑÑ–",
                    today: "Ð‘Ò¯Ð³Ñ–Ð½",
                    month: "ÐÐ¹",
                    week: "ÐÐ¿Ñ‚Ð°",
                    day: "ÐšÒ¯Ð½",
                    list: "ÐšÒ¯Ð½ Ñ‚Ó™Ñ€Ñ‚Ñ–Ð±Ñ–",
                },
                weekText: "ÐÐµ",
                allDayText: "ÐšÒ¯Ð½Ñ– Ð±Ð¾Ð¹Ñ‹",
                moreLinkText: function (e) {
                    return "+ Ñ‚Ð°Ò“Ñ‹ " + e;
                },
                noEventsText: "ÐšÓ©Ñ€ÑÐµÑ‚Ñƒ Ò¯ÑˆÑ–Ð½ Ð¾Ò›Ð¸Ò“Ð°Ð»Ð°Ñ€ Ð¶Ð¾Ò›",
            },
            {
                code: "km",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "áž˜áž»áž“",
                    next: "áž”áž“áŸ’áž‘áž¶áž”áŸ‹",
                    today: "ážáŸ’áž„áŸƒáž“áŸáŸ‡",
                    year: "áž†áŸ’áž“áž¶áŸ†",
                    month: "ážáŸ‚",
                    week: "ážŸáž”áŸ’ážáž¶áž áŸ",
                    day: "ážáŸ’áž„áŸƒ",
                    list: "áž”áž‰áŸ’áž‡áž¸",
                },
                weekText: "ážŸáž”áŸ’ážáž¶áž áŸ",
                allDayText: "áž–áŸáž‰áž˜áž½áž™ážáŸ’áž„áŸƒ",
                moreLinkText: "áž…áŸ’ážšáž¾áž“áž‘áŸ€áž",
                noEventsText:
                    "áž‚áŸ’áž˜áž¶áž“áž–áŸ’ážšáž¹ážáŸ’ážáž·áž€áž¶ážšážŽáŸážáŸ’ážšáž¼ážœáž”áž„áŸ’áž áž¶áž‰",
            },
            {
                code: "ko",
                buttonText: {
                    prev: "ì´ì „ë‹¬",
                    next: "ë‹¤ìŒë‹¬",
                    today: "ì˜¤ëŠ˜",
                    month: "ì›”",
                    week: "ì£¼",
                    day: "ì¼",
                    list: "ì¼ì •ëª©ë¡",
                },
                weekText: "ì£¼",
                allDayText: "ì¢…ì¼",
                moreLinkText: "ê°œ",
                noEventsText: "ì¼ì •ì´ ì—†ìŠµë‹ˆë‹¤",
            },
            {
                code: "ku",
                week: { dow: 6, doy: 12 },
                direction: "rtl",
                buttonText: {
                    prev: "Ù¾ÛŽØ´ØªØ±",
                    next: "Ø¯ÙˆØ§ØªØ±",
                    today: "Ø¦Û•Ù…Ú•Ùˆ",
                    month: "Ù…Ø§Ù†Ú¯",
                    week: "Ù‡Û•ÙØªÛ•",
                    day: "Ú•Û†Ú˜",
                    list: "Ø¨Û•Ø±Ù†Ø§Ù…Û•",
                },
                weekText: "Ù‡Û•ÙØªÛ•",
                allDayText: "Ù‡Û•Ù…ÙˆÙˆ Ú•Û†Ú˜Û•Ú©Û•",
                moreLinkText: "Ø²ÛŒØ§ØªØ±",
                noEventsText: "Ù‡ÛŒÚ† Ú•ÙˆÙˆØ¯Ø§ÙˆÛŽÙƒ Ù†ÛŒÛ•",
            },
            {
                code: "lb",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ZrÃ©ck",
                    next: "Weider",
                    today: "Haut",
                    month: "Mount",
                    week: "Woch",
                    day: "Dag",
                    list: "Terminiwwersiicht",
                },
                weekText: "W",
                allDayText: "Ganzen Dag",
                moreLinkText: "mÃ©i",
                noEventsText: "Nee Evenementer ze affichÃ©ieren",
            },
            {
                code: "lt",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Atgal",
                    next: "Pirmyn",
                    today: "Å iandien",
                    month: "MÄ—nuo",
                    week: "SavaitÄ—",
                    day: "Diena",
                    list: "DarbotvarkÄ—",
                },
                weekText: "SAV",
                allDayText: "VisÄ… dienÄ…",
                moreLinkText: "daugiau",
                noEventsText: "NÄ—ra Ä¯vykiÅ³ rodyti",
            },
            {
                code: "lv",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Iepr.",
                    next: "NÄk.",
                    today: "Å odien",
                    month: "MÄ“nesis",
                    week: "NedÄ“Ä¼a",
                    day: "Diena",
                    list: "Dienas kÄrtÄ«ba",
                },
                weekText: "Ned.",
                allDayText: "Visu dienu",
                moreLinkText: function (e) {
                    return "+vÄ“l " + e;
                },
                noEventsText: "Nav notikumu",
            },
            {
                code: "mk",
                buttonText: {
                    prev: "Ð¿Ñ€ÐµÑ‚Ñ…Ð¾Ð´Ð½Ð¾",
                    next: "ÑÐ»ÐµÐ´Ð½Ð¾",
                    today: "Ð”ÐµÐ½ÐµÑ",
                    month: "ÐœÐµÑÐµÑ†",
                    week: "ÐÐµÐ´ÐµÐ»Ð°",
                    day: "Ð”ÐµÐ½",
                    list: "Ð“Ñ€Ð°Ñ„Ð¸Ðº",
                },
                weekText: "Ð¡ÐµÐ´",
                allDayText: "Ð¦ÐµÐ» Ð´ÐµÐ½",
                moreLinkText: function (e) {
                    return "+Ð¿Ð¾Ð²ÐµÑœÐµ " + e;
                },
                noEventsText:
                    "ÐÐµÐ¼Ð° Ð½Ð°ÑÑ‚Ð°Ð½Ð¸ Ð·Ð° Ð¿Ñ€Ð¸ÐºÐ°Ð¶ÑƒÐ²Ð°ÑšÐµ",
            },
            {
                code: "ms",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "Sebelum",
                    next: "Selepas",
                    today: "hari ini",
                    month: "Bulan",
                    week: "Minggu",
                    day: "Hari",
                    list: "Agenda",
                },
                weekText: "Mg",
                allDayText: "Sepanjang hari",
                moreLinkText: function (e) {
                    return "masih ada " + e + " acara";
                },
                noEventsText: "Tiada peristiwa untuk dipaparkan",
            },
            {
                code: "nb",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Forrige",
                    next: "Neste",
                    today: "I dag",
                    month: "MÃ¥ned",
                    week: "Uke",
                    day: "Dag",
                    list: "Agenda",
                },
                weekText: "Uke",
                weekTextLong: "Uke",
                allDayText: "Hele dagen",
                moreLinkText: "til",
                noEventsText: "Ingen hendelser Ã¥ vise",
                buttonHints: {
                    prev: "Forrige $0",
                    next: "Neste $0",
                    today: "NÃ¥vÃ¦rende $0",
                },
                viewHint: "$0 visning",
                navLinkHint: "GÃ¥ til $0",
                moreLinkHint: function (e) {
                    return "Vis "
                        .concat(e, " flere hendelse")
                        .concat(1 === e ? "" : "r");
                },
            },
            {
                code: "ne",
                week: { dow: 7, doy: 1 },
                buttonText: {
                    prev: "à¤…à¤˜à¤¿à¤²à¥à¤²à¥‹",
                    next: "à¤…à¤°à¥à¤•à¥‹",
                    today: "à¤†à¤œ",
                    month: "à¤®à¤¹à¤¿à¤¨à¤¾",
                    week: "à¤¹à¤ªà¥à¤¤à¤¾",
                    day: "à¤¦à¤¿à¤¨",
                    list: "à¤¸à¥‚à¤šà¥€",
                },
                weekText: "à¤¹à¤ªà¥à¤¤à¤¾",
                allDayText: "à¤¦à¤¿à¤¨à¤­à¤°à¤¿",
                moreLinkText: "à¤¥à¤ª à¤²à¤¿à¤‚à¤•",
                noEventsText:
                    "à¤¦à¥‡à¤–à¤¾à¤‰à¤¨à¤•à¥‹ à¤²à¤¾à¤—à¤¿ à¤•à¥à¤¨à¥ˆ à¤˜à¤Ÿà¤¨à¤¾à¤¹à¤°à¥‚ à¤›à¥ˆà¤¨à¤¨à¥",
            },
            {
                code: "nl",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Vorige",
                    next: "Volgende",
                    today: "Vandaag",
                    year: "Jaar",
                    month: "Maand",
                    week: "Week",
                    day: "Dag",
                    list: "Agenda",
                },
                allDayText: "Hele dag",
                moreLinkText: "extra",
                noEventsText: "Geen evenementen om te laten zien",
            },
            {
                code: "nn",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "FÃ¸rre",
                    next: "Neste",
                    today: "I dag",
                    month: "MÃ¥nad",
                    week: "Veke",
                    day: "Dag",
                    list: "Agenda",
                },
                weekText: "Veke",
                allDayText: "Heile dagen",
                moreLinkText: "til",
                noEventsText: "Ingen hendelser Ã¥ vise",
            },
            {
                code: "pl",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Poprzedni",
                    next: "NastÄ™pny",
                    today: "DziÅ›",
                    month: "MiesiÄ…c",
                    week: "TydzieÅ„",
                    day: "DzieÅ„",
                    list: "Plan dnia",
                },
                weekText: "Tydz",
                allDayText: "CaÅ‚y dzieÅ„",
                moreLinkText: "wiÄ™cej",
                noEventsText: "Brak wydarzeÅ„ do wyÅ›wietlenia",
            },
            {
                code: "pt-br",
                buttonText: {
                    prev: "Anterior",
                    next: "PrÃ³ximo",
                    today: "Hoje",
                    month: "MÃªs",
                    week: "Semana",
                    day: "Dia",
                    list: "Lista",
                },
                weekText: "Sm",
                allDayText: "dia inteiro",
                moreLinkText: function (e) {
                    return "mais +" + e;
                },
                noEventsText: "NÃ£o hÃ¡ eventos para mostrar",
            },
            {
                code: "pt",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "Anterior",
                    next: "Seguinte",
                    today: "Hoje",
                    month: "MÃªs",
                    week: "Semana",
                    day: "Dia",
                    list: "Agenda",
                },
                weekText: "Sem",
                allDayText: "Todo o dia",
                moreLinkText: "mais",
                noEventsText: "NÃ£o hÃ¡ eventos para mostrar",
            },
            {
                code: "ro",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "precedentÄƒ",
                    next: "urmÄƒtoare",
                    today: "Azi",
                    month: "LunÄƒ",
                    week: "SÄƒptÄƒmÃ¢nÄƒ",
                    day: "Zi",
                    list: "AgendÄƒ",
                },
                weekText: "SÄƒpt",
                allDayText: "ToatÄƒ ziua",
                moreLinkText: function (e) {
                    return "+alte " + e;
                },
                noEventsText: "Nu existÄƒ evenimente de afiÈ™at",
            },
            {
                code: "ru",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ÐŸÑ€ÐµÐ´",
                    next: "Ð¡Ð»ÐµÐ´",
                    today: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
                    month: "ÐœÐµÑÑÑ†",
                    week: "ÐÐµÐ´ÐµÐ»Ñ",
                    day: "Ð”ÐµÐ½ÑŒ",
                    list: "ÐŸÐ¾Ð²ÐµÑÑ‚ÐºÐ° Ð´Ð½Ñ",
                },
                weekText: "ÐÐµÐ´",
                allDayText: "Ð’ÐµÑÑŒ Ð´ÐµÐ½ÑŒ",
                moreLinkText: function (e) {
                    return "+ ÐµÑ‰Ñ‘ " + e;
                },
                noEventsText: "ÐÐµÑ‚ ÑÐ¾Ð±Ñ‹Ñ‚Ð¸Ð¹ Ð´Ð»Ñ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ñ",
            },
            {
                code: "si-lk",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "à¶´à·™à¶»",
                    next: "à¶´à·ƒà·”",
                    today: "à¶…à¶¯",
                    month: "à¶¸à·à·ƒà¶º",
                    week: "à·ƒà¶­à·’à¶º",
                    day: "à¶¯à·€à·ƒ",
                    list: "à¶½à·à¶ºà·’à·ƒà·Šà¶­à·”à·€",
                },
                weekText: "à·ƒà¶­à·’",
                allDayText: "à·ƒà·’à¶ºà¶½à·”",
                moreLinkText: "à¶­à·€à¶­à·Š",
                noEventsText: "à¶¸à·”à¶šà·”à¶­à·Š à¶±à·à¶­",
            },
            {
                code: "sk",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "PredchÃ¡dzajÃºci",
                    next: "NasledujÃºci",
                    today: "Dnes",
                    month: "Mesiac",
                    week: "TÃ½Å¾deÅˆ",
                    day: "DeÅˆ",
                    list: "Rozvrh",
                },
                weekText: "Ty",
                allDayText: "CelÃ½ deÅˆ",
                moreLinkText: function (e) {
                    return "+ÄalÅ¡ie: " + e;
                },
                noEventsText: "Å½iadne akcie na zobrazenie",
            },
            {
                code: "sl",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "PrejÅ¡nji",
                    next: "Naslednji",
                    today: "Trenutni",
                    month: "Mesec",
                    week: "Teden",
                    day: "Dan",
                    list: "Dnevni red",
                },
                weekText: "Teden",
                allDayText: "Ves dan",
                moreLinkText: "veÄ",
                noEventsText: "Ni dogodkov za prikaz",
            },
            {
                code: "sm",
                buttonText: {
                    prev: "Talu ai",
                    next: "Mulimuli atu",
                    today: "Aso nei",
                    month: "Masina",
                    week: "Vaiaso",
                    day: "Aso",
                    list: "Faasologa",
                },
                weekText: "Vaiaso",
                allDayText: "Aso atoa",
                moreLinkText: "sili atu",
                noEventsText: "Leai ni mea na tutupu",
            },
            {
                code: "sq",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "mbrapa",
                    next: "PÃ«rpara",
                    today: "sot",
                    month: "Muaj",
                    week: "JavÃ«",
                    day: "DitÃ«",
                    list: "ListÃ«",
                },
                weekText: "Ja",
                allDayText: "GjithÃ« ditÃ«n",
                moreLinkText: function (e) {
                    return "+mÃ« tepÃ«r " + e;
                },
                noEventsText: "Nuk ka evente pÃ«r tÃ« shfaqur",
            },
            {
                code: "sr-cyrl",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "ÐŸÑ€ÐµÑ‚Ñ…Ð¾Ð´Ð½Ð°",
                    next: "ÑÐ»ÐµÐ´ÐµÑ›Ð¸",
                    today: "Ð”Ð°Ð½Ð°Ñ",
                    month: "ÐœÐµÑÐµÑ†",
                    week: "ÐÐµÐ´ÐµÑ™Ð°",
                    day: "Ð”Ð°Ð½",
                    list: "ÐŸÐ»Ð°Ð½ÐµÑ€",
                },
                weekText: "Ð¡ÐµÐ´",
                allDayText: "Ð¦ÐµÐ¾ Ð´Ð°Ð½",
                moreLinkText: function (e) {
                    return "+ Ñ˜Ð¾Ñˆ " + e;
                },
                noEventsText: "ÐÐµÐ¼Ð° Ð´Ð¾Ð³Ð°Ñ’Ð°Ñ˜Ð° Ð·Ð° Ð¿Ñ€Ð¸ÐºÐ°Ð·",
            },
            {
                code: "sr",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "Prethodna",
                    next: "SledecÌi",
                    today: "Danas",
                    month: "MÐµsÐµc",
                    week: "NÐµdÐµlja",
                    day: "Dan",
                    list: "PlanÐµr",
                },
                weekText: "Sed",
                allDayText: "CÐµo dan",
                moreLinkText: function (e) {
                    return "+ joÅ¡ " + e;
                },
                noEventsText: "NÐµma dogaÄ‘aja za prikaz",
            },
            {
                code: "sv",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "FÃ¶rra",
                    next: "NÃ¤sta",
                    today: "Idag",
                    month: "MÃ¥nad",
                    week: "Vecka",
                    day: "Dag",
                    list: "Program",
                },
                buttonHints: {
                    prev: function (e) {
                        return "FÃ¶regÃ¥ende ".concat(e.toLocaleLowerCase());
                    },
                    next: function (e) {
                        return "NÃ¤sta ".concat(e.toLocaleLowerCase());
                    },
                    today: function (e) {
                        return (
                            ("Program" === e ? "Detta" : "Denna") +
                            " " +
                            e.toLocaleLowerCase()
                        );
                    },
                },
                viewHint: "$0 vy",
                navLinkHint: "GÃ¥ till $0",
                moreLinkHint: function (e) {
                    return "Visa ytterligare "
                        .concat(e, " hÃ¤ndelse")
                        .concat(1 === e ? "" : "r");
                },
                weekText: "v.",
                weekTextLong: "Vecka",
                allDayText: "Heldag",
                moreLinkText: "till",
                noEventsText: "Inga hÃ¤ndelser att visa",
                closeHint: "StÃ¤ng",
                timeHint: "Klockan",
                eventHint: "HÃ¤ndelse",
            },
            {
                code: "ta-in",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "à®®à¯à®¨à¯à®¤à¯ˆà®¯",
                    next: "à®…à®Ÿà¯à®¤à¯à®¤à®¤à¯",
                    today: "à®‡à®©à¯à®±à¯",
                    month: "à®®à®¾à®¤à®®à¯",
                    week: "à®µà®¾à®°à®®à¯",
                    day: "à®¨à®¾à®³à¯",
                    list: "à®¤à®¿à®©à®šà®°à®¿ à®…à®Ÿà¯à®Ÿà®µà®£à¯ˆ",
                },
                weekText: "à®µà®¾à®°à®®à¯",
                allDayText: "à®¨à®¾à®³à¯ à®®à¯à®´à¯à®µà®¤à¯à®®à¯",
                moreLinkText: function (e) {
                    return "+ à®®à¯‡à®²à¯à®®à¯ " + e;
                },
                noEventsText:
                    "à®•à®¾à®£à¯à®ªà®¿à®•à¯à®• à®¨à®¿à®•à®´à¯à®µà¯à®•à®³à¯ à®‡à®²à¯à®²à¯ˆ",
            },
            {
                code: "th",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "à¸à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²",
                    next: "à¸–à¸±à¸”à¹„à¸›",
                    prevYear: "à¸›à¸µà¸à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²",
                    nextYear: "à¸›à¸µà¸–à¸±à¸”à¹„à¸›",
                    year: "à¸›à¸µ",
                    today: "à¸§à¸±à¸™à¸™à¸µà¹‰",
                    month: "à¹€à¸”à¸·à¸­à¸™",
                    week: "à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
                    day: "à¸§à¸±à¸™",
                    list: "à¸à¸³à¸«à¸™à¸”à¸à¸²à¸£",
                },
                weekText: "à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
                allDayText: "à¸•à¸¥à¸­à¸”à¸§à¸±à¸™",
                moreLinkText: "à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸•à¸´à¸¡",
                noEventsText:
                    "à¹„à¸¡à¹ˆà¸¡à¸µà¸à¸´à¸ˆà¸à¸£à¸£à¸¡à¸—à¸µà¹ˆà¸ˆà¸°à¹à¸ªà¸”à¸‡",
            },
            {
                code: "tr",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "geri",
                    next: "ileri",
                    today: "bugÃ¼n",
                    month: "Ay",
                    week: "Hafta",
                    day: "GÃ¼n",
                    list: "Ajanda",
                },
                weekText: "Hf",
                allDayText: "TÃ¼m gÃ¼n",
                moreLinkText: "daha fazla",
                noEventsText: "GÃ¶sterilecek etkinlik yok",
            },
            {
                code: "ug",
                buttonText: {
                    month: "Ø¦Ø§ÙŠ",
                    week: "Ú¾Û•Ù¾ØªÛ•",
                    day: "ÙƒÛˆÙ†",
                    list: "ÙƒÛˆÙ†ØªÛ•Ø±ØªÙ‰Ù¾",
                },
                allDayText: "Ù¾ÛˆØªÛˆÙ† ÙƒÛˆÙ†",
            },
            {
                code: "uk",
                week: { dow: 1, doy: 7 },
                buttonText: {
                    prev: "ÐŸÐ¾Ð¿ÐµÑ€ÐµÐ´Ð½Ñ–Ð¹",
                    next: "Ð´Ð°Ð»Ñ–",
                    today: "Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ–",
                    month: "ÐœÑ–ÑÑÑ†ÑŒ",
                    week: "Ð¢Ð¸Ð¶Ð´ÐµÐ½ÑŒ",
                    day: "Ð”ÐµÐ½ÑŒ",
                    list: "ÐŸÐ¾Ñ€ÑÐ´Ð¾Ðº Ð´ÐµÐ½Ð½Ð¸Ð¹",
                },
                weekText: "Ð¢Ð¸Ð¶",
                allDayText: "Ð£Ð²ÐµÑÑŒ Ð´ÐµÐ½ÑŒ",
                moreLinkText: function (e) {
                    return "+Ñ‰Ðµ " + e + "...";
                },
                noEventsText:
                    "ÐÐµÐ¼Ð°Ñ” Ð¿Ð¾Ð´Ñ–Ð¹ Ð´Ð»Ñ Ð²Ñ–Ð´Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð½Ñ",
            },
            {
                code: "uz",
                buttonText: {
                    month: "Oy",
                    week: "Xafta",
                    day: "Kun",
                    list: "Kun tartibi",
                },
                allDayText: "Kun bo'yi",
                moreLinkText: function (e) {
                    return "+ yana " + e;
                },
                noEventsText: "Ko'rsatish uchun voqealar yo'q",
            },
            {
                code: "vi",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "TrÆ°á»›c",
                    next: "Tiáº¿p",
                    today: "HÃ´m nay",
                    month: "ThÃ¡ng",
                    week: "TuÃ¢Ì€n",
                    day: "NgÃ y",
                    list: "Lá»‹ch biá»ƒu",
                },
                weekText: "Tu",
                allDayText: "Cáº£ ngÃ y",
                moreLinkText: function (e) {
                    return "+ thÃªm " + e;
                },
                noEventsText: "KhÃ´ng cÃ³ sá»± kiá»‡n Ä‘á»ƒ hiá»ƒn thá»‹",
            },
            {
                code: "zh-cn",
                week: { dow: 1, doy: 4 },
                buttonText: {
                    prev: "ä¸Šæœˆ",
                    next: "ä¸‹æœˆ",
                    today: "ä»Šå¤©",
                    month: "æœˆ",
                    week: "å‘¨",
                    day: "æ—¥",
                    list: "æ—¥ç¨‹",
                },
                weekText: "å‘¨",
                allDayText: "å…¨å¤©",
                moreLinkText: function (e) {
                    return "å¦å¤– " + e + " ä¸ª";
                },
                noEventsText: "æ²¡æœ‰äº‹ä»¶æ˜¾ç¤º",
            },
            {
                code: "zh-tw",
                buttonText: {
                    prev: "ä¸Šæœˆ",
                    next: "ä¸‹æœˆ",
                    today: "ä»Šå¤©",
                    month: "æœˆ",
                    week: "é€±",
                    day: "å¤©",
                    list: "æ´»å‹•åˆ—è¡¨",
                },
                weekText: "å‘¨",
                allDayText: "æ•´å¤©",
                moreLinkText: "é¡¯ç¤ºæ›´å¤š",
                noEventsText: "æ²¡æœ‰ä»»ä½•æ´»å‹•",
            },
        ];
    })()
);