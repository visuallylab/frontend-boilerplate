webpackHotUpdate("static/development/pages/index.js",{

/***/ "./environment.ts":
/*!************************!*\
  !*** ./environment.ts ***!
  \************************/
/*! exports provided: env, GITHUB, PROJ_NAME, NODE_ENV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB", function() { return GITHUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJ_NAME", function() { return PROJ_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_ENV", function() { return NODE_ENV; });
var env = function env(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return process.env[key] || defaultValue;
};
var GITHUB = env('DEPLOY_ENV') === 'github';
var PROJ_NAME = env('PROJ_NAME');
var NODE_ENV = env('NODE_ENV');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.b5c160af7a60f454fe18.hot-update.js.map