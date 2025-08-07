package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

public class EventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setContentType("text/json;charset=utf-8");
		
		String title = req.getParameter("title");
		String startDate = req.getParameter("startDate");
		String endDate = req.getParameter("endDate");
		
		EventVO event = new EventVO();
		event.setTitle(title);
		event.setStartDate(startDate);
		event.setEndDate(endDate);
		
		EventService svc = new EventServiceImpl();
		List<EventVO> list = svc.eventList(event);
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
		

	}

}
