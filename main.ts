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
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
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
