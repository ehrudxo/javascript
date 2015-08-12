var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
requirejs.define('foo', function (global) {
    return function () {
      console.log('foo');
        var ret, fn;
        return ret || global._;
    };

}(this));
requirejs.define('bar',  (function (global) {
    return function () {
      console.log('bar');
        var ret, fn;
        return ret || global._;
    };

}(this)));
requirejs(['foo', 'bar'],
function   (foo,   bar) {
  //console.log( foo, bar );
  // foo();
  // bar();
});
