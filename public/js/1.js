webpackJsonp([1],{

/***/ 29:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            list: [],
            term: ''
        };
    },
    mounted: function mounted() {
        console.log('Item List Component mounted.');
        this.term = this.$route.query.q;
        this.fetchList(this.term);
    },

    methods: {
        fetchList: function fetchList(q) {
            var _this = this;

            axios.get('/api/v1/search?q=' + q).then(function (response) {
                console.log(response.data);
                _this.list = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        search: function search(event) {
            event.preventDefault();
            this.fetchList(this.term);
        }
    }
});

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(35)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(36),
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

/***/ 35:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "items"
  }, [_c('div', {
    staticClass: "mdl-grid"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell mdl-cell--9-col"
  }, [_c('h4', [_vm._v("Search Items")]), _vm._v(" "), _c('form', {
    on: {
      "submit": _vm.search
    }
  }, [_c('div', {
    staticClass: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.term),
      expression: "term"
    }],
    staticClass: "mdl-textfield__input",
    attrs: {
      "type": "text",
      "id": "search-text"
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
  }), _vm._v(" "), _c('label', {
    staticClass: "mdl-textfield__label",
    attrs: {
      "for": "search-text"
    }
  }, [_vm._v("Search:")])])]), _vm._v(" "), _c('ul', {
    staticClass: "list-group"
  }, [(!_vm.list.data) ? _c('span', [_vm._v("\n        Nothing Found!\n      ")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.list.data), function(item) {
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
    }, [_c('h4', [_vm._v(_vm._s(item.nameDisplay))]), _vm._v("\n              " + _vm._s(item.description) + "\n            ")]), _vm._v(" "), _vm._m(1, true)]), _vm._v(" "), _vm._m(2, true), _vm._v(" "), _vm._m(3, true)])])
  })], 2)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-cell mdl-cell--3-col"
  }, [_c('h4', [_vm._v("Criteria")]), _vm._v(" "), _c('h5', [_vm._v("Types")]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "beer"
    }
  }, [_c('input', {
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "beer",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Beer")])]), _vm._v(" "), _c('label', {
    staticClass: "mdl-checkbox mdl-js-checkbox",
    attrs: {
      "for": "brewery"
    }
  }, [_c('input', {
    staticClass: "mdl-checkbox__input",
    attrs: {
      "type": "checkbox",
      "id": "brewery",
      "checked": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "mdl-checkbox__label"
  }, [_vm._v("Brewery")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-card__actions"
  }, [_c('a', {
    staticClass: "mdl-button",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Read more")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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