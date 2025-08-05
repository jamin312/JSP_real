/**
 *  array.js (forEach, map, filter, reduce)
 * document.querySelectorAll() 결과에 사용
 */

let sum = 0;

var totalSum = (elem, idx, ary) => {
	sum += elem;
	if (idx == ary.length - 1) {
		console.log(`총 합계는 ${sum}`);
	}
}

var evenSum = (elem, idx, ary) => {
	if (elem % 2 == 0) {
		sum += elem;
	}
	if (idx == ary.length - 1) {
		console.log(`짝수 합계는 ${sum}`);
	}
}

var oddSum = (elem, idx, ary) => {
	if (elem % 2 != 0) {
		sum += elem;
	}
	if (idx == ary.length - 1) {
		console.log(`홀수 합계는 ${sum}`);
	}
}
sum = 0;
[12, 34, 83, 22, 59, 77].forEach(totalSum);
sum = 0;
[12, 34, 83, 22, 59, 77].forEach(evenSum);
sum = 0;
[12, 34, 83, 22, 59, 77].forEach(oddSum);
