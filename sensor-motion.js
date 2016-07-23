// https://github.com/rwaldron/johnny-five/blob/master/docs/ir-motion.md
// http://www.tweaking4all.com/hardware/pir-sensor/
// VCC -> 3.3V (or 5V)
// GND -> GND
// OUT -> 7

const five = require('johnny-five');

five.Board().on('ready', function() {
    const sensor = new five.IR.Motion(7);

    sensor.on('calibrated', function() {
        console.log('completed calibration: ', Date.now());
    });

    sensor.on('motionstart', function() {
        console.log('detected motion: ', Date.now());
    });

    sensor.on('motionend', function() {
        console.log('motion stopped: ', Date.now());
    });

    this.repl.inject({ sensor });
});


