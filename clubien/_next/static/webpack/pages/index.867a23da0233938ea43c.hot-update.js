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
    } // getCategories()


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
    className: "w-full md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "px-2 py-2 mb-10 text-3xl text-indigo-800 sm:text-5xl lg:pr-24",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Beauty services", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), "whenever you need"), __jsx("p", {
    className: "text-xl leading-relaxed",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "The best professionals are ready to assist you,", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), "directly from the comfort of your own home.")), __jsx("div", {
    className: "flex flex-wrap -m-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full p-6 mx-auto md:p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 9
    }
  }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGFuZGluZy9wcmVzZW50YXRpb24uanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJ0aXRsZSIsImltYWdlVXJsIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJDYXRlZ29yaWVzIiwidXNlU3RhdGUiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsInVzZUVmZmVjdCIsImdldENhdGVnb3JpZXMiLCJDYXRlZ29yaWVzQVBJIiwiZmV0Y2hBbGwiLCJyZXNwb25zZSIsImhlaWdodCIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBRUMsS0FBRixRQUFFQSxLQUFGO0FBQUEsTUFBU0MsUUFBVCxRQUFTQSxRQUFUO0FBQUEsTUFBbUJDLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBLFNBQ2Y7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlFQUFmO0FBQ0UsU0FBSyxFQUFHO0FBQUVDLHFCQUFlLGdCQUFTRixRQUFUO0FBQWpCLEtBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsNEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHlEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUVELEtBQXpFLENBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyw2Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQ0UsV0FBakMsQ0FERixDQUhGLENBTEYsQ0FEZTtBQUFBLENBQWpCOztLQUFNSCxROztBQWdCTixJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ2hCQyxVQURnQjtBQUFBLE1BQ0pDLGFBREk7O0FBRXZCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxhQUREO0FBQUE7QUFBQSxNQUtkOzs7QUFMYztBQUFBLHdNQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCLElBQUlDLDhEQUFKLEdBQW9CQyxRQUFwQixFQUR6Qjs7QUFBQTtBQUNRQyx3QkFEUjtBQUVFTCw2QkFBYSxDQUFDSyxRQUFELENBQWI7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7QUFNZixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FBTztBQUFTLGFBQVMsRUFBQyw4QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQywrREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzQkFERixFQU1FO0FBQUcsYUFBUyxFQUFDLHlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLGdEQU5GLENBREssRUFjTDtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLHNDQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxNQURIO0FBRUxDLFlBQU0sRUFBRSw4RUFGSDtBQUdMWCxxQkFBZSxnQkFBUyxpRUFBVDtBQUhWLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FkSyxDQUFQO0FBMkJELENBckNEOztHQUFNQyxVOztNQUFBQSxVO0FBdUNTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NjdhMjNkYTAyMzM5MzhlYTQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhdGVnb3JpZXNBUEkgZnJvbSBcIi4uLy4uL2xpYi9hcGkvY2F0ZWdvcmllc0FwaVwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoe3RpdGxlLCBpbWFnZVVybCwgZGVzY3JpcHRpb259KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcC02IG14LWF1dG8gbWQ6cC00IG1kOnctMS80XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IGJnLWdyYXktMzAwIGJnLWNlbnRlciBiZy1jb3ZlciByb3VuZGVkLWxnIHNoYWRvdy1tZFwiXHJcbiAgICAgIHN0eWxlPXsgeyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZVVybH0pYH0gfT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIC1tdC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyByb3VuZGVkLXQtbm9uZSBzaGFkb3ctbGdcIj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT1cInB4LTMgcHktMiB0ZXh0LXhsIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIHRleHQtZ3JheS04MDBcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHktMlwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57ZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5jb25zdCBDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKCkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG5ldyBDYXRlZ29yaWVzQVBJKCkuZmV0Y2hBbGwoKVxyXG4gICAgICBzZXRDYXRlZ29yaWVzKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgLy8gZ2V0Q2F0ZWdvcmllcygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGNvbnRhaW5lciBweS0xMiBteC1hdXRvXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMlwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicHgtMiBweS0yIG1iLTEwIHRleHQtM3hsIHRleHQtaW5kaWdvLTgwMCBzbTp0ZXh0LTV4bCBsZzpwci0yNFwiPlxyXG4gICAgICAgIEJlYXV0eSBzZXJ2aWNlc1xyXG4gICAgICAgIDxici8+XHJcbiAgICAgICAgd2hlbmV2ZXIgeW91IG5lZWRcclxuICAgICAgPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICBUaGUgYmVzdCBwcm9mZXNzaW9uYWxzIGFyZSByZWFkeSB0byBhc3Npc3QgeW91LCBcclxuICAgICAgICA8YnIvPlxyXG4gICAgICAgIGRpcmVjdGx5IGZyb20gdGhlIGNvbWZvcnQgb2YgeW91ciBvd24gaG9tZS5cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbS00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHAtNiBteC1hdXRvIG1kOnAtNFwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1jZW50ZXIgYmctY292ZXIgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3cocmdiKDIwOSwgMjExLCAyMjEpIDJweCA0cHggNnB4KSBvcGFjaXR5KDAuOTUpIGh1ZS1yb3RhdGUoLTE1ZGVnKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgkeydodHRwczovL211cmlsbG92ZXMuZ2l0aHViLmlvL3N0YXRpYy9tZWRpYS9iZWF1dHktMS40MTMxY2Y4Mi5qcGcnfSlgXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXNcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==