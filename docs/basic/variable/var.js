// 선언 및 할당
var greeter = 'hi'; 

// 재선언 및 재할당 가능
var greeter = 'hello'; // 같은 범위 내에서라면 가능  // 전역 범위 -> 함수 블록 외부에서 var로 선언된 모든 변수를 전체 윈도우 상에서 사용할 수 있음.

function newFunction(){ // 함수 범위 -> 함수 내에서만 접근 및 사용할 수 있음
    var hello = 'hello';
}
console.log(greeter); // hi
console.log(hello); // ReferenceError: hello is not defined


// !! 호이스팅 !! 
// var 변수는 범위 내에서 맨 위로 올려지고, 값은 undefined으로 초기화 된다. 
console.log(greeter2);
var greeter2 = 'say hello'; // undefined
console.log(greeter2); // say hello

// 위의 코드를 자바스크립트는 아래의 코드처럼 해석한다. 
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

/* var의 문제점
아래의 예제처럼 사용할 경우 발생하는 취약점?
* time > 3가 true를 반환하기 때문에 greeter는 "say Hello instead"로 재정의 된다.
  의도적으로 재정의한 것이라면 괜찮겠지만, 변수 greeter가 이미 정의되어 있다는 사실을 인식하지 못하는 경우 문제가 발생한다.
  -> 만약 코드의 다른 부분에서 greeter를 사용한 적이 있다면 뜻밖의 출력 결과로 인해 버그가 발생할 수 있다. 
  -> 그래서 let과 const가 등장함.
*/
// example 2.
var greeter = "hey hi";
var times2 = 4;

if (times2 > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter) // "say Hello instead"
