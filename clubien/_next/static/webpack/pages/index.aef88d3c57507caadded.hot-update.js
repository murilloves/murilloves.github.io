webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _components_landing_presentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/landing/presentation */ "./src/components/landing/presentation.js");
/* harmony import */ var _components_landing_professionals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/landing/professionals */ "./src/components/landing/professionals.js");
/* harmony import */ var _components_landing_categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/landing/categories */ "./src/components/landing/categories.js");
/* harmony import */ var _components_landing_downloadApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/landing/downloadApp */ "./src/components/landing/downloadApp.js");
/* harmony import */ var _components_landing_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/landing/footer */ "./src/components/landing/footer.js");
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
      lineNumber: 16,
      columnNumber: 10
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, smallChatId && __jsx("script", {
    src: "https://embed.small.chat/".concat(smallChatId, ".js"),
    async: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 23
    }
  }), googleAnalyticsId && __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(googleAnalyticsId),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }), googleAnalyticsId && __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n                  window.dataLayer = window.dataLayer || [];\n                  function gtag(){dataLayer.push(arguments);}\n                  gtag('js', new Date());\n                  gtag('config', '".concat("", "');\n              ")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })), __jsx(_components_landing_banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), __jsx(_components_landing_presentation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), __jsx(_components_landing_professionals__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(_components_landing_categories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }), __jsx(_components_landing_downloadApp__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }), __jsx(_components_landing_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Iiwic21hbGxDaGF0SWQiLCJwcm9jZXNzIiwiZ29vZ2xlQW5hbHl0aWNzSWQiLCJfX2h0bWwiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsTUFBTUMsV0FBVyxHQUFHQyxFQUFwQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHRCxFQUExQjtBQUVBLFNBQU8sTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUwsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUdELFdBQVcsSUFBSTtBQUFRLE9BQUcscUNBQThCQSxXQUE5QixRQUFYO0FBQTJELFNBQUssTUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZsQixFQUtHRSxpQkFBaUIsSUFBSTtBQUFRLFNBQUssTUFBYjtBQUFjLE9BQUcsd0RBQWlEQSxpQkFBakQsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUx4QixFQU1HQSxpQkFBaUIsSUFDaEI7QUFBUSwyQkFBdUIsRUFBRTtBQUM3QkMsWUFBTSx3TkFJa0JGLEVBSmxCO0FBRHVCLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQUZLLEVBcUJMLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSyxFQXVCTCxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkssRUF5QkwsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJLLEVBMkJMLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCSyxFQTZCTCxNQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkssRUErQkwsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0JLLENBQVA7QUFrQ0QsQ0F0Q0Q7O0tBQU1GLEs7QUF3Q1MscUVBQUFLLDREQUFTLENBQUNMLEtBQUQsQ0FBeEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWVmODhkM2M1NzUwN2NhYWRkZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMvZW1wdHknXHJcbmltcG9ydCB7d2l0aFJlZHV4fSBmcm9tICcuLi9saWIvcmVkdXgnXHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2Jhbm5lcidcclxuaW1wb3J0IFByZXNlbnRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJlc2VudGF0aW9uJ1xyXG5pbXBvcnQgUHJvZmVzc2lvbmFscyBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvcHJvZmVzc2lvbmFscydcclxuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2NhdGVnb3JpZXMnXHJcbmltcG9ydCBEb3dubG9hZEFwcCBmcm9tICcuLi9jb21wb25lbnRzL2xhbmRpbmcvZG93bmxvYWRBcHAnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2Zvb3RlcidcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNtYWxsQ2hhdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU01BTExfQ0hBVF9JRDtcclxuICBjb25zdCBnb29nbGVBbmFseXRpY3NJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRDtcclxuXHJcbiAgcmV0dXJuIDxMYXlvdXQ+XHJcblxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIHsvKiBTbWFsbCBDaGF0ICovfVxyXG4gICAgICB7c21hbGxDaGF0SWQgJiYgPHNjcmlwdCBzcmM9e2BodHRwczovL2VtYmVkLnNtYWxsLmNoYXQvJHtzbWFsbENoYXRJZH0uanNgfSBhc3luYyAvPn1cclxuXHJcbiAgICAgIHsvKiBHb29nbGUgQW5hbHl0aWNzICovfVxyXG4gICAgICB7Z29vZ2xlQW5hbHl0aWNzSWQgJiYgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z29vZ2xlQW5hbHl0aWNzSWR9YH0gLz59XHJcbiAgICAgIHtnb29nbGVBbmFseXRpY3NJZCAmJlxyXG4gICAgICAgIDxzY3JpcHQgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRH0nKTtcclxuICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICB9XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPEJhbm5lciAvPlxyXG5cclxuICAgIDxQcmVzZW50YXRpb24vPlxyXG5cclxuICAgIDxQcm9mZXNzaW9uYWxzIC8+XHJcblxyXG4gICAgPENhdGVnb3JpZXMgLz5cclxuXHJcbiAgICA8RG93bmxvYWRBcHAgLz5cclxuXHJcbiAgICA8Rm9vdGVyIC8+XHJcblxyXG4gIDwvTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoSW5kZXgpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=