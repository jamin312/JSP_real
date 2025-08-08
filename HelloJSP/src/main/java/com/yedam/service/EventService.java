package com.yedam.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.EventVO;

public interface EventService {
	List<EventVO> eventList(EventVO event); // 목록
	boolean addEvent(Map<String, Object> map); // 댓글 등록
	boolean removeEvent(String title); // 댓글 삭제
}
