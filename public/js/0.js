webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38653bc5_node_modules_vue_loader_lib_selector_type_template_index_0_Items_vue__ = __webpack_require__(201);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38653bc5_node_modules_vue_loader_lib_selector_type_template_index_0_Items_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Items.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Items.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38653bc5", Component.options)
  } else {
    hotAPI.reload("data-v-38653bc5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 189:
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

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            list: [],
            term: '',
            loadingList: true,
            types: []
        };
    },
    mounted: function mounted() {

        console.log('Item List Component mounted.');
        this.term = this.$route.query.q;
        this.fetchList(this.term);
        this.fetchFavorite();
    },

    methods: {
        fetchList: function fetchList(q) {
            var _this = this;

            this.loadingList = true;
            var url = "";
            if (this.types != null) {
                url = '/api/v1/search?q=' + q + '&type=' + this.types.join();
            } else {
                url = '/api/v1/search?q=' + q;
            }
            this.$http.get(url).then(function (response) {

                _this.list = response.data;
                _this.loadingList = false;
            }).catch(function (error) {
                console.log(error);
                _this.loadingList = false;
            });
        },
        search: function search(event) {
            event.preventDefault();
            this.fetchList(this.term);
        },
        fetchFavorite: function fetchFavorite() {

            this.$http.get('/api/v1/favorite').then(function (response) {

                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "items"
  }, [_c('div', [_c('div', {
    staticClass: "col-md-3"
  }, [_c('h4', [_vm._v("Criteria")]), _vm._v(" "), _c('h5', [_vm._v("Types")]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "beer"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "beer",
      "value": "beer",
      "checked": ""
    },
    domProps: {
      "checked": Array.isArray(_vm.types) ? _vm._i(_vm.types, "beer") > -1 : (_vm.types)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.types,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "beer",
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.types = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.types = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.types = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Beer")])]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "brewery"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "brewery",
      "value": "brewery",
      "checked": ""
    },
    domProps: {
      "checked": Array.isArray(_vm.types) ? _vm._i(_vm.types, "brewery") > -1 : (_vm.types)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.types,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "brewery",
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.types = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.types = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.types = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Brewery")])]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "guild"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "guild",
      "value": "guild",
      "checked": ""
    },
    domProps: {
      "checked": Array.isArray(_vm.types) ? _vm._i(_vm.types, "guild") > -1 : (_vm.types)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.types,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "guild",
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.types = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.types = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.types = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Guild")])]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "event"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "event",
      "value": "event",
      "checked": ""
    },
    domProps: {
      "checked": Array.isArray(_vm.types) ? _vm._i(_vm.types, "event") > -1 : (_vm.types)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.types,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = "event",
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.types = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.types = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.types = $$c
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Event")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('h4', [_vm._v("Search Items")]), _vm._v(" "), _c('form', {
    on: {
      "submit": _vm.search
    }
  }, [_c('md-input-container', {
    attrs: {
      "md-inline": ""
    }
  }, [_c('label', [_vm._v("Search")]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.term),
      callback: function($$v) {
        _vm.term = $$v
      },
      expression: "term"
    }
  })], 1)], 1), _vm._v(" "), _c('ul', {
    staticClass: "list-group"
  }, [(_vm.loadingList) ? _c('span', [_c('div', {
    staticClass: "mdl-spinner mdl-js-spinner is-active"
  })]) : (!_vm.list.data) ? _c('span', [_vm._v("\n        Nothing Found!\n      ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.list.data), function(item) {
    return _c('li', {
      staticClass: "list-group-item"
    }, [_c('section', {
      staticClass: "section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp"
    }, [(item.labels) ? _c('span', [_c('img', {
      staticClass: "list-image",
      attrs: {
        "src": item.labels.medium
      }
    })]) : _c('span', [_c('img', {
      staticClass: "list-image",
      attrs: {
        "src": "https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone"
    }, [_c('div', {
      staticClass: "mdl-card__supporting-text"
    }, [_c('h4', [(item.nameDisplay) ? _c('span', [_vm._v("\n                  " + _vm._s(item.nameDisplay) + "\n                ")]) : _c('span', [_vm._v("\n                  " + _vm._s(item.name) + "\n                ")])]), _vm._v("\n              " + _vm._s(item.description) + "test\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "mdl-card__actions"
    }, [_c('router-link', {
      staticClass: "mdl-button",
      attrs: {
        "to": {
          name: 'item',
          params: {
            type: item.type,
            id: item.id
          }
        }
      }
    }, [_vm._v("View Details")])], 1)])])])
  })], 2)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-38653bc5", esExports)
  }
}

/***/ })

});