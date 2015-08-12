define(function () {
  var print = require('print');
  return {
      scripts: {
        start : "[----------started--------------]",
        yelling : "Biff: McFLy!!!!",
        past : "[In the past]",
        wakeup : "Martin : Mom, Is that you?",
        dash : "Mom: Calvin Klein? I Love you!",
        flipflop :"~Father hit the biff~",
        back :"Dr.Brown : Back to the Future!",
        back_scr: "[Back To The Future!]",
        winnig : "Biff: Mr.McFly?",
        end: "[----------ended----------------]"
      },
      back_to_the_future : function(message){
        print(this.scripts["past"]);
        print(this.scripts["wakeup"]);
        print(this.scripts["dash"]);
        print(this.scripts["flipflop"]);
        print(this.scripts["back"]);
        return this.scripts["winnig"];
      }
  };
});
