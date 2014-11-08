(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Animal.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Animal.js"));
  }
})(function(exports, _AnimalJs) {
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

  var Animal = _AnimalJs.default;

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
});
