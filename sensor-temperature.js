const five = require('johnny-five');

// constants for Steinhart–Hart equation
// see: https://en.wikipedia.org/wiki/Steinhart%E2%80%93Hart_equation
const SHH_A = 0.001129148;
const SHH_B = 0.000234125;
const SHH_C = 8.76741e-8;

five.Board().on('ready', function() {
    const sensor = new five.Thermometer({
        toCelsius: iduinoSensorToCelsius,
        pin: 'A0'
    });

    sensor.on('change', function() {
        console.log('temp: ' + this.celsius);
    });

    this.repl.inject({ sensor });
});

// converted from: http://playground.arduino.cc/ComponentLib/Thermistor2
function iduinoSensorToCelsius(rawADC) {
    const resistance = 10000 * (1024/rawADC - 1);
    const invT = SHH_A + SHH_B * Math.log(resistance) + SHH_C * Math.pow(Math.log(resistance), 3);

    // TODO(djo) - round the value to 2 decimal places
    return (1 / invT) - 273.15;
}





