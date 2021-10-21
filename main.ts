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
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 16; index++) {
        a += 1
        燈數(a)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 16; index++) {
        b += 1
        燈數(b)
        basic.pause(100)
    }
})
function 燈數2 (num1: number) {
    if (num1 < 6) {
        x = 0
        y = num1 - 1
    } else if (num1 >= 6 && 0 < 9) {
        x = num1 - 5
        y = 4
    } else if (num1 >= 9 && num1 < 14) {
        x = 0
        y = 13 - num1
    } else if (num1 >= 14 && num1 <= 16) {
        x = 0
        y = 17 - num1
    }
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
}
let y = 0
let x = 0
let b = 0
let a = 0
a = 0
b = 0
basic.forever(function () {
	
})
