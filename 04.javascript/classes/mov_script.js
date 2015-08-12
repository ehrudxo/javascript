var scripts = exports.scripts = {
  action_sign : "//-----------액션----------",
  cut_sign : "-----------컷!----------//",
  ok_sign :  "---삼겹살먹으러 갑시다---//",
  question : "김광규:느그 아부지 뭐하시노?",
  answer : "유오성:건달인데예",
  explosion : "김광규:허이XX가",
}
exports.assert = function(){
  console.log("유오성 :" + arguments[0]);
  if(arguments[0]===scripts["answer"]){
    console.log(scripts["explosion"]);
    console.log(scripts["ok_sign"]);
  }else{
    console.log(scripts["cut_sign"]);
  }
}
exports.action = function(){
  console.log(scripts["action_sign"]);
  console.log(scripts["question"]);
}
