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
    className: "flex py-12 px-16 mx-auto mt-16 mb-16 bg-purple-800",
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
    className: "px-2 py-2 mb-10 text-3xl text-gray-100 sm:text-5xl",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiXSwibmFtZXMiOlsiUHJvZmVzc2lvbmFscyIsInVzZVN0YXRlIiwicHJvZmVzc2lvbmFscyIsInNldFByb2Zlc3Npb25hbHMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9mZXNzaW9uYWxzIiwiUHJvZmVzc2lvbmFsc0FwaSIsImZldGNoQWxsIiwicmVzcG9uc2UiLCJoZWlnaHQiLCJmaWx0ZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBLE1BS2Q7OztBQUxjO0FBQUEsMk1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsaUVBQUosR0FBdUJDLFFBQXZCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLGdDQUFnQixDQUFDSyxRQUFELENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsb0RBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsc0NBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLE1BREg7QUFFTEMsWUFBTSxFQUFFLDhFQUZIO0FBR0xDLHFCQUFlLGdCQUFTLGlFQUFUO0FBSFYsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxvREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixxQkFERixFQU1FO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLGlDQU5GLENBWkYsQ0FERjtBQTJCRCxDQXBDRDs7R0FBTVgsYTs7S0FBQUEsYTtBQXNDU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2VmYjc4OGU4NjRlZTZjNjk0ZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9mZXNzaW9uYWxzQXBpIGZyb20gXCIuLi8uLi9saWIvYXBpL3Byb2Zlc3Npb25hbHNBcGlcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IFByb2Zlc3Npb25hbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2Zlc3Npb25hbHMsIHNldFByb2Zlc3Npb25hbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFByb2Zlc3Npb25hbHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IFByb2Zlc3Npb25hbHNBcGkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldFByb2Zlc3Npb25hbHMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICAvLyBnZXRQcm9mZXNzaW9uYWxzKClcclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBweS0xMiBweC0xNiBteC1hdXRvIG10LTE2IG1iLTE2IGJnLXB1cnBsZS04MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcC02IG1kOnAtNFwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3cocmdiKDIwOSwgMjExLCAyMjEpIDJweCA0cHggNnB4KSBvcGFjaXR5KDAuOTUpIGh1ZS1yb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL211cmlsbG92ZXMuZ2l0aHViLmlvL3N0YXRpYy9tZWRpYS9iZWF1dHktMS40MTMxY2Y4Mi5qcGcnfSlgXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwYi0xNiBwdC0xNlwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWItMTAgdGV4dC0zeGwgdGV4dC1ncmF5LTEwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgRGVzaWduZWQgJiBEZXZlbG9wZWRcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBieSBQcm9mZXNzaW9uYWxzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZFwiPlxyXG4gICAgICAgICAgVW5pcXVlIGV4cGVyaWVuY2UsXHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgZWFzeSB0byBib29rIGEgcHJvZmVzc2lvbmFsLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzaW9uYWxzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=