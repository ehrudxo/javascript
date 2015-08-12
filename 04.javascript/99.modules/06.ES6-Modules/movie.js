//gogo for ES6
export function print (msg){
  console.log(msg);
}
export var scripts={
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
}
export function back_to_the_future(message){
  print(scripts["past"]);
  print(scripts["wakeup"]);
  print(scripts["dash"]);
  print(scripts["flipflop"]);
  print(scripts["back"]);
  return scripts["winnig"];
}
