webpackJsonp([12],{

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(191),
  /* template */
  __webpack_require__(195),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\NotFoundView.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] NotFoundView.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-239479f6", Component.options)
  } else {
    hotAPI.reload("data-v-239479f6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 191:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Page not found!');
    }
});

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "error"
  }, [_c('div', {
    staticClass: "mdl-grid"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mdl-cell mdl-cell--9-col"
  }, [_c('h4', [_vm._v("404 - The page you are looking for is not found!")]), _vm._v(" "), _c('router-link', {
    staticClass: "mdl-navigation__link",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Click here to go back to the homepage")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mdl-cell mdl-cell--3-col"
  }, [_c('img', {
    staticStyle: {
      "max-width": "100%"
    },
    attrs: {
      "src": "/img/404-goat.jpg"
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-239479f6", module.exports)
  }
}

/***/ })

});