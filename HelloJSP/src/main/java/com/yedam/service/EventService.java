package com.yedam.service;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventService {
	List<EventVO> eventList(EventVO event); // 목록
	boolean removeEvent(EventVO event); // 댓글 삭제
	boolean addEvent(EventVO event); // 댓글 등록
}
