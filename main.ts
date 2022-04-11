input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    if (pins.digitalReadPin(DigitalPin.P1) <= 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        radio.sendString("test")
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P0, 594)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P0, 0)
})
radio.setGroup(0)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
