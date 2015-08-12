define(function (require) {
    var messages = require('./messages');
    var print = require('print');
    var movie = require('./movie');
    var scripts = movie.scripts;

    print(scripts['start']);
    print(scripts['yelling']);
    var present_message =  movie.back_to_the_future();
    print(scripts['back_scr']);
    print(present_message);
    print(scripts['end']);

    print(messages.getHello());
});
