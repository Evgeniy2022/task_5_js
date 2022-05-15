//Задание 1.
/*
let num = +prompt("Введите значение");
if (!isNaN(num)) {
	if (num % 2 == 0) {
		console.log("Число четное")
	} else if (num % 2 !== 0) {
		console.log("Число нечетное")
	}
} else {
	console.log('Упс, кажется, вы ошиблись')
}

//Задание 2.
let x = 0;
let result = 0;
if (typeof x === "number") {
	result = `${x} - число`;
} else if (typeof x === "string") {
	result = `${x} - строка`;
} else if (typeof x === "boolean") {
	result = `${x} - логический тип`;
} else {
	result = `Тип x не определён`;
}

//Задание 3.
Например, "Hello" -> "olleH".
const reversSrtring = (string) => {
	let result = '';
	for (let i = string.length; i >= 0; i--) {
		result = string[i];
		console.log(result)
	}
}


//Задание 4.
let numberRandom = () => {
	return Math.round(Math.random() * 100);
}

//Задание 5.
let arr = [1, 5, 8, 78, 9];
let result;
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
	result = arr[i]
	console.log(result);
}

//Задание 6. Абсолютно непонятное задание


//Задание 7.
const arr = [1, 5, 8, 0];
let chet = 0;
let nechet = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0 && typeof (arr[i]) === 'number' && arr[i] !== 0) {
		chet++
	} if (arr[i] % 2 !== 0 && typeof (arr[i]) === 'number') {
		nechet++
	} if (arr[i] === 0) {
		zero++
	}
}
let result = 'четные:' + chet + ' НЕчетные:' + nechet + " ноль:" + zero;

console.log(result);

//Задание 8.
let mapNew = ["огурец", "помидор", "лук"];
let result = mapNew.forEach(function (item, index) {
	console.log('Ключ - ' + item + ',' + ' значение - ' + index);
})

*/