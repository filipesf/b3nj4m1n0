var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13); // Pin13
  led.blink(1000); // 500ms interval
});
