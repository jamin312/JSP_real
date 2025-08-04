package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class RemoveBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int bno = Integer.parseInt(req.getParameter("bno"));
		
		BoardService svc = new BoardServiceImpl();
		
		if(svc.removeBoard(bno)) {
			// 목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}
	}

}
