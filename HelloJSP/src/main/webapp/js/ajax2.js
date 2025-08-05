/**
 *  ajax2.js
 *  JSON.parse(json 문자열)
 *  xml방식은 데이터가 너무 길어서 잘 사용 x
 *  주로 json 방식 사용
 */

fetch('js/MOCK_DATA.json') // Promise 객체
	.then(function(result) {
		console.log(result); // 응답정보(body에 2진법으로 된 String파일)
		return result.json(); // 응답 본문을 JSON으로 파싱 Promise 객체
	}) // 정상
	.then(function(result) {
		// console.log(result); // 실제 파싱된 JavaScript 객체
		result.forEach(elem => {
			let tr = document.createElement('tr');
			['id', 'first_name', 'last_name', 'salary'].forEach(field => {
				let td = document.createElement('td');
				td.innerText = elem[field];
				tr.appendChild(td);
			})
			// 삭제 버튼
			let td = document.createElement('td');
			let rmBtn = document.createElement('button');
			rmBtn.innerText = '삭제';
			td.appendChild(rmBtn);
			tr.appendChild(td);

			document.querySelector('#show tbody').appendChild(tr);
		})
	})
	.catch(function(err) {
		console.log(err);
	}) // 오류