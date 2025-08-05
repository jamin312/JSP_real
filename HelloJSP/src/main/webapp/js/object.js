/**
 * object.js
 */
//console.log(members);

console.log(members[0]);

for (let member of members) {
	//let member = members[1]; // {id:?, first_name:?, ...}
	//let id = member.id;
	//let first_name = member.first_name;
	
	let { id, first_name, last_name, email } = member;
	console.log(`${id}, ${first_name}, ${last_name}, ${email}`);
	let tr = document.createElement('tr');
	// member.id == member['id']
	// for .. in ..
	for (let prop in member) {
		console.log(`속성 : ${prop}, 값: ${member[prop]}`); //=> member의 value
		if(prop == 'gender') {
			if(member[prop] == 'Female'){
				tr.style.backgroundColor = 'pink'
			} else if (member[prop] == 'Male') {
				tr.style.backgroundColor = 'skyblue'
			} else {
				tr.style.backgroundColor = '#DDD'
			}
		}
		let td = document.createElement('td');
		td.innerText = member[prop];
		tr.appendChild(td);
	} //end for in
	// 삭제버튼
	let td = document.createElement('td');
	let rmBtn = document.createElement('button');
	rmBtn.innerText = '삭제';
	// 이벤트&이벤트 핸들러
	rmBtn.addEventListener('click', (e) => {
	 	//console.dir(e.target.parentElement.parentElement); => tr
		//console.log(parent.children); => td들
		let parent = e.target.parentElement.parentElement;
		let fn = parent.children[1].innerText;
		let ln = parent.children[2].innerText;
		if(confirm(`${fn} ${ln}을 삭제하시겠습니까?`)){
		parent.remove(); // remove() 화면상에서 지움
		}
	})
	td.appendChild(rmBtn);
	tr.appendChild(td);
	
	document.querySelector('#show tbody').appendChild(tr);
} // end for of

// querySelectorAll 배열처럼 , 선택자 중요 tr.children
let sum = 0;
/* 밑에와 같은 형식
document.querySelectorAll('#show tbody tr')//
	.forEach(elem => { let salary = elem.children[5].innerText;
						sum += parseInt(salary)
			 }); */

document.querySelectorAll('#show tbody tr td:nth-of-type(6)')//
	.forEach(elem => sum += parseInt(elem.innerText));
console.log(`합계는 ${sum}`);
