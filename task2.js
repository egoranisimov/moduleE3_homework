function primeNumberCheck(num) {
    if (num < 0 || num > 1000) {
        return 'Введены некорректные данные'
    } else if (num == 0 || num == 1) {
        return 'Введенное число не является ни простым ни составным'
    }

    let flag = true;
    for (let i = 2; i < num; i++) {
    	if (num % i == 0) {
    		flag = false;
            break;
    	}
    }

    if (flag) {
        return 'Вы ввели простое число';
    } else {
        return 'Вы ввели составное число';
    }
}

console.log(primeNumberCheck(7));
