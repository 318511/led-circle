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
function 燈數2 (num2: boolean) {
    if (num2 < 6) {
        x = num2
        y = 0
    } else if (num2 >= 6 && num2 < 9) {
        x = 4
        y = num2
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    }
}
let b = 0
let y = 0
let x = 0
let a = 0
a = 0
basic.forever(function () {
	
})
