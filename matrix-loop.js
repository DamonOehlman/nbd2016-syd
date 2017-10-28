// https://github.com/rwaldron/johnny-five/blob/master/docs/led-matrix.md
// chaining tutorial: https://github.com/rwaldron/johnny-five/blob/master/docs/led-matrix-tutorial.md

// VCC -> +5V
// GND -> GND

const five = require('johnny-five');

const pattern = [
  '11111111',
  '00000000',
  '00000000',
  '00000000',
  '00000000',
  '00000000',
  '00000000',
  '00000000'
];

new five.Board().on("ready", function() {
  const matrix = new five.Led.Matrix({
    pins: {
      data: 2,    // DIN
      clock: 3,   // CLK
      cs: 4       // CS
    }
  });

  matrix.on();
  matrix.draw(pattern);

  setInterval(function() {
    const line = pattern.shift();
    pattern.push(line);

    matrix.draw(pattern);
  }, 30);

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
    matrix
  });
});
