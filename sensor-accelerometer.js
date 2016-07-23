// https://github.com/rwaldron/johnny-five/blob/master/docs/accelerometer-adxl335.md
// http://projectlab.engphys.ubc.ca/coursearchive/apsc150-electronics-2013/accelerometer-adxl335-on-gy-61-breakout-board/

// VCC -> 5V
// GND -> GND
// X_OUT -> A0
// Y_OUT -> A1
// Z_OUT -> A2

const five = require('johnny-five');

five.Board().on('ready', function() {
    const sensor = new five.Accelerometer({
        controller: 'ADXL335',
        pins: ['A0', 'A1', 'A2']
    });

    sensor.on('change', function() {
        console.log("accelerometer");
        console.log("  x            : ", this.x);
        console.log("  y            : ", this.y);
        console.log("  z            : ", this.z);
        console.log("  pitch        : ", this.pitch);
        console.log("  roll         : ", this.roll);
        console.log("  acceleration : ", this.acceleration);
        console.log("  inclination  : ", this.inclination);
        console.log("  orientation  : ", this.orientation);
        console.log("--------------------------------------");
    });

    this.repl.inject({ sensor });
});



