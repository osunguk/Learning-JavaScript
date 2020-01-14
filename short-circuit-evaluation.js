const skipIt = true
let x = 0
const result = skipIt || x++;

console.log(x) // 0

// || 연산을 할 때 skipIt이 참이므로 뒤쪽 연산을 실행하지 않고 true를 반환한다
// x++ 를 실행하지 않음

const doIt = false
let x2 = 0
const result2 = doIt && x2++

console.log(x2) // 0

// 이런 방식을 통한 코딩 스킬

// const options = suppliedOptions || {name: 'Default'}

// 옵션이 제공되지 않으면 기본 값을 가지게 된다

let x = 0, y = 10, z
z = (x++, y++)

// 에러남. 왜?