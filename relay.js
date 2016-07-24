// http://johnny-five.io/api/relay/
// + -> 5V
// - -> GND
// S -> 10

const five = require('johnny-five');

five.Board().on('ready', function() {
    const relay = new five.Relay(10);

    relay.open();
    this.repl.inject({ relay });

    // try in repl
    // relay.close()
});




