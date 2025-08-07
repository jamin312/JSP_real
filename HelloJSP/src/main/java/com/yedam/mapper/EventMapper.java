package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventMapper {
	List<EventVO> eventList(EventVO event); // 목록
	int insertEvent(EventVO event); // 등록
	int deleteEvent(EventVO event); // 댓글 삭제
}
