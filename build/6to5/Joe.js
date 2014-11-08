(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Person.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Person.js"));
  }
})(function(exports, _PersonJs) {
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

  var Person = _PersonJs.default;

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
});
