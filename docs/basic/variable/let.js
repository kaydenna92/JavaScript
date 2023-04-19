// 1. 변수 선언 및 할당
let myVariable = 'bob';

// 2. 재할당 가능, 재선언은 x
myVariable = 'najangyeob';
console.log(myVariable);
// let myVariable = 'jangyeob'; // 재선언 불가! SyntaxError: Identifier 'myVariable' has already been declared

// 3. let으로 선언된 변수의 범위
let greeting = 'say hi'; // 전역 범위의 let, 전역에서 사용할 수 있다.
let times1 = 4

if (times1 > 3) {                                            // 블록 범위의 let, 해당 블록 내에서만 사용 가능하다.
     let hello = "say Hello instead";
     console.log(hello); // say Hello instead
     let greeting = 'say hihi'; 
     console.log(greeting); // 동일한 변수가 다른 범위내에서 정의된다면 에러는 발생하지 않는다. -> 서로 다른 범위를 가지므로 서로 다른 변수로 취급된다.
}
console.log(hello) // hello is not defined

// 변수의 다양한 타입들, 
let myVariable2 = 'Bob'; // String
let myVariable3 = 10; // Number
let myVariable4 = true // boolean
let myVariable5 = [1, 'bob', true, false]; // Array, 여러 자료형을 할당할 수 있음
let myVariable6 = Object; // object(자바스크립트의 모든 것은 객체)도 할당 가능하다. // let myVariable6 = document.querySelector('h1')
