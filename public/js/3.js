webpackJsonp([3],{

/***/ 52:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(78)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(68),
  /* template */
  __webpack_require__(77),
  /* scopeId */
  "data-v-bdf3b7c8",
  /* cssModules */
  null
)
Component.options.__file = "H:\\Development\\Workspace\\beerwebapp\\beerwebapp\\resources\\assets\\js\\components\\passport\\Clients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bdf3b7c8", Component.options)
  } else {
    hotAPI.reload("data-v-bdf3b7c8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    /*
     * The component's data.
     */
    data: function data() {
        return {
            clients: [],

            createForm: {
                errors: [],
                name: '',
                redirect: ''
            },

            editForm: {
                errors: [],
                name: '',
                redirect: ''
            }
        };
    },


    /**
     * Prepare the component.
     */
    ready: function ready() {
        this.getClients();

        $('#modal-create-client').on('shown.bs.modal', function () {
            $('#create-client-name').focus();
        });

        $('#modal-edit-client').on('shown.bs.modal', function () {
            $('#edit-client-name').focus();
        });
    },


    methods: {
        /**
         * Get all of the OAuth clients for the user.
         */
        getClients: function getClients() {
            var _this = this;

            this.$http.get('/oauth/clients').then(function (response) {
                _this.clients = response.data;
            });
        },


        /**
         * Show the form for creating new clients.
         */
        showCreateClientForm: function showCreateClientForm() {
            $('#modal-create-client').modal('show');
        },


        /**
         * Create a new OAuth client for the user.
         */
        store: function store() {
            this.persistClient('post', '/oauth/clients', this.createForm, '#modal-create-client');
        },


        /**
         * Edit the given client.
         */
        edit: function edit(client) {
            this.editForm.id = client.id;
            this.editForm.name = client.name;
            this.editForm.redirect = client.redirect;

            $('#modal-edit-client').modal('show');
        },


        /**
         * Update the client being edited.
         */
        update: function update() {
            this.persistClient('put', '/oauth/clients/' + this.editForm.id, this.editForm, '#modal-edit-client');
        },


        /**
         * Persist the client to storage using the given form.
         */
        persistClient: function persistClient(method, uri, form, modal) {
            var _this2 = this;

            form.errors = [];

            this.$http[method](uri, form).then(function (response) {
                _this2.getClients();

                form.name = '';
                form.redirect = '';
                form.errors = [];

                $(modal).modal('hide');
            }).catch(function (response) {
                if (_typeof(response.data) === 'object') {
                    form.errors = _.flatten(_.toArray(response.data));
                } else {
                    form.errors = ['Something went wrong. Please try again.'];
                }
            });
        },


        /**
         * Destroy the given client.
         */
        destroy: function destroy(client) {
            var _this3 = this;

            this.$http.delete('/oauth/clients/' + client.id).then(function (response) {
                _this3.getClients();
            });
        }
    }
});

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
exports.push([module.i, "\n.action-link[data-v-bdf3b7c8] {\n    cursor: pointer;\n}\n.m-b-none[data-v-bdf3b7c8] {\n    margin-bottom: 0;\n}\n", ""]);

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('div', {
    staticStyle: {
      "display": "flex",
      "justify-content": "space-between",
      "align-items": "center"
    }
  }, [_c('span', [_vm._v("\n                    OAuth Clients\n                ")]), _vm._v(" "), _c('a', {
    staticClass: "action-link",
    on: {
      "click": _vm.showCreateClientForm
    }
  }, [_vm._v("\n                    Create New Client\n                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [(_vm.clients.length === 0) ? _c('p', {
    staticClass: "m-b-none"
  }, [_vm._v("\n                You have not created any OAuth clients.\n            ")]) : _vm._e(), _vm._v(" "), (_vm.clients.length > 0) ? _c('table', {
    staticClass: "table table-borderless m-b-none"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.clients), function(client) {
    return _c('tr', [_c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                            " + _vm._s(client.id) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_vm._v("\n                            " + _vm._s(client.name) + "\n                        ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('code', [_vm._v(_vm._s(client.secret))])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link",
      on: {
        "click": function($event) {
          _vm.edit(client)
        }
      }
    }, [_vm._v("\n                                Edit\n                            ")])]), _vm._v(" "), _c('td', {
      staticStyle: {
        "vertical-align": "middle"
      }
    }, [_c('a', {
      staticClass: "action-link text-danger",
      on: {
        "click": function($event) {
          _vm.destroy(client)
        }
      }
    }, [_vm._v("\n                                Delete\n                            ")])])])
  }))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-create-client",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [(_vm.createForm.errors.length > 0) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.createForm.errors), function(error) {
    return _c('li', [_vm._v("\n                                " + _vm._s(error) + "\n                            ")])
  }))]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.createForm.name),
      expression: "createForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "create-client-name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.createForm.name)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.store($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.createForm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Something your users will recognize and trust.\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Redirect URL")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.createForm.redirect),
      expression: "createForm.redirect"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "redirect"
    },
    domProps: {
      "value": (_vm.createForm.redirect)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.store($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.createForm.redirect = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.store
    }
  }, [_vm._v("\n                        Create\n                    ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "modal-edit-client",
      "tabindex": "-1",
      "role": "dialog"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [(_vm.editForm.errors.length > 0) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._m(4), _vm._v(" "), _c('br'), _vm._v(" "), _c('ul', _vm._l((_vm.editForm.errors), function(error) {
    return _c('li', [_vm._v("\n                                " + _vm._s(error) + "\n                            ")])
  }))]) : _vm._e(), _vm._v(" "), _c('form', {
    staticClass: "form-horizontal",
    attrs: {
      "role": "form"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editForm.name),
      expression: "editForm.name"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "edit-client-name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.editForm.name)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.update($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editForm.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Something your users will recognize and trust.\n                                ")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-md-3 control-label"
  }, [_vm._v("Redirect URL")]), _vm._v(" "), _c('div', {
    staticClass: "col-md-7"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.editForm.redirect),
      expression: "editForm.redirect"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "redirect"
    },
    domProps: {
      "value": (_vm.editForm.redirect)
    },
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.update($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.editForm.redirect = $event.target.value
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("\n                                    Your application's authorization callback URL.\n                                ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.update
    }
  }, [_vm._v("\n                        Save Changes\n                    ")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Client ID")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Secret")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Create Client\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button ",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("\n                        Edit Client\n                    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bdf3b7c8", module.exports)
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(69);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(79)("4d00b9e5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bdf3b7c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-bdf3b7c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(80)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 80:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});