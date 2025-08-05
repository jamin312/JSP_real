/**
 *  ajax.js
 * Asynchronous JavaScript And XML 비동기
 */

// 동기 방식
console.log('7');
console.log('8');
console.log('9');

// 비동기 방식이지만, 결과적으로 "순차적(동기처럼)"으로 보이게 실행되는 구조
setTimeout(function() {
	console.log('1');
	
	setTimeout(function() {
		console.log('2');
		
		setTimeout(function() {
			console.log('3');

		}, 500/**밀리세컨드 */)
		
	}, 2000/**밀리세컨드 */)
	
}, 1000/**밀리세컨드 */)

// 비동기방식 기다리지 않고 다음 작업을 먼저 처리
setTimeout(function() {
	console.log('4');

}, 1000/**밀리세컨드 */)

setTimeout(function() {
	console.log('5');

}, 2000/**밀리세컨드 */)

setTimeout(function() {
	console.log('6');

}, 500/**밀리세컨드 */)

const xhtp = new XMLHttpRequest(); 

