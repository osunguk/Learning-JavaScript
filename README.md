# Learning JavaScript, 3rd Edition
## Chapter 2: JavaScript Development Tools

In this chapter we're learning about Git and other
development tools.

1. ~~첫 번째 어플리케이션~~

  Paper.js 로 간단한 canvas 그리기

2. ~~개발 도구~~

  Git 은 어느정도 능숙하게 사용중이고 Node 런타임에 대한 이해도 어느정도 숙지했다
  Gulp 라는 빌드 도구는 처음 들어봤고
  ESLint 는 몇번 봤지만 사용해보지 않았다
  Babel 은 ES6 을 ES5 로 변환하는 트랜스 컴파일러

  Gulp 는 빌드 **자동화** 도구이며 수많은 플러그인이 있다 (gulp 없이도 할 수는 있다)
  Gulp & eslint & babel 이 세가지는 프로젝트 관리할 때 꼭 쓸 것!!

3. ~~리터럴과 변수, 상수, 데이터 타입~~

   JS에서 사용하는 데이터 타입들의 기본적인 정보와 후에 진행하게될 순서에 대한 개관 같은 느낌 요약 부분에 있는 참조형과 원시형에 대한 코드는 **꼭!** 숙지할 것
   자바 스크립트의 모든 숫자는 double 형이다

4. ~~제어문~~

   모든 PL 이 그렇듯이 큰 틀에서 벗어나지 않는 한 제어문(반복문, 조건문)의 형식에 큰 변화는 없을 것 같다

5. ~~표현식과 연산자~~
   == 말고 무조건 === 사용 권장
   **거짓값**

   - undefined, null, false, 0, NaN, ''(빈 문자열)

   **참값**

   - 모든 객체, 배열(빈 배열 포함), 공백만 있는 문자열, 문자열 'false' 

   해체 할당 (ES6 에 추가된 기능) 유용하게 쓰이니 꼭 숙지할 것
   삼항 연산자로 if ...else 문 간단하게 표현하기
   if(isPrime(n)){

   ​	label = 'prime'

   } else {

   ​	label = 'non-prime'

   }
   아래와 같다
   label = isPrime(n) ? 'prime' : 'non-prime'
   
   if(!options) options = {}  
   다음과 같다 
   options = options || {}

6. 함수

7. 스코프

8. 배열과 배열처리

9. 객체와 객체지향 프로그래밍

10. 맵과 셋

11. 예외와 예외 처리

12. 이터레이터와 제너레이터

13. 함수와 추상적 사고

14. 비동기적 프로그래밍

15. 날짜와 시간

16. Math

17. 정규 표현식

18. 브라우저와 JS

19. 제이쿼리

20. 노드

21. 객체 프로퍼티 설정과 프록시

22. 추가 자원

23. (부록) 예약어

24. (부록) 연산자 우선순위
