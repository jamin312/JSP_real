//package com.yedam;
//
//import java.io.IOException;
//import java.io.PrintWriter;
//import java.util.List;
//
//import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.yedam.service.BoardService;
//import com.yedam.service.BoardServiceImpl;
//import com.yedam.vo.BoardVO;
//
///**
// * Servlet implementation class BoardListServlet
// */
//@WebServlet("/BoardListServlet")
//public class BoardListServlet extends HttpServlet {
//	private static final long serialVersionUID = 1L;
//
//	/**
//	 * @see HttpServlet#HttpServlet()
//	 */
//	public BoardListServlet() {
//		super();
//		System.out.println("BoardListServlet 생성자.");
//	}
//
//	/**
//	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
//	 *      response)
//	 */
//	protected void doGet(HttpServletRequest request, // 요청정보
//			HttpServletResponse response) // 응답정보
//			throws ServletException, IOException {
//		// 글 목록 출력 기본값은 텍스트
//		response.setContentType("text/html;charset=utf-8"); // 웹브라우저의 컨텐츠 타입
//		System.out.println("Hello Servlet !!!");
//		PrintWriter out = response.getWriter(); // stream
//		out.println("<b>Hello, Servlet</b>"); // 클라이언트에 출력
//		
//		BoardService svc = new BoardServiceImpl();
//		List<BoardVO> list = svc.boardList();
//		
//		String html = "<table border = '2' style='text-align: center';><thead><tr><th>글번호</th><th>제목</th><th>작성자</th><th>조회수</th></tr></thead>";
//		html += "<tbody>";
//		for(BoardVO board : list) {
//			html += "<tr><td><a href='board?board_no="+board.getBoardNo()+"'>" + board.getBoardNo() 
//					+ "</a></td><td align = 'center'>" + board.getTitle() 
//					+ "</td><td align = 'center'>" + board.getWriter() 
//					+ "</td><td align = 'center'>" + board.getViewCnt() 
//					+ "</td></tr>";
//		}
//		html += "</tbody></table>";
//		out.println(html);
//	}
//
//	/**
//	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
//	 *      response)
//	 */
//	protected void doPost(HttpServletRequest request, HttpServletResponse response)
//			throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		doGet(request, response);
//	}
//
//}
