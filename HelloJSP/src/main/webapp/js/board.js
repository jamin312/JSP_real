/**
 *  board.js
 *  글번호 200 댓글 정보 => json 반환
 * 'div.content>ul' => 자식요소 / 'div.content ul' => 내부의 모든 ul
 */
let page = 1; // page 변경할 수 있게
// 페이지로딩 시점에 실행
function showReplyList() {
	// 기존 목록을 지우고 새로 출력
	document.querySelectorAll('div.content>ul>li').forEach((elem, idx) => {
		if(idx >= 2){
			elem.remove();
		}
	});
	// 목록 출력
	svc.replyList({ bno, page }, // 첫번째 param
		result => {
			result.forEach(reply => {
				let li = makeRow(reply);
				document.querySelector('div.content>ul').appendChild(li);
			})
		}, // 두번째 param
		err => console.error(err) // 세번째 param
	);
} // end showReplyList()
showReplyList(); // 최초 호출 시 목록 출력.

// 이벤트 댓글 등록
document.querySelector('#addReply').addEventListener('click', function(e) {
	// 게시글 번호(bno), 작성자(logId), 댓글(reply)
	let reply = document.querySelector('#reply').value;
	// true/false => falsy(0, '' , null, undifined) js에서 false로 여김
	if (!bno || !reply || !logId) {
		alert('필수값을 입력')
		return;
	}
	// 서버 호출해서 등록
	svc.registerReply({ bno, reply, replyer: logId },
		result => {
			console.log(result);
			if (result.retCode == 'OK') {
				let r = result.retVal; // {replyNo : 123} ...
				let li = makeRow(r);
				document.querySelector('div.content>ul').appendChild(li);
			} else if (result.retCod == 'NG') {
				alert('처리 중 예외 발생');
			} else {
				alert('알 수 없는 코드');
			}
		},
		err => console.error(err)
	)
})

// 페이징 링크에 클릭 이벤트
document.querySelectorAll('div.footer>div.pagination>a')//
	.forEach(atag => {
		atag.addEventListener('click', e => {
			e.preventDefault(); // 기본기능을 차단
			page = e.target.innerText;
			// 목록 그려주기
			showReplyList();
		})
	})

// 댓글 정보를 활용해서 li>span 구조 만들기
function makeRow(reply) {

	let li = document.createElement('li');
	['replyNo', 'reply', 'replyer'].forEach(elem => {
		let span = document.createElement('span');
		span.innerText = reply[elem];
		if (elem == 'reply') {
			span.setAttribute('class', 'col-sm-5')
		} else {
			span.setAttribute('class', 'col-sm-2')
		}
		li.appendChild(span);
	}) // 반복문
	// 삭제 버튼
	let span = document.createElement('span');
	span.setAttribute('class', 'col-sm-2');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc);
	btn.innerText = '삭제';
	span.appendChild(btn);
	li.appendChild(span);

	return li;
} // end makeRow()

// 데이터 삭제 이벤트 핸들러
function deleteRowFnc(e) {
	let rno = e.target.parentElement.parentElement.children[0].innerText;
	console.log(rno);
	if (!confirm(`${rno} 번 글을 삭제하겠소?`)) {
		alert('삭제를 취소했소.');
		return;
	}
	// fetch 서버프로그램 호출
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				e.target.parentElement.parentElement.remove();
			} else if (result.retCode == 'NG') {
				alert('삭제 실패!');
			} else {
				alert('알 수 없는 코드이오.');
			}
		},
		err => console.error(err)
	)
} // end deleteRowFnc()