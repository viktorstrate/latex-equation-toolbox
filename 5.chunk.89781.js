webpackJsonp([5],{

/***/ "BMbX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"mathBackground":"mathBackground__3DwWi","container":"container__drWZf","title":"title__2gSTX"};

/***/ }),

/***/ "ll0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mathjax_setup__ = __webpack_require__("NsE/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_image_export__ = __webpack_require__("x4zy");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let style = __webpack_require__("BMbX");
let mathStyle = __webpack_require__("PFev");
let ImageExport = class ImageExport extends __WEBPACK_IMPORTED_MODULE_0_preact__["Component"] {
    constructor() {
        super(...arguments);
        this.oldLatex = '';
    }
    generatePNG() {
        if (this.props.latex === this.oldLatex) {
            return;
        }
        console.log('Generate png');
        let dispatch = this.props.dispatch;
        Object(__WEBPACK_IMPORTED_MODULE_2__mathjax_setup__["a" /* default */])().then(mj2img => {
            console.log('mj2img', mj2img);
            mj2img(this.props.latex, function (output) {
                console.log('here', output);
                dispatch(__WEBPACK_IMPORTED_MODULE_3__reducers_image_export__["a" /* actions */].updateImage(output.img, output.svg, output.svgData));
                //document.getElementById("target").innerHTML = output.svg;
            });
        });
    }
    render(props) {
        this.generatePNG();
        let svgData = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(props.imageExport.svg)));
        this.oldLatex = this.props.latex;
        return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: style.container },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", { className: style.title }, "Image export view"),
            "You can drag and drop the images below, into other applications or a folder.",
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            "SVG",
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: mathStyle.math },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", { src: props.imageExport.svgData })),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            "PNG",
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("br", null),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("div", { className: mathStyle.math },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("img", { src: props.imageExport.png })));
    }
};
ImageExport = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(store => ({
        latex: store.input.latex,
        imageExport: store.imageExport
    }))
], ImageExport);
/* harmony default export */ __webpack_exports__["default"] = (ImageExport);


/***/ })

});
//# sourceMappingURL=5.chunk.89781.js.map