webpackJsonp([2],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76b4b1da_node_modules_vue_loader_lib_selector_type_template_index_0_People_vue__ = __webpack_require__(202);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_People_vue___default.a,
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
};

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('form', {
    on: {
      "submit": _vm.search
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Search:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.term),
      expression: "term"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "term"
    },
    domProps: {
      "value": (_vm.term)
    },
    on: {
      "change": _vm.search,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.term = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.users.length == 0) ? _c('span', [_vm._v("\n        No users found. Try another search term.\n    ")]) : _vm._e(), _vm._v(" "), _c('ul', {
    staticClass: "media-list"
  }, _vm._l((_vm.users), function(user) {
    return _c('li', {
      key: user.email,
      staticClass: "media"
    }, [_c('router-link', {
      attrs: {
        "to": {
          name: 'profileId',
          params: {
            id: user.id
          }
        }
      }
    }, [_c('div', {
      staticClass: "media-left"
    }, [(user.image) ? _c('span', [_c('img', {
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
      staticClass: "media-body"
    }, [_c('h4', {
      staticClass: "media-heading"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(user.bio))])])])], 1)
  }))])])
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