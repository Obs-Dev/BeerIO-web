webpackJsonp([6],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_507f46ee_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(203);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_507f46ee_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-507f46ee", Component.options)
  } else {
    hotAPI.reload("data-v-507f46ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 190:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      email: null,
      password: null,
      errorMessage: '',
      loadingLogin: false
    };
  },
  mounted: function mounted() {

    console.log('Login Component mounted.');
  },

  methods: {
    login: function login() {
      var _this = this;

      this.loadingLogin = true;
      var data = {
        client_id: "26",
        client_secret: "7xIRRHJqz3CQyqdG9R1Oj27UXJqCaW7KRS32qAp3",
        grant_type: "password",
        username: this.email,
        password: this.password
      };
      this.$http.post("/oauth/token", data).then(function (response) {
        console.log(response);
        if (response.status == 200) {

          _this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());

          _this.$router.push('/dashboard');
        }
        _this.loadingLogin = false;
      }, function (response) {
        var message = "";
        if (response.body.hint) message = response.body.hint;else message = response.body.message;

        _this.errorMessage = message;
        _this.loadingLogin = false;
      });
    }
  }
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-layout', [_c('md-layout', {
    attrs: {
      "md-flex": "30"
    }
  }), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-tag": "form",
      "novalidate": "",
      "md-align": "center"
    },
    on: {
      "submit": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [(_vm.errorMessage) ? _c('span', [_c('p', {
    staticClass: "warning-label"
  }, [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e(), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-tag": "md-card",
      "md-column": ""
    }
  }, [_c('md-card-header', [_c('div', {
    staticClass: "md-title"
  }, [_vm._v("Login")])]), _vm._v(" "), _c('md-card-content', [_c('md-input-container', [_c('md-icon', [_vm._v("person")]), _vm._v(" "), _c('label', [_vm._v("Email")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "email": "",
      "required": ""
    },
    model: {
      value: (_vm.email),
      callback: function($$v) {
        _vm.email = $$v
      },
      expression: "email"
    }
  })], 1), _vm._v(" "), _c('md-input-container', {
    attrs: {
      "md-has-password": ""
    }
  }, [_c('md-icon', [_vm._v("lock")]), _vm._v(" "), _c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "password",
      "required": ""
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1)], 1), _vm._v(" "), _c('md-card-actions', [_c('md-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loadingLogin),
      expression: "!loadingLogin"
    }],
    attrs: {
      "type": "button"
    },
    nativeOn: {
      "click": function($event) {
        _vm.login($event)
      }
    }
  }, [_vm._v("Login")])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-flex": "30"
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-507f46ee", esExports)
  }
}

/***/ })

});