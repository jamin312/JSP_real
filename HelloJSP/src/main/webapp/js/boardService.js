/**
 *  boardService.js
 */

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
	}
}