webpackJsonp([7],{

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(67),
  /* template */
  __webpack_require__(73),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34144d68", Component.options)
  } else {
    hotAPI.reload("data-v-34144d68", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 67:
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
            user: {},
            favorites: [],
            item: {},
            detailList: [],
            loadingDetailList: false
        };
    },
    created: function created() {},
    mounted: function mounted() {

        console.log('Account Component mounted.');
        this.loadingDetail = false;
        this.fetchUser();
        this.fetchFavorites();
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-grid"
  }, [_c('div', {
    staticClass: "mdl-layout-spacer"
  }), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell mdl-cell--8-col content mdl-color-text--grey-800"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadingDetail),
      expression: "loadingDetail"
    }],
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  }), _vm._v(" "), (this.user) ? _c('span', [_c('div', {
    staticClass: "mdl-grid"
  }, [_c('div', {
    staticClass: "mdl-cell"
  }, [(this.user.image) ? _c('span', [_c('img', {
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": this.user.image
    }
  })]) : _c('span', [_c('img', {
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": "http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell"
  }, [_c('h4', [_vm._v(_vm._s(this.user.name))]), _vm._v(" "), _c('p', [_c('i', [_vm._v("Member Since:")]), _vm._v(" " + _vm._s(this.user.created_at))]), _vm._v(" "), _c('p', [_c('i', [_vm._v("Bio:")]), _vm._v(" " + _vm._s(this.user.bio))])])]), _vm._v(" "), _c('h4', [_vm._v("Recently Liked")]), _vm._v(" "), _c('div', {
    staticClass: "mdl-grid"
  }, _vm._l((_vm.detailList), function(individualItem) {
    return _c('div', {
      staticClass: "mdl-card mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-shadow--2dp"
    }, [_c('figure', {
      staticClass: "mdl-card__media"
    }, [_c('img', {
      attrs: {
        "src": individualItem.data.labels.medium
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__title"
    }, [_c('h1', {
      staticClass: "mdl-card__title-text"
    }, [_vm._v(_vm._s(individualItem.data.name))])]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__supporting-text"
    }, [_c('p', [_vm._v("Liked on: " + _vm._s(_vm._f("formatDate")(individualItem.data.favorited, individualItem.data.favorited)))])]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__actions mdl-card--border"
    }, [_c('router-link', {
      staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
      attrs: {
        "to": "/test"
      }
    }, [_vm._v("Read More")]), _vm._v(" "), _c('div', {
      staticClass: "mdl-layout-spacer"
    }), _vm._v(" "), _c('router-link', {
      staticClass: "mdl-button mdl-button--icon mdl-button--colored",
      attrs: {
        "to": "/test"
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("share")])])], 1)])
  })), _vm._v(" "), _c('div', {
    staticClass: "mdl-grid"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell"
  }, [_c('h4', [_vm._v("Recently Liked")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadingDetailList),
      expression: "loadingDetailList"
    }],
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  }), _vm._v(" "), _c('ul', {
    staticClass: "mdl-list recently-liked-list"
  }, _vm._l((_vm.detailList), function(individualItem) {
    return _c('li', {
      staticClass: "mdl-list__item mdl-list__item--three-line"
    }, [_c('span', {
      staticClass: "mdl-list__item-primary-content"
    }, [_c('img', {
      staticStyle: {
        "max-width": "50px"
      },
      attrs: {
        "src": individualItem.data.labels.medium
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(individualItem.data.name))]), _vm._v(" "), _c('span', {
      staticClass: "mdl-list__item-text-body"
    }, [_vm._v("\n                    " + _vm._s(individualItem.data.favorited) + "\n                  ")])])])
  }))])])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mdl-layout-spacer"
  })])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-cell"
  }, [_c('h4', [_vm._v("Following")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-34144d68", module.exports)
  }
}

/***/ })

});