var mov_script = require("./mov_script");
var scripts = mov_script.scripts;
var assert = mov_script.assert;
var action = mov_script.action;

console.log("\n","3.1 function prototype");
!action();
var ft3 = exports.ft2 = function(){this.name="naruto";}
ft3.prototype.answer =scripts.answer
assert(ft3.prototype.answer);
// assert(ft3.prototype.answer);


console.log("\n","3.2 object made by prototype function");
!action();
var obj3 = exports.obj3 = new ft3();
assert(obj3.answer);

//console.dir(obj3);
