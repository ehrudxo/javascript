var util = require("util");
var ft1 = require("./1_function1").function1;
var ft2 = require("./2_function2").function2;
var ft3 = require("./3_prototype").function3;

var child={};
child.ft1 = function(){this.name="childObj"};
child.ft2 = function(){};
child.ft3 = function(){};

util.inherits(child.ft1, ft1);
util.inherits(child.ft2, ft2);
util.inherits(child.ft3, ft3);

console.dir(ft1, child.ft1,
            ft2, child.ft2,
            ft3, child.ft3);
