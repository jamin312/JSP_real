package com.yedam.service;

import com.yedam.vo.MemberVO;

// 회원 관련 업무
public interface MemberService {
	public boolean addMember(MemberVO member); // 회원 등록
	public MemberVO userCheck(String id, String pw); // 로그인
}
