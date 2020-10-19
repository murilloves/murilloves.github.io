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
    className: "flex container py-12 mx-auto mt-16 mb-16 bg-purple-800",
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
    className: "w-full bg-center bg-cover rounded-lg",
    style: {
      height: '100%',
      filter: 'drop-shadow(rgb(209, 211, 221) 2px 4px 6px) opacity(0.95) hue-rotate(-15deg)',
      backgroundImage: "url(".concat('https://murilloves.github.io/static/media/beauty-1.4131cf82.jpg', ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "w-full md:w-1/2 pb-16 pt-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-indigo-800 sm:text-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Designed & Developed", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), "by Professionals"), __jsx("p", {
    className: "text-xl leading-relaxed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Unique experience,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xhbmRpbmcvcHJlc2VudGF0aW9uLmpzIl0sIm5hbWVzIjpbIlByb2Zlc3Npb25hbHMiLCJ1c2VTdGF0ZSIsInByb2Zlc3Npb25hbHMiLCJzZXRQcm9mZXNzaW9uYWxzIiwidXNlRWZmZWN0IiwiZ2V0UHJvZmVzc2lvbmFscyIsIlByb2Zlc3Npb25hbHNBcGkiLCJmZXRjaEFsbCIsInJlc3BvbnNlIiwiaGVpZ2h0IiwiZmlsdGVyIiwiYmFja2dyb3VuZEltYWdlIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNBUEkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBLE1BS2Q7OztBQUxjO0FBQUEsMk1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsaUVBQUosR0FBdUJDLFFBQXZCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLGdDQUFnQixDQUFDSyxRQUFELENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsd0RBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsc0NBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsWUFBTSxFQUFFLDhFQUZIO0FBR0xDLHFCQUFlLGdCQUFTLGlFQUFUO0FBSFYsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxzREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixxQkFERixFQU1FO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLGlDQU5GLENBWkYsQ0FERjtBQTJCRCxDQXBDRDs7R0FBTVgsYTs7S0FBQUEsYTtBQXNDU0EsNEVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7O0FBRUEsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNhWCxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNoQlksVUFEZ0I7QUFBQSxNQUNKQyxhQURJOztBQUV2QlYseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ1csYUFERDtBQUFBO0FBQUEsTUFLZDs7O0FBTGM7QUFBQSx3TUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QixJQUFJQyw4REFBSixHQUFvQlQsUUFBcEIsRUFEekI7O0FBQUE7QUFDUUMsd0JBRFI7QUFFRU0sNkJBQWEsQ0FBQ04sUUFBRCxDQUFiOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBUyxhQUFTLEVBQUMsMENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsK0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsc0JBREYsRUFNRTtBQUFHLGFBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdEQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixnREFORixDQURGLEVBY0U7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHNDQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxNQURIO0FBRUxDLFlBQU0sRUFBRSw4RUFGSDtBQUdMQyxxQkFBZSxnQkFBUyxpRUFBVDtBQUhWLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBZEYsQ0FERjtBQTJCRCxDQXJDRDs7R0FBTUMsVTs7S0FBQUEsVTtBQXVDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDA4ZDE0ZGVhNDBlMTJlNDU3ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9mZXNzaW9uYWxzQXBpIGZyb20gXCIuLi8uLi9saWIvYXBpL3Byb2Zlc3Npb25hbHNBcGlcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFByb2Zlc3Npb25hbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2Zlc3Npb25hbHMsIHNldFByb2Zlc3Npb25hbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2Zlc3Npb25hbHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IFByb2Zlc3Npb25hbHNBcGkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldFByb2Zlc3Npb25hbHMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICAvLyBnZXRQcm9mZXNzaW9uYWxzKClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXIgcHktMTIgbXgtYXV0byBtdC0xNiBtYi0xNiBiZy1wdXJwbGUtODAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHAtNiBtZDpwLTRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KHJnYigyMDksIDIxMSwgMjIxKSAycHggNHB4IDZweCkgb3BhY2l0eSgwLjk1KSBodWUtcm90YXRlKC0xNWRlZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9zdGF0aWMvbWVkaWEvYmVhdXR5LTEuNDEzMWNmODIuanBnJ30pYFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgRGVzaWduZWQgJiBEZXZlbG9wZWRcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBieSBQcm9mZXNzaW9uYWxzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgVW5pcXVlIGV4cGVyaWVuY2UsXHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgZWFzeSB0byBib29rIGEgcHJvZmVzc2lvbmFsLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzaW9uYWxzXHJcbiIsImltcG9ydCBDYXRlZ29yaWVzQVBJIGZyb20gXCIuLi8uLi9saWIvYXBpL2NhdGVnb3JpZXNBcGlcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENhdGVnb3JpZXNBUEkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICAvLyBnZXRDYXRlZ29yaWVzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggY29udGFpbmVyIHB5LTEyIG14LWF1dG8gbXQtMTYgbWItMTZcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bCBsZzpwci0yNFwiPlxyXG4gICAgICAgICAgQmVhdXR5IHNlcnZpY2VzXHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgd2hlbmV2ZXIgeW91IG5lZWRcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICBUaGUgYmVzdCBwcm9mZXNzaW9uYWxzIGFyZSByZWFkeSB0byBhc3Npc3QgeW91LCBcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBkaXJlY3RseSBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgb3duIGhvbWUuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHAtNiBtZDpwLTRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIGZpbHRlcjogJ2Ryb3Atc2hhZG93KHJnYigyMDksIDIxMSwgMjIxKSAycHggNHB4IDZweCkgb3BhY2l0eSgwLjk1KSBodWUtcm90YXRlKC0xNWRlZyknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHsnaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9zdGF0aWMvbWVkaWEvYmVhdXR5LTEuNDEzMWNmODIuanBnJ30pYFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9