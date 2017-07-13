webpackJsonp([3],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76b4b1da_node_modules_vue_loader_lib_selector_type_template_index_0_People_vue__ = __webpack_require__(205);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76b4b1da_node_modules_vue_loader_lib_selector_type_template_index_0_People_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/People.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] People.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76b4b1da", Component.options)
  } else {
    hotAPI.reload("data-v-76b4b1da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {

      loadingDetail: true,
      users: [],
      term: ""
    };
  },
  mounted: function mounted() {

    console.log('People Component mounted.');
  },

  watch: {
    // whenever question changes, this function will run
    term: function term(val) {
      this.fetchUsers(this.term);
    }
  },
  methods: {
    search: function search(event) {
      event.preventDefault();
      this.fetchUsers(this.term);
    }

  }
});

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "col-md-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('form', {
    on: {
      "submit": _vm.search
    }
  }, [_c('md-input-container', {
    attrs: {
      "md-inline": ""
    }
  }, [_c('label', [_vm._v("Search")]), _vm._v(" "), _c('md-input', {
    on: {
      "click": _vm.search
    },
    model: {
      value: (_vm.term),
      callback: function($$v) {
        _vm.term = $$v
      },
      expression: "term"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [(_vm.users.length == 0) ? _c('span', [_vm._v("\n        No users found. Try another search term.\n      ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.users), function(user) {
    return _c('md-card', {
      key: user.email,
      attrs: {
        "md-with-hover": ""
      }
    }, [_c('md-card-header', [_c('md-avatar', [(user.image) ? _c('span', [_c('img', {
      attrs: {
        "src": user.image,
        "alt": user.name
      }
    })]) : _c('span', [_c('img', {
      attrs: {
        "src": "http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png",
        "alt": user.name
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "md-title"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('div', {
      staticClass: "md-subhead"
    }, [_vm._v(_vm._s(user.email))])], 1), _vm._v(" "), _c('md-card-content', [(user.bio) ? _c('span', [_vm._v("\n            " + _vm._s(user.bio) + "\n          ")]) : _c('span', [_vm._v("\n            This user has no bio\n          ")])]), _vm._v(" "), _c('md-card-actions', [_c('md-button', [_vm._v("Follow")]), _vm._v(" "), _c('md-button', [_vm._v("View Profile")])], 1)], 1)
  })], 2)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76b4b1da", esExports)
  }
}

/***/ })

});