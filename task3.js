// Способ1
function func1(num1) {
    return function (num2) {
        return num1 + num2
    }
}

const result = func1(3)
console.log(result(7))


// Способ2
function func1(num1) {
    function func2(num2) {
        return num1 + num2
    }
    return func2(2)
}

console.log(func1(3))
