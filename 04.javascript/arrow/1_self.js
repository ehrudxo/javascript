console.log("[----------Starwars Starts");
var DarthVaderSays = function(){
  this.name = "Darth Vader";
  self = this;
  this.start = function(){
    console.log(self.name + " says: ----------I'm Your father!----------" );
  }
}
var vader = new DarthVaderSays();
var action = function(){
  this.name = "Luke Skywalker";
  self = this;
  setTimeout( vader.start, 1000 );
  setTimeout( function(){
    console.log( self.name+" says: ----------No~~~~~~~~~~~~~--");
    console.log( "Starwars Ends----------]");
  }, 1200 );
}
!action();
