let temperature = 0
basic.forever(function () {
    basic.showNumber(input.temperature())
    temperature = input.temperature()
    if (temperature < 20) {
        temperature = 20
    } else if (temperature < 45) {
        temperature = 45
    }
    pins.servoWritePin(AnalogPin.P1, pins.map(
    temperature,
    20,
    45,
    0,
    180
    ))
})
