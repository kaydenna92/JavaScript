// 일정한 상수 값을 유지한다.

// 블록 범위의 const
// let과 마찬가지로 const 변수가 선언된 블록 범위 내에서만 접근 및 사용이 가능하다
// const 재할당, 재선언 불가능 : 따라서 const 선언은 선언하는 당시에 초기화되어야한다. 

const greeting = 'hi'; // 전역 범위
// greeting = 'say hello instead'; // TypeError: Assignment to constant variable\.

function newFunction() { // 블록 범위 
    const greeting = 'say hello'; // 다른 범위에 있으므로 다른 변수로 취급된다. 
    console.log(greeting)
}

console.log(greeting);
newFunction();


// 만약 const에 할당되는 것이 객체인 경우?
// 객체의 속성은 업데이트 할 수 있다.

const greeting2 = {
    message: "say hello",
    times: 4
}

// 아래의 작업은 불가능하지만, 
// greeting2 = {
//     words: "hello",
//     number: "five"
// } // TypeError: Assignment to constant variable.

// 아래의 작업은 가능하다
greeting2.message = "say hi instead";

console.log(greeting2.message) // say hi instead