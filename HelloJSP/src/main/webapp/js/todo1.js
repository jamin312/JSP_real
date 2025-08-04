/**
 *  todo1.js
 */
const students = [];
students.push({ sname: "홍길동", score: 90 });

function showList() {
	students.forEach((elem) => {
		let str = `<tr><td>${elem.sname}</td><td>${elem.score}</td></tr>`;
		document.querySelector('#tlist').innerHTML += str;
	});
}

document.querySelector('#addList').addEventListener('click', function() {

	let name = document.querySelector('#std_name').value;
	let score = document.querySelector('#std_score').value;
	if (name == '' || score == '') {
		return;
	}
	document.querySelector('#tlist').innerHTML = '';
	students.push({ sname: name, score: score });
	showList();

	document.querySelector('#std_name').value = '';
	document.querySelector('#std_score').value = '';
})

