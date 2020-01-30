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

   > 함수도 객체이다. 변수 할당, 객체 프로퍼티, 배열 요소로 사용 가능하다

   func()은 함수 호출이고 func 은 함수 참조 (객체처럼 사용할 수 있다) ( 매개변수 != 변수 )
   확산연산자는 유용한 기능이다 (...)

   ```javascript
   const test = {
       a() {
           return "hello"
       },
       b: 'test',
       c: 123,
   }
   ```

   Object의 요소에 함수를 바로 넣을 수 있다
   **this, call, apply, bind** 개념 __꼭꼭꼭!!__ 숙지하기

   > 함수 길이가 깊을 때엔 this 보다는 self 나 that 을 사용하면 코드의 복잡도를 낮출 수 있다

   __this__ : 호출한 메서드를 소유하는 객체
   __call__ : 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있다

   ```javascript
   const bruce = { name : "Bruce"}
   
   function greeting() { // 아무것도 연결되어 있지 않지만 this를 사용함
       return `Hello, I'm ${this.name}`
   }
   
   greet();				// "Hello, I'm undefined"
   greet.call(bruce);		// "Hello, I'm Bruce"
   
   // call 의 첫번째 매개변수는 this 가 사용하고 더 있으면 호출하는 함수로 전달된다
   function update(birthday, occupation){
       this.birthday = birthday
       this.occupation = occupation
   }
   
   update.call(bruce, 19940331, 'student')
   update.apply(bruce, [19940331, 'student']) // apply 사용시
   // bruce 는 이제 { name:"Bruce", birthday:19940331, occupation:"student"}
   ```

   __bind__ : 함수의 this 값을 영구적으로 설정할 수 있다
   *주의 : 함수의 동작을 영구적으로 바꾸므로 찾기 어려운 버그의 원인이 될 수 있다, call apply 다른 bind로도 바꿀 수 없음. 고정으로 사용하고픈 요소만 지정할 때 사용해야한다*

7. 스코프

   > 시야 또는 범위라고 보면 된다

   선언은 식별자를 정하는것, 정의는 식별자와 값도 같이 정해주는 것

   *스코프 종류와 유형*

   - 전역 스코프
     프로그램을 시작할 때 암시적으로 주어지는 스코프
     전역 스코프가 나쁜건 아니지만 너무 의존성이 강하게 사용할 경우 후에 프로젝트가 커졌을 때 유지보수가 굉장히 힘들어 질 수있다

   

   - 블록 스코프

   ```javascript
   console.log('before block')
   {
       console.log('inside block')
       const x = 3
       console.log(x)			// 3
   }
   console.log(x)				// ReferenceError: x는 정의되지 않았습니다
   ```

   ~~현실적으론 잘 쓰지 않는 문법

   

   - 변수 숨기기

   ```javascript
   {
       // 외부 블럭
       let x = 'blue'
       console.log(x)			// "blue"
       {
           // 내부 블럭
           let x = 3
           console.log(x)		// "3"
       }
       console.log(x)			// "blue"
   }
   console.log(x)			// "undefinded"; x는 스코프에 있지 않습니다
   ```

   내부 블럭의 x 는 외부 블럭에서 정의한 x와 이름만 같을 뿐 다른 변수이므로 외부 스코프의 x 를 숨기는 효과가 있다 *하지만 숨긴다고 해도 해당된 이름으로만 접근하지 못할 뿐 주소를 가지고있는 다른 방법으로 참조 가능하다*

   - 클로저

     > 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우

     ```javascript
     let f;
     {
         let o = {note: "Safe"}
         f = function() {
             return o
     	}
     }
     let oRef = f()
     oRef.note = "Not so safe after all"
     ```

     **위와같이 일반적인 경우에는 접근할 수 없는 스코프에 크로저를 통해서 접근한 경우를 볼 수 있다**

   - 즉시실행함수

     ```javascript
     const f = (function() {
         let count = 0
         return function() {
             return `I have been called ${++count} time(s)`
         }
     })()
     f()		// "I have been called 1 time(s)"
     f()		// "I have been called 2 time(s)"
     ```

     밖에서 안에있는 count 변수를 컨트롤 할 수는 없지만 밖으로 내보낼 순 있다

   - 호이스팅

     > 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

     var는 변수의 선언은 맨 위로 끌어올라간다 그리고 정의만 그 자리에 남는다

     ```javascript
     a			// undefined
     var a = 3
     a			// 3
     
     b			// error
     let b = 3
     b
     
     c			// error
     const c = 3
     c
     
     var x = 3
     if(x === 3){
         var x = 2
         console.log(x)		// 2
     }
     console.log(x)			// 2
     ```

     *따라서 var로는 스코프별로 같은 이름의 변수를 따로 사용할 수 없다*

     **var 대신 let 쓰는걸 강력 추천**

   - 사각지대

     > let, const 가 선언되기 전까지의 공간
     
   - 스트릭트 모드

     ```javascript
     "use strict"
     // js 파일 맨 앞에 써주면 된다
     ```
     
     스트릭드 모드는 암시적으로 전역변수를 허용하지 않는다
     
     

8. 배열과 배열처리

   ```javascript
   // JS Array Method
   
   const sampleList = [1,2,3,4,5]
   
   // sampleList 변경됨
   sampleList.push()			// 맨 뒤에 추가
   sampleList.pop()			// 맨 뒤 요소 빼기
   sampleList.unshift()		// 맨 앞에 추가
   sampleList.shift()			// 맨 앞 요소 빼기
   
   sampleList.splice()			// 임의의 요소 추가 제거
   sampleList.copyWithin()		// 요소 교체 (like 복붙)
   sampleList.fill()			// 요소 채우기
   
   sampleList.sort()			// 정렬 (함수 사용 가능)
   sampleList.reverse()		// 뒤집기
   
   // sampleList 변경 안됨
   sampleList.concat()			// 뒤에 추가(여러 요소)
   sampleList.slice()			// 원하는 만큼 자르기
   
   
   // 배열 검색
   sampleList.indexOf()		// 앞쪽 부터 인덱스 검색
   sampleList.lastIndexOf()	// 뒤쪽 부터 인덱스 검색
   sampleList.findIndex()		// 조건 검색 인덱스
   sampleList.find()			// 조건 검색
   
   sampleList.some()			// 조건 충족 요소 확인
   sampleList.every()			// 모든 요소 조건 충족 확인
   
   sampleList.map()			// 배열 요소 변경
   sampleList.filter()			// 배열 요소 필터링
   sampleList.reduce()			// 배열 자체 변형
   
   sampleList.join()			// 배열 요소 병합
   ```

   

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