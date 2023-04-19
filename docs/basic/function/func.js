// 함수
// 재사용하기를 원하는 기능을 담는 방법
// 해당 기능이 필요할 때 매 번 전체 코드를 다시 작성하는 대신 함수로 선언하고 함수의 이름으로 호출하여 사용하면 효율적이다.

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

multiply(3, 1);
multiply(3, 3);
multiply(4, 45);

