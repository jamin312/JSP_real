/**
 * string.js
 * 문자열 메소드(indexOf, substring, slice, split, toUpperCase, toLowerCase
 * trim, replace, includes, charAt)
 */


let strAry = [" Hello, Java               "
	, " HTML, Css, JavaScript   "
	, "     Java is complier        "
	, "         Java and Javascript       "];
let filterWord = "java";
/* 1번) replace(/java/g, "****") == replaceAll('java', '****')
결과 => "Hello, ****"
		"HTML, CSS, ****SCRIPT"
		"**** IS COMPLIER"
		"**** AND ****SCRIPT" */
strAry.forEach(elem => {
 let star = elem.toLowerCase().replace(/java/g, '****').toUpperCase().trim();
console.log(`"${star}"`);
})

let noAry = ["920304-1213421", "990508 2928123", "0300702-4323123"]
/* 2번)
결과=>   "920304-1213421"은 남자입니다.
		"990508 2928123"은 여자입니다.
		"030702-4323123"은 여자입니다. */

noAry.forEach(elem =>{
	let gender = elem.slice(-7,-6)%2;
	gender ? console.log(`"${elem}은 남자입니다."`) : console.log(`"${elem}은 여자입니다."`);
	/* elem.charAt(elem.length -7);
	if(elem.slice(-7,-6)%2 == 0){
		console.log(`"${elem}은 여자입니다."`);
	} else{
		console.log(`"${elem}은 여자입니다."`);
	} */ 
	/*
	switch(gender){
		case 0 : 
			console.log(`"${elem}은 여자입니다."`);
			break;
		case 1 :
			console.log(`"${elem}은 남자입니다."`);
			break;
		default:
			console.log(`사람인가요?`);
	} */
})
		


let idx = "Hello, World".indexOf('W'); // 몇 번째 인덱스 값인지? 없으면 -1
console.log(idx);
let str = "Hello, World".indexOf("Nice");
if(str == -1){
	console.log("찾는 문자열이 없습니다.");
} 
console.log(str);

const names = ['홍길동', '홍길순', '김길동', '김민수', '박길동'];
// '길동' 이름이 총 몇 명인지 반환하는 함수를 생성
String.prototype.getKildong = function(find) {
   return this.indexOf(find);
}

let cnt = 0;
names.forEach(elem => {
	if(elem.getKildong("길동") != -1){
		cnt++;
	} 
})
console.log(`길동 이름은 총 ${cnt}명 입니다`);	

const obj = {
	name: '홍길동', // obj.name
	age: 20,
	info: function(){
		return `이름은 ${this.name}, 나이는 ${this.age}`;
	}
}
console.log(obj.name);

Array.prototype.sum = function(num1){
	this.push(num1);
}

const numbers = [1,2];
numbers.push(3);
numbers.sum(4);

console.log(numbers);