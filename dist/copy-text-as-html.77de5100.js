// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/clipboard-polyfill/dist/clipboard-polyfill.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = v;
exports.readText = h;
exports.setDebugLog = l;
exports.suppressWarnings = d;
exports.write = f;
exports.writeText = p;
exports.DT = exports.default = void 0;

function t(t, e, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function a(t) {
      try {
        u(r.next(t));
      } catch (t) {
        i(t);
      }
    }

    function c(t) {
      try {
        u(r.throw(t));
      } catch (t) {
        i(t);
      }
    }

    function u(t) {
      t.done ? o(t.value) : new n(function (e) {
        e(t.value);
      }).then(a, c);
    }

    u((r = r.apply(t, e || [])).next());
  });
}

function e(t, e) {
  var n,
      r,
      o,
      i,
      a = {
    label: 0,
    sent: function () {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return i = {
    next: c(0),
    throw: c(1),
    return: c(2)
  }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;

  function c(i) {
    return function (c) {
      return function (i) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; a;) try {
          if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

          switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
            case 0:
            case 1:
              o = i;
              break;

            case 4:
              return a.label++, {
                value: i[1],
                done: !1
              };

            case 5:
              a.label++, r = i[1], i = [0];
              continue;

            case 7:
              i = a.ops.pop(), a.trys.pop();
              continue;

            default:
              if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                a = 0;
                continue;
              }

              if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                a.label = i[1];
                break;
              }

              if (6 === i[0] && a.label < o[1]) {
                a.label = o[1], o = i;
                break;
              }

              if (o && a.label < o[2]) {
                a.label = o[2], a.ops.push(i);
                break;
              }

              o[2] && a.ops.pop(), a.trys.pop();
              continue;
          }

          i = e.call(t, a);
        } catch (t) {
          i = [6, t], r = 0;
        } finally {
          n = o = 0;
        }

        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, c]);
    };
  }
}

var n = ["text/plain", "text/html"];

var r = function () {
  (console.warn || console.log).call(arguments);
}.bind(console, "[clipboard-polyfill]"),
    o = !0;

var i = function () {
  function t() {
    this.m = {};
  }

  return t.prototype.setData = function (t, e) {
    o && -1 === n.indexOf(t) && r("Unknown data type: " + t, "Call clipboard.suppressWarnings() to suppress this warning."), this.m[t] = e;
  }, t.prototype.getData = function (t) {
    return this.m[t];
  }, t.prototype.forEach = function (t) {
    for (var e in this.m) t(this.m[e], e);
  }, t;
}(),
    a = function (t) {},
    c = !0;

exports.DT = i;

var u = function () {
  (console.warn || console.log).apply(console, arguments);
}.bind("[clipboard-polyfill]"),
    s = "text/plain";

function l(t) {
  a = t;
}

function d() {
  c = !1, o = !1;
}

function f(n) {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      if (c && !n.getData(s) && u("clipboard.write() was called without a `text/plain` data type. On some platforms, this may result in an empty clipboard. Call clipboard.suppressWarnings() to suppress this warning."), C()) {
        if (function (t) {
          var e = t.getData(s);
          if (void 0 !== e) return window.clipboardData.setData("Text", e);
          throw new Error("No `text/plain` value was specified.");
        }(n)) return [2];
        throw new Error("Copying failed, possibly because the user rejected it.");
      }

      if (g(n)) return a("regular execCopy worked"), [2];
      if (navigator.userAgent.indexOf("Edge") > -1) return a('UA "Edge" => assuming success'), [2];
      if (x(document.body, n)) return a("copyUsingTempSelection worked"), [2];
      if (function (t) {
        var e = document.createElement("div");
        e.setAttribute("style", "-webkit-user-select: text !important"), e.textContent = "temporary element", document.body.appendChild(e);
        var n = x(e, t);
        return document.body.removeChild(e), n;
      }(n)) return a("copyUsingTempElem worked"), [2];
      if (void 0 !== (t = n.getData(s)) && function (t) {
        a("copyTextUsingDOM");
        var e = document.createElement("div");
        e.setAttribute("style", "-webkit-user-select: text !important");
        var n = e;
        e.attachShadow && (a("Using shadow DOM."), n = e.attachShadow({
          mode: "open"
        }));
        var r = document.createElement("span");
        r.innerText = t, n.appendChild(r), document.body.appendChild(e), D(r);
        var o = document.execCommand("copy");
        return E(), document.body.removeChild(e), o;
      }(t)) return a("copyTextUsingDOM worked"), [2];
      throw new Error("Copy command failed.");
    });
  });
}

