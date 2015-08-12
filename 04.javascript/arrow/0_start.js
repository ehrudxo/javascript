console.log("[----------Starwars Starts");
var DarthVaderSays = function(){
  this.name = "Darth Vader";
  this.start = function(){
    console.log(this.name + " says: ----------I'm Your father!----------" );
  }
}
var vader = new DarthVaderSays();
var Action = function(){
  this.name = "Luke Skywalker";
  this.start = function(){
    setTimeout( vader.start, 1000 );
    setTimeout( function(){
      console.log( this.name+" says: ----------No~~~~~~~~~~~~~--");
      console.log( "Starwars Ends----------]");
    }, 1200 );
  }
}
var action = new Action();
!action.start();
