/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Joe = __webpack_require__(1).default;
	
	var joe = new Joe();
	joe.run();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = function(child, parent) {
	  child.prototype = Object.create(parent.prototype, {
	    constructor: {
	      value: child,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  child.__proto__ = parent;
	};
	
	var Person = __webpack_require__(2).default;
	
	var Joe = function(Person) {
	  var Joe = function Joe() {
	      Person.call(this);
	      this.genre = 'male';
	      this.name = 'Joe';
	  };
	
	  _extends(Joe, Person);
	  return Joe;
	}(Person);
	
	exports.default = Joe;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _classProps = function(child, staticProps, instanceProps) {
	  if (staticProps)
	    Object.defineProperties(child, staticProps);
	
	  if (instanceProps)
	    Object.defineProperties(child.prototype, instanceProps);
	};
	
	var _extends = function(child, parent) {
	  child.prototype = Object.create(parent.prototype, {
	    constructor: {
	      value: child,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  child.__proto__ = parent;
	};
	
	var Animal = __webpack_require__(3).default;
	
	var Person = function(Animal) {
	  var Person = function Person() {
	    Animal.apply(this, arguments);
	  };
	
	  _extends(Person, Animal);
	
	  _classProps(Person, null, {
	    run: {
	      writable: true,
	
	      value: function() {
	          Animal.prototype.run.call(this);
	          console.log('The human %s of genre %s is not very fast', this.name, this.genre);
	      }
	    }
	  });
	
	  return Person;
	}(Animal);
	
	exports.default = Person;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	"use strict";
	var _slice = Array.prototype.slice;
	
	var _classProps = function(child, staticProps, instanceProps) {
	  if (staticProps)
	    Object.defineProperties(child, staticProps);
	
	  if (instanceProps)
	    Object.defineProperties(child.prototype, instanceProps);
	};
	
	var Animal = function() {
	  var Animal = function Animal(genre) {
	    var args = _slice.call(arguments, 1);
	    this.genre = genre;
	  };
	
	  _classProps(Animal, null, {
	    run: {
	      writable: true,
	
	      value: function() {
	          console.log('The Animal %s is running', this.name);
	      }
	    }
	  });
	
	  return Animal;
	}();
	
	exports.default = Animal;


/***/ }
/******/ ])
//# sourceMappingURL=main.bundle.js.map