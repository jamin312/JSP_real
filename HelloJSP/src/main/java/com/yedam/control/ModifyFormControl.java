package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyFormControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 수정화면 bno=?
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		// DB조회
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));
		
		// 권한확인 (로그인 아이디 vs 작성자 아이디)
		HttpSession session = req.getSession();
		String logId = (String) session.getAttribute("logId");
		
		if(logId != null && logId.equals(board.getWriter())) {
			// view영역(jsp)로 값을 전달
			req.setAttribute("page", page);
			req.setAttribute("searchCondition", sc);
			req.setAttribute("keyword", kw);
			req.setAttribute("board_info", board);
			// 요청 재지정
			req.getRequestDispatcher("user/modify_board.tiles").forward(req, resp);
		} else {
			// 권한없을 경우
			req.setAttribute("board_info", board);
			req.setAttribute("msg", "권한이 없습니다.");
			// 요청 재지정
			req.getRequestDispatcher("user/board.tiles").forward(req, resp);
		}
		
	}

}
