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
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-purple-300 sm:text-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Designed & Developed", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), "by Professionals"), __jsx("p", {
    className: "text-xl leading-relaxed text-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Unique experience,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), "easy to book a professional."), __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-purple-300 sm:text-5xl mt-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Designed & Developed", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), "by Professionals"), __jsx("p", {
    className: "text-xl leading-relaxed text-gray-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Unique experience,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiXSwibmFtZXMiOlsiUHJvZmVzc2lvbmFscyIsInVzZVN0YXRlIiwicHJvZmVzc2lvbmFscyIsInNldFByb2Zlc3Npb25hbHMiLCJ1c2VFZmZlY3QiLCJnZXRQcm9mZXNzaW9uYWxzIiwiUHJvZmVzc2lvbmFsc0FwaSIsImZldGNoQWxsIiwicmVzcG9uc2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJtYXhXaWR0aCIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBLE1BS2Q7OztBQUxjO0FBQUEsMk1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsaUVBQUosR0FBdUJDLFFBQXZCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLGdDQUFnQixDQUFDSyxRQUFELENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsb0RBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUU7QUFDVkMscUJBQWUsRUFBRSw0RkFEUDtBQUVWQyxzQkFBZ0IsRUFBRSxXQUZSO0FBR1ZDLG9CQUFjLEVBQUUsS0FITjtBQUlWQyxrQkFBWSxFQUFFLE1BSko7QUFLVkMsd0JBQWtCLEVBQUUsV0FMVjtBQU1WQyxjQUFRLEVBQUUsYUFOQTtBQU9WQyxZQUFNLEVBQUU7QUFQRSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUNFLE9BQUcsRUFBQyxnRkFETjtBQUVFLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUUsZ0NBRE47QUFFTEosa0JBQVksRUFBRSxNQUZUO0FBR0xLLGdCQUFVLEVBQUU7QUFIUCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLENBREYsRUFxQkU7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHNEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHFCQURGLEVBTUU7QUFBRyxhQUFTLEVBQUMsdUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsaUNBTkYsRUFXRTtBQUFJLGFBQVMsRUFBQyw0REFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixxQkFYRixFQWdCRTtBQUFHLGFBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixpQ0FoQkYsQ0FyQkYsQ0FERjtBQThDRCxDQXZERDs7R0FBTWpCLGE7O0tBQUFBLGE7QUF5RFNBLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0YjNhYTQ3NjFkNjczMjkzNTk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZmVzc2lvbmFsc0FwaSBmcm9tIFwiLi4vLi4vbGliL2FwaS9wcm9mZXNzaW9uYWxzQXBpXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBQcm9mZXNzaW9uYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9mZXNzaW9uYWxzLCBzZXRQcm9mZXNzaW9uYWxzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQcm9mZXNzaW9uYWxzKCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldyBQcm9mZXNzaW9uYWxzQXBpKCkuZmV0Y2hBbGwoKVxyXG4gICAgICBzZXRQcm9mZXNzaW9uYWxzKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0UHJvZmVzc2lvbmFscygpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggcHktMjQgcHgtMTYgbXgtYXV0byBtdC0xNiBtYi0xNiBiZy1wdXJwbGUtODAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIHAtNiBtZDpwLTRcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJodHRwczovL211cmlsbG92ZXMuZ2l0aHViLmlvL2NsdWJpZW4vc3RhdGljL21lZGlhL2NsdWJpZW4tc2NyZWVuc2hvdC0xLjkyOGIwMWQ4LnBuZ1wiKScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnOTYlJyxcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogJzY1cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnNXB4IC0xMHB4JyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tdXJpbGxvdmVzLmdpdGh1Yi5pby9jbHViaWVuL3N0YXRpYy9tZWRpYS9waG9uZUZyYW1lV2hpdGUuZDE3ZmRjODEuc3ZnXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2IoNTcgMzcgMTEzKSAtMzBweCAzMHB4IDUwcHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzU1cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNTBkZWcsIHJnYmEoMTc0LCAxNzYsIDE4NiwgMC4xMzMpLCB0cmFuc3BhcmVudCknXHJcbiAgICAgICAgICB9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgcGItMTYgcHQtMTZcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtcHVycGxlLTMwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgICAgRGVzaWduZWQgJiBEZXZlbG9wZWRcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBieSBQcm9mZXNzaW9uYWxzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICBVbmlxdWUgZXhwZXJpZW5jZSxcclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICBlYXN5IHRvIGJvb2sgYSBwcm9mZXNzaW9uYWwuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJweC0yIHB5LTIgbWItMTAgdGV4dC0zeGwgdGV4dC1wdXJwbGUtMzAwIHNtOnRleHQtNXhsIG10LTI0XCI+XHJcbiAgICAgICAgICBEZXNpZ25lZCAmIERldmVsb3BlZFxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIGJ5IFByb2Zlc3Npb25hbHNcclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS0xMDBcIj5cclxuICAgICAgICAgIFVuaXF1ZSBleHBlcmllbmNlLFxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIGVhc3kgdG8gYm9vayBhIHByb2Zlc3Npb25hbC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmVzc2lvbmFsc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9