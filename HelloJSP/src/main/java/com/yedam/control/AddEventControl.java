package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;

public class AddEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String title = req.getParameter("title");
		String start = req.getParameter("start");
		String end = req.getParameter("end");
		
		EventService svc = new EventServiceImpl();
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("title", title);
		map.put("start", start);
		map.put("end", end);
		
		//Gson gson = new GsonBuilder().setPrettyPrinting().create();
		//String json = gson.toJson(map); // 자바 객체 -> json문자열
		try {
			svc.addEvent(map);
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} catch (Exception e) {
			e.printStackTrace();
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		
		
	}

}
