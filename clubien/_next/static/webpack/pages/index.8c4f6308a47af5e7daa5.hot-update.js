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
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex py-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_logo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "w-full p-4 md:w-3/4 lg:w-2/4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "font-bold text-4xl lg:text-5xl text-white font-poppins mb-4",
    style: styles.textShadow1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Beauty and grooming services at your doorstep"), __jsx("p", {
    className: "hidden mt-4 mb-4 text-lg leading-6 text-white lg:block text-secondary",
    style: styles.textShadow1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Find the best beauty and grooming professionals in Dublin.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }), "Book treatments with just a few clicks."), __jsx("div", {
    className: "mt-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("h3", {
    className: "text-1xl text-gray-400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, "We are coming soon!")), __jsx("div", {
    className: "flex flex-row items-center justify-start mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "opacity-50 cursor-not-allowed",
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/footerapp.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), __jsx("a", {
    href: "#",
    className: "ml-4 opacity-50 cursor-not-allowed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/footerplay.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXIuanMiXSwibmFtZXMiOlsiY292ZXJzIiwidXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0Iiwic2V0Q292ZXIiLCJ1c2VFZmZlY3QiLCJtYXhJbmRleCIsImxlbmd0aCIsImluZGV4IiwiQmFubmVyIiwidXNlU3RhdGUiLCJjb3ZlciIsInN0eWxlcyIsInRleHRTaGFkb3cxIiwidGV4dFNoYWRvdyIsIm1hcCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLGFBQTlDLEVBQTZELGFBQTdELENBQWY7O0FBRUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxRQUFELEVBQWM7QUFBQTs7QUFDN0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBR0osTUFBTSxDQUFDSyxNQUFQLEdBQWUsQ0FBaEM7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWixDQUZjLENBSWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBWlEsRUFZTixFQVpNLENBQVQ7QUFhRCxDQWREOztHQUFNTCx3Qjs7QUFnQk4sSUFBTU0sTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDUixNQUFNLENBQUMsQ0FBRCxDQUFQLENBRGY7QUFBQSxNQUNaUyxLQURZO0FBQUEsTUFDTFAsUUFESzs7QUFFbkJELDBCQUF3QixDQUFDQyxRQUFELENBQXhCO0FBRUEsTUFBTVEsTUFBTSxHQUFHO0FBQ2JDLGVBQVcsRUFBRTtBQUNY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ZjVlN2RhYTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXHJcbmNvbnN0IGNvdmVycyA9IFsnY292ZXItNS5wbmcnLCAnY292ZXItMi5wbmcnLCAnY292ZXItMy5wbmcnLCAnY292ZXItNC5wbmcnLCAnY292ZXItMS5wbmcnXVxyXG5cclxuY29uc3QgdXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0ID0gKHNldENvdmVyKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1heEluZGV4ID0gY292ZXJzLmxlbmd0aCAtMVxyXG4gICAgbGV0IGluZGV4ID0gMFxyXG5cclxuICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIC8vICAgbGV0IHBvc2l0aW9uID0gKytpbmRleFxyXG4gICAgLy8gICBpZihwb3NpdGlvbiA+IG1heEluZGV4KSB7XHJcbiAgICAvLyAgICAgcG9zaXRpb24gPSAwXHJcbiAgICAvLyAgICAgaW5kZXggPSAwXHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgc2V0Q292ZXIoY292ZXJzW3Bvc2l0aW9uXSlcclxuICAgIC8vIH0sIDcwMDApXHJcbiAgfSwgW10pXHJcbn1cclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCBbY292ZXIsIHNldENvdmVyXSA9IHVzZVN0YXRlKGNvdmVyc1swXSlcclxuICB1c2VDb3ZlclRyYW5zaXRpb25FZmZlY3Qoc2V0Q292ZXIpXHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRleHRTaGFkb3cxOiB7XHJcbiAgICAgIHRleHRTaGFkb3c6ICcxcHggMXB4IDJweCAjMzAwOTU0J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJwcmVsb2FkZWQtaW1hZ2VzXCI+XHJcbiAgICAgICAge2NvdmVycy5tYXAoY292ZXIgPT4gPGltZyBrZXk9e2NvdmVyfSBzcmM9e2AvY292ZXJzLyR7Y292ZXJ9YH0gd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIGFsdD17Y292ZXJ9IC8+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvY292ZXJzLyR7Y292ZXJ9JylgLCBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJywgdHJhbnNpdGlvbjogJzFzJyB9IH1cclxuICAgICAgICBjbGFzc05hbWU9e2Bob21lcGFnZSB0ZXh0LWRlZmF1bHQgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktOFwiPlxyXG4gICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qc2VjdGlvbiovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IG1iLTQgbGc6bWItMTYgbGc6cHQtMjRcIiBzdHlsZT17IHsgbWluSGVpZ2h0OiAnNzEwcHgnIH0gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTQgbWQ6dy0zLzQgbGc6dy0yLzRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgbGc6dGV4dC01eGwgdGV4dC13aGl0ZSBmb250LXBvcHBpbnMgbWItNFwiIHN0eWxlPXtzdHlsZXMudGV4dFNoYWRvdzF9PlxyXG4gICAgICAgICAgICAgICAgICBCZWF1dHkgYW5kIGdyb29taW5nIHNlcnZpY2VzIGF0IHlvdXIgZG9vcnN0ZXBcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW4gbXQtNCBtYi00IHRleHQtbGcgbGVhZGluZy02IHRleHQtd2hpdGUgbGc6YmxvY2sgdGV4dC1zZWNvbmRhcnlcIiBzdHlsZT17c3R5bGVzLnRleHRTaGFkb3cxfT5cclxuICAgICAgICAgICAgICAgICAgRmluZCB0aGUgYmVzdCBiZWF1dHkgYW5kIGdyb29taW5nIHByb2Zlc3Npb25hbHMgaW4gRHVibGluLlxyXG4gICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICBCb29rIHRyZWF0bWVudHMgd2l0aCBqdXN0IGEgZmV3IGNsaWNrcy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0xeGwgdGV4dC1ncmF5LTQwMFwiPldlIGFyZSBjb21pbmcgc29vbiE8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZm9vdGVyYXBwLnN2Z1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtbC00IG9wYWNpdHktNTAgY3Vyc29yLW5vdC1hbGxvd2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZm9vdGVycGxheS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxyXG4iXSwic291cmNlUm9vdCI6IiJ9