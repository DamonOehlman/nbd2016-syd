// https://github.com/rwaldron/johnny-five/wiki/Proximity#hcsr04parallax-ping-
// VCC -> 5V
// GND -> GND
// TRIG -> 7
// PING -> TRIG (bridge the pins on the breadboard)
const five = require('johnny-five');

five.Board().on('ready', function() {
    const sensor = new five.Proximity({
        controller: "HCSR04",
        pin: 7
    });

    sensor.on("change", function() {
        console.log(this.cm);
    });

    this.repl.inject({ sensor });
});


