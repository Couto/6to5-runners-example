(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Joe.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Joe.js"));
  }
})(function(exports, _JoeJs) {
  "use strict";
  var Joe = _JoeJs.default;

  var joe = new Joe();
  joe.run();
});
