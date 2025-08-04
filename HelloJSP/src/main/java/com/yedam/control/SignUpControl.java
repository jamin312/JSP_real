package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;
import com.yedam.vo.MemberVO;

public class SignUpControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");
		// param: id, psw, name
		// 회원 정보 등록 -> 게시글 목록 페이지
		String memberId = req.getParameter("id");
		String memberPw = req.getParameter("psw");
		String memberName = req.getParameter("name");
		
		MemberVO param = new MemberVO();
		param.setMemberId(memberId);
		param.setMemberPw(memberPw);
		param.setMemberName(memberName);
		
		MemberService svc = new MemberServiceImpl();
		if(svc.addMember(param)) {
			// 목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}
		
		
	}

}
