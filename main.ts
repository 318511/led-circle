function 燈數 (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    }
}
input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        for (let index = 0; index <= 16; index++) {
            N = index + 1
            燈數(index)
            led.plot(x, y)
            燈數(index - 1)
            led.unplot(x, y)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 16; index++) {
        N = 0 + 1
        led.plot(x, y)
        N = 0
        led.unplot(x, y)
        basic.pause(100)
    }
})
let N = 0
let y = 0
let x = 0
x = 0
y = 0
