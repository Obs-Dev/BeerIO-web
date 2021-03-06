webpackJsonp([4],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_507f46ee_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(204);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default.a,
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

/***/ 194:
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

exports.default = {
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
        client_id: "2",
        client_secret: "jdpmgBqV3UmQlHWzgGYz4jTyTYxrhYWWE5he07Aa",
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
};

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', [_c('h3', [_vm._v("Welcome Back to BeerIO! Please Sign In")]), _vm._v(" "), _c('hr', {
    staticClass: "colorgraph"
  }), _c('br'), _vm._v(" "), (_vm.errorMessage) ? _c('span', [_c('p', {
    staticClass: "warning-label"
  }, [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "email",
      "placeholder": "Email",
      "required": "",
      "autofocus": ""
    },
    domProps: {
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.email = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password",
      "name": "Password",
      "placeholder": "Password",
      "required": ""
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-lg btn-primary btn-block",
    attrs: {
      "name": "Submit",
      "value": "Login",
      "type": "button"
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("Login")]), _vm._v("  \t\t\t\n    Don't have an account? "), _c('router-link', {
    attrs: {
      "to": {
        name: 'register'
      }
    }
  }, [_vm._v("Click here to register for one! ")])], 1)])
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