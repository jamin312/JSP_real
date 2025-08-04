/**
 *  data.js
 */
const str = `[{"id":1,"first_name":"Nola","last_name":"Jiranek","email":"njiranek0@privacy.gov.au","gender":"Female","salary":6055},
{"id":2,"first_name":"Marni","last_name":"Mogenot","email":"mmogenot1@usda.gov","gender":"Bigender","salary":8757},
{"id":3,"first_name":"Ker","last_name":"Burgum","email":"kburgum2@cnn.com","gender":"Male","salary":9322},
{"id":4,"first_name":"Willey","last_name":"Lacey","email":"wlacey3@admin.ch","gender":"Male","salary":7458},
{"id":5,"first_name":"Maurizio","last_name":"Petrecz","email":"mpetrecz4@weibo.com","gender":"Male","salary":8784},
{"id":6,"first_name":"Codie","last_name":"Dudman","email":"cdudman5@barnesandnoble.com","gender":"Male","salary":8163},
{"id":7,"first_name":"Sean","last_name":"Tufts","email":"stufts6@imgur.com","gender":"Female","salary":9071},
{"id":8,"first_name":"Lucinda","last_name":"MacDonagh","email":"lmacdonagh7@github.com","gender":"Female","salary":7225},
{"id":9,"first_name":"Phillie","last_name":"Casaro","email":"pcasaro8@yale.edu","gender":"Female","salary":7888},
{"id":10,"first_name":"Teirtza","last_name":"Goford","email":"tgoford9@cpanel.net","gender":"Female","salary":6760},
{"id":11,"first_name":"Zorana","last_name":"Jime","email":"zjimea@networksolutions.com","gender":"Female","salary":5874},
{"id":12,"first_name":"Gian","last_name":"Bowness","email":"gbownessb@huffingtonpost.com","gender":"Male","salary":5159},
{"id":13,"first_name":"Alley","last_name":"Rampling","email":"aramplingc@hugedomains.com","gender":"Male","salary":8927},
{"id":14,"first_name":"Jennine","last_name":"Regis","email":"jregisd@usda.gov","gender":"Female","salary":6486},
{"id":15,"first_name":"Julian","last_name":"Eckersall","email":"jeckersalle@mtv.com","gender":"Male","salary":6097}]`;

// json 문자열(객체) -> JSON.pares() -> 자바 스크립트 객체
let members = JSON.parse(str); // 규칙 준수

console.log(str); // 가공하기 어려움 
console.log(members[1].first_name); // 가공하기 쉬움

// 객체 -> JSON.stringify() -> 문자열 / 반대로 한거임
let students = [{name:"Hong", age:20},{name:"Choi", age:21}];
let json = JSON.stringify(students);
console.log(json); // 속성에 해당되는 것도 문자열임

// 반복문(forEach) => 성별:Female 급여: 6000이상인 사람을 출력

members.forEach(elem => {
	if(elem.gender.toLowerCase() == 'female' && elem.salary >= 6000){
		console.log(`이름은 ${elem.first_name}, 급여는 ${elem.salary}, 성별은 ${elem.gender}`)
	}
})
