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
  }, "Designed & Developed by Professionals."), __jsx("p", {
    className: "mx-auto text-xl text-gray-100 leading-relaxed lg:w-2/3",
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
      lineNumber: 34,
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
        lineNumber: 37,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9hcHBTY3JlZW4uanMiXSwibmFtZXMiOlsiUHJvZmVzc2lvbmFsIiwibmFtZSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJQcm9mZXNzaW9uYWxzIiwidXNlU3RhdGUiLCJwcm9mZXNzaW9uYWxzIiwic2V0UHJvZmVzc2lvbmFscyIsInVzZUVmZmVjdCIsImdldFByb2Zlc3Npb25hbHMiLCJQcm9mZXNzaW9uYWxzQXBpIiwiZmV0Y2hBbGwiLCJyZXNwb25zZSIsIm1hcCIsInByb2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLE1BQVFDLEtBQVIsUUFBUUEsS0FBUjtBQUFBLE1BQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFNBQ25CO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsTUFBVDtBQUFnQixhQUFTLEVBQUMsa0ZBQTFCO0FBQTZHLE9BQUcsRUFBRUEsUUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsK0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErREYsSUFBL0QsQ0FERixFQUVFO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE4QkMsS0FBOUIsQ0FGRixDQUZGLENBREYsQ0FEbUI7QUFBQSxDQUFyQjs7S0FBTUYsWTs7QUFZTixJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUMsRUFBRCxDQUR4QjtBQUFBLE1BQ25CQyxhQURtQjtBQUFBLE1BQ0pDLGdCQURJOztBQUUxQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsZ0JBREQ7QUFBQTtBQUFBLE1BS2Q7OztBQUxjO0FBQUEsMk1BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsaUVBQUosR0FBdUJDLFFBQXZCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLGdDQUFnQixDQUFDSyxRQUFELENBQWhCOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBO0FBTWYsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQU9BLFNBQ0U7QUFBUyxhQUFTLEVBQUMsdUNBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBREYsRUFFRTtBQUFHLGFBQVMsRUFBQyx3REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUZGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlOLGFBQWEsQ0FBQ08sR0FBZCxDQUFrQixVQUFBQyxJQUFJO0FBQUEsV0FDcEIsTUFBQyxZQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNiLElBRFo7QUFFRSxVQUFJLEVBQUVhLElBQUksQ0FBQ2IsSUFGYjtBQUdFLFdBQUssRUFBRWEsSUFBSSxDQUFDWixLQUhkO0FBSUUsY0FBUSxFQUFFWSxJQUFJLENBQUNYLFFBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEb0I7QUFBQSxHQUF0QixDQUZKLENBUEYsQ0FERixDQURGO0FBd0JELENBakNEOztHQUFNQyxhOztNQUFBQSxhO0FBbUNTQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lZTk5NTk4NGMxNjVhZWM1NzkxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Zlc3Npb25hbHNBcGkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvcHJvZmVzc2lvbmFsc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFsID0gKHtuYW1lLCB0aXRsZSwgaW1hZ2VVcmx9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGxnOnctMS80IG1kOnctMS8yXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbCBwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgIDxpbWcgYWx0PVwidGVhbVwiIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXIgdy0xNiBoLTE2IG1yLTQgYmctZ3JheS0xMDAgcm91bmRlZC1mdWxsXCIgc3JjPXtpbWFnZVVybH0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCB0aXRsZS1mb250XCI+e25hbWV9PC9oMz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3RpdGxlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgUHJvZmVzc2lvbmFscyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZmVzc2lvbmFscywgc2V0UHJvZmVzc2lvbmFsc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZmVzc2lvbmFscygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgUHJvZmVzc2lvbmFsc0FwaSgpLmZldGNoQWxsKClcclxuICAgICAgc2V0UHJvZmVzc2lvbmFscyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIC8vIGdldFByb2Zlc3Npb25hbHMoKVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIGJnLXB1cnBsZS04MDAgYm9keS1mb250XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTUgcHktMTIgbXgtYXV0byBtZDpweS0yNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWItMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgc206dGV4dC0zeGwgdGl0bGUtZm9udFwiPkRlc2lnbmVkICYgRGV2ZWxvcGVkIGJ5IFByb2Zlc3Npb25hbHMuPC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC14bCB0ZXh0LWdyYXktMTAwIGxlYWRpbmctcmVsYXhlZCBsZzp3LTIvM1wiPlxyXG4gICAgICAgICAgICBUaGV5IGp1c3Qgam9pbmVkIHVzLCBiZSBvbmUgb2YgdGhlIGZpcnN0IHRvIGJvb2sgd2l0aCB0aGVtLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tMlwiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9mZXNzaW9uYWxzLm1hcChwcm9mID0+XHJcbiAgICAgICAgICAgICAgPFByb2Zlc3Npb25hbFxyXG4gICAgICAgICAgICAgICAga2V5PXtwcm9mLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9mLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvZi50aXRsZX1cclxuICAgICAgICAgICAgICAgIGltYWdlVXJsPXtwcm9mLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9mZXNzaW9uYWxzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=