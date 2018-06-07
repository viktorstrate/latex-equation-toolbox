webpackJsonp([2],{

/***/ "+9dm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ccba023be7202c5d0f689d07a6b8b3d5.svg";

/***/ }),

/***/ "03Ev":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrows/data.json": "V0il",
	"./greek/data.json": "rW8J"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "03Ev";

/***/ }),

/***/ "0Fz5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd54e88dfca410b9a933a424448998c0.svg";

/***/ }),

/***/ "0euy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd28f791bf1c29f06fc17e4388522b73.svg";

/***/ }),

/***/ "1Dto":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6b74879a03ce2831e7012ef8d8efd5d9.svg";

/***/ }),

/***/ "2aMt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "22ce44bc8978062e7b666c4b3bb88ad0.svg";

/***/ }),

/***/ "3B1i":
/***/ (function(module, exports) {

module.exports = ["arrows","greek"]

/***/ }),

/***/ "4125":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9a8444f0a41dfc653fa5b23b0495cb36.svg";

/***/ }),

/***/ "4CQs":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "afa75e3e0b9fbfb912f9e5f80569215b.svg";

/***/ }),

/***/ "4UK2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9d16b6f8808591a1d696cffe69fd4582.svg";

/***/ }),

/***/ "4UPj":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d677243680cc5958973d75e7ed67a083.svg";

/***/ }),

/***/ "6O12":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0be0d409624f4abb08718bf12f6eb9dc.svg";

/***/ }),

/***/ "6ZIH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09b88e812f026f9b96defc10d4f272cd.svg";

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "AKJt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a78766da327cb4b0002449cd35af8c80.svg";

/***/ }),

/***/ "B7Rb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "154c7fa1e95a6bdd77cc0e9a93bf6861.svg";

/***/ }),

/***/ "CHwD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bd6edb6eecf21ecfd561df25d7a69392.svg";

/***/ }),

/***/ "FeDt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cfacf5575e47068f86a61c950f0bff76.svg";

/***/ }),

/***/ "GQ7g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cbc9998c3c2277f55774c2444837d0df.svg";

/***/ }),

/***/ "I9+h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df60e24249f3a86fcb811c1d3b4cb024.svg";

/***/ }),

/***/ "Jadh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6816815f280652718792a54f92adf251.svg";

/***/ }),

/***/ "MtSy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ccfce2e8cd512c607169686013ed973b.svg";

/***/ }),

/***/ "OElg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "916ab54e19577717a2af2b7e23e2aaaa.svg";

/***/ }),

/***/ "PiZu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dd72214c938f238b171fb5f95044e2d4.svg";

/***/ }),

/***/ "QG+0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a29a1095f38606dd13e4de25701f31af.svg";

/***/ }),

/***/ "QIV7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "76b7f5b7949e1f1449601b0d2b6fcdb9.svg";

/***/ }),

/***/ "Ri/r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bf4aec38b0bbc3cea0ae5bb8d7ad0c04.svg";

/***/ }),

/***/ "UbIH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "706624877574029f654393d7c67e727f.svg";

/***/ }),

/***/ "Uvcz":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6282ebb3f288d51f5468fda61a09ea2f.svg";

/***/ }),

/***/ "V0il":
/***/ (function(module, exports) {

module.exports = [{"code":"\\Downarrow","icon":"double-down.svg"},{"code":"\\Leftarrow","icon":"double-left.svg"},{"code":"\\Leftrightarrow","icon":"double-leftright.svg"},{"code":"\\Rightarrow","icon":"double-right.svg"},{"code":"\\Uparrow","icon":"double-up.svg"},{"code":"\\Updownarrow","icon":"double-updown.svg"},{"code":"\\downarrow","icon":"down.svg"},{"code":"\\leftharpoondown","icon":"harpoon-leftdown.svg"},{"code":"\\leftrightharpoons","icon":"harpoon-leftright.svg"},{"code":"\\leftharpoonup","icon":"harpoon-leftup.svg"},{"code":"\\rightharpoondown","icon":"harpoon-rightdown.svg"},{"code":"\\rightleftharpoons","icon":"harpoon-rightdown.svg"},{"code":"\\rightharpoonup","icon":"harpoon-rightup.svg"},{"code":"\\leftarrow","icon":"left.svg"},{"code":"\\uparrow","icon":"up.svg"},{"code":"\\updownarrow","icon":"updown.svg"},{"code":"\\rightarrow","icon":"right.svg"}]

/***/ }),

