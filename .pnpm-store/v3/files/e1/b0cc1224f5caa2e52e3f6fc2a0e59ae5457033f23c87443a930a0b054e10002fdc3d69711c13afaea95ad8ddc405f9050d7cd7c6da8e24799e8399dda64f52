import { inject as ol, provide as ll, shallowRef as Mn, watchEffect as ye, readonly as Ka, customRef as sl, ref as I, computed as B, watch as te, nextTick as le, getCurrentScope as ur, onScopeDispose as rl, effectScope as il, unref as o, onBeforeUnmount as Vn, onMounted as se, isRef as Xe, reactive as Ma, getCurrentInstance as vt, onUpdated as ul, Fragment as _e, defineComponent as w, toRefs as ne, renderSlot as C, onBeforeUpdate as dr, toHandlerKey as cr, camelize as dl, toRef as pr, onUnmounted as Ie, mergeProps as k, h as pt, Comment as fr, cloneVNode as Fn, openBlock as b, createBlock as _, withCtx as y, createVNode as Y, createCommentVNode as pe, withKeys as re, Teleport as Wt, normalizeProps as K, guardReactiveProps as j, normalizeStyle as Oe, withModifiers as ie, createElementBlock as ce, withDirectives as Ha, vShow as Ln, createElementVNode as Ue, toDisplayString as $e, createTextVNode as ve, mergeDefaults as cl, renderList as va, markRaw as vr, watchSyncEffect as mr, resolveDynamicComponent as Ge, toHandlers as Nn, triggerRef as Mo, useSlots as Wa, onBeforeMount as pl, vModelSelect as hr, toRaw as yr } from "vue";
import { CalendarDateTime as gr, CalendarDate as br, DateFormatter as lt, today as Cr, getLocalTimeZone as zn, isEqualMonth as Vo, isSameDay as Te, isEqualDay as Ee, isToday as fl, isSameMonth as vl } from "@internationalized/date";
import { k as ra, t as Le, j as ml, d as wt, n as Sa, m as ke, l as Et, x as hl, u as wr, r as _r } from "./calendar-ChFCRr4K.js";
import { useFloating as xr, autoUpdate as Sr, offset as Er, flip as Fo, shift as Pr, limitShift as Dr, size as $r, arrow as Br, hide as Ir } from "@floating-ui/vue";
import { NumberFormatter as Tr, NumberParser as Rr } from "@internationalized/number";
function Q(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = ol(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (ll(n, r), r)];
}
function zt(a, t, e) {
  const n = e.originalEvent.target, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function Kt(a, t = Number.NEGATIVE_INFINITY, e = Number.POSITIVE_INFINITY) {
  return Math.min(Math.max(a, t), e);
}
function Ea(a, t) {
  let e = a;
  const n = t.toString(), l = n.indexOf("."), s = l >= 0 ? n.length - l : 0;
  if (s > 0) {
    const r = 10 ** s;
    e = Math.round(e * r) / r;
  }
  return e;
}
function Ar(a, t, e, n) {
  t = Number(t), e = Number(e);
  const l = (a - (Number.isNaN(t) ? 0 : t)) % n;
  let s = Ea(Math.abs(l) * 2 >= n ? a + Math.sign(l) * (n - Math.abs(l)) : a - l, n);
  return Number.isNaN(t) ? !Number.isNaN(e) && s > e && (s = Math.floor(Ea(e / n, n)) * n) : s < t ? s = t : !Number.isNaN(e) && s > e && (s = t + Math.floor(Ea((e - t) / n, n)) * n), s = Ea(s, n), s;
}
function Or(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var kr = function a(t, e) {
  if (t === e) return !0;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor) return !1;
    var n, l, s;
    if (Array.isArray(t)) {
      if (n = t.length, n != e.length) return !1;
      for (l = n; l-- !== 0; )
        if (!a(t[l], e[l])) return !1;
      return !0;
    }
    if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString) return t.toString() === e.toString();
    if (s = Object.keys(t), n = s.length, n !== Object.keys(e).length) return !1;
    for (l = n; l-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, s[l])) return !1;
    for (l = n; l-- !== 0; ) {
      var r = s[l];
      if (!a(t[r], e[r])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
};
const Ye = /* @__PURE__ */ Or(kr);
function Mr(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function St(a, t, e) {
  const n = a.findIndex((i) => Ye(i, t)), l = a.findIndex((i) => Ye(i, e));
  if (n === -1 || l === -1)
    return [];
  const [s, r] = [n, l].sort((i, u) => i - u);
  return a.slice(s, r + 1);
}
const ma = typeof document < "u";
function Nt(a) {
  return a == null;
}
function jt(a) {
  const { defaultValue: t, defaultPlaceholder: e, granularity: n = "day" } = a;
  if (Array.isArray(t) && t.length)
    return t.at(-1).copy();
  if (t && !Array.isArray(t))
    return t.copy();
  if (e)
    return e.copy();
  const l = /* @__PURE__ */ new Date(), s = l.getFullYear(), r = l.getMonth() + 1, i = l.getDate();
  return ["hour", "minute", "second"].includes(n ?? "day") ? new gr(s, r, i, 0, 0, 0) : new br(s, r, i);
}
const Vr = [
  "ach",
  "af",
  "am",
  "an",
  "ar",
  "ast",
  "az",
  "be",
  "bg",
  "bn",
  "br",
  "bs",
  "ca",
  "cak",
  "ckb",
  "cs",
  "cy",
  "da",
  "de",
  "dsb",
  "el",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "fa",
  "ff",
  "fi",
  "fr",
  "fy",
  "ga",
  "gd",
  "gl",
  "he",
  "hr",
  "hsb",
  "hu",
  "ia",
  "id",
  "it",
  "ja",
  "ka",
  "kk",
  "kn",
  "ko",
  "lb",
  "lo",
  "lt",
  "lv",
  "meh",
  "ml",
  "ms",
  "nl",
  "nn",
  "no",
  "oc",
  "pl",
  "pt",
  "rm",
  "ro",
  "ru",
  "sc",
  "scn",
  "sk",
  "sl",
  "sr",
  "sv",
  "szl",
  "tg",
  "th",
  "tr",
  "uk",
  "zh-CN",
  "zh-TW"
], Fr = ["year", "month", "day"], hn = {
  ach: { year: "mwaka", month: "dwe", day: "nino" },
  af: { year: "jjjj", month: "mm", day: "dd" },
  am: { year: "ዓዓዓዓ", month: "ሚሜ", day: "ቀቀ" },
  an: { year: "aaaa", month: "mm", day: "dd" },
  ar: { year: "سنة", month: "شهر", day: "يوم" },
  ast: { year: "aaaa", month: "mm", day: "dd" },
  az: { year: "iiii", month: "aa", day: "gg" },
  be: { year: "гггг", month: "мм", day: "дд" },
  bg: { year: "гггг", month: "мм", day: "дд" },
  bn: { year: "yyyy", month: "মিমি", day: "dd" },
  br: { year: "bbbb", month: "mm", day: "dd" },
  bs: { year: "gggg", month: "mm", day: "dd" },
  ca: { year: "aaaa", month: "mm", day: "dd" },
  cak: { year: "jjjj", month: "ii", day: "q'q'" },
  ckb: { year: "ساڵ", month: "مانگ", day: "ڕۆژ" },
  cs: { year: "rrrr", month: "mm", day: "dd" },
  cy: { year: "bbbb", month: "mm", day: "dd" },
  da: { year: "åååå", month: "mm", day: "dd" },
  de: { year: "jjjj", month: "mm", day: "tt" },
  dsb: { year: "llll", month: "mm", day: "źź" },
  el: { year: "εεεε", month: "μμ", day: "ηη" },
  en: { year: "yyyy", month: "mm", day: "dd" },
  eo: { year: "jjjj", month: "mm", day: "tt" },
  es: { year: "aaaa", month: "mm", day: "dd" },
  et: { year: "aaaa", month: "kk", day: "pp" },
  eu: { year: "uuuu", month: "hh", day: "ee" },
  fa: { year: "سال", month: "ماه", day: "روز" },
  ff: { year: "hhhh", month: "ll", day: "ññ" },
  fi: { year: "vvvv", month: "kk", day: "pp" },
  fr: { year: "aaaa", month: "mm", day: "jj" },
  fy: { year: "jjjj", month: "mm", day: "dd" },
  ga: { year: "bbbb", month: "mm", day: "ll" },
  gd: { year: "bbbb", month: "mm", day: "ll" },
  gl: { year: "aaaa", month: "mm", day: "dd" },
  he: { year: "שנה", month: "חודש", day: "יום" },
  hr: { year: "gggg", month: "mm", day: "dd" },
  hsb: { year: "llll", month: "mm", day: "dd" },
  hu: { year: "éééé", month: "hh", day: "nn" },
  ia: { year: "aaaa", month: "mm", day: "dd" },
  id: { year: "tttt", month: "bb", day: "hh" },
  it: { year: "aaaa", month: "mm", day: "gg" },
  ja: { year: " 年 ", month: "月", day: "日" },
  ka: { year: "წწწწ", month: "თთ", day: "რრ" },
  kk: { year: "жжжж", month: "аа", day: "кк" },
  kn: { year: "ವವವವ", month: "ಮಿಮೀ", day: "ದಿದಿ" },
  ko: { year: "연도", month: "월", day: "일" },
  lb: { year: "jjjj", month: "mm", day: "dd" },
  lo: { year: "ປປປປ", month: "ດດ", day: "ວວ" },
  lt: { year: "mmmm", month: "mm", day: "dd" },
  lv: { year: "gggg", month: "mm", day: "dd" },
  meh: { year: "aaaa", month: "mm", day: "dd" },
  ml: { year: "വർഷം", month: "മാസം", day: "തീയതി" },
  ms: { year: "tttt", month: "mm", day: "hh" },
  nl: { year: "jjjj", month: "mm", day: "dd" },
  nn: { year: "åååå", month: "mm", day: "dd" },
  no: { year: "åååå", month: "mm", day: "dd" },
  oc: { year: "aaaa", month: "mm", day: "jj" },
  pl: { year: "rrrr", month: "mm", day: "dd" },
  pt: { year: "aaaa", month: "mm", day: "dd" },
  rm: { year: "oooo", month: "mm", day: "dd" },
  ro: { year: "aaaa", month: "ll", day: "zz" },
  ru: { year: "гггг", month: "мм", day: "дд" },
  sc: { year: "aaaa", month: "mm", day: "dd" },
  scn: { year: "aaaa", month: "mm", day: "jj" },
  sk: { year: "rrrr", month: "mm", day: "dd" },
  sl: { year: "llll", month: "mm", day: "dd" },
  sr: { year: "гггг", month: "мм", day: "дд" },
  sv: { year: "åååå", month: "mm", day: "dd" },
  szl: { year: "rrrr", month: "mm", day: "dd" },
  tg: { year: "сссс", month: "мм", day: "рр" },
  th: { year: "ปปปป", month: "ดด", day: "วว" },
  tr: { year: "yyyy", month: "aa", day: "gg" },
  uk: { year: "рррр", month: "мм", day: "дд" },
  "zh-CN": { year: "年", month: "月", day: "日" },
  "zh-TW": { year: "年", month: "月", day: "日" }
};
function Lr(a) {
  if (Lo(a))
    return hn[a];
  {
    const t = Hr(a);
    return Lo(t) ? hn[t] : hn.en;
  }
}
function yn(a, t, e) {
  return Nr(a) ? Lr(e)[a] : Kr(a) ? t : zr(a) ? "––" : "";
}
function Lo(a) {
  return Vr.includes(a);
}
function Nr(a) {
  return Fr.includes(a);
}
function zr(a) {
  return a === "hour" || a === "minute" || a === "second";
}
function Kr(a) {
  return a === "era" || a === "dayPeriod";
}
function Hr(a) {
  return Intl.Locale ? new Intl.Locale(a).language : a.split("-")[0];
}
const Kn = ["day", "month", "year"], yl = ["hour", "minute", "second", "dayPeriod"], gl = [...Kn, ...yl];
function Wr(a) {
  return Kn.includes(a);
}
function bl(a) {
  return gl.includes(a);
}
function jr(a, t) {
  const e = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
    hourCycle: t === 24 ? "h24" : void 0,
    hour12: t === 24 ? !1 : void 0
  };
  return a === "day" && (delete e.second, delete e.hour, delete e.minute, delete e.timeZoneName), a === "hour" && (delete e.minute, delete e.second), a === "minute" && delete e.second, e;
}
function Cl(a) {
  const t = a.querySelector("[data-selected]");
  if (t)
    return t.focus();
  const e = a.querySelector("[data-today]");
  if (e)
    return e.focus();
  const n = a.querySelector("[data-radix-vue-calendar-day]");
  if (n)
    return n.focus();
}
function Ur(a, t) {
  var e;
  const n = Mn();
  return ye(() => {
    n.value = a();
  }, {
    ...t,
    flush: (e = void 0) != null ? e : "sync"
  }), Ka(n);
}
function Gr(a, t) {
  let e, n, l;
  const s = I(!0), r = () => {
    s.value = !0, l();
  };
  te(a, r, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = sl((c, p) => (n = c, l = p, {
    get() {
      return s.value && (e = i(), s.value = !1), n(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = r), d;
}
function mt(a) {
  return ur() ? (rl(a), !0) : !1;
}
function ia() {
  const a = /* @__PURE__ */ new Set(), t = (l) => {
    a.delete(l);
  };
  return {
    on: (l) => {
      a.add(l);
      const s = () => t(l);
      return mt(s), {
        off: s
      };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(a).map((s) => s(...l)))
  };
}
function qr(a) {
  let t = !1, e;
  const n = il(!0);
  return (...l) => (t || (e = n.run(() => a(...l)), t = !0), e);
}
function Yr(a) {
  let t = 0, e, n;
  const l = () => {
    t -= 1, n && t <= 0 && (n.stop(), e = void 0, n = void 0);
  };
  return (...s) => (t += 1, e || (n = il(!0), e = n.run(() => a(...s))), mt(l), e);
}
function Ne(a) {
  return typeof a == "function" ? a() : o(a);
}
function Xr(a) {
  if (!Xe(a))
    return Ma(a);
  const t = new Proxy({}, {
    get(e, n, l) {
      return o(Reflect.get(a.value, n, l));
    },
    set(e, n, l) {
      return Xe(a.value[n]) && !Xe(l) ? a.value[n].value = l : a.value[n] = l, !0;
    },
    deleteProperty(e, n) {
      return Reflect.deleteProperty(a.value, n);
    },
    has(e, n) {
      return Reflect.has(a.value, n);
    },
    ownKeys() {
      return Object.keys(a.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: !0,
        configurable: !0
      };
    }
  });
  return Ma(t);
}
function wl(a) {
  return Xr(B(a));
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Zr = (a) => typeof a < "u", Jr = (a) => a != null, Qr = Object.prototype.toString, ei = (a) => Qr.call(a) === "[object Object]", Va = () => {
}, No = /* @__PURE__ */ ti();
function ti() {
  var a, t;
  return Je && ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function _l(a, t) {
  function e(...n) {
    return new Promise((l, s) => {
      Promise.resolve(a(() => t.apply(this, n), { fn: t, thisArg: this, args: n })).then(l).catch(s);
    });
  }
  return e;
}
const xl = (a) => a();
function ai(a, t = {}) {
  let e, n, l = Va;
  const s = (i) => {
    clearTimeout(i), l(), l = Va;
  };
  return (i) => {
    const u = Ne(a), d = Ne(t.maxWait);
    return e && s(e), u <= 0 || d !== void 0 && d <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((c, p) => {
      l = t.rejectOnCancel ? p : c, d && !n && (n = setTimeout(() => {
        e && s(e), n = null, c(i());
      }, d)), e = setTimeout(() => {
        n && s(n), n = null, c(i());
      }, u);
    });
  };
}
function ni(a = xl) {
  const t = I(!0);
  function e() {
    t.value = !1;
  }
  function n() {
    t.value = !0;
  }
  const l = (...s) => {
    t.value && a(...s);
  };
  return { isActive: Ka(t), pause: e, resume: n, eventFilter: l };
}
function Sl(a) {
  return vt();
}
function Dt(a, t = 1e4) {
  return sl((e, n) => {
    let l = Ne(a), s;
    const r = () => setTimeout(() => {
      l = Ne(a), n();
    }, Ne(t));
    return mt(() => {
      clearTimeout(s);
    }), {
      get() {
        return e(), l;
      },
      set(i) {
        l = i, n(), clearTimeout(s), s = r();
      }
    };
  });
}
function Hn(a, t = 200, e = {}) {
  return _l(
    ai(t, e),
    a
  );
}
function oi(a, t, e = {}) {
  const {
    eventFilter: n = xl,
    ...l
  } = e;
  return te(
    a,
    _l(
      n,
      t
    ),
    l
  );
}
function zo(a, t, e = {}) {
  const {
    eventFilter: n,
    ...l
  } = e, { eventFilter: s, pause: r, resume: i, isActive: u } = ni(n);
  return { stop: oi(
    a,
    t,
    {
      ...l,
      eventFilter: s
    }
  ), pause: r, resume: i, isActive: u };
}
function li(a, t, ...[e]) {
  const {
    flush: n = "sync",
    deep: l = !1,
    immediate: s = !0,
    direction: r = "both",
    transform: i = {}
  } = e || {}, u = [], d = "ltr" in i && i.ltr || ((f) => f), c = "rtl" in i && i.rtl || ((f) => f);
  return (r === "both" || r === "ltr") && u.push(zo(
    a,
    (f) => {
      u.forEach((v) => v.pause()), t.value = d(f), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), (r === "both" || r === "rtl") && u.push(zo(
    t,
    (f) => {
      u.forEach((v) => v.pause()), a.value = c(f), u.forEach((v) => v.resume());
    },
    { flush: n, deep: l, immediate: s }
  )), () => {
    u.forEach((f) => f.stop());
  };
}
function si(a, t) {
  Sl() && Vn(a, t);
}
function ri(a, t = !0, e) {
  Sl() ? se(a, e) : t ? a() : le(a);
}
function Wn(a, t, e = {}) {
  const {
    immediate: n = !0
  } = e, l = I(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    l.value = !1, r();
  }
  function u(...d) {
    r(), l.value = !0, s = setTimeout(() => {
      l.value = !1, s = null, a(...d);
    }, Ne(t));
  }
  return n && (l.value = !0, Je && u()), mt(i), {
    isPending: Ka(l),
    start: u,
    stop: i
  };
}
function ii(a = 1e3, t = {}) {
  const {
    controls: e = !1,
    callback: n
  } = t, l = Wn(
    n ?? Va,
    a,
    t
  ), s = B(() => !l.isPending.value);
  return e ? {
    ready: s,
    ...l
  } : s;
}
function ui(a, t, e) {
  const n = te(a, (...l) => (le(() => n()), t(...l)), e);
  return n;
}
function Be(a) {
  var t;
  const e = Ne(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Ut = Je ? window : void 0;
function je(...a) {
  let t, e, n, l;
  if (typeof a[0] == "string" || Array.isArray(a[0]) ? ([e, n, l] = a, t = Ut) : [t, e, n, l] = a, !t)
    return Va;
  Array.isArray(e) || (e = [e]), Array.isArray(n) || (n = [n]);
  const s = [], r = () => {
    s.forEach((c) => c()), s.length = 0;
  }, i = (c, p, f, v) => (c.addEventListener(p, f, v), () => c.removeEventListener(p, f, v)), u = te(
    () => [Be(t), Ne(l)],
    ([c, p]) => {
      if (r(), !c)
        return;
      const f = ei(p) ? { ...p } : p;
      s.push(
        ...e.flatMap((v) => n.map((g) => i(c, v, g, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    u(), r();
  };
  return mt(d), d;
}
function di(a) {
  return typeof a == "function" ? a : typeof a == "string" ? (t) => t.key === a : Array.isArray(a) ? (t) => a.includes(t.key) : () => !0;
}
function jn(...a) {
  let t, e, n = {};
  a.length === 3 ? (t = a[0], e = a[1], n = a[2]) : a.length === 2 ? typeof a[1] == "object" ? (t = !0, e = a[0], n = a[1]) : (t = a[0], e = a[1]) : (t = !0, e = a[0]);
  const {
    target: l = Ut,
    eventName: s = "keydown",
    passive: r = !1,
    dedupe: i = !1
  } = n, u = di(t);
  return je(l, s, (c) => {
    c.repeat && Ne(i) || u(c) && e(c);
  }, r);
}
function ja() {
  const a = I(!1), t = vt();
  return t && se(() => {
    a.value = !0;
  }, t), a;
}
function El(a) {
  const t = ja();
  return B(() => (t.value, !!a()));
}
function Pl(a, t, e = {}) {
  const { window: n = Ut, ...l } = e;
  let s;
  const r = El(() => n && "MutationObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = B(() => {
    const f = Ne(a), v = (Array.isArray(f) ? f : [f]).map(Be).filter(Jr);
    return new Set(v);
  }), d = te(
    () => u.value,
    (f) => {
      i(), r.value && f.size && (s = new MutationObserver(t), f.forEach((v) => s.observe(v, l)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => s == null ? void 0 : s.takeRecords(), p = () => {
    i(), d();
  };
  return mt(p), {
    isSupported: r,
    stop: p,
    takeRecords: c
  };
}
function ci(a = {}) {
  var t;
  const {
    window: e = Ut,
    deep: n = !0,
    triggerOnRemoval: l = !1
  } = a, s = (t = a.document) != null ? t : e == null ? void 0 : e.document, r = () => {
    var d;
    let c = s == null ? void 0 : s.activeElement;
    if (n)
      for (; c != null && c.shadowRoot; )
        c = (d = c == null ? void 0 : c.shadowRoot) == null ? void 0 : d.activeElement;
    return c;
  }, i = I(), u = () => {
    i.value = r();
  };
  return e && (je(e, "blur", (d) => {
    d.relatedTarget === null && u();
  }, !0), je(e, "focus", u, !0)), l && Pl(s, (d) => {
    d.filter((c) => c.removedNodes.length).map((c) => Array.from(c.removedNodes)).flat().forEach((c) => {
      c === i.value && u();
    });
  }, {
    childList: !0,
    subtree: !0
  }), u(), i;
}
function Dl(a, t = {}) {
  const {
    immediate: e = !0,
    fpsLimit: n = void 0,
    window: l = Ut
  } = t, s = I(!1), r = n ? 1e3 / n : null;
  let i = 0, u = null;
  function d(f) {
    if (!s.value || !l)
      return;
    i || (i = f);
    const v = f - i;
    if (r && v < r) {
      u = l.requestAnimationFrame(d);
      return;
    }
    i = f, a({ delta: v, timestamp: f }), u = l.requestAnimationFrame(d);
  }
  function c() {
    !s.value && l && (s.value = !0, i = 0, u = l.requestAnimationFrame(d));
  }
  function p() {
    s.value = !1, u != null && l && (l.cancelAnimationFrame(u), u = null);
  }
  return e && c(), mt(p), {
    isActive: Ka(s),
    pause: p,
    resume: c
  };
}
function pi(a) {
  return JSON.parse(JSON.stringify(a));
}
function fi(a) {
  const t = vt(), e = Gr(
    () => null,
    () => t.proxy.$el
  );
  return ul(e.trigger), se(e.trigger), e;
}
function Ze(a, t, e = {}) {
  const { window: n = Ut, ...l } = e;
  let s;
  const r = El(() => n && "ResizeObserver" in n), i = () => {
    s && (s.disconnect(), s = void 0);
  }, u = B(() => Array.isArray(a) ? a.map((p) => Be(p)) : [Be(a)]), d = te(
    u,
    (p) => {
      if (i(), r.value && n) {
        s = new ResizeObserver(t);
        for (const f of p)
          f && s.observe(f, l);
      }
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), d();
  };
  return mt(c), {
    isSupported: r,
    stop: c
  };
}
function vi(a, t = {}) {
  const e = ci(t), n = B(() => Be(a));
  return { focused: B(() => n.value && e.value ? n.value.contains(e.value) : !1) };
}
function $l(a = fi()) {
  const t = Mn(), e = () => {
    const n = Be(a);
    n && (t.value = n.parentElement);
  };
  return ri(e), te(() => Ne(a), e), t;
}
function ae(a, t, e, n = {}) {
  var l, s, r;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: d,
    deep: c = !1,
    defaultValue: p,
    shouldEmit: f
  } = n, v = vt(), g = e || (v == null ? void 0 : v.emit) || ((l = v == null ? void 0 : v.$emit) == null ? void 0 : l.bind(v)) || ((r = (s = v == null ? void 0 : v.proxy) == null ? void 0 : s.$emit) == null ? void 0 : r.bind(v == null ? void 0 : v.proxy));
  let m = d;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const S = (h) => i ? typeof i == "function" ? i(h) : pi(h) : h, x = () => Zr(a[t]) ? S(a[t]) : p, D = (h) => {
    f ? f(h) && g(m, h) : g(m, h);
  };
  if (u) {
    const h = x(), E = I(h);
    let P = !1;
    return te(
      () => a[t],
      ($) => {
        P || (P = !0, E.value = S($), le(() => P = !1));
      }
    ), te(
      E,
      ($) => {
        !P && ($ !== a[t] || c) && D($);
      },
      { deep: c }
    ), E;
  } else
    return B({
      get() {
        return x();
      },
      set(h) {
        D(h);
      }
    });
}
function Ua(a) {
  return a ? a.flatMap((t) => t.type === _e ? Ua(t.children) : [t]) : [];
}
const mi = ["INPUT", "TEXTAREA"];
function $t(a, t, e, n = {}) {
  if (!t || n.enableIgnoredElement && mi.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: l = "both",
    attributeName: s = "[data-radix-vue-collection-item]",
    itemsArray: r = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: d = !0,
    focus: c = !1
  } = n, [p, f, v, g, m, S] = [
    a.key === "ArrowRight",
    a.key === "ArrowLeft",
    a.key === "ArrowUp",
    a.key === "ArrowDown",
    a.key === "Home",
    a.key === "End"
  ], x = v || g, D = p || f;
  if (!m && !S && (!x && !D || l === "vertical" && D || l === "horizontal" && x))
    return null;
  const h = e ? Array.from(e.querySelectorAll(s)) : r;
  if (!h.length)
    return null;
  d && a.preventDefault();
  let E = null;
  return D || x ? E = Bl(h, t, {
    goForward: x ? g : u === "ltr" ? p : f,
    loop: i
  }) : m ? E = h.at(0) || null : S && (E = h.at(-1) || null), c && (E == null || E.focus()), E;
}
function Bl(a, t, e, n = a.length) {
  if (--n === 0)
    return null;
  const l = a.indexOf(t), s = e.goForward ? l + 1 : l - 1;
  if (!e.loop && (s < 0 || s >= a.length))
    return null;
  const r = (s + a.length) % a.length, i = a[r];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Bl(
    a,
    i,
    e,
    n
  ) : i : null;
}
function gn(a) {
  if (a === null || typeof a != "object")
    return !1;
  const t = Object.getPrototypeOf(a);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in a ? !1 : Symbol.toStringTag in a ? Object.prototype.toString.call(a) === "[object Module]" : !0;
}
function Pn(a, t, e = ".", n) {
  if (!gn(t))
    return Pn(a, {}, e, n);
  const l = Object.assign({}, t);
  for (const s in a) {
    if (s === "__proto__" || s === "constructor")
      continue;
    const r = a[s];
    r != null && (n && n(l, s, r, e) || (Array.isArray(r) && Array.isArray(l[s]) ? l[s] = [...r, ...l[s]] : gn(r) && gn(l[s]) ? l[s] = Pn(
      r,
      l[s],
      (e ? `${e}.` : "") + s.toString(),
      n
    ) : l[s] = r));
  }
  return l;
}
function hi(a) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, n) => Pn(e, n, "", a), {})
  );
}
const yi = hi(), [Ga, gi] = Q("ConfigProvider"), uv = /* @__PURE__ */ w({
  __name: "ConfigProvider",
  props: {
    dir: { default: "ltr" },
    scrollBody: { type: [Boolean, Object], default: !0 },
    nonce: { default: void 0 },
    useId: { type: Function, default: void 0 }
  },
  setup(a) {
    const t = a, { dir: e, scrollBody: n, nonce: l } = ne(t);
    return gi({
      dir: e,
      scrollBody: n,
      nonce: l,
      useId: t.useId
    }), (s, r) => C(s.$slots, "default");
  }
});
let bi = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ci = (a = 21) => {
  let t = "", e = a;
  for (; e--; )
    t += bi[Math.random() * 64 | 0];
  return t;
};
const wi = Yr(() => {
  const a = I(/* @__PURE__ */ new Map()), t = I(), e = B(() => {
    for (const r of a.value.values())
      if (r)
        return !0;
    return !1;
  }), n = Ga({
    scrollBody: I(!0)
  });
  let l = null;
  const s = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", No && (l == null || l()), t.value = void 0;
  };
  return te(e, (r, i) => {
    var p;
    if (!Je)
      return;
    if (!r) {
      i && s();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, c = (p = n.scrollBody) != null && p.value ? typeof n.scrollBody.value == "object" ? yi({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${c.padding}px`, document.body.style.marginRight = `${c.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), No && (l = je(
      document,
      "touchmove",
      (f) => {
        var v;
        f.target === document.documentElement && (f.touches.length > 1 || (v = f.preventDefault) == null || v.call(f));
      },
      { passive: !1 }
    )), le(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), a;
});
function ha(a) {
  const t = Ci(6), e = wi();
  e.value.set(t, a ?? !1);
  const n = B({
    get: () => e.value.get(t) ?? !1,
    set: (l) => e.value.set(t, l)
  });
  return si(() => {
    e.value.delete(t);
  }), n;
}
const _i = "data-radix-vue-collection-item";
function Me(a, t = _i) {
  const e = a ?? Symbol();
  return { createCollection: (s) => {
    const r = I([]);
    function i() {
      const u = Be(s);
      return u ? r.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : r.value = [];
    }
    return dr(() => {
      r.value = [];
    }), se(i), ul(i), te(() => s == null ? void 0 : s.value, i, { immediate: !0 }), ll(e, r), r;
  }, injectCollection: () => ol(e, I([])) };
}
function Un(a) {
  const t = I(a);
  function e() {
    return t.value;
  }
  function n(m) {
    t.value = m;
  }
  function l(m, S) {
    return new lt(t.value, S).format(m);
  }
  function s(m, S = !0) {
    return ra(m) && S ? l(Le(m), {
      dateStyle: "long",
      timeStyle: "long"
    }) : l(Le(m), {
      dateStyle: "long"
    });
  }
  function r(m, S = {}) {
    return new lt(t.value, { month: "long", year: "numeric", ...S }).format(m);
  }
  function i(m, S = {}) {
    return new lt(t.value, { month: "long", ...S }).format(m);
  }
  function u() {
    const m = Cr(zn());
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => ({ label: i(Le(m.set({ month: x }))), value: x }));
  }
  function d(m, S = {}) {
    return new lt(t.value, { year: "numeric", ...S }).format(m);
  }
  function c(m, S) {
    return ml(m) ? new lt(t.value, {
      ...S,
      timeZone: m.timeZone
    }).formatToParts(Le(m)) : new lt(t.value, S).formatToParts(Le(m));
  }
  function p(m, S = "narrow") {
    return new lt(t.value, { weekday: S }).format(m);
  }
  function f(m) {
    var D;
    return ((D = new lt(t.value, {
      hour: "numeric",
      minute: "numeric"
    }).formatToParts(m).find((h) => h.type === "dayPeriod")) == null ? void 0 : D.value) === "PM" ? "PM" : "AM";
  }
  const v = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  function g(m, S, x = {}) {
    const D = { ...v, ...x }, E = c(m, D).find((P) => P.type === S);
    return E ? E.value : "";
  }
  return {
    setLocale: n,
    getLocale: e,
    fullMonth: i,
    fullYear: d,
    fullMonthAndYear: r,
    toParts: c,
    custom: l,
    part: g,
    dayPeriod: f,
    selectedDate: s,
    dayOfWeek: p,
    getMonths: u
  };
}
function be(a) {
  const t = Ga({
    dir: I("ltr")
  });
  return B(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function Re(a) {
  const t = vt(), e = t == null ? void 0 : t.type.emits, n = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((l) => {
    n[cr(dl(l))] = (...s) => a(l, ...s);
  }), n;
}
let bn = 0;
function Gn() {
  ye((a) => {
    if (!Je)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Ko()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Ko()
    ), bn++, a(() => {
      bn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), bn--;
    });
  });
}
function Ko() {
  const a = document.createElement("span");
  return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", a;
}
function Qe(a) {
  return B(() => {
    var t;
    return Ne(a) ? !!((t = Be(a)) != null && t.closest("form")) : !0;
  });
}
function Bt(a) {
  const t = vt(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((l, s) => {
    const r = (t == null ? void 0 : t.type.props[s]).default;
    return r !== void 0 && (l[s] = r), l;
  }, {}), n = pr(a);
  return B(() => {
    const l = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(s).forEach((r) => {
      l[dl(r)] = s[r];
    }), Object.keys({ ...e, ...l }).reduce((r, i) => (n.value[i] !== void 0 && (r[i] = n.value[i]), r), {});
  });
}
function xe(a, t) {
  const e = Bt(a), n = t ? Re(t) : {};
  return B(() => ({
    ...e.value,
    ...n
  }));
}
function T() {
  const a = vt(), t = I(), e = B(() => {
    var r, i;
    return ["#text", "#comment"].includes((r = t.value) == null ? void 0 : r.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Be(t);
  }), n = Object.assign({}, a.exposed), l = {};
  for (const r in a.props)
    Object.defineProperty(l, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.props[r]
    });
  if (Object.keys(n).length > 0)
    for (const r in n)
      Object.defineProperty(l, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r]
      });
  Object.defineProperty(l, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => a.vnode.el
  }), a.exposed = l;
  function s(r) {
    t.value = r, !(r instanceof Element || !r) && (Object.defineProperty(l, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => r.$el
    }), a.exposed = l);
  }
  return { forwardRef: s, currentRef: t, currentElement: e };
}
function Il(a, t) {
  const e = Dt(!1, 300), n = I(null), l = ia();
  function s() {
    n.value = null, e.value = !1;
  }
  function r(i, u) {
    const d = i.currentTarget, c = { x: i.clientX, y: i.clientY }, p = xi(c, d.getBoundingClientRect()), f = Si(c, p), v = Ei(u.getBoundingClientRect()), g = Di([...f, ...v]);
    n.value = g, e.value = !0;
  }
  return ye((i) => {
    if (a.value && t.value) {
      const u = (c) => r(c, t.value), d = (c) => r(c, a.value);
      a.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", d), i(() => {
        var c, p;
        (c = a.value) == null || c.removeEventListener("pointerleave", u), (p = t.value) == null || p.removeEventListener("pointerleave", d);
      });
    }
  }), ye((i) => {
    if (n.value) {
      const u = (d) => {
        var m, S;
        if (!n.value)
          return;
        const c = d.target, p = { x: d.clientX, y: d.clientY }, f = ((m = a.value) == null ? void 0 : m.contains(c)) || ((S = t.value) == null ? void 0 : S.contains(c)), v = !Pi(p, n.value), g = c.hasAttribute("data-grace-area-trigger");
        f ? s() : (v || g) && (s(), l.trigger());
      };
      document.addEventListener("pointermove", u), i(() => document.removeEventListener("pointermove", u));
    }
  }), {
    isPointerInTransit: e,
    onPointerExit: l.on
  };
}
function xi(a, t) {
  const e = Math.abs(t.top - a.y), n = Math.abs(t.bottom - a.y), l = Math.abs(t.right - a.x), s = Math.abs(t.left - a.x);
  switch (Math.min(e, n, l, s)) {
    case s:
      return "left";
    case l:
      return "right";
    case e:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Si(a, t, e = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: a.x - e, y: a.y + e },
        { x: a.x + e, y: a.y + e }
      );
      break;
    case "bottom":
      n.push(
        { x: a.x - e, y: a.y - e },
        { x: a.x + e, y: a.y - e }
      );
      break;
    case "left":
      n.push(
        { x: a.x + e, y: a.y - e },
        { x: a.x + e, y: a.y + e }
      );
      break;
    case "right":
      n.push(
        { x: a.x - e, y: a.y - e },
        { x: a.x - e, y: a.y + e }
      );
      break;
  }
  return n;
}
function Ei(a) {
  const { top: t, right: e, bottom: n, left: l } = a;
  return [
    { x: l, y: t },
    { x: e, y: t },
    { x: e, y: n },
    { x: l, y: n }
  ];
}
function Pi(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function Di(a) {
  const t = a.slice();
  return t.sort((e, n) => e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0), $i(t);
}
function $i(a) {
  if (a.length <= 1)
    return a.slice();
  const t = [];
  for (let n = 0; n < a.length; n++) {
    const l = a[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], r = t[t.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        t.pop();
      else break;
    }
    t.push(l);
  }
  t.pop();
  const e = [];
  for (let n = a.length - 1; n >= 0; n--) {
    const l = a[n];
    for (; e.length >= 2; ) {
      const s = e[e.length - 1], r = e[e.length - 2];
      if ((s.x - r.x) * (l.y - r.y) >= (s.y - r.y) * (l.x - r.x))
        e.pop();
      else break;
    }
    e.push(l);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
var Bi = function(a) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(a) ? a[0] : a;
  return t.ownerDocument.body;
}, Vt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {}, Cn = 0, Tl = function(a) {
  return a && (a.host || Tl(a.parentNode));
}, Ii = function(a, t) {
  return t.map(function(e) {
    if (a.contains(e))
      return e;
    var n = Tl(e);
    return n && a.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", a, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, Ti = function(a, t, e, n) {
  var l = Ii(t, Array.isArray(a) ? a : [a]);
  Da[e] || (Da[e] = /* @__PURE__ */ new WeakMap());
  var s = Da[e], r = [], i = /* @__PURE__ */ new Set(), u = new Set(l), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  l.forEach(d);
  var c = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(f) {
      if (i.has(f))
        c(f);
      else
        try {
          var v = f.getAttribute(n), g = v !== null && v !== "false", m = (Vt.get(f) || 0) + 1, S = (s.get(f) || 0) + 1;
          Vt.set(f, m), s.set(f, S), r.push(f), m === 1 && g && Pa.set(f, !0), S === 1 && f.setAttribute(e, "true"), g || f.setAttribute(n, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", f, x);
        }
    });
  };
  return c(t), i.clear(), Cn++, function() {
    r.forEach(function(p) {
      var f = Vt.get(p) - 1, v = s.get(p) - 1;
      Vt.set(p, f), s.set(p, v), f || (Pa.has(p) || p.removeAttribute(n), Pa.delete(p)), v || p.removeAttribute(e);
    }), Cn--, Cn || (Vt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ new WeakMap(), Da = {});
  };
}, Ri = function(a, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var n = Array.from(Array.isArray(a) ? a : [a]), l = Bi(a);
  return l ? (n.push.apply(n, Array.from(l.querySelectorAll("[aria-live]"))), Ti(n, l, e, "aria-hidden")) : function() {
    return null;
  };
};
function ya(a) {
  let t;
  te(() => Be(a), (e) => {
    e ? t = Ri(e) : t && t();
  }), Ie(() => {
    t && t();
  });
}
let Ai = 0;
function me(a, t = "radix") {
  if (a)
    return a;
  const { useId: e } = Ga({ useId: void 0 });
  return e && typeof e == "function" ? `${t}-${e()}` : `${t}-${++Ai}`;
}
function Oi(a, t) {
  const e = I(), n = (s, r) => {
    if (t.multiple && Array.isArray(a.value))
      if (t.selectionBehavior === "replace")
        a.value = [s], e.value = s;
      else {
        const i = a.value.findIndex((u) => r(u));
        i !== -1 ? a.value.splice(i, 1) : a.value.push(s);
      }
    else
      t.selectionBehavior === "replace" ? a.value = { ...s } : !Array.isArray(a.value) && r(a.value) ? a.value = void 0 : a.value = { ...s };
    return a.value;
  };
  function l(s, r, i, u) {
    var f;
    if (!(e != null && e.value) || !t.multiple || !Array.isArray(a.value))
      return;
    const c = (f = i().filter((v) => v.ref.dataset.disabled !== "").find((v) => v.ref === r)) == null ? void 0 : f.value;
    if (!c)
      return;
    let p = null;
    switch (s) {
      case "prev":
      case "next": {
        p = St(u, e.value, c);
        break;
      }
      case "first": {
        p = St(u, e.value, u == null ? void 0 : u[0]);
        break;
      }
      case "last": {
        p = St(u, e.value, u == null ? void 0 : u[u.length - 1]);
        break;
      }
    }
    a.value = p;
  }
  return {
    firstValue: e,
    onSelectItem: n,
    handleMultipleReplace: l
  };
}
function Rl(a) {
  const t = I(), e = B(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.width) ?? 0;
  }), n = B(() => {
    var l;
    return ((l = t.value) == null ? void 0 : l.height) ?? 0;
  });
  return se(() => {
    const l = Be(a);
    if (l) {
      t.value = { width: l.offsetWidth, height: l.offsetHeight };
      const s = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, p = Array.isArray(c) ? c[0] : c;
          u = p.inlineSize, d = p.blockSize;
        } else
          u = l.offsetWidth, d = l.offsetHeight;
        t.value = { width: u, height: d };
      });
      return s.observe(l, { box: "border-box" }), () => s.unobserve(l);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: n
  };
}
function Al(a, t) {
  const e = I(a);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
function ga(a) {
  const t = Dt("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (l, s) => {
      var f, v;
      if (!(a != null && a.value) && !s)
        return;
      t.value = t.value + l;
      const r = (a == null ? void 0 : a.value) ?? s, i = document.activeElement, u = ((v = (f = r.find((g) => g === i)) == null ? void 0 : f.textContent) == null ? void 0 : v.trim()) ?? "", d = r.map((g) => {
        var m;
        return ((m = g.textContent) == null ? void 0 : m.trim()) ?? "";
      }), c = Yn(d, t.value, u), p = r.find(
        (g) => {
          var m;
          return ((m = g.textContent) == null ? void 0 : m.trim()) === c;
        }
      );
      return p && p.focus(), p;
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function qn(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
function Yn(a, t, e) {
  const l = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = e ? a.indexOf(e) : -1;
  let r = qn(a, Math.max(s, 0));
  l.length === 1 && (r = r.filter((d) => d !== e));
  const u = r.find(
    (d) => d.toLowerCase().startsWith(l.toLowerCase())
  );
  return u !== e ? u : void 0;
}
function dv(a, t) {
  return {
    inheritAttrs: !1,
    name: `${a.__name ?? ""}Wrapper`,
    setup(e, n) {
      return () => {
        const l = typeof (t == null ? void 0 : t.props) == "function" ? t == null ? void 0 : t.props(n.attrs) : t == null ? void 0 : t.props, { forwardRef: s } = T(), r = k(l, n.attrs);
        return pt(a, { ...r, ref: s }, n.slots);
      };
    }
  };
}
function et() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
const Xn = w({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = Ua(e.default()), l = n.findIndex((c) => c.type !== fr);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? k(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = Fn(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), O = w({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a, { attrs: t, slots: e }) {
    const n = a.asChild ? "template" : a.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => pt(n, t) : n !== "template" ? () => pt(a.as, t, { default: e.default }) : () => pt(Xn, t, { default: e.default });
  }
});
function Ae() {
  const a = I(), t = B(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : Be(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
const [Ol, ki] = Q("CollapsibleRoot"), Mi = /* @__PURE__ */ w({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(a, { expose: t, emit: e }) {
    const n = a, s = ae(n, "open", e, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), r = ae(n, "disabled");
    return ki({
      contentId: "",
      disabled: r,
      open: s,
      onOpenToggle: () => {
        s.value = !s.value;
      }
    }), t({ open: s }), T(), (i, u) => (b(), _(o(O), {
      as: i.as,
      "as-child": n.asChild,
      "data-state": n.open ? "open" : "closed",
      "data-disabled": n.disabled ? "" : void 0
    }, {
      default: y(() => [
        C(i.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Vi = /* @__PURE__ */ w({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = Ol();
    return (n, l) => {
      var s, r;
      return b(), _(o(O), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": o(e).contentId,
        "aria-expanded": o(e).open.value,
        "data-state": o(e).open.value ? "open" : "closed",
        "data-disabled": (s = o(e).disabled) != null && s.value ? "" : void 0,
        disabled: (r = o(e).disabled) == null ? void 0 : r.value,
        onClick: o(e).onOpenToggle
      }, {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Fi(a, t) {
  const e = I({}), n = I("none"), l = a.value ? "mounted" : "unmounted", { state: s, dispatch: r } = Al(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), i = (v) => {
    var g;
    if (Je) {
      const m = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (g = t.value) == null || g.dispatchEvent(m);
    }
  };
  te(
    a,
    async (v, g) => {
      var S;
      const m = g !== v;
      if (await le(), m) {
        const x = n.value, D = $a(t.value);
        v ? (r("MOUNT"), i("enter"), D === "none" && i("after-enter")) : D === "none" || ((S = e.value) == null ? void 0 : S.display) === "none" ? (r("UNMOUNT"), i("leave"), i("after-leave")) : g && x !== D ? (r("ANIMATION_OUT"), i("leave")) : (r("UNMOUNT"), i("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const u = (v) => {
    const g = $a(t.value), m = g.includes(
      v.animationName
    ), S = s.value === "mounted" ? "enter" : "leave";
    v.target === t.value && m && (i(`after-${S}`), r("ANIMATION_END")), v.target === t.value && g === "none" && r("ANIMATION_END");
  }, d = (v) => {
    v.target === t.value && (n.value = $a(t.value));
  }, c = te(
    t,
    (v, g) => {
      v ? (e.value = getComputedStyle(v), v.addEventListener("animationstart", d), v.addEventListener("animationcancel", u), v.addEventListener("animationend", u)) : (r("ANIMATION_END"), g == null || g.removeEventListener("animationstart", d), g == null || g.removeEventListener("animationcancel", u), g == null || g.removeEventListener("animationend", u));
    },
    { immediate: !0 }
  ), p = te(s, () => {
    const v = $a(t.value);
    n.value = s.value === "mounted" ? v : "none";
  });
  return Ie(() => {
    c(), p();
  }), {
    isPresent: B(
      () => ["mounted", "unmountSuspended"].includes(s.value)
    )
  };
}
function $a(a) {
  return a && getComputedStyle(a).animationName || "none";
}
const Pe = w({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = ne(a), s = I(), { isPresent: r } = Fi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = Ua(i || []);
    const u = vt();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((p) => `  - ${p}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? pt(t.default({ present: r })[0], {
      ref: (c) => {
        const p = Be(c);
        return typeof (p == null ? void 0 : p.hasAttribute) > "u" || (p != null && p.hasAttribute("data-radix-popper-content-wrapper") ? s.value = p.firstElementChild : s.value = p), p;
      }
    }) : null;
  }
}), Li = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ol();
    e.contentId || (e.contentId = me(void 0, "radix-vue-collapsible-content"));
    const n = I(), { forwardRef: l, currentElement: s } = T(), r = I(0), i = I(0), u = B(() => e.open.value), d = I(u.value), c = I();
    return te(
      () => {
        var p;
        return [u.value, (p = n.value) == null ? void 0 : p.present];
      },
      async () => {
        await le();
        const p = s.value;
        if (!p)
          return;
        c.value = c.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const f = p.getBoundingClientRect();
        i.value = f.height, r.value = f.width, d.value || (p.style.transitionDuration = c.value.transitionDuration, p.style.animationName = c.value.animationName);
      },
      {
        immediate: !0
      }
    ), se(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), (p, f) => (b(), _(o(Pe), {
      ref_key: "presentRef",
      ref: n,
      present: p.forceMount || o(e).open.value,
      "force-mount": !0
    }, {
      default: y(() => {
        var v, g;
        return [
          Y(o(O), k(p.$attrs, {
            id: o(e).contentId,
            ref: o(l),
            "as-child": t.asChild,
            as: p.as,
            "data-state": o(e).open.value ? "open" : "closed",
            "data-disabled": (v = o(e).disabled) != null && v.value ? "" : void 0,
            hidden: !((g = n.value) != null && g.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${r.value}px`
            }
          }), {
            default: y(() => {
              var m;
              return [
                (m = n.value) != null && m.present ? C(p.$slots, "default", { key: 0 }) : pe("", !0)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function kl({ type: a, defaultValue: t, modelValue: e }) {
  const n = e || t;
  if (Nt(a) && Nt(e) && Nt(t))
    throw new Error("Either the `type` or the `value` or `default-value` prop must be defined.");
  if (e !== void 0 && t !== void 0 && typeof e != typeof t)
    throw new Error(
      `Invalid prop \`value\` of value \`${e}\` supplied, should be the same type as the \`defaultValue\` prop, which is \`${t}\`. The \`value\` prop must be:
  ${a === "single" ? "- a string" : a === "multiple" ? "- an array of strings" : `- a string
- an array of strings`}
  - \`undefined\``
    );
  const l = e !== void 0 || t !== void 0;
  if (a && l) {
    const s = Array.isArray(e) || Array.isArray(t), r = e !== void 0 ? "modelValue" : "defaultValue", i = r === "modelValue" ? typeof e : typeof t;
    if (a === "single" && s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`single\`. The \`modelValue\` prop must be a string or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "multiple";
    if (a === "multiple" && !s)
      return console.error(`Invalid prop \`${r}\` of type ${i} supplied with type \`multiple\`. The \`modelValue\` prop must be an array of strings or \`undefined\`.
    You can remove the \`type\` prop to let the component infer the type from the ${r} prop.`), "single";
  }
  return l ? Array.isArray(n) ? "multiple" : "single" : a;
}
function Ni({ type: a, defaultValue: t, modelValue: e }) {
  return a || kl({ type: a, defaultValue: t, modelValue: e });
}
function zi({ type: a, defaultValue: t }) {
  return t !== void 0 ? t : a === "single" ? void 0 : [];
}
function Ml(a, t) {
  const e = I(Ni(a)), n = ae(a, "modelValue", t, {
    defaultValue: zi(a),
    passive: a.modelValue === void 0,
    deep: !0
  });
  te(
    () => [a.type, a.modelValue, a.defaultValue],
    () => {
      const r = kl(a);
      e.value !== r && (e.value = r);
    },
    { immediate: !0 }
  );
  function l(r) {
    if (e.value === "single")
      n.value = r === n.value ? void 0 : r;
    else {
      const i = [...n.value || []];
      if (i.includes(r)) {
        const u = i.findIndex((d) => d === r);
        i.splice(u, 1);
      } else
        i.push(r);
      n.value = i;
    }
  }
  const s = B(() => e.value === "single");
  return {
    modelValue: n,
    type: e,
    changeModelValue: l,
    isSingle: s
  };
}
const [qa, Ki] = Q("AccordionRoot"), cv = /* @__PURE__ */ w({
  __name: "AccordionRoot",
  props: {
    collapsible: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, disabled: s } = ne(e), r = be(l), { modelValue: i, changeModelValue: u, isSingle: d } = Ml(e, n), { forwardRef: c, currentElement: p } = T();
    return Ki({
      disabled: s,
      direction: r,
      orientation: e.orientation,
      parentElement: p,
      isSingle: d,
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (f, v) => (b(), _(o(O), {
      ref: o(c),
      "as-child": f.asChild,
      as: f.as
    }, {
      default: y(() => [
        C(f.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Zn, Hi] = Q("AccordionItem"), pv = /* @__PURE__ */ w({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = qa(), l = B(
      () => n.isSingle.value ? e.value === n.modelValue.value : Array.isArray(n.modelValue.value) && n.modelValue.value.includes(e.value)
    ), s = B(() => n.disabled.value || e.disabled || n.isSingle.value && l.value && !n.collapsible), r = B(() => s.value ? "" : void 0), i = B(
      () => l.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: l, dataDisabled: r });
    const { currentRef: u, currentElement: d } = T();
    Hi({
      open: l,
      dataState: i,
      disabled: s,
      dataDisabled: r,
      triggerId: "",
      currentRef: u,
      currentElement: d,
      value: B(() => e.value)
    });
    function c(p) {
      $t(
        p,
        d.value,
        n.parentElement.value,
        {
          arrowKeyOptions: n.orientation,
          dir: n.direction.value,
          focus: !0
        }
      );
    }
    return (p, f) => (b(), _(o(Mi), {
      "data-orientation": o(n).orientation,
      "data-disabled": r.value,
      "data-state": i.value,
      disabled: s.value,
      open: l.value,
      as: e.as,
      "as-child": e.asChild,
      onKeydown: re(c, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: y(() => [
        C(p.$slots, "default", { open: l.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as", "as-child"]));
  }
}), fv = /* @__PURE__ */ w({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = qa(), n = Zn();
    return T(), (l, s) => (b(), _(o(Li), {
      role: "region",
      hidden: !o(n).open.value,
      "as-child": t.asChild,
      "aria-labelledby": o(n).triggerId,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), vv = /* @__PURE__ */ w({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(a) {
    const t = a, e = qa(), n = Zn();
    return T(), (l, s) => (b(), _(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      "data-disabled": o(n).dataDisabled.value
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), mv = /* @__PURE__ */ w({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = qa(), n = Zn();
    n.triggerId || (n.triggerId = me(void 0, "radix-vue-accordion-trigger"));
    function l() {
      n.disabled.value || e.changeModelValue(n.value.value);
    }
    return (s, r) => (b(), _(o(Vi), {
      id: o(n).triggerId,
      ref: o(n).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": o(n).disabled.value || void 0,
      "aria-expanded": o(n).open.value || !1,
      "data-disabled": o(n).dataDisabled.value,
      "data-orientation": o(e).orientation,
      "data-state": o(n).dataState.value,
      disabled: o(n).disabled.value,
      onClick: l
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [tt, Wi] = Q("DialogRoot"), ji = /* @__PURE__ */ w({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = I(), r = I(), { modal: i } = ne(e);
    return Wi({
      open: l,
      modal: i,
      openModal: () => {
        l.value = !0;
      },
      onOpenChange: (u) => {
        l.value = u;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: s,
      contentElement: r
    }), (u, d) => C(u.$slots, "default", { open: o(l) });
  }
}), Ui = /* @__PURE__ */ w({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = tt(), { forwardRef: n, currentElement: l } = T();
    return e.contentId || (e.contentId = me(void 0, "radix-vue-dialog-content")), se(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), _(o(O), k(t, {
      ref: o(n),
      type: s.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": o(e).open.value || !1,
      "aria-controls": o(e).open.value ? o(e).contentId : void 0,
      "data-state": o(e).open.value ? "open" : "closed",
      onClick: o(e).onOpenToggle
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), ht = /* @__PURE__ */ w({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ja();
    return (e, n) => o(t) || e.forceMount ? (b(), _(Wt, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      C(e.$slots, "default")
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), hv = /* @__PURE__ */ w({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gi = "dismissableLayer.pointerDownOutside", qi = "dismissableLayer.focusOutside";
function Vl(a, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), n = a.dataset.dismissableLayer === "" ? a : a.querySelector(
    "[data-dismissable-layer]"
  ), l = Array.from(
    a.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && n === e || l.indexOf(n) < l.indexOf(e));
}
function Fl(a, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = I(!1), l = I(() => {
  });
  return ye((r) => {
    if (!Je)
      return;
    const i = async (d) => {
      const c = d.target;
      if (t != null && t.value) {
        if (Vl(t.value, c)) {
          n.value = !1;
          return;
        }
        if (d.target && !n.value) {
          let p = function() {
            zt(
              Gi,
              a,
              f
            );
          };
          const f = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", l.value), l.value = p, e.addEventListener("click", l.value, {
            once: !0
          })) : p();
        } else
          e.removeEventListener("click", l.value);
        n.value = !1;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    r(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", l.value);
    });
  }), {
    onPointerDownCapture: () => n.value = !0
  };
}
function Ll(a, t) {
  var l;
  const e = ((l = t == null ? void 0 : t.value) == null ? void 0 : l.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = I(!1);
  return ye((s) => {
    if (!Je)
      return;
    const r = async (i) => {
      t != null && t.value && (await le(), !(!t.value || Vl(t.value, i.target)) && i.target && !n.value && zt(
        qi,
        a,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", r), s(() => e.removeEventListener("focusin", r));
  }), {
    onFocusCapture: () => n.value = !0,
    onBlurCapture: () => n.value = !1
  };
}
const We = Ma({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), yt = /* @__PURE__ */ w({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), r = B(
      () => {
        var g;
        return ((g = s.value) == null ? void 0 : g.ownerDocument) ?? globalThis.document;
      }
    ), i = B(() => We.layersRoot), u = B(() => s.value ? Array.from(i.value).indexOf(s.value) : -1), d = B(() => We.layersWithOutsidePointerEventsDisabled.size > 0), c = B(() => {
      const g = Array.from(i.value), [m] = [...We.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(m);
      return u.value >= S;
    }), p = Fl(async (g) => {
      const m = [...We.branches].some(
        (S) => S.contains(g.target)
      );
      !c.value || m || (n("pointerDownOutside", g), n("interactOutside", g), await le(), g.defaultPrevented || n("dismiss"));
    }, s), f = Ll((g) => {
      [...We.branches].some(
        (S) => S.contains(g.target)
      ) || (n("focusOutside", g), n("interactOutside", g), g.defaultPrevented || n("dismiss"));
    }, s);
    jn("Escape", (g) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", g), g.defaultPrevented || n("dismiss"));
    });
    let v;
    return ye((g) => {
      s.value && (e.disableOutsidePointerEvents && (We.layersWithOutsidePointerEventsDisabled.size === 0 && (v = r.value.body.style.pointerEvents, r.value.body.style.pointerEvents = "none"), We.layersWithOutsidePointerEventsDisabled.add(s.value)), i.value.add(s.value), g(() => {
        e.disableOutsidePointerEvents && We.layersWithOutsidePointerEventsDisabled.size === 1 && (r.value.body.style.pointerEvents = v);
      }));
    }), ye((g) => {
      g(() => {
        s.value && (i.value.delete(s.value), We.layersWithOutsidePointerEventsDisabled.delete(s.value));
      });
    }), (g, m) => (b(), _(o(O), {
      ref: o(l),
      "as-child": g.asChild,
      as: g.as,
      "data-dismissable-layer": "",
      style: Oe({
        pointerEvents: d.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: o(f).onFocusCapture,
      onBlurCapture: o(f).onBlurCapture,
      onPointerdownCapture: o(p).onPointerDownCapture
    }, {
      default: y(() => [
        C(g.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Yi = /* @__PURE__ */ w({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = T();
    return se(() => {
      We.branches.add(n.value);
    }), Ie(() => {
      We.branches.delete(n.value);
    }), (l, s) => (b(), _(o(O), k({ ref: o(e) }, t), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wn = "focusScope.autoFocusOnMount", _n = "focusScope.autoFocusOnUnmount", Ho = { bubbles: !1, cancelable: !0 };
function Oa(a, { select: t = !1 } = {}) {
  const e = document.activeElement;
  for (const n of a)
    if (dt(n, { select: t }), document.activeElement !== e)
      return !0;
}
function Xi(a) {
  const t = Jn(a), e = Wo(t, a), n = Wo(t.reverse(), a);
  return [e, n];
}
function Jn(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function Wo(a, t) {
  for (const e of a)
    if (!Zi(e, { upTo: t }))
      return e;
}
function Zi(a, { upTo: t }) {
  if (getComputedStyle(a).visibility === "hidden")
    return !0;
  for (; a; ) {
    if (t !== void 0 && a === t)
      return !1;
    if (getComputedStyle(a).display === "none")
      return !0;
    a = a.parentElement;
  }
  return !1;
}
function Ji(a) {
  return a instanceof HTMLInputElement && "select" in a;
}
function dt(a, { select: t = !1 } = {}) {
  if (a && a.focus) {
    const e = document.activeElement;
    a.focus({ preventScroll: !0 }), a !== e && Ji(a) && t && a.select();
  }
}
const Qi = qr(() => I([]));
function eu() {
  const a = Qi();
  return {
    add(t) {
      const e = a.value[0];
      t !== e && (e == null || e.pause()), a.value = jo(a.value, t), a.value.unshift(t);
    },
    remove(t) {
      var e;
      a.value = jo(a.value, t), (e = a.value[0]) == null || e.resume();
    }
  };
}
function jo(a, t) {
  const e = [...a], n = e.indexOf(t);
  return n !== -1 && e.splice(n, 1), e;
}
function tu(a) {
  return a.filter((t) => t.tagName !== "A");
}
const Ya = /* @__PURE__ */ w({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, { currentRef: l, currentElement: s } = T(), r = I(null), i = eu(), u = Ma({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ye((c) => {
      if (!Je)
        return;
      const p = s.value;
      if (!e.trapped)
        return;
      function f(S) {
        if (u.paused || !p)
          return;
        const x = S.target;
        p.contains(x) ? r.value = x : dt(r.value, { select: !0 });
      }
      function v(S) {
        if (u.paused || !p)
          return;
        const x = S.relatedTarget;
        x !== null && (p.contains(x) || dt(r.value, { select: !0 }));
      }
      function g(S) {
        p.contains(r.value) || dt(p);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const m = new MutationObserver(g);
      p && m.observe(p, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), m.disconnect();
      });
    }), ye(async (c) => {
      const p = s.value;
      if (await le(), !p)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!p.contains(f)) {
        const g = new CustomEvent(wn, Ho);
        p.addEventListener(wn, (m) => n("mountAutoFocus", m)), p.dispatchEvent(g), g.defaultPrevented || (Oa(tu(Jn(p)), {
          select: !0
        }), document.activeElement === f && dt(p));
      }
      c(() => {
        p.removeEventListener(wn, (S) => n("mountAutoFocus", S));
        const g = new CustomEvent(_n, Ho), m = (S) => {
          n("unmountAutoFocus", S);
        };
        p.addEventListener(_n, m), p.dispatchEvent(g), setTimeout(() => {
          g.defaultPrevented || dt(f ?? document.body, { select: !0 }), p.removeEventListener(_n, m), i.remove(u);
        }, 0);
      });
    });
    function d(c) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const p = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, f = document.activeElement;
      if (p && f) {
        const v = c.currentTarget, [g, m] = Xi(v);
        g && m ? !c.shiftKey && f === m ? (c.preventDefault(), e.loop && dt(g, { select: !0 })) : c.shiftKey && f === g && (c.preventDefault(), e.loop && dt(m, { select: !0 })) : f === v && c.preventDefault();
      }
    }
    return (c, p) => (b(), _(o(O), {
      ref_key: "currentRef",
      ref: l,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: d
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), au = "menu.itemSelect", Dn = ["Enter", " "], nu = ["ArrowDown", "PageUp", "Home"], Nl = ["ArrowUp", "PageDown", "End"], ou = [...nu, ...Nl], lu = {
  ltr: [...Dn, "ArrowRight"],
  rtl: [...Dn, "ArrowLeft"]
}, su = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function Qn(a) {
  return a ? "open" : "closed";
}
function Fa(a) {
  return a === "indeterminate";
}
function eo(a) {
  return Fa(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
function $n(a) {
  const t = document.activeElement;
  for (const e of a)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function ru(a, t) {
  const { x: e, y: n } = a;
  let l = !1;
  for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
    const i = t[s].x, u = t[s].y, d = t[r].x, c = t[r].y;
    u > n != c > n && e < (d - i) * (n - u) / (c - u) + i && (l = !l);
  }
  return l;
}
function iu(a, t) {
  if (!t)
    return !1;
  const e = { x: a.clientX, y: a.clientY };
  return ru(e, t);
}
function ua(a) {
  return a.pointerType === "mouse";
}
const uu = "DialogTitle", du = "DialogContent";
function cu({
  titleName: a = uu,
  contentName: t = du,
  componentLink: e = "dialog.html#title",
  titleId: n,
  descriptionId: l,
  contentElement: s
}) {
  const r = `Warning: \`${t}\` requires a \`${a}\` for the component to be accessible for screen reader users.

If you want to hide the \`${a}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/${e}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  se(() => {
    var c;
    document.getElementById(n) || console.warn(r);
    const d = (c = s.value) == null ? void 0 : c.getAttribute("aria-describedby");
    l && !d && (document.getElementById(l) || console.warn(i));
  });
}
const zl = /* @__PURE__ */ w({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), { forwardRef: s, currentElement: r } = T();
    return l.titleId || (l.titleId = me(void 0, "radix-vue-dialog-title")), l.descriptionId || (l.descriptionId = me(void 0, "radix-vue-dialog-description")), se(() => {
      l.contentElement = r, document.activeElement !== document.body && (l.triggerElement.value = document.activeElement);
    }), process.env.NODE_ENV !== "production" && cu({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: l.titleId,
      descriptionId: l.descriptionId,
      contentElement: l.contentElement
    }), (i, u) => (b(), _(o(Ya), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        Y(o(yt), k({
          id: o(l).contentId,
          ref: o(s),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": o(l).descriptionId,
          "aria-labelledby": o(l).titleId,
          "data-state": o(Qn)(o(l).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => n("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => n("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => n("pointerDownOutside", d))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), pu = /* @__PURE__ */ w({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), s = Re(n), { forwardRef: r, currentElement: i } = T();
    return ya(i), (u, d) => (b(), _(zl, k({ ...e, ...o(s) }, {
      ref: o(r),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (c.preventDefault(), (p = o(l).triggerElement.value) == null || p.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (c) => {
        const p = c.detail.originalEvent, f = p.button === 0 && p.ctrlKey === !0;
        (p.button === 2 || f) && c.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), fu = /* @__PURE__ */ w({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    T();
    const s = tt(), r = I(!1), i = I(!1);
    return (u, d) => (b(), _(zl, k({ ...e, ...o(l) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        c.defaultPrevented || (r.value || (p = o(s).triggerElement.value) == null || p.focus(), c.preventDefault()), r.value = !1, i.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = (c) => {
        var v;
        c.defaultPrevented || (r.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const p = c.target;
        ((v = o(s).triggerElement.value) == null ? void 0 : v.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ w({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = tt(), s = Re(n), { forwardRef: r } = T();
    return (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        o(l).modal.value ? (b(), _(pu, k({
          key: 0,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), _(fu, k({
          key: 1,
          ref: o(r)
        }, { ...e, ...o(s), ...i.$attrs }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), mu = /* @__PURE__ */ w({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt();
    return ha(!0), T(), (e, n) => (b(), _(o(O), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": o(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), hu = /* @__PURE__ */ w({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = tt(), { forwardRef: e } = T();
    return (n, l) => {
      var s;
      return (s = o(t)) != null && s.modal.value ? (b(), _(o(Pe), {
        key: 0,
        present: n.forceMount || o(t).open.value
      }, {
        default: y(() => [
          Y(mu, k(n.$attrs, {
            ref: o(e),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: y(() => [
              C(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : pe("", !0);
    };
  }
}), Kl = /* @__PURE__ */ w({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = tt();
    return (n, l) => (b(), _(o(O), k(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), yu = /* @__PURE__ */ w({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a, e = tt();
    return T(), (n, l) => (b(), _(o(O), k(t, {
      id: o(e).titleId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), gu = /* @__PURE__ */ w({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    T();
    const e = tt();
    return (n, l) => (b(), _(o(O), k(t, {
      id: o(e).descriptionId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), yv = /* @__PURE__ */ w({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return T(), (s, r) => (b(), _(o(ji), k(o(l), { modal: !0 }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gv = /* @__PURE__ */ w({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(Ui), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bv = /* @__PURE__ */ w({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bu, Cu] = Q("AlertDialogContent"), Cv = /* @__PURE__ */ w({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    T();
    const s = I();
    return Cu({
      onCancelElementChange: (r) => {
        s.value = r;
      }
    }), (r, i) => (b(), _(o(vu), k({ ...e, ...o(l) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = ie(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = ie(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        le(() => {
          var u;
          (u = s.value) == null || u.focus({
            preventScroll: !0
          });
        });
      })
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wv = /* @__PURE__ */ w({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(hu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _v = /* @__PURE__ */ w({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bu(), { forwardRef: n, currentElement: l } = T();
    return se(() => {
      e.onCancelElementChange(l.value);
    }), (s, r) => (b(), _(o(Kl), k(t, { ref: o(n) }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xv = /* @__PURE__ */ w({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(yu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sv = /* @__PURE__ */ w({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(gu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ev = /* @__PURE__ */ w({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(Kl), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), n = B(() => 1 / t.ratio * 100);
    return (l, s) => (b(), ce("div", {
      style: Oe(`position: relative; width: 100%; padding-bottom: ${n.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      Y(o(O), k({
        ref: o(e),
        "as-child": l.asChild,
        as: l.as,
        style: { position: "absolute", inset: "0px" }
      }, l.$attrs), {
        default: y(() => [
          C(l.$slots, "default", { aspect: n.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
}), [Hl, wu] = Q("AvatarRoot"), Dv = /* @__PURE__ */ w({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return T(), wu({
      imageLoadingStatus: I("loading")
    }), (t, e) => (b(), _(o(O), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function _u(a) {
  const t = I("idle"), e = I(!1), n = (l) => () => {
    e.value && (t.value = l);
  };
  return se(() => {
    e.value = !0, te(a, (l) => {
      if (!l)
        t.value = "error";
      else {
        const s = new window.Image();
        t.value = "loading", s.onload = n("loaded"), s.onerror = n("error"), s.src = l;
      }
    }, { immediate: !0 });
  }), Ie(() => {
    e.value = !1;
  }), t;
}
const $v = /* @__PURE__ */ w({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(a, { emit: t }) {
    const e = a, n = t, { src: l } = ne(e);
    T();
    const s = Hl(), r = _u(l);
    return te(
      r,
      (i) => {
        n("loadingStatusChange", i), i !== "idle" && (s.imageLoadingStatus.value = i);
      },
      { immediate: !0 }
    ), (i, u) => Ha((b(), _(o(O), {
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: o(l)
    }, {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])), [
      [Ln, o(r) === "loaded"]
    ]);
  }
}), Bv = /* @__PURE__ */ w({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Hl();
    T();
    const n = I(!1);
    let l;
    return te(e.imageLoadingStatus, (s) => {
      s === "loading" && (n.value = !1, t.delayMs ? l = setTimeout(() => {
        n.value = !0, clearTimeout(l);
      }, t.delayMs) : n.value = !0);
    }, { immediate: !0 }), (s, r) => n.value && o(e).imageLoadingStatus.value !== "loaded" ? (b(), _(o(O), {
      key: 0,
      "as-child": s.asChild,
      as: s.as
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : pe("", !0);
  }
});
function xu(a) {
  function t(n) {
    return Array.isArray(a.date.value) ? a.date.value.some((l) => Te(l, n)) : a.date.value ? Te(a.date.value, n) : !1;
  }
  const e = B(
    () => {
      var n, l, s, r;
      if (Array.isArray(a.date.value)) {
        if (!a.date.value.length)
          return !1;
        for (const i of a.date.value)
          if ((n = a.isDateDisabled) != null && n.call(a, i) || (l = a.isDateUnavailable) != null && l.call(a, i))
            return !0;
      } else {
        if (!a.date.value)
          return !1;
        if ((s = a.isDateDisabled) != null && s.call(a, a.date.value) || (r = a.isDateUnavailable) != null && r.call(a, a.date.value))
          return !0;
      }
      return !1;
    }
  );
  return {
    isDateSelected: t,
    isInvalid: e
  };
}
function Su(a, t) {
  const e = t(a), n = e.compare(a), l = {};
  return n >= 7 && (l.day = 1), n >= Et(a) && (l.month = 1), e.set({ ...l });
}
function Eu(a, t) {
  const e = t(a), n = a.compare(e), l = {};
  return n >= 7 && (l.day = 35), n >= Et(a) && (l.month = 13), e.set({ ...l });
}
function Pu(a, t) {
  return t(a);
}
function Du(a, t) {
  return t(a);
}
function Wl(a) {
  const t = Un(a.locale.value), e = B(() => {
    const m = {
      calendar: a.placeholder.value.calendar.identifier
    };
    return a.placeholder.value.calendar.identifier === "gregory" && a.placeholder.value.era === "BC" && (m.era = "short"), m;
  }), n = I(wt({
    dateObj: a.placeholder.value,
    weekStartsOn: a.weekStartsOn.value,
    locale: a.locale.value,
    fixedWeeks: a.fixedWeeks.value,
    numberOfMonths: a.numberOfMonths.value
  })), l = B(() => n.value.map((m) => m.value));
  function s(m) {
    return !l.value.some((S) => Vo(m, S));
  }
  const r = (m = "month", S) => {
    if (!a.maxValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const x = n.value[n.value.length - 1].value;
    if (S || a.nextPage.value) {
      const h = Su(x, S || a.nextPage.value);
      return Sa(h, a.maxValue.value);
    }
    if (m === "year") {
      const h = x.add({ years: 1 }).set({ day: 1, month: 1 });
      return Sa(h, a.maxValue.value);
    }
    const D = x.add({ months: 1 }).set({ day: 1 });
    return Sa(D, a.maxValue.value);
  }, i = (m = "month", S) => {
    if (!a.minValue.value || !n.value.length)
      return !1;
    if (a.disabled.value)
      return !0;
    const x = n.value[0].value;
    if (S || a.prevPage.value) {
      const h = Eu(x, S || a.prevPage.value);
      return ke(h, a.minValue.value);
    }
    if (m === "year") {
      const h = x.subtract({ years: 1 }).set({ day: 35, month: 13 });
      return ke(h, a.minValue.value);
    }
    const D = x.subtract({ months: 1 }).set({ day: 35 });
    return ke(D, a.minValue.value);
  };
  function u(m) {
    var S;
    return !!((S = a.isDateDisabled) != null && S.call(a, m) || a.disabled.value || a.maxValue.value && Sa(m, a.maxValue.value) || a.minValue.value && ke(m, a.minValue.value));
  }
  const d = (m) => {
    var S;
    return !!((S = a.isDateUnavailable) != null && S.call(a, m));
  }, c = B(() => n.value.length ? n.value[0].rows[0].map((m) => t.dayOfWeek(Le(m), a.weekdayFormat.value)) : []), p = (m = "month", S) => {
    const x = n.value[0].value;
    if (S || a.nextPage.value) {
      const E = Pu(x, S || a.nextPage.value), P = wt({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const R = P[0].value.compare(x);
        R >= Et(x) && ($.day = 1), R >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = m === "month" ? x.add({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : x.add({ years: 1 }), h = wt({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = h, a.placeholder.value = h[0].value.set({ day: 1 });
  }, f = (m = "month", S) => {
    const x = n.value[0].value;
    if (S || a.prevPage.value) {
      const E = Du(x, S || a.prevPage.value), P = wt({
        dateObj: E,
        weekStartsOn: a.weekStartsOn.value,
        locale: a.locale.value,
        fixedWeeks: a.fixedWeeks.value,
        numberOfMonths: a.numberOfMonths.value
      });
      n.value = P;
      const $ = {};
      if (!S) {
        const R = x.compare(P[0].value);
        R >= Et(x) && ($.day = 1), R >= 365 && ($.month = 1);
      }
      a.placeholder.value = P[0].value.set({ ...$ });
      return;
    }
    const D = m === "month" ? x.subtract({ months: a.pagedNavigation.value ? a.numberOfMonths.value : 1 }) : x.subtract({ years: 1 }), h = wt({
      dateObj: D,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
    n.value = h, a.placeholder.value = h[0].value.set({ day: 1 });
  };
  te(a.placeholder, (m) => {
    l.value.some((S) => Vo(S, m)) || (n.value = wt({
      dateObj: m,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    }));
  }), te([a.locale, a.weekStartsOn, a.fixedWeeks, a.numberOfMonths], () => {
    n.value = wt({
      dateObj: a.placeholder.value,
      weekStartsOn: a.weekStartsOn.value,
      locale: a.locale.value,
      fixedWeeks: a.fixedWeeks.value,
      numberOfMonths: a.numberOfMonths.value
    });
  });
  const v = B(() => {
    if (!n.value.length)
      return "";
    if (a.locale.value !== t.getLocale() && t.setLocale(a.locale.value), n.value.length === 1) {
      const $ = n.value[0].value;
      return `${t.fullMonthAndYear(Le($), e.value)}`;
    }
    const m = Le(n.value[0].value), S = Le(n.value[n.value.length - 1].value), x = t.fullMonth(m, e.value), D = t.fullMonth(S, e.value), h = t.fullYear(m, e.value), E = t.fullYear(S, e.value);
    return h === E ? `${x} - ${D} ${E}` : `${x} ${h} - ${D} ${E}`;
  }), g = B(() => `${a.calendarLabel.value ?? "Event Date"}, ${v.value}`);
  return {
    isDateDisabled: u,
    isDateUnavailable: d,
    isNextButtonDisabled: r,
    isPrevButtonDisabled: i,
    grid: n,
    weekdays: c,
    visibleView: l,
    isOutsideVisibleView: s,
    formatter: t,
    nextPage: p,
    prevPage: f,
    headingValue: v,
    fullCalendarLabel: g
  };
}
const $u = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Bu = {
  role: "heading",
  "aria-level": "2"
}, [Gt, Iu] = Q("CalendarRoot"), Tu = /* @__PURE__ */ w({
  __name: "CalendarRoot",
  props: {
    modelValue: {},
    multiple: { type: Boolean, default: !1 },
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    preventDeselect: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: !1 },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    initialFocus: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      minValue: v,
      maxValue: g,
      numberOfMonths: m,
      preventDeselect: S,
      isDateDisabled: x,
      isDateUnavailable: D,
      calendarLabel: h,
      defaultValue: E,
      nextPage: P,
      prevPage: $,
      dir: R
    } = ne(e), { primitiveElement: M, currentElement: V } = Ae(), A = be(R), L = ae(e, "modelValue", n, {
      defaultValue: E.value,
      passive: e.modelValue === void 0
    }), U = jt({
      defaultPlaceholder: e.placeholder,
      defaultValue: L.value
    }), H = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    });
    function J(ue) {
      H.value = ue.copy();
    }
    const {
      fullCalendarLabel: N,
      headingValue: F,
      isDateDisabled: W,
      isDateUnavailable: z,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: G,
      weekdays: Z,
      isOutsideVisibleView: ee,
      nextPage: fe,
      prevPage: q,
      formatter: oe,
      grid: he
    } = Wl({
      locale: l,
      placeholder: H,
      weekStartsOn: d,
      fixedWeeks: p,
      numberOfMonths: m,
      minValue: v,
      maxValue: g,
      disabled: s,
      weekdayFormat: c,
      pagedNavigation: u,
      isDateDisabled: x.value,
      isDateUnavailable: D.value,
      calendarLabel: h,
      nextPage: P,
      prevPage: $
    }), {
      isInvalid: Ce,
      isDateSelected: ge
    } = xu({
      date: L,
      isDateDisabled: W,
      isDateUnavailable: z
    });
    te(L, (ue) => {
      if (Array.isArray(ue) && ue.length) {
        const Se = ue[ue.length - 1];
        Se && !Ee(H.value, Se) && J(Se);
      } else !Array.isArray(ue) && ue && !Ee(H.value, ue) && J(ue);
    });
    function De(ue) {
      if (f.value) {
        if (Array.isArray(L.value)) {
          if (!L.value) {
            L.value = [ue.copy()];
            return;
          }
          if (L.value.findIndex((Ve) => Te(Ve, ue)) === -1)
            L.value = [...L.value, ue];
          else if (!S.value) {
            const Ve = L.value.filter((Ke) => !Te(Ke, ue));
            if (!Ve.length) {
              H.value = ue.copy(), L.value = void 0;
              return;
            }
            L.value = Ve.map((Ke) => Ke.copy());
          }
        }
      } else {
        if (!L.value) {
          L.value = ue.copy();
          return;
        }
        !S.value && Ee(L.value, ue) ? (H.value = ue.copy(), L.value = void 0) : L.value = ue.copy();
      }
    }
    return se(() => {
      i.value && Cl(V.value);
    }), Iu({
      isDateUnavailable: z,
      dir: A,
      isDateDisabled: W,
      locale: l,
      formatter: oe,
      modelValue: L,
      placeholder: H,
      disabled: s,
      initialFocus: i,
      pagedNavigation: u,
      weekStartsOn: d,
      weekdayFormat: c,
      fixedWeeks: p,
      multiple: f,
      numberOfMonths: m,
      readonly: r,
      preventDeselect: S,
      fullCalendarLabel: N,
      headingValue: F,
      isInvalid: Ce,
      isDateSelected: ge,
      isNextButtonDisabled: X,
      isPrevButtonDisabled: G,
      isOutsideVisibleView: ee,
      nextPage: fe,
      prevPage: q,
      parentElement: V,
      onPlaceholderChange: J,
      onDateChange: De
    }), (ue, Se) => (b(), _(o(O), {
      ref_key: "primitiveElement",
      ref: M,
      as: ue.as,
      "as-child": ue.asChild,
      role: "application",
      "aria-label": o(N),
      "data-readonly": o(r) ? "" : void 0,
      "data-disabled": o(s) ? "" : void 0,
      "data-invalid": o(Ce) ? "" : void 0,
      dir: o(A)
    }, {
      default: y(() => [
        C(ue.$slots, "default", {
          date: o(H),
          grid: o(he),
          weekDays: o(Z),
          weekStartsOn: o(d),
          locale: o(l),
          fixedWeeks: o(p)
        }),
        Ue("div", $u, [
          Ue("div", Bu, $e(o(N)), 1)
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), Ru = /* @__PURE__ */ w({
  __name: "CalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Au = /* @__PURE__ */ w({
  __name: "CalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Gt();
    return (n, l) => (b(), _(o(O), k(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          ve($e(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), Ou = /* @__PURE__ */ w({
  __name: "CalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = Gt(), n = B(() => e.disabled.value ? !0 : void 0), l = B(() => e.readonly.value ? !0 : void 0);
    return (s, r) => (b(), _(o(O), k(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": l.value,
      "aria-disabled": n.value,
      "data-readonly": l.value && "",
      "data-disabled": n.value && ""
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), ku = /* @__PURE__ */ w({
  __name: "CalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = Gt();
    return (e, n) => {
      var l, s;
      return b(), _(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isDateSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), Mu = /* @__PURE__ */ w({
  __name: "CalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vu = /* @__PURE__ */ w({
  __name: "CalendarNext",
  props: {
    step: { default: "month" },
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = B(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = Gt();
    return (l, s) => (b(), _(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }, {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Fu = /* @__PURE__ */ w({
  __name: "CalendarPrev",
  props: {
    step: { default: "month" },
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = B(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = Gt();
    return (l, s) => (b(), _(o(O), {
      "aria-label": "Previous page",
      as: t.as,
      "as-child": t.asChild,
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }, {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve("Prev page")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), Lu = /* @__PURE__ */ w({
  __name: "CalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), k(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nu = /* @__PURE__ */ w({
  __name: "CalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zu = /* @__PURE__ */ w({
  __name: "CalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ku = /* @__PURE__ */ w({
  __name: "CalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = et(), n = Gt(), { primitiveElement: l, currentElement: s } = Ae(), r = B(() => t.day.day.toLocaleString(n.locale.value)), i = B(() => n.formatter.custom(Le(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), u = B(() => n.isDateDisabled(t.day)), d = B(
      () => {
        var h;
        return (h = n.isDateUnavailable) == null ? void 0 : h.call(n, t.day);
      }
    ), c = B(() => fl(t.day, zn())), p = B(() => !vl(t.day, t.month)), f = B(
      () => n.isOutsideVisibleView(t.day)
    ), v = B(() => !n.disabled.value && Te(t.day, n.placeholder.value)), g = B(() => n.isDateSelected(t.day)), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])";
    function S(h) {
      var E;
      n.readonly.value || n.isDateDisabled(h) || (E = n.isDateUnavailable) != null && E.call(n, h) || n.onDateChange(h);
    }
    function x() {
      S(t.day);
    }
    function D(h) {
      h.preventDefault(), h.stopPropagation();
      const E = n.parentElement.value, P = E ? Array.from(E.querySelectorAll(m)) : [];
      let R = P.indexOf(s.value);
      const M = 7, V = n.dir.value === "rtl" ? -1 : 1;
      switch (h.code) {
        case e.ARROW_RIGHT:
          R += V;
          break;
        case e.ARROW_LEFT:
          R -= V;
          break;
        case e.ARROW_UP:
          R -= M;
          break;
        case e.ARROW_DOWN:
          R += M;
          break;
        case e.ENTER:
        case e.SPACE_CODE:
          S(t.day);
          return;
        default:
          return;
      }
      if (R >= 0 && R < P.length) {
        P[R].focus();
        return;
      }
      if (R < 0) {
        if (n.isPrevButtonDisabled("month"))
          return;
        n.prevPage(), le(() => {
          const A = E ? Array.from(E.querySelectorAll(m)) : [];
          A[A.length - Math.abs(R)].focus();
        });
        return;
      }
      if (R >= P.length) {
        if (n.isNextButtonDisabled("month"))
          return;
        n.nextPage(), le(() => {
          (E ? Array.from(E.querySelectorAll(m)) : [])[R - P.length].focus();
        });
      }
    }
    return (h, E) => (b(), _(o(O), k({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": i.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-disabled": p.value || u.value || d.value ? !0 : void 0,
      "data-selected": g.value ? !0 : void 0,
      "data-value": h.day.toString(),
      "data-disabled": u.value || p.value ? "" : void 0,
      "data-unavailable": d.value ? "" : void 0,
      "data-today": c.value ? "" : void 0,
      "data-outside-view": p.value ? "" : void 0,
      "data-outside-visible-view": f.value ? "" : void 0,
      "data-focused": v.value ? "" : void 0,
      tabindex: v.value ? 0 : p.value || u.value ? void 0 : -1,
      onClick: x,
      onKeydown: [
        re(D, ["up", "down", "left", "right", "space", "enter"]),
        E[0] || (E[0] = re(ie(() => {
        }, ["prevent"]), ["enter"]))
      ]
    }), {
      default: y(() => [
        C(h.$slots, "default", { dayValue: r.value }, () => [
          ve($e(r.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-disabled", "data-selected", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-view", "data-outside-visible-view", "data-focused", "tabindex"]));
  }
});
function La(a) {
  return a === "indeterminate";
}
function jl(a) {
  return La(a) ? "indeterminate" : a ? "checked" : "unchecked";
}
const Hu = ["value", "checked", "name", "disabled", "required"], [Wu, ju] = Q("CheckboxRoot"), Iv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = ae(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: r, currentElement: i } = T(), u = Qe(i), d = B(() => {
      var c;
      return e.id && i.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return ju({
      disabled: l,
      state: s
    }), (c, p) => (b(), ce(_e, null, [
      Y(o(O), k(c.$attrs, {
        id: c.id,
        ref: o(r),
        role: "checkbox",
        "as-child": e.asChild,
        as: c.as,
        type: c.as === "button" ? "button" : void 0,
        "aria-checked": o(La)(o(s)) ? "mixed" : o(s),
        "aria-required": !1,
        "aria-label": c.$attrs["aria-label"] || d.value,
        "data-state": o(jl)(o(s)),
        "data-disabled": o(l) ? "" : void 0,
        disabled: o(l),
        onKeydown: re(ie(() => {
        }, ["prevent"]), ["enter"]),
        onClick: p[0] || (p[0] = (f) => s.value = o(La)(o(s)) ? !0 : !o(s))
      }), {
        default: y(() => [
          C(c.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      o(u) ? (b(), ce("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: c.value,
        checked: !!o(s),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Hu)) : pe("", !0)
    ], 64));
  }
}), Tv = /* @__PURE__ */ w({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = T(), e = Wu();
    return (n, l) => (b(), _(o(Pe), {
      present: n.forceMount || o(La)(o(e).state.value) || o(e).state.value === !0
    }, {
      default: y(() => [
        Y(o(O), k({
          ref: o(t),
          "data-state": o(jl)(o(e).state.value),
          "data-disabled": o(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Ul, Uu] = Q("PopperRoot"), It = /* @__PURE__ */ w({
  __name: "PopperRoot",
  setup(a) {
    const t = I();
    return Uu({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, n) => C(e.$slots, "default");
  }
}), Tt = /* @__PURE__ */ w({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = T(), l = Ul();
    return te(n, () => {
      l.onAnchorChange(t.element ?? n.value);
    }), (s, r) => (b(), _(o(O), {
      ref: o(e),
      as: s.as,
      "as-child": s.asChild
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function Gu(a) {
  return a !== null;
}
function qu(a) {
  return {
    name: "transformOrigin",
    options: a,
    fn(t) {
      var S, x, D;
      const { placement: e, rects: n, middlewareData: l } = t, r = ((S = l.arrow) == null ? void 0 : S.centerOffset) !== 0, i = r ? 0 : a.arrowWidth, u = r ? 0 : a.arrowHeight, [d, c] = Bn(e), p = { start: "0%", center: "50%", end: "100%" }[c], f = (((x = l.arrow) == null ? void 0 : x.x) ?? 0) + i / 2, v = (((D = l.arrow) == null ? void 0 : D.y) ?? 0) + u / 2;
      let g = "", m = "";
      return d === "bottom" ? (g = r ? p : `${f}px`, m = `${-u}px`) : d === "top" ? (g = r ? p : `${f}px`, m = `${n.floating.height + u}px`) : d === "right" ? (g = `${-u}px`, m = r ? p : `${v}px`) : d === "left" && (g = `${n.floating.width + u}px`, m = r ? p : `${v}px`), { data: { x: g, y: m } };
    }
  };
}
function Bn(a) {
  const [t, e = "center"] = a.split("-");
  return [t, e];
}
const Gl = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Yu, Xu] = Q("PopperContent"), Pt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ cl({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Gl
  }),
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Ul(), { forwardRef: s, currentElement: r } = T(), i = I(), u = I(), { width: d, height: c } = Rl(u), p = B(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = B(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v = B(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), g = B(() => ({
      padding: f.value,
      boundary: v.value.filter(Gu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), m = Ur(() => [
      Er({
        mainAxis: e.sideOffset + c.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && Fo({
        ...g.value
      }),
      e.avoidCollisions && Pr({
        mainAxis: !0,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? Dr() : void 0,
        ...g.value
      }),
      !e.prioritizePosition && e.avoidCollisions && Fo({
        ...g.value
      }),
      $r({
        ...g.value,
        apply: ({ elements: A, rects: L, availableWidth: U, availableHeight: H }) => {
          const { width: J, height: N } = L.reference, F = A.floating.style;
          F.setProperty(
            "--radix-popper-available-width",
            `${U}px`
          ), F.setProperty(
            "--radix-popper-available-height",
            `${H}px`
          ), F.setProperty(
            "--radix-popper-anchor-width",
            `${J}px`
          ), F.setProperty(
            "--radix-popper-anchor-height",
            `${N}px`
          );
        }
      }),
      u.value && Br({ element: u.value, padding: e.arrowPadding }),
      qu({
        arrowWidth: d.value,
        arrowHeight: c.value
      }),
      e.hideWhenDetached && Ir({ strategy: "referenceHidden", ...g.value })
    ]), { floatingStyles: S, placement: x, isPositioned: D, middlewareData: h } = xr(
      l.anchor,
      i,
      {
        strategy: "fixed",
        placement: p,
        whileElementsMounted: (...A) => Sr(...A, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), E = B(
      () => Bn(x.value)[0]
    ), P = B(
      () => Bn(x.value)[1]
    );
    ye(() => {
      D.value && n("placed");
    });
    const $ = B(
      () => {
        var A;
        return ((A = h.value.arrow) == null ? void 0 : A.centerOffset) !== 0;
      }
    ), R = I("");
    ye(() => {
      r.value && (R.value = window.getComputedStyle(r.value).zIndex);
    });
    const M = B(() => {
      var A;
      return ((A = h.value.arrow) == null ? void 0 : A.x) ?? 0;
    }), V = B(() => {
      var A;
      return ((A = h.value.arrow) == null ? void 0 : A.y) ?? 0;
    });
    return Xu({
      placedSide: E,
      onArrowChange: (A) => u.value = A,
      arrowX: M,
      arrowY: V,
      shouldHideArrow: $
    }), (A, L) => {
      var U, H, J;
      return b(), ce("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: Oe({
          ...o(S),
          transform: o(D) ? o(S).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (U = o(h).transformOrigin) == null ? void 0 : U.x,
            (H = o(h).transformOrigin) == null ? void 0 : H.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = o(h).hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Y(o(O), k({ ref: o(s) }, A.$attrs, {
          "as-child": e.asChild,
          as: A.as,
          "data-side": E.value,
          "data-align": P.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: o(D) ? void 0 : "none"
          }
        }), {
          default: y(() => [
            C(A.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Zu = /* @__PURE__ */ Ue("polygon", { points: "0,0 30,0 15,10" }, null, -1), Ju = /* @__PURE__ */ w({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), k(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: y(() => [
        C(e.$slots, "default", {}, () => [
          Zu
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), Qu = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, qt = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const { forwardRef: t } = T(), e = Yu(), n = B(() => Qu[e.placedSide.value]);
    return (l, s) => {
      var r, i, u, d;
      return b(), ce("span", {
        ref: (c) => {
          o(e).onArrowChange(c);
        },
        style: Oe({
          position: "absolute",
          left: (r = o(e).arrowX) != null && r.value ? `${(i = o(e).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = o(e).arrowY) != null && u.value ? `${(d = o(e).arrowY) == null ? void 0 : d.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o(e).placedSide.value],
          visibility: o(e).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        Y(Ju, k(l.$attrs, {
          ref: o(t),
          style: {
            display: "block"
          },
          as: l.as,
          "as-child": l.asChild,
          width: l.width,
          height: l.height
        }), {
          default: y(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), Yt = /* @__PURE__ */ w({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return T(), (t, e) => (b(), _(o(O), {
      as: t.as,
      "as-child": t.asChild,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      }
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), to = /* @__PURE__ */ w({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(a) {
    const t = a, e = B(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((n, l) => typeof n == "object" ? Object.entries(n).map(([s, r]) => ({ name: `[${l}][${t.name}][${s}]`, value: r })) : { name: `[${t.name}][${l}]`, value: n }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([n, l]) => ({ name: `[${t.name}][${n}]`, value: l })) : []);
    return (n, l) => (b(!0), ce(_e, null, va(e.value, (s) => (b(), _(Yt, {
      key: s.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: s.name,
      value: s.value,
      required: n.required,
      disabled: n.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
}), ed = "data-radix-vue-collection-item", [ao, td] = Q("CollectionProvider");
function ba(a = ed) {
  const t = I(/* @__PURE__ */ new Map()), e = I(), n = td({
    collectionRef: e,
    itemMap: t,
    attrName: a
  }), { getItems: l } = Zt(n), s = B(() => Array.from(n.itemMap.value.values())), r = B(() => n.itemMap.value.size);
  return { getItems: l, reactiveItems: s, itemMapSize: r };
}
const Ca = w({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = ao(), { primitiveElement: n, currentElement: l } = Ae();
    return te(l, () => {
      e.collectionRef.value = l.value;
    }), () => pt(Xn, { ref: n }, t);
  }
}), Xt = w({
  name: "CollectionItem",
  inheritAttrs: !1,
  props: {
    value: {
      // It accepts any value
      validator: () => !0
    }
  },
  setup(a, { slots: t, attrs: e }) {
    const n = ao(), { primitiveElement: l, currentElement: s } = Ae();
    return ye((r) => {
      if (s.value) {
        const i = vr(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => pt(Xn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function Zt(a) {
  const t = a ?? ao();
  return { getItems: () => {
    const n = t.collectionRef.value;
    if (!n)
      return [];
    const l = Array.from(n.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (i, u) => l.indexOf(i.ref) - l.indexOf(u.ref)
    );
  } };
}
const [nt, ad] = Q("ComboboxRoot"), Rv = /* @__PURE__ */ w({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    selectedValue: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    resetSearchTermOnBlur: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm", "update:selectedValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { multiple: l, disabled: s, dir: r } = ne(e), i = be(r), u = ae(e, "searchTerm", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = ae(e, "modelValue", n, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? l.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: !0
    }), c = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), p = ae(e, "selectedValue", n, {
      defaultValue: void 0,
      passive: e.selectedValue === void 0
    });
    async function f(N) {
      var F, W;
      c.value = N, await le(), N ? (d.value && (Array.isArray(d.value) && l.value ? p.value = (F = h().find((z) => {
        var X, G;
        return ((G = (X = z.ref) == null ? void 0 : X.dataset) == null ? void 0 : G.state) === "checked";
      })) == null ? void 0 : F.value : p.value = d.value), (W = m.value) == null || W.focus(), H()) : (g.value = !1, e.resetSearchTermOnBlur && M());
    }
    function v(N) {
      if (Array.isArray(d.value) && l.value) {
        const F = d.value.findIndex((z) => Ye(z, N)), W = [...d.value];
        F === -1 ? W.push(N) : W.splice(F, 1), d.value = W;
      } else
        d.value = N, f(!1);
    }
    const g = I(!1), m = I(), S = I(), { forwardRef: x, currentElement: D } = T(), { getItems: h, reactiveItems: E, itemMapSize: P } = ba("data-radix-vue-combobox-item"), $ = I([]);
    te(() => P.value, () => {
      $.value = h().map((N) => N.value);
    }, {
      immediate: !0,
      flush: "post"
    });
    const R = B(() => {
      if (g.value) {
        if (e.filterFunction)
          return e.filterFunction($.value, u.value);
        const N = $.value.filter((F) => typeof F == "string");
        if (N.length)
          return N.filter((F) => {
            var W;
            return F.toLowerCase().includes((W = u.value) == null ? void 0 : W.toLowerCase());
          });
      }
      return $.value;
    });
    function M() {
      !l.value && d.value && !Array.isArray(d.value) ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const V = B(() => R.value.findIndex((N) => Ye(N, p.value))), A = B(() => {
      var N;
      return (N = E.value.find((F) => Ye(F.value, p.value))) == null ? void 0 : N.ref;
    }), L = B(() => JSON.stringify(d.value));
    te(L, async () => {
      await le(), await le(), M();
    }, {
      // If searchTerm is provided with value during initialization, we don't reset it immediately
      immediate: !e.searchTerm
    }), te(() => [R.value.length, u.value.length], async ([N, F], [W, z]) => {
      await le(), await le(), N && (z > F || V.value === -1) && (p.value = R.value[0]);
    });
    const U = Qe(D);
    function H() {
      A.value instanceof Element && A.value.scrollIntoView({ block: "nearest" });
    }
    function J() {
      A.value instanceof Element && A.value.focus && A.value.focus();
    }
    return ad({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error ignoring
      onValueChange: v,
      isUserInputted: g,
      multiple: l,
      disabled: s,
      open: c,
      onOpenChange: f,
      filteredOptions: R,
      contentId: "",
      inputElement: m,
      selectedElement: A,
      onInputElementChange: (N) => m.value = N,
      onInputNavigation: async (N) => {
        const F = V.value;
        F === 0 && N === "up" || F === R.value.length - 1 && N === "down" || (F === -1 && R.value.length || N === "home" ? p.value = R.value[0] : N === "end" ? p.value = R.value[R.value.length - 1] : p.value = R.value[N === "up" ? F - 1 : F + 1], H(), J(), le(() => {
          var W;
          return (W = m.value) == null ? void 0 : W.focus({ preventScroll: !0 });
        }));
      },
      onInputEnter: async () => {
        var N;
        R.value.length && p.value && A.value instanceof Element && ((N = A.value) == null || N.click());
      },
      selectedValue: p,
      onSelectedValueChange: (N) => p.value = N,
      parentElement: D,
      contentElement: S,
      onContentElementChange: (N) => S.value = N
    }), (N, F) => (b(), _(o(It), null, {
      default: y(() => [
        Y(o(O), k({
          ref: o(x),
          style: {
            pointerEvents: o(c) ? "auto" : void 0
          },
          as: N.as,
          "as-child": N.asChild,
          dir: o(i)
        }, N.$attrs), {
          default: y(() => [
            C(N.$slots, "default", {
              open: o(c),
              modelValue: o(d)
            }),
            o(U) && e.name ? (b(), _(o(to), {
              key: 0,
              name: e.name,
              value: o(d)
            }, null, 8, ["name", "value"])) : pe("", !0)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Av = /* @__PURE__ */ w({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = nt(), { forwardRef: n, currentElement: l } = T();
    se(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && (e.onInputElementChange(c), setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1));
    });
    const s = B(() => t.disabled || e.disabled.value || !1), r = I();
    mr(() => {
      var c;
      return r.value = (c = e.selectedElement.value) == null ? void 0 : c.id;
    });
    function i(c) {
      e.open.value ? e.onInputNavigation(c.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(!0);
    }
    function u(c) {
      e.open.value && e.onInputNavigation(c.key === "Home" ? "home" : "end");
    }
    function d(c) {
      var p;
      e.searchTerm.value = (p = c.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(!0), e.isUserInputted.value = !0;
    }
    return (c, p) => (b(), _(o(O), {
      ref: o(n),
      as: c.as,
      "as-child": c.asChild,
      type: c.type,
      disabled: s.value,
      value: o(e).searchTerm.value,
      "aria-expanded": o(e).open.value,
      "aria-controls": o(e).contentId,
      "aria-disabled": s.value ?? void 0,
      "aria-activedescendant": r.value,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: d,
      onKeydown: [
        re(ie(i, ["prevent"]), ["down", "up"]),
        re(o(e).onInputEnter, ["enter"]),
        re(ie(u, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "aria-activedescendant", "onKeydown"]));
  }
}), Ov = /* @__PURE__ */ w({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t } = T();
    return (e, n) => (b(), _(o(Tt), { "as-child": "" }, {
      default: y(() => [
        Y(o(O), k({
          ref: o(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: y(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), kv = /* @__PURE__ */ w({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = nt(), n = B(() => t.disabled || e.disabled.value || !1);
    return (l, s) => (b(), _(o(O), k(t, {
      type: l.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": o(e).open.value,
      "aria-controls": o(e).contentId,
      "data-state": o(e).open.value ? "open" : "closed",
      disabled: n.value,
      "data-disabled": n.value ? "" : void 0,
      "aria-disabled": n.value ?? void 0,
      onClick: s[0] || (s[0] = (r) => o(e).onOpenChange(!o(e).open.value))
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), Mv = /* @__PURE__ */ w({
  __name: "ComboboxCancel",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = nt();
    function n() {
      var l;
      e.searchTerm.value = "", (l = e.inputElement.value) == null || l.focus();
    }
    return (l, s) => (b(), _(o(O), k({
      type: l.as === "button" ? "button" : void 0
    }, t, {
      tabindex: "-1",
      onClick: n
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), [ql, nd] = Q("ComboboxGroup"), Vv = /* @__PURE__ */ w({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { currentRef: e, currentElement: n } = T(), l = me(void 0, "radix-vue-combobox-group"), s = nt(), r = I(!1);
    function i() {
      if (!n.value)
        return;
      const u = n.value.querySelectorAll("[data-radix-vue-combobox-item]:not([data-hidden])");
      r.value = !!u.length;
    }
    return Pl(n, () => {
      le(() => {
        i();
      });
    }, { childList: !0 }), te(() => s.searchTerm.value, () => {
      le(() => {
        i();
      });
    }, { immediate: !0 }), nd({
      id: l
    }), (u, d) => Ha((b(), _(o(O), k(t, {
      ref_key: "currentRef",
      ref: e,
      role: "group",
      "aria-labelledby": o(l)
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [Ln, r.value]
    ]);
  }
}), Fv = /* @__PURE__ */ w({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    T();
    const e = ql({ id: "" });
    return (n, l) => (b(), _(o(O), k(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [od, ld] = Q("ComboboxContent"), sd = /* @__PURE__ */ w({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { position: l } = ne(e), s = nt();
    ha(e.bodyLock);
    const { forwardRef: r, currentElement: i } = T();
    ya(i);
    const u = B(() => e.position === "popper" ? e : {}), d = Bt(u.value);
    function c(f) {
      s.onSelectedValueChange("");
    }
    se(() => {
      s.onContentElementChange(i.value);
    });
    const p = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return ld({ position: l }), (f, v) => (b(), _(o(Ca), null, {
      default: y(() => [
        f.dismissable ? (b(), _(o(yt), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (g) => o(s).onOpenChange(!1)),
          onFocusOutside: v[1] || (v[1] = (g) => {
            var m;
            (m = o(s).parentElement.value) != null && m.contains(g.target) && g.preventDefault(), n("focusOutside", g);
          }),
          onInteractOutside: v[2] || (v[2] = (g) => n("interactOutside", g)),
          onEscapeKeyDown: v[3] || (v[3] = (g) => n("escapeKeyDown", g)),
          onPointerDownOutside: v[4] || (v[4] = (g) => {
            var m;
            (m = o(s).parentElement.value) != null && m.contains(g.target) && g.preventDefault(), n("pointerDownOutside", g);
          })
        }, {
          default: y(() => [
            (b(), _(Ge(o(l) === "popper" ? o(Pt) : o(O)), k({ ...f.$attrs, ...o(d) }, {
              id: o(s).contentId,
              ref: o(r),
              role: "listbox",
              "data-state": o(s).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...o(l) === "popper" ? p : {}
              },
              onPointerleave: c
            }), {
              default: y(() => [
                C(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (b(), _(Ge(o(l) === "popper" ? o(Pt) : o(O)), k({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: o(s).contentId,
          ref: o(r),
          role: "listbox",
          "data-state": o(s).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...o(l) === "popper" ? p : {}
          },
          onPointerleave: c
        }), {
          default: y(() => [
            C(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Lv = /* @__PURE__ */ w({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const l = xe(a, t), { forwardRef: s } = T(), r = nt();
    return r.contentId || (r.contentId = me(void 0, "radix-vue-combobox-content")), (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: y(() => [
        Y(sd, k({ ...o(l), ...i.$attrs }, { ref: o(s) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nv = /* @__PURE__ */ w({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    T();
    const e = nt(), n = B(() => e.filteredOptions.value.length === 0);
    return (l, s) => n.value ? (b(), _(o(O), K(k({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve("No options")
        ])
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function Xa(a) {
  const t = Ga({
    nonce: I()
  });
  return B(() => {
    var e;
    return (a == null ? void 0 : a.value) || ((e = t.nonce) == null ? void 0 : e.value);
  });
}
const zv = /* @__PURE__ */ w({
  __name: "ComboboxViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), { nonce: n } = ne(t), l = Xa(n);
    return (s, r) => (b(), ce(_e, null, [
      Y(o(O), k({ ...s.$attrs, ...t }, {
        ref: o(e),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: y(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      Y(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), [rd, id] = Q("ComboboxItem"), ud = "combobox.select", Kv = /* @__PURE__ */ w({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = nt();
    ql({ id: "", options: I([]) });
    const { forwardRef: r } = T(), i = B(
      () => {
        var m, S;
        return s.multiple.value && Array.isArray(s.modelValue.value) ? (m = s.modelValue.value) == null ? void 0 : m.some((x) => Ye(x, e.value)) : Ye((S = s.modelValue) == null ? void 0 : S.value, e.value);
      }
    ), u = B(() => Ye(s.selectedValue.value, e.value)), d = me(void 0, "radix-vue-combobox-item"), c = me(void 0, "radix-vue-combobox-option"), p = B(() => s.isUserInputted.value ? s.searchTerm.value === "" || !!s.filteredOptions.value.find((m) => Ye(m, e.value)) : !0);
    async function f(m) {
      n("select", m), !(m != null && m.defaultPrevented) && !l.value && m && s.onValueChange(e.value);
    }
    function v(m) {
      if (!m)
        return;
      const S = { originalEvent: m, value: e.value };
      zt(ud, f, S);
    }
    async function g(m) {
      await le(), !m.defaultPrevented && s.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder."
      );
    return id({
      isSelected: i
    }), (m, S) => (b(), _(o(Xt), { value: m.value }, {
      default: y(() => [
        Ha(Y(o(O), {
          id: o(c),
          ref: o(r),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": o(d),
          "data-highlighted": u.value ? "" : void 0,
          "aria-selected": i.value,
          "data-state": i.value ? "checked" : "unchecked",
          "aria-disabled": o(l) || void 0,
          "data-disabled": o(l) ? "" : void 0,
          as: m.as,
          "as-child": m.asChild,
          "data-hidden": p.value ? void 0 : !0,
          onClick: v,
          onPointermove: g
        }, {
          default: y(() => [
            C(m.$slots, "default", {}, () => [
              ve($e(m.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["id", "aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child", "data-hidden"]), [
          [Ln, p.value]
        ])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Hv = /* @__PURE__ */ w({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    T();
    const e = rd();
    return (n, l) => o(e).isSelected.value ? (b(), _(o(O), k({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Wv = /* @__PURE__ */ w({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), k(t, { "aria-hidden": "" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jv = /* @__PURE__ */ w({
  __name: "ComboboxArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = nt(), n = od();
    return T(), (l, s) => o(e).open.value && o(n).position.value === "popper" ? (b(), _(o(qt), K(k({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Uv = /* @__PURE__ */ w({
  __name: "ComboboxPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Za = /* @__PURE__ */ w({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Tt), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), no = /* @__PURE__ */ w({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(qt), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rt, Yl] = Q(["MenuRoot", "MenuSub"], "MenuContext"), [wa, dd] = Q("MenuRoot"), oo = /* @__PURE__ */ w({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l, dir: s } = ne(e), r = be(s), i = ae(e, "open", n), u = I(), d = I(!1);
    return ye((c) => {
      if (!Je)
        return;
      const p = () => {
        d.value = !0, document.addEventListener("pointerdown", f, {
          capture: !0,
          once: !0
        }), document.addEventListener("pointermove", f, {
          capture: !0,
          once: !0
        });
      }, f = () => d.value = !1;
      document.addEventListener("keydown", p, { capture: !0 }), c(() => {
        document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", f, {
          capture: !0
        }), document.removeEventListener("pointermove", f, {
          capture: !0
        });
      });
    }), Yl({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), dd({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: d,
      dir: r,
      modal: l
    }), (c, p) => (b(), _(o(It), null, {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }));
  }
}), cd = "rovingFocusGroup.onEntryFocus", pd = { bubbles: !1, cancelable: !0 }, Ja = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function fd(a, t) {
  return t !== "rtl" ? a : a === "ArrowLeft" ? "ArrowRight" : a === "ArrowRight" ? "ArrowLeft" : a;
}
function Xl(a, t, e) {
  const n = fd(a.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Ja[n];
}
function Zl(a, t = !1) {
  const e = document.activeElement;
  for (const n of a)
    if (n === e || (n.focus({ preventScroll: t }), document.activeElement !== e))
      return;
}
function vd(a, t) {
  return a.map((e, n) => a[(t + n) % a.length]);
}
const [md, hd] = Q("RovingFocusGroup"), At = /* @__PURE__ */ w({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !1 },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    preventScrollOnEntryFocus: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, { loop: s, orientation: r, dir: i } = ne(n), u = be(i), d = ae(n, "currentTabStopId", l, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = I(!1), p = I(!1), f = I(0), { getItems: v } = ba();
    function g(m) {
      const S = !p.value;
      if (m.currentTarget && m.target === m.currentTarget && S && !c.value) {
        const x = new CustomEvent(cd, pd);
        if (m.currentTarget.dispatchEvent(x), l("entryFocus", x), !x.defaultPrevented) {
          const D = v().map(($) => $.ref).filter(($) => $.dataset.disabled !== ""), h = D.find(($) => $.getAttribute("data-active") === "true"), E = D.find(
            ($) => $.id === d.value
          ), P = [h, E, ...D].filter(
            Boolean
          );
          Zl(P, n.preventScrollOnEntryFocus);
        }
      }
      p.value = !1;
    }
    return t({
      getItems: v
    }), hd({
      loop: s,
      dir: u,
      orientation: r,
      currentTabStopId: d,
      onItemFocus: (m) => {
        d.value = m;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        f.value++;
      },
      onFocusableItemRemove: () => {
        f.value--;
      }
    }), (m, S) => (b(), _(o(Ca), null, {
      default: y(() => [
        Y(o(O), {
          tabindex: c.value || f.value === 0 ? -1 : 0,
          "data-orientation": o(r),
          as: m.as,
          "as-child": m.asChild,
          dir: o(u),
          style: { outline: "none" },
          onMousedown: S[0] || (S[0] = (x) => p.value = !0),
          onFocus: g,
          onBlur: S[1] || (S[1] = (x) => c.value = !1)
        }, {
          default: y(() => [
            C(m.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Ot = /* @__PURE__ */ w({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: !0 },
    active: { type: Boolean, default: !0 },
    allowShiftKey: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = md(), n = B(() => t.tabStopId || me()), l = B(
      () => e.currentTabStopId.value === n.value
    ), { getItems: s } = Zt();
    se(() => {
      t.focusable && e.onFocusableItemAdd();
    }), Ie(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function r(i) {
      if (i.key === "Tab" && i.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (i.target !== i.currentTarget)
        return;
      const u = Xl(
        i,
        e.orientation.value,
        e.dir.value
      );
      if (u !== void 0) {
        if (i.metaKey || i.ctrlKey || i.altKey || !t.allowShiftKey && i.shiftKey)
          return;
        i.preventDefault();
        let d = [...s().map((c) => c.ref).filter((c) => c.dataset.disabled !== "")];
        if (u === "last")
          d.reverse();
        else if (u === "prev" || u === "next") {
          u === "prev" && d.reverse();
          const c = d.indexOf(
            i.currentTarget
          );
          d = e.loop.value ? vd(d, c + 1) : d.slice(c + 1);
        }
        le(() => Zl(d));
      }
    }
    return (i, u) => (b(), _(o(Xt), null, {
      default: y(() => [
        Y(o(O), {
          tabindex: l.value ? 0 : -1,
          "data-orientation": o(e).orientation.value,
          "data-active": i.active,
          "data-disabled": i.focusable ? void 0 : "",
          as: i.as,
          "as-child": i.asChild,
          onMousedown: u[0] || (u[0] = (d) => {
            i.focusable ? o(e).onItemFocus(n.value) : d.preventDefault();
          }),
          onFocus: u[1] || (u[1] = (d) => o(e).onItemFocus(n.value)),
          onKeydown: r
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), [lo, yd] = Q("MenuContent"), so = /* @__PURE__ */ w({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ cl({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Gl
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Rt(), s = wa(), { trapFocus: r, disableOutsidePointerEvents: i, loop: u } = ne(e);
    Gn(), ha(i.value);
    const d = I(""), c = I(0), p = I(0), f = I(null), v = I("right"), g = I(0), m = I(null), { createCollection: S } = Me(), { forwardRef: x, currentElement: D } = T(), h = S(D);
    te(D, (A) => {
      l.onContentChange(A);
    });
    const { handleTypeaheadSearch: E } = ga(h);
    Ie(() => {
      window.clearTimeout(c.value);
    });
    function P(A) {
      var U, H;
      return v.value === ((U = f.value) == null ? void 0 : U.side) && iu(A, (H = f.value) == null ? void 0 : H.area);
    }
    async function $(A) {
      var L;
      n("openAutoFocus", A), !A.defaultPrevented && (A.preventDefault(), (L = D.value) == null || L.focus({
        preventScroll: !0
      }));
    }
    function R(A) {
      if (A.defaultPrevented)
        return;
      const U = A.target.closest("[data-radix-menu-content]") === A.currentTarget, H = A.ctrlKey || A.altKey || A.metaKey, J = A.key.length === 1, N = $t(
        A,
        document.activeElement,
        D.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: s == null ? void 0 : s.dir.value,
          focus: !0,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (N)
        return N == null ? void 0 : N.focus();
      if (A.code === "Space" || (U && (A.key === "Tab" && A.preventDefault(), !H && J && E(A.key)), A.target !== D.value) || !ou.includes(A.key))
        return;
      A.preventDefault();
      const F = h.value;
      Nl.includes(A.key) && F.reverse(), $n(F);
    }
    function M(A) {
      var L, U;
      (U = (L = A == null ? void 0 : A.currentTarget) == null ? void 0 : L.contains) != null && U.call(L, A.target) || (window.clearTimeout(c.value), d.value = "");
    }
    function V(A) {
      var H;
      if (!ua(A))
        return;
      const L = A.target, U = g.value !== A.clientX;
      if ((H = A == null ? void 0 : A.currentTarget) != null && H.contains(L) && U) {
        const J = A.clientX > g.value ? "right" : "left";
        v.value = J, g.value = A.clientX;
      }
    }
    return yd({
      onItemEnter: (A) => !!P(A),
      onItemLeave: (A) => {
        var L;
        P(A) || ((L = D.value) == null || L.focus(), m.value = null);
      },
      onTriggerLeave: (A) => !!P(A),
      searchRef: d,
      pointerGraceTimerRef: p,
      onPointerGraceIntentChange: (A) => {
        f.value = A;
      }
    }), (A, L) => (b(), _(o(Ya), {
      "as-child": "",
      trapped: o(r),
      onMountAutoFocus: $,
      onUnmountAutoFocus: L[7] || (L[7] = (U) => n("closeAutoFocus", U))
    }, {
      default: y(() => [
        Y(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": o(i),
          onEscapeKeyDown: L[2] || (L[2] = (U) => n("escapeKeyDown", U)),
          onPointerDownOutside: L[3] || (L[3] = (U) => n("pointerDownOutside", U)),
          onFocusOutside: L[4] || (L[4] = (U) => n("focusOutside", U)),
          onInteractOutside: L[5] || (L[5] = (U) => n("interactOutside", U)),
          onDismiss: L[6] || (L[6] = (U) => n("dismiss"))
        }, {
          default: y(() => [
            Y(o(At), {
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (U) => m.value = U),
              "as-child": "",
              orientation: "vertical",
              dir: o(s).dir.value,
              loop: o(u),
              onEntryFocus: L[1] || (L[1] = (U) => {
                n("entryFocus", U), o(s).isUsingKeyboardRef.value || U.preventDefault();
              })
            }, {
              default: y(() => [
                Y(o(Pt), {
                  ref: o(x),
                  role: "menu",
                  as: A.as,
                  "as-child": A.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": o(Qn)(o(l).open.value),
                  dir: o(s).dir.value,
                  side: A.side,
                  "side-offset": A.sideOffset,
                  align: A.align,
                  "align-offset": A.alignOffset,
                  "avoid-collisions": A.avoidCollisions,
                  "collision-boundary": A.collisionBoundary,
                  "collision-padding": A.collisionPadding,
                  "arrow-padding": A.arrowPadding,
                  "prioritize-position": A.prioritizePosition,
                  sticky: A.sticky,
                  "hide-when-detached": A.hideWhenDetached,
                  onKeydown: R,
                  onBlur: M,
                  onPointermove: V
                }, {
                  default: y(() => [
                    C(A.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Jl = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = lo(), { forwardRef: n } = T(), l = I(!1);
    async function s(i) {
      if (!i.defaultPrevented && ua(i)) {
        if (t.disabled)
          e.onItemLeave(i);
        else if (!e.onItemEnter(i)) {
          const d = i.currentTarget;
          d == null || d.focus({ preventScroll: !0 });
        }
      }
    }
    async function r(i) {
      await le(), !i.defaultPrevented && ua(i) && e.onItemLeave(i);
    }
    return (i, u) => (b(), _(o(Xt), null, {
      default: y(() => [
        Y(o(O), k({
          ref: o(n),
          role: "menuitem",
          tabindex: "-1"
        }, i.$attrs, {
          as: i.as,
          "as-child": i.asChild,
          "data-radix-vue-collection-item": "",
          "aria-disabled": i.disabled || void 0,
          "data-disabled": i.disabled ? "" : void 0,
          "data-highlighted": l.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: r,
          onFocus: u[0] || (u[0] = async (d) => {
            await le(), !(d.defaultPrevented || i.disabled) && (l.value = !0);
          }),
          onBlur: u[1] || (u[1] = async (d) => {
            await le(), !d.defaultPrevented && (l.value = !1);
          })
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }));
  }
}), _a = /* @__PURE__ */ w({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), r = wa(), i = lo(), u = I(!1);
    async function d() {
      const c = s.value;
      if (!e.disabled && c) {
        const p = new CustomEvent(au, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", p), await le(), p.defaultPrevented ? u.value = !1 : r.onClose();
      }
    }
    return (c, p) => (b(), _(Jl, k(e, {
      ref: o(l),
      onClick: d,
      onPointerdown: p[0] || (p[0] = () => {
        u.value = !0;
      }),
      onPointerup: p[1] || (p[1] = async (f) => {
        var v;
        await le(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: p[2] || (p[2] = async (f) => {
        const v = o(i).searchRef.value !== "";
        c.disabled || v && f.key === " " || o(Dn).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gd, Ql] = Q(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), ro = /* @__PURE__ */ w({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = gd({
      checked: I(!1)
    });
    return (e, n) => (b(), _(o(Pe), {
      present: e.forceMount || o(Fa)(o(t).checked.value) || o(t).checked.value === !0
    }, {
      default: y(() => [
        Y(o(O), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": o(eo)(o(t).checked.value)
        }, {
          default: y(() => [
            C(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), io = /* @__PURE__ */ w({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: !1 },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "checked", n);
    return Ql({ checked: l }), (s, r) => (b(), _(_a, k({ role: "menuitemcheckbox" }, e, {
      "aria-checked": o(Fa)(o(l)) ? "mixed" : o(l),
      "data-state": o(eo)(o(l)),
      onSelect: r[0] || (r[0] = async (i) => {
        n("select", i), o(Fa)(o(l)) ? l.value = !0 : l.value = !o(l);
      })
    }), {
      default: y(() => [
        C(s.$slots, "default", { checked: o(l) })
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), bd = /* @__PURE__ */ w({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = xe(e, n), s = Rt(), { forwardRef: r, currentElement: i } = T();
    return ya(i), (u, d) => (b(), _(so, k(o(l), {
      ref: o(r),
      "trap-focus": o(s).open.value,
      "disable-outside-pointer-events": o(s).open.value,
      "disable-outside-scroll": !0,
      onDismiss: d[0] || (d[0] = (c) => o(s).onOpenChange(!1)),
      onFocusOutside: d[1] || (d[1] = ie((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Cd = /* @__PURE__ */ w({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = Rt();
    return (r, i) => (b(), _(so, k(o(l), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => o(s).onOpenChange(!1))
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), uo = /* @__PURE__ */ w({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = Rt(), r = wa();
    return (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(s).open.value
    }, {
      default: y(() => [
        o(r).modal.value ? (b(), _(bd, K(k({ key: 0 }, { ...i.$attrs, ...o(l) })), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), _(Cd, K(k({ key: 1 }, { ...i.$attrs, ...o(l) })), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Qa = /* @__PURE__ */ w({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), k({ role: "group" }, t), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), co = /* @__PURE__ */ w({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), po = /* @__PURE__ */ w({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [wd, _d] = Q("MenuRadioGroup"), fo = /* @__PURE__ */ w({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t);
    return _d({
      modelValue: l,
      onValueChange: (s) => {
        l.value = s;
      }
    }), (s, r) => (b(), _(Qa, K(j(e)), {
      default: y(() => [
        C(s.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 16));
  }
}), vo = /* @__PURE__ */ w({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { value: l } = ne(e), s = wd(), r = B(
      () => s.modelValue.value === (l == null ? void 0 : l.value)
    );
    return Ql({ checked: r }), (i, u) => (b(), _(_a, k({ role: "menuitemradio" }, e, {
      "aria-checked": r.value,
      "data-state": o(eo)(r.value),
      onSelect: u[0] || (u[0] = async (d) => {
        n("select", d), o(s).onValueChange(o(l));
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), mo = /* @__PURE__ */ w({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), k(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [es, xd] = Q("MenuSub"), ho = /* @__PURE__ */ w({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      defaultValue: !1,
      passive: e.open === void 0
    }), s = Rt(), r = I(), i = I();
    return ye((u) => {
      (s == null ? void 0 : s.open.value) === !1 && (l.value = !1), u(() => l.value = !1);
    }), Yl({
      open: l,
      onOpenChange: (u) => {
        l.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), xd({
      triggerId: "",
      contentId: "",
      trigger: r,
      onTriggerChange: (u) => {
        r.value = u;
      }
    }), (u, d) => (b(), _(o(It), null, {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), yo = /* @__PURE__ */ w({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t), s = Rt(), r = wa(), i = es(), { forwardRef: u, currentElement: d } = T();
    return i.contentId || (i.contentId = me(void 0, "radix-vue-menu-sub-content")), (c, p) => (b(), _(o(Pe), {
      present: c.forceMount || o(s).open.value
    }, {
      default: y(() => [
        Y(so, k(o(l), {
          id: o(i).contentId,
          ref: o(u),
          "aria-labelledby": o(i).triggerId,
          align: "start",
          side: o(r).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": !1,
          "disable-outside-scroll": !1,
          "trap-focus": !1,
          onOpenAutoFocus: p[0] || (p[0] = ie((f) => {
            var v;
            o(r).isUsingKeyboardRef.value && ((v = o(d)) == null || v.focus());
          }, ["prevent"])),
          onCloseAutoFocus: p[1] || (p[1] = ie(() => {
          }, ["prevent"])),
          onFocusOutside: p[2] || (p[2] = (f) => {
            f.defaultPrevented || f.target !== o(i).trigger.value && o(s).onOpenChange(!1);
          }),
          onEscapeKeyDown: p[3] || (p[3] = (f) => {
            o(r).onClose(), f.preventDefault();
          }),
          onKeydown: p[4] || (p[4] = (f) => {
            var m, S;
            const v = (m = f.currentTarget) == null ? void 0 : m.contains(f.target), g = o(su)[o(r).dir.value].includes(f.key);
            v && g && (o(s).onOpenChange(!1), (S = o(i).trigger.value) == null || S.focus(), f.preventDefault());
          })
        }), {
          default: y(() => [
            C(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), go = /* @__PURE__ */ w({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Rt(), n = wa(), l = es(), s = lo(), r = I(null);
    l.triggerId || (l.triggerId = me(void 0, "radix-vue-menu-sub-trigger"));
    function i() {
      r.value && window.clearTimeout(r.value), r.value = null;
    }
    Ie(() => {
      i();
    });
    function u(p) {
      !ua(p) || s.onItemEnter(p) || !t.disabled && !e.open.value && !r.value && (s.onPointerGraceIntentChange(null), r.value = window.setTimeout(() => {
        e.onOpenChange(!0), i();
      }, 100));
    }
    async function d(p) {
      var v, g;
      if (!ua(p))
        return;
      i();
      const f = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (f != null && f.width) {
        const m = (g = e.content.value) == null ? void 0 : g.dataset.side, S = m === "right", x = S ? -5 : 5, D = f[S ? "left" : "right"], h = f[S ? "right" : "left"];
        s.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: p.clientX + x, y: p.clientY },
            { x: D, y: f.top },
            { x: h, y: f.top },
            { x: h, y: f.bottom },
            { x: D, y: f.bottom }
          ],
          side: m
        }), window.clearTimeout(s.pointerGraceTimerRef.value), s.pointerGraceTimerRef.value = window.setTimeout(
          () => s.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (s.onTriggerLeave(p))
          return;
        s.onPointerGraceIntentChange(null);
      }
    }
    async function c(p) {
      var v;
      const f = s.searchRef.value !== "";
      t.disabled || f && p.key === " " || lu[n.dir.value].includes(p.key) && (e.onOpenChange(!0), await le(), (v = e.content.value) == null || v.focus(), p.preventDefault());
    }
    return (p, f) => (b(), _(Za, { "as-child": "" }, {
      default: y(() => [
        Y(Jl, k(t, {
          id: o(l).triggerId,
          ref: (v) => {
            var g;
            (g = o(l)) == null || g.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(l).contentId,
          "data-state": o(Qn)(o(e).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), o(e).open.value || o(e).onOpenChange(!0));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: c
        }), {
          default: y(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [ts, Sd] = Q("ContextMenuRoot"), Gv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, modal: s } = ne(e);
    T();
    const r = be(l), i = I(!1);
    return Sd({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      dir: r,
      modal: s
    }), te(i, (u) => {
      n("update:open", u);
    }), (u, d) => (b(), _(o(oo), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (c) => i.value = c),
      dir: o(r),
      modal: o(s)
    }, {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function Uo(a) {
  return a.pointerType !== "mouse";
}
const qv = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), { forwardRef: n } = T(), l = ts(), s = I({ x: 0, y: 0 }), r = B(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: s.value.x,
        right: s.value.x,
        top: s.value.y,
        bottom: s.value.y,
        ...s.value
      })
    })), i = I(0);
    function u() {
      window.clearTimeout(i.value);
    }
    function d(v) {
      s.value = { x: v.clientX, y: v.clientY }, l.onOpenChange(!0);
    }
    async function c(v) {
      e.value || (await le(), v.defaultPrevented || (u(), d(v), v.preventDefault()));
    }
    async function p(v) {
      e.value || (await le(), Uo(v) && !v.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v), 700)));
    }
    async function f(v) {
      e.value || (await le(), Uo(v) && !v.defaultPrevented && u());
    }
    return (v, g) => (b(), ce(_e, null, [
      Y(o(Za), {
        as: "template",
        element: r.value
      }, null, 8, ["element"]),
      Y(o(O), k({
        ref: o(n),
        as: v.as,
        "as-child": v.asChild,
        "data-state": o(l).open.value ? "open" : "closed",
        "data-disabled": o(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v.$attrs, {
        onContextmenu: c,
        onPointerdown: p,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: y(() => [
          C(v.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
}), Yv = /* @__PURE__ */ w({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(po), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xv = /* @__PURE__ */ w({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    T();
    const s = ts(), r = I(!1);
    return (i, u) => (b(), _(o(uo), k(o(l), {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && r.value && d.preventDefault(), r.value = !1;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        !d.defaultPrevented && !o(s).modal.value && (r.value = !0);
      })
    }), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zv = /* @__PURE__ */ w({
  __name: "ContextMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(no), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jv = /* @__PURE__ */ w({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(_a), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qv = /* @__PURE__ */ w({
  __name: "ContextMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(Qa), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), em = /* @__PURE__ */ w({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(mo), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tm = /* @__PURE__ */ w({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(io), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), am = /* @__PURE__ */ w({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(ro), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nm = /* @__PURE__ */ w({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(co), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), om = /* @__PURE__ */ w({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(fo), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lm = /* @__PURE__ */ w({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(vo), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sm = /* @__PURE__ */ w({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (s, r) => (b(), _(o(ho), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), rm = /* @__PURE__ */ w({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return T(), (s, r) => (b(), _(o(yo), k(o(l), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), im = /* @__PURE__ */ w({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(go), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ed = ["hour", "minute", "second"];
function Ft(a) {
  const { formatter: t } = a, e = Kn.map((n) => [n, a.value[n]]);
  if ("hour" in a.value) {
    const n = yl.map((s) => s === "dayPeriod" ? [s, t.dayPeriod(Le(a.value))] : [s, a.value[s]]), l = [...e, ...n];
    return Object.fromEntries(l);
  }
  return Object.fromEntries(e);
}
function as(a) {
  const t = gl.map((e) => e === "dayPeriod" ? [e, "AM"] : [e, null]).filter(([e]) => e === "literal" || e === null ? !1 : a === "day" ? !Ed.includes(e) : !0);
  return Object.fromEntries(t);
}
function Pd(a) {
  const { segmentValues: t, formatter: e, locale: n } = a;
  function l(r) {
    if ("hour" in t) {
      const i = t[r];
      return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : e.part(a.dateRef.set({ [r]: i }), r, {
        hourCycle: a.hourCycle === 24 ? "h24" : void 0
      }) : yn(r, "", n.value);
    } else {
      if (Wr(r)) {
        const i = t[r];
        return i !== null ? r === "day" && t.month !== null ? e.part(a.dateRef.set({ [r]: i, month: t.month }), r) : e.part(a.dateRef.set({ [r]: i }), r) : yn(r, "", n.value);
      }
      return "";
    }
  }
  return Object.keys(t).reduce((r, i) => {
    if (!bl(i))
      return r;
    if ("hour" in t && i === "dayPeriod") {
      const u = t[i];
      u !== null ? r[i] = u : r[i] = yn(i, "AM", n.value);
    } else
      r[i] = l(i);
    return r;
  }, {});
}
function Dd(a) {
  const { granularity: t, formatter: e, contentObj: n, hideTimeZone: l, hourCycle: s } = a;
  return e.toParts(a.dateRef, jr(t, s)).map((u) => ["literal", "timeZoneName", null].includes(u.type) || !bl(u.type) ? {
    part: u.type,
    value: u.value
  } : {
    part: u.type,
    value: n[u.type]
  }).filter((u) => !(u.part === null || u.value === null || u.part === "timeZoneName" && (!ml(a.dateRef) || l)));
}
function In(a) {
  const t = Pd(a), e = Dd({
    contentObj: t,
    ...a
  });
  return {
    obj: t,
    arr: e
  };
}
function qe(a) {
  const t = et();
  return a === t.ARROW_RIGHT || a === t.ARROW_LEFT;
}
function _t(a) {
  return !Number.isNaN(Number.parseInt(a));
}
function st(a) {
  const t = et();
  return !!([
    t.ENTER,
    t.ARROW_UP,
    t.ARROW_DOWN,
    t.ARROW_LEFT,
    t.ARROW_RIGHT,
    t.BACKSPACE,
    t.SPACE,
    "a",
    "A",
    "p",
    "P"
  ].includes(a) || _t(a));
}
function Na(a) {
  return Array.from(a.querySelectorAll("[data-radix-vue-date-field-segment]")).filter((t) => t.getAttribute("data-radix-vue-date-field-segment") !== "literal");
}
const $d = ["id", "value", "name", "disabled", "required"], [Bd, Id] = Q("DateFieldRoot"), Td = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, granularity: d, defaultValue: c, dir: p } = ne(n), f = Un(n.locale), v = be(p), { primitiveElement: g, currentElement: m } = Ae(), S = I(/* @__PURE__ */ new Set());
    se(() => {
      Na(m.value).forEach((z) => S.value.add(z));
    });
    const x = ae(n, "modelValue", l, {
      defaultValue: c.value,
      passive: n.modelValue === void 0
    }), D = jt({
      defaultPlaceholder: n.placeholder,
      granularity: d.value,
      defaultValue: x.value
    }), h = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? D.copy(),
      passive: n.placeholder === void 0
    }), E = B(() => n.granularity ? ra(h.value) ? n.granularity : "day" : ra(h.value) ? "minute" : "day"), P = B(() => {
      var z;
      return x.value ? !!((z = u.value) != null && z.call(u, x.value) || n.minValue && ke(x.value, n.minValue) || n.maxValue && ke(n.maxValue, x.value)) : !1;
    }), $ = as(E.value), R = I(x.value ? { ...Ft({ value: x.value, formatter: f }) } : { ...$ }), M = B(() => In({
      granularity: E.value,
      dateRef: h.value,
      formatter: f,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: R.value,
      locale: s
    })), V = B(() => M.value.arr), A = B(() => V.value.filter(({ part: z }) => z !== "literal"));
    te(s, (z) => {
      f.getLocale() !== z && (f.setLocale(z), le(() => {
        S.value.clear(), Na(m.value).forEach((X) => S.value.add(X));
      }));
    }), te(x, (z) => {
      z !== void 0 && (!Ee(h.value, z) || h.value.compare(z) !== 0) && (h.value = z.copy());
    }), te([x, s], ([z]) => {
      z !== void 0 ? R.value = { ...Ft({ value: z, formatter: f }) } : R.value = { ...$ };
    });
    const L = I(null), U = B(() => Array.from(S.value).findIndex((z) => {
      var X;
      return z.getAttribute("data-radix-vue-date-field-segment") === ((X = L.value) == null ? void 0 : X.getAttribute("data-radix-vue-date-field-segment"));
    })), H = B(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z < 0 ? U.value < 0 : U.value > S.value.size - 1) ? null : Array.from(S.value)[U.value + z];
    }), J = B(() => {
      const z = v.value === "rtl" ? -1 : 1;
      return (z > 0 ? U.value < 0 : U.value > S.value.size - 1) ? null : Array.from(S.value)[U.value - z];
    }), N = et();
    function F(z) {
      var X, G;
      qe(z.key) && (z.key === N.ARROW_LEFT && ((X = J.value) == null || X.focus()), z.key === N.ARROW_RIGHT && ((G = H.value) == null || G.focus()));
    }
    function W(z) {
      L.value = z;
    }
    return Id({
      isDateUnavailable: u.value,
      locale: s,
      modelValue: x,
      placeholder: h,
      disabled: r,
      formatter: f,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: R,
      isInvalid: P,
      segmentContents: A,
      elements: S,
      setFocusedElement: W,
      focusNext() {
        var z;
        (z = H.value) == null || z.focus();
      }
    }), t({
      /** Helper to set the focused element inside the DateField */
      setFocusedElement: W
    }), (z, X) => (b(), ce(_e, null, [
      Y(o(O), k(z.$attrs, {
        ref_key: "primitiveElement",
        ref: g,
        role: "group",
        "aria-disabled": o(r) ? !0 : void 0,
        "data-disabled": o(r) ? "" : void 0,
        "data-readonly": o(i) ? "" : void 0,
        "data-invalid": P.value ? "" : void 0,
        dir: o(v),
        onKeydown: re(F, ["left", "right"])
      }), {
        default: y(() => [
          C(z.$slots, "default", {
            modelValue: o(x),
            segments: V.value,
            isInvalid: P.value
          })
        ]),
        _: 3
      }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
      Ue("input", {
        id: z.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(x) ? o(x).toString() : "",
        name: z.name,
        disabled: o(r),
        required: z.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: X[0] || (X[0] = (G) => {
          var Z, ee;
          return (ee = (Z = Array.from(S.value)) == null ? void 0 : Z[0]) == null ? void 0 : ee.focus();
        })
      }, null, 40, $d)
    ], 64));
  }
});
function kt(a) {
  return {
    role: "spinbutton",
    contenteditable: !0,
    tabindex: a.disabled ? void 0 : 0,
    spellcheck: !1,
    inputmode: "numeric",
    autocorrect: "off",
    enterkeyhint: "next",
    style: "caret-color: transparent;"
  };
}
function Rd(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.day === null, l = t.day ? e.set({ day: t.day }) : e, s = l.day, r = 1, i = Et(l), u = n ? "Empty" : `${s}`;
  return {
    ...kt(a),
    "aria-label": "day,",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Ad(a) {
  const { segmentValues: t, placeholder: e, formatter: n } = a, l = t.month === null, s = t.month ? e.set({ month: t.month }) : e, r = s.month, i = 1, u = 12, d = l ? "Empty" : `${r} - ${n.fullMonth(Le(s))}`;
  return {
    ...kt(a),
    "aria-label": "month, ",
    contenteditable: !0,
    "aria-valuemin": i,
    "aria-valuemax": u,
    "aria-valuenow": r,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Od(a) {
  const { segmentValues: t, placeholder: e } = a, n = t.year === null, l = t.year ? e.set({ year: t.year }) : e, s = 1, r = 9999, i = l.year, u = n ? "Empty" : `${i}`;
  return {
    ...kt(a),
    "aria-label": "year, ",
    "aria-valuemin": s,
    "aria-valuemax": r,
    "aria-valuenow": i,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function kd(a) {
  const { segmentValues: t, hourCycle: e, placeholder: n } = a;
  if (!("hour" in t) || !("hour" in n))
    return {};
  const l = t.hour === null, s = t.hour ? n.set({ hour: t.hour }) : n, r = e === 12 ? 1 : 0, i = e === 12 ? 12 : 23, u = s.hour, d = l ? "Empty" : `${u} ${t.dayPeriod ?? ""}`;
  return {
    ...kt(a),
    "aria-label": "hour, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": u,
    "aria-valuetext": d,
    "data-placeholder": l ? "" : void 0
  };
}
function Md(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("minute" in t) || !("minute" in e))
    return {};
  const n = t.minute === null, s = (t.minute ? e.set({ minute: t.minute }) : e).minute, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...kt(a),
    "aria-label": "minute, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Vd(a) {
  const { segmentValues: t, placeholder: e } = a;
  if (!("second" in t) || !("second" in e))
    return {};
  const n = t.second === null, s = (t.second ? e.set({ second: t.second }) : e).second, r = 0, i = 59, u = n ? "Empty" : `${s}`;
  return {
    ...kt(a),
    "aria-label": "second, ",
    "aria-valuemin": r,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-valuetext": u,
    "data-placeholder": n ? "" : void 0
  };
}
function Fd(a) {
  const { segmentValues: t } = a;
  if (!("dayPeriod" in t))
    return {};
  const e = 0, n = 12, l = t.hour ? t.hour > 12 ? t.hour - 12 : t.hour : 0, s = t.dayPeriod ?? "AM";
  return {
    ...kt(a),
    inputmode: "text",
    "aria-label": "AM/PM",
    "aria-valuemin": e,
    "aria-valuemax": n,
    "aria-valuenow": l,
    "aria-valuetext": s
  };
}
function Ld(a) {
  return {
    "aria-hidden": !0,
    "data-segment": "literal"
  };
}
function Nd(a) {
  return {
    role: "textbox",
    "aria-label": "timezone, ",
    "data-readonly": !0,
    "data-segment": "timeZoneName",
    tabindex: a.disabled ? void 0 : 0,
    style: "caret-color: transparent;"
  };
}
const zd = {
  day: {
    attrs: Rd
  },
  month: {
    attrs: Ad
  },
  year: {
    attrs: Od
  },
  hour: {
    attrs: kd
  },
  minute: {
    attrs: Md
  },
  second: {
    attrs: Vd
  },
  dayPeriod: {
    attrs: Fd
  },
  literal: {
    attrs: Ld
  },
  timeZoneName: {
    attrs: Nd
  }
};
function ns(a) {
  const t = et();
  function e({ e: h, part: E, dateRef: P, prevValue: $ }) {
    const R = h.key === t.ARROW_UP ? 1 : -1, M = 0, V = 59;
    if ($ === null)
      return R > 0 ? M : V;
    const A = [E, R];
    return P.set({ [E]: $ }).cycle(...A)[E];
  }
  function n(h) {
    if (a.hasLeftFocus.value = !1, h === null)
      return h;
    const E = h.toString();
    return E.length === 1 ? null : Number.parseInt(E.slice(0, -1));
  }
  function l({ e: h, part: E, dateRef: P, prevValue: $, hourCycle: R }) {
    const M = h.key === t.ARROW_UP ? 1 : -1;
    if ($ === null)
      return P[E];
    if (E === "hour" && "hour" in P) {
      const A = [E, M, { hourCycle: R }];
      return P.set({ [E]: $ }).cycle(...A)[E];
    }
    const V = [E, M];
    return E === "day" && a.segmentValues.value.month !== null ? P.set({ [E]: $, month: a.segmentValues.value.month }).cycle(...V)[E] : P.set({ [E]: $ }).cycle(...V)[E];
  }
  function s(h, E, P) {
    let $ = !1;
    const R = Math.floor(h / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, P = null), P === null)
      return E === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: $ }) : ((a.lastKeyZero.value || E > R) && ($ = !0), a.lastKeyZero.value = !1, { value: E, moveToNext: $ });
    const M = P.toString().length, V = Number.parseInt(P.toString() + E.toString());
    return M === 2 || V > h ? ((E > R || V > h) && ($ = !0), { value: E, moveToNext: $ }) : ($ = !0, { value: V, moveToNext: $ });
  }
  function r(h, E) {
    let $ = !1;
    const R = Math.floor(59 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return h === 0 ? (a.lastKeyZero.value = !0, { value: 0, moveToNext: $ }) : ((a.lastKeyZero.value || h > R) && ($ = !0), a.lastKeyZero.value = !1, { value: h, moveToNext: $ });
    const M = E.toString().length, V = Number.parseInt(E.toString() + h.toString());
    return M === 2 || V > 59 ? (h > R && ($ = !0), { value: h, moveToNext: $ }) : ($ = !0, { value: V, moveToNext: $ });
  }
  function i(h, E) {
    let $ = !1;
    const R = Math.floor(24 / 10);
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return h === 0 ? (a.lastKeyZero.value = !0, { value: null, moveToNext: $ }) : ((a.lastKeyZero.value || h > R) && ($ = !0), a.lastKeyZero.value = !1, { value: h, moveToNext: $ });
    const M = E.toString().length, V = Number.parseInt(E.toString() + h.toString());
    return M === 2 || V > 24 ? (h > R && ($ = !0), { value: h, moveToNext: $ }) : ($ = !0, { value: V, moveToNext: $ });
  }
  function u(h, E) {
    let P = !1;
    if (a.hasLeftFocus.value && (a.hasLeftFocus.value = !1, E = null), E === null)
      return { value: h === 0 ? 1 : h, moveToNext: P };
    const $ = E.toString() + h.toString();
    return $.length > 4 ? { value: h === 0 ? 1 : h, moveToNext: P } : ($.length === 4 && (P = !0), { value: Number.parseInt($), moveToNext: P });
  }
  const d = B(() => zd[a.part].attrs({
    disabled: a.disabled.value,
    placeholder: a.placeholder.value,
    hourCycle: a.hourCycle,
    segmentValues: a.segmentValues.value,
    formatter: a.formatter
  }));
  function c(h) {
    if (!st(h.key) || qe(h.key))
      return;
    const E = a.segmentValues.value.day;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.day = l({ e: h, part: "day", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (_t(h.key)) {
      const P = Number.parseInt(h.key), $ = a.segmentValues.value.month, R = $ ? Et(a.placeholder.value.set({ month: $ })) : Et(a.placeholder.value), { value: M, moveToNext: V } = s(R, P, E);
      a.segmentValues.value.day = M, V && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.day = n(E));
  }
  function p(h) {
    if (!st(h.key) || qe(h.key))
      return;
    const E = a.segmentValues.value.month;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.month = l({ e: h, part: "month", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (_t(h.key)) {
      const P = Number.parseInt(h.key), { value: $, moveToNext: R } = s(12, P, E);
      a.segmentValues.value.month = $, R && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.month = n(E));
  }
  function f(h) {
    if (!st(h.key) || qe(h.key))
      return;
    const E = a.segmentValues.value.year;
    if (h.key === t.ARROW_DOWN || h.key === t.ARROW_UP) {
      a.segmentValues.value.year = l({ e: h, part: "year", dateRef: a.placeholder.value, prevValue: E });
      return;
    }
    if (_t(h.key)) {
      const P = Number.parseInt(h.key), { value: $, moveToNext: R } = u(P, E);
      a.segmentValues.value.year = $, R && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.year = n(E));
  }
  function v(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || qe(h.key) || !("hour" in E) || !("hour" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.hour, $ = a.hourCycle;
    if (h.key === t.ARROW_UP || h.key === t.ARROW_DOWN) {
      a.segmentValues.value.hour = l({ e: h, part: "hour", dateRef: a.placeholder.value, prevValue: P, hourCycle: $ }), "dayPeriod" in a.segmentValues.value && (a.segmentValues.value.hour < 12 ? a.segmentValues.value.dayPeriod = "AM" : a.segmentValues.value.hour && (a.segmentValues.value.dayPeriod = "PM"));
      return;
    }
    if (_t(h.key)) {
      const R = Number.parseInt(h.key), { value: M, moveToNext: V } = i(R, P);
      "dayPeriod" in a.segmentValues.value && M && M > 12 ? a.segmentValues.value.dayPeriod = "PM" : "dayPeriod" in a.segmentValues.value && M && (a.segmentValues.value.dayPeriod = "AM"), a.segmentValues.value.hour = M, V && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.hour = n(P));
  }
  function g(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || qe(h.key) || !("minute" in E) || !("minute" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.minute;
    if (a.segmentValues.value.minute = e({ e: h, part: "minute", dateRef: a.placeholder.value, prevValue: P }), _t(h.key)) {
      const $ = Number.parseInt(h.key), { value: R, moveToNext: M } = r($, P);
      a.segmentValues.value.minute = R, M && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.minute = n(P));
  }
  function m(h) {
    const E = a.placeholder.value;
    if (!st(h.key) || qe(h.key) || !("second" in E) || !("second" in a.segmentValues.value))
      return;
    const P = a.segmentValues.value.second;
    if (a.segmentValues.value.second = e({ e: h, part: "second", dateRef: a.placeholder.value, prevValue: P }), _t(h.key)) {
      const $ = Number.parseInt(h.key), { value: R, moveToNext: M } = r($, P);
      a.segmentValues.value.second = R, M && a.focusNext();
    }
    h.key === t.BACKSPACE && (a.hasLeftFocus.value = !1, a.segmentValues.value.second = n(P));
  }
  function S(h) {
    if (!((!st(h.key) || qe(h.key)) && h.key !== "a" && h.key !== "p" || !("hour" in a.placeholder.value) || !("dayPeriod" in a.segmentValues.value))) {
      if (h.key === t.ARROW_UP || h.key === t.ARROW_DOWN) {
        if (a.segmentValues.value.dayPeriod === "AM") {
          a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12;
          return;
        }
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      if (["a", "A"].includes(h.key) && a.segmentValues.value.dayPeriod !== "AM") {
        a.segmentValues.value.dayPeriod = "AM", a.segmentValues.value.hour = a.segmentValues.value.hour - 12;
        return;
      }
      ["p", "P"].includes(h.key) && a.segmentValues.value.dayPeriod !== "PM" && (a.segmentValues.value.dayPeriod = "PM", a.segmentValues.value.hour = a.segmentValues.value.hour + 12);
    }
  }
  function x(h) {
    a.disabled.value && h.preventDefault();
  }
  function D(h) {
    const E = a.disabled.value, P = a.readonly.value;
    if (h.key !== t.TAB && h.preventDefault(), E || P)
      return;
    if ({
      day: c,
      month: p,
      year: f,
      hour: v,
      minute: g,
      second: m,
      dayPeriod: S,
      timeZoneName: () => {
      }
    }[a.part](h), !qe(h.key) && h.key !== t.TAB && h.key !== t.SHIFT && st(h.key) && Object.values(a.segmentValues.value).every((R) => R !== null)) {
      const R = { ...a.segmentValues.value };
      let M = a.placeholder.value.copy();
      Object.keys(R).forEach((V) => {
        const A = R[V];
        M = M.set({ [V]: A });
      }), a.modelValue.value = M.copy();
    }
  }
  return {
    handleSegmentClick: x,
    handleSegmentKeydown: D,
    attributes: d
  };
}
const Kd = /* @__PURE__ */ w({
  __name: "DateFieldInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Bd(), n = I(!0), l = I(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ns({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues,
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: e.modelValue
    }), u = B(() => e.disabled.value), d = B(() => e.readonly.value), c = B(() => e.isInvalid.value);
    return (p, f) => (b(), _(o(O), k({
      as: p.as,
      "as-child": p.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Nn(p.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-invalid", "aria-invalid"]));
  }
}), um = /* @__PURE__ */ w({
  __name: "DatePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Ru), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dm = /* @__PURE__ */ w({
  __name: "DatePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Au), K(j(t)), {
      default: y(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          ve($e(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), cm = /* @__PURE__ */ w({
  __name: "DatePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Ou), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pm = /* @__PURE__ */ w({
  __name: "DatePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ku), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fm = /* @__PURE__ */ w({
  __name: "DatePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Mu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vm = /* @__PURE__ */ w({
  __name: "DatePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Vu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mm = /* @__PURE__ */ w({
  __name: "DatePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Fu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hm = /* @__PURE__ */ w({
  __name: "DatePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Lu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ym = /* @__PURE__ */ w({
  __name: "DatePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Nu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gm = /* @__PURE__ */ w({
  __name: "DatePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(zu), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bm = /* @__PURE__ */ w({
  __name: "DatePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Ku), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cm = /* @__PURE__ */ w({
  __name: "DatePickerInput",
  props: {
    part: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Kd), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [bo, Hd] = Q("DatePickerRoot"), wm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DatePickerRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: !1 },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:placeholder", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: S,
      id: x,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: R,
      hourCycle: M,
      defaultValue: V,
      dir: A
    } = ne(e), L = be(A), U = ae(e, "modelValue", n, {
      defaultValue: V.value,
      passive: e.modelValue === void 0
    }), H = B(() => jt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: U.value
    })), J = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? H.value.copy(),
      passive: e.placeholder === void 0
    }), N = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), F = I();
    return Hd({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: U,
      placeholder: J,
      defaultOpen: m,
      modal: S,
      open: N,
      id: x,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: R,
      hourCycle: M,
      dateFieldRef: F,
      dir: L,
      onDateChange(W) {
        !W || !U.value ? U.value = W : !f.value && Te(U.value, W) ? U.value = void 0 : U.value = W.copy();
      },
      onPlaceholderChange(W) {
        Ee(W, J.value) || (J.value = W.copy());
      }
    }), (W, z) => (b(), _(o(ps), {
      open: o(N),
      "onUpdate:open": z[0] || (z[0] = (X) => Xe(N) ? N.value = X : null),
      "default-open": o(m),
      modal: o(S)
    }, {
      default: y(() => [
        C(W.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), _m = /* @__PURE__ */ w({
  __name: "DatePickerCalendar",
  setup(a) {
    const t = bo();
    return (e, n) => (b(), _(o(Tu), k({
      isDateDisabled: o(t).isDateDisabled,
      isDateUnavailable: o(t).isDateUnavailable,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      locale: o(t).locale.value,
      disabled: o(t).disabled.value,
      pagedNavigation: o(t).pagedNavigation.value,
      weekStartsOn: o(t).weekStartsOn.value,
      weekdayFormat: o(t).weekdayFormat.value,
      fixedWeeks: o(t).fixedWeeks.value,
      numberOfMonths: o(t).numberOfMonths.value,
      readonly: o(t).readonly.value,
      preventDeselect: o(t).preventDeselect.value,
      dir: o(t).dir.value
    }, {
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value,
      "initial-focus": "",
      multiple: !1,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && o(t).modelValue.value && o(Ee)(l, o(t).modelValue.value) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        C(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), xm = /* @__PURE__ */ w({
  __name: "DatePickerField",
  setup(a) {
    const t = bo();
    return (e, n) => (b(), _(o(Td), k({
      ref: o(t).dateFieldRef,
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value
    }, {
      id: o(t).id.value,
      name: o(t).name.value,
      disabled: o(t).disabled.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      readonly: o(t).readonly.value,
      hourCycle: o(t).hourCycle.value,
      granularity: o(t).granularity.value,
      hideTimeZone: o(t).hideTimeZone.value,
      locale: o(t).locale.value,
      isDateUnavailable: o(t).isDateUnavailable,
      required: o(t).required.value,
      dir: o(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l && o(t).modelValue.value && o(Ee)(o(t).modelValue.value, l) && l.compare(o(t).modelValue.value) === 0 || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(o(t).placeholder.value, l) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Sm = /* @__PURE__ */ w({
  __name: "DatePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(bs), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Em = /* @__PURE__ */ w({
  __name: "DatePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ys), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pm = /* @__PURE__ */ w({
  __name: "DatePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(gs), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dm = /* @__PURE__ */ w({
  __name: "DatePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = bo();
    return (n, l) => (b(), _(o(fs), k({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), $m = /* @__PURE__ */ w({
  __name: "DatePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return (s, r) => (b(), _(o(vs), null, {
      default: y(() => [
        Y(o(hs), K(j({ ...o(l), ...s.$attrs })), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Bm = /* @__PURE__ */ w({
  __name: "DateRangePickerHeader",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ap), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Im = /* @__PURE__ */ w({
  __name: "DateRangePickerHeading",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(np), K(j(t)), {
      default: y(({ headingValue: l }) => [
        C(e.$slots, "default", { headingValue: l }, () => [
          ve($e(l), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), Tm = /* @__PURE__ */ w({
  __name: "DateRangePickerGrid",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(op), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rm = /* @__PURE__ */ w({
  __name: "DateRangePickerCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(lp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Am = /* @__PURE__ */ w({
  __name: "DateRangePickerHeadCell",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(sp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Om = /* @__PURE__ */ w({
  __name: "DateRangePickerNext",
  props: {
    step: {},
    nextPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(rp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), km = /* @__PURE__ */ w({
  __name: "DateRangePickerPrev",
  props: {
    step: {},
    prevPage: { type: Function },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ip), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridHead",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(up), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridBody",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(dp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fm = /* @__PURE__ */ w({
  __name: "DateRangePickerGridRow",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(cp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lm = /* @__PURE__ */ w({
  __name: "DateRangePickerCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(pp), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nm = /* @__PURE__ */ w({
  __name: "DateRangePickerInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(Yd), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Co, Wd] = Q("DateRangePickerRoot"), zm = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateRangePickerRoot",
  props: {
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {},
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    fixedWeeks: { type: Boolean, default: !1 },
    numberOfMonths: { default: 1 },
    preventDeselect: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      locale: l,
      disabled: s,
      readonly: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateDisabled: v,
      isDateUnavailable: g,
      defaultOpen: m,
      modal: S,
      id: x,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: R,
      hourCycle: M,
      dir: V
    } = ne(e), A = be(V), L = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), U = jt({
      defaultPlaceholder: e.placeholder,
      granularity: e.granularity,
      defaultValue: L.value.start
    }), H = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    }), J = ae(e, "open", n, {
      defaultValue: m.value,
      passive: e.open === void 0
    }), N = I();
    return Wd({
      isDateUnavailable: g.value,
      isDateDisabled: v.value,
      locale: l,
      disabled: s,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: r,
      preventDeselect: f,
      modelValue: L,
      placeholder: H,
      defaultOpen: m,
      modal: S,
      open: J,
      id: x,
      name: D,
      required: h,
      minValue: E,
      maxValue: P,
      granularity: $,
      hideTimeZone: R,
      hourCycle: M,
      dateFieldRef: N,
      dir: A,
      onStartValueChange(F) {
        n("update:startValue", F);
      },
      onDateChange(F) {
        var W, z;
        L.value = { start: (W = F.start) == null ? void 0 : W.copy(), end: (z = F.end) == null ? void 0 : z.copy() };
      },
      onPlaceholderChange(F) {
        H.value = F.copy();
      }
    }), (F, W) => (b(), _(o(ps), {
      open: o(J),
      "onUpdate:open": W[0] || (W[0] = (z) => Xe(J) ? J.value = z : null),
      "default-open": o(m),
      modal: o(S)
    }, {
      default: y(() => [
        C(F.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "default-open", "modal"]));
  }
}), Km = /* @__PURE__ */ w({
  __name: "DateRangePickerCalendar",
  setup(a) {
    const t = Co();
    return (e, n) => (b(), _(o(tp), k({
      isDateDisabled: o(t).isDateDisabled,
      isDateUnavailable: o(t).isDateUnavailable,
      locale: o(t).locale.value,
      disabled: o(t).disabled.value,
      pagedNavigation: o(t).pagedNavigation.value,
      weekStartsOn: o(t).weekStartsOn.value,
      weekdayFormat: o(t).weekdayFormat.value,
      fixedWeeks: o(t).fixedWeeks.value,
      numberOfMonths: o(t).numberOfMonths.value,
      readonly: o(t).readonly.value,
      preventDeselect: o(t).preventDeselect.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      dir: o(t).dir.value
    }, {
      "initial-focus": "",
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value,
      "onUpdate:startValue": n[0] || (n[0] = (l) => {
        o(t).onStartValueChange(l);
      }),
      "onUpdate:modelValue": n[1] || (n[1] = (l) => {
        l.start && o(t).modelValue.value.start && l.end && o(t).modelValue.value.end && o(Ee)(l.start, o(t).modelValue.value.start) && o(Ee)(l.end, o(t).modelValue.value.end) || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[2] || (n[2] = (l) => {
        o(Ee)(l, o(t).placeholder.value) || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ weekDays: l, grid: s, date: r, weekStartsOn: i, locale: u, fixedWeeks: d }) => [
        C(e.$slots, "default", {
          date: r,
          grid: s,
          weekDays: l,
          weekStartsOn: i,
          locale: u,
          fixedWeeks: d
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Hm = /* @__PURE__ */ w({
  __name: "DateRangePickerField",
  setup(a) {
    const t = Co();
    return (e, n) => (b(), _(o(qd), k({
      ref: o(t).dateFieldRef,
      "model-value": o(t).modelValue.value,
      placeholder: o(t).placeholder.value
    }, {
      id: o(t).id.value,
      name: o(t).name.value,
      disabled: o(t).disabled.value,
      minValue: o(t).minValue.value,
      maxValue: o(t).maxValue.value,
      readonly: o(t).readonly.value,
      hourCycle: o(t).hourCycle.value,
      granularity: o(t).granularity.value,
      hideTimeZone: o(t).hideTimeZone.value,
      locale: o(t).locale.value,
      isDateUnavailable: o(t).isDateUnavailable,
      required: o(t).required.value,
      dir: o(t).dir.value
    }, {
      "onUpdate:modelValue": n[0] || (n[0] = (l) => {
        l.start && o(t).modelValue.value.start && l.end && o(t).modelValue.value.end && l.start.compare(o(t).modelValue.value.start) === 0 && l.end.compare(o(t).modelValue.value.end) === 0 || o(t).onDateChange(l);
      }),
      "onUpdate:placeholder": n[1] || (n[1] = (l) => {
        o(Ee)(l, o(t).placeholder.value) && l.compare(o(t).placeholder.value) === 0 || o(t).onPlaceholderChange(l);
      })
    }), {
      default: y(({ segments: l, modelValue: s }) => [
        C(e.$slots, "default", {
          segments: l,
          modelValue: s
        })
      ]),
      _: 3
    }, 16, ["model-value", "placeholder"]));
  }
}), Wm = /* @__PURE__ */ w({
  __name: "DateRangePickerAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(bs), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jm = /* @__PURE__ */ w({
  __name: "DateRangePickerArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ys), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Um = /* @__PURE__ */ w({
  __name: "DateRangePickerClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(gs), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gm = /* @__PURE__ */ w({
  __name: "DateRangePickerTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Co();
    return (n, l) => (b(), _(o(fs), k({ "data-radix-vue-date-field-segment": "trigger" }, t, {
      disabled: o(e).disabled.value,
      onFocusin: l[0] || (l[0] = (s) => {
        var r;
        (r = o(e).dateFieldRef.value) == null || r.setFocusedElement(s.target);
      })
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["disabled"]));
  }
}), qm = /* @__PURE__ */ w({
  __name: "DateRangePickerContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return (s, r) => (b(), _(o(vs), null, {
      default: y(() => [
        Y(o(hs), K(j({ ...o(l), ...s.$attrs })), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), jd = ["id", "value", "name", "disabled", "required"], [Ud, Gd] = Q("DateRangeFieldRoot"), qd = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "DateRangeFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    defaultPlaceholder: {},
    placeholder: { default: void 0 },
    modelValue: {},
    hourCycle: {},
    granularity: {},
    hideTimeZone: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    isDateUnavailable: { type: Function, default: void 0 },
    name: {},
    required: { type: Boolean },
    id: {},
    dir: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:placeholder"],
  setup(a, { expose: t, emit: e }) {
    var ee, fe;
    const n = a, l = e, { locale: s, disabled: r, readonly: i, isDateUnavailable: u, dir: d } = ne(n), c = Un(n.locale), { primitiveElement: p, currentElement: f } = Ae(), v = I(/* @__PURE__ */ new Set()), g = be(d);
    se(() => {
      Na(f.value).forEach((q) => v.value.add(q));
    });
    const m = ae(n, "modelValue", l, {
      defaultValue: n.defaultValue ?? { start: void 0, end: void 0 },
      passive: n.modelValue === void 0
    }), S = jt({
      defaultPlaceholder: n.placeholder,
      granularity: n.granularity,
      defaultValue: m.value.start
    }), x = ae(n, "placeholder", l, {
      defaultValue: n.defaultPlaceholder ?? S.copy(),
      passive: n.placeholder === void 0
    }), D = B(() => n.granularity ? ra(x.value) ? n.granularity : "day" : ra(x.value) ? "minute" : "day"), h = B(() => {
      var q;
      return m.value.start ? !!((q = u.value) != null && q.call(u, m.value.start) || n.minValue && ke(m.value.start, n.minValue) || n.maxValue && ke(n.maxValue, m.value.start)) : !1;
    }), E = B(() => {
      var q;
      return m.value.end ? !!((q = u.value) != null && q.call(u, m.value.end) || n.minValue && ke(m.value.end, n.minValue) || n.maxValue && ke(n.maxValue, m.value.end)) : !1;
    }), P = B(() => h.value || E.value ? !0 : !m.value.start || !m.value.end ? !1 : !ke(m.value.start, m.value.end) || u.value !== void 0 && !hl(
      m.value.start,
      m.value.end,
      u.value,
      void 0
    )), $ = as(D.value), R = I(m.value.start ? { ...Ft({ value: m.value.start, formatter: c }) } : { ...$ }), M = I(m.value.end ? { ...Ft({ value: m.value.end, formatter: c }) } : { ...$ }), V = B(() => In({
      granularity: D.value,
      dateRef: x.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: R.value,
      locale: s
    })), A = B(() => In({
      granularity: D.value,
      dateRef: x.value,
      formatter: c,
      hideTimeZone: n.hideTimeZone,
      hourCycle: n.hourCycle,
      segmentValues: M.value,
      locale: s
    })), L = B(() => ({
      start: V.value.arr,
      end: A.value.arr
    })), U = B(() => ({ start: L.value.start.filter(({ part: q }) => q !== "literal"), end: L.value.end.filter(({ part: q }) => q !== "literal") })), H = I((ee = m.value.start) == null ? void 0 : ee.copy()), J = I((fe = m.value.end) == null ? void 0 : fe.copy());
    te([H, J], ([q, oe]) => {
      var Ce, ge;
      const he = m.value;
      if (!(he.start && he.end && q && oe && he.start.compare(q) === 0 && he.end.compare(oe) === 0))
        if (q && oe) {
          if (((Ce = m.value.start) == null ? void 0 : Ce.compare(q)) === 0 && ((ge = m.value.end) == null ? void 0 : ge.compare(oe)) === 0)
            return;
          m.value = { start: q.copy(), end: oe.copy() };
        } else m.value.start && m.value.end && (m.value = { start: void 0, end: void 0 });
    }), te(m, (q) => {
      q.start && q.end && ((!H.value || q.start.compare(H.value) !== 0) && (H.value = q.start.copy()), (!J.value || q.end.compare(J.value) !== 0) && (J.value = q.end.copy()));
    }), te([H, s], ([q]) => {
      q !== void 0 ? R.value = { ...Ft({ value: q, formatter: c }) } : R.value = { ...$ };
    }), te(s, (q) => {
      c.getLocale() !== q && (c.setLocale(q), le(() => {
        v.value.clear(), Na(f.value).forEach((oe) => v.value.add(oe));
      }));
    }), te(m, (q) => {
      q.start !== void 0 && (!Ee(x.value, q.start) || x.value.compare(q.start) !== 0) && (x.value = q.start.copy());
    }), te([J, s], ([q]) => {
      q !== void 0 ? M.value = { ...Ft({ value: q, formatter: c }) } : M.value = { ...$ };
    });
    const N = I(null), F = B(() => Array.from(v.value).findIndex((q) => {
      var oe, he;
      return q.getAttribute("data-radix-vue-date-field-segment") === ((oe = N.value) == null ? void 0 : oe.getAttribute("data-radix-vue-date-field-segment")) && q.getAttribute("data-radix-vue-date-range-field-segment-type") === ((he = N.value) == null ? void 0 : he.getAttribute("data-radix-vue-date-range-field-segment-type"));
    })), W = B(() => {
      const q = g.value === "rtl" ? -1 : 1;
      return (q < 0 ? F.value < 0 : F.value > v.value.size - 1) ? null : Array.from(v.value)[F.value + q];
    }), z = B(() => {
      const q = g.value === "rtl" ? -1 : 1;
      return (q > 0 ? F.value < 0 : F.value > v.value.size - 1) ? null : Array.from(v.value)[F.value - q];
    }), X = et();
    function G(q) {
      var oe, he;
      qe(q.key) && (q.key === X.ARROW_LEFT && ((oe = z.value) == null || oe.focus()), q.key === X.ARROW_RIGHT && ((he = W.value) == null || he.focus()));
    }
    function Z(q) {
      N.value = q;
    }
    return Gd({
      isDateUnavailable: u.value,
      locale: s,
      startValue: H,
      endValue: J,
      placeholder: x,
      disabled: r,
      formatter: c,
      hourCycle: n.hourCycle,
      readonly: i,
      segmentValues: { start: R, end: M },
      isInvalid: P,
      segmentContents: U,
      elements: v,
      setFocusedElement: Z,
      focusNext() {
        var q;
        (q = W.value) == null || q.focus();
      }
    }), t({
      setFocusedElement: Z
    }), (q, oe) => {
      var he, Ce;
      return b(), ce(_e, null, [
        Y(o(O), k(q.$attrs, {
          ref_key: "primitiveElement",
          ref: p,
          role: "group",
          "aria-disabled": o(r) ? !0 : void 0,
          "data-disabled": o(r) ? "" : void 0,
          "data-readonly": o(i) ? "" : void 0,
          "data-invalid": P.value ? "" : void 0,
          dir: o(g),
          onKeydown: re(G, ["left", "right"])
        }), {
          default: y(() => [
            C(q.$slots, "default", {
              modelValue: o(m),
              segments: L.value
            })
          ]),
          _: 3
        }, 16, ["aria-disabled", "data-disabled", "data-readonly", "data-invalid", "dir"]),
        Ue("input", {
          id: q.id,
          type: "text",
          tabindex: "-1",
          "aria-hidden": "",
          value: `${(he = o(m).start) == null ? void 0 : he.toString()} - ${(Ce = o(m).end) == null ? void 0 : Ce.toString()}`,
          name: q.name,
          disabled: o(r),
          required: q.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          },
          onFocus: oe[0] || (oe[0] = (ge) => {
            var De, ue;
            return (ue = (De = Array.from(v.value)) == null ? void 0 : De[0]) == null ? void 0 : ue.focus();
          })
        }, null, 40, jd)
      ], 64);
    };
  }
}), Yd = /* @__PURE__ */ w({
  __name: "DateRangeFieldInput",
  props: {
    part: {},
    type: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ud(), n = I(!0), l = I(!1), {
      handleSegmentClick: s,
      handleSegmentKeydown: r,
      attributes: i
    } = ns({
      hasLeftFocus: n,
      lastKeyZero: l,
      placeholder: e.placeholder,
      hourCycle: e.hourCycle,
      segmentValues: e.segmentValues[t.type],
      formatter: e.formatter,
      part: t.part,
      disabled: e.disabled,
      readonly: e.readonly,
      focusNext: e.focusNext,
      modelValue: t.type === "start" ? e.startValue : e.endValue
    }), u = B(() => e.disabled.value), d = B(() => e.readonly.value), c = B(() => e.isInvalid.value);
    return (p, f) => (b(), _(o(O), k({
      as: p.as,
      "as-child": p.asChild
    }, o(i), {
      contenteditable: u.value || d.value ? !1 : p.part !== "literal",
      "data-radix-vue-date-field-segment": p.part,
      "aria-disabled": u.value ? !0 : void 0,
      "aria-readonly": d.value ? !0 : void 0,
      "data-disabled": u.value ? "" : void 0,
      "data-radix-vue-date-range-field-segment-type": p.type,
      "data-invalid": c.value ? "" : void 0,
      "aria-invalid": c.value ? !0 : void 0
    }, Nn(p.part !== "literal" ? {
      mousedown: o(s),
      keydown: o(r),
      focusout: () => {
        n.value = !0;
      },
      focusin: (v) => {
        o(e).setFocusedElement(v.target);
      }
    } : {})), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "contenteditable", "data-radix-vue-date-field-segment", "aria-disabled", "aria-readonly", "data-disabled", "data-radix-vue-date-range-field-segment-type", "data-invalid", "aria-invalid"]));
  }
}), [os, Xd] = Q("DropdownMenuRoot"), Ym = /* @__PURE__ */ w({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), s = I(), { modal: r, dir: i } = ne(e), u = be(i);
    return Xd({
      open: l,
      onOpenChange: (d) => {
        l.value = d;
      },
      onOpenToggle: () => {
        l.value = !l.value;
      },
      triggerId: "",
      triggerElement: s,
      contentId: "",
      modal: r,
      dir: u
    }), (d, c) => (b(), _(o(oo), {
      open: o(l),
      "onUpdate:open": c[0] || (c[0] = (p) => Xe(l) ? l.value = p : null),
      dir: o(u),
      modal: o(r)
    }, {
      default: y(() => [
        C(d.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Xm = /* @__PURE__ */ w({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = os(), { forwardRef: n, currentElement: l } = T();
    return se(() => {
      e.triggerElement = l;
    }), e.triggerId || (e.triggerId = me(void 0, "radix-vue-dropdown-menu-trigger")), (s, r) => (b(), _(o(Za), { "as-child": "" }, {
      default: y(() => [
        Y(o(O), {
          id: o(e).triggerId,
          ref: o(n),
          type: s.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: s.as,
          "aria-haspopup": "menu",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(e).open.value ? o(e).contentId : void 0,
          "data-disabled": s.disabled ? "" : void 0,
          disabled: s.disabled,
          "data-state": o(e).open.value ? "open" : "closed",
          onClick: r[0] || (r[0] = async (i) => {
            var u;
            !s.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = o(e)) == null || u.onOpenToggle(), await le(), o(e).open.value && i.preventDefault());
          }),
          onKeydown: r[1] || (r[1] = re(
            (i) => {
              s.disabled || (["Enter", " "].includes(i.key) && o(e).onOpenToggle(), i.key === "ArrowDown" && o(e).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Zm = /* @__PURE__ */ w({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(po), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Jm = /* @__PURE__ */ w({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    T();
    const s = os(), r = I(!1);
    function i(u) {
      u.defaultPrevented || (r.value || setTimeout(() => {
        var d;
        (d = s.triggerElement.value) == null || d.focus();
      }, 0), r.value = !1, u.preventDefault());
    }
    return s.contentId || (s.contentId = me(void 0, "radix-vue-dropdown-menu-content")), (u, d) => {
      var c;
      return b(), _(o(uo), k(o(l), {
        id: o(s).contentId,
        "aria-labelledby": (c = o(s)) == null ? void 0 : c.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (p) => {
          var m;
          if (p.defaultPrevented) return;
          const f = p.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || v;
          (!o(s).modal.value || g) && (r.value = !0), (m = o(s).triggerElement.value) != null && m.contains(p.target) && p.preventDefault();
        })
      }), {
        default: y(() => [
          C(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Qm = /* @__PURE__ */ w({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(no), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eh = /* @__PURE__ */ w({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(_a), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), th = /* @__PURE__ */ w({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(Qa), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ah = /* @__PURE__ */ w({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(mo), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nh = /* @__PURE__ */ w({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(io), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), oh = /* @__PURE__ */ w({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(ro), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lh = /* @__PURE__ */ w({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(co), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sh = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(fo), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rh = /* @__PURE__ */ w({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return T(), (s, r) => (b(), _(o(vo), K(j(o(l))), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ih = /* @__PURE__ */ w({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? !1
    });
    return T(), (s, r) => (b(), _(o(ho), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), uh = /* @__PURE__ */ w({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return T(), (s, r) => (b(), _(o(yo), k(o(l), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dh = /* @__PURE__ */ w({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(go), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zd = ["value", "name", "disabled", "required"], [Jt, Jd] = Q("EditableRoot"), ch = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "EditableRoot",
  props: {
    defaultValue: {},
    modelValue: {},
    placeholder: { default: "Enter text..." },
    dir: {},
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean },
    activationMode: { default: "focus" },
    selectOnFocus: { type: Boolean, default: !1 },
    submitMode: { default: "blur" },
    startWithEditMode: { type: Boolean },
    maxLength: {},
    autoResize: { type: Boolean, default: !1 },
    id: {},
    name: {},
    required: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "submit", "update:state"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, {
      id: s,
      name: r,
      defaultValue: i,
      startWithEditMode: u,
      placeholder: d,
      maxLength: c,
      disabled: p,
      dir: f,
      submitMode: v,
      activationMode: g,
      selectOnFocus: m,
      readonly: S,
      autoResize: x,
      required: D
    } = ne(n), h = I(), E = be(f), P = I(u.value ?? !1), $ = ae(n, "modelValue", l, {
      defaultValue: i.value ?? "",
      passive: n.modelValue === void 0
    }), { primitiveElement: R, currentElement: M } = Ae(), V = Qe(M), A = B(() => typeof d.value == "string" ? { edit: d.value, preview: d.value } : d.value), L = I($.value);
    function U() {
      $.value = L.value, P.value = !1, l("update:state", "cancel");
    }
    function H() {
      P.value = !0, l("update:state", "edit");
    }
    function J() {
      L.value = $.value, P.value = !1, l("update:state", "submit"), l("submit", $.value);
    }
    function N() {
      P.value && (v.value === "blur" || v.value === "both" ? J() : U());
    }
    const F = Fl(() => N(), M), W = Ll(() => N(), M), z = B(() => $.value === "");
    return t({
      /** Function to submit the value of the editable */
      submit: J,
      /** Function to cancel the value of the editable */
      cancel: U,
      /** Function to set the editable in edit mode */
      edit: H
    }), Jd({
      id: s,
      name: r,
      disabled: p,
      isEditing: P,
      maxLength: c,
      modelValue: $,
      placeholder: A,
      edit: H,
      cancel: U,
      submit: J,
      activationMode: g,
      submitMode: v,
      selectOnFocus: m,
      inputRef: h,
      startWithEditMode: u,
      isEmpty: z,
      readonly: S,
      autoResize: x
    }), (X, G) => (b(), ce(_e, null, [
      Y(o(O), k(X.$attrs, {
        ref_key: "primitiveElement",
        ref: R,
        as: X.as,
        "as-child": X.asChild,
        dir: o(E),
        onFocusCapture: o(W).onFocusCapture,
        onBlurCapture: o(W).onBlurCapture,
        onPointerdownCapture: o(F).onPointerDownCapture
      }), {
        default: y(() => [
          C(X.$slots, "default", {
            modelValue: o($),
            isEditing: P.value,
            isEmpty: z.value,
            submit: J,
            cancel: U,
            edit: H
          })
        ]),
        _: 3
      }, 16, ["as", "as-child", "dir", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]),
      o(V) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o($),
        name: o(r),
        disabled: o(p),
        required: o(D),
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Zd)) : pe("", !0)
    ], 64));
  }
}), ph = /* @__PURE__ */ w({
  __name: "EditableArea",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Jt();
    return (n, l) => (b(), _(o(O), k(t, {
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      "data-focus": o(e).isEditing.value ? "" : void 0,
      "data-focused": o(e).isEditing.value ? "" : void 0,
      "data-empty": o(e).isEmpty.value ? "" : void 0,
      "data-readonly": o(e).readonly.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      style: o(e).autoResize.value ? { display: "inline-grid" } : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "data-focus", "data-focused", "data-empty", "data-readonly", "data-disabled", "style"]));
  }
}), fh = /* @__PURE__ */ w({
  __name: "EditableInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = et(), n = Jt(), l = B(() => n.disabled.value), s = B(() => {
      var d;
      return (d = n.placeholder.value) == null ? void 0 : d.edit;
    }), { primitiveElement: r, currentElement: i } = Ae();
    se(() => {
      var d, c;
      n.inputRef.value = i.value, n.startWithEditMode.value && ((d = n.inputRef.value) == null || d.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((c = n.inputRef.value) == null || c.select()));
    }), te(n.isEditing, (d) => {
      d && le(() => {
        var c, p;
        (c = n.inputRef.value) == null || c.focus({ preventScroll: !0 }), n.selectOnFocus.value && ((p = n.inputRef.value) == null || p.select());
      });
    });
    function u(d) {
      (n.submitMode.value === "enter" || n.submitMode.value === "both") && d.key === e.ENTER && !d.shiftKey && !d.metaKey && n.submit();
    }
    return (d, c) => (b(), _(o(O), k({
      ref_key: "primitiveElement",
      ref: r
    }, t, {
      value: o(n).modelValue.value,
      placeholder: s.value,
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-readonly": o(n).readonly.value ? "" : void 0,
      readonly: o(n).readonly.value,
      "aria-label": "editable input",
      hidden: o(n).autoResize.value ? void 0 : !o(n).isEditing.value,
      style: o(n).autoResize.value ? { all: "unset", gridArea: "1 / 1 / auto / auto", visibility: o(n).isEditing.value ? void 0 : "hidden" } : void 0,
      onInput: c[0] || (c[0] = (p) => o(n).modelValue.value = p.target.value),
      onKeydown: [
        re(u, ["enter", "space"]),
        re(o(n).cancel, ["esc"])
      ]
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["value", "placeholder", "disabled", "data-disabled", "data-readonly", "readonly", "hidden", "style", "onKeydown"]));
  }
}), vh = /* @__PURE__ */ w({
  __name: "EditablePreview",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Jt(), n = B(() => {
      var r;
      return (r = e.placeholder.value) == null ? void 0 : r.preview;
    });
    function l() {
      e.activationMode.value === "focus" && e.edit();
    }
    function s() {
      e.activationMode.value === "dblclick" && e.edit();
    }
    return (r, i) => (b(), _(o(O), k(t, {
      tabindex: "0",
      "data-placeholder-shown": o(e).isEditing.value ? void 0 : "",
      hidden: o(e).autoResize.value ? void 0 : o(e).isEditing.value,
      style: o(e).autoResize.value ? {
        whiteSpace: "pre",
        userSelect: "none",
        gridArea: "1 / 1 / auto / auto",
        visibility: o(e).isEditing.value ? "hidden" : void 0,
        overflow: "hidden",
        textOverflow: "ellipsis"
      } : void 0,
      onFocusin: l,
      onDblclick: s
    }), {
      default: y(() => [
        C(r.$slots, "default", {}, () => [
          ve($e(o(e).modelValue.value || n.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-placeholder-shown", "hidden", "style"]));
  }
}), mh = /* @__PURE__ */ w({
  __name: "EditableSubmitTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Jt();
    return (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "submit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).submit
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("Submit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), hh = /* @__PURE__ */ w({
  __name: "EditableCancelTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Jt();
    return (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "cancel",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? void 0 : "",
      onClick: o(e).cancel
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("Cancel")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), yh = /* @__PURE__ */ w({
  __name: "EditableEditTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Jt();
    return (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "edit",
      "aria-disabled": o(e).disabled.value ? "" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      disabled: o(e).disabled.value,
      type: n.as === "button" ? "button" : void 0,
      hidden: o(e).isEditing.value ? "" : void 0,
      onClick: o(e).edit
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("Edit")
        ])
      ]),
      _: 3
    }, 16, ["aria-disabled", "data-disabled", "disabled", "type", "hidden", "onClick"]));
  }
}), [wo, Qd] = Q("HoverCardRoot"), gh = /* @__PURE__ */ w({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { openDelay: l, closeDelay: s } = ne(e);
    T();
    const r = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = I(0), u = I(0), d = I(!1), c = I(!1), p = I(!1), f = I();
    function v() {
      clearTimeout(u.value), i.value = window.setTimeout(() => r.value = !0, l.value);
    }
    function g() {
      clearTimeout(i.value), !d.value && !c.value && (u.value = window.setTimeout(() => r.value = !1, s.value));
    }
    function m() {
      r.value = !1;
    }
    return Qd({
      open: r,
      onOpenChange(S) {
        r.value = S;
      },
      onOpen: v,
      onClose: g,
      onDismiss: m,
      hasSelectionRef: d,
      isPointerDownOnContentRef: c,
      isPointerInTransitRef: p,
      triggerElement: f
    }), (S, x) => (b(), _(o(It), null, {
      default: y(() => [
        C(S.$slots, "default", { open: o(r) })
      ]),
      _: 3
    }));
  }
});
function Tn(a) {
  return (t) => t.pointerType === "touch" ? void 0 : a();
}
function ec(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
const bh = /* @__PURE__ */ w({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = T(), n = wo();
    n.triggerElement = e;
    function l() {
      setTimeout(() => {
        !n.isPointerInTransitRef.value && !n.open.value && n.onClose();
      }, 0);
    }
    return (s, r) => (b(), _(o(Tt), { "as-child": "" }, {
      default: y(() => [
        Y(o(O), {
          ref: o(t),
          "as-child": s.asChild,
          as: s.as,
          "data-state": o(n).open.value ? "open" : "closed",
          "data-grace-area-trigger": "",
          onPointerenter: r[0] || (r[0] = (i) => o(Tn)(o(n).onOpen)(i)),
          onPointerleave: r[1] || (r[1] = (i) => o(Tn)(l)(i)),
          onFocus: r[2] || (r[2] = (i) => o(n).onOpen()),
          onBlur: r[3] || (r[3] = (i) => o(n).onClose())
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state"])
      ]),
      _: 3
    }));
  }
}), Ch = /* @__PURE__ */ w({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tc = /* @__PURE__ */ w({
  __name: "HoverCardContentImpl",
  props: {
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Bt(e), { forwardRef: s, currentElement: r } = T(), i = wo(), { isPointerInTransit: u, onPointerExit: d } = Il(i.triggerElement, r);
    li(i.isPointerInTransitRef, u, { direction: "rtl" }), d(() => {
      i.onClose();
    });
    const c = I(!1);
    let p;
    ye((v) => {
      if (c.value) {
        const g = document.body;
        p = g.style.userSelect || g.style.webkitUserSelect, g.style.userSelect = "none", g.style.webkitUserSelect = "none", v(() => {
          g.style.userSelect = p, g.style.webkitUserSelect = p;
        });
      }
    });
    function f() {
      c.value = !1, i.isPointerDownOnContentRef.value = !1, le(() => {
        var g;
        ((g = document.getSelection()) == null ? void 0 : g.toString()) !== "" && (i.hasSelectionRef.value = !0);
      });
    }
    return se(() => {
      r.value && (document.addEventListener("pointerup", f), ec(r.value).forEach((g) => g.setAttribute("tabindex", "-1")));
    }), Ie(() => {
      document.removeEventListener("pointerup", f), i.hasSelectionRef.value = !1, i.isPointerDownOnContentRef.value = !1;
    }), (v, g) => (b(), _(o(yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: g[1] || (g[1] = (m) => n("escapeKeyDown", m)),
      onPointerDownOutside: g[2] || (g[2] = (m) => n("pointerDownOutside", m)),
      onFocusOutside: g[3] || (g[3] = ie((m) => n("focusOutside", m), ["prevent"])),
      onDismiss: o(i).onDismiss
    }, {
      default: y(() => [
        Y(o(Pt), k({ ...o(l), ...v.$attrs }, {
          ref: o(s),
          "data-state": o(i).open.value ? "open" : "closed",
          style: {
            userSelect: c.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: c.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: g[0] || (g[0] = (m) => {
            m.currentTarget.contains(m.target) && (c.value = !0), o(i).hasSelectionRef.value = !1, o(i).isPointerDownOnContentRef.value = !0;
          })
        }), {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
}), wh = /* @__PURE__ */ w({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const l = xe(a, t), { forwardRef: s } = T(), r = wo();
    return (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(r).open.value
    }, {
      default: y(() => [
        Y(tc, k(o(l), {
          ref: o(s),
          onPointerenter: u[0] || (u[0] = (d) => o(Tn)(o(r).onOpen)(d))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), _h = /* @__PURE__ */ w({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(qt), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xh = /* @__PURE__ */ w({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), k(t, {
      onMousedown: n[0] || (n[0] = (l) => {
        !l.defaultPrevented && l.detail > 1 && l.preventDefault();
      })
    }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ac(a) {
  return a == null ? void 0 : a.querySelector("[data-state=checked]");
}
function nc(a, t, e) {
  return a === void 0 ? !1 : Array.isArray(a) ? a.some((n) => Ht(n, t, e)) : Ht(a, t, e);
}
function Ht(a, t, e) {
  return a === void 0 || t === void 0 ? !1 : typeof a == "string" ? a === t : typeof e == "function" ? e(a, t) : typeof e == "string" ? (a == null ? void 0 : a[e]) === (t == null ? void 0 : t[e]) : Ye(a, t);
}
const [en, oc] = Q("ListboxRoot"), Sh = /* @__PURE__ */ w({
  __name: "ListboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    orientation: { default: "vertical" },
    dir: {},
    disabled: { type: Boolean },
    selectionBehavior: { default: "toggle" },
    highlightOnHover: { type: Boolean },
    by: {},
    name: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "highlight", "entryFocus", "leave"],
  setup(a, { emit: t }) {
    const e = a, n = t, { multiple: l, highlightOnHover: s, orientation: r, disabled: i, selectionBehavior: u, dir: d } = ne(e), { getItems: c } = ba(), { handleTypeaheadSearch: p } = ga(), { primitiveElement: f, currentElement: v } = Ae(), g = et(), m = be(d), S = Qe(v), x = I(), D = I(!1), h = I(!0), E = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? (l.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    });
    function P(G) {
      if (D.value = !0, Array.isArray(E.value)) {
        const Z = E.value.findIndex((ee) => Ht(ee, G, e.by));
        if (e.selectionBehavior === "toggle") {
          const ee = [...E.value];
          Z === -1 ? ee.push(G) : ee.splice(Z, 1), E.value = ee;
        } else
          E.value = [G], x.value = G;
      } else
        e.selectionBehavior === "toggle" && Ht(E.value, G, e.by) ? E.value = void 0 : E.value = G;
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    const $ = I(null), R = I(null), M = I(!1), V = ia(), A = ia();
    function L() {
      return c().map((G) => G.ref).filter((G) => G.dataset.disabled !== "");
    }
    function U(G) {
      $.value = G, $.value.focus(), $.value.scrollIntoView({ block: "nearest" });
      const Z = c().find((ee) => ee.ref === G);
      n("highlight", Z);
    }
    function H(G) {
      $.value && $.value.click();
    }
    function J(G) {
      if (D.value = !0, M.value)
        A.trigger(G);
      else {
        const Z = G.altKey || G.ctrlKey || G.metaKey;
        if (Z && G.key === "a" && l.value) {
          const ee = c(), fe = ee.map((q) => q.value);
          E.value = [...fe], G.preventDefault(), U(ee[ee.length - 1].ref);
        } else if (!Z) {
          const ee = p(G.key, L());
          ee && U(ee);
        }
      }
      setTimeout(() => {
        D.value = !1;
      }, 1);
    }
    function N(G) {
      R.value = $.value, $.value = null, n("leave", G);
    }
    function F(G) {
      var ee, fe;
      const Z = new CustomEvent("listbox.entryFocus", { bubbles: !1, cancelable: !0 });
      if ((ee = G.currentTarget) == null || ee.dispatchEvent(Z), n("entryFocus", Z), !Z.defaultPrevented)
        if (R.value)
          U(R.value);
        else {
          const q = (fe = L()) == null ? void 0 : fe[0];
          U(q);
        }
    }
    function W(G) {
      const Z = Xl(G, r.value, m.value);
      if (!Z)
        return;
      let ee = L();
      if ($.value) {
        if (Z === "last")
          ee.reverse();
        else if (Z === "prev" || Z === "next") {
          Z === "prev" && ee.reverse();
          const fe = ee.indexOf($.value);
          ee = ee.slice(fe + 1);
        }
        z(G, ee[0]);
      }
      if (ee.length) {
        const fe = !$.value && Z === "prev" ? ee.length - 1 : 0;
        U(ee[fe]);
      }
      if (M.value)
        return A.trigger(G);
    }
    function z(G, Z) {
      var fe;
      if (!(M.value || e.selectionBehavior !== "replace" || !l.value || !Array.isArray(E.value) || (G.altKey || G.ctrlKey || G.metaKey) && !G.shiftKey) && G.shiftKey) {
        const q = c().filter((Ce) => Ce.ref.dataset.disabled !== "");
        let oe = (fe = q.find((Ce) => Ce.ref === Z)) == null ? void 0 : fe.value;
        if (G.key === g.END ? oe = q[q.length - 1].value : G.key === g.HOME && (oe = q[0].value), !oe || !x.value)
          return;
        const he = St(q.map((Ce) => Ce.value), x.value, oe);
        E.value = he;
      }
    }
    async function X(G) {
      if (M.value)
        V.trigger(G);
      else {
        await le();
        const ee = L().find((fe) => fe.dataset.state === "checked");
        ee && U(ee);
      }
    }
    return te(E, () => {
      D.value || le(() => {
        X();
      });
    }, { immediate: !0, deep: !0 }), oc({
      modelValue: E,
      // @ts-expect-error ignoring
      onValueChange: P,
      multiple: l,
      orientation: r,
      dir: m,
      disabled: i,
      highlightOnHover: s,
      highlightedElement: $,
      isVirtual: M,
      virtualFocusHook: V,
      virtualKeydownHook: A,
      by: e.by,
      firstValue: x,
      selectionBehavior: u,
      focusable: h,
      onLeave: N,
      onEnter: F,
      onChangeHighlight: U,
      onKeydownEnter: H,
      onKeydownNavigation: W,
      onKeydownTypeAhead: J
    }), (G, Z) => (b(), _(o(O), {
      ref_key: "primitiveElement",
      ref: f,
      as: G.as,
      "as-child": G.asChild,
      dir: o(m),
      "data-disabled": o(i) ? "" : void 0,
      onPointerleave: N,
      onFocusout: Z[0] || (Z[0] = (ee) => {
        const fe = ee.relatedTarget || ee.target;
        $.value && !o(v).contains(fe) && N(ee);
      })
    }, {
      default: y(() => [
        C(G.$slots, "default", { modelValue: o(E) }),
        o(S) && e.name ? (b(), _(o(to), {
          key: 0,
          name: e.name,
          value: o(E)
        }, null, 8, ["name", "value"])) : pe("", !0)
      ]),
      _: 3
    }, 8, ["as", "as-child", "dir", "data-disabled"]));
  }
}), Eh = /* @__PURE__ */ w({
  __name: "ListboxContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = en(), e = Dt(!1, 10);
    return (n, l) => (b(), _(o(Ca), null, {
      default: y(() => [
        Y(o(O), {
          role: "listbox",
          as: n.as,
          "as-child": n.asChild,
          tabindex: o(t).focusable.value ? o(t).highlightedElement.value ? "-1" : "0" : void 0,
          "data-orientation": o(t).orientation.value,
          onMousedown: l[0] || (l[0] = ie((s) => e.value = !0, ["left"])),
          onFocus: l[1] || (l[1] = (s) => {
            o(e) || o(t).onEnter(s);
          }),
          onKeydown: [
            l[2] || (l[2] = re(ie((s) => {
              o(t).focusable.value && o(t).onKeydownNavigation(s);
            }, ["prevent"]), ["down", "up", "home", "end"])),
            re(o(t).onKeydownEnter, ["enter"]),
            o(t).onKeydownTypeAhead
          ]
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "tabindex", "data-orientation", "onKeydown"])
      ]),
      _: 3
    }));
  }
}), Ph = /* @__PURE__ */ w({
  __name: "ListboxFilter",
  props: {
    modelValue: {},
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: "",
      passive: e.modelValue === void 0
    }), s = en();
    s.focusable.value = !1;
    const { primitiveElement: r, currentElement: i } = Ae();
    return se(() => {
      setTimeout(() => {
        var u;
        e.autoFocus && ((u = i.value) == null || u.focus());
      }, 1);
    }), (u, d) => (b(), _(o(O), {
      ref_key: "primitiveElement",
      ref: r,
      as: u.as,
      "as-child": u.asChild,
      value: o(l),
      disabled: o(s).disabled.value ? "" : void 0,
      "data-disabled": o(s).disabled.value ? "" : void 0,
      type: "text",
      onKeydown: [
        re(ie(o(s).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]),
        re(o(s).onKeydownEnter, ["enter"])
      ],
      onInput: d[0] || (d[0] = (c) => {
        l.value = c.target.value;
      })
    }, {
      default: y(() => [
        C(u.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "onKeydown"]));
  }
}), lc = "listbox.select", [sc, rc] = Q("ListboxItem"), Dh = /* @__PURE__ */ w({
  __name: "ListboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), r = me(void 0, "radix-vue-listbox-item"), i = en(), u = B(() => s.value === i.highlightedElement.value), d = B(() => nc(i.modelValue.value, e.value, i.by)), c = B(() => i.disabled.value || e.disabled);
    async function p(v) {
      n("select", v), !(v != null && v.defaultPrevented) && !c.value && v && (i.onValueChange(e.value), i.onChangeHighlight(v.target));
    }
    function f(v) {
      const g = { originalEvent: v, value: e.value };
      zt(lc, p, g);
    }
    return rc({
      isSelected: d
    }), (v, g) => (b(), _(o(Xt), { value: v.value }, {
      default: y(() => [
        Y(o(O), {
          id: o(r),
          ref: o(l),
          role: "option",
          tabindex: o(i).focusable.value ? u.value ? "0" : "-1" : void 0,
          "aria-selected": d.value,
          as: v.as,
          "as-child": v.asChild,
          disabled: c.value ? "" : void 0,
          "data-disabled": c.value ? "" : void 0,
          "data-highlighted": u.value ? "" : void 0,
          "data-state": d.value ? "checked" : "unchecked",
          onClick: f,
          onKeydown: re(ie(f, ["prevent"]), ["space"]),
          onPointermove: g[0] || (g[0] = (m) => {
            o(i).highlightOnHover.value ? o(i).onChangeHighlight(o(s)) : o(i).focusable.value || o(i).onChangeHighlight(o(s));
          })
        }, {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), $h = /* @__PURE__ */ w({
  __name: "ListboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a;
    T();
    const e = sc();
    return (n, l) => o(e).isSelected.value ? (b(), _(o(O), k({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
});
function na(a, t, e) {
  let n = e.initialDeps ?? [], l;
  return () => {
    var s, r, i, u;
    let d;
    e.key && ((s = e.debug) != null && s.call(e)) && (d = Date.now());
    const c = a();
    if (!(c.length !== n.length || c.some((v, g) => n[g] !== v)))
      return l;
    n = c;
    let f;
    if (e.key && ((r = e.debug) != null && r.call(e)) && (f = Date.now()), l = t(...c), e.key && ((i = e.debug) != null && i.call(e))) {
      const v = Math.round((Date.now() - d) * 100) / 100, g = Math.round((Date.now() - f) * 100) / 100, m = g / 16, S = (x, D) => {
        for (x = String(x); x.length < D; )
          x = " " + x;
        return x;
      };
      console.info(
        `%c⏱ ${S(g, 5)} /${S(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * m, 120)
        )}deg 100% 31%);`,
        e == null ? void 0 : e.key
      );
    }
    return (u = e == null ? void 0 : e.onChange) == null || u.call(e, l), l;
  };
}
function xn(a, t) {
  if (a === void 0)
    throw new Error("Unexpected undefined");
  return a;
}
const ic = (a, t) => Math.abs(a - t) < 1, uc = (a, t, e) => {
  let n;
  return function(...l) {
    a.clearTimeout(n), n = a.setTimeout(() => t.apply(this, l), e);
  };
}, dc = (a) => a, cc = (a) => {
  const t = Math.max(a.startIndex - a.overscan, 0), e = Math.min(a.endIndex + a.overscan, a.count - 1), n = [];
  for (let l = t; l <= e; l++)
    n.push(l);
  return n;
}, pc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  const l = (r) => {
    const { width: i, height: u } = r;
    t({ width: Math.round(i), height: Math.round(u) });
  };
  if (l(e.getBoundingClientRect()), !n.ResizeObserver)
    return () => {
    };
  const s = new n.ResizeObserver((r) => {
    const i = r[0];
    if (i != null && i.borderBoxSize) {
      const u = i.borderBoxSize[0];
      if (u) {
        l({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    l(e.getBoundingClientRect());
  });
  return s.observe(e, { box: "border-box" }), () => {
    s.unobserve(e);
  };
}, Go = {
  passive: !0
}, fc = typeof window > "u" ? !0 : "onscrollend" in window, vc = (a, t) => {
  const e = a.scrollElement;
  if (!e)
    return;
  const n = a.targetWindow;
  if (!n)
    return;
  let l = 0;
  const s = fc ? () => {
  } : uc(
    n,
    () => {
      t(l, !1);
    },
    a.options.isScrollingResetDelay
  ), r = (d) => () => {
    l = e[a.options.horizontal ? "scrollLeft" : "scrollTop"], s(), t(l, d);
  }, i = r(!0), u = r(!1);
  return u(), e.addEventListener("scroll", i, Go), e.addEventListener("scrollend", u, Go), () => {
    e.removeEventListener("scroll", i), e.removeEventListener("scrollend", u);
  };
}, mc = (a, t, e) => {
  if (t != null && t.borderBoxSize) {
    const n = t.borderBoxSize[0];
    if (n)
      return Math.round(
        n[e.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    a.getBoundingClientRect()[e.options.horizontal ? "width" : "height"]
  );
}, hc = (a, {
  adjustments: t = 0,
  behavior: e
}, n) => {
  var l, s;
  const r = a + t;
  (s = (l = n.scrollElement) == null ? void 0 : l.scrollTo) == null || s.call(l, {
    [n.options.horizontal ? "left" : "top"]: r,
    behavior: e
  });
};
class yc {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const n = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((l) => {
        l.forEach((s) => {
          this._measureElement(s.target, s);
        });
      }));
      return {
        disconnect: () => {
          var l;
          return (l = n()) == null ? void 0 : l.disconnect();
        },
        observe: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.observe(l, { box: "border-box" });
        },
        unobserve: (l) => {
          var s;
          return (s = n()) == null ? void 0 : s.unobserve(l);
        }
      };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([n, l]) => {
        typeof l > "u" && delete e[n];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: dc,
        rangeExtractor: cc,
        onChange: () => {
        },
        measureElement: mc,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        ...e
      };
    }, this.notify = (e, n) => {
      var l, s;
      const { startIndex: r, endIndex: i } = this.range ?? {
        startIndex: void 0,
        endIndex: void 0
      }, u = this.calculateRange();
      (e || r !== (u == null ? void 0 : u.startIndex) || i !== (u == null ? void 0 : u.endIndex)) && ((s = (l = this.options).onChange) == null || s.call(l, this, n));
    }, this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.observer.disconnect(), this.elementsCache.clear();
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const n = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== n) {
        if (this.cleanup(), !n) {
          this.notify(!1, !1);
          return;
        }
        this.scrollElement = n, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (l) => {
            this.scrollRect = l, this.notify(!1, !1);
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (l, s) => {
            this.scrollAdjustments = 0, this.scrollDirection = s ? this.getScrollOffset() < l ? "forward" : "backward" : null, this.scrollOffset = l;
            const r = this.isScrolling;
            this.isScrolling = s, this.notify(r !== s, s);
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, n) => {
      const l = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      for (let r = n - 1; r >= 0; r--) {
        const i = e[r];
        if (l.has(i.lane))
          continue;
        const u = s.get(
          i.lane
        );
        if (u == null || i.end > u.end ? s.set(i.lane, i) : i.end < u.end && l.set(i.lane, !0), l.size === this.options.lanes)
          break;
      }
      return s.size === this.options.lanes ? Array.from(s.values()).sort((r, i) => r.end === i.end ? r.index - i.index : r.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = na(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (e, n, l, s, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: e,
        paddingStart: n,
        scrollMargin: l,
        getItemKey: s,
        enabled: r
      }),
      {
        key: !1
      }
    ), this.getMeasurements = na(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: e, paddingStart: n, scrollMargin: l, getItemKey: s, enabled: r }, i) => {
        var u;
        if (!r)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((p) => {
          this.itemSizeCache.set(p.key, p.size);
        }));
        const d = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const c = this.measurementsCache.slice(0, d);
        for (let p = d; p < e; p++) {
          let f = (u = this.measurementsCache[p]) == null ? void 0 : u.measureElement;
          f || (f = (E) => {
            const P = s(p), $ = this.elementsCache.get(P);
            if (!E) {
              $ && (this.observer.unobserve($), this.elementsCache.delete(P));
              return;
            }
            $ !== E && ($ && this.observer.unobserve($), this.observer.observe(E), this.elementsCache.set(P, E)), E.isConnected && this.resizeItem(
              p,
              this.options.measureElement(E, void 0, this)
            );
          });
          const v = s(p), g = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), m = g ? g.end + this.options.gap : n + l, S = i.get(v), x = typeof S == "number" ? S : this.options.estimateSize(p), D = m + x, h = g ? g.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: m,
            size: x,
            end: D,
            key: v,
            lane: h,
            measureElement: f
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = na(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (e, n, l) => this.range = e.length > 0 && n > 0 ? gc({
        measurements: e,
        outerSize: n,
        scrollOffset: l
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getIndexes = na(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (e, n, l, s) => n === null ? [] : e({
        startIndex: n.startIndex,
        endIndex: n.endIndex,
        overscan: l,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (e) => {
      const n = this.options.indexAttribute, l = e.getAttribute(n);
      return l ? parseInt(l, 10) : (console.warn(
        `Missing attribute name '${n}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (e, n) => {
      const l = this.indexFromElement(e), s = this.getMeasurements()[l];
      if (!s || !e.isConnected) {
        this.elementsCache.forEach((i, u) => {
          i === e && (this.observer.unobserve(e), this.elementsCache.delete(u));
        });
        return;
      }
      const r = this.elementsCache.get(s.key);
      r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(s.key, e)), this.resizeItem(l, this.options.measureElement(e, n, this));
    }, this.resizeItem = (e, n) => {
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.itemSizeCache.get(l.key) ?? l.size, r = n - s;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(l, r, this) : l.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", r), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(l.index), this.itemSizeCache = new Map(this.itemSizeCache.set(l.key, n)), this.notify(!0, !1));
    }, this.measureElement = (e) => {
      e && this._measureElement(e, void 0);
    }, this.getVirtualItems = na(
      () => [this.getIndexes(), this.getMeasurements()],
      (e, n) => {
        const l = [];
        for (let s = 0, r = e.length; s < r; s++) {
          const i = e[s], u = n[i];
          l.push(u);
        }
        return l;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getIndexes",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (e) => {
      const n = this.getMeasurements();
      if (n.length !== 0)
        return xn(
          n[ls(
            0,
            n.length - 1,
            (l) => xn(n[l]).start,
            e
          )]
        );
    }, this.getOffsetForAlignment = (e, n) => {
      const l = this.getSize(), s = this.getScrollOffset();
      n === "auto" && (e <= s ? n = "start" : e >= s + l ? n = "end" : n = "start"), n === "start" ? e = e : n === "end" ? e = e - l : n === "center" && (e = e - l / 2);
      const r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[r] : this.scrollElement[r] : 0) - l;
      return Math.max(Math.min(u, e), 0);
    }, this.getOffsetForIndex = (e, n = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const l = this.getMeasurements()[e];
      if (!l)
        return;
      const s = this.getSize(), r = this.getScrollOffset();
      if (n === "auto")
        if (l.end >= r + s - this.options.scrollPaddingEnd)
          n = "end";
        else if (l.start <= r + this.options.scrollPaddingStart)
          n = "start";
        else
          return [r, n];
      const i = n === "end" ? l.end + this.options.scrollPaddingEnd : l.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(i, n), n];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (e, { align: n = "start", behavior: l } = {}) => {
      this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(e, n), {
        adjustments: void 0,
        behavior: l
      });
    }, this.scrollToIndex = (e, { align: n = "auto", behavior: l } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1)), this.cancelScrollToIndex(), l === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      const s = this.getOffsetForIndex(e, n);
      if (!s) return;
      const [r, i] = s;
      this._scrollToOffset(r, { adjustments: void 0, behavior: l }), l !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(e)
        )) {
          const [d] = xn(
            this.getOffsetForIndex(e, i)
          );
          ic(d, this.getScrollOffset()) || this.scrollToIndex(e, { align: i, behavior: l });
        } else
          this.scrollToIndex(e, { align: i, behavior: l });
      }));
    }, this.scrollBy = (e, { behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + e, {
        adjustments: void 0,
        behavior: n
      });
    }, this.getTotalSize = () => {
      var e;
      const n = this.getMeasurements();
      let l;
      return n.length === 0 ? l = this.options.paddingStart : l = this.options.lanes === 1 ? ((e = n[n.length - 1]) == null ? void 0 : e.end) ?? 0 : Math.max(
        ...n.slice(-this.options.lanes).map((s) => s.end)
      ), l - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (e, {
      adjustments: n,
      behavior: l
    }) => {
      this.options.scrollToFn(e, { behavior: l, adjustments: n }, this);
    }, this.measure = () => {
      var e, n;
      this.itemSizeCache = /* @__PURE__ */ new Map(), (n = (e = this.options).onChange) == null || n.call(e, this, !1);
    }, this.setOptions(t);
  }
}
const ls = (a, t, e, n) => {
  for (; a <= t; ) {
    const l = (a + t) / 2 | 0, s = e(l);
    if (s < n)
      a = l + 1;
    else if (s > n)
      t = l - 1;
    else
      return l;
  }
  return a > 0 ? a - 1 : 0;
};
function gc({
  measurements: a,
  outerSize: t,
  scrollOffset: e
}) {
  const n = a.length - 1, s = ls(0, n, (i) => a[i].start, e);
  let r = s;
  for (; r < n && a[r].end < e + t; )
    r++;
  return { startIndex: s, endIndex: r };
}
function bc(a) {
  const t = new yc(o(a)), e = Mn(t), n = t._didMount();
  return te(
    () => o(a).getScrollElement(),
    (l) => {
      l && t._willUpdate();
    },
    {
      immediate: !0
    }
  ), te(
    () => o(a),
    (l) => {
      t.setOptions({
        ...l,
        onChange: (s, r) => {
          var i;
          Mo(e), (i = l.onChange) == null || i.call(l, s, r);
        }
      }), t._willUpdate(), Mo(e);
    },
    {
      immediate: !0
    }
  ), rl(n), e;
}
function ss(a) {
  return bc(
    B(() => ({
      observeElementRect: pc,
      observeElementOffset: vc,
      scrollToFn: hc,
      ...o(a)
    }))
  );
}
const Bh = /* @__PURE__ */ w({
  __name: "ListboxVirtualizer",
  props: {
    options: {},
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Wa(), n = en(), l = $l(), { getItems: s } = Zt();
    n.isVirtual.value = !0;
    const r = B(() => {
      const f = l.value;
      if (f) {
        const v = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), i = ss(
      {
        get scrollPaddingStart() {
          return r.value.start;
        },
        get scrollPaddingEnd() {
          return r.value.end;
        },
        get count() {
          return t.options.length;
        },
        get horizontal() {
          return n.orientation.value === "horizontal";
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), u = B(() => i.value.getVirtualItems().map((f) => ({
      item: f,
      is: Fn(e.default({
        option: t.options[f.index]
      })[0], {
        key: `${f.key}`,
        "data-index": f.index,
        "aria-setsize": t.options.length,
        "aria-posinset": f.index + 1,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    n.virtualFocusHook.on((f) => {
      const v = t.options.findIndex((g) => Array.isArray(n.modelValue.value) ? Ht(g, n.modelValue.value[0], n.by) : Ht(g, n.modelValue.value, n.by));
      v !== -1 && (f == null || f.preventDefault(), i.value.scrollToIndex(v, { align: "start" }), requestAnimationFrame(() => {
        const g = ac(l.value);
        g && f && (g == null || g.focus());
      }));
    });
    const d = Dt("", 1e3), c = B(() => {
      const f = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return t.options.map((v, g) => ({
        index: g,
        textContent: f(v)
      }));
    });
    function p(f, v) {
      var x, D, h, E;
      if (!((x = n.firstValue) != null && x.value) || !n.multiple.value || !Array.isArray(n.modelValue.value))
        return;
      const m = (D = s().filter((P) => P.ref.dataset.disabled !== "").find((P) => P.ref === n.highlightedElement.value)) == null ? void 0 : D.value;
      if (!m)
        return;
      let S = null;
      switch (v) {
        case "prev":
        case "next": {
          S = St(t.options, n.firstValue.value, m);
          break;
        }
        case "first": {
          S = St(t.options, n.firstValue.value, (h = t.options) == null ? void 0 : h[0]);
          break;
        }
        case "last": {
          S = St(t.options, n.firstValue.value, (E = t.options) == null ? void 0 : E[t.options.length - 1]);
          break;
        }
      }
      n.modelValue.value = S;
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const v = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v)
        return;
      let m = Ja[f.key];
      if (v && f.key === "a" && n.multiple.value ? (f.preventDefault(), n.modelValue.value = [...t.options], m = "last") : f.shiftKey && m && p(f, m), ["first", "last"].includes(m)) {
        f.preventDefault();
        const x = m === "first" ? 0 : t.options.length - 1;
        i.value.scrollToIndex(x), requestAnimationFrame(() => {
          const D = s(), h = m === "first" ? D[0] : D[D.length - 1];
          n.onChangeHighlight(h.ref);
        });
      } else if (!m && !v) {
        d.value += f.key;
        const x = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = c.value[x].textContent, h = c.value.map(($) => $.textContent), E = Yn(h, d.value, D), P = c.value.find(($) => $.textContent === E);
        P && (i.value.scrollToIndex(P.index, { align: "start" }), requestAnimationFrame(() => {
          const $ = l.value.querySelector(`[data-index="${P.index}"]`);
          $ instanceof HTMLElement && n.onChangeHighlight($);
        }));
      }
    }), (f, v) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: Oe({
        position: "relative",
        width: "100%",
        height: `${o(i).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(_e, null, va(u.value, ({ is: g, item: m }) => (b(), _(Ge(g), {
        key: m.index
      }))), 128))
    ], 4));
  }
}), [Cc, wc] = Q("ListboxGroup"), Ih = /* @__PURE__ */ w({
  __name: "ListboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-listbox-group");
    return wc({ id: e }), (n, l) => (b(), _(o(O), k({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Th = /* @__PURE__ */ w({
  __name: "ListboxGroupLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Cc({ id: "" });
    return (n, l) => (b(), _(o(O), k(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [tn, _c] = Q("MenubarRoot"), Rh = /* @__PURE__ */ w({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), { createCollection: r } = Me("menubar");
    r(s);
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = I(null), { dir: d, loop: c } = ne(e), p = be(d);
    return _c({
      modelValue: i,
      dir: p,
      loop: c,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v) => (b(), _(o(At), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v[0] || (v[0] = (g) => u.value = g),
      orientation: "horizontal",
      loop: o(c),
      dir: o(p),
      "as-child": ""
    }, {
      default: y(() => [
        Y(o(O), {
          ref: o(l),
          role: "menubar"
        }, {
          default: y(() => [
            C(f.$slots, "default", { modelValue: o(i) })
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
}), [_o, xc] = Q("MenubarMenu"), Ah = /* @__PURE__ */ w({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(a) {
    const e = me(a.value), n = tn();
    T();
    const l = I(), s = I(!1), r = B(() => n.modelValue.value === e);
    return te(r, () => {
      r.value || (s.value = !1);
    }), xc({
      value: e,
      triggerElement: l,
      triggerId: e,
      contentId: "",
      wasKeyboardTriggerOpenRef: s
    }), (i, u) => (b(), _(o(oo), {
      open: r.value,
      modal: !1,
      dir: o(n).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || o(n).onMenuClose();
      })
    }, {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
}), Oh = /* @__PURE__ */ w({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = tn(), e = _o(), { forwardRef: n, currentElement: l } = T(), s = I(!1), r = B(() => t.modelValue.value === e.value);
    return se(() => {
      e.triggerElement = l;
    }), (i, u) => (b(), _(o(Ot), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": o(e).value
    }, {
      default: y(() => [
        Y(o(Za), { "as-child": "" }, {
          default: y(() => [
            Y(o(O), {
              id: o(e).triggerId,
              ref: o(n),
              as: i.as,
              type: i.as === "button" ? "button" : void 0,
              role: "menuitem",
              "aria-haspopup": "menu",
              "aria-expanded": r.value,
              "aria-controls": r.value ? o(e).contentId : void 0,
              "data-highlighted": s.value ? "" : void 0,
              "data-state": r.value ? "open" : "closed",
              "data-disabled": i.disabled ? "" : void 0,
              disabled: i.disabled,
              "data-value": o(e).value,
              "data-radix-vue-collection-item": "",
              onPointerdown: u[0] || (u[0] = (d) => {
                !i.disabled && d.button === 0 && d.ctrlKey === !1 && (o(t).onMenuOpen(o(e).value), r.value || d.preventDefault());
              }),
              onPointerenter: u[1] || (u[1] = () => {
                var c;
                !!o(t).modelValue.value && !r.value && (o(t).onMenuOpen(o(e).value), (c = o(l)) == null || c.focus());
              }),
              onKeydown: u[2] || (u[2] = re((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && o(t).onMenuToggle(o(e).value), d.key === "ArrowDown" && o(t).onMenuOpen(o(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (o(e).wasKeyboardTriggerOpenRef.value = !0, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => s.value = !0),
              onBlur: u[4] || (u[4] = (d) => s.value = !1)
            }, {
              default: y(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["focusable", "tab-stop-id"]));
  }
}), kh = /* @__PURE__ */ w({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(po), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mh = /* @__PURE__ */ w({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    T();
    const s = tn(), r = _o();
    r.contentId || (r.contentId = me(void 0, "radix-vue-menubar-content"));
    const { injectCollection: i } = Me("menubar"), u = i(), d = I(!1);
    function c(p) {
      const v = p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), m = (s.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === p.key;
      if (!m && v)
        return;
      let x = u.value.map((E) => E.dataset.value);
      m && x.reverse();
      const D = x.indexOf(r.value);
      x = s.loop.value ? qn(x, D + 1) : x.slice(D + 1);
      const [h] = x;
      h && s.onMenuOpen(h);
    }
    return (p, f) => (b(), _(o(uo), k(o(l), {
      id: o(r).contentId,
      "data-radix-menubar-content": "",
      "aria-labelledby": o(r).triggerId,
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: f[0] || (f[0] = (v) => {
        var m;
        !!!o(s).modelValue.value && !d.value && ((m = o(r).triggerElement.value) == null || m.focus()), d.value = !1, v.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v) => {
        const g = v.target;
        o(u).some((S) => S.contains(g)) && v.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v) => {
        d.value = !0;
      }),
      onEntryFocus: f[3] || (f[3] = (v) => {
        o(r).wasKeyboardTriggerOpenRef.value || v.preventDefault();
      }),
      onKeydown: re(c, ["arrow-right", "arrow-left"])
    }), {
      default: y(() => [
        C(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby"]));
  }
}), Vh = /* @__PURE__ */ w({
  __name: "MenubarArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(no), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fh = /* @__PURE__ */ w({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(_a), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lh = /* @__PURE__ */ w({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(Qa), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nh = /* @__PURE__ */ w({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(mo), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zh = /* @__PURE__ */ w({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(io), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Kh = /* @__PURE__ */ w({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(ro), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hh = /* @__PURE__ */ w({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(co), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wh = /* @__PURE__ */ w({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = Re(t);
    return T(), (s, r) => (b(), _(o(fo), K(j({ ...e, ...o(l) })), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jh = /* @__PURE__ */ w({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    return T(), (s, r) => (b(), _(o(vo), K(j(o(l))), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uh = /* @__PURE__ */ w({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = ae(e, "open", n, {
      defaultValue: e.defaultOpen ?? !1,
      passive: e.open === void 0
    });
    return (s, r) => (b(), _(o(ho), {
      open: o(l),
      "onUpdate:open": r[0] || (r[0] = (i) => Xe(l) ? l.value = i : null)
    }, {
      default: y(() => [
        C(s.$slots, "default", { open: o(l) })
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Gh = /* @__PURE__ */ w({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const l = xe(a, t);
    T();
    const { injectCollection: s } = Me("menubar"), r = tn(), i = _o(), u = s();
    function d(c) {
      if (c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v = u.value.map((S) => S.dataset.value);
      const g = v.indexOf(i.value);
      v = r.loop.value ? qn(v, g + 1) : v.slice(g + 1);
      const [m] = v;
      m && r.onMenuOpen(m);
    }
    return (c, p) => (b(), _(o(yo), k(o(l), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: re(d, ["arrow-right"])
    }), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qh = /* @__PURE__ */ w({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(go), k(t, { "data-radix-menubar-subtrigger": "" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [gt, rs] = Q(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), Yh = /* @__PURE__ */ w({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    disableClickTrigger: { type: Boolean, default: !1 },
    disableHoverTrigger: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = I(""), { forwardRef: r, currentElement: i } = T(), u = I(), d = I(), { createCollection: c } = Me("nav");
    c(u);
    const { delayDuration: p, skipDelayDuration: f, dir: v, disableClickTrigger: g, disableHoverTrigger: m } = ne(e), S = be(v), x = Dt(!1, f), D = B(() => l.value !== "" || x.value ? 150 : p.value), h = Hn((E) => {
      typeof E == "string" && (s.value = l.value, l.value = E);
    }, D);
    return rs({
      isRootMenu: !0,
      modelValue: l,
      previousValue: s,
      baseId: me(void 0, "radix-navigation-menu"),
      disableClickTrigger: g,
      disableHoverTrigger: m,
      dir: S,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (E) => {
        u.value = E;
      },
      viewport: d,
      onViewportChange: (E) => {
        d.value = E;
      },
      onTriggerEnter: (E) => {
        h(E);
      },
      onTriggerLeave: () => {
        x.value = !0, h("");
      },
      onContentEnter: () => {
        h();
      },
      onContentLeave: () => {
        h("");
      },
      onItemSelect: (E) => {
        s.value = l.value, l.value = E;
      },
      onItemDismiss: () => {
        s.value = l.value, l.value = "";
      }
    }), (E, P) => (b(), _(o(O), {
      ref: o(r),
      "aria-label": "Main",
      as: E.as,
      "as-child": E.asChild,
      "data-orientation": E.orientation,
      dir: o(S)
    }, {
      default: y(() => [
        C(E.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function an(a) {
  return a ? "open" : "closed";
}
function is(a, t) {
  return `${a}-trigger-${t}`;
}
function xo(a, t) {
  return `${a}-content-${t}`;
}
const ka = "navigationMenu.rootContentDismiss";
function Rn(a) {
  const t = [], e = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const l = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || l ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); ) t.push(e.currentNode);
  return t;
}
function us(a) {
  const t = document.activeElement;
  return a.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function Sc(a) {
  return a.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    a.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
function ds(a) {
  return (t) => t.pointerType === "mouse" ? a(t) : void 0;
}
const [So, Ec] = Q("NavigationMenuItem"), Xh = /* @__PURE__ */ w({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(a) {
    const t = a;
    T();
    const { injectCollection: e } = Me("nav"), n = e(), l = gt(), s = me(t.value), r = I(), i = I(), u = xo(l.baseId, s);
    let d = () => ({});
    const c = I(!1);
    async function p(m = "start") {
      const S = document.getElementById(u);
      if (S) {
        d();
        const x = Rn(S);
        x.length && us(m === "start" ? x : x.reverse());
      }
    }
    function f() {
      const m = document.getElementById(u);
      if (m) {
        const S = Rn(m);
        S.length && (d = Sc(S));
      }
    }
    Ec({
      value: s,
      contentId: u,
      triggerRef: r,
      focusProxyRef: i,
      wasEscapeCloseRef: c,
      onEntryKeyDown: p,
      onFocusProxyEnter: p,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v() {
      var m;
      l.onItemDismiss(), (m = r.value) == null || m.focus();
    }
    function g(m) {
      const S = document.activeElement;
      if (m.keyCode === 32 || m.key === "Enter")
        if (l.modelValue.value === s) {
          v(), m.preventDefault();
          return;
        } else {
          m.target.click(), m.preventDefault();
          return;
        }
      const x = n.value.filter(
        (h) => {
          var E;
          return (E = h.parentElement) == null ? void 0 : E.hasAttribute("data-menu-item");
        }
      ), D = $t(m, S, void 0, {
        itemsArray: x,
        loop: !1
      });
      D && (D == null || D.focus()), m.preventDefault(), m.stopPropagation();
    }
    return (m, S) => (b(), _(o(O), {
      "as-child": m.asChild,
      as: m.as,
      "data-menu-item": "",
      onKeydown: re(g, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: y(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Pc = /* @__PURE__ */ w({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Me("nav"), s = l(), { forwardRef: r, currentElement: i } = T(), u = gt(), d = So(), c = is(u.baseId, d.value), p = xo(u.baseId, d.value), f = I(null), v = B(() => {
      const E = s.value.map((A) => A.id.split("trigger-")[1]);
      u.dir.value === "rtl" && E.reverse();
      const P = E.indexOf(u.modelValue.value), $ = E.indexOf(u.previousValue.value), R = d.value === u.modelValue.value, M = $ === E.indexOf(d.value);
      if (!R && !M)
        return f.value;
      const V = (() => {
        if (P !== $) {
          if (R && $ !== -1)
            return P > $ ? "from-end" : "from-start";
          if (M && P !== -1)
            return P > $ ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = V, V;
    });
    function g(h) {
      var E, P;
      if (n("focusOutside", h), n("interactOutside", h), !h.defaultPrevented) {
        d.onContentFocusOutside();
        const $ = h.target;
        (P = (E = u.rootNavigationMenu) == null ? void 0 : E.value) != null && P.contains($) && h.preventDefault();
      }
    }
    function m(h) {
      var E;
      if (n("pointerDownOutside", h), !h.defaultPrevented) {
        const P = h.target, $ = s.value.some(
          (M) => M.contains(P)
        ), R = u.isRootMenu && ((E = u.viewport.value) == null ? void 0 : E.contains(P));
        ($ || R || !u.isRootMenu) && h.preventDefault();
      }
    }
    ye((h) => {
      const E = i.value;
      if (u.isRootMenu && E) {
        const P = () => {
          var $;
          u.onItemDismiss(), d.onRootContentClose(), E.contains(document.activeElement) && (($ = d.triggerRef.value) == null || $.focus());
        };
        E.addEventListener(ka, P), h(
          () => E.removeEventListener(ka, P)
        );
      }
    });
    function S(h) {
      var E, P;
      n("escapeKeyDown", h), h.defaultPrevented || (u.onItemDismiss(), (P = (E = d.triggerRef) == null ? void 0 : E.value) == null || P.focus(), d.wasEscapeCloseRef.value = !0);
    }
    function x(h) {
      var M;
      const E = h.altKey || h.ctrlKey || h.metaKey, P = h.key === "Tab" && !E, $ = Rn(h.currentTarget);
      if (P) {
        const V = document.activeElement, A = $.findIndex(
          (H) => H === V
        ), U = h.shiftKey ? $.slice(0, A).reverse() : $.slice(A + 1, $.length);
        if (us(U))
          h.preventDefault();
        else {
          (M = d.focusProxyRef.value) == null || M.focus();
          return;
        }
      }
      const R = $t(
        h,
        document.activeElement,
        void 0,
        { itemsArray: $, loop: !1, enableIgnoredElement: !0 }
      );
      R == null || R.focus();
    }
    function D() {
      var E;
      const h = new Event(ka, {
        bubbles: !0,
        cancelable: !0
      });
      (E = i.value) == null || E.dispatchEvent(h);
    }
    return (h, E) => (b(), _(o(yt), k({
      id: o(p),
      ref: o(r),
      "aria-labelledby": o(c),
      "data-motion": v.value,
      "data-state": o(an)(o(u).modelValue.value === o(d).value),
      "data-orientation": o(u).orientation
    }, e, {
      onKeydown: x,
      onEscapeKeyDown: S,
      onPointerDownOutside: m,
      onFocusOutside: g,
      onDismiss: D
    }), {
      default: y(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), Zh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Re(n), { forwardRef: s } = T(), r = ja(), i = gt(), u = So(), d = B(() => u.value === i.modelValue.value), c = B(() => i.viewport.value && !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : !1);
    return (p, f) => o(r) ? (b(), _(Wt, {
      key: 0,
      to: o(i).viewport.value,
      disabled: !o(i).viewport.value
    }, [
      Y(o(Pe), {
        present: p.forceMount || d.value || c.value
      }, {
        default: y(() => [
          Y(Pc, k({
            ref: o(s),
            "data-state": o(an)(d.value),
            style: {
              pointerEvents: !d.value && o(i).isRootMenu ? "none" : void 0
            }
          }, { ...p.$attrs, ...e, ...o(l) }, {
            onPointerenter: f[0] || (f[0] = (v) => o(i).onContentEnter(o(u).value)),
            onPointerleave: f[1] || (f[1] = (v) => o(ds)(() => o(i).onContentLeave())(v)),
            onPointerDownOutside: f[2] || (f[2] = (v) => n("pointerDownOutside", v)),
            onFocusOutside: f[3] || (f[3] = (v) => n("focusOutside", v)),
            onInteractOutside: f[4] || (f[4] = (v) => n("interactOutside", v))
          }), {
            default: y(() => [
              C(p.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : pe("", !0);
  }
}), Jh = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), { injectCollection: n } = Me("nav"), l = n(), s = gt(), r = I(), i = B(() => s.orientation === "horizontal"), u = B(() => !!s.modelValue.value), d = I();
    function c() {
      d.value && (r.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return ye(() => {
      if (!s.modelValue.value) {
        r.value = void 0;
        return;
      }
      const p = l.value;
      d.value = p.find(
        (f) => f.id.includes(s.modelValue.value)
      ), c();
    }), Ze(d, c), Ze(s.indicatorTrack, c), (p, f) => o(s).indicatorTrack.value ? (b(), _(Wt, {
      key: 0,
      to: o(s).indicatorTrack.value
    }, [
      Y(o(Pe), {
        present: p.forceMount || u.value
      }, {
        default: y(() => {
          var v, g, m, S;
          return [
            Y(o(O), k({
              ref: o(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": o(s).orientation,
              "as-child": t.asChild,
              as: p.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v = r.value) == null ? void 0 : v.size}px`,
                  transform: `translateX(${(g = r.value) == null ? void 0 : g.offset}px)`
                } : {
                  top: 0,
                  height: `${(m = r.value) == null ? void 0 : m.size}px`,
                  transform: `translateY(${(S = r.value) == null ? void 0 : S.offset}px)`
                }
              }
            }, p.$attrs), {
              default: y(() => [
                C(p.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : pe("", !0);
  }
}), Qh = /* @__PURE__ */ w({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    async function l(s) {
      var r;
      if (n("select", s), await le(), !s.defaultPrevented && !s.metaKey) {
        const i = new CustomEvent(
          ka,
          {
            bubbles: !0,
            cancelable: !0
          }
        );
        (r = s.target) == null || r.dispatchEvent(i);
      }
    }
    return (s, r) => (b(), _(o(O), {
      as: s.as,
      "data-active": s.active ? "" : void 0,
      "aria-current": s.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: l
    }, {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
}), ey = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(a) {
    const t = a, e = gt(), { forwardRef: n, currentElement: l } = T();
    return se(() => {
      e.onIndicatorTrackChange(l.value);
    }), (s, r) => (b(), _(o(O), {
      ref: o(n),
      style: { position: "relative" }
    }, {
      default: y(() => [
        Y(o(O), k(s.$attrs, {
          "as-child": t.asChild,
          as: s.as,
          "data-orientation": o(e).orientation
        }), {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), ty = /* @__PURE__ */ w({
  __name: "NavigationMenuSub",
  props: {
    modelValue: {},
    defaultValue: {},
    orientation: { default: "horizontal" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), s = I(""), r = gt(), { forwardRef: i, currentElement: u } = T(), d = I(), c = I(), { createCollection: p } = Me("nav");
    return p(d), rs({
      ...r,
      isRootMenu: !1,
      modelValue: l,
      previousValue: s,
      orientation: e.orientation,
      rootNavigationMenu: u,
      indicatorTrack: d,
      onIndicatorTrackChange: (f) => {
        d.value = f;
      },
      viewport: c,
      onViewportChange: (f) => {
        c.value = f;
      },
      onTriggerEnter: (f) => {
        l.value = f;
      },
      onTriggerLeave: () => {
      },
      onContentEnter: () => {
      },
      onContentLeave: () => {
      },
      onItemSelect: (f) => {
        l.value = f;
      },
      onItemDismiss: () => {
        l.value = "";
      }
    }), (f, v) => (b(), _(o(O), {
      ref: o(i),
      "data-orientation": f.orientation,
      "as-child": e.asChild,
      as: f.as
    }, {
      default: y(() => [
        C(f.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["data-orientation", "as-child", "as"]));
  }
}), Dc = ["aria-owns"], ay = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = gt(), n = So(), { forwardRef: l, currentElement: s } = T(), r = I(""), i = I(""), u = Dt(!1, 300), d = I(!1), c = B(() => n.value === e.modelValue.value);
    se(() => {
      n.triggerRef = s, r.value = is(e.baseId, n.value), i.value = xo(e.baseId, n.value);
    });
    function p() {
      e.disableHoverTrigger.value || (d.value = !1, n.wasEscapeCloseRef.value = !1);
    }
    function f(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled || d.value || n.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(n.value), u.value = !0;
      }
    }
    function v(D) {
      if (!e.disableHoverTrigger.value && D.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = !1;
      }
    }
    function g(D) {
      D.pointerType === "mouse" && e.disableClickTrigger.value || u.value || (c.value ? e.onItemSelect("") : e.onItemSelect(n.value), d.value = c.value);
    }
    function m(D) {
      const E = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      c.value && D.key === E && (n.onEntryKeyDown(), D.preventDefault(), D.stopPropagation());
    }
    function S(D) {
      n.focusProxyRef.value = Be(D);
    }
    function x(D) {
      const h = document.getElementById(n.contentId), E = D.relatedTarget, P = E === s.value, $ = h == null ? void 0 : h.contains(E);
      (P || !$) && n.onFocusProxyEnter(P ? "start" : "end");
    }
    return (D, h) => (b(), ce(_e, null, [
      Y(o(O), k({
        id: r.value,
        ref: o(l),
        disabled: D.disabled,
        "data-disabled": D.disabled ? "" : void 0,
        "data-state": o(an)(c.value),
        "aria-expanded": c.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: D.as
      }, D.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: p,
        onPointermove: f,
        onPointerleave: v,
        onClick: g,
        onKeydown: m
      }), {
        default: y(() => [
          C(D.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      c.value ? (b(), ce(_e, { key: 0 }, [
        Y(o(Yt), {
          ref: S,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: x
        }),
        o(e).viewport ? (b(), ce("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, Dc)) : pe("", !0)
      ], 64)) : pe("", !0)
    ], 64));
  }
}), ny = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = T(), n = gt(), l = I(), s = B(() => !!n.modelValue.value), r = B(() => n.modelValue.value);
    te(e, () => {
      e.value && n.onViewportChange(e.value);
    });
    const i = I();
    return te([r, s], async () => {
      var d, c;
      if (await le(), !e.value)
        return;
      const u = (c = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : c[0];
      i.value = u;
    }, { immediate: !0 }), Ze(i, () => {
      i.value && (l.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (b(), _(o(Pe), {
      present: u.forceMount || s.value
    }, {
      default: y(() => {
        var c, p;
        return [
          Y(o(O), k(u.$attrs, {
            ref: o(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": o(an)(s.value),
            "data-orientation": o(n).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !s.value && o(n).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": l.value ? `${(c = l.value) == null ? void 0 : c.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": l.value ? `${(p = l.value) == null ? void 0 : p.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => o(n).onContentEnter(o(n).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => o(ds)(() => o(n).onContentLeave())(f))
          }), {
            default: y(() => [
              C(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function cs(a) {
  const { disabled: t } = a, e = I(), n = ia(), l = () => window.clearTimeout(e.value), s = (f) => {
    l(), !t.value && (n.trigger(), e.value = window.setTimeout(() => {
      s(60);
    }, f));
  }, r = () => {
    s(400);
  }, i = () => {
    l();
  }, u = I(!1), d = B(() => Be(a.target) || window), c = (f) => {
    f.button !== 0 || u.value || (f.preventDefault(), u.value = !0, r());
  }, p = () => {
    u.value = !1, i();
  };
  return je(d, "pointerdown", c), window && (je(window, "pointerup", p), je(window, "pointercancel", p)), {
    isPressed: u,
    onTrigger: n.on
  };
}
function qo(a, t = I({})) {
  return wl(() => new Tr(a.value, t.value));
}
function $c(a, t = I({})) {
  return wl(() => new Rr(a.value, t.value));
}
function Yo(a, t, e) {
  let n = a === "+" ? t + e : t - e;
  if (t % 1 !== 0 || e % 1 !== 0) {
    const l = t.toString().split("."), s = e.toString().split("."), r = l[1] && l[1].length || 0, i = s[1] && s[1].length || 0, u = 10 ** Math.max(r, i);
    t = Math.round(t * u), e = Math.round(e * u), n = a === "+" ? t + e : t - e, n /= u;
  }
  return n;
}
const Bc = ["value", "name", "disabled", "required"], [Eo, Ic] = Q("NumberFieldRoot"), oy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "NumberFieldRoot",
  props: {
    defaultValue: { default: void 0 },
    modelValue: {},
    min: {},
    max: {},
    step: { default: 1 },
    formatOptions: {},
    locale: { default: "en-US" },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l, min: s, max: r, step: i, locale: u, formatOptions: d, id: c } = ne(e), p = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { primitiveElement: f, currentElement: v } = Ae(), g = Qe(v), m = I(), S = B(
      () => H(p.value) === s.value || (s.value && !isNaN(p.value) ? Yo("-", p.value, i.value) < s.value : !1)
    ), x = B(
      () => H(p.value) === r.value || (r.value && !isNaN(p.value) ? Yo("+", p.value, i.value) > r.value : !1)
    );
    function D(N, F = 1) {
      var z;
      const W = R.parse(((z = m.value) == null ? void 0 : z.value) ?? "");
      e.disabled || (isNaN(W) ? p.value = s.value ?? 0 : N === "increase" ? p.value = H(W + (i.value ?? 1) * F) : p.value = H(W - (i.value ?? 1) * F));
    }
    function h(N = 1) {
      D("increase", N);
    }
    function E(N = 1) {
      D("decrease", N);
    }
    function P(N) {
      N === "min" && s.value !== void 0 ? p.value = H(s.value) : N === "max" && r.value !== void 0 && (p.value = H(r.value));
    }
    const $ = qo(u, d), R = $c(u, d), M = B(() => $.resolvedOptions().maximumFractionDigits > 0 ? "decimal" : "numeric"), V = qo(u, d), A = B(() => isNaN(p.value) ? "" : V.format(p.value));
    function L(N) {
      return R.isValidPartialNumber(N, s.value, r.value);
    }
    function U(N) {
      m.value && (m.value.value = N);
    }
    function H(N) {
      let F;
      return i.value === void 0 || isNaN(i.value) ? F = Kt(N, s.value, r.value) : F = Ar(N, s.value, r.value, i.value), F = R.parse($.format(F)), F;
    }
    function J(N) {
      const F = R.parse(N);
      return p.value = H(F), N.length ? (isNaN(F), U(A.value)) : U(N);
    }
    return Ic({
      modelValue: p,
      handleDecrease: E,
      handleIncrease: h,
      handleMinMaxValue: P,
      inputMode: M,
      inputEl: m,
      onInputElement: (N) => m.value = N,
      textValue: A,
      validate: L,
      applyInputValue: J,
      disabled: l,
      max: r,
      min: s,
      isDecreaseDisabled: S,
      isIncreaseDisabled: x,
      id: c
    }), (N, F) => (b(), ce(_e, null, [
      Y(o(O), k(N.$attrs, {
        ref_key: "primitiveElement",
        ref: f,
        role: "group",
        as: N.as,
        "as-child": N.asChild
      }), {
        default: y(() => [
          C(N.$slots, "default", {
            modelValue: o(p),
            textValue: A.value
          })
        ]),
        _: 3
      }, 16, ["as", "as-child"]),
      o(g) ? (b(), ce("input", {
        key: 0,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(p),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, Bc)) : pe("", !0)
    ], 64));
  }
}), ly = /* @__PURE__ */ w({
  __name: "NumberFieldInput",
  props: {
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, { primitiveElement: e, currentElement: n } = Ae(), l = Eo();
    function s(r) {
      r.target === document.activeElement && (Math.abs(r.deltaY) <= Math.abs(r.deltaX) || (r.preventDefault(), r.deltaY > 0 ? l.handleIncrease() : r.deltaY < 0 && l.handleDecrease()));
    }
    return se(() => {
      l.onInputElement(n.value);
    }), (r, i) => (b(), _(o(O), k(t, {
      id: o(l).id.value,
      ref_key: "primitiveElement",
      ref: e,
      role: "spinbutton",
      type: "text",
      tabindex: "0",
      value: o(l).textValue.value,
      inputmode: o(l).inputMode.value,
      disabled: o(l).disabled.value ? "" : void 0,
      "data-disabled": o(l).disabled.value ? "" : void 0,
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
      "aria-roledescription": "Number field",
      "aria-valuenow": o(l).modelValue.value,
      "aria-valuemin": o(l).min.value,
      "aria-valuemax": o(l).max.value,
      onKeydown: [
        i[0] || (i[0] = re(ie((u) => o(l).handleIncrease(), ["prevent"]), ["up"])),
        i[1] || (i[1] = re(ie((u) => o(l).handleDecrease(), ["prevent"]), ["down"])),
        i[2] || (i[2] = re(ie((u) => o(l).handleIncrease(10), ["prevent"]), ["page-up"])),
        i[3] || (i[3] = re(ie((u) => o(l).handleDecrease(10), ["prevent"]), ["page-down"])),
        i[4] || (i[4] = re(ie((u) => o(l).handleMinMaxValue("min"), ["prevent"]), ["home"])),
        i[5] || (i[5] = re(ie((u) => o(l).handleMinMaxValue("max"), ["prevent"]), ["end"]))
      ],
      onWheel: s,
      onBeforeinput: i[6] || (i[6] = (u) => {
        const d = u.target;
        let c = d.value.slice(0, d.selectionStart ?? void 0) + (u.data ?? "") + d.value.slice(d.selectionEnd ?? void 0);
        o(l).validate(c) || u.preventDefault();
      }),
      onBlur: i[7] || (i[7] = (u) => {
        var d;
        return o(l).applyInputValue((d = u.target) == null ? void 0 : d.value);
      })
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "value", "inputmode", "disabled", "data-disabled", "aria-valuenow", "aria-valuemin", "aria-valuemax"]));
  }
}), sy = /* @__PURE__ */ w({
  __name: "NumberFieldIncrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Eo(), n = B(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isIncreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = cs({ target: s, disabled: n });
    return i(() => {
      e.handleIncrease();
    }), (u, d) => (b(), _(o(O), k(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Increase",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: o(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": o(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), ry = /* @__PURE__ */ w({
  __name: "NumberFieldDecrement",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Eo(), n = B(() => {
      var u;
      return ((u = e.disabled) == null ? void 0 : u.value) || t.disabled || e.isDecreaseDisabled.value;
    }), { primitiveElement: l, currentElement: s } = Ae(), { isPressed: r, onTrigger: i } = cs({ target: s, disabled: n });
    return i(() => {
      e.handleDecrease();
    }), (u, d) => (b(), _(o(O), k(t, {
      ref_key: "primitiveElement",
      ref: l,
      tabindex: "-1",
      "aria-label": "Decrease",
      type: u.as === "button" ? "button" : void 0,
      style: {
        userSelect: o(r) ? "none" : void 0
      },
      disabled: n.value ? "" : void 0,
      "data-disabled": n.value ? "" : void 0,
      "data-pressed": o(r) ? "true" : void 0,
      onContextmenu: d[0] || (d[0] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "style", "disabled", "data-disabled", "data-pressed"]));
  }
}), [Qt, Tc] = Q("PaginationRoot"), iy = /* @__PURE__ */ w({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(a, { emit: t }) {
    const e = a, n = t, { siblingCount: l, disabled: s, showEdges: r } = ne(e);
    T();
    const i = ae(e, "page", n, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = B(() => Math.max(1, Math.ceil(e.total / e.itemsPerPage)));
    return Tc({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: l,
      disabled: s,
      showEdges: r
    }), (d, c) => (b(), _(o(O), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: y(() => [
        C(d.$slots, "default", {
          page: o(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), uy = /* @__PURE__ */ w({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), k(t, { "data-type": "ellipsis" }), {
      default: y(() => [
        C(e.$slots, "default", {}, () => [
          ve("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), dy = /* @__PURE__ */ w({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Qt();
    return T(), (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "First Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === 1 || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(1))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), cy = /* @__PURE__ */ w({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Qt();
    return T(), (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "Last Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).pageCount.value))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function rt(a, t) {
  const e = t - a + 1;
  return Array.from({ length: e }, (n, l) => l + a);
}
function Rc(a) {
  return a.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const Ba = "ellipsis";
function Ac(a, t, e, n) {
  const s = t, r = Math.max(a - e, 1), i = Math.min(a + e, s);
  if (n) {
    const d = Math.min(2 * e + 5, t) - 2, c = r > 3 && Math.abs(s - d - 1 + 1) > 2 && Math.abs(r - 1) > 2, p = i < s - 2 && Math.abs(s - d) > 2 && Math.abs(s - i) > 2;
    if (!c && p)
      return [...rt(1, d), Ba, s];
    if (c && !p) {
      const v = rt(s - d + 1, s);
      return [1, Ba, ...v];
    }
    if (c && p) {
      const v = rt(r, i);
      return [1, Ba, ...v, Ba, s];
    }
    return rt(1, s);
  } else {
    const u = e * 2 + 1;
    return t < u ? rt(1, s) : a <= e + 1 ? rt(1, u) : t - a <= e ? rt(t - u + 1, s) : rt(r, i);
  }
}
const py = /* @__PURE__ */ w({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    T();
    const e = Qt(), n = B(() => Rc(
      Ac(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (l, s) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(l.$slots, "default", { items: n.value })
      ]),
      _: 3
    }, 16));
  }
}), fy = /* @__PURE__ */ w({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = Qt(), n = B(() => e.page.value === t.value);
    return (l, s) => (b(), _(o(O), k(t, {
      "data-type": "page",
      "aria-label": `Page ${l.value}`,
      "aria-current": n.value ? "page" : void 0,
      "data-selected": n.value ? "true" : void 0,
      disabled: o(e).disabled.value,
      type: l.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => o(e).onPageChange(l.value))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve($e(l.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), vy = /* @__PURE__ */ w({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = Qt();
    return (n, l) => (b(), _(o(O), k(t, {
      "aria-label": "Next Page",
      type: n.as === "button" ? "button" : void 0,
      disabled: o(e).page.value === o(e).pageCount.value || o(e).disabled.value,
      onClick: l[0] || (l[0] = (s) => o(e).onPageChange(o(e).page.value + 1))
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), my = /* @__PURE__ */ w({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = Qt();
    return (n, l) => {
      var s;
      return b(), _(o(O), k(t, {
        "aria-label": "Previous Page",
        type: n.as === "button" ? "button" : void 0,
        disabled: o(e).page.value === 1 || ((s = o(e).disabled) == null ? void 0 : s.value),
        onClick: l[0] || (l[0] = (r) => o(e).onPageChange(o(e).page.value - 1))
      }), {
        default: y(() => [
          C(n.$slots, "default", {}, () => [
            ve("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), Oc = ["id", "value", "name", "disabled", "required"], [kc, Mc] = Q("PinInputRoot"), hy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "PinInputRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "" },
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: { default: "text" },
    dir: {},
    name: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(a, { emit: t }) {
    const e = a, n = t, { mask: l, otp: s, placeholder: r, type: i, disabled: u, dir: d } = ne(e), { forwardRef: c } = T(), p = be(d), f = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v = I(/* @__PURE__ */ new Set());
    function g(S) {
      v.value.add(S);
    }
    const m = B(() => f.value.filter((x) => !!x).length === v.value.size);
    return te(f, () => {
      m.value && n("complete", f.value);
    }, { deep: !0 }), Mc({
      modelValue: f,
      mask: l,
      otp: s,
      placeholder: r,
      type: i,
      dir: p,
      disabled: u,
      isCompleted: m,
      inputElements: v,
      onInputElementChange: g
    }), (S, x) => (b(), ce(_e, null, [
      Y(o(O), k(S.$attrs, {
        ref: o(c),
        dir: o(p),
        "data-complete": m.value ? "" : void 0,
        "data-disabled": o(u) ? "" : void 0
      }), {
        default: y(() => [
          C(S.$slots, "default", { modelValue: o(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      Ue("input", {
        id: S.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: o(f).join(""),
        name: S.name,
        disabled: o(u),
        required: S.required,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        },
        onFocus: x[0] || (x[0] = (D) => {
          var h, E;
          return (E = (h = Array.from(v.value)) == null ? void 0 : h[0]) == null ? void 0 : E.focus();
        })
      }, null, 40, Oc)
    ], 64));
  }
}), Vc = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"], yy = /* @__PURE__ */ w({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = kc(), n = B(() => Array.from(e.inputElements.value)), l = B(() => t.disabled || e.disabled.value), s = B(() => e.otp.value), r = B(() => e.type.value === "number"), i = B(() => e.mask.value), u = I();
    function d(h) {
      var $;
      const E = h.target;
      if (((($ = h.data) == null ? void 0 : $.length) ?? 0) > 1) {
        S(E.value);
        return;
      }
      if (r.value && !/^\d*$/.test(E.value)) {
        E.value = E.value.replace(/\D/g, "");
        return;
      }
      E.value = E.value.slice(-1), D(t.index, E.value);
      const P = n.value[t.index + 1];
      P && P.focus();
    }
    function c(h) {
      $t(h, document.activeElement, void 0, {
        itemsArray: n.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function p(h) {
      if (h.preventDefault(), h.target.value)
        D(t.index, "");
      else {
        const $ = n.value[t.index - 1];
        $ && ($.focus(), D(t.index - 1, ""));
      }
    }
    function f(h) {
      h.key === "Delete" && (h.preventDefault(), D(t.index, ""));
    }
    function v(h) {
      const E = h.target;
      E.setSelectionRange(1, 1), E.value || (E.placeholder = "");
    }
    function g(h) {
      const E = h.target;
      le(() => {
        E.value || (E.placeholder = e.placeholder.value);
      });
    }
    function m(h) {
      h.preventDefault();
      const E = h.clipboardData;
      if (!E)
        return;
      const P = E.getData("text");
      S(P);
    }
    function S(h) {
      var R;
      const E = [...e.modelValue.value], P = h.length >= n.value.length ? 0 : t.index, $ = Math.min(P + h.length, n.value.length);
      for (let M = P; M < $; M++) {
        const V = n.value[M], A = h[M - P];
        r.value && !/^\d*$/.test(A) || (E[M] = A, V.focus());
      }
      e.modelValue.value = E, (R = n.value[$]) == null || R.focus();
    }
    function x(h) {
      let E = h.length - 1;
      for (; E >= 0 && h[E] === ""; )
        h.pop(), E--;
      return h;
    }
    function D(h, E) {
      const P = [...e.modelValue.value];
      P[h] = E, e.modelValue.value = x(P);
    }
    return se(() => {
      e.onInputElementChange(u.value);
    }), Ie(() => {
      var h;
      (h = e.inputElements) == null || h.value.delete(u.value);
    }), (h, E) => (b(), ce("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: s.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: r.value ? "numeric" : "text",
      pattern: r.value ? "[0-9]*" : void 0,
      placeholder: o(e).placeholder.value,
      value: o(e).modelValue.value.at(h.index),
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "data-complete": o(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${h.index + 1} of ${n.value.length}`,
      onInput: E[0] || (E[0] = (P) => d(P)),
      onKeydown: [
        re(c, ["left", "right", "up", "down", "home", "end"]),
        re(p, ["backspace"]),
        re(f, ["delete"])
      ],
      onFocus: v,
      onBlur: g,
      onPaste: m
    }, null, 40, Vc));
  }
}), [Mt, Fc] = Q("PopoverRoot"), ps = /* @__PURE__ */ w({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: !1 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { modal: l } = ne(e), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = I(), i = I(!1);
    return Fc({
      contentId: "",
      modal: l,
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerElement: r,
      hasCustomAnchor: i
    }), (u, d) => (b(), _(o(It), null, {
      default: y(() => [
        C(u.$slots, "default", { open: o(s) })
      ]),
      _: 3
    }));
  }
}), fs = /* @__PURE__ */ w({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Mt(), { forwardRef: n, currentElement: l } = T();
    return se(() => {
      e.triggerElement.value = l.value;
    }), (s, r) => (b(), _(Ge(o(e).hasCustomAnchor.value ? o(O) : o(Tt)), { "as-child": "" }, {
      default: y(() => [
        Y(o(O), {
          ref: o(n),
          type: s.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": o(e).open.value,
          "aria-controls": o(e).contentId,
          "data-state": o(e).open.value ? "open" : "closed",
          as: s.as,
          "as-child": t.asChild,
          onClick: o(e).onOpenToggle
        }, {
          default: y(() => [
            C(s.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), vs = /* @__PURE__ */ w({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ms = /* @__PURE__ */ w({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Bt(e), { forwardRef: s } = T(), r = Mt();
    return Gn(), (i, u) => (b(), _(o(Ya), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => n("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => n("closeAutoFocus", d))
    }, {
      default: y(() => [
        Y(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => n("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => n("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => n("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => n("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => o(r).onOpenChange(!1))
        }, {
          default: y(() => [
            Y(o(Pt), k(o(l), {
              id: o(r).contentId,
              ref: o(s),
              "data-state": o(r).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: y(() => [
                C(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), Lc = /* @__PURE__ */ w({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Mt(), s = I(!1);
    ha(!0);
    const r = xe(e, n), { forwardRef: i, currentElement: u } = T();
    return ya(u), (d, c) => (b(), _(ms, k(o(r), {
      ref: o(i),
      "trap-focus": o(l).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: c[0] || (c[0] = ie(
        (p) => {
          var f;
          n("closeAutoFocus", p), s.value || (f = o(l).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: c[1] || (c[1] = (p) => {
        n("pointerDownOutside", p);
        const f = p.detail.originalEvent, v = f.button === 0 && f.ctrlKey === !0, g = f.button === 2 || v;
        s.value = g;
      }),
      onFocusOutside: c[2] || (c[2] = ie(() => {
      }, ["prevent"]))
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Nc = /* @__PURE__ */ w({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Mt(), s = I(!1), r = I(!1), i = xe(e, n);
    return (u, d) => (b(), _(ms, k(o(i), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: d[0] || (d[0] = (c) => {
        var p;
        n("closeAutoFocus", c), c.defaultPrevented || (s.value || (p = o(l).triggerElement.value) == null || p.focus(), c.preventDefault()), s.value = !1, r.value = !1;
      }),
      onInteractOutside: d[1] || (d[1] = async (c) => {
        var v;
        n("interactOutside", c), c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (r.value = !0));
        const p = c.target;
        ((v = o(l).triggerElement.value) == null ? void 0 : v.contains(p)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && r.value && c.preventDefault();
      })
    }), {
      default: y(() => [
        C(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hs = /* @__PURE__ */ w({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = Mt(), s = xe(e, n), { forwardRef: r } = T();
    return l.contentId || (l.contentId = me(void 0, "radix-vue-popover-content")), (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        o(l).modal.value ? (b(), _(Lc, k({ key: 0 }, o(s), { ref: o(r) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (b(), _(Nc, k({ key: 1 }, o(s), { ref: o(r) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ys = /* @__PURE__ */ w({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(qt), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = /* @__PURE__ */ w({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = Mt();
    return (n, l) => (b(), _(o(O), {
      type: n.as === "button" ? "button" : void 0,
      as: n.as,
      "as-child": t.asChild,
      onClick: l[0] || (l[0] = (s) => o(e).onOpenChange(!1))
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), bs = /* @__PURE__ */ w({
  __name: "PopoverAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    T();
    const e = Mt();
    return pl(() => {
      e.hasCustomAnchor.value = !0;
    }), Ie(() => {
      e.hasCustomAnchor.value = !1;
    }), (n, l) => (b(), _(o(Tt), K(j(t)), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), da = 100, [zc, Kc] = Q("ProgressRoot"), Po = (a) => typeof a == "number";
function Hc(a, t) {
  return Nt(a) || Po(a) && !Number.isNaN(a) && a <= t && a >= 0 ? a : (console.error(`Invalid prop \`value\` of value \`${a}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${da} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function Wc(a) {
  return Po(a) && !Number.isNaN(a) && a > 0 ? a : (console.error(
    `Invalid prop \`max\` of value \`${a}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${da}\`.`
  ), da);
}
const gy = /* @__PURE__ */ w({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: da },
    getValueLabel: { type: Function, default: (a, t) => `${Math.round(a / t * da)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = ae(e, "modelValue", n, {
      passive: e.modelValue === void 0
    }), s = ae(e, "max", n, {
      passive: e.max === void 0
    });
    te(
      () => l.value,
      async (i) => {
        const u = Hc(i, e.max);
        u !== i && (await le(), l.value = u);
      },
      { immediate: !0 }
    ), te(
      () => e.max,
      (i) => {
        const u = Wc(e.max);
        u !== i && (s.value = u);
      },
      { immediate: !0 }
    );
    const r = B(() => Nt(l.value) ? "indeterminate" : l.value === s.value ? "complete" : "loading");
    return Kc({
      modelValue: l,
      max: s,
      progressState: r
    }), (i, u) => (b(), _(o(O), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": o(s),
      "aria-valuemin": 0,
      "aria-valuenow": Po(o(l)) ? o(l) : void 0,
      "aria-valuetext": i.getValueLabel(o(l), o(s)),
      "aria-label": i.getValueLabel(o(l), o(s)),
      role: "progressbar",
      "data-state": r.value,
      "data-value": o(l) ?? void 0,
      "data-max": o(s)
    }, {
      default: y(() => [
        C(i.$slots, "default", { modelValue: o(l) })
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), by = /* @__PURE__ */ w({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = zc();
    return T(), (n, l) => {
      var s;
      return b(), _(o(O), k(t, {
        "data-state": o(e).progressState.value,
        "data-value": ((s = o(e).modelValue) == null ? void 0 : s.value) ?? void 0,
        "data-max": o(e).max.value
      }), {
        default: y(() => [
          C(n.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), [jc, Uc] = Q("RadioGroupRoot"), Cy = /* @__PURE__ */ w({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: !1 },
    name: {},
    required: { type: Boolean, default: !1 },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l } = T(), s = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: r, loop: i, orientation: u, name: d, required: c, dir: p } = ne(e), f = be(p);
    return Uc({
      modelValue: s,
      changeModelValue: (v) => {
        s.value = v;
      },
      disabled: r,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: c
    }), (v, g) => (b(), _(o(At), {
      "as-child": "",
      orientation: o(u),
      dir: o(f),
      loop: o(i)
    }, {
      default: y(() => [
        Y(o(O), {
          ref: o(l),
          role: "radiogroup",
          "data-disabled": o(r) ? "" : void 0,
          "as-child": v.asChild,
          as: v.as,
          required: o(c),
          "aria-orientation": o(u),
          "aria-required": o(c),
          dir: o(f),
          name: o(d)
        }, {
          default: y(() => [
            C(v.$slots, "default", { modelValue: o(s) })
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Gc = ["value", "checked", "name", "disabled", "required"], qc = /* @__PURE__ */ w({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, l = ae(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: s } = ne(e), { forwardRef: r, currentElement: i } = T(), u = Qe(i), d = B(() => {
      var p;
      return e.id && i.value ? ((p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText) ?? e.value : void 0;
    });
    function c(p) {
      l.value = !0, u.value && p.stopPropagation();
    }
    return (p, f) => (b(), _(o(O), k(p.$attrs, {
      id: p.id,
      ref: o(r),
      role: "radio",
      type: p.as === "button" ? "button" : void 0,
      as: p.as,
      "aria-checked": o(l),
      "aria-label": d.value,
      "as-child": p.asChild,
      disabled: p.disabled ? "" : void 0,
      "data-state": o(l) ? "checked" : "unchecked",
      "data-disabled": p.disabled ? "" : void 0,
      value: o(s),
      required: p.required,
      name: p.name,
      onClick: ie(c, ["stop"])
    }), {
      default: y(() => [
        C(p.$slots, "default", { checked: o(l) }),
        o(u) ? (b(), ce("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: o(s),
          checked: !!o(l),
          name: p.name,
          disabled: p.disabled,
          required: p.required,
          style: {
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          }
        }, null, 8, Gc)) : pe("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [Yc, Xc] = Q("RadioGroupItem"), wy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e, currentElement: n } = T(), l = jc(), s = B(() => l.disabled.value || t.disabled), r = B(() => l.required.value || t.required), i = B(() => {
      var p;
      return ((p = l.modelValue) == null ? void 0 : p.value) === t.value;
    });
    Xc({ disabled: s, checked: i });
    const u = I(!1), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    je("keydown", (p) => {
      d.includes(p.key) && (u.value = !0);
    }), je("keyup", () => {
      u.value = !1;
    });
    function c() {
      setTimeout(() => {
        var p;
        u.value && ((p = n.value) == null || p.click());
      }, 0);
    }
    return (p, f) => (b(), _(o(Ot), {
      checked: i.value,
      disabled: s.value,
      "as-child": "",
      focusable: !s.value,
      active: i.value
    }, {
      default: y(() => [
        Y(qc, k({ ...p.$attrs, ...t }, {
          ref: o(e),
          checked: i.value,
          required: r.value,
          disabled: s.value,
          "onUpdate:checked": f[0] || (f[0] = (v) => o(l).changeModelValue(p.value)),
          onKeydown: f[1] || (f[1] = re(ie(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: c
        }), {
          default: y(() => [
            C(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required", "disabled"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), _y = /* @__PURE__ */ w({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t } = T(), e = Yc();
    return (n, l) => (b(), _(o(Pe), {
      present: n.forceMount || o(e).checked.value
    }, {
      default: y(() => [
        Y(o(O), k({
          ref: o(t),
          "data-state": o(e).checked.value ? "checked" : "unchecked",
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "as-child": n.asChild,
          as: n.as
        }, n.$attrs), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
});
function Zc(a) {
  const t = B(() => a.start.value ? !!a.isDateDisabled(a.start.value) : !1), e = B(() => a.end.value ? !!a.isDateDisabled(a.end.value) : !1), n = B(
    () => t.value || e.value ? !1 : !!(a.start.value && a.end.value && ke(a.end.value, a.start.value))
  ), l = (c) => a.start.value ? Te(a.start.value, c) : !1, s = (c) => a.end.value ? Te(a.end.value, c) : !1, r = (c) => a.start.value && Te(a.start.value, c) || a.end.value && Te(a.end.value, c) ? !0 : a.end.value && a.start.value ? wr(c, a.start.value, a.end.value) : !1, i = B(() => {
    if (a.start.value && a.end.value || !a.start.value || !a.focusedValue.value)
      return null;
    const c = ke(a.start.value, a.focusedValue.value), p = c ? a.start.value : a.focusedValue.value, f = c ? a.focusedValue.value : a.start.value;
    return Te(p.add({ days: 1 }), f) ? {
      start: p,
      end: f
    } : hl(p, f, a.isDateUnavailable, a.isDateDisabled) ? {
      start: p,
      end: f
    } : null;
  });
  return {
    isInvalid: n,
    isSelected: r,
    highlightedRange: i,
    isSelectionStart: l,
    isSelectionEnd: s,
    isHighlightedStart: (c) => !i.value || !i.value.start ? !1 : Te(i.value.start, c),
    isHighlightedEnd: (c) => !i.value || !i.value.end ? !1 : Te(i.value.end, c)
  };
}
const Jc = { style: { border: "0px", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(50%)", height: "1px", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", "white-space": "nowrap", width: "1px" } }, Qc = {
  role: "heading",
  "aria-level": "2"
}, [ea, ep] = Q("RangeCalendarRoot"), tp = /* @__PURE__ */ w({
  __name: "RangeCalendarRoot",
  props: {
    defaultPlaceholder: {},
    defaultValue: { default: () => ({ start: void 0, end: void 0 }) },
    modelValue: {},
    placeholder: { default: void 0 },
    pagedNavigation: { type: Boolean, default: !1 },
    preventDeselect: { type: Boolean, default: !1 },
    weekStartsOn: { default: 0 },
    weekdayFormat: { default: "narrow" },
    calendarLabel: {},
    fixedWeeks: { type: Boolean, default: !1 },
    maxValue: {},
    minValue: {},
    locale: { default: "en" },
    numberOfMonths: { default: 1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    initialFocus: { type: Boolean, default: !1 },
    isDateDisabled: { type: Function, default: void 0 },
    isDateUnavailable: { type: Function, default: void 0 },
    dir: {},
    nextPage: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, {
      disabled: l,
      readonly: s,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      preventDeselect: f,
      isDateUnavailable: v,
      isDateDisabled: g,
      calendarLabel: m,
      maxValue: S,
      minValue: x,
      locale: D,
      dir: h,
      nextPage: E,
      prevPage: P
    } = ne(e), { primitiveElement: $, currentElement: R } = Ae(), M = be(h), V = I(), A = I(), L = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), U = jt({
      defaultPlaceholder: e.placeholder,
      defaultValue: L.value.start
    }), H = I(L.value.start), J = I(L.value.end), N = ae(e, "placeholder", n, {
      defaultValue: e.defaultPlaceholder ?? U.copy(),
      passive: e.placeholder === void 0
    });
    function F(we) {
      N.value = we.copy();
    }
    const {
      fullCalendarLabel: W,
      headingValue: z,
      isDateDisabled: X,
      isDateUnavailable: G,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: ee,
      grid: fe,
      weekdays: q,
      isOutsideVisibleView: oe,
      nextPage: he,
      prevPage: Ce,
      formatter: ge
    } = Wl({
      locale: D,
      placeholder: N,
      weekStartsOn: u,
      fixedWeeks: c,
      numberOfMonths: p,
      minValue: x,
      maxValue: S,
      disabled: l,
      weekdayFormat: d,
      pagedNavigation: i,
      isDateDisabled: g.value,
      isDateUnavailable: v.value,
      calendarLabel: m,
      nextPage: E,
      prevPage: P
    }), {
      isInvalid: De,
      isSelected: ue,
      highlightedRange: Se,
      isSelectionStart: Ve,
      isSelectionEnd: Ke,
      isHighlightedStart: aa,
      isHighlightedEnd: ir
    } = Zc({
      start: H,
      end: J,
      isDateDisabled: X,
      isDateUnavailable: G,
      focusedValue: A
    });
    return te(L, (we) => {
      we.start && we.end && (H.value && !Ee(H.value, we.start) && (H.value = we.start.copy()), J.value && !Ee(J.value, we.end) && (J.value = we.end.copy()));
    }), te(H, (we) => {
      we && !Ee(we, N.value) && F(we), n("update:startValue", we);
    }), te([H, J], ([we, ot]) => {
      const He = L.value;
      if (!(He && He.start && He.end && we && ot && Ee(He.start, we) && Ee(He.end, ot)))
        if (we && ot) {
          if (He.start && He.end && Ee(He.start, we) && Ee(He.end, ot))
            return;
          ke(ot, we) ? L.value = {
            start: ot.copy(),
            end: we.copy()
          } : L.value = {
            start: we.copy(),
            end: ot.copy()
          };
        } else He.start && He.end && (L.value = {
          start: void 0,
          end: void 0
        });
    }), ep({
      isDateUnavailable: G,
      startValue: H,
      endValue: J,
      formatter: ge,
      modelValue: L,
      placeholder: N,
      disabled: l,
      initialFocus: r,
      pagedNavigation: i,
      weekStartsOn: u,
      weekdayFormat: d,
      fixedWeeks: c,
      numberOfMonths: p,
      readonly: s,
      preventDeselect: f,
      fullCalendarLabel: W,
      headingValue: z,
      isInvalid: De,
      isDateDisabled: X,
      highlightedRange: Se,
      focusedValue: A,
      lastPressedDateValue: V,
      isSelected: ue,
      isSelectionEnd: Ke,
      isSelectionStart: Ve,
      isNextButtonDisabled: Z,
      isPrevButtonDisabled: ee,
      isOutsideVisibleView: oe,
      nextPage: he,
      prevPage: Ce,
      parentElement: R,
      onPlaceholderChange: F,
      locale: D,
      dir: M,
      isHighlightedStart: aa,
      isHighlightedEnd: ir
    }), se(() => {
      r.value && Cl(R.value);
    }), (we, ot) => (b(), _(o(O), {
      ref_key: "primitiveElement",
      ref: $,
      as: we.as,
      "as-child": we.asChild,
      role: "application",
      "aria-label": o(W),
      "data-readonly": o(s) ? "" : void 0,
      "data-disabled": o(l) ? "" : void 0,
      "data-invalid": o(De) ? "" : void 0,
      dir: o(M)
    }, {
      default: y(() => [
        Ue("div", Jc, [
          Ue("div", Qc, $e(o(W)), 1)
        ]),
        C(we.$slots, "default", {
          date: o(N),
          grid: o(fe),
          weekDays: o(q),
          weekStartsOn: o(u),
          locale: o(D),
          fixedWeeks: o(c)
        })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-label", "data-readonly", "data-disabled", "data-invalid", "dir"]));
  }
}), ap = /* @__PURE__ */ w({
  __name: "RangeCalendarHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), np = /* @__PURE__ */ w({
  __name: "RangeCalendarHeading",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), _(o(O), k(t, {
      "data-disabled": o(e).disabled.value ? "" : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default", {
          headingValue: o(e).headingValue.value
        }, () => [
          ve($e(o(e).headingValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["data-disabled"]));
  }
}), op = /* @__PURE__ */ w({
  __name: "RangeCalendarGrid",
  props: {
    asChild: { type: Boolean },
    as: { default: "table" }
  },
  setup(a) {
    const t = a, e = ea();
    return (n, l) => (b(), _(o(O), k(t, {
      tabindex: "-1",
      role: "grid",
      "aria-readonly": o(e).readonly ? !0 : void 0,
      "aria-disabled": o(e).disabled ? !0 : void 0,
      "data-readonly": o(e).readonly ? "" : void 0,
      "data-disabled": o(e).disabled ? "" : void 0
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-readonly", "aria-disabled", "data-readonly", "data-disabled"]));
  }
}), lp = /* @__PURE__ */ w({
  __name: "RangeCalendarCell",
  props: {
    date: {},
    asChild: { type: Boolean },
    as: { default: "td" }
  },
  setup(a) {
    const t = ea();
    return (e, n) => {
      var l, s;
      return b(), _(o(O), {
        as: e.as,
        "as-child": e.asChild,
        role: "gridcell",
        "aria-selected": o(t).isSelected(e.date) ? !0 : void 0,
        "aria-disabled": o(t).isDateDisabled(e.date) || ((s = (l = o(t)).isDateUnavailable) == null ? void 0 : s.call(l, e.date)),
        "data-disabled": o(t).isDateDisabled(e.date) ? "" : void 0
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["as", "as-child", "aria-selected", "aria-disabled", "data-disabled"]);
    };
  }
}), sp = /* @__PURE__ */ w({
  __name: "RangeCalendarHeadCell",
  props: {
    asChild: { type: Boolean },
    as: { default: "th" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rp = /* @__PURE__ */ w({
  __name: "RangeCalendarNext",
  props: {
    step: {},
    nextPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = B(() => n.disabled.value || n.isNextButtonDisabled(t.step, t.nextPage)), n = ea();
    return (l, s) => (b(), _(o(O), k(t, {
      "aria-label": "Next page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).nextPage(t.step, t.nextPage))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), ip = /* @__PURE__ */ w({
  __name: "RangeCalendarPrev",
  props: {
    step: {},
    prevPage: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = B(() => n.disabled.value || n.isPrevButtonDisabled(t.step, t.prevPage)), n = ea();
    return (l, s) => (b(), _(o(O), k(t, {
      "aria-label": "Previous page",
      type: l.as === "button" ? "button" : void 0,
      "aria-disabled": e.value || void 0,
      "data-disabled": e.value || void 0,
      disabled: e.value,
      onClick: s[0] || (s[0] = (r) => o(n).prevPage(t.step, t.prevPage))
    }), {
      default: y(() => [
        C(l.$slots, "default", {}, () => [
          ve("Prev page")
        ])
      ]),
      _: 3
    }, 16, ["type", "aria-disabled", "data-disabled", "disabled"]));
  }
}), up = /* @__PURE__ */ w({
  __name: "RangeCalendarGridHead",
  props: {
    asChild: { type: Boolean },
    as: { default: "thead" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), k(t, { "aria-hidden": "true" }), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridBody",
  props: {
    asChild: { type: Boolean },
    as: { default: "tbody" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cp = /* @__PURE__ */ w({
  __name: "RangeCalendarGridRow",
  props: {
    asChild: { type: Boolean },
    as: { default: "tr" }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pp = /* @__PURE__ */ w({
  __name: "RangeCalendarCellTrigger",
  props: {
    day: {},
    month: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = ea(), n = et(), { primitiveElement: l, currentElement: s } = Ae(), r = B(() => e.formatter.custom(Le(t.day), {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })), i = B(() => e.isDateDisabled(t.day)), u = B(() => {
      var V;
      return (V = e.isDateUnavailable) == null ? void 0 : V.call(e, t.day);
    }), d = B(() => e.isSelected(t.day)), c = B(() => e.isSelectionStart(t.day)), p = B(() => e.isSelectionEnd(t.day)), f = B(() => e.isHighlightedStart(t.day)), v = B(() => e.isHighlightedEnd(t.day)), g = B(() => e.highlightedRange.value ? _r(t.day, e.highlightedRange.value.start, e.highlightedRange.value.end) : !1), m = "[data-radix-vue-calendar-cell-trigger]:not([data-disabled]):not([data-outside-month]):not([data-outside-visible-months])", S = B(() => fl(t.day, zn())), x = B(() => !vl(t.day, t.month)), D = B(
      () => e.isOutsideVisibleView(t.day)
    ), h = B(() => t.day.day.toLocaleString(e.locale.value)), E = B(() => !e.disabled.value && Te(t.day, e.placeholder.value));
    function P(V) {
      var A;
      if (!e.readonly.value && !(e.isDateDisabled(V) || (A = e.isDateUnavailable) != null && A.call(e, V))) {
        if (e.lastPressedDateValue.value = V.copy(), e.startValue.value && e.highlightedRange.value === null) {
          if (Te(V, e.startValue.value) && !e.preventDeselect.value && !e.endValue.value) {
            e.startValue.value = void 0, e.onPlaceholderChange(V);
            return;
          } else if (!e.endValue.value) {
            e.lastPressedDateValue.value && Te(e.lastPressedDateValue.value, V) && (e.startValue.value = V.copy());
            return;
          }
        }
        if (e.startValue.value && Te(e.startValue.value, V) && !e.preventDeselect.value && !e.endValue.value) {
          e.startValue.value = void 0, e.onPlaceholderChange(V);
          return;
        }
        e.startValue.value ? e.endValue.value ? e.endValue.value && e.startValue.value && (e.endValue.value = void 0, e.startValue.value = V.copy()) : e.endValue.value = V.copy() : e.startValue.value = V.copy();
      }
    }
    function $() {
      P(t.day);
    }
    function R() {
      var V;
      e.isDateDisabled(t.day) || (V = e.isDateUnavailable) != null && V.call(e, t.day) || (e.focusedValue.value = t.day.copy());
    }
    function M(V) {
      V.preventDefault(), V.stopPropagation();
      const A = e.parentElement.value, L = A ? Array.from(A.querySelectorAll(m)) : [];
      let H = L.indexOf(s.value);
      const J = 7, N = e.dir.value === "rtl" ? -1 : 1;
      switch (V.code) {
        case n.ARROW_RIGHT:
          H += N;
          break;
        case n.ARROW_LEFT:
          H -= N;
          break;
        case n.ARROW_UP:
          H -= J;
          break;
        case n.ARROW_DOWN:
          H += J;
          break;
        case n.ENTER:
        case n.SPACE_CODE:
          P(t.day);
          return;
        default:
          return;
      }
      if (H >= 0 && H < L.length) {
        L[H].focus();
        return;
      }
      if (H < 0) {
        if (e.isPrevButtonDisabled("month"))
          return;
        e.prevPage(), le(() => {
          const F = A ? Array.from(A.querySelectorAll(m)) : [];
          F[F.length - Math.abs(H)].focus();
        });
        return;
      }
      if (H >= L.length) {
        if (e.isNextButtonDisabled("month"))
          return;
        e.nextPage(), le(() => {
          (A ? Array.from(A.querySelectorAll(m)) : [])[H - L.length].focus();
        });
      }
    }
    return (V, A) => (b(), _(o(O), k({
      ref_key: "primitiveElement",
      ref: l
    }, t, {
      role: "button",
      "aria-label": r.value,
      "data-radix-vue-calendar-cell-trigger": "",
      "aria-selected": d.value ? !0 : void 0,
      "aria-disabled": x.value || i.value || u.value ? !0 : void 0,
      "data-highlighted": g.value ? "" : void 0,
      "data-selection-start": c.value ? !0 : void 0,
      "data-selection-end": p.value ? !0 : void 0,
      "data-highlighted-start": f.value ? !0 : void 0,
      "data-highlighted-end": v.value ? !0 : void 0,
      "data-selected": d.value ? !0 : void 0,
      "data-outside-visible-view": D.value ? "" : void 0,
      "data-value": V.day.toString(),
      "data-disabled": i.value || x.value ? "" : void 0,
      "data-unavailable": u.value ? "" : void 0,
      "data-today": S.value ? "" : void 0,
      "data-outside-month": x.value ? "" : void 0,
      "data-focused": E.value ? "" : void 0,
      tabindex: E.value ? 0 : x.value || i.value ? void 0 : -1,
      onClick: $,
      onFocusin: R,
      onMouseenter: R,
      onKeydown: re(M, ["up", "down", "left", "right", "enter", "space"])
    }), {
      default: y(() => [
        C(V.$slots, "default", { dayValue: h.value }, () => [
          ve($e(h.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-selected", "aria-disabled", "data-highlighted", "data-selection-start", "data-selection-end", "data-highlighted-start", "data-highlighted-end", "data-selected", "data-outside-visible-view", "data-value", "data-disabled", "data-unavailable", "data-today", "data-outside-month", "data-focused", "tabindex"]));
  }
}), [ze, fp] = Q("ScrollAreaRoot"), xy = /* @__PURE__ */ w({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, n = I(0), l = I(0), s = I(), r = I(), i = I(), u = I(), d = I(!1), c = I(!1), { type: p, dir: f, scrollHideDelay: v } = ne(e), g = be(f);
    function m() {
      var h;
      (h = s.value) == null || h.scrollTo({
        top: 0
      });
    }
    function S() {
      var h;
      (h = s.value) == null || h.scrollTo({
        top: 0,
        left: 0
      });
    }
    t({
      /** Viewport element within ScrollArea */
      viewport: s,
      /** Scroll viewport to top */
      scrollTop: m,
      /** Scroll viewport to top-left */
      scrollTopLeft: S
    });
    const { forwardRef: x, currentElement: D } = T();
    return fp({
      type: p,
      dir: g,
      scrollHideDelay: v,
      scrollArea: D,
      viewport: s,
      onViewportChange: (h) => {
        s.value = h || void 0;
      },
      content: r,
      onContentChange: (h) => {
        r.value = h;
      },
      scrollbarX: i,
      scrollbarXEnabled: d,
      scrollbarY: u,
      scrollbarYEnabled: c,
      onScrollbarXChange: (h) => {
        i.value = h || void 0;
      },
      onScrollbarYChange: (h) => {
        u.value = h || void 0;
      },
      onScrollbarXEnabledChange: (h) => {
        d.value = h;
      },
      onScrollbarYEnabledChange: (h) => {
        c.value = h;
      },
      onCornerWidthChange: (h) => {
        n.value = h;
      },
      onCornerHeightChange: (h) => {
        l.value = h;
      }
    }), (h, E) => (b(), _(o(O), {
      ref: o(x),
      "as-child": e.asChild,
      as: h.as,
      dir: o(g),
      style: Oe({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${n.value}px`,
        "--radix-scroll-area-corner-height": `${l.value}px`
      })
    }, {
      default: y(() => [
        C(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), Sy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a, { expose: t }) {
    const e = a, { nonce: n } = ne(e), l = Xa(n), s = ze(), r = I();
    se(() => {
      s.onViewportChange(r.value), s.onContentChange(u.value);
    }), t({
      viewportElement: r
    });
    const { forwardRef: i, currentElement: u } = T();
    return (d, c) => (b(), ce(_e, null, [
      Ue("div", k({
        ref_key: "viewportElement",
        ref: r,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: o(s).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: o(s).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, d.$attrs, { tabindex: 0 }), [
        Y(o(O), {
          ref: o(i),
          style: { minWidth: "100%", display: "table" },
          "as-child": e.asChild,
          as: d.as
        }, {
          default: y(() => [
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      Y(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
function Cs(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function nn(a) {
  const t = ws(a.viewport, a.content), e = a.scrollbar.paddingStart + a.scrollbar.paddingEnd, n = (a.scrollbar.size - e) * t;
  return Math.max(n, 18);
}
function ws(a, t) {
  const e = a / t;
  return Number.isNaN(e) ? 0 : e;
}
function vp(a, t = () => {
}) {
  let e = { left: a.scrollLeft, top: a.scrollTop }, n = 0;
  return function l() {
    const s = { left: a.scrollLeft, top: a.scrollTop }, r = e.left !== s.left, i = e.top !== s.top;
    (r || i) && t(), e = s, n = window.requestAnimationFrame(l);
  }(), () => window.cancelAnimationFrame(n);
}
function Xo(a, t, e = "ltr") {
  const n = nn(t), l = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - l, r = t.content - t.viewport, i = s - n, u = e === "ltr" ? [0, r] : [r * -1, 0], d = Kt(
    a,
    u[0],
    u[1]
  );
  return Cs([0, r], [0, i])(d);
}
function Ia(a) {
  return a ? Number.parseInt(a, 10) : 0;
}
function mp(a, t, e, n = "ltr") {
  const l = nn(e), s = l / 2, r = t || s, i = l - r, u = e.scrollbar.paddingStart + r, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, c = e.content - e.viewport, p = n === "ltr" ? [0, c] : [c * -1, 0];
  return Cs(
    [u, d],
    p
  )(a);
}
function Zo(a, t) {
  return a > 0 && a < t;
}
const _s = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ze(), s = on(), r = ln(), { forwardRef: i, currentElement: u } = T(), d = I(""), c = I();
    function p(x) {
      var D, h;
      if (c.value) {
        const E = x.clientX - ((D = c.value) == null ? void 0 : D.left), P = x.clientY - ((h = c.value) == null ? void 0 : h.top);
        n("onDragScroll", { x: E, y: P });
      }
    }
    function f(x) {
      x.button === 0 && (x.target.setPointerCapture(x.pointerId), c.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", l.viewport && (l.viewport.value.style.scrollBehavior = "auto"), p(x));
    }
    function v(x) {
      p(x);
    }
    function g(x) {
      const D = x.target;
      D.hasPointerCapture(x.pointerId) && D.releasePointerCapture(x.pointerId), document.body.style.webkitUserSelect = d.value, l.viewport && (l.viewport.value.style.scrollBehavior = ""), c.value = void 0;
    }
    function m(x) {
      var P;
      const D = x.target, h = (P = u.value) == null ? void 0 : P.contains(D), E = s.sizes.value.content - s.sizes.value.viewport;
      h && s.handleWheelScroll(x, E);
    }
    se(() => {
      document.addEventListener("wheel", m, { passive: !1 });
    }), Ie(() => {
      document.removeEventListener("wheel", m);
    });
    function S() {
      var x, D, h, E, P;
      u.value && (e.isHorizontal ? s.handleSizeChange({
        content: ((x = l.viewport.value) == null ? void 0 : x.scrollWidth) ?? 0,
        viewport: ((D = l.viewport.value) == null ? void 0 : D.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }) : s.handleSizeChange({
        content: ((h = l.viewport.value) == null ? void 0 : h.scrollHeight) ?? 0,
        viewport: ((E = l.viewport.value) == null ? void 0 : E.offsetHeight) ?? 0,
        scrollbar: {
          size: ((P = u.value) == null ? void 0 : P.clientHeight) ?? 0,
          paddingStart: Ia(getComputedStyle(u.value).paddingLeft),
          paddingEnd: Ia(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return Ze(u, S), Ze(l.content, S), (x, D) => (b(), _(o(O), {
      ref: o(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: o(r).as.value,
      "as-child": o(r).asChild.value,
      onPointerdown: f,
      onPointermove: v,
      onPointerup: g
    }, {
      default: y(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), hp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarX",
  setup(a) {
    const t = ze(), e = on(), { forwardRef: n, currentElement: l } = T();
    se(() => {
      l.value && t.onScrollbarXChange(l.value);
    });
    const s = B(() => e.sizes.value);
    return (r, i) => (b(), _(_s, {
      ref: o(n),
      "is-horizontal": !0,
      "data-orientation": "horizontal",
      style: Oe({
        bottom: 0,
        left: o(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: o(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": s.value ? `${o(nn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.x))
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), yp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarY",
  setup(a) {
    const t = ze(), e = on(), { forwardRef: n, currentElement: l } = T();
    se(() => {
      l.value && t.onScrollbarYChange(l.value);
    });
    const s = B(() => e.sizes.value);
    return (r, i) => (b(), _(_s, {
      ref: o(n),
      "is-horizontal": !1,
      "data-orientation": "vertical",
      style: Oe({
        top: 0,
        right: o(t).dir.value === "ltr" ? 0 : void 0,
        left: o(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": s.value ? `${o(nn)(s.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => o(e).onDragScroll(u.y))
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [on, gp] = Q("ScrollAreaScrollbarVisible"), Do = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarVisible",
  setup(a) {
    const t = ze(), e = ln(), { forwardRef: n } = T(), l = I({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), s = B(() => {
      const x = ws(l.value.viewport, l.value.content);
      return x > 0 && x < 1;
    }), r = I(), i = I(0);
    function u(x, D) {
      if (v.value) {
        const h = t.viewport.value.scrollLeft + x.deltaY;
        t.viewport.value.scrollLeft = h, Zo(h, D) && x.preventDefault();
      } else {
        const h = t.viewport.value.scrollTop + x.deltaY;
        t.viewport.value.scrollTop = h, Zo(h, D) && x.preventDefault();
      }
    }
    function d(x, D) {
      v.value ? i.value = D.x : i.value = D.y;
    }
    function c(x) {
      i.value = 0;
    }
    function p(x) {
      l.value = x;
    }
    function f(x, D) {
      return mp(
        x,
        i.value,
        l.value,
        D
      );
    }
    const v = B(
      () => e.isHorizontal.value
    );
    function g(x) {
      v.value ? t.viewport.value.scrollLeft = f(
        x,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(x);
    }
    function m() {
      if (v.value) {
        if (t.viewport.value && r.value) {
          const x = t.viewport.value.scrollLeft, D = Xo(
            x,
            l.value,
            t.dir.value
          );
          r.value.style.transform = `translate3d(${D}px, 0, 0)`;
        }
      } else if (t.viewport.value && r.value) {
        const x = t.viewport.value.scrollTop, D = Xo(x, l.value);
        r.value.style.transform = `translate3d(0, ${D}px, 0)`;
      }
    }
    function S(x) {
      r.value = x;
    }
    return gp({
      sizes: l,
      hasThumb: s,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: c,
      handleSizeChange: p,
      onThumbPositionChange: m,
      onThumbChange: S,
      onDragScroll: g
    }), (x, D) => v.value ? (b(), _(hp, k({ key: 0 }, x.$attrs, { ref: o(n) }), {
      default: y(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 16)) : (b(), _(yp, k({ key: 1 }, x.$attrs, { ref: o(n) }), {
      default: y(() => [
        C(x.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xs = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), e = ln(), { forwardRef: n } = T(), l = I(!1), s = Hn(() => {
      if (t.viewport.value) {
        const r = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        l.value = e.isHorizontal.value ? r : i;
      }
    }, 10);
    return se(() => s()), Ze(t.viewport, s), Ze(t.content, s), (r, i) => (b(), _(o(Pe), {
      present: r.forceMount || l.value
    }, {
      default: y(() => [
        Y(Do, k(r.$attrs, {
          ref: o(n),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), bp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), { forwardRef: e } = T();
    let n;
    const l = I(!1);
    function s() {
      window.clearTimeout(n), l.value = !0;
    }
    function r() {
      n = window.setTimeout(() => {
        l.value = !1;
      }, t.scrollHideDelay.value);
    }
    return se(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", s), i.addEventListener("pointerleave", r));
    }), Ie(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(n), i.removeEventListener("pointerenter", s), i.removeEventListener("pointerleave", r));
    }), (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || l.value
    }, {
      default: y(() => [
        Y(xs, k(i.$attrs, {
          ref: o(e),
          "data-state": l.value ? "visible" : "hidden"
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Cp = /* @__PURE__ */ w({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = ze(), e = ln(), { forwardRef: n } = T(), { state: l, dispatch: s } = Al("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    ye((i) => {
      if (l.value === "idle") {
        const u = window.setTimeout(
          () => s("HIDE"),
          t.scrollHideDelay.value
        );
        i(() => {
          window.clearTimeout(u);
        });
      }
    });
    const r = Hn(() => s("SCROLL_END"), 100);
    return ye((i) => {
      const u = t.viewport.value, d = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (u) {
        let c = u[d];
        const p = () => {
          const f = u[d];
          c !== f && (s("SCROLL"), r()), c = f;
        };
        u.addEventListener("scroll", p), i(() => {
          u.removeEventListener("scroll", p);
        });
      }
    }), (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(l) !== "hidden"
    }, {
      default: y(() => [
        Y(Do, k(i.$attrs, { ref: o(n) }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [ln, wp] = Q("ScrollAreaScrollbar"), Ey = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), n = ze(), l = B(() => t.orientation === "horizontal");
    te(
      l,
      () => {
        l.value ? n.onScrollbarXEnabledChange(!0) : n.onScrollbarYEnabledChange(!0);
      },
      { immediate: !0 }
    ), Ie(() => {
      n.onScrollbarXEnabledChange(!1), n.onScrollbarYEnabledChange(!1);
    });
    const { orientation: s, forceMount: r, asChild: i, as: u } = ne(t);
    return wp({
      orientation: s,
      forceMount: r,
      isHorizontal: l,
      as: u,
      asChild: i
    }), (d, c) => o(n).type.value === "hover" ? (b(), _(bp, k({ key: 0 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "scroll" ? (b(), _(Cp, k({ key: 1 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "auto" ? (b(), _(xs, k({ key: 2 }, d.$attrs, {
      ref: o(e),
      "force-mount": o(r)
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : o(n).type.value === "always" ? (b(), _(Do, k({ key: 3 }, d.$attrs, {
      ref: o(e),
      "data-state": "visible"
    }), {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Py = /* @__PURE__ */ w({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ze(), n = on();
    function l(f) {
      const g = f.target.getBoundingClientRect(), m = f.clientX - g.left, S = f.clientY - g.top;
      n.handleThumbDown(f, { x: m, y: S });
    }
    function s(f) {
      n.handleThumbUp(f);
    }
    const { forwardRef: r, currentElement: i } = T(), u = I(), d = B(() => e.viewport.value);
    function c() {
      if (!u.value) {
        const f = vp(
          d.value,
          n.onThumbPositionChange
        );
        u.value = f, n.onThumbPositionChange();
      }
    }
    const p = B(() => n.sizes.value);
    return ui(p, () => {
      n.onThumbChange(i.value), d.value && (n.onThumbPositionChange(), d.value.addEventListener("scroll", c));
    }), Ie(() => {
      var f;
      d.value.removeEventListener("scroll", c), (f = e.viewport.value) == null || f.removeEventListener("scroll", c);
    }), (f, v) => (b(), _(o(O), {
      ref: o(r),
      "data-state": o(n).hasThumb ? "visible" : "hidden",
      style: {
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      },
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: l,
      onPointerup: s
    }, {
      default: y(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "as-child", "as"]));
  }
}), _p = /* @__PURE__ */ w({
  __name: "ScrollAreaCornerImpl",
  setup(a) {
    const t = ze(), e = I(0), n = I(0), l = B(() => !!e.value && !!n.value);
    function s() {
      var u;
      const i = ((u = t.scrollbarX.value) == null ? void 0 : u.offsetHeight) || 0;
      t.onCornerHeightChange(i), n.value = i;
    }
    function r() {
      var u;
      const i = ((u = t.scrollbarY.value) == null ? void 0 : u.offsetWidth) || 0;
      t.onCornerWidthChange(i), e.value = i;
    }
    return Ze(t.scrollbarX.value, s), Ze(t.scrollbarY.value, r), te(() => t.scrollbarX.value, s), te(() => t.scrollbarY.value, r), (i, u) => {
      var d;
      return l.value ? (b(), _(o(O), k({
        key: 0,
        style: {
          width: `${e.value}px`,
          height: `${n.value}px`,
          position: "absolute",
          right: o(t).dir.value === "ltr" ? 0 : void 0,
          left: o(t).dir.value === "rtl" ? 0 : void 0,
          bottom: 0
        }
      }, (d = i.$parent) == null ? void 0 : d.$props), {
        default: y(() => [
          C(i.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])) : pe("", !0);
    };
  }
}), Dy = /* @__PURE__ */ w({
  __name: "ScrollAreaCorner",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), n = ze(), l = B(
      () => !!n.scrollbarX.value && !!n.scrollbarY.value
    ), s = B(
      () => n.type.value !== "scroll" && l.value
    );
    return (r, i) => s.value ? (b(), _(_p, k({ key: 0 }, t, { ref: o(e) }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), xp = ["default-value"], Sp = /* @__PURE__ */ w({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = I();
    return (l, s) => (b(), _(o(Yt), { "as-child": "" }, {
      default: y(() => [
        Ha(Ue("select", k({
          ref_key: "selectElement",
          ref: n
        }, t, {
          "onUpdate:modelValue": s[0] || (s[0] = (r) => Xe(e) ? e.value = r : null),
          "default-value": o(e)
        }), [
          C(l.$slots, "default")
        ], 16, xp), [
          [hr, o(e)]
        ])
      ]),
      _: 3
    }));
  }
}), Ep = {
  key: 0,
  value: ""
}, [bt, Ss] = Q("SelectRoot"), [Pp, Dp] = Q("SelectRoot"), $y = /* @__PURE__ */ w({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = I(), i = I(), u = I({
      x: 0,
      y: 0
    }), d = I(!1), { required: c, disabled: p, dir: f } = ne(e), v = be(f);
    Ss({
      triggerElement: r,
      onTriggerChange: (x) => {
        r.value = x;
      },
      valueElement: i,
      onValueElementChange: (x) => {
        i.value = x;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (x) => {
        d.value = x;
      },
      contentId: "",
      modelValue: l,
      onValueChange: (x) => {
        l.value = x;
      },
      open: s,
      required: c,
      onOpenChange: (x) => {
        s.value = x;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: p
    });
    const g = Qe(r), m = I(/* @__PURE__ */ new Set()), S = B(() => Array.from(m.value).map((x) => {
      var D;
      return (D = x.props) == null ? void 0 : D.value;
    }).join(";"));
    return Dp({
      onNativeOptionAdd: (x) => {
        m.value.add(x);
      },
      onNativeOptionRemove: (x) => {
        m.value.delete(x);
      }
    }), (x, D) => (b(), _(o(It), null, {
      default: y(() => [
        C(x.$slots, "default", {
          modelValue: o(l),
          open: o(s)
        }),
        o(g) ? (b(), _(Sp, k({ key: S.value }, x.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: o(c),
          name: x.name,
          autocomplete: x.autocomplete,
          disabled: o(p),
          value: o(l),
          onChange: D[0] || (D[0] = (h) => l.value = h.target.value)
        }), {
          default: y(() => [
            o(l) === void 0 ? (b(), ce("option", Ep)) : pe("", !0),
            (b(!0), ce(_e, null, va(Array.from(m.value), (h) => (b(), _(Ge(h), k({ ref_for: !0 }, h.props, {
              key: h.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : pe("", !0)
      ]),
      _: 3
    }));
  }
}), $p = [" ", "Enter", "ArrowUp", "ArrowDown"], Bp = [" ", "Enter"], at = 10;
function Es(a) {
  return a === "" || Nt(a);
}
const By = /* @__PURE__ */ w({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = bt(), n = B(() => {
      var v;
      return ((v = e.disabled) == null ? void 0 : v.value) || t.disabled;
    }), { forwardRef: l, currentElement: s } = T();
    e.contentId || (e.contentId = me(void 0, "radix-vue-select-content")), se(() => {
      e.triggerElement = s;
    });
    const { injectCollection: r } = Me(), i = r(), { search: u, handleTypeaheadSearch: d, resetTypeahead: c } = ga(i);
    function p() {
      n.value || (e.onOpenChange(!0), c());
    }
    function f(v) {
      p(), e.triggerPointerDownPosRef.value = {
        x: Math.round(v.pageX),
        y: Math.round(v.pageY)
      };
    }
    return (v, g) => (b(), _(o(Tt), { "as-child": "" }, {
      default: y(() => {
        var m, S, x, D;
        return [
          Y(o(O), {
            ref: o(l),
            role: "combobox",
            type: v.as === "button" ? "button" : void 0,
            "aria-controls": o(e).contentId,
            "aria-expanded": o(e).open.value || !1,
            "aria-required": (m = o(e).required) == null ? void 0 : m.value,
            "aria-autocomplete": "none",
            disabled: n.value,
            dir: (S = o(e)) == null ? void 0 : S.dir.value,
            "data-state": (x = o(e)) != null && x.open.value ? "open" : "closed",
            "data-disabled": n.value ? "" : void 0,
            "data-placeholder": o(Es)((D = o(e).modelValue) == null ? void 0 : D.value) ? "" : void 0,
            "as-child": v.asChild,
            as: v.as,
            onClick: g[0] || (g[0] = (h) => {
              var E;
              (E = h == null ? void 0 : h.currentTarget) == null || E.focus();
            }),
            onPointerdown: g[1] || (g[1] = (h) => {
              if (h.pointerType === "touch")
                return h.preventDefault();
              const E = h.target;
              E.hasPointerCapture(h.pointerId) && E.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && (f(h), h.preventDefault());
            }),
            onPointerup: g[2] || (g[2] = ie(
              (h) => {
                h.pointerType === "touch" && f(h);
              },
              ["prevent"]
            )),
            onKeydown: g[3] || (g[3] = (h) => {
              const E = o(u) !== "";
              !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && E && h.key === " " || (o(d)(h.key), o($p).includes(h.key) && (p(), h.preventDefault()));
            })
          }, {
            default: y(() => [
              C(v.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), Iy = /* @__PURE__ */ w({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [$o, Ip] = Q("SelectItemAlignedPosition"), Tp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(a, { emit: t }) {
    const e = a, n = t, { injectCollection: l } = Me(), s = bt(), r = Ct(), i = l(), u = I(!1), d = I(!0), c = I(), { forwardRef: p, currentElement: f } = T(), { viewport: v, selectedItem: g, selectedItemText: m, focusSelectedItem: S } = r;
    function x() {
      if (s.triggerElement.value && s.valueElement.value && c.value && f.value && (v != null && v.value) && (g != null && g.value) && (m != null && m.value)) {
        const E = s.triggerElement.value.getBoundingClientRect(), P = f.value.getBoundingClientRect(), $ = s.valueElement.value.getBoundingClientRect(), R = m.value.getBoundingClientRect();
        if (s.dir.value !== "rtl") {
          const ge = R.left - P.left, De = $.left - ge, ue = E.left - De, Se = E.width + ue, Ve = Math.max(Se, P.width), Ke = window.innerWidth - at, aa = Kt(De, at, Ke - Ve);
          c.value.style.minWidth = `${Se}px`, c.value.style.left = `${aa}px`;
        } else {
          const ge = P.right - R.right, De = window.innerWidth - $.right - ge, ue = window.innerWidth - E.right - De, Se = E.width + ue, Ve = Math.max(Se, P.width), Ke = window.innerWidth - at, aa = Kt(
            De,
            at,
            Ke - Ve
          );
          c.value.style.minWidth = `${Se}px`, c.value.style.right = `${aa}px`;
        }
        const M = i.value, V = window.innerHeight - at * 2, A = v.value.scrollHeight, L = window.getComputedStyle(f.value), U = Number.parseInt(
          L.borderTopWidth,
          10
        ), H = Number.parseInt(L.paddingTop, 10), J = Number.parseInt(
          L.borderBottomWidth,
          10
        ), N = Number.parseInt(
          L.paddingBottom,
          10
        ), F = U + H + A + N + J, W = Math.min(
          g.value.offsetHeight * 5,
          F
        ), z = window.getComputedStyle(v.value), X = Number.parseInt(z.paddingTop, 10), G = Number.parseInt(
          z.paddingBottom,
          10
        ), Z = E.top + E.height / 2 - at, ee = V - Z, fe = g.value.offsetHeight / 2, q = g.value.offsetTop + fe, oe = U + H + q, he = F - oe;
        if (oe <= Z) {
          const ge = g.value === M[M.length - 1];
          c.value.style.bottom = "0px";
          const De = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, ue = Math.max(
            ee,
            fe + (ge ? G : 0) + De + J
          ), Se = oe + ue;
          c.value.style.height = `${Se}px`;
        } else {
          const ge = g.value === M[0];
          c.value.style.top = "0px";
          const ue = Math.max(
            Z,
            U + v.value.offsetTop + (ge ? X : 0) + fe
          ) + he;
          c.value.style.height = `${ue}px`, v.value.scrollTop = oe - Z + v.value.offsetTop;
        }
        c.value.style.margin = `${at}px 0`, c.value.style.minHeight = `${W}px`, c.value.style.maxHeight = `${V}px`, n("placed"), requestAnimationFrame(() => u.value = !0);
      }
    }
    const D = I("");
    se(async () => {
      await le(), x(), f.value && (D.value = window.getComputedStyle(f.value).zIndex);
    });
    function h(E) {
      E && d.value === !0 && (x(), S == null || S(), d.value = !1);
    }
    return Ip({
      contentWrapper: c,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: h
    }), (E, P) => (b(), ce("div", {
      ref_key: "contentWrapperElement",
      ref: c,
      style: Oe({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: D.value
      })
    }, [
      Y(o(O), k({
        ref: o(p),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...E.$attrs, ...e }), {
        default: y(() => [
          C(E.$slots, "default")
        ]),
        _: 3
      }, 16)
    ], 4));
  }
}), Rp = /* @__PURE__ */ w({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: at },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const e = Bt(a);
    return (n, l) => (b(), _(o(Pt), k(o(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ta = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Ct, Ap] = Q("SelectContent"), Op = /* @__PURE__ */ w({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    bodyLock: { type: Boolean, default: !0 },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = bt();
    Gn(), ha(e.bodyLock);
    const { createCollection: s } = Me(), r = I();
    ya(r);
    const i = s(r), { search: u, handleTypeaheadSearch: d } = ga(i), c = I(), p = I(), f = I(), v = I(!1), g = I(!1);
    function m() {
      p.value && r.value && $n([p.value, r.value]);
    }
    te(v, () => {
      m();
    });
    const { onOpenChange: S, triggerPointerDownPosRef: x } = l;
    ye((P) => {
      if (!r.value)
        return;
      let $ = { x: 0, y: 0 };
      const R = (V) => {
        var A, L;
        $ = {
          x: Math.abs(
            Math.round(V.pageX) - (((A = x.value) == null ? void 0 : A.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(V.pageY) - (((L = x.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, M = (V) => {
        var A;
        V.pointerType !== "touch" && ($.x <= 10 && $.y <= 10 ? V.preventDefault() : (A = r.value) != null && A.contains(V.target) || S(!1), document.removeEventListener("pointermove", R), x.value = null);
      };
      x.value !== null && (document.addEventListener("pointermove", R), document.addEventListener("pointerup", M, {
        capture: !0,
        once: !0
      })), P(() => {
        document.removeEventListener("pointermove", R), document.removeEventListener("pointerup", M, {
          capture: !0
        });
      });
    });
    function D(P) {
      const $ = P.ctrlKey || P.altKey || P.metaKey;
      if (P.key === "Tab" && P.preventDefault(), !$ && P.key.length === 1 && d(P.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(P.key)) {
        let R = i.value;
        if (["ArrowUp", "End"].includes(P.key) && (R = R.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(P.key)) {
          const M = P.target, V = R.indexOf(M);
          R = R.slice(V + 1);
        }
        setTimeout(() => $n(R)), P.preventDefault();
      }
    }
    const h = B(() => e.position === "popper" ? e : {}), E = Bt(h.value);
    return Ap({
      content: r,
      viewport: c,
      onViewportChange: (P) => {
        c.value = P;
      },
      itemRefCallback: (P, $, R) => {
        var A, L;
        const M = !g.value && !R;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $ || M) && (p.value = P, M && (g.value = !0));
      },
      selectedItem: p,
      selectedItemText: f,
      onItemLeave: () => {
        var P;
        (P = r.value) == null || P.focus();
      },
      itemTextRefCallback: (P, $, R) => {
        var A, L;
        const M = !g.value && !R;
        (((A = l.modelValue) == null ? void 0 : A.value) !== void 0 && ((L = l.modelValue) == null ? void 0 : L.value) === $ || M) && (f.value = P);
      },
      focusSelectedItem: m,
      position: e.position,
      isPositioned: v,
      searchRef: u
    }), (P, $) => (b(), _(o(Ya), {
      "as-child": "",
      onMountAutoFocus: $[6] || ($[6] = ie(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: $[7] || ($[7] = (R) => {
        var M;
        n("closeAutoFocus", R), !R.defaultPrevented && ((M = o(l).triggerElement.value) == null || M.focus({ preventScroll: !0 }), R.preventDefault());
      })
    }, {
      default: y(() => [
        Y(o(yt), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: $[2] || ($[2] = ie(() => {
          }, ["prevent"])),
          onDismiss: $[3] || ($[3] = (R) => o(l).onOpenChange(!1)),
          onEscapeKeyDown: $[4] || ($[4] = (R) => n("escapeKeyDown", R)),
          onPointerDownOutside: $[5] || ($[5] = (R) => n("pointerDownOutside", R))
        }, {
          default: y(() => [
            (b(), _(Ge(
              P.position === "popper" ? Rp : Tp
            ), k({ ...P.$attrs, ...o(E) }, {
              id: o(l).contentId,
              ref: (R) => {
                r.value = o(Be)(R);
              },
              role: "listbox",
              "data-state": o(l).open.value ? "open" : "closed",
              dir: o(l).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: $[0] || ($[0] = ie(() => {
              }, ["prevent"])),
              onPlaced: $[1] || ($[1] = (R) => v.value = !0),
              onKeydown: D
            }), {
              default: y(() => [
                C(P.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), kp = /* @__PURE__ */ w({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(a) {
    return Ss(a.context), (e, n) => C(e.$slots, "default");
  }
}), Mp = { key: 1 }, Ty = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, l = xe(e, t), s = bt(), r = I();
    se(() => {
      r.value = new DocumentFragment();
    });
    const i = I(), u = B(() => e.forceMount || s.open.value);
    return (d, c) => {
      var p;
      return u.value ? (b(), _(o(Pe), {
        key: 0,
        ref_key: "presenceRef",
        ref: i,
        present: !0
      }, {
        default: y(() => [
          Y(Op, K(j({ ...o(l), ...d.$attrs })), {
            default: y(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 16)
        ]),
        _: 3
      }, 512)) : !((p = i.value) != null && p.present) && r.value ? (b(), ce("div", Mp, [
        (b(), _(Wt, { to: r.value }, [
          Y(kp, { context: o(s) }, {
            default: y(() => [
              C(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"]))
      ])) : pe("", !0);
    };
  }
}), Ry = /* @__PURE__ */ w({
  __name: "SelectArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a, e = bt(), n = Ct();
    return (l, s) => o(e).open.value && o(n).position === "popper" ? (b(), _(o(qt), K(k({ key: 0 }, t)), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), Ay = /* @__PURE__ */ w({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(O), k({ "aria-hidden": "" }, t), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Ps, Vp] = Q("SelectItem"), Oy = /* @__PURE__ */ w({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e } = ne(t), n = bt(), l = Ct(ta), { forwardRef: s, currentElement: r } = T(), i = B(() => {
      var m;
      return ((m = n.modelValue) == null ? void 0 : m.value) === t.value;
    }), u = I(!1), d = I(t.textValue ?? ""), c = me(void 0, "radix-vue-select-item-text");
    async function p(m) {
      await le(), !(m != null && m.defaultPrevented) && (e.value || (n.onValueChange(t.value), n.onOpenChange(!1)));
    }
    async function f(m) {
      var S;
      await le(), !m.defaultPrevented && (e.value ? (S = l.onItemLeave) == null || S.call(l) : m.currentTarget.focus({ preventScroll: !0 }));
    }
    async function v(m) {
      var S;
      await le(), !m.defaultPrevented && m.currentTarget === document.activeElement && ((S = l.onItemLeave) == null || S.call(l));
    }
    async function g(m) {
      var x;
      await le(), !(m.defaultPrevented || ((x = l.searchRef) == null ? void 0 : x.value) !== "" && m.key === " ") && (Bp.includes(m.key) && p(), m.key === " " && m.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return se(() => {
      r.value && l.itemRefCallback(
        r.value,
        t.value,
        t.disabled
      );
    }), Vp({
      value: t.value,
      disabled: e,
      textId: c,
      isSelected: i,
      onItemTextChange: (m) => {
        d.value = ((d.value || (m == null ? void 0 : m.textContent)) ?? "").trim();
      }
    }), (m, S) => (b(), _(o(O), {
      ref: o(s),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": o(c),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": o(e) || void 0,
      "data-disabled": o(e) ? "" : void 0,
      tabindex: o(e) ? void 0 : -1,
      as: m.as,
      "as-child": m.asChild,
      onFocus: S[0] || (S[0] = (x) => u.value = !0),
      onBlur: S[1] || (S[1] = (x) => u.value = !1),
      onPointerup: p,
      onPointerdown: S[2] || (S[2] = (x) => {
        x.currentTarget.focus({ preventScroll: !0 });
      }),
      onTouchend: S[3] || (S[3] = ie(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: g
    }, {
      default: y(() => [
        C(m.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), ky = /* @__PURE__ */ w({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = Ps();
    return (n, l) => o(e).isSelected.value ? (b(), _(o(O), k({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16)) : pe("", !0);
  }
}), [Fp, Lp] = Q("SelectGroup"), My = /* @__PURE__ */ w({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = me(void 0, "radix-vue-select-group");
    return Lp({ id: e }), (n, l) => (b(), _(o(O), k({ role: "group" }, t, { "aria-labelledby": o(e) }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Vy = /* @__PURE__ */ w({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(a) {
    const t = a, e = Fp({ id: "" });
    return (n, l) => (b(), _(o(O), k(t, {
      id: o(e).id
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Fy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = bt(), n = Ct(ta), l = Pp(), s = Ps(), { forwardRef: r, currentElement: i } = T(), u = B(() => {
      var d;
      return pt("option", {
        key: s.value,
        value: s.value,
        disabled: s.disabled.value,
        innerHTML: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return se(() => {
      i.value && (s.onItemTextChange(i.value), n.itemTextRefCallback(
        i.value,
        s.value,
        s.disabled.value
      ), l.onNativeOptionAdd(u.value));
    }), Vn(() => {
      l.onNativeOptionRemove(u.value);
    }), (d, c) => (b(), ce(_e, null, [
      Y(o(O), k({
        id: o(s).textId,
        ref: o(r)
      }, { ...t, ...d.$attrs }), {
        default: y(() => [
          C(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      o(s).isSelected.value && o(e).valueElement.value && !o(e).valueElementHasChildren.value ? (b(), _(Wt, {
        key: 0,
        to: o(e).valueElement.value
      }, [
        C(d.$slots, "default")
      ], 8, ["to"])) : pe("", !0)
    ], 64));
  }
}), Ly = /* @__PURE__ */ w({
  __name: "SelectViewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { nonce: e } = ne(t), n = Xa(e), l = Ct(ta), s = l.position === "item-aligned" ? $o() : void 0, { forwardRef: r, currentElement: i } = T();
    se(() => {
      l == null || l.onViewportChange(i.value);
    });
    const u = I(0);
    function d(c) {
      const p = c.currentTarget, { shouldExpandOnScrollRef: f, contentWrapper: v } = s ?? {};
      if (f != null && f.value && (v != null && v.value)) {
        const g = Math.abs(u.value - p.scrollTop);
        if (g > 0) {
          const m = window.innerHeight - at * 2, S = Number.parseFloat(
            v.value.style.minHeight
          ), x = Number.parseFloat(v.value.style.height), D = Math.max(S, x);
          if (D < m) {
            const h = D + g, E = Math.min(m, h), P = h - E;
            v.value.style.height = `${E}px`, v.value.style.bottom === "0px" && (p.scrollTop = P > 0 ? P : 0, v.value.style.justifyContent = "flex-end");
          }
        }
      }
      u.value = p.scrollTop;
    }
    return (c, p) => (b(), ce(_e, null, [
      Y(o(O), k({
        ref: o(r),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...c.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: d
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16),
      Y(o(O), {
        as: "style",
        nonce: o(n)
      }, {
        default: y(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
}), Ds = /* @__PURE__ */ w({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(a, { emit: t }) {
    const e = t, { injectCollection: n } = Me(), l = n(), s = Ct(ta), r = I(null);
    function i() {
      r.value !== null && (window.clearInterval(r.value), r.value = null);
    }
    ye(() => {
      const c = l.value.find(
        (p) => p === document.activeElement
      );
      c == null || c.scrollIntoView({ block: "nearest" });
    });
    function u() {
      r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var c;
      (c = s.onItemLeave) == null || c.call(s), r.value === null && (r.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return Vn(() => i()), (c, p) => {
      var f;
      return b(), _(o(O), k({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = c.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: p[0] || (p[0] = () => {
          i();
        })
      }), {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Ny = /* @__PURE__ */ w({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Ct(ta), e = t.position === "item-aligned" ? $o() : void 0, { forwardRef: n, currentElement: l } = T(), s = I(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          s.value = c.scrollTop > 0;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), _(Ds, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), zy = /* @__PURE__ */ w({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = Ct(ta), e = t.position === "item-aligned" ? $o() : void 0, { forwardRef: n, currentElement: l } = T(), s = I(!1);
    return ye((r) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const p = c.scrollHeight - c.clientHeight;
          s.value = Math.ceil(c.scrollTop) < p;
        };
        const c = t.viewport.value;
        d(), c.addEventListener("scroll", d), r(() => c.removeEventListener("scroll", d));
      }
    }), te(l, () => {
      l.value && (e == null || e.onScrollButtonChange(l.value));
    }), (r, i) => s.value ? (b(), _(Ds, {
      key: 0,
      ref: o(n),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = o(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 512)) : pe("", !0);
  }
}), Ky = /* @__PURE__ */ w({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const { forwardRef: t, currentElement: e } = T(), n = bt(), l = Wa();
    return pl(() => {
      var r;
      const s = !!Ua((r = l == null ? void 0 : l.default) == null ? void 0 : r.call(l)).length;
      n.onValueElementHasChildrenChange(s);
    }), se(() => {
      n.valueElement = e;
    }), (s, r) => (b(), _(o(O), {
      ref: o(t),
      as: s.as,
      "as-child": s.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: y(() => {
        var i;
        return [
          o(Es)((i = o(n).modelValue) == null ? void 0 : i.value) ? (b(), ce(_e, { key: 0 }, [
            ve($e(s.placeholder), 1)
          ], 64)) : C(s.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Hy = /* @__PURE__ */ w({
  __name: "SelectIcon",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    return (t, e) => (b(), _(o(O), {
      "aria-hidden": "",
      as: t.as,
      "as-child": t.asChild
    }, {
      default: y(() => [
        C(t.$slots, "default", {}, () => [
          ve("▼")
        ])
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), $s = /* @__PURE__ */ w({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = ["horizontal", "vertical"];
    function n(i) {
      return e.includes(i);
    }
    const l = B(
      () => n(t.orientation) ? t.orientation : "horizontal"
    ), s = B(
      () => l.value === "vertical" ? t.orientation : void 0
    ), r = B(
      () => t.decorative ? { role: "none" } : { "aria-orientation": s.value, role: "separator" }
    );
    return (i, u) => (b(), _(o(O), k({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": l.value
    }, r.value), {
      default: y(() => [
        C(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Np = /* @__PURE__ */ w({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _($s, K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function zp(a = [], t, e) {
  const n = [...a];
  return n[e] = t, n.sort((l, s) => l - s);
}
function Bs(a, t, e) {
  const s = 100 / (e - t) * (a - t);
  return Kt(s, 0, 100);
}
function Kp(a, t) {
  return t > 2 ? `Value ${a + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][a] : void 0;
}
function Hp(a, t) {
  if (a.length === 1)
    return 0;
  const e = a.map((l) => Math.abs(l - t)), n = Math.min(...e);
  return e.indexOf(n);
}
function Wp(a, t, e) {
  const n = a / 2, s = Bo([0, 50], [0, n]);
  return (n - s(t) * e) * e;
}
function jp(a) {
  return a.slice(0, -1).map((t, e) => a[e + 1] - t);
}
function Up(a, t) {
  if (t > 0) {
    const e = jp(a);
    return Math.min(...e) >= t;
  }
  return !0;
}
function Bo(a, t) {
  return (e) => {
    if (a[0] === a[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (a[1] - a[0]);
    return t[0] + n * (e - a[0]);
  };
}
function Gp(a) {
  return (String(a).split(".")[1] || "").length;
}
function qp(a, t) {
  const e = 10 ** t;
  return Math.round(a * e) / e;
}
const Is = ["PageUp", "PageDown"], Ts = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Rs = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [As, Os] = Q(["SliderVertical", "SliderHorizontal"]), ks = /* @__PURE__ */ w({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = sn();
    return (s, r) => (b(), _(o(O), k({ "data-slider-impl": "" }, e, {
      onKeydown: r[0] || (r[0] = (i) => {
        i.key === "Home" ? (n("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (n("endKeyDown", i), i.preventDefault()) : o(Is).concat(o(Ts)).includes(i.key) && (n("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: r[1] || (r[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), o(l).thumbElements.value.includes(u) ? u.focus() : n("slideStart", i);
      }),
      onPointermove: r[2] || (r[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && n("slideMove", i);
      }),
      onPointerup: r[3] || (r[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), n("slideEnd", i));
      })
    }), {
      default: y(() => [
        C(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yp = /* @__PURE__ */ w({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, dir: r, inverted: i } = ne(e), { forwardRef: u, currentElement: d } = T(), c = I(), p = B(() => (r == null ? void 0 : r.value) === "ltr" && !i.value || (r == null ? void 0 : r.value) !== "ltr" && i.value);
    function f(v) {
      const g = c.value || d.value.getBoundingClientRect(), m = [0, g.width], S = p.value ? [s.value, l.value] : [l.value, s.value], x = Bo(m, S);
      return c.value = g, x(v - g.left);
    }
    return Os({
      startEdge: p.value ? "left" : "right",
      endEdge: p.value ? "right" : "left",
      direction: p.value ? 1 : -1,
      size: "width"
    }), (v, g) => (b(), _(ks, {
      ref: o(u),
      dir: o(r),
      "data-orientation": "horizontal",
      style: {
        "--radix-slider-thumb-transform": "translateX(-50%)"
      },
      onSlideStart: g[0] || (g[0] = (m) => {
        const S = f(m.clientX);
        n("slideStart", S);
      }),
      onSlideMove: g[1] || (g[1] = (m) => {
        const S = f(m.clientX);
        n("slideMove", S);
      }),
      onSlideEnd: g[2] || (g[2] = () => {
        c.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: g[3] || (g[3] = (m) => {
        const S = p.value ? "from-left" : "from-right", x = o(Rs)[S].includes(m.key);
        n("stepKeyDown", m, x ? -1 : 1);
      }),
      onEndKeyDown: g[4] || (g[4] = (m) => n("endKeyDown", m)),
      onHomeKeyDown: g[5] || (g[5] = (m) => n("homeKeyDown", m))
    }, {
      default: y(() => [
        C(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), Xp = /* @__PURE__ */ w({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(a, { emit: t }) {
    const e = a, n = t, { max: l, min: s, inverted: r } = ne(e), { forwardRef: i, currentElement: u } = T(), d = I(), c = B(() => !r.value);
    function p(f) {
      const v = d.value || u.value.getBoundingClientRect(), g = [0, v.height], m = c.value ? [l.value, s.value] : [s.value, l.value], S = Bo(g, m);
      return d.value = v, S(f - v.top);
    }
    return Os({
      startEdge: c.value ? "bottom" : "top",
      endEdge: c.value ? "top" : "bottom",
      size: "height",
      direction: c.value ? 1 : -1
    }), (f, v) => (b(), _(ks, {
      ref: o(i),
      "data-orientation": "vertical",
      style: {
        "--radix-slider-thumb-transform": "translateY(50%)"
      },
      onSlideStart: v[0] || (v[0] = (g) => {
        const m = p(g.clientY);
        n("slideStart", m);
      }),
      onSlideMove: v[1] || (v[1] = (g) => {
        const m = p(g.clientY);
        n("slideMove", m);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, n("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (g) => {
        const m = c.value ? "from-bottom" : "from-top", S = o(Rs)[m].includes(g.key);
        n("stepKeyDown", g, S ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (g) => n("endKeyDown", g)),
      onHomeKeyDown: v[5] || (v[5] = (g) => n("homeKeyDown", g))
    }, {
      default: y(() => [
        C(f.$slots, "default")
      ]),
      _: 3
    }, 512));
  }
}), Zp = ["value", "name", "disabled", "step"], [sn, Jp] = Q("SliderRoot"), Wy = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: !1 },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: !1 },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(a, { emit: t }) {
    const e = a, n = t, { min: l, max: s, step: r, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: c } = ne(e), p = be(c), { forwardRef: f, currentElement: v } = T(), g = Qe(v);
    ba();
    const m = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), S = I(0), x = I(m.value);
    function D(R) {
      const M = Hp(m.value, R);
      P(R, M);
    }
    function h(R) {
      P(R, S.value);
    }
    function E() {
      const R = x.value[S.value];
      m.value[S.value] !== R && n("valueCommit", yr(m.value));
    }
    function P(R, M, { commit: V } = { commit: !1 }) {
      var J;
      const A = Gp(r.value), L = qp(Math.round((R - l.value) / r.value) * r.value + l.value, A), U = Kt(L, l.value, s.value), H = zp(m.value, U, M);
      if (Up(H, i.value * r.value)) {
        S.value = H.indexOf(U);
        const N = String(H) !== String(m.value);
        N && V && n("valueCommit", H), N && ((J = $.value[S.value]) == null || J.focus(), m.value = H);
      }
    }
    const $ = I([]);
    return Jp({
      modelValue: m,
      valueIndexToChangeRef: S,
      thumbElements: $,
      orientation: u,
      min: l,
      max: s,
      disabled: d
    }), (R, M) => (b(), ce(_e, null, [
      Y(o(Ca), null, {
        default: y(() => [
          (b(), _(Ge(o(u) === "horizontal" ? Yp : Xp), k(R.$attrs, {
            ref: o(f),
            "as-child": R.asChild,
            as: R.as,
            min: o(l),
            max: o(s),
            dir: o(p),
            inverted: R.inverted,
            "aria-disabled": o(d),
            "data-disabled": o(d) ? "" : void 0,
            onPointerdown: M[0] || (M[0] = () => {
              o(d) || (x.value = o(m));
            }),
            onSlideStart: M[1] || (M[1] = (V) => !o(d) && D(V)),
            onSlideMove: M[2] || (M[2] = (V) => !o(d) && h(V)),
            onSlideEnd: M[3] || (M[3] = (V) => !o(d) && E()),
            onHomeKeyDown: M[4] || (M[4] = (V) => !o(d) && P(o(l), 0, { commit: !0 })),
            onEndKeyDown: M[5] || (M[5] = (V) => !o(d) && P(o(s), o(m).length - 1, { commit: !0 })),
            onStepKeyDown: M[6] || (M[6] = (V, A) => {
              if (!o(d)) {
                const H = o(Is).includes(V.key) || V.shiftKey && o(Ts).includes(V.key) ? 10 : 1, J = S.value, N = o(m)[J], F = o(r) * H * A;
                P(N + F, J, { commit: !0 });
              }
            })
          }), {
            default: y(() => [
              C(R.$slots, "default", { modelValue: o(m) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      o(g) ? (b(!0), ce(_e, { key: 0 }, va(o(m), (V, A) => (b(), ce("input", {
        key: A,
        value: V,
        type: "number",
        style: { display: "none" },
        name: R.name ? R.name + (o(m).length > 1 ? "[]" : "") : void 0,
        disabled: o(d),
        step: o(r)
      }, null, 8, Zp))), 128)) : pe("", !0)
    ], 64));
  }
}), Qp = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = sn(), n = As(), { forwardRef: l, currentElement: s } = T(), r = B(() => {
      var v, g;
      return (g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g[t.index];
    }), i = B(() => r.value === void 0 ? 0 : Bs(r.value, e.min.value ?? 0, e.max.value ?? 100)), u = B(() => {
      var v, g;
      return Kp(t.index, ((g = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : g.length) ?? 0);
    }), d = Rl(s), c = B(() => d[n.size].value), p = B(() => c.value ? Wp(c.value, i.value, n.direction) : 0), f = ja();
    return se(() => {
      e.thumbElements.value.push(s.value);
    }), Ie(() => {
      const v = e.thumbElements.value.findIndex((g) => g === s.value) ?? -1;
      e.thumbElements.value.splice(v, 1);
    }), (v, g) => (b(), _(o(Xt), null, {
      default: y(() => [
        Y(o(O), k(v.$attrs, {
          ref: o(l),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: o(e).disabled.value ? void 0 : 0,
          "aria-label": v.$attrs["aria-label"] || u.value,
          "data-disabled": o(e).disabled.value ? "" : void 0,
          "data-orientation": o(e).orientation.value,
          "aria-valuenow": r.value,
          "aria-valuemin": o(e).min.value,
          "aria-valuemax": o(e).max.value,
          "aria-orientation": o(e).orientation.value,
          "as-child": v.asChild,
          as: v.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [o(n).startEdge]: `calc(${i.value}% + ${p.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !o(f) && r.value === void 0 ? "none" : void 0
          },
          onFocus: g[0] || (g[0] = () => {
            o(e).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: y(() => [
            C(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), jy = /* @__PURE__ */ w({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { getItems: e } = Zt(), { forwardRef: n, currentElement: l } = T(), s = B(() => l.value ? e().findIndex((r) => r.ref === l.value) : -1);
    return (r, i) => (b(), _(Qp, k({ ref: o(n) }, t, { index: s.value }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Uy = /* @__PURE__ */ w({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = sn();
    return T(), (e, n) => (b(), _(o(O), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value
    }, {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Gy = /* @__PURE__ */ w({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = sn(), e = As();
    T();
    const n = B(() => {
      var r, i;
      return (i = (r = t.modelValue) == null ? void 0 : r.value) == null ? void 0 : i.map(
        (u) => Bs(u, t.min.value, t.max.value)
      );
    }), l = B(() => t.modelValue.value.length > 1 ? Math.min(...n.value) : 0), s = B(() => 100 - Math.max(...n.value));
    return (r, i) => (b(), _(o(O), {
      "data-disabled": o(t).disabled.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      "as-child": r.asChild,
      as: r.as,
      style: Oe({
        [o(e).startEdge]: `${l.value}%`,
        [o(e).endEdge]: `${s.value}%`
      })
    }, {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
});
let An = null, xt = null;
function ef(a, t) {
  if (t) {
    const e = (t & zs) !== 0, n = (t & Ks) !== 0, l = (t & Hs) !== 0, s = (t & Ws) !== 0;
    if (e)
      return l ? "se-resize" : s ? "ne-resize" : "e-resize";
    if (n)
      return l ? "sw-resize" : s ? "nw-resize" : "w-resize";
    if (l)
      return "s-resize";
    if (s)
      return "n-resize";
  }
  switch (a) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function tf() {
  xt !== null && (document.head.removeChild(xt), An = null, xt = null);
}
function Sn(a, t) {
  const e = ef(a, t);
  An !== e && (An = e, xt === null && (xt = document.createElement("style"), document.head.appendChild(xt)), xt.innerHTML = `*{cursor: ${e}!important;}`);
}
function af({
  defaultSize: a,
  dragState: t,
  layout: e,
  panelData: n,
  panelIndex: l,
  precision: s = 3
}) {
  const r = e[l];
  let i;
  return r == null ? i = a !== void 0 ? a.toPrecision(s) : "1" : n.length === 1 ? i = "1" : i = r.toPrecision(s), {
    flexBasis: 0,
    flexGrow: i,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Ms(a) {
  return a.type === "keydown";
}
function Vs(a) {
  return a.type.startsWith("mouse");
}
function Fs(a) {
  return a.type.startsWith("touch");
}
function rn(a) {
  if (Vs(a))
    return {
      x: a.clientX,
      y: a.clientY
    };
  if (Fs(a)) {
    const t = a.touches[0];
    if (t && t.clientX && t.clientY)
      return {
        x: t.clientX,
        y: t.clientY
      };
  }
  return {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY
  };
}
function Ls(a, t) {
  const e = a === "horizontal", { x: n, y: l } = rn(t);
  return e ? n : l;
}
function nf(a, t, e) {
  return a.x < t.x + t.width && a.x + a.width > t.x && a.y < t.y + t.height && a.y + a.height > t.y;
}
function de(a, t = "Assertion failed!") {
  if (!a)
    throw console.error(t), new Error(t);
}
function of(a, t) {
  if (a === t)
    throw new Error("Cannot compare node with itself");
  const e = {
    a: el(a),
    b: el(t)
  };
  let n;
  for (; e.a.at(-1) === e.b.at(-1); )
    a = e.a.pop(), t = e.b.pop(), n = a;
  de(n);
  const l = {
    a: Qo(Jo(e.a)),
    b: Qo(Jo(e.b))
  };
  if (l.a === l.b) {
    const s = n.childNodes, r = {
      a: e.a.at(-1),
      b: e.b.at(-1)
    };
    let i = s.length;
    for (; i--; ) {
      const u = s[i];
      if (u === r.a)
        return 1;
      if (u === r.b)
        return -1;
    }
  }
  return Math.sign(l.a - l.b);
}
const lf = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function sf(a) {
  const t = getComputedStyle(Ns(a)).display;
  return t === "flex" || t === "inline-flex";
}
function rf(a) {
  const t = getComputedStyle(a);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || sf(a)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || lf.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Jo(a) {
  let t = a.length;
  for (; t--; ) {
    const e = a[t];
    if (de(e), rf(e))
      return e;
  }
  return null;
}
function Qo(a) {
  return a && Number(getComputedStyle(a).zIndex) || 0;
}
function el(a) {
  const t = [];
  for (; a; )
    t.push(a), a = Ns(a);
  return t;
}
function Ns(a) {
  var t;
  return ((t = a.parentNode) == null ? void 0 : t.host) || a.parentNode;
}
const zs = 1, Ks = 2, Hs = 4, Ws = 8;
function uf() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
const df = uf() === "coarse", ft = [];
let un = !1;
const ct = /* @__PURE__ */ new Map(), dn = /* @__PURE__ */ new Map(), ca = /* @__PURE__ */ new Set();
function cf(a, t, e, n, l) {
  const { ownerDocument: s } = t, r = {
    direction: e,
    element: t,
    hitAreaMargins: n,
    setResizeHandlerState: l
  }, i = ct.get(s) ?? 0;
  return ct.set(s, i + 1), ca.add(r), za(), function() {
    dn.delete(a), ca.delete(r);
    const d = ct.get(s) ?? 1;
    ct.set(s, d - 1), za(), d === 1 && ct.delete(s);
  };
}
function Ta(a) {
  const { target: t } = a, { x: e, y: n } = rn(a);
  un = !0, Io({ target: t, x: e, y: n }), za(), ft.length > 0 && (To("down", a), a.preventDefault());
}
function it(a) {
  const { x: t, y: e } = rn(a);
  if (!un) {
    const { target: n } = a;
    Io({ target: n, x: t, y: e });
  }
  To("move", a), js(), ft.length > 0 && a.preventDefault();
}
function ut(a) {
  const { target: t } = a, { x: e, y: n } = rn(a);
  dn.clear(), un = !1, ft.length > 0 && a.preventDefault(), To("up", a), Io({ target: t, x: e, y: n }), js(), za();
}
function Io({
  target: a,
  x: t,
  y: e
}) {
  ft.splice(0);
  let n = null;
  a instanceof HTMLElement && (n = a), ca.forEach((l) => {
    const { element: s, hitAreaMargins: r } = l, i = s.getBoundingClientRect(), { bottom: u, left: d, right: c, top: p } = i, f = df ? r.coarse : r.fine;
    if (t >= d - f && t <= c + f && e >= p - f && e <= u + f) {
      if (n !== null && s !== n && !s.contains(n) && !n.contains(s) && of(n, s) > 0) {
        let g = n, m = !1;
        for (; g && !g.contains(s); ) {
          if (nf(
            g.getBoundingClientRect(),
            i
          )) {
            m = !0;
            break;
          }
          g = g.parentElement;
        }
        if (m)
          return;
      }
      ft.push(l);
    }
  });
}
function En(a, t) {
  dn.set(a, t);
}
function js() {
  let a = !1, t = !1;
  ft.forEach((n) => {
    const { direction: l } = n;
    l === "horizontal" ? a = !0 : t = !0;
  });
  let e = 0;
  dn.forEach((n) => {
    e |= n;
  }), a && t ? Sn("intersection", e) : a ? Sn("horizontal", e) : t ? Sn("vertical", e) : tf();
}
function za() {
  ct.forEach((a, t) => {
    const { body: e } = t;
    e.removeEventListener("contextmenu", ut), e.removeEventListener("mousedown", Ta), e.removeEventListener("mouseleave", it), e.removeEventListener("mousemove", it), e.removeEventListener("touchmove", it), e.removeEventListener("touchstart", Ta);
  }), window.removeEventListener("mouseup", ut), window.removeEventListener("touchcancel", ut), window.removeEventListener("touchend", ut), ca.size > 0 && (un ? (ft.length > 0 && ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("contextmenu", ut), e.addEventListener("mouseleave", it), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }));
  }), window.addEventListener("mouseup", ut), window.addEventListener("touchcancel", ut), window.addEventListener("touchend", ut)) : ct.forEach((a, t) => {
    const { body: e } = t;
    a > 0 && (e.addEventListener("mousedown", Ta), e.addEventListener("mousemove", it), e.addEventListener("touchmove", it, {
      passive: !1
    }), e.addEventListener("touchstart", Ta));
  }));
}
function To(a, t) {
  ca.forEach((e) => {
    const { setResizeHandlerState: n } = e, l = ft.includes(e);
    n(a, l, t);
  });
}
const Ro = 10;
function pa(a, t, e = Ro) {
  a = Number.parseFloat(a.toFixed(e)), t = Number.parseFloat(t.toFixed(e));
  const n = a - t;
  return n === 0 ? 0 : n > 0 ? 1 : -1;
}
function Fe(a, t, e) {
  return pa(a, t, e) === 0;
}
function Lt({
  panelConstraints: a,
  panelIndex: t,
  size: e
}) {
  const n = a[t];
  de(n != null);
  const { collapsedSize: l = 0, collapsible: s, maxSize: r = 100, minSize: i = 0 } = n;
  if (pa(e, i) < 0)
    if (s) {
      const u = (l + i) / 2;
      pa(e, u) < 0 ? e = l : e = i;
    } else
      e = i;
  return e = Math.min(r, e), e = Number.parseFloat(e.toFixed(Ro)), e;
}
function Ra(a, t) {
  if (a.length !== t.length)
    return !1;
  for (let e = 0; e < a.length; e++)
    if (a[e] !== t[e])
      return !1;
  return !0;
}
function la({
  delta: a,
  layout: t,
  panelConstraints: e,
  pivotIndices: n,
  trigger: l
}) {
  if (Fe(a, 0))
    return t;
  const s = [...t], [r, i] = n;
  de(r != null), de(i != null);
  let u = 0;
  if (l === "keyboard") {
    {
      const c = a < 0 ? i : r, p = e[c];
      if (de(p), p.collapsible) {
        const f = t[c];
        de(f != null);
        const v = e[c];
        de(v);
        const { collapsedSize: g = 0, minSize: m = 0 } = v;
        if (Fe(f, g)) {
          const S = m - f;
          pa(S, Math.abs(a)) > 0 && (a = a < 0 ? 0 - S : S);
        }
      }
    }
    {
      const c = a < 0 ? r : i, p = e[c];
      de(p);
      const { collapsible: f } = p;
      if (f) {
        const v = t[c];
        de(v != null);
        const g = e[c];
        de(g);
        const { collapsedSize: m = 0, minSize: S = 0 } = g;
        if (Fe(v, S)) {
          const x = v - m;
          pa(x, Math.abs(a)) > 0 && (a = a < 0 ? 0 - x : x);
        }
      }
    }
  }
  {
    const c = a < 0 ? 1 : -1;
    let p = a < 0 ? i : r, f = 0;
    for (; ; ) {
      const g = t[p];
      de(g != null);
      const S = Lt({
        panelConstraints: e,
        panelIndex: p,
        size: 100
      }) - g;
      if (f += S, p += c, p < 0 || p >= e.length)
        break;
    }
    const v = Math.min(Math.abs(a), Math.abs(f));
    a = a < 0 ? 0 - v : v;
  }
  {
    let p = a < 0 ? r : i;
    for (; p >= 0 && p < e.length; ) {
      const f = Math.abs(a) - Math.abs(u), v = t[p];
      de(v != null);
      const g = v - f, m = Lt({
        panelConstraints: e,
        panelIndex: p,
        size: g
      });
      if (!Fe(v, m) && (u += v - m, s[p] = m, u.toPrecision(3).localeCompare(Math.abs(a).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      a < 0 ? p-- : p++;
    }
  }
  if (Fe(u, 0))
    return t;
  {
    const c = a < 0 ? i : r, p = t[c];
    de(p != null);
    const f = p + u, v = Lt({
      panelConstraints: e,
      panelIndex: c,
      size: f
    });
    if (s[c] = v, !Fe(v, f)) {
      let g = f - v, S = a < 0 ? i : r;
      for (; S >= 0 && S < e.length; ) {
        const x = s[S];
        de(x != null);
        const D = x + g, h = Lt({
          panelConstraints: e,
          panelIndex: S,
          size: D
        });
        if (Fe(x, h) || (g -= h - x, s[S] = h), Fe(g, 0))
          break;
        a > 0 ? S-- : S++;
      }
    }
  }
  const d = s.reduce((c, p) => p + c, 0);
  return Fe(d, 100) ? s : t;
}
function Us(a, t = document) {
  var n;
  if (!ma)
    return null;
  if (t instanceof HTMLElement && ((n = t == null ? void 0 : t.dataset) == null ? void 0 : n.panelGroupId) === a)
    return t;
  const e = t.querySelector(
    `[data-panel-group][data-panel-group-id="${a}"]`
  );
  return e || null;
}
function cn(a, t = document) {
  if (!ma)
    return null;
  const e = t.querySelector(`[data-panel-resize-handle-id="${a}"]`);
  return e || null;
}
function Gs(a, t, e = document) {
  return ma ? fa(a, e).findIndex(
    (s) => s.getAttribute("data-panel-resize-handle-id") === t
  ) ?? null : null;
}
function fa(a, t = document) {
  return ma ? Array.from(
    t.querySelectorAll(
      `[data-panel-resize-handle-id][data-panel-group-id="${a}"]`
    )
  ) : [];
}
function pf(a, t, e, n = document) {
  var d, c;
  const l = cn(t, n), s = fa(a, n), r = l ? s.indexOf(l) : -1, i = ((d = e[r]) == null ? void 0 : d.id) ?? null, u = ((c = e[r + 1]) == null ? void 0 : c.id) ?? null;
  return [i, u];
}
function ff(a, t, e, n, l) {
  const s = e === "horizontal", r = cn(t, l);
  de(r);
  const i = r.getAttribute("data-panel-group-id");
  de(i);
  const { initialCursorPosition: u } = n, d = Ls(e, a), c = Us(i, l);
  de(c);
  const p = c.getBoundingClientRect(), f = s ? p.width : p.height;
  return (d - u) / f * 100;
}
function vf(a, t, e, n, l, s) {
  if (Ms(a)) {
    const r = e === "horizontal";
    let i = 0;
    a.shiftKey ? i = 100 : i = l ?? 10;
    let u = 0;
    switch (a.key) {
      case "ArrowDown":
        u = r ? 0 : i;
        break;
      case "ArrowLeft":
        u = r ? -i : 0;
        break;
      case "ArrowRight":
        u = r ? i : 0;
        break;
      case "ArrowUp":
        u = r ? 0 : -i;
        break;
      case "End":
        u = 100;
        break;
      case "Home":
        u = -100;
        break;
    }
    return u;
  } else
    return n == null ? 0 : ff(
      a,
      t,
      e,
      n,
      s
    );
}
function mf({
  layout: a,
  panelsArray: t,
  pivotIndices: e
}) {
  let n = 0, l = 100, s = 0, r = 0;
  const i = e[0];
  de(i != null), t.forEach((p, f) => {
    const { constraints: v } = p, { maxSize: g = 100, minSize: m = 0 } = v;
    f === i ? (n = m, l = g) : (s += m, r += g);
  });
  const u = Math.min(l, 100 - s), d = Math.max(n, 100 - r), c = a[i];
  return {
    valueMax: u,
    valueMin: d,
    valueNow: c
  };
}
function hf({
  panelDataArray: a
}) {
  const t = Array(a.length), e = a.map(
    (s) => s.constraints
  );
  let n = 0, l = 100;
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    de(r);
    const { defaultSize: i } = r;
    i != null && (n++, t[s] = i, l -= i);
  }
  for (let s = 0; s < a.length; s++) {
    const r = e[s];
    de(r);
    const { defaultSize: i } = r;
    if (i != null)
      continue;
    const u = a.length - n, d = l / u;
    n++, t[s] = d, l -= d;
  }
  return t;
}
function oa(a, t, e) {
  t.forEach((n, l) => {
    const s = a[l];
    de(s);
    const { callbacks: r, constraints: i, id: u } = s, { collapsedSize: d = 0, collapsible: c } = i, p = e[u];
    if (p == null || n !== p) {
      e[u] = n;
      const { onCollapse: f, onExpand: v, onResize: g } = r;
      g && g(n, p), c && (f || v) && (v && (p == null || p === d) && n !== d && v(), f && (p == null || p !== d) && n === d && f());
    }
  });
}
function yf(a, t = 10) {
  let e = null;
  return (...l) => {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      a(...l);
    }, t);
  };
}
function qs(a, t, e) {
  const n = Gs(
    a,
    t,
    e
  );
  return n != null ? [n, n + 1] : [-1, -1];
}
function gf({
  layout: a,
  panelConstraints: t
}) {
  const e = [...a], n = e.reduce(
    (s, r) => s + r,
    0
  );
  if (e.length !== t.length)
    throw new Error(
      `Invalid ${t.length} panel layout: ${e.map((s) => `${s}%`).join(", ")}`
    );
  if (!Fe(n, 100)) {
    console.warn(
      `WARNING: Invalid layout total size: ${e.map((s) => `${s}%`).join(", ")}. Layout normalization will be applied.`
    );
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      de(r != null);
      const i = 100 / n * r;
      e[s] = i;
    }
  }
  let l = 0;
  for (let s = 0; s < t.length; s++) {
    const r = e[s];
    de(r != null);
    const i = Lt({
      panelConstraints: t,
      panelIndex: s,
      size: r
    });
    r !== i && (l += r - i, e[s] = i);
  }
  if (!Fe(l, 0))
    for (let s = 0; s < t.length; s++) {
      const r = e[s];
      de(r != null);
      const i = r + l, u = Lt({
        panelConstraints: t,
        panelIndex: s,
        size: i
      });
      if (r !== u && (l -= u - r, e[s] = u, Fe(l, 0)))
        break;
    }
  return e;
}
function tl(a) {
  try {
    if (typeof localStorage < "u")
      a.getItem = (t) => localStorage.getItem(t), a.setItem = (t, e) => {
        localStorage.setItem(t, e);
      };
    else
      throw new TypeError("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), a.getItem = () => null, a.setItem = () => {
    };
  }
}
function Ys(a) {
  return `radix-vue:${a}`;
}
function Xs(a) {
  return a.map((t) => {
    const { constraints: e, id: n, idIsFromProps: l, order: s } = t;
    return l ? n : s ? `${s}:${JSON.stringify(e)}` : JSON.stringify(e);
  }).sort((t, e) => t.localeCompare(e)).join(",");
}
function Zs(a, t) {
  try {
    const e = Ys(a), n = t.getItem(e);
    if (n) {
      const l = JSON.parse(n);
      if (typeof l == "object" && l != null)
        return l;
    }
  } catch {
  }
  return null;
}
function bf(a, t, e) {
  const n = Zs(a, e) ?? {}, l = Xs(t);
  return n[l] ?? null;
}
function Cf(a, t, e, n, l) {
  const s = Ys(a), r = Xs(t), i = Zs(a, l) ?? {};
  i[r] = {
    expandToSizes: Object.fromEntries(e.entries()),
    layout: n
  };
  try {
    l.setItem(s, JSON.stringify(i));
  } catch (u) {
    console.error(u);
  }
}
function wf({
  eagerValuesRef: a,
  groupId: t,
  layout: e,
  panelDataArray: n,
  panelGroupElement: l,
  setLayout: s
}) {
  ye((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = fa(
      t,
      i
    );
    for (let d = 0; d < n.length - 1; d++) {
      const { valueMax: c, valueMin: p, valueNow: f } = mf({
        layout: e.value,
        panelsArray: n,
        pivotIndices: [d, d + 1]
      }), v = u[d];
      if (v != null) {
        const g = n[d];
        de(g), v.setAttribute("aria-controls", g.id), v.setAttribute(
          "aria-valuemax",
          `${Math.round(c)}`
        ), v.setAttribute(
          "aria-valuemin",
          `${Math.round(p)}`
        ), v.setAttribute(
          "aria-valuenow",
          f != null ? `${Math.round(f)}` : ""
        );
      }
    }
    r(() => {
      u.forEach((d) => {
        d.removeAttribute("aria-controls"), d.removeAttribute("aria-valuemax"), d.removeAttribute("aria-valuemin"), d.removeAttribute("aria-valuenow");
      });
    });
  }), ye((r) => {
    const i = l.value;
    if (!i)
      return;
    const u = a.value;
    de(u);
    const { panelDataArray: d } = u, c = Us(t, i);
    de(c != null, `No group found for id "${t}"`);
    const p = fa(t, i);
    de(p);
    const f = p.map((v) => {
      const g = v.getAttribute("data-panel-resize-handle-id");
      de(g);
      const [m, S] = pf(
        t,
        g,
        d,
        i
      );
      if (m == null || S == null)
        return () => {
        };
      const x = (D) => {
        if (!D.defaultPrevented)
          switch (D.key) {
            case "Enter": {
              D.preventDefault();
              const h = d.findIndex(
                (E) => E.id === m
              );
              if (h >= 0) {
                const E = d[h];
                de(E);
                const P = e.value[h], {
                  collapsedSize: $ = 0,
                  collapsible: R,
                  minSize: M = 0
                } = E.constraints;
                if (P != null && R) {
                  const V = la({
                    delta: Fe(P, $) ? M - $ : $ - P,
                    layout: e.value,
                    panelConstraints: d.map(
                      (A) => A.constraints
                    ),
                    pivotIndices: qs(
                      t,
                      g,
                      i
                    ),
                    trigger: "keyboard"
                  });
                  e.value !== V && s(V);
                }
              }
              break;
            }
          }
      };
      return v.addEventListener("keydown", x), () => {
        v.removeEventListener("keydown", x);
      };
    });
    r(() => {
      f.forEach((v) => v());
    });
  });
}
const _f = 100, sa = {
  getItem: (a) => (tl(sa), sa.getItem(a)),
  setItem: (a, t) => {
    tl(sa), sa.setItem(a, t);
  }
}, [Js, xf] = Q("PanelGroup"), qy = /* @__PURE__ */ w({
  __name: "SplitterGroup",
  props: {
    id: {},
    autoSaveId: { default: null },
    direction: {},
    keyboardResizeBy: { default: 10 },
    storage: { default: () => sa },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["layout"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = {}, s = me(e.id, "radix-vue-splitter-group"), r = be(), { forwardRef: i, currentElement: u } = T(), d = I(null), c = I([]), p = I({}), f = I(/* @__PURE__ */ new Map()), v = I(0), g = B(() => ({
      autoSaveId: e.autoSaveId,
      direction: e.direction,
      dragState: d.value,
      id: s,
      keyboardResizeBy: e.keyboardResizeBy,
      storage: e.storage
    })), m = I({
      layout: c.value,
      panelDataArray: [],
      panelDataArrayChanged: !1
    }), S = (F) => c.value = F;
    wf({
      eagerValuesRef: m,
      groupId: s,
      layout: c,
      panelDataArray: m.value.panelDataArray,
      setLayout: S,
      panelGroupElement: u
    }), ye(() => {
      const { panelDataArray: F } = m.value, { autoSaveId: W } = e;
      if (W) {
        if (c.value.length === 0 || c.value.length !== F.length)
          return;
        let z = l[W];
        z || (z = yf(
          Cf,
          _f
        ), l[W] = z);
        const X = [...F], G = new Map(
          f.value
        );
        z(
          W,
          X,
          G,
          c.value,
          e.storage
        );
      }
    });
    function x(F, W) {
      const { panelDataArray: z } = m.value, X = J(z, F);
      return af({
        defaultSize: W,
        dragState: d.value,
        layout: c.value,
        panelData: z,
        panelIndex: X
      });
    }
    function D(F) {
      const { panelDataArray: W } = m.value;
      W.push(F), W.sort((z, X) => {
        const G = z.order, Z = X.order;
        return G == null && Z == null ? 0 : G == null ? -1 : Z == null ? 1 : G - Z;
      }), m.value.panelDataArrayChanged = !0;
    }
    te(() => m.value.panelDataArrayChanged, () => {
      if (m.value.panelDataArrayChanged) {
        m.value.panelDataArrayChanged = !1;
        const { autoSaveId: F, storage: W } = g.value, { layout: z, panelDataArray: X } = m.value;
        let G = null;
        if (F) {
          const ee = bf(F, X, W);
          ee && (f.value = new Map(
            Object.entries(ee.expandToSizes)
          ), G = ee.layout);
        }
        G === null && (G = hf({
          panelDataArray: X
        }));
        const Z = gf({
          layout: G,
          panelConstraints: X.map(
            (ee) => ee.constraints
          )
        });
        Mr(z, Z) || (S(Z), m.value.layout = Z, n("layout", Z), oa(
          X,
          Z,
          p.value
        ));
      }
    });
    function h(F) {
      return function(z) {
        z.preventDefault();
        const X = u.value;
        if (!X)
          return () => null;
        const { direction: G, dragState: Z, id: ee, keyboardResizeBy: fe } = g.value, { layout: q, panelDataArray: oe } = m.value, { initialLayout: he } = Z ?? {}, Ce = qs(
          ee,
          F,
          X
        );
        let ge = vf(
          z,
          F,
          G,
          Z,
          fe,
          X
        );
        if (ge === 0)
          return;
        const De = G === "horizontal";
        r.value === "rtl" && De && (ge = -ge);
        const ue = oe.map((Ke) => Ke.constraints), Se = la({
          delta: ge,
          layout: he ?? q,
          panelConstraints: ue,
          pivotIndices: Ce,
          trigger: Ms(z) ? "keyboard" : "mouse-or-touch"
        }), Ve = !Ra(q, Se);
        (Vs(z) || Fs(z)) && v.value !== ge && (v.value = ge, Ve ? En(F, 0) : De ? En(
          F,
          ge < 0 ? zs : Ks
        ) : En(
          F,
          ge < 0 ? Hs : Ws
        )), Ve && (S(Se), m.value.layout = Se, n("layout", Se), oa(
          oe,
          Se,
          p.value
        ));
      };
    }
    function E(F, W) {
      const { layout: z, panelDataArray: X } = m.value, G = X.map((he) => he.constraints), { panelSize: Z, pivotIndices: ee } = N(
        X,
        F,
        z
      );
      de(Z != null);
      const q = J(X, F) === X.length - 1 ? Z - W : W - Z, oe = la({
        delta: q,
        layout: z,
        panelConstraints: G,
        pivotIndices: ee,
        trigger: "imperative-api"
      });
      Ra(z, oe) || (S(oe), m.value.layout = oe, n("layout", oe), oa(
        X,
        oe,
        p.value
      ));
    }
    function P(F, W) {
      const { layout: z, panelDataArray: X } = m.value, G = J(X, F);
      X[G] = F, m.value.panelDataArrayChanged = !0;
      const {
        collapsedSize: Z = 0,
        collapsible: ee
      } = W, {
        collapsedSize: fe = 0,
        collapsible: q,
        maxSize: oe = 100,
        minSize: he = 0
      } = F.constraints, { panelSize: Ce } = N(
        X,
        F,
        z
      );
      Ce !== null && (ee && q && Ce === Z ? Z !== fe && E(F, fe) : Ce < he ? E(F, he) : Ce > oe && E(F, oe));
    }
    function $(F, W) {
      const { direction: z } = g.value, { layout: X } = m.value;
      if (!u.value)
        return;
      const G = cn(
        F,
        u.value
      );
      de(G);
      const Z = Ls(
        z,
        W
      );
      d.value = {
        dragHandleId: F,
        dragHandleRect: G.getBoundingClientRect(),
        initialCursorPosition: Z,
        initialLayout: X
      };
    }
    function R() {
      d.value = null;
    }
    function M(F) {
      const { panelDataArray: W } = m.value, z = J(W, F);
      z >= 0 && (W.splice(z, 1), delete p.value[F.id], m.value.panelDataArrayChanged = !0);
    }
    function V(F) {
      const { layout: W, panelDataArray: z } = m.value;
      if (F.constraints.collapsible) {
        const X = z.map(
          (fe) => fe.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: Z,
          pivotIndices: ee
        } = N(z, F, W);
        if (de(
          Z != null,
          `Panel size not found for panel "${F.id}"`
        ), Z !== G) {
          f.value.set(F.id, Z);
          const q = J(z, F) === z.length - 1 ? Z - G : G - Z, oe = la({
            delta: q,
            layout: W,
            panelConstraints: X,
            pivotIndices: ee,
            trigger: "imperative-api"
          });
          Ra(W, oe) || (S(oe), m.value.layout = oe, n("layout", oe), oa(
            z,
            oe,
            p.value
          ));
        }
      }
    }
    function A(F) {
      const { layout: W, panelDataArray: z } = m.value;
      if (F.constraints.collapsible) {
        const X = z.map(
          (q) => q.constraints
        ), {
          collapsedSize: G = 0,
          panelSize: Z,
          minSize: ee = 0,
          pivotIndices: fe
        } = N(z, F, W);
        if (Z === G) {
          const q = f.value.get(
            F.id
          ), oe = q != null && q >= ee ? q : ee, Ce = J(z, F) === z.length - 1 ? Z - oe : oe - Z, ge = la({
            delta: Ce,
            layout: W,
            panelConstraints: X,
            pivotIndices: fe,
            trigger: "imperative-api"
          });
          Ra(W, ge) || (S(ge), m.value.layout = ge, n("layout", ge), oa(
            z,
            ge,
            p.value
          ));
        }
      }
    }
    function L(F) {
      const { layout: W, panelDataArray: z } = m.value, { panelSize: X } = N(z, F, W);
      return de(
        X != null,
        `Panel size not found for panel "${F.id}"`
      ), X;
    }
    function U(F) {
      const { layout: W, panelDataArray: z } = m.value, {
        collapsedSize: X = 0,
        collapsible: G,
        panelSize: Z
      } = N(z, F, W);
      return G === !0 && Z === X;
    }
    function H(F) {
      const { layout: W, panelDataArray: z } = m.value, {
        collapsedSize: X = 0,
        collapsible: G,
        panelSize: Z
      } = N(z, F, W);
      return de(
        Z != null,
        `Panel size not found for panel "${F.id}"`
      ), !G || Z > X;
    }
    xf({
      direction: e.direction,
      dragState: d.value,
      groupId: s,
      reevaluatePanelConstraints: P,
      registerPanel: D,
      registerResizeHandle: h,
      resizePanel: E,
      startDragging: $,
      stopDragging: R,
      unregisterPanel: M,
      panelGroupElement: u,
      collapsePanel: V,
      expandPanel: A,
      isPanelCollapsed: U,
      isPanelExpanded: H,
      getPanelSize: L,
      getPanelStyle: x
    });
    function J(F, W) {
      return F.findIndex(
        (z) => z === W || z.id === W.id
      );
    }
    function N(F, W, z) {
      const X = J(F, W), Z = X === F.length - 1 ? [X - 1, X] : [X, X + 1], ee = z[X];
      return {
        ...W.constraints,
        panelSize: ee,
        pivotIndices: Z
      };
    }
    return (F, W) => (b(), _(o(O), {
      ref: o(i),
      as: F.as,
      "as-child": F.asChild,
      style: Oe({
        display: "flex",
        flexDirection: F.direction === "horizontal" ? "row" : "column",
        height: "100%",
        overflow: "hidden",
        width: "100%"
      }),
      "data-panel-group": "",
      "data-orientation": F.direction,
      "data-panel-group-id": o(s)
    }, {
      default: y(() => [
        C(F.$slots, "default", { layout: c.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "style", "data-orientation", "data-panel-group-id"]));
  }
}), Yy = /* @__PURE__ */ w({
  __name: "SplitterPanel",
  props: {
    collapsedSize: {},
    collapsible: { type: Boolean },
    defaultSize: {},
    id: {},
    maxSize: {},
    minSize: {},
    order: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["collapse", "expand", "resize"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, s = Js();
    if (s === null)
      throw new Error(
        "SplitterPanel components must be rendered within a SplitterGroup container"
      );
    const { collapsePanel: r, expandPanel: i, getPanelSize: u, getPanelStyle: d, isPanelCollapsed: c, resizePanel: p, groupId: f, reevaluatePanelConstraints: v, registerPanel: g, unregisterPanel: m } = s, S = me(n.id, "radix-vue-splitter-panel"), x = B(() => ({
      callbacks: {
        onCollapse: () => l("collapse"),
        onExpand: () => l("expand"),
        onResize: (...P) => l("resize", ...P)
      },
      constraints: {
        collapsedSize: n.collapsedSize && Number.parseFloat(n.collapsedSize.toFixed(Ro)),
        collapsible: n.collapsible,
        defaultSize: n.defaultSize,
        /** Panel id (unique within group); falls back to useId when not provided */
        /** Panel id (unique within group); falls back to useId when not provided */
        maxSize: n.maxSize,
        minSize: n.minSize
      },
      id: S,
      idIsFromProps: n.id !== void 0,
      order: n.order
    }));
    te(() => x.value.constraints, (P, $) => {
      ($.collapsedSize !== P.collapsedSize || $.collapsible !== P.collapsible || $.maxSize !== P.maxSize || $.minSize !== P.minSize) && v(x.value, $);
    }, { deep: !0 }), se(() => {
      const P = x.value;
      g(P), Ie(() => {
        m(P);
      });
    });
    const D = B(() => d(x.value, n.defaultSize)), h = B(() => c(x.value)), E = B(() => !h.value);
    return t({
      /** If panel is `collapsible`, collapse it fully. */
      collapse: () => {
        r(x.value);
      },
      /** If panel is currently collapsed, expand it to its most recent size. */
      expand: () => {
        i(x.value);
      },
      /** Gets the current size of the panel as a percentage (1 - 100). */
      getSize() {
        return u(x.value);
      },
      /** Resize panel to the specified percentage (1 - 100). */
      resize: (P) => {
        p(x.value, P);
      },
      /** Returns `true` if the panel is currently collapsed */
      isCollapsed: h,
      /** Returns `true` if the panel is currently not collapsed */
      isExpanded: E
    }), (P, $) => (b(), _(o(O), {
      id: o(S),
      style: Oe(D.value),
      as: P.as,
      "as-child": P.asChild,
      "data-panel": "",
      "data-panel-collapsible": P.collapsible || void 0,
      "data-panel-group-id": o(f),
      "data-panel-id": o(S),
      "data-panel-size": Number.parseFloat(`${D.value.flexGrow}`).toFixed(1),
      "data-state": P.collapsible ? h.value ? "collapsed" : "expanded" : void 0
    }, {
      default: y(() => [
        C(P.$slots, "default", {
          isCollapsed: h.value,
          isExpanded: E.value
        })
      ]),
      _: 3
    }, 8, ["id", "style", "as", "as-child", "data-panel-collapsible", "data-panel-group-id", "data-panel-id", "data-panel-size", "data-state"]));
  }
});
function Sf({
  disabled: a,
  handleId: t,
  resizeHandler: e,
  panelGroupElement: n
}) {
  ye((l) => {
    const s = n.value;
    if (a.value || e.value === null || s === null)
      return;
    const r = cn(t, s);
    if (r == null)
      return;
    const i = (u) => {
      var d;
      if (!u.defaultPrevented)
        switch (u.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            u.preventDefault(), (d = e.value) == null || d.call(e, u);
            break;
          }
          case "F6": {
            u.preventDefault();
            const c = r.getAttribute("data-panel-group-id");
            de(c);
            const p = fa(
              c,
              s
            ), f = Gs(
              c,
              t,
              s
            );
            de(f !== null);
            const v = u.shiftKey ? f > 0 ? f - 1 : p.length - 1 : f + 1 < p.length ? f + 1 : 0;
            p[v].focus();
            break;
          }
        }
    };
    r.addEventListener("keydown", i), l(() => {
      r.removeEventListener("keydown", i);
    });
  });
}
const Xy = /* @__PURE__ */ w({
  __name: "SplitterResizeHandle",
  props: {
    id: {},
    hitAreaMargins: {},
    tabindex: { default: 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["dragging"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), { disabled: r } = ne(e), i = Js();
    if (i === null)
      throw new Error(
        "PanelResizeHandle components must be rendered within a PanelGroup container"
      );
    const {
      direction: u,
      groupId: d,
      registerResizeHandle: c,
      startDragging: p,
      stopDragging: f,
      panelGroupElement: v
    } = i, g = me(e.id, "radix-vue-splitter-resize-handle"), m = I("inactive"), S = I(!1), x = I(null);
    return te(r, () => {
      ma && (r.value ? x.value = null : x.value = c(g));
    }, { immediate: !0 }), ye((D) => {
      var P, $;
      if (r.value || x.value === null)
        return;
      const h = s.value;
      if (!h)
        return;
      de(h);
      const E = (R, M, V) => {
        var A;
        if (M)
          switch (R) {
            case "down": {
              m.value = "drag", p(g, V), n("dragging", !0);
              break;
            }
            case "move": {
              m.value !== "drag" && (m.value = "hover"), (A = x.value) == null || A.call(x, V);
              break;
            }
            case "up": {
              m.value = "hover", f(), n("dragging", !1);
              break;
            }
          }
        else
          m.value = "inactive";
      };
      D(cf(
        g,
        h,
        u,
        {
          // Coarse inputs (e.g. finger/touch)
          coarse: ((P = e.hitAreaMargins) == null ? void 0 : P.coarse) ?? 15,
          // Fine inputs (e.g. mouse)
          fine: (($ = e.hitAreaMargins) == null ? void 0 : $.fine) ?? 5
        },
        E
      ));
    }), Sf({
      disabled: r,
      resizeHandler: x,
      handleId: g,
      panelGroupElement: v
    }), (D, h) => (b(), _(o(O), {
      id: o(g),
      ref: o(l),
      style: {
        touchAction: "none",
        userSelect: "none"
      },
      as: D.as,
      "as-child": D.asChild,
      role: "separator",
      "data-resize-handle": "",
      tabindex: D.tabindex,
      "data-state": m.value,
      "data-disabled": o(r) ? "" : void 0,
      "data-orientation": o(u),
      "data-panel-group-id": o(d),
      "data-resize-handle-active": m.value === "drag" ? "pointer" : S.value ? "keyboard" : void 0,
      "data-resize-handle-state": m.value,
      "data-panel-resize-handle-enabled": !o(r),
      "data-panel-resize-handle-id": o(g),
      onBlur: h[0] || (h[0] = (E) => S.value = !1),
      onFocus: h[1] || (h[1] = (E) => S.value = !1)
    }, {
      default: y(() => [
        C(D.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "tabindex", "data-state", "data-disabled", "data-orientation", "data-panel-group-id", "data-resize-handle-active", "data-resize-handle-state", "data-panel-resize-handle-enabled", "data-panel-resize-handle-id"]));
  }
}), Ef = {
  "aria-live": "polite",
  "aria-atomic": "true",
  role: "status",
  style: {
    transform: "translateX(-100%)",
    position: "absolute",
    pointerEvents: "none",
    opacity: 0,
    margin: 0
  }
}, [Ao, Pf] = Q("StepperRoot"), Zy = /* @__PURE__ */ w({
  __name: "StepperRoot",
  props: {
    defaultValue: { default: 1 },
    orientation: { default: "horizontal" },
    dir: {},
    modelValue: {},
    linear: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { dir: l, orientation: s, linear: r } = ne(e), i = be(l);
    T();
    const u = I(/* @__PURE__ */ new Set()), d = I(/* @__PURE__ */ new Set()), c = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    });
    return Pf({
      modelValue: c,
      changeModelValue: (p) => {
        c.value = p;
      },
      orientation: s,
      dir: i,
      linear: r,
      stepperItems: u,
      totalStepperItems: d
    }), (p, f) => (b(), _(o(O), {
      role: "group",
      "aria-label": "progress",
      as: p.as,
      "as-child": p.asChild,
      "data-linear": o(r) ? "" : void 0,
      "data-orientation": p.orientation
    }, {
      default: y(() => [
        C(p.$slots, "default", { modelValue: o(c) }),
        Ue("div", Ef, " Step " + $e(o(c)) + " of " + $e(d.value.size), 1)
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-linear", "data-orientation"]));
  }
}), [xa, Df] = Q("StepperItem"), Jy = /* @__PURE__ */ w({
  __name: "StepperItem",
  props: {
    step: {},
    disabled: { type: Boolean, default: !1 },
    completed: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { disabled: e, step: n, completed: l } = ne(t), { forwardRef: s } = T(), r = Ao(), i = me(void 0, "radix-vue-stepper-item-title"), u = me(void 0, "radix-vue-stepper-item-description"), d = B(() => l.value ? "completed" : r.modelValue.value === n.value ? "active" : r.modelValue.value > n.value ? "completed" : "inactive"), c = B(() => e.value ? !1 : r.linear.value ? n.value <= r.modelValue.value || n.value === r.modelValue.value + 1 : !0);
    return Df({
      titleId: i,
      descriptionId: u,
      state: d,
      disabled: e,
      step: n,
      isFocusable: c
    }), (p, f) => (b(), _(o(O), {
      ref: o(s),
      as: p.as,
      "as-child": p.asChild,
      "aria-current": d.value === "active" ? "true" : void 0,
      "data-state": d.value,
      disabled: o(e) || !c.value ? "" : void 0,
      "data-disabled": o(e) || !c.value ? "" : void 0,
      "data-orientation": o(r).orientation.value
    }, {
      default: y(() => [
        C(p.$slots, "default", { state: d.value })
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-current", "data-state", "disabled", "data-disabled", "data-orientation"]));
  }
}), Qy = /* @__PURE__ */ w({
  __name: "StepperTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = Ao(), e = xa(), n = et(), l = B(() => Array.from(t.stepperItems.value));
    function s(d) {
      if (!e.disabled.value) {
        if (t.linear.value) {
          if ((e.step.value <= t.modelValue.value || e.step.value === t.modelValue.value + 1) && d.ctrlKey === !1) {
            t.changeModelValue(e.step.value);
            return;
          }
        } else if (d.ctrlKey === !1) {
          t.changeModelValue(e.step.value);
          return;
        }
        d.preventDefault();
      }
    }
    function r(d) {
      d.preventDefault(), !e.disabled.value && ((d.key === n.ENTER || d.key === n.SPACE) && !d.ctrlKey && !d.shiftKey && t.changeModelValue(e.step.value), [n.ARROW_LEFT, n.ARROW_RIGHT, n.ARROW_UP, n.ARROW_DOWN].includes(d.key) && $t(d, document.activeElement, void 0, {
        itemsArray: l.value,
        focus: !0,
        loop: !1,
        arrowKeyOptions: t.orientation.value,
        dir: t.dir.value
      }));
    }
    const { forwardRef: i, currentElement: u } = T();
    return se(() => {
      e.isFocusable.value && t.stepperItems.value.add(u.value), t.totalStepperItems.value.add(u.value);
    }), Ie(() => {
      t.stepperItems.value.delete(u.value), t.totalStepperItems.value.delete(u.value);
    }), te(e.isFocusable, (d) => {
      d ? t.stepperItems.value.add(u.value) : t.stepperItems.value.delete(u.value);
    }), (d, c) => (b(), _(o(O), {
      ref: o(i),
      type: d.as === "button" ? "button" : void 0,
      as: d.as,
      "as-child": d.asChild,
      "data-state": o(e).state.value,
      disabled: o(e).disabled.value || !o(e).isFocusable.value ? "" : void 0,
      "data-disabled": o(e).disabled.value || !o(e).isFocusable.value ? "" : void 0,
      "data-orientation": o(t).orientation.value,
      tabindex: o(e).isFocusable.value ? 0 : -1,
      "aria-describedby": o(e).descriptionId,
      "aria-labelledby": o(e).titleId,
      onMousedown: ie(s, ["left"]),
      onKeydown: re(r, ["enter", "space", "left", "right", "up", "down"])
    }, {
      default: y(() => [
        C(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child", "data-state", "disabled", "data-disabled", "data-orientation", "tabindex", "aria-describedby", "aria-labelledby"]));
  }
}), eg = /* @__PURE__ */ w({
  __name: "StepperDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(a) {
    const t = a;
    T();
    const e = xa();
    return (n, l) => (b(), _(o(O), k(t, {
      id: o(e).descriptionId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), tg = /* @__PURE__ */ w({
  __name: "StepperTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h4" }
  },
  setup(a) {
    const t = a, e = xa();
    return T(), (n, l) => (b(), _(o(O), k(t, {
      id: o(e).titleId
    }), {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ag = /* @__PURE__ */ w({
  __name: "StepperIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = xa();
    return T(), (n, l) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve(" Step " + $e(o(e).step.value), 1)
        ])
      ]),
      _: 3
    }, 16));
  }
}), ng = /* @__PURE__ */ w({
  __name: "StepperSeparator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = Ao(), n = xa();
    return T(), (l, s) => (b(), _(o(Np), k(t, {
      decorative: "",
      orientation: o(e).orientation.value,
      "data-state": o(n).state.value
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["orientation", "data-state"]));
  }
}), $f = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [Bf, If] = Q("SwitchRoot"), og = /* @__PURE__ */ w({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(a, { emit: t }) {
    const e = a, n = t, { disabled: l } = ne(e), s = ae(e, "checked", n, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function r() {
      l.value || (s.value = !s.value);
    }
    const { forwardRef: i, currentElement: u } = T(), d = Qe(u), c = B(() => {
      var p;
      return e.id && u.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return If({
      checked: s,
      toggleCheck: r,
      disabled: l
    }), (p, f) => (b(), ce(_e, null, [
      Y(o(O), k(p.$attrs, {
        id: p.id,
        ref: o(i),
        role: "switch",
        type: p.as === "button" ? "button" : void 0,
        value: p.value,
        "aria-label": p.$attrs["aria-label"] || c.value,
        "aria-checked": o(s),
        "aria-required": p.required,
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        "as-child": p.asChild,
        as: p.as,
        disabled: o(l),
        onClick: r,
        onKeydown: re(ie(r, ["prevent"]), ["enter"])
      }), {
        default: y(() => [
          C(p.$slots, "default", { checked: o(s) })
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      o(d) ? (b(), ce("input", {
        key: 0,
        type: "checkbox",
        name: p.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: o(l),
        required: p.required,
        value: p.value,
        checked: !!o(s),
        "data-state": o(s) ? "checked" : "unchecked",
        "data-disabled": o(l) ? "" : void 0,
        style: {
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }, null, 8, $f)) : pe("", !0)
    ], 64));
  }
}), lg = /* @__PURE__ */ w({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = Bf();
    return T(), (e, n) => {
      var l;
      return b(), _(o(O), {
        "data-state": (l = o(t).checked) != null && l.value ? "checked" : "unchecked",
        "data-disabled": o(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: y(() => [
          C(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [pn, Tf] = Q("TabsRoot"), sg = /* @__PURE__ */ w({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { orientation: l, dir: s } = ne(e), r = be(s);
    T();
    const i = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = I();
    return Tf({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: l,
      dir: r,
      activationMode: e.activationMode,
      baseId: me(void 0, "radix-vue-tabs"),
      tabsList: u
    }), (d, c) => (b(), _(o(O), {
      dir: o(r),
      "data-orientation": o(l),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: y(() => [
        C(d.$slots, "default", { modelValue: o(i) })
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), rg = /* @__PURE__ */ w({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { loop: e } = ne(t), { forwardRef: n, currentElement: l } = T(), s = pn();
    return s.tabsList = l, (r, i) => (b(), _(o(At), {
      "as-child": "",
      orientation: o(s).orientation.value,
      dir: o(s).dir.value,
      loop: o(e)
    }, {
      default: y(() => [
        Y(o(O), {
          ref: o(n),
          role: "tablist",
          "as-child": r.asChild,
          as: r.as,
          "aria-orientation": o(s).orientation.value
        }, {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function Qs(a, t) {
  return `${a}-trigger-${t}`;
}
function er(a, t) {
  return `${a}-content-${t}`;
}
const ig = /* @__PURE__ */ w({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), n = pn(), l = B(() => Qs(n.baseId, t.value)), s = B(() => er(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value), i = I(r.value);
    return se(() => {
      requestAnimationFrame(() => {
        i.value = !1;
      });
    }), (u, d) => (b(), _(o(Pe), {
      present: r.value,
      "force-mount": ""
    }, {
      default: y(({ present: c }) => [
        Y(o(O), {
          id: s.value,
          ref: o(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": r.value ? "active" : "inactive",
          "data-orientation": o(n).orientation.value,
          "aria-labelledby": l.value,
          hidden: !c.value,
          tabindex: "0",
          style: Oe({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: y(() => [
            u.forceMount || r.value ? C(u.$slots, "default", { key: 0 }) : pe("", !0)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), ug = /* @__PURE__ */ w({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), n = pn(), l = B(() => Qs(n.baseId, t.value)), s = B(() => er(n.baseId, t.value)), r = B(() => t.value === n.modelValue.value);
    return (i, u) => (b(), _(o(Ot), {
      "as-child": "",
      focusable: !i.disabled,
      active: r.value
    }, {
      default: y(() => [
        Y(o(O), {
          id: l.value,
          ref: o(e),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": r.value ? "true" : "false",
          "aria-controls": s.value,
          "data-state": r.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": o(n).orientation.value,
          onMousedown: u[0] || (u[0] = ie((d) => {
            !i.disabled && d.ctrlKey === !1 ? o(n).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = re((d) => o(n).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = o(n).activationMode !== "manual";
            !r.value && !i.disabled && d && o(n).changeModelValue(i.value);
          })
        }, {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), dg = /* @__PURE__ */ w({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = pn();
    T();
    const n = I(), l = I({
      size: null,
      position: null
    });
    te(() => e.modelValue.value, async (r) => {
      await le(), s();
    }, { immediate: !0 }), Ze([e.tabsList, n], s);
    function s() {
      var r;
      n.value = (r = e.tabsList.value) == null ? void 0 : r.querySelector('[role="tab"][data-state="active"]'), n.value && (e.orientation.value === "horizontal" ? l.value = {
        size: n.value.offsetWidth,
        position: n.value.offsetLeft
      } : l.value = {
        size: n.value.offsetHeight,
        position: n.value.offsetTop
      });
    }
    return (r, i) => typeof l.value.size == "number" ? (b(), _(o(O), k({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${l.value.size}px`,
        "--radix-tabs-indicator-position": `${l.value.position}px`
      }
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : pe("", !0);
  }
}), [fn, Rf] = Q("TagsInputRoot"), cg = /* @__PURE__ */ w({
  __name: "TagsInputRoot",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: { default: "," },
    dir: {},
    max: { default: 0 },
    required: { type: Boolean },
    name: {},
    id: {},
    convertValue: {},
    displayValue: { type: Function, default: (a) => a.toString() },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "invalid"],
  setup(a, { emit: t }) {
    const e = a, n = t, { addOnPaste: l, disabled: s, delimiter: r, max: i, id: u, dir: d, addOnBlur: c, addOnTab: p } = ne(e), f = be(d), v = ae(e, "modelValue", n, {
      defaultValue: e.defaultValue,
      passive: !0,
      deep: !0
    }), { forwardRef: g, currentElement: m } = T(), { focused: S } = vi(m), x = Qe(m), { getItems: D } = ba(), h = I(), E = I(!1);
    return Rf({
      modelValue: v,
      onAddValue: (P) => {
        const $ = v.value.length > 0 && typeof v.value[0] == "object", R = v.value.length > 0 && typeof e.defaultValue[0] == "object";
        if (($ || R) && typeof e.convertValue != "function")
          throw new Error("You must provide a `convertValue` function when using objects as values.");
        const M = e.convertValue ? e.convertValue(P) : P;
        if (v.value.length >= i.value && i.value)
          return n("invalid", M), !1;
        if (e.duplicate)
          return v.value.push(M), !0;
        if (v.value.includes(M))
          E.value = !0;
        else
          return v.value.push(M), !0;
        return n("invalid", M), !1;
      },
      onRemoveValue: (P) => {
        P !== -1 && v.value.splice(P, 1);
      },
      onInputKeydown: (P) => {
        const $ = P.target, R = D().map((V) => V.ref).filter((V) => V.dataset.disabled !== "");
        if (!R.length)
          return;
        const M = R.at(-1);
        switch (P.key) {
          case "Delete":
          case "Backspace": {
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (h.value) {
              const V = R.findIndex((A) => A === h.value);
              v.value.splice(V, 1), h.value = h.value === M ? R.at(V - 1) : R.at(V + 1), P.preventDefault();
            } else P.key === "Backspace" && (h.value = M, P.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const V = P.key === "ArrowRight" && f.value === "ltr" || P.key === "ArrowLeft" && f.value === "rtl", A = !V;
            if ($.selectionStart !== 0 || $.selectionEnd !== 0)
              break;
            if (A && !h.value)
              h.value = M, P.preventDefault();
            else if (V && M && h.value === M)
              h.value = void 0, P.preventDefault();
            else if (h.value) {
              const L = $t(P, h.value, void 0, {
                itemsArray: R,
                loop: !1,
                dir: f.value
              });
              L && (h.value = L), P.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            h.value && P.preventDefault();
            break;
          }
          default:
            h.value = void 0;
        }
      },
      selectedElement: h,
      isInvalidInput: E,
      addOnPaste: l,
      addOnBlur: c,
      addOnTab: p,
      dir: f,
      disabled: s,
      delimiter: r,
      max: i,
      id: u,
      displayValue: e.displayValue
    }), (P, $) => (b(), _(o(Ca), null, {
      default: y(() => [
        Y(o(O), {
          ref: o(g),
          dir: o(f),
          as: P.as,
          "as-child": P.asChild,
          "data-invalid": E.value ? "" : void 0,
          "data-disabled": o(s) ? "" : void 0,
          "data-focused": o(S) ? "" : void 0
        }, {
          default: y(() => [
            C(P.$slots, "default", { modelValue: o(v) }),
            o(x) && P.name ? (b(), _(o(to), {
              key: 0,
              name: P.name,
              value: o(v),
              required: P.required,
              disabled: o(s)
            }, null, 8, ["name", "value", "required", "disabled"])) : pe("", !0)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
}), pg = /* @__PURE__ */ w({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(a) {
    const t = a, e = fn(), { forwardRef: n, currentElement: l } = T();
    function s(c) {
      if (!e.addOnBlur.value)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = "");
    }
    function r(c) {
      e.addOnTab.value && i(c);
    }
    async function i(c) {
      if (await le(), c.defaultPrevented)
        return;
      const p = c.target;
      if (!p.value)
        return;
      e.onAddValue(p.value) && (p.value = ""), c.preventDefault();
    }
    function u(c) {
      e.isInvalidInput.value = !1;
      const p = e.delimiter.value;
      if (p === c.data) {
        const f = c.target;
        f.value = f.value.replaceAll(p, ""), e.onAddValue(f.value) && (f.value = "");
      }
    }
    function d(c) {
      if (e.addOnPaste.value) {
        c.preventDefault();
        const p = c.clipboardData;
        if (!p)
          return;
        const f = p.getData("text");
        e.delimiter.value ? f.split(e.delimiter.value).forEach((g) => {
          e.onAddValue(g);
        }) : e.onAddValue(f);
      }
    }
    return se(() => {
      const c = l.value.nodeName === "INPUT" ? l.value : l.value.querySelector("input");
      c && setTimeout(() => {
        t.autoFocus && (c == null || c.focus());
      }, 1);
    }), (c, p) => {
      var f;
      return b(), _(o(O), {
        id: (f = o(e).id) == null ? void 0 : f.value,
        ref: o(n),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        as: c.as,
        "as-child": c.asChild,
        maxlength: c.maxLength,
        placeholder: c.placeholder,
        disabled: o(e).disabled.value,
        "data-invalid": o(e).isInvalidInput.value ? "" : void 0,
        onInput: u,
        onKeydown: [
          re(i, ["enter"]),
          re(r, ["tab"]),
          o(e).onInputKeydown
        ],
        onBlur: s,
        onPaste: d
      }, {
        default: y(() => [
          C(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "as", "as-child", "maxlength", "placeholder", "disabled", "data-invalid", "onKeydown"]);
    };
  }
}), [tr, Af] = Q("TagsInputItem"), fg = /* @__PURE__ */ w({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { value: e } = ne(t), n = fn(), { forwardRef: l, currentElement: s } = T(), r = B(() => n.selectedElement.value === s.value), i = B(() => t.disabled || n.disabled.value), u = Af({
      value: e,
      isSelected: r,
      disabled: i,
      textId: "",
      displayValue: B(() => n.displayValue(e.value))
    });
    return (d, c) => (b(), _(o(Xt), null, {
      default: y(() => [
        Y(o(O), {
          ref: o(l),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": o(u).textId,
          "aria-current": r.value,
          "data-disabled": i.value ? "" : void 0,
          "data-state": r.value ? "active" : "inactive"
        }, {
          default: y(() => [
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), vg = /* @__PURE__ */ w({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(a) {
    const t = a, e = tr();
    return T(), e.textId || (e.textId = me(void 0, "radix-vue-tags-input-item-text")), (n, l) => (b(), _(o(O), k(t, {
      id: o(e).textId
    }), {
      default: y(() => [
        C(n.$slots, "default", {}, () => [
          ve($e(o(e).displayValue.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), mg = /* @__PURE__ */ w({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = fn(), n = tr(), l = B(() => {
      var r;
      return ((r = n.disabled) == null ? void 0 : r.value) || e.disabled.value;
    });
    function s() {
      if (l.value)
        return;
      const r = e.modelValue.value.findIndex((i) => i === n.value.value);
      e.onRemoveValue(r);
    }
    return (r, i) => (b(), _(o(O), k({ tabindex: "-1" }, t, {
      "aria-labelledby": o(n).textId,
      "aria-current": o(n).isSelected.value,
      "data-state": o(n).isSelected.value ? "active" : "inactive",
      "data-disabled": l.value ? "" : void 0,
      type: r.as === "button" ? "button" : void 0,
      onClick: s
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
}), hg = /* @__PURE__ */ w({
  __name: "TagsInputClear",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a;
    T();
    const e = fn();
    function n() {
      e.disabled.value || (e.modelValue.value = []);
    }
    return (l, s) => (b(), _(o(O), k(t, {
      type: l.as === "button" ? "button" : void 0,
      "data-disabled": o(e).disabled.value ? "" : void 0,
      onClick: n
    }), {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "data-disabled"]));
  }
}), [vn, Of] = Q("ToastProvider"), yg = /* @__PURE__ */ w({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(a) {
    const t = a, { label: e, duration: n, swipeDirection: l, swipeThreshold: s } = ne(t), r = I(), i = I(0), u = I(!1), d = I(!1);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const c = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(c);
    }
    return Of({
      label: e,
      duration: n,
      swipeDirection: l,
      swipeThreshold: s,
      toastCount: i,
      viewport: r,
      onViewportChange(c) {
        r.value = c;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (c, p) => C(c.$slots, "default");
  }
}), kf = "toast.swipeStart", Mf = "toast.swipeMove", Vf = "toast.swipeCancel", Ff = "toast.swipeEnd", On = "toast.viewportPause", kn = "toast.viewportResume";
function Aa(a, t, e) {
  const n = e.originalEvent.currentTarget, l = new CustomEvent(a, {
    bubbles: !1,
    cancelable: !0,
    detail: e
  });
  t && n.addEventListener(a, t, { once: !0 }), n.dispatchEvent(l);
}
function al(a, t, e = 0) {
  const n = Math.abs(a.x), l = Math.abs(a.y), s = n > l;
  return t === "left" || t === "right" ? s && n > e : !s && l > e;
}
function Lf(a) {
  return a.nodeType === a.ELEMENT_NODE;
}
function ar(a) {
  const t = [];
  return Array.from(a.childNodes).forEach((n) => {
    if (n.nodeType === n.TEXT_NODE && n.textContent && t.push(n.textContent), Lf(n)) {
      const l = n.ariaHidden || n.hidden || n.style.display === "none", s = n.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (s) {
          const r = n.dataset.radixToastAnnounceAlt;
          r && t.push(r);
        } else
          t.push(...ar(n));
    }
  }), t;
}
const Nf = /* @__PURE__ */ w({
  __name: "ToastAnnounce",
  setup(a) {
    const t = vn(), e = ii(1e3), n = I(!1);
    return Dl(() => {
      n.value = !0;
    }), (l, s) => o(e) || n.value ? (b(), _(o(Yt), { key: 0 }, {
      default: y(() => [
        ve($e(o(t).label.value) + " ", 1),
        C(l.$slots, "default")
      ]),
      _: 3
    })) : pe("", !0);
  }
}), [zf, Kf] = Q("ToastRoot"), Hf = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: !1 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l, currentElement: s } = T(), r = vn(), i = I(null), u = I(null), d = B(() => e.duration || r.duration.value), c = I(0), p = I(d.value), f = I(0), v = I(d.value), g = Dl(() => {
      const D = (/* @__PURE__ */ new Date()).getTime() - c.value;
      v.value = Math.max(p.value - D, 0);
    }, { fpsLimit: 60 });
    function m(D) {
      !D || D === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), c.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(S, D));
    }
    function S() {
      var h, E;
      ((h = s.value) == null ? void 0 : h.contains(document.activeElement)) && ((E = r.viewport.value) == null || E.focus()), r.isClosePausedRef.value = !1, n("close");
    }
    const x = B(() => s.value ? ar(s.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const D = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(D);
    }
    return ye((D) => {
      const h = r.viewport.value;
      if (h) {
        const E = () => {
          m(p.value), g.resume(), n("resume");
        }, P = () => {
          const $ = (/* @__PURE__ */ new Date()).getTime() - c.value;
          p.value = p.value - $, window.clearTimeout(f.value), g.pause(), n("pause");
        };
        return h.addEventListener(On, P), h.addEventListener(kn, E), () => {
          h.removeEventListener(On, P), h.removeEventListener(kn, E);
        };
      }
    }), te(() => [e.open, d.value], () => {
      p.value = d.value, e.open && !r.isClosePausedRef.value && m(d.value);
    }, { immediate: !0 }), jn("Escape", (D) => {
      n("escapeKeyDown", D), D.defaultPrevented || (r.isFocusedToastEscapeKeyDownRef.value = !0, S());
    }), se(() => {
      r.onToastAdd();
    }), Ie(() => {
      r.onToastRemove();
    }), Kf({ onClose: S }), (D, h) => (b(), ce(_e, null, [
      x.value ? (b(), _(Nf, {
        key: 0,
        role: "status",
        "aria-live": D.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: y(() => [
          ve($e(x.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : pe("", !0),
      (b(), _(Wt, {
        to: o(r).viewport.value
      }, [
        Y(o(O), k({
          ref: o(l),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, D.$attrs, {
          as: D.as,
          "as-child": D.asChild,
          "data-state": D.open ? "open" : "closed",
          "data-swipe-direction": o(r).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: h[0] || (h[0] = ie((E) => {
            i.value = { x: E.clientX, y: E.clientY };
          }, ["left"])),
          onPointermove: h[1] || (h[1] = (E) => {
            if (!i.value) return;
            const P = E.clientX - i.value.x, $ = E.clientY - i.value.y, R = !!u.value, M = ["left", "right"].includes(o(r).swipeDirection.value), V = ["left", "up"].includes(o(r).swipeDirection.value) ? Math.min : Math.max, A = M ? V(0, P) : 0, L = M ? 0 : V(0, $), U = E.pointerType === "touch" ? 10 : 2, H = { x: A, y: L }, J = { originalEvent: E, delta: H };
            R ? (u.value = H, o(Aa)(o(Mf), (N) => n("swipeMove", N), J)) : o(al)(H, o(r).swipeDirection.value, U) ? (u.value = H, o(Aa)(o(kf), (N) => n("swipeStart", N), J), E.target.setPointerCapture(E.pointerId)) : (Math.abs(P) > U || Math.abs($) > U) && (i.value = null);
          }),
          onPointerup: h[2] || (h[2] = (E) => {
            const P = u.value, $ = E.target;
            if ($.hasPointerCapture(E.pointerId) && $.releasePointerCapture(E.pointerId), u.value = null, i.value = null, P) {
              const R = E.currentTarget, M = { originalEvent: E, delta: P };
              o(al)(P, o(r).swipeDirection.value, o(r).swipeThreshold.value) ? o(Aa)(o(Ff), (V) => n("swipeEnd", V), M) : o(Aa)(o(Vf), (V) => n("swipeCancel", V), M), R == null || R.addEventListener("click", (V) => V.preventDefault(), {
                once: !0
              });
            }
          })
        }), {
          default: y(() => [
            C(D.$slots, "default", {
              remaining: v.value,
              duration: d.value
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), gg = /* @__PURE__ */ w({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t, { forwardRef: l } = T(), s = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, i) => (b(), _(o(Pe), {
      present: r.forceMount || o(s)
    }, {
      default: y(() => [
        Y(Hf, k({
          ref: o(l),
          open: o(s),
          type: r.type,
          as: r.as,
          "as-child": r.asChild,
          duration: r.duration
        }, r.$attrs, {
          onClose: i[0] || (i[0] = (u) => s.value = !1),
          onPause: i[1] || (i[1] = (u) => n("pause")),
          onResume: i[2] || (i[2] = (u) => n("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => n("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            n("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "move"), p.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: c } = u.detail.delta, p = u.currentTarget;
            p.setAttribute("data-swipe", "end"), p.style.removeProperty("--radix-toast-swipe-move-x"), p.style.removeProperty("--radix-toast-swipe-move-y"), p.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), p.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), s.value = !1;
          })
        }), {
          default: y(({ remaining: u, duration: d }) => [
            C(r.$slots, "default", {
              remaining: u,
              duration: d,
              open: o(s)
            })
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), nr = /* @__PURE__ */ w({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    return (t, e) => (b(), _(o(O), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: y(() => [
        C(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Wf = /* @__PURE__ */ w({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = zf(), { forwardRef: n } = T();
    return (l, s) => (b(), _(nr, { "as-child": "" }, {
      default: y(() => [
        Y(o(O), k(t, {
          ref: o(n),
          type: l.as === "button" ? "button" : void 0,
          onClick: s[0] || (s[0] = (r) => o(e).onClose())
        }), {
          default: y(() => [
            C(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), bg = /* @__PURE__ */ w({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    if (!a.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = T();
    return (n, l) => n.altText ? (b(), _(nr, {
      key: 0,
      "alt-text": n.altText,
      "as-child": ""
    }, {
      default: y(() => [
        Y(Wf, {
          ref: o(e),
          as: n.as,
          "as-child": n.asChild
        }, {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : pe("", !0);
  }
}), nl = /* @__PURE__ */ w({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(a, { emit: t }) {
    const e = t, n = vn();
    return (l, s) => (b(), _(o(Yt), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "fixed" },
      onFocus: s[0] || (s[0] = (r) => {
        var d;
        const i = r.relatedTarget;
        !((d = o(n).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: y(() => [
        C(l.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Cg = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { type: [String, Function], default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(a) {
    const t = a, { hotkey: e, label: n } = ne(t), { forwardRef: l, currentElement: s } = T(), { createCollection: r } = Me(), i = r(s), u = vn(), d = B(() => u.toastCount.value > 0), c = I(), p = I(), f = B(() => e.value.join("+").replace(/Key/g, "").replace(/Digit/g, ""));
    jn(e.value, () => {
      s.value.focus();
    }), se(() => {
      u.onViewportChange(s.value);
    }), ye((g) => {
      const m = s.value;
      if (d.value && m) {
        const S = () => {
          if (!u.isClosePausedRef.value) {
            const P = new CustomEvent(On);
            m.dispatchEvent(P), u.isClosePausedRef.value = !0;
          }
        }, x = () => {
          if (u.isClosePausedRef.value) {
            const P = new CustomEvent(kn);
            m.dispatchEvent(P), u.isClosePausedRef.value = !1;
          }
        }, D = (P) => {
          !m.contains(P.relatedTarget) && x();
        }, h = () => {
          m.contains(document.activeElement) || x();
        }, E = (P) => {
          var M, V, A;
          const $ = P.altKey || P.ctrlKey || P.metaKey;
          if (P.key === "Tab" && !$) {
            const L = document.activeElement, U = P.shiftKey;
            if (P.target === m && U) {
              (M = c.value) == null || M.focus();
              return;
            }
            const N = v({ tabbingDirection: U ? "backwards" : "forwards" }), F = N.findIndex((W) => W === L);
            Oa(N.slice(F + 1)) ? P.preventDefault() : U ? (V = c.value) == null || V.focus() : (A = p.value) == null || A.focus();
          }
        };
        m.addEventListener("focusin", S), m.addEventListener("focusout", D), m.addEventListener("pointermove", S), m.addEventListener("pointerleave", h), m.addEventListener("keydown", E), window.addEventListener("blur", S), window.addEventListener("focus", x), g(() => {
          m.removeEventListener("focusin", S), m.removeEventListener("focusout", D), m.removeEventListener("pointermove", S), m.removeEventListener("pointerleave", h), m.removeEventListener("keydown", E), window.removeEventListener("blur", S), window.removeEventListener("focus", x);
        });
      }
    });
    function v({ tabbingDirection: g }) {
      const S = i.value.map((x) => {
        const D = [x, ...Jn(x)];
        return g === "forwards" ? D : D.reverse();
      });
      return (g === "forwards" ? S.reverse() : S).flat();
    }
    return (g, m) => (b(), _(o(Yi), {
      role: "region",
      "aria-label": typeof o(n) == "string" ? o(n).replace("{hotkey}", f.value) : o(n)(f.value),
      tabindex: "-1",
      style: Oe({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: y(() => [
        d.value ? (b(), _(nl, {
          key: 0,
          ref: (S) => {
            c.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: m[0] || (m[0] = () => {
            const S = v({
              tabbingDirection: "forwards"
            });
            o(Oa)(S);
          })
        }, null, 512)) : pe("", !0),
        Y(o(O), k({
          ref: o(l),
          tabindex: "-1",
          as: g.as,
          "as-child": g.asChild
        }, g.$attrs), {
          default: y(() => [
            C(g.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (b(), _(nl, {
          key: 1,
          ref: (S) => {
            p.value = o(Be)(S);
          },
          onFocusFromOutsideViewport: m[1] || (m[1] = () => {
            const S = v({
              tabbingDirection: "backwards"
            });
            o(Oa)(S);
          })
        }, null, 512)) : pe("", !0)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), wg = /* @__PURE__ */ w({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _g = /* @__PURE__ */ w({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(O), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jf = /* @__PURE__ */ w({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = ae(e, "pressed", n, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function s() {
      l.value = !l.value;
    }
    const r = B(() => l.value ? "on" : "off");
    return (i, u) => (b(), _(o(O), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": o(l),
      "data-state": r.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: s
    }, {
      default: y(() => [
        C(i.$slots, "default", { pressed: o(l) })
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), [Uf, Gf] = Q("ToggleGroupRoot"), qf = /* @__PURE__ */ w({
  __name: "ToggleGroupRoot",
  props: {
    rovingFocus: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    orientation: {},
    dir: {},
    loop: { type: Boolean, default: !0 },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, { loop: l, rovingFocus: s, disabled: r, dir: i } = ne(e), u = be(i), { forwardRef: d } = T(), { modelValue: c, changeModelValue: p, isSingle: f } = Ml(e, n);
    return Gf({
      isSingle: f,
      modelValue: c,
      changeModelValue: p,
      dir: u,
      orientation: e.orientation,
      loop: l,
      rovingFocus: s,
      disabled: r
    }), (v, g) => (b(), _(Ge(o(s) ? o(At) : o(O)), {
      "as-child": "",
      orientation: o(s) ? v.orientation : void 0,
      dir: o(u),
      loop: o(s) ? o(l) : void 0
    }, {
      default: y(() => [
        Y(o(O), {
          ref: o(d),
          role: "group",
          "as-child": v.asChild,
          as: v.as
        }, {
          default: y(() => [
            C(v.$slots, "default", { modelValue: o(c) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Yf = /* @__PURE__ */ w({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = Uf(), n = B(() => {
      var i;
      return ((i = e.disabled) == null ? void 0 : i.value) || t.disabled;
    }), l = B(() => {
      var i;
      return (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), s = B(() => {
      var i;
      return e.isSingle.value ? e.modelValue.value === t.value : (i = e.modelValue.value) == null ? void 0 : i.includes(t.value);
    }), { forwardRef: r } = T();
    return (i, u) => (b(), _(Ge(o(e).rovingFocus.value ? o(Ot) : o(O)), {
      "as-child": "",
      focusable: !n.value,
      active: l.value
    }, {
      default: y(() => [
        Y(o(jf), k(t, {
          ref: o(r),
          disabled: n.value,
          pressed: s.value,
          "onUpdate:pressed": u[0] || (u[0] = (d) => o(e).changeModelValue(i.value))
        }), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["disabled", "pressed"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [or, Xf] = Q("ToolbarRoot"), xg = /* @__PURE__ */ w({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { orientation: e, dir: n } = ne(t), l = be(n), { forwardRef: s } = T();
    return Xf({ orientation: e, dir: l }), (r, i) => (b(), _(o(At), {
      "as-child": "",
      orientation: o(e),
      dir: o(l),
      loop: r.loop
    }, {
      default: y(() => [
        Y(o(O), {
          ref: o(s),
          role: "toolbar",
          "aria-orientation": o(e),
          "as-child": r.asChild,
          as: r.as
        }, {
          default: y(() => [
            C(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Zf = /* @__PURE__ */ w({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = T();
    return (n, l) => (b(), _(o(Ot), {
      "as-child": "",
      focusable: !n.disabled
    }, {
      default: y(() => [
        Y(o(O), k({
          ref: o(e),
          type: n.as === "button" ? "button" : void 0
        }, t), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
}), Sg = /* @__PURE__ */ w({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(a) {
    const t = a, { forwardRef: e } = T();
    return (n, l) => (b(), _(o(Ot), {
      "as-child": "",
      focusable: ""
    }, {
      default: y(() => [
        Y(o(O), k(t, {
          ref: o(e),
          onKeydown: l[0] || (l[0] = (s) => {
            var r;
            s.key === " " && ((r = s.currentTarget) == null || r.click());
          })
        }), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Eg = /* @__PURE__ */ w({
  __name: "ToolbarToggleGroup",
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = or(), s = Re(n);
    return T(), (r, i) => (b(), _(o(qf), k({ ...e, ...o(s) }, {
      "data-orientation": o(l).orientation.value,
      dir: o(l).dir.value,
      "roving-focus": !1
    }), {
      default: y(() => [
        C(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
}), Pg = /* @__PURE__ */ w({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T();
    return (n, l) => (b(), _(Zf, { "as-child": "" }, {
      default: y(() => [
        Y(o(Yf), k(t, { ref: o(e) }), {
          default: y(() => [
            C(n.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), Dg = /* @__PURE__ */ w({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, e = or();
    return T(), (n, l) => (b(), _($s, {
      orientation: o(e).orientation.value,
      "as-child": t.asChild,
      as: n.as
    }, {
      default: y(() => [
        C(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
}), lr = "tooltip.open", [Oo, Jf] = Q("TooltipProvider"), $g = /* @__PURE__ */ w({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: !1 },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean, default: !1 }
  },
  setup(a) {
    const t = a, { delayDuration: e, skipDelayDuration: n, disableHoverableContent: l, disableClosingTrigger: s, ignoreNonKeyboardFocus: r, disabled: i } = ne(t);
    T();
    const u = I(!0), d = I(!1), { start: c, stop: p } = Wn(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return Jf({
      isOpenDelayed: u,
      delayDuration: e,
      onOpen() {
        p(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: d,
      disableHoverableContent: l,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: r
    }), (f, v) => C(f.$slots, "default");
  }
}), [mn, Qf] = Q("TooltipRoot"), Bg = /* @__PURE__ */ w({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: !1 },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    ignoreNonKeyboardFocus: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(a, { emit: t }) {
    const e = a, n = t;
    T();
    const l = Oo(), s = B(() => e.disableHoverableContent ?? l.disableHoverableContent.value), r = B(() => e.disableClosingTrigger ?? l.disableClosingTrigger.value), i = B(() => e.disabled ?? l.disabled.value), u = B(() => e.delayDuration ?? l.delayDuration.value), d = B(() => e.ignoreNonKeyboardFocus ?? l.ignoreNonKeyboardFocus.value), c = ae(e, "open", n, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    te(c, (h) => {
      l.onClose && (h ? (l.onOpen(), document.dispatchEvent(new CustomEvent(lr))) : l.onClose());
    });
    const p = I(!1), f = I(), v = B(() => c.value ? p.value ? "delayed-open" : "instant-open" : "closed"), { start: g, stop: m } = Wn(() => {
      p.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function S() {
      m(), p.value = !1, c.value = !0;
    }
    function x() {
      m(), c.value = !1;
    }
    function D() {
      g();
    }
    return Qf({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: f,
      onTriggerChange(h) {
        f.value = h;
      },
      onTriggerEnter() {
        l.isOpenDelayed.value ? D() : S();
      },
      onTriggerLeave() {
        s.value ? x() : m();
      },
      onOpen: S,
      onClose: x,
      disableHoverableContent: s,
      disableClosingTrigger: r,
      disabled: i,
      ignoreNonKeyboardFocus: d
    }), (h, E) => (b(), _(o(It), null, {
      default: y(() => [
        C(h.$slots, "default", { open: o(c) })
      ]),
      _: 3
    }));
  }
}), Ig = /* @__PURE__ */ w({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(a) {
    const t = a, e = mn(), n = Oo();
    e.contentId || (e.contentId = me(void 0, "radix-vue-tooltip-content"));
    const { forwardRef: l, currentElement: s } = T(), r = I(!1), i = I(!1), u = B(() => e.disabled.value ? {} : {
      click: m,
      focus: v,
      pointermove: p,
      pointerleave: f,
      pointerdown: c,
      blur: g
    });
    se(() => {
      e.onTriggerChange(s.value);
    });
    function d() {
      r.value = !1;
    }
    function c() {
      r.value = !0, document.addEventListener("pointerup", d, { once: !0 });
    }
    function p(S) {
      S.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (e.onTriggerEnter(), i.value = !0);
    }
    function f() {
      e.onTriggerLeave(), i.value = !1;
    }
    function v(S) {
      var x, D;
      r.value || e.ignoreNonKeyboardFocus.value && !((D = (x = S.target).matches) != null && D.call(x, ":focus-visible")) || e.onOpen();
    }
    function g() {
      e.onClose();
    }
    function m() {
      e.disableClosingTrigger.value || e.onClose();
    }
    return (S, x) => (b(), _(o(Tt), { "as-child": "" }, {
      default: y(() => [
        Y(o(O), k({
          ref: o(l),
          "aria-describedby": o(e).open.value ? o(e).contentId : void 0,
          "data-state": o(e).stateAttribute.value,
          as: S.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Nn(u.value)), {
          default: y(() => [
            C(S.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), sr = /* @__PURE__ */ w({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: !0 },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: !1 }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = mn(), { forwardRef: s } = T(), r = Wa(), i = B(() => {
      var c;
      return (c = r.default) == null ? void 0 : c.call(r);
    }), u = B(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let c = "";
      function p(v) {
        typeof v.children == "string" ? c += v.children : Array.isArray(v.children) && v.children.forEach((g) => p(g));
      }
      return (f = i.value) == null || f.forEach((v) => p(v)), c;
    }), d = B(() => {
      const { ariaLabel: c, ...p } = e;
      return p;
    });
    return se(() => {
      je(window, "scroll", (c) => {
        const p = c.target;
        p != null && p.contains(l.trigger.value) && l.onClose();
      }), je(window, lr, l.onClose);
    }), (c, p) => (b(), _(o(yt), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: p[0] || (p[0] = (f) => n("escapeKeyDown", f)),
      onPointerDownOutside: p[1] || (p[1] = (f) => {
        var v;
        o(l).disableClosingTrigger.value && ((v = o(l).trigger.value) != null && v.contains(f.target)) && f.preventDefault(), n("pointerDownOutside", f);
      }),
      onFocusOutside: p[2] || (p[2] = ie(() => {
      }, ["prevent"])),
      onDismiss: p[3] || (p[3] = (f) => o(l).onClose())
    }, {
      default: y(() => [
        Y(o(Pt), k({
          ref: o(s),
          "data-state": o(l).stateAttribute.value
        }, { ...c.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: y(() => [
            C(c.$slots, "default"),
            Y(o(Yt), {
              id: o(l).contentId,
              role: "tooltip"
            }, {
              default: y(() => [
                ve($e(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }));
  }
}), ev = /* @__PURE__ */ w({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(a) {
    const e = Bt(a), { forwardRef: n, currentElement: l } = T(), { trigger: s, onClose: r } = mn(), i = Oo(), { isPointerInTransit: u, onPointerExit: d } = Il(s, l);
    return i.isPointerInTransitRef = u, d(() => {
      r();
    }), (c, p) => (b(), _(sr, k({ ref: o(n) }, o(e)), {
      default: y(() => [
        C(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tg = /* @__PURE__ */ w({
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(a, { emit: t }) {
    const e = a, n = t, l = mn(), s = xe(e, n), { forwardRef: r } = T();
    return (i, u) => (b(), _(o(Pe), {
      present: i.forceMount || o(l).open.value
    }, {
      default: y(() => [
        (b(), _(Ge(o(l).disableHoverableContent.value ? sr : ev), k({ ref: o(r) }, o(s)), {
          default: y(() => [
            C(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rg = /* @__PURE__ */ w({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(a) {
    const t = a;
    return T(), (e, n) => (b(), _(o(qt), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ag = /* @__PURE__ */ w({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(a) {
    const t = a;
    return (e, n) => (b(), _(o(ht), K(j(t)), {
      default: y(() => [
        C(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ko(a) {
  return a.reduce((t, e) => (t.push(e), e.children && t.push(...ko(e.children)), t), []);
}
const [rr, tv] = Q("TreeRoot"), Og = /* @__PURE__ */ w({
  __name: "TreeRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    items: {},
    expanded: {},
    defaultExpanded: {},
    getKey: {},
    selectionBehavior: { default: "toggle" },
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    propagateSelect: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  emits: ["update:modelValue", "update:expanded"],
  setup(a, { emit: t }) {
    const e = a, n = t, { items: l, multiple: s, disabled: r, propagateSelect: i, dir: u } = ne(e), { handleTypeaheadSearch: d } = ga(), c = be(u), p = I(), f = I(!1), v = ia(), g = ae(e, "modelValue", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultValue ?? (s.value ? [] : void 0),
      passive: e.modelValue === void 0,
      deep: !0
    }), m = ae(e, "expanded", n, {
      // @ts-expect-error idk
      defaultValue: e.defaultExpanded ?? [],
      passive: e.expanded === void 0,
      deep: !0
    }), { onSelectItem: S, handleMultipleReplace: x } = Oi(g, e), D = B(() => s.value && Array.isArray(g.value) ? g.value.map((R) => e.getKey(R)) : [e.getKey(g.value ?? {})]);
    function h(R, M = 1, V) {
      return R.reduce((A, L, U) => {
        const H = e.getKey(L), J = m.value.includes(H), N = {
          _id: H,
          value: L,
          index: U,
          level: M,
          parentItem: V,
          hasChildren: !!L.children,
          bind: {
            value: L,
            level: M,
            "aria-setsize": R.length,
            "aria-posinset": U + 1
          }
        };
        return A.push(N), L.children && J && A.push(...h(L.children, M + 1, L)), A;
      }, []);
    }
    const E = B(() => {
      const R = e.items;
      return m.value.map((M) => M), h(R ?? []);
    });
    function P(R) {
      var M;
      if (f.value)
        v.trigger(R);
      else {
        const V = (M = p.value) == null ? void 0 : M.getItems().map((A) => A.ref);
        d(R.key, V);
      }
    }
    function $(R) {
      if (f.value)
        return;
      const M = Ja[R.key];
      le(() => {
        var V;
        x(
          M,
          document.activeElement,
          (V = p.value) == null ? void 0 : V.getItems,
          E.value.map((A) => A.value)
        );
      });
    }
    return tv({
      modelValue: g,
      selectedKeys: D,
      onSelect: (R) => {
        var A;
        const M = (L) => e.getKey(L ?? {}) === e.getKey(R), V = e.multiple && Array.isArray(g.value) ? ((A = g.value) == null ? void 0 : A.findIndex(M)) !== -1 : void 0;
        if (S(R, M), e.propagateSelect && e.multiple && Array.isArray(g.value)) {
          const L = ko(R.children ?? []);
          V ? g.value = [...g.value].filter((U) => !L.some((H) => e.getKey(U ?? {}) === e.getKey(H))) : g.value = [...g.value, ...L];
        }
      },
      expanded: m,
      onToggle(R) {
        if (!(R != null && R.children))
          return;
        const M = e.getKey(R) ?? R;
        m.value.includes(M) ? m.value = m.value.filter((V) => V !== M) : m.value.push(M);
      },
      getKey: e.getKey,
      items: l,
      expandedItems: E,
      disabled: r,
      multiple: s,
      dir: c,
      propagateSelect: i,
      isVirtual: f,
      virtualKeydownHook: v,
      handleMultipleReplace: x
    }), (R, M) => (b(), _(o(At), {
      ref_key: "rovingFocusGroupRef",
      ref: p,
      "as-child": "",
      orientation: "vertical",
      dir: o(c)
    }, {
      default: y(() => [
        Y(o(O), {
          role: "tree",
          as: R.as,
          "as-child": R.asChild,
          "aria-multiselectable": o(s) ? !0 : void 0,
          onKeydown: [
            P,
            re(ie($, ["shift"]), ["up", "down"])
          ]
        }, {
          default: y(() => [
            C(R.$slots, "default", {
              flattenItems: E.value,
              modelValue: o(g),
              expanded: o(m)
            })
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-multiselectable", "onKeydown"])
      ]),
      _: 3
    }, 8, ["dir"]));
  }
}), av = "tree.select", nv = "tree.toggle", kg = /* @__PURE__ */ w({
  inheritAttrs: !1,
  __name: "TreeItem",
  props: {
    value: {},
    level: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["select", "toggle"],
  setup(a, { expose: t, emit: e }) {
    const n = a, l = e, s = rr(), { getItems: r } = Zt(), i = B(() => !!n.value.children), u = B(() => {
      const x = s.getKey(n.value);
      return s.expanded.value.includes(x);
    }), d = B(() => {
      const x = s.getKey(n.value);
      return s.selectedKeys.value.includes(x);
    }), c = B(() => {
      if (s.propagateSelect.value && d.value && i.value && Array.isArray(s.modelValue.value))
        return !ko(n.value.children).every((D) => s.modelValue.value.find((h) => s.getKey(h) === s.getKey(D)));
    });
    function p(x) {
      if (i.value)
        if (u.value) {
          const D = r().map((R) => R.ref), h = document.activeElement, E = D.indexOf(h), $ = [...D].slice(E).find((R) => Number(R.getAttribute("data-indent")) === n.level + 1);
          $ && $.focus();
        } else
          S(x);
    }
    function f(x) {
      if (u.value)
        S(x);
      else {
        const D = r().map((R) => R.ref), h = document.activeElement, E = D.indexOf(h), $ = [...D].slice(0, E).reverse().find((R) => Number(R.getAttribute("data-indent")) === n.level - 1);
        $ && $.focus();
      }
    }
    async function v(x) {
      l("select", x), !(x != null && x.defaultPrevented) && s.onSelect(n.value);
    }
    async function g(x) {
      l("toggle", x), !(x != null && x.defaultPrevented) && s.onToggle(n.value);
    }
    async function m(x) {
      if (!x)
        return;
      const D = { originalEvent: x, value: n.value, isExpanded: u.value, isSelected: d.value };
      zt(av, v, D);
    }
    async function S(x) {
      if (!x)
        return;
      const D = { originalEvent: x, value: n.value, isExpanded: u.value, isSelected: d.value };
      zt(nv, g, D);
    }
    return t({
      isExpanded: u,
      isSelected: d,
      isIndeterminate: c,
      handleToggle: () => s.onToggle(n.value),
      handleSelect: () => s.onSelect(n.value)
    }), (x, D) => (b(), _(o(Ot), {
      "as-child": "",
      value: x.value,
      "allow-shift-key": ""
    }, {
      default: y(() => [
        Y(o(O), k(x.$attrs, {
          role: "treeitem",
          as: x.as,
          "as-child": x.asChild,
          "aria-selected": d.value,
          "aria-expanded": i.value ? u.value : void 0,
          "aria-level": x.level,
          "data-indent": x.level,
          "data-selected": d.value ? "" : void 0,
          "data-expanded": u.value ? "" : void 0,
          onKeydown: [
            re(ie(m, ["self", "prevent"]), ["enter", "space"]),
            D[0] || (D[0] = re(ie((h) => o(s).dir.value === "ltr" ? p(h) : f(h), ["prevent"]), ["right"])),
            D[1] || (D[1] = re(ie((h) => o(s).dir.value === "ltr" ? f(h) : p(h), ["prevent"]), ["left"]))
          ],
          onClick: D[2] || (D[2] = ie((h) => {
            m(h), S(h);
          }, ["stop"]))
        }), {
          default: y(() => [
            C(x.$slots, "default", {
              isExpanded: u.value,
              isSelected: d.value,
              isIndeterminate: c.value,
              handleSelect: () => o(s).onSelect(x.value),
              handleToggle: () => o(s).onToggle(x.value)
            })
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-selected", "aria-expanded", "aria-level", "data-indent", "data-selected", "data-expanded", "onKeydown"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Mg = /* @__PURE__ */ w({
  __name: "TreeVirtualizer",
  props: {
    estimateSize: {},
    textContent: { type: Function }
  },
  setup(a) {
    const t = a, e = Wa(), n = rr(), l = $l(), { getItems: s } = Zt(), r = Dt("", 1e3), i = B(() => {
      const f = (v) => t.textContent ? t.textContent(v) : v.toString().toLowerCase();
      return n.expandedItems.value.map((v, g) => ({
        index: g,
        textContent: f(v.value)
      }));
    });
    n.isVirtual.value = !0;
    const u = B(() => {
      const f = l.value;
      if (f) {
        const v = window.getComputedStyle(f);
        return {
          start: Number.parseFloat(v.paddingBlockStart || v.paddingTop),
          end: Number.parseFloat(v.paddingBlockEnd || v.paddingBottom)
        };
      } else
        return { start: 0, end: 0 };
    }), d = ss(
      {
        get scrollPaddingStart() {
          return u.value.start;
        },
        get scrollPaddingEnd() {
          return u.value.end;
        },
        get count() {
          return n.expandedItems.value.length ?? 0;
        },
        get horizontal() {
          return !1;
        },
        getItemKey(f) {
          return f + n.getKey(n.expandedItems.value[f].value);
        },
        estimateSize() {
          return t.estimateSize ?? 28;
        },
        getScrollElement() {
          return l.value;
        },
        overscan: 12
      }
    ), c = B(() => d.value.getVirtualItems().map((f) => ({
      item: f,
      is: Fn(e.default({
        item: n.expandedItems.value[f.index]
      })[0], {
        "data-index": f.index,
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          transform: `translateY(${f.start}px)`,
          overflowAnchor: "none"
        }
      })
    })));
    function p(f) {
      d.value.scrollToIndex(f, { align: "start" }), requestAnimationFrame(() => {
        const v = l.value.querySelector(`[data-index="${f}"]`);
        v instanceof HTMLElement && v.focus();
      });
    }
    return n.virtualKeydownHook.on((f) => {
      var S;
      const v = f.altKey || f.ctrlKey || f.metaKey;
      if (f.key === "Tab" && !v)
        return;
      const m = Ja[f.key];
      if (["first", "last"].includes(m)) {
        f.preventDefault();
        const x = m === "first" ? 0 : n.expandedItems.value.length - 1;
        d.value.scrollToIndex(x), requestAnimationFrame(() => {
          const D = s();
          (m === "first" ? D[0] : D[D.length - 1]).ref.focus();
        });
      } else if (m === "prev" && f.key !== "ArrowUp") {
        const x = document.activeElement, D = Number(x.getAttribute("data-index")), h = Number(x.getAttribute("data-indent")), P = n.expandedItems.value.slice(0, D).map(($, R) => ({ ...$, index: R })).reverse().find(($) => $.level === h - 1);
        P && p(P.index);
      } else if (!m && !v) {
        r.value += f.key;
        const x = Number((S = document.activeElement) == null ? void 0 : S.getAttribute("data-index")), D = i.value[x].textContent, h = i.value.map(($) => $.textContent), E = Yn(h, r.value, D), P = i.value.find(($) => $.textContent === E);
        P && p(P.index);
      }
      le(() => {
        f.shiftKey && m && n.handleMultipleReplace(m, document.activeElement, s, n.expandedItems.value.map((x) => x.value));
      });
    }), (f, v) => (b(), ce("div", {
      "data-radix-vue-virtualizer": "",
      style: Oe({
        position: "relative",
        width: "100%",
        height: `${o(d).getTotalSize()}px`
      })
    }, [
      (b(!0), ce(_e, null, va(c.value, ({ is: g, item: m }) => (b(), _(Ge(g), {
        key: m.key
      }))), 128))
    ], 4));
  }
}), Vg = /* @__PURE__ */ w({
  __name: "Viewport",
  props: {
    nonce: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(a) {
    const t = a, { forwardRef: e } = T(), { nonce: n } = ne(t), l = Xa(n);
    return (s, r) => (b(), ce(_e, null, [
      Y(o(O), k({ ...s.$attrs, ...t }, {
        ref: o(e),
        "data-radix-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: y(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 16),
      Y(o(O), {
        as: "style",
        nonce: o(l)
      }, {
        default: y(() => [
          ve(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      }, 8, ["nonce"])
    ], 64));
  }
});
export {
  fv as AccordionContent,
  vv as AccordionHeader,
  pv as AccordionItem,
  cv as AccordionRoot,
  mv as AccordionTrigger,
  Ev as AlertDialogAction,
  _v as AlertDialogCancel,
  Cv as AlertDialogContent,
  Sv as AlertDialogDescription,
  wv as AlertDialogOverlay,
  bv as AlertDialogPortal,
  yv as AlertDialogRoot,
  xv as AlertDialogTitle,
  gv as AlertDialogTrigger,
  Pv as AspectRatio,
  Bv as AvatarFallback,
  $v as AvatarImage,
  Dv as AvatarRoot,
  ku as CalendarCell,
  Ku as CalendarCellTrigger,
  Ou as CalendarGrid,
  Nu as CalendarGridBody,
  Lu as CalendarGridHead,
  zu as CalendarGridRow,
  Mu as CalendarHeadCell,
  Ru as CalendarHeader,
  Au as CalendarHeading,
  Vu as CalendarNext,
  Fu as CalendarPrev,
  Tu as CalendarRoot,
  Tv as CheckboxIndicator,
  Iv as CheckboxRoot,
  Li as CollapsibleContent,
  Mi as CollapsibleRoot,
  Vi as CollapsibleTrigger,
  Ov as ComboboxAnchor,
  jv as ComboboxArrow,
  Mv as ComboboxCancel,
  Lv as ComboboxContent,
  Nv as ComboboxEmpty,
  Vv as ComboboxGroup,
  Av as ComboboxInput,
  Kv as ComboboxItem,
  Hv as ComboboxItemIndicator,
  Fv as ComboboxLabel,
  Uv as ComboboxPortal,
  Rv as ComboboxRoot,
  Wv as ComboboxSeparator,
  kv as ComboboxTrigger,
  zv as ComboboxViewport,
  uv as ConfigProvider,
  Zv as ContextMenuArrow,
  tm as ContextMenuCheckboxItem,
  Xv as ContextMenuContent,
  Qv as ContextMenuGroup,
  Jv as ContextMenuItem,
  am as ContextMenuItemIndicator,
  nm as ContextMenuLabel,
  Yv as ContextMenuPortal,
  om as ContextMenuRadioGroup,
  lm as ContextMenuRadioItem,
  Gv as ContextMenuRoot,
  em as ContextMenuSeparator,
  sm as ContextMenuSub,
  rm as ContextMenuSubContent,
  im as ContextMenuSubTrigger,
  qv as ContextMenuTrigger,
  Kd as DateFieldInput,
  Td as DateFieldRoot,
  Sm as DatePickerAnchor,
  Em as DatePickerArrow,
  _m as DatePickerCalendar,
  pm as DatePickerCell,
  bm as DatePickerCellTrigger,
  Pm as DatePickerClose,
  $m as DatePickerContent,
  xm as DatePickerField,
  cm as DatePickerGrid,
  ym as DatePickerGridBody,
  hm as DatePickerGridHead,
  gm as DatePickerGridRow,
  fm as DatePickerHeadCell,
  um as DatePickerHeader,
  dm as DatePickerHeading,
  Cm as DatePickerInput,
  vm as DatePickerNext,
  mm as DatePickerPrev,
  wm as DatePickerRoot,
  Dm as DatePickerTrigger,
  Yd as DateRangeFieldInput,
  qd as DateRangeFieldRoot,
  Wm as DateRangePickerAnchor,
  jm as DateRangePickerArrow,
  Km as DateRangePickerCalendar,
  Rm as DateRangePickerCell,
  Lm as DateRangePickerCellTrigger,
  Um as DateRangePickerClose,
  qm as DateRangePickerContent,
  Hm as DateRangePickerField,
  Tm as DateRangePickerGrid,
  Vm as DateRangePickerGridBody,
  Mm as DateRangePickerGridHead,
  Fm as DateRangePickerGridRow,
  Am as DateRangePickerHeadCell,
  Bm as DateRangePickerHeader,
  Im as DateRangePickerHeading,
  Nm as DateRangePickerInput,
  Om as DateRangePickerNext,
  km as DateRangePickerPrev,
  zm as DateRangePickerRoot,
  Gm as DateRangePickerTrigger,
  Kl as DialogClose,
  vu as DialogContent,
  gu as DialogDescription,
  hu as DialogOverlay,
  hv as DialogPortal,
  ji as DialogRoot,
  yu as DialogTitle,
  Ui as DialogTrigger,
  Qm as DropdownMenuArrow,
  nh as DropdownMenuCheckboxItem,
  Jm as DropdownMenuContent,
  th as DropdownMenuGroup,
  eh as DropdownMenuItem,
  oh as DropdownMenuItemIndicator,
  lh as DropdownMenuLabel,
  Zm as DropdownMenuPortal,
  sh as DropdownMenuRadioGroup,
  rh as DropdownMenuRadioItem,
  Ym as DropdownMenuRoot,
  ah as DropdownMenuSeparator,
  ih as DropdownMenuSub,
  uh as DropdownMenuSubContent,
  dh as DropdownMenuSubTrigger,
  Xm as DropdownMenuTrigger,
  ph as EditableArea,
  hh as EditableCancelTrigger,
  yh as EditableEditTrigger,
  fh as EditableInput,
  vh as EditablePreview,
  ch as EditableRoot,
  mh as EditableSubmitTrigger,
  _h as HoverCardArrow,
  wh as HoverCardContent,
  Ch as HoverCardPortal,
  gh as HoverCardRoot,
  bh as HoverCardTrigger,
  xh as Label,
  Eh as ListboxContent,
  Ph as ListboxFilter,
  Ih as ListboxGroup,
  Th as ListboxGroupLabel,
  Dh as ListboxItem,
  $h as ListboxItemIndicator,
  Sh as ListboxRoot,
  Bh as ListboxVirtualizer,
  Vh as MenubarArrow,
  zh as MenubarCheckboxItem,
  Mh as MenubarContent,
  Lh as MenubarGroup,
  Fh as MenubarItem,
  Kh as MenubarItemIndicator,
  Hh as MenubarLabel,
  Ah as MenubarMenu,
  kh as MenubarPortal,
  Wh as MenubarRadioGroup,
  jh as MenubarRadioItem,
  Rh as MenubarRoot,
  Nh as MenubarSeparator,
  Uh as MenubarSub,
  Gh as MenubarSubContent,
  qh as MenubarSubTrigger,
  Oh as MenubarTrigger,
  Zh as NavigationMenuContent,
  Jh as NavigationMenuIndicator,
  Xh as NavigationMenuItem,
  Qh as NavigationMenuLink,
  ey as NavigationMenuList,
  Yh as NavigationMenuRoot,
  ty as NavigationMenuSub,
  ay as NavigationMenuTrigger,
  ny as NavigationMenuViewport,
  ry as NumberFieldDecrement,
  sy as NumberFieldIncrement,
  ly as NumberFieldInput,
  oy as NumberFieldRoot,
  uy as PaginationEllipsis,
  dy as PaginationFirst,
  cy as PaginationLast,
  py as PaginationList,
  fy as PaginationListItem,
  vy as PaginationNext,
  my as PaginationPrev,
  iy as PaginationRoot,
  yy as PinInputInput,
  hy as PinInputRoot,
  bs as PopoverAnchor,
  ys as PopoverArrow,
  gs as PopoverClose,
  hs as PopoverContent,
  vs as PopoverPortal,
  ps as PopoverRoot,
  fs as PopoverTrigger,
  O as Primitive,
  by as ProgressIndicator,
  gy as ProgressRoot,
  _y as RadioGroupIndicator,
  wy as RadioGroupItem,
  Cy as RadioGroupRoot,
  lp as RangeCalendarCell,
  pp as RangeCalendarCellTrigger,
  op as RangeCalendarGrid,
  dp as RangeCalendarGridBody,
  up as RangeCalendarGridHead,
  cp as RangeCalendarGridRow,
  sp as RangeCalendarHeadCell,
  ap as RangeCalendarHeader,
  np as RangeCalendarHeading,
  rp as RangeCalendarNext,
  ip as RangeCalendarPrev,
  tp as RangeCalendarRoot,
  Dy as ScrollAreaCorner,
  xy as ScrollAreaRoot,
  Ey as ScrollAreaScrollbar,
  Py as ScrollAreaThumb,
  Sy as ScrollAreaViewport,
  Ry as SelectArrow,
  Ty as SelectContent,
  My as SelectGroup,
  Hy as SelectIcon,
  Oy as SelectItem,
  ky as SelectItemIndicator,
  Fy as SelectItemText,
  Vy as SelectLabel,
  Iy as SelectPortal,
  $y as SelectRoot,
  zy as SelectScrollDownButton,
  Ny as SelectScrollUpButton,
  Ay as SelectSeparator,
  By as SelectTrigger,
  Ky as SelectValue,
  Ly as SelectViewport,
  Np as Separator,
  Gy as SliderRange,
  Wy as SliderRoot,
  jy as SliderThumb,
  Uy as SliderTrack,
  Xn as Slot,
  qy as SplitterGroup,
  Yy as SplitterPanel,
  Xy as SplitterResizeHandle,
  eg as StepperDescription,
  ag as StepperIndicator,
  Jy as StepperItem,
  Zy as StepperRoot,
  ng as StepperSeparator,
  tg as StepperTitle,
  Qy as StepperTrigger,
  og as SwitchRoot,
  lg as SwitchThumb,
  ig as TabsContent,
  dg as TabsIndicator,
  rg as TabsList,
  sg as TabsRoot,
  ug as TabsTrigger,
  hg as TagsInputClear,
  pg as TagsInputInput,
  fg as TagsInputItem,
  mg as TagsInputItemDelete,
  vg as TagsInputItemText,
  cg as TagsInputRoot,
  bg as ToastAction,
  Wf as ToastClose,
  _g as ToastDescription,
  yg as ToastProvider,
  gg as ToastRoot,
  wg as ToastTitle,
  Cg as ToastViewport,
  jf as Toggle,
  Yf as ToggleGroupItem,
  qf as ToggleGroupRoot,
  Zf as ToolbarButton,
  Sg as ToolbarLink,
  xg as ToolbarRoot,
  Dg as ToolbarSeparator,
  Eg as ToolbarToggleGroup,
  Pg as ToolbarToggleItem,
  Rg as TooltipArrow,
  Tg as TooltipContent,
  Ag as TooltipPortal,
  $g as TooltipProvider,
  Bg as TooltipRoot,
  Ig as TooltipTrigger,
  kg as TreeItem,
  Og as TreeRoot,
  Mg as TreeVirtualizer,
  Vg as Viewport,
  Yt as VisuallyHidden,
  Q as createContext,
  ha as useBodyScrollLock,
  Un as useDateFormatter,
  Re as useEmitAsProps,
  T as useForwardExpose,
  Bt as useForwardProps,
  xe as useForwardPropsEmits,
  me as useId,
  Al as useStateMachine,
  dv as withDefault
};
