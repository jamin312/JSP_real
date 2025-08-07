package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
// {total:78}
public class TotalCntControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 댓글개수	
		resp.setContentType("text/json;charset=utf-8");
		
		String bno = req.getParameter("bno");
		ReplyService svc = new ReplyServiceImpl();
		int totalCnt = svc.replyCount(Integer.parseInt(bno));
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("totalCnt", totalCnt);
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(map);
		
		resp.getWriter().print(json);
	}

}