/***/ "W7Da":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "19eec210b8ed1294d492081d77536eb3.svg";

/***/ }),

/***/ "WASk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "88f57daa3fa431bccfc778a21bb7b106.svg";

/***/ }),

/***/ "WDMg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"item":"item__1g15q","category":"category__2LVTs","container":"container__3IL1I"};

/***/ }),

/***/ "XmVe":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "32b67c7c0028b7f51a05a69d8979cab8.svg";

/***/ }),

/***/ "YinK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "05ef711c15d33d84d9abe15194092a4a.svg";

/***/ }),

/***/ "aQEH":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f1c1e31c81a77d11377fa301d7e843f.svg";

/***/ }),

/***/ "cFGi":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e417a373f9595287e27440a70553f12.svg";

/***/ }),

/***/ "fD6g":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "966792a136f0abc74e3ed36d625b68f2.svg";

/***/ }),

/***/ "fhC9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d05df7ea21cb6252bdd3864d6759f4a3.svg";

/***/ }),

/***/ "fveT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "973a989edf5e2a689e862524a431d78d.svg";

/***/ }),

/***/ "hkUD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29fcde2b95b3c472c4a3f7dfbc9c70f2.svg";

/***/ }),

/***/ "iJ1l":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ce6def2783d3dd561154be3fa456f39.svg";

/***/ }),

/***/ "k1iF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("jYI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("9qb7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_symbols__ = __webpack_require__("X3qc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_input__ = __webpack_require__("jJUk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_sass__ = __webpack_require__("WDMg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_sass__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var changeLatex = __WEBPACK_IMPORTED_MODULE_4__reducers_input__["a" /* actions */].changeLatex;

var Symbols = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function (state) {
  return _extends({}, state.symbols, {
    latex: state.input.latex
  });
}, _extends({}, __WEBPACK_IMPORTED_MODULE_3__reducers_symbols__["a" /* actions */], {
  changeLatex: changeLatex
})), _dec(_class = function (_Component) {
  _inherits(Symbols, _Component);

  function Symbols(props) {
    _classCallCheck(this, Symbols);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.toggleTab = _this.toggleTab.bind(_this);
    _this.insertSymbol = _this.insertSymbol.bind(_this);
    return _this;
  }

  Symbols.prototype.loadCategory = function loadCategory(name) {
    var _this2 = this;

    var data = __webpack_require__("03Ev")("./" + name + '/data.json');

    var visibleStyle = {
      display: 'inline'
    };

    var self = this;

    var elements = data.map(function (item) {
      var icon = __webpack_require__("s4kg")("./" + name + '/' + item.icon);
      return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        {
          style: self.props.visibleTabs[name] ? visibleStyle : null,
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_5__style_sass___default.a['item']),
          key: item.code,
          onClick: _this2.insertSymbol.bind(null, item.code) },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: icon })
      );
    });

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      null,
      elements
    );
  };

  Symbols.prototype.loadCategories = function loadCategories() {
    var _this3 = this;

    var categories = __webpack_require__("3B1i");

    var elements = categories.map(function (category) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        null,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          {
            className: __WEBPACK_IMPORTED_MODULE_5__style_sass___default.a.category,
            onClick: _this3.toggleTab },
          category
        ),
        _this3.loadCategory(category)
      );
    });

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      null,
      elements
    );
  };

  Symbols.prototype.insertSymbol = function insertSymbol(symbol) {
    this.props.changeLatex(this.props.latex + symbol);
  };

  Symbols.prototype.toggleTab = function toggleTab(category) {
    console.log('Changing tab', category.target.innerText);
    this.props.toggleTab(category.target.innerText);
  };

  Symbols.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__style_sass___default.a.container },
      this.loadCategories()
    );
  };

  return Symbols;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"])) || _class);


/* harmony default export */ __webpack_exports__["default"] = (Symbols);

/***/ }),

/***/ "lJxK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "43eb455b5502ecea16ad1ee6ef492d74.svg";

/***/ }),

/***/ "lPh+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61f196e9809bed1300ad4ec848a94f64.svg";

/***/ }),

/***/ "nSLv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9af5d0735c77c0b6c1ba1758766792db.svg";

/***/ }),

