let counter = 0

const numCounter = function (a, b) {
    if (a < b) {
        console.log(a + counter);
        counter++
    } else {
        console.log(b + counter);
        counter++
    }

    if (counter > Math.abs(a - b)) {
        clearInterval(intervalId)
    }
}

const intervalId = setInterval(numCounter, 1000, 15, 3)
