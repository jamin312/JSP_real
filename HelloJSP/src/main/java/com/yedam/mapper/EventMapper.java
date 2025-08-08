package com.yedam.mapper;

import java.util.List;
import java.util.Map;

import com.yedam.vo.EventVO;

public interface EventMapper {
	List<EventVO> eventList(EventVO event); // 목록
	int insertEvent(Map<String, Object> map); // 등록
	int deleteEvent(String title); // 댓글 삭제
}
