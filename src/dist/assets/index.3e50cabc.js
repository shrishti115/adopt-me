function Of(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ys = { exports: {} },
  Ee = {},
  O = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  Lf = Symbol.for("react.portal"),
  Tf = Symbol.for("react.fragment"),
  Ff = Symbol.for("react.strict_mode"),
  Df = Symbol.for("react.profiler"),
  zf = Symbol.for("react.provider"),
  Mf = Symbol.for("react.context"),
  If = Symbol.for("react.forward_ref"),
  jf = Symbol.for("react.suspense"),
  Uf = Symbol.for("react.memo"),
  Qf = Symbol.for("react.lazy"),
  Pu = Symbol.iterator;
function Af(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pu && e[Pu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zs = Object.assign,
  Js = {};
function vn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Js),
    (this.updater = n || Xs);
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bs() {}
bs.prototype = vn.prototype;
function xo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Js),
    (this.updater = n || Xs);
}
var Po = (xo.prototype = new bs());
Po.constructor = xo;
Zs(Po, vn.prototype);
Po.isPureReactComponent = !0;
var Ru = Array.isArray,
  ea = Object.prototype.hasOwnProperty,
  Ro = { current: null },
  ta = { key: !0, ref: !0, __self: !0, __source: !0 };
function na(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      ea.call(t, r) && !ta.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ur,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ro.current,
  };
}
function $f(e, t) {
  return {
    $$typeof: ur,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function _o(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function Bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _u = /\/+/g;
function Kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Bf("" + e.key)
    : t.toString(36);
}
function zr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case Lf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Kl(o, 0) : r),
      Ru(l)
        ? ((n = ""),
          e != null && (n = e.replace(_u, "$&/") + "/"),
          zr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (_o(l) &&
            (l = $f(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(_u, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ru(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Kl(i, u);
      o += zr(i, t, n, s, l);
    }
  else if (((s = Af(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Kl(i, u++)), (o += zr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    zr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function Hf(e) {
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
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Mr = { transition: null },
  Vf = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: Ro,
  };
z.Children = {
  map: vr,
  forEach: function (e, t, n) {
    vr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!_o(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = vn;
z.Fragment = Tf;
z.Profiler = Df;
z.PureComponent = xo;
z.StrictMode = Ff;
z.Suspense = jf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vf;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zs({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Ro.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ea.call(t, s) &&
        !ta.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Mf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: zf, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = na;
z.createFactory = function (e) {
  var t = na.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: If, render: e };
};
z.isValidElement = _o;
z.lazy = function (e) {
  return { $$typeof: Qf, _payload: { _status: -1, _result: e }, _init: Hf };
};
z.memo = function (e, t) {
  return { $$typeof: Uf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
z.useContext = function (e) {
  return fe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
z.useId = function () {
  return fe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return fe.current.useRef(e);
};
z.useState = function (e) {
  return fe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return fe.current.useTransition();
};
z.version = "18.2.0";
(function (e) {
  e.exports = z;
})(O);
const Wf = Nf(O.exports),
  Si = Of({ __proto__: null, default: Wf }, [O.exports]);
var ra = { exports: {} },
  la = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var F = _.length;
    _.push(T);
    e: for (; 0 < F; ) {
      var W = (F - 1) >>> 1,
        Z = _[W];
      if (0 < l(Z, T)) (_[W] = T), (_[F] = Z), (F = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      F = _.pop();
    if (F !== T) {
      _[0] = F;
      e: for (var W = 0, Z = _.length, pr = Z >>> 1; W < pr; ) {
        var xt = 2 * (W + 1) - 1,
          Wl = _[xt],
          Pt = xt + 1,
          mr = _[Pt];
        if (0 > l(Wl, F))
          Pt < Z && 0 > l(mr, Wl)
            ? ((_[W] = mr), (_[Pt] = F), (W = Pt))
            : ((_[W] = Wl), (_[xt] = F), (W = xt));
        else if (Pt < Z && 0 > l(mr, F)) (_[W] = mr), (_[Pt] = F), (W = Pt);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var F = _.sortIndex - T.sortIndex;
    return F !== 0 ? F : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    d = 1,
    m = null,
    p = 3,
    v = !1,
    y = !1,
    w = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var T = n(a); T !== null; ) {
      if (T.callback === null) r(a);
      else if (T.startTime <= _)
        r(a), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(a);
    }
  }
  function g(_) {
    if (((w = !1), h(_), !y))
      if (n(s) !== null) (y = !0), Hl(x);
      else {
        var T = n(a);
        T !== null && Vl(g, T.startTime - _);
      }
  }
  function x(_, T) {
    (y = !1), w && ((w = !1), f(C), (C = -1)), (v = !0);
    var F = p;
    try {
      for (
        h(T), m = n(s);
        m !== null && (!(m.expirationTime > T) || (_ && !se()));

      ) {
        var W = m.callback;
        if (typeof W == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = W(m.expirationTime <= T);
          (T = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            h(T);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var pr = !0;
      else {
        var xt = n(a);
        xt !== null && Vl(g, xt.startTime - T), (pr = !1);
      }
      return pr;
    } finally {
      (m = null), (p = F), (v = !1);
    }
  }
  var E = !1,
    k = null,
    C = -1,
    D = 5,
    L = -1;
  function se() {
    return !(e.unstable_now() - L < D);
  }
  function $t() {
    if (k !== null) {
      var _ = e.unstable_now();
      L = _;
      var T = !0;
      try {
        T = k(!0, _);
      } finally {
        T ? Et() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var Et;
  if (typeof c == "function")
    Et = function () {
      c($t);
    };
  else if (typeof MessageChannel < "u") {
    var xu = new MessageChannel(),
      _f = xu.port2;
    (xu.port1.onmessage = $t),
      (Et = function () {
        _f.postMessage(null);
      });
  } else
    Et = function () {
      P($t, 0);
    };
  function Hl(_) {
    (k = _), E || ((E = !0), Et());
  }
  function Vl(_, T) {
    C = P(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), Hl(x));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var F = p;
      p = T;
      try {
        return _();
      } finally {
        p = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var F = p;
      p = _;
      try {
        return T();
      } finally {
        p = F;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, F) {
      var W = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? W + F : W))
          : (F = W),
        _)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = F + Z),
        (_ = {
          id: d++,
          callback: T,
          priorityLevel: _,
          startTime: F,
          expirationTime: Z,
          sortIndex: -1,
        }),
        F > W
          ? ((_.sortIndex = F),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (w ? (f(C), (C = -1)) : (w = !0), Vl(g, F - W)))
          : ((_.sortIndex = Z), t(s, _), y || v || ((y = !0), Hl(x))),
        _
      );
    }),
    (e.unstable_shouldYield = se),
    (e.unstable_wrapCallback = function (_) {
      var T = p;
      return function () {
        var F = p;
        p = T;
        try {
          return _.apply(this, arguments);
        } finally {
          p = F;
        }
      };
    });
})(la);
(function (e) {
  e.exports = la;
})(ra);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ia = O.exports,
  Ce = ra.exports;
function S(e) {
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
var oa = new Set(),
  Hn = {};
function Qt(e, t) {
  sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) oa.add(t[e]);
}
var Ye = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ki = Object.prototype.hasOwnProperty,
  Kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ou = {},
  Nu = {};
function qf(e) {
  return ki.call(Nu, e)
    ? !0
    : ki.call(Ou, e)
    ? !1
    : Kf.test(e)
    ? (Nu[e] = !0)
    : ((Ou[e] = !0), !1);
}
function Gf(e, t, n, r) {
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
function Yf(e, t, n, r) {
  if (t === null || typeof t > "u" || Gf(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Oo = /[\-:]([a-z])/g;
function No(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oo, No);
    ne[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Oo, No);
    ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Oo, No);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lo(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Yf(t, n, l, r) && (n = null),
    r || l === null
      ? qf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var be = ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Vt = Symbol.for("react.fragment"),
  To = Symbol.for("react.strict_mode"),
  Ci = Symbol.for("react.profiler"),
  ua = Symbol.for("react.provider"),
  sa = Symbol.for("react.context"),
  Fo = Symbol.for("react.forward_ref"),
  Ei = Symbol.for("react.suspense"),
  xi = Symbol.for("react.suspense_list"),
  Do = Symbol.for("react.memo"),
  tt = Symbol.for("react.lazy"),
  aa = Symbol.for("react.offscreen"),
  Lu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Lu && e[Lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  ql;
function Nn(e) {
  if (ql === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ql = (t && t[1]) || "";
    }
  return (
    `
` +
    ql +
    e
  );
}
var Gl = !1;
function Yl(e, t) {
  if (!e || Gl) return "";
  Gl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function Xf(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yl(e.type, !1)), e;
    case 11:
      return (e = Yl(e.type.render, !1)), e;
    case 1:
      return (e = Yl(e.type, !0)), e;
    default:
      return "";
  }
}
function Pi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vt:
      return "Fragment";
    case Ht:
      return "Portal";
    case Ci:
      return "Profiler";
    case To:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case xi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sa:
        return (e.displayName || "Context") + ".Consumer";
      case ua:
        return (e._context.displayName || "Context") + ".Provider";
      case Fo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Do:
        return (
          (t = e.displayName || null), t !== null ? t : Pi(e.type) || "Memo"
        );
      case tt:
        (t = e._payload), (e = e._init);
        try {
          return Pi(e(t));
        } catch {}
    }
  return null;
}
function Zf(e) {
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
      return Pi(t);
    case 8:
      return t === To ? "StrictMode" : "Mode";
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
function gt(e) {
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
function ca(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jf(e) {
  var t = ca(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function gr(e) {
  e._valueTracker || (e._valueTracker = Jf(e));
}
function fa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ca(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Tu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function da(e, t) {
  (t = t.checked), t != null && Lo(e, "checked", t, !1);
}
function _i(e, t) {
  da(e, t);
  var n = gt(t.value),
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
    ? Oi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Oi(e, t.type, gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fu(e, t, n) {
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
function Oi(e, t, n) {
  (t !== "number" || Gr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function tn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Du(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: gt(n) };
}
function ha(e, t) {
  var n = gt(t.value),
    r = gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function zu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function pa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? pa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wr,
  ma = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wr = wr || document.createElement("div"),
          wr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
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
  bf = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function (e) {
  bf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (zn[t] = zn[e]);
  });
});
function va(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (zn.hasOwnProperty(e) && zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ya(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = va(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var ed = H(
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
  }
);
function Ti(e, t) {
  if (t) {
    if (ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Fi(e, t) {
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
var Di = null;
function zo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  nn = null,
  rn = null;
function Mu(e) {
  if ((e = cr(e))) {
    if (typeof zi != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Rl(t)), zi(e.stateNode, e.type, t));
  }
}
function ga(e) {
  nn ? (rn ? rn.push(e) : (rn = [e])) : (nn = e);
}
function wa() {
  if (nn) {
    var e = nn,
      t = rn;
    if (((rn = nn = null), Mu(e), t)) for (e = 0; e < t.length; e++) Mu(t[e]);
  }
}
function Sa(e, t) {
  return e(t);
}
function ka() {}
var Xl = !1;
function Ca(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return Sa(e, t, n);
  } finally {
    (Xl = !1), (nn !== null || rn !== null) && (ka(), wa());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Mi = !1;
if (Ye)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Mi = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Mi = !1;
  }
function td(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var Mn = !1,
  Yr = null,
  Xr = !1,
  Ii = null,
  nd = {
    onError: function (e) {
      (Mn = !0), (Yr = e);
    },
  };
function rd(e, t, n, r, l, i, o, u, s) {
  (Mn = !1), (Yr = null), td.apply(nd, arguments);
}
function ld(e, t, n, r, l, i, o, u, s) {
  if ((rd.apply(this, arguments), Mn)) {
    if (Mn) {
      var a = Yr;
      (Mn = !1), (Yr = null);
    } else throw Error(S(198));
    Xr || ((Xr = !0), (Ii = a));
  }
}
function At(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ea(e) {
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
function Iu(e) {
  if (At(e) !== e) throw Error(S(188));
}
function id(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = At(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Iu(l), e;
        if (i === r) return Iu(l), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function xa(e) {
  return (e = id(e)), e !== null ? Pa(e) : null;
}
function Pa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Pa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ra = Ce.unstable_scheduleCallback,
  ju = Ce.unstable_cancelCallback,
  od = Ce.unstable_shouldYield,
  ud = Ce.unstable_requestPaint,
  K = Ce.unstable_now,
  sd = Ce.unstable_getCurrentPriorityLevel,
  Mo = Ce.unstable_ImmediatePriority,
  _a = Ce.unstable_UserBlockingPriority,
  Zr = Ce.unstable_NormalPriority,
  ad = Ce.unstable_LowPriority,
  Oa = Ce.unstable_IdlePriority,
  Cl = null,
  Be = null;
function cd(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : hd,
  fd = Math.log,
  dd = Math.LN2;
function hd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((fd(e) / dd) | 0)) | 0;
}
var Sr = 64,
  kr = 4194304;
function Tn(e) {
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
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Tn(u)) : ((i &= o), i !== 0 && (r = Tn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Tn(o)) : i !== 0 && (r = Tn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function pd(e, t) {
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
function md(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ie(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = pd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function ji(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Na() {
  var e = Sr;
  return (Sr <<= 1), (Sr & 4194240) === 0 && (Sr = 64), e;
}
function Zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function sr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function vd(e, t) {
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
    var l = 31 - Ie(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Io(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function La(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var Ta,
  jo,
  Fa,
  Da,
  za,
  Ui = !1,
  Cr = [],
  at = null,
  ct = null,
  ft = null,
  Kn = new Map(),
  qn = new Map(),
  lt = [],
  yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Uu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      qn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = cr(t)), t !== null && jo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function gd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (at = En(at, e, t, n, r, l)), !0;
    case "dragenter":
      return (ct = En(ct, e, t, n, r, l)), !0;
    case "mouseover":
      return (ft = En(ft, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Kn.set(i, En(Kn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), qn.set(i, En(qn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ma(e) {
  var t = Ot(e.target);
  if (t !== null) {
    var n = At(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ea(n)), t !== null)) {
          (e.blockedOn = t),
            za(e.priority, function () {
              Fa(n);
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
function Ir(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Di = r), n.target.dispatchEvent(r), (Di = null);
    } else return (t = cr(n)), t !== null && jo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qu(e, t, n) {
  Ir(e) && n.delete(t);
}
function wd() {
  (Ui = !1),
    at !== null && Ir(at) && (at = null),
    ct !== null && Ir(ct) && (ct = null),
    ft !== null && Ir(ft) && (ft = null),
    Kn.forEach(Qu),
    qn.forEach(Qu);
}
function xn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ui ||
      ((Ui = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, wd)));
}
function Gn(e) {
  function t(l) {
    return xn(l, e);
  }
  if (0 < Cr.length) {
    xn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && xn(at, e),
      ct !== null && xn(ct, e),
      ft !== null && xn(ft, e),
      Kn.forEach(t),
      qn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    (r = lt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    Ma(n), n.blockedOn === null && lt.shift();
}
var ln = be.ReactCurrentBatchConfig,
  br = !0;
function Sd(e, t, n, r) {
  var l = I,
    i = ln.transition;
  ln.transition = null;
  try {
    (I = 1), Uo(e, t, n, r);
  } finally {
    (I = l), (ln.transition = i);
  }
}
function kd(e, t, n, r) {
  var l = I,
    i = ln.transition;
  ln.transition = null;
  try {
    (I = 4), Uo(e, t, n, r);
  } finally {
    (I = l), (ln.transition = i);
  }
}
function Uo(e, t, n, r) {
  if (br) {
    var l = Qi(e, t, n, r);
    if (l === null) ui(e, t, r, el, n), Uu(e, r);
    else if (gd(l, e, t, n, r)) r.stopPropagation();
    else if ((Uu(e, r), t & 4 && -1 < yd.indexOf(e))) {
      for (; l !== null; ) {
        var i = cr(l);
        if (
          (i !== null && Ta(i),
          (i = Qi(e, t, n, r)),
          i === null && ui(e, t, r, el, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ui(e, t, r, null, n);
  }
}
var el = null;
function Qi(e, t, n, r) {
  if (((el = null), (e = zo(r)), (e = Ot(e)), e !== null))
    if (((t = At(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ea(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (el = e), null;
}
function Ia(e) {
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
      switch (sd()) {
        case Mo:
          return 1;
        case _a:
          return 4;
        case Zr:
        case ad:
          return 16;
        case Oa:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  Qo = null,
  jr = null;
function ja() {
  if (jr) return jr;
  var e,
    t = Qo,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ur(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Er() {
  return !0;
}
function Au() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Er
        : Au),
      (this.isPropagationStopped = Au),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Er));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Er));
      },
      persist: function () {},
      isPersistent: Er,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ao = xe(yn),
  ar = H({}, yn, { view: 0, detail: 0 }),
  Cd = xe(ar),
  Jl,
  bl,
  Pn,
  El = H({}, ar, {
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
    getModifierState: $o,
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
        : (e !== Pn &&
            (Pn && e.type === "mousemove"
              ? ((Jl = e.screenX - Pn.screenX), (bl = e.screenY - Pn.screenY))
              : (bl = Jl = 0),
            (Pn = e)),
          Jl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl;
    },
  }),
  $u = xe(El),
  Ed = H({}, El, { dataTransfer: 0 }),
  xd = xe(Ed),
  Pd = H({}, ar, { relatedTarget: 0 }),
  ei = xe(Pd),
  Rd = H({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _d = xe(Rd),
  Od = H({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nd = xe(Od),
  Ld = H({}, yn, { data: 0 }),
  Bu = xe(Ld),
  Td = {
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
  Fd = {
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
  Dd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dd[e]) ? !!t[e] : !1;
}
function $o() {
  return zd;
}
var Md = H({}, ar, {
    key: function (e) {
      if (e.key) {
        var t = Td[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ur(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fd[e.keyCode] || "Unidentified"
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
    getModifierState: $o,
    charCode: function (e) {
      return e.type === "keypress" ? Ur(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ur(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Id = xe(Md),
  jd = H({}, El, {
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
  Hu = xe(jd),
  Ud = H({}, ar, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $o,
  }),
  Qd = xe(Ud),
  Ad = H({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  $d = xe(Ad),
  Bd = H({}, El, {
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
  Hd = xe(Bd),
  Vd = [9, 13, 27, 32],
  Bo = Ye && "CompositionEvent" in window,
  In = null;
Ye && "documentMode" in document && (In = document.documentMode);
var Wd = Ye && "TextEvent" in window && !In,
  Ua = Ye && (!Bo || (In && 8 < In && 11 >= In)),
  Vu = String.fromCharCode(32),
  Wu = !1;
function Qa(e, t) {
  switch (e) {
    case "keyup":
      return Vd.indexOf(t.keyCode) !== -1;
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
function Aa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function Kd(e, t) {
  switch (e) {
    case "compositionend":
      return Aa(t);
    case "keypress":
      return t.which !== 32 ? null : ((Wu = !0), Vu);
    case "textInput":
      return (e = t.data), e === Vu && Wu ? null : e;
    default:
      return null;
  }
}
function qd(e, t) {
  if (Wt)
    return e === "compositionend" || (!Bo && Qa(e, t))
      ? ((e = ja()), (jr = Qo = ot = null), (Wt = !1), e)
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
      return Ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gd = {
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
function Ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gd[e.type] : t === "textarea";
}
function $a(e, t, n, r) {
  ga(r),
    (t = tl(t, "onChange")),
    0 < t.length &&
      ((n = new Ao("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jn = null,
  Yn = null;
function Yd(e) {
  Ja(e, 0);
}
function xl(e) {
  var t = Gt(e);
  if (fa(t)) return e;
}
function Xd(e, t) {
  if (e === "change") return t;
}
var Ba = !1;
if (Ye) {
  var ti;
  if (Ye) {
    var ni = "oninput" in document;
    if (!ni) {
      var qu = document.createElement("div");
      qu.setAttribute("oninput", "return;"),
        (ni = typeof qu.oninput == "function");
    }
    ti = ni;
  } else ti = !1;
  Ba = ti && (!document.documentMode || 9 < document.documentMode);
}
function Gu() {
  jn && (jn.detachEvent("onpropertychange", Ha), (Yn = jn = null));
}
function Ha(e) {
  if (e.propertyName === "value" && xl(Yn)) {
    var t = [];
    $a(t, Yn, e, zo(e)), Ca(Yd, t);
  }
}
function Zd(e, t, n) {
  e === "focusin"
    ? (Gu(), (jn = t), (Yn = n), jn.attachEvent("onpropertychange", Ha))
    : e === "focusout" && Gu();
}
function Jd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Yn);
}
function bd(e, t) {
  if (e === "click") return xl(t);
}
function eh(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function th(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : th;
function Xn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ki.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Yu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xu(e, t) {
  var n = Yu(e);
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
    n = Yu(n);
  }
}
function Va(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Va(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wa() {
  for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gr(e.document);
  }
  return t;
}
function Ho(e) {
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
function nh(e) {
  var t = Wa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Va(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ho(n)) {
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
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Xu(n, i));
        var o = Xu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
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
var rh = Ye && "documentMode" in document && 11 >= document.documentMode,
  Kt = null,
  Ai = null,
  Un = null,
  $i = !1;
function Zu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $i ||
    Kt == null ||
    Kt !== Gr(r) ||
    ((r = Kt),
    "selectionStart" in r && Ho(r)
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
    (Un && Xn(Un, r)) ||
      ((Un = r),
      (r = tl(Ai, "onSelect")),
      0 < r.length &&
        ((t = new Ao("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Kt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  ri = {},
  Ka = {};
Ye &&
  ((Ka = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qt.animationend.animation,
    delete qt.animationiteration.animation,
    delete qt.animationstart.animation),
  "TransitionEvent" in window || delete qt.transitionend.transition);
function Pl(e) {
  if (ri[e]) return ri[e];
  if (!qt[e]) return e;
  var t = qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ka) return (ri[e] = t[n]);
  return e;
}
var qa = Pl("animationend"),
  Ga = Pl("animationiteration"),
  Ya = Pl("animationstart"),
  Xa = Pl("transitionend"),
  Za = new Map(),
  Ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function St(e, t) {
  Za.set(e, t), Qt(t, [e]);
}
for (var li = 0; li < Ju.length; li++) {
  var ii = Ju[li],
    lh = ii.toLowerCase(),
    ih = ii[0].toUpperCase() + ii.slice(1);
  St(lh, "on" + ih);
}
St(qa, "onAnimationEnd");
St(Ga, "onAnimationIteration");
St(Ya, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(Xa, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  oh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));
function bu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ld(r, t, void 0, e), (e.currentTarget = null);
}
function Ja(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          bu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          bu(l, u, a), (i = s);
        }
    }
  }
  if (Xr) throw ((e = Ii), (Xr = !1), (Ii = null), e);
}
function U(e, t) {
  var n = t[Ki];
  n === void 0 && (n = t[Ki] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ba(t, e, 2, !1), n.add(r));
}
function oi(e, t, n) {
  var r = 0;
  t && (r |= 4), ba(n, e, r, t);
}
var Pr = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[Pr]) {
    (e[Pr] = !0),
      oa.forEach(function (n) {
        n !== "selectionchange" && (oh.has(n) || oi(n, !1, e), oi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pr] || ((t[Pr] = !0), oi("selectionchange", !1, t));
  }
}
function ba(e, t, n, r) {
  switch (Ia(t)) {
    case 1:
      var l = Sd;
      break;
    case 4:
      l = kd;
      break;
    default:
      l = Uo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ui(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Ot(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ca(function () {
    var a = i,
      d = zo(n),
      m = [];
    e: {
      var p = Za.get(e);
      if (p !== void 0) {
        var v = Ao,
          y = e;
        switch (e) {
          case "keypress":
            if (Ur(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Id;
            break;
          case "focusin":
            (y = "focus"), (v = ei);
            break;
          case "focusout":
            (y = "blur"), (v = ei);
            break;
          case "beforeblur":
          case "afterblur":
            v = ei;
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
            v = $u;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = xd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Qd;
            break;
          case qa:
          case Ga:
          case Ya:
            v = _d;
            break;
          case Xa:
            v = $d;
            break;
          case "scroll":
            v = Cd;
            break;
          case "wheel":
            v = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Nd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Hu;
        }
        var w = (t & 4) !== 0,
          P = !w && e === "scroll",
          f = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              f !== null && ((g = Wn(c, f)), g != null && w.push(Jn(c, g, h)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((p = new v(p, y, null, n, d)), m.push({ event: p, listeners: w }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Di &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ot(y) || y[Xe]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = a),
              (y = y ? Ot(y) : null),
              y !== null &&
                ((P = At(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = a)),
          v !== y)
        ) {
          if (
            ((w = $u),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Hu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (P = v == null ? p : Gt(v)),
            (h = y == null ? p : Gt(y)),
            (p = new w(g, c + "leave", v, n, d)),
            (p.target = P),
            (p.relatedTarget = h),
            (g = null),
            Ot(d) === a &&
              ((w = new w(f, c + "enter", y, n, d)),
              (w.target = h),
              (w.relatedTarget = P),
              (g = w)),
            (P = g),
            v && y)
          )
            t: {
              for (w = v, f = y, c = 0, h = w; h; h = Bt(h)) c++;
              for (h = 0, g = f; g; g = Bt(g)) h++;
              for (; 0 < c - h; ) (w = Bt(w)), c--;
              for (; 0 < h - c; ) (f = Bt(f)), h--;
              for (; c--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Bt(w)), (f = Bt(f));
              }
              w = null;
            }
          else w = null;
          v !== null && es(m, p, v, w, !1),
            y !== null && P !== null && es(m, P, y, w, !0);
        }
      }
      e: {
        if (
          ((p = a ? Gt(a) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var x = Xd;
        else if (Ku(p))
          if (Ba) x = eh;
          else {
            x = Jd;
            var E = Zd;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (x = bd);
        if (x && (x = x(e, a))) {
          $a(m, x, n, d);
          break e;
        }
        E && E(e, p, a),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            Oi(p, "number", p.value);
      }
      switch (((E = a ? Gt(a) : window), e)) {
        case "focusin":
          (Ku(E) || E.contentEditable === "true") &&
            ((Kt = E), (Ai = a), (Un = null));
          break;
        case "focusout":
          Un = Ai = Kt = null;
          break;
        case "mousedown":
          $i = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($i = !1), Zu(m, n, d);
          break;
        case "selectionchange":
          if (rh) break;
        case "keydown":
        case "keyup":
          Zu(m, n, d);
      }
      var k;
      if (Bo)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Wt
          ? Qa(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Ua &&
          n.locale !== "ko" &&
          (Wt || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Wt && (k = ja())
            : ((ot = d),
              (Qo = "value" in ot ? ot.value : ot.textContent),
              (Wt = !0))),
        (E = tl(a, C)),
        0 < E.length &&
          ((C = new Bu(C, e, null, n, d)),
          m.push({ event: C, listeners: E }),
          k ? (C.data = k) : ((k = Aa(n)), k !== null && (C.data = k)))),
        (k = Wd ? Kd(e, n) : qd(e, n)) &&
          ((a = tl(a, "onBeforeInput")),
          0 < a.length &&
            ((d = new Bu("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: a }),
            (d.data = k)));
    }
    Ja(m, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function tl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Wn(e, n)),
      i != null && r.unshift(Jn(e, i, l)),
      (i = Wn(e, t)),
      i != null && r.push(Jn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function es(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Wn(n, i)), s != null && o.unshift(Jn(n, s, u)))
        : l || ((s = Wn(n, i)), s != null && o.push(Jn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var uh = /\r\n?/g,
  sh = /\u0000|\uFFFD/g;
function ts(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uh,
      `
`
    )
    .replace(sh, "");
}
function Rr(e, t, n) {
  if (((t = ts(t)), ts(e) !== t && n)) throw Error(S(425));
}
function nl() {}
var Bi = null,
  Hi = null;
function Vi(e, t) {
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
var Wi = typeof setTimeout == "function" ? setTimeout : void 0,
  ah = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ns = typeof Promise == "function" ? Promise : void 0,
  ch =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ns < "u"
      ? function (e) {
          return ns.resolve(null).then(e).catch(fh);
        }
      : Wi;
function fh(e) {
  setTimeout(function () {
    throw e;
  });
}
function si(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Gn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Gn(t);
}
function dt(e) {
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
function rs(e) {
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
var gn = Math.random().toString(36).slice(2),
  $e = "__reactFiber$" + gn,
  bn = "__reactProps$" + gn,
  Xe = "__reactContainer$" + gn,
  Ki = "__reactEvents$" + gn,
  dh = "__reactListeners$" + gn,
  hh = "__reactHandles$" + gn;
function Ot(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xe] || n[$e])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = rs(e); e !== null; ) {
          if ((n = e[$e])) return n;
          e = rs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cr(e) {
  return (
    (e = e[$e] || e[Xe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Rl(e) {
  return e[bn] || null;
}
var qi = [],
  Yt = -1;
function kt(e) {
  return { current: e };
}
function Q(e) {
  0 > Yt || ((e.current = qi[Yt]), (qi[Yt] = null), Yt--);
}
function j(e, t) {
  Yt++, (qi[Yt] = e.current), (e.current = t);
}
var wt = {},
  ue = kt(wt),
  me = kt(!1),
  zt = wt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function rl() {
  Q(me), Q(ue);
}
function ls(e, t, n) {
  if (ue.current !== wt) throw Error(S(168));
  j(ue, t), j(me, n);
}
function ec(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, Zf(e) || "Unknown", l));
  return H({}, n, r);
}
function ll(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wt),
    (zt = ue.current),
    j(ue, e),
    j(me, me.current),
    !0
  );
}
function is(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = ec(e, t, zt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q(me),
      Q(ue),
      j(ue, e))
    : Q(me),
    j(me, n);
}
var We = null,
  _l = !1,
  ai = !1;
function tc(e) {
  We === null ? (We = [e]) : We.push(e);
}
function ph(e) {
  (_l = !0), tc(e);
}
function Ct() {
  if (!ai && We !== null) {
    ai = !0;
    var e = 0,
      t = I;
    try {
      var n = We;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (_l = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), Ra(Mo, Ct), l);
    } finally {
      (I = t), (ai = !1);
    }
  }
  return null;
}
var Xt = [],
  Zt = 0,
  il = null,
  ol = 0,
  Re = [],
  _e = 0,
  Mt = null,
  Ke = 1,
  qe = "";
function Rt(e, t) {
  (Xt[Zt++] = ol), (Xt[Zt++] = il), (il = e), (ol = t);
}
function nc(e, t, n) {
  (Re[_e++] = Ke), (Re[_e++] = qe), (Re[_e++] = Mt), (Mt = e);
  var r = Ke;
  e = qe;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ie(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ke = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (qe = i + e);
  } else (Ke = (1 << i) | (n << l) | r), (qe = e);
}
function Vo(e) {
  e.return !== null && (Rt(e, 1), nc(e, 1, 0));
}
function Wo(e) {
  for (; e === il; )
    (il = Xt[--Zt]), (Xt[Zt] = null), (ol = Xt[--Zt]), (Xt[Zt] = null);
  for (; e === Mt; )
    (Mt = Re[--_e]),
      (Re[_e] = null),
      (qe = Re[--_e]),
      (Re[_e] = null),
      (Ke = Re[--_e]),
      (Re[_e] = null);
}
var ke = null,
  Se = null,
  A = !1,
  Me = null;
function rc(e, t) {
  var n = Oe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function os(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Se = dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Mt !== null ? { id: Ke, overflow: qe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Oe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yi(e) {
  if (A) {
    var t = Se;
    if (t) {
      var n = t;
      if (!os(e, t)) {
        if (Gi(e)) throw Error(S(418));
        t = dt(n.nextSibling);
        var r = ke;
        t && os(e, t)
          ? rc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ke = e));
      }
    } else {
      if (Gi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ke = e);
    }
  }
}
function us(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function _r(e) {
  if (e !== ke) return !1;
  if (!A) return us(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vi(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Gi(e)) throw (lc(), Error(S(418)));
    for (; t; ) rc(e, t), (t = dt(t.nextSibling));
  }
  if ((us(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function lc() {
  for (var e = Se; e; ) e = dt(e.nextSibling);
}
function cn() {
  (Se = ke = null), (A = !1);
}
function Ko(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var mh = be.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ul = kt(null),
  sl = null,
  Jt = null,
  qo = null;
function Go() {
  qo = Jt = sl = null;
}
function Yo(e) {
  var t = ul.current;
  Q(ul), (e._currentValue = t);
}
function Xi(e, t, n) {
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
function on(e, t) {
  (sl = e),
    (qo = Jt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (pe = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (qo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jt === null)) {
      if (sl === null) throw Error(S(308));
      (Jt = e), (sl.dependencies = { lanes: 0, firstContext: e });
    } else Jt = Jt.next = e;
  return t;
}
var Nt = null;
function Xo(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function ic(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Xo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
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
var nt = !1;
function Zo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function oc(e, t) {
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
function Ge(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (M & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Xo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Io(e, n);
  }
}
function ss(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
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
function al(e, t, n, r) {
  var l = e.updateQueue;
  nt = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (u = d.lastBaseUpdate),
      u !== o &&
        (u === null ? (d.firstBaseUpdate = a) : (u.next = a),
        (d.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (d = a = s = null), (u = i);
    do {
      var p = u.lane,
        v = u.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((p = t), (v = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                m = y.call(v, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (p = typeof y == "function" ? y.call(v, m, p) : y),
                p == null)
              )
                break e;
              m = H({}, m, p);
              break e;
            case 2:
              nt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          d === null ? ((a = d = v), (s = m)) : (d = d.next = v),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (jt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function as(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(S(191, l));
        l.call(r);
      }
    }
}
var uc = new ia.Component().refs;
function Zi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? At(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      i = Ge(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (je(t, e, l, r), Qr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      i = Ge(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ht(e, i, l)),
      t !== null && (je(t, e, l, r), Qr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = mt(e),
      l = Ge(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ht(e, l, r)),
      t !== null && (je(t, e, r, n), Qr(t, e, r));
  },
};
function cs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Xn(n, r) || !Xn(l, i)
      : !0
  );
}
function sc(e, t, n) {
  var r = !1,
    l = wt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Le(i))
      : ((l = ve(t) ? zt : ue.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? an(e, l) : wt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null);
}
function Ji(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = uc), Zo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Le(i))
    : ((i = ve(t) ? zt : ue.current), (l.context = an(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
      al(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Rn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === uc && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Or(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ds(e) {
  var t = e._init;
  return t(e._payload);
}
function ac(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [c]), (f.flags |= 16)) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = vt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((f.flags |= 2), c) : h)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, h, g) {
    return c === null || c.tag !== 6
      ? ((c = vi(h, f.mode, g)), (c.return = f), c)
      : ((c = l(c, h)), (c.return = f), c);
  }
  function s(f, c, h, g) {
    var x = h.type;
    return x === Vt
      ? d(f, c, h.props.children, g, h.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === tt &&
            ds(x) === c.type))
      ? ((g = l(c, h.props)), (g.ref = Rn(f, c, h)), (g.return = f), g)
      : ((g = Wr(h.type, h.key, h.props, null, f.mode, g)),
        (g.ref = Rn(f, c, h)),
        (g.return = f),
        g);
  }
  function a(f, c, h, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = yi(h, f.mode, g)), (c.return = f), c)
      : ((c = l(c, h.children || [])), (c.return = f), c);
  }
  function d(f, c, h, g, x) {
    return c === null || c.tag !== 7
      ? ((c = Dt(h, f.mode, g, x)), (c.return = f), c)
      : ((c = l(c, h)), (c.return = f), c);
  }
  function m(f, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = vi("" + c, f.mode, h)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return (
            (h = Wr(c.type, c.key, c.props, null, f.mode, h)),
            (h.ref = Rn(f, null, c)),
            (h.return = f),
            h
          );
        case Ht:
          return (c = yi(c, f.mode, h)), (c.return = f), c;
        case tt:
          var g = c._init;
          return m(f, g(c._payload), h);
      }
      if (Ln(c) || kn(c))
        return (c = Dt(c, f.mode, h, null)), (c.return = f), c;
      Or(f, c);
    }
    return null;
  }
  function p(f, c, h, g) {
    var x = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : u(f, c, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yr:
          return h.key === x ? s(f, c, h, g) : null;
        case Ht:
          return h.key === x ? a(f, c, h, g) : null;
        case tt:
          return (x = h._init), p(f, c, x(h._payload), g);
      }
      if (Ln(h) || kn(h)) return x !== null ? null : d(f, c, h, g, null);
      Or(f, h);
    }
    return null;
  }
  function v(f, c, h, g, x) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(h) || null), u(c, f, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case yr:
          return (f = f.get(g.key === null ? h : g.key) || null), s(c, f, g, x);
        case Ht:
          return (f = f.get(g.key === null ? h : g.key) || null), a(c, f, g, x);
        case tt:
          var E = g._init;
          return v(f, c, h, E(g._payload), x);
      }
      if (Ln(g) || kn(g)) return (f = f.get(h) || null), d(c, f, g, x, null);
      Or(c, g);
    }
    return null;
  }
  function y(f, c, h, g) {
    for (
      var x = null, E = null, k = c, C = (c = 0), D = null;
      k !== null && C < h.length;
      C++
    ) {
      k.index > C ? ((D = k), (k = null)) : (D = k.sibling);
      var L = p(f, k, h[C], g);
      if (L === null) {
        k === null && (k = D);
        break;
      }
      e && k && L.alternate === null && t(f, k),
        (c = i(L, c, C)),
        E === null ? (x = L) : (E.sibling = L),
        (E = L),
        (k = D);
    }
    if (C === h.length) return n(f, k), A && Rt(f, C), x;
    if (k === null) {
      for (; C < h.length; C++)
        (k = m(f, h[C], g)),
          k !== null &&
            ((c = i(k, c, C)), E === null ? (x = k) : (E.sibling = k), (E = k));
      return A && Rt(f, C), x;
    }
    for (k = r(f, k); C < h.length; C++)
      (D = v(k, f, C, h[C], g)),
        D !== null &&
          (e && D.alternate !== null && k.delete(D.key === null ? C : D.key),
          (c = i(D, c, C)),
          E === null ? (x = D) : (E.sibling = D),
          (E = D));
    return (
      e &&
        k.forEach(function (se) {
          return t(f, se);
        }),
      A && Rt(f, C),
      x
    );
  }
  function w(f, c, h, g) {
    var x = kn(h);
    if (typeof x != "function") throw Error(S(150));
    if (((h = x.call(h)), h == null)) throw Error(S(151));
    for (
      var E = (x = null), k = c, C = (c = 0), D = null, L = h.next();
      k !== null && !L.done;
      C++, L = h.next()
    ) {
      k.index > C ? ((D = k), (k = null)) : (D = k.sibling);
      var se = p(f, k, L.value, g);
      if (se === null) {
        k === null && (k = D);
        break;
      }
      e && k && se.alternate === null && t(f, k),
        (c = i(se, c, C)),
        E === null ? (x = se) : (E.sibling = se),
        (E = se),
        (k = D);
    }
    if (L.done) return n(f, k), A && Rt(f, C), x;
    if (k === null) {
      for (; !L.done; C++, L = h.next())
        (L = m(f, L.value, g)),
          L !== null &&
            ((c = i(L, c, C)), E === null ? (x = L) : (E.sibling = L), (E = L));
      return A && Rt(f, C), x;
    }
    for (k = r(f, k); !L.done; C++, L = h.next())
      (L = v(k, f, C, L.value, g)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? C : L.key),
          (c = i(L, c, C)),
          E === null ? (x = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        k.forEach(function ($t) {
          return t(f, $t);
        }),
      A && Rt(f, C),
      x
    );
  }
  function P(f, c, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Vt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case yr:
          e: {
            for (var x = h.key, E = c; E !== null; ) {
              if (E.key === x) {
                if (((x = h.type), x === Vt)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = l(E, h.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === tt &&
                    ds(x) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = l(E, h.props)),
                    (c.ref = Rn(f, E, h)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            h.type === Vt
              ? ((c = Dt(h.props.children, f.mode, g, h.key)),
                (c.return = f),
                (f = c))
              : ((g = Wr(h.type, h.key, h.props, null, f.mode, g)),
                (g.ref = Rn(f, c, h)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Ht:
          e: {
            for (E = h.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = yi(h, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case tt:
          return (E = h._init), P(f, c, E(h._payload), g);
      }
      if (Ln(h)) return y(f, c, h, g);
      if (kn(h)) return w(f, c, h, g);
      Or(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, h)), (c.return = f), (f = c))
          : (n(f, c), (c = vi(h, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return P;
}
var fn = ac(!0),
  cc = ac(!1),
  fr = {},
  He = kt(fr),
  er = kt(fr),
  tr = kt(fr);
function Lt(e) {
  if (e === fr) throw Error(S(174));
  return e;
}
function Jo(e, t) {
  switch ((j(tr, t), j(er, e), j(He, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  Q(He), j(He, t);
}
function dn() {
  Q(He), Q(er), Q(tr);
}
function fc(e) {
  Lt(tr.current);
  var t = Lt(He.current),
    n = Li(t, e.type);
  t !== n && (j(er, e), j(He, n));
}
function bo(e) {
  er.current === e && (Q(He), Q(er));
}
var $ = kt(0);
function cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
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
var ci = [];
function eu() {
  for (var e = 0; e < ci.length; e++)
    ci[e]._workInProgressVersionPrimary = null;
  ci.length = 0;
}
var Ar = be.ReactCurrentDispatcher,
  fi = be.ReactCurrentBatchConfig,
  It = 0,
  B = null,
  Y = null,
  J = null,
  fl = !1,
  Qn = !1,
  nr = 0,
  vh = 0;
function re() {
  throw Error(S(321));
}
function tu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function nu(e, t, n, r, l, i) {
  if (
    ((It = i),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? Sh : kh),
    (e = n(r, l)),
    Qn)
  ) {
    i = 0;
    do {
      if (((Qn = !1), (nr = 0), 25 <= i)) throw Error(S(301));
      (i += 1),
        (J = Y = null),
        (t.updateQueue = null),
        (Ar.current = Ch),
        (e = n(r, l));
    } while (Qn);
  }
  if (
    ((Ar.current = dl),
    (t = Y !== null && Y.next !== null),
    (It = 0),
    (J = Y = B = null),
    (fl = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ru() {
  var e = nr !== 0;
  return (nr = 0), e;
}
function Ae() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (B.memoizedState = J = e) : (J = J.next = e), J;
}
function Te() {
  if (Y === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null) (J = t), (Y = e);
  else {
    if (e === null) throw Error(S(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      J === null ? (B.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function rr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function di(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var d = a.lane;
      if ((It & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (B.lanes |= d),
          (jt |= d);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Ue(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (B.lanes |= i), (jt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hi(e) {
  var t = Te(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (pe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function dc() {}
function hc(e, t) {
  var n = B,
    r = Te(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (pe = !0)),
    (r = r.queue),
    lu(vc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      lr(9, mc.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(S(349));
    (It & 30) !== 0 || pc(n, t, l);
  }
  return l;
}
function pc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), yc(t) && gc(e);
}
function vc(e, t, n) {
  return n(function () {
    yc(t) && gc(e);
  });
}
function yc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function gc(e) {
  var t = Ze(e, 1);
  t !== null && je(t, e, 1, -1);
}
function hs(e) {
  var t = Ae();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: rr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wh.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function lr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wc() {
  return Te().memoizedState;
}
function $r(e, t, n, r) {
  var l = Ae();
  (B.flags |= e),
    (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Nl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && tu(r, o.deps))) {
      l.memoizedState = lr(t, n, i, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = lr(1 | t, n, i, r));
}
function ps(e, t) {
  return $r(8390656, 8, e, t);
}
function lu(e, t) {
  return Nl(2048, 8, e, t);
}
function Sc(e, t) {
  return Nl(4, 2, e, t);
}
function kc(e, t) {
  return Nl(4, 4, e, t);
}
function Cc(e, t) {
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
function Ec(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Nl(4, 4, Cc.bind(null, t, e), n)
  );
}
function iu() {}
function xc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pc(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Rc(e, t, n) {
  return (It & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n))
    : (Ue(n, t) || ((n = Na()), (B.lanes |= n), (jt |= n), (e.baseState = !0)),
      t);
}
function yh(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fi.transition;
  fi.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (fi.transition = r);
  }
}
function _c() {
  return Te().memoizedState;
}
function gh(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Oc(e))
  )
    Nc(t, n);
  else if (((n = ic(e, t, n, r)), n !== null)) {
    var l = ce();
    je(n, e, r, l), Lc(n, t, r);
  }
}
function wh(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Oc(e)) Nc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Xo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ic(e, t, l, r)),
      n !== null && ((l = ce()), je(n, e, r, l), Lc(n, t, r));
  }
}
function Oc(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function Nc(e, t) {
  Qn = fl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lc(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Io(e, n);
  }
}
var dl = {
    readContext: Le,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Sh = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Ae().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: ps,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $r(4194308, 4, Cc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ae();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ae();
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
        (e = e.dispatch = gh.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ae();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: hs,
    useDebugValue: iu,
    useDeferredValue: function (e) {
      return (Ae().memoizedState = e);
    },
    useTransition: function () {
      var e = hs(!1),
        t = e[0];
      return (e = yh.bind(null, e[1])), (Ae().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Ae();
      if (A) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(S(349));
        (It & 30) !== 0 || pc(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        ps(vc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        lr(9, mc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ae(),
        t = b.identifierPrefix;
      if (A) {
        var n = qe,
          r = Ke;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = nr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = vh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kh = {
    readContext: Le,
    useCallback: xc,
    useContext: Le,
    useEffect: lu,
    useImperativeHandle: Ec,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: di,
    useRef: wc,
    useState: function () {
      return di(rr);
    },
    useDebugValue: iu,
    useDeferredValue: function (e) {
      var t = Te();
      return Rc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = di(rr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: hc,
    useId: _c,
    unstable_isNewReconciler: !1,
  },
  Ch = {
    readContext: Le,
    useCallback: xc,
    useContext: Le,
    useEffect: lu,
    useImperativeHandle: Ec,
    useInsertionEffect: Sc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: hi,
    useRef: wc,
    useState: function () {
      return hi(rr);
    },
    useDebugValue: iu,
    useDeferredValue: function (e) {
      var t = Te();
      return Y === null ? (t.memoizedState = e) : Rc(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(rr)[0],
        t = Te().memoizedState;
      return [e, t];
    },
    useMutableSource: dc,
    useSyncExternalStore: hc,
    useId: _c,
    unstable_isNewReconciler: !1,
  };
function hn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Xf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function pi(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Eh = typeof WeakMap == "function" ? WeakMap : Map;
function Tc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pl || ((pl = !0), (ao = r)), bi(e, t);
    }),
    n
  );
}
function Fc(e, t, n) {
  (n = Ge(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        bi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        bi(e, t),
          typeof r != "function" &&
            (pt === null ? (pt = new Set([this])) : pt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ms(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Eh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = jh.bind(null, e, t, n)), t.then(e, e));
}
function vs(e) {
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
function ys(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ge(-1, 1)), (t.tag = 2), ht(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var xh = be.ReactCurrentOwner,
  pe = !1;
function ae(e, t, n, r) {
  t.child = e === null ? cc(t, null, n, r) : fn(t, e.child, n, r);
}
function gs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    on(t, l),
    (r = nu(e, t, n, r, i, l)),
    (n = ru()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (A && n && Vo(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function ws(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !hu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Dc(e, t, i, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Xn), n(o, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = vt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xn(i, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (pe = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return eo(e, t, n, r, l);
}
function zc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        j(en, we),
        (we |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          j(en, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        j(en, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      j(en, we),
      (we |= r);
  return ae(e, t, l, n), t.child;
}
function Mc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eo(e, t, n, r, l) {
  var i = ve(n) ? zt : ue.current;
  return (
    (i = an(t, i)),
    on(t, l),
    (n = nu(e, t, n, r, i, l)),
    (r = ru()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (A && r && Vo(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Ss(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    ll(t);
  } else i = !1;
  if ((on(t, l), t.stateNode === null))
    Br(e, t), sc(t, n, r), Ji(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Le(a))
      : ((a = ve(n) ? zt : ue.current), (a = an(t, a)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && fs(t, o, r, a)),
      (nt = !1);
    var p = t.memoizedState;
    (o.state = p),
      al(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || me.current || nt
        ? (typeof d == "function" && (Zi(t, n, d, r), (s = t.memoizedState)),
          (u = nt || cs(t, n, u, r, p, s, a))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      oc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : De(t.type, u)),
      (o.props = a),
      (m = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Le(s))
        : ((s = ve(n) ? zt : ue.current), (s = an(t, s)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && fs(t, o, r, s)),
      (nt = !1),
      (p = t.memoizedState),
      (o.state = p),
      al(t, r, o, l);
    var y = t.memoizedState;
    u !== m || p !== y || me.current || nt
      ? (typeof v == "function" && (Zi(t, n, v, r), (y = t.memoizedState)),
        (a = nt || cs(t, n, a, r, p, y, s) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return to(e, t, n, r, i, l);
}
function to(e, t, n, r, l, i) {
  Mc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && is(t, n, !1), Je(e, t, i);
  (r = t.stateNode), (xh.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = fn(t, e.child, null, i)), (t.child = fn(t, null, u, i)))
      : ae(e, t, u, i),
    (t.memoizedState = r.state),
    l && is(t, n, !0),
    t.child
  );
}
function Ic(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ls(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ls(e, t.context, !1),
    Jo(e, t.containerInfo);
}
function ks(e, t, n, r, l) {
  return cn(), Ko(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jc(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    j($, l & 1),
    e === null)
  )
    return (
      Yi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Fl(o, r, 0, null)),
              (e = Dt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ro(n)),
              (t.memoizedState = no),
              e)
            : ou(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Ph(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      (o & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = vt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = vt(u, i)) : ((i = Dt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ro(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = no),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = vt(i, { mode: "visible", children: r.children })),
    (t.mode & 1) === 0 && (r.lanes = n),
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
function ou(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Ko(r),
    fn(t, e.child, null, n),
    (e = ou(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ph(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pi(Error(S(422)))), Nr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Dt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && fn(t, e.child, null, o),
        (t.child.memoizedState = ro(o)),
        (t.memoizedState = no),
        i);
  if ((t.mode & 1) === 0) return Nr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(S(419))), (r = pi(i, r, void 0)), Nr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), pe || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), je(r, e, l, -1));
    }
    return du(), (r = pi(Error(S(421)))), Nr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Uh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = dt(l.nextSibling)),
      (ke = t),
      (A = !0),
      (Me = null),
      e !== null &&
        ((Re[_e++] = Ke),
        (Re[_e++] = qe),
        (Re[_e++] = Mt),
        (Ke = e.id),
        (qe = e.overflow),
        (Mt = t)),
      (t = ou(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xi(e.return, t, n);
}
function mi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Uc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ae(e, t, r.children, n), (r = $.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
        else if (e.tag === 19) Cs(e, n, t);
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
  if ((j($, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && cl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          mi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && cl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        mi(t, !0, n, null, i);
        break;
      case "together":
        mi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jt |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ic(t), cn();
      break;
    case 5:
      fc(t);
      break;
    case 1:
      ve(t.type) && ll(t);
      break;
    case 4:
      Jo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      j(ul, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (j($, $.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? jc(e, t, n)
          : (j($, $.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      j($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return Uc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        j($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zc(e, t, n);
  }
  return Je(e, t, n);
}
var Qc, lo, Ac, $c;
Qc = function (e, t) {
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
lo = function () {};
Ac = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Lt(He.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ri(e, l)), (r = Ri(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, { value: void 0 })),
          (r = H({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = Ni(e, l)), (r = Ni(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = nl);
    }
    Ti(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Hn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Hn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && U("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
$c = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!A)
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
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function _h(e, t, n) {
  var r = t.pendingProps;
  switch ((Wo(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return ve(t.type) && rl(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        Q(me),
        Q(ue),
        eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Me !== null && (ho(Me), (Me = null)))),
        lo(e, t),
        le(t),
        null
      );
    case 5:
      bo(t);
      var l = Lt(tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ac(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return le(t), null;
        }
        if (((e = Lt(He.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$e] = t), (r[bn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Fn.length; l++) U(Fn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              Tu(r, i), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              Du(r, i), U("invalid", r);
          }
          Ti(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Rr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Hn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              gr(r), Fu(r, i, !0);
              break;
            case "textarea":
              gr(r), zu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = nl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = pa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[$e] = t),
            (e[bn] = r),
            Qc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Fi(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fn.length; l++) U(Fn[l], e);
                l = r;
                break;
              case "source":
                U("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = r);
                break;
              case "details":
                U("toggle", e), (l = r);
                break;
              case "input":
                Tu(e, r), (l = Ri(e, r)), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = H({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                Du(e, r), (l = Ni(e, r)), U("invalid", e);
                break;
              default:
                l = r;
            }
            Ti(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? ya(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ma(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Vn(e, s)
                    : typeof s == "number" && Vn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && U("scroll", e)
                      : s != null && Lo(e, i, s, o));
              }
            switch (n) {
              case "input":
                gr(e), Fu(e, r, !1);
                break;
              case "textarea":
                gr(e), zu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? tn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      tn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = nl);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) $c(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Lt(tr.current)), Lt(He.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$e] = t),
            (i = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Rr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$e] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (Q($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && Se !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          lc(), cn(), (t.flags |= 98560), (i = !1);
        else if (((i = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(S(317));
            i[$e] = t;
          } else
            cn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          le(t), (i = !1);
        } else Me !== null && (ho(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || ($.current & 1) !== 0
                ? X === 0 && (X = 3)
                : du())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        dn(), lo(e, t), e === null && Zn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Yo(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && rl(), le(t), null;
    case 19:
      if ((Q($), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) _n(i, !1);
        else {
          if (X !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = cl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _n(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return j($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > pn &&
            ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = cl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !A)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > pn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = $.current),
          j($, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        fu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (we & 1073741824) !== 0 &&
            (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Oh(e, t) {
  switch ((Wo(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && rl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        Q(me),
        Q(ue),
        eu(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return bo(t), null;
    case 13:
      if ((Q($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        cn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q($), null;
    case 4:
      return dn(), null;
    case 10:
      return Yo(t.type._context), null;
    case 22:
    case 23:
      return fu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ie = !1,
  Nh = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Es = !1;
function Lh(e, t) {
  if (((Bi = br), (e = Wa()), Ho(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            d = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (p = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++a === l && (u = o),
                p === i && ++d === r && (s = o),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hi = { focusedElem: e, selectionRange: n }, br = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var y = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    P = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : De(t.type, w),
                      P
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (g) {
          V(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = Es), (Es = !1), y;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && io(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ll(e, t) {
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
function oo(e) {
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
function Bc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$e], delete t[bn], delete t[Ki], delete t[dh], delete t[hh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hc(e.return)) return null;
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
function uo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = nl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), (e = e.sibling);
}
function so(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (so(e, t, n), e = e.sibling; e !== null; ) so(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function et(e, t, n) {
  for (n = n.child; n !== null; ) Vc(e, t, n), (n = n.sibling);
}
function Vc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(Cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || bt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        et(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? si(e.parentNode, n)
              : e.nodeType === 1 && si(e, n),
            Gn(e))
          : si(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        et(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && io(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      et(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (bt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      et(e, t, n);
      break;
    case 21:
      et(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), et(e, t, n), (ie = r))
        : et(e, t, n);
      break;
    default:
      et(e, t, n);
  }
}
function Ps(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nh()),
      t.forEach(function (r) {
        var l = Qh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(S(160));
        Vc(i, o, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        V(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wc(t, e), (t = t.sibling);
}
function Wc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Qe(e), r & 4)) {
        try {
          An(3, e, e.return), Ll(3, e);
        } catch (w) {
          V(e, e.return, w);
        }
        try {
          An(5, e, e.return);
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 1:
      Fe(t, e), Qe(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Qe(e),
        r & 512 && n !== null && bt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vn(l, "");
        } catch (w) {
          V(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && da(l, i),
              Fi(u, o);
            var a = Fi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var d = s[o],
                m = s[o + 1];
              d === "style"
                ? ya(l, m)
                : d === "dangerouslySetInnerHTML"
                ? ma(l, m)
                : d === "children"
                ? Vn(l, m)
                : Lo(l, d, m, a);
            }
            switch (u) {
              case "input":
                _i(l, i);
                break;
              case "textarea":
                ha(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? tn(l, !!i.multiple, v, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? tn(l, !!i.multiple, i.defaultValue, !0)
                      : tn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[bn] = i;
          } catch (w) {
            V(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          V(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Gn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
      break;
    case 4:
      Fe(t, e), Qe(e);
      break;
    case 13:
      Fe(t, e),
        Qe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (au = K())),
        r & 4 && Ps(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || d), Fe(t, e), (ie = a)) : Fe(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !d && (e.mode & 1) !== 0)
        )
          for (R = e, d = e.child; d !== null; ) {
            for (m = R = d; R !== null; ) {
              switch (((p = R), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  An(4, p, p.return);
                  break;
                case 1:
                  bt(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  bt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    _s(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (R = v)) : _s(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = va("display", o)));
              } catch (w) {
                V(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
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
      Fe(t, e), Qe(e), r & 4 && Ps(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
          var i = xs(e);
          so(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = xs(e);
          uo(e, u, o);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Th(e, t, n) {
  (R = e), Kc(e);
}
function Kc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var l = R,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = Lr;
        var a = ie;
        if (((Lr = o), (ie = s) && !a))
          for (R = l; R !== null; )
            (o = R),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Os(l)
                : s !== null
                ? ((s.return = o), (R = s))
                : Os(l);
        for (; i !== null; ) (R = i), Kc(i), (i = i.sibling);
        (R = l), (Lr = u), (ie = a);
      }
      Rs(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (R = i))
        : Rs(e);
  }
}
function Rs(e) {
  for (; R !== null; ) {
    var t = R;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Ll(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && as(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                as(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var d = a.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && Gn(m);
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
              throw Error(S(163));
          }
        ie || (t.flags & 512 && oo(t));
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function _s(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Os(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ll(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var i = t.return;
          try {
            oo(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            oo(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (R = u);
      break;
    }
    R = t.return;
  }
}
var Fh = Math.ceil,
  hl = be.ReactCurrentDispatcher,
  uu = be.ReactCurrentOwner,
  Ne = be.ReactCurrentBatchConfig,
  M = 0,
  b = null,
  G = null,
  te = 0,
  we = 0,
  en = kt(0),
  X = 0,
  ir = null,
  jt = 0,
  Tl = 0,
  su = 0,
  $n = null,
  he = null,
  au = 0,
  pn = 1 / 0,
  Ve = null,
  pl = !1,
  ao = null,
  pt = null,
  Tr = !1,
  ut = null,
  ml = 0,
  Bn = 0,
  co = null,
  Hr = -1,
  Vr = 0;
function ce() {
  return (M & 6) !== 0 ? K() : Hr !== -1 ? Hr : (Hr = K());
}
function mt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (M & 2) !== 0 && te !== 0
    ? te & -te
    : mh.transition !== null
    ? (Vr === 0 && (Vr = Na()), Vr)
    : ((e = I),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ia(e.type))),
      e);
}
function je(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (co = null), Error(S(185)));
  sr(e, n, r),
    ((M & 2) === 0 || e !== b) &&
      (e === b && ((M & 2) === 0 && (Tl |= n), X === 4 && it(e, te)),
      ye(e, r),
      n === 1 &&
        M === 0 &&
        (t.mode & 1) === 0 &&
        ((pn = K() + 500), _l && Ct()));
}
function ye(e, t) {
  var n = e.callbackNode;
  md(e, t);
  var r = Jr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ju(n), t === 1))
      e.tag === 0 ? ph(Ns.bind(null, e)) : tc(Ns.bind(null, e)),
        ch(function () {
          (M & 6) === 0 && Ct();
        }),
        (n = null);
    else {
      switch (La(r)) {
        case 1:
          n = Mo;
          break;
        case 4:
          n = _a;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = Oa;
          break;
        default:
          n = Zr;
      }
      n = ef(n, qc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qc(e, t) {
  if (((Hr = -1), (Vr = 0), (M & 6) !== 0)) throw Error(S(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Jr(e, e === b ? te : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = vl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Yc();
    (b !== e || te !== t) && ((Ve = null), (pn = K() + 500), Ft(e, t));
    do
      try {
        Mh();
        break;
      } catch (u) {
        Gc(e, u);
      }
    while (1);
    Go(),
      (hl.current = i),
      (M = l),
      G !== null ? (t = 0) : ((b = null), (te = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ji(e)), l !== 0 && ((r = l), (t = fo(e, l)))), t === 1)
    )
      throw ((n = ir), Ft(e, 0), it(e, r), ye(e, K()), n);
    if (t === 6) it(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !Dh(l) &&
          ((t = vl(e, r)),
          t === 2 && ((i = ji(e)), i !== 0 && ((r = i), (t = fo(e, i)))),
          t === 1))
      )
        throw ((n = ir), Ft(e, 0), it(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          _t(e, he, Ve);
          break;
        case 3:
          if (
            (it(e, r), (r & 130023424) === r && ((t = au + 500 - K()), 10 < t))
          ) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wi(_t.bind(null, e, he, Ve), t);
            break;
          }
          _t(e, he, Ve);
          break;
        case 4:
          if ((it(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
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
                : 1960 * Fh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wi(_t.bind(null, e, he, Ve), r);
            break;
          }
          _t(e, he, Ve);
          break;
        case 5:
          _t(e, he, Ve);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? qc.bind(null, e) : null;
}
function fo(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ho(t)),
    e
  );
}
function ho(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Dh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
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
function it(e, t) {
  for (
    t &= ~su,
      t &= ~Tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ns(e) {
  if ((M & 6) !== 0) throw Error(S(327));
  un();
  var t = Jr(e, 0);
  if ((t & 1) === 0) return ye(e, K()), null;
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && ((t = r), (n = fo(e, r)));
  }
  if (n === 1) throw ((n = ir), Ft(e, 0), it(e, t), ye(e, K()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    _t(e, he, Ve),
    ye(e, K()),
    null
  );
}
function cu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((pn = K() + 500), _l && Ct());
  }
}
function Ut(e) {
  ut !== null && ut.tag === 0 && (M & 6) === 0 && un();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    r = I;
  try {
    if (((Ne.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ne.transition = n), (M = t), (M & 6) === 0 && Ct();
  }
}
function fu() {
  (we = en.current), Q(en);
}
function Ft(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ah(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Wo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rl();
          break;
        case 3:
          dn(), Q(me), Q(ue), eu();
          break;
        case 5:
          bo(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          Q($);
          break;
        case 19:
          Q($);
          break;
        case 10:
          Yo(r.type._context);
          break;
        case 22:
        case 23:
          fu();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (G = e = vt(e.current, null)),
    (te = we = t),
    (X = 0),
    (ir = null),
    (su = Tl = jt = 0),
    (he = $n = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function Gc(e, t) {
  do {
    var n = G;
    try {
      if ((Go(), (Ar.current = dl), fl)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        fl = !1;
      }
      if (
        ((It = 0),
        (J = Y = B = null),
        (Qn = !1),
        (nr = 0),
        (uu.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (ir = t), (G = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            d = u,
            m = d.tag;
          if ((d.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = vs(o);
          if (v !== null) {
            (v.flags &= -257),
              ys(v, o, u, i, t),
              v.mode & 1 && ms(i, a, t),
              (t = v),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else y.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              ms(i, a, t), du();
              break e;
            }
            s = Error(S(426));
          }
        } else if (A && u.mode & 1) {
          var P = vs(o);
          if (P !== null) {
            (P.flags & 65536) === 0 && (P.flags |= 256),
              ys(P, o, u, i, t),
              Ko(hn(s, u));
            break e;
          }
        }
        (i = s = hn(s, u)),
          X !== 4 && (X = 2),
          $n === null ? ($n = [i]) : $n.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Tc(i, s, t);
              ss(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                h = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (pt === null || !pt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Fc(i, u, t);
                ss(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Zc(n);
    } catch (x) {
      (t = x), G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Yc() {
  var e = hl.current;
  return (hl.current = dl), e === null ? dl : e;
}
function du() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    b === null ||
      ((jt & 268435455) === 0 && (Tl & 268435455) === 0) ||
      it(b, te);
}
function vl(e, t) {
  var n = M;
  M |= 2;
  var r = Yc();
  (b !== e || te !== t) && ((Ve = null), Ft(e, t));
  do
    try {
      zh();
      break;
    } catch (l) {
      Gc(e, l);
    }
  while (1);
  if ((Go(), (M = n), (hl.current = r), G !== null)) throw Error(S(261));
  return (b = null), (te = 0), X;
}
function zh() {
  for (; G !== null; ) Xc(G);
}
function Mh() {
  for (; G !== null && !od(); ) Xc(G);
}
function Xc(e) {
  var t = bc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? Zc(e) : (G = t),
    (uu.current = null);
}
function Zc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = _h(n, t, we)), n !== null)) {
        G = n;
        return;
      }
    } else {
      if (((n = Oh(n, t)), n !== null)) {
        (n.flags &= 32767), (G = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (G = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function _t(e, t, n) {
  var r = I,
    l = Ne.transition;
  try {
    (Ne.transition = null), (I = 1), Ih(e, t, n, r);
  } finally {
    (Ne.transition = l), (I = r);
  }
  return null;
}
function Ih(e, t, n, r) {
  do un();
  while (ut !== null);
  if ((M & 6) !== 0) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (vd(e, i),
    e === b && ((G = b = null), (te = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Tr ||
      ((Tr = !0),
      ef(Zr, function () {
        return un(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = I;
    I = 1;
    var u = M;
    (M |= 4),
      (uu.current = null),
      Lh(e, n),
      Wc(n, e),
      nh(Hi),
      (br = !!Bi),
      (Hi = Bi = null),
      (e.current = n),
      Th(n),
      ud(),
      (M = u),
      (I = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Tr && ((Tr = !1), (ut = e), (ml = l)),
    (i = e.pendingLanes),
    i === 0 && (pt = null),
    cd(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw ((pl = !1), (e = ao), (ao = null), e);
  return (
    (ml & 1) !== 0 && e.tag !== 0 && un(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === co ? Bn++ : ((Bn = 0), (co = e))) : (Bn = 0),
    Ct(),
    null
  );
}
function un() {
  if (ut !== null) {
    var e = La(ml),
      t = Ne.transition,
      n = I;
    try {
      if (((Ne.transition = null), (I = 16 > e ? 16 : e), ut === null))
        var r = !1;
      else {
        if (((e = ut), (ut = null), (ml = 0), (M & 6) !== 0))
          throw Error(S(331));
        var l = M;
        for (M |= 4, R = e.current; R !== null; ) {
          var i = R,
            o = i.child;
          if ((R.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (R = a; R !== null; ) {
                  var d = R;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (R = m);
                  else
                    for (; R !== null; ) {
                      d = R;
                      var p = d.sibling,
                        v = d.return;
                      if ((Bc(d), d === a)) {
                        R = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (R = p);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var P = w.sibling;
                    (w.sibling = null), (w = P);
                  } while (w !== null);
                }
              }
              R = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = i), (R = o);
          else
            e: for (; R !== null; ) {
              if (((i = R), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    An(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (R = f);
                break e;
              }
              R = i.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          o = R;
          var h = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && h !== null)
            (h.return = o), (R = h);
          else
            e: for (o = c; R !== null; ) {
              if (((u = R), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, u);
                  }
                } catch (x) {
                  V(u, u.return, x);
                }
              if (u === o) {
                R = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (R = g);
                break e;
              }
              R = u.return;
            }
        }
        if (
          ((M = l), Ct(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(Cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ne.transition = t);
    }
  }
  return !1;
}
function Ls(e, t, n) {
  (t = hn(n, t)),
    (t = Tc(e, t, 1)),
    (e = ht(e, t, 1)),
    (t = ce()),
    e !== null && (sr(e, 1, t), ye(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Ls(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ls(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (pt === null || !pt.has(r)))
        ) {
          (e = hn(n, e)),
            (e = Fc(t, e, 1)),
            (t = ht(t, e, 1)),
            (e = ce()),
            t !== null && (sr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (X === 4 || (X === 3 && (te & 130023424) === te && 500 > K() - au)
        ? Ft(e, 0)
        : (su |= n)),
    ye(e, t);
}
function Jc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = kr), (kr <<= 1), (kr & 130023424) === 0 && (kr = 4194304)));
  var n = ce();
  (e = Ze(e, t)), e !== null && (sr(e, t, n), ye(e, n));
}
function Uh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jc(e, n);
}
function Qh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Jc(e, n);
}
var bc;
bc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (pe = !1), Rh(e, t, n);
      pe = (e.flags & 131072) !== 0;
    }
  else (pe = !1), A && (t.flags & 1048576) !== 0 && nc(t, ol, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var l = an(t, ue.current);
      on(t, n), (l = nu(null, t, r, e, l, n));
      var i = ru();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((i = !0), ll(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Zo(t),
            (l.updater = Ol),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ji(t, r, e, n),
            (t = to(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && Vo(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Br(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = $h(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = Ss(null, t, r, e, n);
            break e;
          case 11:
            t = gs(null, t, r, e, n);
            break e;
          case 14:
            t = ws(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ss(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ic(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          oc(e, t),
          al(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = hn(Error(S(423)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = hn(Error(S(424)), t)), (t = ks(e, t, r, n, l));
            break e;
          } else
            for (
              Se = dt(t.stateNode.containerInfo.firstChild),
                ke = t,
                A = !0,
                Me = null,
                n = cc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((cn(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fc(t),
        e === null && Yi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vi(r, l) ? (o = null) : i !== null && Vi(r, i) && (t.flags |= 32),
        Mc(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yi(t), null;
    case 13:
      return jc(e, t, n);
    case 4:
      return (
        Jo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        gs(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          j(ul, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !me.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ge(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var d = a.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Xi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(S(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Xi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        on(t, n),
        (l = Le(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        ws(e, t, r, l, n)
      );
    case 15:
      return Dc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Br(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), ll(t)) : (e = !1),
        on(t, n),
        sc(t, r, l),
        Ji(t, r, l, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Uc(e, t, n);
    case 22:
      return zc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function ef(e, t) {
  return Ra(e, t);
}
function Ah(e, t, n, r) {
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
function Oe(e, t, n, r) {
  return new Ah(e, t, n, r);
}
function hu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $h(e) {
  if (typeof e == "function") return hu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fo)) return 11;
    if (e === Do) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Oe(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) hu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Vt:
        return Dt(n.children, l, i, t);
      case To:
        (o = 8), (l |= 8);
        break;
      case Ci:
        return (
          (e = Oe(12, n, t, l | 2)), (e.elementType = Ci), (e.lanes = i), e
        );
      case Ei:
        return (e = Oe(13, n, t, l)), (e.elementType = Ei), (e.lanes = i), e;
      case xi:
        return (e = Oe(19, n, t, l)), (e.elementType = xi), (e.lanes = i), e;
      case aa:
        return Fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ua:
              o = 10;
              break e;
            case sa:
              o = 9;
              break e;
            case Fo:
              o = 11;
              break e;
            case Do:
              o = 14;
              break e;
            case tt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Oe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Dt(e, t, n, r) {
  return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = Oe(22, e, r, t)),
    (e.elementType = aa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vi(e, t, n) {
  return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bh(e, t, n, r, l) {
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
    (this.eventTimes = Zl(0)),
    (this.expirationTimes = Zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function pu(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Bh(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Oe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zo(i),
    e
  );
}
function Hh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tf(e) {
  if (!e) return wt;
  e = e._reactInternals;
  e: {
    if (At(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return ec(e, n, t);
  }
  return t;
}
function nf(e, t, n, r, l, i, o, u, s) {
  return (
    (e = pu(n, r, !0, e, l, i, o, u, s)),
    (e.context = tf(null)),
    (n = e.current),
    (r = ce()),
    (l = mt(n)),
    (i = Ge(r, l)),
    (i.callback = t != null ? t : null),
    ht(n, i, l),
    (e.current.lanes = l),
    sr(e, l, r),
    ye(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var l = t.current,
    i = ce(),
    o = mt(l);
  return (
    (n = tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ht(l, t, o)),
    e !== null && (je(e, l, o, i), Qr(e, l, o)),
    o
  );
}
function yl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ts(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function mu(e, t) {
  Ts(e, t), (e = e.alternate) && Ts(e, t);
}
function Vh() {
  return null;
}
var rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function vu(e) {
  this._internalRoot = e;
}
zl.prototype.render = vu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Dl(e, t, null, null);
};
zl.prototype.unmount = vu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function () {
      Dl(null, e, null, null);
    }),
      (t[Xe] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Da();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    lt.splice(n, 0, e), n === 0 && Ma(e);
  }
};
function yu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fs() {}
function Wh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = yl(o);
        i.call(a);
      };
    }
    var o = nf(t, r, e, 0, null, !1, !1, "", Fs);
    return (
      (e._reactRootContainer = o),
      (e[Xe] = o.current),
      Zn(e.nodeType === 8 ? e.parentNode : e),
      Ut(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = yl(s);
      u.call(a);
    };
  }
  var s = pu(e, 0, !1, null, null, !1, !1, "", Fs);
  return (
    (e._reactRootContainer = s),
    (e[Xe] = s.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    Ut(function () {
      Dl(t, s, n, r);
    }),
    s
  );
}
function Il(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = yl(o);
        u.call(s);
      };
    }
    Dl(t, o, e, l);
  } else o = Wh(n, t, e, l, r);
  return yl(o);
}
Ta = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tn(t.pendingLanes);
        n !== 0 &&
          (Io(t, n | 1), ye(t, K()), (M & 6) === 0 && ((pn = K() + 500), Ct()));
      }
      break;
    case 13:
      Ut(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ce();
          je(r, e, 1, l);
        }
      }),
        mu(e, 1);
  }
};
jo = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ce();
      je(t, e, 134217728, n);
    }
    mu(e, 134217728);
  }
};
Fa = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ce();
      je(n, e, t, r);
    }
    mu(e, t);
  }
};
Da = function () {
  return I;
};
za = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_i(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Rl(r);
            if (!l) throw Error(S(90));
            fa(r), _i(r, l);
          }
        }
      }
      break;
    case "textarea":
      ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && tn(e, !!n.multiple, t, !1);
  }
};
Sa = cu;
ka = Ut;
var Kh = { usingClientEntryPoint: !1, Events: [cr, Gt, Rl, ga, wa, cu] },
  On = {
    findFiberByHostInstance: Ot,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  qh = {
    bundleType: On.bundleType,
    version: On.version,
    rendererPackageName: On.rendererPackageName,
    rendererConfig: On.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: be.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: On.findFiberByHostInstance || Vh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      (Cl = Fr.inject(qh)), (Be = Fr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kh;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yu(t)) throw Error(S(200));
  return Hh(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!yu(e)) throw Error(S(299));
  var n = !1,
    r = "",
    l = rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = pu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Xe] = t.current),
    Zn(e.nodeType === 8 ? e.parentNode : e),
    new vu(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = xa(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Ut(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return Il(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!yu(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = nf(t, null, e, 1, n != null ? n : null, l, !1, i, o)),
    (e[Xe] = t.current),
    Zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
Ee.render = function (e, t, n) {
  if (!Ml(t)) throw Error(S(200));
  return Il(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Ml(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Ut(function () {
        Il(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Xe] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = cu;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ml(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Il(e, t, n, !1, r);
};
Ee.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ee);
})(Ys);
var lf,
  Ds = Ys.exports;
(lf = Ds.createRoot), Ds.hydrateRoot;
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gl() {
  return (
    (gl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    gl.apply(this, arguments)
  );
}
var st;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(st || (st = {}));
const zs = "popstate";
function Gh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return po(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : mo(l);
  }
  return Xh(t, n, null, e);
}
function Yh() {
  return Math.random().toString(36).substr(2, 8);
}
function Ms(e) {
  return { usr: e.state, key: e.key };
}
function po(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    gl(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? wn(t) : t,
      { state: n, key: (t && t.key) || r || Yh() }
    )
  );
}
function mo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function wn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = st.Pop,
    s = null;
  function a() {
    (u = st.Pop), s && s({ action: u, location: p.location });
  }
  function d(v, y) {
    u = st.Push;
    let w = po(p.location, v, y);
    n && n(w, v);
    let P = Ms(w),
      f = p.createHref(w);
    try {
      o.pushState(P, "", f);
    } catch {
      l.location.assign(f);
    }
    i && s && s({ action: u, location: w });
  }
  function m(v, y) {
    u = st.Replace;
    let w = po(p.location, v, y);
    n && n(w, v);
    let P = Ms(w),
      f = p.createHref(w);
    o.replaceState(P, "", f), i && s && s({ action: u, location: w });
  }
  let p = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(v) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(zs, a),
        (s = v),
        () => {
          l.removeEventListener(zs, a), (s = null);
        }
      );
    },
    createHref(v) {
      return t(l, v);
    },
    push: d,
    replace: m,
    go(v) {
      return o.go(v);
    },
  };
  return p;
}
var Is;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Is || (Is = {}));
function Zh(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? wn(t) : t,
    l = uf(r.pathname || "/", n);
  if (l == null) return null;
  let i = of(e);
  Jh(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = up(i[u], l);
  return o;
}
function of(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((l, i) => {
      let o = {
        relativePath: l.path || "",
        caseSensitive: l.caseSensitive === !0,
        childrenIndex: i,
        route: l,
      };
      o.relativePath.startsWith("/") &&
        (ge(
          o.relativePath.startsWith(r),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes."
        ),
        (o.relativePath = o.relativePath.slice(r.length)));
      let u = yt([r, o.relativePath]),
        s = n.concat(o);
      l.children &&
        l.children.length > 0 &&
        (ge(
          l.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".')
        ),
        of(l.children, t, s, u)),
        !(l.path == null && !l.index) &&
          t.push({ path: u, score: ip(u, l.index), routesMeta: s });
    }),
    t
  );
}
function Jh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const bh = /^:\w+$/,
  ep = 3,
  tp = 2,
  np = 1,
  rp = 10,
  lp = -2,
  js = (e) => e === "*";
function ip(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(js) && (r += lp),
    t && (r += tp),
    n
      .filter((l) => !js(l))
      .reduce((l, i) => l + (bh.test(i) ? ep : i === "" ? np : rp), r)
  );
}
function op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function up(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      s = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      d = sp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let m = u.route;
    i.push({
      params: r,
      pathname: yt([l, d.pathname]),
      pathnameBase: hp(yt([l, d.pathnameBase])),
      route: m,
    }),
      d.pathnameBase !== "/" && (l = yt([l, d.pathnameBase]));
  }
  return i;
}
function sp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ap(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, d, m) => {
      if (d === "*") {
        let p = u[m] || "";
        o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (a[d] = cp(u[m] || "", d)), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function ap(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    sf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (o, u) => (r.push(u), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (l += n ? "\\/*$" : "(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function cp(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      sf(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function uf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function ge(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function sf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fp(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? wn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : dp(n, t)) : t,
    search: pp(r),
    hash: mp(l),
  };
}
function dp(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function af(e, t, n, r) {
  r === void 0 && (r = !1);
  let l = typeof e == "string" ? wn(e) : gl({}, e),
    i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (r || o == null) u = n;
  else {
    let m = t.length - 1;
    if (o.startsWith("..")) {
      let p = o.split("/");
      for (; p[0] === ".."; ) p.shift(), (m -= 1);
      l.pathname = p.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let s = fp(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    d = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || d) && (s.pathname += "/"), s;
}
const yt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  hp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  mp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class vp {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ""), (this.data = r);
  }
}
function yp(e) {
  return e instanceof vp;
}
var jl = { exports: {} },
  Ul = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gp = O.exports,
  wp = Symbol.for("react.element"),
  Sp = Symbol.for("react.fragment"),
  kp = Object.prototype.hasOwnProperty,
  Cp = gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ep = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) kp.call(t, r) && !Ep.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: wp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Cp.current,
  };
}
Ul.Fragment = Sp;
Ul.jsx = cf;
Ul.jsxs = cf;
(function (e) {
  e.exports = Ul;
})(jl);
const gu = jl.exports.Fragment,
  N = jl.exports.jsx,
  oe = jl.exports.jsxs;
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vo() {
  return (
    (vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vo.apply(this, arguments)
  );
}
function xp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Pp = typeof Object.is == "function" ? Object.is : xp,
  { useState: Rp, useEffect: _p, useLayoutEffect: Op, useDebugValue: Np } = Si;
function Lp(e, t, n) {
  const r = t(),
    [{ inst: l }, i] = Rp({ inst: { value: r, getSnapshot: t } });
  return (
    Op(() => {
      (l.value = r), (l.getSnapshot = t), gi(l) && i({ inst: l });
    }, [e, r, t]),
    _p(
      () => (
        gi(l) && i({ inst: l }),
        e(() => {
          gi(l) && i({ inst: l });
        })
      ),
      [e]
    ),
    Np(r),
    r
  );
}
function gi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Pp(n, r);
  } catch {
    return !0;
  }
}
function Tp(e, t, n) {
  return t();
}
const Fp =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Dp = !Fp,
  zp = Dp ? Tp : Lp;
"useSyncExternalStore" in Si && ((e) => e.useSyncExternalStore)(Si);
const Mp = O.exports.createContext(null),
  Ip = O.exports.createContext(null),
  ff = O.exports.createContext(null),
  wu = O.exports.createContext(null),
  Ql = O.exports.createContext(null),
  Sn = O.exports.createContext({ outlet: null, matches: [] }),
  df = O.exports.createContext(null);
function jp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  dr() || ge(!1);
  let { basename: r, navigator: l } = O.exports.useContext(wu),
    { hash: i, pathname: o, search: u } = pf(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : yt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function dr() {
  return O.exports.useContext(Ql) != null;
}
function Al() {
  return dr() || ge(!1), O.exports.useContext(Ql).location;
}
function hf(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
  );
}
function Up() {
  dr() || ge(!1);
  let { basename: e, navigator: t } = O.exports.useContext(wu),
    { matches: n } = O.exports.useContext(Sn),
    { pathname: r } = Al(),
    l = JSON.stringify(hf(n).map((u) => u.pathnameBase)),
    i = O.exports.useRef(!1);
  return (
    O.exports.useEffect(() => {
      i.current = !0;
    }),
    O.exports.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let a = af(u, JSON.parse(l), r, s.relative === "path");
        e !== "/" &&
          (a.pathname = a.pathname === "/" ? e : yt([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state, s);
      },
      [e, t, l, r]
    )
  );
}
function Qp() {
  let { matches: e } = O.exports.useContext(Sn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function pf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = O.exports.useContext(Sn),
    { pathname: l } = Al(),
    i = JSON.stringify(hf(r).map((o) => o.pathnameBase));
  return O.exports.useMemo(
    () => af(e, JSON.parse(i), l, n === "path"),
    [e, i, l, n]
  );
}
function Ap(e, t) {
  dr() || ge(!1);
  let n = O.exports.useContext(ff),
    { matches: r } = O.exports.useContext(Sn),
    l = r[r.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let o = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Al(),
    s;
  if (t) {
    var a;
    let y = typeof t == "string" ? wn(t) : t;
    o === "/" ||
      ((a = y.pathname) == null ? void 0 : a.startsWith(o)) ||
      ge(!1),
      (s = y);
  } else s = u;
  let d = s.pathname || "/",
    m = o === "/" ? d : d.slice(o.length) || "/",
    p = Zh(e, { pathname: m }),
    v = Vp(
      p &&
        p.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: yt([o, y.pathname]),
            pathnameBase: y.pathnameBase === "/" ? o : yt([o, y.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return t
    ? N(Ql.Provider, {
        value: {
          location: vo(
            {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
            },
            s
          ),
          navigationType: st.Pop,
        },
        children: v,
      })
    : v;
}
function $p() {
  let e = Kp(),
    t = yp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    i = { padding: "2px 4px", backgroundColor: r };
  return oe(gu, {
    children: [
      N("h2", { children: "Unhandled Thrown Error!" }),
      N("h3", { style: { fontStyle: "italic" }, children: t }),
      n ? N("pre", { style: l, children: n }) : null,
      N("p", { children: "\u{1F4BF} Hey developer \u{1F44B}" }),
      oe("p", {
        children: [
          "You can provide a way better UX than this when your app throws errors by providing your own\xA0",
          N("code", { style: i, children: "errorElement" }),
          " props on\xA0",
          N("code", { style: i, children: "<Route>" }),
        ],
      }),
    ],
  });
}
class Bp extends O.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? N(df.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function Hp(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = O.exports.useContext(Mp);
  return (
    l && n.route.errorElement && (l._deepestRenderedBoundaryId = n.route.id),
    N(Sn.Provider, { value: t, children: r })
  );
}
function Vp(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let i = r.findIndex(
      (o) => o.route.id && (l == null ? void 0 : l[o.route.id])
    );
    i >= 0 || ge(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, o, u) => {
    let s = o.route.id ? (l == null ? void 0 : l[o.route.id]) : null,
      a = n ? o.route.errorElement || N($p, {}) : null,
      d = () =>
        N(Hp, {
          match: o,
          routeContext: { outlet: i, matches: t.concat(r.slice(0, u + 1)) },
          children: s ? a : o.route.element !== void 0 ? o.route.element : i,
        });
    return n && (o.route.errorElement || u === 0)
      ? N(Bp, { location: n.location, component: a, error: s, children: d() })
      : d();
  }, null);
}
var yo;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(yo || (yo = {}));
function Wp(e) {
  let t = O.exports.useContext(ff);
  return t || ge(!1), t;
}
function Kp() {
  var e;
  let t = O.exports.useContext(df),
    n = Wp(yo.UseRouteError),
    r = O.exports.useContext(Sn),
    l = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || ge(!1),
    l.route.id || ge(!1),
    (e = n.errors) == null ? void 0 : e[l.route.id])
  );
}
function Kr(e) {
  ge(!1);
}
function qp(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = st.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  dr() && ge(!1);
  let u = t.replace(/^\/*/, "/"),
    s = O.exports.useMemo(
      () => ({ basename: u, navigator: i, static: o }),
      [u, i, o]
    );
  typeof r == "string" && (r = wn(r));
  let {
      pathname: a = "/",
      search: d = "",
      hash: m = "",
      state: p = null,
      key: v = "default",
    } = r,
    y = O.exports.useMemo(() => {
      let w = uf(a, u);
      return w == null
        ? null
        : { pathname: w, search: d, hash: m, state: p, key: v };
    }, [u, a, d, m, p, v]);
  return y == null
    ? null
    : N(wu.Provider, {
        value: s,
        children: N(Ql.Provider, {
          children: n,
          value: { location: y, navigationType: l },
        }),
      });
}
function Gp(e) {
  let { children: t, location: n } = e,
    r = O.exports.useContext(Ip),
    l = r && !t ? r.router.routes : go(t);
  return Ap(l, n);
}
var Us;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Us || (Us = {}));
new Promise(() => {});
function go(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    O.exports.Children.forEach(e, (r, l) => {
      if (!O.exports.isValidElement(r)) return;
      if (r.type === O.exports.Fragment) {
        n.push.apply(n, go(r.props.children, t));
        return;
      }
      r.type !== Kr && ge(!1);
      let i = [...t, l],
        o = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (o.children = go(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Xp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zp(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Xp(e);
}
const Jp = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function bp(e) {
  let { basename: t, children: n, window: r } = e,
    l = O.exports.useRef();
  l.current == null && (l.current = Gh({ window: r, v5Compat: !0 }));
  let i = l.current,
    [o, u] = O.exports.useState({ action: i.action, location: i.location });
  return (
    O.exports.useLayoutEffect(() => i.listen(u), [i]),
    N(qp, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
const Su = O.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      relative: l,
      reloadDocument: i,
      replace: o,
      state: u,
      target: s,
      to: a,
      preventScrollReset: d,
    } = t,
    m = Yp(t, Jp),
    p = jp(a, { relative: l }),
    v = em(a, {
      replace: o,
      state: u,
      target: s,
      preventScrollReset: d,
      relative: l,
    });
  function y(w) {
    r && r(w), w.defaultPrevented || v(w);
  }
  return N("a", { ...m, href: p, onClick: i ? r : y, ref: n, target: s });
});
function em(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    u = Up(),
    s = Al(),
    a = pf(e, { relative: o });
  return O.exports.useCallback(
    (d) => {
      if (Zp(d, n)) {
        d.preventDefault();
        let m = r !== void 0 ? r : mo(s) === mo(a);
        u(e, { replace: m, state: l, preventScrollReset: i, relative: o });
      }
    },
    [s, u, a, r, l, n, e, i, o]
  );
}
class hr {
  constructor() {
    (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    const n = { listener: t };
    return (
      this.listeners.add(n),
      this.onSubscribe(),
      () => {
        this.listeners.delete(n), this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const or = typeof window > "u" || "Deno" in window;
function Pe() {}
function tm(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function mf(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Dn(e, t, n) {
  return $l(e)
    ? typeof t == "function"
      ? { ...n, queryKey: e, queryFn: t }
      : { ...t, queryKey: e }
    : e;
}
function rt(e, t, n) {
  return $l(e) ? [{ ...t, queryKey: e }, n] : [e || {}, t];
}
function Qs(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: l,
    predicate: i,
    queryKey: o,
    stale: u,
  } = e;
  if ($l(o)) {
    if (r) {
      if (t.queryHash !== ku(o, t.options)) return !1;
    } else if (!wl(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if ((n === "active" && !s) || (n === "inactive" && s)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof l < "u" && l !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function As(e, t) {
  const { exact: n, fetching: r, predicate: l, mutationKey: i } = e;
  if ($l(i)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Tt(t.options.mutationKey) !== Tt(i)) return !1;
    } else if (!wl(t.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (l && !l(t))
  );
}
function ku(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Tt)(e);
}
function Tt(e) {
  return JSON.stringify(e, (t, n) =>
    ko(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, l) => ((r[l] = n[l]), r), {})
      : n
  );
}
function wl(e, t) {
  return vf(e, t);
}
function vf(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !vf(e[n], t[n]))
    : !1;
}
function yf(e, t) {
  if (e === t) return e;
  const n = $s(e) && $s(t);
  if (n || (ko(e) && ko(t))) {
    const r = n ? e.length : Object.keys(e).length,
      l = n ? t : Object.keys(t),
      i = l.length,
      o = n ? [] : {};
    let u = 0;
    for (let s = 0; s < i; s++) {
      const a = n ? s : l[s];
      (o[a] = yf(e[a], t[a])), o[a] === e[a] && u++;
    }
    return r === i && u === r ? e : o;
  }
  return t;
}
function So(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function $s(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ko(e) {
  if (!Bs(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Bs(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Bs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $l(e) {
  return Array.isArray(e);
}
function gf(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Hs(e) {
  gf(0).then(e);
}
function nm() {
  if (typeof AbortController == "function") return new AbortController();
}
function Co(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? yf(e, t)
    : t;
}
class rm extends hr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!or && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    this.focused !== t && ((this.focused = t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Sl = new rm(),
  Vs = ["online", "offline"];
class lm extends hr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!or && window.addEventListener) {
          const n = () => t();
          return (
            Vs.forEach((r) => {
              window.addEventListener(r, n, !1);
            }),
            () => {
              Vs.forEach((r) => {
                window.removeEventListener(r, n);
              });
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    this.online !== t && ((this.online = t), this.onOnline());
  }
  onOnline() {
    this.listeners.forEach(({ listener: t }) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const kl = new lm();
function im(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Bl(e) {
  return (e != null ? e : "online") === "online" ? kl.isOnline() : !0;
}
class wf {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function qr(e) {
  return e instanceof wf;
}
function Sf(e) {
  let t = !1,
    n = 0,
    r = !1,
    l,
    i,
    o;
  const u = new Promise((P, f) => {
      (i = P), (o = f);
    }),
    s = (P) => {
      r || (v(new wf(P)), e.abort == null || e.abort());
    },
    a = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    m = () => !Sl.isFocused() || (e.networkMode !== "always" && !kl.isOnline()),
    p = (P) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(P),
        l == null || l(),
        i(P));
    },
    v = (P) => {
      r ||
        ((r = !0), e.onError == null || e.onError(P), l == null || l(), o(P));
    },
    y = () =>
      new Promise((P) => {
        (l = (f) => {
          const c = r || !m();
          return c && P(f), c;
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (l = void 0), r || e.onContinue == null || e.onContinue();
      }),
    w = () => {
      if (r) return;
      let P;
      try {
        P = e.fn();
      } catch (f) {
        P = Promise.reject(f);
      }
      Promise.resolve(P)
        .then(p)
        .catch((f) => {
          var c, h;
          if (r) return;
          const g = (c = e.retry) != null ? c : 3,
            x = (h = e.retryDelay) != null ? h : im,
            E = typeof x == "function" ? x(n, f) : x,
            k =
              g === !0 ||
              (typeof g == "number" && n < g) ||
              (typeof g == "function" && g(n, f));
          if (t || !k) {
            v(f);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, f),
            gf(E)
              .then(() => {
                if (m()) return y();
              })
              .then(() => {
                t ? v(f) : w();
              });
        });
    };
  return (
    Bl(e.networkMode) ? w() : y().then(w),
    {
      promise: u,
      cancel: s,
      continue: () => ((l == null ? void 0 : l()) ? u : Promise.resolve()),
      cancelRetry: a,
      continueRetry: d,
    }
  );
}
const Cu = console;
function om() {
  let e = [],
    t = 0,
    n = (d) => {
      d();
    },
    r = (d) => {
      d();
    };
  const l = (d) => {
      let m;
      t++;
      try {
        m = d();
      } finally {
        t--, t || u();
      }
      return m;
    },
    i = (d) => {
      t
        ? e.push(d)
        : Hs(() => {
            n(d);
          });
    },
    o =
      (d) =>
      (...m) => {
        i(() => {
          d(...m);
        });
      },
    u = () => {
      const d = e;
      (e = []),
        d.length &&
          Hs(() => {
            r(() => {
              d.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: l,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (d) => {
      n = d;
    },
    setBatchNotifyFunction: (d) => {
      r = d;
    },
  };
}
const q = om();
class kf {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      wo(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t != null ? t : or ? 1 / 0 : 5 * 60 * 1e3
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class um extends kf {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || Cu),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || sm(this.options)),
      (this.state = this.initialState),
      this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = Co(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({ type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(Pe).catch(Pe) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !mf(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n && n.refetch({ cancelRefetch: !1 }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({ revert: !0 })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.dispatch({ type: "invalidate" });
  }
  fetch(t, n) {
    var r, l;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((y) => y.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const o = nm(),
      u = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
      s = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    s(u);
    const a = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(u))
          : Promise.reject(
              "Missing queryFn for queryKey '" + this.options.queryHash + "'"
            ),
      d = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: a,
      };
    if (
      (s(d),
      (r = this.options.behavior) == null || r.onFetch(d),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((l = d.fetchOptions) == null ? void 0 : l.meta))
    ) {
      var m;
      this.dispatch({
        type: "fetch",
        meta: (m = d.fetchOptions) == null ? void 0 : m.meta,
      });
    }
    const p = (v) => {
      if (
        ((qr(v) && v.silent) || this.dispatch({ type: "error", error: v }),
        !qr(v))
      ) {
        var y, w, P, f;
        (y = (w = this.cache.config).onError) == null || y.call(w, v, this),
          (P = (f = this.cache.config).onSettled) == null ||
            P.call(f, this.state.data, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = Sf({
        fn: d.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (v) => {
          var y, w, P, f;
          if (typeof v > "u") {
            p(new Error(this.queryHash + " data is undefined"));
            return;
          }
          this.setData(v),
            (y = (w = this.cache.config).onSuccess) == null ||
              y.call(w, v, this),
            (P = (f = this.cache.config).onSettled) == null ||
              P.call(f, v, this.state.error, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: p,
        onFail: (v, y) => {
          this.dispatch({ type: "failed", failureCount: v, error: y });
        },
        onPause: () => {
          this.dispatch({ type: "pause" });
        },
        onContinue: () => {
          this.dispatch({ type: "continue" });
        },
        retry: d.options.retry,
        retryDelay: d.options.retryDelay,
        networkMode: d.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var l, i;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: t.failureCount,
            fetchFailureReason: t.error,
          };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: (l = t.meta) != null ? l : null,
            fetchStatus: Bl(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && { error: null, status: "loading" }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
        case "error":
          const o = t.error;
          return qr(o) && o.revert && this.revertState
            ? { ...this.revertState }
            : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: o,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      q.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({ query: this, type: "updated", action: t });
      });
  }
}
function sm(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = typeof t < "u",
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r != null ? r : Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class am extends hr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var l;
    const i = n.queryKey,
      o = (l = n.queryHash) != null ? l : ku(i, n);
    let u = this.get(o);
    return (
      u ||
        ((u = new um({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: o,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(i),
        })),
        this.add(u)),
      u
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({ type: "removed", query: t }));
  }
  clear() {
    q.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = rt(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((l) => Qs(r, l))
    );
  }
  findAll(t, n) {
    const [r] = rt(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((l) => Qs(r, l))
      : this.queries;
  }
  notify(t) {
    q.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  onFocus() {
    q.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    q.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class cm extends kf {
  constructor(t) {
    super(),
      (this.defaultOptions = t.defaultOptions),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || Cu),
      (this.observers = []),
      (this.state = t.state || fm()),
      this.setOptions(t.options),
      this.scheduleGc();
  }
  setOptions(t) {
    (this.options = { ...this.defaultOptions, ...t }),
      this.updateCacheTime(this.options.cacheTime);
  }
  get meta() {
    return this.options.meta;
  }
  setState(t) {
    this.dispatch({ type: "setState", state: t });
  }
  addObserver(t) {
    this.observers.includes(t) ||
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    var t, n;
    return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null
      ? t
      : this.execute();
  }
  async execute() {
    const t = () => {
        var k;
        return (
          (this.retryer = Sf({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: (C, D) => {
              this.dispatch({ type: "failed", failureCount: C, error: D });
            },
            onPause: () => {
              this.dispatch({ type: "pause" });
            },
            onContinue: () => {
              this.dispatch({ type: "continue" });
            },
            retry: (k = this.options.retry) != null ? k : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, l, i, o, u, s, a, d;
      if (!n) {
        var m, p, v, y;
        this.dispatch({ type: "loading", variables: this.options.variables }),
          await ((m = (p = this.mutationCache.config).onMutate) == null
            ? void 0
            : m.call(p, this.state.variables, this));
        const C = await ((v = (y = this.options).onMutate) == null
          ? void 0
          : v.call(y, this.state.variables));
        C !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: C,
            variables: this.state.variables,
          });
      }
      const k = await t();
      return (
        await ((r = (l = this.mutationCache.config).onSuccess) == null
          ? void 0
          : r.call(l, k, this.state.variables, this.state.context, this)),
        await ((i = (o = this.options).onSuccess) == null
          ? void 0
          : i.call(o, k, this.state.variables, this.state.context)),
        await ((u = (s = this.mutationCache.config).onSettled) == null
          ? void 0
          : u.call(s, k, null, this.state.variables, this.state.context, this)),
        await ((a = (d = this.options).onSettled) == null
          ? void 0
          : a.call(d, k, null, this.state.variables, this.state.context)),
        this.dispatch({ type: "success", data: k }),
        k
      );
    } catch (k) {
      try {
        var w, P, f, c, h, g, x, E;
        throw (
          (await ((w = (P = this.mutationCache.config).onError) == null
            ? void 0
            : w.call(P, k, this.state.variables, this.state.context, this)),
          await ((f = (c = this.options).onError) == null
            ? void 0
            : f.call(c, k, this.state.variables, this.state.context)),
          await ((h = (g = this.mutationCache.config).onSettled) == null
            ? void 0
            : h.call(
                g,
                void 0,
                k,
                this.state.variables,
                this.state.context,
                this
              )),
          await ((x = (E = this.options).onSettled) == null
            ? void 0
            : x.call(E, void 0, k, this.state.variables, this.state.context)),
          k)
        );
      } finally {
        this.dispatch({ type: "error", error: k });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return { ...r, failureCount: t.failureCount, failureReason: t.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !Bl(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            failureReason: t.error,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return { ...r, ...t.state };
      }
    };
    (this.state = n(this.state)),
      q.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function fm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class dm extends hr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const l = new cm({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
    });
    return this.add(l), l;
  }
  add(t) {
    this.mutations.push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({ type: "removed", mutation: t });
  }
  clear() {
    q.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => As(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => As(t, n));
  }
  notify(t) {
    q.batch(() => {
      this.listeners.forEach(({ listener: n }) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    var t;
    return (
      (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
        .then(() => {
          const n = this.mutations.filter((r) => r.state.isPaused);
          return q.batch(() =>
            n.reduce(
              (r, l) => r.then(() => l.continue().catch(Pe)),
              Promise.resolve()
            )
          );
        })
        .then(() => {
          this.resuming = void 0;
        })),
      this.resuming
    );
  }
}
function hm() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, l, i, o;
        const u =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          s =
            (r = e.fetchOptions) == null || (l = r.meta) == null
              ? void 0
              : l.fetchMore,
          a = s == null ? void 0 : s.pageParam,
          d = (s == null ? void 0 : s.direction) === "forward",
          m = (s == null ? void 0 : s.direction) === "backward",
          p = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          v = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
        let y = v,
          w = !1;
        const P = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => {
                var k;
                if ((k = e.signal) != null && k.aborted) w = !0;
                else {
                  var C;
                  (C = e.signal) == null ||
                    C.addEventListener("abort", () => {
                      w = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          f =
            e.options.queryFn ||
            (() =>
              Promise.reject(
                "Missing queryFn for queryKey '" + e.options.queryHash + "'"
              )),
          c = (E, k, C, D) => (
            (y = D ? [k, ...y] : [...y, k]), D ? [C, ...E] : [...E, C]
          ),
          h = (E, k, C, D) => {
            if (w) return Promise.reject("Cancelled");
            if (typeof C > "u" && !k && E.length) return Promise.resolve(E);
            const L = {
              queryKey: e.queryKey,
              pageParam: C,
              meta: e.options.meta,
            };
            P(L);
            const se = f(L);
            return Promise.resolve(se).then((Et) => c(E, C, Et, D));
          };
        let g;
        if (!p.length) g = h([]);
        else if (d) {
          const E = typeof a < "u",
            k = E ? a : Ws(e.options, p);
          g = h(p, E, k);
        } else if (m) {
          const E = typeof a < "u",
            k = E ? a : pm(e.options, p);
          g = h(p, E, k, !0);
        } else {
          y = [];
          const E = typeof e.options.getNextPageParam > "u";
          g = (u && p[0] ? u(p[0], 0, p) : !0)
            ? h([], E, v[0])
            : Promise.resolve(c([], v[0], p[0]));
          for (let C = 1; C < p.length; C++)
            g = g.then((D) => {
              if (u && p[C] ? u(p[C], C, p) : !0) {
                const se = E ? v[C] : Ws(e.options, D);
                return h(D, E, se);
              }
              return Promise.resolve(c(D, v[C], p[C]));
            });
        }
        return g.then((E) => ({ pages: E, pageParams: y }));
      };
    },
  };
}
function Ws(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function pm(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class mm {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new am()),
      (this.mutationCache = t.mutationCache || new dm()),
      (this.logger = t.logger || Cu),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []),
      (this.mountCount = 0);
  }
  mount() {
    this.mountCount++,
      this.mountCount === 1 &&
        ((this.unsubscribeFocus = Sl.subscribe(() => {
          Sl.isFocused() &&
            (this.resumePausedMutations(), this.queryCache.onFocus());
        })),
        (this.unsubscribeOnline = kl.subscribe(() => {
          kl.isOnline() &&
            (this.resumePausedMutations(), this.queryCache.onOnline());
        })));
  }
  unmount() {
    var t, n;
    this.mountCount--,
      this.mountCount === 0 &&
        ((t = this.unsubscribeFocus) == null || t.call(this),
        (this.unsubscribeFocus = void 0),
        (n = this.unsubscribeOnline) == null || n.call(this),
        (this.unsubscribeOnline = void 0));
  }
  isFetching(t, n) {
    const [r] = rt(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(t, n, r) {
    const l = Dn(t, n, r),
      i = this.getQueryData(l.queryKey);
    return i ? Promise.resolve(i) : this.fetchQuery(l);
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const l = r.data;
        return [n, l];
      });
  }
  setQueryData(t, n, r) {
    const l = this.queryCache.find(t),
      i = l == null ? void 0 : l.state.data,
      o = tm(n, i);
    if (typeof o > "u") return;
    const u = Dn(t),
      s = this.defaultQueryOptions(u);
    return this.queryCache.build(this, s).setData(o, { ...r, manual: !0 });
  }
  setQueriesData(t, n, r) {
    return q.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: l }) => [l, this.setQueryData(l, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = rt(t, n),
      l = this.queryCache;
    q.batch(() => {
      l.findAll(r).forEach((i) => {
        l.remove(i);
      });
    });
  }
  resetQueries(t, n, r) {
    const [l, i] = rt(t, n, r),
      o = this.queryCache,
      u = { type: "active", ...l };
    return q.batch(
      () => (
        o.findAll(l).forEach((s) => {
          s.reset();
        }),
        this.refetchQueries(u, i)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [l, i = {}] = rt(t, n, r);
    typeof i.revert > "u" && (i.revert = !0);
    const o = q.batch(() => this.queryCache.findAll(l).map((u) => u.cancel(i)));
    return Promise.all(o).then(Pe).catch(Pe);
  }
  invalidateQueries(t, n, r) {
    const [l, i] = rt(t, n, r);
    return q.batch(() => {
      var o, u;
      if (
        (this.queryCache.findAll(l).forEach((a) => {
          a.invalidate();
        }),
        l.refetchType === "none")
      )
        return Promise.resolve();
      const s = {
        ...l,
        type:
          (o = (u = l.refetchType) != null ? u : l.type) != null ? o : "active",
      };
      return this.refetchQueries(s, i);
    });
  }
  refetchQueries(t, n, r) {
    const [l, i] = rt(t, n, r),
      o = q.batch(() =>
        this.queryCache
          .findAll(l)
          .filter((s) => !s.isDisabled())
          .map((s) => {
            var a;
            return s.fetch(void 0, {
              ...i,
              cancelRefetch:
                (a = i == null ? void 0 : i.cancelRefetch) != null ? a : !0,
              meta: { refetchPage: l.refetchPage },
            });
          })
      );
    let u = Promise.all(o).then(Pe);
    return (i != null && i.throwOnError) || (u = u.catch(Pe)), u;
  }
  fetchQuery(t, n, r) {
    const l = Dn(t, n, r),
      i = this.defaultQueryOptions(l);
    typeof i.retry > "u" && (i.retry = !1);
    const o = this.queryCache.build(this, i);
    return o.isStaleByTime(i.staleTime)
      ? o.fetch(i)
      : Promise.resolve(o.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Pe).catch(Pe);
  }
  fetchInfiniteQuery(t, n, r) {
    const l = Dn(t, n, r);
    return (l.behavior = hm()), this.fetchQuery(l);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Pe).catch(Pe);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((l) => Tt(t) === Tt(l.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({ queryKey: t, defaultOptions: n });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => wl(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((l) => Tt(t) === Tt(l.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({ mutationKey: t, defaultOptions: n });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => wl(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = ku(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class vm extends hr {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.currentQuery.addObserver(this),
      Ks(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Eo(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return Eo(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = new Set()),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      l = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      So(r, this.options) ||
        this.client.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.currentQuery,
          observer: this,
        }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const i = this.hasListeners();
    i && qs(this.currentQuery, l, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      i &&
        (this.currentQuery !== l ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    i &&
      (this.currentQuery !== l ||
        this.options.enabled !== r.enabled ||
        o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t),
      r = this.createResult(n, t);
    return (
      gm(this, r, t) &&
        ((this.currentResult = r),
        (this.currentResultOptions = this.options),
        (this.currentResultState = this.currentQuery.state)),
      r
    );
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({ ...n, meta: { refetchPage: t } });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(Pe)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      or || this.currentResult.isStale || !wo(this.options.staleTime))
    )
      return;
    const n = mf(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        or ||
        this.options.enabled === !1 ||
        !wo(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Sl.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      l = this.options,
      i = this.currentResult,
      o = this.currentResultState,
      u = this.currentResultOptions,
      s = t !== r,
      a = s ? t.state : this.currentQueryInitialState,
      d = s ? this.currentResult : this.previousQueryResult,
      { state: m } = t;
    let {
        dataUpdatedAt: p,
        error: v,
        errorUpdatedAt: y,
        fetchStatus: w,
        status: P,
      } = m,
      f = !1,
      c = !1,
      h;
    if (n._optimisticResults) {
      const C = this.hasListeners(),
        D = !C && Ks(t, n),
        L = C && qs(t, r, n, l);
      (D || L) &&
        ((w = Bl(t.options.networkMode) ? "fetching" : "paused"),
        p || (P = "loading")),
        n._optimisticResults === "isRestoring" && (w = "idle");
    }
    if (
      n.keepPreviousData &&
      !m.dataUpdatedAt &&
      d != null &&
      d.isSuccess &&
      P !== "error"
    )
      (h = d.data), (p = d.dataUpdatedAt), (P = d.status), (f = !0);
    else if (n.select && typeof m.data < "u")
      if (
        i &&
        m.data === (o == null ? void 0 : o.data) &&
        n.select === this.selectFn
      )
        h = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (h = n.select(m.data)),
            (h = Co(i == null ? void 0 : i.data, h, n)),
            (this.selectResult = h),
            (this.selectError = null);
        } catch (C) {
          this.selectError = C;
        }
    else h = m.data;
    if (typeof n.placeholderData < "u" && typeof h > "u" && P === "loading") {
      let C;
      if (
        i != null &&
        i.isPlaceholderData &&
        n.placeholderData === (u == null ? void 0 : u.placeholderData)
      )
        C = i.data;
      else if (
        ((C =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof C < "u")
      )
        try {
          (C = n.select(C)), (this.selectError = null);
        } catch (D) {
          this.selectError = D;
        }
      typeof C < "u" &&
        ((P = "success"),
        (h = Co(i == null ? void 0 : i.data, C, n)),
        (c = !0));
    }
    this.selectError &&
      ((v = this.selectError),
      (h = this.selectResult),
      (y = Date.now()),
      (P = "error"));
    const g = w === "fetching",
      x = P === "loading",
      E = P === "error";
    return {
      status: P,
      fetchStatus: w,
      isLoading: x,
      isSuccess: P === "success",
      isError: E,
      isInitialLoading: x && g,
      data: h,
      dataUpdatedAt: p,
      error: v,
      errorUpdatedAt: y,
      failureCount: m.fetchFailureCount,
      failureReason: m.fetchFailureReason,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount:
        m.dataUpdateCount > a.dataUpdateCount ||
        m.errorUpdateCount > a.errorUpdateCount,
      isFetching: g,
      isRefetching: g && !x,
      isLoadingError: E && m.dataUpdatedAt === 0,
      isPaused: w === "paused",
      isPlaceholderData: c,
      isPreviousData: f,
      isRefetchError: E && m.dataUpdatedAt !== 0,
      isStale: Eu(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      So(r, n))
    )
      return;
    this.currentResult = r;
    const l = { cache: !0 },
      i = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: o } = this.options,
          u = typeof o == "function" ? o() : o;
        if (u === "all" || (!u && !this.trackedProps.size)) return !0;
        const s = new Set(u != null ? u : this.trackedProps);
        return (
          this.options.useErrorBoundary && s.add("error"),
          Object.keys(this.currentResult).some((a) => {
            const d = a;
            return this.currentResult[d] !== n[d] && s.has(d);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (l.listeners = !0),
      this.notify({ ...l, ...t });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !qr(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    q.batch(() => {
      if (t.onSuccess) {
        var n, r, l, i;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (l = (i = this.options).onSettled) == null ||
            l.call(i, this.currentResult.data, null);
      } else if (t.onError) {
        var o, u, s, a;
        (o = (u = this.options).onError) == null ||
          o.call(u, this.currentResult.error),
          (s = (a = this.options).onSettled) == null ||
            s.call(a, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach(({ listener: d }) => {
          d(this.currentResult);
        }),
        t.cache &&
          this.client.getQueryCache().notify({
            query: this.currentQuery,
            type: "observerResultsUpdated",
          });
    });
  }
}
function ym(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Ks(e, t) {
  return ym(e, t) || (e.state.dataUpdatedAt > 0 && Eo(e, t, t.refetchOnMount));
}
function Eo(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && Eu(e, t));
  }
  return !1;
}
function qs(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    Eu(e, n)
  );
}
function Eu(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function gm(e, t, n) {
  return n.keepPreviousData
    ? !1
    : n.placeholderData !== void 0
    ? t.isPlaceholderData
    : !So(e.getCurrentResult(), t);
}
var Cf = { exports: {} },
  Ef = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mn = O.exports;
function wm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sm = typeof Object.is == "function" ? Object.is : wm,
  km = mn.useState,
  Cm = mn.useEffect,
  Em = mn.useLayoutEffect,
  xm = mn.useDebugValue;
function Pm(e, t) {
  var n = t(),
    r = km({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    i = r[1];
  return (
    Em(
      function () {
        (l.value = n), (l.getSnapshot = t), wi(l) && i({ inst: l });
      },
      [e, n, t]
    ),
    Cm(
      function () {
        return (
          wi(l) && i({ inst: l }),
          e(function () {
            wi(l) && i({ inst: l });
          })
        );
      },
      [e]
    ),
    xm(n),
    n
  );
}
function wi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Sm(e, n);
  } catch {
    return !0;
  }
}
function Rm(e, t) {
  return t();
}
var _m =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Rm
    : Pm;
Ef.useSyncExternalStore =
  mn.useSyncExternalStore !== void 0 ? mn.useSyncExternalStore : _m;
(function (e) {
  e.exports = Ef;
})(Cf);
const Om = Cf.exports.useSyncExternalStore,
  Gs = O.exports.createContext(void 0),
  xf = O.exports.createContext(!1);
function Pf(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = Gs),
        window.ReactQueryClientContext)
      : Gs)
  );
}
const Nm = ({ context: e } = {}) => {
    const t = O.exports.useContext(Pf(e, O.exports.useContext(xf)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  Lm = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    O.exports.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const l = Pf(n, r);
    return N(xf.Provider, {
      value: !n && r,
      children: N(l.Provider, { value: e, children: t }),
    });
  },
  Rf = O.exports.createContext(!1),
  Tm = () => O.exports.useContext(Rf);
Rf.Provider;
function Fm() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const Dm = O.exports.createContext(Fm()),
  zm = () => O.exports.useContext(Dm);
function Mm(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
const Im = (e, t) => {
    (e.suspense || e.useErrorBoundary) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  jm = (e) => {
    O.exports.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  Um = ({ result: e, errorResetBoundary: t, useErrorBoundary: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && Mm(n, [e.error, r]),
  Qm = (e) => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
  },
  Am = (e, t) => e.isLoading && e.isFetching && !t,
  $m = (e, t, n) => (e == null ? void 0 : e.suspense) && Am(t, n),
  Bm = (e, t, n) =>
    t
      .fetchOptimistic(e)
      .then(({ data: r }) => {
        e.onSuccess == null || e.onSuccess(r),
          e.onSettled == null || e.onSettled(r, null);
      })
      .catch((r) => {
        n.clearReset(),
          e.onError == null || e.onError(r),
          e.onSettled == null || e.onSettled(void 0, r);
      });
function Hm(e, t) {
  const n = Nm({ context: e.context }),
    r = Tm(),
    l = zm(),
    i = n.defaultQueryOptions(e);
  (i._optimisticResults = r ? "isRestoring" : "optimistic"),
    i.onError && (i.onError = q.batchCalls(i.onError)),
    i.onSuccess && (i.onSuccess = q.batchCalls(i.onSuccess)),
    i.onSettled && (i.onSettled = q.batchCalls(i.onSettled)),
    Qm(i),
    Im(i, l),
    jm(l);
  const [o] = O.exports.useState(() => new t(n, i)),
    u = o.getOptimisticResult(i);
  if (
    (Om(
      O.exports.useCallback(
        (s) => {
          const a = r ? () => {} : o.subscribe(q.batchCalls(s));
          return o.updateResult(), a;
        },
        [o, r]
      ),
      () => o.getCurrentResult(),
      () => o.getCurrentResult()
    ),
    O.exports.useEffect(() => {
      o.setOptions(i, { listeners: !1 });
    }, [i, o]),
    $m(i, u, r))
  )
    throw Bm(i, o, l);
  if (
    Um({
      result: u,
      errorResetBoundary: l,
      useErrorBoundary: i.useErrorBoundary,
      query: o.getCurrentQuery(),
    })
  )
    throw u.error;
  return i.notifyOnChangeProps ? u : o.trackResult(u);
}
function Vm(e, t, n) {
  const r = Dn(e, t, n);
  return Hm(r, vm);
}
const Wm = async ({ queryKey: e }) => {
    const t = e[1],
      n = await fetch(`https://pets-v2.dev-apis.com/pets?id=${t}`);
    if (!n.ok) throw new Error("An error occurred while fetching the data");
    return n.json();
  },
  Km = () => {
    const { id: e } = Qp(),
      t = Vm(["pets", e], Wm);
    if (t.isLoading) return N("div", { className: "loading-pane" });
    const n = t.data.pets[0];
    return oe("div", {
      className: "details",
      children: [
        N("h2", { children: n.name }),
        N("h2", {
          children: `${n.animal} - ${n.breed} - ${n.city}, ${n.state}`,
        }),
        N("p", { children: n.description }),
        oe("button", { children: ["Adopt ", n.name] }),
      ],
    });
  },
  qm = ({ name: e, animal: t, breed: n, images: r, location: l, id: i }) => {
    let o = "http://pets-images.dev-apis.com/pets/none.jpg";
    return (
      r.length && (o = r[0]),
      N(gu, {
        children: oe(Su, {
          to: `/details/${i}`,
          className: "pet",
          children: [
            N("div", {
              className: "image-container",
              children: N("img", { src: o, alt: e }),
            }),
            oe("div", {
              className: "info",
              children: [
                N("h2", { children: e }),
                N("h2", { children: `${t} - ${n} - ${l}` }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Dr = {};
function Gm(e) {
  const [t, n] = O.exports.useState([]),
    [r, l] = O.exports.useState("unloaded");
  return (
    O.exports.useEffect(() => {
      e ? (Dr[e] ? n(Dr[e]) : i()) : n([]);
      async function i() {
        n([]), l("loading");
        const u = await (
          await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${e}`)
        ).json();
        (Dr[e] = u.breeds || []), n(Dr[e]), l("loaded");
      }
    }, [e]),
    [t, r]
  );
}
const Ym = ({ pets: e }) =>
    N("div", {
      className: "search",
      children: e.length
        ? e.map((t) =>
            N(
              qm,
              {
                animal: t.animal,
                name: t.name,
                breed: t.breed,
                images: t.images,
                location: `${t.city}, ${t.state}`,
                id: t.id,
              },
              t.id
            )
          )
        : N("h2", { children: "No Pets Found" }),
    }),
  Xm = ["Select", "bird", "cat", "dog", "rabbit", "reptile"],
  Zm = () => {
    const [e, t] = O.exports.useState(""),
      [n, r] = O.exports.useState(""),
      [l, i] = O.exports.useState(""),
      [o, u] = O.exports.useState([]),
      [s] = Gm(n);
    O.exports.useEffect(() => {
      a();
    }, []);
    async function a() {
      const m = await (
        await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${n}&location=${e}&breed=${l}`
        )
      ).json();
      u(m.pets);
    }
    return oe("div", {
      className: "search-params",
      children: [
        oe("form", {
          onSubmit: (d) => {
            d.preventDefault(), a();
          },
          children: [
            N("label", { htmlFor: "location", children: "Location" }),
            N("input", {
              onChange: (d) => t(d.target.value),
              id: "location",
              value: e,
              placeholder: "Location",
            }),
            oe("label", {
              htmlFor: "animal",
              children: [
                "Animal",
                N("select", {
                  id: "animal",
                  value: n,
                  onChange: (d) => {
                    r(d.target.value), i("");
                  },
                  children: Xm.map((d) =>
                    N("option", { value: d, children: d }, d)
                  ),
                }),
              ],
            }),
            oe("label", {
              htmlFor: "breed",
              children: [
                "Breed",
                oe("select", {
                  id: "breed",
                  value: l,
                  onChange: (d) => i(d.target.value),
                  children: [
                    N("option", { value: "", children: "Select" }),
                    s.map((d) => N("option", { value: d, children: d }, d)),
                  ],
                }),
              ],
            }),
            N("button", { children: "Submit" }),
          ],
        }),
        N(Ym, { pets: o }),
      ],
    });
  };
const Jm = () =>
    N(gu, {
      children: oe("div", {
        className: "landing",
        children: [
          oe("div", {
            className: "text-container",
            children: [
              N("p", { className: "landing-text", children: "Hello Hoomans!" }),
              oe("p", {
                className: "sub-text",
                children: [
                  "Welcome to the Pet Adoption App.",
                  N("br", {}),
                  "Adopt them and take home a friend for life.",
                ],
              }),
              N(Su, {
                to: "/search",
                className: "search-link",
                children: N("button", {
                  className: "search-btn",
                  children: "Find Here",
                }),
              }),
            ],
          }),
          N("img", {
            className: "animal-img",
            src: " ./Landing/animal.jpeg",
            alt: "animal",
          }),
        ],
      }),
    }),
  bm = new mm({
    defaultOptions: { queries: { staletime: 1 / 0, cacheTime: 1 / 0 } },
  }),
  ev = () =>
    N(bp, {
      children: oe(Lm, {
        client: bm,
        children: [
          N("header", { children: N(Su, { to: "/", children: "Adopt Me!" }) }),
          oe(Gp, {
            children: [
              N(Kr, { path: "details/:id", element: N(Km, {}) }),
              N(Kr, { path: "/", element: N(Jm, {}) }),
              N(Kr, { path: "/search", element: N(Zm, {}) }),
            ],
          }),
        ],
      }),
    }),
  tv = document.getElementById("root"),
  nv = lf(tv);
nv.render(N(ev, {}));
