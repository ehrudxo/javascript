var mov_script = require("./mov_script");
var scripts = mov_script.scripts;
var assert = mov_script.assert;
var action = mov_script.action;

class Scene{
  constructor(actor) {
      this.actor = actor;
      this.answer = scripts.answer;
  }
  static defaultAnswer() {
    return "집에가자";
  }
}
class ActionScene extends Scene{
  constructor(actor, weapon, die_word) {
      super(actor);
      this.weapon=weapon;
      this.die_word = die_word;
  }
}
var scene = new Scene("장동건");
var action_scene = new ActionScene("유오성","사시미","고마해라 마이 뭇다 아이가");
console.log(scene);
console.log(action_scene);
