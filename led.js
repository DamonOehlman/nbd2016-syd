const five = require('johnny-five');

five.Board().on('ready', function() {
  const led = new five.Led(13);

  this.repl.inject({ led });
  led.blink();
});
