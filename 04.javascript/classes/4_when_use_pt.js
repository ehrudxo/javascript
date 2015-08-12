
var Friends = function (name) {
  this.name = name;
};
Friends.prototype.data =
["동수 마이 컸네",
"원래 키는 내가 니보다 컸다 아이가",
"하와이 가라"];
Friends.prototype.showData = function () { console.log(this.name, this.data); };

var actor1 = new Friends("이준석");
var actor2 = new Friends("한동수");

actor1.showData();
actor2.showData();

actor1.data.push("니가가라 하와이");
//
actor1.showData(); // "foo1", [1, 2, 3, 4]
actor2.showData(); // "foo2", [1, 2, 3, 4]
