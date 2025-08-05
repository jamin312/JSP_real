/**
 *  array3.js
 */

let studentAry = [
	{name:"홍길동", score: 80},
	{name:"김민지", score: 85},
	{name:"박흥부", score: 88},
	{name:"김길동", score: 76}
]

let result = studentAry.reduce((acc, elem) => {
	let tr = document.createElement('tr');
	for (let prop in elem){
		let td = document.createElement('td');
		td.innerText = elem[prop];
		tr.appendChild(td);
	}
	acc.appendChild(tr);
	
	return acc;
}, document.querySelector('#item tbody'))




/*
result = studentAry.reduce((acc, elem) => {
	if(elem.score >= 80) {
		acc.push(elem);
	}
	return acc;
}, [])
console.log(result)

result = studentAry.reduce((acc, elem) => {
	return (acc.score > elem.score ? acc : acc = elem);
}, studentAry[0])
console.log(`최고점자는 ${result.name}, 점수는 ${result.score}점입니다.`); // 최고점자는 박흥부, 점수는 88점입니다.

let numAry = [10, 15, 34, 77, 20, 25, 30]
result = numAry.reduce((acc, elem, idx, ary) => {
	console.log(`${acc}, ${elem}`)
	if (elem % 2 == 0) {
		acc.push(elem);
	}
	return acc;
}, []);
console.log(result); */