/**
 *  function.js
 */
/* 함수 선언식
function sum(num1, num2) {
	let result = num1 + num2;
	return result;
} */
// 화살표 함수
// 구문이 한 개일 경우 {} return 생략 가능
let sum = (num1, num2) => num1 + num2;

// 함수 표현식
let showInfo = (result) => console.log(result);

showInfo('Hello, World');
showInfo(sum(10, 12));