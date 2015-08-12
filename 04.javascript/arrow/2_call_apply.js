console.log("[----------Starwars Starts");
var DarthVaderSays = function(){
  this.name = "Darth Vader";
  this.start = function(){
    console.log(this.name + " says: ----------I'm Your father!----------" );
  }
}
var vader = new DarthVaderSays();
var action = function(){
  this.name = "Luke Skywalker";
  setTimeout( vader.start.call(vader), 1000 );
  setTimeout( function(){
    console.log( this.name+" says: ----------No~~~~~~~~~~~~~--");
    console.log( "Starwars Ends----------]");
  }, 1200 );
}
!action();
