console.log("[----------Starwars Starts");
var DarthVaderSays = function(){
  this.name = "Darth Vader";
  this.start = ()=>{
    console.log(this.name + " says: ----------I'm Your father!----------" );
  }
}
var vader = new DarthVaderSays();
var action = {
  name : "Luke Skywalker",
  start : function(){
    setTimeout( vader.start, 1000 );
    setTimeout(()=>{
      console.log( this.name+" says: ----------No~~~~~~~~~~~~~--");
      console.log( "Starwars Ends----------]");
    }, 1200 );
  }
}
!action.start();
