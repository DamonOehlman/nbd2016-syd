// https://github.com/rwaldron/johnny-five/blob/master/docs/led-matrix.md
// chaining tutorial: https://github.com/rwaldron/johnny-five/blob/master/docs/led-matrix-tutorial.md

// VCC -> +5V
// GND -> GND

const five = require('johnny-five');

new five.Board().on("ready", function() {

    const heart = [
        "01100110",
        "10011001",
        "10000001",
        "10000001",
        "01000010",
        "00100100",
        "00011000",
        "00000000"
    ];

    const square = [
        "11111111",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "10000001",
        "11111111"
    ];

    const triangle = [
      "00000001",
      "00000011",
      "00000101",
      "00001001",
      "00010001",
      "00100001",
      "01000001",
      "11111111"
    ];

    const cross = [
      '10000001',
      '01000010',
      '00100100',
      '00011000',
      '00011000',
      '00100100',
      '01000010',
      '10000001'
    ];

    const matrix = new five.Led.Matrix({
        pins: {
            data: 2,    // DIN
            clock: 3,   // CLK
            cs: 4       // CS
        }
    });

    matrix.on();

    // let msg = "johnny-five".split("");

    // // Display each letter for 1 second
    // function next() {
    //     var c;

    //     if (c = msg.shift()) {
    //         matrix.draw(c);
    //         setTimeout(next, 1000);
    //     }
    // }

    // next();

    this.repl.inject({
        matrix,
        heart,
        square,
        triangle,
        cross,
    });
});
