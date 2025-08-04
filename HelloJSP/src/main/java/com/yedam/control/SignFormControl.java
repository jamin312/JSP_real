package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;

public class SignFormControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// 요청 재지정 HelloJSP 기준 최상위 폴더 webapp
		req.getRequestDispatcher("WEB-INF/html/signup_form.jsp").forward(req, resp);

	}

}
