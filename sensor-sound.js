// https://forum.arduino.cc/index.php?topic=257894.0
// http://www.mpja.com/download/31072mp.pdf
// + -> 5V
// G -> GND
// D0 -> D2

const five = require('johnny-five');

five.Board().on('ready', function() {
    let lastValue;
    const pin = new five.Pin({
        pin: 'D2',
        mode: five.INPUT
    });

    pin.read(function(err, value) {
        if (value !== lastValue && value === 1) {
            console.log('triggered', Date.now());
        }

        lastValue = value;
    })

    this.repl.inject({ pin });
});
