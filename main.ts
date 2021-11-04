function 旋轉 (around: number) {
    if (around < 4) {
        a = around
        b = 1
    } else if (around >= 4 && around < 6) {
        a = 3
        b = around - 2
    } else if (around >= 6 && around < 8) {
        a = 8 - around
        b = 3
    } else if (around >= 8) {
        a = 1
        b = 10 - around
    }
}
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
        for (let index = 0; index <= 15; index++) {
            N = index + 1
            燈數(N)
            led.plot(x, y)
            basic.pause(100)
            led.unplot(x, y)
            燈數(N - 1)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 15; index++) {
        N = index + 1
        燈數(N)
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index2 = 0; index2 <= 7; index2++) {
        N2 = index2 + 1
        旋轉(N2)
        led.plot(a, b)
        basic.pause(100)
    }
    led.plot(2, 2)
})
input.onButtonPressed(Button.B, function () {
    while (!(input.buttonIsPressed(Button.A))) {
        for (let index = 0; index <= 15; index++) {
            N = 16 - index
            燈數(N)
            led.plot(x, y)
            basic.pause(100)
            led.unplot(x, y)
            燈數(N - 1)
        }
    }
})
let N2 = 0
let N = 0
let b = 0
let a = 0
let y = 0
let x = 0
x = 0
y = 0
