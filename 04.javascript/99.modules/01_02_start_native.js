var message = "Biff: McFLy!!!!";
var back_to_the_future = function(message){
  console.log("[In the past]");
  console.log("Martin : Mom, Is that you?");
  console.log("Mom: Calvin Klein? I Love you!");
  console.log("~Father hit the biff~");
  console.log("Dr.Brown : Back to the Future!");
  return message;
}
console.log("[----------started--------------]");
console.log(message);
var present_message =  back_to_the_future(message);
console.log("[Back To The Future!]");
console.log(present_message);
console.log("[----------ended----------------]");
