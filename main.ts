let Brilho = 0
function faça_alguma_coisa () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    if (input.lightLevel() < 50) {
        Brilho = 255
        led.setBrightness(Brilho)
    } else if (input.lightLevel() >= 51 && input.lightLevel() <= 199) {
        Brilho = 100
        led.setBrightness(Brilho)
    } else {
        Brilho = 0
        led.setBrightness(Brilho)
    }
}
basic.forever(function () {
    Brilho = 255
    faça_alguma_coisa()
})
