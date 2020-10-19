webpackHotUpdate_N_E("pages/index",{

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



var Category = function Category(_ref) {
  var title = _ref.title,
      imageUrl = _ref.imageUrl,
      description = _ref.description;
  return __jsx("div", {
    className: "w-full p-6 mx-auto md:p-4 md:w-1/4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("div", {
    className: "w-full -mt-10 overflow-hidden bg-white rounded-lg rounded-t-none shadow-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h3", {
    className: "px-3 py-2 text-xl font-bold tracking-wide text-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, title), __jsx("div", {
    className: "flex items-center justify-between px-3 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "text-gray-600",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, description))));
};

_c = Category;

var Categories = function Categories() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      categories = _useState[0],
      setCategories = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function getCategories() {
      return _getCategories.apply(this, arguments);
    }

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

    getCategories();
  }, []);
  return __jsx("section", {
    className: "flex container py-12 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 10
    }
  }, __jsx("div", {
    className: "w-full md:w-2/3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-indigo-800 sm:text-5xl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "The best professionals are ready to assist you directly from the comfort of your own home.")), __jsx("div", {
    className: "flex flex-wrap -m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, categories && categories.map(function (category) {
    return __jsx(Category, {
      key: category.title,
      title: category.title,
      description: category.description,
      imageUrl: category.image_url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    });
  })));
};

_s(Categories, "+ijgB8ROEl0Dkz53OTIi8GynN6s=");

_c2 = Categories;
/* harmony default export */ __webpack_exports__["default"] = (Categories);

var _c, _c2;

$RefreshReg$(_c, "Category");
$RefreshReg$(_c2, "Categories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9wcmVzZW50YXRpb24uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJ0aXRsZSIsImltYWdlVXJsIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInVzZUVmZmVjdCIsImdldENhdGVnb3JpZXMiLCJDYXRlZ29yaWVzQVBJIiwiZmV0Y2hBbGwiLCJyZXNwb25zZSIsIm1hcCIsImNhdGVnb3J5IiwiaW1hZ2VfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUEsU0FDZjtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUVBQWY7QUFDRSxTQUFLLEVBQUc7QUFBRUMscUJBQWUsZ0JBQVNGLFFBQVQ7QUFBakIsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyw0RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RUQsS0FBekUsQ0FERixFQUdFO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDRSxXQUFqQyxDQURGLENBSEYsQ0FMRixDQURlO0FBQUEsQ0FBakI7O0tBQU1ILFE7O0FBZ0JOLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDaEJDLFVBRGdCO0FBQUEsTUFDSkMsYUFESTs7QUFFdkJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLGFBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsd01BQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUIsSUFBSUMsOERBQUosR0FBb0JDLFFBQXBCLEVBRHpCOztBQUFBO0FBQ1FDLHdCQURSO0FBRUVMLDZCQUFhLENBQUNLLFFBQUQsQ0FBYjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFLZEgsaUJBQWE7QUFDZCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FBTztBQUFTLGFBQVMsRUFBQyw4QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxzREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQURGLENBREssRUFPTDtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILFVBQVUsSUFBSUEsVUFBVSxDQUFDTyxHQUFYLENBQWUsVUFBQUMsUUFBUTtBQUFBLFdBQUksTUFBQyxRQUFEO0FBQVUsU0FBRyxFQUFFQSxRQUFRLENBQUNkLEtBQXhCO0FBQStCLFdBQUssRUFBRWMsUUFBUSxDQUFDZCxLQUEvQztBQUFzRCxpQkFBVyxFQUFFYyxRQUFRLENBQUNaLFdBQTVFO0FBQXlGLGNBQVEsRUFBRVksUUFBUSxDQUFDQyxTQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUF2QixDQURqQixDQVBLLENBQVA7QUFXRCxDQXJCRDs7R0FBTVgsVTs7TUFBQUEsVTtBQXVCU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzA1NDcwNTQ2YTU5OGE3YmY4NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yaWVzQVBJIGZyb20gXCIuLi8uLi9saWIvYXBpL2NhdGVnb3JpZXNBcGlcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKHt0aXRsZSwgaW1hZ2VVcmwsIGRlc2NyaXB0aW9ufSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBteC1hdXRvIG1kOnAtNCBtZDp3LTEvNFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBiZy1ncmF5LTMwMCBiZy1jZW50ZXIgYmctY292ZXIgcm91bmRlZC1sZyBzaGFkb3ctbWRcIlxyXG4gICAgICBzdHlsZT17IHsgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2VVcmx9KWB9IH0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCAtbXQtMTAgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbGcgcm91bmRlZC10LW5vbmUgc2hhZG93LWxnXCI+XHJcbiAgICAgIDxoMyBjbGFzc05hbWU9XCJweC0zIHB5LTIgdGV4dC14bCBmb250LWJvbGQgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktODAwXCI+e3RpdGxlfTwvaDM+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB5LTJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBuZXcgQ2F0ZWdvcmllc0FQSSgpLmZldGNoQWxsKClcclxuICAgICAgc2V0Q2F0ZWdvcmllcyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIGdldENhdGVnb3JpZXMoKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBjb250YWluZXIgcHktMTIgbXgtYXV0b1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzNcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInB4LTIgcHktMiBtYi0xMCB0ZXh0LTN4bCB0ZXh0LWluZGlnby04MDAgc206dGV4dC01eGxcIj5cclxuICAgICAgICBUaGUgYmVzdCBwcm9mZXNzaW9uYWxzIGFyZSByZWFkeSB0byBhc3Npc3QgeW91IGRpcmVjdGx5IGZyb20gdGhlIGNvbWZvcnQgb2YgeW91ciBvd24gaG9tZS5cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tNFwiPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeS50aXRsZX0gdGl0bGU9e2NhdGVnb3J5LnRpdGxlfSBkZXNjcmlwdGlvbj17Y2F0ZWdvcnkuZGVzY3JpcHRpb259IGltYWdlVXJsPXtjYXRlZ29yeS5pbWFnZV91cmx9IC8+KX1cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9