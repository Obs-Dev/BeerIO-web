webpackJsonp([0],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38653bc5_node_modules_vue_loader_lib_selector_type_template_index_0_Items_vue__ = __webpack_require__(197);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Items_vue___default.a,
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

/***/ 185:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "items"
  }, [_c('div', [_c('div', {
    staticClass: "col-md-3"
  }, [_c('h4', [_vm._v("Criteria")]), _vm._v(" "), _c('h5', [_vm._v("Types")]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    attrs: {
      "type": "checkbox",
      "value": "beer"
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
  }), _vm._v("Beer")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    attrs: {
      "type": "checkbox",
      "value": "brewery"
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
  }), _vm._v("Brewery")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    attrs: {
      "type": "checkbox",
      "value": "guild"
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
  }), _vm._v("Guild")])]), _vm._v(" "), _c('div', {
    staticClass: "checkbox"
  }, [_c('label', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.types),
      expression: "types"
    }],
    attrs: {
      "type": "checkbox",
      "value": "event"
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
  }), _vm._v("Event")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-9"
  }, [_c('h4', [_vm._v("Search Items")]), _vm._v(" "), _c('form', {
    on: {
      "submit": _vm.search
    }
  }, [_c('div', {
    staticClass: "input-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.term),
      expression: "term"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search for..."
    },
    domProps: {
      "value": (_vm.term)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.term = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), (_vm.loadingList) ? _c('span', [_vm._m(1)]) : (!_vm.list.data) ? _c('span', [_vm._v("\n        Nothing Found!\n      ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.list.data), function(item) {
    return _c('div', {
      staticClass: "col-md-12",
      staticStyle: {
        "margin-top": "30px"
      }
    }, [_c('div', {
      staticClass: "col-md-3"
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
    })])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-9"
    }, [_c('h4', {
      staticClass: "list-group-item-heading"
    }, [(item.nameDisplay) ? _c('span', [_vm._v("\n              " + _vm._s(item.nameDisplay) + "\n            ")]) : _c('span', [_vm._v("\n              " + _vm._s(item.name) + "\n            ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'verified'),
        expression: "item.status=='verified'"
      }],
      staticClass: "label label-success"
    }, [_vm._v(_vm._s(item.statusDisplay))]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'update_pending'),
        expression: "item.status=='update_pending'"
      }],
      staticClass: "label label-warning"
    }, [_vm._v(_vm._s(item.statusDisplay))]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.status == 'delete_pending'),
        expression: "item.status=='delete_pending'"
      }],
      staticClass: "label label-danger"
    }, [_vm._v(_vm._s(item.statusDisplay))])]), _vm._v(" "), _c('div', [(item.style) ? _c('span', [_vm._v("\n            " + _vm._s(item.style.name)), _c('br')]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v("Type: " + _vm._s(item.type))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.description))])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-primary",
      attrs: {
        "to": {
          name: 'item',
          params: {
            type: item.type,
            id: item.id
          }
        }
      }
    }, [_vm._v("View Details")])], 1), _vm._v(" "), _c('hr')])
  })], 2)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Search!")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-striped active",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "role": "progressbar",
      "aria-valuenow": "100",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  }, [_vm._v("\n            Loading...\n          ")])])
}]
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