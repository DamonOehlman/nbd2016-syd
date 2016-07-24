// http://www.techbitar.com/luxblaster.html
// G -> GND
// + -> 5V
// S -> 10K Resistor -> 10
const five = require('johnny-five');

five.Board().on('ready', function() {
    const led = new five.Led(10);

    this.repl.inject({ led });
    led.blink();
});
