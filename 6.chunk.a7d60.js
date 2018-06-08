webpackJsonp([6],{

/***/ "115d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_settings__ = __webpack_require__("1ovv");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let Settings = class Settings extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
    constructor() {
        super(...arguments);
        this.changeTheme = () => {
            this.props.dispatch(__WEBPACK_IMPORTED_MODULE_2__reducers_settings__["a" /* actions */].changeTheme(!this.props.settings.darkTheme));
        };
    }
    render(props) {
        return (Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", null,
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", null, "Settings view"),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("label", { for: 'settings-dark-theme' }, "Dark theme"),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("input", { id: 'settings-dark-theme', type: 'checkbox', checked: this.props.settings.darkTheme, onChange: this.changeTheme })));
    }
};
Settings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(store => ({
        settings: store.settings
    }))
], Settings);
/* harmony default export */ __webpack_exports__["default"] = (Settings);


/***/ })

});
//# sourceMappingURL=6.chunk.a7d60.js.map