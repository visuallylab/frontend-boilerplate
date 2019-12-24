webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getRelativePath, breakpoints, media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-media-query */ "./node_modules/styled-media-query/dist/styled-media-query.es.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environment */ "./environment.ts");


function getRelativePath(path) {
  console.log(NODE_ENVf);

  if (_environment__WEBPACK_IMPORTED_MODULE_1__["GITHUB"]) {
    var valid = /[^\/].*/g.exec(path);
    return valid ? "/".concat(_environment__WEBPACK_IMPORTED_MODULE_1__["PROJ_NAME"], "/").concat(valid[0]) : "/".concat(_environment__WEBPACK_IMPORTED_MODULE_1__["PROJ_NAME"], "/");
  }

  return path;
}
var breakpoints = {
  xs: '0',
  sm: '48em',
  md: '64em',
  lg: '75em'
};
var media = Object(styled_media_query__WEBPACK_IMPORTED_MODULE_0__["generateMedia"])(breakpoints);

/***/ })

})
//# sourceMappingURL=index.js.51bcf16bcea2d715bcde.hot-update.js.map