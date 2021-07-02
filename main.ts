pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
