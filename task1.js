let arr = [5, 4, 3, 6, 19, 28, 0];

function arrayCheck(array){
    let evenNumber = 0
    let oddNumber = 0
    let nullNumber = 0

    for (let i = 0; i < (array.length); i++) {
        if (typeof array[i] == 'number' && !isNaN(array[i])) {
            if (array[i] == 0){
                nullNumber++
            }else if (array[i] % 2 == 0) {
                evenNumber++
            }else {
                oddNumber++
            }
        }
    }

    console.log(`Количество четных элементов в массиве -  ${evenNumber}`);
    console.log(`Количество нечетных элементов в массиве -  ${oddNumber}`);
    console.log(`Количество нулевых элементов в массиве -  ${nullNumber}`);
}

arrayCheck(arr)
