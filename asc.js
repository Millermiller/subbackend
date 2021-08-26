function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e)
      for (var r in e) n.d(i, r, function (t) {
        return e[t]
      }.bind(null, r));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 420)
}([function (e, t, n) {
  "use strict";
  n(24), n(26), n(13), n(23), n(47), Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0, n(82), n(34), n(98), n(66), n(99), n(3), n(126), n(127), n(12), n(143), n(14), n(79), n(22), n(100), n(144), n(119), n(18), n(52), n(17);
  var i = a(n(150)),
    r = a(n(151)),
    o = a(n(152)),
    s = (n(83), n(80));

  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function c(e) {
    return function (e) {
      if (Array.isArray(e)) return u(e)
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return u(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function u(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i
  }

  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var d = 0,
    f = /image/i,
    p = {
      ar: !0,
      fa: !0,
      he: !0,
      ur: !0,
      yi: !0
    },
    h = navigator.userAgent.toLowerCase(),
    g = [
      [223, 223],
      [880, 1791],
      [2304, 3711],
      [4256, 4351],
      [12352, 12543],
      [19968, 40879],
      [44032, 55215]
    ],
    m = [/(\n+)/, /([.!?;\u0964](?:\s+|$))/, /([\-\u2012-\u2015](?:\s+|$))/, /([,:](?:\s+|$))/, /([\u3002\uff01\uff1f\uff1b\u2026])/, /([\uff0c\uff1a])/, /(\s+)/],
    _ = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    v = g.length,
    E = {
      tm: 0,
      val: null
    },
    T = Boolean(document.documentElement.classList) && Boolean(document.createElementNS("http://www.w3.org/2000/svg", "svg").classList),
    y = !1;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: function () {
        y = !0
      }
    }))
  } catch (e) {}
  var S, b, O = document.createElement("link"),
    C = {
      yandexuid: "yu",
      _ym_uid: "yum",
      spravka: "sprvk"
    },
    P = {
      mob: /mobi|tablet/.test(h),
      iOS: function (e) {
        if (/ip(hone|ad|od)/.test(e)) {
          var t = e.match(/os ([0-9_]+)/);
          return t ? parseFloat(t[1].replace(/_/g, ".")) : 1
        }
        return 0
      }(h),
      android: (S = h, b = S.match(/android ([0-9.]*)/), b ? parseFloat(b[1] || 1) : 0),
      IE: /msie|trident/.test(h),
      chromeVersion: function (e) {
        var t = e.match(/chrom(e|ium)\/([0-9]+)\./);
        return !!t && parseInt(t[2], 10)
      }(h),
      firefoxVersion: function (e) {
        var t = e.match(/firefox\/([0-9]+)\./);
        return t ? parseInt(t[1]) : 0
      }(h),
      ieVersion: function (e) {
        return e.indexOf("msie ") > 0 ? 10 : e.indexOf("trident/") > 0 ? 11 : e.indexOf("edge/") > 0 ? 12 : 0
      }(h),
      safariVersion: function (e) {
        if (!e.match(/chrom(e|ium)\/([0-9]+)\./) && e.indexOf("safari/") > 0) {
          var t = e.match(/version\/([0-9]+)/);
          return t ? parseInt(t[1] || 1) : 0
        }
        return 0
      }(h),
      yaBro: -1 !== h.indexOf("yabrowser"),
      isLinux: -1 !== h.indexOf("linux") && -1 === h.indexOf("android"),
      assertTrue: function (e, t) {
        if (!e) throw new Error(t)
      },
      assertNotEmptyString: function (e, t) {
        this.assertTrue(e && this.isString(e), t)
      },
      noop: function () {},
      trim: function (e) {
        return this.isString(e) ? e.trim() : e
      },
      bind: function (e, t, n, i) {
        var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        e.addEventListener(t, n, I(t, i, r))
      },
      unbind: function (e, t, n, i) {
        var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        e.removeEventListener(t, n, I(t, i, r))
      },
      isUrl: function (e) {
        return e.includes(".") && !e.includes(" ") && !/\s/.test(e) && r.default.test(e) && RegExp.$4.length > 1
      },
      getHostname: function (e) {
        return this.isUrl(e) ? e.match(r.default)[2] : ""
      },
      isEmail: function (e) {
        return o.default.test(e)
      },
      isImageFile: function (e) {
        return e && f.test(e.type)
      },
      clone: function (e) {
        return this.isArray(e) ? e.slice() : this.isObject(e) ? this.extend({}, e) : e
      },
      toObject: function (e) {
        var t = {};
        for (var n in e) t[n] = e[n];
        return t
      },
      slice: function (e, t, n) {
        return Array.prototype.slice.call(e, t, n)
      },
      findIndex: function (e, t, n) {
        return this.isArray(e) && this.isFunction(e.findIndex) ? e.findIndex(t, n) : this.findIndexInternal(e, t, n)
      },
      findIndexInternal: function (e, t, n) {
        if (!this.isArray(e)) throw new Error("Object should be an array");
        if (!this.isFunction(t)) throw new Error("Predicate should be a function");
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          if (t.call(n, r, i, e)) return i
        }
        return -1
      },
      extend: Object.assign || function () {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = this.slice(arguments, 1), n = function (n) {
          var i = t[n];
          i && Object.keys(i).forEach((function (t) {
            e[t] = i[t]
          }))
        }, i = 0; i < t.length; i++) n(i);
        return e
      },
      capitalizeWord: function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
      },
      isAlpha: function (e) {
        if (e.toLowerCase() !== e.toUpperCase()) return !0;
        for (var t = 0, n = e.charCodeAt(0); t < v; t++)
          if (n >= g[t][0] && n <= g[t][1]) return !0;
        return !1
      },
      isDigit: function (e) {
        var t = e.charCodeAt(0);
        return t >= 48 && t <= 57
      },
      isEqual: Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      },
      isEmpty: function (e) {
        return !e || (this.isArray(e) ? 0 === e.length : !!this.isObject(e) && 0 === Object.keys(e).length)
      },
      forEach: function (e, t, n) {
        for (var i = 0; i < e.length && !1 !== t.call(n, e[i], i, e); i++);
      },
      hasAlpha: function (e) {
        if (!e) return !1;
        for (var t = 0; t < e.length; t++)
          if (this.isAlpha(e.charAt(t))) return !0;
        return !1
      },
      hasDigit: function (e) {
        if (!e) return !1;
        for (var t = 0; t < e.length; t++)
          if (this.isDigit(e.charAt(t))) return !0;
        return !1
      },
      getEmoji: function (e) {
        for (var t = i.default.exec(e), n = []; t;) n.push({
          value: t[0],
          index: t.index
        }), t = i.default.exec(e);
        return n
      },
      getEmojiCodes: function (e) {
        for (var t, n = 0, i = e.length, r = []; n < i;) {
          var o = e.charCodeAt(n++);
          o >= 55296 && o <= 56319 ? t = o : (t && (o = o - 56320 + (t - 55296 << 10) + 65536, t = 0), r.push(o.toString(16)))
        }
        return r
      },
      getValueTokens: function (e, t) {
        return this.trim(e).split(/\s+/, t)
      },
      hasAlphaOrDigit: function (e) {
        return this.hasAlpha(e) || this.hasDigit(e)
      },
      getStyle: function (e, t) {
        var n = window.getComputedStyle(e, null) || e.style;
        return t ? n[t] : n
      },
      setStyles: function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e.style[n] = t[n])
      },
      throttle: function (e, t) {
        var n = !0,
          i = this.isNumber(t) ? t : 50;
        return function () {
          n && (e.apply(this, arguments), n = !1, setTimeout((function () {
            n = !0
          }), i))
        }
      },
      throttleWithCallGuarantee: function (e) {
        var t, n, i = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
        return function () {
          for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
          var c = i.now();
          clearTimeout(n), !t || c - t >= r ? (t = c, e.apply(void 0, s)) : n = setTimeout((function () {
            t = i.now(), e.apply(void 0, s)
          }), r - c + t)
        }
      },
      debounce: function (e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          i = this.isNumber(n) ? n : 50,
          r = function () {
            var n = this,
              r = arguments;
            return clearTimeout(t), t = setTimeout((function () {
              e.apply(n, r)
            }), i), this
          };
        return r.callNow = function () {
          return clearTimeout(t), e.apply(this, arguments), this
        }, r
      },
      hasClass: T ? function (e, t) {
        return e.classList && e.classList.contains(t)
      } : function (e, t) {
        var n = e.getAttributeNS(null, "class");
        return !!n && (" " + n + " ").replace(/\s+/g, " ").indexOf(" " + t + " ") >= 0
      },
      saveFile: function (e, t, n) {
        if (navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([n], {
          type: t
        }), e);
        var i = "data:" + t + ";charset=" + (document.charset || document.characterSet) + "," + encodeURIComponent(n);
        return this.downloadFile(i, e)
      },
      copyText: window.clipboardData ? function (e) {
        return window.clipboardData.setData("Text", e)
      } : function (e) {
        var t = !1;
        if (!document.queryCommandSupported || !document.queryCommandSupported("copy")) return !1;
        var n = document.createElement("textarea");
        n.value = e, n.setAttribute("readonly", ""), n.style.position = "fixed", document.body.appendChild(n), n.setSelectionRange(0, n.value.length), n.focus();
        try {
          t = document.execCommand("copy")
        } catch (e) {}
        return n.blur(), document.body.removeChild(n), t
      },
      isRTLLang: function (e) {
        return this.hasProperty(p, e)
      },
      hasCtrlKey: function (e) {
        return Boolean(e.metaKey || e.ctrlKey)
      },
      escapeHTML: function (e) {
        return String(e).replace(/[&<>"']/g, (function (e) {
          return _[e]
        }))
      },
      generateId: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e + ++d
      },
      hasProperty: function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      },
      parseString: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return e ? e.replace(/{([0-9]+)}/g, (function (e, t) {
          return n[t]
        })) : ""
      },
      activateClass: function (e, t, n) {
        this.hasClass(e, t) !== Boolean(n) && this.toggleClass(e, t)
      },
      toggleClass: T ? function (e, t) {
        return e.classList && e.classList.toggle(t)
      } : function (e, t) {
        var n = this.hasClass(e, t),
          i = e.getAttributeNS(null, "class") || "";
        return n ? i = (" " + i + " ").replace(/\s+/g, " ").replace(" " + t + " ", " ") : i += " " + t, e.setAttributeNS(null, "class", this.trim(i)), !n
      },
      createEvent: function (e, t, n) {
        var i;
        try {
          i = new Event(e, {
            bubbles: t,
            cancelable: n
          })
        } catch (r) {
          (i = document.createEvent("Event")).initEvent(e, t, n)
        }
        return i
      },
      preventEvent: function (e) {
        e.cancelable && e.preventDefault()
      },
      shuffleArray: function (e) {
        for (var t = e.length; t;) {
          var n = Math.floor(Math.random() * t--),
            i = e[t];
          e[t] = e[n], e[n] = i
        }
        return e
      },
      downloadFile: function (e, t) {
        var n = document.createElement("a");
        return n.href = e, "download" in n ? n.download = t : n.target = "_blank", n.dispatchEvent(new window.MouseEvent("click"))
      },
      truncateText: function (e, t) {
        var n = 0;
        if (e.length <= t) return e;
        for (var i = e.slice(0, t), r = m[n++]; r;) {
          if (r.test(i)) return i.split(r).slice(0, -1).join("");
          r = m[n++]
        }
        return e
      },
      startsWith: String.prototype.startsWith ? function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e.startsWith(t, n)
      } : function (e, t, n) {
        return e.indexOf(t, n) === n
      },
      endsWith: String.prototype.endsWith ? function (e, t, n) {
        return e.endsWith(t, n)
      } : function (e, t, n) {
        var i = n;
        return (void 0 === i || i > e.length) && (i = e.length), e.substring(i - t.length, i) === t
      },
      escapeRegExp: function (e) {
        return String(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
      },
      dataURLToBlob: function (e) {
        var t = e.slice(5).split(",");
        t[0] = t[0].split(";");
        for (var n = t[0][0] || "text/plain", i = "base64" === t[0][1] ? window.atob(t[1]) : t[1], r = i.length, o = new Uint8Array(r), s = 0; s < r; s++) o[s] = i.charCodeAt(s);
        return new Blob([o.buffer], {
          type: n
        })
      },
      selectElement: function (e) {
        var t = document.createRange(),
          n = window.getSelection();
        return n.rangeCount && n.removeAllRanges(), t.selectNodeContents(e), n.addRange(t), n
      },
      isAlphaOrDigit: function (e) {
        return this.isAlpha(e) || this.isDigit(e)
      },
      isString: function (e) {
        return "string" == typeof e
      },
      isNumber: function (e) {
        return "number" == typeof e && window.isFinite(e)
      },
      isObject: function (e) {
        return "object" === l(e) && null !== e
      },
      isArray: Array.isArray,
      isFunction: function (e) {
        return "function" == typeof e
      },
      isNullOrUndefined: function (e) {
        return null == e
      },
      toQueryString: function (e, t) {
        var n = this;
        return e ? Object.keys(e).reduce((function (t, i) {
          var r = e[i];
          n.isArray(r) || (r = [r]);
          var o = window.encodeURIComponent(i);
          return t.concat(r.map((function (e) {
            return n.isNullOrUndefined(e) ? o : o + "=" + window.encodeURIComponent(e)
          })))
        }), []).join(t || "&") : ""
      },
      wrapCanvasText: function (e, t, n, i, r, o) {
        for (var s = t.split("\n"), a = n, c = i, u = 0; u < s.length; u++) {
          for (var l = s[u].indexOf(" ") < 0 ? "" : " ", d = s[u].split(l), f = d[0], p = 1; p < d.length; p++) {
            var h = f + l + d[p];
            e.measureText(h).width > r ? (e.fillText(f, a, c), f = d[p], c += o) : f = h
          }
          e.fillText(f, a, c), c += o
        }
      },
      copySupported: "clipboardData" in window || function (e) {
        var t = e.match(/(opr|edge)\/(\d+)/) || e.match(/(chrome|firefox)\/(\d+)/) || e.match(/(version)\/(\d+).+?safari/);
        if (t) switch (t[2] = Number(t[2]), t[1]) {
          case "opr":
            return t[2] >= 29;
          case "edge":
            return t[2] >= 12;
          case "chrome":
            return t[2] >= 43;
          case "firefox":
            return t[2] >= 41;
          case "version":
            return t[2] >= 10
        }
        return !1
      }(h),
      fromQueryString: function (e) {
        var t = {};
        if (!e) return t;
        for (var n = e.split("&"), i = 0; i < n.length; i++) {
          var r = n[i].replace(/\+/g, " ").split("=");
          try {
            t[window.decodeURIComponent(r[0])] = window.decodeURIComponent(r[1])
          } catch (e) {}
        }
        return t
      },
      prepareCSVValue: function (e) {
        return '"' + e.replace(/"/g, '""') + '"'
      },
      normalizeUrl: function (e) {
        return O.href = e || "", O.href
      },
      isCrossOriginUrl: function (e) {
        return this.normalizeUrl(e).indexOf(window.location.protocol + "//" + window.location.host) < 0
      },
      isSecureUrl: function (e) {
        return "https://" === this.normalizeUrl(e).substr(0, 8)
      },
      isYandexUrl: function (e) {
        var t = this.normalizeUrl(e);
        return /.*(?:(?:\/\/)|(?:\.))yandex\.(?:com\.)?[a-z]{2,3}(?::\d+)?(?:\/.*)?$/.test(t)
      },
      setCookie: function (e, t, n) {
        var i = new Date((new Date).getTime() + 24 * (n || 100) * 3600 * 1e3);
        document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; expires=" + i.toUTCString()
      },
      getCookie: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = E.val,
          i = (new Date).getTime();
        (t || !E.val || i - E.tm > 100) && (E.tm = i, n = E.val = document.cookie.split("; "));
        for (var r = encodeURIComponent(e), o = 0; o < n.length; ++o) {
          var s = n[o],
            a = s.indexOf("=");
          if (s.substr(0, a) === r) return decodeURIComponent(s.substr(a + 1))
        }
        return null
      },
      getUserIdData: function () {
        var e = {};
        for (var t in C)
          if (C.hasOwnProperty(t)) {
            var n = this.getCookie(t);
            if (n) e[C[t]] = n
          } return e
      },
      isSelectedElement: function (e) {
        var t = window.getSelection();
        if (t.isCollapsed) return !1;
        var n = document.createRange();
        n.selectNodeContents(e);
        for (var i = 0; i < t.rangeCount; i++) {
          var r = t.getRangeAt(i);
          if (r.compareBoundaryPoints(r.END_TO_START, n) < 0 && r.compareBoundaryPoints(r.START_TO_END, n) > 0) return !0
        }
        return !1
      },
      getImageOrientation: function (e) {
        var t, n, i, r, o, s, a, c = new Uint8Array(e),
          u = 1;
        if (255 !== c[0] || 216 !== c[1]) return u;
        i = 2;
        for (var l = c.length; i < l && (255 !== c[i] || 218 !== c[i + 1]);) {
          if (o = i + 256 * c[i + 2] + c[i + 3] + 2, 255 === c[i] && 225 === c[i + 1]) {
            for (a = (s = 77 === (r = c.subarray(i, o))[10]) ? 256 * r[18] + r[19] : r[18] + 256 * r[19], t = 0; t < a; t++)
              if (n = r.subarray(20 + 12 * t, 32 + 12 * t), s && 18 === n[1] || !s && 18 === n[0]) {
                u = s ? n[9] : n[8];
                break
              } break
          }
          i = o
        }
        return u
      },
      extractPastedText: function (e) {
        var t = e.dataTransfer || e.clipboardData;
        return t ? t.getData("text/plain") : window.clipboardData ? window.clipboardData.getData("Text") : ""
      },
      normalizeRangeBoundsForElement: function (e, t) {
        t.contains(e.startContainer) || t.contains(e.startContainer.parentNode) || e.setStart(t, 0), t.contains(e.endContainer) || t.contains(e.startContainer.parentNode) || e.setEnd(t, t.childNodes.length)
      },
      getClosest: function (e, t) {
        for (var n = e; n && n.nodeType === Node.ELEMENT_NODE;) {
          if (t(n)) return n;
          n = n.parentElement
        }
        return null
      },
      safeParseJSON: function (e) {
        try {
          return JSON.parse(e) || {}
        } catch (e) {
          return {}
        }
      },
      safeStringifyJSON: function (e) {
        try {
          return JSON.stringify(e) || ""
        } catch (e) {
          return ""
        }
      },
      getEventPath: function (e) {
        var t = e.path || e.composedPath && e.composedPath(),
          n = [],
          i = e.target;
        if (this.isArray(t) && t.length > 0) return t.slice().reverse();
        for (; i && i.parentElement && "HTML" !== i.tagName; i = i.parentElement) n.push(i);
        return n.push(i), n.push(document), n.push(window), n.reverse()
      },
      getSelectedText: function () {
        var e = window.getSelection && window.getSelection();
        return e && e.toString && e.toString() || ""
      },
      getSelectedElement: function () {
        return ((window.getSelection() || {}).anchorNode || {}).parentNode || null
      },
      isEqualDeep: function (e, t) {
        var n = Object.keys(e),
          i = Object.keys(t),
          r = Object.prototype.hasOwnProperty;
        if (n.length !== i.length) return !1;
        for (var o, s = 0, a = n.length; s < a; s++)
          if (o = Object.keys(e)[s], r.call(e, o) && !this.isEqual(e[o], t[o])) return !1;
        return !0
      },
      convertBase64ToArrayBuffer: function (e) {
        for (var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0; r < n; r++) i[r] = t.charCodeAt(r);
        return i.buffer
      },
      getFilesFromEvent: function (e) {
        return (e.dataTransfer ? e.dataTransfer.files : e.target.files) || []
      },
      getDataAttr: function (e, t) {
        return e && e.nodeType === Node.ELEMENT_NODE ? e.getAttribute("data-".concat(t)) : null
      },
      getAttribute: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e && e.getAttribute ? e.getAttribute(t) || n : n || null
      },
      asyncFilter: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
          i = c(e),
          r = [],
          o = function e() {
            if (!i.length) return n(r);
            var o = i.shift();
            t(o, (function (t) {
              t && r.push(o), e()
            }))
          };
        o()
      },
      isElement: function (e) {
        return e instanceof Element || e instanceof HTMLDocument
      },
      elementToString: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!e || !P.isElement(e)) return null;
        var i = "<".concat(e.tagName.toLowerCase());
        if (e.attributes)
          for (var r = 0; r < e.attributes.length; r++) {
            var o = e.attributes[r];
            n && !n.includes(o.name) || (i += " ".concat(o.name, "='").concat(String(o.value).slice(0, t), "'"))
          }
        return "".concat(i, ">")
      },
      round: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        return P.isNumber(e) ? Math.round(e / t) * t : null
      },
      base64ToDataUrl: function (e, t) {
        return "data:".concat(t, ";base64,").concat(e)
      },
      isOnline: function () {
        return void 0 === navigator.onLine || navigator.onLine
      },
      guid: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "xxxx-xxxx-xxxx-xxxx";
        return e.replace(/[xy]/g, (function (e) {
          var t = 16 * Math.random() | 0;
          return ("x" === e ? t : 3 & t | 8).toString(16)
        }))
      },
      now: function () {
        return Date.now ? Date.now() : (new Date).getTime()
      },
      bindInit: function (e) {
        return function () {
          P.now();
          try {
            return e.apply(this, arguments)
          } catch (e) {
            return (0, s.logError)(e), this
          } finally {
            0
          }
        }
      },
      calcMedian: function (e) {
        if (!e.length) return null;
        e.sort((function (e, t) {
          return e - t
        }));
        var t = Math.floor(e.length / 2);
        return e.length % 2 ? e[t] : (e[t - 1] + e[t]) / 2
      },
      imageDataColorToString: function (e) {
        var t = e.r,
          n = e.g,
          i = e.b,
          r = e.a;
        return "rgba(".concat(t, ", ").concat(n, ", ").concat(i, ", ").concat(255 / r, ")")
      },
      smoothScrollTo: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        e.scrollTo ? e.scrollTo({
          top: t,
          left: n,
          behavior: "smooth"
        }) : "scrollTop" in e && (e.scrollTop = t, e.scrollLeft = n)
      },
      preferDarkMode: function () {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      },
      preferLightMode: function () {
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      }
    };

  function I(e, t, n) {
    var i = Boolean(t);
    return e in {
      scroll: !0
    } && n && y ? {
      passive: n,
      capture: i
    } : i
  }
  window.util = P;
  var L = P;
  t.default = L
}, function (e, t, n) {
  var i = n(4),
    r = n(37),
    o = n(16),
    s = n(15),
    a = n(41),
    c = function (e, t, n) {
      var u, l, d, f, p = e & c.F,
        h = e & c.G,
        g = e & c.S,
        m = e & c.P,
        _ = e & c.B,
        v = h ? i : g ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
        E = h ? r : r[t] || (r[t] = {}),
        T = E.prototype || (E.prototype = {});
      for (u in h && (n = t), n) d = ((l = !p && v && void 0 !== v[u]) ? v : n)[u], f = _ && l ? a(d, i) : m && "function" == typeof d ? a(Function.call, d) : d, v && s(v, u, d, e & c.U), E[u] != d && o(E, u, f), m && T[u] != d && (T[u] = d)
    };
  i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
}, function (e, t, n) {
  var i = n(53)("wks"),
    r = n(28),
    o = n(4).Symbol,
    s = "function" == typeof o;
  (e.exports = function (e) {
    return i[e] || (i[e] = s && o[e] || (s ? o : r)("Symbol." + e))
  }).store = i
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(107),
    o = n(36),
    s = n(45),
    a = n(8),
    c = [].slice;
  i(i.P + i.F * n(5)((function () {
    r && c.call(r)
  })), "Array", {
    slice: function (e, t) {
      var n = a(this.length),
        i = o(this);
      if (t = void 0 === t ? n : t, "Array" == i) return c.call(this, e, t);
      for (var r = s(e, n), u = s(t, n), l = a(u - r), d = new Array(l), f = 0; f < l; f++) d[f] = "String" == i ? this.charAt(r + f) : this[r + f];
      return d
    }
  })
}, function (e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function (e, t) {
  e.exports = function (e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function (e, t, n) {
  e.exports = !n(5)((function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function () {
        return 7
      }
    }).a
  }))
}, function (e, t, n) {
  var i = n(10);
  e.exports = function (e) {
    if (!i(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function (e, t, n) {
  var i = n(27),
    r = Math.min;
  e.exports = function (e) {
    return e > 0 ? r(i(e), 9007199254740991) : 0
  }
}, function (e, t, n) {
  var i = n(7),
    r = n(103),
    o = n(44),
    s = Object.defineProperty;
  t.f = n(6) ? Object.defineProperty : function (e, t, n) {
    if (i(e), t = o(t, !0), i(n), r) try {
      return s(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function (e, t) {
  e.exports = function (e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TouchView = t.TOUCH_VIEW_EVENTS = void 0, n(52), n(18);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(61),
    s = n(67);
  var a = {
    TAP: "tap"
  };
  t.TOUCH_VIEW_EVENTS = a;
  var c = s.View.extend({
    init: function () {
      var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (this.resetCount(), this._tapThreshold = Number(n.tapThreshold) || 10, this._ignoreSelection = Boolean(n.ignoreSelection), n.stopDefaultAction && this.on(c.eventTypes.START, r.default.preventEvent).on(c.eventTypes.END, r.default.preventEvent), n.hideAfterTransition && this.on("stateSet:hidden", (function (e) {
        e || (this.setState("hidden2", !1), this.getElement().offsetWidth)
      })).on(c.eventTypes.TRANSITION_END, (function (e) {
        "visibility" !== e.propertyName || e.target !== e.currentTarget || this.isVisible() || this.setState("hidden2", !0)
      })).bindDOMEvents(c.eventTypes.TRANSITION_END), this.hasState("animatable") && !n.skipWillChange && this.onVisibilityChanged((function () {
        this.setState("animation_in_progress", !0)
      })).on(c.eventTypes.TRANSITION_END, (function (e) {
        "transform" === e.propertyName && e.target === e.currentTarget && this.setState("animation_in_progress", !1)
      })).bindDOMEvents(c.eventTypes.TRANSITION_END), this.on(c.eventTypes.START, (function (e) {
        var t = e.touches;
        "button" in e && 0 !== e.button || (this._pointCount = Math.min(t ? t.length : this._pointCount + 1, c.maxPointCount[t ? "touch" : e.pointType || "mouse"]), this._tapPoint = 1 !== this._pointCount ? null : c.getPoints(e)[0])
      })).on(c.eventTypes.END, (function (e) {
        var t = e.touches,
          n = this._tapPoint,
          i = e.changedTouches;
        if ((!("button" in e) || 0 === e.button) && (this._pointCount = t ? t.length : Math.max(0, this._pointCount - 1), n)) {
          var o = i ? i[0].pageX : e.pageX,
            s = i ? i[0].pageY : e.pageY;
          this.isEnabled() && Math.abs(o - n.x) <= this._tapThreshold && Math.abs(s - n.y) <= this._tapThreshold && (this._ignoreSelection || !r.default.isSelectedElement(this.getElement())) && this.emit(a.TAP, e), this._tapPoint = null
        }
      })).on(c.eventTypes.CANCEL, this.resetCount).bindDOMEvents([c.eventTypes.END, c.eventTypes.START, c.eventTypes.CANCEL]), n.activateFocus) {
        var i = !1;
        this.on(c.eventTypes.START, (function (e) {
          i = r.default.getClosest(e.target, (function (e) {
            return e.hasAttribute("data-prevent-focus")
          }))
        })).on("focus", (function (e) {
          i ? e.preventDefault() : this.setFocus(!0).setState("focused", !0)
        })).on("blur", (function () {
          var e = this,
            t = this.getElement();
          setTimeout((function () {
            (document.hasFocus && !document.hasFocus() || !t.contains(document.activeElement)) && e.setState("focused", !1)
          }), 0)
        })).bindDOMEvents("focus blur", !0)
      }
      n.delegateActiveState && (t = function () {
        e && (e.setAttribute("data-pressed", !1), e = null)
      }, this.on(c.eventTypes.START, (function (n) {
        var i = n.target;
        t(), (i = this.getClosest(i, (function (e) {
          return e.hasAttribute("data-active-target")
        }))) && (e = i).setAttribute("data-pressed", !0)
      })).on(c.eventTypes.END, t).on(c.eventTypes.CANCEL, t))
    },
    setFocus: function (e) {
      return (0, o.getGlobalEmitter)().emit("viewFocusChanged", this, e), this.getContentElement()[e ? "focus" : "blur"](), this
    },
    scrollTo: function (e, t) {
      var n = this.getContentElement(),
        i = "rtl" === r.default.getStyle(n, "direction") ? n.scrollWidth : 0;
      return this.userScroll = !1, n.scrollTop = r.default.isNumber(e) ? e : 0, n.scrollLeft = r.default.isNumber(t) ? t : i, this
    },
    resetCount: function () {
      return this._tapPoint = null, this._pointCount = 0, this
    },
    getClosest: function (e, t, n) {
      var i = n ? this.getContentElement() : this.getElement();
      return i.contains(e) && e !== i ? r.default.getClosest(e, t) : null
    },
    setLanguage: function (e) {
      return this.setState("right", r.default.isRTLLang(e)), this.getElement().setAttribute("lang", e), this
    },
    getScrollInfo: function () {
      var e = this.getContentElement();
      return {
        top: e.scrollTop,
        left: e.scrollLeft,
        maxTop: e.scrollHeight - e.clientHeight,
        maxLeft: e.scrollWidth - e.clientWidth,
        clientHeight: e.clientHeight,
        clientWidth: e.clientWidth
      }
    },
    onTap: function (e) {
      return this.on(a.TAP, e)
    }
  }, {
    getPoint: function (e) {
      return {
        x: e.pageX,
        y: e.pageY
      }
    },
    getPoints: function (e) {
      return e.touches && !r.default.isEmpty(e.touches) ? Array.prototype.map.call(e.touches, this.getPoint) : [this.getPoint(e)]
    },
    getMidpoint: function (e, t) {
      return {
        x: (e.x + t.x) / 2,
        y: (e.y + t.y) / 2
      }
    },
    getDistance: function (e, t) {
      var n = Math.abs(t.x - e.x),
        i = Math.abs(t.y - e.y);
      return Math.sqrt(n * n + i * i)
    }
  });
  t.TouchView = c, c.eventTypes = {
    END: "mouseup",
    OUT: "mouseout",
    OVER: "mouseover",
    MOVE: "mousemove",
    START: "mousedown",
    WHEEL: "wheel",
    CANCEL: "mouseleave"
  }, "ontouchstart" in window && (r.default.mob || r.default.iOS || r.default.android) ? c.eventTypes = {
    END: "touchend",
    MOVE: "touchmove",
    START: "touchstart",
    CANCEL: "touchcancel"
  } : !window.PointerEvent || "pointerEnabled" in navigator && !navigator.pointerEnabled || (c.eventTypes = {
    END: "pointerup",
    OUT: "pointerout",
    OVER: "pointerover",
    MOVE: "pointermove",
    START: "pointerdown",
    CANCEL: "pointercancel"
  }), c.eventTypes.TRANSITION_END = "WebkitTransition" in document.documentElement.style ? "webkitTransitionEnd" : "transitionend", c.maxPointCount = {
    pen: 1,
    mouse: 1,
    touch: 10
  }
}, function (e, t, n) {
  var i = n(19),
    r = n(29);
  n(90)("keys", (function () {
    return function (e) {
      return r(i(e))
    }
  }))
}, function (e, t, n) {
  "use strict";
  var i = n(58),
    r = n(125),
    o = n(40),
    s = n(25);
  e.exports = n(95)(Array, "Array", (function (e, t) {
    this._t = s(e), this._i = 0, this._k = t
  }), (function () {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
  }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (e, t, n) {
  "use strict";
  var i = n(54),
    r = {};
  r[n(2)("toStringTag")] = "z", r + "" != "[object z]" && n(15)(Object.prototype, "toString", (function () {
    return "[object " + i(this) + "]"
  }), !0)
}, function (e, t, n) {
  var i = n(4),
    r = n(16),
    o = n(21),
    s = n(28)("src"),
    a = n(135),
    c = ("" + a).split("toString");
  n(37).inspectSource = function (e) {
    return a.call(e)
  }, (e.exports = function (e, t, n, a) {
    var u = "function" == typeof n;
    u && (o(n, "name") || r(n, "name", t)), e[t] !== n && (u && (o(n, s) || r(n, s, e[t] ? "" + e[t] : c.join(String(t)))), e === i ? e[t] = n : a ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
  })(Function.prototype, "toString", (function () {
    return "function" == typeof this && this[s] || a.call(this)
  }))
}, function (e, t, n) {
  var i = n(9),
    r = n(39);
  e.exports = n(6) ? function (e, t, n) {
    return i.f(e, t, r(1, n))
  } : function (e, t, n) {
    return e[t] = n, e
  }
}, function (e, t, n) {
  var i = n(9).f,
    r = Function.prototype,
    o = /^\s*function ([^ (]*)/;
  "name" in r || n(6) && i(r, "name", {
    configurable: !0,
    get: function () {
      try {
        return ("" + this).match(o)[1]
      } catch (e) {
        return ""
      }
    }
  })
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(43)(1);
  i(i.P + i.F * !n(117)([].map, !0), "Array", {
    map: function (e) {
      return r(this, e, arguments[1])
    }
  })
}, function (e, t, n) {
  var i = n(33);
  e.exports = function (e) {
    return Object(i(e))
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Model = void 0, n(12);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(30);
  var s = "change",
    a = "set",
    c = "beforeSet",
    u = "invalid",
    l = o.Emitter.extend({
      init: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._id = t.id || r.default.generateId("mid"), this._props = {}, this._invalid = [], this._filters = {}, this._validators = {}, t.filters && this.setFilter(t.filters), t.validators && this.setValidator(t.validators), this.setProperty(r.default.extend(this.getDefaults(), e), t)
      },
      getId: function () {
        return this._id
      },
      clone: function (e) {
        return new this.constructor(this._props, e)
      },
      clear: function (e) {
        return this.setProperty(null, e)
      },
      reset: function (e) {
        return this.setProperty(this.getDefaults(), e)
      },
      onChange: function (e, t, n) {
        return this._addPrefixedHandler(s, e, t, n)
      },
      onSet: function (e, t, n) {
        return this._addPrefixedHandler(a, e, t, n)
      },
      onBeforeSet: function (e, t, n) {
        return this._addPrefixedHandler(c, e, t, n)
      },
      onInvalid: function (e, t, n) {
        return this._addPrefixedHandler(u, e, t, n)
      },
      offChange: function (e, t, n) {
        return this._removePrefixedHandler(s, e, t, n)
      },
      toJSON: function () {
        return r.default.clone(this._props)
      },
      cloneProps: function () {
        return r.default.clone(this._props)
      },
      getProps: function () {
        return this._props
      },
      isValid: function (e, t) {
        var n = {},
          i = [];
        switch (arguments.length) {
          case 0:
            n = this.cloneProps();
            break;
          case 1:
            n[e] = this.getProperty(e);
            break;
          default:
            n[e] = t
        }
        return Object.keys(n).forEach((function (e) {
          var t = n[e],
            r = this._validators[e];
          r && !r.call(this, t) && i.push(e)
        }), this), this._invalid = i, !i.length
      },
      getInvalid: function () {
        return r.default.clone(this._invalid)
      },
      getDefaults: function () {
        return this.defaults ? r.default.clone(this.defaults) : {}
      },
      hasProperty: function (e) {
        return r.default.hasProperty(this._props, e)
      },
      getProperty: function (e) {
        return this._props[e]
      },
      toggleProperty: function (e) {
        return this.setProperty(e, !this.getProperty(e))
      },
      setProperty: function (e, t, n) {
        var i, o = this.cloneProps(),
          l = n || {},
          d = t;
        if (null === e || r.default.isObject(e)) {
          var f = d || {};
          return e ? (Object.keys(e).forEach((function (t) {
            this.setProperty(t, e[t], f)
          }), this), this) : (Object.keys(o).forEach((function (e) {
            this.setProperty(e, null, f)
          }), this), this)
        }
        if (this.emit(c, e, d, l).emit("".concat(c, ":").concat(e), d, l), r.default.isNullOrUndefined(d)) {
          if (!this.hasProperty(e)) return this;
          d = void 0, i = delete this._props[e]
        } else {
          var p = this._filters[e];
          p && (d = p.call(this, d)), r.default.isEqual(o[e], d) || (i = !0, this._props[e] = d)
        }
        return this.emit(a, e, d, l).emit("".concat(a, ":").concat(e), d, l), i && !l.silent && (l.invalid = !this.isValid(e, d), l.oldValue = o[e], l.invalid && this.emit(u, e, d, l).emit("".concat(u, ":").concat(e), d, l), this.emit(s, e, d, l).emit("".concat(s, ":").concat(e), d, l)), this
      },
      setFilter: function (e, t) {
        return r.default.isObject(e) ? (Object.keys(e).forEach((function (t) {
          this.setFilter(t, e[t])
        }), this), this) : null === e ? (this._filters = {}, this) : null === t ? (delete this._filters[e], this) : (e && r.default.isFunction(t) && (this._filters[e] = t), this)
      },
      setValidator: function (e, t) {
        return r.default.isObject(e) ? (Object.keys(e).forEach((function (t) {
          this.setValidator(t, e[t])
        }), this), this) : null === e ? (this._validators = {}, this) : null === t ? (delete this._validators[e], this) : (e && r.default.isFunction(t) && (this._validators[e] = t), this)
      }
    });
  t.Model = l
}, function (e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function (e, t) {
    return n.call(e, t)
  }
}, function (e, t, n) {
  "use strict";
  var i = n(74),
    r = n(7),
    o = n(109),
    s = n(75),
    a = n(8),
    c = n(55),
    u = n(76),
    l = n(5),
    d = Math.min,
    f = [].push,
    p = "length",
    h = !l((function () {
      RegExp(4294967295, "y")
    }));
  n(57)("split", 2, (function (e, t, n, l) {
    var g;
    return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p] ? function (e, t) {
      var r = String(this);
      if (void 0 === e && 0 === t) return [];
      if (!i(e)) return n.call(r, e, t);
      for (var o, s, a, c = [], l = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), d = 0, h = void 0 === t ? 4294967295 : t >>> 0, g = new RegExp(e.source, l + "g");
           (o = u.call(g, r)) && !((s = g.lastIndex) > d && (c.push(r.slice(d, o.index)), o[p] > 1 && o.index < r[p] && f.apply(c, o.slice(1)), a = o[0][p], d = s, c[p] >= h));) g.lastIndex === o.index && g.lastIndex++;
      return d === r[p] ? !a && g.test("") || c.push("") : c.push(r.slice(d)), c[p] > h ? c.slice(0, h) : c
    } : "0".split(void 0, 0)[p] ? function (e, t) {
      return void 0 === e && 0 === t ? [] : n.call(this, e, t)
    } : n, [function (n, i) {
      var r = e(this),
        o = null == n ? void 0 : n[t];
      return void 0 !== o ? o.call(n, r, i) : g.call(String(r), n, i)
    }, function (e, t) {
      var i = l(g, e, this, t, g !== n);
      if (i.done) return i.value;
      var u = r(e),
        f = String(this),
        p = o(u, RegExp),
        m = u.unicode,
        _ = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (h ? "y" : "g"),
        v = new p(h ? u : "^(?:" + u.source + ")", _),
        E = void 0 === t ? 4294967295 : t >>> 0;
      if (0 === E) return [];
      if (0 === f.length) return null === c(v, f) ? [f] : [];
      for (var T = 0, y = 0, S = []; y < f.length;) {
        v.lastIndex = h ? y : 0;
        var b, O = c(v, h ? f : f.slice(y));
        if (null === O || (b = d(a(v.lastIndex + (h ? 0 : y)), f.length)) === T) y = s(f, y, m);
        else {
          if (S.push(f.slice(T, y)), S.length === E) return S;
          for (var C = 1; C <= O.length - 1; C++)
            if (S.push(O[C]), S.length === E) return S;
          y = T = b
        }
      }
      return S.push(f.slice(T)), S
    }]
  }))
}, function (e, t, n) {
  for (var i = n(13), r = n(29), o = n(15), s = n(4), a = n(16), c = n(40), u = n(2), l = u("iterator"), d = u("toStringTag"), f = c.Array, p = {
    CSSRuleList: !0,
    CSSStyleDeclaration: !1,
    CSSValueList: !1,
    ClientRectList: !1,
    DOMRectList: !1,
    DOMStringList: !1,
    DOMTokenList: !0,
    DataTransferItemList: !1,
    FileList: !1,
    HTMLAllCollection: !1,
    HTMLCollection: !1,
    HTMLFormElement: !1,
    HTMLSelectElement: !1,
    MediaList: !0,
    MimeTypeArray: !1,
    NamedNodeMap: !1,
    NodeList: !0,
    PaintRequestList: !1,
    Plugin: !1,
    PluginArray: !1,
    SVGLengthList: !1,
    SVGNumberList: !1,
    SVGPathSegList: !1,
    SVGPointList: !1,
    SVGStringList: !1,
    SVGTransformList: !1,
    SourceBufferList: !1,
    StyleSheetList: !0,
    TextTrackCueList: !1,
    TextTrackList: !1,
    TouchList: !1
  }, h = r(p), g = 0; g < h.length; g++) {
    var m, _ = h[g],
      v = p[_],
      E = s[_],
      T = E && E.prototype;
    if (T && (T[l] || a(T, l, f), T[d] || a(T, d, _), c[_] = f, v))
      for (m in i) T[m] || o(T, m, i[m], !0)
  }
}, function (e, t, n) {
  "use strict";
  var i = n(4),
    r = n(21),
    o = n(6),
    s = n(1),
    a = n(15),
    c = n(63).KEY,
    u = n(5),
    l = n(53),
    d = n(48),
    f = n(28),
    p = n(2),
    h = n(108),
    g = n(139),
    m = n(140),
    _ = n(102),
    v = n(7),
    E = n(10),
    T = n(19),
    y = n(25),
    S = n(44),
    b = n(39),
    O = n(49),
    C = n(141),
    P = n(42),
    I = n(60),
    L = n(9),
    R = n(29),
    A = P.f,
    x = L.f,
    N = C.f,
    w = i.Symbol,
    D = i.JSON,
    M = D && D.stringify,
    V = p("_hidden"),
    k = p("toPrimitive"),
    U = {}.propertyIsEnumerable,
    H = l("symbol-registry"),
    B = l("symbols"),
    j = l("op-symbols"),
    F = Object.prototype,
    G = "function" == typeof w && !!I.f,
    Y = i.QObject,
    W = !Y || !Y.prototype || !Y.prototype.findChild,
    K = o && u((function () {
      return 7 != O(x({}, "a", {
        get: function () {
          return x(this, "a", {
            value: 7
          }).a
        }
      })).a
    })) ? function (e, t, n) {
      var i = A(F, t);
      i && delete F[t], x(e, t, n), i && e !== F && x(F, t, i)
    } : x,
    X = function (e) {
      var t = B[e] = O(w.prototype);
      return t._k = e, t
    },
    q = G && "symbol" == typeof w.iterator ? function (e) {
      return "symbol" == typeof e
    } : function (e) {
      return e instanceof w
    },
    z = function (e, t, n) {
      return e === F && z(j, t, n), v(e), t = S(t, !0), v(n), r(B, t) ? (n.enumerable ? (r(e, V) && e[V][t] && (e[V][t] = !1), n = O(n, {
        enumerable: b(0, !1)
      })) : (r(e, V) || x(e, V, b(1, {})), e[V][t] = !0), K(e, t, n)) : x(e, t, n)
    },
    J = function (e, t) {
      v(e);
      for (var n, i = m(t = y(t)), r = 0, o = i.length; o > r;) z(e, n = i[r++], t[n]);
      return e
    },
    Q = function (e) {
      var t = U.call(this, e = S(e, !0));
      return !(this === F && r(B, e) && !r(j, e)) && (!(t || !r(this, e) || !r(B, e) || r(this, V) && this[V][e]) || t)
    },
    Z = function (e, t) {
      if (e = y(e), t = S(t, !0), e !== F || !r(B, t) || r(j, t)) {
        var n = A(e, t);
        return !n || !r(B, t) || r(e, V) && e[V][t] || (n.enumerable = !0), n
      }
    },
    $ = function (e) {
      for (var t, n = N(y(e)), i = [], o = 0; n.length > o;) r(B, t = n[o++]) || t == V || t == c || i.push(t);
      return i
    },
    ee = function (e) {
      for (var t, n = e === F, i = N(n ? j : y(e)), o = [], s = 0; i.length > s;) !r(B, t = i[s++]) || n && !r(F, t) || o.push(B[t]);
      return o
    };
  G || (a((w = function () {
    if (this instanceof w) throw TypeError("Symbol is not a constructor!");
    var e = f(arguments.length > 0 ? arguments[0] : void 0),
      t = function (n) {
        this === F && t.call(j, n), r(this, V) && r(this[V], e) && (this[V][e] = !1), K(this, e, b(1, n))
      };
    return o && W && K(F, e, {
      configurable: !0,
      set: t
    }), X(e)
  }).prototype, "toString", (function () {
    return this._k
  })), P.f = Z, L.f = z, n(31).f = C.f = $, n(46).f = Q, I.f = ee, o && !n(38) && a(F, "propertyIsEnumerable", Q, !0), h.f = function (e) {
    return X(p(e))
  }), s(s.G + s.W + s.F * !G, {
    Symbol: w
  });
  for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
  for (var ie = R(p.store), re = 0; ie.length > re;) g(ie[re++]);
  s(s.S + s.F * !G, "Symbol", {
    for: function (e) {
      return r(H, e += "") ? H[e] : H[e] = w(e)
    },
    keyFor: function (e) {
      if (!q(e)) throw TypeError(e + " is not a symbol!");
      for (var t in H)
        if (H[t] === e) return t
    },
    useSetter: function () {
      W = !0
    },
    useSimple: function () {
      W = !1
    }
  }), s(s.S + s.F * !G, "Object", {
    create: function (e, t) {
      return void 0 === t ? O(e) : J(O(e), t)
    },
    defineProperty: z,
    defineProperties: J,
    getOwnPropertyDescriptor: Z,
    getOwnPropertyNames: $,
    getOwnPropertySymbols: ee
  });
  var oe = u((function () {
    I.f(1)
  }));
  s(s.S + s.F * oe, "Object", {
    getOwnPropertySymbols: function (e) {
      return I.f(T(e))
    }
  }), D && s(s.S + s.F * (!G || u((function () {
    var e = w();
    return "[null]" != M([e]) || "{}" != M({
      a: e
    }) || "{}" != M(Object(e))
  }))), "JSON", {
    stringify: function (e) {
      for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
      if (n = t = i[1], (E(t) || void 0 !== e) && !q(e)) return _(t) || (t = function (e, t) {
        if ("function" == typeof n && (t = n.call(this, e, t)), !q(t)) return t
      }), i[1] = t, M.apply(D, i)
    }
  }), w.prototype[k] || n(16)(w.prototype, k, w.prototype.valueOf), d(w, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function (e, t, n) {
  var i = n(70),
    r = n(33);
  e.exports = function (e) {
    return i(r(e))
  }
}, function (e, t, n) {
  "use strict";
  var i = n(106)(!0);
  n(95)(String, "String", (function (e) {
    this._t = String(e), this._i = 0
  }), (function () {
    var e, t = this._t,
      n = this._i;
    return n >= t.length ? {
      value: void 0,
      done: !0
    } : (e = i(t, n), this._i += e.length, {
      value: e,
      done: !1
    })
  }))
}, function (e, t) {
  var n = Math.ceil,
    i = Math.floor;
  e.exports = function (e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
  }
}, function (e, t) {
  var n = 0,
    i = Math.random();
  e.exports = function (e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
  }
}, function (e, t, n) {
  var i = n(105),
    r = n(73);
  e.exports = Object.keys || function (e) {
    return i(e, r)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Emitter = void 0, n(12), n(3);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(50);
  var s = "action",
    a = o.Base.extend({
      init: function () {
        this._handlers = {}
      },
      on: function (e, t, n) {
        var i = this,
          o = this._handlers;
        return r.default.isFunction(e) ? this.on("*", e) : r.default.isArray(e) ? (e.forEach((function (e) {
          var r = t.bind(n || i, e);
          r.sourceHandler = t, i.on(e, r, n)
        })), this) : r.default.isObject(e) ? (Object.keys(e).forEach((function (n) {
          i.on(n, e[n], t)
        })), this) : e && r.default.isFunction(t) ? ((o[e] = o[e] || []).push({
          handler: t,
          context: n
        }), this) : this
      },
      off: function (e, t, n) {
        var i = this,
          o = arguments.length,
          s = this._handlers[e];
        if (!o) return this.init(), this;
        if (r.default.isFunction(e)) return this.off("*", e);
        if (r.default.isArray(e)) return e.forEach((function (e) {
          i.off(e, t, n)
        })), this;
        if (r.default.isObject(e)) return Object.keys(e).forEach((function (n) {
          i.off(n, e[n], t)
        })), this;
        if (!s) return this;
        if (1 === o) return delete this._handlers[e], this;
        for (var a = 0; a < s.length; a++) {
          var c = s[a];
          if (c.context === n && (c.handler === t || c.handler.sourceHandler === t)) {
            s.splice(a, 1);
            break
          }
        }
        return this
      },
      once: function (e, t, n) {
        var i = this;
        if (r.default.isFunction(e)) return this.once("*", e);
        if (r.default.isObject(e)) return Object.keys(e).forEach((function (n) {
          this.once(n, e[n], t)
        }), this), this;
        if (!e || !r.default.isFunction(t)) return this;
        var o = function r() {
          i.off(e, r, n), t.apply(this, arguments)
        };
        return o.sourceHandler = t, this.on(e, o, n)
      },
      emit: function (e) {
        var t = r.default.slice(arguments, 1),
          n = this._handlers[e],
          i = this._handlers["*"];
        if (r.default.isObject(e)) return Object.keys(e).forEach((function (t) {
          this.emit(t, e[t])
        }), this), this;
        if ("*" !== e && n) {
          n = r.default.slice(n);
          for (var o = 0; o < n.length; o++) {
            var s = n[o];
            s.handler.apply(s.context || this, t)
          }
        }
        if (i) {
          i = r.default.slice(i);
          for (var a = 0; a < i.length; a++) {
            var c = i[a];
            c.handler.apply(c.context || this, arguments)
          }
        }
        return this
      },
      prefixedEmit: function (e, t) {
        for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
        return this.emit.apply(this, [e, t].concat(i)), this.emit.apply(this, ["".concat(e, ":").concat(t)].concat(i))
      },
      onAction: function (e, t, n) {
        return this._addPrefixedHandler(s, e, t, n)
      },
      _addPrefixedHandler: function (e, t, n, i) {
        var o = this;
        return r.default.isArray(t) ? (t.forEach((function (t) {
          var r = n.bind(i || o, t);
          r.sourceHandler = n, o.on("".concat(e, ":").concat(t), r, i)
        })), this) : r.default.isObject(t) ? (Object.keys(t).forEach((function (i) {
          o.on("".concat(e, ":").concat(i), t[i], n)
        })), this) : r.default.isFunction(t) ? this.on(e, t, n) : this.on("".concat(e, ":").concat(t), n, i)
      },
      _removePrefixedHandler: function (e, t, n, i) {
        return r.default.isFunction(t) ? this.off(e, t, n) : this.off("".concat(e, ":").concat(t), n, i)
      }
    });
  t.Emitter = a
}, function (e, t, n) {
  var i = n(105),
    r = n(73).concat("length", "prototype");
  t.f = Object.getOwnPropertyNames || function (e) {
    return i(e, r)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Presenter = void 0;
  var i = n(30),
    r = n(20),
    o = n(67),
    s = i.Emitter.extend({
      init: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this._view = e.view || new o.View, this._model = e.model || new r.Model
      },
      toJSON: function () {
        return this._model.toJSON()
      },
      cloneProps: function () {
        return this._model.cloneProps()
      },
      getProps: function () {
        return this._model.getProps()
      },
      getView: function () {
        return this._view
      },
      getModel: function () {
        return this._model
      },
      prepareData: function (e) {
        return e
      }
    });
  t.Presenter = s
}, function (e, t) {
  e.exports = function (e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function (e, t, n) {
  "use strict";
  var i = n(7),
    r = n(19),
    o = n(8),
    s = n(27),
    a = n(75),
    c = n(55),
    u = Math.max,
    l = Math.min,
    d = Math.floor,
    f = /\$([$&`']|\d\d?|<[^>]*>)/g,
    p = /\$([$&`']|\d\d?)/g;
  n(57)("replace", 2, (function (e, t, n, h) {
    return [function (i, r) {
      var o = e(this),
        s = null == i ? void 0 : i[t];
      return void 0 !== s ? s.call(i, o, r) : n.call(String(o), i, r)
    }, function (e, t) {
      var r = h(n, e, this, t);
      if (r.done) return r.value;
      var d = i(e),
        f = String(this),
        p = "function" == typeof t;
      p || (t = String(t));
      var m = d.global;
      if (m) {
        var _ = d.unicode;
        d.lastIndex = 0
      }
      for (var v = [];;) {
        var E = c(d, f);
        if (null === E) break;
        if (v.push(E), !m) break;
        "" === String(E[0]) && (d.lastIndex = a(f, o(d.lastIndex), _))
      }
      for (var T, y = "", S = 0, b = 0; b < v.length; b++) {
        E = v[b];
        for (var O = String(E[0]), C = u(l(s(E.index), f.length), 0), P = [], I = 1; I < E.length; I++) P.push(void 0 === (T = E[I]) ? T : String(T));
        var L = E.groups;
        if (p) {
          var R = [O].concat(P, C, f);
          void 0 !== L && R.push(L);
          var A = String(t.apply(void 0, R))
        } else A = g(O, f, C, P, L, t);
        C >= S && (y += f.slice(S, C) + A, S = C + O.length)
      }
      return y + f.slice(S)
    }];

    function g(e, t, i, o, s, a) {
      var c = i + e.length,
        u = o.length,
        l = p;
      return void 0 !== s && (s = r(s), l = f), n.call(a, l, (function (n, r) {
        var a;
        switch (r.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return t.slice(0, i);
          case "'":
            return t.slice(c);
          case "<":
            a = s[r.slice(1, -1)];
            break;
          default:
            var l = +r;
            if (0 === l) return n;
            if (l > u) {
              var f = d(l / 10);
              return 0 === f ? n : f <= u ? void 0 === o[f - 1] ? r.charAt(1) : o[f - 1] + r.charAt(1) : n
            }
            a = o[l - 1]
        }
        return void 0 === a ? "" : a
      }))
    }
  }))
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(43)(2);
  i(i.P + i.F * !n(117)([].filter, !0), "Array", {
    filter: function (e) {
      return r(this, e, arguments[1])
    }
  })
}, function (e, t) {
  var n = {}.toString;
  e.exports = function (e) {
    return n.call(e).slice(8, -1)
  }
}, function (e, t) {
  var n = e.exports = {
    version: "2.6.12"
  };
  "number" == typeof __e && (__e = n)
}, function (e, t) {
  e.exports = !1
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function (e, t) {
  e.exports = {}
}, function (e, t, n) {
  var i = n(84);
  e.exports = function (e, t, n) {
    if (i(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function (n) {
          return e.call(t, n)
        };
      case 2:
        return function (n, i) {
          return e.call(t, n, i)
        };
      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r)
        }
    }
    return function () {
      return e.apply(t, arguments)
    }
  }
}, function (e, t, n) {
  var i = n(46),
    r = n(39),
    o = n(25),
    s = n(44),
    a = n(21),
    c = n(103),
    u = Object.getOwnPropertyDescriptor;
  t.f = n(6) ? u : function (e, t) {
    if (e = o(e), t = s(t, !0), c) try {
      return u(e, t)
    } catch (e) {}
    if (a(e, t)) return r(!i.f.call(e, t), e[t])
  }
}, function (e, t, n) {
  var i = n(41),
    r = n(70),
    o = n(19),
    s = n(8),
    a = n(133);
  e.exports = function (e, t) {
    var n = 1 == e,
      c = 2 == e,
      u = 3 == e,
      l = 4 == e,
      d = 6 == e,
      f = 5 == e || d,
      p = t || a;
    return function (t, a, h) {
      for (var g, m, _ = o(t), v = r(_), E = i(a, h, 3), T = s(v.length), y = 0, S = n ? p(t, T) : c ? p(t, 0) : void 0; T > y; y++)
        if ((f || y in v) && (m = E(g = v[y], y, _), e))
          if (n) S[y] = m;
          else if (m) switch (e) {
            case 3:
              return !0;
            case 5:
              return g;
            case 6:
              return y;
            case 2:
              S.push(g)
          } else if (l) return !1;
      return d ? -1 : u || l ? l : S
    }
  }
}, function (e, t, n) {
  var i = n(10);
  e.exports = function (e, t) {
    if (!i(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
    if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e))) return r;
    if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value")
  }
}, function (e, t, n) {
  var i = n(27),
    r = Math.max,
    o = Math.min;
  e.exports = function (e, t) {
    return (e = i(e)) < 0 ? r(e + t, 0) : o(e, t)
  }
}, function (e, t) {
  t.f = {}.propertyIsEnumerable
}, function (e, t, n) {
  "use strict";
  var i = n(41),
    r = n(1),
    o = n(19),
    s = n(121),
    a = n(85),
    c = n(8),
    u = n(116),
    l = n(86);
  r(r.S + r.F * !n(87)((function (e) {
    Array.from(e)
  })), "Array", {
    from: function (e) {
      var t, n, r, d, f = o(e),
        p = "function" == typeof this ? this : Array,
        h = arguments.length,
        g = h > 1 ? arguments[1] : void 0,
        m = void 0 !== g,
        _ = 0,
        v = l(f);
      if (m && (g = i(g, h > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && a(v))
        for (n = new p(t = c(f.length)); t > _; _++) u(n, _, m ? g(f[_], _) : f[_]);
      else
        for (d = v.call(f), n = new p; !(r = d.next()).done; _++) u(n, _, m ? s(d, g, [r.value, _], !0) : r.value);
      return n.length = _, n
    }
  })
}, function (e, t, n) {
  var i = n(9).f,
    r = n(21),
    o = n(2)("toStringTag");
  e.exports = function (e, t, n) {
    e && !r(e = n ? e : e.prototype, o) && i(e, o, {
      configurable: !0,
      value: t
    })
  }
}, function (e, t, n) {
  var i = n(7),
    r = n(138),
    o = n(73),
    s = n(72)("IE_PROTO"),
    a = function () {},
    c = function () {
      var e, t = n(104)("iframe"),
        i = o.length;
      for (t.style.display = "none", n(107).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; i--;) delete c.prototype[o[i]];
      return c()
    };
  e.exports = Object.create || function (e, t) {
    var n;
    return null !== e ? (a.prototype = i(e), n = new a, a.prototype = null, n[s] = e) : n = c(), void 0 === t ? n : r(n, t)
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Base = void 0;
  var i, r = (i = n(0)) && i.__esModule ? i : {
    default: i
  };
  var o = function () {};
  t.Base = o, o.extend = function (e, t) {
    var n = function e() {
        e.__parentProto__ && e.__parentProto__.constructor.apply(this, arguments), r.default.hasProperty(e.prototype, "init") && e.prototype.init.apply(this, arguments)
      },
      i = function () {
        this.constructor = n
      };
    return r.default.extend(n, this, t), i.prototype = this.prototype, n.__parentProto__ = this.prototype, (n.prototype = new i).super = this.prototype, e && r.default.extend(n.prototype, e), n
  }
}, function (e, t, n) {
  var i = n(25),
    r = n(42).f;
  n(90)("getOwnPropertyDescriptor", (function () {
    return function (e, t) {
      return r(i(e), t)
    }
  }))
}, function (e, t, n) {
  "use strict";
  var i = n(4),
    r = n(21),
    o = n(36),
    s = n(88),
    a = n(44),
    c = n(5),
    u = n(31).f,
    l = n(42).f,
    d = n(9).f,
    f = n(148).trim,
    p = i.Number,
    h = p,
    g = p.prototype,
    m = "Number" == o(n(49)(g)),
    _ = "trim" in String.prototype,
    v = function (e) {
      var t = a(e, !1);
      if ("string" == typeof t && t.length > 2) {
        var n, i, r, o = (t = _ ? t.trim() : f(t, 3)).charCodeAt(0);
        if (43 === o || 45 === o) {
          if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
        } else if (48 === o) {
          switch (t.charCodeAt(1)) {
            case 66:
            case 98:
              i = 2, r = 49;
              break;
            case 79:
            case 111:
              i = 8, r = 55;
              break;
            default:
              return +t
          }
          for (var s, c = t.slice(2), u = 0, l = c.length; u < l; u++)
            if ((s = c.charCodeAt(u)) < 48 || s > r) return NaN;
          return parseInt(c, i)
        }
      }
      return +t
    };
  if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
    p = function (e) {
      var t = arguments.length < 1 ? 0 : e,
        n = this;
      return n instanceof p && (m ? c((function () {
        g.valueOf.call(n)
      })) : "Number" != o(n)) ? s(new h(v(t)), n, p) : v(t)
    };
    for (var E, T = n(6) ? u(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), y = 0; T.length > y; y++) r(h, E = T[y]) && !r(p, E) && d(p, E, l(h, E));
    p.prototype = g, g.constructor = p, n(15)(i, "Number", p)
  }
}, function (e, t, n) {
  var i = n(37),
    r = n(4),
    o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
  (e.exports = function (e, t) {
    return o[e] || (o[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: i.version,
    mode: n(38) ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  })
}, function (e, t, n) {
  var i = n(36),
    r = n(2)("toStringTag"),
    o = "Arguments" == i(function () {
      return arguments
    }());
  e.exports = function (e) {
    var t, n, s;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
      try {
        return e[t]
      } catch (e) {}
    }(t = Object(e), r)) ? n : o ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
  }
}, function (e, t, n) {
  "use strict";
  var i = n(54),
    r = RegExp.prototype.exec;
  e.exports = function (e, t) {
    var n = e.exec;
    if ("function" == typeof n) {
      var o = n.call(e, t);
      if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
      return o
    }
    if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
    return r.call(e, t)
  }
}, function (e, t, n) {
  "use strict";
  var i = n(7);
  e.exports = function () {
    var e = i(this),
      t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
  }
}, function (e, t, n) {
  "use strict";
  n(142);
  var i = n(15),
    r = n(16),
    o = n(5),
    s = n(33),
    a = n(2),
    c = n(76),
    u = a("species"),
    l = !o((function () {
      var e = /./;
      return e.exec = function () {
        var e = [];
        return e.groups = {
          a: "7"
        }, e
      }, "7" !== "".replace(e, "$<a>")
    })),
    d = function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments)
      };
      var n = "ab".split(e);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
  e.exports = function (e, t, n) {
    var f = a(e),
      p = !o((function () {
        var t = {};
        return t[f] = function () {
          return 7
        }, 7 != "" [e](t)
      })),
      h = p ? !o((function () {
        var t = !1,
          n = /a/;
        return n.exec = function () {
          return t = !0, null
        }, "split" === e && (n.constructor = {}, n.constructor[u] = function () {
          return n
        }), n[f](""), !t
      })) : void 0;
    if (!p || !h || "replace" === e && !l || "split" === e && !d) {
      var g = /./ [f],
        m = n(s, f, "" [e], (function (e, t, n, i, r) {
          return t.exec === c ? p && !r ? {
            done: !0,
            value: g.call(t, n, i)
          } : {
            done: !0,
            value: e.call(n, t, i)
          } : {
            done: !1
          }
        })),
        _ = m[0],
        v = m[1];
      i(String.prototype, e, _), r(RegExp.prototype, f, 2 == t ? function (e, t) {
        return v.call(e, this, t)
      } : function (e) {
        return v.call(e, this)
      })
    }
  }
}, function (e, t, n) {
  var i = n(2)("unscopables"),
    r = Array.prototype;
  null == r[i] && n(16)(r, i, {}), e.exports = function (e) {
    r[i][e] = !0
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.HTTPRequest = void 0, n(12);
  var i = c(n(0)),
    r = n(30),
    o = n(132),
    s = n(92),
    a = c(n(118));

  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  n(159);
  var u = r.Emitter.extend({
    init: function (e) {
      var t = this;
      if (!e) throw new Error("HTTPRequest: invalid url!");
      var n = u.createNativeRequest(e);
      n.onreadystatechange = function () {
        var e;
        if (t.isDone())
          if (clearTimeout(t._timer), t._aborted) t.emit("error", new s.HTTPError(t._timedout ? s.HTTPError.TIMEOUT : s.HTTPError.ABORT));
          else {
            if ((e = new o.HTTPResponse(this)).requestTimestamp = t._timestamp, this.status >= u.codes.OK && this.status < 300) return t.emit("response", e);
            t.emit("error", e)
          }
      }, this._xhr = n, this._url = e, this._data = null, this._params = this._getUserIdData(), this._method = u.methods.GET, this._headers = {}, this._timeout = 1e4, this._timestamp = 0, this._responseType = null
    },
    send: function (e) {
      var t = this._xhr,
        n = this._url,
        r = this,
        o = u.serializeData(this._data, this.getType()),
        s = i.default.toQueryString(this._params),
        a = this._headers;
      return i.default.isFunction(e) && this.on("error", (function (t) {
        e(t)
      })).on("response", (function (t) {
        e(null, t)
      })), s && (n += (n.indexOf("?") < 0 ? "?" : "&") + s), t.open(this._method, n), Object.keys(a).forEach((function (e) {
        t.setRequestHeader(e, a[e])
      })), this._responseType && (t.responseType = this._responseType), this._timeout && (this._timer = setTimeout((function () {
        r._timedout = !0, r.abort()
      }), this._timeout)), this._timestamp = Date.now(), t.send(o), this
    },
    abort: function () {
      return this._aborted || this.isDone() ? this : (this._aborted = !0, this._xhr.abort(), this.emit("abort"))
    },
    isDone: function () {
      return 4 === this._xhr.readyState
    },
    getType: function () {
      return this.getHeader("Content-Type")
    },
    setType: function (e) {
      return this.setHeader("Content-Type", e)
    },
    setCsrfToken: function (e) {
      return this.setHeader("X-CSRF-Token", e)
    },
    setData: function (e) {
      return this._data = e, this
    },
    setMethod: function (e) {
      return this._method = e, this
    },
    setParams: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return this._params = i.default.extend({}, e, t ? null : this._getUserIdData()), this
    },
    getHeader: function (e) {
      return this._headers[e]
    },
    setHeader: function (e, t) {
      return this._headers[e] = t, this
    },
    setTimeout: function (e) {
      return this._timeout = e, this
    },
    setResponseType: function (e) {
      return this._responseType = e, this
    },
    _getUserIdData: function () {
      var e = this._url;
      return i.default.isYandexUrl(e) && i.default.isSecureUrl(e) ? i.default.getUserIdData() : {}
    }
  }, {
    get: function (e, t, n) {
      var r = new this(e),
        o = i.default.isFunction(t) ? null : t,
        s = i.default.isFunction(t) ? t : n;
      return r.setParams(o), r.send(s)
    },
    post: function (e, t, n) {
      var r = new this(e),
        o = i.default.isFunction(t) ? null : t,
        s = i.default.isFunction(t) ? t : n;
      return r.setType(this.types.FORM).setData(o).setMethod(this.methods.POST), r.send(s)
    },
    types: a.default,
    codes: {
      OK: 200,
      CREATED: 201,
      ACCEPTED: 202
    },
    errors: {
      NOT_FOUND: 404
    },
    methods: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
      DELETE: "DELETE"
    },
    serializeData: function (e, t) {
      switch (t) {
        case u.types.JSON:
          return JSON.stringify(e);
        case u.types.FORM:
          return i.default.toQueryString(e);
        default:
          return e
      }
    },
    createNativeRequest: function (e) {
      return window.XDomainRequest && i.default.isCrossOriginUrl(e) && !("withCredentials" in window.XMLHttpRequest.prototype) ? new window.XDomainRequest : new window.XMLHttpRequest
    }
  });
  t.HTTPRequest = u
}, function (e, t) {
  t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getGlobalEmitter = function () {
    null === r && (r = new i.Emitter);
    return r
  };
  var i = n(30),
    r = null
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ListboxView = t.VALUE_ATTR = void 0, n(18);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(11),
    s = n(157);
  t.VALUE_ATTR = "data-value";
  var a = s.PositionedView.extend({
    init: function () {
      var e = this,
        t = function (t) {
          var n = t.target;
          return e.getClosest(n, (function (e) {
            return e.hasAttribute("data-value")
          }), !0)
        };
      this.on("tap", (function (n) {
        var i = t(n);
        i && (r.default.preventEvent(n), e.emit("itemSelected", i.getAttribute("data-value"), i))
      })).on(o.TouchView.eventTypes.OVER, (function (n) {
        var i = t(n);
        i && (r.default.preventEvent(n), e.emit("itemHovered", i, i.getAttribute("data-value")))
      }))
    },
    getValues: function () {
      return this.getContentElement("[" + a.VALUE_ATTR + "]", !0).map((function (e) {
        return e.getAttribute(a.VALUE_ATTR)
      }))
    },
    hasChild: function (e) {
      return this.getElement().contains(e)
    }
  }, {
    VALUE_ATTR: "data-value"
  });
  t.ListboxView = a
}, function (e, t, n) {
  var i = n(28)("meta"),
    r = n(10),
    o = n(21),
    s = n(9).f,
    a = 0,
    c = Object.isExtensible || function () {
      return !0
    },
    u = !n(5)((function () {
      return c(Object.preventExtensions({}))
    })),
    l = function (e) {
      s(e, i, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      })
    },
    d = e.exports = {
      KEY: i,
      NEED: !1,
      fastKey: function (e, t) {
        if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!o(e, i)) {
          if (!c(e)) return "F";
          if (!t) return "E";
          l(e)
        }
        return e[i].i
      },
      getWeak: function (e, t) {
        if (!o(e, i)) {
          if (!c(e)) return !0;
          if (!t) return !1;
          l(e)
        }
        return e[i].w
      },
      onFreeze: function (e) {
        return u && d.NEED && c(e) && !o(e, i) && l(e), e
      }
    }
}, function (e, t, n) {
  var i = n(15);
  e.exports = function (e, t, n) {
    for (var r in t) i(e, r, t[r], n);
    return e
  }
}, function (e, t) {
  e.exports = function (e, t, n, i) {
    if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
    return e
  }
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(71)(!0);
  i(i.P, "Array", {
    includes: function (e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(58)("includes")
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.View = t.STATE_PREFIX = t.VIEW_STATES = t.VIEW_EVENTS = void 0, n(12), n(3);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(61),
    s = n(30);
  var a = {
    CONTENT_CHANGED: "contentChanged",
    DESTROY: "destroy",
    STATE_SET: "stateSet",
    STATE_CHANGED: "stateChanged"
  };
  t.VIEW_EVENTS = a;
  var c = {
    HIDDEN: "hidden",
    DISABLED: "disabled",
    EXTENDED: "extended"
  };
  t.VIEW_STATES = c;
  t.STATE_PREFIX = "state-";
  var u = s.Emitter.extend({
    init: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.on(a.CONTENT_CHANGED, (function (e) {
        (0, o.getGlobalEmitter)().emit("viewContentChanged", this, e)
      })), this._DOMEvents = {}, this.setElement(e.element, e)
    },
    getId: function () {
      return this._id
    },
    destroy: function () {
      var e = this._element;
      return e.parentNode && e.parentNode.removeChild(e), this.setElement(null), this.emit(a.DESTROY).off()
    },
    getRect: function () {
      return this._element.getBoundingClientRect()
    },
    hasState: function (e) {
      return r.default.hasClass(this._element, "state-" + e)
    },
    setState: function (e, t) {
      if (r.default.isObject(e)) return Object.keys(e).forEach((function (t) {
        this.setState(t, e[t])
      }), this), this;
      if (!e) return this;
      var n = this.hasState(e),
        i = arguments.length < 2 ? !n : Boolean(t);
      return i === n || (this.emit(a.STATE_SET, e, i).emit("".concat(a.STATE_SET, ":").concat(e), i), r.default.toggleClass(this._element, "state-" + e), this.emit(a.STATE_CHANGED, e, i).emit("".concat(a.STATE_CHANGED, ":").concat(e), i)), this
    },
    setStyle: function (e, t) {
      return this._element.style[e] = t, this
    },
    setLeftOffset: function (e) {
      return this.setStyle("left", e + "px")
    },
    getOffset: function () {
      return this.getRect().left
    },
    isVisible: function () {
      return !this.hasState(c.HIDDEN)
    },
    isEnabled: function () {
      return !this.hasState(c.DISABLED)
    },
    getElement: function () {
      return this._element
    },
    setElement: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = r.default.clone(this._DOMEvents),
        i = e || document.createElement("div");
      return this.unbindDOMEvents(n), this._id = i.id || this._id || r.default.generateId("vid"), this._element = i, this._contentElement = t.contentElement || i, (t.rebind || (n = t.DOMEvents)) && this.bindDOMEvents(n), this
    },
    setContent: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.getContentElement();
      return t.append || (n.innerHTML = ""), t.asText ? n.appendChild(document.createTextNode(e)) : n.insertAdjacentHTML("beforeend", e), this.emit(a.CONTENT_CHANGED, e, t)
    },
    setVisible: function (e) {
      var t = [c.HIDDEN];
      return arguments.length && t.push(!e), this.setState.apply(this, t)
    },
    setEnabled: function (e) {
      var t = [c.DISABLED];
      return arguments.length && t.push(!e), this.setState.apply(this, t)
    },
    onShow: function (e, t) {
      var n = this;
      return this.onVisibilityChanged((function (i) {
        i && e.call(t || n)
      }), t)
    },
    onHide: function (e, t) {
      var n = this;
      return this.onVisibilityChanged((function (i) {
        i || e.call(t || n)
      }), t)
    },
    onVisibilityChanged: function (e, t) {
      var n = this;
      return this.onStateChanged(c.HIDDEN, (function (i) {
        e.call(t || n, !i)
      }), t)
    },
    onEnableChanged: function (e, t) {
      var n = this;
      return this.onStateChanged(c.DISABLED, (function (i) {
        e.call(t || n, !i)
      }), t)
    },
    onStateSet: function (e, t, n) {
      return this._addPrefixedHandler(a.STATE_SET, e, t, n)
    },
    onStateChanged: function (e, t, n) {
      return this._addPrefixedHandler(a.STATE_CHANGED, e, t, n)
    },
    onContentChanged: function (e) {
      return this.on(a.CONTENT_CHANGED, e)
    },
    handleEvent: function (e) {
      this.emit(e.type, e)
    },
    bindDOMEvents: function (e, t) {
      var n = e,
        i = this._DOMEvents;
      if (!e) return this;
      if (r.default.isObject(n) && !r.default.isArray(n)) return Object.keys(n).forEach((function (e) {
        this.bindDOMEvents(e, n[e])
      }), this), this;
      r.default.isString(n) && (n = r.default.getValueTokens(n));
      for (var o = 0; o < n.length; o++) {
        var s = n[o];
        s && !r.default.hasProperty(i, s) && (i[s] = Boolean(t), r.default.bind(this._element, s, this, t))
      }
      return this
    },
    unbindDOMEvents: function (e) {
      var t = this._DOMEvents,
        n = e || t;
      r.default.isString(n) ? n = r.default.getValueTokens(n) : r.default.isObject(n) && !r.default.isArray(n) && (n = Object.keys(n));
      for (var i = 0; i < n.length; i++) {
        var o = n[i];
        r.default.hasProperty(t, o) && (r.default.unbind(this._element, o, this, t[o]), delete t[o])
      }
      return this
    },
    getContentElement: function (e, t) {
      var n = this._contentElement;
      return e && (n = t ? r.default.slice(n.querySelectorAll(e)) : n.querySelector(e)), n
    }
  });
  t.View = u
}, function (e, t, n) {
  var i = n(1),
    r = n(170),
    o = n(25),
    s = n(42),
    a = n(116);
  i(i.S, "Object", {
    getOwnPropertyDescriptors: function (e) {
      for (var t, n, i = o(e), c = s.f, u = r(i), l = {}, d = 0; u.length > d;) void 0 !== (n = c(i, t = u[d++])) && a(l, t, n);
      return l
    }
  })
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TemplateView = void 0;
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(83),
    s = n(11),
    a = n(130);
  var c = s.TouchView.extend({
    init: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this._partials = t.partials, this._template = new a.Template(t.template || "", t), t.debounceRendering && (this.renderData = r.default.debounce(c.prototype.renderData)), t.deferredRendering && (this.renderData = this.deferredRenderData), t.dontResetScroll || this.on("stateSet:hidden", (function (t) {
        t || e.scrollTo()
      }))
    },
    deferredRenderData: function (e) {
      var t = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = c.prototype.renderData.bind(this, e, n),
        r = function () {
          return t.isVisible() && t.isEnabled()
        };
      return r() ? i() : (this._renderStateListener && this.off("stateChanged", this._renderStateListener), this._renderStateListener = function () {
        r() && (t.off("stateChanged", t._renderStateListener), t._renderStateListener = null, i())
      }, this.onStateChanged(this._renderStateListener)), this
    },
    renderData: function (e) {
      var t = this,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return this.trackRenderTime((function () {
        return t.setContent(t._template.compileTemplate(e, t._partials), n)
      }))
    },
    trackRenderTime: function (e) {
      var t = Date.now(),
        n = e();
      return o.logTime.render(this.getComponentName(), Date.now() - t), n
    },
    getComponentName: function () {
      var e = this._element;
      return e ? e.id || r.default.elementToString(e) : this.getId()
    }
  });
  t.TemplateView = c
}, function (e, t, n) {
  var i = n(36);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
    return "String" == i(e) ? e.split("") : Object(e)
  }
}, function (e, t, n) {
  var i = n(25),
    r = n(8),
    o = n(45);
  e.exports = function (e) {
    return function (t, n, s) {
      var a, c = i(t),
        u = r(c.length),
        l = o(s, u);
      if (e && n != n) {
        for (; u > l;)
          if ((a = c[l++]) != a) return !0
      } else
        for (; u > l; l++)
          if ((e || l in c) && c[l] === n) return e || l || 0;
      return !e && -1
    }
  }
}, function (e, t, n) {
  var i = n(53)("keys"),
    r = n(28);
  e.exports = function (e) {
    return i[e] || (i[e] = r(e))
  }
}, function (e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
  var i = n(10),
    r = n(36),
    o = n(2)("match");
  e.exports = function (e) {
    var t;
    return i(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == r(e))
  }
}, function (e, t, n) {
  "use strict";
  var i = n(106)(!0);
  e.exports = function (e, t, n) {
    return t + (n ? i(e, t).length : 1)
  }
}, function (e, t, n) {
  "use strict";
  var i, r, o = n(56),
    s = RegExp.prototype.exec,
    a = String.prototype.replace,
    c = s,
    u = (i = /a/, r = /b*/g, s.call(i, "a"), s.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
    l = void 0 !== /()??/.exec("")[1];
  (u || l) && (c = function (e) {
    var t, n, i, r, c = this;
    return l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))), u && (t = c.lastIndex), i = s.call(c, e), u && i && (c.lastIndex = c.global ? i.index + i[0].length : t), l && i && i.length > 1 && a.call(i[0], n, (function () {
      for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
    })), i
  }), e.exports = c
}, function (e, t, n) {
  var i = n(74),
    r = n(33);
  e.exports = function (e, t, n) {
    if (i(t)) throw TypeError("String#" + n + " doesn't accept regex!");
    return String(r(e))
  }
}, function (e, t, n) {
  var i = n(2)("match");
  e.exports = function (e) {
    var t = /./;
    try {
      "/./" [e](t)
    } catch (n) {
      try {
        return t[i] = !1, !"/./" [e](t)
      } catch (e) {}
    }
    return !0
  }
}, function (e, t, n) {
  "use strict";
  n(111);
  var i = n(7),
    r = n(56),
    o = n(6),
    s = /./.toString,
    a = function (e) {
      n(15)(RegExp.prototype, "toString", e, !0)
    };
  n(5)((function () {
    return "/a/b" != s.call({
      source: "a",
      flags: "b"
    })
  })) ? a((function () {
    var e = i(this);
    return "/".concat(e.source, "/", "flags" in e ? e.flags : !o && e instanceof RegExp ? r.call(e) : void 0)
  })) : "toString" != s.name && a((function () {
    return s.call(this)
  }))
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getLatestTapEvent = o, t.getLatestTapPosition = s, t.isPrevTapMiss = function () {
    var e = o(),
      t = s();
    return e && t && e.prevTarget && e.target !== e.prevTarget && e.delayBetweenTaps < 700 && t.distanceBetweenTaps < 60
  }, t.setLatestTapEvent = function (e, t, n) {
    var i = Date.now(),
      a = o(),
      c = s(),
      u = a && a.ts ? i - a.ts : null,
      l = {
        pageX: e.pageX,
        pageY: e.pageY,
        distanceBetweenTaps: null
      },
      d = {
        eventType: e.type,
        pageX: null,
        pageY: null,
        ts: i,
        delay: null,
        target: r.default.elementToString(t, 15, ["id", "class", "data-action"]),
        action: r.default.getDataAttr(n, "action"),
        prevTarget: a && a.target,
        prevAction: a && a.action,
        delayBetweenTaps: r.default.round(u, u > 100 ? 100 : 10)
      };
    !l.pageX && !l.pageY && e.changedTouches && e.changedTouches.length && (l.pageX = e.changedTouches[0].pageX, l.pageY = e.changedTouches[0].pageY);
    d.pageX = r.default.round(l.pageX), d.pageY = r.default.round(l.pageY), c && (l.distanceBetweenTaps = (f = l, p = c, Math.abs(f.pageX - p.pageX) + Math.abs(f.pageY - p.pageY)));
    var f, p;
    window._rumLatestTapEvent = d, window._rumLatestTapPosition = l
  }, t.logError = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = window.Ya && window.Ya.Rum;
    0;
    if (n && n.logError) try {
      return n.logError(t, e)
    } catch (e) {}
    e && setTimeout((function () {
      throw e
    }), 0)
  }, t.LATEST_TAP_POSITION_WINDOW_KEY = t.LATEST_TAP_EVENT_WINDOW_KEY = void 0;
  var i, r = (i = n(0)) && i.__esModule ? i : {
    default: i
  };
  t.LATEST_TAP_EVENT_WINDOW_KEY = "_rumLatestTapEvent";
  t.LATEST_TAP_POSITION_WINDOW_KEY = "_rumLatestTapPosition";

  function o() {
    return window._rumLatestTapEvent
  }

  function s() {
    return window._rumLatestTapPosition
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ListboxModel = void 0;
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(20);
  var s = o.Model.extend({
    init: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      this._toggleable = Boolean(t.toggleable), this._defaultValue = t.defaultValue || ""
    },
    isEmpty: function (e) {
      return r.default.isEmpty(e || this.getItems())
    },
    getItems: function () {
      var e = this.getProperty("items");
      try {
        e = JSON.parse(e)
      } catch (e) {}
      return e
    },
    setProperty: function (e, t, n) {
      var i = o.Model.prototype.setProperty.bind(this);
      return this._toggleable && "value" === e && t && this.getProperty(e) === t ? (i(e, this._defaultValue, n), this) : (i(e, t, n), this)
    },
    setItems: function (e, t) {
      return this.setProperty("items", e && JSON.stringify(e), t)
    },
    getDefaults: function () {
      return {
        value: "",
        items: ""
      }
    }
  });
  t.ListboxModel = s
}, function (e, t, n) {
  "use strict";
  var i = n(7),
    r = n(8),
    o = n(75),
    s = n(55);
  n(57)("match", 1, (function (e, t, n, a) {
    return [function (n) {
      var i = e(this),
        r = null == n ? void 0 : n[t];
      return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
    }, function (e) {
      var t = a(n, e, this);
      if (t.done) return t.value;
      var c = i(e),
        u = String(this);
      if (!c.global) return s(c, u);
      var l = c.unicode;
      c.lastIndex = 0;
      for (var d, f = [], p = 0; null !== (d = s(c, u));) {
        var h = String(d[0]);
        f[p] = h, "" === h && (c.lastIndex = o(u, r(c.lastIndex), l)), p++
      }
      return 0 === p ? null : f
    }]
  }))
}, function (e, t, n) {
  "use strict";
  n(24), n(26), n(14), n(13), n(23), n(3), n(17), n(47), Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.initDebugHelper = function () {
    window.debugEnabled = s.debugEnabled, window.visualLogEnabled = s.visualLogEnabled, window.disableDebug = function () {
      return d(!1)
    }, window.enableDebug = function () {
      return d(!0)
    }, window.printDebug = l, o && function () {
      var e = s.visualLogEnabled,
        t = location.search.match(/[&?]log=(\d)/);
      t && (e = Boolean(parseInt(t[1])));
      s.visualLogEnabled !== e && (s.visualLogEnabled = e, window.visualLogEnabled = e, c());
      e && !s.debugEnabled && window.enableDebug()
    }();
    a()
  }, t.logTime = void 0, n(82), n(91), n(128);
  var i = n(123);
  var r = {
      debugEnabled: !1,
      visualLogEnabled: !1
    },
    o = window.config && window.config.SRV === i.TOUCH,
    s = function () {
      try {
        var e = localStorage.getItem("debug_config"),
          t = e ? JSON.parse(e) : {};
        for (var n in r) t.hasOwnProperty(n) || (t[n] = r[n]);
        return t
      } catch (e) {
        return console.error(e), r
      }
    }();

  function a() {
    var e = s.debugEnabled,
      t = s.visualLogEnabled,
      n = e ? "disable" : "enable",
      i = e ? "disableDebug()" : "enableDebug()",
      r = e ? "color: #5c9b28" : "color: #a43535",
      a = "padding: 0 5px; font-family: monospace; background: rgba(100,100,100,.1);",
      c = "Debug is %c".concat(e ? "enabled" : "disabled", "%c. Type %c").concat(i, "%c to ").concat(n, " it");
    if (o) {
      var u = t ? "?log=0" : "?log=1",
        l = t ? "disable" : "enable";
      c = "".concat(c, ". Or use %c").concat(u, "%c to ").concat(l, " visual log"), console.info(c, r, "", a, "", a, "")
    } else console.info(c, r, "", a, "")
  }

  function c() {
    localStorage.setItem("debug_config", JSON.stringify(s))
  }

  function u(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = document.createElement("div");
        return n.classList.add(e), "string" == typeof t ? n.appendChild(document.createTextNode(t)) : Array.isArray(t) ? t.forEach((function (e) {
          return e && n.appendChild(e)
        })) : t && n.appendChild(t), n
      },
      i = function () {
        var e = document.getElementsByClassName("visual-log")[0];
        return e || (e = n("visual-log"), document.body.appendChild(e)), e
      },
      r = i(),
      o = n("visual-log-item", [n("visual-log-item-message", e), n("visual-log-item-params", JSON.stringify(t))]);
    r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), setTimeout((function () {
      return o.classList.add("visual-log-item_showed")
    }), 0), setTimeout((function () {
      o.classList.add("visual-log-item_hidden"), setTimeout((function () {
        return r.removeChild(o)
      }), 400)
    }), 5e3)
  }

  function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    console.info(e, t), o && s.visualLogEnabled && u(e, t)
  }

  function d(e) {
    s.debugEnabled = e, window.debugEnabled = e, c(), a()
  }
  var f = {
    module: function (e, t) {},
    render: function (e, t) {}
  };
  t.logTime = f
}, function (e, t) {
  e.exports = function (e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function (e, t, n) {
  var i = n(40),
    r = n(2)("iterator"),
    o = Array.prototype;
  e.exports = function (e) {
    return void 0 !== e && (i.Array === e || o[r] === e)
  }
}, function (e, t, n) {
  var i = n(54),
    r = n(2)("iterator"),
    o = n(40);
  e.exports = n(37).getIteratorMethod = function (e) {
    if (null != e) return e[r] || e["@@iterator"] || o[i(e)]
  }
}, function (e, t, n) {
  var i = n(2)("iterator"),
    r = !1;
  try {
    var o = [7][i]();
    o.return = function () {
      r = !0
    }, Array.from(o, (function () {
      throw 2
    }))
  } catch (e) {}
  e.exports = function (e, t) {
    if (!t && !r) return !1;
    var n = !1;
    try {
      var o = [7],
        s = o[i]();
      s.next = function () {
        return {
          done: n = !0
        }
      }, o[i] = function () {
        return s
      }, e(o)
    } catch (e) {}
    return n
  }
}, function (e, t, n) {
  var i = n(10),
    r = n(136).set;
  e.exports = function (e, t, n) {
    var o, s = t.constructor;
    return s !== n && "function" == typeof s && (o = s.prototype) !== n.prototype && i(o) && r && r(e, o), e
  }
}, function (e, t, n) {
  var i = n(21),
    r = n(19),
    o = n(72)("IE_PROTO"),
    s = Object.prototype;
  e.exports = Object.getPrototypeOf || function (e) {
    return e = r(e), i(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
  }
}, function (e, t, n) {
  var i = n(1),
    r = n(37),
    o = n(5);
  e.exports = function (e, t) {
    var n = (r.Object || {})[e] || Object[e],
      s = {};
    s[e] = t(n), i(i.S + i.F * o((function () {
      n(1)
    })), "Object", s)
  }
}, function (e, t, n) {
  "use strict";
  var i = n(7),
    r = n(110),
    o = n(55);
  n(57)("search", 1, (function (e, t, n, s) {
    return [function (n) {
      var i = e(this),
        r = null == n ? void 0 : n[t];
      return void 0 !== r ? r.call(n, i) : new RegExp(n)[t](String(i))
    }, function (e) {
      var t = s(n, e, this);
      if (t.done) return t.value;
      var a = i(e),
        c = String(this),
        u = a.lastIndex;
      r(u, 0) || (a.lastIndex = 0);
      var l = o(a, c);
      return r(a.lastIndex, u) || (a.lastIndex = u), null === l ? -1 : l.index
    }]
  }))
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.HTTPError = void 0;
  var i = n(50).Base.extend({
    init: function (e, t) {
      this.code = e || 0, this.message = t || ""
    }
  }, {
    ABORT: -1,
    TIMEOUT: -2
  });
  t.HTTPError = i
}, function (e, t, n) {
  "use strict";

  function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t && (i = i.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, i)
    }
    return n
  }

  function r(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? i(Object(n), !0).forEach((function (t) {
        o(e, t, n[t])
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      }))
    }
    return e
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ListboxPresenter = void 0, n(3), n(122);
  var s = n(32).Presenter.extend({
    currentBulksLimit: 1,
    totalBulks: 1,
    init: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = this,
        i = this.getView(),
        o = this.getModel();
      i.on("itemSelected", (function (t) {
        e.setValue(t).emit("itemSelected", e.getValue())
      }));
      var s = function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = e.getItems();
        if (t.renderOnScroll) {
          var a = t.renderBulkSize * e.currentBulksLimit;
          s = s.slice(0, a)
        }
        o.appendingOnScroll ? (s = s.slice(-t.renderBulkSize), i.renderData(n.prepareData(s), r(r({}, o), {}, {
          append: !0
        }))) : i.renderData(n.prepareData(s), o)
      };
      o.on("change", (function (e, r, o) {
        switch (e) {
          case "value":
          case "items":
            var a, c = this.getItems();
            t.renderOnScroll && (n.currentBulksLimit = 1, n.totalBulks = Math.ceil(c.length / t.renderBulkSize)), "items" === e ? (i.setState("empty", this.isEmpty(c)), a = "itemsChanged") : "value" === e && (a = "valueChanged"), s(o), i.setEnabled(!0), n.emit(a, r, o.oldValue)
        }
      })), this.on("updateView", (function (e) {
        s(e)
      })), t.renderOnScroll && this._trackScrollRender()
    },
    _trackScrollRender: function () {
      var e = this;
      this.getView().on("scroll", (function () {
        var t = e.getView().getElement();
        t.scrollTop > t.scrollHeight - 2 * t.offsetHeight && e.currentBulksLimit < e.totalBulks && (e.currentBulksLimit += 1, e.emit("updateView", {
          appendingOnScroll: !0
        }))
      }))
    },
    getItems: function () {
      return this.getModel().getItems()
    },
    setItems: function (e, t) {
      return this.getModel().setItems(e, t), this
    },
    getValue: function () {
      return this.getModel().getProperty("value")
    },
    setValue: function (e, t) {
      var n = this.getModel();
      return n.isValid("value", e) && n.setProperty("value", e, t), this
    },
    getItemById: function (e) {
      return this.getItems().find((function (t) {
        return t.id === e
      }))
    }
  });
  t.ListboxPresenter = s
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.InputView = t.KEYBOARD_KEYS = void 0, n(17), n(3), n(14), n(79);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(11);
  var s = {
    A: 65,
    D: 68,
    E: 69,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    TAB: 9
  };
  t.KEYBOARD_KEYS = s;
  var a = o.TouchView.extend({
    init: function () {
      var e, t = this,
        n = this.getContentElement();
      n.disabled = this.hasState("disabled"), this.on("stateChanged:disabled", (function (e) {
        n.disabled = e
      })), this.bindDOMEvents("input keydown"), this.on("keydown", this._bindSelectionCases), 9 === document.documentMode && (e = function () {
        t.emit("input", {
          target: n
        })
      }, this.on("stateChanged:focused", (function (t) {
        document[(t ? "add" : "remove") + "EventListener"]("selectionchange", e, !1)
      })))
    },
    getName: function () {
      return this.getContentElement().name
    },
    getValue: function () {
      return this.getContentElement().value
    },
    setValue: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.getContentElement(),
        i = this.getValue();
      if (e === i) return this;
      var o = t.end,
        s = t.start;
      return r.default.isNumber(s) ? (o = r.default.isNumber(o) ? o : i.length, n.value = i.slice(0, s) + e + i.slice(o)) : n.value = e, this.emit("input", {
        target: n,
        detail: t
      })
    },
    getSelection: function () {
      var e = this.getContentElement();
      return {
        end: e.selectionEnd,
        start: e.selectionStart
      }
    },
    setSelection: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = this.getContentElement();
      return setTimeout((function () {
        t.focus(), t.setSelectionRange(e.start, e.end || e.start)
      }), 0), this
    },
    setPlaceholder: function (e) {
      return this.getContentElement().placeholder = e, this
    },
    setContentEditable: function (e) {
      this.getElement().setAttribute("contentEditable", e)
    },
    _bindSelectionCases: function (e) {
      (a.hasKeyCombination(e, s.UP, {
        shiftKey: !0
      }) || a.hasKeyCombination(e, s.DOWN, {
        shiftKey: !0
      })) && this.emit("select")
    }
  }, {
    keys: s,
    makeFakeArea: function (e) {
      return r.default.bind(e, "drop", (function (e) {
        this.disabled || (this.focus(), r.default.preventEvent(e))
      })), r.default.bind(e, "paste", (function (e) {
        this.disabled || (r.default.preventEvent(e), this._insertSelectionText(r.default.extractPastedText(e)))
      })), r.default.bind(e, "blur", (function () {
        this.disabled || (this.selectionRange = this.getSelectionRange())
      })), r.default.bind(e, "focus", (function () {
        this.disabled || this.selectionRange && this.selectionRange.start !== this.selectionRange.end && this.setSelectionRange(this.selectionRange.start, this.selectionRange.end)
      })), r.default.bind(e, "mouseup", (function () {
        this.disabled || this._triggerSelectEvent()
      })), r.default.bind(e, "keydown", (function (e) {
        this.disabled || (e.keyCode !== s.ENTER || e.shiftKey ? e.keyCode === s.A && r.default.hasCtrlKey(e) ? (r.default.preventEvent(e), this.setSelectionRange(0, this.value.length), this._triggerSelectEvent()) : a.hasKeyCombination(e, s.E, {
          shiftKey: !0,
          ctrlKey: !0
        }) && (r.default.preventEvent(e), this.setSelectionRange(this.getSelectionRange().start, this.value.length), this._triggerSelectEvent()) : this.dispatchEvent(r.default.createEvent("enterPressed", !0, !0)))
      })), r.default.bind(e, "keyup", (function (e) {
        this.disabled || (a.hasKeyCombination(e, s.LEFT, {
          shiftKey: !0
        }) || a.hasKeyCombination(e, s.RIGHT, {
          shiftKey: !0
        })) && this._triggerSelectEvent()
      })), r.default.bind(e, "mousedown", (function () {
        this.disabled || (this._selectionStarted = !0)
      })), r.default.bind(e, "mouseleave", (function () {
        this.disabled || this._selectionStarted && this._triggerSelectEvent()
      })), e._triggerSelectEvent = function () {
        var e = this.getSelectionRange();
        e.start !== e.end && this.dispatchEvent(r.default.createEvent("select", !0, !0)), this._selectionStarted = !1
      }, e._insertSelectionText = function (e) {
        var t = window.getSelection();
        if (0 !== t.rangeCount) {
          var n = t.getRangeAt(0);
          r.default.normalizeRangeBoundsForElement(n, this), n.deleteContents(), n.insertNode(document.createTextNode(e)), n.collapse(!1), this.dispatchEvent(r.default.createEvent("input", !0, !0))
        }
      }, r.default.IE && r.default.bind(e, "DOMSubtreeModified", (function () {
        this.disabled || this.dispatchEvent(r.default.createEvent("input", !0, !0))
      })), r.default.bind(e, "keypress", (function () {
        this.disabled || this.dispatchEvent(r.default.createEvent("input", !0, !0))
      })), e.getRangeData = function (e) {
        for (var t = e, n = this, i = 0, r = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1); r.nextNode() && t > (i = (n = r.currentNode).length);) t -= i;
        return {
          node: n,
          offset: t
        }
      }, e.getInnerText = function () {
        for (var e = "", t = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1); t.nextNode();) e += t.currentNode.data;
        return e
      }, e.getSelectionRange = function () {
        var e, t, n = {
            end: 0,
            start: 0
          },
          i = window.getSelection();
        return i.rangeCount > 0 && ((e = (t = i.getRangeAt(0)).cloneRange()).selectNodeContents(this), e.setEnd(t.endContainer, t.endOffset), n.end = e.toString().length, e.setEnd(t.startContainer, t.startOffset), n.start = e.toString().length), n
      }, e.setSelectionRange = function (e, t) {
        var n = e,
          i = t,
          r = document.createRange(),
          o = window.getSelection(),
          s = this.value.length;
        i < 0 && (i = 0), n < 0 && (n = 0), i > s && (i = s), n > s && (n = s), n > i && (n = i);
        var a = this.getRangeData(i);
        return r.setEnd(a.node, a.offset), a = this.getRangeData(n), r.setStart(a.node, a.offset), o.removeAllRanges(), o.addRange(r), this
      }, Object.defineProperty(e, "value", {
        get: function () {
          return this.getInnerText()
        },
        set: function (e) {
          var t = e.length;
          this.textContent = "", this.appendChild(document.createTextNode(e)), this.setSelectionRange(t, t)
        }
      }), Object.defineProperty(e, "disabled", {
        get: function () {
          return !this.isContentEditable
        },
        set: function (e) {
          this.contentEditable = !e
        }
      }), Object.defineProperty(e, "selectionEnd", {
        get: function () {
          return this.getSelectionRange().end
        },
        set: function (e) {
          this.setSelectionRange(e, e)
        }
      }), Object.defineProperty(e, "selectionStart", {
        get: function () {
          return this.getSelectionRange().start
        },
        set: function (e) {
          this.setSelectionRange(e, e)
        }
      }), e
    },
    hasKeyCombination: function (e, t, n) {
      var i, r = !0,
        o = !t || e.keyCode === t;
      for (i in n)
        if (!e[i]) {
          r = !1;
          break
        } return e && o && r
    },
    fakeAreaSupported: function () {
      var e = document.createElement("div");
      try {
        return e.contentEditable = "plaintext-only", !0
      } catch (e) {}
      return !1
    }()
  });
  t.InputView = a
}, function (e, t, n) {
  "use strict";
  var i = n(38),
    r = n(1),
    o = n(15),
    s = n(16),
    a = n(40),
    c = n(137),
    u = n(48),
    l = n(89),
    d = n(2)("iterator"),
    f = !([].keys && "next" in [].keys()),
    p = function () {
      return this
    };
  e.exports = function (e, t, n, h, g, m, _) {
    c(n, t, h);
    var v, E, T, y = function (e) {
        if (!f && e in C) return C[e];
        switch (e) {
          case "keys":
          case "values":
            return function () {
              return new n(this, e)
            }
        }
        return function () {
          return new n(this, e)
        }
      },
      S = t + " Iterator",
      b = "values" == g,
      O = !1,
      C = e.prototype,
      P = C[d] || C["@@iterator"] || g && C[g],
      I = P || y(g),
      L = g ? b ? y("entries") : I : void 0,
      R = "Array" == t && C.entries || P;
    if (R && (T = l(R.call(new e))) !== Object.prototype && T.next && (u(T, S, !0), i || "function" == typeof T[d] || s(T, d, p)), b && P && "values" !== P.name && (O = !0, I = function () {
      return P.call(this)
    }), i && !_ || !f && !O && C[d] || s(C, d, I), a[t] = I, a[S] = p, g)
      if (v = {
        values: b ? I : y("values"),
        keys: m ? I : y("keys"),
        entries: L
      }, _)
        for (E in v) E in C || o(C, E, v[E]);
      else r(r.P + r.F * (f || O), t, v);
    return v
  }
}, function (e, t, n) {
  "use strict";
  var i = n(4),
    r = n(9),
    o = n(6),
    s = n(2)("species");
  e.exports = function (e) {
    var t = i[e];
    o && t && !t[s] && r.f(t, s, {
      configurable: !0,
      get: function () {
        return this
      }
    })
  }
}, function (e, t, n) {
  var i = n(10),
    r = n(63).onFreeze;
  n(90)("freeze", (function (e) {
    return function (t) {
      return e && i(t) ? e(r(t)) : t
    }
  }))
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(77);
  i(i.P + i.F * n(78)("includes"), "String", {
    includes: function (e) {
      return !!~r(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function (e, t, n) {
  var i = n(4),
    r = n(88),
    o = n(9).f,
    s = n(31).f,
    a = n(74),
    c = n(56),
    u = i.RegExp,
    l = u,
    d = u.prototype,
    f = /a/g,
    p = /a/g,
    h = new u(f) !== f;
  if (n(6) && (!h || n(5)((function () {
    return p[n(2)("match")] = !1, u(f) != f || u(p) == p || "/a/i" != u(f, "i")
  })))) {
    u = function (e, t) {
      var n = this instanceof u,
        i = a(e),
        o = void 0 === t;
      return !n && i && e.constructor === u && o ? e : r(h ? new l(i && !o ? e.source : e, t) : l((i = e instanceof u) ? e.source : e, i && o ? c.call(e) : t), n ? this : d, u)
    };
    for (var g = function (e) {
      e in u || o(u, e, {
        configurable: !0,
        get: function () {
          return l[e]
        },
        set: function (t) {
          l[e] = t
        }
      })
    }, m = s(l), _ = 0; m.length > _;) g(m[_++]);
    d.constructor = u, u.prototype = d, n(15)(i, "RegExp", u)
  }
  n(96)("RegExp")
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(8),
    o = n(77),
    s = "".startsWith;
  i(i.P + i.F * n(78)("startsWith"), "String", {
    startsWith: function (e) {
      var t = o(this, e, "startsWith"),
        n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        i = String(e);
      return s ? s.call(t, i, n) : t.slice(n, n + i.length) === i
    }
  })
}, function (e, t, n) {
  "use strict";
  var i = n(19),
    r = n(45),
    o = n(8);
  e.exports = function (e) {
    for (var t = i(this), n = o(t.length), s = arguments.length, a = r(s > 1 ? arguments[1] : void 0, n), c = s > 2 ? arguments[2] : void 0, u = void 0 === c ? n : r(c, n); u > a;) t[a++] = e;
    return t
  }
}, function (e, t, n) {
  var i = n(36);
  e.exports = Array.isArray || function (e) {
    return "Array" == i(e)
  }
}, function (e, t, n) {
  e.exports = !n(6) && !n(5)((function () {
    return 7 != Object.defineProperty(n(104)("div"), "a", {
      get: function () {
        return 7
      }
    }).a
  }))
}, function (e, t, n) {
  var i = n(10),
    r = n(4).document,
    o = i(r) && i(r.createElement);
  e.exports = function (e) {
    return o ? r.createElement(e) : {}
  }
}, function (e, t, n) {
  var i = n(21),
    r = n(25),
    o = n(71)(!1),
    s = n(72)("IE_PROTO");
  e.exports = function (e, t) {
    var n, a = r(e),
      c = 0,
      u = [];
    for (n in a) n != s && i(a, n) && u.push(n);
    for (; t.length > c;) i(a, n = t[c++]) && (~o(u, n) || u.push(n));
    return u
  }
}, function (e, t, n) {
  var i = n(27),
    r = n(33);
  e.exports = function (e) {
    return function (t, n) {
      var o, s, a = String(r(t)),
        c = i(n),
        u = a.length;
      return c < 0 || c >= u ? e ? "" : void 0 : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? e ? a.charAt(c) : o : e ? a.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536
    }
  }
}, function (e, t, n) {
  var i = n(4).document;
  e.exports = i && i.documentElement
}, function (e, t, n) {
  t.f = n(2)
}, function (e, t, n) {
  var i = n(7),
    r = n(84),
    o = n(2)("species");
  e.exports = function (e, t) {
    var n, s = i(e).constructor;
    return void 0 === s || null == (n = i(s)[o]) ? t : r(n)
  }
}, function (e, t) {
  e.exports = Object.is || function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }
}, function (e, t, n) {
  n(6) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
    configurable: !0,
    get: n(56)
  })
}, function (e, t, n) {
  for (var i, r = n(4), o = n(16), s = n(28), a = s("typed_array"), c = s("view"), u = !(!r.ArrayBuffer || !r.DataView), l = u, d = 0, f = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); d < 9;)(i = r[f[d++]]) ? (o(i.prototype, a, !0), o(i.prototype, c, !0)) : l = !1;
  e.exports = {
    ABV: u,
    CONSTR: l,
    TYPED: a,
    VIEW: c
  }
}, function (e, t, n) {
  var i = n(27),
    r = n(8);
  e.exports = function (e) {
    if (void 0 === e) return 0;
    var t = i(e),
      n = r(t);
    if (t !== n) throw RangeError("Wrong length!");
    return n
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getTrackerByNamespace = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    o.has(e) || o.set(e, new r.Emitter);
    var t = o.get(e);
    return {
      $track: function (e) {
        try {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
          t.emit.apply(t, [e].concat(r))
        } catch (e) {
          (0, i.logError)(e)
        }
      },
      on: function (e, n) {
        return t.on(e, n)
      }
    }
  }, n(189), n(26), n(14), n(13), n(23);
  var i = n(80),
    r = n(30),
    o = new Map
}, function (e, t, n) {
  var i = n(10);
  e.exports = function (e, t) {
    if (!i(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
    return e
  }
}, function (e, t, n) {
  "use strict";
  var i = n(9),
    r = n(39);
  e.exports = function (e, t, n) {
    t in e ? i.f(e, t, r(0, n)) : e[t] = n
  }
}, function (e, t, n) {
  "use strict";
  var i = n(5);
  e.exports = function (e, t) {
    return !!e && i((function () {
      t ? e.call(null, (function () {}), 1) : e.call(null)
    }))
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  t.default = {
    XML: "text/xml",
    XML2: "application/xml",
    HTML: "text/html",
    TEXT: "text/plain",
    JSON: "application/json",
    FORM: "application/x-www-form-urlencoded"
  }
}, function (e, t, n) {
  n(145)("Uint8", 1, (function (e) {
    return function (t, n, i) {
      return e(this, t, n, i)
    }
  }))
}, function (e, t, n) {
  "use strict";
  var i = n(6),
    r = n(29),
    o = n(60),
    s = n(46),
    a = n(19),
    c = n(70),
    u = Object.assign;
  e.exports = !u || n(5)((function () {
    var e = {},
      t = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
    return e[n] = 7, i.split("").forEach((function (e) {
      t[e] = e
    })), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != i
  })) ? function (e, t) {
    for (var n = a(e), u = arguments.length, l = 1, d = o.f, f = s.f; u > l;)
      for (var p, h = c(arguments[l++]), g = d ? r(h).concat(d(h)) : r(h), m = g.length, _ = 0; m > _;) p = g[_++], i && !f.call(h, p) || (n[p] = h[p]);
    return n
  } : u
}, function (e, t, n) {
  var i = n(7);
  e.exports = function (e, t, n, r) {
    try {
      return r ? t(i(n)[0], n[1]) : t(n)
    } catch (t) {
      var o = e.return;
      throw void 0 !== o && i(o.call(e)), t
    }
  }
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(43)(5),
    o = !0;
  "find" in [] && Array(1).find((function () {
    o = !1
  })), i(i.P + i.F * o, "Array", {
    find: function (e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(58)("find")
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.URL = t.IMAGE = t.DOC = t.TOUCH = t.TEXT = void 0;
  t.TEXT = "tr-text";
  t.TOUCH = "tr-touch";
  t.DOC = "tr-doc";
  t.IMAGE = "tr-image";
  t.URL = "tr-url"
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.TranslateApplication = t.TRANSLATE_APP_EVENTS = t.A11Y_EVENTS = void 0, n(3), n(91);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(169),
    s = n(153);
  var a = {
    ACTIVATION: "focusedElementActivation",
    SELECT_ACTIVATION: "focusedSelectActivation"
  };
  t.A11Y_EVENTS = a;
  var c = {
    INIT_DONE: "initDone"
  };
  t.TRANSLATE_APP_EVENTS = c;
  var u = s.BaseApplication.extend({
    init: function () {
      var e = this;
      this.getModel().on("change", (function (t, n, i) {
        switch (t) {
          case "srcLang":
            n === this.getProperty("dstLang") && e.setDstLanguage(i.oldValue);
            break;
          case "dstLang":
            n === this.getProperty("srcLang") && e.setSrcLanguage(i.oldValue)
        }
      }))
    },
    getSettings: function () {
      return this._settings
    },
    getLangsPair: function () {
      var e = this.getModel().getProps(),
        t = e.srcLang,
        n = e.dstLang;
      return "".concat(t, "-").concat(n)
    },
    getDefaultSrcLanguage: function () {
      var e = this.getConfig();
      return e.DEFAULT_SRC_LANG ? e.DEFAULT_SRC_LANG : !e.DEFAULT_TEXT && this.getSettings().getProperty("srcLang") || u.DEFAULT_SRC_LANG
    },
    getDefaultDstLanguage: function () {
      var e = this.getConfig();
      return e.DEFAULT_DST_LANG ? e.DEFAULT_DST_LANG : !e.DEFAULT_TEXT && this.getSettings().getProperty("dstLang") || (e.UI_LANG !== u.DEFAULT_SRC_LANG ? e.UI_LANG : u.DEFAULT_DST_LANG)
    },
    getLink: function () {
      var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = this.toJSON(),
        i = {},
        o = "/";
      return t.includePathname && (o = t.pathname || window.location.pathname), e = t.absolute ? window.location.protocol + "//" + window.location.hostname + o : o, t.excludeParams ? e : (t.includeSearch && (i = r.default.fromQueryString(window.location.search.slice(1))), i.lang = n.srcLang + "-" + n.dstLang, n.trText ? i.text = n.trText : delete i.text, e + "?" + r.default.toQueryString(i))
    },
    setText: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = this.getModel(),
        i = r.default.trim(e);
      t.caret = t.caret || 0, t.oldValue = t.oldValue || "";
      var o = e.length - t.oldValue.length,
        s = Math.abs(o) > 1,
        a = e.charAt(t.caret - 1);
      return t.reason = s ? o < 0 ? "cut" : "paste" : "input", n.setProperty("text", e, t), n.setProperty("leadSpacingsCount", e.search(/\S/)), (!i || s || t.sender || o > 0 && !r.default.isAlphaOrDigit(a)) && (s || (t.reason = "\n" === a ? "enter" : "auto"), n.setProperty("trText", i, t)), this
    },
    updateTrText: function (e) {
      var t = this.getModel();
      return t.setProperty("trText", r.default.trim(t.getProperty("text")), {
        reason: e || "auto"
      }), this
    },
    swapDirection: function () {
      return this.setSrcLanguage(this.getModel().getProperty("dstLang")), this
    },
    setSrcLanguage: function (e, t) {
      return this._model.isValid("srcLang", e) && (this._model.setProperty("srcLang", e, t), this._settings && this._settings.setProperty("srcLang", e)), this
    },
    setDstLanguage: function (e, t) {
      return this._model.isValid("dstLang", e) && (this._model.setProperty("dstLang", e, t), this._settings && this._settings.setProperty("dstLang", e)), this
    },
    trackPerformance: function () {
      var e = this.getModel(),
        t = Boolean(window.config.DEFAULT_TEXT);
      e.onChange("text", (function n(i, r) {
        "url" !== r.sender && ((0, o.rumSendTimeMark)(t ? o.RUM_COUNTERS.FILLED_FIRST_TYPING : o.RUM_COUNTERS.BLANK_FIRST_TYPING), e.offChange("text", n))
      })).onChange("translation", (function n() {
        (0, o.rumSendTimeMark)(t ? o.RUM_COUNTERS.FILLED_FIRST_TRANSLATION : o.RUM_COUNTERS.BLANK_FIRST_TRANSLATION), e.offChange("translation", n)
      }))
    },
    onInitDone: function (e) {
      return this.on(c.INIT_DONE, e)
    },
    onFocusedElementActivation: function (e) {
      return this.on(a.ACTIVATION, e)
    },
    onFocusedSelectActivation: function (e) {
      return this.on(a.SELECT_ACTIVATION, e)
    },
    bindFocusActivation: function (e) {
      return this.onFocusedElementActivation((function (t) {
        t === e.getElement() && e.emit("tap")
      }))
    }
  }, {
    DEFAULT_SRC_LANG: "en",
    DEFAULT_DST_LANG: "ru",
    isHistoryAvailable: function () {
      return Boolean(window.history) && "state" in window.history
    }
  });
  t.TranslateApplication = u
}, function (e, t) {
  e.exports = function (e, t) {
    return {
      value: t,
      done: !!e
    }
  }
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(43)(6),
    o = "findIndex",
    s = !0;
  o in [] && Array(1)[o]((function () {
    s = !1
  })), i(i.P + i.F * s, "Array", {
    findIndex: function (e) {
      return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(58)(o)
}, function (e, t, n) {
  var i = n(1);
  i(i.S + i.F, "Object", {
    assign: n(120)
  })
}, function (e, t, n) {
  var i = n(1),
    r = n(131)(!0);
  i(i.S, "Object", {
    entries: function (e) {
      return r(e)
    }
  })
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.Component = void 0;
  var i = n(67),
    r = n(209).PureComponent.extend({
      getRect: function () {
        return i.View.prototype.getRect.apply(this)
      },
      hasState: function (e) {
        return i.View.prototype.hasState.apply(this, arguments)
      },
      setState: function (e, t) {
        return i.View.prototype.setState.apply(this, arguments)
      },
      setStyle: function (e, t) {
        return i.View.prototype.setStyle.apply(this, arguments)
      },
      isVisible: function () {
        return i.View.prototype.isVisible.apply(this)
      },
      isEnabled: function () {
        return i.View.prototype.isEnabled.apply(this)
      },
      getElement: function () {
        return i.View.prototype.getElement.apply(this)
      },
      getContentElement: function (e, t) {
        return i.View.prototype.getContentElement.apply(this, arguments)
      },
      setVisible: function (e) {
        return i.View.prototype.setVisible.apply(this, arguments)
      },
      setEnabled: function (e) {
        return i.View.prototype.setEnabled.apply(this, arguments)
      },
      onShow: function (e, t) {
        return i.View.prototype.onShow.apply(this, arguments)
      },
      onHide: function (e, t) {
        return i.View.prototype.onHide.apply(this, arguments)
      },
      onVisibilityChanged: function (e, t) {
        return i.View.prototype.onVisibilityChanged.apply(this, arguments)
      },
      onEnableChanged: function (e, t) {
        return i.View.prototype.onEnableChanged.apply(this, arguments)
      },
      onStateSet: function (e, t, n) {
        return i.View.prototype.onStateSet.apply(this, arguments)
      },
      onStateChanged: function (e, t, n) {
        return i.View.prototype.onStateChanged.apply(this, arguments)
      }
    });
  t.Component = r
}, function (e, t, n) {
  "use strict";
  n(24), n(26), n(14), n(13), n(23), Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.tpl = function (e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return e.reduce((function (e, t, i) {
      return "".concat(e).concat(t).concat(n[i] || "")
    }), "").trim()
  }, t.Template = void 0, n(34), n(99), n(22), n(3), n(17), n(66);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(50);

  function s(e) {
    return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  var a = {},
    c = o.Base.extend({
      init: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!e || !r.default.isString(e)) throw new Error("Bad template!");
        this._tags = c.prepareTags(t.tags), this._tokens = c.parseTemplate(e, this._tags)
      },
      compileTemplate: function (e, t) {
        return c.renderTokens(this._tokens, e, {
          tags: this._tags,
          partials: t
        })
      }
    }, {
      cache: {},
      defaultTags: ["{{", "}}"],
      prepareTags: function (e) {
        var t = e;
        return r.default.isString(t) && (t = r.default.getValueTokens(t, 2)), r.default.isArray(t) ? t : null
      },
      parseTemplate: function (e, t) {
        var n = [],
          i = [],
          o = t || this.defaultTags,
          s = e.replace(new RegExp("\\}?" + r.default.escapeRegExp(o[1]), "g"), o[0]);
        return r.default.forEach(s.split(o[0]), (function (e, t) {
          if (e)
            if (t % 2 != 0) {
              var o = e.charAt(0),
                s = r.default.trim(e.slice(1));
              switch (o) {
                case "!":
                  break;
                case "#":
                case "@":
                case "?":
                case "^":
                case "*":
                  var a = [];
                  i.push({
                    type: o,
                    name: s,
                    value: a
                  }), n.push({
                    name: s,
                    root: i
                  }), i = a;
                  break;
                case ">":
                  i.push({
                    type: o,
                    name: s
                  });
                  break;
                case "&":
                case "{":
                  i.push({
                    type: "&",
                    name: s
                  });
                  break;
                case "/":
                  var c = n.pop();
                  if (!c) throw new Error('Unopened template section "' + s + '"!');
                  if (s !== c.name) throw new Error('Unclosed template section "' + c.name + '"!');
                  i = c.root;
                  break;
                default:
                  i.push({
                    type: "name",
                    name: r.default.trim(e)
                  })
              }
            } else i.push({
              type: "text",
              value: e
            })
        })), i
      },
      getContextValue: function (e, t) {
        var n, i, o, s;
        if (e.indexOf(".") > 0)
          for (n = 0, i = t, s = (o = e.split(".")).length; i && n < s;) i = i[o[n++]];
        else i = t[e];
        return r.default.isFunction(i) && (i = i.call(t)), i
      },
      log: function (e, t) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
          i = t.name,
          r = t.type,
          o = "".concat(r).concat(i, ":").concat(e),
          s = {
            "@": "Array",
            "?": "Boolean",
            "*": "Object"
          } [r];
        if (!(o in a)) {
          a[o] = !0;
          var c = "Type of {{".concat(r).concat(i, "}} is ").concat(n, ". ") + "Expected to be ".concat(s),
            u = ["tr-text", "tr-touch"].includes(window.config.SRV) ? .01 : .1;
          0, Math.random() < u && setTimeout((function () {
            throw new Error(c)
          }), 100)
        }
      },
      renderTokens: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = this,
          o = [];
        return r.default.forEach(e, (function (e) {
          var a;
          switch (e.type) {
            case "^":
              a = i.getContextValue(e.name, t), r.default.isEmpty(a) && o.push(i.renderTokens(e.value, t, n));
              break;
            case "#":
            case "?":
            case "@":
            case "*":
              if (a = i.getContextValue(e.name, t), r.default.isEmpty(a)) return;
              var c = s(a);
              Array.isArray(a) ? "@" !== e.type && i.log("array", e) : "boolean" === c ? "?" !== e.type && i.log(c, e) : "object" === c ? "*" !== e.type && i.log(c, e) : "@" === e.type && i.log(c, e), r.default.isArray(a) ? r.default.forEach(a, (function (t) {
                var s = r.default.isObject(t) ? t : {
                  ".": t
                };
                o.push(i.renderTokens(e.value, s, n))
              })) : o.push(i.renderTokens(e.value, r.default.isObject(a) ? a : t, n));
              break;
            case ">":
              if (!r.default.isObject(n.partials)) return;
              if (!(a = i.getContextValue(e.name, n.partials)) || !r.default.isString(a)) return;
              o.push(i.renderTokens(i.parseTemplate(a, n.tags), t, n));
              break;
            case "&":
            case "name":
              if (a = i.getContextValue(e.name, t), r.default.isNullOrUndefined(a)) return;
              a = String(a), o.push("&" === e.type ? a : r.default.escapeHTML(a));
              break;
            case "text":
              o.push(e.value)
          }
        })), o.join("")
      }
    });
  t.Template = c
}, function (e, t, n) {
  var i = n(6),
    r = n(29),
    o = n(25),
    s = n(46).f;
  e.exports = function (e) {
    return function (t) {
      for (var n, a = o(t), c = r(a), u = c.length, l = 0, d = []; u > l;) n = c[l++], i && !s.call(a, n) || d.push(e ? [n, a[n]] : a[n]);
      return d
    }
  }
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.parseContentDisposition = function (e) {
    var t = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(e);
    if (null != t && t[1]) {
      var n = t[1].toUpperCase().startsWith("UTF-8''"),
        i = t[1].slice(n ? "UTF-8''".length : 0).replace(/['"]/g, "");
      return n ? decodeURIComponent(i) : i
    }
    return null
  }, t.HTTPResponse = t.HEADER_NAMES = void 0, n(22), n(100), n(34), n(3);
  var i = s(n(0)),
    r = n(50),
    o = s(n(118));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.HEADER_NAMES = {
    CONTENT_DISPOSITION: "content-disposition",
    CONTENT_TYPE: "content-type"
  };
  var a = r.Base.extend({
    init: function (e) {
      var t = e.getResponseHeader("Content-Type");
      this.code = e.status, this.type = t ? t.split(";")[0] : "", this.text = e.responseType && e.responseType !== a.types.TEXT ? "" : e.responseText, this.body = this.text ? a.parseResponse(e, this.type) : e.response || null, this.message = e.statusText, this.headers = a.parseResponseHeaders(e.getAllResponseHeaders())
    }
  }, {
    types: {
      BLOB: "blob",
      JSON: "json",
      TEXT: "text",
      DOCUMENT: "document",
      ARRAYBUFFER: "arraybuffer"
    },
    parseResponse: function (e, t) {
      switch (t) {
        case o.default.XML:
        case o.default.XML2:
          return e.responseXML;
        case o.default.TEXT:
          return e.responseText;
        case o.default.JSON:
          return JSON.parse(e.responseText);
        case o.default.FORM:
          return i.default.fromQueryString(e.responseText);
        default:
          return null
      }
    },
    parseResponseHeaders: function (e) {
      var t = {};
      return e ? (i.default.trim(e).split("\n").forEach((function (e) {
        var n = e.split(":");
        t[i.default.trim(n[0]).toLowerCase()] = i.default.trim(n[1])
      })), t) : t
    }
  });
  t.HTTPResponse = a
}, function (e, t, n) {
  var i = n(134);
  e.exports = function (e, t) {
    return new(i(e))(t)
  }
}, function (e, t, n) {
  var i = n(10),
    r = n(102),
    o = n(2)("species");
  e.exports = function (e) {
    var t;
    return r(e) && ("function" != typeof (t = e.constructor) || t !== Array && !r(t.prototype) || (t = void 0), i(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
  }
}, function (e, t, n) {
  e.exports = n(53)("native-function-to-string", Function.toString)
}, function (e, t, n) {
  var i = n(10),
    r = n(7),
    o = function (e, t) {
      if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
  e.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, i) {
      try {
        (i = n(41)(Function.call, n(42).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
      } catch (e) {
        t = !0
      }
      return function (e, n) {
        return o(e, n), t ? e.__proto__ = n : i(e, n), e
      }
    }({}, !1) : void 0),
    check: o
  }
}, function (e, t, n) {
  "use strict";
  var i = n(49),
    r = n(39),
    o = n(48),
    s = {};
  n(16)(s, n(2)("iterator"), (function () {
    return this
  })), e.exports = function (e, t, n) {
    e.prototype = i(s, {
      next: r(1, n)
    }), o(e, t + " Iterator")
  }
}, function (e, t, n) {
  var i = n(9),
    r = n(7),
    o = n(29);
  e.exports = n(6) ? Object.defineProperties : function (e, t) {
    r(e);
    for (var n, s = o(t), a = s.length, c = 0; a > c;) i.f(e, n = s[c++], t[n]);
    return e
  }
}, function (e, t, n) {
  var i = n(4),
    r = n(37),
    o = n(38),
    s = n(108),
    a = n(9).f;
  e.exports = function (e) {
    var t = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
    "_" == e.charAt(0) || e in t || a(t, e, {
      value: s.f(e)
    })
  }
}, function (e, t, n) {
  var i = n(29),
    r = n(60),
    o = n(46);
  e.exports = function (e) {
    var t = i(e),
      n = r.f;
    if (n)
      for (var s, a = n(e), c = o.f, u = 0; a.length > u;) c.call(e, s = a[u++]) && t.push(s);
    return t
  }
}, function (e, t, n) {
  var i = n(25),
    r = n(31).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  e.exports.f = function (e) {
    return s && "[object Window]" == o.call(e) ? function (e) {
      try {
        return r(e)
      } catch (e) {
        return s.slice()
      }
    }(e) : r(i(e))
  }
}, function (e, t, n) {
  "use strict";
  var i = n(76);
  n(1)({
    target: "RegExp",
    proto: !0,
    forced: i !== /./.exec
  }, {
    exec: i
  })
}, function (e, t, n) {
  var i = n(1);
  i(i.S, "Object", {
    is: n(110)
  })
}, function (e, t, n) {
  "use strict";
  var i = n(1),
    r = n(8),
    o = n(77),
    s = "".endsWith;
  i(i.P + i.F * n(78)("endsWith"), "String", {
    endsWith: function (e) {
      var t = o(this, e, "endsWith"),
        n = arguments.length > 1 ? arguments[1] : void 0,
        i = r(t.length),
        a = void 0 === n ? i : Math.min(r(n), i),
        c = String(e);
      return s ? s.call(t, c, a) : t.slice(a - c.length, a) === c
    }
  })
}, function (e, t, n) {
  "use strict";
  if (n(6)) {
    var i = n(38),
      r = n(4),
      o = n(5),
      s = n(1),
      a = n(112),
      c = n(146),
      u = n(41),
      l = n(65),
      d = n(39),
      f = n(16),
      p = n(64),
      h = n(27),
      g = n(8),
      m = n(113),
      _ = n(45),
      v = n(44),
      E = n(21),
      T = n(54),
      y = n(10),
      S = n(19),
      b = n(85),
      O = n(49),
      C = n(89),
      P = n(31).f,
      I = n(86),
      L = n(28),
      R = n(2),
      A = n(43),
      x = n(71),
      N = n(109),
      w = n(13),
      D = n(40),
      M = n(87),
      V = n(96),
      k = n(101),
      U = n(147),
      H = n(9),
      B = n(42),
      j = H.f,
      F = B.f,
      G = r.RangeError,
      Y = r.TypeError,
      W = r.Uint8Array,
      K = Array.prototype,
      X = c.ArrayBuffer,
      q = c.DataView,
      z = A(0),
      J = A(2),
      Q = A(3),
      Z = A(4),
      $ = A(5),
      ee = A(6),
      te = x(!0),
      ne = x(!1),
      ie = w.values,
      re = w.keys,
      oe = w.entries,
      se = K.lastIndexOf,
      ae = K.reduce,
      ce = K.reduceRight,
      ue = K.join,
      le = K.sort,
      de = K.slice,
      fe = K.toString,
      pe = K.toLocaleString,
      he = R("iterator"),
      ge = R("toStringTag"),
      me = L("typed_constructor"),
      _e = L("def_constructor"),
      ve = a.CONSTR,
      Ee = a.TYPED,
      Te = a.VIEW,
      ye = A(1, (function (e, t) {
        return Pe(N(e, e[_e]), t)
      })),
      Se = o((function () {
        return 1 === new W(new Uint16Array([1]).buffer)[0]
      })),
      be = !!W && !!W.prototype.set && o((function () {
        new W(1).set({})
      })),
      Oe = function (e, t) {
        var n = h(e);
        if (n < 0 || n % t) throw G("Wrong offset!");
        return n
      },
      Ce = function (e) {
        if (y(e) && Ee in e) return e;
        throw Y(e + " is not a typed array!")
      },
      Pe = function (e, t) {
        if (!y(e) || !(me in e)) throw Y("It is not a typed array constructor!");
        return new e(t)
      },
      Ie = function (e, t) {
        return Le(N(e, e[_e]), t)
      },
      Le = function (e, t) {
        for (var n = 0, i = t.length, r = Pe(e, i); i > n;) r[n] = t[n++];
        return r
      },
      Re = function (e, t, n) {
        j(e, t, {
          get: function () {
            return this._d[n]
          }
        })
      },
      Ae = function (e) {
        var t, n, i, r, o, s, a = S(e),
          c = arguments.length,
          l = c > 1 ? arguments[1] : void 0,
          d = void 0 !== l,
          f = I(a);
        if (null != f && !b(f)) {
          for (s = f.call(a), i = [], t = 0; !(o = s.next()).done; t++) i.push(o.value);
          a = i
        }
        for (d && c > 2 && (l = u(l, arguments[2], 2)), t = 0, n = g(a.length), r = Pe(this, n); n > t; t++) r[t] = d ? l(a[t], t) : a[t];
        return r
      },
      xe = function () {
        for (var e = 0, t = arguments.length, n = Pe(this, t); t > e;) n[e] = arguments[e++];
        return n
      },
      Ne = !!W && o((function () {
        pe.call(new W(1))
      })),
      we = function () {
        return pe.apply(Ne ? de.call(Ce(this)) : Ce(this), arguments)
      },
      De = {
        copyWithin: function (e, t) {
          return U.call(Ce(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        every: function (e) {
          return Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        fill: function (e) {
          return k.apply(Ce(this), arguments)
        },
        filter: function (e) {
          return Ie(this, J(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0))
        },
        find: function (e) {
          return $(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        findIndex: function (e) {
          return ee(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        forEach: function (e) {
          z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        indexOf: function (e) {
          return ne(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        includes: function (e) {
          return te(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        join: function (e) {
          return ue.apply(Ce(this), arguments)
        },
        lastIndexOf: function (e) {
          return se.apply(Ce(this), arguments)
        },
        map: function (e) {
          return ye(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        reduce: function (e) {
          return ae.apply(Ce(this), arguments)
        },
        reduceRight: function (e) {
          return ce.apply(Ce(this), arguments)
        },
        reverse: function () {
          for (var e, t = Ce(this).length, n = Math.floor(t / 2), i = 0; i < n;) e = this[i], this[i++] = this[--t], this[t] = e;
          return this
        },
        some: function (e) {
          return Q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        sort: function (e) {
          return le.call(Ce(this), e)
        },
        subarray: function (e, t) {
          var n = Ce(this),
            i = n.length,
            r = _(e, i);
          return new(N(n, n[_e]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, g((void 0 === t ? i : _(t, i)) - r))
        }
      },
      Me = function (e, t) {
        return Ie(this, de.call(Ce(this), e, t))
      },
      Ve = function (e) {
        Ce(this);
        var t = Oe(arguments[1], 1),
          n = this.length,
          i = S(e),
          r = g(i.length),
          o = 0;
        if (r + t > n) throw G("Wrong length!");
        for (; o < r;) this[t + o] = i[o++]
      },
      ke = {
        entries: function () {
          return oe.call(Ce(this))
        },
        keys: function () {
          return re.call(Ce(this))
        },
        values: function () {
          return ie.call(Ce(this))
        }
      },
      Ue = function (e, t) {
        return y(e) && e[Ee] && "symbol" != typeof t && t in e && String(+t) == String(t)
      },
      He = function (e, t) {
        return Ue(e, t = v(t, !0)) ? d(2, e[t]) : F(e, t)
      },
      Be = function (e, t, n) {
        return !(Ue(e, t = v(t, !0)) && y(n) && E(n, "value")) || E(n, "get") || E(n, "set") || n.configurable || E(n, "writable") && !n.writable || E(n, "enumerable") && !n.enumerable ? j(e, t, n) : (e[t] = n.value, e)
      };
    ve || (B.f = He, H.f = Be), s(s.S + s.F * !ve, "Object", {
      getOwnPropertyDescriptor: He,
      defineProperty: Be
    }), o((function () {
      fe.call({})
    })) && (fe = pe = function () {
      return ue.call(this)
    });
    var je = p({}, De);
    p(je, ke), f(je, he, ke.values), p(je, {
      slice: Me,
      set: Ve,
      constructor: function () {},
      toString: fe,
      toLocaleString: we
    }), Re(je, "buffer", "b"), Re(je, "byteOffset", "o"), Re(je, "byteLength", "l"), Re(je, "length", "e"), j(je, ge, {
      get: function () {
        return this[Ee]
      }
    }), e.exports = function (e, t, n, c) {
      var u = e + ((c = !!c) ? "Clamped" : "") + "Array",
        d = "get" + e,
        p = "set" + e,
        h = r[u],
        _ = h || {},
        v = h && C(h),
        E = !h || !a.ABV,
        S = {},
        b = h && h.prototype,
        I = function (e, n) {
          j(e, n, {
            get: function () {
              return function (e, n) {
                var i = e._d;
                return i.v[d](n * t + i.o, Se)
              }(this, n)
            },
            set: function (e) {
              return function (e, n, i) {
                var r = e._d;
                c && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[p](n * t + r.o, i, Se)
              }(this, n, e)
            },
            enumerable: !0
          })
        };
      E ? (h = n((function (e, n, i, r) {
        l(e, h, u, "_d");
        var o, s, a, c, d = 0,
          p = 0;
        if (y(n)) {
          if (!(n instanceof X || "ArrayBuffer" == (c = T(n)) || "SharedArrayBuffer" == c)) return Ee in n ? Le(h, n) : Ae.call(h, n);
          o = n, p = Oe(i, t);
          var _ = n.byteLength;
          if (void 0 === r) {
            if (_ % t) throw G("Wrong length!");
            if ((s = _ - p) < 0) throw G("Wrong length!")
          } else if ((s = g(r) * t) + p > _) throw G("Wrong length!");
          a = s / t
        } else a = m(n), o = new X(s = a * t);
        for (f(e, "_d", {
          b: o,
          o: p,
          l: s,
          e: a,
          v: new q(o)
        }); d < a;) I(e, d++)
      })), b = h.prototype = O(je), f(b, "constructor", h)) : o((function () {
        h(1)
      })) && o((function () {
        new h(-1)
      })) && M((function (e) {
        new h, new h(null), new h(1.5), new h(e)
      }), !0) || (h = n((function (e, n, i, r) {
        var o;
        return l(e, h, u), y(n) ? n instanceof X || "ArrayBuffer" == (o = T(n)) || "SharedArrayBuffer" == o ? void 0 !== r ? new _(n, Oe(i, t), r) : void 0 !== i ? new _(n, Oe(i, t)) : new _(n) : Ee in n ? Le(h, n) : Ae.call(h, n) : new _(m(n))
      })), z(v !== Function.prototype ? P(_).concat(P(v)) : P(_), (function (e) {
        e in h || f(h, e, _[e])
      })), h.prototype = b, i || (b.constructor = h));
      var L = b[he],
        R = !!L && ("values" == L.name || null == L.name),
        A = ke.values;
      f(h, me, !0), f(b, Ee, u), f(b, Te, !0), f(b, _e, h), (c ? new h(1)[ge] == u : ge in b) || j(b, ge, {
        get: function () {
          return u
        }
      }), S[u] = h, s(s.G + s.W + s.F * (h != _), S), s(s.S, u, {
        BYTES_PER_ELEMENT: t
      }), s(s.S + s.F * o((function () {
        _.of.call(h, 1)
      })), u, {
        from: Ae,
        of: xe
      }), "BYTES_PER_ELEMENT" in b || f(b, "BYTES_PER_ELEMENT", t), s(s.P, u, De), V(u), s(s.P + s.F * be, u, {
        set: Ve
      }), s(s.P + s.F * !R, u, ke), i || b.toString == fe || (b.toString = fe), s(s.P + s.F * o((function () {
        new h(1).slice()
      })), u, {
        slice: Me
      }), s(s.P + s.F * (o((function () {
        return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
      })) || !o((function () {
        b.toLocaleString.call([1, 2])
      }))), u, {
        toLocaleString: we
      }), D[u] = R ? L : A, i || R || f(b, he, A)
    }
  } else e.exports = function () {}
}, function (e, t, n) {
  "use strict";
  var i = n(4),
    r = n(6),
    o = n(38),
    s = n(112),
    a = n(16),
    c = n(64),
    u = n(5),
    l = n(65),
    d = n(27),
    f = n(8),
    p = n(113),
    h = n(31).f,
    g = n(9).f,
    m = n(101),
    _ = n(48),
    v = i.ArrayBuffer,
    E = i.DataView,
    T = i.Math,
    y = i.RangeError,
    S = i.Infinity,
    b = v,
    O = T.abs,
    C = T.pow,
    P = T.floor,
    I = T.log,
    L = T.LN2,
    R = r ? "_b" : "buffer",
    A = r ? "_l" : "byteLength",
    x = r ? "_o" : "byteOffset";

  function N(e, t, n) {
    var i, r, o, s = new Array(n),
      a = 8 * n - t - 1,
      c = (1 << a) - 1,
      u = c >> 1,
      l = 23 === t ? C(2, -24) - C(2, -77) : 0,
      d = 0,
      f = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    for ((e = O(e)) != e || e === S ? (r = e != e ? 1 : 0, i = c) : (i = P(I(e) / L), e * (o = C(2, -i)) < 1 && (i--, o *= 2), (e += i + u >= 1 ? l / o : l * C(2, 1 - u)) * o >= 2 && (i++, o /= 2), i + u >= c ? (r = 0, i = c) : i + u >= 1 ? (r = (e * o - 1) * C(2, t), i += u) : (r = e * C(2, u - 1) * C(2, t), i = 0)); t >= 8; s[d++] = 255 & r, r /= 256, t -= 8);
    for (i = i << t | r, a += t; a > 0; s[d++] = 255 & i, i /= 256, a -= 8);
    return s[--d] |= 128 * f, s
  }

  function w(e, t, n) {
    var i, r = 8 * n - t - 1,
      o = (1 << r) - 1,
      s = o >> 1,
      a = r - 7,
      c = n - 1,
      u = e[c--],
      l = 127 & u;
    for (u >>= 7; a > 0; l = 256 * l + e[c], c--, a -= 8);
    for (i = l & (1 << -a) - 1, l >>= -a, a += t; a > 0; i = 256 * i + e[c], c--, a -= 8);
    if (0 === l) l = 1 - s;
    else {
      if (l === o) return i ? NaN : u ? -S : S;
      i += C(2, t), l -= s
    }
    return (u ? -1 : 1) * i * C(2, l - t)
  }

  function D(e) {
    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
  }

  function M(e) {
    return [255 & e]
  }

  function V(e) {
    return [255 & e, e >> 8 & 255]
  }

  function k(e) {
    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
  }

  function U(e) {
    return N(e, 52, 8)
  }

  function H(e) {
    return N(e, 23, 4)
  }

  function B(e, t, n) {
    g(e.prototype, t, {
      get: function () {
        return this[n]
      }
    })
  }

  function j(e, t, n, i) {
    var r = p(+n);
    if (r + t > e[A]) throw y("Wrong index!");
    var o = e[R]._b,
      s = r + e[x],
      a = o.slice(s, s + t);
    return i ? a : a.reverse()
  }

  function F(e, t, n, i, r, o) {
    var s = p(+n);
    if (s + t > e[A]) throw y("Wrong index!");
    for (var a = e[R]._b, c = s + e[x], u = i(+r), l = 0; l < t; l++) a[c + l] = u[o ? l : t - l - 1]
  }
  if (s.ABV) {
    if (!u((function () {
      v(1)
    })) || !u((function () {
      new v(-1)
    })) || u((function () {
      return new v, new v(1.5), new v(NaN), "ArrayBuffer" != v.name
    }))) {
      for (var G, Y = (v = function (e) {
        return l(this, v), new b(p(e))
      }).prototype = b.prototype, W = h(b), K = 0; W.length > K;)(G = W[K++]) in v || a(v, G, b[G]);
      o || (Y.constructor = v)
    }
    var X = new E(new v(2)),
      q = E.prototype.setInt8;
    X.setInt8(0, 2147483648), X.setInt8(1, 2147483649), !X.getInt8(0) && X.getInt8(1) || c(E.prototype, {
      setInt8: function (e, t) {
        q.call(this, e, t << 24 >> 24)
      },
      setUint8: function (e, t) {
        q.call(this, e, t << 24 >> 24)
      }
    }, !0)
  } else v = function (e) {
    l(this, v, "ArrayBuffer");
    var t = p(e);
    this._b = m.call(new Array(t), 0), this[A] = t
  }, E = function (e, t, n) {
    l(this, E, "DataView"), l(e, v, "DataView");
    var i = e[A],
      r = d(t);
    if (r < 0 || r > i) throw y("Wrong offset!");
    if (r + (n = void 0 === n ? i - r : f(n)) > i) throw y("Wrong length!");
    this[R] = e, this[x] = r, this[A] = n
  }, r && (B(v, "byteLength", "_l"), B(E, "buffer", "_b"), B(E, "byteLength", "_l"), B(E, "byteOffset", "_o")), c(E.prototype, {
    getInt8: function (e) {
      return j(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function (e) {
      return j(this, 1, e)[0]
    },
    getInt16: function (e) {
      var t = j(this, 2, e, arguments[1]);
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function (e) {
      var t = j(this, 2, e, arguments[1]);
      return t[1] << 8 | t[0]
    },
    getInt32: function (e) {
      return D(j(this, 4, e, arguments[1]))
    },
    getUint32: function (e) {
      return D(j(this, 4, e, arguments[1])) >>> 0
    },
    getFloat32: function (e) {
      return w(j(this, 4, e, arguments[1]), 23, 4)
    },
    getFloat64: function (e) {
      return w(j(this, 8, e, arguments[1]), 52, 8)
    },
    setInt8: function (e, t) {
      F(this, 1, e, M, t)
    },
    setUint8: function (e, t) {
      F(this, 1, e, M, t)
    },
    setInt16: function (e, t) {
      F(this, 2, e, V, t, arguments[2])
    },
    setUint16: function (e, t) {
      F(this, 2, e, V, t, arguments[2])
    },
    setInt32: function (e, t) {
      F(this, 4, e, k, t, arguments[2])
    },
    setUint32: function (e, t) {
      F(this, 4, e, k, t, arguments[2])
    },
    setFloat32: function (e, t) {
      F(this, 4, e, H, t, arguments[2])
    },
    setFloat64: function (e, t) {
      F(this, 8, e, U, t, arguments[2])
    }
  });
  _(v, "ArrayBuffer"), _(E, "DataView"), a(E.prototype, s.VIEW, !0), t.ArrayBuffer = v, t.DataView = E
}, function (e, t, n) {
  "use strict";
  var i = n(19),
    r = n(45),
    o = n(8);
  e.exports = [].copyWithin || function (e, t) {
    var n = i(this),
      s = o(n.length),
      a = r(e, s),
      c = r(t, s),
      u = arguments.length > 2 ? arguments[2] : void 0,
      l = Math.min((void 0 === u ? s : r(u, s)) - c, s - a),
      d = 1;
    for (c < a && a < c + l && (d = -1, c += l - 1, a += l - 1); l-- > 0;) c in n ? n[a] = n[c] : delete n[a], a += d, c += d;
    return n
  }
}, function (e, t, n) {
  var i = n(1),
    r = n(33),
    o = n(5),
    s = n(149),
    a = "[" + s + "]",
    c = RegExp("^" + a + a + "*"),
    u = RegExp(a + a + "*$"),
    l = function (e, t, n) {
      var r = {},
        a = o((function () {
          return !!s[e]() || "​" != "​" [e]()
        })),
        c = r[e] = a ? t(d) : s[e];
      n && (r[n] = c), i(i.P + i.F * a, "String", r)
    },
    d = l.trim = function (e, t) {
      return e = String(r(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
    };
  e.exports = l
}, function (e, t) {
  e.exports = "\t\n\v\f\r   ᠎             　

﻿"
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  t.default = /\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d\udd75|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:[\u0023\u002a\u0030-\u0039])\ufe0f?\u20e3|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u270a\u270b])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud800\udc00|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\udeeb\udeec\udef4-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u23e9-\u23ec\u23f0\u23f3\u2640\u2642\u2695\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a]|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2694\u2696\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))/g
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  t.default = /^(https?:\/\/)?(([\w\-\u0430-\u045f]+\.)+([\w\-\u0430-\u045f]+))(:\d+)?(\/\S*)?$/i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = void 0;
  t.default = /^[a-zA-Z0-9\+\.\_\%\-]{1,256}\@[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}(\.[a-zA-Z0-9][a-zA-Z0-9\-]{0,25})+$/
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.BaseApplication = void 0, n(34);
  var i, r = (i = n(0)) && i.__esModule ? i : {
      default: i
    },
    o = n(80),
    s = n(83);
  var a = n(32).Presenter.extend({
    _activeModules: [],
    init: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this._config = e.config;
      var t = this,
        n = this.getView(),
        i = function (e) {
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++) {
            var n = e[t] + "Hidden";
            if (n in document) return n
          }
          return ""
        }(["webkit", "moz", "ms", "o"]),
        s = r.default.debounce((function () {
          t.emit("resize")
        }));
      document.addEventListener("DOMContentLoaded", (function () {
        n.setState("unresolved", !1), t.emit("pageReady")
      }), !1), window.addEventListener("load", (function e() {
        t.emit("pageLoaded"), this.removeEventListener("load", e, !1)
      }), !1), window.addEventListener("resize", s, !1), window.addEventListener("orientationchange", s, !1), i && document.addEventListener(i.replace(/hidden/i, "") + "visibilitychange", (function () {
        t.emit("visibilityChange", document[i])
      }), !1), n.on("tap", (function (e) {
        var n = this.getClosest(e.target, (function (e) {
            return e.hasAttribute("data-action")
          })),
          i = this.getClosest(e.target, (function (e) {
            return e.hasAttribute("data-tracker-goal")
          }));
        try {
          (0, o.setLatestTapEvent)(e, e.target, n)
        } catch (e) {}
        if (n) {
          var s = n.getAttribute("data-action");
          n.hasAttribute("data-no-prevent") || r.default.preventEvent(e), t.emit("action", s, n, {
            originalEvent: e
          }).emit("action:" + s, n, {
            originalEvent: e
          })
        }
        i && t.emit("track", i.getAttribute("data-tracker-goal")), (0, o.isPrevTapMiss)() && t.emit("prevTapMiss")
      }))
    },
    getConfig: function () {
      return this._config
    },
    registerModule: function (e) {
      var t = Date.now(),
        n = new e(this, this.getConfig());
      return s.logTime.module(n.moduleName || n.moduleId, Date.now() - t), this._activeModules.push(n), this
    },
    reload: function () {
      var e = this.getModel().getProperty("trText");
      this._settings.setProperty("savedText", e), window.location.href = window.location.href
    },
    reloadIfSessionExpired: function () {
      Date.now() - a.SESSION_START > a.SESSION_EXPIRATION_TIME && this.reload()
    }
  }, {
    SESSION_START: Date.now(),
    SESSION_EXPIRATION_TIME: 2592e5
  });
  t.BaseApplication = a
}, function (e, t, n) {
  "use strict";
  var i, r = n(4),
    o = n(43)(0),
    s = n(15),
    a = n(63),
    c = n(120),
    u = n(182),
    l = n(10),
    d = n(115),
    f = n(115),
    p = !r.ActiveXObject && "ActiveXObject" in r,
    h = a.getWeak,
    g = Object.isExtensible,
    m = u.ufstore,
    _ = function (e) {
      return function () {
        return e(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    },
    v = {
      get: function (e) {
        if (l(e)) {
          var t = h(e);
          return !0 === t ? m(d(this, "WeakMap")).get(e) : t ? t[this._i] : void 0
        }
      },
      set: function (e, t) {
        return u.def(d(this, "WeakMap"), e, t)
      }
    },
    E = e.exports = n(173)("WeakMap", _, v, u, !0, !0);
  f && p && (c((i = u.getConstructor(_, "WeakMap")).prototype, v), a.NEED = !0, o(["delete", "has", "get", "set"], (function (e) {
    var t = E.prototype,
      n = t[e];
    s(t, e, (function (t, r) {
      if (l(t) && !g(t)) {
        this._f || (this._f = new i);
        var o = this._f[e](t, r);
        return "set" == e ? this : o
      }
      return n.call(this, t, r)
    }))
  })))
}, function (e, t, n) {
  var i = n(41),
    r = n(121),
    o = n(85),
    s = n(7),
    a = n(8),
    c = n(86),
    u = {},
    l = {};
  (t = e.exports = function (e, t, n, d, f) {
    var p, h, g, m, _ = f ? function () {
        return e
      } : c(e),
      v = i(n, d, t ? 2 : 1),
      E = 0;
    if ("function" != typeof _) throw TypeError(e + " is not iterable!");
    if (o(_)) {
      for (p = a(e.length); p > E; E++)
        if ((m = t ? v(s(h = e[E])[0], h[1]) : v(e[E])) === u || m === l) return m
    } else
      for (g = _.call(e); !(h = g.next()).done;)
        if ((m = r(g, v, h.value, t)) === u || m === l) return m
  }).BREAK = u, t.RETURN = l
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.InputPresenter = void 0, n(3);
  var i, r = (i = n(0)) && i.__esModule ? i : {
    default: i
  };
  var o = n(32).Presenter.extend({
    init: function () {
      var e = this,
        t = this.getView(),
        n = this.getModel();
      t.on("input", (function (e) {
        n.setProperty("value", this.getValue(), e.detail)
      })), n.on("change:value", (function (n, i) {
        t.setState("empty", !n), e.emit("input", n, i)
      }))
    },
    getValue: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = this.getModel().getProperty("value");
      return t = t.slice(e.start, e.end), e.trim ? r.default.trim(t) : t
    },
    setValue: function (e, t) {
      return this.getView().setValue(e, t), this
    },
    getCaret: function () {
      return this.getView().getSelection().end
    },
    setCaret: function (e) {
      return e === this.getCaret() ? this : (this.getView().setSelection({
        start: e
      }), this.emit("navigate", e))
    }
  });
  t.InputPresenter = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.PositionedView = void 0;
  var i = n(69).TemplateView.extend({
    setPosition: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.left,
        r = e.bottom,
        o = i.positions.BOTTOM,
        s = this.getElement(),
        a = this.getRect(),
        c = document.documentElement.clientWidth;
      switch (s.getAttribute("data-align")) {
        case "right":
          n = e.right - a.width;
          break;
        case "center":
          n = e.left + e.width / 2 - a.width / 2;
          break;
        case "predictorRight":
          e.right + i.TR_PREDICTOR_GAP > c ? o = i.positions.LEFT : n = e.right
      }
      if (t) {
        var u = document.documentElement.clientHeight;
        a.width > c && "left" === s.getAttribute("data-align") ? n = s.getAttribute("data-offset") || 0 : n + a.width > c && a.width < c && (n -= n + a.width - c), u - e.bottom < a.height && e.top >= a.height && (o = i.positions.TOP, r = e.top - a.height)
      }
      return s.style.top = r + "px", s.style.left = n + "px", s.setAttribute(i.POSITION_ATTR, o), this
    }
  }, {
    POSITION_ATTR: "data-position",
    TR_PREDICTOR_GAP: 150,
    positions: {
      TOP: "top",
      LEFT: "left",
      BOTTOM: "bottom"
    }
  });
  t.PositionedView = i
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.InputModel = void 0;
  var i = n(20).Model.extend({
    getDefaults: function () {
      return {
        caret: 0,
        value: ""
      }
    }
  });
  t.InputModel = i
}, function (e, t, n) {
  "use strict";
  var i, r, o = (i = n(0)) && i.__esModule ? i : {
    default: i
  };
  window.XDomainRequest && ((r = window.XDomainRequest.prototype).nativeOpen = r.open, r.nativeSend = r.send, r.nativeAbort = r.abort, r.setRequestHeader = o.default.noop, r.getResponseHeader = function (e) {
    return this.responseText && "Content-Type" === e ? "application/json" : null
  }, r.onreadystatechange = o.default.noop, r.getAllResponseHeaders = function () {
    return ""
  }, r.open = function (e, t) {
    this.url = t
  }, r.send = function (e) {
    var t = this,
      n = this,
      i = this.url;
    e && (i += (i.indexOf("?") < 0 ? "?" : "&") + e);
    var r = function (e) {
      "load" === e.type && (t.status = 200), t.readyState = 4, t.onreadystatechange()
    };
    n.onload = r, n.onerror = r, n.ontimeout = o.default.noop, n.onprogress = o.default.noop, n.nativeOpen("GET", i), setTimeout((function () {
      n.nativeSend()
    }), 0)
  }, r.abort = function () {
    this.nativeAbort(), this.readyState = 4, this.onreadystatechange()
  }, r.status = 0, r.readyState = 0, r.statusText = "")
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.AppModule = void 0;
  var i, r = (i = n(0)) && i.__esModule ? i : {
    default: i
  };
  var o = n(30).Emitter.extend({
    init: function (e, t) {
      this.app = e, this.appModel = e.getModel(), this.appSettings = e.getSettings(), this.appView = e.getView(), this.appConfig = t, this.moduleId = r.default.generateId("mid")
    },
    debounceMethod: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return r.default.debounce(e.bind(this), t)
    }
  });
  t.AppModule = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.StatisticsModel = void 0, n(12), n(3);
  var i = s(n(0)),
    r = n(20),
    o = s(n(164));

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var a = r.Model.extend({
      init: function (e) {
        var t = this.constructor;
        this._sendMetrikaGoal = window.sendMetrikaGoal, this.setProperty("url", e.url + i.default.toQueryString({
          dtype: t.DTYPE,
          pid: t.PID
        }, "/") + "/"), window.sendStatisticsEvent = this.send.bind(this)
      },
      getDefaults: function () {
        return {
          url: "/",
          sid: "",
          srv: "",
          ver: "",
          uid: "",
          dir: "",
          path: "",
          loadTs: ""
        }
      },
      getLink: function (e) {
        var t = this.constructor,
          n = this.getProps(),
          r = {};
        return e.logged_in = n.uid ? 1 : 0, n.sid && (e.sid = n.sid), n.srv && (e.srv = n.srv), n.ver && (e.ver = n.ver), n.loadTs && (e.load_ts = n.loadTs), n.dir && (e.dir = n.dir), e.cur_ts = (new Date).getTime(), Object.keys(e).forEach((function (n) {
          var i = "cid" === n ? n : t.KEY_PREFIX + "_" + n,
            o = String(e[n]);
          r[i] = o.slice(0, t.MAX_DATA_LENGTH)
        })), r.path = n.path, this.getProperty("url") + i.default.toQueryString(r, "/") + "g," % 2 A ")}))},e.setVars=function(t){Object.keys(t).forEach((function(n){e._vars[n]=t[n]})),S(),b()};var n,i,r={connectEnd:2116,connectStart:2114,decodedBodySize:2886,domComplete:2124,domContentLoadedEventEnd:2131,domContentLoadedEventStart:2123,domInteractive:2770,domLoading:2769,domainLookupEnd:2113,domainLookupStart:2112,duration:2136,encodedBodySize:2887,entryType:2888,fetchStart:2111,initiatorType:2889,loadEventEnd:2126,loadEventStart:2125,nextHopProtocol:2890,redirectCount:1385,redirectEnd:2110,redirectStart:2109,requestStart:2117,responseEnd:2120,responseStart:2119,secureConnectionStart:2115,startTime:2322,transferSize:2323,type:76,unloadEventEnd:2128,unloadEventStart:2127,workerStart:2137},o={visible:1,hidden:2,prerender:3},s={bluetooth:2064,cellular:2065,ethernet:2066,none:1229,wifi:2067,wimax:2068,other:861,unknown:836,0:836,1:2066,2:2067,3:2070,4:2071,5:2768},a={"
        first - paint ":2793,"
        first - contentful - paint ":2794},c=Object.keys(a).length,u=e.getTime,l=window.PerformanceObserver,d=window.performance||{},f=d.timing||{},p=d.navigation||{},h=navigator.connection,g={},m={},_=e._deltaMarks,v=document.createElement("
        link "),E=document.createElement("
        a "),T="
        function "==typeof d.getEntriesByType,y=f.navigationStart;function S(){n=e.getVarsList(),e.getSetting("
        sendClientUa ")&&n.push("
        1042 = "+encodeURIComponent(navigator.userAgent))}function b(){i=n.concat(["
        143.2129 = "+y])}if(S(),b(),e.ajaxStart=0,e.ajaxComplete=0,l)try{new l((function(e,t){var i=e.getEntriesByType("
        navigation ")[0];if(i){t&&t.disconnect();var r=[];Q(r,i),X(r),$("
        690.2096 .2892 ",n.concat(r))}})).observe({entryTypes:["
        navigation "]})}catch(e){}function O(e){function t(){removeEventListener("
        DOMContentLoaded ",t),removeEventListener("
        load ",t),e()}"
        loading "===document.readyState?(addEventListener("
        DOMContentLoaded ",t),addEventListener("
        load ",t)):e()}function C(){e.getSetting("
        disableOnLoadTasks ")||(removeEventListener("
        load ",C),function(){var t=e.getSetting("
        periodicStatsIntervalMs ");t||null===t||(t=15e3);t&&(I=setInterval(M,t));addEventListener("
        beforeunload ",M)}(),function(){if(!l)return;U(d.getEntriesByType("
        navigation ")),U(d.getEntriesByType("
        resource "));try{new l((function(e){U(e.getEntries())})).observe({entryTypes:["
        resource ","
        navigation "]})}catch(e){}e._periodicTasks.push(B)}(),function(){if(!l)return;try{new l((function(e,t){var n=e.getEntries()[0];n&&(w("
        first - input ",n.processingStart-n.startTime),t.disconnect())})).observe({type:"
        first - input ",buffered:!0})}catch(e){}}(),function(){if(!l)return;var e=new l((function(e){var t=e.getEntries();null==V&&(V=0);for(var n=0;n<t.length;n++){var i=t[n];i.hadRecentInput||(V+=i.value)}}));try{e.observe({type:"
        layout - shift ",buffered:!0})}catch(e){}addEventListener("
        visibilitychange ",(function t(){if("
        hidden "===document.visibilityState){removeEventListener("
        visibilitychange ",t);try{"
        function "==typeof e.takeRecords&&e.takeRecords(),e.disconnect()}catch(e){}j()}})),addEventListener("
        beforeunload ",j)}(),function(){if(!l||!e.getSetting("
        forcePaintTimeSending ")&&e.isVisibilityChanged())return;var t=new l((function(e){for(var t=e.getEntries(),n=0;n<t.length;n++){var i=t[n];F=i.renderTime||i.loadTime}G||(A("
        largest - loading - elem - paint ",F),G=!0)}));try{t.observe({type:"
        largest - contentful - paint ",buffered:!0})}catch(e){}addEventListener("
        visibilitychange ",(function e(){if("
        hidden "===document.visibilityState){removeEventListener("
        visibilitychange ",e);try{"
        function "==typeof t.takeRecords&&t.takeRecords(),t.disconnect()}catch(e){}Y()}})),addEventListener("
        beforeunload ",Y)}())}function P(){var t=f.domContentLoadedEventStart,i=f.domContentLoadedEventEnd;if(0!==t||0!==i){var s=0===f.responseStart?y:f.responseStart,a=0===f.domainLookupStart?y:f.domainLookupStart,c=n.concat(["
        2129 = "+y,"
        1036 = "+(a-y),"
        1037 = "+(f.domainLookupEnd-f.domainLookupStart),"
        1038 = "+(f.connectEnd-f.connectStart),f.secureConnectionStart&&"
        1383 = "+(f.connectEnd-f.secureConnectionStart),"
        1039 = "+(f.responseStart-f.connectEnd),"
        1040 = "+(f.responseEnd-s),"
        1040.906 = "+(f.responseEnd-a),"
        1310.2084 = "+(f.domLoading-s),"
        1310.2085 = "+(f.domInteractive-s),"
        1310.1309 = "+(i-t),"
        1310.1007 = "+(t-s),navigator.deviceMemory&&"
        3140 = "+navigator.deviceMemory,navigator.hardwareConcurrency&&"
        3141 = "+navigator.hardwareConcurrency]);Object.keys(r).forEach((function(e){e in f&&f[e]&&c.push(r[e]+" = "+Z(f[e],y))})),e.vsStart?(c.push("
        1484 = "+(o[e.vsStart]||2771)),e.vsChanged&&c.push("
        1484.719 = 1 ")):c.push("
        1484 = "+o.visible),p&&(p.redirectCount&&c.push("
        1384.1385 = "+p.redirectCount),1!==p.type&&2!==p.type||c.push("
        770.76 = "+p.type)),X(c),$("
        690.1033 ",c)}else setTimeout(P,50)}O((function(){if(!y)return;setTimeout((function(){e.sendTimeMark=A,e.sendResTiming=D,e.timeEnd=N;for(var t=e._defRes;t.length;){var n=t.shift();D(n[0],n[1])}for(var i=e._defTimes;i.length;){var r=i.shift();A(r[0],r[1],!1,r[2])}Object.keys(_).forEach((function(e){w(e)})),P(),function t(){if(!T||!e.getSetting("
        forcePaintTimeSending ")&&e.isVisibilityChanged())return;for(var n=d.getEntriesByType("
        paint "),i=0;i<n.length;i++){var r=n[i],o=a[r.name];o&&!L[r.name]&&(L[r.name]=!0,R++,A("
        1926. "+o,r.startTime))}if(R<c)try{new l((function(e,n){t(),n&&n.disconnect()})).observe({entryTypes:["
        paint "]})}catch(e){}}(),e.getSetting("
        sendAutoElementTiming ")&&W(),K(),"
        complete "===document.readyState?C():addEventListener("
        load ",C)}),0)})),e._getCommonVars=function(){return n};var I,L={},R=0;function A(t,n,i,r){void 0===n&&(n=u()),void 0!==i&&!0!==i||e.mark(t,n);var o=J(t);if(o.push("
        207 = "+Z(n)),x(o,r)){$("
        690.2096 .207 ",o),g[t]=g[t]||[],g[t].push(n);var s=e._markListeners[t];s&&s.length&&s.forEach((function(e){e(n)}))}}function x(e,t){if(t){if(t.isCanceled&&t.isCanceled())return!1;var n=e.reduce((function(e,t,n){"
        string "==typeof t&&(e[t.split(" = ")[0]]=n);return e}),{});Object.keys(t).forEach((function(i){if("
        function "!=typeof t[i]){var r=n[i],o=i+" = "+t[i];void 0===r?e.push(o):e[r]=o}}))}return!0}function N(e,t){var n=_[e];n&&0!==n.length&&(n.push(u(),t),w(e))}function w(t,n,i){var r,o,s,a=_[t];if(void 0!==n?r=(o=e.getTime())-n:a&&(r=a[0],o=a[1],s=a[2]),void 0!==r&&void 0!==o){var c=J(t);c.push("
        207.2154 = "+Z(r),"
        207.1428 = "+Z(o),"
        2877 = "+Z(o-r)),x(c,i)&&x(c,s)&&($("
        690.2096 .2877 ",c),delete _[t])}}function D(t,n){q(n,(function(i){if(i){var r=J(t);e.getSetting("
        sendUrlInResTiming ")&&r.push("
        13 = "+encodeURIComponent(n)),Q(r,i[0]),$("
        690.2096 .2044 ",r)}}))}function M(){var t=!1;e._periodicTasks.forEach((function(e){e()&&(t=!0)})),t||clearInterval(I)}e.getTimeMarks=function(){return g},e._periodicTasks=[];var V,k=0;function U(e){if(e&&e.length)for(var t=m,n=0;n<e.length;n++){var i=H(e[n]);if(i){var r=i.domain+" - "+i.extension,o=t[r]=t[r]||{count:0,size:0};o.count++,o.size+=i.size}}}function H(e){var t=e.transferSize;if(null!=t){E.href=e.name;var n=E.pathname;if(0!==n.indexOf(" / clck ")){var i=n.lastIndexOf(".
        "),r="
        ";return-1!=i&&n.lastIndexOf(" / ")<i&&n.length-i<=5&&(r=n.slice(i+1)),{size:t,domain:E.hostname,extension:r}}}}function B(){var t=e.getSetting("
        maxTrafficCounters ")||250;if(k>=t)return!1;for(var i=Object.keys(m),r="
        ",o=0;o<i.length;o++){var s=i[o],a=m[s];r+=encodeURIComponent(s)+"!"+a.count+"!"+a.size+";
        "}r.length&&(k++,$("
        690.2096 .361 ",n.concat(["
        d = "+r,"
        t = "+Z(u())])));return m={},k<t}function j(){if(null!=V){var e=Math.round(1e6*V)/1e6;$("
        690.2096 .4004 ",n.concat("
        s = "+e)),V=null}}var F=null,G=!1;function Y(){null!=F&&(A("
        largest - contentful - paint ",F),F=null)}var W=l?function(){if(e.getSetting("
        forcePaintTimeSending ")||!e.isVisibilityChanged())try{new l((function(e){for(var t=e.getEntries(),n=0;n<t.length;n++){var i=t[n];A("
        element - timing.
        "+i.identifier,i.startTime)}})).observe({type:"
        element ",buffered:!0})}catch(e){}}:function(){};function K(t,n,i){if(e._tti){var r=u(),o=function(t,o,s){var a={2796.2797:z(s,n),689.2322:Z(r)};i&&Object.keys(i).forEach((function(e){a[e]=i[e]})),A(t||"
        2795 ",o,!0,a),e._tti.fired=!0};!function i(){var s,a=n||r,c=u(),l=e._tti.events||[],d=l.length;0!==d&&(s=l[d-1],a=Math.max(a,Math.floor(s.startTime+s.duration))),c-a>=3e3?o(t,a,l):c-a>=2e4?o(t,(n||r)+2e4,l):setTimeout(i,1e3)}()}}function X(e){h&&e.push("
        2437 = "+(s[h.type]||2771),void 0!==h.downlinkMax&&"
        2439 = "+h.downlinkMax,h.effectiveType&&"
        2870 = "+h.effectiveType,void 0!==h.rtt&&"
        rtt = "+h.rtt,void 0!==h.downlink&&"
        dwl = "+h.downlink)}function q(e,t){if(!T)return t(null);v.href=e;var n=v.href,i=0,r=100;setTimeout((function e(){var o=d.getEntriesByName(n);if(o.length)return t(o);i++<10?(setTimeout(e,r),r+=r):t(null)}),0)}function z(e,t){return t=t||0,(e=e||[]).filter((function(e){return e.startTime-t>=-50})).map((function(e){var t=e.name?e.name.split(" - ").map((function(e){return e[0]})).join("
        "):"
        u ",n=Math.floor(e.startTime);return t+" - "+n+" - "+Math.floor(n+e.duration)})).join(".
        ")}function J(t){return i.concat(["
        1701 = "+t,e.ajaxStart&&"
        1201.2154 = "+Z(e.ajaxStart),e.ajaxComplete&&"
        1201.2052 = "+Z(e.ajaxComplete)])}function Q(e,t){Object.keys(r).forEach((function(n){if(n in t){var i=t[n];(i||0===i)&&e.push(r[n]+" = "+Z(i))}}))}function Z(e,t){return"
        string "==typeof e?encodeURIComponent(e):Math.round(1e3*(e-(t||0)))/1e3}function $(t,n){var i=encodeURIComponent(window.YaStaticRegion||"
        unknown ");n.push(" - cdn = "+i);var r=n.filter(Boolean).join(", ");e.send(null,t,r)}e.sendTTI=K,e.sendHeroElement=function(e){A("
        2876 ",e)},e._subpages={},e.makeSubPage=function(t,n){var i=e._subpages[t];e._subpages[t]=void 0===i?i=0:++i;var r=!1;return{689.2322:Z(void 0!==n?n:u()),2924:t,2925:i,isCanceled:function(){return r},cancel:function(){r=!0}}},e._getLongtasksStringValue=z,e.getResourceTimings=q,e.pushConnectionTypeTo=X,e.pushTimingTo=Q,e.normalize=Z,e.sendCounter=$,e.sendDelta=w,e.sendTrafficData=B,e.finalizeLayoutShiftScore=j,e.finalizeLargestContentfulPaint=Y,e.onReady=O}(Ya.Rum)},function(e){e.exports=JSON.parse('{"
        render ":{"
        cid ":"
        73636 "},"
        tap ":{"
        cid ":"
        73602 "},"
        hover ":{"
        cid ":"
        73603 "},"
        select_text_fragment ":{"
        cid ":"
        73604 "},"
        copy_text_selection ":{"
        cid ":"
        73605 "},"
        lang_swap ":{"
        cid ":"
        73192 ","
        mid ":"
        LANGSELECT_FLIP "},"
        touch_lang_swap ":{"
        cid ":"
        73192 ","
        mid ":"
        TOUCH_LANGSELECT_FLIP "},"
        touch_fav_toggle ":{"
        cid ":"
        73264 ","
        mid ":"
        TOUCH_FAVOURITES_TOGGLE "},"
        fav_menu_open ":{"
        cid ":"
        73259 ","
        mid ":"
        FAVOURITES_MENU_OPEN "},"
        fav_sort ":{"
        cid ":"
        73257 ","
        mid ":"
        FAVOURITES_SORT "},"
        fav_sync ":{"
        cid ":"
        73258 ","
        mid ":"
        FAVOURITES_SYNC "},"
        cols_sync ":{"
        cid ":"
        73333 ","
        mid ":"
        COLLECTIONS_SYNC "},"
        cols_record_add ":{"
        cid ":"
        73282 ","
        mid ":"
        COLLECTIONS_RECORD_ADD "},"
        cols_record_delete ":{"
        cid ":"
        73283 ","
        mid ":"
        COLLECTIONS_RECORD_DELETE "},"
        cols_record_insert ":{"
        cid ":"
        73287 ","
        mid ":"
        COLLECTIONS_RECORD_INSERT "},"
        cols_records_delete ":{"
        cid ":"
        73284 ","
        mid ":"
        COLLECTIONS_RECORDS_DELETE "},"
        cols_records_move ":{"
        cid ":"
        73285 ","
        mid ":"
        COLLECTIONS_RECORDS_MOVE "},"
        cols_records_copy ":{"
        cid ":"
        73286 ","
        mid ":"
        COLLECTIONS_RECORDS_COPY "},"
        cols_open ":{"
        cid ":"
        73288 ","
        mid ":"
        COLLECTIONS_OPEN "},"
        cols_create ":{"
        cid ":"
        73289 ","
        mid ":"
        COLLECTIONS_CREATE "},"
        cols_create_tap ":{"
        cid ":"
        74056 ","
        mid ":"
        COLLECTIONS_CREATE_TAP "},"
        cols_rename ":{"
        cid ":"
        73290 ","
        mid ":"
        COLLECTIONS_RENAME "},"
        cols_delete ":{"
        cid ":"
        73291 ","
        mid ":"
        COLLECTIONS_DELETE "},"
        cols_clear ":{"
        cid ":"
        73810 ","
        mid ":"
        COLLECTIONS_CLEAR "},"
        cols_public_change ":{"
        cid ":"
        73292 ","
        mid ":"
        COLLECTIONS_PUBLIC_CHANGE "},"
        cols_subscribe ":{"
        cid ":"
        73293 ","
        mid ":"
        COLLECTIONS_SUBSCRIBE "},"
        cols_subscribe_limit ":{"
        cid ":"
        73293 "},"
        cols_unsubscribe ":{"
        cid ":"
        73294 ","
        mid ":"
        COLLECTIONS_UNSUBSCRIBE "},"
        cols_save ":{"
        cid ":"
        73295 ","
        mid ":"
        COLLECTIONS_SAVE "},"
        cols_search_activate ":{"
        cid ":"
        73296 ","
        mid ":"
        COLLECTIONS_SEARCH_ACTIVATE "},"
        cols_menu_open ":{"
        cid ":"
        73297 ","
        mid ":"
        COLLECTIONS_MENU_OPEN "},"
        cols_link_copy ":{"
        cid ":"
        73298 ","
        mid ":"
        COLLECTIONS_LINK_COPY "},"
        cols_link_share ":{"
        cid ":"
        73299 ","
        mid ":"
        COLLECTIONS_LINK_SHARE "},"
        cols_sharing_subscribe ":{"
        cid ":"
        73300 ","
        mid ":"
        COLLECTIONS_SHARING_SUBSCRIBE "},"
        cols_db_error ":{"
        cid ":"
        73301 ","
        mid ":"
        COLLECTIONS_DB_ERROR "},"
        cols_db_error_excp ":{"
        cid ":"
        73306 ","
        mid ":"
        COLLECTIONS_DB_ERROR_EXCP "},"
        cols_db_inactive_tap ":{"
        cid ":"
        74057 ","
        mid ":"
        COLLECTIONS_DB_INACTIVE_TAP "},"
        cols_no_col_for_active_id ":{"
        cid ":"
        73578 "},"
        cols_reseted_ids ":{"
        cid ":"
        73361 ","
        mid ":"
        COLLECTIONS_RESETED_IDS "},"
        cols_db_index_not_found ":{"
        cid ":"
        73954 "},"
        training_open ":{"
        cid ":"
        73302 ","
        mid ":"
        TRAINING_OPEN "},"
        training_settings_open ":{"
        cid ":"
        73303 ","
        mid ":"
        TRAINING_SETTINGS_OPEN "},"
        training_progress_reset ":{"
        cid ":"
        73304 ","
        mid ":"
        TRAINING_PROGRESS_RESET "},"
        training_swipe ":{"
        cid ":"
        73305 "},"
        training_exit ":{"
        cid ":"
        73844 ","
        mid ":"
        TRAINING_EXIT "},"
        training_end ":{"
        cid ":"
        73845 ","
        mid ":"
        TRAINING_END "},"
        training_check_good ":{"
        cid ":"
        73847 "},"
        training_check_bad ":{"
        cid ":"
        73848 "},"
        training_level_changed ":{"
        cid ":"
        73883 ","
        mid ":"
        TRAINING_LEVEL_CHANGED "},"
        training_skip ":{"
        cid ":"
        73882 "},"
        training_started ":{"
        cid ":"
        74082 ","
        mid ":"
        TRAINING_STARTED "},"
        training_revert ":{"
        cid ":"
        74070 ","
        mid ":"
        TRAINING_REVERT "},"
        training_revert_banner_shown ":{"
        cid ":"
        74079 ","
        mid ":"
        TRAINING_REVERT_BANNER_SHOWN "},"
        training_onboarding_shown ":{"
        cid ":"
        74078 ","
        mid ":"
        TRAINING_ONBOARDING_SHOWN "},"
        training_revert_click_onboarding ":{"
        cid ":"
        74080 ","
        mid ":"
        TRAINING_REVERT_CLICK_ONBOARDING "},"
        training_revert_click_banner ":{"
        cid ":"
        74081 ","
        mid ":"
        TRAINING_REVERT_CLICK_BANNER "},"
        yata_init ":{"
        cid ":"
        73462 ","
        mid ":"
        YATA_INIT "},"
        langselect_open_src ":{"
        cid ":"
        73465 ","
        mid ":"
        LANGSELECT_OPEN_SRC "},"
        langselect_open_dst ":{"
        cid ":"
        73465 ","
        mid ":"
        LANGSELECT_OPEN_DST "},"
        touch_langselect_open ":{"
        cid ":"
        73465 ","
        mid ":"
        TOUCH_LANGSELECT_OPEN "},"
        langselect_select_src ":{"
        cid ":"
        73466 ","
        mid ":"
        LANGSELECT_SELECT_SRC "},"
        langselect_select_dst ":{"
        cid ":"
        73466 ","
        mid ":"
        LANGSELECT_SELECT_DST "},"
        langselect_recent_select_src ":{"
        cid ":"
        73466 ","
        mid ":"
        LANGSELECT_RECENT_SELECT_SRC "},"
        langselect_recent_select_dst ":{"
        cid ":"
        73466 ","
        mid ":"
        LANGSELECT_RECENT_SELECT_DST "},"
        touch_langselect_select ":{"
        cid ":"
        73466 ","
        mid ":"
        TOUCH_LANGSELECT_SELECT "},"
        langselect_pin ":{"
        cid ":"
        73467 ","
        mid ":"
        LANGSELECT_PIN "},"
        langselect_unpin ":{"
        cid ":"
        73467 ","
        mid ":"
        LANGSELECT_UNPIN "},"
        touch_langselect_pin ":{"
        cid ":"
        73467 ","
        mid ":"
        TOUCH_LANGSELECT_PIN "},"
        touch_langselect_unpin ":{"
        cid ":"
        73467 ","
        mid ":"
        TOUCH_LANGSELECT_UNPIN "},"
        text_translate ":{"
        cid ":"
        74058 ","
        mid ":"
        TEXT_TRANSLATE "},"
        touch_text_translate ":{"
        cid ":"
        74059 ","
        mid ":"
        TOUCH_TEXT_TRANSLATE "},"
        text_delete ":{"
        cid ":"
        73468 ","
        mid ":"
        TEXT_DELETE "},"
        touch_text_delete ":{"
        cid ":"
        73468 ","
        mid ":"
        TOUCH_TEXT_DELETE "},"
        text_search ":{"
        cid ":"
        73471 ","
        mid ":"
        TEXT_SEARCH "},"
        text_copy ":{"
        cid ":"
        73469 ","
        mid ":"
        TEXT_COPY "},"
        text_select ":{"
        cid ":"
        73470 ","
        mid ":"
        TEXT_SELECT "},"
        text_paste ":{"
        cid ":"
        73472 ","
        mid ":"
        TEXT_PASTE "},"
        touch_text_paste ":{"
        cid ":"
        73806 ","
        mid ":"
        TOUCH_TEXT_PASTE "},"
        text_download ":{"
        cid ":"
        73473 ","
        mid ":"
        TEXT_DOWNLOAD "},"
        url_translate ":{"
        cid ":"
        73535 ","
        mid ":"
        URL_TRANSLATE "},"
        touch_url_translate ":{"
        cid ":"
        73535 ","
        mid ":"
        TOUCH_URL_TRANSLATE "},"
        url_translate_enter ":{"
        cid ":"
        73535 ","
        mid ":"
        URL_TRANSLATE_ENTER "},"
        url_translation_error ":{"
        cid ":"
        73536 ","
        mid ":"
        URL_ERROR "},"
        url_loading_error ":{"
        cid ":"
        74022 ","
        mid ":"
        URL_LOADING_ERROR "},"
        url_delete ":{"
        cid ":"
        73537 ","
        mid ":"
        URL_DELETE "},"
        url_open_orig_in_new_tab ":{"
        cid ":"
        73881 ","
        mid ":"
        URL_OPEN_ORIG_IN_NEW_TAB "},"
        url_loading_time ":{"
        cid ":"
        74095 "},"
        url_translation_time ":{"
        cid ":"
        74096 "},"
        url_dom_not_loaded ":{"
        cid ":"
        74098 ","
        mid ":"
        URL_DOM_NOT_LOADED "},"
        url_error ":{"
        cid ":"
        74099 ","
        mid ":"
        URL_FRAME_ERROR "},"
        touch_url_translate_error ":{"
        cid ":"
        74146 ","
        mid ":"
        TOUCH_URL_TRANSLATE_ERROR "},"
        touch_url_loading_time ":{"
        cid ":"
        74142 "},"
        touch_url_translation_time ":{"
        cid ":"
        74143 "},"
        touch_url_dom_not_loaded ":{"
        cid ":"
        74144 ","
        mid ":"
        TOUCH_URL_DOM_NOT_LOADED "},"
        touch_url_frame_error ":{"
        cid ":"
        74145 ","
        mid ":"
        TOUCH_URL_FRAME_ERROR "},"
        syns_insert ":{"
        cid ":"
        73474 ","
        mid ":"
        SYNONYMS_INSERT "},"
        syns_show ":{"
        cid ":"
        73475 ","
        mid ":"
        SYNONYMS_SHOW "},"
        suggestions_show ":{"
        cid ":"
        73798 "},"
        suggestions_apply ":{"
        cid ":"
        73803 "},"
        suggestions_item_navigate ":{"
        cid ":"
        73805 "},"
        suggestions_item_hover ":{"
        cid ":"
        73800 "},"
        predictor_show ":{"
        cid ":"
        73481 "},"
        predictor_apply ":{"
        cid ":"
        73482 ","
        mid ":"
        PREDICTOR_APPLY "},"
        dst_predictor_show ":{"
        cid ":"
        73585 "},"
        dst_predictor_apply ":{"
        cid ":"
        73586 "},"
        touch_predictor_apply ":{"
        cid ":"
        73482 ","
        mid ":"
        TOUCH_PREDICTOR_APPLY "},"
        speller_autocorrect ":{"
        cid ":"
        74060 ","
        mid ":"
        SPELLER_AUTOCORRECT "},"
        speller_click ":{"
        cid ":"
        73476 ","
        mid ":"
        SPELLER_CLICK "},"
        speller_apply ":{"
        cid ":"
        73477 ","
        mid ":"
        SPELLER_APPLY "},"
        speller_accept ":{"
        cid ":"
        73478 ","
        mid ":"
        SPELLER_ACCEPT "},"
        speller_decline ":{"
        cid ":"
        73479 ","
        mid ":"
        SPELLER_DECLINE "},"
        speller_switch_on ":{"
        cid ":"
        73480 ","
        mid ":"
        SPELLER_SWITCH_ON "},"
        speller_switch_off ":{"
        cid ":"
        73480 ","
        mid ":"
        SPELLER_SWITCH_OFF "},"
        tts_play ":{"
        cid ":"
        73483 ","
        mid ":"
        TTS_PLAY "},"
        touch_tts_play ":{"
        cid ":"
        73483 ","
        mid ":"
        TOUCH_TTS_PLAY "},"
        tts_native_play ":{"
        cid ":"
        73483 ","
        mid ":"
        TTS_NATIVE_PLAY "},"
        touch_tts_native_play ":{"
        cid ":"
        73483 ","
        mid ":"
        TOUCH_TTS_NATIVE_PLAY "},"
        tts_error ":{"
        cid ":"
        73484 ","
        mid ":"
        TTS_ERROR "},"
        touch_tts_error ":{"
        cid ":"
        73484 ","
        mid ":"
        TOUCH_TTS_ERROR "},"
        tts_native_error ":{"
        cid ":"
        73484 ","
        mid ":"
        TTS_NATIVE_ERROR "},"
        touch_tts_native_error ":{"
        cid ":"
        73484 ","
        mid ":"
        TOUCH_TTS_NATIVE_ERROR "},"
        touch_tts_disabled_tap ":{"
        cid ":"
        73485 ","
        mid ":"
        TOUCH_TTS_DISABLED_TAP "},"
        touch_tts_animated_tap ":{"
        cid ":"
        73580 ","
        mid ":"
        TOUCH_TTS_ANIMATED_TAP "},"
        translation_error ":{"
        cid ":"
        73486 "},"
        translation_complain ":{"
        cid ":"
        73487 ","
        mid ":"
        TRANSLATION_COMPLAIN "},"
        touch_translation_complain ":{"
        cid ":"
        73487 ","
        mid ":"
        TOUCH_TRANSLATION_COMPLAIN "},"
        translation_edit ":{"
        cid ":"
        73488 ","
        mid ":"
        TRANSLATION_EDIT "},"
        translation_edit_open ":{"
        cid ":"
        73489 ","
        mid ":"
        TRANSLATION_EDIT_OPEN "},"
        translation_edit_close ":{"
        cid ":"
        73490 ","
        mid ":"
        TRANSLATION_EDIT_CLOSE "},"
        asr_start ":{"
        cid ":"
        73491 ","
        mid ":"
        ASR_START "},"
        asr_stop ":{"
        cid ":"
        73492 ","
        mid ":"
        ASR_STOP "},"
        asr_error ":{"
        cid ":"
        73493 ","
        mid ":"
        ASR_ERROR "},"
        asr_recognize ":{"
        cid ":"
        73494 "},"
        touch_asr_native_start ":{"
        mid ":"
        TOUCH_ASR_NATIVE_START "},"
        touch_asr_native_stop ":{"
        mid ":"
        TOUCH_ASR_NATIVE_STOP "},"
        touch_asr_native_error ":{"
        mid ":"
        TOUCH_ASR_NATIVE_ERROR "},"
        touch_asr_start ":{"
        cid ":"
        73491 ","
        mid ":"
        TOUCH_ASR_START "},"
        touch_asr_stop ":{"
        cid ":"
        73492 ","
        mid ":"
        TOUCH_ASR_STOP "},"
        touch_asr_error ":{"
        cid ":"
        73493 ","
        mid ":"
        TOUCH_ASR_ERROR "},"
        touch_asr_disabled_tap ":{"
        cid ":"
        73495 ","
        mid ":"
        TOUCH_ASR_DISABLED_TAP "},"
        rubber_scrolled ":{"
        cid ":"
        73599 "},"
        dict_complain ":{"
        cid ":"
        73496 ","
        mid ":"
        DICT_COMPLAIN "},"
        touch_dict_complain ":{"
        cid ":"
        73496 ","
        mid ":"
        TOUCH_DICT_COMPLAIN "},"
        dict_complain_open ":{"
        cid ":"
        73497 ","
        mid ":"
        DICT_COMPLAIN_OPEN "},"
        touch_dict_complain_open ":{"
        cid ":"
        73497 ","
        mid ":"
        TOUCH_DICT_COMPLAIN_OPEN "},"
        dict_complain_close ":{"
        cid ":"
        73497 ","
        mid ":"
        DICT_COMPLAIN_CLOSE "},"
        touch_dict_complain_close ":{"
        cid ":"
        73497 ","
        mid ":"
        TOUCH_DICT_COMPLAIN_CLOSE "},"
        dict_complain_error ":{"
        cid ":"
        73498 "},"
        dict_show ":{"
        cid ":"
        73499 ","
        mid ":"
        DICT_SHOW "},"
        dict_popup_show ":{"
        cid ":"
        73499 ","
        mid ":"
        DICT_POPUP_SHOW "},"
        examples_rendered ":{"
        cid ":"
        73568 ","
        mid ":"
        EXAMPLES_RENDERED "},"
        examples_popup_rendered ":{"
        cid ":"
        73568 ","
        mid ":"
        EXAMPLES_POPUP_RENDERED "},"
        examples_complaint ":{"
        cid ":"
        73955 ","
        mid ":"
        EXAMPLES_COMPLAINT "},"
        examples_complaint_start ":{"
        cid ":"
        73956 ","
        mid ":"
        EXAMPLES_COMPLAINT_START "},"
        touch_examples_rendered ":{"
        cid ":"
        73568 "},"
        touch_dict_show ":{"
        cid ":"
        73499 ","
        mid ":"
        TOUCH_DICT_SHOW "},"
        dict_examples_show ":{"
        cid ":"
        73500 ","
        mid ":"
        DICT_EXAMPLES_SHOW "},"
        touch_dict_examples_show ":{"
        cid ":"
        73500 ","
        mid ":"
        TOUCH_DICT_EXAMPLES_SHOW "},"
        dict_examples_hide ":{"
        cid ":"
        73500 ","
        mid ":"
        DICT_EXAMPLES_HIDE "},"
        touch_dict_examples_hide ":{"
        cid ":"
        73500 ","
        mid ":"
        TOUCH_DICT_EXAMPLES_HIDE "},"
        dict_link_click ":{"
        cid ":"
        73501 ","
        mid ":"
        DICT_LINK_CLICK "},"
        dict_toggle ":{"
        cid ":"
        73502 ","
        mid ":"
        DICT_TOGGLE "},"
        touch_def_show ":{"
        cid ":"
        74105 ","
        mid ":"
        TOUCH_DEF_SHOW "},"
        settings_open ":{"
        cid ":"
        73503 ","
        mid ":"
        OPTIONS_OPEN "},"
        touch_settings_open ":{"
        cid ":"
        73503 ","
        mid ":"
        TOUCH_SETTINGS_OPEN "},"
        settings_onload ":{"
        cid ":"
        73504 "},"
        settings_auto_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_AUTO "},"
        settings_suggest_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_SUGGEST "},"
        settings_shift_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_SHIFT "},"
        settings_dictionary_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_DICTIONARY "},"
        settings_speller_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_SPELLER "},"
        settings_autoheight_click ":{"
        cid ":"
        73505 ","
        mid ":"
        OPTIONS_CLICK_AUTOHEIGHT "},"
        keyboard_open ":{"
        cid ":"
        73506 ","
        mid ":"
        KEYBOARD_OPEN "},"
        keyboard_close ":{"
        cid ":"
        73506 ","
        mid ":"
        KEYBOARD_CLOSE "},"
        sharing_open ":{"
        cid ":"
        73507 ","
        mid ":"
        SHARING_OPEN "},"
        touch_sharing_open ":{"
        cid ":"
        73507 ","
        mid ":"
        TOUCH_SHARING_OPEN "},"
        sharing_share_vkontakte ":{"
        cid ":"
        73508 ","
        mid ":"
        SHARING_SHARE_VKONTAKTE "},"
        sharing_share_facebook ":{"
        cid ":"
        73508 ","
        mid ":"
        SHARING_SHARE_FACEBOOK "},"
        sharing_share_odnoklassniki ":{"
        cid ":"
        73508 ","
        mid ":"
        SHARING_SHARE_ODNOKLASSNIKI "},"
        sharing_share_mail ":{"
        cid ":"
        73508 ","
        mid ":"
        SHARING_SHARE_MAIL "},"
        stat_searchapp ":{"
        cid ":"
        73672 "},"
        touch_sharing_share_vkontakte ":{"
        cid ":"
        73508 ","
        mid ":"
        TOUCH_SHARING_SHARE_VKONTAKTE "},"
        touch_sharing_share_facebook ":{"
        cid ":"
        73508 ","
        mid ":"
        TOUCH_SHARING_SHARE_FACEBOOK "},"
        touch_sharing_share_odnoklassniki ":{"
        cid ":"
        73508 ","
        mid ":"
        TOUCH_SHARING_SHARE_ODNOKLASSNIKI "},"
        touch_sharing_share_mail ":{"
        cid ":"
        73508 ","
        mid ":"
        TOUCH_SHARING_SHARE_MAIL "},"
        sharing_input_click ":{"
        cid ":"
        73509 ","
        mid ":"
        SHARING_INPUT_CLICK "},"
        sharing_copy_click ":{"
        cid ":"
        73509 ","
        mid ":"
        SHARING_COPY_CLICK "},"
        touch_ocr_open ":{"
        cid ":"
        73459 ","
        mid ":"
        TOUCH_OCR_OPEN "},"
        touch_ocr_autoinit ":{"
        cid ":"
        73263 ","
        mid ":"
        TOUCH_OCR_AUTOINIT "},"
        touch_ocr_tap ":{"
        cid ":"
        73687 ","
        mid ":"
        TOUCH_OCR_TAP "},"
        touch_ocr_disabled_tap ":{"
        cid ":"
        73460 ","
        mid ":"
        TOUCH_OCR_DISABLED_TAP "},"
        touch_ocr_langselect_open ":{"
        cid ":"
        73510 ","
        mid ":"
        TOUCH_OCR_LANGSELECT_OPEN "},"
        touch_ocr_langselect_select ":{"
        cid ":"
        73511 ","
        mid ":"
        TOUCH_OCR_LANGSELECT_SELECT "},"
        touch_ocr_langselect_swap ":{"
        cid ":"
        73512 ","
        mid ":"
        TOUCH_OCR_FLIP "},"
        ocr_load_image ":{"
        cid ":"
        73513 ","
        mid ":"
        OCR_LOAD_IMAGE "},"
        touch_ocr_load_image ":{"
        cid ":"
        73513 ","
        mid ":"
        TOUCH_OCR_LOAD_IMAGE "},"
        ocr_recognize ":{"
        cid ":"
        73514 ","
        mid ":"
        OCR_RECOGNIZE "},"
        touch_ocr_recognize ":{"
        cid ":"
        73514 ","
        mid ":"
        TOUCH_OCR_RECOGNIZE "},"
        ocr_switch_mode ":{"
        cid ":"
        73515 ","
        mid ":"
        OCR_SWITCH_MODE "},"
        touch_ocr_switch_mode ":{"
        cid ":"
        73515 ","
        mid ":"
        TOUCH_OCR_SWITCH_MODE "},"
        ocr_select_area ":{"
        cid ":"
        73516 ","
        mid ":"
        OCR_SELECT_AREA "},"
        touch_ocr_select_area ":{"
        cid ":"
        73516 ","
        mid ":"
        TOUCH_OCR_SELECT_AREA "},"
        ocr_box_tap ":{"
        cid ":"
        73517 ","
        mid ":"
        OCR_BOX_TAP "},"
        touch_ocr_box_tap ":{"
        cid ":"
        73517 ","
        mid ":"
        TOUCH_OCR_BOX_TAP "},"
        ocr_translation_navigate ":{"
        cid ":"
        73518 ","
        mid ":"
        OCR_TRANSLATION_NAVIGATE "},"
        touch_ocr_translation_navigate ":{"
        cid ":"
        73518 ","
        mid ":"
        TOUCH_OCR_TRANSLATION_NAVIGATE "},"
        touch_ocr_image_select ":{"
        cid ":"
        73519 ","
        mid ":"
        TOUCH_OCR_IMAGE_SELECT "},"
        touch_ocr_rotate ":{"
        cid ":"
        73520 ","
        mid ":"
        TOUCH_OCR_ROTATE "},"
        touch_ocr_rotation_apply ":{"
        cid ":"
        73521 ","
        mid ":"
        TOUCH_OCR_ROTATION_APPLY "},"
        touch_ocr_download_image ":{"
        cid ":"
        73696 ","
        mid ":"
        TOUCH_OCR_DOWNLOAD_IMAGE "},"
        touch_ocr_card_show ":{"
        cid ":"
        73522 ","
        mid ":"
        TOUCH_OCR_CARD_SHOW "},"
        touch_ocr_card_tts_play ":{"
        cid ":"
        73523 ","
        mid ":"
        TOUCH_OCR_CARD_TTS_PLAY "},"
        touch_ocr_card_tts_error ":{"
        cid ":"
        73524 ","
        mid ":"
        TOUCH_OCR_CARD_TTS_ERROR "},"
        touch_ocr_card_tts_native_play ":{"
        cid ":"
        73523 ","
        mid ":"
        TOUCH_OCR_CARD_TTS_NATIVE_PLAY "},"
        touch_ocr_card_tts_native_error ":{"
        cid ":"
        73524 ","
        mid ":"
        TOUCH_OCR_CARD_TTS_NATIVE_ERROR "},"
        touch_ocr_card_tts_disabled_tap ":{"
        cid ":"
        73525 ","
        mid ":"
        TOUCH_OCR_CARD_TTS_DISABLED_TAP "},"
        ocr_refresh_alert_show ":{"
        cid ":"
        73526 ","
        mid ":"
        OCR_REFRESH_ALERT_SHOW "},"
        touch_ocr_refresh_alert_show ":{"
        cid ":"
        73526 ","
        mid ":"
        TOUCH_OCR_REFRESH_ALERT_SHOW "},"
        ocr_refresh_alert_click ":{"
        cid ":"
        73527 ","
        mid ":"
        OCR_REFRESH_ALERT_CLICK "},"
        touch_ocr_refresh_alert_click ":{"
        cid ":"
        73527 ","
        mid ":"
        TOUCH_OCR_REFRESH_ALERT_CLICK "},"
        ocr_image_zoom_in ":{"
        cid ":"
        73528 ","
        mid ":"
        OCR_IMAGE_ZOOM_IN "},"
        ocr_image_zoom_out ":{"
        cid ":"
        73528 ","
        mid ":"
        OCR_IMAGE_ZOOM_OUT "},"
        ocr_move ":{"
        cid ":"
        73529 ","
        mid ":"
        OCR_MOVE "},"
        ocr_delete ":{"
        cid ":"
        73530 ","
        mid ":"
        OCR_DELETE "},"
        ocr_contrast_enable ":{"
        cid ":"
        74071 ","
        mid ":"
        OCR_CONTRAST_ENABLE "},"
        ocr_contrast_disable ":{"
        cid ":"
        74071 ","
        mid ":"
        OCR_CONTRAST_DISABLE "},"
        ocr_align_change ":{"
        cid ":"
        74072 ","
        mid ":"
        OCR_ALIGN_CHANGE "},"
        ocr_orig_show ":{"
        cid ":"
        74073 ","
        mid ":"
        OCR_ORIG_SHOW "},"
        ocr_orig_hide ":{"
        cid ":"
        74073 ","
        mid ":"
        OCR_ORIG_HIDE "},"
        ocr_rotate ":{"
        cid ":"
        74074 ","
        mid ":"
        OCR_ROTATE "},"
        ocr_download ":{"
        cid ":"
        74075 ","
        mid ":"
        OCR_DOWNLOAD "},"
        resizer_onload ":{"
        cid ":"
        73531 "},"
        resizer_resize ":{"
        cid ":"
        73532 ","
        mid ":"
        RESIZER_RESIZE "},"
        sms_send_click ":{"
        cid ":"
        73533 ","
        mid ":"
        SMS_SEND_CLICK "},"
        sms_send_click_disabled ":{"
        cid ":"
        73533 "},"
        sms_error ":{"
        cid ":"
        73534 ","
        mid ":"
        SMS_ERROR "},"
        footer_promo_show ":{"
        cid ":"
        73538 ","
        mid ":"
        FOOTER_PROMO_SHOW "},"
        footer_promo_close ":{"
        cid ":"
        73539 ","
        mid ":"
        FOOTER_PROMO_CLOSE "},"
        url_mode_changed_s ":{"
        cid ":"
        73540 ","
        mid ":"
        WINDOW_MODE_ORIGINAL "},"
        url_mode_changed_t ":{"
        cid ":"
        73540 ","
        mid ":"
        WINDOW_MODE_TRANSLATION "},"
        url_layout_changed_s ":{"
        cid ":"
        73541 ","
        mid ":"
        LAYOUT_MODE_OVERLAPPED "},"
        url_layout_changed_v ":{"
        cid ":"
        73541 ","
        mid ":"
        LAYOUT_MODE_VERTICAL "},"
        url_layout_changed_h ":{"
        cid ":"
        73541 ","
        mid ":"
        LAYOUT_MODE_HORIZONTAL "},"
        url_popup_expand ":{"
        cid ":"
        73542 ","
        mid ":"
        TR_POPUP_EXPAND "},"
        url_popup_send ":{"
        cid ":"
        73543 ","
        mid ":"
        TR_POPUP_SEND "},"
        url_popup_close ":{"
        cid ":"
        73544 ","
        mid ":"
        TR_POPUP_CLOSE "},"
        url_popup_dislike ":{"
        cid ":"
        74151 ","
        mid ":"
        TR_POPUP_DISLIKE "},"
        document_upload_tap ":{"
        cid ":"
        73674 ","
        mid ":"
        DOCUMENT_UPLOAD_TAP "},"
        document_download_tap ":{"
        mid ":"
        DOCUMENT_DOWNLOAD_TAP ","
        cid ":"
        73694 "},"
        document_translate ":{"
        cid ":"
        73675 ","
        mid ":"
        DOCUMENT_TRANSLATE "},"
        size_error ":{"
        cid ":"
        73676 ","
        mid ":"
        DOCUMENT_SIZE_ERROR "},"
        convert_error ":{"
        cid ":"
        73677 ","
        mid ":"
        DOCUMENT_CONVERT_ERROR "},"
        document_error ":{"
        cid ":"
        73677 ","
        mid ":"
        DOCUMENT_ERROR "},"
        document_download_error ":{"
        cid ":"
        73695 ","
        mid ":"
        DOCUMENT_DOWNLOAD_ERROR "},"
        doc_mode_changed_s ":{"
        cid ":"
        73678 ","
        mid ":"
        DOCUMENT_MODE_ORIGINAL "},"
        doc_mode_changed_t ":{"
        cid ":"
        73678 ","
        mid ":"
        DOCUMENT_MODE_TRANSLATION "},"
        doc_layout_changed_s ":{"
        cid ":"
        73682 ","
        mid ":"
        DOCUMENT_LAYOUT_OVERLAPPED "},"
        doc_layout_changed_v ":{"
        cid ":"
        73682 ","
        mid ":"
        DOCUMENT_LAYOUT_VERTICAL "},"
        doc_layout_changed_h ":{"
        cid ":"
        73682 ","
        mid ":"
        DOCUMENT_LAYOUT_HORIZONTAL "},"
        doc_popup_expand ":{"
        cid ":"
        73679 ","
        mid ":"
        DOCUMENT_POPUP_EXPAND "},"
        doc_popup_send ":{"
        cid ":"
        73680 ","
        mid ":"
        DOCUMENT_POPUP_SEND "},"
        doc_popup_close ":{"
        cid ":"
        73681 ","
        mid ":"
        DOCUMENT_POPUP_CLOSE "},"
        refresh_alert_show ":{"
        cid ":"
        73545 ","
        mid ":"
        REFRESH_ALERT_SHOW "},"
        touch_refresh_alert_show ":{"
        cid ":"
        73545 ","
        mid ":"
        TOUCH_REFRESH_ALERT_SHOW "},"
        refresh_alert_click ":{"
        cid ":"
        73546 ","
        mid ":"
        REFRESH_ALERT_CLICK "},"
        touch_refresh_alert_click ":{"
        cid ":"
        73546 ","
        mid ":"
        TOUCH_REFRESH_ALERT_CLICK "},"
        session_resume ":{"
        cid ":"
        73547 "},"
        visibility_change ":{"
        cid ":"
        73600 "},"
        history_move ":{"
        cid ":"
        73635 "},"
        touch_storage_error ":{"
        cid ":"
        73548 "},"
        alt_translate_google ":{"
        cid ":"
        73549 ","
        mid ":"
        ALTERNATIVE_TRANSLATE_GOOGLE "},"
        alt_translate_bing ":{"
        cid ":"
        73549 ","
        mid ":"
        ALTERNATIVE_TRANSLATE_BING "},"
        translit_button_show ":{"
        cid ":"
        73550 ","
        mid ":"
        TRANSLIT_BUTTON_SHOW "},"
        translit_show ":{"
        cid ":"
        73551 ","
        mid ":"
        TRANSLIT_SHOW "},"
        translit_hide ":{"
        cid ":"
        73551 ","
        mid ":"
        TRANSLIT_HIDE "},"
        translit_error ":{"
        cid ":"
        73552 ","
        mid ":"
        TRANSLIT_ERROR "},"
        translation_vote_good ":{"
        cid ":"
        73553 ","
        mid ":"
        TRANSLATION_VOTE_GOOD "},"
        translation_vote_bad ":{"
        cid ":"
        73553 ","
        mid ":"
        TRANSLATION_VOTE_BAD "},"
        touch_webapp_prompt_show ":{"
        cid ":"
        73554 ","
        mid ":"
        TOUCH_WEBAPP_PROMPT_SHOW "},"
        touch_webapp_prompt_install ":{"
        cid ":"
        73555 ","
        mid ":"
        TOUCH_WEBAPP_PROMPT_INSTALL "},"
        touch_webapp_prompt_dismiss ":{"
        cid ":"
        73556 ","
        mid ":"
        TOUCH_WEBAPP_PROMPT_DISMISS "},"
        corpus_request ":{"
        cid ":"
        73557 ","
        mid ":"
        CORPUS_REQUEST "},"
        page_load ":{"
        cid ":"
        73558 "},"
        landing_lyrics_load ":{"
        cid ":"
        73584 "},"
        landing_lyrics_translate_button_click ":{"
        cid ":"
        73583 "},"
        popup_show ":{"
        cid ":"
        73560 ","
        mid ":"
        POPUP_SHOW "},"
        popup_empty_show ":{"
        cid ":"
        73560 ","
        mid ":"
        POPUP_EMPTY_SHOW "},"
        popup_close ":{"
        cid ":"
        73560 ","
        mid ":"
        POPUP_CLOSE "},"
        more_examples_click ":{"
        cid ":"
        73561 ","
        mid ":"
        MORE_EXAMPLES_CLICK "},"
        examples_show ":{"
        cid ":"
        73562 ","
        mid ":"
        EXAMPLES_SHOW "},"
        examples_hide ":{"
        cid ":"
        73562 ","
        mid ":"
        EXAMPLES_HIDE "},"
        example_tab_click ":{"
        cid ":"
        73563 ","
        mid ":"
        EXAMPLE_TAB_CLICK "},"
        example_sound ":{"
        cid ":"
        73566 ","
        mid ":"
        EXAMPLE_SOUND_CLICK "},"
        example_origin_show ":{"
        cid ":"
        73564 ","
        mid ":"
        EXAMPLE_ORIGIN_SHOW "},"
        custom_examples_close ":{"
        cid ":"
        73693 ","
        mid ":"
        CUSTOM_EXAMPLES_CLOSE "},"
        touch_example_origin_show ":{"
        cid ":"
        73564 ","
        mid ":"
        TOUCH_EXAMPLE_ORIGIN_SHOW "},"
        touch_examples_show ":{"
        cid ":"
        73562 ","
        mid ":"
        TOUCH_EXAMPLES_SHOW_MORE "},"
        touch_examples_hide ":{"
        cid ":"
        73562 ","
        mid ":"
        TOUCH_EXAMPLES_HIDE "},"
        touch_tab_click ":{"
        cid ":"
        73639 ","
        mid ":"
        TOUCH_TAB_CLICK "},"
        select_tooltip_show ":{"
        cid ":"
        73565 ","
        mid ":"
        SELECT_TOOLTIP_SHOW "},"
        auto_play_text ":{"
        cid ":"
        73593 ","
        mid ":"
        AUTO_PLAY_TEXT "},"
        example_vote_good ":{"
        cid ":"
        73588 ","
        mid ":"
        EXAMPLE_VOTE_GOOD "},"
        example_vote_bad ":{"
        cid ":"
        73588 ","
        mid ":"
        EXAMPLE_VOTE_BAD "},"
        touch_landing_show ":{"
        cid ":"
        73697 ","
        mid ":"
        TOUCH_LANDING_SHOW "},"
        touch_landing_download ":{"
        cid ":"
        73698 ","
        mid ":"
        TOUCH_LANDING_DOWNLOAD "},"
        touch_landing_close ":{"
        cid ":"
        73699 ","
        mid ":"
        TOUCH_LANDING_CLOSE "},"
        touch_landing_close_cross ":{"
        cid ":"
        73708 ","
        mid ":"
        TOUCH_LANDING_CLOSE_CROSS "},"
        touch_dialog_tap ":{"
        cid ":"
        73686 ","
        mid ":"
        TOUCH_DIALOG_TAP "},"
        touch_dialog_disabled_tap ":{"
        cid ":"
        73686 ","
        mid ":"
        TOUCH_DIALOG_DISABLED_TAP "},"
        dist_banner_render ":{"
        cid ":"
        73692 ","
        mid ":"
        SHOW_DIST_BANNER "},"
        dist_banner_hide ":{"
        cid ":"
        73743 ","
        mid ":"
        AUTO_HIDE_DIST_BANNER "},"
        hide_banners_setting_enabled ":{"
        cid ":"
        74061 ","
        mid ":"
        HIDE_BANNERS_SETTING_ENABLED "},"
        hide_banners_setting_disabled ":{"
        cid ":"
        74062 ","
        mid ":"
        HIDE_BANNERS_SETTING_DISABLED "},"
        history_setting_enabled ":{"
        cid ":"
        74063 ","
        mid ":"
        HISTORY_SETTING_ENABLED "},"
        history_setting_disabled ":{"
        cid ":"
        74064 ","
        mid ":"
        HISTORY_SETTING_DISABLED "},"
        tap_miss ":{"
        cid ":"
        73700 ","
        mid ":"
        TAP_MISS "},"
        uniproxy_asr_error ":{"
        cid ":"
        73710 ","
        mid ":"
        UNIPROXY_ASR_ERROR "},"
        touch_uniproxy_asr_error ":{"
        cid ":"
        73710 ","
        mid ":"
        TOUCH_UNIPROXY_ASR_ERROR "},"
        uniproxy_tts_error ":{"
        cid ":"
        73711 ","
        mid ":"
        UNIPROXY_TTS_ERROR "},"
        touch_uniproxy_tts_error ":{"
        cid ":"
        73711 ","
        mid ":"
        TOUCH_UNIPROXY_TTS_ERROR "},"
        typing_speed_report ":{"
        cid ":"
        73797 "},"
        history_open ":{"
        cid ":"
        73811 ","
        mid ":"
        HISTORY_OPEN "},"
        history_select ":{"
        cid ":"
        73812 ","
        mid ":"
        HISTORY_SELECT "},"
        focused_element_activation ":{"
        cid ":"
        73880 ","
        mid ":"
        FOCUSED_ELEMENT_ACTIVATION "},"
        touch_example_link_click ":{"
        cid ":"
        74065 ","
        mid ":"
        TOUCH_EXAMPLE_LINK_CLICK "},"
        touch_example_tab_source_click ":{"
        cid ":"
        74066 ","
        mid ":"
        TOUCH_EXAMPLE_TAB_SOURCE_CLICK "},"
        touch_example_tab_word_click ":{"
        cid ":"
        74067 ","
        mid ":"
        TOUCH_EXAMPLE_TAB_WORD_CLICK "},"
        touch_dict_show_more ":{"
        cid ":"
        74068 ","
        mid ":"
        TOUCH_DICT_SHOW_MORE "},"
        touch_header_click ":{"
        cid ":"
        74069 ","
        mid ":"
        TOUCH_HEADER_CLICK "},"
        idioms_info_click ":{"
        cid ":"
        74083 ","
        mid ":"
        IDIOMS_INFO_CLICK "},"
        idioms_complaint_click ":{"
        cid ":"
        74084 ","
        mid ":"
        IDIOMS_COMPLAINT_CLICK "},"
        idioms_complaint_send ":{"
        cid ":"
        74085 ","
        mid ":"
        IDIOMS_COMPLAINT_SEND "},"
        idioms_rendered ":{"
        cid ":"
        74086 ","
        mid ":"
        IDIOMS_RENDERED "},"
        idioms_text_click ":{"
        cid ":"
        74087 ","
        mid ":"
        IDIOMS_TEXT_CLICK "},"
        idiom_example_popup_open ":{"
        cid ":"
        74088 ","
        mid ":"
        IDIOM_EXAMPLE_POPUP_OPEN "},"
        touch_idiom_text_expand ":{"
        cid ":"
        74089 ","
        mid ":"
        TOUCH_IDIOM_TEXT_EXPAND "},"
        related_words_render ":{"
        cid ":"
        74090 ","
        mid ":"
        RELATED_WORDS_RENDER "},"
        related_words_click ":{"
        cid ":"
        74091 ","
        mid ":"
        RELATED_WORDS_CLICK "},"
        related_words_expand ":{"
        cid ":"
        74092 ","
        mid ":"
        RELATED_WORDS_EXPAND "},"
        related_words_complaint_send ":{"
        cid ":"
        74093 ","
        mid ":"
        RELATED_WORDS_COMPLAINT_SEND "},"
        declensions_render ":{"
        cid ":"
        74101 ","
        mid ":"
        DECLENSIONS_RENDER "},"
        declensions_click ":{"
        cid ":"
        74102 ","
        mid ":"
        DECLENSIONS_CLICK "},"
        declensions_complaint_send ":{"
        cid ":"
        74103 ","
        mid ":"
        DECLENSIONS_COMPLAINT_SEND "},"
        declensions_expand ":{"
        cid ":"
        74104 ","
        mid ":"
        DECLENSIONS_EXPAND "},"
        langs_search_tap ":{"
        cid ":"
        74138 ","
        mid ":"
        TOUCH_LANGSELECT_OPEN_SEARCH "},"
        langs_search_select_lang ":{"
        cid ":"
        74139 ","
        mid ":"
        TOUCH_LANGSELECT_SEARCH_SELECT "},"
        touch_night_theme_user_activation ":{"
        cid ":"
        74140 ","
        mid ":"
        TOUCH_DARK_THEME_USER_ACTIVATION "},"
        touch_night_theme_auto_activation ":{"
        cid ":"
        74141 ","
        mid ":"
        TOUCH_DARK_THEME_AUTO_ACTIVATION "},"
        touch_night_theme_promo_show ":{"
        cid ":"
        74147 ","
        mid ":"
        TOUCH_DARK_THEME_PROMO_SHOW "},"
        touch_night_theme_promo_close ":{"
        cid ":"
        74148 ","
        mid ":"
        TOUCH_DARK_THEME_PROMO_CLOSE "},"
        touch_navigate_text ":{"
        mid ":"
        TOUCH_NAVIGATE_TRANSLATE "},"
        touch_navigate_dialog ":{"
        mid ":"
        TOUCH_NAVIGATE_DIALOG "},"
        touch_navigate_history ":{"
        mid ":"
        TOUCH_NAVIGATE_HISTORY "},"
        touch_navigate_favorites ":{"
        mid ":"
        TOUCH_NAVIGATE_FAVORITES "},"
        touch_nav_tab_activation ":{"
        cid ":"
        74184 "},"
        touch_expand_navigation ":{"
        mid ":"
        TOUCH_EXPAND_NAVIGATION ","
        cid ":"
        74185 "},"
        touch_history_collection_open ":{"
        mid ":"
        TOUCH_HISTORY_COLLECTION_OPEN "},"
        touch_favorites_collection_open ":{"
        mid ":"
        TOUCH_FAVORITES_COLLECTION_OPEN "}}')},function(e,t,n){"
        use strict ";Object.defineProperty(t,"
        __esModule ",{value:!0}),t.removeNodes=t.reparentNodes=t.isCEPolyfill=void 0;

        var i = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback;
        t.isCEPolyfill = i;
        t.reparentNodes = function (e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null; t !== n;) {
            var r = t.nextSibling;
            e.insertBefore(t, i), t = r
          }
        };
        t.removeNodes = function (e, t) {
          for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null; t !== n;) {
            var i = t.nextSibling;
            e.removeChild(t), t = i
          }
        }
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.lastAttributeNameRegex = t.createMarker = t.isTemplatePartActive = t.Template = t.boundAttributeSuffix = t.markerRegex = t.nodeMarker = t.marker = void 0, n(3), n(99), n(14), n(13), n(23), n(17), n(22);

        var i = "{{lit-".concat(String(Math.random()).slice(2), "}}");
        t.marker = i;
        var r = "<!--".concat(i, "-->");
        t.nodeMarker = r;
        var o = new RegExp("".concat(i, "|").concat(r));
        t.markerRegex = o;
        t.boundAttributeSuffix = "$lit$";
        t.Template = function e(t, n) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.parts = [], this.element = n;
          for (var r = [], u = [], l = document.createTreeWalker(n.content, 133, null, !1), d = 0, f = -1, p = 0, h = t.strings, g = t.values.length; p < g;) {
            var m = l.nextNode();
            if (null !== m) {
              if (f++, 1 === m.nodeType) {
                if (m.hasAttributes()) {
                  for (var _ = m.attributes, v = _.length, E = 0, T = 0; T < v; T++) s(_[T].name, "$lit$") && E++;
                  for (; E-- > 0;) {
                    var y = h[p],
                      S = c.exec(y)[2],
                      b = S.toLowerCase() + "$lit$",
                      O = m.getAttribute(b);
                    m.removeAttribute(b);
                    var C = O.split(o);
                    this.parts.push({
                      type: "attribute",
                      index: f,
                      name: S,
                      strings: C
                    }), p += C.length - 1
                  }
                }
                "TEMPLATE" === m.tagName && (u.push(m), l.currentNode = m.content)
              } else if (3 === m.nodeType) {
                var P = m.data;
                if (P.indexOf(i) >= 0) {
                  for (var I = m.parentNode, L = P.split(o), R = L.length - 1, A = 0; A < R; A++) {
                    var x = void 0,
                      N = L[A];
                    if ("" === N) x = a();
                    else {
                      var w = c.exec(N);
                      null !== w && s(w[2], "$lit$") && (N = N.slice(0, w.index) + w[1] + w[2].slice(0, -"$lit$".length) + w[3]), x = document.createTextNode(N)
                    }
                    I.insertBefore(x, m), this.parts.push({
                      type: "node",
                      index: ++f
                    })
                  }
                  "" === L[R] ? (I.insertBefore(a(), m), r.push(m)) : m.data = L[R], p += R
                }
              } else if (8 === m.nodeType)
                if (m.data === i) {
                  var D = m.parentNode;
                  null !== m.previousSibling && f !== d || (f++, D.insertBefore(a(), m)), d = f, this.parts.push({
                    type: "node",
                    index: f
                  }), null === m.nextSibling ? m.data = "" : (r.push(m), f--), p++
                } else
                  for (var M = -1; - 1 !== (M = m.data.indexOf(i, M + 1));) this.parts.push({
                    type: "node",
                    index: -1
                  }), p++
            } else l.currentNode = u.pop()
          }
          for (var V = 0, k = r; V < k.length; V++) {
            var U = k[V];
            U.parentNode.removeChild(U)
          }
        };
        var s = function (e, t) {
          var n = e.length - t.length;
          return n >= 0 && e.slice(n) === t
        };
        t.isTemplatePartActive = function (e) {
          return -1 !== e.index
        };
        var a = function () {
          return document.createComment("")
        };
        t.createMarker = a;
        var c = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
        t.lastAttributeNameRegex = c
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.TTSPlayer = t.PLAYER_PRIORITIES = t.PLAYER_STATES = t.PLAYER_ACTIONS = void 0;
        var i = n(30);
        t.PLAYER_ACTIONS = {
          LOAD: "load",
          PLAY: "play",
          STOP: "stop",
          ERROR: "error",
          UPDATE: "update"
        };
        t.PLAYER_STATES = {
          OK: "ok",
          TEXT_NOT_SUPPORTED: "textNotSupported",
          LANG_NOT_SUPPORTED: "langNotSupported",
          TEXT_SIZE_EXCEEDED: "textSizeExceeded"
        };
        t.PLAYER_PRIORITIES = {
          LOW: 1,
          NORMAL: 10,
          HIGH: 100
        };
        var r = i.Emitter.extend({
          init: function () {},
          play: function () {},
          stop: function () {},
          isActive: function () {},
          isLangSupported: function () {},
          isTextSupported: function () {},
          isTextSizeBelowLimit: function () {},
          getPriority: function () {},
          isValid: function (e, t, n) {
            this.isTextSupported(e) && this.isTextSizeBelowLimit(e) ? this.isLangSupported(t, (function (e) {
              n(e)
            })) : n(!1)
          }
        });
        t.TTSPlayer = r
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.AbstractIdiomsModule = t.MIN_IDIOMS_HEIGHT = t.IDIOMS_TEXT_OFFSET = t.IDIOMS_METRIKAS = t.IDIOMS_ACTIONS = t.IDIOMS_EVENTS = void 0;
        var i, r = (i = n(0)) && i.__esModule ? i : {
            default: i
          },
          o = n(114),
          s = n(157),
          a = n(160),
          c = n(266);
        var u = {
          OPEN_POPUP: "openIdiomPopup",
          IDIOM_FETCHED: "idiomFetched",
          CLEAR_IDIOMS: "idiomsClear",
          SET_COMPLAINT: "setComplaint",
          SEND_METRIC: "sendIdiomsMetric",
          EXPAND_IDIOM: "expandIdiom"
        };
        t.IDIOMS_EVENTS = u;
        var l = {
          COMPLAINT: "idiomsComplaint",
          CLOSE_POPUP: "closeIdiomsPopup"
        };
        t.IDIOMS_ACTIONS = l;
        var d = {
          INFO_CLICK: "idioms_info_click",
          COMPLAINT_CLICK: "idioms_complaint_click",
          COMPLAINT_SEND: "idioms_complaint_send",
          RENDER: "idioms_rendered",
          TEXT_CLICK: "idioms_text_click",
          IDIOM_EXAMPLE_POPUP_OPEN: "idiom_example_popup_open",
          TOUCH_IDIOM_TEXT_EXPAND: "touch_idiom_text_expand",
          COMMON_EVENT: "sendIdiomMetric"
        };
        t.IDIOMS_METRIKAS = d;
        var f = (0, o.getTrackerByNamespace)(d).$track;
        t.IDIOMS_TEXT_OFFSET = 20;
        t.MIN_IDIOMS_HEIGHT = 20;
        var p = a.AppModule.extend({
          init: function () {
            var e = this;
            this.idiomsComponent = this._makeIdiomsComponent(), this.idiomsPopup = this._makeIdiomsPopup(), this.model = this._makeIdiomsModel(), this.listenApp(), this.listenIdiomsComponent(), this.appModel.onChange(["text", "srcLang", "dstLang"], (function () {
              var t = e.appModel.getProps(),
                n = t.text,
                i = t.srcLang,
                r = t.dstLang;
              e.handlePropsChange({
                text: n,
                srcLang: i,
                dstLang: r
              })
            })), this.appView.on("tap", (function (t) {
              e.isIdiomNode(t) || e.closePopup(!0)
            }))
          },
          reset: function () {
            this.idiomsComponent.setProperty("text", "").setProperty("popupIsVisible", !1).setVisible(!1).updateAsync(), this.model.setProperty("buttonNumber", null), this.idiomsPopup.setVisible(!1), this.app.emit("idiomsRendered", 0)
          },
          listenApp: function () {
            var e = this;
            this.app.onAction(l.CLOSE_POPUP, (function () {
              return e.closePopup()
            })).onAction(l.COMPLAINT, (function () {
              return e._handleComplaintMode(!0)
            })).onAction("cancelComplaintMode", (function () {
              e.idiomsComponent.setProperty("complaint", !1)
            })).on(u.IDIOM_FETCHED, (function (t) {
              return e._setText(t)
            })).on(u.CLEAR_IDIOMS, (function () {
              e.reset(), e.app.emit("idiomsRendered", 0)
            })).on("translationError", (function () {
              return e.reset()
            })).on("resize", (function () {
              return e._updatePopupPosition()
            }))
          },
          listenIdiomsComponent: function () {
            var e = this;
            this.idiomsComponent.on(u.OPEN_POPUP, (function (t, n) {
              return e._handlePopupVisibility(t, n)
            })).on(u.SEND_METRIC, (function (t) {
              return e._sendMetric(t)
            }))
          },
          isIdiomNode: function (e) {
            return !e.target || !r.default.isString(e.target.className) || e.target.className.indexOf("idiomsPopup") >= 0 || e.target.className.indexOf("idioms-info") >= 0 || e.target.className.indexOf("idiom-info") >= 0 || e.target.className.indexOf("type_idiom") >= 0 && -1 === e.target.className.indexOf("example")
          },
          closePopup: function () {
            this._handlePopupVisibility(!1)
          },
          handlePropsChange: function (e) {
            this.model.updateHash(e), this.model.needReset() && this.reset()
          },
          _makeIdiomsModel: function () {
            return new c.IdiomsModel({
              hash: "",
              buttonNumber: null
            })
          },
          _sendMetric: function (e) {
            var t = this.app.getProps(),
              n = t.srcLang,
              i = t.dstLang,
              r = {
                srcText: t.text,
                idiomText: this.idiomsComponent.getText(),
                dir: "".concat(n, "-").concat(i)
              };
            f(d.COMMON_EVENT, {
              metricKey: e,
              metricInfo: r
            })
          },
          _handlePopupVisibility: function (e, t) {
            this.idiomsComponent.setProperty("popupIsVisible", e).updateAsync(), e && s.PositionedView.prototype.setPosition.call(this.idiomsPopup, t, !1), this.idiomsPopup.setVisible(e)
          },
          _updatePopupPosition: function () {
            this.idiomsComponent.updatePopupPosition()
          }
        });
        t.AbstractIdiomsModule = p
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.rumTimeStart = function (e) {
          try {
            0,
              window.Ya.Rum.time(e)
          }
          catch (e) {}
        }, t.rumTimeEnd = function (e) {
          try {
            0,
              window.Ya.Rum.timeEnd(e)
          }
          catch (e) {}
        }, t.rumSendTimeMark = function (e) {
          try {
            window.Ya.Rum.sendTimeMark(e)
          } catch (e) {}
        }, t.RUM_COUNTERS = void 0;
        t.RUM_COUNTERS = {
          APP_INIT_START: "app-init-start",
          APP_INIT_DURATION: "app-init-duration",
          BLANK_FIRST_TYPING: "blank-first-typing",
          BLANK_FIRST_TRANSLATION: "blank-first-translation",
          FILLED_FIRST_TYPING: "filled-first-typing",
          FILLED_FIRST_TRANSLATION: "filled-first-translation"
        }
      },
      function (e, t, n) {
        var i = n(31),
          r = n(60),
          o = n(7),
          s = n(4).Reflect;
        e.exports = s && s.ownKeys || function (e) {
          var t = i.f(o(e)),
            n = r.f;
          return n ? t.concat(n(e)) : t
        }
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.TableauPresenter = void 0, n(22);
        var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        };
        var o = n(32).Presenter.extend({
          init: function () {
            var e = this,
              t = this.getView(),
              n = this.getModel();
            window.addEventListener("message", (function (n) {
              var i = n.data;
              if (o.isValidMessage(i)) switch ((i = i.split(":"))[0].split(".")[1]) {
                case "close":
                  t.setVisible(!1);
                  break;
                case "height":
                  t.getElement().style.height = i[1] + "px", e.emit("ready")
              }
            }), !1), n.on("change", (function (t, n) {
              switch (t) {
                case "text":
                  e.postData({
                    fnName: "updateUrls",
                    fnArgs: [{
                      text: n,
                      serviceId: this.getProperty("service")
                    }]
                  });
                  break;
                default:
                  e.sync()
              }
            })), this.sync()
          },
          sync: function () {
            return this.getView().getContentElement().src = this.getModel().getSrc(), this
          },
          setText: function (e) {
            return this.getModel().setProperty("text", e), this
          },
          postData: function (e) {
            var t = this.getView().getContentElement().contentWindow;
            if (t) {
              var n = e;
              r.default.isString(e) || (n = JSON.stringify(e)), t.postMessage(n, "*")
            }
            return this
          }
        }, {
          messagePrefix: "tableau",
          isValidMessage: function (e) {
            return r.default.isString(e) && 0 === e.indexOf(this.messagePrefix)
          }
        });
        t.TableauPresenter = o
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.TableauModel = void 0;
        var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        };
        var o = n(20).Model.extend({
          getSrc: function () {
            var e = this.toJSON();
            return e.url + "?" + r.default.toQueryString({
              lang: e.lang,
              preset: e.preset,
              domain: e.domain,
              device: e.device,
              "service-id": e.service
            })
          },
          getDefaults: function () {
            return {
              url: "/",
              text: "",
              lang: "",
              domain: "",
              device: "desktop",
              service: ""
            }
          }
        });
        t.TableauModel = o
      },
      function (e, t, n) {
        "use strict";
        var i = n(4),
          r = n(1),
          o = n(15),
          s = n(64),
          a = n(63),
          c = n(155),
          u = n(65),
          l = n(10),
          d = n(5),
          f = n(87),
          p = n(48),
          h = n(88);
        e.exports = function (e, t, n, g, m, _) {
          var v = i[e],
            E = v,
            T = m ? "set" : "add",
            y = E && E.prototype,
            S = {},
            b = function (e) {
              var t = y[e];
              o(y, e, "delete" == e || "has" == e ? function (e) {
                return !(_ && !l(e)) && t.call(this, 0 === e ? 0 : e)
              } : "get" == e ? function (e) {
                return _ && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
              } : "add" == e ? function (e) {
                return t.call(this, 0 === e ? 0 : e), this
              } : function (e, n) {
                return t.call(this, 0 === e ? 0 : e, n), this
              })
            };
          if ("function" == typeof E && (_ || y.forEach && !d((function () {
            (new E).entries().next()
          })))) {
            var O = new E,
              C = O[T](_ ? {} : -0, 1) != O,
              P = d((function () {
                O.has(1)
              })),
              I = f((function (e) {
                new E(e)
              })),
              L = !_ && d((function () {
                for (var e = new E, t = 5; t--;) e[T](t, t);
                return !e.has(-0)
              }));
            I || ((E = t((function (t, n) {
              u(t, E, e);
              var i = h(new v, t, E);
              return null != n && c(n, m, i[T], i), i
            }))).prototype = y, y.constructor = E), (P || L) && (b("delete"), b("has"), m && b("get")), (L || C) && b(T), _ && y.clear && delete y.clear
          } else E = g.getConstructor(t, e, m, T), s(E.prototype, n), a.NEED = !0;
          return p(E, e), S[e] = E, r(r.G + r.W + r.F * (E != v), S), _ || g.setStrong(E, e, m), E
        }
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SyncModel = void 0;
        var i = n(20).Model.extend({
          init: function () {
            this.on("invalid", this.abort)
          },
          abort: function () {
            return this._activeRequest && (this._activeRequest.abort(), this._activeRequest = null), this
          },
          setRequest: function (e) {
            return this.abort(), this._activeRequest = e, this
          }
        });
        t.SyncModel = i
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.CollectionServerModel = t.COLLECTION_STATUSES = t.COLLECTION_ACTIONS = t.COLLECTION_TYPES = void 0;
        var i = n(81),
          r = n(59),
          o = {
            FAVORITES: 0,
            COLLECTION: 1,
            SUBSCRIPTION: 2,
            BROKEN_SUBSCRIPTION: 3,
            HISTORY: 4
          };
        t.COLLECTION_TYPES = o;
        t.COLLECTION_ACTIONS = {
          NOP: 0,
          ADD: 1,
          DELETE: 2,
          UPDATE: 3,
          REGISTER: 4,
          DROP: 5,
          POSTPONE: 6,
          MERGE: 7
        };
        var s = {
          UNCHANGED: 0,
          ADDED: 1,
          DELETED: 2,
          UPDATED: 3,
          ABSENT: 4
        };
        t.COLLECTION_STATUSES = s;
        var a = i.ListboxModel.extend({
          getDefaults: function () {
            return {
              srv: "",
              uid: "",
              url: "/",
              items: "",
              value: "",
              xtoken: ""
            }
          },
          getParams: function () {
            var e = this.getProps();
            return {
              srv: e.srv,
              uid: e.uid
            }
          },
          _getCollection: function (e) {
            var t = this,
              n = this.getProps().url;
            return new r.HTTPRequest(n + "collections/" + e).setMethod(r.HTTPRequest.methods.GET).setHeader("X-CSRF-Token", this.getProperty("xtoken")).setParams(this.getParams()).send((function (e, n) {
              if (e) return t.emit("error", e);
              t.emit("collectionData", n.body.collection)
            })), this
          },
          _subscribe: function (e) {
            var t = this,
              n = this.getProps(),
              i = n.url,
              o = n.uid;
            return new r.HTTPRequest(i + "users/" + o + "/collections").setData(e).setType(r.HTTPRequest.types.JSON).setMethod(r.HTTPRequest.methods.POST).setHeader("X-CSRF-Token", this.getProperty("xtoken")).setParams(this.getParams()).send((function (e, n) {
              if (e) return t.emit("error", e);
              t.emit("subscribed", n.body.collection)
            })), this
          },
          _syncCollection: function (e, t) {
            var n = this,
              i = this.getProps(),
              o = i.url,
              s = i.uid;
            new r.HTTPRequest(o + "users/" + s + "/collections/" + e + "/sync").setData(t).setType(r.HTTPRequest.types.JSON).setMethod(r.HTTPRequest.methods.POST).setHeader("X-CSRF-Token", this.getProperty("xtoken")).setParams(this.getParams()).send((function (e, t) {
              if (e) return n.emit("error", e);
              n.emit("mergeCollection", t.body.collectionAction)
            }))
          },
          _presyncCollections: function (e) {
            var t = this,
              n = this.getProps(),
              i = n.url,
              o = n.uid;
            return new r.HTTPRequest(i + "users/" + o + "/collections/pre-sync").setData(e).setType(r.HTTPRequest.types.JSON).setMethod(r.HTTPRequest.methods.POST).setHeader("X-CSRF-Token", this.getProperty("xtoken")).setParams(this.getParams()).send((function (e, n) {
              if (e) return t.emit("error", e);
              t.emit("processCollections", n.body.collectionsActions)
            })), this
          },
          _getCollections: function () {
            var e = this,
              t = this.getProps().url;
            return new r.HTTPRequest(t + "collections").setMethod(r.HTTPRequest.methods.GET).setHeader("X-CSRF-Token", this.getProperty("xtoken")).setParams(this.getParams()).send((function (t, n) {
              if (t) return e.emit("error", t);
              e.emit("collections", n.body.collections)
            })), this
          }
        }, {
          getTimestamp: function () {
            return Date.now() / 1e3
          },
          isNotDeleted: function (e) {
            return e && e.status !== s.DELETED
          },
          isSubscription: function (e) {
            return e && (e.type === o.SUBSCRIPTION || e.type === o.BROKEN_SUBSCRIPTION)
          }
        });
        t.CollectionServerModel = a
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.Storage = void 0, n(17);
        var i = n(20).Model.extend({
          init: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.name || "mTr";
            this._name = n;
            try {
              this.setProperty(JSON.parse(localStorage[n]))
            } catch (e) {}
            this.on("change", (function () {
              try {
                localStorage[n] = JSON.stringify(this)
              } catch (e) {
                this.emit("error", e)
              }
            }))
          },
          getName: function () {
            return this._name
          }
        });
        t.Storage = i
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.DictionaryPresenter = t.DICT_TYPES = t.DICT_FLAGS = void 0, n(22);
        var i, r = (i = n(0)) && i.__esModule ? i : {
            default: i
          },
          o = n(32);
        var s = {
          NONE: 0,
          FAMILY: 1,
          SHORT_POS: 2,
          MORPHO: 4,
          RELIABLE: 16,
          TOOLTIPS: 32,
          LONG_EXAMPLES: 64,
          DEFINITIONS: 128,
          DECLENSIONS: 256,
          IDIOMS: 1024,
          OFFENSIVE_MARKS: 2048
        };
        t.DICT_FLAGS = s;
        var a = {
          SYN: "syn",
          ANT: "ant",
          DEF: "def",
          DERIV: "deriv",
          REGULAR: "regular"
        };
        t.DICT_TYPES = a;
        var c = o.Presenter.extend({
          init: function (e) {
            var t = e.isDisabled,
              n = this,
              i = this.getView(),
              o = this.getModel();
            this.requestData = r.default.debounce(c.prototype.requestData), i.on("itemSelected", (function (e) {
              e && n.emit("valueSelected", e)
            })), o.on("change", (function (e) {
              switch (e) {
                case "ui":
                case "text":
                case "type":
                case "flags":
                  n.requestData();
                  break;
                case "srcLang":
                case "dstLang":
                  n._handleChangeLang()
              }
            })).on("error", (function (e) {
              n.emit("error", e)
            })).on("invalid", (function () {
              this.setProperty("data", "", {
                invalid: !0
              })
            })).on("set:data", (function (e, i) {
              t && t() || n._renderData(e, i)
            }))
          },
          setText: function (e, t) {
            return this.getModel().setProperty("text", e, t), this
          },
          hasFlag: function (e) {
            return (this.getModel().getProperty("flags") & e) === e
          },
          setFlag: function (e, t) {
            var n = this.getModel(),
              i = n.getProperty("flags");
            return Boolean(t) === this.hasFlag(e) || (i += e * (t ? 1 : -1), n.setProperty("flags", i)), this
          },
          setType: function (e, t) {
            var n = this.getModel(),
              i = n.getProperty("type"),
              r = (i = i ? i.split(",") : []).indexOf(e);
            return Boolean(t) === r >= 0 || (t ? i.push(e) : i.splice(r, 1), n.setProperty("type", i.join(","))), this
          },
          hasType: function (e) {
            var t = this.getModel().getProperty("type");
            return -1 !== (t = t ? t.split(",") : []).indexOf(e)
          },
          requestData: function () {
            return this.getModel().requestData(), this
          },
          setSrcLanguage: function (e, t) {
            return this.getModel().setProperty("srcLang", e, t), this
          },
          setDstLanguage: function (e, t) {
            return this.getModel().setProperty("dstLang", e, t), this
          },
          _renderData: function (e, t) {
            var n = e,
              i = this.getView();
            e && (n = this.prepareData(e)) && i.renderData(n), this._handleSetData(n, t)
          },
          _handleSetData: function (e) {
            this.getView().setVisible(e)
          },
          _handleChangeLang: function () {
            this.requestData()
          }
        }, {
          flags: s,
          types: a
        });
        t.DictionaryPresenter = c
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.SpeechRecognizerBase = t.RECOGNITION_EVENTS = t.RECOGNITION_ERRORS = t.RECOGNITION_PRIORITIES = void 0;
        var i = n(30),
          r = {
            LOW: 1,
            NORMAL: 10,
            HIGH: 100
          };
        t.RECOGNITION_PRIORITIES = r;
        t.RECOGNITION_ERRORS = {
          ABORTED: "aborted",
          NETWORK: "network",
          NOT_ALLOWED: "not-allowed",
          NO_SPEECH: "no-speech"
        };
        t.RECOGNITION_EVENTS = {
          END: "end",
          START: "start",
          RECOGNIZE: "recognize"
        };
        var o = i.Emitter.extend({
          startListening: function () {},
          convertLanguage: function () {},
          prepareData: function () {},
          getVisualizer: function () {},
          getPriority: function () {
            return r.NORMAL
          }
        }, {
          isAvailable: function () {}
        });
        t.SpeechRecognizerBase = o
      },
      function (e, t, n) {
        "use strict";
        n(3), n(47), n(180), n(181), n(190), n(51), Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.EventPart = t.PropertyPart = t.PropertyCommitter = t.BooleanAttributePart = t.NodePart = t.AttributePart = t.AttributeCommitter = t.isIterable = t.isPrimitive = void 0, n(26), n(14), n(13), n(23), n(24), n(17);
        var i = n(191),
          r = n(165),
          o = n(192),
          s = n(193),
          a = n(194),
          c = n(166);

        function u(e, t, n) {
          return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
            var i = function (e, t) {
              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
              return e
            }(e, t);
            if (i) {
              var r = Object.getOwnPropertyDescriptor(i, t);
              return r.get ? r.get.call(n) : r.value
            }
          })(e, t, n || e)
        }

        function l(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && d(e, t)
        }

        function d(e, t) {
          return (d = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
          })(e, t)
        }

        function f(e) {
          var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
              return !1
            }
          }();
          return function () {
            var n, i = h(e);
            if (t) {
              var r = h(this).constructor;
              n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments);
            return p(this, n)
          }
        }

        function p(e, t) {
          return !t || "object" !== T(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e) : t
        }

        function h(e) {
          return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
        }

        function g(e, t) {
          var n;
          if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return m(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var i = 0,
                r = function () {};
              return {
                s: r,
                n: function () {
                  return i >= e.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: e[i++]
                  }
                },
                e: function (e) {
                  throw e
                },
                f: r
              }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }
          var o, s = !0,
            a = !1;
          return {
            s: function () {
              n = e[Symbol.iterator]()
            },
            n: function () {
              var e = n.next();
              return s = e.done, e
            },
            e: function (e) {
              a = !0, o = e
            },
            f: function () {
              try {
                s || null == n.return || n.return()
              } finally {
                if (a) throw o
              }
            }
          }
        }

        function m(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
          return i
        }

        function _(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function v(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
          }
        }

        function E(e, t, n) {
          return t && v(e.prototype, t), n && v(e, n), e
        }

        function T(e) {
          return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          })(e)
        }
        var y = function (e) {
          return null === e || !("object" === T(e) || "function" == typeof e)
        };
        t.isPrimitive = y;
        var S = function (e) {
          return Array.isArray(e) || !(!e || !e[Symbol.iterator])
        };
        t.isIterable = S;
        var b = function () {
          function e(t, n, i) {
            _(this, e), this.dirty = !0, this.element = t, this.name = n, this.strings = i, this.parts = [];
            for (var r = 0; r < i.length - 1; r++) this.parts[r] = this._createPart()
          }
          return E(e, [{
            key: "_createPart",
            value: function () {
              return new O(this)
            }
          }, {
            key: "_getValue",
            value: function () {
              var e = this.strings,
                t = e.length - 1,
                n = this.parts;
              if (1 === t && "" === e[0] && "" === e[1]) {
                var i = n[0].value;
                if ("symbol" === T(i)) return String(i);
                if ("string" == typeof i || !S(i)) return i
              }
              for (var r = "", o = 0; o < t; o++) {
                r += e[o];
                var s = n[o];
                if (void 0 !== s) {
                  var a = s.value;
                  if (y(a) || !S(a)) r += "string" == typeof a ? a : String(a);
                  else {
                    var c, u = g(a);
                    try {
                      for (u.s(); !(c = u.n()).done;) {
                        var l = c.value;
                        r += "string" == typeof l ? l : String(l)
                      }
                    } catch (e) {
                      u.e(e)
                    } finally {
                      u.f()
                    }
                  }
                }
              }
              return r += e[t]
            }
          }, {
            key: "commit",
            value: function () {
              this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
            }
          }]), e
        }();
        t.AttributeCommitter = b;
        var O = function () {
          function e(t) {
            _(this, e), this.value = void 0, this.committer = t
          }
          return E(e, [{
            key: "setValue",
            value: function (e) {
              e === o.noChange || y(e) && e === this.value || (this.value = e, (0, i.isDirective)(e) || (this.committer.dirty = !0))
            }
          }, {
            key: "commit",
            value: function () {
              for (;
                (0, i.isDirective)(this.value);) {
                var e = this.value;
                this.value = o.noChange, e(this)
              }
              this.value !== o.noChange && this.committer.commit()
            }
          }]), e
        }();
        t.AttributePart = O;
        var C = function () {
          function e(t) {
            _(this, e), this.value = void 0, this.__pendingValue = void 0, this.options = t
          }
          return E(e, [{
            key: "appendInto",
            value: function (e) {
              this.startNode = e.appendChild((0, c.createMarker)()), this.endNode = e.appendChild((0, c.createMarker)())
            }
          }, {
            key: "insertAfterNode",
            value: function (e) {
              this.startNode = e, this.endNode = e.nextSibling
            }
          }, {
            key: "appendIntoPart",
            value: function (e) {
              e.__insert(this.startNode = (0, c.createMarker)()), e.__insert(this.endNode = (0, c.createMarker)())
            }
          }, {
            key: "insertAfterPart",
            value: function (e) {
              e.__insert(this.startNode = (0, c.createMarker)()), this.endNode = e.endNode, e.endNode = this.startNode
            }
          }, {
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e
            }
          }, {
            key: "commit",
            value: function () {
              if (null !== this.startNode.parentNode) {
                for (;
                  (0, i.isDirective)(this.__pendingValue);) {
                  var e = this.__pendingValue;
                  this.__pendingValue = o.noChange, e(this)
                }
                var t = this.__pendingValue;
                t !== o.noChange && (y(t) ? t !== this.value && this.__commitText(t) : t instanceof a.TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : S(t) ? this.__commitIterable(t) : t === o.nothing ? (this.value = o.nothing, this.clear()) : this.__commitText(t))
              }
            }
          }, {
            key: "__insert",
            value: function (e) {
              this.endNode.parentNode.insertBefore(e, this.endNode)
            }
          }, {
            key: "__commitNode",
            value: function (e) {
              this.value !== e && (this.clear(), this.__insert(e), this.value = e)
            }
          }, {
            key: "__commitText",
            value: function (e) {
              var t = this.startNode.nextSibling,
                n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
              t === this.endNode.previousSibling && 3 === t.nodeType ? t.data = n : this.__commitNode(document.createTextNode(n)), this.value = e
            }
          }, {
            key: "__commitTemplateResult",
            value: function (e) {
              var t = this.options.templateFactory(e);
              if (this.value instanceof s.TemplateInstance && this.value.template === t) this.value.update(e.values);
              else {
                var n = new s.TemplateInstance(t, e.processor, this.options),
                  i = n._clone();
                n.update(e.values), this.__commitNode(i), this.value = n
              }
            }
          }, {
            key: "__commitIterable",
            value: function (t) {
              Array.isArray(this.value) || (this.value = [], this.clear());
              var n, i, r = this.value,
                o = 0,
                s = g(t);
              try {
                for (s.s(); !(i = s.n()).done;) {
                  var a = i.value;
                  void 0 === (n = r[o]) && (n = new e(this.options), r.push(n), 0 === o ? n.appendIntoPart(this) : n.insertAfterPart(r[o - 1])), n.setValue(a), n.commit(), o++
                }
              } catch (e) {
                s.e(e)
              } finally {
                s.f()
              }
              o < r.length && (r.length = o, this.clear(n && n.endNode))
            }
          }, {
            key: "clear",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.startNode;
              (0, r.removeNodes)(this.startNode.parentNode, e.nextSibling, this.endNode)
            }
          }]), e
        }();
        t.NodePart = C;
        var P = function () {
          function e(t, n, i) {
            if (_(this, e), this.value = void 0, this.__pendingValue = void 0, 2 !== i.length || "" !== i[0] || "" !== i[1]) throw new Error("Boolean attributes can only contain a single expression");
            this.element = t, this.name = n, this.strings = i
          }
          return E(e, [{
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e
            }
          }, {
            key: "commit",
            value: function () {
              for (;
                (0, i.isDirective)(this.__pendingValue);) {
                var e = this.__pendingValue;
                this.__pendingValue = o.noChange, e(this)
              }
              if (this.__pendingValue !== o.noChange) {
                var t = !!this.__pendingValue;
                this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = o.noChange
              }
            }
          }]), e
        }();
        t.BooleanAttributePart = P;
        var I = function (e) {
          l(n, e);
          var t = f(n);

          function n(e, i, r) {
            var o;
            return _(this, n), (o = t.call(this, e, i, r)).single = 2 === r.length && "" === r[0] && "" === r[1], o
          }
          return E(n, [{
            key: "_createPart",
            value: function () {
              return new L(this)
            }
          }, {
            key: "_getValue",
            value: function () {
              return this.single ? this.parts[0].value : u(h(n.prototype), "_getValue", this).call(this)
            }
          }, {
            key: "commit",
            value: function () {
              this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
            }
          }]), n
        }(b);
        t.PropertyCommitter = I;
        var L = function (e) {
          l(n, e);
          var t = f(n);

          function n() {
            return _(this, n), t.apply(this, arguments)
          }
          return n
        }(O);
        t.PropertyPart = L;
        var R = !1;
        ! function () {
          try {
            var e = {
              get capture() {
                return R = !0, !1
              }
            };
            window.addEventListener("test", e, e), window.removeEventListener("test", e, e)
          } catch (e) {}
        }();
        var A = function () {
          function e(t, n, i) {
            var r = this;
            _(this, e), this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = n, this.eventContext = i, this.__boundHandleEvent = function (e) {
              return r.handleEvent(e)
            }
          }
          return E(e, [{
            key: "setValue",
            value: function (e) {
              this.__pendingValue = e
            }
          }, {
            key: "commit",
            value: function () {
              for (;
                (0, i.isDirective)(this.__pendingValue);) {
                var e = this.__pendingValue;
                this.__pendingValue = o.noChange, e(this)
              }
              if (this.__pendingValue !== o.noChange) {
                var t = this.__pendingValue,
                  n = this.value,
                  r = null == t || null != n && (t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive),
                  s = null != t && (null == n || r);
                r && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), s && (this.__options = x(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = o.noChange
              }
            }
          }, {
            key: "handleEvent",
            value: function (e) {
              "function" == typeof this.value ? this.value.call(this.eventContext || this.element, e) : this.value.handleEvent(e)
            }
          }]), e
        }();
        t.EventPart = A;
        var x = function (e) {
          return e && (R ? {
            capture: e.capture,
            passive: e.passive,
            once: e.once
          } : e.capture)
        }
      },
      function (e, t, n) {
        var i = n(19),
          r = n(89);
        n(90)("getPrototypeOf", (function () {
          return function (e) {
            return r(i(e))
          }
        }))
      },
      function (e, t, n) {
        var i = n(1),
          r = n(49),
          o = n(84),
          s = n(7),
          a = n(10),
          c = n(5),
          u = n(224),
          l = (n(4).Reflect || {}).construct,
          d = c((function () {
            function e() {}
            return !(l((function () {}), [], e) instanceof e)
          })),
          f = !c((function () {
            l((function () {}))
          }));
        i(i.S + i.F * (d || f), "Reflect", {
          construct: function (e, t) {
            o(e), s(t);
            var n = arguments.length < 3 ? e : o(arguments[2]);
            if (f && !d) return l(e, t, n);
            if (e == n) {
              switch (t.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t[0]);
                case 2:
                  return new e(t[0], t[1]);
                case 3:
                  return new e(t[0], t[1], t[2]);
                case 4:
                  return new e(t[0], t[1], t[2], t[3])
              }
              var i = [null];
              return i.push.apply(i, t), new(u.apply(e, i))
            }
            var c = n.prototype,
              p = r(a(c) ? c : Object.prototype),
              h = Function.apply.call(e, p, t);
            return a(h) ? h : p
          }
        })
      },
      function (e, t, n) {
        "use strict";
        var i = n(64),
          r = n(63).getWeak,
          o = n(7),
          s = n(10),
          a = n(65),
          c = n(155),
          u = n(43),
          l = n(21),
          d = n(115),
          f = u(5),
          p = u(6),
          h = 0,
          g = function (e) {
            return e._l || (e._l = new m)
          },
          m = function () {
            this.a = []
          },
          _ = function (e, t) {
            return f(e.a, (function (e) {
              return e[0] === t
            }))
          };
        m.prototype = {
          get: function (e) {
            var t = _(this, e);
            if (t) return t[1]
          },
          has: function (e) {
            return !!_(this, e)
          },
          set: function (e, t) {
            var n = _(this, e);
            n ? n[1] = t : this.a.push([e, t])
          },
          delete: function (e) {
            var t = p(this.a, (function (t) {
              return t[0] === e
            }));
            return ~t && this.a.splice(t, 1), !!~t
          }
        }, e.exports = {
          getConstructor: function (e, t, n, o) {
            var u = e((function (e, i) {
              a(e, u, t, "_i"), e._t = t, e._i = h++, e._l = void 0, null != i && c(i, n, e[o], e)
            }));
            return i(u.prototype, {
              delete: function (e) {
                if (!s(e)) return !1;
                var n = r(e);
                return !0 === n ? g(d(this, t)).delete(e) : n && l(n, this._i) && delete n[this._i]
              },
              has: function (e) {
                if (!s(e)) return !1;
                var n = r(e);
                return !0 === n ? g(d(this, t)).has(e) : n && l(n, this._i)
              }
            }), u
          },
          def: function (e, t, n) {
            var i = r(o(t), !0);
            return !0 === i ? g(e).set(t, n) : i[e._i] = n, e
          },
          ufstore: g
        }
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.RELATED_WORDS_METRIKAS = t.DEFAULT_ITEMS_AMOUNT = t.RELATED_WORDS_EVENTS = void 0;
        t.RELATED_WORDS_EVENTS = {
          WORDS_FETCHED: "RELATED_WORDS_FETCHED",
          WORD_CLICK: "RELATED_WORDS_CLICK"
        };
        t.DEFAULT_ITEMS_AMOUNT = 10;
        t.RELATED_WORDS_METRIKAS = {
          RENDER: "related_words_render",
          WORDS_CLICK: "related_words_click",
          WORDS_EXPAND: "related_words_expand",
          WORDS_COMPLAINT_SEND: "related_words_complaint_send"
        }
      },
    ,
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslatorModel = void 0, n(35), n(18);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(20),
        s = n(92),
        a = n(59);
      var c = o.Model.extend({
        init: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this.resetCache(), this._cacheEnabled = Boolean(t.cacheEnabled)
        },
        reset: function () {
          return this._activeRequest && (this._activeRequest.abort(), this._activeRequest = null), this
        },
        getData: function () {
          return {
            text: this.getText(),
            options: this.getProperty("options")
          }
        },
        getText: function () {
          var e = this.getProperty("text");
          return e ? JSON.parse(e) : []
        },
        setText: function (e, t) {
          return this.setProperty("text", e && JSON.stringify(e), t)
        },
        getParams: function () {
          var e = this.toJSON();
          return {
            id: [e.sid, e.counter - 1, 0].join("-"),
            srv: e.srv,
            lang: e.srcLang + "-" + e.dstLang,
            reason: e.reason,
            format: e.format
          }
        },
        resetCache: function () {
          return this._cache = {}, this
        },
        getDefaults: function () {
          return {
            srv: "",
            url: "/",
            text: "",
            format: c.formats.TEXT,
            reason: "",
            counter: 0,
            options: 0,
            srcLang: "",
            dstLang: "",
            translation: "",
            shouldNotRequest: !1,
            sid: this.getId()
          }
        },
        _getCacheKey: function (e) {
          return [this.getProperty("srcLang"), this.getProperty("dstLang"), e].join("-")
        },
        _getFromCache: function (e) {
          return this._cache[this._getCacheKey(e)] || ""
        },
        increaseCounter: function () {
          return this.setProperty("counter", this.getProperty("counter") + 1)
        },
        requestTranslation: function () {
          var e, t = this;
          if (this.reset(), !this.isValid()) return this;
          var n = this.getData();
          this.increaseCounter();
          var i = this.getParams(),
            o = new a.HTTPRequest(this.getProperty("url"));
          return this.emit("query", r.default.extend({}, n, i)), this._cacheEnabled && (e = n.text, n.text = e.filter((function (e) {
            return !t._getFromCache(e)
          })), !n.text.length) ? this.setProperty("translation", e.map(this._getFromCache, this).join("\n")) : (this._activeRequest = o.setType(a.HTTPRequest.types.FORM).setData(n).setParams(i).setMethod(a.HTTPRequest.methods.POST).send((function (i, r) {
            var o, c = i ? i.code : r.body.code;
            if (t._activeRequest = null, c === a.HTTPRequest.codes.OK) o = r.body.text, t._cacheEnabled && (n.text.forEach((function (e, n) {
              t._cache[t._getCacheKey(e)] = o[n]
            })), o = e.map(t._getFromCache, t)), t.setProperty("translation", o.join("\n"), {
              align: r.body.align && r.body.align[0]
            });
            else if (c !== s.HTTPError.ABORT) return t.emit("error", i || new s.HTTPError(c, r.body.message))
          })), this)
        }
      }, {
        options: {
          ALIGN: 4
        },
        formats: {
          TEXT: "text",
          HTML: "html"
        },
        errorMap: {
          INVALID_SESSION: 405,
          EXPIRED_SESSION: 406
        }
      });
      t.TranslatorModel = c
    },
    ,
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(51), n(68), n(26), n(14), n(13), n(23), n(3), n(17), n(47), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Router = t.HISTORY_MOVES = t.ROUTER_EVENTS = void 0, n(35);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(20),
        s = n(220),
        a = n(221);

      function c(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return u(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach((function (t) {
            f(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var p = {
        NAVIGATED_FROM_URL: "navigatedFromURL",
        HISTORY_MOVE: "historyMove",
        MODEL_UPDATED: "modelUpdated",
        VIEW_ID_UPDATED: "viewIdUpdated"
      };
      t.ROUTER_EVENTS = p;
      var h = "currentRoute",
        g = "push",
        m = "replace",
        _ = {
          BACK: "back",
          FORWARD: "forward"
        };
      t.HISTORY_MOVES = _;
      var v = {
          method: g,
          pageTitle: null,
          isRecording: !0,
          enforced: !1
        },
        E = 2,
        T = ["client", "force_ui", "ui", "v", "test_id", "exp_flags"],
        y = o.Model.extend({
          init: function () {
            var e;
            this.historyObject = window.history, this.documentObject = window.document, this.urlController = new s.UrlController(window.location),
              function (e) {
                var t = {
                    method: m,
                    state: {
                      index: 0,
                      queryParams: {},
                      viewId: S(e)
                    },
                    enforced: !0
                  },
                  n = T,
                  i = e.getRouteWithQueryString();
                if (function (e) {
                  return r.default.isEmpty(e.currentState)
                }(e)) {
                  var o = e.getQueryParams();
                  o.text && (t.state.trText = o.text), o.srcLang && (t.state.srcLang = o.srcLang), o.dstLang && (t.state.dstLang = o.dstLang);
                  for (var s, a = 0, c = n.length; a < c; a += 1) o[s = n[a]] && (t.state.queryParams[s] = o[s]);
                  e.updateHistory(i, t)
                }
              }(this), e = this, window.addEventListener("popstate", (function (t) {
              var n = t.state;
              if (n) {
                var i = e.getHistoryState(),
                  o = function (e, t) {
                    var n = e.getHistoryState(),
                      i = {
                        currentState: t,
                        previousState: n
                      };
                    return t.index > n.index ? (i.direction = _.FORWARD, i.step = t.index - n.index) : (i.direction = _.BACK, i.step = n.index - t.index), i
                  }(e, n),
                  s = e.urlController.getRoute();
                o.direction === _.BACK && o.step > 0 && r.default.isArray(e.minorViews) && e.minorViews.forEach((function (t) {
                  return e.emit("closeMinorView", t)
                })), i.action !== n.action && (i.action && e.emit("cancelAction", i.action), n.action && e.emit("activateAction", n.action)), e.emit(p.HISTORY_MOVE, o), e.currentState = n, e.emit(p.MODEL_UPDATED, function (e) {
                  var t = {};
                  return t.text = e.trText || "", e.srcLang && (t.srcLang = e.srcLang), e.dstLang && (t.dstLang = e.dstLang), t
                }(n)).emit(p.VIEW_ID_UPDATED, n.viewId, i.viewId).setProperty(h, s)
              }
            }))
          },
          navigateInitialRoute: function () {
            var e = this.urlController.getRoute();
            this.emit(p.NAVIGATED_FROM_URL, {
              route: e,
              pathArray: this.urlController.getPathArray(e)
            }), this.setProperty({
              isLoaded: !0
            })
          },
          updateTranslationState: function (e) {
            var t = this.urlController.getRouteFromTranslationProps(e),
              n = b(this.getHistoryState()),
              i = b(e),
              o = !r.default.isEqualDeep(n, i),
              s = e.trText.length > 500 ? "" : t;
            o && this.updateHistory(s, {
              state: i
            })
          },
          updateHistory: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (t.enforced || this.urlController.getRoute() !== e) {
              var n = d(d({}, v), t),
                i = this.getHistoryState(),
                o = {
                  route: e,
                  timeStamp: Date.now()
                };
              !t.enforced && "" === i.trText && i.index > 0 && (n.method = m), r.default.isEmpty(i) || (o.index = n.method === g ? i.index + 1 : i.index), delete i.action;
              var s = d(d(d({}, i), {}, {
                tab: null
              }, o), n.state);
              if (s.route = this.urlController.addQueryParamsToPathname(e, s), n.pageTitle && (this.documentObject.title = n.pageTitle), n.isRecording) {
                var a = "".concat(n.method, "State");
                if (r.default.isFunction(this.historyObject[a])) try {
                  this.historyObject[a](s, n.pageTitle, s.route)
                } catch (e) {
                  console.error(e)
                }
                this.minorViews = [], this.currentState = s
              }
              this.setProperty(h, s.route)
            }
          },
          updateCurrentState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = this.urlController.getRoute(),
              n = this.getHistoryState(),
              i = d(d({}, n), e);
            i.route = this.urlController.addQueryParamsToPathname(t, i);
            try {
              this.historyObject.replaceState(i, void 0, i.route)
            } catch (e) {
              console.error(e)
            }
            this.currentState = i
          },
          removeQueryParams: function (e) {
            var t = this.urlController.getRoute(),
              n = this.urlController.getQueryParams(!1),
              i = this.getHistoryState();
            e.forEach((function (e) {
              return delete n[e]
            })), i.route = "".concat(t).concat(this.urlController.buildQueryString(n));
            try {
              this.historyObject.replaceState(i, void 0, i.route)
            } catch (e) {
              console.error(e)
            }
          },
          createEmptyHistoryStep: function () {
            this.updateHistory(this.urlController.getRouteWithQueryString(), {
              enforced: !0
            })
          },
          pushHistoryState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            e.route || (e.route = this.getRouteFromState(t.isSameRoute)), this.updateHistory(e.route, d(d({
              enforced: !0
            }, t), {}, {
              state: e
            }))
          },
          pushMinorView: function (e) {
            this.minorViews.push(e)
          },
          excludeMinorView: function (e) {
            this.minorViews = this.minorViews.filter((function (t) {
              return t !== e
            }))
          },
          getRouteFromState: function (e) {
            return e ? this.getHistoryState().route : "/"
          },
          getCollectionId: function () {
            return this.urlController.getCollectionId()
          },
          back: function () {
            this.historyObject.back()
          },
          getHistoryState: function () {
            var e = r.default.isEmpty(this.currentState) ? this.historyObject.state || {} : this.currentState;
            return r.default.clone(e)
          },
          getCurrentViewId: function () {
            return this.getHistoryState().viewId
          },
          getRouteWithQueryString: function () {
            return this.urlController.getRouteWithQueryString()
          },
          getQueryParams: function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return this.urlController.getQueryParams(e)
          },
          getQueryParam: function (e) {
            return this.getQueryParams()[e]
          },
          getRefPageParam: function () {
            return this.getQueryParam("ref_page")
          },
          openCollection: function (e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = e.type === E,
              r = e.public && Boolean(e.serverId),
              o = new a.RouteBuilder(s.VIEW_IDS.COLLECTIONS);
            i || r ? o.append(e.serverId) : n.isTop && o.append(e.id), setTimeout((function () {
              return t.openCollectionsInternal(o.build(), e, n)
            }), 0)
          },
          openCollectionsInternal: function (e, t, n) {
            var i = this.getHistoryState(),
              o = !1;
            if (r.default.isObject(i.viewId)) {
              var a = i.viewId.collectionId === t.id,
                c = i.viewId.isTop && i.viewId.collectionId,
                u = i.action === n.action;
              if (o = !i.viewId.isTop && t.sourceCollectionId === i.viewId.collectionId, (!c || a) && u) return
            }
            var l = {
                route: e,
                action: n.action,
                viewId: {
                  view: s.VIEW_IDS.COLLECTIONS,
                  collectionId: t.id,
                  isTop: n.isTop
                }
              },
              d = o ? m : g,
              f = {
                method: n.method || d
              };
            this.pushHistoryState(l, f)
          },
          closeCollection: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.pushHistoryState({
              route: new a.RouteBuilder(s.VIEW_IDS.COLLECTIONS).build(),
              viewId: s.VIEW_IDS.COLLECTIONS
            }, e)
          },
          isCurrentRoute: function (e) {
            return this.urlController.isCurrentRoute(e)
          },
          getEventNames: function () {
            return p
          },
          isVisibleRoute: function (e) {
            return -1 !== s.ACTIVE_VIEWS.indexOf(e)
          },
          getRouteFromViewName: function (e) {
            return this.urlController.getRouteFromViewName(e)
          }
        }, {
          minorViews: []
        });

      function S(e) {
        var t = c(e.urlController.getPathArray(), 2),
          n = t[0],
          i = t[1];
        return n === s.VIEW_IDS.COLLECTIONS ? i ? {
          view: n,
          collectionId: i
        } : n : null
      }

      function b(e) {
        return {
          trText: e.trText || "",
          srcLang: e.srcLang || "",
          dstLang: e.dstLang || ""
        }
      }
      t.Router = y
    },
    function (e, t, n) {
      "use strict";
      var i = n(222),
        r = n(115);
      e.exports = n(173)("Map", (function (e) {
        return function () {
          return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
      }), {
        get: function (e) {
          var t = i.getEntry(r(this, "Map"), e);
          return t && t.v
        },
        set: function (e, t) {
          return i.def(r(this, "Map"), 0 === e ? 0 : e, t)
        }
      }, i, !0)
    },
    function (e, t, n) {
      var i = n(42),
        r = n(89),
        o = n(21),
        s = n(1),
        a = n(10),
        c = n(7);
      s(s.S, "Reflect", {
        get: function e(t, n) {
          var s, u, l = arguments.length < 3 ? t : arguments[2];
          return c(t) === l ? t[n] : (s = i.f(t, n)) ? o(s, "value") ? s.value : void 0 !== s.get ? s.get.call(l) : void 0 : a(u = r(t)) ? e(u, n, l) : void 0
        }
      })
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isDirective = t.directive = void 0, n(154), n(26), n(14), n(13), n(23);

      var i = new WeakMap;
      t.directive = function (e) {
        return function () {
          var t = e.apply(void 0, arguments);
          return i.set(t, !0), t
        }
      };
      t.isDirective = function (e) {
        return "function" == typeof e && i.has(e)
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.nothing = t.noChange = void 0;
      t.noChange = {};
      t.nothing = {}
    },
    function (e, t, n) {
      "use strict";
      n(3), n(14), n(24), n(47), n(26), n(13), n(23), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TemplateInstance = void 0, n(17);
      var i = n(165),
        r = n(166);

      function o(e) {
        return function (e) {
          if (Array.isArray(e)) return c(e)
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || a(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function s(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = a(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, s = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return s = e.done, e
          },
          e: function (e) {
            c = !0, o = e
          },
          f: function () {
            try {
              s || null == n.return || n.return()
            } finally {
              if (c) throw o
            }
          }
        }
      }

      function a(e, t) {
        if (e) {
          if ("string" == typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
        }
      }

      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }

      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var l = function () {
        function e(t, n, i) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.__parts = [], this.template = t, this.processor = n, this.options = i
        }
        var t, n, a;
        return t = e, (n = [{
          key: "update",
          value: function (e) {
            var t, n = 0,
              i = s(this.__parts);
            try {
              for (i.s(); !(t = i.n()).done;) {
                var r = t.value;
                void 0 !== r && r.setValue(e[n]), n++
              }
            } catch (e) {
              i.e(e)
            } finally {
              i.f()
            }
            var o, a = s(this.__parts);
            try {
              for (a.s(); !(o = a.n()).done;) {
                var c = o.value;
                void 0 !== c && c.commit()
              }
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
          }
        }, {
          key: "_clone",
          value: function () {
            for (var e, t = i.isCEPolyfill ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0), n = [], s = this.template.parts, a = document.createTreeWalker(t, 133, null, !1), c = 0, u = 0, l = a.nextNode(); c < s.length;)
              if (e = s[c], (0, r.isTemplatePartActive)(e)) {
                for (; u < e.index;) u++, "TEMPLATE" === l.nodeName && (n.push(l), a.currentNode = l.content), null === (l = a.nextNode()) && (a.currentNode = n.pop(), l = a.nextNode());
                if ("node" === e.type) {
                  var d = this.processor.handleTextExpression(this.options);
                  d.insertAfterNode(l.previousSibling), this.__parts.push(d)
                } else {
                  var f;
                  (f = this.__parts).push.apply(f, o(this.processor.handleAttributeExpressions(l, e.name, e.strings, this.options)))
                }
                c++
              } else this.__parts.push(void 0), c++;
            return i.isCEPolyfill && (document.adoptNode(t), customElements.upgrade(t)), t
          }
        }]) && u(t.prototype, n), a && u(t, a), e
      }();
      t.TemplateInstance = l
    },
    function (e, t, n) {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      n(180), n(181), n(190), n(51), n(24), n(26), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SVGTemplateResult = t.TemplateResult = void 0, n(14), n(13), n(23);
      var r = n(165),
        o = n(166);

      function s(e, t, n) {
        return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
          var i = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)););
            return e
          }(e, t);
          if (i) {
            var r = Object.getOwnPropertyDescriptor(i, t);
            return r.get ? r.get.call(n) : r.value
          }
        })(e, t, n || e)
      }

      function a(e, t) {
        return (a = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function c(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function () {
          var n, i = l(e);
          if (t) {
            var r = l(this).constructor;
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments);
          return u(this, n)
        }
      }

      function u(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function d(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function p(e, t, n) {
        return t && f(e.prototype, t), n && f(e, n), e
      }
      var h = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
          createHTML: function (e) {
            return e
          }
        }),
        g = " ".concat(o.marker, " "),
        m = function () {
          function e(t, n, i, r) {
            d(this, e), this.strings = t, this.values = n, this.type = i, this.processor = r
          }
          return p(e, [{
            key: "getHTML",
            value: function () {
              for (var e = this.strings.length - 1, t = "", n = !1, i = 0; i < e; i++) {
                var r = this.strings[i],
                  s = r.lastIndexOf("<!--");
                n = (s > -1 || n) && -1 === r.indexOf("-->", s + 1);
                var a = o.lastAttributeNameRegex.exec(r);
                t += null === a ? r + (n ? g : o.nodeMarker) : r.substr(0, a.index) + a[1] + a[2] + o.boundAttributeSuffix + a[3] + o.marker
              }
              return t += this.strings[e]
            }
          }, {
            key: "getTemplateElement",
            value: function () {
              var e = document.createElement("template"),
                t = this.getHTML();
              return void 0 !== h && (t = h.createHTML(t)), e.innerHTML = t, e
            }
          }]), e
        }();
      t.TemplateResult = m;
      var _ = function (e) {
        ! function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && a(e, t)
        }(n, e);
        var t = c(n);

        function n() {
          return d(this, n), t.apply(this, arguments)
        }
        return p(n, [{
          key: "getHTML",
          value: function () {
            return "<svg>".concat(s(l(n.prototype), "getHTML", this).call(this), "</svg>")
          }
        }, {
          key: "getTemplateElement",
          value: function () {
            var e = s(l(n.prototype), "getTemplateElement", this).call(this),
              t = e.content,
              i = t.firstChild;
            return t.removeChild(i), (0, r.reparentNodes)(t, i.firstChild), e
          }
        }]), n
      }(m);
      t.SVGTemplateResult = _
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.templateFactory =

        function (e) {
          var t = r.get(e.type);
          void 0 === t && (t = {
            stringsArray: new WeakMap,
            keyString: new Map
          }, r.set(e.type, t));
          var n = t.stringsArray.get(e.strings);
          if (void 0 !== n) return n;
          var o = e.strings.join(i.marker);
          void 0 === (n = t.keyString.get(o)) && (n = new i.Template(e, e.getTemplateElement()), t.keyString.set(o, n));
          return t.stringsArray.set(e.strings, n), n
        }, t.templateCaches = void 0, n(154), n(26), n(14), n(13), n(23), n(189);
      var i = n(166);
      var r = new Map;
      t.templateCaches = r
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PredictorPresenter = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(32).Presenter.extend({
        init: function () {
          var e, t = this,
            n = this.getView(),
            i = this.getModel(),
            s = function () {
              n.setVisible(!1).setEnabled(!1)
            };
          this.detectLanguage = r.default.debounce(o.prototype.detectLanguage, 200), this.requestSuggestion = r.default.debounce(o.prototype.requestSuggestion, 200), n.on("tap", r.default.preventEvent).on("itemSelected", (function (e) {
            e && t.setValue(e)
          })), i.on("set", (function (i, r, o) {
            var a;
            switch (i) {
              case "items":
                return r ? ((a = this.toJSON()).items = this.getItems() || [], n.renderData(t.prepareData(a.items)).setEnabled(!0).setVisible(!0), t.emit("ready", a)) : s();
              case "value":
                return (a = this.toJSON()).items = this.getItems() || [], t.emit("predict", a, o);
              case "endOfWord":
                clearTimeout(e), r ? t.emit("endOfWord") : e = setTimeout((function () {
                  return t.emit("endOfWord")
                }), 1500)
            }
          })).on("error", s).on("change", (function (e, i, r) {
            switch (e) {
              case "auto":
                return t.detectLanguage(), t.emit("auto", i);
              case "text":
              case "limit":
              case "srcLang":
                return n.setEnabled(!1), r.reason && this.setProperty("reason", r.reason), "text" === e && t.detectLanguage(), "srcLang" === e && r.detected && t.emit("detect", i, r.kbd), t.requestSuggestion()
            }
          })).on("invalid", s)
        },
        isAuto: function () {
          return this.getModel().getProperty("auto")
        },
        setText: function (e, t) {
          return this.getModel().setProperty("text", e, {
            reason: t
          }), this
        },
        setIndex: function (e) {
          return this.getModel().setProperty("index", e), this
        },
        setValue: function (e, t) {
          return this.getModel().setProperty("value", e, t), this
        },
        toggleAuto: function (e) {
          return this.getModel().setProperty("auto", arguments.length ? Boolean(e) : !this.isAuto()), this
        },
        setSrcLanguage: function (e, t) {
          return this.getModel().setProperty("srcLang", e, t), this
        },
        setDstLanguage: function (e, t) {
          return this.getModel().setProperty("dstLang", e, t), this
        },
        detectLanguage: function () {
          return this.isAuto() && this.getModel().detectLanguage(), this
        },
        requestSuggestion: function () {
          return this.getModel().requestSuggestion(), this
        }
      }, {
        createRange: function (e, t) {
          var n = {};
          if (t.pos < 0) n.end = t.index, n.start = n.end + t.pos;
          else {
            if (t.index !== e.length || " " !== e.charAt(t.index - 1)) return null;
            n.end = t.index, n.start = t.index
          }
          return n
        },
        detectOptions: {
          KBD: 1
        }
      });
      t.PredictorPresenter = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DictionaryModel = void 0, n(111), n(22);
      var i = n(174),
        r = n(59),
        o = n(92),
        s = i.SyncModel.extend({
          init: function (e) {
            var t = e.invalidMessage;
            this.invalidMessage = t
          },
          getParams: function () {
            var e = this.getProps();
            return {
              ui: e.ui,
              srv: e.srv,
              sid: e.sid,
              text: e.text,
              type: e.type,
              lang: e.srcLang + "-" + e.dstLang,
              flags: e.flags
            }
          },
          getDefaults: function () {
            return {
              ui: "",
              srv: "",
              url: "/",
              data: "",
              text: "",
              type: "",
              flags: 0,
              srcLang: "",
              dstLang: "",
              sid: this.getId(),
              customExamples: !1,
              customExamplesText: ""
            }
          },
          hasFlag: function (e) {
            return (this.getProperty("flags") & e) === e
          },
          hasType: function (e) {
            var t = this.getProperty("type");
            return -1 !== (t = t ? t.split(",") : []).indexOf(e)
          },
          setType: function (e, t) {
            var n = this.getProperty("type"),
              i = (n = n ? n.split(",") : []).indexOf(e);
            return Boolean(t) === i >= 0 || (t ? n.push(e) : n.splice(i, 1), this.setProperty("type", n.join(","))), this
          },
          setFlag: function (e, t) {
            var n = this.getProperty("flags");
            return Boolean(t) === this.hasFlag(e) || (n += e * (t ? 1 : -1), this.setProperty("flags", n)), this
          },
          requestData: function () {
            var e = this;
            if (this.abort(), !this.isValid()) return this.invalidMessage && this.emit(this.invalidMessage), this;
            var t = this.getProps().url,
              n = this.getParams();
            return this.setRequest(r.HTTPRequest.get(t, n, (function (t, n) {
              var i = t ? t.code : r.HTTPRequest.codes.OK;
              i === r.HTTPRequest.codes.OK ? e.setProperty("data", n.text, {
                resultLength: n.body && n.body.result && n.body.result.length
              }) : i !== o.HTTPError.ABORT && e.emit("error", t)
            })))
          }
        });
      t.DictionaryModel = s
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslatorPresenter = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(61);
      var s = n(32).Presenter.extend({
        init: function () {
          var e = this,
            t = this,
            n = this.getView(),
            i = this.getModel();
          this.requestTranslation = r.default.debounce(s.prototype.requestTranslation), this.requestTranslationNow = this.requestTranslation.callNow, i.on("error", (function (e) {
            var i = e.body && e.body.code;
            if (n.setState("fetching", !1), i === this.constructor.errorMap.INVALID_SESSION || i === this.constructor.errorMap.EXPIRED_SESSION) return t.emit("expired", i);
            n.setState("offline", !r.default.isOnline()).setState("error", !0).setVisible(!1), t.emit("error", e)
          })).on("query", (function (e) {
            n.setState("fetching", !0), t.emit("query", e)
          })).onChange(["text", "srcLang", "dstLang"], (function (t, n, r) {
            r.reason && i.setProperty("reason", r.reason), "text" === t && "paste" === r.reason ? e.requestTranslationNow() : e.requestTranslation()
          })).onInvalid("text", (function () {
            this.reset().setProperty("translation", "")
          })).onSet("translation", (function (e, i) {
            if (n.setState({
              error: !1,
              fetching: !1,
              offline: !1
            }), t.emit("result", e), !e) return n.setVisible(!1);
            n.renderData(t.prepareData(e, {
              align: i.align || ""
            })).setVisible(!0), (0, o.getGlobalEmitter)().emit("translationRendered")
          }))
        },
        setText: function (e, t, n) {
          var i = e;
          return i && !r.default.isArray(i) && (i = [i]), this.getModel().setText(i, {
            reason: t,
            silent: n
          }), this
        },
        setFormat: function (e) {
          return this.getModel().setProperty("format", e), this
        },
        setSrcLanguage: function (e) {
          return this.getModel().setProperty("srcLang", e), this
        },
        setDstLanguage: function (e) {
          return this.getView().setLanguage(e), this.getModel().setProperty("dstLang", e), this
        },
        requestTranslation: function () {
          return this.getModel().requestTranslation(), this
        }
      });
      t.TranslatorPresenter = s
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Database = void 0, n(17), n(98), n(66);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(30),
        s = n(217);
      var a = o.Emitter.extend({
        init: function (e) {
          if (!e || !e.name) throw new Error("Can't open the base with no name");
          if (!e.version || !r.default.isNumber(e.version)) throw new Error("Unsupported base version");
          this._name = e.name, this._trace = [], this._active = !1, this._version = e.version, this._keyGenerator = new s.KeyGenerator
        },
        open: function () {
          var e, t = this;
          try {
            e = window.indexedDB.open(this._name, this._version)
          } catch (t) {
            this.emit("openError", t), e = null
          }
          e && (this.addTrace("opn" + this._version), e.onblocked = function () {
            t.emit("databaseBlocked", t.getTrace())
          }, e.onupgradeneeded = function (e) {
            t._db = e.target.result, t.emit("upgradeneeded"), e.oldVersion < 1 ? t.addTrace("crtdVer" + t._db.version).createDatabase(e) : t.addTrace("upgrFrm" + e.oldVersion).upgradeDatabase(e)
          }, e.onsuccess = function (e) {
            t._db || (t._db = e.target.result), t._db.onversionchange = function () {
              t._db.close(), setTimeout((function () {
                window.location.reload()
              }), 1e3 * (10 + 30 * Math.random()))
            }, t._db.onclose = function () {
              t._active = !1, t.emit("close")
            }, t._active = !0, t.emit("ready")
          }, e.onerror = function (e) {
            t.emit("error", e, "open", t.getTrace())
          })
        },
        tryReconnect: function () {
          var e, t = this;
          if (!this._reconnecting) {
            try {
              e = window.indexedDB.open(this._name, this._version)
            } catch (e) {
              return
            }
            this._reconnecting = !0, e.onupgradeneeded = function (e) {
              t._db = e.target.result, e.oldVersion < 1 ? t.createDatabase(e) : t.upgradeDatabase(e)
            }, e.onsuccess = function (e) {
              t._db = e.target.result, t._db.onclose = function () {
                t._active = !1, t.emit("close")
              }, t._reconnecting = !1, t._active = !0, t.emit("reconnected")
            }
          }
        },
        safeTransaction: function (e, t) {
          var n = this._db;
          try {
            return n.transaction(e, t)
          } catch (e) {
            return !e.message.includes(" clos") && this.isActive() || this.tryReconnect(), !1
          }
        },
        waitReconnect: function (e) {
          return this.once("reconnected", e)
        },
        addTrace: function (e) {
          return this._trace.push(e), this
        },
        getTrace: function () {
          return this._trace.join(",")
        },
        generateKey: function () {
          return this._keyGenerator.generate()
        },
        isActive: function () {
          return this._active
        },
        createDatabase: function () {
          throw new Error("createDatabase not implemented")
        },
        upgradeDatabase: function () {
          throw new Error("upgradeDatabase not implemented")
        }
      }, {
        isSupported: function () {
          try {
            return "indexedDB" in window && window.indexedDB
          } catch (e) {
            return !1
          }
        }
      });
      t.Database = a
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CollectionModel = void 0, n(122), n(17), n(35), n(18), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(218),
        s = n(175);
      var a = s.CollectionServerModel.extend({
        init: function (e, t) {
          var n = this,
            i = this,
            r = new o.CollectionDatabase({
              name: o.CollectionDatabase.DATABASE_NAME,
              version: o.CollectionDatabase.DATABASE_VERSION
            }, {
              migrateParams: {
                defaultFavName: t.defaultFavName,
                defaultHistoryName: t.defaultHistoryName
              }
            });
          this._database = r, r.on("upgradeneeded", (function () {
            i.emit("upgradeneeded")
          })).on("ready", (function () {
            i.emit("dbReady")
          })).on("close", (function () {
            i.emit("dbClosed")
          })).on("synced", (function () {
            this.getCollections(), this.getRecordsByCollection(i.getProperty("activeId")), i.emit("synced")
          })).on("checked", (function (e) {
            i.emit("checked", e)
          })).on("added", (function (e, t) {
            if (this.getCollections({
              sync: t.subscribe
            }), !t.subscribe) {
              if (i.getProperty("addingRecord")) {
                var n = i.getItems();
                n.push(e), i.setProperty("addingRecord", !1).setItems(n).emit("addToNewCollection", e.id)
              }
              i.isValid("activeId", e.id) && i.setProperty("activeId", e.id)
            }
          })).on("addedRecords", (function (e) {
            this.getCollections(), this.getRecordsByCollection(e)
          })).on("records", (function (e, t, n) {
            if (n.sync) {
              var r = i.getItems().find((function (e) {
                return e.id === t
              }));
              i.timeoutSyncCollection(r.serverId, e)
            } else i.setRecords(e), i.emit("recordsReceived", t, e), t === i.getProperty("activeId") && i.checkRecord(), n.active && i.deleteRecords()
          })).on("collections", (function (e, t) {
            i.setItems(e), t.sync ? (i._presyncCollections(i.getPreSyncData()), i.emit("collectionsSynced")) : (i.checkRecord(), i.emit("updateTop")), i.emit("collectionsSet")
          })).once("collections", (function () {
            n.emit("firstCollectionSync")
          })).on("collectionUpdated", (function () {
            this.getCollections()
          })).on("recordUpdated", (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            i.checkRecord(), i.emit("recordUpdated", e)
          })).on("recordDeleted", (function (e) {
            r.getCollections(), n.getItems().some((function (t) {
              return t.type === s.COLLECTION_TYPES.HISTORY && t.id === e
            })) ? r.getRecordsByCollection(e) : r.getRecordsByCollection(n.getProperty("activeId"))
          })).on("collectionDeleted", (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            r.getCollections({
              sync: e.unsubscribed
            })
          })).on("resetedScore", (function (e) {
            i.emit("updateRecords", e)
          })).on("resetedIds", (function () {
            i.emit("resetedIds").setProperty("syncedUid", null), this.getCollections({
              sync: !i.isNotAuthorized()
            })
          })).on("checkRecordError", (function (e) {
            i.emit("checkRecordError", String(e))
          })).on("databaseBlocked", (function (e) {
            var t = {
              trace: e,
              sender: "blocked"
            };
            i.emit("databaseError", t)
          })).on("openError", (function (e) {
            i.emit("databaseError", {
              name: e && e.name,
              sender: "openTryCatch",
              message: e && e.message
            })
          })).on("error", (function (e, t, n) {
            var r = e.target.error,
              o = {
                name: r && r.name,
                trace: n,
                sender: t,
                message: r && r.message
              };
            i.emit("databaseError", o)
          })).on("indexNotFound", (function (e) {
            var t = e.indexName,
              n = e.version;
            i.emit("dbIndexNotFound", {
              indexName: t,
              version: n
            })
          })).open()
        },
        getDefaults: function () {
          return {
            srv: "",
            uid: "",
            url: "/",
            limit: 0,
            recordsLimit: 0,
            items: "",
            records: "",
            value: "",
            xtoken: "",
            activeId: "",
            text: "",
            srcLang: "",
            dstLang: "",
            translation: "",
            syncedUid: "",
            addingRecord: !1
          }
        },
        isNotAuthorized: function () {
          return !this.getProperty("uid")
        },
        timeoutSyncCollection: function (e, t) {
          var n = this,
            i = this.getSyncData(e, t);
          setTimeout((function () {
            n._syncCollection(e, i)
          }), Math.floor(Math.random() * a.SYNC_TIMEOUT))
        },
        getCollectionList: function () {
          return this._database.getCollections(), this
        },
        getCollection: function (e) {
          return this._database.getRecordsByCollection(e), this
        },
        deleteCollection: function (e) {
          var t, n = this._database,
            i = this.getItems(),
            r = "";
          return n.deleteCollection(e), e === this.getProperty("activeId") && ((t = i.filter((function (e) {
            return e.type === s.COLLECTION_TYPES.FAVORITES
          }))[0]) ? r = t.id : (i = i.filter((function (t) {
            return e !== t.id && !s.CollectionServerModel.isSubscription(t)
          }))).length && (r = i[0].id), this.setProperty("activeId", r)), this
        },
        createCollection: function (e) {
          var t = this._database,
            n = !e.sourceCollectionId,
            i = {
              name: e.name,
              type: n ? s.COLLECTION_TYPES.COLLECTION : s.COLLECTION_TYPES.SUBSCRIPTION,
              color: e.color,
              public: e.public,
              status: s.COLLECTION_STATUSES.ADDED,
              version: 0,
              recordsCount: e.recordsCount || 0,
              creationTimestamp: s.CollectionServerModel.getTimestamp(),
              attributesTimestamp: s.CollectionServerModel.getTimestamp()
            };
          return n || (i.authorName = e.authorName, i.sourceCollectionId = e.sourceCollectionId, i.authorUid = e.authorUid), n && !i.color && (i.color = a.getRandomColor()), t.createCollection(i, {
            subscribe: !n
          }), this
        },
        updateCollection: function (e, t) {
          return t.status = s.COLLECTION_STATUSES.UPDATED, t.attributesTimestamp = s.CollectionServerModel.getTimestamp(), this._database.updateCollectionData(e, t), this
        },
        addRecords: function (e, t) {
          return this._database.addRecords(e, t), this
        },
        deleteRecords: function (e) {
          var t = e,
            n = this._database,
            i = this.getProps(),
            r = this.getRecords();
          t || (t = [r.find((function (e) {
            return i.text === e.text && i.srcLang + "-" + i.dstLang === e.lang && i.translation === e.translation
          })).id]);
          return n.deleteRecords(t), this
        },
        resetRecordsScore: function (e) {
          return this._database.resetRecordsScore(e), this
        },
        updateRecord: function (e, t) {
          return t.modificationTimestamp = s.CollectionServerModel.getTimestamp(), this._database.updateRecord(e, t), this
        },
        updateHistoryRecord: function (e, t) {
          return this._database.updateHistoryRecord(e, t), this
        },
        deleteRecordByProps: function (e, t) {
          return this._database.deleteRecordByProps(e, t), this
        },
        moveRecords: function (e, t) {
          var n = this._database;
          return e.forEach((function (e) {
            n.moveRecord(e, t)
          })), this
        },
        checkRecord: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getProperty("activeId"),
            t = this._database,
            n = this.getProps();
          return e && t.isActive() && n.text && n.translation ? (t.checkRecord({
            text: n.text,
            lang: n.srcLang + "-" + n.dstLang,
            translation: n.translation,
            collectionId: e
          }), this) : this.emit("checked", !1)
        },
        getActive: function () {
          return this._database.getRecordsByCollection(this.getProperty("activeId"), {
            active: !0
          }), this
        },
        syncCollections: function () {
          var e = this._database,
            t = this.getProps();
          return t.syncedUid && (this.isNotAuthorized() || t.syncedUid !== t.uid) ? e.resetServerIds() : e.getCollections({
            sync: !this.isNotAuthorized()
          }), this
        },
        subscribe: function (e) {
          return this.createCollection({
            name: e.name,
            color: e.color,
            public: !1,
            authorName: e.authorName,
            authorUid: e.authorUid,
            sourceCollectionId: e.id
          }), this
        },
        getPreSyncData: function () {
          var e = this.getItems();
          return this.getProperty("shouldSyncHistory") || (e = e.filter((function (e) {
            return e.type !== s.COLLECTION_TYPES.HISTORY
          }))), {
            collectionsStatuses: e.filter((function (e) {
              return e.serverId || e.status !== s.COLLECTION_STATUSES.DELETED
            })).map((function (e) {
              if (e.serverId) return {
                id: e.serverId,
                type: e.type,
                tmpId: e.id,
                status: e.status,
                version: e.version
              };
              var t = {
                name: e.name,
                type: e.type,
                tmpId: e.id,
                status: s.COLLECTION_STATUSES.ADDED,
                creationTimestamp: e.creationTimestamp
              };
              return e.color && (t.color = e.color), s.CollectionServerModel.isSubscription(e) ? (t.authorName = e.authorName, t.sourceCollectionId = e.sourceCollectionId) : t.public = e.public, t
            }))
          }
        },
        getSyncData: function (e, t) {
          var n = {},
            i = this.getItems().find((function (t) {
              return t.serverId === e
            }));
          return i && (n = {
            name: i.name,
            type: i.type,
            tmpId: i.id,
            version: i.version,
            attributesTimestamp: i.attributesTimestamp
          }, i.color && (n.color = i.color), s.CollectionServerModel.isSubscription(i) ? n.authorName = i.authorName : n.public = i.public), n.status = i ? s.COLLECTION_STATUSES.UPDATED : s.COLLECTION_STATUSES.ABSENT, t && t.length && (n.recordsStatuses = t.filter((function (e) {
            return e.serverId || e.status !== s.COLLECTION_STATUSES.DELETED
          })).map((function (e) {
            return e.serverId ? {
              id: e.serverId,
              score: e.score,
              tmpId: e.id,
              status: e.status,
              modificationTimestamp: e.modificationTimestamp
            } : {
              lang: e.lang,
              text: e.text,
              score: e.score,
              tmpId: e.id,
              status: s.COLLECTION_STATUSES.ADDED,
              translation: e.translation,
              creationTimestamp: e.creationTimestamp,
              modificationTimestamp: e.modificationTimestamp
            }
          }))), {
            collectionStatus: n
          }
        },
        processCollections: function (e) {
          var t = this._database,
            n = this,
            i = this.getItems();
          return e.length ? (e.forEach((function (e) {
            switch (e.action) {
              case s.COLLECTION_ACTIONS.ADD:
                n.timeoutSyncCollection(e.id);
                break;
              case s.COLLECTION_ACTIONS.DROP:
              case s.COLLECTION_ACTIONS.DELETE:
                t.deleteCollection(e.tmpId, !0);
                break;
              case s.COLLECTION_ACTIONS.UPDATE:
                t.getRecordsByCollection(e.tmpId, {
                  sync: !0
                });
                break;
              case s.COLLECTION_ACTIONS.REGISTER:
                i.map((function (t) {
                  return t.id === e.tmpId && (t.serverId = e.id), t
                })), n.setItems(i), t.updateCollectionData(e.tmpId, {
                  status: s.COLLECTION_STATUSES.UPDATED,
                  serverId: e.id
                }), t.getRecordsByCollection(e.tmpId, {
                  sync: !0
                });
                break;
              case s.COLLECTION_ACTIONS.POSTPONE:
              case s.COLLECTION_ACTIONS.MERGE:
            }
          })), this) : this.emit("synced")
        },
        mergeCollection: function (e) {
          var t = this._database,
            n = this.getItems().find((function (t) {
              return t.id === e.tmpId || t.serverId === e.id
            })),
            i = e.changedAttributes || {},
            r = e.recordsActions || [];
          switch (e.action) {
            case s.COLLECTION_ACTIONS.NOP:
              t.updateCollectionData(n.id, {
                status: s.COLLECTION_STATUSES.UNCHANGED
              });
              break;
            case s.COLLECTION_ACTIONS.DELETE:
              t.deleteCollection(n.id, !0);
              break;
            case s.COLLECTION_ACTIONS.ADD:
              var o = {};
              Object.keys(i).forEach((function (e) {
                o[e] = i[e]
              })), o.status = s.COLLECTION_STATUSES.UNCHANGED, o.serverId = e.id, t.addCollection(o, this.mergeRecords(r));
              break;
            case s.COLLECTION_ACTIONS.UPDATE:
              Object.keys(i).forEach((function (e) {
                n[e] = i[e]
              })), n.status = s.COLLECTION_STATUSES.UNCHANGED, t.updateCollection(n, this.mergeRecords(r))
          }
          return this
        },
        mergeRecords: function (e) {
          var t = [],
            n = [],
            i = [];
          return e.forEach((function (e) {
            switch (e.modificationTimestamp = e.modificationTimestamp || e.creationTimestamp || 0, e.score = e.score || 0, e.action) {
              case s.COLLECTION_ACTIONS.ADD:
                t.push({
                  lang: e.lang,
                  text: e.text,
                  translation: e.translation,
                  serverId: e.id,
                  score: e.score,
                  status: s.COLLECTION_STATUSES.UNCHANGED,
                  creationTimestamp: e.creationTimestamp,
                  modificationTimestamp: e.modificationTimestamp
                });
                break;
              case s.COLLECTION_ACTIONS.DROP:
              case s.COLLECTION_ACTIONS.DELETE:
                n.push({
                  id: e.tmpId
                });
                break;
              case s.COLLECTION_ACTIONS.UPDATE:
                i.push({
                  id: e.tmpId,
                  params: {
                    score: e.score,
                    status: s.COLLECTION_STATUSES.UNCHANGED,
                    modificationTimestamp: e.modificationTimestamp
                  }
                });
                break;
              case s.COLLECTION_ACTIONS.REGISTER:
                i.push({
                  id: e.tmpId,
                  params: {
                    serverId: e.id,
                    status: s.COLLECTION_STATUSES.UNCHANGED
                  }
                });
                break;
              case s.COLLECTION_ACTIONS.POSTPONE:
            }
          })), {
            new: t,
            deleted: n,
            updated: i
          }
        },
        filter: function (e) {
          var t = this.getRecords(),
            n = r.default.trim(e).toLowerCase();
          return t.forEach((function (e) {
            e.filtered = n && (e.deleted || e.text.toLowerCase().indexOf(n) < 0 && e.translation.toLowerCase().indexOf(n) < 0)
          })), t
        },
        getRecords: function () {
          var e = this.getProperty("records");
          try {
            e = JSON.parse(e)
          } catch (t) {
            e = []
          }
          return e
        },
        setRecords: function (e) {
          return this.setProperty("records", e && JSON.stringify(e))
        }
      }, {
        SYNC_TIMEOUT: 2e3,
        COLORS: ["#b0a79a", "#ffbb5a", "#fd9060", "#ff6665", "#e43c31", "#c44f69", "#9d65a9", "#6c65a9", "#3779bc", "#6fc3e0", "#59cd9c", "#a5c94b"],
        COLOR_CSSRULE: '.{0}[data-color="{1}"] { color: {1}; }',
        getRandomColor: function () {
          return this.COLORS[Math.floor(Math.random() * this.COLORS.length)]
        },
        generateColorRules: function (e, t) {
          var n = this.COLOR_CSSRULE,
            i = e.sheet;
          try {
            this.COLORS.forEach((function (e) {
              i.insertRule(r.default.parseString(n, t, e), i.cssRules.length ? i.cssRules.length : 0)
            }))
          } catch (e) {}
        }
      });
      t.CollectionModel = a
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Uniproxy = t.STREAM_CONTROL_REASONS = t.STREAM_CONTROL_ACTIONS = t.ERRORS = t.CLOSING_CODES = t.CONNECTION_STATUSES = t.EVENTS = void 0, n(17), n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(30);
      var s = {
        OPEN: "open",
        CONNECTING: "connecting",
        CLOSE: "close",
        ERROR: "error",
        RECONNECT: "reconnect",
        MESSAGE: "message",
        STREAM: "stream",
        STREAM_CONTROL: "stream_control",
        READY: "ready",
        STOP: "stop",
        STATUS_CHANGED: "status_changed"
      };
      t.EVENTS = s;
      var a = {
        CONNECTING: "connecting",
        OPEN: "open",
        CLOSING: "closing",
        CLOSED: "closed",
        STOPPED: "stopped"
      };
      t.CONNECTION_STATUSES = a;
      var c = {
        NORMAL: 1e3,
        OFFLINE: 4001,
        CONNECTING_TIMEOUT: 4002,
        HEARTBEAT_TIMEOUT: 4003,
        CONNECTION_DIED: 4004,
        STOP: 4005,
        UNAUTHORIZED: 4006,
        NOT_INTERNAL_NETWORK: 4007
      };
      t.CLOSING_CODES = c;
      var u = {
        REQUEST_TIMEOUT_ERROR: "request_timeout",
        SYNC_STATE_ERROR: "sync_state",
        EVENT_ERROR: "event_error",
        CONNECTION_ERROR: "connection",
        UNSUPPORTED_PACKET: "unsupported_packet",
        RATE_LIMIT_ERROR: "rate_limit",
        RESPONSE_ERROR: "response"
      };
      t.ERRORS = u;
      var l = {
        CLOSE: 0,
        CHUNK: 1
      };
      t.STREAM_CONTROL_ACTIONS = l;
      var d = {
        NO_ERROR: 0,
        PROTOCOL_ERROR: 1,
        INTERNAL_ERROR: 2,
        FLOW_CONTROL_ERROR: 3,
        SETTINGS_TIMEOUT: 4,
        STREAM_CLOSED: 5,
        FRAME_SIZE_ERROR: 6,
        REFUSED_STREAM: 7,
        CANCEL: 8,
        COMPRESSION_ERROR: 9,
        CONNECT_ERROR: 10,
        ENHANCE_YOUR_CALM: 11,
        INADEQUATE_SECURITY: 12,
        HTTP_1_1_REQUIRED: 13
      };
      t.STREAM_CONTROL_REASONS = d;
      var f = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
        p = o.Emitter.extend({
          init: function (e) {
            this._nextStreamId = -1, this._status = a.STOPPED, this._requests = {}, this._ws = null, this._seqNumber = 1, this._apiKey = e.apiKey, this._url = e.url, this._uuid = r.default.guid(f), this._vins = {
              application: {
                lang: window.config.UI_LANG,
                platform: h(),
                uuid: this._uuid,
                app_id: "ru.yandex.translate." + ("tr-text" === window.config.SRV ? "desktop" : "touch")
              }
            }
          },
          startStream: function () {
            return this._nextStreamId += 2, this._nextStreamId
          },
          closeStream: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.NO_ERROR;
            return this._sendRaw({
              streamcontrol: {
                action: l.CLOSE,
                streamId: e,
                reason: n,
                messageId: t
              }
            })
          },
          start: function () {
            this._ws = new WebSocket(this._url), this._ws.binaryType = "arraybuffer", this._ws.onclose = this._handleClose.bind(this), this._ws.onerror = this._handleError.bind(this), this._ws.onmessage = this._handleMessage.bind(this), this._ws.onopen = this._handleOpen.bind(this), this.emit(s.CONNECTING), this.setStatus(a.CONNECTING)
          },
          stop: function () {
            this.ensureClose(c.NORMAL), this.setStatus(a.STOPPED)
          },
          isConnected: function () {
            return this._ws && this._status === a.OPEN
          },
          ensureConnection: function (e) {
            this._ws && this._status !== a.STOPPED || this.start(), this._status === a.CONNECTING ? this.once(s.OPEN, e) : this.isConnected() && e()
          },
          sendRequest: function (e, t) {
            var n = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {},
              o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {},
              s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1e4,
              a = this.sendEvent(e, t, i),
              c = "SynchronizeState" === t;
            if (!a) return navigator.onLine && this._throwError(u.CONNECTION_ERROR, {
              namespace: e,
              name: t
            }), o(u.CONNECTION_ERROR);
            var l = window.setTimeout((function () {
              c || (n._processRequest(a, u.REQUEST_TIMEOUT_ERROR), n._throwError(u.REQUEST_TIMEOUT_ERROR, {
                messageId: a
              }))
            }), s);
            return this._requests[a] = function (e, t) {
              window.clearTimeout(l), e ? (navigator.onLine && n._throwError(e, {
                messageId: a
              }), o(e)) : t && r(t.payload), delete n._requests[a]
            }, a
          },
          sendEvent: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = n.streamId,
              o = r.default.guid(f),
              s = {
                header: {
                  namespace: e,
                  name: t,
                  messageId: o,
                  streamId: i,
                  seqNumber: this._seqNumber
                },
                payload: n
              };
            if (this._sendRaw({
              event: s
            })) return this._seqNumber++, o
          },
          _sendRaw: function (e) {
            if (!this._ws || this._ws.readyState !== WebSocket.OPEN) return !1;
            try {
              return this._ws.send(e instanceof Blob ? e : JSON.stringify(e)), !0
            } catch (e) {
              return !1
            }
          },
          sendStreamData: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              i = new ArrayBuffer(4),
              r = new DataView(i);
            return r.setUint32(0, e), this._sendRaw(new Blob([i, t], {
              type: n
            }))
          },
          setStatus: function (e) {
            this._status = e, this.emit(s.STATUS_CHANGED, e)
          },
          ensureClose: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.NORMAL,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (this._ws) {
              this._ws.onclose = null, this._ws.onerror = null, this._ws.onmessage = null, this._ws.onopen = null;
              try {
                this._ws.readyState < WebSocket.CLOSING && this._ws.close(e)
              } finally {
                this._ws = null, this.emit(s.CLOSE, {
                  reason: t
                }), this.setStatus(a.CLOSED)
              }
            }
          },
          _processRequest: function (e, t, n) {
            var i = e && this._requests[e];
            i && i.call(this, t, n)
          },
          _sendSyncState: function () {
            try {
              this.sendRequest("System", "SynchronizeState", {
                uuid: this._uuid,
                auth_token: this._apiKey,
                vins: this._vins
              })
            } catch (e) {
              this._throwError(e.message, e)
            }
          },
          _handleOpen: function () {
            this._sendSyncState(), this.setStatus(a.OPEN), this.emit(s.OPEN)
          },
          _handleClose: function (e) {
            var t = window.navigator.onLine ? e.code : c.OFFLINE;
            this.ensureClose(t, e.reason)
          },
          _handleError: function () {
            this._throwError(u.CONNECTION_ERROR)
          },
          _handleMessage: function (e) {
            var t = e.data;
            if (t) {
              if (t instanceof ArrayBuffer) return this._receiveStream(t);
              try {
                var n = JSON.parse(t);
                return n ? n.hasOwnProperty("streamcontrol") ? this._receiveStreamControl(n.streamcontrol) : n.hasOwnProperty("directive") ? this._handleDirective(n.directive) : this._throwError(u.UNSUPPORTED_PACKET) : this._throwError(u.UNSUPPORTED_PACKET)
              } catch (e) {
                return this._throwError(u.UNSUPPORTED_PACKET, e)
              }
            }
          },
          _handleDirective: function (e) {
            switch ("".concat(e.header.namespace, ":").concat(e.header.name)) {
              case "".concat("System", ":EventException"):
              case "".concat("System", ":InvalidAuth"):
                this._receiveException(e);
                break;
              default:
                this._receiveMessage(e)
            }
          },
          _receiveStream: function (e) {
            var t = new DataView(e);
            this.emit(s.STREAM, {
              streamId: t.getUint32(0),
              data: t.buffer.slice(4)
            })
          },
          _receiveStreamControl: function (e) {
            this.emit(s.STREAM_CONTROL, {
              data: e
            })
          },
          _receiveException: function (e) {
            var t = e.header,
              n = e.payload,
              i = function (e) {
                if (!e || !e.Response) return u.EVENT_ERROR;
                if (e.Response.RateLimit) return u.RATE_LIMIT_ERROR;
                return u.RESPONSE_ERROR
              }(n);
            this._processRequest(t.refMessageId, i, e), this._throwError(i, {
              header: t,
              payload: n
            })
          },
          _receiveMessage: function (e) {
            var t = e.header;
            this._processRequest(t.refMessageId, void 0, e), this.emit(s.MESSAGE, {
              data: e
            })
          },
          _throwError: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.emit(s.ERROR, {
              error: e,
              data: t
            })
          }
        }, {});

      function h() {
        return r.default.iOS ? "ios" : r.default.android ? "android" : "windows"
      }
      t.Uniproxy = p
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MAX_NON_EXPANDED_DECLENSIONS_LENGTH = t.DECLENSIONS_METRIKAS = t.DECLENSIONS_EVENTS = void 0;
      t.DECLENSIONS_EVENTS = {
        DECLENSIONS_FETCHED: "declensionsFetched",
        WORD_CLICK: "declensionClick"
      };
      t.DECLENSIONS_METRIKAS = {
        RENDER: "declensions_render",
        CLICK: "declensions_click",
        COMPLAINT_SEND: "declensions_complaint_send",
        EXPAND: "declensions_expand"
      };
      t.MAX_NON_EXPANDED_DECLENSIONS_LENGTH = 3
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initAccessibility = void 0, n(14), n(13), n(23);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(61),
        s = n(11),
        a = n(94),
        c = n(124);
      t.initAccessibility = function () {
        var e, t, n = this,
          i = this.getView();
        return i.on("keydown", (function (e) {
          var t = document.activeElement;
          t && "textarea" !== t.tagName.toLowerCase() && "pre" !== t.tagName.toLowerCase() && !r.default.hasClass(t, "state-disabled") && (e.keyCode === a.InputView.keys.ENTER ? n.emit(c.A11Y_EVENTS.ACTIVATION, e.target, e) : e.keyCode === a.InputView.keys.SPACE && r.default.hasClass(t, "button_select") && n.emit(c.A11Y_EVENTS.SELECT_ACTIVATION, e.target, e))
        })).bindDOMEvents("keydown"), (0, o.getGlobalEmitter)().on("viewFocusChanged", (function (e, n) {
          n ? t = e : e === t && (t = null)
        })), document.addEventListener(s.TouchView.eventTypes.OVER, (function (t) {
          e = t.target
        })), document.addEventListener("focus", (function (i) {
          var o;
          o = i.target, e && r.default.getClosest(e, (function (e) {
            return e === o
          })) || function (e) {
            return t && t.getContentElement() === e
          }(i.target) || (r.default.toggleClass(i.target, "state-tab-focused"), function (e) {
            var t = r.default.getDataAttr(e, "tooltip");
            t && n.getModel().setProperty("tooltip", t, {
              rect: e.getBoundingClientRect(),
              position: r.default.getDataAttr(e, "tooltip-position")
            })
          }(i.target))
        }), !0), document.addEventListener("blur", (function (e) {
          r.default.hasClass(e.target, "state-tab-focused") && (r.default.toggleClass(e.target, "state-tab-focused"), n.getModel().setProperty("tooltip", null))
        }), !0), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PredictorModel = void 0, n(3), n(82);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(81),
        s = n(59),
        a = n(92);
      var c = o.ListboxModel.extend({
        init: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this._url = t.url, this._counter = 0, this._detectUrl = t.detectUrl, this._detectCounter = 0
        },
        getParams: function () {
          var e = this.toJSON();
          return {
            q: e.text,
            srv: e.srv,
            sid: e.sid,
            lang: e.srcLang,
            limit: e.limit
          }
        },
        getDefaults: function () {
          return {
            pos: 0,
            srv: "",
            text: "",
            auto: !1,
            index: 0,
            value: "",
            items: "",
            limit: 10,
            reason: "",
            srcLang: "",
            dstLang: "",
            endOfWord: !1,
            sid: this.getId()
          }
        },
        detectLanguage: function () {
          var e = this;
          if (!this.canDetectLanguage()) return this;
          var t = this.getDetectParams(),
            n = ++this._detectCounter;
          return s.HTTPRequest.get(this._detectUrl, t, (function (i, r) {
            if (n === e._detectCounter && JSON.stringify(t) === JSON.stringify(e.getDetectParams())) {
              var o = i ? i.code : r.body.code;
              if (o !== s.HTTPRequest.codes.OK) return e.emit("detectError", i || new a.HTTPError(o, r.body.message));
              r.body.lang && e.setProperty("srcLang", r.body.lang, {
                kbd: Boolean(r.body.kbd),
                detected: !0
              })
            }
          })), this
        },
        getDetectParams: function () {
          var e = this.toJSON();
          return {
            sid: e.sid,
            srv: e.srv,
            text: r.default.trim(e.text),
            hint: [e.srcLang, e.dstLang].join(","),
            options: e.detectOptions
          }
        },
        canDetectLanguage: function () {
          return this.isValid("text")
        },
        requestSuggestion: function () {
          var e = this;
          if (!this.canRequestSuggestion()) return this;
          var t = this.getParams(),
            n = ++this._counter;
          return this.emit("query", t), s.HTTPRequest.get(this._url, t, (function (i, r) {
            if (n === e._counter && JSON.stringify(t) === JSON.stringify(e.getParams())) return i ? e.emit("error", i) : void e.setProperty({
              pos: r.body.pos,
              endOfWord: r.body.endOfWord
            }).setItems(r.body.text && r.body.text.length ? r.body.text : "")
          })), this
        },
        canRequestSuggestion: function () {
          return this.isValid()
        }
      }, {
        prepareValue: function (e, t) {
          var n = t.pos,
            i = t.index,
            r = t.value;
          return n < 0 ? i += n : r = new Array(n + 1).join(" ") + r, {
            text: e.slice(0, i) + r + e.slice(t.index),
            caret: i + r.length
          }
        },
        extractWords: function (e, t) {
          if (!r.default.trim(e)) return "";
          var n = e.match(/(\S+\s*)/g),
            i = t ? -t : 0;
          return n ? n.slice(i).join("") : ""
        }
      });
      t.PredictorModel = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechRecognizerNative = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(178);
      var s = o.SpeechRecognizerBase.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._options = e
        },
        getRecognition: function () {
          return this._recognition || this._createRecognizer(), this._recognition
        },
        getNewRecognition: function () {
          return this._createRecognizer(), this._recognition
        },
        _createRecognizer: function () {
          this._recognition && this._clearListeners();
          var e = this._options,
            t = e.continuous,
            n = e.interimResults,
            i = new(window.SpeechRecognition || window.webkitSpeechRecognition);
          i.continuous = t, i.interimResults = n, i.onstart = this._onStart.bind(this), i.onend = this._onEnd.bind(this), i.onresult = this._onResult.bind(this), i.onerror = i.onend, this._recognition = i
        },
        _clearListeners: function () {
          var e = this._recognition;
          e.onstart = null, e.onend = null, e.onresult = null, e.onerror = null
        },
        _onStart: function () {
          this.emit(o.RECOGNITION_EVENTS.START, "native")
        },
        _onEnd: function (e) {
          "error" === e.type && this.getRecognition().abort(), this.emit(o.RECOGNITION_EVENTS.END, "error" === e.type ? e.error : "")
        },
        _onResult: function (e) {
          this.emit(o.RECOGNITION_EVENTS.RECOGNIZE, e)
        },
        stopListening: function () {
          return this.getRecognition().abort(), this
        },
        startListening: function (e) {
          var t = this.getNewRecognition();
          return navigator.onLine ? (t.lang = e, t.start(), this) : this.emit(o.RECOGNITION_EVENTS.END, o.RECOGNITION_ERRORS.NETWORK)
        },
        convertLanguage: function (e, t) {
          t(s.langs[e] || "")
        },
        prepareData: function (e, t) {
          for (var n = "", i = !0, o = e.results, s = e.resultIndex, a = o.length; s < a; s++) {
            if (!o[s]) return;
            o[s][0] && (n += o[s][0].transcript), o[s].isFinal || (i = !1)
          }
          return {
            final: i,
            value: r.default.trim(n),
            index: t,
            resultIndex: e.resultIndex
          }
        },
        getVisualizer: function () {
          return null
        },
        getPriority: function () {
          return /yabrowser/.test(navigator.userAgent.toLowerCase()) ? o.RECOGNITION_PRIORITIES.LOW : o.RECOGNITION_PRIORITIES.NORMAL
        }
      }, {
        langs: {
          ar: "ar-EG",
          bg: "bg-BG",
          ca: "ca-ES",
          cs: "cs-CZ",
          da: "da-DK",
          de: "de-DE",
          el: "el-GR",
          en: "en-GB",
          es: "es-ES",
          fi: "fi-FI",
          fr: "fr-FR",
          he: "he-IL",
          hr: "hr_HR",
          hu: "hu-HU",
          id: "id-ID",
          is: "is-IS",
          it: "it-IT",
          ja: "ja-JP",
          ko: "ko-KR",
          lt: "lt-LT",
          ms: "ms-MY",
          nl: "nl-NL",
          no: "nb-NO",
          pl: "pl-PL",
          pt: "pt-PT",
          ro: "ro-RO",
          ru: "ru-RU",
          sk: "sk-SK",
          sl: "sl-SI",
          sr: "sr-RS",
          sv: "sv-SE",
          th: "th-TH",
          tr: "tr-TR",
          uk: "uk-UA",
          vi: "vi-VN",
          zh: "cmn-Hans-CN"
        },
        isAvailable: function () {
          var e = window.SpeechRecognition || window.webkitSpeechRecognition;
          return e && r.default.isFunction(e) && !/opr/.test(navigator.userAgent.toLowerCase())
        }
      });
      t.SpeechRecognizerNative = s
    },
    ,
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PureComponent = t.COMPONENT_EVENTS = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(210),
        s = n(227),
        a = n(20),
        c = n(69);

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach((function (t) {
            d(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var f = {
        RENDERED: "rendered",
        DIRECTIVE_UPDATED: "directiveUpdated"
      };
      t.COMPONENT_EVENTS = f;
      var p = "updateDirective",
        h = a.Model.extend({
          trackRenderTime: function (e) {
            return c.TemplateView.prototype.trackRenderTime.apply(this, arguments)
          },
          getComponentName: function () {
            return c.TemplateView.prototype.getComponentName.apply(this)
          },
          init: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this._cachedDirectiveProps = {}, this.setDirectiveCacheValidity(!0), t.container && this.setContainer(t.container), this.updateAsync = r.default.debounce(h.prototype.update, 0), this.updateNow = this.updateAsync.callNow.bind(this)
          },
          template: function (e, t) {},
          getDirective: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.getDirectiveInstance(e, !1)
          },
          getMemoizedDirective: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.getDirectiveInstance(e, !0)
          },
          getDirectiveInstance: function (e, t) {
            return this._directive || (this._directive = this.createDirective()), this._directive(e, t)
          },
          getTemplate: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.template(this.getRenderHelpers(), e)
          },
          getRenderHelpers: function () {
            return {
              html: o.html,
              nothing: o.nothing,
              cn: s.cn
            }
          },
          update: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = this.getContainer();
            return t ? this.renderTo(t, e) : this.hasDirective() && this.updateDirective(e), this
          },
          renderTo: function (e) {
            var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.trackRenderTime((function () {
              return (0, o.render)(t.getTemplate(n), e)
            })), this.emit(f.RENDERED, n)
          },
          updateDirectiveCachedProps: function (e) {
            return this._cachedDirectiveProps = l({}, e), this
          },
          shouldDirectiveUpdate: function (e) {
            return !r.default.isEqualDeep(this._cachedDirectiveProps, e)
          },
          setDirectiveCacheValidity: function (e) {
            return this._directiveCacheIsValid = e, this
          },
          createDirective: function () {
            var e, t = this;
            return this.on(p, (function (n) {
              e && e(l(l({}, t._cachedDirectiveProps), n), {
                forceCommit: !0
              })
            })).onChange((function () {
              return t.setDirectiveCacheValidity(!1)
            })), (0, o.directive)((function (n, i) {
              return function (r) {
                (e = function (e) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = n.forceCommit,
                    s = !i || !t._directiveCacheIsValid || t.shouldDirectiveUpdate(e);
                  t.setDirectiveCacheValidity(!0), s && (t.updateDirectiveCachedProps(e), r.setValue(t.getTemplate(e)), o && t.trackRenderTime((function () {
                    return r.commit()
                  })), t.emit(f.DIRECTIVE_UPDATED, e))
                })(n)
              }
            }))
          },
          updateDirective: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.emit(p, e)
          },
          hasDirective: function () {
            return Boolean(this._directive)
          },
          onRendered: function (e) {
            return this.on(f.RENDERED, e)
          },
          onceRendered: function (e) {
            return this.once(f.RENDERED, e)
          },
          onDirectiveUpdated: function (e) {
            return this.on(f.DIRECTIVE_UPDATED, e)
          },
          setContainer: function (e) {
            this._element = e
          },
          getContainer: function () {
            return this._element
          },
          getRef: function (e) {
            var t = this.getContainer();
            return t ? t.querySelector('[data-ref-id="'.concat(e, '"]')) : null
          }
        });
      t.PureComponent = h
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "DefaultTemplateProcessor", {
        enumerable: !0,
        get: function () {
          return i.DefaultTemplateProcessor
        }
      }), Object.defineProperty(t, "defaultTemplateProcessor", {
        enumerable: !0,
        get: function () {
          return i.defaultTemplateProcessor
        }
      }), Object.defineProperty(t, "SVGTemplateResult", {
        enumerable: !0,
        get: function () {
          return r.SVGTemplateResult
        }
      }), Object.defineProperty(t, "TemplateResult", {
        enumerable: !0,
        get: function () {
          return r.TemplateResult
        }
      }), Object.defineProperty(t, "directive", {
        enumerable: !0,
        get: function () {
          return o.directive
        }
      }), Object.defineProperty(t, "isDirective", {
        enumerable: !0,
        get: function () {
          return o.isDirective
        }
      }), Object.defineProperty(t, "removeNodes", {
        enumerable: !0,
        get: function () {
          return s.removeNodes
        }
      }), Object.defineProperty(t, "reparentNodes", {
        enumerable: !0,
        get: function () {
          return s.reparentNodes
        }
      }), Object.defineProperty(t, "noChange", {
        enumerable: !0,
        get: function () {
          return a.noChange
        }
      }), Object.defineProperty(t, "nothing", {
        enumerable: !0,
        get: function () {
          return a.nothing
        }
      }), Object.defineProperty(t, "AttributeCommitter", {
        enumerable: !0,
        get: function () {
          return c.AttributeCommitter
        }
      }), Object.defineProperty(t, "AttributePart", {
        enumerable: !0,
        get: function () {
          return c.AttributePart
        }
      }), Object.defineProperty(t, "BooleanAttributePart", {
        enumerable: !0,
        get: function () {
          return c.BooleanAttributePart
        }
      }), Object.defineProperty(t, "EventPart", {
        enumerable: !0,
        get: function () {
          return c.EventPart
        }
      }), Object.defineProperty(t, "isIterable", {
        enumerable: !0,
        get: function () {
          return c.isIterable
        }
      }), Object.defineProperty(t, "isPrimitive", {
        enumerable: !0,
        get: function () {
          return c.isPrimitive
        }
      }), Object.defineProperty(t, "NodePart", {
        enumerable: !0,
        get: function () {
          return c.NodePart
        }
      }), Object.defineProperty(t, "PropertyCommitter", {
        enumerable: !0,
        get: function () {
          return c.PropertyCommitter
        }
      }), Object.defineProperty(t, "PropertyPart", {
        enumerable: !0,
        get: function () {
          return c.PropertyPart
        }
      }), Object.defineProperty(t, "parts", {
        enumerable: !0,
        get: function () {
          return u.parts
        }
      }), Object.defineProperty(t, "render", {
        enumerable: !0,
        get: function () {
          return u.render
        }
      }), Object.defineProperty(t, "templateCaches", {
        enumerable: !0,
        get: function () {
          return l.templateCaches
        }
      }), Object.defineProperty(t, "templateFactory", {
        enumerable: !0,
        get: function () {
          return l.templateFactory
        }
      }), Object.defineProperty(t, "TemplateInstance", {
        enumerable: !0,
        get: function () {
          return d.TemplateInstance
        }
      }), Object.defineProperty(t, "createMarker", {
        enumerable: !0,
        get: function () {
          return f.createMarker
        }
      }), Object.defineProperty(t, "isTemplatePartActive", {
        enumerable: !0,
        get: function () {
          return f.isTemplatePartActive
        }
      }), Object.defineProperty(t, "Template", {
        enumerable: !0,
        get: function () {
          return f.Template
        }
      }), t.svg = t.html = void 0;
      var i = n(223),
        r = n(194),
        o = n(191),
        s = n(165),
        a = n(192),
        c = n(179),
        u = n(226),
        l = n(195),
        d = n(193),
        f = n(166);

      "undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
      t.html = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        return new r.TemplateResult(e, n, "html", i.defaultTemplateProcessor)
      };
      t.svg = function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        return new r.SVGTemplateResult(e, n, "svg", i.defaultTemplateProcessor)
      }
    },
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(24), n(26), n(14), n(13), n(23), n(3), n(17), n(47), n(12), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TTSPresenter = void 0, n(35), n(18), n(34);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(32),
        s = n(167);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach((function (t) {
            u(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function l(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }
      var f = o.Presenter.extend({
        init: function () {
          var e = this,
            t = this,
            n = this.getView(),
            i = this.getModel();
          this._players = [], n.on("tap", (function () {
            this.hasState("invalid") ? t.emit("invalidState", i.toJSON()) : t.toggle()
          })).on("stateChanged:invalid", (function (e) {
            t.emit("toggleValid", !e)
          })), i.onChange(["text", "lang"], (function () {
            e._updatePlayerState()
          }))
        },
        _updatePlayerState: function () {
          var e = this.getView(),
            t = this.getModel(),
            n = t.getProps(),
            i = n.text,
            r = n.lang;
          this.stop(), this._resetPlayingCounter(), this.getPlayerState(i, r, (function (n) {
            e.setState("invalid", n !== s.PLAYER_STATES.OK), t.setProperty("state", n)
          }))
        },
        stop: function () {
          var e = this._players.some((function (e) {
            return e.isActive()
          }));
          this._players.forEach((function (e) {
            return e.stop()
          })), e && !this.getView().hasState("silent") && this._onActionStarted({
            action: s.PLAYER_ACTIONS.STOP
          })
        },
        play: function () {
          var e = this,
            t = this.getProps(),
            n = t.text,
            i = t.lang,
            o = !!Boolean(window.config.ENABLE_TTS_SLOWING) && this._getPlayingCounter() % 2;
          r.default.asyncFilter(this.getSortedPlayers(n, i), (function (t, r) {
            return t.play(n, i, o, (function (t) {
              t ? e._incrementPlayingCounter() : r(!1)
            }))
          }))
        },
        getPlayerState: function (e, t, n) {
          r.default.asyncFilter(this._players, (function (e, n) {
            e.isLangSupported(t, n)
          }), (function (t) {
            var i = t;
            return i.length ? (i = i.filter((function (t) {
              return t.isTextSupported(e)
            }))).length ? (i = i.filter((function (t) {
              return t.isTextSizeBelowLimit(e)
            }))).length ? void n(s.PLAYER_STATES.OK) : n(s.PLAYER_STATES.TEXT_SIZE_EXCEEDED) : n(s.PLAYER_STATES.TEXT_NOT_SUPPORTED) : n(s.PLAYER_STATES.LANG_NOT_SUPPORTED)
          }))
        },
        getSortedPlayers: function (e, t) {
          return this._players.map((function (n) {
            return [n.getPriority(e, t), n]
          })).sort((function (e, t) {
            var n = l(e, 1)[0];
            return l(t, 1)[0] - n
          })).map((function (e) {
            var t = l(e, 2);
            t[0];
            return t[1]
          }))
        },
        toggle: function () {
          var e = this.isActive();
          return e ? this.stop() : this.play(), !e
        },
        isActive: function () {
          return this._players.some((function (e) {
            return e.isActive()
          }))
        },
        isValid: function (e, t, n) {
          this.getPlayerState(e, t, (function (e) {
            n(e === s.PLAYER_STATES.OK)
          }))
        },
        addPlayer: function (e) {
          e.on("actionStarted", this._onActionStarted.bind(this)), e.on("playerUpdated", this._updatePlayerState.bind(this)), this._players.push(e)
        },
        setText: function (e) {
          return this.getModel().setProperty("text", f.normalizeText(e)), this
        },
        setLanguage: function (e) {
          return this.getModel().setProperty("lang", e), this
        },
        _getPlayingCounter: function () {
          return this.getModel().getProperty("counter") || 0
        },
        _incrementPlayingCounter: function () {
          return this.getModel().setProperty("counter", this._getPlayingCounter() + 1), this
        },
        _resetPlayingCounter: function () {
          return this.getModel().setProperty("counter", 0), this
        },
        _onActionStarted: function (e) {
          var t = this.getView(),
            n = e.action,
            i = s.PLAYER_ACTIONS.STOP,
            r = s.PLAYER_ACTIONS.LOAD,
            o = s.PLAYER_ACTIONS.PLAY;
          t.setState({
            silent: n === i,
            loading: n === r,
            playing: n === o
          }), this.emit("actionStarted", c(c({}, e), this.getProps()))
        }
      }, {
        normalizeText: function (e) {
          return r.default.trim(e.replace(/[^\S\r\n]+/g, " "))
        }
      });
      t.TTSPresenter = f
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SessionStorage = void 0, n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(20).Model.extend({
        init: function () {
          this.on("change", (function (e, t) {
            try {
              sessionStorage.setItem(e, r.default.safeStringifyJSON(t))
            } catch (e) {
              if (e.name === o.QUOTA_EXCEEDED_ERROR) return void this.emit("quotaError", e)
            }
            this.emit("fileStored")
          }))
        },
        removeItem: function (e) {
          sessionStorage.removeItem(e)
        },
        getItem: function (e) {
          if (sessionStorage.getItem(e)) return r.default.safeParseJSON(sessionStorage.getItem(e))
        }
      }, {
        QUOTA_EXCEEDED_ERROR: "QuotaExceededError"
      });
      t.SessionStorage = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslatorModel2 = void 0, n(34), n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(186),
        s = n(92),
        a = n(59);
      var c = o.TranslatorModel.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._chunks = [], this._chunkSize = e.chunkSize || 600, this._maxThreads = e.maxThreads || 4, this._activeRequests = [], this.on("invalid", this.reset)
        },
        reset: function () {
          return this._index = 0, this._align = "", this._chunks.length = 0, this._activeRequests.forEach((function (e) {
            e.abort()
          })), this._activeRequests.length = 0, this._completedThreads = 0, this
        },
        getData: function (e) {
          var t = o.TranslatorModel.prototype.getData.call(this);
          return e && (t.text = [e]), t
        },
        getParams: function (e) {
          var t = o.TranslatorModel.prototype.getParams.call(this);
          return e && (t.id = t.id.replace(/\d+$/, e)), t
        },
        makeChunks: function () {
          for (var e, t = this.getText().join("\n"); t;) e = r.default.truncateText(t, this._chunkSize), this._chunks.push(e), t = t.slice(e.length);
          return this
        },
        requestTranslation: function () {
          var e;
          if (!this.isValid() || this.getProperty("shouldNotRequest")) return this;
          for (this.reset(), this.makeChunks(), this.increaseCounter(), this.emit("query", r.default.extend(this.getData(), this.getParams())), e = 0; e < this._maxThreads; e++) this.translateNextChunk();
          return this
        },
        translateNextChunk: function () {
          var e = this._chunks.length;
          if (!e) return this;
          var t = this._index++,
            n = this._chunks[t];
          if (t < e) {
            if (n.length > this._chunkSize || !r.default.trim(n)) return this.translateNextChunk();
            this._activeRequests.push(new a.HTTPRequest(this.getProperty("url")).setType(a.HTTPRequest.types.FORM).setData(this.getData(n)).setParams(this.getParams(t)).setMethod(a.HTTPRequest.methods.POST).send(this._handleChunkResponse.bind(this, t)))
          } else ++this._completedThreads === this._maxThreads && this.setProperty("translation", this._chunks.join(""), {
            align: this._align
          });
          return this
        },
        _handleChunkResponse: function (e, t, n) {
          var i = t ? t.code : n.body.code;
          i === a.HTTPRequest.codes.OK ? (this._chunks[e] = n.body.text.join("\n"), n.body.align && 1 === this._chunks.length && (this._align = n.body.align[0]), this.translateNextChunk()) : i !== s.HTTPError.ABORT && this.reset().emit("error", t || new s.HTTPError(i, n.body.message))
        }
      });
      t.TranslatorModel2 = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.KeyGenerator = void 0;
      var i = n(50).Base.extend({
        init: function (e, t) {
          var n = this.constructor;
          this._maxLength = e || n.DEFAULT_LENGTH, this._maxCounterDigits = t || n.DEFAULT_COUNTER_DIGITS, this._counter = this._generateCounter()
        },
        generate: function () {
          var e = this.constructor,
            t = e.convertInt(Date.now()) + e.convertInt(this._counter);
          return this._incrementCounter(), t += e.generateRandomStr(this._maxLength - t.length)
        },
        _getCounterLimit: function () {
          return Math.pow(this.constructor.getRadix(), this._maxCounterDigits)
        },
        _generateCounter: function () {
          return Math.floor(Math.random() * this._getCounterLimit())
        },
        _incrementCounter: function () {
          this._counter = (this._counter + 1) % this._getCounterLimit()
        }
      }, {
        _CHARS: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        DEFAULT_COUNTER_DIGITS: 2,
        DEFAULT_LENGTH: 14,
        getRadix: function () {
          return this._CHARS.length
        },
        getCharAt: function (e) {
          return this._CHARS.charAt(e)
        },
        generateRandomStr: function (e) {
          for (var t = "", n = this.getRadix(); t.length < e;) t += this.getCharAt(Math.floor(Math.random() * n));
          return t
        },
        convertInt: function (e) {
          var t = e,
            n = "",
            i = this.getRadix();
          do {
            n = this.getCharAt(t % i) + n, t = Math.floor(t / i)
          } while (t > 0);
          return n
        }
      });
      t.KeyGenerator = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CollectionDatabase = t.DB_INDEXES = t.DB_STORES = void 0, n(52), n(12), n(14), n(79);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(80),
        s = n(200),
        a = n(175);
      var c = {
        COLLECTIONS: "collections",
        RECORDS: "records"
      };
      t.DB_STORES = c;
      var u = {
        BY_COLLECTION: "by_collection_id",
        BY_RECORD: "by_record",
        BY_RECORD_HASH: "by_record_hash",
        BY_DATE: "by_creation_date",
        BY_COLLECTION_AND_DATE: "by_collection_and_date",
        BY_COLLECTION_AND_DATE_KEY: "by_collection_and_date_key"
      };
      t.DB_INDEXES = u;
      var l = s.Database.extend({
        init: function (e, t) {
          this._migrateParams = t.migrateParams
        },
        prepareRecord: function (e, t) {
          return e.id = e.id || this.generateKey(), e.collectionId = e.collectionId || t.id, e.creationTimestamp || (e.creationTimestamp = a.CollectionServerModel.getTimestamp()), e.creationTimeKey = l.getCreationTimeKey(e), e.modificationTimestamp = e.modificationTimestamp || e.creationTimestamp, t.type !== a.COLLECTION_TYPES.FAVORITES && t.type !== a.COLLECTION_TYPES.COLLECTION || (e.textHashKey = l.getTextHashKey(e)), e
        },
        cloneRecord: function (e) {
          return {
            text: e.text,
            lang: e.lang,
            score: e.score,
            status: a.COLLECTION_STATUSES.ADDED,
            translation: e.translation,
            creationTimestamp: e.creationTimestamp,
            modificationTimestamp: e.modificationTimestamp
          }
        },
        createDatabase: function (e) {
          var t = e.target.result,
            n = t.createObjectStore(c.COLLECTIONS, {
              keyPath: "id"
            }),
            i = t.createObjectStore(c.RECORDS, {
              keyPath: "id"
            });
          n.createIndex(u.BY_DATE, "creationTimestamp", {
            unique: !1
          }), i.createIndex(u.BY_COLLECTION, "collectionId", {
            unique: !1
          }), i.createIndex(u.BY_RECORD_HASH, "textHashKey", {
            unique: !1
          }), i.createIndex(u.BY_COLLECTION_AND_DATE_KEY, "creationTimeKey", {
            unique: !1
          }), n.add(this.getFavoritesCollectionParams()), n.add(this.getHistoryCollectionParams())
        },
        upgradeDatabase: function (e) {
          try {
            e.oldVersion < 2 && this._upgradeDatabase_2(e), e.oldVersion < 5 && this._upgradeDatabase_5(e)
          } catch (t) {
            (0, o.logError)(t, {
              version: e.oldVersion
            })
          }
        },
        _upgradeDatabase_2: function (e) {
          var t = this,
            n = {},
            i = e.target.transaction,
            r = i.objectStore(c.RECORDS),
            o = i.objectStore(c.COLLECTIONS);
          r.deleteIndex(u.BY_RECORD), r.deleteIndex(u.BY_COLLECTION_AND_DATE), r.createIndex(u.BY_RECORD_HASH, "textHashKey", {
            unique: !1
          }), r.createIndex(u.BY_COLLECTION_AND_DATE_KEY, "creationTimeKey", {
            unique: !1
          }), o.openCursor().onsuccess = function (e) {
            var i = e.target.result;
            if (i) {
              var o = i.value;
              n[o.id] = o, i.continue()
            } else r.openCursor().onsuccess = function (e) {
              var i = e.target.result;
              if (i) {
                var r = n[i.value.collectionId];
                r ? i.update(t.prepareRecord(i.value, r)) : i.delete(), i.continue()
              } else t.addTrace("migrFnsh")
            }
          }
        },
        _upgradeDatabase_5: function (e) {
          var t = this,
            n = e.target.transaction,
            i = n.objectStore(c.RECORDS),
            r = n.objectStore(c.COLLECTIONS),
            o = function (n, i, r) {
              n.indexNames.contains(i) || (t.emit("indexNotFound", {
                indexName: i,
                version: e.oldVersion
              }), n.createIndex(i, r, {
                unique: !1
              }))
            };
          o(i, u.BY_RECORD_HASH, "textHashKey"), o(i, u.BY_COLLECTION, "collectionId"), o(i, u.BY_COLLECTION_AND_DATE_KEY, "creationTimeKey"), o(r, u.BY_DATE, "creationTimestamp")
        },
        getFavoritesCollectionParams: function () {
          var e = this._migrateParams;
          return {
            id: this.generateKey(),
            attributesTimestamp: a.CollectionServerModel.getTimestamp(),
            creationTimestamp: 0,
            type: a.COLLECTION_TYPES.FAVORITES,
            name: e.defaultFavName,
            public: !1,
            status: a.COLLECTION_STATUSES.ADDED,
            version: 0,
            recordsCount: 0
          }
        },
        getHistoryCollectionParams: function () {
          var e = this._migrateParams;
          return {
            id: this.generateKey(),
            attributesTimestamp: a.CollectionServerModel.getTimestamp(),
            creationTimestamp: 0,
            type: a.COLLECTION_TYPES.HISTORY,
            name: e.defaultHistoryName,
            public: !1,
            status: a.COLLECTION_STATUSES.ADDED,
            version: 0,
            recordsCount: 0
          }
        },
        createHistoryCollection: function () {
          this.createCollection(this.getHistoryCollectionParams(), {
            subscribe: !1
          })
        },
        createCollection: function (e) {
          var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = this._db,
            r = i.transaction(c.COLLECTIONS, "readwrite"),
            o = r.objectStore(c.COLLECTIONS);
          e.id = this.generateKey(), r.oncomplete = function () {
            n.silent || t.emit("added", e, n)
          }, r.onerror = function (e) {
            t.emit("error", e, "createCollection")
          }, o.add(e)
        },
        getCollections: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = this.safeTransaction(c.COLLECTIONS);
          if (!n) return this.waitReconnect((function () {
            return e.getCollections(t)
          }));
          var i = this,
            r = [],
            o = window.IDBKeyRange.bound(0, Number.MAX_VALUE),
            s = n.objectStore(c.COLLECTIONS).index(u.BY_DATE);
          s.openCursor(o).onsuccess = function (e) {
            var n = e.target.result;
            n && ((t.sync || n.value.status !== a.COLLECTION_STATUSES.DELETED) && r.push(n.value), n.continue())
          }, n.oncomplete = function () {
            i.emit("collections", r, t)
          }, n.onerror = function (e) {
            i.emit("error", e, "getCollections")
          }
        },
        checkRecord: function (e) {
          try {
            this.checkRecordUnsafe(e)
          } catch (e) {
            this.emit("checkRecordError", e)
          }
        },
        checkRecordUnsafe: function (e) {
          var t, n = this,
            i = this.safeTransaction(c.RECORDS);
          if (!i) return this.waitReconnect((function () {
            return n.checkRecordUnsafe(e)
          }));
          var r = this,
            o = l.getTextHashKey(e),
            s = window.IDBKeyRange.only(o);
          i.objectStore(c.RECORDS).index(u.BY_RECORD_HASH).openCursor(s).onsuccess = function (n) {
            var i = n.target.result;
            if (i) {
              var r = i.value;
              !t && r.status !== a.COLLECTION_STATUSES.DELETED && l.sameRecordData(r, e) && (t = !0), i.continue()
            }
          }, i.oncomplete = function () {
            r.emit("checked", t)
          }, i.onerror = function (e) {
            r.emit("error", e, "checkRecordUnsafe")
          }
        },
        getRecordsByCollection: function (e) {
          var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (e) {
            var i = this.safeTransaction(c.RECORDS);
            if (!i) return this.waitReconnect((function () {
              return t.getRecordsByCollection(e, n)
            }));
            var r = [],
              o = e + l.INDEX_BEGIN,
              s = e + l.INDEX_END,
              d = window.IDBKeyRange.bound(o, s),
              f = i.objectStore(c.RECORDS).index(u.BY_COLLECTION_AND_DATE_KEY);
            f.openCursor(d, "prev").onsuccess = function (e) {
              var t = e.target.result;
              t && ((n.sync || t.value.status !== a.COLLECTION_STATUSES.DELETED) && r.push(t.value), t.continue())
            }, i.oncomplete = function () {
              t.emit("records", r, e, n)
            }, i.onerror = function (e) {
              t.emit("error", e, "getRecordsByCollection")
            }
          }
        },
        addRecords: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.addRecords(e, t)
          }));
          var r = 0,
            o = this,
            s = t.id,
            d = i.objectStore(c.RECORDS),
            f = i.objectStore(c.COLLECTIONS),
            p = d.index(u.BY_RECORD_HASH);
          i.oncomplete = function () {
            o.emit("addedRecords", s)
          }, i.onerror = function (e) {
            o.emit("error", e, "addRecords")
          }, e.forEach((function (e, n, i) {
            var c, u = i.length,
              h = l.getTextHashKey(e),
              g = window.IDBKeyRange.only(h);
            p.openCursor(g).onsuccess = function (i) {
              var p = i.target.result;
              p ? (!c && l.sameRecordData(p.value, e) && (c = p.value), p.continue()) : (c ? c.status === a.COLLECTION_STATUSES.DELETED && (c.score = 0, c.status = a.COLLECTION_STATUSES.UPDATED, c.modificationTimestamp = e.modificationTimestamp, d.put(c), r++) : (d.add(o.prepareRecord(e, t)), r++), n === u - 1 && (f.get(s).onsuccess = function (e) {
                var t = e.target.result;
                t && (t.status = a.COLLECTION_STATUSES.UPDATED, t.recordsCount = (t.recordsCount || 0) + r, f.put(t))
              }))
            }
          }))
        },
        addCollection: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.addCollection(e, t)
          }));
          var r = this,
            o = i.objectStore(c.RECORDS);
          e.id = this.generateKey(), e.recordsCount = t.new.length, i.objectStore(c.COLLECTIONS).add(e).onsuccess = function () {
            t.new.forEach((function (t) {
              o.add(r.prepareRecord(t, e))
            }))
          }, i.oncomplete = function () {
            r.emit("synced")
          }, i.onerror = function (e) {
            r.emit("error", e, "addCollection")
          }
        },
        updateCollection: function (e, t) {
          var n = this,
            i = this.safeTransaction(c.RECORDS, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.updateCollection(e, t)
          }));
          var r = 0,
            o = this._db,
            s = this,
            u = i.objectStore(c.RECORDS);
          t.deleted.forEach((function (e) {
            u.get(e.id).onsuccess = function (t) {
              var n = t.target.result;
              n && n.status !== a.COLLECTION_STATUSES.DELETED && r++, u.delete(e.id)
            }
          })), i.oncomplete = function () {
            var n = o.transaction(o.objectStoreNames, "readwrite"),
              i = n.objectStore(c.RECORDS),
              a = n.objectStore(c.COLLECTIONS);
            a.get(e.id).onsuccess = function (n) {
              var o = n.target.result;
              t.new.forEach((function (t) {
                i.add(s.prepareRecord(t, e))
              })), t.updated.forEach((function (e) {
                i.get(e.id).onsuccess = function (t) {
                  var n = t.target.result;
                  Object.keys(e.params).forEach((function (t) {
                    n[t] = e.params[t]
                  })), i.put(n)
                }
              })), Object.keys(e).forEach((function (t) {
                o[t] !== e[t] && (o[t] = e[t])
              }));
              var c = (o.recordsCount || 0) + t.new.length - r;
              o.recordsCount = c < 0 ? 0 : c, a.put(o)
            }, n.oncomplete = function () {
              s.emit("synced")
            }, n.onerror = function (e) {
              s.emit("error", e, "updateCollectionAdd")
            }
          }, i.onerror = function (e) {
            s.emit("error", e, "updateCollection")
          }
        },
        updateCollectionData: function (e, t) {
          var n = this,
            i = this.safeTransaction(c.COLLECTIONS, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.updateCollectionData(e, t)
          }));
          var r = this,
            o = i.objectStore(c.COLLECTIONS);
          o.get(e).onsuccess = function (e) {
            var n = e.target.result;
            Object.keys(t).forEach((function (e) {
              n[e] = t[e]
            })), o.put(n)
          }, i.oncomplete = function () {
            r.emit("collectionUpdated")
          }, i.onerror = function (e) {
            r.emit("error", e, "updateItem")
          }
        },
        deleteCollection: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.deleteCollection(e, t)
          }));
          var r = this,
            o = i.objectStore(c.RECORDS),
            s = i.objectStore(c.COLLECTIONS),
            l = window.IDBKeyRange.only(e),
            d = o.index(u.BY_COLLECTION),
            f = !1;
          s.get(e).onsuccess = function (n) {
            var i = n.target.result;
            t || !i.serverId ? s.delete(e) : (i.status = a.COLLECTION_STATUSES.DELETED, s.put(i)), f = i.type === a.COLLECTION_TYPES.SUBSCRIPTION
          }, d.openCursor(l).onsuccess = function (e) {
            var t = e.target.result;
            t && (t.delete(), t.continue())
          }, i.oncomplete = function () {
            r.emit("collectionDeleted", {
              unsubscribed: f
            })
          }, i.onerror = function (e) {
            r.emit("error", e, "deleteCollection")
          }
        },
        updateRecord: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.updateRecord(e, t)
          }));
          var r, o = this,
            s = i.objectStore(c.RECORDS);
          s.get(e).onsuccess = function (e) {
            var n = e.target.result,
              o = i.objectStore(c.COLLECTIONS),
              u = n.score + t.score;
            n.score = u < 0 ? 0 : u, n.status = a.COLLECTION_STATUSES.UPDATED, n.modificationTimestamp = t.modificationTimestamp, s.put(n), r = n.collectionId, o.get(n.collectionId).onsuccess = function (e) {
              var t = e.target.result;
              t && (t.status = a.COLLECTION_STATUSES.UPDATED, o.put(t))
            }
          }, i.oncomplete = function () {
            o.emit("recordUpdated", r)
          }, i.onerror = function (e) {
            o.emit("error", e, "updateRecord")
          }
        },
        updateHistoryRecord: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.updateHistoryRecord(e, t)
          }));
          var r = i.objectStore(c.RECORDS),
            o = i.objectStore(c.COLLECTIONS),
            s = r.index(u.BY_COLLECTION),
            d = window.IDBKeyRange.only(e),
            f = t.srcLang + "-" + t.dstLang;
          o.get(e).onsuccess = function (e) {
            var t = e.target.result;
            t && (t.status = a.COLLECTION_STATUSES.UPDATED, o.put(t))
          }, s.openCursor(d).onsuccess = function (e) {
            var n = e.target.result;
            if (n) {
              var i = n.value;
              i.translation === t.translation && i.text === t.text && i.lang === f && (i.creationTimestamp = a.CollectionServerModel.getTimestamp(), i.modificationTimestamp = a.CollectionServerModel.getTimestamp(), i.creationTimeKey = l.getCreationTimeKey(i), i.status = a.COLLECTION_STATUSES.UPDATED, n.update(i)), n.continue()
            }
          }, i.oncomplete = function () {
            n.emit("recordUpdated", e)
          }, i.onerror = function (e) {
            n.emit("error", e, "updateHistoryRecord")
          }
        },
        deleteRecordByProps: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.deleteRecordByProps(e, t)
          }));
          var r = i.objectStore(c.RECORDS),
            o = i.objectStore(c.COLLECTIONS),
            s = r.index(u.BY_COLLECTION),
            l = window.IDBKeyRange.only(e),
            d = t.lang || t.srcLang + "-" + t.dstLang;
          o.get(e).onsuccess = function (e) {
            var t = e.target.result;
            t && (t.recordsCount--, t.status = a.COLLECTION_STATUSES.UPDATED, o.put(t))
          }, s.openCursor(l).onsuccess = function (e) {
            var n = e.target.result;
            if (n) {
              var i = n.value;
              i.translation === t.translation && i.text === t.text && i.lang === d && (i.serverId ? (i.status = a.COLLECTION_STATUSES.DELETED, n.update(i)) : r.delete(n.primaryKey)), n.continue()
            }
          }, i.oncomplete = function () {
            n.emit("recordDeleted", e)
          }, i.onerror = function (e) {
            n.emit("error", e, "deleteHistoryRecord")
          }
        },
        resetRecordsScore: function (e) {
          var t = this,
            n = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!n) return this.waitReconnect((function () {
            return t.resetRecordsScore(e)
          }));
          var i = this,
            r = [],
            o = n.objectStore(c.RECORDS),
            s = n.objectStore(c.COLLECTIONS),
            l = o.index(u.BY_COLLECTION),
            d = window.IDBKeyRange.only(e);
          s.get(e).onsuccess = function (e) {
            var t = e.target.result;
            t.status = a.COLLECTION_STATUSES.UPDATED, s.put(t)
          }, l.openCursor(d).onsuccess = function (e) {
            var t = e.target.result;
            t && (t.value.score = 0, t.value.status = a.COLLECTION_STATUSES.UPDATED, t.value.modificationTimestamp = a.CollectionServerModel.getTimestamp(), t.update(t.value), r.push(t.value), t.continue())
          }, n.oncomplete = function () {
            i.emit("resetedScore", r)
          }, n.onerror = function (e) {
            i.emit("error", e, "resetRecordsScore")
          }
        },
        moveRecord: function (e, t) {
          var n = this,
            i = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!i) return this.waitReconnect((function () {
            return n.moveRecord(e, t)
          }));
          var r, o, s = this,
            d = t.id,
            f = i.objectStore(c.RECORDS),
            p = i.objectStore(c.COLLECTIONS),
            h = f.index(u.BY_RECORD_HASH),
            g = l.getTextHashKey(e, d),
            m = window.IDBKeyRange.only(g),
            _ = function (e, t) {
              var n = e.recordsCount || 0;
              n = t ? n + 1 : n - 1, e.status = a.COLLECTION_STATUSES.UPDATED, e.recordsCount = n < 0 ? 0 : n, p.put(e)
            },
            v = e.collectionId;
          h.openCursor(m).onsuccess = function (n) {
            var i = n.target.result;
            i ? (!r && l.sameRecordData(i.value, e) && (r = i.value), i.continue()) : (r ? r.status === a.COLLECTION_STATUSES.DELETED && (r.status = a.COLLECTION_STATUSES.UNCHANGED, f.put(r), p.get(d).onsuccess = function (e) {
              _(e.target.result, !0)
            }) : (o = s.prepareRecord(s.cloneRecord(e), t), f.add(o), p.get(d).onsuccess = function (e) {
              _(e.target.result, !0)
            }), e.serverId ? (e.status = a.COLLECTION_STATUSES.DELETED, f.put(e)) : f.delete(e.id), p.get(v).onsuccess = function (e) {
              _(e.target.result)
            })
          }, i.oncomplete = function () {
            s.emit("recordUpdated")
          }, i.onerror = function (e) {
            s.emit("error", e, "moveRecord")
          }
        },
        deleteRecords: function (e) {
          var t = this,
            n = r.default.isArray(e) ? e : [e];
          if (n.length) {
            var i, o = this.safeTransaction(this._db.objectStoreNames, "readwrite");
            if (!o) return this.waitReconnect((function () {
              return t.deleteRecords(e)
            }));
            var s = this,
              l = o.objectStore(c.RECORDS),
              d = o.objectStore(c.COLLECTIONS);
            l.index(u.BY_COLLECTION).openCursor().onsuccess = function (e) {
              var t = e.target.result;
              if (t) {
                if (-1 !== n.indexOf(t.primaryKey)) {
                  var r = t.value;
                  i = t.key, r.serverId ? (r.status = a.COLLECTION_STATUSES.DELETED, t.update(r)) : l.delete(t.primaryKey)
                }
                t.continue()
              } else i && (d.get(i).onsuccess = function (e) {
                var t = e.target.result,
                  i = (t.recordsCount || 0) - n.length;
                t.status = a.COLLECTION_STATUSES.UPDATED, t.recordsCount = i < 0 ? 0 : i, d.put(t)
              })
            }, o.oncomplete = function () {
              s.emit("recordDeleted", i)
            }, o.onerror = function (e) {
              s.emit("error", e, "deleteRecords")
            }
          }
        },
        resetServerIds: function () {
          var e = this,
            t = this.safeTransaction(this._db.objectStoreNames, "readwrite");
          if (!t) return this.waitReconnect((function () {
            return e.resetServerIds()
          }));
          var n = this,
            i = t.objectStore(c.RECORDS);
          t.objectStore(c.COLLECTIONS).openCursor().onsuccess = function (e) {
            var t = e.target.result;
            if (t) {
              var n = t.value;
              n.status === a.COLLECTION_STATUSES.DELETED ? t.delete() : n.serverId && (n.status = a.COLLECTION_STATUSES.ADDED, delete n.serverId, t.update(n)), t.continue()
            } else i.openCursor().onsuccess = function (e) {
              var t, n = e.target.result;
              n && ((t = n.value).status === a.COLLECTION_STATUSES.DELETED ? n.delete() : t.serverId && (t.status = a.COLLECTION_STATUSES.ADDED, delete t.serverId, n.update(t)), n.continue())
            }
          }, t.oncomplete = function () {
            n.emit("resetedIds")
          }, t.onerror = function (e) {
            n.emit("error", e, "resetServerIds")
          }
        }
      }, {
        sameRecordData: function (e, t) {
          return e.text === t.text && e.lang === t.lang && e.translation === t.translation
        },
        getTextHash: function (e) {
          var t, n = 5381,
            i = e.lang + e.text + e.translation,
            r = i.length;
          for (t = 0; t < r; t++) n = 33 * n ^ i.charCodeAt(t);
          return (n >>> 0).toString(16)
        },
        getTextHashKey: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.collectionId;
          return this.getTextHash(e) + "::" + t
        },
        getCreationTimeKey: function (e) {
          for (var t = String(1e3 * e.creationTimestamp); t.length < 13;) t = "0" + t;
          return e.collectionId + "::" + t
        },
        INDEX_BEGIN: "::",
        INDEX_END: "::~",
        DATABASE_NAME: "ytr_collections",
        DATABASE_VERSION: 5
      });
      t.CollectionDatabase = l
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.StreamPlayer = t.AUDIO_FORMATS = void 0;
      var i = n(61);

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      t.AUDIO_FORMATS = {
        WEBM: "audio/webm;codecs=opus",
        OGG: "audio/ogg;codecs=opus",
        WAV: "audio/x-wav;bit=16",
        WAV_PCM: "audio/x-pcm;bit=16",
        RAW: "audio/x-raw"
      };
      var o = "no_stream",
        s = "decode_error",
        a = "buffer_source_error",
        c = "player_error",
        u = function () {
          function e(t) {
            ! function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.stream = null, this.activeSource = null, this.activeBufferIndex = 0, this.stopped = !0, this.format = "", this.streamFactory = t, this.audioContext = null
          }
          var t, n, u;
          return t = e, (n = [{
            key: "setAudioContext",
            value: function (e) {
              this.audioContext = e
            }
          }, {
            key: "start",
            value: function (e) {
              var t = e.onStart,
                n = e.onError,
                i = e.onFinished,
                r = e.format;
              this.decodeErrorCounter = 0, this.format = r, this.stopped = !1, this.onStart = t, this.onError = n, this.onFinished = i
            }
          }, {
            key: "stop",
            value: function () {
              this.stream && this.stream.break(), this.finished()
            }
          }, {
            key: "onPackage",
            value: function (e) {
              this.stream || (this.stream = this.streamFactory({
                onBufferReady: this.onBufferReady.bind(this),
                format: this.format
              })), this.stream ? this.stream.add(e) : this.error(o)
            }
          }, {
            key: "onStreamFinished",
            value: function () {
              this.stream && this.stream.finish()
            }
          }, {
            key: "onBufferReady",
            value: function (e, t) {
              var n = this;
              e ? (this.audioContext || (this.audioContext = new(window.AudioContext || window.webkitAudioContext)), this.audioContext.decodeAudioData(e, (function (e) {
                return n.handleDecodeAudioData(e, t)
              }), this.handleDecodeError.bind(this))) : this.stop()
            }
          }, {
            key: "handleDecodeError",
            value: function (e) {
              if (0 == this.decodeErrorCounter++) {
                var t = e ? e.message : null;
                (0, i.getGlobalEmitter)().emit("uniproxyTtsError", s, t)
              } else this.decodeErrorCounter > 5 && (this.error(s, e), this.decodeErrorCounter = 0)
            }
          }, {
            key: "handleDecodeAudioData",
            value: function (e, t) {
              this.stopped || (this.audioBuffers || (this.audioBuffers = []), this.audioBuffers[t] = e, this.playBuffer())
            }
          }, {
            key: "finished",
            value: function () {
              this.onFinished && this.onFinished(), this.clean()
            }
          }, {
            key: "clean",
            value: function () {
              this.stream = null, this.stopped = !0, this.audioBuffers = null, this.activeBufferIndex = 0, this.activeSource && (this.activeSource.disconnect(), this.activeSource.removeEventListener("ended", this.handleEnded.bind(this)), this.activeSource.removeEventListener("error", this.handleError.bind(this, a)), this.activeSource.stop()), this.activeSource = null, this.onStart = null, this.onError = null, this.onFinished = null
            }
          }, {
            key: "error",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              null === e && (e = c);
              var n = t instanceof Error ? t.message : null;
              this.onError && this.onError(e, n), this.clean()
            }
          }, {
            key: "playBuffer",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (this.audioBuffers && this.audioBuffers.length) {
                var t = this.audioBuffers[this.activeBufferIndex];
                if (t && (!this.activeSource || e)) {
                  this.audioContext || (this.audioContext = new(window.AudioContext || window.webkitAudioContext));
                  var n = this.audioContext,
                    i = n.createBufferSource();
                  this.activeSource = i, i.buffer = t, i.connect(n.destination), i.addEventListener("ended", this.handleEnded.bind(this)), i.addEventListener("error", this.handleError.bind(this, a)), i.start(), 0 === this.activeBufferIndex && this.onStart && this.onStart()
                }
              }
            }
          }, {
            key: "handleError",
            value: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              this.error(e, t)
            }
          }, {
            key: "handleEnded",
            value: function () {
              this.activeSource && (this.activeSource.disconnect(), this.activeSource = null), this.audioBuffers && this.stream ? (this.audioBuffers[this.activeBufferIndex] = null, this.stream.finished && this.stream.index === this.activeBufferIndex ? this.finished() : (this.activeBufferIndex++, this.audioBuffers[this.activeBufferIndex] && this.playBuffer(!0))) : this.clean()
            }
          }]) && r(t.prototype, n), u && r(t, u), e
        }();
      t.StreamPlayer = u
    },
    function (e, t, n) {
      "use strict";
      n(24), n(26), n(14), n(13), n(23), n(17), n(47), n(12), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.UrlController = t.ACTIVE_VIEWS = t.VIEW_IDS = void 0, n(22), n(3), n(91), n(98), n(66);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(20),
        s = n(221);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach((function (t) {
            u(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function l(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return d(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }
      var f = /\w+-\w+/,
        p = {
          OCR: "ocr",
          COLLECTIONS: "collections"
        };
      t.VIEW_IDS = p;
      var h = [p.OCR, p.COLLECTIONS];
      t.ACTIVE_VIEWS = h;
      var g = function (e) {
          if (!e && ! function (e) {
            return f.test(e)
          }(e)) return [];
          var t = e.split("-");
          return t[0] && t[1] ? t : []
        },
        m = o.Model.extend({
          init: function (e) {
            this.locationObject = e
          },
          getRouteWithQueryString: function () {
            return this.getRoute() + this.getQueryString()
          },
          getQueryParams: function (e) {
            var t = this.getQueryString(),
              n = {};
            if (t.length > 1) {
              if (n = r.default.fromQueryString(t.slice(1)), !e) return n;
              var i = g(n.lang);
              if (i.length > 0) {
                var o = l(i, 2),
                  s = o[0],
                  a = o[1];
                n.srcLang = s, n.dstLang = a
              }
            }
            return n
          },
          getRouteFromTranslationProps: function (e) {
            var t = e.queryParams,
              n = void 0 === t ? {} : t,
              i = e.srcLang,
              r = e.dstLang,
              o = e.trText,
              s = c(c({}, n), this.getQueryParams());
            return i && r && (s.lang = "".concat(i).concat("-").concat(r)), o ? s.text = o : delete s.text, "/".concat(this.buildQueryString(s))
          },
          getRoute: function () {
            return this.locationObject.pathname
          },
          getQueryString: function () {
            return this.locationObject.search
          },
          getPathArray: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getRoute();
            return e.split("/").slice(1)
          },
          hasQueryString: function (e) {
            return -1 !== e.indexOf("?")
          },
          getRouteFromViewName: function (e) {
            return new s.RouteBuilder(e).build()
          },
          isCurrentRoute: function (e) {
            return -1 !== this.getRoute().indexOf(e)
          },
          isMainPageWithoutQueryParams: function (e) {
            return "/" === e
          },
          getCollectionId: function () {
            return this.getPathArray()[1]
          },
          buildQueryString: function (e) {
            return r.default.isEmpty(e) ? "" : "?".concat(r.default.toQueryString(e))
          },
          buildUrl: function (e, t) {
            return r.default.isEmpty(t) || this.hasQueryString(e) ? e : e + this.buildQueryString(t)
          },
          addQueryParamsToPathname: function (e, t) {
            return this.isMainPageWithoutQueryParams(e) ? this.getRouteFromTranslationProps(t) : h.includes(this.getPathArray(e)[0]) ? this.buildUrl(e, t.queryParams) : e
          }
        });
      t.UrlController = m
    },
    function (e, t, n) {
      "use strict";

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RouteBuilder = void 0;
      var r = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.routeList = [], t && this.append(t)
        }
        var t, n, r;
        return t = e, (n = [{
          key: "append",
          value: function (e) {
            return this.routeList.push(e), this
          }
        }, {
          key: "build",
          value: function () {
            return "".concat("/").concat(this.routeList.join("/"))
          }
        }]) && i(t.prototype, n), r && i(t, r), e
      }();
      t.RouteBuilder = r
    },
    function (e, t, n) {
      "use strict";
      var i = n(9).f,
        r = n(49),
        o = n(64),
        s = n(41),
        a = n(65),
        c = n(155),
        u = n(95),
        l = n(125),
        d = n(96),
        f = n(6),
        p = n(63).fastKey,
        h = n(115),
        g = f ? "_s" : "size",
        m = function (e, t) {
          var n, i = p(t);
          if ("F" !== i) return e._i[i];
          for (n = e._f; n; n = n.n)
            if (n.k == t) return n
        };
      e.exports = {
        getConstructor: function (e, t, n, u) {
          var l = e((function (e, i) {
            a(e, l, t, "_i"), e._t = t, e._i = r(null), e._f = void 0, e._l = void 0, e[g] = 0, null != i && c(i, n, e[u], e)
          }));
          return o(l.prototype, {
            clear: function () {
              for (var e = h(this, t), n = e._i, i = e._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete n[i.i];
              e._f = e._l = void 0, e[g] = 0
            },
            delete: function (e) {
              var n = h(this, t),
                i = m(n, e);
              if (i) {
                var r = i.n,
                  o = i.p;
                delete n._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), n._f == i && (n._f = r), n._l == i && (n._l = o), n[g]--
              }
              return !!i
            },
            forEach: function (e) {
              h(this, t);
              for (var n, i = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                for (i(n.v, n.k, this); n && n.r;) n = n.p
            },
            has: function (e) {
              return !!m(h(this, t), e)
            }
          }), f && i(l.prototype, "size", {
            get: function () {
              return h(this, t)[g]
            }
          }), l
        },
        def: function (e, t, n) {
          var i, r, o = m(e, t);
          return o ? o.v = n : (e._l = o = {
            i: r = p(t, !0),
            k: t,
            v: n,
            p: i = e._l,
            n: void 0,
            r: !1
          }, e._f || (e._f = o), i && (i.n = o), e[g]++, "F" !== r && (e._i[r] = o)), e
        },
        getEntry: m,
        setStrong: function (e, t, n) {
          u(e, t, (function (e, n) {
            this._t = h(e, t), this._k = n, this._l = void 0
          }), (function () {
            for (var e = this._k, t = this._l; t && t.r;) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f) ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, l(1))
          }), n ? "entries" : "values", !n, !0), d(t)
        }
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.defaultTemplateProcessor = t.DefaultTemplateProcessor = void 0, n(3);
      var i = n(179);

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var o = function () {
        function e() {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e)
        }
        var t, n, o;
        return t = e, (n = [{
          key: "handleAttributeExpressions",
          value: function (e, t, n, r) {
            var o = t[0];
            return "." === o ? new i.PropertyCommitter(e, t.slice(1), n).parts : "@" === o ? [new i.EventPart(e, t.slice(1), r.eventContext)] : "?" === o ? [new i.BooleanAttributePart(e, t.slice(1), n)] : new i.AttributeCommitter(e, t, n).parts
          }
        }, {
          key: "handleTextExpression",
          value: function (e) {
            return new i.NodePart(e)
          }
        }]) && r(t.prototype, n), o && r(t, o), e
      }();
      t.DefaultTemplateProcessor = o;
      var s = new o;
      t.defaultTemplateProcessor = s
    },
    function (e, t, n) {
      "use strict";
      var i = n(84),
        r = n(10),
        o = n(225),
        s = [].slice,
        a = {},
        c = function (e, t, n) {
          if (!(t in a)) {
            for (var i = [], r = 0; r < t; r++) i[r] = "a[" + r + "]";
            a[t] = Function("F,a", "return new F(" + i.join(",") + ")")
          }
          return a[t](e, n)
        };
      e.exports = Function.bind || function (e) {
        var t = i(this),
          n = s.call(arguments, 1),
          a = function () {
            var i = n.concat(s.call(arguments));
            return this instanceof a ? c(t, i.length, i) : o(t, i, e)
          };
        return r(t.prototype) && (a.prototype = t.prototype), a
      }
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        var i = void 0 === n;
        switch (t.length) {
          case 0:
            return i ? e() : e.call(n);
          case 1:
            return i ? e(t[0]) : e.call(n, t[0]);
          case 2:
            return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
          case 3:
            return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
          case 4:
            return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.render = t.parts = void 0, n(154), n(26), n(14), n(13), n(23), n(127);
      var i = n(165),
        r = n(179),
        o = n(195),
        s = new WeakMap;
      t.parts = s;
      t.render = function (e, t, n) {
        var a = s.get(t);
        void 0 === a && ((0, i.removeNodes)(t, t.firstChild), s.set(t, a = new r.NodePart(Object.assign({
          templateFactory: o.templateFactory
        }, n))), a.appendInto(t)), a.setValue(e), a.commit()
      }
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(228)
    },
    function (e, t, n) {
      "use strict";

      function i(e) {
        function t(t, r, o, s) {
          var a = r ? n + t + e.e + r : n + t,
            c = a;
          if (o) {
            var u = " " + c + e.m;
            for (var l in o)
              if (o.hasOwnProperty(l)) {
                var d = o[l];
                1 == d ? c += u + l : d && (c += u + l + i + d)
              }
          }
          if (void 0 !== s)
            for (var f = 0, p = s.length; f < p; f++) {
              var h = s[f];
              if (h && "string" == typeof h.valueOf())
                for (var g = h.valueOf().split(" "), m = 0; m < g.length; m++) {
                  var _ = g[m];
                  _ !== a && (c += " " + _)
                }
            }
          return c
        }
        var n = e.n || "",
          i = e.v || e.m;
        return function (e, n) {
          return function (i, r, o) {
            return "string" == typeof i ? Array.isArray(r) ? t(e, i, void 0, r) : t(e, i, r, o) : t(e, n, i, r)
          }
        }
      }
      n(22), Object.defineProperty(t, "__esModule", {
        value: 1
      });
      var r = i({
        e: "-",
        m: "_"
      });
      t.cn = r, t.withNaming = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractHistoryComponent = t.HISTORY_METRIKAS = t.HISTORY_EVENTS = void 0, n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(129),
        s = n(230),
        a = n(114);
      var c = {
        APPLY_ITEM: "applyItem",
        OPEN_HISTORY: "openHistory"
      };
      t.HISTORY_EVENTS = c;
      var u = {
        APPLY_ITEM: "applyItem",
        OPEN_HISTORY: "openHistory"
      };
      t.HISTORY_METRIKAS = u;
      var l = (0, a.getTrackerByNamespace)(u).$track,
        d = o.Component.extend({
          defaults: {
            settingEnabled: !0,
            maxItems: 10
          },
          init: function (e) {
            var t = this;
            e.storageModel.onChange(s.HISTORY_CACHE_FIELDS.RECORDS, (function () {
              return t.updateComponent()
            })), this.onChange("settingEnabled", (function () {
              return t.updateComponent()
            })), this.updateComponent()
          },
          updateComponent: function () {
            var e = this.getProps(),
              t = e.storageModel,
              n = e.settingEnabled;
            this.setEnabled(t.getRecords().length > 0 && n), this.update()
          },
          setSettingState: function (e) {
            return this.setProperty("settingEnabled", e)
          },
          applyItem: function (e, t) {
            l(u.APPLY_ITEM, {
              index: t
            }), this.emit(c.APPLY_ITEM, e)
          },
          openHistoryCollection: function (e) {
            l(u.OPEN_HISTORY, {
              source: e
            }), this.emit(c.OPEN_HISTORY)
          },
          getItems: function () {
            var e = this.getProps(),
              t = e.storageModel,
              n = e.maxItems;
            return t.getRecords().slice(0, n)
          },
          getLangDir: function (e) {
            return r.default.isRTLLang(e) ? "rtl" : "ltr"
          }
        });
      t.AbstractHistoryComponent = d
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HistoryCache = t.HISTORY_CACHE_FIELDS = t.STORE_KEY = void 0, n(3);
      var i = n(176);
      t.STORE_KEY = "yTrHistory";
      var r = {
        RECORDS: "records",
        SESSION_RECORD: "sessionRecord"
      };
      t.HISTORY_CACHE_FIELDS = r;
      var o = i.Storage.extend({
        defaults: {
          records: [],
          sessionRecord: null
        },
        init: function (e, t) {
          var n = t.maxItems,
            i = void 0 === n ? 10 : n;
          this.maxItems = i, this.getRecords() || this.setRecords([])
        },
        setRecords: function (e) {
          return this.setProperty(r.RECORDS, e.slice(0, this.maxItems))
        },
        getRecords: function () {
          return this.getProperty(r.RECORDS)
        },
        setSessionRecord: function (e) {
          return this.setProperty(r.SESSION_RECORD, e)
        },
        getSessionRecord: function () {
          return this.getProperty(r.SESSION_RECORD)
        }
      });
      t.HistoryCache = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractStream = void 0;
      var i = n(275);

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var o = function () {
        function e(t) {
          var n = t.onBufferReady;
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.pendingBuffer = null, this.index = -1, this.finished = !1, this.breaked = !1, this.preloadBufferSize = void 0, this.bufferSize = void 0, this.onBufferReady = n
        }
        var t, n, o;
        return t = e, (n = [{
          key: "add",
          value: function (e) {}
        }, {
          key: "getChunk",
          value: function (e) {}
        }, {
          key: "createBuffer",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.index++, this.pendingBuffer = new i.PackageBuffer(Math.max(e, 0 === this.index ? this.preloadBufferSize : this.bufferSize))
          }
        }, {
          key: "insert",
          value: function (e, t) {
            var n = t ? t.byteLength : 0,
              i = e.byteLength + n;
            this.pendingBuffer || this.createBuffer(i), this.pendingBuffer && (this.pendingBuffer.add(e, t) || (this.ready(), this.createBuffer(i), this.pendingBuffer.add(e, t)))
          }
        }, {
          key: "finish",
          value: function () {
            this.finished = !0, this.ready()
          }
        }, {
          key: "break",
          value: function () {
            this.breaked = !0, this.pendingBuffer = null
          }
        }, {
          key: "ready",
          value: function () {
            this.pendingBuffer ? (this.onBufferReady(this.getChunk(this.pendingBuffer.relax()), this.index), this.pendingBuffer = null) : this.onBufferReady(void 0, this.index)
          }
        }]) && r(t.prototype, n), o && r(t, o), e
      }();
      t.AbstractStream = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechRecognizerView = t.RECOGNIZER_STATES = void 0;
      var i = n(11);
      t.RECOGNIZER_STATES = {
        LISTENING: "listening",
        PREPARING: "preparing",
        INVALID: "invalid"
      };
      var r = i.TouchView.extend({});
      t.SpeechRecognizerView = r
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractHistoryModule = t.HISTORY_APP_EVENTS = void 0;
      var i = n(160),
        r = n(286),
        o = n(230),
        s = n(229),
        a = {
          OPEN_HISTORY: "openHistory"
        };
      t.HISTORY_APP_EVENTS = a;
      var c = i.AppModule.extend({
        recordFields: ["text", "translation", "srcLang", "dstLang"],
        init: function () {
          this.historyCache = this.makeHistoryCache(), this.historyCollection = this.makeHistoryCollection(), this.history = this.makeHistoryComponent(), this.updateHistoryAsync = this.debounceMethod(this.updateHistory, 1e3), this.updateHistorySessionAsync = this.debounceMethod(this.updateHistorySession, 500), this.listenApp(), this.listenAppModel(), this.listenHistoryCollection(), this.listenHistoryComponent(), this.updateHistorySettingState(), this.historyCache.getSessionRecord() && (this.historyCollection.processRecord(this.historyCache.getSessionRecord()), this.historyCache.setSessionRecord(null))
        },
        makeHistoryCache: function () {
          return new o.HistoryCache({}, {
            name: o.STORE_KEY,
            maxItems: this.appConfig.MAX_HISTORY_SHOW
          })
        },
        makeHistoryCollection: function () {
          return new r.HistoryCollection({
            maxTextLength: this.appConfig.MAX_FAV_TEXT_LENGTH,
            maxRecords: this.appConfig.MAX_HISTORY_RECORDS
          })
        },
        makeHistoryComponent: function () {},
        getRecord: function () {
          var e = this,
            t = {};
          return this.recordFields.forEach((function (n) {
            t[n] = e.appModel.getProperty(n)
          })), t
        },
        isHistorySettingEnabled: function () {},
        updateHistorySettingState: function () {
          var e = this.isHistorySettingEnabled();
          this.appModel.setProperty({
            historyEnabled: e
          }), this.history.setSettingState(e), this.historyEnabled = e
        },
        updateHistory: function () {
          this.historyEnabled && this.historyCollection.processRecord(this.getRecord())
        },
        updateHistorySession: function () {
          if (this.historyEnabled) {
            var e = this.getRecord();
            this.historyCache.setSessionRecord(this.historyCollection.isRecordValid(e) ? e : null)
          }
        },
        listenAppModel: function () {
          var e = this;
          this.appModel.onChange(this.recordFields, (function () {
            e.updateHistorySessionAsync()
          })).onChange("translation", (function (t) {
            e.history.setVisible(!t)
          }))
        },
        listenApp: function () {
          var e = this;
          this.app.on("databaseError", (function () {
            e.historyCollection.setProperty("updating", !1)
          }))
        },
        listenHistoryCollection: function () {
          var e = this;
          this.historyCollection.onChange("records", (function (t) {
            e.historyCache.setRecords(t)
          }))
        },
        listenHistoryComponent: function () {
          var e = this;
          this.history.on(s.HISTORY_EVENTS.OPEN_HISTORY, (function () {
            e.historyCollection.isReady() ? e.app.emit(a.OPEN_HISTORY) : e.historyCollection.onceReady((function () {
              e.app.emit(a.OPEN_HISTORY)
            }))
          })).on(s.HISTORY_EVENTS.APPLY_ITEM, (function (t) {
            var n = t.text,
              i = t.srcLang,
              r = t.dstLang;
            e.appModel.setProperty({
              text: n,
              srcLang: i,
              dstLang: r
            }, {
              sender: "translationHistory"
            })
          }))
        }
      });
      t.AbstractHistoryModule = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getCollectionsEmitter = function () {
        return i
      }, t.COLLECTION_EVENTS = void 0;
      var i = new(n(30).Emitter);
      t.COLLECTION_EVENTS = {
        SYNCED: "synced",
        DB_READY: "dbReady",
        INIT: "init",
        COLLECTIONS_SET: "collectionsSet"
      }
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ToastPresenter = void 0;
      var i = n(32).Presenter.extend({
        init: function () {
          var e = this.getView(),
            t = this.getModel();
          e.on("tap", (function () {
            t.resetTimer(), this.setVisible(!1)
          })), t.on("timedout", (function () {
            e.setVisible(!1)
          })).on("set:text", (function (t, n) {
            if (!t) return this.resetTimer(), e.setVisible(!1);
            this.resetTimer(), e.setContent(t, {
              asText: !0
            }).setVisible(!0), this.setTimeout(n.delay)
          }))
        },
        showToast: function (e, t) {
          return this.getModel().setProperty("text", e, {
            delay: t
          }), this
        }
      });
      t.ToastPresenter = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ToastModel = void 0, n(14), n(79);
      var i = n(20).Model.extend({
        resetTimer: function () {
          return clearTimeout(this.getProperty("timer")), this
        },
        _onTimeout: function () {
          return this.emit("timedout")
        },
        setTimeout: function (e) {
          function t(t) {
            return e.apply(this, arguments)
          }
          return t.toString = function () {
            return e.toString()
          }, t
        }((function (e) {
          return this.setProperty("timer", setTimeout(this._onTimeout.bind(this), e || this.getProperty("delay")))
        })),
        getDefaults: function () {
          return {
            text: "",
            timer: 0,
            delay: 2e3
          }
        }
      });
      t.ToastModel = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getAvailablePlayers = function (e, t) {
        var n = e.FORCE_UNIPROXY,
          s = e.REPLACE_SPEECHKIT,
          a = e.ENABLE_UNIPROXY || n || s,
          c = !n && !s,
          u = [];
        !n && i.TTSNativePlayer.isAvailable() && u.push(new i.TTSNativePlayer({
          rate: e.TTS_RATE,
          maxTextLength: e.MAX_NATIVE_TTS_LENGTH
        }));
        a && o.TTSUniproxyPlayer.isAvailable() && u.push(new o.TTSUniproxyPlayer({
          uniproxy: t,
          maxTextLength: e.MAX_UNIPROXY_TTS_LENGTH
        }));
        r.TTSOnlinePlayer.backendSupportedFormats.find((function (t) {
          var n = t.format,
            i = t.quality;
          return !(!c || !r.TTSOnlinePlayer.isAvailable(n)) && (u.push(new r.TTSOnlinePlayer({
            speakerUrl: e.TTS_URL,
            speakerLangs: e.TTS_LANGS,
            maxTextLength: e.MAX_TTS_LENGTH,
            params: {
              format: n,
              quality: i,
              chunked: 0,
              platform: "web",
              "mock-ranges": 1,
              application: "translate"
            }
          })), !0)
        })), !1;
        return u
      }, t.isScreenNarrow = function (e) {
        return window.innerWidth < e.NARROW_SCREEN_WIDTH
      }, n(122), n(18);
      var i = n(271),
        r = n(272),
        o = n(273)
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TooltipView = void 0;
      var i = n(11),
        r = i.TouchView.extend({
          init: function () {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = this;
            return t.targetView instanceof i.TouchView && t.targetView.on(i.TouchView.eventTypes.OUT, (function () {
              e && clearTimeout(e), n.setVisible(!1)
            })).on(i.TouchView.eventTypes.OVER, (function (t) {
              var i = this.getClosest(t.target, (function (e) {
                return e.hasAttribute("data-tooltip")
              }));
              i && (e = setTimeout((function () {
                n.setTooltip(i.getAttribute("data-tooltip"), {
                  rect: i.getBoundingClientRect(),
                  position: i.getAttribute("data-tooltip-position")
                })
              }), 400))
            })).on(i.TouchView.eventTypes.START, (function (t) {
              this.getClosest(t.target, (function (e) {
                return e.hasAttribute("data-tooltip-nohide")
              })) || (e && clearTimeout(e), n.setVisible(!1))
            })).bindDOMEvents([i.TouchView.eventTypes.OUT, i.TouchView.eventTypes.OVER]), this.on("contentChanged", this.updatePosition), this
          },
          setTooltip: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return e ? (this.setVisible(!0).setContent(e, {
              asText: !0
            }), t.rect && this.setPosition(t.rect, t.position), this) : this.setVisible(!1)
          },
          setPosition: function (e, t) {
            return this._rect = e, this._position = t, this.updatePosition()
          },
          updatePosition: function () {
            var e, t, n = this._rect,
              i = this._position || "bottom";
            if (!n) return this;
            var r = this.getElement(),
              o = this.getRect();
            switch (i) {
              case "top":
              case "bottom":
                e = "top" === i ? n.top - o.height : n.bottom, t = n.left - (o.width - n.width) / 2;
                break;
              case "left":
              case "right":
                e = n.top - (o.height - n.height) / 2, t = "left" === i ? n.left - o.width : n.right
            }
            return r.style.top = e + "px", r.style.left = t + "px", r.setAttribute("data-position", i), this
          }
        });
      t.TooltipView = r
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTabsToggle = void 0;
      var i = n(11),
        r = n(62);
      t.initTabsToggle = function (e) {
        var t = new i.TouchView({
            element: e.ELEMENTS.tabsToggle,
            activateFocus: !0
          }),
          n = new r.ListboxView({
            element: e.ELEMENTS.tabsMenu,
            template: e.TEMPLATES.empty,
            stopDefaultAction: !0
          });
        return t.on("tap", (function () {
          n.setPosition(t.getRect(), !0).setVisible(), t.setFocus(!0)
        })).on("stateChanged:focused", (function (e) {
          e || n.setVisible(!1)
        })), n.on("stateChanged:hidden", (function (e) {
          t.setState("expanded", !e)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      n(244)("link", (function (e) {
        return function (t) {
          return e(this, "a", "href", t)
        }
      }))
    },
    function (e, t, n) {
      var i = n(1),
        r = n(5),
        o = n(33),
        s = /"/g,
        a = function (e, t, n, i) {
          var r = String(o(e)),
            a = "<" + t;
          return "" !== n && (a += " " + n + '="' + String(i).replace(s, "&quot;") + '"'), a + ">" + r + "</" + t + ">"
        };
      e.exports = function (e, t) {
        var n = {};
        n[e] = t(a), i(i.P + i.F * r((function () {
          var t = "" [e]('"');
          return t !== t.toLowerCase() || t.split('"').length > 3
        })), "String", n)
      }
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechKitRecognizer = void 0, n(14), n(79);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(207),
        s = n(178);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach((function (t) {
            u(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var l = s.SpeechRecognizerBase.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = window.ya.speechkit;
          this._timer = 0, this._timeout = e.speechKitTimeout || 0, this._resultIndex = 0, this._supportedLangs = t.isWebAudioSupported() ? o.SpeechRecognizerNative.langs : l.langs, this._recognitionOptions = {
            apikey: e.speechKitApikey,
            format: t.FORMAT.OPUS || t.FORMAT.PCM16,
            punctuation: !1,
            partialResults: !0,
            utteranceSilence: 350
          }, this._recognition = new t.SpeechRecognition
        },
        setTimeout: function (e) {
          function t() {
            return e.apply(this, arguments)
          }
          return t.toString = function () {
            return e.toString()
          }, t
        }((function () {
          return this._timeout && (clearTimeout(this._timer), this._timer = setTimeout(this.stopListening.bind(this), this._timeout)), this
        })),
        startListening: function (e) {
          return this._recognition.start(c(c({}, this._recognitionOptions), {}, {
            lang: e,
            initCallback: this._onStart.bind(this),
            stopCallback: this._onAbort.bind(this),
            dataCallback: this._onResult.bind(this),
            errorCallback: this._onAbort.bind(this)
          })), this
        },
        stopListening: function () {
          return this._recognition.abort(), this
        },
        convertLanguage: function (e, t) {
          t(this._supportedLangs[e] || "")
        },
        prepareData: function (e, t) {
          return {
            value: r.default.trim(e.text),
            final: e.final,
            index: t,
            resultIndex: e.resultIndex
          }
        },
        getVisualizer: function () {
          return this._recognition.recorder.getAnalyserNode()
        },
        getPriority: function (e) {
          return r.default.isOnline() ? !window.config.ENABLE_SPEECHKIT_PRIORITY || "ru" !== e && e !== this._supportedLangs.ru ? s.RECOGNITION_PRIORITIES.NORMAL : s.RECOGNITION_PRIORITIES.HIGH : s.RECOGNITION_PRIORITIES.LOW
        },
        _playSound: function (e) {
          var t = new Audio;
          try {
            t.src = e, t.play()
          } catch (e) {}
        },
        _onAbort: function (e) {
          return clearTimeout(this._timer), this.emit(s.RECOGNITION_EVENTS.END, e)
        },
        _onStart: function (e, t, n) {
          return this._resultIndex = 0, this.setTimeout(), this.emit(s.RECOGNITION_EVENTS.START, n)
        },
        _onResult: function (e, t) {
          var n = {
            text: e,
            final: t,
            resultIndex: this._resultIndex
          };
          return e && this.setTimeout(), t && (this._resultIndex += 1), this.emit(s.RECOGNITION_EVENTS.RECOGNIZE, n)
        }
      }, {
        langs: {
          en: "en-GB",
          ru: "ru-RU",
          tr: "tr-TR",
          uk: "uk-UA"
        },
        isAvailable: function () {
          return window.ya && window.ya.speechkit && (window.ya.speechkit.isSupported() || window.ya.speechkit.isWebAudioSupported()) && (!r.default.iOS || r.default.iOS >= 13)
        }
      });
      t.SpeechKitRecognizer = l
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechRecognizerUniproxy = t.SUPPORTED_LANGS = void 0, n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(61),
        s = n(202),
        a = n(262),
        c = n(178);
      var u = "Recognize",
        l = "Result",
        d = "InternalError",
        f = {
          en: "en-GB",
          ru: "ru-RU",
          tr: "tr-TR",
          uk: "uk-UA"
        };
      t.SUPPORTED_LANGS = f;
      var p = {
          "en-GB": "freeform",
          "ru-RU": "dialogeneral",
          "tr-TR": "freeform",
          "uk-UA": "freeform"
        },
        h = c.SpeechRecognizerBase.extend({
          init: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._streamId = null, this._recorder = null, this._currentMessageId = "", this._uniproxy = e.uniproxy, this._timeout = e.timeout || 7e3
          },
          _setTimeout: function () {
            return this._timeout && (clearTimeout(this._timer), this._timer = setTimeout(this.stopListening.bind(this), this._timeout)), this
          },
          _clearTimeout: function () {
            this._timeout && clearTimeout(this._timer)
          },
          startListening: function (e) {
            var t = this;
            if (!this._streamId) return this._recorder || (this._recorder = new a.AudioRecorder(this._handleMicrophoneData.bind(this))), this._recorder.start(300, (function () {
              t._uniproxy.on("*", t._handleUniproxyEvent, t), t._uniproxy.on(s.EVENTS.ERROR, t._handleError, t), t._streamId = t._uniproxy.startStream(), t._uniproxy.ensureConnection((function () {
                if (t._currentMessageId = t._uniproxy.sendRequest("ASR", u, {
                  lang: e,
                  streamId: t._streamId,
                  format: a.AUDIO_FORMAT,
                  timeoutInMilliseconds: t._timeout,
                  punctuation: !1,
                  topic: p[e]
                }), !t._currentMessageId) return t._throwNetworkError();
                t._onStart()
              }))
            })), this
          },
          stopListening: function () {
            if (this._streamId && this._currentMessageId) {
              var e = s.STREAM_CONTROL_REASONS.NO_ERROR;
              return this._uniproxy.closeStream(this._streamId, this._currentMessageId, e), this._clean(), this._onAbort(), this
            }
          },
          _clean: function () {
            this._recorder.stop(), this._streamId = 0, this._currentMessageId = "", this._uniproxy.off("*", this._handleUniproxyEvent, this), this._uniproxy.off(s.EVENTS.ERROR, this._handleError, this), this._clearTimeout()
          },
          _handleMicrophoneData: function (e) {
            this._streamId && e.size && (this._uniproxy.sendStreamData(this._streamId, e, a.AUDIO_FORMAT) || this._throwNetworkError())
          },
          _handleUniproxyEvent: function (e, t) {
            switch (e) {
              case s.EVENTS.MESSAGE:
                this._handleMessage(t.data);
                break;
              case s.EVENTS.STREAM_CONTROL:
                this._handleTransportStreamControl(t.data);
                break;
              case s.EVENTS.CLOSE:
                this._throwNetworkError()
            }
          },
          _handleTransportStreamControl: function (e) {
            e._streamId === this._streamId && e.action === s.STREAM_CONTROL_ACTIONS.CLOSE && (this._clean(), this.emit(c.RECOGNITION_EVENTS.END))
          },
          _handleMessage: function (e) {
            if (e) {
              var t = e.header;
              if ("ASR" === t.namespace) switch (t.name) {
                case l:
                  this._handleASRResult(e)
              }
            }
          },
          _handleASRResult: function (e) {
            var t = e.header,
              n = e.payload;
            n.responseCode !== d ? this._currentMessageId && n.recognition.length && this._onResult(n.recognition[0].normalized, n.endOfUtt || n.earlyEndOfUtt) : this._handleError({
              data: {
                header: t,
                payload: n
              },
              error: c.RECOGNITION_ERRORS.NETWORK
            })
          },
          _handleError: function (e) {
            if (e && e.data && e.data.header) {
              var t = e.data,
                n = t.header,
                i = t.payload;
              if (n && n.refMessageId === this._currentMessageId) {
                this._throwNetworkError();
                var r = i && i.error && i.message;
                (0, o.getGlobalEmitter)().emit("uniproxyAsrError", e.error, r)
              }
            }
          },
          _throwNetworkError: function () {
            this._clean(), this.emit(c.RECOGNITION_EVENTS.END, c.RECOGNITION_ERRORS.NETWORK)
          },
          _playSound: function (e) {
            var t = new Audio;
            try {
              t.src = e, t.play()
            } catch (e) {}
          },
          _onAbort: function (e) {
            return this._clearTimeout(), this.emit(c.RECOGNITION_EVENTS.END, e)
          },
          _onStart: function () {
            return this._resultIndex = 0, this._setTimeout(), this.emit(c.RECOGNITION_EVENTS.START, "uniproxy")
          },
          _onResult: function (e, t) {
            var n = {
              text: e,
              final: t,
              resultIndex: this._resultIndex
            };
            return e && this._setTimeout(), t && (this._resultIndex += 1), this.emit(c.RECOGNITION_EVENTS.RECOGNIZE, n)
          },
          convertLanguage: function (e, t) {
            t(f[e] || "")
          },
          prepareData: function (e, t) {
            var n = e.text,
              i = e.final,
              o = e.resultIndex;
            return {
              value: r.default.trim(n),
              final: i,
              index: t,
              resultIndex: o
            }
          },
          getVisualizer: function () {
            return null
          },
          getPriority: function (e) {
            return r.default.isOnline() ? window.config.ENABLE_UNIPROXY_ASR_PRIORITY && e === f.ru ? c.RECOGNITION_PRIORITIES.HIGH : e === f.ru ? c.RECOGNITION_PRIORITIES.NORMAL : c.RECOGNITION_PRIORITIES.LOW : c.RECOGNITION_PRIORITIES.LOW
          }
        }, {
          isAvailable: function () {
            var e = window.config.FORCE_UNIPROXY,
              t = window.config.REPLACE_SPEECHKIT,
              n = window.config.ENABLE_UNIPROXY;
            return !r.default.iOS && a.MEDIA_RECORDER_SUPPORTED && (e || t || n)
          }
        });
      t.SpeechRecognizerUniproxy = h
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ListboxMultiplePresenter = void 0, n(35);
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(93).ListboxPresenter.extend({
        getValue: function () {
          var e = this.getModel().getProperty("value");
          return e ? JSON.parse(e) : []
        },
        setValue: function (e, t) {
          var n, i;
          return r.default.isArray(e) ? n = e : (i = (n = this.getValue()).indexOf(e)) < 0 ? n.push(e) : n.splice(i, 1), this.getModel().setProperty("value", JSON.stringify(n), t), this
        },
        getSelectedItems: function () {
          var e = this.getValue(),
            t = this.getItems() || [];
          return t = t.filter((function (t) {
            return -1 !== e.indexOf(t.id)
          }))
        }
      });
      t.ListboxMultiplePresenter = o
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DictionaryPresenter2 = t.MAX_EXAMPLES_AMOUNT = t.EXAMPLES_FILTER_DELIMITER = t.EXAMPLES_FILTER_ALL = void 0, n(35), n(18), n(98), n(66), n(22);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(177);
      var s = window.config || {},
        a = "allTr";
      t.EXAMPLES_FILTER_ALL = a;
      t.EXAMPLES_FILTER_DELIMITER = ":";
      t.MAX_EXAMPLES_AMOUNT = 10;
      var c = o.DictionaryPresenter.extend({
        init: function () {
          var e = this;
          this.getModel().on("change:voteResults", (function (t, n) {
            e._renderData(this.getProperty("data"), n)
          })).on("change:speakersSupport", (function (t, n) {
            e._renderData(this.getProperty("data"), n)
          })).on("change:expandedLists", (function (t, n) {
            e._renderData(this.getProperty("data"), n)
          }))
        },
        updateView: function () {
          var e = this.getModel();
          this._renderData(e.getProperty("data"))
        },
        setTranslation: function (e, t) {
          return this.getModel().setProperty("translation", e, t), this
        },
        getDict: function () {
          return this.getModel().getProperty("dict")
        },
        setVoteResult: function (e, t) {
          this.getModel().setVoteResult(e, t)
        },
        setVoteResults: function (e) {
          return this.getModel().setVoteResults(e), this
        },
        getVoteResults: function () {
          return this.getModel().getVoteResults()
        },
        setSpeakerSupport: function (e, t, n) {
          this.getModel().setSpeakerSupport(e, t, n)
        },
        setSpeakersSupport: function (e) {
          return this.getModel().setSpeakersSupport(e), this
        },
        getSpeakersSupport: function () {
          return this.getModel().getSpeakersSupport()
        },
        setExpandedList: function (e, t) {
          this.getModel().setExpandedList(e, t)
        },
        getExpandedLists: function () {
          return this.getModel().getExpandedLists()
        },
        setDict: function (e, t) {
          return this.getModel().setProperty("dict", e, t), this
        },
        setMaxLength: function (e, t) {
          return this.getModel().setProperty("maxLength", e, t), this
        },
        setData: function (e, t) {
          return this.getModel().setProperty("data", e, t), this
        },
        setCustomExamplesFlag: function (e, t) {
          var n = this.getModel();
          return n.setProperty({
            customExamplesText: e ? n.getProperty("text") : "",
            customExamples: e
          }, t), this
        },
        customExamplesEnabled: function () {
          return Boolean(this.getModel().getProperty("customExamples"))
        },
        getText: function () {
          return this.getModel().getProperty("text")
        },
        getSelectedText: function () {
          return this.getModel().getProperty("selText")
        },
        setSelectedText: function (e, t) {
          return this.getModel().setProperty("selText", e, t), this
        },
        getSrcLanguage: function () {
          return this.getModel().getProperty("srcLang")
        },
        getDstLanguage: function () {
          return this.getModel().getProperty("dstLang")
        },
        _handleSetData: function (e, t) {
          this.emit("dataSet", e, t)
        },
        _handleChangeLang: function () {
          this.emit("langChanged")
        }
      }, {
        prepareExampleData: function (e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
            r = arguments.length > 4 ? arguments[4] : void 0,
            o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
            s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [],
            a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [];
          return this.prepareItems(e).filter((function (e) {
            return c.filterItem(e, r)
          })).map((function (e, u) {
            return c.processItem(e, u, t, n, i, r, o, s, a)
          })).filter((function (e) {
            return e.examples.length
          }))
        },
        prepareItems: function (e) {
          return e
        },
        filterItem: function (e, t) {
          var n = e.translation,
            i = n.text || n;
          if (t && t.includes(":")) {
            var r = n.pos && n.pos.code;
            return t === [a, null].join(":") || t === [i, r].join(":") || t === [e.text, null].join(":")
          }
          if (!t || t === a || i === t) return e
        },
        processItem: function (e, t, n, i, o, a, u, l, d) {
          var f, p = a === (f = e.translation.other ? s.TABS.other : e.translation.idiom ? s.TABS.idioms : e.translation.text || e.translation),
            h = o[t],
            g = e.examples.filter((function (e) {
              var t = e.id;
              return !r.default.isArray(d) || !d.includes(t)
            })).map((function (e) {
              return c.processExample(e, n, i, u, l, f)
            }));
          return c.prepareExampleGroup(e, t, g, p, h, f)
        },
        processExample: function (e, t, n, i, o, s) {
          var a = e.src.split(/[<>]/),
            u = e.dst.split(/[<>]/),
            l = c.prepareOneExample(e, a, u, t, n, s);
          if (r.default.hasProperty(i, l.id) && (l.voteResult = {
            isGood: i[l.id],
            isBad: !i[l.id]
          }), r.default.hasProperty(o, l.id)) {
            var d = o[l.id];
            l.speakerSrc = d.srcValid, l.speakerDst = d.dstValid
          }
          return l
        },
        prepareOneExample: function (e, t, n, i, r, o) {
          return {
            id: e.id,
            exampleVal: t.map((function (e, t) {
              return {
                text: e,
                highlighted: t % 2 != 0
              }
            })),
            originalVal: t.join(""),
            srcLang: i,
            exampleTrs: n.map((function (e, t) {
              return {
                text: e,
                highlighted: t % 2 != 0
              }
            })),
            originalTrs: n.join(""),
            translation: o,
            dstLang: r,
            ref: "idiom" === e.ref.type ? e.ref.type : e.ref.title,
            author: e.ref.author,
            message: c.getTooltipMessage(e.ref),
            refType: e.ref.type
          }
        },
        prepareExampleGroup: function (e, t, n, i, o, a) {
          var c = n.length - s.MIN_EXAMPLE_COUNT,
            u = e.translation,
            l = u.pos ? u.pos : null,
            d = u.other;
          return {
            pos: !d && l && l.text,
            text: e.text,
            index: t,
            showAll: n.length === s.MAX_EXAMPLE_COUNT,
            posCode: !d && l && l.code,
            tooltip: !d && l && l.tooltip,
            examples: n,
            expanded: i || o,
            filtered: i,
            moreCount: n.length > s.MIN_EXAMPLE_COUNT ? n.length - s.MIN_EXAMPLE_COUNT : "",
            translation: a,
            moreMessage: c > 0 ? r.default.parseString(s.MORE_MESSAGE, c) : ""
          }
        },
        getTooltipMessage: function (e) {
          switch (e.type) {
            case "book":
              return r.default.parseString(s.REFERENCE_TOOLTIP_MESSAGES.book, e.author, e.title, e.translator);
            case "movie":
            case "series":
              return r.default.parseString(s.REFERENCE_TOOLTIP_MESSAGES[e.type], e.title, e.director);
            case "idiom":
              return s.REFERENCE_TOOLTIP_MESSAGES.idiom
          }
        }
      });
      t.DictionaryPresenter2 = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SharePresenter = void 0;
      var i = n(93).ListboxPresenter.extend({
        init: function () {
          this.on("itemSelected", (function () {
            this.share()
          }))
        },
        share: function () {
          var e = this.getModel();
          return e.share(), this.emit("share", e.getParams())
        },
        write: function () {
          var e = this.getModel();
          return e.write(), this.emit("write", e.getMailParams())
        },
        setLink: function (e) {
          return this.getModel().setProperty("link", e), this
        },
        setTitle: function (e) {
          return this.getModel().setProperty("title", e), this
        },
        setDescription: function (e) {
          return this.getModel().setProperty("description", e), this
        }
      });
      t.SharePresenter = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ShareModel = void 0, n(34), n(243);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(81);
      var s = {
          TELEGRAM: "telegram",
          WHATSAPP: "whatsapp",
          ODNOKLASSNIKI: "odnoklassniki"
        },
        a = o.ListboxModel.extend({
          share: function () {
            var e, t = this.getParams(),
              n = encodeURIComponent(t.url).replace(/%2520/g, "%2B");
            e = t.service === s.TELEGRAM ? "https://telegram.me/share/url?text=".concat(t.title, "&url=").concat(n) : t.service === s.WHATSAPP ? "whatsapp://send?text=".concat(n) : t.service === s.ODNOKASSNIKII ? "https://connect.ok.ru/offer?url=".concat(n, "&title=").concat(t.title) : this.getProperty("url") + "?" + r.default.toQueryString(t), window.open(e)
          },
          write: function () {
            window.location.href = "mailto:?" + r.default.toQueryString(this.getMailParams())
          },
          getParams: function () {
            var e = this.toJSON();
            return {
              url: e.link,
              title: e.title,
              service: e.value,
              description: e.description
            }
          },
          getDefaults: function () {
            return {
              url: "",
              link: "",
              title: "",
              value: "",
              items: "",
              description: ""
            }
          },
          getMailParams: function () {
            var e = this.toJSON();
            return {
              subject: e.title,
              body: e.description
            }
          }
        });
      t.ShareModel = a
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AudioRecorder = t.AUDIO_FORMAT = t.SAMPLE_RATE = t.MEDIA_RECORDER_SUPPORTED = t.MEDIA_RECORDER_STATES = void 0;
      var i = n(263),
        r = n(219);

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var s = {
        INACTIVE: "inactive",
        RECORDING: "recording",
        PAUSED: "paused"
      };
      t.MEDIA_RECORDER_STATES = s;
      var a = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (window.MediaRecorder || window.AudioContext || window.webkitAudioContext));
      t.MEDIA_RECORDER_SUPPORTED = a;
      var c = !window.MediaRecorder;
      t.SAMPLE_RATE = 16e3;
      var u = function () {
        if (c) return "".concat(r.AUDIO_FORMATS.WAV_PCM, ";rate=").concat(16e3);
        var e = window.MediaRecorder.isTypeSupported || window.MediaRecorder.isMimeTypeSupported || window.MediaRecorder.canRecordMimeType || function () {
          return !1
        };
        if (e(r.AUDIO_FORMATS.OGG)) return r.AUDIO_FORMATS.OGG;
        if (e(r.AUDIO_FORMATS.WEBM)) return r.AUDIO_FORMATS.WEBM;
        return r.AUDIO_FORMATS.WAV_PCM
      }();
      t.AUDIO_FORMAT = u;
      var l = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.dataHandler = t
        }
        var t, n, i;
        return t = e, (n = [{
          key: "start",
          value: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
              n = arguments.length > 1 ? arguments[1] : void 0;
            navigator.mediaDevices.getUserMedia({
              audio: !0
            }).then((function (i) {
              e.mediaRecorder = d(i), e.mediaRecorder.state === s.INACTIVE && (e.mediaRecorder.addEventListener("dataavailable", e.handleDataAvailable.bind(e)), e.mediaRecorder.addEventListener("error", e.handleError.bind(e)), e.mediaRecorder.start(t)), e.stream = i, n()
            })).catch((function (t) {
              e.handleError()
            }))
          }
        }, {
          key: "stop",
          value: function () {
            this.stream && this.stream.getTracks && this.stream.getTracks().forEach((function (e) {
              e.stop()
            })), this.mediaRecorder && (this.mediaRecorder.removeEventListener("dataavailable", this.handleDataAvailable.bind(this)), this.mediaRecorder.removeEventListener("error", this.handleError.bind(this)), this.mediaRecorder.state !== s.INACTIVE && this.mediaRecorder.stop(), this.mediaRecorder = null, this.stream = null)
          }
        }, {
          key: "handleDataAvailable",
          value: function (e) {
            this.dataHandler(e.data)
          }
        }, {
          key: "handleError",
          value: function () {
            this.stop()
          }
        }]) && o(t.prototype, n), i && o(t, i), e
      }();

      function d(e) {
        var t = {
          mimeType: u,
          audioBitsPerSecond: 16e3
        };
        return c ? new i.MediaRecorder(e, t) : new window.MediaRecorder(e, t)
      }
      t.AudioRecorder = l
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MediaRecorder = t.RECORDER_STATES = void 0;
      var i = n(264);

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var o, s = window.AudioContext || window.webkitAudioContext,
        a = {
          INACTIVE: "inactive",
          RECORDING: "recording",
          PAUSED: "paused"
        };
      t.RECORDER_STATES = a;
      var c = null,
        u = function () {
          function e(t, n) {
            ! function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.state = a.INACTIVE, this.mimeType = "audio/x-pcm;bit=16", this.outSampleRate = 16e3, this.em = document.createDocumentFragment(), this.stream = t, this.mimeType = n && n.mimeType || this.mimeType, this.outSampleRate = n && n.audioBitsPerSecond || this.outSampleRate, this.encoder = c || (c = new i.PcmEncoder), this.encoder.onDataReadyCallback = this._onEncoderResult.bind(this)
          }
          var t, n, u;
          return t = e, u = [{
            key: "isTypeSupported",
            value: function (e) {
              return /audio\/x-pcm?/.test(e) || /audio\/x-raw?/.test(e) || /audio\/wave?/.test(e)
            }
          }], (n = [{
            key: "start",
            value: function (e) {
              this.state === a.INACTIVE && (this.state = a.RECORDING, o || (o = new s), this._initEncoder(), this.input = o.createMediaStreamSource(this.stream), this.processor = o.createScriptProcessor(2048, 2, 2), this.input.connect(this.processor), this.processor.connect(o.destination), this.processor.onaudioprocess = this._onAudioProcess.bind(this), this.dispatchEvent(new Event("start")), e && (this.slicing = window.setInterval(this._onTimeSliceInterval.bind(this), e)))
            }
          }, {
            key: "_initEncoder",
            value: function () {
              this.encoder.init && this.encoder.init({
                sampleRate: o.sampleRate,
                outSampleRate: this.outSampleRate
              })
            }
          }, {
            key: "_requestData",
            value: function () {
              this.state !== a.INACTIVE && this.encoder.requestData()
            }
          }, {
            key: "_onEncoderResult",
            value: function (e) {
              var t = new Blob([e], {
                  type: this.mimeType
                }),
                n = new MessageEvent("dataavailable", {
                  data: t
                });
              this.dispatchEvent(n), this.state === a.INACTIVE && this.dispatchEvent(new Event("stop"))
            }
          }, {
            key: "_onAudioProcess",
            value: function (e) {
              this.state === a.RECORDING && this.encoder.handleAudioInput(e.inputBuffer)
            }
          }, {
            key: "_onTimeSliceInterval",
            value: function () {
              this.state === a.RECORDING && this._requestData()
            }
          }, {
            key: "stop",
            value: function () {
              this.state !== a.INACTIVE && (this._requestData(), this.state = a.INACTIVE, clearInterval(this.slicing), this.stream.getAudioTracks().forEach((function (e) {
                e.stop()
              })), this.input.disconnect(this.processor), this.processor.disconnect(o.destination), this.processor.onaudioprocess = null, delete this.processor, delete this.input)
            }
          }, {
            key: "pause",
            value: function () {
              this.state === a.RECORDING && (this.state = a.PAUSED, this.dispatchEvent(new Event("pause")))
            }
          }, {
            key: "resume",
            value: function () {
              this.state === a.PAUSED && (this.state = a.RECORDING, this.dispatchEvent(new Event("resume")))
            }
          }, {
            key: "addEventListener",
            value: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              this.em.addEventListener.apply(this.em, t)
            }
          }, {
            key: "removeEventListener",
            value: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              this.em.removeEventListener.apply(this.em, t)
            }
          }, {
            key: "dispatchEvent",
            value: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return this.em.dispatchEvent.apply(this.em, t)
            }
          }]) && r(t.prototype, n), u && r(t, u), e
        }();
      t.MediaRecorder = u
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PcmEncoder = void 0, n(34), n(14), n(79);
      var i, r = (i = n(265)) && i.__esModule ? i : {
        default: i
      };

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var s = function () {
        function e() {
          var t, n, i;
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.worker = (t = r.default, n = t.toString().replace(/^function\s*\(\)\s*{/, "").replace(/}$/, ""), i = new Blob([n]), new Worker(URL.createObjectURL(i))), this.worker.addEventListener("message", this.handleResultFromWorker.bind(this))
        }
        var t, n, i;
        return t = e, (n = [{
          key: "init",
          value: function (e) {
            this.worker.postMessage(["init", {
              sampleRate: e.sampleRate,
              format: {
                sampleRate: e.outSampleRate,
                bufferSize: 2048
              },
              channels: 1
            }])
          }
        }, {
          key: "handleAudioInput",
          value: function (e) {
            this.worker.postMessage(["encode", e.getChannelData(0)])
          }
        }, {
          key: "requestData",
          value: function () {
            this.worker.postMessage(["dump"])
          }
        }, {
          key: "handleResultFromWorker",
          value: function (e) {
            this.onDataReadyCallback(e.data)
          }
        }]) && o(t.prototype, n), i && o(t, i), e
      }();
      t.PcmEncoder = s
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = "function() {\n    var recLength = 0;\n    var recBuffers = [];\n    var sampleRate;\n    var outSampleRate;\n    var needBufferSize = 4096;\n    var channels = 1;\n\n    function init(config) {\n        sampleRate = config.sampleRate;\n        outSampleRate = config.format.sampleRate || sampleRate;\n        needBufferSize = config.format.bufferSize || needBufferSize;\n    }\n\n    var resample = (inbuf) => {\n        var speed = Number(sampleRate) / outSampleRate;\n        var l = Math.ceil(inbuf.length / speed);\n        var result = new Float32Array(l);\n        var indexIn = 0;\n        var indexOut = 0;\n        for (indexOut = 1, indexIn = speed; indexOut < l - 1; indexIn += speed, indexOut++) {\n            var pos = Math.floor(indexIn);\n            var dt = indexIn - pos;\n            var second = (pos + 1 < inbuf.length) ? pos + 1 : inbuf.length - 1;\n            result[indexOut] = inbuf[pos] * (1 - dt) + inbuf[second] * dt;\n        }\n        result[0] = inbuf[0];\n        result[l - 1] = inbuf[inbuf.length - 1];\n        return result;\n    };\n\n    function record(inputBuffer) {\n        if (outSampleRate === sampleRate) {\n            recBuffers.push(inputBuffer);\n            recLength += inputBuffer.length;\n        } else {\n            var resin = resample(inputBuffer);\n            recBuffers.push(resin);\n            recLength += resin.length;\n        }\n    }\n\n    function exportWAV() {\n        var buffer = mergeBuffers(recBuffers, recLength);\n        var dataView = encodeWAV(buffer);\n        return dataView.buffer;\n    }\n\n    function clear() {\n        recLength = 0;\n        recBuffers = [];\n    }\n\n    function mergeBuffers(recBuffersArg, recLengthArg) {\n        var result = new Float32Array(recLengthArg);\n        var offset = 0;\n        for (var i = 0; i < recBuffersArg.length; i++) {\n            result.set(recBuffersArg[i], offset);\n            offset += recBuffersArg[i].length;\n        }\n        return result;\n    }\n\n    function floatTo16BitPCM(output, offset, input) {\n        for (var i = 0; i < input.length; i++, offset += 2) {\n            var s = Math.max(-1, Math.min(1, input[i]));\n            output.setInt16(offset, s < 0 ? s * 32768 : s * 32767, true);\n        }\n    }\n\n    function writeString(view, offset, string) {\n        for (var i = 0; i < string.length; i++) {\n            view.setUint8(offset + i, string.charCodeAt(i));\n        }\n    }\n\n    function encodeWAV(samples) {\n        var buffer = new ArrayBuffer(44 + samples.length * 2);\n        var view = new DataView(buffer);\n        \n        writeString(view, 0, 'RIFF');\n        \n        view.setUint32(4, 32 + samples.length * 2, true);\n        \n        writeString(view, 8, 'WAVE');\n        \n        writeString(view, 12, 'fmt ');\n        \n        view.setUint32(16, 16, true);\n        \n        view.setUint16(20, 1, true);\n        \n        view.setUint16(22, channels, true);\n        \n        view.setUint32(24, outSampleRate, true);\n        \n        var blockAlign = channels * 2;\n        \n        view.setUint32(28, outSampleRate * blockAlign, true);\n        \n        view.setUint16(32, blockAlign, true);\n        \n        view.setUint16(34, 16, true);\n        \n        writeString(view, 36, 'data');\n        \n        view.setUint32(40, samples.length * 2, true);\n        floatTo16BitPCM(view, 44, samples);\n        return view;\n    }\n\n    function dump() {\n        var result = exportWAV();\n        postMessage(result, [result]);\n        clear();\n    }\n\n    onmessage = (e) => {\n        var command = e.data[0];\n        var data = e.data[1];\n        switch (command) {\n            case 'init':\n                init(data);\n                break;\n            case 'encode':\n                record(data);\n                break;\n            case 'dump':\n                dump();\n                break;\n            default:\n                break;\n        }\n    };\n}"
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IdiomsModel = void 0;
      var i = n(20).Model.extend({
        needReset: function () {
          var e = this.getProps().needReset;
          return this.setProperty("needReset", !1), e
        },
        updateHash: function (e) {
          var t = e.text,
            n = e.srcLang,
            i = e.dstLang,
            r = t.trim().toLowerCase(),
            o = "".concat(r, "-").concat(n, "-").concat(i),
            s = this.getProperty("hash");
          this.setProperty("hash", o).setProperty("needReset", s !== o)
        }
      });
      t.IdiomsModel = i
    },
    ,
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DictionaryMultipleModel = void 0, n(22), n(111);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(183),
        s = n(203),
        a = n(198),
        c = n(177);

      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(n), !0).forEach((function (t) {
            d(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var f = a.DictionaryModel.extend({
        init: function (e) {
          var t = this,
            n = e.getLangDir;
          this.getLangDir = n, this.onSet("data", (function (e) {
            var n = t.getRelatedWords(e);
            n && t.emit(o.RELATED_WORDS_EVENTS.WORDS_FETCHED, n)
          })).onSet("data", (function (e) {
            var n = t.getDeclensions(e);
            t.emit(s.DECLENSIONS_EVENTS.DECLENSIONS_FETCHED, n)
          }))
        },
        getParams: function () {
          var e, t, n = this.getProps(),
            i = n.type.split(","),
            r = [];
          for (e = 0, t = i.length; e < t; e++) i[e] === c.DictionaryPresenter.types.REGULAR ? r.push(n.srcLang + "-" + n.dstLang + "." + i[e]) : r.push(n.srcLang + "." + i[e]);
          return {
            ui: n.ui,
            srv: n.srv,
            sid: n.sid,
            text: n.text,
            dict: r.join(","),
            flags: n.flags
          }
        },
        getRelatedWords: function (e) {
          if (!e) return null;
          var t = r.default.safeParseJSON(e);
          if (!t) return null;
          var n = t[this.getProps().srcLang] || {};
          return {
            synWords: n.syn || [],
            derivedWords: n.deriv || [],
            antWords: n.ant || []
          }
        },
        getDeclensions: function (e) {
          var t = this.getLangDir();
          if (!e) return [];
          var n = r.default.safeParseJSON(e);
          if (!n[t]) return [];
          var i = n[t][c.DictionaryPresenter.types.REGULAR];
          if (!i || !i.length) return [];
          var o = [];
          return i.forEach((function (e) {
            var t = e.prdg,
              n = e.text,
              i = e.pos;
            t && o.push(l(l({}, t), {}, {
              text: n,
              partOfSpeech: i && i.text ? i.text : ""
            }))
          })), o
        }
      });
      t.DictionaryMultipleModel = f
    },
    ,
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TTSNativePlayer = void 0, n(35), n(22), n(34);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(167);
      var s = o.TTSPlayer.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = this;
          this.on("action", (function (e) {
            t.emit("actionStarted", {
              action: e,
              playerType: s.TYPE
            })
          })), "addEventListener" in window.speechSynthesis && window.speechSynthesis.addEventListener("voiceschanged", (function () {
            t.emit("playerUpdated")
          }), !1), this._rate = r.default.isNumber(e.rate) ? e.rate : 1, this._pitch = r.default.isNumber(e.pitch) ? e.pitch : 1, this._volume = r.default.isNumber(e.volume) ? e.volume : 1, this._maxTextLength = e.maxTextLength, this._utterances = []
        },
        play: function (e, t, n, i) {
          var s = this;
          this.isValid(e, t, (function (a) {
            a ? (s._active = !0, s.emit("action", o.PLAYER_ACTIONS.LOAD), r.default.iOS ? setTimeout((function () {
              return s._startSynthesis(t, e, n, i)
            }), 100) : s._startSynthesis(t, e, n, i)) : i(!1)
          }))
        },
        stop: function () {
          this.isActive() && (window.speechSynthesis.cancel(), this._active = !1)
        },
        isActive: function () {
          return this._active
        },
        createUtterance: function (e, t, n) {
          var i = new SpeechSynthesisUtterance;
          return i.rate = n ? this._rate / 2 : this._rate, i.pitch = this._pitch, i.volume = this._volume, i.text = e, i.lang = t ? t.lang : "", i.voice = t, i.addEventListener("end", this._onStop.bind(this)), i.addEventListener("error", this._onError.bind(this)), i.addEventListener("start", this._onStart.bind(this)), i
        },
        _startSynthesis: function (e, t, n, i) {
          var r = s.getVoice(e),
            o = this.createUtterance(t, r, n);
          this._utterances.splice(0, 1, o);
          try {
            window.speechSynthesis.speak(o), i(!0)
          } catch (e) {
            this._onError(), i(!1)
          }
        },
        _onStop: function () {
          this._active = !1, this.emit("action", o.PLAYER_ACTIONS.STOP)
        },
        _onError: function () {
          this._active = !1, this.emit("action", o.PLAYER_ACTIONS.ERROR)
        },
        _onStart: function () {
          this._active = !0, this.emit("action", o.PLAYER_ACTIONS.PLAY)
        },
        isLangSupported: function (e, t) {
          t(s.getVoice(e))
        },
        isTextSupported: function (e) {
          return r.default.hasAlphaOrDigit(e) && !r.default.isUrl(e)
        },
        isTextSizeBelowLimit: function (e) {
          return e && e.length <= this._maxTextLength
        },
        getPriority: function () {
          return o.PLAYER_PRIORITIES.NORMAL
        }
      }, {
        TYPE: "native",
        isAvailable: function () {
          return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window
        },
        langRegions: {
          de: "DE",
          en: "GB",
          es: "ES",
          fr: "FR",
          it: "IT",
          nl: "NL",
          pt: "PT",
          ru: "RU",
          zh: "CN"
        },
        getVoice: function (e) {
          return r.default.isNumber(e) ? this.getVoiceByIndex(e) : r.default.isString(e) ? this.getVoiceByLanguage(e) : null
        },
        getVoiceByIndex: function (e) {
          return window.speechSynthesis.getVoices()[e] || null
        },
        getVoiceByLanguage: function (e) {
          var t = this.langRegions[e],
            n = [],
            i = window.speechSynthesis.getVoices();
          return i = i.filter((function (t) {
            return 0 === t.lang.indexOf(e)
          })), t && (n = i.filter((function (e) {
            var n = e.lang.replace(/_/g, "-").split("-")[1];
            return n && n.toUpperCase() === t
          }))), n[0] || i[0] || null
        }
      });
      t.TTSNativePlayer = s
    },
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TTSOnlinePlayer = t.VOICES_MAP = void 0, n(34);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(167);

      function s(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(n), !0).forEach((function (t) {
            c(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var u = {
        ru: "oksana.gpu",
        tr: "selay.gpu",
        en: "oksana",
        uk: "oksana"
      };
      t.VOICES_MAP = u;
      var l, d, f = o.TTSPlayer.extend({
        init: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = new window.Audio;
          this._audio = n, this._currentSrc = "", this._url = t.speakerUrl, this._langs = t.speakerLangs, this._maxTextLength = t.maxTextLength, this._cacheEnabled = Boolean(t.cacheEnabled), this._params = t.params, this.on("action", (function (t) {
            e.emit("actionStarted", {
              action: t,
              playerType: f.TYPE
            })
          })), n.mozPreservesPitch = !0, n.webkitPreservesPitch = !0, n.preservesPitch = !0, n.addEventListener("error", (function () {
            e._clearLoadingTimeout(), e.emit("action", o.PLAYER_ACTIONS.ERROR)
          }), !1), n.addEventListener("ended", (function () {
            e.emit("action", o.PLAYER_ACTIONS.STOP)
          }), !1), n.addEventListener("pause", (function () {
            e.emit("action", o.PLAYER_ACTIONS.STOP)
          }), !1), n.addEventListener("playing", (function () {
            e._clearLoadingTimeout(), e.emit("action", o.PLAYER_ACTIONS.PLAY)
          }), !1)
        },
        getSrc: function (e, t) {
          var n = a(a({}, this._params), {}, {
            lang: this._langs[t],
            text: e
          });
          return t in u && (n.voice = u[t]), this._url + "?" + r.default.toQueryString(n)
        },
        play: function (e, t, n, i) {
          var r = this,
            s = this._audio;
          this.isValid(e, t, (function (a) {
            a || i(!1);
            var c = r.getSrc(e, t);
            r.emit("action", o.PLAYER_ACTIONS.LOAD), r._currentSrc === c && r._cacheEnabled && s.readyState ? s.currentTime = 0 : (s.src = c, r._currentSrc = c), s.playbackRate = n ? .5 : 1, s.play(), r._ttsLoadingTimeout = setTimeout((function () {
              r.emit("action", o.PLAYER_ACTIONS.ERROR)
            }), 2e3), i(!0)
          }))
        },
        stop: function () {
          this.isActive() && (this._clearLoadingTimeout(), this._audio.pause())
        },
        isActive: function () {
          return !this._audio.paused
        },
        isLangSupported: function (e, t) {
          t(this._langs[e])
        },
        isTextSupported: function (e) {
          return r.default.hasAlphaOrDigit(e) && !r.default.isUrl(e)
        },
        isTextSizeBelowLimit: function (e) {
          return e && e.length <= this._maxTextLength
        },
        getPriority: function () {
          return r.default.isOnline() ? o.PLAYER_PRIORITIES.NORMAL : o.PLAYER_PRIORITIES.LOW
        },
        _clearLoadingTimeout: function () {
          clearTimeout(this._ttsLoadingTimeout), this._ttsLoadingTimeout = 0
        }
      }, {
        TYPE: "yandex",
        backendSupportedFormats: [{
          format: "mp3",
          quality: "hi"
        }, {
          format: "wav",
          quality: "lo"
        }],
        codecs: (l = /^no$/, d = document.createElement("audio"), d.canPlayType ? {
          AAC: d.canPlayType("audio/aac").replace(l, ""),
          MP3: d.canPlayType("audio/mpeg").replace(l, ""),
          WAV: d.canPlayType('audio/wav; codecs="1"').replace(l, ""),
          OGG: d.canPlayType('audio/ogg; codecs="vorbis"').replace(l, "")
        } : {}),
        isAvailable: function (e) {
          return e && this.codecs[e.toUpperCase()]
        }
      });
      t.TTSOnlinePlayer = f
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TTSUniproxyPlayer = t.PLAYER_ERRORS = t.UNIPROXY_VOICES = t.PLAYER_TYPE = t.TTS_AUDIO_FORMAT = void 0, n(35), n(66), n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(61),
        s = n(167),
        a = n(219),
        c = n(274),
        u = n(276),
        l = n(202);
      var d = "Generate",
        f = "Speak",
        p = [a.AUDIO_FORMATS.OGG, a.AUDIO_FORMATS.WEBM, a.AUDIO_FORMATS.WAV_PCM, a.AUDIO_FORMATS.WAV].filter((function (e) {
          return (new Audio).canPlayType(e)
        }))[0];
      t.TTS_AUDIO_FORMAT = p;
      t.PLAYER_TYPE = "Uniproxy";
      var h = {
        en: "oksana",
        ru: "oksana.gpu",
        tr: "selay.gpu",
        uk: "oksana"
      };
      t.UNIPROXY_VOICES = h, ["oksana", "alyss"].includes(window.config.ENABLE_UNIPROXY) && (h.en = window.config.ENABLE_UNIPROXY);
      var g = {
        STREAM_ID_EMPTY: "stream_id_empty",
        SERVER_ERROR: "server_error",
        PLAYER_ERROR: "player_error"
      };
      t.PLAYER_ERRORS = g;
      var m = ["ru", "tr", "ua"],
        _ = s.TTSPlayer.extend({
          init: function () {
            var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this._player = new a.StreamPlayer(v), this._currentMessageId = "", this._currentStreamId = -1, this._uniproxy = t.uniproxy, this._maxTextLength = t.maxTextLength, this._uniproxy.on("*", (function (t, n) {
              switch (t) {
                case l.EVENTS.ERROR:
                  e._handleUniproxyError(n.data, n.error);
                  break;
                case l.EVENTS.MESSAGE:
                  e._handleMessage(n.data);
                  break;
                case l.EVENTS.STREAM:
                  e._handleStream(n);
                  break;
                case l.EVENTS.STREAM_CONTROL:
                  e._handleStreamControl(n.data)
              }
            })), this.on("action", (function (t) {
              e.emit("actionStarted", {
                action: t,
                playerType: "Uniproxy"
              })
            }))
          },
          isValid: function (e, t, n) {
            var i = this;
            s.TTSPlayer.prototype.isValid.call(this, e, t, (function (e) {
              if (!e) return n(e);
              i._uniproxy.ensureConnection((function () {
                n(!0)
              }))
            }))
          },
          _freeAudioContext: function () {
            this._audioContext && this._audioContext.close && this._audioContext.state && ("closed" !== this._audioContext.state && this._audioContext.close(), this._audioContext = null)
          },
          play: function (e, t, n, i) {
            var r = this;
            this._freeAudioContext(), this._audioContext = this._audioContext || new(window.AudioContext || window.webkitAudioContext), this._audioContext.createScriptProcessor(256, 1, 1).disconnect(), this.isValid(e, t, (function (o) {
              o || i(!1);
              var c = n ? '<speaker speed="0.5">' + e : e,
                u = h[t],
                l = p === a.AUDIO_FORMATS.WAV ? a.AUDIO_FORMATS.WAV_PCM : p;
              r.emit("action", s.PLAYER_ACTIONS.LOAD), r._player.setAudioContext(r._audioContext), r._currentMessageId = r._uniproxy.sendRequest("TTS", d, {
                text: c,
                lang: t,
                voice: u,
                format: l
              }), i(!0)
            }))
          },
          stop: function () {
            this.isActive() && (this._freeAudioContext(), -1 !== this._currentStreamId && this._uniproxy.closeStream(this._currentStreamId, this._currentMessageId), this._currentStreamId = -1, this._currentMessageId = "", this._player.stop())
          },
          isActive: function () {
            return !this._player.stopped
          },
          isLangSupported: function (e, t) {
            t(h[e])
          },
          isTextSupported: function (e) {
            return r.default.hasAlphaOrDigit(e) && !r.default.isUrl(e)
          },
          isTextSizeBelowLimit: function (e) {
            return e && e.length <= this._maxTextLength
          },
          getPriority: function (e, t) {
            return r.default.isOnline() ? window.config.ENABLE_UNIPROXY_TTS_PRIORITY && m.includes(t) || r.default.isLinux ? s.PLAYER_PRIORITIES.HIGH : s.PLAYER_PRIORITIES.NORMAL : s.PLAYER_PRIORITIES.LOW
          },
          _handleStream: function (e) {
            this._currentStreamId === e.streamId && this._player.onPackage(e.data)
          },
          _handleStreamControl: function (e) {
            var t = e.action,
              n = e.streamId;
            t === l.STREAM_CONTROL_ACTIONS.CLOSE && n === this._currentStreamId && (this._player.onStreamFinished(), this._currentStreamId = -1, this._currentMessageId = "")
          },
          _handleUniproxyError: function (e) {
            var t = e.header,
              n = e.payload,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (t && t.refMessageId === this._currentMessageId) {
              var r = n && n.error && n.error.message;
              this._handleError(i || g.SERVER_ERROR, r)
            }
          },
          _handleError: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            this.stop(), this.emit("action", s.PLAYER_ACTIONS.ERROR), (0, o.getGlobalEmitter)().emit("uniproxyTtsError", e, t)
          },
          _handleStart: function () {
            this.emit("action", s.PLAYER_ACTIONS.PLAY)
          },
          _handleFinished: function () {
            this.emit("action", s.PLAYER_ACTIONS.STOP)
          },
          _handleSpeak: function (e) {
            var t = e.header,
              n = e.payload;
            void 0 !== t.streamId ? t.refMessageId === this._currentMessageId && (this._currentStreamId = t.streamId, this._player.start({
              onStart: this._handleStart.bind(this),
              onError: this._handleError.bind(this),
              onFinished: this._handleFinished.bind(this),
              format: n.format
            })) : this._handleError(g.STREAM_ID_EMPTY)
          },
          _handleMessage: function (e) {
            var t = e.header;
            if (t && "TTS" === t.namespace) switch (t.name) {
              case f:
                this._handleSpeak(e)
            }
          },
          _clearLoadingTimeout: function () {
            clearTimeout(this._ttsLoadingTimeout), this._ttsLoadingTimeout = 0
          }
        }, {
          TYPE: "Uniproxy",
          isAvailable: function () {
            return Boolean(p) && ( //!(/opr\/|yabro/).test(navigator.userAgent.toLowerCase()) &&
              !r.default.chromeVersion || r.default.chromeVersion > 60) && (window.AudioContext || window.webkitAudioContext)
          }
        });

      function v(e) {
        return c.OggOpusStream.isOggOpus(e.format) ? new c.OggOpusStream(e) : u.PcmStream.isPCM(e.format) ? new u.PcmStream(e) : void 0
      }
      t.TTSUniproxyPlayer = _
    },
    function (e, t, n) {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      n(181), n(14), n(17), n(24), n(47), n(26), n(13), n(23), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.parseStreamPackage = h, t.OggOpusStream = void 0, n(3), n(119), n(180);
      var r = n(231);

      function o(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (n = function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
          }(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return i >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[i++]
                }
              },
              e: function (e) {
                throw e
              },
              f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
          c = !1;
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next();
            return a = e.done, e
          },
          e: function (e) {
            c = !0, o = e
          },
          f: function () {
            try {
              a || null == n.return || n.return()
            } finally {
              if (c) throw o
            }
          }
        }
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }

      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function c(e, t) {
        return (c = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function u(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function () {
          var n, i = d(e);
          if (t) {
            var r = d(this).constructor;
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments);
          return l(this, n)
        }
      }

      function l(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }
      var f = function (e) {
        ! function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && c(e, t)
        }(s, e);
        var t, n, i, r = u(s);

        function s(e) {
          var t;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, s), (t = r.call(this, e)).currentHeader = null, t.preloadBufferSize = 2e4, t.bufferSize = 4e4, t
        }
        return t = s, i = [{
          key: "isOggOpus",
          value: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "audio/opus" === e
          }
        }], (n = [{
          key: "add",
          value: function (e) {
            var t, n = -1,
              i = -1,
              r = o(h(e));
            try {
              for (r.s(); !(t = r.n()).done;) {
                var s = t.value,
                  a = s.segments,
                  c = s.size,
                  u = s.offset;
                a.length && ("head" === a[0].type ? (-1 !== n && this.currentHeader ? (this.insert(e.slice(n, i), this.currentHeader), n = -1, i = -1) : this.pendingBuffer && this.pendingBuffer.offset && this.ready(), this.currentHeader = e.slice(u, c + u)) : "tag" === a[0].type ? this.currentHeader && (this.currentHeader = p(this.currentHeader, e.slice(u, c + u))) : -1 === n ? (n = u, i = u + c) : i += c)
              }
            } catch (e) {
              r.e(e)
            } finally {
              r.f()
            } - 1 !== n && this.currentHeader && this.insert(e.slice(n, i), this.currentHeader)
          }
        }, {
          key: "getChunk",
          value: function (e) {
            return e
          }
        }]) && a(t.prototype, n), i && a(t, i), s
      }(r.AbstractStream);

      function p(e, t) {
        var n = new Uint8Array(e.byteLength + t.byteLength);
        return n.set(new Uint8Array(e), 0), n.set(new Uint8Array(t), e.byteLength), n.buffer
      }

      function h(e) {
        for (var t = [], n = 0, i = new DataView(e); n < e.byteLength;) {
          var r = n;
          if (1332176723 !== i.getUint32(n)) break;
          var o = i.getUint8(n + 26),
            s = n + 26 + 1,
            a = s + o;
          n += 26 + o + 1;
          for (var c = []; s < a; s++) {
            var u = i.getUint8(s);
            c.push(g(e, n, u)), n += u
          }
          t.push({
            offset: r,
            size: n - r,
            segments: c
          })
        }
        return t
      }

      function g(e, t, n) {
        var i = e.slice(t, t + n),
          r = new DataView(i),
          o = "data";
        return i.byteLength >= 4 && 1332770163 === r.getUint32(0) && (1214603620 === r.getUint32(4) ? o = "head" : 1415669619 === r.getUint32(4) && (o = "tag")), {
          offset: t,
          type: o,
          size: n
        }
      }
      t.OggOpusStream = f
    },
    function (e, t, n) {
      "use strict";

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PackageBuffer = void 0, n(119), n(3);
      var r = function () {
        function e(t) {
          ! function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.offset = 0, this.buffer = new ArrayBuffer(t)
        }
        var t, n, r;
        return t = e, (n = [{
          key: "add",
          value: function (e, t) {
            var n = t ? t.byteLength : 0,
              i = 0 === this.offset;
            if (e.byteLength + (i ? n : 0) + this.offset > this.buffer.byteLength) return !1;
            var r = new Uint8Array(this.buffer);
            return 0 === this.offset && t && (r.set(new Uint8Array(t), this.offset), this.offset += t.byteLength), r.set(new Uint8Array(e), this.offset), this.offset += e.byteLength, !0
          }
        }, {
          key: "relax",
          value: function () {
            return this.buffer = this.buffer.slice(0, this.offset)
          }
        }]) && i(t.prototype, n), r && i(t, r), e
      }();
      t.PackageBuffer = r
    },
    function (e, t, n) {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      n(181), n(24), n(26), n(14), n(13), n(23), n(3), n(17), n(47), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PcmStream = void 0, n(82), n(119), n(180);
      var r = n(231);

      function o(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }

      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function c(e, t) {
        return (c = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }

      function u(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function () {
          var n, i = d(e);
          if (t) {
            var r = d(this).constructor;
            n = Reflect.construct(i, arguments, r)
          } else n = i.apply(this, arguments);
          return l(this, n)
        }
      }

      function l(e, t) {
        return !t || "object" !== i(t) && "function" != typeof t ? function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }
      var f = /audio\/x-pcm;bit=(\d*);rate=(\d*)/,
        p = function (e) {
          ! function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && c(e, t)
          }(s, e);
          var t, n, i, r = u(s);

          function s(e) {
            var t;
            ! function (e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s), (t = r.call(this, e)).preloadBufferSize = 2e4, t.bufferSize = 4e4, t.bit = 15, t.rate = 16e3, t.channelCount = 1;
            var n = o((e.format || "").match(f) || [], 3),
              i = n[1],
              a = void 0 === i ? "" : i,
              c = n[2],
              u = void 0 === c ? "" : c,
              l = parseInt(a, 10),
              d = parseInt(u, 10);
            return t.bit = isNaN(l) ? void 0 : l, t.rate = isNaN(d) ? void 0 : d, t
          }
          return t = s, i = [{
            key: "isPCM",
            value: function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
              return f.test(e)
            }
          }], (n = [{
            key: "add",
            value: function (e) {
              this.insert(e)
            }
          }, {
            key: "getChunk",
            value: function (e) {
              return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                  n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                  i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16e3,
                  r = e.byteLength,
                  o = new Uint8Array(44 + r),
                  s = new DataView(o.buffer),
                  a = 0;
                return o.set(new Uint8Array(e), 44), s.setInt32(a, 1380533830), a += 4, s.setInt32(a, r + 36, !0), a += 4, s.setInt32(a, 1463899717), a += 4, s.setInt32(a, 1718449184), a += 4, s.setInt32(a, 16, !0), a += 4, s.setInt16(a, 1, !0), a += 2, s.setInt16(a, t, !0), a += 2, s.setInt32(a, i, !0), a += 4, s.setInt32(a, i * t * n / 8, !0), a += 4, s.setInt16(a, t * n / 8, !0), a += 2, s.setInt16(a, n, !0), a += 2, s.setInt32(a, 1684108385), a += 4, s.setInt32(a, r, !0), s.buffer
              }(e, this.channelCount, this.bit, this.rate)
            }
          }]) && a(t.prototype, n), i && a(t, i), s
        }(r.AbstractStream);
      t.PcmStream = p
    },
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechRecognizerModel = void 0;
      var i = n(20).Model.extend({
        getDefaults: function () {
          return {
            lang: "",
            index: 0
          }
        },
        increaseIndex: function () {
          return this.setProperty("index", this.getProperty("index") + 1)
        }
      });
      t.SpeechRecognizerModel = i
    },
    function (e, t, n) {
      "use strict";
      n(24), n(26), n(14), n(13), n(23), n(3), n(17), n(47), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpeechRecognizerPresenter = void 0, n(18);
      var i = n(32),
        r = n(178),
        o = n(232);

      function s(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }
      var c = i.Presenter.extend({
        init: function () {
          var e = this,
            t = this.getView(),
            n = this.getModel();
          this._loadingTimeout = 0, this._recognizers = [], t.on("tap", (function () {
            t.hasState(o.RECOGNIZER_STATES.INVALID) || (e.isActive() ? e.stop() : (t.setState(o.RECOGNIZER_STATES.PREPARING, !0), e.start(n.getProperty("lang"))))
          })), n.onChange((function (i) {
            "lang" === i && e.stop(), t.setState(o.RECOGNIZER_STATES.INVALID, !n.isValid())
          })), t.setState(o.RECOGNIZER_STATES.INVALID, !n.isValid())
        },
        addRecognizer: function (e) {
          this._recognizers.push(e), e.on(r.RECOGNITION_EVENTS.START, this._onStartEvent.bind(this, e)).on(r.RECOGNITION_EVENTS.RECOGNIZE, this._onRecognizeEvent.bind(this, e)).on(r.RECOGNITION_EVENTS.END, this._onEndEvent.bind(this, e))
        },
        start: function (e) {
          var t = this;
          return this._clearLoadingTimeout(), this._loadingTimeout = setTimeout((function () {
            t.getView().setState(o.RECOGNIZER_STATES.PREPARING, !1)
          }), 2e3), this._updateActiveRecognizer(e), this.getActiveRecognizer().startListening(e), this
        },
        stop: function () {
          return this._clearLoadingTimeout(), this.isActive() && (this.getView().setState(o.RECOGNIZER_STATES.LISTENING, !1).setState(o.RECOGNIZER_STATES.PREPARING, !1), this.getActiveRecognizer().stopListening()), this
        },
        setLanguage: function (e) {
          var t = this;
          this.getActiveRecognizer() || this._updateActiveRecognizer(e);
          var n = this.getActiveRecognizer();
          return n && n.convertLanguage(e, (function (e) {
            t.getModel().setProperty("lang", e || "")
          })), this
        },
        prepareData: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getActiveRecognizer();
          return t.prepareData(e, this.getModel().getProperty("index"))
        },
        isActive: function () {
          return this.getView().hasState(o.RECOGNIZER_STATES.PREPARING) || this.getView().hasState(o.RECOGNIZER_STATES.LISTENING)
        },
        getVisualizer: function () {
          return this.getActiveRecognizer().getVisualizer()
        },
        getActiveRecognizer: function () {
          return this._recognizer
        },
        _updateActiveRecognizer: function (e) {
          this._recognizer = this._recognizers.map((function (t) {
            return [t.getPriority(e), t]
          })).sort((function (e, t) {
            var n = s(e, 1)[0];
            return s(t, 1)[0] - n
          })).map((function (e) {
            var t = s(e, 2);
            t[0];
            return t[1]
          }))[0]
        },
        _onStartEvent: function (e, t) {
          this._clearLoadingTimeout(), this.getView().setState(o.RECOGNIZER_STATES.LISTENING, !0).setState(o.RECOGNIZER_STATES.PREPARING, !1), this.emit(r.RECOGNITION_EVENTS.START, t)
        },
        _onRecognizeEvent: function (e, t) {
          this.emit(r.RECOGNITION_EVENTS.RECOGNIZE, this.prepareData(t, e))
        },
        _onEndEvent: function (e, t) {
          var n = this.getModel();
          this._clearLoadingTimeout(), this.isActive() && this.getView().setState(o.RECOGNIZER_STATES.LISTENING, !1).setState(o.RECOGNIZER_STATES.PREPARING, !1), t !== r.RECOGNITION_ERRORS.ABORTED && (this.emit(r.RECOGNITION_EVENTS.END, {
            error: t,
            index: n.getProperty("index")
          }), n.increaseIndex())
        },
        _clearLoadingTimeout: function () {
          clearTimeout(this._loadingTimeout), this._loadingTimeout = 0
        }
      });
      t.SpeechRecognizerPresenter = c
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CollectionPresenter = void 0, n(35), n(22), n(17), n(18), n(122);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(93),
        s = n(175);
      var a = o.ListboxPresenter.extend({
        init: function () {
          var e = this,
            t = this,
            n = this.getModel(),
            i = n._database;
          this.syncCollections = r.default.debounce(a.prototype.syncCollections, 1e3, !0), n.on("collectionsSynced", (function () {
            t.emit("collectionsSynced")
          })).on("collectionsSet", (function () {
            t.emit("collectionsSet")
          })).on("dbReady", (function () {
            t.emit("dbReady")
          })).on("error", (function (e) {
            var n = {
              code: e.code,
              message: e.message || e.body && e.body.error || ""
            };
            t.emit("error", n)
          })).on("checkRecordError", (function (e) {
            t.emit("checkRecordError", e)
          })).on("databaseError", (function (e) {
            t.emit("databaseError", e)
          })).on("checked", (function (e) {
            t.emit("checked", e)
          })).on("addToNewCollection", (function (e) {
            t.emit("addToNewCollection", e)
          })).on("updateTop", (function () {
            t.emit("updateTop")
          })).on("updateRecords", (function (e) {
            t.emit("updateRecords", e)
          })).on("synced", (function () {
            this.setProperty("syncedUid", this.getProperty("uid")), t.emit("synced")
          })).on("recordsReceived", (function (e, n) {
            t.emit("someRecordsReceived", e, n), e === t.getValue() && t.emit("recordsReceived", t.getRecords())
          })).on("recordUpdated", (function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              n = e || t.getValue() || t.getActiveId();
            i.getRecordsByCollection(n)
          })).on("collections", (function (e) {
            t.emit("gotTopList", e)
          })).on("collectionData", (function (e) {
            this.setRecords(e.records), t.emit("recordsReceived", e.records, {
              top: !0
            }), t.emit("collectionReceived", e)
          })).on("mergeCollection", (function (e) {
            this.mergeCollection(e)
          })).on("processCollections", (function (e) {
            this.processCollections(e)
          })).on("resetedIds", (function () {
            t.emit("resetedIds")
          })).on("firstCollectionSync", (function () {
            e.getHistoryCollection() || i.createHistoryCollection()
          })).on("change", (function (e, n) {
            var i;
            switch (e) {
              case "items":
                i = this.getItems().filter((function (e) {
                  return s.CollectionServerModel.isNotDeleted(e)
                })), t.emit("checkLimit", i.length), t.initializeActiveId();
                break;
              case "value":
                var r = n.split(":");
                n && -1 === n.indexOf(":") ? t.getCollection(n) : "train" === r[0] && t.emit("openTraining", r[1]);
                break;
              case "activeId":
                t.emit("activeIdChanged", n).checkRecord()
            }
          }))
        },
        initializeActiveId: function (e) {
          var t = e;
          if (!this.getActiveId()) {
            if (!e) {
              var n = this.getItems().filter((function (e) {
                  return s.CollectionServerModel.isNotDeleted(e)
                })),
                i = n.filter((function (e) {
                  return e.type === s.COLLECTION_TYPES.FAVORITES
                }))[0];
              i ? t = i.id : (n = n.filter((function (e) {
                return !s.CollectionServerModel.isSubscription(e)
              }))).length ? t = n[0].id : this.emit("noCollectionForActiveId")
            }
            this.setActiveId(t).emit("activeIdInitialized")
          }
        },
        isMyCollection: function (e) {
          return e && e.authorUid === this.getModel().getProperty("uid")
        },
        checkRecord: function (e) {
          return this.getModel().checkRecord(e), this
        },
        syncCollections: function () {
          return this.getModel().syncCollections(), this
        },
        getCollectionList: function () {
          return this.getModel().getCollectionList(), this
        },
        getTopCollectionsList: function () {
          return this.getModel()._getCollections(), this
        },
        getTopCollection: function (e) {
          return this.getModel()._getCollection(e), this
        },
        getSelectedCollection: function () {
          var e = this;
          return this.getItems().filter((function (t) {
            return t.id === e.getValue()
          }))[0]
        },
        getDefaultName: function (e) {
          for (var t = this.getItems() || [], n = t.filter((function (t) {
            return -1 !== t.name.toLowerCase().indexOf(e.toLowerCase())
          })), i = 0; n.length;) i ? function () {
            i++;
            var r = e.toLowerCase() + " " + i;
            n = t.filter((function (e) {
              return e.name.toLowerCase() === r
            }))
          }() : (n = t.filter((function (t) {
            return t.name.toLowerCase() === e.toLowerCase()
          }))).length && i++;
          return e + (i ? " " + i : "")
        },
        getRecords: function () {
          return this.getModel().getRecords()
        },
        setRecords: function (e) {
          return this.getModel().setRecords(e), this
        },
        getActiveId: function () {
          return this.getModel().getProperty("activeId")
        },
        setActiveId: function (e) {
          return this.getModel().isValid("activeId", e) && this.getModel().setProperty("activeId", e), this
        },
        getActive: function () {
          return this.getModel().getActive()
        },
        getCollection: function (e) {
          return this.getModel().getCollection(e), this
        },
        updateCollection: function (e, t) {
          return this.getModel().updateCollection(e, t), this
        },
        createCollection: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = this.getModel();
          return e.name ? (t && n.setProperty("addingRecord", !0), n.createCollection(e), this) : this
        },
        saveCollection: function () {
          var e = this.getItemById(this.getValue(), !1);
          return this.createCollection({
            name: e.name,
            color: e.color,
            public: !1
          }, !0), this
        },
        deleteCollection: function (e) {
          return e && this.getModel().deleteCollection(e), this
        },
        updateRecord: function (e, t) {
          return this.getModel().updateRecord(e, t), this
        },
        moveRecords: function (e, t) {
          var n = this.getItemById(t, !1),
            i = r.default.isArray(e) ? e : [e];
          return this.getModel().moveRecords(i, n), this
        },
        addRecords: function (e, t) {
          var n = this.getProps(),
            i = s.CollectionServerModel.getTimestamp(),
            r = t || n.activeId,
            o = e;
          if (!o && !n.text) return this;
          if (!r) return this;
          var a = this.getItemById(r, !1);
          return o || (o = [{
            text: n.text,
            lang: n.srcLang + "-" + n.dstLang,
            translation: n.translation
          }]), o = o.map((function (e) {
            return {
              text: e.text,
              lang: e.lang,
              translation: e.translation,
              score: 0,
              status: s.COLLECTION_STATUSES.ADDED,
              collectionId: a.id,
              creationTimestamp: i,
              modificationTimestamp: i
            }
          })), this.getModel().addRecords(o, a), this
        },
        addToNewCollection: function (e) {
          var t = this.getProps(),
            n = this.getRecords().find((function (e) {
              return t.text === e.text && t.srcLang + "-" + t.dstLang === e.lang && t.translation === e.translation
            }));
          n ? this.moveRecords(n, e) : this.addRecords(null, e)
        },
        deleteRecords: function (e) {
          return this.getModel().deleteRecords(e), this
        },
        subscribeToCollection: function (e) {
          return this.getModel().subscribe(e), this
        },
        getHistoryRecords: function () {
          var e = this.getHistoryCollectionId();
          return e && this.getCollection(e), this
        },
        addHistoryRecord: function (e) {
          var t = this.getHistoryCollectionId();
          return t && this.addRecords([{
            text: e.text,
            translation: e.translation,
            lang: e.srcLang + "-" + e.dstLang
          }], t), this
        },
        updateHistoryRecord: function (e) {
          var t = this.getHistoryCollectionId();
          return t && this.getModel().updateHistoryRecord(t, e), this
        },
        deleteHistoryRecord: function (e) {
          var t = this.getHistoryCollectionId();
          return t && this.getModel().deleteRecordByProps(t, e), this
        },
        deleteRecordByProps: function (e, t) {
          return e && this.getModel().deleteRecordByProps(e, t), this
        },
        setText: function (e) {
          return this.getModel().setProperty("text", e), this
        },
        setSrcLanguage: function (e) {
          return this.getModel().setProperty("srcLang", e), this
        },
        setDstLanguage: function (e) {
          return this.getModel().setProperty("dstLang", e), this
        },
        setTranslation: function (e) {
          return this.getModel().setProperty("translation", e), this
        },
        filter: function (e) {
          return this.getModel().filter(e, this.getValue())
        },
        resetRecordsScore: function (e) {
          return this.getModel().resetRecordsScore(e), this
        },
        getShareId: function () {
          var e = this.getItemById(this.getValue(), !1);
          return e ? e.sourceCollectionId || e.serverId : ""
        },
        getShareLink: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = {},
            n = window.location.protocol + "//" + window.location.host + "/subscribe";
          return e.collection_id && (t.collection_id = e.collection_id), e.utmSource && (t.utm_source = e.utmSource), n + "?" + r.default.toQueryString(t)
        },
        openRecords: function (e) {
          var t = this.getItems().find((function (t) {
            return t.serverId === e || t.sourceCollectionId === e
          }));
          t ? (this.setValue(t.id), this.getCollection(t.id)) : this.getTopCollection(e)
        },
        getItemById: function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getItems().find((function (n) {
            return n.id === e || t && n.serverId && n.serverId === e
          }))
        },
        getCollectionByType: function (e) {
          return this.getItems().find((function (t) {
            return t.type === e
          }))
        },
        getHistoryCollection: function () {
          return this.getCollectionByType(s.COLLECTION_TYPES.HISTORY)
        },
        getHistoryCollectionId: function () {
          var e = this.getHistoryCollection();
          return e ? e.id : null
        },
        getFavoritesCollectionId: function () {
          var e = this.getCollectionByType(s.COLLECTION_TYPES.FAVORITES);
          return e ? e.id : null
        }
      });
      t.CollectionPresenter = a
    },
    ,
    function (e, t, n) {
      "use strict";
      n(24), n(26), n(14), n(13), n(23), n(47), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.compareRecords = v, t.HistoryCollection = t.HISTORY_COLLECTION_METRIKAS = t.HISTORY_COLLECTION_EVENTS = void 0, n(126), n(18), n(22), n(3), n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(80),
        s = n(20),
        a = n(235),
        c = n(114);

      function u(e, t) {
        return function (e) {
          if (Array.isArray(e)) return e
        }(e) || function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
          } catch (e) {
            r = !0, o = e
          } finally {
            try {
              i || null == a.return || a.return()
            } finally {
              if (r) throw o
            }
          }
          return n
        }(e, t) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return l(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }(e, t) || function () {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }
      var d = {
        READY: "ready",
        UPDATED: "updated"
      };
      t.HISTORY_COLLECTION_EVENTS = d;
      var f = {
        ADD_RECORD: "addRecord",
        UPDATE_RECORD: "updateRecord",
        REMOVE_RECORD: "removeRecord"
      };
      t.HISTORY_COLLECTION_METRIKAS = f;
      var p = (0, c.getTrackerByNamespace)(f).$track,
        h = null,
        g = null,
        m = null;
      try {
        m = (JSON.parse(localStorage.getItem("yTrSettings") || localStorage.getItem("mTrSettings") || "{}") || {}).syncedTimestamp
      } catch (e) {}
      var _ = s.Model.extend({
        defaults: {
          records: [],
          ready: !1,
          updating: !1,
          collectionsPresenter: null,
          maxRecords: 1e3,
          maxTextLength: 300
        },
        init: function () {
          var e = this;
          this.requestCollectionRecordsAsync = r.default.debounce(_.prototype.requestCollectionRecords, 200), (0, a.getCollectionsEmitter)().on(a.COLLECTION_EVENTS.INIT, (function (t) {
            e.setCollectionsPresenter(t)
          })).on(a.COLLECTION_EVENTS.COLLECTIONS_SET, (function () {
            try {
              g = e._getDbInfo()
            } catch (e) {}
            e.requestCollectionRecordsAsync()
          })).on(a.COLLECTION_EVENTS.SYNCED, (function () {
            e.requestCollectionRecordsAsync()
          })), this.onChange("records", (function () {
            e.setProperty({
              ready: !0,
              updating: !1
            }), e.emit(d.UPDATED)
          })).onChange("ready", (function () {
            e.emit(d.READY)
          }))
        },
        isReady: function () {
          return this.getProperty("ready")
        },
        isUpdating: function () {
          return this.getProperty("updating")
        },
        onceReady: function (e) {
          return this.once(d.READY, e)
        },
        onceUpdated: function (e) {
          return this.once(d.UPDATED, e)
        },
        getRecords: function () {
          return this.getProperty("records")
        },
        getCollectionsPresenter: function () {
          return this.getProperty("collectionsPresenter")
        },
        getRecordPosition: function (e) {
          return this.getRecords().findIndex((function (t) {
            return v(e, t)
          }))
        },
        isRecordValid: function (e) {
          var t = e.text,
            n = e.translation,
            i = e.srcLang,
            r = e.dstLang,
            o = this.getProps().maxTextLength;
          return t && n && i && r && t.length <= o
        },
        processRecord: function (e) {
          var t = this,
            n = this.getProps(),
            i = n.records,
            r = n.maxRecords;
          if (this.prepareRecord(e), !this.isRecordValid(e)) return !1;
          if (!this.isReady()) return this.onceReady((function () {
            return t.processRecord(e)
          }));
          if (this.isUpdating()) return this.onceUpdated((function () {
            return t.processRecord(e)
          }));
          var s = this.getRecordPosition(e);
          this.setProperty("updating", !0);
          try {
            if (-1 === s) return i.length >= r && this.removeRecord(i[i.length - 1]), this.addRecord(e);
            if (s > 0) return this.touchRecord(e)
          } catch (t) {
            this.setProperty("updating", !1), (0, o.logError)(t, {
              additional: this._getDbErrorAdditional(e)
            }), h = !1
          }
          return !1
        },
        touchRecord: function (e) {
          return p(f.UPDATE_RECORD), this.getCollectionsPresenter().updateHistoryRecord(e), h = !0, !0
        },
        addRecord: function (e) {
          return p(f.ADD_RECORD), this.getCollectionsPresenter().addHistoryRecord(e), h = !0, !0
        },
        removeRecord: function (e) {
          return p(f.REMOVE_RECORD), this.getCollectionsPresenter().deleteHistoryRecord(e), h = !0, !0
        },
        setRawRecords: function (e) {
          var t = e.map((function (e) {
            var t = e.text,
              n = e.translation,
              i = u(e.lang.split("-"), 2);
            return {
              text: t,
              translation: n,
              srcLang: i[0],
              dstLang: i[1]
            }
          }));
          this.setProperty({
            records: t
          })
        },
        requestCollectionRecords: function () {
          var e = this.getCollectionsPresenter();
          return !!e && (e.getHistoryRecords(), !0)
        },
        setCollectionsPresenter: function (e) {
          var t = this;
          e.on("someRecordsReceived", (function (n, i) {
            var r = e.getHistoryCollectionId();
            n && n === r && t.setRawRecords(i)
          })), this.setProperty({
            collectionsPresenter: e
          })
        },
        prepareRecord: function (e) {
          e.text = r.default.trim(e.text), e.translation = r.default.trim(e.translation)
        },
        _getDbInfo: function () {
          var e = this.getCollectionsPresenter(),
            t = e ? e.getModel() : null,
            n = t ? t._database : null,
            i = n ? n._db : null;
          if (!i) return null;
          var o = {},
            s = r.default.slice(i.objectStoreNames || []);
          return s.forEach((function (e) {
            var t = i.transaction(e).objectStore(e);
            o[e] = r.default.slice(t.indexNames).join(", ")
          })), {
            name: i.name,
            version: i.version,
            stores: s.join(", "),
            indexes: JSON.stringify(o)
          }
        },
        _getDbErrorAdditional: function (e) {
          var t = m ? Math.round((Date.now() - m) / 1e3) : null;
          try {
            var n = g || {},
              i = this._getDbInfo() || {};
            return {
              dbName: i.name,
              dbVersion: i.version,
              dbStores: i.stores,
              dbIndexes: i.indexes,
              dbIndexesAfterInit: n.indexes,
              workedBefore: h,
              lang: [e.srcLang, e.dstLang].join("-"),
              dbLastSyncTimeout: t
            }
          } catch (e) {
            return {
              dbAdditionalError: e.getMessage(),
              dbLastSyncTimeout: t
            }
          }
        }
      });

      function v(e, t) {
        return e.text.toLowerCase() === t.text.toLowerCase() && e.translation.toLowerCase() === t.translation.toLowerCase() && e.srcLang === t.srcLang && e.dstLang === t.dstLang
      }
      t.HistoryCollection = _
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initDistBanner = function (e) {
        var t = this;
        if (e.DISABLE_DIST_BANNER) return this;
        var n = this.getView(),
          o = this.getModel(),
          s = new r.View({
            element: e.ELEMENTS.distContainer
          }),
          a = function () {
            var e;
            (e = s.getElement().querySelector("div")) && e.childNodes.length && s.isVisible() && s.setVisible(!1)
          };
        n.onStateChanged("training", (function (e) {
          e && s.isVisible() && s.setVisible(!1)
        })), e.SRV === i.TOUCH ? o.onChange("textAreaFocused", (function (e) {
          e && a()
        })) : o.onChange("text", (function (e, t) {
          "input" === t.reason && a()
        }));
        return s.onHide((function () {
          return t.emit("distBannerAutoHide")
        })), this
      };
      var i = n(123),
        r = n(67)
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DictionaryExamplesModel = void 0, n(111);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(258);
      var s = n(198).DictionaryModel.extend({
        getParams: function () {
          var e = this.getProps();
          return {
            ui: e.ui,
            srv: e.srv,
            sid: e.sid,
            src: e.text,
            dst: e.translation,
            lang: e.srcLang + "-" + e.dstLang,
            flags: e.flags,
            chunks: e.chunks ? 1 : 0,
            maxlen: e.maxLength
          }
        },
        getDefaults: function () {
          return {
            ui: "",
            srv: "",
            url: "/",
            src: "",
            text: "",
            data: "",
            lang: "",
            flags: 0,
            chunks: !1,
            maxLength: 0,
            voteResults: "",
            expandedLists: "",
            speakersSupport: "",
            sid: this.getId()
          }
        },
        prepareExamples: function (e) {
          var t = {
              items: []
            },
            n = this.getExpandedLists(),
            i = r.default.safeParseJSON(e);
          return i.result && i.result.length ? (t.items = o.DictionaryPresenter2.prepareExampleData(i.result, this.getProperty("srcLang"), this.getProperty("srcLang"), n), 1 === t.items.length && (t.items[0].showAll = !0), this.emit("examplesRendered"), t) : null
        },
        setVoteResult: function (e, t) {
          var n = this.getVoteResults();
          n[e] = t, this.setVoteResults(n)
        },
        getVoteResults: function () {
          var e = this.getProperty("voteResults");
          return e ? JSON.parse(e) : {}
        },
        setVoteResults: function (e) {
          this.setProperty("voteResults", JSON.stringify(e))
        },
        setSpeakerSupport: function (e, t, n) {
          var i = this.getSpeakersSupport();
          i[e] = {
            srcValid: t,
            dstValid: n
          }, this.setSpeakersSupport(i)
        },
        setSpeakersSupport: function (e) {
          this.setProperty("speakersSupport", JSON.stringify(e))
        },
        getSpeakersSupport: function () {
          var e = this.getProperty("speakersSupport");
          return e ? JSON.parse(e) : {}
        },
        setExpandedList: function (e, t) {
          var n = this.getExpandedLists();
          n[e] = t, this.setExpandedLists(n)
        },
        getExpandedLists: function () {
          var e = this.getProperty("expandedLists");
          return e ? JSON.parse(e) : {}
        },
        setExpandedLists: function (e) {
          this.setProperty("expandedLists", JSON.stringify(e))
        }
      });
      t.DictionaryExamplesModel = s
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractIdiomsComponent = void 0;
      var i = n(129),
        r = n(168),
        o = i.Component.extend({
          defaults: {
            text: "",
            complaint: !1,
            popupIsVisible: !1
          },
          init: function (e) {
            var t = e.localizations;
            this.localizations = t
          },
          getText: function () {
            return this.getProperty("text")
          },
          updatePopupPosition: function () {
            if (this.getProps().popupIsVisible) {
              var e = this.getPopupPosition();
              this.emit(r.IDIOMS_EVENTS.OPEN_POPUP, !0, e)
            }
          },
          onTextClick: function () {
            this.emit(r.IDIOMS_EVENTS.SEND_METRIC, r.IDIOMS_METRIKAS.TEXT_CLICK)
          }
        });
      t.AbstractIdiomsComponent = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractRelatedWordsModule = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(160),
        s = n(114),
        a = n(183);
      var c = (0, s.getTrackerByNamespace)(a.RELATED_WORDS_METRIKAS).$track,
        u = o.AppModule.extend({
          init: function () {
            var e = this;
            this.relatedWordsComponent = this.makeRelatedWordsComponent(), this.dictModel = this.app.getDictionaryModel(), this.relatedWordsComponent.setEnabled(!0), this.app.on("translationError", (function () {
              return e.reset()
            })), this.listenDictModel(), this.listenComponent()
          },
          reset: function () {
            this.relatedWordsComponent.setProperty({
              synWords: [],
              antWords: [],
              derivedWords: []
            }).setVisible(!1).updateAsync()
          },
          listenDictModel: function () {
            var e = this;
            this.dictModel.on(a.RELATED_WORDS_EVENTS.WORDS_FETCHED, (function (t) {
              return e.setWords(t)
            })).onChange(r.default.debounce((function () {
              e.dictModel.isValid() || e.reset()
            })))
          },
          listenComponent: function () {
            var e = this;
            this.relatedWordsComponent.on(a.RELATED_WORDS_EVENTS.WORD_CLICK, (function (t) {
              return e.onRelatedWordClick(t)
            }))
          },
          onRelatedWordClick: function (e) {
            this.appModel.setProperty("text", e, {
              type: "mean",
              sender: "related words"
            })
          },
          setWords: function (e) {
            var t = e.synWords,
              n = e.antWords,
              i = e.derivedWords,
              r = this.hasRelatedWords({
                synWords: t,
                antWords: n,
                derivedWords: i
              });
            this.relatedWordsComponent.setProperty({
              synWords: t,
              antWords: n,
              derivedWords: i
            }).updateAsync().setVisible(r), r && c(a.RELATED_WORDS_METRIKAS.RENDER, {
              renderedCategories: {
                synonyms: t.length > 0,
                antonyms: n.length > 0,
                derivatives: i.length > 0
              }
            })
          },
          hasRelatedWords: function (e) {
            return [e.synWords, e.antWords, e.derivedWords].some((function (e) {
              return e && e.length
            }))
          }
        });
      t.AbstractRelatedWordsModule = u
    },
    function (e, t, n) {
      "use strict";
      n(97), n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AbstractRelatedWordsComponent = void 0, n(18), n(3);
      var i, r, o, s, a, c = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        u = n(114),
        l = n(129),
        d = n(62),
        f = n(183);

      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? p(Object(n), !0).forEach((function (t) {
            g(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function m(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }
      var _ = (0, u.getTrackerByNamespace)(f.RELATED_WORDS_METRIKAS).$track,
        v = l.Component.extend({
          defaults: {
            wordListLength: f.DEFAULT_ITEMS_AMOUNT
          },
          reset: function () {
            this.setProperty({
              wordListLength: f.DEFAULT_ITEMS_AMOUNT
            })
          },
          onExpandClick: function () {
            var e = this.getProps().type;
            this.setProperty({
              wordListLength: 1 / 0
            }).updateAsync(), _(f.RELATED_WORDS_METRIKAS.WORDS_EXPAND, {
              type: e
            })
          },
          getListLength: function (e) {
            return e ? this.getProperty("wordListLength") : void 0
          },
          template: function (e, t) {
            var n = this,
              i = e.html,
              a = e.cn,
              c = e.nothing,
              u = t.words,
              l = t.canExpand,
              d = this.getProps(),
              f = d.title,
              p = d.type,
              h = d.onWordClick,
              g = this.getListLength(l),
              _ = g < u.length,
              v = a("related"),
              E = a("article");
            if (!u || !u.length) return c;
            return i(o || (o = m(['\n            <p class="', '">', '</p>\n            <div class="', '">\n                ', "\n                ", "\n            </div>\n        "])), E("label", {
              target: "relatedWords"
            }), f, v("words"), u.slice(0, g).map((function (e) {
              return i(r || (r = m(['\n            <div\n                data-value="', '"\n                data-word-type="', '"\n                data-complaint-type="relatedWord"\n                class="', '"\n                @click=', "\n            >\n              ", "\n          </div>\n        "])), e, p, v("word"), (function (e) {
                return h(e)
              }), e)
            })), _ ? i(s || (s = m(['<div class="', '" @click=', ">...</div>"])), v("word"), (function () {
              return n.onExpandClick()
            })) : c)
          }
        }),
        E = l.Component.extend({
          defaults: {
            synWords: [],
            antWords: [],
            derivedWords: []
          },
          init: function () {
            var e = this,
              t = this.getLocalizations();
            this.onSet(c.default.debounce((function () {
              return e.onWordsSet()
            }), 0)), this.childComponents = {
              Synonyms: new v({
                type: "synonyms",
                title: t.syn,
                onWordClick: function (t) {
                  return e.onWordClick(t, "synonyms")
                }
              }),
              Antonyms: new v({
                type: "antonyms",
                title: t.ant,
                onWordClick: function (t) {
                  return e.onWordClick(t, "antonyms")
                }
              }),
              Derivatives: new v({
                type: "derivatives",
                title: t.deriv,
                onWordClick: function (t) {
                  return e.onWordClick(t, "derivatives")
                }
              })
            }
          },
          getLocalizations: function () {
            return {}
          },
          onWordsSet: function () {},
          onWordClick: function (e, t) {
            var n = e.target.getAttribute(d.VALUE_ATTR);
            _(f.RELATED_WORDS_METRIKAS.WORDS_CLICK, {
              wordType: t,
              wordValue: n
            }), this.emit(f.RELATED_WORDS_EVENTS.WORD_CLICK, n)
          },
          getAdditionalWordsListProps: function () {
            return {
              canExpand: !0
            }
          },
          parseRelatedWordsArray: function (e, t) {
            var n = this;
            e.text && t.push(e.text), e.syn && e.syn.forEach((function (e) {
              var i = e.text,
                r = e.syn;
              i && t.push(i), r && n.parseRelatedWordsArray(r, t)
            }))
          },
          getRelatedWords: function () {
            var e = this,
              t = this.getProps(),
              n = [],
              i = [],
              r = [];
            return [{
              source: t.synWords,
              accum: n
            }, {
              source: t.antWords,
              accum: i
            }, {
              source: t.derivedWords,
              accum: r
            }].forEach((function (t) {
              var n = t.source,
                i = t.accum;
              c.default.isArray(n) && n.forEach((function (t) {
                var n = t.tr;
                c.default.isArray(n) && n.forEach((function (t) {
                  return e.parseRelatedWordsArray(t, i)
                }))
              }))
            })), {
              synonyms: n,
              derivatives: i,
              antonyms: r
            }
          },
          template: function (e) {
            var t = e.html,
              n = e.cn,
              i = this.getRelatedWords(),
              r = i.synonyms,
              o = i.derivatives,
              s = i.antonyms,
              c = this.childComponents,
              u = c.Synonyms,
              l = c.Antonyms,
              d = c.Derivatives,
              f = n("block-separator")({
                target: "related"
              });
            return t(a || (a = m(['\n            <div class="', '"></div>\n            ', "\n            ", "\n            ", "\n        "])), f, u.getMemoizedDirective(h({
              words: r
            }, this.getAdditionalWordsListProps())), l.getMemoizedDirective(h({
              words: o
            }, this.getAdditionalWordsListProps())), d.getMemoizedDirective(h({
              words: s
            }, this.getAdditionalWordsListProps())))
          }
        });
      t.AbstractRelatedWordsComponent = E
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initToast = void 0;
      var i = n(238),
        r = n(11),
        o = n(239);
      t.initToast = function (e) {
        var t = new i.ToastPresenter({
          view: new r.TouchView({
            element: e.ELEMENTS.errorToast,
            contentElement: e.ELEMENTS.errorToastContent
          }),
          model: new o.ToastModel({
            delay: e.TOAST_DELAY
          })
        });
        return this.getModel().on("set:toast", (function (e, n) {
          t.getView().setState("commonComplaint", n.commonComplaint), t.showToast(e, n.delay)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initFileDrop = void 0, n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(123),
        s = n(11),
        a = n(215),
        c = n(294);
      t.initFileDrop = function (e) {
        var t = this,
          n = this.getModel(),
          i = e.SRV === o.DOC,
          u = new s.TouchView({
            element: e.ELEMENTS.mainContainer || document.documentElement
          }),
          l = new a.SessionStorage,
          d = new c.DropAreaView({
            element: e.ELEMENTS.dropOverlay,
            contentElement: e.ELEMENTS.dropContent
          });
        return this._handleFileUpload = function (e) {
          var t = new FileReader;
          t.onload = function () {
            l.setProperty("storedFile", this.result), l.setProperty("storedFileName", e.name), l.setProperty("storedFileType", e.type)
          }, t.readAsDataURL(e)
        }, l.on("fileStored", (function () {
          d.getContentElement().submit()
        })).on("quotaError", (function () {
          n.setProperty("toast", e.TOAST_MESSAGES.quotaExceeded)
        })), u.on("dragenter", (function (e) {
          var t = e.dataTransfer ? e.dataTransfer.types[0] : "";
          /text/.test(t) || d.setVisible(!0)
        })).bindDOMEvents("dragenter"), d.on("fileDropped", (function (e, n) {
          i && n === c.DropAreaView.FILE_FORMAT.DOCUMENT ? t.emit("documentDropped", e) : t._handleFileUpload(e)
        })).on("formatError", (function () {
          n.setProperty("toast", r.default.parseString(e.TOAST_MESSAGES.unsupportedFormat, e.ALLOWED_FORMATS))
        })).on("sizeError", (function () {
          n.setProperty("toast", r.default.parseString(e.TOAST_MESSAGES.maxSize, e.MAX_FILE_SIZE_MB))
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DropAreaView = t.SUPPORTED_DOCS = void 0, n(22), n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11);
      var s = /pdf|doc|docx|xls|xlsx|ppt|ppts/;
      t.SUPPORTED_DOCS = s;
      var a = o.TouchView.extend({
        init: function () {
          var e = this,
            t = a.EVENT_NAMES,
            n = t.DROP,
            i = t.DRAG_ENTER,
            o = t.DRAG_OVER,
            s = t.DRAG_LEAVE;
          this.on(n, (function (t) {
            return e._handleDropEvent(t)
          })).on(i, (function (t) {
            return e._handleDragEnterEvent(t)
          })).on(o, (function (e) {
            return r.default.preventEvent(e)
          })).on(s, (function (t) {
            return e._handleDragLeaveEvent(t)
          })).bindDOMEvents("".concat(n, " ").concat(i, " ").concat(o, " ").concat(s))
        },
        _handleFileUpload: function (e) {
          var t = r.default.getFilesFromEvent(e)[0];
          if (r.default.preventEvent(e), t) {
            var n = a.getFileFormat(t);
            this._validateFileFormat(n) && (t.size > a.MAX_FILE_SIZE ? this.emit(a.EVENT_NAMES.SIZE_ERROR) : this.emit(a.EVENT_NAMES.FILE_DROPPED, t, n))
          }
        },
        _validateFileFormat: function (e) {
          return e !== a.FILE_FORMAT.INVALID ? (this._updateContentElement(e), !0) : (this.emit(a.EVENT_NAMES.FORMAT_ERROR), !1)
        },
        _updateContentElement: function (e) {
          e === a.FILE_FORMAT.IMAGE && this.getContentElement().setAttribute(a.ACTION_ATTRIBUTE, a.ACTIONS.OCR), e === a.FILE_FORMAT.DOCUMENT && this.getContentElement().setAttribute(a.ACTION_ATTRIBUTE, a.ACTIONS.DOC)
        },
        _handleDropEvent: function (e) {
          this._handleFileUpload(e), this.setVisible(!1)
        },
        _handleDragEnterEvent: function (e) {
          this.dragEnterTarget = e.target
        },
        _handleDragLeaveEvent: function (e) {
          e.target === this.dragEnterTarget && (this.dragEnterTarget = null, this.setVisible(!1))
        }
      }, {
        getFileFormat: function (e) {
          var t = e.name.split(".").pop();
          return r.default.isImageFile(e) ? a.FILE_FORMAT.IMAGE : s.test(t) ? a.FILE_FORMAT.DOCUMENT : a.FILE_FORMAT.INVALID
        },
        ACTION_ATTRIBUTE: "action",
        MAX_FILE_SIZE: 5242880,
        EVENT_NAMES: {
          SIZE_ERROR: "sizeError",
          FORMAT_ERROR: "formatError",
          FILE_DROPPED: "fileDropped",
          DROP: "drop",
          DRAG_OVER: "dragover",
          DRAG_ENTER: "dragenter",
          DRAG_LEAVE: "dragleave"
        },
        FILE_FORMAT: {
          IMAGE: "image",
          DOCUMENT: "doc",
          INVALID: "invalid"
        },
        ACTIONS: {
          OCR: "/ocr",
          DOC: "/doc"
        }
      });
      t.DropAreaView = a
    },
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(51), n(68), n(3), n(97), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Suggestions = t.SUGGESTIONS_APPLYING_SOURCES = t.SUGGESTIONS_TYPES = t.SUGGESTIONS_METRIKAS = t.SUGGESTIONS_EVENTS = void 0, n(35), n(66), n(18);
      var i, r, o, s, a, c, u = n(129),
        l = n(157),
        d = n(67),
        f = n(114);

      function p(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }

      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(n), !0).forEach((function (t) {
            m(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var _ = {
        APPLY: "apply",
        ITEMS_UPDATED: "itemsUpdated"
      };
      t.SUGGESTIONS_EVENTS = _;
      var v = {
        SHOW: "show",
        APPLY: "apply",
        ITEM_HOVER: "itemHover",
        ITEM_NAVIGATE: "itemNavigate"
      };
      t.SUGGESTIONS_METRIKAS = v;
      var E = {
        SUGGEST: "suggest",
        PREDICT: "predict"
      };
      t.SUGGESTIONS_TYPES = E;
      var T = {
        CLICK: "click",
        ENTER: "enter",
        TAB: "tab"
      };
      t.SUGGESTIONS_APPLYING_SOURCES = T;
      var y = (0, f.getTrackerByNamespace)(v).$track,
        S = u.Component.extend({
          defaults: {
            suggestions: [],
            predictions: [],
            activeIndex: 0
          },
          init: function (e) {
            var t = this,
              n = e.model,
              i = ["predictions", "suggestions"];
            n.onChange(i, (function (e, n) {
              t.resetActiveIndex(), t.setProperty(e, n ? n.predictions.filter((function (n) {
                return "suggestions" !== e || !t.hasPrediction(n.src)
              })) : [])
            })), this.onChange((function (e) {
              t.updateAsync({
                field: e
              })
            })).onRendered((function (e) {
              var n = e.field;
              i.includes(n) && t.emit(_.ITEMS_UPDATED)
            })).onStateChanged([d.VIEW_STATES.HIDDEN, d.VIEW_STATES.DISABLED], (function () {
              t.isVisible() && t.isEnabled() && y(v.SHOW, t.getTrackingParams())
            }))
          },
          hasPrediction: function (e) {
            return this.getProperty("predictions").some((function (t) {
              return t.src.toLowerCase() === e.toLowerCase()
            }))
          },
          getTrackingParams: function () {
            return {
              lang: this.getProps().model.getLangPair()
            }
          },
          getActiveIndex: function () {
            return this.getProperty("activeIndex")
          },
          getTypeByIndex: function (e) {
            var t = this.getProps(),
              n = t.suggestions,
              i = t.predictions;
            return e < i.length ? E.PREDICT : e < n.length + i.length ? E.SUGGEST : null
          },
          applyItem: function (e, t, n) {
            var i = n.index,
              r = n.source;
            return y(v.APPLY, g(g({}, this.getTrackingParams()), {}, {
              len: e.src.length,
              type: t,
              index: i,
              source: r
            })), this.emit(_.APPLY, e, t)
          },
          applySuggest: function (e, t) {
            return this.applyItem(e, E.SUGGEST, t)
          },
          applyPredict: function (e, t) {
            return this.applyItem(e, E.PREDICT, t)
          },
          applyActiveItem: function (e) {
            var t = this.getProps(),
              n = t.suggestions,
              i = t.predictions,
              r = t.activeIndex;
            if (r < i.length) this.applyPredict(i[r], {
              source: e,
              index: r
            });
            else if (r < n.length + i.length) {
              var o = r - i.length;
              this.applySuggest(n[o], {
                source: e,
                index: o
              })
            }
            return this
          },
          updateActiveIndex: function (e) {
            if (this.isEnabled()) {
              var t = this.getProps(),
                n = t.suggestions,
                i = t.predictions,
                r = t.activeIndex,
                o = n.length + i.length,
                s = r + e;
              s < 0 ? s = o - 1 : s >= o && (s = 0);
              var a = this.getTypeByIndex(s),
                c = a === E.PREDICT ? s : s - i.length;
              return y(v.ITEM_NAVIGATE, g(g({}, this.getTrackingParams()), {}, {
                index: c,
                type: a
              })), this.setActiveIndex(s)
            }
          },
          setActiveIndex: function (e) {
            return this.setProperty({
              activeIndex: e
            })
          },
          resetActiveIndex: function () {
            return this.setActiveIndex(0)
          },
          setPosition: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return l.PositionedView.prototype.setPosition.call(this, e, t)
          },
          onHoverPredict: function (e) {
            if (this.getActiveIndex() !== e) return y(v.ITEM_HOVER, g(g({}, this.getTrackingParams()), {}, {
              index: e,
              type: E.PREDICT
            })), this.setActiveIndex(e)
          },
          onHoverSuggest: function (e, t) {
            if (this.getActiveIndex() !== e + t) return y(v.ITEM_HOVER, g(g({}, this.getTrackingParams()), {}, {
              index: e,
              type: E.PREDICT
            })), this.setActiveIndex(e + t)
          },
          onClickPredict: function (e) {
            var t = this.getProps().predictions;
            return this.applyPredict(t[e], {
              index: e,
              source: T.CLICK
            })
          },
          onClickSuggest: function (e) {
            var t = this.getProps().suggestions;
            return this.applySuggest(t[e], {
              index: e,
              source: T.CLICK
            })
          },
          template: function (e) {
            var t = this,
              n = e.html,
              u = e.nothing,
              l = e.cn,
              d = this.getProps(),
              f = d.suggestions,
              h = d.predictions,
              g = d.activeIndex,
              m = d.model,
              _ = m.getProps(),
              v = _.srcLang,
              E = _.dstLang,
              T = h.length && f.length && !m.arePosesEqual(),
              y = 1 === h.length && !f.length,
              S = l("suggestions-item"),
              b = l("suggestions-wrapper");
            return n(i || (i = p(["\n            <div class=", ">\n                ", "\n                ", "\n                ", "\n            </div>\n        "])), b({
              no_predict_prefix: !T,
              single_predict: y
            }), h.map((function (e, i) {
              var s = e.src,
                a = e.dst;
              return n(r || (r = p(["\n                    <div class=", "\n                        @mouseover=", "\n                        @click=", ">\n                        <div class=", " lang=", ">", "</div>\n                        ", "\n                    </div>\n                "])), S({
                predict: !0,
                active: i === g,
                no_dst: !a
              }), (function () {
                return t.onHoverPredict(i)
              }), (function () {
                return t.onClickPredict(i)
              }), S("value"), v, s, a && n(o || (o = p(["<div class=", " lang=", ">", "</div>"])), S("translation"), E, a))
            })), f.length && h.length ? n(s || (s = p(['\n                    <div class="suggestions-divider"></div>\n                ']))) : u, f.map((function (e, i) {
              var r = e.src,
                o = e.dst;
              return n(a || (a = p(["\n                    <div class=", "\n                        @mouseover=", "\n                        @click=", ">\n                        <div class=", " lang=", ">", "</div>\n                        ", "\n                    </div>\n                "])), S({
                suggest: !0,
                active: i + h.length === g
              }), (function () {
                return t.onHoverSuggest(i, h.length)
              }), (function () {
                return t.onClickSuggest(i)
              }), S("value"), v, r, o && n(c || (c = p(["<div class=", " lang=", ">", "</div>"])), S("translation"), E, o))
            })))
          }
        });
      t.Suggestions = S
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var i = n(1);
      i(i.P, "Array", {
        fill: n(101)
      }), n(58)("fill")
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslitModel = void 0;
      var i = n(174),
        r = n(59),
        o = i.SyncModel.extend({
          getData: function () {
            var e = this.toJSON();
            return {
              lang: e.lang,
              text: e.text
            }
          },
          getParams: function () {
            var e = this.toJSON();
            return {
              sid: e.sid,
              srv: e.srv
            }
          },
          getDefaults: function () {
            return {
              sid: "",
              srv: "",
              url: "/",
              lang: "",
              text: "",
              translit: ""
            }
          },
          requestTranslit: function () {
            var e = this,
              t = new r.HTTPRequest(this.getProperty("url"));
            return this.abort(), this.isValid() ? this.setRequest(t.setType(r.HTTPRequest.types.FORM).setData(this.getData()).setParams(this.getParams()).setMethod(r.HTTPRequest.methods.POST).send((function (t, n) {
              t && e.emit("error", t), e.setProperty("translit", t ? "" : n.body)
            }))) : this
          }
        });
      t.TranslitModel = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslitPresenter = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(32).Presenter.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = this,
            n = this.getView();
          this.getModel().on("error", (function (e) {
            t.emit("error", e)
          })).on("change", (function (e, i) {
            switch (e) {
              case "lang":
              case "text":
                t.requestTranslit();
                break;
              case "translit":
                t.emit("result", i), n.setVisible(i).setContent(i, {
                  asText: !0
                })
            }
          })).on("invalid", (function () {
            this.setProperty("translit", "")
          })), this.requestTranslit = r.default.debounce(this.requestTranslit, e.debounceDelay || 200)
        },
        setLang: function (e) {
          return this.getModel().setProperty("lang", e), this
        },
        setText: function (e) {
          return this.getModel().setProperty("text", e), this
        },
        requestTranslit: function () {
          return this.getModel().requestTranslit(), this
        }
      });
      t.TranslitPresenter = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTextArea = t.TEXTAREA_APP_EVENTS = void 0, n(14), n(13), n(23), n(3), n(91);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(94),
        s = n(156),
        a = n(158),
        c = n(11);
      var u = {
        FOCUS: "textFocus",
        TAP: "textTap",
        KEYDOWN: "textKeydown",
        PASTE: "textPaste",
        CLEAR: "textDelete"
      };
      t.TEXTAREA_APP_EVENTS = u;
      t.initTextArea = function (e) {
        var t = this,
          n = this,
          i = e.USE_FAKEAREA && o.InputView.fakeAreaSupported,
          l = this.getView(),
          d = this._settings,
          f = new o.InputView({
            element: e.ELEMENTS.textbox,
            activateFocus: !0,
            contentElement: i ? o.InputView.makeFakeArea(e.ELEMENTS.fakeArea) : e.ELEMENTS.textarea
          }),
          p = new s.InputPresenter({
            view: f,
            model: new a.InputModel
          }),
          h = this.getModel(),
          g = new c.TouchView({
            element: e.ELEMENTS.clearButton
          }),
          m = function () {
            setTimeout((function () {
              var e = f.getSelection();
              if (e.start !== e.end) {
                e.trim = !0;
                var t = p.getValue(e);
                t && h.setProperty("selText", t)
              }
            }), 10)
          };
        return this.on("pageReady", (function () {
          var t = e.DEFAULT_TEXT || "";
          window.location.pathname !== e.COLLECTIONS_PATHNAME && f.setFocus(!0), f.getValue() && f.getValue() !== p.getValue() && f.setValue(""), f.setValue(t, {
            caret: t.length,
            sender: "url"
          })
        })).on("keyboardOpen", (function () {
          f.setFocus(!0)
        })).on("action", (function (e) {
          var t;
          switch (e) {
            case "swapDirection":
              (t = h.getProperty("translation")) && h.setProperty("text", t, {
                sender: "translator"
              }), this.swapDirection();
              break;
            case "expiredRefresh":
              n.reload()
          }
        })).on("refreshAlertShow", (function () {
          f.setFocus(!1), l.setState("expired", !0).on("keydown", (function (e) {
            r.default.preventEvent(e), e.keyCode === o.InputView.keys.ENTER && n.reload()
          })).bindDOMEvents("keydown")
        })).on("visibilityChange", (function (e) {
          e || n.reloadIfSessionExpired()
        })).bindFocusActivation(g).onFocusedElementActivation((function (e, n) {
          "swapDirection" === r.default.getAttribute(e, "data-action") && (t.emit("action", "swapDirection", n), r.default.preventEvent(n))
        })), l.on("stateChanged:longtext", (function () {
          f.getContentElement().value = String(f.getContentElement().value)
        })).on("stateChanged:editing", (function (e) {
          e && f.setFocus(!1)
        })).setState("faked", i), f.on("tap", (function (e) {
          n.emit(u.TAP, p.getCaret(), e), l.setState("listening", !1)
        })).on("paste", (function () {
          this.userPaste = !0
        })).on("scroll", (function (e) {
          if (e.target === this.getContentElement()) {
            var t = this.getScrollInfo();
            h.setProperty("textScrollY", 100 / t.maxTop * t.top, {
              userScroll: this.userScroll
            }), this.userScroll = !0
          }
        })).on("select", (function () {
          return m()
        })).on("mouseup", (function (e) {
          if (!f.getContentElement().contains(e.target)) {
            var t = f.getValue().length;
            f.setSelection({
              start: t,
              end: t
            })
          }
          m()
        })).on("keydown", (function (e) {
          n.emit(u.KEYDOWN, e)
        })).on("enterPressed", (function () {
          d.isOptionEnabled("shift") || (document.execCommand("insertHTML", !1, "\n"), t.emit("input"))
        })).on("stateChanged:empty", (function (e) {
          l.setState("empty", e)
        })).on("stateChanged:focused", (function (e) {
          n.emit(u.FOCUS, e), e ? l.setState("collapsed", !1) : n.updateTrText()
        })).bindDOMEvents("scroll", !0).bindDOMEvents("paste select keydown enterPressed mouseup"), h.setFilter("selText", (function (e) {
          var t = e,
            i = this.getProperty("spellerData");
          if (!i || !d.getProperty("autospeller")) return t;
          try {
            i = JSON.parse(i)
          } catch (e) {
            return t
          }
          return r.default.isArray(i) && i.forEach((function (e) {
            e.s && e.s.length && t === e.word && (n.hasSpellerSavedWord(e.word) || (t = e.s[0]))
          })), t
        })), l.on("stateChanged:collapsed", (function (e) {
          e && f.setFocus(!1)
        })), p.on("input", (function (e, t) {
          f.userPaste && (f.userPaste = !1, n.emit(u.PASTE, e, t.oldValue)), t.caret = t.caret || this.getCaret(), n.setText(e, t)
        })), h.on("change", (function (t, i, o) {
          switch (t) {
            case "text":
              this.setProperty("timestamp", Date.now());
              var s = i.length;
              if (f.setFocus(!0), l.setState("longtext", s > e.LONGTEXT_LENGTH), "synonyms" === o.sender) {
                var a = f.getSelection();
                if (a.start !== a.end && !l.hasState("dict_reversed")) {
                  var c = o.oldValue.slice(a.start, a.end);
                  a.start += c.search(/\S/), a.end -= c.length - c.search(/\s*$/), r.default.extend(o, a), o.caret = a.start + s
                }
              }
              p.setValue(i, o), o.caret && p.setCaret(o.caret);
              var u = f.getScrollInfo();
              this.setProperty("textScrollY", 100 / u.maxTop * u.top), g.setEnabled(i);
              break;
            case "trText":
              this.setProperty("selText", "", {
                silent: !0
              });
              break;
            case "srcLang":
              f.setFocus(!0), f.setLanguage(i);
              break;
            case "dstLang":
              f.setFocus(!0);
              break;
            case "timestamp":
              i - o.oldValue > e.SESSION_RESUME_TIME && n.emit("sessionResumed", i - o.oldValue);
              break;
            case "sourceTranslit":
              f.getContentElement().setAttribute("data-translit", i);
              break;
            case "translationScrollY":
              o.userScroll && f.scrollTo(f.getScrollInfo().maxTop / 100 * i)
          }
        })), h.on("translationViewScrollY", (function (e) {
          f.scrollTo(e)
        })).on("moveTextAreaCaret", (function (e) {
          p.setCaret(e)
        })), g.on("tap", (function () {
          n.emit(u.CLEAR), h.setProperty("text", "")
        })), d.hasProperty("savedText") && (e.DEFAULT_TEXT = d.getProperty("savedText"), d.setProperty("savedText", null)), f.setValue(""), this
      }
    },
    function (e, t, n) {
      "use strict";
      n(97), Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "HISTORY_EVENTS", {
        enumerable: !0,
        get: function () {
          return o.HISTORY_EVENTS
        }
      }), Object.defineProperty(t, "HISTORY_METRIKAS", {
        enumerable: !0,
        get: function () {
          return o.HISTORY_METRIKAS
        }
      }), t.History = void 0, n(3), n(35), n(18);
      var i, r, o = n(229);

      function s(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }
      var a = o.AbstractHistoryComponent.extend({
        defaults: {
          settingEnabled: !0,
          maxItems: 5,
          maxOverallTextLen: 70,
          maxRecordLen: 28,
          additionalOffset: 6
        },
        getItems: function () {
          var e = this.getProps(),
            t = e.storageModel,
            n = e.maxItems,
            i = e.maxOverallTextLen,
            r = e.maxRecordLen,
            o = e.additionalOffset,
            s = t.getRecords().slice(0, n),
            a = i,
            c = i;
          return s.filter((function (e) {
            var t = e.text,
              n = e.translation,
              i = a > 0 && c > 0;
            return a -= Math.min(n.length, r) + o, c -= Math.min(t.length, r) + o, i
          }))
        },
        template: function (e) {
          var t = this,
            n = e.html,
            o = e.cn,
            a = window.config.LOCALIZATIONS,
            c = o("history_records"),
            u = o("history_records-item");
          return n(i || (i = s(["\n            <div class=", ">", "</div>\n            <div class=", ">\n                <div class=", ">\n                    ", "\n                    <div class=", "\n                        @click=", "\n                        data-tooltip=", '\n                        data-tooltip-position="top">\n                        <div class=', "></div>\n                        <div class=", ">\n                            ", "\n                        </div>\n                    </div>\n                </div>\n            </div>\n        "])), c("title"), a.historyTitle, c("container"), c("items_container"), this.getItems().map((function (e, i) {
            return n(r || (r = s(["\n                        <div class=", " @click=", ">\n                            <div class=", "\n                                dir=", "\n                                lang=", "\n                                title=", ">\n                                ", "\n                            </div>\n                            <div class=", "\n                                dir=", "\n                                lang=", "\n                                title=", ">\n                                ", "\n                            </div>\n                        </div>\n                    "])), u(), (function () {
              return t.applyItem(e, i)
            }), u("text"), t.getLangDir(e.srcLang), e.srcLang, e.text, e.text, u("translation"), t.getLangDir(e.dstLang), e.dstLang, e.translation, e.translation)
          })), u({
            type: "history_button"
          }), (function () {
            return t.openHistoryCollection("button")
          }), a.historyButton, c("history_button-icon"), c("history_button-label"), a.historyButton)
        }
      });
      t.History = a
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTypingMetrics = t.TYPING_METRIKAS = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(114),
        s = n(295);
      var a = "predictor",
        c = "input",
        u = "cut",
        l = {
          SPEED_REPORT: "speedReport"
        };
      t.TYPING_METRIKAS = l;
      var d = (0, o.getTrackerByNamespace)(l).$track;
      t.initTypingMetrics = function () {
        var e = this.getModel(),
          t = null,
          n = !1,
          i = !1,
          o = null,
          f = null,
          p = {
            speed: 0,
            duration: 0,
            typed: 0,
            suggested: 0,
            predicted: 0,
            cleared: 0,
            clearedPredicts: 0,
            clearedSuggests: 0
          },
          h = function () {
            if (null !== t && (clearTimeout(t), t = null), o && f) {
              var e = f - o,
                n = p.predicted + p.suggested + p.typed + p.cleared;
              if (e < 100) o = null;
              else {
                var i = p.clearedSuggests || p.clearedPredicts;
                (n >= 4 || i) && (p.duration = e, p.speed = n / e * 1e3, d(l.SPEED_REPORT, p)), o = null, p = {
                  speed: 0,
                  duration: 0,
                  typed: 0,
                  suggested: 0,
                  predicted: 0,
                  cleared: 0,
                  clearedPredicts: 0,
                  clearedSuggests: 0
                }
              }
            } else p = {
              speed: 0,
              duration: 0,
              typed: 0,
              suggested: 0,
              predicted: 0,
              cleared: 0,
              clearedPredicts: 0,
              clearedSuggests: 0
            }
          };
        return e.onChange("text", (function (e, l) {
          var d, g = l.reason,
            m = l.sender,
            _ = l.suggestType,
            v = l.oldValue,
            E = void 0 === v ? "" : v,
            T = r.default.trim(e),
            y = T.length - E.length,
            S = g === c,
            b = g === u,
            O = m === a;
          if (null !== t && clearTimeout(t), t = setTimeout((function () {
            t = null, h()
          }), 5e3), y && !T && b) return h();
          y && (S || O) && (o || (o = r.default.now()), f = r.default.now(), y > 0 ? O ? (d = y, _ === s.SUGGESTIONS_TYPES.SUGGEST ? p.suggested += Math.abs(d) : p.predicted += Math.abs(d)) : function (e) {
            p.typed += Math.abs(e)
          }(y) : function (e) {
            n ? p.clearedPredicts += 1 : i && (p.clearedSuggests += 1), p.cleared += Math.abs(e)
          }(y), n = O && _ !== s.SUGGESTIONS_TYPES.SUGGEST, i = O && _ === s.SUGGESTIONS_TYPES.SUGGEST)
        })), this.on("textFocus", (function (e) {
          e || h()
        })), document.body.addEventListener("mouseleave", h), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTTSPlayer = t.TTS_APP_EVENTS = void 0;
      var i = n(214),
        r = n(11),
        o = n(20),
        s = n(167),
        a = n(240),
        c = {
          SPEAKER_ACTION: "speakerAction"
        };
      t.TTS_APP_EVENTS = c;
      t.initTTSPlayer = function (e) {
        var t = this,
          n = this,
          u = this.getView(),
          l = this.getModel(),
          d = this.toJSON(),
          f = new r.TouchView({
            element: e.ELEMENTS.textSpeaker,
            stopDefaultAction: !0
          }),
          p = new r.TouchView({
            element: e.ELEMENTS.translatorSpeaker,
            stopDefaultAction: !0
          }),
          h = new i.TTSPresenter({
            view: f,
            model: new o.Model
          }),
          g = new i.TTSPresenter({
            view: p,
            model: new o.Model
          }),
          m = function () {
            h.stop(), g.stop()
          };
        return [h, g].forEach((function (n) {
          (0, a.getAvailablePlayers)(e, t._uniproxy).forEach((function (e) {
            n.addPlayer(e)
          }))
        })), this.on("visibilityChange", (function (e) {
          e && m()
        })).on("dialogTap", m).bindFocusActivation(f).bindFocusActivation(p), l.on("change", (function (e, t) {
          switch (e) {
            case "text":
              h.setText(t);
              break;
            case "srcLang":
              h.setLanguage(t);
              break;
            case "dstLang":
              g.setLanguage(t);
              break;
            case "translation":
              g.setText(t)
          }
        })), u.on("stateChanged:listening", (function (e) {
          e && m()
        })), h.on("actionStarted", (function (e) {
          switch (e.action) {
            case s.PLAYER_ACTIONS.LOAD:
              g.stop();
              break;
            case s.PLAYER_ACTIONS.PLAY:
            case s.PLAYER_ACTIONS.ERROR:
              n.emit(c.SPEAKER_ACTION, e)
          }
        })).on("toggleValid", (function (e) {
          f.setEnabled(e)
        })), g.on("actionStarted", (function (e) {
          switch (e.action) {
            case s.PLAYER_ACTIONS.LOAD:
              h.stop(), u.setState("listening", !1);
              break;
            case s.PLAYER_ACTIONS.PLAY:
            case s.PLAYER_ACTIONS.ERROR:
              n.emit(c.SPEAKER_ACTION, e)
          }
        })).on("toggleValid", (function (e) {
          p.setEnabled(e)
        })), d.text && h.setText(d.text), d.srcLang && h.setLanguage(d.srcLang), d.dstLang && g.setLanguage(d.dstLang), d.translation && g.setText(d.translation), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "IDIOMS_EVENTS", {
        enumerable: !0,
        get: function () {
          return r.IDIOMS_EVENTS
        }
      }), t.IdiomsModule = t.HORIZONTAL_POPUP_OFFSET = t.VERTICAL_POPUP_OFFSET = void 0;
      var i = n(61),
        r = n(168),
        o = n(11),
        s = n(471);
      t.VERTICAL_POPUP_OFFSET = 58;
      t.HORIZONTAL_POPUP_OFFSET = 231;
      var a = r.AbstractIdiomsModule.extend({
        init: function () {
          var e = this;
          this.idiomsComponent.on(r.IDIOMS_EVENTS.SET_COMPLAINT, (function (t) {
            return e._handleComplaintMode(t)
          })), this.translationView = this.app.getTranslatorView(), this.app.on(["complaintStatus", "action:cancelComplaintMode"], (function () {
            return e.resetIdiomComponentComplaint()
          })), (0, i.getGlobalEmitter)().on("translationRendered", (function () {
            return e._handleTextPosition()
          }))
        },
        _makeIdiomsPopup: function () {
          return new o.TouchView({
            element: this.appConfig.ELEMENTS.idiomsPopup
          })
        },
        _makeIdiomsComponent: function () {
          return new s.IdiomsComponent({
            localizations: this.appConfig.LOCALIZATIONS,
            mainContainerRef: this.appConfig.ELEMENTS.mainContainer
          }, {
            container: this.appConfig.ELEMENTS.idioms
          })
        },
        resetIdiomComponentComplaint: function () {
          this.idiomsComponent.setProperty("complaint", !1).setComplaintHighlighted(!1).updateAsync()
        },
        _handleTextPosition: function () {
          this.idiomsComponent.setTextPosition(this.translationView.getOffsetHeight() + r.IDIOMS_TEXT_OFFSET)
        },
        _setText: function (e) {
          return e && (this.idiomsComponent.setProperty("text", e).updateAsync().setVisibleAsync(!0), this.app.emit("idiomsRendered", this.idiomsComponent.getHeight()), this._sendMetric(r.IDIOMS_METRIKAS.RENDER)), this
        },
        _handleComplaintMode: function (e) {
          this.idiomsComponent.setProperty("complaint", e).setComplaintHighlighted(e).updateAsync(), e && (this._handlePopupVisibility(!1), this._sendMetric(r.IDIOMS_METRIKAS.COMPLAINT_CLICK)), this.app.emit(r.IDIOMS_EVENTS.SET_COMPLAINT, e)
        }
      });
      t.IdiomsModule = a
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";

      function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      n(154), n(26), n(14), n(13), n(23), n(51), n(24), n(22), n(18), n(162);
      var r, o = (r = n(0)) && r.__esModule ? r : {
          default: r
        },
        s = n(169),
        a = n(11),
        c = n(20),
        u = n(200),
        l = n(201),
        d = n(124),
        f = n(240),
        p = n(421),
        h = function (e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = v();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var s = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
            } n.default = e, t && t.set(e, n);
          return n
        }(n(469)),
        g = n(470),
        m = n(329),
        _ = n(472);

      function v() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return v = function () {
          return e
        }, e
      }
      window.initTextApp = function (e) {
        (0, s.rumSendTimeMark)(s.RUM_COUNTERS.APP_INIT_START), (0, s.rumTimeStart)(s.RUM_COUNTERS.APP_INIT_DURATION);
        var t = document.body.getAttribute("data-lang").split("-");
        e.DEFAULT_TEXT = document.body.getAttribute("data-text"), e.DEFAULT_SRC_LANG = t[0] || "", e.DEFAULT_DST_LANG = t[1] || "";
        var n, i, r, v = new p.DesktopTranslateApplication({
          config: e,
          view: new a.TouchView({
            element: document.documentElement,
            ignoreSelection: !0
          }),
          model: new c.Model({
            text: "",
            trText: "",
            selText: "",
            srcLang: "",
            dstLang: "",
            tooltip: "",
            complaint: !1,
            timestamp: Date.now(),
            textScrollY: 0,
            translation: "",
            spellerData: "",
            narrowScreen: (0, f.isScreenNarrow)(e),
            sourceTranslit: "",
            targetTranslit: "",
            userTranslation: "",
            translationScrollY: 0,
            leadSpacingsCount: 0
          }, {
            validators: {
              srcLang: function (t) {
                return o.default.hasProperty(e.TRANSLATOR_LANGS, t)
              },
              dstLang: function (t) {
                return o.default.hasProperty(e.TRANSLATOR_LANGS, t)
              }
            }
          })
        });
        n = String.fromCharCode, i = n(46), r = n.apply(void 0, [83, 73, 68]), e[r] = e[r].split(i).map((function (e) {
          return e.split("").reverse().join("")
        })).join(i), e.ELEMENTS = {
          mainContainer: document.getElementById("mainContainer"),
          url: document.getElementById("urlForm"),
          logo: document.getElementById("logo"),
          share: document.getElementById("share"),
          shareInput: document.getElementById("shareInput"),
          shareButton: document.getElementById("shareButton"),
          shareContent: document.getElementById("shareContent"),
          shareCopyLink: document.getElementById("shareCopyLink"),
          header: document.getElementById("header"),
          volume: document.getElementById("volume"),
          resizer: document.getElementById("resizer"),
          tableau: document.getElementById("tableau"),
          tableauFrame: document.getElementById("tableauFrame"),
          tabsMenu: document.getElementById("tabsMenu"),
          tabsToggle: document.getElementById("tabsToggle"),
          interim: document.getElementById("interim"),
          speller: document.getElementById("speller"),
          tooltip: document.getElementById("tooltip"),
          textbox: document.getElementById("textbox"),
          textbox2: document.getElementById("textbox2"),
          external: document.getElementById("external"),
          externalContent: document.getElementById("externalContent"),
          measurer: document.getElementById("measurer"),
          measurerDst: document.getElementById("measurerDst"),
          keyboard: document.getElementById("keyboard"),
          keyboardLang: document.getElementById("keyboardLang"),
          keyboardButton: document.getElementById("keyboardButton"),
          keyboardContainer: document.getElementById("keyboardContainer"),
          fakeArea: document.getElementById("fakeArea"),
          textarea: document.getElementById("textarea"),
          favButton: document.getElementById("favButton"),
          alignment: document.getElementById("alignment"),
          predictor: document.getElementById("predictor"),
          predictorDst: document.getElementById("predictorDst"),
          suggestions: document.getElementById("suggestions"),
          textarea2: document.getElementById("textarea2"),
          textLayer: document.getElementById("textLayer"),
          dictionary: document.getElementById("dictionary"),
          complaintPopup: document.getElementById("complaintPopup"),
          complaintPopupComment: document.getElementById("complaintPopupComment"),
          complaintPopupCommentInput: document.getElementById("complaintPopupCommentInput"),
          complaintPopupProposal: document.getElementById("complaintPopupProposal"),
          complaintPopupProposalInput: document.getElementById("complaintPopupProposalInput"),
          microphone: document.getElementById("microphone"),
          copyButton: document.getElementById("copyButton"),
          collectionMenuButton: document.getElementById("collectionMenuButton"),
          collectionMenuListbox: document.getElementById("collectionMenuListbox"),
          userButton: document.getElementById("userButton"),
          userListbox: document.getElementById("userListbox"),
          textCounter: document.getElementById("textCounter"),
          textCounterContent: document.getElementById("textCounterContent"),
          clearButton: document.getElementById("clearButton"),
          translation: document.getElementById("translation"),
          textSpeaker: document.getElementById("textSpeaker"),
          textNativeSpeaker: document.getElementById("textNativeSpeaker"),
          translatorSpeaker: document.getElementById("translatorSpeaker"),
          translatorNativeSpeaker: document.getElementById("translatorNativeSpeaker"),
          goodVoteButton: document.getElementById("goodVoteButton"),
          badVoteButton: document.getElementById("badVoteButton"),
          srcLangButton: document.getElementById("srcLangButton"),
          dstLangButton: document.getElementById("dstLangButton"),
          optionsButton: document.getElementById("optionsButton"),
          optionsListbox: document.getElementById("optionsListbox"),
          srcLangHistory: document.getElementById("srcLangHistory"),
          srcLangHistoryContent: document.getElementById("srcLangHistoryContent"),
          dstLangHistory: document.getElementById("dstLangHistory"),
          dstLangHistoryContent: document.getElementById("dstLangHistoryContent"),
          srcLangListbox: document.getElementById("srcLangListbox"),
          srcLangListboxContent: document.getElementById("srcLangListboxContent"),
          dstLangListbox: document.getElementById("dstLangListbox"),
          dstLangListboxContent: document.getElementById("dstLangListboxContent"),
          spellerPopup: document.getElementById("spellerPopup"),
          spellerPopupContent: document.getElementById("spellerPopupContent"),
          spellerButton: document.getElementById("spellerButton"),
          spellerListbox: document.getElementById("spellerListbox"),
          alternativesTooltip: document.getElementById("alternativesTooltip"),
          alternativesListbox: document.getElementById("alternativesListbox"),
          translationLayer: document.getElementById("translationLayer"),
          serviceDescription: document.getElementById("serviceDescription"),
          langSwitcherButton: document.getElementById("langSwitcherButton"),
          langSwitcherListbox: document.getElementById("langSwitcherListbox"),
          sourceTranslitButton: document.getElementById("sourceTranslitButton"),
          targetTranslitButton: document.getElementById("targetTranslitButton"),
          dropOverlay: document.getElementById("dropOverlay"),
          dropContent: document.getElementById("dropContent"),
          errorToast: document.getElementById("errorToast"),
          errorToastContent: document.getElementById("errorToastContent"),
          collectionsView: document.getElementById("collectionsWrapper"),
          collectionList: document.getElementById("collectionList"),
          collectionListContent: document.getElementById("collectionListContent"),
          topList: document.getElementById("topList"),
          subscribeTooltip: document.getElementById("subscribeTooltip"),
          recordsList: document.getElementById("recordsList"),
          recordsListContent: document.getElementById("recordsListContent"),
          createCollectionButton: document.getElementById("createCollectionButton"),
          collectionAddPopup: document.getElementById("collectionAddPopup"),
          collectionName: document.getElementById("collectionName"),
          collectionNameInput: document.getElementById("collectionNameInput"),
          collectionNameInput2: document.getElementById("collectionNameInput2"),
          collectionNameInput3: document.getElementById("collectionNameInput3"),
          addCollectionButton: document.getElementById("addCollectionButton"),
          collectionHeader: document.getElementById("collectionHeader"),
          collectionHeaderContent: document.getElementById("collectionHeaderContent"),
          collectionHeaderName: document.getElementById("collectionHeaderName"),
          collectionTumbler: document.getElementById("collectionTumbler"),
          collectionsToast: document.getElementById("collectionsToast"),
          collectionsPopupList: document.getElementById("collectionsPopupList"),
          collectionNewAddPopup: document.getElementById("collectionNewAddPopup"),
          collectionSearch: document.getElementById("collectionSearch"),
          collectionSearchInput: document.getElementById("collectionSearchInput"),
          shareCollectionTumbler: document.getElementById("shareCollectionTumbler"),
          collectionsNameEditPopup: document.getElementById("collectionsNameEditPopup"),
          recordMovePopup: document.getElementById("recordMovePopup"),
          recordMovePopupList: document.getElementById("recordMovePopupList"),
          recordCopyPopup: document.getElementById("recordCopyPopup"),
          recordCopyPopupList: document.getElementById("recordCopyPopupList"),
          shareCollection: document.getElementById("shareCollection"),
          shareCollectionContent: document.getElementById("shareCollectionContent"),
          shareCollectionInput: document.getElementById("shareCollectionInput"),
          shareCollectionCopy: document.getElementById("shareCollectionCopy"),
          selectAllButton: document.getElementById("selectAllButton"),
          examples: document.getElementById("examples"),
          examplesContent: document.getElementById("examplesContent"),
          wordsExampleTab: document.getElementById("wordsExampleTab"),
          popunder: document.getElementById("popunder"),
          popunderTooltip: document.getElementById("popunderTooltip"),
          selectTooltip: document.getElementById("selectTooltip"),
          dictionaryHeader: document.getElementById("dictionaryHeader"),
          dictionaryHeaderButton: document.getElementById("dictionaryHeaderButton"),
          distContainer: document.getElementById("distContainer"),
          historyRecent: document.getElementById("historyRecent"),
          idioms: document.getElementById("idioms"),
          idiomsPopup: document.getElementById("idiomsPopup"),
          relatedWords: document.getElementById("relatedWords"),
          declensions: document.getElementById("declensions")
        }, e.TEMPLATES = {
          empty: "{{}}",
          pin: h.getPinTemplate(),
          url: h.getUrlTemplate(),
          speller: h.getSpellerTemplate(),
          listbox: h.getListboxTemplate(),
          langTags: h.getLangTagsTemplate(),
          listbox2: h.getListboxTemplate2(),
          tablist: h.getTablistTemplate(),
          measurer: h.getMeasurerTemplate(),
          alignment: h.getAlignmentTemplate(),
          external: h.getExternalTemplate(),
          predictor: h.getPredictorTemplate(),
          dictionary: h.getDictionaryTemplate(),
          exampleListbox: h.getExampleListboxTemplate(),
          examples: h.getExamplesTemplate(),
          examplePopup: h.getExamplePopupTemplate(),
          translator: h.getTranslatorTemplate(),
          emojiValue: h.getEmojiValueTemplate(),
          collections: h.getCollectionsTemplate(),
          collectionHeader: h.getCollectionHeaderTemplate(),
          records: h.getRecordsTemplate(),
          collectionsPopupList: h.getCollectionsPopupListTemplate(),
          menu: h.getMenuTemplate(),
          collectionsToast: h.getCollectionsToastTemplate(),
          dictionaryHeaderButton: h.getDictionaryHeaderButtonTemplate()
        }, v.initMetrikas(e), e.ENABLE_COLLECTION && (v.initUserButton(e), e.SUBSCRIPTION_MENU_ITEMS = o.default.extend(e.SUBSCRIPTION_MENU_ITEMS, {
          subscribe: {
            icon: "add",
            title: e.LOCALIZATIONS.collectionSubscribe,
            action: "subscribe"
          }
        })), v.initUniproxy(e).initTTSPlayer(e).initSpeechRecognition(e), null === e.LANDING_TYPE ? (d.TranslateApplication.isHistoryAvailable() && (e.DEFAULT_TEXT || window.history.state || window.history.replaceState({}, ""), v.initHistory(e)), v.initDescription(e)) : e.LANDING_TYPE === e.LANDING_TYPES.text ? (e.SERVICE_DESCRIPTION = !0, e.CLCK_PATH = "web_desktop.landing.translate", d.TranslateApplication.isHistoryAvailable() && (e.DEFAULT_TEXT || window.history.state || window.history.replaceState({}, ""), v.initHistory(e)), v.initDescription(e)) : e.LANDING_TYPE === e.LANDING_TYPES.dict && (e.DICT_PAGE_DESCRIPTION = !0, e.CLCK_PATH = "web_desktop.landing.dict", d.TranslateApplication.isHistoryAvailable() && (window.history.replaceState({
          trText: e.DEFAULT_TEXT,
          srcLang: e.DEFAULT_SRC_LANG,
          dstLang: e.DEFAULT_DST_LANG
        }, ""), v.getModel().once("change:translation", (function () {
          v.initHistory(e)
        }))), v.initDescriptionDict(e)), e.USE_FAKEAREA && v.initSourceTranslit(e), v.initNewLayout(e).initTooltip(e).initToast(e).initTableau(e).initTabsToggle(e).initUrlView(e).initCopying(e).initOptions(e).initResizer(e).initKeyboard(e).initAlignment(e).registerModule(m.IdiomsModule).initTranslator(e).initAutoSpeller(e).initLangHistory(e).initTextCounter(e).initShareButton(e).initExternalView(e).initAlternatives(e).initTargetTranslit(e).initComplaintPopup(e).initTranslationVote(e).initTextArea(e).initLangs(e).registerModule(g.HistoryModule).initFileDrop(e).initTypingMetrics(e).initAccessibility(), e.ENABLE_NEW_DESIGN && v.registerModule(_.RelatedWordsModule), e.ENABLE_SUGGESTIONS ? v.initSuggestions(e) : v.initPredictor(e), e.ENABLE_LANG_SWITCHERS && v.initLangSwitcher(e), e.ENABLE_DIST_BANNER && v.initDistBanner(e), u.Database.isSupported() && (l.CollectionModel.generateColorRules(document.getElementById("collectionColors"), "collection-color"), v.initCollections(e)), (0, s.rumTimeEnd)(s.RUM_COUNTERS.APP_INIT_DURATION)
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DesktopTranslateApplication = void 0, n(22), n(14), n(79);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(188),
        s = n(176),
        a = n(124),
        c = n(422),
        u = n(423),
        l = n(240),
        d = n(424),
        f = n(426),
        p = n(292),
        h = n(427),
        g = n(428),
        m = n(429),
        _ = n(430),
        v = n(431),
        E = n(434),
        T = n(435),
        y = n(436),
        S = n(437),
        b = n(438),
        O = n(439),
        C = n(441),
        P = n(442),
        I = n(444),
        L = n(445),
        R = n(446),
        A = n(449),
        x = n(450),
        N = n(451),
        w = n(454),
        D = n(455),
        M = n(456),
        V = n(457),
        k = n(458),
        U = n(459),
        H = n(460),
        B = n(461),
        j = n(462),
        F = n(325),
        G = n(293),
        Y = n(463),
        W = n(328),
        K = n(464),
        X = n(465),
        q = n(466),
        z = n(327),
        J = n(205);
      var Q = a.TranslateApplication.extend({
        initLangs: r.default.bindInit(d.initLangs),
        initTooltip: r.default.bindInit(f.initTooltip),
        initToast: r.default.bindInit(p.initToast),
        initTableau: r.default.bindInit(h.initTableau),
        initTabsToggle: r.default.bindInit(g.initTabsToggle),
        initUrlView: r.default.bindInit(m.initUrlView),
        initResizer: r.default.bindInit(_.initResizer),
        initAutoSpeller: r.default.bindInit(v.initAutoSpeller),
        initOptions: r.default.bindInit(E.initOptions),
        initHistory: r.default.bindInit(T.initHistory),
        initKeyboard: r.default.bindInit(y.initKeyboard),
        initNewLayout: r.default.bindInit(S.initNewLayout),
        initUserButton: r.default.bindInit(b.initUserButton),
        initSpeechRecognition: r.default.bindInit(O.initSpeechRecognition),
        initPredictor: r.default.bindInit(C.initPredictor),
        initSuggestions: r.default.bindInit(q.initSuggestions),
        initCollections: r.default.bindInit(P.initCollections),
        initCopying: r.default.bindInit(I.initCopying),
        initAlignment: r.default.bindInit(L.initAlignment),
        initSourceTranslit: r.default.bindInit(A.initSourceTranslit),
        initTargetTranslit: r.default.bindInit(x.initTargetTranslit),
        initTranslator: r.default.bindInit(N.initTranslator),
        initComplaintPopup: r.default.bindInit(w.initComplaintPopup),
        initLangHistory: r.default.bindInit(D.initLangHistory),
        initShareButton: r.default.bindInit(M.initShareButton),
        initExternalView: r.default.bindInit(V.initExternalView),
        initAlternatives: r.default.bindInit(R.initAlternatives),
        initTranslationVote: r.default.bindInit(k.initTranslationVote),
        initTextCounter: r.default.bindInit(U.initTextCounter),
        initDescription: r.default.bindInit(H.initDescription),
        initDescriptionDict: r.default.bindInit(B.initDescriptionDict),
        initLangSwitcher: r.default.bindInit(j.initLangSwitcher),
        initTextArea: r.default.bindInit(F.initTextArea),
        initFileDrop: r.default.bindInit(G.initFileDrop),
        initMetrikas: r.default.bindInit(Y.initMetrikas),
        initTTSPlayer: r.default.bindInit(W.initTTSPlayer),
        initUniproxy: r.default.bindInit(K.initUniproxy),
        initDistBanner: r.default.bindInit(X.initDistBanner),
        initTypingMetrics: r.default.bindInit(z.initTypingMetrics),
        initAccessibility: r.default.bindInit(J.initAccessibility),
        init: function () {
          var e = this,
            t = new s.Storage({}, {
              name: "yTrSettings"
            }),
            n = this.getView(),
            i = this.getModel();
          this._settings = t, this._router = new o.Router, t.on("change", (function (t, n, i) {
            switch (t) {
              case "auto":
                e.emit("optionsChanged", t, n);
                break;
              case "textboxHeight":
                e.emit("resizerResize", i)
            }
          })), t.isOptionEnabled = function (e) {
            return (this.hasProperty("disabledOptions") ? this.getProperty("disabledOptions").split(";") : []).indexOf(e) < 0
          }, n.on("tap", (function (t) {
            var n = this.getClosest(t.target, (function (e) {
              return e.hasAttribute("data-external-name")
            }));
            n && e.emit("externalClick", r.default.getAttribute(n, "data-external-name"))
          })).on("copy", (function (e) {
            if ("emj" !== i.getProperty("dstLang")) {
              var t = window.getSelection().toString(),
                n = e.clipboardData || window.clipboardData;
              t && n && !1 !== n.setData("Text", t) && r.default.preventEvent(e)
            }
          })).bindDOMEvents("copy"), i.on("change", (function (t, n, i) {
            switch (t) {
              case "text":
                switch (i.sender) {
                  case "dictionary":
                    e.emit("dictLinkClick", n, i);
                    break;
                  case "synonyms":
                    e.emit("synonymsInsert", n, i);
                    break;
                  case "favourites":
                    e.emit("favInsert")
                }
                break;
              case "srcLang":
              case "dstLang":
                switch (i.sender) {
                  case "langHistory":
                  case "langSelect":
                    e.emit("langChanged", t, i)
                }
                break;
              case "complaint":
                e.emit("dictComplaintToggle", n, i);
                break;
              case "examplesComplaint":
                n && e.emit("examplesComplaintStart", i)
            }
          })), this.on("resize", (function () {
            var e = (0, l.isScreenNarrow)(window.config);
            i.setProperty({
              narrowScreen: e
            })
          })), this.trackPerformance()
        },
        getConfig: function () {
          return this._config
        },
        getSpellerSavedWords: function () {
          var e = this._settings.getProperty("savedSpellerItems");
          return e ? e.split(";") : []
        },
        hasSpellerSavedWord: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getModel().getProperty("srcLang"),
            n = this.getSpellerSavedWords();
          return -1 !== n.indexOf(t + ":" + e)
        },
        getTranslatorView: function () {
          if (!this._translatorView) {
            var e = window.config;
            this._translatorView = new c.TranslatorView({
              element: e.ELEMENTS.textbox2,
              template: e.TEMPLATES.translator,
              partials: {
                value: e.TEMPLATES.emojiValue
              },
              activateFocus: !0,
              contentElement: e.ELEMENTS.translation
            })
          }
          return this._translatorView
        },
        getIdiomTextElement: function () {
          return document.getElementById("idiomText")
        },
        getDictionaryModel: function () {
          var e = this;
          if (!this._dictionaryModel) {
            var t = this.getConfig(),
              n = this.getSettings();
            this._dictionaryModel = new u.DesktopDictionaryMultipleModel({
              ui: t.UI_LANG,
              srv: t.SRV,
              sid: t.SID,
              url: t.DICTIONARY_URL,
              getLangDir: function () {
                return e.getLangsPair()
              },
              settings: n,
              constants: {
                disableDictionary: t.DISABLE_DICTIONARY,
                dictionaryLangs: t.DICTIONARY_LANGS,
                maxDictQuery: t.MAX_DICT_QUERY,
                maxDictWordsCount: t.MAX_DICT_WORD_COUNT
              }
            })
          }
          return this._dictionaryModel
        }
      });
      t.DesktopTranslateApplication = Q
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslatorView = void 0, n(14), n(79), n(35), n(126), n(3), n(18), n(22), n(52);
      var i = n(69),
        r = i.TemplateView.extend({
          getSelectedText: function (e) {
            var t = {
                src: "",
                dst: ""
              },
              n = window.getSelection();
            if (n && n.anchorNode && n.focusNode) {
              var i = n.anchorNode,
                r = n.focusNode;
              i === r && "translation" === i.id && (t.dst = e), t.src = n.toString(), i.compareDocumentPosition(r) === Node.DOCUMENT_POSITION_PRECEDING && (r = i, i = n.focusNode);
              var o = [this.getAlign(i.parentNode)];
              if (i !== r)
                for (i = i.parentNode; i && !i.contains(r);) i = i.nextElementSibling, o.push(this.getAlign(i));
              o.filter((function (e, t, n) {
                return e && n.findIndex((function (t) {
                  return t && t[0] === e[0] && t[1] === e[1]
                })) === t
              })).forEach((function (n, i, r) {
                t.dst += e.slice(n[0], n[1]), i !== r.length - 1 && (t.dst += " ")
              }))
            }
            return t
          },
          getAlign: function (e) {
            var t = this.getClosest(e, (function (e) {
              return e.hasAttribute && e.hasAttribute("data-align")
            }), !0);
            return t ? t.getAttribute("data-align").split(":").map(Number) : null
          },
          getOffsetHeight: function () {
            var e = this.getContentElement("[data-complaint-type=fullTextTranslation]");
            return e ? e.offsetHeight : 0
          }
        });
      t.TranslatorView = r
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DesktopDictionaryMultipleModel = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(268).DictionaryMultipleModel.extend({
        init: function (e) {
          var t = e.getLangDir,
            n = e.config,
            i = e.settings,
            r = e.constants;
          this.getLangDir = t, this.config = n, this.settings = i, this.constants = r, this.setValidator(this.getDefaultValidators())
        },
        getDefaultValidators: function () {
          var e = this.settings,
            t = this.constants,
            n = t.disableDictionary,
            i = t.dictionaryLangs,
            o = t.maxDictQuery,
            s = t.maxDictWordsCount;
          return {
            text: function (t) {
              return !n && (t && !/[\n\r]/.test(t) && t.length <= o && r.default.getValueTokens(t).length <= s && e.isOptionEnabled("dictionary") && !r.default.isUrl(t) && r.default.hasAlpha(t))
            },
            srcLang: function (e) {
              var t = this.getProperty("dstLang");
              return e !== t && (r.default.hasProperty(i, e + "-" + t) || r.default.hasProperty(i, e + "-" + e))
            },
            dstLang: function (e) {
              var t = this.getProperty("srcLang");
              return t !== e && (r.default.hasProperty(i, t + "-" + e) || r.default.hasProperty(i, t + "-" + t))
            }
          }
        }
      });
      t.DesktopDictionaryMultipleModel = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initLangs = void 0, n(14), n(13), n(23), n(18), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(124),
        a = n(93),
        c = n(425),
        u = n(81),
        l = n(94),
        d = n(62);
      t.initLangs = function (e) {
        var t = this,
          n = this._settings,
          i = this.getModel(),
          f = new o.TouchView({
            element: e.ELEMENTS.srcLangButton,
            DOMEvents: "keydown keypress",
            activateFocus: !0
          }),
          p = new o.TouchView({
            element: e.ELEMENTS.dstLangButton,
            DOMEvents: "keydown keypress",
            activateFocus: !0
          }),
          h = e.DEFAULT_SRC_LANG || !e.DEFAULT_TEXT && n.getProperty("srcLang") || s.TranslateApplication.DEFAULT_SRC_LANG,
          g = e.DEFAULT_DST_LANG || !e.DEFAULT_TEXT && n.getProperty("dstLang") || (e.UI_LANG !== s.TranslateApplication.DEFAULT_SRC_LANG ? e.UI_LANG : s.TranslateApplication.DEFAULT_DST_LANG),
          m = new a.ListboxPresenter({
            view: new c.ListboxViewKB({
              element: e.ELEMENTS.srcLangListbox,
              template: e.TEMPLATES.listbox2,
              partials: {
                items: e.TEMPLATES.listbox,
                extras: e.TEMPLATES.langTags
              },
              contentElement: e.ELEMENTS.srcLangListboxContent,
              stopDefaultAction: !0,
              debounceRendering: !0
            }),
            model: new u.ListboxModel({}, {
              validators: {
                value: function (t) {
                  return r.default.hasProperty(e.TRANSLATOR_LANGS, t)
                }
              }
            })
          }),
          _ = new a.ListboxPresenter({
            view: new c.ListboxViewKB({
              element: e.ELEMENTS.dstLangListbox,
              template: e.TEMPLATES.listbox2,
              partials: {
                items: e.TEMPLATES.listbox,
                extras: e.TEMPLATES.langTags
              },
              contentElement: e.ELEMENTS.dstLangListboxContent,
              stopDefaultAction: !0,
              debounceRendering: !0
            }),
            model: new u.ListboxModel({}, {
              validators: {
                value: function (t) {
                  return r.default.hasProperty(e.TRANSLATOR_LANGS, t)
                }
              }
            })
          }),
          v = m.getView(),
          E = _.getView();
        return this.on("resize", (function () {
          v.setVisible(!1), E.setVisible(!1)
        })).onFocusedElementActivation((function (e, t) {
          e === f.getElement() ? (f.emit("tap"), r.default.preventEvent(t)) : e === p.getElement() && (p.emit("tap"), r.default.preventEvent(t))
        })), i.on("change", (function (e, t) {
          switch (e) {
            case "srcLang":
              m.setValue(t);
              break;
            case "dstLang":
              _.setValue(t)
          }
        })), f.on("tap", (function () {
          this.setFocus(!0), v.setVisible()
        })).on("keydown", (function (e) {
          var t;
          if (v.isVisible()) switch (e.keyCode) {
            case l.InputView.keys.UP:
            case l.InputView.keys.LEFT:
              r.default.preventEvent(e), v.highlightPrev();
              break;
            case l.InputView.keys.DOWN:
            case l.InputView.keys.RIGHT:
              r.default.preventEvent(e), v.highlightNext();
              break;
            case l.InputView.keys.ENTER:
              (t = v.getHighlightedElement()) && (r.default.preventEvent(e), m.setValue(r.default.getAttribute(t, d.ListboxView.VALUE_ATTR)));
              break;
            case l.InputView.keys.ESCAPE:
              v.setVisible(!1)
          }
        })).on("keypress", (function (e) {
          e.which && v.isVisible() && (r.default.preventEvent(e), v.highlightByText(String.fromCharCode(e.which)))
        })).on("stateChanged:focused", (function (e) {
          e || v.setVisible(!1)
        })), p.on("tap", (function () {
          this.setFocus(!0), E.setVisible()
        })).on("keydown", (function (e) {
          var t;
          if (E.isVisible()) switch (e.keyCode) {
            case l.InputView.keys.UP:
            case l.InputView.keys.LEFT:
              E.highlightPrev();
              break;
            case l.InputView.keys.DOWN:
            case l.InputView.keys.RIGHT:
              E.highlightNext();
              break;
            case l.InputView.keys.ENTER:
              (t = E.getHighlightedElement()) && (r.default.preventEvent(e), _.setValue(r.default.getAttribute(t, d.ListboxView.VALUE_ATTR)));
              break;
            case l.InputView.keys.ESCAPE:
              E.setVisible(!1)
          }
        })).on("keypress", (function (e) {
          e.which && E.isVisible() && (r.default.preventEvent(e), E.highlightByText(String.fromCharCode(e.which)))
        })).on("stateChanged:focused", (function (e) {
          e || E.setVisible(!1)
        })), m.prepareData = function (t) {
          var n = this.getValue(),
            r = {
              cols: []
            },
            o = e.MAX_COL_LENGTH,
            s = null,
            a = Object.keys(t).map((function (i) {
              var r = !1,
                o = {},
                a = t[i];
              return (e.TRANSLATOR_LANGS_TAGS[i] || []).forEach((function (e) {
                return o[e] = !0
              })), s !== a.charAt(0) && (s = a.charAt(0), r = !0), {
                tags: o,
                text: a,
                lead: r,
                value: i,
                selected: i === n
              }
            }));
          for (i.getProperty("narrowScreen") && e.MAX_COL_LENGTH_NARROW_SCREEN && (o = e.MAX_COL_LENGTH_NARROW_SCREEN); a.length;) r.cols.push({
            items: a.splice(0, o)
          });
          return r
        }, _.prepareData = m.prepareData, m.on("itemSelected", (function () {
          v.setVisible(!1)
        })).on("valueChanged", (function (t) {
          n.setProperty("srcLang", t), i.setProperty("srcLang", t, {
            sender: "langSelect"
          }), f.setContent(e.TRANSLATOR_LANGS[t], {
            asText: !0
          })
        })), _.on("itemSelected", (function () {
          E.setVisible(!1)
        })).on("valueChanged", (function (t) {
          n.setProperty("dstLang", t), i.setProperty("dstLang", t, {
            sender: "langSelect"
          }), p.setContent(e.TRANSLATOR_LANGS[t], {
            asText: !0
          })
        })), v.on("stateChanged:hidden", (function (e) {
          e || (t.emit("langSelectOpen", m.toJSON()), this.setPosition(f.getRect(), !0).highlightByValue(m.getValue())), f.setState("expanded", !e)
        })), E.on("stateChanged:hidden", (function (e) {
          e || (t.emit("langSelectOpen", _.toJSON()), this.setPosition(p.getRect(), !0).highlightByValue(_.getValue())), p.setState("expanded", !e)
        })), i.onChange("narrowScreen", (function () {
          m.emit("updateView"), _.emit("updateView")
        })), m.setItems(e.TRANSLATOR_LANGS).setValue(h), _.setItems(e.TRANSLATOR_LANGS).setValue(g), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.ListboxViewKB = void 0, n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(62),
        s = n(11);
      var a = o.ListboxView.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._elements = [], this.resetText(), this.resetText = r.default.debounce(this.resetText, e.textResetDelay || 1e3), this.on("contentChanged", (function () {
            this._elements = this.getContentElement("[" + o.ListboxView.VALUE_ATTR + "]", !0)
          })).on(s.TouchView.eventTypes.OVER, (function (e) {
            var t = this.getClosest(e.target, (function (e) {
              return e.hasAttribute(o.ListboxView.VALUE_ATTR)
            }), !0);
            this.highlightElement(t)
          })).bindDOMEvents(s.TouchView.eventTypes.OVER)
        },
        resetText: function () {
          return this._text = "", this
        },
        getElements: function () {
          return r.default.slice(this._elements)
        },
        highlightPrev: function () {
          var e = this.getElements(),
            t = e.indexOf(this.getHighlightedElement()) - 1;
          return t < 0 && (t = e.length - 1), this.highlightElement(e[t])
        },
        highlightNext: function () {
          var e = this.getElements(),
            t = (e.indexOf(this.getHighlightedElement()) + 1) % e.length;
          return this.highlightElement(e[t])
        },
        highlightByText: function (e) {
          var t, n, i = this.getElements();
          for (this._text += e.toLowerCase(), t = 0, n = i.length; t < n; t++)
            if (0 === i[t].textContent.toLowerCase().indexOf(this._text)) {
              this.highlightElement(i[t]);
              break
            } return this.resetText()
        },
        highlightByValue: function (e) {
          var t, n, i = this.getElements();
          for (t = 0, n = i.length; t < n; t++)
            if (i[t].getAttribute(o.ListboxView.VALUE_ATTR) === e) {
              this.highlightElement(i[t]);
              break
            } return this
        },
        highlightElement: function (e) {
          var t = this.getHighlightedElement();
          return t && t.removeAttribute(a.HIGHLIGHT_ATTR), e && e.setAttribute(a.HIGHLIGHT_ATTR, !0), this
        },
        getHighlightedElement: function () {
          return this.getContentElement("[" + a.HIGHLIGHT_ATTR + "]")
        }
      }, {
        HIGHLIGHT_ATTR: "data-highlighted"
      });
      t.ListboxViewKB = a
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTooltip = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(241);
      t.initTooltip = function (e) {
        var t = new o.TooltipView({
          element: e.ELEMENTS.tooltip,
          targetView: this.getView()
        });
        return this.on("rubberScrolled", r.default.throttle((function () {
          t.setVisible(!1)
        }), 1e3)), this.getModel().onSet("tooltip", (function (e, n) {
          t.setTooltip(e, n)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTableau = void 0;
      var i = n(11),
        r = n(171),
        o = n(172);
      t.initTableau = function (e) {
        var t, n = new i.TouchView({
            element: e.ELEMENTS.logo
          }),
          s = new i.TouchView({
            element: e.ELEMENTS.header
          }),
          a = new r.TableauPresenter({
            view: new i.TouchView({
              element: e.ELEMENTS.tableau,
              contentElement: e.ELEMENTS.tableauFrame,
              hideAfterTransition: !0
            }),
            model: new o.TableauModel({
              url: e.TABLEAU_URL,
              lang: e.UI_LANG,
              domain: e.DOMAIN,
              preset: e.TABLEAU_PRESET,
              service: "translate"
            })
          }),
          c = this.getModel(),
          u = function (t) {
            t.length <= e.MAX_SHARE_TEXT_LENGTH && a.setText(t)
          },
          l = a.getView();
        return a.on("ready", (function () {
          n.on(i.TouchView.eventTypes.OUT, (function () {
            clearTimeout(t)
          })).on(i.TouchView.eventTypes.MOVE, (function () {
            clearTimeout(t), t = setTimeout((function () {
              l.setVisible(!0)
            }), e.TABLEAU_DELAY)
          })).on(i.TouchView.eventTypes.START, (function () {
            clearTimeout(t)
          })).bindDOMEvents([i.TouchView.eventTypes.OUT, i.TouchView.eventTypes.MOVE]), s.on("mouseleave", (function () {
            clearTimeout(t), l.setVisible(!1)
          })).bindDOMEvents("mouseleave"), c.on("change:text", u), l.setState("hidden2", !0), u(c.getProperty("text"))
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "initTabsToggle", {
        enumerable: !0,
        get: function () {
          return i.initTabsToggle
        }
      });
      var i = n(242)
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initUrlView = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(69);
      t.initUrlView = function (e) {
        var t = new o.TemplateView({
            element: e.ELEMENTS.url,
            template: e.TEMPLATES.url
          }),
          n = this.getView(),
          i = this.getModel();
        return this.on("action:translatePage", (function () {
          t.isEnabled() && (this.emit("translatePage"), t.getElement().submit())
        })), t.on("stateChanged:hidden", (function (e) {
          n.setState("url", !e)
        })), i.on("change", (function (n, i) {
          var o;
          switch (n) {
            case "text":
            case "srcLang":
            case "dstLang":
              if ((o = this.toJSON()).text = r.default.trim(o.text), !o.text) {
                t.setVisible(!1);
                break
              }
              r.default.isUrl(o.text) && (this.setProperty({
                trText: o.text,
                translation: o.text
              }), t.renderData({
                ui: e.UI_LANG,
                url: o.text,
                lang: o.srcLang + "-" + o.dstLang
              }).setVisible(!0).setEnabled(!r.default.hasProperty(e.INVALID_URL_LANGS, o.srcLang) && !r.default.hasProperty(e.INVALID_URL_LANGS, o.dstLang)));
              break;
            case "translation":
              i && !r.default.isUrl(i) && t.setVisible(!1)
          }
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initResizer = void 0;
      var i = n(11),
        r = n(69);
      t.initResizer = function (e) {
        var t = this,
          n = new r.TemplateView({
            element: e.ELEMENTS.translationLayer,
            template: e.TEMPLATES.measurer
          }),
          o = this.getView(),
          s = this.getModel(),
          a = this._settings,
          c = new i.TouchView({
            element: e.ELEMENTS.resizer,
            stopDefaultAction: !0
          }),
          u = new r.TemplateView({
            element: e.ELEMENTS.textLayer,
            template: e.TEMPLATES.measurer
          }),
          l = o.getContentElement("[data-resizer-spacer]"),
          d = o.getContentElement("[data-resizer-target]"),
          f = function () {
            var e = Math.max(u.getContentElement().clientHeight, n.getContentElement().clientHeight);
            d.style.height = e + "px", o.setState("autoheight", d.clientHeight >= e)
          },
          p = function (e) {
            switch (e) {
              case "longtext":
              case "keyboard":
                f()
            }
          },
          h = function (e, t) {
            switch (e) {
              case "text":
                u.renderData({
                  text: t,
                  rightText: this.getProperty("sourceTranslit")
                });
                break;
              case "sourceTranslit":
                u.renderData({
                  text: this.getProperty("text"),
                  rightText: t
                });
                break;
              case "targetTranslit":
                n.renderData({
                  text: this.getProperty("translation"),
                  rightText: t
                });
                break;
              case "translation":
              case "userTranslation":
                n.renderData({
                  text: t,
                  rightText: this.getProperty("targetTranslit")
                })
            }
          },
          g = function (e) {
            var i = e ? "on" : "off";
            t[i]("resize", f), t[i]("containerHeightChanged", f), o[i]("stateChanged", p), s[i]("change", h), c.setVisible(!e), u[i]("contentChanged", f), n[i]("contentChanged", f)
          };
        return this.on("optionsChanged", (function (e, t) {
          "autoheight" === e && (g(t), t ? (u.renderData({
            text: s.getProperty("text"),
            rightText: s.getProperty("sourceTranslit")
          }), n.renderData({
            text: s.getProperty("translation"),
            rightText: s.getProperty("targetTranslit")
          })) : o.setState("autoheight", !1))
        })).on("idiomsRendered", (function (e) {
          d.style.paddingBottom = "".concat(e, "px")
        })), o.bindDOMEvents(i.TouchView.eventTypes.MOVE), c.on(i.TouchView.eventTypes.START, (function (e) {
          var t = e.clientY,
            n = d.clientHeight,
            r = l.clientHeight,
            s = function (e) {
              d.style.height = Math.max(0, Math.min(100, 100 / r * (e.clientY + n - t))) + "%"
            },
            c = function e() {
              o.off(i.TouchView.eventTypes.END, e).off(i.TouchView.eventTypes.MOVE, s).off(i.TouchView.eventTypes.CANCEL, e), d.style.height && a.setProperty("textboxHeight", d.style.height, {
                oldHeight: n,
                newHeight: d.clientHeight,
                mainHeight: r
              })
            };
          o.on(i.TouchView.eventTypes.END, c).on(i.TouchView.eventTypes.MOVE, s).on(i.TouchView.eventTypes.CANCEL, c)
        })), a.isOptionEnabled("autoheight") ? g(!0) : a.hasProperty("textboxHeight") && (d.style.height = a.getProperty("textboxHeight")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initAutoSpeller = void 0, n(3), n(91), n(18);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(432),
        s = n(69),
        a = n(433),
        c = n(11),
        u = n(62),
        l = n(93),
        d = n(81);
      t.initAutoSpeller = function (e) {
        var t, n = this,
          i = this._settings,
          f = this.getView(),
          p = this.getModel(),
          h = new o.SpellerPresenter({
            view: new s.TemplateView({
              element: e.ELEMENTS.speller,
              template: e.TEMPLATES.speller
            }),
            model: new a.SpellerModel({
              sid: e.SID,
              srv: e.SRV,
              url: e.SPELLER_URL,
              options: a.SpellerModel.options.IGNORE_URLS + a.SpellerModel.options.IGNORE_CAPITALIZATION
            }, {
              validators: {
                text: function (t) {
                  return t && r.default.trim(t) && t.length <= e.MAX_SPELLER_LENGTH && i.isOptionEnabled("speller")
                },
                lang: function (t) {
                  return r.default.hasProperty(e.SPELLER_LANGS, t)
                }
              }
            })
          }),
          g = h.getView(),
          m = function () {
            g.scrollTo(p.getProperty("textScrollY") * g.getScrollInfo().maxTop / 100)
          },
          _ = new c.TouchView({
            element: e.ELEMENTS.spellerButton
          }),
          v = new u.ListboxView({
            element: e.ELEMENTS.spellerPopup,
            template: e.TEMPLATES.empty,
            contentElement: e.ELEMENTS.spellerPopupContent,
            stopDefaultAction: !0
          }),
          E = new l.ListboxPresenter({
            view: new u.ListboxView({
              element: e.ELEMENTS.spellerListbox,
              template: e.TEMPLATES.listbox,
              stopDefaultAction: !0
            }),
            model: new d.ListboxModel
          }),
          T = E.getView(),
          y = function () {
            v.setVisible(!1), T.setVisible(!1)
          },
          S = function (e, t) {
            var r = n.getSpellerSavedWords(),
              o = (t || p.getProperty("srcLang")) + ":" + e,
              s = r.indexOf(o);
            return s < 0 ? r.push(o) : r.splice(s, 1), i.setProperty("savedSpellerItems", r.join(";"))
          };
        return this.on("textTap", (function (e) {
          var r, o, s, a, c = h.getData();
          for (r = 0, o = c.length; r < o; r++)
            if (c[r].pos < e && c[r].pos + c[r].len > e) {
              s = c[r];
              break
            } if (s && (a = i.getProperty("autospeller") && !n.hasSpellerSavedWord(s.word), n.emit("spellerClick", s, s.s.length && a)), t = s && s.s.length ? s : null, y(), t) {
            var u = g.getContentElement('[data-index="' + r + '"]');
            if (u) {
              var l = u.getBoundingClientRect();
              a ? (v.setContent(s.s[0]), v.setPosition(l, !0), v.setVisible(!0)) : (E.setItems(s.s), T.setPosition(l, !0), T.setVisible(!0))
            }
          }
        })).on("action:spellerReturn", (function () {
          if (t) {
            n.emit("spellerDecline", t);
            var e = h.getData();
            e.some((function (e) {
              return !(!e.s || !e.s.length) && t.word === e.word
            })) && S(t.word), n.updateTrText(), h.setData(e), v.setVisible(!1)
          }
        })).on("textFocus", (function (e) {
          e || y()
        })).on("textKeydown", y).on("optionsChanged", (function (t, n) {
          if ("speller" === t) {
            var r = n && e.AUTO_SPELLER_LANGS[p.getProperty("srcLang")];
            _.setEnabled(r), i.setProperty("autospeller", r && _.hasState("active")), n ? h.setText(p.getProperty("text")).requestData() : h.setText("")
          }
        })).on("predictorEndOfWord", (function () {
          h.requestData()
        })).bindFocusActivation(_), h.on("response", (function () {
          i.getProperty("autospeller") && p.setProperty("trText", r.default.trim(p.getProperty("text")), {
            sender: "autoSpeller"
          })
        })).on("dataChanged", (function (e) {
          p.setProperty("spellerData", e)
        })), h.prepareData = function (e) {
          var t = 0,
            r = {
              items: []
            };
          return e.data ? (JSON.parse(e.data).forEach((function (o, s) {
            var a;
            r.items.push({
              value: e.text.slice(t, o.pos)
            }), t = o.pos + o.len, a = n.hasSpellerSavedWord(o.word) || !i.getProperty("autospeller") ? "ready" : "changed", r.items.push({
              type: o.s.length ? a : "empty",
              index: s,
              value: e.text.slice(o.pos, t)
            })
          })), r.items.push({
            value: e.text.slice(t)
          }), r) : r
        }, f.on("stateChanged:longtext", m), p.on("change", (function (t, r, o) {
          switch (t) {
            case "text":
              h.setText(r).syncData(r.length - o.oldValue.length), "cut" !== o.reason && "paste" !== o.reason || h.requestData();
              break;
            case "trText":
              "autoSpeller" === o.sender && n.emit("autocorrect");
              break;
            case "srcLang":
              h.setLang(r), _.setEnabled(e.AUTO_SPELLER_LANGS[r] && i.isOptionEnabled("speller"));
              break;
            case "textScrollY":
              m(), y()
          }
        })), p.setFilter("trText", (function (e) {
          var t = 0,
            r = e,
            o = p.getProperty("text").search(/\S/),
            s = h.getData();
          return s && i.getProperty("autospeller") ? (s.forEach((function (e) {
            if (e.s && e.s.length && !n.hasSpellerSavedWord(e.word)) {
              var i = e.s[0],
                s = t + e.pos - o,
                a = t + e.pos + e.len - o;
              r = r.slice(0, s) + i + r.slice(a), t += i.length - e.len
            }
          })), r) : r
        })), i.on("change:autospeller", (function (e) {
          p.setProperty("trText", r.default.trim(p.getProperty("text")), {
            sender: e ? "autoSpeller" : "speller"
          }), h.setData(h.getData())
        })).setProperty("savedSpellerItems", ""), g.on("contentChanged", m), _.on("tap", (function () {
          var e = this.hasState("active");
          this.setState("active", !e), n.emit("autoSpellerClick", !e)
        })).on("stateChanged", (function (e) {
          switch (e) {
            case "active":
            case "disabled":
              i.setProperty("autospeller", this.hasState("active") && this.isEnabled())
          }
        })).setState("active", i.isOptionEnabled("speller") && (!i.hasProperty("autospeller") || i.getProperty("autospeller"))), v.on("tap", (function (e) {
          var i;
          e.target === this.getContentElement() && (i = p.getProperty("text"), t && (n.emit("spellerApply", {
            item: t,
            accept: !0,
            replacement: t.s[0]
          }), i = i.slice(0, t.pos) + t.s[0] + i.slice(t.pos + t.len), p.setProperty("text", i, {
            sender: "speller",
            caret: t.pos + t.s[0].length
          })), v.setVisible(!1))
        })), E.on("itemSelected", (function (e) {
          var i = p.getProperty("text");
          t && (n.emit("spellerApply", {
            item: t,
            replacement: e
          }), i = i.slice(0, t.pos) + e + i.slice(t.pos + t.len), p.setProperty("text", i, {
            sender: "speller",
            caret: t.pos + e.length
          }), S(t.word)), T.setVisible(!1)
        })), E.prepareData = function (e) {
          var t = {};
          return e && (t.items = e.map((function (e) {
            return {
              text: e,
              value: e
            }
          }))), t
        }, this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpellerPresenter = void 0, n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      var o = n(32).Presenter.extend({
        init: function () {
          var e = this,
            t = this.getView(),
            n = this.getModel();
          this.requestData = r.default.debounce(o.prototype.requestData, 200), n.on("change", (function (t) {
            switch (t) {
              case "lang":
              case "options":
                e.requestData()
            }
          })).on("invalid", (function () {
            t.setContent(""), this.setProperty("data", "")
          })).on("response", (function (t) {
            (this.setProperty("data", t), t) && (JSON.parse(t).length && e.emit("response"))
          })).on("set:data", (function (n) {
            e.emit("dataChanged", n), n && t.renderData(e.prepareData(this.toJSON()))
          }))
        },
        getData: function () {
          var e = this.getModel().getProperty("data");
          return e && (e = JSON.parse(e)), e
        },
        setData: function (e) {
          return this.getModel().setProperty("data", JSON.stringify(e || [])), this
        },
        setText: function (e) {
          return this.getModel().setProperty("text", e), this
        },
        setLang: function (e) {
          return this.getModel().setProperty("lang", e), this
        },
        syncData: function (e) {
          var t, n, i, o, s, a, c = this.getData(),
            u = this.getModel().getProperty("text"),
            l = [],
            d = 0,
            f = [];
          if (!(n = c.length)) return this;
          for (t = 0; t < n && (i = c[t].pos, o = c[t].len, s = u.slice(i, i + o), a = u.charAt(i + o), s === c[t].word && !r.default.isAlphaOrDigit(a)); t++) l.push(c[t]), c[t] = null, d = i;
          for (; n-- && c[n] && (i = c[n].pos + e, o = c[n].len, s = u.slice(i, i + o), a = u.charAt(i - 1), i > d && s === c[n].word && !r.default.isAlphaOrDigit(a));) c[n].pos = i, f.push(c[n]);
          return this.setData(l.concat(f.reverse()))
        },
        hasOption: function (e) {
          return (this.getModel().getProperty("options") & e) === e
        },
        setOption: function (e, t) {
          var n = this.getModel(),
            i = n.getProperty("options");
          return Boolean(t) === this.hasOption(e) || (i += e * (t ? 1 : -1), n.setProperty("options", i)), this
        },
        requestData: function () {
          return this.getModel().requestData(), this
        }
      });
      t.SpellerPresenter = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SpellerModel = void 0;
      var i = n(174),
        r = n(59),
        o = i.SyncModel.extend({
          getData: function () {
            var e = this.toJSON();
            return {
              text: e.text,
              lang: e.lang,
              options: e.options
            }
          },
          getParams: function () {
            var e = this.toJSON();
            return {
              sid: e.sid,
              srv: e.srv
            }
          },
          getDefaults: function () {
            return {
              url: "/",
              srv: "",
              sid: this.getId(),
              text: "",
              lang: "",
              data: "",
              options: 0
            }
          },
          requestData: function () {
            var e = this,
              t = new r.HTTPRequest(this.getProperty("url"));
            return this.abort(), this.isValid() ? this.setRequest(t.setType(r.HTTPRequest.types.FORM).setData(this.getData()).setParams(this.getParams()).setMethod(r.HTTPRequest.methods.POST).send((function (t, n) {
              if (t) return e.emit("error", t);
              e.emit("response", n.text)
            }))) : this
          }
        }, {
          options: {
            IGNORE_UPPERCASE: 1,
            IGNORE_DIGITS: 2,
            IGNORE_URLS: 4,
            FIND_REPEAT_WORDS: 8,
            IGNORE_LATIN: 16,
            NO_SUGGEST: 32,
            FLAG_LATIN: 128,
            BY_WORDS: 256,
            IGNORE_CAPITALIZATION: 512,
            IGNORE_ROMAN_NUMERALS: 2048,
            ONLY_AUTOCORRECTIONS: 4096
          }
        });
      t.SpellerModel = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initOptions = void 0, n(12), n(35), n(18);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(256),
        a = n(62),
        c = n(81);
      t.initOptions = function (e) {
        var t = this,
          n = this.getSettings(),
          i = Object.keys(e.OPTIONS),
          u = new o.TouchView({
            element: e.ELEMENTS.optionsButton,
            activateFocus: !0
          }),
          l = new a.ListboxView({
            element: e.ELEMENTS.optionsListbox,
            template: e.TEMPLATES.listbox,
            stopDefaultAction: !0
          }),
          d = new s.ListboxMultiplePresenter({
            view: l,
            model: new c.ListboxModel
          }),
          f = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800,
              n = l.getContentElement('[data-value="'.concat(e, '"]'));
            n && !r.default.hasClass(n, "state-highlight") && (r.default.toggleClass(n, "state-highlight"), setTimeout((function () {
              return r.default.toggleClass(n, "state-highlight")
            }), t))
          };
        return u.on("tap", (function () {
          this.setFocus(!0), l.setVisible(), l.isVisible() && t.emit("optionsOpen")
        })).on("stateChanged:focused", (function (e) {
          e || l.setVisible(!1)
        })), d.on("valueChanged", (function () {
          var e = this.getValue();
          n.setProperty("disabledOptions", i.filter((function (t) {
            return e.indexOf(t) < 0
          })).join(";"))
        })).on("itemSelected", (function (e) {
          t.emit("optionsChanged", e, n.isOptionEnabled(e))
        })), d.prepareData = function (e) {
          var t = this.getValue(),
            n = {};
          return n.items = Object.keys(e).map((function (n) {
            return {
              text: e[n],
              value: n,
              multiple: !0,
              selected: t.indexOf(n) >= 0
            }
          })), n
        }, d.setItems(e.OPTIONS).setValue(i.filter((function (e) {
          return n.isOptionEnabled(e)
        }))), l.onVisibilityChanged((function (e) {
          u.setState("expanded", e)
        })), this.on("interactiveSettingChange", (function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.settingKey,
            r = e.enabled;
          u.emit("tap"), setTimeout((function () {
            return f(t)
          }), 400), setTimeout((function () {
            d.setValue(i.filter((function (e) {
              return e === t ? r : n.isOptionEnabled(e)
            })))
          }), 600)
        })), this.bindFocusActivation(u), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initHistory = void 0;
      t.initHistory = function (e) {
        var t = this,
          n = this.getModel(),
          i = this._router;
        return i.on("historyMove", (function (n) {
          t.emit("toggleCollections", n.currentState.route === e.COLLECTIONS_PATHNAME)
        })).on("modelUpdated", (function (e) {
          n.setProperty(e, {
            sender: "history"
          })
        })), this.on("collectionsActivated", (function (t) {
          var n = t ? {
              excludeParams: !0,
              includePathname: !0,
              pathname: e.COLLECTIONS_PATHNAME
            } : {
              includeSearch: !0
            },
            r = this.getLink(n);
          i.updateHistory(r)
        })), n.on("set:translation", (function () {
          i.updateTranslationState(this.toJSON())
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initKeyboard = void 0;
      var i = n(11);
      t.initKeyboard = function (e) {
        var t = this,
          n = this.getView(),
          r = new window.Keyboard(e.ELEMENTS.keyboard),
          o = new i.TouchView({
            element: e.ELEMENTS.keyboardButton
          }),
          s = new i.TouchView({
            element: e.ELEMENTS.keyboardContainer,
            contentElement: e.ELEMENTS.keyboardLang
          });
        return this.on("action:closeKeyboard", (function () {
          s.setVisible(!1), t.emit("keyboardOpen", {
            open: !1,
            type: "cross"
          })
        })).bindFocusActivation(o), o.on("tap", (function () {
          s.setVisible(), t.emit("keyboardOpen", {
            open: s.isVisible(),
            type: "icon"
          })
        })), this.getModel().on("change:srcLang", (function (n) {
          r.setLang(n), s.isVisible() && !window.Keyboard.layouts[n] && (s.setVisible(!1), t.emit("keyboardOpen", {
            open: !1,
            type: "lang"
          })), o.setEnabled(window.Keyboard.layouts[n]), s.setContent(e.TRANSLATOR_LANGS[n], {
            asText: !0
          })
        })), s.on("stateChanged:hidden", (function (e) {
          e || r.setExtra(!1).setShifted(!1), n.setState("keyboard", !e), r.setActive(!e), o.setState("active", !e)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      n(24), n(26), n(47), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initNewLayout = void 0, n(111), n(14), n(13), n(23), n(12), n(18), n(3), n(22), n(122), n(17), n(35);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(62),
        s = n(288),
        a = n(93),
        c = n(81),
        u = n(214),
        l = n(11),
        d = n(20),
        f = n(161),
        p = n(177),
        h = n(94),
        g = n(167),
        m = n(69),
        _ = n(176),
        v = n(168),
        E = n(258),
        T = n(240);

      function y(e) {
        return function (e) {
          if (Array.isArray(e)) return S(e)
        }(e) || function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
        }(e) || function () {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
      }
      t.initNewLayout = function (e) {
        var t, n, i, S = window.scrollY,
          b = this,
          O = this.getSettings(),
          C = this.getView(),
          P = this.getModel(),
          I = P.getProps(),
          L = new E.DictionaryPresenter2({
            view: new o.ListboxView({
              element: e.ELEMENTS.dictionary,
              template: e.TEMPLATES.dictionary,
              DOMEvents: {
                scroll: !0
              }
            }),
            model: this.getDictionaryModel(),
            isDisabled: function () {
              return !C.hasState("select") && e.ENABLE_NEW_DESIGN
            }
          }),
          R = L.getView(),
          A = new o.ListboxView({
            element: e.ELEMENTS.examples,
            template: e.TEMPLATES.examples,
            DOMEvents: {
              scroll: !0
            },
            contentElement: e.ELEMENTS.examplesContent
          }),
          x = new s.DictionaryExamplesModel({
            ui: e.UI_LANG,
            srv: e.SRV,
            sid: e.SID,
            url: e.EXAMPLES_URL,
            chunks: !0,
            maxLength: e.MAX_EXAMPLE_LENGTH
          }, {
            validators: {
              text: function (t) {
                return !e.DISABLE_EXAMPLES && (t && !/[\n\r]/.test(t) && t.length <= e.MAX_EXMP_QUERY && r.default.getValueTokens(t).length <= e.MAX_EXMP_WORD_COUNT && O.isOptionEnabled("dictionary") && !r.default.isUrl(t) && r.default.hasAlpha(t))
              },
              srcLang: function (t) {
                var n = this.getProperty("dstLang");
                return t !== n && r.default.hasProperty(e.EXAMPLE_LANGS, t + "-" + n)
              },
              dstLang: function (t) {
                var n = this.getProperty("srcLang");
                return n !== t && r.default.hasProperty(e.EXAMPLE_LANGS, n + "-" + t)
              }
            }
          }),
          N = new E.DictionaryPresenter2({
            view: A,
            model: x
          }),
          w = new a.ListboxPresenter({
            view: new o.ListboxView({
              element: e.ELEMENTS.wordsExampleTab,
              template: e.TEMPLATES.exampleListbox
            }),
            model: new c.ListboxModel({}, {
              toggleable: !0,
              defaultValue: E.EXAMPLES_FILTER_ALL
            })
          }),
          D = new o.ListboxView({
            element: e.DISABLE_EXAMPLES ? document.createElement("div") : e.ELEMENTS.popunder,
            template: e.TEMPLATES.examplePopup
          }),
          M = new o.ListboxView({
            element: e.ELEMENTS.popunderTooltip,
            template: e.TEMPLATES.empty
          }),
          V = this.getTranslatorView(),
          k = new m.TemplateView({
            element: e.ELEMENTS.dictionaryHeader,
            template: e.TEMPLATES.dictionaryHeaderButton,
            contentElement: e.ELEMENTS.dictionaryHeaderButton
          }),
          U = new u.TTSPresenter({
            view: new l.TouchView({
              stopDefaultAction: !0
            }),
            model: new d.Model
          }),
          H = new _.Storage({}, {
            name: "cmplExpl"
          }),
          B = function () {
            var n = N.getText();
            r.default.getValueTokens(n).length > e.MAX_EXMP_WORD_COUNT || !r.default.hasAlpha(n) ? D.setVisible(!1) : (D.renderData({
              noExamples: !0
            }), D.setVisible(!0), b.emit("popupShown", {
              show: !0,
              empty: !0
            }), clearTimeout(t), t = setTimeout((function () {
              D.setVisible(!1)
            }), 4e3))
          },
          j = function () {
            b._dictPopup = void 0, b._exmpPopup = void 0
          },
          F = C.getContentElement(".container_rubber"),
          G = function () {
            var n = document.documentElement.clientHeight - D.getRect().top - e.POPUP_INDENT;
            b._exmpPopup || b._dictPopup && b._dictPopup.hasWords ? (b._dictPopup = b._dictPopup || {}, b._dictPopup.text = b._dictPopup.text || P.getProperty("selTr") || P.getProperty("selText"), b._dictPopup.hasExamples = b._exmpPopup && b._exmpPopup.hasExamples, b._dictPopup.items = b._exmpPopup && b._exmpPopup.items, D.setState("overflow", b._dictPopup.hasWords), D.renderData(b._dictPopup), D.setStyle("maxHeight", n + "px"), D.setVisible(!0), b.emit("popupShown", {
              show: !0
            }), clearTimeout(t), j()) : B()
          },
          Y = function () {
            b.emit("rubberScrolled");
            var t = this.scrollTop,
              n = C.getContentElement(".main").offsetHeight,
              i = C.getContentElement(".container_rubber_body").offsetHeight;
            window.parseFloat(C.getContentElement(".container_main").style.height) > e.MIN_TEXTBOX_HEIGHT && e.MIN_MAIN_CONTAINER_HEIGHT + i > n && t - S > e.COLLAPSE_THRESHOLD ? C.setState("collapsed", !0) : (S - t > e.COLLAPSE_THRESHOLD || 0 === t) && C.setState("collapsed", !1), S = this.scrollTop
          },
          W = function e() {
            F.removeEventListener("scroll", e), F.addEventListener("scroll", Y)
          },
          K = function () {
            setTimeout((function () {
              var e = P.getProperty("text"),
                t = V.getSelectedText(e);
              t.src && setTimeout((function () {
                P.setProperty("selTr", t.src, {
                  dst: t.dst
                })
              }), 0)
            }), 10)
          },
          X = function (e) {
            var t, n, i, o, s, a = {},
              c = e.target;
            r.default.hasClass(c, "example_ref") && !M.isVisible() && (M.setContent(r.default.getAttribute(c, "data-message")), t = c.getBoundingClientRect(), i = (n = M).getElement(), o = document.documentElement.clientWidth - t.left, s = t.top - n.getRect().height, i.style.right = o + "px", i.style.top = s + "px", M.setState("popup", D.isVisible()), M.setVisible(!0), a.type = r.default.getAttribute(c, "data-type"), a.text = N.getText(), a.origin = r.default.getAttribute(c, "data-ref"), b.emit("originTooltipShown", a))
          },
          q = function (e) {
            var t = e.target;
            r.default.hasClass(t, "example_ref") && M.isVisible() && M.setVisible(!1)
          },
          z = function (t, n) {
            var i = "",
              r = "",
              o = [];
            return t.forEach((function (e) {
              i = e.pos && e.pos.code, r = e.text, e.tr.forEach((function (e, t) {
                o.push({
                  name: n,
                  value: e.text,
                  title: r,
                  groupIndex: t,
                  partOfSpeech: i
                }), e.syn && e.syn.forEach((function (e) {
                  o.push({
                    name: n,
                    value: e.text,
                    title: r,
                    groupIndex: t,
                    partOfSpeech: i
                  })
                }))
              }))
            })), o.length > e.MAX_SYNONYMS_ITEMS2 && (o.length = e.MAX_SYNONYMS_ITEMS2), o[o.length - 1].isLast = !0, o
          };
        (0, T.getAvailablePlayers)(e, this._uniproxy).forEach((function (e) {
          U.addPlayer(e)
        })), this.on("action", (function (t, n) {
          switch (t) {
            case "retry":
              L.requestData(), N.requestData();
              break;
            case "toggleDictionary":
              var i = R.getRect().top - e.COLLAPSED_HEIGHT;
              R.hasState("expanded") && (R.getContentElement(".dictionary-item", !0).forEach((function (e) {
                r.default.hasClass(e, "state-expanded") && r.default.toggleClass(e, "state-expanded")
              })), F.scrollBy && F.scrollBy(0, i)), R.setState("expanded"), f.StatisticsModel.updateDomTrackingData(n, {
                id: "dict/" + (R.hasState("expanded") ? "expand" : "collapse")
              });
              break;
            case "dictExamplesToggle":
              var o = n && n.parentElement;
              r.default.toggleClass(o, "state-expanded"), f.StatisticsModel.updateDomTrackingData(n, {
                id: "dict/arcticle/" + (r.default.hasClass(o, "state-expanded") ? "show" : "hide") + "Examples"
              });
              break;
            case "toggleLongExamples":
              ! function (t) {
                var n = t && t.parentElement,
                  i = n.getBoundingClientRect().top - e.COLLAPSED_HEIGHT,
                  o = {
                    text: N.getSelectedText(),
                    count: r.default.getAttribute(t, "data-count"),
                    show: !r.default.hasClass(n, "state-expanded"),
                    translation: r.default.getAttribute(n, "data-translation")
                  },
                  s = r.default.getAttribute(t, "data-index", "0"),
                  a = r.default.hasClass(n, "state-expanded");
                b.emit("toggleMoreExamples", o), F.removeEventListener("scroll", Y), F.addEventListener("scroll", W), N.setExpandedList(s, !a), a && F.scrollBy && F.scrollBy(0, i)
              }(n);
              break;
            case "toggleComplaintMode":
              d = l ? u : !R.hasState("complaint"), P.getProperty("complaint") && d && P.setProperty("complaint", !1, {
                type: "auto",
                sender: "dict"
              }), R.setState("complaint", d);
              break;
            case "soundExample":
              U.getModel().setProperty("title", r.default.getAttribute(n, "data-tr")), U.getModel().setProperty("ref", r.default.getAttribute(n, "data-ref")), U.setText(r.default.trim(r.default.getAttribute(n, "data-text"))).setLanguage(r.default.getAttribute(n, "data-lang")).toggle();
              break;
            case "showExamples":
              var s = L.getModel().getProperty("data");
              N.setCustomExamplesFlag(!0).setMaxLength(e.MAX_EXAMPLE_LENGTH).requestData(), b.emit("showExamples"), D.setVisible(!1), (s = L.prepareData(s)) && (s.dict.items || s.syn.articles) ? (R.renderData(s), R.setVisible(!0), C.setState("dict_reversed", !D.hasState("text"))) : R.setVisible(!1), window.getSelection().removeAllRanges();
              break;
            case "voteExample":
              ! function (t) {
                var n = N.toJSON(),
                  i = {
                    ui: e.UI_LANG,
                    src: n.selText,
                    vote: "good" === r.default.getAttribute(t, "data-vote-type") ? 1 : 0,
                    lang: n.srcLang + "-" + n.dstLang,
                    family: e.FAMILY,
                    corpus_id: r.default.getAttribute(t, "data-id")
                  };
                n.translation && (i.dst = n.translation), N.setVoteResult(i.corpus_id, Boolean(i.vote)), O.setProperty("voteResults", N.getVoteResults()), b.emit("exampleVoted", i)
              }(n);
              break;
            case "closeCustomExamples":
              var a = P.getProperty("srcLang"),
                c = P.getProperty("dstLang");
              L.setData(null, {
                silent: !0
              }).setSrcLanguage(a, {
                silent: !0
              }).setDstLanguage(c, {
                silent: !0
              }).setText(P.getProperty("trText")).requestData(), N.setData(null, {
                silent: !0
              }).setTranslation("", {
                silent: !0
              }).setSrcLanguage(a, {
                silent: !0
              }).setDstLanguage(c, {
                silent: !0
              }).setCustomExamplesFlag(!1).setText(P.getProperty("trText")).requestData()
          }
          var u, l, d
        })).on("optionsChanged", (function (e, t) {
          "dictionary" === e && (C.setState("no_dict", !t), t ? (L.setText(P.getProperty("trText")).requestData(), N.setCustomExamplesFlag(!1).setText(P.getProperty("trText")).requestData()) : (L.setText(""), N.setText("")))
        })).on("trTextSelect", (function () {
          return K()
        })).on("trTextClick", (function () {
          return K()
        })), this.onAction("toggleExamplesComplaintMode", (function () {
          return r = P.getProps().examplesComplaint, o = n ? t : !r, !i && o && P.setProperty("toast", o && e.TOOLTIPS.examplesComplaint), P.setProperty("examplesComplaint", o), void A.setState("complaint", o);
          var t, n, i, r, o
        })).on("exampleComplaint", (function (e) {
          var t = e.id,
            n = H.getProps().ids,
            i = void 0 === n ? [] : n;
          i.length > 100 && i.shift(), H.setProperty("ids", [].concat(y(i), [t])), N.updateView()
        })), C.setState("no_dict", !O.isOptionEnabled("dictionary")), P.on("change", (function (t, n, i) {
          var o, s, a = P.getProperty("trText"),
            c = P.getProperty("srcLang"),
            u = P.getProperty("dstLang");
          switch (t) {
            case "text":
              ("dictionary" === i.sender && ("tr" === i.type && !C.hasState("dict_reversed") || "tr" !== i.type && C.hasState("dict_reversed")) || "synonyms" === i.sender && C.hasState("dict_reversed")) && b.swapDirection();
              break;
            case "trText":
            case "selText":
              s = r.default.trim(n);
              var l = "selText" === t,
                d = "trText" === t,
                f = r.default.getValueTokens(s).length > e.MAX_EXMP_WORD_COUNT,
                h = N.customExamplesEnabled();
              if (l && h && f) return;
              o = s && l && !f && r.default.hasAlpha(s) && L.hasType(p.DictionaryPresenter.types.REGULAR), C.setState("select", o), s && !h && (L.setSrcLanguage(c, {
                silent: !0
              }).setDstLanguage(u).requestData(), N.setSrcLanguage(c, {
                silent: !0
              }).setDstLanguage(u, {
                silent: !0
              }).setTranslation("", {
                silent: !0
              }).setMaxLength("selText" === t ? e.MAX_EXAMPLE_POPUP_LENGTH : e.MAX_EXAMPLE_LENGTH).requestData()), o && (j(), D.renderData({
                noExamples: !0,
                template: !0
              }).setState("text", !0).setVisible(!0)), L.setText(s), N.setText(s), C.setState("dict_reversed", !1), d && N.setCustomExamplesFlag(!1);
              break;
            case "selTr":
              var g = i.dst && i.dst.length <= e.MAX_EXMP_DST_QUERY ? i.dst : "";
              s = r.default.trim(n), L.setSrcLanguage(u, {
                silent: !0
              }).setDstLanguage(c), (o = s && r.default.hasAlpha(s) && L.hasType(p.DictionaryPresenter.types.REGULAR)) && (j(), C.setState("select", !0), D.renderData({
                noExamples: !0,
                template: !0
              }).setState("text", !1).setVisible(!0), L.setText(s).requestData(), N.setSrcLanguage(u, {
                silent: !0
              }).setDstLanguage(c, {
                silent: !0
              }).setTranslation(g, {
                silent: !0
              }).setMaxLength(e.MAX_EXAMPLE_POPUP_LENGTH).setText(s).requestData());
              break;
            case "srcLang":
              P.setProperty("supportExamples", e.EXAMPLE_LANGS[n + "-" + u]), N.setCustomExamplesFlag(!1).setSrcLanguage(n).setDstLanguage(u).setText(a).requestData(), L.setSrcLanguage(n).setDstLanguage(u).setFlag(p.DictionaryPresenter.flags.DECLENSIONS, "en" === n).setText(a).requestData();
              break;
            case "dstLang":
              P.setProperty("supportExamples", e.EXAMPLE_LANGS[c + "-" + n]), N.setCustomExamplesFlag(!1).setSrcLanguage(c).setDstLanguage(n).setText(a).requestData(), L.setFlag(p.DictionaryPresenter.flags.DEFINITIONS, n === e.UI_LANG).setSrcLanguage(c).setDstLanguage(n).setText(a).requestData();
              break;
            case "complaint":
              n || R.setState("complaint", !1);
              break;
            case "examplesComplaint":
              n || A.setState("complaint", !1)
          }
        })), C.on("stateChanged:select", (function (e) {
          e || D.setVisible(!1)
        })).on("stateChanged:empty", (function (e) {
          e && (R.setVisible(!1), A.setVisible(!1), C.setState("select", !1))
        })).on("tap", (function (e) {
          D.isVisible() && !D.getElement().contains(e.target) && (D.setVisible(!1), b.emit("popupShown", {}))
        })), V.on("keydown", (function (e) {
          e.keyCode === h.InputView.keys.A && r.default.hasCtrlKey(e) && P.setProperty("selTr", P.getProperty("translation"), {
            dst: P.getProperty("text")
          })
        })).bindDOMEvents("keydown", !0), w.prepareData = function (e) {
          if (!e) return {
            groups: []
          };
          var t = {},
            n = w.getValue(),
            i = function (e, t) {
              return n === [e, t].join(E.EXAMPLES_FILTER_DELIMITER)
            };
          e.forEach((function (r) {
            var o = r.original;
            r.others && e.length > 1 || (t[o] || (t[o] = [{
              text: o,
              original: o,
              value: o,
              selected: i(o, null),
              isPrimary: !0,
              others: r.others
            }]), r.others || (r.value = r.value || r.text, r.selected = n ? i(r.value, r.posCode) : r.selected, t[o].push(r)))
          }));
          var r = Object.keys(t);
          return 1 === r.length && (t[r[0]][0].disabled = !0, t[r[0]][0].value = E.EXAMPLES_FILTER_ALL), {
            groups: r.map((function (e) {
              return {
                items: t[e].slice(0, E.MAX_EXAMPLES_AMOUNT + 1)
              }
            }))
          }
        }, w.on("valueChanged", (function (e) {
          var t = N.prepareData(N.getDict(), e);
          U.stop(), t && A.renderData(t), e && b.emit("exampleTabTap", {
            text: N.getSelectedText(),
            translation: e
          })
        })), D.on("stateChanged:hidden", (function (n) {
          n ? (P.setProperty("selText", "", {
            silent: !0
          }), P.setProperty("selTr", "", {
            silent: !0
          }), N.getModel().getProperty("maxLength") !== e.MAX_EXAMPLE_LENGTH && (N.setText("", {
            silent: !0
          }), L.setText("", {
            silent: !0
          })), C.hasState("emptyPopup") || C.setState("select", !1)) : (clearTimeout(t), D.setPosition(V.getRect()), b._showedExamples || (b._showedExamples = !0))
        })).on(l.TouchView.eventTypes.OVER, X).on(l.TouchView.eventTypes.OUT, q).bindDOMEvents(l.TouchView.eventTypes.OVER).bindDOMEvents(l.TouchView.eventTypes.OUT), L.setFlag(p.DictionaryPresenter.flags.MORPHO, !0).setFlag(p.DictionaryPresenter.flags.FAMILY, e.FAMILY).setFlag(p.DictionaryPresenter.flags.SHORT_POS, !0).setFlag(p.DictionaryPresenter.flags.TOOLTIPS, !0).setFlag(p.DictionaryPresenter.flags.IDIOMS, !0).setFlag(p.DictionaryPresenter.flags.LONG_EXAMPLES, !0), N.setFlag(p.DictionaryPresenter.flags.MORPHO, !0).setFlag(p.DictionaryPresenter.flags.FAMILY, e.FAMILY).setFlag(p.DictionaryPresenter.flags.SHORT_POS, !0).setFlag(p.DictionaryPresenter.flags.TOOLTIPS, !0).setFlag(p.DictionaryPresenter.flags.IDIOMS, !0).setVoteResults(O.getProperty("voteResults")), N.on("dataSet", (function (e, t) {
          C.hasState("select") && (b._dictPopup || b._exmpPopup ? G() : t.resultLength || B()), A.setVisible(e || A.isVisible() && C.hasState("select"))
        })).on("error", (function (e) {
          e && (A.setVisible(!1), setTimeout((function () {
            P.setProperty("selText", "", {
              silent: !0
            }), P.setProperty("selTr", "", {
              silent: !0
            }), C.setState("select", !1)
          }), 500))
        })), x.on("change:customExamples", (function (e) {
          k.setVisible(e)
        })).on("change:customExamplesText", (function (e) {
          k.renderData({
            customExamplesText: e
          })
        })), A.on(l.TouchView.eventTypes.OVER, (function (e) {
          var t = e.target;
          if ("soundExample" === r.default.getDataAttr(t, "action") && r.default.hasClass(t, "state-disabled")) {
            var n = r.default.getClosest(t, (function (e) {
              return "dictionaryExample" === r.default.getDataAttr(e, "role")
            }));
            n && (i = n, o = r.default.getDataAttr(i, "id"), s = r.default.getDataAttr(i, "text"), a = r.default.getDataAttr(i, "translation"), c = N.getModel().getProperty("srcLang"), u = N.getModel().getProperty("dstLang"), N.getSpeakersSupport()[o] || U.isValid(s, c, (function (e) {
              U.isValid(a, u, (function (t) {
                N.setSpeakerSupport(o, e, t)
              }))
            })))
          } else {
            var i, o, s, a, c, u;
            X(e)
          }
        })).on(l.TouchView.eventTypes.OUT, q).bindDOMEvents(l.TouchView.eventTypes.OVER).bindDOMEvents(l.TouchView.eventTypes.OUT), this.on("rubberScrolled", r.default.throttle((function () {
          M.isVisible() && M.setVisible(!1)
        }), 1e3)), N.prepareData = function (e, t) {
          var r, o, s, a, c, u = t,
            l = [],
            d = {},
            f = {},
            p = e.result ? e : JSON.parse(e);
          if (!p.result || !p.result.length) return C.hasState("select") || w.setItems(l), null;
          if (p.result && p.result.length && b.emit("examplesRendered", {
            text: this.getText(),
            popup: C.hasState("select")
          }), !C.hasState("select")) {
            r = p.result[0].text, this.setDict(p), this.setSelectedText(r), o = this.getVoteResults(), s = this.getExpandedLists(), a = this.getSpeakersSupport(), c = r !== i, u ? n = u : c ? n = E.EXAMPLES_FILTER_ALL : u = n;
            var h = H.getProps().ids,
              g = void 0 === h ? [] : h;
            return d.items = E.DictionaryPresenter2.prepareExampleData(p.result, this.getSrcLanguage(), this.getDstLanguage(), s, u, o, a, g), p.result.forEach((function (e) {
              if (!e.translation.idiom)
                if (e.translation.other) l.push({
                  others: !0,
                  original: e.text
                });
                else {
                  var t = e.translation,
                    n = t.text || t,
                    i = t.pos;
                  if (g && g.length && !d.items.find((function (e) {
                    var t = e.posCode,
                      r = e.translation;
                    return t === (i ? i.code : null) && r === n
                  }))) return;
                  l.push({
                    text: n,
                    original: e.text,
                    posCode: i ? i.code : null
                  })
                }
            })), 1 === d.items.length && (d.items[0].showAll = !0), u && 0 !== u.indexOf(E.EXAMPLES_FILTER_ALL) || (w.setValue(""), w.setItems(l)), c && (F.scrollTop = 0, i = r), d
          }
          f.items = [], f.hasExamples = !0;
          for (var m = 0; m < 2; m++) {
            var _ = p.result[m];
            if (!_) break;
            var v = _.translation,
              T = v.text || v,
              y = v.pos;
            f.items.push({
              exampleId: _.examples[0].id,
              pos: y ? y.text : null,
              posCode: y ? y.code : null,
              original: _.text,
              text: _.translation.other ? "" : T,
              ref: _.examples[0].ref.title,
              refType: _.examples[0].ref.type,
              message: E.DictionaryPresenter2.getTooltipMessage(_.examples[0].ref),
              srcExp: _.examples[0].src.split(/[<>]/).map((function (e, t) {
                return {
                  text: e,
                  highlighted: t % 2 != 0
                }
              })),
              dstExp: _.examples[0].dst.split(/[<>]/).map((function (e, t) {
                return {
                  text: e,
                  highlighted: t % 2 != 0
                }
              }))
            })
          }
          b._exmpPopup = f, C.setState("emptyPopup", !1)
        };
        var J = function (e) {
          var t = [];
          return e.gen && t.push({
            value: e.gen.text,
            title: e.gen.tooltip
          }), e.num && t.push({
            value: e.num.text,
            title: e.num.tooltip
          }), e.dia && t.push({
            value: e.dia.text,
            title: e.dia.tooltip
          }), t
        };
        return L.prepareData = function (t) {
          var n, i, o = "",
            s = !0,
            a = 0,
            c = e.SYN_TITLES2,
            u = P.getProperty("srcLang"),
            l = P.getProperty("dstLang"),
            d = P.getProperty("srcLang") + "-" + P.getProperty("dstLang"),
            f = P.getProperty("dstLang") + "-" + P.getProperty("srcLang"),
            h = {
              words: []
            },
            g = [],
            m = [],
            _ = {
              dict: {},
              syn: {}
            };
          if (!t) return null;
          var E = JSON.parse(t),
            T = E[u] || E[l];
          if (!(E = E[d] || E[f]) && !T) return null;
          var y = Boolean(E && E[p.DictionaryPresenter.types.DEF]),
            S = [];
          [p.DictionaryPresenter.types.DEF, p.DictionaryPresenter.types.REGULAR].forEach((function (e) {
            var t = E && E[e];
            t && t.length && S.push(t)
          }));
          var O, I = !1;
          if (S.forEach((function (t) {
            if (!I) {
              O = t, _.dict.hasModernLabel = t.some((function (e) {
                return e.new || e.tr.some((function (e) {
                  return e.new
                }))
              })), _.dict.items = t.map((function (t) {
                var n = "",
                  i = {
                    meanings: [],
                    definition: {},
                    show: a < e.DICTIONARY_COUNT
                  },
                  r = [];
                return i.title = {
                  title: t.text,
                  marks: J(t)
                }, t.text !== o && t.fl && (i.title.fl = t.fl), o = t.text, t.pos && (n = t.pos.code, i.title.partOfSpeechCode = n, i.title.tooltip = t.pos.tooltip, i.title.partOfSpeech = t.pos.text), t.ts && (i.title.transcription = t.ts), t.tr.forEach((function (t, c) {
                  if (t.idiom) b.emit(v.IDIOMS_EVENTS.IDIOM_FETCHED, t.def);
                  else {
                    var u = {
                        examples: [],
                        hasExamples: function () {
                          return Boolean(this.examples.length)
                        },
                        hasTranslations: function () {
                          return Boolean(this.meaningTrs.length)
                        },
                        groupIndex: c
                      },
                      l = [],
                      d = [{
                        title: o,
                        value: t.text,
                        marks: J(t),
                        groupIndex: c,
                        partOfSpeech: n
                      }];
                    t.def ? i.definition = function (e) {
                      return {
                        imgUrl: e.img,
                        origUrl: e.orig,
                        textVal: e.def.split(/[<>]/).map((function (e, t) {
                          return {
                            text: e,
                            highlighted: t % 2 != 0
                          }
                        })),
                        altText: e.text,
                        sourceUrl: e.ref.url,
                        sourceName: e.ref.name
                      }
                    }(t) : (t.syn && t.syn.forEach((function (e) {
                      d.push({
                        title: o,
                        value: e.text,
                        marks: J(e),
                        groupIndex: c,
                        partOfSpeech: n
                      })
                    })), t.mean && t.mean.forEach((function (e) {
                      l.push({
                        title: o,
                        value: e.text,
                        groupIndex: c,
                        partOfSpeech: n
                      })
                    })), t.ex && (t.ex.forEach((function (e) {
                      var t = [];
                      e.tr && e.tr.forEach((function (e) {
                        t.push(e.text)
                      })), u.examples.push({
                        title: o,
                        exampleVal: e.text,
                        exampleTrs: t.join(", "),
                        groupIndex: c,
                        partOfSpeech: n
                      })
                    })), i.title.hasExamples = !0, s = !1), d[d.length - 1].isLast = !0, l.length && (l[l.length - 1].isLast = !0), u.meaningTrs = l, u.meaningVals = d, u.show = a < e.DICTIONARY_COUNT, a++, u.show ? (u.hasExamples() && (i.title.showExampleToggle = !0), r.push({
                      values: u.meaningVals,
                      hasSyn: u.meaningTrs.length,
                      syn: u.meaningTrs,
                      groupIndex: u.groupIndex
                    })) : d.forEach((function (e) {
                      m.push(e.value)
                    })), i.meanings.push(u))
                  }
                })), i.show && h.words.push({
                  partOfSpeechCode: i.title.partOfSpeechCode,
                  partOfSpeech: i.title.partOfSpeech,
                  transcription: i.title.transcription,
                  title: o,
                  popupVals: r
                }),
                  function (e) {
                    return !(e.meanings.length || e.title.hasExamples || e.title.transcription || Object.keys(e.definition).length)
                  }(i) ? null : (I = !0, i)
              }));
              var n = a > e.DICTIONARY_COUNT;
              _.dict.title = e.DICT_TITLES.regular, _.dict.showToggle = n, R.setState("definition", y).setState("expandable", n), _.dict.showToggle && (_.dict.moreMessage = r.default.parseString(e.MORE_MESSAGE, m.length), _.dict.moreMessage += ": " + m.slice(0, 2).join(", "))
            }
          })), T) {
            for (n in c) T[n] && T[n].length && (i = {
              subtitle: c[n].title,
              tooltip: c[n].tooltip,
              tab: n,
              items: z(T[n], n)
            }, g.push(i));
            g.length && (_.syn.articles = g)
          }
          var A = _.dict.items && _.dict.items.filter(Boolean).length,
            x = _.syns && _.syns.articles && _.syns.articles.length;
          return A || x ? (A ? b.emit("dictRendered", {
            text: L.getText(),
            popup: C.hasState("select"),
            noExamples: s,
            definition: y
          }) : (_.dict.items = null, _.dict.title = null), C.hasState("select") ? (O && (h.words = h.words.slice(0, 3), h.words.forEach((function (e) {
            e.syn && e.syn.length && (e.syn[e.syn.length - 1].isLast = !0), e.values && e.values.length && (e.values[e.values.length - 1].isLast = !0)
          })), h.hasWords = h.words.length, h.ts = O[0] && O[0].ts, h.text = O[0] && O[0].text || P.getProperty("selTr"), h.pos = O[0] && O[0].pos && O[0].pos.text), void(b._dictPopup = h)) : (g.length && (b.emit("synRendered"), _.syn.title = e.DICT_TITLES.similar), R.setState("expanded", !1), _)) : null
        }, L.on("valueSelected", (function (e) {
          if (!R.hasState("complaint")) {
            var t = e.split(":");
            P.setProperty("text", t[1], {
              type: t[0],
              sender: "tr" === t[0] || "mean" === t[0] ? "dictionary" : "synonyms"
            })
          }
        })).on("dataSet", (function (e, t) {
          C.hasState("select") && (t.invalid && (b._dictPopup = {}), !b._exmpPopup && P.getProperty("supportExamples") || G()), R.setVisible(e && (e.dict.items || e.syn.articles) || R.isVisible() && C.hasState("select"))
        })).on("langChanged", (function () {
          var t = L.getSrcLanguage(),
            n = L.getDstLanguage();
          L.setType(p.DictionaryPresenter.types.SYN, e.DICTIONARY_LANGS[t + "-" + t]).setType(p.DictionaryPresenter.types.REGULAR, e.DICTIONARY_LANGS[t + "-" + n]).setType(p.DictionaryPresenter.types.ANT, e.ANT_LANGS[t]).setType(p.DictionaryPresenter.types.DERIV, e.DERIV_LANGS[t])
        })), R.on("scroll", (function () {
          b.emit("dictScrolled")
        })).on("stateChanged:complaint", (function (e) {
          P.setProperty("complaint", e, {
            type: "toggle",
            sender: "dict"
          })
        })), U.on("actionStarted", (function (e) {
          var t = {};
          e.action === g.PLAYER_ACTIONS.PLAY && (t.ref = e.ref, t.text = N.getSelectedText(), t.lang = e.lang, t.type = e.playerType, t.title = e.title, b.emit("exampleSoundTap", t))
        })), I.trText && L.setText(I.trText), I.srcLang && L.setSrcLanguage(I.srcLang), I.dstLang && L.setDstLanguage(I.dstLang), F.addEventListener("scroll", Y), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initUserButton = void 0;
      var i = n(11);
      t.initUserButton = function (e) {
        var t = new i.TouchView({
            element: e.ELEMENTS.userButton,
            activateFocus: !0
          }),
          n = new i.TouchView({
            element: e.ELEMENTS.userListbox,
            stopDefaultAction: !0
          });
        return t.on("tap", (function () {
          this.setFocus(!0), n.setVisible()
        })).on("stateChanged:focused", (function (e) {
          e || n.setVisible(!1)
        })), this.bindFocusActivation(t), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initSpeechRecognition = void 0, n(3);
      var i = n(69),
        r = n(440),
        o = n(232),
        s = n(278),
        a = n(247),
        c = n(279),
        u = n(178),
        l = n(248),
        d = n(207);
      t.initSpeechRecognition = function (e) {
        var t = "",
          n = this,
          f = this.getView(),
          p = this.getModel(),
          h = new i.TemplateView({
            element: e.ELEMENTS.interim,
            template: e.TEMPLATES.measurer
          }),
          g = new r.AudioVisualizerView({
            colors: ["#ffd326", "#ffdc61", "#ffeaa0"],
            element: e.ELEMENTS.volume,
            levelPayload: 19
          }),
          m = new o.SpeechRecognizerView({
            element: e.ELEMENTS.microphone
          }),
          _ = new c.SpeechRecognizerPresenter({
            view: m,
            model: new s.SpeechRecognizerModel({}, {
              validators: {
                lang: function (e) {
                  return e
                }
              }
            })
          }),
          v = e.FORCE_UNIPROXY,
          E = e.REPLACE_SPEECHKIT,
          T = e.ENABLE_UNIPROXY || v || E,
          y = !v;
        return e.ENABLE_NATIVE_ASR && !v && d.SpeechRecognizerNative.isAvailable() && _.addRecognizer(new d.SpeechRecognizerNative({
          interimResults: !0
        })), y && a.SpeechKitRecognizer.isAvailable() && _.addRecognizer(new a.SpeechKitRecognizer({
          speechKitTimeout: e.SPEECHKIT_TIMEOUT,
          speechKitApikey: e.SPEECHKIT_KEY
        })), T && l.SpeechRecognizerUniproxy.isAvailable() && _.addRecognizer(new l.SpeechRecognizerUniproxy({
          uniproxy: this._uniproxy
        })), this.bindFocusActivation(m), f.on("stateChanged:listening", (function (e) {
          e || _.stop()
        })), p.on("change:srcLang", (function (e) {
          _.setLanguage(e)
        })), m.setEnabled(!1).on("stateChanged:invalid", (function (e) {
          this.setEnabled(!e)
        })), _.on(u.RECOGNITION_EVENTS.END, (function (i) {
          n.emit("asrEnd", i, t), f.setState("listening", !1), h.setContent(""), g.setVisible(!1).stopVisualization(), t = "", i && i.error === u.RECOGNITION_ERRORS.NETWORK && (p.setProperty("tooltip", e.TOOLTIPS.sttErrorOldBrowser), m.setEnabled(!1))
        })).on(u.RECOGNITION_EVENTS.START, (function (e) {
          var i = this.getVisualizer();
          n.emit("asrStart", e), f.setState("listening", !0), i && (i.fftSize = 256, i.smoothingTimeConstant = .9, g.setVisible(!0).setAnalyserNode(i).startVisualization()), t = e
        })).on(u.RECOGNITION_EVENTS.RECOGNIZE, (function (e) {
          var i = p.getProperty("text"),
            r = /\S/.test(i.slice(-1)) ? " " : "";
          e.final ? (i += r + e.value, p.setProperty("text", i, {
            sender: "microphone"
          }), h.setContent(""), n.emit("asrResult", e, t)) : h.renderData({
            text: r + e.value,
            leftText: i
          }).scrollTo(h.getScrollInfo().maxTop / 100 * p.getProperty("textScrollY"))
        })).setLanguage(p.getProperty("srcLang")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.AudioVisualizerView = void 0, n(322), n(119);
      var i = n(67).View.extend({
        init: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this._colors = e.colors || [], this._levelWidth = e.levelWidth || 10, this._levelPayload = e.levelPayload || 10
        },
        draw: function (e) {
          var t, n = this.getElement(),
            i = n.width / 2 * e / 2,
            r = n.getContext("2d");
          for (t = Math.min(this._colors.length, Math.ceil(i / this._levelWidth)), r.clearRect(0, 0, n.width, n.height); t--;) r.beginPath(), r.fillStyle = this._colors[t], r.arc(n.width / 2, n.height / 2, Math.min(this._levelWidth * (t + 1), i) + this._levelPayload, 0, 2 * Math.PI, !0), r.closePath(), r.fill()
        },
        setAnalyserNode: function (e) {
          return this._analyserNode = e, this
        },
        stopVisualization: function () {
          return window.cancelAnimationFrame(this._frameId), this
        },
        startVisualization: function () {
          var e = this._analyserNode,
            t = new Uint8Array(e.frequencyBinCount);
          e.getByteFrequencyData(t), this.draw(i.extractVolume(t)), this._frameId = requestAnimationFrame(this.startVisualization.bind(this))
        }
      }, {
        extractVolume: function (e) {
          var t, n, i = 0;
          for (t = 0, n = e.length; t < n; t++) i < e[t] && (i = e[t]);
          return i / 255
        }
      });
      t.AudioVisualizerView = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initPredictor = void 0, n(14), n(13), n(23), n(91), n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(69),
        s = n(197),
        a = n(62),
        c = n(206),
        u = n(94);
      t.initPredictor = function (e) {
        var t = this,
          n = this.getView(),
          i = this._settings,
          l = this.getModel(),
          d = l.toJSON(),
          f = new o.TemplateView({
            element: e.ELEMENTS.measurer,
            template: e.TEMPLATES.measurer
          }),
          p = new s.PredictorPresenter({
            view: new a.ListboxView({
              element: e.ELEMENTS.predictor,
              template: e.TEMPLATES.predictor
            }),
            model: new c.PredictorModel({
              srv: e.SRV,
              sid: e.SID,
              limit: e.MAX_PREDICTOR_ITEMS,
              detectOptions: s.PredictorPresenter.detectOptions.KBD
            }, {
              url: e.PREDICTOR_URL,
              detectUrl: e.DETECTOR_URL,
              validators: {
                text: function (t) {
                  return t && t.length <= e.MAX_PREDICTOR_QUERY && "sjn" !== this.getProperty("srcLang") && !r.default.isUrl(r.default.trim(t))
                },
                srcLang: function (t) {
                  return r.default.hasProperty(e.PREDICTOR_LANGS, t)
                }
              }
            })
          }),
          h = p.getView();
        return this.on("textTap", (function () {
          h.setEnabled(!1)
        })).on("textFocus", (function (e) {
          e && h.setEnabled(!1)
        })).on("textKeydown", (function (e) {
          switch (e.keyCode) {
            case u.InputView.keys.ENTER:
              if (e.shiftKey) break;
              i.isOptionEnabled("shift") && r.default.preventEvent(e), h.isEnabled() && (r.default.preventEvent(e), p.setValue(h.getValues()[0], {
                enter: !0
              })), this.updateTrText("enter");
              break;
            default:
              e.keyCode === u.InputView.keys.ESCAPE && h.isEnabled() && this.updateTrText("escape"), h.setEnabled(!1)
          }
        })), this.on("action:toggleAuto", (function () {
          p.toggleAuto()
        })), l.on("change", (function (t, n, i) {
          var r, o;
          switch (t) {
            case "text":
              if ("url" === i.sender && e.DEFAULT_SRC_LANG) return;
              o = this.toJSON(), r = i.caret ? i.caret + n.slice(i.caret).search(/\s|$/) : 0, p.setText(c.PredictorModel.extractWords(n.slice(0, r), "paste" === i.reason ? e.MAX_PREDICTOR_WORDS : e.MIN_PREDICTOR_WORDS), i.sender || i.reason).setIndex(r).setSrcLanguage(o.srcLang).setDstLanguage(o.dstLang);
              break;
            case "srcLang":
              p.setSrcLanguage(n, {
                reason: "lang"
              });
              break;
            case "dstLang":
              p.setDstLanguage(n);
              break;
            case "textScrollY":
              h.setEnabled(!1)
          }
        })), p.prepareData = function (e) {
          return {
            values: [{
              value: e[0]
            }],
            value: e[0]
          }
        }, p.on("auto", (function (e) {
          n.setState("auto", e), i.setProperty("auto", e)
        })).on("ready", (function (e) {
          var n = l.getProperty("text");
          if ("input" !== e.reason || !i.isOptionEnabled("suggest")) return h.setEnabled(!1);
          var r = s.PredictorPresenter.createRange(n, e);
          if (!r) return h.setEnabled(!1);
          f.renderData({
            text: n.slice(r.start, r.end) || ".",
            leftText: n.slice(0, r.start),
            rightText: n.slice(r.end)
          }).scrollTo(f.getScrollInfo().maxTop / 100 * l.getProperty("textScrollY"));
          var o = f.getContentElement("[data-measurer-target]");
          o && h.setPosition(o.getBoundingClientRect()), t.emit("predictorShow", e)
        })).on("detect", (function (e, n) {
          n || t.setSrcLanguage(e)
        })).on("predict", (function (e, n) {
          var i = c.PredictorModel.prepareValue(l.getProperty("text"), e);
          l.setProperty("text", i.text, {
            caret: i.caret,
            sender: "predictor"
          }), t.emit("predictorApply", e, n.enter)
        })).on("endOfWord", (function () {
          t.emit("predictorEndOfWord").updateTrText()
        })), d.srcLang && p.setSrcLanguage(d.srcLang), d.dstLang && p.setDstLanguage(d.dstLang), p.toggleAuto(!i.hasProperty("auto") || i.getProperty("auto")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initCollections = void 0, n(35), n(18), n(17), n(122), n(22), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(62),
        a = n(201),
        c = n(175),
        u = n(284),
        l = n(156),
        d = n(94),
        f = n(158),
        p = n(443),
        h = n(93),
        g = n(81),
        m = n(256),
        _ = n(69),
        v = n(259),
        E = n(260),
        T = n(214),
        y = n(20),
        S = n(234),
        b = n(235),
        O = n(240);
      t.initCollections = function (e) {
        var t, n = this,
          i = this,
          C = this.getView(),
          P = this._settings,
          I = this.getModel(),
          L = (0, b.getCollectionsEmitter)(),
          R = new o.TouchView({
            element: e.ELEMENTS.favButton
          }),
          A = new o.TouchView({
            element: e.ELEMENTS.collectionsView,
            hideAfterTransition: !0
          }),
          x = new s.ListboxView({
            element: e.ELEMENTS.collectionList,
            template: e.TEMPLATES.collections,
            contentElement: e.ELEMENTS.collectionListContent,
            debounceRendering: !0
          }),
          N = new a.CollectionModel({
            srv: e.SRV,
            uid: e.UID,
            url: e.COLLECTIONS_URL,
            limit: e.MAX_COLLECTIONS,
            recordsLimit: e.MAX_FAV_ITEMS2,
            xtoken: e.CSRF_TOKEN,
            shouldSyncHistory: e.ENABLE_HISTORY_SYNC
          }, {
            defaultFavName: e.DEFAULT_FAV_NAME,
            defaultHistoryName: e.DEFAULT_HISTORY_NAME,
            validators: {
              items: function () {
                return this.getItems()
              },
              text: function (t) {
                return t && t.length <= e.MAX_FAV_TEXT_LENGTH && !r.default.isUrl(t)
              },
              srcLang: function (e) {
                return e
              },
              dstLang: function (e) {
                return e
              },
              translation: function (t) {
                return t && t.length <= e.MAX_FAV_TEXT_LENGTH
              },
              activeId: function (e) {
                var t = this.getItems();
                return t && t.filter((function (t) {
                  return t.id === e && c.CollectionServerModel.isNotDeleted(t) && !c.CollectionServerModel.isSubscription(t)
                })).length
              }
            }
          }),
          w = new u.CollectionPresenter({
            view: x,
            model: N
          }),
          D = new l.InputPresenter({
            view: new d.InputView({
              element: e.ELEMENTS.collectionSearch,
              activateFocus: !0,
              contentElement: e.ELEMENTS.collectionSearchInput
            }),
            model: new f.InputModel
          }),
          M = D.getView(),
          V = new d.InputView({
            element: e.ELEMENTS.collectionName,
            activateFocus: !0,
            contentElement: e.ELEMENTS.collectionNameInput
          }),
          k = new p.CollectionNameInputPresenter({
            view: V,
            model: new f.InputModel
          }),
          U = new o.TouchView({
            element: e.ELEMENTS.addCollectionButton
          }),
          H = new o.TouchView({
            element: e.ELEMENTS.createCollectionButton
          }),
          B = new d.InputView({
            element: e.ELEMENTS.collectionAddPopup,
            activateFocus: !0,
            contentElement: e.ELEMENTS.collectionNameInput2
          }),
          j = new p.CollectionNameInputPresenter({
            view: B,
            model: new f.InputModel
          }),
          F = new d.InputView({
            element: e.ELEMENTS.collectionsNameEditPopup,
            activateFocus: !0,
            contentElement: e.ELEMENTS.collectionNameInput3
          }),
          G = new p.CollectionNameInputPresenter({
            view: F,
            model: new f.InputModel
          }),
          Y = new s.ListboxView({
            element: e.ELEMENTS.topList,
            template: e.TEMPLATES.collections,
            debounceRendering: !0
          }),
          W = new h.ListboxPresenter({
            view: Y,
            model: new g.ListboxModel
          }),
          K = new s.ListboxView({
            element: e.ELEMENTS.recordsList,
            template: e.TEMPLATES.records,
            contentElement: e.ELEMENTS.recordsListContent,
            debounceRendering: !0
          }),
          X = new m.ListboxMultiplePresenter({
            view: K,
            model: new g.ListboxModel
          }),
          q = new s.ListboxView({
            element: e.ELEMENTS.subscribeTooltip,
            template: e.TEMPLATES.empty
          }),
          z = new o.TouchView({
            element: e.ELEMENTS.collectionMenuButton,
            activateFocus: !0
          }),
          J = new h.ListboxPresenter({
            view: new s.ListboxView({
              element: e.ELEMENTS.collectionMenuListbox,
              template: e.TEMPLATES.menu,
              stopDefaultAction: !0
            }),
            model: new g.ListboxModel
          }),
          Q = J.getView(),
          Z = new o.TouchView({
            element: e.ELEMENTS.recordMovePopup,
            activateFocus: !0
          }),
          $ = new s.ListboxView({
            element: e.ELEMENTS.recordMovePopupList,
            template: e.TEMPLATES.collectionsPopupList
          }),
          ee = new o.TouchView({
            element: e.ELEMENTS.recordCopyPopup,
            activateFocus: !0
          }),
          te = new s.ListboxView({
            element: e.ELEMENTS.recordCopyPopupList,
            template: e.TEMPLATES.collectionsPopupList
          }),
          ne = new o.TouchView({
            element: e.ELEMENTS.collectionHeader,
            contentElement: e.ELEMENTS.collectionHeaderName
          }),
          ie = new s.ListboxView({
            element: e.ELEMENTS.collectionHeaderContent,
            template: e.TEMPLATES.collectionHeader
          }),
          re = new o.TouchView({
            element: e.ELEMENTS.collectionTumbler
          }),
          oe = new _.TemplateView({
            element: e.ELEMENTS.collectionsToast,
            template: e.TEMPLATES.collectionsToast
          }),
          se = new o.TouchView({
            element: e.ELEMENTS.collectionNewAddPopup,
            activateFocus: !0
          }),
          ae = new s.ListboxView({
            element: e.ELEMENTS.collectionsPopupList,
            template: e.TEMPLATES.collectionsPopupList
          }),
          ce = new o.TouchView({
            element: e.ELEMENTS.shareCollectionTumbler
          }),
          ue = new o.TouchView({
            element: e.ELEMENTS.shareCollectionInput,
            stopDefaultAction: !0
          }),
          le = new o.TouchView({
            element: e.ELEMENTS.shareCollectionCopy,
            activateFocus: !0
          }),
          de = new v.SharePresenter({
            view: new s.ListboxView({
              element: e.ELEMENTS.shareCollection,
              template: e.TEMPLATES.listbox,
              contentElement: e.ELEMENTS.shareCollectionContent,
              stopDefaultAction: !0
            }),
            model: new E.ShareModel({
              url: e.SHARE_URL,
              title: document.title
            })
          }),
          fe = de.getView(),
          pe = new o.TouchView({
            element: e.ELEMENTS.selectAllButton
          }),
          he = new T.TTSPresenter({
            view: new o.TouchView({
              stopDefaultAction: !0
            }),
            model: new y.Model
          }),
          ge = function () {
            var e = this.toJSON();
            w.setText(e.trText).setSrcLanguage(e.srcLang).setDstLanguage(e.dstLang).setTranslation(e.translation).checkRecord(), oe.setVisible(!1)
          },
          me = function (e) {
            var t = 0,
              n = X.getSelectedItems(),
              i = N.getProps().recordsLimit;
            return n.length ? t = n.length : A.isVisible() || (t = 1), {
              collections: e.filter((function (e) {
                return !c.CollectionServerModel.isSubscription(e) && c.CollectionServerModel.isNotDeleted(e) && e.type !== c.COLLECTION_TYPES.HISTORY
              })).map((function (e) {
                return {
                  color: e.color,
                  private: e.type !== c.COLLECTION_TYPES.FAVORITES && !e.public,
                  disabled: e.recordsCount + t > i,
                  collectionId: e.id,
                  collectionType: e.type,
                  collectionName: e.name,
                  collectionIcon: e.type === c.COLLECTION_TYPES.FAVORITES ? "" : e.name.charAt(0),
                  collectionCount: e.recordsCount
                }
              }))
            }
          },
          _e = function (e, t) {
            return {
              collectionId: e.id,
              collectionType: e.type,
              recordsCount: e.recordsCount || e.count || 0,
              subscribersCount: e.subscribersCount,
              author: e.authorName,
              subscribed: t
            }
          },
          ve = function (t) {
            var n = Date.now();
            A.hasState("sync") || (P.getProperty("syncedTimestamp") || 0) + e.PRESYNC_TIMEOUT > n ? w.getCollectionList() : (e.UID && (P.setProperty("syncedTimestamp", n), i.emit("collectionsSync", t)), A.setState("sync", !0), w.syncCollections())
          },
          Ee = function () {
            N.setProperty("shouldSyncHistory", e.ENABLE_HISTORY_SYNC && I.getProperty("historyEnabled"))
          };
        return (0, O.getAvailablePlayers)(e, this._uniproxy).forEach((function (e) {
          he.addPlayer(e)
        })), R.on("tap", (function () {
          var t, n = w.getItems().filter((function (e) {
            return e.id === w.getActiveId()
          }))[0];
          this.hasState("favourite") ? (oe.renderData({
            deleted: !0,
            message: r.default.parseString(e.COLLECTION_TOAST_MESSAGES.deleted, n.name)
          }), w.getActive(), i.emit("recordDelete")) : ((t = n.recordsCount >= N.getProperty("recordsLimit")) || w.addRecords(), oe.renderData({
            message: r.default.parseString(e.COLLECTION_TOAST_MESSAGES[t ? "limit" : "added"], n.name)
          }), i.emit("recordAdd", t)), oe.setVisible(!0), se.setVisible(!1)
        })).on("stateChanged:favourite", (function (t) {
          this.getElement().setAttribute("data-tooltip", t ? e.TOOLTIPS.collections2 : e.TOOLTIPS.collections)
        })), oe.on("tap", (function () {
          this.setVisible(!1)
        })).on("contentChanged", (function () {
          clearTimeout(t), t = setTimeout((function () {
            oe.setVisible(!1)
          }), e.POPUP_DELAY)
        })).on("stateChanged:hidden", (function (e) {
          e && clearTimeout(t)
        })), q.on("stateChanged:hidden", (function (e) {
          e || setTimeout((function () {
            q.setVisible(!1)
          }), 1200)
        })), this.on("toggleCollections", (function (e) {
          A.setVisible(e)
        })).on("editorResult", (function (e) {
          w.setTranslation(e).checkRecord()
        })).on("action", (function (t, n) {
          var o, s, a, u, l, d, f = this;
          switch (t) {
            case "toggleFav":
              if (C.hasState("db_inactive")) {
                i.emit("collectionsInactiveTap"), C.setState({
                  db_overlay: !0,
                  db_blocked: P.getProperty("databaseBlocked")
                });
                break
              }
              A.setVisible(), i.emit("collectionsActivated", A.isVisible());
              break;
            case "closeDbOverlay":
              C.setState("db_overlay", !1);
              break;
            case "collectionsReturn":
              A.setState({
                add: !1,
                records: !1,
                select: !1,
                copy: !1
              }), D.setValue(""), w.setValue("").getCollectionList(), W.setValue("");
              break;
            case "closeAddPopup":
              B.setVisible(!1);
              break;
            case "closeRecordMovePopup":
              Z.setVisible(!1), ee.setVisible(!1), se.setVisible(!1);
              break;
            case "recordsReturn":
              A.setState({
                records: !0,
                select: !1,
                copy: !1,
                menu: !1
              });
              break;
            case "addCollection":
              if (A.hasState("limit")) return void q.setPosition(n.getBoundingClientRect(), !0).setVisible(!0);
              i.emit("newCollectionTap"), k.setValue(w.getDefaultName(e.DEFAULT_COLLECTION_NAME)), V.setSelection({
                start: 0,
                end: k.getValue().length
              }), re.setState("active", !0), A.setState("add", !0);
              break;
            case "addCollection2":
              se.setVisible(!1), ee.setVisible(!1), Z.setVisible(!1), j.setValue(""), B.setVisible(!0).setFocus(!0);
              break;
            case "createCollectionAndAdd":
              if (o = r.default.trim(j.getValue())) {
                if (V.setFocus(!0), A.hasState("limit")) {
                  B.setState("limit", !0);
                  break
                }
                if ((s = w.getItems().filter((function (e) {
                  return e.name === o
                }))).length) {
                  B.setState("alert", !0);
                  break
                }
                w.createCollection({
                  name: o,
                  public: !1
                }, !0), B.setVisible(!1), se.setVisible(!1), A.hasState("copy") || A.hasState("select") || (oe.renderData({
                  message: r.default.parseString(e.COLLECTION_TOAST_MESSAGES.added, o)
                }), oe.setVisible(!0))
              } else B.setFocus(!0);
              break;
            case "deleteRecord":
              l = w.getValue(), a = w.getSelectedCollection(), n && a && !c.CollectionServerModel.isSubscription(a) && (i.emit("recordDelete"), w.deleteRecords(n.getAttribute("data-index")).setActiveId(l), a.recordsCount = a.recordsCount - 1, ie.renderData(_e(a)));
              break;
            case "deleteRecords":
              s = X.getValue(), l = w.getValue(), i.emit("recordsDelete", {
                count: s.length,
                total: X.getItems().length
              }), w.deleteRecords(s).setActiveId(l), A.setState("select", !1);
              break;
            case "moveRecords":
              s = w.getItems(), l = w.getValue(), w.setActiveId(l), $.renderData(me(s)), Z.setVisible(!0);
              break;
            case "changeCollection":
              s = w.getItems(), ae.renderData(me(s)), se.setVisible(!0), oe.setVisible(!1);
              break;
            case "closeCollectionPopup":
              oe.setVisible(!1), F.setVisible(!1), fe.setVisible(!1);
              break;
            case "deleteCollection":
              if (!window.confirm(r.default.getAttribute(n, "data-confirm"))) break;
              a = w.getSelectedCollection(), w.deleteCollection(w.getValue()), A.setState("records", !1), c.CollectionServerModel.isSubscription(a) ? i.emit("collectionUnsubscribe", c.COLLECTION_TYPES.BROKEN_SUBSCRIPTION) : i.emit("collectionDeleted");
              break;
            case "clearCollection":
              if (!window.confirm(r.default.getAttribute(n, "data-confirm"))) break;
              s = X.getItems().map((function (e) {
                return e.id
              })), w.deleteRecords(s), w.setValue(""), A.setState("records", !1), i.emit("collectionCleared");
              break;
            case "disableHistory":
              A.setVisible(!1), i.emit("collectionsActivated", A.isVisible()), setTimeout((function () {
                w.setValue(""), A.setState("records", !1), f.emit("interactiveSettingChange", {
                  settingKey: "history",
                  enabled: !1
                })
              }), 700);
              break;
            case "syncCollections":
              ve(!0);
              break;
            case "editRecords":
              A.setState("select", !0);
              break;
            case "editSubscriptionRecords":
              A.setState("copy", !0);
              break;
            case "editCollection":
              o = w.getSelectedCollection().name, G.setValue(o), F.setVisible(!0).setFocus(!0);
              break;
            case "renameCollection":
              if (o = r.default.trim(G.getValue()), l = w.getValue(), o) {
                if ((s = w.getItems().filter((function (e) {
                  return e.name === o
                }))).length) return void F.setState("alert", !0);
                F.setVisible(!1), w.updateCollection(l, {
                  name: o
                }).setValue(""), A.setState("records", !1), i.emit("collectionRenamed")
              } else F.setFocus(!0);
              break;
            case "subscribe":
              if (u = r.default.getAttribute(n, "data-subscribe-type"), !e.UID) return void i.emit("collectionSubscribed", u);
              if (A.hasState("limit")) return q.setPosition(n.getBoundingClientRect(), !0).setVisible(!0), void i.emit("collectionSubscribed", u, !0);
              l = W.getValue() ? W.getValue() : r.default.getAttribute(n, "data-index", "0"), a = W.getItems().filter((function (e) {
                return e.id === l
              }))[0], w.subscribeToCollection(a), A.setState("records", !1), W.setValue(""), i.emit("collectionSubscribed", u);
              break;
            case "unsubscribeFromCollection":
              window.confirm(r.default.getAttribute(n, "data-confirm")) && ((l = w.getValue() || r.default.getAttribute(n, "data-index", "0")) || (l = W.getValue(), l = w.getItems().filter((function (e) {
                return e.sourceCollectionId === l
              }))[0].id), w.deleteCollection(l).setValue(""), A.setState("records", !1), W.setValue(""), i.emit("collectionUnsubscribed", c.COLLECTION_TYPES.SUBSCRIPTION));
              break;
            case "saveCollection":
              w.saveCollection(), i.emit("collectionSaved");
              break;
            case "shareCollection":
              d = (a = w.getSelectedCollection()) && c.CollectionServerModel.isSubscription(a), a && !d && ce.setState("active", a.public), fe.setState({
                top: Boolean(W.getValue()),
                subscription: d
              }).setVisible(!0);
              break;
            case "copyRecords":
              s = w.getItems(), te.renderData(me(s)), ee.setVisible(!0);
              break;
            case "expandSearch":
            case "collapseSearch":
              A.setState("search"), D.setValue(""), M.setFocus("expandSearch" === t);
              break;
            case "soundCollection":
              he.setText(r.default.trim(r.default.getAttribute(n, "data-text"))).setLanguage(r.default.getAttribute(n, "data-lang")).toggle();
              break;
            case "collectionMail":
              de.write()
          }
        })).on(S.HISTORY_APP_EVENTS.OPEN_HISTORY, (function () {
          var e = w.getHistoryCollectionId();
          e && (w.setValue(e), A.setVisible(), i.emit("collectionsActivated", A.isVisible()))
        })).bindFocusActivation(R).onFocusedElementActivation((function (e) {
          "toggleFav" === r.default.getAttribute(e, "data-action") && n.emit("toggleCollections", !A.isVisible())
        })), C.on("stateChanged:edited", (function (e) {
          e || w.setTranslation(I.getProperty("translation"))
        })), I.onSet("translation", ge).onChange("historyEnabled", (function (e) {
          w.emit("updateView"), Ee(), e && ve()
        })), A.on("stateChanged", (function (e, t) {
          var n;
          switch (e) {
            case "hidden":
              n = !t, C.setState("favourite", n), i.emit("collectionsOpened", n), t ? (this.setState({
                add: !1,
                menu: !1,
                select: !1,
                copy: !1
              }), W.setValue("")) : (ve(), oe.setVisible(!1), se.setVisible(!1), W.getItems() || w.getTopCollectionsList());
              break;
            case "records":
              t || this.setState("search", !1);
              break;
            case "select":
            case "copy":
              t || (X.setValue([]), pe.setState("selected", !1))
          }
        })), w.prepareData = function (t) {
          var n = {
              collection: e.COLLECTION_TITLES.collection,
              subscription: e.COLLECTION_TITLES.subscription
            },
            i = {
              blocks: []
            },
            o = [],
            s = t.filter((function (e) {
              return c.CollectionServerModel.isNotDeleted(e)
            }));
          if (r.default.isEmpty(s)) return i;
          var a = I.getProps().historyEnabled;
          return i.blocks.push({
            header: n.collection,
            collections: s.filter((function (e) {
              return !c.CollectionServerModel.isSubscription(e) && (e.type !== c.COLLECTION_TYPES.HISTORY || a)
            })).map((function (e) {
              return {
                color: e.color,
                isHistory: e.type === c.COLLECTION_TYPES.HISTORY,
                private: e.type !== c.COLLECTION_TYPES.FAVORITES && e.type !== c.COLLECTION_TYPES.HISTORY && !e.public,
                collectionId: e.id,
                collectionType: e.type,
                collectionName: e.name,
                collectionCount: e.recordsCount
              }
            }))
          }), (o = s.filter((function (e) {
            return c.CollectionServerModel.isSubscription(e)
          }))).length && i.blocks.push({
            header: n.subscription,
            collections: o.map((function (e) {
              return {
                color: e.color,
                collectionId: e.id,
                collectionName: e.name,
                collectionIcon: e.name.charAt(0),
                collectionCount: e.count || e.recordsCount,
                collectionAuthor: e.authorName,
                broken: e.type === c.COLLECTION_TYPES.BROKEN_SUBSCRIPTION
              }
            }))
          }), i
        }, w.on("itemsChanged", (function (t, n) {
          var r = this.getItems();
          !P.hasProperty("usingCollections") && r.length > 1 && P.setProperty("usingCollections", Date.now()), n || (this.initializeActiveId(P.getProperty("activeId")), window.location.pathname === e.COLLECTIONS_PATHNAME && A.setVisible(!0), i.emit("firstCollectionsChange"))
        })).on("valueChanged", (function (t) {
          if (t) {
            var n = this.getSelectedCollection();
            if (X.setItems(""), A.setState("broken", !1), !n) return A.setState("records", !1), void w.setValue("");
            var i = ne.getElement(),
              r = Q.getElement();
            ie.renderData(_e(n)), ne.setContent(n.name, {
              asText: !0
            }), K.getElement().setAttribute("data-collection-type", n.type), i.setAttribute("data-collection-type", n.type), i.setAttribute("data-color", n.color || ""), r.setAttribute("data-collection-type", n.type), r.setAttribute("data-subscribed", ""), w.getHistoryCollectionId() === n.id ? J.setItems(e.HISTORY_MENU_ITEMS) : c.CollectionServerModel.isSubscription(n) ? n.type === c.COLLECTION_TYPES.BROKEN_SUBSCRIPTION ? A.setState("broken") : J.setItems(e.SUBSCRIPTION_MENU_ITEMS) : J.setItems(e.COLLECTION_MENU_ITEMS)
          }
        })).on("addToNewCollection", (function (e) {
          if (A.hasState("copy") || A.hasState("select")) {
            var t = X.getSelectedItems();
            i.emit(A.hasState("select") ? "recordsMoved" : "recordsCopy", {
              count: t.length,
              sender: "list",
              new: 1
            }), A.hasState("select") ? (w.moveRecords(t, e), A.setState("select", !1)) : (w.addRecords(t, e).setValue(e), A.setState("copy", !1))
          } else w.getValue() && A.isVisible() ? (w.addRecords(X.getItems(), e).deleteCollection(w.getValue()), A.setState("records", !1)) : (this.addToNewCollection(e), i.emit("recordsMoved", {
            count: 1,
            sender: "toast",
            new: 1
          }))
        })).on("collectionsSynced", (function () {
          A.setState("sync", !1), Y.renderData(W.prepareData(W.getItems())), L.emit(b.COLLECTION_EVENTS.SYNCED, w)
        })).on("collectionsSet", (function () {
          L.emit(b.COLLECTION_EVENTS.COLLECTIONS_SET, w)
        })).on("noCollectionForActiveId", (function () {
          i.emit("noCollectionForActiveId")
        })).on("activeIdChanged", (function (e) {
          P.setProperty("activeId", e)
        })).on("recordsReceived", (function (e) {
          X.setItems(e), A.setState("records", !0);
          var t = w.getSelectedCollection() || W.getItems().find((function (e) {
            return e.id === W.getValue()
          }));
          t.recordsCount = e.length, ie.renderData(_e(t))
        })).on("gotTopList", (function (e) {
          W.setItems(e)
        })).on("checked", (function (e) {
          ! function (e) {
            R.setState("favourite", e), R.setEnabled(R.hasState("favourite") || N.isValid())
          }(e)
        })).on("checkLimit", (function (e) {
          A.setState("limit", e >= N.getProperty("limit")), U.setState("disabled", e >= N.getProperty("limit"))
        })).on("dbReady", (function () {
          C.setState("db_inactive", !1), ve(), L.emit(b.COLLECTION_EVENTS.DB_READY, w)
        })).on("resetedIds", (function () {
          i.emit("resetedIds")
        })).on("checkRecordError", (function (e) {
          i.emit("checkRecordError", e)
        })).on("upgradeneeded", (function () {
          P.setProperty("databaseBlocked", !1)
        })).on("databaseError", (function (e) {
          "blocked" === e.sender && P.setProperty("databaseBlocked", !0), i.emit("databaseError", e)
        })), N.on("dbIndexNotFound", (function (e) {
          i.emit("dbIndexNotFound", e)
        })).onChange("syncedUid", (function (e) {
          P.setProperty("syncedUid", e)
        })), P.hasProperty("syncedUid") && N.setProperty("syncedUid", P.getProperty("syncedUid")), I.hasProperty("historyEnabled") && Ee(), W.prepareData = function (t) {
          var n = {
              blocks: []
            },
            i = [],
            o = w.getItems();
          return r.default.isEmpty(t) || (o && (i = o.filter((function (e) {
            return c.CollectionServerModel.isNotDeleted(e) && e.type === c.COLLECTION_TYPES.SUBSCRIPTION
          }))), n.blocks.push({
            header: e.COLLECTION_TITLES.top,
            collections: t.map((function (e) {
              var t = i.filter((function (t) {
                return t.sourceCollectionId === e.id
              }));
              return {
                color: e.color,
                popular: !0,
                collectionId: e.id,
                collectionName: e.name,
                collectionCount: e.count,
                collectionAuthor: e.authorName,
                subscribeButton: !w.isMyCollection(e),
                subscribed: Boolean(t.length)
              }
            }))
          })), n
        }, W.on("valueChanged", (function (t) {
          var n = [];
          if (t) {
            var i = this.getItems().find((function (e) {
              return e.id === t
            }));
            X.setItems(""), A.setState("broken", !1);
            var r = ne.getElement(),
              o = Q.getElement();
            w.isMyCollection(i) ? o.setAttribute("data-subscribed", "") : (n = w.getItems().filter((function (e) {
              return e.sourceCollectionId === t && e.type === c.COLLECTION_TYPES.SUBSCRIPTION && c.CollectionServerModel.isNotDeleted(e)
            })), K.getElement().setAttribute("data-subscribed", Boolean(n.length)), r.setAttribute("data-subscribed", Boolean(n.length)), o.setAttribute("data-subscribed", Boolean(n.length))), ie.renderData(_e(i, Boolean(n.length))), o.setAttribute("data-collection-type", "popular"), w.getTopCollection(t), ne.setContent(i.name, {
              asText: !0
            }), r.setAttribute("data-color", i.color || ""), r.setAttribute("data-collection-type", "popular"), K.getElement().setAttribute("data-collection-type", "popular"), J.setItems(e.SUBSCRIPTION_MENU_ITEMS)
          }
        })), ae.on("itemSelected", (function (t) {
          var n = i.toJSON(),
            o = w.getRecords(),
            s = w.getItems();
          if (t) {
            var a = s.filter((function (e) {
              return e.id === t
            }))[0];
            if (t !== w.getActiveId()) {
              var c = o.find((function (e) {
                return n.text === e.text && n.srcLang + "-" + n.dstLang === e.lang && n.translation === e.translation
              }));
              c ? w.moveRecords(c, t) : w.addRecords(null, t), i.emit("recordsMoved", {
                count: 1,
                sender: "toast",
                new: 0
              }), w.setActiveId(t), oe.renderData({
                message: r.default.parseString(e.COLLECTION_TOAST_MESSAGES.added, a.name)
              }).setVisible(!0), se.setVisible(!1)
            } else se.setVisible(!1)
          }
        })), K.on("stateChanged:empty", (function (e) {
          z.setState("empty", e), M.setVisible(!e)
        })), X.prepareData = function (e) {
          var t = {},
            n = X.getValue();
          if (!e.length) return t;
          var i = e.filter((function (e) {
            return !e.filtered
          }));
          return t.empty = !i.length, t.items = i.map((function (e) {
            var t = e.lang.split("-");
            return {
              id: e.id,
              collectionId: e.collectionId,
              srcLang: t[0],
              dstLang: t[1],
              text: e.text,
              translation: e.translation,
              selected: n.indexOf(e.id) >= 0,
              srcDir: r.default.isRTLLang(t[0]) ? "rtl" : "ltr",
              dstDir: r.default.isRTLLang(t[1]) ? "rtl" : "ltr"
            }
          })), t
        }, X.on("itemSelected", (function () {
          var e, t = this.getSelectedItems()[0];
          !t || A.hasState("select") || A.hasState("copy") || (e = t.lang.split("-"), w.setActiveId(t.collectionId), A.setVisible(!1), I.setProperty({
            text: t.text,
            srcLang: e[0],
            dstLang: e[1]
          }, {
            sender: "collections"
          }), i.emit("recordInsert"), this.setValue([]))
        })), re.on("tap", (function () {
          this.setState("active")
        })), H.on("tap", (function () {
          var e = r.default.trim(k.getValue());
          e ? H.hasState("inactive") ? V.setState(A.hasState("limit") ? "limit" : "alert", !0) : (i.emit("collectionCreated", re.hasState("active")), w.createCollection({
            name: e,
            public: re.hasState("active")
          }), A.setState("add", !1)) : V.setFocus(!0)
        })), k.getModel().on("change", (function (e, t) {
          switch (e) {
            case "value":
              var n = r.default.trim(t).toUpperCase();
              if (!n || A.hasState("limit")) H.setState("inactive", !0);
              else {
                var i = w.getItems().filter((function (e) {
                  return e.name.toUpperCase() === n && c.CollectionServerModel.isNotDeleted(e) && !c.CollectionServerModel.isSubscription(e)
                }));
                H.setState("inactive", i.length)
              }
          }
        })), $.on("itemSelected", (function (e) {
          if (e)
            if (e !== w.getActiveId()) {
              var t = X.getSelectedItems();
              w.moveRecords(t, e).setActiveId(e), i.emit("recordsMoved", {
                count: t.length,
                sender: "list",
                new: 0
              }), A.setState("select", !1), Z.setVisible(!1)
            } else Z.setVisible(!1)
        })), te.on("itemSelected", (function (e) {
          if (e) {
            var t = X.getSelectedItems();
            A.setState("copy", !1), w.addRecords(t, e).setValue(e).setActiveId(e), ee.setVisible(!1), i.emit("recordsCopy", {
              count: t.length,
              new: 0
            })
          }
        })), z.on("tap", (function () {
          Q.isVisible() || i.emit("collectionMenuOpen"), Q.setPosition(z.getRect(), !0).setVisible(), B.setVisible(!1), F.setVisible(!1), z.setFocus(!0), Q.setState("empty", !X.getItems().length)
        })).on("stateChanged:focused", (function (e) {
          e || Q.setVisible(!1)
        })), J.prepareData = function (e) {
          return e ? {
            items: Object.keys(e).map((function (t) {
              var n = e[t];
              return {
                text: n.title,
                iconType: n.icon,
                action: n.action,
                confirm: n.confirm,
                itemType: t
              }
            }))
          } : {}
        }, Q.on("itemSelected", (function () {
          this.setVisible(!1)
        })), pe.on("tap", (function () {
          var e = this.hasState("selected"),
            t = e ? [] : K.getValues();
          X.setValue(t), this.setState("selected", !e)
        })), D.on("input", (function (e) {
          var t = w.filter(e);
          X.setItems(t)
        })), M.on("stateChanged:focused", (function (e) {
          e && i.emit("collectionSearchActivate")
        })), de.prepareData = function (t) {
          var n = {};
          return n.items = t.map((function (t) {
            return {
              value: t,
              title: e.SOCIAL_SERVICES[t]
            }
          })), n
        }, de.on("share", (function (e) {
          i.emit("collectionShareData", e)
        })).on("write", (function (e) {
          i.emit("collectionWriteMail", e)
        })).setItems(Object.keys(e.SOCIAL_SERVICES)), fe.on("stateChanged:hidden", (function (t) {
          if (!t) {
            var n = W.getValue() || w.getShareId();
            if (this.setState("links", n), !n) return;
            var i = w.getShareLink({
              utmSource: e.COLLECTION_UTM_SOURCE,
              collection_id: n
            });
            ue.setContent(i, {
              asText: !0
            }), de.setLink(i).setDescription(i), ue.on("tap", (function () {
              r.default.selectElement(this.getElement())
            }))
          }
        })), le.on("tap", (function () {
          this.hasState("copy") && r.default.copyText(ue.getElement().textContent) && (I.setProperty("tooltip", e.TOOLTIPS.copyLink2), i.emit("collectionLinkCopied")), r.default.selectElement(ue.getElement())
        })).on("stateChanged:copy", (function (t) {
          var n = this.getElement();
          n.setAttribute("data-tooltip-nohide", t), n.setAttribute("data-tooltip", e.TOOLTIPS.copyLink)
        })).setState("copy", r.default.copySupported), ce.on("tap", (function () {
          var e = w.getSelectedCollection();
          ce.hasState("active") && e.serverId && !window.confirm(r.default.getAttribute(this.getElement(), "data-confirm")) || (this.setState("active"), w.updateCollection(w.getValue(), {
            public: !e.public
          }))
        })).on("stateChanged:active", (function (e) {
          i.emit("collectionChanged", e), fe.setState("public", e)
        })), this.on("collectionsOpened", (function (e) {
          e && !P.getProperty("noCollectionAlert") && P.setProperty("noCollectionAlert", !0)
        })), ge.call(I), L.emit(b.COLLECTION_EVENTS.INIT, w), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CollectionNameInputPresenter = void 0;
      var i = n(156).InputPresenter.extend({
        init: function () {
          this.getView().on("stateChanged", (function (e, t) {
            switch (e) {
              case "alert":
              case "limit":
                this.setFocus(!0);
                break;
              case "focused":
                t || this.setState({
                  alert: !1,
                  limit: !1
                })
            }
          }))
        }
      });
      t.CollectionNameInputPresenter = i
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initCopying = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11);
      t.initCopying = function (e) {
        var t = this,
          n = this.getModel(),
          i = "",
          s = new o.TouchView({
            element: e.ELEMENTS.copyButton
          });
        return n.on("change", (function (e, t) {
          switch (e) {
            case "dstLang":
              s.setState("download", "sjn" === t && s.hasState("copy"));
              break;
            case "translation":
              i = t, s.setEnabled(t)
          }
        })), s.on("tap", (function () {
          var o;
          if (this.hasState("download")) return t.emit("textDownload");
          this.hasState("copy") && r.default.copyText(i) && (o = !0, n.setProperty("tooltip", e.TOOLTIPS.copy2)), t.emit("textCopy", o)
        })).on("stateChanged", (function (t, n) {
          var i = this.getElement();
          switch (t) {
            case "copy":
              i.setAttribute("data-tooltip-nohide", n), i.setAttribute("data-tooltip", e.TOOLTIPS.copy);
              break;
            case "download":
              i.setAttribute("data-tooltip", n ? e.TOOLTIPS.download : e.TOOLTIPS.copy)
          }
        })).setState("copy", r.default.copySupported), this.bindFocusActivation(s), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initAlignment = void 0, n(18), n(3), n(35);
      var i = n(69);
      t.initAlignment = function (e) {
        var t = this,
          n = this._settings,
          r = this.getModel(),
          o = this.getView(),
          s = new i.TemplateView({
            element: e.ELEMENTS.alignment,
            template: e.TEMPLATES.alignment
          }),
          a = function (e) {
            var i = r.getProperty("spellerData");
            return i && n.getProperty("autospeller") ? (JSON.parse(i).forEach((function (n) {
              if (n.s.length && !t.hasSpellerSavedWord(n.word)) {
                var i = n.s[0].length,
                  r = n.len - i;
                e.forEach((function (t, o) {
                  o % 2 == 0 && (n.pos + n.len <= t ? (e[o] += r, e[o + 1] += r) : n.pos <= e[o + 1] && (i !== e[o + 1] - t ? (e[o] = n.pos, e[o + 1] = n.pos + n.len) : e[o + 1] += r))
                }))
              }
            })), e) : e
          };
        return this.on("trAlign", (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!o.hasState("editing") || "editor" === t.sender) {
            if (!e) return s.setVisible(!1);
            var n = r.getProperty("text"),
              i = a(e),
              c = i.map((function (e, t) {
                if (t % 2 == 0) return {
                  text: n.slice(e, i[t + 1]),
                  gap: n.slice(i[t + 1], i[t + 2])
                }
              }));
            c = c.filter((function (e) {
              return e
            })), s.renderData({
              items: c,
              leftText: n.slice(0, i[0]),
              rightText: n.slice(i[i.length - 1])
            }).setVisible(!0).scrollTo(s.getScrollInfo().maxTop / 100 * r.getProperty("textScrollY"))
          }
        })), r.on("change", (function (e) {
          switch (e) {
            case "text":
            case "textScrollY":
            case "translation":
              s.setVisible(!1)
          }
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initAlternatives = void 0, n(3), n(35), n(18), n(14), n(79);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(94),
        s = n(62),
        a = n(447),
        c = n(448),
        u = n(168);
      t.initAlternatives = function (e) {
        var t, n = this,
          i = this.getView(),
          l = this.getModel(),
          d = new s.ListboxView({
            element: e.ELEMENTS.alternativesListbox,
            template: e.TEMPLATES.listbox,
            stopDefaultAction: !0
          }),
          f = new a.TranslationAlternativesPresenter({
            view: d,
            model: new c.TranslationAlternativesModel({
              srv: e.SRV,
              sid: e.SID,
              url: e.ALTERNATIVES_URL
            }, {
              validators: {
                word: function (e) {
                  return e && 1 === r.default.getValueTokens(e).length && "sjn" !== this.getProperty("dstLang") && !r.default.isUrl(r.default.trim(e))
                },
                translation: function (t) {
                  return t.length < e.MAX_PREDICTOR_QUERY
                },
                text: function (t) {
                  return t.length < e.MAX_PREDICTOR_QUERY
                },
                srcLang: function (t) {
                  var n = this.getProperty("dstLang");
                  return t && t !== n && r.default.hasProperty(e.ALTERNATIVES_LANGS, t + "-" + n)
                },
                dstLang: function (t) {
                  var n = this.getProperty("srcLang");
                  return t && n !== t && r.default.hasProperty(e.ALTERNATIVES_LANGS, n + "-" + t)
                }
              }
            })
          }),
          p = new s.ListboxView({
            element: e.ELEMENTS.alternativesTooltip,
            template: e.TEMPLATES.predictor
          });
        return this.on("trTextInput", (function () {
          d.setState("waiting", !1)
        })).on("trTextMouseDown", (function () {
          d.setVisible(!1).setState("waiting", !1)
        })).on("trTextClick", (function (e, t, n) {
          if (e === t.length || l.getProperty("complaint")) return d.setVisible(!1);
          var i = l.getProperty("activeSentenceAlign"),
            o = t.lastIndexOf(" ", e) < 0 ? 0 : t.lastIndexOf(" ", e - 1) + 1,
            s = n.target.textContent,
            a = l.getProperty("text");
          f.setWord(""), d.setVisible(!1).setState("waiting", !0), r.default.hasAlphaOrDigit(s[s.length - 1]) || (s = s.slice(0, -1));
          var c = t.slice(0, o);
          i && i[1] && (c = c.slice(i[1][0])), i && i[0] && (a = a.slice(i[0][0], i[0][0] + i[0][1])), f.setText(a).setTranslation(r.default.trim(c)).setWord(s)
        })).on("trTextFocus", (function (e) {
          e || d.setVisible(!1)
        })).on("trTextKeydown", (function (e) {
          if (d.isVisible()) {
            var t = l.getProperty("chosenAlternative");
            switch (e.keyCode) {
              case o.KEYBOARD_KEYS.UP:
                var n = d.getElement().lastElementChild;
                if (r.default.preventEvent(e), t)
                  for (; t && (t = t.previousElementSibling || n, !r.default.getDataAttr(t, "value")););
                else t = n;
                d.emit("itemHovered", t);
                break;
              case o.KEYBOARD_KEYS.DOWN:
                var i = d.getElement().firstElementChild;
                if (r.default.preventEvent(e), t)
                  for (; t && (t = t.nextElementSibling || i, !r.default.getDataAttr(t, "value")););
                else t = i;
                d.emit("itemHovered", t);
                break;
              case o.KEYBOARD_KEYS.ENTER:
                d.emit("itemSelected", r.default.getDataAttr(t, "value"));
                break;
              default:
                return d.setVisible(!1)
            }
          }
        })).on("showTooltip", (function (e) {
          d.isVisible() && p.renderData({
            value: e,
            values: [{
              value: e
            }]
          }).setEnabled(!0).setVisible(!0)
        })).on("hideAlternatives", (function () {
          return d.setVisible(!1)
        })), l.on("change", (function (e, t) {
          switch (e) {
            case "srcLang":
              f.setSrcLanguage(t);
              break;
            case "dstLang":
              f.setDstLanguage(t);
              break;
            case "translation":
              l.setProperty("userTranslation", "", {
                silent: !0
              })
          }
        })), window.addEventListener("scroll", (function () {
          d.isVisible() && d.setVisible(!1)
        })), f.prepareData = function (e) {
          var t = {},
            n = f.getWord();
          return i.hasState("select") || e && (e.filter((function (e) {
            return e.toUpperCase() !== n.toUpperCase()
          })), t.items = e.map((function (e) {
            return {
              text: e,
              value: e
            }
          }))), t
        }, f.on("ready", (function () {
          if (i.hasState("editing") && d.hasState("waiting")) {
            var e = window.getSelection();
            if (e && e.focusNode && !e.toString()) {
              var t = e.focusNode.parentNode;
              (t = r.default.trim(t.textContent) ? t : t.nextSibling) && d.setPosition(t.getBoundingClientRect(), !0)
            }
            d.setVisible(!0).setEnabled(!0)
          }
        })).on("itemSelected", (function (e) {
          n.emit(u.IDIOMS_EVENTS.CLEAR_IDIOMS), clearTimeout(t), n.emit("alternativeChosen", e, f.getTranslation())
        })), d.on("stateChanged:hidden", (function (e) {
          e && p.setVisible(!1)
        })).on("itemHovered", (function (e) {
          clearTimeout(t), p.setVisible(!1), r.default.toggleClass(e, "state-selected"), l.getProperty("chosenAlternative") && r.default.toggleClass(l.getProperty("chosenAlternative"), "state-selected"), l.setProperty("chosenAlternative", e), t = setTimeout((function () {
            var t = r.default.getDataAttr(e, "value");
            p.setPosition(e.getBoundingClientRect()), d.isVisible() && p.renderData({
              spinner: !0
            }).setEnabled(!0).setVisible(!0), n.emit("requestAlternative", t, f.getTranslation())
          }), 200)
        })).on("alternativesMouseOut", (function () {
          return p.setVisible(!1)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslationAlternativesPresenter = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(32),
        a = n(197);
      var c = s.Presenter.extend({
        init: function () {
          var e = this,
            t = this.getView(),
            n = this.getModel(),
            i = function () {
              t.setVisible(!1).setEnabled(!1)
            };
          this.requestSuggestion = r.default.debounce(a.PredictorPresenter.prototype.requestSuggestion, 200), n.on("error", i).on("invalid", (function () {
            return n.setProperty("data", "", {
              invalid: !0
            })
          })).on("set:items", (function (r) {
            if (!r) return i();
            var o = n.toJSON();
            o.items = n.getItems() || [], t.renderData(e.prepareData(o.items)), e.emit("ready", o)
          })).on("change", (function (i, r, o) {
            switch (i) {
              case "srcLang":
              case "dstLang":
              case "word":
                return t.setEnabled(!1), o.reason && n.setProperty("reason", o.reason), e.requestSuggestion()
            }
          })), t.on("tap", r.default.preventEvent).on("itemSelected", (function (n) {
            n && e.setValue(n).emit("itemSelected", e.getValue()), t.setVisible(!1)
          })).on(o.TouchView.eventTypes.OUT, (function (e) {
            r.default.preventEvent(e), t.emit("alternativesMouseOut")
          })).bindDOMEvents([o.TouchView.eventTypes.OVER, o.TouchView.eventTypes.OUT])
        },
        setText: function (e, t) {
          return this.getModel().setProperty("text", e, {
            reason: t
          }), this
        },
        setTranslation: function (e, t) {
          return this.getModel().setProperty("translation", e, t), this
        },
        getTranslation: function () {
          return this.getModel().getProperty("translation")
        },
        setWord: function (e, t) {
          return this.getModel().setProperty("word", e, t), this
        },
        getWord: function () {
          return this.getModel().getProperty("word")
        },
        setValue: function (e, t) {
          return this.getModel().setProperty("value", e, t), this
        },
        getValue: function () {
          return this.getModel().getProperty("value")
        },
        setSrcLanguage: function (e, t) {
          return this.getModel().setProperty("srcLang", e, t), this
        },
        setDstLanguage: function (e, t) {
          return this.getModel().setProperty("dstLang", e, t), this
        },
        requestSuggestion: function () {
          return this.getModel().requestSuggestion(), this
        }
      });
      t.TranslationAlternativesPresenter = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslationAlternativesModel = void 0;
      var i = n(81),
        r = n(174),
        o = n(59),
        s = i.ListboxModel.extend({
          init: function () {
            r.SyncModel.prototype.init.call(this)
          },
          abort: function () {
            r.SyncModel.prototype.abort.call(this)
          },
          setRequest: function (e) {
            r.SyncModel.prototype.setRequest.call(this, e)
          },
          getData: function () {
            var e = this.getProps();
            return {
              word: e.word,
              src: e.text,
              dst: e.translation
            }
          },
          getParams: function () {
            var e = this.getProps();
            return {
              id: [e.sid, e.counter, 0].join("-"),
              srv: e.srv,
              lang: e.srcLang + "-" + e.dstLang
            }
          },
          getDefaults: function () {
            return {
              srv: "",
              url: "/",
              word: "",
              src: "",
              dst: "",
              srcLang: "",
              dstLang: "",
              index: 0,
              sid: this.getId()
            }
          },
          requestSuggestion: function () {
            var e = this,
              t = new o.HTTPRequest(this.getProperty("url"));
            if (this.abort(), !this.isValid()) return this;
            var n = this.getData(),
              i = this.getParams();
            return this.emit("query", i), this._isCachedArrayValid(n.word, n.dst) ? (this.handleResponse(this._cachedResponseArray), this) : this.setRequest(t.setType(o.HTTPRequest.types.FORM).setData(n).setParams(i).setMethod(o.HTTPRequest.methods.POST).send((function (t, i) {
              if (t) return e.emit("error", t);
              e._cachedDst = n.dst, e._cachedWord = n.word, e._cachedResponseArray = i.body.alternatives, e.handleResponse(e._cachedResponseArray)
            })))
          },
          handleResponse: function (e) {
            e && 0 !== e.length && this.setItems(e)
          },
          _isCachedArrayValid: function (e, t) {
            return this._cachedWord && this._cachedResponseArray && this._cachedDst === t && this._cachedWord === e
          }
        });
      t.TranslationAlternativesModel = s
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initSourceTranslit = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(323),
        s = n(11),
        a = n(324);
      t.initSourceTranslit = function (e) {
        var t = this,
          n = this.getView(),
          i = this._settings,
          c = this.getModel(),
          u = new o.TranslitModel({
            sid: e.SID,
            srv: e.SRV,
            url: e.TRANSLIT_URL
          }, {
            validators: {
              lang: function (t) {
                return r.default.hasProperty(e.TRANSLIT_LANGS, t)
              },
              text: function (t) {
                return t && t.length <= e.MAX_TRANSLIT_TEXTLENGTH
              }
            }
          }),
          l = new s.TouchView({
            element: e.ELEMENTS.sourceTranslitButton
          }),
          d = new a.TranslitPresenter({
            model: u
          });
        return n.on("stateChanged:translit_source", (function (e) {
          t.emit("containerHeightChanged"), i.setProperty("sourceTranslitEnabled", e), d.setLang(c.getProperty("srcLang")).setText(c.getProperty("text"))
        })).setState("translit_source", i.getProperty("sourceTranslitEnabled")), c.on("change", (function (e) {
          switch (e) {
            case "text":
            case "srcLang":
              l.setVisible(u.isValid("lang", this.getProperty("srcLang")) && u.isValid("text", this.getProperty("text")))
          }
        })).on("set:translation", (function () {
          n.hasState("translit_source") ? d.setLang(this.getProperty("srcLang")).setText(this.getProperty("text")) : d.setText("")
        })), l.on("tap", (function () {
          t.emit("translitToggle", "source", n.hasState("translit_source")), n.setState("translit_source")
        })).on("stateChanged:hidden", (function (e) {
          e ? d.setText("") : t.emit("translitTogglerShown", "source")
        })), d.on("error", (function () {
          t.emit("translitError", "source")
        })).on("result", (function (e) {
          c.setProperty("sourceTranslit", e)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTargetTranslit = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(323),
        s = n(11),
        a = n(324);
      t.initTargetTranslit = function (e) {
        var t = this,
          n = this.getView(),
          i = this._settings,
          c = this.getModel(),
          u = new o.TranslitModel({
            sid: e.SID,
            srv: e.SRV,
            url: e.TRANSLIT_URL
          }, {
            validators: {
              lang: function (t) {
                return r.default.hasProperty(e.TRANSLIT_LANGS, t)
              },
              text: function (t) {
                return t && t.length <= e.MAX_TRANSLIT_TEXTLENGTH
              }
            }
          }),
          l = new s.TouchView({
            element: e.ELEMENTS.targetTranslitButton
          }),
          d = new a.TranslitPresenter({
            model: u
          });
        return n.on("stateChanged:translit_target", (function (e) {
          t.emit("containerHeightChanged"), i.setProperty("targetTranslitEnabled", e), d.setLang(c.getProperty("dstLang")).setText(c.getProperty("translation"))
        })).setState("translit_target", i.getProperty("targetTranslitEnabled")), c.on("change", (function (e) {
          switch (e) {
            case "dstLang":
            case "translation":
              l.setVisible(u.isValid("lang", this.getProperty("dstLang")) && u.isValid("text", this.getProperty("translation")))
          }
        })).on("set:translation", (function (e) {
          n.hasState("translit_target") ? d.setLang(this.getProperty("dstLang")).setText(e) : d.setText("")
        })), l.on("tap", (function () {
          t.emit("translitToggle", "target", n.hasState("translit_target")), n.setState("translit_target")
        })).on("stateChanged:hidden", (function (e) {
          e ? d.setText("") : t.emit("translitTogglerShown", "target")
        })), d.on("error", (function () {
          t.emit("translitError", "target")
        })).on("result", (function (e) {
          c.setProperty("targetTranslit", e)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTranslator = void 0, n(14), n(13), n(23), n(3), n(22), n(18), n(52), n(12), n(322), n(100), n(34);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(62),
        s = n(199),
        a = n(69),
        c = n(216),
        u = n(186),
        l = n(452),
        d = n(453),
        f = n(94),
        p = n(11),
        h = n(168);

      function g(e) {
        var t = e.indexOf("‍") < 0 ? e.replace(/\ufe0f/g, "") : e;
        return r.default.getEmojiCodes(t).join("-")
      }

      function m(e) {
        var t = 0,
          n = [];
        return r.default.getEmoji(e).forEach((function (i) {
          t !== i.index && n.push({
            value: e.slice(t, i.index)
          }), t = i.index + i.value.length, n.push({
            value: i.value,
            emojiCode: g(i.value)
          })
        }), this), t < e.length && r.default.getValueTokens(e.slice(t)).forEach((function (e, t, i) {
          n.push({
            value: e + (t !== i.length - 1 ? " " : "")
          })
        })), n
      }
      t.initTranslator = function (e) {
        var t, n, i = this,
          g = this,
          _ = 0,
          v = this.getView(),
          E = this.getModel(),
          T = this._settings,
          y = E.toJSON(),
          S = new o.ListboxView({
            element: e.ELEMENTS.selectTooltip,
            template: e.TEMPLATES.empty
          }),
          b = this.getTranslatorView(),
          O = new c.TranslatorModel2({
            srv: e.SRV,
            sid: e.SID,
            url: e.TRANSLATOR_URL,
            options: u.TranslatorModel.options.ALIGN | e.TRANSLATOR_EXTRA_OPTIONS
          }, {
            validators: {
              text: function () {
                var t = this.getText().join("\n");
                return t && t.length <= e.MAX_TRANSLATOR_QUERY && !r.default.isUrl(t)
              },
              srcLang: function (t) {
                return r.default.hasProperty(e.TRANSLATOR_LANGS, t) && t !== this.getProperty("dstLang")
              },
              dstLang: function (t) {
                return r.default.hasProperty(e.TRANSLATOR_LANGS, t) && t !== this.getProperty("srcLang")
              }
            }
          }),
          C = new s.TranslatorPresenter({
            view: b,
            model: O
          }),
          P = new a.TemplateView({
            element: e.ELEMENTS.measurerDst,
            template: e.TEMPLATES.measurer
          }),
          I = new o.ListboxView({
            element: e.ELEMENTS.predictorDst,
            template: e.TEMPLATES.predictor
          }),
          L = new d.TranslationPredictorModel({
            srv: e.SRV,
            sid: e.SID,
            url: e.TRANSLATE_PREDICTOR_URL,
            options: d.TranslationPredictorModel.options.ALIGN
          }, {
            validators: {
              text: function (t) {
                return t && t.length <= e.MAX_PREDICTOR_QUERY && "sjn" !== this.getProperty("srcLang") && !r.default.isUrl(r.default.trim(t))
              },
              prefix: function (t) {
                return t && t.length <= e.MAX_PREDICTOR_QUERY
              },
              srcLang: function (e) {
                return e && e !== this.getProperty("dstLang")
              },
              dstLang: function (e) {
                return e && e !== this.getProperty("srcLang")
              }
            }
          }),
          R = new l.TranslationPredictorPresenter({
            view: I,
            model: L
          });
        return this.on("textDownload", (function () {
          C.renderToImage(e.TR_FILENAME)
        })).on("editorResult", (function (e) {
          b.hasState("waitingAlternative") || E.setProperty("translation", e)
        })).on("trTextTap", (function () {
          v.hasState("editing") && I.setEnabled(!1)
        })).on("trTextClick", (function (e, t) {
          v.hasState("editing") && (R.prepareActiveSentence(e, O.getProperty("sentencesAlign")), E.setProperty("userTranslation", t), L.setProperty("caret", e))
        })).on("trTextFocus", (function () {
          I.setEnabled(!1)
        })).on("textFocus", (function (e) {
          e && v.hasState("allowed_editing") && g.emit("action", "saveEditing")
        })).on("trTextKeydown", (function (e, t) {
          switch (e.keyCode) {
            case f.InputView.keys.ENTER:
              if (e.shiftKey) break;
              if (T.isOptionEnabled("shift") && r.default.preventEvent(e), I.isEnabled()) r.default.preventEvent(e), R.setValue(I.getValues()[0], {
                enter: !0
              });
              else if (e.ctrlKey && t.sender) {
                var n = t.sender.getSelection().start,
                  i = t.sender.getValue().slice(0, n);
                R.setFullword(0).setPrefix(i, "predictor").setIndex(n)
              }
              break;
            default:
              g.emit(h.IDIOMS_EVENTS.CLEAR_IDIOMS), I.setEnabled(!1)
          }
        })).on("trTextKeyup", (function (e, t) {
          switch (e.keyCode) {
            case f.InputView.keys.UP:
            case f.InputView.keys.DOWN:
            case f.InputView.keys.LEFT:
            case f.InputView.keys.RIGHT:
              R.prepareActiveSentence(t.caret, O.getProperty("sentencesAlign"))
          }
        })).on("trTextInput", (function (e, t) {
          var n = {},
            i = O.getProperty("sentencesAlign"),
            o = L.getProperty("sentenceIndex");
          if ("predictor" !== t.sender && !r.default.isEmpty(i) && !r.default.isEmpty(i[o])) {
            n.total = e.length - t.oldValue.length;
            var s = i[o][1];
            n.total < 0 && Math.abs(n.total) > s[1] + s[0] - t.caret && (n = l.TranslationPredictorPresenter.calculateDifference(n, o, i, t.caret));
            var a = l.TranslationPredictorPresenter.updateAlign("", O.getProperty("align"), n, o);
            O.setProperty("align", a), i = l.TranslationPredictorPresenter.getSentenceAlignFromAlign(a), O.setProperty("sentencesAlign", i)
          }
        })).on("editorToggle", (function () {
          I.setEnabled(!1)
        })).on("requestAlternative", (function (e, t) {
          var n = r.default.trim(t + " " + e);
          if (!L.wasRequested(n)) {
            var i = E.getProperty("activeSentenceAlign"),
              o = E.getProperty("text"),
              s = n.length;
            i && i[0] && (o = o.slice(i[0][0], i[0][0] + i[0][1])), i && i[1] && (s += i[1][0]), L.setProperty("alternative", e), R.setText(o).setFullword(1).setIndex(s).setPrefix(n, "alternatives")
          }
        })).on("alternativeChosen", (function (e, n) {
          var r = (n ? n + " " : "") + e;
          if (L.isCachedPrefixValid(r)) {
            var o = E.getProperty("activeSentenceAlign"),
              s = r.length;
            o && o[1] && (s += o[1][0]), R.setIndex(s), L.setProperty("pos", e.length).showCashedResult(r), R.setValue(L.getCashedResult(r))
          } else {
            L.wasRequested(r) || i.emit("requestAlternative", e, n);
            var a = E.getProperty("userTranslation") || E.getProperty("translation"),
              c = L.getProperty("caret"),
              u = a.slice(0, c);
            u = u.slice(0, u.lastIndexOf(" ") + 1), u += e, b.renderData(C.prepareData(u, {
              noAlign: !0
            })), clearTimeout(t), t = setTimeout((function () {
              return R.emit("error")
            }), 8e3), L.setProperty("alternative", e), b.setState("waitingAlternative", !0)
          }
        })), this.on("action:retry", (function () {
          return C.requestTranslation()
        })).on("action:openEditing", (function () {
          b.setFocus(!0).setState("suggest", !0)
        })).on("action:sendSuggestion", (function () {
          b.setFocus(!0).setState("suggest", !1)
        })).on("action:cancelTranslationSuggestion", (function () {
          return b.setState("suggest", !1)
        })), E.on("change", (function (t, n, i) {
          switch (t) {
            case "srcLang":
              R.setSrcLanguage(n, {
                reason: "lang"
              }), C.setSrcLanguage(n), O.setProperty("align", "");
              break;
            case "dstLang":
              R.setDstLanguage(n, {
                reason: "lang"
              }), C.setDstLanguage(n), b.setLanguage(n), O.setProperty("align", "");
              break;
            case "text":
              R.setPrefix("").setText(n);
              break;
            case "leadSpacingsCount":
              O.getProperty("align") && b.renderData(C.prepareData(O.getProperty("translation"), {
                align: O.getProperty("align")
              }));
              break;
            case "textScrollY":
              I.setEnabled(!1), i.userScroll && b.scrollTo(b.getScrollInfo().maxTop / 100 * n);
              break;
            case "trText":
              var o = Boolean(0 === O.getProperty("counter") && e.TRANSLATION);
              if (O.setProperty("align", ""), O.setProperty("sentencesAlign", ""), "auto" === i.reason && n.length > e.MAX_SYNC_LENGTH) break;
              O.setProperty("shouldNotRequest", o), C.setText(r.default.truncateText(n, e.MAX_TRANSLATOR_QUERY), i.reason, o), o && O.setProperty("counter", e.TRANSLATION_COUNTER);
              break;
            case "targetTranslit":
              b.getContentElement().setAttribute("data-translit", n);
              break;
            case "complaint":
              var s = this.getProperty("selText"),
                a = !s || s === this.getProperty("trText");
              b.setState("complaint", n && a), b.getContentElement("[data-complaint-target]").setAttribute("data-complaint-target", a)
          }
        })).on("set", (function (t, n, i) {
          var o, s, a, c, u = E.getProperty("translation"),
            d = E.getProperty("text"),
            f = 0,
            p = L.getProperty("sentenceIndex");
          switch (t) {
            case "userTranslation":
              if (!v.hasState("editing")) return;
              if (a = O.getProperty("sentencesAlign")) {
                if (a = a[p], !(c = l.TranslationPredictorPresenter.getSentenceAlignFromAlign(O.getProperty("oldAlign"))[p])) return;
                if (u = u.slice(c[1][0], c[1][0] + c[1][1]), n.slice(a[1][0], a[1][0] + a[1][1]) === u) return;
                s = this.toJSON(), o = i.caret || 0, a && (f = a[1][0], d = d.slice(a[0][0], a[0][0] + a[0][1])), R.setFullword(0).setPrefix(n.slice(f, o), i.sender || i.reason).setText(d).setIndex(o).setSrcLanguage(s.srcLang).setDstLanguage(s.dstLang)
              }
              break;
            case "trText":
              "enter" === i.reason && C.setText(r.default.truncateText(n, e.MAX_TRANSLATOR_QUERY), i.reason)
          }
        })), C.on("error", (function (e) {
          g.emit("translationError", e)
        })).on("query", (function () {
          var e = O.getParams().id;
          g.emit("translateQuery", e)
        })).on("result", (function (e) {
          E.setProperty("translation", e), g.emit("changeEditorValue", e)
        })).on("expired", (function (e) {
          g.emit("refreshAlertShow", e)
        })), C.prepareData = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = [],
            i = {},
            o = [],
            s = E.getProperty("leadSpacingsCount") || 0,
            a = O.getProperty("sentencesAlign"),
            c = t.align || O.getProperty("align");
          !t.noAlign && c || (c = ""), c.split(";").forEach((function (e, t) {
            if (e && !(e.length < 2)) {
              var n = e.split(",")[0].split("-").map((function (e) {
                return e.split(":").map(Number)
              }));
              1 === n.length && a && (n = a[t]), o.push(n), e.split(",").slice(1).forEach((function (e) {
                var t = e.split("-"),
                  n = t[0].split(":").map(Number),
                  o = t[1];
                n[0] += s, r.default.hasProperty(i, o) ? i[o].push(n) : i[o] = [n]
              }))
            }
          })), !t.noAlign && c && O.setProperty({
            sentencesAlign: o.length ? o : "",
            align: c,
            oldAlign: c
          });
          var u = Object.keys(i).map((function (e) {
              return e.split(":").map(Number)
            })),
            l = 0,
            d = 0;
          return e.split(/\r?\n/).forEach((function (e, t, o) {
            var s = [];
            m(e).forEach((function (e, t, n) {
              for (var o; u[d] && l >= u[d][0];) {
                if (l === u[d][0]) {
                  var a = u[d].join(":");
                  i[a].forEach((function (e) {
                    o = o ? [o, e[0], e[0] + e[1]].join(":") : [e[0], e[0] + e[1]].join(":")
                  }))
                }
                d++
              }
              s.push({
                value: r.default.trim(e.value),
                align: o || ""
              }), n.length - 1 !== t && s.push({
                value: " "
              }), l += r.default.trim(e.value).length + 1
            })), n.push({
              values: s,
              needLineBreak: null != o[t + 1]
            })
          })), {
            chunks: n
          }
        }, C.renderToImage = function (e) {
          var t = document.createElement("canvas"),
            n = t.getContext("2d"),
            i = b.getContentElement(),
            o = r.default.getStyle(i);
          return t.width = i.scrollWidth + 20, t.height = i.scrollHeight + 30 + 14, n.rect(0, 0, t.width, t.height), n.fillStyle = "#fff", n.fill(), n.font = [o.fontSize, o.fontFamily].join(" "), n.fillStyle = o.color, n.textBaseline = "top", r.default.wrapCanvasText(n, this.getModel().getProperty("translation"), 10, 10, i.scrollWidth, window.parseFloat(o.lineHeight)), n.font = "14px Arial, Helvetica, sans-serif", n.fillStyle = "rgba(0, 0, 0, 0.5)", n.fillText(document.location.hostname, 10, t.height - 14 - 10), t.msToBlob ? window.navigator.msSaveBlob(t.msToBlob(), e) : r.default.downloadFile(t.toDataURL("image/png"), e), this
        }, O.on("change:sentencesAlign", (function (e) {
          var t = L.getProperty("sentenceIndex"),
            n = e && e[t];
          E.setProperty("activeSentenceAlign", n)
        })), b.on("tap", (function (e) {
          e.target && -1 !== e.target.className.indexOf("idiom") || S.setState("visible", !1)
        })).on("scroll", (function (e) {
          if (e.target === this.getContentElement()) {
            var t = this.getScrollInfo();
            E.setProperty("translationScrollY", 100 / t.maxTop * t.top, {
              userScroll: this.userScroll
            }), this.userScroll || (this.userScroll = !0)
          }
        })).on("keydown", (function (e) {
          var t = this.getContentElement();
          r.default.hasCtrlKey(e) && e.target === t && e.keyCode === f.InputView.keys.A && (r.default.preventEvent(e), r.default.selectElement(t))
        })).on("contentChanged", (function () {
          this.scrollTo(this.getScrollInfo().maxTop / 100 * E.getProperty("textScrollY"))
        })).on(p.TouchView.eventTypes.START, (function (e) {
          e.target && -1 !== e.target.className.indexOf("idioms-info") || v.setState("manualselect", e.pressure && !v.hasState("editing"))
        })).on(p.TouchView.eventTypes.OUT, (function () {
          g.emit("trAlign", null), g.emit("trSelect", null), clearTimeout(n), S.setState("visible", !1)
        })).on(p.TouchView.eventTypes.OVER, (function (e) {
          var t = this.getClosest(e.target, (function (e) {
            return e.hasAttribute("data-align")
          }), !0);
          v.setState("manualselect", e.pressure && !v.hasState("editing"));
          var i = t && t.getAttribute("data-align");
          i && !this.hasState("complaint") && (g.emit("trAlign", i.split(":").map(Number)), !g._showedExamples && _ < 2 && E.getProperty("supportExamples") && !v.hasState("editing") && (S.setPosition(e.target.getBoundingClientRect(), !0), n = setTimeout((function () {
            g.emit("selectTooltipShown"), _++, S.setState("visible", !0)
          }), 50)))
        })).bindDOMEvents("scroll", !0).bindDOMEvents(["keydown", p.TouchView.eventTypes.OUT, p.TouchView.eventTypes.OVER, p.TouchView.eventTypes.START]), R.prepareData = function (e) {
          var t = R.toJSON(),
            n = t.index + t.pos,
            i = O.getProperty("sentencesAlign"),
            o = i[t.sentenceIndex] && i[t.sentenceIndex][1],
            s = E.getProperty("translation"),
            a = s.length;
          return r.default.isEmpty(o) || (a = o[1] + o[0] + 1), s = s.slice(n, a), {
            values: l.TranslationPredictorPresenter.compareTranslations(s, e[0]).map((function (e, t) {
              return {
                value: e,
                highlighted: t % 2 != 0
              }
            })),
            value: e[0]
          }
        }, R.on("sentenceAlign", (function (e, t) {
          return i.emit("trAlign", e, t)
        })).on("activeSentenceChanged", (function (e) {
          var t = O.getProperty("sentencesAlign"),
            n = t && t[e];
          E.setProperty("activeSentenceAlign", n)
        })).on("error", (function () {
          b.hasState("waitingAlternative") && (b.renderData(C.prepareData(E.getProperty("userTranslation"), {
            align: O.getProperty("align")
          })), b.setState({
            waitingAlternative: !1,
            alternative_error: !0
          }), i.emit("hideAlternatives"), setTimeout((function () {
            return b.setState("alternative_error", !1)
          }), 4e3))
        })).on("alternativesEndingReady", (function (e) {
          var t = L.getProperty("alternative"),
            n = r.default.getValueTokens(e[0])[0];
          !r.default.startsWith(n, t) || n.length > t.length && r.default.isAlphaOrDigit(n[t.length]) || (b.hasState("waitingAlternative") ? (b.setState("waitingAlternative", !1), R.setValue(e[0])) : i.emit("showTooltip", e[0]))
        })).on("ready", (function (e) {
          var t = E.getProperty("userTranslation");
          if ("input" !== e.reason && "predictor" !== e.reason || !T.isOptionEnabled("suggest")) return I.setEnabled(!1);
          var n = l.TranslationPredictorPresenter.createRange(t, e);
          if (!n) return I.setEnabled(!1);
          P.renderData({
            text: t.slice(n.start, n.end) || ".",
            leftText: t.slice(0, n.start),
            rightText: t.slice(n.end)
          }).scrollTo(P.getScrollInfo().maxTop / 100 * E.getProperty("textScrollY"));
          var r = P.getContentElement("[data-measurer-target]");
          r && I.setPosition(r.getBoundingClientRect()), i.emit("dstPredictorShow", e)
        })).on("predictDst", (function (e, t) {
          var n = L.getProperty("sentenceIndex"),
            r = E.getProperty("userTranslation") || E.getProperty("translation");
          e.oldAlign = O.getProperty("sentencesAlign");
          var o = l.TranslationPredictorPresenter.prepareValue(e, r),
            s = l.TranslationPredictorPresenter.updateAlign(o.modifiedAlign, O.getProperty("align"), {
              total: o.alignDifference
            }, n);
          o.align[n + 1] && 0 === o.align[n + 1][1][1] && (s = l.TranslationPredictorPresenter.updateAlign("", s, {
            total: 1
          }, n + 1), o.text = o.text.slice(0, o.caret) + " " + o.text.slice(o.caret), o.align = l.TranslationPredictorPresenter.getSentenceAlignFromAlign(s), o.caret++, R.prepareActiveSentence(o.caret, o.align)), O.setProperty("align", s), b.renderData(C.prepareData(o.text)), E.setProperty("translation", o.text), O.setProperty("sentencesAlign", o.align), I.setEnabled(!1), e.caret = o.start, i.emit("dstPredictorApply", e, t.enter)
        })), y.trText && C.setText(r.default.truncateText(y.trText, e.MAX_TRANSLATOR_QUERY), "auto"), e.TRANSLATION && O.setProperty("translation", e.TRANSLATION, {
          align: e.ALIGN
        }), y.srcLang && (C.setSrcLanguage(y.srcLang), R.setSrcLanguage(y.srcLang)), y.dstLang && (C.setDstLanguage(y.dstLang), b.setLanguage(y.dstLang), R.setDstLanguage(y.dstLang)), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslationPredictorPresenter = void 0, n(18), n(22), n(52), n(3);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(32),
        s = n(197);
      var a = o.Presenter.extend({
        init: function () {
          var e = this,
            t = this,
            n = this.getView(),
            i = this.getModel(),
            o = function () {
              n.setVisible(!1).setEnabled(!1)
            };
          this.requestSuggestion = r.default.debounce(s.PredictorPresenter.prototype.requestSuggestion, 200), n.on("tap", r.default.preventEvent).on("itemSelected", (function (e) {
            e && t.setValue(e)
          })), i.on("set", (function (e, i, r) {
            var s;
            switch (e) {
              case "items":
                return i ? ((s = this.toJSON()).items = this.getItems() || [], "alternatives" === s.reason ? t.emit("alternativesEndingReady", s.items) : (n.renderData(t.prepareData(s.items)).setEnabled(!0).setVisible(!0), t.emit("ready", s))) : o();
              case "value":
                if (!i) return;
                return (s = this.toJSON()).items = this.getItems() || [], s.align = this.getProperty("align"), t.emit("predictDst", s, r);
              case "prefix":
                if (n.setEnabled(!1), r.reason && this.setProperty("reason", r.reason), this.isValid() && this.isCachedPrefixValid()) return this.showCashedResult()
            }
          })).on("error", (function () {
            o(), e.emit("error")
          })).on("change", (function (e, i, r) {
            switch (e) {
              case "text":
              case "limit":
              case "prefix":
              case "srcLang":
              case "dstLang":
                n.setEnabled(!1), r.reason && this.setProperty("reason", r.reason), "prefix" !== e && this.clearCash(), this.isCachedPrefixValid() ? n.setEnabled(!0) : t.requestSuggestion();
                break;
              case "sentenceIndex":
                t.emit("activeSentenceChanged", i), this.clearCash()
            }
          })).on("invalid", o)
        },
        prepareActiveSentence: function (e, t) {
          var n = [];
          if (t && t.length) {
            var i = a.getSentenceIndex(t, e);
            this.getModel().setProperty("sentenceIndex", i), n.push(t[i][0][0]), n.push(t[i][0][1] + t[i][0][0]), this.emit("sentenceAlign", n, {
              sender: "editor"
            })
          }
        },
        setText: function (e, t) {
          return this.getModel().setProperty("text", e, {
            reason: t
          }), this
        },
        setPrefix: function (e, t) {
          return this.getModel().setProperty("prefix", e, {
            reason: t
          }), this
        },
        setIndex: function (e) {
          return this.getModel().setProperty("index", e), this
        },
        setValue: function (e, t) {
          return this.getModel().setProperty("value", e, t), this
        },
        setFullword: function (e, t) {
          return this.getModel().setProperty("fullwordPrefix", e, t), this
        },
        setSrcLanguage: function (e, t) {
          return this.getModel().setProperty("srcLang", e, t), this
        },
        setDstLanguage: function (e, t) {
          return this.getModel().setProperty("dstLang", e, t), this
        },
        requestSuggestion: function () {
          return this.getModel().requestSuggestion(), this
        }
      }, {
        createRange: function (e, t) {
          var n = {};
          return n.end = t.index, n.start = n.end + t.pos, n
        },
        getSentenceIndex: function (e, t) {
          var n = e.length - 1;
          return 0 === t ? n = 0 : e && e.forEach((function (e, i) {
            var r = e[1][0],
              o = e[1][0] + e[1][1];
            t >= r && t <= o && (n = i)
          })), n
        },
        getSentenceAlignFromAlign: function (e) {
          if (e) return e.split(";").map((function (e) {
            return e.split(",")[0].split("-").map((function (e) {
              return e.split(":").map((function (e) {
                return Number(e)
              }))
            }))
          }))
        },
        calculateDifference: function (e, t, n, i) {
          var o, s, a = t + 1,
            c = n[t][1],
            u = i - c[0],
            l = e.total - u + c[1];
          for (e[t] = u - c[1]; l < 0 && !r.default.isEmpty(n[a]);) {
            var d = n[a - 1][1];
            l += o = (s = n[a][1])[0] - (d[1] + d[0]), u = Math.abs(l) > s[1] ? 0 : s[1] + l, l += s[1] - u, e[a] = {}, e[a].difference = u - s[1], e[a].gap = o, a++
          }
          return e
        },
        compareTranslations: function (e, t) {
          for (var n, i = [], r = [], o = e.split(" "), s = t.split(" "), a = 0; a < s.length; a++) {
            var c = s[a];
            o.indexOf(c) < 0 ? (n || (i.push(r.join(" ") + " "), r = []), r.push(c), n = !0) : (n && (i.push(r.join(" ") + " "), r = []), r.push(c), n = !1)
          }
          return r.length && i.push(r.join(" ")), i
        },
        updateAlign: function (e, t, n, i) {
          var r, o = [],
            s = e;
          return t.split(";").forEach((function (e, t) {
            var a;
            if (t === i) {
              if (r = n[t] || n.total, !s) {
                if (e.length < 2) return;
                (s = e.split(",")[0].split("-"))[1] = s[1].split(":"), s[1][1] = Number(s[1][1]) + r, s[1][1] < 0 && (s[1][1] = 0), s[1] = s[1].join(":"), s = s.join("-")
              }
              o.push(s)
            } else t > i ? (a = e.split(","), n[t] ? ((a = a[0].split("-"))[1] = a[1].split(":"), a[1][0] = Number(a[1][0]) + r, a[1][1] = Number(a[1][1]) + n[t].difference, a[1] = a[1].join(":"), o.push(a.join("-")), r += n[t].difference - n[t].gap) : (a = a.map((function (e) {
              var t = e.split("-");
              return t[1] = t[1].split(":"), t[1][0] = Number(t[1][0]) + r, t[1] = t[1].join(":"), t.join("-")
            })), o.push(a.join(",")))) : o.push(e)
          })), o.join(";")
        },
        prepareValue: function (e, t) {
          var n = e.pos,
            i = e.value,
            o = e.sentenceIndex,
            s = e.oldAlign || [],
            a = s[o],
            c = a && a[1][0] + a[1][1],
            u = e.index,
            l = e.align.split(","),
            d = l[0].split("-").map((function (e) {
              return e.split(":").map(Number)
            }));
          n < 0 ? u += n : i = new Array(n + 1).join(" ") + i;
          var f = a && a[1][1],
            p = d[1][1] - f;
          return s.forEach((function (e, t) {
            t > o ? e[1][0] += p : t === o && (e[1][1] += p, 0 !== o && (l = l.map((function (t) {
              var n = t.split("-");
              return (n = n.map((function (t, n) {
                var i = t.split(":");
                return i[0] = Number(i[0]) + e[n][0], i.join(":")
              }))).join("-")
            }))))
          })), {
            text: t.slice(0, u) + i + t.slice(c),
            caret: u + i.length,
            start: u + r.default.getValueTokens(i)[0].length,
            alignDifference: p,
            modifiedAlign: l.join(","),
            align: e.oldAlign
          }
        }
      });
      t.TranslationPredictorPresenter = a
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.TranslationPredictorModel = void 0, n(3), n(100), n(98), n(66);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(81),
        s = n(174),
        a = n(59);
      var c = o.ListboxModel.extend({
        init: function () {
          s.SyncModel.prototype.init.call(this), this._cashedResults = {}, this._requestedPrefix = []
        },
        abort: function () {
          "alternatives" !== this.getProperty("reason") && s.SyncModel.prototype.abort.call(this)
        },
        setRequest: function (e) {
          s.SyncModel.prototype.setRequest.call(this, e)
        },
        incrementCounter: function () {
          return this.setProperty("counter", this.getProperty("counter") + 1)
        },
        getData: function () {
          var e = this.toJSON();
          return {
            text: e.text,
            prefix: e.prefix,
            options: e.options
          }
        },
        getParams: function () {
          var e = this.toJSON();
          return {
            id: [e.sid, e.counter, 0].join("-"),
            srv: e.srv,
            lang: e.srcLang + "-" + e.dstLang,
            fullword_prefix: e.fullwordPrefix
          }
        },
        getDefaults: function () {
          return {
            pos: 0,
            srv: "",
            url: "/",
            text: "",
            prefix: "",
            reason: "",
            srcLang: "",
            dstLang: "",
            align: "",
            index: 0,
            counter: 0,
            options: 0,
            sentenceIndex: 0,
            fullwordPrefix: 0,
            sid: this.getId()
          }
        },
        requestSuggestion: function () {
          var e = this,
            t = new a.HTTPRequest(this.getProperty("url"));
          if (this.abort(), !this.isValid()) return this;
          var n = this.getData(),
            i = this.getParams();
          return this.incrementCounter(), this._requestedPrefix.push(n.prefix), this.emit("query", i), this.setRequest(t.setType(a.HTTPRequest.types.FORM).setData(n).setParams(i).setMethod(a.HTTPRequest.methods.POST).send((function (t, i) {
            var r = e._requestedPrefix.indexOf(n.prefix);
            if (r >= 0 && e._requestedPrefix.splice(r, 1), t) return e.emit("error", t);
            e._cashResult(n.prefix, i.body.text[0], i.body.align[0]), e.setProperty("align", i.body.align[0]), e.handleResponse(i.body.text[0], n.prefix)
          })))
        },
        handleResponse: function (e, t) {
          var n = r.default.getValueTokens(t),
            i = t.trim().length - n[n.length - 1].length,
            o = t.length - t.trim().length,
            s = e.slice(i);
          !s || t === e && "alternatives" !== this.getProperty("reason") || this.setProperty({
            pos: -n[n.length - 1].length - o
          }).setItems([s])
        },
        clearCash: function () {
          this._cashedResults = {}
        },
        showCashedResult: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getProperty("prefix"),
            t = this._cashedResults[e];
          this.setProperty("align", t.align), this.handleResponse(t.text, e)
        },
        getCashedResult: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getProperty("prefix"),
            t = this._cashedResults[e],
            n = r.default.getValueTokens(e),
            i = e.trim().length - n[n.length - 1].length;
          return this.setProperty("align", t.align), t.text.slice(i)
        },
        isCachedPrefixValid: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getProperty("prefix"),
            t = this._cashedResults[e] && this._cashedResults[e].text;
          return t && r.default.startsWith(t, e)
        },
        wasRequested: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getProperty("prefix");
          return this._requestedPrefix.includes(e)
        },
        _cashResult: function (e, t, n) {
          this._cashedResults[e] = {
            text: t,
            align: n
          }
        }
      }, {
        options: {
          ALIGN: 4
        }
      });
      t.TranslationPredictorModel = c
    },
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initComplaintPopup = void 0, n(34), n(52);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(62),
        s = n(156),
        a = n(94),
        c = n(158),
        u = n(168);

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach((function (t) {
            f(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      t.initComplaintPopup = function (e) {
        var t, n = this,
          i = this,
          l = i.getView(),
          f = i.getModel(),
          p = new o.ListboxView({
            element: e.ELEMENTS.complaintPopup,
            template: e.TEMPLATES.empty
          }),
          h = new s.InputPresenter({
            view: new a.InputView({
              element: e.ELEMENTS.complaintPopupComment,
              activateFocus: !0,
              contentElement: e.ELEMENTS.complaintPopupCommentInput
            }),
            model: new c.InputModel
          }),
          g = new s.InputPresenter({
            view: new a.InputView({
              element: e.ELEMENTS.complaintPopupProposal,
              activateFocus: !0,
              contentElement: e.ELEMENTS.complaintPopupProposalInput
            }),
            model: new c.InputModel
          }),
          m = function () {
            p.setVisible(!1)
          },
          _ = function (e) {
            p.setState("error", !1);
            var n = f.getProps(),
              i = n.complaint,
              o = n.examplesComplaint,
              s = n.idiomsComplaint;
            (t && (i || o) || s) && (i && "example" !== r.default.getAttribute(t, "data-complaint-type") && function (e) {
              var n = r.default.getAttribute(t, "data-group-index", "0");
              n && (n = Number(n) + 1), e.emit("dictComplaint", {
                type: r.default.getAttribute(t, "data-complaint-type"),
                name: r.default.getAttribute(t, "data-dict-type"),
                title: (r.default.getAttribute(t, "data-title") || "").replace("\n", "").trim(),
                value: t.textContent,
                comment: h.getValue(),
                proposal: g.getValue(),
                groupNumber: n,
                partOfSpeech: r.default.getAttribute(t, "data-part-of-speech")
              })
            }(e), o && function (e) {
              e.emit("exampleComplaint", {
                id: r.default.getDataAttr(t, "id"),
                text: r.default.getDataAttr(t, "text"),
                translation: r.default.getDataAttr(t, "translation"),
                src: f.getProperty("text"),
                comment: h.getValue(),
                isIdiom: "idiom" === r.default.getDataAttr(t.querySelector(".example_ref"), "type")
              }), setTimeout((function () {
                e.emit("complaintStatus")
              }), 50)
            }(e), s && function (e) {
              e.emit(u.IDIOMS_METRIKAS.COMPLAINT_SEND, r.default.getAttribute(e.getIdiomTextElement(), "data-title")), setTimeout((function () {
                e.emit("complaintStatus")
              }), 50)
            }(e))
          },
          v = function () {
            var e = p.getElement();
            t.setAttribute("data-highlighted", !0), e.setAttribute("data-complaint-type", r.default.getAttribute(t, "data-complaint-type")), p.setVisible(!0).setPosition(t.getBoundingClientRect(), !0)
          },
          E = function (e, n) {
            var i = p.getElement();
            if (n && n === t) t = null;
            else if (n !== t) {
              f.setProperty("toast", null), t.setAttribute("data-highlighted", !0), i.setAttribute("data-complaint-type", r.default.getAttribute(t, "data-complaint-type"));
              var o = r.default.toObject(t.getBoundingClientRect());
              p.setVisible(!0).setPosition(d(d({}, o), {}, {
                x: e.clientX,
                left: e.clientX,
                top: e.clientY,
                bottom: e.clientY
              }), !0)
            }
          },
          T = function () {
            var e = p.getElement();
            t.setAttribute("data-highlighted", !0), e.setAttribute("data-complaint-type", "idiom"), p.setVisible(!0).setPosition(t.getBoundingClientRect(), !0)
          },
          y = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
              n = t || e.target,
              i = p.getElement(),
              r = f.getProps(),
              o = r.complaint,
              s = r.examplesComplaint,
              a = r.idiomsComplaint;
            return !i.contains(n) && (o || s) && !a
          };
        return i.on("complaintStatus", (function (e) {
          p.setState({
            error: e,
            success: !e
          })
        })).on("action", (function (e) {
          switch (e) {
            case "sendComplaint":
            case "retryComplaint":
              _(i);
              break;
            case "cancelComplaintMode":
              t && f.setProperty("complaint", !1, {
                type: "cancel",
                name: r.default.getAttribute(t, "data-dict-type")
              }), f.setProperty("examplesComplaint", !1, {
                type: "cancel"
              }), f.setProperty("idiomsComplaint", !1)
          }
        })).on(u.IDIOMS_EVENTS.SET_COMPLAINT, (function (e) {
          var t = n.getIdiomTextElement();
          t && e && (f.setProperty("idiomsComplaint", !0), p.setVisible(!0).setPosition(t.getBoundingClientRect(), !0))
        })), p.on("stateChanged:hidden", (function (e) {
          var t = e ? "off" : "once";
          i[t]("resize", m), i[t]("dictScrolled", m), e || this.setState({
            error: !1,
            success: !1
          })
        })), l.on("tap", (function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = n || e.target;
          if (y(e, n)) {
            var o = t;
            m(), (t = this.getClosest(i, (function (e) {
              return "true" === r.default.getAttribute(e, "data-complaint-target")
            }))) && (f.getProperty("complaint") && v(), f.getProperty("examplesComplaint") && E(e, o), f.getProperty("idiomsComplaint") && T())
          }
        })), f.on("change", (function (e) {
          switch (e) {
            case "trText":
            case "selText":
            case "srcLang":
            case "dstLang":
              this.getProperty("complaint") && this.setProperty("complaint", !1, {
                type: "change"
              }), this.getProperty("examplesComplaint") && (this.setProperty("toast", null), this.setProperty("examplesComplaint", !1, {
                type: "change"
              })), this.getProperty("idiomsComplaint") && this.setProperty("idiomsComplaint", !1);
              break;
            case "complaint":
            case "examplesComplaint":
            case "idiomsComplaint":
              m()
          }
        })), p.on("stateChanged:hidden", (function (e) {
          e ? t && (t.removeAttribute("data-highlighted"), t = null) : (h.setValue(""), g.setValue(""))
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initLangHistory = void 0, n(22), n(52), n(18), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(93),
        s = n(62),
        a = n(81);
      t.initLangHistory = function (e) {
        var t = this,
          n = this._settings,
          i = this.getModel(),
          c = i.toJSON(),
          u = new o.ListboxPresenter({
            view: new s.ListboxView({
              element: e.ELEMENTS.srcLangHistory,
              template: e.TEMPLATES.listbox,
              partials: {
                extras: e.TEMPLATES.pin
              },
              contentElement: e.ELEMENTS.srcLangHistoryContent
            }),
            model: new a.ListboxModel({}, {
              validators: {
                value: function (t) {
                  return r.default.hasProperty(e.TRANSLATOR_LANGS, t)
                }
              }
            })
          }),
          l = new o.ListboxPresenter({
            view: new s.ListboxView({
              element: e.ELEMENTS.dstLangHistory,
              template: e.TEMPLATES.listbox,
              partials: {
                extras: e.TEMPLATES.pin
              },
              contentElement: e.ELEMENTS.dstLangHistoryContent
            }),
            model: new a.ListboxModel({}, {
              validators: {
                value: function (t) {
                  return r.default.hasProperty(e.TRANSLATOR_LANGS, t)
                }
              }
            })
          }),
          d = function (e) {
            var t = {};
            return (e ? e.split(";") : []).forEach((function (e) {
              var n = e.split(":");
              t[n[0]] = Boolean(Number(n[1]))
            })), t
          },
          f = function (e) {
            return Object.keys(e).map((function (t) {
              return [t, Number(Boolean(e[t]))].join(":")
            })).join(";")
          };
        return this.on("action", (function (e, n) {
          var i, o, s, a;
          switch (e) {
            case "pinLang":
            case "unpinLang":
              i = r.default.getAttribute(n, "data-type"), o = r.default.getAttribute(n, "data-lang"), (s = (a = "src" === i ? u : l).getItems())[o] = "pinLang" === e, a.setItems(s), t.emit("langPinned", {
                type: i,
                lang: o,
                pinned: "pinLang" === e
              })
          }
        })), i.on("change", (function (e, t) {
          switch (e) {
            case "srcLang":
              u.setValue(t);
              break;
            case "dstLang":
              l.setValue(t)
          }
        })).on("set:translation", (function (t) {
          t && (u.sortItems(e.MAX_RECENT_LANGUAGES), l.sortItems(e.MAX_RECENT_LANGUAGES))
        })), u.sortItems = function (e) {
          var t = e,
            n = this.getItems(),
            i = this.getValue(),
            r = {},
            o = [],
            s = [];
          if (!(n[i] || (Object.keys(n).forEach((function (e) {
            n[e] ? o.push(e) : s.push(e)
          })), (t -= o.length) <= 0))) {
            var a = s.indexOf(i);
            return a >= 0 && s.splice(a, 1), s.unshift(i) > t && (s.length = t), o.forEach((function (e) {
              r[e] = !0
            })), s.forEach((function (e) {
              r[e] = !1
            })), this.setItems(r)
          }
        }, l.sortItems = u.sortItems, u.prepareData = function (t) {
          var n = this === u ? "src" : "dst";
          return {
            items: Object.keys(t).map((function (i) {
              return {
                type: n,
                text: e.TRANSLATOR_LANGS[i],
                value: i,
                pinned: t[i]
              }
            }))
          }
        }, l.prepareData = u.prepareData, u.on("valueChanged", (function (e) {
          t.setSrcLanguage(e, {
            sender: "langHistory"
          })
        })).on("itemsChanged", (function () {
          n.setProperty("srcLangHistory", f(this.getItems()))
        })), l.on("valueChanged", (function (e) {
          t.setDstLanguage(e, {
            sender: "langHistory"
          })
        })).on("itemsChanged", (function () {
          n.setProperty("dstLangHistory", f(this.getItems()))
        })), u.setItems(d(n.getProperty("srcLangHistory"))), l.setItems(d(n.getProperty("dstLangHistory"))), c.srcLang && u.setValue(c.srcLang), c.dstLang && l.setValue(c.dstLang), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initShareButton = void 0, n(18), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(259),
        a = n(62),
        c = n(260);
      t.initShareButton = function (e) {
        var t = this,
          n = this.getModel(),
          i = new o.TouchView({
            element: e.ELEMENTS.shareInput,
            stopDefaultAction: !0
          }),
          u = new o.TouchView({
            element: e.ELEMENTS.shareButton,
            activateFocus: !0
          }),
          l = new o.TouchView({
            element: e.ELEMENTS.shareCopyLink,
            stopDefaultAction: !0
          }),
          d = new s.SharePresenter({
            view: new a.ListboxView({
              element: e.ELEMENTS.share,
              template: e.TEMPLATES.listbox,
              contentElement: e.ELEMENTS.shareContent,
              stopDefaultAction: !0,
              ignoreSelection: !0
            }),
            model: new c.ShareModel({
              url: e.SHARE_URL,
              title: document.title
            })
          }),
          f = d.getView(),
          p = function (n) {
            if (u.setEnabled(n && n.length <= e.MAX_SHARE_TEXT_LENGTH), n) {
              var r = t.getLink({
                absolute: !0
              });
              i.setContent(r, {
                asText: !0
              }), d.setLink(r).setDescription(n)
            }
          };
        return this.on("action", (function (t) {
          switch (t) {
            case "mailTo":
              d.write();
              break;
            case "openSearch":
              this.emit("textSearch"), window.open(e.SEARCH_URL + "?" + r.default.toQueryString({
                text: '"' + n.getProperty("translation") + '"'
              }))
          }
        })).bindFocusActivation(u), n.on("set:translation", p), i.on("tap", (function () {
          r.default.selectElement(this.getElement()), u.setFocus(!0), t.emit("shareInputClick")
        })), u.on("tap", (function () {
          this.setFocus(!0), t.emit("sharingOpen"), f.setVisible()
        })).on("stateChanged:focused", (function (e) {
          e || f.setVisible(!1)
        })), d.prepareData = function (t) {
          var n = {};
          return n.items = t.map((function (t) {
            return {
              value: t,
              title: e.SOCIAL_SERVICES[t]
            }
          })), n
        }, d.on("share", (function (e) {
          t.emit("shareData", e)
        })).on("write", (function (e) {
          t.emit("writeMail", e)
        })).setItems(Object.keys(e.SOCIAL_SERVICES)), l.on("tap", (function () {
          this.hasState("copy") && r.default.copyText(t.getLink({
            absolute: !0
          })) && n.setProperty("tooltip", e.TOOLTIPS.copyLink2), r.default.selectElement(i.getElement()), u.setFocus(!0), t.emit("shareButtonClick")
        })).on("stateChanged:copy", (function (t) {
          var n = this.getElement();
          n.setAttribute("data-tooltip-nohide", t), n.setAttribute("data-tooltip", e.TOOLTIPS.copyLink)
        })).setState("copy", r.default.copySupported), f.on("stateChanged:hidden", (function (e) {
          e || this.setPosition(u.getRect(), !0)
        })), p(n.getProperty("translation")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initExternalView = void 0, n(18), n(12);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(69);
      t.initExternalView = function (e) {
        var t = this.getModel(),
          n = new o.TemplateView({
            element: e.ELEMENTS.external,
            template: e.TEMPLATES.external,
            contentElement: e.ELEMENTS.externalContent
          }),
          i = function (t) {
            var i;
            t && (i = this.toJSON(), n.renderData({
              items: Object.keys(e.EXTERNAL_SERVICES).map((function (t) {
                var n = {},
                  o = e.EXTERNAL_SERVICES[t];
                return n[o.textParam] = i.trText, n[o.srcLangParam] = i.srcLang, n[o.dstLangParam] = i.dstLang, {
                  text: t,
                  name: t,
                  href: o.href + "?" + r.default.toQueryString(n)
                }
              }))
            })), n.setVisible(t && t.length <= e.MAX_SHARE_TEXT_LENGTH)
          };
        return t.on("set:translation", i), i.call(t, t.getProperty("translation")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTranslationVote = void 0;
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(11),
        s = n(94),
        a = n(156),
        c = n(158);
      t.initTranslationVote = function (e) {
        var t = this,
          n = this,
          i = this.getView(),
          u = this.getModel(),
          l = new o.TouchView({
            element: e.ELEMENTS.goodVoteButton
          }),
          d = new o.TouchView({
            element: e.ELEMENTS.badVoteButton
          }),
          f = new s.InputView({
            element: s.InputView.makeFakeArea(e.ELEMENTS.translation),
            activateFocus: !0
          }),
          p = new a.InputPresenter({
            view: f,
            model: new c.InputModel
          }),
          h = p.getModel();
        return this.on("action", (function (e) {
          switch (e) {
            case "openEditing":
              i.setState("vote_bad", !1);
              break;
            case "saveEditing":
              this.emit("editorResult", r.default.trim(f.getValue()), u.getProperty("translation")), i.setState({
                edited: !0,
                editing: !1
              });
              break;
            case "refuseEditing":
              i.setState("vote_bad", !1)
          }
        })), this.on("textCopy", (function () {
          f.getContentElement().setSelectionRange(0), r.default.selectElement(f.getElement())
        })).on("changeEditorValue", (function (e) {
          h.setProperty("value", e)
        })).on("dstPredictorApply", (function (e) {
          h.setProperty("value", f.getValue(), {
            silent: !0
          }), p.setCaret(e.caret)
        })).bindFocusActivation(l).bindFocusActivation(d), i.on("stateChanged", (function (e, t) {
          switch (e) {
            case "editing":
              t || n.emit("trAlign", null), n.emit("containerHeightChanged")
          }
        })), u.on("change", (function (t, o, s) {
          switch (t) {
            case "trText":
            case "srcLang":
            case "dstLang":
              i.hasState("editing") && n.emit("editorToggle", {
                type: "change",
                value: f.getValue()
              }), i.setState({
                edited: !1,
                editing: !1,
                vote_bad: !1,
                vote_good: !1
              });
              break;
            case "translation":
              var a = o && o.length <= e.MAX_EDITOR_TEXTLENGTH && !r.default.isUrl(o);
              d.setState("voted", !1).setEnabled(a), l.setState("voted", !1).setEnabled(a);
              break;
            case "userTranslation":
              f.setValue(o, s), s.caret && p.setCaret(s.caret)
          }
        })), f.on("tap", (function () {
          t.emit("trTextTap")
        })).on("click", (function (e) {
          return t.emit("trTextClick", f.getSelection().start, f.getValue(), e)
        })).on("mousedown", (function () {
          t.emit("action", "openEditing").emit("trTextMouseDown")
        })).on("keydown", (function (e) {
          t.emit("trTextKeydown", e, {
            sender: f
          })
        })).on("keyup", (function (e) {
          return t.emit("trTextKeyup", e, {
            caret: f.getSelection().start
          })
        })).on("enterPressed", (function () {
          t._settings.isOptionEnabled("shift") || t.emit("input")
        })).on("select", (function () {
          var e = f.getSelection();
          e.start !== e.end && (e.trim = !0, p.getValue(e) && t.emit("trTextSelect"))
        })).on("stateChanged:focused", (function (e) {
          t.emit("trTextFocus", e), e || t.emit("action", "saveEditing"), i.setState("editing", e)
        })).bindDOMEvents("click mousedown keydown keyup select enterPressed"), d.on("tap", (function () {
          i.setState("vote_bad", !0), this.setState("voted", !0).setEnabled(!1), l.setEnabled(!1), n.emit("translationVoted", u.getProperty("translation"))
        })), l.on("tap", (function () {
          i.setState("vote_good", !0), this.setState("voted", !0).setEnabled(!1), d.setEnabled(!1), n.emit("translationVoted", u.getProperty("translation"), !0)
        })), p.on("input", (function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          i.hasState("editing") && (t.caret = t.caret || this.getCaret(), t.reason = t.reason || "input", n.emit("trTextInput", e, t), u.setProperty("userTranslation", e, t))
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initTextCounter = void 0;
      var i = n(11);
      t.initTextCounter = function (e) {
        var t = this.getModel(),
          n = new i.TouchView({
            element: e.ELEMENTS.textCounter,
            contentElement: e.ELEMENTS.textCounterContent
          }),
          r = function (t) {
            var i = t.length;
            n.setState("warning", i > e.MAX_TRANSLATOR_QUERY).setContent(i, {
              asText: !0
            })
          };
        return t.on("change", (function (e, t) {
          "text" === e && r(t)
        })), r(t.getProperty("text")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initDescription = void 0;
      var i = n(11);
      t.initDescription = function (e) {
        var t = this.getView(),
          n = this.getModel(),
          r = new i.TouchView({
            element: e.ELEMENTS.serviceDescription
          });
        return n.on("change", (function (e, n, i) {
          switch (e) {
            case "trText":
              n && r.setVisible(!1);
              break;
            case "srcLang":
            case "dstLang":
              i.oldValue && t.setState("hidden_service-description", !0)
          }
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initDescriptionDict = void 0;
      var i = n(11);
      t.initDescriptionDict = function (e) {
        var t = this.getView(),
          n = this.getModel(),
          r = new i.TouchView({
            element: e.ELEMENTS.serviceDescription
          });
        return n.on("change", (function (e, n, i) {
          switch (e) {
            case "trText":
            case "srcLang":
            case "dstLang":
              i.oldValue && (t.setState("hidden_service-description", !0), r.setVisible(!1))
          }
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initLangSwitcher = void 0;
      var i = n(11);
      t.initLangSwitcher = function (e) {
        var t = new i.TouchView({
            element: e.ELEMENTS.langSwitcherButton,
            activateFocus: !0
          }),
          n = new i.TouchView({
            element: e.ELEMENTS.langSwitcherListbox,
            stopDefaultAction: !0
          });
        return t.on("tap", (function () {
          this.setFocus(!0), n.setVisible()
        })).on("stateChanged:focused", (function (e) {
          e || n.setVisible(!1)
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initMetrikas = void 0, n(3), n(34), n(17);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(61),
        s = n(161),
        a = n(11),
        c = n(59),
        u = n(124),
        l = n(168),
        d = n(114),
        f = n(183),
        p = n(295),
        h = n(326),
        g = n(327);
      t.initMetrikas = function (e) {
        var t = this,
          n = {},
          i = {},
          m = {},
          _ = this.getModel(),
          v = new s.StatisticsModel({
            sid: e.SID,
            srv: e.SRV,
            ver: e.VER,
            uid: e.UID,
            url: e.CLCK_URL,
            path: e.CLCK_PATH,
            loadTs: e.LOAD_TS
          }),
          E = {
            ids: {
              "app/image": {},
              "app/sms": {},
              "app/stores": {},
              "app/stores/android": {},
              "app/stores/ios": {},
              badVoteButton: {},
              clearButton: {},
              collectionsButton: {},
              copyButton: {},
              dict: {
                sendRender: !0
              },
              "dict/article": {},
              "dict/article/hideExamples": {},
              "dict/article/meaning": {},
              "dict/article/meaning/example": {},
              "dict/article/showExamples": {},
              "dict/collapse": {},
              "dict/expand": {},
              dstLangButton: {},
              dstTextbox: {},
              examples: {
                sendRender: !0
              },
              "examples/article": {},
              "examples/article/example": {},
              "examples/article/example/badVote": {},
              "examples/article/example/dst": {},
              "examples/article/example/dst/speaker": {},
              "examples/article/example/goodVote": {},
              "examples/article/example/ref": {},
              "examples/article/example/src": {},
              "examples/article/example/src/speaker": {},
              "examples/root": {},
              "examples/tabs": {},
              "examples/tabs/tab": {},
              externalTranslate: {},
              "externalTranslate/Google": {},
              "externalTranslate/Bing": {},
              favButton: {},
              "footer/about": {},
              "footer/blog": {},
              "footer/dev": {},
              "footer/help": {},
              "footer/langSwitch": {},
              "footer/legal": {},
              "footer/mobile": {},
              "footer/usability": {},
              "footer/yandex": {},
              "footerline/close": {},
              goodVoteButton: {},
              keyboardButton: {},
              microphone: {},
              options: {},
              "options/button": {},
              "options/listbox": {},
              popup: {
                sendRender: !0
              },
              "popup/dict": {
                sendRender: !0
              },
              "popup/dict/article": {},
              "popup/dict/article/meaning": {},
              "popup/examples": {
                sendRender: !0
              },
              "popup/examples/article/example": {},
              "popup/examples/article/example/dst": {},
              "popup/examples/article/example/ref": {},
              "popup/examples/article/example/src": {},
              shareButton: {},
              "social/fb": {},
              "social/tw": {},
              "social/vk": {},
              spellerButton: {},
              srcLangButton: {},
              srcTextbox: {},
              swapLang: {},
              syns: {
                sendRender: !0
              },
              "syns/article": {},
              tabs: {},
              "tabs/image": {},
              "tabs/url": {},
              targetTranslitButton: {},
              textSpeaker: {},
              translatorSpeaker: {},
              "user/button": {},
              "user/listbox": {},
              "user/listbox/addUser": {},
              "user/listbox/logout": {},
              "user/listbox/name": {},
              "user/listbox/passport": {},
              "user/listbox/secondary": {},
              yandex: {},
              yandexTranslate: {}
            },
            defaults: {
              minHoverDuration: 300,
              sendRender: !1
            }
          },
          T = function (e) {
            var t = v.getTrackingDomLeafData(e).id;
            return r.default.hasProperty(E.ids, t) ? r.default.extend({}, E.defaults, E.ids[t]) : r.default.clone(E.defaults)
          },
          y = null,
          S = null,
          b = [],
          O = this._router;
        return _.onChange(["srcLang", "dstLang"], (function () {
          return v.setProperty("dir", t.getLangsPair())
        })), e.ENABLE_DOM_TRACKING && (this.getView().on("copy", (function (e) {
          v.sendNestedTrackingDom(e, "copy_text_selection", {
            text: r.default.getSelectedText()
          })
        })).on(a.TouchView.eventTypes.OVER, (function (e) {
          for (var t = r.default.getEventPath(e); b.length > 0;) {
            var n = b.pop(),
              i = e.timeStamp - n.timeStamp;
            if (b.length < t.length && n.element === t[b.length]) {
              b.push(n);
              break
            }
            v.isTrackingDom(n.element) && i >= T(n.element).minHoverDuration && v.sendSingleTrackingDom(n.element, "hover", {
              duration: Math.floor(i)
            })
          }
          t.slice(b.length).forEach((function (t) {
            b.push({
              element: t,
              timeStamp: e.timeStamp
            })
          }))
        })).on(a.TouchView.eventTypes.END, (function (e) {
          var t = function () {
            var e = r.default.getSelectedElement(),
              t = r.default.getSelectedText(),
              n = t !== y || e !== S;
            return y = t, S = e, "" !== t && n ? t : null
          }();
          null !== t && v.sendNestedTrackingDom(e, "select_text_fragment", {
            text: t
          })
        })).on("tap", (function (e) {
          v.sendNestedTrackingDom(e, "tap", null)
        })).bindDOMEvents(["copy", a.TouchView.eventTypes.OVER, a.TouchView.eventTypes.END], !0), (0, o.getGlobalEmitter)().on("viewContentChanged", (function (e) {
          for (var t, n, i = [e.getElement()]; i.length > 0;) {
            for (t = [], n = i.pop(); n || i.length > 0; n = i.pop()) v.isTrackingDom(n) && T(n).sendRender && v.sendSingleTrackingDom(n, "render", {}), t.push.apply(t, n.childNodes || []);
            i.push.apply(i, t)
          }
        }))), this.on("track", (function (e) {
          v.sendMetrika(e)
        })).on("pageReady", (function () {
          var e = this.getProps();
          v.send("page_load", {
            text: e.trText || "",
            src_lang: e.srcLang || "",
            dst_lang: e.dstLang || "",
            referrer: document.referrer || ""
          })
        })).on("pageLoaded", (function () {
          var e = this.getView(),
            t = this._settings;
          e.hasState("faked") && v.send("yata_init"), !t.isOptionEnabled("autoheight") && t.getProperty("textboxHeight") && v.send("resizer_onload", {
            height: t.getProperty("textboxHeight").replace("%", "")
          }), v.send("settings_onload", {
            auto: t.getProperty("auto") ? 1 : 0,
            sugg: t.isOptionEnabled("suggest") ? 1 : 0,
            dict: t.isOptionEnabled("dictionary") ? 1 : 0,
            enter: t.isOptionEnabled("shift") ? 1 : 0,
            speller: t.isOptionEnabled("speller") ? 1 : 0,
            autoheight: t.isOptionEnabled("autoheight") ? 1 : 0,
            autospeller: t.getProperty("autospeller") ? 1 : 0
          })
        })).on("optionsOpen", (function () {
          v.send("settings_open")
        })).on("optionsChanged", (function (e, t) {
          var n = "settings_" + e + "_click";
          v.send(n, {
            name: e,
            enabled: t ? 1 : 0
          })
        })).on("action:closePromoFooter", (function () {
          v.send("footer_promo_close")
        })).on("textDelete", (function () {
          v.send("text_delete")
        })).on("textSearch", (function () {
          v.send("text_search")
        })).on("textCopy", (function (e) {
          var t = "text_" + (e ? "copy" : "select"),
            n = this.getProps();
          v.send(t, {
            src_length: n.text.length,
            dst_length: n.translation.length
          })
        })).on("textDownload", (function () {
          var e = this.getProps();
          v.send("text_download", {
            src_length: e.text.length,
            dst_length: e.translation.length
          })
        })).on("resizerResize", (function (e) {
          v.send("resizer_resize", {
            old_height: e.oldHeight,
            new_height: e.newHeight,
            main_height: e.mainHeight
          })
        })).on("action:swapDirection", (function () {
          v.send("lang_swap")
        })).on("translateQuery", (function (e) {
          v.send("text_translate", {
            id: e
          })
        })).on("translatePage", (function () {
          var e = this.getProps();
          v.send("url_translate", {
            url: e.text
          })
        })).on("langSelectOpen", (function (e) {
          var t = this.getProps(),
            n = "";
          t.srcLang === e.value ? n = "src" : t.dstLang === e.value && (n = "dst"), v.send("langselect_open_" + n, {
            type: n
          })
        })).on("langChanged", (function (e, t) {
          var n = "langHistory" === t.sender ? "recent_" : "",
            i = "srcLang" === e ? "src" : "dst",
            r = "select_" + i;
          v.send("langselect_" + n + r, {
            type: i,
            recent: n ? 1 : 0
          })
        })).on("langPinned", (function (e) {
          var t = "langselect_" + (e.pinned ? "pin" : "unpin");
          v.send(t, {
            lang: e.lang,
            type: e.type,
            pinned: e.pinned ? 1 : 0
          })
        })).on("translationVoted", (function (t, n) {
          var i = this.getProps(),
            r = i.srcLang + "-" + i.dstLang,
            o = new c.HTTPRequest(e.VOTES_URL);
          v.send("translation_vote_" + (n ? "good" : "bad"), {
            vote: n ? 1 : 0
          }), o.setType(c.HTTPRequest.types.JSON).setData({
            uid: e.UID,
            srv: e.SRV,
            sid: e.SID,
            lang: r,
            text: i.trText,
            upvote: Boolean(n),
            translation: t
          }).setParams({
            uid: e.UID
          }).setHeader("X-CSRF-Token", e.CSRF_TOKEN).setMethod("POST").send()
        })).on("editorResult", (function (t, n) {
          var i = this.getProps(),
            r = new c.HTTPRequest(e.VOTES_URL);
          v.send("translation_edit"), r.setType(c.HTTPRequest.types.JSON).setData({
            uid: e.UID,
            srv: e.SRV,
            sid: e.SID,
            lang: i.srcLang + "-" + i.dstLang,
            text: i.trText,
            proposal: t,
            translation: n
          }).setParams({
            uid: e.UID
          }).setHeader("X-CSRF-Token", e.CSRF_TOKEN).setMethod("POST").send()
        })).on("editorToggle", (function (e) {
          var t = this.getProps(),
            n = {
              type: e.type
            },
            i = "translation_edit_" + (e.open ? "open" : "close");
          e.open || e.value === t.translation || (n.src = t.trText, n.dst = t.translation), n.edit = e.value !== t.translation ? e.value : "", v.send(i, n)
        })).on("translationError", (function (e) {
          if (window.navigator.onLine) {
            var t = e.body || e;
            v.send("translation_error", {
              error: t.code,
              message: t.message
            })
          }
        })).on("textPaste", r.default.debounce((function (e, t) {
          v.send("text_paste", {
            old_text_length: t.length,
            new_text_length: e.length
          })
        }), 300)).on("rubberScrolled", r.default.throttle((function () {
          v.send("rubber_scrolled", {
            throttleDuration: 1e3
          })
        }), 1e3)).on("visibilityChange", (function (e) {
          v.send("visibility_change", {
            hidden: e
          })
        })), this.on("predictorApply", (function (e, t) {
          var n, i = e.items,
            r = this.getProps();
          e.pos < 0 && (n = e.text.slice(e.pos) !== i[0].substr(0, Math.abs(e.pos))), v.send("predictor_apply", {
            src: e.text,
            pos: e.pos,
            eow: e.endOfWord ? 1 : 0,
            lang: r.srcLang,
            type: t ? "enter" : "click",
            error: n ? 1 : 0,
            reason: e.reason,
            suggest: i
          })
        })).on("predictorShow", (function (e) {
          var t, n = e.items,
            i = this.getProps();
          e.pos < 0 && (t = e.text.slice(e.pos) !== n[0].substr(0, Math.abs(e.pos))), v.send("predictor_show", {
            src: e.text,
            pos: e.pos,
            eow: e.endOfWord ? 1 : 0,
            lang: i.srcLang,
            error: t ? 1 : 0,
            reason: e.reason,
            suggest: n
          })
        })).on("dstPredictorApply", (function (e, t) {
          v.send("dst_predictor_apply", {
            src: e.text,
            pos: e.index,
            lang: e.dstLang,
            type: t ? "enter" : "click",
            reason: e.reason,
            suggest: e.items[0]
          })
        })).on("dstPredictorShow", (function (e) {
          v.send("dst_predictor_show", {
            src: e.text,
            pos: e.index,
            lang: e.dstLang,
            reason: e.reason,
            suggest: e.items[0]
          })
        })).on("autocorrect", (function () {
          v.send("speller_autocorrect")
        })).on("spellerClick", (function (e, t) {
          var n = this.getProps();
          v.send("speller_click", {
            word: e.word,
            lang: n.srcLang,
            text_length: r.default.trim(n.text).length,
            replacements: e.s.length,
            autocorrected: t ? 1 : 0
          })
        })).on("spellerApply", (function (e) {
          var t = this.getProps(),
            n = "speller_" + (e.accept ? "accept" : "apply");
          v.send(n, {
            word: e.item.word,
            lang: t.srcLang,
            text_length: r.default.trim(t.text).length,
            replacement: e.replacement
          })
        })).on("spellerDecline", (function (e) {
          var t = this.getProps();
          v.send("speller_decline", {
            word: e.word,
            lang: t.srcLang,
            text_length: r.default.trim(t.text).length,
            replacements: e.s.length
          })
        })).on("autoSpellerClick", (function (e) {
          var t = this.getProps(),
            n = "speller_switch_" + (e ? "on" : "off");
          v.send(n, {
            lang: t.srcLang,
            enabled: e ? 1 : 0,
            text_length: r.default.trim(t.text).length
          })
        })), this.on("speakerAction", (function (e) {
          var t = this.getProps(),
            n = "",
            i = "";
          t.srcLang === e.lang ? (n = t.srcLang, i = "source") : t.dstLang === e.lang && (n = t.dstLang, i = "target"), v.send(e.error ? "tts_error" : "tts_play", {
            lang: n,
            type: i,
            engine: e.playerType || "yandex",
            text: e.text
          })
        })).on("asrStart", (function (e) {
          var t = this.getProps();
          v.send("asr_start", {
            lang: t.srcLang,
            engine: e
          })
        })).on("asrEnd", (function (t, n) {
          var i = {
            lang: this.getProps().srcLang,
            asr_id: [e.SID, t.index].join("-"),
            engine: n
          };
          t.error && (i.error = t.error.replace(/-/g, "_")), v.send(t.error ? "asr_error" : "asr_stop", i)
        })).on("asrResult", (function (t, n) {
          var i = this.getProps();
          v.send("asr_recognize", {
            lang: i.srcLang,
            asr_id: [e.SID, t.index, t.resultIndex].join("-"),
            engine: n,
            text: t.value
          })
        })).on("exampleVoted", (function (e) {
          v.send("example_vote_" + (e.vote ? "good" : "bad"), e)
        })), this.on("synonymsInsert", (function (e, t) {
          var n = this.getProps();
          v.send("syns_insert", {
            src: t.oldValue,
            lang: n.srcLang,
            type: t.type || "",
            synonym: e
          })
        })).on("dictLinkClick", (function (e, t) {
          v.send("dict_link_click", {
            type: t.type,
            value: e
          })
        })).on("dictComplaint", (function (t) {
          var n = this,
            i = this.getProps(),
            r = i.srcLang + "-" + (t.name ? i.srcLang : i.dstLang),
            o = t.name ? "syn" : "dict",
            s = t.name ? "def" === t.name ? "syn" : t.name : "regular",
            a = new c.HTTPRequest(e.COMPLAINT_URL),
            u = new c.HTTPRequest(e.VOTES_URL);
          if ("fullTextTranslation" === t.type || "idiom" === t.type) {
            var d = "idiom" === t.type ? l.IDIOMS_METRIKAS.COMPLAINT_SEND : "translation_complain";
            v.send(d, {
              translation: t.value,
              src: i.text
            });
            var f = {
              uid: e.UID,
              srv: e.SRV,
              sid: e.SID,
              lang: r,
              text: i.trText,
              upvote: !1,
              comment: t.comment,
              proposal: t.proposal,
              translation: t.value
            };
            return u.setType(c.HTTPRequest.types.JSON).setData(f).setParams({
              uid: e.UID
            }).setHeader("X-CSRF-Token", e.CSRF_TOKEN).setMethod("POST").send(), n.emit("complaintStatus")
          }
          v.send("dict_complain", {
            dict: r + (t.name ? "-" + t.name : ""),
            type: t.type,
            block: o
          }), a.setType(c.HTTPRequest.types.JSON).setData({
            uid: e.UID,
            lang: r,
            text: i.selText || i.trText,
            title: t.title,
            family: Boolean(e.FAMILY),
            element: t.value,
            comment: t.comment,
            dictType: s,
            indexNumber: t.groupNumber,
            elementType: t.type,
            partOfSpeech: t.partOfSpeech,
            clientService: e.SRV
          }).setParams({
            sid: e.SID,
            uid: e.UID
          }).setHeader("X-CSRF-Token", e.CSRF_TOKEN).setMethod("POST").send((function (e, s) {
            var a = e;
            s && s.code !== c.HTTPRequest.codes.OK && s.code !== c.HTTPRequest.codes.CREATED && (a = new Error(s.message)), n.emit("complaintStatus", a), a && v.send("dict_complain_error", {
              src: i.selText || i.trText,
              dst: t.value,
              dict: r + (t.name ? "-" + t.name : ""),
              type: t.type,
              block: o,
              title: t.title,
              number: t.groupNumber,
              comment: t.comment,
              message: a.body ? a.body.description : "",
              selection: i.selText ? 1 : 0,
              part_of_speech: t.partOfSpeech
            })
          }))
        })).on(l.IDIOMS_METRIKAS.COMPLAINT_SEND, (function (e) {
          var n = t.getProps(),
            i = n.srcLang + "-" + n.dstLang;
          v.send(l.IDIOMS_METRIKAS.COMPLAINT_SEND, {
            idiomsText: e,
            src: n.text,
            lang: i
          })
        })).on("dictComplaintToggle", (function (e, t) {
          var n = "",
            i = t.type,
            r = "",
            o = this.getProps(),
            s = "dict_complain_" + (e ? "open" : "close");
          switch (i) {
            case "send":
            case "cancel":
              t.name ? (r = "syn", n = o.srcLang + "-" + o.srcLang + "-" + t.name) : (r = "dict", n = o.srcLang + "-" + o.dstLang);
              break;
            case "toggle":
              r = t.sender;
              break;
            case "auto":
              r = "syn" === t.sender ? "dict" : "syn"
          }
          v.send(s, {
            dict: n,
            type: i,
            open: e ? 1 : 0,
            block: r
          })
        })).on("exampleComplaint", (function (e) {
          v.send("examples_complaint", {
            example_id: e.id,
            text: e.text,
            translation: e.translation,
            src: e.src,
            comment: e.comment,
            isIdiom: e.isIdiom
          })
        })).on("examplesComplaintStart", (function () {
          v.send("examples_complaint_start")
        })).on("synRendered", (function () {
          var e = this.getProps();
          e.trText !== e.selText && (m.trText === e.trText && m.selText === e.selText && m.srcLang === e.srcLang || (v.send("syns_show", {
            src: e.selText || e.trText,
            selection: e.selText ? 1 : 0,
            text_length: r.default.trim(e.text).length
          }), m.trText = e.trText, m.selText = e.selText, m.srcLang = e.srcLang))
        })).on("dictRendered", (function (e) {
          var t = this.getProps(),
            n = i.trText !== t.trText || i.selText !== t.selText || i.srcLang !== t.srcLang || i.dstLang !== t.dstLang || i.text !== e.text;
          if (t.trText !== t.selText && n) {
            var o = {
              src: e.text || t.selText || t.trText,
              popup: e.popup ? 1 : 0,
              text_length: r.default.trim(t.text).length
            };
            e.popup || (o.selection = t.selText || e.text && e.text !== t.trText ? 1 : 0, o.definition = e.definition ? 1 : 0, o.has_examples = e.noExamples ? 0 : 1, o.examples_shown = e.expanded && !e.noExamples ? 1 : 0), v.send(e.popup ? "dict_popup_show" : "dict_show", o), i.text = e.text, i.trText = t.trText, i.selText = t.selText, i.srcLang = t.srcLang, i.dstLang = t.dstLang
          }
        })).on("examplesRendered", (function (e) {
          var t = this.getProps();
          if (t.trText !== t.selText && (n.trText !== t.trText || n.selText !== t.selText || n.srcLang !== t.srcLang || n.dstLang !== t.dstLang || n.text !== e.text)) {
            var i = e.popup ? "examples_popup_rendered" : "examples_rendered";
            v.send(i, {
              src: e.text || t.selText || t.trText,
              popup: e.popup ? 1 : 0,
              selection: t.selText || e.text && e.text !== t.trText ? 1 : 0
            }), n.text = e.text, n.trText = t.trText, n.selText = t.selText, n.srcLang = t.srcLang, n.dstLang = t.dstLang
          }
        })), this.on("collectionsSync", (function (e) {
          v.send("cols_sync", {
            type: e ? "manual" : "auto"
          })
        })).on("recordAdd", (function (e) {
          e || v.send("cols_record_add", {
            auto: 0
          })
        })).on("recordDelete", (function () {
          v.send("cols_record_delete")
        })).on("recordsDelete", (function (e) {
          v.send("cols_records_delete", {
            total: e.total,
            count: e.count
          })
        })).on("recordsMoved", (function (e) {
          v.send("cols_records_move", {
            new: e.new ? 1 : 0,
            count: e.count,
            sender: e.sender
          })
        })).on("recordsCopy", (function (e) {
          v.send("cols_records_copy", {
            new: e.new ? 1 : 0,
            count: e.count
          })
        })).on("recordInsert", (function () {
          v.send("cols_record_insert")
        })).on("collectionsOpened", (function (e) {
          e && v.send("cols_open")
        })).on("newCollectionTap", (function () {
          v.send("cols_create_tap")
        })).on("collectionCreated", (function (e) {
          v.send("cols_create", {
            public: e ? 1 : 0
          })
        })).on("collectionRenamed", (function () {
          v.send("cols_rename")
        })).on("collectionDeleted", (function () {
          v.send("cols_delete")
        })).on("collectionChanged", (function (e) {
          v.send("cols_public_change", {
            public: e ? 1 : 0
          })
        })).on("collectionSubscribed", (function (e, t) {
          v.send(t ? "cols_subscribe_limit" : "cols_subscribe", {
            type: e || "collection_menu",
            limit: t ? 1 : 0
          })
        })).on("collectionUnsubscribed", (function (e) {
          v.send("cols_unsubscribe", {
            type: e
          })
        })).on("collectionSaved", (function () {
          v.send("cols_save")
        })).on("collectionSearchActivate", (function () {
          v.send("cols_search_activate")
        })).on("collectionMenuOpen", (function () {
          v.send("cols_menu_open")
        })).on("collectionLinkCopied", (function () {
          v.send("cols_link_copy")
        })).on("collectionShareData", (function (e) {
          v.send("cols_link_share", {
            type: e.service
          })
        })).on("collectionWriteMail", (function () {
          v.send("cols_link_share", {
            type: "email"
          })
        })).on("collectionsInactiveTap", (function () {
          v.send("cols_db_inactive_tap")
        })).on("resetedIds", (function () {
          v.send("cols_reseted_ids")
        })).on("checkRecordError", (function (e) {
          v.send("cols_db_error_excp", {
            message: e
          })
        })).on("databaseError", (function (e) {
          var t = {
            sender: e.sender,
            err_name: e.name || "",
            message: e.message || ""
          };
          e.trace && (t.db_open_trace = e.trace), v.send("cols_db_error", t)
        })).on("noCollectionForActiveId", (function () {
          v.send("cols_no_col_for_active_id")
        })).on("dbIndexNotFound", (function (e) {
          var t = e.indexName,
            n = e.version;
          v.send("cols_db_index_not_found", {
            index_name: t,
            version: n
          })
        })), this.on("popupShown", (function (e) {
          var t = this.getProps(),
            n = t.selTr || t.selText,
            i = "popup_" + (e.empty ? "empty_" : "") + (e.show ? "show" : "close");
          v.send(i, {
            text: e.invalid ? "" : n,
            text_length: n.length,
            invalid: e.invalid ? 1 : 0,
            empty: e.empty ? 1 : 0,
            show: e.show ? 1 : 0
          })
        })).on("showExamples", (function () {
          var e = this.getProps(),
            t = e.selTr || e.selText;
          v.send("more_examples_click", {
            text: t,
            text_length: t.length
          })
        })).on("toggleMoreExamples", (function (e) {
          v.send("examples_" + (e.show ? "show" : "hide"), {
            src: e.text,
            dst: e.translation,
            example_count: e.count,
            show: e.show ? 1 : 0
          })
        })).on("exampleSoundTap", (function (e) {
          v.send("example_sound", {
            engine: e.type,
            ref: e.ref,
            lang: e.lang,
            src: e.text,
            dst: e.title
          })
        })).on("originTooltipShown", (function (e) {
          v.send("example_origin_show", {
            type: e.type,
            src: e.text,
            origin: e.origin
          })
        })).on("selectTooltipShown", (function () {
          v.send("select_tooltip_show")
        })).on("exampleTabTap", (function (e) {
          v.send("example_tab_click", {
            src: e.text,
            dst: e.translation
          })
        })).on("action:closeCustomExamples", (function () {
          v.send("custom_examples_close")
        })), this.on("sharingOpen", (function () {
          v.send("sharing_open")
        })).on("shareButtonClick", (function () {
          v.send("sharing_copy_click", {
            type: "icon"
          })
        })).on("shareInputClick", (function () {
          v.send("sharing_input_click", {
            type: "input"
          })
        })).on("shareData", (function (e) {
          var t = this.getProps(),
            n = "sharing_share_" + e.service;
          v.send(n, {
            type: e.service,
            src: t.text,
            dst: t.translation
          })
        })).on("writeMail", (function () {
          var e = this.getProps();
          v.send("sharing_share_mail", {
            type: "email",
            src: e.text,
            dst: e.translation
          })
        })).on("keyboardOpen", (function (e) {
          var t = this.getProps(),
            n = "keyboard_" + (e.open ? "open" : "close"),
            i = {
              lang: t.srcLang
            };
          e.open || (i.type = e.type), v.send(n, i)
        })).on("action:expiredRefresh", (function () {
          v.send("refresh_alert_click")
        })).on("refreshAlertShow", (function (e) {
          v.send("refresh_alert_show", {
            error_code: e
          })
        })).on("sessionResumed", (function (e) {
          v.send("session_resume", {
            idle_time: e
          })
        })).on("externalClick", (function (e) {
          var t = this.getProps();
          v.send("alt_translate_" + e.toLowerCase(), {
            name: e.toLowerCase(),
            src: t.text,
            dst: t.translation
          })
        })).on("translitToggle", (function (e, t) {
          v.send("translit_" + (t ? "hide" : "show"), {
            type: e,
            show: t ? 0 : 1
          })
        })).on("translitTogglerShown", (function (e) {
          v.send("translit_button_show", {
            type: e
          })
        })).on("translitError", (function (e) {
          v.send("translit_error", {
            type: e
          })
        })).on("distBannerAutoHide", (function () {
          v.send("dist_banner_hide")
        })).on([u.A11Y_EVENTS.SELECT_ACTIVATION, u.A11Y_EVENTS.ACTIVATION], (function (e, t) {
          v.send("focused_element_activation", {
            el: r.default.elementToString(t, 35, ["id", "class", "data-action"]),
            source: e === u.A11Y_EVENTS.SELECT_ACTIVATION ? "space" : "enter"
          })
        })).on("historySettingToggle", (function (e) {
          v.send(e ? "history_setting_enabled" : "history_setting_disabled")
        })), O.on("historyMove", (function (e) {
          v.send("history_move", e)
        })), (0, o.getGlobalEmitter)().on("uniproxyAsrError", (function (e, t) {
          v.send("uniproxy_asr_error", {
            error: e,
            payload: t
          })
        })).on("uniproxyTtsError", (function (e, t) {
          v.send("uniproxy_tts_error", {
            error: e,
            payload: t
          })
        })), (0, d.getTrackerByNamespace)(g.TYPING_METRIKAS).on(g.TYPING_METRIKAS.SPEED_REPORT, (function (e) {
          v.send("typing_speed_report", {
            speed: e.speed,
            duration: e.duration,
            typed: e.typed,
            suggested: e.suggested,
            predicted: e.predicted,
            cleared: e.cleared,
            cleared_predicts: e.clearedPredicts,
            cleared_suggests: e.clearedSuggests
          })
        })), (0, d.getTrackerByNamespace)(p.SUGGESTIONS_METRIKAS).on(p.SUGGESTIONS_METRIKAS.SHOW, (function () {
          v.send("suggestions_show")
        })).on(p.SUGGESTIONS_METRIKAS.APPLY, (function (e) {
          var t = e.index,
            n = e.type,
            i = e.source,
            r = e.len;
          v.send("suggestions_apply", {
            index: t,
            type: n,
            source: i,
            len: r
          })
        })).on(p.SUGGESTIONS_METRIKAS.ITEM_NAVIGATE, (function (e) {
          var t = e.index,
            n = e.type;
          v.send("suggestions_item_navigate", {
            index: t,
            type: n
          })
        })).on(p.SUGGESTIONS_METRIKAS.ITEM_HOVER, (function (e) {
          var t = e.index,
            n = e.type;
          v.send("suggestions_item_hover", {
            index: t,
            type: n
          })
        })), (0, d.getTrackerByNamespace)(h.HISTORY_METRIKAS).on(h.HISTORY_METRIKAS.APPLY_ITEM, (function (e) {
          var t = e.index;
          v.send("history_select", {
            index: t
          })
        })).on(h.HISTORY_METRIKAS.OPEN_HISTORY, (function (e) {
          var t = e.source,
            n = void 0 === t ? null : t;
          v.send("history_open", {
            source: n
          })
        })), (0, d.getTrackerByNamespace)(l.IDIOMS_METRIKAS).on(l.IDIOMS_METRIKAS.COMMON_EVENT, (function (e) {
          var t = e.metricKey,
            n = e.metricInfo;
          v.send(t, n)
        })), (0, d.getTrackerByNamespace)(f.RELATED_WORDS_METRIKAS).on(f.RELATED_WORDS_METRIKAS.RENDER, (function (e) {
          var n = e.renderedCategories,
            i = t.getProps().text;
          v.send(f.RELATED_WORDS_METRIKAS.RENDER, {
            renderedCategories: n,
            src: i
          })
        })).on(f.RELATED_WORDS_METRIKAS.WORDS_CLICK, (function (e) {
          var n = e.wordType,
            i = e.wordValue,
            r = t.getProps().text;
          v.send(f.RELATED_WORDS_METRIKAS.WORDS_CLICK, {
            wordType: n,
            wordValue: i,
            src: r
          })
        })).on(f.RELATED_WORDS_METRIKAS.WORDS_COMPLAINT_SEND, (function (e) {
          var t = e.comment,
            n = e.src,
            i = e.wordType,
            r = e.wordValue;
          v.send(f.RELATED_WORDS_METRIKAS.WORDS_COMPLAINT_SEND, {
            comment: t,
            src: n,
            wordType: i,
            wordValue: r
          })
        })), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initUniproxy = void 0;
      var i = n(202);
      t.initUniproxy = function (e) {
        return this._uniproxy = new i.Uniproxy({
          apiKey: e.SPEECHKIT_KEY,
          url: e.UNIPROXY_URL
        }), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "initDistBanner", {
        enumerable: !0,
        get: function () {
          return i.initDistBanner
        }
      });
      var i = n(287)
    },
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.initSuggestions = void 0, n(91), n(3), n(66);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(69),
        s = n(467),
        a = n(94),
        c = n(468),
        u = n(295);

      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(n), !0).forEach((function (t) {
            f(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      t.initSuggestions = function (e) {
        var t, n, i, l = this,
          f = this.getView(),
          p = this.getSettings(),
          h = this.getModel(),
          g = h.getProps(),
          m = g.srcLang,
          _ = g.dstLang,
          v = new o.TemplateView({
            element: e.ELEMENTS.measurer,
            template: e.TEMPLATES.measurer
          }),
          E = new s.SuggestionsModel(d(d({}, (t = window.config.SUGGESTIONS_CONF || {}, n = t.ruOverride || t, {
            limitPredict: (i = function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
              return t in e ? e[t] : n
            })(t, "predicts"),
            limitSuggest: i(t, "suggests"),
            limitOnlyPredict: i(t, "fallbackPredicts", i(t, "predicts")),
            ruOverride: {
              limitPredict: i(n, "predicts"),
              limitSuggest: i(n, "suggests"),
              limitOnlyPredict: i(n, "fallbackPredicts", i(n, "predicts"))
            }
          })), {}, {
            srcLang: m,
            dstLang: _,
            srv: e.SRV,
            sid: e.SID,
            detectOptions: c.DETECTING_OPTIONS.KBD,
            enableRuOverriding: "ru" === e.UI_LANG
          }), {
            url: e.SUGGESTIONS_URL,
            detectUrl: e.DETECTOR_URL,
            validators: {
              text: function (e) {
                return e && !r.default.isUrl(r.default.trim(e)) && "sjn" !== this.getProperty("srcLang")
              },
              srcLang: function (t) {
                return r.default.hasProperty(e.PREDICTOR_LANGS, t)
              }
            }
          }),
          T = new u.Suggestions({
            model: E
          }, {
            container: e.ELEMENTS.suggestions
          }),
          y = function () {
            var e = h.getProps().textScrollY;
            v.scrollTo(v.getScrollInfo().maxTop / 100 * e)
          },
          S = function () {
            T.setPosition(v.getContentElement("[data-measurer-target]").getBoundingClientRect())
          };
        return this.on("textTap", (function (e, t) {
          t && t.target && r.default.getClosest(t.target, (function (e) {
            return e === T.getContainer()
          })) || T.setVisible(!1)
        })).on("textFocus", (function (e) {
          f.hasState("select") || T.setEnabled(e), e || T.setVisible(!1)
        })).on("resize", (function () {
          T.setVisible(!1)
        })).on("textKeydown", (function (e) {
          if (e.keyCode === a.KEYBOARD_KEYS.ENTER && p.isOptionEnabled("shift")) {
            if (e.shiftKey) return void T.setVisible(!1);
            r.default.preventEvent(e)
          }
          if (T.isVisible() && T.isEnabled()) switch (e.keyCode) {
            case a.KEYBOARD_KEYS.ENTER:
              if (e.shiftKey) break;
              r.default.preventEvent(e), T.applyActiveItem(u.SUGGESTIONS_APPLYING_SOURCES.ENTER), T.setVisible(!1), l.updateTrText("enter");
              break;
            case a.KEYBOARD_KEYS.TAB:
              r.default.preventEvent(e), T.applyActiveItem(u.SUGGESTIONS_APPLYING_SOURCES.TAB), T.setVisible(!1);
              break;
            case a.KEYBOARD_KEYS.UP:
              r.default.preventEvent(e), T.updateActiveIndex(-1);
              break;
            case a.KEYBOARD_KEYS.DOWN:
              r.default.preventEvent(e), T.updateActiveIndex(1);
              break;
            case a.KEYBOARD_KEYS.LEFT:
            case a.KEYBOARD_KEYS.RIGHT:
              T.setEnabled(!1);
              break;
            case a.KEYBOARD_KEYS.ESCAPE:
              T.isEnabled() && l.updateTrText("escape"), T.setEnabled(!1)
          }
        })).onAction("toggleAuto", (function () {
          E.toggleAuto()
        })), h.onChange("text", (function (t, n) {
          if (!r.default.trim(t)) return E.setText("", n.sender || n.reason), T.setVisible(!1);
          if ("url" !== n.sender || !e.DEFAULT_SRC_LANG) {
            var i = l.getProps(),
              o = i.srcLang,
              s = i.dstLang,
              a = n.caret ? n.caret + t.slice(n.caret).search(/\s|$/) : 0,
              u = (0, c.extractTextWords)(t.slice(0, a), 20);
            E.setText(u, n.sender || n.reason).setProperty({
              index: a,
              srcLang: o,
              dstLang: s
            })
          }
        })).onChange(["srcLang", "dstLang"], (function (e, t) {
          T.setEnabled(!1), E.setProperty(e, t)
        })).onChange("textScrollY", (function () {
          T.setEnabled(!1)
        })), E.on("detect", (function (e, t) {
          t || l.setSrcLanguage(e)
        })).on("auto", (function (e) {
          f.setState({
            auto: e
          }), p.setProperty({
            auto: e
          })
        })).on(["error", "invalid"], (function () {
          T.setEnabled(!1)
        })).on("endOfWord", (function () {
          l.emit("predictorEndOfWord").updateTrText()
        })), T.on(u.SUGGESTIONS_EVENTS.ITEMS_UPDATED, (function () {
          var e = E.getProps().reason,
            t = h.getProps().text;
          if (!["input", "predictor"].includes(e) || !p.isOptionEnabled("suggest") || f.hasState("select")) return T.setEnabled(!1);
          T.setVisible(!0), T.setEnabled(!0);
          var n = (0, c.createInsertingRange)(t, E.getIndex(), E.getPos());
          if (!n) return T.setEnabled(!1);
          n.appendSpace && (t += " "), v.renderData({
            text: t.slice(n.start, n.end) || ".",
            leftText: t.slice(0, n.start),
            rightText: t.slice(n.end)
          }), y();
          var i = v.getScrollInfo();
          if (i.maxTop) {
            var r = function (e) {
              var t = v.getContentElement("[data-measurer-target]").getBoundingClientRect(),
                n = v.getContentElement().getBoundingClientRect(),
                i = t.top - n.top - e.clientHeight;
              return i > 0 ? e.top + i + t.height : null
            }(i);
            if (r) return h.emit("translationViewScrollY", r), void setTimeout((function () {
              T.setEnabled(!0), y(), S()
            }), 100)
          }
          S()
        })).on(u.SUGGESTIONS_EVENTS.APPLY, (function (e, t) {
          var n = h.getProps().text,
            i = E.getIndex(),
            r = t === u.SUGGESTIONS_TYPES.SUGGEST ? E.getSuggestionsPos() : E.getPredictionsPos(),
            o = (0, c.insertTextFragment)(n, e.src, i, r);
          h.setProperty("text", o.text, {
            caret: o.caret,
            sender: "predictor",
            suggestType: t
          }), setTimeout((function () {
            return h.emit("moveTextAreaCaret", o.caret)
          }), 30)
        })), f.onStateChanged("select", (function (e) {
          e && (T.setEnabled(!1), T.setVisible(!1))
        })).onStateChanged("empty", (function (e) {
          e && (T.setEnabled(!1), T.setVisible(!1))
        })), E.toggleAuto(!p.hasProperty("auto") || p.getProperty("auto")), this
      }
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SuggestionsModel = void 0, n(35), n(18);
      var i, r = (i = n(0)) && i.__esModule ? i : {
          default: i
        },
        o = n(20),
        s = n(59),
        a = n(92);
      var c = o.Model.extend({
        init: function (e) {
          var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          this._url = n.url, this._counter = 0, this._detectUrl = n.detectUrl, this._detectCounter = 0, this._currentLimitPredict = this.getLimitParams().limitPredict, this.onChange("auto", (function (e) {
            t.detectLanguage(), t.emit("auto", e)
          })).onChange("text", (function (e, n) {
            n.reason && t.setProperty("reason", n.reason), t.requestSuggestion(), t.detectLanguage()
          })).onChange("srcLang", (function (e, n) {
            n.detected && t.emit("detect", e, n.kbd), t.requestSuggestion()
          })).onChange("suggestions", (function (e) {
            var n, i = t.getLimitParams(),
              r = i.limitPredict,
              o = i.limitOnlyPredict;
            (n = e && e.predictions && e.predictions.length ? r : o) !== t._currentLimitPredict && (t._currentLimitPredict = n, t.requestSuggestion())
          })).onChange("predictions", (function (e) {
            e && e.endOfWord && t.emit("endOfWord")
          }))
        },
        getLimitParams: function () {
          var e = this.getProps(),
            t = {
              limitPredict: e.limitPredict,
              limitSuggest: e.limitSuggest,
              limitOnlyPredict: e.limitOnlyPredict
            };
          return "ru" === e.srcLang && e.enableRuOverriding && e.ruOverride || t
        },
        getParams: function () {
          var e = this.getProps(),
            t = this.getLimitParams().limitSuggest;
          return {
            q: e.text,
            srv: e.srv,
            sid: e.sid,
            lang: this.getLangPair(),
            limitPredict: this._currentLimitPredict,
            limitSuggest: t
          }
        },
        getDefaults: function () {
          return {
            auto: !1,
            srv: "",
            text: "",
            limitPredict: 3,
            limitSuggest: 2,
            srcLang: "",
            dstLang: "",
            reason: "",
            sid: this.getId(),
            predictions: [],
            suggestions: [],
            enableRuOverriding: !1
          }
        },
        getLangPair: function () {
          var e = this.getProps();
          return e.srcLang + "-" + e.dstLang
        },
        getPredictionsPos: function () {
          var e = this.getProps().predictions;
          return e && e.predictions.length ? e.pos : null
        },
        getSuggestionsPos: function () {
          var e = this.getProps().suggestions;
          return e && e.predictions.length ? e.pos : null
        },
        getPos: function () {
          return Math.min.apply(Math, [this.getPredictionsPos(), this.getSuggestionsPos()].filter((function (e) {
            return null !== e
          })))
        },
        arePosesEqual: function () {
          return this.getPredictionsPos() === this.getSuggestionsPos()
        },
        getIndex: function () {
          return this.getProperty("index")
        },
        setText: function (e, t) {
          return this.setProperty("text", e, {
            reason: t
          })
        },
        isAuto: function () {
          return this.getProperty("auto")
        },
        toggleAuto: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return this.setProperty("auto", null !== e ? Boolean(e) : !this.isAuto())
        },
        getDetectParams: function () {
          var e = this.getProps();
          return {
            sid: e.sid,
            srv: e.srv,
            text: r.default.trim(e.text),
            hint: [e.srcLang, e.dstLang].join(","),
            options: e.detectOptions
          }
        },
        canDetectLanguage: function () {
          return this.isValid("text")
        },
        canRequestSuggestion: function () {
          return this.isValid()
        },
        detectLanguage: function () {
          var e = this;
          if (!this.canDetectLanguage() || !this.getProperty("auto")) return this;
          var t = this.getDetectParams(),
            n = ++this._detectCounter;
          return s.HTTPRequest.get(this._detectUrl, t, (function (i, r) {
            if (n === e._detectCounter && JSON.stringify(t) === JSON.stringify(e.getDetectParams())) {
              var o = i ? i.code : r.body.code;
              if (o !== s.HTTPRequest.codes.OK) return e.emit("detectError", i || new a.HTTPError(o, r.body.message));
              r.body.lang && e.setProperty("srcLang", r.body.lang, {
                kbd: Boolean(r.body.kbd),
                detected: !0
              })
            }
          })), this
        },
        requestSuggestion: function () {
          var e = this;
          if (!this.canRequestSuggestion()) return this;
          var t = this.getParams(),
            n = ++this._counter;
          return this.emit("query", t), s.HTTPRequest.get(this._url, t, (function (i, r) {
            if (n === e._counter && JSON.stringify(t) === JSON.stringify(e.getParams())) return i ? e.emit("error", i) : void("endOfWord" in r.body && !("predictions" in r.body) ? r.body.text ? e.setProperty({
              suggestions: null,
              predictions: {
                endOfWord: r.body.endOfWord,
                pos: r.body.pos,
                predictions: r.body.text.map((function (e) {
                  return {
                    src: e
                  }
                }))
              }
            }) : r.body.endOfWord && e.emit("endOfWord") : e.setProperty({
              predictions: r.body.predict,
              suggestions: r.body.suggest
            }))
          })), this
        }
      });
      t.SuggestionsModel = c
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createInsertingRange = function (e, t, n) {
        var i = {};
        if (n < 0) i.end = t, i.start = t + n;
        else if (1 === n && t === e.length) i.appendSpace = !0, i.end = t + n, i.start = t + n;
        else {
          if (t !== e.length || " " !== e.charAt(t - 1)) return null;
          i.end = t, i.start = t
        }
        return i
      }, t.insertTextFragment = function (e, t, n, i) {
        var r = n,
          o = t;
        i < 0 ? r += i : o = new Array(i + 1).join(" ") + t;
        return {
          text: e.slice(0, r) + o + e.slice(n),
          caret: r + o.length
        }
      }, t.extractTextWords = function (e, t) {
        if (!r.default.trim(e)) return "";
        var n = e.match(/(\S+\s*)/g),
          i = t ? -t : 0;
        return n ? n.slice(i).join("") : ""
      }, t.DETECTING_OPTIONS = void 0, n(3), n(82);
      var i, r = (i = n(0)) && i.__esModule ? i : {
        default: i
      };
      t.DETECTING_OPTIONS = {
        KBD: 1
      }
    },
    function (e, t, n) {
      "use strict";
      n(3), n(97), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getPinTemplate = function () {
        return (0, I.tpl)(i || (i = L(['\n    <span class="button button_icon button_icon_pin" title="{{?pinned}}', "{{/pinned}}{{^pinned}}", '{{/pinned}}" data-type="{{type}}" data-lang="{{value}}" data-value="" data-action="{{?pinned}}un{{/pinned}}pinLang"></span>\n    '])), R.selectUnpinTooltip, R.selectPinTooltip)
      }, t.getUrlTemplate = function () {
        return (0, I.tpl)(r || (r = L(['\n    <input type="hidden" name="ui" value="{{ui}}">\n    <input type="hidden" name="url" value="{{url}}">\n    <input type="hidden" name="lang" value="{{lang}}">\n    <span class="page-url" data-action="translatePage">{{url}}</span>\n    '])))
      }, t.getSpellerTemplate = function () {
        return (0, I.tpl)(o || (o = L(['\n    {{@items}}<span class="speller-chunk"{{?type}} data-type="{{type}}" data-index="{{index}}"{{/type}}>{{value}}</span>{{/items}}.\n    '])))
      }, t.getListboxTemplate = function () {
        return (0, I.tpl)(s || (s = L(['\n    {{@items}}\n        <div class="listbox-option{{?multiple}} listbox-option_checkbox{{/multiple}}{{?selected}} state-selected{{/selected}}{{?lead}} listbox-option_type_lead{{/lead}} state-unselectable" data-value="{{value}}" unselectable="on">{{text}}{{>extras}}</div>\n    {{/items}}\n    '])))
      }, t.getExampleListboxTemplate = function () {
        return (0, I.tpl)(a || (a = L(['\n    {{@groups}}\n        <div class="listbox-group">\n        {{@items}}\n            <div class="listbox-option{{?multiple}} listbox-option_checkbox{{/multiple}}{{?isPrimary}} listbox-option_primary{{/isPrimary}}{{?disabled}} listbox-option_disabled{{/disabled}}{{?selected}} state-selected{{/selected}} state-unselectable"\n                data-tracking-data=\'{"id": "examlpes/tabs/tab", "title": "{{value}}", "partOfSpeechCode": "{{posCode}}", "disabled": "{{?disabled}}true{{/disabled}}{{^disabled}}false{{/disabled}}", "selected": "{{?selected}}true{{/selected}}{{^selected}}false{{/selected}}"}\'\n                data-value="{{value}}{{^disabled}}:{{posCode}}{{/disabled}}"\n                unselectable="on" data-pos="{{posCode}}">{{text}}{{>extras}}</div>\n            {{^others}}{{?isPrimary}}<div class="listbox-option_delimiter_arrow"></div>{{/isPrimary}}{{/others}}\n        {{/items}}\n        </div>\n    {{/groups}}\n    '])))
      }, t.getListboxTemplate2 = function () {
        return (0, I.tpl)(c || (c = L(['\n    {{@cols}}<div class="listbox-column" unselectable="on">{{>items}}</div>{{/cols}}\n    '])))
      }, t.getTablistTemplate = function () {
        return (0, I.tpl)(u || (u = L(['\n    {{@items}}\n    <a class="listbox-option{{?selected}} state-selected{{/selected}}{{?show}} state-show{{/show}} state-unselectable" data-value="{{value}}" unselectable="on">{{text}}</a>\n    {{/items}}\n    '])))
      }, t.getLangTagsTemplate = function () {
        return (0, I.tpl)(l || (l = L(['\n    {{?tags.new}}<span class="listbox-option-tag listbox-option-tag_new">new</span>{{/tags.new}}{{?tags.beta}}<span class="listbox-option-tag listbox-option-tag_beta">&beta;</span>{{/tags.beta}}{{?tags.alpha}}<span class="listbox-option-tag listbox-option-tag_alpha">&alpha;</span>{{/tags.alpha}}\n    '])))
      }, t.getMeasurerTemplate = function () {
        return (0, I.tpl)(d || (d = L(['\n    {{?leftText}}<span class="measurer-text measurer-text_left">{{leftText}}</span>{{/leftText}}<span class="measurer-text measurer-text_main" data-measurer-target="true">{{text}}</span>{{?rightText}}<span class="measurer-text measurer-text_right">{{rightText}}</span>{{/rightText}}<span class="measurer-text measurer-text_dot">.</span>\n    '])))
      }, t.getAlignmentTemplate = function () {
        return (0, I.tpl)(f || (f = L(['\n    {{?leftText}}<span class="measurer-text measurer-text_left">{{leftText}}</span>{{/leftText}}{{@items}}<span class="measurer-text measurer-text_main" data-measurer-target="true">{{text}}</span>{{?gap}}<span class="measurer-text measurer-text_right">{{gap}}</span>{{/gap}}{{/items}}{{?rightText}}<span class="measurer-text measurer-text_right">{{rightText}}</span>{{/rightText}}<span class="measurer-text measurer-text_dot">.</span>\n    '])))
      }, t.getExternalTemplate = function () {
        return (0, I.tpl)(p || (p = L(['\n    {{@items}}<a href="{{href}}" class="external-link" data-external-name="{{name}}" target="_blank" rel="nofollow" data-tracking-data=\'{"id": "externalTranslate/{{name}}"}\'>{{text}}</a>{{/items}}\n    '])))
      }, t.getPredictorTemplate = function () {
        return (0, I.tpl)(h || (h = L(['{{?spinner}}<span class="button button_icon button_icon_spinner"></span>{{/spinner}}\n            {{^spinner}}<div class="predictor-value" data-value="{{value}}" unselectable="on">{{@values}}{{?highlighted}}<strong>{{/highlighted}}{{value}}{{?highlighted}}</strong>{{/highlighted}}{{/values}}</div>{{/spinner}}\n    '])))
      }, t.getEmojiValueTemplate = function () {
        return (0, I.tpl)(g || (g = L(['\n    {{?emojiCode}}<img src="https://twitter.github.io/twemoji/2/72x72/{{emojiCode}}.png" alt="{{/emojiCode}}{{value}}{{?emojiCode}}" class="translation-emoji" draggable="false">{{/emojiCode}}\n    '])))
      }, t.getTranslatorTemplate = function () {
        return (0, I.tpl)(m || (m = L(['\n    <span data-complaint-type="fullTextTranslation" data-complaint-target="true">{{@chunks}}{{@values}}<span class="translation-word {{?align}}translation-chunk{{/align}}" {{?align}}data-align="{{align}}"{{/align}}>{{value}}</span>{{/values}}{{?needLineBreak}}<span>&#10;</span>{{/needLineBreak}}{{/chunks}}</span>\n    '])))
      }, t.getDictionaryTemplate = function () {
        return (0, I.tpl)(_ || (_ = L(['\n    <div class="synonyms-list tab-content" data-tab="syn" data-tracking-data=\'{"id": "syns"}\'>\n        {{*syn}}\n        <div class="segment-title">{{title}}</div>\n        <div class="tabs">\n            {{@articles}}\n            <div class="tab" data-tracking-data=\'{"id": "syns/article", "tab": "{{tab}}"}\'>\n                <div class="tab-title" title="{{tooltip}}">{{subtitle}}</div>\n                <div class="tab-list synonyms-meanings" data-tab="{{tab}}">{{@items}}\n                    <span class="synonyms-value" data-dict-type="{{name}}" data-complaint-type="tr" data-complaint-target="true" data-value="{{name}}:{{value}}" data-title="{{title}}" data-part-of-speech="{{partOfSpeech}}" data-group-index="{{{groupIndex}}">{{value}}</span>{{^isLast}}<span class="tab-separator">&nbsp;&middot; </span>{{/isLast}}\n                    {{/items}}</div>\n            </div>\n            {{/articles}}\n        </div>\n        {{/syn}}\n    </div>\n    <div class="dictionary-list tab-content" data-tab="regular" data-tracking-data=\'{"id": "dict"}\'>\n        {{*dict}}\n        <div class="segment-title">{{title}}</div>\n        <ul class="tab-list">\n            {{@items}}\n            <li class="dictionary-item{{^show}} state-invisible{{/show}}" data-tracking-data=\'{"id": "dict/article", "title": "{{title.title}}", "partOfSpeechCode": "{{title.partOfSpeechCode}}"}\'>\n                {{*title}}\n                <div class="dictionary-title">\n                    {{title}}\n                    {{?transcription}}<span class="dictionary-transcription" data-title="{{{title}}}" data-part-of-speech="{{{partOfSpeechCode}}}" data-complaint-type="ts" data-complaint-target="true">[{{transcription}}]</span>{{/transcription}}\n                    {{?partOfSpeech}}<span class="dictionary-pos" title="{{{tooltip}}}">{{partOfSpeech}}</span>{{/partOfSpeech}}\n                    <span class="dictionary-marks">{{@marks}}<span class="dictionary-mark" title="{{title}}">{{value}}</span>{{/marks}}</span>\n                    {{?fl}}<span class="dictionary-marks_fl">{{fl}}</span>{{/fl}}\n                </div>\n                {{?hasExamples}}<span class="example-toggler{{?showExampleToggle}} state-visible{{/showExampleToggle}}" data-text-show="', '" data-text-hide="', '" data-action="dictExamplesToggle" data-tracking-data=\'{"id": "dict/article/showExamples"}\'></span>{{/hasExamples}}\n                {{/title}}\n\n                {{^definition}}\n                <ol class="dictionary-meanings">\n                    {{@meanings}}\n                    <li class="dictionary-meanings-item{{^show}} state-invisible{{/show}}" data-tracking-data=\'{"id": "dict/article/meaning", "groupIndex": "{{{groupIndex}}}"}\'>\n                        <span class="dictionary-meanings-index"></span>\n                        <div class="dictionary-meanings-value">{{@meaningVals}}<span class="dictionary-meaning" data-complaint-type="tr" data-complaint-target="true" data-value="tr:{{{value}}}" data-title="{{{title}}}" data-part-of-speech="{{{partOfSpeech}}" data-group-index="{{{groupIndex}}">{{value}}</span><span class="dictionary-marks">{{@marks}}<span class="dictionary-mark" title="{{title}}">{{value}}</span>{{/marks}}</span>{{^isLast}}, {{/isLast}}{{/meaningVals}}</div>\n\n                        {{?hasTranslations}}<div class="dictionary-meanings-trs">({{@meaningTrs}}<span data-complaint-type="mean" data-complaint-target="true" data-value="mean:{{{value}}}" data-title="{{{title}}}" data-part-of-speech="{{{partOfSpeech}}" data-group-index="{{{groupIndex}}">{{value}}</span>{{^isLast}}, {{/isLast}}{{/meaningTrs}})</div>{{/hasTranslations}}\n\n                        {{?hasExamples}}\n                        <ul class="dictionary-examples">\n                            {{@examples}}\n                            <li><span data-complaint-type="ex" data-complaint-target="true" data-title="{{{title}}}" data-part-of-speech="{{{partOfSpeech}}" data-group-index="{{{groupIndex}}" data-tracking-data=\'{"id": "dict/article/meaning/example"}\'>{{exampleVal}}{{?exampleTrs}} &ndash; {{exampleTrs}}{{/exampleTrs}}</span></li>\n                            {{/examples}}\n                        </ul>\n                        {{/hasExamples}}\n                    </li>\n                    {{/meanings}}\n                </ol>\n                {{/definition}}\n\n                {{*definition}}\n                <div class="dictionary-definition">\n                    {{?imgUrl}}\n                    <a href="{{origUrl}}" class="dictionary-definition-img" rel="nofollow" target="_blank" data-tracker-goal="DICT_CARD_IMAGE_CLICK">\n                        <img src="{{imgUrl}}" alt="{{altText}}">\n                    </a>\n                    {{/imgUrl}}\n                    <div class="dictionary-definition-text">\n                        {{@textVal}}{{?highlighted}}<strong>{{/highlighted}}{{text}}{{?highlighted}}</strong>{{/highlighted}}{{/textVal}}\n                    </div>\n                    <div class="dictionary-definition-link">\n                        <a href="{{sourceUrl}}" rel="nofollow" target="_blank" data-tracker-goal="DICT_CARD_SOURCE_CLICK">{{sourceName}}</a>\n                    </div>\n                </div>\n                {{/definition}}\n            </li>\n            {{/items}}\n        </ul>\n        {{?hasModernLabel}}<div class="label"><a class="label-link" href="https://yandex.ru/blog/company/hypeandvape" target="_blank" data-tracker-goal="DICT_BLOG_CLICK">', '</a></div>{{/hasModernLabel}}\n        {{?showToggle}}<span class="toggler" data-text-show="{{moreMessage}}" data-text-hide="', '" data-action="toggleDictionary" data-tracking-data=\'{"id": "dict/expand"}\'></span>{{/showToggle}}\n        {{/dict}}\n    </div>\n    <span class="button button_complaint state-fadeaway" data-action="toggleComplaintMode">', "</span>\n    "])), R.dictionaryExamplesShow, R.dictionaryExamplesHide, R.dictionaryLabelModern, R.dictHide, R.reportError)
      }, t.getExamplesTemplate = function () {
        return (0, I.tpl)(v || (v = L(['\n    <div class="tab-content" data-tab="examples" data-tracking-data=\'{"id": "examples"}\'>\n        <ul class="tab-list">\n            {{@items}}\n            <li class="dictionary-example_list{{?expanded}} state-expanded{{/expanded}}" data-translation="{{translation}}" data-tracking-data=\'{"id": "examples/article", "partOfSpeechCode": "{{ posCode }}", "index": "{{ index }}", "title": "{{ translation }}"}\'>\n                <div class="dictionary-example_group{{?showAll}} state-showall{{/showAll}}" data-pos="{{posCode}}">\n                    <div class="dictionary-meanings-value"><span class="dictionary-meaning" data-pos="{{posCode}}">{{translation}}</span>{{?pos}}<span class="dictionary-marks" title="{{tooltip}}">{{pos}}</span>{{/pos}}</div>\n                    {{@examples}}\n                    <div class="dictionary-example" data-complaint-target="true" data-complaint-type="example" data-id="{{id}}" data-text="{{originalVal}}" data-translation="{{originalTrs}}" data-tracking-data=\'{"id": "examples/article/example", "exampleId": "{{id}}"}\' data-role="dictionaryExample">\n                        <div class="dictionary-example_wrapper" data-tracking-data=\'{"id": "examples/article/example/src"}\'>\n                            <div class="dictionary-example_source"><div role="button" class="button button_icon button_icon_speaker{{^speakerSrc}} state-disabled{{/speakerSrc}}" data-text="{{originalVal}}" data-lang="{{srcLang}}" data-tr="{{translation}}" data-ref="{{ref}}" data-action="soundExample" data-tracking-data=\'{"id": "examples/article/example/src/speaker"}\'></div>{{@exampleVal}}{{?highlighted}}<span class="example-highlighted">{{/highlighted}}{{text}}{{?highlighted}}</span>{{/highlighted}}{{/exampleVal}}</div>\n                        </div>\n                        <div class="dictionary-example_wrapper" data-tracking-data=\'{"id": "examples/article/example/dst"}\'>\n                            <div class="dictionary-example_target"><div role="button" class="button button_icon button_icon_speaker{{^speakerDst}} state-disabled{{/speakerDst}}" data-text="{{originalTrs}}" data-lang="{{dstLang}}" data-tr="{{translation}}" data-ref="{{ref}}" data-action="soundExample" data-tracking-data=\'{"id": "examples/article/example/dst/speaker"}\'></div>{{@exampleTrs}}{{?highlighted}}<span class="example-highlighted">{{/highlighted}}{{text}}{{?highlighted}}</span>{{/highlighted}}{{/exampleTrs}}</div>\n                        </div>\n                        <div class="dictionary-example_meta">\n                            <span class="dictionary-example_meta__vote-buttons{{*voteResult}} state-voted{{/voteResult}}">\n                                <div\n                                    role="button"\n                                    class="button button_icon button_icon_thumbsup{{*voteResult}}{{?isGood}} state-voted{{/isGood}}{{/voteResult}}"\n                                    aria-label="', '"\n                                    data-tooltip="', '"\n                                    data-tooltip-position="top"\n                                    data-action="voteExample"\n                                    data-vote-type="good"\n                                    data-voted="{{*voteResult}}true{{/voteResult}}"\n                                    data-id="{{id}}"\n                                    data-tracking-data=\'{"id": "examples/article/example/goodVote"}\'\n                                ></div>\n                                <div\n                                    role="button"\n                                    class="button button_icon button_icon_thumbsdown{{*voteResult}}{{?isBad}} state-voted{{/isBad}}{{/voteResult}}"\n                                    aria-label="', '"\n                                    data-tooltip="', '"\n                                    data-tooltip-position="top"\n                                    data-action="voteExample"\n                                    data-vote-type="bad"\n                                    data-voted="{{*voteResult}}true{{/voteResult}}"\n                                    data-id="{{id}}"\n                                    data-tracking-data=\'{"id": "examples/article/example/badVote"}\'\n                                ></div>\n                            </span>\n                            {{?ref}}<div class="example_ref" data-type="{{refType}}" data-ref="{{ref}}" data-message="{{message}}" data-tracking-data=\'{"id": "examples/article/example/ref"}\'></div>{{/ref}}\n                        </div>\n                    </div>\n                    {{/examples}}\n                </div>\n                {{?moreCount}}{{^filtered}}{{^showAll}}<div class="dictionary-example_toggler" data-count="{{moreCount}}" data-index="{{index}}" data-text-show="{{moreMessage}}" data-text-hide="', '" data-action="toggleLongExamples"></div>{{/showAll}}{{/filtered}}{{/moreCount}}\n            </li>\n            {{/items}}\n        </ul>\n    </div>\n    '])), R.exampleValuedGoodTooltip, R.exampleValuedGoodTooltip, R.exampleValuedBadTooltip, R.exampleValuedBadTooltip, R.examplesHide)
      }, t.getCollectionsTemplate = function () {
        var e = window.config.PASSPORT,
          t = window.config.RETPATH,
          n = window.config.UID ? '\n        {{?subscribed}}\n        <span class="collection-info_icon button_icon button_icon_check_white" data-index="{{collectionId}}" data-tooltip="'.concat(R.collectionsSubscribed, '" data-tooltip-position="left"></span>\n        {{/subscribed}}\n        {{?subscribeButton}}\n        {{^subscribed}}\n        <span class="collection-info_icon button_icon button_icon_plus_white" data-value data-index="{{collectionId}}" data-action="subscribe" data-subscribe-type="collection_list" data-tooltip="').concat(R.collectionsButtonSubscribe, '" data-tooltip-position="left"></span>\n        {{/subscribed}}\n        {{/subscribeButton}}\n    ') : '\n        {{?popular}}\n        <span class="collection-info_icon button_icon button_icon_plus_white" data-value data-action="subscribe" data-subscribe-type="collection_list" data-tooltip="'.concat(R.collectionsButtonSubscribe, '" data-tooltip-position="left">\n            <a href="https://passport.yandex.').concat(e, "/auth?origin=translate&amp;retpath=").concat(t, '"></a>\n        </span>\n        {{/popular}}\n    ');
        return (0, I.tpl)(E || (E = L(['\n    {{@blocks}}\n    <div class="collection-section-header">{{header}}</div>\n    <ul class="collection-list">\n        {{@collections}}\n            <li class="collection-item collection-color" data-color="{{color}}" data-type="{{collectionType}}" data-value="{{collectionId}}">\n                <div class="collection-name">\n                    <div class="collection-title">{{collectionName}}</div>\n                    {{?collectionAuthor}}<div class="collection-author">{{collectionAuthor}}</div>{{/collectionAuthor}}\n                </div>\n                <div class="collection-info">\n                    <span class="collection-info_icons">\n                        {{?broken}}<span class="collection-info_icon button_icon info-icon-error" data-tooltip="', '" data-tooltip-position="left"></span>{{/broken}}\n                        {{?private}}<span class="collection-info_icon button_icon button_icon_lock_white" data-tooltip="', '" data-tooltip-position="left"></span>{{/private}}\n                        ', '\n                    </span>\n                    <span class="info-records-count">{{collectionCount}}</span>\n                </div>\n            </li>\n            {{?isHistory}}<li class="collection-item-break"></li>{{/isHistory}}\n        {{/collections}}\n    </ul>\n    {{/blocks}}\n    '])), R.collectionsBrokenSubscription, R.collectionsPrivateTooltip, n)
      }, t.getRecordsTemplate = function () {
        return (0, I.tpl)(T || (T = L(['\n    {{^items}}\n    <li class="collection-placeholder{{?empty}} collection-placeholder_empty{{/empty}}" data-text="', '" data-text-filtered="', '"></li>\n    {{/items}}\n    {{@items}}\n    <li class="record{{?selected}} state-selected{{/selected}}">\n        <div class="button button_icon button_icon_favourites state-favourite" title="', '" data-action="deleteRecord" data-index="{{id}}"></div>\n        <div data-value="{{id}}">\n            <span class="listbox-option_checkbox"></span>\n            <div class="record-item">\n                <div class="record-item_text">\n                    <div class="record-line">\n                        <div class="record-line_lang">{{srcLang}}</div>\n                        <div role="button" class="record-line_speaker button button_icon button_icon_speaker" data-value data-text="{{text}}" data-lang="{{srcLang}}" data-action="soundCollection"></div>\n                    </div>\n                    <div lang="{{srcLang}}" dir="{{srcDir}}">{{text}}</div>\n                </div>\n                <div class="record-item_translation">\n                    <div class="record-line record-line_tr">\n                        <div class="record-line_lang">{{dstLang}}</div>\n                        <div role="button" class="record-line_speaker record-line_speaker_tr button button_icon button_icon_speaker" data-value data-text="{{translation}}" data-lang="{{dstLang}}" data-action="soundCollection"></div>\n                    </div>\n                    <div lang="{{dstLang}}" dir="{{dstDir}}">{{translation}}</div>\n                </div>\n            </div>\n        </div>\n    </li>\n    {{/items}}\n    '])), R.collectionsRecordsEmpty, R.favouritesFilterEmpty, R.collectionsFavButtonDeleteTooltip)
      }, t.getCollectionHeaderTemplate = function () {
        return (0, I.tpl)(y || (y = L(['\n    <div class="collection-header_card">\n        {{?author}}<div class="collection-header_author">{{author}}</div>{{/author}}\n        <div class="collection-header_info">\n            <div class="collection_info-section">', '<div class="collection-header_count">{{recordsCount}}</div></div>\n            {{?subscribersCount}}<div class="collection_info-section">', '<div class="collection-header_count">{{subscribersCount}}</div></div>{{/subscribersCount}}\n        </div>\n    </div>\n    '])), R.collectionsHeaderRecords, R.collectionsHeaderSubscribers)
      }, t.getCollectionsPopupListTemplate = function () {
        return (0, I.tpl)(S || (S = L(['\n    <li class="collection-item" data-action="addCollection2">\n        <div class="collection-icon icon_new">+</div>\n        <div class="collection-name">', '</div>\n    </li>\n    {{@collections}}\n    <li class="collection-item{{?disabled}} state-disabled{{/disabled}}" data-type="{{collectionType}}" data-value="{{^disabled}}{{collectionId}}{{/disabled}}">\n        <div class="collection-icon collection-color" data-color="{{color}}"><span class="collection-icon-letter">{{collectionIcon}}</span></div>\n        <div class="collection-name">{{collectionName}}</div>\n        <div class="collection-info">\n            {{?private}}<span class="button_icon button_icon_lock"></span>{{/private}}\n            <span class="info-records-count">{{collectionCount}}</span>\n        </div>\n    </li>\n    {{/collections}}\n    '])), R.collectionsListItemCreate)
      }, t.getMenuTemplate = function () {
        return (0, I.tpl)(b || (b = L(['\n    {{@items}}\n    <div class="listbox-option listbox-option_{{itemType}} state-unselectable" unselectable="on" data-value="" data-action="{{action}}"{{?confirm}} data-confirm="{{confirm}}"{{/confirm}}>\n        <span class="button button_icon{{?iconType}} button_icon_{{iconType}}{{/iconType}}"></span>\n        {{text}}\n    </div>\n    {{/items}}\n    '])))
      }, t.getCollectionsToastTemplate = function () {
        return (0, I.tpl)(O || (O = L(['\n    {{^deleted}}\n    <span class="collection-toast_button" data-action="changeCollection">', '</span>\n    {{/deleted}}\n    <div class="collection-toast_text">{{message}}</div>\n    '])), R.collectionsChange)
      }, t.getExamplePopupTemplate = function () {
        return (0, I.tpl)(C || (C = L(['\n    {{?noExamples}}\n    {{^template}}<div class="popup-empty_text"  data-tracking-data=\'{"id": "popup", "type": "empty"}\'>', '</div>{{/template}}\n    {{?template}}<div class="popup-empty popup-empty_title"  data-tracking-data=\'{"id": "popup", "type": "waiting"}\'></div>\n    <div class="popup-empty popup-empty_line"></div>\n    <div class="popup-empty popup-empty_line popup-empty_line-short"></div>\n    <div class="popup-empty popup-empty_line"></div>\n    <div class="popup-empty popup-empty_line popup-empty_line-short"></div>\n    <div class="popup-empty popup-empty_line"></div>\n    <div class="popup-empty popup-empty_line popup-empty_line-short"></div>{{/template}}\n    {{/noExamples}}\n    {{^noExamples}}\n    <div class="popup-content{{^hasExamples}} state-no_examples{{/hasExamples}}" data-tracking-data=\'{"id": "popup", "type": "full"}\'>\n        {{?hasWords}}<div class="popup-words" data-tracking-data=\'{"id": "popup/dict"}\'>\n            {{@words}}<div class="popup-word" data-tracking-data=\'{"id": "popup/dict/article", "title": "{{ title }}", "partOfSpeechCode": "{{ partOfSpeechCode }}"}\'>\n                {{*title}}<div class="popup-dictionary-title">\n                    {{title}}\n                    {{?transcription}}<span class="dictionary-transcription" data-complaint-type="ts" data-complaint-target="true">[{{transcription}}]</span>{{/transcription}}\n                    {{?partOfSpeech}}<span class="dictionary-pos">{{partOfSpeech}}</span>{{/partOfSpeech}}\n                </div>{{/title}}\n                <ol class="popup-dict-items">\n                    {{@popupVals}}\n                    <li class="popup-dict-item" data-tracking-data=\'{"id": "popup/dict/article/meaning", "groupIndex": "{{ groupIndex }}"}\'>\n                        <div class="popup-values">{{@values}}<span class="popup-value">{{value}}{{@marks}}<span class="popup-word_gen">{{value}}</span>{{/marks}}{{^isLast}}, {{/isLast}}</span>{{/values}}</div>\n                        {{?hasSyn}}<div class="popup-syns">({{/hasSyn}}{{@syn}}<span class="popup-syn">{{value}}{{^isLast}}, {{/isLast}}</span>{{/syn}}{{?hasSyn}})</div>{{/hasSyn}}\n                    </li>\n                    {{/popupVals}}\n                </ol>\n            </div>{{/words}}\n        </div>{{/hasWords}}\n        {{?hasExamples}}\n        <div class="popup-items" data-tracking-data=\'{"id": "popup/examples"}\'>\n            {{@items}}\n                <div class="popup-item" data-pos="{{posCode}}" data-tracking-data=\'{"id": "popup/examples/article/example", "partOfSpeechCode": "{{ posCode }}", "text": "{{ text }}", "exampleId": "{{ exampleId }}"}\'>\n                    {{?text}}<div class="popup-title">{{text}}</div>{{?pos}}<span class="popup-tr"> {{pos}}</span>{{/pos}}{{/text}}\n                    <div class="popup-exp">\n                        <div class="popup-exp-both">\n                            <div class="popup-exp-src" data-tracking-data=\'{"id": "popup/examples/article/example/src"}\'>{{@srcExp}}{{?highlighted}}<span class="example-highlighted">{{/highlighted}}{{text}}{{?highlighted}}</span>{{/highlighted}}{{/srcExp}}</div>\n                            <div class="popup-exp-trg" data-tracking-data=\'{"id": "popup/examples/article/example/dst"}\'>{{@dstExp}}{{?highlighted}}<span class="example-highlighted">{{/highlighted}}{{text}}{{?highlighted}}</span>{{/highlighted}}{{/dstExp}}</div>\n                        </div>\n                        {{?ref}}<div class="example_ref" data-type="{{refType}}" data-ref="{{ref}}" data-message="{{message}}" data-tracking-data=\'{"id": "popup/examples/article/example/ref"}\'></div>{{/ref}}\n                    </div>\n                </div>\n            {{/items}}\n        </div>\n        {{/hasExamples}}\n        <div class="popup-exp-link" data-action="showExamples">', "</div>\n    </div>\n    {{/noExamples}}\n    "])), R.popupEmpty, R.popupMoreExamples)
      }, t.getDictionaryHeaderButtonTemplate = function () {
        return (0, I.tpl)(P || (P = L(['\n        <span class="dictionary-header_label-text">{{ customExamplesText }}</span><span class="dictionary-header_close-button" data-action="closeCustomExamples"><i class="sprite_icon sprite_icon_clear2"></i></span>\n    '])))
      };
      var i, r, o, s, a, c, u, l, d, f, p, h, g, m, _, v, E, T, y, S, b, O, C, P, I = n(130);

      function L(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }
      var R = window.config.LOCALIZATIONS
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HistoryModule = void 0;
      var i = n(234),
        r = n(167),
        o = n(325),
        s = n(328),
        a = n(326),
        c = i.AbstractHistoryModule.extend({
          init: function () {
            this.listenSettings(), (this.appConfig.LANDING_TYPE || this.appConfig.DEFAULT_TEXT) && this.history.setVisible(!1)
          },
          isHistorySettingEnabled: function () {
            return this.appSettings.isOptionEnabled("history")
          },
          makeHistoryComponent: function () {
            return new a.History({
              storageModel: this.historyCache
            }, {
              container: this.appConfig.ELEMENTS.historyRecent
            })
          },
          listenSettings: function () {
            var e = this;
            this.appSettings.onChange((function () {
              return e.updateHistorySettingState()
            }))
          },
          listenAppModel: function () {
            var e = this;
            this.super.listenAppModel.call(this);
            var t = !1;
            this.appModel.onChange("historyEnabled", (function (t, n) {
              "boolean" == typeof n.oldValue && e.app.emit("historySettingToggle", t)
            })).onChange("selText", (function (n) {
              t = n === e.appModel.getProperty("text")
            })).onBeforeSet("text", (function (n) {
              !n && t && e.updateHistory(), t = !1
            }))
          },
          listenApp: function () {
            var e = this;
            this.super.listenApp.call(this), this.app.on(o.TEXTAREA_APP_EVENTS.CLEAR, (function () {
              e.updateHistory()
            })).on(s.TTS_APP_EVENTS.SPEAKER_ACTION, (function (t) {
              var n = t.action;
              (void 0 === n ? null : n) === r.PLAYER_ACTIONS.PLAY && e.updateHistory()
            })).on(["synRendered", "dictRendered", "examplesRendered"], (function () {
              e.history.setVisible(!1)
            })).on("exampleTabTap", (function () {
              e.updateHistory()
            })).on("rubberScrolled", (function () {
              e.updateHistoryAsync()
            }))
          }
        });
      t.HistoryModule = c
    },
    function (e, t, n) {
      "use strict";
      n(12), n(24), n(35), n(51), n(68), n(3), n(97), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IdiomsComponent = void 0;
      var i, r = n(289),
        o = n(168),
        s = n(329);

      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(n), !0).forEach((function (t) {
            u(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      var l = r.AbstractIdiomsComponent.extend({
        refs: {
          idiomsInfo: "idiomsInfo",
          idiomsText: "idiomsText"
        },
        init: function (e) {
          var t = e.mainContainerRef;
          this.mainContainerRef = t
        },
        setTextPosition: function (e) {
          return this.getContainer().style.marginTop = "".concat(e, "px"), this
        },
        getHeight: function () {
          return Math.max(this.getContainer().offsetHeight - o.MIN_IDIOMS_HEIGHT, o.MIN_IDIOMS_HEIGHT)
        },
        getPopupPosition: function () {
          var e = this.getRef(this.refs.idiomsInfo);
          if (this.mainContainerRef && e) {
            var t = e.getBoundingClientRect(),
              n = this.mainContainerRef.getBoundingClientRect(),
              i = t.left - n.left - s.HORIZONTAL_POPUP_OFFSET,
              r = t.top - s.VERTICAL_POPUP_OFFSET;
            return c(c({}, t), {}, {
              x: i,
              y: r,
              left: i,
              top: r,
              bottom: t.bottom - s.VERTICAL_POPUP_OFFSET
            })
          }
          return {
            x: 0,
            y: 0
          }
        },
        onInfoClick: function () {
          var e = this.getProps(),
            t = e.popupIsVisible,
            n = e.complaint,
            i = t ? null : this.getPopupPosition();
          n && this.emit(o.IDIOMS_EVENTS.SET_COMPLAINT, !1), this.emit(o.IDIOMS_EVENTS.OPEN_POPUP, !t, i).emit(o.IDIOMS_EVENTS.SEND_METRIC, o.IDIOMS_METRIKAS.INFO_CLICK)
        },
        setComplaintHighlighted: function (e) {
          var t = this.getRef(this.refs.idiomsText);
          return t ? (e ? t.setAttribute("data-highlighted", "true") : t.removeAttribute("data-highlighted"), this) : this
        },
        setVisibleAsync: function (e) {
          var t = this;
          return setTimeout((function () {
            return t.setVisible(e)
          })), this
        },
        template: function (e) {
          var t, n, r = this,
            o = e.html,
            s = e.cn,
            a = this.getProps().text,
            c = s("idioms");
          return o(i || (t = ['\n            <span class="', '">', ' </span>\n            <span\n                id="idiomText"\n                data-ref-id="', '"\n                class="', '"\n                data-prevent-focus="true"\n                data-complaint-type="idiom"\n                data-complaint-target="true"\n                data-title="', '"\n                @click=', "\n            >\n                ", '\n            </span>\n            <span\n                data-ref-id="', '"\n                class="', '"\n                @click=', "\n            >\n            </span>\n        "], n || (n = t.slice(0)), i = Object.freeze(Object.defineProperties(t, {
            raw: {
              value: Object.freeze(n)
            }
          }))), c("label"), this.localizations.idiomLabel, this.refs.idiomsText, c("text"), a, (function () {
            return r.onTextClick()
          }), a, this.refs.idiomsInfo, c("info"), (function () {
            return r.onInfoClick()
          }))
        }
      });
      t.IdiomsComponent = l
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RelatedWordsModule = void 0;
      var i = n(290),
        r = n(473),
        o = i.AbstractRelatedWordsModule.extend({
          init: function () {
            this.listenAppView(), this.listenAppModel()
          },
          listenAppView: function () {
            var e = this;
            this.appView.onStateChanged("select", (function (t) {
              e.ignoreDict = t
            }))
          },
          listenAppModel: function () {
            var e = this;
            this.appModel.onChange("text", (function (t) {
              t || e.reset()
            }))
          },
          makeRelatedWordsComponent: function () {
            return new r.RelatedWordsComponent({}, {
              container: this.appConfig.ELEMENTS.relatedWords
            })
          },
          setWords: function (e) {
            this.ignoreDict || this.super.setWords.call(this, e)
          }
        });
      t.RelatedWordsModule = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.RelatedWordsComponent = void 0;
      var i = n(291),
        r = n(474),
        o = i.AbstractRelatedWordsComponent.extend({
          getAdditionalWordsListProps: function () {
            return {
              canExpand: !1
            }
          },
          getLocalizations: function () {
            return r.synTitles
          }
        });
      t.RelatedWordsComponent = o
    },
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.synTitles = t.i18n = void 0;
      var i = window.config || {},
        r = i.LOCALIZATIONS || {};
      t.i18n = r;
      var o = i.SYN_TITLES || {};
      t.synTitles = o
    }]);

