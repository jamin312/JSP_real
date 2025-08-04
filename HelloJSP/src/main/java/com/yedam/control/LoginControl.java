package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class LoginControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// param : id, psw
		String id = req.getParameter("id");
		String pw = req.getParameter("psw");
		
		MemberService svc = new MemberServiceImpl();
		MemberVO member = svc.userCheck(id, pw);
		
		// 페이지 이동
		if(member == null) {
			// 비정상 처리
			
		} else { // 정상 처리
			HttpSession session = req.getSession(); // 세션을 활용하여 정보저장 (생명 주기가 길다)
			session.setAttribute("logId", id); // 속성(logId) = 로그인 아이디
			session.setAttribute("auth", member.getResponsibility()); // User/Admin 구분
			resp.sendRedirect("boardList.do"); 
		}
	} // end execute

}