function p(n) {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      return navigator.clipboard && navigator.clipboard.writeText ? (a("Using `navigator.clipboard.writeText()`."), [2, navigator.clipboard.writeText(n)]) : [2, f(T(n))];
    });
  });
}

function v() {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      switch (e.label) {
        case 0:
          return t = T, [4, h()];

        case 1:
          return [2, t.apply(void 0, [e.sent()])];
      }
    });
  });
}

function h() {
  return t(this, void 0, void 0, function () {
    return e(this, function (t) {
      if (navigator.clipboard && navigator.clipboard.readText) return a("Using `navigator.clipboard.readText()`."), [2, navigator.clipboard.readText()];
      if (C()) return a("Reading text using IE strategy."), [2, k()];
      throw new Error("Read is not supported in your browser.");
    });
  });
}

var b = !1;

function m() {
  b || (c && u('The deprecated default object of `clipboard-polyfill` was called. Please switch to `import * as clipboard from "clipboard-polyfill"` and see https://github.com/lgarron/clipboard-polyfill/issues/101 for more info.'), b = !0);
}

var w = {
  DT: i,
  setDebugLog: function (t) {
    return m(), l(t);
  },
  suppressWarnings: function () {
    return m(), d();
  },
  write: function (n) {
    return t(this, void 0, void 0, function () {
      return e(this, function (t) {
        return m(), [2, f(n)];
      });
    });
  },
  writeText: function (n) {
    return t(this, void 0, void 0, function () {
      return e(this, function (t) {
        return m(), [2, p(n)];
      });
    });
  },
  read: function () {
    return t(this, void 0, void 0, function () {
      return e(this, function (t) {
        return m(), [2, v()];
      });
    });
  },
  readText: function () {
    return t(this, void 0, void 0, function () {
      return e(this, function (t) {
        return m(), [2, h()];
      });
    });
  }
},
    y = function () {
  this.success = !1;
};

function g(t) {
  var e = new y(),
      n = function (t, e, n) {
    a("listener called"), t.success = !0, e.forEach(function (e, r) {
      var o = n.clipboardData;
      o.setData(r, e), r === s && o.getData(r) !== e && (a("setting text/plain failed"), t.success = !1);
    }), n.preventDefault();
  }.bind(this, e, t);

  document.addEventListener("copy", n);

  try {
    document.execCommand("copy");
  } finally {
    document.removeEventListener("copy", n);
  }

  return e.success;
}

function x(t, e) {
  D(t);
  var n = g(e);
  return E(), n;
}

function D(t) {
  var e = document.getSelection();

  if (e) {
    var n = document.createRange();
    n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n);
  }
}

function E() {
  var t = document.getSelection();
  t && t.removeAllRanges();
}

function T(t) {
  var e = new i();
  return e.setData(s, t), e;
}

function C() {
  return "undefined" == typeof ClipboardEvent && void 0 !== window.clipboardData && void 0 !== window.clipboardData.setData;
}

function k() {
  return t(this, void 0, void 0, function () {
    var t;
    return e(this, function (e) {
      if ("" === (t = window.clipboardData.getData("Text"))) throw new Error("Empty clipboard or could not read plain text from clipboard");
      return [2, t];
    });
  });
}

var _default = w;
exports.default = _default;
},{}],"index.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var clipboard_polyfill_1 = require("clipboard-polyfill");

window.addEventListener("load", function () {
  var status = document.querySelector(".status");
  document.querySelector("button").addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function () {
      var dt;
      return __generator(this, function (_a) {
        status.textContent = "…";
        dt = new clipboard_polyfill_1.DT();
        dt.setData("text/html", document.querySelector("textarea").value);
        clipboard_polyfill_1.write(dt).then(function () {
          status.textContent = "✅";
        }, function () {
          status.textContent = "❌";
        });
        return [2
        /*return*/
        ];
      });
    });
  });
});
},{"clipboard-polyfill":"node_modules/clipboard-polyfill/dist/clipboard-polyfill.esm.js"}],"../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64329" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/copy-text-as-html.77de5100.js.map