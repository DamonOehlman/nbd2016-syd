const five = require('johnny-five');

five.Board().on('ready', function() {
  const joystick = new five.Joystick({
    pins: ['A0', 'A1'] // VRy, VRx
  });

  this.repl.inject({ joystick });
  joystick.on('change', (evt) => {
    console.log('position: ', evt);
  });
});
