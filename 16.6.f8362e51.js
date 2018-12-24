// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"versions/16.6/Mounting.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mounting = function Mounting(_ref) {
  var advanced = _ref.advanced;
  return advanced ? _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Mounting",
    col: 1
  }, _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "constructor",
    docname: "constructor",
    type: "render",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "getDerivedStateFromProps",
    docname: "static-getderivedstatefromprops",
    type: "render",
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    row: 4,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    row: 6,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, {
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidMount",
    docname: "componentdidmount",
    type: "commit",
    row: 7
  })) : _react.default.createElement(_Section.default, {
    name: "Mounting",
    col: 1
  }, _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "constructor",
    docname: "constructor",
    type: "render",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    row: 3,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, {
    solid: true
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidMount",
    docname: "componentdidmount",
    type: "commit",
    row: 4
  }));
};

Mounting.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Mounting;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx"}],"versions/16.6/Updating.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Subsection = _interopRequireDefault(require("../../diagramElements/Subsection"));

var _Initiator = _interopRequireDefault(require("../../diagramElements/Initiator"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Updating = function Updating(_ref) {
  var advanced = _ref.advanced;
  return advanced ? _react.default.createElement(_Section.default, {
    advanced: true,
    name: "Updating",
    col: 2,
    colspan: 3
  }, _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "New props",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "getDerivedStateFromProps",
    docname: "static-getderivedstatefromprops",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "shouldComponentUpdate",
    docname: "shouldcomponentupdate",
    type: "render",
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Arrow.default, {
    withAlt: true,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 4,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    name: "getSnapshotBeforeUpdate",
    docname: "getsnapshotbeforeupdate",
    type: "pre-commit",
    row: 5,
    colspan: 3
  }), _react.default.createElement(_Arrow.default, {
    solid: true,
    col: 3
  }), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 6,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, {
    solid: true,
    col: 3
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    colspan: 3,
    row: 7
  })), _react.default.createElement(_Subsection.default, {
    col: 3
  }, _react.default.createElement(_Initiator.default, {
    name: "setState()",
    docname: "setstate",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "getDerivedStateFromProps",
    docname: "static-getderivedstatefromprops",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "shouldComponentUpdate",
    docname: "shouldcomponentupdate",
    type: "render",
    col: 2,
    row: 3,
    colspan: 2
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 4,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "getSnapshotBeforeUpdate",
    docname: "getsnapshotbeforeupdate",
    type: "pre-commit",
    col: 2,
    row: 5,
    colspan: 3
  }), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 6,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    col: 2,
    colspan: 3,
    row: 7
  })), _react.default.createElement(_Subsection.default, {
    col: 4
  }, _react.default.createElement(_Initiator.default, {
    name: "forceUpdate()",
    docname: "forceupdate",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    name: "getDerivedStateFromProps",
    docname: "static-getderivedstatefromprops",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 4,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    name: "getSnapshotBeforeUpdate",
    docname: "getsnapshotbeforeupdate",
    type: "pre-commit",
    col: 2,
    row: 5,
    colspan: 3
  }), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 6,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    col: 2,
    colspan: 3,
    row: 7
  }))) : _react.default.createElement(_Section.default, {
    name: "Updating",
    col: 2,
    colspan: 3
  }, _react.default.createElement(_Subsection.default, {
    col: 2
  }, _react.default.createElement(_Initiator.default, {
    secondary: true,
    name: "New props",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 3,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, {
    solid: true,
    col: 3
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    colspan: 3,
    row: 4
  })), _react.default.createElement(_Subsection.default, {
    col: 3
  }, _react.default.createElement(_Initiator.default, {
    name: "setState()",
    docname: "setstate",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 3,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    col: 2,
    colspan: 3,
    row: 4
  })), _react.default.createElement(_Subsection.default, {
    col: 4
  }, _react.default.createElement(_Initiator.default, {
    name: "forceUpdate()",
    docname: "forceupdate",
    row: 1
  }), _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "render",
    docname: "render",
    type: "render",
    col: 1,
    row: 2,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    secondary: true,
    name: "React updates DOM and refs",
    type: "pre-commit",
    col: 1,
    row: 3,
    colspan: 4
  }), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentDidUpdate",
    docname: "componentdidupdate",
    type: "commit",
    col: 2,
    colspan: 3,
    row: 4
  })));
};

