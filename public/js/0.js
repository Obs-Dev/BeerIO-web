webpackJsonp([0],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(188),
  /* template */
  __webpack_require__(197),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\Items.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Items.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a8e05bf", Component.options)
  } else {
    hotAPI.reload("data-v-2a8e05bf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 188:
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
//
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "items"
  }, [_c('div', {
    staticClass: "mdl-grid"
  }, [_c('div', {
    staticClass: "mdl-cell mdl-cell--3-col"
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
    staticClass: "mdl-cell mdl-cell--9-col"
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
    }, [_vm._v("View Details")])], 1)]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _vm._m(1, true)])])
  })], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon",
    attrs: {
      "id": "btn1",
      "data-upgraded": ",MaterialButton,MaterialRipple"
    }
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("more_vert")]), _vm._v(" "), _c('span', {
    staticClass: "mdl-button__ripple-container"
  }, [_c('span', {
    staticClass: "mdl-ripple"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-menu__container is-upgraded"
  }, [_c('div', {
    staticClass: "mdl-menu__outline mdl-menu--bottom-right"
  }), _c('ul', {
    staticClass: "mdl-menu mdl-js-menu mdl-menu--bottom-right",
    attrs: {
      "for": "btn1",
      "data-upgraded": ",MaterialMenu"
    }
  }, [_c('li', {
    staticClass: "mdl-menu__item",
    attrs: {
      "tabindex": "-1"
    }
  }, [_vm._v("Lorem")]), _vm._v(" "), _c('li', {
    staticClass: "mdl-menu__item",
    attrs: {
      "disabled": "",
      "tabindex": "-1"
    }
  }, [_vm._v("Ipsum")]), _vm._v(" "), _c('li', {
    staticClass: "mdl-menu__item",
    attrs: {
      "tabindex": "-1"
    }
  }, [_vm._v("Dolor")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a8e05bf", module.exports)
  }
}

/***/ })

});