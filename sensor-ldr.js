// https://learn.adafruit.com/photocells/using-a-photocell
// VCC -> 5V
// GND -> GND
// OUT -> A0

const five = require('johnny-five');

five.Board().on('ready', function() {
    const sensor = new five.Sensor({
        pin: 'A0'
    });

    sensor.on('change', function(value) {
        console.log(value);
    });

    this.repl.inject({ sensor });
});




