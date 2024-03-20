// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [],
      predicates: [],
      rules: [],
    },
    runtime: [],
  };

  var aa,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca = function (a) {
      return (a.raw = a);
    },
    ea = function (a, b) {
      a.raw = b;
      return a;
    },
    fa = function (a) {
      var b =
        "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if ("number" == typeof a.length) return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ia = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ja = function (a) {
      return a instanceof Array ? a : ia(fa(a));
    },
    ka =
      "function" == typeof Object.create
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    la;
  if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
  else {
    var ma;
    a: {
      var na = { a: !0 },
        oa = {};
      try {
        oa.__proto__ = na;
        ma = oa.a;
        break a;
      } catch (a) {}
      ma = !1;
    }
    la = ma
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var pa = la,
    qa = function (a, b) {
      a.prototype = ka(b.prototype);
      a.prototype.constructor = a;
      if (pa) pa(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Dn = b.prototype;
    }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var ra = this || self,
    ta = function (a) {
      return a;
    };
  var ua = function () {},
    xa = function (a) {
      return "function" === typeof a;
    },
    g = function (a) {
      return "string" === typeof a;
    },
    ya = function (a) {
      return "number" === typeof a && !isNaN(a);
    },
    za = Array.isArray,
    Aa = function (a, b) {
      if (a && za(a))
        for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    },
    Ba = function (a, b) {
      if (!ya(a) || !ya(b) || a > b) (a = 0), (b = 2147483647);
      return Math.floor(Math.random() * (b - a + 1) + a);
    },
    Da = function (a, b) {
      for (var c = new Ca(), d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1;
    },
    k = function (a, b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    },
    Ea = function (a) {
      return (
        !!a &&
        ("[object Arguments]" === Object.prototype.toString.call(a) ||
          Object.prototype.hasOwnProperty.call(a, "callee"))
      );
    },
    Fa = function (a) {
      return Math.round(Number(a)) || 0;
    },
    Ga = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a;
    },
    Ha = function (a) {
      var b = [];
      if (za(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b;
    },
    Ia = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : "";
    },
    Ja = function () {
      return new Date(Date.now());
    },
    Ka = function () {
      return Ja().getTime();
    },
    Ca = function () {
      this.prefix = "gtm.";
      this.values = {};
    };
  Ca.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  Ca.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  var La = function (a, b, c) {
      return a && a.hasOwnProperty(b) ? a[b] : c;
    },
    Ma = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = void 0;
          try {
            c();
          } catch (d) {}
        }
      };
    },
    Na = function (a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    },
    Oa = function (a, b) {
      for (var c = [], d = 0; d < a.length; d++)
        c.push(a[d]), c.push.apply(c, b[a[d]] || []);
      return c;
    },
    Pa = function (a, b) {
      return a.substring(0, b.length) === b;
    },
    Qa = function (a, b) {
      for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
        d = d[e[f]] = {};
      d[e[e.length - 1]] = b;
      return c;
    },
    Ra = /^\w{1,9}$/,
    Sa = function (a, b) {
      a = a || {};
      b = b || ",";
      var c = [];
      k(a, function (d, e) {
        Ra.test(d) && e && c.push(d);
      });
      return c.join(b);
    },
    Ta = function (a, b) {
      function c() {
        ++d === b && (e(), (e = null), (c.done = !0));
      }
      var d = 0,
        e = a;
      c.done = !1;
      return c;
    }; /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var Ua = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Va = function (a) {
      if (null == a) return String(a);
      var b = Ua.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Xa = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Ya = function (a) {
      if (!a || "object" != Va(a) || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Xa(a, "constructor") &&
          !Xa(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return void 0 === b || Xa(a, b);
    },
    A = function (a, b) {
      var c = b || ("array" == Va(a) ? [] : {}),
        d;
      for (d in a)
        if (Xa(a, d)) {
          var e = a[d];
          "array" == Va(e)
            ? ("array" != Va(c[d]) && (c[d] = []), (c[d] = A(e, c[d])))
            : Ya(e)
            ? (Ya(c[d]) || (c[d] = {}), (c[d] = A(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Za() {
    for (var a = $a, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function ab() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var $a, bb;
  function cb(a) {
    $a = $a || ab();
    bb = bb || Za();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        h = d ? a.charCodeAt(c + 1) : 0,
        l = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (h >> 4),
        p = ((h & 15) << 2) | (l >> 6),
        q = l & 63;
      e || ((q = 64), d || (p = 64));
      b.push($a[m], $a[n], $a[p], $a[q]);
    }
    return b.join("");
  }
  function db(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = bb[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    $a = $a || ab();
    bb = bb || Za();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        h = b(64),
        l = b(64);
      if (64 === l && -1 === e) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      64 != h &&
        ((c += String.fromCharCode(((f << 4) & 240) | (h >> 2))),
        64 != l && (c += String.fromCharCode(((h << 6) & 192) | l)));
    }
  }
  var eb = {},
    fb = function (a, b) {
      eb[a] = eb[a] || [];
      eb[a][b] = !0;
    },
    gb = function (a) {
      var b = eb[a];
      if (!b || 0 === b.length) return "";
      for (var c = [], d = 0, e = 0; e < b.length; e++)
        0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
          b[e] && (d |= 1 << e % 8);
      0 < d && c.push(String.fromCharCode(d));
      return cb(c.join("")).replace(/\.+$/, "");
    },
    hb = function () {
      for (var a = [], b = eb.fdr || [], c = 0; c < b.length; c++)
        b[c] && a.push(c);
      return 0 < a.length ? a : void 0;
    };
  var ib,
    jb = function () {
      if (void 0 === ib) {
        var a = null,
          b = ra.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", {
              createHTML: ta,
              createScript: ta,
              createScriptURL: ta,
            });
          } catch (c) {
            ra.console && ra.console.error(c.message);
          }
          ib = a;
        } else ib = a;
      }
      return ib;
    };
  var kb = function (a) {
    this.h = a;
  };
  kb.prototype.toString = function () {
    return this.h + "";
  };
  var lb = {}; /*

 SPDX-License-Identifier: Apache-2.0
*/
  var mb = ca([""]),
    nb = ea(["\x00"], ["\\0"]),
    ob = ea(["\n"], ["\\n"]),
    pb = ea(["\x00"], ["\\u0000"]);
  function qb(a) {
    return -1 === a.toString().indexOf("`");
  }
  qb(function (a) {
    return a(mb);
  }) ||
    qb(function (a) {
      return a(nb);
    }) ||
    qb(function (a) {
      return a(ob);
    }) ||
    qb(function (a) {
      return a(pb);
    });
  var rb = /^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
  var sb = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if ("string" === typeof a)
          return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  var tb, ub;
  a: {
    for (var vb = ["CLOSURE_FLAGS"], wb = ra, xb = 0; xb < vb.length; xb++)
      if (((wb = wb[vb[xb]]), null == wb)) {
        ub = null;
        break a;
      }
    ub = wb;
  }
  var yb = ub && ub[610401301];
  tb = null != yb ? yb : !1;
  function zb() {
    var a = ra.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var Ab,
    Bb = ra.navigator;
  Ab = Bb ? Bb.userAgentData || null : null;
  function Cb(a) {
    return tb
      ? Ab
        ? Ab.brands.some(function (b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a);
          })
        : !1
      : !1;
  }
  function Db(a) {
    return -1 != zb().indexOf(a);
  }
  function Eb() {
    return tb ? !!Ab && 0 < Ab.brands.length : !1;
  }
  function Fb() {
    return Eb() ? !1 : Db("Opera");
  }
  function Gb() {
    return Db("Firefox") || Db("FxiOS");
  }
  function Hb() {
    return Eb()
      ? Cb("Chromium")
      : ((Db("Chrome") || Db("CriOS")) && !(Eb() ? 0 : Db("Edge"))) ||
          Db("Silk");
  }
  var Ib = {},
    Jb = function (a) {
      this.h = a;
    };
  Jb.prototype.toString = function () {
    return this.h.toString();
  };
  var Kb = function (a) {
    return a instanceof Jb && a.constructor === Jb
      ? a.h
      : "type_error:SafeHtml";
  };
  function Lb(a) {
    var b = a.tagName;
    if ("SCRIPT" === b || "STYLE" === b) throw Error("");
  }
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function Mb(a) {
    var b = (a = Nb(a)),
      c = jb(),
      d = c ? c.createHTML(b) : b;
    return new Jb(d, Ib);
  }
  function Nb(a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a;
  }
  var F = window,
    G = document,
    Ob = navigator,
    Pb = G.currentScript && G.currentScript.src,
    Qb = function (a, b) {
      var c = F[a];
      F[a] = void 0 === c ? b : c;
      return F[a];
    },
    Rb = function (a, b) {
      b &&
        (a.addEventListener
          ? (a.onload = b)
          : (a.onreadystatechange = function () {
              a.readyState in { loaded: 1, complete: 1 } &&
                ((a.onreadystatechange = null), b());
            }));
    },
    Sb = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    Tb = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function Ub(a, b, c) {
    b &&
      k(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  var Vb = function (a, b, c, d, e) {
      var f = G.createElement("script");
      Ub(f, d, Sb);
      f.type = "text/javascript";
      f.async = d && !1 === d.async ? !1 : !0;
      var h,
        l = Nb(a),
        m = jb(),
        n = m ? m.createScriptURL(l) : l;
      h = new kb(n, lb);
      f.src =
        h instanceof kb && h.constructor === kb
          ? h.h
          : "type_error:TrustedResourceUrl";
      var p,
        q,
        t,
        r =
          null ==
          (t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window)
            .document).querySelector)
            ? void 0
            : t.call(q, "script[nonce]");
      (p = r ? r.nonce || r.getAttribute("nonce") || "" : "") &&
        f.setAttribute("nonce", p);
      Rb(f, b);
      c && (f.onerror = c);
      if (e) e.appendChild(f);
      else {
        var u = G.getElementsByTagName("script")[0] || G.body || G.head;
        u.parentNode.insertBefore(f, u);
      }
      return f;
    },
    Wb = function () {
      if (Pb) {
        var a = Pb.toLowerCase();
        if (0 === a.indexOf("https://")) return 2;
        if (0 === a.indexOf("http://")) return 3;
      }
      return 1;
    },
    Xb = function (a, b, c, d, e) {
      var f;
      f = void 0 === f ? !0 : f;
      var h = e,
        l = !1;
      h || ((h = G.createElement("iframe")), (l = !0));
      Ub(h, c, Tb);
      d &&
        k(d, function (n, p) {
          h.dataset[n] = p;
        });
      f &&
        ((h.height = "0"),
        (h.width = "0"),
        (h.style.display = "none"),
        (h.style.visibility = "hidden"));
      if (l) {
        var m = (G.body && G.body.lastChild) || G.body || G.head;
        m.parentNode.insertBefore(h, m);
      }
      Rb(h, b);
      void 0 !== a && (h.src = a);
      return h;
    },
    Yb = function (a, b, c, d) {
      var e = new Image(1, 1);
      Ub(e, d, {});
      e.onload = function () {
        e.onload = null;
        b && b();
      };
      e.onerror = function () {
        e.onerror = null;
        c && c();
      };
      e.src = a;
    },
    Zb = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, !!d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    },
    $b = function (a, b, c) {
      a.removeEventListener
        ? a.removeEventListener(b, c, !1)
        : a.detachEvent && a.detachEvent("on" + b, c);
    },
    I = function (a) {
      F.setTimeout(a, 0);
    },
    ac = function (a, b) {
      return a && b && a.attributes && a.attributes[b]
        ? a.attributes[b].value
        : null;
    },
    bc = function (a) {
      var b = a.innerText || a.textContent || "";
      b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
      b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
      return b;
    },
    cc = function (a) {
      var b = G.createElement("div"),
        c = b,
        d = Mb("A<div>" + a + "</div>");
      1 === c.nodeType && Lb(c);
      c.innerHTML = Kb(d);
      b = b.lastChild;
      for (var e = []; b.firstChild; ) e.push(b.removeChild(b.firstChild));
      return e;
    },
    dc = function (a, b, c) {
      c = c || 100;
      for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
      for (var f = a, h = 0; f && h <= c; h++) {
        if (d[String(f.tagName).toLowerCase()]) return f;
        f = f.parentElement;
      }
      return null;
    },
    ec = function (a) {
      var b;
      try {
        b = Ob.sendBeacon && Ob.sendBeacon(a);
      } catch (c) {
        fb("TAGGING", 15);
      }
      b || Yb(a);
    },
    fc = function (a, b) {
      try {
        if (Ob.sendBeacon) return Ob.sendBeacon(a, b);
      } catch (c) {
        fb("TAGGING", 15);
      }
      return !1;
    },
    gc = {
      cache: "no-store",
      credentials: "include",
      keepalive: !0,
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
    },
    hc = function (a, b) {
      var c = { Sl: !0 };
      if ("fetch" in F) {
        var d = Object.assign({}, gc);
        b && (d.body = b);
        c &&
          (c.attributionReporting &&
            (d.attributionReporting = c.attributionReporting),
          c.Ek && (d.browsingTopics = c.Ek));
        try {
          return F.fetch(a, d), !0;
        } catch (e) {}
      }
      if (c && c.Sl) return !1;
      if (b) return fc(a, b);
      ec(a);
      return !0;
    },
    ic = function (a, b) {
      var c = a[b];
      c && "string" === typeof c.animVal && (c = c.animVal);
      return c;
    },
    jc = function () {
      var a = F.performance;
      if (a && xa(a.now)) return a.now();
    },
    kc = function () {
      return F.performance || void 0;
    };
  var lc = function (a) {
    this.message = a;
  };
  function mc(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return void 0 === b
      ? new lc(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function nc(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var oc = (function () {
    var a = function (b) {
      return {
        toString: function () {
          return b;
        },
      };
    };
    return {
      ij: a("consent"),
      Sg: a("convert_case_to"),
      Tg: a("convert_false_to"),
      Ug: a("convert_null_to"),
      Vg: a("convert_true_to"),
      Wg: a("convert_undefined_to"),
      Mm: a("debug_mode_metadata"),
      ma: a("function"),
      Rf: a("instance_name"),
      hk: a("live_only"),
      ik: a("malware_disabled"),
      jk: a("metadata"),
      mk: a("original_activity_id"),
      fn: a("original_vendor_template_id"),
      dn: a("once_on_load"),
      lk: a("once_per_event"),
      ai: a("once_per_load"),
      kn: a("priority_override"),
      ln: a("respected_consent_types"),
      gi: a("setup_tags"),
      yd: a("tag_id"),
      li: a("teardown_tags"),
    };
  })();
  var Lc;
  var Mc = [],
    Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = {},
    Sc,
    Tc,
    Uc = function (a) {
      Tc = Tc || a;
    },
    Vc = function (a) {},
    Wc,
    Xc = [],
    Yc = [],
    Zc = function (a, b) {
      var c = a[oc.ma],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = Rc[c],
        f =
          b &&
          2 === b.type &&
          d.reportMacroDiscrepancy &&
          e &&
          -1 !== Xc.indexOf(c),
        h = {},
        l = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          0 === m.indexOf("vtp_") &&
          (e && (h[m] = a[m]), !e || f) &&
          (l[m.substr(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (h.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (null == b.name) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (null == q) n = "";
            else {
              var t;
              switch (p) {
                case 2:
                  t = Mc[q];
                  break;
                case 1:
                  t = Pc[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var r = t && t[oc.Rf];
              n = r ? String(r) : "";
            }
          }
          b.name = n;
        }
        e && ((h.vtp_gtmEntityIndex = b.index), (h.vtp_gtmEntityName = b.name));
      }
      var u, v, w;
      if (f && -1 === Yc.indexOf(c)) {
        Yc.push(c);
        var x = Ka();
        u = e(h);
        var y = Ka() - x,
          B = Ka();
        v = Lc(c, l, b);
        w = y - (Ka() - B);
      } else if ((e && (u = e(h)), !e || f)) v = Lc(c, l, b);
      if (f && d) {
        d.reportMacroDiscrepancy(d.id, c, void 0, !0);
        var z;
        a: {
          var C = u;
          if (void 0 == C || za(C) || Ya(C)) z = !0;
          else {
            switch (typeof C) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                z = !0;
                break a;
            }
            z = !1;
          }
        }
        z
          ? (za(u) ? za(v) : Ya(u) ? Ya(v) : u === v) ||
            d.reportMacroDiscrepancy(d.id, c)
          : u !== v && d.reportMacroDiscrepancy(d.id, c);
        void 0 != w && d.reportMacroDiscrepancy(d.id, c, w);
      }
      return e ? u : v;
    },
    ad = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = $c(a[e], b, c));
      return d;
    },
    $c = function (a, b, c) {
      if (za(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push($c(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var h = Mc[f];
            if (!h || b.isBlocked(h)) return;
            c[f] = !0;
            var l = String(h[oc.Rf]);
            try {
              var m = ad(h, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = Zc(m, { event: b, index: f, type: 2, name: l });
              Wc && (d = Wc.Kk(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), l), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[$c(a[n], b, c)] = $c(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var t = $c(a[q], b, c);
              Tc && (p = p || Tc.El(t));
              d.push(t);
            }
            return Tc && p ? Tc.Mk(d) : d.join("");
          case "escape":
            d = $c(a[1], b, c);
            if (Tc && za(a[1]) && "macro" === a[1][0] && Tc.Fl(a))
              return Tc.fm(d);
            d = String(d);
            for (var r = 2; r < a.length; r++) pc[a[r]] && (d = pc[a[r]](d));
            return d;
          case "tag":
            var u = a[1];
            if (!Pc[u])
              throw Error("Unable to resolve tag reference " + u + ".");
            return (d = { xi: a[2], index: u });
          case "zb":
            var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            v[oc.ma] = a[1];
            var w = bd(v, b, c),
              x = !!a[4];
            return x || 2 !== w ? x !== (1 === w) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    bd = function (a, b, c) {
      try {
        return Sc(ad(a, b, c));
      } catch (d) {
        JSON.stringify(a);
      }
      return 2;
    },
    cd = function (a) {
      var b = a[oc.ma];
      if (!b) throw Error("Error: No function name given for function call.");
      return !!Rc[b];
    };
  var fd = function (a) {
      function b(t) {
        for (var r = 0; r < t.length; r++) d[t[r]] = !0;
      }
      for (var c = [], d = [], e = dd(a), f = 0; f < Nc.length; f++) {
        var h = Nc[f],
          l = ed(h, e);
        if (l) {
          for (var m = h.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
          b(h.block || []);
        } else null === l && b(h.block || []);
      }
      for (var p = [], q = 0; q < Pc.length; q++) c[q] && !d[q] && (p[q] = !0);
      return p;
    },
    ed = function (a, b) {
      for (var c = a["if"] || [], d = 0; d < c.length; d++) {
        var e = b(c[d]);
        if (0 === e) return !1;
        if (2 === e) return null;
      }
      for (var f = a.unless || [], h = 0; h < f.length; h++) {
        var l = b(f[h]);
        if (2 === l) return null;
        if (1 === l) return !1;
      }
      return !0;
    },
    dd = function (a) {
      var b = [];
      return function (c) {
        void 0 === b[c] && (b[c] = bd(Oc[c], a));
        return b[c];
      };
    };
  var gd = {
    Kk: function (a, b) {
      b[oc.Sg] &&
        "string" === typeof a &&
        (a = 1 == b[oc.Sg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(oc.Ug) && null === a && (a = b[oc.Ug]);
      b.hasOwnProperty(oc.Wg) && void 0 === a && (a = b[oc.Wg]);
      b.hasOwnProperty(oc.Vg) && !0 === a && (a = b[oc.Vg]);
      b.hasOwnProperty(oc.Tg) && !1 === a && (a = b[oc.Tg]);
      return a;
    },
  };
  var hd = [],
    id = {},
    jd = function (a) {
      return void 0 == hd[a] ? !1 : hd[a];
    };
  var xd = [
      "matches",
      "webkitMatchesSelector",
      "mozMatchesSelector",
      "msMatchesSelector",
      "oMatchesSelector",
    ],
    yd = new Ca();
  var Fd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Gd(a, b) {
    for (var c = "", d = !0; 7 < a; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = mc(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = mc(a | b) + c);
  }
  var Id = function (a) {
      return Hd ? G.querySelectorAll(a) : null;
    },
    Jd = function (a, b) {
      if (!Hd) return null;
      if (Element.prototype.closest)
        try {
          return a.closest(b);
        } catch (e) {
          return null;
        }
      var c =
          Element.prototype.matches ||
          Element.prototype.webkitMatchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector,
        d = a;
      if (!G.documentElement.contains(d)) return null;
      do {
        try {
          if (c.call(d, b)) return d;
        } catch (e) {
          break;
        }
        d = d.parentElement || d.parentNode;
      } while (null !== d && 1 === d.nodeType);
      return null;
    },
    Kd = !1;
  if (G.querySelectorAll)
    try {
      var Ld = G.querySelectorAll(":root");
      Ld && 1 == Ld.length && Ld[0] == G.documentElement && (Kd = !0);
    } catch (a) {}
  var Hd = Kd;
  var J = function (a) {
    fb("GTM", a);
  };
  var L = {
      g: {
        oa: "ad_personalization",
        F: "ad_storage",
        K: "ad_user_data",
        O: "analytics_storage",
        be: "region",
        hc: "consent_updated",
        Ng: "wait_for_update",
        mj: "app_remove",
        nj: "app_store_refund",
        oj: "app_store_subscription_cancel",
        pj: "app_store_subscription_convert",
        qj: "app_store_subscription_renew",
        Xg: "add_payment_info",
        Yg: "add_shipping_info",
        ic: "add_to_cart",
        jc: "remove_from_cart",
        Zg: "view_cart",
        Hb: "begin_checkout",
        kc: "select_item",
        ab: "view_item_list",
        ub: "select_promotion",
        cb: "view_promotion",
        Ha: "purchase",
        mc: "refund",
        Ia: "view_item",
        ah: "add_to_wishlist",
        rj: "exception",
        sj: "first_open",
        tj: "first_visit",
        aa: "gtag.config",
        Oa: "gtag.get",
        uj: "in_app_purchase",
        nc: "page_view",
        vj: "screen_view",
        wj: "session_start",
        xj: "timing_complete",
        yj: "track_social",
        Lc: "user_engagement",
        eb: "gclgb",
        Pa: "gclid",
        W: "ads_data_redaction",
        bh: "gad_source",
        Mc: "gclid_url",
        eh: "gclsrc",
        ce: "wbraid",
        fa: "allow_ad_personalization_signals",
        vf: "allow_custom_scripts",
        wf: "allow_display_features",
        de: "allow_enhanced_conversions",
        fb: "allow_google_signals",
        Da: "allow_interest_groups",
        zj: "app_id",
        Aj: "app_installer_id",
        Bj: "app_name",
        Cj: "app_version",
        vb: "auid",
        Dj: "auto_detection_enabled",
        Ib: "aw_remarketing",
        xf: "aw_remarketing_only",
        ee: "discount",
        fe: "aw_feed_country",
        he: "aw_feed_language",
        U: "items",
        ie: "aw_merchant_id",
        fh: "aw_basket_type",
        Nc: "campaign_content",
        Oc: "campaign_id",
        Pc: "campaign_medium",
        Qc: "campaign_name",
        Rc: "campaign",
        Sc: "campaign_source",
        Tc: "campaign_term",
        hb: "client_id",
        gh: "rnd",
        Ej: "content_group",
        Fj: "content_type",
        Ua: "conversion_cookie_prefix",
        Uc: "conversion_id",
        wa: "conversion_linker",
        Gj: "conversion_linker_disabled",
        Jb: "conversion_api",
        je: "cookie_deprecation",
        Qa: "cookie_domain",
        Ra: "cookie_expires",
        Va: "cookie_flags",
        oc: "cookie_name",
        Kb: "cookie_path",
        Ja: "cookie_prefix",
        qc: "cookie_update",
        sc: "country",
        xa: "currency",
        ke: "customer_lifetime_value",
        Vc: "custom_map",
        yf: "gcldc",
        Wc: "dclid",
        Hj: "debug_mode",
        ba: "developer_id",
        Ij: "disable_merchant_reported_purchases",
        Xc: "dc_custom_params",
        Jj: "dc_natural_search",
        hh: "dynamic_event_settings",
        ih: "affiliation",
        me: "checkout_option",
        zf: "checkout_step",
        jh: "coupon",
        Yc: "item_list_name",
        Af: "list_name",
        Kj: "promotions",
        Zc: "shipping",
        Bf: "tax",
        ne: "engagement_time_msec",
        oe: "enhanced_client_id",
        pe: "enhanced_conversions",
        kh: "enhanced_conversions_automatic_settings",
        qe: "estimated_delivery_date",
        Cf: "euid_logged_in_state",
        ad: "event_callback",
        Lj: "event_category",
        jb: "event_developer_id_string",
        Mj: "event_label",
        se: "event",
        te: "event_settings",
        ue: "event_timeout",
        Nj: "description",
        Oj: "fatal",
        Pj: "experiments",
        Df: "firebase_id",
        uc: "first_party_collection",
        ve: "_x_20",
        kb: "_x_19",
        lh: "fledge_drop_reason",
        mh: "fledge",
        nh: "flight_error_code",
        oh: "flight_error_message",
        ph: "fl_activity_category",
        qh: "fl_activity_group",
        Ef: "fl_advertiser_id",
        rh: "fl_ar_dedupe",
        Ff: "match_id",
        sh: "fl_random_number",
        th: "tran",
        uh: "u",
        we: "gac_gclid",
        vc: "gac_wbraid",
        vh: "gac_wbraid_multiple_conversions",
        wh: "ga_restrict_domain",
        Gf: "ga_temp_client_id",
        wc: "gdpr_applies",
        xh: "geo_granularity",
        wb: "value_callback",
        lb: "value_key",
        Pm: "google_ono",
        Lb: "google_signals",
        yh: "google_tld",
        xe: "groups",
        zh: "gsa_experiment_id",
        ye: "iframe_state",
        bd: "ignore_referrer",
        Hf: "internal_traffic_results",
        xb: "is_legacy_converted",
        yb: "is_legacy_loaded",
        ze: "is_passthrough",
        xc: "_lps",
        Ka: "language",
        Ae: "legacy_developer_id_string",
        ya: "linker",
        yc: "accept_incoming",
        zb: "decorate_forms",
        R: "domains",
        Mb: "url_position",
        Ah: "method",
        Qj: "name",
        dd: "new_customer",
        Bh: "non_interaction",
        Rj: "optimize_id",
        Sj: "page_hostname",
        ed: "page_path",
        Ea: "page_referrer",
        Ab: "page_title",
        Ch: "passengers",
        Dh: "phone_conversion_callback",
        Tj: "phone_conversion_country_code",
        Eh: "phone_conversion_css_class",
        Uj: "phone_conversion_ids",
        Fh: "phone_conversion_number",
        Gh: "phone_conversion_options",
        If: "_protected_audience_enabled",
        fd: "quantity",
        Be: "redact_device_info",
        Jf: "referral_exclusion_definition",
        Nb: "restricted_data_processing",
        Vj: "retoken",
        Wj: "sample_rate",
        Kf: "screen_name",
        Bb: "screen_resolution",
        Xj: "search_term",
        La: "send_page_view",
        Ob: "send_to",
        zc: "server_container_url",
        gd: "session_duration",
        Ce: "session_engaged",
        Lf: "session_engaged_time",
        ob: "session_id",
        De: "session_number",
        hd: "delivery_postal_code",
        Qm: "temporary_client_id",
        Mf: "topmost_url",
        Yj: "tracking_id",
        Nf: "traffic_type",
        za: "transaction_id",
        Cb: "transport_url",
        Hh: "trip_type",
        Pb: "update",
        Wa: "url_passthrough",
        jd: "_user_agent_architecture",
        kd: "_user_agent_bitness",
        ld: "_user_agent_full_version_list",
        md: "_user_agent_mobile",
        nd: "_user_agent_model",
        od: "_user_agent_platform",
        pd: "_user_agent_platform_version",
        qd: "_user_agent_wow64",
        Fa: "user_data",
        Ih: "user_data_auto_latency",
        Jh: "user_data_auto_meta",
        Kh: "user_data_auto_multi",
        Lh: "user_data_auto_selectors",
        Mh: "user_data_auto_status",
        Ee: "user_data_mode",
        Fe: "user_data_settings",
        Ma: "user_id",
        Xa: "user_properties",
        Nh: "_user_region",
        Ge: "us_privacy_string",
        ia: "value",
        Oh: "wbraid_multiple_conversions",
        Uh: "_host_name",
        Vh: "_in_page_command",
        Wh: "_is_passthrough_cid",
        pb: "non_personalized_ads",
        xd: "_sst_parameters",
        ib: "conversion_label",
        qa: "page_location",
        nb: "global_developer_id_string",
        Ac: "tc_privacy_string",
      },
    },
    me = {},
    ne = Object.freeze(
      ((me[L.g.fa] = 1),
      (me[L.g.wf] = 1),
      (me[L.g.de] = 1),
      (me[L.g.fb] = 1),
      (me[L.g.U] = 1),
      (me[L.g.Qa] = 1),
      (me[L.g.Ra] = 1),
      (me[L.g.Va] = 1),
      (me[L.g.oc] = 1),
      (me[L.g.Kb] = 1),
      (me[L.g.Ja] = 1),
      (me[L.g.qc] = 1),
      (me[L.g.Vc] = 1),
      (me[L.g.ba] = 1),
      (me[L.g.hh] = 1),
      (me[L.g.ad] = 1),
      (me[L.g.te] = 1),
      (me[L.g.ue] = 1),
      (me[L.g.uc] = 1),
      (me[L.g.wh] = 1),
      (me[L.g.Lb] = 1),
      (me[L.g.yh] = 1),
      (me[L.g.xe] = 1),
      (me[L.g.Hf] = 1),
      (me[L.g.xb] = 1),
      (me[L.g.yb] = 1),
      (me[L.g.ya] = 1),
      (me[L.g.Jf] = 1),
      (me[L.g.Nb] = 1),
      (me[L.g.La] = 1),
      (me[L.g.Ob] = 1),
      (me[L.g.zc] = 1),
      (me[L.g.gd] = 1),
      (me[L.g.Lf] = 1),
      (me[L.g.hd] = 1),
      (me[L.g.Cb] = 1),
      (me[L.g.Pb] = 1),
      (me[L.g.Fe] = 1),
      (me[L.g.Xa] = 1),
      (me[L.g.xd] = 1),
      me)
    );
  Object.freeze([
    L.g.qa,
    L.g.Ea,
    L.g.Ab,
    L.g.Ka,
    L.g.Kf,
    L.g.Ma,
    L.g.Df,
    L.g.Ej,
  ]);
  var oe = {},
    pe = Object.freeze(
      ((oe[L.g.mj] = 1),
      (oe[L.g.nj] = 1),
      (oe[L.g.oj] = 1),
      (oe[L.g.pj] = 1),
      (oe[L.g.qj] = 1),
      (oe[L.g.sj] = 1),
      (oe[L.g.tj] = 1),
      (oe[L.g.uj] = 1),
      (oe[L.g.wj] = 1),
      (oe[L.g.Lc] = 1),
      oe)
    ),
    qe = {},
    re = Object.freeze(
      ((qe[L.g.Xg] = 1),
      (qe[L.g.Yg] = 1),
      (qe[L.g.ic] = 1),
      (qe[L.g.jc] = 1),
      (qe[L.g.Zg] = 1),
      (qe[L.g.Hb] = 1),
      (qe[L.g.kc] = 1),
      (qe[L.g.ab] = 1),
      (qe[L.g.ub] = 1),
      (qe[L.g.cb] = 1),
      (qe[L.g.Ha] = 1),
      (qe[L.g.mc] = 1),
      (qe[L.g.Ia] = 1),
      (qe[L.g.ah] = 1),
      qe)
    ),
    se = Object.freeze([
      L.g.fa,
      L.g.fb,
      L.g.qc,
      L.g.uc,
      L.g.bd,
      L.g.La,
      L.g.Pb,
    ]),
    te = Object.freeze([].concat(se)),
    ue = Object.freeze([L.g.Ra, L.g.ue, L.g.gd, L.g.Lf, L.g.ne]),
    ve = Object.freeze([].concat(ue)),
    we = {},
    xe =
      ((we[L.g.F] = "1"),
      (we[L.g.O] = "2"),
      (we[L.g.K] = "3"),
      (we[L.g.oa] = "4"),
      we),
    ye = {},
    ze = Object.freeze(
      ((ye[L.g.fa] = 1),
      (ye[L.g.de] = 1),
      (ye[L.g.Da] = 1),
      (ye[L.g.Ib] = 1),
      (ye[L.g.xf] = 1),
      (ye[L.g.ee] = 1),
      (ye[L.g.fe] = 1),
      (ye[L.g.he] = 1),
      (ye[L.g.U] = 1),
      (ye[L.g.ie] = 1),
      (ye[L.g.Ua] = 1),
      (ye[L.g.wa] = 1),
      (ye[L.g.Qa] = 1),
      (ye[L.g.Ra] = 1),
      (ye[L.g.Va] = 1),
      (ye[L.g.Ja] = 1),
      (ye[L.g.xa] = 1),
      (ye[L.g.ke] = 1),
      (ye[L.g.ba] = 1),
      (ye[L.g.Ij] = 1),
      (ye[L.g.pe] = 1),
      (ye[L.g.qe] = 1),
      (ye[L.g.Df] = 1),
      (ye[L.g.uc] = 1),
      (ye[L.g.xb] = 1),
      (ye[L.g.yb] = 1),
      (ye[L.g.Ka] = 1),
      (ye[L.g.dd] = 1),
      (ye[L.g.qa] = 1),
      (ye[L.g.Ea] = 1),
      (ye[L.g.Dh] = 1),
      (ye[L.g.Eh] = 1),
      (ye[L.g.Fh] = 1),
      (ye[L.g.Gh] = 1),
      (ye[L.g.Nb] = 1),
      (ye[L.g.La] = 1),
      (ye[L.g.Ob] = 1),
      (ye[L.g.zc] = 1),
      (ye[L.g.hd] = 1),
      (ye[L.g.za] = 1),
      (ye[L.g.Cb] = 1),
      (ye[L.g.Pb] = 1),
      (ye[L.g.Wa] = 1),
      (ye[L.g.Fa] = 1),
      (ye[L.g.Ma] = 1),
      (ye[L.g.ia] = 1),
      ye)
    ),
    Ae = {},
    Be = Object.freeze(
      ((Ae.search = "s"),
      (Ae.youtube = "y"),
      (Ae.playstore = "p"),
      (Ae.shopping = "h"),
      (Ae.ads = "a"),
      (Ae.maps = "m"),
      Ae)
    );
  Object.freeze(L.g);
  var Ce = {},
    De = (F.google_tag_manager = F.google_tag_manager || {}),
    Ee = Math.random();
  Ce.Sf = "43d0";
  Ce.wd = Number("0") || 0;
  Ce.da = "dataLayer";
  Ce.Km =
    "ChEI8MzfrwYQ8+ru7MTo5MTJARIkAOuBJcg/Rzi4yR1uqzJL2g0sVQAhHAIYbwRZs4m6pVJJIQcvGgI1ng\x3d\x3d";
  var Fe = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    Ge = { __paused: 1, __tg: 1 },
    He;
  for (He in Fe) Fe.hasOwnProperty(He) && (Ge[He] = 1);
  var Ie = Ga(""),
    Je,
    Ke = !1;
  Je = Ke;
  var Le,
    Me = !1;
  Le = Me;
  var Ne,
    Oe = !1;
  Ne = Oe;
  Ce.Kc = "www.googletagmanager.com";
  var Pe = "" + Ce.Kc + (Je ? "/gtag/js" : "/gtm.js"),
    Qe = null,
    Re = null,
    Se = {},
    Te = {},
    Ue = function () {
      var a = De.sequence || 1;
      De.sequence = a + 1;
      return a;
    };
  Ce.jj = "";
  var Ve = "";
  Ce.Ne = Ve;
  var We = new (function () {
      this.h = "";
      this.J = this.s = !1;
      this.T = this.M = this.sa = this.C = "";
    })(),
    Xe = function () {
      var a = We.C.length;
      return "/" === We.C[a - 1] ? We.C.substring(0, a - 1) : We.C;
    };
  function Ye(a) {
    for (var b = {}, c = fa(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var Ze = new Ca(),
    $e = {},
    af = {},
    df = {
      name: Ce.da,
      set: function (a, b) {
        A(Qa(a, b), $e);
        bf();
      },
      get: function (a) {
        return cf(a, 2);
      },
      reset: function () {
        Ze = new Ca();
        $e = {};
        bf();
      },
    },
    cf = function (a, b) {
      return 2 != b ? Ze.get(a) : ef(a);
    },
    ef = function (a) {
      var b,
        c = a.split(".");
      b = b || [];
      for (var d = $e, e = 0; e < c.length; e++) {
        if (null === d) return !1;
        if (void 0 === d) break;
        d = d[c[e]];
        if (-1 !== b.indexOf(d)) return;
      }
      return d;
    },
    ff = function (a, b) {
      af.hasOwnProperty(a) || (Ze.set(a, b), A(Qa(a, b), $e), bf());
    },
    bf = function (a) {
      k(af, function (b, c) {
        Ze.set(b, c);
        A(Qa(b), $e);
        A(Qa(b, c), $e);
        a && delete af[b];
      });
    },
    gf = function (a, b) {
      var c,
        d = 1 !== (void 0 === b ? 2 : b) ? ef(a) : Ze.get(a);
      "array" === Va(d) || "object" === Va(d) ? (c = A(d)) : (c = d);
      return c;
    };
  var lf = [];
  function mf(a) {
    switch (a) {
      case 0:
        return 0;
      case 12:
        return 19;
      case 21:
        return 15;
      case 42:
        return 11;
      case 43:
        return 12;
      case 48:
        return 14;
      case 51:
        return 13;
      case 61:
        return 20;
      case 73:
        return 16;
      case 83:
        return 18;
      case 93:
        return 21;
      case 95:
        return 22;
    }
  }
  function P(a) {
    lf[a] = !0;
    var b = mf(a);
    void 0 !== b && (hd[b] = !0);
  }
  P(27);
  P(24);
  P(25);
  P(26);
  P(44);
  P(6);
  P(49);
  P(63);
  P(29);
  P(15);
  P(91);
  P(14);
  P(99);
  P(90);
  P(48);
  P(52);
  P(74);
  P(92);
  P(39);
  P(7);
  P(4);
  P(67);
  P(11);
  P(87);
  P(57);
  P(58);
  P(60);
  P(54);
  P(53);
  P(82);
  P(59);
  P(72);
  P(102);
  P(21);
  P(100);
  P(88);
  P(30);
  P(31);
  P(32);
  P(73);
  P(78);
  P(22);
  P(47);
  P(77);
  id[1] = Number("1") || 6e4;
  id[2] = Number("") || 50;
  P(75);
  P(38);
  P(40);

  function nf(a, b) {
    for (var c = void 0, d = void 0, e = 0; c === d; )
      if (
        ((c = Math.floor(2 * Math.random())),
        (d = Math.floor(2 * Math.random())),
        e++,
        20 < e)
      )
        return;
    c ? P(a) : P(b);
  }
  function Q(a) {
    return !!lf[a];
  }
  var of = function (a) {
    fb("HEALTH", a);
  };
  var pf;
  try {
    pf = JSON.parse(
      db(
        "eyIwIjoiSU4iLCIxIjoiSU4tVE4iLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jby5pbiIsIjQiOiIiLCI1Ijp0cnVlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    J(123), of(2), (pf = {});
  }
  var qf = function () {
      return pf["0"] || "";
    },
    rf = function () {
      var a = !1;
      return a;
    },
    sf = function () {
      var a = "";
      return a;
    },
    tf = function () {
      var a = !1;
      return a;
    },
    uf = function () {
      var a = "";
      return a;
    };
  var vf = /:[0-9]+$/,
    wf = /^\d+\.fls\.doubleclick\.net$/,
    xf = function (a, b, c) {
      for (var d = fa(a.split("&")), e = d.next(); !e.done; e = d.next()) {
        var f = fa(e.value.split("=")),
          h = f.next().value,
          l = ia(f);
        if (decodeURIComponent(h.replace(/\+/g, " ")) === b) {
          var m = l.join("=");
          return c ? m : decodeURIComponent(m.replace(/\+/g, " "));
        }
      }
    },
    Af = function (a, b, c, d, e) {
      b && (b = String(b).toLowerCase());
      if ("protocol" === b || "port" === b)
        a.protocol = yf(a.protocol) || yf(F.location.protocol);
      "port" === b
        ? (a.port = String(
            Number(a.hostname ? a.port : F.location.port) ||
              ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")
          ))
        : "host" === b &&
          (a.hostname = (a.hostname || F.location.hostname)
            .replace(vf, "")
            .toLowerCase());
      return zf(a, b, c, d, e);
    },
    zf = function (a, b, c, d, e) {
      var f,
        h = yf(a.protocol);
      b && (b = String(b).toLowerCase());
      switch (b) {
        case "url_no_fragment":
          f = Bf(a);
          break;
        case "protocol":
          f = h;
          break;
        case "host":
          f = a.hostname.replace(vf, "").toLowerCase();
          if (c) {
            var l = /^www\d*\./.exec(f);
            l && l[0] && (f = f.substr(l[0].length));
          }
          break;
        case "port":
          f = String(
            Number(a.port) || ("http" === h ? 80 : "https" === h ? 443 : "")
          );
          break;
        case "path":
          a.pathname || a.hostname || fb("TAGGING", 1);
          f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
          var m = f.split("/");
          0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
          f = m.join("/");
          break;
        case "query":
          f = a.search.replace("?", "");
          e && (f = xf(f, e));
          break;
        case "extension":
          var n = a.pathname.split(".");
          f = 1 < n.length ? n[n.length - 1] : "";
          f = f.split("/")[0];
          break;
        case "fragment":
          f = a.hash.replace("#", "");
          break;
        default:
          f = a && a.href;
      }
      return f;
    },
    yf = function (a) {
      return a ? a.replace(":", "").toLowerCase() : "";
    },
    Bf = function (a) {
      var b = "";
      if (a && a.href) {
        var c = a.href.indexOf("#");
        b = 0 > c ? a.href : a.href.substr(0, c);
      }
      return b;
    },
    Cf = {},
    Df = 0,
    Ef = function (a) {
      var b = Cf[a];
      if (!b) {
        var c = G.createElement("a");
        a && (c.href = a);
        var d = c.pathname;
        "/" !== d[0] && (a || fb("TAGGING", 1), (d = "/" + d));
        var e = c.hostname.replace(vf, "");
        b = {
          href: c.href,
          protocol: c.protocol,
          host: c.host,
          hostname: e,
          pathname: d,
          search: c.search,
          hash: c.hash,
          port: c.port,
        };
        5 > Df && ((Cf[a] = b), Df++);
      }
      return b;
    },
    Ff = function (a) {
      function b(n) {
        var p = n.split("=")[0];
        return 0 > d.indexOf(p) ? n : p + "=0";
      }
      function c(n) {
        return n
          .split("&")
          .map(b)
          .filter(function (p) {
            return void 0 !== p;
          })
          .join("&");
      }
      var d =
          "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(
            " "
          ),
        e = Ef(a),
        f = a.split(/[?#]/)[0],
        h = e.search,
        l = e.hash;
      "?" === h[0] && (h = h.substring(1));
      "#" === l[0] && (l = l.substring(1));
      h = c(h);
      l = c(l);
      "" !== h && (h = "?" + h);
      "" !== l && (l = "#" + l);
      var m = "" + f + h + l;
      "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
      return m;
    },
    Gf = function (a) {
      var b = Ef(F.location.href),
        c = Af(b, "host", !1);
      if (c && c.match(wf)) {
        var d = Af(b, "path").split(a + "=");
        if (1 < d.length) return d[1].split(";")[0].split("?")[0];
      }
    };
  var Hf = {
    "https://www.google.com": "/g",
    "https://googlesyndication.com": "/gs",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function If(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") &&
        0 !== c.indexOf("https://") &&
        (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return Ef("" + c + b).href;
    }
  }
  function Jf() {
    return We.s || Le;
  }
  function Kf() {
    return !!Ce.Ne && "SGTM_TOKEN" !== Ce.Ne.split("@@").join("");
  }
  function Lf(a) {
    for (var b = fa([L.g.zc, L.g.Cb]), c = b.next(); !c.done; c = b.next()) {
      var d = R(a, c.value);
      if (d) return d;
    }
  }
  function Mf(a, b) {
    return We.s ? "" + Xe() + (b ? Hf[a] || "" : "") : a;
  }
  var Nf = function (a) {
      var b = String(a[oc.ma] || "").replace(/_/g, "");
      0 === b.indexOf("cvt") && (b = "cvt");
      return b;
    },
    Of =
      0 <= F.location.search.indexOf("?gtm_latency=") ||
      0 <= F.location.search.indexOf("&gtm_latency=");
  var Tf = function (a) {
      var b = Pf();
      b.pending || (b.pending = []);
      Aa(b.pending, function (c) {
        return (
          c.target.ctid === a.ctid && c.target.isDestination === a.isDestination
        );
      }) || b.pending.push({ target: a, onLoad: void 0 });
    },
    Uf = function () {
      this.container = {};
      this.destination = {};
      this.canonical = {};
      this.pending = [];
      this.siloed = [];
    },
    Pf = function () {
      var a = Qb("google_tag_data", {}),
        b = a.tidr;
      b || ((b = new Uf()), (a.tidr = b));
      return b;
    };
  var Vf = {},
    Wf = !1,
    Xf = {
      ctid: "GTM-T6FTS6V",
      canonicalContainerId: "51188077",
      Hi: "GTM-T6FTS6V",
      Ii: "GTM-T6FTS6V",
    };
  Vf.sd = Ga("");
  var $f = function () {
      var a = Yf();
      return Wf ? a.map(Zf) : a;
    },
    bg = function () {
      var a = ag();
      return Wf ? a.map(Zf) : a;
    },
    dg = function () {
      return cg(Xf.ctid);
    },
    eg = function () {
      return cg(Xf.canonicalContainerId || "_" + Xf.ctid);
    },
    Yf = function () {
      return Xf.Hi ? Xf.Hi.split("|") : [Xf.ctid];
    },
    ag = function () {
      return Xf.Ii ? Xf.Ii.split("|") : [];
    },
    hg = function () {
      var a = fg(gg());
      if (a) {
        for (; a.parent; ) {
          var b = fg(a.parent);
          if (!b) break;
          a = b;
        }
        return a;
      }
    },
    fg = function (a) {
      var b = Pf();
      return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
    },
    cg = function (a) {
      return Wf ? Zf(a) : a;
    },
    Zf = function (a) {
      return "siloed_" + a;
    },
    jg = function (a) {
      return Wf ? ig(a) : a;
    };
  function ig(a) {
    a = String(a);
    return 0 === a.indexOf("siloed_") ? a.substring(7) : a;
  }
  var kg = function () {
    var a = !1;
    if (a) {
      var b = Pf();
      if (b.siloed) {
        for (
          var c = [], d = Yf().map(Zf), e = ag().map(Zf), f = {}, h = 0;
          h < b.siloed.length;
          f = { Re: void 0 }, h++
        )
          (f.Re = b.siloed[h]),
            !Wf &&
            Aa(
              f.Re.isDestination ? e : d,
              (function (l) {
                return function (m) {
                  return m === l.Re.ctid;
                };
              })(f)
            )
              ? (Wf = !0)
              : c.push(f.Re);
        b.siloed = c;
      }
    }
  };
  function lg() {
    var a = Pf();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = $f(), f = bg(), h = {}, l = 0;
        l < a.pending.length;
        h = { Vd: void 0 }, l++
      )
        (h.Vd = a.pending[l]),
          Aa(
            h.Vd.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.Vd.target.ctid;
              };
            })(h)
          )
            ? d || ((b = h.Vd.onLoad), (d = !0))
            : c.push(h.Vd);
      a.pending = c;
      if (b)
        try {
          b(eg());
        } catch (m) {}
    }
  }
  var mg = function () {
      for (
        var a = Xf.ctid,
          b = $f(),
          c = bg(),
          d = function (n, p) {
            var q = {
              canonicalContainerId: Xf.canonicalContainerId,
              scriptContainerId: a,
              state: 2,
              containers: b.slice(),
              destinations: c.slice(),
            };
            Pb && (q.scriptSource = Pb);
            var t = p ? e.destination : e.container,
              r = t[n];
            r ? (p && 0 === r.state && J(93), Object.assign(r, q)) : (t[n] = q);
          },
          e = Pf(),
          f = fa(b),
          h = f.next();
        !h.done;
        h = f.next()
      )
        d(h.value, !1);
      for (var l = fa(c), m = l.next(); !m.done; m = l.next()) d(m.value, !0);
      e.canonical[eg()] = {};
      lg();
    },
    gg = function () {
      return { ctid: dg(), isDestination: Vf.sd };
    };
  function ng(a) {
    var b = Pf();
    (b.siloed = b.siloed || []).push(a);
  }
  var og = function () {
      var a = Pf().container,
        b;
      for (b in a) if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
      return !1;
    },
    pg = function () {
      var a = {};
      k(Pf().destination, function (b, c) {
        0 === c.state && (a[ig(b)] = c);
      });
      return a;
    },
    qg = function (a) {
      return !!(
        a &&
        a.parent &&
        a.context &&
        1 === a.context.source &&
        0 !== a.parent.ctid.indexOf("GTM-")
      );
    };
  var rg = { sampleRate: "0.005000", ej: "", dj: Number("5"), En: Number("") },
    sg = [];
  function tg(a) {
    sg.push(a);
  }
  var ug = !1,
    vg;
  if (!(vg = Of)) {
    var wg = Math.random(),
      xg = rg.sampleRate;
    vg = wg < Number(xg);
  }
  var yg = vg,
    zg = "/a?id=" + Xf.ctid,
    Ag = "https://www.googletagmanager.com" + zg,
    Bg = void 0,
    Cg = {},
    Dg = void 0,
    Eg = new (function () {
      var a = 5;
      0 < rg.dj && (a = rg.dj);
      this.h = 0;
      this.C = [];
      this.s = a;
    })(),
    Fg = 1e3;
  function Gg(a, b) {
    var c = Bg;
    if (void 0 === c)
      if (b) c = Ue();
      else return "";
    for (
      var d = [Mf("https://www.googletagmanager.com"), zg],
        e = fa(sg),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var h = f.value,
          l = h({
            eventId: c,
            Za: !!a,
            ff: function () {
              ug = !0;
            },
          }),
          m = fa(l),
          n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = fa(n.value),
          q = p.next().value,
          t = p.next().value;
        d.push("&" + q + "=" + t);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Hg() {
    Dg && (F.clearTimeout(Dg), (Dg = void 0));
    if (void 0 !== Bg && Ig) {
      var a;
      (a = Cg[Bg]) || (a = Eg.h < Eg.s ? !1 : 1e3 > Ka() - Eg.C[Eg.h % Eg.s]);
      if (a || 0 >= Fg--) J(1), (Cg[Bg] = !0);
      else {
        var b = Eg.h++ % Eg.s;
        Eg.C[b] = Ka();
        var c = Gg(!0);
        Yb(c);
        if (ug) {
          var d = c.replace("/a?", "/td?");
          Yb(d);
        }
        Ig = ug = !1;
      }
    }
  }
  var Ig = !1;
  function Jg(a) {
    Cg[a] ||
      (a !== Bg && (Hg(), (Bg = a)),
      (Ig = !0),
      Dg || (Dg = F.setTimeout(Hg, 500)),
      2022 <= Gg().length && Hg());
  }
  var Kg = Ba();
  function Lg() {
    Kg = Ba();
  }
  function Mg() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", Kg],
    ];
  }
  var Ng = [],
    Og = [];
  function Pg(a) {
    Q(75) && -1 === Og.indexOf(a) && (Ng.push(a), Og.push(a));
  }
  function Qg(a) {
    var b = [];
    if (!Ng.length) return b;
    for (var c = fa(Ng), d = c.next(); !d.done; d = c.next())
      b.push([d.value, "1"]);
    a.Za && (a.ff(), (Ng.length = 0));
    return b;
  }
  var Rg = new (function (a, b) {
    this.h = a;
    this.defaultValue = void 0 === b ? !1 : b;
  })(1933);
  var Sg = function (a) {
    Sg[" "](a);
    return a;
  };
  Sg[" "] = function () {};
  var Ug = function () {
    var a = Tg,
      b = "mg";
    if (a.mg && a.hasOwnProperty(b)) return a.mg;
    var c = new a();
    return (a.mg = c);
  };
  var Tg = function () {
    var a = {};
    this.h = function () {
      var b = Rg.h,
        c = Rg.defaultValue;
      return null != a[b] ? a[b] : c;
    };
    this.s = function () {
      a[Rg.h] = !0;
    };
  };
  var Vg = !1,
    Wg = !1,
    Xg = {},
    Yg = {},
    Zg = { ad_storage: !1, ad_user_data: !1, ad_personalization: !1 };
  function $g() {
    var a = Qb("google_tag_data", {});
    return (a.ics = a.ics || new ah());
  }
  var ah = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.h = [];
  };
  ah.prototype.default = function (a, b, c, d, e, f) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    fb("TAGGING", 19);
    void 0 == b ? fb("TAGGING", 18) : bh(this, a, "granted" === b, c, d, e, f);
  };
  ah.prototype.waitForUpdate = function (a, b) {
    for (var c = 0; c < a.length; c++)
      bh(this, a[c], void 0, void 0, "", "", b);
  };
  var bh = function (a, b, c, d, e, f, h) {
    var l = a.entries,
      m = l[b] || {},
      n = m.region,
      p = d && g(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if ("" === e || p === f || (p === e ? n !== f : !p && !n)) {
      var q = !!(h && 0 < h && void 0 === m.update),
        t = {
          region: p,
          declare_region: m.declare_region,
          implicit: m.implicit,
          default: void 0 !== c ? c : m.default,
          declare: m.declare,
          update: m.update,
          quiet: q,
        };
      if ("" !== e || !1 !== m.default) l[b] = t;
      q &&
        F.setTimeout(function () {
          l[b] === t &&
            t.quiet &&
            (fb("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0),
            a.notifyListeners());
        }, h);
    }
  };
  aa = ah.prototype;
  aa.clearTimeout = function (a, b) {
    var c = [a],
      d;
    for (d in Xg) Xg.hasOwnProperty(d) && Xg[d] === a && c.push(d);
    var e = this.entries[a] || {},
      f = this.getConsentState(a);
    if (e.quiet) {
      e.quiet = !1;
      for (var h = fa(c), l = h.next(); !l.done; l = h.next())
        ch(this, l.value);
    } else if (void 0 !== b && f !== b)
      for (var m = fa(c), n = m.next(); !n.done; n = m.next())
        ch(this, n.value);
  };
  aa.update = function (a, b) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (void 0 != b) {
      var c = this.getConsentState(a),
        d = this.entries;
      (d[a] = d[a] || {}).update = "granted" === b;
      this.clearTimeout(a, c);
    }
  };
  aa.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      h = f[a] || {},
      l = h.declare_region,
      m = c && g(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if ("" === d || m === e || (m === d ? l !== e : !m && !l)) {
      var n = {
        region: h.region,
        declare_region: m,
        declare: "granted" === b,
        implicit: h.implicit,
        default: h.default,
        update: h.update,
        quiet: h.quiet,
      };
      if ("" !== d || !1 !== h.declare) f[a] = n;
    }
  };
  aa.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    !1 !== d.implicit && (d.implicit = "granted" === b);
  };
  aa.getConsentState = function (a) {
    var b = this.entries,
      c = b[a] || {},
      d = c.update;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.default;
    if (void 0 !== d) return d ? 1 : 2;
    if (Xg.hasOwnProperty(a)) {
      var e = b[Xg[a]] || {};
      d = e.update;
      if (void 0 !== d) return d ? 1 : 2;
      d = e.default;
      if (void 0 !== d) return d ? 1 : 2;
    }
    d = c.declare;
    if (void 0 !== d) return d ? 1 : 2;
    d = c.implicit;
    return void 0 !== d
      ? d
        ? 3
        : 4
      : jd(19) && Zg.hasOwnProperty(a)
      ? (fb("TAGGING", 22), Zg[a] ? 3 : 4)
      : 0;
  };
  aa.addListener = function (a, b) {
    this.h.push({ consentTypes: a, Uk: b });
  };
  var ch = function (a, b) {
    for (var c = 0; c < a.h.length; ++c) {
      var d = a.h[c];
      za(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Ji = !0);
    }
  };
  ah.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.h.length; ++c) {
      var d = this.h[c];
      if (d.Ji) {
        d.Ji = !1;
        try {
          d.Uk({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  function dh(a) {
    var b = $g();
    if ("ad_user_data" === a)
      if (jd(22)) {
        var c = b.getConsentState("ad_storage");
        if (2 !== c && 4 !== c) return c;
      } else jd(21) && (a = "ad_storage");
    return b.getConsentState(a);
  }
  var eh = function (a) {
      $g().accessedAny = !0;
      return (g(a) ? [a] : a).every(function (b) {
        switch (dh(b)) {
          case 1:
          case 3:
            return !0;
          case 2:
          case 4:
            return !1;
          default:
            return !0;
        }
      });
    },
    fh = function (a) {
      $g().accessedAny = !0;
      return dh(a);
    },
    gh = function (a) {
      for (var b = {}, c = fa(a), d = c.next(); !d.done; d = c.next()) {
        var e = d.value;
        b[e] = void 0 === Yg[e] || !1 !== Yg[e].enabled;
      }
      return b;
    },
    hh = function (a) {
      var b = $g();
      b.accessedAny = !0;
      return !(b.entries[a] || {}).quiet;
    },
    ih = function () {
      if (!Ug().h()) return !1;
      var a = $g();
      a.accessedAny = !0;
      return a.active;
    },
    jh = function (a, b) {
      if (jd(21)) {
        for (
          var c = [],
            d = a.find(function (l) {
              return "ad_storage" === l;
            }),
            e = fa(a),
            f = e.next();
          !f.done;
          f = e.next()
        ) {
          var h = f.value;
          if ("ad_user_data" === h) {
            if (d) continue;
            c.push("ad_storage");
          }
          c.push(h);
        }
        $g().addListener(c, b);
      } else $g().addListener(a, b);
    },
    kh = function (a, b) {
      $g().notifyListeners(a, b);
    },
    lh = function (a, b) {
      function c() {
        for (var e = 0; e < b.length; e++) if (!hh(b[e])) return !0;
        return !1;
      }
      if (c()) {
        var d = !1;
        jh(b, function (e) {
          d || c() || ((d = !0), a(e));
        });
      } else a({});
    },
    mh = function (a, b) {
      function c() {
        for (var l = [], m = 0; m < e.length; m++) {
          var n = e[m];
          eh(n) && !f[n] && l.push(n);
        }
        return l;
      }
      function d(l) {
        for (var m = 0; m < l.length; m++) f[l[m]] = !0;
      }
      var e = g(b) ? [b] : b,
        f = {},
        h = c();
      h.length !== e.length &&
        (d(h),
        jh(e, function (l) {
          function m(q) {
            0 !== q.length && (d(q), (l.consentTypes = q), a(l));
          }
          var n = c();
          if (0 !== n.length) {
            var p = Object.keys(f).length;
            n.length + p >= e.length
              ? m(n)
              : F.setTimeout(function () {
                  m(c());
                }, 500);
          }
        }));
    };
  function nh() {}
  function oh() {}
  var ph = [L.g.F, L.g.O, L.g.K, L.g.oa],
    qh,
    rh,
    sh = function (a) {
      for (
        var b = a[L.g.be], c = Array.isArray(b) ? b : [b], d = { Id: 0 };
        d.Id < c.length;
        d = { Id: d.Id }, ++d.Id
      )
        k(
          a,
          (function (e) {
            return function (f, h) {
              if (f !== L.g.be) {
                var l = c[e.Id],
                  m = qf(),
                  n = pf["1"] || "";
                Wg = !0;
                Vg && fb("TAGGING", 20);
                $g().declare(f, h, l, m, n);
              }
            };
          })(d)
        );
    },
    th = function (a) {
      Q(40) && (!rh && qh && Pg("crc"), (rh = !0));
      var b = a[L.g.be];
      b && J(40);
      var c = a[L.g.Ng];
      c && J(41);
      for (
        var d = za(b) ? b : [b], e = { Jd: 0 };
        e.Jd < d.length;
        e = { Jd: e.Jd }, ++e.Jd
      )
        k(
          a,
          (function (f) {
            return function (h, l) {
              if (h !== L.g.be && h !== L.g.Ng) {
                var m = d[f.Jd],
                  n = Number(c),
                  p = qf(),
                  q = pf["1"] || "";
                Vg = !0;
                Wg && fb("TAGGING", 20);
                $g().default(h, l, m, p, q, n);
              }
            };
          })(e)
        );
    },
    uh = function (a, b) {
      qh = !0;
      k(a, function (c, d) {
        Vg = !0;
        Wg && fb("TAGGING", 20);
        $g().update(c, d);
      });
      kh(b.eventId, b.priorityId);
    },
    T = function (a) {
      Array.isArray(a) || (a = [a]);
      return a.every(function (b) {
        return eh(b);
      });
    },
    vh = function (a, b) {
      jh(a, b);
    },
    wh = function (a, b) {
      mh(a, b);
    },
    xh = function (a, b) {
      lh(a, b);
    },
    yh = function () {
      var a = [L.g.F, L.g.oa, L.g.K];
      $g().waitForUpdate(a, 500);
    },
    zh = function (a) {
      for (var b = fa(a), c = b.next(); !c.done; c = b.next()) {
        var d = c.value;
        $g().clearTimeout(d, void 0);
      }
      kh();
    };
  var Ah = function () {
    function a(b) {
      De.pscdl = b;
    }
    if (void 0 === De.pscdl)
      try {
        "cookieDeprecationLabel" in Ob
          ? (a("pending"), Ob.cookieDeprecationLabel.getValue().then(a))
          : a("noapi");
      } catch (b) {
        a("error");
      }
  };
  var Bh = /[A-Z]+/,
    Ch = /\s/,
    Dh = function (a, b) {
      if (g(a)) {
        a = Ia(a);
        var c = a.indexOf("-");
        if (!(0 > c)) {
          var d = a.substring(0, c);
          if (Bh.test(d)) {
            var e = a.substring(c + 1),
              f;
            if (b) {
              var h = function (n) {
                var p = n.indexOf("/");
                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)];
              };
              f = h(e);
              if ("DC" === d && 2 === f.length) {
                var l = h(f[1]);
                2 === l.length && ((f[1] = l[0]), f.push(l[1]));
              }
            } else {
              f = e.split("/");
              for (var m = 0; m < f.length; m++)
                if (!f[m] || (Ch.test(f[m]) && ("AW" !== d || 1 !== m))) return;
            }
            return { id: a, prefix: d, X: d + "-" + f[0], N: f };
          }
        }
      }
    },
    Fh = function (a, b) {
      for (var c = {}, d = 0; d < a.length; ++d) {
        var e = Dh(a[d], b);
        e && (c[e.id] = e);
      }
      Eh(c);
      var f = [];
      k(c, function (h, l) {
        f.push(l);
      });
      return f;
    };
  function Eh(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        "AW" === d.prefix && d.N[1] && b.push(d.X);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Gh = "",
    Hh = [];
  function Nh(a) {
    var b = [];
    Gh && b.push(["dl", encodeURIComponent(Gh)]);
    0 < Hh.length && b.push(["tdp", Hh.join(".")]);
    a.Za && ((Gh = ""), (Hh.length = 0), b.length && a.ff());
    return b;
  }
  var Oh = [];
  function Ph(a) {
    if (!Oh.length) return [];
    var b = [["tdc", Oh.join("!")]];
    a.Za && (a.ff(), (Oh.length = 0));
    return b;
  }
  var Qh = { initialized: 11, complete: 12, interactive: 13 },
    Rh = {},
    Sh = Object.freeze(((Rh[L.g.La] = !0), Rh)),
    Th =
      0 <= G.location.search.indexOf("?gtm_diagnostics=") ||
      0 <= G.location.search.indexOf("&gtm_diagnostics="),
    Vh = function (a, b, c) {
      if (yg && "config" === a && !(1 < Dh(b).N.length)) {
        var d,
          e = Qb("google_tag_data", {});
        e.td || (e.td = {});
        d = e.td;
        var f = A(c.J);
        A(c.h, f);
        var h = [],
          l;
        for (l in d) {
          var m = Uh(d[l], f);
          m.length && (Th && console.log(m), h.push(l));
        }
        h.length &&
          (h.length && yg && Oh.push(b + "*" + h.join(".")),
          fb("TAGGING", Qh[G.readyState] || 14));
        d[b] = f;
      }
    };
  function Wh(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Uh(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, t) {
        var r = t[q];
        return void 0 === r ? Sh[q] : r;
      },
      f;
    for (f in Wh(a, b)) {
      var h = (d ? d + "." : "") + f,
        l = e(f, a),
        m = e(f, b),
        n = "object" === Va(l) || "array" === Va(l),
        p = "object" === Va(m) || "array" === Va(m);
      if (n && p) Uh(l, m, c, h);
      else if (n || p || l !== m) c[h] = !0;
    }
    return Object.keys(c);
  }
  var Xh = function (a, b, c, d, e, f, h, l, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.h = c;
      this.M = d;
      this.C = e;
      this.J = f;
      this.s = h;
      this.eventMetadata = l;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    Yh = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.h);
          c.push(a.M);
          c.push(a.C);
          c.push(a.J);
          c.push(a.s);
          break;
        case 2:
          c.push(a.h);
          break;
        case 1:
          c.push(a.M);
          c.push(a.C);
          c.push(a.J);
          c.push(a.s);
          break;
        case 4:
          c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.J);
      }
      return c;
    },
    R = function (a, b, c, d) {
      for (
        var e = fa(Yh(a, void 0 === d ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value;
        if (void 0 !== h[b]) return h[b];
      }
      return c;
    },
    Zh = function (a) {
      for (
        var b = {}, c = Yh(a, 4), d = fa(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), h = fa(f), l = h.next();
          !l.done;
          l = h.next()
        )
          b[l.value] = 1;
      return Object.keys(b);
    },
    $h = function (a, b, c) {
      function d(n) {
        Ya(n) &&
          k(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        h = Yh(a, void 0 === c ? 3 : c);
      h.reverse();
      for (var l = fa(h), m = l.next(); !m.done; m = l.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    ai = function (a) {
      for (
        var b = [L.g.Rc, L.g.Nc, L.g.Oc, L.g.Pc, L.g.Qc, L.g.Sc, L.g.Tc],
          c = Yh(a, 3),
          d = fa(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, h = {}, l = !1, m = fa(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          void 0 !== f[p] && ((h[p] = f[p]), (l = !0));
        }
        var q = l ? h : void 0;
        if (q) return q;
      }
      return {};
    },
    bi = function (a, b) {
      this.Ie = a;
      this.Je = b;
      this.C = {};
      this.Eb = {};
      this.h = {};
      this.J = {};
      this.Cc = {};
      this.Db = {};
      this.s = {};
      this.sa = function () {};
      this.T = function () {};
      this.M = !1;
    },
    ci = function (a, b) {
      a.C = b;
      return a;
    },
    di = function (a, b) {
      a.Eb = b;
      return a;
    },
    ei = function (a, b) {
      a.h = b;
      return a;
    },
    fi = function (a, b) {
      a.J = b;
      return a;
    },
    gi = function (a, b) {
      a.Cc = b;
      return a;
    },
    hi = function (a, b) {
      a.Db = b;
      return a;
    },
    ii = function (a, b) {
      a.s = b || {};
      return a;
    },
    ji = function (a, b) {
      a.sa = b;
      return a;
    },
    ki = function (a, b) {
      a.T = b;
      return a;
    },
    li = function (a, b) {
      a.M = b;
      return a;
    },
    mi = function (a) {
      return new Xh(a.Ie, a.Je, a.C, a.Eb, a.h, a.J, a.Db, a.s, a.sa, a.T, a.M);
    };
  var ni = {};
  function oi(a, b, c) {
    yg && void 0 !== a && ((ni[a] = ni[a] || []), ni[a].push(c + b), Jg(a));
  }
  function pi(a) {
    var b = a.eventId,
      c = a.Za,
      d = [],
      e = ni[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete ni[b];
    return d;
  }
  var ri = function (a, b, c, d) {
      var e = Dh(c, d.isGtmEvent);
      e && qi.push("event", [b, a], e, d);
    },
    si = function (a, b, c, d) {
      var e = Dh(c, d.isGtmEvent);
      e && qi.push("get", [a, b], e, d);
    },
    ti = function () {
      this.status = 1;
      this.J = {};
      this.h = {};
      this.M = {};
      this.T = null;
      this.C = {};
      this.s = !1;
    },
    ui = function (a, b, c, d) {
      var e = Ka();
      this.type = a;
      this.C = e;
      this.h = b;
      this.s = c;
      this.messageContext = d;
    },
    vi = function () {
      this.s = {};
      this.C = {};
      this.h = [];
    },
    wi = function (a, b) {
      var c = b.X;
      return (a.s[c] = a.s[c] || new ti());
    },
    xi = function (a, b, c, d) {
      if (d.h) {
        var e = wi(a, d.h),
          f = e.T;
        if (f) {
          var h = A(c),
            l = A(e.J[d.h.id]),
            m = A(e.C),
            n = A(e.h),
            p = A(a.C),
            q = {};
          if (yg)
            try {
              q = A($e);
            } catch (v) {
              J(72);
            }
          var t = d.h.prefix,
            r = function (v) {
              oi(d.messageContext.eventId, t, v);
            },
            u = mi(
              li(
                ki(
                  ji(
                    ii(
                      gi(
                        fi(
                          hi(
                            ei(
                              di(
                                ci(
                                  new bi(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  h
                                ),
                                l
                              ),
                              m
                            ),
                            n
                          ),
                          p
                        ),
                        q
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (r) {
                        var v = r;
                        r = void 0;
                        v("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (r) {
                      var v = r;
                      r = void 0;
                      v("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            );
          try {
            oi(d.messageContext.eventId, t, "1"),
              Vh(d.type, d.h.id, u),
              f(d.h.id, b, d.C, u);
          } catch (v) {
            oi(d.messageContext.eventId, t, "4");
          }
        }
      }
    };
  vi.prototype.register = function (a, b, c) {
    var d = wi(this, a);
    3 !== d.status &&
      ((d.T = b), (d.status = 3), c && (A(d.h, c), (d.h = c)), this.flush());
  };
  vi.prototype.push = function (a, b, c, d) {
    void 0 !== c &&
      (1 === wi(this, c).status &&
        ((wi(this, c).status = 2), this.push("require", [{}], c, {})),
      wi(this, c).s && (d.deferrable = !1));
    this.h.push(new ui(a, c, b, d));
    d.deferrable || this.flush();
  };
  vi.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.h.length;
      e = { Rb: void 0, eg: void 0 }
    ) {
      var f = this.h[0],
        h = f.h;
      if (f.messageContext.deferrable)
        !h || wi(this, h).s
          ? ((f.messageContext.deferrable = !1), this.h.push(f))
          : c.push(f),
          this.h.shift();
      else {
        switch (f.type) {
          case "require":
            if (3 !== wi(this, h).status && !a) {
              this.h.push.apply(this.h, c);
              return;
            }
            break;
          case "set":
            k(f.s[0], function (t, r) {
              A(Qa(t, r), b.C);
            });
            break;
          case "config":
            var l = wi(this, h);
            e.Rb = {};
            k(
              f.s[0],
              (function (t) {
                return function (r, u) {
                  A(Qa(r, u), t.Rb);
                };
              })(e)
            );
            var m = !!e.Rb[L.g.Pb];
            delete e.Rb[L.g.Pb];
            var n = h.X === h.id;
            m || (n ? (l.C = {}) : (l.J[h.id] = {}));
            (l.s && m) || xi(this, L.g.aa, e.Rb, f);
            l.s = !0;
            n ? A(e.Rb, l.C) : (A(e.Rb, l.J[h.id]), J(70));
            d = !0;
            break;
          case "event":
            e.eg = {};
            k(
              f.s[0],
              (function (t) {
                return function (r, u) {
                  A(Qa(r, u), t.eg);
                };
              })(e)
            );
            xi(this, f.s[1], e.eg, f);
            break;
          case "get":
            var p = {},
              q = ((p[L.g.lb] = f.s[0]), (p[L.g.wb] = f.s[1]), p);
            xi(this, L.g.Oa, q, f);
        }
        this.h.shift();
        yi(this, f);
      }
    }
    this.h.push.apply(this.h, c);
    d && this.flush();
  };
  var yi = function (a, b) {
      if ("require" !== b.type)
        if (b.h)
          for (var c = wi(a, b.h).M[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.s)
            if (a.s.hasOwnProperty(e)) {
              var f = a.s[e];
              if (f && f.M)
                for (var h = f.M[b.type] || [], l = 0; l < h.length; l++)
                  h[l]();
            }
    },
    zi = function (a, b) {
      var c = qi,
        d = A(b);
      A(wi(c, a).h, d);
      wi(c, a).h = d;
    },
    qi = new vi();
  function Ai(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var Bi = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    Ci = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var Di = function (a, b, c) {
    a.addEventListener && a.addEventListener(b, c, !1);
  };
  function Ei() {
    return tb ? !!Ab && !!Ab.platform : !1;
  }
  function Fi() {
    return Db("iPhone") && !Db("iPod") && !Db("iPad");
  }
  function Gi() {
    Fi() || Db("iPad") || Db("iPod");
  }
  Fb();
  Eb() || Db("Trident") || Db("MSIE");
  Db("Edge");
  !Db("Gecko") ||
    (-1 != zb().toLowerCase().indexOf("webkit") && !Db("Edge")) ||
    Db("Trident") ||
    Db("MSIE") ||
    Db("Edge");
  -1 != zb().toLowerCase().indexOf("webkit") && !Db("Edge") && Db("Mobile");
  Ei() || Db("Macintosh");
  Ei() || Db("Windows");
  (Ei() ? "Linux" === Ab.platform : Db("Linux")) || Ei() || Db("CrOS");
  Ei() || Db("Android");
  Fi();
  Db("iPad");
  Db("iPod");
  Gi();
  zb().toLowerCase().indexOf("kaios");
  var Hi = function (a, b, c, d) {
      for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
        var h = a.charCodeAt(e - 1);
        if (38 == h || 63 == h) {
          var l = a.charCodeAt(e + f);
          if (!l || 61 == l || 38 == l || 35 == l) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Ii = /#|$/,
    Ji = function (a, b) {
      var c = a.search(Ii),
        d = Hi(a, 0, b, c);
      if (0 > d) return null;
      var e = a.indexOf("&", d);
      if (0 > e || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " ")
      );
    },
    Ki = /[?&]($|#)/,
    Li = function (a, b, c) {
      for (
        var d, e = a.search(Ii), f = 0, h, l = [];
        0 <= (h = Hi(a, f, b, e));

      )
        l.push(a.substring(f, h)),
          (f = Math.min(a.indexOf("&", h) + 1 || e, e));
      l.push(a.slice(f));
      d = l.join("").replace(Ki, "$1");
      var m,
        n = null != c ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          t = d.indexOf("#");
        0 > t && (t = d.length);
        var r = d.indexOf("?"),
          u;
        0 > r || r > t ? ((r = t), (u = "")) : (u = d.substring(r + 1, t));
        q = [d.slice(0, r), u, d.slice(t)];
        var v = q[1];
        q[1] = p ? (v ? v + "&" + p : p) : v;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  var Mi = function (a) {
      try {
        var b;
        if ((b = !!a && null != a.location.href))
          a: {
            try {
              Sg(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Ni = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    };
  function Oi(a) {
    if (!a || !G.head) return null;
    var b = Pi("META");
    G.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b;
  }
  var Qi = function (a) {
      if (F.top == F) return 0;
      if (void 0 === a ? 0 : a) {
        var b = F.location.ancestorOrigins;
        if (b) return b[b.length - 1] == F.location.origin ? 1 : 2;
      }
      return Mi(F.top) ? 1 : 2;
    },
    Pi = function (a, b) {
      b = void 0 === b ? document : b;
      return b.createElement(String(a).toLowerCase());
    };
  function Ri(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Pi("IMG", a.document);
    if (c) {
      var f = function () {
        if (c) {
          var h = a.google_image_requests,
            l = sb(h, e);
          0 <= l && Array.prototype.splice.call(h, l, 1);
        }
        e.removeEventListener && e.removeEventListener("load", f, !1);
        e.removeEventListener && e.removeEventListener("error", f, !1);
      };
      Di(e, "load", f);
      Di(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Ti = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Ni(a, function (d, e) {
        if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Si(c, b);
    },
    Si = function (a, b) {
      var c = window,
        d;
      b = void 0 === b ? !1 : b;
      d = void 0 === d ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else Ri(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d);
    };
  var Ui = function () {};
  var Vi = function (a) {
      void 0 !== a.addtlConsent &&
        "string" !== typeof a.addtlConsent &&
        (a.addtlConsent = void 0);
      void 0 !== a.gdprApplies &&
        "boolean" !== typeof a.gdprApplies &&
        (a.gdprApplies = void 0);
      return (void 0 !== a.tcString && "string" !== typeof a.tcString) ||
        (void 0 !== a.listenerId && "number" !== typeof a.listenerId)
        ? 2
        : a.cmpStatus && "error" !== a.cmpStatus
        ? 0
        : 3;
    },
    Wi = function (a, b) {
      b = void 0 === b ? {} : b;
      this.s = a;
      this.h = null;
      this.M = {};
      this.sa = 0;
      var c;
      this.T = null != (c = b.Zi) ? c : 500;
      var d;
      this.J = null != (d = b.tn) ? d : !1;
      this.C = null;
    };
  qa(Wi, Ui);
  var Yi = function (a) {
    return "function" === typeof a.s.__tcfapi || null != Xi(a);
  };
  Wi.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.J },
      d = Ci(function () {
        return a(c);
      }),
      e = 0;
    -1 !== this.T &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.T));
    var f = function (h, l) {
      clearTimeout(e);
      h
        ? ((c = h),
          (c.internalErrorState = Vi(c)),
          (c.internalBlockOnErrors = b.J),
          (l && 0 === c.internalErrorState) ||
            ((c.tcString = "tcunavailable"), l || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Zi(this, "addEventListener", f);
    } catch (h) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  Wi.prototype.removeEventListener = function (a) {
    a && a.listenerId && Zi(this, "removeEventListener", null, a.listenerId);
  };
  var aj = function (a, b, c) {
      var d;
      d = void 0 === d ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (void 0 !== f) {
            e = f[void 0 === d ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var h = e;
      if (0 === h) return !1;
      var l = c;
      2 === c
        ? ((l = 0), 2 === h && (l = 1))
        : 3 === c && ((l = 1), 1 === h && (l = 0));
      var m;
      if (0 === l)
        if (a.purpose && a.vendor) {
          var n = $i(a.vendor.consents, void 0 === d ? "755" : d);
          m =
            n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC
              ? !0
              : n && $i(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          1 === l
            ? a.purpose && a.vendor
              ? $i(a.purpose.legitimateInterests, b) &&
                $i(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
              : !0
            : !0;
      return m;
    },
    $i = function (a, b) {
      return !(!a || !a[b]);
    },
    Zi = function (a, b, c, d) {
      c || (c = function () {});
      if ("function" === typeof a.s.__tcfapi) {
        var e = a.s.__tcfapi;
        e(b, 2, c, d);
      } else if (Xi(a)) {
        bj(a);
        var f = ++a.sa;
        a.M[f] = c;
        if (a.h) {
          var h = {};
          a.h.postMessage(
            ((h.__tcfapiCall = {
              command: b,
              version: 2,
              callId: f,
              parameter: d,
            }),
            h),
            "*"
          );
        }
      } else c({}, !1);
    },
    Xi = function (a) {
      if (a.h) return a.h;
      var b;
      a: {
        for (var c = a.s, d = 0; 50 > d; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (l) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var h = c.parent;
              if (h && h != c) {
                f = h;
                break b;
              }
            } catch (l) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.h = b;
      return a.h;
    },
    bj = function (a) {
      a.C ||
        ((a.C = function (b) {
          try {
            var c;
            c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data)
              .__tcfapiReturn;
            a.M[c.callId](c.returnValue, c.success);
          } catch (d) {}
        }),
        Di(a.s, "message", a.C));
    },
    cj = function (a) {
      if (!1 === a.gdprApplies) return !0;
      void 0 === a.internalErrorState && (a.internalErrorState = Vi(a));
      return "error" === a.cmpStatus || 0 !== a.internalErrorState
        ? a.internalBlockOnErrors
          ? (Ti({ e: String(a.internalErrorState) }), !1)
          : !0
        : "loaded" !== a.cmpStatus ||
          ("tcloaded" !== a.eventStatus &&
            "useractioncomplete" !== a.eventStatus)
        ? !1
        : !0;
    };
  var dj = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function ej() {
    var a = De.tcf || {};
    return (De.tcf = a);
  }
  var kj = function () {
    var a = ej(),
      b = new Wi(F, { Zi: -1 });
    Yi(b) && !fj() && !gj() && J(124);
    if (!a.active && Yi(b)) {
      fj() &&
        ((a.active = !0),
        (a.Gb = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        ($g().active = !0),
        (a.tcString = "tcunavailable"));
      yh();
      try {
        b.addEventListener(function (c) {
          if (0 !== c.internalErrorState)
            hj(a), zh([L.g.F, L.g.oa, L.g.K]), ($g().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            gj() && (a.active = !0),
            !ij(c) || fj() || gj())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (!1 === c.gdprApplies) {
              var e = {},
                f;
              for (f in dj) dj.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (ij(c)) {
              var h = {},
                l;
              for (l in dj)
                if (dj.hasOwnProperty(l))
                  if ("1" === l) {
                    var m,
                      n = c,
                      p = { Zk: !0 };
                    p = void 0 === p ? {} : p;
                    m = cj(n)
                      ? !1 === n.gdprApplies
                        ? !0
                        : "tcunavailable" === n.tcString
                        ? !p.Ci
                        : (p.Ci || void 0 !== n.gdprApplies || p.Zk) &&
                          (p.Ci ||
                            ("string" === typeof n.tcString &&
                              n.tcString.length))
                        ? aj(n, "1", 0)
                        : !0
                      : !1;
                    h["1"] = m;
                  } else h[l] = aj(c, l, dj[l]);
              d = h;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.Gb = d;
              var q = {},
                t = ((q[L.g.F] = a.Gb["1"] ? "granted" : "denied"), q);
              !0 !== a.gdprApplies
                ? (zh([L.g.F, L.g.oa, L.g.K]), ($g().active = !0))
                : ((t[L.g.oa] = a.Gb["3"] && a.Gb["4"] ? "granted" : "denied"),
                  "number" === typeof a.tcfPolicyVersion &&
                  4 <= a.tcfPolicyVersion
                    ? (t[L.g.K] = a.Gb["1"] && a.Gb["7"] ? "granted" : "denied")
                    : zh([L.g.K]),
                  uh(
                    t,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: jj() || "",
                    }
                  ));
            }
          } else zh([L.g.F, L.g.oa, L.g.K]);
        });
      } catch (c) {
        hj(a), zh([L.g.F, L.g.oa, L.g.K]), ($g().active = !0);
      }
    }
  };
  function hj(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function ij(a) {
    return (
      "tcloaded" === a.eventStatus ||
      "useractioncomplete" === a.eventStatus ||
      "cmpuishown" === a.eventStatus
    );
  }
  var fj = function () {
    return !0 === F.gtag_enable_tcf_support;
  };
  function gj() {
    return !0 === ej().enableAdvertiserConsentMode;
  }
  var jj = function () {
      var a = ej();
      if (a.active) return a.tcString;
    },
    lj = function () {
      var a = ej();
      if (a.active && void 0 !== a.gdprApplies)
        return a.gdprApplies ? "1" : "0";
    },
    mj = function (a) {
      if (!dj.hasOwnProperty(String(a))) return !0;
      var b = ej();
      return b.active && b.Gb ? !!b.Gb[String(a)] : !0;
    },
    nj = function () {
      return Yi(new Wi(F, { Zi: -1 }));
    };
  var oj = [L.g.F, L.g.O, L.g.K, L.g.oa],
    pj = {},
    qj = ((pj[L.g.F] = 1), (pj[L.g.O] = 2), pj);
  function rj(a) {
    if (void 0 === a) return 0;
    switch (R(a, L.g.fa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  var sj = function (a) {
      var b = rj(a);
      if (3 === b) return !1;
      switch (fh(L.g.oa)) {
        case 1:
        case 3:
          return !0;
        case 2:
          return !1;
        case 4:
          return 2 === b;
        case 0:
          return !0;
        default:
          return !1;
      }
    },
    tj = function () {
      return ih() || !eh(L.g.F) || !eh(L.g.O);
    },
    uj = function () {
      var a = {},
        b;
      for (b in qj) qj.hasOwnProperty(b) && (a[qj[b]] = fh(b));
      return "G1" + nc(a[1] || 0) + nc(a[2] || 0);
    },
    vj = {},
    wj =
      ((vj[L.g.F] = 0), (vj[L.g.O] = 1), (vj[L.g.K] = 2), (vj[L.g.oa] = 3), vj);
  function xj(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  var yj = function (a) {
      for (var b = "1", c = 0; c < oj.length; c++) {
        var d = b,
          e,
          f = oj[c],
          h = Xg[f];
        e = void 0 === h ? 0 : wj.hasOwnProperty(h) ? 12 | wj[h] : 8;
        var l = $g();
        l.accessedAny = !0;
        var m = l.entries[f] || {};
        e = (e << 2) | xj(m.implicit);
        b =
          d +
          ("" +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              e
            ] +
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
              (xj(m.declare) << 4) | (xj(m.default) << 2) | xj(m.update)
            ]);
      }
      var n = b,
        p;
      p = "" + ((ih() << 2) | rj(a));
      return n + p;
    },
    zj = function () {
      if (!eh(L.g.K)) return "-";
      for (
        var a = Object.keys(Be), b = gh(a), c = "", d = fa(a), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value;
        b[f] && (c += Be[f]);
      }
      return c || "-";
    },
    Aj = function () {
      return !1 !== pf["6"] || ((fj() || gj()) && "1" === lj()) ? "1" : "0";
    },
    Bj = function () {
      return (
        (!1 !== pf["6"] ? !0 : !(!fj() && !gj()) && "1" === lj()) || !eh(L.g.K)
      );
    },
    Cj = function () {
      var a = "0",
        b = "0",
        c;
      var d = ej();
      c = d.active ? d.cmpId : void 0;
      "number" === typeof c &&
        0 <= c &&
        4095 >= c &&
        ((a =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (c >> 6) & 63
          ]),
        (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          c & 63
        ]));
      var e = "0",
        f;
      var h = ej();
      f = h.active ? h.tcfPolicyVersion : void 0;
      "number" === typeof f &&
        0 <= f &&
        63 >= f &&
        (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
          f
        ]);
      var l = 0;
      !1 !== pf["6"] && (l |= 1);
      "1" === lj() && (l |= 2);
      fj() && (l |= 4);
      var m;
      var n = ej();
      m =
        void 0 !== n.enableAdvertiserConsentMode
          ? n.enableAdvertiserConsentMode
            ? "1"
            : "0"
          : void 0;
      "1" === m && (l |= 8);
      $g().waitPeriodTimedOut && (l |= 16);
      return (
        "1" +
        a +
        b +
        e +
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[l]
      );
    };
  var Dj = function () {
    var a = !1;
    return a;
  };
  var Ej = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
    Fj = function (a, b) {
      var c = Xf.ctid.split("-")[0].toUpperCase(),
        d = {};
      d.ctid = Xf.ctid;
      d.om = Ce.wd;
      d.wm = Ce.Sf;
      d.Ol = Vf.sd ? 2 : 1;
      d.ri = Xf.canonicalContainerId;
      d.ri !== a && (d.jf = a);
      Q(71) ? (d.Vi = 2) : Q(70) && (d.Vi = 1);
      Je ? ((d.ef = Ej[c]), d.ef || (d.ef = 0)) : (d.ef = Ne ? 13 : 10);
      We.J
        ? ((d.af = 0), (d.Ck = 2))
        : Le
        ? (d.af = 1)
        : Dj()
        ? (d.af = 2)
        : (d.af = 3);
      var e = {};
      e[6] = Wf;
      d.Jk = e;
      var f;
      var h = d.ef,
        l = d.af;
      void 0 === h
        ? (f = "")
        : (l || (l = 0), (f = "" + Gd(1, 1) + mc((h << 2) | l)));
      var m = d.Ck,
        n = 4 + f + (m ? "" + Gd(2, 1) + mc(m) : ""),
        p,
        q = d.wm;
      p = q && Fd.test(q) ? "" + Gd(3, 2) + q : "";
      var t,
        r = d.om;
      t = r ? "" + Gd(4, 1) + mc(r) : "";
      var u;
      var v = d.ctid;
      if (v && b) {
        var w = v.split("-"),
          x = w[0].toUpperCase();
        if ("GTM" !== x && "OPT" !== x) u = "";
        else {
          var y = w[1];
          u = "" + Gd(5, 3) + mc(1 + y.length) + (d.Ol || 0) + y;
        }
      } else u = "";
      var B = d.Vi,
        z = d.ri,
        C = d.jf,
        H = d.Cn,
        E =
          n +
          p +
          t +
          u +
          (B ? "" + Gd(6, 1) + mc(B) : "") +
          (z ? "" + Gd(7, 3) + mc(z.length) + z : "") +
          (C ? "" + Gd(8, 3) + mc(C.length) + C : "") +
          (H ? "" + Gd(9, 3) + mc(H.length) + H : ""),
        D;
      var K = d.Jk;
      K = void 0 === K ? {} : K;
      for (
        var M = [], S = fa(Object.keys(K)), U = S.next();
        !U.done;
        U = S.next()
      ) {
        var N = U.value;
        M[Number(N)] = K[N];
      }
      if (M.length) {
        var O = Gd(10, 3),
          da;
        if (0 === M.length) da = mc(0);
        else {
          for (var Z = [], W = 0, va = !1, wa = 0; wa < M.length; wa++) {
            va = !0;
            var sa = wa % 6;
            M[wa] && (W |= 1 << sa);
            5 === sa && (Z.push(mc(W)), (W = 0), (va = !1));
          }
          va && Z.push(mc(W));
          da = Z.join("");
        }
        var ha = da;
        D = "" + O + mc(ha.length) + ha;
      } else D = "";
      return E + D;
    };
  var Gj = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var h = e[f].split("="),
        l = h[0].replace(/^\s*|\s*$/g, "");
      if (l && l == a) {
        var m = h
          .slice(1)
          .join("=")
          .replace(/^\s*|\s*$/g, "");
        m && c && (m = decodeURIComponent(m));
        d.push(m);
      }
    }
    return d;
  };
  var Jj = function (a, b, c, d) {
      return Hj(d) ? Gj(a, String(b || Ij()), c) : [];
    },
    Mj = function (a, b, c, d, e) {
      if (Hj(e)) {
        var f = Kj(a, d, e);
        if (1 === f.length) return f[0].id;
        if (0 !== f.length) {
          f = Lj(
            f,
            function (h) {
              return h.Se;
            },
            b
          );
          if (1 === f.length) return f[0].id;
          f = Lj(
            f,
            function (h) {
              return h.Ud;
            },
            c
          );
          return f[0] ? f[0].id : void 0;
        }
      }
    };
  function Nj(a, b, c, d) {
    var e = Ij(),
      f = window;
    "null" !== f.origin && (f.document.cookie = a);
    var h = Ij();
    return e != h || (void 0 != c && 0 <= Jj(b, h, !1, d).indexOf(c));
  }
  var Rj = function (a, b, c) {
      function d(r, u, v) {
        if (null == v) return delete h[u], r;
        h[u] = v;
        return r + "; " + u + "=" + v;
      }
      function e(r, u) {
        if (null == u) return delete h[u], r;
        h[u] = !0;
        return r + "; " + u;
      }
      if (!Hj(c.tb)) return 2;
      var f;
      void 0 == b
        ? (f = a + "=deleted; expires=" + new Date(0).toUTCString())
        : (c.encode && (b = encodeURIComponent(b)),
          (b = Oj(b)),
          (f = a + "=" + b));
      var h = {};
      f = d(f, "path", c.path);
      var l;
      c.expires instanceof Date
        ? (l = c.expires.toUTCString())
        : null != c.expires && (l = "" + c.expires);
      f = d(f, "expires", l);
      f = d(f, "max-age", c.yn);
      f = d(f, "samesite", c.An);
      c.Bn && (f = e(f, "secure"));
      var m = c.domain;
      if (m && "auto" === m.toLowerCase()) {
        for (var n = Pj(), p = 0; p < n.length; ++p) {
          var q = "none" !== n[p] ? n[p] : void 0,
            t = d(f, "domain", q);
          t = e(t, c.flags);
          if (!Qj(q, c.path) && Nj(t, a, b, c.tb)) return 0;
        }
        return 1;
      }
      m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
      f = e(f, c.flags);
      return Qj(m, c.path) ? 1 : Nj(f, a, b, c.tb) ? 0 : 1;
    },
    Sj = function (a, b, c) {
      null == c.path && (c.path = "/");
      c.domain || (c.domain = "auto");
      return Rj(a, b, c);
    };
  function Lj(a, b, c) {
    for (var d = [], e = [], f, h = 0; h < a.length; h++) {
      var l = a[h],
        m = b(l);
      m === c
        ? d.push(l)
        : void 0 === f || m < f
        ? ((e = [l]), (f = m))
        : m === f && e.push(l);
    }
    return 0 < d.length ? d : e;
  }
  function Kj(a, b, c) {
    for (var d = [], e = Jj(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var h = e[f].split("."),
        l = h.shift();
      if (!b || -1 !== b.indexOf(l)) {
        var m = h.shift();
        m &&
          ((m = m.split("-")),
          d.push({ id: h.join("."), Se: 1 * m[0] || 1, Ud: 1 * m[1] || 1 }));
      }
    }
    return d;
  }
  var Oj = function (a) {
      a && 1200 < a.length && (a = a.substring(0, 1200));
      return a;
    },
    Tj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    Uj = /(^|\.)doubleclick\.net$/i,
    Qj = function (a, b) {
      return (
        Uj.test(window.document.location.hostname) || ("/" === b && Tj.test(a))
      );
    },
    Ij = function () {
      return "null" !== window.origin ? window.document.cookie : "";
    },
    Pj = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (4 === b.length) {
        var c = b[b.length - 1];
        if (parseInt(c, 10).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      Uj.test(e) || Tj.test(e) || a.push("none");
      return a;
    },
    Hj = function (a) {
      return a && Ug().h()
        ? (g(a) ? [a] : a).every(function (b) {
            return hh(b) && eh(b);
          })
        : !0;
    },
    Vj = function (a) {
      if (!a) return 1;
      a = 0 === a.indexOf(".") ? a.substr(1) : a;
      return a.split(".").length;
    },
    Wj = function (a) {
      if (!a || "/" === a) return 1;
      "/" !== a[0] && (a = "/" + a);
      "/" !== a[a.length - 1] && (a += "/");
      return a.split("/").length - 1;
    },
    Xj = function (a, b) {
      var c = "" + Vj(a),
        d = Wj(b);
      1 < d && (c += "-" + d);
      return c;
    };
  var Yj = function (a) {
      var b = Math.round(2147483647 * Math.random()),
        c;
      if (a) {
        var d = 1,
          e,
          f,
          h;
        if (a)
          for (d = 0, f = a.length - 1; 0 <= f; f--)
            (h = a.charCodeAt(f)),
              (d = ((d << 6) & 268435455) + h + (h << 14)),
              (e = d & 266338304),
              (d = 0 !== e ? d ^ (e >> 21) : d);
        c = String(b ^ (d & 2147483647));
      } else c = String(b);
      return c;
    },
    Zj = function (a) {
      return [Yj(a), Math.round(Ka() / 1e3)].join(".");
    },
    ak = function (a, b, c, d, e) {
      var f = Vj(b);
      return Mj(a, f, Wj(c), d, e);
    },
    bk = function (a, b, c, d) {
      return [b, Xj(c, d), a].join(".");
    };
  function ck(a, b, c, d) {
    var e,
      f = Number(null != a.Vb ? a.Vb : void 0);
    0 !== f && (e = new Date((b || Ka()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      tb: d,
    };
  }
  var dk;
  var hk = function () {
      var a = ek,
        b = fk,
        c = gk(),
        d = function (h) {
          a(h.target || h.srcElement || {});
        },
        e = function (h) {
          b(h.target || h.srcElement || {});
        };
      if (!c.init) {
        Zb(G, "mousedown", d);
        Zb(G, "keyup", d);
        Zb(G, "submit", e);
        var f = HTMLFormElement.prototype.submit;
        HTMLFormElement.prototype.submit = function () {
          b(this);
          f.call(this);
        };
        c.init = !0;
      }
    },
    ik = function (a, b, c, d, e) {
      var f = {
        callback: a,
        domains: b,
        fragment: 2 === c,
        placement: c,
        forms: d,
        sameHost: e,
      };
      gk().decorators.push(f);
    },
    jk = function (a, b, c) {
      for (var d = gk().decorators, e = {}, f = 0; f < d.length; ++f) {
        var h = d[f],
          l;
        if ((l = !c || h.forms))
          a: {
            var m = h.domains,
              n = a,
              p = !!h.sameHost;
            if (m && (p || n !== G.location.hostname))
              for (var q = 0; q < m.length; q++)
                if (m[q] instanceof RegExp) {
                  if (m[q].test(n)) {
                    l = !0;
                    break a;
                  }
                } else if (
                  0 <= n.indexOf(m[q]) ||
                  (p && 0 <= m[q].indexOf(n))
                ) {
                  l = !0;
                  break a;
                }
            l = !1;
          }
        if (l) {
          var t = h.placement;
          void 0 == t && (t = h.fragment ? 2 : 1);
          t === b && Na(e, h.callback());
        }
      }
      return e;
    };
  function gk() {
    var a = Qb("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var kk = /(.*?)\*(.*?)\*(.*)/,
    lk = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    mk = /^(?:www\.|m\.|amp\.)+/,
    nk = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function ok(a) {
    var b = nk.exec(a);
    if (b) return { Bg: b[1], query: b[2], fragment: b[3] };
  }
  function pk(a, b) {
    var c = [
        Ob.userAgent,
        new Date().getTimezoneOffset(),
        Ob.userLanguage || Ob.language,
        Math.floor(Ka() / 60 / 1e3) - (void 0 === b ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = dk)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var h = f, l = 0; 8 > l; l++)
          h = h & 1 ? (h >>> 1) ^ 3988292384 : h >>> 1;
        e[f] = h;
      }
      d = e;
    }
    dk = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ dk[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function qk() {
    return function (a) {
      var b = Ef(F.location.href),
        c = b.search.replace("?", ""),
        d = xf(c, "_gl", !0) || "";
      a.query = rk(d) || {};
      var e = Af(b, "fragment"),
        f;
      var h = -1;
      if (Pa(e, "_gl=")) h = 4;
      else {
        var l = e.indexOf("&_gl=");
        0 < l && (h = l + 3 + 2);
      }
      if (0 > h) f = void 0;
      else {
        var m = e.indexOf("&", h);
        f = 0 > m ? e.substring(h) : e.substring(h, m);
      }
      a.fragment = rk(f || "") || {};
    };
  }
  var sk = function (a) {
      var b = qk(),
        c = gk();
      c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
      var d = {},
        e = c.data;
      e && (Na(d, e.query), a && Na(d, e.fragment));
      return d;
    },
    rk = function (a) {
      try {
        var b = tk(a, 3);
        if (void 0 !== b) {
          for (
            var c = {}, d = b ? b.split("*") : [], e = 0;
            e + 1 < d.length;
            e += 2
          ) {
            var f = d[e],
              h = db(d[e + 1]);
            c[f] = h;
          }
          fb("TAGGING", 6);
          return c;
        }
      } catch (l) {
        fb("TAGGING", 8);
      }
    };
  function tk(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = kk.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var h = c;
      if (h && "1" === h[1]) {
        var l = h[3],
          m;
        a: {
          for (var n = h[2], p = 0; p < b; ++p)
            if (n === pk(l, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return l;
        fb("TAGGING", 7);
      }
    }
  }
  function uk(a, b, c, d, e) {
    function f(p) {
      var q = p,
        t = new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)").exec(q),
        r = q;
      if (t) {
        var u = t[2],
          v = t[4];
        r = t[1];
        v && (r = r + u + v);
      }
      p = r;
      var w = p.charAt(p.length - 1);
      p && "&" !== w && (p += "&");
      return p + n;
    }
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var h = ok(c);
    if (!h) return "";
    var l = h.query || "",
      m = h.fragment || "",
      n = a + "=" + b;
    d
      ? (0 !== m.substring(1).length && e) || (m = "#" + f(m.substring(1)))
      : (l = "?" + f(l.substring(1)));
    return "" + h.Bg + l + m;
  }
  function vk(a, b) {
    function c(n, p, q) {
      var t;
      a: {
        for (var r in n)
          if (n.hasOwnProperty(r)) {
            t = !0;
            break a;
          }
        t = !1;
      }
      if (t) {
        var u,
          v = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            void 0 !== x &&
              x === x &&
              null !== x &&
              "[object Object]" !== x.toString() &&
              (v.push(w), v.push(cb(String(x))));
          }
        var y = v.join("*");
        u = ["1", pk(y), y].join("*");
        d
          ? (jd(13) || jd(11) || !p) && wk("_gl", u, a, p, q)
          : xk("_gl", u, a, p, q);
      }
    }
    var d = "FORM" === (a.tagName || "").toUpperCase(),
      e = jk(b, 1, d),
      f = jk(b, 2, d),
      h = jk(b, 4, d),
      l = jk(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    jd(11) && c(h, !0, !0);
    for (var m in l) l.hasOwnProperty(m) && yk(m, l[m], a);
  }
  function yk(a, b, c) {
    "a" === c.tagName.toLowerCase()
      ? xk(a, b, c)
      : "form" === c.tagName.toLowerCase() && wk(a, b, c);
  }
  function xk(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    var f;
    if ((f = c.href)) {
      var h;
      if (!(h = !jd(16) || d)) {
        var l = F.location.href,
          m = ok(c.href),
          n = ok(l);
        h = !(m && n && m.Bg === n.Bg && m.query === n.query && m.fragment);
      }
      f = h;
    }
    if (f) {
      var p = uk(a, b, c.href, d, e);
      rb.test(p) && (c.href = p);
    }
  }
  function wk(a, b, c, d, e) {
    d = void 0 === d ? !1 : d;
    e = void 0 === e ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if ("get" !== f || d) {
        if ("get" === f || "post" === f) {
          var h = uk(a, b, c.action, d, e);
          rb.test(h) && (c.action = h);
        }
      } else {
        for (var l = c.childNodes || [], m = !1, n = 0; n < l.length; n++) {
          var p = l[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = G.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function ek(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && 0 < d; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        ("http:" !== f && "https:" !== f) || vk(e, e.hostname);
      }
    } catch (h) {}
  }
  function fk(a) {
    try {
      if (a.action) {
        var b = Af(Ef(a.action), "host");
        vk(a, b);
      }
    } catch (c) {}
  }
  var zk = function (a, b, c, d) {
      hk();
      ik(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    },
    Ak = function (a, b) {
      hk();
      ik(a, [zf(F.location, "host", !0)], b, !0, !0);
    },
    Bk = function () {
      var a = G.location.hostname,
        b = lk.exec(G.referrer);
      if (!b) return !1;
      var c = b[2],
        d = b[1],
        e = "";
      if (c) {
        var f = c.split("/"),
          h = f[1];
        e = "s" === h ? decodeURIComponent(f[2]) : decodeURIComponent(h);
      } else if (d) {
        if (0 === d.indexOf("xn--")) return !1;
        e = d.replace(/-/g, ".").replace(/\.\./g, "-");
      }
      var l = a.replace(mk, ""),
        m = e.replace(mk, ""),
        n;
      if (!(n = l === m)) {
        var p = "." + m;
        n = l.substring(l.length - p.length, l.length) === p;
      }
      return n;
    },
    Ck = function (a, b) {
      return !1 === a ? !1 : a || b || Bk();
    };
  var Dk = ["1"],
    Ek = {},
    Fk = {},
    Kk = function (a, b) {
      b = void 0 === b ? !0 : b;
      var c = Gk(a.prefix);
      if (!Ek[c])
        if (Hk(c, a.path, a.domain)) {
          var d = Fk[Gk(a.prefix)];
          Ik(a, d ? d.id : void 0, d ? d.ug : void 0);
        } else {
          var e = Gf("auiddc");
          if (e) fb("TAGGING", 17), (Ek[c] = e);
          else if (b) {
            var f = Gk(a.prefix),
              h = Zj();
            if (0 === Jk(f, h, a)) {
              var l = Qb("google_tag_data", {});
              l._gcl_au || (l._gcl_au = h);
            }
            Hk(c, a.path, a.domain);
          }
        }
    };
  function Ik(a, b, c) {
    var d = Gk(a.prefix),
      e = Ek[d];
    if (e) {
      var f = e.split(".");
      if (2 === f.length) {
        var h = Number(f[1]) || 0;
        if (h) {
          var l = e;
          b && (l = e + "." + b + "." + (c ? c : Math.floor(Ka() / 1e3)));
          Jk(d, l, a, 1e3 * h);
        }
      }
    }
  }
  function Jk(a, b, c, d) {
    var e = bk(b, "1", c.domain, c.path),
      f = ck(c, d);
    f.tb = Lk();
    return Sj(a, e, f);
  }
  function Hk(a, b, c) {
    var d = ak(a, b, c, Dk, Lk());
    if (!d) return !1;
    Mk(a, d);
    return !0;
  }
  function Mk(a, b) {
    var c = b.split(".");
    5 === c.length
      ? ((Ek[a] = c.slice(0, 2).join(".")),
        (Fk[a] = { id: c.slice(2, 4).join("."), ug: Number(c[4]) || 0 }))
      : 3 === c.length
      ? (Fk[a] = { id: c.slice(0, 2).join("."), ug: Number(c[2]) || 0 })
      : (Ek[a] = b);
  }
  function Gk(a) {
    return (a || "_gcl") + "_au";
  }
  function Nk(a) {
    function b() {
      eh(c) && a();
    }
    var c = Lk();
    lh(function () {
      b();
      eh(c) || mh(b, c);
    }, c);
  }
  function Ok(a) {
    var b = sk(!0),
      c = Gk(a.prefix);
    Nk(function () {
      var d = b[c];
      if (d) {
        Mk(c, d);
        var e = 1e3 * Number(Ek[c].split(".")[1]);
        if (e) {
          fb("TAGGING", 16);
          var f = ck(a, e);
          f.tb = Lk();
          var h = bk(d, "1", a.domain, a.path);
          Sj(c, h, f);
        }
      }
    });
  }
  function Pk(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var h = {},
        l = ak(a, e.path, e.domain, Dk, Lk());
      l && (h[a] = l);
      return h;
    };
    Nk(function () {
      zk(f, b, c, d);
    });
  }
  function Lk() {
    return jd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var Qk = function (a) {
    for (
      var b = [],
        c = G.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Kg: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (h, l) {
      return l.timestamp - h.timestamp;
    });
    return b;
  };
  function Rk(a, b) {
    var c = Qk(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !("1" !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) &&
        Number(f[1])
      ) {
        d[c[e].Kg] || (d[c[e].Kg] = []);
        var h = { version: f[0], timestamp: 1e3 * Number(f[1]), Z: f[2] };
        b && 3 < f.length && (h.labels = f.slice(3));
        d[c[e].Kg].push(h);
      }
    }
    return d;
  }
  var Sk = {},
    Tk =
      ((Sk.k = { Ga: /^[\w-]+$/ }),
      (Sk.b = { Ga: /^[\w-]+$/, Gg: !0 }),
      (Sk.i = { Ga: /^[1-9]\d*$/ }),
      Sk),
    Uk = {},
    Vk =
      ((Uk[5] = {
        version: "2",
        Im: ["2"],
        Pi: "ad_storage",
        si: ["k", "i", "b"],
      }),
      Uk);
  function Wk(a, b) {
    var c = b.Ga;
    return "function" === typeof c ? c(a) : c.test(a);
  }
  function Xk(a) {
    for (
      var b = fa(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Bd: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Bd = Tk[e];
      d.Bd
        ? d.Bd.Gg
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (h) {
                    return function (l) {
                      return Wk(l, h.Bd);
                    };
                  })(d)
                )
              : void 0)
          : ("string" === typeof f && Wk(f, d.Bd)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
    return a;
  }
  function Yk(a) {
    var b = Vk[5];
    if (b) {
      for (
        var c = [], d = Jj(a, void 0, void 0, b.Pi), e = fa(d), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var h = f.value.split("."),
          l = h.shift();
        if (-1 !== b.Im.indexOf(l)) {
          h.shift();
          var m = h.join("."),
            n = c,
            p = n.push,
            q;
          var t = {},
            r = Vk[5];
          if (r) {
            for (
              var u = r.si, v = fa(m.split("$")), w = v.next();
              !w.done;
              w = v.next()
            ) {
              var x = w.value,
                y = x[0];
              if (-1 !== u.indexOf(y))
                try {
                  var B = decodeURIComponent(x.substring(1)),
                    z = Tk[y];
                  z &&
                    (z.Gg ? ((t[y] = t[y] || []), t[y].push(B)) : (t[y] = B));
                } catch (C) {}
            }
            q = Xk(t);
          } else q = void 0;
          p.call(n, q);
        }
      }
      return c;
    }
  }
  function il(a, b, c, d) {
    c = c || {};
    var e;
    var f = Vk[5];
    if (f) {
      for (var h = [], l = fa(f.si), m = l.next(); !m.done; m = l.next()) {
        var n = m.value,
          p = Tk[n];
        if (p) {
          var q = b[n];
          if (void 0 !== q)
            if (p.Gg && Array.isArray(q))
              for (var t = fa(q), r = t.next(); !r.done; r = t.next())
                h.push(encodeURIComponent("" + n + r.value));
            else h.push(encodeURIComponent("" + n + q));
        }
      }
      e = h.join("$");
    } else e = void 0;
    var u = e;
    if (u) {
      var v = Vk[5],
        w = [v.version, Xj(c.domain, c.path), u].join(".");
      Sj(a, w, ck(c, d, void 0, v.Pi));
    }
  }
  var jl = /^\w+$/,
    kl = /^[\w-]+$/,
    ll = {
      ag: "_ag",
      aw: "_aw",
      dc: "_dc",
      gb: "_gb",
      gf: "_gf",
      gp: "_gp",
      ha: "_ha",
    };
  function ml() {
    return jd(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"];
  }
  var nl = function (a) {
      return !Ug().h() || eh(a);
    },
    ol = function (a) {
      function b() {
        var d = nl(c);
        d && a();
        return d;
      }
      var c = ml();
      lh(function () {
        b() || mh(b, c);
      }, c);
    },
    ql = function (a) {
      return pl(a).map(function (b) {
        return b.Z;
      });
    },
    ul = function (a) {
      var b = rl(a.prefix),
        c = sl("gb", b),
        d = sl("ag", b);
      if (!d || !c) return [];
      var e = function (l) {
          return function (m) {
            m.type = l;
            return m;
          };
        },
        f = pl(c).map(e("gb")),
        h = tl(d).map(e("ag"));
      return f.concat(h).sort(function (l, m) {
        return m.timestamp - l.timestamp;
      });
    };
  function vl(a, b, c, d, e) {
    var f = Aa(a, function (h) {
      return h.Z === c;
    });
    f
      ? ((f.timestamp = Math.max(f.timestamp, d)),
        (f.labels = wl(f.labels || [], e || [])))
      : a.push({ version: b, Z: c, timestamp: d, labels: e });
  }
  var pl = function (a) {
      for (
        var b = [], c = Jj(a, G.cookie, void 0, ml()), d = fa(c), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = xl(e.value);
        if (null != f) {
          var h = f;
          vl(b, h.version, h.Z, h.timestamp, h.labels);
        }
      }
      b.sort(function (l, m) {
        return m.timestamp - l.timestamp;
      });
      return yl(b);
    },
    tl = function (a) {
      if (!jd(20)) return [];
      for (
        var b = Yk(a) || [], c = [], d = fa(b), e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = e.value,
          h = f,
          l = f ? 1e3 * (Number(f.i) || 0) : 0;
        l && vl(c, "2", h.k, l, h.b || []);
      }
      return c.sort(function (m, n) {
        return n.timestamp - m.timestamp;
      });
    };
  function wl(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function rl(a) {
    return a && "string" == typeof a && a.match(jl) ? a : "_gcl";
  }
  function zl(a, b) {
    var c = jd(20),
      d = Ef(a),
      e = Af(d, "query", !1, void 0, "gclid"),
      f = Af(d, "query", !1, void 0, "gclsrc"),
      h = Af(d, "query", !1, void 0, "wbraid"),
      l;
    c && (l = Af(d, "query", !1, void 0, "gbraid"));
    var m = Af(d, "query", !1, void 0, "dclid");
    if (b && (!e || !f || !h || (c && !l))) {
      var n = d.hash.replace("#", "");
      e = e || xf(n, "gclid");
      f = f || xf(n, "gclsrc");
      h = h || xf(n, "wbraid");
      c && (l = l || xf(n, "gbraid"));
    }
    return Al(e, f, m, h, l);
  }
  var Bl = function () {
      return zl(F.location.href, !0);
    },
    Al = function (a, b, c, d, e) {
      var f = {},
        h = function (l, m) {
          f[m] || (f[m] = []);
          f[m].push(l);
        };
      f.gclid = a;
      f.gclsrc = b;
      f.dclid = c;
      if (void 0 !== a && a.match(kl))
        switch (b) {
          case void 0:
            h(a, "aw");
            break;
          case "aw.ds":
            h(a, "aw");
            h(a, "dc");
            break;
          case "ds":
            h(a, "dc");
            break;
          case "3p.ds":
            h(a, "dc");
            break;
          case "gf":
            h(a, "gf");
            break;
          case "ha":
            h(a, "ha");
        }
      c && h(c, "dc");
      void 0 !== d && kl.test(d) && ((f.wbraid = d), h(d, "gb"));
      jd(20) && void 0 !== e && kl.test(e) && ((f.gbraid = e), h(e, "ag"));
      return f;
    },
    Dl = function (a) {
      var b = Bl();
      if (jd(18)) {
        for (
          var c = !0, d = fa(Object.keys(b)), e = d.next();
          !e.done;
          e = d.next()
        )
          if (void 0 !== b[e.value]) {
            c = !1;
            break;
          }
        c && (b = zl(F.document.referrer, !1));
      }
      Cl(b, !1, a);
    };
  function Cl(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = rl(c.prefix);
    d = d || Ka();
    var h = Math.round(d / 1e3),
      l = ml(),
      m = !1,
      n = !1,
      p = function () {
        if (nl(l)) {
          var q = ck(c, d, !0);
          q.tb = l;
          for (
            var t = function (E, D) {
                var K = sl(E, f);
                K && (Sj(K, D, q), "gb" !== E && (m = !0));
              },
              r = function (E) {
                var D = ["GCL", h, E];
                0 < e.length && D.push(e.join("."));
                return D.join(".");
              },
              u = fa(["aw", "dc", "gf", "ha", "gp"]),
              v = u.next();
            !v.done;
            v = u.next()
          ) {
            var w = v.value;
            a[w] && t(w, r(a[w][0]));
          }
          if (!m && a.gb) {
            var x = a.gb[0],
              y = sl("gb", f);
            (!b &&
              pl(y).some(function (E) {
                return E.Z === x && E.labels && 0 < E.labels.length;
              })) ||
              t("gb", r(x));
          }
        }
        if (!n && jd(20) && a.gbraid && nl("ad_storage") && ((n = !0), !m)) {
          var B = a.gbraid,
            z = sl("ag", f);
          if (
            b ||
            !tl(z).some(function (E) {
              return E.Z === B && E.labels && 0 < E.labels.length;
            })
          ) {
            var C = {},
              H = ((C.k = B), (C.i = h), (C.b = e), C);
            il(z, H, c, d);
          }
        }
      };
    lh(function () {
      p();
      nl(l) || mh(p, l);
    }, l);
  }
  var Fl = function (a, b) {
      var c = sk(!0);
      ol(function () {
        for (var d = rl(b.prefix), e = 0; e < a.length; ++e) {
          var f = a[e];
          if (void 0 !== ll[f]) {
            var h = sl(f, d),
              l = c[h];
            if (l) {
              var m = Math.min(El(l), Ka()),
                n;
              b: {
                for (
                  var p = m, q = Jj(h, G.cookie, void 0, ml()), t = 0;
                  t < q.length;
                  ++t
                )
                  if (El(q[t]) > p) {
                    n = !0;
                    break b;
                  }
                n = !1;
              }
              if (!n) {
                var r = ck(b, m, !0);
                r.tb = ml();
                Sj(h, l, r);
              }
            }
          }
        }
        Cl(Al(c.gclid, c.gclsrc), !1, b);
      });
    },
    sl = function (a, b) {
      var c = ll[a];
      if (void 0 !== c) return b + c;
    },
    El = function (a) {
      return 0 !== Gl(a.split(".")).length
        ? 1e3 * (Number(a.split(".")[1]) || 0)
        : 0;
    };
  function xl(a) {
    var b = Gl(a.split("."));
    return 0 === b.length
      ? null
      : {
          version: b[0],
          Z: b[2],
          timestamp: 1e3 * (Number(b[1]) || 0),
          labels: b.slice(3),
        };
  }
  function Gl(a) {
    return 3 > a.length ||
      ("GCL" !== a[0] && "1" !== a[0]) ||
      !/^\d+$/.test(a[1]) ||
      !kl.test(a[2])
      ? []
      : a;
  }
  var Hl = function (a, b, c, d, e) {
      if (za(b) && "null" !== F.origin) {
        var f = rl(e),
          h = function () {
            for (var l = {}, m = 0; m < a.length; ++m) {
              var n = sl(a[m], f);
              if (n) {
                var p = Jj(n, G.cookie, void 0, ml());
                p.length && (l[n] = p.sort()[p.length - 1]);
              }
            }
            return l;
          };
        ol(function () {
          zk(h, b, c, d);
        });
      }
    },
    yl = function (a) {
      return a.filter(function (b) {
        return kl.test(b.Z);
      });
    },
    Il = function (a, b) {
      if ("null" !== F.origin) {
        for (var c = rl(b.prefix), d = {}, e = 0; e < a.length; e++)
          ll[a[e]] && (d[a[e]] = ll[a[e]]);
        ol(function () {
          k(d, function (f, h) {
            var l = Jj(c + h, G.cookie, void 0, ml());
            l.sort(function (r, u) {
              return El(u) - El(r);
            });
            if (l.length) {
              var m = l[0],
                n = El(m),
                p = 0 !== Gl(m.split(".")).length ? m.split(".").slice(3) : [],
                q = {},
                t;
              t = 0 !== Gl(m.split(".")).length ? m.split(".")[2] : void 0;
              q[f] = [t];
              Cl(q, !0, b, n, p);
            }
          });
        });
      }
    };
  function Jl(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  var Kl = function (a) {
      function b(e, f, h) {
        h && (e[f] = h);
      }
      if (ih()) {
        var c = Bl();
        if (Jl(c, a)) {
          var d = {};
          b(d, "gclid", c.gclid);
          b(d, "dclid", c.dclid);
          b(d, "gclsrc", c.gclsrc);
          b(d, "wbraid", c.wbraid);
          jd(20) && b(d, "gbraid", c.gbraid);
          Ak(function () {
            return d;
          }, 3);
          Ak(function () {
            var e = {};
            return (e._up = "1"), e;
          }, 1);
        }
      }
    },
    Ll = function (a) {
      if (!jd(11)) return null;
      var b = sk(!0).gad_source;
      if (null != b) return (F.location.hash = ""), b;
      if (jd(12)) {
        var c = Ef(F.location.href);
        b = Af(c, "query", !1, void 0, "gad_source");
        if (null != b) return b;
        var d = Bl();
        if (Jl(d, a)) return "0";
      }
      return null;
    },
    Ml = function (a) {
      var b = Ll(a);
      null != b &&
        Ak(function () {
          var c = {};
          return (c.gad_source = b), c;
        }, 4);
    },
    Nl = function (a, b, c, d) {
      var e = [];
      c = c || {};
      if (!nl(ml())) return e;
      var f = pl(a),
        h;
      a: {
        if (f.length) {
          for (var l = 0; l < f.length; l++)
            -1 === (f[l].labels || []).indexOf(b) ? e.push(0) : e.push(1);
          if (1 !== e[0]) {
            h = f[0];
            break a;
          }
        }
        h = void 0;
      }
      var m = h;
      if (m && !d) {
        var n = m.timestamp,
          p = [m.version, Math.round(n / 1e3), m.Z]
            .concat(m.labels || [], [b])
            .join("."),
          q = ck(c, n, !0);
        q.tb = ml();
        Sj(a, p, q);
      }
      return e;
    };
  function Ol(a, b) {
    var c = rl(b),
      d = sl(a, c);
    if (!d) return 0;
    var e;
    e = "ag" === a ? tl(d) : pl(d);
    for (var f = 0, h = 0; h < e.length; h++) f = Math.max(f, e[h].timestamp);
    return f;
  }
  function Pl(a) {
    var b = 0,
      c;
    for (c in a)
      for (var d = a[c], e = 0; e < d.length; e++)
        b = Math.max(b, Number(d[e].timestamp));
    return b;
  }
  var Ql = function (a, b) {
    b = void 0 === b ? !1 : b;
    var c = Math.max(Ol("aw", a), Pl(nl(ml()) ? Rk() : {})),
      d = Math.max(Ol("gb", a), Pl(nl(ml()) ? Rk("_gac_gb", !0) : {}));
    jd(20) && b && (d = Math.max(d, Ol("ag", a)));
    return d > c;
  };
  var gm,
    hm = !1,
    im = function (a) {
      if (!hm) {
        hm = !0;
        gm = gm || {};
      }
      return gm[a];
    };
  var jm = function (a, b, c) {
    this.target = a;
    this.eventName = b;
    this.o = c;
    this.h = {};
    this.metadata = A(c.eventMetadata || {});
    this.isAborted = !1;
  };
  jm.prototype.copyToHitData = function (a, b, c) {
    var d = R(this.o, a);
    void 0 === d && (d = b);
    if (void 0 !== d && void 0 !== c && g(d) && Q(54))
      try {
        d = c(d);
      } catch (e) {}
    void 0 !== d && (this.h[a] = d);
  };
  var km = function (a, b, c) {
    var d = im(a.target.X);
    return d && d.hasOwnProperty(b) ? d[b] : c;
  };
  var lm = function () {
    De.dedupe_gclid || (De.dedupe_gclid = "" + Zj());
    return De.dedupe_gclid;
  };
  var mm = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    nm = /^www.googleadservices.com$/,
    pm = function (a) {
      a || (a = om());
      return a.Hm
        ? !1
        : a.sl || a.vl || a.wl || a.kg || a.Ve || a.Yk || a.jl
        ? !0
        : !1;
    },
    om = function () {
      var a = {},
        b = sk(!0);
      a.Hm = !!b._up;
      var c = Bl();
      a.sl = void 0 !== c.aw;
      a.vl = void 0 !== c.dc;
      a.wl = void 0 !== c.wbraid;
      var d = Ef(F.location.href),
        e = Af(d, "query", !1, void 0, "gad");
      a.kg = void 0 !== e;
      if (!a.kg) {
        var f = d.hash.replace("#", ""),
          h = xf(f, "gad");
        a.kg = void 0 !== h;
      }
      a.Ve = void 0;
      if (Q(59)) {
        var l = Af(d, "query", !1, void 0, "gad_source");
        a.Ve = l;
        if (void 0 === a.Ve) {
          var m = d.hash.replace("#", ""),
            n = xf(m, "gad_source");
          a.Ve = n;
        }
      }
      var p = G.referrer ? Af(Ef(G.referrer), "host") : "";
      a.jl = mm.test(p);
      a.Yk = nm.test(p);
      return a;
    };
  var qm = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    rm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    sm = /^\d+\.fls\.doubleclick\.net$/,
    tm = /;gac=([^;?]+)/,
    um = /;gacgb=([^;?]+)/,
    vm = /;gclaw=([^;?]+)/,
    wm = /;gclgb=([^;?]+)/;
  function xm(a, b) {
    if (sm.test(G.location.host)) {
      var c = G.location.href.match(b);
      return c && 2 == c.length && c[1].match(qm)
        ? decodeURIComponent(c[1])
        : "";
    }
    var d = [],
      e;
    for (e in a) {
      for (var f = [], h = a[e], l = 0; l < h.length; l++) f.push(h[l].Z);
      d.push(e + ":" + f.join(","));
    }
    return 0 < d.length ? d.join(";") : "";
  }
  var ym = function (a, b, c) {
    var d = nl(ml()) ? Rk("_gac_gb", !0) : {},
      e = [],
      f = !1,
      h;
    for (h in d) {
      var l = Nl("_gac_gb_" + h, a, b, c);
      f =
        f ||
        (0 !== l.length &&
          l.some(function (m) {
            return 1 === m;
          }));
      e.push(h + ":" + l.join(","));
    }
    return { Xk: f ? e.join(";") : "", Wk: xm(d, um) };
  };
  function zm(a, b, c) {
    if (sm.test(G.location.host)) {
      var d = G.location.href.match(c);
      if (d && 2 == d.length && d[1].match(rm)) return [{ Z: d[1] }];
    } else {
      if ("gclid" === b) return pl((a || "_gcl") + "_aw");
      if ("wbraid" === b) return pl((a || "_gcl") + "_gb");
      if ("braids" === b) return ul({ prefix: a });
    }
    return [];
  }
  var Am = function (a) {
      return zm(a, "gclid", vm)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    Bm = function (a) {
      return zm(a, "wbraid", wm)
        .map(function (b) {
          return b.Z;
        })
        .join(".");
    },
    Cm = function (a) {
      var b;
      b = void 0 === b ? !1 : b;
      return sm.test(G.location.host)
        ? !(vm.test(G.location.href) || tm.test(G.location.href))
        : Ql(a, b);
    },
    Dm = function (a, b) {
      var c;
      c = Nl(((b && b.prefix) || "_gcl") + "_gb", a, b);
      return 0 === c.length ||
        c.every(function (d) {
          return 0 === d;
        })
        ? ""
        : c.join(".");
    };
  var Em = function () {
    if (xa(F.__uspapi)) {
      var a = "";
      try {
        F.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
          }
        });
      } catch (b) {}
      return a;
    }
  };
  function Mm(a) {
    var b = R(a.o, L.g.yb),
      c = R(a.o, L.g.xb);
    b && !c
      ? (a.eventName !== L.g.aa && a.eventName !== L.g.Lc && J(131),
        (a.isAborted = !0))
      : !b && c && (J(132), (a.isAborted = !0));
  }
  function Nm(a) {
    var b = T(L.g.F) ? De.pscdl : "denied";
    a.h[L.g.je] = b;
  }
  var Vm = function (a, b, c, d) {
    var e = Wb(),
      f;
    if (1 === e)
      a: {
        var h = Pe;
        h = h.toLowerCase();
        for (
          var l = "https://" + h,
            m = "http://" + h,
            n = 1,
            p = G.getElementsByTagName("script"),
            q = 0;
          q < p.length && 100 > q;
          q++
        ) {
          var t = p[q].src;
          if (t) {
            t = t.toLowerCase();
            if (0 === t.indexOf(m)) {
              f = 3;
              break a;
            }
            1 === n && 0 === t.indexOf(l) && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (2 === f || d || "http:" != F.location.protocol ? a : b) + c;
  };
  function hn(a) {
    return {
      getDestinationId: function () {
        return a.target.X;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.h[b];
      },
      setHitData: function (b, c) {
        a.h[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        void 0 === a.h[b] && (a.h[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return R(a.o, b);
      },
      xn: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.h);
      },
    };
  }
  var pn = function () {
      var a = F.screen;
      return { width: a ? a.width : 0, height: a ? a.height : 0 };
    },
    qn = function (a) {
      if (G.hidden) return !0;
      var b = a.getBoundingClientRect();
      if (b.top == b.bottom || b.left == b.right || !F.getComputedStyle)
        return !0;
      var c = F.getComputedStyle(a, null);
      if ("hidden" === c.visibility) return !0;
      for (var d = a, e = c; d; ) {
        if ("none" === e.display) return !0;
        var f = e.opacity,
          h = e.filter;
        if (h) {
          var l = h.indexOf("opacity(");
          0 <= l &&
            ((h = h.substring(l + 8, h.indexOf(")", l))),
            "%" == h.charAt(h.length - 1) && (h = h.substring(0, h.length - 1)),
            (f = Math.min(h, f)));
        }
        if (void 0 !== f && 0 >= f) return !0;
        (d = d.parentElement) && (e = F.getComputedStyle(d, null));
      }
      return !1;
    };
  var qo = {
    uk: Number("") || 500,
    dk: Number("") || 5e3,
    Xh: Number("20") || 10,
    lj: Number("") || 5e3,
  };
  function ro(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var so = function (a, b) {
    var c;
    return c;
  };
  var to = "https://" + Ce.Kc,
    uo = to + "/gtm/static/",
    vo = Number("") || 5,
    wo = Number("") || 50,
    xo = to,
    yo = uo,
    zo = !1,
    Ao = 0,
    Bo = Ba();
  function Mo() {
    var a = !1;
    return a;
  }
  function No(a) {
    var b = Math.round(Ka());
  }
  function Oo(a, b, c) {}
  function Jo(a, b, c, d) {}
  function Do(a, b, c, d, e) {}
  function Po(a, b, c, d) {}
  function Qo(a, b, c, d) {}
  function Ro(a) {
    var b = {},
      c = ["tv.1"],
      d = 0;
    var u = c.join("~");
    return { P: b, bf: u };
  }
  var So = void 0;
  function To(a) {
    var b = [];
    return b;
  }
  Gb();
  Fi() || Db("iPod");
  Db("iPad");
  !Db("Android") || Hb() || Gb() || Fb() || Db("Silk");
  Hb();
  !Db("Safari") ||
    Hb() ||
    (Eb() ? 0 : Db("Coast")) ||
    Fb() ||
    (Eb() ? 0 : Db("Edge")) ||
    (Eb() ? Cb("Microsoft Edge") : Db("Edg/")) ||
    (Eb() ? Cb("Opera") : Db("OPR")) ||
    Gb() ||
    Db("Silk") ||
    Db("Android") ||
    Gi();
  var Uo = {},
    Vo = null,
    Wo = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      void 0 === f && (f = 0);
      if (!Vo) {
        Vo = {};
        for (
          var h =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            l = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          5 > m;
          m++
        ) {
          var n = h.concat(l[m].split(""));
          Uo[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            void 0 === Vo[q] && (Vo[q] = p);
          }
        }
      }
      for (
        var t = Uo[f],
          r = Array(Math.floor(b.length / 3)),
          u = t[64] || "",
          v = 0,
          w = 0;
        v < b.length - 2;
        v += 3
      ) {
        var x = b[v],
          y = b[v + 1],
          B = b[v + 2],
          z = t[x >> 2],
          C = t[((x & 3) << 4) | (y >> 4)],
          H = t[((y & 15) << 2) | (B >> 6)],
          E = t[B & 63];
        r[w++] = "" + z + C + H + E;
      }
      var D = 0,
        K = u;
      switch (b.length - v) {
        case 2:
          (D = b[v + 1]), (K = t[(D & 15) << 2] || u);
        case 1:
          var M = b[v];
          r[w] = "" + t[M >> 2] + t[((M & 3) << 4) | (D >> 4)] + K + u;
      }
      return r.join("");
    };
  Object.freeze(new (function () {})());
  Object.freeze(new (function () {})());
  var Xo =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Yo() {
    var a;
    return null != (a = F.google_tag_data) ? a : (F.google_tag_data = {});
  }
  function Zo() {
    var a = F.google_tag_data,
      b;
    if (null != a && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function $o() {
    var a, b;
    return null !=
      (b = null == (a = F.google_tag_data) ? void 0 : a.uach_promise)
      ? b
      : null;
  }
  function ap() {
    var a, b;
    return (
      "function" ===
      typeof (null == (a = F.navigator)
        ? void 0
        : null == (b = a.userAgentData)
        ? void 0
        : b.getHighEntropyValues)
    );
  }
  function bp() {
    if (!ap()) return null;
    var a = Yo();
    if (a.uach_promise) return a.uach_promise;
    var b = F.navigator.userAgentData
      .getHighEntropyValues(Xo)
      .then(function (c) {
        null != a.uach || (a.uach = c);
        return c;
      });
    return (a.uach_promise = b);
  }
  function hp() {
    return "attribution-reporting";
  }
  function ip(a) {
    var b;
    b = void 0 === b ? document : b;
    var c;
    return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a));
  }
  var jp = !1;
  function kp() {
    if (ip("join-ad-interest-group") && xa(Ob.joinAdInterestGroup)) return !0;
    jp ||
      (Oi(
        "AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9"
      ),
      (jp = !0));
    return ip("join-ad-interest-group") && xa(Ob.joinAdInterestGroup);
  }
  function lp(a, b) {
    var c = void 0;
    try {
      c = G.querySelector('iframe[data-tagging-id="' + b + '"]');
    } catch (e) {}
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && Ka() - d < (void 0 == id[1] ? 6e4 : id[1])) {
        fb("TAGGING", 9);
        return;
      }
      try {
        c.parentNode.removeChild(c);
      } catch (e) {}
      c = void 0;
    } else
      try {
        if (
          G.querySelectorAll(
            'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
          ).length >= (void 0 == id[2] ? 50 : id[2])
        ) {
          fb("TAGGING", 10);
          return;
        }
      } catch (e) {}
    Xb(
      a,
      void 0,
      { allow: "join-ad-interest-group" },
      { taggingId: b, loadTime: Ka() },
      c
    );
  }
  function mp() {
    return "https://td.doubleclick.net";
  }
  var fq = {
    D: {
      Mg: "ads_conversion_hit",
      Jc: "container_execute_start",
      Qg: "container_setup_end",
      rf: "container_setup_start",
      Og: "container_blocking_end",
      Pg: "container_execute_end",
      Rg: "container_yield_end",
      tf: "container_yield_start",
      Qh: "event_execute_end",
      Ph: "event_evaluation_end",
      Of: "event_evaluation_start",
      Rh: "event_setup_end",
      rd: "event_setup_start",
      Sh: "ga4_conversion_hit",
      ud: "page_load",
      gn: "pageview",
      Fb: "snippet_load",
      hi: "tag_callback_error",
      ii: "tag_callback_failure",
      ji: "tag_callback_success",
      ki: "tag_execute_end",
      Dc: "tag_execute_start",
    },
  };
  function gq() {
    function a(c, d) {
      var e = gb(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var hq = !1;
  var Pq = function (a, b) {},
    Qq = function (a, b) {},
    Rq = function (a, b) {},
    Sq = function (a, b) {},
    Tq = function () {
      var a = {};
      return a;
    },
    Hq = function (a) {
      a = void 0 === a ? !0 : a;
      var b = {};
      return b;
    },
    Uq = function () {},
    Vq = function (a, b) {},
    Wq = function (a, b, c) {};
  var Xq = function (a, b) {
    var c,
      d = F.GooglebQhCsO;
    d || ((d = {}), (F.GooglebQhCsO = d));
    c = d;
    if (c[a]) return !1;
    c[a] = [];
    c[a][0] = b;
    return !0;
  };
  var Yq = function (a, b, c) {
    var d = Ji(a, "fmt");
    if (b) {
      var e = Ji(a, "random"),
        f = Ji(a, "label") || "";
      if (!e) return !1;
      var h = Wo(
        decodeURIComponent(f.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(e.replace(/\+/g, " "))
      );
      if (!Xq(h, b)) return !1;
    }
    d && 4 != d && (a = Li(a, "rfmt", d));
    var l = Li(a, "fmt", 4);
    Vb(
      l,
      function () {
        F.google_noFurtherRedirects &&
          b &&
          b.call &&
          ((F.google_noFurtherRedirects = null), b());
      },
      void 0,
      c,
      G.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  };
  var or = function () {
      this.h = {};
    },
    pr = function (a, b, c) {
      null != c && (a.h[b] = c);
    },
    qr = function (a) {
      return Object.keys(a.h)
        .map(function (b) {
          return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b]);
        })
        .join("&");
    },
    sr = function (a, b, c, d) {};
  function ur(a, b) {
    if (data.entities && data.entities[a]) return data.entities[a][b];
  }
  var wr = function (a) {
      var b = eg(),
        c;
      c = void 0 === c ? !1 : c;
      vr().addRestriction(0, b, a, c);
    },
    xr = function (a) {
      var b = eg(),
        c;
      c = void 0 === c ? !1 : c;
      vr().addRestriction(1, b, a, c);
    },
    yr = function () {
      var a = eg();
      return vr().getRestrictions(1, a);
    },
    zr = function () {
      this.h = {};
      this.s = {};
    },
    Ar = function (a, b) {
      var c = a.h[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.h[b] = c));
      return c;
    };
  zr.prototype.addRestriction = function (a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!d || !this.s[b]) {
      var e = Ar(this, b);
      0 === a
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : 1 === a &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  zr.prototype.getRestrictions = function (a, b) {
    var c = Ar(this, b);
    if (0 === a) {
      var d, e;
      return [].concat(
        ja(
          (null == c
            ? void 0
            : null == (d = c._entity)
            ? void 0
            : d.internal) || []
        ),
        ja(
          (null == c
            ? void 0
            : null == (e = c._entity)
            ? void 0
            : e.external) || []
        )
      );
    }
    if (1 === a) {
      var f, h;
      return [].concat(
        ja(
          (null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) ||
            []
        ),
        ja(
          (null == c ? void 0 : null == (h = c._event) ? void 0 : h.external) ||
            []
        )
      );
    }
    return [];
  };
  zr.prototype.getExternalRestrictions = function (a, b) {
    var c = Ar(this, b),
      d,
      e;
    return 0 === a
      ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) ||
          []
      : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) ||
          [];
  };
  zr.prototype.removeExternalRestrictions = function (a) {
    var b = Ar(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.s[a] = !0;
  };
  function vr() {
    var a = De.r;
    a || ((a = new zr()), (De.r = a));
    return a;
  }
  var Br = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Cr = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Dr = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Er =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      ),
    Hr = function (a) {
      var b = cf("gtm.allowlist") || cf("gtm.whitelist");
      b && J(9);
      Je && (b = ["google", "gtagfl", "lcl", "zone"]);
      Fr() &&
        (Je
          ? J(116)
          : (J(117),
            Gr &&
              ((b = []),
              window.console &&
                window.console.log &&
                window.console.log("GTM blocked. See go/13687728."))));
      var c = b && Oa(Ha(b), Cr),
        d = cf("gtm.blocklist") || cf("gtm.blacklist");
      d || ((d = cf("tagTypeBlacklist")) && J(3));
      d ? J(8) : (d = []);
      Fr() &&
        ((d = Ha(d)),
        d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
      0 <= Ha(d).indexOf("google") && J(2);
      var e = d && Oa(Ha(d), Dr),
        f = {};
      return function (h) {
        var l = h && h[oc.ma];
        if (!l || "string" != typeof l) return !0;
        l = l.replace(/^_*/, "");
        if (void 0 !== f[l]) return f[l];
        var m = Te[l] || [],
          n = Q(10) ? !0 : a(l, m);
        if (b) {
          var p;
          if ((p = n))
            a: {
              if (0 > c.indexOf(l))
                if (m && 0 < m.length)
                  for (var q = 0; q < m.length; q++) {
                    if (0 > c.indexOf(m[q])) {
                      J(11);
                      p = !1;
                      break a;
                    }
                  }
                else {
                  p = !1;
                  break a;
                }
              p = !0;
            }
          n = p;
        }
        var t = !1;
        if (d) {
          var r = 0 <= e.indexOf(l);
          if (r) t = r;
          else {
            var u = Da(e, m || []);
            u && J(10);
            t = u;
          }
        }
        var v = !n || t;
        v ||
          !(0 <= m.indexOf("sandboxedScripts")) ||
          (c && -1 !== c.indexOf("sandboxedScripts")) ||
          (v = Da(e, Er));
        return (f[l] = v);
      };
    },
    Gr = !1;
  Gr = !0;
  var Fr = function () {
      return Br.test(F.location && F.location.hostname);
    },
    ds = function () {
      Wf &&
        wr(function (a) {
          var b = {};
          b[oc.ma] = "__" + a.entityId;
          for (var c in void 0)
            (void 0).hasOwnProperty(c) && (b["vtp_" + c] = (void 0)[c]);
          var d;
          if (cd(b)) {
            var e = b[oc.ma];
            if (!e) throw "Error: No function name given for function call.";
            var f = Rc[e];
            d = !!f && !!f.runInSiloedMode;
          } else d = !!ur(b[oc.ma], 4);
          return d;
        });
    };
  var ks = function (a, b, c, d) {
      if (!js()) {
        var e = d.siloed ? Zf(a) : a;
        if (!Pf().container[e]) {
          var f = "?id=" + encodeURIComponent(a) + "&l=" + Ce.da,
            h = 0 === a.indexOf("GTM-");
          h || (f += "&cx=c");
          Q(64) && (f += "&gtm=" + Fj());
          var l = Kf();
          l && (f += "&sign=" + Ce.Ne);
          var m = c ? "/gtag/js" : "/gtm.js",
            n = Jf() ? If(b, m + f) : void 0;
          if (!n) {
            var p = Ce.Kc + m;
            l && Pb && h
              ? ((p = Pb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]),
                (n = Vm("https://", "http://", p + f)))
              : (n = We.s ? Xe() + m + f : Vm("https://", "http://", p + f));
          }
          d.siloed && ng({ ctid: e, isDestination: !1 });
          var q = gg();
          Pf().container[e] = { state: 1, context: d, parent: q };
          Tf({ ctid: e, isDestination: !1 });
          Vb(n);
        }
      }
    },
    ls = function (a, b, c) {
      if (!js()) {
        var d = c.siloed ? Zf(a) : a,
          e = Pf().destination[d];
        if (!e || !e.state)
          if (!c.siloed && og())
            (Pf().destination[d] = {
              state: 0,
              transportUrl: b,
              context: c,
              parent: gg(),
            }),
              Tf({ ctid: d, isDestination: !0 }),
              J(91);
          else {
            var f =
              "/gtag/destination?id=" +
              encodeURIComponent(a) +
              "&l=" +
              Ce.da +
              "&cx=c";
            Q(64) && (f += "&gtm=" + Fj());
            Kf() && (f += "&sign=" + Ce.Ne);
            var h = Jf() ? If(b, f) : void 0;
            h || (h = We.s ? Xe() + f : Vm("https://", "http://", Ce.Kc + f));
            c.siloed && ng({ ctid: d, isDestination: !0 });
            Pf().destination[d] = { state: 1, context: c, parent: gg() };
            Tf({ ctid: d, isDestination: !0 });
            Vb(h);
          }
      }
    };
  function js() {
    if (Dj()) {
      return !0;
    }
    return !1;
  }
  var ms = !1,
    ns = 0,
    os = [];
  function ps(a) {
    if (!ms) {
      var b = G.createEventObject,
        c = "complete" == G.readyState,
        d = "interactive" == G.readyState;
      if (!a || "readystatechange" != a.type || c || (!b && d)) {
        ms = !0;
        for (var e = 0; e < os.length; e++) I(os[e]);
      }
      os.push = function () {
        for (var f = 0; f < arguments.length; f++) I(arguments[f]);
        return 0;
      };
    }
  }
  function qs() {
    if (!ms && 140 > ns) {
      ns++;
      try {
        G.documentElement.doScroll("left"), ps();
      } catch (a) {
        F.setTimeout(qs, 50);
      }
    }
  }
  var rs = function (a) {
    ms ? a() : os.push(a);
  };
  var ss = function (a, b) {
    return {
      entityType: 1,
      indexInOriginContainer: a,
      nameInOriginContainer: b,
      originContainerId: dg(),
    };
  };
  var us = function (a, b) {
      this.h = !1;
      this.J = [];
      this.M = { tags: [] };
      this.T = !1;
      this.s = this.C = 0;
      ts(this, a, b);
    },
    vs = function (a, b, c, d) {
      if (Ge.hasOwnProperty(b) || "__zone" === b) return -1;
      var e = {};
      Ya(d) && (e = A(d, e));
      e.id = c;
      e.status = "timeout";
      return a.M.tags.push(e) - 1;
    },
    ws = function (a, b, c, d) {
      var e = a.M.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    xs = function (a) {
      if (!a.h) {
        for (var b = a.J, c = 0; c < b.length; c++) b[c]();
        a.h = !0;
        a.J.length = 0;
      }
    },
    ts = function (a, b, c) {
      void 0 !== b && ys(a, b);
      c &&
        F.setTimeout(function () {
          return xs(a);
        }, Number(c));
    },
    ys = function (a, b) {
      var c = Ma(function () {
        return I(function () {
          b(dg(), a.M);
        });
      });
      a.h ? c() : a.J.push(c);
    },
    zs = function (a) {
      a.C++;
      return Ma(function () {
        a.s++;
        a.T && a.s >= a.C && xs(a);
      });
    },
    As = function (a) {
      a.T = !0;
      a.s >= a.C && xs(a);
    };
  var Bs = {},
    Ds = function () {
      return F[Cs()];
    },
    Es = !1;
  function Cs() {
    return F.GoogleAnalyticsObject || "ga";
  }
  var Hs = function (a) {},
    Is = function (a, b) {
      return function () {
        var c = Ds(),
          d = c && c.getByName && c.getByName(a);
        if (d) {
          var e = d.get("sendHitTask");
          d.set("sendHitTask", function (f) {
            var h = f.get("hitPayload"),
              l = f.get("hitCallback"),
              m = 0 > h.indexOf("&tid=" + b);
            m &&
              (f.set(
                "hitPayload",
                h.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
                !0
              ),
              f.set("hitCallback", void 0, !0));
            e(f);
            m &&
              (f.set("hitPayload", h, !0),
              f.set("hitCallback", l, !0),
              f.set("_x_19", void 0, !0),
              e(f));
          });
        }
      };
    };
  var Ns = ["es", "1"],
    Os = {},
    Ps = {};
  function Qs(a, b) {
    if (yg) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      Os[a] = [
        ["e", c],
        ["eid", a],
      ];
      Jg(a);
    }
  }
  function Rs(a) {
    var b = a.eventId,
      c = a.Za;
    if (!Os[b]) return [];
    var d = [];
    Ps[b] || d.push(Ns);
    d.push.apply(d, ja(Os[b]));
    c && (Ps[b] = !0);
    return d;
  }
  var Ss = {},
    Ts = {},
    Us = {};
  function Vs(a, b, c, d) {
    yg &&
      Q(74) &&
      ((void 0 === d ? 0 : d)
        ? ((Us[b] = Us[b] || 0), ++Us[b])
        : void 0 !== c
        ? ((Ts[a] = Ts[a] || {}), (Ts[a][b] = Math.round(c)))
        : ((Ss[a] = Ss[a] || {}), (Ss[a][b] = (Ss[a][b] || 0) + 1)));
  }
  function Ws(a) {
    var b = a.eventId,
      c = a.Za,
      d = Ss[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Ss[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function Xs(a) {
    var b = a.eventId,
      c = a.Za,
      d = Ts[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete Ts[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function Ys() {
    for (
      var a = [], b = fa(Object.keys(Us)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + Us[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var Zs = {},
    $s = {};
  function at(a, b, c) {
    if (yg && b) {
      var d = Nf(b);
      Zs[a] = Zs[a] || [];
      Zs[a].push(c + d);
      var e = (cd(b) ? "1" : "2") + d;
      $s[a] = $s[a] || [];
      $s[a].push(e);
      Jg(a);
    }
  }
  function bt(a) {
    var b = a.eventId,
      c = a.Za,
      d = [],
      e = Zs[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = $s[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete Zs[b], delete $s[b]);
    return d;
  }
  function ct(a, b, c, d) {
    var e = Pc[a],
      f = dt(a, b, c, d);
    if (!f) return null;
    var h = $c(e[oc.gi], c, []);
    if (h && h.length) {
      var l = h[0];
      f = ct(
        l.index,
        {
          onSuccess: f,
          onFailure: 1 === l.xi ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function dt(a, b, c, d) {
    function e() {
      if (f[oc.ik]) l();
      else {
        var w = ad(f, c, []),
          x = w[oc.ij];
        if (null != x)
          for (var y = 0; y < x.length; y++)
            if (!T(x[y])) {
              l();
              return;
            }
        var B = vs(c.Qb, String(f[oc.ma]), Number(f[oc.yd]), w[oc.jk]),
          z = !1;
        w.vtp_gtmOnSuccess = function () {
          if (!z) {
            z = !0;
            var E = Ka() - H;
            at(c.id, Pc[a], "5");
            ws(c.Qb, B, "success", E);
            Q(65) && Wq(c, f, fq.D.ji);
            h();
          }
        };
        w.vtp_gtmOnFailure = function () {
          if (!z) {
            z = !0;
            var E = Ka() - H;
            at(c.id, Pc[a], "6");
            ws(c.Qb, B, "failure", E);
            Q(65) && Wq(c, f, fq.D.ii);
            l();
          }
        };
        w.vtp_gtmTagId = f.tag_id;
        w.vtp_gtmEventId = c.id;
        c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
        at(c.id, f, "1");
        var C = function () {
          of(3);
          var E = Ka() - H;
          at(c.id, f, "7");
          ws(c.Qb, B, "exception", E);
          Q(65) && Wq(c, f, fq.D.hi);
          z || ((z = !0), l());
        };
        Q(65) && Vq(c, f);
        var H = Ka();
        try {
          Zc(w, { event: c, index: a, type: 1 });
        } catch (E) {
          C(E);
        }
        Q(65) && Wq(c, f, fq.D.ki);
      }
    }
    var f = Pc[a],
      h = b.onSuccess,
      l = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = $c(f[oc.li], c, []);
    if (n && n.length) {
      var p = n[0],
        q = ct(p.index, { onSuccess: h, onFailure: l, terminate: m }, c, d);
      if (!q) return null;
      h = q;
      l = 2 === p.xi ? m : q;
    }
    if (f[oc.ai] || f[oc.lk]) {
      var t = f[oc.ai] ? Qc : c.Bm,
        r = h,
        u = l;
      if (!t[a]) {
        e = Ma(e);
        var v = et(a, t, e);
        h = v.onSuccess;
        l = v.onFailure;
      }
      return function () {
        t[a](r, u);
      };
    }
    return e;
  }
  function et(a, b, c) {
    var d = [],
      e = [];
    b[a] = ft(d, e, c);
    return {
      onSuccess: function () {
        b[a] = gt;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = ht;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function ft(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function gt(a) {
    a();
  }
  function ht(a, b) {
    b();
  }
  var jt = function (a, b) {
      return 1 === arguments.length ? it("config", a) : it("config", a, b);
    },
    kt = function (a, b, c) {
      c = c || {};
      c[L.g.Ob] = a;
      return it("event", b, c);
    };
  function it(a) {
    return arguments;
  }
  var lt = function () {
    this.h = [];
    this.s = [];
  };
  lt.prototype.enqueue = function (a, b, c) {
    var d = this.h.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c,
    };
    this.h.push(e);
    for (var f = 0; f < this.s.length; f++)
      try {
        this.s[f](e);
      } catch (h) {}
  };
  lt.prototype.listen = function (a) {
    this.s.push(a);
  };
  lt.prototype.get = function () {
    for (var a = {}, b = 0; b < this.h.length; b++) {
      var c = this.h[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  lt.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.h.length; d++) {
      var e = this.h[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.h = c;
    return b;
  };
  var nt = function (a, b, c) {
      c.eventMetadata = c.eventMetadata || {};
      c.eventMetadata.source_canonical_id = Xf.canonicalContainerId;
      mt().enqueue(a, b, c);
    },
    pt = function () {
      var a = ot;
      mt().listen(a);
    };
  function mt() {
    var a = De.mb;
    a || ((a = new lt()), (De.mb = a));
    return a;
  }
  var xt = function (a) {
      var b = De.zones;
      return b
        ? b.getIsAllowedFn($f(), a)
        : function () {
            return !0;
          };
    },
    zt = function () {
      xr(function (a) {
        var b = a.originalEventData["gtm.uniqueEventId"],
          c = De.zones;
        return c ? c.isActive($f(), b) : !0;
      });
      Q(88) &&
        wr(function (a) {
          var b = a.entityId,
            c = a.securityGroups;
          return xt(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
        });
    };
  var Ct = function (a, b) {
    for (var c = [], d = 0; d < Pc.length; d++)
      if (a[d]) {
        var e = Pc[d];
        var f = zs(b.Qb);
        try {
          var h = ct(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (h) {
            var l = e[oc.ma];
            if (!l) throw "Error: No function name given for function call.";
            var m = Rc[l];
            c.push({
              Xi: d,
              Ki: (m ? m.priorityOverride || 0 : 0) || ur(e[oc.ma], 1) || 0,
              execute: h,
            });
          } else At(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Bt);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return 0 < c.length;
  };
  function Bt(a, b) {
    var c,
      d = b.Ki,
      e = a.Ki;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c;
    else {
      var h = a.Xi,
        l = b.Xi;
      f = h > l ? 1 : h < l ? -1 : 0;
    }
    return f;
  }
  function At(a, b) {
    if (yg) {
      var c = function (d) {
        var e = b.isBlocked(Pc[d]) ? "3" : "4",
          f = $c(Pc[d][oc.gi], b, []);
        f && f.length && c(f[0].index);
        at(b.id, Pc[d], e);
        var h = $c(Pc[d][oc.li], b, []);
        h && h.length && c(h[0].index);
      };
      c(a);
    }
  }
  var Ft = !1,
    Dt;
  var Kt = function (a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (Q(65)) {
    }
    if ("gtm.js" === d) {
      if (Ft) return !1;
      Ft = !0;
    }
    var e,
      f = !1,
      h = yr(),
      l = A(a);
    if (
      h.every(function (u) {
        return u({ originalEventData: l });
      })
    )
      e = xt(b);
    else {
      if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !== d)
        return !1;
      f = !0;
      e = xt(Number.MAX_SAFE_INTEGER);
    }
    Qs(b, d);
    var m = a.eventCallback,
      n = a.eventTimeout,
      p = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: Gt(e, l, f),
        Bm: [],
        logMacroError: function () {
          J(6);
          of(0);
        },
        cachedModelValues: Ht(),
        Qb: new us(function () {
          if (Q(65)) {
          }
          m && m.apply(m, [].slice.call(arguments, 0));
        }, n),
        originalEventData: l,
      };
    Q(74) && yg && (p.reportMacroDiscrepancy = Vs);
    Q(65) && Rq(p.id, p.name);
    var q = fd(p);
    Q(65) && Sq(p.id, p.name);
    f && (q = It(q));
    if (Q(65)) {
    }
    var t = Ct(q, p),
      r = !1;
    As(p.Qb);
    ("gtm.js" !== d && "gtm.sync" !== d) || Hs(dg());
    return Jt(q, t) || r;
  };
  function Ht() {
    var a = {};
    a.event = gf("event", 1);
    a.ecommerce = gf("ecommerce", 1);
    a.gtm = gf("gtm");
    a.eventModel = gf("eventModel");
    return a;
  }
  function Gt(a, b, c) {
    var d = Hr(a);
    return function (e) {
      if (d(e)) return !0;
      var f = e && e[oc.ma];
      if (!f || "string" != typeof f) return !0;
      f = f.replace(/^_*/, "");
      var h,
        l = eg();
      h = vr().getRestrictions(0, l);
      var m = b;
      c && ((m = A(b)), (m["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (
        var n = Te[f] || [], p = fa(h), q = p.next();
        !q.done;
        q = p.next()
      ) {
        var t = q.value;
        try {
          if (!t({ entityId: f, securityGroups: n, originalEventData: m }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function It(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(Pc[c][oc.ma]);
        if (Fe[d] || void 0 !== Pc[c][oc.mk] || ur(d, 2)) b[c] = !0;
      }
    return b;
  }
  function Jt(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && Pc[c] && !Ge[String(Pc[c][oc.ma])]) return !0;
    return !1;
  }
  var Lt = {},
    Mt = {},
    Nt = function (a, b) {
      for (
        var c = [], d = [], e = {}, f = 0;
        f < a.length;
        e = { Dg: void 0, jg: void 0 }, f++
      ) {
        var h = a[f];
        if (0 <= h.indexOf("-")) {
          if (((e.Dg = Dh(h, b)), e.Dg)) {
            var l = bg();
            Aa(
              l,
              (function (t) {
                return function (r) {
                  return t.Dg.X === r;
                };
              })(e)
            )
              ? c.push(h)
              : d.push(h);
          }
        } else {
          var m = Lt[h] || [];
          e.jg = {};
          m.forEach(
            (function (t) {
              return function (r) {
                return (t.jg[r] = !0);
              };
            })(e)
          );
          for (var n = $f(), p = 0; p < n.length; p++)
            if (e.jg[n[p]]) {
              c = c.concat(bg());
              break;
            }
          var q = Mt[h] || [];
          q.length && (c = c.concat(q));
        }
      }
      return { Ql: c, Tl: d };
    },
    Ot = function (a) {
      k(Lt, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    },
    Pt = function (a) {
      k(Mt, function (b, c) {
        var d = c.indexOf(a);
        0 <= d && c.splice(d, 1);
      });
    };
  var Qt = "HA GF G UA AW DC MC".split(" "),
    Rt = !1,
    St = !1,
    Tt = !1,
    Ut = !1;
  function Vt(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: Ue() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var Wt = void 0,
    Xt = void 0;
  function Yt(a, b, c) {
    var d = A(a);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return void 0 !== b[f];
    }) && J(136);
    var e = A(b);
    A(c, e);
    nt(jt($f()[0], e), a.eventId, d);
  }
  function Zt(a) {
    for (var b = fa([L.g.zc, L.g.Cb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || qi.C[d];
      if (e) return e;
    }
  }
  var $t = [
      L.g.zc,
      L.g.Cb,
      L.g.uc,
      L.g.hb,
      L.g.ob,
      L.g.Ma,
      L.g.ya,
      L.g.Ja,
      L.g.Qa,
      L.g.Kb,
    ],
    au = {
      config: function (a, b) {
        var c = Vt(a, b);
        if (!(2 > a.length) && g(a[1])) {
          var d = {};
          if (2 < a.length) {
            if ((void 0 != a[2] && !Ya(a[2])) || 3 < a.length) return;
            d = a[2];
          }
          var e = Dh(a[1], b.isGtmEvent);
          if (e) {
            var f, h, l;
            a: {
              if (!Vf.sd) {
                var m = fg(gg());
                if (qg(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  l = { Yl: fg(n), Pl: p };
                  break a;
                }
              }
              l = void 0;
            }
            var q = l;
            q && ((f = q.Yl), (h = q.Pl));
            Qs(c.eventId, "gtag.config");
            var t = e.X,
              r = e.id !== t;
            if (r ? -1 === bg().indexOf(t) : -1 === $f().indexOf(t)) {
              if (!b.inheritParentConfig && !d[L.g.yb]) {
                var u = Zt(d);
                if (r)
                  ls(t, u, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (void 0 !== f && -1 !== f.containers.indexOf(t)) {
                  var v = d;
                  Wt ? Yt(b, v, Wt) : Xt || (Xt = A(v));
                } else
                  ks(t, u, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (J(128), h && J(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                Xt
                  ? (Yt(b, Xt, x), (w = !1))
                  : ((!x[L.g.Pb] && Ie && Wt) || (Wt = A(x)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              var y = d;
              if (Q(38) && !Tt && ((Tt = !0), St))
                for (var B = fa($t), z = B.next(); !z.done; z = B.next())
                  if (y.hasOwnProperty(z.value)) {
                    Pg("erc");
                    break;
                  }
              if (Ie && !r && !d[L.g.Pb]) {
                var C = Ut;
                Ut = !0;
                if (C) return;
              }
              Rt || J(43);
              if (!b.noTargetGroup)
                if (r) {
                  Pt(e.id);
                  var H = e.id,
                    E = d[L.g.xe] || "default";
                  E = String(E).split(",");
                  for (var D = 0; D < E.length; D++) {
                    var K = Mt[E[D]] || [];
                    Mt[E[D]] = K;
                    0 > K.indexOf(H) && K.push(H);
                  }
                } else {
                  Ot(e.id);
                  var M = e.id,
                    S = d[L.g.xe] || "default";
                  S = S.toString().split(",");
                  for (var U = 0; U < S.length; U++) {
                    var N = Lt[S[U]] || [];
                    Lt[S[U]] = N;
                    0 > N.indexOf(M) && N.push(M);
                  }
                }
              delete d[L.g.xe];
              var O = b.eventMetadata || {};
              O.hasOwnProperty("is_external_event") ||
                (O.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = O;
              delete d[L.g.ad];
              for (var da = r ? [e.id] : bg(), Z = 0; Z < da.length; Z++) {
                var W = d,
                  va = da[Z],
                  wa = A(b),
                  sa = Dh(va, wa.isGtmEvent);
                sa && qi.push("config", [W], sa, wa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (3 === a.length) {
          J(39);
          var c = Vt(a, b),
            d = a[1],
            e = a[2];
          b.fromContainerExecution || (e[L.g.K] && J(139), e[L.g.oa] && J(140));
          "default" === d
            ? th(e)
            : "update" === d
            ? uh(e, c)
            : "declare" === d && b.fromContainerExecution && sh(e);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(2 > a.length) && g(c)) {
          var d;
          if (2 < a.length) {
            if ((!Ya(a[2]) && void 0 != a[2]) || 3 < a.length) return;
            d = a[2];
          }
          var e = d,
            f = {},
            h = ((f.event = c), f);
          e &&
            ((h.eventModel = A(e)),
            e[L.g.ad] && (h.eventCallback = e[L.g.ad]),
            e[L.g.ue] && (h.eventTimeout = e[L.g.ue]));
          var l = Vt(a, b),
            m = l.eventId,
            n = l.priorityId;
          h["gtm.uniqueEventId"] = m;
          n && (h["gtm.priorityId"] = n);
          if ("optimize.callback" === c)
            return (h.eventModel = h.eventModel || {}), h;
          var p;
          var q = d,
            t = q && q[L.g.Ob];
          void 0 === t &&
            ((t = cf(L.g.Ob, 2)), void 0 === t && (t = "default"));
          if (g(t) || za(t)) {
            var r;
            b.isGtmEvent
              ? (r = g(t) ? [t] : t)
              : (r = t.toString().replace(/\s+/g, "").split(","));
            var u = Nt(r, b.isGtmEvent),
              v = u.Ql,
              w = u.Tl;
            if (w.length)
              for (var x = Zt(q), y = 0; y < w.length; y++) {
                var B = Dh(w[y], b.isGtmEvent);
                B &&
                  ls(B.X, x, {
                    source: 3,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            p = Fh(v, b.isGtmEvent);
          } else p = void 0;
          var z = p;
          if (z) {
            z.length && (St = !0);
            Qs(m, c);
            for (var C = [], H = 0; H < z.length; H++) {
              var E = z[H],
                D = A(b);
              if (-1 !== Qt.indexOf(jg(E.prefix))) {
                var K = A(d),
                  M = D.eventMetadata || {};
                M.hasOwnProperty("is_external_event") ||
                  (M.is_external_event = !D.fromContainerExecution);
                D.eventMetadata = M;
                delete K[L.g.ad];
                ri(c, K, E.id, D);
              }
              C.push(E.id);
            }
            h.eventModel = h.eventModel || {};
            0 < z.length
              ? (h.eventModel[L.g.Ob] = C.join())
              : delete h.eventModel[L.g.Ob];
            Rt || J(43);
            void 0 === b.noGtmEvent &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            h.eventModel[L.g.xb] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : h;
          }
        }
      },
      get: function (a, b) {
        J(53);
        if (4 === a.length && g(a[1]) && g(a[2]) && xa(a[3])) {
          var c = Dh(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            Rt || J(43);
            var f = Zt();
            if (
              !Aa(bg(), function (l) {
                return c.X === l;
              })
            )
              ls(c.X, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (-1 !== Qt.indexOf(jg(c.prefix))) {
              Vt(a, b);
              var h = {};
              nh(A(((h[L.g.lb] = d), (h[L.g.wb] = e), h)));
              si(
                d,
                function (l) {
                  I(function () {
                    return e(l);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (2 == a.length && a[1].getTime) {
          Rt = !0;
          var c = Vt(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function () {},
      set: function (a, b) {
        var c;
        2 == a.length && Ya(a[1])
          ? (c = A(a[1]))
          : 3 == a.length &&
            g(a[1]) &&
            ((c = {}),
            Ya(a[2]) || za(a[2]) ? (c[a[1]] = A(a[2])) : (c[a[1]] = a[2]));
        if (c) {
          var d = Vt(a, b),
            e = d.eventId,
            f = d.priorityId;
          A(c);
          var h = A(c);
          qi.push("set", [h], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          Q(6) && delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    bu = { policy: !0 };
  var cu = function (a) {
      var b = F[Ce.da].hide;
      if (b && void 0 !== b[a] && b.end) {
        b[a] = !1;
        var c = !0,
          d;
        for (d in b)
          if (b.hasOwnProperty(d) && !0 === b[d]) {
            c = !1;
            break;
          }
        c && (b.end(), (b.end = null));
      }
    },
    du = function (a) {
      var b = F[Ce.da],
        c = b && b.hide;
      c && c.end && (c[a] = !0);
    };
  var eu = !1,
    fu = [];
  function gu() {
    if (!eu) {
      eu = !0;
      for (var a = 0; a < fu.length; a++) I(fu[a]);
    }
  }
  var hu = function (a) {
    eu ? I(a) : fu.push(a);
  };
  var yu = function (a) {
    if (xu(a)) return a;
    this.h = a;
  };
  yu.prototype.getUntrustedMessageValue = function () {
    return this.h;
  };
  var xu = function (a) {
    return !a || "object" !== Va(a) || Ya(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  yu.prototype.getUntrustedMessageValue = yu.prototype.getUntrustedMessageValue;
  var zu = 0,
    Au = {},
    Bu = [],
    Cu = [],
    Du = !1,
    Eu = !1;
  function Fu(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  var Gu = function (a) {
      return F[Ce.da].push(a);
    },
    Hu = function (a, b) {
      if (!ya(b) || 0 > b) b = 0;
      var c = De[Ce.da],
        d = 0,
        e = !1,
        f = void 0;
      f = F.setTimeout(function () {
        e || ((e = !0), a());
        f = void 0;
      }, b);
      return function () {
        var h = c ? c.subscribers : 1;
        ++d === h &&
          (f && (F.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
      };
    };
  function Iu(a, b) {
    var c = a._clear || b.overwriteModelFields;
    k(a, function (e, f) {
      "_clear" !== e && (c && ff(e), ff(e, f));
    });
    Qe || (Qe = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    "number" !== typeof d &&
      ((d = Ue()), (a["gtm.uniqueEventId"] = d), ff("gtm.uniqueEventId", d));
    return Kt(a);
  }
  function Ju(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ea(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b || "get" === b)
        return !0;
    }
    return !1;
  }
  function Ku() {
    var a;
    if (Cu.length) a = Cu.shift();
    else if (Bu.length) a = Bu.shift();
    else return;
    var b;
    var c = a;
    if (Du || !Ju(c.message)) b = c;
    else {
      Du = !0;
      var d = c.message["gtm.uniqueEventId"];
      "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Ue());
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        h = {},
        l = {
          message:
            ((h.event = "gtm.init"), (h["gtm.uniqueEventId"] = d - 1), h),
          messageContext: { eventId: d - 1 },
        };
      Bu.unshift(l, c);
      if (yg) {
        var m = Xf.ctid;
        if (m) {
          var n,
            p = fg(gg());
          n = p && p.context;
          var q,
            t = Ef(F.location.href);
          q = t.hostname + t.pathname;
          var r = n && n.fromContainerExecution,
            u = n && n.source,
            v = Xf.canonicalContainerId,
            w = Vf.sd;
          yg &&
            (Gh || (Gh = q),
            Hh.push(
              m +
                ";" +
                v +
                ";" +
                (r ? 1 : 0) +
                ";" +
                (u || 0) +
                ";" +
                (w ? 1 : 0)
            ));
        }
      }
      b = f;
    }
    return b;
  }
  function Lu() {
    for (var a = !1, b; !Eu && (b = Ku()); ) {
      Eu = !0;
      delete $e.eventModel;
      bf();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (null == d) Eu = !1;
      else {
        if (e.fromContainerExecution)
          for (
            var f = [
                "gtm.allowlist",
                "gtm.blocklist",
                "gtm.whitelist",
                "gtm.blacklist",
                "tagTypeBlacklist",
              ],
              h = 0;
            h < f.length;
            h++
          ) {
            var l = f[h],
              m = cf(l, 1);
            if (za(m) || Ya(m)) m = A(m);
            af[l] = m;
          }
        try {
          if (xa(d))
            try {
              d.call(df);
            } catch (C) {}
          else if (za(d)) {
            var n = d;
            if (g(n[0])) {
              var p = n[0].split("."),
                q = p.pop(),
                t = n.slice(1),
                r = cf(p.join("."), 2);
              if (null != r)
                try {
                  r[q].apply(r, t);
                } catch (C) {}
            }
          } else {
            var u = void 0,
              v = !1;
            if (Ea(d)) {
              a: {
                if (d.length && g(d[0])) {
                  var w = au[d[0]];
                  if (w && (!e.fromContainerExecution || !bu[d[0]])) {
                    u = w(d, e);
                    break a;
                  }
                }
                u = void 0;
              }
              (v = u && "set" === d[0] && !!u.event) && J(101);
            } else u = d;
            if (u) {
              var x = Iu(u, e);
              a = x || a;
              v && x && J(113);
            }
          }
        } finally {
          e.fromContainerExecution && bf(!0);
          var y = d["gtm.uniqueEventId"];
          if ("number" === typeof y) {
            for (var B = Au[String(y)] || [], z = 0; z < B.length; z++)
              Cu.push(Mu(B[z]));
            B.length && Cu.sort(Fu);
            delete Au[String(y)];
            y > zu && (zu = y);
          }
          Eu = !1;
        }
      }
    }
    return !a;
  }
  function Nu() {
    if (Q(65)) {
      var a = Ou();
    }
    var b = Lu();
    if (Q(65)) {
    }
    try {
      cu(dg());
    } catch (c) {}
    return b;
  }
  function ot(a) {
    if (zu < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      Au[b] = Au[b] || [];
      Au[b].push(a);
    } else
      Cu.push(Mu(a)),
        Cu.sort(Fu),
        I(function () {
          Eu || Lu();
        });
  }
  function Mu(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  var Pu = function () {
      function a(f) {
        var h = {};
        if (xu(f)) {
          var l = f;
          f = xu(l) ? l.getUntrustedMessageValue() : void 0;
          h.fromContainerExecution = !0;
        }
        return { message: f, messageContext: h };
      }
      var b = Qb(Ce.da, []),
        c = (De[Ce.da] = De[Ce.da] || {});
      !0 === c.pruned && J(83);
      Au = mt().get();
      pt();
      rs(function () {
        if (!c.gtmDom) {
          c.gtmDom = !0;
          var f = {};
          b.push(((f.event = "gtm.dom"), f));
        }
      });
      hu(function () {
        if (!c.gtmLoad) {
          c.gtmLoad = !0;
          var f = {};
          b.push(((f.event = "gtm.load"), f));
        }
      });
      c.subscribers = (c.subscribers || 0) + 1;
      var d = b.push;
      b.push = function () {
        var f;
        if (0 < De.SANDBOXED_JS_SEMAPHORE) {
          f = [];
          for (var h = 0; h < arguments.length; h++)
            f[h] = new yu(arguments[h]);
        } else f = [].slice.call(arguments, 0);
        var l = f.map(function (q) {
          return a(q);
        });
        Bu.push.apply(Bu, l);
        var m = d.apply(b, f),
          n = Math.max(100, Number("1000") || 300);
        if (this.length > n)
          for (J(4), c.pruned = !0; this.length > n; ) this.shift();
        var p = "boolean" !== typeof m || m;
        return Lu() && p;
      };
      var e = b.slice(0).map(function (f) {
        return a(f);
      });
      Bu.push.apply(Bu, e);
      if (Ou()) {
        if (Q(65)) {
        }
        I(Nu);
      }
    },
    Ou = function () {
      var a = !0;
      return a;
    };
  function Qu(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a),
      c = Ka();
    return b < c + 3e5 && b > c - 9e5;
  }
  function Ru(a) {
    return a && 0 === a.indexOf("pending:") ? Qu(a.substr(8)) : !1;
  }
  var lv = function () {};
  var mv = function () {};
  mv.prototype.toString = function () {
    return "undefined";
  };
  var nv = new mv();
  var Sv = F.clearTimeout,
    Tv = F.setTimeout,
    Uv = function (a, b, c, d) {
      if (Dj()) {
        b && I(b);
      } else return Vb(a, b, c, d);
    },
    Vv = function () {
      return new Date();
    },
    Wv = function () {
      return F.location.href;
    },
    Xv = function (a) {
      return Af(Ef(a), "fragment");
    },
    Yv = function (a) {
      return Bf(Ef(a));
    },
    Zv = function (a, b) {
      return cf(a, b || 2);
    },
    $v = function (a, b, c) {
      var d;
      b
        ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = Gu(a)))
        : (d = Gu(a));
      return d;
    },
    aw = function (a, b) {
      F[a] = b;
    },
    V = function (a, b, c) {
      b && (void 0 === F[a] || (c && !F[a])) && (F[a] = b);
      return F[a];
    },
    bw = function (a, b, c) {
      return Jj(a, b, void 0 === c ? !0 : !!c);
    },
    cw = function (a, b, c) {
      return 0 === Sj(a, b, c);
    },
    dw = function (a, b) {
      if (Dj()) {
        b && I(b);
      } else Xb(a, b);
    },
    ew = function (a) {
      return !!yv(a, "init", !1);
    },
    fw = function (a) {
      wv(a, "init", !0);
    };
  function Cw(a, b) {
    function c(h) {
      var l = Ef(h),
        m = Af(l, "protocol"),
        n = Af(l, "host", !0),
        p = Af(l, "port"),
        q = Af(l, "path").toLowerCase().replace(/\/$/, "");
      if (
        void 0 === m ||
        ("http" === m && "80" === p) ||
        ("https" === m && "443" === p)
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function Dw(a) {
    return Ew(a) ? 1 : 0;
  }
  function Ew(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = A(a, {});
        A({ arg1: c[d], any_of: void 0 }, e);
        if (Dw(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var h = 0; h < xd.length; h++) {
                var l = xd[h];
                if (b[l]) {
                  f = b[l](c);
                  break a;
                }
              }
            } catch (v) {}
          f = !1;
        }
        return f;
      case "_ew":
        var m, n;
        m = String(b);
        n = String(c);
        var p = m.length - n.length;
        return 0 <= p && m.indexOf(n, p) === p;
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        var q;
        var t = a.ignore_case ? "i" : void 0;
        try {
          var r = String(c) + t,
            u = yd.get(r);
          u || ((u = new RegExp(c, t)), yd.set(r, u));
          q = u.test(b);
        } catch (v) {
          q = !1;
        }
        return q;
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Cw(b, c);
    }
    return !1;
  }
  function Fw() {
    var a = [
      ["cv", "2"],
      ["rv", Ce.Sf],
      [
        "tc",
        Pc.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Ce.wd && a.push(["x", Ce.wd]);
    We.h && a.push(["tag_exp", We.h]);
    return a;
  }
  function Gw() {
    var a = qf();
    return a.length ? [["exp_geo", a]] : [];
  }
  var Hw;
  function Iw() {
    try {
      null != Hw || (Hw = new Intl.DateTimeFormat().resolvedOptions().timeZone);
    } catch (b) {}
    var a;
    return (null == (a = Hw) ? 0 : a.length) ? [["exp_tz", Hw]] : [];
  }
  function Jw(a) {
    if (a.scriptSource) {
      var b;
      try {
        b = kc().getEntriesByType("resource");
      } catch (h) {}
      if (b) {
        for (var c = {}, d = 0; d < b.length; ++d) {
          var e = b[d],
            f = e.initiatorType;
          if ("script" === f && e.name === a.scriptSource)
            return { sm: d, vm: c };
          c[f] = 1 + (c[f] || 0);
        }
        J(146);
      } else J(145);
    }
  }
  function Kw() {
    if (yg && Q(77)) {
      var a = hg();
      if (!a) J(144);
      else if (a.canonicalContainerId) {
        var b = Jw(a);
        if (b) {
          var c = !1;
          tg(function (d) {
            if (c) return [];
            d.Za && (c = !0);
            d.ff();
            return [
              ["rtg", a.canonicalContainerId],
              ["rlo", b.sm],
              ["slo", b.vm.script || 0],
            ];
          });
        }
      }
    }
  }
  var qx = function () {
    var a = !0;
    (mj(7) && mj(9) && mj(10)) || (a = !1);
    return a;
  };
  tf();
  function ry() {
    return (F.gaGlobal = F.gaGlobal || {});
  }
  var sy = function () {
      var a = ry();
      a.hid = a.hid || Ba();
      return a.hid;
    },
    ty = function (a, b) {
      var c = ry();
      if (void 0 == c.vid || (b && !c.from_cookie))
        (c.vid = a), (c.from_cookie = b);
    };
  var az = function (a) {
      this.s = a;
      this.C = "";
      this.h = this.s;
    },
    bz = function (a, b) {
      a.h = b;
      return a;
    },
    cz = function (a, b) {
      a.J = b;
      return a;
    };
  function dz(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  function ez(a, b, c) {
    if (a) {
      var d = a || [];
      if (Array.isArray(d))
        for (
          var e = Ya(b) ? b : {}, f = fa(d), h = f.next();
          !h.done;
          h = f.next()
        )
          c(h.value, e);
    }
  }
  var uz = window,
    vz = document,
    wz = function (a) {
      var b = uz._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        vz.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && !0 === uz["ga-disable-" + a])
      )
        return !0;
      try {
        var c = uz.external;
        if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0;
      } catch (f) {}
      for (
        var d = Gj("AMP_TOKEN", String(vz.cookie), !0), e = 0;
        e < d.length;
        e++
      )
        if ("$OPT_OUT" == d[e]) return !0;
      return vz.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function Fz(a) {
    k(a, function (c) {
      "_" === c.charAt(0) && delete a[c];
    });
    var b = a[L.g.Xa] || {};
    k(b, function (c) {
      "_" === c.charAt(0) && delete b[c];
    });
  }
  var Nz = function (a, b) {};
  function Mz(a, b) {
    var c = function () {};
    return c;
  }
  function Oz(a, b, c) {}
  var Pz = Mz;
  Object.freeze({ dl: 1, id: 1 });
  Object.freeze(["config", "event", "get", "set"]);
  var Rz = encodeURI,
    X = encodeURIComponent,
    Sz = function (a, b, c) {
      Yb(a, b, c);
    },
    Tz = function (a, b) {
      if (!a) return !1;
      var c = Af(Ef(a), "host");
      if (!c) return !1;
      for (var d = 0; b && d < b.length; d++) {
        var e = b[d] && b[d].toLowerCase();
        if (e) {
          var f = c.length - e.length;
          0 < f && "." != e.charAt(0) && (f--, (e = "." + e));
          if (0 <= f && c.indexOf(e, f) == f) return !0;
        }
      }
      return !1;
    },
    Uz = function (a, b, c) {
      for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
        a[f] &&
          a[f].hasOwnProperty(b) &&
          a[f].hasOwnProperty(c) &&
          ((d[a[f][b]] = a[f][c]), (e = !0));
      return e ? d : null;
    };
  var Y = { securityGroups: {} };
  (Y.securityGroups.e = ["google"]),
    (function () {
      (function (a) {
        Y.__e = a;
        Y.__e.m = "e";
        Y.__e.isVendorTemplate = !0;
        Y.__e.priorityOverride = 0;
        Y.__e.isInfrastructure = !0;
        Y.__e.runInSiloedMode = !0;
      })(function (a) {
        return String(a.vtp_gtmCachedValues.event);
      });
    })();
  (Y.securityGroups.f = ["google"]),
    (function () {
      (function (a) {
        Y.__f = a;
        Y.__f.m = "f";
        Y.__f.isVendorTemplate = !0;
        Y.__f.priorityOverride = 0;
        Y.__f.isInfrastructure = !0;
        Y.__f.runInSiloedMode = !1;
      })(function (a) {
        var b = Zv("gtm.referrer", 1) || G.referrer;
        return b
          ? a.vtp_component && "URL" != a.vtp_component
            ? Af(
                Ef(String(b)),
                a.vtp_component,
                a.vtp_stripWww,
                a.vtp_defaultPages,
                a.vtp_queryKey
              )
            : Yv(String(b))
          : String(b);
      });
    })();
  (Y.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Y.__u = b;
        Y.__u.m = "u";
        Y.__u.isVendorTemplate = !0;
        Y.__u.priorityOverride = 0;
        Y.__u.isInfrastructure = !0;
        Y.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : Zv("gtm.url", 1)) || Wv();
        var d = b[a("vtp_component")];
        if (!d || "URL" == d) return Yv(String(c));
        var e = Ef(String(c)),
          f;
        if ("QUERY" === d)
          a: {
            var h = b[a("vtp_multiQueryKeys").toString()],
              l = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            h
              ? za(l)
                ? (n = l)
                : (n = String(l).replace(/\s+/g, "").split(","))
              : (n = [String(l)]);
            for (var p = 0; p < n.length; p++) {
              var q = Af(e, "QUERY", void 0, void 0, n[p]);
              if (void 0 != q && (!m || "" !== q)) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Af(
            e,
            d,
            "HOST" == d ? b[a("vtp_stripWww")] : void 0,
            "PATH" == d ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  var qB = {};
  qB.dataLayer = df;
  qB.callback = function (a) {
    Se.hasOwnProperty(a) && xa(Se[a]) && Se[a]();
    delete Se[a];
  };
  qB.bootstrap = 0;
  qB._spx = !1;
  function rB() {
    De[dg()] = De[dg()] || qB;
    mg();
    og() ||
      k(pg(), function (d, e) {
        ls(d, e.transportUrl, e.context);
        J(92);
      });
    Na(Te, Y.securityGroups);
    var a = fg(gg()),
      b,
      c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
    (2 !== c && 4 !== c && 3 !== c) || J(142);
    Wc = gd;
  }
  (function (a) {
    function b() {
      m = G.documentElement.getAttribute("data-tag-assistant-present");
      Qu(m) && (l = h.Zj);
    }
    if (!F["__TAGGY_INSTALLED"]) {
      var c = !1;
      if (G.referrer) {
        var d = Ef(G.referrer);
        c = "cct.google" === zf(d, "host");
      }
      if (!c) {
        var e = Jj("googTaggyReferrer");
        c = e.length && e[0].length;
      }
      c &&
        ((F["__TAGGY_INSTALLED"] = !0),
        Vb("https://cct.google/taggy/agent.js"));
    }
    if (Ne) a();
    else {
      var f = function (u) {
          var v = "GTM",
            w = "GTM";
          Je ? ((v = "OGT"), (w = "GTAG")) : Ne && (w = v = "OPT");
          var x = F["google.tagmanager.debugui2.queue"];
          x ||
            ((x = []),
            (F["google.tagmanager.debugui2.queue"] = x),
            Vb(
              "https://" +
                Ce.Kc +
                "/debug/bootstrap?id=" +
                Xf.ctid +
                "&src=" +
                w +
                "&cond=" +
                u +
                "&gtm=" +
                Fj()
            ));
          var y = {
            messageType: "CONTAINER_STARTING",
            data: {
              scriptSource: Pb,
              containerProduct: v,
              debug: !1,
              id: Xf.ctid,
              targetRef: { ctid: Xf.ctid, isDestination: Vf.sd },
              aliases: Yf(),
              destinations: ag(),
            },
          };
          y.data.resume = function () {
            a();
          };
          Ce.jj && (y.data.initialPublish = !0);
          x.push(y);
        },
        h = { Vm: 1, bk: 2, pk: 3, kj: 4, Zj: 5 },
        l = void 0,
        m = void 0,
        n = Af(F.location, "query", !1, void 0, "gtm_debug");
      Qu(n) && (l = h.bk);
      if (!l && G.referrer) {
        var p = Ef(G.referrer);
        "tagassistant.google.com" === zf(p, "host") && (l = h.pk);
      }
      if (!l) {
        var q = Jj("__TAG_ASSISTANT");
        q.length && q[0].length && (l = h.kj);
      }
      l || b();
      if (!l && Ru(m)) {
        var t = function () {
            if (r) return !0;
            r = !0;
            b();
            l && Pb ? f(l) : a();
          },
          r = !1;
        Zb(
          G,
          "TADebugSignal",
          function () {
            t();
          },
          !1
        );
        F.setTimeout(function () {
          t();
        }, 200);
      } else l && Pb ? f(l) : a();
    }
  })(function () {
    try {
      kg();
      if (Q(65)) {
      }
      Ug().s();
      kj();
      (Q(30) || Q(31) || Q(32)) && Ah();
      var a = eg();
      if (Pf().canonical[a]) {
        var b = De.zones;
        b && b.unregisterChild($f());
        vr().removeExternalRestrictions(eg());
      } else {
        We.h = "";
        We.s = We.J;
        We.C = "";
        We.sa = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        We.M = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        We.T = "ad_storage|analytics_storage|ad_user_data";
        ds();
        for (
          var c = data.resource || {}, d = c.macros || [], e = 0;
          e < d.length;
          e++
        )
          Mc.push(d[e]);
        for (var f = c.tags || [], h = 0; h < f.length; h++) Pc.push(f[h]);
        for (var l = c.predicates || [], m = 0; m < l.length; m++)
          Oc.push(l[m]);
        for (var n = c.rules || [], p = 0; p < n.length; p++) {
          for (var q = n[p], t = {}, r = 0; r < q.length; r++) {
            var u = q[r][0];
            t[u] = Array.prototype.slice.call(q[r], 1);
            ("if" !== u && "unless" !== u) || Vc(t[u]);
          }
          Nc.push(t);
        }
        Rc = Y;
        Sc = Dw;
        rB();
        if (!Ne)
          for (
            var v = !1 !== pf["6"] ? (Q(47) ? Ye(We.T) : Ye(We.M)) : Ye(We.sa),
              w = 0;
            w < ph.length;
            w++
          ) {
            var x = ph[w],
              y = x,
              B = v[x] ? "granted" : "denied";
            $g().implicit(y, B);
          }
        Pu();
        ms = !1;
        ns = 0;
        if (
          ("interactive" == G.readyState && !G.createEventObject) ||
          "complete" == G.readyState
        )
          ps();
        else {
          Zb(G, "DOMContentLoaded", ps);
          Zb(G, "readystatechange", ps);
          if (G.createEventObject && G.documentElement.doScroll) {
            var z = !0;
            try {
              z = !F.frameElement;
            } catch (K) {}
            z && qs();
          }
          Zb(F, "load", ps);
        }
        eu = !1;
        "complete" === G.readyState ? gu() : Zb(F, "load", gu);
        yg && (tg(Mg), F.setInterval(Lg, 864e5));
        tg(Fw);
        tg(Rs);
        tg(gq);
        tg(pi);
        tg(bt);
        tg(Ph);
        tg(To);
        tg(Nh);
        Q(74) && (tg(Ws), tg(Xs), tg(Ys));
        yg && Q(62) && (tg(Gw), tg(Iw));
        Kw();
        Q(75) && tg(Qg);
        lv();
        of(1);
        zt();
        Re = Ka();
        qB.bootstrap = Re;
        if (Q(65)) {
        }
      }
    } catch (K) {
      if ((of(4), yg)) {
        var D = Gg(!0, !0);
        Yb(D);
      }
    }
  });
})();
