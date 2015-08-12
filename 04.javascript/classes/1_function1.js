var mov_script = require("./mov_script");
var scripts = mov_script.scripts;
var assert = mov_script.assert;
var action = mov_script.action;

console.log("1.1 function");
!action();
var ft1 = exports.function1 = function ft1(){
  var answer = scripts.answer;
  var name="james";
}
assert(ft1.answer);
// console.dir(obj1.answer);


console.log("\n","1.2 object made by function1");
!action();
var obj1 = new ft1();
assert(obj1.answer);

//console.dir(obj1);
