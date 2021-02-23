input.onButtonPressed(Button.A, function () {
    Number1 += 1
    basic.showNumber(Number1)
})
input.onButtonPressed(Button.AB, function () {
    Total = Number1 + Number2
    basic.showNumber(Total)
})
/**
 * Number1 - Based on input
 * 
 * Display
 * 
 * Number2 - Based on input
 * 
 * Display
 * 
 * Add them Total
 * 
 * Display
 */
input.onButtonPressed(Button.B, function () {
    Number2 += 1
    basic.showNumber(Number2)
})
input.onGesture(Gesture.Shake, function () {
    Total = 0
    Number1 = 0
    Number2 = 0
    basic.clearScreen()
})
let Total = 0
let Number2 = 0
let Number1 = 0
Number1 = 0
Number2 = 0
Total = 0
