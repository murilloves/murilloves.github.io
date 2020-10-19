webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/landing/appScreen.js":
/*!*********************************************!*\
  !*** ./src/components/landing/appScreen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api_professionalsApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api/professionalsApi */ "./src/lib/api/professionalsApi.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\components\\landing\\appScreen.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Professionals = function Professionals() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      professionals = _useState[0],
      setProfessionals = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getProfessionals() {
      return _getProfessionals.apply(this, arguments);
    } // getProfessionals()


    function _getProfessionals() {
      _getProfessionals = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _lib_api_professionalsApi__WEBPACK_IMPORTED_MODULE_3__["default"]().fetchAll();

              case 2:
                response = _context.sent;
                setProfessionals(response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getProfessionals.apply(this, arguments);
    }
  }, []);
  return __jsx("section", {
    className: "flex py-24 px-16 mx-auto mt-16 mb-16 bg-purple-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full md:w-1/2 p-6 md:p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      backgroundImage: 'url("https://murilloves.github.io/clubien/static/media/clubien-screenshot-1.928b01d8.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '96%',
      borderRadius: '65px',
      backgroundPosition: '5px -10px',
      maxWidth: 'fit-content',
      margin: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "https://murilloves.github.io/clubien/static/media/phoneFrameWhite.d17fdc81.svg",
    "class": "TwoColWithButton__Image-ubbpq0-5 cLEeYZ",
    style: {
      boxShadow: 'rgb(57 37 113) -30px 30px 50px',
      borderRadius: '55px',
      background: 'linear-gradient(50deg, rgba(174, 176, 186, 0.133), transparent)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "w-full md:w-1/2 pb-16 pt-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-purple-300 sm:text-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Designed & Developed", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), "by Professionals"), __jsx("p", {
    className: "text-xl leading-relaxed text-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Unique experience,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), "easy to book a professional."), __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-purple-300 sm:text-5xl mt-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Designed & Developed", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), "by Professionals"), __jsx("p", {
    className: "text-xl leading-relaxed text-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Unique experience,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), "easy to book a professional.")));
};

_s(Professionals, "kASdoexwR2tSaij5JXAo62ximiU=");

_c = Professionals;
/* harmony default export */ __webpack_exports__["default"] = (Professionals);

var _c;

$RefreshReg$(_c, "Professionals");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/landing/banner.js":
/*!******************************************!*\
  !*** ./src/components/landing/banner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo */ "./src/components/landing/logo.js");
var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\components\\landing\\banner.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var covers = ['cover-5.png', 'cover-2.png', 'cover-3.png', 'cover-4.png', 'cover-1.png'];

var useCoverTransitionEffect = function useCoverTransitionEffect(setCover) {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var maxIndex = covers.length - 1;
    var index = 0;
    setInterval(function () {
      var position = ++index;

      if (position > maxIndex) {
        position = 0;
        index = 0;
      }

      setCover(covers[position]);
    }, 7000);
  }, []);
};

_s(useCoverTransitionEffect, "OD7bBpZva5O2jO+Puf00hKivP7c=");

