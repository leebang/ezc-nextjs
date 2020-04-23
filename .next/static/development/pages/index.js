(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FiNks%2FDocuments%2FWORK%2Fezcareer%2Fezc-nextjs%2Fpages%2Findex.tsx!./":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FiNks%2FDocuments%2FWORK%2Fezcareer%2Fezc-nextjs%2Fpages%2Findex.tsx ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/index.tsx */ "./pages/index.tsx", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.tsx */ "./pages/index.tsx")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.AmpStateContext = React.createContext({});

if (true) {
  exports.AmpStateContext.displayName = 'AmpStateContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

exports.isInAmpMode = isInAmpMode;

function useAmp() {
  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(react_1["default"].useContext(amp_context_1.AmpStateContext));
}

exports.useAmp = useAmp;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.HeadManagerContext = React.createContext(null);

if (true) {
  exports.HeadManagerContext.displayName = 'HeadManagerContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [react_1["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push(react_1["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

exports.defaultHead = defaultHead;

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === react_1["default"].Fragment) {
    return list.concat(react_1["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var unique = true;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        unique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          unique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              unique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if (categories.has(category)) {
              unique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return unique;
  };
}
/**
 *
 * @param headElements List of multiple <Head> instances
 */


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = react_1["default"].Children.toArray(headElement.props.children);
    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;
    return react_1["default"].cloneElement(c, {
      key: key
    });
  });
}

var Effect = side_effect_1["default"]();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */

function Head(_ref) {
  var children = _ref.children;
  return react_1["default"].createElement(amp_context_1.AmpStateContext.Consumer, null, function (ampState) {
    return react_1["default"].createElement(head_manager_context_1.HeadManagerContext.Consumer, null, function (updateHead) {
      return react_1["default"].createElement(Effect, {
        reduceComponentsToState: reduceComponents,
        handleStateChange: updateHead,
        inAmpMode: amp_1.isInAmpMode(ampState)
      }, children);
    });
  });
}

Head.rewind = Effect.rewind;
exports["default"] = Head;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

exports["default"] = function () {
  var mountedInstances = new Set();
  var state;

  function emitChange(component) {
    state = component.props.reduceComponentsToState(_toConsumableArray(mountedInstances), component.props);

    if (component.props.handleStateChange) {
      component.props.handleStateChange(state);
    }
  }

  return /*#__PURE__*/function (_react_1$Component) {
    _inherits(_class, _react_1$Component);

    var _super = _createSuper(_class);

    _createClass(_class, null, [{
      key: "rewind",
      // Used when server rendering
      value: function rewind() {
        var recordedState = state;
        state = undefined;
        mountedInstances.clear();
        return recordedState;
      }
    }]);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, props);

      if (isServer) {
        mountedInstances.add(_assertThisInitialized(_this));
        emitChange(_assertThisInitialized(_this));
      }

      return _this;
    }

    _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        mountedInstances.add(this);
        emitChange(this);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        emitChange(this);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        mountedInstances["delete"](this);
        emitChange(this);
      }
    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return _class;
  }(react_1.Component);
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/iNks/Documents/WORK/ezcareer/ezc-nextjs/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import EZC_LOGO_DARK from '//assets/images/logos/EZG_LOGO_DARK.png';
// import EZC_LOGO_LIGHT from "//assets/images/logos/EZC_LOGO_LIGHT.png";
// import landing1 from '//assets/images/landing/landing-1.jpg';

