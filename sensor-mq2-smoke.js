// https://github.com/rwaldron/johnny-five/blob/master/docs/grove-gas-mq2-edison.md
// GND -> GND
// VCC -> VCC
// OUT -> A0

const five = require('johnny-five');

five.Board().on('ready', function() {
    const sensor = new five.Sensor('A0');

    sensor.scale(0, 100).on('change', function() {
        console.log(this.value);

        // depending on calibration
        // no smoke =~ 10
        // smoking match =~ 25
    });

    this.repl.inject({ sensor });
});