var Banner = function Banner() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(covers[0]),
      cover = _useState[0],
      setCover = _useState[1];

  useCoverTransitionEffect(setCover);
  var styles = {
    textShadow1: {
      textShadow: '1px 1px 2px #300954'
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "preloaded-images",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, covers.map(function (cover) {
    return __jsx("img", {
      key: cover,
      src: "/covers/".concat(cover),
      width: "1",
      height: "1",
      alt: cover,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 30
      }
    });
  })), __jsx("div", {
    style: {
      backgroundImage: "url('/covers/".concat(cover, "')"),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      transition: '1s'
    },
    className: "homepage text-default w-full flex items-center justify-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "container mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex py-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "pt-4 mb-4 lg:mb-16 lg:pt-24",
    style: {
      minHeight: '710px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full p-4 md:w-3/4 lg:w-2/4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "font-bold text-4xl lg:text-5xl text-white font-poppins mb-4",
    style: styles.textShadow1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Beauty and grooming services at your doorstep"), __jsx("p", {
    className: "hidden mt-4 mb-4 text-lg leading-6 text-white lg:block text-secondary",
    style: styles.textShadow1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "Find the best beauty and grooming professionals in Dublin.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "Book treatments with just a few clicks."), __jsx("div", {
    className: "mt-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "flex flex-row items-center justify-start mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btn btn-lg btn-default btn-white btn-rounded",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "Get Early Access"))))))));
};

_s2(Banner, "Y/qpwu/tohjEJ9o7cejaOxCXGSw=", false, function () {
  return [useCoverTransitionEffect];
});

_c = Banner;
/* harmony default export */ __webpack_exports__["default"] = (Banner);

var _c;

$RefreshReg$(_c, "Banner");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/landing/categories.js":
/*!**********************************************!*\
  !*** ./src/components/landing/categories.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api_categoriesApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api/categoriesApi */ "./src/lib/api/categoriesApi.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\components\\landing\\categories.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Category = function Category(_ref) {
  var title = _ref.title,
      imageUrl = _ref.imageUrl,
      description = _ref.description;
  return __jsx("div", {
    className: "w-full p-6 mx-auto md:p-4 md:w-1/4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "w-full -mt-10 overflow-hidden bg-white rounded-lg rounded-t-none shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "px-3 py-2 text-xl font-bold tracking-wide text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "flex items-center justify-between px-3 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, description))));
};

_c = Category;

var Categories = function Categories() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getCategories() {
      return _getCategories.apply(this, arguments);
    }

    function _getCategories() {
      _getCategories = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _lib_api_categoriesApi__WEBPACK_IMPORTED_MODULE_3__["default"]().fetchAll();

              case 2:
                response = _context.sent;
                setCategories(response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getCategories.apply(this, arguments);
    }

    getCategories();
  }, []);
  return __jsx("section", {
    className: "container py-12 mx-auto mb-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "w-full md:w-2/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-indigo-800 sm:text-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "You don't need to spend time on traffic anymore.")), __jsx("div", {
    className: "flex flex-wrap -m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, categories && categories.map(function (category) {
    return __jsx(Category, {
      key: category.title,
      title: category.title,
      description: category.description,
      imageUrl: category.image_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    });
  })));
};

_s(Categories, "+ijgB8ROEl0Dkz53OTIi8GynN6s=");

_c2 = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c, _c2;

$RefreshReg$(_c, "Category");
$RefreshReg$(_c2, "Categories");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/landing/presentation.js":
/*!************************************************!*\
  !*** ./src/components/landing/presentation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api_categoriesApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/api/categoriesApi */ "./src/lib/api/categoriesApi.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\components\\landing\\presentation.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Categories = function Categories() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getCategories() {
      return _getCategories.apply(this, arguments);
    } // getCategories()


    function _getCategories() {
      _getCategories = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _lib_api_categoriesApi__WEBPACK_IMPORTED_MODULE_3__["default"]().fetchAll();

              case 2:
                response = _context.sent;
                setCategories(response);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getCategories.apply(this, arguments);
    }
  }, []);
  return __jsx("section", {
    className: "flex container py-12 mx-auto mt-16 mb-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full md:w-1/2 pb-16 pt-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-indigo-800 sm:text-5xl lg:pr-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Beauty services", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), "whenever you need"), __jsx("p", {
    className: "text-xl leading-relaxed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "The best professionals are ready to assist you,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), "directly from the comfort of your own home.")), __jsx("div", {
    className: "w-full md:w-1/2 p-6 md:p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-full bg-center bg-cover rounded-lg",
    style: {
      height: '100%',
      filter: 'drop-shadow(rgb(209, 211, 221) 2px 4px 6px) opacity(0.95) hue-rotate(-15deg)',
      backgroundImage: "url(".concat('https://murilloves.github.io/static/media/beauty-1.4131cf82.jpg', ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
};

_s(Categories, "+ijgB8ROEl0Dkz53OTIi8GynN6s=");

_c = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c;

$RefreshReg$(_c, "Categories");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/empty */ "./src/layouts/empty/index.js");
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/redux */ "./src/lib/redux.js");
/* harmony import */ var _components_landing_banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/landing/banner */ "./src/components/landing/banner.js");
/* harmony import */ var _components_landing_appScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/landing/appScreen */ "./src/components/landing/appScreen.js");
/* harmony import */ var _components_landing_presentation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/landing/presentation */ "./src/components/landing/presentation.js");
/* harmony import */ var _components_landing_professionals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/landing/professionals */ "./src/components/landing/professionals.js");
/* harmony import */ var _components_landing_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/landing/categories */ "./src/components/landing/categories.js");
/* harmony import */ var _components_landing_downloadApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/landing/downloadApp */ "./src/components/landing/downloadApp.js");
/* harmony import */ var _components_landing_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/landing/footer */ "./src/components/landing/footer.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Index = function Index() {
  var smallChatId = "";
  var googleAnalyticsId = "";
  return __jsx(_layouts_empty__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, smallChatId && __jsx("script", {
    src: "https://embed.small.chat/".concat(smallChatId, ".js"),
    async: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 23
    }
  }), googleAnalyticsId && __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(googleAnalyticsId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }), googleAnalyticsId && __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '".concat("", "');\n              ")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(_components_landing_banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx(_components_landing_presentation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), __jsx(_components_landing_appScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }), __jsx(_components_landing_categories__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), __jsx(_components_landing_professionals__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), __jsx(_components_landing_downloadApp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), __jsx(_components_landing_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }));
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_3__["withRedux"])(Index));

