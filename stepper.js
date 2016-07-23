// https://github.com/rwaldron/johnny-five/wiki/Stepper
// https://arduino-info.wikispaces.com/SmallSteppers
// requires custom firmata
// external power supply recommended
// 512rpm seems to be max

// IN1 -> 8
// IN2 -> 9
// IN3 -> 10
// IN4 -> 11

const five = require('johnny-five');

five.Board().on('ready', function() {
    const STEPS_PER_OUTPUT_RESOLUTION = 32 * 64;
    const stepper = new five.Stepper({
        type: five.Stepper.TYPE.FOUR_WIRE,
        stepsPerRev: 32,
        pins: {
            motor1: 8,
            motor2: 10,
            motor3: 9,
            motor4: 11
        }
    });

    stepper.rpm(500).cw().step(STEPS_PER_OUTPUT_RESOLUTION, function() {
        console.log("done");
    });

    this.repl.inject({ stepper });
});
