var movie = require('./movie');
var scripts = movie.scripts;
var print = movie.print;

print(scripts['start']);
print(scripts['yelling']);
debugger;
var present_message =  movie.back_to_the_future();
print(scripts['back_scr']);
print(present_message);
print(scripts['end']);
