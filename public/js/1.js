webpackJsonp([1],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(64),
  /* template */
  __webpack_require__(74),
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

/***/ 64:
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
          console.log("Login Success. Setting Token!!");
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

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "mdl-grid"
  }, [_c('div', {
    staticClass: "mdl-layout-spacer"
  }), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell mdl-cell--4-col"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadingLogin),
      expression: "loadingLogin"
    }],
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loadingLogin),
      expression: "!loadingLogin"
    }],
    staticClass: "mdl-layout mdl-js-layout mdl-color--grey-100"
  }, [_c('main', {
    staticClass: "mdl-layout__content"
  }, [_c('div', {
    staticClass: "mdl-card mdl-shadow--6dp"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mdl-card__supporting-text"
  }, [(_vm.errorMessage) ? _c('span', [_c('p', {
    staticClass: "warning-label"
  }, [_vm._v(_vm._s(_vm.errorMessage))])]) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "mdl-textfield mdl-js-textfield"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.email),
      expression: "email"
    }],
    staticClass: "mdl-textfield__input",
    attrs: {
      "type": "text",
      "id": "email"
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
  }), _vm._v(" "), _c('label', {
    staticClass: "mdl-textfield__label",
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-textfield mdl-js-textfield"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "mdl-textfield__input",
    attrs: {
      "type": "password",
      "id": "userpass"
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
  }), _vm._v(" "), _c('label', {
    staticClass: "mdl-textfield__label",
    attrs: {
      "for": "userpass"
    }
  }, [_vm._v("Password")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-card__actions mdl-card--border"
  }, [_c('button', {
    staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
    on: {
      "click": _vm.login
    }
  }, [_vm._v("Sign In ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-layout-spacer"
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-card__title mdl-color--secondary mdl-color-text--grey"
  }, [_c('h2', {
    staticClass: "mdl-card__title-text"
  }, [_vm._v("Login")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42a810e8", module.exports)
  }
}

/***/ })

});