var _c, _c2;

$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvYmFubmVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYW5kaW5nL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvcHJlc2VudGF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmVzc2lvbmFscyIsInVzZVN0YXRlIiwicHJvZmVzc2lvbmFscyIsInNldFByb2Zlc3Npb25hbHMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9mZXNzaW9uYWxzIiwiUHJvZmVzc2lvbmFsc0FwaSIsImZldGNoQWxsIiwicmVzcG9uc2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiLCJjb3ZlcnMiLCJ1c2VDb3ZlclRyYW5zaXRpb25FZmZlY3QiLCJzZXRDb3ZlciIsIm1heEluZGV4IiwibGVuZ3RoIiwiaW5kZXgiLCJzZXRJbnRlcnZhbCIsInBvc2l0aW9uIiwiQmFubmVyIiwiY292ZXIiLCJzdHlsZXMiLCJ0ZXh0U2hhZG93MSIsInRleHRTaGFkb3ciLCJtYXAiLCJ0cmFuc2l0aW9uIiwibWluSGVpZ2h0IiwiQ2F0ZWdvcnkiLCJ0aXRsZSIsImltYWdlVXJsIiwiZGVzY3JpcHRpb24iLCJDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yaWVzIiwiQ2F0ZWdvcmllc0FQSSIsImNhdGVnb3J5IiwiaW1hZ2VfdXJsIiwiaGVpZ2h0IiwiZmlsdGVyIiwiSW5kZXgiLCJzbWFsbENoYXRJZCIsInByb2Nlc3MiLCJnb29nbGVBbmFseXRpY3NJZCIsIl9faHRtbCIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxFQUFELENBRHhCO0FBQUEsTUFDbkJDLGFBRG1CO0FBQUEsTUFDSkMsZ0JBREk7O0FBRTFCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxnQkFERDtBQUFBO0FBQUEsTUFLZDs7O0FBTGM7QUFBQSwyTUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QixJQUFJQyxpRUFBSixHQUF1QkMsUUFBdkIsRUFEekI7O0FBQUE7QUFDUUMsd0JBRFI7QUFFRUwsZ0NBQWdCLENBQUNLLFFBQUQsQ0FBaEI7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7QUFNZixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDRTtBQUFTLGFBQVMsRUFBQyxvREFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUNWQyxxQkFBZSxFQUFFLDRGQURQO0FBRVZDLHNCQUFnQixFQUFFLFdBRlI7QUFHVkMsb0JBQWMsRUFBRSxLQUhOO0FBSVZDLGtCQUFZLEVBQUUsTUFKSjtBQUtWQyx3QkFBa0IsRUFBRSxXQUxWO0FBTVZDLGNBQVEsRUFBRSxhQU5BO0FBT1ZDLFlBQU0sRUFBRTtBQVBFLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQ0UsT0FBRyxFQUFDLGdGQUROO0FBRUUsYUFBTSx5Q0FGUjtB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SUFMeEIsRUFNR0EsaUJBQWlCLElBQ2hCO0FBQVEsMkJBQXVCLEVBQUU7QUFDN0JDLFlBQU0sd05BSWtCRixFQUpsQjtBQUR1QixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FGSyxFQXFCTCxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkssRUF1QkwsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJLLEVBeUJMLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCSyxFQTJCTCxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkssRUE2QkwsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JLLEVBK0JMLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSyxFQWlDTCxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0ssQ0FBUDtBQW9DRCxDQXhDRDs7S0FBTUYsSztBQTBDUyxxRUFBQUssNERBQVMsQ0FBQ0wsS0FBRCxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYmU1ZmFjNTU5Y2QzOTg2NjhhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Zlc3Npb25hbHNBcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvcHJvZmVzc2lvbmFsc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFscyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZmVzc2lvbmFscywgc2V0UHJvZmVzc2lvbmFsc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmVzc2lvbmFscygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvZmVzc2lvbmFsc0FwaSgpLmZldGNoQWxsKClcclxuICAgICAgc2V0UHJvZmVzc2lvbmFscyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIC8vIGdldFByb2Zlc3Npb25hbHMoKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IHB5LTI0IHB4LTE2IG14LWF1dG8gbXQtMTYgbWItMTYgYmctcHVycGxlLTgwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwLTYgbWQ6cC00XCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9jbHViaWVuL3N0YXRpYy9tZWRpYS9jbHViaWVuLXNjcmVlbnNob3QtMS45MjhiMDFkOC5wbmdcIiknLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzk2JScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2NXB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzVweCAtMTBweCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbXVyaWxsb3Zlcy5naXRodWIuaW8vY2x1Ymllbi9zdGF0aWMvbWVkaWEvcGhvbmVGcmFtZVdoaXRlLmQxN2ZkYzgxLnN2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiVHdvQ29sV2l0aEJ1dHRvbl9fSW1hZ2UtdWJicHEwLTUgY0xFZVlaXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2IoNTcgMzcgMTEzKSAtMzBweCAzMHB4IDUwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzU1cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMTc0LCAxNzYsIDE4NiwgMC4xMzMpLCB0cmFuc3BhcmVudCknXHJcbiAgICAgICAgICB9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtcHVycGxlLTMwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgRGVzaWduZWQgJiBEZXZlbG9wZWRcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBieSBQcm9mZXNzaW9uYWxzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICBVbmlxdWUgZXhwZXJpZW5jZSxcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBlYXN5IHRvIGJvb2sgYSBwcm9mZXNzaW9uYWwuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWItMTAgdGV4dC0zeGwgdGV4dC1wdXJwbGUtMzAwIHNtOnRleHQtNXhsIG10LTI0XCI+XHJcbiAgICAgICAgICBEZXNpZ25lZCAmIERldmVsb3BlZFxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIGJ5IFByb2Zlc3Npb25hbHNcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgIFVuaXF1ZSBleHBlcmllbmNlLFxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIGVhc3kgdG8gYm9vayBhIHByb2Zlc3Npb25hbC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc2lvbmFsc1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xyXG5jb25zdCBjb3ZlcnMgPSBbJ2NvdmVyLTUucG5nJywgJ2NvdmVyLTIucG5nJywgJ2NvdmVyLTMucG5nJywgJ2NvdmVyLTQucG5nJywgJ2NvdmVyLTEucG5nJ11cclxuXHJcbmNvbnN0IHVzZUNvdmVyVHJhbnNpdGlvbkVmZmVjdCA9IChzZXRDb3ZlcikgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtYXhJbmRleCA9IGNvdmVycy5sZW5ndGggLTFcclxuICAgIGxldCBpbmRleCA9IDBcclxuXHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGxldCBwb3NpdGlvbiA9ICsraW5kZXhcclxuICAgICAgaWYocG9zaXRpb24gPiBtYXhJbmRleCkge1xyXG4gICAgICAgIHBvc2l0aW9uID0gMFxyXG4gICAgICAgIGluZGV4ID0gMFxyXG4gICAgICB9XHJcbiAgICAgIHNldENvdmVyKGNvdmVyc1twb3NpdGlvbl0pXHJcbiAgICB9LCA3MDAwKVxyXG4gIH0sIFtdKVxyXG59XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdmVyLCBzZXRDb3Zlcl0gPSB1c2VTdGF0ZShjb3ZlcnNbMF0pXHJcbiAgdXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0KHNldENvdmVyKVxyXG5cclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICB0ZXh0U2hhZG93MToge1xyXG4gICAgICB0ZXh0U2hhZG93OiAnMXB4IDFweCAycHggIzMwMDk1NCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGlkPVwicHJlbG9hZGVkLWltYWdlc1wiPlxyXG4gICAgICAgIHtjb3ZlcnMubWFwKGNvdmVyID0+IDxpbWcga2V5PXtjb3Zlcn0gc3JjPXtgL2NvdmVycy8ke2NvdmVyfWB9IHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBhbHQ9e2NvdmVyfSAvPil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnL2NvdmVycy8ke2NvdmVyfScpYCxcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICcxcydcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGhvbWVwYWdlIHRleHQtZGVmYXVsdCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydGB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS04XCI+XHJcbiAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LypzZWN0aW9uKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgbWItNCBsZzptYi0xNiBsZzpwdC0yNFwiIHN0eWxlPXsgeyBtaW5IZWlnaHQ6ICc3MTBweCcgfSB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNCBtZDp3LTMvNCBsZzp3LTIvNFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCBsZzp0ZXh0LTV4bCB0ZXh0LXdoaXRlIGZvbnQtcG9wcGlucyBtYi00XCIgc3R5bGU9e3N0eWxlcy50ZXh0U2hhZG93MX0+XHJcbiAgICAgICAgICAgICAgICAgIEJlYXV0eSBhbmQgZ3Jvb21pbmcgc2VydmljZXMgYXQgeW91ciBkb29yc3RlcFxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhpZGRlbiBtdC00IG1iLTQgdGV4dC1sZyBsZWFkaW5nLTYgdGV4dC13aGl0ZSBsZzpibG9jayB0ZXh0LXNlY29uZGFyeVwiIHN0eWxlPXtzdHlsZXMudGV4dFNoYWRvdzF9PlxyXG4gICAgICAgICAgICAgICAgICBGaW5kIHRoZSBiZXN0IGJlYXV0eSBhbmQgZ3Jvb21pbmcgcHJvZmVzc2lvbmFscyBpbiBEdWJsaW4uXHJcbiAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgIEJvb2sgdHJlYXRtZW50cyB3aXRoIGp1c3QgYSBmZXcgY2xpY2tzLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwidGV4dC0xeGwgdGV4dC1ncmF5LTQwMFwiPldlIGFyZSBjb21pbmcgc29vbiE8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxnIGJ0bi1kZWZhdWx0IGJ0bi13aGl0ZSBidG4tcm91bmRlZFwiPkdldCBFYXJseSBBY2Nlc3M8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cIm9wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9mb290ZXJhcHAuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm1sLTQgb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9mb290ZXJwbGF5LnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxyXG4iLCJpbXBvcnQgQ2F0ZWdvcmllc0FQSSBmcm9tIFwiLi4vLi4vbGliL2FwaS9jYXRlZ29yaWVzQXBpXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICh7dGl0bGUsIGltYWdlVXJsLCBkZXNjcmlwdGlvbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgbXgtYXV0byBtZDpwLTQgbWQ6dy0xLzRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgYmctZ3JheS0zMDAgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcclxuICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgfSB9PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgLW10LTEwIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIHNoYWRvdy1sZ1wiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHgtMyBweS0yIHRleHQteGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBweS0yXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntkZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENhdGVnb3JpZXNBUEkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICBnZXRDYXRlZ29yaWVzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS0xMiBteC1hdXRvIG1iLTE2XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvM1wiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgIFlvdSBkb24ndCBuZWVkIHRvIHNwZW5kIHRpbWUgb24gdHJhZmZpYyBhbnltb3JlLlxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS00XCI+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxDYXRlZ29yeSBrZXk9e2NhdGVnb3J5LnRpdGxlfSB0aXRsZT17Y2F0ZWdvcnkudGl0bGV9IGRlc2NyaXB0aW9uPXtjYXRlZ29yeS5kZXNjcmlwdGlvbn0gaW1hZ2VVcmw9e2NhdGVnb3J5LmltYWdlX3VybH0gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzXHJcbiIsImltcG9ydCBDYXRlZ29yaWVzQVBJIGZyb20gXCIuLi8uLi9saWIvYXBpL2NhdGVnb3JpZXNBcGlcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENhdGVnb3JpZXNBUEkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICAvLyBnZXRDYXRlZ29yaWVzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggY29udGFpbmVyIHB5LTEyIG14LWF1dG8gbXQtMTYgbWItMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bCBsZzpwci0yNFwiPlxyXG4gICAgICAgICAgQmVhdXR5IHNlcnZpY2VzXHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgd2hlbmV2ZXIgeW91IG5lZWRcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICBUaGUgYmVzdCBwcm9mZXNzaW9uYWxzIGFyZSByZWFkeSB0byBhc3Npc3QgeW91LCBcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBkaXJlY3RseSBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgb3duIGhvbWUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHAtNiBtZDpwLTRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KHJnYigyMDksIDIxMSwgMjIxKSAycHggNHB4IDZweCkgb3BhY2l0eSgwLjk1KSBodWUtcm90YXRlKC0xNWRlZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9zdGF0aWMvbWVkaWEvYmVhdXR5LTEuNDEzMWNmODIuanBnJ30pYFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2VtcHR5J1xyXG5pbXBvcnQge3dpdGhSZWR1eH0gZnJvbSAnLi4vbGliL3JlZHV4J1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXInXHJcbmltcG9ydCBBcHBTY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2FwcFNjcmVlbidcclxuaW1wb3J0IFByZXNlbnRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJlc2VudGF0aW9uJ1xyXG5pbXBvcnQgUHJvZmVzc2lvbmFscyBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJvZmVzc2lvbmFscydcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2NhdGVnb3JpZXMnXHJcbmltcG9ydCBEb3dubG9hZEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvZG93bmxvYWRBcHAnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2Zvb3RlcidcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNtYWxsQ2hhdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU01BTExfQ0hBVF9JRDtcclxuICBjb25zdCBnb29nbGVBbmFseXRpY3NJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRDtcclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcblxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIHsvKiBTbWFsbCBDaGF0ICovfVxyXG4gICAgICB7c21hbGxDaGF0SWQgJiYgPHNjcmlwdCBzcmM9e2BodHRwczovL2VtYmVkLnNtYWxsLmNoYXQvJHtzbWFsbENoYXRJZH0uanNgfSBhc3luYyAvPn1cclxuXHJcbiAgICAgIHsvKiBHb29nbGUgQW5hbHl0aWNzICovfVxyXG4gICAgICB7Z29vZ2xlQW5hbHl0aWNzSWQgJiYgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z29vZ2xlQW5hbHl0aWNzSWR9YH0gLz59XHJcbiAgICAgIHtnb29nbGVBbmFseXRpY3NJZCAmJlxyXG4gICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRH0nKTtcclxuICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPEJhbm5lciAvPlxyXG5cclxuICAgIDxQcmVzZW50YXRpb24vPlxyXG5cclxuICAgIDxBcHBTY3JlZW4gLz5cclxuXHJcbiAgICA8Q2F0ZWdvcmllcyAvPlxyXG5cclxuICAgIDxQcm9mZXNzaW9uYWxzIC8+XHJcblxyXG4gICAgPERvd25sb2FkQXBwIC8+XHJcblxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KEluZGV4KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9