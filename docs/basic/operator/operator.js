// + : 두 개의 수를 합치거나, 문자열을 하나로 붙일 때 사용한다
console.log(6 + 9);
console.log("hi" + "hello");

//  -, *, /
console.log(9 - 3);
console.log(9 * 3);
console.log(9 / 3);

// = : 할당
let variable = 'bob';

// === : 동등, 두 값이 서로 같은지 테스트하여 true / false 결과를 반환한다
console.log(3 == 3); // true
console.log(4 == 1); // false

// !, !== : 부정, true를 false로 반환한다. 

console.log(variable !== 'bob'); // true이지만 이것을 부정했기 때문에 false
console.log(!(variable === 'bob'));


/* 주의할 점
계산을 수행할 때 자료형이 섞이게 되면 이상한 결과를 불러올 수 있다.
변수를 올바르게 참조해 예상하는 결과를 얻을 수 있게 주의해야 한다.

예를 들어
console.log("35" + "25"); //3525 : 숫자를 문자열로 변경했고, 숫자를 더하는 대신에 문자열을 붙인 결과를 얻게 된다.
console.log(35 + "35"); // 3535 : 숫자가 문자열로 변경된 뒤 문자열을 붙이는 연산을 수행한다.
*/

