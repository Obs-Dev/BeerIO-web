webpackJsonp([7],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ItemDetail_vue__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5927708f_node_modules_vue_loader_lib_selector_type_template_index_0_ItemDetail_vue__ = __webpack_require__(204);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_ItemDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5927708f_node_modules_vue_loader_lib_selector_type_template_index_0_ItemDetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ItemDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ItemDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5927708f", Component.options)
  } else {
    hotAPI.reload("data-v-5927708f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 188:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            item: {},
            id: -2,
            loadingDetail: true,
            isAuthenticated: false,
            favorited: false,
            message: 'item detail',
            comments: [],
            newComment: ""
        };
    },
    created: function created() {},
    mounted: function mounted() {

        console.log('Item Detail Component mounted.');
        this.fetchItemDetail(this.$route.params.id, this.$route.params.type);
        this.isAuthenticated = this.$auth.isAuthenticated();
        this.fetchFavorite(this.$route.params.id);
        this.fetchComments(this.$route.params.id);
    }
});

/***/ }),

/***/ 204:
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
      value: (_vm.loadingDetail),
      expression: "loadingDetail"
    }],
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  }), _vm._v(" "), (_vm.item.data) ? _c('span', [_c('div', {
    staticClass: "mdl-layout__tab-panel is-active content-panel",
    attrs: {
      "id": "overview"
    }
  }, [_c('section', {
    staticClass: "section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp"
  }, [_c('header', {
    staticClass: "section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white"
  }, [(_vm.item.data.labels) ? _c('span', [_c('img', {
    staticClass: "list-image",
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": _vm.item.data.labels.medium
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.item.data.images) ? _c('span', [_c('img', {
    staticClass: "list-image",
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": _vm.item.data.images.large
    }
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone"
  }, [_c('div', {
    staticClass: "mdl-card__supporting-text"
  }, [_c('h4', [_vm._v(_vm._s(_vm.item.data.name)), _c('small', [(_vm.item.data.abv) ? _c('span', [_vm._v("\n                          (" + _vm._s(_vm.item.data.abv) + "%)\n                        ")]) : _vm._e(), _vm._v(" "), (_vm.item.data.established) ? _c('span', [_vm._v("\n                          (EST. " + _vm._s(_vm.item.data.established) + ")\n                        ")]) : _vm._e()])]), _vm._v("\n\n                        " + _vm._s(_vm.item.data.description)), _c('br'), _c('br'), _vm._v(" "), (this.$auth.isAuthenticated()) ? _c('span', [(this.favorited) ? _c('span', [_c('button', {
    staticClass: "mdl-button mdl-button--colored mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent",
    on: {
      "click": function($event) {
        _vm.handleFavorite(_vm.item.data.id, _vm.$route.params.type)
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("done")]), _vm._v(" Liked\n                            ")])]) : (!this.favorited) ? _c('span', [_c('button', {
    staticClass: "mdl-button mdl-js-button mdl-js-ripple-effect ",
    on: {
      "click": function($event) {
        _vm.handleFavorite(_vm.item.data.id, _vm.$route.params.type)
      }
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("star")]), _vm._v(" Like\n                            ")])]) : _vm._e()]) : _vm._e()])])])]), _vm._v(" "), _c('div', {
    staticClass: "mdl-layout__tab-panel is-active content-panel",
    attrs: {
      "id": "details"
    }
  }, [_c('section', {
    staticClass: "section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp"
  }, [_c('div', {
    staticClass: "mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"
  }, [_c('div', {
    staticClass: "mdl-card__supporting-text"
  }, [_c('h4', [_vm._v("Details")]), _vm._v(" "), _c('table', {
    staticClass: "mdl-data-table mdl-js-data-table"
  }, [_c('tbody', [_c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Type")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(this.$route.params.type))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Status")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.statusDisplay))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("ABV")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.abv) + "%")])]), _vm._v(" "), (_vm.item.data.glass) ? _c('span', [_c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Glass")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.glass.name))])])]) : _vm._e(), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("IBU")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.ibu))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Last Updated")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.updateDate))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Organic")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.item.data.isOrganic))])]), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "mdl-data-table__cell--non-numeric"
  }, [_vm._v("Website")]), _vm._v(" "), _c('td', [_c('a', {
    attrs: {
      "href": _vm.item.data.website,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.item.data.website))])])])])]), _vm._v(" "), (_vm.item.data.style) ? _c('span', [_c('h4', [_vm._v("Style")]), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.item.data.style.name))]), _c('br'), _c('br'), _vm._v("\n                                  " + _vm._s(_vm.item.data.style.description) + "\n                                ")]) : _vm._e(), _vm._v(" "), (_vm.item.data.available) ? _c('span', [_c('h4', [_vm._v("Availablility")]), _vm._v("\n                                  " + _vm._s(_vm.item.data.available.description) + "\n                                ")]) : _vm._e(), _vm._v(" "), _c('ul')])])])]), _vm._v(" "), _c('h4', [_vm._v("Comments")]), _vm._v(" "), _c('md-input-container', [_c('label', [_vm._v("New Comment")]), _vm._v(" "), _c('md-textarea', {
    attrs: {
      "maxlength": "120"
    },
    model: {
      value: (_vm.newComment),
      callback: function($$v) {
        _vm.newComment = $$v
      },
      expression: "newComment"
    }
  })], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-primary",
    nativeOn: {
      "click": function($event) {
        _vm.addComment(_vm.item.data.id)
      }
    }
  }, [_c('md-icon', [_vm._v("add")]), _vm._v("  Add Comment\n                            ")], 1), _vm._v(" "), _vm._l((_vm.comments), function(comment) {
    return _c('div', [_c('div', {
      staticClass: "phone-viewport"
    }, [_c('md-list', {
      staticClass: "custom-list md-triple-line"
    }, [_c('md-list-item', [_c('md-avatar', [(comment.user.image) ? _c('span', [_c('img', {
      attrs: {
        "src": comment.user.image,
        "alt": comment.user.name
      }
    })]) : _c('span', [_c('img', {
      attrs: {
        "src": "http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png",
        "alt": comment.user.name
      }
    })]), _vm._v(" "), _c('md-tooltip', {
      attrs: {
        "md-direction": "top"
      }
    }, [_vm._v(_vm._s(comment.user.name))])], 1), _vm._v(" "), _c('div', {
      staticClass: "md-list-text-container"
    }, [_c('span', [_vm._v(_vm._s(comment.user.name) + " - "), _c('small', [_vm._v(_vm._s(comment.created_at))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(comment.description))])]), _vm._v(" "), _c('md-divider', {
      staticClass: "md-inset"
    })], 1)], 1)], 1)])
  })], 2) : _vm._e()]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-5927708f", esExports)
  }
}

/***/ })

});