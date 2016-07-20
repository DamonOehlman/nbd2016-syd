// http://www.dfrobot.com/wiki/index.php/LCD_KeyPad_Shield_For_Arduino_SKU:_DFR0009

const five = require('johnny-five');

five.Board().on('ready', function() {
    const lcd = new five.LCD({
        // RS, EN, DB4, DB5, DB6, DB7
        pins: [8, 9, 4, 5, 6, 7],
        backlight: 10,
        rows: 2,
        columns: 16
    });

    this.repl.inject({ lcd });
    lcd.clear().print("hello");
});

