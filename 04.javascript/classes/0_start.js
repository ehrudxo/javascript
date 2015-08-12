var mov_script = require("./mov_script");
var scripts = mov_script.scripts;
var assert = mov_script.assert;
var action = mov_script.action;

console.log("0.0 pure object");
!action();
var obj1 = { answer: scripts.answer }
assert(obj1.answer);
// console.dir(obj1.answer);
