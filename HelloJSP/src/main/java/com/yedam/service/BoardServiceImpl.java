package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.common.SearchDTO;
import com.yedam.mapper.BoardMapper;
import com.yedam.vo.BoardVO;

// BoardService 인터페이스 구현 클래스 
// 인터페이스에 정의된 추상메소드를 반드시 구현
public class BoardServiceImpl implements BoardService {

	SqlSession sqlSession = DBUtil.getInstance().openSession();
	BoardMapper mapper = sqlSession.getMapper(BoardMapper.class);

	@Override
	public List<BoardVO> boardList(SearchDTO search) {
		return mapper.selectList(search); // DB - 업무(1:1 매칭)
	}

	@Override
	public BoardVO searchBoard(int boardNo) {
		BoardVO board = mapper.selectBoard(boardNo); // 조회
		int r = mapper.updateCount(boardNo); // 증가
		if (r > 0) {
			sqlSession.commit();
		}

		return board;
	}

	@Override
	public boolean registerBoard(BoardVO board) {
		int r = mapper.insertBoard(board);
		if (r > 0) {
			sqlSession.commit();
			return true; // 정상 등록
		}
		return false; // 비정상 처리
	}

	@Override
	public boolean removeBoard(int boardNo) {
		int r = mapper.deleteBoard(boardNo);
		if (r > 0) {
			sqlSession.commit();
			return true; // 정상 처리
		}
		return false; // 비정상 처리
	}

	@Override
	public int totalCount(SearchDTO search) {
		return mapper.selectCount(search);
	}

	@Override
	public boolean modifyBoard(BoardVO board, SearchDTO search) {
		int r = mapper.updateBoard(board);
		if (r > 0) {
			sqlSession.commit();
			return true; // 정상 처리
		}
		return false; // 비정상 처리
	}
}
