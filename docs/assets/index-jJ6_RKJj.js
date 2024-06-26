(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Na = { exports: {} },
  Ei = {},
  ja = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hr = Symbol.for("react.element"),
  rd = Symbol.for("react.portal"),
  id = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  sd = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  ad = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  cd = Symbol.for("react.suspense"),
  dd = Symbol.for("react.memo"),
  fd = Symbol.for("react.lazy"),
  ao = Symbol.iterator;
function pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ao && e[ao]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _a = Object.assign,
  La = {};
function kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = La),
    (this.updater = n || Pa);
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ma() {}
Ma.prototype = kn.prototype;
function ps(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = La),
    (this.updater = n || Pa);
}
var hs = (ps.prototype = new Ma());
hs.constructor = ps;
_a(hs, kn.prototype);
hs.isPureReactComponent = !0;
var uo = Array.isArray,
  za = Object.prototype.hasOwnProperty,
  ms = { current: null },
  Oa = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      za.call(t, r) && !Oa.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var o = Array(a), u = 0; u < a; u++) o[u] = arguments[u + 2];
    i.children = o;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: hr,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: ms.current,
  };
}
function hd(e, t) {
  return {
    $$typeof: hr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function md(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var co = /\/+/g;
function Bi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? md("" + e.key)
    : t.toString(36);
}
function Vr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (l) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case hr:
          case rd:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Bi(s, 0) : r),
      uo(i)
        ? ((n = ""),
          e != null && (n = e.replace(co, "$&/") + "/"),
          Vr(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (gs(i) &&
            (i = hd(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(co, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), uo(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var o = r + Bi(l, a);
      s += Vr(l, t, n, o, i);
    }
  else if (((o = pd(e)), typeof o == "function"))
    for (e = o.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (o = r + Bi(l, a++)), (s += Vr(l, t, n, o, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function Cr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Vr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function gd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  Hr = { transition: null },
  vd = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: Hr,
    ReactCurrentOwner: ms,
  };
D.Children = {
  map: Cr,
  forEach: function (e, t, n) {
    Cr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Cr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Cr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
D.Component = kn;
D.Fragment = id;
D.Profiler = sd;
D.PureComponent = ps;
D.StrictMode = ld;
D.Suspense = cd;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = _a({}, e.props),
    i = e.key,
    l = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (s = ms.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (o in t)
      za.call(t, o) &&
        !Oa.hasOwnProperty(o) &&
        (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
  }
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    a = Array(o);
    for (var u = 0; u < o; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: hr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: ad,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = $a;
D.createFactory = function (e) {
  var t = $a.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
D.isValidElement = gs;
D.lazy = function (e) {
  return { $$typeof: fd, _payload: { _status: -1, _result: e }, _init: gd };
};
D.memo = function (e, t) {
  return { $$typeof: dd, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Hr.transition;
  Hr.transition = {};
  try {
    e();
  } finally {
    Hr.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
D.useContext = function (e) {
  return he.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
D.useId = function () {
  return he.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return he.current.useRef(e);
};
D.useState = function (e) {
  return he.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return he.current.useTransition();
};
D.version = "18.2.0";
ja.exports = D;
var A = ja.exports;
const Z = nd(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd = A,
  Sd = Symbol.for("react.element"),
  xd = Symbol.for("react.fragment"),
  wd = Object.prototype.hasOwnProperty,
  Cd = yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r,
    i = {},
    l = null,
    s = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) wd.call(t, r) && !Ed.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Sd,
    type: e,
    key: l,
    ref: s,
    props: i,
    _owner: Cd.current,
  };
}
Ei.Fragment = xd;
Ei.jsx = Ia;
Ei.jsxs = Ia;
Na.exports = Ei;
var c = Na.exports,
  vl = {},
  Da = { exports: {} },
  je = {},
  Ra = { exports: {} },
  Aa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, z) {
    var $ = P.length;
    P.push(z);
    e: for (; 0 < $; ) {
      var G = ($ - 1) >>> 1,
        K = P[G];
      if (0 < i(K, z)) (P[G] = z), (P[$] = K), ($ = G);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var z = P[0],
      $ = P.pop();
    if ($ !== z) {
      P[0] = $;
      e: for (var G = 0, K = P.length, xr = K >>> 1; G < xr; ) {
        var Mt = 2 * (G + 1) - 1,
          Fi = P[Mt],
          zt = Mt + 1,
          wr = P[zt];
        if (0 > i(Fi, $))
          zt < K && 0 > i(wr, Fi)
            ? ((P[G] = wr), (P[zt] = $), (G = zt))
            : ((P[G] = Fi), (P[Mt] = $), (G = Mt));
        else if (zt < K && 0 > i(wr, $)) (P[G] = wr), (P[zt] = $), (G = zt);
        else break e;
      }
    }
    return z;
  }
  function i(P, z) {
    var $ = P.sortIndex - z.sortIndex;
    return $ !== 0 ? $ : P.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var o = [],
    u = [],
    d = 1,
    m = null,
    h = 3,
    y = !1,
    S = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(P) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= P)
        r(u), (z.sortIndex = z.expirationTime), t(o, z);
      else break;
      z = n(u);
    }
  }
  function w(P) {
    if (((v = !1), g(P), !S))
      if (n(o) !== null) (S = !0), _t(C);
      else {
        var z = n(u);
        z !== null && Lt(w, z.startTime - P);
      }
  }
  function C(P, z) {
    (S = !1), v && ((v = !1), p(k), (k = -1)), (y = !0);
    var $ = h;
    try {
      for (
        g(z), m = n(o);
        m !== null && (!(m.expirationTime > z) || (P && !M()));

      ) {
        var G = m.callback;
        if (typeof G == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var K = G(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof K == "function" ? (m.callback = K) : m === n(o) && r(o),
            g(z);
        } else r(o);
        m = n(o);
      }
      if (m !== null) var xr = !0;
      else {
        var Mt = n(u);
        Mt !== null && Lt(w, Mt.startTime - z), (xr = !1);
      }
      return xr;
    } finally {
      (m = null), (h = $), (y = !1);
    }
  }
  var N = !1,
    j = null,
    k = -1,
    I = 5,
    T = -1;
  function M() {
    return !(e.unstable_now() - T < I);
  }
  function O() {
    if (j !== null) {
      var P = e.unstable_now();
      T = P;
      var z = !0;
      try {
        z = j(!0, P);
      } finally {
        z ? B() : ((N = !1), (j = null));
      }
    } else N = !1;
  }
  var B;
  if (typeof f == "function")
    B = function () {
      f(O);
    };
  else if (typeof MessageChannel < "u") {
    var Qe = new MessageChannel(),
      Pt = Qe.port2;
    (Qe.port1.onmessage = O),
      (B = function () {
        Pt.postMessage(null);
      });
  } else
    B = function () {
      x(O, 0);
    };
  function _t(P) {
    (j = P), N || ((N = !0), B());
  }
  function Lt(P, z) {
    k = x(function () {
      P(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), _t(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(o);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = h;
      }
      var $ = h;
      h = z;
      try {
        return P();
      } finally {
        h = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, z) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var $ = h;
      h = P;
      try {
        return z();
      } finally {
        h = $;
      }
    }),
    (e.unstable_scheduleCallback = function (P, z, $) {
      var G = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? G + $ : G))
          : ($ = G),
        P)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = $ + K),
        (P = {
          id: d++,
          callback: z,
          priorityLevel: P,
          startTime: $,
          expirationTime: K,
          sortIndex: -1,
        }),
        $ > G
          ? ((P.sortIndex = $),
            t(u, P),
            n(o) === null &&
              P === n(u) &&
              (v ? (p(k), (k = -1)) : (v = !0), Lt(w, $ - G)))
          : ((P.sortIndex = K), t(o, P), S || y || ((S = !0), _t(C))),
        P
      );
    }),
    (e.unstable_shouldYield = M),
    (e.unstable_wrapCallback = function (P) {
      var z = h;
      return function () {
        var $ = h;
        h = z;
        try {
          return P.apply(this, arguments);
        } finally {
          h = $;
        }
      };
    });
})(Aa);
Ra.exports = Aa;
var kd = Ra.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fa = A,
  Ne = kd;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ba = new Set(),
  qn = {};
function Yt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) Ba.add(t[e]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yl = Object.prototype.hasOwnProperty,
  Td =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fo = {},
  po = {};
function Nd(e) {
  return yl.call(po, e)
    ? !0
    : yl.call(fo, e)
      ? !1
      : Td.test(e)
        ? (po[e] = !0)
        : ((fo[e] = !0), !1);
}
function jd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pd(e, t, n, r) {
  if (t === null || typeof t > "u" || jd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function me(e, t, n, r, i, l, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = s);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vs = /[\-:]([a-z])/g;
function ys(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vs, ys);
    oe[t] = new me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(vs, ys);
    oe[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(vs, ys);
  oe[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ss(e, t, n, r) {
  var i = oe.hasOwnProperty(t) ? oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pd(t, n, i, r) && (n = null),
    r || i === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var it = Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Er = Symbol.for("react.element"),
  Zt = Symbol.for("react.portal"),
  Jt = Symbol.for("react.fragment"),
  xs = Symbol.for("react.strict_mode"),
  Sl = Symbol.for("react.profiler"),
  Va = Symbol.for("react.provider"),
  Ha = Symbol.for("react.context"),
  ws = Symbol.for("react.forward_ref"),
  xl = Symbol.for("react.suspense"),
  wl = Symbol.for("react.suspense_list"),
  Cs = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Wa = Symbol.for("react.offscreen"),
  ho = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ho && e[ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Vi;
function Dn(e) {
  if (Vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vi = (t && t[1]) || "";
    }
  return (
    `
` +
    Vi +
    e
  );
}
var Hi = !1;
function Wi(e, t) {
  if (!e || Hi) return "";
  Hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          s = i.length - 1,
          a = l.length - 1;
        1 <= s && 0 <= a && i[s] !== l[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== l[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== l[a])) {
                var o =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    o.includes("<anonymous>") &&
                    (o = o.replace("<anonymous>", e.displayName)),
                  o
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function _d(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wi(e.type, !1)), e;
    case 11:
      return (e = Wi(e.type.render, !1)), e;
    case 1:
      return (e = Wi(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jt:
      return "Fragment";
    case Zt:
      return "Portal";
    case Sl:
      return "Profiler";
    case xs:
      return "StrictMode";
    case xl:
      return "Suspense";
    case wl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ha:
        return (e.displayName || "Context") + ".Consumer";
      case Va:
        return (e._context.displayName || "Context") + ".Provider";
      case ws:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Cs:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function Ld(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cl(t);
    case 8:
      return t === xs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Et(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ua(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Md(e) {
  var t = Ua(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), l.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function kr(e) {
  e._valueTracker || (e._valueTracker = Md(e));
}
function Ga(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ua(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function El(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Et(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ba(e, t) {
  (t = t.checked), t != null && Ss(e, "checked", t, !1);
}
function kl(e, t) {
  ba(e, t);
  var n = Et(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Tl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Tl(e, t.type, Et(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function go(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Tl(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Et(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Qa(e, t) {
  var n = Et(t.value),
    r = Et(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function yo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function jl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Tr,
  Xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bn).forEach(function (e) {
  zd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ka(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = qa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Od = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Pl(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function _l(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ll = null;
function Es(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ml = null,
  fn = null,
  pn = null;
function So(e) {
  if ((e = vr(e))) {
    if (typeof Ml != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Pi(t)), Ml(e.stateNode, e.type, t));
  }
}
function Za(e) {
  fn ? (pn ? pn.push(e) : (pn = [e])) : (fn = e);
}
function Ja() {
  if (fn) {
    var e = fn,
      t = pn;
    if (((pn = fn = null), So(e), t)) for (e = 0; e < t.length; e++) So(t[e]);
  }
}
function eu(e, t) {
  return e(t);
}
function tu() {}
var Ui = !1;
function nu(e, t, n) {
  if (Ui) return e(t, n);
  Ui = !0;
  try {
    return eu(e, t, n);
  } finally {
    (Ui = !1), (fn !== null || pn !== null) && (tu(), Ja());
  }
}
function Zn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var zl = !1;
if (et)
  try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
      get: function () {
        zl = !0;
      },
    }),
      window.addEventListener("test", Pn, Pn),
      window.removeEventListener("test", Pn, Pn);
  } catch {
    zl = !1;
  }
function $d(e, t, n, r, i, l, s, a, o) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Vn = !1,
  ei = null,
  ti = !1,
  Ol = null,
  Id = {
    onError: function (e) {
      (Vn = !0), (ei = e);
    },
  };
function Dd(e, t, n, r, i, l, s, a, o) {
  (Vn = !1), (ei = null), $d.apply(Id, arguments);
}
function Rd(e, t, n, r, i, l, s, a, o) {
  if ((Dd.apply(this, arguments), Vn)) {
    if (Vn) {
      var u = ei;
      (Vn = !1), (ei = null);
    } else throw Error(E(198));
    ti || ((ti = !0), (Ol = u));
  }
}
function Xt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ru(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function xo(e) {
  if (Xt(e) !== e) throw Error(E(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return xo(i), e;
        if (l === r) return xo(i), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = l.child; a; ) {
          if (a === n) {
            (s = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function iu(e) {
  return (e = Ad(e)), e !== null ? lu(e) : null;
}
function lu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var su = Ne.unstable_scheduleCallback,
  wo = Ne.unstable_cancelCallback,
  Fd = Ne.unstable_shouldYield,
  Bd = Ne.unstable_requestPaint,
  q = Ne.unstable_now,
  Vd = Ne.unstable_getCurrentPriorityLevel,
  ks = Ne.unstable_ImmediatePriority,
  ou = Ne.unstable_UserBlockingPriority,
  ni = Ne.unstable_NormalPriority,
  Hd = Ne.unstable_LowPriority,
  au = Ne.unstable_IdlePriority,
  ki = null,
  Ge = null;
function Wd(e) {
  if (Ge && typeof Ge.onCommitFiberRoot == "function")
    try {
      Ge.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : bd,
  Ud = Math.log,
  Gd = Math.LN2;
function bd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ud(e) / Gd) | 0)) | 0;
}
var Nr = 64,
  jr = 4194304;
function An(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ri(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = An(a)) : ((l &= s), l !== 0 && (r = An(l)));
  } else (s = n & ~i), s !== 0 ? (r = An(s)) : l !== 0 && (r = An(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Qd(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var s = 31 - Fe(l),
      a = 1 << s,
      o = i[s];
    o === -1
      ? (!(a & n) || a & r) && (i[s] = Qd(a, t))
      : o <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function $l(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uu() {
  var e = Nr;
  return (Nr <<= 1), !(Nr & 4194240) && (Nr = 64), e;
}
function Gi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function Xd(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Fe(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Ts(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var F = 0;
function cu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var du,
  Ns,
  fu,
  pu,
  hu,
  Il = !1,
  Pr = [],
  mt = null,
  gt = null,
  vt = null,
  Jn = new Map(),
  er = new Map(),
  ut = [],
  qd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Co(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      Jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function _n(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = vr(t)), t !== null && Ns(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Kd(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (mt = _n(mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (gt = _n(gt, e, t, n, r, i)), !0;
    case "mouseover":
      return (vt = _n(vt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Jn.set(l, _n(Jn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), er.set(l, _n(er.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function mu(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ru(n)), t !== null)) {
          (e.blockedOn = t),
            hu(e.priority, function () {
              fu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Dl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ll = r), n.target.dispatchEvent(r), (Ll = null);
    } else return (t = vr(n)), t !== null && Ns(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Eo(e, t, n) {
  Wr(e) && n.delete(t);
}
function Zd() {
  (Il = !1),
    mt !== null && Wr(mt) && (mt = null),
    gt !== null && Wr(gt) && (gt = null),
    vt !== null && Wr(vt) && (vt = null),
    Jn.forEach(Eo),
    er.forEach(Eo);
}
function Ln(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Il ||
      ((Il = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Zd)));
}
function tr(e) {
  function t(i) {
    return Ln(i, e);
  }
  if (0 < Pr.length) {
    Ln(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Ln(mt, e),
      gt !== null && Ln(gt, e),
      vt !== null && Ln(vt, e),
      Jn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    mu(n), n.blockedOn === null && ut.shift();
}
var hn = it.ReactCurrentBatchConfig,
  ii = !0;
function Jd(e, t, n, r) {
  var i = F,
    l = hn.transition;
  hn.transition = null;
  try {
    (F = 1), js(e, t, n, r);
  } finally {
    (F = i), (hn.transition = l);
  }
}
function ef(e, t, n, r) {
  var i = F,
    l = hn.transition;
  hn.transition = null;
  try {
    (F = 4), js(e, t, n, r);
  } finally {
    (F = i), (hn.transition = l);
  }
}
function js(e, t, n, r) {
  if (ii) {
    var i = Dl(e, t, n, r);
    if (i === null) tl(e, t, r, li, n), Co(e, r);
    else if (Kd(i, e, t, n, r)) r.stopPropagation();
    else if ((Co(e, r), t & 4 && -1 < qd.indexOf(e))) {
      for (; i !== null; ) {
        var l = vr(i);
        if (
          (l !== null && du(l),
          (l = Dl(e, t, n, r)),
          l === null && tl(e, t, r, li, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else tl(e, t, r, null, n);
  }
}
var li = null;
function Dl(e, t, n, r) {
  if (((li = null), (e = Es(r)), (e = It(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ru(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (li = e), null;
}
function gu(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vd()) {
        case ks:
          return 1;
        case ou:
          return 4;
        case ni:
        case Hd:
          return 16;
        case au:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  Ps = null,
  Ur = null;
function vu() {
  if (Ur) return Ur;
  var e,
    t = Ps,
    n = t.length,
    r,
    i = "value" in dt ? dt.value : dt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
  return (Ur = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Gr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _r() {
  return !0;
}
function ko() {
  return !1;
}
function Pe(e) {
  function t(n, r, i, l, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? _r
        : ko),
      (this.isPropagationStopped = ko),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _r));
      },
      persist: function () {},
      isPersistent: _r,
    }),
    t
  );
}
var Tn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _s = Pe(Tn),
  gr = Y({}, Tn, { view: 0, detail: 0 }),
  tf = Pe(gr),
  bi,
  Qi,
  Mn,
  Ti = Y({}, gr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ls,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((bi = e.screenX - Mn.screenX), (Qi = e.screenY - Mn.screenY))
              : (Qi = bi = 0),
            (Mn = e)),
          bi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  To = Pe(Ti),
  nf = Y({}, Ti, { dataTransfer: 0 }),
  rf = Pe(nf),
  lf = Y({}, gr, { relatedTarget: 0 }),
  Yi = Pe(lf),
  sf = Y({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  of = Pe(sf),
  af = Y({}, Tn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uf = Pe(af),
  cf = Y({}, Tn, { data: 0 }),
  No = Pe(cf),
  df = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ff = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  pf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = pf[e]) ? !!t[e] : !1;
}
function Ls() {
  return hf;
}
var mf = Y({}, gr, {
    key: function (e) {
      if (e.key) {
        var t = df[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Gr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? ff[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ls,
    charCode: function (e) {
      return e.type === "keypress" ? Gr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Gr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  gf = Pe(mf),
  vf = Y({}, Ti, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jo = Pe(vf),
  yf = Y({}, gr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ls,
  }),
  Sf = Pe(yf),
  xf = Y({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  wf = Pe(xf),
  Cf = Y({}, Ti, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ef = Pe(Cf),
  kf = [9, 13, 27, 32],
  Ms = et && "CompositionEvent" in window,
  Hn = null;
et && "documentMode" in document && (Hn = document.documentMode);
var Tf = et && "TextEvent" in window && !Hn,
  yu = et && (!Ms || (Hn && 8 < Hn && 11 >= Hn)),
  Po = " ",
  _o = !1;
function Su(e, t) {
  switch (e) {
    case "keyup":
      return kf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function Nf(e, t) {
  switch (e) {
    case "compositionend":
      return xu(t);
    case "keypress":
      return t.which !== 32 ? null : ((_o = !0), Po);
    case "textInput":
      return (e = t.data), e === Po && _o ? null : e;
    default:
      return null;
  }
}
function jf(e, t) {
  if (en)
    return e === "compositionend" || (!Ms && Su(e, t))
      ? ((e = vu()), (Ur = Ps = dt = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Lo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pf[e.type] : t === "textarea";
}
function wu(e, t, n, r) {
  Za(r),
    (t = si(t, "onChange")),
    0 < t.length &&
      ((n = new _s("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wn = null,
  nr = null;
function _f(e) {
  zu(e, 0);
}
function Ni(e) {
  var t = rn(e);
  if (Ga(t)) return e;
}
function Lf(e, t) {
  if (e === "change") return t;
}
var Cu = !1;
if (et) {
  var Xi;
  if (et) {
    var qi = "oninput" in document;
    if (!qi) {
      var Mo = document.createElement("div");
      Mo.setAttribute("oninput", "return;"),
        (qi = typeof Mo.oninput == "function");
    }
    Xi = qi;
  } else Xi = !1;
  Cu = Xi && (!document.documentMode || 9 < document.documentMode);
}
function zo() {
  Wn && (Wn.detachEvent("onpropertychange", Eu), (nr = Wn = null));
}
function Eu(e) {
  if (e.propertyName === "value" && Ni(nr)) {
    var t = [];
    wu(t, nr, e, Es(e)), nu(_f, t);
  }
}
function Mf(e, t, n) {
  e === "focusin"
    ? (zo(), (Wn = t), (nr = n), Wn.attachEvent("onpropertychange", Eu))
    : e === "focusout" && zo();
}
function zf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni(nr);
}
function Of(e, t) {
  if (e === "click") return Ni(t);
}
function $f(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function If(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == "function" ? Object.is : If;
function rr(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!yl.call(t, i) || !Ve(e[i], t[i])) return !1;
  }
  return !0;
}
function Oo(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $o(e, t) {
  var n = Oo(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Oo(n);
  }
}
function ku(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? ku(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Tu() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function zs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Df(e) {
  var t = Tu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ku(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zs(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = $o(n, l));
        var s = $o(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rf = et && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Rl = null,
  Un = null,
  Al = !1;
function Io(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Al ||
    tn == null ||
    tn !== Jr(r) ||
    ((r = tn),
    "selectionStart" in r && zs(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && rr(Un, r)) ||
      ((Un = r),
      (r = si(Rl, "onSelect")),
      0 < r.length &&
        ((t = new _s("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  Ki = {},
  Nu = {};
et &&
  ((Nu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function ji(e) {
  if (Ki[e]) return Ki[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return (Ki[e] = t[n]);
  return e;
}
var ju = ji("animationend"),
  Pu = ji("animationiteration"),
  _u = ji("animationstart"),
  Lu = ji("transitionend"),
  Mu = new Map(),
  Do =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Tt(e, t) {
  Mu.set(e, t), Yt(t, [e]);
}
for (var Zi = 0; Zi < Do.length; Zi++) {
  var Ji = Do[Zi],
    Af = Ji.toLowerCase(),
    Ff = Ji[0].toUpperCase() + Ji.slice(1);
  Tt(Af, "on" + Ff);
}
Tt(ju, "onAnimationEnd");
Tt(Pu, "onAnimationIteration");
Tt(_u, "onAnimationStart");
Tt("dblclick", "onDoubleClick");
Tt("focusin", "onFocus");
Tt("focusout", "onBlur");
Tt(Lu, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function Ro(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Rd(r, t, void 0, e), (e.currentTarget = null);
}
function zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            o = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
          Ro(i, a, u), (l = o);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (o = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            o !== l && i.isPropagationStopped())
          )
            break e;
          Ro(i, a, u), (l = o);
        }
    }
  }
  if (ti) throw ((e = Ol), (ti = !1), (Ol = null), e);
}
function H(e, t) {
  var n = t[Wl];
  n === void 0 && (n = t[Wl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ou(t, e, 2, !1), n.add(r));
}
function el(e, t, n) {
  var r = 0;
  t && (r |= 4), Ou(n, e, r, t);
}
var Mr = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Mr]) {
    (e[Mr] = !0),
      Ba.forEach(function (n) {
        n !== "selectionchange" && (Bf.has(n) || el(n, !1, e), el(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mr] || ((t[Mr] = !0), el("selectionchange", !1, t));
  }
}
function Ou(e, t, n, r) {
  switch (gu(t)) {
    case 1:
      var i = Jd;
      break;
    case 4:
      i = ef;
      break;
    default:
      i = js;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !zl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function tl(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var o = s.tag;
            if (
              (o === 3 || o === 4) &&
              ((o = s.stateNode.containerInfo),
              o === i || (o.nodeType === 8 && o.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = It(a)), s === null)) return;
          if (((o = s.tag), o === 5 || o === 6)) {
            r = l = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  nu(function () {
    var u = l,
      d = Es(n),
      m = [];
    e: {
      var h = Mu.get(e);
      if (h !== void 0) {
        var y = _s,
          S = e;
        switch (e) {
          case "keypress":
            if (Gr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = gf;
            break;
          case "focusin":
            (S = "focus"), (y = Yi);
            break;
          case "focusout":
            (S = "blur"), (y = Yi);
            break;
          case "beforeblur":
          case "afterblur":
            y = Yi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = To;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Sf;
            break;
          case ju:
          case Pu:
          case _u:
            y = of;
            break;
          case Lu:
            y = wf;
            break;
          case "scroll":
            y = tf;
            break;
          case "wheel":
            y = Ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = jo;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          p = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var f = u, g; f !== null; ) {
          g = f;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              p !== null && ((w = Zn(f, p)), w != null && v.push(lr(f, w, g)))),
            x)
          )
            break;
          f = f.return;
        }
        0 < v.length &&
          ((h = new y(h, S, null, n, d)), m.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ll &&
            (S = n.relatedTarget || n.fromElement) &&
            (It(S) || S[tt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          y
            ? ((S = n.relatedTarget || n.toElement),
              (y = u),
              (S = S ? It(S) : null),
              S !== null &&
                ((x = Xt(S)), S !== x || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = u)),
          y !== S)
        ) {
          if (
            ((v = To),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = jo),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (x = y == null ? h : rn(y)),
            (g = S == null ? h : rn(S)),
            (h = new v(w, f + "leave", y, n, d)),
            (h.target = x),
            (h.relatedTarget = g),
            (w = null),
            It(d) === u &&
              ((v = new v(p, f + "enter", S, n, d)),
              (v.target = g),
              (v.relatedTarget = x),
              (w = v)),
            (x = w),
            y && S)
          )
            t: {
              for (v = y, p = S, f = 0, g = v; g; g = qt(g)) f++;
              for (g = 0, w = p; w; w = qt(w)) g++;
              for (; 0 < f - g; ) (v = qt(v)), f--;
              for (; 0 < g - f; ) (p = qt(p)), g--;
              for (; f--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = qt(v)), (p = qt(p));
              }
              v = null;
            }
          else v = null;
          y !== null && Ao(m, h, y, v, !1),
            S !== null && x !== null && Ao(m, x, S, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? rn(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var C = Lf;
        else if (Lo(h))
          if (Cu) C = $f;
          else {
            C = zf;
            var N = Mf;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = Of);
        if (C && (C = C(e, u))) {
          wu(m, C, n, d);
          break e;
        }
        N && N(e, h, u),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            Tl(h, "number", h.value);
      }
      switch (((N = u ? rn(u) : window), e)) {
        case "focusin":
          (Lo(N) || N.contentEditable === "true") &&
            ((tn = N), (Rl = u), (Un = null));
          break;
        case "focusout":
          Un = Rl = tn = null;
          break;
        case "mousedown":
          Al = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Al = !1), Io(m, n, d);
          break;
        case "selectionchange":
          if (Rf) break;
        case "keydown":
        case "keyup":
          Io(m, n, d);
      }
      var j;
      if (Ms)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        en
          ? Su(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (yu &&
          n.locale !== "ko" &&
          (en || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && en && (j = vu())
            : ((dt = d),
              (Ps = "value" in dt ? dt.value : dt.textContent),
              (en = !0))),
        (N = si(u, k)),
        0 < N.length &&
          ((k = new No(k, e, null, n, d)),
          m.push({ event: k, listeners: N }),
          j ? (k.data = j) : ((j = xu(n)), j !== null && (k.data = j)))),
        (j = Tf ? Nf(e, n) : jf(e, n)) &&
          ((u = si(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new No("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: u }),
            (d.data = j)));
    }
    zu(m, t);
  });
}
function lr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function si(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Zn(e, n)),
      l != null && r.unshift(lr(e, l, i)),
      (l = Zn(e, t)),
      l != null && r.push(lr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ao(e, t, n, r, i) {
  for (var l = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      o = a.alternate,
      u = a.stateNode;
    if (o !== null && o === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((o = Zn(n, l)), o != null && s.unshift(lr(n, o, a)))
        : i || ((o = Zn(n, l)), o != null && s.push(lr(n, o, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Vf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Fo(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`,
    )
    .replace(Hf, "");
}
function zr(e, t, n) {
  if (((t = Fo(t)), Fo(e) !== t && n)) throw Error(E(425));
}
function oi() {}
var Fl = null,
  Bl = null;
function Vl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hl = typeof setTimeout == "function" ? setTimeout : void 0,
  Wf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bo = typeof Promise == "function" ? Promise : void 0,
  Uf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bo < "u"
        ? function (e) {
            return Bo.resolve(null).then(e).catch(Gf);
          }
        : Hl;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function nl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), tr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  tr(t);
}
function yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Vo(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + Nn,
  sr = "__reactProps$" + Nn,
  tt = "__reactContainer$" + Nn,
  Wl = "__reactEvents$" + Nn,
  bf = "__reactListeners$" + Nn,
  Qf = "__reactHandles$" + Nn;
function It(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Vo(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Vo(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Ue] || e[tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Pi(e) {
  return e[sr] || null;
}
var Ul = [],
  ln = -1;
function Nt(e) {
  return { current: e };
}
function W(e) {
  0 > ln || ((e.current = Ul[ln]), (Ul[ln] = null), ln--);
}
function V(e, t) {
  ln++, (Ul[ln] = e.current), (e.current = t);
}
var kt = {},
  de = Nt(kt),
  ye = Nt(!1),
  Vt = kt;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Se(e) {
  return (e = e.childContextTypes), e != null;
}
function ai() {
  W(ye), W(de);
}
function Ho(e, t, n) {
  if (de.current !== kt) throw Error(E(168));
  V(de, t), V(ye, n);
}
function $u(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, Ld(e) || "Unknown", i));
  return Y({}, n, r);
}
function ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Vt = de.current),
    V(de, e),
    V(ye, ye.current),
    !0
  );
}
function Wo(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = $u(e, t, Vt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(ye),
      W(de),
      V(de, e))
    : W(ye),
    V(ye, n);
}
var qe = null,
  _i = !1,
  rl = !1;
function Iu(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function Yf(e) {
  (_i = !0), Iu(e);
}
function jt() {
  if (!rl && qe !== null) {
    rl = !0;
    var e = 0,
      t = F;
    try {
      var n = qe;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (_i = !1);
    } catch (i) {
      throw (qe !== null && (qe = qe.slice(e + 1)), su(ks, jt), i);
    } finally {
      (F = t), (rl = !1);
    }
  }
  return null;
}
var sn = [],
  on = 0,
  ci = null,
  di = 0,
  _e = [],
  Le = 0,
  Ht = null,
  Ke = 1,
  Ze = "";
function Ot(e, t) {
  (sn[on++] = di), (sn[on++] = ci), (ci = e), (di = t);
}
function Du(e, t, n) {
  (_e[Le++] = Ke), (_e[Le++] = Ze), (_e[Le++] = Ht), (Ht = e);
  var r = Ke;
  e = Ze;
  var i = 32 - Fe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Fe(t) + i;
  if (30 < l) {
    var s = i - (i % 5);
    (l = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ke = (1 << (32 - Fe(t) + i)) | (n << i) | r),
      (Ze = l + e);
  } else (Ke = (1 << l) | (n << i) | r), (Ze = e);
}
function Os(e) {
  e.return !== null && (Ot(e, 1), Du(e, 1, 0));
}
function $s(e) {
  for (; e === ci; )
    (ci = sn[--on]), (sn[on] = null), (di = sn[--on]), (sn[on] = null);
  for (; e === Ht; )
    (Ht = _e[--Le]),
      (_e[Le] = null),
      (Ze = _e[--Le]),
      (_e[Le] = null),
      (Ke = _e[--Le]),
      (_e[Le] = null);
}
var Te = null,
  ke = null,
  U = !1,
  Ae = null;
function Ru(e, t) {
  var n = Me(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Uo(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (ke = yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ht !== null ? { id: Ke, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Me(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function bl(e) {
  if (U) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Uo(e, t)) {
        if (Gl(e)) throw Error(E(418));
        t = yt(n.nextSibling);
        var r = Te;
        t && Uo(e, t)
          ? Ru(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Te = e));
      }
    } else {
      if (Gl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Te = e);
    }
  }
}
function Go(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function Or(e) {
  if (e !== Te) return !1;
  if (!U) return Go(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vl(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Gl(e)) throw (Au(), Error(E(418)));
    for (; t; ) Ru(e, t), (t = yt(t.nextSibling));
  }
  if ((Go(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Te ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Au() {
  for (var e = ke; e; ) e = yt(e.nextSibling);
}
function Sn() {
  (ke = Te = null), (U = !1);
}
function Is(e) {
  Ae === null ? (Ae = [e]) : Ae.push(e);
}
var Xf = it.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fi = Nt(null),
  pi = null,
  an = null,
  Ds = null;
function Rs() {
  Ds = an = pi = null;
}
function As(e) {
  var t = fi.current;
  W(fi), (e._currentValue = t);
}
function Ql(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function mn(e, t) {
  (pi = e),
    (Ds = an = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (Ds !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), an === null)) {
      if (pi === null) throw Error(E(308));
      (an = e), (pi.dependencies = { lanes: 0, firstContext: e });
    } else an = an.next = e;
  return t;
}
var Dt = null;
function Fs(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Fu(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Fs(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    nt(e, r)
  );
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Je(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      nt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Fs(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    nt(e, n)
  );
}
function br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ts(e, n);
  }
}
function bo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hi(e, t, n, r) {
  var i = e.updateQueue;
  at = !1;
  var l = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var o = a,
      u = o.next;
    (o.next = null), s === null ? (l = u) : (s.next = u), (s = o);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s &&
        (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
        (d.lastBaseUpdate = o)));
  }
  if (l !== null) {
    var m = i.baseState;
    (s = 0), (d = u = o = null), (a = l);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var S = e,
            v = a;
          switch (((h = t), (y = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                m = S.call(y, m, h);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (h = typeof S == "function" ? S.call(y, m, h) : S),
                h == null)
              )
                break e;
              m = Y({}, m, h);
              break e;
            case 2:
              at = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (o = m)) : (d = d.next = y),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (o = m),
      (i.baseState = o),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Ut |= s), (e.lanes = s), (e.memoizedState = m);
  }
}
function Qo(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var Vu = new Fa.Component().refs;
function Yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Li = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      i = wt(e),
      l = Je(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && (Be(t, e, i, r), br(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      i = wt(e),
      l = Je(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, i)),
      t !== null && (Be(t, e, i, r), br(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = wt(e),
      i = Je(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = St(e, i, r)),
      t !== null && (Be(t, e, r, n), br(t, e, r));
  },
};
function Yo(e, t, n, r, i, l, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !rr(n, r) || !rr(i, l)
        : !0
  );
}
function Hu(e, t, n) {
  var r = !1,
    i = kt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Oe(l))
      : ((i = Se(t) ? Vt : de.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? yn(e, i) : kt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Li),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Xo(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Li.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Vu), Bs(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Oe(l))
    : ((l = Se(t) ? Vt : de.current), (i.context = yn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Yl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Li.enqueueReplaceState(i, i.state, null),
      hi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Vu && (a = i.refs = {}),
              s === null ? delete a[l] : (a[l] = s);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function $r(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function qo(e) {
  var t = e._init;
  return t(e._payload);
}
function Wu(e) {
  function t(p, f) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = Ct(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, f, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, g, w) {
    return f === null || f.tag !== 6
      ? ((f = cl(g, p.mode, w)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function o(p, f, g, w) {
    var C = g.type;
    return C === Jt
      ? d(p, f, g.props.children, w, g.key)
      : f !== null &&
          (f.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === ot &&
              qo(C) === f.type))
        ? ((w = i(f, g.props)), (w.ref = zn(p, f, g)), (w.return = p), w)
        : ((w = Zr(g.type, g.key, g.props, null, p.mode, w)),
          (w.ref = zn(p, f, g)),
          (w.return = p),
          w);
  }
  function u(p, f, g, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = dl(g, p.mode, w)), (f.return = p), f)
      : ((f = i(f, g.children || [])), (f.return = p), f);
  }
  function d(p, f, g, w, C) {
    return f === null || f.tag !== 7
      ? ((f = Bt(g, p.mode, w, C)), (f.return = p), f)
      : ((f = i(f, g)), (f.return = p), f);
  }
  function m(p, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = cl("" + f, p.mode, g)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Er:
          return (
            (g = Zr(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = zn(p, null, f)),
            (g.return = p),
            g
          );
        case Zt:
          return (f = dl(f, p.mode, g)), (f.return = p), f;
        case ot:
          var w = f._init;
          return m(p, w(f._payload), g);
      }
      if (Rn(f) || jn(f))
        return (f = Bt(f, p.mode, g, null)), (f.return = p), f;
      $r(p, f);
    }
    return null;
  }
  function h(p, f, g, w) {
    var C = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : a(p, f, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Er:
          return g.key === C ? o(p, f, g, w) : null;
        case Zt:
          return g.key === C ? u(p, f, g, w) : null;
        case ot:
          return (C = g._init), h(p, f, C(g._payload), w);
      }
      if (Rn(g) || jn(g)) return C !== null ? null : d(p, f, g, w, null);
      $r(p, g);
    }
    return null;
  }
  function y(p, f, g, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(g) || null), a(f, p, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Er:
          return (p = p.get(w.key === null ? g : w.key) || null), o(f, p, w, C);
        case Zt:
          return (p = p.get(w.key === null ? g : w.key) || null), u(f, p, w, C);
        case ot:
          var N = w._init;
          return y(p, f, g, N(w._payload), C);
      }
      if (Rn(w) || jn(w)) return (p = p.get(g) || null), d(f, p, w, C, null);
      $r(f, w);
    }
    return null;
  }
  function S(p, f, g, w) {
    for (
      var C = null, N = null, j = f, k = (f = 0), I = null;
      j !== null && k < g.length;
      k++
    ) {
      j.index > k ? ((I = j), (j = null)) : (I = j.sibling);
      var T = h(p, j, g[k], w);
      if (T === null) {
        j === null && (j = I);
        break;
      }
      e && j && T.alternate === null && t(p, j),
        (f = l(T, f, k)),
        N === null ? (C = T) : (N.sibling = T),
        (N = T),
        (j = I);
    }
    if (k === g.length) return n(p, j), U && Ot(p, k), C;
    if (j === null) {
      for (; k < g.length; k++)
        (j = m(p, g[k], w)),
          j !== null &&
            ((f = l(j, f, k)), N === null ? (C = j) : (N.sibling = j), (N = j));
      return U && Ot(p, k), C;
    }
    for (j = r(p, j); k < g.length; k++)
      (I = y(j, p, k, g[k], w)),
        I !== null &&
          (e && I.alternate !== null && j.delete(I.key === null ? k : I.key),
          (f = l(I, f, k)),
          N === null ? (C = I) : (N.sibling = I),
          (N = I));
    return (
      e &&
        j.forEach(function (M) {
          return t(p, M);
        }),
      U && Ot(p, k),
      C
    );
  }
  function v(p, f, g, w) {
    var C = jn(g);
    if (typeof C != "function") throw Error(E(150));
    if (((g = C.call(g)), g == null)) throw Error(E(151));
    for (
      var N = (C = null), j = f, k = (f = 0), I = null, T = g.next();
      j !== null && !T.done;
      k++, T = g.next()
    ) {
      j.index > k ? ((I = j), (j = null)) : (I = j.sibling);
      var M = h(p, j, T.value, w);
      if (M === null) {
        j === null && (j = I);
        break;
      }
      e && j && M.alternate === null && t(p, j),
        (f = l(M, f, k)),
        N === null ? (C = M) : (N.sibling = M),
        (N = M),
        (j = I);
    }
    if (T.done) return n(p, j), U && Ot(p, k), C;
    if (j === null) {
      for (; !T.done; k++, T = g.next())
        (T = m(p, T.value, w)),
          T !== null &&
            ((f = l(T, f, k)), N === null ? (C = T) : (N.sibling = T), (N = T));
      return U && Ot(p, k), C;
    }
    for (j = r(p, j); !T.done; k++, T = g.next())
      (T = y(j, p, k, T.value, w)),
        T !== null &&
          (e && T.alternate !== null && j.delete(T.key === null ? k : T.key),
          (f = l(T, f, k)),
          N === null ? (C = T) : (N.sibling = T),
          (N = T));
    return (
      e &&
        j.forEach(function (O) {
          return t(p, O);
        }),
      U && Ot(p, k),
      C
    );
  }
  function x(p, f, g, w) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Jt &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Er:
          e: {
            for (var C = g.key, N = f; N !== null; ) {
              if (N.key === C) {
                if (((C = g.type), C === Jt)) {
                  if (N.tag === 7) {
                    n(p, N.sibling),
                      (f = i(N, g.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  N.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ot &&
                    qo(C) === N.type)
                ) {
                  n(p, N.sibling),
                    (f = i(N, g.props)),
                    (f.ref = zn(p, N, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            g.type === Jt
              ? ((f = Bt(g.props.children, p.mode, w, g.key)),
                (f.return = p),
                (p = f))
              : ((w = Zr(g.type, g.key, g.props, null, p.mode, w)),
                (w.ref = zn(p, f, g)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case Zt:
          e: {
            for (N = g.key; f !== null; ) {
              if (f.key === N)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, g.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = dl(g, p.mode, w)), (f.return = p), (p = f);
          }
          return s(p);
        case ot:
          return (N = g._init), x(p, f, N(g._payload), w);
      }
      if (Rn(g)) return S(p, f, g, w);
      if (jn(g)) return v(p, f, g, w);
      $r(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = cl(g, p.mode, w)), (f.return = p), (p = f)),
        s(p))
      : n(p, f);
  }
  return x;
}
var xn = Wu(!0),
  Uu = Wu(!1),
  yr = {},
  be = Nt(yr),
  or = Nt(yr),
  ar = Nt(yr);
function Rt(e) {
  if (e === yr) throw Error(E(174));
  return e;
}
function Vs(e, t) {
  switch ((V(ar, t), V(or, e), V(be, yr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = jl(t, e));
  }
  W(be), V(be, t);
}
function wn() {
  W(be), W(or), W(ar);
}
function Gu(e) {
  Rt(ar.current);
  var t = Rt(be.current),
    n = jl(t, e.type);
  t !== n && (V(or, e), V(be, n));
}
function Hs(e) {
  or.current === e && (W(be), W(or));
}
var b = Nt(0);
function mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var il = [];
function Ws() {
  for (var e = 0; e < il.length; e++)
    il[e]._workInProgressVersionPrimary = null;
  il.length = 0;
}
var Qr = it.ReactCurrentDispatcher,
  ll = it.ReactCurrentBatchConfig,
  Wt = 0,
  Q = null,
  ee = null,
  ne = null,
  gi = !1,
  Gn = !1,
  ur = 0,
  qf = 0;
function ae() {
  throw Error(E(321));
}
function Us(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, i, l) {
  if (
    ((Wt = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qr.current = e === null || e.memoizedState === null ? ep : tp),
    (e = n(r, i)),
    Gn)
  ) {
    l = 0;
    do {
      if (((Gn = !1), (ur = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ne = ee = null),
        (t.updateQueue = null),
        (Qr.current = np),
        (e = n(r, i));
    } while (Gn);
  }
  if (
    ((Qr.current = vi),
    (t = ee !== null && ee.next !== null),
    (Wt = 0),
    (ne = ee = Q = null),
    (gi = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function bs() {
  var e = ur !== 0;
  return (ur = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function $e() {
  if (ee === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? Q.memoizedState : ne.next;
  if (t !== null) (ne = t), (ee = e);
  else {
    if (e === null) throw Error(E(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      ne === null ? (Q.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sl(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ee,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = l.next), (l.next = s);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (s = null),
      o = null,
      u = l;
    do {
      var d = u.lane;
      if ((Wt & d) === d)
        o !== null &&
          (o = o.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var m = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        o === null ? ((a = o = m), (s = r)) : (o = o.next = m),
          (Q.lanes |= d),
          (Ut |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    o === null ? (s = r) : (o.next = a),
      Ve(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = o),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (Q.lanes |= l), (Ut |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ol(e) {
  var t = $e(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (l = e(l, s.action)), (s = s.next);
    while (s !== i);
    Ve(l, t.memoizedState) || (ve = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function bu() {}
function Qu(e, t) {
  var n = Q,
    r = $e(),
    i = t(),
    l = !Ve(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ve = !0)),
    (r = r.queue),
    Qs(qu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      dr(9, Xu.bind(null, n, r, i, t), void 0, null),
      re === null)
    )
      throw Error(E(349));
    Wt & 30 || Yu(n, t, i);
  }
  return i;
}
function Yu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ku(t) && Zu(e);
}
function qu(e, t, n) {
  return n(function () {
    Ku(t) && Zu(e);
  });
}
function Ku(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Zu(e) {
  var t = nt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function Ko(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jf.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function dr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ju() {
  return $e().memoizedState;
}
function Yr(e, t, n, r) {
  var i = We();
  (Q.flags |= e),
    (i.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Mi(e, t, n, r) {
  var i = $e();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ee !== null) {
    var s = ee.memoizedState;
    if (((l = s.destroy), r !== null && Us(r, s.deps))) {
      i.memoizedState = dr(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = dr(1 | t, n, l, r));
}
function Zo(e, t) {
  return Yr(8390656, 8, e, t);
}
function Qs(e, t) {
  return Mi(2048, 8, e, t);
}
function ec(e, t) {
  return Mi(4, 2, e, t);
}
function tc(e, t) {
  return Mi(4, 4, e, t);
}
function nc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Mi(4, 4, nc.bind(null, t, e), n)
  );
}
function Ys() {}
function ic(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lc(e, t) {
  var n = $e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Us(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sc(e, t, n) {
  return Wt & 21
    ? (Ve(n, t) || ((n = uu()), (Q.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Kf(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ll.transition;
  ll.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (ll.transition = r);
  }
}
function oc() {
  return $e().memoizedState;
}
function Zf(e, t, n) {
  var r = wt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ac(e))
  )
    uc(t, n);
  else if (((n = Fu(e, t, n, r)), n !== null)) {
    var i = pe();
    Be(n, e, r, i), cc(n, t, r);
  }
}
function Jf(e, t, n) {
  var r = wt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) uc(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = l(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Ve(a, s))) {
          var o = t.interleaved;
          o === null
            ? ((i.next = i), Fs(t))
            : ((i.next = o.next), (o.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fu(e, t, i, r)),
      n !== null && ((i = pe()), Be(n, e, r, i), cc(n, t, r));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function uc(e, t) {
  Gn = gi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ts(e, n);
  }
}
var vi = {
    readContext: Oe,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  ep = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: Zo,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Yr(4194308, 4, nc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Yr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Yr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Zf.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ko,
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Ko(!1),
        t = e[0];
      return (e = Kf.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = We();
      if (U) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(E(349));
        Wt & 30 || Yu(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        Zo(qu.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        dr(9, Xu.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = re.identifierPrefix;
      if (U) {
        var n = Ze,
          r = Ke;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ur++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  tp = {
    readContext: Oe,
    useCallback: ic,
    useContext: Oe,
    useEffect: Qs,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: lc,
    useReducer: sl,
    useRef: Ju,
    useState: function () {
      return sl(cr);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = $e();
      return sc(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = sl(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: bu,
    useSyncExternalStore: Qu,
    useId: oc,
    unstable_isNewReconciler: !1,
  },
  np = {
    readContext: Oe,
    useCallback: ic,
    useContext: Oe,
    useEffect: Qs,
    useImperativeHandle: rc,
    useInsertionEffect: ec,
    useLayoutEffect: tc,
    useMemo: lc,
    useReducer: ol,
    useRef: Ju,
    useState: function () {
      return ol(cr);
    },
    useDebugValue: Ys,
    useDeferredValue: function (e) {
      var t = $e();
      return ee === null ? (t.memoizedState = e) : sc(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = ol(cr)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: bu,
    useSyncExternalStore: Qu,
    useId: oc,
    unstable_isNewReconciler: !1,
  };
function Cn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += _d(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var rp = typeof WeakMap == "function" ? WeakMap : Map;
function dc(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Si || ((Si = !0), (ss = r)), ql(e, t);
    }),
    n
  );
}
function fc(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ql(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ql(e, t),
          typeof r != "function" &&
            (xt === null ? (xt = new Set([this])) : xt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Jo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new rp();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = vp.bind(null, e, t, n)), t.then(e, e));
}
function ea(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ta(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Je(-1, 1)), (t.tag = 2), St(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ip = it.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Uu(t, null, n, r) : xn(t, e.child, n, r);
}
function na(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    mn(t, i),
    (r = Gs(e, t, n, r, l, i)),
    (n = bs()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        rt(e, t, i))
      : (U && n && Os(t), (t.flags |= 1), fe(e, t, r, i), t.child)
  );
}
function ra(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !no(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), pc(e, t, l, r, i))
      : ((e = Zr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var s = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(s, r) && e.ref === t.ref)
    )
      return rt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ct(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pc(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (rr(l, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), rt(e, t, i);
  }
  return Kl(e, t, n, r, i);
}
function hc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(cn, Ce),
        (Ce |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(cn, Ce),
          (Ce |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        V(cn, Ce),
        (Ce |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(cn, Ce),
      (Ce |= r);
  return fe(e, t, i, n), t.child;
}
function mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, i) {
  var l = Se(n) ? Vt : de.current;
  return (
    (l = yn(t, l)),
    mn(t, i),
    (n = Gs(e, t, n, r, l, i)),
    (r = bs()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        rt(e, t, i))
      : (U && r && Os(t), (t.flags |= 1), fe(e, t, n, i), t.child)
  );
}
function ia(e, t, n, r, i) {
  if (Se(n)) {
    var l = !0;
    ui(t);
  } else l = !1;
  if ((mn(t, i), t.stateNode === null))
    Xr(e, t), Hu(t, n, r), Xl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var o = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Oe(u))
      : ((u = Se(n) ? Vt : de.current), (u = yn(t, u)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || o !== u) && Xo(t, s, r, u)),
      (at = !1);
    var h = t.memoizedState;
    (s.state = h),
      hi(t, r, s, i),
      (o = t.memoizedState),
      a !== r || h !== o || ye.current || at
        ? (typeof d == "function" && (Yl(t, n, d, r), (o = t.memoizedState)),
          (a = at || Yo(t, n, a, r, h, o, u))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = o)),
          (s.props = r),
          (s.state = o),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Bu(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : De(t.type, a)),
      (s.props = u),
      (m = t.pendingProps),
      (h = s.context),
      (o = n.contextType),
      typeof o == "object" && o !== null
        ? (o = Oe(o))
        : ((o = Se(n) ? Vt : de.current), (o = yn(t, o)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== m || h !== o) && Xo(t, s, r, o)),
      (at = !1),
      (h = t.memoizedState),
      (s.state = h),
      hi(t, r, s, i);
    var S = t.memoizedState;
    a !== m || h !== S || ye.current || at
      ? (typeof y == "function" && (Yl(t, n, y, r), (S = t.memoizedState)),
        (u = at || Yo(t, n, u, r, h, S, o) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, o),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, o)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = o),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zl(e, t, n, r, l, i);
}
function Zl(e, t, n, r, i, l) {
  mc(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Wo(t, n, !1), rt(e, t, l);
  (r = t.stateNode), (ip.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = xn(t, e.child, null, l)), (t.child = xn(t, null, a, l)))
      : fe(e, t, a, l),
    (t.memoizedState = r.state),
    i && Wo(t, n, !0),
    t.child
  );
}
function gc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ho(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ho(e, t.context, !1),
    Vs(e, t.containerInfo);
}
function la(e, t, n, r, i) {
  return Sn(), Is(i), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function es(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vc(e, t, n) {
  var r = t.pendingProps,
    i = b.current,
    l = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    V(b, i & 1),
    e === null)
  )
    return (
      bl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = s))
                : (l = $i(s, r, 0, null)),
              (e = Bt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = es(n)),
              (t.memoizedState = Jl),
              e)
            : Xs(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return lp(e, t, s, r, a, i, n);
  if (l) {
    (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var o = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = o),
          (t.deletions = null))
        : ((r = Ct(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Ct(a, l)) : ((l = Bt(l, s, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? es(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (l.memoizedState = s),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Ct(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Xs(e, t) {
  return (
    (t = $i({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ir(e, t, n, r) {
  return (
    r !== null && Is(r),
    xn(t, e.child, null, n),
    (e = Xs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lp(e, t, n, r, i, l, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = al(Error(E(422)))), Ir(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = $i({ mode: "visible", children: r.children }, i, 0, null)),
          (l = Bt(l, i, s, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && xn(t, e.child, null, s),
          (t.child.memoizedState = es(s)),
          (t.memoizedState = Jl),
          l);
  if (!(t.mode & 1)) return Ir(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(E(419))), (r = al(l, r, void 0)), Ir(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ve || a)) {
    if (((r = re), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), nt(e, i), Be(r, e, i, -1));
    }
    return to(), (r = al(Error(E(421)))), Ir(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = yp.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (ke = yt(i.nextSibling)),
      (Te = t),
      (U = !0),
      (Ae = null),
      e !== null &&
        ((_e[Le++] = Ke),
        (_e[Le++] = Ze),
        (_e[Le++] = Ht),
        (Ke = e.id),
        (Ze = e.overflow),
        (Ht = t)),
      (t = Xs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ql(e.return, t, n);
}
function ul(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function yc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((fe(e, t, r.children, n), (r = b.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(b, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && mi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ul(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && mi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ul(t, !0, n, null, l);
        break;
      case "together":
        ul(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sp(e, t, n) {
  switch (t.tag) {
    case 3:
      gc(t), Sn();
      break;
    case 5:
      Gu(t);
      break;
    case 1:
      Se(t.type) && ui(t);
      break;
    case 4:
      Vs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      V(fi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(b, b.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? vc(e, t, n)
            : (V(b, b.current & 1),
              (e = rt(e, t, n)),
              e !== null ? e.sibling : null);
      V(b, b.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        V(b, b.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hc(e, t, n);
  }
  return rt(e, t, n);
}
var Sc, ts, xc, wc;
Sc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ts = function () {};
xc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rt(be.current);
    var l = null;
    switch (n) {
      case "input":
        (i = El(e, i)), (r = El(e, r)), (l = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Nl(e, i)), (r = Nl(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    Pl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (qn.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var o = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && o !== a && (o != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (o && o.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in o)
              o.hasOwnProperty(s) &&
                a[s] !== o[s] &&
                (n || (n = {}), (n[s] = o[s]));
          } else n || (l || (l = []), l.push(u, n)), (n = o);
        else
          u === "dangerouslySetInnerHTML"
            ? ((o = o ? o.__html : void 0),
              (a = a ? a.__html : void 0),
              o != null && a !== o && (l = l || []).push(u, o))
            : u === "children"
              ? (typeof o != "string" && typeof o != "number") ||
                (l = l || []).push(u, "" + o)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (qn.hasOwnProperty(u)
                  ? (o != null && u === "onScroll" && H("scroll", e),
                    l || a === o || (l = []))
                  : (l = l || []).push(u, o));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
wc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function op(e, t, n) {
  var r = t.pendingProps;
  switch (($s(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return Se(t.type) && ai(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wn(),
        W(ye),
        W(de),
        Ws(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ae !== null && (us(Ae), (Ae = null)))),
        ts(e, t),
        ue(t),
        null
      );
    case 5:
      Hs(t);
      var i = Rt(ar.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xc(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Rt(be.current)), Or(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ue] = t), (r[sr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fn.length; i++) H(Fn[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              mo(r, l), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              vo(r, l), H("invalid", r);
          }
          Pl(n, l), (i = null);
          for (var s in l)
            if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : qn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              kr(r), go(r, l, !0);
              break;
            case "textarea":
              kr(r), yo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ue] = t),
            (e[sr] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = _l(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fn.length; i++) H(Fn[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                mo(e, r), (i = El(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                vo(e, r), (i = Nl(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            Pl(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var o = a[l];
                l === "style"
                  ? Ka(e, o)
                  : l === "dangerouslySetInnerHTML"
                    ? ((o = o ? o.__html : void 0), o != null && Xa(e, o))
                    : l === "children"
                      ? typeof o == "string"
                        ? (n !== "textarea" || o !== "") && Kn(e, o)
                        : typeof o == "number" && Kn(e, "" + o)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (qn.hasOwnProperty(l)
                          ? o != null && l === "onScroll" && H("scroll", e)
                          : o != null && Ss(e, l, o, s));
              }
            switch (n) {
              case "input":
                kr(e), go(e, r, !1);
                break;
              case "textarea":
                kr(e), yo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? dn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) wc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Rt(ar.current)), Rt(be.current), Or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (l = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (W(b),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ke !== null && t.mode & 1 && !(t.flags & 128))
          Au(), Sn(), (t.flags |= 98560), (l = !1);
        else if (((l = Or(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[Ue] = t;
          } else
            Sn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else Ae !== null && (us(Ae), (Ae = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || b.current & 1 ? te === 0 && (te = 3) : to())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        wn(), ts(e, t), e === null && ir(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return As(t.type._context), ue(t), null;
    case 17:
      return Se(t.type) && ai(), ue(t), null;
    case 19:
      if ((W(b), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
        if (r) On(l, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = mi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    On(l, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (s = l.alternate),
                    s === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = s.childLanes),
                        (l.lanes = s.lanes),
                        (l.child = s.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = s.memoizedProps),
                        (l.memoizedState = s.memoizedState),
                        (l.updateQueue = s.updateQueue),
                        (l.type = s.type),
                        (e = s.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(b, (b.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            q() > En &&
            ((t.flags |= 128), (r = !0), On(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              On(l, !0),
              l.tail === null && l.tailMode === "hidden" && !s.alternate && !U)
            )
              return ue(t), null;
          } else
            2 * q() - l.renderingStartTime > En &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), On(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = l.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (l.last = s));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = q()),
          (t.sibling = null),
          (n = b.current),
          V(b, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        eo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ce & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function ap(e, t) {
  switch (($s(t), t.tag)) {
    case 1:
      return (
        Se(t.type) && ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        wn(),
        W(ye),
        W(de),
        Ws(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Hs(t), null;
    case 13:
      if ((W(b), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Sn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return W(b), null;
    case 4:
      return wn(), null;
    case 10:
      return As(t.type._context), null;
    case 22:
    case 23:
      return eo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1,
  ce = !1,
  up = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function ns(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var oa = !1;
function cp(e, t) {
  if (((Fl = ii), (e = Tu()), zs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            o = -1,
            u = 0,
            d = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (i !== 0 && m.nodeType !== 3) || (a = s + i),
                m !== l || (r !== 0 && m.nodeType !== 3) || (o = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (h = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++u === i && (a = s),
                h === l && ++d === r && (o = s),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = y;
          }
          n = a === -1 || o === -1 ? null : { start: a, end: o };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bl = { focusedElem: e, selectionRange: n }, ii = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    x = S.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : De(t.type, v),
                      x,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          X(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (S = oa), (oa = !1), S;
}
function bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && ns(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function zi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[sr], delete t[Wl], delete t[bf], delete t[Qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function aa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ec(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (is(e, t, n), e = e.sibling; e !== null; ) is(e, t, n), (e = e.sibling);
}
function ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ls(e, t, n), e = e.sibling; e !== null; ) ls(e, t, n), (e = e.sibling);
}
var le = null,
  Re = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) kc(e, t, n), (n = n.sibling);
}
function kc(e, t, n) {
  if (Ge && typeof Ge.onCommitFiberUnmount == "function")
    try {
      Ge.onCommitFiberUnmount(ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || un(n, t);
    case 6:
      var r = le,
        i = Re;
      (le = null),
        lt(e, t, n),
        (le = r),
        (Re = i),
        le !== null &&
          (Re
            ? ((e = le),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : le.removeChild(n.stateNode));
      break;
    case 18:
      le !== null &&
        (Re
          ? ((e = le),
            (n = n.stateNode),
            e.nodeType === 8
              ? nl(e.parentNode, n)
              : e.nodeType === 1 && nl(e, n),
            tr(e))
          : nl(le, n.stateNode));
      break;
    case 4:
      (r = le),
        (i = Re),
        (le = n.stateNode.containerInfo),
        (Re = !0),
        lt(e, t, n),
        (le = r),
        (Re = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            s = l.destroy;
          (l = l.tag),
            s !== void 0 && (l & 2 || l & 4) && ns(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          X(n, t, a);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), lt(e, t, n), (ce = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function ua(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new up()),
      t.forEach(function (r) {
        var i = Sp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (le = a.stateNode), (Re = !1);
              break e;
            case 3:
              (le = a.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (le = a.stateNode.containerInfo), (Re = !0);
              break e;
          }
          a = a.return;
        }
        if (le === null) throw Error(E(160));
        kc(l, s, i), (le = null), (Re = !1);
        var o = i.alternate;
        o !== null && (o.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tc(t, e), (t = t.sibling);
}
function Tc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), He(e), r & 4)) {
        try {
          bn(3, e, e.return), zi(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          bn(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      Ie(t, e), He(e), r & 512 && n !== null && un(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        He(e),
        r & 512 && n !== null && un(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Kn(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          s = n !== null ? n.memoizedProps : l,
          a = e.type,
          o = e.updateQueue;
        if (((e.updateQueue = null), o !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && ba(i, l),
              _l(a, s);
            var u = _l(a, l);
            for (s = 0; s < o.length; s += 2) {
              var d = o[s],
                m = o[s + 1];
              d === "style"
                ? Ka(i, m)
                : d === "dangerouslySetInnerHTML"
                  ? Xa(i, m)
                  : d === "children"
                    ? Kn(i, m)
                    : Ss(i, d, m, u);
            }
            switch (a) {
              case "input":
                kl(i, l);
                break;
              case "textarea":
                Qa(i, l);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? dn(i, !!l.multiple, y, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? dn(i, !!l.multiple, l.defaultValue, !0)
                      : dn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[sr] = l;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      Ie(t, e), He(e);
      break;
    case 13:
      Ie(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Zs = q())),
        r & 4 && ua(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (u = ce) || d), Ie(t, e), (ce = u)) : Ie(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (L = e, d = e.child; d !== null; ) {
            for (m = L = d; L !== null; ) {
              switch (((h = L), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bn(4, h, h.return);
                  break;
                case 1:
                  un(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  un(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    da(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (L = y)) : da(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (i = m.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = m.stateNode),
                      (o = m.memoizedProps.style),
                      (s =
                        o != null && o.hasOwnProperty("display")
                          ? o.display
                          : null),
                      (a.style.display = qa("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), He(e), r & 4 && ua(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Kn(i, ""), (r.flags &= -33));
          var l = aa(e);
          ls(e, l, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = aa(e);
          is(e, a, s);
          break;
        default:
          throw Error(E(161));
      }
    } catch (o) {
      X(e, e.return, o);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function dp(e, t, n) {
  (L = e), Nc(e);
}
function Nc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      l = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Dr;
      if (!s) {
        var a = i.alternate,
          o = (a !== null && a.memoizedState !== null) || ce;
        a = Dr;
        var u = ce;
        if (((Dr = s), (ce = o) && !u))
          for (L = i; L !== null; )
            (s = L),
              (o = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fa(i)
                : o !== null
                  ? ((o.return = s), (L = o))
                  : fa(i);
        for (; l !== null; ) (L = l), Nc(l), (l = l.sibling);
        (L = i), (Dr = a), (ce = u);
      }
      ca(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (L = l)) : ca(e);
  }
}
function ca(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ce || zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && Qo(t, l, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qo(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var o = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o.autoFocus && n.focus();
                    break;
                  case "img":
                    o.src && (n.src = o.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && tr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ce || (t.flags & 512 && rs(t));
      } catch (h) {
        X(t, t.return, h);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function da(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function fa(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
          } catch (o) {
            X(t, n, o);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (o) {
              X(t, i, o);
            }
          }
          var l = t.return;
          try {
            rs(t);
          } catch (o) {
            X(t, l, o);
          }
          break;
        case 5:
          var s = t.return;
          try {
            rs(t);
          } catch (o) {
            X(t, s, o);
          }
      }
    } catch (o) {
      X(t, t.return, o);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var fp = Math.ceil,
  yi = it.ReactCurrentDispatcher,
  qs = it.ReactCurrentOwner,
  ze = it.ReactCurrentBatchConfig,
  R = 0,
  re = null,
  J = null,
  se = 0,
  Ce = 0,
  cn = Nt(0),
  te = 0,
  fr = null,
  Ut = 0,
  Oi = 0,
  Ks = 0,
  Qn = null,
  ge = null,
  Zs = 0,
  En = 1 / 0,
  Xe = null,
  Si = !1,
  ss = null,
  xt = null,
  Rr = !1,
  ft = null,
  xi = 0,
  Yn = 0,
  os = null,
  qr = -1,
  Kr = 0;
function pe() {
  return R & 6 ? q() : qr !== -1 ? qr : (qr = q());
}
function wt(e) {
  return e.mode & 1
    ? R & 2 && se !== 0
      ? se & -se
      : Xf.transition !== null
        ? (Kr === 0 && (Kr = uu()), Kr)
        : ((e = F),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gu(e.type))),
          e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Yn) throw ((Yn = 0), (os = null), Error(E(185)));
  mr(e, n, r),
    (!(R & 2) || e !== re) &&
      (e === re && (!(R & 2) && (Oi |= n), te === 4 && ct(e, se)),
      xe(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((En = q() + 500), _i && jt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  Yd(e, t);
  var r = ri(e, e === re ? se : 0);
  if (r === 0)
    n !== null && wo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wo(n), t === 1))
      e.tag === 0 ? Yf(pa.bind(null, e)) : Iu(pa.bind(null, e)),
        Uf(function () {
          !(R & 6) && jt();
        }),
        (n = null);
    else {
      switch (cu(r)) {
        case 1:
          n = ks;
          break;
        case 4:
          n = ou;
          break;
        case 16:
          n = ni;
          break;
        case 536870912:
          n = au;
          break;
        default:
          n = ni;
      }
      n = $c(n, jc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jc(e, t) {
  if (((qr = -1), (Kr = 0), R & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = ri(e, e === re ? se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
  else {
    t = r;
    var i = R;
    R |= 2;
    var l = _c();
    (re !== e || se !== t) && ((Xe = null), (En = q() + 500), Ft(e, t));
    do
      try {
        mp();
        break;
      } catch (a) {
        Pc(e, a);
      }
    while (!0);
    Rs(),
      (yi.current = l),
      (R = i),
      J !== null ? (t = 0) : ((re = null), (se = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = $l(e)), i !== 0 && ((r = i), (t = as(e, i)))), t === 1)
    )
      throw ((n = fr), Ft(e, 0), ct(e, r), xe(e, q()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !pp(i) &&
          ((t = wi(e, r)),
          t === 2 && ((l = $l(e)), l !== 0 && ((r = l), (t = as(e, l)))),
          t === 1))
      )
        throw ((n = fr), Ft(e, 0), ct(e, r), xe(e, q()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          $t(e, ge, Xe);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Zs + 500 - q()), 10 < t))
          ) {
            if (ri(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Hl($t.bind(null, e, ge, Xe), t);
            break;
          }
          $t(e, ge, Xe);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Fe(r);
            (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
          }
          if (
            ((r = i),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * fp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hl($t.bind(null, e, ge, Xe), r);
            break;
          }
          $t(e, ge, Xe);
          break;
        case 5:
          $t(e, ge, Xe);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return xe(e, q()), e.callbackNode === n ? jc.bind(null, e) : null;
}
function as(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = wi(e, t)),
    e !== 2 && ((t = ge), (ge = n), t !== null && us(t)),
    e
  );
}
function us(e) {
  ge === null ? (ge = e) : ge.push.apply(ge, e);
}
function pp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ve(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function ct(e, t) {
  for (
    t &= ~Ks,
      t &= ~Oi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pa(e) {
  if (R & 6) throw Error(E(327));
  gn();
  var t = ri(e, 0);
  if (!(t & 1)) return xe(e, q()), null;
  var n = wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $l(e);
    r !== 0 && ((t = r), (n = as(e, r)));
  }
  if (n === 1) throw ((n = fr), Ft(e, 0), ct(e, t), xe(e, q()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $t(e, ge, Xe),
    xe(e, q()),
    null
  );
}
function Js(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((En = q() + 500), _i && jt());
  }
}
function Gt(e) {
  ft !== null && ft.tag === 0 && !(R & 6) && gn();
  var t = R;
  R |= 1;
  var n = ze.transition,
    r = F;
  try {
    if (((ze.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (ze.transition = n), (R = t), !(R & 6) && jt();
  }
}
function eo() {
  (Ce = cn.current), W(cn);
}
function Ft(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wf(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch (($s(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ai();
          break;
        case 3:
          wn(), W(ye), W(de), Ws();
          break;
        case 5:
          Hs(r);
          break;
        case 4:
          wn();
          break;
        case 13:
          W(b);
          break;
        case 19:
          W(b);
          break;
        case 10:
          As(r.type._context);
          break;
        case 22:
        case 23:
          eo();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (J = e = Ct(e.current, null)),
    (se = Ce = t),
    (te = 0),
    (fr = null),
    (Ks = Oi = Ut = 0),
    (ge = Qn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var s = l.next;
          (l.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function Pc(e, t) {
  do {
    var n = J;
    try {
      if ((Rs(), (Qr.current = vi), gi)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        gi = !1;
      }
      if (
        ((Wt = 0),
        (ne = ee = Q = null),
        (Gn = !1),
        (ur = 0),
        (qs.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (fr = t), (J = null);
        break;
      }
      e: {
        var l = e,
          s = n.return,
          a = n,
          o = t;
        if (
          ((t = se),
          (a.flags |= 32768),
          o !== null && typeof o == "object" && typeof o.then == "function")
        ) {
          var u = o,
            d = a,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = ea(s);
          if (y !== null) {
            (y.flags &= -257),
              ta(y, s, a, l, t),
              y.mode & 1 && Jo(l, u, t),
              (t = y),
              (o = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(o), (t.updateQueue = v);
            } else S.add(o);
            break e;
          } else {
            if (!(t & 1)) {
              Jo(l, u, t), to();
              break e;
            }
            o = Error(E(426));
          }
        } else if (U && a.mode & 1) {
          var x = ea(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ta(x, s, a, l, t),
              Is(Cn(o, a));
            break e;
          }
        }
        (l = o = Cn(o, a)),
          te !== 4 && (te = 2),
          Qn === null ? (Qn = [l]) : Qn.push(l),
          (l = s);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = dc(l, o, t);
              bo(l, p);
              break e;
            case 1:
              a = o;
              var f = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (xt === null || !xt.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = fc(l, a, t);
                bo(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Mc(n);
    } catch (C) {
      (t = C), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function _c() {
  var e = yi.current;
  return (yi.current = vi), e === null ? vi : e;
}
function to() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    re === null || (!(Ut & 268435455) && !(Oi & 268435455)) || ct(re, se);
}
function wi(e, t) {
  var n = R;
  R |= 2;
  var r = _c();
  (re !== e || se !== t) && ((Xe = null), Ft(e, t));
  do
    try {
      hp();
      break;
    } catch (i) {
      Pc(e, i);
    }
  while (!0);
  if ((Rs(), (R = n), (yi.current = r), J !== null)) throw Error(E(261));
  return (re = null), (se = 0), te;
}
function hp() {
  for (; J !== null; ) Lc(J);
}
function mp() {
  for (; J !== null && !Fd(); ) Lc(J);
}
function Lc(e) {
  var t = Oc(e.alternate, e, Ce);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mc(e) : (J = t),
    (qs.current = null);
}
function Mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ap(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (J = null);
        return;
      }
    } else if (((n = op(n, t, Ce)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function $t(e, t, n) {
  var r = F,
    i = ze.transition;
  try {
    (ze.transition = null), (F = 1), gp(e, t, n, r);
  } finally {
    (ze.transition = i), (F = r);
  }
  return null;
}
function gp(e, t, n, r) {
  do gn();
  while (ft !== null);
  if (R & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Xd(e, l),
    e === re && ((J = re = null), (se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rr ||
      ((Rr = !0),
      $c(ni, function () {
        return gn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = ze.transition), (ze.transition = null);
    var s = F;
    F = 1;
    var a = R;
    (R |= 4),
      (qs.current = null),
      cp(e, n),
      Tc(n, e),
      Df(Bl),
      (ii = !!Fl),
      (Bl = Fl = null),
      (e.current = n),
      dp(n),
      Bd(),
      (R = a),
      (F = s),
      (ze.transition = l);
  } else e.current = n;
  if (
    (Rr && ((Rr = !1), (ft = e), (xi = i)),
    (l = e.pendingLanes),
    l === 0 && (xt = null),
    Wd(n.stateNode),
    xe(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Si) throw ((Si = !1), (e = ss), (ss = null), e);
  return (
    xi & 1 && e.tag !== 0 && gn(),
    (l = e.pendingLanes),
    l & 1 ? (e === os ? Yn++ : ((Yn = 0), (os = e))) : (Yn = 0),
    jt(),
    null
  );
}
function gn() {
  if (ft !== null) {
    var e = cu(xi),
      t = ze.transition,
      n = F;
    try {
      if (((ze.transition = null), (F = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (xi = 0), R & 6)) throw Error(E(331));
        var i = R;
        for (R |= 4, L = e.current; L !== null; ) {
          var l = L,
            s = l.child;
          if (L.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var o = 0; o < a.length; o++) {
                var u = a[o];
                for (L = u; L !== null; ) {
                  var d = L;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      bn(8, d, l);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (L = m);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var h = d.sibling,
                        y = d.return;
                      if ((Cc(d), d === u)) {
                        L = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (L = h);
                        break;
                      }
                      L = y;
                    }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              L = l;
            }
          }
          if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (L = s);
          else
            e: for (; L !== null; ) {
              if (((l = L), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    bn(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (L = p);
                break e;
              }
              L = l.return;
            }
        }
        var f = e.current;
        for (L = f; L !== null; ) {
          s = L;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (L = g);
          else
            e: for (s = f; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(9, a);
                  }
                } catch (C) {
                  X(a, a.return, C);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (L = w);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((R = i), jt(), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        )
          try {
            Ge.onPostCommitFiberRoot(ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (ze.transition = t);
    }
  }
  return !1;
}
function ha(e, t, n) {
  (t = Cn(n, t)),
    (t = dc(e, t, 1)),
    (e = St(e, t, 1)),
    (t = pe()),
    e !== null && (mr(e, 1, t), xe(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xt === null || !xt.has(r)))
        ) {
          (e = Cn(n, e)),
            (e = fc(t, e, 1)),
            (t = St(t, e, 1)),
            (e = pe()),
            t !== null && (mr(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (se & n) === n &&
      (te === 4 || (te === 3 && (se & 130023424) === se && 500 > q() - Zs)
        ? Ft(e, 0)
        : (Ks |= n)),
    xe(e, t);
}
function zc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = pe();
  (e = nt(e, t)), e !== null && (mr(e, t, n), xe(e, n));
}
function yp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function Sp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Oc;
Oc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), sp(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), U && t.flags & 1048576 && Du(t, di, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xr(e, t), (e = t.pendingProps);
      var i = yn(t, de.current);
      mn(t, n), (i = Gs(null, t, r, e, i, n));
      var l = bs();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Se(r) ? ((l = !0), ui(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Bs(t),
            (i.updater = Li),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xl(t, r, e, n),
            (t = Zl(null, t, r, !0, l, n)))
          : ((t.tag = 0), U && l && Os(t), fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = wp(r)),
          (e = De(r, e)),
          i)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        Kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        ia(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((gc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Bu(e, t),
          hi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Cn(Error(E(423)), t)), (t = la(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Cn(Error(E(424)), t)), (t = la(e, t, r, n, i));
            break e;
          } else
            for (
              ke = yt(t.stateNode.containerInfo.firstChild),
                Te = t,
                U = !0,
                Ae = null,
                n = Uu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Sn(), r === i)) {
            t = rt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gu(t),
        e === null && bl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Vl(r, i) ? (s = null) : l !== null && Vl(r, l) && (t.flags |= 32),
        mc(e, t),
        fe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && bl(t), null;
    case 13:
      return vc(e, t, n);
    case 4:
      return (
        Vs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = xn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        na(e, t, r, i, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (s = i.value),
          V(fi, r._currentValue),
          (r._currentValue = s),
          l !== null)
        )
          if (Ve(l.value, s)) {
            if (l.children === i.children && !ye.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                s = l.child;
                for (var o = a.firstContext; o !== null; ) {
                  if (o.context === r) {
                    if (l.tag === 1) {
                      (o = Je(-1, n & -n)), (o.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (o.next = o)
                          : ((o.next = d.next), (d.next = o)),
                          (u.pending = o);
                      }
                    }
                    (l.lanes |= n),
                      (o = l.alternate),
                      o !== null && (o.lanes |= n),
                      Ql(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  o = o.next;
                }
              } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((s = l.return), s === null)) throw Error(E(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ql(s, n, t),
                  (s = l.sibling);
              } else s = l.child;
              if (s !== null) s.return = l;
              else
                for (s = l; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((l = s.sibling), l !== null)) {
                    (l.return = s.return), (s = l);
                    break;
                  }
                  s = s.return;
                }
              l = s;
            }
        fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        mn(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = De(r, t.pendingProps)),
        (i = De(r.type, i)),
        ra(e, t, r, i, n)
      );
    case 15:
      return pc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : De(r, i)),
        Xr(e, t),
        (t.tag = 1),
        Se(r) ? ((e = !0), ui(t)) : (e = !1),
        mn(t, n),
        Hu(t, r, i),
        Xl(t, r, i, n),
        Zl(null, t, r, !0, e, n)
      );
    case 19:
      return yc(e, t, n);
    case 22:
      return hc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function $c(e, t) {
  return su(e, t);
}
function xp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Me(e, t, n, r) {
  return new xp(e, t, n, r);
}
function no(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function wp(e) {
  if (typeof e == "function") return no(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ws)) return 11;
    if (e === Cs) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Me(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zr(e, t, n, r, i, l) {
  var s = 2;
  if (((r = e), typeof e == "function")) no(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Jt:
        return Bt(n.children, i, l, t);
      case xs:
        (s = 8), (i |= 8);
        break;
      case Sl:
        return (
          (e = Me(12, n, t, i | 2)), (e.elementType = Sl), (e.lanes = l), e
        );
      case xl:
        return (e = Me(13, n, t, i)), (e.elementType = xl), (e.lanes = l), e;
      case wl:
        return (e = Me(19, n, t, i)), (e.elementType = wl), (e.lanes = l), e;
      case Wa:
        return $i(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Va:
              s = 10;
              break e;
            case Ha:
              s = 9;
              break e;
            case ws:
              s = 11;
              break e;
            case Cs:
              s = 14;
              break e;
            case ot:
              (s = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Me(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Bt(e, t, n, r) {
  return (e = Me(7, e, r, t)), (e.lanes = n), e;
}
function $i(e, t, n, r) {
  return (
    (e = Me(22, e, r, t)),
    (e.elementType = Wa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function cl(e, t, n) {
  return (e = Me(6, e, null, t)), (e.lanes = n), e;
}
function dl(e, t, n) {
  return (
    (t = Me(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Cp(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gi(0)),
    (this.expirationTimes = Gi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ro(e, t, n, r, i, l, s, a, o) {
  return (
    (e = new Cp(e, t, n, a, o)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Me(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(l),
    e
  );
}
function Ep(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ic(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Se(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Se(n)) return $u(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, i, l, s, a, o) {
  return (
    (e = ro(n, r, !0, e, i, l, s, a, o)),
    (e.context = Ic(null)),
    (n = e.current),
    (r = pe()),
    (i = wt(n)),
    (l = Je(r, i)),
    (l.callback = t ?? null),
    St(n, l, i),
    (e.current.lanes = i),
    mr(e, i, r),
    xe(e, r),
    e
  );
}
function Ii(e, t, n, r) {
  var i = t.current,
    l = pe(),
    s = wt(i);
  return (
    (n = Ic(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Je(l, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = St(i, t, s)),
    e !== null && (Be(e, i, s, l), br(e, i, s)),
    s
  );
}
function Ci(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function io(e, t) {
  ma(e, t), (e = e.alternate) && ma(e, t);
}
function kp() {
  return null;
}
var Rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function lo(e) {
  this._internalRoot = e;
}
Di.prototype.render = lo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ii(e, t, null, null);
};
Di.prototype.unmount = lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      Ii(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function Di(e) {
  this._internalRoot = e;
}
Di.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && mu(e);
  }
};
function so(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ri(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ga() {}
function Tp(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Ci(s);
        l.call(u);
      };
    }
    var s = Dc(t, r, e, 0, null, !1, !1, "", ga);
    return (
      (e._reactRootContainer = s),
      (e[tt] = s.current),
      ir(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ci(o);
      a.call(u);
    };
  }
  var o = ro(e, 0, !1, null, null, !1, !1, "", ga);
  return (
    (e._reactRootContainer = o),
    (e[tt] = o.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      Ii(t, o, n, r);
    }),
    o
  );
}
function Ai(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var s = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var o = Ci(s);
        a.call(o);
      };
    }
    Ii(t, s, e, i);
  } else s = Tp(n, t, e, i, r);
  return Ci(s);
}
du = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = An(t.pendingLanes);
        n !== 0 &&
          (Ts(t, n | 1), xe(t, q()), !(R & 6) && ((En = q() + 500), jt()));
      }
      break;
    case 13:
      Gt(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var i = pe();
          Be(r, e, 1, i);
        }
      }),
        io(e, 1);
  }
};
Ns = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Be(t, e, 134217728, n);
    }
    io(e, 134217728);
  }
};
fu = function (e) {
  if (e.tag === 13) {
    var t = wt(e),
      n = nt(e, t);
    if (n !== null) {
      var r = pe();
      Be(n, e, t, r);
    }
    io(e, t);
  }
};
pu = function () {
  return F;
};
hu = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Ml = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Pi(r);
            if (!i) throw Error(E(90));
            Ga(r), kl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Qa(e, n);
      break;
    case "select":
      (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
  }
};
eu = Js;
tu = Gt;
var Np = { usingClientEntryPoint: !1, Events: [vr, rn, Pi, Za, Ja, Js] },
  $n = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  jp = {
    bundleType: $n.bundleType,
    version: $n.version,
    rendererPackageName: $n.rendererPackageName,
    rendererConfig: $n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: it.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = iu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $n.findFiberByHostInstance || kp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ar.isDisabled && Ar.supportsFiber)
    try {
      (ki = Ar.inject(jp)), (Ge = Ar);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Np;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!so(t)) throw Error(E(200));
  return Ep(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!so(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = Rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ro(e, 1, !1, null, null, n, !1, r, i)),
    (e[tt] = t.current),
    ir(e.nodeType === 8 ? e.parentNode : e),
    new lo(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = iu(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return Gt(e);
};
je.hydrate = function (e, t, n) {
  if (!Ri(t)) throw Error(E(200));
  return Ai(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!so(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    s = Rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, i, !1, l, s)),
    (e[tt] = t.current),
    ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Di(t);
};
je.render = function (e, t, n) {
  if (!Ri(t)) throw Error(E(200));
  return Ai(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!Ri(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Gt(function () {
        Ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Js;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ri(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ai(e, t, n, !1, r);
};
je.version = "18.2.0-next-9e3b772b8-20220608";
function Ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac);
    } catch (e) {
      console.error(e);
    }
}
Ac(), (Da.exports = je);
var Pp = Da.exports,
  va = Pp;
(vl.createRoot = va.createRoot), (vl.hydrateRoot = va.hydrateRoot);
const At = "assets/soft-zzh9G58F.png";
function _p() {
  const e = document.body,
    t = getComputedStyle(e),
    n = (r) => {
      const i = t.backgroundColor,
        l = document.querySelector(".menu"),
        s = document.querySelector(".popup-window"),
        a = document.querySelectorAll(".Textbox"),
        o = document.getElementsByTagName("a"),
        u = document.querySelector(".popup"),
        d = document.querySelector(".card"),
        m = document.querySelectorAll("#GlencoreFilter"),
        h = document.documentElement;
      a.forEach((y) => {
        if (i === "rgb(226, 230, 235)") {
          h.style.setProperty("--color-input", "#fff"),
            h.style.setProperty("--backgroud-label", "#1a1a21"),
            h.style.setProperty("--dark-color", "#1a1a21"),
            h.style.setProperty("--card-color", "#fff"),
            (e.style.backgroundColor = "#151a1f"),
            (y.style.backgroundColor = "#1A1A21"),
            (y.style.color = "#ffffff"),
            (l.style.backgroundColor = "#1A1A21"),
            (s.style.backgroundColor = "#151a1f"),
            u.style.setProperty("--burger-bg", "#151a1f"),
            u.style.setProperty("--burger-color", "#f6f8fc"),
            m[0].classList.add("transparentImgsvg"),
            m[1].classList.remove("transparentImgsvg"),
            (d.style.backgroundColor = "#151a1f");
          for (let S = 1; S < o.length; S++) o[S - 1].style.color = "#ffffff";
        } else {
          h.style.setProperty("--color-input", "#000"),
            h.style.setProperty("--backgroud-label", "#f6f8fc"),
            h.style.setProperty("--dark-color", "#e2e6eb"),
            h.style.setProperty("--card-color", "#000"),
            (e.style.backgroundColor = "#fff"),
            (e.style.backgroundColor = "rgb(226, 230, 235)"),
            (y.style.backgroundColor = "#f6f8fc"),
            (y.style.color = "#1b1b1b"),
            (l.style.backgroundColor = "#f6f8fc"),
            (s.style.backgroundColor = "#f6f8fc"),
            u.style.setProperty("--burger-bg", "rgba(0, 0, 0, .15)"),
            u.style.setProperty("--burger-color", "#333");
          for (let S = 0; S < o.length; S++) o[S].style.color = "#1b1b1b";
          m[0].classList.remove("transparentImgsvg"),
            m[1].classList.add("transparentImgsvg");
        }
      });
    };
  return c.jsx(c.Fragment, {
    children: c.jsx("div", {
      className: "colorMode",
      children: c.jsxs("label", {
        className: "container floating-btn",
        children: [
          c.jsx("input", {
            type: "checkbox",
            id: "themeButton",
            className: "floating-btn ",
            onChange: n,
          }),
          c.jsx("svg", {
            viewBox: "0 0 384 512",
            height: "1em",
            xmlns: "http://www.w3.org/2000/svg",
            className: "moon",
            children: c.jsx("path", {
              d: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
            }),
          }),
          c.jsx("svg", {
            viewBox: "0 0 512 512",
            height: "1em",
            xmlns: "http://www.w3.org/2000/svg",
            className: "sun",
            children: c.jsx("path", {
              d: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z",
            }),
          }),
        ],
      }),
    }),
  });
}
function Lp() {
  const [e, t] = A.useState(null),
    n = (r) => {
      t(r), document.getElementById(r).scrollIntoView({ behavior: "smooth" });
    };
  return c.jsx(c.Fragment, {
    children: c.jsx("div", {
      className: "header",
      children: c.jsx("div", {
        className: "menu",
        children: c.jsxs("div", {
          className: "list",
          children: [
            c.jsx("img", { className: "logoSoft", src: At }),
            c.jsx("a", {
              className: "a",
              "data-target": "Inicio",
              onClick: () => n("Inicio"),
              children: "Inicio",
            }),
            c.jsx("a", {
              className: "a",
              "data-target": "AboutUs",
              onClick: () => n("AboutUs"),
              children: "Nosotros",
            }),
            c.jsx("a", {
              className: "a",
              "data-target": "Worths",
              onClick: () => n("Worths"),
              children: "Valores",
            }),
            c.jsx("a", {
              className: "a",
              "data-target": "Solutions",
              onClick: () => n("Solutions"),
              children: "Soluciones",
            }),
            c.jsx("a", {
              className: "a",
              "data-target": "Afiliations",
              onClick: () => n("Afiliations"),
              children: "Clientes",
            }),
            c.jsx("a", {
              className: "a",
              "data-target": "Contact",
              onClick: () => n("Contact"),
              children: "Contacto",
            }),
            c.jsxs("div", {
              className: "btnsContainer",
              children: [
                c.jsx(_p, {}),
                c.jsx("div", {
                  className: "menuDrop",
                  children: c.jsxs("label", {
                    className: "popup",
                    children: [
                      c.jsx("input", { className: "none", type: "checkbox" }),
                      c.jsxs("div", {
                        className: "burger",
                        tabIndex: "0",
                        children: [
                          c.jsx("span", { className: "burgerLine" }),
                          c.jsx("span", { className: "burgerLine" }),
                          c.jsx("span", { className: "burgerLine" }),
                        ],
                      }),
                      c.jsxs("nav", {
                        className: "popup-window",
                        children: [
                          c.jsx("legend", { children: "Softoil" }),
                          c.jsxs("ul", {
                            className: "list",
                            children: [
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "Inicio",
                                  onClick: () => n("Inicio"),
                                  children: "Inicio",
                                }),
                              }),
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "AboutUs",
                                  onClick: () => n("AboutUs"),
                                  children: "Nosotros",
                                }),
                              }),
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "Worths",
                                  onClick: () => n("Worths"),
                                  children: "Valores",
                                }),
                              }),
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "Solutions",
                                  onClick: () => n("Solutions"),
                                  children: "Soluciones",
                                }),
                              }),
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "Afiliations",
                                  onClick: () => n("Afiliations"),
                                  children: "Clientes",
                                }),
                              }),
                              c.jsx("li", {
                                children: c.jsx("a", {
                                  "data-target": "Contact",
                                  onClick: () => n("Contact"),
                                  children: "Contacto",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  });
}
function In(e) {
  const { title: t, content: n } = e.data;
  return c.jsx(c.Fragment, {
    children: c.jsxs("div", {
      className: "Textbox",
      children: [
        c.jsx("div", { className: "TextboxTitle", children: t }),
        c.jsx("div", { className: "TextboxContent", children: n }),
      ],
    }),
  });
}
function Mp() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("div", {
      className: "gridAbout",
      children: [
        c.jsxs("div", {
          className: "grid1",
          children: [
            c.jsx("p", { children: c.jsx("b", { children: "[Misión]" }) }),
            c.jsx("p", {
              children:
                "Ayudamos a nuestros clientes del sector de hidrocarburos a perfeccionar sus modelos operativos a través de soluciones tecnológicas y consultoría especializada.",
            }),
          ],
        }),
        c.jsxs("div", {
          className: "grid2",
          children: [
            c.jsx("p", { children: c.jsx("b", { children: "[Visión]" }) }),
            c.jsx("p", {
              children:
                "Posicionar a la marca como referente de soluciones informáticas en el sector de hidrocarburos.",
            }),
          ],
        }),
        c.jsx("div", {
          className: "grid3",
          children: c.jsxs("div", {
            className: "gridWorth",
            children: [
              c.jsx("p", { children: c.jsx("b", { children: "[Valores]" }) }),
              c.jsx("div", {
                children: c.jsxs("ul", {
                  children: [
                    c.jsx("li", { children: "Innovación" }),
                    c.jsx("li", { children: "Excelencia" }),
                    c.jsx("li", { children: "Diferencia" }),
                    c.jsx("li", { children: "Responsabilidad" }),
                    c.jsx("li", { children: "Lealtad" }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const ya = "assets/CrtVol-o4QO2xiO.png",
  zp = "assets/Sgm-oTXKH1Di.png";
function Sa(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function oo(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : Sa(t[n]) && Sa(e[n]) && Object.keys(t[n]).length > 0 && oo(e[n], t[n]);
  });
}
const Fc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function we() {
  const e = typeof document < "u" ? document : {};
  return oo(e, Fc), e;
}
const Op = {
  document: Fc,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function ie() {
  const e = typeof window < "u" ? window : {};
  return oo(e, Op), e;
}
function $p(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class pt extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), $p(this));
  }
}
function Sr(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...Sr(n)) : t.push(n);
    }),
    t
  );
}
function Bc(e, t) {
  return Array.prototype.filter.call(e, t);
}
function Ip(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function Dp(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    r = t.querySelectorAll(e);
  for (let i = 0; i < r.length; i += 1) n.push(r[i]);
  return n;
}
function _(e, t) {
  const n = ie(),
    r = we();
  let i = [];
  if (!t && e instanceof pt) return e;
  if (!e) return new pt(i);
  if (typeof e == "string") {
    const l = e.trim();
    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
      let s = "div";
      l.indexOf("<li") === 0 && (s = "ul"),
        l.indexOf("<tr") === 0 && (s = "tbody"),
        (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) && (s = "tr"),
        l.indexOf("<tbody") === 0 && (s = "table"),
        l.indexOf("<option") === 0 && (s = "select");
      const a = r.createElement(s);
      a.innerHTML = l;
      for (let o = 0; o < a.childNodes.length; o += 1) i.push(a.childNodes[o]);
    } else i = Dp(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof pt) return e;
    i = e;
  }
  return new pt(Ip(i));
}
_.fn = pt.prototype;
function Rp(...e) {
  const t = Sr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function Ap(...e) {
  const t = Sr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function Fp(...e) {
  const t = Sr(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((r) => {
      n.classList.toggle(r);
    });
  });
}
function Bp(...e) {
  const t = Sr(e.map((n) => n.split(" ")));
  return (
    Bc(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
      .length > 0
  );
}
function Vp(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
  return this;
}
function Hp(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function Wp(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function Up(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function Gp(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  function l(u) {
    const d = u.target;
    if (!d) return;
    const m = u.target.dom7EventData || [];
    if ((m.indexOf(u) < 0 && m.unshift(u), _(d).is(n))) r.apply(d, m);
    else {
      const h = _(d).parents();
      for (let y = 0; y < h.length; y += 1) _(h[y]).is(n) && r.apply(h[y], m);
    }
  }
  function s(u) {
    const d = u && u.target ? u.target.dom7EventData || [] : [];
    d.indexOf(u) < 0 && d.unshift(u), r.apply(this, d);
  }
  const a = t.split(" ");
  let o;
  for (let u = 0; u < this.length; u += 1) {
    const d = this[u];
    if (n)
      for (o = 0; o < a.length; o += 1) {
        const m = a[o];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}),
          d.dom7LiveListeners[m] || (d.dom7LiveListeners[m] = []),
          d.dom7LiveListeners[m].push({ listener: r, proxyListener: l }),
          d.addEventListener(m, l, i);
      }
    else
      for (o = 0; o < a.length; o += 1) {
        const m = a[o];
        d.dom7Listeners || (d.dom7Listeners = {}),
          d.dom7Listeners[m] || (d.dom7Listeners[m] = []),
          d.dom7Listeners[m].push({ listener: r, proxyListener: s }),
          d.addEventListener(m, s, i);
      }
  }
  return this;
}
function bp(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  const l = t.split(" ");
  for (let s = 0; s < l.length; s += 1) {
    const a = l[s];
    for (let o = 0; o < this.length; o += 1) {
      const u = this[o];
      let d;
      if (
        (!n && u.dom7Listeners
          ? (d = u.dom7Listeners[a])
          : n && u.dom7LiveListeners && (d = u.dom7LiveListeners[a]),
        d && d.length)
      )
        for (let m = d.length - 1; m >= 0; m -= 1) {
          const h = d[m];
          (r && h.listener === r) ||
          (r &&
            h.listener &&
            h.listener.dom7proxy &&
            h.listener.dom7proxy === r)
            ? (u.removeEventListener(a, h.proxyListener, i), d.splice(m, 1))
            : r ||
              (u.removeEventListener(a, h.proxyListener, i), d.splice(m, 1));
        }
    }
  }
  return this;
}
function Qp(...e) {
  const t = ie(),
    n = e[0].split(" "),
    r = e[1];
  for (let i = 0; i < n.length; i += 1) {
    const l = n[i];
    for (let s = 0; s < this.length; s += 1) {
      const a = this[s];
      if (t.CustomEvent) {
        const o = new t.CustomEvent(l, {
          detail: r,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = e.filter((u, d) => d > 0)),
          a.dispatchEvent(o),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function Yp(e) {
  const t = this;
  function n(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function Xp(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function qp(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function Kp() {
  if (this.length > 0) {
    const e = ie(),
      t = we(),
      n = this[0],
      r = n.getBoundingClientRect(),
      i = t.body,
      l = n.clientTop || i.clientTop || 0,
      s = n.clientLeft || i.clientLeft || 0,
      a = n === e ? e.scrollY : n.scrollTop,
      o = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + a - l, left: r.left + o - s };
  }
  return null;
}
function Zp() {
  const e = ie();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function Jp(e, t) {
  const n = ie();
  let r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (const i in e) this[r].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
    return this;
  }
  return this;
}
function eh(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function th(e) {
  const t = Bc(this, e);
  return _(t);
}
function nh(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function rh(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function ih(e) {
  const t = ie(),
    n = we(),
    r = this[0];
  let i, l;
  if (!r || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);
    for (i = _(e), l = 0; l < i.length; l += 1) if (i[l] === r) return !0;
    return !1;
  }
  if (e === n) return r === n;
  if (e === t) return r === t;
  if (e.nodeType || e instanceof pt) {
    for (i = e.nodeType ? [e] : e, l = 0; l < i.length; l += 1)
      if (i[l] === r) return !0;
    return !1;
  }
  return !1;
}
function lh() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function sh(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return _([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? _([]) : _([this[n]]);
  }
  return _([this[e]]);
}
function oh(...e) {
  let t;
  const n = we();
  for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const l = n.createElement("div");
        for (l.innerHTML = t; l.firstChild; ) this[i].appendChild(l.firstChild);
      } else if (t instanceof pt)
        for (let l = 0; l < t.length; l += 1) this[i].appendChild(t[l]);
      else this[i].appendChild(t);
  }
  return this;
}
function ah(e) {
  const t = we();
  let n, r;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
        this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
    } else if (e instanceof pt)
      for (r = 0; r < e.length; r += 1)
        this[n].insertBefore(e[r], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function uh(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && _(this[0].nextElementSibling).is(e)
        ? _([this[0].nextElementSibling])
        : _([])
      : this[0].nextElementSibling
        ? _([this[0].nextElementSibling])
        : _([])
    : _([]);
}
function ch(e) {
  const t = [];
  let n = this[0];
  if (!n) return _([]);
  for (; n.nextElementSibling; ) {
    const r = n.nextElementSibling;
    e ? _(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return _(t);
}
function dh(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && _(t.previousElementSibling).is(e)
        ? _([t.previousElementSibling])
        : _([])
      : t.previousElementSibling
        ? _([t.previousElementSibling])
        : _([]);
  }
  return _([]);
}
function fh(e) {
  const t = [];
  let n = this[0];
  if (!n) return _([]);
  for (; n.previousElementSibling; ) {
    const r = n.previousElementSibling;
    e ? _(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return _(t);
}
function ph(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e
        ? _(this[n].parentNode).is(e) && t.push(this[n].parentNode)
        : t.push(this[n].parentNode));
  return _(t);
}
function hh(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r; ) e ? _(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
  }
  return _(t);
}
function mh(e) {
  let t = this;
  return typeof e > "u" ? _([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function gh(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) t.push(r[i]);
  }
  return _(t);
}
function vh(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let i = 0; i < r.length; i += 1) (!e || _(r[i]).is(e)) && t.push(r[i]);
  }
  return _(t);
}
function yh() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const xa = {
  addClass: Rp,
  removeClass: Ap,
  hasClass: Bp,
  toggleClass: Fp,
  attr: Vp,
  removeAttr: Hp,
  transform: Wp,
  transition: Up,
  on: Gp,
  off: bp,
  trigger: Qp,
  transitionEnd: Yp,
  outerWidth: Xp,
  outerHeight: qp,
  styles: Zp,
  offset: Kp,
  css: Jp,
  each: eh,
  html: nh,
  text: rh,
  is: ih,
  index: lh,
  eq: sh,
  append: oh,
  prepend: ah,
  next: uh,
  nextAll: ch,
  prev: dh,
  prevAll: fh,
  parent: ph,
  parents: hh,
  closest: mh,
  find: gh,
  children: vh,
  filter: th,
  remove: yh,
};
Object.keys(xa).forEach((e) => {
  Object.defineProperty(_.fn, e, { value: xa[e], writable: !0 });
});
function Sh(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function cs(e, t = 0) {
  return setTimeout(e, t);
}
function pr() {
  return Date.now();
}
function xh(e) {
  const t = ie();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function wh(e, t = "x") {
  const n = ie();
  let r, i, l;
  const s = xh(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = s.transform || s.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          s.MozTransform ||
          s.OTransform ||
          s.MsTransform ||
          s.msTransform ||
          s.transform ||
          s
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
          ? (i = parseFloat(r[12]))
          : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
          ? (i = parseFloat(r[13]))
          : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Fr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function Ch(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ee(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !Ch(i)) {
      const l = Object.keys(Object(i)).filter((s) => n.indexOf(s) < 0);
      for (let s = 0, a = l.length; s < a; s += 1) {
        const o = l[s],
          u = Object.getOwnPropertyDescriptor(i, o);
        u !== void 0 &&
          u.enumerable &&
          (Fr(t[o]) && Fr(i[o])
            ? i[o].__swiper__
              ? (t[o] = i[o])
              : Ee(t[o], i[o])
            : !Fr(t[o]) && Fr(i[o])
              ? ((t[o] = {}), i[o].__swiper__ ? (t[o] = i[o]) : Ee(t[o], i[o]))
              : (t[o] = i[o]));
      }
    }
  }
  return t;
}
function Br(e, t, n) {
  e.style.setProperty(t, n);
}
function Vc({ swiper: e, targetPosition: t, side: n }) {
  const r = ie(),
    i = -e.translate;
  let l = null,
    s;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const o = t > i ? "next" : "prev",
    u = (m, h) => (o === "next" && m >= h) || (o === "prev" && m <= h),
    d = () => {
      (s = new Date().getTime()), l === null && (l = s);
      const m = Math.max(Math.min((s - l) / a, 1), 0),
        h = 0.5 - Math.cos(m * Math.PI) / 2;
      let y = i + h * (t - i);
      if ((u(y, t) && (y = t), e.wrapperEl.scrollTo({ [n]: y }), u(y, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: y });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(d);
    };
  d();
}
let fl;
function Eh() {
  const e = ie(),
    t = we();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let r = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            r = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return r;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function Hc() {
  return fl || (fl = Eh()), fl;
}
let pl;
function kh({ userAgent: e } = {}) {
  const t = Hc(),
    n = ie(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    s = n.screen.width,
    a = n.screen.height,
    o = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = r === "Win32";
  let y = r === "MacIntel";
  const S = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      y &&
      t.touch &&
      S.indexOf(`${s}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (y = !1)),
    o && !h && ((l.os = "android"), (l.android = !0)),
    (u || m || d) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function Th(e = {}) {
  return pl || (pl = kh(e)), pl;
}
let hl;
function Nh() {
  const e = ie();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return (
      n.indexOf("safari") >= 0 &&
      n.indexOf("chrome") < 0 &&
      n.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
  };
}
function jh() {
  return hl || (hl = Nh()), hl;
}
function Ph({ swiper: e, on: t, emit: n }) {
  const r = ie();
  let i = null,
    l = null;
  const s = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((d) => {
          l = r.requestAnimationFrame(() => {
            const { width: m, height: h } = e;
            let y = m,
              S = h;
            d.forEach(({ contentBoxSize: v, contentRect: x, target: p }) => {
              (p && p !== e.el) ||
                ((y = x ? x.width : (v[0] || v).inlineSize),
                (S = x ? x.height : (v[0] || v).blockSize));
            }),
              (y !== m || S !== h) && s();
          });
        })),
        i.observe(e.el));
    },
    o = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", s), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      o(),
        r.removeEventListener("resize", s),
        r.removeEventListener("orientationchange", u);
    });
}
function _h({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = ie(),
    s = (u, d = {}) => {
      const m = l.MutationObserver || l.WebkitMutationObserver,
        h = new m((y) => {
          if (y.length === 1) {
            r("observerUpdate", y[0]);
            return;
          }
          const S = function () {
            r("observerUpdate", y[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(S)
            : l.setTimeout(S, 0);
        });
      h.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: typeof d.childList > "u" ? !0 : d.childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        i.push(h);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = e.$el.parents();
          for (let d = 0; d < u.length; d += 1) s(u[d]);
        }
        s(e.$el[0], { childList: e.params.observeSlideChildren }),
          s(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    o = () => {
      i.forEach((u) => {
        u.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", o);
}
const Lh = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i(...l) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((s) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(i, [s, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[s] &&
            t.eventsListeners[s].forEach((a) => {
              a.apply(i, r);
            });
      }),
      t
    );
  },
};
function Mh() {
  const e = this;
  let t, n;
  const r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(r.css("padding-left") || 0, 10) -
        parseInt(r.css("padding-right") || 0, 10)),
      (n =
        n -
        parseInt(r.css("padding-top") || 0, 10) -
        parseInt(r.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function zh() {
  const e = this;
  function t(T) {
    return e.isHorizontal()
      ? T
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[T];
  }
  function n(T, M) {
    return parseFloat(T.getPropertyValue(t(M)) || 0);
  }
  const r = e.params,
    { $wrapperEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
    o = e.virtual && r.virtual.enabled,
    u = o ? e.virtual.slides.length : e.slides.length,
    d = i.children(`.${e.params.slideClass}`),
    m = o ? e.virtual.slides.length : d.length;
  let h = [];
  const y = [],
    S = [];
  let v = r.slidesOffsetBefore;
  typeof v == "function" && (v = r.slidesOffsetBefore.call(e));
  let x = r.slidesOffsetAfter;
  typeof x == "function" && (x = r.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    f = e.slidesGrid.length;
  let g = r.spaceBetween,
    w = -v,
    C = 0,
    N = 0;
  if (typeof l > "u") return;
  typeof g == "string" &&
    g.indexOf("%") >= 0 &&
    (g = (parseFloat(g.replace("%", "")) / 100) * l),
    (e.virtualSize = -g),
    s
      ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    r.centeredSlides &&
      r.cssMode &&
      (Br(e.wrapperEl, "--swiper-centered-offset-before", ""),
      Br(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const j = r.grid && r.grid.rows > 1 && e.grid;
  j && e.grid.initSlides(m);
  let k;
  const I =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (T) => typeof r.breakpoints[T].slidesPerView < "u",
    ).length > 0;
  for (let T = 0; T < m; T += 1) {
    k = 0;
    const M = d.eq(T);
    if ((j && e.grid.updateSlide(T, M, m, t), M.css("display") !== "none")) {
      if (r.slidesPerView === "auto") {
        I && (d[T].style[t("width")] = "");
        const O = getComputedStyle(M[0]),
          B = M[0].style.transform,
          Qe = M[0].style.webkitTransform;
        if (
          (B && (M[0].style.transform = "none"),
          Qe && (M[0].style.webkitTransform = "none"),
          r.roundLengths)
        )
          k = e.isHorizontal() ? M.outerWidth(!0) : M.outerHeight(!0);
        else {
          const Pt = n(O, "width"),
            _t = n(O, "padding-left"),
            Lt = n(O, "padding-right"),
            P = n(O, "margin-left"),
            z = n(O, "margin-right"),
            $ = O.getPropertyValue("box-sizing");
          if ($ && $ === "border-box") k = Pt + P + z;
          else {
            const { clientWidth: G, offsetWidth: K } = M[0];
            k = Pt + _t + Lt + P + z + (K - G);
          }
        }
        B && (M[0].style.transform = B),
          Qe && (M[0].style.webkitTransform = Qe),
          r.roundLengths && (k = Math.floor(k));
      } else
        (k = (l - (r.slidesPerView - 1) * g) / r.slidesPerView),
          r.roundLengths && (k = Math.floor(k)),
          d[T] && (d[T].style[t("width")] = `${k}px`);
      d[T] && (d[T].swiperSlideSize = k),
        S.push(k),
        r.centeredSlides
          ? ((w = w + k / 2 + C / 2 + g),
            C === 0 && T !== 0 && (w = w - l / 2 - g),
            T === 0 && (w = w - l / 2 - g),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            r.roundLengths && (w = Math.floor(w)),
            N % r.slidesPerGroup === 0 && h.push(w),
            y.push(w))
          : (r.roundLengths && (w = Math.floor(w)),
            (N - Math.min(e.params.slidesPerGroupSkip, N)) %
              e.params.slidesPerGroup ===
              0 && h.push(w),
            y.push(w),
            (w = w + k + g)),
        (e.virtualSize += k + g),
        (C = k),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + x),
    s &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
    r.setWrapperSize &&
      i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
    j && e.grid.updateWrapperSize(k, h, t),
    !r.centeredSlides)
  ) {
    const T = [];
    for (let M = 0; M < h.length; M += 1) {
      let O = h[M];
      r.roundLengths && (O = Math.floor(O)),
        h[M] <= e.virtualSize - l && T.push(O);
    }
    (h = T),
      Math.floor(e.virtualSize - l) - Math.floor(h[h.length - 1]) > 1 &&
        h.push(e.virtualSize - l);
  }
  if ((h.length === 0 && (h = [0]), r.spaceBetween !== 0)) {
    const T = e.isHorizontal() && s ? "marginLeft" : t("marginRight");
    d.filter((M, O) => (r.cssMode ? O !== d.length - 1 : !0)).css({
      [T]: `${g}px`,
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let T = 0;
    S.forEach((O) => {
      T += O + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (T -= r.spaceBetween);
    const M = T - l;
    h = h.map((O) => (O < 0 ? -v : O > M ? M + x : O));
  }
  if (r.centerInsufficientSlides) {
    let T = 0;
    if (
      (S.forEach((M) => {
        T += M + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (T -= r.spaceBetween),
      T < l)
    ) {
      const M = (l - T) / 2;
      h.forEach((O, B) => {
        h[B] = O - M;
      }),
        y.forEach((O, B) => {
          y[B] = O + M;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: d,
      snapGrid: h,
      slidesGrid: y,
      slidesSizesGrid: S,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    Br(e.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
      Br(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - S[S.length - 1] / 2}px`,
      );
    const T = -e.snapGrid[0],
      M = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((O) => O + T)),
      (e.slidesGrid = e.slidesGrid.map((O) => O + M));
  }
  if (
    (m !== u && e.emit("slidesLengthChange"),
    h.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    y.length !== f && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !o && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const T = `${r.containerModifierClass}backface-hidden`,
      M = e.$el.hasClass(T);
    m <= r.maxBackfaceHiddenSlides
      ? M || e.$el.addClass(T)
      : M && e.$el.removeClass(T);
  }
}
function Oh(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const s = (a) =>
    r
      ? t.slides.filter(
          (o) => parseInt(o.getAttribute("data-swiper-slide-index"), 10) === a,
        )[0]
      : t.slides.eq(a)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || _([])).each((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(s(a));
      }
  else n.push(s(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function $h() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal()
      ? t[n].offsetLeft
      : t[n].offsetTop;
}
function Ih(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let s = -e;
  i && (s = e),
    r.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const o = r[a];
    let u = o.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const d =
        (s + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      m =
        (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (o.swiperSlideSize + n.spaceBetween),
      h = -(s - u),
      y = h + t.slidesSizesGrid[a];
    ((h >= 0 && h < t.size - 1) ||
      (y > 1 && y <= t.size) ||
      (h <= 0 && y >= t.size)) &&
      (t.visibleSlides.push(o),
      t.visibleSlidesIndexes.push(a),
      r.eq(a).addClass(n.slideVisibleClass)),
      (o.progress = i ? -d : d),
      (o.originalProgress = i ? -m : m);
  }
  t.visibleSlides = _(t.visibleSlides);
}
function Dh(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: s } = t;
  const a = l,
    o = s;
  r === 0
    ? ((i = 0), (l = !0), (s = !0))
    : ((i = (e - t.minTranslate()) / r), (l = i <= 0), (s = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: l, isEnd: s }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit("reachBeginning toEdge"),
    s && !o && t.emit("reachEnd toEdge"),
    ((a && !l) || (o && !s)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function Rh() {
  const e = this,
    { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: l } = e,
    s = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`,
  );
  let a;
  s
    ? (a = e.$wrapperEl.find(
        `.${n.slideClass}[data-swiper-slide-index="${i}"]`,
      ))
    : (a = t.eq(i)),
    a.addClass(n.slideActiveClass),
    n.loop &&
      (a.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`,
            )
            .addClass(n.slideDuplicateActiveClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`,
            )
            .addClass(n.slideDuplicateActiveClass));
  let o = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && o.length === 0 && ((o = t.eq(0)), o.addClass(n.slideNextClass));
  let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && u.length === 0 && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
    n.loop &&
      (o.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`,
            )
            .addClass(n.slideDuplicateNextClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`,
            )
            .addClass(n.slideDuplicateNextClass),
      u.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`,
            )
            .addClass(n.slideDuplicatePrevClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`,
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function Ah(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: r,
      snapGrid: i,
      params: l,
      activeIndex: s,
      realIndex: a,
      snapIndex: o,
    } = t;
  let u = e,
    d;
  if (typeof u > "u") {
    for (let h = 0; h < r.length; h += 1)
      typeof r[h + 1] < "u"
        ? n >= r[h] && n < r[h + 1] - (r[h + 1] - r[h]) / 2
          ? (u = h)
          : n >= r[h] && n < r[h + 1] && (u = h + 1)
        : n >= r[h] && (u = h);
    l.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (i.indexOf(n) >= 0) d = i.indexOf(n);
  else {
    const h = Math.min(l.slidesPerGroupSkip, u);
    d = h + Math.floor((u - h) / l.slidesPerGroup);
  }
  if ((d >= i.length && (d = i.length - 1), u === s)) {
    d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  const m = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(t, {
    snapIndex: d,
    realIndex: m,
    previousIndex: s,
    activeIndex: u,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    a !== m && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function Fh(e) {
  const t = this,
    n = t.params,
    r = _(e).closest(`.${n.slideClass}`)[0];
  let i = !1,
    l;
  if (r) {
    for (let s = 0; s < t.slides.length; s += 1)
      if (t.slides[s] === r) {
        (i = !0), (l = s);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(_(r).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = l);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const Bh = {
  updateSize: Mh,
  updateSlides: zh,
  updateAutoHeight: Oh,
  updateSlidesOffset: $h,
  updateSlidesProgress: Ih,
  updateProgress: Dh,
  updateSlidesClasses: Rh,
  updateActiveIndex: Ah,
  updateClickedSlide: Fh,
};
function Vh(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, $wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let s = wh(l[0], e);
  return r && (s = -s), s || 0;
}
function Hh(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: i,
      $wrapperEl: l,
      wrapperEl: s,
      progress: a,
    } = n;
  let o = 0,
    u = 0;
  const d = 0;
  n.isHorizontal() ? (o = r ? -e : e) : (u = e),
    i.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -o
          : -u)
      : i.virtualTranslate ||
        l.transform(`translate3d(${o}px, ${u}px, ${d}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? o : u);
  let m;
  const h = n.maxTranslate() - n.minTranslate();
  h === 0 ? (m = 0) : (m = (e - n.minTranslate()) / h),
    m !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function Wh() {
  return -this.snapGrid[0];
}
function Uh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Gh(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: s, wrapperEl: a } = l;
  if (l.animating && s.preventInteractionOnTransition) return !1;
  const o = l.minTranslate(),
    u = l.maxTranslate();
  let d;
  if (
    (r && e > o ? (d = o) : r && e < u ? (d = u) : (d = e),
    l.updateProgress(d),
    s.cssMode)
  ) {
    const m = l.isHorizontal();
    if (t === 0) a[m ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!l.support.smoothScroll)
        return (
          Vc({ swiper: l, targetPosition: -d, side: m ? "left" : "top" }), !0
        );
      a.scrollTo({ [m ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(d),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(d),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (h) {
              !l ||
                l.destroyed ||
                (h.target === this &&
                  (l.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  l.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    l.onTranslateToWrapperTransitionEnd,
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.$wrapperEl[0].addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd,
          ),
          l.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            l.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
const bh = {
  getTranslate: Vh,
  setTranslate: Hh,
  minTranslate: Wh,
  maxTranslate: Uh,
  translateTo: Gh,
};
function Qh(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function Wc({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: l } = e;
  let s = n;
  if (
    (s || (i > l ? (s = "next") : i < l ? (s = "prev") : (s = "reset")),
    e.emit(`transition${r}`),
    t && i !== l)
  ) {
    if (s === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      s === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function Yh(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Wc({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Xh(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Wc({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const qh = { setTransition: Qh, transitionStart: Yh, transitionEnd: Xh };
function Kh(e = 0, t = this.params.speed, n = !0, r, i) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`,
    );
  if (typeof e == "string") {
    const g = parseInt(e, 10);
    if (!isFinite(g))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`,
      );
    e = g;
  }
  const l = this;
  let s = e;
  s < 0 && (s = 0);
  const {
    params: a,
    snapGrid: o,
    slidesGrid: u,
    previousIndex: d,
    activeIndex: m,
    rtlTranslate: h,
    wrapperEl: y,
    enabled: S,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!S && !r && !i))
    return !1;
  const v = Math.min(l.params.slidesPerGroupSkip, s);
  let x = v + Math.floor((s - v) / l.params.slidesPerGroup);
  x >= o.length && (x = o.length - 1);
  const p = -o[x];
  if (a.normalizeSlideIndex)
    for (let g = 0; g < u.length; g += 1) {
      const w = -Math.floor(p * 100),
        C = Math.floor(u[g] * 100),
        N = Math.floor(u[g + 1] * 100);
      typeof u[g + 1] < "u"
        ? w >= C && w < N - (N - C) / 2
          ? (s = g)
          : w >= C && w < N && (s = g + 1)
        : w >= C && (s = g);
    }
  if (
    l.initialized &&
    s !== m &&
    ((!l.allowSlideNext && p < l.translate && p < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        p > l.translate &&
        p > l.maxTranslate() &&
        (m || 0) !== s))
  )
    return !1;
  s !== (d || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(p);
  let f;
  if (
    (s > m ? (f = "next") : s < m ? (f = "prev") : (f = "reset"),
    (h && -p === l.translate) || (!h && p === l.translate))
  )
    return (
      l.updateActiveIndex(s),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(p),
      f !== "reset" && (l.transitionStart(n, f), l.transitionEnd(n, f)),
      !1
    );
  if (a.cssMode) {
    const g = l.isHorizontal(),
      w = h ? p : -p;
    if (t === 0) {
      const C = l.virtual && l.params.virtual.enabled;
      C &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        (y[g ? "scrollLeft" : "scrollTop"] = w),
        C &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""),
              (l._swiperImmediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          Vc({ swiper: l, targetPosition: w, side: g ? "left" : "top" }), !0
        );
      y.scrollTo({ [g ? "left" : "top"]: w, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(p),
    l.updateActiveIndex(s),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, f),
    t === 0
      ? l.transitionEnd(n, f)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (w) {
            !l ||
              l.destroyed ||
              (w.target === this &&
                (l.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd,
                ),
                l.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd,
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, f)));
          }),
        l.$wrapperEl[0].addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd,
        ),
        l.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          l.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function Zh(e = 0, t = this.params.speed, n = !0, r) {
  if (typeof e == "string") {
    const s = parseInt(e, 10);
    if (!isFinite(s))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`,
      );
    e = s;
  }
  const i = this;
  let l = e;
  return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
}
function Jh(e = this.params.speed, t = !0, n) {
  const r = this,
    { animating: i, enabled: l, params: s } = r;
  if (!l) return r;
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a;
  if (s.loop) {
    if (i && s.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + o, e, t, n);
}
function em(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      animating: l,
      snapGrid: s,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: u,
    } = r;
  if (!u) return r;
  if (i.loop) {
    if (l && i.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  const d = o ? r.translate : -r.translate;
  function m(x) {
    return x < 0 ? -Math.floor(Math.abs(x)) : Math.floor(x);
  }
  const h = m(d),
    y = s.map((x) => m(x));
  let S = s[y.indexOf(h) - 1];
  if (typeof S > "u" && i.cssMode) {
    let x;
    s.forEach((p, f) => {
      h >= p && (x = f);
    }),
      typeof x < "u" && (S = s[x > 0 ? x - 1 : x]);
  }
  let v = 0;
  if (
    (typeof S < "u" &&
      ((v = a.indexOf(S)),
      v < 0 && (v = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((v = v - r.slidesPerViewDynamic("previous", !0) + 1),
        (v = Math.max(v, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const x =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(x, e, t, n);
  }
  return r.slideTo(v, e, t, n);
}
function tm(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function nm(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let l = i.activeIndex;
  const s = Math.min(i.params.slidesPerGroupSkip, l),
    a = s + Math.floor((l - s) / i.params.slidesPerGroup),
    o = i.rtlTranslate ? i.translate : -i.translate;
  if (o >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      d = i.snapGrid[a + 1];
    o - u > (d - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      d = i.snapGrid[a];
    o - u <= (d - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function rm() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(_(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`,
              )
              .eq(0)
              .index()),
            cs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`,
              )
              .eq(0)
              .index()),
            cs(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i);
  } else e.slideTo(i);
}
const im = {
  slideTo: Kh,
  slideToLoop: Zh,
  slideNext: Jh,
  slidePrev: em,
  slideReset: tm,
  slideToClosest: nm,
  slideToClickedSlide: rm,
};
function lm() {
  const e = this,
    t = we(),
    { params: n, $wrapperEl: r } = e,
    i = r.children().length > 0 ? _(r.children()[0].parentNode) : r;
  i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let l = i.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const o = n.slidesPerGroup - (l.length % n.slidesPerGroup);
    if (o !== n.slidesPerGroup) {
      for (let u = 0; u < o; u += 1) {
        const d = _(t.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`,
        );
        i.append(d);
      }
      l = i.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = l.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(n.loopedSlides || n.slidesPerView, 10),
    )),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > l.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = l.length);
  const s = [],
    a = [];
  l.each((o, u) => {
    _(o).attr("data-swiper-slide-index", u);
  });
  for (let o = 0; o < e.loopedSlides; o += 1) {
    const u = o - Math.floor(o / l.length) * l.length;
    a.push(l.eq(u)[0]), s.unshift(l.eq(l.length - u - 1)[0]);
  }
  for (let o = 0; o < a.length; o += 1)
    i.append(_(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let o = s.length - 1; o >= 0; o -= 1)
    i.prepend(_(s[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function sm() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: r,
    allowSlidePrev: i,
    allowSlideNext: l,
    snapGrid: s,
    rtlTranslate: a,
  } = e;
  let o;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const d = -s[t] - e.getTranslate();
  t < r
    ? ((o = n.length - r * 3 + t),
      (o += r),
      e.slideTo(o, 0, !1, !0) &&
        d !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - d))
    : t >= n.length - r &&
      ((o = -n.length + t + r),
      (o += r),
      e.slideTo(o, 0, !1, !0) &&
        d !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - d)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = l),
    e.emit("loopFix");
}
function om() {
  const e = this,
    { $wrapperEl: t, params: n, slides: r } = e;
  t
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`,
    )
    .remove(),
    r.removeAttr("data-swiper-slide-index");
}
const am = { loopCreate: lm, loopFix: sm, loopDestroy: om };
function um(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
}
function cm() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const dm = { setGrabCursor: um, unsetGrabCursor: cm };
function fm(e, t = this) {
  function n(r) {
    if (!r || r === we() || r === ie()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function pm(e) {
  const t = this,
    n = we(),
    r = ie(),
    i = t.touchEventsData,
    { params: l, touches: s, enabled: a } = t;
  if (!a || (t.animating && l.preventInteractionOnTransition)) return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let u = _(o.target);
  if (
    (l.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length) ||
    ((i.isTouchEvent = o.type === "touchstart"),
    !i.isTouchEvent && "which" in o && o.which === 3) ||
    (!i.isTouchEvent && "button" in o && o.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const d = !!l.noSwipingClass && l.noSwipingClass !== "",
    m = e.composedPath ? e.composedPath() : e.path;
  d && o.target && o.target.shadowRoot && m && (u = _(m[0]));
  const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    y = !!(o.target && o.target.shadowRoot);
  if (l.noSwiping && (y ? fm(h, u[0]) : u.closest(h)[0])) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !u.closest(l.swipeHandler)[0]) return;
  (s.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX),
    (s.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY);
  const S = s.currentX,
    v = s.currentY,
    x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    p = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (x && (S <= p || S >= r.innerWidth - p))
    if (x === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (s.startX = S),
    (s.startY = v),
    (i.touchStartTime = pr()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1),
    o.type !== "touchstart")
  ) {
    let f = !0;
    u.is(i.focusableElements) &&
      ((f = !1), u[0].nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        _(n.activeElement).is(i.focusableElements) &&
        n.activeElement !== u[0] &&
        n.activeElement.blur();
    const g = f && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || g) &&
      !u[0].isContentEditable &&
      o.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !l.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", o);
}
function hm(e) {
  const t = we(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
  if (!a) return;
  let o = e;
  if ((o.originalEvent && (o = o.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
    return;
  }
  if (r.isTouchEvent && o.type !== "touchmove") return;
  const u =
      o.type === "touchmove" &&
      o.targetTouches &&
      (o.targetTouches[0] || o.changedTouches[0]),
    d = o.type === "touchmove" ? u.pageX : o.pageX,
    m = o.type === "touchmove" ? u.pageY : o.pageY;
  if (o.preventedByNestedSwiper) {
    (l.startX = d), (l.startY = m);
    return;
  }
  if (!n.allowTouchMove) {
    _(o.target).is(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: d, startY: m, currentX: d, currentY: m }),
        (r.touchStartTime = pr()));
    return;
  }
  if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (m < l.startY && n.translate <= n.maxTranslate()) ||
        (m > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (d < l.startX && n.translate <= n.maxTranslate()) ||
      (d > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    r.isTouchEvent &&
    t.activeElement &&
    o.target === t.activeElement &&
    _(o.target).is(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", o),
    o.targetTouches && o.targetTouches.length > 1)
  )
    return;
  (l.currentX = d), (l.currentY = m);
  const h = l.currentX - l.startX,
    y = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(h ** 2 + y ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let p;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : h * h + y * y >= 25 &&
        ((p = (Math.atan2(Math.abs(y), Math.abs(h)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? p > i.touchAngle
          : 90 - p > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", o),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && o.cancelable && o.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && o.stopPropagation(),
    r.isMoved ||
      (i.loop && !i.cssMode && n.loopFix(),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", o)),
    n.emit("sliderMove", o),
    (r.isMoved = !0);
  let S = n.isHorizontal() ? h : y;
  (l.diff = S),
    (S *= i.touchRatio),
    s && (S = -S),
    (n.swipeDirection = S > 0 ? "prev" : "next"),
    (r.currentTranslate = S + r.startTranslate);
  let v = !0,
    x = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (x = 0),
    S > 0 && r.currentTranslate > n.minTranslate()
      ? ((v = !1),
        i.resistance &&
          (r.currentTranslate =
            n.minTranslate() -
            1 +
            (-n.minTranslate() + r.startTranslate + S) ** x))
      : S < 0 &&
        r.currentTranslate < n.maxTranslate() &&
        ((v = !1),
        i.resistance &&
          (r.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - r.startTranslate - S) ** x)),
    v && (o.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(S) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function mm(e) {
  const t = this,
    n = t.touchEventsData,
    { params: r, touches: i, rtlTranslate: l, slidesGrid: s, enabled: a } = t;
  if (!a) return;
  let o = e;
  if (
    (o.originalEvent && (o = o.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", o),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const u = pr(),
    d = u - n.touchStartTime;
  if (t.allowClick) {
    const f = o.path || (o.composedPath && o.composedPath());
    t.updateClickedSlide((f && f[0]) || o.target),
      t.emit("tap click", o),
      d < 300 &&
        u - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", o);
  }
  if (
    ((n.lastClickTime = pr()),
    cs(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      i.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let m;
  if (
    (r.followFinger
      ? (m = l ? t.translate : -t.translate)
      : (m = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: m });
    return;
  }
  let h = 0,
    y = t.slidesSizesGrid[0];
  for (
    let f = 0;
    f < s.length;
    f += f < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const g = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof s[f + g] < "u"
      ? m >= s[f] && m < s[f + g] && ((h = f), (y = s[f + g] - s[f]))
      : m >= s[f] && ((h = f), (y = s[s.length - 1] - s[s.length - 2]));
  }
  let S = null,
    v = null;
  r.rewind &&
    (t.isBeginning
      ? (v =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (S = 0));
  const x = (m - s[h]) / y,
    p = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (d > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (x >= r.longSwipesRatio
        ? t.slideTo(r.rewind && t.isEnd ? S : h + p)
        : t.slideTo(h)),
      t.swipeDirection === "prev" &&
        (x > 1 - r.longSwipesRatio
          ? t.slideTo(h + p)
          : v !== null && x < 0 && Math.abs(x) > r.longSwipesRatio
            ? t.slideTo(v)
            : t.slideTo(h));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
      ? o.target === t.navigation.nextEl
        ? t.slideTo(h + p)
        : t.slideTo(h)
      : (t.swipeDirection === "next" && t.slideTo(S !== null ? S : h + p),
        t.swipeDirection === "prev" && t.slideTo(v !== null ? v : h));
  }
}
function wa() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function gm(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function vm() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let Ca = !1;
function ym() {}
const Uc = (e, t) => {
  const n = we(),
    {
      params: r,
      touchEvents: i,
      el: l,
      wrapperEl: s,
      device: a,
      support: o,
    } = e,
    u = !!r.nested,
    d = t === "on" ? "addEventListener" : "removeEventListener",
    m = t;
  if (!o.touch)
    l[d](i.start, e.onTouchStart, !1),
      n[d](i.move, e.onTouchMove, u),
      n[d](i.end, e.onTouchEnd, !1);
  else {
    const h =
      i.start === "touchstart" && o.passiveListener && r.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    l[d](i.start, e.onTouchStart, h),
      l[d](
        i.move,
        e.onTouchMove,
        o.passiveListener ? { passive: !1, capture: u } : u,
      ),
      l[d](i.end, e.onTouchEnd, h),
      i.cancel && l[d](i.cancel, e.onTouchEnd, h);
  }
  (r.preventClicks || r.preventClicksPropagation) &&
    l[d]("click", e.onClick, !0),
    r.cssMode && s[d]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[m](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          wa,
          !0,
        )
      : e[m]("observerUpdate", wa, !0);
};
function Sm() {
  const e = this,
    t = we(),
    { params: n, support: r } = e;
  (e.onTouchStart = pm.bind(e)),
    (e.onTouchMove = hm.bind(e)),
    (e.onTouchEnd = mm.bind(e)),
    n.cssMode && (e.onScroll = vm.bind(e)),
    (e.onClick = gm.bind(e)),
    r.touch && !Ca && (t.addEventListener("touchstart", ym), (Ca = !0)),
    Uc(e, "on");
}
function xm() {
  Uc(this, "off");
}
const wm = { attachEvents: Sm, detachEvents: xm },
  Ea = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Cm() {
  const e = this,
    {
      activeIndex: t,
      initialized: n,
      loopedSlides: r = 0,
      params: i,
      $el: l,
    } = e,
    s = i.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const u = (a in s ? s[a] : void 0) || e.originalParams,
    d = Ea(e, i),
    m = Ea(e, u),
    h = i.enabled;
  d && !m
    ? (l.removeClass(
        `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !d &&
      m &&
      (l.addClass(`${i.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && i.grid.fill === "column")) &&
        l.addClass(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((x) => {
      const p = i[x] && i[x].enabled,
        f = u[x] && u[x].enabled;
      p && !f && e[x].disable(), !p && f && e[x].enable();
    });
  const y = u.direction && u.direction !== i.direction,
    S = i.loop && (u.slidesPerView !== i.slidesPerView || y);
  y && n && e.changeDirection(), Ee(e.params, u);
  const v = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    h && !v ? e.disable() : !h && v && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", u),
    S &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - r + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", u);
}
function Em(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = ie(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    s = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const o = parseFloat(a.substr(1));
        return { value: l * o, point: a };
      }
      return { value: a, point: a };
    });
  s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
  for (let a = 0; a < s.length; a += 1) {
    const { point: o, value: u } = s[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = o)
      : u <= n.clientWidth && (r = o);
  }
  return r || "max";
}
const km = { setBreakpoint: Cm, getBreakpoint: Em };
function Tm(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Nm() {
  const e = this,
    { classNames: t, params: n, rtl: r, $el: i, device: l, support: s } = e,
    a = Tm(
      [
        "initialized",
        n.direction,
        { "pointer-events": !s.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    );
  t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function jm() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
const Pm = { addClasses: Nm, removeClasses: jm };
function _m(e, t, n, r, i, l) {
  const s = ie();
  let a;
  function o() {
    l && l();
  }
  !_(e).parent("picture")[0] && (!e.complete || !i) && t
    ? ((a = new s.Image()),
      (a.onload = o),
      (a.onerror = o),
      r && (a.sizes = r),
      n && (a.srcset = n),
      t && (a.src = t))
    : o();
}
function Lm() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(
      r,
      r.currentSrc || r.getAttribute("src"),
      r.srcset || r.getAttribute("srcset"),
      r.sizes || r.getAttribute("sizes"),
      !0,
      t,
    );
  }
}
const Mm = { loadImage: _m, preloadImages: Lm };
function zm() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Om = { checkOverflow: zm },
  ka = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function $m(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      Ee(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in l))
    ) {
      Ee(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ee(t, r);
  };
}
const ml = {
    eventsEmitter: Lh,
    update: Bh,
    translate: bh,
    transition: qh,
    slide: im,
    loop: am,
    grabCursor: dm,
    events: wm,
    breakpoints: km,
    checkOverflow: Om,
    classes: Pm,
    images: Mm,
  },
  gl = {};
let bt = class Ye {
  constructor(...t) {
    let n, r;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (r = t[0])
        : ([n, r] = t),
      r || (r = {}),
      (r = Ee({}, r)),
      n && !r.el && (r.el = n),
      r.el && _(r.el).length > 1)
    ) {
      const a = [];
      return (
        _(r.el).each((o) => {
          const u = Ee({}, r, { el: o });
          a.push(new Ye(u));
        }),
        a
      );
    }
    const i = this;
    (i.__swiper__ = !0),
      (i.support = Hc()),
      (i.device = Th({ userAgent: r.userAgent })),
      (i.browser = jh()),
      (i.eventsListeners = {}),
      (i.eventsAnyListeners = []),
      (i.modules = [...i.__modules__]),
      r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
    const l = {};
    i.modules.forEach((a) => {
      a({
        swiper: i,
        extendParams: $m(r, l),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i),
      });
    });
    const s = Ee({}, ka, l);
    return (
      (i.params = Ee({}, s, gl, r)),
      (i.originalParams = Ee({}, i.params)),
      (i.passedParams = Ee({}, r)),
      i.params &&
        i.params.on &&
        Object.keys(i.params.on).forEach((a) => {
          i.on(a, i.params.on[a]);
        }),
      i.params && i.params.onAny && i.onAny(i.params.onAny),
      (i.$ = _),
      Object.assign(i, {
        enabled: i.params.enabled,
        el: n,
        classNames: [],
        slides: _(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return i.params.direction === "horizontal";
        },
        isVertical() {
          return i.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: (function () {
          const o = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (i.touchEventsTouch = {
              start: o[0],
              move: o[1],
              end: o[2],
              cancel: o[3],
            }),
            (i.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            i.support.touch || !i.params.simulateTouch
              ? i.touchEventsTouch
              : i.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: pr(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      i.emit("_swiper"),
      i.params.init && i.init(),
      i
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      s = (r.maxTranslate() - i) * t + i;
    r.translateTo(s, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: s,
        slidesSizesGrid: a,
        size: o,
        activeIndex: u,
      } = r;
    let d = 1;
    if (i.centeredSlides) {
      let m = l[u].swiperSlideSize,
        h;
      for (let y = u + 1; y < l.length; y += 1)
        l[y] &&
          !h &&
          ((m += l[y].swiperSlideSize), (d += 1), m > o && (h = !0));
      for (let y = u - 1; y >= 0; y -= 1)
        l[y] &&
          !h &&
          ((m += l[y].swiperSlideSize), (d += 1), m > o && (h = !0));
    } else if (t === "current")
      for (let m = u + 1; m < l.length; m += 1)
        (n ? s[m] + a[m] - s[u] < o : s[m] - s[u] < o) && (d += 1);
    else for (let m = u - 1; m >= 0; m -= 1) s[u] - s[m] < o && (d += 1);
    return d;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const s = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (l = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (l = t.slideTo(t.activeIndex, 0, !1, !0)),
        l || i()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.$el
          .removeClass(`${r.params.containerModifierClass}${i}`)
          .addClass(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.each((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const r = _(t || n.params.el);
    if (((t = r[0]), !t)) return !1;
    t.swiper = n;
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let s = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const a = _(t.shadowRoot.querySelector(i()));
        return (a.children = (o) => r.children(o)), a;
      }
      return r.children ? r.children(i()) : _(r).children(i());
    })();
    if (s.length === 0 && n.params.createElements) {
      const o = we().createElement("div");
      (s = _(o)),
        (o.className = n.params.wrapperClass),
        r.append(o),
        r.children(`.${n.params.slideClass}`).each((u) => {
          s.append(u);
        });
    }
    return (
      Object.assign(n, {
        $el: r,
        el: t,
        $wrapperEl: s,
        wrapperEl: s[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
        wrongRTL: s.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            ),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, $el: l, $wrapperEl: s, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttr("style"),
          s.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ].join(" "),
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((o) => {
          r.off(o);
        }),
        t !== !1 && ((r.$el[0].swiper = null), Sh(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ee(gl, t);
  }
  static get extendedDefaults() {
    return gl;
  }
  static get defaults() {
    return ka;
  }
  static installModule(t) {
    Ye.prototype.__modules__ || (Ye.prototype.__modules__ = []);
    const n = Ye.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ye.installModule(n)), Ye)
      : (Ye.installModule(t), Ye);
  }
};
Object.keys(ml).forEach((e) => {
  Object.keys(ml[e]).forEach((t) => {
    bt.prototype[t] = ml[e][t];
  });
});
bt.use([Ph, _h]);
function Gc(e, t, n, r) {
  const i = we();
  return (
    e.params.createElements &&
      Object.keys(r).forEach((l) => {
        if (!n[l] && n.auto === !0) {
          let s = e.$el.children(`.${r[l]}`)[0];
          s ||
            ((s = i.createElement("div")),
            (s.className = r[l]),
            e.$el.append(s)),
            (n[l] = s),
            (t[l] = s);
        }
      }),
    n
  );
}
function Im({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    });
  function i(y) {
    let S;
    return (
      y &&
        ((S = _(y)),
        e.params.uniqueNavElements &&
          typeof y == "string" &&
          S.length > 1 &&
          e.$el.find(y).length === 1 &&
          (S = e.$el.find(y))),
      S
    );
  }
  function l(y, S) {
    const v = e.params.navigation;
    y &&
      y.length > 0 &&
      (y[S ? "addClass" : "removeClass"](v.disabledClass),
      y[0] && y[0].tagName === "BUTTON" && (y[0].disabled = S),
      e.params.watchOverflow &&
        e.enabled &&
        y[e.isLocked ? "addClass" : "removeClass"](v.lockClass));
  }
  function s() {
    if (e.params.loop) return;
    const { $nextEl: y, $prevEl: S } = e.navigation;
    l(S, e.isBeginning && !e.params.rewind), l(y, e.isEnd && !e.params.rewind);
  }
  function a(y) {
    y.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function o(y) {
    y.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function u() {
    const y = e.params.navigation;
    if (
      ((e.params.navigation = Gc(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(y.nextEl || y.prevEl))
    )
      return;
    const S = i(y.nextEl),
      v = i(y.prevEl);
    S && S.length > 0 && S.on("click", o),
      v && v.length > 0 && v.on("click", a),
      Object.assign(e.navigation, {
        $nextEl: S,
        nextEl: S && S[0],
        $prevEl: v,
        prevEl: v && v[0],
      }),
      e.enabled || (S && S.addClass(y.lockClass), v && v.addClass(y.lockClass));
  }
  function d() {
    const { $nextEl: y, $prevEl: S } = e.navigation;
    y &&
      y.length &&
      (y.off("click", o), y.removeClass(e.params.navigation.disabledClass)),
      S &&
        S.length &&
        (S.off("click", a), S.removeClass(e.params.navigation.disabledClass));
  }
  n("init", () => {
    e.params.navigation.enabled === !1 ? h() : (u(), s());
  }),
    n("toEdge fromEdge lock unlock", () => {
      s();
    }),
    n("destroy", () => {
      d();
    }),
    n("enable disable", () => {
      const { $nextEl: y, $prevEl: S } = e.navigation;
      y &&
        y[e.enabled ? "removeClass" : "addClass"](
          e.params.navigation.lockClass,
        ),
        S &&
          S[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass,
          );
    }),
    n("click", (y, S) => {
      const { $nextEl: v, $prevEl: x } = e.navigation,
        p = S.target;
      if (e.params.navigation.hideOnClick && !_(p).is(x) && !_(p).is(v)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === p || e.pagination.el.contains(p))
        )
          return;
        let f;
        v
          ? (f = v.hasClass(e.params.navigation.hiddenClass))
          : x && (f = x.hasClass(e.params.navigation.hiddenClass)),
          r(f === !0 ? "navigationShow" : "navigationHide"),
          v && v.toggleClass(e.params.navigation.hiddenClass),
          x && x.toggleClass(e.params.navigation.hiddenClass);
      }
    });
  const m = () => {
      e.$el.removeClass(e.params.navigation.navigationDisabledClass), u(), s();
    },
    h = () => {
      e.$el.addClass(e.params.navigation.navigationDisabledClass), d();
    };
  Object.assign(e.navigation, {
    enable: m,
    disable: h,
    update: s,
    init: u,
    destroy: d,
  });
}
function Kt(e = "") {
  return `.${e
    .trim()
    .replace(/([\.:!\/])/g, "\\$1")
    .replace(/ /g, ".")}`;
}
function Dm({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (v) => v,
      formatFractionTotal: (v) => v,
      bulletClass: `${i}-bullet`,
      bulletActiveClass: `${i}-bullet-active`,
      modifierClass: `${i}-`,
      currentClass: `${i}-current`,
      totalClass: `${i}-total`,
      hiddenClass: `${i}-hidden`,
      progressbarFillClass: `${i}-progressbar-fill`,
      progressbarOppositeClass: `${i}-progressbar-opposite`,
      clickableClass: `${i}-clickable`,
      lockClass: `${i}-lock`,
      horizontalClass: `${i}-horizontal`,
      verticalClass: `${i}-vertical`,
      paginationDisabledClass: `${i}-disabled`,
    },
  }),
    (e.pagination = { el: null, $el: null, bullets: [] });
  let l,
    s = 0;
  function a() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      !e.pagination.$el ||
      e.pagination.$el.length === 0
    );
  }
  function o(v, x) {
    const { bulletActiveClass: p } = e.params.pagination;
    v[x]().addClass(`${p}-${x}`)[x]().addClass(`${p}-${x}-${x}`);
  }
  function u() {
    const v = e.rtl,
      x = e.params.pagination;
    if (a()) return;
    const p =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      f = e.pagination.$el;
    let g;
    const w = e.params.loop
      ? Math.ceil((p - e.loopedSlides * 2) / e.params.slidesPerGroup)
      : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((g = Math.ceil(
            (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup,
          )),
          g > p - 1 - e.loopedSlides * 2 && (g -= p - e.loopedSlides * 2),
          g > w - 1 && (g -= w),
          g < 0 && e.params.paginationType !== "bullets" && (g = w + g))
        : typeof e.snapIndex < "u"
          ? (g = e.snapIndex)
          : (g = e.activeIndex || 0),
      x.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const C = e.pagination.bullets;
      let N, j, k;
      if (
        (x.dynamicBullets &&
          ((l = C.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
          f.css(
            e.isHorizontal() ? "width" : "height",
            `${l * (x.dynamicMainBullets + 4)}px`,
          ),
          x.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((s += g - (e.previousIndex - e.loopedSlides || 0)),
            s > x.dynamicMainBullets - 1
              ? (s = x.dynamicMainBullets - 1)
              : s < 0 && (s = 0)),
          (N = Math.max(g - s, 0)),
          (j = N + (Math.min(C.length, x.dynamicMainBullets) - 1)),
          (k = (j + N) / 2)),
        C.removeClass(
          ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
            .map((I) => `${x.bulletActiveClass}${I}`)
            .join(" "),
        ),
        f.length > 1)
      )
        C.each((I) => {
          const T = _(I),
            M = T.index();
          M === g && T.addClass(x.bulletActiveClass),
            x.dynamicBullets &&
              (M >= N && M <= j && T.addClass(`${x.bulletActiveClass}-main`),
              M === N && o(T, "prev"),
              M === j && o(T, "next"));
        });
      else {
        const I = C.eq(g),
          T = I.index();
        if ((I.addClass(x.bulletActiveClass), x.dynamicBullets)) {
          const M = C.eq(N),
            O = C.eq(j);
          for (let B = N; B <= j; B += 1)
            C.eq(B).addClass(`${x.bulletActiveClass}-main`);
          if (e.params.loop)
            if (T >= C.length) {
              for (let B = x.dynamicMainBullets; B >= 0; B -= 1)
                C.eq(C.length - B).addClass(`${x.bulletActiveClass}-main`);
              C.eq(C.length - x.dynamicMainBullets - 1).addClass(
                `${x.bulletActiveClass}-prev`,
              );
            } else o(M, "prev"), o(O, "next");
          else o(M, "prev"), o(O, "next");
        }
      }
      if (x.dynamicBullets) {
        const I = Math.min(C.length, x.dynamicMainBullets + 4),
          T = (l * I - l) / 2 - k * l,
          M = v ? "right" : "left";
        C.css(e.isHorizontal() ? M : "top", `${T}px`);
      }
    }
    if (
      (x.type === "fraction" &&
        (f.find(Kt(x.currentClass)).text(x.formatFractionCurrent(g + 1)),
        f.find(Kt(x.totalClass)).text(x.formatFractionTotal(w))),
      x.type === "progressbar")
    ) {
      let C;
      x.progressbarOpposite
        ? (C = e.isHorizontal() ? "vertical" : "horizontal")
        : (C = e.isHorizontal() ? "horizontal" : "vertical");
      const N = (g + 1) / w;
      let j = 1,
        k = 1;
      C === "horizontal" ? (j = N) : (k = N),
        f
          .find(Kt(x.progressbarFillClass))
          .transform(`translate3d(0,0,0) scaleX(${j}) scaleY(${k})`)
          .transition(e.params.speed);
    }
    x.type === "custom" && x.renderCustom
      ? (f.html(x.renderCustom(e, g + 1, w)), r("paginationRender", f[0]))
      : r("paginationUpdate", f[0]),
      e.params.watchOverflow &&
        e.enabled &&
        f[e.isLocked ? "addClass" : "removeClass"](x.lockClass);
  }
  function d() {
    const v = e.params.pagination;
    if (a()) return;
    const x =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      p = e.pagination.$el;
    let f = "";
    if (v.type === "bullets") {
      let g = e.params.loop
        ? Math.ceil((x - e.loopedSlides * 2) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode &&
        e.params.freeMode.enabled &&
        !e.params.loop &&
        g > x &&
        (g = x);
      for (let w = 0; w < g; w += 1)
        v.renderBullet
          ? (f += v.renderBullet.call(e, w, v.bulletClass))
          : (f += `<${v.bulletElement} class="${v.bulletClass}"></${v.bulletElement}>`);
      p.html(f), (e.pagination.bullets = p.find(Kt(v.bulletClass)));
    }
    v.type === "fraction" &&
      (v.renderFraction
        ? (f = v.renderFraction.call(e, v.currentClass, v.totalClass))
        : (f = `<span class="${v.currentClass}"></span> / <span class="${v.totalClass}"></span>`),
      p.html(f)),
      v.type === "progressbar" &&
        (v.renderProgressbar
          ? (f = v.renderProgressbar.call(e, v.progressbarFillClass))
          : (f = `<span class="${v.progressbarFillClass}"></span>`),
        p.html(f)),
      v.type !== "custom" && r("paginationRender", e.pagination.$el[0]);
  }
  function m() {
    e.params.pagination = Gc(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" },
    );
    const v = e.params.pagination;
    if (!v.el) return;
    let x = _(v.el);
    x.length !== 0 &&
      (e.params.uniqueNavElements &&
        typeof v.el == "string" &&
        x.length > 1 &&
        ((x = e.$el.find(v.el)),
        x.length > 1 &&
          (x = x.filter((p) => _(p).parents(".swiper")[0] === e.el))),
      v.type === "bullets" && v.clickable && x.addClass(v.clickableClass),
      x.addClass(v.modifierClass + v.type),
      x.addClass(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
      v.type === "bullets" &&
        v.dynamicBullets &&
        (x.addClass(`${v.modifierClass}${v.type}-dynamic`),
        (s = 0),
        v.dynamicMainBullets < 1 && (v.dynamicMainBullets = 1)),
      v.type === "progressbar" &&
        v.progressbarOpposite &&
        x.addClass(v.progressbarOppositeClass),
      v.clickable &&
        x.on("click", Kt(v.bulletClass), function (f) {
          f.preventDefault();
          let g = _(this).index() * e.params.slidesPerGroup;
          e.params.loop && (g += e.loopedSlides), e.slideTo(g);
        }),
      Object.assign(e.pagination, { $el: x, el: x[0] }),
      e.enabled || x.addClass(v.lockClass));
  }
  function h() {
    const v = e.params.pagination;
    if (a()) return;
    const x = e.pagination.$el;
    x.removeClass(v.hiddenClass),
      x.removeClass(v.modifierClass + v.type),
      x.removeClass(e.isHorizontal() ? v.horizontalClass : v.verticalClass),
      e.pagination.bullets &&
        e.pagination.bullets.removeClass &&
        e.pagination.bullets.removeClass(v.bulletActiveClass),
      v.clickable && x.off("click", Kt(v.bulletClass));
  }
  n("init", () => {
    e.params.pagination.enabled === !1 ? S() : (m(), d(), u());
  }),
    n("activeIndexChange", () => {
      (e.params.loop || typeof e.snapIndex > "u") && u();
    }),
    n("snapIndexChange", () => {
      e.params.loop || u();
    }),
    n("slidesLengthChange", () => {
      e.params.loop && (d(), u());
    }),
    n("snapGridLengthChange", () => {
      e.params.loop || (d(), u());
    }),
    n("destroy", () => {
      h();
    }),
    n("enable disable", () => {
      const { $el: v } = e.pagination;
      v &&
        v[e.enabled ? "removeClass" : "addClass"](
          e.params.pagination.lockClass,
        );
    }),
    n("lock unlock", () => {
      u();
    }),
    n("click", (v, x) => {
      const p = x.target,
        { $el: f } = e.pagination;
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        f &&
        f.length > 0 &&
        !_(p).hasClass(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && p === e.navigation.nextEl) ||
            (e.navigation.prevEl && p === e.navigation.prevEl))
        )
          return;
        const g = f.hasClass(e.params.pagination.hiddenClass);
        r(g === !0 ? "paginationShow" : "paginationHide"),
          f.toggleClass(e.params.pagination.hiddenClass);
      }
    });
  const y = () => {
      e.$el.removeClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.removeClass(
            e.params.pagination.paginationDisabledClass,
          ),
        m(),
        d(),
        u();
    },
    S = () => {
      e.$el.addClass(e.params.pagination.paginationDisabledClass),
        e.pagination.$el &&
          e.pagination.$el.addClass(
            e.params.pagination.paginationDisabledClass,
          ),
        h();
    };
  Object.assign(e.pagination, {
    enable: y,
    disable: S,
    render: d,
    update: u,
    init: m,
    destroy: h,
  });
}
function Qt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function ht(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : Qt(t[r]) && Qt(e[r]) && Object.keys(t[r]).length > 0
          ? t[r].__swiper__
            ? (e[r] = t[r])
            : ht(e[r], t[r])
          : (e[r] = t[r]);
    });
}
function bc(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function Qc(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function Yc(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function Xc(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
const qc = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Rm(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  ht(n, bt.defaults),
    ht(n, bt.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const l = {},
    s = qc.map((o) => o.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((o) => {
      typeof e[o] > "u" ||
        (s.indexOf(o) >= 0
          ? Qt(e[o])
            ? ((n[o] = {}), (i[o] = {}), ht(n[o], e[o]), ht(i[o], e[o]))
            : ((n[o] = e[o]), (i[o] = e[o]))
          : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
            ? t
              ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
              : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
            : (l[o] = e[o]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((o) => {
      n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function Am(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  s,
) {
  bc(s) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    Qc(s) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    Yc(s) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e);
}
const Kc = (e, t) => {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const i = bt.prototype.getBreakpoint(t.breakpoints),
      l = i in t.breakpoints ? t.breakpoints[i] : void 0;
    l && l.slidesPerView && (n = l.slidesPerView);
  }
  let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (
    (r += t.loopAdditionalSlides),
    r > e.length && t.loopedSlidesLimit && (r = e.length),
    r
  );
};
function Fm(e, t, n) {
  const r = t.map((o, u) =>
    Z.cloneElement(o, { swiper: e, "data-swiper-slide-index": u }),
  );
  function i(o, u, d) {
    return Z.cloneElement(o, {
      key: `${o.key}-duplicate-${u}-${d}`,
      className: `${o.props.className || ""} ${n.slideDuplicateClass}`,
    });
  }
  if (n.loopFillGroupWithBlank) {
    const o = n.slidesPerGroup - (r.length % n.slidesPerGroup);
    if (o !== n.slidesPerGroup)
      for (let u = 0; u < o; u += 1) {
        const d = Z.createElement("div", {
          className: `${n.slideClass} ${n.slideBlankClass}`,
        });
        r.push(d);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length);
  const l = Kc(r, n),
    s = [],
    a = [];
  for (let o = 0; o < l; o += 1) {
    const u = o - Math.floor(o / r.length) * r.length;
    a.push(i(r[u], o, "append")),
      s.unshift(i(r[r.length - u - 1], o, "prepend"));
  }
  return e && (e.loopedSlides = l), [...s, ...r, ...a];
}
function Bm(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const s = (o) => {
    l.indexOf(o) < 0 && l.push(o);
  };
  if (n && r) {
    const o = r.map(i),
      u = n.map(i);
    o.join("") !== u.join("") && s("children"),
      r.length !== n.length && s("children");
  }
  return (
    qc
      .filter((o) => o[0] === "_")
      .map((o) => o.replace(/_/, ""))
      .forEach((o) => {
        if (o in e && o in t)
          if (Qt(e[o]) && Qt(t[o])) {
            const u = Object.keys(e[o]),
              d = Object.keys(t[o]);
            u.length !== d.length
              ? s(o)
              : (u.forEach((m) => {
                  e[o][m] !== t[o][m] && s(o);
                }),
                d.forEach((m) => {
                  e[o][m] !== t[o][m] && s(o);
                }));
          } else e[o] !== t[o] && s(o);
      }),
    l
  );
}
function Zc(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Jc(e) {
  const t = [];
  return (
    Z.Children.toArray(e).forEach((n) => {
      Zc(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Jc(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function Vm(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Z.Children.toArray(e).forEach((r) => {
      if (Zc(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Jc(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Hm({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: l,
  scrollbarEl: s,
  paginationEl: a,
}) {
  const o = r.filter((C) => C !== "children" && C !== "direction"),
    {
      params: u,
      pagination: d,
      navigation: m,
      scrollbar: h,
      virtual: y,
      thumbs: S,
    } = e;
  let v, x, p, f, g;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (v = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (x = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (p = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || s) &&
      (u.scrollbar || u.scrollbar === !1) &&
      h &&
      !h.el &&
      (f = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (g = !0);
  const w = (C) => {
    e[C] &&
      (e[C].destroy(),
      C === "navigation"
        ? ((u[C].prevEl = void 0),
          (u[C].nextEl = void 0),
          (e[C].prevEl = void 0),
          (e[C].nextEl = void 0))
        : ((u[C].el = void 0), (e[C].el = void 0)));
  };
  o.forEach((C) => {
    if (Qt(u[C]) && Qt(n[C])) ht(u[C], n[C]);
    else {
      const N = n[C];
      (N === !0 || N === !1) &&
      (C === "navigation" || C === "pagination" || C === "scrollbar")
        ? N === !1 && w(C)
        : (u[C] = n[C]);
    }
  }),
    o.includes("controller") &&
      !x &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes("children") && t && y && u.virtual.enabled
      ? ((y.slides = t), y.update(!0))
      : r.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    v && S.init() && S.update(!0),
    x && (e.controller.control = u.controller.control),
    p && (a && (u.pagination.el = a), d.init(), d.render(), d.update()),
    f &&
      (s && (u.scrollbar.el = s), h.init(), h.updateSize(), h.setTranslate()),
    g &&
      (i && (u.navigation.nextEl = i),
      l && (u.navigation.prevEl = l),
      m.init(),
      m.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function Wm(e, t, n) {
  if (!n) return null;
  const r = e.isHorizontal()
    ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((i, l) => l >= n.from && l <= n.to)
    .map((i) => Z.cloneElement(i, { swiper: e, style: r }));
}
const Um = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.lazy && e.params.lazy.enabled && e.lazy.load(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Xn(e, t) {
  return typeof window > "u" ? A.useEffect(e, t) : A.useLayoutEffect(e, t);
}
const Gm = A.createContext(null),
  bm = A.createContext(null);
function ds() {
  return (
    (ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ds.apply(this, arguments)
  );
}
const ed = A.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = "div",
      wrapperTag: i = "div",
      children: l,
      onSwiper: s,
      ...a
    } = e === void 0 ? {} : e,
    o = !1;
  const [u, d] = A.useState("swiper"),
    [m, h] = A.useState(null),
    [y, S] = A.useState(!1),
    v = A.useRef(!1),
    x = A.useRef(null),
    p = A.useRef(null),
    f = A.useRef(null),
    g = A.useRef(null),
    w = A.useRef(null),
    C = A.useRef(null),
    N = A.useRef(null),
    j = A.useRef(null),
    { params: k, passedParams: I, rest: T, events: M } = Rm(a),
    { slides: O, slots: B } = Vm(l),
    Qe = () => {
      S(!y);
    };
  Object.assign(k.on, {
    _containerClasses(z, $) {
      d($);
    },
  });
  const Pt = () => {
    if (
      (Object.assign(k.on, M),
      (o = !0),
      (p.current = new bt(k)),
      (p.current.loopCreate = () => {}),
      (p.current.loopDestroy = () => {}),
      k.loop && (p.current.loopedSlides = Kc(O, k)),
      p.current.virtual && p.current.params.virtual.enabled)
    ) {
      p.current.virtual.slides = O;
      const z = {
        cache: !1,
        slides: O,
        renderExternal: h,
        renderExternalUpdate: !1,
      };
      ht(p.current.params.virtual, z), ht(p.current.originalParams.virtual, z);
    }
  };
  x.current || Pt(), p.current && p.current.on("_beforeBreakpoint", Qe);
  const _t = () => {
      o ||
        !M ||
        !p.current ||
        Object.keys(M).forEach((z) => {
          p.current.on(z, M[z]);
        });
    },
    Lt = () => {
      !M ||
        !p.current ||
        Object.keys(M).forEach((z) => {
          p.current.off(z, M[z]);
        });
    };
  A.useEffect(() => () => {
    p.current && p.current.off("_beforeBreakpoint", Qe);
  }),
    A.useEffect(() => {
      !v.current &&
        p.current &&
        (p.current.emitSlidesClasses(), (v.current = !0));
    }),
    Xn(() => {
      if ((t && (t.current = x.current), !!x.current))
        return (
          p.current.destroyed && Pt(),
          Am(
            {
              el: x.current,
              nextEl: w.current,
              prevEl: C.current,
              paginationEl: N.current,
              scrollbarEl: j.current,
              swiper: p.current,
            },
            k,
          ),
          s && s(p.current),
          () => {
            p.current && !p.current.destroyed && p.current.destroy(!0, !1);
          }
        );
    }, []),
    Xn(() => {
      _t();
      const z = Bm(I, f.current, O, g.current, ($) => $.key);
      return (
        (f.current = I),
        (g.current = O),
        z.length &&
          p.current &&
          !p.current.destroyed &&
          Hm({
            swiper: p.current,
            slides: O,
            passedParams: I,
            changedParams: z,
            nextEl: w.current,
            prevEl: C.current,
            scrollbarEl: j.current,
            paginationEl: N.current,
          }),
        () => {
          Lt();
        }
      );
    }),
    Xn(() => {
      Um(p.current);
    }, [m]);
  function P() {
    return k.virtual
      ? Wm(p.current, O, m)
      : !k.loop || (p.current && p.current.destroyed)
        ? O.map((z) => Z.cloneElement(z, { swiper: p.current }))
        : Fm(p.current, O, k);
  }
  return Z.createElement(
    r,
    ds({ ref: x, className: Xc(`${u}${n ? ` ${n}` : ""}`) }, T),
    Z.createElement(
      bm.Provider,
      { value: p.current },
      B["container-start"],
      Z.createElement(
        i,
        { className: "swiper-wrapper" },
        B["wrapper-start"],
        P(),
        B["wrapper-end"],
      ),
      bc(k) &&
        Z.createElement(
          Z.Fragment,
          null,
          Z.createElement("div", { ref: C, className: "swiper-button-prev" }),
          Z.createElement("div", { ref: w, className: "swiper-button-next" }),
        ),
      Yc(k) &&
        Z.createElement("div", { ref: j, className: "swiper-scrollbar" }),
      Qc(k) &&
        Z.createElement("div", { ref: N, className: "swiper-pagination" }),
      B["container-end"],
    ),
  );
});
ed.displayName = "Swiper";
function fs() {
  return (
    (fs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fs.apply(this, arguments)
  );
}
const st = A.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: s,
    virtualIndex: a,
    ...o
  } = e === void 0 ? {} : e;
  const u = A.useRef(null),
    [d, m] = A.useState("swiper-slide");
  function h(v, x, p) {
    x === u.current && m(p);
  }
  Xn(() => {
    if ((t && (t.current = u.current), !(!u.current || !l))) {
      if (l.destroyed) {
        d !== "swiper-slide" && m("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", h),
        () => {
          l && l.off("_slideClass", h);
        }
      );
    }
  }),
    Xn(() => {
      l && u.current && !l.destroyed && m(l.getSlideClasses(u.current));
    }, [l]);
  const y = {
      isActive:
        d.indexOf("swiper-slide-active") >= 0 ||
        d.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: d.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: d.indexOf("swiper-slide-duplicate") >= 0,
      isPrev:
        d.indexOf("swiper-slide-prev") >= 0 ||
        d.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext:
        d.indexOf("swiper-slide-next") >= 0 ||
        d.indexOf("swiper-slide-duplicate-next") >= 0,
    },
    S = () => (typeof r == "function" ? r(y) : r);
  return Z.createElement(
    n,
    fs(
      {
        ref: u,
        className: Xc(`${d}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
      },
      o,
    ),
    Z.createElement(
      Gm.Provider,
      { value: y },
      s
        ? Z.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof s == "number" ? s : void 0,
            },
            S(),
          )
        : S(),
    ),
  );
});
st.displayName = "SwiperSlide";
bt.use([Im, Dm]);
function Qm() {
  return c.jsx(c.Fragment, {
    children: c.jsxs(ed, {
      style: { width: "100%" },
      slidesPerView: 3,
      spaceBetween: 40,
      centerslides: "true",
      fade: "true",
      grabCursor: !0,
      pagination: {
        el: ".swiper-pagination",
        clickable: !0,
        dynamicBullets: !0,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        850: { slidesPerView: 2 },
        1150: { slidesPerView: 3 },
      },
      loop: !0,
      children: [
        c.jsxs("div", {
          style: { width: "50%" },
          className: "swiper-wrapper",
          children: [
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: ya, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "Control Volumétrico",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Los anexos 30, 31 y 32 establecen especificaciones técnicas para los equipos y programas informáticos que deben utilizarse para llevar a cabo este control, así como los requisitos y obligaciones de los proveedores de estos equipos y programas.",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: zp, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "SGM",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "El Sistema de Gestión de las Mediciones tiene como objetivo dar cumplimiento a lo relacionado con la configuración de sistemas de medición utilizados para determinar las cantidades de volumen, de petrolíferos que se reciben (compras), almacenan y se despachan (ventas)",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: ya, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "Control Volumétrico",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Los anexos 30, 31 y 32 establecen especificaciones técnicas para los equipos y programas informáticos que deben utilizarse para llevar a cabo este control, así como los requisitos y obligaciones de los proveedores de estos equipos y programas.",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: At, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "LOREM",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur numquam, vel delectus voluptatem iusto expedita quae ea enim! Vero dolor tempora nihil sint magni mollitia libero dolores iste commodi dolorem?",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: At, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "LOREM",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur numquam, vel delectus voluptatem iusto expedita quae ea enim! Vero dolor tempora nihil sint magni mollitia libero dolores iste commodi dolorem?",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: At, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "LOREM",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur numquam, vel delectus voluptatem iusto expedita quae ea enim! Vero dolor tempora nihil sint magni mollitia libero dolores iste commodi dolorem?",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx(st, {
              children: c.jsxs("div", {
                className: "card swiperslide",
                children: [
                  c.jsxs("div", {
                    className: "image-content",
                    children: [
                      c.jsx("span", { className: "overlay" }),
                      c.jsx("span", { className: "overlay2" }),
                      c.jsx("img", { src: At, alt: "", className: "card-img" }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "card-content",
                    children: [
                      c.jsx("h2", {
                        className: "content-title",
                        children: "LOREM",
                      }),
                      c.jsx("p", {
                        className: "content-description",
                        children:
                          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur numquam, vel delectus voluptatem iusto expedita quae ea enim! Vero dolor tempora nihil sint magni mollitia libero dolores iste commodi dolorem?",
                      }),
                      c.jsx("button", {
                        className: "content-button",
                        children: "Solicitar Demo",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          children: [
            c.jsx("div", {
              className: "swiper-button-next",
              style: { color: "#097ab3", zIndex: "9999" },
            }),
            c.jsx("div", {
              className: "swiper-button-prev",
              style: { color: "#097ab3", paddingRight: "251px" },
            }),
            c.jsx("div", { className: "swiper-pagination" }),
          ],
        }),
      ],
    }),
  });
}
const Ta = "assets/marco-mBLgZCdy.png",
  Ym = "assets/imagen_Refineria-kZj84rUC.png";
function Xm() {
  return (
    A.useEffect(() => {
      const e = document.getElementById("typed"),
        t = e.textContent.trim();
      e.textContent = "";
      let n = 0,
        r = document.getElementById("type");
      function i() {
        n < t.length &&
          ((r.textContent += t.charAt(n)), n++, setTimeout(i, 70));
      }
      i();
    }, []),
    c.jsx(c.Fragment, {
      children: c.jsx("section", {
        children: c.jsxs("div", {
          className: "gridPrincipalHome",
          children: [
            c.jsx("div", {
              className: "gf0",
              children: c.jsx("img", { src: Ta, alt: "Marco1_SoftOil" }),
            }),
            c.jsx("div", {
              className: "flex gf1",
              children: c.jsx("img", {
                src: At,
                alt: "logo_SoftOil",
                className: "logo",
              }),
            }),
            c.jsxs("div", {
              className: "flex gf2",
              children: [
                c.jsx("p", {
                  id: "typed",
                  children:
                    "Soluciones Tecnológicas Innovadoras En Hidrocarburos Y Petrolíferos",
                }),
                c.jsx("p", { id: "type", style: { textAlign: "center" } }),
              ],
            }),
            c.jsx("div", {
              className: "flex gf3",
              children: c.jsx("img", {
                src: Ym,
                alt: "Imagen_Refineria",
                className: "refi2",
              }),
            }),
            c.jsx("div", {
              className: "gf4",
              children: c.jsx("img", { src: Ta, alt: "Marco1_SoftOil" }),
            }),
          ],
        }),
      }),
    })
  );
}
const qm = "assets/natgas-logo-a5nW_Egh.svg",
  Km = "assets/Kansas-logo-28_FC23k.png",
  Zm = "assets/Repsol-logo-Jx-Igxam.png",
  Jm = "assets/Glencore-logo-Js-a1W3i.png",
  td = "assets/Tomza-logo-QSoVgow7.png",
  eg = () => {
    const e = A.useRef([]);
    A.useEffect(() => {
      const n = () => {
        e.current.forEach((r) => {
          if (r) {
            const i = r.getBoundingClientRect();
            i.top >= 0 &&
            i.left >= 0 &&
            i.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            i.right <=
              (window.innerWidth || document.documentElement.clientWidth)
              ? r.classList.add("active")
              : r.classList.remove("active");
          }
        });
      };
      return (
        window.addEventListener("scroll", n),
        () => window.removeEventListener("scroll", n)
      );
    }, []);
    const t = (n) => {
      n && !e.current.includes(n) && e.current.push(n);
    };
    return c.jsxs("div", {
      className: "Afiliations",
      children: [
        c.jsx("div", { ref: t, children: c.jsx("img", { src: qm }) }),
        c.jsx("div", { className: "Img-x" }),
        c.jsx("div", { ref: t, children: c.jsx("img", { src: Km }) }),
        c.jsx("div", { className: "Img-x" }),
        c.jsx("div", { ref: t, children: c.jsx("img", { src: Zm }) }),
        c.jsx("div", { className: "Img-x" }),
        c.jsx("div", {
          ref: t,
          children: c.jsx("img", { id: "GlencoreFilter", src: Jm }),
        }),
        c.jsx("div", { className: "Img-x" }),
        c.jsx("div", {
          ref: t,
          children: c.jsx("img", {
            id: "GlencoreFilter",
            src: td,
            className: "transparentImgsvg",
          }),
        }),
        c.jsx("div", { className: "Img-x" }),
      ],
    });
  };
function tg() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("div", {
      className: "aboutUs",
      children: [
        c.jsx("h1", {
          className: "colorRed",
          children:
            "Somos un equipo multidisciplinario con más de 25 años de experiencia en tecnología para petrolíferos e hidrocarburos",
        }),
        c.jsx("p", {
          children:
            " Ayudamos a tu empresa a cumplir con el anexo 30 Cumplimos los criterios de aceptación referente al los programas informáticos del Control Volumétrico de Hidrocarburos y Petrolíferos requerido por el SAT conforme al artículo 28 del Código Fiscal de la Federación y la Resolución de Miscelánea Fiscal 2022 con la finalidad de conocer las especificaciones de los Equipos y Programas Informáticos que se deben utilizar.",
        }),
      ],
    }),
  });
}
function ng() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("ul", {
      className: "example-2",
      children: [
        c.jsxs("li", {
          className: "icon-content",
          children: [
            c.jsx("a", {
              "data-social": "Gmail",
              "aria-label": "Gmail",
              href: "https://www.google.com/intl/es-419/gmail/about/",
              target: "_blank",
              children: c.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 49.4 512 399.42",
                children: c.jsxs("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsxs("g", {
                      fillRule: "nonzero",
                      children: [
                        c.jsx("path", {
                          fill: "#4285f4",
                          d: "M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z",
                        }),
                        c.jsx("path", {
                          fill: "#34a853",
                          d: "M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z",
                        }),
                        c.jsx("path", {
                          fill: "#fbbc04",
                          d: "M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z",
                        }),
                      ],
                    }),
                    c.jsx("path", {
                      fill: "#ea4335",
                      d: "M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z",
                    }),
                    c.jsx("path", {
                      fill: "#c5221f",
                      fillRule: "nonzero",
                      d: "M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z",
                    }),
                  ],
                }),
              }),
            }),
            c.jsx("div", { className: "tooltip", children: "Correo" }),
          ],
        }),
        c.jsxs("li", {
          className: "icon-content",
          children: [
            c.jsx("a", {
              "data-social": "linkedin",
              "aria-label": "linkedin",
              href: "https://www.linkedin.com/",
              target: "_blank",
              children: c.jsx("svg", {
                width: "256",
                height: "256",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid",
                viewBox: "0 0 256 256",
                children: c.jsx("path", {
                  d: "M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",
                  fill: "#0A66C2",
                }),
              }),
            }),
            c.jsx("div", { className: "tooltip", children: "linkedin" }),
          ],
        }),
        c.jsxs("li", {
          className: "icon-content",
          children: [
            c.jsx("a", {
              "data-social": "Whatsapp",
              "aria-label": "Whatsapp",
              href: "https://wa.me/+52xxxxxxxx",
              target: "_blank",
              children: c.jsxs("svg", {
                viewBox: "0 0 256 259",
                width: "256",
                height: "259",
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid",
                children: [
                  c.jsx("path", {
                    d: "m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z",
                    fill: "#00E676",
                  }),
                  c.jsx("path", {
                    d: "M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z",
                    fill: "#FFF",
                  }),
                ],
              }),
            }),
            c.jsx("div", { className: "tooltip", children: "Whatsapp" }),
          ],
        }),
      ],
    }),
  });
}
function rg() {
  return (
    A.useState(null),
    c.jsx(c.Fragment, {
      children: c.jsxs("div", {
        className: "footer",
        children: [
          c.jsx("img", { className: "logoSoft", src: At }),
          c.jsxs("div", {
            className: "footerMedia",
            children: [c.jsx(ng, {}), c.jsx("hr", {})],
          }),
        ],
      }),
    })
  );
}
function ig() {
  return c.jsx(c.Fragment, {
    children: c.jsx("div", {
      className: "form",
      children: c.jsxs("form", {
        action: "",
        children: [
          c.jsxs("div", {
            className: "form-item",
            children: [
              c.jsx("input", {
                type: "text",
                id: "name",
                autoComplete: "off",
                required: !0,
              }),
              c.jsx("label", { htmlFor: "name", children: "Nombre" }),
            ],
          }),
          c.jsxs("div", {
            className: "form-item",
            children: [
              c.jsx("input", {
                type: "tel",
                id: "number",
                autoComplete: "off",
                required: !0,
              }),
              c.jsx("label", { htmlFor: "number", children: "Numero" }),
            ],
          }),
          c.jsxs("div", {
            className: "form-item",
            children: [
              c.jsx("input", {
                type: "email",
                id: "email",
                autoComplete: "off",
                required: !0,
              }),
              c.jsx("label", { htmlFor: "email", children: "Correo" }),
            ],
          }),
          c.jsxs("div", {
            className: "form-item",
            children: [
              c.jsx("input", {
                type: "text",
                id: "tema",
                autoComplete: "off",
                required: !0,
              }),
              c.jsx("label", { htmlFor: "tema", children: "Tema" }),
            ],
          }),
          c.jsxs("div", {
            className: "full-width form-item area",
            children: [
              c.jsx("input", {
                className: "area",
                type: "message",
                id: "message",
                autoComplete: "off",
                required: !0,
              }),
              c.jsx("label", { htmlFor: "message", children: "Mensaje" }),
            ],
          }),
          c.jsx("div", {
            className: "full-width buttonContent",
            children: c.jsx("button", {
              className: "button",
              children: c.jsx("span", {
                className: "button-content",
                children: "Enviar",
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
function lg() {
  const e = {
      title: c.jsx("label", {
        className: "colorBlue",
        children: c.jsx("h1", { children: "SOBRE NOSOTROS" }),
      }),
      content: c.jsx(tg, {}),
    },
    t = {
      title: c.jsx("label", {
        className: "colorRed worth",
        children: c.jsx("h1", { children: "NUESTROS VALORES" }),
      }),
      content: c.jsx(Mp, {}),
    },
    n = {
      title: c.jsx("label", {
        className: "colorBlue",
        children: c.jsx("h1", { children: "SOLUCIONES" }),
      }),
      content: c.jsx(Qm, {}),
    },
    r = {
      title: c.jsx("label", {
        className: "colorRed",
        children: c.jsx("h1", { children: "CLIENTES" }),
      }),
      content: c.jsx(eg, { elements: td }),
    },
    i = {
      title: c.jsx("label", {
        className: "colorBlue",
        children: c.jsx("h1", { children: "Contacto" }),
      }),
      content: c.jsx(ig, {}),
    };
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Xm, {}),
      c.jsx("div", {
        className: "empty",
        id: "AboutUs",
        children: c.jsx("div", {}),
      }),
      c.jsx(In, { data: e }),
      c.jsx("div", {
        className: "empty",
        id: "Worths",
        children: c.jsx("div", {}),
      }),
      c.jsx(In, { data: t }),
      c.jsx("div", {
        className: "empty",
        id: "Solutions",
        children: c.jsx("div", {}),
      }),
      c.jsx(In, { data: n }),
      c.jsx("div", {
        className: "empty",
        id: "Afiliations",
        children: c.jsx("div", {}),
      }),
      c.jsx(In, { data: r }),
      c.jsx("div", {
        className: "empty",
        id: "Contact",
        children: c.jsx("div", {}),
      }),
      c.jsx(In, { data: i }),
      c.jsx("div", { className: "empty" }),
      c.jsx(rg, {}),
    ],
  });
}
function sg() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx("div", { children: c.jsx(Lp, {}) }),
      c.jsx("div", { children: c.jsx(lg, {}) }),
    ],
  });
}
vl.createRoot(document.getElementById("root")).render(
  c.jsx(Z.StrictMode, { children: c.jsx(sg, {}) }),
);
