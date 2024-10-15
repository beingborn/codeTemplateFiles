/* 프로젝트 전달 사항 및 중요 규칙 설명 */
※해당 프로젝트의 CSS 컨벤션 규칙은 SMACSS에 기반을 두고 있습니다.


목차 : 
1. 클래스 네이밍 
2. 주석 규칙

/* 클래스 네이밍 규칙 1 */
재사용성 높은 코드, 블록, 레이아웃 관련 클래스의 명시적 구분을 위해 접두어를 사용한다.

el : 최소 모듈 ex) 버튼, 타이틀, 카드, 라벨 등 
언제든 재사용 가능
-------------------------------------------------------------------------------------------------------
bl : 복합 모듈 ex) 특정 블럭으로 특정 페이지 내에서 활용 되는 lnb 등을 정의 el 및 특정 콘텍스트를 포함한 집합체
-------------------------------------------------------------------------------------------------------
ly : 레이아웃 관련 클래스 ex) ly-header, ly-inner, ly-conbody-inner (본문 간격 공통 inner) 

/* 아이디 네이밍 규칙 */
아이디 네이밍 규칙은 카멜case를 사용합니다 ex ) #loginInfo

/* 상태 변화를 나타내는 스타일 */
- hidden, active, hover 등
Class 명에 접두어로 "is" 또는 "s-"를 붙여서 사용

ex) .btn.is-active {color: red;}




**CSS 역할별 분류**

1. Base (reset)
2. 레이아웃(layOut)
3. 모듈(module)
    - 블록 모듈 (block)
    - 엘리먼트 (element) ex) button, label
4. 헬퍼(helper)
5. 유니크 (unique) → 페이지 별
6. 프로그램






// 본문과의 간격 통일
.ly-cont-inner {padding : 0 0 120px 0}
.max-width (767px) {padding : 0 0 80px 0}

// 웹 접근성 지침
display : none 을 시켜야 하나 스크린 리더기가 읽을 수 있어야 할 경우 blind 클래스를 이용합니다.
button 클래스에 title 넣어서 진행


// 기본 미디어 쿼리 분기점

@media screen and (max-width: 767px) {
  /** Mobile */
}

@media all and (min-width: 768px) and (max-width: 1023px) {
  /** Tablet  */
}

@media all and (max-width: 1023px) {
  /** Mobile & Tablet  */
}

4. 헬퍼 클래스의 경우 특정 스타일, 테마, 색상, 이미지 등을 변경합니다.
.btn.hp-bg-gray00{background-color: blue;}
