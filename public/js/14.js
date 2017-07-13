webpackJsonp([14],{

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(189),
  /* template */
  __webpack_require__(199),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\Login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a810e8", Component.options)
  } else {
    hotAPI.reload("data-v-42a810e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
        client_id: "1",
        client_secret: "WLbnPBVennWVO5kZZEre31kQ0Qb6KzobTtpoplVv",
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

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42a810e8", module.exports)
  }
}

/***/ })

});