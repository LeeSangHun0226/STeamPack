# STeamPack
## < 클라이언트 사이드 >

###1. 기본 디자인 정의
 * 모바일 우선으로 디자인을 작성 (모바일 사이즈에서 시작해서 점차 웹 풀 프레임으로 디자인이 변동 될 수 있도록)

###2. 메인 페이지
 * 지역정보(동그라미 혹은 아이콘 형태로 표시) 선택할 수 있도록 표시
 * 날짜 선택란(또는 아이콘 형식) 표시

###3. 로그인 페이지
 * 1번째 화면 : 아이디, 비밀번호 입력란 (회원가입 되었다면 팀정보 페이지(4번)로 넘어가고, 안되있으면 2번째 화면(회원가입란)으로 이동
 * 2번째 화면(회원가입란) : 회원(팀)의 개인정보를 입력
  - 팀 프로파일 사진 선택
  - 사용 운동장(자주 사용하는 운동장)
  - 팀 이름
  - 팀 총 인원
  - 주전 명단 (포지션, 이름, 개인별 사용발)
  - 비주전 명단 (포지션, 이름, 개인별 사용발)
 * 완료 버튼을 누르면 작성한 디테일을 보여줌
 * 팀정보 페이지로 넘어가는 버튼 클릭하면 팀정보 페이지(4번)으로 넘어감

###4. 팀정보 페이지
 * 해당 지역과 날짜에 가능한 팀들이 아이콘 형태로 표시됨
 * 팀을 클릭하면 옆에 말풍선 형태로 뜨면서(페이지 안넘어감!) 상세정보를 보여줌
 * 상세정보에는 운동장 정보, 경기 시작시간, 경기전적(1전 1승 0패)이 보이고, "상세정보" 버튼을 마지막에 보여줌
 * "상세정보" 버튼을 클릭하면 팀 상세정보 페이지(5번)으로 넘어감

###5. 팀 상세정보 페이지
 * 기본 형식은 FM게임 형식으로 보여줌 (운동장 보여주고 선수들 아이템 형식으로 보여줌)
 * 기본적으로 유저의 팀이 HOME쪽으로 배정되어 지고, 상대편(클릭한 팀)이 AWAY로 배정됨
 * 운동장 포맷에는 주전 선수들의 이름 및 포지션을 보여주고, 벤치 선수들은 옆에 사이드에 정보를 나타냄
 * 페이지 밑에 "연락하기" 버튼을 클릭하게 되면 말풍선 형식으로 정보가 표시
 * 말풍선에는 상대편 팀 이름과 상대편 카카오톡 아이디(또는 전화번호)가 표시됨

###6. 경기 만들기 페이지
 * 지역 정보, 경기 날짜 선택
 * 경기장 정보 입력
 * 기타 비고란(하고 싶은말)
 * "제출하기" 버튼을 클릭하면 개인정보 페이지로 이동하면서 작성한 내용의 서머리를 보여줌

###7. 회원가입을 바로 하고 싶은 경우에는 페이지 상단의 "회원가입"란을 클리하면 "로그인 페이지 2번째 화면"으로 이동

###8. 로그인을 바로 하고 싶은 경우에는 페이지 상단의 "로그인" 버튼을 클리하면 "로그인 페이지 1번째 화면"으로 이동


##

## < 서버 사이드 >

###1. tech stack
* node js
* express js
* mysql
* etc (추가할 것)

###2. DB 개요
* 지역 정보, 날짜 정보, 경기장소 정보

###3. 저장해야 할 정보들
* 지역, 날짜 장소 정보
  - 지역 : '시/구'로 구분
  - 날짜 : 캘린더 API 알아보기
* 팀 정보
  - 팀 사진
  - 사용 운동장(자주 사용하는 운동장)
  - 팀 이름
  - 팀 총 인원
  - 주전 명단 (포지션, 이름, 개인별 사용발)
  - 비주전 명단 (포지션, 이름, 개인별 사용발)

###4. 진행시켜야 할 부분
* 페이스북, 카톡을 이용한 사용자 인증
* 프로필 사진을 동적으로 바꾸기
* 만약, 스스로 회원가입시 비밀번호 암호화
* aws로 서버올리기

###5. first step
* 회원가입
* 프로필 작성

###6. 추후 차근차근 작성해나가기
* 팀과팀이 매칭되면, 연락처를 알려주자
* 프로필이 있는 곳에서 장소에 따라서 구별해주는 object를 만든다
