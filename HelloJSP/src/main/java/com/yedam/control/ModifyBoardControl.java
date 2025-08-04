package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.SearchDTO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		SearchDTO search = new SearchDTO();
		search.setPage(Integer.parseInt(page));
		search.setSearchCondition(sc);
		search.setKeyword(kw);
		
		//modifyBoard.do?bno=???&title=???&content=????
		String bno = req.getParameter("bno");
		String title = req.getParameter("title");
		String content = req.getParameter("content");
		
		//
		BoardVO param = new BoardVO();
		param.setBoardNo(Integer.parseInt(bno));
		param.setTitle(title);
		param.setContent(content);
		
		BoardService svc = new BoardServiceImpl();
		if(svc.modifyBoard(param, search)) {
			resp.sendRedirect("boardList.do?searchCondition=" + sc + "&keyword=" + kw + "&page=" + page);
		} else {
			System.out.println("에러 발생");
		}
	}

}
