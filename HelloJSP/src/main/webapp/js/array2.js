/**
 * array2.js 
 * filter 배열메소드
 *  요소의 값 -> true일 때 그 요소를 새로운 배열에 생성
 */

function makeRow(member) {
	// tr>td*7 기능
	let tr = document.createElement('tr');

	for (let prop in member) {
		let td = document.createElement('td');
		td.innerText = member[prop];
		tr.appendChild(td);
	} //end for in

	let td = document.createElement('td');
	let rmBtn = document.createElement('button');
	rmBtn.innerText = '삭제';

	rmBtn.addEventListener('click', (e) => {
		let parent = e.target.parentElement.parentElement;
		let fn = parent.children[1].innerText;
		let ln = parent.children[2].innerText;
		if (confirm(`${fn} ${ln}을 삭제하시겠습니까?`)) {
			parent.remove();
		}
	})
	td.appendChild(rmBtn);
	tr.appendChild(td);

	return tr;
}

// 급여가 7000 이상인 사람들을 목록 A -> A'
// obj = {key: value} => key와 value가 같으면 중복 생략 가능
members.filter(elem => elem.salary >= 7000)
	   .filter(elem => elem.gender == 'Female')
	   .map(elem => {
			let {id, first_name, last_name, salary} = elem;
			let obj = {id, first_name, last_name, salary}; // 중요!
			return obj;
	   })
	   .forEach(elem => document.querySelector('#show tbody')
	   .appendChild(makeRow(elem)))



let result = [10, 20, 30, 40, 50].filter(elem => {
	if (elem >= 30) {
		return true;
	}
});

console.log(result);