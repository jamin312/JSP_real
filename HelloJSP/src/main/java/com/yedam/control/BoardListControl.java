package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.common.PageDTO;
import com.yedam.common.SearchDTO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardListControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 파라미터 (page&searchCondition&keyword)
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		page = page == null ? "1" : page;
		
		// SearchDTO (메소드에 전달할 파라미터)
		SearchDTO search = new SearchDTO();
		search.setPage(Integer.parseInt(page));
		search.setSearchCondition(sc);
		search.setKeyword(kw);
		
		// WEB-INF/html/register_form.html
		BoardService svc = new BoardServiceImpl();
		List<BoardVO> list = svc.boardList(search); // 글목록 / sc,kw => 검색
		
		// 페이징
		int totalCnt = svc.totalCount(search);
		PageDTO paging = new PageDTO(Integer.parseInt(page), totalCnt);
		
		// jsp(뷰역할) 페이지에 데이터 전달
		req.setAttribute("board_list", list);
		req.setAttribute("paging", paging);
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		// 권한에 따라 템플릿 적용
		HttpSession session = req.getSession();
		String authority = (String) session.getAttribute("auth");
		
		if(authority == null) {
			req.getRequestDispatcher("user/board_list.tiles").forward(req, resp);
			return; // 메소드 종료
		}
		
		if(authority.equals("User")) {
			// 요청 재지정 HelloJSP 기준 최상위 폴더 webapp
			req.getRequestDispatcher("user/board_list.tiles").forward(req, resp);
		} else if (authority.equals("Admin")){
			req.getRequestDispatcher("manager/board_list.tiles").forward(req, resp);
		} 

	}
}
