
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  }
})(function(exports) {
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
});
