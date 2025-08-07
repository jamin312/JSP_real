package com.yedam.service;

import java.util.List;

import com.yedam.vo.ReplyVO;

public interface ReplyService {
	List<ReplyVO> replyList(int boardNo, int page); // 댓글 목록
	boolean removeReply(int replyNo); // 댓글 삭제
	boolean addReply(ReplyVO reply); // 댓글 등록
	int replyCount(int boardNo); // 댓글 개수
}
