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
    className: "flex py-16 px-16 mx-auto mt-16 mb-16 bg-purple-800",
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
      boxShadow: 'rgba(174, 176, 186, 0.267) -30px 60px 40px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiXSwibmFtZXMiOlsiUHJvZmVzc2lvbmFscyIsInVzZVN0YXRlIiwicHJvZmVzc2lvbmFscyIsInNldFByb2Zlc3Npb25hbHMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9mZXNzaW9uYWxzIiwiUHJvZmVzc2lvbmFsc0FwaSIsImZldGNoQWxsIiwicmVzcG9uc2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBLE1BS2Q7OztBQUxjO0FBQUEsMk1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsaUVBQUosR0FBdUJDLFFBQXZCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLGdDQUFnQixDQUFDSyxRQUFELENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsb0RBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVkMscUJBQWUsRUFBRSw0RkFEUDtBQUVWQyxzQkFBZ0IsRUFBRSxXQUZSO0FBR1ZDLG9CQUFjLEVBQUUsS0FITjtBQUlWQyxrQkFBWSxFQUFFLE1BSko7QUFLVkMsd0JBQWtCLEVBQUUsV0FMVjtBQU1WQyxjQUFRLEVBQUUsYUFOQTtBQU9WQyxZQUFNLEVBQUU7QUFQRSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUNFLE9BQUcsRUFBQyxnRkFETjtBQUVFLGFBQU0seUNBRlI7QUFHRSxTQUFLLEVBQUU7QUFDTEMsZUFBUyxFQUFFLDRDQUROO0FBRUxKLGtCQUFZLEVBQUUsTUFGVDtBQUdMSyxnQkFBVSxFQUFFO0FBSFAsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsQ0FERixDQURGLEVBc0JFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxzREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixxQkFERixFQU1FO0FBQUcsYUFBUyxFQUFDLHVDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLGlDQU5GLENBdEJGLENBREY7QUFxQ0QsQ0E5Q0Q7O0dBQU1qQixhOztLQUFBQSxhO0FBZ0RTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YjA1ZDQ0OGQ2YTMyNzc2ZmVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Zlc3Npb25hbHNBcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvcHJvZmVzc2lvbmFsc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFscyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZmVzc2lvbmFscywgc2V0UHJvZmVzc2lvbmFsc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmVzc2lvbmFscygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvZmVzc2lvbmFsc0FwaSgpLmZldGNoQWxsKClcclxuICAgICAgc2V0UHJvZmVzc2lvbmFscyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIC8vIGdldFByb2Zlc3Npb25hbHMoKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IHB5LTE2IHB4LTE2IG14LWF1dG8gbXQtMTYgbWItMTYgYmctcHVycGxlLTgwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBwLTYgbWQ6cC00XCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9jbHViaWVuL3N0YXRpYy9tZWRpYS9jbHViaWVuLXNjcmVlbnNob3QtMS45MjhiMDFkOC5wbmdcIiknLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzk2JScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2NXB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzVweCAtMTBweCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJ2ZpdC1jb250ZW50JyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vbXVyaWxsb3Zlcy5naXRodWIuaW8vY2x1Ymllbi9zdGF0aWMvbWVkaWEvcGhvbmVGcmFtZVdoaXRlLmQxN2ZkYzgxLnN2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiVHdvQ29sV2l0aEJ1dHRvbl9fSW1hZ2UtdWJicHEwLTUgY0xFZVlaXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDE3NCwgMTc2LCAxODYsIDAuMjY3KSAtMzBweCA2MHB4IDQwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzU1cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMTc0LCAxNzYsIDE4NiwgMC4xMzMpLCB0cmFuc3BhcmVudCknXHJcbiAgICAgICAgICB9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtcHVycGxlLTMwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgRGVzaWduZWQgJiBEZXZlbG9wZWRcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBieSBQcm9mZXNzaW9uYWxzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICBVbmlxdWUgZXhwZXJpZW5jZSxcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBlYXN5IHRvIGJvb2sgYSBwcm9mZXNzaW9uYWwuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2Zlc3Npb25hbHNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==