Updating.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Updating;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Subsection":"diagramElements/Subsection.jsx","../../diagramElements/Initiator":"diagramElements/Initiator.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx"}],"versions/16.6/Unmounting.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../../diagramElements/Section"));

var _Method = _interopRequireDefault(require("../../diagramElements/Method"));

var _Arrow = _interopRequireDefault(require("../../diagramElements/Arrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Unmounting = function Unmounting(_ref) {
  var advanced = _ref.advanced;
  return _react.default.createElement(_Section.default, {
    advanced: advanced,
    name: "Unmounting",
    col: 5
  }, _react.default.createElement(_Arrow.default, null), _react.default.createElement(_Method.default, {
    main: true,
    name: "componentWillUnmount",
    docname: "componentwillunmount",
    type: "commit",
    row: advanced ? 7 : 4
  }));
};

Unmounting.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = Unmounting;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","../../diagramElements/Section":"diagramElements/Section.jsx","../../diagramElements/Method":"diagramElements/Method.jsx","../../diagramElements/Arrow":"diagramElements/Arrow.jsx"}],"versions/16.6/ErrorHandling.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-no-target-blank */
var ErrorHandling = function ErrorHandling(_ref) {
  var advanced = _ref.advanced;
  var gridColumn = '2 /span 5';
  var row = advanced ? 25 : 15;
  var gridRow = "".concat(row, " / span 9");
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
    className: (0, _mergeClassNames.default)('Section Section__error'),
    style: {
      gridColumn: gridColumn,
      gridRow: gridRow
    }
  }, _react.default.createElement("h3", {
    className: "Section__title"
  }, "ErrorHandling"), _react.default.createElement("div", {
    className: "Method Method--hasLink pre-commit"
  }, _react.default.createElement("a", {
    href: "https://reactjs.org/docs/react-component.html#static-getderivedstatefromerror",
    target: "_blank"
  }, "static getDerivedStateFromError"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("a", {
    href: "https://5bcf5863c6aed64970d6de5b--reactjs.netlify.com/docs/react-component.html#componentdidcatch",
    target: "_blank"
  }, "componentDidCatch"))));
};

ErrorHandling.propTypes = {
  advanced: _propTypes.default.bool
};
var _default = ErrorHandling;
exports.default = _default;
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js","merge-class-names":"../node_modules/merge-class-names/build/entry.js"}],"versions/16.6/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Mounting", {
  enumerable: true,
  get: function () {
    return _Mounting.default;
  }
});
Object.defineProperty(exports, "Updating", {
  enumerable: true,
  get: function () {
    return _Updating.default;
  }
});
Object.defineProperty(exports, "Unmounting", {
  enumerable: true,
  get: function () {
    return _Unmounting.default;
  }
});
Object.defineProperty(exports, "ErrorHandling", {
  enumerable: true,
  get: function () {
    return _ErrorHandling.default;
  }
});

var _Mounting = _interopRequireDefault(require("./Mounting"));

var _Updating = _interopRequireDefault(require("./Updating"));

var _Unmounting = _interopRequireDefault(require("./Unmounting"));

var _ErrorHandling = _interopRequireDefault(require("./ErrorHandling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Mounting":"versions/16.6/Mounting.jsx","./Updating":"versions/16.6/Updating.jsx","./Unmounting":"versions/16.6/Unmounting.jsx","./ErrorHandling":"versions/16.6/ErrorHandling.jsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58253" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/16.6.f8362e51.map