const five = require('johnny-five');

five.Board().on('ready', function() {
  const led = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    }
  });

  this.repl.inject({ led });

  led.on();
  led.color("#FF0000");
  led.blink();
});