function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var tar = document.getElementById('__next');
    console.log(tar); // @ts-ignore
    // tar.parentNode.innerHTML = tar.children[0].innerHTML;
    // @ts-ignore

    console.log(tar.parentNode.innerHTML);
  });
  return __jsx("body", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "Easy Career | \u627E\u5DE5\u4F5C\uFF0C\u4E0A\u6613\u804C"), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/vendor.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/css/style.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/assets/js/jquery-3.4.1.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/assets/js/vendor.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/assets/js/app.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "/assets/js/shopify.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx("script", {
    type: "text/javascript",
    src: "//code.tidio.co/bvmdkbiydd0dddefe6od2ym6lrtkl9te.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "assets/images/favicon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=UA-140811008-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx("script", {
    async: true,
    src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  })), __jsx("header", {
    className: "header-sticky header-dark",
    style: {
      border: 'none !important'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-dark",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "navbar-brand",
    href: "index.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "navbar-logo navbar-logo-light logo-m",
    src: "assets/images/logos/logodark.svg",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx("img", {
    className: "navbar-logo navbar-logo-dark logo-m",
    src: "assets/images/logos/logolight.svg",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "burger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 213
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 238
    }
  }))), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "navbar-nav align-items-center mr-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "index.html",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "\u9996\u9875")), __jsx("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }
  }, __jsx("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "\u6838\u5FC3\u8BFE\u7A0B"), __jsx("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 18
    }
  }, __jsx("a", {
    className: "dropdown-item",
    href: "http://www.ezcareer.ca/cfa.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, "CFAI\u7EA7 \u767E\u65F6\u73EDPlus"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "\u7B7E\u7EA6\u4FDD\u8FC7 | \u7EBF\u4E0A\u7EBF\u4E0B | \u5317\u7F8E\u540C\u5F00")), __jsx("div", {
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }))), __jsx("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 14
    }
  }, __jsx("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, "\u62A5\u540D\u8BFE\u7A0B"), __jsx("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 18
    }
  }, __jsx("a", {
    className: "dropdown-item",
    href: "http://moodle.ez4edu.com",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 1
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, "\u5B66\u5458\u7CFB\u7EDF"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "\u5DF2\u7ECF\u62A5\u540D\u8BFE\u7A0B\u7684\u540C\u5B66")), __jsx("a", {
    className: "dropdown-item",
    href: "https://ezcareer.shop",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "\u5927\u591A\u4F26\u591A\u5730\u533A"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 19
    }
  }, "\u5305\u62EC\u6ED1\u94C1\u5362 | \u7EBF\u4E0B\u53CA\u7EBF\u4E0B\u8BFE\u7A0B")), __jsx("div", {
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx("a", {
    className: "dropdown-item",
    href: "https://ezc-alberta.shop",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, "\u963F\u5C14\u4F2F\u5854\u5730\u533A"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, "\u7EBF\u4E0B\u53CA\u7EBF\u4E0B\u8BFE\u7A0B")))), __jsx("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "vip.html",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 16
    }
  }, "1\u5BF91\u6C42\u804C\u670D\u52A1")), __jsx("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 16
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "http://jobs.ezcareer.ca/",
    role: "button",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 16
    }
  }, "\u5C97\u4F4D\u76F4\u901A\u8F66")), __jsx("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 3
    }
  }, __jsx("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "navbarDropdown",
    role: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "\u8054\u7CFB\u6211\u4EEC"), __jsx("div", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 18
    }
  }, __jsx("a", {
    className: "dropdown-item",
    href: "career.html",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "\u52A0\u5165\u6211\u4EEC")), __jsx("div", {
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }), __jsx("a", {
    className: "dropdown-item",
    href: "contacts.html",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }, "\u8054\u7CFB\u6211\u4EEC"))))), __jsx("ul", {
    className: "navbar-nav align-items-center mr-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "http://www.easygroup.ca",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "Powered by Easy Group"))))))), __jsx("section", {
    className: "p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "gallery",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "gallery-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "swiper-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "swiper-slide vh-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "image image-overlay",
    style: {
      backgroundImage: 'url(assets/images/landing/landing-1.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "caption text-white",
    "data-swiper-parallax": "-100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-between vh-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-8 align-self-center text-white text-shadow",
    "data-swiper-parallax": "-100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "eyebrow text-white mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, "Career Consulting Services"), __jsx("h1", {
    className: "display-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, "\u4E00\u7AD9\u5F0F\u7559\u5B66\u751F\u804C\u4E1A\u670D\u52A1"), __jsx("a", {
    href: "contacts.html",
    className: "btn btn-white btn-rounded px-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, "\u8054\u7CFB\u6211\u4EEC")), __jsx("div", {
    className: "col-lg-4 align-self-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row gutter-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-6 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "equal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 56
    }
  }, __jsx("div", {
    className: "component-example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 31
    }
  }, __jsx("a", {
    className: "popup-youtube",
    href: "https://www.youtube.com/watch?v=DZB46VAIfzc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 16
    }
  }, "\u89C2\u770B\u54C1\u724C\u89C6\u9891", __jsx("i", {
    className: "icon-play2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 102
    }
  }))))))), __jsx("div", {
    className: "col-6 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "equal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 31
    }
  }, "\u59CB\u4E8E2017")), __jsx("div", {
    className: "equal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 31
    }
  }, "\u5317\u7F8E\u6C42\u804C\u98CE\u5411\u6807"))))), __jsx("div", {
    className: "col-6 text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "bordered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 27
    }
  }, __jsx("div", {
    className: "equal-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 29
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 31
    }
  }, "200+ \u7CBE\u82F1\u5BFC\u5E08")), __jsx("div", {
    className: "equal-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 31
    }
  }, "\u4E3A\u7559\u5B66\u751F\u7684\u5C31\u4E1A\u4FDD\u9A7E\u62A4\u822A"))))))))))), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "image image-overlay",
    style: {
      backgroundImage: 'url(assets/images/landing/jobboard-2.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "caption text-white",
    "data-swiper-parallax": "-100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center vh-90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-md-10  col-lg-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 23
    }
  }, "Jobs.ezcareer.ca"), __jsx("h1", {
    className: "display-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 23
    }
  }, "\u9002\u5408\u7559\u5B66\u751F\u7684Job Board"), __jsx("a", {
    href: "http://jobs.ezcareer.ca",
    className: "btn btn-white btn-rounded px-5",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, "\u8FDB\u5165\u5B98\u7F51")))))), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "image image-overlay",
    style: {
      backgroundImage: 'url(assets/images/landing/landing-2.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "caption text-white",
    "data-swiper-parallax": "-100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center vh-90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-md-10 col-lg-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 23
    }
  }, "VIP Program"), __jsx("h1", {
    className: "display-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 23
    }
  }, "\u79C1\u4EBA\u8BA2\u5236\u6C42\u804C\u7279\u8BAD\u8BA1\u5212"), __jsx("a", {
    href: "http://www.ezcareer.ca/vip.html",
    className: "btn btn-white btn-rounded px-5",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 23
    }
  }, "\u4E86\u89E3\u66F4\u591A")))))), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "image image-overlay",
    style: {
      backgroundImage: 'url(assets/images/landing/learning-1-min.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "caption text-white",
    "data-swiper-parallax": "-100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center align-items-center vh-90",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "col-md-10 col-lg-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 23
    }
  }, "Tutoring Services"), __jsx("h1", {
    className: "display-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 23
    }
  }, "\u8BA9\u4F60\u7684GPA\u8F7B\u677E4.0"), __jsx("a", {
    href: "https://ez4edu.com/",
    className: "btn btn-white btn-rounded px-5",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, "\u8FDB\u5165\u5B98\u7F51")))))))), __jsx("div", {
    className: "gallery-thumbs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "swiper-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 15
    }
  }, "\u804C\u4E1A\u54A8\u8BE2")), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 15
    }
  }, "\u5C97\u4F4D\u76F4\u901A\u8F66")), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }, "VIP Program")), __jsx("div", {
    className: "swiper-slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 13
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, "\u8BFE\u7A0B\u8F85\u5BFC")))))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, "Easy career, better ", __jsx("span", {
    style: {
      color: '#33aacc'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 41
    }
  }, "job."))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 17
    }
  }, "EASY CAREER\u662F\u4E00\u5BB6\u5728\u7EBF\u804C\u4E1A\u6559\u80B2\u673A\u6784\uFF0C\u516C\u53F8\u603B\u90E8\u4F4D\u4E8E\u591A\u4F26\u591A\u5E02\u5E02\u4E2D\u5FC3\uFF0C\u662F\u52A0\u62FF\u5927\u7B2C\u4E00\u6559\u80B2\u54C1\u724C Easy Group(\u6613\u7EF4\u6559\u80B2\u96C6\u56E2)\u65D7\u4E0B\u7684\u5B50\u516C\u53F8\u4E4B\u4E00\uFF0C\u81F4\u529B\u4E8E\u5E2E\u52A9\u5168\u7403\u5927\u5B66\u751F\u548C\u5728\u804C\u7CBE\u82F1\uFF0C\u63D0\u4F9B\u4E00\u7AD9\u5F0F\u7684\u5C31\u4E1A\u89E3\u51B3\u65B9\u6848\u3002\u901A\u8FC7\u72EC\u7ACB\u81EA\u4E3B\u7814\u53D1\u7684\u804C\u4E1A\u6280\u80FD\u57F9\u8BAD\u4EA7\u54C1\u548C\u4E00\u5BF9\u4E00\u4F53\u7CFB\u5316\u54A8\u8BE2\u670D\u52A1\uFF0C\u5168\u65B9\u4F4D\u63D0\u5347\u5B66\u5458\u80FD\u529B\u4E0E\u80CC\u666F\u3002\u5728\u91D1\u878D\u3001\u54A8\u8BE2\u3001\u79D1\u6280\u3001\u5FEB\u6D88\u3001\u6570\u636E\u3001\u5E02\u573A\u7B49\u4F17\u591A\u70ED\u95E8\u884C\u4E1A\uFF0C\u52A9\u529B\u5168\u7403\u5927\u5B66\u751F\u5165\u9A7B\u5168\u7403\u524D\u6CBF\u4F01\u4E1A\u3002"))), __jsx("div", {
    className: "row gutter-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-sm-6 col-lg-4",
    "data-aos": "fade-up",
    "data-aos-anchor-placement": "bottom-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "bordered scaling p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-course text-ezc fs-40 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 19
    }
  }), __jsx("h6", {
    className: "mb-0 text-ezc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, "Learn Essential Skills"), __jsx("h4", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, "\u804C\u4E1A\u5FC5\u5907\u6280\u80FD"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 19
    }
  }, "\u7ED3\u5408\u884C\u4E1A\u5B9E\u6218\u9879\u76EE\uFF0C\u5728\u8BFE\u7A0B\u4E2D\u719F\u7EC3\u638C\u63E1\u4E0D\u540C\u884C\u4E1A\u5DE5\u4F5C\u4E2D\u6240\u9700\u8981\u7684\u5404\u79CD\u6280\u80FD\u3002\u7075\u6D3B\u7684\u7EBF\u4E0A\u52A0\u7EBF\u4E0B\u8BFE\u7A0B\u6A21\u5F0F\u8BA9\u7528\u6237\u5145\u5206\u5229\u7528\u81EA\u5DF1\u7684\u65F6\u95F4\u53BB\u5B66\u4E60\u3002"))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    "data-aos": "fade-up",
    "data-aos-anchor-placement": "bottom-bottom",
    "data-aos-delay": 150,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "bordered scaling p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-vip text-ezc fs-40 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 19
    }
  }), __jsx("h6", {
    className: "mb-0 text-ezc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, "100% Tailored Training"), __jsx("h4", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, "\u6C42\u804C\u6838\u5FC3\u80FD\u529B"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 19
    }
  }, "1\u5BF91\u6C42\u804C\u7279\u8BAD\u8BA1\u5212\uFF0C\u4EE5\u4E0B\u7B80\u79F0VIP Program\uFF0C\u65E8\u5728\u4E3A\u5B66\u751F\u63D0\u4F9B\u5B9A\u5236\u5316\u7684\uFF0C\u7CFB\u7EDF\u6027\u5730\u4E00\u7AD9\u5F0F\u6C42\u804C\u6559\u80B2\u54A8\u8BE2\u670D\u52A1,\u9488\u5BF9\u6027\u5730\u51C6\u5907\u5373\u5C06\u5F00\u59CB\u7684\u804C\u573A\u751F\u6DAF\u3002"))), __jsx("div", {
    className: "col-sm-6 col-lg-4",
    "data-aos": "fade-up",
    "data-aos-anchor-placement": "bottom-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "bordered scaling p-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon-offer text-ezc fs-40 mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 19
    }
  }), __jsx("h6", {
    className: "mb-0 text-ezc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }, "Guarantee Offer Program"), __jsx("h4", {
    className: "mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }, "\u4FDDOffer\u5168\u804C/\u5B9E\u4E60\u9879\u76EE"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }, "\u52A9\u7533\u5317\u7F8E\u77E5\u540D\u5927\u516C\u53F8\uFF0C\u521B\u6295\u516C\u53F8\uFF0C\u4E16\u754C\u4E94\u767E\u5F3A\u7B49\u3002\u6839\u636E\u5B66\u751F\u80FD\u529B\u7279\u70B9\u53CA\u4E2A\u4EBA\u9700\u6C42\uFF0C\u5E2E\u52A9\u5176\u5B8C\u6210\u5404\u7C7B\u578B\u804C\u4F4D\u7533\u8BF7\u3002")))))), __jsx("section", {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row align-items-center justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "h1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, "VIP Program ", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 48
    }
  }), __jsx("b", {
    style: {
      color: '#33aacc'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 54
    }
  }, "\u5B9A\u5236"), "\u4E8E\u4F60\u7684", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 93
    }
  }), "\u5C5E\u6C42\u804C\u8BA1\u5212"), __jsx("ul", {
    className: "list-group list-group-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-check-circle2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, "\u884C\u4E1A\u8D8B\u52BF\u524D\u77BB Industrial Insights")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-briefcase2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 21
    }
  }, "\u6C42\u804C\u89C4\u5212 Consultation")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-book2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "\u5C65\u5386\u7CBE\u4FEE Profile Improvement")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-check-circle2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 21
    }
  }, "\u9762\u8BD5\u76F4\u901A\u8F66 Interview Package")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-check-circle2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 21
    }
  }, "\u6C42\u804C\u793E\u4EA4 Networking")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-check-circle2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 21
    }
  }, "\u5728\u7EBF\u8BFE\u5802 Hard Skills Training")), __jsx("li", {
    className: "list-group-item d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon-check-circle2 fs-24 text-orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 21
    }
  }, "\u540D\u4F01\u76F4\u63A8 Job Placement Opportunity"))), __jsx("a", {
    href: "contacts.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "button",
    className: "btn btn-with-ico btn-orange text-white mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 19
    }
  }, "\u7ACB\u523B\u54A8\u8BE2 ", __jsx("i", {
    className: "icon-arrow-right2 fs-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 102
    }
  })))), __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "masonry gallery row gutter-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "col-6",
    "data-aos": "zoom-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 19
    }
  }, __jsx("figure", {
    className: "photo equal equal-double",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "vip.jpg",
    style: {
      backgroundImage: 'url(/assets/images/service/vip.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "photo-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 27
    }
  }, "VIP Mentorship Program"))))), __jsx("li", {
    className: "col-6",
    "data-aos": "zoom-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, __jsx("figure", {
    className: "photo equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "/assets/images/service/resume.jpg",
    style: {
      backgroundImage: 'url(/assets/images/service/resume.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "photo-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 27
    }
  }, "Profile Improvement Package"))))), __jsx("li", {
    className: "col-6",
    "data-aos": "zoom-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 19
    }
  }, __jsx("figure", {
    className: "photo equal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "/assets/images/service/interview.jpg",
    style: {
      backgroundImage: 'url(/assets/images/service/interview.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "photo-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 27
    }
  }, "Interview Package")))))))))), __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "eyebrow mb-1 text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 17
    }
  }, "Essential Courses"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 17
    }
  }, "\u70ED\u95E8\u6280\u80FD\u8BFE\u7A0B"))), __jsx("div", {
    className: "row justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "product-component-c3adc591c15",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 15
    }
  }), __jsx("div", {
    id: "product-component-2dd6bfb8512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 15
    }
  }), __jsx("div", {
    id: "product-component-7c9f281128d",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 15
    }
  }), __jsx("div", {
    id: "product-component-f73cb377666",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 15
    }
  })))), __jsx("section", {
    className: "bg-dark-ezc text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 17
    }
  }, "\u8FD9\u91CC\u662F", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 24
    }
  }), "\u4F60\u8DDD\u79BB", __jsx("span", {
    style: {
      color: '#33aacc'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 33
    }
  }, "\u9AD8\u85AAOffer"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 80
    }
  }), "\u6700\u8FD1\u7684\u5730\u65B9"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 17
    }
  }, "EASY CAREER\u521B\u7ACB\u4E8E2017\u5E74\u521D\uFF0C\u81F4\u529B\u4E8E\u6574\u5408\u5168\u7403\u5404\u884C\u4E1A\u7684\u804C\u573A\u7CBE\u82F1\uFF0C\u4E3A\u5927\u5B66\u751F\u63D0\u4F9B\u4F53\u7CFB\u5316\uFF0C\u5B9A\u5236\u5316\u7684\u804C\u4E1A\u6559\u80B2\uFF0C\u901A\u8FC71\u5BF91\u3001\u591A\u5BF91\u548C\u73ED\u8BFE\u5B9E\u65F6\u5728\u7EBF\u89C6\u9891/\u76F4\u64AD\u5B66\u4E60\u5E73\u53F0\uFF0C\u5C06\u5168\u7403\u5927\u5B66\u751F\u548C\u804C\u573A\u7CBE\u82F1\u8FDB\u884C\u5BF9\u63A5\u3002 \u6211\u4EEC\u4ECE\u5E02\u573A\u7684\u89D2\u5EA6\u548C\u5BA2\u6237\u7684\u9700\u6C42\u51FA\u53D1\uFF0C\u4E3A\u5B66\u5458\u5EFA\u7ACB\u5B8C\u5584\u7684\u804C\u4E1A\u89C4\u5212\u65B9\u6848\u53CA\u4F53\u7CFB\u5316\u7684\u8BFE\u7A0B\u89C4\u5212\uFF0C\u4EE5\u63D0\u5347\u5B66\u5458\u804C\u573A\u6838\u5FC3\u7ADE\u4E89\u529B\u4E3A\u4E2D\u5FC3\uFF0C\u5F00\u5C55\u9488\u5BF9\u6027\u7684\u8F85\u5BFC\u4E0E\u57F9\u8BAD\uFF0C\u5E2E\u52A9\u5B66\u5458\u987A\u5229\u8FDB\u5165\u76EE\u6807\u884C\u4E1A\u4E0E\u516C\u53F8\u5C97\u4F4D\u3002")), __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "fs-20 progress-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 21
    }
  }, "\u7B7E\u7EA6\u7CBE\u82F1\u5BFC\u5E08\u6DD8\u6C70\u7387"), __jsx("div", {
    className: "progress-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: '70%'
    },
    "aria-valuenow": 70,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 154
    }
  }, "70%"))))), __jsx("div", {
    className: "col-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "fs-20 progress-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 21
    }
  }, "\u56DB\u4E2A\u6708\u5185\u83B7\u5F97Offer\u6210\u529F\u7387"), __jsx("div", {
    className: "progress-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: '87.3%'
    },
    "aria-valuenow": 87,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 156
    }
  }, "87.3%"))))), __jsx("div", {
    className: "col-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 19
    }
  }, __jsx("h4", {
    className: "fs-20 progress-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 21
    }
  }, "\u7528\u6237\u6EE1\u610F\u5EA6"), __jsx("div", {
    className: "progress-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: '100%'
    },
    "aria-valuenow": 100,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 156
    }
  }, "100%")))))))))), __jsx("section", {
    className: "bg-white",
    "data-top-top": "transform: translateY(0px);",
    "data-top-bottom": "transform: translateY(70px);",
    style: {
      background: 'url(/assets/images/map-3.png) no-repeat center',
      backgroundSize: 'contain'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "eyebrow mb-1 text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 17
    }
  }, "OUR MENTORS"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 17
    }
  }, "\u6211\u4EEC\u7684\u5BFC\u5E08\u6765\u81EA\u4E8E"))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "row align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row gutter-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "bordered rising p-2 p-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 23
    }
  }, "\u4E2D\u56FD"), __jsx("span", {
    className: "d-block text-primary mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 23
    }
  }, "China"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 23
    }
  }, "\u9999\u6E2F\u82B1\u65D7\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 23
    }
  }, "Citibank"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 23
    }
  }, "\u9999\u6E2F\u5DF4\u514B\u83B1\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 23
    }
  }, "Barclays"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 23
    }
  }, "\u666E\u534E\u6C38\u9053\u4E2D\u56FD"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 23
    }
  }, "PwC"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 23
    }
  }, "\u5B89\u6C38\u4E2D\u56FD"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 23
    }
  }, "Ernst & Young"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 23
    }
  }, "\u6BD5\u9A6C\u5A01\u4E2D\u56FD"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 23
    }
  }, "KPMG"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484,
      columnNumber: 23
    }
  }, "\u817E\u8BAF"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 23
    }
  }, "Tencent"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 23
    }
  }, "BBDO\u73AF\u7403"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 23
    }
  }, "BBDO"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 23
    }
  }, "\u4EAC\u4E1C"), __jsx("span", {
    className: "d-block text-grey mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 23
    }
  }, "JD"))), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "bordered rising p-2 p-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 23
    }
  }, "\u5317\u7F8E"), __jsx("span", {
    className: "d-block text-primary mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 23
    }
  }, "North America"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 23
    }
  }, "CPPIB"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 23
    }
  }, "\u5168\u7403\u5341\u5927\u516C\u5171\u9000\u4F11\u57FA\u91D1"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 23
    }
  }, "OTPP"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 23
    }
  }, "\u52A0\u62FF\u5927\u6700\u5927\u7684\u5355\u4E00\u578B\u4E13\u4E1A\u5316\u9000\u4F11\u57FA\u91D1"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 23
    }
  }, "\u666E\u534E\u6C38\u9053\u52A0\u62FF\u5927"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 23
    }
  }, "PwC"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 23
    }
  }, "\u5FB7\u52E4\u52A0\u62FF\u5927"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 23
    }
  }, "Deloitte"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 23
    }
  }, "\u6BD5\u9A6C\u5A01\u52A0\u62FF\u5927"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 23
    }
  }, "KPMG"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 23
    }
  }, "\u6EE1\u5730\u53EF\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 23
    }
  }, "BMO"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 23
    }
  }, "\u52A0\u62FF\u5927\u7687\u5BB6\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 23
    }
  }, "RBC"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 23
    }
  }, "\u52A0\u62FF\u5927\u5E1D\u56FD\u5546\u4E1A\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 23
    }
  }, "CIBC"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 23
    }
  }, "\u9053\u660E\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 23
    }
  }, "TD"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 23
    }
  }, "\u4E30\u4E1A\u94F6\u884C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 23
    }
  }, "Scotiabank"))), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "bordered rising p-2 p-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 23
    }
  }, "\u5317\u7F8E"), __jsx("span", {
    className: "d-block text-primary mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 23
    }
  }, "North America"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 23
    }
  }, "\u8C37\u6B4C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 23
    }
  }, "Google"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 23
    }
  }, "\u5FAE\u8F6F"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 23
    }
  }, "Microsoft"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 23
    }
  }, "\u7B2C\u4E00\u8D44\u672C"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 23
    }
  }, "Capital One"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 23
    }
  }, "\u6C38\u660E\u91D1\u878D"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 23
    }
  }, "Sunlife Financial"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 23
    }
  }, "\u4F20\u7ACB\u5A92\u4F53"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 23
    }
  }, "Mindshare"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 23
    }
  }, "SAP"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 23
    }
  }, "Software Solutions"), __jsx("h6", {
    className: "text-dark mb-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 23
    }
  }, "Rogers"), __jsx("span", {
    className: "d-block text-grey mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 23
    }
  }, "\u52A0\u62FF\u5927\u6700\u5927\u79FB\u52A8\u8FD0\u8425\u5546")))))))), __jsx("section", {
    className: "section-decorated-bottom pt-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "decorated-bottom text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "eyebrow mb-1 text-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 17
    }
  }, "POWERED BY EASYGROUP"), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 17
    }
  }, "Easy Group \u6613\u7EF4\u96C6\u56E2"))), __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-8 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 15
    }
  }, __jsx("img", {
    className: "logo-m",
    src: "/assets/images/logos/EZG_LOGO_DARK.png",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 17
    }
  }, "Easy Career\u96B6\u5C5E\u4E8EEasy Group\u96C6\u56E2\u3002\u96C6\u56E2\u65D7\u4E0B\u62E5\u6709Easy 4.0 (\u6613\u9014\u6559\u80B2)\uFF0C\u5B5C\u5FAAEdu, Easy Career (\u6613\u804C)\uFF0CHiOffer\uFF0CWeCare\u5FAE\u81F4\u7B49\u9644\u5C5E\u670D\u52A1\u57F9\u8BAD\u4F53\u7CFB\u3002\u96C6\u56E2\u603B\u90E8\u4F4D\u4E8E\u4E2D\u56FD\u6DF1\u5733\uFF0C\u5728\u52A0\u62FF\u5927\u3001\u7F8E\u56FD\u7B49\u5730\u533A\u8BBE\u6709\u6D77\u5916\u5206\u90E8\u3002\u4EE5\u6559\u80B2\u4F5C\u4E3A\u51FA\u53D1\u70B9\uFF0C \u201C\u8D23\u4EFB\u5FC3\u81F3\u4E0A\u201D \u4F5C\u4E3A\u6838\u5FC3\u7406\u5FF5\uFF0C\u96C6\u56E2\u4E1A\u52A1\u6DB5\u76D6\u7559\u5B66\u89C4\u5212\uFF0C\u6D77\u5916\u751F\u6D3B\u8F85\u52A9\uFF0C\u9AD8\u7B49\u6559\u80B2\u8F85\u5BFC\uFF0C\u6C42\u804C\u54A8\u8BE2\uFF0C\u7814\u7A76\u751F\u7533\u8BF7\uFF0C\u521B\u4E1A\u5B75\u5316\u7B49\u9886\u57DF\u3002\u5207\u5B9E\u6253\u9020\u7559\u5B66\u4EA7\u4E1A\u95ED\u73AF\uFF0C\u4E3A\u60F3\u8981\u7559\u5B66\uFF0C\u5DF2\u7ECF\u7559\u5B66\uFF0C\u5B8C\u6210\u7559\u5B66\u7684\u5B66\u5B50\u4EE5\u53CA\u4ED6\u4EEC\u7684\u5BB6\u957F\u521B\u9020\u771F\u6B63\u6709\u4EF7\u503C\u7684\u670D\u52A1\u3002\u3002"))), __jsx("div", {
    className: "row",
    "data-aos": "fade-left",
    "data-aos-delay": 300,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "owl-carousel visible",
    "data-items": "[3,2,1]",
    "data-margin": 20,
    "data-dots": "true",
    "data-loop": "true",
    "data-center": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 17
    }
  }, __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/office/1.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 578,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 25
    }
  }, "2018"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 25
    }
  }, "Easy Career")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_4.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 25
    }
  }, "2018"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 25
    }
  }, "\u8BAE\u5458\u53C2\u4F1A")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_3.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 25
    }
  }, "2018"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 25
    }
  }, "\u6559\u5B66\u7814\u8BA8\u4F1A")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_2.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 25
    }
  }, "2018"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 25
    }
  }, "\u96C6\u56E2\u5E74\u4F1A")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_5.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 25
    }
  }, "2017"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 25
    }
  }, "\u5317\u4EAC\u89C1\u9762\u4F1A")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_6.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 625,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 25
    }
  }, "2018"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 25
    }
  }, "\u5E74\u4F1A\u8C22\u5E55")))), __jsx("article", {
    className: "tile tile-long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/event_7.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 21
    }
  }), __jsx("a", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "eyebrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635,
      columnNumber: 25
    }
  }, "2014"), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 25
    }
  }, "\u767E\u4EBAReview"))))))))), __jsx("section", {
    id: "news",
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 648,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 650,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651,
      columnNumber: 17
    }
  }, "\u6700\u8FD1\u4E8B\u4EF6"))), __jsx("div", {
    className: "row gutter-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 15
    }
  }, __jsx("article", {
    className: "tile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/news_2.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 23
    }
  }, "News"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 23
    }
  }, "\u52A0\u62FF\u5927\u5546\u8D38\u90E8\u957F\u5BB4\u4F1A")), __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 664,
      columnNumber: 23
    }
  }, "Easy Group\u53D7\u9080\u53C2\u52A0\u52A0\u62FF\u5927\u5546\u8D38\u90E8\u957F\u5348\u5BB4"))))), __jsx("div", {
    className: "col-md-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 15
    }
  }, __jsx("article", {
    className: "tile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/news_3.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674,
      columnNumber: 23
    }
  }, "News"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 23
    }
  }, "2018\u4E2D\u56FD\u798F\u5E03\u65AF30 Under 30")), __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 677,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678,
      columnNumber: 23
    }
  }, "Easy Group\u521B\u59CB\u4EBAJacky Zhang\u4E0A\u699C2018\u4E2D\u56FD\u798F\u5E03\u65AF30\u4F4D30\u5C81\u4EE5\u4E0B\u7CBE\u82F1\u699C"))))), __jsx("div", {
    className: "col-md-6 col-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 15
    }
  }, __jsx("article", {
    className: "tile",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "tile-image",
    style: {
      backgroundImage: 'url(/assets/images/events/news_1.jpg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 685,
      columnNumber: 19
    }
  }), __jsx("div", {
    className: "tile-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "tile-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "eyebrow mb-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 23
    }
  }, "News"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 689,
      columnNumber: 23
    }
  }, "\u83B7\u5F97Pre-A\u8F6E1000\u4E07\u878D\u8D44")), __jsx("div", {
    className: "tile-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 692,
      columnNumber: 23
    }
  }, "\u606D\u559CEasy Group\u83B7\u5F97Pre-A\u8F6E1000\u4E07\u6218\u7565\u6295\u8D44")))))))), __jsx("footer", {
    className: "bg-dark text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "separator-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "container py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 704,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row justify-content-between align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-5 text-center text-md-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 707,
      columnNumber: 19
    }
  }, __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "contacts.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 23
    }
  }, "\u8054\u7CFB\u6211\u4EEC")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "career.html",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 23
    }
  }, "\u52A0\u5165\u6211\u4EEC")), __jsx("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "nav-link",
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 23
    }
  }, "Legal Information")))), __jsx("div", {
    className: "col-md-2 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 719,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "logo-m",
    src: "/assets/images/logos/EZC_LOGO_DARK.png",
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 720,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "col-md-5 text-center text-md-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 722,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "socials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 723,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.youtube.com/channel/UCsXdZooAGMJpd5xycwSPGGQ",
    target: "_blank",
    className: "icon-youtube fs-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 724,
      columnNumber: 25
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/company/easy-career/",
    target: "_blank",
    className: "icon-linkedin fs-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 725,
      columnNumber: 25
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/ezcareer/",
    className: "icon-instagram fs-20",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 726,
      columnNumber: 25
    }
  })), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "contacts.html",
    className: "icon-wechat fs-20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 727,
      columnNumber: 25
    }
  })))))))));
}

; // Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2FiNks%2FDocuments%2FWORK%2Fezcareer%2Fezc-nextjs%2Fpages%2Findex.tsx ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2FiNks%2FDocuments%2FWORK%2Fezcareer%2Fezc-nextjs%2Fpages%2Findex.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2FiNks%2FDocuments%2FWORK%2Fezcareer%2Fezc-nextjs%2Fpages%2Findex.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map