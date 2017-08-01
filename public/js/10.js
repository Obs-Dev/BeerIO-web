webpackJsonp([10],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Clients_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Clients_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Clients_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0449e354_node_modules_vue_loader_lib_selector_type_template_index_0_Clients_vue__ = __webpack_require__(196);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0449e354"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_node_modules_vue_loader_lib_selector_type_script_index_0_Clients_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0449e354_node_modules_vue_loader_lib_selector_type_template_index_0_Clients_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/passport/Clients.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Clients.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0449e354", Component.options)
  } else {
    hotAPI.reload("data-v-0449e354", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

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

exports.default = {
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
};

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(131)();
exports.push([module.i, "\n.action-link[data-v-0449e354] {\n    cursor: pointer;\n}\n.m-b-none[data-v-0449e354] {\n    margin-bottom: 0;\n}\n", ""]);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('th', [_vm._v("Client ID")]), _vm._v(" "), _c('th', [_vm._v("Name")]), _vm._v(" "), _c('th', [_vm._v("Secret")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th')])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("Whoops!")]), _vm._v(" Something went wrong!")])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0449e354", esExports)
  }
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(133)("5b575fdc", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0449e354\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0449e354\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Clients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});