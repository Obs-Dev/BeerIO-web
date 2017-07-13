webpackJsonp([2],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f619ee_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__ = __webpack_require__(200);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_28f619ee_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28f619ee", Component.options)
  } else {
    hotAPI.reload("data-v-28f619ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 194:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      user: {},
      favorites: [],
      item: {},
      detailList: [],
      loadingDetailList: false,
      isEditing: false,
      editable: false,
      updateUserError: false
    };
  },
  created: function created() {},
  mounted: function mounted() {

    console.log('Account Component mounted.');
    this.loadingDetail = false;

    if (this.$route.params.id) {
      this.fetchUser(this.$route.params.id);
    } else {

      this.fetchUser();
    }

    this.fetchFavorites();
  },

  methods: {
    editProfile: function editProfile() {

      this.isEditing = !this.isEditing;
    },
    saveProfile: function saveProfile() {
      var user = {
        name: this.user.name,
        bio: this.user.bio,
        id: this.user.id
      };
      this.updateUser(user);
      if (!this.updateUserError) this.isEditing = !this.isEditing;
    }
  }

});

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
      value: (_vm.editable),
      expression: "editable"
    }]
  }, [_c('md-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing),
      expression: "!isEditing"
    }],
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.editProfile()
      }
    }
  }, [_c('md-icon', [_vm._v("edit")]), _vm._v(" Edit Profile")], 1), _vm._v(" "), _c('md-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditing),
      expression: "isEditing"
    }],
    staticClass: "md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.saveProfile()
      }
    }
  }, [_c('md-icon', [_vm._v("save")]), _vm._v(" Save Profile")], 1)], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loadingDetail),
      expression: "loadingDetail"
    }],
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  }), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell mdl-cell--8-col content mdl-color-text--grey-800"
  }, [_c('div', {
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
  }, [_c('h4', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing),
      expression: "!isEditing"
    }]
  }, [_vm._v(_vm._s(this.user.name))]), _vm._v(" "), _c('md-input-container', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditing),
      expression: "isEditing"
    }],
    attrs: {
      "md-inline": ""
    }
  }, [_c('label', [_vm._v("Name")]), _vm._v(" "), _c('md-textarea', {
    model: {
      value: (_vm.user.name),
      callback: function($$v) {
        _vm.user.name = $$v
      },
      expression: "user.name"
    }
  })], 1), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing),
      expression: "!isEditing"
    }]
  }, [_c('i', [_vm._v("Member Since:")]), _vm._v(" " + _vm._s(this.user.created_at))]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.isEditing),
      expression: "!isEditing"
    }]
  }, [_c('i', [_vm._v("Bio:")]), _vm._v(" " + _vm._s(this.user.bio))]), _vm._v(" "), _c('md-input-container', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isEditing),
      expression: "isEditing"
    }],
    attrs: {
      "md-inline": ""
    }
  }, [_c('label', [_vm._v("Bio")]), _vm._v(" "), _c('md-textarea', {
    model: {
      value: (_vm.user.bio),
      callback: function($$v) {
        _vm.user.bio = $$v
      },
      expression: "user.bio"
    }
  })], 1)], 1)]), _vm._v(" "), _c('h4', [_vm._v("Recently Liked")]), _vm._v(" "), _c('div', {
    staticClass: "mdl-grid"
  }, _vm._l((_vm.detailList), function(individualItem) {
    return _c('div', {
      staticClass: "mdl-card mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-shadow--2dp"
    }, [(individualItem.data.labels) ? _c('figure', {
      staticClass: "mdl-card__media"
    }, [_c('img', {
      attrs: {
        "src": individualItem.data.labels.medium
      }
    })]) : _c('figure', {
      staticClass: "mdl-card__media"
    }, [_c('img', {
      attrs: {
        "src": "https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png"
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
        "to": {
          name: 'item',
          params: {
            type: individualItem.data.type,
            id: individualItem.data.id
          }
        }
      }
    }, [_vm._v("Read More")]), _vm._v(" "), _c('div', {
      staticClass: "mdl-layout-spacer"
    })], 1)])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-layout-spacer"
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28f619ee", esExports)
  }
}

/***/ })

});