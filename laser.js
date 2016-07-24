// PINS (LTR - laser facing down)
// - -> GND
// + -> 5V
// S -> 10

const five = require('johnny-five');

five.Board().on('ready', function() {
    const pin = new five.Pin(10);

    this.repl.inject({ pin });
    pin.low();
});
