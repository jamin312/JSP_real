/**
 *  boardService.js
 */

class PageVO {

	// 생성자
	constructor(currPage, totalCnt) {
		this.currPage = currPage; // currPage 필드 선언
		this.totalCnt = totalCnt; // totalPage 필드 선언
		// start, end 계산
		this.end = Math.ceil(currPage / 10) * 10; // 제일 끝 페이지
		this.start = this.end - 9; // 1페이지

		let realEnd = Math.ceil(totalCnt / 5);
		this.end = this.end > realEnd ? realEnd : this.end;
		// 이전 이후 존재 여부
		this.prev = this.start > 1;
		this.next = this.end < realEnd;
	}

}

const svc = {
	count: 20, // 속성(property)
	increaseCount: function() { // 메소드
		this.count++; // count++ 과는 다름 -> 변수를 찾음
	},
	showCount() { // 메소드
		return this.count;
	},
	// 목록을 가져오는 ajax 메소드
	replyList(param = { bno: 1, page: 1 }, successCallback, errorCallback) {
		fetch('replyList.do?bno=' + param.bno + '&page=' + param.page)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 삭제 ajax 메소드
	removeReply(rno, successCallback, errorCallback) {
		fetch('removeReply.do?rno=' + rno)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// 등록 ajax 메소드 / param = { bno, reply, replyer } 객체 선언
	registerReply(param = { bno, reply, replyer }, successCallback, errorCallback) {
		fetch('addReply.do?bno=' + param.bno + '&reply=' + param.reply + '&replyer=' + param.replyer)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	},
	// bno에 대한 전체건수 ajax 메소드
	replyTotalCount(bno, successCallback, errorCallback) {
		fetch('totalReply.do?bno=' + bno)
			.then(resolve => resolve.json())
			.then(successCallback)
			.catch(errorCallback)
	}

}