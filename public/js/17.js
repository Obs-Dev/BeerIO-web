webpackJsonp([17],{

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(211),
  /* template */
  __webpack_require__(212),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\People.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] People.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6cb5b1c0", Component.options)
  } else {
    hotAPI.reload("data-v-6cb5b1c0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 211:
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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6cb5b1c0", module.exports)
  }
}

/***/ })

});