webpackJsonp([0],{

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a1e5862c_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(216);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a1e5862c_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1e5862c", Component.options)
  } else {
    hotAPI.reload("data-v-a1e5862c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    mounted: function mounted() {

        console.log('Home Component mounted.');
    },

    methods: {}
};

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "jumbotron"
  }, [_c('h1', [_vm._v("BeerIO")]), _vm._v(" "), _c('p', [_c('small', [_vm._v("An open source social app for craft beer drinkers! A way to discuss and communicate with other crafters.")])]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "href": "/authregister",
      "role": "button"
    }
  }, [_vm._v("Create an account")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "href": "/authlogin",
      "role": "button"
    }
  }, [_vm._v("Login")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "col-md-4"
  }, [_c('h2', [_vm._v("Discover")]), _vm._v(" "), _c('p', [_vm._v("Discover new craft beers that are taylored to your taste profile")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('h2', [_vm._v("Communicate")]), _vm._v(" "), _c('p', [_vm._v("Discuss brews with other users that have or don't have similar taste as you")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-4"
  }, [_c('h2', [_vm._v("Interact")]), _vm._v(" "), _c('p', [_vm._v("Save and check-in beers as a reminder for later!")])])])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a1e5862c", esExports)
  }
}

/***/ })

});