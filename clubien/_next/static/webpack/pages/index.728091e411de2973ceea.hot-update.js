webpackHotUpdate_N_E("pages/index",{

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
    var index = 0; // setInterval(() => {
    //   let position = ++index
    //   if(position > maxIndex) {
    //     position = 0
    //     index = 0
    //   }
    //   setCover(covers[position])
    // }, 7000)
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
      backgroundImage: "linear-gradient(135deg, #0c001dcc, transparent), url('/covers/".concat(cover, "')"),
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
  }, __jsx("h3", {
    className: "text-1xl text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "We are coming soon!")), __jsx("div", {
    className: "flex flex-row items-center justify-start mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "opacity-50 cursor-not-allowed",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/footerapp.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })), __jsx("a", {
    href: "#",
    className: "ml-4 opacity-50 cursor-not-allowed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/footerplay.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  })))))))));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXIuanMiXSwibmFtZXMiOlsiY292ZXJzIiwidXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0Iiwic2V0Q292ZXIiLCJ1c2VFZmZlY3QiLCJtYXhJbmRleCIsImxlbmd0aCIsImluZGV4IiwiQmFubmVyIiwidXNlU3RhdGUiLCJjb3ZlciIsInN0eWxlcyIsInRleHRTaGFkb3cxIiwidGV4dFNoYWRvdyIsIm1hcCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLGFBQTlDLEVBQTZELGFBQTdELENBQWY7O0FBRUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFDN0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0osTUFBTSxDQUFDSyxNQUFQLEdBQWUsQ0FBaEM7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWixDQUZjLENBSWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBWlEsRUFZTixFQVpNLENBQVQ7QUFhRCxDQWREOztHQUFNTCx3Qjs7QUFnQk4sSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDUixNQUFNLENBQUMsQ0FBRCxDQUFQLENBRGY7QUFBQSxNQUNaUyxLQURZO0FBQUEsTUFDTFAsUUFESzs7QUFFbkJELDBCQUF3QixDQUFDQyxRQUFELENBQXhCO0FBRUEsTUFBTVEsTUFBTSxHQUFHO0FBQ2JDLGVBQVcsRUFBRTtBQUNY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YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcclxuY29uc3QgY292ZXJzID0gWydjb3Zlci01LnBuZycsICdjb3Zlci0yLnBuZycsICdjb3Zlci0zLnBuZycsICdjb3Zlci00LnBuZycsICdjb3Zlci0xLnBuZyddXHJcblxyXG5jb25zdCB1c2VDb3ZlclRyYW5zaXRpb25FZmZlY3QgPSAoc2V0Q292ZXIpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbWF4SW5kZXggPSBjb3ZlcnMubGVuZ3RoIC0xXHJcbiAgICBsZXQgaW5kZXggPSAwXHJcblxyXG4gICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgLy8gICBsZXQgcG9zaXRpb24gPSArK2luZGV4XHJcbiAgICAvLyAgIGlmKHBvc2l0aW9uID4gbWF4SW5kZXgpIHtcclxuICAgIC8vICAgICBwb3NpdGlvbiA9IDBcclxuICAgIC8vICAgICBpbmRleCA9IDBcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICBzZXRDb3Zlcihjb3ZlcnNbcG9zaXRpb25dKVxyXG4gICAgLy8gfSwgNzAwMClcclxuICB9LCBbXSlcclxufVxyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3Zlciwgc2V0Q292ZXJdID0gdXNlU3RhdGUoY292ZXJzWzBdKVxyXG4gIHVzZUNvdmVyVHJhbnNpdGlvbkVmZmVjdChzZXRDb3ZlcilcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdGV4dFNoYWRvdzE6IHtcclxuICAgICAgdGV4dFNoYWRvdzogJzFweCAxcHggMnB4ICMzMDA5NTQnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cInByZWxvYWRlZC1pbWFnZXNcIj5cclxuICAgICAgICB7Y292ZXJzLm1hcChjb3ZlciA9PiA8aW1nIGtleT17Y292ZXJ9IHNyYz17YC9jb3ZlcnMvJHtjb3Zlcn1gfSB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgYWx0PXtjb3Zlcn0gLz4pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGMwMDFkY2MsIHRyYW5zcGFyZW50KSwgdXJsKCcvY292ZXJzLyR7Y292ZXJ9JylgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzFzJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaG9tZXBhZ2UgdGV4dC1kZWZhdWx0IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LThcIj5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKnNlY3Rpb24qL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBtYi00IGxnOm1iLTE2IGxnOnB0LTI0XCIgc3R5bGU9eyB7IG1pbkhlaWdodDogJzcxMHB4JyB9IH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IG1kOnctMy80IGxnOnctMi80XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1wb3BwaW5zIG1iLTRcIiBzdHlsZT17c3R5bGVzLnRleHRTaGFkb3cxfT5cclxuICAgICAgICAgICAgICAgICAgQmVhdXR5IGFuZCBncm9vbWluZyBzZXJ2aWNlcyBhdCB5b3VyIGRvb3JzdGVwXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG10LTQgbWItNCB0ZXh0LWxnIGxlYWRpbmctNiB0ZXh0LXdoaXRlIGxnOmJsb2NrIHRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9e3N0eWxlcy50ZXh0U2hhZG93MX0+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmQgdGhlIGJlc3QgYmVhdXR5IGFuZCBncm9vbWluZyBwcm9mZXNzaW9uYWxzIGluIER1Ymxpbi5cclxuICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgQm9vayB0cmVhdG1lbnRzIHdpdGgganVzdCBhIGZldyBjbGlja3MuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMXhsIHRleHQtZ3JheS00MDBcIj5XZSBhcmUgY29taW5nIHNvb24hPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zvb3RlcmFwcC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWwtNCBvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zvb3RlcnBsYXkuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==