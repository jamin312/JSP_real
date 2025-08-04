/**
 *  basic2.js
 */
const fruits = ['apple', 'banana', 'cherry']; // new Array(); 배열 객체 생성
fruits[3] = 'orange';

// 추가 삭제
fruits.push('melon'); // 마지막에 추가
fruits.unshift('mango'); // 처음에 추가
fruits.pop(); // 마지막 삭제
fruits.pop();
fruits.shift(); // 처음 삭제
fruits.shift();

for (let fruit of fruits) {
	console.log(fruit);
}


const members = [{ id: 'user01', name: 'Hong', point: 100 }];
members.push({ id: 'user02', name: 'Park', point: 120 });
members.push({ id: 'user03', name: 'Kim', point: 90 });

for (let i = 0; i < members.length; i++) {
	if (members[i].point >= 100)
		console.log(`id: ${members[i].id}, name: ${members[i].name}, point: ${members[i].point}`);
}

// 반복문 forEach 배열에만
members.forEach(function(elem, idx, ary) {
	if(elem.point >= 100){
	console.log(`id: ${elem.id}, name: ${elem.name}, point: ${elem.point}`);
	}
	console.log(elem)
});




