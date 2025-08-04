-- 게시글 번호, 제목, 내용, 작성자, 조회수, 생성일자, 변경일자
create table tbl_board (
  board_no      number, -- 게시글 번호
  title         varchar2(100) not null, -- 제목
  content       varchar2(1000) not null, -- 내용
  writer        varchar2(30) not null, -- 작성자
  view_cnt      number default 0, -- 조회수
  creation_date date default sysdate, -- 데이터 생성 시점
  last_update_date   date default sysdate -- 데이터 변경 일자
);

-- pk
alter table tbl_board add constraint pk_board primary key(board_no);
-- 시퀀스
create sequence board_seq;
-- 삽입
insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '게시글 등록', '게시글 등록 연습입니다.', '홍길동');

insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '등록 테스트', 'HTML CSS, Javascript 입니다.', '김길동');

insert into tbl_board (board_no, title, content, writer)
values (board_seq.nextval, '댓글등록되나요?', '기능을 만들겁니다.', '백길동');

commit;

select *
from   tbl_board;

