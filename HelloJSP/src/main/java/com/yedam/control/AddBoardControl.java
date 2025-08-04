package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AddBoardControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setCharacterEncoding("utf-8");

		// key=value + 파일(바이너리) => 처리
		// cos.jar 활용해서 Multipart 요청을 처리 (업로드)
		// 게시글 DB Insert

		// 서버상의 upload 폴더에 저장
		String upload = req.getServletContext().getRealPath("upload");
		System.out.println(upload);

		MultipartRequest mr = new MultipartRequest(
				req, // 요청정보
				upload, // 업로드 경로
				1024 * 1024 * 5, // 최대 업로드 파일 크기 5MB
				"UTF-8", // 인코딩 방식
				new DefaultFileRenamePolicy() // 동일한 이름이 있으면 rename
		);

		// addBoard.do?title=???&writer=???&content=????
		String title = mr.getParameter("title");
		String writer = mr.getParameter("writer");
		String content = mr.getParameter("content");
		String img = mr.getFilesystemName("images"); // 파일 이름

		//
		BoardVO param = new BoardVO();
		param.setTitle(title);
		param.setContent(content);
		param.setWriter(writer);
		param.setImage(img);

		BoardService svc = new BoardServiceImpl();
		if (svc.registerBoard(param)) {
			// 목록이동
			resp.sendRedirect("boardList.do");
		} else {
			System.out.println("에러 발생");
		}

	} // end execute

} // end class
