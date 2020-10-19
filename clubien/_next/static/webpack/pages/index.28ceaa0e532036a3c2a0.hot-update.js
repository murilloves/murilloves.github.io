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
    className: "container py-12 mx-auto",
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
  }, "You don't need to spend time on traffic anymore.")), __jsx("div", {
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

/***/ }),

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
  }), __jsx(_components_landing_categories__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), __jsx(_components_landing_professionals__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9wcmVzZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDYXRlZ29yeSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmRJbWFnZSIsIkNhdGVnb3JpZXMiLCJ1c2VTdGF0ZSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidXNlRWZmZWN0IiwiZ2V0Q2F0ZWdvcmllcyIsIkNhdGVnb3JpZXNBUEkiLCJmZXRjaEFsbCIsInJlc3BvbnNlIiwibWFwIiwiY2F0ZWdvcnkiLCJpbWFnZV91cmwiLCJJbmRleCIsInNtYWxsQ2hhdElkIiwicHJvY2VzcyIsImdvb2dsZUFuYWx5dGljc0lkIiwiX19odG1sIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUEsU0FDZjtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUVBQWY7QUFDRSxTQUFLLEVBQUc7QUFBRUMscUJBQWUsZ0JBQVNGLFFBQVQ7QUFBakIsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyw0RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMseURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RUQsS0FBekUsQ0FE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QSxJQVBKLENBRkssRUFxQkwsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJLLEVBdUJMLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCSyxFQXlCTCxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6QkssRUEyQkwsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JLLEVBNkJMLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTdCSyxFQStCTCxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkssQ0FBUDtBQWtDRCxDQXRDRDs7S0FBTUYsSztBQXdDUyxxRUFBQUssNERBQVMsQ0FBQ0wsS0FBRCxDQUF4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yOGNlYWEwZTUzMjAzNmEzYzJhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhdGVnb3JpZXNBUEkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvY2F0ZWdvcmllc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoe3RpdGxlLCBpbWFnZVVybCwgZGVzY3JpcHRpb259KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IG14LWF1dG8gbWQ6cC00IG1kOnctMS80XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IGJnLWdyYXktMzAwIGJnLWNlbnRlciBiZy1jb3ZlciByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVVybH0pYH0gfT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIC1tdC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyByb3VuZGVkLXQtbm9uZSBzaGFkb3ctbGdcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInB4LTMgcHktMiB0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIHRleHQtZ3JheS04MDBcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHktMlwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57ZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldyBDYXRlZ29yaWVzQVBJKCkuZmV0Y2hBbGwoKVxyXG4gICAgICBzZXRDYXRlZ29yaWVzKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgZ2V0Q2F0ZWdvcmllcygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktMTIgbXgtYXV0b1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzNcIj5cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cInB4LTIgcHktMiBtYi0xMCB0ZXh0LTN4bCB0ZXh0LWluZGlnby04MDAgc206dGV4dC01eGxcIj5cclxuICAgICAgICBZb3UgZG9uJ3QgbmVlZCB0byBzcGVuZCB0aW1lIG9uIHRyYWZmaWMgYW55bW9yZS5cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW0tNFwiPlxyXG4gICAgICB7Y2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8Q2F0ZWdvcnkga2V5PXtjYXRlZ29yeS50aXRsZX0gdGl0bGU9e2NhdGVnb3J5LnRpdGxlfSBkZXNjcmlwdGlvbj17Y2F0ZWdvcnkuZGVzY3JpcHRpb259IGltYWdlVXJsPXtjYXRlZ29yeS5pbWFnZV91cmx9IC8+KX1cclxuICAgIDwvZGl2PlxyXG4gIDwvc2VjdGlvbj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9sYXlvdXRzL2VtcHR5J1xyXG5pbXBvcnQge3dpdGhSZWR1eH0gZnJvbSAnLi4vbGliL3JlZHV4J1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9iYW5uZXInXHJcbmltcG9ydCBQcmVzZW50YXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL3ByZXNlbnRhdGlvbidcclxuaW1wb3J0IFByb2Zlc3Npb25hbHMgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL3Byb2Zlc3Npb25hbHMnXHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9jYXRlZ29yaWVzJ1xyXG5pbXBvcnQgRG93bmxvYWRBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nL2Rvd25sb2FkQXBwJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZy9mb290ZXInXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBzbWFsbENoYXRJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NNQUxMX0NIQVRfSUQ7XHJcbiAgY29uc3QgZ29vZ2xlQW5hbHl0aWNzSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTkFMWVRJQ1NfSUQ7XHJcblxyXG4gIHJldHVybiA8TGF5b3V0PlxyXG5cclxuICAgIDxIZWFkPlxyXG4gICAgICB7LyogU21hbGwgQ2hhdCAqL31cclxuICAgICAge3NtYWxsQ2hhdElkICYmIDxzY3JpcHQgc3JjPXtgaHR0cHM6Ly9lbWJlZC5zbWFsbC5jaGF0LyR7c21hbGxDaGF0SWR9LmpzYH0gYXN5bmMgLz59XHJcblxyXG4gICAgICB7LyogR29vZ2xlIEFuYWx5dGljcyAqL31cclxuICAgICAge2dvb2dsZUFuYWx5dGljc0lkICYmIDxzY3JpcHQgYXN5bmMgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2dvb2dsZUFuYWx5dGljc0lkfWB9IC8+fVxyXG4gICAgICB7Z29vZ2xlQW5hbHl0aWNzSWQgJiZcclxuICAgICAgICA8c2NyaXB0IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTkFMWVRJQ1NfSUR9Jyk7XHJcbiAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgPC9IZWFkPlxyXG5cclxuICAgIDxCYW5uZXIgLz5cclxuXHJcbiAgICA8UHJlc2VudGF0aW9uLz5cclxuXHJcbiAgICA8Q2F0ZWdvcmllcyAvPlxyXG5cclxuICAgIDxQcm9mZXNzaW9uYWxzIC8+XHJcblxyXG4gICAgPERvd25sb2FkQXBwIC8+XHJcblxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICA8L0xheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KEluZGV4KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9