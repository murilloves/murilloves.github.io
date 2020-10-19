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



var Professional = function Professional(_ref) {
  var name = _ref.name,
      title = _ref.title,
      imageUrl = _ref.imageUrl;
  return __jsx("div", {
    className: "w-full p-2 lg:w-1/4 md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "flex items-center h-full p-4 border border-gray-200 rounded-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("img", {
    alt: "team",
    className: "flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full",
    src: imageUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "flex-grow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "text-2xl font-medium text-gray-900 title-font",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, name), __jsx("p", {
    className: "text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title))));
};

_c = Professional;

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
    className: "text-gray-700 bg-purple-800 body-font",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container px-5 py-12 mx-auto md:py-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-col w-full mb-10 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Newest professionals"), __jsx("p", {
    className: "mx-auto text-xl leading-relaxed lg:w-2/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "They just joined us, be one of the first to book with them.")), __jsx("div", {
    className: "flex flex-wrap -m-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, professionals.map(function (prof) {
    return __jsx(Professional, {
      key: prof.name,
      name: prof.name,
      title: prof.title,
      imageUrl: prof.imageUrl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    });
  }))));
};

_s(Professionals, "kASdoexwR2tSaij5JXAo62ximiU=");

_c2 = Professionals;
/* harmony default export */ __webpack_exports__["default"] = (Professionals);

var _c, _c2;

$RefreshReg$(_c, "Professional");
$RefreshReg$(_c2, "Professionals");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9mZXNzaW9uYWwiLCJuYW1lIiwidGl0bGUiLCJpbWFnZVVybCIsIlByb2Zlc3Npb25hbHMiLCJ1c2VTdGF0ZSIsInByb2Zlc3Npb25hbHMiLCJzZXRQcm9mZXNzaW9uYWxzIiwidXNlRWZmZWN0IiwiZ2V0UHJvZmVzc2lvbmFscyIsIlByb2Zlc3Npb25hbHNBcGkiLCJmZXRjaEFsbCIsInJlc3BvbnNlIiwibWFwIiwicHJvZiIsIkluZGV4Iiwic21hbGxDaGF0SWQiLCJwcm9jZXNzIiwiZ29vZ2xlQW5hbHl0aWNzSWQiLCJfX2h0bWwiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQVFDLEtBQVIsUUFBUUEsS0FBUjtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFNBQ25CO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsTUFBVDtBQUFnQixhQUFTLEVBQUMsa0ZBQTFCO0FBQTZHLE9BQUcsRUFBRUEsUUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsK0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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O0FBQVEsMkJBQXVCLEVBQUU7QUFDN0JDLFlBQU0sd05BSWtCRixFQUpsQjtBQUR1QixLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosQ0FGSyxFQXFCTCxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkssRUF1QkwsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJLLEVBeUJMLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpCSyxFQTJCTCxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkssRUE2QkwsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0JLLEVBK0JMLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9CSyxFQWlDTCxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0ssQ0FBUDtBQW9DRCxDQXhDRDs7S0FBTUYsSztBQTBDUyxxRUFBQUssNERBQVMsQ0FBQ0wsS0FBRCxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMTU5N2I3YjZkODFmOThmMzc3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Zlc3Npb25hbHNBcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvcHJvZmVzc2lvbmFsc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFsID0gKHtuYW1lLCB0aXRsZSwgaW1hZ2VVcmx9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGxnOnctMS80IG1kOnctMS8yXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgIDxpbWcgYWx0PVwidGVhbVwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy0xNiBoLTE2IG1yLTQgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsXCIgc3JjPXtpbWFnZVVybH0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0aXRsZS1mb250XCI+e25hbWV9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3RpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFscyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZmVzc2lvbmFscywgc2V0UHJvZmVzc2lvbmFsc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmVzc2lvbmFscygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvZmVzc2lvbmFsc0FwaSgpLmZldGNoQWxsKClcclxuICAgICAgc2V0UHJvZmVzc2lvbmFscyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIC8vIGdldFByb2Zlc3Npb25hbHMoKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGJnLXB1cnBsZS04MDAgYm9keS1mb250XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTIgbXgtYXV0byBtZDpweS0yNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWItMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc206dGV4dC0zeGwgdGl0bGUtZm9udFwiPk5ld2VzdCBwcm9mZXNzaW9uYWxzPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC14bCBsZWFkaW5nLXJlbGF4ZWQgbGc6dy0yLzNcIj5UaGV5IGp1c3Qgam9pbmVkIHVzLCBiZSBvbmUgb2YgdGhlIGZpcnN0IHRvIGJvb2sgd2l0aCB0aGVtLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1tLTJcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvZmVzc2lvbmFscy5tYXAocHJvZiA9PlxyXG4gICAgICAgICAgICAgIDxQcm9mZXNzaW9uYWxcclxuICAgICAgICAgICAgICAgIGtleT17cHJvZi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgbmFtZT17cHJvZi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb2YudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybD17cHJvZi5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc2lvbmFsc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2VtcHR5J1xyXG5pbXBvcnQge3dpdGhSZWR1eH0gZnJvbSAnLi4vbGliL3JlZHV4J1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXInXHJcbmltcG9ydCBBcHBTY3JlZW4gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2FwcFNjcmVlbidcclxuaW1wb3J0IFByZXNlbnRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJlc2VudGF0aW9uJ1xyXG5pbXBvcnQgUHJvZmVzc2lvbmFscyBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJvZmVzc2lvbmFscydcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2NhdGVnb3JpZXMnXHJcbmltcG9ydCBEb3dubG9hZEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvZG93bmxvYWRBcHAnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2Zvb3RlcidcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNtYWxsQ2hhdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU01BTExfQ0hBVF9JRDtcclxuICBjb25zdCBnb29nbGVBbmFseXRpY3NJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRDtcclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcblxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIHsvKiBTbWFsbCBDaGF0ICovfVxyXG4gICAgICB7c21hbGxDaGF0SWQgJiYgPHNjcmlwdCBzcmM9e2BodHRwczovL2VtYmVkLnNtYWxsLmNoYXQvJHtzbWFsbENoYXRJZH0uanNgfSBhc3luYyAvPn1cclxuXHJcbiAgICAgIHsvKiBHb29nbGUgQW5hbHl0aWNzICovfVxyXG4gICAgICB7Z29vZ2xlQW5hbHl0aWNzSWQgJiYgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z29vZ2xlQW5hbHl0aWNzSWR9YH0gLz59XHJcbiAgICAgIHtnb29nbGVBbmFseXRpY3NJZCAmJlxyXG4gICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRH0nKTtcclxuICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPEJhbm5lciAvPlxyXG5cclxuICAgIDxQcmVzZW50YXRpb24vPlxyXG5cclxuICAgIDxBcHBTY3JlZW4gLz5cclxuXHJcbiAgICA8Q2F0ZWdvcmllcyAvPlxyXG5cclxuICAgIDxQcm9mZXNzaW9uYWxzIC8+XHJcblxyXG4gICAgPERvd25sb2FkQXBwIC8+XHJcblxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KEluZGV4KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9