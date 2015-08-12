'use strict';

var _movie = require("./movie");

(0, _movie.print)(_movie.scripts['start']);
(0, _movie.print)(_movie.scripts['yelling']);
var present_message = (0, _movie.back_to_the_future)();
(0, _movie.print)(_movie.scripts['back_scr']);
(0, _movie.print)(present_message);
(0, _movie.print)(_movie.scripts['end']);

