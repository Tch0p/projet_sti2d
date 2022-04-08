input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P0, 338)
    radio.sendString("test")
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
radio.onReceivedString(function (receivedString) {
    if (0 == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
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
