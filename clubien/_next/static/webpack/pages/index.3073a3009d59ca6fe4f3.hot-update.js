webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/landing/categories.js":
/*!**********************************************!*\
  !*** ./src/components/landing/categories.js ***!
  \**********************************************/
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
    _jsxFileName = "C:\\Users\\muril\\Documents\\Github\\clubien-web\\src\\components\\landing\\categories.js",
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
    className: "container py-12 mx-auto mb-16",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9jYXRlZ29yaWVzLmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwidGl0bGUiLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiQ2F0ZWdvcmllcyIsInVzZVN0YXRlIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ1c2VFZmZlY3QiLCJnZXRDYXRlZ29yaWVzIiwiQ2F0ZWdvcmllc0FQSSIsImZldGNoQWxsIiwicmVzcG9uc2UiLCJtYXAiLCJjYXRlZ29yeSIsImltYWdlX3VybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxRQUFUO0FBQUEsTUFBbUJDLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBLFNBQ2Y7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlFQUFmO0FBQ0UsU0FBSyxFQUFHO0FBQUVDLHFCQUFlLGdCQUFTRixRQUFUO0FBQWpCLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsNEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUVELEtBQXpFLENBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0UsV0FBakMsQ0FERixDQUhGLENBTEYsQ0FEZTtBQUFBLENBQWpCOztLQUFNSCxROztBQWdCTixJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ2hCQyxVQURnQjtBQUFBLE1BQ0pDLGFBREk7O0FBRXZCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxhQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHdNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCLElBQUlDLDhEQUFKLEdBQW9CQyxRQUFwQixFQUR6Qjs7QUFBQTtBQUNRQyx3QkFEUjtBQUVFTCw2QkFBYSxDQUFDSyxRQUFELENBQWI7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBS2RILGlCQUFhO0FBQ2QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQU87QUFBUyxhQUFTLEVBQUMsK0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsc0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFERixDQURLLEVBT0w7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSCxVQUFVLElBQUlBLFVBQVUsQ0FBQ08sR0FBWCxDQUFlLFVBQUFDLFFBQVE7QUFBQSxXQUFJLE1BQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsUUFBUSxDQUFDZCxLQUF4QjtBQUErQixXQUFLLEVBQUVjLFFBQVEsQ0FBQ2QsS0FBL0M7QUFBc0QsaUJBQVcsRUFBRWMsUUFBUSxDQUFDWixXQUE1RTtBQUF5RixjQUFRLEVBQUVZLFFBQVEsQ0FBQ0MsU0FBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFKO0FBQUEsR0FBdkIsQ0FEakIsQ0FQSyxDQUFQO0FBV0QsQ0FyQkQ7O0dBQU1YLFU7O01BQUFBLFU7QUF1QlNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMwNzNhMzAwOWQ1OWNhNmZlNGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcmllc0FQSSBmcm9tIFwiLi4vLi4vbGliL2FwaS9jYXRlZ29yaWVzQXBpXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBDYXRlZ29yeSA9ICh7dGl0bGUsIGltYWdlVXJsLCBkZXNjcmlwdGlvbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwLTYgbXgtYXV0byBtZDpwLTQgbWQ6dy0xLzRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgYmctZ3JheS0zMDAgYmctY2VudGVyIGJnLWNvdmVyIHJvdW5kZWQtbGcgc2hhZG93LW1kXCJcclxuICAgICAgc3R5bGU9eyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlVXJsfSlgfSB9PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgLW10LTEwIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIHJvdW5kZWQtdC1ub25lIHNoYWRvdy1sZ1wiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwicHgtMyBweS0yIHRleHQteGwgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTgwMFwiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBweS0yXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPntkZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldENhdGVnb3JpZXMoKSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbmV3IENhdGVnb3JpZXNBUEkoKS5mZXRjaEFsbCgpXHJcbiAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICBnZXRDYXRlZ29yaWVzKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS0xMiBteC1hdXRvIG1iLTE2XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvM1wiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bFwiPlxyXG4gICAgICAgIFlvdSBkb24ndCBuZWVkIHRvIHNwZW5kIHRpbWUgb24gdHJhZmZpYyBhbnltb3JlLlxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS00XCI+XHJcbiAgICAgIHtjYXRlZ29yaWVzICYmIGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxDYXRlZ29yeSBrZXk9e2NhdGVnb3J5LnRpdGxlfSB0aXRsZT17Y2F0ZWdvcnkudGl0bGV9IGRlc2NyaXB0aW9uPXtjYXRlZ29yeS5kZXNjcmlwdGlvbn0gaW1hZ2VVcmw9e2NhdGVnb3J5LmltYWdlX3VybH0gLz4pfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=