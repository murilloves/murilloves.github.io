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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXIuanMiXSwibmFtZXMiOlsiY292ZXJzIiwidXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0Iiwic2V0Q292ZXIiLCJ1c2VFZmZlY3QiLCJtYXhJbmRleCIsImxlbmd0aCIsImluZGV4Iiwic2V0SW50ZXJ2YWwiLCJwb3NpdGlvbiIsIkJhbm5lciIsInVzZVN0YXRlIiwiY292ZXIiLCJzdHlsZXMiLCJ0ZXh0U2hhZG93MSIsInRleHRTaGFkb3ciLCJtYXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwidHJhbnNpdGlvbiIsIm1pbkhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixhQUEvQixFQUE4QyxhQUE5QyxFQUE2RCxhQUE3RCxDQUFmOztBQUVBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsUUFBRCxFQUFjO0FBQUE7O0FBQzdDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxRQUFRLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxHQUFlLENBQWhDO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLENBQVo7QUFFQUMsZUFBVyxDQUFDLFlBQU07QUFDaEIsVUFBSUMsUUFBUSxHQUFHLEVBQUVGLEtBQWpCOztBQUNBLFVBQUdFLFFBQVEsR0FBR0osUUFBZCxFQUF3QjtBQUN0QkksZ0JBQVEsR0FBRyxDQUFYO0FBQ0FGLGFBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBQ0RKLGNBQVEsQ0FBQ0YsTUFBTSxDQUFDUSxRQUFELENBQVAsQ0FBUjtBQUNELEtBUFUsRUFPUixJQVBRLENBQVg7QUFRRCxHQVpRLEVBWU4sRUFaTSxDQUFUO0FBYUQsQ0FkRDs7R0FBTVAsd0I7O0FBZ0JOLElBQU1RLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQ1YsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQURmO0FBQUEsTUFDWlcsS0FEWTtBQUFBLE1BQ0xULFFBREs7O0FBRW5CRCwwQkFBd0IsQ0FBQ0MsUUFBRCxDQUF4QjtBQUVBLE1BQU1VLE1BQU0sR0FBRztBQUNiQyxlQUFXLEVBQUU7QUFDWEMsZ0JBQVUsRUFBRTtBQUREO0FBREEsR0FBZjtBQU1BLFNBQ0UsbUVBQ0U7QUFBSyxNQUFFLEVBQUMsa0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxNQUFNLENBQUNlLEdBQVAsQ0FBVyxVQUFBSixLQUFLO0FBQUEsV0FBSTtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFpQixTQUFHLG9CQUFhQSxLQUFiLENBQXBCO0FBQTBDLFdBQUssRUFBQyxHQUFoRDtBQUFvRCxZQUFNLEVBQUMsR0FBM0Q7QUFBK0QsU0FBRyxFQUFFQSxLQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUFoQixDQURILENBREYsRUFJRTtBQUNFLFNBQUssRUFBRTtBQUNMSyxxQkFBZSx5QkFBa0JMLEtBQWxCLE9BRFY7QUFFTE0sc0JBQWdCLEVBQUUsV0FGYjtBQUdMQyx3QkFBa0IsRUFBRSxRQUhmO0FBSUxDLGdCQUFVLEVBQUU7QUFKUCxLQURUO0FBT0UsYUFBUyxnRUFQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUU7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUE2QyxTQUFLLEVBQUc7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsNkRBQWQ7QUFBNEUsU0FBSyxFQUFFUixNQUFNLENBQUNDLFdBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREYsRUFJRTtBQUFHLGFBQVMsRUFBQyx1RUFBYjtBQUFxRixTQUFLLEVBQUVELE1BQU0sQ0FBQ0MsV0FBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsNENBSkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVlFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyw4Q0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixDQVpGLENBREYsQ0FERixDQU5GLENBUkYsQ0FKRixDQURGO0FBaURELENBM0REOztJQUFNSixNO1VBRUpSLHdCOzs7S0FGSVEsTTtBQTZEU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMzMzQ3YmVlZTZkODgzODY0N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXHJcbmNvbnN0IGNvdmVycyA9IFsnY292ZXItNS5wbmcnLCAnY292ZXItMi5wbmcnLCAnY292ZXItMy5wbmcnLCAnY292ZXItNC5wbmcnLCAnY292ZXItMS5wbmcnXVxyXG5cclxuY29uc3QgdXNlQ292ZXJUcmFuc2l0aW9uRWZmZWN0ID0gKHNldENvdmVyKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1heEluZGV4ID0gY292ZXJzLmxlbmd0aCAtMVxyXG4gICAgbGV0IGluZGV4ID0gMFxyXG5cclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IHBvc2l0aW9uID0gKytpbmRleFxyXG4gICAgICBpZihwb3NpdGlvbiA+IG1heEluZGV4KSB7XHJcbiAgICAgICAgcG9zaXRpb24gPSAwXHJcbiAgICAgICAgaW5kZXggPSAwXHJcbiAgICAgIH1cclxuICAgICAgc2V0Q292ZXIoY292ZXJzW3Bvc2l0aW9uXSlcclxuICAgIH0sIDcwMDApXHJcbiAgfSwgW10pXHJcbn1cclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICBjb25zdCBbY292ZXIsIHNldENvdmVyXSA9IHVzZVN0YXRlKGNvdmVyc1swXSlcclxuICB1c2VDb3ZlclRyYW5zaXRpb25FZmZlY3Qoc2V0Q292ZXIpXHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHRleHRTaGFkb3cxOiB7XHJcbiAgICAgIHRleHRTaGFkb3c6ICcxcHggMXB4IDJweCAjMzAwOTU0J1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgaWQ9XCJwcmVsb2FkZWQtaW1hZ2VzXCI+XHJcbiAgICAgICAge2NvdmVycy5tYXAoY292ZXIgPT4gPGltZyBrZXk9e2NvdmVyfSBzcmM9e2AvY292ZXJzLyR7Y292ZXJ9YH0gd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIGFsdD17Y292ZXJ9IC8+KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvY292ZXJzLyR7Y292ZXJ9JylgLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzFzJ1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaG9tZXBhZ2UgdGV4dC1kZWZhdWx0IHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LThcIj5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKnNlY3Rpb24qL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBtYi00IGxnOm1iLTE2IGxnOnB0LTI0XCIgc3R5bGU9eyB7IG1pbkhlaWdodDogJzcxMHB4JyB9IH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC00IG1kOnctMy80IGxnOnctMi80XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIGxnOnRleHQtNXhsIHRleHQtd2hpdGUgZm9udC1wb3BwaW5zIG1iLTRcIiBzdHlsZT17c3R5bGVzLnRleHRTaGFkb3cxfT5cclxuICAgICAgICAgICAgICAgICAgQmVhdXR5IGFuZCBncm9vbWluZyBzZXJ2aWNlcyBhdCB5b3VyIGRvb3JzdGVwXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGlkZGVuIG10LTQgbWItNCB0ZXh0LWxnIGxlYWRpbmctNiB0ZXh0LXdoaXRlIGxnOmJsb2NrIHRleHQtc2Vjb25kYXJ5XCIgc3R5bGU9e3N0eWxlcy50ZXh0U2hhZG93MX0+XHJcbiAgICAgICAgICAgICAgICAgIEZpbmQgdGhlIGJlc3QgYmVhdXR5IGFuZCBncm9vbWluZyBwcm9mZXNzaW9uYWxzIGluIER1Ymxpbi5cclxuICAgICAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICAgICAgQm9vayB0cmVhdG1lbnRzIHdpdGgganVzdCBhIGZldyBjbGlja3MuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTF4bCB0ZXh0LWdyYXktNDAwXCI+V2UgYXJlIGNvbWluZyBzb29uITwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGcgYnRuLWRlZmF1bHQgYnRuLXdoaXRlIGJ0bi1yb3VuZGVkXCI+R2V0IEVhcmx5IEFjY2VzczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwib3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWRcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zvb3RlcmFwcC5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWwtNCBvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zvb3RlcnBsYXkuc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=