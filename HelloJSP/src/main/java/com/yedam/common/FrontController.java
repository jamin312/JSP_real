package com.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.control.AddBoardControl;
import com.yedam.control.AddReplyControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.JSControl;
import com.yedam.control.LoginControl;
import com.yedam.control.LoginFormControl;
import com.yedam.control.LogoutControl;
import com.yedam.control.ModifyBoardControl;
import com.yedam.control.ModifyFormControl;
import com.yedam.control.RegisterControl;
import com.yedam.control.RemoveBoardControl;
import com.yedam.control.RemoveReplyControl;
import com.yedam.control.ReplyListControl;
import com.yedam.control.SignFormControl;
import com.yedam.control.SignUpControl;

// init - service - destroy
// *.do -> 실행할 컨트롤
// 요청url === 실행할 컨트롤

public class FrontController extends HttpServlet {

	Map<String, Control> map;

	// 생성자
	public FrontController() {
		map = new HashMap<String, Control>();
	}

	// gpt 활용해서 여러 기능 만들어보기 - email? 비밀번호 암호화, 등등
	@Override
	public void init(ServletConfig config) throws ServletException {
		map.put("/boardList.do", new BoardListControl()); // 글 목록
		map.put("/board.do", new BoardControl()); // 상세 화면
		map.put("/register.do", new RegisterControl()); // 등록 화면
		map.put("/addBoard.do", new AddBoardControl()); // 등록 처리
		map.put("/removeBoard.do", new RemoveBoardControl()); // 삭제 처리
		map.put("/modifyForm.do", new ModifyFormControl()); // 수정 화면
		map.put("/modifyBoard.do", new ModifyBoardControl()); // 수정 처리
		// 회원 관련
		map.put("/signForm.do", new SignFormControl()); // 회원가입 화면
		map.put("/signup.do", new SignUpControl()); // 회원가입 처리
		map.put("/loginForm.do", new LoginFormControl()); // 로그인 화면
		map.put("/login.do", new LoginControl()); // 로그인 처리
		map.put("/logout.do", new LogoutControl()); // 로그아웃 처리
		// 기타
		map.put("/js.do", new JSControl());
		// 댓글 관련
		map.put("/replyList.do", new ReplyListControl()); // 글번호 -> 댓글목록
		map.put("/removeReply.do", new RemoveReplyControl()); // 댓글 삭제
		map.put("/addReply.do", new AddReplyControl()); // 댓글 등록
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)//
			throws ServletException, IOException {
		// url vs uri 의미 구분
		// http://localhost:8080/HelloJSP/boardList.do => url
		// /HelloJSP/boardList.do => uri
		String uri = req.getRequestURI();
		String context = req.getContextPath(); // ContextPath -> project 정보 /HelloJSP
		String page = uri.substring(context.length()); // /boardList.do

		Control control = map.get(page);
		control.execute(req, resp);
	}

}
