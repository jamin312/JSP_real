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
		if (idx >= 2) {
			elem.remove();
		}
	});
	// 목록 출력
	svc.replyList({ bno, page }, // 첫번째 param
		result => {
			result.forEach(reply => {
				// insertAdjacentHTML => mdn 검색해서 읽어보기
				let target = document.querySelector('div.content>ul');
				let text = `<li>
				              <span class="col-sm-2">${reply.replyNo}</span>
				        	  <span class="col-sm-5">${reply.reply}</span>
				       		  <span class="col-sm-2">${reply.replyer}</span>
				        	  <span class="col-sm-2"><button onclick='deleteRowFnc(event)'>삭제</button></span>
				      		</li>`;
				target.insertAdjacentHTML("beforeend", text); // position, text

				//let li = makeRow(reply);
				//document.querySelector('div.content>ul').appendChild(li);
			})
			// 페이징 목록
			showPagingList();
		}, // 두번째 param
		err => console.error(err) // 세번째 param
	);
} // end showReplyList()

showReplyList(); // 최초 목록 출력.

// 페이징 목록 출력
function showPagingList() {
	svc.replyTotalCount(bno,
		result => {
			console.log(result);
			let totalCnt = result.totalCnt;
			let paging = new PageVO(page, totalCnt);
			console.log(paging);

			// parent요소.
			let target = document.querySelector('div.pagination');
			target.innerHTML = ''; // 기존 목록 삭제
			// 이전페이지 여부
			if (paging.prev) {
				let atag = document.createElement('a');
				atag.href = paging.start - 1;
				atag.setAttribute('data-page', paging.start - 1);
				atag.innerHTML = '&laquo;';
				target.appendChild(atag);
			}
			// start ~ end
			for (let p = paging.start; p <= paging.end; p++) {
				let atag = document.createElement('a');
				atag.href = p; // atag.setAttribute('href', p);
				atag.setAttribute('data-page', p);
				if (p == paging.currPage) {
					atag.setAttribute('class', 'active');
				}
				atag.innerText = p;
				target.appendChild(atag);
			}
			// 이후페이지 여부
			if (paging.next) {
				let atag = document.createElement('a');
				atag.href = paging.end + 1;
				atag.setAttribute('data-page', paging.end + 1);
				atag.innerHTML = '&raquo;';
				target.appendChild(atag);
			}
			// a 태그에 클릭 이벤트 등록 // ajax 비동기 방식이기때문에 이렇게 함
			addEvent();
		},
		err => console.error(err)
	);
} // end showPagingList()

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
				showReplyList();
				document.querySelector('div.reply input').value = '';
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
function addEvent() {
	document.querySelectorAll('div.footer>div.pagination>a')//
		.forEach(atag => {
			atag.addEventListener('click', e => {
				e.preventDefault(); // 기본기능을 차단
				page = e.target.dataset.page; // data-page => dataset.page  (콜렉션?)
				console.log(page);
				// 목록 그려주기
				showReplyList();
			})
		})
} // end addEvent

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
	rno = e.target.closest('li').firstElementChild.innerText; // closest 상위요소 대상
	console.log(rno);
	if (!confirm(`${rno} 번 글을 삭제하겠소?`)) {
		alert('삭제를 취소했소.');
		return;
	}
	// fetch 서버프로그램 호출
	svc.removeReply(rno,
		result => {
			if (result.retCode == 'OK') {
				//e.target.parentElement.parentElement.remove();
				showReplyList();
				console.log(result.retCode);
			} else if (result.retCode == 'NG') {
				alert('삭제 실패!');
			} else {
				alert('알 수 없는 코드이오.');
			}
		},
		err => console.error(err)
	)
} // end deleteRowFnc()