/**
 *  basic.js
 */
console.log("basic");

var name = 'Hong'; // 변수 선언

name = 'Hwang'; // 새로운 값을 대입

var name = 'Park'; // 새로 선언 가능
console.log(name);

let name1 = 'Kim'; // 변수의 선언은 한 번만
const age = 20; // 상수, 값 변경 불가

// Object 타입
const obj = new Object(); // = {} 
obj.name = 'Hong'; // key = value
obj.age = 20;
obj.info = function () {
	console.log('이름은 ' + obj.name + ', 나이는 '+ obj.age);
}
obj.hobbies = ['독서', '수영', '자전거'];
obj.pets = [{name: '야옹이', age: 2}, {name: '멍뭉이', age: 3}];

console.log(obj);
console.log(obj.name);
console.log(obj['name']);
console.log('첫번째 취미: ' + obj.hobbies[0]);
console.log('두번째 취미: ' + obj['hobbies'][1]); // 기억하기
console.log(`세번째 취미: ${obj['hobbies'][2]}`);

console.log(obj.pets[0].name);
obj.pets[0].name = '고양이';
obj.pets[1].name;

console.log(obj.pets[0].name);

// 객체 구조
console.log(this);
console.dir(window.document.children[0].children[1].innerHTML);
// window.alert('윈도우객체의 alret 함수'')

window.alert('윈도우객체의 alert함수');

obj.info();