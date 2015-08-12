var mov_script = require("./mov_script");
var scripts = mov_script.scripts;
var assert = mov_script.assert;
var action = mov_script.action;

console.log("\n","2.1 function");
!action();
var ft2 = exports.ft2 = function(){
  this.answer =scripts.answer;this.name="steve";
}
assert(ft2.answer);
//console.dir(ft2);


console.log("\n","2.2 object made by function2");
!action();
var obj2 = new ft2();
assert(obj2.answer);

//console.dir(obj2);