/***/ "pcyn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df9f38a1d24d9fcc9b33a7b43db0a250.svg";

/***/ }),

/***/ "rL2W":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eec2a84848b0ff2343a7a7fb7d38490b.svg";

/***/ }),

/***/ "rW8J":
/***/ (function(module, exports) {

module.exports = [{"code":"\\alpha","icon":"alpha.svg"},{"code":"\\beta","icon":"beta.svg"},{"code":"\\chi","icon":"chi.svg"},{"code":"\\delta","icon":"delta.svg"},{"code":"\\epsilon","icon":"epsilon.svg"},{"code":"\\eta","icon":"eta.svg"},{"code":"\\gamma","icon":"gamma.svg"},{"code":"\\kappa","icon":"kappa.svg"},{"code":"\\lambda","icon":"lambda.svg"},{"code":"\\iota","icon":"iota.svg"},{"code":"\\mu","icon":"mu.svg"},{"code":"\\nu","icon":"nu.svg"},{"code":"\\omega","icon":"omega.svg"},{"code":"o","icon":"omicron.svg"},{"code":"\\phi","icon":"phi.svg"},{"code":"\\pi","icon":"pi.svg"},{"code":"\\psi","icon":"psi.svg"},{"code":"\\rho","icon":"rho.svg"},{"code":"\\sigma","icon":"sigma.svg"},{"code":"\\tau","icon":"tau.svg"},{"code":"\\theta","icon":"theta.svg"},{"code":"\\upsilon","icon":"upsilon.svg"},{"code":"\\xi","icon":"xi.svg"},{"code":"\\zeta","icon":"zeta.svg"}]

/***/ }),

/***/ "s4kg":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arrows/data": "V0il",
	"./arrows/data.json": "V0il",
	"./arrows/double-down.svg": "fveT",
	"./arrows/double-left.svg": "aQEH",
	"./arrows/double-leftright.svg": "AKJt",
	"./arrows/double-right.svg": "4UK2",
	"./arrows/double-up.svg": "Uvcz",
	"./arrows/double-updown.svg": "QIV7",
	"./arrows/down.svg": "lPh+",
	"./arrows/harpoon-leftdown.svg": "fD6g",
	"./arrows/harpoon-leftright.svg": "nSLv",
	"./arrows/harpoon-leftup.svg": "4UPj",
	"./arrows/harpoon-rightdown.svg": "cFGi",
	"./arrows/harpoon-rightleft.svg": "6ZIH",
	"./arrows/harpoon-rightup.svg": "GQ7g",
	"./arrows/left.svg": "0euy",
	"./arrows/leftright.svg": "PiZu",
	"./arrows/mapsto.svg": "+9dm",
	"./arrows/right.svg": "pcyn",
	"./arrows/up.svg": "XmVe",
	"./arrows/updown.svg": "whEN",
	"./categories": "3B1i",
	"./categories.json": "3B1i",
	"./greek/alpha.svg": "0Fz5",
	"./greek/beta.svg": "OElg",
	"./greek/chi.svg": "CHwD",
	"./greek/data": "rW8J",
	"./greek/data.json": "rW8J",
	"./greek/delta.svg": "fhC9",
	"./greek/epsilon.svg": "I9+h",
	"./greek/eta.svg": "W7Da",
	"./greek/gamma.svg": "6O12",
	"./greek/iota.svg": "Jadh",
	"./greek/kappa.svg": "YinK",
	"./greek/lambda.svg": "B7Rb",
	"./greek/mu.svg": "rL2W",
	"./greek/nu.svg": "4125",
	"./greek/omega.svg": "WASk",
	"./greek/omicron.svg": "Ri/r",
	"./greek/phi.svg": "iJ1l",
	"./greek/pi.svg": "hkUD",
	"./greek/psi.svg": "QG+0",
	"./greek/rho.svg": "UbIH",
	"./greek/sigma.svg": "MtSy",
	"./greek/tau.svg": "FeDt",
	"./greek/theta.svg": "lJxK",
	"./greek/upsilon.svg": "1Dto",
	"./greek/xi.svg": "4CQs",
	"./greek/zeta.svg": "2aMt"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "s4kg";

/***/ }),

/***/ "whEN":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd966ef735f8bb1e747ff08470959283.svg";

/***/ })

});
//# sourceMappingURL=2.chunk.ba80f.js.map